"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function _isTruthy(value) {
    // Returns true if value is a string that is anything but 0 or false.
    return value !== undefined && value !== '0' && value.toUpperCase() !== 'FALSE';
}
function isTTY() {
    // If we force TTY, we always return true.
    const force = process.env['NG_FORCE_TTY'];
    if (force !== undefined) {
        return _isTruthy(force);
    }
    return !!process.stdout.isTTY && !_isTruthy(process.env['CI']);
}
exports.isTTY = isTTY;
