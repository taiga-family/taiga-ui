/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as webpack from 'webpack';
export interface EmittedFiles {
    id?: string;
    name?: string;
    file: string;
    initial: boolean;
    asset?: boolean;
    extension: string;
}
export declare function getEmittedFiles(compilation: webpack.compilation.Compilation): EmittedFiles[];
