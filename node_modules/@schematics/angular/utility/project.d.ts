/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Tree } from '@angular-devkit/schematics';
import { ProjectType, WorkspaceProject, WorkspaceSchema } from '../utility/workspace-models';
/**
 * Build a default project path for generating.
 * @param project The project to build the path for.
 */
export declare function buildDefaultPath(project: WorkspaceProject): string;
export declare function getProject<TProjectType extends ProjectType = ProjectType.Application>(workspaceOrHost: WorkspaceSchema | Tree, projectName: string): WorkspaceProject<TProjectType>;
export declare function isWorkspaceSchema(workspace: any): workspace is WorkspaceSchema;
export declare function isWorkspaceProject(project: any): project is WorkspaceProject;
