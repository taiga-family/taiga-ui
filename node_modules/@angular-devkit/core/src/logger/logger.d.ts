/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable, Operator, PartialObserver, Subject, Subscription } from 'rxjs';
import { JsonObject } from '../json/interface';
export interface LoggerMetadata extends JsonObject {
    name: string;
    path: string[];
}
export interface LogEntry extends LoggerMetadata {
    level: LogLevel;
    message: string;
    timestamp: number;
}
export interface LoggerApi {
    createChild(name: string): Logger;
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    debug(message: string, metadata?: JsonObject): void;
    info(message: string, metadata?: JsonObject): void;
    warn(message: string, metadata?: JsonObject): void;
    error(message: string, metadata?: JsonObject): void;
    fatal(message: string, metadata?: JsonObject): void;
}
export declare type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';
export declare class Logger extends Observable<LogEntry> implements LoggerApi {
    readonly name: string;
    readonly parent: Logger | null;
    protected readonly _subject: Subject<LogEntry>;
    protected _metadata: LoggerMetadata;
    private _obs;
    private _subscription;
    protected get _observable(): Observable<LogEntry>;
    protected set _observable(v: Observable<LogEntry>);
    constructor(name: string, parent?: Logger | null);
    asApi(): LoggerApi;
    createChild(name: string): Logger;
    complete(): void;
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    next(entry: LogEntry): void;
    debug(message: string, metadata?: JsonObject): void;
    info(message: string, metadata?: JsonObject): void;
    warn(message: string, metadata?: JsonObject): void;
    error(message: string, metadata?: JsonObject): void;
    fatal(message: string, metadata?: JsonObject): void;
    toString(): string;
    lift<R>(operator: Operator<LogEntry, R>): Observable<R>;
    subscribe(): Subscription;
    subscribe(observer: PartialObserver<LogEntry>): Subscription;
    subscribe(next?: (value: LogEntry) => void, error?: (error: Error) => void, complete?: () => void): Subscription;
    forEach(next: (value: LogEntry) => void, PromiseCtor?: typeof Promise): Promise<void>;
}
