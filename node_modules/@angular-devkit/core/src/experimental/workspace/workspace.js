"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const exception_1 = require("../../exception");
const json_1 = require("../../json");
const virtual_fs_1 = require("../../virtual-fs");
class WorkspaceFileNotFoundException extends exception_1.BaseException {
    constructor(path) {
        super(`Workspace could not be found from path ${path}.`);
    }
}
exports.WorkspaceFileNotFoundException = WorkspaceFileNotFoundException;
class ProjectNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Project '${name}' could not be found in workspace.`);
    }
}
exports.ProjectNotFoundException = ProjectNotFoundException;
class WorkspaceToolNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Tool ${name} could not be found in workspace.`);
    }
}
exports.WorkspaceToolNotFoundException = WorkspaceToolNotFoundException;
class ProjectToolNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Tool ${name} could not be found in project.`);
    }
}
exports.ProjectToolNotFoundException = ProjectToolNotFoundException;
class WorkspaceNotYetLoadedException extends exception_1.BaseException {
    constructor() { super(`Workspace needs to be loaded before it is used.`); }
}
exports.WorkspaceNotYetLoadedException = WorkspaceNotYetLoadedException;
class AmbiguousProjectPathException extends exception_1.BaseException {
    constructor(path, projects) {
        super(`Current active project is ambiguous (${projects.join(',')}) using path: '${path}'`);
        this.path = path;
        this.projects = projects;
    }
}
exports.AmbiguousProjectPathException = AmbiguousProjectPathException;
async function _findUp(host, names, from) {
    if (!Array.isArray(names)) {
        names = [names];
    }
    do {
        for (const name of names) {
            const p = virtual_fs_1.join(from, name);
            if (await host.exists(p).toPromise()) {
                return p;
            }
        }
        from = virtual_fs_1.dirname(from);
    } while (from && from !== virtual_fs_1.dirname(from));
    return null;
}
class Workspace {
    constructor(_root, _host, registry) {
        this._root = _root;
        this._host = _host;
        this._workspaceSchemaPath = virtual_fs_1.normalize(require.resolve('./workspace-schema.json'));
        if (registry) {
            this._registry = registry;
        }
        else {
            this._registry = new json_1.schema.CoreSchemaRegistry();
            this._registry.addPostTransform(json_1.schema.transforms.addUndefinedDefaults);
        }
    }
    static async findWorkspaceFile(host, path) {
        return await _findUp(host, this._workspaceFileNames, path);
    }
    static async fromPath(host, path, registry) {
        const maybePath = await this.findWorkspaceFile(host, path);
        if (!maybePath) {
            throw new WorkspaceFileNotFoundException(path);
        }
        return new Workspace(virtual_fs_1.dirname(maybePath), host, registry)
            .loadWorkspaceFromHost(virtual_fs_1.basename(maybePath))
            .pipe(operators_1.first())
            .toPromise();
    }
    loadWorkspaceFromJson(json) {
        return this._loadWorkspaceSchema().pipe(operators_1.concatMap((workspaceSchema) => this.validateAgainstSchema(json, workspaceSchema)), operators_1.tap((validatedWorkspace) => this._workspace = validatedWorkspace), operators_1.map(() => this));
    }
    loadWorkspaceFromHost(workspacePath) {
        return this._loadWorkspaceSchema().pipe(operators_1.concatMap(() => this._loadJsonFile(virtual_fs_1.join(this._root, workspacePath))), operators_1.concatMap(json => this.loadWorkspaceFromJson(json)));
    }
    _loadWorkspaceSchema() {
        if (this._workspaceSchema) {
            return rxjs_1.of(this._workspaceSchema);
        }
        else {
            return this._loadJsonFile(this._workspaceSchemaPath).pipe(operators_1.tap((workspaceSchema) => this._workspaceSchema = workspaceSchema));
        }
    }
    _assertLoaded() {
        if (!this._workspace) {
            throw new WorkspaceNotYetLoadedException();
        }
    }
    get root() {
        return this._root;
    }
    get host() {
        return this._host;
    }
    get version() {
        this._assertLoaded();
        return this._workspace.version;
    }
    get newProjectRoot() {
        this._assertLoaded();
        return this._workspace.newProjectRoot;
    }
    listProjectNames() {
        return Object.keys(this._workspace.projects);
    }
    getProject(projectName) {
        this._assertLoaded();
        const workspaceProject = this._workspace.projects[projectName];
        if (!workspaceProject) {
            throw new ProjectNotFoundException(projectName);
        }
        // Return only the project properties, and remove the tools.
        const workspaceProjectClone = { ...workspaceProject };
        delete workspaceProjectClone['cli'];
        delete workspaceProjectClone['schematics'];
        delete workspaceProjectClone['architect'];
        delete workspaceProjectClone['targets'];
        return workspaceProjectClone;
    }
    getDefaultProjectName() {
        this._assertLoaded();
        if (this._workspace.defaultProject) {
            // If there is a default project name, return it.
            return this._workspace.defaultProject;
        }
        else if (this.listProjectNames().length === 1) {
            // If there is only one project, return that one.
            return this.listProjectNames()[0];
        }
        // Otherwise return null.
        return null;
    }
    getProjectByPath(path) {
        this._assertLoaded();
        const projectNames = this.listProjectNames();
        if (projectNames.length === 1) {
            return projectNames[0];
        }
        const isInside = (base, potential) => {
            const absoluteBase = virtual_fs_1.resolve(this.root, base);
            const absolutePotential = virtual_fs_1.resolve(this.root, potential);
            const relativePotential = virtual_fs_1.relative(absoluteBase, absolutePotential);
            if (!relativePotential.startsWith('..') && !virtual_fs_1.isAbsolute(relativePotential)) {
                return true;
            }
            return false;
        };
        const projects = this.listProjectNames()
            .map(name => [this.getProject(name).root, name])
            .filter(tuple => isInside(tuple[0], path))
            // Sort tuples by depth, with the deeper ones first. Since the first member is a path and
            // we filtered all invalid paths, the longest will be the deepest (and in case of equality
            // the sort is stable and the first declared project will win).
            .sort((a, b) => b[0].length - a[0].length);
        if (projects.length === 0) {
            return null;
        }
        else if (projects.length > 1) {
            const found = new Set();
            const sameRoots = projects.filter(v => {
                if (!found.has(v[0])) {
                    found.add(v[0]);
                    return false;
                }
                return true;
            });
            if (sameRoots.length > 0) {
                throw new AmbiguousProjectPathException(path, sameRoots.map(v => v[1]));
            }
        }
        return projects[0][1];
    }
    getCli() {
        return this._getTool('cli');
    }
    getSchematics() {
        return this._getTool('schematics');
    }
    getTargets() {
        return this._getTool('targets');
    }
    getProjectCli(projectName) {
        return this._getProjectTool(projectName, 'cli');
    }
    getProjectSchematics(projectName) {
        return this._getProjectTool(projectName, 'schematics');
    }
    getProjectTargets(projectName) {
        return this._getProjectTool(projectName, 'targets');
    }
    _getTool(toolName) {
        this._assertLoaded();
        let workspaceTool = this._workspace[toolName];
        // Try falling back to 'architect' if 'targets' is not there or is empty.
        if ((!workspaceTool || Object.keys(workspaceTool).length === 0)
            && toolName === 'targets'
            && this._workspace['architect']) {
            workspaceTool = this._workspace['architect'];
        }
        if (!workspaceTool) {
            throw new WorkspaceToolNotFoundException(toolName);
        }
        return workspaceTool;
    }
    _getProjectTool(projectName, toolName) {
        this._assertLoaded();
        const workspaceProject = this._workspace.projects[projectName];
        if (!workspaceProject) {
            throw new ProjectNotFoundException(projectName);
        }
        let projectTool = workspaceProject[toolName];
        // Try falling back to 'architect' if 'targets' is not there or is empty.
        if ((!projectTool || Object.keys(projectTool).length === 0)
            && workspaceProject['architect']
            && toolName === 'targets') {
            projectTool = workspaceProject['architect'];
        }
        if (!projectTool) {
            throw new ProjectToolNotFoundException(toolName);
        }
        return projectTool;
    }
    // TODO: add transforms to resolve paths.
    validateAgainstSchema(contentJson, schemaJson) {
        // JSON validation modifies the content, so we validate a copy of it instead.
        const contentJsonCopy = JSON.parse(JSON.stringify(contentJson));
        return this._registry.compile(schemaJson).pipe(operators_1.concatMap(validator => validator(contentJsonCopy)), operators_1.concatMap((validatorResult) => {
            if (validatorResult.success) {
                return rxjs_1.of(contentJsonCopy);
            }
            else {
                return rxjs_1.throwError(new json_1.schema.SchemaValidationException(validatorResult.errors));
            }
        }));
    }
    _loadJsonFile(path) {
        return this._host.read(virtual_fs_1.normalize(path)).pipe(operators_1.map(buffer => virtual_fs_1.virtualFs.fileBufferToString(buffer)), operators_1.map(str => json_1.parseJson(str, json_1.JsonParseMode.Loose)));
    }
}
exports.Workspace = Workspace;
Workspace._workspaceFileNames = [
    'angular.json',
    '.angular.json',
];
