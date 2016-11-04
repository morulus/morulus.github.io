import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Widget from '/Users/VladimirMorulus/WorkAreas/mahabra/morulus/brahmascreens/src/Widget.js';
import layerCake from './modules/layerCake/index';
import explorer from './modules/explorer/index';

Vendor.registerModule('layerCake', {
	exports: layerCake
});
Vendor.registerModule('explorer', {
	exports: explorer
});

// Side globals
window.React = React;
window.ReactDOM = ReactDOM;

export default {
	Widescreens: Widget
}
