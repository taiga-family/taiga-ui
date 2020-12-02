/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { EmittedFiles } from '@angular-devkit/build-webpack';
import { I18nOptions } from './i18n-options';
export declare function i18nInlineEmittedFiles(context: BuilderContext, emittedFiles: EmittedFiles[], i18n: I18nOptions, baseOutputPath: string, outputPaths: string[], scriptsEntryPointName: string[], emittedPath: string, es5: boolean, missingTranslation: 'error' | 'warning' | 'ignore' | undefined): Promise<boolean>;
