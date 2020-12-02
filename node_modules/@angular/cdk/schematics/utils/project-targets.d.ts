/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/project-targets" />
import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';
import { BuilderTarget } from '@schematics/angular/utility/workspace-models';
/** Object that maps a CLI target to its default builder name. */
export declare const defaultTargetBuilders: {
    build: string;
    test: string;
};
/** Resolves the architect options for the build target of the given project. */
export declare function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string): any;
/** Gets all targets from the given project that match the specified builder name. */
export declare function getTargetsByBuilderName(project: WorkspaceProject, builderName: string): BuilderTarget<any, unknown>[];
