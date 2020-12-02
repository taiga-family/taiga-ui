/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />
import { logging, virtualFs } from '@angular-devkit/core';
import { CompilerOptions } from '@angular/compiler-cli';
import * as fs from 'fs';
import * as ts from 'typescript';
export declare enum PLATFORM {
    Browser = 0,
    Server = 1
}
export interface ContextElementDependency {
}
export interface ContextElementDependencyConstructor {
    new (modulePath: string, name: string): ContextElementDependency;
}
/**
 * Option Constants
 */
export interface AngularCompilerPluginOptions {
    sourceMap?: boolean;
    tsConfigPath: string;
    basePath?: string;
    entryModule?: string;
    mainPath?: string;
    skipCodeGeneration?: boolean;
    hostReplacementPaths?: {
        [path: string]: string;
    } | ((path: string) => string);
    forkTypeChecker?: boolean;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    i18nInFile?: string;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    i18nInFormat?: string;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    i18nOutFile?: string;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    i18nOutFormat?: string;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    locale?: string;
    /** @deprecated since version 9 - When using Ivy this option has no effect as i18n is no longer part of the TypeScript compilation. */
    missingTranslation?: string;
    platform?: PLATFORM;
    nameLazyFiles?: boolean;
    logger?: logging.Logger;
    directTemplateLoading?: boolean;
    emitClassMetadata?: boolean;
    emitNgModuleScope?: boolean;
    /**
     * When using the loadChildren string syntax, @ngtools/webpack must query @angular/compiler-cli
     * via a private API to know which lazy routes exist. This increases build and rebuild time.
     * When using Ivy, the string syntax is not supported at all. Thus we shouldn't attempt that
     * This option is also used for when the compilation doesn't need this sort of processing at all.
     * @deprecated SystemJsNgModuleLoader is deprecated, and this is part of its usage.
     */
    discoverLazyRoutes?: boolean;
    /** added to the list of lazy routes
     * @deprecated SystemJsNgModuleLoader is deprecated, and this is part of its usage.
     */
    additionalLazyModules?: {
        [module: string]: string;
    };
    /**
     * @deprecated SystemJsNgModuleLoader is deprecated, and this is part of its usage.
     */
    additionalLazyModuleResources?: string[];
    contextElementDependencyConstructor?: ContextElementDependencyConstructor;
    compilerOptions?: CompilerOptions;
    host?: virtualFs.Host<fs.Stats>;
    platformTransformers?: ts.TransformerFactory<ts.SourceFile>[];
}
