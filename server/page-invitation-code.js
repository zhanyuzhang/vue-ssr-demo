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

	exports.default = function (options) {
	    return new Promise(function (resolve) {
	        resolve((0, _main.createApp)(options));
	    });
	};

	var _main = __webpack_require__(18);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("Vue");

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createApp = exports.Vue = undefined;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createApp = function createApp(options) {
	    var VueApp = _vue2.default.extend(_index2.default);
	    return new VueApp(Object.assign({}, options || null));
	};

	exports.Vue = _vue2.default;
	exports.createApp = createApp;

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-invitation-code\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 20:
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

	exports.default = {
	  name: 'invitation-code',
	  data: function data() {
	    return {
	      code: '',
	      count: '0'
	    };
	  }
	};

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "wrapper",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "tip-box"
	  }, [_c('div', {
	    staticClass: "content"
	  }, [_c('div', {
	    staticClass: "img"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "intro"
	  }, [_vm._v("把观影码分享给好友，可让他们免费看 "), _c('sapn', [_vm._v("大力金刚第二季")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "code-box"
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_vm._v("发送您的观影码")]), _vm._v(" "), _c('div', {
	    staticClass: "code"
	  }, [_vm._v(_vm._s(_vm.code))]), _vm._v(" "), _c('div', {
	    staticClass: "usage-tip"
	  }, [_vm._v("您还可以有 "), _c('span', [_vm._v(_vm._s(_vm.count) + " 次使用机会")])]), _vm._v(" "), _c('div', {
	    staticClass: "share-btn",
	    on: {
	      "click": _vm.openShareView
	    }
	  }, [_vm._v("分享到社交媒体")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.answer))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });