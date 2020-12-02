"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const architect_1 = require("@angular-devkit/architect");
const build_webpack_1 = require("@angular-devkit/build-webpack");
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const fs = require("fs");
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const typescript_1 = require("typescript");
const analytics_1 = require("../../plugins/webpack/analytics");
const webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
const async_chunks_1 = require("../angular-cli-files/utilities/async-chunks");
const bundle_calculator_1 = require("../angular-cli-files/utilities/bundle-calculator");
const write_index_html_1 = require("../angular-cli-files/utilities/index-file/write-index-html");
const read_tsconfig_1 = require("../angular-cli-files/utilities/read-tsconfig");
const service_worker_1 = require("../angular-cli-files/utilities/service-worker");
const stats_1 = require("../angular-cli-files/utilities/stats");
const utils_1 = require("../utils");
const action_executor_1 = require("../utils/action-executor");
const cache_path_1 = require("../utils/cache-path");
const copy_assets_1 = require("../utils/copy-assets");
const environment_options_1 = require("../utils/environment-options");
const i18n_inlining_1 = require("../utils/i18n-inlining");
const output_paths_1 = require("../utils/output-paths");
const version_1 = require("../utils/version");
const webpack_browser_config_1 = require("../utils/webpack-browser-config");
const cacheDownlevelPath = environment_options_1.cachingDisabled ? undefined : cache_path_1.findCachePath('angular-build-dl');
function createBrowserLoggingCallback(verbose, logger) {
    return (stats, config) => {
        // config.stats contains our own stats settings, added during buildWebpackConfig().
        const json = stats.toJson(config.stats);
        if (verbose) {
            logger.info(stats.toString(config.stats));
        }
        else {
            logger.info(stats_1.statsToString(json, config.stats));
        }
        if (stats.hasWarnings()) {
            logger.warn(stats_1.statsWarningsToString(json, config.stats));
        }
        if (stats.hasErrors()) {
            logger.error(stats_1.statsErrorsToString(json, config.stats));
        }
    };
}
exports.createBrowserLoggingCallback = createBrowserLoggingCallback;
async function buildBrowserWebpackConfigFromContext(options, context, host = new node_1.NodeJsSyncHost(), i18n = false) {
    const webpackPartialGenerator = (wco) => [
        webpack_configs_1.getCommonConfig(wco),
        webpack_configs_1.getBrowserConfig(wco),
        webpack_configs_1.getStylesConfig(wco),
        webpack_configs_1.getStatsConfig(wco),
        getAnalyticsConfig(wco, context),
        getCompilerConfig(wco),
        wco.buildOptions.webWorkerTsConfig ? webpack_configs_1.getWorkerConfig(wco) : {},
    ];
    if (i18n) {
        return webpack_browser_config_1.generateI18nBrowserWebpackConfigFromContext(options, context, webpackPartialGenerator, host);
    }
    return webpack_browser_config_1.generateBrowserWebpackConfigFromContext(options, context, webpackPartialGenerator, host);
}
exports.buildBrowserWebpackConfigFromContext = buildBrowserWebpackConfigFromContext;
function getAnalyticsConfig(wco, context) {
    if (context.analytics) {
        // If there's analytics, add our plugin. Otherwise no need to slow down the build.
        let category = 'build';
        if (context.builder) {
            // We already vetted that this is a "safe" package, otherwise the analytics would be noop.
            category =
                context.builder.builderName.split(':')[1] || context.builder.builderName || 'build';
        }
        // The category is the builder name if it's an angular builder.
        return {
            plugins: [new analytics_1.NgBuildAnalyticsPlugin(wco.projectRoot, context.analytics, category, !!wco.tsConfig.options.enableIvy)],
        };
    }
    return {};
}
function getCompilerConfig(wco) {
    if (wco.buildOptions.main || wco.buildOptions.polyfills) {
        return wco.buildOptions.aot ? webpack_configs_1.getAotConfig(wco) : webpack_configs_1.getNonAotConfig(wco);
    }
    return {};
}
async function initialize(options, context, host, webpackConfigurationTransform) {
    const originalOutputPath = options.outputPath;
    const { config, projectRoot, projectSourceRoot, i18n, } = await buildBrowserWebpackConfigFromContext(options, context, host, true);
    let transformedConfig;
    if (webpackConfigurationTransform) {
        transformedConfig = await webpackConfigurationTransform(config);
    }
    if (options.deleteOutputPath) {
        utils_1.deleteOutputDir(context.workspaceRoot, originalOutputPath);
    }
    return { config: transformedConfig || config, projectRoot, projectSourceRoot, i18n };
}
// tslint:disable-next-line: no-big-function
function buildWebpackBrowser(options, context, transforms = {}) {
    const host = new node_1.NodeJsSyncHost();
    const root = core_1.normalize(context.workspaceRoot);
    const baseOutputPath = path.resolve(context.workspaceRoot, options.outputPath);
    let outputPaths;
    // Check Angular version.
    version_1.assertCompatibleAngularVersion(context.workspaceRoot, context.logger);
    return rxjs_1.from(initialize(options, context, host, transforms.webpackConfiguration)).pipe(
    // tslint:disable-next-line: no-big-function
    operators_1.switchMap(({ config, projectRoot, projectSourceRoot, i18n }) => {
        const tsConfig = read_tsconfig_1.readTsconfig(options.tsConfig, context.workspaceRoot);
        const target = tsConfig.options.target || typescript_1.ScriptTarget.ES5;
        const buildBrowserFeatures = new utils_1.BuildBrowserFeatures(projectRoot, target);
        const isDifferentialLoadingNeeded = buildBrowserFeatures.isDifferentialLoadingNeeded();
        if (target > typescript_1.ScriptTarget.ES2015 && isDifferentialLoadingNeeded) {
            context.logger.warn(core_1.tags.stripIndent `
          WARNING: Using differential loading with targets ES5 and ES2016 or higher may
          cause problems. Browsers with support for ES2015 will load the ES2016+ scripts
          referenced with script[type="module"] but they may not support ES2016+ syntax.
        `);
        }
        const useBundleDownleveling = isDifferentialLoadingNeeded && !options.watch;
        const startTime = Date.now();
        return build_webpack_1.runWebpack(config, context, {
            webpackFactory: require('webpack'),
            logging: transforms.logging ||
                (useBundleDownleveling
                    ? () => { }
                    : createBrowserLoggingCallback(!!options.verbose, context.logger)),
        }).pipe(
        // tslint:disable-next-line: no-big-function
        operators_1.concatMap(async (buildEvent) => {
            var _a, _b;
            const { webpackStats: webpackRawStats, success, emittedFiles = [] } = buildEvent;
            if (!webpackRawStats) {
                throw new Error('Webpack stats build result is required.');
            }
            // Fix incorrectly set `initial` value on chunks.
            const extraEntryPoints = webpack_configs_1.normalizeExtraEntryPoints(options.styles || [], 'styles')
                .concat(webpack_configs_1.normalizeExtraEntryPoints(options.scripts || [], 'scripts'));
            const webpackStats = {
                ...webpackRawStats,
                chunks: async_chunks_1.markAsyncChunksNonInitial(webpackRawStats, extraEntryPoints),
            };
            if (!success && useBundleDownleveling) {
                // If using bundle downleveling then there is only one build
                // If it fails show any diagnostic messages and bail
                if (webpackStats && webpackStats.warnings.length > 0) {
                    context.logger.warn(stats_1.statsWarningsToString(webpackStats, { colors: true }));
                }
                if (webpackStats && webpackStats.errors.length > 0) {
                    context.logger.error(stats_1.statsErrorsToString(webpackStats, { colors: true }));
                }
                return { success };
            }
            else if (success) {
                outputPaths = output_paths_1.ensureOutputPaths(baseOutputPath, i18n);
                let noModuleFiles;
                let moduleFiles;
                let files;
                const scriptsEntryPointName = webpack_configs_1.normalizeExtraEntryPoints(options.scripts || [], 'scripts').map(x => x.bundleName);
                if (isDifferentialLoadingNeeded && options.watch) {
                    moduleFiles = emittedFiles;
                    files = moduleFiles.filter(x => x.extension === '.css' || (x.name && scriptsEntryPointName.includes(x.name)));
                    if (i18n.shouldInline) {
                        const success = await i18n_inlining_1.i18nInlineEmittedFiles(context, emittedFiles, i18n, baseOutputPath, Array.from(outputPaths.values()), scriptsEntryPointName, 
                        // tslint:disable-next-line: no-non-null-assertion
                        webpackStats.outputPath, target <= typescript_1.ScriptTarget.ES5, options.i18nMissingTranslation);
                        if (!success) {
                            return { success: false };
                        }
                    }
                }
                else if (isDifferentialLoadingNeeded) {
                    moduleFiles = [];
                    noModuleFiles = [];
                    // Common options for all bundle process actions
                    const sourceMapOptions = utils_1.normalizeSourceMaps(options.sourceMap || false);
                    const actionOptions = {
                        optimize: utils_1.normalizeOptimization(options.optimization).scripts,
                        sourceMaps: sourceMapOptions.scripts,
                        hiddenSourceMaps: sourceMapOptions.hidden,
                        vendorSourceMaps: sourceMapOptions.vendor,
                        integrityAlgorithm: options.subresourceIntegrity ? 'sha384' : undefined,
                    };
                    let mainChunkId;
                    const actions = [];
                    let workerReplacements;
                    const seen = new Set();
                    for (const file of emittedFiles) {
                        // Assets are not processed nor injected into the index
                        if (file.asset) {
                            // WorkerPlugin adds worker files to assets
                            if (file.file.endsWith('.worker.js')) {
                                if (!workerReplacements) {
                                    workerReplacements = [];
                                }
                                workerReplacements.push([
                                    file.file,
                                    file.file.replace(/\-(es20\d{2}|esnext)/, '-es5'),
                                ]);
                            }
                            else {
                                continue;
                            }
                        }
                        // Scripts and non-javascript files are not processed
                        if (file.extension !== '.js' ||
                            (file.name && scriptsEntryPointName.includes(file.name))) {
                            if (files === undefined) {
                                files = [];
                            }
                            files.push(file);
                            continue;
                        }
                        // Ignore already processed files; emittedFiles can contain duplicates
                        if (seen.has(file.file)) {
                            continue;
                        }
                        seen.add(file.file);
                        if (file.name === 'vendor' || (!mainChunkId && file.name === 'main')) {
                            // tslint:disable-next-line: no-non-null-assertion
                            mainChunkId = file.id.toString();
                        }
                        // All files at this point except ES5 polyfills are module scripts
                        const es5Polyfills = file.file.startsWith('polyfills-es5');
                        if (!es5Polyfills) {
                            moduleFiles.push(file);
                        }
                        // Retrieve the content/map for the file
                        // NOTE: Additional future optimizations will read directly from memory
                        // tslint:disable-next-line: no-non-null-assertion
                        let filename = path.join(webpackStats.outputPath, file.file);
                        const code = fs.readFileSync(filename, 'utf8');
                        let map;
                        if (actionOptions.sourceMaps) {
                            try {
                                map = fs.readFileSync(filename + '.map', 'utf8');
                                if (es5Polyfills) {
                                    fs.unlinkSync(filename + '.map');
                                }
                            }
                            catch (_c) { }
                        }
                        if (es5Polyfills) {
                            fs.unlinkSync(filename);
                            filename = filename.replace(/\-es20\d{2}/, '');
                        }
                        const es2015Polyfills = file.file.startsWith('polyfills-es20');
                        // Record the bundle processing action
                        // The runtime chunk gets special processing for lazy loaded files
                        actions.push({
                            ...actionOptions,
                            filename,
                            code,
                            map,
                            // id is always present for non-assets
                            // tslint:disable-next-line: no-non-null-assertion
                            name: file.id,
                            runtime: file.file.startsWith('runtime'),
                            ignoreOriginal: es5Polyfills,
                            optimizeOnly: es2015Polyfills,
                        });
                        // ES2015 polyfills are only optimized; optimization check was performed above
                        if (es2015Polyfills) {
                            continue;
                        }
                        // Add the newly created ES5 bundles to the index as nomodule scripts
                        const newFilename = es5Polyfills
                            ? file.file.replace(/\-es20\d{2}/, '')
                            : file.file.replace(/\-(es20\d{2}|esnext)/, '-es5');
                        noModuleFiles.push({ ...file, file: newFilename });
                    }
                    const processActions = [];
                    let processRuntimeAction;
                    const processResults = [];
                    for (const action of actions) {
                        // If SRI is enabled always process the runtime bundle
                        // Lazy route integrity values are stored in the runtime bundle
                        if (action.integrityAlgorithm && action.runtime) {
                            processRuntimeAction = action;
                        }
                        else {
                            processActions.push({ replacements: workerReplacements, ...action });
                        }
                    }
                    const executor = new action_executor_1.BundleActionExecutor({ cachePath: cacheDownlevelPath, i18n }, options.subresourceIntegrity ? 'sha384' : undefined);
                    // Execute the bundle processing actions
                    try {
                        context.logger.info('Generating ES5 bundles for differential loading...');
                        for await (const result of executor.processAll(processActions)) {
                            processResults.push(result);
                        }
                        // Runtime must be processed after all other files
                        if (processRuntimeAction) {
                            const runtimeOptions = {
                                ...processRuntimeAction,
                                runtimeData: processResults,
                                supportedBrowsers: buildBrowserFeatures.supportedBrowsers,
                            };
                            processResults.push(await Promise.resolve().then(() => require('../utils/process-bundle')).then(m => m.process(runtimeOptions)));
                        }
                        context.logger.info('ES5 bundle generation complete.');
                        if (i18n.shouldInline) {
                            context.logger.info('Generating localized bundles...');
                            const inlineActions = [];
                            const processedFiles = new Set();
                            for (const result of processResults) {
                                if (result.original) {
                                    inlineActions.push({
                                        filename: path.basename(result.original.filename),
                                        code: fs.readFileSync(result.original.filename, 'utf8'),
                                        map: result.original.map &&
                                            fs.readFileSync(result.original.map.filename, 'utf8'),
                                        outputPath: baseOutputPath,
                                        es5: false,
                                        missingTranslation: options.i18nMissingTranslation,
                                        setLocale: result.name === mainChunkId,
                                    });
                                    processedFiles.add(result.original.filename);
                                    if (result.original.map) {
                                        processedFiles.add(result.original.map.filename);
                                    }
                                }
                                if (result.downlevel) {
                                    inlineActions.push({
                                        filename: path.basename(result.downlevel.filename),
                                        code: fs.readFileSync(result.downlevel.filename, 'utf8'),
                                        map: result.downlevel.map &&
                                            fs.readFileSync(result.downlevel.map.filename, 'utf8'),
                                        outputPath: baseOutputPath,
                                        es5: true,
                                        missingTranslation: options.i18nMissingTranslation,
                                        setLocale: result.name === mainChunkId,
                                    });
                                    processedFiles.add(result.downlevel.filename);
                                    if (result.downlevel.map) {
                                        processedFiles.add(result.downlevel.map.filename);
                                    }
                                }
                            }
                            let hasErrors = false;
                            try {
                                for await (const result of executor.inlineAll(inlineActions)) {
                                    if (options.verbose) {
                                        context.logger.info(`Localized "${result.file}" [${result.count} translation(s)].`);
                                    }
                                    for (const diagnostic of result.diagnostics) {
                                        if (diagnostic.type === 'error') {
                                            hasErrors = true;
                                            context.logger.error(diagnostic.message);
                                        }
                                        else {
                                            context.logger.warn(diagnostic.message);
                                        }
                                    }
                                }
                                // Copy any non-processed files into the output locations
                                await copy_assets_1.copyAssets([
                                    {
                                        glob: '**/*',
                                        // tslint:disable-next-line: no-non-null-assertion
                                        input: webpackStats.outputPath,
                                        output: '',
                                        ignore: [...processedFiles].map(f => 
                                        // tslint:disable-next-line: no-non-null-assertion
                                        path.relative(webpackStats.outputPath, f)),
                                    },
                                ], Array.from(outputPaths.values()), '');
                            }
                            catch (err) {
                                context.logger.error('Localized bundle generation failed: ' + err.message);
                                return { success: false };
                            }
                            context.logger.info(`Localized bundle generation ${hasErrors ? 'failed' : 'complete'}.`);
                            if (hasErrors) {
                                return { success: false };
                            }
                        }
                    }
                    finally {
                        await executor.stop();
                    }
                    // Copy assets
                    if (options.assets) {
                        try {
                            await copy_assets_1.copyAssets(utils_1.normalizeAssetPatterns(options.assets, new core_1.virtualFs.SyncDelegateHost(host), root, core_1.normalize(projectRoot), projectSourceRoot === undefined ? undefined : core_1.normalize(projectSourceRoot)), Array.from(outputPaths.values()), context.workspaceRoot);
                        }
                        catch (err) {
                            context.logger.error('Unable to copy assets: ' + err.message);
                            return { success: false };
                        }
                    }
                    function generateBundleInfoStats(id, bundle, chunk) {
                        return stats_1.generateBundleStats({
                            id,
                            size: bundle.size,
                            files: bundle.map ? [bundle.filename, bundle.map.filename] : [bundle.filename],
                            names: chunk && chunk.names,
                            entry: !!chunk && chunk.names.includes('runtime'),
                            initial: !!chunk && chunk.initial,
                            rendered: true,
                        }, true);
                    }
                    let bundleInfoText = '';
                    for (const result of processResults) {
                        const chunk = webpackStats.chunks
                            && webpackStats.chunks.find((chunk) => chunk.id.toString() === result.name);
                        if (result.original) {
                            bundleInfoText +=
                                '\n' + generateBundleInfoStats(result.name, result.original, chunk);
                        }
                        if (result.downlevel) {
                            bundleInfoText +=
                                '\n' + generateBundleInfoStats(result.name, result.downlevel, chunk);
                        }
                    }
                    const unprocessedChunks = webpackStats.chunks && webpackStats.chunks
                        .filter((chunk) => !processResults
                        .find((result) => chunk.id.toString() === result.name)) || [];
                    for (const chunk of unprocessedChunks) {
                        const asset = webpackStats.assets && webpackStats.assets.find(a => a.name === chunk.files[0]);
                        bundleInfoText +=
                            '\n' + stats_1.generateBundleStats({ ...chunk, size: asset && asset.size }, true);
                    }
                    bundleInfoText +=
                        '\n' +
                            stats_1.generateBuildStats((webpackStats && webpackStats.hash) || '<unknown>', Date.now() - startTime, true);
                    context.logger.info(bundleInfoText);
                    // Check for budget errors and display them to the user.
                    const budgets = options.budgets || [];
                    const budgetFailures = bundle_calculator_1.checkBudgets(budgets, webpackStats, processResults);
                    for (const { severity, message } of budgetFailures) {
                        const msg = `budgets: ${message}`;
                        switch (severity) {
                            case bundle_calculator_1.ThresholdSeverity.Warning:
                                webpackStats.warnings.push(msg);
                                break;
                            case bundle_calculator_1.ThresholdSeverity.Error:
                                webpackStats.errors.push(msg);
                                break;
                            default:
                                assertNever(severity);
                                break;
                        }
                    }
                    if (webpackStats && webpackStats.warnings.length > 0) {
                        context.logger.warn(stats_1.statsWarningsToString(webpackStats, { colors: true }));
                    }
                    if (webpackStats && webpackStats.errors.length > 0) {
                        context.logger.error(stats_1.statsErrorsToString(webpackStats, { colors: true }));
                        return { success: false };
                    }
                }
                else {
                    files = emittedFiles.filter(x => x.name !== 'polyfills-es5');
                    noModuleFiles = emittedFiles.filter(x => x.name === 'polyfills-es5');
                    if (i18n.shouldInline) {
                        const success = await i18n_inlining_1.i18nInlineEmittedFiles(context, emittedFiles, i18n, baseOutputPath, Array.from(outputPaths.values()), scriptsEntryPointName, 
                        // tslint:disable-next-line: no-non-null-assertion
                        webpackStats.outputPath, target <= typescript_1.ScriptTarget.ES5, options.i18nMissingTranslation);
                        if (!success) {
                            return { success: false };
                        }
                    }
                }
                if (options.index) {
                    for (const [locale, outputPath] of outputPaths.entries()) {
                        let localeBaseHref;
                        if (i18n.locales[locale] && i18n.locales[locale].baseHref !== '') {
                            localeBaseHref = utils_1.urlJoin(options.baseHref || '', (_a = i18n.locales[locale].baseHref) !== null && _a !== void 0 ? _a : `/${locale}/`);
                        }
                        try {
                            await generateIndex(outputPath, options, root, files, noModuleFiles, moduleFiles, transforms.indexHtml, 
                            // i18nLocale is used when Ivy is disabled
                            locale || options.i18nLocale, localeBaseHref || options.baseHref);
                        }
                        catch (err) {
                            return { success: false, error: mapErrorToMessage(err) };
                        }
                    }
                }
                if (!options.watch && options.serviceWorker) {
                    for (const [locale, outputPath] of outputPaths.entries()) {
                        let localeBaseHref;
                        if (i18n.locales[locale] && i18n.locales[locale].baseHref !== '') {
                            localeBaseHref = utils_1.urlJoin(options.baseHref || '', (_b = i18n.locales[locale].baseHref) !== null && _b !== void 0 ? _b : `/${locale}/`);
                        }
                        try {
                            await service_worker_1.augmentAppWithServiceWorker(host, root, core_1.normalize(projectRoot), core_1.normalize(outputPath), localeBaseHref || options.baseHref || '/', options.ngswConfigPath);
                        }
                        catch (err) {
                            return { success: false, error: mapErrorToMessage(err) };
                        }
                    }
                }
            }
            return { success };
        }), operators_1.map(event => ({
            ...event,
            baseOutputPath,
            outputPath: baseOutputPath,
            outputPaths: outputPaths && Array.from(outputPaths.values()) || [baseOutputPath],
        })));
    }));
}
exports.buildWebpackBrowser = buildWebpackBrowser;
function generateIndex(baseOutputPath, options, root, files, noModuleFiles, moduleFiles, transformer, locale, baseHref) {
    const host = new node_1.NodeJsSyncHost();
    return write_index_html_1.writeIndexHtml({
        host,
        outputPath: core_1.join(core_1.normalize(baseOutputPath), webpack_browser_config_1.getIndexOutputFile(options)),
        indexPath: core_1.join(core_1.normalize(root), webpack_browser_config_1.getIndexInputFile(options)),
        files,
        noModuleFiles,
        moduleFiles,
        baseHref,
        deployUrl: options.deployUrl,
        sri: options.subresourceIntegrity,
        scripts: options.scripts,
        styles: options.styles,
        postTransform: transformer,
        crossOrigin: options.crossOrigin,
        lang: locale,
    }).toPromise();
}
function mapErrorToMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return undefined;
}
function assertNever(input) {
    throw new Error(`Unexpected call to assertNever() with input: ${JSON.stringify(input, null /* replacer */, 4 /* tabSize */)}`);
}
exports.default = architect_1.createBuilder(buildWebpackBrowser);
