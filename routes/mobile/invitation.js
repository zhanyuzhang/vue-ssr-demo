var express = require('express');
var routerHelper = require('../../lib/router-helper');
var router = express.Router();

router.get('/code', function(req, res, next) {
    routerHelper.render(req, res, 'page-invitation-code');
});
router.get('/video', function(req, res, next) {
    routerHelper.render(req, res, 'page-invitation-video');
});
module.exports = router;