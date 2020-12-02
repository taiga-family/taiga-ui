/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const fs = require('fs');
const libCoverage = require('istanbul-lib-coverage');
const Reporter = require('./reporter');
const filesFor = require('./file-matcher').filesFor;

function run(formats, config, opts, callback) {
    if (!callback && typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    opts = opts || {};
    const coverageMap = libCoverage.createCoverageMap();
    const includePattern = opts.include || '**/coverage*.raw.json';
    const reporter = new Reporter(config);

    if (!formats || formats.length === 0) {
        formats = config.reporting.reports();
    }
    try {
        reporter.addAll(formats);
    } catch (ex) {
        ex.inputError = true;
        return callback(ex);
    }

    const root = opts.root || process.cwd();
    filesFor(
        {
            root,
            includes: [includePattern]
        },
        (err, files) => {
            /* istanbul ignore if */
            if (err) {
                return callback(err);
            }
            files.forEach(file => {
                const coverageObject = JSON.parse(
                    fs.readFileSync(file, 'utf8')
                );
                coverageMap.merge(coverageObject);
            });
            reporter.write(coverageMap, {});
            return callback();
        }
    );
}

module.exports = {
    run
};
