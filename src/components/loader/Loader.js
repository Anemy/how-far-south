import React from 'react';

import './loader.scss';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner" />
      </div>
    </div>
  );
}
