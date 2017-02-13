module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (context) {
	    return new Promise(function (resolve) {
	        resolve((0, _main.createApp)());
	    });
	};

	var _main = __webpack_require__(61);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("Vue");

/***/ },

/***/ 7:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var listToStyles = __webpack_require__(9)

	module.exports = function (parentId, list, isProduction) {
	  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	    var context = __VUE_SSR_CONTEXT__
	    var styles = context._styles

	    if (!styles) {
	      styles = context._styles = {}
	      Object.defineProperty(context, 'styles', {
	        enumberable: true,
	        get () {
	          return (
	            context._renderedStyles ||
	            (context._renderedStyles = renderStyles(styles))
	          )
	        }
	      })
	    }

	    list = listToStyles(parentId, list)
	    if (isProduction) {
	      addStyleProd(styles, list)
	    } else {
	      addStyleDev(styles, list)
	    }
	  }
	}

	// In production, render as few style tags as possible.
	// (mostly because IE9 has a limit on number of style tags)
	function addStyleProd (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      // group style tags by media types.
	      var id = part.media || 'default'
	      var style = styles[id]
	      if (style) {
	        style.ids.push(part.id)
	        style.css += '\n' + part.css
	      } else {
	        styles[id] = {
	          ids: [part.id],
	          css: part.css,
	          media: part.media
	        }
	      }
	    }
	  }
	}

	// In dev we use individual style tag for each module for hot-reload
	// and source maps.
	function addStyleDev (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      styles[part.id] = {
	        ids: [part.id],
	        css: part.css,
	        media: part.media
	      }
	    }
	  }
	}

	function renderStyles (styles) {
	  var css = ''
	  for (var key in styles) {
	    var style = styles[key]
	    css += `<style data-vue-ssr-id="${
	      style.ids.join(' ')
	    }"${
	      style.media ? ` media="${style.media}"` : ''
	    }>${style.css}</style>`
	  }
	  return css
	}


/***/ },

/***/ 9:
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createApp = exports.Vue = undefined;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(62);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createApp = function createApp(req, res, options) {
	    var VueApp = _vue2.default.extend(_index2.default);
	    return new VueApp(Object.assign({}, options || {}));
	};

	exports.Vue = _vue2.default;
	exports.createApp = createApp;

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(63)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(68),
	  /* template */
	  __webpack_require__(69),
	  /* scopeId */
	  "data-v-44f7afbe",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-notfound\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("45f8be53", content, false);

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper[data-v-44f7afbe] {\n  height: 100%;\n  padding-bottom: 1.4rem;\n  background: #ffaf1a;\n  position: relative;\n  background: url(" + __webpack_require__(65) + ") no-repeat;\n  background-size: 100%;\n  width: 7.20rem;\n}\n.wrapper .android-btn[data-v-44f7afbe], .wrapper .ios-btn[data-v-44f7afbe] {\n    position: absolute;\n    left: 3.44rem;\n    top: 7.35rem;\n    width: 2.83rem;\n    height: .81rem;\n}\n.wrapper .android-btn[data-v-44f7afbe] {\n    background: url(" + __webpack_require__(66) + ") no-repeat;\n    background-size: 100%;\n}\n.wrapper .ios-btn[data-v-44f7afbe] {\n    top: 6.19rem !important;\n    background: url(" + __webpack_require__(67) + ") no-repeat;\n    background-size: 100%;\n}\n", ""]);

	// exports


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/bg-0d386f7c9b.png";

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/android_download-1a8453dc5e.png";

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/ios_download-8d7b638a7e.png";

/***/ },

/***/ 68:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {};

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "android-btn",
	    on: {
	      "click": _vm.downloadByAndroid
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "ios-btn",
	    on: {
	      "click": _vm.downloadByIOS
	    }
	  }), _vm._v(" "), _c('download-bar', {
	    attrs: {
	      "msg": _vm.msg
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });