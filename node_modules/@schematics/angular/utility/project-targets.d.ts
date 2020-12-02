/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema, WorkspaceTargets } from './workspace-models';
export declare function getProjectTargets(project: WorkspaceProject): WorkspaceTargets;
export declare function getProjectTargets(workspaceOrHost: WorkspaceSchema | Tree, projectName: string): WorkspaceTargets;
export declare function targetBuildNotFoundError(): SchematicsException;
