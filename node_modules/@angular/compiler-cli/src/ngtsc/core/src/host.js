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
        define("@angular/compiler-cli/src/ngtsc/core/src/host", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/entry_point", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/shims", "@angular/compiler-cli/src/ngtsc/typecheck", "@angular/compiler-cli/src/ngtsc/util/src/path", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var entry_point_1 = require("@angular/compiler-cli/src/ngtsc/entry_point");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var shims_1 = require("@angular/compiler-cli/src/ngtsc/shims");
    var typecheck_1 = require("@angular/compiler-cli/src/ngtsc/typecheck");
    var path_1 = require("@angular/compiler-cli/src/ngtsc/util/src/path");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * Delegates all methods of `ExtendedTsCompilerHost` to a delegate, with the exception of
     * `getSourceFile` and `fileExists` which are implemented in `NgCompilerHost`.
     *
     * If a new method is added to `ts.CompilerHost` which is not delegated, a type error will be
     * generated for this class.
     */
    var DelegatingCompilerHost = /** @class */ (function () {
        function DelegatingCompilerHost(delegate) {
            this.delegate = delegate;
            // Excluded are 'getSourceFile' and 'fileExists', which are actually implemented by NgCompilerHost
            // below.
            this.createHash = this.delegateMethod('createHash');
            this.directoryExists = this.delegateMethod('directoryExists');
            this.fileNameToModuleName = this.delegateMethod('fileNameToModuleName');
            this.getCancellationToken = this.delegateMethod('getCancellationToken');
            this.getCanonicalFileName = this.delegateMethod('getCanonicalFileName');
            this.getCurrentDirectory = this.delegateMethod('getCurrentDirectory');
            this.getDefaultLibFileName = this.delegateMethod('getDefaultLibFileName');
            this.getDefaultLibLocation = this.delegateMethod('getDefaultLibLocation');
            this.getDirectories = this.delegateMethod('getDirectories');
            this.getEnvironmentVariable = this.delegateMethod('getEnvironmentVariable');
            this.getModifiedResourceFiles = this.delegateMethod('getModifiedResourceFiles');
            this.getNewLine = this.delegateMethod('getNewLine');
            this.getParsedCommandLine = this.delegateMethod('getParsedCommandLine');
            this.getSourceFileByPath = this.delegateMethod('getSourceFileByPath');
            this.readDirectory = this.delegateMethod('readDirectory');
            this.readFile = this.delegateMethod('readFile');
            this.readResource = this.delegateMethod('readResource');
            this.realpath = this.delegateMethod('realpath');
            this.resolveModuleNames = this.delegateMethod('resolveModuleNames');
            this.resolveTypeReferenceDirectives = this.delegateMethod('resolveTypeReferenceDirectives');
            this.resourceNameToFileName = this.delegateMethod('resourceNameToFileName');
            this.trace = this.delegateMethod('trace');
            this.useCaseSensitiveFileNames = this.delegateMethod('useCaseSensitiveFileNames');
            this.writeFile = this.delegateMethod('writeFile');
        }
        DelegatingCompilerHost.prototype.delegateMethod = function (name) {
            return this.delegate[name] !== undefined ? this.delegate[name].bind(this.delegate) :
                undefined;
        };
        return DelegatingCompilerHost;
    }());
    exports.DelegatingCompilerHost = DelegatingCompilerHost;
    /**
     * A wrapper around `ts.CompilerHost` (plus any extension methods from `ExtendedTsCompilerHost`).
     *
     * In order for a consumer to include Angular compilation in their TypeScript compiler, the
     * `ts.Program` must be created with a host that adds Angular-specific files (e.g. factories,
     * summaries, the template type-checking file, etc) to the compilation. `NgCompilerHost` is the
     * host implementation which supports this.
     *
     * The interface implementations here ensure that `NgCompilerHost` fully delegates to
     * `ExtendedTsCompilerHost` methods whenever present.
     */
    var NgCompilerHost = /** @class */ (function (_super) {
        tslib_1.__extends(NgCompilerHost, _super);
        function NgCompilerHost(delegate, inputFiles, rootDirs, shims, entryPoint, typeCheckFile, factoryFiles, summaryFiles, factoryTracker, diagnostics) {
            var _this = _super.call(this, delegate) || this;
            _this.shims = shims;
            _this.factoryTracker = null;
            _this.entryPoint = null;
            _this.factoryTracker = factoryTracker;
            _this.entryPoint = entryPoint;
            _this.typeCheckFile = typeCheckFile;
            _this.factoryFiles = factoryFiles;
            _this.summaryFiles = summaryFiles;
            _this.diagnostics = diagnostics;
            _this.inputFiles = inputFiles;
            _this.rootDirs = rootDirs;
            return _this;
        }
        /**
         * Create an `NgCompilerHost` from a delegate host, an array of input filenames, and the full set
         * of TypeScript and Angular compiler options.
         */
        NgCompilerHost.wrap = function (delegate, inputFiles, options) {
            // TODO(alxhub): remove the fallback to allowEmptyCodegenFiles after verifying that the rest of
            // our build tooling is no longer relying on it.
            var allowEmptyCodegenFiles = options.allowEmptyCodegenFiles || false;
            var shouldGenerateFactoryShims = options.generateNgFactoryShims !== undefined ?
                options.generateNgFactoryShims :
                allowEmptyCodegenFiles;
            var shouldGenerateSummaryShims = options.generateNgSummaryShims !== undefined ?
                options.generateNgSummaryShims :
                allowEmptyCodegenFiles;
            var rootFiles = tslib_1.__spread(inputFiles);
            var normalizedInputFiles = inputFiles.map(function (n) { return file_system_1.resolve(n); });
            var generators = [];
            var summaryGenerator = null;
            var summaryFiles;
            if (shouldGenerateSummaryShims) {
                // Summary generation.
                summaryGenerator = shims_1.SummaryGenerator.forRootFiles(normalizedInputFiles);
                generators.push(summaryGenerator);
                summaryFiles = summaryGenerator.getSummaryFileNames();
            }
            else {
                summaryFiles = [];
            }
            var factoryTracker = null;
            var factoryFiles;
            if (shouldGenerateFactoryShims) {
                // Factory generation.
                var factoryGenerator = shims_1.FactoryGenerator.forRootFiles(normalizedInputFiles);
                var factoryFileMap = factoryGenerator.factoryFileMap;
                factoryFiles = Array.from(factoryFileMap.keys());
                rootFiles.push.apply(rootFiles, tslib_1.__spread(factoryFiles));
                generators.push(factoryGenerator);
                factoryTracker = new shims_1.FactoryTracker(factoryGenerator);
            }
            else {
                factoryFiles = [];
            }
            // Done separately to preserve the order of factory files before summary files in rootFiles.
            // TODO(alxhub): validate that this is necessary.
            rootFiles.push.apply(rootFiles, tslib_1.__spread(summaryFiles));
            var rootDirs = typescript_1.getRootDirs(delegate, options);
            var typeCheckFile = typecheck_1.typeCheckFilePath(rootDirs);
            generators.push(new shims_1.TypeCheckShimGenerator(typeCheckFile));
            rootFiles.push(typeCheckFile);
            var diagnostics = [];
            var entryPoint = null;
            if (options.flatModuleOutFile != null && options.flatModuleOutFile !== '') {
                entryPoint = entry_point_1.findFlatIndexEntryPoint(normalizedInputFiles);
                if (entryPoint === null) {
                    // This error message talks specifically about having a single .ts file in "files". However
                    // the actual logic is a bit more permissive. If a single file exists, that will be taken,
                    // otherwise the highest level (shortest path) "index.ts" file will be used as the flat
                    // module entry point instead. If neither of these conditions apply, the error below is
                    // given.
                    //
                    // The user is not informed about the "index.ts" option as this behavior is deprecated -
                    // an explicit entrypoint should always be specified.
                    diagnostics.push({
                        category: ts.DiagnosticCategory.Error,
                        code: diagnostics_1.ngErrorCode(diagnostics_1.ErrorCode.CONFIG_FLAT_MODULE_NO_INDEX),
                        file: undefined,
                        start: undefined,
                        length: undefined,
                        messageText: 'Angular compiler option "flatModuleOutFile" requires one and only one .ts file in the "files" field.',
                    });
                }
                else {
                    var flatModuleId = options.flatModuleId || null;
                    var flatModuleOutFile = path_1.normalizeSeparators(options.flatModuleOutFile);
                    var flatIndexGenerator = new entry_point_1.FlatIndexGenerator(entryPoint, flatModuleOutFile, flatModuleId);
                    generators.push(flatIndexGenerator);
                    rootFiles.push(flatIndexGenerator.flatIndexPath);
                }
            }
            return new NgCompilerHost(delegate, rootFiles, rootDirs, generators, entryPoint, typeCheckFile, factoryFiles, summaryFiles, factoryTracker, diagnostics);
        };
        NgCompilerHost.prototype.getSourceFile = function (fileName, languageVersion, onError, shouldCreateNewSourceFile) {
            var _this = this;
            for (var i = 0; i < this.shims.length; i++) {
                var generator = this.shims[i];
                // TypeScript internal paths are guaranteed to be POSIX-like absolute file paths.
                var absoluteFsPath = file_system_1.resolve(fileName);
                if (generator.recognize(absoluteFsPath)) {
                    var readFile = function (originalFile) {
                        return _this.delegate.getSourceFile(originalFile, languageVersion, onError, shouldCreateNewSourceFile) ||
                            null;
                    };
                    return generator.generate(absoluteFsPath, readFile) || undefined;
                }
            }
            return this.delegate.getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile);
        };
        NgCompilerHost.prototype.fileExists = function (fileName) {
            // Consider the file as existing whenever
            //  1) it really does exist in the delegate host, or
            //  2) at least one of the shim generators recognizes it
            // Note that we can pass the file name as branded absolute fs path because TypeScript
            // internally only passes POSIX-like paths.
            return this.delegate.fileExists(fileName) ||
                this.shims.some(function (shim) { return shim.recognize(file_system_1.resolve(fileName)); });
        };
        Object.defineProperty(NgCompilerHost.prototype, "unifiedModulesHost", {
            get: function () {
                return this.fileNameToModuleName !== undefined ? this : null;
            },
            enumerable: true,
            configurable: true
        });
        return NgCompilerHost;
    }(DelegatingCompilerHost));
    exports.NgCompilerHost = NgCompilerHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY29yZS9zcmMvaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFFakMsMkVBQXlEO0lBQ3pELDJFQUE4RTtJQUM5RSwyRUFBMEQ7SUFDMUQsK0RBQXNIO0lBQ3RILHVFQUFrRDtJQUNsRCxzRUFBd0Q7SUFDeEQsa0ZBQXNEO0lBaUJ0RDs7Ozs7O09BTUc7SUFDSDtRQUVFLGdDQUFzQixRQUFnQztZQUFoQyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtZQVF0RCxrR0FBa0c7WUFDbEcsU0FBUztZQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9DLG9CQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pELHlCQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNuRSx5QkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDbkUseUJBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ25FLHdCQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNqRSwwQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckUsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JFLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZELDJCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFj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b0JBQ3ZDLElBQU0sUUFBUSxHQUFHLFVBQUMsWUFBb0I7d0JBQ3BDLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQ3ZCLFlBQVksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixDQUFDOzRCQUN6RSxJQUFJLENBQUM7b0JBQ1gsQ0FBQyxDQUFDO29CQUVGLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDO2lCQUNsRTthQUNGO1lBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRUQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1lBQ3pCLHlDQUF5QztZQUN6QyxvREFBb0Q7WUFDcEQsd0RBQXdEO1lBQ3hELHFGQUFxRjtZQUNyRiwyQ0FBMkM7WUFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsc0JBQUksOENBQWtCO2lCQUF0QjtnQkFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQTBCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRixDQUFDOzs7V0FBQTtRQUNILHFCQUFDO0lBQUQsQ0FBQyxBQXJLRCxDQUFvQyxzQkFBc0IsR0FxS3pEO0lBcktZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtFcnJvckNvZGUsIG5nRXJyb3JDb2RlfSBmcm9tICcuLi8uLi9kaWFnbm9zdGljcyc7XG5pbXBvcnQge2ZpbmRGbGF0SW5kZXhFbnRyeVBvaW50LCBGbGF0SW5kZXhHZW5lcmF0b3J9IGZyb20gJy4uLy4uL2VudHJ5X3BvaW50JztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIHJlc29sdmV9IGZyb20gJy4uLy4uL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7RmFjdG9yeUdlbmVyYXRvciwgRmFjdG9yeVRyYWNrZXIsIFNoaW1HZW5lcmF0b3IsIFN1bW1hcnlHZW5lcmF0b3IsIFR5cGVDaGVja1NoaW1HZW5lcmF0b3J9IGZyb20gJy4uLy4uL3NoaW1zJztcbmltcG9ydCB7dHlwZUNoZWNrRmlsZVBhdGh9IGZyb20gJy4uLy4uL3R5cGVjaGVjayc7XG5pbXBvcnQge25vcm1hbGl6ZVNlcGFyYXRvcnN9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3BhdGgnO1xuaW1wb3J0IHtnZXRSb290RGlyc30gZnJvbSAnLi4vLi4vdXRpbC9zcmMvdHlwZXNjcmlwdCc7XG5pbXBvcnQge0V4dGVuZGVkVHNDb21waWxlckhvc3QsIE5nQ29tcGlsZXJPcHRpb25zLCBVbmlmaWVkTW9kdWxlc0hvc3R9IGZyb20gJy4uL2FwaSc7XG5cbi8vIEEgcGVyc2lzdGVudCBzb3VyY2Ugb2YgYnVncyBpbiBDb21waWxlckhvc3QgZGVsZWdhdGlvbiBoYXMgYmVlbiB0aGUgYWRkaXRpb24gYnkgVFMgb2YgbmV3LFxuLy8gb3B0aW9uYWwgbWV0aG9kcyBvbiB0cy5Db21waWxlckhvc3QuIFNpbmNlIHRoZXNlIG1ldGhvZHMgYXJlIG9wdGlvbmFsLCBpdCdzIG5vdCBhIHR5cGUgZXJyb3IgdGhhdFxuLy8gdGhlIGRlbGVnYXRpbmcgaG9zdCBkb2Vzbid0IGltcGxlbWVudCBvciBkZWxlZ2F0ZSB0aGVtLiBUaGlzIGNhdXNlcyBzdWJ0bGUgcnVudGltZSBmYWlsdXJlcy4gTm9cbi8vIG1vcmUuIFRoaXMgaW5mcmFzdHJ1Y3R1cmUgZW5zdXJlcyB0aGF0IGZhaWxpbmcgdG8gZGVsZWdhdGUgYSBtZXRob2QgaXMgYSBjb21waWxlLXRpbWUgZXJyb3IuXG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYEV4dGVuZGVkVHNDb21waWxlckhvc3RgIGludGVyZmFjZSwgd2l0aCBhIHRyYW5zZm9ybWF0aW9uIGFwcGxpZWQgdGhhdCB0dXJucyBhbGxcbiAqIG1ldGhvZHMgKGV2ZW4gb3B0aW9uYWwgb25lcykgaW50byByZXF1aXJlZCBmaWVsZHMgKHdoaWNoIG1heSBiZSBgdW5kZWZpbmVkYCwgaWYgdGhlIG1ldGhvZCB3YXNcbiAqIG9wdGlvbmFsKS5cbiAqL1xuZXhwb3J0IHR5cGUgUmVxdWlyZWRDb21waWxlckhvc3REZWxlZ2F0aW9ucyA9IHtcbiAgW00gaW4ga2V5b2YgUmVxdWlyZWQ8RXh0ZW5kZWRUc0NvbXBpbGVySG9zdD5dOiBFeHRlbmRlZFRzQ29tcGlsZXJIb3N0W01dO1xufTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgYWxsIG1ldGhvZHMgb2YgYEV4dGVuZGVkVHNDb21waWxlckhvc3RgIHRvIGEgZGVsZWdhdGUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuICogYGdldFNvdXJjZUZpbGVgIGFuZCBgZmlsZUV4aXN0c2Agd2hpY2ggYXJlIGltcGxlbWVudGVkIGluIGBOZ0NvbXBpbGVySG9zdGAuXG4gKlxuICogSWYgYSBuZXcgbWV0aG9kIGlzIGFkZGVkIHRvIGB0cy5Db21waWxlckhvc3RgIHdoaWNoIGlzIG5vdCBkZWxlZ2F0ZWQsIGEgdHlwZSBlcnJvciB3aWxsIGJlXG4gKiBnZW5lcmF0ZWQgZm9yIHRoaXMgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxlZ2F0aW5nQ29tcGlsZXJIb3N0IGltcGxlbWVudHNcbiAgICBPbWl0PFJlcXVpcmVkQ29tcGlsZXJIb3N0RGVsZWdhdGlvbnMsICdnZXRTb3VyY2VGaWxlJ3wnZmlsZUV4aXN0cyc+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRlbGVnYXRlOiBFeHRlbmRlZFRzQ29tcGlsZXJIb3N0KSB7fVxuXG4gIHByaXZhdGUgZGVsZWdhdGVNZXRob2Q8TSBleHRlbmRzIGtleW9mIEV4dGVuZGVkVHNDb21waWxlckhvc3Q+KG5hbWU6IE0pOlxuICAgICAgRXh0ZW5kZWRUc0NvbXBpbGVySG9zdFtNXSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCA/ICh0aGlzLmRlbGVnYXRlW25hbWVdIGFzIGFueSkuYmluZCh0aGlzLmRlbGVnYXRlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIEV4Y2x1ZGVkIGFyZSAnZ2V0U291cmNlRmlsZScgYW5kICdmaWxlRXhpc3RzJywgd2hpY2ggYXJlIGFjdHVhbGx5IGltcGxlbWVudGVkIGJ5IE5nQ29tcGlsZXJIb3N0XG4gIC8vIGJlbG93LlxuICBjcmVhdGVIYXNoID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgnY3JlYXRlSGFzaCcpO1xuICBkaXJlY3RvcnlFeGlzdHMgPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCdkaXJlY3RvcnlFeGlzdHMnKTtcbiAgZmlsZU5hbWVUb01vZHVsZU5hbWUgPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCdmaWxlTmFtZVRvTW9kdWxlTmFtZScpO1xuICBnZXRDYW5jZWxsYXRpb25Ub2tlbiA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldENhbmNlbGxhdGlvblRva2VuJyk7XG4gIGdldENhbm9uaWNhbEZpbGVOYW1lID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgnZ2V0Q2Fub25pY2FsRmlsZU5hbWUnKTtcbiAgZ2V0Q3VycmVudERpcmVjdG9yeSA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldEN1cnJlbnREaXJlY3RvcnknKTtcbiAgZ2V0RGVmYXVsdExpYkZpbGVOYW1lID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgnZ2V0RGVmYXVsdExpYkZpbGVOYW1lJyk7XG4gIGdldERlZmF1bHRMaWJMb2NhdGlvbiA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldERlZmF1bHRMaWJMb2NhdGlvbicpO1xuICBnZXREaXJlY3RvcmllcyA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldERpcmVjdG9yaWVzJyk7XG4gIGdldEVudmlyb25tZW50VmFyaWFibGUgPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCdnZXRFbnZpcm9ubWVudFZhcmlhYmxlJyk7XG4gIGdldE1vZGlmaWVkUmVzb3VyY2VGaWxlcyA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldE1vZGlmaWVkUmVzb3VyY2VGaWxlcycpO1xuICBnZXROZXdMaW5lID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgnZ2V0TmV3TGluZScpO1xuICBnZXRQYXJzZWRDb21tYW5kTGluZSA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ2dldFBhcnNlZENvbW1hbmRMaW5lJyk7XG4gIGdldFNvdXJjZUZpbGVCeVBhdGggPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCdnZXRTb3VyY2VGaWxlQnlQYXRoJyk7XG4gIHJlYWREaXJlY3RvcnkgPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCdyZWFkRGlyZWN0b3J5Jyk7XG4gIHJlYWRGaWxlID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgncmVhZEZpbGUnKTtcbiAgcmVhZFJlc291cmNlID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgncmVhZFJlc291cmNlJyk7XG4gIHJlYWxwYXRoID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgncmVhbHBhdGgnKTtcbiAgcmVzb2x2ZU1vZHVsZU5hbWVzID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgncmVzb2x2ZU1vZHVsZU5hbWVzJyk7XG4gIHJlc29sdmVUeXBlUmVmZXJlbmNlRGlyZWN0aXZlcyA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ3Jlc29sdmVUeXBlUmVmZXJlbmNlRGlyZWN0aXZlcycpO1xuICByZXNvdXJjZU5hbWVUb0ZpbGVOYW1lID0gdGhpcy5kZWxlZ2F0ZU1ldGhvZCgncmVzb3VyY2VOYW1lVG9GaWxlTmFtZScpO1xuICB0cmFjZSA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ3RyYWNlJyk7XG4gIHVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXMgPSB0aGlzLmRlbGVnYXRlTWV0aG9kKCd1c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzJyk7XG4gIHdyaXRlRmlsZSA9IHRoaXMuZGVsZWdhdGVNZXRob2QoJ3dyaXRlRmlsZScpO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYHRzLkNvbXBpbGVySG9zdGAgKHBsdXMgYW55IGV4dGVuc2lvbiBtZXRob2RzIGZyb20gYEV4dGVuZGVkVHNDb21waWxlckhvc3RgKS5cbiAqXG4gKiBJbiBvcmRlciBmb3IgYSBjb25zdW1lciB0byBpbmNsdWRlIEFuZ3VsYXIgY29tcGlsYXRpb24gaW4gdGhlaXIgVHlwZVNjcmlwdCBjb21waWxlciwgdGhlXG4gKiBgdHMuUHJvZ3JhbWAgbXVzdCBiZSBjcmVhdGVkIHdpdGggYSBob3N0IHRoYXQgYWRkcyBBbmd1bGFyLXNwZWNpZmljIGZpbGVzIChlLmcuIGZhY3RvcmllcyxcbiAqIHN1bW1hcmllcywgdGhlIHRlbXBsYXRlIHR5cGUtY2hlY2tpbmcgZmlsZSwgZXRjKSB0byB0aGUgY29tcGlsYXRpb24uIGBOZ0NvbXBpbGVySG9zdGAgaXMgdGhlXG4gKiBob3N0IGltcGxlbWVudGF0aW9uIHdoaWNoIHN1cHBvcnRzIHRoaXMuXG4gKlxuICogVGhlIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbnMgaGVyZSBlbnN1cmUgdGhhdCBgTmdDb21waWxlckhvc3RgIGZ1bGx5IGRlbGVnYXRlcyB0b1xuICogYEV4dGVuZGVkVHNDb21waWxlckhvc3RgIG1ldGhvZHMgd2hlbmV2ZXIgcHJlc2VudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nQ29tcGlsZXJIb3N0IGV4dGVuZHMgRGVsZWdhdGluZ0NvbXBpbGVySG9zdCBpbXBsZW1lbnRzXG4gICAgUmVxdWlyZWRDb21waWxlckhvc3REZWxlZ2F0aW9ucywgRXh0ZW5kZWRUc0NvbXBpbGVySG9zdCB7XG4gIHJlYWRvbmx5IGZhY3RvcnlUcmFja2VyOiBGYWN0b3J5VHJhY2tlcnxudWxsID0gbnVsbDtcbiAgcmVhZG9ubHkgZW50cnlQb2ludDogQWJzb2x1dGVGc1BhdGh8bnVsbCA9IG51bGw7XG4gIHJlYWRvbmx5IGRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW107XG5cbiAgcmVhZG9ubHkgaW5wdXRGaWxlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICByZWFkb25seSByb290RGlyczogUmVhZG9ubHlBcnJheTxBYnNvbHV0ZUZzUGF0aD47XG4gIHJlYWRvbmx5IHR5cGVDaGVja0ZpbGU6IEFic29sdXRlRnNQYXRoO1xuICByZWFkb25seSBmYWN0b3J5RmlsZXM6IEFic29sdXRlRnNQYXRoW107XG4gIHJlYWRvbmx5IHN1bW1hcnlGaWxlczogQWJzb2x1dGVGc1BhdGhbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGRlbGVnYXRlOiBFeHRlbmRlZFRzQ29tcGlsZXJIb3N0LCBpbnB1dEZpbGVzOiBSZWFkb25seUFycmF5PHN0cmluZz4sXG4gICAgICByb290RGlyczogUmVhZG9ubHlBcnJheTxBYnNvbHV0ZUZzUGF0aD4sIHByaXZhdGUgc2hpbXM6IFNoaW1HZW5lcmF0b3JbXSxcbiAgICAgIGVudHJ5UG9pbnQ6IEFic29sdXRlRnNQYXRofG51bGwsIHR5cGVDaGVja0ZpbGU6IEFic29sdXRlRnNQYXRoLFxuICAgICAgZmFjdG9yeUZpbGVzOiBBYnNvbHV0ZUZzUGF0aFtdLCBzdW1tYXJ5RmlsZXM6IEFic29sdXRlRnNQYXRoW10sXG4gICAgICBmYWN0b3J5VHJhY2tlcjogRmFjdG9yeVRyYWNrZXJ8bnVsbCwgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSkge1xuICAgIHN1cGVyKGRlbGVnYXRlKTtcblxuICAgIHRoaXMuZmFjdG9yeVRyYWNrZXIgPSBmYWN0b3J5VHJhY2tlcjtcbiAgICB0aGlzLmVudHJ5UG9pbnQgPSBlbnRyeVBvaW50O1xuICAgIHRoaXMudHlwZUNoZWNrRmlsZSA9IHR5cGVDaGVja0ZpbGU7XG4gICAgdGhpcy5mYWN0b3J5RmlsZXMgPSBmYWN0b3J5RmlsZXM7XG4gICAgdGhpcy5zdW1tYXJ5RmlsZXMgPSBzdW1tYXJ5RmlsZXM7XG4gICAgdGhpcy5kaWFnbm9zdGljcyA9IGRpYWdub3N0aWNzO1xuICAgIHRoaXMuaW5wdXRGaWxlcyA9IGlucHV0RmlsZXM7XG4gICAgdGhpcy5yb290RGlycyA9IHJvb3REaXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBgTmdDb21waWxlckhvc3RgIGZyb20gYSBkZWxlZ2F0ZSBob3N0LCBhbiBhcnJheSBvZiBpbnB1dCBmaWxlbmFtZXMsIGFuZCB0aGUgZnVsbCBzZXRcbiAgICogb2YgVHlwZVNjcmlwdCBhbmQgQW5ndWxhciBjb21waWxlciBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdyYXAoXG4gICAgICBkZWxlZ2F0ZTogdHMuQ29tcGlsZXJIb3N0LCBpbnB1dEZpbGVzOiBSZWFkb25seUFycmF5PHN0cmluZz4sXG4gICAgICBvcHRpb25zOiBOZ0NvbXBpbGVyT3B0aW9ucyk6IE5nQ29tcGlsZXJIb3N0IHtcbiAgICAvLyBUT0RPKGFseGh1Yik6IHJlbW92ZSB0aGUgZmFsbGJhY2sgdG8gYWxsb3dFbXB0eUNvZGVnZW5GaWxlcyBhZnRlciB2ZXJpZnlpbmcgdGhhdCB0aGUgcmVzdCBvZlxuICAgIC8vIG91ciBidWlsZCB0b29saW5nIGlzIG5vIGxvbmdlciByZWx5aW5nIG9uIGl0LlxuICAgIGNvbnN0IGFsbG93RW1wdHlDb2RlZ2VuRmlsZXMgPSBvcHRpb25zLmFsbG93RW1wdHlDb2RlZ2VuRmlsZXMgfHwgZmFsc2U7XG4gICAgY29uc3Qgc2hvdWxkR2VuZXJhdGVGYWN0b3J5U2hpbXMgPSBvcHRpb25zLmdlbmVyYXRlTmdGYWN0b3J5U2hpbXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIG9wdGlvbnMuZ2VuZXJhdGVOZ0ZhY3RvcnlTaGltcyA6XG4gICAgICAgIGFsbG93RW1wdHlDb2RlZ2VuRmlsZXM7XG5cbiAgICBjb25zdCBzaG91bGRHZW5lcmF0ZVN1bW1hcnlTaGltcyA9IG9wdGlvbnMuZ2VuZXJhdGVOZ1N1bW1hcnlTaGltcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgb3B0aW9ucy5nZW5lcmF0ZU5nU3VtbWFyeVNoaW1zIDpcbiAgICAgICAgYWxsb3dFbXB0eUNvZGVnZW5GaWxlcztcblxuICAgIGxldCByb290RmlsZXMgPSBbLi4uaW5wdXRGaWxlc107XG4gICAgbGV0IG5vcm1hbGl6ZWRJbnB1dEZpbGVzID0gaW5wdXRGaWxlcy5tYXAobiA9PiByZXNvbHZlKG4pKTtcblxuICAgIGNvbnN0IGdlbmVyYXRvcnM6IFNoaW1HZW5lcmF0b3JbXSA9IFtdO1xuICAgIGxldCBzdW1tYXJ5R2VuZXJhdG9yOiBTdW1tYXJ5R2VuZXJhdG9yfG51bGwgPSBudWxsO1xuICAgIGxldCBzdW1tYXJ5RmlsZXM6IEFic29sdXRlRnNQYXRoW107XG5cbiAgICBpZiAoc2hvdWxkR2VuZXJhdGVTdW1tYXJ5U2hpbXMpIHtcbiAgICAgIC8vIFN1bW1hcnkgZ2VuZXJhdGlvbi5cbiAgICAgIHN1bW1hcnlHZW5lcmF0b3IgPSBTdW1tYXJ5R2VuZXJhdG9yLmZvclJvb3RGaWxlcyhub3JtYWxpemVkSW5wdXRGaWxlcyk7XG4gICAgICBnZW5lcmF0b3JzLnB1c2goc3VtbWFyeUdlbmVyYXRvcik7XG4gICAgICBzdW1tYXJ5RmlsZXMgPSBzdW1tYXJ5R2VuZXJhdG9yLmdldFN1bW1hcnlGaWxlTmFtZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VtbWFyeUZpbGVzID0gW107XG4gICAgfVxuXG4gICAgbGV0IGZhY3RvcnlUcmFja2VyOiBGYWN0b3J5VHJhY2tlcnxudWxsID0gbnVsbDtcbiAgICBsZXQgZmFjdG9yeUZpbGVzOiBBYnNvbHV0ZUZzUGF0aFtdO1xuICAgIGlmIChzaG91bGRHZW5lcmF0ZUZhY3RvcnlTaGltcykge1xuICAgICAgLy8gRmFjdG9yeSBnZW5lcmF0aW9uLlxuICAgICAgY29uc3QgZmFjdG9yeUdlbmVyYXRvciA9IEZhY3RvcnlHZW5lcmF0b3IuZm9yUm9vdEZpbGVzKG5vcm1hbGl6ZWRJbnB1dEZpbGVzKTtcbiAgICAgIGNvbnN0IGZhY3RvcnlGaWxlTWFwID0gZmFjdG9yeUdlbmVyYXRvci5mYWN0b3J5RmlsZU1hcDtcblxuICAgICAgZmFjdG9yeUZpbGVzID0gQXJyYXkuZnJvbShmYWN0b3J5RmlsZU1hcC5rZXlzKCkpO1xuICAgICAgcm9vdEZpbGVzLnB1c2goLi4uZmFjdG9yeUZpbGVzKTtcbiAgICAgIGdlbmVyYXRvcnMucHVzaChmYWN0b3J5R2VuZXJhdG9yKTtcblxuICAgICAgZmFjdG9yeVRyYWNrZXIgPSBuZXcgRmFjdG9yeVRyYWNrZXIoZmFjdG9yeUdlbmVyYXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhY3RvcnlGaWxlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIERvbmUgc2VwYXJhdGVseSB0byBwcmVzZXJ2ZSB0aGUgb3JkZXIgb2YgZmFjdG9yeSBmaWxlcyBiZWZvcmUgc3VtbWFyeSBmaWxlcyBpbiByb290RmlsZXMuXG4gICAgLy8gVE9ETyhhbHhodWIpOiB2YWxpZGF0ZSB0aGF0IHRoaXMgaXMgbmVjZXNzYXJ5LlxuICAgIHJvb3RGaWxlcy5wdXNoKC4uLnN1bW1hcnlGaWxlcyk7XG5cblxuICAgIGNvbnN0IHJvb3REaXJzID0gZ2V0Um9vdERpcnMoZGVsZWdhdGUsIG9wdGlvbnMgYXMgdHMuQ29tcGlsZXJPcHRpb25zKTtcblxuICAgIGNvbnN0IHR5cGVDaGVja0ZpbGUgPSB0eXBlQ2hlY2tGaWxlUGF0aChyb290RGlycyk7XG4gICAgZ2VuZXJhdG9ycy5wdXNoKG5ldyBUeXBlQ2hlY2tTaGltR2VuZXJhdG9yKHR5cGVDaGVja0ZpbGUpKTtcbiAgICByb290RmlsZXMucHVzaCh0eXBlQ2hlY2tGaWxlKTtcblxuICAgIGxldCBkaWFnbm9zdGljczogdHMuRGlhZ25vc3RpY1tdID0gW107XG5cbiAgICBsZXQgZW50cnlQb2ludDogQWJzb2x1dGVGc1BhdGh8bnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMuZmxhdE1vZHVsZU91dEZpbGUgIT0gbnVsbCAmJiBvcHRpb25zLmZsYXRNb2R1bGVPdXRGaWxlICE9PSAnJykge1xuICAgICAgZW50cnlQb2ludCA9IGZpbmRGbGF0SW5kZXhFbnRyeVBvaW50KG5vcm1hbGl6ZWRJbnB1dEZpbGVzKTtcbiAgICAgIGlmIChlbnRyeVBvaW50ID09PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3IgbWVzc2FnZSB0YWxrcyBzcGVjaWZpY2FsbHkgYWJvdXQgaGF2aW5nIGEgc2luZ2xlIC50cyBmaWxlIGluIFwiZmlsZXNcIi4gSG93ZXZlclxuICAgICAgICAvLyB0aGUgYWN0dWFsIGxvZ2ljIGlzIGEgYml0IG1vcmUgcGVybWlzc2l2ZS4gSWYgYSBzaW5nbGUgZmlsZSBleGlzdHMsIHRoYXQgd2lsbCBiZSB0YWtlbixcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBoaWdoZXN0IGxldmVsIChzaG9ydGVzdCBwYXRoKSBcImluZGV4LnRzXCIgZmlsZSB3aWxsIGJlIHVzZWQgYXMgdGhlIGZsYXRcbiAgICAgICAgLy8gbW9kdWxlIGVudHJ5IHBvaW50IGluc3RlYWQuIElmIG5laXRoZXIgb2YgdGhlc2UgY29uZGl0aW9ucyBhcHBseSwgdGhlIGVycm9yIGJlbG93IGlzXG4gICAgICAgIC8vIGdpdmVuLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgdXNlciBpcyBub3QgaW5mb3JtZWQgYWJvdXQgdGhlIFwiaW5kZXgudHNcIiBvcHRpb24gYXMgdGhpcyBiZWhhdmlvciBpcyBkZXByZWNhdGVkIC1cbiAgICAgICAgLy8gYW4gZXhwbGljaXQgZW50cnlwb2ludCBzaG91bGQgYWx3YXlzIGJlIHNwZWNpZmllZC5cbiAgICAgICAgZGlhZ25vc3RpY3MucHVzaCh7XG4gICAgICAgICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5FcnJvcixcbiAgICAgICAgICBjb2RlOiBuZ0Vycm9yQ29kZShFcnJvckNvZGUuQ09ORklHX0ZMQVRfTU9EVUxFX05PX0lOREVYKSxcbiAgICAgICAgICBmaWxlOiB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBsZW5ndGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtZXNzYWdlVGV4dDpcbiAgICAgICAgICAgICAgJ0FuZ3VsYXIgY29tcGlsZXIgb3B0aW9uIFwiZmxhdE1vZHVsZU91dEZpbGVcIiByZXF1aXJlcyBvbmUgYW5kIG9ubHkgb25lIC50cyBmaWxlIGluIHRoZSBcImZpbGVzXCIgZmllbGQuJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmbGF0TW9kdWxlSWQgPSBvcHRpb25zLmZsYXRNb2R1bGVJZCB8fCBudWxsO1xuICAgICAgICBjb25zdCBmbGF0TW9kdWxlT3V0RmlsZSA9IG5vcm1hbGl6ZVNlcGFyYXRvcnMob3B0aW9ucy5mbGF0TW9kdWxlT3V0RmlsZSk7XG4gICAgICAgIGNvbnN0IGZsYXRJbmRleEdlbmVyYXRvciA9XG4gICAgICAgICAgICBuZXcgRmxhdEluZGV4R2VuZXJhdG9yKGVudHJ5UG9pbnQsIGZsYXRNb2R1bGVPdXRGaWxlLCBmbGF0TW9kdWxlSWQpO1xuICAgICAgICBnZW5lcmF0b3JzLnB1c2goZmxhdEluZGV4R2VuZXJhdG9yKTtcbiAgICAgICAgcm9vdEZpbGVzLnB1c2goZmxhdEluZGV4R2VuZXJhdG9yLmZsYXRJbmRleFBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgTmdDb21waWxlckhvc3QoXG4gICAgICAgIGRlbGVnYXRlLCByb290RmlsZXMsIHJvb3REaXJzLCBnZW5lcmF0b3JzLCBlbnRyeVBvaW50LCB0eXBlQ2hlY2tGaWxlLCBmYWN0b3J5RmlsZXMsXG4gICAgICAgIHN1bW1hcnlGaWxlcywgZmFjdG9yeVRyYWNrZXIsIGRpYWdub3N0aWNzKTtcbiAgfVxuXG4gIGdldFNvdXJjZUZpbGUoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBsYW5ndWFnZVZlcnNpb246IHRzLlNjcmlwdFRhcmdldCxcbiAgICAgIG9uRXJyb3I/OiAoKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCl8dW5kZWZpbmVkLFxuICAgICAgc2hvdWxkQ3JlYXRlTmV3U291cmNlRmlsZT86IGJvb2xlYW58dW5kZWZpbmVkKTogdHMuU291cmNlRmlsZXx1bmRlZmluZWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGltcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZ2VuZXJhdG9yID0gdGhpcy5zaGltc1tpXTtcbiAgICAgIC8vIFR5cGVTY3JpcHQgaW50ZXJuYWwgcGF0aHMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgUE9TSVgtbGlrZSBhYnNvbHV0ZSBmaWxlIHBhdGhzLlxuICAgICAgY29uc3QgYWJzb2x1dGVGc1BhdGggPSByZXNvbHZlKGZpbGVOYW1lKTtcbiAgICAgIGlmIChnZW5lcmF0b3IucmVjb2duaXplKGFic29sdXRlRnNQYXRoKSkge1xuICAgICAgICBjb25zdCByZWFkRmlsZSA9IChvcmlnaW5hbEZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldFNvdXJjZUZpbGUoXG4gICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEZpbGUsIGxhbmd1YWdlVmVyc2lvbiwgb25FcnJvciwgc2hvdWxkQ3JlYXRlTmV3U291cmNlRmlsZSkgfHxcbiAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ2VuZXJhdG9yLmdlbmVyYXRlKGFic29sdXRlRnNQYXRoLCByZWFkRmlsZSkgfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldFNvdXJjZUZpbGUoXG4gICAgICAgIGZpbGVOYW1lLCBsYW5ndWFnZVZlcnNpb24sIG9uRXJyb3IsIHNob3VsZENyZWF0ZU5ld1NvdXJjZUZpbGUpO1xuICB9XG5cbiAgZmlsZUV4aXN0cyhmaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gQ29uc2lkZXIgdGhlIGZpbGUgYXMgZXhpc3Rpbmcgd2hlbmV2ZXJcbiAgICAvLyAgMSkgaXQgcmVhbGx5IGRvZXMgZXhpc3QgaW4gdGhlIGRlbGVnYXRlIGhvc3QsIG9yXG4gICAgLy8gIDIpIGF0IGxlYXN0IG9uZSBvZiB0aGUgc2hpbSBnZW5lcmF0b3JzIHJlY29nbml6ZXMgaXRcbiAgICAvLyBOb3RlIHRoYXQgd2UgY2FuIHBhc3MgdGhlIGZpbGUgbmFtZSBhcyBicmFuZGVkIGFic29sdXRlIGZzIHBhdGggYmVjYXVzZSBUeXBlU2NyaXB0XG4gICAgLy8gaW50ZXJuYWxseSBvbmx5IHBhc3NlcyBQT1NJWC1saWtlIHBhdGhzLlxuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmZpbGVFeGlzdHMoZmlsZU5hbWUpIHx8XG4gICAgICAgIHRoaXMuc2hpbXMuc29tZShzaGltID0+IHNoaW0ucmVjb2duaXplKHJlc29sdmUoZmlsZU5hbWUpKSk7XG4gIH1cblxuICBnZXQgdW5pZmllZE1vZHVsZXNIb3N0KCk6IFVuaWZpZWRNb2R1bGVzSG9zdHxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWxlTmFtZVRvTW9kdWxlTmFtZSAhPT0gdW5kZWZpbmVkID8gdGhpcyBhcyBVbmlmaWVkTW9kdWxlc0hvc3QgOiBudWxsO1xuICB9XG59XG4iXX0=