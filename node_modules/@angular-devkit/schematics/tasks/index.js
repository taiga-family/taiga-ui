"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var install_task_1 = require("./node-package/install-task");
exports.NodePackageInstallTask = install_task_1.NodePackageInstallTask;
var link_task_1 = require("./node-package/link-task");
exports.NodePackageLinkTask = link_task_1.NodePackageLinkTask;
var init_task_1 = require("./repo-init/init-task");
exports.RepositoryInitializerTask = init_task_1.RepositoryInitializerTask;
var task_1 = require("./run-schematic/task");
exports.RunSchematicTask = task_1.RunSchematicTask;
var task_2 = require("./tslint-fix/task");
exports.TslintFixTask = task_2.TslintFixTask;
