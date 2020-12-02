/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/get-project" />
import { WorkspaceSchema, WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';
/**
 * Finds the specified project configuration in the workspace. Throws an error if the project
 * couldn't be found.
 */
export declare function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject;
