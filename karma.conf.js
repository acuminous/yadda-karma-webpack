'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: require('./webpack.test.config'),
    webpackServer: {
      stats: {
        colors: true
      }
    },
    webpackMiddleware: {
        noInfo: true,
        colors: true,
        hash: false,
        timings: true,
        errorDetails: true
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],
    reporters: ['progress'],
    // singleRun: true,
    captureTimeout: 60000
  });
};
