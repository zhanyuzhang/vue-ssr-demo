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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(4)

	/* template */
	var __vue_template__ = __webpack_require__(17)
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
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1453a0cd"
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(8);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(11);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(14);

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
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
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\channel-info\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-27d51143"
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\set-info\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e625e2f8"
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
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
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\pages\\page-channel\\video-info\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-36f3d3ea"
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "E:\\git_pro\\vue-ssr-demo\\src\\components\\download-bar-orange\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-62207392"
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
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
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
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
	  })], true), _vm._v(" "), _c('div', {
	    staticClass: "channel-video-list"
	  }, [_vm._l((_vm.videoList), function(videoInfo) {
	    return [_c('video-info', {
	      attrs: {
	        "videoInfo": videoInfo
	      }
	    })]
	  })], true), _vm._v(" "), _c('download-bar')])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);