"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const architect_1 = require("@angular-devkit/architect");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
async function initialize(options, root) {
    const packager = (await Promise.resolve().then(() => require('ng-packagr'))).ngPackagr();
    packager.forProject(path_1.resolve(root, options.project));
    if (options.tsConfig) {
        packager.withTsConfig(path_1.resolve(root, options.tsConfig));
    }
    return packager;
}
function execute(options, context) {
    return rxjs_1.from(initialize(options, context.workspaceRoot)).pipe(operators_1.switchMap(packager => options.watch ? packager.watch() : packager.build()), operators_1.mapTo({ success: true }));
}
exports.execute = execute;
exports.default = architect_1.createBuilder(execute);
