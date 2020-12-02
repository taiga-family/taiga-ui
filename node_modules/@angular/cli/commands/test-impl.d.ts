/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as TestCommandSchema } from './test';
export declare class TestCommand extends ArchitectCommand<TestCommandSchema> {
    readonly target = "test";
    readonly multiTarget = true;
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
}
