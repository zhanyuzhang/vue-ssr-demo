var mobile = require('./mobile'),
    pc = require('./pc');

module.exports = function(express, app) {

    app.use(function(req, res, next) {
        res.locals.ua = req.get('User-Agent');
        next();
    });

    app.use('/', pc);
    app.use('/m', mobile);

    //异常处理
    app.use(function(err, req, res, next) {
        if (typeof err === 'string') { err = new Error(err); }
        res.send(err.message);
    });

};