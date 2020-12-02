/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { Observable } from 'rxjs';
import * as webpack from 'webpack';
import { ExecutionTransformer } from '../transforms';
import { Schema as KarmaBuilderOptions } from './schema';
export declare type KarmaConfigOptions = import('karma').ConfigOptions & {
    buildWebpack?: unknown;
    configFile?: string;
};
export declare function execute(options: KarmaBuilderOptions, context: BuilderContext, transforms?: {
    webpackConfiguration?: ExecutionTransformer<webpack.Configuration>;
    karmaOptions?: (options: KarmaConfigOptions) => KarmaConfigOptions;
}): Observable<BuilderOutput>;
export { KarmaBuilderOptions };
declare const _default: import("@angular-devkit/architect/src/internal").Builder<Record<string, string> & KarmaBuilderOptions>;
export default _default;
