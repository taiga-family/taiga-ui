(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/analysis/decoration_analyzer", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/annotations", "@angular/compiler-cli/src/ngtsc/cycles", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/metadata", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/scope", "@angular/compiler-cli/ngcc/src/migrations/missing_injectable_migration", "@angular/compiler-cli/ngcc/src/migrations/undecorated_child_migration", "@angular/compiler-cli/ngcc/src/migrations/undecorated_parent_migration", "@angular/compiler-cli/ngcc/src/analysis/migration_host", "@angular/compiler-cli/ngcc/src/analysis/ngcc_trait_compiler", "@angular/compiler-cli/ngcc/src/analysis/types", "@angular/compiler-cli/ngcc/src/analysis/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var annotations_1 = require("@angular/compiler-cli/src/ngtsc/annotations");
    var cycles_1 = require("@angular/compiler-cli/src/ngtsc/cycles");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var metadata_1 = require("@angular/compiler-cli/src/ngtsc/metadata");
    var partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    var scope_1 = require("@angular/compiler-cli/src/ngtsc/scope");
    var missing_injectable_migration_1 = require("@angular/compiler-cli/ngcc/src/migrations/missing_injectable_migration");
    var undecorated_child_migration_1 = require("@angular/compiler-cli/ngcc/src/migrations/undecorated_child_migration");
    var undecorated_parent_migration_1 = require("@angular/compiler-cli/ngcc/src/migrations/undecorated_parent_migration");
    var migration_host_1 = require("@angular/compiler-cli/ngcc/src/analysis/migration_host");
    var ngcc_trait_compiler_1 = require("@angular/compiler-cli/ngcc/src/analysis/ngcc_trait_compiler");
    var types_1 = require("@angular/compiler-cli/ngcc/src/analysis/types");
    var util_1 = require("@angular/compiler-cli/ngcc/src/analysis/util");
    /**
     * Simple class that resolves and loads files directly from the filesystem.
     */
    var NgccResourceLoader = /** @class */ (function () {
        function NgccResourceLoader(fs) {
            this.fs = fs;
            this.canPreload = false;
        }
        NgccResourceLoader.prototype.preload = function () {
            throw new Error('Not implemented.');
        };
        NgccResourceLoader.prototype.load = function (url) {
            return this.fs.readFile(file_system_1.resolve(url));
        };
        NgccResourceLoader.prototype.resolve = function (url, containingFile) {
            return file_system_1.resolve(file_system_1.dirname(file_system_1.absoluteFrom(containingFile)), url);
        };
        return NgccResourceLoader;
    }());
    /**
     * This Analyzer will analyze the files that have decorated classes that need to be transformed.
     */
    var DecorationAnalyzer = /** @class */ (function () {
        function DecorationAnalyzer(fs, bundle, reflectionHost, referencesRegistry, diagnosticHandler, tsConfig) {
            if (diagnosticHandler === void 0) { diagnosticHandler = function () { }; }
            if (tsConfig === void 0) { tsConfig = null; }
            this.fs = fs;
            this.bundle = bundle;
            this.reflectionHost = reflectionHost;
            this.referencesRegistry = referencesRegistry;
            this.diagnosticHandler = diagnosticHandler;
            this.tsConfig = tsConfig;
            this.program = this.bundle.src.program;
            this.options = this.bundle.src.options;
            this.host = this.bundle.src.host;
            this.typeChecker = this.bundle.src.program.getTypeChecker();
            this.rootDirs = this.bundle.rootDirs;
            this.packagePath = this.bundle.entryPoint.package;
            this.isCore = this.bundle.isCore;
            this.compilerOptions = this.tsConfig !== null ? this.tsConfig.options : {};
            this.moduleResolver = new imports_1.ModuleResolver(this.program, this.options, this.host, /* moduleResolutionCache */ null);
            this.resourceManager = new NgccResourceLoader(this.fs);
            this.metaRegistry = new metadata_1.LocalMetadataRegistry();
            this.dtsMetaReader = new metadata_1.DtsMetadataReader(this.typeChecker, this.reflectionHost);
            this.fullMetaReader = new metadata_1.CompoundMetadataReader([this.metaRegistry, this.dtsMetaReader]);
            this.refEmitter = new imports_1.ReferenceEmitter([
                new imports_1.LocalIdentifierStrategy(),
                new imports_1.AbsoluteModuleStrategy(this.program, this.typeChecker, this.moduleResolver, this.reflectionHost),
                // TODO(alxhub): there's no reason why ngcc needs the "logical file system" logic here, as ngcc
                // projects only ever have one rootDir. Instead, ngcc should just switch its emitted import
                // based on whether a bestGuessOwningModule is present in the Reference.
                new imports_1.LogicalProjectStrategy(this.reflectionHost, new file_system_1.LogicalFileSystem(this.rootDirs)),
            ]);
            this.aliasingHost = this.bundle.entryPoint.generateDeepReexports ?
                new imports_1.PrivateExportAliasingHost(this.reflectionHost) :
                null;
            this.dtsModuleScopeResolver = new scope_1.MetadataDtsModuleScopeResolver(this.dtsMetaReader, this.aliasingHost);
            this.scopeRegistry = new scope_1.LocalModuleScopeRegistry(this.metaRegistry, this.dtsModuleScopeResolver, this.refEmitter, this.aliasingHost);
            this.fullRegistry = new metadata_1.CompoundMetadataRegistry([this.metaRegistry, this.scopeRegistry]);
            this.evaluator = new partial_evaluator_1.PartialEvaluator(this.reflectionHost, this.typeChecker, /* dependencyTracker */ null);
            this.importGraph = new cycles_1.ImportGraph(this.moduleResolver);
            this.cycleAnalyzer = new cycles_1.CycleAnalyzer(this.importGraph);
            this.injectableRegistry = new metadata_1.InjectableClassRegistry(this.reflectionHost);
            this.handlers = [
                new annotations_1.ComponentDecoratorHandler(this.reflectionHost, this.evaluator, this.fullRegistry, this.fullMetaReader, this.scopeRegistry, this.scopeRegistry, this.isCore, this.resourceManager, this.rootDirs, !!this.compilerOptions.preserveWhitespaces, 
                /* i18nUseExternalIds */ true, this.bundle.enableI18nLegacyMessageIdFormat, this.moduleResolver, this.cycleAnalyzer, this.refEmitter, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, util_1.NOOP_DEPENDENCY_TRACKER, this.injectableRegistry, /* annotateForClosureCompiler */ false),
                // See the note in ngtsc about why this cast is needed.
                // clang-format off
                new annotations_1.DirectiveDecoratorHandler(this.reflectionHost, this.evaluator, this.fullRegistry, this.scopeRegistry, this.fullMetaReader, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, this.injectableRegistry, this.isCore, 
                /* annotateForClosureCompiler */ false),
                // clang-format on
                // Pipe handler must be before injectable handler in list so pipe factories are printed
                // before injectable factories (so injectable factories can delegate to them)
                new annotations_1.PipeDecoratorHandler(this.reflectionHost, this.evaluator, this.metaRegistry, this.scopeRegistry, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, this.injectableRegistry, this.isCore),
                new annotations_1.InjectableDecoratorHandler(this.reflectionHost, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, this.isCore, 
                /* strictCtorDeps */ false, this.injectableRegistry, /* errorOnDuplicateProv */ false),
                new annotations_1.NgModuleDecoratorHandler(this.reflectionHost, this.evaluator, this.fullMetaReader, this.fullRegistry, this.scopeRegistry, this.referencesRegistry, this.isCore, /* routeAnalyzer */ null, this.refEmitter, 
                /* factoryTracker */ null, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, 
                /* annotateForClosureCompiler */ false, this.injectableRegistry),
            ];
            this.compiler = new ngcc_trait_compiler_1.NgccTraitCompiler(this.handlers, this.reflectionHost);
            this.migrations = [
                new undecorated_parent_migration_1.UndecoratedParentMigration(),
                new undecorated_child_migration_1.UndecoratedChildMigration(),
                new missing_injectable_migration_1.MissingInjectableMigration(),
            ];
        }
        /**
         * Analyze a program to find all the decorated files should be transformed.
         *
         * @returns a map of the source files to the analysis for those files.
         */
        DecorationAnalyzer.prototype.analyzeProgram = function () {
            var e_1, _a, e_2, _b;
            try {
                for (var _c = tslib_1.__values(this.program.getSourceFiles()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var sourceFile = _d.value;
                    if (!sourceFile.isDeclarationFile && util_1.isWithinPackage(this.packagePath, sourceFile)) {
                        this.compiler.analyzeFile(sourceFile);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.applyMigrations();
            this.compiler.resolve();
            this.reportDiagnostics();
            var decorationAnalyses = new types_1.DecorationAnalyses();
            try {
                for (var _e = tslib_1.__values(this.compiler.analyzedFiles), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var analyzedFile = _f.value;
                    var compiledFile = this.compileFile(analyzedFile);
                    decorationAnalyses.set(compiledFile.sourceFile, compiledFile);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return decorationAnalyses;
        };
        DecorationAnalyzer.prototype.applyMigrations = function () {
            var _this = this;
            var migrationHost = new migration_host_1.DefaultMigrationHost(this.reflectionHost, this.fullMetaReader, this.evaluator, this.compiler, this.bundle.entryPoint.path);
            this.migrations.forEach(function (migration) {
                _this.compiler.analyzedFiles.forEach(function (analyzedFile) {
                    var records = _this.compiler.recordsFor(analyzedFile);
                    if (records === null) {
                        throw new Error('Assertion error: file to migrate must have records.');
                    }
                    records.forEach(function (record) {
                        var addDiagnostic = function (diagnostic) {
                            if (record.metaDiagnostics === null) {
                                record.metaDiagnostics = [];
                            }
                            record.metaDiagnostics.push(diagnostic);
                        };
                        try {
                            var result = migration.apply(record.node, migrationHost);
                            if (result !== null) {
                                addDiagnostic(result);
                            }
                        }
                        catch (e) {
                            if (diagnostics_1.isFatalDiagnosticError(e)) {
                                addDiagnostic(e.toDiagnostic());
                            }
                            else {
                                throw e;
                            }
                        }
                    });
                });
            });
        };
        DecorationAnalyzer.prototype.reportDiagnostics = function () {
            this.compiler.diagnostics.forEach(this.diagnosticHandler);
        };
        DecorationAnalyzer.prototype.compileFile = function (sourceFile) {
            var e_3, _a;
            var constantPool = new compiler_1.ConstantPool();
            var records = this.compiler.recordsFor(sourceFile);
            if (records === null) {
                throw new Error('Assertion error: file to compile must have records.');
            }
            var compiledClasses = [];
            try {
                for (var records_1 = tslib_1.__values(records), records_1_1 = records_1.next(); !records_1_1.done; records_1_1 = records_1.next()) {
                    var record = records_1_1.value;
                    var compilation = this.compiler.compile(record.node, constantPool);
                    if (compilation === null) {
                        continue;
                    }
                    compiledClasses.push({
                        name: record.node.name.text,
                        decorators: this.compiler.getAllDecorators(record.node),
                        declaration: record.node,
                        compilation: compilation
                    });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (records_1_1 && !records_1_1.done && (_a = records_1.return)) _a.call(records_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var reexports = this.getReexportsForSourceFile(sourceFile);
            return { constantPool: constantPool, sourceFile: sourceFile, compiledClasses: compiledClasses, reexports: reexports };
        };
        DecorationAnalyzer.prototype.getReexportsForSourceFile = function (sf) {
            var exportStatements = this.compiler.exportStatements;
            if (!exportStatements.has(sf.fileName)) {
                return [];
            }
            var exports = exportStatements.get(sf.fileName);
            var reexports = [];
            exports.forEach(function (_a, asAlias) {
                var _b = tslib_1.__read(_a, 2), fromModule = _b[0], symbolName = _b[1];
                reexports.push({ asAlias: asAlias, fromModule: fromModule, symbolName: symbolName });
            });
            return reexports;
        };
        return DecorationAnalyzer;
    }());
    exports.DecorationAnalyzer = DecorationAnalyzer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdGlvbl9hbmFseXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9hbmFseXNpcy9kZWNvcmF0aW9uX2FuYWx5emVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDhDQUErQztJQUkvQywyRUFBb047SUFDcE4saUVBQXFFO0lBQ3JFLDJFQUFzRTtJQUN0RSwyRUFBNkc7SUFDN0csbUVBQXdOO0lBQ3hOLHFFQUFnSztJQUNoSyx1RkFBc0U7SUFDdEUsK0RBQWtHO0lBSWxHLHVIQUFzRjtJQUN0RixxSEFBb0Y7SUFDcEYsdUhBQXNGO0lBR3RGLHlGQUFzRDtJQUN0RCxtR0FBd0Q7SUFDeEQsdUVBQXdFO0lBQ3hFLHFFQUFnRTtJQUloRTs7T0FFRztJQUNIO1FBQ0UsNEJBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQ2xDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFEa0IsQ0FBQztRQUV0QyxvQ0FBTyxHQUFQO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxpQ0FBSSxHQUFKLFVBQUssR0FBVztZQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxvQ0FBTyxHQUFQLFVBQVEsR0FBVyxFQUFFLGNBQXNCO1lBQ3pDLE9BQU8scUJBQU8sQ0FBQyxxQkFBTyxDQUFDLDBCQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQUVEOztPQUVHO0lBQ0g7UUEyRUUsNEJBQ1ksRUFBYyxFQUFVLE1BQXdCLEVBQ2hE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WSxjQUFBLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxlQUFlLGlCQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQztRQUM1RSxDQUFDO1FBRU8sc0RBQXlCLEdBQWpDLFVBQWtDLEVBQWlCO1lBQ2pELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELElBQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFFLENBQUM7WUFFbkQsSUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUF3QixFQUFFLE9BQU87b0JBQWpDLDBCQUF3QixFQUF2QixrQkFBVSxFQUFFLGtCQUFVO2dCQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxTQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FBQyxBQTVMRCxJQTRMQztJQTVMWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7UGFyc2VkQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IHtDb21wb25lbnREZWNvcmF0b3JIYW5kbGVyLCBEaXJlY3RpdmVEZWNvcmF0b3JIYW5kbGVyLCBJbmplY3RhYmxlRGVjb3JhdG9ySGFuZGxlciwgTmdNb2R1bGVEZWNvcmF0b3JIYW5kbGVyLCBQaXBlRGVjb3JhdG9ySGFuZGxlciwgUmVmZXJlbmNlc1JlZ2lzdHJ5LCBSZXNvdXJjZUxvYWRlcn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2Fubm90YXRpb25zJztcbmltcG9ydCB7Q3ljbGVBbmFseXplciwgSW1wb3J0R3JhcGh9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9jeWNsZXMnO1xuaW1wb3J0IHtpc0ZhdGFsRGlhZ25vc3RpY0Vycm9yfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHthYnNvbHV0ZUZyb20sIGRpcm5hbWUsIEZpbGVTeXN0ZW0sIExvZ2ljYWxGaWxlU3lzdGVtLCByZXNvbHZlfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtBYnNvbHV0ZU1vZHVsZVN0cmF0ZWd5LCBMb2NhbElkZW50aWZpZXJTdHJhdGVneSwgTG9naWNhbFByb2plY3RTdHJhdGVneSwgTW9kdWxlUmVzb2x2ZXIsIE5PT1BfREVGQVVMVF9JTVBPUlRfUkVDT1JERVIsIFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3QsIFJlZXhwb3J0LCBSZWZlcmVuY2VFbWl0dGVyfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvaW1wb3J0cyc7XG5pbXBvcnQge0NvbXBvdW5kTWV0YWRhdGFSZWFkZXIsIENvbXBvdW5kTWV0YWRhdGFSZWdpc3RyeSwgRHRzTWV0YWRhdGFSZWFkZXIsIEluamVjdGFibGVDbGFzc1JlZ2lzdHJ5LCBMb2NhbE1ldGFkYXRhUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9tZXRhZGF0YSc7XG5pbXBvcnQge1BhcnRpYWxFdmFsdWF0b3J9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge0xvY2FsTW9kdWxlU2NvcGVSZWdpc3RyeSwgTWV0YWRhdGFEdHNNb2R1bGVTY29wZVJlc29sdmVyfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2Mvc2NvcGUnO1xuaW1wb3J0IHtEZWNvcmF0b3JIYW5kbGVyfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvdHJhbnNmb3JtJztcbmltcG9ydCB7TmdjY1JlZmxlY3Rpb25Ib3N0fSBmcm9tICcuLi9ob3N0L25nY2NfaG9zdCc7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vbWlncmF0aW9ucy9taWdyYXRpb24nO1xuaW1wb3J0IHtNaXNzaW5nSW5qZWN0YWJsZU1pZ3JhdGlvbn0gZnJvbSAnLi4vbWlncmF0aW9ucy9taXNzaW5nX2luamVjdGFibGVfbWlncmF0aW9uJztcbmltcG9ydCB7VW5kZWNvcmF0ZWRDaGlsZE1pZ3JhdGlvbn0gZnJvbSAnLi4vbWlncmF0aW9ucy91bmRlY29yYXRlZF9jaGlsZF9taWdyYXRpb24nO1xuaW1wb3J0IHtVbmRlY29yYXRlZFBhcmVudE1pZ3JhdGlvbn0gZnJvbSAnLi4vbWlncmF0aW9ucy91bmRlY29yYXRlZF9wYXJlbnRfbWlncmF0aW9uJztcbmltcG9ydCB7RW50cnlQb2ludEJ1bmRsZX0gZnJvbSAnLi4vcGFja2FnZXMvZW50cnlfcG9pbnRfYnVuZGxlJztcblxuaW1wb3J0IHtEZWZhdWx0TWlncmF0aW9uSG9zdH0gZnJvbSAnLi9taWdyYXRpb25faG9zdCc7XG5pbXBvcnQge05nY2NUcmFpdENvbXBpbGVyfSBmcm9tICcuL25nY2NfdHJhaXRfY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlZENsYXNzLCBDb21waWxlZEZpbGUsIERlY29yYXRpb25BbmFseXNlc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2lzV2l0aGluUGFja2FnZSwgTk9PUF9ERVBFTkRFTkNZX1RSQUNLRVJ9IGZyb20gJy4vdXRpbCc7XG5cblxuXG4vKipcbiAqIFNpbXBsZSBjbGFzcyB0aGF0IHJlc29sdmVzIGFuZCBsb2FkcyBmaWxlcyBkaXJlY3RseSBmcm9tIHRoZSBmaWxlc3lzdGVtLlxuICovXG5jbGFzcyBOZ2NjUmVzb3VyY2VMb2FkZXIgaW1wbGVtZW50cyBSZXNvdXJjZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnM6IEZpbGVTeXN0ZW0pIHt9XG4gIGNhblByZWxvYWQgPSBmYWxzZTtcbiAgcHJlbG9hZCgpOiB1bmRlZmluZWR8UHJvbWlzZTx2b2lkPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbiAgbG9hZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZnMucmVhZEZpbGUocmVzb2x2ZSh1cmwpKTtcbiAgfVxuICByZXNvbHZlKHVybDogc3RyaW5nLCBjb250YWluaW5nRmlsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVzb2x2ZShkaXJuYW1lKGFic29sdXRlRnJvbShjb250YWluaW5nRmlsZSkpLCB1cmwpO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBBbmFseXplciB3aWxsIGFuYWx5emUgdGhlIGZpbGVzIHRoYXQgaGF2ZSBkZWNvcmF0ZWQgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgdHJhbnNmb3JtZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNvcmF0aW9uQW5hbHl6ZXIge1xuICBwcml2YXRlIHByb2dyYW0gPSB0aGlzLmJ1bmRsZS5zcmMucHJvZ3JhbTtcbiAgcHJpdmF0ZSBvcHRpb25zID0gdGhpcy5idW5kbGUuc3JjLm9wdGlvbnM7XG4gIHByaXZhdGUgaG9zdCA9IHRoaXMuYnVuZGxlLnNyYy5ob3N0O1xuICBwcml2YXRlIHR5cGVDaGVja2VyID0gdGhpcy5idW5kbGUuc3JjLnByb2dyYW0uZ2V0VHlwZUNoZWNrZXIoKTtcbiAgcHJpdmF0ZSByb290RGlycyA9IHRoaXMuYnVuZGxlLnJvb3REaXJzO1xuICBwcml2YXRlIHBhY2thZ2VQYXRoID0gdGhpcy5idW5kbGUuZW50cnlQb2ludC5wYWNrYWdlO1xuICBwcml2YXRlIGlzQ29yZSA9IHRoaXMuYnVuZGxlLmlzQ29yZTtcbiAgcHJpdmF0ZSBjb21waWxlck9wdGlvbnMgPSB0aGlzLnRzQ29uZmlnICE9PSBudWxsID8gdGhpcy50c0NvbmZpZy5vcHRpb25zIDoge307XG5cbiAgbW9kdWxlUmVzb2x2ZXIgPVxuICAgICAgbmV3IE1vZHVsZVJlc29sdmVyKHRoaXMucHJvZ3JhbSwgdGhpcy5vcHRpb25zLCB0aGlzLmhvc3QsIC8qIG1vZHVsZVJlc29sdXRpb25DYWNoZSAqLyBudWxsKTtcbiAgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IE5nY2NSZXNvdXJjZUxvYWRlcih0aGlzLmZzKTtcbiAgbWV0YVJlZ2lzdHJ5ID0gbmV3IExvY2FsTWV0YWRhdGFSZWdpc3RyeSgpO1xuICBkdHNNZXRhUmVhZGVyID0gbmV3IER0c01ldGFkYXRhUmVhZGVyKHRoaXMudHlwZUNoZWNrZXIsIHRoaXMucmVmbGVjdGlvbkhvc3QpO1xuICBmdWxsTWV0YVJlYWRlciA9IG5ldyBDb21wb3VuZE1ldGFkYXRhUmVhZGVyKFt0aGlzLm1ldGFSZWdpc3RyeSwgdGhpcy5kdHNNZXRhUmVhZGVyXSk7XG4gIHJlZkVtaXR0ZXIgPSBuZXcgUmVmZXJlbmNlRW1pdHRlcihbXG4gICAgbmV3IExvY2FsSWRlbnRpZmllclN0cmF0ZWd5KCksXG4gICAgbmV3IEFic29sdXRlTW9kdWxlU3RyYXRlZ3koXG4gICAgICAgIHRoaXMucHJvZ3JhbSwgdGhpcy50eXBlQ2hlY2tlciwgdGhpcy5tb2R1bGVSZXNvbHZlciwgdGhpcy5yZWZsZWN0aW9uSG9zdCksXG4gICAgLy8gVE9ETyhhbHhodWIpOiB0aGVyZSdzIG5vIHJlYXNvbiB3aHkgbmdjYyBuZWVkcyB0aGUgXCJsb2dpY2FsIGZpbGUgc3lzdGVtXCIgbG9naWMgaGVyZSwgYXMgbmdjY1xuICAgIC8vIHByb2plY3RzIG9ubHkgZXZlciBoYXZlIG9uZSByb290RGlyLiBJbnN0ZWFkLCBuZ2NjIHNob3VsZCBqdXN0IHN3aXRjaCBpdHMgZW1pdHRlZCBpbXBvcnRcbiAgICAvLyBiYXNlZCBvbiB3aGV0aGVyIGEgYmVzdEd1ZXNzT3duaW5nTW9kdWxlIGlzIHByZXNlbnQgaW4gdGhlIFJlZmVyZW5jZS5cbiAgICBuZXcgTG9naWNhbFByb2plY3RTdHJhdGVneSh0aGlzLnJlZmxlY3Rpb25Ib3N0LCBuZXcgTG9naWNhbEZpbGVTeXN0ZW0odGhpcy5yb290RGlycykpLFxuICBdKTtcbiAgYWxpYXNpbmdIb3N0ID0gdGhpcy5idW5kbGUuZW50cnlQb2ludC5nZW5lcmF0ZURlZXBSZWV4cG9ydHMgP1xuICAgICAgbmV3IFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3QodGhpcy5yZWZsZWN0aW9uSG9zdCkgOlxuICAgICAgbnVsbDtcbiAgZHRzTW9kdWxlU2NvcGVSZXNvbHZlciA9XG4gICAgICBuZXcgTWV0YWRhdGFEdHNNb2R1bGVTY29wZVJlc29sdmVyKHRoaXMuZHRzTWV0YVJlYWRlciwgdGhpcy5hbGlhc2luZ0hvc3QpO1xuICBzY29wZVJlZ2lzdHJ5ID0gbmV3IExvY2FsTW9kdWxlU2NvcGVSZWdpc3RyeShcbiAgICAgIHRoaXMubWV0YVJlZ2lzdHJ5LCB0aGlzLmR0c01vZHVsZVNjb3BlUmVzb2x2ZXIsIHRoaXMucmVmRW1pdHRlciwgdGhpcy5hbGlhc2luZ0hvc3QpO1xuICBmdWxsUmVnaXN0cnkgPSBuZXcgQ29tcG91bmRNZXRhZGF0YVJlZ2lzdHJ5KFt0aGlzLm1ldGFSZWdpc3RyeSwgdGhpcy5zY29wZVJlZ2lzdHJ5XSk7XG4gIGV2YWx1YXRvciA9XG4gICAgICBuZXcgUGFydGlhbEV2YWx1YXRvcih0aGlzLnJlZmxlY3Rpb25Ib3N0LCB0aGlzLnR5cGVDaGVja2VyLCAvKiBkZXBlbmRlbmN5VHJhY2tlciAqLyBudWxsKTtcbiAgaW1wb3J0R3JhcGggPSBuZXcgSW1wb3J0R3JhcGgodGhpcy5tb2R1bGVSZXNvbHZlcik7XG4gIGN5Y2xlQW5hbHl6ZXIgPSBuZXcgQ3ljbGVBbmFseXplcih0aGlzLmltcG9ydEdyYXBoKTtcbiAgaW5qZWN0YWJsZVJlZ2lzdHJ5ID0gbmV3IEluamVjdGFibGVDbGFzc1JlZ2lzdHJ5KHRoaXMucmVmbGVjdGlvbkhvc3QpO1xuICBoYW5kbGVyczogRGVjb3JhdG9ySGFuZGxlcjx1bmtub3duLCB1bmtub3duLCB1bmtub3duPltdID0gW1xuICAgIG5ldyBDb21wb25lbnREZWNvcmF0b3JIYW5kbGVyKFxuICAgICAgICB0aGlzLnJlZmxlY3Rpb25Ib3N0LCB0aGlzLmV2YWx1YXRvciwgdGhpcy5mdWxsUmVnaXN0cnksIHRoaXMuZnVsbE1ldGFSZWFkZXIsXG4gICAgICAgIHRoaXMuc2NvcGVSZWdpc3RyeSwgdGhpcy5zY29wZVJlZ2lzdHJ5LCB0aGlzLmlzQ29yZSwgdGhpcy5yZXNvdXJjZU1hbmFnZXIsIHRoaXMucm9vdERpcnMsXG4gICAgICAgICEhdGhpcy5jb21waWxlck9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgICAgLyogaTE4blVzZUV4dGVybmFsSWRzICovIHRydWUsIHRoaXMuYnVuZGxlLmVuYWJsZUkxOG5MZWdhY3lNZXNzYWdlSWRGb3JtYXQsXG4gICAgICAgIHRoaXMubW9kdWxlUmVzb2x2ZXIsIHRoaXMuY3ljbGVBbmFseXplciwgdGhpcy5yZWZFbWl0dGVyLCBOT09QX0RFRkFVTFRfSU1QT1JUX1JFQ09SREVSLFxuICAgICAgICBOT09QX0RFUEVOREVOQ1lfVFJBQ0tFUiwgdGhpcy5pbmplY3RhYmxlUmVnaXN0cnksIC8qIGFubm90YXRlRm9yQ2xvc3VyZUNvbXBpbGVyICovIGZhbHNlKSxcbiAgICAvLyBTZWUgdGhlIG5vdGUgaW4gbmd0c2MgYWJvdXQgd2h5IHRoaXMgY2FzdCBpcyBuZWVkZWQuXG4gICAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICAgIG5ldyBEaXJlY3RpdmVEZWNvcmF0b3JIYW5kbGVyKFxuICAgICAgICB0aGlzLnJlZmxlY3Rpb25Ib3N0LCB0aGlzLmV2YWx1YXRvciwgdGhpcy5mdWxsUmVnaXN0cnksIHRoaXMuc2NvcGVSZWdpc3RyeSxcbiAgICAgICAgdGhpcy5mdWxsTWV0YVJlYWRlciwgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUiwgdGhpcy5pbmplY3RhYmxlUmVnaXN0cnksIHRoaXMuaXNDb3JlLFxuICAgICAgICAvKiBhbm5vdGF0ZUZvckNsb3N1cmVDb21waWxlciAqLyBmYWxzZSkgYXMgRGVjb3JhdG9ySGFuZGxlcjx1bmtub3duLCB1bmtub3duLCB1bmtub3duPixcbiAgICAvLyBjbGFuZy1mb3JtYXQgb25cbiAgICAvLyBQaXBlIGhhbmRsZXIgbXVzdCBiZSBiZWZvcmUgaW5qZWN0YWJsZSBoYW5kbGVyIGluIGxpc3Qgc28gcGlwZSBmYWN0b3JpZXMgYXJlIHByaW50ZWRcbiAgICAvLyBiZWZvcmUgaW5qZWN0YWJsZSBmYWN0b3JpZXMgKHNvIGluamVjdGFibGUgZmFjdG9yaWVzIGNhbiBkZWxlZ2F0ZSB0byB0aGVtKVxuICAgIG5ldyBQaXBlRGVjb3JhdG9ySGFuZGxlcihcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uSG9zdCwgdGhpcy5ldmFsdWF0b3IsIHRoaXMubWV0YVJlZ2lzdHJ5LCB0aGlzLnNjb3BlUmVnaXN0cnksXG4gICAgICAgIE5PT1BfREVGQVVMVF9JTVBPUlRfUkVDT1JERVIsIHRoaXMuaW5qZWN0YWJsZVJlZ2lzdHJ5LCB0aGlzLmlzQ29yZSksXG4gICAgbmV3IEluamVjdGFibGVEZWNvcmF0b3JIYW5kbGVyKFxuICAgICAgICB0aGlzLnJlZmxlY3Rpb25Ib3N0LCBOT09QX0RFRkFVTFRfSU1QT1JUX1JFQ09SREVSLCB0aGlzLmlzQ29yZSxcbiAgICAgICAgLyogc3RyaWN0Q3RvckRlcHMgKi8gZmFsc2UsIHRoaXMuaW5qZWN0YWJsZVJlZ2lzdHJ5LCAvKiBlcnJvck9uRHVwbGljYXRlUHJvdiAqLyBmYWxzZSksXG4gICAgbmV3IE5nTW9kdWxlRGVjb3JhdG9ySGFuZGxlcihcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uSG9zdCwgdGhpcy5ldmFsdWF0b3IsIHRoaXMuZnVsbE1ldGFSZWFkZXIsIHRoaXMuZnVsbFJlZ2lzdHJ5LFxuICAgICAgICB0aGlzLnNjb3BlUmVnaXN0cnksIHRoaXMucmVmZXJlbmNlc1JlZ2lzdHJ5LCB0aGlzLmlzQ29yZSwgLyogcm91dGVBbmFseXplciAqLyBudWxsLFxuICAgICAgICB0aGlzLnJlZkVtaXR0ZXIsXG4gICAgICAgIC8qIGZhY3RvcnlUcmFja2VyICovIG51bGwsIE5PT1BfREVGQVVMVF9JTVBPUlRfUkVDT1JERVIsXG4gICAgICAgIC8qIGFubm90YXRlRm9yQ2xvc3VyZUNvbXBpbGVyICovIGZhbHNlLCB0aGlzLmluamVjdGFibGVSZWdpc3RyeSksXG4gIF07XG4gIGNvbXBpbGVyID0gbmV3IE5nY2NUcmFpdENvbXBpbGVyKHRoaXMuaGFuZGxlcnMsIHRoaXMucmVmbGVjdGlvbkhvc3QpO1xuICBtaWdyYXRpb25zOiBNaWdyYXRpb25bXSA9IFtcbiAgICBuZXcgVW5kZWNvcmF0ZWRQYXJlbnRNaWdyYXRpb24oKSxcbiAgICBuZXcgVW5kZWNvcmF0ZWRDaGlsZE1pZ3JhdGlvbigpLFxuICAgIG5ldyBNaXNzaW5nSW5qZWN0YWJsZU1pZ3JhdGlvbigpLFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBmczogRmlsZVN5c3RlbSwgcHJpdmF0ZSBidW5kbGU6IEVudHJ5UG9pbnRCdW5kbGUsXG4gICAgICBwcml2YXRlIHJlZmxlY3Rpb25Ib3N0OiBOZ2NjUmVmbGVjdGlvbkhvc3QsIHByaXZhdGUgcmVmZXJlbmNlc1JlZ2lzdHJ5OiBSZWZlcmVuY2VzUmVnaXN0cnksXG4gICAgICBwcml2YXRlIGRpYWdub3N0aWNIYW5kbGVyOiAoZXJyb3I6IHRzLkRpYWdub3N0aWMpID0+IHZvaWQgPSAoKSA9PiB7fSxcbiAgICAgIHByaXZhdGUgdHNDb25maWc6IFBhcnNlZENvbmZpZ3VyYXRpb258bnVsbCA9IG51bGwpIHt9XG5cbiAgLyoqXG4gICAqIEFuYWx5emUgYSBwcm9ncmFtIHRvIGZpbmQgYWxsIHRoZSBkZWNvcmF0ZWQgZmlsZXMgc2hvdWxkIGJlIHRyYW5zZm9ybWVkLlxuICAgKlxuICAgKiBAcmV0dXJucyBhIG1hcCBvZiB0aGUgc291cmNlIGZpbGVzIHRvIHRoZSBhbmFseXNpcyBmb3IgdGhvc2UgZmlsZXMuXG4gICAqL1xuICBhbmFseXplUHJvZ3JhbSgpOiBEZWNvcmF0aW9uQW5hbHlzZXMge1xuICAgIGZvciAoY29uc3Qgc291cmNlRmlsZSBvZiB0aGlzLnByb2dyYW0uZ2V0U291cmNlRmlsZXMoKSkge1xuICAgICAgaWYgKCFzb3VyY2VGaWxlLmlzRGVjbGFyYXRpb25GaWxlICYmIGlzV2l0aGluUGFja2FnZSh0aGlzLnBhY2thZ2VQYXRoLCBzb3VyY2VGaWxlKSkge1xuICAgICAgICB0aGlzLmNvbXBpbGVyLmFuYWx5emVGaWxlKHNvdXJjZUZpbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXBwbHlNaWdyYXRpb25zKCk7XG5cbiAgICB0aGlzLmNvbXBpbGVyLnJlc29sdmUoKTtcblxuICAgIHRoaXMucmVwb3J0RGlhZ25vc3RpY3MoKTtcblxuICAgIGNvbnN0IGRlY29yYXRpb25BbmFseXNlcyA9IG5ldyBEZWNvcmF0aW9uQW5hbHlzZXMoKTtcbiAgICBmb3IgKGNvbnN0IGFuYWx5emVkRmlsZSBvZiB0aGlzLmNvbXBpbGVyLmFuYWx5emVkRmlsZXMpIHtcbiAgICAgIGNvbnN0IGNvbXBpbGVkRmlsZSA9IHRoaXMuY29tcGlsZUZpbGUoYW5hbHl6ZWRGaWxlKTtcbiAgICAgIGRlY29yYXRpb25BbmFseXNlcy5zZXQoY29tcGlsZWRGaWxlLnNvdXJjZUZpbGUsIGNvbXBpbGVkRmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvcmF0aW9uQW5hbHlzZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXBwbHlNaWdyYXRpb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IG1pZ3JhdGlvbkhvc3QgPSBuZXcgRGVmYXVsdE1pZ3JhdGlvbkhvc3QoXG4gICAgICAgIHRoaXMucmVmbGVjdGlvbkhvc3QsIHRoaXMuZnVsbE1ldGFSZWFkZXIsIHRoaXMuZXZhbHVhdG9yLCB0aGlzLmNvbXBpbGVyLFxuICAgICAgICB0aGlzLmJ1bmRsZS5lbnRyeVBvaW50LnBhdGgpO1xuXG4gICAgdGhpcy5taWdyYXRpb25zLmZvckVhY2gobWlncmF0aW9uID0+IHtcbiAgICAgIHRoaXMuY29tcGlsZXIuYW5hbHl6ZWRGaWxlcy5mb3JFYWNoKGFuYWx5emVkRmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmNvbXBpbGVyLnJlY29yZHNGb3IoYW5hbHl6ZWRGaWxlKTtcbiAgICAgICAgaWYgKHJlY29yZHMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fzc2VydGlvbiBlcnJvcjogZmlsZSB0byBtaWdyYXRlIG11c3QgaGF2ZSByZWNvcmRzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgY29uc3QgYWRkRGlhZ25vc3RpYyA9IChkaWFnbm9zdGljOiB0cy5EaWFnbm9zdGljKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLm1ldGFEaWFnbm9zdGljcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICByZWNvcmQubWV0YURpYWdub3N0aWNzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWNvcmQubWV0YURpYWdub3N0aWNzLnB1c2goZGlhZ25vc3RpYyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtaWdyYXRpb24uYXBwbHkocmVjb3JkLm5vZGUsIG1pZ3JhdGlvbkhvc3QpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhZGREaWFnbm9zdGljKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGlzRmF0YWxEaWFnbm9zdGljRXJyb3IoZSkpIHtcbiAgICAgICAgICAgICAgYWRkRGlhZ25vc3RpYyhlLnRvRGlhZ25vc3RpYygpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcG9ydERpYWdub3N0aWNzKCkge1xuICAgIHRoaXMuY29tcGlsZXIuZGlhZ25vc3RpY3MuZm9yRWFjaCh0aGlzLmRpYWdub3N0aWNIYW5kbGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb21waWxlRmlsZShzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKTogQ29tcGlsZWRGaWxlIHtcbiAgICBjb25zdCBjb25zdGFudFBvb2wgPSBuZXcgQ29uc3RhbnRQb29sKCk7XG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuY29tcGlsZXIucmVjb3Jkc0Zvcihzb3VyY2VGaWxlKTtcbiAgICBpZiAocmVjb3JkcyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NlcnRpb24gZXJyb3I6IGZpbGUgdG8gY29tcGlsZSBtdXN0IGhhdmUgcmVjb3Jkcy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlZENsYXNzZXM6IENvbXBpbGVkQ2xhc3NbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuICAgICAgY29uc3QgY29tcGlsYXRpb24gPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGUocmVjb3JkLm5vZGUsIGNvbnN0YW50UG9vbCk7XG4gICAgICBpZiAoY29tcGlsYXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGVkQ2xhc3Nlcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcmVjb3JkLm5vZGUubmFtZS50ZXh0LFxuICAgICAgICBkZWNvcmF0b3JzOiB0aGlzLmNvbXBpbGVyLmdldEFsbERlY29yYXRvcnMocmVjb3JkLm5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbjogcmVjb3JkLm5vZGUsXG4gICAgICAgIGNvbXBpbGF0aW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZWV4cG9ydHMgPSB0aGlzLmdldFJlZXhwb3J0c0ZvclNvdXJjZUZpbGUoc291cmNlRmlsZSk7XG4gICAgcmV0dXJuIHtjb25zdGFudFBvb2wsIHNvdXJjZUZpbGU6IHNvdXJjZUZpbGUsIGNvbXBpbGVkQ2xhc3NlcywgcmVleHBvcnRzfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVleHBvcnRzRm9yU291cmNlRmlsZShzZjogdHMuU291cmNlRmlsZSk6IFJlZXhwb3J0W10ge1xuICAgIGNvbnN0IGV4cG9ydFN0YXRlbWVudHMgPSB0aGlzLmNvbXBpbGVyLmV4cG9ydFN0YXRlbWVudHM7XG4gICAgaWYgKCFleHBvcnRTdGF0ZW1lbnRzLmhhcyhzZi5maWxlTmFtZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZXhwb3J0cyA9IGV4cG9ydFN0YXRlbWVudHMuZ2V0KHNmLmZpbGVOYW1lKSE7XG5cbiAgICBjb25zdCByZWV4cG9ydHM6IFJlZXhwb3J0W10gPSBbXTtcbiAgICBleHBvcnRzLmZvckVhY2goKFtmcm9tTW9kdWxlLCBzeW1ib2xOYW1lXSwgYXNBbGlhcykgPT4ge1xuICAgICAgcmVleHBvcnRzLnB1c2goe2FzQWxpYXMsIGZyb21Nb2R1bGUsIHN5bWJvbE5hbWV9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVleHBvcnRzO1xuICB9XG59XG4iXX0=