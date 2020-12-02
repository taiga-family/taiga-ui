/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/perform_watch", ["require", "exports", "chokidar", "path", "typescript", "@angular/compiler-cli/src/perform_compile", "@angular/compiler-cli/src/transformers/api", "@angular/compiler-cli/src/transformers/entry_points", "@angular/compiler-cli/src/transformers/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chokidar = require("chokidar");
    var path = require("path");
    var ts = require("typescript");
    var perform_compile_1 = require("@angular/compiler-cli/src/perform_compile");
    var api = require("@angular/compiler-cli/src/transformers/api");
    var entry_points_1 = require("@angular/compiler-cli/src/transformers/entry_points");
    var util_1 = require("@angular/compiler-cli/src/transformers/util");
    function totalCompilationTimeDiagnostic(timeInMillis) {
        var duration;
        if (timeInMillis > 1000) {
            duration = (timeInMillis / 1000).toPrecision(2) + "s";
        }
        else {
            duration = timeInMillis + "ms";
        }
        return {
            category: ts.DiagnosticCategory.Message,
            messageText: "Total time: " + duration,
            code: api.DEFAULT_ERROR_CODE,
            source: api.SOURCE,
        };
    }
    var FileChangeEvent;
    (function (FileChangeEvent) {
        FileChangeEvent[FileChangeEvent["Change"] = 0] = "Change";
        FileChangeEvent[FileChangeEvent["CreateDelete"] = 1] = "CreateDelete";
        FileChangeEvent[FileChangeEvent["CreateDeleteDir"] = 2] = "CreateDeleteDir";
    })(FileChangeEvent = exports.FileChangeEvent || (exports.FileChangeEvent = {}));
    function createPerformWatchHost(configFileName, reportDiagnostics, existingOptions, createEmitCallback) {
        return {
            reportDiagnostics: reportDiagnostics,
            createCompilerHost: function (options) { return entry_points_1.createCompilerHost({ options: options }); },
            readConfiguration: function () { return perform_compile_1.readConfiguration(configFileName, existingOptions); },
            createEmitCallback: function (options) { return createEmitCallback ? createEmitCallback(options) : undefined; },
            onFileChange: function (options, listener, ready) {
                if (!options.basePath) {
                    reportDiagnostics([{
                            category: ts.DiagnosticCategory.Error,
                            messageText: 'Invalid configuration option. baseDir not specified',
                            source: api.SOURCE,
                            code: api.DEFAULT_ERROR_CODE
                        }]);
                    return { close: function () { } };
                }
                var watcher = chokidar.watch(options.basePath, {
                    // ignore .dotfiles, .js and .map files.
                    // can't ignore other files as we e.g. want to recompile if an `.html` file changes as well.
                    ignored: /((^[\/\\])\..)|(\.js$)|(\.map$)|(\.metadata\.json|node_modules)/,
                    ignoreInitial: true,
                    persistent: true,
                });
                watcher.on('all', function (event, path) {
                    switch (event) {
                        case 'change':
                            listener(FileChangeEvent.Change, path);
                            break;
                        case 'unlink':
                        case 'add':
                            listener(FileChangeEvent.CreateDelete, path);
                            break;
                        case 'unlinkDir':
                        case 'addDir':
                            listener(FileChangeEvent.CreateDeleteDir, path);
                            break;
                    }
                });
                watcher.on('ready', ready);
                return { close: function () { return watcher.close(); }, ready: ready };
            },
            setTimeout: (ts.sys.clearTimeout && ts.sys.setTimeout) || setTimeout,
            clearTimeout: (ts.sys.setTimeout && ts.sys.clearTimeout) || clearTimeout,
        };
    }
    exports.createPerformWatchHost = createPerformWatchHost;
    /**
     * The logic in this function is adapted from `tsc.ts` from TypeScript.
     */
    function performWatchCompilation(host) {
        var cachedProgram; // Program cached from last compilation
        var cachedCompilerHost; // CompilerHost cached from last compilation
        var cachedOptions; // CompilerOptions cached from last compilation
        var timerHandleForRecompilation; // Handle for 0.25s wait timer to trigger recompilation
        var ignoreFilesForWatch = new Set();
        var fileCache = new Map();
        var firstCompileResult = doCompilation();
        // Watch basePath, ignoring .dotfiles
        var resolveReadyPromise;
        var readyPromise = new Promise(function (resolve) { return resolveReadyPromise = resolve; });
        // Note: ! is ok as options are filled after the first compilation
        // Note: ! is ok as resolvedReadyPromise is filled by the previous call
        var fileWatcher = host.onFileChange(cachedOptions.options, watchedFileChanged, resolveReadyPromise);
        return { close: close, ready: function (cb) { return readyPromise.then(cb); }, firstCompileResult: firstCompileResult };
        function cacheEntry(fileName) {
            fileName = path.normalize(fileName);
            var entry = fileCache.get(fileName);
            if (!entry) {
                entry = {};
                fileCache.set(fileName, entry);
            }
            return entry;
        }
        function close() {
            fileWatcher.close();
            if (timerHandleForRecompilation) {
                host.clearTimeout(timerHandleForRecompilation.timerHandle);
                timerHandleForRecompilation = undefined;
            }
        }
        // Invoked to perform initial compilation or re-compilation in watch mode
        function doCompilation() {
            if (!cachedOptions) {
                cachedOptions = host.readConfiguration();
            }
            if (cachedOptions.errors && cachedOptions.errors.length) {
                host.reportDiagnostics(cachedOptions.errors);
                return cachedOptions.errors;
            }
            var startTime = Date.now();
            if (!cachedCompilerHost) {
                cachedCompilerHost = host.createCompilerHost(cachedOptions.options);
                var originalWriteFileCallback_1 = cachedCompilerHost.writeFile;
                cachedCompilerHost.writeFile = function (fileName, data, writeByteOrderMark, onError, sourceFiles) {
                    if (sourceFiles === void 0) { sourceFiles = []; }
                    ignoreFilesForWatch.add(path.normalize(fileName));
                    return originalWriteFileCallback_1(fileName, data, writeByteOrderMark, onError, sourceFiles);
                };
                var originalFileExists_1 = cachedCompilerHost.fileExists;
                cachedCompilerHost.fileExists = function (fileName) {
                    var ce = cacheEntry(fileName);
                    if (ce.exists == null) {
                        ce.exists = originalFileExists_1.call(this, fileName);
                    }
                    return ce.exists;
                };
                var originalGetSourceFile_1 = cachedCompilerHost.getSourceFile;
                cachedCompilerHost.getSourceFile = function (fileName, languageVersion) {
                    var ce = cacheEntry(fileName);
                    if (!ce.sf) {
                        ce.sf = originalGetSourceFile_1.call(this, fileName, languageVersion);
                    }
                    return ce.sf;
                };
                var originalReadFile_1 = cachedCompilerHost.readFile;
                cachedCompilerHost.readFile = function (fileName) {
                    var ce = cacheEntry(fileName);
                    if (ce.content == null) {
                        ce.content = originalReadFile_1.call(this, fileName);
                    }
                    return ce.content;
                };
                // Provide access to the file paths that triggered this rebuild
                cachedCompilerHost.getModifiedResourceFiles = function () {
                    if (timerHandleForRecompilation === undefined) {
                        return undefined;
                    }
                    return timerHandleForRecompilation.modifiedResourceFiles;
                };
            }
            ignoreFilesForWatch.clear();
            var oldProgram = cachedProgram;
            // We clear out the `cachedProgram` here as a
            // program can only be used as `oldProgram` 1x
            cachedProgram = undefined;
            var compileResult = perform_compile_1.performCompilation({
                rootNames: cachedOptions.rootNames,
                options: cachedOptions.options,
                host: cachedCompilerHost,
                oldProgram: oldProgram,
                emitCallback: host.createEmitCallback(cachedOptions.options)
            });
            if (compileResult.diagnostics.length) {
                host.reportDiagnostics(compileResult.diagnostics);
            }
            var endTime = Date.now();
            if (cachedOptions.options.diagnostics) {
                var totalTime = (endTime - startTime) / 1000;
                host.reportDiagnostics([totalCompilationTimeDiagnostic(endTime - startTime)]);
            }
            var exitCode = perform_compile_1.exitCodeFromResult(compileResult.diagnostics);
            if (exitCode == 0) {
                cachedProgram = compileResult.program;
                host.reportDiagnostics([util_1.createMessageDiagnostic('Compilation complete. Watching for file changes.')]);
            }
            else {
                host.reportDiagnostics([util_1.createMessageDiagnostic('Compilation failed. Watching for file changes.')]);
            }
            return compileResult.diagnostics;
        }
        function resetOptions() {
            cachedProgram = undefined;
            cachedCompilerHost = undefined;
            cachedOptions = undefined;
        }
        function watchedFileChanged(event, fileName) {
            var normalizedPath = path.normalize(fileName);
            if (cachedOptions && event === FileChangeEvent.Change &&
                // TODO(chuckj): validate that this is sufficient to skip files that were written.
                // This assumes that the file path we write is the same file path we will receive in the
                // change notification.
                normalizedPath === path.normalize(cachedOptions.project)) {
                // If the configuration file changes, forget everything and start the recompilation timer
                resetOptions();
            }
            else if (event === FileChangeEvent.CreateDelete || event === FileChangeEvent.CreateDeleteDir) {
                // If a file was added or removed, reread the configuration
                // to determine the new list of root files.
                cachedOptions = undefined;
            }
            if (event === FileChangeEvent.CreateDeleteDir) {
                fileCache.clear();
            }
            else {
                fileCache.delete(normalizedPath);
            }
            if (!ignoreFilesForWatch.has(normalizedPath)) {
                // Ignore the file if the file is one that was written by the compiler.
                startTimerForRecompilation(normalizedPath);
            }
        }
        // Upon detecting a file change, wait for 250ms and then perform a recompilation. This gives batch
        // operations (such as saving all modified files in an editor) a chance to complete before we kick
        // off a new compilation.
        function startTimerForRecompilation(changedPath) {
            if (timerHandleForRecompilation) {
                host.clearTimeout(timerHandleForRecompilation.timerHandle);
            }
            else {
                timerHandleForRecompilation = {
                    modifiedResourceFiles: new Set(),
                    timerHandle: undefined
                };
            }
            timerHandleForRecompilation.timerHandle = host.setTimeout(recompile, 250);
            timerHandleForRecompilation.modifiedResourceFiles.add(changedPath);
        }
        function recompile() {
            host.reportDiagnostics([util_1.createMessageDiagnostic('File change detected. Starting incremental compilation.')]);
            doCompilation();
            timerHandleForRecompilation = undefined;
        }
    }
    exports.performWatchCompilation = performWatchCompilation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybV93YXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvcGVyZm9ybV93YXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILG1DQUFxQztJQUNyQywyQkFBNkI7SUFDN0IsK0JBQWlDO0lBRWpDLDZFQUF3SjtJQUN4SixnRUFBMEM7SUFDMUMsb0ZBQStEO0lBQy9ELG9FQUE0RDtJQUU1RCxTQUFTLDhCQUE4QixDQUFDLFlBQW9CO1FBQzFELElBQUksUUFBZ0IsQ0FBQztRQUNyQixJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUU7WUFDdkIsUUFBUSxHQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxRQUFRLEdBQU0sWUFBWSxPQUFJLENBQUM7U0FDaEM7UUFDRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1lBQ3ZDLFdBQVcsRUFBRSxpQkFBZSxRQUFVO1lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsa0JBQWtCO1lBQzVCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQVksZUFJWDtJQUpELFdBQVksZUFBZTtRQUN6Qix5REFBTSxDQUFBO1FBQ04scUVBQVksQ0FBQTtRQUNaLDJFQUFlLENBQUE7SUFDakIsQ0FBQyxFQUpXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBSTFCO0lBY0QsU0FBZ0Isc0JBQXNCLENBQ2xDLGNBQXNCLEVBQUUsaUJBQXFELEVBQzdFLGVBQW9DLEVBQ3BDLGtCQUNrQztRQUNwQyxPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQ3BDLGtCQUFrQixFQUFFLFVBQUEsT0FBTyxJQUFJ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MkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUQ7aUJBQU07Z0JBQ0wsMkJBQTJCLEdBQUc7b0JBQzVCLHFCQUFxQixFQUFFLElBQUksR0FBRyxFQUFVO29CQUN4QyxXQUFXLEVBQUUsU0FBUztpQkFDdkIsQ0FBQzthQUNIO1lBQ0QsMkJBQTJCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFFLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRUQsU0FBUyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FDbEIsQ0FBQyw4QkFBdUIsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixhQUFhLEVBQUUsQ0FBQztZQUNoQiwyQkFBMkIsR0FBRyxTQUFTLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7SUF6TEQsMERBeUxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBjaG9raWRhciBmcm9tICdjaG9raWRhcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RGlhZ25vc3RpY3MsIGV4aXRDb2RlRnJvbVJlc3VsdCwgUGFyc2VkQ29uZmlndXJhdGlvbiwgcGVyZm9ybUNvbXBpbGF0aW9uLCBQZXJmb3JtQ29tcGlsYXRpb25SZXN1bHQsIHJlYWRDb25maWd1cmF0aW9ufSBmcm9tICcuL3BlcmZvcm1fY29tcGlsZSc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBpJztcbmltcG9ydCB7Y3JlYXRlQ29tcGlsZXJIb3N0fSBmcm9tICcuL3RyYW5zZm9ybWVycy9lbnRyeV9wb2ludHMnO1xuaW1wb3J0IHtjcmVhdGVNZXNzYWdlRGlhZ25vc3RpY30gZnJvbSAnLi90cmFuc2Zvcm1lcnMvdXRpbCc7XG5cbmZ1bmN0aW9uIHRvdGFsQ29tcGlsYXRpb25UaW1lRGlhZ25vc3RpYyh0aW1lSW5NaWxsaXM6IG51bWJlcik6IGFwaS5EaWFnbm9zdGljIHtcbiAgbGV0IGR1cmF0aW9uOiBzdHJpbmc7XG4gIGlmICh0aW1lSW5NaWxsaXMgPiAxMDAwKSB7XG4gICAgZHVyYXRpb24gPSBgJHsodGltZUluTWlsbGlzIC8gMTAwMCkudG9QcmVjaXNpb24oMil9c2A7XG4gIH0gZWxzZSB7XG4gICAgZHVyYXRpb24gPSBgJHt0aW1lSW5NaWxsaXN9bXNgO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5NZXNzYWdlLFxuICAgIG1lc3NhZ2VUZXh0OiBgVG90YWwgdGltZTogJHtkdXJhdGlvbn1gLFxuICAgIGNvZGU6IGFwaS5ERUZBVUxUX0VSUk9SX0NPREUsXG4gICAgc291cmNlOiBhcGkuU09VUkNFLFxuICB9O1xufVxuXG5leHBvcnQgZW51bSBGaWxlQ2hhbmdlRXZlbnQge1xuICBDaGFuZ2UsXG4gIENyZWF0ZURlbGV0ZSxcbiAgQ3JlYXRlRGVsZXRlRGlyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmZvcm1XYXRjaEhvc3Qge1xuICByZXBvcnREaWFnbm9zdGljcyhkaWFnbm9zdGljczogRGlhZ25vc3RpY3MpOiB2b2lkO1xuICByZWFkQ29uZmlndXJhdGlvbigpOiBQYXJzZWRDb25maWd1cmF0aW9uO1xuICBjcmVhdGVDb21waWxlckhvc3Qob3B0aW9uczogYXBpLkNvbXBpbGVyT3B0aW9ucyk6IGFwaS5Db21waWxlckhvc3Q7XG4gIGNyZWF0ZUVtaXRDYWxsYmFjayhvcHRpb25zOiBhcGkuQ29tcGlsZXJPcHRpb25zKTogYXBpLlRzRW1pdENhbGxiYWNrfHVuZGVmaW5lZDtcbiAgb25GaWxlQ2hhbmdlKFxuICAgICAgb3B0aW9uczogYXBpLkNvbXBpbGVyT3B0aW9ucywgbGlzdGVuZXI6IChldmVudDogRmlsZUNoYW5nZUV2ZW50LCBmaWxlTmFtZTogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgcmVhZHk6ICgpID0+IHZvaWQpOiB7Y2xvc2U6ICgpID0+IHZvaWR9O1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrOiAoKSA9PiB2b2lkLCBtczogbnVtYmVyKTogYW55O1xuICBjbGVhclRpbWVvdXQodGltZW91dElkOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGVyZm9ybVdhdGNoSG9zdChcbiAgICBjb25maWdGaWxlTmFtZTogc3RyaW5nLCByZXBvcnREaWFnbm9zdGljczogKGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcykgPT4gdm9pZCxcbiAgICBleGlzdGluZ09wdGlvbnM/OiB0cy5Db21waWxlck9wdGlvbnMsXG4gICAgY3JlYXRlRW1pdENhbGxiYWNrPzogKG9wdGlvbnM6IGFwaS5Db21waWxlck9wdGlvbnMpID0+XG4gICAgICAgIGFwaS5Uc0VtaXRDYWxsYmFjayB8IHVuZGVmaW5lZCk6IFBlcmZvcm1XYXRjaEhvc3Qge1xuICByZXR1cm4ge1xuICAgIHJlcG9ydERpYWdub3N0aWNzOiByZXBvcnREaWFnbm9zdGljcyxcbiAgICBjcmVhdGVDb21waWxlckhvc3Q6IG9wdGlvbnMgPT4gY3JlYXRlQ29tcGlsZXJIb3N0KHtvcHRpb25zfSksXG4gICAgcmVhZENvbmZpZ3VyYXRpb246ICgpID0+IHJlYWRDb25maWd1cmF0aW9uKGNvbmZpZ0ZpbGVOYW1lLCBleGlzdGluZ09wdGlvbnMpLFxuICAgIGNyZWF0ZUVtaXRDYWxsYmFjazogb3B0aW9ucyA9PiBjcmVhdGVFbWl0Q2FsbGJhY2sgPyBjcmVhdGVFbWl0Q2FsbGJhY2sob3B0aW9ucykgOiB1bmRlZmluZWQsXG4gICAgb25GaWxlQ2hhbmdlOiAob3B0aW9ucywgbGlzdGVuZXIsIHJlYWR5OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuYmFzZVBhdGgpIHtcbiAgICAgICAgcmVwb3J0RGlhZ25vc3RpY3MoW3tcbiAgICAgICAgICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yLFxuICAgICAgICAgIG1lc3NhZ2VUZXh0OiAnSW52YWxpZCBjb25maWd1cmF0aW9uIG9wdGlvbi4gYmFzZURpciBub3Qgc3BlY2lmaWVkJyxcbiAgICAgICAgICBzb3VyY2U6IGFwaS5TT1VSQ0UsXG4gICAgICAgICAgY29kZTogYXBpLkRFRkFVTFRfRVJST1JfQ09ERVxuICAgICAgICB9XSk7XG4gICAgICAgIHJldHVybiB7Y2xvc2U6ICgpID0+IHt9fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaChvcHRpb25zLmJhc2VQYXRoLCB7XG4gICAgICAgIC8vIGlnbm9yZSAuZG90ZmlsZXMsIC5qcyBhbmQgLm1hcCBmaWxlcy5cbiAgICAgICAgLy8gY2FuJ3QgaWdub3JlIG90aGVyIGZpbGVzIGFzIHdlIGUuZy4gd2FudCB0byByZWNvbXBpbGUgaWYgYW4gYC5odG1sYCBmaWxlIGNoYW5nZXMgYXMgd2VsbC5cbiAgICAgICAgaWdub3JlZDogLygoXltcXC9cXFxcXSlcXC4uKXwoXFwuanMkKXwoXFwubWFwJCl8KFxcLm1ldGFkYXRhXFwuanNvbnxub2RlX21vZHVsZXMpLyxcbiAgICAgICAgaWdub3JlSW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgd2F0Y2hlci5vbignYWxsJywgKGV2ZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgY2FzZSAnY2hhbmdlJzpcbiAgICAgICAgICAgIGxpc3RlbmVyKEZpbGVDaGFuZ2VFdmVudC5DaGFuZ2UsIHBhdGgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5saW5rJzpcbiAgICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgbGlzdGVuZXIoRmlsZUNoYW5nZUV2ZW50LkNyZWF0ZURlbGV0ZSwgcGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd1bmxpbmtEaXInOlxuICAgICAgICAgIGNhc2UgJ2FkZERpcic6XG4gICAgICAgICAgICBsaXN0ZW5lcihGaWxlQ2hhbmdlRXZlbnQuQ3JlYXRlRGVsZXRlRGlyLCBwYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdhdGNoZXIub24oJ3JlYWR5JywgcmVhZHkpO1xuICAgICAgcmV0dXJuIHtjbG9zZTogKCkgPT4gd2F0Y2hlci5jbG9zZSgpLCByZWFkeX07XG4gICAgfSxcbiAgICBzZXRUaW1lb3V0OiAodHMuc3lzLmNsZWFyVGltZW91dCAmJiB0cy5zeXMuc2V0VGltZW91dCkgfHwgc2V0VGltZW91dCxcbiAgICBjbGVhclRpbWVvdXQ6ICh0cy5zeXMuc2V0VGltZW91dCAmJiB0cy5zeXMuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQsXG4gIH07XG59XG5cbmludGVyZmFjZSBDYWNoZUVudHJ5IHtcbiAgZXhpc3RzPzogYm9vbGVhbjtcbiAgc2Y/OiB0cy5Tb3VyY2VGaWxlO1xuICBjb250ZW50Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVldWVkQ29tcGlsYXRpb25JbmZvIHtcbiAgdGltZXJIYW5kbGU6IGFueTtcbiAgbW9kaWZpZWRSZXNvdXJjZUZpbGVzOiBTZXQ8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBUaGUgbG9naWMgaW4gdGhpcyBmdW5jdGlvbiBpcyBhZGFwdGVkIGZyb20gYHRzYy50c2AgZnJvbSBUeXBlU2NyaXB0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybVdhdGNoQ29tcGlsYXRpb24oaG9zdDogUGVyZm9ybVdhdGNoSG9zdCk6XG4gICAge2Nsb3NlOiAoKSA9PiB2b2lkLCByZWFkeTogKGNiOiAoKSA9PiB2b2lkKSA9PiB2b2lkLCBmaXJzdENvbXBpbGVSZXN1bHQ6IERpYWdub3N0aWNzfSB7XG4gIGxldCBjYWNoZWRQcm9ncmFtOiBhcGkuUHJvZ3JhbXx1bmRlZmluZWQ7ICAgICAgICAgICAgLy8gUHJvZ3JhbSBjYWNoZWQgZnJvbSBsYXN0IGNvbXBpbGF0aW9uXG4gIGxldCBjYWNoZWRDb21waWxlckhvc3Q6IGFwaS5Db21waWxlckhvc3R8dW5kZWZpbmVkOyAgLy8gQ29tcGlsZXJIb3N0IGNhY2hlZCBmcm9tIGxhc3QgY29tcGlsYXRpb25cbiAgbGV0IGNhY2hlZE9wdGlvbnM6IFBhcnNlZENvbmZpZ3VyYXRpb258dW5kZWZpbmVkOyAgLy8gQ29tcGlsZXJPcHRpb25zIGNhY2hlZCBmcm9tIGxhc3QgY29tcGlsYXRpb25cbiAgbGV0IHRpbWVySGFuZGxlRm9yUmVjb21waWxhdGlvbjogUXVldWVkQ29tcGlsYXRpb25JbmZvfFxuICAgICAgdW5kZWZpbmVkOyAgLy8gSGFuZGxlIGZvciAwLjI1cyB3YWl0IHRpbWVyIHRvIHRyaWdnZXIgcmVjb21waWxhdGlvblxuXG4gIGNvbnN0IGlnbm9yZUZpbGVzRm9yV2F0Y2ggPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgZmlsZUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlRW50cnk+KCk7XG5cbiAgY29uc3QgZmlyc3RDb21waWxlUmVzdWx0ID0gZG9Db21waWxhdGlvbigpO1xuXG4gIC8vIFdhdGNoIGJhc2VQYXRoLCBpZ25vcmluZyAuZG90ZmlsZXNcbiAgbGV0IHJlc29sdmVSZWFkeVByb21pc2U6ICgpID0+IHZvaWQ7XG4gIGNvbnN0IHJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZVJlYWR5UHJvbWlzZSA9IHJlc29sdmUpO1xuICAvLyBOb3RlOiAhIGlzIG9rIGFzIG9wdGlvbnMgYXJlIGZpbGxlZCBhZnRlciB0aGUgZmlyc3QgY29tcGlsYXRpb25cbiAgLy8gTm90ZTogISBpcyBvayBhcyByZXNvbHZlZFJlYWR5UHJvbWlzZSBpcyBmaWxsZWQgYnkgdGhlIHByZXZpb3VzIGNhbGxcbiAgY29uc3QgZmlsZVdhdGNoZXIgPVxuICAgICAgaG9zdC5vbkZpbGVDaGFuZ2UoY2FjaGVkT3B0aW9ucyEub3B0aW9ucywgd2F0Y2hlZEZpbGVDaGFuZ2VkLCByZXNvbHZlUmVhZHlQcm9taXNlISk7XG5cbiAgcmV0dXJuIHtjbG9zZSwgcmVhZHk6IGNiID0+IHJlYWR5UHJvbWlzZS50aGVuKGNiKSwgZmlyc3RDb21waWxlUmVzdWx0fTtcblxuICBmdW5jdGlvbiBjYWNoZUVudHJ5KGZpbGVOYW1lOiBzdHJpbmcpOiBDYWNoZUVudHJ5IHtcbiAgICBmaWxlTmFtZSA9IHBhdGgubm9ybWFsaXplKGZpbGVOYW1lKTtcbiAgICBsZXQgZW50cnkgPSBmaWxlQ2FjaGUuZ2V0KGZpbGVOYW1lKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IHt9O1xuICAgICAgZmlsZUNhY2hlLnNldChmaWxlTmFtZSwgZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBmaWxlV2F0Y2hlci5jbG9zZSgpO1xuICAgIGlmICh0aW1lckhhbmRsZUZvclJlY29tcGlsYXRpb24pIHtcbiAgICAgIGhvc3QuY2xlYXJUaW1lb3V0KHRpbWVySGFuZGxlRm9yUmVjb21waWxhdGlvbi50aW1lckhhbmRsZSk7XG4gICAgICB0aW1lckhhbmRsZUZvclJlY29tcGlsYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlZCB0byBwZXJmb3JtIGluaXRpYWwgY29tcGlsYXRpb24gb3IgcmUtY29tcGlsYXRpb24gaW4gd2F0Y2ggbW9kZVxuICBmdW5jdGlvbiBkb0NvbXBpbGF0aW9uKCk6IERpYWdub3N0aWNzIHtcbiAgICBpZiAoIWNhY2hlZE9wdGlvbnMpIHtcbiAgICAgIGNhY2hlZE9wdGlvbnMgPSBob3N0LnJlYWRDb25maWd1cmF0aW9uKCk7XG4gICAgfVxuICAgIGlmIChjYWNoZWRPcHRpb25zLmVycm9ycyAmJiBjYWNoZWRPcHRpb25zLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGhvc3QucmVwb3J0RGlhZ25vc3RpY3MoY2FjaGVkT3B0aW9ucy5lcnJvcnMpO1xuICAgICAgcmV0dXJuIGNhY2hlZE9wdGlvbnMuZXJyb3JzO1xuICAgIH1cbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICghY2FjaGVkQ29tcGlsZXJIb3N0KSB7XG4gICAgICBjYWNoZWRDb21waWxlckhvc3QgPSBob3N0LmNyZWF0ZUNvbXBpbGVySG9zdChjYWNoZWRPcHRpb25zLm9wdGlvbnMpO1xuICAgICAgY29uc3Qgb3JpZ2luYWxXcml0ZUZpbGVDYWxsYmFjayA9IGNhY2hlZENvbXBpbGVySG9zdC53cml0ZUZpbGU7XG4gICAgICBjYWNoZWRDb21waWxlckhvc3Qud3JpdGVGaWxlID0gZnVuY3Rpb24oXG4gICAgICAgICAgZmlsZU5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nLCB3cml0ZUJ5dGVPcmRlck1hcms6IGJvb2xlYW4sXG4gICAgICAgICAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQsIHNvdXJjZUZpbGVzOiBSZWFkb25seUFycmF5PHRzLlNvdXJjZUZpbGU+ID0gW10pIHtcbiAgICAgICAgaWdub3JlRmlsZXNGb3JXYXRjaC5hZGQocGF0aC5ub3JtYWxpemUoZmlsZU5hbWUpKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsV3JpdGVGaWxlQ2FsbGJhY2soZmlsZU5hbWUsIGRhdGEsIHdyaXRlQnl0ZU9yZGVyTWFyaywgb25FcnJvciwgc291cmNlRmlsZXMpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZUV4aXN0cyA9IGNhY2hlZENvbXBpbGVySG9zdC5maWxlRXhpc3RzO1xuICAgICAgY2FjaGVkQ29tcGlsZXJIb3N0LmZpbGVFeGlzdHMgPSBmdW5jdGlvbihmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNlID0gY2FjaGVFbnRyeShmaWxlTmFtZSk7XG4gICAgICAgIGlmIChjZS5leGlzdHMgPT0gbnVsbCkge1xuICAgICAgICAgIGNlLmV4aXN0cyA9IG9yaWdpbmFsRmlsZUV4aXN0cy5jYWxsKHRoaXMsIGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2UuZXhpc3RzITtcbiAgICAgIH07XG4gICAgICBjb25zdCBvcmlnaW5hbEdldFNvdXJjZUZpbGUgPSBjYWNoZWRDb21waWxlckhvc3QuZ2V0U291cmNlRmlsZTtcbiAgICAgIGNhY2hlZENvbXBpbGVySG9zdC5nZXRTb3VyY2VGaWxlID0gZnVuY3Rpb24oXG4gICAgICAgICAgZmlsZU5hbWU6IHN0cmluZywgbGFuZ3VhZ2VWZXJzaW9uOiB0cy5TY3JpcHRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgY2UgPSBjYWNoZUVudHJ5KGZpbGVOYW1lKTtcbiAgICAgICAgaWYgKCFjZS5zZikge1xuICAgICAgICAgIGNlLnNmID0gb3JpZ2luYWxHZXRTb3VyY2VGaWxlLmNhbGwodGhpcywgZmlsZU5hbWUsIGxhbmd1YWdlVmVyc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlLnNmITtcbiAgICAgIH07XG4gICAgICBjb25zdCBvcmlnaW5hbFJlYWRGaWxlID0gY2FjaGVkQ29tcGlsZXJIb3N0LnJlYWRGaWxlO1xuICAgICAgY2FjaGVkQ29tcGlsZXJIb3N0LnJlYWRGaWxlID0gZnVuY3Rpb24oZmlsZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjZSA9IGNhY2hlRW50cnkoZmlsZU5hbWUpO1xuICAgICAgICBpZiAoY2UuY29udGVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY2UuY29udGVudCA9IG9yaWdpbmFsUmVhZEZpbGUuY2FsbCh0aGlzLCBmaWxlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlLmNvbnRlbnQhO1xuICAgICAgfTtcbiAgICAgIC8vIFByb3ZpZGUgYWNjZXNzIHRvIHRoZSBmaWxlIHBhdGhzIHRoYXQgdHJpZ2dlcmVkIHRoaXMgcmVidWlsZFxuICAgICAgY2FjaGVkQ29tcGlsZXJIb3N0LmdldE1vZGlmaWVkUmVzb3VyY2VGaWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGltZXJIYW5kbGVGb3JSZWNvbXBpbGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lckhhbmRsZUZvclJlY29tcGlsYXRpb24ubW9kaWZpZWRSZXNvdXJjZUZpbGVzO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWdub3JlRmlsZXNGb3JXYXRjaC5jbGVhcigpO1xuICAgIGNvbnN0IG9sZFByb2dyYW0gPSBjYWNoZWRQcm9ncmFtO1xuICAgIC8vIFdlIGNsZWFyIG91dCB0aGUgYGNhY2hlZFByb2dyYW1gIGhlcmUgYXMgYVxuICAgIC8vIHByb2dyYW0gY2FuIG9ubHkgYmUgdXNlZCBhcyBgb2xkUHJvZ3JhbWAgMXhcbiAgICBjYWNoZWRQcm9ncmFtID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbXBpbGVSZXN1bHQgPSBwZXJmb3JtQ29tcGlsYXRpb24oe1xuICAgICAgcm9vdE5hbWVzOiBjYWNoZWRPcHRpb25zLnJvb3ROYW1lcyxcbiAgICAgIG9wdGlvbnM6IGNhY2hlZE9wdGlvbnMub3B0aW9ucyxcbiAgICAgIGhvc3Q6IGNhY2hlZENvbXBpbGVySG9zdCxcbiAgICAgIG9sZFByb2dyYW06IG9sZFByb2dyYW0sXG4gICAgICBlbWl0Q2FsbGJhY2s6IGhvc3QuY3JlYXRlRW1pdENhbGxiYWNrKGNhY2hlZE9wdGlvbnMub3B0aW9ucylcbiAgICB9KTtcblxuICAgIGlmIChjb21waWxlUmVzdWx0LmRpYWdub3N0aWNzLmxlbmd0aCkge1xuICAgICAgaG9zdC5yZXBvcnREaWFnbm9zdGljcyhjb21waWxlUmVzdWx0LmRpYWdub3N0aWNzKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoY2FjaGVkT3B0aW9ucy5vcHRpb25zLmRpYWdub3N0aWNzKSB7XG4gICAgICBjb25zdCB0b3RhbFRpbWUgPSAoZW5kVGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xuICAgICAgaG9zdC5yZXBvcnREaWFnbm9zdGljcyhbdG90YWxDb21waWxhdGlvblRpbWVEaWFnbm9zdGljKGVuZFRpbWUgLSBzdGFydFRpbWUpXSk7XG4gICAgfVxuICAgIGNvbnN0IGV4aXRDb2RlID0gZXhpdENvZGVGcm9tUmVzdWx0KGNvbXBpbGVSZXN1bHQuZGlhZ25vc3RpY3MpO1xuICAgIGlmIChleGl0Q29kZSA9PSAwKSB7XG4gICAgICBjYWNoZWRQcm9ncmFtID0gY29tcGlsZVJlc3VsdC5wcm9ncmFtO1xuICAgICAgaG9zdC5yZXBvcnREaWFnbm9zdGljcyhcbiAgICAgICAgICBbY3JlYXRlTWVzc2FnZURpYWdub3N0aWMoJ0NvbXBpbGF0aW9uIGNvbXBsZXRlLiBXYXRjaGluZyBmb3IgZmlsZSBjaGFuZ2VzLicpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvc3QucmVwb3J0RGlhZ25vc3RpY3MoXG4gICAgICAgICAgW2NyZWF0ZU1lc3NhZ2VEaWFnbm9zdGljKCdDb21waWxhdGlvbiBmYWlsZWQuIFdhdGNoaW5nIGZvciBmaWxlIGNoYW5nZXMuJyldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGlsZVJlc3VsdC5kaWFnbm9zdGljcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0T3B0aW9ucygpIHtcbiAgICBjYWNoZWRQcm9ncmFtID0gdW5kZWZpbmVkO1xuICAgIGNhY2hlZENvbXBpbGVySG9zdCA9IHVuZGVmaW5lZDtcbiAgICBjYWNoZWRPcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gd2F0Y2hlZEZpbGVDaGFuZ2VkKGV2ZW50OiBGaWxlQ2hhbmdlRXZlbnQsIGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IHBhdGgubm9ybWFsaXplKGZpbGVOYW1lKTtcblxuICAgIGlmIChjYWNoZWRPcHRpb25zICYmIGV2ZW50ID09PSBGaWxlQ2hhbmdlRXZlbnQuQ2hhbmdlICYmXG4gICAgICAgIC8vIFRPRE8oY2h1Y2tqKTogdmFsaWRhdGUgdGhhdCB0aGlzIGlzIHN1ZmZpY2llbnQgdG8gc2tpcCBmaWxlcyB0aGF0IHdlcmUgd3JpdHRlbi5cbiAgICAgICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgdGhlIGZpbGUgcGF0aCB3ZSB3cml0ZSBpcyB0aGUgc2FtZSBmaWxlIHBhdGggd2Ugd2lsbCByZWNlaXZlIGluIHRoZVxuICAgICAgICAvLyBjaGFuZ2Ugbm90aWZpY2F0aW9uLlxuICAgICAgICBub3JtYWxpemVkUGF0aCA9PT0gcGF0aC5ub3JtYWxpemUoY2FjaGVkT3B0aW9ucy5wcm9qZWN0KSkge1xuICAgICAgLy8gSWYgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBjaGFuZ2VzLCBmb3JnZXQgZXZlcnl0aGluZyBhbmQgc3RhcnQgdGhlIHJlY29tcGlsYXRpb24gdGltZXJcbiAgICAgIHJlc2V0T3B0aW9ucygpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGV2ZW50ID09PSBGaWxlQ2hhbmdlRXZlbnQuQ3JlYXRlRGVsZXRlIHx8IGV2ZW50ID09PSBGaWxlQ2hhbmdlRXZlbnQuQ3JlYXRlRGVsZXRlRGlyKSB7XG4gICAgICAvLyBJZiBhIGZpbGUgd2FzIGFkZGVkIG9yIHJlbW92ZWQsIHJlcmVhZCB0aGUgY29uZmlndXJhdGlvblxuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBuZXcgbGlzdCBvZiByb290IGZpbGVzLlxuICAgICAgY2FjaGVkT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQgPT09IEZpbGVDaGFuZ2VFdmVudC5DcmVhdGVEZWxldGVEaXIpIHtcbiAgICAgIGZpbGVDYWNoZS5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlQ2FjaGUuZGVsZXRlKG5vcm1hbGl6ZWRQYXRoKTtcbiAgICB9XG5cbiAgICBpZiAoIWlnbm9yZUZpbGVzRm9yV2F0Y2guaGFzKG5vcm1hbGl6ZWRQYXRoKSkge1xuICAgICAgLy8gSWdub3JlIHRoZSBmaWxlIGlmIHRoZSBmaWxlIGlzIG9uZSB0aGF0IHdhcyB3cml0dGVuIGJ5IHRoZSBjb21waWxlci5cbiAgICAgIHN0YXJ0VGltZXJGb3JSZWNvbXBpbGF0aW9uKG5vcm1hbGl6ZWRQYXRoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcG9uIGRldGVjdGluZyBhIGZpbGUgY2hhbmdlLCB3YWl0IGZvciAyNTBtcyBhbmQgdGhlbiBwZXJmb3JtIGEgcmVjb21waWxhdGlvbi4gVGhpcyBnaXZlcyBiYXRjaFxuICAvLyBvcGVyYXRpb25zIChzdWNoIGFzIHNhdmluZyBhbGwgbW9kaWZpZWQgZmlsZXMgaW4gYW4gZWRpdG9yKSBhIGNoYW5jZSB0byBjb21wbGV0ZSBiZWZvcmUgd2Uga2lja1xuICAvLyBvZmYgYSBuZXcgY29tcGlsYXRpb24uXG4gIGZ1bmN0aW9uIHN0YXJ0VGltZXJGb3JSZWNvbXBpbGF0aW9uKGNoYW5nZWRQYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAodGltZXJIYW5kbGVGb3JSZWNvbXBpbGF0aW9uKSB7XG4gICAgICBob3N0LmNsZWFyVGltZW91dCh0aW1lckhhbmRsZUZvclJlY29tcGlsYXRpb24udGltZXJIYW5kbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lckhhbmRsZUZvclJlY29tcGlsYXRpb24gPSB7XG4gICAgICAgIG1vZGlmaWVkUmVzb3VyY2VGaWxlczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgICAgIHRpbWVySGFuZGxlOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIHRpbWVySGFuZGxlRm9yUmVjb21waWxhdGlvbi50aW1lckhhbmRsZSA9IGhvc3Quc2V0VGltZW91dChyZWNvbXBpbGUsIDI1MCk7XG4gICAgdGltZXJIYW5kbGVGb3JSZWNvbXBpbGF0aW9uLm1vZGlmaWVkUmVzb3VyY2VGaWxlcy5hZGQoY2hhbmdlZFBhdGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjb21waWxlKCkge1xuICAgIGhvc3QucmVwb3J0RGlhZ25vc3RpY3MoXG4gICAgICAgIFtjcmVhdGVNZXNzYWdlRGlhZ25vc3RpYygnRmlsZSBjaGFuZ2UgZGV0ZWN0ZWQuIFN0YXJ0aW5nIGluY3JlbWVudGFsIGNvbXBpbGF0aW9uLicpXSk7XG4gICAgZG9Db21waWxhdGlvbigpO1xuICAgIHRpbWVySGFuZGxlRm9yUmVjb21waWxhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19