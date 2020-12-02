/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, Path } from '@angular-devkit/core';
export declare class UnknownActionException extends BaseException {
    constructor(action: Action);
}
export declare type Action = CreateFileAction | OverwriteFileAction | RenameFileAction | DeleteFileAction;
export interface ActionBase {
    readonly id: number;
    readonly parent: number;
    readonly path: Path;
}
export declare class ActionList implements Iterable<Action> {
    private _actions;
    protected _action(action: Partial<Action>): void;
    create(path: Path, content: Buffer): void;
    overwrite(path: Path, content: Buffer): void;
    rename(path: Path, to: Path): void;
    delete(path: Path): void;
    optimize(): void;
    push(action: Action): void;
    get(i: number): Action;
    has(action: Action): boolean;
    find(predicate: (value: Action) => boolean): Action | null;
    forEach(fn: (value: Action, index: number, array: Action[]) => void, thisArg?: {}): void;
    get length(): number;
    [Symbol.iterator](): IterableIterator<Action>;
}
export declare function isContentAction(action: Action): action is CreateFileAction | OverwriteFileAction;
export declare function isAction(action: any): action is Action;
export interface CreateFileAction extends ActionBase {
    readonly kind: 'c';
    readonly content: Buffer;
}
export interface OverwriteFileAction extends ActionBase {
    readonly kind: 'o';
    readonly content: Buffer;
}
export interface RenameFileAction extends ActionBase {
    readonly kind: 'r';
    readonly to: Path;
}
export interface DeleteFileAction extends ActionBase {
    readonly kind: 'd';
}
