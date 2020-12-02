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
function getWorkspacePath(host) {
    const possibleFiles = ['/angular.json', '/.angular.json'];
    const path = possibleFiles.filter(path => host.exists(path))[0];
    return path;
}
exports.getWorkspacePath = getWorkspacePath;
function getWorkspace(host) {
    const path = getWorkspacePath(host);
    const configBuffer = host.read(path);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException(`Could not find (${path})`);
    }
    const content = configBuffer.toString();
    return core_1.parseJson(content, core_1.JsonParseMode.Loose);
}
exports.getWorkspace = getWorkspace;
function addProjectToWorkspace(workspace, name, project) {
    return (host, context) => {
        if (workspace.projects[name]) {
            throw new Error(`Project '${name}' already exists in workspace.`);
        }
        // Add project to workspace.
        workspace.projects[name] = project;
        if (!workspace.defaultProject && Object.keys(workspace.projects).length === 1) {
            // Make the new project the default one.
            workspace.defaultProject = name;
        }
        return updateWorkspace(workspace);
    };
}
exports.addProjectToWorkspace = addProjectToWorkspace;
function updateWorkspace(workspace) {
    return (host, context) => {
        host.overwrite(getWorkspacePath(host), JSON.stringify(workspace, null, 2));
    };
}
exports.updateWorkspace = updateWorkspace;
exports.configPath = '/.angular-cli.json';
function getConfig(host) {
    const configBuffer = host.read(exports.configPath);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException('Could not find .angular-cli.json');
    }
    const config = core_1.parseJson(configBuffer.toString(), core_1.JsonParseMode.Loose);
    return config;
}
exports.getConfig = getConfig;
function getAppFromConfig(config, appIndexOrName) {
    if (!config.apps) {
        return null;
    }
    if (parseInt(appIndexOrName) >= 0) {
        return config.apps[parseInt(appIndexOrName)];
    }
    return config.apps.filter((app) => app.name === appIndexOrName)[0];
}
exports.getAppFromConfig = getAppFromConfig;
