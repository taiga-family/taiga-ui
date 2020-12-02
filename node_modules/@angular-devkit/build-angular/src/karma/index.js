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
const core_1 = require("@angular-devkit/core");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
const single_test_transform_1 = require("../angular-cli-files/plugins/single-test-transform");
const find_tests_1 = require("../angular-cli-files/utilities/find-tests");
const version_1 = require("../utils/version");
const webpack_browser_config_1 = require("../utils/webpack-browser-config");
async function initialize(options, context, webpackConfigurationTransformer) {
    const { config } = await webpack_browser_config_1.generateBrowserWebpackConfigFromContext(
    // only two properties are missing:
    // * `outputPath` which is fixed for tests
    // * `budgets` which might be incorrect due to extra dev libs
    { ...options, outputPath: '', budgets: undefined }, context, wco => [
        webpack_configs_1.getCommonConfig(wco),
        webpack_configs_1.getStylesConfig(wco),
        webpack_configs_1.getNonAotConfig(wco),
        webpack_configs_1.getTestConfig(wco),
        webpack_configs_1.getWorkerConfig(wco),
    ]);
    // tslint:disable-next-line:no-implicit-dependencies
    const karma = await Promise.resolve().then(() => require('karma'));
    return [
        karma,
        webpackConfigurationTransformer ? await webpackConfigurationTransformer(config) : config,
    ];
}
function execute(options, context, transforms = {}) {
    // Check Angular version.
    version_1.assertCompatibleAngularVersion(context.workspaceRoot, context.logger);
    return rxjs_1.from(initialize(options, context, transforms.webpackConfiguration)).pipe(operators_1.switchMap(([karma, webpackConfig]) => new rxjs_1.Observable(subscriber => {
        const karmaOptions = {};
        if (options.watch !== undefined) {
            karmaOptions.singleRun = !options.watch;
        }
        // Convert browsers from a string to an array
        if (options.browsers) {
            karmaOptions.browsers = options.browsers.split(',');
        }
        if (options.reporters) {
            // Split along commas to make it more natural, and remove empty strings.
            const reporters = options.reporters
                .reduce((acc, curr) => acc.concat(curr.split(',')), [])
                .filter(x => !!x);
            if (reporters.length > 0) {
                karmaOptions.reporters = reporters;
            }
        }
        // prepend special webpack loader that will transform test.ts
        if (webpackConfig &&
            webpackConfig.module &&
            options.include &&
            options.include.length > 0) {
            const mainFilePath = core_1.getSystemPath(core_1.join(core_1.normalize(context.workspaceRoot), options.main));
            const files = find_tests_1.findTests(options.include, path_1.dirname(mainFilePath), context.workspaceRoot);
            // early exit, no reason to start karma
            if (!files.length) {
                subscriber.error(`Specified patterns: "${options.include.join(', ')}" did not match any spec files`);
                return;
            }
            webpackConfig.module.rules.unshift({
                test: path => path === mainFilePath,
                use: {
                    // cannot be a simple path as it differs between environments
                    loader: single_test_transform_1.SingleTestTransformLoader,
                    options: {
                        files,
                        logger: context.logger,
                    },
                },
            });
        }
        // Assign additional karmaConfig options to the local ngapp config
        karmaOptions.configFile = path_1.resolve(context.workspaceRoot, options.karmaConfig);
        karmaOptions.buildWebpack = {
            options,
            webpackConfig,
            // Pass onto Karma to emit BuildEvents.
            successCb: () => subscriber.next({ success: true }),
            failureCb: () => subscriber.next({ success: false }),
            // Workaround for https://github.com/karma-runner/karma/issues/3154
            // When this workaround is removed, user projects need to be updated to use a Karma
            // version that has a fix for this issue.
            toJSON: () => { },
            logger: context.logger,
        };
        // Complete the observable once the Karma server returns.
        const karmaServer = new karma.Server(transforms.karmaOptions ? transforms.karmaOptions(karmaOptions) : karmaOptions, () => subscriber.complete());
        // karma typings incorrectly define start's return value as void
        // tslint:disable-next-line:no-use-of-empty-return-value
        const karmaStart = karmaServer.start();
        // Cleanup, signal Karma to exit.
        return () => {
            // Karma only has the `stop` method start with 3.1.1, so we must defensively check.
            const karmaServerWithStop = karmaServer;
            if (typeof karmaServerWithStop.stop === 'function') {
                return karmaStart.then(() => karmaServerWithStop.stop());
            }
        };
    })), operators_1.defaultIfEmpty({ success: false }));
}
exports.execute = execute;
exports.default = architect_1.createBuilder(execute);
