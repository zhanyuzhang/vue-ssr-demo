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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (options) {
	    return new Promise(function (resolve) {
	        resolve((0, _main.createApp)(options));
	    });
	};

	var _main = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createApp = exports.Vue = undefined;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createApp = function createApp(options) {
	    var VueApp = _vue2.default.extend(_index2.default);
	    return new VueApp(Object.assign({}, options || null));
	};

	exports.Vue = _vue2.default;
	exports.createApp = createApp;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("Vue");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(4)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(10),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  "data-v-ad3c49ec",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(7)("b97e1e54", content, false);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper[data-v-ad3c49ec] {\n  height: 100%;\n  overflow-y: scroll;\n}\n.wrapper .channel-set[data-v-ad3c49ec] {\n    padding: 0 .13rem 0.13rem .3rem;\n    background: #e3e7ea;\n}\n.wrapper .channel-video-list[data-v-ad3c49ec] {\n    width: 100%;\n    clear: both;\n    margin: 0 auto;\n    padding-bottom: 2.016rem;\n}\n", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var listToStyles = __webpack_require__(8)

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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(11);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(18);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(23);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(32);

	var _index8 = _interopRequireDefault(_index7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'channel',
	  components: {
	    'channel-info': _index2.default,
	    'set-info': _index4.default,
	    'video-info': _index6.default,
	    'download-bar': _index8.default
	  },
	  data: function data() {
	    return {
	      channelInfo: {},
	      channelSet: [],
	      videoList: [],
	      pageNum: 1,
	      pageSize: 10,
	      sid: null,
	      activeSid: null,
	      isLoading: false,
	      isAll: false,
	      userId: null,
	      canShow: false
	    };
	  }
	}; //
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(12)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  "data-v-4bb5809a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\channel-info\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(7)("59f659bf", content, false);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\nh3[data-v-4bb5809a], h4[data-v-4bb5809a], h5[data-v-4bb5809a], h6[data-v-4bb5809a] {\n  font-weight: normal;\n}\n.channel-info[data-v-4bb5809a] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  background: #e3e7ea;\n  height: 3.8304rem;\n  position: relative;\n}\n.channel-info .channel-info-bg1[data-v-4bb5809a] {\n    width: 100%;\n    clear: both;\n    margin: 0 auto;\n    height: 2.8512rem;\n    background: #292929 url(" + __webpack_require__(14) + ") center 0;\n    background-size: 100% 160%;\n}\n.channel-info .channel-info-avatar[data-v-4bb5809a] {\n    background: #fff;\n    width: 2.592rem;\n    height: 2.592rem;\n    position: absolute;\n    left: 0.288rem;\n    top: 1.008rem;\n    border: 2px solid #fff;\n    border-radius: 2.592rem;\n    overflow: hidden;\n}\n.channel-info .channel-info-avatar img[data-v-4bb5809a] {\n      width: 2.592rem;\n      height: 2.592rem;\n      border-radius: 2.592rem;\n}\n.channel-info .channel-info-title[data-v-4bb5809a] {\n    position: absolute;\n    left: 3.312rem;\n    top: 0.72rem;\n    color: #fff;\n    width: 7.344rem;\n}\n.channel-info .channel-info-title h2[data-v-4bb5809a] {\n    font-size: 0.6048rem;\n    line-height: 160%;\n    text-align: left;\n    padding-right: 0.288rem;\n    padding-top: 0.144rem;\n    text-overflow: ellipsis;\n    word-break: break-all;\n    overflow: hidden;\n    height: 0.9648rem;\n    font-weight: bold;\n}\n.channel-info .channel-info-title h3[data-v-4bb5809a] {\n    font-size: 0.3168rem;\n    height: 0.864rem;\n    line-height: 0.432rem;\n    overflow: hidden;\n    padding-right: 0.288rem;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n.channel-info .channel-info-title h4[data-v-4bb5809a] {\n    padding: 0.288rem 0 0;\n}\n.channel-info .channel-info-title h4 .channel-info-follows[data-v-4bb5809a] {\n      color: #fff;\n      font-size: 0.3168rem;\n      background: #ffaf1a;\n      border-radius: 4px;\n      line-height: 160%;\n      padding: 3px 10px 3px;\n      margin-right: 10px;\n      float: left;\n}\n.channel-info .channel-info-title h4 .channel-info-fol-num[data-v-4bb5809a] {\n      line-height: 160%;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: left;\n      padding: 3px 0 3px;\n}\n.channel-info .channel-info-title h4 .channel-info-fol-text[data-v-4bb5809a] {\n      line-height: 160%;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: left;\n      padding: 3px 0 3px;\n}\n.channel-info .channel-info-title h4 .channel-info-share[data-v-4bb5809a] {\n      background: url(" + __webpack_require__(15) + ") no-repeat 0 3px;\n      background-size: 0.5472rem 0.4896rem;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: right;\n      padding: 3px 0 3px 0.648rem;\n      margin-right: 0.288rem;\n      line-height: 160%;\n      height: 0.576rem;\n      display: none;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/bg-f98de5b7a5.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/share-6cb5f92a06.png";

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

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

	exports.default = {
	  name: 'channel-info',
	  props: ['channelInfo']
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "channel-info"
	  }, [_c('div', {
	    staticClass: "channel-info-bg1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "channel-info-avatar"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.channelInfo.avatar
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "channel-info-title"
	  }, [_c('h2', [_vm._v(_vm._s(_vm.channelInfo.nick))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.channelInfo.intro))]), _vm._v(" "), _c('h4', [_c('span', {
	    staticClass: "channel-info-follows"
	  }, [_vm._v("+ 关注")]), _vm._v(" "), _c('span', {
	    staticClass: "channel-info-fol-num"
	  }, [_vm._v(_vm._s(_vm.channelInfo.followedCount))]), _vm._v(" "), _c('span', {
	    staticClass: "channel-info-fol-text"
	  }, [_vm._v("人已关注")]), _vm._v(" "), _c('span', {
	    staticClass: "channel-info-share"
	  }, [_vm._v("分享")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(19)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(21),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  "data-v-a051b318",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\set-info\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(7)("45fbbe3d", content, false);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.channel-set-list[data-v-a051b318] {\n  display: inline-block;\n  font-size: 0.432rem;\n  margin: .13rem;\n  border: 0.0144rem solid #2e2e2e;\n  text-align: center;\n  background: #fff;\n  padding: 0.072rem 0.288rem;\n  color: #2e2e2e;\n  border-radius: 0.072rem;\n}\n.channel-set-list.active[data-v-a051b318] {\n    color: #ffaf1a;\n    font-weight: bold;\n    border: #ffaf1a 0.0144rem solid;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

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

	exports.default = {
	  name: 'set-info',
	  props: ['setInfo', 'activeSid'],
	  computed: {
	    isActive: function isActive() {
	      return this.setInfo.sid === this.activeSid;
	    }
	  },
	  methods: {
	    selectSet: function selectSet() {
	      this.$emit('changeSet', this.setInfo.sid);
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "channel-set-list",
	    class: {
	      active: _vm.isActive
	    },
	    on: {
	      "click": _vm.selectSet
	    }
	  }, [_vm._v("\n  " + _vm._s(_vm.setInfo.name) + "\n")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(24)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(30),
	  /* template */
	  __webpack_require__(31),
	  /* scopeId */
	  "data-v-5e9b213b",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\video-info\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(7)("b5fc774e", content, false);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.channel-video[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  border-top: 0.3168rem solid #e3e7ea;\n}\n.channel-video-cover[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  height: 6.0768rem;\n  position: relative;\n  display: block;\n}\n.channel-video-cover img[data-v-5e9b213b] {\n  width: 100%;\n  height: 6.0768rem;\n}\n.channel-video-cover-bg[data-v-5e9b213b] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 6.0768rem;\n  z-index: 5;\n  background: url(" + __webpack_require__(26) + ") repeat-x;\n  background-size: 100% 100%;\n}\n.channel-video-cover-playic[data-v-5e9b213b] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 1.6128rem;\n  height: 1.6128rem;\n  background: url(" + __webpack_require__(27) + ") repeat-x;\n  background-size: 100% 100%;\n  z-index: 6;\n  display: block;\n  margin-left: -0.8064rem;\n  margin-top: -0.8064rem;\n}\n.channel-video-cover-text[data-v-5e9b213b] {\n  position: absolute;\n  right: 0.288rem;\n  bottom: 0.288rem;\n  z-index: 5;\n}\n.channel-video-cover-text-update[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(28) + ");\n  line-height: 0.2592rem;\n  font-size: 0.2592rem;\n  color: #fff;\n  padding: 3px 6px 2px;\n  border-radius: 3px;\n}\n.channel-video-cover-text-time[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(28) + ");\n  line-height: 0.2592rem;\n  font-size: 0.2592rem;\n  color: #fff;\n  padding: 3px 6px 2px;\n  border-radius: 3px;\n  margin-left: 0.144rem;\n}\n.channel-video h2[data-v-5e9b213b] {\n  text-align: left;\n  clear: both;\n}\n.channel-video h2 a[data-v-5e9b213b] {\n  display: block;\n  font-size: 0.4608rem;\n  line-height: 140%;\n  padding: 0.432rem 0.288rem;\n  font-weight: bold;\n}\n.channel-video h2 a[data-v-5e9b213b], .channel-video h2 a[data-v-5e9b213b]:visited {\n  color: #2e2e2e;\n}\n.channel-video h2 a[data-v-5e9b213b]:active {\n  color: #a60000;\n}\n.channel-video-info[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  border-bottom: 0.5472rem solid #ccc;\n}\n.channel-video-type[data-v-5e9b213b] {\n  margin-left: 0.288rem;\n  color: #ff9933;\n  float: left;\n  display: inline-block;\n  font-size: 0.3168rem;\n  color: #b4b4b4;\n}\n.channel-video-pt[data-v-5e9b213b] {\n  margin-right: 0.288rem;\n  font-size: 0.3168rem;\n  color: #2e2e2e;\n  float: right;\n  line-height: 0.3744rem;\n}\n.channel-video-pt-ic[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(29) + ") no-repeat;\n  width: 0.3744rem;\n  height: 0.3744rem;\n  background-size: 0.3456rem 0.3456rem;\n  display: inline-block;\n  margin-right: 2px;\n  vertical-align: bottom;\n}\n.channel-video-pt span[data-v-5e9b213b] {\n  font-size: 0.3168rem;\n}\n.channel-video-bline[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  height: 0.5472rem;\n}\na[data-v-5e9b213b] {\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/crbg05-67f8379cef.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/cr_play-0e3356b7df.png";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzODEwMDlGQkI2MTFFNUFDMjFFQUNFNjQwN0ExRDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzODEwMEFGQkI2MTFFNUFDMjFFQUNFNjQwN0ExRDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDM4MTAwN0ZCQjYxMUU1QUMyMUVBQ0U2NDA3QTFENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDM4MTAwOEZCQjYxMUU1QUMyMUVBQ0U2NDA3QTFENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp1OEbIAAAAVSURBVHjaYtTT09vMAARMDFAAEGAAEqABQfQpJCEAAAAASUVORK5CYII="

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/crbg02-73fde5548b.png";

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

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

	exports.default = {
	  name: 'videoInfo',
	  props: ['videoInfo'],
	  filters: {
	    formatUploadTime: function formatUploadTime(val) {
	      var differStr = "";
	      var nowTime = new Date();
	      var nowMillis = nowTime.getTime();
	      var differSeconds = (nowMillis - val) / 1000;
	      var differMinutes = Math.floor(differSeconds / 60);
	      if (differMinutes < 0) {
	        differMinutes = 1;
	      }
	      if (differMinutes <= 59) {
	        differStr = differMinutes + "分钟前";
	      } else if (differMinutes > 59 && differMinutes < 1440) {
	        differStr = Math.floor(differMinutes / 60) + "小时前";
	      } else if (differMinutes >= 1440 && differMinutes < 43200) {
	        differStr = Math.floor(differMinutes / 60 / 24) + "天前";
	      } else {
	        differStr = Math.floor(differMinutes / 60 / 24 / 30) + "个月前";
	      }
	      return differStr;
	    },
	    formatDuration: function formatDuration(val) {
	      var theTime = parseInt(val); // 秒
	      var theTime1 = 0; // 分
	      var theTime2 = 0; // 小时
	      if (theTime > 60) {
	        theTime1 = parseInt(theTime / 60);
	        theTime = parseInt(theTime % 60);
	        if (theTime1 > 60) {
	          theTime2 = parseInt(theTime1 / 60);
	          theTime1 = parseInt(theTime1 % 60);
	        }
	      }
	      if (theTime < 10) {
	        theTime = "0" + theTime;
	      }
	      var result = "" + theTime;
	      if (theTime1 > 0) {
	        if (theTime1 < 10) {
	          theTime1 = "0" + theTime1;
	        }
	        result = "" + theTime1 + ":" + result;
	      }
	      if (theTime2 > 0) {
	        if (theTime2 < 10) {
	          theTime2 = "0" + theTime2;
	        }
	        result = "" + theTime2 + ":" + result;
	      }
	      return result;
	    },
	    formatVideoId: function formatVideoId(val) {
	      return '/m/play?videoId=' + val + '&sourceFrom=up';
	    },
	    formatTag: function formatTag(val) {
	      return '#' + val.split(',').join(' #');
	    }
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "channel-video"
	  }, [_c('a', {
	    staticClass: "channel-video-cover",
	    attrs: {
	      "href": _vm._f("formatVideoId")(_vm.videoInfo.videoId)
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.videoInfo.cover
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "channel-video-cover-bg"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "channel-video-cover-playic"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "channel-video-cover-text"
	  }, [_c('span', {
	    staticClass: "channel-video-cover-text-update"
	  }, [_vm._v(_vm._s(_vm._f("formatUploadTime")(_vm.videoInfo.uploadTime)))]), _vm._v(" "), _c('span', {
	    staticClass: "channel-video-cover-text-time"
	  }, [_vm._v(_vm._s(_vm._f("formatDuration")(_vm.videoInfo.duration)))])])]), _vm._v(" "), _c('h2', [_c('a', {
	    attrs: {
	      "href": _vm._f("formatVideoId")(_vm.videoInfo.videoId)
	    }
	  }, [_vm._v(_vm._s(_vm.videoInfo.title))])]), _vm._v(" "), _c('div', {
	    staticClass: "channel-video-type"
	  }, [_c('span', [_vm._v(_vm._s(_vm._f("formatTag")(_vm.videoInfo.tag)))])]), _vm._v(" "), _c('a', {
	    staticClass: "channel-video-pt"
	  }, [_c('span', {
	    staticClass: "channel-video-pt-ic"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "channel-video-pt-num"
	  }, [_vm._v(_vm._s(_vm.videoInfo.playCount))]), _vm._v(" "), _c('span', [_vm._v("次")])]), _vm._v(" "), _c('div', {
	    staticClass: "channel-video-bline"
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(33)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(37),
	  /* template */
	  __webpack_require__(38),
	  /* scopeId */
	  "data-v-6e08026e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\git_pro\\vue-ssr-demo\\src\\components\\download-bar-orange\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	module.exports = Component.exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(7)("fd09db78", content, false);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.download-bar[data-v-6e08026e] {\n  width: 10.8rem;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  margin-left: -5.4rem;\n  height: 2rem;\n  background: #ffaf1a;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  z-index: 30;\n}\n.download-bar .logo[data-v-6e08026e] {\n    width: 1.04rem;\n    height: 1.38rem;\n    background: url(" + __webpack_require__(35) + ") no-repeat;\n    background-size: 100%;\n    margin-left: .37rem;\n}\n.download-bar .content[data-v-6e08026e] {\n    -webkit-box-flex: 1;\n    margin-left: .28rem;\n    line-height: .6rem;\n    font-size: .46rem;\n}\n.download-bar .download-btn[data-v-6e08026e] {\n    width: 4.6rem;\n    height: 2rem;\n    background: url(" + __webpack_require__(36) + ") no-repeat;\n    background-size: 100%;\n    display: block;\n    margin-right: .39rem;\n}\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/logo-dbf9487b19.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/download-btn-5c98679b6a.gif";

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

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

	exports.default = {
	  name: 'download-bar-orange'
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "download-bar"
	  }, [_c('div', {
	    staticClass: "logo"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "content"
	  }, [_vm._v("\n    网易菠萝 "), _c('br'), _vm._v(" "), _c('b', [_vm._v("超好玩的视频社区")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.bolo.android"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.canShow),
	      expression: "canShow"
	    }],
	    staticClass: "wrapper",
	    attrs: {
	      "data-id": _vm.userId,
	      "id": "app"
	    },
	    on: {
	      "scroll": function($event) {
	        _vm.loadMore($event)
	      }
	    }
	  }, [_c('channel-info', {
	    attrs: {
	      "channelInfo": _vm.channelInfo
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "channel-set"
	  }, [_vm._l((_vm.channelSet), function(setInfo) {
	    return [_c('set-info', {
	      attrs: {
	        "setInfo": setInfo,
	        "activeSid": _vm.activeSid
	      },
	      on: {
	        "changeSet": _vm.changeSet
	      }
	    })]
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "channel-video-list"
	  }, [_vm._l((_vm.videoList), function(videoInfo) {
	    return [_c('video-info', {
	      attrs: {
	        "videoInfo": videoInfo
	      }
	    })]
	  })], 2), _vm._v(" "), _c('download-bar')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);