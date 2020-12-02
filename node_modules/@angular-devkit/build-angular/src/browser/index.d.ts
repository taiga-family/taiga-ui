/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { WebpackLoggingCallback } from '@angular-devkit/build-webpack';
import { json, logging, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import * as webpack from 'webpack';
import { IndexHtmlTransform } from '../angular-cli-files/utilities/index-file/write-index-html';
import { ExecutionTransformer } from '../transforms';
import { I18nOptions } from '../utils/i18n-options';
import { Schema as BrowserBuilderSchema } from './schema';
export declare type BrowserBuilderOutput = json.JsonObject & BuilderOutput & {
    baseOutputPath: string;
    outputPaths: string[];
    /**
     * @deprecated in version 9. Use 'outputPaths' instead.
     */
    outputPath: string;
};
export declare function createBrowserLoggingCallback(verbose: boolean, logger: logging.LoggerApi): WebpackLoggingCallback;
interface ConfigFromContextReturn {
    config: webpack.Configuration;
    projectRoot: string;
    projectSourceRoot?: string;
}
export declare function buildBrowserWebpackConfigFromContext(options: BrowserBuilderSchema, context: BuilderContext, host: virtualFs.Host<fs.Stats>, i18n: boolean): Promise<ConfigFromContextReturn & {
    i18n: I18nOptions;
}>;
export declare function buildBrowserWebpackConfigFromContext(options: BrowserBuilderSchema, context: BuilderContext, host?: virtualFs.Host<fs.Stats>): Promise<ConfigFromContextReturn>;
export declare function buildWebpackBrowser(options: BrowserBuilderSchema, context: BuilderContext, transforms?: {
    webpackConfiguration?: ExecutionTransformer<webpack.Configuration>;
    logging?: WebpackLoggingCallback;
    indexHtml?: IndexHtmlTransform;
}): Observable<BrowserBuilderOutput>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<json.JsonObject & BrowserBuilderSchema>;
export default _default;
