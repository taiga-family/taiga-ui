"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const path = require("path");
const utils_1 = require("./utils");
function getTestConfig(wco) {
    const { root, buildOptions, sourceRoot: include } = wco;
    const extraRules = [];
    const extraPlugins = [];
    if (buildOptions.codeCoverage) {
        const codeCoverageExclude = buildOptions.codeCoverageExclude;
        const exclude = [
            /\.(e2e|spec)\.tsx?$/,
            /node_modules/,
        ];
        if (codeCoverageExclude) {
            codeCoverageExclude.forEach((excludeGlob) => {
                const excludeFiles = glob
                    .sync(path.join(root, excludeGlob), { nodir: true })
                    .map(file => path.normalize(file));
                exclude.push(...excludeFiles);
            });
        }
        extraRules.push({
            test: /\.(jsx?|tsx?)$/,
            loader: require.resolve('@jsdevtools/coverage-istanbul-loader'),
            options: { esModules: true },
            enforce: 'post',
            exclude,
            include,
        });
    }
    if (wco.buildOptions.sourceMap) {
        const { styles, scripts } = wco.buildOptions.sourceMap;
        if (styles || scripts) {
            extraPlugins.push(utils_1.getSourceMapDevTool(scripts, styles, false, true));
        }
    }
    return {
        mode: 'development',
        resolve: {
            mainFields: [
                ...(wco.supportES2015 ? ['es2015'] : []),
                'browser', 'module', 'main',
            ],
        },
        devtool: buildOptions.sourceMap ? false : 'eval',
        entry: {
            main: path.resolve(root, buildOptions.main),
        },
        module: {
            rules: extraRules,
        },
        plugins: extraPlugins,
        optimization: {
            splitChunks: {
                chunks: ((chunk) => !utils_1.isPolyfillsEntry(chunk.name)),
                cacheGroups: {
                    vendors: false,
                    vendor: {
                        name: 'vendor',
                        chunks: 'initial',
                        test: (module, chunks) => {
                            const moduleName = module.nameForCondition ? module.nameForCondition() : '';
                            return /[\\/]node_modules[\\/]/.test(moduleName)
                                && !chunks.some(({ name }) => utils_1.isPolyfillsEntry(name));
                        },
                    },
                },
            },
        },
    };
}
exports.getTestConfig = getTestConfig;
