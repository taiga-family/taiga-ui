"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
__export(require("./definitions"));
var host_1 = require("./host");
exports.createWorkspaceHost = host_1.createWorkspaceHost;
var core_1 = require("./core");
exports.WorkspaceFormat = core_1.WorkspaceFormat;
exports.readWorkspace = core_1.readWorkspace;
exports.writeWorkspace = core_1.writeWorkspace;
