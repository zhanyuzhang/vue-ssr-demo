var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('public/dev/pc/page-notfound/index.html');
});

module.exports = router;