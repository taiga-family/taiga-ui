/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const path = require('path');
const fs = require('fs');
const mkdirp = require('make-dir');
const compareVersions = require('compare-versions');
const libInstrument = require('istanbul-lib-instrument');
const libCoverage = require('istanbul-lib-coverage');
const libSourceMaps = require('istanbul-lib-source-maps');
const hook = require('istanbul-lib-hook');
const matcherFor = require('./file-matcher').matcherFor;
const Reporter = require('./reporter');

function getCoverFunctions(config, includes, callback) {
    if (!callback && typeof includes === 'function') {
        callback = includes;
        includes = null;
    }

    const includePid = config.instrumentation.includePid();
    const reportingDir = path.resolve(config.reporting.dir());
    const reporter = new Reporter(config);
    const excludes = config.instrumentation.excludes(true);
    // The coverage variable below should have different value than
    // that of the coverage variable actually used by the instrumenter (in this case: __coverage__).
    // Otherwise if you run nyc to provide coverage on these files,
    // both the actual instrumenter and this file will write to the global coverage variable,
    // and provide unexpected coverage result.
    const coverageVar = '$$coverage$$';
    const instOpts = config.instrumentation.getInstrumenterOpts();
    const sourceMapStore = libSourceMaps.createSourceMapStore({});
    let fakeRequire;

    instOpts.coverageVariable = coverageVar;
    instOpts.sourceMapUrlCallback = function(file, url) {
        sourceMapStore.registerURL(file, url);
    };
    const coverageFinderFn = function() {
        return global[coverageVar];
    };
    const instrumenter = libInstrument.createInstrumenter(instOpts);
    const transformer = function(code, options) {
        const filename =
            typeof options === 'string' ? options : options.filename;
        return instrumenter.instrumentSync(code, filename);
    };
    const runInContextTransformer = function(code, options) {
        return transformer(code, options);
    };
    const runInThisContextTransformer = function(code, options) {
        return transformer(code, options);
    };
    const requireTransformer = function(code, options) {
        let cov;
        const ret = transformer(code, options);
        const filename =
            typeof options === 'string' ? options : options.filename;
        if (fakeRequire) {
            cov = coverageFinderFn();
            cov[filename] = instrumenter.lastFileCoverage();
            return 'function x() {}';
        }
        return ret;
    };

    const coverageSetterFn = function(cov) {
        global[coverageVar] = cov;
    };

    const reportInitFn = function() {
        // set up reporter
        mkdirp.sync(reportingDir); //ensure we fail early if we cannot do this
        reporter.addAll(config.reporting.reports());
        if (config.reporting.print() !== 'none') {
            switch (config.reporting.print()) {
                case 'detail':
                    reporter.add('text');
                    break;
                case 'both':
                    reporter.add('text');
                    reporter.add('text-summary');
                    break;
                default:
                    reporter.add('text-summary');
                    break;
            }
        }
    };

    let disabler;
    const hookFn = function(matchFn) {
        const hookOpts = {
            verbose: config.verbose,
            extensions: config.instrumentation.extensions(),
            coverageVariable: coverageVar
        };

        //initialize the global variable
        coverageSetterFn({});
        reportInitFn();

        if (config.hooks.hookRunInContext()) {
            hook.hookRunInContext(matchFn, runInContextTransformer, hookOpts);
        }
        if (config.hooks.hookRunInThisContext()) {
            hook.hookRunInThisContext(
                matchFn,
                runInThisContextTransformer,
                hookOpts
            );
            if (compareVersions(process.versions.node, '6.0.0') === -1) {
                disabler = hook.hookRequire(
                    matchFn,
                    requireTransformer,
                    hookOpts
                );
            }
        } else {
            disabler = hook.hookRequire(matchFn, requireTransformer, hookOpts);
        }
    };

    const unhookFn = function(matchFn) {
        if (disabler) {
            disabler();
        }
        hook.unhookRunInThisContext();
        hook.unhookRunInContext();
        hook.unloadRequireCache(matchFn);
    };

    const beforeReportFn = function(matchFn, cov) {
        const pidExt = includePid ? '-' + process.pid : '';
        const file = path.resolve(
            reportingDir,
            'coverage' + pidExt + '.raw.json'
        );
        let missingFiles;
        const finalCoverage = cov;

        if (config.instrumentation.includeAllSources()) {
            if (config.verbose) {
                console.error("Including all sources not require'd by tests");
            }
            missingFiles = [];
            // Files that are not touched by code ran by the test runner is manually instrumented, to
            // illustrate the missing coverage.
            matchFn.files.forEach(file => {
                if (!cov[file]) {
                    missingFiles.push(file);
                }
            });

            fakeRequire = true;
            missingFiles.forEach(file => {
                try {
                    require(file);
                } catch (ex) {
                    console.error('Unable to post-instrument: ' + file);
                }
            });
        }
        if (Object.keys(finalCoverage).length > 0) {
            if (config.verbose) {
                console.error(
                    '============================================================================='
                );
                console.error('Writing coverage object [' + file + ']');
                console.error(
                    'Writing coverage reports at [' + reportingDir + ']'
                );
                console.error(
                    '============================================================================='
                );
            }
            fs.writeFileSync(file, JSON.stringify(finalCoverage), 'utf8');
        }
        return finalCoverage;
    };

    const exitFn = function(matchFn, reporterOpts) {
        let cov;

        cov = coverageFinderFn() || {};
        cov = beforeReportFn(matchFn, cov);
        coverageSetterFn(cov);

        if (
            !(cov && typeof cov === 'object') ||
            Object.keys(cov).length === 0
        ) {
            console.error(
                'No coverage information was collected, exit without writing coverage information'
            );
            return;
        }

        const coverageMap = libCoverage.createCoverageMap(cov);
        const transformed = sourceMapStore.transformCoverage(coverageMap);
        reporterOpts.sourceFinder = transformed.sourceFinder;
        reporter.write(transformed.map, reporterOpts);
        sourceMapStore.dispose();
    };

    excludes.push(
        path.relative(process.cwd(), path.join(reportingDir, '**', '*'))
    );
    includes =
        includes ||
        config.instrumentation.extensions().map(ext => '**/*' + ext);
    const matchConfig = {
        root:
            config.instrumentation.root() ||
            /* istanbul ignore next: untestable */ process.cwd(),
        includes,
        excludes
    };
    matcherFor(matchConfig, (err, matchFn) => {
        /* istanbul ignore if: untestable */
        if (err) {
            return callback(err);
        }
        return callback(null, {
            coverageFn: coverageFinderFn,
            hookFn: hookFn.bind(null, matchFn),
            exitFn: exitFn.bind(null, matchFn, {}), // XXX: reporter opts
            unhookFn: unhookFn.bind(null, matchFn)
        });
    });
}

module.exports = {
    getCoverFunctions
};
