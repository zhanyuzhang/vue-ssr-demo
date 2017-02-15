/**
 * Created by Dillance on 16/4/10.
 */

'use strict';

var url = require('url');

//var testOrigin = 'http://223.252.196.87',
var testOrigin = 'http://test.bolo.bobo.com',
	previewTestOrigin = 'http://preview.bobo.com:85',
	localTestOrigin = 'http://testbolo.163.com',
	//previewTestOrigin = 'http://test.bolo.bobo.com',
	officalOrigin = 'http://bolo.bobo.com',
	newOfficalOrigin = 'http://bolo.163.com';

function isTest(req){
	var location = url.parse('http://' + req.headers.host + req.originalUrl);
	return (location.host.match(/test|local|dev|preview/) || (location.query && location.query.match('host=test'))) && !(location.query && location.query.match('host=official'));
}

function isLocal(req){
	return /local/.test(req.host);
}

function isNew(req){
	return /bolo\.163\.com/.test(req.host) || /new=new/.test(req.originalUrl);
}

function isPreview(req){
	return /preview/.test(req.host);
}

exports.isTest = isTest;


exports.getHost = function(req, spTestOrigin, spOfficalOrigin){
	if(isTest(req)){
		if(isLocal(req)) return url.parse(spTestOrigin || localTestOrigin).hostname;
		else if(isPreview(req)) return url.parse(spTestOrigin || previewTestOrigin).hostname;
		else return url.parse(spTestOrigin || previewTestOrigin).hostname;
	}else if(isNew(req)) return url.parse(spOfficalOrigin || newOfficalOrigin).hostname;
	else return url.parse(spOfficalOrigin || officalOrigin).hostname;
};

exports.getOrigin = function(req, spTestOrigin, spOfficalOrigin) {
	if (isTest(req)){
		if(isLocal(req)) return spTestOrigin || localTestOrigin;
		else if(isPreview(req)) return spTestOrigin || previewTestOrigin;
		else return spTestOrigin || previewTestOrigin;
	}else if(isNew(req)) return spOfficalOrigin || newOfficalOrigin;
	else return spOfficalOrigin || officalOrigin;
};

exports.getFormatParams = function(req) {
	var result = {};
	req.originalUrl.replace(/\S*\?+/, '').split('&').forEach(function(pair) {
		if(!pair) return;
		pair = pair.split('=');
		result[pair[0]] = pair[1] || null;
	});
	return result;
};

