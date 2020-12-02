"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const dependencies_1 = require("../../utility/dependencies");
const latest_versions_1 = require("../../utility/latest-versions");
var polyfill_metadata_1 = require("./polyfill-metadata");
exports.polyfillMetadataRule = polyfill_metadata_1.polyfillMetadataRule;
var typescript_helpers_1 = require("./typescript-helpers");
exports.typeScriptHelpersRule = typescript_helpers_1.typeScriptHelpersRule;
var devkit_ng_packagr_1 = require("./devkit-ng-packagr");
exports.updateDevkitBuildNgPackagr = devkit_ng_packagr_1.updateDevkitBuildNgPackagr;
function default_1() {
    return (tree, context) => {
        const existing = dependencies_1.getPackageJsonDependency(tree, '@angular-devkit/build-angular');
        if (existing && latest_versions_1.latestVersions.DevkitBuildAngular === existing.version) {
            return;
        }
        const type = existing ? existing.type : dependencies_1.NodeDependencyType.Dev;
        dependencies_1.addPackageJsonDependency(tree, {
            type,
            name: '@angular-devkit/build-angular',
            version: latest_versions_1.latestVersions.DevkitBuildAngular,
            overwrite: true,
        });
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
exports.default = default_1;
