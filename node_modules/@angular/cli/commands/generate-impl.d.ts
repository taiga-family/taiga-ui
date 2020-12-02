/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Arguments } from '../models/interface';
import { SchematicCommand } from '../models/schematic-command';
import { Schema as GenerateCommandSchema } from './generate';
export declare class GenerateCommand extends SchematicCommand<GenerateCommandSchema> {
    longSchematicName: string | undefined;
    initialize(options: GenerateCommandSchema & Arguments): Promise<void>;
    run(options: GenerateCommandSchema & Arguments): Promise<number | void>;
    reportAnalytics(paths: string[], options: GenerateCommandSchema & Arguments): Promise<void>;
    private parseSchematicInfo;
    printHelp(options: GenerateCommandSchema & Arguments): Promise<number>;
}
