/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Arguments } from '../models/interface';
import { SchematicCommand } from '../models/schematic-command';
import { Schema as NewCommandSchema } from './new';
export declare class NewCommand extends SchematicCommand<NewCommandSchema> {
    readonly allowMissingWorkspace = true;
    schematicName: string;
    initialize(options: NewCommandSchema & Arguments): Promise<void>;
    run(options: NewCommandSchema & Arguments): Promise<number | void>;
}
