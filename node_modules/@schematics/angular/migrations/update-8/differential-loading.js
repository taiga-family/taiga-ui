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
const json_utils_1 = require("../../utility/json-utils");
const browserslistContent = `# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries

# You can see what browsers were selected by your queries by running:
#   npx browserslist

> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-11 # For IE 9-11 support, remove 'not'.`;
function updateES5Projects() {
    return (tree) => {
        // update workspace tsconfig
        updateTsConfig(tree, '/tsconfig.json');
        const angularConfigContent = tree.read('angular.json') || tree.read('.angular.json');
        if (!angularConfigContent) {
            return;
        }
        const angularJson = core_1.parseJson(angularConfigContent.toString(), core_1.JsonParseMode.Loose);
        if (!core_1.isJsonObject(angularJson) || !core_1.isJsonObject(angularJson.projects)) {
            // If that field isn't there, no use...
            return;
        }
        // For all projects
        for (const [name, project] of Object.entries(angularJson.projects)) {
            if (!core_1.isJsonObject(project)) {
                continue;
            }
            if (typeof project.root != 'string' || project.projectType !== 'application') {
                continue;
            }
            if (name.endsWith('-e2e')) {
                // Skip existing separate E2E projects
                continue;
            }
            // Older projects app and spec ts configs had script and module set in them.
            const architect = project.architect;
            if (!(core_1.isJsonObject(architect)
                && core_1.isJsonObject(architect.build)
                && architect.build.builder === '@angular-devkit/build-angular:browser')) {
                // Skip projects who's build builder is not build-angular:browser
                continue;
            }
            const buildOptionsConfig = architect.build.options;
            if (core_1.isJsonObject(buildOptionsConfig) && typeof buildOptionsConfig.tsConfig === 'string') {
                updateTsConfig(tree, buildOptionsConfig.tsConfig);
            }
            const testConfig = architect.test;
            if (core_1.isJsonObject(testConfig)
                && core_1.isJsonObject(testConfig.options)
                && typeof testConfig.options.tsConfig === 'string') {
                updateTsConfig(tree, testConfig.options.tsConfig);
            }
            const browserslistPath = core_1.join(core_1.normalize(project.root), 'browserslist');
            // Move the CLI 7 style browserlist to root if it's there.
            const sourceRoot = project.sourceRoot === 'string'
                ? project.sourceRoot
                : core_1.join(core_1.normalize(project.root), 'src');
            const srcBrowsersList = core_1.join(core_1.normalize(sourceRoot), 'browserslist');
            if (tree.exists(srcBrowsersList)) {
                tree.rename(srcBrowsersList, browserslistPath);
            }
            else if (!tree.exists(browserslistPath)) {
                tree.create(browserslistPath, browserslistContent);
            }
        }
        return tree;
    };
}
exports.updateES5Projects = updateES5Projects;
function updateTsConfig(tree, tsConfigPath) {
    const buffer = tree.read(tsConfigPath);
    if (!buffer) {
        return;
    }
    const tsCfgAst = core_1.parseJsonAst(buffer.toString(), core_1.JsonParseMode.Loose);
    if (tsCfgAst.kind !== 'object') {
        return;
    }
    const configExtends = json_utils_1.findPropertyInAstObject(tsCfgAst, 'extends');
    const isExtendedConfig = configExtends && configExtends.kind === 'string';
    const compilerOptions = json_utils_1.findPropertyInAstObject(tsCfgAst, 'compilerOptions');
    if (!compilerOptions || compilerOptions.kind !== 'object') {
        return;
    }
    const recorder = tree.beginUpdate(tsConfigPath);
    if (isExtendedConfig) {
        json_utils_1.removePropertyInAstObject(recorder, compilerOptions, 'target');
        json_utils_1.removePropertyInAstObject(recorder, compilerOptions, 'module');
        json_utils_1.removePropertyInAstObject(recorder, compilerOptions, 'downlevelIteration');
    }
    else {
        const downlevelIteration = json_utils_1.findPropertyInAstObject(compilerOptions, 'downlevelIteration');
        if (!downlevelIteration) {
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, compilerOptions, 'downlevelIteration', true, 4);
        }
        else if (!downlevelIteration.value) {
            const { start, end } = downlevelIteration;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, 'true');
        }
        const scriptTarget = json_utils_1.findPropertyInAstObject(compilerOptions, 'target');
        if (!scriptTarget) {
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, compilerOptions, 'target', 'es2015', 4);
        }
        else if (scriptTarget.value !== 'es2015') {
            const { start, end } = scriptTarget;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, '"es2015"');
        }
        const scriptModule = json_utils_1.findPropertyInAstObject(compilerOptions, 'module');
        if (!scriptModule) {
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, compilerOptions, 'module', 'esnext', 4);
        }
        else if (scriptModule.value !== 'esnext') {
            const { start, end } = scriptModule;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, '"esnext"');
        }
    }
    tree.commitUpdate(recorder);
}
