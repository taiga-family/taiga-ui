"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const path = require("path");
const webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
const read_tsconfig_1 = require("../angular-cli-files/utilities/read-tsconfig");
const utils_1 = require("../utils");
const build_browser_features_1 = require("./build-browser-features");
const i18n_options_1 = require("./i18n-options");
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpackMerge = require('webpack-merge');
async function generateWebpackConfig(context, workspaceRoot, projectRoot, sourceRoot, options, webpackPartialGenerator, logger) {
    // Ensure Build Optimizer is only used with AOT.
    if (options.buildOptimizer && !options.aot) {
        throw new Error(`The 'buildOptimizer' option cannot be used without 'aot'.`);
    }
    // Ensure Rollup Concatenation is only used with compatible options.
    if (options.experimentalRollupPass) {
        if (!options.aot) {
            throw new Error(`The 'experimentalRollupPass' option cannot be used without 'aot'.`);
        }
        if (options.vendorChunk || options.commonChunk || options.namedChunks) {
            throw new Error(`The 'experimentalRollupPass' option cannot be used with the`
                + `'vendorChunk', 'commonChunk', 'namedChunks' options set to true.`);
        }
    }
    const tsConfigPath = path.resolve(workspaceRoot, options.tsConfig);
    const tsConfig = read_tsconfig_1.readTsconfig(tsConfigPath);
    // tslint:disable-next-line:no-implicit-dependencies
    const ts = await Promise.resolve().then(() => require('typescript'));
    // At the moment, only the browser builder supports differential loading
    // However this config generation is used by multiple builders such as dev-server
    const scriptTarget = tsConfig.options.target || ts.ScriptTarget.ES5;
    const buildBrowserFeatures = new build_browser_features_1.BuildBrowserFeatures(projectRoot, scriptTarget);
    const differentialLoading = context.builder.builderName === 'browser' &&
        !options.watch &&
        buildBrowserFeatures.isDifferentialLoadingNeeded();
    let buildOptions = { ...options };
    if (differentialLoading) {
        buildOptions = {
            ...options,
            // Under downlevel differential loading we copy the assets outside of webpack.
            assets: [],
            esVersionInFileName: true,
            es5BrowserSupport: undefined,
        };
    }
    const supportES2015 = scriptTarget !== ts.ScriptTarget.JSON && scriptTarget > ts.ScriptTarget.ES5;
    const wco = {
        root: workspaceRoot,
        logger: logger.createChild('webpackConfigOptions'),
        projectRoot,
        sourceRoot,
        buildOptions,
        tsConfig,
        tsConfigPath,
        supportES2015,
        differentialLoadingMode: differentialLoading,
    };
    wco.buildOptions.progress = utils_1.defaultProgress(wco.buildOptions.progress);
    const partials = webpackPartialGenerator(wco);
    const webpackConfig = webpackMerge(partials);
    if (supportES2015) {
        if (!webpackConfig.resolve) {
            webpackConfig.resolve = {};
        }
        if (!webpackConfig.resolve.alias) {
            webpackConfig.resolve.alias = {};
        }
        webpackConfig.resolve.alias['zone.js/dist/zone'] = 'zone.js/dist/zone-evergreen';
    }
    if (options.profile || process.env['NG_BUILD_PROFILING']) {
        const esVersionInFileName = webpack_configs_1.getEsVersionForFileName(tsConfig.options.target, wco.buildOptions.esVersionInFileName);
        const smp = new SpeedMeasurePlugin({
            outputFormat: 'json',
            outputTarget: path.resolve(workspaceRoot, `speed-measure-plugin${esVersionInFileName}.json`),
        });
        return smp.wrap(webpackConfig);
    }
    return webpackConfig;
}
exports.generateWebpackConfig = generateWebpackConfig;
async function generateI18nBrowserWebpackConfigFromContext(options, context, webpackPartialGenerator, host = new node_1.NodeJsSyncHost()) {
    const { buildOptions, i18n } = await i18n_options_1.configureI18nBuild(context, options);
    const result = await generateBrowserWebpackConfigFromContext(buildOptions, context, webpackPartialGenerator, host);
    const config = result.config;
    if (i18n.shouldInline) {
        // Remove localize "polyfill" if in AOT mode
        if (buildOptions.aot) {
            if (!config.resolve) {
                config.resolve = {};
            }
            if (!config.resolve.alias) {
                config.resolve.alias = {};
            }
            config.resolve.alias['@angular/localize/init'] = require.resolve('./empty.js');
        }
        // Update file hashes to include translation file content
        const i18nHash = Object.values(i18n.locales).reduce((data, locale) => data + (locale.integrity || ''), '');
        if (!config.plugins) {
            config.plugins = [];
        }
        config.plugins.push({
            apply(compiler) {
                compiler.hooks.compilation.tap('build-angular', compilation => {
                    // Webpack typings do not contain template hashForChunk hook
                    // tslint:disable-next-line: no-any
                    compilation.mainTemplate.hooks.hashForChunk.tap('build-angular', (hash) => {
                        hash.update('$localize' + i18nHash);
                    });
                    // Webpack typings do not contain hooks property
                    // tslint:disable-next-line: no-any
                    compilation.chunkTemplate.hooks.hashForChunk.tap('build-angular', (hash) => {
                        hash.update('$localize' + i18nHash);
                    });
                });
            },
        });
    }
    return { ...result, i18n };
}
exports.generateI18nBrowserWebpackConfigFromContext = generateI18nBrowserWebpackConfigFromContext;
async function generateBrowserWebpackConfigFromContext(options, context, webpackPartialGenerator, host = new node_1.NodeJsSyncHost()) {
    const projectName = context.target && context.target.project;
    if (!projectName) {
        throw new Error('The builder requires a target.');
    }
    const workspaceRoot = core_1.normalize(context.workspaceRoot);
    const projectMetadata = await context.getProjectMetadata(projectName);
    const projectRoot = core_1.resolve(workspaceRoot, core_1.normalize(projectMetadata.root || ''));
    const projectSourceRoot = projectMetadata.sourceRoot;
    const sourceRoot = projectSourceRoot
        ? core_1.resolve(workspaceRoot, core_1.normalize(projectSourceRoot))
        : undefined;
    const normalizedOptions = utils_1.normalizeBrowserSchema(host, workspaceRoot, projectRoot, sourceRoot, options);
    const config = await generateWebpackConfig(context, core_1.getSystemPath(workspaceRoot), core_1.getSystemPath(projectRoot), sourceRoot && core_1.getSystemPath(sourceRoot), normalizedOptions, webpackPartialGenerator, context.logger);
    return {
        config,
        projectRoot: core_1.getSystemPath(projectRoot),
        projectSourceRoot: sourceRoot && core_1.getSystemPath(sourceRoot),
    };
}
exports.generateBrowserWebpackConfigFromContext = generateBrowserWebpackConfigFromContext;
function getIndexOutputFile(options) {
    if (typeof options.index === 'string') {
        return path.basename(options.index);
    }
    else {
        return options.index.output || 'index.html';
    }
}
exports.getIndexOutputFile = getIndexOutputFile;
function getIndexInputFile(options) {
    if (typeof options.index === 'string') {
        return options.index;
    }
    else {
        return options.index.input;
    }
}
exports.getIndexInputFile = getIndexInputFile;
