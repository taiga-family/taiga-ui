"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
// `TsCompilerAotCompilerTypeCheckHostAdapter` in @angular/compiler-cli seems to resolve module
// names directly via `resolveModuleName`, which prevents full Path usage.
// NSTSC also uses Node.JS `path.resolve` which will result in incorrect paths in Windows
// Example: `/D/MyPath/MyProject` -> `D:/d/mypath/myproject`
// To work around this we must provide the same path format as TS internally uses in
// the SourceFile paths.
function workaroundResolve(path) {
    return forwardSlashPath(core_1.getSystemPath(core_1.normalize(path)));
}
exports.workaroundResolve = workaroundResolve;
function flattenArray(value) {
    return [].concat.apply([], value);
}
exports.flattenArray = flattenArray;
// TS represents paths internally with '/' and expects paths to be in this format.
function forwardSlashPath(path) {
    return path.replace(/\\/g, '/');
}
exports.forwardSlashPath = forwardSlashPath;
