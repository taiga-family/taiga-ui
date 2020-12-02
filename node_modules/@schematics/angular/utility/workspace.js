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
function createHost(tree) {
    return {
        async readFile(path) {
            const data = tree.read(path);
            if (!data) {
                throw new Error('File not found.');
            }
            return core_1.virtualFs.fileBufferToString(data);
        },
        async writeFile(path, data) {
            return tree.overwrite(path, data);
        },
        async isDirectory(path) {
            // approximate a directory check
            return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
        },
        async isFile(path) {
            return tree.exists(path);
        },
    };
}
function updateWorkspace(updaterOrWorkspace) {
    return async (tree) => {
        const host = createHost(tree);
        if (typeof updaterOrWorkspace === 'function') {
            const { workspace } = await core_1.workspaces.readWorkspace('/', host);
            const result = updaterOrWorkspace(workspace);
            if (result !== undefined) {
                await result;
            }
            await core_1.workspaces.writeWorkspace(workspace, host);
        }
        else {
            await core_1.workspaces.writeWorkspace(updaterOrWorkspace, host);
        }
    };
}
exports.updateWorkspace = updateWorkspace;
async function getWorkspace(tree, path = '/') {
    const host = createHost(tree);
    const { workspace } = await core_1.workspaces.readWorkspace(path, host);
    return workspace;
}
exports.getWorkspace = getWorkspace;
/**
 * Build a default project path for generating.
 * @param project The project which will have its default path generated.
 */
function buildDefaultPath(project) {
    const root = project.sourceRoot ? `/${project.sourceRoot}/` : `/${project.root}/src/`;
    const projectDirName = project.extensions['projectType'] === 'application' ? 'app' : 'lib';
    return `${root}${projectDirName}`;
}
exports.buildDefaultPath = buildDefaultPath;
async function createDefaultPath(tree, projectName) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(projectName);
    if (!project) {
        throw new Error('Specified project does not exist.');
    }
    return buildDefaultPath(project);
}
exports.createDefaultPath = createDefaultPath;
