/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/project-tsconfig-paths" />
import { Tree } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
/** Gets the tsconfig path from the given target within the specified project. */
export declare function getTargetTsconfigPath(project: WorkspaceProject, targetName: string): string | null;
/**
 * Resolve the workspace configuration of the specified tree gracefully. We cannot use the utility
 * functions from the default Angular schematics because those might not be present in older
 * versions of the CLI. Also it's important to resolve the workspace gracefully because
 * the CLI project could be still using `.angular-cli.json` instead of thew new config.
 */
export declare function getWorkspaceConfigGracefully(tree: Tree): null | WorkspaceSchema;
