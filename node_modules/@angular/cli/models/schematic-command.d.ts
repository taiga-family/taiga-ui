/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import { workflow } from '@angular-devkit/schematics';
import { FileSystemCollection, FileSystemEngine, FileSystemSchematic, NodeWorkflow } from '@angular-devkit/schematics/tools';
import { BaseCommandOptions, Command } from './command';
import { Arguments, CommandContext, CommandDescription, Option } from './interface';
export interface BaseSchematicSchema {
    debug?: boolean;
    dryRun?: boolean;
    force?: boolean;
    interactive?: boolean;
    defaults?: boolean;
    packageRegistry?: string;
}
export interface RunSchematicOptions extends BaseSchematicSchema {
    collectionName: string;
    schematicName: string;
    additionalOptions?: {
        [key: string]: {};
    };
    schematicOptions?: string[];
    showNothingDone?: boolean;
}
export declare class UnknownCollectionError extends Error {
    constructor(collectionName: string);
}
export declare abstract class SchematicCommand<T extends BaseSchematicSchema & BaseCommandOptions> extends Command<T> {
    readonly allowPrivateSchematics: boolean;
    private _host;
    private _workspace;
    protected _workflow: NodeWorkflow;
    protected defaultCollectionName: string;
    protected collectionName: string;
    protected schematicName?: string;
    constructor(context: CommandContext, description: CommandDescription, logger: logging.Logger);
    initialize(options: T & Arguments): Promise<void>;
    printHelp(options: T & Arguments): Promise<number>;
    printHelpUsage(): Promise<void>;
    protected getEngine(): FileSystemEngine;
    protected getCollection(collectionName: string): FileSystemCollection;
    protected getSchematic(collection: FileSystemCollection, schematicName: string, allowPrivate?: boolean): FileSystemSchematic;
    protected setPathOptions(options: Option[], workingDir: string): {
        [name: string]: string;
    };
    protected createWorkflow(options: BaseSchematicSchema): Promise<workflow.BaseWorkflow>;
    protected getDefaultSchematicCollection(): Promise<string>;
    protected runSchematic(options: RunSchematicOptions): Promise<number | void>;
    protected parseFreeFormArguments(schematicOptions: string[]): Promise<Arguments>;
    protected parseArguments(schematicOptions: string[], options: Option[] | null): Promise<Arguments>;
    private _loadWorkspace;
}
