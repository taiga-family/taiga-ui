/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, Path, virtualFs } from '@angular-devkit/core';
import { FileReplacement } from '../browser/schema';
export declare class MissingFileReplacementException extends BaseException {
    constructor(path: String);
}
export interface NormalizedFileReplacement {
    replace: Path;
    with: Path;
}
export declare function normalizeFileReplacements(fileReplacements: FileReplacement[], host: virtualFs.SyncDelegateHost, root: Path): NormalizedFileReplacement[];
