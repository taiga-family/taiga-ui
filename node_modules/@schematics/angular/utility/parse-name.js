"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// import { relative, Path } from "../../../angular_devkit/core/src/virtual-fs";
const core_1 = require("@angular-devkit/core");
function parseName(path, name) {
    const nameWithoutPath = core_1.basename(core_1.normalize(name));
    const namePath = core_1.dirname(core_1.join(core_1.normalize(path), name));
    return {
        name: nameWithoutPath,
        path: core_1.normalize('/' + namePath),
    };
}
exports.parseName = parseName;
