import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Widget from '/Users/VladimirMorulus/WorkAreas/mahabra/morulus/brahmascreens/src/Widget.js';
import layerCake from './modules/layerCake/index';
import explorer from './modules/explorer/index';
import ScorePanel from './modules/ScorePanel/index';
import middlewares from './middlewares/score';

Vendor.registerModule('morulus/layerCake', {
	exports: layerCake
});

Vendor.registerModule('morulus/explorer', {
	exports: explorer
});

Vendor.registerModule('morulus/ScorePanel', {
	exports: ScorePanel
});

// Side globals
window.React = React;
window.ReactDOM = ReactDOM;

const defaultState = {
	score: {
		enabled: true,
		loading: false,
		title: false
	}
}

class Me extends Widget {
	constructor(selector, config) {
		super(selector, config, defaultState, middlewares);
	}
}

export default {
	Widescreens: Me
}
