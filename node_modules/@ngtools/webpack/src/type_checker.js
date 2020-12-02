"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const compiler_cli_1 = require("@angular/compiler-cli");
const ts = require("typescript");
const benchmark_1 = require("./benchmark");
const compiler_host_1 = require("./compiler_host");
const diagnostics_1 = require("./diagnostics");
const type_checker_messages_1 = require("./type_checker_messages");
// This file should run in a child process with the AUTO_START_ARG argument
exports.AUTO_START_ARG = '9d93e901-158a-4cf9-ba1b-2f0582ffcfeb';
class TypeChecker {
    constructor(_compilerOptions, _basePath, _JitMode, _rootNames, hostReplacementPaths) {
        this._compilerOptions = _compilerOptions;
        this._JitMode = _JitMode;
        this._rootNames = _rootNames;
        benchmark_1.time('TypeChecker.constructor');
        const host = new core_1.virtualFs.AliasHost(new node_1.NodeJsSyncHost());
        // Add file replacements.
        for (const from in hostReplacementPaths) {
            const normalizedFrom = core_1.resolve(core_1.normalize(_basePath), core_1.normalize(from));
            const normalizedWith = core_1.resolve(core_1.normalize(_basePath), core_1.normalize(hostReplacementPaths[from]));
            host.aliases.set(normalizedFrom, normalizedWith);
        }
        const compilerHost = new compiler_host_1.WebpackCompilerHost(_compilerOptions, _basePath, host, true);
        // We don't set a async resource loader on the compiler host because we only support
        // html templates, which are the only ones that can throw errors, and those can be loaded
        // synchronously.
        // If we need to also report errors on styles then we'll need to ask the main thread
        // for these resources.
        this._compilerHost = compiler_cli_1.createCompilerHost({
            options: this._compilerOptions,
            tsHost: compilerHost,
        });
        benchmark_1.timeEnd('TypeChecker.constructor');
    }
    _update(rootNames, changedCompilationFiles) {
        benchmark_1.time('TypeChecker._update');
        this._rootNames = rootNames;
        changedCompilationFiles.forEach((fileName) => {
            this._compilerHost.invalidate(fileName);
        });
        benchmark_1.timeEnd('TypeChecker._update');
    }
    _createOrUpdateProgram() {
        if (this._JitMode) {
            // Create the TypeScript program.
            benchmark_1.time('TypeChecker._createOrUpdateProgram.ts.createProgram');
            this._program = ts.createProgram(this._rootNames, this._compilerOptions, this._compilerHost, this._program);
            benchmark_1.timeEnd('TypeChecker._createOrUpdateProgram.ts.createProgram');
        }
        else {
            benchmark_1.time('TypeChecker._createOrUpdateProgram.ng.createProgram');
            // Create the Angular program.
            this._program = compiler_cli_1.createProgram({
                rootNames: this._rootNames,
                options: this._compilerOptions,
                host: this._compilerHost,
                oldProgram: this._program,
            });
            benchmark_1.timeEnd('TypeChecker._createOrUpdateProgram.ng.createProgram');
        }
    }
    _diagnose(cancellationToken) {
        const allDiagnostics = diagnostics_1.gatherDiagnostics(this._program, this._JitMode, 'TypeChecker', diagnostics_1.DiagnosticMode.Semantic, cancellationToken);
        // Report diagnostics.
        if (!cancellationToken.isCancellationRequested()) {
            diagnostics_1.reportDiagnostics(allDiagnostics, this._compilerHost, msg => this.sendMessage(new type_checker_messages_1.LogMessage('error', 'ERROR in ' + msg)), msg => this.sendMessage(new type_checker_messages_1.LogMessage('warn', 'WARNING in ' + msg)));
        }
    }
    sendMessage(msg) {
        if (process.send) {
            process.send(msg);
        }
    }
    update(rootNames, changedCompilationFiles, cancellationToken) {
        this._update(rootNames, changedCompilationFiles);
        this._createOrUpdateProgram();
        this._diagnose(cancellationToken);
    }
}
exports.TypeChecker = TypeChecker;
