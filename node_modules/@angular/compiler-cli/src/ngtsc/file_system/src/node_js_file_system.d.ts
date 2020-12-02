/// <amd-module name="@angular/compiler-cli/src/ngtsc/file_system/src/node_js_file_system" />
import { AbsoluteFsPath, FileStats, FileSystem, PathSegment, PathString } from './types';
/**
 * A wrapper around the Node.js file-system (i.e the `fs` package).
 */
export declare class NodeJSFileSystem implements FileSystem {
    private _caseSensitive;
    exists(path: AbsoluteFsPath): boolean;
    readFile(path: AbsoluteFsPath): string;
    readFileBuffer(path: AbsoluteFsPath): Buffer;
    writeFile(path: AbsoluteFsPath, data: string | Buffer, exclusive?: boolean): void;
    removeFile(path: AbsoluteFsPath): void;
    symlink(target: AbsoluteFsPath, path: AbsoluteFsPath): void;
    readdir(path: AbsoluteFsPath): PathSegment[];
    lstat(path: AbsoluteFsPath): FileStats;
    stat(path: AbsoluteFsPath): FileStats;
    pwd(): AbsoluteFsPath;
    chdir(dir: AbsoluteFsPath): void;
    copyFile(from: AbsoluteFsPath, to: AbsoluteFsPath): void;
    moveFile(from: AbsoluteFsPath, to: AbsoluteFsPath): void;
    ensureDir(path: AbsoluteFsPath): void;
    removeDeep(path: AbsoluteFsPath): void;
    isCaseSensitive(): boolean;
    resolve(...paths: string[]): AbsoluteFsPath;
    dirname<T extends string>(file: T): T;
    join<T extends string>(basePath: T, ...paths: string[]): T;
    isRoot(path: AbsoluteFsPath): boolean;
    isRooted(path: string): boolean;
    relative<T extends PathString>(from: T, to: T): PathSegment;
    basename(filePath: string, extension?: string): PathSegment;
    extname(path: AbsoluteFsPath | PathSegment): string;
    realpath(path: AbsoluteFsPath): AbsoluteFsPath;
    getDefaultLibLocation(): AbsoluteFsPath;
    normalize<T extends string>(path: T): T;
    private safeMkdir;
}
