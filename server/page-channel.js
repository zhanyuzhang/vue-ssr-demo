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

	exports.default = function (context) {
	    _main.store.commit({
	        type: _types2.default.SET_ORIGIN,
	        origin: context.origin
	    });
	    _main.store.commit({
	        type: _types2.default.SET_USER_ID,
	        userId: context.params.userId
	    });
	    console.log('ok');
	    return _main.store.dispatch(_types2.default.GET_CHANNEL_INFO).then(function () {
	        context.state = _main.store.state;
	        (0, _main.createApp)();
	    });
	};

	var _main = __webpack_require__(1);

	var _types = __webpack_require__(43);

	var _types2 = _interopRequireDefault(_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = exports.createApp = exports.Vue = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(3);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _store = __webpack_require__(41);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createApp = function createApp(options) {
	    return new _vue2.default(_extends({
	        store: _store2.default,
	        computed: (0, _vuex.mapState)(['pageNum', 'pageSize', 'loadingState', 'showState', 'completeState', 'sid', 'activeSid', 'userId', 'channelInfo', 'lists']),
	        methods: _extends({
	            changeSet: function changeSet(sid) {
	                _store2.default.commit({
	                    type: 'SET_PAGE_NUM',
	                    pageNum: 1
	                });
	                _store2.default.commit({
	                    type: 'SET_VIDEO_LIST',
	                    videoList: []
	                });
	                _store2.default.commit({
	                    type: 'SET_SID',
	                    sid: sid
	                });
	                _store2.default.commit({
	                    type: 'SET_ACTIVE_SID',
	                    activeSid: sid
	                });
	                _store2.default.commit({
	                    type: 'SET_COMPLETE_STATE',
	                    completeState: []
	                });
	                this.getVideoList();
	            },

	            loadMore: function loadMore(event) {
	                if (this.isScrollToBottom(event.target) && !this.isLoading && !this.isAll) {
	                    this.getVideoList();
	                }
	            },

	            // 判断滚动条是否已经到达了底部
	            isScrollToBottom: function isScrollToBottom(wrapper) {
	                var scrollHeight = wrapper.scrollHeight;
	                var scrollTop = wrapper.scrollTop;
	                var viewHeight = parseInt(getComputedStyle(wrapper, null).height);
	                return scrollTop + viewHeight >= scrollHeight - 10 ? true : false;
	            }

	        }, (0, _vuex.mapActions)({
	            getChannelInfo: 'GET_CHANNEL_INFO'
	        }), (0, _vuex.mapActions)({
	            getSetList: 'GET_SET_LIST'
	        }), (0, _vuex.mapActions)({
	            getVideoList: 'GET_VIDEO_lIST'
	        }))
	    }, _index2.default, options || {}));
	};

	exports.Vue = _vue2.default;
	exports.createApp = createApp;
	exports.store = _store2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("Vue");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.1.2
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vuex = factory());
	}(this, (function () { 'use strict';

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook;

	  devtoolHook.emit('vuex:init', store);

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState);
	  });

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state);
	  });
	}

	var applyMixin = function (Vue) {
	  var version = Number(Vue.version.split('.')[0]);

	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit;
	      _init.call(this, options);
	    };
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options;
	    // store injection
	    if (options.store) {
	      this.$store = options.store;
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store;
	    }
	  }
	};

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {};
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      var state = this.$store.state;
	      var getters = this.$store.getters;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
	        if (!module) {
	          return
	        }
	        state = module.context.state;
	        getters = module.context.getters;
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    };
	  });
	  return res
	});

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {};
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
	        return
	      }
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {};
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedGetter () {
	      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
	        return
	      }
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val));
	        return
	      }
	      return this.$store.getters[val]
	    };
	  });
	  return res
	});

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {};
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
	        return
	      }
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace;
	      namespace = '';
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/';
	    }
	    return fn(namespace, map)
	  }
	}

	function getModuleByNamespace (store, helper, namespace) {
	  var module = store._modulesNamespaceMap[namespace];
	  if (!module) {
	    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
	  }
	  return module
	}

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */


	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime;
	  this._children = Object.create(null);
	  this._rawModule = rawModule;
	};

	var prototypeAccessors$1 = { state: {},namespaced: {} };

	prototypeAccessors$1.state.get = function () {
	  return this._rawModule.state || {}
	};

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};

	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module;
	};

	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key];
	};

	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};

	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced;
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions;
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations;
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters;
	  }
	};

	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn);
	};

	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn);
	  }
	};

	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn);
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn);
	  }
	};

	Object.defineProperties( Module.prototype, prototypeAccessors$1 );

	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;

	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false);

	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false);
	    });
	  }
	};

	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};

	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root;
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key);
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};

	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule);
	};

	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;

	  var parent = this.get(path.slice(0, -1));
	  var newModule = new Module(rawModule, runtime);
	  parent.addChild(path[path.length - 1], newModule);

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime);
	    });
	  }
	};

	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1));
	  var key = path[path.length - 1];
	  if (!parent.getChild(key).runtime) { return }

	  parent.removeChild(key);
	};

	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule);

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        );
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key]);
	    }
	  }
	}

	var Vue; // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  // store internal state
	  this._committing = false;
	  this._actions = Object.create(null);
	  this._mutations = Object.create(null);
	  this._wrappedGetters = Object.create(null);
	  this._modules = new ModuleCollection(options);
	  this._modulesNamespaceMap = Object.create(null);
	  this._subscribers = [];
	  this._watcherVM = new Vue();

	  // bind commit and dispatch to self
	  var store = this;
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  };
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  };

	  // strict mode
	  this.strict = strict;

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root);

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state);

	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
	};

	var prototypeAccessors = { state: {} };

	prototypeAccessors.state.get = function () {
	  return this._vm.$data.state
	};

	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.");
	};

	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;

	  var mutation = { type: type, payload: payload };
	  var entry = this._mutations[type];
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type));
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload);
	    });
	  });
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    );
	  }
	};

	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;

	  var entry = this._actions[type];
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type));
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers;
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn);
	  }
	  return function () {
	    var i = subs.indexOf(fn);
	    if (i > -1) {
	      subs.splice(i, 1);
	    }
	  }
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  assert(typeof getter === 'function', "store.watch only accepts a function.");
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm.state = state;
	  });
	};

	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.register(path, rawModule);
	  installModule(this, this.state, path, this._modules.get(path));
	  // reset store to update getters...
	  resetStoreVM(this, this.state);
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.unregister(path);
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1));
	    Vue.delete(parentState, path[path.length - 1]);
	  });
	  resetStore(this);
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions);
	  resetStore(this, true);
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing;
	  this._committing = true;
	  fn();
	  this._committing = committing;
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function resetStore (store, hot) {
	  store._actions = Object.create(null);
	  store._mutations = Object.create(null);
	  store._wrappedGetters = Object.create(null);
	  store._modulesNamespaceMap = Object.create(null);
	  var state = store.state;
	  // init all modules
	  installModule(store, state, [], store._modules.root, true);
	  // reset vm
	  resetStoreVM(store, state, hot);
	}

	function resetStoreVM (store, state, hot) {
	  var oldVm = store._vm;

	  // bind store public getters
	  store.getters = {};
	  var wrappedGetters = store._wrappedGetters;
	  var computed = {};
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); };
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    });
	  });

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent;
	  Vue.config.silent = true;
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  });
	  Vue.config.silent = silent;

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store);
	  }

	  if (oldVm) {
	    if (hot) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation for hot reloading.
	      store._withCommit(function () {
	        oldVm.state = null;
	      });
	    }
	    Vue.nextTick(function () { return oldVm.$destroy(); });
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length;
	  var namespace = store._modules.getNamespace(path);

	  // register in namespace map
	  if (namespace) {
	    store._modulesNamespaceMap[namespace] = module;
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1));
	    var moduleName = path[path.length - 1];
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state);
	    });
	  }

	  var local = module.context = makeLocalContext(store, namespace, path);

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key;
	    registerMutation(store, namespacedType, mutation, local);
	  });

	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key;
	    registerAction(store, namespacedType, action, local);
	  });

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key;
	    registerGetter(store, namespacedType, getter, local);
	  });

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot);
	  });
	}

	/**
	 * make localized dispatch, commit, getters and state
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace, path) {
	  var noNamespace = namespace === '';

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      return store.dispatch(type, payload)
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      store.commit(type, payload, options);
	    }
	  };

	  // getters and state object must be gotten lazily
	  // because they will be changed by vm update
	  Object.defineProperties(local, {
	    getters: {
	      get: noNamespace
	        ? function () { return store.getters; }
	        : function () { return makeLocalGetters(store, namespace); }
	    },
	    state: {
	      get: function () { return getNestedState(store.state, path); }
	    }
	  });

	  return local
	}

	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {};

	  var splitPos = namespace.length;
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }

	    // extract local getter type
	    var localType = type.slice(splitPos);

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    });
	  });

	  return gettersProxy
	}

	function registerMutation (store, type, handler, local) {
	  var entry = store._mutations[type] || (store._mutations[type] = []);
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(local.state, payload);
	  });
	}

	function registerAction (store, type, handler, local) {
	  var entry = store._actions[type] || (store._actions[type] = []);
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: local.state,
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb);
	    if (!isPromise(res)) {
	      res = Promise.resolve(res);
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err);
	        throw err
	      })
	    } else {
	      return res
	    }
	  });
	}

	function registerGetter (store, type, rawGetter, local) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type));
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      local.state, // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  };
	}

	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	  }, { deep: true, sync: true });
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload;
	    payload = type;
	    type = type.type;
	  }

	  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

	  return { type: type, payload: payload, options: options }
	}

	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    );
	    return
	  }
	  Vue = _Vue;
	  applyMixin(Vue);
	}

	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.1.2',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	};

	return index;

	})));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(5)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(40),
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("b97e1e54", content, false);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper[data-v-ad3c49ec] {\n  height: 100%;\n  overflow-y: scroll;\n}\n.wrapper .channel-set[data-v-ad3c49ec] {\n    padding: 0 .13rem 0.13rem .3rem;\n    background: #e3e7ea;\n}\n.wrapper .channel-video-list[data-v-ad3c49ec] {\n    width: 100%;\n    clear: both;\n    margin: 0 auto;\n    padding-bottom: 2.016rem;\n}\n", ""]);

	// exports


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(12);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(19);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(24);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(33);

	var _index8 = _interopRequireDefault(_index7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'channel',
	  components: {
	    'channel-info': _index2.default,
	    'set-info': _index4.default,
	    'video-info': _index6.default,
	    'download-bar': _index8.default
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(13)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(18),
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("59f659bf", content, false);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\nh3[data-v-4bb5809a], h4[data-v-4bb5809a], h5[data-v-4bb5809a], h6[data-v-4bb5809a] {\n  font-weight: normal;\n}\n.channel-info[data-v-4bb5809a] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  background: #e3e7ea;\n  height: 3.8304rem;\n  position: relative;\n}\n.channel-info .channel-info-bg1[data-v-4bb5809a] {\n    width: 100%;\n    clear: both;\n    margin: 0 auto;\n    height: 2.8512rem;\n    background: #292929 url(" + __webpack_require__(15) + ") center 0;\n    background-size: 100% 160%;\n}\n.channel-info .channel-info-avatar[data-v-4bb5809a] {\n    background: #fff;\n    width: 2.592rem;\n    height: 2.592rem;\n    position: absolute;\n    left: 0.288rem;\n    top: 1.008rem;\n    border: 2px solid #fff;\n    border-radius: 2.592rem;\n    overflow: hidden;\n}\n.channel-info .channel-info-avatar img[data-v-4bb5809a] {\n      width: 2.592rem;\n      height: 2.592rem;\n      border-radius: 2.592rem;\n}\n.channel-info .channel-info-title[data-v-4bb5809a] {\n    position: absolute;\n    left: 3.312rem;\n    top: 0.72rem;\n    color: #fff;\n    width: 7.344rem;\n}\n.channel-info .channel-info-title h2[data-v-4bb5809a] {\n    font-size: 0.6048rem;\n    line-height: 160%;\n    text-align: left;\n    padding-right: 0.288rem;\n    padding-top: 0.144rem;\n    text-overflow: ellipsis;\n    word-break: break-all;\n    overflow: hidden;\n    height: 0.9648rem;\n    font-weight: bold;\n}\n.channel-info .channel-info-title h3[data-v-4bb5809a] {\n    font-size: 0.3168rem;\n    height: 0.864rem;\n    line-height: 0.432rem;\n    overflow: hidden;\n    padding-right: 0.288rem;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n.channel-info .channel-info-title h4[data-v-4bb5809a] {\n    padding: 0.288rem 0 0;\n}\n.channel-info .channel-info-title h4 .channel-info-follows[data-v-4bb5809a] {\n      color: #fff;\n      font-size: 0.3168rem;\n      background: #ffaf1a;\n      border-radius: 4px;\n      line-height: 160%;\n      padding: 3px 10px 3px;\n      margin-right: 10px;\n      float: left;\n}\n.channel-info .channel-info-title h4 .channel-info-fol-num[data-v-4bb5809a] {\n      line-height: 160%;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: left;\n      padding: 3px 0 3px;\n}\n.channel-info .channel-info-title h4 .channel-info-fol-text[data-v-4bb5809a] {\n      line-height: 160%;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: left;\n      padding: 3px 0 3px;\n}\n.channel-info .channel-info-title h4 .channel-info-share[data-v-4bb5809a] {\n      background: url(" + __webpack_require__(16) + ") no-repeat 0 3px;\n      background-size: 0.5472rem 0.4896rem;\n      font-size: 0.3168rem;\n      color: #2e2e2e;\n      float: right;\n      padding: 3px 0 3px 0.648rem;\n      margin-right: 0.288rem;\n      line-height: 160%;\n      height: 0.576rem;\n      display: none;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/bg-f98de5b7a5.png";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/share-6cb5f92a06.png";

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(20)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(22),
	  /* template */
	  __webpack_require__(23),
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("45fbbe3d", content, false);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.channel-set-list[data-v-a051b318] {\n  display: inline-block;\n  font-size: 0.432rem;\n  margin: .13rem;\n  border: 0.0144rem solid #2e2e2e;\n  text-align: center;\n  background: #fff;\n  padding: 0.072rem 0.288rem;\n  color: #2e2e2e;\n  border-radius: 0.072rem;\n}\n.channel-set-list.active[data-v-a051b318] {\n    color: #ffaf1a;\n    font-weight: bold;\n    border: #ffaf1a 0.0144rem solid;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(25)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(31),
	  /* template */
	  __webpack_require__(32),
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("b5fc774e", content, false);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.channel-video[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  border-top: 0.3168rem solid #e3e7ea;\n}\n.channel-video-cover[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  height: 6.0768rem;\n  position: relative;\n  display: block;\n}\n.channel-video-cover img[data-v-5e9b213b] {\n  width: 100%;\n  height: 6.0768rem;\n}\n.channel-video-cover-bg[data-v-5e9b213b] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 6.0768rem;\n  z-index: 5;\n  background: url(" + __webpack_require__(27) + ") repeat-x;\n  background-size: 100% 100%;\n}\n.channel-video-cover-playic[data-v-5e9b213b] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 1.6128rem;\n  height: 1.6128rem;\n  background: url(" + __webpack_require__(28) + ") repeat-x;\n  background-size: 100% 100%;\n  z-index: 6;\n  display: block;\n  margin-left: -0.8064rem;\n  margin-top: -0.8064rem;\n}\n.channel-video-cover-text[data-v-5e9b213b] {\n  position: absolute;\n  right: 0.288rem;\n  bottom: 0.288rem;\n  z-index: 5;\n}\n.channel-video-cover-text-update[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(29) + ");\n  line-height: 0.2592rem;\n  font-size: 0.2592rem;\n  color: #fff;\n  padding: 3px 6px 2px;\n  border-radius: 3px;\n}\n.channel-video-cover-text-time[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(29) + ");\n  line-height: 0.2592rem;\n  font-size: 0.2592rem;\n  color: #fff;\n  padding: 3px 6px 2px;\n  border-radius: 3px;\n  margin-left: 0.144rem;\n}\n.channel-video h2[data-v-5e9b213b] {\n  text-align: left;\n  clear: both;\n}\n.channel-video h2 a[data-v-5e9b213b] {\n  display: block;\n  font-size: 0.4608rem;\n  line-height: 140%;\n  padding: 0.432rem 0.288rem;\n  font-weight: bold;\n}\n.channel-video h2 a[data-v-5e9b213b], .channel-video h2 a[data-v-5e9b213b]:visited {\n  color: #2e2e2e;\n}\n.channel-video h2 a[data-v-5e9b213b]:active {\n  color: #a60000;\n}\n.channel-video-info[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  border-bottom: 0.5472rem solid #ccc;\n}\n.channel-video-type[data-v-5e9b213b] {\n  margin-left: 0.288rem;\n  color: #ff9933;\n  float: left;\n  display: inline-block;\n  font-size: 0.3168rem;\n  color: #b4b4b4;\n}\n.channel-video-pt[data-v-5e9b213b] {\n  margin-right: 0.288rem;\n  font-size: 0.3168rem;\n  color: #2e2e2e;\n  float: right;\n  line-height: 0.3744rem;\n}\n.channel-video-pt-ic[data-v-5e9b213b] {\n  background: url(" + __webpack_require__(30) + ") no-repeat;\n  width: 0.3744rem;\n  height: 0.3744rem;\n  background-size: 0.3456rem 0.3456rem;\n  display: inline-block;\n  margin-right: 2px;\n  vertical-align: bottom;\n}\n.channel-video-pt span[data-v-5e9b213b] {\n  font-size: 0.3168rem;\n}\n.channel-video-bline[data-v-5e9b213b] {\n  width: 100%;\n  clear: both;\n  margin: 0 auto;\n  height: 0.5472rem;\n}\na[data-v-5e9b213b] {\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/crbg05-67f8379cef.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/cr_play-0e3356b7df.png";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzODEwMDlGQkI2MTFFNUFDMjFFQUNFNjQwN0ExRDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzODEwMEFGQkI2MTFFNUFDMjFFQUNFNjQwN0ExRDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDM4MTAwN0ZCQjYxMUU1QUMyMUVBQ0U2NDA3QTFENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDM4MTAwOEZCQjYxMUU1QUMyMUVBQ0U2NDA3QTFENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp1OEbIAAAAVSURBVHjaYtTT09vMAARMDFAAEGAAEqABQfQpJCEAAAAASUVORK5CYII="

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/crbg02-73fde5548b.png";

/***/ },
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(34)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(39),
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(8)("fd09db78", content, false);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.download-bar[data-v-6e08026e] {\n  width: 10.8rem;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  margin-left: -5.4rem;\n  height: 2rem;\n  background: #ffaf1a;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  z-index: 30;\n}\n.download-bar .logo[data-v-6e08026e] {\n    width: 1.04rem;\n    height: 1.38rem;\n    background: url(" + __webpack_require__(36) + ") no-repeat;\n    background-size: 100%;\n    margin-left: .37rem;\n}\n.download-bar .content[data-v-6e08026e] {\n    -webkit-box-flex: 1;\n    margin-left: .28rem;\n    line-height: .6rem;\n    font-size: .46rem;\n}\n.download-bar .download-btn[data-v-6e08026e] {\n    width: 4.6rem;\n    height: 2rem;\n    background: url(" + __webpack_require__(37) + ") no-repeat;\n    background-size: 100%;\n    display: block;\n    margin-right: .39rem;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/logo-dbf9487b19.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/images/download-btn-5c98679b6a.gif";

/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showState),
	      expression: "showState"
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
	  }, [_vm._l((_vm.lists.setList), function(setInfo) {
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
	  }, [_vm._l((_vm.lists.videoList), function(videoInfo) {
	    return [_c('video-info', {
	      attrs: {
	        "videoInfo": videoInfo
	      }
	    })]
	  })], 2), _vm._v(" "), _c('download-bar')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(3);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _fetchPolyfill = __webpack_require__(42);

	var _fetchPolyfill2 = _interopRequireDefault(_fetchPolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);
	// import axios from 'axios'


	var store = new _vuex2.default.Store({
	    state: {
	        pageNum: 1, // 页码
	        pageSize: 10, // 每页的数据量
	        loadingState: false, // 加载状态，是否正在加载数据
	        showState: false, // 页面是否可见，用来避免出现无样式的内容
	        completeState: false, // 是否已经加载了全部的视频？
	        sid: null, // 选集ID
	        activeSid: null, // 当前的选集ID
	        userId: null, // 用户/频道ID
	        origin: null, // 域名
	        channelInfo: null,
	        lists: {
	            setList: [], // 选集列表
	            videoList: [] // 视频列表
	        }
	    },
	    actions: {
	        GET_CHANNEL_INFO: function GET_CHANNEL_INFO(context) {
	            return axios.get(context.state.origin + '/bolo/api/public/userInfo.htm', {
	                params: {
	                    targetUserId: context.state.userId
	                }
	            }).then(function (res) {
	                context.commit({
	                    type: 'SET_CHANNEL_INFO',
	                    channelInfo: res.data
	                });
	                return res;
	            });
	        },
	        GET_SET_LIST: function GET_SET_LIST(context) {
	            return axios.get(context.state.origin + '/bolo/api/channel/setList.htm', {
	                params: {
	                    userId: context.state.userId
	                }
	            }).then(function (res) {
	                if (res.data.length) {
	                    context.commit({
	                        type: 'SET_SET_LIST',
	                        setList: res.data
	                    });
	                    context.commit({
	                        type: 'SET_SID',
	                        sid: res.data[0].sid
	                    });
	                    context.commit({
	                        type: 'SET_ACTIVE_SID',
	                        activeSid: res.data[0].sid
	                    });
	                }
	                return res;
	            });
	        },
	        GET_VIDEO_lIST: function GET_VIDEO_lIST(context) {
	            var state = context.state;
	            var url = context.state.origin + '/bolo/api/channel/' + (state.lists.setList.length ? 'setVideoList.htm' : 'videoList.htm');
	            context.commit({
	                type: 'SET_LOADING_STATE',
	                loadingState: true
	            });
	            context.commit({
	                type: 'SET_PAGE_NUM'
	            });
	            return axios.get(url, {
	                params: {
	                    pageNum: state.pageNum,
	                    pageSize: state.pageSize,
	                    sid: state.sid,
	                    userId: state.userId
	                }
	            }).then(function (res) {
	                context.commit({
	                    type: 'SET_LOADING_STATE',
	                    loadingState: false
	                });
	                if (res.data.length < state.pageSize) {
	                    context.commit({
	                        type: 'SET_COMPLETE_STATE',
	                        completeState: true
	                    });
	                }
	                res.data.forEach(function (e) {
	                    state.videoList.push(e);
	                });
	            });
	        }
	    },

	    mutations: {
	        SET_CHANNEL_INFO: function SET_CHANNEL_INFO(state, payload) {
	            Object.assign(state.channelInfo, payload.channelInfo);
	        },
	        SET_VIDEO_LIST: function SET_VIDEO_LIST(state, payload) {
	            state.lists.videoList = payload.vieoList;
	        },
	        SET_SET_LIST: function SET_SET_LIST(state, payload) {
	            state.lists.setList = payload.setList;
	        },
	        SET_PAGE_NUM: function SET_PAGE_NUM(state, payload) {
	            if (payload && payload.pageNum) state.pageNum = payload.pageNum;else state.pageNum++;
	        },
	        SET_SID: function SET_SID(state, payload) {
	            state.sid = payload.sid;
	        },
	        SET_ACTIVE_SID: function SET_ACTIVE_SID(state, payload) {
	            state.activeSid = payload.activeSid;
	        },
	        SET_LOADING_STATE: function SET_LOADING_STATE(state, payload) {
	            state.loadingState = payload.loadingState;
	        },
	        SET_SHOW_STATE: function SET_SHOW_STATE(state, payload) {
	            state.showState = payload.showState;
	        },
	        SET_COMPLETE_STATE: function SET_COMPLETE_STATE(state, payload) {
	            state.completeState = payload.completeState;
	        },
	        SET_USER_ID: function SET_USER_ID(state, payload) {
	            state.userId = payload.userId;
	        },
	        SET_ORIGIN: function SET_ORIGIN(state, payload) {
	            state.origin = payload.origin;
	        }

	    },

	    getters: {}
	});

	exports.default = store;

/***/ },
/* 42 */
/***/ function(module, exports) {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return fetch.Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new fetch.Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return fetch.Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return fetch.Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return fetch.Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(function (text) {
	          return JSON.parse(text);
	      });
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(url, options) {
	    options = options || {}
	    this.url = url

	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	  function getXhr() {
	    // from backbone.js 1.1.2
	    // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
	    if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
	      this.usingActiveXhr = true;
	      return new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    return new XMLHttpRequest();
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    // TODO: Request constructor should accept input, init
	    var request
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input
	    } else {
	      request = new Request(input, init)
	    }

	    return new fetch.Promise(function(resolve, reject) {
	      var xhr = getXhr();
	      if (request.credentials === 'cors') {
	        xhr.withCredentials = true;
	      }

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      function onload() {
	        if (xhr.readyState !== 4) {
	          return
	        }
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }
	      xhr.onreadystatechange = onload;
	      if (!self.usingActiveXhr) {
	        xhr.onload = onload;
	        xhr.onerror = function() {
	          reject(new TypeError('Network request failed'))
	        }
	      }

	      xhr.open(request.method, request.url, true)

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  fetch.Promise = self.Promise; // you could change it to your favorite alternative
	  self.fetch.polyfill = true
	})();


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    SET_CHANNEL_INFO: 'SET_CHANNEL_INFO',
	    SET_VIDEO_LIST: 'SET_VIDEO_LIST',
	    SET_SET_LIST: 'SET_SET_LIST',
	    SET_PAGE_NUM: 'SET_PAGE_NUM',
	    SET_SID: 'SET_SID',
	    SET_ACTIVE_SID: 'SET_ACTIVE_SID',
	    SET_LOADING_STATE: 'SET_LOADING_STATE',
	    SET_COMPLETE_STATE: 'SET_COMPLETE_STATE',
	    SET_SHOW_STATE: 'SET_SHOW_STATE',
	    SET_USER_ID: 'SET_USER_ID',
	    SET_ORIGIN: 'SET_ORIGIN',

	    GET_CHANNEL_INFO: 'GET_CHANNEL_INFO',
	    GET_SET_LIST: 'GET_SET_LIST',
	    GET_VIDEO_lIST: 'GET_VIDEO_lIST'

	};

/***/ }
/******/ ]);