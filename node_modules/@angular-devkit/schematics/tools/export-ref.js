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
class ExportStringRef {
    constructor(ref, parentPath = process.cwd(), inner = true) {
        const [path, name] = ref.split('#', 2);
        this._module = path[0] == '.' ? path_1.resolve(parentPath, path) : path;
        this._module = require.resolve(this._module);
        this._path = path_1.dirname(this._module);
        if (inner) {
            this._ref = require(this._module)[name || 'default'];
        }
        else {
            this._ref = require(this._module);
        }
    }
    get ref() { return this._ref; }
    get module() { return this._module; }
    get path() { return this._path; }
}
exports.ExportStringRef = ExportStringRef;
