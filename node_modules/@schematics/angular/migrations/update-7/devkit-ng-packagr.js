"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const dependencies_1 = require("../../utility/dependencies");
const latest_versions_1 = require("../../utility/latest-versions");
function updateDevkitBuildNgPackagr() {
    return (tree, context) => {
        const existing = dependencies_1.getPackageJsonDependency(tree, '@angular-devkit/build-ng-packagr');
        if (!existing) {
            return;
        }
        dependencies_1.addPackageJsonDependency(tree, {
            type: existing.type,
            name: '@angular-devkit/build-ng-packagr',
            version: latest_versions_1.latestVersions.DevkitBuildNgPackagr,
            overwrite: true,
        });
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
exports.updateDevkitBuildNgPackagr = updateDevkitBuildNgPackagr;
