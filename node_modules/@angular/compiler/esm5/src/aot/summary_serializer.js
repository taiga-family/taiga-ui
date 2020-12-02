import { __extends, __read, __spread, __values } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileNgModuleMetadata, CompileSummaryKind } from '../compile_metadata';
import * as o from '../output/output_ast';
import { ValueTransformer, visitValue } from '../util';
import { StaticSymbol } from './static_symbol';
import { unwrapResolvedMetadata } from './static_symbol_resolver';
import { isLoweredSymbol, ngfactoryFilePath, summaryForJitFileName, summaryForJitName } from './util';
export function serializeSummaries(srcFileName, forJitCtx, summaryResolver, symbolResolver, symbols, types, createExternalSymbolReexports) {
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
export function deserializeSummaries(symbolCache, summaryResolver, libraryFileName, json) {
    var deserializer = new FromJsonDeserializer(symbolCache, summaryResolver);
    return deserializer.deserialize(libraryFileName, json);
}
export function createForJitStub(outputCtx, reference) {
    return createSummaryForJitFunction(outputCtx, reference, o.NULL_EXPR);
}
function createSummaryForJitFunction(outputCtx, reference, value) {
    var fnName = summaryForJitName(reference.name);
    outputCtx.statements.push(o.fn([], [new o.ReturnStatement(value)], new o.ArrayType(o.DYNAMIC_TYPE)).toDeclStmt(fnName, [
        o.StmtModifier.Final, o.StmtModifier.Exported
    ]));
}
var ToJsonSerializer = /** @class */ (function (_super) {
    __extends(ToJsonSerializer, _super);
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
            if (metadata_1 instanceof StaticSymbol &&
                this.summaryResolver.isLibraryFile(metadata_1.filePath)) {
                var declarationSymbol = this.symbols[this.indexBySymbol.get(metadata_1)];
                if (!isLoweredSymbol(declarationSymbol.name)) {
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
            if (summary.type.summaryKind === CompileSummaryKind.NgModule) {
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
        return visitValue(value, this, flags);
    };
    ToJsonSerializer.prototype.visitOther = function (value, context) {
        if (value instanceof StaticSymbol) {
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
            return visitValue(map['symbol'], this, context);
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
            if (summary && summary.metadata instanceof StaticSymbol) {
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
}(ValueTransformer));
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
            for (var exportAsArr_1 = __values(exportAsArr), exportAsArr_1_1 = exportAsArr_1.next(); !exportAsArr_1_1.done; exportAsArr_1_1 = exportAsArr_1.next()) {
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
            for (var _e = __values(this.data), _f = _e.next(); !_f.done; _f = _e.next()) {
                var _g = _f.value, summary = _g.summary, metadata = _g.metadata, isLibrary = _g.isLibrary;
                if (summary.summaryKind === CompileSummaryKind.NgModule) {
                    // collect the symbols that refer to NgModule classes.
                    // Note: we can't just rely on `summary.type.summaryKind` to determine this as
                    // we don't add the summaries of all referenced symbols when we serialize type summaries.
                    // See serializeSummaries for details.
                    ngModuleSymbols.add(summary.type.reference);
                    var modSummary = summary;
                    try {
                        for (var _h = (e_3 = void 0, __values(modSummary.modules)), _j = _h.next(); !_j.done; _j = _h.next()) {
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
                    var fnName = summaryForJitName(summary.type.reference.name);
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
                var jitExportAsName = summaryForJitName(exportAs);
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
        if (metadata instanceof CompileNgModuleMetadata) {
            expressions.push.apply(expressions, __spread(
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
        else if (summary.summaryKind === CompileSummaryKind.Directive) {
            var dirSummary = summary;
            providers = dirSummary.providers.concat(dirSummary.viewProviders);
        }
        // Note: We can't just refer to the `ngsummary.ts` files for `useClass` providers (as we do for
        // declaredDirectives / declaredPipes), as we allow
        // providers without ctor arguments to skip the `@Injectable` decorator,
        // i.e. we didn't generate .ngsummary.ts files for these.
        expressions.push.apply(expressions, __spread(providers.filter(function (provider) { return !!provider.useClass; }).map(function (provider) { return _this.serializeSummary({
            summaryKind: CompileSummaryKind.Injectable,
            type: provider.useClass
        }); })));
        return o.literalArr(expressions);
    };
    ForJitSerializer.prototype.serializeSummaryRef = function (typeSymbol) {
        var jitImportedSymbol = this.symbolResolver.getStaticSymbol(summaryForJitFileName(typeSymbol.filePath), summaryForJitName(typeSymbol.name));
        return this.outputCtx.importExpr(jitImportedSymbol);
    };
    ForJitSerializer.prototype.serializeSummary = function (data) {
        var outputCtx = this.outputCtx;
        var Transformer = /** @class */ (function () {
            function Transformer() {
            }
            Transformer.prototype.visitArray = function (arr, context) {
                var _this = this;
                return o.literalArr(arr.map(function (entry) { return visitValue(entry, _this, context); }));
            };
            Transformer.prototype.visitStringMap = function (map, context) {
                var _this = this;
                return new o.LiteralMapExpr(Object.keys(map).map(function (key) { return new o.LiteralMapEntry(key, visitValue(map[key], _this, context), false); }));
            };
            Transformer.prototype.visitPrimitive = function (value, context) {
                return o.literal(value);
            };
            Transformer.prototype.visitOther = function (value, context) {
                if (value instanceof StaticSymbol) {
                    return outputCtx.importExpr(value);
                }
                else {
                    throw new Error("Illegal State: Encountered value " + value);
                }
            };
            return Transformer;
        }());
        return visitValue(data, new Transformer(), null);
    };
    return ForJitSerializer;
}());
var FromJsonDeserializer = /** @class */ (function (_super) {
    __extends(FromJsonDeserializer, _super);
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
                allImportAs.push({ symbol: symbol, importAs: _this.symbolCache.get(ngfactoryFilePath(libraryFileName), importAs) });
            }
        });
        var summaries = visitValue(data.summaries, this, null);
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
}(ValueTransformer));
function isCall(metadata) {
    return metadata && metadata.__symbolic === 'call';
}
function isFunctionCall(metadata) {
    return isCall(metadata) && unwrapResolvedMetadata(metadata.expression) instanceof StaticSymbol;
}
function isMethodCallOnVariable(metadata) {
    return isCall(metadata) && metadata.expression && metadata.expression.__symbolic === 'select' &&
        unwrapResolvedMetadata(metadata.expression.expression) instanceof StaticSymbol;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeV9zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2FvdC9zdW1tYXJ5X3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBb0QsdUJBQXVCLEVBQXdFLGtCQUFrQixFQUEwQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xQLE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFMUMsT0FBTyxFQUFnQixnQkFBZ0IsRUFBZ0IsVUFBVSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRWxGLE9BQU8sRUFBQyxZQUFZLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUE2QyxzQkFBc0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzVHLE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFcEcsTUFBTSxVQUFVLGtCQUFrQixDQUM5QixXQUFtQixFQUFFLFNBQTZCLEVBQ2xELGVBQThDLEVBQUUsY0FBb0MsRUFDcEYsT0FBK0IsRUFBRSxLQUk5QixFQUNILDZCQUNTO0lBRFQsOENBQUEsRUFBQSxxQ0FDUztJQUNYLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTVGLHNFQUFzRTtJQUN0RSwwRUFBMEU7SUFDMUUsc0JBQXNCO0lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQ1gsVUFBQyxjQUFjLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxVQUFVLENBQzNDLEVBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxFQURuRCxDQUNtRCxD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QUFhO0lBQ25DLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxZQUFZLENBQUM7QUFDakcsQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUMsUUFBYTtJQUMzQyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxLQUFLLFFBQVE7UUFDekYsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxZQUFZLENBQUM7QUFDckYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIENvbXBpbGVOZ01vZHVsZVN1bW1hcnksIENvbXBpbGVQaXBlTWV0YWRhdGEsIENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBDb21waWxlU3VtbWFyeUtpbmQsIENvbXBpbGVUeXBlTWV0YWRhdGEsIENvbXBpbGVUeXBlU3VtbWFyeX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7U3VtbWFyeSwgU3VtbWFyeVJlc29sdmVyfSBmcm9tICcuLi9zdW1tYXJ5X3Jlc29sdmVyJztcbmltcG9ydCB7T3V0cHV0Q29udGV4dCwgVmFsdWVUcmFuc2Zvcm1lciwgVmFsdWVWaXNpdG9yLCB2aXNpdFZhbHVlfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbENhY2hlfSBmcm9tICcuL3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtSZXNvbHZlZFN0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sUmVzb2x2ZXIsIHVud3JhcFJlc29sdmVkTWV0YWRhdGF9IGZyb20gJy4vc3RhdGljX3N5bWJvbF9yZXNvbHZlcic7XG5pbXBvcnQge2lzTG93ZXJlZFN5bWJvbCwgbmdmYWN0b3J5RmlsZVBhdGgsIHN1bW1hcnlGb3JKaXRGaWxlTmFtZSwgc3VtbWFyeUZvckppdE5hbWV9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVTdW1tYXJpZXMoXG4gICAgc3JjRmlsZU5hbWU6IHN0cmluZywgZm9ySml0Q3R4OiBPdXRwdXRDb250ZXh0fG51bGwsXG4gICAgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPiwgc3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIHN5bWJvbHM6IFJlc29sdmVkU3RhdGljU3ltYm9sW10sIHR5cGVzOiB7XG4gICAgICBzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnksXG4gICAgICBtZXRhZGF0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhfENvbXBpbGVQaXBlTWV0YWRhdGF8XG4gICAgICBDb21waWxlVHlwZU1ldGFkYXRhXG4gICAgfVtdLFxuICAgIGNyZWF0ZUV4dGVybmFsU3ltYm9sUmVleHBvcnRzID1cbiAgICAgICAgZmFsc2UpOiB7anNvbjogc3RyaW5nLCBleHBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBleHBvcnRBczogc3RyaW5nfVtdfSB7XG4gIGNvbnN0IHRvSnNvblNlcmlhbGl6ZXIgPSBuZXcgVG9Kc29uU2VyaWFsaXplcihzeW1ib2xSZXNvbHZlciwgc3VtbWFyeVJlc29sdmVyLCBzcmNGaWxlTmFtZSk7XG5cbiAgLy8gZm9yIHN5bWJvbHMsIHdlIHVzZSBldmVyeXRoaW5nIGV4Y2VwdCBmb3IgdGhlIGNsYXNzIG1ldGFkYXRhIGl0c2VsZlxuICAvLyAod2Uga2VlcCB0aGUgc3RhdGljcyB0aG91Z2gpLCBhcyB0aGUgY2xhc3MgbWV0YWRhdGEgaXMgY29udGFpbmVkIGluIHRoZVxuICAvLyBDb21waWxlVHlwZVN1bW1hcnkuXG4gIHN5bWJvbHMuZm9yRWFjaChcbiAgICAgIChyZXNvbHZlZFN5bWJvbCkgPT4gdG9Kc29uU2VyaWFsaXplci5hZGRTdW1tYXJ5KFxuICAgICAgICAgIHtzeW1ib2w6IHJlc29sdmVkU3ltYm9sLnN5bWJvbCwgbWV0YWRhdGE6IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhfSkpO1xuXG4gIC8vIEFkZCB0eXBlIHN1bW1hcmllcy5cbiAgdHlwZXMuZm9yRWFjaCgoe3N1bW1hcnksIG1ldGFkYXRhfSkgPT4ge1xuICAgIHRvSnNvblNlcmlhbGl6ZXIuYWRkU3VtbWFyeShcbiAgICAgICAge3N5bWJvbDogc3VtbWFyeS50eXBlLnJlZmVyZW5jZSwgbWV0YWRhdGE6IHVuZGVmaW5lZCwgdHlwZTogc3VtbWFyeX0pO1xuICB9KTtcbiAgY29uc3Qge2pzb24sIGV4cG9ydEFzfSA9IHRvSnNvblNlcmlhbGl6ZXIuc2VyaWFsaXplKGNyZWF0ZUV4dGVybmFsU3ltYm9sUmVleHBvcnRzKTtcbiAgaWYgKGZvckppdEN0eCkge1xuICAgIGNvbnN0IGZvckppdFNlcmlhbGl6ZXIgPSBuZXcgRm9ySml0U2VyaWFsaXplcihmb3JKaXRDdHgsIHN5bWJvbFJlc29sdmVyLCBzdW1tYXJ5UmVzb2x2ZXIpO1xuICAgIHR5cGVzLmZvckVhY2goKHtzdW1tYXJ5LCBtZXRhZGF0YX0pID0+IHtcbiAgICAgIGZvckppdFNlcmlhbGl6ZXIuYWRkU291cmNlVHlwZShzdW1tYXJ5LCBtZXRhZGF0YSk7XG4gICAgfSk7XG4gICAgdG9Kc29uU2VyaWFsaXplci51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLmZvckVhY2goKHN1bW1hcnkpID0+IHtcbiAgICAgIGlmIChzdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShzdW1tYXJ5LnN5bWJvbC5maWxlUGF0aCkgJiYgc3VtbWFyeS50eXBlKSB7XG4gICAgICAgIGZvckppdFNlcmlhbGl6ZXIuYWRkTGliVHlwZShzdW1tYXJ5LnR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvckppdFNlcmlhbGl6ZXIuc2VyaWFsaXplKGV4cG9ydEFzKTtcbiAgfVxuICByZXR1cm4ge2pzb24sIGV4cG9ydEFzfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplU3VtbWFyaWVzKFxuICAgIHN5bWJvbENhY2hlOiBTdGF0aWNTeW1ib2xDYWNoZSwgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPixcbiAgICBsaWJyYXJ5RmlsZU5hbWU6IHN0cmluZywganNvbjogc3RyaW5nKToge1xuICBtb2R1bGVOYW1lOiBzdHJpbmd8bnVsbCxcbiAgc3VtbWFyaWVzOiBTdW1tYXJ5PFN0YXRpY1N5bWJvbD5bXSxcbiAgaW1wb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgaW1wb3J0QXM6IFN0YXRpY1N5bWJvbH1bXVxufSB7XG4gIGNvbnN0IGRlc2VyaWFsaXplciA9IG5ldyBGcm9tSnNvbkRlc2VyaWFsaXplcihzeW1ib2xDYWNoZSwgc3VtbWFyeVJlc29sdmVyKTtcbiAgcmV0dXJuIGRlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShsaWJyYXJ5RmlsZU5hbWUsIGpzb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ySml0U3R1YihvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIHJlZmVyZW5jZTogU3RhdGljU3ltYm9sKSB7XG4gIHJldHVybiBjcmVhdGVTdW1tYXJ5Rm9ySml0RnVuY3Rpb24ob3V0cHV0Q3R4LCByZWZlcmVuY2UsIG8uTlVMTF9FWFBSKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VtbWFyeUZvckppdEZ1bmN0aW9uKFxuICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgcmVmZXJlbmNlOiBTdGF0aWNTeW1ib2wsIHZhbHVlOiBvLkV4cHJlc3Npb24pIHtcbiAgY29uc3QgZm5OYW1lID0gc3VtbWFyeUZvckppdE5hbWUocmVmZXJlbmNlLm5hbWUpO1xuICBvdXRwdXRDdHguc3RhdGVtZW50cy5wdXNoKFxuICAgICAgby5mbihbXSwgW25ldyBvLlJldHVyblN0YXRlbWVudCh2YWx1ZSldLCBuZXcgby5BcnJheVR5cGUoby5EWU5BTUlDX1RZUEUpKS50b0RlY2xTdG10KGZuTmFtZSwgW1xuICAgICAgICBvLlN0bXRNb2RpZmllci5GaW5hbCwgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRcbiAgICAgIF0pKTtcbn1cblxuY29uc3QgZW51bSBTZXJpYWxpemF0aW9uRmxhZ3Mge1xuICBOb25lID0gMCxcbiAgUmVzb2x2ZVZhbHVlID0gMSxcbn1cblxuY2xhc3MgVG9Kc29uU2VyaWFsaXplciBleHRlbmRzIFZhbHVlVHJhbnNmb3JtZXIge1xuICAvLyBOb3RlOiBUaGlzIG9ubHkgY29udGFpbnMgc3ltYm9scyB3aXRob3V0IG1lbWJlcnMuXG4gIHByaXZhdGUgc3ltYm9sczogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgcHJpdmF0ZSBpbmRleEJ5U3ltYm9sID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIG51bWJlcj4oKTtcbiAgcHJpdmF0ZSByZWV4cG9ydGVkQnkgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sPigpO1xuICAvLyBUaGlzIG5vdyBjb250YWlucyBhIGBfX3N5bWJvbDogbnVtYmVyYCBpbiB0aGUgcGxhY2Ugb2ZcbiAgLy8gU3RhdGljU3ltYm9scywgYnV0IG90aGVyd2lzZSBoYXMgdGhlIHNhbWUgc2hhcGUgYXMgdGhlIG9yaWdpbmFsIG9iamVjdHMuXG4gIHByaXZhdGUgcHJvY2Vzc2VkU3VtbWFyeUJ5U3ltYm9sID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIGFueT4oKTtcbiAgcHJpdmF0ZSBwcm9jZXNzZWRTdW1tYXJpZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgbW9kdWxlTmFtZTogc3RyaW5nfG51bGw7XG5cbiAgdW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbCA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBTdW1tYXJ5PFN0YXRpY1N5bWJvbD4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPiwgcHJpdmF0ZSBzcmNGaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZHVsZU5hbWUgPSBzeW1ib2xSZXNvbHZlci5nZXRLbm93bk1vZHVsZU5hbWUoc3JjRmlsZU5hbWUpO1xuICB9XG5cbiAgYWRkU3VtbWFyeShzdW1tYXJ5OiBTdW1tYXJ5PFN0YXRpY1N5bWJvbD4pIHtcbiAgICBsZXQgdW5wcm9jZXNzZWRTdW1tYXJ5ID0gdGhpcy51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLmdldChzdW1tYXJ5LnN5bWJvbCk7XG4gICAgbGV0IHByb2Nlc3NlZFN1bW1hcnkgPSB0aGlzLnByb2Nlc3NlZFN1bW1hcnlCeVN5bWJvbC5nZXQoc3VtbWFyeS5zeW1ib2wpO1xuICAgIGlmICghdW5wcm9jZXNzZWRTdW1tYXJ5KSB7XG4gICAgICB1bnByb2Nlc3NlZFN1bW1hcnkgPSB7c3ltYm9sOiBzdW1tYXJ5LnN5bWJvbCwgbWV0YWRhdGE6IHVuZGVmaW5lZH07XG4gICAgICB0aGlzLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuc2V0KHN1bW1hcnkuc3ltYm9sLCB1bnByb2Nlc3NlZFN1bW1hcnkpO1xuICAgICAgcHJvY2Vzc2VkU3VtbWFyeSA9IHtzeW1ib2w6IHRoaXMucHJvY2Vzc1ZhbHVlKHN1bW1hcnkuc3ltYm9sLCBTZXJpYWxpemF0aW9uRmxhZ3MuTm9uZSl9O1xuICAgICAgdGhpcy5wcm9jZXNzZWRTdW1tYXJpZXMucHVzaChwcm9jZXNzZWRTdW1tYXJ5KTtcbiAgICAgIHRoaXMucHJvY2Vzc2VkU3VtbWFyeUJ5U3ltYm9sLnNldChzdW1tYXJ5LnN5bWJvbCwgcHJvY2Vzc2VkU3VtbWFyeSk7XG4gICAgfVxuICAgIGlmICghdW5wcm9jZXNzZWRTdW1tYXJ5Lm1ldGFkYXRhICYmIHN1bW1hcnkubWV0YWRhdGEpIHtcbiAgICAgIGxldCBtZXRhZGF0YSA9IHN1bW1hcnkubWV0YWRhdGEgfHwge307XG4gICAgICBpZiAobWV0YWRhdGEuX19zeW1ib2xpYyA9PT0gJ2NsYXNzJykge1xuICAgICAgICAvLyBGb3IgY2xhc3Nlcywgd2Uga2VlcCBldmVyeXRoaW5nIGV4Y2VwdCB0aGVpciBjbGFzcyBkZWNvcmF0b3JzLlxuICAgICAgICAvLyBXZSBuZWVkIHRvIGtlZXAgZS5nLiB0aGUgY3RvciBhcmdzLCBtZXRob2QgbmFtZXMsIG1ldGhvZCBkZWNvcmF0b3JzXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGNsYXNzIGNhbiBiZSBleHRlbmRlZCBpbiBhbm90aGVyIGNvbXBpbGF0aW9uIHVuaXQuXG4gICAgICAgIC8vIFdlIGRvbid0IGtlZXAgdGhlIGNsYXNzIGRlY29yYXRvcnMgYXNcbiAgICAgICAgLy8gMSkgdGhleSByZWZlciB0byBkYXRhXG4gICAgICAgIC8vICAgdGhhdCBzaG91bGQgbm90IGNhdXNlIGEgcmVidWlsZCBvZiBkb3duc3RyZWFtIGNvbXBpbGF0aW9uIHVuaXRzXG4gICAgICAgIC8vICAgKGUuZy4gaW5saW5lIHRlbXBsYXRlcyBvZiBAQ29tcG9uZW50LCBvciBATmdNb2R1bGUuZGVjbGFyYXRpb25zKVxuICAgICAgICAvLyAyKSB0aGVpciBkYXRhIGlzIGFscmVhZHkgY2FwdHVyZWQgaW4gVHlwZVN1bW1hcmllcywgZS5nLiBEaXJlY3RpdmVTdW1tYXJ5LlxuICAgICAgICBjb25zdCBjbG9uZToge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMobWV0YWRhdGEpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKHByb3BOYW1lICE9PSAnZGVjb3JhdG9ycycpIHtcbiAgICAgICAgICAgIGNsb25lW3Byb3BOYW1lXSA9IG1ldGFkYXRhW3Byb3BOYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZXRhZGF0YSA9IGNsb25lO1xuICAgICAgfSBlbHNlIGlmIChpc0NhbGwobWV0YWRhdGEpKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbkNhbGwobWV0YWRhdGEpICYmICFpc01ldGhvZENhbGxPblZhcmlhYmxlKG1ldGFkYXRhKSkge1xuICAgICAgICAgIC8vIERvbid0IHN0b3JlIGNvbXBsZXggY2FsbHMgYXMgd2Ugd29uJ3QgYmUgYWJsZSB0byBzaW1wbGlmeSB0aGVtIGFueXdheXMgbGF0ZXIgb24uXG4gICAgICAgICAgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBfX3N5bWJvbGljOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvbXBsZXggZnVuY3Rpb24gY2FsbHMgYXJlIG5vdCBzdXBwb3J0ZWQuJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBOb3RlOiBXZSBuZWVkIHRvIGtlZXAgc3RvcmluZyBjdG9yIGNhbGxzIGZvciBlLmcuXG4gICAgICAvLyBgZXhwb3J0IGNvbnN0IHggPSBuZXcgSW5qZWN0aW9uVG9rZW4oLi4uKWBcbiAgICAgIHVucHJvY2Vzc2VkU3VtbWFyeS5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgcHJvY2Vzc2VkU3VtbWFyeS5tZXRhZGF0YSA9IHRoaXMucHJvY2Vzc1ZhbHVlKG1ldGFkYXRhLCBTZXJpYWxpemF0aW9uRmxhZ3MuUmVzb2x2ZVZhbHVlKTtcbiAgICAgIGlmIChtZXRhZGF0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCAmJlxuICAgICAgICAgIHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUobWV0YWRhdGEuZmlsZVBhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uU3ltYm9sID0gdGhpcy5zeW1ib2xzW3RoaXMuaW5kZXhCeVN5bWJvbC5nZXQobWV0YWRhdGEpIV07XG4gICAgICAgIGlmICghaXNMb3dlcmVkU3ltYm9sKGRlY2xhcmF0aW9uU3ltYm9sLm5hbWUpKSB7XG4gICAgICAgICAgLy8gTm90ZTogc3ltYm9scyB0aGF0IHdlcmUgaW50cm9kdWNlZCBkdXJpbmcgY29kZWdlbiBpbiB0aGUgdXNlciBmaWxlIGNhbiBoYXZlIGEgcmVleHBvcnRcbiAgICAgICAgICAvLyBpZiBhIHVzZXIgdXNlZCBgZXhwb3J0ICpgLiBIb3dldmVyLCB3ZSBjYW4ndCByZWx5IG9uIHRoaXMgYXMgdHNpY2tsZSB3aWxsIGNoYW5nZVxuICAgICAgICAgIC8vIGBleHBvcnQgKmAgaW50byBuYW1lZCBleHBvcnRzLCB1c2luZyBvbmx5IHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSB0eXBlY2hlY2tlci5cbiAgICAgICAgICAvLyBBcyB3ZSBpbnRyb2R1Y2UgdGhlIG5ldyBzeW1ib2xzIGFmdGVyIHR5cGVjaGVjaywgVHNpY2tsZSBkb2VzIG5vdCBrbm93IGFib3V0IHRoZW0sXG4gICAgICAgICAgLy8gYW5kIG9taXRzIHRoZW0gd2hlbiBleHBhbmRpbmcgYGV4cG9ydCAqYC5cbiAgICAgICAgICAvLyBTbyB3ZSBoYXZlIHRvIGtlZXAgcmVleHBvcnRpbmcgdGhlc2Ugc3ltYm9scyBtYW51YWxseSB2aWEgLm5nZmFjdG9yeSBmaWxlcy5cbiAgICAgICAgICB0aGlzLnJlZXhwb3J0ZWRCeS5zZXQoZGVjbGFyYXRpb25TeW1ib2wsIHN1bW1hcnkuc3ltYm9sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXVucHJvY2Vzc2VkU3VtbWFyeS50eXBlICYmIHN1bW1hcnkudHlwZSkge1xuICAgICAgdW5wcm9jZXNzZWRTdW1tYXJ5LnR5cGUgPSBzdW1tYXJ5LnR5cGU7XG4gICAgICAvLyBOb3RlOiBXZSBkb24ndCBhZGQgdGhlIHN1bW1hcmllcyBvZiBhbGwgcmVmZXJlbmNlZCBzeW1ib2xzIGFzIGZvciB0aGUgUmVzb2x2ZWRTeW1ib2xzLFxuICAgICAgLy8gYXMgdGhlIHR5cGUgc3VtbWFyaWVzIGFscmVhZHkgY29udGFpbiB0aGUgdHJhbnNpdGl2ZSBkYXRhIHRoYXQgdGhleSByZXF1aXJlXG4gICAgICAvLyAoaW4gYSBtaW5pbWFsIHdheSkuXG4gICAgICBwcm9jZXNzZWRTdW1tYXJ5LnR5cGUgPSB0aGlzLnByb2Nlc3NWYWx1ZShzdW1tYXJ5LnR5cGUsIFNlcmlhbGl6YXRpb25GbGFncy5Ob25lKTtcbiAgICAgIC8vIGV4Y2VwdCBmb3IgcmVleHBvcnRlZCBkaXJlY3RpdmVzIC8gcGlwZXMsIHNvIHdlIG5lZWQgdG8gc3RvcmVcbiAgICAgIC8vIHRoZWlyIHN1bW1hcmllcyBleHBsaWNpdGx5LlxuICAgICAgaWYgKHN1bW1hcnkudHlwZS5zdW1tYXJ5S2luZCA9PT0gQ29tcGlsZVN1bW1hcnlLaW5kLk5nTW9kdWxlKSB7XG4gICAgICAgIGNvbnN0IG5nTW9kdWxlU3VtbWFyeSA9IDxDb21waWxlTmdNb2R1bGVTdW1tYXJ5PnN1bW1hcnkudHlwZTtcbiAgICAgICAgbmdNb2R1bGVTdW1tYXJ5LmV4cG9ydGVkRGlyZWN0aXZlcy5jb25jYXQobmdNb2R1bGVTdW1tYXJ5LmV4cG9ydGVkUGlwZXMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ltYm9sOiBTdGF0aWNTeW1ib2wgPSBpZC5yZWZlcmVuY2U7XG4gICAgICAgICAgaWYgKHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUoc3ltYm9sLmZpbGVQYXRoKSAmJlxuICAgICAgICAgICAgICAhdGhpcy51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLmhhcyhzeW1ib2wpKSB7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5zdW1tYXJ5UmVzb2x2ZXIucmVzb2x2ZVN1bW1hcnkoc3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkU3VtbWFyeShzdW1tYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY3JlYXRlRXh0ZXJuYWxTeW1ib2xSZWV4cG9ydHMgV2hldGhlciBleHRlcm5hbCBzdGF0aWMgc3ltYm9scyBzaG91bGQgYmUgcmUtZXhwb3J0ZWQuXG4gICAqIFRoaXMgY2FuIGJlIGVuYWJsZWQgaWYgZXh0ZXJuYWwgc3ltYm9scyBzaG91bGQgYmUgcmUtZXhwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbW9kdWxlIGluXG4gICAqIG9yZGVyIHRvIGF2b2lkIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBtb2R1bGUgZGVwZW5kZW5jaWVzIHdoaWNoIGNhbiBicmVhayBzdHJpY3QgZGVwZW5kZW5jeVxuICAgKiBlbmZvcmNlbWVudHMgKGFzIGluIEdvb2dsZTMpLiBSZWFkIG1vcmUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjU2NDRcbiAgICovXG4gIHNlcmlhbGl6ZShjcmVhdGVFeHRlcm5hbFN5bWJvbFJlZXhwb3J0czogYm9vbGVhbik6XG4gICAgICB7anNvbjogc3RyaW5nLCBleHBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBleHBvcnRBczogc3RyaW5nfVtdfSB7XG4gICAgY29uc3QgZXhwb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgZXhwb3J0QXM6IHN0cmluZ31bXSA9IFtdO1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtb2R1bGVOYW1lOiB0aGlzLm1vZHVsZU5hbWUsXG4gICAgICBzdW1tYXJpZXM6IHRoaXMucHJvY2Vzc2VkU3VtbWFyaWVzLFxuICAgICAgc3ltYm9sczogdGhpcy5zeW1ib2xzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4ge1xuICAgICAgICBzeW1ib2wuYXNzZXJ0Tm9NZW1iZXJzKCk7XG4gICAgICAgIGxldCBpbXBvcnRBczogc3RyaW5nfG51bWJlciA9IHVuZGVmaW5lZCE7XG4gICAgICAgIGlmICh0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKHN5bWJvbC5maWxlUGF0aCkpIHtcbiAgICAgICAgICBjb25zdCByZWV4cG9ydFN5bWJvbCA9IHRoaXMucmVleHBvcnRlZEJ5LmdldChzeW1ib2wpO1xuICAgICAgICAgIGlmIChyZWV4cG9ydFN5bWJvbCkge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSB0aGUgZ2l2ZW4gZXh0ZXJuYWwgc3RhdGljIHN5bWJvbCBpcyBhbHJlYWR5IG1hbnVhbGx5IGV4cG9ydGVkIGJ5IHRoZVxuICAgICAgICAgICAgLy8gdXNlciwgd2UganVzdCBwcm94eSB0aGUgZXh0ZXJuYWwgc3RhdGljIHN5bWJvbCByZWZlcmVuY2UgdG8gdGhlIG1hbnVhbCBleHBvcnQuXG4gICAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgQU9UIGNvbXBpbGVyIGltcG9ydHMgdGhlIGV4dGVybmFsIHN5bWJvbCB0aHJvdWdoIHRoZVxuICAgICAgICAgICAgLy8gdXNlciBleHBvcnQgYW5kIGRvZXMgbm90IGludHJvZHVjZSBhbm90aGVyIGRlcGVuZGVuY3kgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgICAgICAgICAgIGltcG9ydEFzID0gdGhpcy5pbmRleEJ5U3ltYm9sLmdldChyZWV4cG9ydFN5bWJvbCkhO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXh0ZXJuYWxTeW1ib2xSZWV4cG9ydHMpIHtcbiAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSwgdGhlIGdpdmVuIGV4dGVybmFsIHN0YXRpYyBzeW1ib2wgaXMgKm5vdCogbWFudWFsbHkgZXhwb3J0ZWQgYnlcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyLCBhbmQgd2UgbWFudWFsbHkgY3JlYXRlIGEgcmUtZXhwb3J0IGluIHRoZSBmYWN0b3J5IGZpbGUgc28gdGhhdCB3ZVxuICAgICAgICAgICAgLy8gZG9uJ3QgaW50cm9kdWNlIGFub3RoZXIgbW9kdWxlIGRlcGVuZGVuY3kuIFRoaXMgaXMgdXNlZnVsIHdoZW4gcnVubmluZyB3aXRoaW5cbiAgICAgICAgICAgIC8vIEJhemVsIHNvIHRoYXQgdGhlIEFPVCBjb21waWxlciBkb2VzIG5vdCBpbnRyb2R1Y2UgYW55IG1vZHVsZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgIC8vIHdoaWNoIGNhbiBicmVhayB0aGUgc3RyaWN0IGRlcGVuZGVuY3kgZW5mb3JjZW1lbnQuIChlLmcuIGFzIGluIEdvb2dsZTMpXG4gICAgICAgICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNTY0NFxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5nZXQoc3ltYm9sKTtcbiAgICAgICAgICAgIGlmICghc3VtbWFyeSB8fCAhc3VtbWFyeS5tZXRhZGF0YSB8fCBzdW1tYXJ5Lm1ldGFkYXRhLl9fc3ltYm9saWMgIT09ICdpbnRlcmZhY2UnKSB7XG4gICAgICAgICAgICAgIGltcG9ydEFzID0gYCR7c3ltYm9sLm5hbWV9XyR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgZXhwb3J0QXMucHVzaCh7c3ltYm9sLCBleHBvcnRBczogaW1wb3J0QXN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfX3N5bWJvbDogaW5kZXgsXG4gICAgICAgICAgbmFtZTogc3ltYm9sLm5hbWUsXG4gICAgICAgICAgZmlsZVBhdGg6IHRoaXMuc3VtbWFyeVJlc29sdmVyLnRvU3VtbWFyeUZpbGVOYW1lKHN5bWJvbC5maWxlUGF0aCwgdGhpcy5zcmNGaWxlTmFtZSksXG4gICAgICAgICAgaW1wb3J0QXM6IGltcG9ydEFzXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiB7anNvbiwgZXhwb3J0QXN9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzVmFsdWUodmFsdWU6IGFueSwgZmxhZ3M6IFNlcmlhbGl6YXRpb25GbGFncyk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0VmFsdWUodmFsdWUsIHRoaXMsIGZsYWdzKTtcbiAgfVxuXG4gIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIGxldCBiYXNlU3ltYm9sID0gdGhpcy5zeW1ib2xSZXNvbHZlci5nZXRTdGF0aWNTeW1ib2wodmFsdWUuZmlsZVBhdGgsIHZhbHVlLm5hbWUpO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnZpc2l0U3RhdGljU3ltYm9sKGJhc2VTeW1ib2wsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHtfX3N5bWJvbDogaW5kZXgsIG1lbWJlcnM6IHZhbHVlLm1lbWJlcnN9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHJpcCBsaW5lIGFuZCBjaGFyYWN0ZXIgbnVtYmVycyBmcm9tIG5nc3VtbWFyaWVzLlxuICAgKiBFbWl0dGluZyB0aGVtIGNhdXNlcyB3aGl0ZSBzcGFjZXMgY2hhbmdlcyB0byByZXRyaWdnZXIgdXBzdHJlYW1cbiAgICogcmVjb21waWxhdGlvbnMgaW4gYmF6ZWwuXG4gICAqIFRPRE86IGZpbmQgb3V0IGEgd2F5IHRvIGhhdmUgbGluZSBhbmQgY2hhcmFjdGVyIG51bWJlcnMgaW4gZXJyb3JzIHdpdGhvdXRcbiAgICogZXhjZXNzaXZlIHJlY29tcGlsYXRpb24gaW4gYmF6ZWwuXG4gICAqL1xuICB2aXNpdFN0cmluZ01hcChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmIChtYXBbJ19fc3ltYm9saWMnXSA9PT0gJ3Jlc29sdmVkJykge1xuICAgICAgcmV0dXJuIHZpc2l0VmFsdWUobWFwWydzeW1ib2wnXSwgdGhpcywgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChtYXBbJ19fc3ltYm9saWMnXSA9PT0gJ2Vycm9yJykge1xuICAgICAgZGVsZXRlIG1hcFsnbGluZSddO1xuICAgICAgZGVsZXRlIG1hcFsnY2hhcmFjdGVyJ107XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdFN0cmluZ01hcChtYXAsIGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgb3B0aW9ucy5yZXNvbHZlVmFsdWUgaXMgdHJ1ZSwgYW5kIHRoZSBzdW1tYXJ5IGZvciB0aGUgc3ltYm9sXG4gICAqIHJlc29sdmVkIHRvIGEgdHlwZSBvciBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXG4gICAqL1xuICBwcml2YXRlIHZpc2l0U3RhdGljU3ltYm9sKGJhc2VTeW1ib2w6IFN0YXRpY1N5bWJvbCwgZmxhZ3M6IFNlcmlhbGl6YXRpb25GbGFncyk6IG51bWJlciB7XG4gICAgbGV0IGluZGV4OiBudW1iZXJ8dW5kZWZpbmVkfG51bGwgPSB0aGlzLmluZGV4QnlTeW1ib2wuZ2V0KGJhc2VTeW1ib2wpO1xuICAgIGxldCBzdW1tYXJ5OiBTdW1tYXJ5PFN0YXRpY1N5bWJvbD58bnVsbCA9IG51bGw7XG4gICAgaWYgKGZsYWdzICYgU2VyaWFsaXphdGlvbkZsYWdzLlJlc29sdmVWYWx1ZSAmJlxuICAgICAgICB0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKGJhc2VTeW1ib2wuZmlsZVBhdGgpKSB7XG4gICAgICBpZiAodGhpcy51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLmhhcyhiYXNlU3ltYm9sKSkge1xuICAgICAgICAvLyB0aGUgc3VtbWFyeSBmb3IgdGhpcyBzeW1ib2wgd2FzIGFscmVhZHkgYWRkZWRcbiAgICAgICAgLy8gLT4gbm90aGluZyB0byBkby5cbiAgICAgICAgcmV0dXJuIGluZGV4ITtcbiAgICAgIH1cbiAgICAgIHN1bW1hcnkgPSB0aGlzLmxvYWRTdW1tYXJ5KGJhc2VTeW1ib2wpO1xuICAgICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5tZXRhZGF0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICAvLyBUaGUgc3VtbWFyeSBpcyBhIHJlZXhwb3J0XG4gICAgICAgIGluZGV4ID0gdGhpcy52aXNpdFN0YXRpY1N5bWJvbChzdW1tYXJ5Lm1ldGFkYXRhLCBmbGFncyk7XG4gICAgICAgIC8vIHJlc2V0IHRoZSBzdW1tYXJ5IGFzIGl0IGlzIGp1c3QgYSByZWV4cG9ydCwgc28gd2UgZG9uJ3Qgd2FudCB0byBzdG9yZSBpdC5cbiAgICAgICAgc3VtbWFyeSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAvLyBOb3RlOiA9PSBvbiBwdXJwb3NlIHRvIGNvbXBhcmUgd2l0aCB1bmRlZmluZWQhXG4gICAgICAvLyBObyBzdW1tYXJ5IGFuZCB0aGUgc3ltYm9sIGlzIGFscmVhZHkgYWRkZWQgLT4gbm90aGluZyB0byBkby5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgLy8gTm90ZTogPT0gb24gcHVycG9zZSB0byBjb21wYXJlIHdpdGggdW5kZWZpbmVkIVxuICAgIGlmIChpbmRleCA9PSBudWxsKSB7XG4gICAgICBpbmRleCA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XG4gICAgICB0aGlzLnN5bWJvbHMucHVzaChiYXNlU3ltYm9sKTtcbiAgICB9XG4gICAgdGhpcy5pbmRleEJ5U3ltYm9sLnNldChiYXNlU3ltYm9sLCBpbmRleCk7XG4gICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgIHRoaXMuYWRkU3VtbWFyeShzdW1tYXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU3VtbWFyeShzeW1ib2w6IFN0YXRpY1N5bWJvbCk6IFN1bW1hcnk8U3RhdGljU3ltYm9sPnxudWxsIHtcbiAgICBsZXQgc3VtbWFyeSA9IHRoaXMuc3VtbWFyeVJlc29sdmVyLnJlc29sdmVTdW1tYXJ5KHN5bWJvbCk7XG4gICAgaWYgKCFzdW1tYXJ5KSB7XG4gICAgICAvLyBzb21lIHN5bWJvbHMgbWlnaHQgb3JpZ2luYXRlIGZyb20gYSBwbGFpbiB0eXBlc2NyaXB0IGxpYnJhcnlcbiAgICAgIC8vIHRoYXQganVzdCBleHBvcnRlZCAuZC50cyBhbmQgLm1ldGFkYXRhLmpzb24gZmlsZXMsIGkuZS4gd2hlcmUgbm8gc3VtbWFyeVxuICAgICAgLy8gZmlsZXMgd2VyZSBjcmVhdGVkLlxuICAgICAgY29uc3QgcmVzb2x2ZWRTeW1ib2wgPSB0aGlzLnN5bWJvbFJlc29sdmVyLnJlc29sdmVTeW1ib2woc3ltYm9sKTtcbiAgICAgIGlmIChyZXNvbHZlZFN5bWJvbCkge1xuICAgICAgICBzdW1tYXJ5ID0ge3N5bWJvbDogcmVzb2x2ZWRTeW1ib2wuc3ltYm9sLCBtZXRhZGF0YTogcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGF9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyeTtcbiAgfVxufVxuXG5jbGFzcyBGb3JKaXRTZXJpYWxpemVyIHtcbiAgcHJpdmF0ZSBkYXRhOiBBcnJheTx7XG4gICAgc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5LFxuICAgIG1ldGFkYXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YXxDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF8Q29tcGlsZVBpcGVNZXRhZGF0YXxcbiAgICBDb21waWxlVHlwZU1ldGFkYXRhfG51bGwsXG4gICAgaXNMaWJyYXJ5OiBib29sZWFuXG4gIH0+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgcHJpdmF0ZSBzeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4pIHt9XG5cbiAgYWRkU291cmNlVHlwZShcbiAgICAgIHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSxcbiAgICAgIG1ldGFkYXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YXxDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF8Q29tcGlsZVBpcGVNZXRhZGF0YXxcbiAgICAgIENvbXBpbGVUeXBlTWV0YWRhdGEpIHtcbiAgICB0aGlzLmRhdGEucHVzaCh7c3VtbWFyeSwgbWV0YWRhdGEsIGlzTGlicmFyeTogZmFsc2V9KTtcbiAgfVxuXG4gIGFkZExpYlR5cGUoc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5KSB7XG4gICAgdGhpcy5kYXRhLnB1c2goe3N1bW1hcnksIG1ldGFkYXRhOiBudWxsLCBpc0xpYnJhcnk6IHRydWV9KTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShleHBvcnRBc0Fycjoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBleHBvcnRBczogc3RyaW5nfVtdKTogdm9pZCB7XG4gICAgY29uc3QgZXhwb3J0QXNCeVN5bWJvbCA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB7c3ltYm9sLCBleHBvcnRBc30gb2YgZXhwb3J0QXNBcnIpIHtcbiAgICAgIGV4cG9ydEFzQnlTeW1ib2wuc2V0KHN5bWJvbCwgZXhwb3J0QXMpO1xuICAgIH1cbiAgICBjb25zdCBuZ01vZHVsZVN5bWJvbHMgPSBuZXcgU2V0PFN0YXRpY1N5bWJvbD4oKTtcblxuICAgIGZvciAoY29uc3Qge3N1bW1hcnksIG1ldGFkYXRhLCBpc0xpYnJhcnl9IG9mIHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHN1bW1hcnkuc3VtbWFyeUtpbmQgPT09IENvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSkge1xuICAgICAgICAvLyBjb2xsZWN0IHRoZSBzeW1ib2xzIHRoYXQgcmVmZXIgdG8gTmdNb2R1bGUgY2xhc3Nlcy5cbiAgICAgICAgLy8gTm90ZTogd2UgY2FuJ3QganVzdCByZWx5IG9uIGBzdW1tYXJ5LnR5cGUuc3VtbWFyeUtpbmRgIHRvIGRldGVybWluZSB0aGlzIGFzXG4gICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgc3VtbWFyaWVzIG9mIGFsbCByZWZlcmVuY2VkIHN5bWJvbHMgd2hlbiB3ZSBzZXJpYWxpemUgdHlwZSBzdW1tYXJpZXMuXG4gICAgICAgIC8vIFNlZSBzZXJpYWxpemVTdW1tYXJpZXMgZm9yIGRldGFpbHMuXG4gICAgICAgIG5nTW9kdWxlU3ltYm9scy5hZGQoc3VtbWFyeS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IG1vZFN1bW1hcnkgPSA8Q29tcGlsZU5nTW9kdWxlU3VtbWFyeT5zdW1tYXJ5O1xuICAgICAgICBmb3IgKGNvbnN0IG1vZCBvZiBtb2RTdW1tYXJ5Lm1vZHVsZXMpIHtcbiAgICAgICAgICBuZ01vZHVsZVN5bWJvbHMuYWRkKG1vZC5yZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzTGlicmFyeSkge1xuICAgICAgICBjb25zdCBmbk5hbWUgPSBzdW1tYXJ5Rm9ySml0TmFtZShzdW1tYXJ5LnR5cGUucmVmZXJlbmNlLm5hbWUpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5Rm9ySml0RnVuY3Rpb24oXG4gICAgICAgICAgICB0aGlzLm91dHB1dEN0eCwgc3VtbWFyeS50eXBlLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplU3VtbWFyeVdpdGhEZXBzKHN1bW1hcnksIG1ldGFkYXRhISkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5nTW9kdWxlU3ltYm9scy5mb3JFYWNoKChuZ01vZHVsZVN5bWJvbCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUobmdNb2R1bGVTeW1ib2wuZmlsZVBhdGgpKSB7XG4gICAgICAgIGxldCBleHBvcnRBcyA9IGV4cG9ydEFzQnlTeW1ib2wuZ2V0KG5nTW9kdWxlU3ltYm9sKSB8fCBuZ01vZHVsZVN5bWJvbC5uYW1lO1xuICAgICAgICBjb25zdCBqaXRFeHBvcnRBc05hbWUgPSBzdW1tYXJ5Rm9ySml0TmFtZShleHBvcnRBcyk7XG4gICAgICAgIHRoaXMub3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChvLnZhcmlhYmxlKGppdEV4cG9ydEFzTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0KHRoaXMuc2VyaWFsaXplU3VtbWFyeVJlZihuZ01vZHVsZVN5bWJvbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvRGVjbFN0bXQobnVsbCwgW28uU3RtdE1vZGlmaWVyLkV4cG9ydGVkXSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVTdW1tYXJ5V2l0aERlcHMoXG4gICAgICBzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnksXG4gICAgICBtZXRhZGF0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhfENvbXBpbGVQaXBlTWV0YWRhdGF8XG4gICAgICBDb21waWxlVHlwZU1ldGFkYXRhKTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBleHByZXNzaW9uczogby5FeHByZXNzaW9uW10gPSBbdGhpcy5zZXJpYWxpemVTdW1tYXJ5KHN1bW1hcnkpXTtcbiAgICBsZXQgcHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW107XG4gICAgaWYgKG1ldGFkYXRhIGluc3RhbmNlb2YgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEpIHtcbiAgICAgIGV4cHJlc3Npb25zLnB1c2goLi4uXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXJlY3RpdmVzIC8gcGlwZXMsIHdlIG9ubHkgYWRkIHRoZSBkZWNsYXJlZCBvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgcmVseSBvbiB0cmFuc2l0aXZlbHkgaW1wb3J0aW5nIE5nTW9kdWxlcyB0byBnZXQgdGhlIHRyYW5zaXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VtbWFyaWVzLlxuICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5kZWNsYXJlZERpcmVjdGl2ZXMuY29uY2F0KG1ldGFkYXRhLmRlY2xhcmVkUGlwZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHR5cGUgPT4gdHlwZS5yZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgbW9kdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gYWRkIHRoZSBzdW1tYXJpZXMgZm9yIG1vZHVsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gbGlicmFyaWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvayBhcyB3ZSBwcm9kdWNlIHJlZXhwb3J0cyBmb3IgYWxsIHRyYW5zaXRpdmUgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobWV0YWRhdGEudHJhbnNpdGl2ZU1vZHVsZS5tb2R1bGVzLm1hcCh0eXBlID0+IHR5cGUucmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihyZWYgPT4gcmVmICE9PSBtZXRhZGF0YS50eXBlLnJlZmVyZW5jZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZWYpID0+IHRoaXMuc2VyaWFsaXplU3VtbWFyeVJlZihyZWYpKSk7XG4gICAgICAvLyBOb3RlOiBXZSBkb24ndCB1c2UgYE5nTW9kdWxlU3VtbWFyeS5wcm92aWRlcnNgLCBhcyB0aGF0IG9uZSBpcyB0cmFuc2l0aXZlLFxuICAgICAgLy8gYW5kIHdlIGFscmVhZHkgaGF2ZSB0cmFuc2l0aXZlIG1vZHVsZXMuXG4gICAgICBwcm92aWRlcnMgPSBtZXRhZGF0YS5wcm92aWRlcnM7XG4gICAgfSBlbHNlIGlmIChzdW1tYXJ5LnN1bW1hcnlLaW5kID09PSBDb21waWxlU3VtbWFyeUtpbmQuRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCBkaXJTdW1tYXJ5ID0gPENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5PnN1bW1hcnk7XG4gICAgICBwcm92aWRlcnMgPSBkaXJTdW1tYXJ5LnByb3ZpZGVycy5jb25jYXQoZGlyU3VtbWFyeS52aWV3UHJvdmlkZXJzKTtcbiAgICB9XG4gICAgLy8gTm90ZTogV2UgY2FuJ3QganVzdCByZWZlciB0byB0aGUgYG5nc3VtbWFyeS50c2AgZmlsZXMgZm9yIGB1c2VDbGFzc2AgcHJvdmlkZXJzIChhcyB3ZSBkbyBmb3JcbiAgICAvLyBkZWNsYXJlZERpcmVjdGl2ZXMgLyBkZWNsYXJlZFBpcGVzKSwgYXMgd2UgYWxsb3dcbiAgICAvLyBwcm92aWRlcnMgd2l0aG91dCBjdG9yIGFyZ3VtZW50cyB0byBza2lwIHRoZSBgQEluamVjdGFibGVgIGRlY29yYXRvcixcbiAgICAvLyBpLmUuIHdlIGRpZG4ndCBnZW5lcmF0ZSAubmdzdW1tYXJ5LnRzIGZpbGVzIGZvciB0aGVzZS5cbiAgICBleHByZXNzaW9ucy5wdXNoKFxuICAgICAgICAuLi5wcm92aWRlcnMuZmlsdGVyKHByb3ZpZGVyID0+ICEhcHJvdmlkZXIudXNlQ2xhc3MpLm1hcChwcm92aWRlciA9PiB0aGlzLnNlcmlhbGl6ZVN1bW1hcnkoe1xuICAgICAgICAgIHN1bW1hcnlLaW5kOiBDb21waWxlU3VtbWFyeUtpbmQuSW5qZWN0YWJsZSxcbiAgICAgICAgICB0eXBlOiBwcm92aWRlci51c2VDbGFzc1xuICAgICAgICB9IGFzIENvbXBpbGVUeXBlU3VtbWFyeSkpKTtcbiAgICByZXR1cm4gby5saXRlcmFsQXJyKGV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplU3VtbWFyeVJlZih0eXBlU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBvLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGppdEltcG9ydGVkU3ltYm9sID0gdGhpcy5zeW1ib2xSZXNvbHZlci5nZXRTdGF0aWNTeW1ib2woXG4gICAgICAgIHN1bW1hcnlGb3JKaXRGaWxlTmFtZSh0eXBlU3ltYm9sLmZpbGVQYXRoKSwgc3VtbWFyeUZvckppdE5hbWUodHlwZVN5bWJvbC5uYW1lKSk7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0Q3R4LmltcG9ydEV4cHIoaml0SW1wb3J0ZWRTeW1ib2wpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVTdW1tYXJ5KGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBvdXRwdXRDdHggPSB0aGlzLm91dHB1dEN0eDtcblxuICAgIGNsYXNzIFRyYW5zZm9ybWVyIGltcGxlbWVudHMgVmFsdWVWaXNpdG9yIHtcbiAgICAgIHZpc2l0QXJyYXkoYXJyOiBhbnlbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIG8ubGl0ZXJhbEFycihhcnIubWFwKGVudHJ5ID0+IHZpc2l0VmFsdWUoZW50cnksIHRoaXMsIGNvbnRleHQpKSk7XG4gICAgICB9XG4gICAgICB2aXNpdFN0cmluZ01hcChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gbmV3IG8uTGl0ZXJhbE1hcEV4cHIoT2JqZWN0LmtleXMobWFwKS5tYXAoXG4gICAgICAgICAgICAoa2V5KSA9PiBuZXcgby5MaXRlcmFsTWFwRW50cnkoa2V5LCB2aXNpdFZhbHVlKG1hcFtrZXldLCB0aGlzLCBjb250ZXh0KSwgZmFsc2UpKSk7XG4gICAgICB9XG4gICAgICB2aXNpdFByaW1pdGl2ZSh2YWx1ZTogYW55LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gby5saXRlcmFsKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICAgICAgcmV0dXJuIG91dHB1dEN0eC5pbXBvcnRFeHByKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgU3RhdGU6IEVuY291bnRlcmVkIHZhbHVlICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRWYWx1ZShkYXRhLCBuZXcgVHJhbnNmb3JtZXIoKSwgbnVsbCk7XG4gIH1cbn1cblxuY2xhc3MgRnJvbUpzb25EZXNlcmlhbGl6ZXIgZXh0ZW5kcyBWYWx1ZVRyYW5zZm9ybWVyIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgc3ltYm9scyE6IFN0YXRpY1N5bWJvbFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzeW1ib2xDYWNoZTogU3RhdGljU3ltYm9sQ2FjaGUsXG4gICAgICBwcml2YXRlIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZGVzZXJpYWxpemUobGlicmFyeUZpbGVOYW1lOiBzdHJpbmcsIGpzb246IHN0cmluZyk6IHtcbiAgICBtb2R1bGVOYW1lOiBzdHJpbmd8bnVsbCxcbiAgICBzdW1tYXJpZXM6IFN1bW1hcnk8U3RhdGljU3ltYm9sPltdLFxuICAgIGltcG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGltcG9ydEFzOiBTdGF0aWNTeW1ib2x9W11cbiAgfSB7XG4gICAgY29uc3QgZGF0YToge21vZHVsZU5hbWU6IHN0cmluZ3xudWxsLCBzdW1tYXJpZXM6IGFueVtdLCBzeW1ib2xzOiBhbnlbXX0gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIGNvbnN0IGFsbEltcG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGltcG9ydEFzOiBTdGF0aWNTeW1ib2x9W10gPSBbXTtcbiAgICB0aGlzLnN5bWJvbHMgPSBkYXRhLnN5bWJvbHMubWFwKFxuICAgICAgICAoc2VyaWFsaXplZFN5bWJvbCkgPT4gdGhpcy5zeW1ib2xDYWNoZS5nZXQoXG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlSZXNvbHZlci5mcm9tU3VtbWFyeUZpbGVOYW1lKHNlcmlhbGl6ZWRTeW1ib2wuZmlsZVBhdGgsIGxpYnJhcnlGaWxlTmFtZSksXG4gICAgICAgICAgICBzZXJpYWxpemVkU3ltYm9sLm5hbWUpKTtcbiAgICBkYXRhLnN5bWJvbHMuZm9yRWFjaCgoc2VyaWFsaXplZFN5bWJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sc1tpbmRleF07XG4gICAgICBjb25zdCBpbXBvcnRBcyA9IHNlcmlhbGl6ZWRTeW1ib2wuaW1wb3J0QXM7XG4gICAgICBpZiAodHlwZW9mIGltcG9ydEFzID09PSAnbnVtYmVyJykge1xuICAgICAgICBhbGxJbXBvcnRBcy5wdXNoKHtzeW1ib2wsIGltcG9ydEFzOiB0aGlzLnN5bWJvbHNbaW1wb3J0QXNdfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbXBvcnRBcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWxsSW1wb3J0QXMucHVzaChcbiAgICAgICAgICAgIHtzeW1ib2wsIGltcG9ydEFzOiB0aGlzLnN5bWJvbENhY2hlLmdldChuZ2ZhY3RvcnlGaWxlUGF0aChsaWJyYXJ5RmlsZU5hbWUpLCBpbXBvcnRBcyl9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzdW1tYXJpZXMgPSB2aXNpdFZhbHVlKGRhdGEuc3VtbWFyaWVzLCB0aGlzLCBudWxsKSBhcyBTdW1tYXJ5PFN0YXRpY1N5bWJvbD5bXTtcbiAgICByZXR1cm4ge21vZHVsZU5hbWU6IGRhdGEubW9kdWxlTmFtZSwgc3VtbWFyaWVzLCBpbXBvcnRBczogYWxsSW1wb3J0QXN9O1xuICB9XG5cbiAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAoJ19fc3ltYm9sJyBpbiBtYXApIHtcbiAgICAgIGNvbnN0IGJhc2VTeW1ib2wgPSB0aGlzLnN5bWJvbHNbbWFwWydfX3N5bWJvbCddXTtcbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBtYXBbJ21lbWJlcnMnXTtcbiAgICAgIHJldHVybiBtZW1iZXJzLmxlbmd0aCA/IHRoaXMuc3ltYm9sQ2FjaGUuZ2V0KGJhc2VTeW1ib2wuZmlsZVBhdGgsIGJhc2VTeW1ib2wubmFtZSwgbWVtYmVycykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnZpc2l0U3RyaW5nTWFwKG1hcCwgY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ2FsbChtZXRhZGF0YTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBtZXRhZGF0YSAmJiBtZXRhZGF0YS5fX3N5bWJvbGljID09PSAnY2FsbCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb25DYWxsKG1ldGFkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzQ2FsbChtZXRhZGF0YSkgJiYgdW53cmFwUmVzb2x2ZWRNZXRhZGF0YShtZXRhZGF0YS5leHByZXNzaW9uKSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbDtcbn1cblxuZnVuY3Rpb24gaXNNZXRob2RDYWxsT25WYXJpYWJsZShtZXRhZGF0YTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0NhbGwobWV0YWRhdGEpICYmIG1ldGFkYXRhLmV4cHJlc3Npb24gJiYgbWV0YWRhdGEuZXhwcmVzc2lvbi5fX3N5bWJvbGljID09PSAnc2VsZWN0JyAmJlxuICAgICAgdW53cmFwUmVzb2x2ZWRNZXRhZGF0YShtZXRhZGF0YS5leHByZXNzaW9uLmV4cHJlc3Npb24pIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sO1xufVxuIl19