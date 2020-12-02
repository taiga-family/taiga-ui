/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const path = require('path');
const fs = require('fs');
const libCoverage = require('istanbul-lib-coverage');
const filesFor = require('./file-matcher').filesFor;
const inputError = require('./input-error');
const isAbsolute =
    path.isAbsolute ||
    function(file) {
        return path.resolve(file) === path.normalize(file);
    };

function removeFiles(origMap, root, files) {
    const filesObj = {};
    const ret = libCoverage.createCoverageMap();

    // Create lookup table.
    files.forEach(file => {
        filesObj[file] = true;
    });

    origMap.files().forEach(key => {
        // Exclude keys will always be relative, but covObj keys can be absolute or relative
        let excludeKey = isAbsolute(key) ? path.relative(root, key) : key;
        // Also normalize for files that start with `./`, etc.
        excludeKey = path.normalize(excludeKey);
        if (filesObj[excludeKey] !== true) {
            ret.addFileCoverage(origMap.fileCoverageFor(key));
        }
    });

    return ret;
}

function run(config, opts, callback) {
    if (!callback && typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts = opts || {};

    const root = opts.root || config.instrumentation.root() || process.cwd();
    const includePattern = opts.include || '**/coverage*.json';
    const errors = [];

    const check = function(name, thresholds, actuals) {
        ['statements', 'branches', 'lines', 'functions'].forEach(key => {
            const actual = actuals[key].pct;
            const actualUncovered = actuals[key].total - actuals[key].covered;
            const threshold = thresholds[key];

            if (threshold < 0) {
                if (threshold * -1 < actualUncovered) {
                    errors.push(
                        'ERROR: Uncovered count for ' +
                            key +
                            ' (' +
                            actualUncovered +
                            ') exceeds ' +
                            name +
                            ' threshold (' +
                            -1 * threshold +
                            ')'
                    );
                }
            } else {
                if (actual < threshold) {
                    errors.push(
                        'ERROR: Coverage for ' +
                            key +
                            ' (' +
                            actual +
                            '%) does not meet ' +
                            name +
                            ' threshold (' +
                            threshold +
                            '%)'
                    );
                }
            }
        });
    };

    const makeMap = function(files, callback) {
        const coverageMap = libCoverage.createCoverageMap();
        if (files.length === 0) {
            return callback(
                inputError.create('ERROR: No coverage files found.')
            );
        }
        files.forEach(file => {
            const coverageObject = JSON.parse(fs.readFileSync(file, 'utf8'));
            coverageMap.merge(coverageObject);
        });
        return callback(null, coverageMap);
    };

    const processFiles = function(coverageMap, callback) {
        const thresholds = {
            global: {
                statements: config.check.global.statements || 0,
                branches: config.check.global.branches || 0,
                lines: config.check.global.lines || 0,
                functions: config.check.global.functions || 0,
                excludes: config.check.global.excludes || []
            },
            each: {
                statements: config.check.each.statements || 0,
                branches: config.check.each.branches || 0,
                lines: config.check.each.lines || 0,
                functions: config.check.each.functions || 0,
                excludes: config.check.each.excludes || []
            }
        };
        const globalResults = removeFiles(
            coverageMap,
            root,
            thresholds.global.excludes
        );
        const eachResults = removeFiles(
            coverageMap,
            root,
            thresholds.each.excludes
        );

        if (config.verbose) {
            console.error('Compare actuals against thresholds');
            console.error(
                JSON.stringify(
                    {
                        global: globalResults,
                        each: eachResults,
                        thresholds
                    },
                    undefined,
                    4
                )
            );
        }

        check('global', thresholds.global, globalResults.getCoverageSummary());
        eachResults.files().forEach(key => {
            const summary = eachResults.fileCoverageFor(key).toSummary();
            check('per-file' + ' (' + key + ') ', thresholds.each, summary);
        });
        const finalError = errors.length === 0 ? null : errors.join('\n');
        return callback(finalError);
    };

    filesFor(
        {
            root,
            includes: [includePattern]
        },
        (err, files) => {
            if (err) {
                return callback(err);
            }
            makeMap(files, (err, map) => {
                if (err) {
                    return callback(err);
                }
                return processFiles(map, callback);
            });
        }
    );
}

module.exports = {
    run
};
