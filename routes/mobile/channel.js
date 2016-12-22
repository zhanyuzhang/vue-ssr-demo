var express = require('express');
var routerHelper = require('../../lib/router-helper');
var router = express.Router();

router.get('/', function(req, res, next) {
  routerHelper.render(req, res, 'page-channel');
});
module.exports = router;