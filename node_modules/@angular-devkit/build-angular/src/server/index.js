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
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const typescript_1 = require("typescript");
const webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
const read_tsconfig_1 = require("../angular-cli-files/utilities/read-tsconfig");
const utils_1 = require("../utils");
const i18n_inlining_1 = require("../utils/i18n-inlining");
const output_paths_1 = require("../utils/output-paths");
const version_1 = require("../utils/version");
const webpack_browser_config_1 = require("../utils/webpack-browser-config");
function execute(options, context, transforms = {}) {
    const root = context.workspaceRoot;
    // Check Angular version.
    version_1.assertCompatibleAngularVersion(root, context.logger);
    const tsConfig = read_tsconfig_1.readTsconfig(options.tsConfig, root);
    const target = tsConfig.options.target || typescript_1.ScriptTarget.ES5;
    const baseOutputPath = path.resolve(root, options.outputPath);
    let outputPaths;
    if (typeof options.bundleDependencies === 'string') {
        options.bundleDependencies = options.bundleDependencies === 'all';
        context.logger.warn(`Option 'bundleDependencies' string value is deprecated since version 9. Use a boolean value instead.`);
    }
    if (!options.bundleDependencies && tsConfig.options.enableIvy) {
        // tslint:disable-next-line: no-implicit-dependencies
        const { __processed_by_ivy_ngcc__, main = '' } = require('@angular/core/package.json');
        if (!__processed_by_ivy_ngcc__ ||
            !__processed_by_ivy_ngcc__.main ||
            main.includes('__ivy_ngcc__')) {
            context.logger.warn(core_1.tags.stripIndent `
      WARNING: Turning off 'bundleDependencies' with Ivy may result in undefined behaviour
      unless 'node_modules' are transformed using the standalone Angular compatibility compiler (NGCC).
      See: http://v9.angular.io/guide/ivy#ivy-and-universal-app-shell
    `);
        }
    }
    return rxjs_1.from(initialize(options, context, transforms.webpackConfiguration)).pipe(operators_1.concatMap(({ config, i18n }) => {
        return build_webpack_1.runWebpack(config, context, {
            webpackFactory: require('webpack'),
        }).pipe(operators_1.concatMap(async (output) => {
            const { emittedFiles = [], webpackStats } = output;
            if (!output.success || !i18n.shouldInline) {
                return output;
            }
            if (!webpackStats) {
                throw new Error('Webpack stats build result is required.');
            }
            outputPaths = output_paths_1.ensureOutputPaths(baseOutputPath, i18n);
            const success = await i18n_inlining_1.i18nInlineEmittedFiles(context, emittedFiles, i18n, baseOutputPath, Array.from(outputPaths.values()), [], 
            // tslint:disable-next-line: no-non-null-assertion
            webpackStats.outputPath, target <= typescript_1.ScriptTarget.ES5, options.i18nMissingTranslation);
            return { output, success };
        }));
    }), operators_1.map(output => {
        if (!output.success) {
            return output;
        }
        return {
            ...output,
            baseOutputPath,
            outputPath: baseOutputPath,
            outputPaths: outputPaths || [baseOutputPath],
        };
    }));
}
exports.execute = execute;
exports.default = architect_1.createBuilder(execute);
async function initialize(options, context, webpackConfigurationTransform) {
    const originalOutputPath = options.outputPath;
    const { config, i18n } = await webpack_browser_config_1.generateI18nBrowserWebpackConfigFromContext({
        ...options,
        buildOptimizer: false,
        aot: true,
        platform: 'server',
    }, context, wco => [
        webpack_configs_1.getCommonConfig(wco),
        webpack_configs_1.getServerConfig(wco),
        webpack_configs_1.getStylesConfig(wco),
        webpack_configs_1.getStatsConfig(wco),
        webpack_configs_1.getAotConfig(wco),
    ]);
    let transformedConfig;
    if (webpackConfigurationTransform) {
        transformedConfig = await webpackConfigurationTransform(config);
    }
    if (options.deleteOutputPath) {
        utils_1.deleteOutputDir(context.workspaceRoot, originalOutputPath);
    }
    return { config: transformedConfig || config, i18n };
}
