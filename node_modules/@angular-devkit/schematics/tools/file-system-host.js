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
const node_1 = require("@angular-devkit/core/node");
/**
 * @deprecated Please use a Host directly instead of this class. This will be removed prior to 1.0.
 */
class FileSystemHost extends core_1.virtualFs.ScopedHost {
    constructor(dir) {
        super(new node_1.NodeJsSyncHost(), core_1.normalize(dir));
    }
}
exports.FileSystemHost = FileSystemHost;
