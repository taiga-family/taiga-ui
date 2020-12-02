"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const config_1 = require("../../utility/config");
const json_utils_1 = require("../../utility/json-utils");
/** Get a project target which builder and target names matches the provided. */
function getProjectTarget(project, targetName, builderName) {
    const projectRoot = json_utils_1.findPropertyInAstObject(project, 'root');
    if (!projectRoot || projectRoot.kind !== 'string') {
        return undefined;
    }
    const architect = json_utils_1.findPropertyInAstObject(project, 'architect');
    if (!architect || architect.kind !== 'object') {
        return undefined;
    }
    const target = json_utils_1.findPropertyInAstObject(architect, targetName);
    if (!target || target.kind !== 'object') {
        return undefined;
    }
    const builder = json_utils_1.findPropertyInAstObject(target, 'builder');
    // Projects who's build builder is @angular-devkit/build-ng-packagr
    if (builder && builder.kind === 'string' && builder.value === builderName) {
        return target;
    }
    return undefined;
}
exports.getProjectTarget = getProjectTarget;
function getTargets(workspace, targetName, builderName) {
    const projects = json_utils_1.findPropertyInAstObject(workspace, 'projects');
    if (!projects || projects.kind !== 'object' || !projects.properties) {
        return [];
    }
    const targets = [];
    for (const project of projects.properties) {
        const projectConfig = project.value;
        if (projectConfig.kind !== 'object') {
            continue;
        }
        const target = getProjectTarget(projectConfig, targetName, builderName);
        if (target) {
            targets.push({ target, project: projectConfig });
        }
    }
    return targets;
}
exports.getTargets = getTargets;
/** Helper to retreive all the options in various configurations. */
function getAllOptions(builderConfig, configurationsOnly = false) {
    const options = [];
    const configurations = json_utils_1.findPropertyInAstObject(builderConfig, 'configurations');
    if (configurations && configurations.kind === 'object') {
        options.push(...configurations.properties.map(x => x.value));
    }
    if (!configurationsOnly) {
        options.push(json_utils_1.findPropertyInAstObject(builderConfig, 'options'));
    }
    return options.filter(o => o && o.kind === 'object');
}
exports.getAllOptions = getAllOptions;
function getWorkspace(host) {
    const path = config_1.getWorkspacePath(host);
    const content = readJsonFileAsAstObject(host, path);
    if (!content) {
        throw new schematics_1.SchematicsException(`Could not find (${path})`);
    }
    return content;
}
exports.getWorkspace = getWorkspace;
function readJsonFileAsAstObject(host, path) {
    const configBuffer = host.read(path);
    if (!configBuffer) {
        return undefined;
    }
    const content = configBuffer.toString();
    const astContent = core_1.parseJsonAst(content, core_1.JsonParseMode.Loose);
    if (!astContent || astContent.kind !== 'object') {
        throw new schematics_1.SchematicsException(`Invalid JSON AST Object (${path})`);
    }
    return astContent;
}
exports.readJsonFileAsAstObject = readJsonFileAsAstObject;
function isIvyEnabled(tree, tsConfigPath) {
    // In version 9, Ivy is turned on by default
    // Ivy is opted out only when 'enableIvy' is set to false.
    const buffer = tree.read(tsConfigPath);
    if (!buffer) {
        return true;
    }
    const tsCfgAst = core_1.parseJsonAst(buffer.toString(), core_1.JsonParseMode.Loose);
    if (tsCfgAst.kind !== 'object') {
        return true;
    }
    const ngCompilerOptions = json_utils_1.findPropertyInAstObject(tsCfgAst, 'angularCompilerOptions');
    if (ngCompilerOptions && ngCompilerOptions.kind === 'object') {
        const enableIvy = json_utils_1.findPropertyInAstObject(ngCompilerOptions, 'enableIvy');
        if (enableIvy) {
            return !!enableIvy.value;
        }
    }
    const configExtends = json_utils_1.findPropertyInAstObject(tsCfgAst, 'extends');
    if (configExtends && configExtends.kind === 'string') {
        const extendedTsConfigPath = core_1.resolve(core_1.dirname(core_1.normalize(tsConfigPath)), core_1.normalize(configExtends.value));
        return isIvyEnabled(tree, extendedTsConfigPath);
    }
    return true;
}
exports.isIvyEnabled = isIvyEnabled;
// TS represents paths internally with '/' and expects paths to be in this format.
// angular.json expects paths with '/', but doesn't enforce them.
function forwardSlashPath(path) {
    return path.replace(/\\/g, '/');
}
exports.forwardSlashPath = forwardSlashPath;
