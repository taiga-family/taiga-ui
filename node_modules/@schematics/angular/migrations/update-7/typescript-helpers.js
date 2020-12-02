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
const tasks_1 = require("@angular-devkit/schematics/tasks");
const dependencies_1 = require("../../utility/dependencies");
const json_utils_1 = require("../../utility/json-utils");
const latest_versions_1 = require("../../utility/latest-versions");
function typeScriptHelpersRule() {
    return schematics_1.chain([
        _updateTsConfig(),
        (tree, context) => {
            const existing = dependencies_1.getPackageJsonDependency(tree, 'tslib');
            const type = existing ? existing.type : dependencies_1.NodeDependencyType.Default;
            dependencies_1.addPackageJsonDependency(tree, {
                type,
                name: 'tslib',
                version: latest_versions_1.latestVersions.TsLib,
                overwrite: true,
            });
            context.addTask(new tasks_1.NodePackageInstallTask());
        },
    ]);
}
exports.typeScriptHelpersRule = typeScriptHelpersRule;
function _updateTsConfig() {
    return (host) => {
        const tsConfigPath = '/tsconfig.json';
        const buffer = host.read(tsConfigPath);
        if (!buffer) {
            return host;
        }
        const tsCfgAst = core_1.parseJsonAst(buffer.toString(), core_1.JsonParseMode.Loose);
        if (tsCfgAst.kind !== 'object') {
            return host;
        }
        const compilerOptions = json_utils_1.findPropertyInAstObject(tsCfgAst, 'compilerOptions');
        if (!compilerOptions || compilerOptions.kind !== 'object') {
            return host;
        }
        const importHelpers = json_utils_1.findPropertyInAstObject(compilerOptions, 'importHelpers');
        if (importHelpers && importHelpers.value === true) {
            return host;
        }
        const recorder = host.beginUpdate(tsConfigPath);
        if (importHelpers) {
            const { start, end } = importHelpers;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, 'true');
        }
        else {
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, compilerOptions, 'importHelpers', true, 4);
        }
        host.commitUpdate(recorder);
        return host;
    };
}
