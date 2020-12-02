/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Action } from './action';
import { DirEntry, FileEntry, FileVisitor, MergeStrategy, Tree, UpdateRecorder } from './interface';
export declare class DelegateTree implements Tree {
    protected _other: Tree;
    constructor(_other: Tree);
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
