import qs from './querystring';
var QUERY = qs.parse();

//var defaultTestHost = 'test.bolo.bobo.com',
var defaultTestHost = location.host.match(/test\.bolo\.bobo\.com/) ? 'test.bolo.bobo.com' : (/local/.test(location.href) ? 'testbolo.163.com' : 'preview.bobo.com:85'),
  defaultOfficialHost = 'bolo.bobo.com',
  newOfficialHost = 'bolo.163.com';

function isTest(){
  if(QUERY.host == 'official') return false;
  else if(location.host.match(/test|local|dev|preview/) || qs.parse().host == 'test') return true;
  else return false;
}

function isNew(){
  return /bolo\.163\.com/.test(location.host);
}

var host = qs.parse().test ? 'http://test.bolo.bobo.com' : 'http://m.live.netease.com';

var getHost = function(testHost,officialHost){

  testHost = testHost || defaultTestHost;
  officialHost = officialHost || (isNew() ? newOfficialHost : defaultOfficialHost);

  if(isTest()) return testHost;
  else return officialHost
};

var getOrigin = function(testHost,officialHost){

  testHost = testHost || defaultTestHost;
  officialHost = officialHost || (isNew() ? newOfficialHost : defaultOfficialHost);

  if(isTest()) return 'http://' + testHost;
  else return 'http://' + officialHost
};

var getImage = function(path,size){
  size = size || [50,50];

  if(!path || !path.match('http')) return path;

  var suffix = path.match('png');
  suffix = suffix ? 'png' : 'jpg';

  return 'http://imgsize.ph.126.net/?imgurl=' + path + '_' + size[0] + 'x' + size[1] + 'x0x80.' + suffix;
}

export default {
  host: host,
  getHost: getHost,
  getOrigin: getOrigin,
  getImage: getImage
};
