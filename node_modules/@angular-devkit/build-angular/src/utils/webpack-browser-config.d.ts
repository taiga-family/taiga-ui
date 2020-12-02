/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { logging, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import * as webpack from 'webpack';
import { WebpackConfigOptions } from '../angular-cli-files/models/build-options';
import { Schema as BrowserBuilderSchema } from '../browser/schema';
import { NormalizedBrowserBuilderSchema } from '../utils';
import { I18nOptions } from './i18n-options';
export declare type BrowserWebpackConfigOptions = WebpackConfigOptions<NormalizedBrowserBuilderSchema>;
export declare function generateWebpackConfig(context: BuilderContext, workspaceRoot: string, projectRoot: string, sourceRoot: string | undefined, options: NormalizedBrowserBuilderSchema, webpackPartialGenerator: (wco: BrowserWebpackConfigOptions) => webpack.Configuration[], logger: logging.LoggerApi): Promise<webpack.Configuration>;
export declare function generateI18nBrowserWebpackConfigFromContext(options: BrowserBuilderSchema, context: BuilderContext, webpackPartialGenerator: (wco: BrowserWebpackConfigOptions) => webpack.Configuration[], host?: virtualFs.Host<fs.Stats>): Promise<{
    config: webpack.Configuration;
    projectRoot: string;
    projectSourceRoot?: string;
    i18n: I18nOptions;
}>;
export declare function generateBrowserWebpackConfigFromContext(options: BrowserBuilderSchema, context: BuilderContext, webpackPartialGenerator: (wco: BrowserWebpackConfigOptions) => webpack.Configuration[], host?: virtualFs.Host<fs.Stats>): Promise<{
    config: webpack.Configuration;
    projectRoot: string;
    projectSourceRoot?: string;
}>;
export declare function getIndexOutputFile(options: BrowserBuilderSchema): string;
export declare function getIndexInputFile(options: BrowserBuilderSchema): string;
