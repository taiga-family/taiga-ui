/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { json, workspaces } from '@angular-devkit/core';
import { BuilderInfo } from '../src';
import { Target } from '../src/input-schema';
import { ArchitectHost, Builder } from '../src/internal';
export declare type NodeModulesBuilderInfo = BuilderInfo & {
    import: string;
};
export declare class WorkspaceNodeModulesArchitectHost implements ArchitectHost<NodeModulesBuilderInfo> {
    protected _workspace: workspaces.WorkspaceDefinition;
    protected _root: string;
    constructor(_workspace: workspaces.WorkspaceDefinition, _root: string);
    getBuilderNameForTarget(target: Target): Promise<string>;
    /**
     * Resolve a builder. This needs to be a string which will be used in a dynamic `import()`
     * clause. This should throw if no builder can be found. The dynamic import will throw if
     * it is unsupported.
     * @param builderStr The name of the builder to be used.
     * @returns All the info needed for the builder itself.
     */
    resolveBuilder(builderStr: string): Promise<NodeModulesBuilderInfo>;
    getCurrentDirectory(): Promise<string>;
    getWorkspaceRoot(): Promise<string>;
    getOptionsForTarget(target: Target): Promise<json.JsonObject | null>;
    getProjectMetadata(target: Target | string): Promise<json.JsonObject | null>;
    loadBuilder(info: NodeModulesBuilderInfo): Promise<Builder>;
    private findProjectTarget;
}
