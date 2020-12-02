"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path_1 = require("path");
const rimraf = require("rimraf");
/**
 * Delete an output directory, but error out if it's the root of the project.
 */
function deleteOutputDir(root, outputPath) {
    const resolvedOutputPath = path_1.resolve(root, outputPath);
    if (resolvedOutputPath === root) {
        throw new Error('Output path MUST not be project root directory!');
    }
    rimraf.sync(resolvedOutputPath);
}
exports.deleteOutputDir = deleteOutputDir;
