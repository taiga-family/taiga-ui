/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path } from '../path';
import { ResolverHost } from './resolver';
export declare type ReplacementFunction = (path: Path) => Path;
/**
 */
export declare class PatternMatchingHost<StatsT extends object = {}> extends ResolverHost<StatsT> {
    protected _patterns: Map<RegExp, ReplacementFunction>;
    addPattern(pattern: string | string[], replacementFn: ReplacementFunction): void;
    protected _resolve(path: Path): Path;
}
