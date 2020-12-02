/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, Path, virtualFs } from '@angular-devkit/core';
import { AssetPattern, AssetPatternClass } from '../browser/schema';
export declare class MissingAssetSourceRootException extends BaseException {
    constructor(path: String);
}
export declare function normalizeAssetPatterns(assetPatterns: AssetPattern[], host: virtualFs.SyncDelegateHost, root: Path, projectRoot: Path, maybeSourceRoot: Path | undefined): AssetPatternClass[];
