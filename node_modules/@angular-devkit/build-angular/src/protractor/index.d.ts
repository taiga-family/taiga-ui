/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { Schema as ProtractorBuilderOptions } from './schema';
export { ProtractorBuilderOptions };
export declare function execute(options: ProtractorBuilderOptions, context: BuilderContext): Promise<BuilderOutput>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<JsonObject & ProtractorBuilderOptions>;
export default _default;
