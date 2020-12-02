"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const os_1 = require("os");
const path_1 = require("path");
let logPath;
/**
 * Writes an Error to a temporary log file.
 * If this method is called multiple times from the same process the same log file will be used.
 * @returns The path of the generated log file.
 */
function writeErrorToLogFile(error) {
    if (!logPath) {
        const tempDirectory = fs_1.mkdtempSync(fs_1.realpathSync(os_1.tmpdir()) + '/ng-');
        logPath = path_1.normalize(tempDirectory + '/angular-errors.log');
    }
    fs_1.appendFileSync(logPath, '[error] ' + (error.stack || error) + '\n\n');
    return logPath;
}
exports.writeErrorToLogFile = writeErrorToLogFile;
