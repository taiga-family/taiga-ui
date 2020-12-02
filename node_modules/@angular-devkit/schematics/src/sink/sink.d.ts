/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Action, CreateFileAction, DeleteFileAction, OverwriteFileAction, RenameFileAction } from '../tree/action';
import { Tree } from '../tree/interface';
export interface Sink {
    commit(tree: Tree): Observable<void>;
}
export declare abstract class SimpleSinkBase implements Sink {
    preCommitAction: (action: Action) => void | Action | PromiseLike<Action> | Observable<Action>;
    postCommitAction: (action: Action) => void | Observable<void>;
    preCommit: () => void | Observable<void>;
    postCommit: () => void | Observable<void>;
    protected abstract _validateFileExists(p: string): Observable<boolean>;
    protected abstract _overwriteFile(path: string, content: Buffer): Observable<void>;
    protected abstract _createFile(path: string, content: Buffer): Observable<void>;
    protected abstract _renameFile(path: string, to: string): Observable<void>;
    protected abstract _deleteFile(path: string): Observable<void>;
    protected abstract _done(): Observable<void>;
    protected _fileAlreadyExistException(path: string): void;
    protected _fileDoesNotExistException(path: string): void;
    protected _validateOverwriteAction(action: OverwriteFileAction): Observable<void>;
    protected _validateCreateAction(action: CreateFileAction): Observable<void>;
    protected _validateRenameAction(action: RenameFileAction): Observable<void>;
    protected _validateDeleteAction(action: DeleteFileAction): Observable<void>;
    validateSingleAction(action: Action): Observable<void>;
    commitSingleAction(action: Action): Observable<void>;
    commit(tree: Tree): Observable<void>;
}
