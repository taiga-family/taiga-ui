/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { RawSourceMap } from 'source-map';
import webpack = require('webpack');
export default function webpackRollupLoader(this: webpack.loader.LoaderContext, source: string, sourceMap: RawSourceMap): void;
