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
const schematics_1 = require("@angular-devkit/schematics");
function default_1(options) {
    const schematicsVersion = require('@angular-devkit/schematics/package.json').version;
    const coreVersion = require('@angular-devkit/core/package.json').version;
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
        schematics_1.partitionApplyMerge((p) => !/\/src\/.*?\/files\//.test(p), schematics_1.template({
            ...options,
            coreVersion,
            schematicsVersion,
            dot: '.',
            dasherize: core_1.strings.dasherize,
        })),
        schematics_1.move(options.name),
    ]));
}
exports.default = default_1;
