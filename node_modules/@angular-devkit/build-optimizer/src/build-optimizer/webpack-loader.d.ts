/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { RawSourceMap } from 'source-map';
import * as webpack from 'webpack';
export declare const buildOptimizerLoaderPath: string;
export default function buildOptimizerLoader(this: webpack.loader.LoaderContext, content: string, previousSourceMap: RawSourceMap): void;
