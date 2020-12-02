/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateTag } from '../../utils/literals';
import { FileBuffer } from './interface';
export declare function stringToFileBuffer(str: string): FileBuffer;
export declare const fileBuffer: TemplateTag<FileBuffer>;
export declare function fileBufferToString(fileBuffer: FileBuffer): string;
