(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["me"] = factory();
	else
		root["me"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(2);

	var _Widget = __webpack_require__(6);

	var _Widget2 = _interopRequireDefault(_Widget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		Widescreens: _Widget2.default
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700&subset=latin,cyrillic);", ""]);
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300,600,400&subset=latin,cyrillic);", ""]);
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Lato:100,300);", ""]);

	// module
	exports.push([module.id, "body {\n\tbackground-color:black;\n\tpadding:0px;\n\tmargin:0px;\n}\n\n#screens {\n\tposition:absolute;\n\tmin-width:100%;\n\tmin-height:100%;\n\tfont-size: 12px;\n}\n\n@media screen and (min-width:960px) {\n\n\t#screens{\n\t\tmin-width:960px;\n\t\tfont-size:18px;\n\t}\n}\n\n\n\n#tutorial-keyboard {\n\tposition: absolute;\n\tleft:20px;bottom:20px;\n\tdisplay:table;\n\tpadding: 30px;\n\tbackground-color: transparent;\n\tborder-radius: 15px;\n}\n\n#tutorial-keyboard > * {\n\tmargin:0 auto;\n\tdisplay:table;\n}\n\n#infoblock {\n\tposition: absolute;\n\tleft:20px;bottom:20px;\n}\n\n#screens pre {\n\tdisplay:table;\n\tmax-width:100%;\n\tfont-size:16px;\n\tmargin: 0 auto;\n}\n\n#screens pre code {\n\ttext-align:left;\n}\n\n#screens center {\n\tpadding:0 0 20px 0;\n}\n\n#screens .row {\n\tmargin:0 -20px 0 0;\n}\n\n#screens .row:after {\n\tcontent:\"\";\n\tclear:both;\n\tdisplay:block;\n}\n\n#screens .row .col-md-6 {\n\twidth: 49%;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tpadding: 0 20px 0 0;\n}\n\n#screens .screen {\n\tbackground-position:center center;\n\tbackground-repeat: no-repeat;\n\tbackground-color:transparent;\n\tbackground-size:cover;\n}\n\n#screens .screen > article {\n\tposition:absolute;\n\ttop:50%;left:50%;\n\t-webkit-transform:translateY(-50%) translateX(-50%);\n\t-ms-transform:translateY(-50%) translateX(-50%);\n\ttransform:translateY(-50%) translateX(-50%);\n\n\tcolor:white;\n\tfont-family: 'Lato', \"Arial\";\n\n\tdisplay: box;\n\tbox-orient: horizontal;\n\tbox-align:center;\n\n\tfont-weight:100;\n\tdisplay: table;\n\twidth: 75%;\n\ttext-align: center;\n}\n\n#screens .screen > article.topleft {\n\ttop:20px;\n\tleft:100px;\n\tmargin:0;\n\twidth:auto;\n}\n\n#screens .screen > article.panel {\n\tbackground-color:rgba(0,0,0,0.85);\n\tborder-radius: 16px;\n\tpadding:20px 20px;\n\ttext-align:left;\n}\n\n#screens .screen > article summary {\n\tfont-family:\"Roboto\", \"Arial\";\n\tfont-size:15px;\n\tfont-weight: 100;\n\ttext-align:center;\n\tcolor:white;\n}\n\n#screens .screen > article summary a {\n\tfont-family:\"Roboto\", \"Arial\";\n\tfont-size:15px;\n\tfont-weight: 400;\n\tcolor:#00429a;\n}\n\n#screens .screen > article h1 {\n\tcolor:rgb(255,255,255);\n\tfont-family: 'Lato', \"Arial\";\n\tfont-size:82px;\n\tfont-weight:100;\n\tdisplay: block;\n\twidth: auto;\n\ttext-align: center;\n\tmargin:40px 0 5px 0;\n}\n\n#screens .screen > article h1.black {\n\tcolor:rgb(36, 36, 36);\n\tfont-weight: 400;\n\ttext-shadow: 0px 3px 2px rgba(255,255,255,0.8);\n}\n\n#screens .screen > article h2 {\n\tcolor:white;\n\tfont-family: 'Lato', \"Arial\";\n\tfont-size:2.8em;\n\tfont-weight:600;\n\tdisplay: block;\n\twidth: auto;\n\ttext-align: center;\n\tmargin:40px 0 60px 0;\n\tline-height:40px;\n\ttext-shadow: 0 0 4px rgba(255, 255, 255, 0.74);\n\tmargin:0 0 0.3em 0;\n}\n\n#screens .screen > article h2.glamo {\n\tcolor:rgb(0, 0, 0);\n\tfont-size:120px;\n}\n\n\n#screens .screen > article h3 {\n\tcolor: #667180;\n    font-family: 'Roboto Condensed', \"Arial\";\n    font-size: 1.2em;\n    font-weight: 100;\n    display: block;\n    width: auto;\n    text-align: center;\n    margin: 0 0 50px 0;\n    line-height: 40px;\n    letter-spacing: 2px;\n}\n\n#screens .screen > article h2.black {\n\tcolor:rgb(26, 26, 26);\n\tfont-weight: 400;\n\tfont-size:56px;\n\ttext-shadow: 0px 3px 2px rgba(255,255,255,0.8);\n}\n\n#screens .screen > article h2.strong {\n\ttext-shadow: 0px 3px 2px #000;\n\tfont-weight: 400;\n}\n\n#screens .screen > article big {\n\tcolor:rgb(0, 0, 0);\n\tfont-family: 'Roboto Condensed', \"Arial\";\n\tfont-size:58px;\n\tfont-weight:100;\n\tdisplay: block;\n\twidth: auto;\n\ttext-align: center;\n\tmargin:0 0 20px 0;\n\ttext-shadow:2px -2px 1px white;\n}\n\n\n#screens .screen > article a {\n\ttext-decoration: none;\n\tcursor:pointer;\n\tcolor:#29bb7a;\n\t-webkit-transition:color 0.34s ease;\n\ttransition:color 0.34s ease;\n}\n\n\n#screens .screen > article a:hover {\n\tcolor:#39e297;\n}\n\n#screens .screen > article a button {\n\t-webkit-transition:background 0.25s ease;\n\ttransition:background 0.25s ease;\n\tborder-radius: 16px;\n\tbackground-color:rgba(3, 86, 179, 1);\n\tcolor:white;\n\tfont-family: \"Roboto Condensed\",\"Arial\";\n\tfont-weight:400;\n\ttext-align:center;\n\tborder:0;\n\tline-height:50px;\n\tpadding:0 20px;\n\tfont-size: 24px;\n\tcursor:pointer;\n}\n\n#screens .screen > article a:hover button {\n\tbackground-color:rgba(0, 62, 131, 1);\n}\n\n#screens .screen > article i.ts {\n\tfont-size:1.2em;\n\tfont-weight:300;\n\tcolor:rgb(162, 209, 155);\n\tfont-family: \"Roboto\";\n}\n\n#screens .screen > article i.ts b {\n\tcolor:white;\n\tfont-weight:100;\n\tfont-size:1.2em;\n}\n\n.representation {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    margin: 0 auto;\n    width: 60%;\n    max-width:100%;\n    font-size: 24px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.representation >div {\n\tpadding:0 20px;\n}\n\n.representation >div >a {\n\tword-wrap: normal;\n\twhite-space: nowrap;\n\tcolor:#29bb7a;\n}\n\n.representation >div >a:hover {\n\tcolor:rgb(66, 132, 218);\n}\n\n/* Shares */\n.share-panel {\n\tposition:absolute;\n\ttop:20px;\n\tright:68px;\n}\n\n.share-panel .circle {\n\t  display: block;\n\t  float: left;\n\t  width: 50px;\n\t  height: 50px;\n\t  background-color: rgb(0, 0, 0);\n\t  border-radius: 25px;\n\t  position: relative;\n\t  margin-left: 8px;\n}\n\n.share-panel .circle > svg {\nposition: absolute;\n  left: 25%;\n  top: 25%;\n  width: 50%;\n  height: 50%;\n}\n\n/* Home panel */\n.home-panel {\n\theight: 50px;\n\tborder-radius: 25px;\n\twidth:auto;\n\tposition:absolute;\n\ttop:20px;\n\tleft:-25px;\n\ttext-align:left;\n\tpadding:0 25px 0 50px;\n\tline-height:50px;\n\tcolor:white;\n\tfont-family:\"Roboto Condensed\", \"Arial\";\n\tfont-weight:600;\n\tbackground-color:black;\n\tfont-size:26px;\n\ttext-transform: uppercase;\n}\n\n/* Backgrounds */\n\n#screens .screen.bluegrd {\n\tbackground: #7db9e8; /* Old browsers */ /* FF3.6+ */\n\tbackground: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#7db9e8), color-stop(50%,#2989d8), color-stop(100%,#1e5799)); /* Chrome,Safari4+ */\n\tbackground: -webkit-radial-gradient(center, ellipse cover,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10+,Safari5.1+ */ /* Opera 12+ */ /* IE10+ */\n\tbackground: -webkit-radial-gradient(center ellipse,  #7db9e8 0%,#2989d8 50%,#1e5799 100%);\n\tbackground: radial-gradient(ellipse at center,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(7);

	__webpack_require__(8);

	var _Widget = __webpack_require__(12);

	var _Widget2 = _interopRequireDefault(_Widget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Widget2.default;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	@author Vladimir Kalmykov (http://morulus.github.com)
	*/
	(function (jQuery) {
		var jQuery = jQuery;
		jQuery.tie = jQuery.fn.tie = function (func) {
			func.apply(this, [this]);
			return this;
		};

		jQuery.under = jQuery.fn.under = function (obj, options) {
			if ("string" === typeof obj) obj = jQuery('<' + obj + '/>', options || {});
			return jQuery(obj).prependTo(this);
		};

		jQuery.put = jQuery.fn.put = function (obj, options) {
			if ("string" === typeof obj) obj = jQuery('<' + obj + '/>', options || {});
			return jQuery(obj).appendTo(this);
		};

		jQuery.and = jQuery.fn.and = function (obj, options) {
			if ("string" === typeof obj) obj = jQuery('<' + obj + '/>', options || {});
			return jQuery(obj).insertAfter(this);
		};

		jQuery.condition = jQuery.fn.condition = function (condit, onTrue, onFalse) {
			if (condit) {
				if (typeof onTrue == 'function') return onTrue.call(this, condit);
				return this;
			} else {
				if (typeof onFalse == 'function') return onFalse.call(this);
				return this;
			};
		};

		jQuery.ramp = jQuery.fn.ramp = function () {
			var current = this;
			for (var i = 0; i < arguments.length; i++) {
				var variable = arguments[i];
				if (variable instanceof Array) {
					for (var a = 0; a < variable.length; a++) {
						jQuery(current).put(variable[variable]);
					};
					current = jQuery(current).parent();
				} else {
					current = jQuery(current).put(arguments[i]);
				};
			};
			return current;
		};
	})(jQuery);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "[data-dirty] {\n\topacity:0;\n\t-webkit-transition:opacity 1s ease;\n\ttransition:opacity 1s ease;\n}\n\n.brahma-widgets-screens {\n\tposition:absolute;\n\ttop:0px;\n\tleft:0px;\n\twidth:100%;\n\theight:100%;\n\toverflow:hidden;\n}\n\n.brahma-widgets-screens >div:first-child {\n\tposition:absolute;\n\twidth:100%;\n\theight:100%;\n\t-webkit-perspective: 1000;\n\tperspective: 1000;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\t-webkit-transition:-webkit-transform 1s cubic-bezier(.43,.2,.46,.8);\n\ttransition:-webkit-transform 1s cubic-bezier(.43,.2,.46,.8);\n\ttransition:transform 1s cubic-bezier(.43,.2,.46,.8);\n\ttransition:transform 1s cubic-bezier(.43,.2,.46,.8), -webkit-transform 1s cubic-bezier(.43,.2,.46,.8);\n}\n\n.brahma-widgets-screens >div.noTransit {\n\t-webkit-transition:none !important;\n\ttransition: none !important;\n}\n\n.brahma-widgets-screens >div:first-child > * {\n\tposition:absolute;\n\twidth:100%;\n\theight:100%;\n\tbackground-size:cover;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map {\n\tposition:absolute;\n\tright:4px;\n\tbottom:4px;\n\t-webkit-transition:opacity,bottom,right 0.5s ease;\n\ttransition:opacity,bottom,right 0.5s ease;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map.mobile {\n\ttop:50%;\n\tleft:50%;\n\tright:auto;\n\tbottom:auto;\n\topacity:0;\n\t-webkit-transform:scale(5) translateY(-25%) translateX(-25%);\n\t-ms-transform:scale(5) translateY(-25%) translateX(-25%);\n\ttransform:scale(5) translateY(-25%) translateX(-25%);\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map.mobile.visible {\n\topacity:0.75;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map >div.screen-box-layer {\n\tclear:both;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map >div.screen-box-layer >div {\n\tfloat:left;\n\twidth:12px;\n\theight:12px;\n\tbackground-color:rgba(255,255,255,0.5);\n\tmargin:0 2px 2px 0;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map >div.screen-box-layer >div.screen-box-empty {\n\tbackground-color:transparent;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map >div.screen-box-layer >div.screen-box-item {\n\tcursor:pointer;\n}\n\n.brahma-widgets-screens >.dharma-widgets-screens-map >div.screen-box-layer >div.current {\n\tbackground-color:#fff;\n}\n\n@media screen and (min-height:300px) {\n\n\t.brahma-widgets-screens >.dharma-widgets-screens-map {\n\t\tright:68px;\n\t\tbottom:68px;\n\t}\n}\n\n@media screen and (min-height:600px) {\n\n\t.brahma-widgets-screens >.dharma-widgets-screens-map {\n\t\tbottom:166px;\n\t\tright:68px;\n\t}\n}\n\n.brahma-widgets-screens >div:first-child .screen-effect-trinket {\n\t-webkit-transform:translateY(-120%);\n\t-ms-transform:translateY(-120%);\n\ttransform:translateY(-120%);\n\topacity:0;\n\t-webkit-transition:-webkit-transform 1s ease;\n\ttransition:-webkit-transform 1s ease;\n\ttransition:transform 1s ease;\n\ttransition:transform 1s ease, -webkit-transform 1s ease;\n}\n\n.brahma-widgets-screens >div:first-child >*.current .screen-effect-fade {\n\topacity:1;\n\t-webkit-transition:all 0.5s ease;\n\ttransition:all 0.5s ease;\n\t-webkit-animation: screens-effect-fade-in 2s;\n\tanimation: screens-effect-fade-in 2s;\n}\n\n.brahma-widgets-screens >div:first-child >*.current .screen-effect-zoom {\n\t-webkit-transition:all 0.5s ease;\n\ttransition:all 0.5s ease;\n\t-webkit-animation: screens-effect-zoom-in 1s;\n\tanimation: screens-effect-zoom-in 1s;\n}\n\n.brahma-widgets-screens >div:first-child >*.current .screen-effect-lukas {\n\t-webkit-transition:all 0.5s ease;\n\ttransition:all 0.5s ease;\n\t-webkit-animation: screens-effect-lukas-in 1s;\n\tanimation: screens-effect-lukas-in 1s;\n}\n\n.brahma-widgets-screens >div:first-child >*.current .screen-effect-trinket {\n\t-webkit-transition:all 0.5s ease;\n\ttransition:all 0.5s ease;\n\t-webkit-animation: screens-effect-trinket-in 2.5s;\n\tanimation: screens-effect-trinket-in 2.5s;\n\tanimation-easing-function: ease;\n\t-webkit-animation-fill-mode: forwards;\n\tanimation-fill-mode: forwards;\n\t-webkit-animation-delay: 0.5s;\n\tanimation-delay: 0.5s\n}\n\n.brahma-widgets-screens >div:first-child >* div.brahma-widgets-screens-label {\n\tcolor: white;\n\tfont-family: 'Lato', \"Arial\";\n\tfont-size: 38px;\n\tfont-weight: 600;\n\tdisplay: block;\n\twidth: auto;\n\ttext-align: center;\n\tmargin: 25px;\n\tline-height: 52px;\n\ttext-align:left;\n\ttext-shadow: 0 0 4px rgba(255, 255, 255, 0.74);\n}\n\n\n.dharma-widgets-screens-navigation {\n\twidth:44px;\n\theight:44px;\n\tmargin:auto;\n\tposition:absolute;\n\tcursor:pointer;\n\n\t-webkit-transition:-webkit-transform 0.35s ease;\n\n\ttransition:-webkit-transform 0.35s ease;\n\n\ttransition:transform 0.35s ease;\n\n\ttransition:transform 0.35s ease, -webkit-transform 0.35s ease;\n}\n\n\n.dharma-widgets-screens-navigation svg {\n\tfill:#fff;\n}\n\n\n.dharma-widgets-screens-navigation svg use {\n\tfill:#fff;\n\t-webkit-transform:scale(0.6);\n\t-ms-transform:scale(0.6);\n\ttransform:scale(0.6);\n}\n\n\n@media screen and (min-width:1024px) {\n\n\t.dharma-widgets-screens-navigation svg use {\n\t\t-webkit-transform:scale(0.9);\n\t\t-ms-transform:scale(0.9);\n\t\ttransform:scale(0.9);\n\t}\n}\n\n\n.dharma-widgets-screens-navigation.black {\n\tcolor:black;\n}\n\n\n.dharma-widgets-screens-navigation.black svg {\n\tfill:#000;\n}\n\n\n.dharma-widgets-screens-navigation.black svg use {\n\tfill:#000;\n}\n\n\n.dharma-widgets-screens-navigation-down {\n\twidth:29px;\n\tbottom:25px;\n\tleft:0;\n\tright:0;\n\t-webkit-transform: rotateZ(90deg);\n\t-ms-transform: rotate(90deg);\n\ttransform: rotateZ(90deg);\n}\n\n\n.dharma-widgets-screens-navigation-down.hidden {\n\t-webkit-transform: rotateZ(90deg) translateX(200px);\n\t-ms-transform: rotate(90deg) translateX(200px);\n\ttransform: rotateZ(90deg) translateX(200px);\n}\n\n\n.dharma-widgets-screens-navigation-up {\n\twidth:29px;\n\ttop:25px;\n\tleft:0;\n\tright:0;\n\t-webkit-transform: rotateZ(-90deg);\n\t-ms-transform: rotate(-90deg);\n\ttransform: rotateZ(-90deg);\n}\n\n\n.dharma-widgets-screens-navigation-up.hidden {\n\t-webkit-transform: rotateZ(-90deg) translateX(200px);\n\t-ms-transform: rotate(-90deg) translateX(200px);\n\ttransform: rotateZ(-90deg) translateX(200px);\n}\n\n\n.dharma-widgets-screens-navigation-right {\n\theight:29px;\n\ttop:0;\n\tbottom:0;\n\tright:25px;\n\t-webkit-transform: rotateZ(0);\n\t-ms-transform: rotate(0);\n\ttransform: rotateZ(0);\n}\n\n\n.dharma-widgets-screens-navigation-right.hidden {\n\t-webkit-transform: rotateZ(0deg) translateX(200px);\n\t-ms-transform: rotate(0deg) translateX(200px);\n\ttransform: rotateZ(0deg) translateX(200px);\n}\n\n\n.dharma-widgets-screens-navigation-left {\n\theight:29px;\n\ttop:0;\n\tbottom:0;\n\tleft:25px;\n\t-webkit-transform: rotateZ(180deg);\n\t-ms-transform: rotate(180deg);\n\ttransform: rotateZ(180deg);\n}\n\n\n.dharma-widgets-screens-navigation-left.hidden {\n\t-webkit-transform: rotateZ(180deg) translateX(200px);\n\t-ms-transform: rotate(180deg) translateX(200px);\n\ttransform: rotateZ(180deg) translateX(200px);\n}\n\n@media screen and (min-width:1024px) {\n\t.dharma-widgets-screens-navigation-down {\n\t\twidth:44px;\n\t\tbottom:68px;\n\t}\n\n\t.dharma-widgets-screens-navigation-up {\n\t\twidth:44px;\n\t\ttop:68px;\n\t}\n\n\t.dharma-widgets-screens-navigation-left {\n\t\theight:44px;\n\t\tleft:68px;\n\t}\n\n\t.dharma-widgets-screens-navigation-right {\n\t\theight:44px;\n\t\tright:68px;\n\t}\n}\n\n\n/* Effects */\n@-webkit-keyframes screens-effect-fade-in {\n\tfrom {\n\t\topacity:0;\n\t}\n\tto {\n\t\topacity:1;\n\t}\n}\n@keyframes screens-effect-fade-in {\n\tfrom {\n\t\topacity:0;\n\t}\n\tto {\n\t\topacity:1;\n\t}\n}\n\n@-webkit-keyframes screens-effect-zoom-in {\n\tfrom {\n\t\t-webkit-transform:scale(0.35);\n\t\t        transform:scale(0.35);\n\t}\n\tto {\n\t\t-webkit-transform:scale(1);\n\t\t        transform:scale(1);\n\t}\n}\n\n@keyframes screens-effect-zoom-in {\n\tfrom {\n\t\t-webkit-transform:scale(0.35);\n\t\t        transform:scale(0.35);\n\t}\n\tto {\n\t\t-webkit-transform:scale(1);\n\t\t        transform:scale(1);\n\t}\n}\n\n@-webkit-keyframes screens-effect-lukas-in {\n\tfrom {\n\t\t-webkit-transform:translateY(-30%) scale(0.6);\n\t\t        transform:translateY(-30%) scale(0.6);\n\t}\n\tto {\n\t\t-webkit-transform:translateY(0%) scale(1);\n\t\t        transform:translateY(0%) scale(1);\n\t}\n}\n\n@keyframes screens-effect-lukas-in {\n\tfrom {\n\t\t-webkit-transform:translateY(-30%) scale(0.6);\n\t\t        transform:translateY(-30%) scale(0.6);\n\t}\n\tto {\n\t\t-webkit-transform:translateY(0%) scale(1);\n\t\t        transform:translateY(0%) scale(1);\n\t}\n}\n\n@-webkit-keyframes screens-effect-trinket-in {\n\t0% {\n\t\t-webkit-transform:translateY(-120%);\n\t\t        transform:translateY(-120%);\n\t\topacity:0;\n\t}\n\t24% {\n\t\t-webkit-transform:translateY(9%) rotateZ(-6deg);\n\t\t        transform:translateY(9%) rotateZ(-6deg);\n\t\topacity:1;\n\t}\n\t50% {\n\t\t-webkit-transform:translateY(-5%) rotateZ(-2deg);\n\t\t        transform:translateY(-5%) rotateZ(-2deg);\n\t}\n\t76% {\n\t\t-webkit-transform:translateY(-2%) rotateZ(-2deg);\n\t\t        transform:translateY(-2%) rotateZ(-2deg);\n\t}\n\t100% {\n\t\t-webkit-transform:translateY(-2.3%) rotateZ(-2deg);\n\t\t        transform:translateY(-2.3%) rotateZ(-2deg);\n\t\topacity:1;\n\t}\n}\n\n@keyframes screens-effect-trinket-in {\n\t0% {\n\t\t-webkit-transform:translateY(-120%);\n\t\t        transform:translateY(-120%);\n\t\topacity:0;\n\t}\n\t24% {\n\t\t-webkit-transform:translateY(9%) rotateZ(-6deg);\n\t\t        transform:translateY(9%) rotateZ(-6deg);\n\t\topacity:1;\n\t}\n\t50% {\n\t\t-webkit-transform:translateY(-5%) rotateZ(-2deg);\n\t\t        transform:translateY(-5%) rotateZ(-2deg);\n\t}\n\t76% {\n\t\t-webkit-transform:translateY(-2%) rotateZ(-2deg);\n\t\t        transform:translateY(-2%) rotateZ(-2deg);\n\t}\n\t100% {\n\t\t-webkit-transform:translateY(-2.3%) rotateZ(-2deg);\n\t\t        transform:translateY(-2.3%) rotateZ(-2deg);\n\t\topacity:1;\n\t}\n}\n\n\n@media screen and (min-width:1024px) {\n\t.brahma-widgets-screens > div:first-child > * div.brahma-widgets-screens-label {\n\t\tfont-size: 42px;\n\t\tmargin: 100px;\n\t}\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(13);

	var _actions = __webpack_require__(14);

	var _Provider2 = __webpack_require__(16);

	var _Provider3 = _interopRequireDefault(_Provider2);

	var _defaultState = __webpack_require__(31);

	var _defaultState2 = _interopRequireDefault(_defaultState);

	var _reducers = __webpack_require__(33);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _middlewares = __webpack_require__(72);

	var _middlewares2 = _interopRequireDefault(_middlewares);

	var _bootstrap = __webpack_require__(82);

	var _bootstrap2 = _interopRequireDefault(_bootstrap);

	var _ModuleEdgeEffect = __webpack_require__(87);

	var _ModuleEdgeEffect2 = _interopRequireDefault(_ModuleEdgeEffect);

	var _ModuleInfinity = __webpack_require__(95);

	var _ModuleInfinity2 = _interopRequireDefault(_ModuleInfinity);

	var _ModuleKeyListener = __webpack_require__(96);

	var _ModuleKeyListener2 = _interopRequireDefault(_ModuleKeyListener);

	var _ModuleLocation = __webpack_require__(97);

	var _ModuleLocation2 = _interopRequireDefault(_ModuleLocation);

	var _ModuleMobileMap = __webpack_require__(98);

	var _ModuleMobileMap2 = _interopRequireDefault(_ModuleMobileMap);

	var _ModulePreloader = __webpack_require__(99);

	var _ModulePreloader2 = _interopRequireDefault(_ModulePreloader);

	var _ModuleTouch = __webpack_require__(100);

	var _ModuleTouch2 = _interopRequireDefault(_ModuleTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Widget = function (_Provider) {
	  _inherits(Widget, _Provider);

	  function Widget(selector) {
	    _classCallCheck(this, Widget);

	    /**
	     * Main HTML container
	     *
	     * @private
	     * @type {HTMLElement}
	     */
	    var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this, _defaultState2.default, Object.assign({}, _reducers2.default, _middlewares2.default)));

	    _this.selector = selector;
	    /**
	     * Contains HTML elements of widget
	     *
	     * @type {object}
	     */
	    _this.htmlElements = {
	      screensWrapper: null,
	      navigation: null,
	      navigation_up: null,
	      navigation_down: null,
	      navigation_left: null,
	      navigation_right: null,
	      map: null
	    };
	    /**
	     * Contains modules
	     *
	     * @type {object}
	     */
	    _this.modules = {};
	    /**
	     * Contains effects
	       *
	       * @type {object}
	     */
	    _this.effects = {};
	    /**
	     * Contains grid scheme
	       *
	       * @type {array}
	     */
	    _this.grid = [];
	    /**
	     * Contains portalGrid
	       *
	       * @type {array}
	     */
	    _this.portalGrid = [];
	    /**
	     * modules
	     */
	    _this.modules = {
	      edgeEffect: new _ModuleEdgeEffect2.default(_this),
	      infinity: new _ModuleInfinity2.default(_this),
	      keyListener: new _ModuleKeyListener2.default(_this),
	      location: new _ModuleLocation2.default(_this),
	      mobileMap: new _ModuleMobileMap2.default(_this),
	      preloader: new _ModulePreloader2.default(_this),
	      touch: new _ModuleTouch2.default(_this)
	    };
	    /**
	     * Bootstrap
	     */
	    _bootstrap2.default.call(_this, _this.getState().config);
	    return _this;
	  }

	  /**
	   * up - Move up
	   */


	  _createClass(Widget, [{
	    key: 'up',
	    value: function up() {
	      this.dispatch((0, _actions.actionUserMoveUp)());
	    }

	    /**
	     * down - Move down
	     */

	  }, {
	    key: 'down',
	    value: function down() {
	      this.dispatch((0, _actions.actionUserMoveDown)());
	    }

	    /**
	     * left - Move left
	     */

	  }, {
	    key: 'left',
	    value: function left() {
	      this.dispatch((0, _actions.actionUserMoveLeft)());
	    }

	    /**
	     * right - Move right
	     */

	  }, {
	    key: 'right',
	    value: function right() {
	      this.dispatch((0, _actions.actionUserMoveRight)());
	    }

	    /**
	     * registerCell - Register cell in grid
	     *
	     * @private
	     * @param  {number} x    x-coordinate
	     * @param  {number} y    y-coordinate
	     * @param  {object} data Configuration for cell
	     * @param  {HTMLElement} data.node Cell HTML element
	     * @param  {string} data.colorTheme color theme name
	     * @return {array} Coordinates of cell
	     */

	  }, {
	    key: 'registerCell',
	    value: function registerCell(x, y, data) {
	      var state = this.getState();
	      if (typeof this.grid[y] !== "undefined" && typeof this.grid[y][x] !== "undefined") {
	        var xy = function (ox, oy) {
	          for (var y = 0; y < this.grid.length; y++) {
	            if (typeof this.grid[y] === "undefined") {
	              return [0, y];
	            } else for (var x = 0; x < this.grid[y].length; x++) {
	              if (typeof this.grid[y][x] === "undefined") {
	                return [x, y];
	              }
	            }
	          }
	          return [ox, oy];
	        }.call(this, x, y);

	        var x = xy[x];
	        var y = xy[y];
	      }

	      if ("undefined" === typeof this.grid[y]) {
	        this.grid[y] = [];
	      };

	      this.grid[y][x] = Object.assign({
	        active: $(data.node).hasClass('screen-box-item'),
	        colorTheme: false,
	        onVisible: []
	      }, data);

	      // Событие добавления экрана в схему
	      this.emit('gridAdds', [this.grid[y][x]]);

	      // Оставляем информацию о максимальном слайде по вертикали и по горизонтали

	      var update = {};
	      if (y > state.maxY) update.maxY = y;
	      if (x > state.maxX) update.maxX = x;
	      if (x < state.minX) update.minX = x;
	      if (y < state.minY) update.minY = y;

	      this.dispatch(this.actions.assignState(update));
	      return [x, y];
	    }
	    /**
	     * Re-render map HTML procedure
	     */

	  }, {
	    key: 'renderMap',
	    value: function renderMap() {
	      var _this2 = this;

	      $(this.htmlElements.map).empty();
	      var that = this;
	      for (var y = 0; y < this.grid.length; y++) {
	        if (typeof this.grid[y] !== "undefined") (function (wrapper, layer) {
	          for (var x = 0; x < layer.length; x++) {
	            (function (x, y) {
	              var el = $(wrapper).put('div', {
	                "class": "screen-box-" + ("undefined" === typeof layer[x] ? "empty" : "item"),
	                "data-coords": y + 'x' + x
	              });
	              el.bind('click', function () {
	                if ($(el).hasClass('screen-box-item')) {
	                  _this2.dispatch((0, _actions.actionUserGoto)([x, y]));
	                }
	              });
	            })(x, y);
	          }
	        }).call(this, $(this.htmlElements.map).put('div', {
	          "class": "screen-box-layer"
	        }), this.grid[y]);
	      };
	    }
	    /*
	    Get first non empty with Y coordinate
	    */

	  }, {
	    key: 'getFirstXSlideByY',
	    value: function getFirstXSlideByY(y) {
	      if (!this.grid[y]) return false;
	      for (var x = 0; x < this.grid[y].length; x++) {
	        if (this.grid[y][x]) return x;
	      }
	      return false;
	    }
	    /*
	    Get last non empty with Y coordinate
	    */

	  }, {
	    key: 'getLastXSlideByY',
	    value: function getLastXSlideByY(y) {
	      if (!this.grid[y]) return false;
	      for (var x = this.grid[y].length - 1; x >= 0; x--) {
	        if (this.grid[y][x]) return x;
	      }
	      return false;
	    }
	    /*
	    Get first non empty with X coordinate
	    */

	  }, {
	    key: 'getFirstYSlideByX',
	    value: function getFirstYSlideByX(x) {
	      for (var y = 0; y < this.grid.length; y++) {
	        if (this.grid[y] && this.grid[y][x]) return y;
	      }
	      return false;
	    }
	    /*
	    Get last non empty with X coordinate
	    */

	  }, {
	    key: 'getLastYSlideByX',
	    value: function getLastYSlideByX(x) {
	      for (var y = this.grid.length - 1; y >= 0; y--) {
	        if (this.grid[y] && this.grid[y][x]) return y;
	      }
	      return false;
	    }

	    /**
	     * navigationHide - Hides navigation at direction
	     *
	     * @param  {(DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT)} direction
	     */

	  }, {
	    key: 'navigationHide',
	    value: function navigationHide(direction) {
	      switch (direction) {
	        case _constants.DIRECTION_UP:
	          $(this.htmlElements.navigation_up).addClass('hidden');break;
	        case _constants.DIRECTION_DOWN:
	          $(this.htmlElements.navigation_down).addClass('hidden');break;
	        case _constants.DIRECTION_LEFT:
	          $(this.htmlElements.navigation_left).addClass('hidden');break;
	        case _constants.DIRECTION_RIGHT:
	          $(this.htmlElements.navigation_right).addClass('hidden');break;
	      }
	    }

	    /**
	     * navigationShow - Shows navigation at direction
	     *
	     * @param  {(DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT)} direction
	     */

	  }, {
	    key: 'navigationShow',
	    value: function navigationShow(direction) {
	      switch (direction) {
	        case _constants.DIRECTION_UP:
	          $(this.htmlElements.navigation_up).removeClass('hidden');break;
	        case _constants.DIRECTION_DOWN:
	          $(this.htmlElements.navigation_down).removeClass('hidden');break;
	        case _constants.DIRECTION_LEFT:
	          $(this.htmlElements.navigation_left).removeClass('hidden');break;
	        case _constants.DIRECTION_RIGHT:
	          $(this.htmlElements.navigation_right).removeClass('hidden');break;
	      }
	    }

	    /*
	    Функция определяет можем ли мы двигаться вверх
	    */

	  }, {
	    key: 'isMovableUp',
	    value: function isMovableUp() {
	      var state = this.getState();
	      if (this.grid.length === 1) return false;
	      if (state.config.infinity && (state.config.infinityMethod === 'discover' && !(this.grid[state.currentScreen[1] - 1] && this.grid[state.currentScreen[1] - 1][state.currentScreen[0]]) || state.currentScreen[1] === 0 && this.grid[state.maxY][state.currentScreen[0]])) return 2;
	      if (this.grid[state.currentScreen[1] - 1] && this.grid[state.currentScreen[1] - 1][state.currentScreen[0]]) return true;
	      return false;
	    }
	  }, {
	    key: 'isMovableDown',
	    value: function isMovableDown() {
	      var state = this.getState();
	      if (this.grid.length === 1) return false;
	      if (state.config.infinity && (state.config.infinityMethod === 'discover' && !(this.grid[state.currentScreen[1] + 1] && this.grid[state.currentScreen[1] + 1][state.currentScreen[0]]) || state.currentScreen[1] === this.grid.length - 1 && this.grid[0][state.currentScreen[0]])) return 2;
	      if (this.grid[state.currentScreen[1] + 1] && this.grid[state.currentScreen[1] + 1][state.currentScreen[0]]) return true;
	      return false;
	    }
	  }, {
	    key: 'isMovableLeft',
	    value: function isMovableLeft() {
	      var state = this.getState();
	      if ((!state.config.infinity || state.config.infinityMethod !== 'discover') && this.grid[state.currentScreen[1]].length === 1) return false;
	      if (!this.grid[state.currentScreen[1]][state.currentScreen[0] - 1] && state.config.infinity && (state.config.infinityMethod === 'discover' && this.grid.length > 1 || state.currentScreen[0] === 0 && this.grid[state.currentScreen[1]][state.maxX])) return 2;
	      if (this.grid[state.currentScreen[1]][state.currentScreen[0] - 1]) return true;
	      return false;
	    }
	  }, {
	    key: 'isMovableRight',
	    value: function isMovableRight() {
	      var state = this.getState();
	      if ((!state.config.infinity || state.config.infinityMethod !== 'discover') && this.grid[state.currentScreen[1]].length === 1) return false;

	      if (!this.grid[state.currentScreen[1]][state.currentScreen[0] + 1] && state.config.infinity && (state.config.infinityMethod === 'discover' && this.grid.length > 1 || state.currentScreen[0] === this.grid[state.currentScreen[1]].length - 1 && this.grid[state.currentScreen[1]][state.minX])) return 2;
	      if (this.grid[state.currentScreen[1]][state.currentScreen[0] + 1]) return true;
	      return false;
	    }

	    /**
	     * isMovable - Moving possability
	     *
	     * @param  {(DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT)} [direction]
	     * @return {boolean}
	     */

	  }, {
	    key: 'isMovable',
	    value: function isMovable(direction) {
	      var state = this.getState();
	      if (!direction) {
	        if (state.locks) return false;
	        if (state.config.lockDelay === true) {
	          if (state.moving) return false;
	          return true;
	        } else if (typeof state.config.lockDelay === "number") {

	          if (state.moving && new Date().getTime() - state.movingStartTime < state.config.lockDelay) return false;
	          return true;
	        } else {
	          return true;
	        }
	      } else {
	        switch (direction) {
	          case _constants.DIRECTION_UP:
	            return this.isMovableUp() !== false;break;
	          case _constants.DIRECTION_DOWN:
	            return this.isMovableDown() !== false;break;
	          case _constants.DIRECTION_LEFT:
	            return this.isMovableLeft() !== false;break;
	          case _constants.DIRECTION_RIGHT:
	            return this.isMovableRight() !== false;break;
	        }
	      }
	    }
	    /**
	     * movableState - returns information about move possablity as one of
	     * - true: movable in normal mode
	     * - 2: movable in infinity mode
	     * - false: can not move
	     *
	     * @param  {(DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT)} direction
	     * @return {type}
	     */

	  }, {
	    key: 'movableState',
	    value: function movableState(direction) {
	      switch (direction) {
	        case _constants.DIRECTION_UP:
	          return this.isMovableUp();break;
	        case _constants.DIRECTION_DOWN:
	          return this.isMovableDown();break;
	        case _constants.DIRECTION_LEFT:
	          return this.isMovableLeft();break;
	        case _constants.DIRECTION_RIGHT:
	          return this.isMovableRight();break;
	      }
	    }

	    /**
	     * getCoords - Returns coordinates of next cell in concrete direction
	     *
	     * @param  {(DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT)} direction
	     * @return {array}
	     */

	  }, {
	    key: 'getCoords',
	    value: function getCoords(direction) {
	      var state = this.getState();
	      switch (direction) {
	        case _constants.DIRECTION_UP:
	          return [state.currentScreen[0], state.currentScreen[1] - 1];break;
	        case _constants.DIRECTION_DOWN:
	          return [state.currentScreen[0], state.currentScreen[1] + 1];break;
	        case _constants.DIRECTION_LEFT:
	          return [state.currentScreen[0] - 1, state.currentScreen[1]];break;
	        case _constants.DIRECTION_RIGHT:
	          return [state.currentScreen[0] + 1, state.currentScreen[1]];break;
	      }
	    }
	  }]);

	  return Widget;
	}(_Provider3.default);

	exports.default = Widget;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$STATE = exports.$$STATE = Symbol('state');
	var $$MIDDLEWARES = exports.$$MIDDLEWARES = Symbol('middlewares');
	var ACTION_EMIT = exports.ACTION_EMIT = 'ACTION_EMIT';
	var ACTION_ASSIGN_STATE = exports.ACTION_ASSIGN_STATE = 'ACTION_ASSIGN_STATE';
	var ACTION_ACTION = exports.ACTION_ACTION = 'ACTION_ACTION';
	var ACTION_USER_MOVE = exports.ACTION_USER_MOVE = 'ACTION_USER_MOVE';
	var ACTION_HIDE_NAVIGATION = exports.ACTION_HIDE_NAVIGATION = 'ACTION_HIDE_NAVIGATION';
	var ACTION_SHOW_NAVIGATION = exports.ACTION_SHOW_NAVIGATION = 'ACTION_SHOW_NAVIGATION';
	var ACTION_USER_GOTO = exports.ACTION_USER_GOTO = 'ACTION_USER_GOTO';
	var ACTION_GOTO = exports.ACTION_GOTO = 'ACTION_GOTO';
	var ACTION_SET_CURRENT = exports.ACTION_SET_CURRENT = 'ACTION_SET_CURRENT';
	var ACTION_COLORIZED_NAVI = exports.ACTION_COLORIZED_NAVI = 'ACTION_COLORIZED_NAVI';
	var ACTION_INITIAL_CURRENT_SCREEN = exports.ACTION_INITIAL_CURRENT_SCREEN = 'ACTION_INITIAL_CURRENT_SCREEN';
	var ACTION_ASYNC = exports.ACTION_ASYNC = 'ACTION_ASYNC';
	var ACTION_SHIFT_SCREEN = exports.ACTION_SHIFT_SCREEN = 'ACTION_SHIFT_SCREEN';
	var DIRECTION_UP = exports.DIRECTION_UP = 'DIRECTION_UP';
	var DIRECTION_DOWN = exports.DIRECTION_DOWN = 'DIRECTION_DOWN';
	var DIRECTION_RIGHT = exports.DIRECTION_RIGHT = 'DIRECTION_RIGHT';
	var DIRECTION_LEFT = exports.DIRECTION_LEFT = 'DIRECTION_LEFT';

	// Reactions
	var REACTION_MOVE_SCREEN_TO = exports.REACTION_MOVE_SCREEN_TO = 'REACTION_MOVE_SCREEN_TO';
	var REACTION_REVIEW_NAVIGATION = exports.REACTION_REVIEW_NAVIGATION = 'REACTION_REVIEW_NAVIGATION';
	var REACTION_SHIFT_SCREEN = exports.REACTION_SHIFT_SCREEN = 'REACTION_SHIFT_SCREEN';
	var REACTION_REVIEW_ARROWS = exports.REACTION_REVIEW_ARROWS = 'REACTION_REVIEW_ARROWS';
	var REACTION_REVIEW_ARROWS_STYLE = exports.REACTION_REVIEW_ARROWS_STYLE = 'REACTION_REVIEW_ARROWS_STYLE';
	var REACTION_TRANSLATE = exports.REACTION_TRANSLATE = 'REACTION_TRANSLATE';
	var REACTION_EDGE_EFFECT = exports.REACTION_EDGE_EFFECT = 'REACTION_EDGE_EFFECT';
	var REACTION_INFINITY_MOVE = exports.REACTION_INFINITY_MOVE = 'REACTION_INFINITY_MOVE';
	var REACTION_MOVE = exports.REACTION_MOVE = 'REACTION_MOVE';

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionEmit = actionEmit;
	exports.actionAsync = actionAsync;
	exports.actionAction = actionAction;
	exports.actionUserMoveUp = actionUserMoveUp;
	exports.actionUserMoveDown = actionUserMoveDown;
	exports.actionUserMoveLeft = actionUserMoveLeft;
	exports.actionUserMoveRight = actionUserMoveRight;
	exports.actionHideNavigation = actionHideNavigation;
	exports.actionShowNavigation = actionShowNavigation;
	exports.actionUserGoto = actionUserGoto;
	exports.actionGoto = actionGoto;
	exports.actionSetCurrent = actionSetCurrent;
	exports.actionColorizeNavi = actionColorizeNavi;
	exports.actionError = actionError;
	exports.actionInitialCurrentScreen = actionInitialCurrentScreen;
	exports.actionShiftScreen = actionShiftScreen;

	var _constants = __webpack_require__(13);

	var _validate = __webpack_require__(15);

	var _validate2 = _interopRequireDefault(_validate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * actionEmit - Emit event
	 *
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {type}  description
	 */
	function actionEmit(eventName, args) {
	  return {
	    type: _constants.ACTION_EMIT,
	    eventName: eventName,
	    args: args || []
	  };
	}

	/**
	 * actionEmit - Emit event
	 *
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {type}  description
	 */
	function actionAsync(parcel, duration) {
	  return {
	    type: _constants.ACTION_ASYNC,
	    duration: duration,
	    parcel: parcel
	  };
	}

	/**
	 * actionAction - Provide an action
	 *
	 * @param  {type} actionMaker description
	 * @return {type}             description
	 */
	function actionAction(creator) {
	  return {
	    type: _constants.ACTION_ACTION,
	    creator: creator
	  };
	}

	/**
	 * actionUserMoveUp
	 */
	function actionUserMoveUp() {
	  return {
	    type: _constants.ACTION_USER_MOVE,
	    direction: _constants.DIRECTION_UP
	  };
	}

	/**
	 * actionUserMoveDown
	 */
	function actionUserMoveDown() {
	  return {
	    type: _constants.ACTION_USER_MOVE,
	    direction: _constants.DIRECTION_DOWN
	  };
	}

	/**
	 * actionUserMoveLeft
	 */
	function actionUserMoveLeft() {
	  return {
	    type: _constants.ACTION_USER_MOVE,
	    direction: _constants.DIRECTION_LEFT
	  };
	}

	/**
	 * actionUserMoveRight
	 */
	function actionUserMoveRight() {
	  return {
	    type: _constants.ACTION_USER_MOVE,
	    direction: _constants.DIRECTION_RIGHT
	  };
	}

	/**
	 * actionHideNavigation
	 *
	 * @param  {string} direction DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT
	 * @return {object}
	 */
	function actionHideNavigation(direction) {
	  (0, _validate2.default)(function () {
	    return !!~[_constants.DIRECTION_UP | _constants.DIRECTION_DOWN | _constants.DIRECTION_LEFT | _constants.DIRECTION_RIGHT].indexOf(direction);
	  }, 'Invalid direction');

	  return {
	    type: _constants.ACTION_HIDE_NAVIGATION,
	    direction: direction
	  };
	}

	/**
	 * actionHideNavigation
	 *
	 * @param  {string} direction DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT
	 * @return {object}
	 */
	function actionShowNavigation(direction) {
	  (0, _validate2.default)(function () {
	    return !!~[_constants.DIRECTION_UP | _constants.DIRECTION_DOWN | _constants.DIRECTION_LEFT | _constants.DIRECTION_RIGHT].indexOf(direction);
	  }, 'Invalid direction');

	  return {
	    type: _constants.ACTION_SHOW_NAVIGATION,
	    direction: direction
	  };
	}

	/**
	 * actionUserGoto - Go to concrete cell at map
	 *
	 * @param  {array} xy
	 */
	function actionUserGoto(xy) {
	  var instantly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  (0, _validate2.default)(function () {
	    return "number" === typeof xy[0] && "number" === typeof xy[1];
	  }, 'x and y coordinates must be a numbers');
	  return {
	    type: _constants.ACTION_USER_GOTO,
	    coords: xy,
	    instantly: instantly
	  };
	}

	/**
	 * actionGoto - Forced go to concrete cell at map
	 *
	 * @param  {array} xy
	 */
	function actionGoto(xy) {
	  var instantly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  return {
	    type: _constants.ACTION_GOTO,
	    coords: xy,
	    instantly: instantly
	  };
	}

	/**
	 * actionSetCurrent - Chanhe cursor position
	 *
	 * @param  {Array} xy Array of x,y coords
	 */
	function actionSetCurrent(xy) {
	  return {
	    type: _constants.ACTION_SET_CURRENT,
	    xy: xy
	  };
	}

	function actionColorizeNavi() {
	  return {
	    type: _constants.ACTION_COLORIZED_NAVI
	  };
	}

	function actionError(message) {
	  return {
	    type: ACTION_ERROR,
	    message: message || ''
	  };
	}

	function actionInitialCurrentScreen(xy) {
	  return {
	    type: _constants.ACTION_INITIAL_CURRENT_SCREEN,
	    xy: xy
	  };
	}

	function actionShiftScreen(x, y) {
	  return {
	    type: _constants.ACTION_SHIFT_SCREEN,
	    x: x,
	    y: y
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validate;
	function validate(validator, message) {
	  try {
	    if (!validator()) {
	      throw new Error(message);
	    }
	  } catch (e) {
	    throw new Error(message);
	  }
	}
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(13);

	var _rm = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventEmitter = __webpack_require__(30);
	/**
	 * Class provides state
	 */

	var Provider = function (_ReactiveStore) {
	  _inherits(Provider, _ReactiveStore);

	  function Provider(defaultState, middlewares, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, defaultState, middlewares, context));

	    _this.eventEmmiter = new EventEmitter();
	    return _this;
	  }

	  _createClass(Provider, [{
	    key: 'on',
	    value: function on() {
	      var _eventEmmiter;

	      return (_eventEmmiter = this.eventEmmiter).on.apply(_eventEmmiter, arguments);
	    }
	  }, {
	    key: 'once',
	    value: function once() {
	      var _eventEmmiter2;

	      return (_eventEmmiter2 = this.eventEmmiter).once.apply(_eventEmmiter2, arguments);
	    }
	  }, {
	    key: 'emit',
	    value: function emit() {
	      var _eventEmmiter3;

	      return (_eventEmmiter3 = this.eventEmmiter).emit.apply(_eventEmmiter3, arguments);
	    }
	  }]);

	  return Provider;
	}(_rm.ReactiveStore);

	exports.default = Provider;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactiveStore = exports.actionAssignState = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.createStore = createStore;

	var _ReactiveStore = __webpack_require__(18);

	var _ReactiveStore2 = _interopRequireDefault(_ReactiveStore);

	var _actionFactories = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if ("object" !== (typeof Rx === 'undefined' ? 'undefined' : _typeof(Rx))) {
	  throw new Error('Reactive-middleware requires RxJs >=4.*. Run `bower install rxjs --save` to get it.');
	}

	_ReactiveStore2.default.setRx(Rx);

	function createStore(defaultState, middlewares) {
	  return new _ReactiveStore2.default(defaultState, middlewares);
	}

	exports.actionAssignState = _actionFactories.actionAssignState;
	exports.ReactiveStore = _ReactiveStore2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isAction = __webpack_require__(19);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isObservable = __webpack_require__(21);

	var _isObservable2 = _interopRequireDefault(_isObservable);

	var _constants = __webpack_require__(22);

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _forEach = __webpack_require__(23);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _depose = __webpack_require__(24);

	var _depose2 = _interopRequireDefault(_depose);

	var _assignState = __webpack_require__(27);

	var _assignState2 = _interopRequireDefault(_assignState);

	var _actionFactories = __webpack_require__(28);

	var _debug = __webpack_require__(29);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	if (true) console.debug('Reactive-middleware in development mode. To build production use NODE_ENV=production option in command line.');

	/**
	 * errorHandler for deposit observer
	 *
	 * @private
	 * @param  {(Error|string)} e description
	 */
	function errorHandler(e) {
	  throw e instanceof Error ? e : new Error(e);
	}

	/**
	 * errorHandler for deposit observer
	 *
	 * @private
	 * @param  {(string|number)} actionName
	 */
	function completeHandler(actionName) {
	  console.log('Action ' + actionName + ' exhausted.');
	}

	/**
	 * disposeObservable - call dispose method of observable
	 *
	 * @param  {Observable} observable
	 */
	function disposeObservable(observable) {
	  observable.dispose();
	}

	/**
	 * createUnsubcriber - factory of unsubscriber
	 *
	 * @param  {Array} unsubscribeItems
	 * @return {function}
	 */
	function createUnsubcriber(unsubscribeItems) {
	  return function unsubscribe() {
	    unsubscribeItems.forEach(disposeObservable);
	    unsubscribeItems = null;
	  };
	}

	var actions = {
	  assignState: _actionFactories.actionAssignState
	};

	/**
	 * Reactive store
	 */

	var ReactiveStore = function () {
	  function ReactiveStore(defaultState, middlewares, context) {
	    var _this = this;

	    _classCallCheck(this, ReactiveStore);

	    this[_constants.$$MIDDLEWARES] = {};
	    this[_constants.$$STATE] = defaultState || {};
	    this[_constants.$$CONTEXT] = context || this;
	    this.actions = actions;
	    this.Rx = ReactiveStore.Rx;
	    if ((0, _isPlainObject2.default)(middlewares)) {
	      (0, _forEach2.default)(middlewares, function (middleware, actionName) {
	        _this.registerMiddleware(actionName, middleware);
	      });
	    }
	    /**
	     * Define fixed middlewares
	     */
	    this.registerMiddleware(_constants.ACTION_ASSIGN_STATE, _assignState2.default.bind(this));
	  }

	  /**
	   * registerMiddleware
	   *
	   * @param  {string} actionName
	   * @param  {function|Array} middlewares
	   */


	  _createClass(ReactiveStore, [{
	    key: 'registerMiddleware',
	    value: function registerMiddleware(actionName, middleware) {
	      if (!this[_constants.$$MIDDLEWARES][actionName]) {
	        this[_constants.$$MIDDLEWARES][actionName] = new this.Rx.Subject();
	        this[_constants.$$MIDDLEWARES][actionName].depose = _depose2.default.withAction(actionName, this);
	      }

	      var depositeObservable = middleware.call(this[_constants.$$CONTEXT], this[_constants.$$MIDDLEWARES][actionName], this, this[_constants.$$CONTEXT]);
	      if ((0, _isObservable2.default)(depositeObservable)) {
	        return depositeObservable.subscribe(this[_constants.$$MIDDLEWARES][actionName].depose, errorHandler, completeHandler.bind(this, actionName));
	      } else {
	        if (true) console.log(middleware.toString());
	        throw new Error('Middleware must return instance of Observable, but middleware returns ' + (typeof depositeObservable === 'undefined' ? 'undefined' : _typeof(depositeObservable)));
	      }
	    }

	    /**
	     * dispatch - Takes an action object and puts to the sequences observable by middlewares
	     *
	     * @param  {object} action Object with special format
	     * @token  {(function)} [callback] Callback function
	     * @return {type}        description
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(action, callback) {
	      (0, _debug2.default)((0, _isAction2.default)(action), 'ReactiveStore prototype\'s method dispatch(action) requires an action object');
	      if (true) {
	        var info = [];
	        for (var prop in action) {
	          if (action.hasOwnProperty(prop) && prop !== 'type') {
	            info.push(prop + ': ' + JSON.stringify(action[prop]));
	          }
	        }
	        console.log("%c" + action.type + ': ' + info.join(', '), "color:gray;font-size:80%;");
	      }

	      if (this[_constants.$$MIDDLEWARES][action.type]) {
	        this[_constants.$$MIDDLEWARES][action.type].action(action, callback);
	      } else {
	        (0, _debug2.default)(false, 'Unknown action with type \'' + action.type + '\'');
	      }
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return  true ? Object.freeze(Object.assign({}, this[_constants.$$STATE])) : this[_constants.$$STATE];
	    }
	  }]);

	  return ReactiveStore;
	}();

	ReactiveStore.setRx = function (Rx) {
	  /**
	   * Subject.prototype.action - Puts to sequence an action and remembers this token
	   *
	   * @param  {object} action
	   * @param  {function} [callback]
	   */
	  var nextMethodName = "function" === typeof Rx.Subject.prototype.next ? 'next' : 'onNext';
	  Rx.Subject.prototype.action = function (action, callback) {
	    if ("undefined" === typeof this.actions) this.actions = {};
	    if ("undefined" === typeof this.actions[action.type]) this.actions[action.type] = [];
	    this.actions[action.type].push(callback);
	    this[nextMethodName](Object.freeze(action));
	  };

	  /**
	   * Subject.prototype.actionRelease - Release an action and execute token
	   *
	   * @param  {type} action description
	   * @return {type}        description
	   */
	  Rx.Subject.prototype.actionRelease = function (actionName) {
	    if (this.actions[actionName]) {
	      var cb = this.actions[actionName].pop();
	      if ("function" === typeof cb) {
	        cb();
	      }
	    }
	  };

	  ReactiveStore.Rx = Rx;
	};

	exports.default = ReactiveStore;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAction;

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * isAction - validate action
	 *
	 * @param  {object} action
	 * @return {boolean}
	 */
	function isAction(action) {
	  return (0, _isPlainObject2.default)(action) && action.hasOwnProperty('type');
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isPlainObject;
	function isPlainObject(object) {
		return object.constructor === Object;
	}
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isObservable;
	/**
	 * isObservable
	 *
	 * @param  {object} observable
	 * @return {boolean}
	 */
	function isObservable(observable) {
	  return "object" === (typeof observable === "undefined" ? "undefined" : _typeof(observable)) && "function" === typeof observable.subscribe;
	}
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$STATE = exports.$$STATE = Symbol('state');
	var $$MIDDLEWARES = exports.$$MIDDLEWARES = Symbol('middlewares');
	var $$CONTEXT = exports.$$CONTEXT = Symbol('context');
	var ACTION_ASSIGN_STATE = exports.ACTION_ASSIGN_STATE = 'ACTION_ASSIGN_STATE';

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = forEach;
	function forEach(subject, handler) {
		if (subject instanceof Array) {
			subject.forEach(handler);
		} else {
			for (var prop in subject) {
				if (subject.hasOwnProperty(prop)) {
					handler(subject[prop], prop);
				}
			}
		}
	}
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = depose;

	var _isAction = __webpack_require__(19);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isPromise = __webpack_require__(25);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _DepositToken = __webpack_require__(26);

	var _DepositToken2 = _interopRequireDefault(_DepositToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * depose - Handler for middleware result sequencies
	 *
	 * @private
	 * @param  {type} deposit description
	 * @return {type}         description
	 */
	function depose(token, deposit) {
	  if ("undefined" === typeof deposit) {
	    token.done();
	  } else if (deposit instanceof Array) {
	    deposit.forEach(depose.bind(this, token.mutate(deposit.length)));
	  } else if ((0, _isAction2.default)(deposit)) {
	    if (!Object.isFrozen(deposit)) {
	      if (true) {
	        token.__addDevStepAction(deposit);
	      }
	      this.dispatch(deposit, token.done.bind(token));
	    } else {
	      // ignore previous action
	      token.done();
	    }
	  } else if ((0, _isPromise2.default)(deposit)) {
	    var deposeUp = depose.bind(this, token);
	    deposit.then(deposeUp).catch(deposeUp);
	  } else if (deposit instanceof Error) {
	    token.done();
	    throw deposit;
	  } else if ("function" === typeof deposit) {
	    depose.call(this, token, deposit.call(this));
	  } else if ("object" === (typeof deposit === 'undefined' ? 'undefined' : _typeof(deposit)) && "function" === typeof deposit.subscribe) {
	    debugger;
	    deposit.subscribe(depose.bind(this, token.up()), token.done.bind(token), token.done.bind(token));
	  } else {
	    token.done();
	  }
	}

	depose.withAction = function withAction(actionName, producer) {
	  var token = new _DepositToken2.default(actionName, producer);
	  return function (deposit) {
	    depose.call(producer, token.up(), deposit);
	  };
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isPromise;
	function isPromise(promiseLike) {
	  return "object" === (typeof promiseLike === "undefined" ? "undefined" : _typeof(promiseLike)) && "function" === typeof promiseLike.then && "function" === typeof promiseLike.catch;
	}
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DepositToken = function () {
	  function DepositToken(actionName, producer) {
	    _classCallCheck(this, DepositToken);

	    if (true) {
	      this.__historyStepsCount = [];
	      this.__historyActions = [];
	    }
	    this.actionName = actionName;
	    this.iterations = 0;
	    this.producer = producer;
	  }

	  _createClass(DepositToken, [{
	    key: 'up',
	    value: function up(increase) {
	      this.iterations += increase || 1;
	      return this;
	    }
	  }, {
	    key: 'mutate',
	    value: function mutate(to) {
	      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	      this.iterations += to - from;
	      return this;
	    }
	  }, {
	    key: 'done',
	    value: function done() {
	      this.iterations--;
	      if (true) {
	        this.__historyStepsCount++;
	      }
	      if (this.iterations === 0) {
	        if (true) {
	          //console.log("%c"+[this.actionName].concat(this.__historyActions).join(' : '), "color:gray;font-size:80%;");
	          this.__historyStepsCount = [];
	          this.__historyActions = [];
	        }
	        this.producer[_constants.$$MIDDLEWARES][this.actionName].actionRelease(this.actionName);
	      }
	    }
	  }, {
	    key: '__addDevStepAction',
	    value: function __addDevStepAction(action) {
	      this.__historyActions.push(action.type);
	    }
	  }]);

	  return DepositToken;
	}();

	exports.default = DepositToken;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assignState;

	var _constants = __webpack_require__(22);

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * assign state
	 *
	 * @private
	 * @param  {Observable} source
	 */
	function assignState(source) {
	  var _this = this;

	  return source.map(function (action) {
	    Object.assign(_this[_constants.$$STATE], (0, _isPlainObject2.default)(action.state) ? action.state : {});
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionAssignState = actionAssignState;

	var _constants = __webpack_require__(22);

	/**
	 * actionAssignState - Force update provider state
	 *
	 * @param {object} state Object to assign
	 */
	function actionAssignState(state) {
	  return {
	    type: _constants.ACTION_ASSIGN_STATE,
	    state: state
	  };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = debug;
	function debug(expression, failMessage) {
	  var result = void 0;
	  if ("function" === typeof expression) {
	    result = expression();
	  } else {
	    result = expression;
	  }
	  if (!result) throw failMessage instanceof Error ? failMessage : new Error(failMessage);
	}
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defaultConfiguration = __webpack_require__(32);

	var _defaultConfiguration2 = _interopRequireDefault(_defaultConfiguration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  config: Object.assign({}, _defaultConfiguration2.default),
	  /**
	   * Current cursor position
	   */
	  currentScreen: [0, 0],
	  /**
	   * Current screen shift
	   */
	  shift: {
	    x: 0, y: 0
	  },
	  /**
	   * Current advanced shift
	   */
	  advshift: {
	    x: 0, y: 0
	  },
	  /**
	   * Is moving
	   */
	  moving: 0,
	  /**
	   * Movement start time
	   */
	  movingStartTime: 0,
	  /**
	   * Movement end time
	   */
	  movingEndTime: 0,
	  /**
	   * Maximal X count
	   */
	  maxX: 0,
	  /**
	   * Maximal Y count
	   */
	  maxY: 0,
	  /**
	   * Minimal X count
	   */
	  minX: 0,
	  /**
	   * Minimal Y count
	   */
	  minY: 0,
	  /**
	   * Lock user action dispacther
	   */
	  locks: false, // Блокировка новый движений и действий
	  /**
	   * Default color theme
	   */
	  colorTheme: ''
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * Enabling infinity scrolling
	   */
	  infinity: false,

	  /**
	   * User actions debound
	   */
	  lockDelay: false,

	  /**
	   * Default animation easing function
	   */
	  easing: 'cubic-bezier(.43,.2,.46,.8)',

	  /**
	   * Animation duration
	   */
	  duration: 750, // Длительность анимации

	  /**
	   * Determines mathod of infinity transition
	   * @type string
	   *
	   * Passible values:
	   * - passage: Movement to the edge of map will teleport cursor to opposite edge of map
	   * - discover: Movement to the edge of map will telepor cursor to opposite edge of lower row
	   */
	  infinityMethod: 'passage',
	  /**
	   * Supporting touch events
	   */
	  touch: true,
	  /**
	   * Fill background images to the screen
	   */
	  autoFillImages: true,
	  /**
	   * When `infinity` option is disabled shows effect when user tries move through the edge of map
	   */
	  deadlockEffect: true,
	  /**
	   * Enables keyboard controls
	   */
	  keyboard: true,
	  /**
	   * Zoom map on mobiles
	   */
	  mobileMap: true,
	  /**
	   * Enables debug mode
	   */
	  debug: false
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ACTION_EMIT$ACTION_A;

	var _constants = __webpack_require__(13);

	var _actionEmit = __webpack_require__(34);

	var _actionEmit2 = _interopRequireDefault(_actionEmit);

	var _actionAction = __webpack_require__(35);

	var _actionAction2 = _interopRequireDefault(_actionAction);

	var _userMove = __webpack_require__(36);

	var _userMove2 = _interopRequireDefault(_userMove);

	var _hideNavigation = __webpack_require__(38);

	var _hideNavigation2 = _interopRequireDefault(_hideNavigation);

	var _showNavigation = __webpack_require__(39);

	var _showNavigation2 = _interopRequireDefault(_showNavigation);

	var _userGoto = __webpack_require__(40);

	var _userGoto2 = _interopRequireDefault(_userGoto);

	var _goto = __webpack_require__(41);

	var _goto2 = _interopRequireDefault(_goto);

	var _colorizeNavi = __webpack_require__(42);

	var _colorizeNavi2 = _interopRequireDefault(_colorizeNavi);

	var _setCurrent = __webpack_require__(43);

	var _setCurrent2 = _interopRequireDefault(_setCurrent);

	var _initialCurrentScreen = __webpack_require__(44);

	var _initialCurrentScreen2 = _interopRequireDefault(_initialCurrentScreen);

	var _move = __webpack_require__(45);

	var _move2 = _interopRequireDefault(_move);

	var _updateMap = __webpack_require__(46);

	var _updateMap2 = _interopRequireDefault(_updateMap);

	var _async = __webpack_require__(47);

	var _async2 = _interopRequireDefault(_async);

	var _shiftScreen = __webpack_require__(71);

	var _shiftScreen2 = _interopRequireDefault(_shiftScreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = (_ACTION_EMIT$ACTION_A = {}, _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_EMIT, _actionEmit2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_ACTION, _actionAction2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_USER_MOVE, _userMove2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_HIDE_NAVIGATION, _hideNavigation2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_SHOW_NAVIGATION, _showNavigation2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_USER_GOTO, _userGoto2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_GOTO, _goto2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_COLORIZED_NAVI, _colorizeNavi2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_SET_CURRENT, _setCurrent2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_INITIAL_CURRENT_SCREEN, _initialCurrentScreen2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_ASYNC, _async2.default), _defineProperty(_ACTION_EMIT$ACTION_A, _constants.ACTION_SHIFT_SCREEN, _shiftScreen2.default), _ACTION_EMIT$ACTION_A);
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = actionEmit;
	function actionEmit(source) {
	  var _this = this;

	  return source.map(function (action) {
	    return _this.emit(action.eventName, action.args || []);
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = actionAction;
	function actionAction(source) {
	  return source.map(function (action) {
	    return actionAction.create();
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userMove;

	var _reactions = __webpack_require__(37);

	var _actions = __webpack_require__(14);

	/**
	* Worker for action ACTION_USER_MOVE
	*/
	function userMove(source) {
	  var _this = this;

	  return source.map(function (action) {
	    switch (_this.movableState(action.direction)) {
	      case false:
	        // is not movable
	        return (0, _reactions.reActionEdgeEffect)(action.direction);
	        break;
	      case 2:
	        // it is infinity mode
	        return (0, _reactions.reActionInfinityMove)(action.direction);
	        break;
	      case true:
	        // movement is passible in normal mode
	        return (0, _reactions.reActionMove)(action.direction);
	        break;
	      default:
	        return (0, _actions.actionError)();
	        break;
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reActionMoveScreenTo = reActionMoveScreenTo;
	exports.reActionReviewArrowsStyle = reActionReviewArrowsStyle;
	exports.reActionReviewArrows = reActionReviewArrows;
	exports.reActionShiftScreen = reActionShiftScreen;
	exports.reActionTranslate = reActionTranslate;
	exports.reActionEdgeEffect = reActionEdgeEffect;
	exports.reActionInfinityMove = reActionInfinityMove;
	exports.reActionMove = reActionMove;

	var _constants = __webpack_require__(13);

	var _validate = __webpack_require__(15);

	var _validate2 = _interopRequireDefault(_validate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * actionMoveScreenTo - Move screen to concrete cell
	 *
	 * @param  {Array} xy          cell coords
	 * @param  {boolean} immediately
	 */
	function reActionMoveScreenTo(xy, instantly) {
	  return {
	    type: _constants.REACTION_MOVE_SCREEN_TO,
	    coords: xy,
	    instantly: instantly
	  };
	}

	function reActionReviewArrowsStyle() {
	  return {
	    type: _constants.REACTION_REVIEW_ARROWS_STYLE
	  };
	}

	function reActionReviewArrows() {
	  return {
	    type: _constants.REACTION_REVIEW_ARROWS
	  };
	}

	function reActionShiftScreen(x, y) {
	  return {
	    type: _constants.REACTION_SHIFT_SCREEN,
	    x: x,
	    y: y
	  };
	}

	function reActionTranslate(x, y) {
	  return {
	    type: _constants.REACTION_TRANSLATE,
	    x: x,
	    y: y
	  };
	}
	/**
	 * actionEdgeEffect - Perform edge effect
	 *
	 * @param  {[symbol|]} direction DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT
	 */
	function reActionEdgeEffect(direction) {
	  (0, _validate2.default)(function () {
	    return !!~[_constants.DIRECTION_UP, _constants.DIRECTION_DOWN, _constants.DIRECTION_LEFT, _constants.DIRECTION_RIGHT].indexOf(direction);
	  }, 'Invalid direction ' + direction);
	  return {
	    type: _constants.REACTION_EDGE_EFFECT,
	    direction: direction
	  };
	}

	/**
	 * actionInfinityMove - Move in infinity mode
	 *
	 * @param  {[symbol|]} direction DIRECTION_UP|DIRECTION_DOWN|DIRECTION_LEFT|DIRECTION_RIGHT
	 */
	function reActionInfinityMove(direction) {
	  (0, _validate2.default)(function () {
	    return !!~[_constants.DIRECTION_UP, _constants.DIRECTION_DOWN, _constants.DIRECTION_LEFT, _constants.DIRECTION_RIGHT].indexOf(direction);
	  }, 'Invalid direction ' + direction);
	  return {
	    type: _constants.REACTION_INFINITY_MOVE,
	    direction: direction
	  };
	}

	function reActionMove(direction) {
	  return {
	    type: _constants.REACTION_MOVE,
	    direction: direction
	  };
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hideNavigation;
	function hideNavigation(source) {
	  return source.do(function () {});
	}
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = showNavigation;
	function showNavigation(source) {
	  return source.do(function () {});
	}
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userGoto;

	var _actions = __webpack_require__(14);

	function userGoto(source) {
	  var _this = this;

	  return source.filter(function () {
	    return _this.isMovable();
	  }).map(function (action) {
	    return (0, _actions.actionGoto)(action.coords, action.instantly);
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = goto;

	var _reactions = __webpack_require__(37);

	/**
	 * goto - Goto concrete cell at screens
	 */
	function goto(source, provider) {
	  return source.map(function (action) {
	    return [provider.actions.assignState({
	      currentScreen: action.coords
	    }), (0, _reactions.reActionMoveScreenTo)(action.coords, action.instantly)];
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = colorizeNavi;
	/**
	 * colorizeNavi - Change colors of navigation arrow to specified by cell
	 *
	 * @return {type}  description
	 */
	function colorizeNavi(source) {
	  var _this = this;

	  var debounceTime = 1;
	  return source.debounce(function () {
	    return Rx.Observable.from(_this.getState().config.duration / 2);
	  }).map(function (xy) {
	    var colorTheme = void 0,
	        currentColorTheme = _this.getState().colorTheme;
	    if (_this.grid[xy[1]][xy[0]].colorTheme !== currentColorTheme) {
	      $(_this.htmlelements.navigation_up).removeClass(currentColorTheme);
	      $(_this.htmlelements.navigation_down).removeClass(currentColorTheme);
	      $(_this.htmlelements.navigation_left).removeClass(currentColorTheme);
	      $(_this.htmlelements.navigation_right).removeClass(currentColorTheme);
	    };

	    if (_this.grid[xy[1]][xy[0]].colorTheme) {
	      colorTheme = _this.grid[xy[1]][xy[0]].colorTheme;

	      $(_this.htmlelements.navigation_up).addClass(colorTheme);
	      $(_this.htmlelements.navigation_down).addClass(colorTheme);
	      $(_this.htmlelements.navigation_left).addClass(colorTheme);
	      $(_this.htmlelements.navigation_right).addClass(colorTheme);
	    } else {
	      colorTheme = '';
	    }

	    return actionAssignState({
	      colorTheme: colorTheme
	    });
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setCurrent;
	/**
	* Middleware for ACTION_SET_CURRENT
	*/
	function setCurrent(source) {
	  var _this = this;

	  return source.do(function (xy) {
	    $(_this.htmlelements.screensWrapper).find('>*').removeClass('current');
	    $(_this.grid[xy[1]][xy[0]].node).addClass('current');
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialCurrentScreen;
	function initialCurrentScreen(source, provider) {
	  return source.map(function (action) {
	    return provider.actions.assignState({
	      currentScreen: action.xy
	    });
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.move = move;

	var _actions = __webpack_require__(14);

	var _constants = __webpack_require__(13);

	/**
	* Middleware for ACTION_MOVE
	*/
	function move(source) {
	  var _this = this;

	  return source.filter(function () {
	    return this.isMovable();
	  }, this).do(function (_ref) {
	    var direction = _ref.direction;
	    return _this.emit('beforeMove', [direction]);
	  }).map(function (action) {
	    switch (action.direction) {
	      case _constants.DIRECTION_UP:
	        return { xy: [this.data.currentScreen[0], this.data.currentScreen[1] - 1], instantly: action.immediately || false };
	        break;
	      case _constants.DIRECTION_DOWN:
	        return { xy: [this.data.currentScreen[0], this.data.currentScreen[1] + 1], instantly: action.immediately || false };
	        break;
	      case _constants.DIRECTION_LEFT:
	        return { xy: [this.data.currentScreen[0] - 1, this.data.currentScreen[1]], instantly: action.immediately || false };
	        break;
	      case _constants.DIRECTION_RIGHT:
	        return { xy: [this.data.currentScreen[0] + 1, this.data.currentScreen[1]], instantly: action.immediately || false };
	        break;
	    }
	  }).flatMap(function (params) {
	    return Rx.Observable.of((0, _actions.actionAssignState)({
	      currentScreen: params.xy,
	      movingStartTime: new Date().getTime(),
	      moving: _this.getState().moving++
	    }), (0, _actions.actionSetCurrent)(params.xy), (0, _actions.actionEmit)('movingStart'), (0, _actions.actionColorizeNavi)(params.xy), (0, _actions.actionObserver)(actionMoveScreenTo(params.xy, params.immediately)).flatMap(function () {
	      (0, _actions.actionAction)(function () {
	        return Rx.Observable.of((0, _actions.actionAssignState)({
	          movingEndTime: new Date().getTime(),
	          moving: _this.getState().moving--
	        }), (0, _actions.actionEmit)('movingEnd'));
	      });
	    }), (0, _actions.actionReviewNavigation)(), (0, _actions.actionUpdateMap)(params.xy));
	  });
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateMap;
	function updateMap(source) {
	  return source.do(function () {
	    // Select item in map
	    //
	    $(this.htmlelements.map).find('>div>div').removeClass("current");
	    $(this.htmlelements.map).find('div[data-coords=' + xy[1] + 'x' + xy[0] + ']').addClass("current");
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = async;

	var _TimerObservable = __webpack_require__(48);

	function async(source, provider) {
	  return source.delay(function (action) {
	    return provider.Rx.Observable.timer(Math.round(action.duration));
	  }).map(function (action) {
	    return action.parcel;
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TimerObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isNumeric = __webpack_require__(49);

	var _Observable2 = __webpack_require__(51);

	var _async = __webpack_require__(64);

	var _isScheduler = __webpack_require__(69);

	var _isDate = __webpack_require__(70);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var TimerObservable = exports.TimerObservable = function (_Observable) {
	    _inherits(TimerObservable, _Observable);

	    function TimerObservable() {
	        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var period = arguments[1];
	        var scheduler = arguments[2];

	        _classCallCheck(this, TimerObservable);

	        var _this = _possibleConstructorReturn(this, (TimerObservable.__proto__ || Object.getPrototypeOf(TimerObservable)).call(this));

	        _this.period = -1;
	        _this.dueTime = 0;
	        if ((0, _isNumeric.isNumeric)(period)) {
	            _this.period = Number(period) < 1 && 1 || Number(period);
	        } else if ((0, _isScheduler.isScheduler)(period)) {
	            scheduler = period;
	        }
	        if (!(0, _isScheduler.isScheduler)(scheduler)) {
	            scheduler = _async.async;
	        }
	        _this.scheduler = scheduler;
	        _this.dueTime = (0, _isDate.isDate)(dueTime) ? +dueTime - _this.scheduler.now() : dueTime;
	        return _this;
	    }
	    /**
	     * Creates an Observable that starts emitting after an `initialDelay` and
	     * emits ever increasing numbers after each `period` of time thereafter.
	     *
	     * <span class="informal">Its like {@link interval}, but you can specify when
	     * should the emissions start.</span>
	     *
	     * <img src="./img/timer.png" width="100%">
	     *
	     * `timer` returns an Observable that emits an infinite sequence of ascending
	     * integers, with a constant interval of time, `period` of your choosing
	     * between those emissions. The first emission happens after the specified
	     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
	     * operator uses the `async` Scheduler to provide a notion of time, but you
	     * may pass any Scheduler to it. If `period` is not specified, the output
	     * Observable emits only one value, `0`. Otherwise, it emits an infinite
	     * sequence.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
	     * var numbers = Rx.Observable.timer(3000, 1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @example <caption>Emits one number after five seconds</caption>
	     * var numbers = Rx.Observable.timer(5000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link interval}
	     * @see {@link delay}
	     *
	     * @param {number|Date} initialDelay The initial delay time to wait before
	     * emitting the first value of `0`.
	     * @param {number} [period] The period of time between emissions of the
	     * subsequent numbers.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a `0` after the
	     * `initialDelay` and ever increasing numbers after each `period` of time
	     * thereafter.
	     * @static true
	     * @name timer
	     * @owner Observable
	     */


	    _createClass(TimerObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var period = this.period;
	            var dueTime = this.dueTime;
	            var scheduler = this.scheduler;

	            return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	                index: index, period: period, subscriber: subscriber
	            });
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            var initialDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var period = arguments[1];
	            var scheduler = arguments[2];

	            return new TimerObservable(initialDelay, period, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var index = state.index;
	            var period = state.period;
	            var subscriber = state.subscriber;

	            var action = this;
	            subscriber.next(index);
	            if (subscriber.closed) {
	                return;
	            } else if (period === -1) {
	                return subscriber.complete();
	            }
	            state.index = index + 1;
	            action.schedule(state, period);
	        }
	    }]);

	    return TimerObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isNumeric = isNumeric;

	var _isArray = __webpack_require__(50);

	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
	}
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isArray = exports.isArray = Array.isArray || function (x) {
	  return x && typeof x.length === 'number';
	};
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Observable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(52);

	var _toSubscriber = __webpack_require__(53);

	var _observable = __webpack_require__(63);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = exports.Observable = function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        _classCallCheck(this, Observable);

	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */


	    _createClass(Observable, [{
	        key: 'lift',
	        value: function lift(operator) {
	            var observable = new Observable();
	            observable.source = this;
	            observable.operator = operator;
	            return observable;
	        }
	        /**
	         * Registers handlers for handling emitted values, error and completions from the observable, and
	         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	         * @method subscribe
	         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	         *  the error will be thrown as unhandled
	         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	         * @return {ISubscription} a subscription reference to the registered handlers
	         */

	    }, {
	        key: 'subscribe',
	        value: function subscribe(observerOrNext, error, complete) {
	            var operator = this.operator;

	            var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);
	            if (operator) {
	                operator.call(sink, this);
	            } else {
	                sink.add(this._subscribe(sink));
	            }
	            if (sink.syncErrorThrowable) {
	                sink.syncErrorThrowable = false;
	                if (sink.syncErrorThrown) {
	                    throw sink.syncErrorValue;
	                }
	            }
	            return sink;
	        }
	        /**
	         * @method forEach
	         * @param {Function} next a handler for each value emitted by the observable
	         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	         * @return {Promise} a promise that either resolves on observable completion or
	         *  rejects with the handled error
	         */

	    }, {
	        key: 'forEach',
	        value: function forEach(next, PromiseCtor) {
	            var _this = this;

	            if (!PromiseCtor) {
	                if (_root.root.Rx && _root.root.Rx.config && _root.root.Rx.config.Promise) {
	                    PromiseCtor = _root.root.Rx.config.Promise;
	                } else if (_root.root.Promise) {
	                    PromiseCtor = _root.root.Promise;
	                }
	            }
	            if (!PromiseCtor) {
	                throw new Error('no Promise impl found');
	            }
	            return new PromiseCtor(function (resolve, reject) {
	                var subscription = _this.subscribe(function (value) {
	                    if (subscription) {
	                        // if there is a subscription, then we can surmise
	                        // the next handling is asynchronous. Any errors thrown
	                        // need to be rejected explicitly and unsubscribe must be
	                        // called manually
	                        try {
	                            next(value);
	                        } catch (err) {
	                            reject(err);
	                            subscription.unsubscribe();
	                        }
	                    } else {
	                        // if there is NO subscription, then we're getting a nexted
	                        // value synchronously during subscription. We can just call it.
	                        // If it errors, Observable's `subscribe` will ensure the
	                        // unsubscription logic is called, then synchronously rethrow the error.
	                        // After that, Promise will trap the error and send it
	                        // down the rejection path.
	                        next(value);
	                    }
	                }, reject, resolve);
	            });
	        }
	    }, {
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            return this.source.subscribe(subscriber);
	        }
	        /**
	         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	         * @method Symbol.observable
	         * @return {Observable} this instance of the observable
	         */

	    }, {
	        key: _observable.$$observable,
	        value: function value() {
	            return this;
	        }
	    }]);

	    return Observable;
	}();
	// HACK: Since TypeScript inherits static properties too, we have to
	// fight against TypeScript here so Subject can have a different static create signature
	/**
	 * Creates a new cold Observable by calling the Observable constructor
	 * @static true
	 * @owner Observable
	 * @method create
	 * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	 * @return {Observable} a new cold observable
	 */


	Observable.create = function (subscribe) {
	    return new Observable(subscribe);
	};
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	var root = exports.root = objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self || objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window;
	var freeGlobal = objectTypes[typeof global === 'undefined' ? 'undefined' : _typeof(global)] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toSubscriber = toSubscriber;

	var _Subscriber = __webpack_require__(54);

	var _rxSubscriber = __webpack_require__(62);

	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof _Subscriber.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[_rxSubscriber.$$rxSubscriber]) {
	            return nextOrObserver[_rxSubscriber.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new _Subscriber.Subscriber();
	    }
	    return new _Subscriber.Subscriber(nextOrObserver, error, complete);
	}
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Subscriber = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _isFunction = __webpack_require__(55);

	var _Subscription2 = __webpack_require__(56);

	var _Observer = __webpack_require__(61);

	var _rxSubscriber = __webpack_require__(62);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = exports.Subscriber = function (_Subscription) {
	    _inherits(Subscriber, _Subscription);

	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _classCallCheck(this, Subscriber);

	        var _this = _possibleConstructorReturn(this, (Subscriber.__proto__ || Object.getPrototypeOf(Subscriber)).call(this));

	        _this.syncErrorValue = null;
	        _this.syncErrorThrown = false;
	        _this.syncErrorThrowable = false;
	        _this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                _this.destination = _Observer.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    _this.destination = _Observer.empty;
	                    break;
	                }
	                if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        _this.destination = destinationOrNext;
	                        _this.destination.add(_this);
	                    } else {
	                        _this.syncErrorThrowable = true;
	                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                _this.syncErrorThrowable = true;
	                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
	                break;
	        }
	        return _this;
	    }

	    _createClass(Subscriber, [{
	        key: _rxSubscriber.$$rxSubscriber,
	        value: function value() {
	            return this;
	        }
	        /**
	         * A static factory for a Subscriber, given a (potentially partial) definition
	         * of an Observer.
	         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	         * @param {function(e: ?any): void} [error] The `error` callback of an
	         * Observer.
	         * @param {function(): void} [complete] The `complete` callback of an
	         * Observer.
	         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	         * Observer represented by the given arguments.
	         */

	    }, {
	        key: 'next',

	        /**
	         * The {@link Observer} callback to receive notifications of type `next` from
	         * the Observable, with a value. The Observable may call this method 0 or more
	         * times.
	         * @param {T} [value] The `next` value.
	         * @return {void}
	         */
	        value: function next(value) {
	            if (!this.isStopped) {
	                this._next(value);
	            }
	        }
	        /**
	         * The {@link Observer} callback to receive notifications of type `error` from
	         * the Observable, with an attached {@link Error}. Notifies the Observer that
	         * the Observable has experienced an error condition.
	         * @param {any} [err] The `error` exception.
	         * @return {void}
	         */

	    }, {
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                this.isStopped = true;
	                this._error(err);
	            }
	        }
	        /**
	         * The {@link Observer} callback to receive a valueless notification of type
	         * `complete` from the Observable. Notifies the Observer that the Observable
	         * has finished sending push-based notifications.
	         * @return {void}
	         */

	    }, {
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                this.isStopped = true;
	                this._complete();
	            }
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            if (this.closed) {
	                return;
	            }
	            this.isStopped = true;
	            _get(Subscriber.prototype.__proto__ || Object.getPrototypeOf(Subscriber.prototype), 'unsubscribe', this).call(this);
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.destination.next(value);
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.destination.error(err);
	            this.unsubscribe();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.complete();
	            this.unsubscribe();
	        }
	    }], [{
	        key: 'create',
	        value: function create(next, error, complete) {
	            var subscriber = new Subscriber(next, error, complete);
	            subscriber.syncErrorThrowable = false;
	            return subscriber;
	        }
	    }]);

	    return Subscriber;
	}(_Subscription2.Subscription);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SafeSubscriber = function (_Subscriber) {
	    _inherits(SafeSubscriber, _Subscriber);

	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _classCallCheck(this, SafeSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (SafeSubscriber.__proto__ || Object.getPrototypeOf(SafeSubscriber)).call(this));

	        _this2._parent = _parent;
	        var next = void 0;
	        var context = _this2;
	        if ((0, _isFunction.isFunction)(observerOrNext)) {
	            next = observerOrNext;
	        } else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if ((0, _isFunction.isFunction)(context.unsubscribe)) {
	                _this2.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = _this2.unsubscribe.bind(_this2);
	        }
	        _this2._context = context;
	        _this2._next = next;
	        _this2._error = error;
	        _this2._complete = complete;
	        return _this2;
	    }

	    _createClass(SafeSubscriber, [{
	        key: 'next',
	        value: function next(value) {
	            if (!this.isStopped && this._next) {
	                var _parent = this._parent;

	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._next, value);
	                } else if (this.__tryOrSetError(_parent, this._next, value)) {
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                var _parent = this._parent;

	                if (this._error) {
	                    if (!_parent.syncErrorThrowable) {
	                        this.__tryOrUnsub(this._error, err);
	                        this.unsubscribe();
	                    } else {
	                        this.__tryOrSetError(_parent, this._error, err);
	                        this.unsubscribe();
	                    }
	                } else if (!_parent.syncErrorThrowable) {
	                    this.unsubscribe();
	                    throw err;
	                } else {
	                    _parent.syncErrorValue = err;
	                    _parent.syncErrorThrown = true;
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                var _parent = this._parent;

	                if (this._complete) {
	                    if (!_parent.syncErrorThrowable) {
	                        this.__tryOrUnsub(this._complete);
	                        this.unsubscribe();
	                    } else {
	                        this.__tryOrSetError(_parent, this._complete);
	                        this.unsubscribe();
	                    }
	                } else {
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: '__tryOrUnsub',
	        value: function __tryOrUnsub(fn, value) {
	            try {
	                fn.call(this._context, value);
	            } catch (err) {
	                this.unsubscribe();
	                throw err;
	            }
	        }
	    }, {
	        key: '__tryOrSetError',
	        value: function __tryOrSetError(parent, fn, value) {
	            try {
	                fn.call(this._context, value);
	            } catch (err) {
	                parent.syncErrorValue = err;
	                parent.syncErrorThrown = true;
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var _parent = this._parent;

	            this._context = null;
	            this._parent = null;
	            _parent.unsubscribe();
	        }
	    }]);

	    return SafeSubscriber;
	}(Subscriber);
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isFunction = isFunction;
	function isFunction(x) {
	    return typeof x === 'function';
	}
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Subscription = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isArray = __webpack_require__(50);

	var _isObject = __webpack_require__(57);

	var _isFunction = __webpack_require__(55);

	var _tryCatch = __webpack_require__(58);

	var _errorObject = __webpack_require__(59);

	var _UnsubscriptionError = __webpack_require__(60);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = exports.Subscription = function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        _classCallCheck(this, Subscription);

	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */


	    _createClass(Subscription, [{
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            var hasErrors = false;
	            var errors = void 0;
	            if (this.closed) {
	                return;
	            }
	            this.closed = true;
	            var _unsubscribe = this._unsubscribe;
	            var _subscriptions = this._subscriptions;

	            this._subscriptions = null;
	            if ((0, _isFunction.isFunction)(_unsubscribe)) {
	                var trial = (0, _tryCatch.tryCatch)(_unsubscribe).call(this);
	                if (trial === _errorObject.errorObject) {
	                    hasErrors = true;
	                    (errors = errors || []).push(_errorObject.errorObject.e);
	                }
	            }
	            if ((0, _isArray.isArray)(_subscriptions)) {
	                var index = -1;
	                var len = _subscriptions.length;
	                while (++index < len) {
	                    var sub = _subscriptions[index];
	                    if ((0, _isObject.isObject)(sub)) {
	                        var _trial = (0, _tryCatch.tryCatch)(sub.unsubscribe).call(sub);
	                        if (_trial === _errorObject.errorObject) {
	                            hasErrors = true;
	                            errors = errors || [];
	                            var err = _errorObject.errorObject.e;
	                            if (err instanceof _UnsubscriptionError.UnsubscriptionError) {
	                                errors = errors.concat(err.errors);
	                            } else {
	                                errors.push(err);
	                            }
	                        }
	                    }
	                }
	            }
	            if (hasErrors) {
	                throw new _UnsubscriptionError.UnsubscriptionError(errors);
	            }
	        }
	        /**
	         * Adds a tear down to be called during the unsubscribe() of this
	         * Subscription.
	         *
	         * If the tear down being added is a subscription that is already
	         * unsubscribed, is the same reference `add` is being called on, or is
	         * `Subscription.EMPTY`, it will not be added.
	         *
	         * If this subscription is already in an `closed` state, the passed
	         * tear down logic will be executed immediately.
	         *
	         * @param {TeardownLogic} teardown The additional logic to execute on
	         * teardown.
	         * @return {Subscription} Returns the Subscription used or created to be
	         * added to the inner subscriptions list. This Subscription can be used with
	         * `remove()` to remove the passed teardown logic from the inner subscriptions
	         * list.
	         */

	    }, {
	        key: 'add',
	        value: function add(teardown) {
	            if (!teardown || teardown === Subscription.EMPTY) {
	                return Subscription.EMPTY;
	            }
	            if (teardown === this) {
	                return this;
	            }
	            var sub = teardown;
	            switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
	                case 'function':
	                    sub = new Subscription(teardown);
	                case 'object':
	                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                        break;
	                    } else if (this.closed) {
	                        sub.unsubscribe();
	                    } else {
	                        (this._subscriptions || (this._subscriptions = [])).push(sub);
	                    }
	                    break;
	                default:
	                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	            }
	            return sub;
	        }
	        /**
	         * Removes a Subscription from the internal list of subscriptions that will
	         * unsubscribe during the unsubscribe process of this Subscription.
	         * @param {Subscription} subscription The subscription to remove.
	         * @return {void}
	         */

	    }, {
	        key: 'remove',
	        value: function remove(subscription) {
	            // HACK: This might be redundant because of the logic in `add()`
	            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
	                return;
	            }
	            var subscriptions = this._subscriptions;
	            if (subscriptions) {
	                var subscriptionIndex = subscriptions.indexOf(subscription);
	                if (subscriptionIndex !== -1) {
	                    subscriptions.splice(subscriptionIndex, 1);
	                }
	            }
	        }
	    }]);

	    return Subscription;
	}();

	Subscription.EMPTY = function (empty) {
	    empty.closed = true;
	    return empty;
	}(new Subscription());
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.isObject = isObject;
	function isObject(x) {
	    return x != null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
	}
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tryCatch = tryCatch;

	var _errorObject = __webpack_require__(59);

	var tryCatchTarget = void 0;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    } catch (e) {
	        _errorObject.errorObject.e = e;
	        return _errorObject.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// typeof any so that it we don't have to cast when comparing a result to the error object
	var errorObject = exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = exports.UnsubscriptionError = function (_Error) {
	    _inherits(UnsubscriptionError, _Error);

	    function UnsubscriptionError(errors) {
	        _classCallCheck(this, UnsubscriptionError);

	        var _this = _possibleConstructorReturn(this, (UnsubscriptionError.__proto__ || Object.getPrototypeOf(UnsubscriptionError)).call(this));

	        _this.errors = errors;
	        var err = Error.call(_this, errors ? errors.length + ' errors occurred during unsubscription:\n  ' + errors.map(function (err, i) {
	            return i + 1 + ') ' + err.toString();
	        }).join('\n  ') : '');
	        _this.name = err.name = 'UnsubscriptionError';
	        _this.stack = err.stack;
	        _this.message = err.message;
	        return _this;
	    }

	    return UnsubscriptionError;
	}(Error);
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var empty = exports.empty = {
	    closed: true,
	    next: function next(value) {},
	    error: function error(err) {
	        throw err;
	    },
	    complete: function complete() {}
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$$rxSubscriber = undefined;

	var _root = __webpack_require__(52);

	var _Symbol = _root.root.Symbol;
	var $$rxSubscriber = exports.$$rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$$observable = undefined;
	exports.getSymbolObservable = getSymbolObservable;

	var _root = __webpack_require__(52);

	function getSymbolObservable(context) {
	    var $$observable = void 0;
	    var _Symbol = context.Symbol;
	    if (typeof _Symbol === 'function') {
	        if (_Symbol.observable) {
	            $$observable = _Symbol.observable;
	        } else {
	            $$observable = _Symbol('observable');
	            _Symbol.observable = $$observable;
	        }
	    } else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	var $$observable = exports.$$observable = getSymbolObservable(_root.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.async = undefined;

	var _AsyncAction = __webpack_require__(65);

	var _AsyncScheduler = __webpack_require__(67);

	var async = exports.async = new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
	//# sourceMappingURL=async.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncAction = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(52);

	var _Action2 = __webpack_require__(66);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsyncAction = exports.AsyncAction = function (_Action) {
	    _inherits(AsyncAction, _Action);

	    function AsyncAction(scheduler, work) {
	        _classCallCheck(this, AsyncAction);

	        var _this = _possibleConstructorReturn(this, (AsyncAction.__proto__ || Object.getPrototypeOf(AsyncAction)).call(this, scheduler, work));

	        _this.scheduler = scheduler;
	        _this.work = work;
	        _this.pending = false;
	        return _this;
	    }

	    _createClass(AsyncAction, [{
	        key: 'schedule',
	        value: function schedule(state) {
	            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	            if (this.closed) {
	                return this;
	            }
	            // Always replace the current state with the new state.
	            this.state = state;
	            // Set the pending flag indicating that this action has been scheduled, or
	            // has recursively rescheduled itself.
	            this.pending = true;
	            var id = this.id;
	            var scheduler = this.scheduler;
	            //
	            // Important implementation note:
	            //
	            // Actions only execute once by default, unless rescheduled from within the
	            // scheduled callback. This allows us to implement single and repeat
	            // actions via the same code path, without adding API surface area, as well
	            // as mimic traditional recursion but across asynchronous boundaries.
	            //
	            // However, JS runtimes and timers distinguish between intervals achieved by
	            // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
	            // serial `setTimeout` calls can be individually delayed, which delays
	            // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
	            // guarantee the interval callback will be invoked more precisely to the
	            // interval period, regardless of load.
	            //
	            // Therefore, we use `setInterval` to schedule single and repeat actions.
	            // If the action reschedules itself with the same delay, the interval is not
	            // canceled. If the action doesn't reschedule, or reschedules with a
	            // different delay, the interval will be canceled after scheduled callback
	            // execution.
	            //
	            if (id != null) {
	                this.id = this.recycleAsyncId(scheduler, id, delay);
	            }
	            this.delay = delay;
	            // If this action has already an async Id, don't request a new one.
	            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	            return this;
	        }
	    }, {
	        key: 'requestAsyncId',
	        value: function requestAsyncId(scheduler, id) {
	            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	            return _root.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
	        }
	    }, {
	        key: 'recycleAsyncId',
	        value: function recycleAsyncId(scheduler, id) {
	            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	            // If this action is rescheduled with the same delay time, don't clear the interval id.
	            if (delay !== null && this.delay === delay) {
	                return id;
	            }
	            // Otherwise, if the action's delay time is different from the current delay,
	            // clear the interval id
	            return _root.root.clearInterval(id) && undefined || undefined;
	        }
	        /**
	         * Immediately executes this action and the `work` it contains.
	         * @return {any}
	         */

	    }, {
	        key: 'execute',
	        value: function execute(state, delay) {
	            if (this.closed) {
	                return new Error('executing a cancelled action');
	            }
	            this.pending = false;
	            var error = this._execute(state, delay);
	            if (error) {
	                return error;
	            } else if (this.pending === false && this.id != null) {
	                // Dequeue if the action didn't reschedule itself. Don't call
	                // unsubscribe(), because the action could reschedule later.
	                // For example:
	                // ```
	                // scheduler.schedule(function doWork(counter) {
	                //   /* ... I'm a busy worker bee ... */
	                //   var originalAction = this;
	                //   /* wait 100ms before rescheduling the action */
	                //   setTimeout(function () {
	                //     originalAction.schedule(counter + 1);
	                //   }, 100);
	                // }, 1000);
	                // ```
	                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	            }
	        }
	    }, {
	        key: '_execute',
	        value: function _execute(state, delay) {
	            var errored = false;
	            var errorValue = undefined;
	            try {
	                this.work(state);
	            } catch (e) {
	                errored = true;
	                errorValue = !!e && e || new Error(e);
	            }
	            if (errored) {
	                this.unsubscribe();
	                return errorValue;
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var id = this.id;
	            var scheduler = this.scheduler;
	            var actions = scheduler.actions;
	            var index = actions.indexOf(this);
	            this.work = null;
	            this.delay = null;
	            this.state = null;
	            this.pending = false;
	            this.scheduler = null;
	            if (index !== -1) {
	                actions.splice(index, 1);
	            }
	            if (id != null) {
	                this.id = this.recycleAsyncId(scheduler, id, null);
	            }
	        }
	    }]);

	    return AsyncAction;
	}(_Action2.Action);
	//# sourceMappingURL=AsyncAction.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Action = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subscription2 = __webpack_require__(56);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A unit of work to be executed in a {@link Scheduler}. An action is typically
	 * created from within a Scheduler and an RxJS user does not need to concern
	 * themselves about creating and manipulating an Action.
	 *
	 * ```ts
	 * class Action<T> extends Subscription {
	 *   new (scheduler: Scheduler, work: (state?: T) => void);
	 *   schedule(state?: T, delay: number = 0): Subscription;
	 * }
	 * ```
	 *
	 * @class Action<T>
	 */
	var Action = exports.Action = function (_Subscription) {
	    _inherits(Action, _Subscription);

	    function Action(scheduler, work) {
	        _classCallCheck(this, Action);

	        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this));
	    }
	    /**
	     * Schedules this action on its parent Scheduler for execution. May be passed
	     * some context object, `state`. May happen at some point in the future,
	     * according to the `delay` parameter, if specified.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler.
	     * @return {void}
	     */


	    _createClass(Action, [{
	        key: 'schedule',
	        value: function schedule(state) {
	            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	            return this;
	        }
	    }]);

	    return Action;
	}(_Subscription2.Subscription);
	//# sourceMappingURL=Action.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncScheduler = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Scheduler2 = __webpack_require__(68);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AsyncScheduler = exports.AsyncScheduler = function (_Scheduler) {
	    _inherits(AsyncScheduler, _Scheduler);

	    function AsyncScheduler() {
	        var _ref;

	        _classCallCheck(this, AsyncScheduler);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = AsyncScheduler.__proto__ || Object.getPrototypeOf(AsyncScheduler)).call.apply(_ref, [this].concat(args)));

	        _this.actions = [];
	        /**
	         * A flag to indicate whether the Scheduler is currently executing a batch of
	         * queued actions.
	         * @type {boolean}
	         */
	        _this.active = false;
	        /**
	         * An internal ID used to track the latest asynchronous task such as those
	         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
	         * others.
	         * @type {any}
	         */
	        _this.scheduled = undefined;
	        return _this;
	    }

	    _createClass(AsyncScheduler, [{
	        key: 'flush',
	        value: function flush(action) {
	            var actions = this.actions;

	            if (this.active) {
	                actions.push(action);
	                return;
	            }
	            var error = void 0;
	            this.active = true;
	            do {
	                if (error = action.execute(action.state, action.delay)) {
	                    break;
	                }
	            } while (action = actions.shift()); // exhaust the scheduler queue
	            this.active = false;
	            if (error) {
	                while (action = actions.shift()) {
	                    action.unsubscribe();
	                }
	                throw error;
	            }
	        }
	    }]);

	    return AsyncScheduler;
	}(_Scheduler2.Scheduler);
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * An execution context and a data structure to order tasks and schedule their
	 * execution. Provides a notion of (potentially virtual) time, through the
	 * `now()` getter method.
	 *
	 * Each unit of work in a Scheduler is called an {@link Action}.
	 *
	 * ```ts
	 * class Scheduler {
	 *   now(): number;
	 *   schedule(work, delay?, state?): Subscription;
	 * }
	 * ```
	 *
	 * @class Scheduler
	 */
	var Scheduler = exports.Scheduler = function () {
	    function Scheduler(SchedulerAction) {
	        var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Scheduler.now;

	        _classCallCheck(this, Scheduler);

	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    /**
	     * Schedules a function, `work`, for execution. May happen at some point in
	     * the future, according to the `delay` parameter, if specified. May be passed
	     * some context object, `state`, which will be passed to the `work` function.
	     *
	     * The given arguments will be processed an stored as an Action object in a
	     * queue of actions.
	     *
	     * @param {function(state: ?T): ?Subscription} work A function representing a
	     * task, or some unit of work to be executed by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler itself.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @return {Subscription} A subscription in order to be able to unsubscribe
	     * the scheduled work.
	     */


	    _createClass(Scheduler, [{
	        key: "schedule",
	        value: function schedule(work) {
	            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var state = arguments[2];

	            return new this.SchedulerAction(this, work).schedule(state, delay);
	        }
	    }]);

	    return Scheduler;
	}();

	Scheduler.now = Date.now ? Date.now : function () {
	    return +new Date();
	};
	//# sourceMappingURL=Scheduler.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isScheduler = isScheduler;
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isDate = isDate;
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shiftScreen;

	var _reactions = __webpack_require__(37);

	function shiftScreen(source, provider) {
	  var _this = this;

	  return source.map(function (action) {
	    var state = _this.getState();
	    return [provider.actions.assignState({
	      shift: {
	        x: action.x,
	        y: action.y
	      }
	    }), (0, _reactions.reActionShiftScreen)(action.x, action.y)];
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _REACTION_MOVE_SCREEN;

	var _constants = __webpack_require__(13);

	var _moveScreenTo = __webpack_require__(73);

	var _moveScreenTo2 = _interopRequireDefault(_moveScreenTo);

	var _reviewArrows = __webpack_require__(74);

	var _reviewArrows2 = _interopRequireDefault(_reviewArrows);

	var _reviewArrowsStyle = __webpack_require__(75);

	var _reviewArrowsStyle2 = _interopRequireDefault(_reviewArrowsStyle);

	var _reviewNavigation = __webpack_require__(76);

	var _reviewNavigation2 = _interopRequireDefault(_reviewNavigation);

	var _shiftScreen = __webpack_require__(77);

	var _shiftScreen2 = _interopRequireDefault(_shiftScreen);

	var _edgeEffect = __webpack_require__(78);

	var _edgeEffect2 = _interopRequireDefault(_edgeEffect);

	var _infinityMove = __webpack_require__(79);

	var _infinityMove2 = _interopRequireDefault(_infinityMove);

	var _move = __webpack_require__(80);

	var _move2 = _interopRequireDefault(_move);

	var _translate = __webpack_require__(81);

	var _translate2 = _interopRequireDefault(_translate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = (_REACTION_MOVE_SCREEN = {}, _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_MOVE_SCREEN_TO, _moveScreenTo2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_REVIEW_ARROWS_STYLE, _reviewArrowsStyle2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_REVIEW_ARROWS, _reviewArrows2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_REVIEW_NAVIGATION, _reviewNavigation2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_SHIFT_SCREEN, _shiftScreen2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_EDGE_EFFECT, _edgeEffect2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_INFINITY_MOVE, _infinityMove2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_TRANSLATE, _translate2.default), _defineProperty(_REACTION_MOVE_SCREEN, _constants.REACTION_MOVE, _move2.default), _REACTION_MOVE_SCREEN);
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = moveScreenTo;

	var _reactions = __webpack_require__(37);

	var _actions = __webpack_require__(14);

	function performScreenTo(xy, instantly) {
	  var _this = this;

	  var x = xy[0],
	      y = xy[1];
	  return new Promise(function (resolve, reject) {
	    var absx = x * -1; // Real x
	    var absy = y * -1; // Real y

	    $(_this.htmlElements.screensWrapper).find('>*').removeClass('current');
	    $(_this.grid[xy[1]][xy[0]].node).addClass('current');

	    /**
	     * If instantly then adds class, which disables transitions
	     */
	    if (instantly) {
	      $(_this.htmlElements.screensWrapper).addClass('noTransit');
	    }

	    _this.dispatch((0, _reactions.reActionTranslate)(absx * 100, absy * 100));
	    //this.translate( (absx*100), (absy*100));

	    if (instantly) {
	      /*
	      Судя по тестам, применение стилей не происходит моментально. Возврат
	      transition сразу после указания стиля делает анимацию стиля, который
	      был установлен до этого. Поэтому нужно выждать хотя бы какое то время.
	      */
	      setTimeout(function () {
	        $(_this.htmlElements.screensWrapper).removeClass('noTransit');
	        resolve();
	      }, 10);
	    } else {
	      /*
	      Brahma(this.htmlElements.screensWrapper).one("transitionend webkitTransitionEnd
	      oTransitionEnd MSTransitionEnd", function() {
	      ("function"===typeof callback) && callback();
	      });
	      */
	      setTimeout(function () {
	        resolve();
	      }, _this.getState().config.duration);
	    }

	    // Select item in map
	    $(_this.htmlElements.map).find('>div>div').removeClass("current");
	    $(_this.htmlElements.map).find('div[data-coords=' + y + 'x' + x + ']').addClass("current");
	  });
	}

	function moveScreenTo(source, provider) {
	  var _this2 = this;

	  return source.map(function (action) {
	    return [provider.actions.assignState({
	      movingStartTime: new Date().getTime(),
	      moving: provider.getState().moving + 1
	    }), (0, _actions.actionEmit)('movingStart'), (0, _reactions.reActionReviewArrowsStyle)(), performScreenTo.call(_this2, action.coords, action.instantly).then(function () {
	      return [provider.actions.assignState({
	        movingEndTime: new Date().getTime(),
	        moving: provider.getState().moving - 1
	      }), (0, _actions.actionEmit)('movingEnd'), (0, _reactions.reActionReviewArrows)()];
	    })];
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reviewArrows;

	var _constants = __webpack_require__(13);

	function reviewArrows(source) {
	  var _this = this;

	  return source.do(function () {
	    /*
	    Расчет появления и исчезновения кнопок навигации  зависит не тольок
	    от того достигнуть ли край сетки, но и должен учитывать пропущенные
	    слайды
	    */

	    /*
	    Расчет стрелки вверх. Слайд не должен ровняться нулю или должен сущестовать
	    предыдущий слайда. Всё это истинно только если выключен режим `infinity`
	    При включенном инфинити всё это истинно только если индекс слайда
	    не равен нулю.
	    */
	    if (!_this.isMovable(_constants.DIRECTION_UP)) {
	      _this.navigationHide(_constants.DIRECTION_UP);
	    } else {
	      _this.navigationShow(_constants.DIRECTION_UP);
	    }
	    /*
	    Расчет движения вниз. Слайд не должен быть последним или не должно
	    сущестовать низлежащего слайда. Всё это истинно только если выключен
	    режим `infinity`.
	    При включенном инфинити всё это истинно только если индекс слайда
	    не послений.
	    */
	    if (!_this.isMovable(_constants.DIRECTION_DOWN)) {
	      _this.navigationHide(_constants.DIRECTION_DOWN);
	    } else {
	      _this.navigationShow(_constants.DIRECTION_DOWN);
	    }

	    /*
	    Расчет движения влево. Слайд не должен быть первым в ряду или должен
	    иметь слайды сзади. Всё это истинно только если выключен режим `infinity`.
	    В режиме инфинити всё это истинно только если это не первый слайд
	    в ряду
	    */
	    if (!_this.isMovable(_constants.DIRECTION_LEFT)) {
	      _this.navigationHide(_constants.DIRECTION_LEFT);
	    } else {
	      _this.navigationShow(_constants.DIRECTION_LEFT);
	    }

	    /*
	    Расчет движения вправо. Слайд не должен быть последним в ряду или
	    должен иметь след впереди. Это стинно только если выключен режим
	    `infiniti`.
	    В режиме инфинити всё это истинно только если это не последний слайд
	    в ряду
	    */
	    if (!_this.isMovable(_constants.DIRECTION_RIGHT)) {
	      _this.navigationHide(_constants.DIRECTION_RIGHT);
	    } else {
	      _this.navigationShow(_constants.DIRECTION_RIGHT);
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reviewArrowsStyle;

	var _TimerObservable = __webpack_require__(48);

	function reviewArrowsStyle(source, provider) {
	  var _this = this;

	  var config = provider.getState().config;

	  return source.delay(function (x) {
	    return provider.Rx.Observable.timer(Math.round(config.duration / 2));
	  }).do(function (action) {
	    var state = provider.getState();
	    if (_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme !== state.colorTheme) {
	      $(_this.htmlElements.navigation_up).removeClass(state.colorTheme);
	      $(_this.htmlElements.navigation_down).removeClass(state.colorTheme);
	      $(_this.htmlElements.navigation_left).removeClass(state.colorTheme);
	      $(_this.htmlElements.navigation_right).removeClass(state.colorTheme);
	    };
	    if (_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme) {
	      state.colorTheme = _this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme;
	      $(_this.htmlElements.navigation_up).addClass(_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme);
	      $(_this.htmlElements.navigation_down).addClass(_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme);
	      $(_this.htmlElements.navigation_left).addClass(_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme);
	      $(_this.htmlElements.navigation_right).addClass(_this.grid[state.currentScreen[1]][state.currentScreen[0]].colorTheme);
	    } else {
	      return provider.actions.assignState({
	        colorTheme: ''
	      });
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reviewNavigation;
	function reviewNavigation(source) {
	  var _this = this;

	  return source.do(function () {
	    /*
	    Расчет появления и исчезновения кнопок навигации  зависит не тольок
	    от того достигнуть ли край сетки, но и должен учитывать пропущенные
	    слайды
	    */

	    /*
	    Расчет стрелки вверх. Слайд не должен ровняться нулю или должен сущестовать
	    предыдущий слайда. Всё это истинно только если выключен режим `infinity`
	    При включенном инфинити всё это истинно только если индекс слайда
	    не равен нулю.
	    */
	    if (!_this.isMovable(DIRECTION_UP)) _this.navigationHide(DIRECTION_UP);else _this.navigationShow(DIRECTION_UP);

	    /*
	    Расчет движения вниз. Слайд не должен быть последним или не должно
	    сущестовать низлежащего слайда. Всё это истинно только если выключен
	    режим `infinity`.
	    При включенном инфинити всё это истинно только если индекс слайда
	    не послений.
	    */
	    if (!_this.isMovable(DIRECTION_DOWN)) _this.navigationHide(DIRECTION_DOWN);else _this.navigationShow(DIRECTION_DOWN);

	    /*
	    Расчет движения влево. Слайд не должен быть первым в ряду или должен
	    иметь слайды сзади. Всё это истинно только если выключен режим `infinity`.
	    В режиме инфинити всё это истинно только если это не первый слайд
	    в ряду
	    */
	    if (!_this.isMovable(DIRECTION_LEFT)) _this.navigationHide(DIRECTION_LEFT);else _this.navigationShow(DIRECTION_LEFT);

	    /*
	    Расчет движения вправо. Слайд не должен быть последним в ряду или
	    должен иметь след впереди. Это стинно только если выключен режим
	    `infiniti`.
	    В режиме инфинити всё это истинно только если это не последний слайд
	    в ряду
	    */
	    if (!_this.isMovable(DIRECTION_RIGHT)) _this.navigationHide(DIRECTION_RIGHT);else _this.navigationShow(DIRECTION_RIGHT);
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shiftScreen;
	/**
	* Shift all screens to concrete coords
	*
	* @param {number} action.x x-coordinate to shift
	* @param {number} action.y y-coordinate to shift
	*/
	function shiftScreen(source) {
	  var _this = this;

	  return source.do(function (action) {
	    $(_this.htmlElements.screensWrapper).css({
	      "top": action.y * -100 + "%",
	      "left": action.x * -100 + "%"
	    });
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = edgeEffect;
	/**
	* Worker for ACTION_EDGE_EFFECT
	*/
	function edgeEffect(source) {
	  var _this = this;

	  return source.do(function (action) {
	    _this.modules.edgeEffect.perform(action.direction);
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = infinityMove;
	/**
	* Worker for ACTION_INFINITY_MOVE
	*/
	function infinityMove(source) {
	  var _this = this;

	  return source.do(function (action) {
	    return _this.modules.infinity.perform(action.direction);
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = move;

	var _actions = __webpack_require__(14);

	var _reactions = __webpack_require__(37);

	function move(source) {
	  var _this = this;

	  return source.map(function (action) {
	    switch (_this.isMovable(action.direction)) {
	      case false:
	        return (0, _reactions.reActionEdgeEffect)(action.direction);break;
	      case 2:
	        return [(0, _actions.actionEmit)('beforeMove', [action.direction]), (0, _reactions.reActionInfinityMove)(action.direction)];
	        break;
	      case true:
	        return [(0, _actions.actionEmit)('beforeMove', [action.direction]), (0, _actions.actionGoto)(_this.getCoords(action.direction))];
	        break;
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = translate;
	function translate(source) {
	  var _this = this;

	  return source.do(function (action) {
	    var x = action.x,
	        y = action.y,
	        state = _this.getState(),
	        transform = true /*Brahma.caniuse('translate3D')*/ ? "translate3D(" + (x + state.shift.x * 100 + state.advshift.x) + "%," + (y + state.shift.y * 100 + state.advshift.y) + "%,0)" : "translateX(" + (x + state.shift.x * 100 + state.advshift.x) + "%) translateY(" + (y + state.shift.y * 100 + state.advshift.y) + "%)";
	    $(_this.htmlElements.screensWrapper).css({ "animation-play-state": 'paused' });
	    $(_this.htmlElements.screensWrapper).css({ "transform": transform });
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bootstrap;

	var _handleInitialHtml = __webpack_require__(83);

	var _handleInitialHtml2 = _interopRequireDefault(_handleInitialHtml);

	var _BrowserEnv = __webpack_require__(86);

	var _BrowserEnv2 = _interopRequireDefault(_BrowserEnv);

	var _actions = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var browserEnv = new _BrowserEnv2.default();

	function bootstrap(config) {
	  console.log(config);
	  /**
	   * Inspect existing code and build correct inner HTML
	   */
	  _handleInitialHtml2.default.call(this, this.getState().config);
	  /**
	   * Render map
	   */
	  this.renderMap();

	  // Set transition
	  $(this.htmlElements.screensWrapper).css({
	    'transition-duration': config.duration + 'ms'
	  });

	  $(this.htmlElements.screensWrapper).css({
	    'transition-timing-function': config.easing
	  });
	  /**
	   * Run Keylistener module if needed
	   */
	  if (config.keyboard) {
	    this.modules.keyListener.run();
	  }
	  /**
	   * Run infinity module if needed
	   */
	  if (config.infinity) {
	    this.modules.infinity.run();
	  }
	  /**
	   * Run touch support module if needed
	   */
	  if (config.touch) {
	    this.modules.touch.run();
	  }
	  /**
	   * Run mobile map if configurated and aviable
	   */
	  if (browserEnv.isMobile() && config.mobileMap) {
	    this.modules.mobileMap.run();
	  }
	  /**
	   * Go to start position
	   */
	  this.dispatch((0, _actions.actionGoto)(this.getState().currentScreen, true));

	  // Show container
	  $(this.selector).css("opacity", "1");
	}
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleInitialHtml;

	var _actions = __webpack_require__(14);

	var _reactions = __webpack_require__(37);

	var _createNavigationMap = __webpack_require__(84);

	var _createNavigationMap2 = _interopRequireDefault(_createNavigationMap);

	var _createSvgSprite = __webpack_require__(85);

	var _createSvgSprite2 = _interopRequireDefault(_createSvgSprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Analyzes existig HTML to build basic model.
	 *
	 * @private
	 * @return {type}  description
	 */
	function handleInitialHtml(config) {
	  var _this = this;

	  /**
	   * Add necassery class
	   */
	  $(this.selector).addClass('brahma-widgets-screens');
	  /**
	   * Convert inner content to grid
	   */
	  $(this.selector).find('>*').wrapAll($('<div/>'));
	  /**
	   * Define reference to directly HTML container of screens elements
	   */
	  this.htmlElements.screensWrapper = $(this.selector).find('>div').first();
	  /**
	   * Handle each of screen's draft
	   */
	  $(this.htmlElements.screensWrapper).find('>*').each(function (index, element) {
	    /*
	    Convert IMG to DIV with background
	    */
	    if (config.autoFillImages && $(element)[0].tagName.toUpperCase() === 'IMG') {
	      var src = $(element).attr("src"),
	          alt = $(element).attr("alt") || src.replace('\\', '/').split('/').reverse()[0];
	      element = $(element).replaceWith(document.createElement('DIV')).css({
	        "background-image": "url(\"" + src + "\")"
	      });
	      $(element).put('div', {
	        "class": "brahma-widgets-screens-label"
	      }).html(alt);
	    };
	    /**
	     * Get coordinates, set by the user in HTML attributes [screens-x] and [screens-y]
	     */

	    var xy = _this.registerCell(parseInt($(element).data("screens-x")), parseInt($(element).data("screens-y")), {
	      node: element,
	      colorTheme: $(element).data("screens-color-theme") || false
	    });
	    /**
	     * Set element position
	     */
	    $(element).css({
	      left: xy[0] * 100 + '%',
	      top: xy[1] * 100 + '%'
	    });
	    /**
	     * If element has attribute [current] then it is current screen
	     */
	    if ($(element).hasClass("current")) {
	      _this.dispatch((0, _actions.actionInitialCurrentScreen)(xy));
	    }
	  });

	  /**
	   * Render arrows
	   */
	  var arrowSpriteId = "screens-sprite-arrow";
	  var defssvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	  document.getElementsByTagName('body')[0].appendChild(defssvg);
	  defssvg.style.display = 'none';
	  defssvg.innerHTML = '<g id="yo-a"><path  d="M13.849,54.143l3.182,2.784l26.819-28.368L16.962,0.249l-3.206,2.989l24.17,25.388L13.849,54.143z"/></g>';

	  // Create navigation
	  this.htmlElements.navigation = $(this.selector).tie(function (element) {
	    $(element).put('div', {
	      "class": "dharma-widgets-screens-navigation dharma-widgets-screens-navigation-up"
	    }).tie(function (element) {

	      _this.htmlElements.navigation_up = element;
	      _createSvgSprite2.default.call(element, "#" + arrowSpriteId);
	      $(element).bind('click', function () {
	        _this.up();
	      });
	    }).and('div', {
	      "class": "dharma-widgets-screens-navigation dharma-widgets-screens-navigation-down"
	    }).tie(function (element) {
	      _this.htmlElements.navigation_down = element;
	      _createSvgSprite2.default.call(element, "#" + arrowSpriteId);
	      $(element).bind('click', function () {
	        _this.down();
	      });
	    }).and('div', {
	      "class": "dharma-widgets-screens-navigation dharma-widgets-screens-navigation-left"
	    }).tie(function (element) {

	      _this.htmlElements.navigation_left = element;
	      _createSvgSprite2.default.call(element, "#" + arrowSpriteId);
	      $(element).bind('click', function () {
	        _this.left();
	      });
	    }).and('div', {
	      "class": "dharma-widgets-screens-navigation dharma-widgets-screens-navigation-right"
	    }).tie(function (element) {
	      _this.htmlElements.navigation_right = element;
	      _createSvgSprite2.default.call(element, "#" + arrowSpriteId);
	      $(element).bind('click', function () {
	        _this.right();
	      });
	    });
	  });

	  // Create map object
	  this.htmlElements.map = _createNavigationMap2.default.call(this, config);

	  // Set transition
	  $(this.htmlElements.screensWrapper).css(['-webkit-', '-ms-', '-o-', '-moz-'], {
	    'transition-duration': config.duration + 'ms'
	  });

	  $(this.htmlElements.screensWrapper).css(['-webkit-', '-ms-', '-o-', '-moz-'], {
	    'transition-timing-function': config.easing
	  });

	  this.dispatch((0, _reactions.reActionReviewArrows)());
	}
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createNavigationMap;

	/**
	 * createNavigationMap - description
	 *
	 * @param  {type} config description
	 * @return {type}        description
	 */
	function createNavigationMap(config) {
	  return $(this.selector).put('div', {
	    "class": "dharma-widgets-screens-map"
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSvgSprite;
	/**
	 * Creates a <use /> to SVG
	 *
	 * @private
	 * @param  {type} selector description
	 * @return {type}          description
	 */
	function createSvgSprite(selector) {
	  //$(this).html('<svg><use xlink:href="#yo-a"></use></svg>');
	  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	  $(this)[0].appendChild(svg);
	  var use = document.createElementNS("http://www.w3.org/2000/svg", 'use');
	  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#yo-a");
	  svg.appendChild(use);
	}
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BrowserEnv = function () {
	  function BrowserEnv() {
	    _classCallCheck(this, BrowserEnv);
	  }

	  _createClass(BrowserEnv, [{
	    key: 'isMobile',
	    value: function isMobile() {
	      var check = false;
	      var i = 0,
	          iOS = false,
	          iDevice = ['iPad', 'iPhone', 'iPod'];

	      for (; i < iDevice.length; i++) {
	        if (navigator.platform === iDevice[i]) {
	          return true;break;
	        }
	      }
	      (function (a, b) {
	        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)) check = true;
	      })(navigator.userAgent || navigator.vendor || window.opera);

	      return check;
	    }
	  }]);

	  return BrowserEnv;
	}();

	exports.default = BrowserEnv;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	var _actions = __webpack_require__(14);

	var _reactions = __webpack_require__(37);

	var _ArrayObservable = __webpack_require__(89);

	__webpack_require__(92);

	var _constants = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var SUBREACTION_EDGE_EFFECT = 'SUBREACTION_EDGE_EFFECT';


	function edgeEffectReaction(source, provider) {
	  var _this = this;

	  return source.filter(function (action) {
	    return provider.getState().config.deadlockEffect && !provider.getState().moving;
	  }).map(function (action) {
	    var state = _this.getState();

	    return [provider.actions.assignState({
	      advshift: Object.assign({}, provider.getState().advshift, _defineProperty({}, action.coords, 25 * action.direct))
	    }), (0, _reactions.reActionTranslate)(provider.getState().currentScreen[0] * -100, provider.getState().currentScreen[1] * -100), (0, _actions.actionAsync)([provider.actions.assignState({
	      advshift: Object.assign({}, provider.getState().advshift, _defineProperty({}, action.coords, 0))
	    }), (0, _reactions.reActionTranslate)(state.currentScreen[0] * -100, state.currentScreen[1] * -100)], 125)];
	  });
	}
	/**
	 * class ModuleEdgeEffect
	 */

	var ModuleEdgeEffect = function (_WidgetModule) {
	  _inherits(ModuleEdgeEffect, _WidgetModule);

	  function ModuleEdgeEffect() {
	    var _ref;

	    _classCallCheck(this, ModuleEdgeEffect);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this2 = _possibleConstructorReturn(this, (_ref = ModuleEdgeEffect.__proto__ || Object.getPrototypeOf(ModuleEdgeEffect)).call.apply(_ref, [this].concat(args)));

	    var observable = _this2.master.registerMiddleware(SUBREACTION_EDGE_EFFECT, edgeEffectReaction);
	    _this2.once('destroy', function () {
	      observable.dispose();
	    });
	    return _this2;
	  }

	  _createClass(ModuleEdgeEffect, [{
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'mod',
	    value: function mod(coords, direct) {
	      this.master.dispatch({
	        type: SUBREACTION_EDGE_EFFECT,
	        coords: coords,
	        direct: direct
	      });
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      this.mod('y', 1);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      this.mod('y', -1);
	    }
	  }, {
	    key: 'left',
	    value: function left() {
	      this.mod('x', 1);
	    }
	  }, {
	    key: 'right',
	    value: function right() {
	      this.mod('x', -1);
	    }
	  }, {
	    key: 'perform',
	    value: function perform(direction) {
	      switch (direction) {
	        case _constants.DIRECTION_UP:
	          this.up();break;
	        case _constants.DIRECTION_DOWN:
	          this.down();break;
	        case _constants.DIRECTION_LEFT:
	          this.left();break;
	        case _constants.DIRECTION_RIGHT:
	          this.right();break;
	      }
	    }
	  }]);

	  return ModuleEdgeEffect;
	}(_Module2.default);

	exports.default = ModuleEdgeEffect;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventEmmiter = __webpack_require__(30);

	var Module = function (_EventEmmiter) {
	  _inherits(Module, _EventEmmiter);

	  function Module(master) {
	    _classCallCheck(this, Module);

	    var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this));

	    _this.master = master;
	    return _this;
	  }

	  return Module;
	}(EventEmmiter);

	exports.default = Module;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArrayObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(51);

	var _ScalarObservable = __webpack_require__(90);

	var _EmptyObservable = __webpack_require__(91);

	var _isScheduler = __webpack_require__(69);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = exports.ArrayObservable = function (_Observable) {
	    _inherits(ArrayObservable, _Observable);

	    function ArrayObservable(array, scheduler) {
	        _classCallCheck(this, ArrayObservable);

	        var _this = _possibleConstructorReturn(this, (ArrayObservable.__proto__ || Object.getPrototypeOf(ArrayObservable)).call(this));

	        _this.array = array;
	        _this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            _this._isScalar = true;
	            _this.value = array[0];
	        }
	        return _this;
	    }

	    _createClass(ArrayObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var array = this.array;
	            var count = array.length;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                    array: array, index: index, count: count, subscriber: subscriber
	                });
	            } else {
	                for (var i = 0; i < count && !subscriber.closed; i++) {
	                    subscriber.next(array[i]);
	                }
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(array, scheduler) {
	            return new ArrayObservable(array, scheduler);
	        }
	        /**
	         * Creates an Observable that emits some values you specify as arguments,
	         * immediately one after the other, and then emits a complete notification.
	         *
	         * <span class="informal">Emits the arguments you provide, then completes.
	         * </span>
	         *
	         * <img src="./img/of.png" width="100%">
	         *
	         * This static operator is useful for creating a simple Observable that only
	         * emits the arguments given, and the complete notification thereafter. It can
	         * be used for composing with other Observables, such as with {@link concat}.
	         * By default, it uses a `null` Scheduler, which means the `next`
	         * notifications are sent synchronously, although with a different Scheduler
	         * it is possible to determine when those notifications will be delivered.
	         *
	         * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	         * var numbers = Rx.Observable.of(10, 20, 30);
	         * var letters = Rx.Observable.of('a', 'b', 'c');
	         * var interval = Rx.Observable.interval(1000);
	         * var result = numbers.concat(letters).concat(interval);
	         * result.subscribe(x => console.log(x));
	         *
	         * @see {@link create}
	         * @see {@link empty}
	         * @see {@link never}
	         * @see {@link throw}
	         *
	         * @param {...T} values Arguments that represent `next` values to be emitted.
	         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	         * the emissions of the `next` notifications.
	         * @return {Observable<T>} An Observable that emits each given input value.
	         * @static true
	         * @name of
	         * @owner Observable
	         */

	    }, {
	        key: 'of',
	        value: function of() {
	            for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
	                array[_key] = arguments[_key];
	            }

	            var scheduler = array[array.length - 1];
	            if ((0, _isScheduler.isScheduler)(scheduler)) {
	                array.pop();
	            } else {
	                scheduler = null;
	            }
	            var len = array.length;
	            if (len > 1) {
	                return new ArrayObservable(array, scheduler);
	            } else if (len === 1) {
	                return new _ScalarObservable.ScalarObservable(array[0], scheduler);
	            } else {
	                return new _EmptyObservable.EmptyObservable(scheduler);
	            }
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var array = state.array;
	            var index = state.index;
	            var count = state.count;
	            var subscriber = state.subscriber;

	            if (index >= count) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(array[index]);
	            if (subscriber.closed) {
	                return;
	            }
	            state.index = index + 1;
	            this.schedule(state);
	        }
	    }]);

	    return ArrayObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScalarObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(51);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = exports.ScalarObservable = function (_Observable) {
	    _inherits(ScalarObservable, _Observable);

	    function ScalarObservable(value, scheduler) {
	        _classCallCheck(this, ScalarObservable);

	        var _this = _possibleConstructorReturn(this, (ScalarObservable.__proto__ || Object.getPrototypeOf(ScalarObservable)).call(this));

	        _this.value = value;
	        _this.scheduler = scheduler;
	        _this._isScalar = true;
	        if (scheduler) {
	            _this._isScalar = false;
	        }
	        return _this;
	    }

	    _createClass(ScalarObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var value = this.value;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                    done: false, value: value, subscriber: subscriber
	                });
	            } else {
	                subscriber.next(value);
	                if (!subscriber.closed) {
	                    subscriber.complete();
	                }
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(value, scheduler) {
	            return new ScalarObservable(value, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var done = state.done;
	            var value = state.value;
	            var subscriber = state.subscriber;

	            if (done) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(value);
	            if (subscriber.closed) {
	                return;
	            }
	            state.done = true;
	            this.schedule(state);
	        }
	    }]);

	    return ScalarObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EmptyObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(51);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = exports.EmptyObservable = function (_Observable) {
	    _inherits(EmptyObservable, _Observable);

	    function EmptyObservable(scheduler) {
	        _classCallCheck(this, EmptyObservable);

	        var _this = _possibleConstructorReturn(this, (EmptyObservable.__proto__ || Object.getPrototypeOf(EmptyObservable)).call(this));

	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */


	    _createClass(EmptyObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	            } else {
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(scheduler) {
	            return new EmptyObservable(scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var subscriber = arg.subscriber;

	            subscriber.complete();
	        }
	    }]);

	    return EmptyObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(51);

	var _delay = __webpack_require__(93);

	_Observable.Observable.prototype.delay = _delay.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.delay = delay;

	var _async = __webpack_require__(64);

	var _isDate = __webpack_require__(70);

	var _Subscriber2 = __webpack_require__(54);

	var _Notification = __webpack_require__(94);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay) {
	    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _async.async;

	    var absoluteDelay = (0, _isDate.isDate)(delay);
	    var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}

	var DelayOperator = function () {
	    function DelayOperator(delay, scheduler) {
	        _classCallCheck(this, DelayOperator);

	        this.delay = delay;
	        this.scheduler = scheduler;
	    }

	    _createClass(DelayOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	        }
	    }]);

	    return DelayOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DelaySubscriber = function (_Subscriber) {
	    _inherits(DelaySubscriber, _Subscriber);

	    function DelaySubscriber(destination, delay, scheduler) {
	        _classCallCheck(this, DelaySubscriber);

	        var _this = _possibleConstructorReturn(this, (DelaySubscriber.__proto__ || Object.getPrototypeOf(DelaySubscriber)).call(this, destination));

	        _this.delay = delay;
	        _this.scheduler = scheduler;
	        _this.queue = [];
	        _this.active = false;
	        _this.errored = false;
	        return _this;
	    }

	    _createClass(DelaySubscriber, [{
	        key: '_schedule',
	        value: function _schedule(scheduler) {
	            this.active = true;
	            this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	                source: this, destination: this.destination, scheduler: scheduler
	            }));
	        }
	    }, {
	        key: 'scheduleNotification',
	        value: function scheduleNotification(notification) {
	            if (this.errored === true) {
	                return;
	            }
	            var scheduler = this.scheduler;
	            var message = new DelayMessage(scheduler.now() + this.delay, notification);
	            this.queue.push(message);
	            if (this.active === false) {
	                this._schedule(scheduler);
	            }
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.scheduleNotification(_Notification.Notification.createNext(value));
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.errored = true;
	            this.queue = [];
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.scheduleNotification(_Notification.Notification.createComplete());
	        }
	    }], [{
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var source = state.source;
	            var queue = source.queue;
	            var scheduler = state.scheduler;
	            var destination = state.destination;
	            while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
	                queue.shift().notification.observe(destination);
	            }
	            if (queue.length > 0) {
	                var _delay = Math.max(0, queue[0].time - scheduler.now());
	                this.schedule(state, _delay);
	            } else {
	                source.active = false;
	            }
	        }
	    }]);

	    return DelaySubscriber;
	}(_Subscriber2.Subscriber);

	var DelayMessage = function DelayMessage(time, notification) {
	    _classCallCheck(this, DelayMessage);

	    this.time = time;
	    this.notification = notification;
	};
	//# sourceMappingURL=delay.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Notification = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable = __webpack_require__(51);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = exports.Notification = function () {
	    function Notification(kind, value, exception) {
	        _classCallCheck(this, Notification);

	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */


	    _createClass(Notification, [{
	        key: 'observe',
	        value: function observe(observer) {
	            switch (this.kind) {
	                case 'N':
	                    return observer.next && observer.next(this.value);
	                case 'E':
	                    return observer.error && observer.error(this.exception);
	                case 'C':
	                    return observer.complete && observer.complete();
	            }
	        }
	        /**
	         * Given some {@link Observer} callbacks, deliver the value represented by the
	         * current Notification to the correctly corresponding callback.
	         * @param {function(value: T): void} next An Observer `next` callback.
	         * @param {function(err: any): void} [error] An Observer `error` callback.
	         * @param {function(): void} [complete] An Observer `complete` callback.
	         * @return {any}
	         */

	    }, {
	        key: 'do',
	        value: function _do(next, error, complete) {
	            var kind = this.kind;
	            switch (kind) {
	                case 'N':
	                    return next && next(this.value);
	                case 'E':
	                    return error && error(this.exception);
	                case 'C':
	                    return complete && complete();
	            }
	        }
	        /**
	         * Takes an Observer or its individual callback functions, and calls `observe`
	         * or `do` methods accordingly.
	         * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	         * the `next` callback.
	         * @param {function(err: any): void} [error] An Observer `error` callback.
	         * @param {function(): void} [complete] An Observer `complete` callback.
	         * @return {any}
	         */

	    }, {
	        key: 'accept',
	        value: function accept(nextOrObserver, error, complete) {
	            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	                return this.observe(nextOrObserver);
	            } else {
	                return this.do(nextOrObserver, error, complete);
	            }
	        }
	        /**
	         * Returns a simple Observable that just delivers the notification represented
	         * by this Notification instance.
	         * @return {any}
	         */

	    }, {
	        key: 'toObservable',
	        value: function toObservable() {
	            var kind = this.kind;
	            switch (kind) {
	                case 'N':
	                    return _Observable.Observable.of(this.value);
	                case 'E':
	                    return _Observable.Observable.throw(this.exception);
	                case 'C':
	                    return _Observable.Observable.empty();
	            }
	            throw new Error('unexpected notification kind value');
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `next` from a
	         * given value.
	         * @param {T} value The `next` value.
	         * @return {Notification<T>} The "next" Notification representing the
	         * argument.
	         */

	    }], [{
	        key: 'createNext',
	        value: function createNext(value) {
	            if (typeof value !== 'undefined') {
	                return new Notification('N', value);
	            }
	            return this.undefinedValueNotification;
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `error` from a
	         * given error.
	         * @param {any} [err] The `error` exception.
	         * @return {Notification<T>} The "error" Notification representing the
	         * argument.
	         */

	    }, {
	        key: 'createError',
	        value: function createError(err) {
	            return new Notification('E', undefined, err);
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `complete`.
	         * @return {Notification<any>} The valueless "complete" Notification.
	         */

	    }, {
	        key: 'createComplete',
	        value: function createComplete() {
	            return this.completeNotification;
	        }
	    }]);

	    return Notification;
	}();

	Notification.completeNotification = new Notification('C');
	Notification.undefinedValueNotification = new Notification('N', undefined);
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	var _constants = __webpack_require__(13);

	var _actions = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * class ModuleInfinity
	 */
	var ModuleInfinity = function (_WidgetModule) {
		_inherits(ModuleInfinity, _WidgetModule);

		function ModuleInfinity() {
			var _ref;

			_classCallCheck(this, ModuleInfinity);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _possibleConstructorReturn(this, (_ref = ModuleInfinity.__proto__ || Object.getPrototypeOf(ModuleInfinity)).call.apply(_ref, [this].concat(args)));
		}

		_createClass(ModuleInfinity, [{
			key: 'run',
			value: function run() {
				var state = this.master.getState();
				this.master.htmlElements.phantom = false;
				if (state.config.lockDelay === false) {
					this.master.dispatch(this.master.actions.assignState({
						config: Object.assign({}, state.config, {
							lockDelay: true
						})
					}));
				}
			}
			/*
	  Достраивает
	  */

		}, {
			key: 'perform',
			value: function perform(direction) {
				var _this2 = this;

				var fakex = void 0,
				    fakey = void 0,
				    nextx = void 0,
				    nexty = void 0,
				    protect = void 0,
				    state = this.master.getState();
				// Создаем фантомный элемент и правильно позиционируем его
				switch (direction) {
					case _constants.DIRECTION_UP:
						switch (state.config.infinityMethod) {
							case 'discover':
								fakey = this.master.getLastYSlideByX(state.currentScreen[0]) + 1, fakex = state.currentScreen[0];
								nexty = fakey - 1;
								nextx = fakex;
								break;
							case 'passage':
								fakey = this.master.grid.length;
								fakex = state.currentScreen[0];
								nexty = fakey - 1;
								nextx = fakex;
								break;
						}
						break;
					case _constants.DIRECTION_DOWN:
						switch (state.config.infinityMethod) {
							case 'discover':
								fakey = this.master.getFirstYSlideByX(state.currentScreen[0]) - 1, fakex = state.currentScreen[0];
								nexty = fakey + 1;
								nextx = fakex;
								break;
							case 'passage':
								fakey = -1;
								fakex = state.currentScreen[0];
								nexty = 0;
								nextx = fakex;
								break;
						}
						break;
					case _constants.DIRECTION_LEFT:
						switch (state.config.infinityMethod) {
							case 'discover':
								nexty = state.currentScreen[1];
								nextx = false;
								protect = 66;
								do {
									if (nexty < state.minY) nexty = state.maxY;else nexty--;
									nextx = this.master.getLastXSlideByY(nexty);
									protect--;
									if (protect < 0) {
										throw new Error('Infinity loop');
										return;
									}
								} while (nextx === false);

								fakey = nexty;
								fakex = nextx + 1;
								nexty = nexty;
								nextx = fakex - 1;

								break;
							case 'passage':
								fakey = state.currentScreen[1];
								fakex = this.master.grid[state.currentScreen[0]].length;
								nexty = 0;
								nextx = fakex - 1;
								break;
						}
						break;
					case _constants.DIRECTION_RIGHT:
						switch (state.config.infinityMethod) {
							case 'discover':
								nexty = state.currentScreen[1];
								nextx = false;
								protect = 66;
								do {
									if (nexty > state.maxY) nexty = state.minY;else nexty++;
									nextx = this.master.getFirstXSlideByY(nexty);
									protect--;
									if (protect < 0) {
										alert('fuuuuck');
										return;
									}
								} while (nextx === false);
								fakey = nexty;
								fakex = nextx - 1;
								nexty = nexty;
								nextx = fakex + 1;

								break;
							case 'passage':
								fakey = state.currentScreen[1];
								fakex = 0;
								nexty = 0;
								nextx = fakex + 1;
								break;
						}
						break;
				}
				if (!(this.master.portalGrid[fakex] && this.master.portalGrid[fakex][fakey])) {
					this.createFakeSlide(fakex, fakey);
				} else {
					// Если такой фрейм есть, то создаем фрейм стоящий за ним
					if (this.master.portalGrid[fakex][fakey].processed) {}
				}

				/*
	   Нам необходимо сместить видимую область на величину равную текущее
	   знаение до подставного значения
	   */
				this.master.dispatch((0, _actions.actionShiftScreen)(state.shift.x += fakex - state.currentScreen[0], state.shift.y += fakey - state.currentScreen[1]), function () {
					_this2.master.dispatch((0, _actions.actionGoto)([nextx, nexty], false), function () {
						_this2.master.portalGrid[fakex][fakey].processed = false;
					});
				});
			}
		}, {
			key: 'createFakeSlide',
			value: function createFakeSlide(fakex, fakey) {
				var state = this.master.getState();
				if ("object" !== _typeof(this.master.portalGrid[fakex])) this.master.portalGrid[fakex] = {};
				this.master.portalGrid[fakex][fakey] = {
					node: $(this.master.htmlElements.screensWrapper).put($(this.master.grid[state.currentScreen[1]][state.currentScreen[0]].node).clone()).css({
						left: fakex * 100 + '%',
						top: fakey * 100 + '%'
					}).addClass("fake"),
					processed: true
				};
			}
		}]);

		return ModuleInfinity;
	}(_Module2.default);

	exports.default = ModuleInfinity;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	var _constants = __webpack_require__(13);

	var _actions = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function keyDownHandler(e) {

	  this.master.emit('keydown', [e]);
	  switch (e.which) {
	    case 38:
	      this.master.up();
	      break;
	    case 40:
	      this.master.down();
	      break;
	    case 37:
	      this.master.left();
	      break;
	    case 39:
	      this.master.right();
	      break;
	  }
	}

	/**
	 * class ModuleKeyListener
	 */

	var ModuleKeyListener = function (_WidgetModule) {
	  _inherits(ModuleKeyListener, _WidgetModule);

	  function ModuleKeyListener() {
	    var _ref;

	    _classCallCheck(this, ModuleKeyListener);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = ModuleKeyListener.__proto__ || Object.getPrototypeOf(ModuleKeyListener)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(ModuleKeyListener, [{
	    key: 'run',
	    value: function run() {
	      var handler = keyDownHandler.bind(this);
	      $(document).bind('keydown', handler);
	      this.once('destroy', function () {
	        $(document).unbind(handler);
	      });
	    }
	  }]);

	  return ModuleKeyListener;
	}(_Module2.default);

	exports.default = ModuleKeyListener;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * class ModuleLocation
	 */
	var ModuleLocation = function (_WidgetModule) {
	  _inherits(ModuleLocation, _WidgetModule);

	  function ModuleLocation() {
	    var _ref;

	    _classCallCheck(this, ModuleLocation);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = ModuleLocation.__proto__ || Object.getPrototypeOf(ModuleLocation)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(ModuleLocation, [{
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);

	  return ModuleLocation;
	}(_Module2.default);

	exports.default = ModuleLocation;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * class ModuleMobileMap
	 */
	var ModuleMobileMap = function (_WidgetModule) {
	  _inherits(ModuleMobileMap, _WidgetModule);

	  function ModuleMobileMap() {
	    var _ref;

	    _classCallCheck(this, ModuleMobileMap);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = ModuleMobileMap.__proto__ || Object.getPrototypeOf(ModuleMobileMap)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(ModuleMobileMap, [{
	    key: 'run',
	    value: function run() {
	      var _this2 = this;

	      $(this.master.htmlElements.map).addClass('mobile');
	      this.master.on('movingStart', function () {
	        _this2.zoomMap();
	      });
	      this.master.on('movingEnd', function () {
	        _this2.tryUnZoomMap();
	      });
	    }
	  }, {
	    key: 'zoomMap',
	    value: function zoomMap() {
	      $(this.master.htmlElements.map).addClass('visible');
	    }
	  }, {
	    key: 'tryUnZoomMap',
	    value: function tryUnZoomMap() {
	      var _this3 = this;

	      setTimeout(function () {
	        if (!_this3.master.getState().moving) _this3.unZoomMap();
	      }, 150);
	    }
	  }, {
	    key: 'unZoomMap',
	    value: function unZoomMap() {
	      $(this.master.htmlElements.map).removeClass('visible');
	    }
	  }]);

	  return ModuleMobileMap;
	}(_Module2.default);

	exports.default = ModuleMobileMap;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * class ModulePreloader
	 */
	var ModulePreloader = function (_WidgetModule) {
	  _inherits(ModulePreloader, _WidgetModule);

	  function ModulePreloader() {
	    var _ref;

	    _classCallCheck(this, ModulePreloader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = ModulePreloader.__proto__ || Object.getPrototypeOf(ModulePreloader)).call.apply(_ref, [this].concat(args)));

	    _this.loadings = 0;
	    return _this;
	  }

	  _createClass(ModulePreloader, [{
	    key: 'run',
	    value: function run() {
	      // // Прячем все слайды, кроме первого
	      // for (var i =1; i<this.master.meta.slides.length;i++) {
	      //   $(this.master.meta.slides[i].node).css("opacity", 0);
	      // }
	      // // Первый слайд делаем статичным
	      // $(this.master.meta.slides[0].node).css("position", "static");
	      // // Мы снова сделаем его абсолютным, после загрузки остальных
	      // // Устанавливаем высоту контенера автоматической, если включен режим контроля высоты
	      // if (this.master.getState().config.adjustContainerHeight) $(this.master.selector).css({
	      //   height: 'auto'
	      // });
	      // // Ждем загрузки всех слайдов
	      // this.loadings = 0;
	      // var images=[], that = this;
	      // for (var i =0; i<this.master.meta.slides.length;i++) {
	      //   if (Brahma(this.master.meta.slides[i].node).is('img')) {
	      //     images.push(Brahma(this.master.meta.slides[i].node).attr("src")); that.loadings++;
	      //   } else
	      //   Brahma(this.master.meta.slides[i].node).find('img').each(function() {
	      //     images.push(Brahma(this).attr("src")); that.loadings++;
	      //   });
	      // }
	      // for (var i =0; i<images.length;i++) {
	      //   this.loadImage(images[i], i===0);
	      // }
	    }
	  }, {
	    key: 'loadImage',
	    value: function loadImage(src, first) {
	      var _this2 = this;

	      var img = new Image();

	      img.onload = img.onerror = function () {
	        _this2.loaded();
	      };

	      img.src = src;
	      if (first) {
	        // Если это первый элемент, мы должны передать первичные данные обработчикам
	        // и установить эту высоту на всех контейнер
	        this.master.emit('firstimginit', [img]);
	      }
	    }
	  }, {
	    key: 'loaded',
	    value: function loaded() {
	      this.loadings--;
	      if (this.loadings === 0) this.done();
	    }
	  }, {
	    key: 'done',
	    value: function done() {
	      $(this.master.meta.slides[0].node).css("position", "absolute");
	      // Отображаем все слайды и запускаем слайдшоу, если нужно
	      //this.master.module.slideshow..resume();
	    }
	  }]);

	  return ModulePreloader;
	}(_Module2.default);

	exports.default = ModulePreloader;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Module = __webpack_require__(88);

	var _Module2 = _interopRequireDefault(_Module);

	var _MobileTouch = __webpack_require__(101);

	var _MobileTouch2 = _interopRequireDefault(_MobileTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * class ModuleTouch
	 */
	var ModuleTouch = function (_WidgetModule) {
	  _inherits(ModuleTouch, _WidgetModule);

	  function ModuleTouch() {
	    var _ref;

	    _classCallCheck(this, ModuleTouch);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = ModuleTouch.__proto__ || Object.getPrototypeOf(ModuleTouch)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(ModuleTouch, [{
	    key: 'run',
	    value: function run() {
	      var _this2 = this;

	      this.listner = new _MobileTouch2.default(this.master.selector, {
	        simpleMoves: true,
	        minMoveX: 30,
	        minMoveY: 30,
	        preventDefaultEvents: false
	      });

	      this.listner.on('swipeLeft', function () {
	        _this2.master.right();
	      });
	      this.listner.on('swipeRight', function () {
	        _this2.master.left();
	      });
	      this.listner.on('swipeUp', function () {
	        _this2.master.down();
	      });
	      this.listner.on('swipeDown', function () {
	        _this2.master.up();
	      });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);

	  return ModuleTouch;
	}(_Module2.default);

	exports.default = ModuleTouch;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(30);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MobileTouch = function (_EventEmitter) {
		_inherits(MobileTouch, _EventEmitter);

		function MobileTouch(element, config) {
			var _ret;

			_classCallCheck(this, MobileTouch);

			var _this = _possibleConstructorReturn(this, (MobileTouch.__proto__ || Object.getPrototypeOf(MobileTouch)).call(this));

			_this.element = element;
			_this.config = Object.assign({}, config, config || {});
			_this.startX = null;
			_this.isMoving = null;

			_this.touchMoveHandler = function (e) {
				if (_this.config.preventDefaults) e.preventDefault();
				//e.stopPropagation();
				_this.onTouchMove(e);
			};

			element.addEventListener('touchstart', function (e) {
				// if(component.config.preventDefaultsFunction.call(component, e)) {
				// 	  e.preventDefault();
				// };
				_this.onTouchStart(e);
			}, false);
			element.addEventListener('touchend', function (e) {
				_this.emit("throw", [e.target, e]);

				// if(component.config.preventDefaultsFunction.call(component, e)) {
				// 	//e.preventDefault();
				// };
				_this.cancelTouch();
			}, false);

			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		_createClass(MobileTouch, [{
			key: 'cancelTouch',
			value: function cancelTouch() {

				this.element.removeEventListener('touchmove', this.touchMoveHandler);

				this.startX = null;
				this.isMoving = false;
			}
		}, {
			key: 'onTouchMove',
			value: function onTouchMove(e) {
				var _this2 = this;

				if (this.isMoving) {

					var x = e.touches[0].pageX;
					var y = e.touches[0].pageY;
					var dx = this.startX - x;
					var dy = this.startY - y;

					var checkVerticalSwipe = function checkVerticalSwipe() {
						if (!_this2.config.preventVerticalSwipe && Math.abs(dx) < Math.abs(dy)) {
							return true;
						}
						return false;
					};

					/* Событие свайп */
					this.emit('wipe', [{
						dX: dx,
						dY: dy
					}]);

					if (Math.abs(dx) >= this.config.minMoveX) {
						if (this.config.simpleMoves) this.cancelTouch();
						if (dx >= 0) {
							this.emit('swipeLeft', [{
								dX: dx,
								dY: dy
							}]);
						} else {
							this.emit('swipeRight', [{
								dX: dx,
								dY: dy
							}]);
						}
						return checkVerticalSwipe;
					} else if (Math.abs(dy) >= this.config.minMoveY) {

						if (this.config.simpleMoves) this.cancelTouch();
						if (dy >= 0) {
							this.emit('swipeUp', [{
								dX: dx,
								dY: dy
							}]);
						} else {
							this.emit('swipeDown', [{
								dX: dx,
								dY: dy
							}]);
						}
						return checkVerticalSwipe;
					} else {

						return checkVerticalSwipe;
					}

					return false;
				}
			}
		}, {
			key: 'onTouchStart',
			value: function onTouchStart(e) {
				this.startX = e.touches[0].pageX;
				this.startY = e.touches[0].pageY;
				this.isMoving = true;

				this.element.addEventListener('touchmove', this.touchMoveHandler, false);
			}
		}]);

		return MobileTouch;
	}(_events2.default);

	exports.default = MobileTouch;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;