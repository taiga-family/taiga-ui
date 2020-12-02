/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { BaseException } from '../../exception';
import { JsonObject, schema } from '../../json';
import { Path, virtualFs } from '../../virtual-fs';
import { WorkspaceProject, WorkspaceTool } from './workspace-schema';
export declare class WorkspaceFileNotFoundException extends BaseException {
    constructor(path: Path);
}
export declare class ProjectNotFoundException extends BaseException {
    constructor(name: string);
}
export declare class WorkspaceToolNotFoundException extends BaseException {
    constructor(name: string);
}
export declare class ProjectToolNotFoundException extends BaseException {
    constructor(name: string);
}
export declare class WorkspaceNotYetLoadedException extends BaseException {
    constructor();
}
export declare class AmbiguousProjectPathException extends BaseException {
    readonly path: Path;
    readonly projects: ReadonlyArray<string>;
    constructor(path: Path, projects: ReadonlyArray<string>);
}
export declare class Workspace {
    private _root;
    private _host;
    protected static _workspaceFileNames: string[];
    private readonly _workspaceSchemaPath;
    private _workspaceSchema;
    private _workspace;
    private _registry;
    constructor(_root: Path, _host: virtualFs.Host<{}>, registry?: schema.CoreSchemaRegistry);
    static findWorkspaceFile(host: virtualFs.Host<{}>, path: Path): Promise<Path | null>;
    static fromPath(host: virtualFs.Host<{}>, path: Path, registry: schema.CoreSchemaRegistry): Promise<Workspace>;
    loadWorkspaceFromJson(json: {}): Observable<this>;
    loadWorkspaceFromHost(workspacePath: Path): Observable<this>;
    private _loadWorkspaceSchema;
    private _assertLoaded;
    get root(): Path;
    get host(): virtualFs.Host<{}>;
    get version(): number;
    get newProjectRoot(): string | undefined;
    listProjectNames(): string[];
    getProject(projectName: string): WorkspaceProject;
    getDefaultProjectName(): string | null;
    getProjectByPath(path: Path): string | null;
    getCli(): WorkspaceTool;
    getSchematics(): WorkspaceTool;
    getTargets(): WorkspaceTool;
    getProjectCli(projectName: string): WorkspaceTool;
    getProjectSchematics(projectName: string): WorkspaceTool;
    getProjectTargets(projectName: string): WorkspaceTool;
    private _getTool;
    private _getProjectTool;
    validateAgainstSchema<T = {}>(contentJson: {}, schemaJson: JsonObject): Observable<T>;
    private _loadJsonFile;
}
