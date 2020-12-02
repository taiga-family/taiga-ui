/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analytics, logging } from '@angular-devkit/core';
import { Arguments, CommandContext, CommandDescription, CommandDescriptionMap, CommandScope, CommandWorkspace, Option, SubCommandDescription } from './interface';
export interface BaseCommandOptions {
    help?: boolean | string;
}
export declare abstract class Command<T extends BaseCommandOptions = BaseCommandOptions> {
    readonly description: CommandDescription;
    protected readonly logger: logging.Logger;
    allowMissingWorkspace: boolean;
    workspace: CommandWorkspace;
    analytics: analytics.Analytics;
    protected static commandMap: () => Promise<CommandDescriptionMap>;
    static setCommandMap(map: () => Promise<CommandDescriptionMap>): void;
    constructor(context: CommandContext, description: CommandDescription, logger: logging.Logger);
    initialize(options: T & Arguments): Promise<void>;
    printHelp(options: T & Arguments): Promise<number>;
    printJsonHelp(_options: T & Arguments): Promise<number>;
    protected printHelpUsage(): Promise<void>;
    protected printHelpSubcommand(subcommand: SubCommandDescription): Promise<void>;
    protected printHelpOptions(options?: Option[]): Promise<void>;
    validateScope(scope?: CommandScope): Promise<void>;
    reportAnalytics(paths: string[], options: T & Arguments, dimensions?: (boolean | number | string)[], metrics?: (boolean | number | string)[]): Promise<void>;
    abstract run(options: T & Arguments): Promise<number | void>;
    validateAndRun(options: T & Arguments): Promise<number | void>;
}
