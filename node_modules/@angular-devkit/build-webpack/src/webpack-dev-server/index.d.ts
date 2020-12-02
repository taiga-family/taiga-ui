/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { BuildResult, WebpackFactory, WebpackLoggingCallback } from '../webpack';
import { Schema as WebpackDevServerBuilderSchema } from './schema';
export declare type WebpackDevServerFactory = typeof WebpackDevServer;
export declare type DevServerBuildOutput = BuildResult & {
    port: number;
    family: string;
    address: string;
};
export declare function runWebpackDevServer(config: webpack.Configuration, context: BuilderContext, options?: {
    devServerConfig?: WebpackDevServer.Configuration;
    logging?: WebpackLoggingCallback;
    webpackFactory?: WebpackFactory;
    webpackDevServerFactory?: WebpackDevServerFactory;
}): Observable<DevServerBuildOutput>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<json.JsonObject & WebpackDevServerBuilderSchema>;
export default _default;
