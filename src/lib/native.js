	import base from './base';
  import uadetector from './uadetector';
  import HttpHelper from './HttpHelper';
  import qs from './querystring';
  import {md5} from './md5';
  import cookie from './cookie';
  import Stat from './Stat';
  import $ from './zepto';

	var QUERY = qs.parse();

	var A_URL;
	if(!uadetector.is('BOLO')){
		$.ajax({
			url: 'http://www.bobo.com/special/003500MG/boloandroidurl.js',
			dataType: 'jsonp',
			jsonpCallback: 'getUrlCallback',
			success: function(result){
				A_URL = result;
			}
		});
	}

	// @param source: String 必选项，页面来源
	// @param OSType: String 可选项，"android"表示安卓下载，"ios"表示ios设备下载
	function download(source, OSType){
		if(!A_URL) return false;
		//分享计划下载量统计
		if(QUERY.sharedby && QUERY.videoId){
			var data = {
				actionType: 3,
				cookieId: cookie.get('visiteuid'),
				videoId: QUERY.videoId,
				userId: QUERY.sharedby,
				s: md5('actionType3cookieId' + cookie.get('visiteuid') + 'uaHidNsVv8Q3x4llxKiKCxTrjYkDeBRi').toLowerCase()
			};
			new Image().src = qs.append(HttpHelper.getOrigin() + '/bolo/api/share/record.htm',data);
		}

		// 如果有传OSType参数进来，直接下载对应的安装包
		if(OSType === 'android') {
			location.href = A_URL;
			Stat.send('安卓下载按钮',{
				label: '来源：' + (source || 'default')
			});
		} else if(OSType === 'ios') {
			location.href = 'https://itunes.apple.com/us/app/wang-yi-bo-luo-you-nei-han/id1097491412?l=zh&ls=1&mt=8';

		// 如果没有传OSType，则通过uadetector检测操作系统类型进行下载
		}else if(uadetector.isOS('android')){
			if(uadetector.is('MicroMessenger')){
        console.log('ok');
				location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.bolo.android';
			}else{
        console.log('not ok');
				location.href = A_URL;
			}
			Stat.send('安卓下载按钮',{
				label: '来源：' + (source || 'default')
			});
		}else if(uadetector.isOS('ios')){
			if(uadetector.is('MicroMessenger')){
				location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.bolo.android';
			}else{
				location.href = 'https://itunes.apple.com/us/app/wang-yi-bo-luo-you-nei-han/id1097491412?l=zh&ls=1&mt=8';
			}
			Stat.send('IOS下载按钮',{
				label: '来源：' + (source || 'default')
			});
			//Stat.send('IOS下载按钮','tap','来源：' + (source || 'default'));
		}else{
			location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.bolo.android';
			Stat.send('其它系统下载按钮',{
				label: '来源：' + (source || 'default')
			});
			//Stat.send('其它系统下载按钮','tap','来源：' + (source || 'default'));
		}
	}

	function call(cmd,params,callback){
		if(!uadetector.is('BOLO')) return;

		if(base.isFunction(params)){
			callback = params;
			params = '';
		}

		if(uadetector.isOS('android')){

			var result;
			if(params) result = html5Util[cmd](JSON.stringify(params));
			else result = html5Util[cmd]();
			if(callback && base.isFunction(callback)) callback(result && JSON.parse(result));

		}else if(uadetector.isOS('ios')){

			var data = {
				cmd: cmd
			};
			if(params) data.params = JSON.stringify(params);
			if(callback && base.isFunction(callback)){
				var callbackName = base.randomStr('nativeCallback');
				window[callbackName] = function(result){
					callback(result);
					delete window[callbackName];
				};
				data.callback = callbackName;
			}
			location.href = qs.append('bololive://js',data);

		}
	}
    var userInfo = {};
    call((uadetector.isOS('android') ? 'getLogininfo' : 'getLoginInfo'),function(result){
        base.extend(userInfo,result);
    });
    var events = {};

    function hello(){
        return uadetector.is('BOLO');
    }

    window.onnativemessage = function(type, data) {
        call((uadetector.isOS('android') ? 'getLogininfo' : 'getLoginInfo'),function(result){
            base.extend(userInfo,result);
            exports.emit(type, data);
        });
    };


	export default {
    download: download,
    call: function(cmd,params,callback) {
      switch(cmd){
        case 'openVideo':
          if(uadetector.isOS('android')) html5Util[cmd](parseInt(params.videoId));
          else if(uadetector.isOS('ios')) location.href = 'bololive://js?cmd=' + cmd + '&params=' + JSON.stringify(params);
          break;
        case 'getLoginInfo':
          //安卓用了小写
          if(uadetector.isOS('android')){
            call('getLogininfo',params,callback);
            break;
          }
        default:
          call(cmd,params,callback);
      }
    },
    hello: hello,
    userInfo: userInfo,
    isLogin: function(){
      return !!userInfo.userId;
    },
    on: function(name, callback){
      var list = events[name] || (events[name] = []);
      list.push(callback);
      return this;
    },
    off: function(name, callback) {
      // Remove *all* events
      if (!(name || callback)) {
        events = {};
        return this;
      }

      var list = events[name];
      if (list) {
        if (callback) {
          for (var i = list.length - 1; i >= 0; i--) {
            if (list[i] === callback) {
              list.splice(i, 1)
            }
          }
        }
        else {
          delete this.events[name]
        }
      }
      return this;
    },
    emit: function(name, data) {
      var list = events[name];

      if (list) {
        // Copy callback lists to prevent modification
        list = list.slice();

        // Execute event callbacks, use index because it's the faster.
        for(var i = 0, len = list.length; i < len; i++) {
          list[i](data)
        }
      }

      return this;
    },
    version: (function(){
      var ua = navigator.userAgent,
        version,
        parsedVersion = '';
      if(hello()){
        if(uadetector.isOS('android')){
          version = ua.match(/\/\d+\.\d+\.\d+/);
          version = version ? (version[0].replace('/','') || 0) : 0;
        }else{
          version = ua.match(/iOS[ ](\d+\.\d+\.\d+)/);
          version = version ? (version[1] || 0) : 0;
        }

        if(version) version = version.split('.');
        else return version;

        version.forEach(function(d,i){
          parsedVersion += i > 0 && d < 10 ? ('0' + d) : d;
        });
        return parsedVersion;
      }else{
        return 'not in bolo';
      }
    }())
  };
