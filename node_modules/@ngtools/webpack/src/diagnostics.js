"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const compiler_cli_1 = require("@angular/compiler-cli");
const ts = require("typescript");
const benchmark_1 = require("./benchmark");
var DiagnosticMode;
(function (DiagnosticMode) {
    DiagnosticMode[DiagnosticMode["Syntactic"] = 1] = "Syntactic";
    DiagnosticMode[DiagnosticMode["Semantic"] = 2] = "Semantic";
    DiagnosticMode[DiagnosticMode["All"] = 3] = "All";
    DiagnosticMode[DiagnosticMode["Default"] = 3] = "Default";
})(DiagnosticMode = exports.DiagnosticMode || (exports.DiagnosticMode = {}));
class CancellationToken {
    constructor() {
        this._isCancelled = false;
    }
    requestCancellation() {
        this._isCancelled = true;
    }
    isCancellationRequested() {
        return this._isCancelled;
    }
    throwIfCancellationRequested() {
        if (this.isCancellationRequested()) {
            throw new ts.OperationCanceledException();
        }
    }
}
exports.CancellationToken = CancellationToken;
function hasErrors(diags) {
    return diags.some(d => d.category === ts.DiagnosticCategory.Error);
}
exports.hasErrors = hasErrors;
function gatherDiagnostics(program, jitMode, benchmarkLabel, mode = DiagnosticMode.All, cancellationToken) {
    const allDiagnostics = [];
    let checkOtherDiagnostics = true;
    function checkDiagnostics(fn) {
        if (checkOtherDiagnostics) {
            const diags = fn(undefined, cancellationToken);
            if (diags) {
                allDiagnostics.push(...diags);
                checkOtherDiagnostics = !hasErrors(diags);
            }
        }
    }
    const gatherSyntacticDiagnostics = (mode & DiagnosticMode.Syntactic) != 0;
    const gatherSemanticDiagnostics = (mode & DiagnosticMode.Semantic) != 0;
    if (jitMode) {
        const tsProgram = program;
        if (gatherSyntacticDiagnostics) {
            // Check syntactic diagnostics.
            benchmark_1.time(`${benchmarkLabel}.gatherDiagnostics.ts.getSyntacticDiagnostics`);
            checkDiagnostics(tsProgram.getSyntacticDiagnostics.bind(tsProgram));
            benchmark_1.timeEnd(`${benchmarkLabel}.gatherDiagnostics.ts.getSyntacticDiagnostics`);
        }
        if (gatherSemanticDiagnostics) {
            // Check semantic diagnostics.
            benchmark_1.time(`${benchmarkLabel}.gatherDiagnostics.ts.getSemanticDiagnostics`);
            checkDiagnostics(tsProgram.getSemanticDiagnostics.bind(tsProgram));
            benchmark_1.timeEnd(`${benchmarkLabel}.gatherDiagnostics.ts.getSemanticDiagnostics`);
        }
    }
    else {
        const angularProgram = program;
        if (gatherSyntacticDiagnostics) {
            // Check TypeScript syntactic diagnostics.
            benchmark_1.time(`${benchmarkLabel}.gatherDiagnostics.ng.getTsSyntacticDiagnostics`);
            checkDiagnostics(angularProgram.getTsSyntacticDiagnostics.bind(angularProgram));
            benchmark_1.timeEnd(`${benchmarkLabel}.gatherDiagnostics.ng.getTsSyntacticDiagnostics`);
        }
        if (gatherSemanticDiagnostics) {
            // Check TypeScript semantic and Angular structure diagnostics.
            benchmark_1.time(`${benchmarkLabel}.gatherDiagnostics.ng.getTsSemanticDiagnostics`);
            checkDiagnostics(angularProgram.getTsSemanticDiagnostics.bind(angularProgram));
            benchmark_1.timeEnd(`${benchmarkLabel}.gatherDiagnostics.ng.getTsSemanticDiagnostics`);
            // Check Angular semantic diagnostics
            benchmark_1.time(`${benchmarkLabel}.gatherDiagnostics.ng.getNgSemanticDiagnostics`);
            checkDiagnostics(angularProgram.getNgSemanticDiagnostics.bind(angularProgram));
            benchmark_1.timeEnd(`${benchmarkLabel}.gatherDiagnostics.ng.getNgSemanticDiagnostics`);
        }
    }
    return allDiagnostics;
}
exports.gatherDiagnostics = gatherDiagnostics;
function reportDiagnostics(diagnostics, compilerHost, reportError, reportWarning) {
    const tsErrors = [];
    const tsWarnings = [];
    const ngErrors = [];
    const ngWarnings = [];
    for (const diagnostic of diagnostics) {
        switch (diagnostic.category) {
            case ts.DiagnosticCategory.Error:
                if (compiler_cli_1.isNgDiagnostic(diagnostic)) {
                    ngErrors.push(diagnostic);
                }
                else {
                    tsErrors.push(diagnostic);
                }
                break;
            case ts.DiagnosticCategory.Message:
            case ts.DiagnosticCategory.Suggestion:
            // Warnings?
            case ts.DiagnosticCategory.Warning:
                if (compiler_cli_1.isNgDiagnostic(diagnostic)) {
                    ngWarnings.push(diagnostic);
                }
                else {
                    tsWarnings.push(diagnostic);
                }
                break;
        }
    }
    if (tsErrors.length > 0) {
        const message = compiler_cli_1.formatDiagnostics(tsErrors);
        reportError(message);
    }
    if (tsWarnings.length > 0) {
        const message = compiler_cli_1.formatDiagnostics(tsWarnings);
        reportWarning(message);
    }
    if (ngErrors.length > 0) {
        const message = compiler_cli_1.formatDiagnostics(ngErrors);
        reportError(message);
    }
    if (ngWarnings.length > 0) {
        const message = compiler_cli_1.formatDiagnostics(ngWarnings);
        reportWarning(message);
    }
}
exports.reportDiagnostics = reportDiagnostics;
