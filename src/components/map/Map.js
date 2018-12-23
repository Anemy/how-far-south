import React, { Component } from 'react';

import './map.scss';

// TODO: Async load.
// import mapData from '../../data/map-data.topo.json';

class Map extends Component {
  svgRef = null;

  componentWillMount() {
    this.height = 500;
    this.width = 500;
  }

  componentDidMount() {
    d3.json(url, function(error, topology) {
      if (error) throw error;
      
      console.log("topojson", topology)
      var geojson = topojson.feature(topology, topology.objects.counties);
      console.log("geojson", geojson)
    
      svg.selectAll("path")
          .data(geojson.features)
        .enter().append("path")
          .attr("d", path);
    });
  }

  render() {
    return (
      <div className="map">
        <svg
          className="map-svg"
          ref={ref => svgRef = ref}
        />
      </div>
    );
  }
}

export default Map;