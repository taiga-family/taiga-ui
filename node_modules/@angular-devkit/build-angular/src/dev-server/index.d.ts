/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { DevServerBuildOutput, WebpackLoggingCallback } from '@angular-devkit/build-webpack';
import { json, logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { IndexHtmlTransform } from '../angular-cli-files/utilities/index-file/write-index-html';
import { Schema as BrowserBuilderSchema } from '../browser/schema';
import { ExecutionTransformer } from '../transforms';
import { Schema } from './schema';
export declare type DevServerBuilderOptions = Schema & json.JsonObject;
export declare type DevServerBuilderOutput = DevServerBuildOutput & {
    baseUrl: string;
};
/**
 * Reusable implementation of the build angular webpack dev server builder.
 * @param options Dev Server options.
 * @param context The build context.
 * @param transforms A map of transforms that can be used to hook into some logic (such as
 *     transforming webpack configuration before passing it to webpack).
 */
export declare function serveWebpackBrowser(options: DevServerBuilderOptions, context: BuilderContext, transforms?: {
    webpackConfiguration?: ExecutionTransformer<webpack.Configuration>;
    logging?: WebpackLoggingCallback;
    indexHtml?: IndexHtmlTransform;
}): Observable<DevServerBuilderOutput>;
/**
 * Create a webpack configuration for the dev server.
 * @param workspaceRoot The root of the workspace. This comes from the context.
 * @param serverOptions DevServer options, based on the dev server input schema.
 * @param browserOptions Browser builder options. See the browser builder from this package.
 * @param logger A generic logger to use for showing warnings.
 * @returns A webpack dev-server configuration.
 */
export declare function buildServerConfig(workspaceRoot: string, serverOptions: DevServerBuilderOptions, browserOptions: BrowserBuilderSchema, logger: logging.LoggerApi): WebpackDevServer.Configuration;
/**
 * Resolve and build a URL _path_ that will be the root of the server. This resolved base href and
 * deploy URL from the browser options and returns a path from the root.
 * @param serverOptions The server options that were passed to the server builder.
 * @param browserOptions The browser options that were passed to the browser builder.
 * @param logger A generic logger to use for showing warnings.
 */
export declare function buildServePath(serverOptions: DevServerBuilderOptions, browserOptions: BrowserBuilderSchema, logger: logging.LoggerApi): string;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<DevServerBuilderOptions>;
export default _default;
