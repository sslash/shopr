var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '-shopr'
    },
    port: 3000,
    db: 'mongodb://localhost/-shopr-development'
  },

  test: {
    root: rootPath,
    app: {
      name: '-shopr'
    },
    port: 3000,
    db: 'mongodb://localhost/-shopr-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '-shopr'
    },
    port: 3000,
    db: 'mongodb://localhost/-shopr-production'
  }
};

module.exports = config[env];
