// import d3 from 'd3';
// import { geoPath } from 'd3-geo';
import * as d3 from 'd3';
import { geoProjection } from 'd3-geo';
import React, { Component } from 'react';
import * as topojson from 'topojson-client';

import './map.scss';

// TODO: Async load.
import topology from '../../data/map-data.topo.json';

function kavrayskiy7Raw(lambda, phi) {
  return [3 / (Math.PI * 2) * lambda * Math.sqrt(Math.PI * Math.PI / 3 - phi * phi), phi];
}

const kavrayskiy7RawScale = 158.837;

kavrayskiy7Raw.invert = function(x, y) {
  return [(Math.PI * 2) / 3 * x / Math.sqrt(Math.PI * Math.PI / 3 - y * y), y];
};

class Map extends Component {
  state = {
    width: 0,
    height: 0
  }

  svgRef = null;

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    this.updateWindowDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.mounted = true;
    this.updateWindowDimensions();
  }

  getMapDimensions = () => {
    // We want these spots on the map to scale to the screen.
    // The scale should be defined by either: It fits into 3 vertical screens (the horizontal just fits easy).
    // Or is scales fully to the width. (Max width = screen width or max height = screen height * 3).

    const maxWidth = this.state.width;

    // let mapHeight = this.state.height * 2;
    // let mapWidth = this.state.width;

    const ourScale = 1.2;
    const mapScale = 700 * ourScale;
    const mapHeight = 1382 * ourScale;
    const mapWidth = 765 * ourScale;

    const mapXOffset = 1240 * ourScale;
    const mapYOffset = 640 * ourScale;
    const mapTranslation = [mapXOffset, mapYOffset];

    if (this.state.width * (3 / 2) < this.state.height) {
      console.log('Very vertical screen - scale to fit the width');
    }

    return { mapWidth, mapHeight, mapTranslation, mapScale };
  }

  buildMap = () => {
    const svg = d3.select(this.svgRef);

    const { mapWidth, mapHeight, mapTranslation, mapScale } = this.getMapDimensions();

    svg.attr('width', mapWidth).attr('height', mapHeight);

    // Make sure the svg is cleaned.
    svg.selectAll('*').remove();

    // Pull in the map boundaries -> project & scale accordingly.
    const path = d3.geoPath(geoProjection(kavrayskiy7Raw).translate(mapTranslation).scale(mapScale));
    // const path = d3.geoPath(d3.geoAzimuthalEqualArea().translate(mapTranslation).scale(mapScale))

    svg.append('g')
      .attr('class', 'map-border')
      .selectAll('path')
      .data(topojson.feature(topology, topology.objects.customWorld).features)
      .enter().append('path')
      .attr('d', path)
      .each(function(d) { d.totalLength = this.getTotalLength(); })
      .attr('stroke-dasharray', function(d) { return d.totalLength + ' ' + d.totalLength; })
      .attr('stroke-dashoffset', function(d) { return d.totalLength; })
      // var path = document.querySelector('.path');
      // var length = path.getTotalLength();

    console.log('built map.');
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    if (this.mounted) {
      this.buildMap();
    }
  }

  render() {
    const { width, height } = this.state;
    
    return (
      <div className="map">
        <svg
          className="map-svg"
          ref={ref => this.svgRef = ref}
        />
      </div>
    );
  }
}

export default Map;

// d3.json(mapData, function(error, topology) {
// if (error) throw error;
