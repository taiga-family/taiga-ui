/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, PathFragment, virtualFs } from '@angular-devkit/core';
import { Action } from './action';
import { DirEntry, FileEntry, FilePredicate, FileVisitor, MergeStrategy, Tree, UpdateRecorder } from './interface';
export declare class HostDirEntry implements DirEntry {
    readonly parent: DirEntry | null;
    readonly path: Path;
    protected _host: virtualFs.SyncDelegateHost;
    protected _tree: Tree;
    constructor(parent: DirEntry | null, path: Path, _host: virtualFs.SyncDelegateHost, _tree: Tree);
    get subdirs(): PathFragment[];
    get subfiles(): PathFragment[];
    dir(name: PathFragment): DirEntry;
    file(name: PathFragment): FileEntry | null;
    visit(visitor: FileVisitor): void;
    private getSubfilesRecursively;
}
export declare class HostTree implements Tree {
    protected _backend: virtualFs.ReadonlyHost<{}>;
    private readonly _id;
    private _record;
    private _recordSync;
    private _ancestry;
    private _dirCache;
    static isHostTree(tree: Tree): tree is HostTree;
    constructor(_backend?: virtualFs.ReadonlyHost<{}>);
    protected _normalizePath(path: string): Path;
    protected _willCreate(path: Path): boolean;
    protected _willOverwrite(path: Path): boolean;
    protected _willDelete(path: Path): boolean;
    protected _willRename(path: Path): boolean;
    branch(): Tree;
    merge(other: Tree, strategy?: MergeStrategy): void;
    get root(): DirEntry;
    read(path: string): Buffer | null;
    exists(path: string): boolean;
    get(path: string): FileEntry | null;
    getDir(path: string): DirEntry;
    visit(visitor: FileVisitor): void;
    overwrite(path: string, content: Buffer | string): void;
    beginUpdate(path: string): UpdateRecorder;
    commitUpdate(record: UpdateRecorder): void;
    create(path: string, content: Buffer | string): void;
    delete(path: string): void;
    rename(from: string, to: string): void;
    apply(action: Action, strategy?: MergeStrategy): void;
    get actions(): Action[];
}
export declare class HostCreateTree extends HostTree {
    constructor(host: virtualFs.ReadonlyHost);
}
export declare class FilterHostTree extends HostTree {
    constructor(tree: HostTree, filter?: FilePredicate<boolean>);
}
