import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
unregister();


/**
 * TODO:
 * Title custom font? HOW FAR SOUTH
 * Proxima nova for text? or source sans pro?
 * Plak condensend for headline - 'Plak Black Extra Condensed'
 * Custom caps font over main page load.
 * Topography animation
 * 
 * Wheel turning in background?
 * Animate bikes in background?
 * Path coming down in background?
 * Spot onto seattle coming down?
 */