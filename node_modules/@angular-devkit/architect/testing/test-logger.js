"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
/**
 * @deprecated
 */
class TestLogger extends core_1.logging.Logger {
    constructor(name, parent = null) {
        super(name, parent);
        this._latestEntries = [];
        this.subscribe((entry) => this._latestEntries.push(entry));
    }
    clear() {
        this._latestEntries = [];
    }
    includes(message) {
        return this._latestEntries.some((entry) => entry.message.includes(message));
    }
    test(re) {
        return this._latestEntries.some((entry) => re.test(entry.message));
    }
}
exports.TestLogger = TestLogger;
