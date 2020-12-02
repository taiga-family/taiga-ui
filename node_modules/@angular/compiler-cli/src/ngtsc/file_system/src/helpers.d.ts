/// <amd-module name="@angular/compiler-cli/src/ngtsc/file_system/src/helpers" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath, FileSystem, PathSegment, PathString } from './types';
export declare function getFileSystem(): FileSystem;
export declare function setFileSystem(fileSystem: FileSystem): void;
/**
 * Convert the path `path` to an `AbsoluteFsPath`, throwing an error if it's not an absolute path.
 */
export declare function absoluteFrom(path: string): AbsoluteFsPath;
/**
 * Extract an `AbsoluteFsPath` from a `ts.SourceFile`.
 */
export declare function absoluteFromSourceFile(sf: ts.SourceFile): AbsoluteFsPath;
/**
 * Convert the path `path` to a `PathSegment`, throwing an error if it's not a relative path.
 */
export declare function relativeFrom(path: string): PathSegment;
/**
 * Static access to `dirname`.
 */
export declare function dirname<T extends PathString>(file: T): T;
/**
 * Static access to `join`.
 */
export declare function join<T extends PathString>(basePath: T, ...paths: string[]): T;
/**
 * Static access to `resolve`s.
 */
export declare function resolve(basePath: string, ...paths: string[]): AbsoluteFsPath;
/** Returns true when the path provided is the root path. */
export declare function isRoot(path: AbsoluteFsPath): boolean;
/**
 * Static access to `isRooted`.
 */
export declare function isRooted(path: string): boolean;
/**
 * Static access to `relative`.
 */
export declare function relative<T extends PathString>(from: T, to: T): PathSegment;
/**
 * Static access to `basename`.
 */
export declare function basename(filePath: PathString, extension?: string): PathSegment;
