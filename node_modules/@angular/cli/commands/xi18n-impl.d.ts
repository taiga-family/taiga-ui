/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ArchitectCommand } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as Xi18nCommandSchema } from './xi18n';
export declare class Xi18nCommand extends ArchitectCommand<Xi18nCommandSchema> {
    readonly target = "extract-i18n";
    readonly multiTarget: true;
    run(options: Xi18nCommandSchema & Arguments): Promise<number>;
}
