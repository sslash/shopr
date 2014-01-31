var express = require('express');
exphbs  = require('express3-handlebars'),

module.exports = function(app, config) {
    app.configure(function () {
    app.use(express.compress());
    app.use(express.static(config.root + '/webapp'));
    app.set('port', config.port);

    app.engine('handlebars', exphbs({}));
    app.set('view engine', 'handlebars');
    
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(req, res) {
      res.status(404).render('404', { title: '404' });
  });
});
};
