import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Widget from '/Users/VladimirMorulus/WorkAreas/mahabra/morulus/brahmascreens/src/Widget.js';
import layerCake from './modules/layerCake/';
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

function defaultCompare(a, b) {
	return a===b;
}

function distinct(selector, customCompare, defaultLast = undefined) {
	let compare = customCompare||defaultCompare;
	return function distinctFilter(handler) {
		let last = defaultLast;
		return function subscriber(state) {
			let selected = selector(state);
			if (!compare(selected, last)) {
				last = selected;
				handler(selected);
			}
		}
	}
}


// Side globals
window.React = React;
window.ReactDOM = ReactDOM;

const defaultState = {
	score: {
		enabled: true,
		loading: false,
		title: false
	},
	cover: {
		state: 'normal'
	}
}

/**
* Selector for cover state
*/
function coverStateSelector(state) {
	return state.cover.state;
}

/**
* Selector for something change with view state
*/
function viewStateSelector(state) {
	return state.currentScreen[0]+','+state.currentScreen[1]+','+String(state.purview.enabled);
}

class Me extends Widget {
	constructor(selector, config) {
		super(selector, config, defaultState, middlewares);

		/**
		 * Listen for state
		 */
		let onCoverStateChange = distinct(coverStateSelector)((state) => {
				$(this.selector).removeClass('coverMinimized');
				switch(state) {
					case 'minimized':
						 $(this.selector).addClass('coverMinimized');
					break;
				}
		 });
		this.subscribe(onCoverStateChange);
		/**
		 * Listen for screen change or purview change
		 */

		let onSomeViewChanged = distinct(viewStateSelector)((state) => {
			this.dispatch({
        type: 'COVER_STATE',
        state: 'normal'
      });
		});

		this.subscribe(onSomeViewChanged);
	}
}

export default {
	Widescreens: Me
}
