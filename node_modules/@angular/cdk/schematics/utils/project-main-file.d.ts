/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/project-main-file" />
import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';
/** Looks for the main TypeScript file in the given project and returns its path. */
export declare function getProjectMainFile(project: WorkspaceProject): string;
