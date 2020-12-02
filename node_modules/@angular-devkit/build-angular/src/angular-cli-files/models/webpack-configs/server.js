"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path_1 = require("path");
const webpack_1 = require("webpack");
const utils_1 = require("./utils");
/**
 * Returns a partial specific to creating a bundle for node
 * @param wco Options which are include the build options and app config
 */
function getServerConfig(wco) {
    const { sourceMap, bundleDependencies, externalDependencies = [], } = wco.buildOptions;
    const extraPlugins = [];
    if (sourceMap) {
        const { scripts, styles, hidden } = sourceMap;
        if (scripts || styles) {
            extraPlugins.push(utils_1.getSourceMapDevTool(scripts, styles, hidden));
        }
    }
    const config = {
        resolve: {
            mainFields: [...(wco.supportES2015 ? ['es2015'] : []), 'main', 'module'],
        },
        target: 'node',
        output: {
            libraryTarget: 'commonjs',
        },
        plugins: [
            // Fixes Critical dependency: the request of a dependency is an expression
            new webpack_1.ContextReplacementPlugin(/@?hapi(\\|\/)/),
            new webpack_1.ContextReplacementPlugin(/express(\\|\/)/),
            ...extraPlugins,
        ],
        node: false,
    };
    if (bundleDependencies) {
        config.externals = [...externalDependencies];
    }
    else {
        config.externals = [
            ...externalDependencies,
            (context, request, callback) => {
                // Absolute & Relative paths are not externals
                if (request.startsWith('./') || path_1.isAbsolute(request)) {
                    callback();
                    return;
                }
                try {
                    require.resolve(request);
                    callback(null, request);
                }
                catch (_a) {
                    // Node couldn't find it, so it must be user-aliased
                    callback();
                }
            },
        ];
    }
    return config;
}
exports.getServerConfig = getServerConfig;
