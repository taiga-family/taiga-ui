#!/usr/bin/env node
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
        define("@angular/compiler-cli/src/main", ["require", "exports", "tslib", "reflect-metadata", "typescript", "@angular/compiler-cli/src/transformers/api", "@angular/compiler-cli/src/transformers/util", "@angular/compiler-cli/src/perform_compile", "@angular/compiler-cli/src/perform_watch", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    // Must be imported first, because Angular decorators throw on load.
    require("reflect-metadata");
    var ts = require("typescript");
    var api = require("@angular/compiler-cli/src/transformers/api");
    var util_1 = require("@angular/compiler-cli/src/transformers/util");
    var perform_compile_1 = require("@angular/compiler-cli/src/perform_compile");
    var perform_watch_1 = require("@angular/compiler-cli/src/perform_watch");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    function main(args, consoleError, config, customTransformers, programReuse, modifiedResourceFiles) {
        if (consoleError === void 0) { consoleError = console.error; }
        var _a = config || readNgcCommandLineAndConfiguration(args), project = _a.project, rootNames = _a.rootNames, options = _a.options, configErrors = _a.errors, watch = _a.watch, emitFlags = _a.emitFlags;
        if (configErrors.length) {
            return reportErrorsAndExit(configErrors, /*options*/ undefined, consoleError);
        }
        if (watch) {
            var result = watchMode(project, options, consoleError);
            return reportErrorsAndExit(result.firstCompileResult, options, consoleError);
        }
        var oldProgram;
        if (programReuse !== undefined) {
            oldProgram = programReuse.program;
        }
        var _b = perform_compile_1.performCompilation({
            rootNames: rootNames,
            options: options,
            emitFlags: emitFlags,
            oldProgram: oldProgram,
            emitCallback: createEmitCallback(options),
            customTransformers: customTransformers,
            modifiedResourceFiles: modifiedResourceFiles
        }), compileDiags = _b.diagnostics, program = _b.program;
        if (programReuse !== undefined) {
            programReuse.program = program;
        }
        return reportErrorsAndExit(compileDiags, options, consoleError);
    }
    exports.main = main;
    function mainDiagnosticsForTest(args, config, programReuse, modifiedResourceFiles) {
        var _a = config || readNgcCommandLineAndConfiguration(args), project = _a.project, rootNames = _a.rootNames, options = _a.options, configErrors = _a.errors, watch = _a.watch, emitFlags = _a.emitFlags;
        if (configErrors.length) {
            return configErrors;
        }
        var oldProgram;
        if (programReuse !== undefined) {
            oldProgram = programReuse.program;
        }
        var _b = perform_compile_1.performCompilation({
            rootNames: rootNames,
            options: options,
            emitFlags: emitFlags,
            oldProgram: oldProgram,
            modifiedResourceFiles: modifiedResourceFiles,
            emitCallback: createEmitCallback(options),
        }), compileDiags = _b.diagnostics, program = _b.program;
        if (programReuse !== undefined) {
            programReuse.program = program;
        }
        return compileDiags;
    }
    exports.mainDiagnosticsForTest = mainDiagnosticsForTest;
    function createEmitCallback(options) {
        var transformDecorators = (options.enableIvy === false && options.annotationsAs !== 'decorators');
        var transformTypesToClosure = options.annotateForClosureCompiler;
        if (!transformDecorators && !transformTypesToClosure) {
            return undefined;
        }
        if (transformDecorators) {
            // This is needed as a workaround for https://github.com/angular/tsickle/issues/635
            // Otherwise tsickle might emit references to non imported values
            // as TypeScript elided the import.
            options.emitDecoratorMetadata = true;
        }
        var tsickleHost = {
            shouldSkipTsickleProcessing: function (fileName) { return /\.d\.ts$/.test(fileName) ||
                // View Engine's generated files were never intended to be processed with tsickle.
                (!options.enableIvy && util_1.GENERATED_FILES.test(fileName)); },
            pathToModuleName: function (context, importPath) { return ''; },
            shouldIgnoreWarningsForPath: function (filePath) { return false; },
            fileNameToModuleId: function (fileName) { return fileName; },
            googmodule: false,
            untyped: true,
            convertIndexImportShorthand: false,
            transformDecorators: transformDecorators,
            transformTypesToClosure: transformTypesToClosure,
        };
        if (options.annotateForClosureCompiler || options.annotationsAs === 'static fields') {
            return function (_a) {
                var program = _a.program, targetSourceFile = _a.targetSourceFile, writeFile = _a.writeFile, cancellationToken = _a.cancellationToken, emitOnlyDtsFiles = _a.emitOnlyDtsFiles, _b = _a.customTransformers, customTransformers = _b === void 0 ? {} : _b, host = _a.host, options = _a.options;
                // tslint:disable-next-line:no-require-imports only depend on tsickle if requested
                return require('tsickle').emitWithTsickle(program, tslib_1.__assign(tslib_1.__assign({}, tsickleHost), { options: options, host: host, moduleResolutionHost: host }), host, options, targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, {
                    beforeTs: customTransformers.before,
                    afterTs: customTransformers.after,
                });
            };
        }
        else {
            return function (_a) {
                var program = _a.program, targetSourceFile = _a.targetSourceFile, writeFile = _a.writeFile, cancellationToken = _a.cancellationToken, emitOnlyDtsFiles = _a.emitOnlyDtsFiles, _b = _a.customTransformers, customTransformers = _b === void 0 ? {} : _b;
                return program.emit(targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, { after: customTransformers.after, before: customTransformers.before });
            };
        }
    }
    function readNgcCommandLineAndConfiguration(args) {
        var options = {};
        var parsedArgs = require('minimist')(args);
        if (parsedArgs.i18nFile)
            options.i18nInFile = parsedArgs.i18nFile;
        if (parsedArgs.i18nFormat)
            options.i18nInFormat = parsedArgs.i18nFormat;
        if (parsedArgs.locale)
            options.i18nInLocale = parsedArgs.locale;
        var mt = parsedArgs.missingTranslation;
        if (mt === 'error' || mt === 'warning' || mt === 'ignore') {
            options.i18nInMissingTranslations = mt;
        }
        var config = readCommandLineAndConfiguration(args, options, ['i18nFile', 'i18nFormat', 'locale', 'missingTranslation', 'watch']);
        var watch = parsedArgs.w || parsedArgs.watch;
        return tslib_1.__assign(tslib_1.__assign({}, config), { watch: watch });
    }
    exports.readNgcCommandLineAndConfiguration = readNgcCommandLineAndConfiguration;
    function readCommandLineAndConfiguration(args, existingOptions, ngCmdLineOptions) {
        if (existingOptions === void 0) { existingOptions = {}; }
        if (ngCmdLineOptions === void 0) { ngCmdLineOptions = []; }
        var cmdConfig = ts.parseCommandLine(args);
        var project = cmdConfig.options.project || '.';
        var cmdErrors = cmdConfig.errors.filter(function (e) {
            if (typeof e.messageText === 'string') {
                var msg_1 = e.messageText;
                return !ngCmdLineOptions.some(function (o) { return msg_1.indexOf(o) >= 0; });
            }
            return true;
        });
        if (cmdErrors.length) {
            return {
                project: project,
                rootNames: [],
                options: cmdConfig.options,
                errors: cmdErrors,
                emitFlags: api.EmitFlags.Default
            };
        }
        var allDiagnostics = [];
        var config = perform_compile_1.readConfiguration(project, cmdConfig.options);
        var options = tslib_1.__assign(tslib_1.__assign({}, config.options), existingOptions);
        if (options.locale) {
            options.i18nInLocale = options.locale;
        }
        return {
            project: project,
            rootNames: config.rootNames,
            options: options,
            errors: config.errors,
            emitFlags: config.emitFlags
        };
    }
    exports.readCommandLineAndConfiguration = readCommandLineAndConfiguration;
    function getFormatDiagnosticsHost(options) {
        var basePath = options ? options.basePath : undefined;
        return {
            getCurrentDirectory: function () { return basePath || ts.sys.getCurrentDirectory(); },
            // We need to normalize the path separators here because by default, TypeScript
            // compiler hosts use posix canonical paths. In order to print consistent diagnostics,
            // we also normalize the paths.
            getCanonicalFileName: function (fileName) { return fileName.replace(/\\/g, '/'); },
            getNewLine: function () {
                // Manually determine the proper new line string based on the passed compiler
                // options. There is no public TypeScript function that returns the corresponding
                // new line string. see: https://github.com/Microsoft/TypeScript/issues/29581
                if (options && options.newLine !== undefined) {
                    return options.newLine === ts.NewLineKind.LineFeed ? '\n' : '\r\n';
                }
                return ts.sys.newLine;
            },
        };
    }
    function reportErrorsAndExit(allDiagnostics, options, consoleError) {
        if (consoleError === void 0) { consoleError = console.error; }
        var errorsAndWarnings = perform_compile_1.filterErrorsAndWarnings(allDiagnostics);
        printDiagnostics(errorsAndWarnings, options, consoleError);
        return perform_compile_1.exitCodeFromResult(allDiagnostics);
    }
    function watchMode(project, options, consoleError) {
        return perform_watch_1.performWatchCompilation(perform_watch_1.createPerformWatchHost(project, function (diagnostics) {
            printDiagnostics(diagnostics, options, consoleError);
        }, options, function (options) { return createEmitCallback(options); }));
    }
    exports.watchMode = watchMode;
    function printDiagnostics(diagnostics, options, consoleError) {
        if (diagnostics.length === 0) {
            return;
        }
        var formatHost = getFormatDiagnosticsHost(options);
        consoleError(perform_compile_1.formatDiagnostics(diagnostics, formatHost));
    }
    // CLI entry point
    if (require.main === module) {
        var args = process.argv.slice(2);
        // We are running the real compiler so run against the real file-system
        file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
        process.exitCode = main(args);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsb0VBQW9FO0lBQ3BFLDRCQUEwQjtJQUUxQiwrQkFBaUM7SUFJakMsZ0VBQTBDO0lBQzFDLG9FQUFvRDtJQUVwRCw2RUFBMEs7SUFDMUsseUVBQWdGO0lBQ2hGLDJFQUFvRTtJQUVwRSxTQUFnQixJQUFJLENBQ2hCLElBQWMsRUFBRSxZQUFpRCxFQUNqRSxNQUErQixFQUFFLGtCQUEyQyxFQUFFLFlBRTdFLEVBQ0QscUJBQXdDO1FBSnhCLDZCQUFBLEVBQUEsZUFBb0MsT0FBTyxDQUFDLEtBQUs7UUFLL0QsSUFBQSx1REFDa0QsRUFEakQsb0JBQU8sRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsd0JBQW9CLEVBQUUsZ0JBQUssRUFBRSx3QkFDVCxDQUFDO1FBQ3ZELElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLG1CQUFtQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN6RCxPQUFPLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLFVBQWlDLENBQUM7UUFDdEMsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlCLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1NBQ25DO1FBRUssSUFBQTs7Ozs7Ozs7VUFRSixFQVJLLDZCQUF5QixFQUFFLG9CQVFoQyxDQUFDO1FBQ0gsSUFB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Q0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDM0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsdUVBQXVFO1FBQ3ZFLDJCQUFhLENBQUMsSUFBSSw4QkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIE11c3QgYmUgaW1wb3J0ZWQgZmlyc3QsIGJlY2F1c2UgQW5ndWxhciBkZWNvcmF0b3JzIHRocm93IG9uIGxvYWQuXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCAqIGFzIHRzaWNrbGUgZnJvbSAndHNpY2tsZSc7XG5cbmltcG9ydCB7cmVwbGFjZVRzV2l0aE5nSW5FcnJvcnN9IGZyb20gJy4vbmd0c2MvZGlhZ25vc3RpY3MnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vdHJhbnNmb3JtZXJzL2FwaSc7XG5pbXBvcnQge0dFTkVSQVRFRF9GSUxFU30gZnJvbSAnLi90cmFuc2Zvcm1lcnMvdXRpbCc7XG5cbmltcG9ydCB7ZXhpdENvZGVGcm9tUmVzdWx0LCBwZXJmb3JtQ29tcGlsYXRpb24sIHJlYWRDb25maWd1cmF0aW9uLCBmb3JtYXREaWFnbm9zdGljcywgRGlhZ25vc3RpY3MsIFBhcnNlZENvbmZpZ3VyYXRpb24sIGZpbHRlckVycm9yc0FuZFdhcm5pbmdzfSBmcm9tICcuL3BlcmZvcm1fY29tcGlsZSc7XG5pbXBvcnQge3BlcmZvcm1XYXRjaENvbXBpbGF0aW9uLMKgY3JlYXRlUGVyZm9ybVdhdGNoSG9zdH0gZnJvbSAnLi9wZXJmb3JtX3dhdGNoJztcbmltcG9ydCB7Tm9kZUpTRmlsZVN5c3RlbSwgc2V0RmlsZVN5c3RlbX0gZnJvbSAnLi9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKFxuICAgIGFyZ3M6IHN0cmluZ1tdLCBjb25zb2xlRXJyb3I6IChzOiBzdHJpbmcpID0+IHZvaWQgPSBjb25zb2xlLmVycm9yLFxuICAgIGNvbmZpZz86IE5nY1BhcnNlZENvbmZpZ3VyYXRpb24sIGN1c3RvbVRyYW5zZm9ybWVycz86IGFwaS5DdXN0b21UcmFuc2Zvcm1lcnMsIHByb2dyYW1SZXVzZT86IHtcbiAgICAgIHByb2dyYW06IGFwaS5Qcm9ncmFtfHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIG1vZGlmaWVkUmVzb3VyY2VGaWxlcz86IFNldDxzdHJpbmc+fG51bGwpOiBudW1iZXIge1xuICBsZXQge3Byb2plY3QsIHJvb3ROYW1lcywgb3B0aW9ucywgZXJyb3JzOiBjb25maWdFcnJvcnMsIHdhdGNoLCBlbWl0RmxhZ3N9ID1cbiAgICAgIGNvbmZpZyB8fCByZWFkTmdjQ29tbWFuZExpbmVBbmRDb25maWd1cmF0aW9uKGFyZ3MpO1xuICBpZiAoY29uZmlnRXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiByZXBvcnRFcnJvcnNBbmRFeGl0KGNvbmZpZ0Vycm9ycywgLypvcHRpb25zKi8gdW5kZWZpbmVkLCBjb25zb2xlRXJyb3IpO1xuICB9XG4gIGlmICh3YXRjaCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHdhdGNoTW9kZShwcm9qZWN0LCBvcHRpb25zLCBjb25zb2xlRXJyb3IpO1xuICAgIHJldHVybiByZXBvcnRFcnJvcnNBbmRFeGl0KHJlc3VsdC5maXJzdENvbXBpbGVSZXN1bHQsIG9wdGlvbnMsIGNvbnNvbGVFcnJvcik7XG4gIH1cblxuICBsZXQgb2xkUHJvZ3JhbTogYXBpLlByb2dyYW18dW5kZWZpbmVkO1xuICBpZiAocHJvZ3JhbVJldXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICBvbGRQcm9ncmFtID0gcHJvZ3JhbVJldXNlLnByb2dyYW07XG4gIH1cblxuICBjb25zdCB7ZGlhZ25vc3RpY3M6IGNvbXBpbGVEaWFncywgcHJvZ3JhbX0gPSBwZXJmb3JtQ29tcGlsYXRpb24oe1xuICAgIHJvb3ROYW1lcyxcbiAgICBvcHRpb25zLFxuICAgIGVtaXRGbGFncyxcbiAgICBvbGRQcm9ncmFtLFxuICAgIGVtaXRDYWxsYmFjazogY3JlYXRlRW1pdENhbGxiYWNrKG9wdGlvbnMpLFxuICAgIGN1c3RvbVRyYW5zZm9ybWVycyxcbiAgICBtb2RpZmllZFJlc291cmNlRmlsZXNcbiAgfSk7XG4gIGlmIChwcm9ncmFtUmV1c2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb2dyYW1SZXVzZS5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgfVxuICByZXR1cm4gcmVwb3J0RXJyb3JzQW5kRXhpdChjb21waWxlRGlhZ3MsIG9wdGlvbnMsIGNvbnNvbGVFcnJvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluRGlhZ25vc3RpY3NGb3JUZXN0KFxuICAgIGFyZ3M6IHN0cmluZ1tdLCBjb25maWc/OiBOZ2NQYXJzZWRDb25maWd1cmF0aW9uLFxuICAgIHByb2dyYW1SZXVzZT86IHtwcm9ncmFtOiBhcGkuUHJvZ3JhbXx1bmRlZmluZWR9LFxuICAgIG1vZGlmaWVkUmVzb3VyY2VGaWxlcz86IFNldDxzdHJpbmc+fG51bGwpOiBSZWFkb25seUFycmF5PHRzLkRpYWdub3N0aWN8YXBpLkRpYWdub3N0aWM+IHtcbiAgbGV0IHtwcm9qZWN0LCByb290TmFtZXMsIG9wdGlvbnMsIGVycm9yczogY29uZmlnRXJyb3JzLCB3YXRjaCwgZW1pdEZsYWdzfSA9XG4gICAgICBjb25maWcgfHwgcmVhZE5nY0NvbW1hbmRMaW5lQW5kQ29uZmlndXJhdGlvbihhcmdzKTtcbiAgaWYgKGNvbmZpZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY29uZmlnRXJyb3JzO1xuICB9XG5cbiAgbGV0IG9sZFByb2dyYW06IGFwaS5Qcm9ncmFtfHVuZGVmaW5lZDtcbiAgaWYgKHByb2dyYW1SZXVzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgb2xkUHJvZ3JhbSA9IHByb2dyYW1SZXVzZS5wcm9ncmFtO1xuICB9XG5cbiAgY29uc3Qge2RpYWdub3N0aWNzOiBjb21waWxlRGlhZ3MsIHByb2dyYW19ID0gcGVyZm9ybUNvbXBpbGF0aW9uKHtcbiAgICByb290TmFtZXMsXG4gICAgb3B0aW9ucyxcbiAgICBlbWl0RmxhZ3MsXG4gICAgb2xkUHJvZ3JhbSxcbiAgICBtb2RpZmllZFJlc291cmNlRmlsZXMsXG4gICAgZW1pdENhbGxiYWNrOiBjcmVhdGVFbWl0Q2FsbGJhY2sob3B0aW9ucyksXG4gIH0pO1xuXG4gIGlmIChwcm9ncmFtUmV1c2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb2dyYW1SZXVzZS5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgfVxuXG4gIHJldHVybiBjb21waWxlRGlhZ3M7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtaXRDYWxsYmFjayhvcHRpb25zOiBhcGkuQ29tcGlsZXJPcHRpb25zKTogYXBpLlRzRW1pdENhbGxiYWNrfHVuZGVmaW5lZCB7XG4gIGNvbnN0IHRyYW5zZm9ybURlY29yYXRvcnMgPVxuICAgICAgKG9wdGlvbnMuZW5hYmxlSXZ5ID09PSBmYWxzZSAmJiBvcHRpb25zLmFubm90YXRpb25zQXMgIT09ICdkZWNvcmF0b3JzJyk7XG4gIGNvbnN0IHRyYW5zZm9ybVR5cGVzVG9DbG9zdXJlID0gb3B0aW9ucy5hbm5vdGF0ZUZvckNsb3N1cmVDb21waWxlcjtcbiAgaWYgKCF0cmFuc2Zvcm1EZWNvcmF0b3JzICYmICF0cmFuc2Zvcm1UeXBlc1RvQ2xvc3VyZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHRyYW5zZm9ybURlY29yYXRvcnMpIHtcbiAgICAvLyBUaGlzIGlzIG5lZWRlZCBhcyBhIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3RzaWNrbGUvaXNzdWVzLzYzNVxuICAgIC8vIE90aGVyd2lzZSB0c2lja2xlIG1pZ2h0IGVtaXQgcmVmZXJlbmNlcyB0byBub24gaW1wb3J0ZWQgdmFsdWVzXG4gICAgLy8gYXMgVHlwZVNjcmlwdCBlbGlkZWQgdGhlIGltcG9ydC5cbiAgICBvcHRpb25zLmVtaXREZWNvcmF0b3JNZXRhZGF0YSA9IHRydWU7XG4gIH1cbiAgY29uc3QgdHNpY2tsZUhvc3Q6IFBpY2s8XG4gICAgICB0c2lja2xlLlRzaWNrbGVIb3N0LFxuICAgICAgJ3Nob3VsZFNraXBUc2lja2xlUHJvY2Vzc2luZyd8J3BhdGhUb01vZHVsZU5hbWUnfCdzaG91bGRJZ25vcmVXYXJuaW5nc0ZvclBhdGgnfFxuICAgICAgJ2ZpbGVOYW1lVG9Nb2R1bGVJZCd8J2dvb2dtb2R1bGUnfCd1bnR5cGVkJ3wnY29udmVydEluZGV4SW1wb3J0U2hvcnRoYW5kJ3xcbiAgICAgICd0cmFuc2Zvcm1EZWNvcmF0b3JzJ3wndHJhbnNmb3JtVHlwZXNUb0Nsb3N1cmUnPiA9IHtcbiAgICBzaG91bGRTa2lwVHNpY2tsZVByb2Nlc3Npbmc6IChmaWxlTmFtZSkgPT4gL1xcLmRcXC50cyQvLnRlc3QoZmlsZU5hbWUpIHx8XG4gICAgICAgIC8vIFZpZXcgRW5naW5lJ3MgZ2VuZXJhdGVkIGZpbGVzIHdlcmUgbmV2ZXIgaW50ZW5kZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggdHNpY2tsZS5cbiAgICAgICAgKCFvcHRpb25zLmVuYWJsZUl2eSAmJiBHRU5FUkFURURfRklMRVMudGVzdChmaWxlTmFtZSkpLFxuICAgIHBhdGhUb01vZHVsZU5hbWU6IChjb250ZXh0LCBpbXBvcnRQYXRoKSA9PiAnJyxcbiAgICBzaG91bGRJZ25vcmVXYXJuaW5nc0ZvclBhdGg6IChmaWxlUGF0aCkgPT4gZmFsc2UsXG4gICAgZmlsZU5hbWVUb01vZHVsZUlkOiAoZmlsZU5hbWUpID0+IGZpbGVOYW1lLFxuICAgIGdvb2dtb2R1bGU6IGZhbHNlLFxuICAgIHVudHlwZWQ6IHRydWUsXG4gICAgY29udmVydEluZGV4SW1wb3J0U2hvcnRoYW5kOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1EZWNvcmF0b3JzLFxuICAgIHRyYW5zZm9ybVR5cGVzVG9DbG9zdXJlLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmFubm90YXRlRm9yQ2xvc3VyZUNvbXBpbGVyIHx8IG9wdGlvbnMuYW5ub3RhdGlvbnNBcyA9PT0gJ3N0YXRpYyBmaWVsZHMnKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgcHJvZ3JhbSxcbiAgICAgICAgICAgICB0YXJnZXRTb3VyY2VGaWxlLFxuICAgICAgICAgICAgIHdyaXRlRmlsZSxcbiAgICAgICAgICAgICBjYW5jZWxsYXRpb25Ub2tlbixcbiAgICAgICAgICAgICBlbWl0T25seUR0c0ZpbGVzLFxuICAgICAgICAgICAgIGN1c3RvbVRyYW5zZm9ybWVycyA9IHt9LFxuICAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICB9KSA9PlxuICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXJlcXVpcmUtaW1wb3J0cyBvbmx5IGRlcGVuZCBvbiB0c2lja2xlIGlmIHJlcXVlc3RlZFxuICAgICAgICByZXF1aXJlKCd0c2lja2xlJykuZW1pdFdpdGhUc2lja2xlKFxuICAgICAgICAgICAgcHJvZ3JhbSwgey4uLnRzaWNrbGVIb3N0LCBvcHRpb25zLCBob3N0LCBtb2R1bGVSZXNvbHV0aW9uSG9zdDogaG9zdH0sIGhvc3QsIG9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXRTb3VyY2VGaWxlLCB3cml0ZUZpbGUsIGNhbmNlbGxhdGlvblRva2VuLCBlbWl0T25seUR0c0ZpbGVzLCB7XG4gICAgICAgICAgICAgIGJlZm9yZVRzOiBjdXN0b21UcmFuc2Zvcm1lcnMuYmVmb3JlLFxuICAgICAgICAgICAgICBhZnRlclRzOiBjdXN0b21UcmFuc2Zvcm1lcnMuYWZ0ZXIsXG4gICAgICAgICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICBwcm9ncmFtLFxuICAgICAgICAgICAgIHRhcmdldFNvdXJjZUZpbGUsXG4gICAgICAgICAgICAgd3JpdGVGaWxlLFxuICAgICAgICAgICAgIGNhbmNlbGxhdGlvblRva2VuLFxuICAgICAgICAgICAgIGVtaXRPbmx5RHRzRmlsZXMsXG4gICAgICAgICAgICAgY3VzdG9tVHJhbnNmb3JtZXJzID0ge30sXG4gICAgICAgICAgIH0pID0+XG4gICAgICAgICAgICAgICBwcm9ncmFtLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgdGFyZ2V0U291cmNlRmlsZSwgd3JpdGVGaWxlLCBjYW5jZWxsYXRpb25Ub2tlbiwgZW1pdE9ubHlEdHNGaWxlcyxcbiAgICAgICAgICAgICAgICAgICB7YWZ0ZXI6IGN1c3RvbVRyYW5zZm9ybWVycy5hZnRlciwgYmVmb3JlOiBjdXN0b21UcmFuc2Zvcm1lcnMuYmVmb3JlfSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ2NQYXJzZWRDb25maWd1cmF0aW9uIGV4dGVuZHMgUGFyc2VkQ29uZmlndXJhdGlvbiB7XG4gIHdhdGNoPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWROZ2NDb21tYW5kTGluZUFuZENvbmZpZ3VyYXRpb24oYXJnczogc3RyaW5nW10pOiBOZ2NQYXJzZWRDb25maWd1cmF0aW9uIHtcbiAgY29uc3Qgb3B0aW9uczogYXBpLkNvbXBpbGVyT3B0aW9ucyA9IHt9O1xuICBjb25zdCBwYXJzZWRBcmdzID0gcmVxdWlyZSgnbWluaW1pc3QnKShhcmdzKTtcbiAgaWYgKHBhcnNlZEFyZ3MuaTE4bkZpbGUpIG9wdGlvbnMuaTE4bkluRmlsZSA9IHBhcnNlZEFyZ3MuaTE4bkZpbGU7XG4gIGlmIChwYXJzZWRBcmdzLmkxOG5Gb3JtYXQpIG9wdGlvbnMuaTE4bkluRm9ybWF0ID0gcGFyc2VkQXJncy5pMThuRm9ybWF0O1xuICBpZiAocGFyc2VkQXJncy5sb2NhbGUpIG9wdGlvbnMuaTE4bkluTG9jYWxlID0gcGFyc2VkQXJncy5sb2NhbGU7XG4gIGNvbnN0IG10ID0gcGFyc2VkQXJncy5taXNzaW5nVHJhbnNsYXRpb247XG4gIGlmIChtdCA9PT0gJ2Vycm9yJyB8fCBtdCA9PT0gJ3dhcm5pbmcnIHx8IG10ID09PSAnaWdub3JlJykge1xuICAgIG9wdGlvbnMuaTE4bkluTWlzc2luZ1RyYW5zbGF0aW9ucyA9IG10O1xuICB9XG4gIGNvbnN0IGNvbmZpZyA9IHJlYWRDb21tYW5kTGluZUFuZENvbmZpZ3VyYXRpb24oXG4gICAgICBhcmdzLCBvcHRpb25zLCBbJ2kxOG5GaWxlJywgJ2kxOG5Gb3JtYXQnLCAnbG9jYWxlJywgJ21pc3NpbmdUcmFuc2xhdGlvbicsICd3YXRjaCddKTtcbiAgY29uc3Qgd2F0Y2ggPSBwYXJzZWRBcmdzLncgfHwgcGFyc2VkQXJncy53YXRjaDtcbiAgcmV0dXJuIHsuLi5jb25maWcsIHdhdGNofTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb21tYW5kTGluZUFuZENvbmZpZ3VyYXRpb24oXG4gICAgYXJnczogc3RyaW5nW10sIGV4aXN0aW5nT3B0aW9uczogYXBpLkNvbXBpbGVyT3B0aW9ucyA9IHt9LFxuICAgIG5nQ21kTGluZU9wdGlvbnM6IHN0cmluZ1tdID0gW10pOiBQYXJzZWRDb25maWd1cmF0aW9uIHtcbiAgbGV0IGNtZENvbmZpZyA9IHRzLnBhcnNlQ29tbWFuZExpbmUoYXJncyk7XG4gIGNvbnN0IHByb2plY3QgPSBjbWRDb25maWcub3B0aW9ucy5wcm9qZWN0IHx8ICcuJztcbiAgY29uc3QgY21kRXJyb3JzID0gY21kQ29uZmlnLmVycm9ycy5maWx0ZXIoZSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlLm1lc3NhZ2VUZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgbXNnID0gZS5tZXNzYWdlVGV4dDtcbiAgICAgIHJldHVybiAhbmdDbWRMaW5lT3B0aW9ucy5zb21lKG8gPT4gbXNnLmluZGV4T2YobykgPj0gMCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgaWYgKGNtZEVycm9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdCxcbiAgICAgIHJvb3ROYW1lczogW10sXG4gICAgICBvcHRpb25zOiBjbWRDb25maWcub3B0aW9ucyxcbiAgICAgIGVycm9yczogY21kRXJyb3JzLFxuICAgICAgZW1pdEZsYWdzOiBhcGkuRW1pdEZsYWdzLkRlZmF1bHRcbiAgICB9O1xuICB9XG4gIGNvbnN0IGFsbERpYWdub3N0aWNzOiBEaWFnbm9zdGljcyA9IFtdO1xuICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlndXJhdGlvbihwcm9qZWN0LCBjbWRDb25maWcub3B0aW9ucyk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7Li4uY29uZmlnLm9wdGlvbnMsIC4uLmV4aXN0aW5nT3B0aW9uc307XG4gIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgIG9wdGlvbnMuaTE4bkluTG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0LFxuICAgIHJvb3ROYW1lczogY29uZmlnLnJvb3ROYW1lcyxcbiAgICBvcHRpb25zLFxuICAgIGVycm9yczogY29uZmlnLmVycm9ycyxcbiAgICBlbWl0RmxhZ3M6IGNvbmZpZy5lbWl0RmxhZ3NcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0RGlhZ25vc3RpY3NIb3N0KG9wdGlvbnM/OiBhcGkuQ29tcGlsZXJPcHRpb25zKTogdHMuRm9ybWF0RGlhZ25vc3RpY3NIb3N0IHtcbiAgY29uc3QgYmFzZVBhdGggPSBvcHRpb25zID8gb3B0aW9ucy5iYXNlUGF0aCA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICBnZXRDdXJyZW50RGlyZWN0b3J5OiAoKSA9PiBiYXNlUGF0aCB8fCB0cy5zeXMuZ2V0Q3VycmVudERpcmVjdG9yeSgpLFxuICAgIC8vIFdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBwYXRoIHNlcGFyYXRvcnMgaGVyZSBiZWNhdXNlIGJ5IGRlZmF1bHQsIFR5cGVTY3JpcHRcbiAgICAvLyBjb21waWxlciBob3N0cyB1c2UgcG9zaXggY2Fub25pY2FsIHBhdGhzLiBJbiBvcmRlciB0byBwcmludCBjb25zaXN0ZW50IGRpYWdub3N0aWNzLFxuICAgIC8vIHdlIGFsc28gbm9ybWFsaXplIHRoZSBwYXRocy5cbiAgICBnZXRDYW5vbmljYWxGaWxlTmFtZTogZmlsZU5hbWUgPT4gZmlsZU5hbWUucmVwbGFjZSgvXFxcXC9nLCAnLycpLFxuICAgIGdldE5ld0xpbmU6ICgpID0+IHtcbiAgICAgIC8vIE1hbnVhbGx5IGRldGVybWluZSB0aGUgcHJvcGVyIG5ldyBsaW5lIHN0cmluZyBiYXNlZCBvbiB0aGUgcGFzc2VkIGNvbXBpbGVyXG4gICAgICAvLyBvcHRpb25zLiBUaGVyZSBpcyBubyBwdWJsaWMgVHlwZVNjcmlwdCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAgIC8vIG5ldyBsaW5lIHN0cmluZy4gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI5NTgxXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm5ld0xpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5uZXdMaW5lID09PSB0cy5OZXdMaW5lS2luZC5MaW5lRmVlZCA/ICdcXG4nIDogJ1xcclxcbic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHMuc3lzLm5ld0xpbmU7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVwb3J0RXJyb3JzQW5kRXhpdChcbiAgICBhbGxEaWFnbm9zdGljczogRGlhZ25vc3RpY3MsIG9wdGlvbnM/OiBhcGkuQ29tcGlsZXJPcHRpb25zLFxuICAgIGNvbnNvbGVFcnJvcjogKHM6IHN0cmluZykgPT4gdm9pZCA9IGNvbnNvbGUuZXJyb3IpOiBudW1iZXIge1xuICBjb25zdCBlcnJvcnNBbmRXYXJuaW5ncyA9IGZpbHRlckVycm9yc0FuZFdhcm5pbmdzKGFsbERpYWdub3N0aWNzKTtcbiAgcHJpbnREaWFnbm9zdGljcyhlcnJvcnNBbmRXYXJuaW5ncywgb3B0aW9ucywgY29uc29sZUVycm9yKTtcbiAgcmV0dXJuIGV4aXRDb2RlRnJvbVJlc3VsdChhbGxEaWFnbm9zdGljcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaE1vZGUoXG4gICAgcHJvamVjdDogc3RyaW5nLCBvcHRpb25zOiBhcGkuQ29tcGlsZXJPcHRpb25zLCBjb25zb2xlRXJyb3I6IChzOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgcmV0dXJuIHBlcmZvcm1XYXRjaENvbXBpbGF0aW9uKGNyZWF0ZVBlcmZvcm1XYXRjaEhvc3QocHJvamVjdCwgZGlhZ25vc3RpY3MgPT4ge1xuICAgIHByaW50RGlhZ25vc3RpY3MoZGlhZ25vc3RpY3MsIG9wdGlvbnMsIGNvbnNvbGVFcnJvcik7XG4gIH0sIG9wdGlvbnMsIG9wdGlvbnMgPT4gY3JlYXRlRW1pdENhbGxiYWNrKG9wdGlvbnMpKSk7XG59XG5cbmZ1bmN0aW9uIHByaW50RGlhZ25vc3RpY3MoXG4gICAgZGlhZ25vc3RpY3M6IFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpY3xhcGkuRGlhZ25vc3RpYz4sXG4gICAgb3B0aW9uczogYXBpLkNvbXBpbGVyT3B0aW9uc3x1bmRlZmluZWQsIGNvbnNvbGVFcnJvcjogKHM6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICBpZiAoZGlhZ25vc3RpY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZvcm1hdEhvc3QgPSBnZXRGb3JtYXREaWFnbm9zdGljc0hvc3Qob3B0aW9ucyk7XG4gIGNvbnNvbGVFcnJvcihmb3JtYXREaWFnbm9zdGljcyhkaWFnbm9zdGljcywgZm9ybWF0SG9zdCkpO1xufVxuXG4vLyBDTEkgZW50cnkgcG9pbnRcbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuICAvLyBXZSBhcmUgcnVubmluZyB0aGUgcmVhbCBjb21waWxlciBzbyBydW4gYWdhaW5zdCB0aGUgcmVhbCBmaWxlLXN5c3RlbVxuICBzZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuICBwcm9jZXNzLmV4aXRDb2RlID0gbWFpbihhcmdzKTtcbn1cbiJdfQ==