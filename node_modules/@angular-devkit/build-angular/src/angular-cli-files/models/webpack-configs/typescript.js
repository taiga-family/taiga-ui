"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
const build_optimizer_1 = require("@angular-devkit/build-optimizer");
const path = require("path");
const webpack_1 = require("@ngtools/webpack");
function _pluginOptionsOverrides(buildOptions, pluginOptions) {
    const compilerOptions = {
        ...(pluginOptions.compilerOptions || {})
    };
    const hostReplacementPaths = {};
    if (buildOptions.fileReplacements) {
        for (const replacement of buildOptions.fileReplacements) {
            hostReplacementPaths[replacement.replace] = replacement.with;
        }
    }
    if (buildOptions.preserveSymlinks) {
        compilerOptions.preserveSymlinks = true;
    }
    return {
        ...pluginOptions,
        hostReplacementPaths,
        compilerOptions
    };
}
function _createAotPlugin(wco, options, i18nExtract = false) {
    const { root, buildOptions } = wco;
    const i18nInFile = buildOptions.i18nFile
        ? path.resolve(root, buildOptions.i18nFile)
        : undefined;
    const i18nFileAndFormat = i18nExtract
        ? {
            i18nOutFile: buildOptions.i18nFile,
            i18nOutFormat: buildOptions.i18nFormat,
        } : {
        i18nInFile: i18nInFile,
        i18nInFormat: buildOptions.i18nFormat,
    };
    const compilerOptions = options.compilerOptions || {};
    if (i18nExtract) {
        // Extraction of i18n is still using the legacy VE pipeline
        compilerOptions.enableIvy = false;
    }
    const additionalLazyModules = {};
    if (buildOptions.lazyModules) {
        for (const lazyModule of buildOptions.lazyModules) {
            additionalLazyModules[lazyModule] = path.resolve(root, lazyModule);
        }
    }
    let pluginOptions = {
        mainPath: path.join(root, buildOptions.main),
        ...i18nFileAndFormat,
        locale: buildOptions.i18nLocale,
        platform: buildOptions.platform === 'server' ? webpack_1.PLATFORM.Server : webpack_1.PLATFORM.Browser,
        missingTranslation: buildOptions.i18nMissingTranslation,
        sourceMap: buildOptions.sourceMap.scripts,
        additionalLazyModules,
        nameLazyFiles: buildOptions.namedChunks,
        forkTypeChecker: buildOptions.forkTypeChecker,
        contextElementDependencyConstructor: require('webpack/lib/dependencies/ContextElementDependency'),
        logger: wco.logger,
        directTemplateLoading: true,
        ...options,
        compilerOptions,
    };
    pluginOptions = _pluginOptionsOverrides(buildOptions, pluginOptions);
    return new webpack_1.AngularCompilerPlugin(pluginOptions);
}
function getNonAotConfig(wco) {
    const { tsConfigPath } = wco;
    return {
        module: { rules: [{ test: /\.tsx?$/, loader: webpack_1.NgToolsLoader }] },
        plugins: [_createAotPlugin(wco, { tsConfigPath, skipCodeGeneration: true })]
    };
}
exports.getNonAotConfig = getNonAotConfig;
function getAotConfig(wco, i18nExtract = false) {
    const { tsConfigPath, buildOptions } = wco;
    const loaders = [webpack_1.NgToolsLoader];
    if (buildOptions.buildOptimizer) {
        loaders.unshift({
            loader: build_optimizer_1.buildOptimizerLoaderPath,
            options: { sourceMap: buildOptions.sourceMap.scripts }
        });
    }
    const test = /(?:\.ngfactory\.js|\.ngstyle\.js|\.tsx?)$/;
    const optimize = wco.buildOptions.optimization.scripts;
    return {
        module: { rules: [{ test, use: loaders }] },
        plugins: [
            _createAotPlugin(wco, { tsConfigPath, emitClassMetadata: !optimize, emitNgModuleScope: !optimize }, i18nExtract),
        ],
    };
}
exports.getAotConfig = getAotConfig;
function getTypescriptWorkerPlugin(wco, workerTsConfigPath) {
    const { buildOptions } = wco;
    let pluginOptions = {
        skipCodeGeneration: true,
        tsConfigPath: workerTsConfigPath,
        mainPath: undefined,
        platform: webpack_1.PLATFORM.Browser,
        sourceMap: buildOptions.sourceMap.scripts,
        forkTypeChecker: buildOptions.forkTypeChecker,
        contextElementDependencyConstructor: require('webpack/lib/dependencies/ContextElementDependency'),
        logger: wco.logger,
        // Run no transformers.
        platformTransformers: [],
        // Don't attempt lazy route discovery.
        discoverLazyRoutes: false,
    };
    pluginOptions = _pluginOptionsOverrides(buildOptions, pluginOptions);
    return new webpack_1.AngularCompilerPlugin(pluginOptions);
}
exports.getTypescriptWorkerPlugin = getTypescriptWorkerPlugin;
