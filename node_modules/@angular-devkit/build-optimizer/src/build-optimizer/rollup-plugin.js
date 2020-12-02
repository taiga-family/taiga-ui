"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview This adapts the buildOptimizer to run over each file as it is
 * processed by Rollup. We must do this since buildOptimizer expects to see the
 * ESModules in the input sources, and therefore cannot run on the rollup output
 */
const path = require("path");
const build_optimizer_1 = require("./build-optimizer");
const DEBUG = false;
function optimizer(options) {
    // Normalize paths for comparison.
    if (options.sideEffectFreeModules) {
        options.sideEffectFreeModules = options.sideEffectFreeModules.map(p => p.replace(/\\/g, '/'));
    }
    return {
        name: 'build-optimizer',
        transform: (content, id) => {
            const normalizedId = id.replace(/\\/g, '/');
            const isSideEffectFree = options.sideEffectFreeModules &&
                options.sideEffectFreeModules.some(m => normalizedId.indexOf(m) >= 0);
            const isAngularCoreFile = options.angularCoreModules &&
                options.angularCoreModules.some(m => normalizedId.indexOf(m) >= 0);
            const { content: code, sourceMap: map } = build_optimizer_1.buildOptimizer({
                content,
                inputFilePath: id,
                emitSourceMap: true,
                isSideEffectFree,
                isAngularCoreFile,
            });
            if (!code) {
                if (DEBUG) {
                    // tslint:disable-next-line: no-console
                    console.error('no transforms produced by buildOptimizer for ' + path.relative(process.cwd(), id));
                }
                return null;
            }
            if (!map) {
                throw new Error('no sourcemap produced by buildOptimizer');
            }
            return { code, map };
        },
    };
}
exports.default = optimizer;
