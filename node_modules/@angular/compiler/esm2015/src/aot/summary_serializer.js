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
export function serializeSummaries(srcFileName, forJitCtx, summaryResolver, symbolResolver, symbols, types, createExternalSymbolReexports = false) {
    const toJsonSerializer = new ToJsonSerializer(symbolResolver, summaryResolver, srcFileName);
    // for symbols, we use everything except for the class metadata itself
    // (we keep the statics though), as the class metadata is contained in the
    // CompileTypeSummary.
    symbols.forEach((resolvedSymbol) => toJsonSerializer.addSummary({ symbol: resolvedSymbol.symbol, metadata: resolvedSymbol.metadata }));
    // Add type summaries.
    types.forEach(({ summary, metadata }) => {
        toJsonSerializer.addSummary({ symbol: summary.type.reference, metadata: undefined, type: summary });
    });
    const { json, exportAs } = toJsonSerializer.serialize(createExternalSymbolReexports);
    if (forJitCtx) {
        const forJitSerializer = new ForJitSerializer(forJitCtx, symbolResolver, summaryResolver);
        types.forEach(({ summary, metadata }) => {
            forJitSerializer.addSourceType(summary, metadata);
        });
        toJsonSerializer.unprocessedSymbolSummariesBySymbol.forEach((summary) => {
            if (summaryResolver.isLibraryFile(summary.symbol.filePath) && summary.type) {
                forJitSerializer.addLibType(summary.type);
            }
        });
        forJitSerializer.serialize(exportAs);
    }
    return { json, exportAs };
}
export function deserializeSummaries(symbolCache, summaryResolver, libraryFileName, json) {
    const deserializer = new FromJsonDeserializer(symbolCache, summaryResolver);
    return deserializer.deserialize(libraryFileName, json);
}
export function createForJitStub(outputCtx, reference) {
    return createSummaryForJitFunction(outputCtx, reference, o.NULL_EXPR);
}
function createSummaryForJitFunction(outputCtx, reference, value) {
    const fnName = summaryForJitName(reference.name);
    outputCtx.statements.push(o.fn([], [new o.ReturnStatement(value)], new o.ArrayType(o.DYNAMIC_TYPE)).toDeclStmt(fnName, [
        o.StmtModifier.Final, o.StmtModifier.Exported
    ]));
}
class ToJsonSerializer extends ValueTransformer {
    constructor(symbolResolver, summaryResolver, srcFileName) {
        super();
        this.symbolResolver = symbolResolver;
        this.summaryResolver = summaryResolver;
        this.srcFileName = srcFileName;
        // Note: This only contains symbols without members.
        this.symbols = [];
        this.indexBySymbol = new Map();
        this.reexportedBy = new Map();
        // This now contains a `__symbol: number` in the place of
        // StaticSymbols, but otherwise has the same shape as the original objects.
        this.processedSummaryBySymbol = new Map();
        this.processedSummaries = [];
        this.unprocessedSymbolSummariesBySymbol = new Map();
        this.moduleName = symbolResolver.getKnownModuleName(srcFileName);
    }
    addSummary(summary) {
        let unprocessedSummary = this.unprocessedSymbolSummariesBySymbol.get(summary.symbol);
        let processedSummary = this.processedSummaryBySymbol.get(summary.symbol);
        if (!unprocessedSummary) {
            unprocessedSummary = { symbol: summary.symbol, metadata: undefined };
            this.unprocessedSymbolSummariesBySymbol.set(summary.symbol, unprocessedSummary);
            processedSummary = { symbol: this.processValue(summary.symbol, 0 /* None */) };
            this.processedSummaries.push(processedSummary);
            this.processedSummaryBySymbol.set(summary.symbol, processedSummary);
        }
        if (!unprocessedSummary.metadata && summary.metadata) {
            let metadata = summary.metadata || {};
            if (metadata.__symbolic === 'class') {
                // For classes, we keep everything except their class decorators.
                // We need to keep e.g. the ctor args, method names, method decorators
                // so that the class can be extended in another compilation unit.
                // We don't keep the class decorators as
                // 1) they refer to data
                //   that should not cause a rebuild of downstream compilation units
                //   (e.g. inline templates of @Component, or @NgModule.declarations)
                // 2) their data is already captured in TypeSummaries, e.g. DirectiveSummary.
                const clone = {};
                Object.keys(metadata).forEach((propName) => {
                    if (propName !== 'decorators') {
                        clone[propName] = metadata[propName];
                    }
                });
                metadata = clone;
            }
            else if (isCall(metadata)) {
                if (!isFunctionCall(metadata) && !isMethodCallOnVariable(metadata)) {
                    // Don't store complex calls as we won't be able to simplify them anyways later on.
                    metadata = {
                        __symbolic: 'error',
                        message: 'Complex function calls are not supported.',
                    };
                }
            }
            // Note: We need to keep storing ctor calls for e.g.
            // `export const x = new InjectionToken(...)`
            unprocessedSummary.metadata = metadata;
            processedSummary.metadata = this.processValue(metadata, 1 /* ResolveValue */);
            if (metadata instanceof StaticSymbol &&
                this.summaryResolver.isLibraryFile(metadata.filePath)) {
                const declarationSymbol = this.symbols[this.indexBySymbol.get(metadata)];
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
                const ngModuleSummary = summary.type;
                ngModuleSummary.exportedDirectives.concat(ngModuleSummary.exportedPipes).forEach((id) => {
                    const symbol = id.reference;
                    if (this.summaryResolver.isLibraryFile(symbol.filePath) &&
                        !this.unprocessedSymbolSummariesBySymbol.has(symbol)) {
                        const summary = this.summaryResolver.resolveSummary(symbol);
                        if (summary) {
                            this.addSummary(summary);
                        }
                    }
                });
            }
        }
    }
    /**
     * @param createExternalSymbolReexports Whether external static symbols should be re-exported.
     * This can be enabled if external symbols should be re-exported by the current module in
     * order to avoid dynamically generated module dependencies which can break strict dependency
     * enforcements (as in Google3). Read more here: https://github.com/angular/angular/issues/25644
     */
    serialize(createExternalSymbolReexports) {
        const exportAs = [];
        const json = JSON.stringify({
            moduleName: this.moduleName,
            summaries: this.processedSummaries,
            symbols: this.symbols.map((symbol, index) => {
                symbol.assertNoMembers();
                let importAs = undefined;
                if (this.summaryResolver.isLibraryFile(symbol.filePath)) {
                    const reexportSymbol = this.reexportedBy.get(symbol);
                    if (reexportSymbol) {
                        // In case the given external static symbol is already manually exported by the
                        // user, we just proxy the external static symbol reference to the manual export.
                        // This ensures that the AOT compiler imports the external symbol through the
                        // user export and does not introduce another dependency which is not needed.
                        importAs = this.indexBySymbol.get(reexportSymbol);
                    }
                    else if (createExternalSymbolReexports) {
                        // In this case, the given external static symbol is *not* manually exported by
                        // the user, and we manually create a re-export in the factory file so that we
                        // don't introduce another module dependency. This is useful when running within
                        // Bazel so that the AOT compiler does not introduce any module dependencies
                        // which can break the strict dependency enforcement. (e.g. as in Google3)
                        // Read more about this here: https://github.com/angular/angular/issues/25644
                        const summary = this.unprocessedSymbolSummariesBySymbol.get(symbol);
                        if (!summary || !summary.metadata || summary.metadata.__symbolic !== 'interface') {
                            importAs = `${symbol.name}_${index}`;
                            exportAs.push({ symbol, exportAs: importAs });
                        }
                    }
                }
                return {
                    __symbol: index,
                    name: symbol.name,
                    filePath: this.summaryResolver.toSummaryFileName(symbol.filePath, this.srcFileName),
                    importAs: importAs
                };
            })
        });
        return { json, exportAs };
    }
    processValue(value, flags) {
        return visitValue(value, this, flags);
    }
    visitOther(value, context) {
        if (value instanceof StaticSymbol) {
            let baseSymbol = this.symbolResolver.getStaticSymbol(value.filePath, value.name);
            const index = this.visitStaticSymbol(baseSymbol, context);
            return { __symbol: index, members: value.members };
        }
    }
    /**
     * Strip line and character numbers from ngsummaries.
     * Emitting them causes white spaces changes to retrigger upstream
     * recompilations in bazel.
     * TODO: find out a way to have line and character numbers in errors without
     * excessive recompilation in bazel.
     */
    visitStringMap(map, context) {
        if (map['__symbolic'] === 'resolved') {
            return visitValue(map['symbol'], this, context);
        }
        if (map['__symbolic'] === 'error') {
            delete map['line'];
            delete map['character'];
        }
        return super.visitStringMap(map, context);
    }
    /**
     * Returns null if the options.resolveValue is true, and the summary for the symbol
     * resolved to a type or could not be resolved.
     */
    visitStaticSymbol(baseSymbol, flags) {
        let index = this.indexBySymbol.get(baseSymbol);
        let summary = null;
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
    }
    loadSummary(symbol) {
        let summary = this.summaryResolver.resolveSummary(symbol);
        if (!summary) {
            // some symbols might originate from a plain typescript library
            // that just exported .d.ts and .metadata.json files, i.e. where no summary
            // files were created.
            const resolvedSymbol = this.symbolResolver.resolveSymbol(symbol);
            if (resolvedSymbol) {
                summary = { symbol: resolvedSymbol.symbol, metadata: resolvedSymbol.metadata };
            }
        }
        return summary;
    }
}
class ForJitSerializer {
    constructor(outputCtx, symbolResolver, summaryResolver) {
        this.outputCtx = outputCtx;
        this.symbolResolver = symbolResolver;
        this.summaryResolver = summaryResolver;
        this.data = [];
    }
    addSourceType(summary, metadata) {
        this.data.push({ summary, metadata, isLibrary: false });
    }
    addLibType(summary) {
        this.data.push({ summary, metadata: null, isLibrary: true });
    }
    serialize(exportAsArr) {
        const exportAsBySymbol = new Map();
        for (const { symbol, exportAs } of exportAsArr) {
            exportAsBySymbol.set(symbol, exportAs);
        }
        const ngModuleSymbols = new Set();
        for (const { summary, metadata, isLibrary } of this.data) {
            if (summary.summaryKind === CompileSummaryKind.NgModule) {
                // collect the symbols that refer to NgModule classes.
                // Note: we can't just rely on `summary.type.summaryKind` to determine this as
                // we don't add the summaries of all referenced symbols when we serialize type summaries.
                // See serializeSummaries for details.
                ngModuleSymbols.add(summary.type.reference);
                const modSummary = summary;
                for (const mod of modSummary.modules) {
                    ngModuleSymbols.add(mod.reference);
                }
            }
            if (!isLibrary) {
                const fnName = summaryForJitName(summary.type.reference.name);
                createSummaryForJitFunction(this.outputCtx, summary.type.reference, this.serializeSummaryWithDeps(summary, metadata));
            }
        }
        ngModuleSymbols.forEach((ngModuleSymbol) => {
            if (this.summaryResolver.isLibraryFile(ngModuleSymbol.filePath)) {
                let exportAs = exportAsBySymbol.get(ngModuleSymbol) || ngModuleSymbol.name;
                const jitExportAsName = summaryForJitName(exportAs);
                this.outputCtx.statements.push(o.variable(jitExportAsName)
                    .set(this.serializeSummaryRef(ngModuleSymbol))
                    .toDeclStmt(null, [o.StmtModifier.Exported]));
            }
        });
    }
    serializeSummaryWithDeps(summary, metadata) {
        const expressions = [this.serializeSummary(summary)];
        let providers = [];
        if (metadata instanceof CompileNgModuleMetadata) {
            expressions.push(...
            // For directives / pipes, we only add the declared ones,
            // and rely on transitively importing NgModules to get the transitive
            // summaries.
            metadata.declaredDirectives.concat(metadata.declaredPipes)
                .map(type => type.reference)
                // For modules,
                // we also add the summaries for modules
                // from libraries.
                // This is ok as we produce reexports for all transitive modules.
                .concat(metadata.transitiveModule.modules.map(type => type.reference)
                .filter(ref => ref !== metadata.type.reference))
                .map((ref) => this.serializeSummaryRef(ref)));
            // Note: We don't use `NgModuleSummary.providers`, as that one is transitive,
            // and we already have transitive modules.
            providers = metadata.providers;
        }
        else if (summary.summaryKind === CompileSummaryKind.Directive) {
            const dirSummary = summary;
            providers = dirSummary.providers.concat(dirSummary.viewProviders);
        }
        // Note: We can't just refer to the `ngsummary.ts` files for `useClass` providers (as we do for
        // declaredDirectives / declaredPipes), as we allow
        // providers without ctor arguments to skip the `@Injectable` decorator,
        // i.e. we didn't generate .ngsummary.ts files for these.
        expressions.push(...providers.filter(provider => !!provider.useClass).map(provider => this.serializeSummary({
            summaryKind: CompileSummaryKind.Injectable,
            type: provider.useClass
        })));
        return o.literalArr(expressions);
    }
    serializeSummaryRef(typeSymbol) {
        const jitImportedSymbol = this.symbolResolver.getStaticSymbol(summaryForJitFileName(typeSymbol.filePath), summaryForJitName(typeSymbol.name));
        return this.outputCtx.importExpr(jitImportedSymbol);
    }
    serializeSummary(data) {
        const outputCtx = this.outputCtx;
        class Transformer {
            visitArray(arr, context) {
                return o.literalArr(arr.map(entry => visitValue(entry, this, context)));
            }
            visitStringMap(map, context) {
                return new o.LiteralMapExpr(Object.keys(map).map((key) => new o.LiteralMapEntry(key, visitValue(map[key], this, context), false)));
            }
            visitPrimitive(value, context) {
                return o.literal(value);
            }
            visitOther(value, context) {
                if (value instanceof StaticSymbol) {
                    return outputCtx.importExpr(value);
                }
                else {
                    throw new Error(`Illegal State: Encountered value ${value}`);
                }
            }
        }
        return visitValue(data, new Transformer(), null);
    }
}
class FromJsonDeserializer extends ValueTransformer {
    constructor(symbolCache, summaryResolver) {
        super();
        this.symbolCache = symbolCache;
        this.summaryResolver = summaryResolver;
    }
    deserialize(libraryFileName, json) {
        const data = JSON.parse(json);
        const allImportAs = [];
        this.symbols = data.symbols.map((serializedSymbol) => this.symbolCache.get(this.summaryResolver.fromSummaryFileName(serializedSymbol.filePath, libraryFileName), serializedSymbol.name));
        data.symbols.forEach((serializedSymbol, index) => {
            const symbol = this.symbols[index];
            const importAs = serializedSymbol.importAs;
            if (typeof importAs === 'number') {
                allImportAs.push({ symbol, importAs: this.symbols[importAs] });
            }
            else if (typeof importAs === 'string') {
                allImportAs.push({ symbol, importAs: this.symbolCache.get(ngfactoryFilePath(libraryFileName), importAs) });
            }
        });
        const summaries = visitValue(data.summaries, this, null);
        return { moduleName: data.moduleName, summaries, importAs: allImportAs };
    }
    visitStringMap(map, context) {
        if ('__symbol' in map) {
            const baseSymbol = this.symbols[map['__symbol']];
            const members = map['members'];
            return members.length ? this.symbolCache.get(baseSymbol.filePath, baseSymbol.name, members) :
                baseSymbol;
        }
        else {
            return super.visitStringMap(map, context);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeV9zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2FvdC9zdW1tYXJ5X3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFvRCx1QkFBdUIsRUFBd0Usa0JBQWtCLEVBQTBDLE1BQU0scUJBQXFCLENBQUM7QUFDbFAsT0FBTyxLQUFLLENBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxPQUFPLEVBQWdCLGdCQUFnQixFQUFnQixVQUFVLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFbEYsT0FBTyxFQUFDLFlBQVksRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQTZDLHNCQUFzQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDNUcsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUVwRyxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLFdBQW1CLEVBQUUsU0FBNkIsRUFDbEQsZUFBOEMsRUFBRSxjQUFvQyxFQUNwRixPQUErQixFQUFFLEtBSTlCLEVBQ0gsNkJBQTZCLEdBQ3pCLEtBQUs7SUFDWCxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU1RixzRUFBc0U7SUFDdEUsMEVBQTBFO0lBQzFFLHNCQUFzQjtJQUN0QixPQUFPLENBQUMsT0FBTyxDQUNYLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQzNDLEVBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0Usc0JBQXNCO0lBQ3RC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RCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckUsVUFBVSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztDQUNGO0FBRUQsU0FBUyxNQUFNLENBQUMsUUFBYTtJQUMzQixPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBYTtJQUNuQyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksWUFBWSxDQUFDO0FBQ2pHLENBQUM7QUFFRCxTQUFTLHNCQUFzQixDQUFDLFFBQWE7SUFDM0MsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsS0FBSyxRQUFRO1FBQ3pGLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFlBQVksWUFBWSxDQUFDO0FBQ3JGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0NvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLCBDb21waWxlTmdNb2R1bGVTdW1tYXJ5LCBDb21waWxlUGlwZU1ldGFkYXRhLCBDb21waWxlUHJvdmlkZXJNZXRhZGF0YSwgQ29tcGlsZVN1bW1hcnlLaW5kLCBDb21waWxlVHlwZU1ldGFkYXRhLCBDb21waWxlVHlwZVN1bW1hcnl9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1N1bW1hcnksIFN1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi4vc3VtbWFyeV9yZXNvbHZlcic7XG5pbXBvcnQge091dHB1dENvbnRleHQsIFZhbHVlVHJhbnNmb3JtZXIsIFZhbHVlVmlzaXRvciwgdmlzaXRWYWx1ZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7U3RhdGljU3ltYm9sLCBTdGF0aWNTeW1ib2xDYWNoZX0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7UmVzb2x2ZWRTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbFJlc29sdmVyLCB1bndyYXBSZXNvbHZlZE1ldGFkYXRhfSBmcm9tICcuL3N0YXRpY19zeW1ib2xfcmVzb2x2ZXInO1xuaW1wb3J0IHtpc0xvd2VyZWRTeW1ib2wsIG5nZmFjdG9yeUZpbGVQYXRoLCBzdW1tYXJ5Rm9ySml0RmlsZU5hbWUsIHN1bW1hcnlGb3JKaXROYW1lfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplU3VtbWFyaWVzKFxuICAgIHNyY0ZpbGVOYW1lOiBzdHJpbmcsIGZvckppdEN0eDogT3V0cHV0Q29udGV4dHxudWxsLFxuICAgIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4sIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBzeW1ib2xzOiBSZXNvbHZlZFN0YXRpY1N5bWJvbFtdLCB0eXBlczoge1xuICAgICAgc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5LFxuICAgICAgbWV0YWRhdGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YXxDb21waWxlUGlwZU1ldGFkYXRhfFxuICAgICAgQ29tcGlsZVR5cGVNZXRhZGF0YVxuICAgIH1bXSxcbiAgICBjcmVhdGVFeHRlcm5hbFN5bWJvbFJlZXhwb3J0cyA9XG4gICAgICAgIGZhbHNlKToge2pzb246IHN0cmluZywgZXhwb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgZXhwb3J0QXM6IHN0cmluZ31bXX0ge1xuICBjb25zdCB0b0pzb25TZXJpYWxpemVyID0gbmV3IFRvSnNvblNlcmlhbGl6ZXIoc3ltYm9sUmVzb2x2ZXIsIHN1bW1hcnlSZXNvbHZlciwgc3JjRmlsZU5hbWUpO1xuXG4gIC8vIGZvciBzeW1ib2xzLCB3ZSB1c2UgZXZlcnl0aGluZyBleGNlcHQgZm9yIHRoZSBjbGFzcyBtZXRhZGF0YSBpdHNlbGZcbiAgLy8gKHdlIGtlZXAgdGhlIHN0YXRpY3MgdGhvdWdoKSwgYXMgdGhlIGNsYXNzIG1ldGFkYXRhIGlzIGNvbnRhaW5lZCBpbiB0aGVcbiAgLy8gQ29tcGlsZVR5cGVTdW1tYXJ5LlxuICBzeW1ib2xzLmZvckVhY2goXG4gICAgICAocmVzb2x2ZWRTeW1ib2wpID0+IHRvSnNvblNlcmlhbGl6ZXIuYWRkU3VtbWFyeShcbiAgICAgICAgICB7c3ltYm9sOiByZXNvbHZlZFN5bWJvbC5zeW1ib2wsIG1ldGFkYXRhOiByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YX0pKTtcblxuICAvLyBBZGQgdHlwZSBzdW1tYXJpZXMuXG4gIHR5cGVzLmZvckVhY2goKHtzdW1tYXJ5LCBtZXRhZGF0YX0pID0+IHtcbiAgICB0b0pzb25TZXJpYWxpemVyLmFkZFN1bW1hcnkoXG4gICAgICAgIHtzeW1ib2w6IHN1bW1hcnkudHlwZS5yZWZlcmVuY2UsIG1ldGFkYXRhOiB1bmRlZmluZWQsIHR5cGU6IHN1bW1hcnl9KTtcbiAgfSk7XG4gIGNvbnN0IHtqc29uLCBleHBvcnRBc30gPSB0b0pzb25TZXJpYWxpemVyLnNlcmlhbGl6ZShjcmVhdGVFeHRlcm5hbFN5bWJvbFJlZXhwb3J0cyk7XG4gIGlmIChmb3JKaXRDdHgpIHtcbiAgICBjb25zdCBmb3JKaXRTZXJpYWxpemVyID0gbmV3IEZvckppdFNlcmlhbGl6ZXIoZm9ySml0Q3R4LCBzeW1ib2xSZXNvbHZlciwgc3VtbWFyeVJlc29sdmVyKTtcbiAgICB0eXBlcy5mb3JFYWNoKCh7c3VtbWFyeSwgbWV0YWRhdGF9KSA9PiB7XG4gICAgICBmb3JKaXRTZXJpYWxpemVyLmFkZFNvdXJjZVR5cGUoc3VtbWFyeSwgbWV0YWRhdGEpO1xuICAgIH0pO1xuICAgIHRvSnNvblNlcmlhbGl6ZXIudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5mb3JFYWNoKChzdW1tYXJ5KSA9PiB7XG4gICAgICBpZiAoc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUoc3VtbWFyeS5zeW1ib2wuZmlsZVBhdGgpICYmIHN1bW1hcnkudHlwZSkge1xuICAgICAgICBmb3JKaXRTZXJpYWxpemVyLmFkZExpYlR5cGUoc3VtbWFyeS50eXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3JKaXRTZXJpYWxpemVyLnNlcmlhbGl6ZShleHBvcnRBcyk7XG4gIH1cbiAgcmV0dXJuIHtqc29uLCBleHBvcnRBc307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVN1bW1hcmllcyhcbiAgICBzeW1ib2xDYWNoZTogU3RhdGljU3ltYm9sQ2FjaGUsIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4sXG4gICAgbGlicmFyeUZpbGVOYW1lOiBzdHJpbmcsIGpzb246IHN0cmluZyk6IHtcbiAgbW9kdWxlTmFtZTogc3RyaW5nfG51bGwsXG4gIHN1bW1hcmllczogU3VtbWFyeTxTdGF0aWNTeW1ib2w+W10sXG4gIGltcG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGltcG9ydEFzOiBTdGF0aWNTeW1ib2x9W11cbn0ge1xuICBjb25zdCBkZXNlcmlhbGl6ZXIgPSBuZXcgRnJvbUpzb25EZXNlcmlhbGl6ZXIoc3ltYm9sQ2FjaGUsIHN1bW1hcnlSZXNvbHZlcik7XG4gIHJldHVybiBkZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUobGlicmFyeUZpbGVOYW1lLCBqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvckppdFN0dWIob3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCByZWZlcmVuY2U6IFN0YXRpY1N5bWJvbCkge1xuICByZXR1cm4gY3JlYXRlU3VtbWFyeUZvckppdEZ1bmN0aW9uKG91dHB1dEN0eCwgcmVmZXJlbmNlLCBvLk5VTExfRVhQUik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnlGb3JKaXRGdW5jdGlvbihcbiAgICBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIHJlZmVyZW5jZTogU3RhdGljU3ltYm9sLCB2YWx1ZTogby5FeHByZXNzaW9uKSB7XG4gIGNvbnN0IGZuTmFtZSA9IHN1bW1hcnlGb3JKaXROYW1lKHJlZmVyZW5jZS5uYW1lKTtcbiAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChcbiAgICAgIG8uZm4oW10sIFtuZXcgby5SZXR1cm5TdGF0ZW1lbnQodmFsdWUpXSwgbmV3IG8uQXJyYXlUeXBlKG8uRFlOQU1JQ19UWVBFKSkudG9EZWNsU3RtdChmbk5hbWUsIFtcbiAgICAgICAgby5TdG10TW9kaWZpZXIuRmluYWwsIG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkXG4gICAgICBdKSk7XG59XG5cbmNvbnN0IGVudW0gU2VyaWFsaXphdGlvbkZsYWdzIHtcbiAgTm9uZSA9IDAsXG4gIFJlc29sdmVWYWx1ZSA9IDEsXG59XG5cbmNsYXNzIFRvSnNvblNlcmlhbGl6ZXIgZXh0ZW5kcyBWYWx1ZVRyYW5zZm9ybWVyIHtcbiAgLy8gTm90ZTogVGhpcyBvbmx5IGNvbnRhaW5zIHN5bWJvbHMgd2l0aG91dCBtZW1iZXJzLlxuICBwcml2YXRlIHN5bWJvbHM6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gIHByaXZhdGUgaW5kZXhCeVN5bWJvbCA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBudW1iZXI+KCk7XG4gIHByaXZhdGUgcmVleHBvcnRlZEJ5ID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbD4oKTtcbiAgLy8gVGhpcyBub3cgY29udGFpbnMgYSBgX19zeW1ib2w6IG51bWJlcmAgaW4gdGhlIHBsYWNlIG9mXG4gIC8vIFN0YXRpY1N5bWJvbHMsIGJ1dCBvdGhlcndpc2UgaGFzIHRoZSBzYW1lIHNoYXBlIGFzIHRoZSBvcmlnaW5hbCBvYmplY3RzLlxuICBwcml2YXRlIHByb2Nlc3NlZFN1bW1hcnlCeVN5bWJvbCA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBhbnk+KCk7XG4gIHByaXZhdGUgcHJvY2Vzc2VkU3VtbWFyaWVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIG1vZHVsZU5hbWU6IHN0cmluZ3xudWxsO1xuXG4gIHVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgU3VtbWFyeTxTdGF0aWNTeW1ib2w+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4sIHByaXZhdGUgc3JjRmlsZU5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2R1bGVOYW1lID0gc3ltYm9sUmVzb2x2ZXIuZ2V0S25vd25Nb2R1bGVOYW1lKHNyY0ZpbGVOYW1lKTtcbiAgfVxuXG4gIGFkZFN1bW1hcnkoc3VtbWFyeTogU3VtbWFyeTxTdGF0aWNTeW1ib2w+KSB7XG4gICAgbGV0IHVucHJvY2Vzc2VkU3VtbWFyeSA9IHRoaXMudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5nZXQoc3VtbWFyeS5zeW1ib2wpO1xuICAgIGxldCBwcm9jZXNzZWRTdW1tYXJ5ID0gdGhpcy5wcm9jZXNzZWRTdW1tYXJ5QnlTeW1ib2wuZ2V0KHN1bW1hcnkuc3ltYm9sKTtcbiAgICBpZiAoIXVucHJvY2Vzc2VkU3VtbWFyeSkge1xuICAgICAgdW5wcm9jZXNzZWRTdW1tYXJ5ID0ge3N5bWJvbDogc3VtbWFyeS5zeW1ib2wsIG1ldGFkYXRhOiB1bmRlZmluZWR9O1xuICAgICAgdGhpcy51bnByb2Nlc3NlZFN5bWJvbFN1bW1hcmllc0J5U3ltYm9sLnNldChzdW1tYXJ5LnN5bWJvbCwgdW5wcm9jZXNzZWRTdW1tYXJ5KTtcbiAgICAgIHByb2Nlc3NlZFN1bW1hcnkgPSB7c3ltYm9sOiB0aGlzLnByb2Nlc3NWYWx1ZShzdW1tYXJ5LnN5bWJvbCwgU2VyaWFsaXphdGlvbkZsYWdzLk5vbmUpfTtcbiAgICAgIHRoaXMucHJvY2Vzc2VkU3VtbWFyaWVzLnB1c2gocHJvY2Vzc2VkU3VtbWFyeSk7XG4gICAgICB0aGlzLnByb2Nlc3NlZFN1bW1hcnlCeVN5bWJvbC5zZXQoc3VtbWFyeS5zeW1ib2wsIHByb2Nlc3NlZFN1bW1hcnkpO1xuICAgIH1cbiAgICBpZiAoIXVucHJvY2Vzc2VkU3VtbWFyeS5tZXRhZGF0YSAmJiBzdW1tYXJ5Lm1ldGFkYXRhKSB7XG4gICAgICBsZXQgbWV0YWRhdGEgPSBzdW1tYXJ5Lm1ldGFkYXRhIHx8IHt9O1xuICAgICAgaWYgKG1ldGFkYXRhLl9fc3ltYm9saWMgPT09ICdjbGFzcycpIHtcbiAgICAgICAgLy8gRm9yIGNsYXNzZXMsIHdlIGtlZXAgZXZlcnl0aGluZyBleGNlcHQgdGhlaXIgY2xhc3MgZGVjb3JhdG9ycy5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBrZWVwIGUuZy4gdGhlIGN0b3IgYXJncywgbWV0aG9kIG5hbWVzLCBtZXRob2QgZGVjb3JhdG9yc1xuICAgICAgICAvLyBzbyB0aGF0IHRoZSBjbGFzcyBjYW4gYmUgZXh0ZW5kZWQgaW4gYW5vdGhlciBjb21waWxhdGlvbiB1bml0LlxuICAgICAgICAvLyBXZSBkb24ndCBrZWVwIHRoZSBjbGFzcyBkZWNvcmF0b3JzIGFzXG4gICAgICAgIC8vIDEpIHRoZXkgcmVmZXIgdG8gZGF0YVxuICAgICAgICAvLyAgIHRoYXQgc2hvdWxkIG5vdCBjYXVzZSBhIHJlYnVpbGQgb2YgZG93bnN0cmVhbSBjb21waWxhdGlvbiB1bml0c1xuICAgICAgICAvLyAgIChlLmcuIGlubGluZSB0ZW1wbGF0ZXMgb2YgQENvbXBvbmVudCwgb3IgQE5nTW9kdWxlLmRlY2xhcmF0aW9ucylcbiAgICAgICAgLy8gMikgdGhlaXIgZGF0YSBpcyBhbHJlYWR5IGNhcHR1cmVkIGluIFR5cGVTdW1tYXJpZXMsIGUuZy4gRGlyZWN0aXZlU3VtbWFyeS5cbiAgICAgICAgY29uc3QgY2xvbmU6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKG1ldGFkYXRhKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9wTmFtZSAhPT0gJ2RlY29yYXRvcnMnKSB7XG4gICAgICAgICAgICBjbG9uZVtwcm9wTmFtZV0gPSBtZXRhZGF0YVtwcm9wTmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWV0YWRhdGEgPSBjbG9uZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDYWxsKG1ldGFkYXRhKSkge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb25DYWxsKG1ldGFkYXRhKSAmJiAhaXNNZXRob2RDYWxsT25WYXJpYWJsZShtZXRhZGF0YSkpIHtcbiAgICAgICAgICAvLyBEb24ndCBzdG9yZSBjb21wbGV4IGNhbGxzIGFzIHdlIHdvbid0IGJlIGFibGUgdG8gc2ltcGxpZnkgdGhlbSBhbnl3YXlzIGxhdGVyIG9uLlxuICAgICAgICAgIG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgX19zeW1ib2xpYzogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdDb21wbGV4IGZ1bmN0aW9uIGNhbGxzIGFyZSBub3Qgc3VwcG9ydGVkLicsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTm90ZTogV2UgbmVlZCB0byBrZWVwIHN0b3JpbmcgY3RvciBjYWxscyBmb3IgZS5nLlxuICAgICAgLy8gYGV4cG9ydCBjb25zdCB4ID0gbmV3IEluamVjdGlvblRva2VuKC4uLilgXG4gICAgICB1bnByb2Nlc3NlZFN1bW1hcnkubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgIHByb2Nlc3NlZFN1bW1hcnkubWV0YWRhdGEgPSB0aGlzLnByb2Nlc3NWYWx1ZShtZXRhZGF0YSwgU2VyaWFsaXphdGlvbkZsYWdzLlJlc29sdmVWYWx1ZSk7XG4gICAgICBpZiAobWV0YWRhdGEgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wgJiZcbiAgICAgICAgICB0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKG1ldGFkYXRhLmZpbGVQYXRoKSkge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvblN5bWJvbCA9IHRoaXMuc3ltYm9sc1t0aGlzLmluZGV4QnlTeW1ib2wuZ2V0KG1ldGFkYXRhKSFdO1xuICAgICAgICBpZiAoIWlzTG93ZXJlZFN5bWJvbChkZWNsYXJhdGlvblN5bWJvbC5uYW1lKSkge1xuICAgICAgICAgIC8vIE5vdGU6IHN5bWJvbHMgdGhhdCB3ZXJlIGludHJvZHVjZWQgZHVyaW5nIGNvZGVnZW4gaW4gdGhlIHVzZXIgZmlsZSBjYW4gaGF2ZSBhIHJlZXhwb3J0XG4gICAgICAgICAgLy8gaWYgYSB1c2VyIHVzZWQgYGV4cG9ydCAqYC4gSG93ZXZlciwgd2UgY2FuJ3QgcmVseSBvbiB0aGlzIGFzIHRzaWNrbGUgd2lsbCBjaGFuZ2VcbiAgICAgICAgICAvLyBgZXhwb3J0ICpgIGludG8gbmFtZWQgZXhwb3J0cywgdXNpbmcgb25seSB0aGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgdHlwZWNoZWNrZXIuXG4gICAgICAgICAgLy8gQXMgd2UgaW50cm9kdWNlIHRoZSBuZXcgc3ltYm9scyBhZnRlciB0eXBlY2hlY2ssIFRzaWNrbGUgZG9lcyBub3Qga25vdyBhYm91dCB0aGVtLFxuICAgICAgICAgIC8vIGFuZCBvbWl0cyB0aGVtIHdoZW4gZXhwYW5kaW5nIGBleHBvcnQgKmAuXG4gICAgICAgICAgLy8gU28gd2UgaGF2ZSB0byBrZWVwIHJlZXhwb3J0aW5nIHRoZXNlIHN5bWJvbHMgbWFudWFsbHkgdmlhIC5uZ2ZhY3RvcnkgZmlsZXMuXG4gICAgICAgICAgdGhpcy5yZWV4cG9ydGVkQnkuc2V0KGRlY2xhcmF0aW9uU3ltYm9sLCBzdW1tYXJ5LnN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF1bnByb2Nlc3NlZFN1bW1hcnkudHlwZSAmJiBzdW1tYXJ5LnR5cGUpIHtcbiAgICAgIHVucHJvY2Vzc2VkU3VtbWFyeS50eXBlID0gc3VtbWFyeS50eXBlO1xuICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgYWRkIHRoZSBzdW1tYXJpZXMgb2YgYWxsIHJlZmVyZW5jZWQgc3ltYm9scyBhcyBmb3IgdGhlIFJlc29sdmVkU3ltYm9scyxcbiAgICAgIC8vIGFzIHRoZSB0eXBlIHN1bW1hcmllcyBhbHJlYWR5IGNvbnRhaW4gdGhlIHRyYW5zaXRpdmUgZGF0YSB0aGF0IHRoZXkgcmVxdWlyZVxuICAgICAgLy8gKGluIGEgbWluaW1hbCB3YXkpLlxuICAgICAgcHJvY2Vzc2VkU3VtbWFyeS50eXBlID0gdGhpcy5wcm9jZXNzVmFsdWUoc3VtbWFyeS50eXBlLCBTZXJpYWxpemF0aW9uRmxhZ3MuTm9uZSk7XG4gICAgICAvLyBleGNlcHQgZm9yIHJlZXhwb3J0ZWQgZGlyZWN0aXZlcyAvIHBpcGVzLCBzbyB3ZSBuZWVkIHRvIHN0b3JlXG4gICAgICAvLyB0aGVpciBzdW1tYXJpZXMgZXhwbGljaXRseS5cbiAgICAgIGlmIChzdW1tYXJ5LnR5cGUuc3VtbWFyeUtpbmQgPT09IENvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSkge1xuICAgICAgICBjb25zdCBuZ01vZHVsZVN1bW1hcnkgPSA8Q29tcGlsZU5nTW9kdWxlU3VtbWFyeT5zdW1tYXJ5LnR5cGU7XG4gICAgICAgIG5nTW9kdWxlU3VtbWFyeS5leHBvcnRlZERpcmVjdGl2ZXMuY29uY2F0KG5nTW9kdWxlU3VtbWFyeS5leHBvcnRlZFBpcGVzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN5bWJvbDogU3RhdGljU3ltYm9sID0gaWQucmVmZXJlbmNlO1xuICAgICAgICAgIGlmICh0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKHN5bWJvbC5maWxlUGF0aCkgJiZcbiAgICAgICAgICAgICAgIXRoaXMudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5oYXMoc3ltYm9sKSkge1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMuc3VtbWFyeVJlc29sdmVyLnJlc29sdmVTdW1tYXJ5KHN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICB0aGlzLmFkZFN1bW1hcnkoc3VtbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGNyZWF0ZUV4dGVybmFsU3ltYm9sUmVleHBvcnRzIFdoZXRoZXIgZXh0ZXJuYWwgc3RhdGljIHN5bWJvbHMgc2hvdWxkIGJlIHJlLWV4cG9ydGVkLlxuICAgKiBUaGlzIGNhbiBiZSBlbmFibGVkIGlmIGV4dGVybmFsIHN5bWJvbHMgc2hvdWxkIGJlIHJlLWV4cG9ydGVkIGJ5IHRoZSBjdXJyZW50IG1vZHVsZSBpblxuICAgKiBvcmRlciB0byBhdm9pZCBkeW5hbWljYWxseSBnZW5lcmF0ZWQgbW9kdWxlIGRlcGVuZGVuY2llcyB3aGljaCBjYW4gYnJlYWsgc3RyaWN0IGRlcGVuZGVuY3lcbiAgICogZW5mb3JjZW1lbnRzIChhcyBpbiBHb29nbGUzKS4gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI1NjQ0XG4gICAqL1xuICBzZXJpYWxpemUoY3JlYXRlRXh0ZXJuYWxTeW1ib2xSZWV4cG9ydHM6IGJvb2xlYW4pOlxuICAgICAge2pzb246IHN0cmluZywgZXhwb3J0QXM6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgZXhwb3J0QXM6IHN0cmluZ31bXX0ge1xuICAgIGNvbnN0IGV4cG9ydEFzOiB7c3ltYm9sOiBTdGF0aWNTeW1ib2wsIGV4cG9ydEFzOiBzdHJpbmd9W10gPSBbXTtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbW9kdWxlTmFtZTogdGhpcy5tb2R1bGVOYW1lLFxuICAgICAgc3VtbWFyaWVzOiB0aGlzLnByb2Nlc3NlZFN1bW1hcmllcyxcbiAgICAgIHN5bWJvbHM6IHRoaXMuc3ltYm9scy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgc3ltYm9sLmFzc2VydE5vTWVtYmVycygpO1xuICAgICAgICBsZXQgaW1wb3J0QXM6IHN0cmluZ3xudW1iZXIgPSB1bmRlZmluZWQhO1xuICAgICAgICBpZiAodGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShzeW1ib2wuZmlsZVBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgcmVleHBvcnRTeW1ib2wgPSB0aGlzLnJlZXhwb3J0ZWRCeS5nZXQoc3ltYm9sKTtcbiAgICAgICAgICBpZiAocmVleHBvcnRTeW1ib2wpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIGdpdmVuIGV4dGVybmFsIHN0YXRpYyBzeW1ib2wgaXMgYWxyZWFkeSBtYW51YWxseSBleHBvcnRlZCBieSB0aGVcbiAgICAgICAgICAgIC8vIHVzZXIsIHdlIGp1c3QgcHJveHkgdGhlIGV4dGVybmFsIHN0YXRpYyBzeW1ib2wgcmVmZXJlbmNlIHRvIHRoZSBtYW51YWwgZXhwb3J0LlxuICAgICAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIEFPVCBjb21waWxlciBpbXBvcnRzIHRoZSBleHRlcm5hbCBzeW1ib2wgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgIC8vIHVzZXIgZXhwb3J0IGFuZCBkb2VzIG5vdCBpbnRyb2R1Y2UgYW5vdGhlciBkZXBlbmRlbmN5IHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gICAgICAgICAgICBpbXBvcnRBcyA9IHRoaXMuaW5kZXhCeVN5bWJvbC5nZXQocmVleHBvcnRTeW1ib2wpITtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZUV4dGVybmFsU3ltYm9sUmVleHBvcnRzKSB7XG4gICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSBnaXZlbiBleHRlcm5hbCBzdGF0aWMgc3ltYm9sIGlzICpub3QqIG1hbnVhbGx5IGV4cG9ydGVkIGJ5XG4gICAgICAgICAgICAvLyB0aGUgdXNlciwgYW5kIHdlIG1hbnVhbGx5IGNyZWF0ZSBhIHJlLWV4cG9ydCBpbiB0aGUgZmFjdG9yeSBmaWxlIHNvIHRoYXQgd2VcbiAgICAgICAgICAgIC8vIGRvbid0IGludHJvZHVjZSBhbm90aGVyIG1vZHVsZSBkZXBlbmRlbmN5LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHJ1bm5pbmcgd2l0aGluXG4gICAgICAgICAgICAvLyBCYXplbCBzbyB0aGF0IHRoZSBBT1QgY29tcGlsZXIgZG9lcyBub3QgaW50cm9kdWNlIGFueSBtb2R1bGUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAvLyB3aGljaCBjYW4gYnJlYWsgdGhlIHN0cmljdCBkZXBlbmRlbmN5IGVuZm9yY2VtZW50LiAoZS5nLiBhcyBpbiBHb29nbGUzKVxuICAgICAgICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjU2NDRcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnVucHJvY2Vzc2VkU3ltYm9sU3VtbWFyaWVzQnlTeW1ib2wuZ2V0KHN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoIXN1bW1hcnkgfHwgIXN1bW1hcnkubWV0YWRhdGEgfHwgc3VtbWFyeS5tZXRhZGF0YS5fX3N5bWJvbGljICE9PSAnaW50ZXJmYWNlJykge1xuICAgICAgICAgICAgICBpbXBvcnRBcyA9IGAke3N5bWJvbC5uYW1lfV8ke2luZGV4fWA7XG4gICAgICAgICAgICAgIGV4cG9ydEFzLnB1c2goe3N5bWJvbCwgZXhwb3J0QXM6IGltcG9ydEFzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgX19zeW1ib2w6IGluZGV4LFxuICAgICAgICAgIG5hbWU6IHN5bWJvbC5uYW1lLFxuICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLnN1bW1hcnlSZXNvbHZlci50b1N1bW1hcnlGaWxlTmFtZShzeW1ib2wuZmlsZVBhdGgsIHRoaXMuc3JjRmlsZU5hbWUpLFxuICAgICAgICAgIGltcG9ydEFzOiBpbXBvcnRBc1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4ge2pzb24sIGV4cG9ydEFzfTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1ZhbHVlKHZhbHVlOiBhbnksIGZsYWdzOiBTZXJpYWxpemF0aW9uRmxhZ3MpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdFZhbHVlKHZhbHVlLCB0aGlzLCBmbGFncyk7XG4gIH1cblxuICB2aXNpdE90aGVyKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICBsZXQgYmFzZVN5bWJvbCA9IHRoaXMuc3ltYm9sUmVzb2x2ZXIuZ2V0U3RhdGljU3ltYm9sKHZhbHVlLmZpbGVQYXRoLCB2YWx1ZS5uYW1lKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy52aXNpdFN0YXRpY1N5bWJvbChiYXNlU3ltYm9sLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB7X19zeW1ib2w6IGluZGV4LCBtZW1iZXJzOiB2YWx1ZS5tZW1iZXJzfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RyaXAgbGluZSBhbmQgY2hhcmFjdGVyIG51bWJlcnMgZnJvbSBuZ3N1bW1hcmllcy5cbiAgICogRW1pdHRpbmcgdGhlbSBjYXVzZXMgd2hpdGUgc3BhY2VzIGNoYW5nZXMgdG8gcmV0cmlnZ2VyIHVwc3RyZWFtXG4gICAqIHJlY29tcGlsYXRpb25zIGluIGJhemVsLlxuICAgKiBUT0RPOiBmaW5kIG91dCBhIHdheSB0byBoYXZlIGxpbmUgYW5kIGNoYXJhY3RlciBudW1iZXJzIGluIGVycm9ycyB3aXRob3V0XG4gICAqIGV4Y2Vzc2l2ZSByZWNvbXBpbGF0aW9uIGluIGJhemVsLlxuICAgKi9cbiAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAobWFwWydfX3N5bWJvbGljJ10gPT09ICdyZXNvbHZlZCcpIHtcbiAgICAgIHJldHVybiB2aXNpdFZhbHVlKG1hcFsnc3ltYm9sJ10sIHRoaXMsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAobWFwWydfX3N5bWJvbGljJ10gPT09ICdlcnJvcicpIHtcbiAgICAgIGRlbGV0ZSBtYXBbJ2xpbmUnXTtcbiAgICAgIGRlbGV0ZSBtYXBbJ2NoYXJhY3RlciddO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIudmlzaXRTdHJpbmdNYXAobWFwLCBjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIG9wdGlvbnMucmVzb2x2ZVZhbHVlIGlzIHRydWUsIGFuZCB0aGUgc3VtbWFyeSBmb3IgdGhlIHN5bWJvbFxuICAgKiByZXNvbHZlZCB0byBhIHR5cGUgb3IgY291bGQgbm90IGJlIHJlc29sdmVkLlxuICAgKi9cbiAgcHJpdmF0ZSB2aXNpdFN0YXRpY1N5bWJvbChiYXNlU3ltYm9sOiBTdGF0aWNTeW1ib2wsIGZsYWdzOiBTZXJpYWxpemF0aW9uRmxhZ3MpOiBudW1iZXIge1xuICAgIGxldCBpbmRleDogbnVtYmVyfHVuZGVmaW5lZHxudWxsID0gdGhpcy5pbmRleEJ5U3ltYm9sLmdldChiYXNlU3ltYm9sKTtcbiAgICBsZXQgc3VtbWFyeTogU3VtbWFyeTxTdGF0aWNTeW1ib2w+fG51bGwgPSBudWxsO1xuICAgIGlmIChmbGFncyAmIFNlcmlhbGl6YXRpb25GbGFncy5SZXNvbHZlVmFsdWUgJiZcbiAgICAgICAgdGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShiYXNlU3ltYm9sLmZpbGVQYXRoKSkge1xuICAgICAgaWYgKHRoaXMudW5wcm9jZXNzZWRTeW1ib2xTdW1tYXJpZXNCeVN5bWJvbC5oYXMoYmFzZVN5bWJvbCkpIHtcbiAgICAgICAgLy8gdGhlIHN1bW1hcnkgZm9yIHRoaXMgc3ltYm9sIHdhcyBhbHJlYWR5IGFkZGVkXG4gICAgICAgIC8vIC0+IG5vdGhpbmcgdG8gZG8uXG4gICAgICAgIHJldHVybiBpbmRleCE7XG4gICAgICB9XG4gICAgICBzdW1tYXJ5ID0gdGhpcy5sb2FkU3VtbWFyeShiYXNlU3ltYm9sKTtcbiAgICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkubWV0YWRhdGEgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgICAgLy8gVGhlIHN1bW1hcnkgaXMgYSByZWV4cG9ydFxuICAgICAgICBpbmRleCA9IHRoaXMudmlzaXRTdGF0aWNTeW1ib2woc3VtbWFyeS5tZXRhZGF0YSwgZmxhZ3MpO1xuICAgICAgICAvLyByZXNldCB0aGUgc3VtbWFyeSBhcyBpdCBpcyBqdXN0IGEgcmVleHBvcnQsIHNvIHdlIGRvbid0IHdhbnQgdG8gc3RvcmUgaXQuXG4gICAgICAgIHN1bW1hcnkgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgLy8gTm90ZTogPT0gb24gcHVycG9zZSB0byBjb21wYXJlIHdpdGggdW5kZWZpbmVkIVxuICAgICAgLy8gTm8gc3VtbWFyeSBhbmQgdGhlIHN5bWJvbCBpcyBhbHJlYWR5IGFkZGVkIC0+IG5vdGhpbmcgdG8gZG8uXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIC8vIE5vdGU6ID09IG9uIHB1cnBvc2UgdG8gY29tcGFyZSB3aXRoIHVuZGVmaW5lZCFcbiAgICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgICAgaW5kZXggPSB0aGlzLnN5bWJvbHMubGVuZ3RoO1xuICAgICAgdGhpcy5zeW1ib2xzLnB1c2goYmFzZVN5bWJvbCk7XG4gICAgfVxuICAgIHRoaXMuaW5kZXhCeVN5bWJvbC5zZXQoYmFzZVN5bWJvbCwgaW5kZXgpO1xuICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICB0aGlzLmFkZFN1bW1hcnkoc3VtbWFyeSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFN1bW1hcnkoc3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBTdW1tYXJ5PFN0YXRpY1N5bWJvbD58bnVsbCB7XG4gICAgbGV0IHN1bW1hcnkgPSB0aGlzLnN1bW1hcnlSZXNvbHZlci5yZXNvbHZlU3VtbWFyeShzeW1ib2wpO1xuICAgIGlmICghc3VtbWFyeSkge1xuICAgICAgLy8gc29tZSBzeW1ib2xzIG1pZ2h0IG9yaWdpbmF0ZSBmcm9tIGEgcGxhaW4gdHlwZXNjcmlwdCBsaWJyYXJ5XG4gICAgICAvLyB0aGF0IGp1c3QgZXhwb3J0ZWQgLmQudHMgYW5kIC5tZXRhZGF0YS5qc29uIGZpbGVzLCBpLmUuIHdoZXJlIG5vIHN1bW1hcnlcbiAgICAgIC8vIGZpbGVzIHdlcmUgY3JlYXRlZC5cbiAgICAgIGNvbnN0IHJlc29sdmVkU3ltYm9sID0gdGhpcy5zeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHN5bWJvbCk7XG4gICAgICBpZiAocmVzb2x2ZWRTeW1ib2wpIHtcbiAgICAgICAgc3VtbWFyeSA9IHtzeW1ib2w6IHJlc29sdmVkU3ltYm9sLnN5bWJvbCwgbWV0YWRhdGE6IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bW1hcnk7XG4gIH1cbn1cblxuY2xhc3MgRm9ySml0U2VyaWFsaXplciB7XG4gIHByaXZhdGUgZGF0YTogQXJyYXk8e1xuICAgIHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSxcbiAgICBtZXRhZGF0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhfENvbXBpbGVQaXBlTWV0YWRhdGF8XG4gICAgQ29tcGlsZVR5cGVNZXRhZGF0YXxudWxsLFxuICAgIGlzTGlicmFyeTogYm9vbGVhblxuICB9PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIHByaXZhdGUgc3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+KSB7fVxuXG4gIGFkZFNvdXJjZVR5cGUoXG4gICAgICBzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnksXG4gICAgICBtZXRhZGF0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhfENvbXBpbGVQaXBlTWV0YWRhdGF8XG4gICAgICBDb21waWxlVHlwZU1ldGFkYXRhKSB7XG4gICAgdGhpcy5kYXRhLnB1c2goe3N1bW1hcnksIG1ldGFkYXRhLCBpc0xpYnJhcnk6IGZhbHNlfSk7XG4gIH1cblxuICBhZGRMaWJUeXBlKHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSkge1xuICAgIHRoaXMuZGF0YS5wdXNoKHtzdW1tYXJ5LCBtZXRhZGF0YTogbnVsbCwgaXNMaWJyYXJ5OiB0cnVlfSk7XG4gIH1cblxuICBzZXJpYWxpemUoZXhwb3J0QXNBcnI6IHtzeW1ib2w6IFN0YXRpY1N5bWJvbCwgZXhwb3J0QXM6IHN0cmluZ31bXSk6IHZvaWQge1xuICAgIGNvbnN0IGV4cG9ydEFzQnlTeW1ib2wgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgc3RyaW5nPigpO1xuICAgIGZvciAoY29uc3Qge3N5bWJvbCwgZXhwb3J0QXN9IG9mIGV4cG9ydEFzQXJyKSB7XG4gICAgICBleHBvcnRBc0J5U3ltYm9sLnNldChzeW1ib2wsIGV4cG9ydEFzKTtcbiAgICB9XG4gICAgY29uc3QgbmdNb2R1bGVTeW1ib2xzID0gbmV3IFNldDxTdGF0aWNTeW1ib2w+KCk7XG5cbiAgICBmb3IgKGNvbnN0IHtzdW1tYXJ5LCBtZXRhZGF0YSwgaXNMaWJyYXJ5fSBvZiB0aGlzLmRhdGEpIHtcbiAgICAgIGlmIChzdW1tYXJ5LnN1bW1hcnlLaW5kID09PSBDb21waWxlU3VtbWFyeUtpbmQuTmdNb2R1bGUpIHtcbiAgICAgICAgLy8gY29sbGVjdCB0aGUgc3ltYm9scyB0aGF0IHJlZmVyIHRvIE5nTW9kdWxlIGNsYXNzZXMuXG4gICAgICAgIC8vIE5vdGU6IHdlIGNhbid0IGp1c3QgcmVseSBvbiBgc3VtbWFyeS50eXBlLnN1bW1hcnlLaW5kYCB0byBkZXRlcm1pbmUgdGhpcyBhc1xuICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIHN1bW1hcmllcyBvZiBhbGwgcmVmZXJlbmNlZCBzeW1ib2xzIHdoZW4gd2Ugc2VyaWFsaXplIHR5cGUgc3VtbWFyaWVzLlxuICAgICAgICAvLyBTZWUgc2VyaWFsaXplU3VtbWFyaWVzIGZvciBkZXRhaWxzLlxuICAgICAgICBuZ01vZHVsZVN5bWJvbHMuYWRkKHN1bW1hcnkudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBtb2RTdW1tYXJ5ID0gPENvbXBpbGVOZ01vZHVsZVN1bW1hcnk+c3VtbWFyeTtcbiAgICAgICAgZm9yIChjb25zdCBtb2Qgb2YgbW9kU3VtbWFyeS5tb2R1bGVzKSB7XG4gICAgICAgICAgbmdNb2R1bGVTeW1ib2xzLmFkZChtb2QucmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc0xpYnJhcnkpIHtcbiAgICAgICAgY29uc3QgZm5OYW1lID0gc3VtbWFyeUZvckppdE5hbWUoc3VtbWFyeS50eXBlLnJlZmVyZW5jZS5uYW1lKTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeUZvckppdEZ1bmN0aW9uKFxuICAgICAgICAgICAgdGhpcy5vdXRwdXRDdHgsIHN1bW1hcnkudHlwZS5yZWZlcmVuY2UsXG4gICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZVN1bW1hcnlXaXRoRGVwcyhzdW1tYXJ5LCBtZXRhZGF0YSEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZ01vZHVsZVN5bWJvbHMuZm9yRWFjaCgobmdNb2R1bGVTeW1ib2wpID0+IHtcbiAgICAgIGlmICh0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKG5nTW9kdWxlU3ltYm9sLmZpbGVQYXRoKSkge1xuICAgICAgICBsZXQgZXhwb3J0QXMgPSBleHBvcnRBc0J5U3ltYm9sLmdldChuZ01vZHVsZVN5bWJvbCkgfHwgbmdNb2R1bGVTeW1ib2wubmFtZTtcbiAgICAgICAgY29uc3Qgaml0RXhwb3J0QXNOYW1lID0gc3VtbWFyeUZvckppdE5hbWUoZXhwb3J0QXMpO1xuICAgICAgICB0aGlzLm91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goby52YXJpYWJsZShqaXRFeHBvcnRBc05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldCh0aGlzLnNlcmlhbGl6ZVN1bW1hcnlSZWYobmdNb2R1bGVTeW1ib2wpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RlY2xTdG10KG51bGwsIFtvLlN0bXRNb2RpZmllci5FeHBvcnRlZF0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplU3VtbWFyeVdpdGhEZXBzKFxuICAgICAgc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5LFxuICAgICAgbWV0YWRhdGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YXxDb21waWxlUGlwZU1ldGFkYXRhfFxuICAgICAgQ29tcGlsZVR5cGVNZXRhZGF0YSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IG8uRXhwcmVzc2lvbltdID0gW3RoaXMuc2VyaWFsaXplU3VtbWFyeShzdW1tYXJ5KV07XG4gICAgbGV0IHByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGlmIChtZXRhZGF0YSBpbnN0YW5jZW9mIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhKSB7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlyZWN0aXZlcyAvIHBpcGVzLCB3ZSBvbmx5IGFkZCB0aGUgZGVjbGFyZWQgb25lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHJlbHkgb24gdHJhbnNpdGl2ZWx5IGltcG9ydGluZyBOZ01vZHVsZXMgdG8gZ2V0IHRoZSB0cmFuc2l0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIHN1bW1hcmllcy5cbiAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuZGVjbGFyZWREaXJlY3RpdmVzLmNvbmNhdChtZXRhZGF0YS5kZWNsYXJlZFBpcGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0eXBlID0+IHR5cGUucmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIG1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhbHNvIGFkZCB0aGUgc3VtbWFyaWVzIGZvciBtb2R1bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxpYnJhcmllcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgb2sgYXMgd2UgcHJvZHVjZSByZWV4cG9ydHMgZm9yIGFsbCB0cmFuc2l0aXZlIG1vZHVsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1ldGFkYXRhLnRyYW5zaXRpdmVNb2R1bGUubW9kdWxlcy5tYXAodHlwZSA9PiB0eXBlLnJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocmVmID0+IHJlZiAhPT0gbWV0YWRhdGEudHlwZS5yZWZlcmVuY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVmKSA9PiB0aGlzLnNlcmlhbGl6ZVN1bW1hcnlSZWYocmVmKSkpO1xuICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgdXNlIGBOZ01vZHVsZVN1bW1hcnkucHJvdmlkZXJzYCwgYXMgdGhhdCBvbmUgaXMgdHJhbnNpdGl2ZSxcbiAgICAgIC8vIGFuZCB3ZSBhbHJlYWR5IGhhdmUgdHJhbnNpdGl2ZSBtb2R1bGVzLlxuICAgICAgcHJvdmlkZXJzID0gbWV0YWRhdGEucHJvdmlkZXJzO1xuICAgIH0gZWxzZSBpZiAoc3VtbWFyeS5zdW1tYXJ5S2luZCA9PT0gQ29tcGlsZVN1bW1hcnlLaW5kLkRpcmVjdGl2ZSkge1xuICAgICAgY29uc3QgZGlyU3VtbWFyeSA9IDxDb21waWxlRGlyZWN0aXZlU3VtbWFyeT5zdW1tYXJ5O1xuICAgICAgcHJvdmlkZXJzID0gZGlyU3VtbWFyeS5wcm92aWRlcnMuY29uY2F0KGRpclN1bW1hcnkudmlld1Byb3ZpZGVycyk7XG4gICAgfVxuICAgIC8vIE5vdGU6IFdlIGNhbid0IGp1c3QgcmVmZXIgdG8gdGhlIGBuZ3N1bW1hcnkudHNgIGZpbGVzIGZvciBgdXNlQ2xhc3NgIHByb3ZpZGVycyAoYXMgd2UgZG8gZm9yXG4gICAgLy8gZGVjbGFyZWREaXJlY3RpdmVzIC8gZGVjbGFyZWRQaXBlcyksIGFzIHdlIGFsbG93XG4gICAgLy8gcHJvdmlkZXJzIHdpdGhvdXQgY3RvciBhcmd1bWVudHMgdG8gc2tpcCB0aGUgYEBJbmplY3RhYmxlYCBkZWNvcmF0b3IsXG4gICAgLy8gaS5lLiB3ZSBkaWRuJ3QgZ2VuZXJhdGUgLm5nc3VtbWFyeS50cyBmaWxlcyBmb3IgdGhlc2UuXG4gICAgZXhwcmVzc2lvbnMucHVzaChcbiAgICAgICAgLi4ucHJvdmlkZXJzLmZpbHRlcihwcm92aWRlciA9PiAhIXByb3ZpZGVyLnVzZUNsYXNzKS5tYXAocHJvdmlkZXIgPT4gdGhpcy5zZXJpYWxpemVTdW1tYXJ5KHtcbiAgICAgICAgICBzdW1tYXJ5S2luZDogQ29tcGlsZVN1bW1hcnlLaW5kLkluamVjdGFibGUsXG4gICAgICAgICAgdHlwZTogcHJvdmlkZXIudXNlQ2xhc3NcbiAgICAgICAgfSBhcyBDb21waWxlVHlwZVN1bW1hcnkpKSk7XG4gICAgcmV0dXJuIG8ubGl0ZXJhbEFycihleHByZXNzaW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVN1bW1hcnlSZWYodHlwZVN5bWJvbDogU3RhdGljU3ltYm9sKTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBqaXRJbXBvcnRlZFN5bWJvbCA9IHRoaXMuc3ltYm9sUmVzb2x2ZXIuZ2V0U3RhdGljU3ltYm9sKFxuICAgICAgICBzdW1tYXJ5Rm9ySml0RmlsZU5hbWUodHlwZVN5bWJvbC5maWxlUGF0aCksIHN1bW1hcnlGb3JKaXROYW1lKHR5cGVTeW1ib2wubmFtZSkpO1xuICAgIHJldHVybiB0aGlzLm91dHB1dEN0eC5pbXBvcnRFeHByKGppdEltcG9ydGVkU3ltYm9sKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplU3VtbWFyeShkYXRhOiB7W2tleTogc3RyaW5nXTogYW55fSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgY29uc3Qgb3V0cHV0Q3R4ID0gdGhpcy5vdXRwdXRDdHg7XG5cbiAgICBjbGFzcyBUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIFZhbHVlVmlzaXRvciB7XG4gICAgICB2aXNpdEFycmF5KGFycjogYW55W10sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBvLmxpdGVyYWxBcnIoYXJyLm1hcChlbnRyeSA9PiB2aXNpdFZhbHVlKGVudHJ5LCB0aGlzLCBjb250ZXh0KSkpO1xuICAgICAgfVxuICAgICAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIG5ldyBvLkxpdGVyYWxNYXBFeHByKE9iamVjdC5rZXlzKG1hcCkubWFwKFxuICAgICAgICAgICAgKGtleSkgPT4gbmV3IG8uTGl0ZXJhbE1hcEVudHJ5KGtleSwgdmlzaXRWYWx1ZShtYXBba2V5XSwgdGhpcywgY29udGV4dCksIGZhbHNlKSkpO1xuICAgICAgfVxuICAgICAgdmlzaXRQcmltaXRpdmUodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIG8ubGl0ZXJhbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2aXNpdE90aGVyKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICAgIHJldHVybiBvdXRwdXRDdHguaW1wb3J0RXhwcih2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBFbmNvdW50ZXJlZCB2YWx1ZSAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0VmFsdWUoZGF0YSwgbmV3IFRyYW5zZm9ybWVyKCksIG51bGwpO1xuICB9XG59XG5cbmNsYXNzIEZyb21Kc29uRGVzZXJpYWxpemVyIGV4dGVuZHMgVmFsdWVUcmFuc2Zvcm1lciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIHN5bWJvbHMhOiBTdGF0aWNTeW1ib2xbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc3ltYm9sQ2FjaGU6IFN0YXRpY1N5bWJvbENhY2hlLFxuICAgICAgcHJpdmF0ZSBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKGxpYnJhcnlGaWxlTmFtZTogc3RyaW5nLCBqc29uOiBzdHJpbmcpOiB7XG4gICAgbW9kdWxlTmFtZTogc3RyaW5nfG51bGwsXG4gICAgc3VtbWFyaWVzOiBTdW1tYXJ5PFN0YXRpY1N5bWJvbD5bXSxcbiAgICBpbXBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBpbXBvcnRBczogU3RhdGljU3ltYm9sfVtdXG4gIH0ge1xuICAgIGNvbnN0IGRhdGE6IHttb2R1bGVOYW1lOiBzdHJpbmd8bnVsbCwgc3VtbWFyaWVzOiBhbnlbXSwgc3ltYm9sczogYW55W119ID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBjb25zdCBhbGxJbXBvcnRBczoge3N5bWJvbDogU3RhdGljU3ltYm9sLCBpbXBvcnRBczogU3RhdGljU3ltYm9sfVtdID0gW107XG4gICAgdGhpcy5zeW1ib2xzID0gZGF0YS5zeW1ib2xzLm1hcChcbiAgICAgICAgKHNlcmlhbGl6ZWRTeW1ib2wpID0+IHRoaXMuc3ltYm9sQ2FjaGUuZ2V0KFxuICAgICAgICAgICAgdGhpcy5zdW1tYXJ5UmVzb2x2ZXIuZnJvbVN1bW1hcnlGaWxlTmFtZShzZXJpYWxpemVkU3ltYm9sLmZpbGVQYXRoLCBsaWJyYXJ5RmlsZU5hbWUpLFxuICAgICAgICAgICAgc2VyaWFsaXplZFN5bWJvbC5uYW1lKSk7XG4gICAgZGF0YS5zeW1ib2xzLmZvckVhY2goKHNlcmlhbGl6ZWRTeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbHNbaW5kZXhdO1xuICAgICAgY29uc3QgaW1wb3J0QXMgPSBzZXJpYWxpemVkU3ltYm9sLmltcG9ydEFzO1xuICAgICAgaWYgKHR5cGVvZiBpbXBvcnRBcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWxsSW1wb3J0QXMucHVzaCh7c3ltYm9sLCBpbXBvcnRBczogdGhpcy5zeW1ib2xzW2ltcG9ydEFzXX0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0QXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFsbEltcG9ydEFzLnB1c2goXG4gICAgICAgICAgICB7c3ltYm9sLCBpbXBvcnRBczogdGhpcy5zeW1ib2xDYWNoZS5nZXQobmdmYWN0b3J5RmlsZVBhdGgobGlicmFyeUZpbGVOYW1lKSwgaW1wb3J0QXMpfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc3VtbWFyaWVzID0gdmlzaXRWYWx1ZShkYXRhLnN1bW1hcmllcywgdGhpcywgbnVsbCkgYXMgU3VtbWFyeTxTdGF0aWNTeW1ib2w+W107XG4gICAgcmV0dXJuIHttb2R1bGVOYW1lOiBkYXRhLm1vZHVsZU5hbWUsIHN1bW1hcmllcywgaW1wb3J0QXM6IGFsbEltcG9ydEFzfTtcbiAgfVxuXG4gIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCdfX3N5bWJvbCcgaW4gbWFwKSB7XG4gICAgICBjb25zdCBiYXNlU3ltYm9sID0gdGhpcy5zeW1ib2xzW21hcFsnX19zeW1ib2wnXV07XG4gICAgICBjb25zdCBtZW1iZXJzID0gbWFwWydtZW1iZXJzJ107XG4gICAgICByZXR1cm4gbWVtYmVycy5sZW5ndGggPyB0aGlzLnN5bWJvbENhY2hlLmdldChiYXNlU3ltYm9sLmZpbGVQYXRoLCBiYXNlU3ltYm9sLm5hbWUsIG1lbWJlcnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci52aXNpdFN0cmluZ01hcChtYXAsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NhbGwobWV0YWRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbWV0YWRhdGEgJiYgbWV0YWRhdGEuX19zeW1ib2xpYyA9PT0gJ2NhbGwnO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uQ2FsbChtZXRhZGF0YTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0NhbGwobWV0YWRhdGEpICYmIHVud3JhcFJlc29sdmVkTWV0YWRhdGEobWV0YWRhdGEuZXhwcmVzc2lvbikgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2w7XG59XG5cbmZ1bmN0aW9uIGlzTWV0aG9kQ2FsbE9uVmFyaWFibGUobWV0YWRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNDYWxsKG1ldGFkYXRhKSAmJiBtZXRhZGF0YS5leHByZXNzaW9uICYmIG1ldGFkYXRhLmV4cHJlc3Npb24uX19zeW1ib2xpYyA9PT0gJ3NlbGVjdCcgJiZcbiAgICAgIHVud3JhcFJlc29sdmVkTWV0YWRhdGEobWV0YWRhdGEuZXhwcmVzc2lvbi5leHByZXNzaW9uKSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbDtcbn1cbiJdfQ==