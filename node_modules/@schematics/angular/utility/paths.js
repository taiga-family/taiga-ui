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
function relativePathToWorkspaceRoot(projectRoot) {
    const normalizedPath = core_1.split(core_1.normalize(projectRoot || ''));
    if (normalizedPath.length === 0 || !normalizedPath[0]) {
        return '.';
    }
    else {
        return normalizedPath.map(() => '..').join('/');
    }
}
exports.relativePathToWorkspaceRoot = relativePathToWorkspaceRoot;
