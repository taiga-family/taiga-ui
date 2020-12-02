"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs = require("fs");
// Workaround Node.js issue prior to 10.16 with copyFile on macOS
// https://github.com/angular/angular-cli/issues/15544 & https://github.com/nodejs/node/pull/27241
let copyFileWorkaround = false;
if (process.platform === 'darwin') {
    const version = process.versions.node.split('.').map(part => Number(part));
    if (version[0] < 10 || version[0] === 11 || (version[0] === 10 && version[1] < 16)) {
        copyFileWorkaround = true;
    }
}
function copyFile(src, dest) {
    if (copyFileWorkaround) {
        try {
            fs.unlinkSync(dest);
        }
        catch (_a) { }
    }
    fs.copyFileSync(src, dest, fs.constants.COPYFILE_FICLONE);
}
exports.copyFile = copyFile;
