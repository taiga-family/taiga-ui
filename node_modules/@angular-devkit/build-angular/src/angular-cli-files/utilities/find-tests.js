"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs_1 = require("fs");
const glob = require("glob");
const path_1 = require("path");
const is_directory_1 = require("./is-directory");
// go through all patterns and find unique list of files
function findTests(patterns, cwd, workspaceRoot) {
    return patterns.reduce((files, pattern) => {
        const relativePathToMain = cwd.replace(workspaceRoot, '').substr(1); // remove leading slash
        const tests = findMatchingTests(pattern, cwd, relativePathToMain);
        tests.forEach(file => {
            if (!files.includes(file)) {
                files.push(file);
            }
        });
        return files;
    }, []);
}
exports.findTests = findTests;
function findMatchingTests(pattern, cwd, relativePathToMain) {
    // normalize pattern, glob lib only accepts forward slashes
    pattern = pattern.replace(/\\/g, '/');
    relativePathToMain = relativePathToMain.replace(/\\/g, '/');
    // remove relativePathToMain to support relative paths from root
    // such paths are easy to get when running scripts via IDEs
    if (pattern.startsWith(relativePathToMain + '/')) {
        pattern = pattern.substr(relativePathToMain.length + 1); // +1 to include slash
    }
    // special logic when pattern does not look like a glob
    if (!glob.hasMagic(pattern)) {
        if (is_directory_1.isDirectory(path_1.join(cwd, pattern))) {
            pattern = `${pattern}/**/*.spec.@(ts|tsx)`;
        }
        else {
            // see if matching spec file exists
            const extension = path_1.extname(pattern);
            const matchingSpec = `${path_1.basename(pattern, extension)}.spec${extension}`;
            if (fs_1.existsSync(path_1.join(cwd, path_1.dirname(pattern), matchingSpec))) {
                pattern = path_1.join(path_1.dirname(pattern), matchingSpec).replace(/\\/g, '/');
            }
        }
    }
    const files = glob.sync(pattern, {
        cwd,
    });
    return files;
}
