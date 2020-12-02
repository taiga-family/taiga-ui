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
const fs_1 = require("fs");
const path_1 = require("path");
const ts = require("typescript");
const compiler_host_1 = require("../compiler_host");
// Test transform helpers.
const basePath = '/project/src/';
const fileName = basePath + 'test-file.ts';
const typeScriptLibFiles = loadTypeScriptLibFiles();
const tsLibFiles = loadTsLibFiles();
function createTypescriptContext(content, additionalFiles, useLibs = false, extraCompilerOptions = {}) {
    // Set compiler options.
    const compilerOptions = {
        noEmitOnError: useLibs,
        allowJs: true,
        newLine: ts.NewLineKind.LineFeed,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ESNext,
        skipLibCheck: true,
        sourceMap: false,
        importHelpers: true,
        experimentalDecorators: true,
        ...extraCompilerOptions,
    };
    // Create compiler host.
    const compilerHost = new compiler_host_1.WebpackCompilerHost(compilerOptions, basePath, new core_1.virtualFs.SimpleMemoryHost(), false);
    // Add a dummy file to host content.
    compilerHost.writeFile(fileName, content, false);
    if (useLibs) {
        // Write the default libs.
        // These are needed for tests that use import(), because it relies on a Promise being there.
        const compilerLibFolder = path_1.dirname(compilerHost.getDefaultLibFileName(compilerOptions));
        for (const [k, v] of Object.entries(typeScriptLibFiles)) {
            compilerHost.writeFile(path_1.join(compilerLibFolder, k), v, false);
        }
    }
    if (compilerOptions.importHelpers) {
        for (const [k, v] of Object.entries(tsLibFiles)) {
            compilerHost.writeFile(k, v, false);
        }
    }
    if (additionalFiles) {
        for (const key in additionalFiles) {
            compilerHost.writeFile(basePath + key, additionalFiles[key], false);
        }
    }
    // Create the TypeScript program.
    const program = ts.createProgram([fileName], compilerOptions, compilerHost);
    return { compilerHost, program };
}
exports.createTypescriptContext = createTypescriptContext;
function transformTypescript(content, transformers, program, compilerHost) {
    // Use given context or create a new one.
    if (content !== undefined) {
        const typescriptContext = createTypescriptContext(content);
        if (!program) {
            program = typescriptContext.program;
        }
        if (!compilerHost) {
            compilerHost = typescriptContext.compilerHost;
        }
    }
    else if (!program || !compilerHost) {
        throw new Error('transformTypescript needs either `content` or a `program` and `compilerHost');
    }
    // Emit.
    const { emitSkipped, diagnostics } = program.emit(undefined, undefined, undefined, undefined, { before: transformers });
    // Throw error with diagnostics if emit wasn't successfull.
    if (emitSkipped) {
        throw new Error(ts.formatDiagnostics(diagnostics, compilerHost));
    }
    // Return the transpiled js.
    return compilerHost.readFile(fileName.replace(/\.tsx?$/, '.js'));
}
exports.transformTypescript = transformTypescript;
function loadTypeScriptLibFiles() {
    const libFolderPath = path_1.dirname(require.resolve('typescript/lib/lib.d.ts'));
    const libFolderFiles = fs_1.readdirSync(libFolderPath);
    const libFileNames = libFolderFiles.filter(f => f.startsWith('lib.') && f.endsWith('.d.ts'));
    // Return a map of the lib names to their content.
    const libs = {};
    for (const f of libFileNames) {
        libs[f] = fs_1.readFileSync(path_1.join(libFolderPath, f), 'utf-8');
    }
    return libs;
}
function loadTsLibFiles() {
    const libFolderPath = path_1.dirname(require.resolve('tslib/package.json'));
    const libFolderFiles = fs_1.readdirSync(libFolderPath)
        .filter(p => fs_1.statSync(path_1.join(libFolderPath, p)).isFile());
    // Return a map of the lib names to their content.
    const libs = {};
    for (const f of libFolderFiles) {
        libs[path_1.join('node_modules/tslib', f)] = fs_1.readFileSync(path_1.join(libFolderPath, f), 'utf-8');
    }
    return libs;
}
