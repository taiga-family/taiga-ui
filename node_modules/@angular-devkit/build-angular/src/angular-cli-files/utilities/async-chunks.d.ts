/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as webpack from 'webpack';
import { NormalizedEntryPoint } from '../models/webpack-configs';
/**
 * Webpack stats may incorrectly mark extra entry points `initial` chunks, when
 * they are actually loaded asynchronously and thus not in the main bundle. This
 * function finds extra entry points in Webpack stats and corrects this value
 * whereever necessary. Does not modify {@param webpackStats}.
 */
export declare function markAsyncChunksNonInitial(webpackStats: webpack.Stats.ToJsonOutput, extraEntryPoints: NormalizedEntryPoint[]): Exclude<webpack.Stats.ToJsonOutput['chunks'], undefined>;
