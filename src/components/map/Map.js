// import d3 from 'd3';
// import { geoPath } from 'd3-geo';
import * as d3 from 'd3';
import { geoProjection } from 'd3-geo';
import React, { Component } from 'react';
import * as topojson from 'topojson-client';

import './map.scss';

import Footer from '../footer';
import MapMarkers from './MapMarkers';

// TODO: Async load.
import topology from '../../data/map-data.topo.json';

import Posts from '../../posts';

// let mousePositions = [];

// function printMousePos(event) {
//   const rect = event.currentTarget.getBoundingClientRect();
//   const x = event.clientX - rect.left; // x position within the element.
//   const y = event.clientY - rect.top;  // y position within the element.
//   console.log('real x, y', x, y);

//   mousePositions.push({x, y});
// }

// window.globalFunc = () => {
//   console.log('mousePositions:', mousePositions);
// }

const mapMarkerRightAlignYThreshold = 625;
const markerTextDistanceFromMarker = 80;

function kavrayskiy7Raw(lambda, phi) {
  return [3 / (Math.PI * 2) * lambda * Math.sqrt(Math.PI * Math.PI / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [(Math.PI * 2) / 3 * x / Math.sqrt(Math.PI * Math.PI / 3 - y * y), y];
};

// const drawDelay = 3000;
const pathOffset = [-50, -18];

class Map extends Component {
  state = {
    width: 0,
    height: 0
  }

  svgRef = null;


  componentDidMount() {
    this.buildMap();
  }

  getMapDimensions = () => {
    const ourScale = 1.2;
    const mapScale = 700 * ourScale;
    const mapHeight = 1382 * ourScale;
    const mapWidth = 765 * ourScale;

    const mapXOffset = 1240 * ourScale;
    const mapYOffset = 624 * ourScale; // 640 * ourScale;
    const mapTranslation = [mapXOffset, mapYOffset];

    return { mapWidth, mapHeight, mapTranslation, mapScale };
  }

  buildMap = () => {
    const svg = d3.select(this.svgRef);

    const { mapWidth, mapHeight, mapTranslation, mapScale } = this.getMapDimensions();

    svg.attr('width', mapWidth).attr('height', mapHeight);
    d3.selectAll('.map-clouds').style('width', `${Math.ceil(mapWidth)}px`);
    d3.selectAll('.map-clouds').style('height', `${Math.ceil(mapHeight)}px`);
    // d3.selectAll('.map-clouds').style('background-color', 'purple');

    // Make sure the svg is cleaned.
    svg.selectAll('g').remove();

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
      .attr('stroke-dashoffset', function(d) { return d.totalLength; });

    // this.drawDescriptionPath();
    this.drawJourneyPath();

    // const elementToClickTrack = document.getElementById('toClickTrack');
    // elementToClickTrack.addEventListener('click', printMousePos);
  }

  // drawDescriptionPath = () => {
  //   const svg = d3.select(this.svgRef);

  //   const pathDescriptionGroup = svg.append('g')
  //     .attr('class', 'map-journey-description')
  //     .attr('transform', `translate(${pathOffset[0]},${pathOffset[1]})`);

  //   pathDescriptionGroup.append('text')
  //     .attr('x', 350)
  //     .attr('y', 10)
  //     .text('We\'re riding our bicycles from here to here');
  //     // .attr('text-anchor', leftAlign ? 'start' : 'end')
  //     // .attr('class', 'map-jour');

    
  // }

  addPostMarkerText = (markerIndex, passedInProgress, point, journeyPosts) => {
    const leftAlign = point.y < mapMarkerRightAlignYThreshold;

    const markerTextLink = journeyPosts.append('a')
      .attr('href', `/#/${point.post}`)
      .on('mouseover', function() {
        d3.select(`.map-circle-${markerIndex}`).transition()
          .ease(d3.easeElastic)
          .duration(500)
          .attr('r', 14);

        d3.select(`.map-circle-inner-${markerIndex}`).transition()
          .ease(d3.easeElastic)
          .duration(500)
          .attr('r', 4);

        d3.selectAll(`.marker-${markerIndex}`)
          .classed('marker-is-hovered', true);
      })
      .on('mouseout', function() {
        d3.select(`.map-circle-${markerIndex}`).transition()
          .ease(d3.easeQuad)
          .duration(160)
          .attr('r', 10);

        d3.select(`.map-circle-inner-${markerIndex}`).transition()
          .ease(d3.easeQuad)
          .duration(160)
          .attr('r', 2);

        d3.selectAll(`.marker-${markerIndex}`)
          .classed('marker-is-hovered', false);
      });
    
    journeyPosts.append('line')
      .attr('x1', point.x)
      .attr('y1', point.y)
      .attr('x2', point.x + (leftAlign ? (markerTextDistanceFromMarker + .1) : (-markerTextDistanceFromMarker - .1)))
      .attr('y2', point.y - 2.4)
      .attr('class', 'map-journey-marker-line');

    markerTextLink.append('text')
      .attr('x', point.x + (leftAlign ? markerTextDistanceFromMarker : -markerTextDistanceFromMarker))
      .attr('y', point.y - 4)
      .text(Posts[point.post].title)
      .attr('text-anchor', leftAlign ? 'start' : 'end')
      .attr('class', `map-journey-post marker-${markerIndex}`)
      .classed('map-post-todo', passedInProgress)
      .classed('map-post-completed', !passedInProgress);

    markerTextLink.append('text')
      .attr('x', point.x + (leftAlign ? markerTextDistanceFromMarker : -markerTextDistanceFromMarker))
      .attr('y', point.y + 14)
      .text(point.title)
      .attr('text-anchor', leftAlign ? 'start' : 'end')
      .attr('class', `map-journey-post marker-${markerIndex} map-journey-post-text`)
      .classed('map-post-todo', passedInProgress)
      .classed('map-post-completed', !passedInProgress);
  }

  addMarkerText = (markerIndex, passedInProgress, point, journeyPosts) => {
    const leftAlign = point.y < mapMarkerRightAlignYThreshold;

    journeyPosts.append('line')
      .attr('x1', point.x)
      .attr('y1', point.y)
      .attr('x2', point.x + (leftAlign ? markerTextDistanceFromMarker : -markerTextDistanceFromMarker))
      .attr('y2', point.y)
      .attr('class', 'map-journey-marker-line');

    journeyPosts.append('text')
      .attr('x', point.x + (leftAlign ? markerTextDistanceFromMarker : -markerTextDistanceFromMarker))
      .attr('y', point.y + 4)
      .text(point.title)
      .attr('text-anchor', leftAlign ? 'start' : 'end')
      .attr('class', `map-journey-post marker-${markerIndex} map-journey-post-text`)
      .classed('map-post-todo', passedInProgress)
      .classed('map-post-completed', !passedInProgress);
  }

  addPostMarker = (markerIndex, passedInProgress, point, isPost, journeyBubbles) => {
    const innerCircle = journeyBubbles
      .append('circle')
      .attr('cx', point.x)
      .attr('cy', point.y)
      .attr('r', 2)
      .attr('class', `map-journey-circle-inner map-circle-inner-${markerIndex}`)
      .classed('map-circle-todo', passedInProgress)
      .classed('map-circle-completed', !passedInProgress);

    if (isPost) {
      journeyBubbles
        .append('a')
        .attr('href', `/#/${point.post}`)
        .append('circle')
        .attr('cx', point.x)
        .attr('cy', point.y)
        .attr('r', 10)
        .on('mouseover', function() {
          d3.select(this).transition()
            .ease(d3.easeElastic)
            .duration(500)
            .attr('r', 14);

          innerCircle.transition()
            .ease(d3.easeElastic)
            .duration(500)
            .attr('r', 4);

          d3.selectAll(`.marker-${markerIndex}`)
            .classed('marker-is-hovered', true);
        })
        .on('mouseout', function() {
          d3.select(this).transition()
            .ease(d3.easeQuad)
            .duration(160)
            .attr('r', 10);

          innerCircle.transition()
            .ease(d3.easeQuad)
            .duration(160)
            .attr('r', 2);

          d3.selectAll(`.marker-${markerIndex}`)
            .classed('marker-is-hovered', false);
        })
        .attr('class', `map-journey-circle map-circle-${markerIndex}`)
        .classed('map-circle-todo', passedInProgress)
        .classed('map-circle-completed', !passedInProgress);
      }
  }

  drawJourneyPath = () => {
    const svg = d3.select(this.svgRef);

    const journeyPaths = svg.append('g')
      .attr('class', 'map-journey-path')
      .attr('transform', `translate(${pathOffset[0]},${pathOffset[1]})`);

    const journeyBubbles = svg.append('g')
      .attr('class', 'map-journey-bubbles')
      .attr('transform', `translate(${pathOffset[0]},${pathOffset[1]})`);

    const journeyPosts = svg.append('g')
      .attr('class', 'map-journey-posts')
      .attr('transform', `translate(${pathOffset[0]},${pathOffset[1]})`);

    let lastPoint = MapMarkers[0];
    let currentPath = '';
    let passedInProgress = false;
    for (let i = 0; i < MapMarkers.length; i++) {
      const point = MapMarkers[i];

      if (point.title) {
        this.addPostMarker(i, passedInProgress, point, !!point.post, journeyBubbles);

        if (point.post) {
          this.addPostMarkerText(i, passedInProgress, point, journeyPosts);
        } else {
          this.addMarkerText(i, passedInProgress, point, journeyPosts);
        }
      }

      if (i === 0) {
        currentPath += `M ${point.x} ${point.y} `;

        if (point.inprogress) {
          passedInProgress = true;
        }
        continue;
      }

      if (point.inprogress) {
        journeyPaths.append('path')
          .attr('d', currentPath)
          .attr('class', 'map-path-completed');

        currentPath = `M ${lastPoint.x} ${lastPoint.y} L ${point.x} ${point.y}`;

        journeyPaths.append('path')
          .attr('d', currentPath)
          .attr('class', 'map-path-inprogress');

        currentPath = `M ${point.x} ${point.y} `;

        passedInProgress = true;
      } else {
        // TODO: Here we can also update the color of the points if it's valid based on passed in progress.

        currentPath += ` L ${point.x} ${point.y}`;
      }

      lastPoint = point;
    }

    if (passedInProgress) {
      journeyPaths.append('path')
        .attr('d', currentPath)
        .attr('class', 'map-path-todo');
    } else {
      journeyPaths.append('path')
        .attr('d', currentPath)
        .attr('class', 'map-path-completed');
    }
  }

  render() {    
    return (
      <div className="map-container">
        <h1 className="map-title">
          HOW <span>F<span className="map-rotate">A</span>R</span> SOUTH
        </h1>
        <div className="map-clouds"/>
        <div className="map" id="toClickTrack">
          <svg
            className="map-svg"
            ref={ref => this.svgRef = ref}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00bc9b" />
                <stop offset="100%" stopColor="#5eaefd" />
              </linearGradient>
              <linearGradient id="in-progress" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60efb8" />
                <stop offset="100%" stopColor="#f1ffab" />
              </linearGradient>

              <filter id="dropshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="5" dy="5" result="offsetblur"/> 
                <feOffset dx="-5" dy="-5" result="offsetblur"/>
                <feMerge> 
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map;

// d3.json(mapData, function(error, topology) {
// if (error) throw error;
