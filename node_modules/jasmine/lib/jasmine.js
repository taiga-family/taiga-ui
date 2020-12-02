var path = require('path'),
    util = require('util'),
    glob = require('glob'),
    exit = require('./exit'),
    CompletionReporter = require('./reporters/completion_reporter'),
    ConsoleSpecFilter = require('./filters/console_spec_filter');

module.exports = Jasmine;
module.exports.ConsoleReporter = require('./reporters/console_reporter');

function Jasmine(options) {
  options = options || {};
  var jasmineCore = options.jasmineCore || require('jasmine-core');
  this.jasmineCorePath = path.join(jasmineCore.files.path, 'jasmine.js');
  this.jasmine = jasmineCore.boot(jasmineCore);
  this.projectBaseDir = options.projectBaseDir || path.resolve();
  this.printDeprecation = options.printDeprecation || require('./printDeprecation');
  this.specDir = '';
  this.specFiles = [];
  this.helperFiles = [];
  this.env = this.jasmine.getEnv();
  this.reportersCount = 0;
  this.completionReporter = new CompletionReporter();
  this.onCompleteCallbackAdded = false;
  this.exit = exit;
  this.showingColors = true;
  this.reporter = new module.exports.ConsoleReporter();
  this.addReporter(this.reporter);
  this.defaultReporterConfigured = false;

  var jasmineRunner = this;
  this.completionReporter.onComplete(function(passed) {
    jasmineRunner.exitCodeCompletion(passed);
  });
  this.checkExit = checkExit(this);

  this.coreVersion = function() {
    return jasmineCore.version();
  };
}

Jasmine.prototype.randomizeTests = function(value) {
  this.env.randomizeTests(value);
};

Jasmine.prototype.seed = function(value) {
  this.env.seed(value);
};

Jasmine.prototype.showColors = function(value) {
  this.showingColors = value;
};

Jasmine.prototype.addSpecFile = function(filePath) {
  this.specFiles.push(filePath);
};

Jasmine.prototype.addReporter = function(reporter) {
  this.env.addReporter(reporter);
  this.reportersCount++;
};

Jasmine.prototype.clearReporters = function() {
  this.env.clearReporters();
  this.reportersCount = 0;
};

Jasmine.prototype.provideFallbackReporter = function(reporter) {
  this.env.provideFallbackReporter(reporter);
};

Jasmine.prototype.configureDefaultReporter = function(options) {
  options.timer = options.timer || new this.jasmine.Timer();
  options.print = options.print || function() {
    process.stdout.write(util.format.apply(this, arguments));
  };
  options.showColors = options.hasOwnProperty('showColors') ? options.showColors : true;
  options.jasmineCorePath = options.jasmineCorePath || this.jasmineCorePath;

  if(options.onComplete) {
    this.printDeprecation('Passing in an onComplete function to configureDefaultReporter is deprecated.');
  }
  this.reporter.setOptions(options);
  this.defaultReporterConfigured = true;
};

Jasmine.prototype.addMatchers = function(matchers) {
  this.jasmine.Expectation.addMatchers(matchers);
};

Jasmine.prototype.loadSpecs = function() {
  this.specFiles.forEach(function(file) {
    require(file);
  });
};

Jasmine.prototype.loadHelpers = function() {
  this.helperFiles.forEach(function(file) {
    require(file);
  });
};

Jasmine.prototype.loadConfigFile = function(configFilePath) {
  try {
    var absoluteConfigFilePath = path.resolve(this.projectBaseDir, configFilePath || 'spec/support/jasmine.json');
    var config = require(absoluteConfigFilePath);
    this.loadConfig(config);
  } catch (e) {
    if(configFilePath || e.code != 'MODULE_NOT_FOUND') { throw e; }
  }
};

Jasmine.prototype.loadConfig = function(config) {
  this.specDir = config.spec_dir || this.specDir;
  this.env.throwOnExpectationFailure(config.stopSpecOnExpectationFailure);
  this.env.randomizeTests(config.random);

  if(config.helpers) {
    this.addHelperFiles(config.helpers);
  }

  if(config.spec_files) {
    this.addSpecFiles(config.spec_files);
  }
};

Jasmine.prototype.addHelperFiles = addFiles('helperFiles');
Jasmine.prototype.addSpecFiles = addFiles('specFiles');

function addFiles(kind) {
  return function (files) {
    var jasmineRunner = this;
    var fileArr = this[kind];

    files.forEach(function(file) {
      if(!(path.isAbsolute && path.isAbsolute(file))) {
        file = path.join(jasmineRunner.projectBaseDir, jasmineRunner.specDir, file);
      }
      var filePaths = glob.sync(file);
      filePaths.forEach(function(filePath) {
        if(fileArr.indexOf(filePath) === -1) {
          fileArr.push(filePath);
        }
      });
    });
  };
}

Jasmine.prototype.onComplete = function(onCompleteCallback) {
  this.completionReporter.onComplete(onCompleteCallback);
};

Jasmine.prototype.stopSpecOnExpectationFailure = function(value) {
  this.env.throwOnExpectationFailure(value);
};

Jasmine.prototype.exitCodeCompletion = function(passed) {
  if(passed) {
    this.exit(0, process.platform, process.version, process.exit, require('exit'));
  }
  else {
    this.exit(1, process.platform, process.version, process.exit, require('exit'));
  }
};

var checkExit = function(jasmineRunner) {
  return function() {
    if (!jasmineRunner.completionReporter.isComplete()) {
      process.exitCode = 4;
    }
  };
};

Jasmine.prototype.execute = function(files, filterString) {
  process.on('exit', this.checkExit);

  this.loadHelpers();
  if (!this.defaultReporterConfigured) {
    this.configureDefaultReporter({ showColors: this.showingColors });
  }

  if(filterString) {
    var specFilter = new ConsoleSpecFilter({
      filterString: filterString
    });
    this.env.specFilter = function(spec) {
      return specFilter.matches(spec.getFullName());
    };
  }

  if (files && files.length > 0) {
    this.specDir = '';
    this.specFiles = [];
    this.addSpecFiles(files);
  }

  this.loadSpecs();

  this.addReporter(this.completionReporter);
  this.env.execute();
};
