/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Architect, Target } from '@angular-devkit/architect';
import { WorkspaceNodeModulesArchitectHost } from '@angular-devkit/architect/node';
import { json, workspaces } from '@angular-devkit/core';
import { BaseCommandOptions, Command } from './command';
import { Arguments } from './interface';
export interface ArchitectCommandOptions extends BaseCommandOptions {
    project?: string;
    configuration?: string;
    prod?: boolean;
    target?: string;
}
export declare abstract class ArchitectCommand<T extends ArchitectCommandOptions = ArchitectCommandOptions> extends Command<T> {
    protected _architect: Architect;
    protected _architectHost: WorkspaceNodeModulesArchitectHost;
    protected _workspace: workspaces.WorkspaceDefinition;
    protected _registry: json.schema.SchemaRegistry;
    protected multiTarget: boolean;
    target: string | undefined;
    missingTargetError: string | undefined;
    initialize(options: T & Arguments): Promise<void>;
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
    protected runBepTarget<T>(command: string, configuration: Target, overrides: json.JsonObject, buildEventLog: string): Promise<number>;
    protected runSingleTarget(target: Target, targetOptions: string[], commandOptions: ArchitectCommandOptions & Arguments): Promise<number>;
    protected runArchitectTarget(options: ArchitectCommandOptions & Arguments): Promise<number>;
    private getProjectNamesByTarget;
    private _makeTargetSpecifier;
}
