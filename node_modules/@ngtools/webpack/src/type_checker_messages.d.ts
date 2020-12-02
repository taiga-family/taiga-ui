/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import * as ts from 'typescript';
export declare enum MESSAGE_KIND {
    Init = 0,
    Update = 1,
    Log = 2
}
export declare abstract class TypeCheckerMessage {
    kind: MESSAGE_KIND;
    constructor(kind: MESSAGE_KIND);
}
export declare class InitMessage extends TypeCheckerMessage {
    compilerOptions: ts.CompilerOptions;
    basePath: string;
    jitMode: boolean;
    rootNames: string[];
    hostReplacementPaths: {
        [path: string]: string;
    };
    constructor(compilerOptions: ts.CompilerOptions, basePath: string, jitMode: boolean, rootNames: string[], hostReplacementPaths: {
        [path: string]: string;
    });
}
export declare class UpdateMessage extends TypeCheckerMessage {
    rootNames: string[];
    changedCompilationFiles: string[];
    constructor(rootNames: string[], changedCompilationFiles: string[]);
}
export declare class LogMessage extends TypeCheckerMessage {
    level: logging.LogLevel;
    message: string;
    constructor(level: logging.LogLevel, message: string);
}
