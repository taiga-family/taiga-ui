"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utility/config");
const workspace_models_1 = require("../utility/workspace-models");
/**
 * Build a default project path for generating.
 * @param project The project to build the path for.
 */
function buildDefaultPath(project) {
    const root = project.sourceRoot
        ? `/${project.sourceRoot}/`
        : `/${project.root}/src/`;
    const projectDirName = project.projectType === workspace_models_1.ProjectType.Application ? 'app' : 'lib';
    return `${root}${projectDirName}`;
}
exports.buildDefaultPath = buildDefaultPath;
function getProject(workspaceOrHost, projectName) {
    const workspace = isWorkspaceSchema(workspaceOrHost)
        ? workspaceOrHost
        : config_1.getWorkspace(workspaceOrHost);
    return workspace.projects[projectName];
}
exports.getProject = getProject;
// TODO(hans): change this any to unknown when google3 supports TypeScript 3.0.
// tslint:disable-next-line:no-any
function isWorkspaceSchema(workspace) {
    return !!(workspace && workspace.projects);
}
exports.isWorkspaceSchema = isWorkspaceSchema;
// TODO(hans): change this any to unknown when google3 supports TypeScript 3.0.
// tslint:disable-next-line:no-any
function isWorkspaceProject(project) {
    return !!(project && project.projectType);
}
exports.isWorkspaceProject = isWorkspaceProject;
