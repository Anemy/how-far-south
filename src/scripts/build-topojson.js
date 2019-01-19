/**
 * This script generate topojson of the Americas and USA state boundaries.
 * To use this script a few things must be done first:
 * 1. Download the zips of 10m cultural boundaries for:
 *    - Admin 1 – States, provinces - WITHOUT large lakes
 *    from http://www.naturalearthdata.com/downloads/10m-cultural-vectors/
 * 2. Unzip the downloaded files and place their contents into a folder in
 *    this directory named `ne_10m_admin_1_states_provinces_lakes`.
 * 3. Run this script from the parent dir. `npm run build-topojson`
 * 4. The exported topojson file should now be a relatively optimized topojson with
 *    the Americas countries and USA subdivisions.
 * - The simplification/optimization of the map is a tweakable parameter `simplifyTopojsonPercentage`.
 * - Mapshaper is a useful tool for debugging:
 *   http://mapshaper.org
 *   https://github.com/mbloch/mapshaper
**/

const _ = require('lodash');
const fs = require('fs');
const mapshaper = require('mapshaper');
const topojson = require('topojson');

const outputFileName = 'map-data.topo.json';
const directory = __dirname;

// https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify
const simplifyTopojsonPercentage = 0.2 /* 2% */;

const countryIsoCodes = require(`./iso-countries-with-regions-and-countries.json`);

// const countryIsosToIgnore = {
//   // CA: 'CA', // Canada
//   GL: 'GL', // Greenland,
//   GS: 'GS' // South Georgia and the South Sandwich Islands.
// };
const countryIsosToKeep = {
  MX: 'MX',
  GT: 'GT',
  SV: 'SV',
  HN: 'HN',
  NI: 'NI',
  CR: 'CR',
  PA: 'PA',
  CO: 'CO',
  EC: 'EC',
  PE: 'PE',
  BO: 'BO',
  CL: 'CL',
  AR: 'AR'
};
const countryIsosToBreakIntoSubdivisions = {
  US: 'US',
  CA: 'CA'
};
// const stateIsosToIgnore = {
//   'US-AK': 'US-AK',
//   'US-HI': 'US-HI',
//   'US-GU': 'US-GU',
//   'US-MP': 'US-MP',
//   'US-AS': 'US-AS'
// };
const stateIsosToKeep = {
  'US-CA': 'US-CA',
  'US-WA': 'US-WA',
  'US-OR': 'US-OR'
};
const regionToInclude = 'Americas';

const countriesWeCareAboutMappedByIso2 = {};
_.each(countryIsoCodes, country => {
  if (country.region === regionToInclude && countryIsosToKeep[country['alpha-2']]) {
    countriesWeCareAboutMappedByIso2[country['alpha-2']] = country;
  }
})

console.log('Importing and merging the shape files into topojson...');
mapshaper.runCommands(`-i ${directory}/ne_10m_admin_1_states_provinces_lakes/ne_10m_admin_1_states_provinces_lakes.shp ${directory}/ne_10m_admin_1_states_provinces_lakes/ne_10m_admin_1_states_provinces_lakes.dbf combine-files -o ${directory}/${outputFileName} format=topojson`, err => {
  if (err) {
    console.error('Error finding shapefiles, importing shapefiles, or running mapshaper. ', err);
    process.exit(1);
  }

  const combinedRawTopojson = require(`./${outputFileName}`);

  if (!combinedRawTopojson ||
      _.isEmpty(combinedRawTopojson)
  ) {
    console.error(`ERROR: Could not import the merged topojson file '${outputFileName}'.`);
    process.exit(1);
  }

  const outputObjectName = 'customWorld';
  const newTopojsonGeometries = [];

  /**
   * Expected format:
   * Countries will have keys:
   * - ISO_A2
   * States/Provinces will have keys:
   * - iso_a2
   * - iso_3166_2
  **/
  _.each(combinedRawTopojson.objects, (topojsonObject, topojsonObjectKey) => {
    _.each(topojsonObject.geometries, geometry => {
      const {
        arcs,
        properties,
        type,
      } = geometry;
  
      if (!arcs || arcs.length === 0) {
        return;
      }

      const newGeometry = {
        arcs: JSON.parse(JSON.stringify(arcs)),
        properties: {
          ISO_3166_2: ''
        },
        type,
      };

      // const isCountry = !!properties.iso_a2;
  
      let countryIso = properties.ISO_A2 ? properties.ISO_A2 : properties.iso_a2;
      let stateIso = properties.iso_3166_2;

      // Override French Guiana.
      if (stateIso === 'FR-GF') {
        countryIso = 'GF';
        stateIso = null;
      }

      let doesIsoExistInMapping = (countriesWeCareAboutMappedByIso2[countryIso] && !countryIsosToBreakIntoSubdivisions[countryIso]);
      let isSubdividedCountry = false;

      if (countryIsosToBreakIntoSubdivisions[countryIso] && stateIsosToKeep[stateIso]) {
        doesIsoExistInMapping = true;
        isSubdividedCountry = true;
      }

      if (doesIsoExistInMapping) {
        if (isSubdividedCountry) {
          newGeometry.properties.ISO_3166_2 = stateIso;
          newGeometry.id = stateIso;

          newTopojsonGeometries.push({
            arcs: JSON.parse(JSON.stringify(arcs)),
            id: countryIso,
            properties: {
              id: countryIso,
              ISO_A2: countryIso
            },
            type
          });
        } else {
          newGeometry.id = countryIso;
        }
  
        newGeometry.properties.ISO_A2 = countryIso;
        newGeometry.properties.id = newGeometry.id;

        newTopojsonGeometries.push(newGeometry);
      }
    });
  });
  
  // Remove the old objects.
  const topojsonObjectsKeys = Object.keys(combinedRawTopojson.objects);
  for (let i = 0; i < topojsonObjectsKeys.length; i++) {
    delete combinedRawTopojson.objects[topojsonObjectsKeys[i]];
  }

  combinedRawTopojson.objects = {};
  
  combinedRawTopojson.objects[outputObjectName] = {
    geometries: newTopojsonGeometries,
    type: 'GeometryCollection',
  };

  const filteredTopojson = topojson.filter(combinedRawTopojson);
  
  const jsonOutput = JSON.stringify(filteredTopojson);
  
  fs.writeFile(`${directory}/${outputFileName}`, jsonOutput, 'utf8', () => {
    console.log(`Created filtered topojson file '${outputFileName}'.`);

    // With our new topojson file we can now simplify the arcs and prune the unused arcs.
    console.log('Simplifying the topojson...');

    const input = `-i ${directory}/${outputFileName}`;
    const dissolve = `-dissolve id copy-fields=ISO_A2,ISO_3166_2`;
    const simplification = `-simplify ${simplifyTopojsonPercentage}`;
    const sort = `-sort ISO_3166_2 descending`;
    const output = `-o force ${directory}/${outputFileName} format=topojson`;

    mapshaper.runCommands(`${input} ${dissolve} ${simplification} ${output}`, shaperErr => { 
      if (shaperErr) {
        console.error('Error simplifying topojson output. ', shaperErr);
        process.exit(1);
      }

      console.log('Simplified the topojson.');
    });
  });
});
