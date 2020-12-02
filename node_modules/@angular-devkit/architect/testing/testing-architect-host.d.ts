/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { json } from '@angular-devkit/core';
import { BuilderInfo, Target } from '../src';
import { ArchitectHost, Builder } from '../src/internal';
export declare class TestingArchitectHost implements ArchitectHost {
    workspaceRoot: string;
    currentDirectory: string;
    private _backendHost;
    private _builderImportMap;
    private _builderMap;
    private _targetMap;
    /**
     * Can provide a backend host, in case of integration tests.
     * @param workspaceRoot The workspace root to use.
     * @param currentDirectory The current directory to use.
     * @param _backendHost A host to defer calls that aren't resolved here.
     */
    constructor(workspaceRoot?: string, currentDirectory?: string, _backendHost?: ArchitectHost | null);
    addBuilder(builderName: string, builder: Builder, description?: string, optionSchema?: json.schema.JsonSchema): void;
    addBuilderFromPackage(packageName: string): Promise<void>;
    addTarget(target: Target, builderName: string, options?: json.JsonObject): void;
    getBuilderNameForTarget(target: Target): Promise<string | null>;
    /**
     * Resolve a builder. This needs to return a string which will be used in a dynamic `import()`
     * clause. This should throw if no builder can be found. The dynamic import will throw if
     * it is unsupported.
     * @param builderName The name of the builder to be used.
     * @returns All the info needed for the builder itself.
     */
    resolveBuilder(builderName: string): Promise<BuilderInfo | null>;
    getCurrentDirectory(): Promise<string>;
    getWorkspaceRoot(): Promise<string>;
    getOptionsForTarget(target: Target): Promise<json.JsonObject | null>;
    getProjectMetadata(target: Target | string): Promise<json.JsonObject | null>;
    loadBuilder(info: BuilderInfo): Promise<Builder | null>;
}
