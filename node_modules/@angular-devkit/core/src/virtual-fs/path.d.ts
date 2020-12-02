/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '../exception';
import { TemplateTag } from '../utils/literals';
export declare class InvalidPathException extends BaseException {
    constructor(path: string);
}
export declare class PathMustBeAbsoluteException extends BaseException {
    constructor(path: string);
}
export declare class PathCannotBeFragmentException extends BaseException {
    constructor(path: string);
}
/**
 * A Path recognized by most methods in the DevKit.
 */
export declare type Path = string & {
    __PRIVATE_DEVKIT_PATH: void;
};
/**
 * A Path fragment (file or directory name) recognized by most methods in the DevKit.
 */
export declare type PathFragment = Path & {
    __PRIVATE_DEVKIT_PATH_FRAGMENT: void;
};
/**
 * The Separator for normalized path.
 * @type {Path}
 */
export declare const NormalizedSep: Path;
/**
 * The root of a normalized path.
 * @type {Path}
 */
export declare const NormalizedRoot: Path;
/**
 * Split a path into multiple path fragments. Each fragments except the last one will end with
 * a path separator.
 * @param {Path} path The path to split.
 * @returns {Path[]} An array of path fragments.
 */
export declare function split(path: Path): PathFragment[];
/**
 *
 */
export declare function extname(path: Path): string;
/**
 * Return the basename of the path, as a Path. See path.basename
 */
export declare function basename(path: Path): PathFragment;
/**
 * Return the dirname of the path, as a Path. See path.dirname
 */
export declare function dirname(path: Path): Path;
/**
 * Join multiple paths together, and normalize the result. Accepts strings that will be
 * normalized as well (but the original must be a path).
 */
export declare function join(p1: Path, ...others: string[]): Path;
/**
 * Returns true if a path is absolute.
 */
export declare function isAbsolute(p: Path): boolean;
/**
 * Returns a path such that `join(from, relative(from, to)) == to`.
 * Both paths must be absolute, otherwise it does not make much sense.
 */
export declare function relative(from: Path, to: Path): Path;
/**
 * Returns a Path that is the resolution of p2, from p1. If p2 is absolute, it will return p2,
 * otherwise will join both p1 and p2.
 */
export declare function resolve(p1: Path, p2: Path): Path;
export declare function fragment(path: string): PathFragment;
/**
 * Reset the cache. This is only useful for testing.
 * @private
 */
export declare function resetNormalizeCache(): void;
/**
 * Normalize a string into a Path. This is the only mean to get a Path type from a string that
 * represents a system path. This method cache the results as real world paths tend to be
 * duplicated often.
 * Normalization includes:
 *   - Windows backslashes `\\` are replaced with `/`.
 *   - Windows drivers are replaced with `/X/`, where X is the drive letter.
 *   - Absolute paths starts with `/`.
 *   - Multiple `/` are replaced by a single one.
 *   - Path segments `.` are removed.
 *   - Path segments `..` are resolved.
 *   - If a path is absolute, having a `..` at the start is invalid (and will throw).
 * @param path The path to be normalized.
 */
export declare function normalize(path: string): Path;
/**
 * The no cache version of the normalize() function. Used for benchmarking and testing.
 */
export declare function noCacheNormalize(path: string): Path;
export declare const path: TemplateTag<Path>;
export declare type WindowsPath = string & {
    __PRIVATE_DEVKIT_WINDOWS_PATH: void;
};
export declare type PosixPath = string & {
    __PRIVATE_DEVKIT_POSIX_PATH: void;
};
export declare function asWindowsPath(path: Path): WindowsPath;
export declare function asPosixPath(path: Path): PosixPath;
export declare function getSystemPath(path: Path): string;
