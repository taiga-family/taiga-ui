/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analytics, logging } from '@angular-devkit/core';
import { CommandWorkspace } from './interface';
export interface CommandMapOptions {
    [key: string]: string;
}
/**
 * Run a command.
 * @param args Raw unparsed arguments.
 * @param logger The logger to use.
 * @param workspace Workspace information.
 * @param commands The map of supported commands.
 * @param options Additional options.
 */
export declare function runCommand(args: string[], logger: logging.Logger, workspace: CommandWorkspace, commands?: CommandMapOptions, options?: {
    analytics?: analytics.Analytics;
}): Promise<number | void>;
