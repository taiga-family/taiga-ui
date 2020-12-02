"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/architect/testing");
const core_1 = require("@angular-devkit/core");
const devkitRoot = core_1.normalize(global._DevKitRoot); // tslint:disable-line:no-any
const basicWorkspaceRoot = core_1.join(devkitRoot, 'tests/angular_devkit/build_webpack/basic-app/');
exports.basicHost = new testing_1.TestProjectHost(basicWorkspaceRoot);
const angularWorkspaceRoot = core_1.join(devkitRoot, 'tests/angular_devkit/build_webpack/angular-app/');
exports.angularHost = new testing_1.TestProjectHost(angularWorkspaceRoot);
