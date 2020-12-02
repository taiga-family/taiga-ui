/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ArchitectCommand } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as E2eCommandSchema } from './e2e';
export declare class E2eCommand extends ArchitectCommand<E2eCommandSchema> {
    readonly target = "e2e";
    readonly multiTarget = true;
    run(options: E2eCommandSchema & Arguments): Promise<number>;
}
