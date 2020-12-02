/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path } from '@angular-devkit/core';
import { Stats } from 'fs';
import { InputFileSystem } from 'webpack';
import { WebpackCompilerHost } from './compiler_host';
import { Callback, NodeWatchFileSystemInterface } from './webpack';
export declare const NodeWatchFileSystem: NodeWatchFileSystemInterface;
export declare class VirtualFileSystemDecorator implements InputFileSystem {
    private _inputFileSystem;
    private _webpackCompilerHost;
    constructor(_inputFileSystem: InputFileSystem, _webpackCompilerHost: WebpackCompilerHost);
    getWebpackCompilerHost(): WebpackCompilerHost;
    getVirtualFilesPaths(): string[];
    stat(path: string, callback: (err: Error, stats: Stats) => void): void;
    readdir(path: string, callback: Callback<string[]>): void;
    readFile(path: string, callback: (err: Error, contents: Buffer) => void): void;
    readJson(path: string, callback: Callback<{}>): void;
    readlink(path: string, callback: (err: Error, linkString: string) => void): void;
    statSync(path: string): Stats;
    readdirSync(path: string): string[];
    readFileSync(path: string): Buffer;
    readJsonSync(path: string): string;
    readlinkSync(path: string): string;
    purge(changes?: string[] | string): void;
}
export declare class VirtualWatchFileSystemDecorator extends NodeWatchFileSystem {
    private _virtualInputFileSystem;
    private _replacements?;
    constructor(_virtualInputFileSystem: VirtualFileSystemDecorator, _replacements?: Map<Path, Path> | ((path: Path) => Path) | undefined);
    watch(files: string[], dirs: string[], missing: string[], startTime: number | undefined, options: {}, callback: any, // tslint:disable-line:no-any
    callbackUndelayed: (filename: string, timestamp: number) => void): {
        close: () => any;
        pause: () => any;
        getFileTimestamps: () => Map<string, number>;
        getContextTimestamps: () => Map<string, number>;
    };
}
