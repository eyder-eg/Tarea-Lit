module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon'],
    plugins: [
      'karma-mocha',
      'karma-sinon',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    files: [
      { pattern: 'test/**/*.test.js', watched: false }
    ],
    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    browsers: ['Chrome'],
    singleRun: true, // Cierra el navegador
    reporters: ['progress', 'coverage'],
    coverage: {
      dir: 'coverage',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  });
};