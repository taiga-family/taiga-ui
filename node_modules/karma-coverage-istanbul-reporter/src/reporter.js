const istanbul = require('istanbul-api');
const util = require('./util');

const BROWSER_PLACEHOLDER = '%browser%';

function checkThresholds(thresholds, summary) {
  const failedTypes = [];

  Object.keys(thresholds).forEach(key => {
    const coverage = summary[key].pct;
    if (coverage < thresholds[key]) {
      failedTypes.push(key);
    }
  });

  return failedTypes;
}

function CoverageIstanbulReporter(baseReporterDecorator, logger, config) {
  baseReporterDecorator(this);

  // Copied from https://github.com/angular/angular-cli/pull/9529/files
  // Fixes https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/44
  const reporterName = 'coverage-istanbul';
  const hasTrailingReporters =
    config.reporters.slice(-1).pop() !== reporterName;
  if (hasTrailingReporters) {
    this.writeCommonMsg = () => {};
  }

  const log = logger.create('reporter.coverage-istanbul');
  const browserCoverage = new WeakMap();
  const coverageConfig = Object.assign({}, config.coverageIstanbulReporter);

  function addCoverage(coverageMap, browser) {
    const coverage = browserCoverage.get(browser);
    browserCoverage.delete(browser);

    if (!coverage) {
      return;
    }

    Object.keys(coverage).forEach(filename => {
      const fileCoverage = coverage[filename];
      if (fileCoverage.inputSourceMap && coverageConfig.fixWebpackSourcePaths) {
        fileCoverage.inputSourceMap = util.fixWebpackSourcePaths(
          fileCoverage.inputSourceMap,
          config.webpack
        );
      }

      if (
        coverageConfig.skipFilesWithNoCoverage &&
        Object.keys(fileCoverage.statementMap).length === 0 &&
        Object.keys(fileCoverage.fnMap).length === 0 &&
        Object.keys(fileCoverage.branchMap).length === 0
      ) {
        log.debug(`File [${filename}] ignored, nothing could be mapped`);
      } else {
        coverageMap.addFileCoverage(fileCoverage);
      }
    });
  }

  function logThresholdMessage(thresholds, message) {
    if (thresholds.emitWarning) {
      log.warn(message);
    } else {
      log.error(message);
    }
  }

  function createReport(browserOrBrowsers, results) {
    const reportConfigOverride =
      !coverageConfig.combineBrowserReports && coverageConfig.dir
        ? {
            dir: coverageConfig.dir.replace(
              BROWSER_PLACEHOLDER,
              browserOrBrowsers.name
            )
          }
        : {};

    const reportConfig = istanbul.config.loadObject({
      verbose: coverageConfig.verbose === true,
      reporting: Object.assign({}, coverageConfig, reportConfigOverride)
    });
    const reportTypes = reportConfig.reporting.config.reports;

    const reporter = istanbul.createReporter(reportConfig);
    reporter.addAll(reportTypes);

    const coverageMap = istanbul.libCoverage.createCoverageMap();
    const sourceMapStore = istanbul.libSourceMaps.createSourceMapStore();

    if (coverageConfig.combineBrowserReports) {
      browserOrBrowsers.forEach(browser => addCoverage(coverageMap, browser));
    } else {
      addCoverage(coverageMap, browserOrBrowsers);
    }

    const {
      sourceFinder,
      map: remappedCoverageMap
    } = sourceMapStore.transformCoverage(coverageMap);

    if (!coverageConfig.skipFilesWithNoCoverage) {
      // On Windows, istanbul returns files with mixed forward/backslashes in them
      const fixedFilePaths = {};
      remappedCoverageMap.files().forEach(path => {
        fixedFilePaths[util.fixPathSeparators(path)] = true;
      });
      coverageMap.files().forEach(path => {
        if (!(util.fixPathSeparators(path) in fixedFilePaths)) {
          // Re-add empty coverage record
          remappedCoverageMap.addFileCoverage(path);
        }
      });
    }

    log.debug('Writing coverage reports:', reportTypes);
    reporter.write(remappedCoverageMap, { sourceFinder });

    const userThresholds = coverageConfig.thresholds;

    const thresholds = {
      emitWarning: false,
      global: {
        statements: 0,
        lines: 0,
        branches: 0,
        functions: 0
      },
      each: {
        statements: 0,
        lines: 0,
        branches: 0,
        functions: 0,
        overrides: {}
      }
    };

    if (userThresholds) {
      if (userThresholds.global || userThresholds.each) {
        Object.assign(thresholds.global, userThresholds.global);
        Object.assign(thresholds.each, userThresholds.each);
        if (userThresholds.emitWarning === true) {
          thresholds.emitWarning = true;
        }
      } else {
        Object.assign(thresholds.global, userThresholds);
      }
    }

    let thresholdCheckFailed = false;

    // Adapted from https://github.com/istanbuljs/nyc/blob/98ebdff573be91e1098bb7259776a9082a5c1ce1/index.js#L463-L478
    const globalSummary = remappedCoverageMap.getCoverageSummary();
    const failedGlobalTypes = checkThresholds(thresholds.global, globalSummary);
    failedGlobalTypes.forEach(type => {
      thresholdCheckFailed = true;
      logThresholdMessage(
        thresholds,
        `Coverage for ${type} (${globalSummary[type].pct}%) does not meet global threshold (${thresholds.global[type]}%)`
      );
    });

    remappedCoverageMap.files().forEach(file => {
      const fileThresholds = Object.assign(
        {},
        thresholds.each,
        util.overrideThresholds(
          file,
          thresholds.each.overrides,
          config.basePath
        )
      );
      delete fileThresholds.overrides;
      const fileSummary = remappedCoverageMap.fileCoverageFor(file).toSummary()
        .data;
      const failedFileTypes = checkThresholds(fileThresholds, fileSummary);

      failedFileTypes.forEach(type => {
        thresholdCheckFailed = true;
        if (coverageConfig.fixWebpackSourcePaths) {
          file = util.fixWebpackFilePath(file);
        }

        logThresholdMessage(
          thresholds,
          `Coverage for ${type} (${fileSummary[type].pct}%) in file ${file} does not meet per file threshold (${fileThresholds[type]}%)`
        );
      });
    });

    if (thresholdCheckFailed && results && !thresholds.emitWarning) {
      results.exitCode = 1;
    }
  }

  this.onBrowserComplete = function(browser, result) {
    if (result && result.coverage) {
      browserCoverage.set(browser, result.coverage);
    }
  };

  const baseReporterOnRunComplete = this.onRunComplete;
  this.onRunComplete = function(browsers, results) {
    // eslint-disable-next-line prefer-rest-params
    baseReporterOnRunComplete.apply(this, arguments);

    if (coverageConfig.combineBrowserReports) {
      createReport(browsers, results);
    } else {
      browsers.forEach(browser => {
        createReport(browser, results);
      });
    }
  };
}

CoverageIstanbulReporter.$inject = [
  'baseReporterDecorator',
  'logger',
  'config'
];

module.exports = {
  'reporter:coverage-istanbul': ['type', CoverageIstanbulReporter]
};
