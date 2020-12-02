/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as RunCommandSchema } from './run';
export declare class RunCommand extends ArchitectCommand<RunCommandSchema> {
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
}
