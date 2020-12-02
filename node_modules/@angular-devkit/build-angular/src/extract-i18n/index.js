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
const path = require("path");
const webpack = require("webpack");
const webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
const stats_1 = require("../angular-cli-files/utilities/stats");
const i18n_options_1 = require("../utils/i18n-options");
const version_1 = require("../utils/version");
const webpack_browser_config_1 = require("../utils/webpack-browser-config");
const schema_1 = require("./schema");
function getI18nOutfile(format) {
    switch (format) {
        case 'xmb':
            return 'messages.xmb';
        case 'xlf':
        case 'xlif':
        case 'xliff':
        case 'xlf2':
        case 'xliff2':
            return 'messages.xlf';
        default:
            throw new Error(`Unsupported format "${format}"`);
    }
}
class InMemoryOutputPlugin {
    apply(compiler) {
        // tslint:disable-next-line:no-any
        compiler.outputFileSystem = new webpack.MemoryOutputFileSystem();
    }
}
async function execute(options, context) {
    // Check Angular version.
    version_1.assertCompatibleAngularVersion(context.workspaceRoot, context.logger);
    const browserTarget = architect_1.targetFromTargetString(options.browserTarget);
    const browserOptions = await context.validateOptions(await context.getTargetOptions(browserTarget), await context.getBuilderNameForTarget(browserTarget));
    if (options.i18nFormat !== schema_1.Format.Xlf) {
        options.format = options.i18nFormat;
    }
    switch (options.format) {
        case schema_1.Format.Xlf:
        case schema_1.Format.Xlif:
        case schema_1.Format.Xliff:
            options.format = schema_1.Format.Xlf;
            break;
        case schema_1.Format.Xlf2:
        case schema_1.Format.Xliff2:
            options.format = schema_1.Format.Xlf2;
            break;
    }
    // We need to determine the outFile name so that AngularCompiler can retrieve it.
    let outFile = options.outFile || getI18nOutfile(options.format);
    if (options.outputPath) {
        // AngularCompilerPlugin doesn't support genDir so we have to adjust outFile instead.
        outFile = path.join(options.outputPath, outFile);
    }
    const projectName = context.target && context.target.project;
    if (!projectName) {
        throw new Error('The builder requires a target.');
    }
    // target is verified in the above call
    // tslint:disable-next-line: no-non-null-assertion
    const metadata = await context.getProjectMetadata(context.target);
    const i18n = i18n_options_1.createI18nOptions(metadata);
    const { config } = await webpack_browser_config_1.generateBrowserWebpackConfigFromContext({
        ...browserOptions,
        optimization: {
            scripts: false,
            styles: false,
        },
        buildOptimizer: false,
        i18nLocale: options.i18nLocale || i18n.sourceLocale,
        i18nFormat: options.format,
        i18nFile: outFile,
        aot: true,
        progress: options.progress,
        assets: [],
        scripts: [],
        styles: [],
        deleteOutputPath: false,
    }, context, wco => [
        { plugins: [new InMemoryOutputPlugin()] },
        webpack_configs_1.getCommonConfig(wco),
        webpack_configs_1.getAotConfig(wco, true),
        webpack_configs_1.getStylesConfig(wco),
        webpack_configs_1.getStatsConfig(wco),
    ]);
    const logging = (stats, config) => {
        const json = stats.toJson({ errors: true, warnings: true });
        if (stats.hasWarnings()) {
            context.logger.warn(stats_1.statsWarningsToString(json, config.stats));
        }
        if (stats.hasErrors()) {
            context.logger.error(stats_1.statsErrorsToString(json, config.stats));
        }
    };
    return build_webpack_1.runWebpack(config, context, {
        logging,
        webpackFactory: await Promise.resolve().then(() => require('webpack')),
    }).toPromise();
}
exports.execute = execute;
exports.default = architect_1.createBuilder(execute);
