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
const project_1 = require("./project");
function getProjectTargets(projectOrHost, projectName = '') {
    const project = project_1.isWorkspaceProject(projectOrHost)
        ? projectOrHost
        : project_1.getProject(projectOrHost, projectName);
    const projectTargets = project.targets || project.architect;
    if (!projectTargets) {
        throw new Error('Project target not found.');
    }
    return projectTargets;
}
exports.getProjectTargets = getProjectTargets;
function targetBuildNotFoundError() {
    return new schematics_1.SchematicsException(`Project target "build" not found.`);
}
exports.targetBuildNotFoundError = targetBuildNotFoundError;
