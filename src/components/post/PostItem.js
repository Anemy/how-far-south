import _ from 'lodash';
import * as d3 from 'd3';
import { geoProjection } from 'd3-geo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import * as topojson from 'topojson-client';

import './post-item.scss';

import { CONTENT_TYPES } from '../../posts/constants';
import { kavrayskiy7Raw } from '../../constants';

import Loader from '../loader';

// TODO: Async load.
import topology from '../../data/map-data.topo.json';

// const mapScale = 700;

const mapSizeX = 500;
const mapSizeY = 500;

class PostItem extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired,
    onImageClick: PropTypes.func
  }

  svgRef = null;

  componentDidMount() {
    if (this.props.item.type === CONTENT_TYPES.GEO) {
      this.buildGeo();
    }
  }

  buildGeo = () => {
    const svg = d3.select(this.svgRef);

    svg.selectAll('g').remove();


    let boundaryMinX;
    let boundaryMinY;
    let boundaryMaxX;
    let boundaryMaxY;
    const boundaries = _.filter(topojson.feature(topology, topology.objects.customWorld).features, feature => {
      if (feature.properties.ISO_A2 === this.props.item.countryCode) {
        // console.log('feature', feature);
        // for () {
        feature.geometry.coordinates.forEach(coordinatesArray => {
          coordinatesArray.forEach(coordinates => {
            coordinates.forEach(coordinate => {
              // if (Math.random() > 0.95) {
              //   console.log('coordinate', coordinate);
              // }
              if (boundaryMinX === undefined) {
                boundaryMinX = coordinate[0];
                boundaryMinY = coordinate[1];
                boundaryMaxX = coordinate[0];
                boundaryMaxY = coordinate[1];
              }
              if (coordinate[0] < boundaryMinX) {
                boundaryMinX = coordinate[0];
              }
              if (coordinate[1] < boundaryMinY) {
                boundaryMinY = coordinate[1];
              }

              if (coordinate[0] > boundaryMaxX) {
                boundaryMaxX = coordinate[0];
              }
              if (coordinate[1] > boundaryMaxY) {
                boundaryMaxY = coordinate[1];
              }
            });
          });
        });
        // }
      }

      return feature.properties.ISO_A2 === this.props.item.countryCode
    });

    console.log('boundaries: ', boundaryMinX, boundaryMinY);

    // const path = d3.geoPath();
    // const maxSizeToCover = Math.max(Math.abs(boundaryMinX - boundaryMaxX), Math.abs(boundaryMinY - boundaryMaxY));
    // const normalizedCover = (maxSizeToCover / 2000);
    // const mapScale = normalizedCover * 700 * 100;
    // const mapXTranslation = boundaryMinX * 15 + 3600;
    // const mapYTranslation = 1000 - boundaryMinY * 15;
    // const mapTranslation = [mapXTranslation, mapYTranslation];
    // console.log('mapScale', mapScale, 'mapTranslation', mapTranslation);

    const geoWidth = Math.abs(boundaryMinX - boundaryMaxX);
    const geoHeight = Math.abs(boundaryMinY - boundaryMaxY);

    const maxSizeToCover = Math.min(geoWidth / mapSizeX, geoHeight /mapSizeY);
    const mapScale = maxSizeToCover * 100000;
    // .translate(mapTranslation)
    const path = d3.geoPath(geoProjection(kavrayskiy7Raw).scale(mapScale));

    svg.append('g')
      .attr('class', 'map-border')
      .selectAll('path')
      .data(boundaries)
      .enter().append('path')
      .attr('d', path)
      .each(function(d) { d.totalLength = this.getTotalLength(); })
      .attr('stroke-dasharray', function(d) { return d.totalLength + ' ' + d.totalLength; })
      .attr('stroke-dashoffset', function(d) { return d.totalLength; });
  }

  renderItemList = item => {
    return (
      <ul className="post-list">
        {item.content.map((listitem, index) => (
          <li key={index}>
            <PostItem item={listitem} />
          </li>
        ))}
      </ul>
    )
  }

  renderGeo = item => {
    return (
      <svg
        className={`post-geo ${item.grid ? item.grid : ''}`}
        ref={ref => this.svgRef = ref}
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        version="1.1"
        width="500"
        height="500"
      />
    );
  }

  render() {
    const { onImageClick, item } = this.props;

    if (!item.type) {
      return (
        <p className={`post-text ${item.grid ? item.grid : ''}`}>
          {item}
        </p>
      );
    } else if (item.type === CONTENT_TYPES.TEXT) {
      return (
        <p className={`post-text ${item.grid ? item.grid : ''}`}>
          {item.text}
        </p>
      );
    } else if (item.type === CONTENT_TYPES.EXTERNAL_LINK) {
      return (
        <a
          className="post-link nice-link"
          href={item.url}
          data-title={item.text}
          rel="noopener noreferrer"
          target={item.target ? item.target : '_blank'}
        >
          {item.text}
        </a>
      );
    } else if (item.type === CONTENT_TYPES.INTERNAL_LINK) {
      return (
        <Link
          className="post-link nice-link"
          to={item.url}
          data-title={item.text}
        >
          {item.text}
        </Link>
      );
    } else if (item.type === CONTENT_TYPES.GEO) {
      return this.renderGeo(item);
    } else if (item.type === CONTENT_TYPES.GRID) {
      return (
        <div className={`row post-grid ${item.grid ? item.grid : ''}`}>
          {item.items.map((item, index) => <PostItem onImageClick={imageUrl => onImageClick(imageUrl)} item={item} key={index}/>)}
        </div>
      );
    } else if (item.type === CONTENT_TYPES.HEADING) {
      return (
        <h2 className={`post-heading ${item.grid ? item.grid : ''}`}>
          {item.text}
        </h2>
      );
    } else if (item.type === CONTENT_TYPES.IMAGE) {
      return (
        <div className={`post-image-container ${item.grid ? item.grid : ''}`}>
          <Img
            className={`post-image`}
            onClick={() => onImageClick(item.url)} 
            src={item.url}
            alt={item.alt}
            loader={<Loader />}
            unloader={<img className={`post-image`} src={item.url} alt={item.alt} onClick={() => onImageClick(item.url)}/>}
          />
          {item.description && (
            <div className="post-image-description">
              {item.description}
            </div>
          )}
        </div>
      );
    } else if (item.type === CONTENT_TYPES.GDRIVE_IMAGE) {
      return (
        <div className={`post-image-container ${item.grid ? item.grid : ''}`}>
          <iframe
            className={`post-image`}
            src={item.url}
          />
          {item.description && (
            <div className="post-image-description">
              {item.description}
            </div>
          )}
        </div>
      );
    }else if (item.type === CONTENT_TYPES.HTML) {
      return <div
        className={`post-html ${item.grid ? item.grid : ''}`}
        dangerouslySetInnerHTML={{__html: item.html}
      }/>;
    } else if (item.type === CONTENT_TYPES.LIST) {
      return this.renderItemList(item);
    } else {
      new Error(`Uknown type: ${item.type}`)
    }
  }
}

export default PostItem;