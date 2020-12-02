/// <amd-module name="@angular/compiler-cli/ngcc/src/writing/cleaning/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../../src/ngtsc/file_system';
/**
 * Returns true if the given `path` is a directory (not a symlink) and actually exists.
 *
 * @param fs the current filesystem
 * @param path the path to check
 */
export declare function isLocalDirectory(fs: FileSystem, path: AbsoluteFsPath): boolean;
