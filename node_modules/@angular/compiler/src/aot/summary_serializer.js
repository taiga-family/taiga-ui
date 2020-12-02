(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/aot/summary_serializer", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/util", "@angular/compiler/src/aot/static_symbol", "@angular/compiler/src/aot/static_symbol_resolver", "@angular/compiler/src/aot/util"], factory);
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
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var o = require("@angular/compiler/src/output/output_ast");
    var util_1 = require("@angular/compiler/src/util");
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var static_symbol_resolver_1 = require("@angular/compiler/src/aot/static_symbol_resolver");
    var util_2 = require("@angular/compiler/src/aot/util");
    function serializeSummaries(srcFileName, forJitCtx, summaryResolver, symbolResolver, symbols, types, createExternalSymbolReexports) {
        if (createExternalSymbolReexports === void 0) { createExternalSymbolReexports = false; }
        var toJsonSerializer = new ToJsonSerializer(symbolResolver, summaryResolver, srcFileName);
        // for symbols, we use everything except for the class metadata itself
        // (we keep the statics though), as the class metadata is contained in the
        // CompileTypeSummary.
        symbols.forEach(function (resolvedSymbol) { return toJsonSerializer.addSummary({ symbol: resolvedSymbol.symbol, metadata: resolvedSymbol.metadata }); });
        // Add type summaries.
        types.forEach(function (_a) {
            var summary = _a.summary, metadata = _a.metadata;
            toJsonSerializer.addSummary({ symbol: summary.type.reference, metadata: undefined, type: summary });
        });
        var _a = toJsonSerializer.serialize(createExternalSymbolReexports), json = _a.json, exportAs = _a.exportAs;
        if (forJitCtx) {
            var forJitSerializer_1 = new ForJitSerializer(forJitCtx, symbolResolver, summaryResolver);
            types.forEach(function (_a) {
                var summary = _a.summary, metadata = _a.metadata;
                forJitSerializer_1.addSourceType(summary, metadata);
            });
            toJsonSerializer.unprocessedSymbolSummariesBySymbol.forEach(function (summary) {
                if (summaryResolver.isLibraryFile(summary.symbol.filePath) && summary.type) {
                    forJitSerializer_1.addLibType(summary.type);
                }
            });
            forJitSerializer_1.serialize(exportAs);
        }
        return { json: json, exportAs: exportAs };
    }
    exports.serializeSummaries = serializeSummaries;
    function deserializeSummaries(symbolCache, summaryResolver, libraryFileName, json) {
        var deserializer = new FromJsonDeserializer(symbolCache, summaryResolver);
        return deserializer.deserialize(libraryFileName, json);
    }
    exports.deserializeSummaries = deserializeSummaries;
    function createForJitStub(outputCtx, reference) {
        return createSummaryForJitFunction(outputCtx, reference, o.NULL_EXPR);
    }
    exports.createForJitStub = createForJitStub;
    function createSummaryForJitFunction(outputCtx, reference, value) {
        var fnName = util_2.summaryForJitName(reference.name);
        outputCtx.statements.push(o.fn([], [new o.ReturnStatement(value)], new o.ArrayType(o.DYNAMIC_TYPE)).toDeclStmt(fnName, [
            o.StmtModifier.Final, o.StmtModifier.Exported
        ]));
    }
    var ToJsonSerializer = /** @class */ (function (_super) {
        tslib_1.__extends(ToJsonSerializer, _super);
        function ToJsonSerializer(symbolResolver, summaryResolver, srcFileName) {
            var _this = _super.call(this) || this;
            _this.symbolResolver = symbolResolver;
            _this.summaryResolver = summaryResolver;
            _this.srcFileName = srcFileName;
            // Note: This only contains symbols without members.
            _this.symbols = [];
            _this.indexBySymbol = new Map();
            _this.reexportedBy = new Map();
            // This now contains a `__symbol: number` in the place of
            // StaticSymbols, but otherwise has the same shape as the original objects.
            _this.processedSummaryBySymbol = new Map();
            _this.processedSummaries = [];
            _this.unprocessedSymbolSummariesBySymbol = new Map();
            _this.moduleName = symbolResolver.getKnownModuleName(srcFileName);
            return _this;
        }
        ToJsonSerializer.prototype.addSummary = function (summary) {
            var _this = this;
            var unprocessedSummary = this.unprocessedSymbolSummariesBySymbol.get(summary.symbol);
            var processedSummary = this.processedSummaryBySymbol.get(summary.symbol);
            if (!unprocessedSummary) {
                unprocessedSummary = { symbol: summary.symbol, metadata: undefined };
                this.unprocessedSymbolSummariesBySymbol.set(summary.symbol, unprocessedSummary);
                processedSummary = { symbol: this.processValue(summary.symbol, 0 /* None */) };
                this.processedSummaries.push(processedSummary);
                this.processedSummaryBySymbol.set(summary.symbol, processedSummary);
            }
            if (!unprocessedSummary.metadata && summary.metadata) {
                var metadata_1 = summary.metadata || {};
                if (metadata_1.__symbolic === 'class') {
                    // For classes, we keep everything except their class decorators.
                    // We need to keep e.g. the ctor args, method names, method decorators
                    // so that the class can be extended in another compilation unit.
                    // We don't keep the class decorators as
                    // 1) they refer to data
                    //   that should not cause a rebuild of downstream compilation units
                    //   (e.g. inline templates of @Component, or @NgModule.declarations)
                    // 2) their data is already captured in TypeSummaries, e.g. DirectiveSummary.
                    var clone_1 = {};
                    Object.keys(metadata_1).forEach(function (propName) {
                        if (propName !== 'decorators') {
                            clone_1[propName] = metadata_1[propName];
                        }
                    });
                    metadata_1 = clone_1;
                }
                else if (isCall(metadata_1)) {
                    if (!isFunctionCall(metadata_1) && !isMethodCallOnVariable(metadata_1)) {
                        // Don't store complex calls as we won't be able to simplify them anyways later on.
                        metadata_1 = {
                            __symbolic: 'error',
                            message: 'Complex function calls are not supported.',
                        };
                    }
                }
                // Note: We need to keep storing ctor calls for e.g.
                // `export const x = new InjectionToken(...)`
                unprocessedSummary.metadata = metadata_1;
                processedSummary.metadata = this.processValue(metadata_1, 1 /* ResolveValue */);
                if (metadata_1 instanceof static_symbol_1.StaticSymbol &&
                    this.summaryResolver.isLibraryFile(metadata_1.filePath)) {
                    var declarationSymbol = this.symbols[this.indexBySymbol.get(metadata_1)];
                    if (!util_2.isLoweredSymbol(declarationSymbol.name)) {
                        // Note: symbols that were introduced during codegen in the user file can have a reexport
                        // if a user used `export *`. However, we can't rely on this as tsickle will change
                        // `export *` into named exports, using only the information from the typechecker.
                        // As we introduce the new symbols after typecheck, Tsickle does not know about them,
                        // and omits them when expanding `export *`.
                        // So we have to keep reexporting these symbols manually via .ngfactory files.
                        this.reexportedBy.set(declarationSymbol, summary.symbol);
                    }
                }
            }
            if (!unprocessedSummary.type && summary.type) {
                unprocessedSummary.type = summary.type;
                // Note: We don't add the summaries of all referenced symbols as for the ResolvedSymbols,
                // as the type summaries already contain the transitive data that they require
                // (in a minimal way).
                processedSummary.type = this.processValue(summary.type, 0 /* None */);
                // except for reexported directives / pipes, so we need to store
                // their summaries explicitly.
                if (summary.type.summaryKind === compile_metadata_1.CompileSummaryKind.NgModule) {
                    var ngModuleSummary = summary.type;
                    ngModuleSummary.exportedDirectives.concat(ngModuleSummary.exportedPipes).forEach(function (id) {
                        var symbol = id.reference;
                        if (_this.summaryResolver.isLibraryFile(symbol.filePath) &&
                            !_this.unprocessedSymbolSummariesBySymbol.has(symbol)) {
                            var summary_1 = _this.summaryResolver.resolveSummary(symbol);
                            if (summary_1) {
                                _this.addSummary(summary_1);
                            }
                        }
                    });
                }
            }
        };
        /**
         * @param createExternalSymbolReexports Whether external static symbols should be re-exported.
         * This can be enabled if external symbols should be re-exported by the current module in
         * order to avoid dynamically generated module dependencies which can break strict dependency
         * enforcements (as in Google3). Read more here: https://github.com/angular/angular/issues/25644
         */
        ToJsonSerializer.prototype.serialize = function (createExternalSymbolReexports) {
            var _this = this;
            var exportAs = [];
            var json = JSON.stringify({
                moduleName: this.moduleName,
                summaries: this.processedSummaries,
                symbols: this.symbols.map(function (symbol, index) {
                    symbol.assertNoMembers();
                    var importAs = undefined;
                    if (_this.summaryResolver.isLibraryFile(symbol.filePath)) {
                        var reexportSymbol = _this.reexportedBy.get(symbol);
                        if (reexportSymbol) {
                            // In case the given external static symbol is already manually exported by the
                            // user, we just proxy the external static symbol reference to the manual export.
                            // This ensures that the AOT compiler imports the external symbol through the
                            // user export and does not introduce another dependency which is not needed.
                            importAs = _this.indexBySymbol.get(reexportSymbol);
                        }
                        else if (createExternalSymbolReexports) {
                            // In this case, the given external static symbol is *not* manually exported by
                            // the user, and we manually create a re-export in the factory file so that we
                            // don't introduce another module dependency. This is useful when running within
                            // Bazel so that the AOT compiler does not introduce any module dependencies
                            // which can break the strict dependency enforcement. (e.g. as in Google3)
                            // Read more about this here: https://github.com/angular/angular/issues/25644
                            var summary = _this.unprocessedSymbolSummariesBySymbol.get(symbol);
                            if (!summary || !summary.metadata || summary.metadata.__symbolic !== 'interface') {
                                importAs = symbol.name + "_" + index;
                                exportAs.push({ symbol: symbol, exportAs: importAs });
                            }
                        }
                    }
                    return {
                        __symbol: index,
                        name: symbol.name,
                        filePath: _this.summaryResolver.toSummaryFileName(symbol.filePath, _this.srcFileName),
                        importAs: importAs
                    };
                })
            });
            return { json: json, exportAs: exportAs };
        };
        ToJsonSerializer.prototype.processValue = function (value, flags) {
            return util_1.visitValue(value, this, flags);
        };
        ToJsonSerializer.prototype.visitOther = function (value, context) {
            if (value instanceof static_symbol_1.StaticSymbol) {
                var baseSymbol = this.symbolResolver.getStaticSymbol(value.filePath, value.name);
                var index = this.visitStaticSymbol(baseSymbol, context);
                return { __symbol: index, members: value.members };
            }
        };
        /**
         * Strip line and character numbers from ngsummaries.
         * Emitting them causes white spaces changes to retrigger upstream
         * recompilations in bazel.
         * TODO: find out a way to have line and character numbers in errors without
         * excessive recompilation in bazel.
         */
        ToJsonSerializer.prototype.visitStringMap = function (map, context) {
            if (map['__symbolic'] === 'resolved') {
                return util_1.visitValue(map['symbol'], this, context);
            }
            if (map['__symbolic'] === 'error') {
                delete map['line'];
                delete map['character'];
            }
            return _super.prototype.visitStringMap.call(this, map, context);
        };
        /**
         * Returns null if the options.resolveValue is true, and the summary for the symbol
         * resolved to a type or could not be resolved.
         */
        ToJsonSerializer.prototype.visitStaticSymbol = function (baseSymbol, flags) {
            var index = this.indexBySymbol.get(baseSymbol);
            var summary = null;
            if (flags & 1 /* ResolveValue */ &&
                this.summaryResolver.isLibraryFile(baseSymbol.filePath)) {
                if (this.unprocessedSymbolSummariesBySymbol.has(baseSymbol)) {
                    // the summary for this symbol was already added
                    // -> nothing to do.
                    return index;
                }
                summary = this.loadSummary(baseSymbol);
                if (summary && summary.metadata instanceof static_symbol_1.StaticSymbol) {
                    // The summary is a reexport
                    index = this.visitStaticSymbol(summary.metadata, flags);
                    // reset the summary as it is just a reexport, so we don't want to store it.
                    summary = null;
                }
            }
            else if (index != null) {
                // Note: == on purpose to compare with undefined!
                // No summary and the symbol is already added -> nothing to do.
                return index;
            }
            // Note: == on purpose to compare with undefined!
            if (index == null) {
                index = this.symbols.length;
                this.symbols.push(baseSymbol);
            }
            this.indexBySymbol.set(baseSymbol, index);
            if (summary) {
                this.addSummary(summary);
            }
            return index;
        };
        ToJsonSerializer.prototype.loadSummary = function (symbol) {
            var summary = this.summaryResolver.resolveSummary(symbol);
            if (!summary) {
                // some symbols might originate from a plain typescript library
                // that just exported .d.ts and .metadata.json files, i.e. where no summary
                // files were created.
                var resolvedSymbol = this.symbolResolver.resolveSymbol(symbol);
                if (resolvedSymbol) {
                    summary = { symbol: resolvedSymbol.symbol, metadata: resolvedSymbol.metadata };
                }
            }
            return summary;
        };
        return ToJsonSerializer;
    }(util_1.ValueTransformer));
    var ForJitSerializer = /** @class */ (function () {
        function ForJitSerializer(outputCtx, symbolResolver, summaryResolver) {
            this.outputCtx = outputCtx;
            this.symbolResolver = symbolResolver;
            this.summaryResolver = summaryResolver;
            this.data = [];
        }
        ForJitSerializer.prototype.addSourceType = function (summary, metadata) {
            this.data.push({ summary: summary, metadata: metadata, isLibrary: false });
        };
        ForJitSerializer.prototype.addLibType = function (summary) {
            this.data.push({ summary: summary, metadata: null, isLibrary: true });
        };
        ForJitSerializer.prototype.serialize = function (exportAsArr) {
            var e_1, _a, e_2, _b, e_3, _c;
            var _this = this;
            var exportAsBySymbol = new Map();
            try {
                for (var exportAsArr_1 = tslib_1.__values(exportAsArr), exportAsArr_1_1 = exportAsArr_1.next(); !exportAsArr_1_1.done; exportAsArr_1_1 = exportAsArr_1.next()) {
                    var _d = exportAsArr_1_1.value, symbol = _d.symbol, exportAs = _d.exportAs;
                    exportAsBySymbol.set(symbol, exportAs);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exportAsArr_1_1 && !exportAsArr_1_1.done && (_a = exportAsArr_1.return)) _a.call(exportAsArr_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var ngModuleSymbols = new Set();
            try {
                for (var _e = tslib_1.__values(this.data), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var _g = _f.value, summary = _g.summary, metadata = _g.metadata, isLibrary = _g.isLibrary;
                    if (summary.summaryKind === compile_metadata_1.CompileSummaryKind.NgModule) {
                        // collect the symbols that refer to NgModule classes.
                        // Note: we can't just rely on `summary.type.summaryKind` to determine this as
                        // we don't add the summaries of all referenced symbols when we serialize type summaries.
                        // See serializeSummaries for details.
                        ngModuleSymbols.add(summary.type.reference);
                        var modSummary = summary;
                        try {
                            for (var _h = (e_3 = void 0, tslib_1.__values(modSummary.modules)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var mod = _j.value;
                                ngModuleSymbols.add(mod.reference);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    if (!isLibrary) {
                        var fnName = util_2.summaryForJitName(summary.type.reference.name);
                        createSummaryForJitFunction(this.outputCtx, summary.type.reference, this.serializeSummaryWithDeps(summary, metadata));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            ngModuleSymbols.forEach(function (ngModuleSymbol) {
                if (_this.summaryResolver.isLibraryFile(ngModuleSymbol.filePath)) {
                    var exportAs = exportAsBySymbol.get(ngModuleSymbol) || ngModuleSymbol.name;
                    var jitExportAsName = util_2.summaryForJitName(exportAs);
                    _this.outputCtx.statements.push(o.variable(jitExportAsName)
                        .set(_this.serializeSummaryRef(ngModuleSymbol))
                        .toDeclStmt(null, [o.StmtModifier.Exported]));
                }
            });
        };
        ForJitSerializer.prototype.serializeSummaryWithDeps = function (summary, metadata) {
            var _this = this;
            var expressions = [this.serializeSummary(summary)];
            var providers = [];
            if (metadata instanceof compile_metadata_1.CompileNgModuleMetadata) {
                expressions.push.apply(expressions, tslib_1.__spread(
                // For directives / pipes, we only add the declared ones,
                // and rely on transitively importing NgModules to get the transitive
                // summaries.
                metadata.declaredDirectives.concat(metadata.declaredPipes)
                    .map(function (type) { return type.reference; })
                    // For modules,
                    // we also add the summaries for modules
                    // from libraries.
                    // This is ok as we produce reexports for all transitive modules.
                    .concat(metadata.transitiveModule.modules.map(function (type) { return type.reference; })
                    .filter(function (ref) { return ref !== metadata.type.reference; }))
                    .map(function (ref) { return _this.serializeSummaryRef(ref); })));
                // Note: We don't use `NgModuleSummary.providers`, as that one is transitive,
                // and we already have transitive modules.
                providers = metadata.providers;
            }
            else if (summary.summaryKind === compile_metadata_1.CompileSummaryKind.Directive) {
                var dirSummary = summary;
                providers = dirSummary.providers.concat(dirSummary.viewProviders);
            }
            // Note: We can't just refer to the `ngsummary.ts` files for `useClass` providers (as we do for
            // declaredDirectives / declaredPipes), as we allow
            // providers without ctor arguments to skip the `@Injectable` decorator,
            // i.e. we didn't generate .ngsummary.ts files for these.
            expressions.push.apply(expressions, tslib_1.__spread(providers.filter(function (provider) { return !!provider.useClass; }).map(function (provider) { return _this.serializeSummary({
                summaryKind: compile_metadata_1.CompileSummaryKind.Injectable,
                type: provider.useClass
            }); })));
            return o.literalArr(expressions);
        };
        ForJitSerializer.prototype.serializeSummaryRef = function (typeSymbol) {
            var jitImportedSymbol = this.symbolResolver.getStaticSymbol(util_2.summaryForJitFileName(typeSymbol.filePath), util_2.summaryForJitName(typeSymbol.name));
            return this.outputCtx.importExpr(jitImportedSymbol);
        };
        ForJitSerializer.prototype.serializeSummary = function (data) {
            var outputCtx = this.outputCtx;
            var Transformer = /** @class */ (function () {
                function Transformer() {
                }
                Transformer.prototype.visitArray = function (arr, context) {
                    var _this = this;
                    return o.literalArr(arr.map(function (entry) { return util_1.visitValue(entry, _this, context); }));
                };
                Transformer.prototype.visitStringMap = function (map, context) {
                    var _this = this;
                    return new o.LiteralMapExpr(Object.keys(map).map(function (key) { return new o.LiteralMapEntry(key, util_1.visitValue(map[key], _this, context), false); }));
                };
                Transformer.prototype.visitPrimitive = function (value, context) {
                    return o.literal(value);
                };
                Transformer.prototype.visitOther = function (value, context) {
                    if (value instanceof static_symbol_1.StaticSymbol) {
                        return outputCtx.importExpr(value);
                    }
                    else {
                        throw new Error("Illegal State: Encountered value " + value);
                    }
                };
                return Transformer;
            }());
            return util_1.visitValue(data, new Transformer(), null);
        };
        return ForJitSerializer;
    }());
    var FromJsonDeserializer = /** @class */ (function (_super) {
        tslib_1.__extends(FromJsonDeserializer, _super);
        function FromJsonDeserializer(symbolCache, summaryResolver) {
            var _this = _super.call(this) || this;
            _this.symbolCache = symbolCache;
            _this.summaryResolver = summaryResolver;
            return _this;
        }
        FromJsonDeserializer.prototype.deserialize = function (libraryFileName, json) {
            var _this = this;
            var data = JSON.parse(json);
            var allImportAs = [];
            this.symbols = data.symbols.map(function (serializedSymbol) { return _this.symbolCache.get(_this.summaryResolver.fromSummaryFileName(serializedSymbol.filePath, libraryFileName), serializedSymbol.name); });
            data.symbols.forEach(function (serializedSymbol, index) {
                var symbol = _this.symbols[index];
                var importAs = serializedSymbol.importAs;
                if (typeof importAs === 'number') {
                    allImportAs.push({ symbol: symbol, importAs: _this.symbols[importAs] });
                }
                else if (typeof importAs === 'string') {
                    allImportAs.push({ symbol: symbol, importAs: _this.symbolCache.get(util_2.ngfactoryFilePath(libraryFileName), importAs) });
                }
            });
            var summaries = util_1.visitValue(data.summaries, this, null);
            return { moduleName: data.moduleName, summaries: summaries, importAs: allImportAs };
        };
        FromJsonDeserializer.prototype.visitStringMap = function (map, context) {
            if ('__symbol' in map) {
                var baseSymbol = this.symbols[map['__symbol']];
                var members = map['members'];
                return members.length ? this.symbolCache.get(baseSymbol.filePath, baseSymbol.name, members) :
                    baseSymbol;
            }
            else {
                return _super.prototype.visitStringMap.call(this, map, context);
            }
        };
        return FromJsonDeserializer;
    }(util_1.ValueTransformer));
    function isCall(metadata) {
        return metadata && metadata.__symbolic === 'call';
    }
    function isFunctionCall(metadata) {
        return isCall(metadata) && static_symbol_resolver_1.unwrapResolvedMetadata(metadata.expression) instanceof static_symbol_1.StaticSymbol;
    }
    function isMethodCallOnVariable(metadata) {
        return isCall(metadata) && metadata.expression && metadata.expression.__symbolic === 'select' &&
            static_symbol_resolver_1.unwrapResolvedMetadata(metadata.expression.expression) instanceof static_symbol_1.StaticSymbol;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeV9zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2FvdC9zdW1tYXJ5X3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsMkVBQWtQO0lBQ2xQLDJEQUEwQztJQUUxQyxtREFBa0Y7SUFFbEYseUVBQWdFO0lBQ2hFLDJGQUE0RztJQUM1Ryx1REFBb0c7SUFFcEcsU0FBZ0Isa0JBQWtCLENBQzlCLFdBQW1CLEVBQUUsU0FBNkIsRUFDbEQsZUFBOEMsRUFBRSxjQUFvQyxFQUNwRixPQUErQixFQUFFLEtBSTlCLEVBQ0gsNkJBQ1M7UUFEVCw4Q0FBQSxFQUFBLHFDQUNTO1FBQ1gsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFNUYsc0VBQXNFO1FBQ3RFLDBFQUEwRTtRQUMxRSxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FDWCxVQUFDLGNBQWMsSUFBSyxPQUFBLGdCQUFnQixDQUFDLFVBQVUsQ0FDM0MsRUFBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBQyxDQUFDLEVBRG5ELENBQ21ELENBQUMsQ0FBQztRQUU3RSxzQkFBc0I7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQW1CO2dCQUFsQixvQkFBTyxFQUFFLHNCQUFRO1lBQy9CLGdCQUFnQixDQUFDLFVBQVUsQ0FDdkIsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNHLElBQUEsOERBQTRF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QUFTLHNCQUFzQixDQUFDLFFBQWE7UUFDM0MsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsS0FBSyxRQUFRO1lBQ3pGLCtDQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFlBQVksNEJBQVksQ0FBQztJQUNyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5LCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgQ29tcGlsZU5nTW9kdWxlU3VtbWFyeSwgQ29tcGlsZVBpcGVNZXRhZGF0YSwgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsIENvbXBpbGVTdW1tYXJ5S2luZCwgQ29tcGlsZVR5cGVNZXRhZGF0YSwgQ29tcGlsZVR5cGVTdW1tYXJ5fSBmcm9tICcuLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtTdW1tYXJ5LCBTdW1tYXJ5UmVzb2x2ZXJ9IGZyb20gJy4uL3N1bW1hcnlfcmVzb2x2ZXInO1xuaW1wb3J0IHtPdXRwdXRDb250ZXh0LCBWYWx1ZVRyYW5zZm9ybWVyLCBWYWx1ZVZpc2l0b3IsIHZpc2l0VmFsdWV9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge1N0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sQ2FjaGV9IGZyb20gJy4vc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge1Jlc29sdmVkU3RhdGljU3ltYm9sLCBTdGF0aWNTeW1ib2xSZXNvbHZlciwgdW53cmFwUmVzb2x2ZWRNZXRhZGF0YX0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sX3Jlc29sdmVyJztcbmltcG9ydCB7aXNMb3dlcmVkU3ltYm9sLCBuZ2ZhY3RvcnlGaWxlUGF0aCwgc3VtbWFyeUZvckppdEZpbGVOYW1lLCBzdW1tYXJ5Rm9ySml0TmFtZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVN1bW1hcmllcyhcbiAgICBzcmNGaWxlTmFtZTogc3RyaW5nLCBmb3JKaXRDdHg6IE91dHB1dENvbnRleHR8bnVsbCxcbiAgICBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LCBzeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgc3ltYm9sczogUmVzb2x2ZWRTdGF0aWNTeW1ib2xbXSwgdHlwZXM6IHtcbiAgICAgIHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSxcbiAgICAgIG1ldGFkYXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YXxDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF8Q29tcGlsZVBpcGVNZXRhZGF0YXxcbiAgICAgIENvbXBpbGVUeXBlTWV0YWRhdGFcbiAgICB9W10sXG4gICAgY3JlYXRlRXh0ZXJuYWxTeW1ib2xSZWV4cG9ydHMgPVxuICAgICAgICBmYWxzZSk6IHtqc29uOiBzdHJpbmcsIGV4cG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGV4cG9ydEFzOiBzdHJpbmd9W119IHtcbiAgY29uc3QgdG9Kc29uU2VyaWFsaXplciA9IG5ldyBUb0pzb25TZXJpYWxpemVyKHN5bWJvbFJlc29sdmVyLCBzdW1tYXJ5UmVzb2x2ZXIsIHNyY0ZpbGVOYW1lKTtcblxuICAvLyBmb3Igc3ltYm9scywgd2UgdXNlIGV2ZXJ5dGhpbmcgZXhjZXB0IGZvciB0aGUgY2xhc3MgbWV0YWRhdGEgaXRzZWxmXG4gIC8vICh3ZSBrZWVwIHRoZSBzdGF0aWNzIHRob3VnaCksIGFzIHRoZSBjbGFzcyBtZXRhZGF0YSBpcyBjb250YWluZWQgaW4gdGhlXG4gIC8vIENvbXBpbGVUeXBlU3VtbWFyeS5cbiAgc3ltYm9scy5mb3JFYWNoKFxuICAgICAgKHJlc29sdmVkU3ltYm9sKSA9PiB0b0pzb25TZXJpYWxpemVyLmFkZFN1bW1hcnkoXG4gICAgICAgICAge3N5bWJvbDogcmVzb2x2ZWRTeW1ib2wuc3ltYm9sLCBtZXRhZGF0YTogcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGF9KSk7XG5cbiAgLy8gQWRkIHR5cGUgc3VtbWFyaWVzLlxuICB0eXBlcy5mb3JFYWNoKCh7c3VtbWFyeSwgbWV0YWRhdGF9KSA9PiB7XG4gICAgdG9Kc29uU2VyaWFsaXplci5hZGRTdW1tYXJ5KFxuICAgICAgICB7c3ltYm9sOiBzdW1tYXJ5LnR5cGUucmVmZXJlbmNlLCBtZXRhZGF0YTogdW5kZWZpbmVkLCB0eXBlOiBzdW1tYXJ5fSk7XG4gIH0pO1xuICBjb25zdCB7anNvbiwgZXhwb3J0QXN9ID0gdG9Kc29uU2VyaWFsaXplci5zZXJpYWxpemUoY3JlYXRlRXh0ZXJuYWxTeW1ib2xSZWV4cG9ydHMpO1xuICBpZiAoZm9ySml0Q3R4KSB7XG4gICAgY29uc3QgZm9ySml0U2VyaWFsaXplciA9IG5ldyBGb3JKaXRTZXJpYWxpemVyKGZvckppdEN0eCwgc3ltYm9sUmVzb2x2ZXIsIHN1bW1hcnlSZXNvbHZlcik7XG4gICAgdHlwZXMuZm9yRWFjaCgoe3N1bW1hcnksIG1ldGFkYXRhfSkgPT4ge1xuICAgICAgZm9ySml0U2VyaWFsaXplci5hZGRTb3VyY2VUeXBlKHN1bW1hcnksIG1ldGFkYXRhKTtcbiAgICB9KTtcbiAgICB0b0pzb25TZXJpYWxpemVyLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuZm9yRWFjaCgoc3VtbWFyeSkgPT4ge1xuICAgICAgaWYgKHN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKHN1bW1hcnkuc3ltYm9sLmZpbGVQYXRoKSAmJiBzdW1tYXJ5LnR5cGUpIHtcbiAgICAgICAgZm9ySml0U2VyaWFsaXplci5hZGRMaWJUeXBlKHN1bW1hcnkudHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9ySml0U2VyaWFsaXplci5zZXJpYWxpemUoZXhwb3J0QXMpO1xuICB9XG4gIHJldHVybiB7anNvbiwgZXhwb3J0QXN9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVTdW1tYXJpZXMoXG4gICAgc3ltYm9sQ2FjaGU6IFN0YXRpY1N5bWJvbENhY2hlLCBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LFxuICAgIGxpYnJhcnlGaWxlTmFtZTogc3RyaW5nLCBqc29uOiBzdHJpbmcpOiB7XG4gIG1vZHVsZU5hbWU6IHN0cmluZ3xudWxsLFxuICBzdW1tYXJpZXM6IFN1bW1hcnk8U3RhdGljU3ltYm9sPltdLFxuICBpbXBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBpbXBvcnRBczogU3RhdGljU3ltYm9sfVtdXG59IHtcbiAgY29uc3QgZGVzZXJpYWxpemVyID0gbmV3IEZyb21Kc29uRGVzZXJpYWxpemVyKHN5bWJvbENhY2hlLCBzdW1tYXJ5UmVzb2x2ZXIpO1xuICByZXR1cm4gZGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKGxpYnJhcnlGaWxlTmFtZSwganNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JKaXRTdHViKG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgcmVmZXJlbmNlOiBTdGF0aWNTeW1ib2wpIHtcbiAgcmV0dXJuIGNyZWF0ZVN1bW1hcnlGb3JKaXRGdW5jdGlvbihvdXRwdXRDdHgsIHJlZmVyZW5jZSwgby5OVUxMX0VYUFIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdW1tYXJ5Rm9ySml0RnVuY3Rpb24oXG4gICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCByZWZlcmVuY2U6IFN0YXRpY1N5bWJvbCwgdmFsdWU6IG8uRXhwcmVzc2lvbikge1xuICBjb25zdCBmbk5hbWUgPSBzdW1tYXJ5Rm9ySml0TmFtZShyZWZlcmVuY2UubmFtZSk7XG4gIG91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goXG4gICAgICBvLmZuKFtdLCBbbmV3IG8uUmV0dXJuU3RhdGVtZW50KHZhbHVlKV0sIG5ldyBvLkFycmF5VHlwZShvLkRZTkFNSUNfVFlQRSkpLnRvRGVjbFN0bXQoZm5OYW1lLCBbXG4gICAgICAgIG8uU3RtdE1vZGlmaWVyLkZpbmFsLCBvLlN0bXRNb2RpZmllci5FeHBvcnRlZFxuICAgICAgXSkpO1xufVxuXG5jb25zdCBlbnVtIFNlcmlhbGl6YXRpb25GbGFncyB7XG4gIE5vbmUgPSAwLFxuICBSZXNvbHZlVmFsdWUgPSAxLFxufVxuXG5jbGFzcyBUb0pzb25TZXJpYWxpemVyIGV4dGVuZHMgVmFsdWVUcmFuc2Zvcm1lciB7XG4gIC8vIE5vdGU6IFRoaXMgb25seSBjb250YWlucyBzeW1ib2xzIHdpdGhvdXQgbWVtYmVycy5cbiAgcHJpdmF0ZSBzeW1ib2xzOiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICBwcml2YXRlIGluZGV4QnlTeW1ib2wgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgbnVtYmVyPigpO1xuICBwcml2YXRlIHJlZXhwb3J0ZWRCeSA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBTdGF0aWNTeW1ib2w+KCk7XG4gIC8vIFRoaXMgbm93IGNvbnRhaW5zIGEgYF9fc3ltYm9sOiBudW1iZXJgIGluIHRoZSBwbGFjZSBvZlxuICAvLyBTdGF0aWNTeW1ib2xzLCBidXQgb3RoZXJ3aXNlIGhhcyB0aGUgc2FtZSBzaGFwZSBhcyB0aGUgb3JpZ2luYWwgb2JqZWN0cy5cbiAgcHJpdmF0ZSBwcm9jZXNzZWRTdW1tYXJ5QnlTeW1ib2wgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgYW55PigpO1xuICBwcml2YXRlIHByb2Nlc3NlZFN1bW1hcmllczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBtb2R1bGVOYW1lOiBzdHJpbmd8bnVsbDtcblxuICB1bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIFN1bW1hcnk8U3RhdGljU3ltYm9sPj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LCBwcml2YXRlIHNyY0ZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kdWxlTmFtZSA9IHN5bWJvbFJlc29sdmVyLmdldEtub3duTW9kdWxlTmFtZShzcmNGaWxlTmFtZSk7XG4gIH1cblxuICBhZGRTdW1tYXJ5KHN1bW1hcnk6IFN1bW1hcnk8U3RhdGljU3ltYm9sPikge1xuICAgIGxldCB1bnByb2Nlc3NlZFN1bW1hcnkgPSB0aGlzLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuZ2V0KHN1bW1hcnkuc3ltYm9sKTtcbiAgICBsZXQgcHJvY2Vzc2VkU3VtbWFyeSA9IHRoaXMucHJvY2Vzc2VkU3VtbWFyeUJ5U3ltYm9sLmdldChzdW1tYXJ5LnN5bWJvbCk7XG4gICAgaWYgKCF1bnByb2Nlc3NlZFN1bW1hcnkpIHtcbiAgICAgIHVucHJvY2Vzc2VkU3VtbWFyeSA9IHtzeW1ib2w6IHN1bW1hcnkuc3ltYm9sLCBtZXRhZGF0YTogdW5kZWZpbmVkfTtcbiAgICAgIHRoaXMudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5zZXQoc3VtbWFyeS5zeW1ib2wsIHVucHJvY2Vzc2VkU3VtbWFyeSk7XG4gICAgICBwcm9jZXNzZWRTdW1tYXJ5ID0ge3N5bWJvbDogdGhpcy5wcm9jZXNzVmFsdWUoc3VtbWFyeS5zeW1ib2wsIFNlcmlhbGl6YXRpb25GbGFncy5Ob25lKX07XG4gICAgICB0aGlzLnByb2Nlc3NlZFN1bW1hcmllcy5wdXNoKHByb2Nlc3NlZFN1bW1hcnkpO1xuICAgICAgdGhpcy5wcm9jZXNzZWRTdW1tYXJ5QnlTeW1ib2wuc2V0KHN1bW1hcnkuc3ltYm9sLCBwcm9jZXNzZWRTdW1tYXJ5KTtcbiAgICB9XG4gICAgaWYgKCF1bnByb2Nlc3NlZFN1bW1hcnkubWV0YWRhdGEgJiYgc3VtbWFyeS5tZXRhZGF0YSkge1xuICAgICAgbGV0IG1ldGFkYXRhID0gc3VtbWFyeS5tZXRhZGF0YSB8fCB7fTtcbiAgICAgIGlmIChtZXRhZGF0YS5fX3N5bWJvbGljID09PSAnY2xhc3MnKSB7XG4gICAgICAgIC8vIEZvciBjbGFzc2VzLCB3ZSBrZWVwIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZWlyIGNsYXNzIGRlY29yYXRvcnMuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8ga2VlcCBlLmcuIHRoZSBjdG9yIGFyZ3MsIG1ldGhvZCBuYW1lcywgbWV0aG9kIGRlY29yYXRvcnNcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgY2xhc3MgY2FuIGJlIGV4dGVuZGVkIGluIGFub3RoZXIgY29tcGlsYXRpb24gdW5pdC5cbiAgICAgICAgLy8gV2UgZG9uJ3Qga2VlcCB0aGUgY2xhc3MgZGVjb3JhdG9ycyBhc1xuICAgICAgICAvLyAxKSB0aGV5IHJlZmVyIHRvIGRhdGFcbiAgICAgICAgLy8gICB0aGF0IHNob3VsZCBub3QgY2F1c2UgYSByZWJ1aWxkIG9mIGRvd25zdHJlYW0gY29tcGlsYXRpb24gdW5pdHNcbiAgICAgICAgLy8gICAoZS5nLiBpbmxpbmUgdGVtcGxhdGVzIG9mIEBDb21wb25lbnQsIG9yIEBOZ01vZHVsZS5kZWNsYXJhdGlvbnMpXG4gICAgICAgIC8vIDIpIHRoZWlyIGRhdGEgaXMgYWxyZWFkeSBjYXB0dXJlZCBpbiBUeXBlU3VtbWFyaWVzLCBlLmcuIERpcmVjdGl2ZVN1bW1hcnkuXG4gICAgICAgIGNvbnN0IGNsb25lOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhtZXRhZGF0YSkuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcbiAgICAgICAgICBpZiAocHJvcE5hbWUgIT09ICdkZWNvcmF0b3JzJykge1xuICAgICAgICAgICAgY2xvbmVbcHJvcE5hbWVdID0gbWV0YWRhdGFbcHJvcE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1ldGFkYXRhID0gY2xvbmU7XG4gICAgICB9IGVsc2UgaWYgKGlzQ2FsbChtZXRhZGF0YSkpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uQ2FsbChtZXRhZGF0YSkgJiYgIWlzTWV0aG9kQ2FsbE9uVmFyaWFibGUobWV0YWRhdGEpKSB7XG4gICAgICAgICAgLy8gRG9uJ3Qgc3RvcmUgY29tcGxleCBjYWxscyBhcyB3ZSB3b24ndCBiZSBhYmxlIHRvIHNpbXBsaWZ5IHRoZW0gYW55d2F5cyBsYXRlciBvbi5cbiAgICAgICAgICBtZXRhZGF0YSA9IHtcbiAgICAgICAgICAgIF9fc3ltYm9saWM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ29tcGxleCBmdW5jdGlvbiBjYWxscyBhcmUgbm90IHN1cHBvcnRlZC4nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE5vdGU6IFdlIG5lZWQgdG8ga2VlcCBzdG9yaW5nIGN0b3IgY2FsbHMgZm9yIGUuZy5cbiAgICAgIC8vIGBleHBvcnQgY29uc3QgeCA9IG5ldyBJbmplY3Rpb25Ub2tlbiguLi4pYFxuICAgICAgdW5wcm9jZXNzZWRTdW1tYXJ5Lm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICBwcm9jZXNzZWRTdW1tYXJ5Lm1ldGFkYXRhID0gdGhpcy5wcm9jZXNzVmFsdWUobWV0YWRhdGEsIFNlcmlhbGl6YXRpb25GbGFncy5SZXNvbHZlVmFsdWUpO1xuICAgICAgaWYgKG1ldGFkYXRhIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sICYmXG4gICAgICAgICAgdGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShtZXRhZGF0YS5maWxlUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb25TeW1ib2wgPSB0aGlzLnN5bWJvbHNbdGhpcy5pbmRleEJ5U3ltYm9sLmdldChtZXRhZGF0YSkhXTtcbiAgICAgICAgaWYgKCFpc0xvd2VyZWRTeW1ib2woZGVjbGFyYXRpb25TeW1ib2wubmFtZSkpIHtcbiAgICAgICAgICAvLyBOb3RlOiBzeW1ib2xzIHRoYXQgd2VyZSBpbnRyb2R1Y2VkIGR1cmluZyBjb2RlZ2VuIGluIHRoZSB1c2VyIGZpbGUgY2FuIGhhdmUgYSByZWV4cG9ydFxuICAgICAgICAgIC8vIGlmIGEgdXNlciB1c2VkIGBleHBvcnQgKmAuIEhvd2V2ZXIsIHdlIGNhbid0IHJlbHkgb24gdGhpcyBhcyB0c2lja2xlIHdpbGwgY2hhbmdlXG4gICAgICAgICAgLy8gYGV4cG9ydCAqYCBpbnRvIG5hbWVkIGV4cG9ydHMsIHVzaW5nIG9ubHkgdGhlIGluZm9ybWF0aW9uIGZyb20gdGhlIHR5cGVjaGVja2VyLlxuICAgICAgICAgIC8vIEFzIHdlIGludHJvZHVjZSB0aGUgbmV3IHN5bWJvbHMgYWZ0ZXIgdHlwZWNoZWNrLCBUc2lja2xlIGRvZXMgbm90IGtub3cgYWJvdXQgdGhlbSxcbiAgICAgICAgICAvLyBhbmQgb21pdHMgdGhlbSB3aGVuIGV4cGFuZGluZyBgZXhwb3J0ICpgLlxuICAgICAgICAgIC8vIFNvIHdlIGhhdmUgdG8ga2VlcCByZWV4cG9ydGluZyB0aGVzZSBzeW1ib2xzIG1hbnVhbGx5IHZpYSAubmdmYWN0b3J5IGZpbGVzLlxuICAgICAgICAgIHRoaXMucmVleHBvcnRlZEJ5LnNldChkZWNsYXJhdGlvblN5bWJvbCwgc3VtbWFyeS5zeW1ib2wpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdW5wcm9jZXNzZWRTdW1tYXJ5LnR5cGUgJiYgc3VtbWFyeS50eXBlKSB7XG4gICAgICB1bnByb2Nlc3NlZFN1bW1hcnkudHlwZSA9IHN1bW1hcnkudHlwZTtcbiAgICAgIC8vIE5vdGU6IFdlIGRvbid0IGFkZCB0aGUgc3VtbWFyaWVzIG9mIGFsbCByZWZlcmVuY2VkIHN5bWJvbHMgYXMgZm9yIHRoZSBSZXNvbHZlZFN5bWJvbHMsXG4gICAgICAvLyBhcyB0aGUgdHlwZSBzdW1tYXJpZXMgYWxyZWFkeSBjb250YWluIHRoZSB0cmFuc2l0aXZlIGRhdGEgdGhhdCB0aGV5IHJlcXVpcmVcbiAgICAgIC8vIChpbiBhIG1pbmltYWwgd2F5KS5cbiAgICAgIHByb2Nlc3NlZFN1bW1hcnkudHlwZSA9IHRoaXMucHJvY2Vzc1ZhbHVlKHN1bW1hcnkudHlwZSwgU2VyaWFsaXphdGlvbkZsYWdzLk5vbmUpO1xuICAgICAgLy8gZXhjZXB0IGZvciByZWV4cG9ydGVkIGRpcmVjdGl2ZXMgLyBwaXBlcywgc28gd2UgbmVlZCB0byBzdG9yZVxuICAgICAgLy8gdGhlaXIgc3VtbWFyaWVzIGV4cGxpY2l0bHkuXG4gICAgICBpZiAoc3VtbWFyeS50eXBlLnN1bW1hcnlLaW5kID09PSBDb21waWxlU3VtbWFyeUtpbmQuTmdNb2R1bGUpIHtcbiAgICAgICAgY29uc3QgbmdNb2R1bGVTdW1tYXJ5ID0gPENvbXBpbGVOZ01vZHVsZVN1bW1hcnk+c3VtbWFyeS50eXBlO1xuICAgICAgICBuZ01vZHVsZVN1bW1hcnkuZXhwb3J0ZWREaXJlY3RpdmVzLmNvbmNhdChuZ01vZHVsZVN1bW1hcnkuZXhwb3J0ZWRQaXBlcykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICBjb25zdCBzeW1ib2w6IFN0YXRpY1N5bWJvbCA9IGlkLnJlZmVyZW5jZTtcbiAgICAgICAgICBpZiAodGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShzeW1ib2wuZmlsZVBhdGgpICYmXG4gICAgICAgICAgICAgICF0aGlzLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuaGFzKHN5bWJvbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnN1bW1hcnlSZXNvbHZlci5yZXNvbHZlU3VtbWFyeShzeW1ib2wpO1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRTdW1tYXJ5KHN1bW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjcmVhdGVFeHRlcm5hbFN5bWJvbFJlZXhwb3J0cyBXaGV0aGVyIGV4dGVybmFsIHN0YXRpYyBzeW1ib2xzIHNob3VsZCBiZSByZS1leHBvcnRlZC5cbiAgICogVGhpcyBjYW4gYmUgZW5hYmxlZCBpZiBleHRlcm5hbCBzeW1ib2xzIHNob3VsZCBiZSByZS1leHBvcnRlZCBieSB0aGUgY3VycmVudCBtb2R1bGUgaW5cbiAgICogb3JkZXIgdG8gYXZvaWQgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG1vZHVsZSBkZXBlbmRlbmNpZXMgd2hpY2ggY2FuIGJyZWFrIHN0cmljdCBkZXBlbmRlbmN5XG4gICAqIGVuZm9yY2VtZW50cyAoYXMgaW4gR29vZ2xlMykuIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNTY0NFxuICAgKi9cbiAgc2VyaWFsaXplKGNyZWF0ZUV4dGVybmFsU3ltYm9sUmVleHBvcnRzOiBib29sZWFuKTpcbiAgICAgIHtqc29uOiBzdHJpbmcsIGV4cG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGV4cG9ydEFzOiBzdHJpbmd9W119IHtcbiAgICBjb25zdCBleHBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBleHBvcnRBczogc3RyaW5nfVtdID0gW107XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1vZHVsZU5hbWU6IHRoaXMubW9kdWxlTmFtZSxcbiAgICAgIHN1bW1hcmllczogdGhpcy5wcm9jZXNzZWRTdW1tYXJpZXMsXG4gICAgICBzeW1ib2xzOiB0aGlzLnN5bWJvbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICAgIHN5bWJvbC5hc3NlcnROb01lbWJlcnMoKTtcbiAgICAgICAgbGV0IGltcG9ydEFzOiBzdHJpbmd8bnVtYmVyID0gdW5kZWZpbmVkITtcbiAgICAgICAgaWYgKHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUoc3ltYm9sLmZpbGVQYXRoKSkge1xuICAgICAgICAgIGNvbnN0IHJlZXhwb3J0U3ltYm9sID0gdGhpcy5yZWV4cG9ydGVkQnkuZ2V0KHN5bWJvbCk7XG4gICAgICAgICAgaWYgKHJlZXhwb3J0U3ltYm9sKSB7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBnaXZlbiBleHRlcm5hbCBzdGF0aWMgc3ltYm9sIGlzIGFscmVhZHkgbWFudWFsbHkgZXhwb3J0ZWQgYnkgdGhlXG4gICAgICAgICAgICAvLyB1c2VyLCB3ZSBqdXN0IHByb3h5IHRoZSBleHRlcm5hbCBzdGF0aWMgc3ltYm9sIHJlZmVyZW5jZSB0byB0aGUgbWFudWFsIGV4cG9ydC5cbiAgICAgICAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBBT1QgY29tcGlsZXIgaW1wb3J0cyB0aGUgZXh0ZXJuYWwgc3ltYm9sIHRocm91Z2ggdGhlXG4gICAgICAgICAgICAvLyB1c2VyIGV4cG9ydCBhbmQgZG9lcyBub3QgaW50cm9kdWNlIGFub3RoZXIgZGVwZW5kZW5jeSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICAgICAgICAgICAgaW1wb3J0QXMgPSB0aGlzLmluZGV4QnlTeW1ib2wuZ2V0KHJlZXhwb3J0U3ltYm9sKSE7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFeHRlcm5hbFN5bWJvbFJlZXhwb3J0cykge1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgZ2l2ZW4gZXh0ZXJuYWwgc3RhdGljIHN5bWJvbCBpcyAqbm90KiBtYW51YWxseSBleHBvcnRlZCBieVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIsIGFuZCB3ZSBtYW51YWxseSBjcmVhdGUgYSByZS1leHBvcnQgaW4gdGhlIGZhY3RvcnkgZmlsZSBzbyB0aGF0IHdlXG4gICAgICAgICAgICAvLyBkb24ndCBpbnRyb2R1Y2UgYW5vdGhlciBtb2R1bGUgZGVwZW5kZW5jeS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBydW5uaW5nIHdpdGhpblxuICAgICAgICAgICAgLy8gQmF6ZWwgc28gdGhhdCB0aGUgQU9UIGNvbXBpbGVyIGRvZXMgbm90IGludHJvZHVjZSBhbnkgbW9kdWxlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgLy8gd2hpY2ggY2FuIGJyZWFrIHRoZSBzdHJpY3QgZGVwZW5kZW5jeSBlbmZvcmNlbWVudC4gKGUuZy4gYXMgaW4gR29vZ2xlMylcbiAgICAgICAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI1NjQ0XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLmdldChzeW1ib2wpO1xuICAgICAgICAgICAgaWYgKCFzdW1tYXJ5IHx8ICFzdW1tYXJ5Lm1ldGFkYXRhIHx8IHN1bW1hcnkubWV0YWRhdGEuX19zeW1ib2xpYyAhPT0gJ2ludGVyZmFjZScpIHtcbiAgICAgICAgICAgICAgaW1wb3J0QXMgPSBgJHtzeW1ib2wubmFtZX1fJHtpbmRleH1gO1xuICAgICAgICAgICAgICBleHBvcnRBcy5wdXNoKHtzeW1ib2wsIGV4cG9ydEFzOiBpbXBvcnRBc30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF9fc3ltYm9sOiBpbmRleCxcbiAgICAgICAgICBuYW1lOiBzeW1ib2wubmFtZSxcbiAgICAgICAgICBmaWxlUGF0aDogdGhpcy5zdW1tYXJ5UmVzb2x2ZXIudG9TdW1tYXJ5RmlsZU5hbWUoc3ltYm9sLmZpbGVQYXRoLCB0aGlzLnNyY0ZpbGVOYW1lKSxcbiAgICAgICAgICBpbXBvcnRBczogaW1wb3J0QXNcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHtqc29uLCBleHBvcnRBc307XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NWYWx1ZSh2YWx1ZTogYW55LCBmbGFnczogU2VyaWFsaXphdGlvbkZsYWdzKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRWYWx1ZSh2YWx1ZSwgdGhpcywgZmxhZ3MpO1xuICB9XG5cbiAgdmlzaXRPdGhlcih2YWx1ZTogYW55LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgbGV0IGJhc2VTeW1ib2wgPSB0aGlzLnN5bWJvbFJlc29sdmVyLmdldFN0YXRpY1N5bWJvbCh2YWx1ZS5maWxlUGF0aCwgdmFsdWUubmFtZSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMudmlzaXRTdGF0aWNTeW1ib2woYmFzZVN5bWJvbCwgY29udGV4dCk7XG4gICAgICByZXR1cm4ge19fc3ltYm9sOiBpbmRleCwgbWVtYmVyczogdmFsdWUubWVtYmVyc307XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0cmlwIGxpbmUgYW5kIGNoYXJhY3RlciBudW1iZXJzIGZyb20gbmdzdW1tYXJpZXMuXG4gICAqIEVtaXR0aW5nIHRoZW0gY2F1c2VzIHdoaXRlIHNwYWNlcyBjaGFuZ2VzIHRvIHJldHJpZ2dlciB1cHN0cmVhbVxuICAgKiByZWNvbXBpbGF0aW9ucyBpbiBiYXplbC5cbiAgICogVE9ETzogZmluZCBvdXQgYSB3YXkgdG8gaGF2ZSBsaW5lIGFuZCBjaGFyYWN0ZXIgbnVtYmVycyBpbiBlcnJvcnMgd2l0aG91dFxuICAgKiBleGNlc3NpdmUgcmVjb21waWxhdGlvbiBpbiBiYXplbC5cbiAgICovXG4gIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKG1hcFsnX19zeW1ib2xpYyddID09PSAncmVzb2x2ZWQnKSB7XG4gICAgICByZXR1cm4gdmlzaXRWYWx1ZShtYXBbJ3N5bWJvbCddLCB0aGlzLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKG1hcFsnX19zeW1ib2xpYyddID09PSAnZXJyb3InKSB7XG4gICAgICBkZWxldGUgbWFwWydsaW5lJ107XG4gICAgICBkZWxldGUgbWFwWydjaGFyYWN0ZXInXTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnZpc2l0U3RyaW5nTWFwKG1hcCwgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBvcHRpb25zLnJlc29sdmVWYWx1ZSBpcyB0cnVlLCBhbmQgdGhlIHN1bW1hcnkgZm9yIHRoZSBzeW1ib2xcbiAgICogcmVzb2x2ZWQgdG8gYSB0eXBlIG9yIGNvdWxkIG5vdCBiZSByZXNvbHZlZC5cbiAgICovXG4gIHByaXZhdGUgdmlzaXRTdGF0aWNTeW1ib2woYmFzZVN5bWJvbDogU3RhdGljU3ltYm9sLCBmbGFnczogU2VyaWFsaXphdGlvbkZsYWdzKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlcnx1bmRlZmluZWR8bnVsbCA9IHRoaXMuaW5kZXhCeVN5bWJvbC5nZXQoYmFzZVN5bWJvbCk7XG4gICAgbGV0IHN1bW1hcnk6IFN1bW1hcnk8U3RhdGljU3ltYm9sPnxudWxsID0gbnVsbDtcbiAgICBpZiAoZmxhZ3MgJiBTZXJpYWxpemF0aW9uRmxhZ3MuUmVzb2x2ZVZhbHVlICYmXG4gICAgICAgIHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUoYmFzZVN5bWJvbC5maWxlUGF0aCkpIHtcbiAgICAgIGlmICh0aGlzLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuaGFzKGJhc2VTeW1ib2wpKSB7XG4gICAgICAgIC8vIHRoZSBzdW1tYXJ5IGZvciB0aGlzIHN5bWJvbCB3YXMgYWxyZWFkeSBhZGRlZFxuICAgICAgICAvLyAtPiBub3RoaW5nIHRvIGRvLlxuICAgICAgICByZXR1cm4gaW5kZXghO1xuICAgICAgfVxuICAgICAgc3VtbWFyeSA9IHRoaXMubG9hZFN1bW1hcnkoYmFzZVN5bWJvbCk7XG4gICAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5Lm1ldGFkYXRhIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICAgIC8vIFRoZSBzdW1tYXJ5IGlzIGEgcmVleHBvcnRcbiAgICAgICAgaW5kZXggPSB0aGlzLnZpc2l0U3RhdGljU3ltYm9sKHN1bW1hcnkubWV0YWRhdGEsIGZsYWdzKTtcbiAgICAgICAgLy8gcmVzZXQgdGhlIHN1bW1hcnkgYXMgaXQgaXMganVzdCBhIHJlZXhwb3J0LCBzbyB3ZSBkb24ndCB3YW50IHRvIHN0b3JlIGl0LlxuICAgICAgICBzdW1tYXJ5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgIC8vIE5vdGU6ID09IG9uIHB1cnBvc2UgdG8gY29tcGFyZSB3aXRoIHVuZGVmaW5lZCFcbiAgICAgIC8vIE5vIHN1bW1hcnkgYW5kIHRoZSBzeW1ib2wgaXMgYWxyZWFkeSBhZGRlZCAtPiBub3RoaW5nIHRvIGRvLlxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICAvLyBOb3RlOiA9PSBvbiBwdXJwb3NlIHRvIGNvbXBhcmUgd2l0aCB1bmRlZmluZWQhXG4gICAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aDtcbiAgICAgIHRoaXMuc3ltYm9scy5wdXNoKGJhc2VTeW1ib2wpO1xuICAgIH1cbiAgICB0aGlzLmluZGV4QnlTeW1ib2wuc2V0KGJhc2VTeW1ib2wsIGluZGV4KTtcbiAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgdGhpcy5hZGRTdW1tYXJ5KHN1bW1hcnkpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBwcml2YXRlIGxvYWRTdW1tYXJ5KHN5bWJvbDogU3RhdGljU3ltYm9sKTogU3VtbWFyeTxTdGF0aWNTeW1ib2w+fG51bGwge1xuICAgIGxldCBzdW1tYXJ5ID0gdGhpcy5zdW1tYXJ5UmVzb2x2ZXIucmVzb2x2ZVN1bW1hcnkoc3ltYm9sKTtcbiAgICBpZiAoIXN1bW1hcnkpIHtcbiAgICAgIC8vIHNvbWUgc3ltYm9scyBtaWdodCBvcmlnaW5hdGUgZnJvbSBhIHBsYWluIHR5cGVzY3JpcHQgbGlicmFyeVxuICAgICAgLy8gdGhhdCBqdXN0IGV4cG9ydGVkIC5kLnRzIGFuZCAubWV0YWRhdGEuanNvbiBmaWxlcywgaS5lLiB3aGVyZSBubyBzdW1tYXJ5XG4gICAgICAvLyBmaWxlcyB3ZXJlIGNyZWF0ZWQuXG4gICAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHRoaXMuc3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzeW1ib2wpO1xuICAgICAgaWYgKHJlc29sdmVkU3ltYm9sKSB7XG4gICAgICAgIHN1bW1hcnkgPSB7c3ltYm9sOiByZXNvbHZlZFN5bWJvbC5zeW1ib2wsIG1ldGFkYXRhOiByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YX07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW1tYXJ5O1xuICB9XG59XG5cbmNsYXNzIEZvckppdFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIGRhdGE6IEFycmF5PHtcbiAgICBzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnksXG4gICAgbWV0YWRhdGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YXxDb21waWxlUGlwZU1ldGFkYXRhfFxuICAgIENvbXBpbGVUeXBlTWV0YWRhdGF8bnVsbCxcbiAgICBpc0xpYnJhcnk6IGJvb2xlYW5cbiAgfT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBwcml2YXRlIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPikge31cblxuICBhZGRTb3VyY2VUeXBlKFxuICAgICAgc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5LFxuICAgICAgbWV0YWRhdGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YXxDb21waWxlUGlwZU1ldGFkYXRhfFxuICAgICAgQ29tcGlsZVR5cGVNZXRhZGF0YSkge1xuICAgIHRoaXMuZGF0YS5wdXNoKHtzdW1tYXJ5LCBtZXRhZGF0YSwgaXNMaWJyYXJ5OiBmYWxzZX0pO1xuICB9XG5cbiAgYWRkTGliVHlwZShzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnkpIHtcbiAgICB0aGlzLmRhdGEucHVzaCh7c3VtbWFyeSwgbWV0YWRhdGE6IG51bGwsIGlzTGlicmFyeTogdHJ1ZX0pO1xuICB9XG5cbiAgc2VyaWFsaXplKGV4cG9ydEFzQXJyOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGV4cG9ydEFzOiBzdHJpbmd9W10pOiB2b2lkIHtcbiAgICBjb25zdCBleHBvcnRBc0J5U3ltYm9sID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHtzeW1ib2wsIGV4cG9ydEFzfSBvZiBleHBvcnRBc0Fycikge1xuICAgICAgZXhwb3J0QXNCeVN5bWJvbC5zZXQoc3ltYm9sLCBleHBvcnRBcyk7XG4gICAgfVxuICAgIGNvbnN0IG5nTW9kdWxlU3ltYm9scyA9IG5ldyBTZXQ8U3RhdGljU3ltYm9sPigpO1xuXG4gICAgZm9yIChjb25zdCB7c3VtbWFyeSwgbWV0YWRhdGEsIGlzTGlicmFyeX0gb2YgdGhpcy5kYXRhKSB7XG4gICAgICBpZiAoc3VtbWFyeS5zdW1tYXJ5S2luZCA9PT0gQ29tcGlsZVN1bW1hcnlLaW5kLk5nTW9kdWxlKSB7XG4gICAgICAgIC8vIGNvbGxlY3QgdGhlIHN5bWJvbHMgdGhhdCByZWZlciB0byBOZ01vZHVsZSBjbGFzc2VzLlxuICAgICAgICAvLyBOb3RlOiB3ZSBjYW4ndCBqdXN0IHJlbHkgb24gYHN1bW1hcnkudHlwZS5zdW1tYXJ5S2luZGAgdG8gZGV0ZXJtaW5lIHRoaXMgYXNcbiAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBzdW1tYXJpZXMgb2YgYWxsIHJlZmVyZW5jZWQgc3ltYm9scyB3aGVuIHdlIHNlcmlhbGl6ZSB0eXBlIHN1bW1hcmllcy5cbiAgICAgICAgLy8gU2VlIHNlcmlhbGl6ZVN1bW1hcmllcyBmb3IgZGV0YWlscy5cbiAgICAgICAgbmdNb2R1bGVTeW1ib2xzLmFkZChzdW1tYXJ5LnR5cGUucmVmZXJlbmNlKTtcbiAgICAgICAgY29uc3QgbW9kU3VtbWFyeSA9IDxDb21waWxlTmdNb2R1bGVTdW1tYXJ5PnN1bW1hcnk7XG4gICAgICAgIGZvciAoY29uc3QgbW9kIG9mIG1vZFN1bW1hcnkubW9kdWxlcykge1xuICAgICAgICAgIG5nTW9kdWxlU3ltYm9scy5hZGQobW9kLnJlZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNMaWJyYXJ5KSB7XG4gICAgICAgIGNvbnN0IGZuTmFtZSA9IHN1bW1hcnlGb3JKaXROYW1lKHN1bW1hcnkudHlwZS5yZWZlcmVuY2UubmFtZSk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnlGb3JKaXRGdW5jdGlvbihcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Q3R4LCBzdW1tYXJ5LnR5cGUucmVmZXJlbmNlLFxuICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVTdW1tYXJ5V2l0aERlcHMoc3VtbWFyeSwgbWV0YWRhdGEhKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdNb2R1bGVTeW1ib2xzLmZvckVhY2goKG5nTW9kdWxlU3ltYm9sKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShuZ01vZHVsZVN5bWJvbC5maWxlUGF0aCkpIHtcbiAgICAgICAgbGV0IGV4cG9ydEFzID0gZXhwb3J0QXNCeVN5bWJvbC5nZXQobmdNb2R1bGVTeW1ib2wpIHx8IG5nTW9kdWxlU3ltYm9sLm5hbWU7XG4gICAgICAgIGNvbnN0IGppdEV4cG9ydEFzTmFtZSA9IHN1bW1hcnlGb3JKaXROYW1lKGV4cG9ydEFzKTtcbiAgICAgICAgdGhpcy5vdXRwdXRDdHguc3RhdGVtZW50cy5wdXNoKG8udmFyaWFibGUoaml0RXhwb3J0QXNOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQodGhpcy5zZXJpYWxpemVTdW1tYXJ5UmVmKG5nTW9kdWxlU3ltYm9sKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9EZWNsU3RtdChudWxsLCBbby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRdKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVN1bW1hcnlXaXRoRGVwcyhcbiAgICAgIHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSxcbiAgICAgIG1ldGFkYXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YXxDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF8Q29tcGlsZVBpcGVNZXRhZGF0YXxcbiAgICAgIENvbXBpbGVUeXBlTWV0YWRhdGEpOiBvLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGV4cHJlc3Npb25zOiBvLkV4cHJlc3Npb25bXSA9IFt0aGlzLnNlcmlhbGl6ZVN1bW1hcnkoc3VtbWFyeSldO1xuICAgIGxldCBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10gPSBbXTtcbiAgICBpZiAobWV0YWRhdGEgaW5zdGFuY2VvZiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSkge1xuICAgICAgZXhwcmVzc2lvbnMucHVzaCguLi5cbiAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGRpcmVjdGl2ZXMgLyBwaXBlcywgd2Ugb25seSBhZGQgdGhlIGRlY2xhcmVkIG9uZXMsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCByZWx5IG9uIHRyYW5zaXRpdmVseSBpbXBvcnRpbmcgTmdNb2R1bGVzIHRvIGdldCB0aGUgdHJhbnNpdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAvLyBzdW1tYXJpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLmRlY2xhcmVkRGlyZWN0aXZlcy5jb25jYXQobWV0YWRhdGEuZGVjbGFyZWRQaXBlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodHlwZSA9PiB0eXBlLnJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBtb2R1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWxzbyBhZGQgdGhlIHN1bW1hcmllcyBmb3IgbW9kdWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSBsaWJyYXJpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9rIGFzIHdlIHByb2R1Y2UgcmVleHBvcnRzIGZvciBhbGwgdHJhbnNpdGl2ZSBtb2R1bGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChtZXRhZGF0YS50cmFuc2l0aXZlTW9kdWxlLm1vZHVsZXMubWFwKHR5cGUgPT4gdHlwZS5yZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHJlZiA9PiByZWYgIT09IG1ldGFkYXRhLnR5cGUucmVmZXJlbmNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlZikgPT4gdGhpcy5zZXJpYWxpemVTdW1tYXJ5UmVmKHJlZikpKTtcbiAgICAgIC8vIE5vdGU6IFdlIGRvbid0IHVzZSBgTmdNb2R1bGVTdW1tYXJ5LnByb3ZpZGVyc2AsIGFzIHRoYXQgb25lIGlzIHRyYW5zaXRpdmUsXG4gICAgICAvLyBhbmQgd2UgYWxyZWFkeSBoYXZlIHRyYW5zaXRpdmUgbW9kdWxlcy5cbiAgICAgIHByb3ZpZGVycyA9IG1ldGFkYXRhLnByb3ZpZGVycztcbiAgICB9IGVsc2UgaWYgKHN1bW1hcnkuc3VtbWFyeUtpbmQgPT09IENvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUpIHtcbiAgICAgIGNvbnN0IGRpclN1bW1hcnkgPSA8Q29tcGlsZURpcmVjdGl2ZVN1bW1hcnk+c3VtbWFyeTtcbiAgICAgIHByb3ZpZGVycyA9IGRpclN1bW1hcnkucHJvdmlkZXJzLmNvbmNhdChkaXJTdW1tYXJ5LnZpZXdQcm92aWRlcnMpO1xuICAgIH1cbiAgICAvLyBOb3RlOiBXZSBjYW4ndCBqdXN0IHJlZmVyIHRvIHRoZSBgbmdzdW1tYXJ5LnRzYCBmaWxlcyBmb3IgYHVzZUNsYXNzYCBwcm92aWRlcnMgKGFzIHdlIGRvIGZvclxuICAgIC8vIGRlY2xhcmVkRGlyZWN0aXZlcyAvIGRlY2xhcmVkUGlwZXMpLCBhcyB3ZSBhbGxvd1xuICAgIC8vIHByb3ZpZGVycyB3aXRob3V0IGN0b3IgYXJndW1lbnRzIHRvIHNraXAgdGhlIGBASW5qZWN0YWJsZWAgZGVjb3JhdG9yLFxuICAgIC8vIGkuZS4gd2UgZGlkbid0IGdlbmVyYXRlIC5uZ3N1bW1hcnkudHMgZmlsZXMgZm9yIHRoZXNlLlxuICAgIGV4cHJlc3Npb25zLnB1c2goXG4gICAgICAgIC4uLnByb3ZpZGVycy5maWx0ZXIocHJvdmlkZXIgPT4gISFwcm92aWRlci51c2VDbGFzcykubWFwKHByb3ZpZGVyID0+IHRoaXMuc2VyaWFsaXplU3VtbWFyeSh7XG4gICAgICAgICAgc3VtbWFyeUtpbmQ6IENvbXBpbGVTdW1tYXJ5S2luZC5JbmplY3RhYmxlLFxuICAgICAgICAgIHR5cGU6IHByb3ZpZGVyLnVzZUNsYXNzXG4gICAgICAgIH0gYXMgQ29tcGlsZVR5cGVTdW1tYXJ5KSkpO1xuICAgIHJldHVybiBvLmxpdGVyYWxBcnIoZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVTdW1tYXJ5UmVmKHR5cGVTeW1ib2w6IFN0YXRpY1N5bWJvbCk6IG8uRXhwcmVzc2lvbiB7XG4gICAgY29uc3Qgaml0SW1wb3J0ZWRTeW1ib2wgPSB0aGlzLnN5bWJvbFJlc29sdmVyLmdldFN0YXRpY1N5bWJvbChcbiAgICAgICAgc3VtbWFyeUZvckppdEZpbGVOYW1lKHR5cGVTeW1ib2wuZmlsZVBhdGgpLCBzdW1tYXJ5Rm9ySml0TmFtZSh0eXBlU3ltYm9sLm5hbWUpKTtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXRDdHguaW1wb3J0RXhwcihqaXRJbXBvcnRlZFN5bWJvbCk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVN1bW1hcnkoZGF0YToge1trZXk6IHN0cmluZ106IGFueX0pOiBvLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IG91dHB1dEN0eCA9IHRoaXMub3V0cHV0Q3R4O1xuXG4gICAgY2xhc3MgVHJhbnNmb3JtZXIgaW1wbGVtZW50cyBWYWx1ZVZpc2l0b3Ige1xuICAgICAgdmlzaXRBcnJheShhcnI6IGFueVtdLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gby5saXRlcmFsQXJyKGFyci5tYXAoZW50cnkgPT4gdmlzaXRWYWx1ZShlbnRyeSwgdGhpcywgY29udGV4dCkpKTtcbiAgICAgIH1cbiAgICAgIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBuZXcgby5MaXRlcmFsTWFwRXhwcihPYmplY3Qua2V5cyhtYXApLm1hcChcbiAgICAgICAgICAgIChrZXkpID0+IG5ldyBvLkxpdGVyYWxNYXBFbnRyeShrZXksIHZpc2l0VmFsdWUobWFwW2tleV0sIHRoaXMsIGNvbnRleHQpLCBmYWxzZSkpKTtcbiAgICAgIH1cbiAgICAgIHZpc2l0UHJpbWl0aXZlKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBvLmxpdGVyYWwodmFsdWUpO1xuICAgICAgfVxuICAgICAgdmlzaXRPdGhlcih2YWx1ZTogYW55LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgICAgICByZXR1cm4gb3V0cHV0Q3R4LmltcG9ydEV4cHIodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBTdGF0ZTogRW5jb3VudGVyZWQgdmFsdWUgJHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2aXNpdFZhbHVlKGRhdGEsIG5ldyBUcmFuc2Zvcm1lcigpLCBudWxsKTtcbiAgfVxufVxuXG5jbGFzcyBGcm9tSnNvbkRlc2VyaWFsaXplciBleHRlbmRzIFZhbHVlVHJhbnNmb3JtZXIge1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBzeW1ib2xzITogU3RhdGljU3ltYm9sW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN5bWJvbENhY2hlOiBTdGF0aWNTeW1ib2xDYWNoZSxcbiAgICAgIHByaXZhdGUgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBkZXNlcmlhbGl6ZShsaWJyYXJ5RmlsZU5hbWU6IHN0cmluZywganNvbjogc3RyaW5nKToge1xuICAgIG1vZHVsZU5hbWU6IHN0cmluZ3xudWxsLFxuICAgIHN1bW1hcmllczogU3VtbWFyeTxTdGF0aWNTeW1ib2w+W10sXG4gICAgaW1wb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgaW1wb3J0QXM6IFN0YXRpY1N5bWJvbH1bXVxuICB9IHtcbiAgICBjb25zdCBkYXRhOiB7bW9kdWxlTmFtZTogc3RyaW5nfG51bGwsIHN1bW1hcmllczogYW55W10sIHN5bWJvbHM6IGFueVtdfSA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgY29uc3QgYWxsSW1wb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgaW1wb3J0QXM6IFN0YXRpY1N5bWJvbH1bXSA9IFtdO1xuICAgIHRoaXMuc3ltYm9scyA9IGRhdGEuc3ltYm9scy5tYXAoXG4gICAgICAgIChzZXJpYWxpemVkU3ltYm9sKSA9PiB0aGlzLnN5bWJvbENhY2hlLmdldChcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeVJlc29sdmVyLmZyb21TdW1tYXJ5RmlsZU5hbWUoc2VyaWFsaXplZFN5bWJvbC5maWxlUGF0aCwgbGlicmFyeUZpbGVOYW1lKSxcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRTeW1ib2wubmFtZSkpO1xuICAgIGRhdGEuc3ltYm9scy5mb3JFYWNoKChzZXJpYWxpemVkU3ltYm9sLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5zeW1ib2xzW2luZGV4XTtcbiAgICAgIGNvbnN0IGltcG9ydEFzID0gc2VyaWFsaXplZFN5bWJvbC5pbXBvcnRBcztcbiAgICAgIGlmICh0eXBlb2YgaW1wb3J0QXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFsbEltcG9ydEFzLnB1c2goe3N5bWJvbCwgaW1wb3J0QXM6IHRoaXMuc3ltYm9sc1tpbXBvcnRBc119KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydEFzID09PSAnc3RyaW5nJykge1xuICAgICAgICBhbGxJbXBvcnRBcy5wdXNoKFxuICAgICAgICAgICAge3N5bWJvbCwgaW1wb3J0QXM6IHRoaXMuc3ltYm9sQ2FjaGUuZ2V0KG5nZmFjdG9yeUZpbGVQYXRoKGxpYnJhcnlGaWxlTmFtZSksIGltcG9ydEFzKX0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHN1bW1hcmllcyA9IHZpc2l0VmFsdWUoZGF0YS5zdW1tYXJpZXMsIHRoaXMsIG51bGwpIGFzIFN1bW1hcnk8U3RhdGljU3ltYm9sPltdO1xuICAgIHJldHVybiB7bW9kdWxlTmFtZTogZGF0YS5tb2R1bGVOYW1lLCBzdW1tYXJpZXMsIGltcG9ydEFzOiBhbGxJbXBvcnRBc307XG4gIH1cblxuICB2aXNpdFN0cmluZ01hcChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmICgnX19zeW1ib2wnIGluIG1hcCkge1xuICAgICAgY29uc3QgYmFzZVN5bWJvbCA9IHRoaXMuc3ltYm9sc1ttYXBbJ19fc3ltYm9sJ11dO1xuICAgICAgY29uc3QgbWVtYmVycyA9IG1hcFsnbWVtYmVycyddO1xuICAgICAgcmV0dXJuIG1lbWJlcnMubGVuZ3RoID8gdGhpcy5zeW1ib2xDYWNoZS5nZXQoYmFzZVN5bWJvbC5maWxlUGF0aCwgYmFzZVN5bWJvbC5uYW1lLCBtZW1iZXJzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIudmlzaXRTdHJpbmdNYXAobWFwLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDYWxsKG1ldGFkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1ldGFkYXRhICYmIG1ldGFkYXRhLl9fc3ltYm9saWMgPT09ICdjYWxsJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbkNhbGwobWV0YWRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNDYWxsKG1ldGFkYXRhKSAmJiB1bndyYXBSZXNvbHZlZE1ldGFkYXRhKG1ldGFkYXRhLmV4cHJlc3Npb24pIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sO1xufVxuXG5mdW5jdGlvbiBpc01ldGhvZENhbGxPblZhcmlhYmxlKG1ldGFkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzQ2FsbChtZXRhZGF0YSkgJiYgbWV0YWRhdGEuZXhwcmVzc2lvbiAmJiBtZXRhZGF0YS5leHByZXNzaW9uLl9fc3ltYm9saWMgPT09ICdzZWxlY3QnICYmXG4gICAgICB1bndyYXBSZXNvbHZlZE1ldGFkYXRhKG1ldGFkYXRhLmV4cHJlc3Npb24uZXhwcmVzc2lvbikgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2w7XG59XG4iXX0=