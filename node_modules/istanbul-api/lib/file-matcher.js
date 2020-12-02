/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const fs = require('fs');
const path = require('path');
const async = require('async');
const fileset = require('fileset');
let seq = 0;

function filesFor(options, callback) {
    if (!callback && typeof options === 'function') {
        callback = options;
        options = null;
    }
    options = options || {};

    let root = options.root;
    let includes = options.includes;
    let excludes = options.excludes;
    const realpath = options.realpath;
    const relative = options.relative;

    root = root || process.cwd();
    includes = includes && Array.isArray(includes) ? includes : ['**/*.js'];
    excludes =
        excludes && Array.isArray(excludes) ? excludes : ['**/node_modules/**'];

    const opts = { cwd: root, nodir: true, ignore: excludes };
    seq += 1;
    opts['x' + seq + new Date().getTime()] = true; //cache buster for minimatch cache bug
    fileset(includes.join(' '), excludes.join(' '), opts, (err, files) => {
        /* istanbul ignore if - untestable */
        if (err) {
            return callback(err);
        }
        if (relative) {
            return callback(err, files);
        }

        if (!realpath) {
            files = files.map(file => path.resolve(root, file));
            return callback(err, files);
        }

        const realPathCache =
            module.constructor._realpathCache || /* istanbul ignore next */ {};

        async.map(
            files,
            (file, done) => {
                fs.realpath(path.resolve(root, file), realPathCache, done);
            },
            callback
        );
    });
}

function matcherFor(options, callback) {
    if (!callback && typeof options === 'function') {
        callback = options;
        options = null;
    }
    options = options || {};
    options.relative = false; //force absolute paths
    options.realpath = true; //force real paths (to match Node.js module paths)

    filesFor(options, (err, files) => {
        const fileMap = Object.create(null);
        /* istanbul ignore if - untestable */
        if (err) {
            return callback(err);
        }
        files.forEach(file => {
            fileMap[file] = true;
        });

        const matchFn = function(file) {
            return fileMap[file];
        };
        matchFn.files = Object.keys(fileMap);
        return callback(null, matchFn);
    });
}

module.exports = {
    filesFor,
    matcherFor
};
