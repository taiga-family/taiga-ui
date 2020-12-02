/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Command } from '../models/command';
import { Arguments } from '../models/interface';
import { Schema as ConfigCommandSchema } from './config';
export declare class ConfigCommand extends Command<ConfigCommandSchema> {
    run(options: ConfigCommandSchema & Arguments): Promise<1 | 0>;
    private get;
    private set;
}
