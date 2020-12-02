"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
Object.defineProperty(exports, "__esModule", { value: true });
// Force Webpack to throw compilation errors. Useful with karma-webpack when in single-run mode.
// Workaround for https://github.com/webpack-contrib/karma-webpack/issues/66
class KarmaWebpackFailureCb {
    constructor(callback) {
        this.callback = callback;
    }
    apply(compiler) {
        compiler.hooks.done.tap('KarmaWebpackFailureCb', (stats) => {
            if (stats.compilation.errors.length > 0) {
                this.callback(undefined, stats.compilation.errors.map((error) => error.message ? error.message : error.toString()));
            }
        });
    }
}
exports.KarmaWebpackFailureCb = KarmaWebpackFailureCb;
