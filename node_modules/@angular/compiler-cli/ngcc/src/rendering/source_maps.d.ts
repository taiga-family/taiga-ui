/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/source_maps" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SourceMapConverter } from 'convert-source-map';
import MagicString from 'magic-string';
import * as ts from 'typescript';
import { FileSystem } from '../../../src/ngtsc/file_system';
import { Logger } from '../logging/logger';
import { FileToWrite } from './utils';
export interface SourceMapInfo {
    source: string;
    map: SourceMapConverter | null;
    isInline: boolean;
}
/**
 * Merge the input and output source-maps, replacing the source-map comment in the output file
 * with an appropriate source-map comment pointing to the merged source-map.
 */
export declare function renderSourceAndMap(logger: Logger, fs: FileSystem, sourceFile: ts.SourceFile, generatedMagicString: MagicString): FileToWrite[];
