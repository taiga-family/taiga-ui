/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Command } from '../models/command';
import { Arguments } from '../models/interface';
import { Schema as DocCommandSchema } from './doc';
export declare class DocCommand extends Command<DocCommandSchema> {
    run(options: DocCommandSchema & Arguments): Promise<0 | undefined>;
}
