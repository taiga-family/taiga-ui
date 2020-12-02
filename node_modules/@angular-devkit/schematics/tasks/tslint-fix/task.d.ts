/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonObject } from '@angular-devkit/core';
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { TslintFixTaskOptions, TslintFixTaskOptionsBase } from './options';
export declare class TslintFixTask implements TaskConfigurationGenerator<TslintFixTaskOptions> {
    protected _configOrPath: null | string | JsonObject;
    protected _options: TslintFixTaskOptionsBase;
    constructor(config: JsonObject, options: TslintFixTaskOptionsBase);
    constructor(options: TslintFixTaskOptionsBase);
    constructor(path: string, options: TslintFixTaskOptionsBase);
    toConfiguration(): TaskConfiguration<TslintFixTaskOptions>;
}
