var express = require('express'),
    router = express.Router();

var notfound = require('./mobile/notfound');
var invitation = require('./mobile/invitation');
var channel = require('./mobile/channel');

router.use('/notfound', notfound);
router.use('/invitation', invitation);
router.use('/channel', channel);


module.exports = router;