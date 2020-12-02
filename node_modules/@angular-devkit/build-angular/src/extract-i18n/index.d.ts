/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { BuildResult } from '@angular-devkit/build-webpack';
import { JsonObject } from '@angular-devkit/core';
import { Schema } from './schema';
export declare type ExtractI18nBuilderOptions = Schema & JsonObject;
export declare function execute(options: ExtractI18nBuilderOptions, context: BuilderContext): Promise<BuildResult>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<JsonObject & Schema>;
export default _default;
