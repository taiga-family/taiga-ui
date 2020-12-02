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
const path_1 = require("path");
const json_utils_1 = require("../../utility/json-utils");
const workspace_models_1 = require("../../utility/workspace-models");
const utils_1 = require("./utils");
/**
 * Update the tsconfig files for applications
 * - Removes enableIvy: true
 * - Sets stricter file inclusions
 * - Sets module compiler option to esnext or commonjs
 */
function updateApplicationTsConfigs() {
    return (tree, context) => {
        const workspace = utils_1.getWorkspace(tree);
        const logger = context.logger;
        // Add `module` option in the workspace tsconfig
        updateModuleCompilerOption(tree, '/tsconfig.json');
        for (const { target, project } of utils_1.getTargets(workspace, 'build', workspace_models_1.Builders.Browser)) {
            updateTsConfig(tree, target, project, workspace_models_1.Builders.Browser, logger);
        }
        for (const { target, project } of utils_1.getTargets(workspace, 'server', workspace_models_1.Builders.Server)) {
            updateTsConfig(tree, target, project, workspace_models_1.Builders.Server, logger);
        }
        for (const { target, project } of utils_1.getTargets(workspace, 'test', workspace_models_1.Builders.Karma)) {
            updateTsConfig(tree, target, project, workspace_models_1.Builders.Karma, logger);
        }
        return tree;
    };
}
exports.updateApplicationTsConfigs = updateApplicationTsConfigs;
function updateTsConfig(tree, builderConfig, project, builderName, logger) {
    const options = utils_1.getAllOptions(builderConfig);
    for (const option of options) {
        let recorder;
        const tsConfigOption = json_utils_1.findPropertyInAstObject(option, 'tsConfig');
        if (!tsConfigOption || tsConfigOption.kind !== 'string') {
            continue;
        }
        const tsConfigPath = tsConfigOption.value;
        let tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
        if (!tsConfigAst) {
            logger.warn(`Cannot find file: ${tsConfigPath}`);
            continue;
        }
        // Remove 'enableIvy: true' since this is the default in version 9.
        const angularCompilerOptions = json_utils_1.findPropertyInAstObject(tsConfigAst, 'angularCompilerOptions');
        if (angularCompilerOptions && angularCompilerOptions.kind === 'object') {
            const enableIvy = json_utils_1.findPropertyInAstObject(angularCompilerOptions, 'enableIvy');
            if (enableIvy && enableIvy.kind === 'true') {
                recorder = tree.beginUpdate(tsConfigPath);
                if (angularCompilerOptions.properties.length === 1) {
                    // remove entire 'angularCompilerOptions'
                    json_utils_1.removePropertyInAstObject(recorder, tsConfigAst, 'angularCompilerOptions');
                }
                else {
                    json_utils_1.removePropertyInAstObject(recorder, angularCompilerOptions, 'enableIvy');
                }
                tree.commitUpdate(recorder);
            }
        }
        // Update 'module' compilerOption
        updateModuleCompilerOption(tree, tsConfigPath, builderName);
        // Add stricter file inclusions to avoid unused file warning during compilation
        if (builderName !== workspace_models_1.Builders.Karma) {
            // Note: we need to re-read the tsconfig after very commit because
            // otherwise the updates will be out of sync since we are ammending the same node.
            // we are already checking that tsconfig exists above!
            // tslint:disable-next-line: no-non-null-assertion
            tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
            const include = json_utils_1.findPropertyInAstObject(tsConfigAst, 'include');
            if (include && include.kind === 'array') {
                const tsInclude = include.elements.find(({ value }) => typeof value === 'string' && value.endsWith('**/*.ts'));
                if (tsInclude) {
                    const { start, end } = tsInclude;
                    recorder = tree.beginUpdate(tsConfigPath);
                    recorder.remove(start.offset, end.offset - start.offset);
                    // Replace ts includes with d.ts
                    recorder.insertLeft(start.offset, tsInclude.text.replace('.ts', '.d.ts'));
                    tree.commitUpdate(recorder);
                }
            }
            else {
                // Includes are not present, add includes to dts files
                // By default when 'include' nor 'files' fields are used TypeScript
                // will include all ts files.
                const srcRootAst = json_utils_1.findPropertyInAstObject(project, 'sourceRoot');
                const include = (srcRootAst === null || srcRootAst === void 0 ? void 0 : srcRootAst.kind) === 'string'
                    ? core_1.join(core_1.normalize(srcRootAst.value), '**/*.d.ts')
                    : '**/*.d.ts';
                recorder = tree.beginUpdate(tsConfigPath);
                json_utils_1.insertPropertyInAstObjectInOrder(recorder, tsConfigAst, 'include', [include], 2);
                tree.commitUpdate(recorder);
            }
            const files = json_utils_1.findPropertyInAstObject(tsConfigAst, 'files');
            if (!files) {
                const newFiles = [];
                const tsConfigDir = path_1.dirname(utils_1.forwardSlashPath(tsConfigPath));
                const mainOption = json_utils_1.findPropertyInAstObject(option, 'main');
                if (mainOption && mainOption.kind === 'string') {
                    newFiles.push(utils_1.forwardSlashPath(path_1.relative(tsConfigDir, utils_1.forwardSlashPath(mainOption.value))));
                }
                const polyfillsOption = json_utils_1.findPropertyInAstObject(option, 'polyfills');
                if (polyfillsOption && polyfillsOption.kind === 'string') {
                    newFiles.push(utils_1.forwardSlashPath(path_1.relative(tsConfigDir, utils_1.forwardSlashPath(polyfillsOption.value))));
                }
                if (newFiles.length) {
                    recorder = tree.beginUpdate(tsConfigPath);
                    // tslint:disable-next-line: no-non-null-assertion
                    tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
                    json_utils_1.insertPropertyInAstObjectInOrder(recorder, tsConfigAst, 'files', newFiles, 2);
                    tree.commitUpdate(recorder);
                }
                recorder = tree.beginUpdate(tsConfigPath);
                // tslint:disable-next-line: no-non-null-assertion
                tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
                json_utils_1.removePropertyInAstObject(recorder, tsConfigAst, 'exclude');
                tree.commitUpdate(recorder);
            }
        }
    }
}
function updateModuleCompilerOption(tree, tsConfigPath, builderName) {
    const tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
    if (!tsConfigAst) {
        return;
    }
    const compilerOptions = json_utils_1.findPropertyInAstObject(tsConfigAst, 'compilerOptions');
    if (!compilerOptions || compilerOptions.kind !== 'object') {
        return;
    }
    const configExtends = json_utils_1.findPropertyInAstObject(tsConfigAst, 'extends');
    const isExtendedConfig = configExtends && configExtends.kind === 'string';
    const recorder = tree.beginUpdate(tsConfigPath);
    // Server tsconfig should have a module of commonjs
    const moduleType = builderName === workspace_models_1.Builders.Server ? 'commonjs' : 'esnext';
    if (isExtendedConfig && builderName !== workspace_models_1.Builders.Server) {
        json_utils_1.removePropertyInAstObject(recorder, compilerOptions, 'module');
    }
    else {
        const scriptModule = json_utils_1.findPropertyInAstObject(compilerOptions, 'module');
        if (!scriptModule) {
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, compilerOptions, 'module', moduleType, 4);
        }
        else if (scriptModule.value !== moduleType) {
            const { start, end } = scriptModule;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, `"${moduleType}"`);
        }
    }
    tree.commitUpdate(recorder);
}
