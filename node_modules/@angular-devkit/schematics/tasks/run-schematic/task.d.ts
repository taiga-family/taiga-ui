/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { RunSchematicTaskOptions } from './options';
export declare class RunSchematicTask<T> implements TaskConfigurationGenerator<RunSchematicTaskOptions<T>> {
    protected _collection: string | null;
    protected _schematic: string;
    protected _options: T;
    constructor(s: string, o: T);
    constructor(c: string, s: string, o: T);
    toConfiguration(): TaskConfiguration<RunSchematicTaskOptions<T>>;
}
