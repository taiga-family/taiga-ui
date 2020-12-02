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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const utils_1 = require("../utils");
function runWebpackDevServer(config, context, options = {}) {
    const createWebpack = (c) => {
        if (options.webpackFactory) {
            const result = options.webpackFactory(c);
            if (rxjs_1.isObservable(result)) {
                return result;
            }
            else {
                return rxjs_1.of(result);
            }
        }
        else {
            return rxjs_1.of(webpack(c));
        }
    };
    const createWebpackDevServer = (webpack, config) => {
        if (options.webpackDevServerFactory) {
            return new options.webpackDevServerFactory(webpack, config);
        }
        return new WebpackDevServer(webpack, config);
    };
    const log = options.logging
        || ((stats, config) => context.logger.info(stats.toString(config.stats)));
    const devServerConfig = options.devServerConfig || config.devServer || {};
    if (devServerConfig.stats) {
        config.stats = devServerConfig.stats;
    }
    // Disable stats reporting by the devserver, we have our own logger.
    devServerConfig.stats = false;
    return createWebpack(config).pipe(operators_1.switchMap(webpackCompiler => new rxjs_1.Observable(obs => {
        const server = createWebpackDevServer(webpackCompiler, devServerConfig);
        let result;
        webpackCompiler.hooks.done.tap('build-webpack', (stats) => {
            // Log stats.
            log(stats, config);
            obs.next({
                ...result,
                emittedFiles: utils_1.getEmittedFiles(stats.compilation),
                success: !stats.hasErrors(),
            });
        });
        server.listen(devServerConfig.port === undefined ? 8080 : devServerConfig.port, devServerConfig.host === undefined ? 'localhost' : devServerConfig.host, function (err) {
            if (err) {
                obs.error(err);
            }
            else {
                const address = this.address();
                result = {
                    success: true,
                    port: typeof address === 'string' ? 0 : address.port,
                    family: typeof address === 'string' ? '' : address.family,
                    address: typeof address === 'string' ? address : address.address,
                };
            }
        });
        // Teardown logic. Close the server when unsubscribed from.
        return () => server.close();
    })));
}
exports.runWebpackDevServer = runWebpackDevServer;
exports.default = architect_1.createBuilder((options, context) => {
    const configPath = core_1.resolve(core_1.normalize(context.workspaceRoot), core_1.normalize(options.webpackConfig));
    return rxjs_1.from(Promise.resolve().then(() => require(core_1.getSystemPath(configPath)))).pipe(operators_1.switchMap((config) => runWebpackDevServer(config, context)));
});
