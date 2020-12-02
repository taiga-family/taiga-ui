/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __extends, __read, __spread, __values } from "tslib";
import { ValueTransformer, visitValue } from '../util';
import { StaticSymbol } from './static_symbol';
import { isGeneratedFile, stripSummaryForJitFileSuffix, stripSummaryForJitNameSuffix, summaryForJitFileName, summaryForJitName } from './util';
var TS = /^(?!.*\.d\.ts$).*\.ts$/;
var ResolvedStaticSymbol = /** @class */ (function () {
    function ResolvedStaticSymbol(symbol, metadata) {
        this.symbol = symbol;
        this.metadata = metadata;
    }
    return ResolvedStaticSymbol;
}());
export { ResolvedStaticSymbol };
var SUPPORTED_SCHEMA_VERSION = 4;
/**
 * This class is responsible for loading metadata per symbol,
 * and normalizing references between symbols.
 *
 * Internally, it only uses symbols without members,
 * and deduces the values for symbols with members based
 * on these symbols.
 */
var StaticSymbolResolver = /** @class */ (function () {
    function StaticSymbolResolver(host, staticSymbolCache, summaryResolver, errorRecorder) {
        this.host = host;
        this.staticSymbolCache = staticSymbolCache;
        this.summaryResolver = summaryResolver;
        this.errorRecorder = errorRecorder;
        this.metadataCache = new Map();
        // Note: this will only contain StaticSymbols without members!
        this.resolvedSymbols = new Map();
        // Note: this will only contain StaticSymbols without members!
        this.importAs = new Map();
        this.symbolResourcePaths = new Map();
        this.symbolFromFile = new Map();
        this.knownFileNameToModuleNames = new Map();
    }
    StaticSymbolResolver.prototype.resolveSymbol = function (staticSymbol) {
        if (staticSymbol.members.length > 0) {
            return this._resolveSymbolMembers(staticSymbol);
        }
        // Note: always ask for a summary first,
        // as we might have read shallow metadata via a .d.ts file
        // for the symbol.
        var resultFromSummary = this._resolveSymbolFromSummary(staticSymbol);
        if (resultFromSummary) {
            return resultFromSummary;
        }
        var resultFromCache = this.resolvedSymbols.get(staticSymbol);
        if (resultFromCache) {
            return resultFromCache;
        }
        // Note: Some users use libraries that were not compiled with ngc, i.e. they don't
        // have summaries, only .d.ts files. So we always need to check both, the summary
        // and metadata.
        this._createSymbolsOf(staticSymbol.filePath);
        return this.resolvedSymbols.get(staticSymbol);
    };
    /**
     * getImportAs produces a symbol that can be used to import the given symbol.
     * The import might be different than the symbol if the symbol is exported from
     * a library with a summary; in which case we want to import the symbol from the
     * ngfactory re-export instead of directly to avoid introducing a direct dependency
     * on an otherwise indirect dependency.
     *
     * @param staticSymbol the symbol for which to generate a import symbol
     */
    StaticSymbolResolver.prototype.getImportAs = function (staticSymbol, useSummaries) {
        if (useSummaries === void 0) { useSummaries = true; }
        if (staticSymbol.members.length) {
            var baseSymbol = this.getStaticSymbol(staticSymbol.filePath, staticSymbol.name);
            var baseImportAs = this.getImportAs(baseSymbol, useSummaries);
            return baseImportAs ?
                this.getStaticSymbol(baseImportAs.filePath, baseImportAs.name, staticSymbol.members) :
                null;
        }
        var summarizedFileName = stripSummaryForJitFileSuffix(staticSymbol.filePath);
        if (summarizedFileName !== staticSymbol.filePath) {
            var summarizedName = stripSummaryForJitNameSuffix(staticSymbol.name);
            var baseSymbol = this.getStaticSymbol(summarizedFileName, summarizedName, staticSymbol.members);
            var baseImportAs = this.getImportAs(baseSymbol, useSummaries);
            return baseImportAs ? this.getStaticSymbol(summaryForJitFileName(baseImportAs.filePath), summaryForJitName(baseImportAs.name), baseSymbol.members) :
                null;
        }
        var result = (useSummaries && this.summaryResolver.getImportAs(staticSymbol)) || null;
        if (!result) {
            result = this.importAs.get(staticSymbol);
        }
        return result;
    };
    /**
     * getResourcePath produces the path to the original location of the symbol and should
     * be used to determine the relative location of resource references recorded in
     * symbol metadata.
     */
    StaticSymbolResolver.prototype.getResourcePath = function (staticSymbol) {
        return this.symbolResourcePaths.get(staticSymbol) || staticSymbol.filePath;
    };
    /**
     * getTypeArity returns the number of generic type parameters the given symbol
     * has. If the symbol is not a type the result is null.
     */
    StaticSymbolResolver.prototype.getTypeArity = function (staticSymbol) {
        // If the file is a factory/ngsummary file, don't resolve the symbol as doing so would
        // cause the metadata for an factory/ngsummary file to be loaded which doesn't exist.
        // All references to generated classes must include the correct arity whenever
        // generating code.
        if (isGeneratedFile(staticSymbol.filePath)) {
            return null;
        }
        var resolvedSymbol = unwrapResolvedMetadata(this.resolveSymbol(staticSymbol));
        while (resolvedSymbol && resolvedSymbol.metadata instanceof StaticSymbol) {
            resolvedSymbol = unwrapResolvedMetadata(this.resolveSymbol(resolvedSymbol.metadata));
        }
        return (resolvedSymbol && resolvedSymbol.metadata && resolvedSymbol.metadata.arity) || null;
    };
    StaticSymbolResolver.prototype.getKnownModuleName = function (filePath) {
        return this.knownFileNameToModuleNames.get(filePath) || null;
    };
    StaticSymbolResolver.prototype.recordImportAs = function (sourceSymbol, targetSymbol) {
        sourceSymbol.assertNoMembers();
        targetSymbol.assertNoMembers();
        this.importAs.set(sourceSymbol, targetSymbol);
    };
    StaticSymbolResolver.prototype.recordModuleNameForFileName = function (fileName, moduleName) {
        this.knownFileNameToModuleNames.set(fileName, moduleName);
    };
    /**
     * Invalidate all information derived from the given file and return the
     * static symbols contained in the file.
     *
     * @param fileName the file to invalidate
     */
    StaticSymbolResolver.prototype.invalidateFile = function (fileName) {
        var e_1, _a;
        this.metadataCache.delete(fileName);
        var symbols = this.symbolFromFile.get(fileName);
        if (!symbols) {
            return [];
        }
        this.symbolFromFile.delete(fileName);
        try {
            for (var symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                var symbol = symbols_1_1.value;
                this.resolvedSymbols.delete(symbol);
                this.importAs.delete(symbol);
                this.symbolResourcePaths.delete(symbol);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return symbols;
    };
    /** @internal */
    StaticSymbolResolver.prototype.ignoreErrorsFor = function (cb) {
        var recorder = this.errorRecorder;
        this.errorRecorder = function () { };
        try {
            return cb();
        }
        finally {
            this.errorRecorder = recorder;
        }
    };
    StaticSymbolResolver.prototype._resolveSymbolMembers = function (staticSymbol) {
        var members = staticSymbol.members;
        var baseResolvedSymbol = this.resolveSymbol(this.getStaticSymbol(staticSymbol.filePath, staticSymbol.name));
        if (!baseResolvedSymbol) {
            return null;
        }
        var baseMetadata = unwrapResolvedMetadata(baseResolvedSymbol.metadata);
        if (baseMetadata instanceof StaticSymbol) {
            return new ResolvedStaticSymbol(staticSymbol, this.getStaticSymbol(baseMetadata.filePath, baseMetadata.name, members));
        }
        else if (baseMetadata && baseMetadata.__symbolic === 'class') {
            if (baseMetadata.statics && members.length === 1) {
                return new ResolvedStaticSymbol(staticSymbol, baseMetadata.statics[members[0]]);
            }
        }
        else {
            var value = baseMetadata;
            for (var i = 0; i < members.length && value; i++) {
                value = value[members[i]];
            }
            return new ResolvedStaticSymbol(staticSymbol, value);
        }
        return null;
    };
    StaticSymbolResolver.prototype._resolveSymbolFromSummary = function (staticSymbol) {
        var summary = this.summaryResolver.resolveSummary(staticSymbol);
        return summary ? new ResolvedStaticSymbol(staticSymbol, summary.metadata) : null;
    };
    /**
     * getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
     * All types passed to the StaticResolver should be pseudo-types returned by this method.
     *
     * @param declarationFile the absolute path of the file where the symbol is declared
     * @param name the name of the type.
     * @param members a symbol for a static member of the named type
     */
    StaticSymbolResolver.prototype.getStaticSymbol = function (declarationFile, name, members) {
        return this.staticSymbolCache.get(declarationFile, name, members);
    };
    /**
     * hasDecorators checks a file's metadata for the presence of decorators without evaluating the
     * metadata.
     *
     * @param filePath the absolute path to examine for decorators.
     * @returns true if any class in the file has a decorator.
     */
    StaticSymbolResolver.prototype.hasDecorators = function (filePath) {
        var metadata = this.getModuleMetadata(filePath);
        if (metadata['metadata']) {
            return Object.keys(metadata['metadata']).some(function (metadataKey) {
                var entry = metadata['metadata'][metadataKey];
                return entry && entry.__symbolic === 'class' && entry.decorators;
            });
        }
        return false;
    };
    StaticSymbolResolver.prototype.getSymbolsOf = function (filePath) {
        var summarySymbols = this.summaryResolver.getSymbolsOf(filePath);
        if (summarySymbols) {
            return summarySymbols;
        }
        // Note: Some users use libraries that were not compiled with ngc, i.e. they don't
        // have summaries, only .d.ts files, but `summaryResolver.isLibraryFile` returns true.
        this._createSymbolsOf(filePath);
        return this.symbolFromFile.get(filePath) || [];
    };
    StaticSymbolResolver.prototype._createSymbolsOf = function (filePath) {
        var e_2, _a, e_3, _b;
        var _this = this;
        if (this.symbolFromFile.has(filePath)) {
            return;
        }
        var resolvedSymbols = [];
        var metadata = this.getModuleMetadata(filePath);
        if (metadata['importAs']) {
            // Index bundle indices should use the importAs module name defined
            // in the bundle.
            this.knownFileNameToModuleNames.set(filePath, metadata['importAs']);
        }
        // handle the symbols in one of the re-export location
        if (metadata['exports']) {
            var _loop_1 = function (moduleExport) {
                // handle the symbols in the list of explicitly re-exported symbols.
                if (moduleExport.export) {
                    moduleExport.export.forEach(function (exportSymbol) {
                        var symbolName;
                        if (typeof exportSymbol === 'string') {
                            symbolName = exportSymbol;
                        }
                        else {
                            symbolName = exportSymbol.as;
                        }
                        symbolName = unescapeIdentifier(symbolName);
                        var symName = symbolName;
                        if (typeof exportSymbol !== 'string') {
                            symName = unescapeIdentifier(exportSymbol.name);
                        }
                        var resolvedModule = _this.resolveModule(moduleExport.from, filePath);
                        if (resolvedModule) {
                            var targetSymbol = _this.getStaticSymbol(resolvedModule, symName);
                            var sourceSymbol = _this.getStaticSymbol(filePath, symbolName);
                            resolvedSymbols.push(_this.createExport(sourceSymbol, targetSymbol));
                        }
                    });
                }
                else {
                    // Handle the symbols loaded by 'export *' directives.
                    var resolvedModule = this_1.resolveModule(moduleExport.from, filePath);
                    if (resolvedModule && resolvedModule !== filePath) {
                        var nestedExports = this_1.getSymbolsOf(resolvedModule);
                        nestedExports.forEach(function (targetSymbol) {
                            var sourceSymbol = _this.getStaticSymbol(filePath, targetSymbol.name);
                            resolvedSymbols.push(_this.createExport(sourceSymbol, targetSymbol));
                        });
                    }
                }
            };
            var this_1 = this;
            try {
                for (var _c = __values(metadata['exports']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var moduleExport = _d.value;
                    _loop_1(moduleExport);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        // handle the actual metadata. Has to be after the exports
        // as there might be collisions in the names, and we want the symbols
        // of the current module to win ofter reexports.
        if (metadata['metadata']) {
            // handle direct declarations of the symbol
            var topLevelSymbolNames_1 = new Set(Object.keys(metadata['metadata']).map(unescapeIdentifier));
            var origins_1 = metadata['origins'] || {};
            Object.keys(metadata['metadata']).forEach(function (metadataKey) {
                var symbolMeta = metadata['metadata'][metadataKey];
                var name = unescapeIdentifier(metadataKey);
                var symbol = _this.getStaticSymbol(filePath, name);
                var origin = origins_1.hasOwnProperty(metadataKey) && origins_1[metadataKey];
                if (origin) {
                    // If the symbol is from a bundled index, use the declaration location of the
                    // symbol so relative references (such as './my.html') will be calculated
                    // correctly.
                    var originFilePath = _this.resolveModule(origin, filePath);
                    if (!originFilePath) {
                        _this.reportError(new Error("Couldn't resolve original symbol for " + origin + " from " + _this.host.getOutputName(filePath)));
                    }
                    else {
                        _this.symbolResourcePaths.set(symbol, originFilePath);
                    }
                }
                resolvedSymbols.push(_this.createResolvedSymbol(symbol, filePath, topLevelSymbolNames_1, symbolMeta));
            });
        }
        var uniqueSymbols = new Set();
        try {
            for (var resolvedSymbols_1 = __values(resolvedSymbols), resolvedSymbols_1_1 = resolvedSymbols_1.next(); !resolvedSymbols_1_1.done; resolvedSymbols_1_1 = resolvedSymbols_1.next()) {
                var resolvedSymbol = resolvedSymbols_1_1.value;
                this.resolvedSymbols.set(resolvedSymbol.symbol, resolvedSymbol);
                uniqueSymbols.add(resolvedSymbol.symbol);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (resolvedSymbols_1_1 && !resolvedSymbols_1_1.done && (_b = resolvedSymbols_1.return)) _b.call(resolvedSymbols_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.symbolFromFile.set(filePath, Array.from(uniqueSymbols));
    };
    StaticSymbolResolver.prototype.createResolvedSymbol = function (sourceSymbol, topLevelPath, topLevelSymbolNames, metadata) {
        var _this = this;
        // For classes that don't have Angular summaries / metadata,
        // we only keep their arity, but nothing else
        // (e.g. their constructor parameters).
        // We do this to prevent introducing deep imports
        // as we didn't generate .ngfactory.ts files with proper reexports.
        var isTsFile = TS.test(sourceSymbol.filePath);
        if (this.summaryResolver.isLibraryFile(sourceSymbol.filePath) && !isTsFile && metadata &&
            metadata['__symbolic'] === 'class') {
            var transformedMeta_1 = { __symbolic: 'class', arity: metadata.arity };
            return new ResolvedStaticSymbol(sourceSymbol, transformedMeta_1);
        }
        var _originalFileMemo;
        var getOriginalName = function () {
            if (!_originalFileMemo) {
                // Guess what the original file name is from the reference. If it has a `.d.ts` extension
                // replace it with `.ts`. If it already has `.ts` just leave it in place. If it doesn't have
                // .ts or .d.ts, append `.ts'. Also, if it is in `node_modules`, trim the `node_module`
                // location as it is not important to finding the file.
                _originalFileMemo =
                    _this.host.getOutputName(topLevelPath.replace(/((\.ts)|(\.d\.ts)|)$/, '.ts')
                        .replace(/^.*node_modules[/\\]/, ''));
            }
            return _originalFileMemo;
        };
        var self = this;
        var ReferenceTransformer = /** @class */ (function (_super) {
            __extends(ReferenceTransformer, _super);
            function ReferenceTransformer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ReferenceTransformer.prototype.visitStringMap = function (map, functionParams) {
                var symbolic = map['__symbolic'];
                if (symbolic === 'function') {
                    var oldLen = functionParams.length;
                    functionParams.push.apply(functionParams, __spread((map['parameters'] || [])));
                    var result = _super.prototype.visitStringMap.call(this, map, functionParams);
                    functionParams.length = oldLen;
                    return result;
                }
                else if (symbolic === 'reference') {
                    var module = map['module'];
                    var name_1 = map['name'] ? unescapeIdentifier(map['name']) : map['name'];
                    if (!name_1) {
                        return null;
                    }
                    var filePath = void 0;
                    if (module) {
                        filePath = self.resolveModule(module, sourceSymbol.filePath);
                        if (!filePath) {
                            return {
                                __symbolic: 'error',
                                message: "Could not resolve " + module + " relative to " + self.host.getMetadataFor(sourceSymbol.filePath) + ".",
                                line: map['line'],
                                character: map['character'],
                                fileName: getOriginalName()
                            };
                        }
                        return {
                            __symbolic: 'resolved',
                            symbol: self.getStaticSymbol(filePath, name_1),
                            line: map['line'],
                            character: map['character'],
                            fileName: getOriginalName()
                        };
                    }
                    else if (functionParams.indexOf(name_1) >= 0) {
                        // reference to a function parameter
                        return { __symbolic: 'reference', name: name_1 };
                    }
                    else {
                        if (topLevelSymbolNames.has(name_1)) {
                            return self.getStaticSymbol(topLevelPath, name_1);
                        }
                        // ambient value
                        null;
                    }
                }
                else if (symbolic === 'error') {
                    return __assign(__assign({}, map), { fileName: getOriginalName() });
                }
                else {
                    return _super.prototype.visitStringMap.call(this, map, functionParams);
                }
            };
            return ReferenceTransformer;
        }(ValueTransformer));
        var transformedMeta = visitValue(metadata, new ReferenceTransformer(), []);
        var unwrappedTransformedMeta = unwrapResolvedMetadata(transformedMeta);
        if (unwrappedTransformedMeta instanceof StaticSymbol) {
            return this.createExport(sourceSymbol, unwrappedTransformedMeta);
        }
        return new ResolvedStaticSymbol(sourceSymbol, transformedMeta);
    };
    StaticSymbolResolver.prototype.createExport = function (sourceSymbol, targetSymbol) {
        sourceSymbol.assertNoMembers();
        targetSymbol.assertNoMembers();
        if (this.summaryResolver.isLibraryFile(sourceSymbol.filePath) &&
            this.summaryResolver.isLibraryFile(targetSymbol.filePath)) {
            // This case is for an ng library importing symbols from a plain ts library
            // transitively.
            // Note: We rely on the fact that we discover symbols in the direction
            // from source files to library files
            this.importAs.set(targetSymbol, this.getImportAs(sourceSymbol) || sourceSymbol);
        }
        return new ResolvedStaticSymbol(sourceSymbol, targetSymbol);
    };
    StaticSymbolResolver.prototype.reportError = function (error, context, path) {
        if (this.errorRecorder) {
            this.errorRecorder(error, (context && context.filePath) || path);
        }
        else {
            throw error;
        }
    };
    /**
     * @param module an absolute path to a module file.
     */
    StaticSymbolResolver.prototype.getModuleMetadata = function (module) {
        var moduleMetadata = this.metadataCache.get(module);
        if (!moduleMetadata) {
            var moduleMetadatas = this.host.getMetadataFor(module);
            if (moduleMetadatas) {
                var maxVersion_1 = -1;
                moduleMetadatas.forEach(function (md) {
                    if (md && md['version'] > maxVersion_1) {
                        maxVersion_1 = md['version'];
                        moduleMetadata = md;
                    }
                });
            }
            if (!moduleMetadata) {
                moduleMetadata =
                    { __symbolic: 'module', version: SUPPORTED_SCHEMA_VERSION, module: module, metadata: {} };
            }
            if (moduleMetadata['version'] != SUPPORTED_SCHEMA_VERSION) {
                var errorMessage = moduleMetadata['version'] == 2 ?
                    "Unsupported metadata version " + moduleMetadata['version'] + " for module " + module + ". This module should be compiled with a newer version of ngc" :
                    "Metadata version mismatch for module " + this.host.getOutputName(module) + ", found version " + moduleMetadata['version'] + ", expected " + SUPPORTED_SCHEMA_VERSION;
                this.reportError(new Error(errorMessage));
            }
            this.metadataCache.set(module, moduleMetadata);
        }
        return moduleMetadata;
    };
    StaticSymbolResolver.prototype.getSymbolByModule = function (module, symbolName, containingFile) {
        var filePath = this.resolveModule(module, containingFile);
        if (!filePath) {
            this.reportError(new Error("Could not resolve module " + module + (containingFile ? ' relative to ' + this.host.getOutputName(containingFile) : '')));
            return this.getStaticSymbol("ERROR:" + module, symbolName);
        }
        return this.getStaticSymbol(filePath, symbolName);
    };
    StaticSymbolResolver.prototype.resolveModule = function (module, containingFile) {
        try {
            return this.host.moduleNameToFileName(module, containingFile);
        }
        catch (e) {
            console.error("Could not resolve module '" + module + "' relative to file " + containingFile);
            this.reportError(e, undefined, containingFile);
        }
        return null;
    };
    return StaticSymbolResolver;
}());
export { StaticSymbolResolver };
// Remove extra underscore from escaped identifier.
// See https://github.com/Microsoft/TypeScript/blob/master/src/compiler/utilities.ts
export function unescapeIdentifier(identifier) {
    return identifier.startsWith('___') ? identifier.substr(1) : identifier;
}
export function unwrapResolvedMetadata(metadata) {
    if (metadata && metadata.__symbolic === 'resolved') {
        return metadata.symbol;
    }
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3N5bWJvbF9yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3Qvc3RhdGljX3N5bWJvbF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBR0gsT0FBTyxFQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVyRCxPQUFPLEVBQUMsWUFBWSxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFN0ksSUFBTSxFQUFFLEdBQUcsd0JBQXdCLENBQUM7QUFFcEM7SUFDRSw4QkFBbUIsTUFBb0IsRUFBUyxRQUFhO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUNuRSwyQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQWlDRCxJQUFNLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUVuQzs7Ozs7OztHQU9HO0FBQ0g7SUFVRSw4QkFDWSxJQUE4QixFQUFVLGlCQUFvQyxFQUM1RSxlQUE4QyxFQUM5QyxhQUF1RDtRQUZ2RCxTQUFJLEdBQUosSUFBSSxDQUEwQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUUsb0JBQWUsR0FBZixlQUFlLENBQStCO1FBQzlDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQztRQVozRCxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFnQyxDQUFDO1FBQ2hFLDhEQUE4RDtRQUN0RCxvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFzQyxDQUFDO1FBQ3hFLDhEQUE4RDtRQUN0RCxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQThC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KiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1N1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi4vc3VtbWFyeV9yZXNvbHZlcic7XG5pbXBvcnQge1ZhbHVlVHJhbnNmb3JtZXIsIHZpc2l0VmFsdWV9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge1N0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sQ2FjaGV9IGZyb20gJy4vc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge2lzR2VuZXJhdGVkRmlsZSwgc3RyaXBTdW1tYXJ5Rm9ySml0RmlsZVN1ZmZpeCwgc3RyaXBTdW1tYXJ5Rm9ySml0TmFtZVN1ZmZpeCwgc3VtbWFyeUZvckppdEZpbGVOYW1lLCBzdW1tYXJ5Rm9ySml0TmFtZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgVFMgPSAvXig/IS4qXFwuZFxcLnRzJCkuKlxcLnRzJC87XG5cbmV4cG9ydCBjbGFzcyBSZXNvbHZlZFN0YXRpY1N5bWJvbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzeW1ib2w6IFN0YXRpY1N5bWJvbCwgcHVibGljIG1ldGFkYXRhOiBhbnkpIHt9XG59XG5cbi8qKlxuICogVGhlIGhvc3Qgb2YgdGhlIFN5bWJvbFJlc29sdmVySG9zdCBkaXNjb25uZWN0cyB0aGUgaW1wbGVtZW50YXRpb24gZnJvbSBUeXBlU2NyaXB0IC8gb3RoZXJcbiAqIGxhbmd1YWdlXG4gKiBzZXJ2aWNlcyBhbmQgZnJvbSB1bmRlcmx5aW5nIGZpbGUgc3lzdGVtcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGF0aWNTeW1ib2xSZXNvbHZlckhvc3Qge1xuICAvKipcbiAgICogUmV0dXJuIGEgTW9kdWxlTWV0YWRhdGEgZm9yIHRoZSBnaXZlbiBtb2R1bGUuXG4gICAqIEFuZ3VsYXIgQ0xJIHdpbGwgcHJvZHVjZSB0aGlzIG1ldGFkYXRhIGZvciBhIG1vZHVsZSB3aGVuZXZlciBhIC5kLnRzIGZpbGVzIGlzXG4gICAqIHByb2R1Y2VkIGFuZCB0aGUgbW9kdWxlIGhhcyBleHBvcnRlZCB2YXJpYWJsZXMgb3IgY2xhc3NlcyB3aXRoIGRlY29yYXRvcnMuIE1vZHVsZSBtZXRhZGF0YSBjYW5cbiAgICogYWxzbyBiZSBwcm9kdWNlZCBkaXJlY3RseSBmcm9tIFR5cGVTY3JpcHQgc291cmNlcyBieSB1c2luZyBNZXRhZGF0YUNvbGxlY3RvciBpbiB0b29scy9tZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIG1vZHVsZVBhdGggaXMgYSBzdHJpbmcgaWRlbnRpZmllciBmb3IgYSBtb2R1bGUgYXMgYW4gYWJzb2x1dGUgcGF0aC5cbiAgICogQHJldHVybnMgdGhlIG1ldGFkYXRhIGZvciB0aGUgZ2l2ZW4gbW9kdWxlLlxuICAgKi9cbiAgZ2V0TWV0YWRhdGFGb3IobW9kdWxlUGF0aDogc3RyaW5nKToge1trZXk6IHN0cmluZ106IGFueX1bXXx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgbW9kdWxlIG5hbWUgdGhhdCBpcyB1c2VkIGluIGFuIGBpbXBvcnRgIHRvIGEgZmlsZSBwYXRoLlxuICAgKiBJLmUuXG4gICAqIGBwYXRoL3RvL2NvbnRhaW5pbmdGaWxlLnRzYCBjb250YWluaW5nIGBpbXBvcnQgey4uLn0gZnJvbSAnbW9kdWxlLW5hbWUnYC5cbiAgICovXG4gIG1vZHVsZU5hbWVUb0ZpbGVOYW1lKG1vZHVsZU5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGU/OiBzdHJpbmcpOiBzdHJpbmd8bnVsbDtcblxuICAvKipcbiAgICogR2V0IGEgZmlsZSBzdWl0YWJsZSBmb3IgZGlzcGxheSB0byB0aGUgdXNlciB0aGF0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgcHJvamVjdCBkaXJlY3RvcnlcbiAgICogb3IgdGhlIGN1cnJlbnQgZGlyZWN0b3J5LlxuICAgKi9cbiAgZ2V0T3V0cHV0TmFtZShmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBTVVBQT1JURURfU0NIRU1BX1ZFUlNJT04gPSA0O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcgbWV0YWRhdGEgcGVyIHN5bWJvbCxcbiAqIGFuZCBub3JtYWxpemluZyByZWZlcmVuY2VzIGJldHdlZW4gc3ltYm9scy5cbiAqXG4gKiBJbnRlcm5hbGx5LCBpdCBvbmx5IHVzZXMgc3ltYm9scyB3aXRob3V0IG1lbWJlcnMsXG4gKiBhbmQgZGVkdWNlcyB0aGUgdmFsdWVzIGZvciBzeW1ib2xzIHdpdGggbWVtYmVycyBiYXNlZFxuICogb24gdGhlc2Ugc3ltYm9scy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRpY1N5bWJvbFJlc29sdmVyIHtcbiAgcHJpdmF0ZSBtZXRhZGF0YUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIHtba2V5OiBzdHJpbmddOiBhbnl9PigpO1xuICAvLyBOb3RlOiB0aGlzIHdpbGwgb25seSBjb250YWluIFN0YXRpY1N5bWJvbHMgd2l0aG91dCBtZW1iZXJzIVxuICBwcml2YXRlIHJlc29sdmVkU3ltYm9scyA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBSZXNvbHZlZFN0YXRpY1N5bWJvbD4oKTtcbiAgLy8gTm90ZTogdGhpcyB3aWxsIG9ubHkgY29udGFpbiBTdGF0aWNTeW1ib2xzIHdpdGhvdXQgbWVtYmVycyFcbiAgcHJpdmF0ZSBpbXBvcnRBcyA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBTdGF0aWNTeW1ib2w+KCk7XG4gIHByaXZhdGUgc3ltYm9sUmVzb3VyY2VQYXRocyA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgc3ltYm9sRnJvbUZpbGUgPSBuZXcgTWFwPHN0cmluZywgU3RhdGljU3ltYm9sW10+KCk7XG4gIHByaXZhdGUga25vd25GaWxlTmFtZVRvTW9kdWxlTmFtZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBob3N0OiBTdGF0aWNTeW1ib2xSZXNvbHZlckhvc3QsIHByaXZhdGUgc3RhdGljU3ltYm9sQ2FjaGU6IFN0YXRpY1N5bWJvbENhY2hlLFxuICAgICAgcHJpdmF0ZSBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LFxuICAgICAgcHJpdmF0ZSBlcnJvclJlY29yZGVyPzogKGVycm9yOiBhbnksIGZpbGVOYW1lPzogc3RyaW5nKSA9PiB2b2lkKSB7fVxuXG4gIHJlc29sdmVTeW1ib2woc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBSZXNvbHZlZFN0YXRpY1N5bWJvbCB7XG4gICAgaWYgKHN0YXRpY1N5bWJvbC5tZW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlU3ltYm9sTWVtYmVycyhzdGF0aWNTeW1ib2wpITtcbiAgICB9XG4gICAgLy8gTm90ZTogYWx3YXlzIGFzayBmb3IgYSBzdW1tYXJ5IGZpcnN0LFxuICAgIC8vIGFzIHdlIG1pZ2h0IGhhdmUgcmVhZCBzaGFsbG93IG1ldGFkYXRhIHZpYSBhIC5kLnRzIGZpbGVcbiAgICAvLyBmb3IgdGhlIHN5bWJvbC5cbiAgICBjb25zdCByZXN1bHRGcm9tU3VtbWFyeSA9IHRoaXMuX3Jlc29sdmVTeW1ib2xGcm9tU3VtbWFyeShzdGF0aWNTeW1ib2wpITtcbiAgICBpZiAocmVzdWx0RnJvbVN1bW1hcnkpIHtcbiAgICAgIHJldHVybiByZXN1bHRGcm9tU3VtbWFyeTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0RnJvbUNhY2hlID0gdGhpcy5yZXNvbHZlZFN5bWJvbHMuZ2V0KHN0YXRpY1N5bWJvbCk7XG4gICAgaWYgKHJlc3VsdEZyb21DYWNoZSkge1xuICAgICAgcmV0dXJuIHJlc3VsdEZyb21DYWNoZTtcbiAgICB9XG4gICAgLy8gTm90ZTogU29tZSB1c2VycyB1c2UgbGlicmFyaWVzIHRoYXQgd2VyZSBub3QgY29tcGlsZWQgd2l0aCBuZ2MsIGkuZS4gdGhleSBkb24ndFxuICAgIC8vIGhhdmUgc3VtbWFyaWVzLCBvbmx5IC5kLnRzIGZpbGVzLiBTbyB3ZSBhbHdheXMgbmVlZCB0byBjaGVjayBib3RoLCB0aGUgc3VtbWFyeVxuICAgIC8vIGFuZCBtZXRhZGF0YS5cbiAgICB0aGlzLl9jcmVhdGVTeW1ib2xzT2Yoc3RhdGljU3ltYm9sLmZpbGVQYXRoKTtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZFN5bWJvbHMuZ2V0KHN0YXRpY1N5bWJvbCkhO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldEltcG9ydEFzIHByb2R1Y2VzIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW1wb3J0IHRoZSBnaXZlbiBzeW1ib2wuXG4gICAqIFRoZSBpbXBvcnQgbWlnaHQgYmUgZGlmZmVyZW50IHRoYW4gdGhlIHN5bWJvbCBpZiB0aGUgc3ltYm9sIGlzIGV4cG9ydGVkIGZyb21cbiAgICogYSBsaWJyYXJ5IHdpdGggYSBzdW1tYXJ5OyBpbiB3aGljaCBjYXNlIHdlIHdhbnQgdG8gaW1wb3J0IHRoZSBzeW1ib2wgZnJvbSB0aGVcbiAgICogbmdmYWN0b3J5IHJlLWV4cG9ydCBpbnN0ZWFkIG9mIGRpcmVjdGx5IHRvIGF2b2lkIGludHJvZHVjaW5nIGEgZGlyZWN0IGRlcGVuZGVuY3lcbiAgICogb24gYW4gb3RoZXJ3aXNlIGluZGlyZWN0IGRlcGVuZGVuY3kuXG4gICAqXG4gICAqIEBwYXJhbSBzdGF0aWNTeW1ib2wgdGhlIHN5bWJvbCBmb3Igd2hpY2ggdG8gZ2VuZXJhdGUgYSBpbXBvcnQgc3ltYm9sXG4gICAqL1xuICBnZXRJbXBvcnRBcyhzdGF0aWNTeW1ib2w6IFN0YXRpY1N5bWJvbCwgdXNlU3VtbWFyaWVzOiBib29sZWFuID0gdHJ1ZSk6IFN0YXRpY1N5bWJvbHxudWxsIHtcbiAgICBpZiAoc3RhdGljU3ltYm9sLm1lbWJlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBiYXNlU3ltYm9sID0gdGhpcy5nZXRTdGF0aWNTeW1ib2woc3RhdGljU3ltYm9sLmZpbGVQYXRoLCBzdGF0aWNTeW1ib2wubmFtZSk7XG4gICAgICBjb25zdCBiYXNlSW1wb3J0QXMgPSB0aGlzLmdldEltcG9ydEFzKGJhc2VTeW1ib2wsIHVzZVN1bW1hcmllcyk7XG4gICAgICByZXR1cm4gYmFzZUltcG9ydEFzID9cbiAgICAgICAgICB0aGlzLmdldFN0YXRpY1N5bWJvbChiYXNlSW1wb3J0QXMuZmlsZVBhdGgsIGJhc2VJbXBvcnRBcy5uYW1lLCBzdGF0aWNTeW1ib2wubWVtYmVycykgOlxuICAgICAgICAgIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN1bW1hcml6ZWRGaWxlTmFtZSA9IHN0cmlwU3VtbWFyeUZvckppdEZpbGVTdWZmaXgoc3RhdGljU3ltYm9sLmZpbGVQYXRoKTtcbiAgICBpZiAoc3VtbWFyaXplZEZpbGVOYW1lICE9PSBzdGF0aWNTeW1ib2wuZmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IHN1bW1hcml6ZWROYW1lID0gc3RyaXBTdW1tYXJ5Rm9ySml0TmFtZVN1ZmZpeChzdGF0aWNTeW1ib2wubmFtZSk7XG4gICAgICBjb25zdCBiYXNlU3ltYm9sID1cbiAgICAgICAgICB0aGlzLmdldFN0YXRpY1N5bWJvbChzdW1tYXJpemVkRmlsZU5hbWUsIHN1bW1hcml6ZWROYW1lLCBzdGF0aWNTeW1ib2wubWVtYmVycyk7XG4gICAgICBjb25zdCBiYXNlSW1wb3J0QXMgPSB0aGlzLmdldEltcG9ydEFzKGJhc2VTeW1ib2wsIHVzZVN1bW1hcmllcyk7XG4gICAgICByZXR1cm4gYmFzZUltcG9ydEFzID8gdGhpcy5nZXRTdGF0aWNTeW1ib2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnlGb3JKaXRGaWxlTmFtZShiYXNlSW1wb3J0QXMuZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5Rm9ySml0TmFtZShiYXNlSW1wb3J0QXMubmFtZSksIGJhc2VTeW1ib2wubWVtYmVycykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSAodXNlU3VtbWFyaWVzICYmIHRoaXMuc3VtbWFyeVJlc29sdmVyLmdldEltcG9ydEFzKHN0YXRpY1N5bWJvbCkpIHx8IG51bGw7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1wb3J0QXMuZ2V0KHN0YXRpY1N5bWJvbCkhO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldFJlc291cmNlUGF0aCBwcm9kdWNlcyB0aGUgcGF0aCB0byB0aGUgb3JpZ2luYWwgbG9jYXRpb24gb2YgdGhlIHN5bWJvbCBhbmQgc2hvdWxkXG4gICAqIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSByZWxhdGl2ZSBsb2NhdGlvbiBvZiByZXNvdXJjZSByZWZlcmVuY2VzIHJlY29yZGVkIGluXG4gICAqIHN5bWJvbCBtZXRhZGF0YS5cbiAgICovXG4gIGdldFJlc291cmNlUGF0aChzdGF0aWNTeW1ib2w6IFN0YXRpY1N5bWJvbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sUmVzb3VyY2VQYXRocy5nZXQoc3RhdGljU3ltYm9sKSB8fCBzdGF0aWNTeW1ib2wuZmlsZVBhdGg7XG4gIH1cblxuICAvKipcbiAgICogZ2V0VHlwZUFyaXR5IHJldHVybnMgdGhlIG51bWJlciBvZiBnZW5lcmljIHR5cGUgcGFyYW1ldGVycyB0aGUgZ2l2ZW4gc3ltYm9sXG4gICAqIGhhcy4gSWYgdGhlIHN5bWJvbCBpcyBub3QgYSB0eXBlIHRoZSByZXN1bHQgaXMgbnVsbC5cbiAgICovXG4gIGdldFR5cGVBcml0eShzdGF0aWNTeW1ib2w6IFN0YXRpY1N5bWJvbCk6IG51bWJlcnxudWxsIHtcbiAgICAvLyBJZiB0aGUgZmlsZSBpcyBhIGZhY3RvcnkvbmdzdW1tYXJ5IGZpbGUsIGRvbid0IHJlc29sdmUgdGhlIHN5bWJvbCBhcyBkb2luZyBzbyB3b3VsZFxuICAgIC8vIGNhdXNlIHRoZSBtZXRhZGF0YSBmb3IgYW4gZmFjdG9yeS9uZ3N1bW1hcnkgZmlsZSB0byBiZSBsb2FkZWQgd2hpY2ggZG9lc24ndCBleGlzdC5cbiAgICAvLyBBbGwgcmVmZXJlbmNlcyB0byBnZW5lcmF0ZWQgY2xhc3NlcyBtdXN0IGluY2x1ZGUgdGhlIGNvcnJlY3QgYXJpdHkgd2hlbmV2ZXJcbiAgICAvLyBnZW5lcmF0aW5nIGNvZGUuXG4gICAgaWYgKGlzR2VuZXJhdGVkRmlsZShzdGF0aWNTeW1ib2wuZmlsZVBhdGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVkU3ltYm9sID0gdW53cmFwUmVzb2x2ZWRNZXRhZGF0YSh0aGlzLnJlc29sdmVTeW1ib2woc3RhdGljU3ltYm9sKSk7XG4gICAgd2hpbGUgKHJlc29sdmVkU3ltYm9sICYmIHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICByZXNvbHZlZFN5bWJvbCA9IHVud3JhcFJlc29sdmVkTWV0YWRhdGEodGhpcy5yZXNvbHZlU3ltYm9sKHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhKSk7XG4gICAgfVxuICAgIHJldHVybiAocmVzb2x2ZWRTeW1ib2wgJiYgcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGEgJiYgcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGEuYXJpdHkpIHx8IG51bGw7XG4gIH1cblxuICBnZXRLbm93bk1vZHVsZU5hbWUoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5rbm93bkZpbGVOYW1lVG9Nb2R1bGVOYW1lcy5nZXQoZmlsZVBhdGgpIHx8IG51bGw7XG4gIH1cblxuICByZWNvcmRJbXBvcnRBcyhzb3VyY2VTeW1ib2w6IFN0YXRpY1N5bWJvbCwgdGFyZ2V0U3ltYm9sOiBTdGF0aWNTeW1ib2wpIHtcbiAgICBzb3VyY2VTeW1ib2wuYXNzZXJ0Tm9NZW1iZXJzKCk7XG4gICAgdGFyZ2V0U3ltYm9sLmFzc2VydE5vTWVtYmVycygpO1xuICAgIHRoaXMuaW1wb3J0QXMuc2V0KHNvdXJjZVN5bWJvbCwgdGFyZ2V0U3ltYm9sKTtcbiAgfVxuXG4gIHJlY29yZE1vZHVsZU5hbWVGb3JGaWxlTmFtZShmaWxlTmFtZTogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmtub3duRmlsZU5hbWVUb01vZHVsZU5hbWVzLnNldChmaWxlTmFtZSwgbW9kdWxlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSBhbGwgaW5mb3JtYXRpb24gZGVyaXZlZCBmcm9tIHRoZSBnaXZlbiBmaWxlIGFuZCByZXR1cm4gdGhlXG4gICAqIHN0YXRpYyBzeW1ib2xzIGNvbnRhaW5lZCBpbiB0aGUgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIGZpbGVOYW1lIHRoZSBmaWxlIHRvIGludmFsaWRhdGVcbiAgICovXG4gIGludmFsaWRhdGVGaWxlKGZpbGVOYW1lOiBzdHJpbmcpOiBTdGF0aWNTeW1ib2xbXSB7XG4gICAgdGhpcy5tZXRhZGF0YUNhY2hlLmRlbGV0ZShmaWxlTmFtZSk7XG4gICAgY29uc3Qgc3ltYm9scyA9IHRoaXMuc3ltYm9sRnJvbUZpbGUuZ2V0KGZpbGVOYW1lKTtcbiAgICBpZiAoIXN5bWJvbHMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdGhpcy5zeW1ib2xGcm9tRmlsZS5kZWxldGUoZmlsZU5hbWUpO1xuICAgIGZvciAoY29uc3Qgc3ltYm9sIG9mIHN5bWJvbHMpIHtcbiAgICAgIHRoaXMucmVzb2x2ZWRTeW1ib2xzLmRlbGV0ZShzeW1ib2wpO1xuICAgICAgdGhpcy5pbXBvcnRBcy5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMuc3ltYm9sUmVzb3VyY2VQYXRocy5kZWxldGUoc3ltYm9sKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bWJvbHM7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGlnbm9yZUVycm9yc0ZvcjxUPihjYjogKCkgPT4gVCkge1xuICAgIGNvbnN0IHJlY29yZGVyID0gdGhpcy5lcnJvclJlY29yZGVyO1xuICAgIHRoaXMuZXJyb3JSZWNvcmRlciA9ICgpID0+IHt9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY2IoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5lcnJvclJlY29yZGVyID0gcmVjb3JkZXI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVN5bWJvbE1lbWJlcnMoc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBSZXNvbHZlZFN0YXRpY1N5bWJvbHxudWxsIHtcbiAgICBjb25zdCBtZW1iZXJzID0gc3RhdGljU3ltYm9sLm1lbWJlcnM7XG4gICAgY29uc3QgYmFzZVJlc29sdmVkU3ltYm9sID1cbiAgICAgICAgdGhpcy5yZXNvbHZlU3ltYm9sKHRoaXMuZ2V0U3RhdGljU3ltYm9sKHN0YXRpY1N5bWJvbC5maWxlUGF0aCwgc3RhdGljU3ltYm9sLm5hbWUpKTtcbiAgICBpZiAoIWJhc2VSZXNvbHZlZFN5bWJvbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBiYXNlTWV0YWRhdGEgPSB1bndyYXBSZXNvbHZlZE1ldGFkYXRhKGJhc2VSZXNvbHZlZFN5bWJvbC5tZXRhZGF0YSk7XG4gICAgaWYgKGJhc2VNZXRhZGF0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgcmV0dXJuIG5ldyBSZXNvbHZlZFN0YXRpY1N5bWJvbChcbiAgICAgICAgICBzdGF0aWNTeW1ib2wsIHRoaXMuZ2V0U3RhdGljU3ltYm9sKGJhc2VNZXRhZGF0YS5maWxlUGF0aCwgYmFzZU1ldGFkYXRhLm5hbWUsIG1lbWJlcnMpKTtcbiAgICB9IGVsc2UgaWYgKGJhc2VNZXRhZGF0YSAmJiBiYXNlTWV0YWRhdGEuX19zeW1ib2xpYyA9PT0gJ2NsYXNzJykge1xuICAgICAgaWYgKGJhc2VNZXRhZGF0YS5zdGF0aWNzICYmIG1lbWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZWRTdGF0aWNTeW1ib2woc3RhdGljU3ltYm9sLCBiYXNlTWV0YWRhdGEuc3RhdGljc1ttZW1iZXJzWzBdXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWx1ZSA9IGJhc2VNZXRhZGF0YTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVtYmVycy5sZW5ndGggJiYgdmFsdWU7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW21lbWJlcnNbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZXNvbHZlZFN0YXRpY1N5bWJvbChzdGF0aWNTeW1ib2wsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9yZXNvbHZlU3ltYm9sRnJvbVN1bW1hcnkoc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBSZXNvbHZlZFN0YXRpY1N5bWJvbHxudWxsIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5zdW1tYXJ5UmVzb2x2ZXIucmVzb2x2ZVN1bW1hcnkoc3RhdGljU3ltYm9sKTtcbiAgICByZXR1cm4gc3VtbWFyeSA/IG5ldyBSZXNvbHZlZFN0YXRpY1N5bWJvbChzdGF0aWNTeW1ib2wsIHN1bW1hcnkubWV0YWRhdGEpIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRTdGF0aWNTeW1ib2wgcHJvZHVjZXMgYSBUeXBlIHdob3NlIG1ldGFkYXRhIGlzIGtub3duIGJ1dCB3aG9zZSBpbXBsZW1lbnRhdGlvbiBpcyBub3QgbG9hZGVkLlxuICAgKiBBbGwgdHlwZXMgcGFzc2VkIHRvIHRoZSBTdGF0aWNSZXNvbHZlciBzaG91bGQgYmUgcHNldWRvLXR5cGVzIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZGVjbGFyYXRpb25GaWxlIHRoZSBhYnNvbHV0ZSBwYXRoIG9mIHRoZSBmaWxlIHdoZXJlIHRoZSBzeW1ib2wgaXMgZGVjbGFyZWRcbiAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHR5cGUuXG4gICAqIEBwYXJhbSBtZW1iZXJzIGEgc3ltYm9sIGZvciBhIHN0YXRpYyBtZW1iZXIgb2YgdGhlIG5hbWVkIHR5cGVcbiAgICovXG4gIGdldFN0YXRpY1N5bWJvbChkZWNsYXJhdGlvbkZpbGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBtZW1iZXJzPzogc3RyaW5nW10pOiBTdGF0aWNTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLnN0YXRpY1N5bWJvbENhY2hlLmdldChkZWNsYXJhdGlvbkZpbGUsIG5hbWUsIG1lbWJlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhc0RlY29yYXRvcnMgY2hlY2tzIGEgZmlsZSdzIG1ldGFkYXRhIGZvciB0aGUgcHJlc2VuY2Ugb2YgZGVjb3JhdG9ycyB3aXRob3V0IGV2YWx1YXRpbmcgdGhlXG4gICAqIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggdGhlIGFic29sdXRlIHBhdGggdG8gZXhhbWluZSBmb3IgZGVjb3JhdG9ycy5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhbnkgY2xhc3MgaW4gdGhlIGZpbGUgaGFzIGEgZGVjb3JhdG9yLlxuICAgKi9cbiAgaGFzRGVjb3JhdG9ycyhmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1vZHVsZU1ldGFkYXRhKGZpbGVQYXRoKTtcbiAgICBpZiAobWV0YWRhdGFbJ21ldGFkYXRhJ10pIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtZXRhZGF0YVsnbWV0YWRhdGEnXSkuc29tZSgobWV0YWRhdGFLZXkpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBtZXRhZGF0YVsnbWV0YWRhdGEnXVttZXRhZGF0YUtleV07XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5fX3N5bWJvbGljID09PSAnY2xhc3MnICYmIGVudHJ5LmRlY29yYXRvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U3ltYm9sc09mKGZpbGVQYXRoOiBzdHJpbmcpOiBTdGF0aWNTeW1ib2xbXSB7XG4gICAgY29uc3Qgc3VtbWFyeVN5bWJvbHMgPSB0aGlzLnN1bW1hcnlSZXNvbHZlci5nZXRTeW1ib2xzT2YoZmlsZVBhdGgpO1xuICAgIGlmIChzdW1tYXJ5U3ltYm9scykge1xuICAgICAgcmV0dXJuIHN1bW1hcnlTeW1ib2xzO1xuICAgIH1cbiAgICAvLyBOb3RlOiBTb21lIHVzZXJzIHVzZSBsaWJyYXJpZXMgdGhhdCB3ZXJlIG5vdCBjb21waWxlZCB3aXRoIG5nYywgaS5lLiB0aGV5IGRvbid0XG4gICAgLy8gaGF2ZSBzdW1tYXJpZXMsIG9ubHkgLmQudHMgZmlsZXMsIGJ1dCBgc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGVgIHJldHVybnMgdHJ1ZS5cbiAgICB0aGlzLl9jcmVhdGVTeW1ib2xzT2YoZmlsZVBhdGgpO1xuICAgIHJldHVybiB0aGlzLnN5bWJvbEZyb21GaWxlLmdldChmaWxlUGF0aCkgfHwgW107XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTeW1ib2xzT2YoZmlsZVBhdGg6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnN5bWJvbEZyb21GaWxlLmhhcyhmaWxlUGF0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWRTeW1ib2xzOiBSZXNvbHZlZFN0YXRpY1N5bWJvbFtdID0gW107XG4gICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1vZHVsZU1ldGFkYXRhKGZpbGVQYXRoKTtcbiAgICBpZiAobWV0YWRhdGFbJ2ltcG9ydEFzJ10pIHtcbiAgICAgIC8vIEluZGV4IGJ1bmRsZSBpbmRpY2VzIHNob3VsZCB1c2UgdGhlIGltcG9ydEFzIG1vZHVsZSBuYW1lIGRlZmluZWRcbiAgICAgIC8vIGluIHRoZSBidW5kbGUuXG4gICAgICB0aGlzLmtub3duRmlsZU5hbWVUb01vZHVsZU5hbWVzLnNldChmaWxlUGF0aCwgbWV0YWRhdGFbJ2ltcG9ydEFzJ10pO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgdGhlIHN5bWJvbHMgaW4gb25lIG9mIHRoZSByZS1leHBvcnQgbG9jYXRpb25cbiAgICBpZiAobWV0YWRhdGFbJ2V4cG9ydHMnXSkge1xuICAgICAgZm9yIChjb25zdCBtb2R1bGVFeHBvcnQgb2YgbWV0YWRhdGFbJ2V4cG9ydHMnXSkge1xuICAgICAgICAvLyBoYW5kbGUgdGhlIHN5bWJvbHMgaW4gdGhlIGxpc3Qgb2YgZXhwbGljaXRseSByZS1leHBvcnRlZCBzeW1ib2xzLlxuICAgICAgICBpZiAobW9kdWxlRXhwb3J0LmV4cG9ydCkge1xuICAgICAgICAgIG1vZHVsZUV4cG9ydC5leHBvcnQuZm9yRWFjaCgoZXhwb3J0U3ltYm9sOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBzeW1ib2xOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4cG9ydFN5bWJvbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgc3ltYm9sTmFtZSA9IGV4cG9ydFN5bWJvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN5bWJvbE5hbWUgPSBleHBvcnRTeW1ib2wuYXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzeW1ib2xOYW1lID0gdW5lc2NhcGVJZGVudGlmaWVyKHN5bWJvbE5hbWUpO1xuICAgICAgICAgICAgbGV0IHN5bU5hbWUgPSBzeW1ib2xOYW1lO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRTeW1ib2wgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHN5bU5hbWUgPSB1bmVzY2FwZUlkZW50aWZpZXIoZXhwb3J0U3ltYm9sLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRNb2R1bGUgPSB0aGlzLnJlc29sdmVNb2R1bGUobW9kdWxlRXhwb3J0LmZyb20sIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTeW1ib2wgPSB0aGlzLmdldFN0YXRpY1N5bWJvbChyZXNvbHZlZE1vZHVsZSwgc3ltTmFtZSk7XG4gICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVN5bWJvbCA9IHRoaXMuZ2V0U3RhdGljU3ltYm9sKGZpbGVQYXRoLCBzeW1ib2xOYW1lKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRTeW1ib2xzLnB1c2godGhpcy5jcmVhdGVFeHBvcnQoc291cmNlU3ltYm9sLCB0YXJnZXRTeW1ib2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN5bWJvbHMgbG9hZGVkIGJ5ICdleHBvcnQgKicgZGlyZWN0aXZlcy5cbiAgICAgICAgICBjb25zdCByZXNvbHZlZE1vZHVsZSA9IHRoaXMucmVzb2x2ZU1vZHVsZShtb2R1bGVFeHBvcnQuZnJvbSwgZmlsZVBhdGgpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZSAmJiByZXNvbHZlZE1vZHVsZSAhPT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5lc3RlZEV4cG9ydHMgPSB0aGlzLmdldFN5bWJvbHNPZihyZXNvbHZlZE1vZHVsZSk7XG4gICAgICAgICAgICBuZXN0ZWRFeHBvcnRzLmZvckVhY2goKHRhcmdldFN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzb3VyY2VTeW1ib2wgPSB0aGlzLmdldFN0YXRpY1N5bWJvbChmaWxlUGF0aCwgdGFyZ2V0U3ltYm9sLm5hbWUpO1xuICAgICAgICAgICAgICByZXNvbHZlZFN5bWJvbHMucHVzaCh0aGlzLmNyZWF0ZUV4cG9ydChzb3VyY2VTeW1ib2wsIHRhcmdldFN5bWJvbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHRoZSBhY3R1YWwgbWV0YWRhdGEuIEhhcyB0byBiZSBhZnRlciB0aGUgZXhwb3J0c1xuICAgIC8vIGFzIHRoZXJlIG1pZ2h0IGJlIGNvbGxpc2lvbnMgaW4gdGhlIG5hbWVzLCBhbmQgd2Ugd2FudCB0aGUgc3ltYm9sc1xuICAgIC8vIG9mIHRoZSBjdXJyZW50IG1vZHVsZSB0byB3aW4gb2Z0ZXIgcmVleHBvcnRzLlxuICAgIGlmIChtZXRhZGF0YVsnbWV0YWRhdGEnXSkge1xuICAgICAgLy8gaGFuZGxlIGRpcmVjdCBkZWNsYXJhdGlvbnMgb2YgdGhlIHN5bWJvbFxuICAgICAgY29uc3QgdG9wTGV2ZWxTeW1ib2xOYW1lcyA9XG4gICAgICAgICAgbmV3IFNldDxzdHJpbmc+KE9iamVjdC5rZXlzKG1ldGFkYXRhWydtZXRhZGF0YSddKS5tYXAodW5lc2NhcGVJZGVudGlmaWVyKSk7XG4gICAgICBjb25zdCBvcmlnaW5zOiB7W2luZGV4OiBzdHJpbmddOiBzdHJpbmd9ID0gbWV0YWRhdGFbJ29yaWdpbnMnXSB8fCB7fTtcbiAgICAgIE9iamVjdC5rZXlzKG1ldGFkYXRhWydtZXRhZGF0YSddKS5mb3JFYWNoKChtZXRhZGF0YUtleSkgPT4ge1xuICAgICAgICBjb25zdCBzeW1ib2xNZXRhID0gbWV0YWRhdGFbJ21ldGFkYXRhJ11bbWV0YWRhdGFLZXldO1xuICAgICAgICBjb25zdCBuYW1lID0gdW5lc2NhcGVJZGVudGlmaWVyKG1ldGFkYXRhS2V5KTtcblxuICAgICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLmdldFN0YXRpY1N5bWJvbChmaWxlUGF0aCwgbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luID0gb3JpZ2lucy5oYXNPd25Qcm9wZXJ0eShtZXRhZGF0YUtleSkgJiYgb3JpZ2luc1ttZXRhZGF0YUtleV07XG4gICAgICAgIGlmIChvcmlnaW4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgc3ltYm9sIGlzIGZyb20gYSBidW5kbGVkIGluZGV4LCB1c2UgdGhlIGRlY2xhcmF0aW9uIGxvY2F0aW9uIG9mIHRoZVxuICAgICAgICAgIC8vIHN5bWJvbCBzbyByZWxhdGl2ZSByZWZlcmVuY2VzIChzdWNoIGFzICcuL215Lmh0bWwnKSB3aWxsIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAvLyBjb3JyZWN0bHkuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luRmlsZVBhdGggPSB0aGlzLnJlc29sdmVNb2R1bGUob3JpZ2luLCBmaWxlUGF0aCk7XG4gICAgICAgICAgaWYgKCFvcmlnaW5GaWxlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRFcnJvcihuZXcgRXJyb3IoYENvdWxkbid0IHJlc29sdmUgb3JpZ2luYWwgc3ltYm9sIGZvciAke29yaWdpbn0gZnJvbSAke1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5nZXRPdXRwdXROYW1lKGZpbGVQYXRoKX1gKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sUmVzb3VyY2VQYXRocy5zZXQoc3ltYm9sLCBvcmlnaW5GaWxlUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkU3ltYm9scy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZXNvbHZlZFN5bWJvbChzeW1ib2wsIGZpbGVQYXRoLCB0b3BMZXZlbFN5bWJvbE5hbWVzLCBzeW1ib2xNZXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgdW5pcXVlU3ltYm9scyA9IG5ldyBTZXQ8U3RhdGljU3ltYm9sPigpO1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZWRTeW1ib2wgb2YgcmVzb2x2ZWRTeW1ib2xzKSB7XG4gICAgICB0aGlzLnJlc29sdmVkU3ltYm9scy5zZXQocmVzb2x2ZWRTeW1ib2wuc3ltYm9sLCByZXNvbHZlZFN5bWJvbCk7XG4gICAgICB1bmlxdWVTeW1ib2xzLmFkZChyZXNvbHZlZFN5bWJvbC5zeW1ib2wpO1xuICAgIH1cbiAgICB0aGlzLnN5bWJvbEZyb21GaWxlLnNldChmaWxlUGF0aCwgQXJyYXkuZnJvbSh1bmlxdWVTeW1ib2xzKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc29sdmVkU3ltYm9sKFxuICAgICAgc291cmNlU3ltYm9sOiBTdGF0aWNTeW1ib2wsIHRvcExldmVsUGF0aDogc3RyaW5nLCB0b3BMZXZlbFN5bWJvbE5hbWVzOiBTZXQ8c3RyaW5nPixcbiAgICAgIG1ldGFkYXRhOiBhbnkpOiBSZXNvbHZlZFN0YXRpY1N5bWJvbCB7XG4gICAgLy8gRm9yIGNsYXNzZXMgdGhhdCBkb24ndCBoYXZlIEFuZ3VsYXIgc3VtbWFyaWVzIC8gbWV0YWRhdGEsXG4gICAgLy8gd2Ugb25seSBrZWVwIHRoZWlyIGFyaXR5LCBidXQgbm90aGluZyBlbHNlXG4gICAgLy8gKGUuZy4gdGhlaXIgY29uc3RydWN0b3IgcGFyYW1ldGVycykuXG4gICAgLy8gV2UgZG8gdGhpcyB0byBwcmV2ZW50IGludHJvZHVjaW5nIGRlZXAgaW1wb3J0c1xuICAgIC8vIGFzIHdlIGRpZG4ndCBnZW5lcmF0ZSAubmdmYWN0b3J5LnRzIGZpbGVzIHdpdGggcHJvcGVyIHJlZXhwb3J0cy5cbiAgICBjb25zdCBpc1RzRmlsZSA9IFRTLnRlc3Qoc291cmNlU3ltYm9sLmZpbGVQYXRoKTtcbiAgICBpZiAodGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZShzb3VyY2VTeW1ib2wuZmlsZVBhdGgpICYmICFpc1RzRmlsZSAmJiBtZXRhZGF0YSAmJlxuICAgICAgICBtZXRhZGF0YVsnX19zeW1ib2xpYyddID09PSAnY2xhc3MnKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZE1ldGEgPSB7X19zeW1ib2xpYzogJ2NsYXNzJywgYXJpdHk6IG1ldGFkYXRhLmFyaXR5fTtcbiAgICAgIHJldHVybiBuZXcgUmVzb2x2ZWRTdGF0aWNTeW1ib2woc291cmNlU3ltYm9sLCB0cmFuc2Zvcm1lZE1ldGEpO1xuICAgIH1cblxuICAgIGxldCBfb3JpZ2luYWxGaWxlTWVtbzogc3RyaW5nfHVuZGVmaW5lZDtcbiAgICBjb25zdCBnZXRPcmlnaW5hbE5hbWU6ICgpID0+IHN0cmluZyA9ICgpID0+IHtcbiAgICAgIGlmICghX29yaWdpbmFsRmlsZU1lbW8pIHtcbiAgICAgICAgLy8gR3Vlc3Mgd2hhdCB0aGUgb3JpZ2luYWwgZmlsZSBuYW1lIGlzIGZyb20gdGhlIHJlZmVyZW5jZS4gSWYgaXQgaGFzIGEgYC5kLnRzYCBleHRlbnNpb25cbiAgICAgICAgLy8gcmVwbGFjZSBpdCB3aXRoIGAudHNgLiBJZiBpdCBhbHJlYWR5IGhhcyBgLnRzYCBqdXN0IGxlYXZlIGl0IGluIHBsYWNlLiBJZiBpdCBkb2Vzbid0IGhhdmVcbiAgICAgICAgLy8gLnRzIG9yIC5kLnRzLCBhcHBlbmQgYC50cycuIEFsc28sIGlmIGl0IGlzIGluIGBub2RlX21vZHVsZXNgLCB0cmltIHRoZSBgbm9kZV9tb2R1bGVgXG4gICAgICAgIC8vIGxvY2F0aW9uIGFzIGl0IGlzIG5vdCBpbXBvcnRhbnQgdG8gZmluZGluZyB0aGUgZmlsZS5cbiAgICAgICAgX29yaWdpbmFsRmlsZU1lbW8gPVxuICAgICAgICAgICAgdGhpcy5ob3N0LmdldE91dHB1dE5hbWUodG9wTGV2ZWxQYXRoLnJlcGxhY2UoLygoXFwudHMpfChcXC5kXFwudHMpfCkkLywgJy50cycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14uKm5vZGVfbW9kdWxlc1svXFxcXF0vLCAnJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9vcmlnaW5hbEZpbGVNZW1vO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGNsYXNzIFJlZmVyZW5jZVRyYW5zZm9ybWVyIGV4dGVuZHMgVmFsdWVUcmFuc2Zvcm1lciB7XG4gICAgICB2aXNpdFN0cmluZ01hcChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBmdW5jdGlvblBhcmFtczogc3RyaW5nW10pOiBhbnkge1xuICAgICAgICBjb25zdCBzeW1ib2xpYyA9IG1hcFsnX19zeW1ib2xpYyddO1xuICAgICAgICBpZiAoc3ltYm9saWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjb25zdCBvbGRMZW4gPSBmdW5jdGlvblBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgZnVuY3Rpb25QYXJhbXMucHVzaCguLi4obWFwWydwYXJhbWV0ZXJzJ10gfHwgW10pKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci52aXNpdFN0cmluZ01hcChtYXAsIGZ1bmN0aW9uUGFyYW1zKTtcbiAgICAgICAgICBmdW5jdGlvblBhcmFtcy5sZW5ndGggPSBvbGRMZW47XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIGlmIChzeW1ib2xpYyA9PT0gJ3JlZmVyZW5jZScpIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBtYXBbJ21vZHVsZSddO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYXBbJ25hbWUnXSA/IHVuZXNjYXBlSWRlbnRpZmllcihtYXBbJ25hbWUnXSkgOiBtYXBbJ25hbWUnXTtcbiAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcbiAgICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IHNlbGYucmVzb2x2ZU1vZHVsZShtb2R1bGUsIHNvdXJjZVN5bWJvbC5maWxlUGF0aCkhO1xuICAgICAgICAgICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIF9fc3ltYm9saWM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYENvdWxkIG5vdCByZXNvbHZlICR7bW9kdWxlfSByZWxhdGl2ZSB0byAke1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmhvc3QuZ2V0TWV0YWRhdGFGb3Ioc291cmNlU3ltYm9sLmZpbGVQYXRoKX0uYCxcbiAgICAgICAgICAgICAgICBsaW5lOiBtYXBbJ2xpbmUnXSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXI6IG1hcFsnY2hhcmFjdGVyJ10sXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGdldE9yaWdpbmFsTmFtZSgpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBfX3N5bWJvbGljOiAncmVzb2x2ZWQnLFxuICAgICAgICAgICAgICBzeW1ib2w6IHNlbGYuZ2V0U3RhdGljU3ltYm9sKGZpbGVQYXRoLCBuYW1lKSxcbiAgICAgICAgICAgICAgbGluZTogbWFwWydsaW5lJ10sXG4gICAgICAgICAgICAgIGNoYXJhY3RlcjogbWFwWydjaGFyYWN0ZXInXSxcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IGdldE9yaWdpbmFsTmFtZSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZnVuY3Rpb25QYXJhbXMuaW5kZXhPZihuYW1lKSA+PSAwKSB7XG4gICAgICAgICAgICAvLyByZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBwYXJhbWV0ZXJcbiAgICAgICAgICAgIHJldHVybiB7X19zeW1ib2xpYzogJ3JlZmVyZW5jZScsIG5hbWU6IG5hbWV9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodG9wTGV2ZWxTeW1ib2xOYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0U3RhdGljU3ltYm9sKHRvcExldmVsUGF0aCwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbWJpZW50IHZhbHVlXG4gICAgICAgICAgICBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzeW1ib2xpYyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIHJldHVybiB7Li4ubWFwLCBmaWxlTmFtZTogZ2V0T3JpZ2luYWxOYW1lKCl9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzdXBlci52aXNpdFN0cmluZ01hcChtYXAsIGZ1bmN0aW9uUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0cmFuc2Zvcm1lZE1ldGEgPSB2aXNpdFZhbHVlKG1ldGFkYXRhLCBuZXcgUmVmZXJlbmNlVHJhbnNmb3JtZXIoKSwgW10pO1xuICAgIGxldCB1bndyYXBwZWRUcmFuc2Zvcm1lZE1ldGEgPSB1bndyYXBSZXNvbHZlZE1ldGFkYXRhKHRyYW5zZm9ybWVkTWV0YSk7XG4gICAgaWYgKHVud3JhcHBlZFRyYW5zZm9ybWVkTWV0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXhwb3J0KHNvdXJjZVN5bWJvbCwgdW53cmFwcGVkVHJhbnNmb3JtZWRNZXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZXNvbHZlZFN0YXRpY1N5bWJvbChzb3VyY2VTeW1ib2wsIHRyYW5zZm9ybWVkTWV0YSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV4cG9ydChzb3VyY2VTeW1ib2w6IFN0YXRpY1N5bWJvbCwgdGFyZ2V0U3ltYm9sOiBTdGF0aWNTeW1ib2wpOlxuICAgICAgUmVzb2x2ZWRTdGF0aWNTeW1ib2wge1xuICAgIHNvdXJjZVN5bWJvbC5hc3NlcnROb01lbWJlcnMoKTtcbiAgICB0YXJnZXRTeW1ib2wuYXNzZXJ0Tm9NZW1iZXJzKCk7XG4gICAgaWYgKHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUoc291cmNlU3ltYm9sLmZpbGVQYXRoKSAmJlxuICAgICAgICB0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKHRhcmdldFN5bWJvbC5maWxlUGF0aCkpIHtcbiAgICAgIC8vIFRoaXMgY2FzZSBpcyBmb3IgYW4gbmcgbGlicmFyeSBpbXBvcnRpbmcgc3ltYm9scyBmcm9tIGEgcGxhaW4gdHMgbGlicmFyeVxuICAgICAgLy8gdHJhbnNpdGl2ZWx5LlxuICAgICAgLy8gTm90ZTogV2UgcmVseSBvbiB0aGUgZmFjdCB0aGF0IHdlIGRpc2NvdmVyIHN5bWJvbHMgaW4gdGhlIGRpcmVjdGlvblxuICAgICAgLy8gZnJvbSBzb3VyY2UgZmlsZXMgdG8gbGlicmFyeSBmaWxlc1xuICAgICAgdGhpcy5pbXBvcnRBcy5zZXQodGFyZ2V0U3ltYm9sLCB0aGlzLmdldEltcG9ydEFzKHNvdXJjZVN5bWJvbCkgfHwgc291cmNlU3ltYm9sKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZXNvbHZlZFN0YXRpY1N5bWJvbChzb3VyY2VTeW1ib2wsIHRhcmdldFN5bWJvbCk7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydEVycm9yKGVycm9yOiBFcnJvciwgY29udGV4dD86IFN0YXRpY1N5bWJvbCwgcGF0aD86IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVycm9yUmVjb3JkZXIpIHtcbiAgICAgIHRoaXMuZXJyb3JSZWNvcmRlcihlcnJvciwgKGNvbnRleHQgJiYgY29udGV4dC5maWxlUGF0aCkgfHwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbW9kdWxlIGFuIGFic29sdXRlIHBhdGggdG8gYSBtb2R1bGUgZmlsZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlOiBzdHJpbmcpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgbGV0IG1vZHVsZU1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YUNhY2hlLmdldChtb2R1bGUpO1xuICAgIGlmICghbW9kdWxlTWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IG1vZHVsZU1ldGFkYXRhcyA9IHRoaXMuaG9zdC5nZXRNZXRhZGF0YUZvcihtb2R1bGUpO1xuICAgICAgaWYgKG1vZHVsZU1ldGFkYXRhcykge1xuICAgICAgICBsZXQgbWF4VmVyc2lvbiA9IC0xO1xuICAgICAgICBtb2R1bGVNZXRhZGF0YXMuZm9yRWFjaCgobWQpID0+IHtcbiAgICAgICAgICBpZiAobWQgJiYgbWRbJ3ZlcnNpb24nXSA+IG1heFZlcnNpb24pIHtcbiAgICAgICAgICAgIG1heFZlcnNpb24gPSBtZFsndmVyc2lvbiddO1xuICAgICAgICAgICAgbW9kdWxlTWV0YWRhdGEgPSBtZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFtb2R1bGVNZXRhZGF0YSkge1xuICAgICAgICBtb2R1bGVNZXRhZGF0YSA9XG4gICAgICAgICAgICB7X19zeW1ib2xpYzogJ21vZHVsZScsIHZlcnNpb246IFNVUFBPUlRFRF9TQ0hFTUFfVkVSU0lPTiwgbW9kdWxlOiBtb2R1bGUsIG1ldGFkYXRhOiB7fX07XG4gICAgICB9XG4gICAgICBpZiAobW9kdWxlTWV0YWRhdGFbJ3ZlcnNpb24nXSAhPSBTVVBQT1JURURfU0NIRU1BX1ZFUlNJT04pIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gbW9kdWxlTWV0YWRhdGFbJ3ZlcnNpb24nXSA9PSAyID9cbiAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBtZXRhZGF0YSB2ZXJzaW9uICR7bW9kdWxlTWV0YWRhdGFbJ3ZlcnNpb24nXX0gZm9yIG1vZHVsZSAke1xuICAgICAgICAgICAgICAgIG1vZHVsZX0uIFRoaXMgbW9kdWxlIHNob3VsZCBiZSBjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBuZ2NgIDpcbiAgICAgICAgICAgIGBNZXRhZGF0YSB2ZXJzaW9uIG1pc21hdGNoIGZvciBtb2R1bGUgJHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZ2V0T3V0cHV0TmFtZShtb2R1bGUpfSwgZm91bmQgdmVyc2lvbiAke1xuICAgICAgICAgICAgICAgIG1vZHVsZU1ldGFkYXRhWyd2ZXJzaW9uJ119LCBleHBlY3RlZCAke1NVUFBPUlRFRF9TQ0hFTUFfVkVSU0lPTn1gO1xuICAgICAgICB0aGlzLnJlcG9ydEVycm9yKG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0YWRhdGFDYWNoZS5zZXQobW9kdWxlLCBtb2R1bGVNZXRhZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBtb2R1bGVNZXRhZGF0YTtcbiAgfVxuXG5cbiAgZ2V0U3ltYm9sQnlNb2R1bGUobW9kdWxlOiBzdHJpbmcsIHN5bWJvbE5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGU/OiBzdHJpbmcpOiBTdGF0aWNTeW1ib2wge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5yZXNvbHZlTW9kdWxlKG1vZHVsZSwgY29udGFpbmluZ0ZpbGUpO1xuICAgIGlmICghZmlsZVBhdGgpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IobmV3IEVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSBtb2R1bGUgJHttb2R1bGV9JHtcbiAgICAgICAgICBjb250YWluaW5nRmlsZSA/ICcgcmVsYXRpdmUgdG8gJyArIHRoaXMuaG9zdC5nZXRPdXRwdXROYW1lKGNvbnRhaW5pbmdGaWxlKSA6ICcnfWApKTtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXRpY1N5bWJvbChgRVJST1I6JHttb2R1bGV9YCwgc3ltYm9sTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldFN0YXRpY1N5bWJvbChmaWxlUGF0aCwgc3ltYm9sTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNb2R1bGUobW9kdWxlOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlPzogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0Lm1vZHVsZU5hbWVUb0ZpbGVOYW1lKG1vZHVsZSwgY29udGFpbmluZ0ZpbGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCByZXNvbHZlIG1vZHVsZSAnJHttb2R1bGV9JyByZWxhdGl2ZSB0byBmaWxlICR7Y29udGFpbmluZ0ZpbGV9YCk7XG4gICAgICB0aGlzLnJlcG9ydEVycm9yKGUsIHVuZGVmaW5lZCwgY29udGFpbmluZ0ZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBSZW1vdmUgZXh0cmEgdW5kZXJzY29yZSBmcm9tIGVzY2FwZWQgaWRlbnRpZmllci5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9tYXN0ZXIvc3JjL2NvbXBpbGVyL3V0aWxpdGllcy50c1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlSWRlbnRpZmllcihpZGVudGlmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaWRlbnRpZmllci5zdGFydHNXaXRoKCdfX18nKSA/IGlkZW50aWZpZXIuc3Vic3RyKDEpIDogaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcFJlc29sdmVkTWV0YWRhdGEobWV0YWRhdGE6IGFueSk6IGFueSB7XG4gIGlmIChtZXRhZGF0YSAmJiBtZXRhZGF0YS5fX3N5bWJvbGljID09PSAncmVzb2x2ZWQnKSB7XG4gICAgcmV0dXJuIG1ldGFkYXRhLnN5bWJvbDtcbiAgfVxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=