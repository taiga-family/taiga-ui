import { CompilerOptions } from '@angular/compiler-cli';
import { CancellationToken } from './diagnostics';
export declare const AUTO_START_ARG = "9d93e901-158a-4cf9-ba1b-2f0582ffcfeb";
export declare class TypeChecker {
    private _compilerOptions;
    private _JitMode;
    private _rootNames;
    private _program;
    private _compilerHost;
    constructor(_compilerOptions: CompilerOptions, _basePath: string, _JitMode: boolean, _rootNames: string[], hostReplacementPaths: {
        [path: string]: string;
    });
    private _update;
    private _createOrUpdateProgram;
    private _diagnose;
    private sendMessage;
    update(rootNames: string[], changedCompilationFiles: string[], cancellationToken: CancellationToken): void;
}
