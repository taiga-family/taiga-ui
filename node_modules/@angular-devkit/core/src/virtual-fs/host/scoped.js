"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path_1 = require("../path");
const resolver_1 = require("./resolver");
class ScopedHost extends resolver_1.ResolverHost {
    constructor(delegate, _root = path_1.NormalizedRoot) {
        super(delegate);
        this._root = _root;
    }
    _resolve(path) {
        return path_1.join(this._root, path);
    }
}
exports.ScopedHost = ScopedHost;
