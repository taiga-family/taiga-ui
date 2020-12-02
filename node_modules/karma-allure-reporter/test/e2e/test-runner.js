var Server = require('karma').Server;

var karmaConfig = {
    basePath: __dirname,
    frameworks: ['jasmine'],
    files: [
        'specs/*.js'
    ],
    port: 9876,
    colors: true,
    browsers: ['PhantomJS', 'FirefoxHeadless'],
    captureTimeout: 60000,
    singleRun: true,

    reporters: ['allure'],
    plugins: [
        require('./../../index.js'),
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-firefox-launcher'
    ],
    customLaunchers: {
        FirefoxHeadless: {
          base: 'Firefox',
          flags: [ '-headless' ],
        },
      },
    allureReport: {
        reportDir: 'out'
    }
};

var runCompleted = false;

var server = new Server(karmaConfig, function(exitCode) {
    runCompleted ? process.exit(0) : process.exit(1);
});

server.start();

server.on('run_complete', function (browsers, results) {
    runCompleted = true;
});
