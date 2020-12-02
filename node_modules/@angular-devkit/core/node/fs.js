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
function isFile(filePath) {
    let stat;
    try {
        stat = fs_1.statSync(filePath);
    }
    catch (e) {
        if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) {
            return false;
        }
        throw e;
    }
    return stat.isFile() || stat.isFIFO();
}
exports.isFile = isFile;
function isDirectory(filePath) {
    let stat;
    try {
        stat = fs_1.statSync(filePath);
    }
    catch (e) {
        if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) {
            return false;
        }
        throw e;
    }
    return stat.isDirectory();
}
exports.isDirectory = isDirectory;
