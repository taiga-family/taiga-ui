import * as ts from 'typescript';
import { ParsedConfiguration, Program } from '@angular/compiler-cli';
import { Node } from '../graph/node';
import { NgEntryPoint, DestinationFiles } from './entry-point/entry-point';
import { NgPackage } from './package';
import { FileCache } from '../file-system/file-cache';
export declare const TYPE_NG_PACKAGE = "application/ng-package";
export declare const TYPE_NG_ENTRY_POINT = "application/ng-entry-point";
export declare type GlobCache = Record<string, boolean | 'DIR' | 'FILE' | string[]>;
/** A node that can be read through the `fs` api. */
export declare const URL_PROTOCOL_FILE = "file://";
/** A node specific to angular. */
export declare const URL_PROTOCOL_NG = "ng://";
export declare function isEntryPoint(node: Node): node is EntryPointNode;
export declare function isPackage(node: Node): node is PackageNode;
export declare function byEntryPoint(): {
    (node: Node): boolean;
    and: (criteria: (node: Node) => boolean) => (node: Node) => boolean;
};
export declare function isEntryPointInProgress(): (node: Node) => boolean;
export declare function isEntryPointDirty(): (node: Node) => boolean;
export declare function isFileUrl(value: string): boolean;
export declare function fileUrl(path: string): string;
export declare function fileUrlPath(url: string): string;
export declare function ngUrl(path: string): string;
export declare class EntryPointNode extends Node {
    readonly url: string;
    readonly sourcesFileCache?: FileCache;
    readonly type = "application/ng-entry-point";
    constructor(url: string, sourcesFileCache?: FileCache);
    cache: {
        oldPrograms?: Record<ts.ScriptTarget | 'analysis', Program | ts.Program>;
        sourcesFileCache: FileCache;
        analysesSourcesFileCache: FileCache;
        moduleResolutionCache: ts.ModuleResolutionCache;
    };
    data: {
        destinationFiles: DestinationFiles;
        entryPoint: NgEntryPoint;
        tsConfig?: ParsedConfiguration;
    };
}
export declare class PackageNode extends Node {
    readonly type = "application/ng-package";
    data: NgPackage;
    cache: {
        globCache: Record<string, boolean | "DIR" | "FILE" | string[]>;
        sourcesFileCache: FileCache;
    };
}
