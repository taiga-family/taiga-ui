/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { virtualFs } from '@angular-devkit/core';
/**
 * @deprecated Please use a Host directly instead of this class. This will be removed prior to 1.0.
 */
export declare class FileSystemHost extends virtualFs.ScopedHost<{}> {
    constructor(dir: string);
}
