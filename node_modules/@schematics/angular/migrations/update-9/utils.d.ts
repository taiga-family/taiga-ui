/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonAstObject } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';
import { Builders, WorkspaceTargets } from '../../utility/workspace-models';
/** Get a project target which builder and target names matches the provided. */
export declare function getProjectTarget(project: JsonAstObject, targetName: Exclude<keyof WorkspaceTargets, number>, builderName: Builders): JsonAstObject | undefined;
export declare function getTargets(workspace: JsonAstObject, targetName: Exclude<keyof WorkspaceTargets, number>, builderName: Builders): {
    target: JsonAstObject;
    project: JsonAstObject;
}[];
/** Helper to retreive all the options in various configurations. */
export declare function getAllOptions(builderConfig: JsonAstObject, configurationsOnly?: boolean): JsonAstObject[];
export declare function getWorkspace(host: Tree): JsonAstObject;
export declare function readJsonFileAsAstObject(host: Tree, path: string): JsonAstObject | undefined;
export declare function isIvyEnabled(tree: Tree, tsConfigPath: string): boolean;
export declare function forwardSlashPath(path: string): string;
