/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { virtualFs } from '@angular-devkit/core';
import { Observable, Subject } from 'rxjs';
import { HostSink } from './host';
export interface DryRunErrorEvent {
    kind: 'error';
    description: 'alreadyExist' | 'doesNotExist';
    path: string;
}
export interface DryRunDeleteEvent {
    kind: 'delete';
    path: string;
}
export interface DryRunCreateEvent {
    kind: 'create';
    path: string;
    content: Buffer;
}
export interface DryRunUpdateEvent {
    kind: 'update';
    path: string;
    content: Buffer;
}
export interface DryRunRenameEvent {
    kind: 'rename';
    path: string;
    to: string;
}
export declare type DryRunEvent = DryRunErrorEvent | DryRunDeleteEvent | DryRunCreateEvent | DryRunUpdateEvent | DryRunRenameEvent;
export declare class DryRunSink extends HostSink {
    protected _subject: Subject<DryRunEvent>;
    protected _fileDoesNotExistExceptionSet: Set<string>;
    protected _fileAlreadyExistExceptionSet: Set<string>;
    readonly reporter: Observable<DryRunEvent>;
    /**
     * @param {host} dir The host to use to output. This should be scoped.
     * @param {boolean} force Whether to force overwriting files that already exist.
     */
    constructor(host: virtualFs.Host, force?: boolean);
    protected _fileAlreadyExistException(path: string): void;
    protected _fileDoesNotExistException(path: string): void;
    _done(): Observable<void>;
}
