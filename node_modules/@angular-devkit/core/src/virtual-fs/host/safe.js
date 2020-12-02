"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/**
 * A Host that filters out errors. The only exception is `read()` which will still error out if
 * the delegate returned an error (e.g. NodeJS will error out if the file doesn't exist).
 */
class SafeReadonlyHost {
    constructor(_delegate) {
        this._delegate = _delegate;
    }
    get capabilities() {
        return this._delegate.capabilities;
    }
    read(path) {
        return this._delegate.read(path);
    }
    list(path) {
        return this._delegate.list(path).pipe(operators_1.catchError(() => rxjs_1.of([])));
    }
    exists(path) {
        return this._delegate.exists(path);
    }
    isDirectory(path) {
        return this._delegate.isDirectory(path).pipe(operators_1.catchError(() => rxjs_1.of(false)));
    }
    isFile(path) {
        return this._delegate.isFile(path).pipe(operators_1.catchError(() => rxjs_1.of(false)));
    }
    // Some hosts may not support stats.
    stat(path) {
        const maybeStat = this._delegate.stat(path);
        return maybeStat && maybeStat.pipe(operators_1.catchError(() => rxjs_1.of(null)));
    }
}
exports.SafeReadonlyHost = SafeReadonlyHost;
