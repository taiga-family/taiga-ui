/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/entry_point/src/generator" />
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
import { ShimGenerator } from '../../shims';
export declare class FlatIndexGenerator implements ShimGenerator {
    readonly entryPoint: AbsoluteFsPath;
    readonly moduleName: string | null;
    readonly flatIndexPath: string;
    constructor(entryPoint: AbsoluteFsPath, relativeFlatIndexPath: string, moduleName: string | null);
    recognize(fileName: string): boolean;
    generate(): ts.SourceFile;
}
