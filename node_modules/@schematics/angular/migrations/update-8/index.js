"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const codelyzer_5_1 = require("./codelyzer-5");
const differential_loading_1 = require("./differential-loading");
const drop_es6_polyfills_1 = require("./drop-es6-polyfills");
const remove_angular_http_1 = require("./remove-angular-http");
const update_dependencies_1 = require("./update-dependencies");
var update_lazy_module_paths_1 = require("./update-lazy-module-paths");
exports.updateLazyModulePaths = update_lazy_module_paths_1.updateLazyModulePaths;
function default_1() {
    return () => {
        return schematics_1.chain([
            codelyzer_5_1.updateTsLintConfig(),
            codelyzer_5_1.updatePackageJson(),
            drop_es6_polyfills_1.dropES2015Polyfills(),
            differential_loading_1.updateES5Projects(),
            update_dependencies_1.updateDependencies(),
            remove_angular_http_1.removeAngularHttp(),
            (tree, context) => {
                const packageChanges = tree.actions.some(a => a.path.endsWith('/package.json'));
                if (packageChanges) {
                    context.addTask(new tasks_1.NodePackageInstallTask());
                }
            },
        ]);
    };
}
exports.default = default_1;
