"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function defaultProgress(progress) {
    if (progress === undefined) {
        return process.stdout.isTTY === true;
    }
    return progress;
}
exports.defaultProgress = defaultProgress;
