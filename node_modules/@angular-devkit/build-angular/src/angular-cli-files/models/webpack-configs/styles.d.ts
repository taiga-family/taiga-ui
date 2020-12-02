/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as webpack from 'webpack';
import { WebpackConfigOptions } from '../build-options';
export declare function getStylesConfig(wco: WebpackConfigOptions): {
    entry: {
        [key: string]: string[];
    };
    module: {
        rules: webpack.RuleSetRule[];
    };
    plugins: webpack.Plugin[];
};
