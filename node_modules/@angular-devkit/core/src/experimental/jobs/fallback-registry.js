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
 * A simple job registry that keep a map of JobName => JobHandler internally.
 */
class FallbackRegistry {
    constructor(_fallbacks = []) {
        this._fallbacks = _fallbacks;
    }
    addFallback(registry) {
        this._fallbacks.push(registry);
    }
    get(name) {
        return rxjs_1.from(this._fallbacks).pipe(operators_1.concatMap(fb => fb.get(name)), operators_1.first(x => x !== null, null));
    }
}
exports.FallbackRegistry = FallbackRegistry;
