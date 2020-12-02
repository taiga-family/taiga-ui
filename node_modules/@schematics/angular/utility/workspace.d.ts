/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { workspaces } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';
export declare function updateWorkspace(updater: (workspace: workspaces.WorkspaceDefinition) => void | PromiseLike<void>): Rule;
export declare function updateWorkspace(workspace: workspaces.WorkspaceDefinition): Rule;
export declare function getWorkspace(tree: Tree, path?: string): Promise<workspaces.WorkspaceDefinition>;
/**
 * Build a default project path for generating.
 * @param project The project which will have its default path generated.
 */
export declare function buildDefaultPath(project: workspaces.ProjectDefinition): string;
export declare function createDefaultPath(tree: Tree, projectName: string): Promise<string>;
