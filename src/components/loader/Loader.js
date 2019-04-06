import React from 'react';

import './loader.scss';

export default function Loader(props) {
  return (
    <div className={`loader-container ${props.noMargin ? '' : 'loader-container-with-margin'}`}>
      <div className="loader">
        <div className="spinner" />
      </div>
    </div>
  );
}
