/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/project-style-file" />
import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';
/**
 * Gets a style file with the given extension in a project and returns its path. If no
 * extension is specified, any style file with a valid extension will be returned.
 */
export declare function getProjectStyleFile(project: WorkspaceProject, extension?: string): string | null;
