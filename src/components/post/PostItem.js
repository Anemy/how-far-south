import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import * as topojson from 'topojson-client';

import './post-item.scss';

import { CONTENT_TYPES } from '../../posts/constants';

import Loader from '../loader';

// TODO: Async load.
import topology from '../../data/map-data.topo.json';

// const mapScale = 700;

class PostItem extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired
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

    const path = d3.geoPath();

    svg.append('g')
      .attr('class', 'map-border')
      .selectAll('path')
      .data(topojson.feature(topology, topology.objects.customWorld).features)
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
    console.log('here');
    return (
      <svg
        className={`post-geo ${item.grid ? item.grid : ''}`}
        ref={ref => this.svgRef = ref}
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        version="1.1"
        width="600"
        height="600"
      />
    );
  }

  render() {
    const { item } = this.props;

    if (!item.type) {
      return (
        <p className={`post-text ${item.grid ? item.grid : ''}`}>
          {item}
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
          {item.items.map((item, index) => <PostItem item={item} key={index}/>)}
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
            src={item.url}
            alt={item.alt}
            loader={<Loader />}
          />
          {item.description && (
            <div className="post-image-description">
              {item.description}
            </div>
          )}
        </div>
      );
    } else if (item.type === CONTENT_TYPES.HTML) {
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