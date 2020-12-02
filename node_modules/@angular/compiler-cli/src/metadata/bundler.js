(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/metadata/bundler", ["require", "exports", "tslib", "path", "typescript", "@angular/compiler-cli/src/metadata/collector", "@angular/compiler-cli/src/metadata/schema"], factory);
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
    var path = require("path");
    var ts = require("typescript");
    var collector_1 = require("@angular/compiler-cli/src/metadata/collector");
    var schema_1 = require("@angular/compiler-cli/src/metadata/schema");
    // The character set used to produce private names.
    var PRIVATE_NAME_CHARS = 'abcdefghijklmnopqrstuvwxyz';
    var MetadataBundler = /** @class */ (function () {
        function MetadataBundler(root, importAs, host, privateSymbolPrefix) {
            this.root = root;
            this.importAs = importAs;
            this.host = host;
            this.symbolMap = new Map();
            this.metadataCache = new Map();
            this.exports = new Map();
            this.rootModule = "./" + path.basename(root);
            this.privateSymbolPrefix = (privateSymbolPrefix || '').replace(/\W/g, '_');
        }
        MetadataBundler.prototype.getMetadataBundle = function () {
            // Export the root module. This also collects the transitive closure of all values referenced by
            // the exports.
            var exportedSymbols = this.exportAll(this.rootModule);
            this.canonicalizeSymbols(exportedSymbols);
            // TODO: exports? e.g. a module re-exports a symbol from another bundle
            var metadata = this.getEntries(exportedSymbols);
            var privates = Array.from(this.symbolMap.values())
                .filter(function (s) { return s.referenced && s.isPrivate; })
                .map(function (s) { return ({
                privateName: s.privateName,
                name: s.declaration.name,
                module: s.declaration.module
            }); });
            var origins = Array.from(this.symbolMap.values())
                .filter(function (s) { return s.referenced && !s.reexport; })
                .reduce(function (p, s) {
                p[s.isPrivate ? s.privateName : s.name] = s.declaration.module;
                return p;
            }, {});
            var exports = this.getReExports(exportedSymbols);
            return {
                metadata: {
                    __symbolic: 'module',
                    version: schema_1.METADATA_VERSION,
                    exports: exports.length ? exports : undefined,
                    metadata: metadata,
                    origins: origins,
                    importAs: this.importAs
                },
                privates: privates
            };
        };
        MetadataBundler.resolveModule = function (importName, from) {
            return resolveModule(importName, from);
        };
        MetadataBundler.prototype.getMetadata = function (moduleName) {
            var result = this.metadataCache.get(moduleName);
            if (!result) {
                if (moduleName.startsWith('.')) {
                    var fullModuleName = resolveModule(moduleName, this.root);
                    result = this.host.getMetadataFor(fullModuleName, this.root);
                }
                this.metadataCache.set(moduleName, result);
            }
            return result;
        };
        MetadataBundler.prototype.exportAll = function (moduleName) {
            var e_1, _a, e_2, _b, e_3, _c;
            var _this = this;
            var module = this.getMetadata(moduleName);
            var result = this.exports.get(moduleName);
            if (result) {
                return result;
            }
            result = [];
            var exportSymbol = function (exportedSymbol, exportAs) {
                var symbol = _this.symbolOf(moduleName, exportAs);
                result.push(symbol);
                exportedSymbol.reexportedAs = symbol;
                symbol.exports = exportedSymbol;
            };
            // Export all the symbols defined in this module.
            if (module && module.metadata) {
                for (var key in module.metadata) {
                    var data = module.metadata[key];
                    if (schema_1.isMetadataImportedSymbolReferenceExpression(data)) {
                        // This is a re-export of an imported symbol. Record this as a re-export.
                        var exportFrom = resolveModule(data.module, moduleName);
                        this.exportAll(exportFrom);
                        var symbol = this.symbolOf(exportFrom, data.name);
                        exportSymbol(symbol, key);
                    }
                    else {
                        // Record that this symbol is exported by this module.
                        result.push(this.symbolOf(moduleName, key));
                    }
                }
            }
            // Export all the re-exports from this module
            if (module && module.exports) {
                var unnamedModuleExportsIdx = 0;
                try {
                    for (var _d = tslib_1.__values(module.exports), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var exportDeclaration = _e.value;
                        var exportFrom = resolveModule(exportDeclaration.from, moduleName);
                        // Record all the exports from the module even if we don't use it directly.
                        var exportedSymbols = this.exportAll(exportFrom);
                        if (exportDeclaration.export) {
                            try {
                                // Re-export all the named exports from a module.
                                for (var _f = (e_2 = void 0, tslib_1.__values(exportDeclaration.export)), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    var exportItem = _g.value;
                                    var name = typeof exportItem == 'string' ? exportItem : exportItem.name;
                                    var exportAs = typeof exportItem == 'string' ? exportItem : exportItem.as;
                                    var symbol = this.symbolOf(exportFrom, name);
                                    if (exportedSymbols && exportedSymbols.length == 1 && exportedSymbols[0].reexport &&
                                        exportedSymbols[0].name == '*') {
                                        // This is a named export from a module we have no metadata about. Record the named
                                        // export as a re-export.
                                        symbol.reexport = true;
                                    }
                                    exportSymbol(this.symbolOf(exportFrom, name), exportAs);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else {
                            // Re-export all the symbols from the module
                            var exportedSymbols_2 = this.exportAll(exportFrom);
                            try {
                                for (var exportedSymbols_1 = (e_3 = void 0, tslib_1.__values(exportedSymbols_2)), exportedSymbols_1_1 = exportedSymbols_1.next(); !exportedSymbols_1_1.done; exportedSymbols_1_1 = exportedSymbols_1.next()) {
                                    var exportedSymbol = exportedSymbols_1_1.value;
                                    // In case the exported symbol does not have a name, we need to give it an unique
                                    // name for the current module. This is necessary because there can be multiple
                                    // unnamed re-exports in a given module.
                                    var name = exportedSymbol.name === '*' ?
                                        "unnamed_reexport_" + unnamedModuleExportsIdx++ :
                                        exportedSymbol.name;
                                    exportSymbol(exportedSymbol, name);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (exportedSymbols_1_1 && !exportedSymbols_1_1.done && (_c = exportedSymbols_1.return)) _c.call(exportedSymbols_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (!module) {
                // If no metadata is found for this import then it is considered external to the
                // library and should be recorded as a re-export in the final metadata if it is
                // eventually re-exported.
                var symbol = this.symbolOf(moduleName, '*');
                symbol.reexport = true;
                result.push(symbol);
            }
            this.exports.set(moduleName, result);
            return result;
        };
        /**
         * Fill in the canonicalSymbol which is the symbol that should be imported by factories.
         * The canonical symbol is the one exported by the index file for the bundle or definition
         * symbol for private symbols that are not exported by bundle index.
         */
        MetadataBundler.prototype.canonicalizeSymbols = function (exportedSymbols) {
            var symbols = Array.from(this.symbolMap.values());
            this.exported = new Set(exportedSymbols);
            symbols.forEach(this.canonicalizeSymbol, this);
        };
        MetadataBundler.prototype.canonicalizeSymbol = function (symbol) {
            var rootExport = getRootExport(symbol);
            var declaration = getSymbolDeclaration(symbol);
            var isPrivate = !this.exported.has(rootExport);
            var canonicalSymbol = isPrivate ? declaration : rootExport;
            symbol.isPrivate = isPrivate;
            symbol.declaration = declaration;
            symbol.canonicalSymbol = canonicalSymbol;
            symbol.reexport = declaration.reexport;
        };
        MetadataBundler.prototype.getEntries = function (exportedSymbols) {
            var _this = this;
            var result = {};
            var exportedNames = new Set(exportedSymbols.map(function (s) { return s.name; }));
            var privateName = 0;
            function newPrivateName(prefix) {
                while (true) {
                    var digits = [];
                    var index = privateName++;
                    var base = PRIVATE_NAME_CHARS;
                    while (!digits.length || index > 0) {
                        digits.unshift(base[index % base.length]);
                        index = Math.floor(index / base.length);
                    }
                    var result_1 = "\u0275" + prefix + digits.join('');
                    if (!exportedNames.has(result_1))
                        return result_1;
                }
            }
            exportedSymbols.forEach(function (symbol) { return _this.convertSymbol(symbol); });
            var symbolsMap = new Map();
            Array.from(this.symbolMap.values()).forEach(function (symbol) {
                if (symbol.referenced && !symbol.reexport) {
                    var name = symbol.name;
                    var identifier = symbol.declaration.module + ":" + symbol.declaration.name;
                    if (symbol.isPrivate && !symbol.privateName) {
                        name = newPrivateName(_this.privateSymbolPrefix);
                        symbol.privateName = name;
                    }
                    if (symbolsMap.has(identifier)) {
                        var names = symbolsMap.get(identifier);
                        names.push(name);
                    }
                    else {
                        symbolsMap.set(identifier, [name]);
                    }
                    result[name] = symbol.value;
                }
            });
            // check for duplicated entries
            symbolsMap.forEach(function (names, identifier) {
                if (names.length > 1) {
                    var _a = tslib_1.__read(identifier.split(':'), 2), module_1 = _a[0], declaredName = _a[1];
                    // prefer the export that uses the declared name (if any)
                    var reference_1 = names.indexOf(declaredName);
                    if (reference_1 === -1) {
                        reference_1 = 0;
                    }
                    // keep one entry and replace the others by references
                    names.forEach(function (name, i) {
                        if (i !== reference_1) {
                            result[name] = { __symbolic: 'reference', name: names[reference_1] };
                        }
                    });
                }
            });
            return result;
        };
        MetadataBundler.prototype.getReExports = function (exportedSymbols) {
            var e_4, _a;
            var modules = new Map();
            var exportAlls = new Set();
            try {
                for (var exportedSymbols_3 = tslib_1.__values(exportedSymbols), exportedSymbols_3_1 = exportedSymbols_3.next(); !exportedSymbols_3_1.done; exportedSymbols_3_1 = exportedSymbols_3.next()) {
                    var symbol = exportedSymbols_3_1.value;
                    if (symbol.reexport) {
                        // symbol.declaration is guaranteed to be defined during the phase this method is called.
                        var declaration = symbol.declaration;
                        var module_2 = declaration.module;
                        if (declaration.name == '*') {
                            // Reexport all the symbols.
                            exportAlls.add(declaration.module);
                        }
                        else {
                            // Re-export the symbol as the exported name.
                            var entry = modules.get(module_2);
                            if (!entry) {
                                entry = [];
                                modules.set(module_2, entry);
                            }
                            var as = symbol.name;
                            var name = declaration.name;
                            entry.push({ name: name, as: as });
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (exportedSymbols_3_1 && !exportedSymbols_3_1.done && (_a = exportedSymbols_3.return)) _a.call(exportedSymbols_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return tslib_1.__spread(Array.from(exportAlls.values()).map(function (from) { return ({ from: from }); }), Array.from(modules.entries()).map(function (_a) {
                var _b = tslib_1.__read(_a, 2), from = _b[0], exports = _b[1];
                return ({ export: exports, from: from });
            }));
        };
        MetadataBundler.prototype.convertSymbol = function (symbol) {
            // canonicalSymbol is ensured to be defined before this is called.
            var canonicalSymbol = symbol.canonicalSymbol;
            if (!canonicalSymbol.referenced) {
                canonicalSymbol.referenced = true;
                // declaration is ensured to be definded before this method is called.
                var declaration = canonicalSymbol.declaration;
                var module_3 = this.getMetadata(declaration.module);
                if (module_3) {
                    var value = module_3.metadata[declaration.name];
                    if (value && !declaration.name.startsWith('___')) {
                        canonicalSymbol.value = this.convertEntry(declaration.module, value);
                    }
                }
            }
        };
        MetadataBundler.prototype.convertEntry = function (moduleName, value) {
            if (schema_1.isClassMetadata(value)) {
                return this.convertClass(moduleName, value);
            }
            if (schema_1.isFunctionMetadata(value)) {
                return this.convertFunction(moduleName, value);
            }
            if (schema_1.isInterfaceMetadata(value)) {
                return value;
            }
            return this.convertValue(moduleName, value);
        };
        MetadataBundler.prototype.convertClass = function (moduleName, value) {
            var _this = this;
            return {
                __symbolic: 'class',
                arity: value.arity,
                extends: this.convertExpression(moduleName, value.extends),
                decorators: value.decorators && value.decorators.map(function (d) { return _this.convertExpression(moduleName, d); }),
                members: this.convertMembers(moduleName, value.members),
                statics: value.statics && this.convertStatics(moduleName, value.statics)
            };
        };
        MetadataBundler.prototype.convertMembers = function (moduleName, members) {
            var _this = this;
            var result = {};
            for (var name in members) {
                var value = members[name];
                result[name] = value.map(function (v) { return _this.convertMember(moduleName, v); });
            }
            return result;
        };
        MetadataBundler.prototype.convertMember = function (moduleName, member) {
            var _this = this;
            var result = { __symbolic: member.__symbolic };
            result.decorators =
                member.decorators && member.decorators.map(function (d) { return _this.convertExpression(moduleName, d); });
            if (schema_1.isMethodMetadata(member)) {
                result.parameterDecorators = member.parameterDecorators &&
                    member.parameterDecorators.map(function (d) { return d && d.map(function (p) { return _this.convertExpression(moduleName, p); }); });
                if (schema_1.isConstructorMetadata(member)) {
                    if (member.parameters) {
                        result.parameters =
                            member.parameters.map(function (p) { return _this.convertExpression(moduleName, p); });
                    }
                }
            }
            return result;
        };
        MetadataBundler.prototype.convertStatics = function (moduleName, statics) {
            var result = {};
            for (var key in statics) {
                var value = statics[key];
                if (schema_1.isFunctionMetadata(value)) {
                    result[key] = this.convertFunction(moduleName, value);
                }
                else if (schema_1.isMetadataSymbolicCallExpression(value)) {
                    // Class members can also contain static members that call a function with module
                    // references. e.g. "static ɵprov = ɵɵdefineInjectable(..)". We also need to
                    // convert these module references because otherwise these resolve to non-existent files.
                    result[key] = this.convertValue(moduleName, value);
                }
                else {
                    result[key] = value;
                }
            }
            return result;
        };
        MetadataBundler.prototype.convertFunction = function (moduleName, value) {
            var _this = this;
            return {
                __symbolic: 'function',
                parameters: value.parameters,
                defaults: value.defaults && value.defaults.map(function (v) { return _this.convertValue(moduleName, v); }),
                value: this.convertValue(moduleName, value.value)
            };
        };
        MetadataBundler.prototype.convertValue = function (moduleName, value) {
            var _this = this;
            if (isPrimitive(value)) {
                return value;
            }
            if (schema_1.isMetadataError(value)) {
                return this.convertError(moduleName, value);
            }
            if (schema_1.isMetadataSymbolicExpression(value)) {
                return this.convertExpression(moduleName, value);
            }
            if (Array.isArray(value)) {
                return value.map(function (v) { return _this.convertValue(moduleName, v); });
            }
            // Otherwise it is a metadata object.
            var object = value;
            var result = {};
            for (var key in object) {
                result[key] = this.convertValue(moduleName, object[key]);
            }
            return result;
        };
        MetadataBundler.prototype.convertExpression = function (moduleName, value) {
            if (value) {
                switch (value.__symbolic) {
                    case 'error':
                        return this.convertError(moduleName, value);
                    case 'reference':
                        return this.convertReference(moduleName, value);
                    default:
                        return this.convertExpressionNode(moduleName, value);
                }
            }
            return value;
        };
        MetadataBundler.prototype.convertError = function (module, value) {
            return {
                __symbolic: 'error',
                message: value.message,
                line: value.line,
                character: value.character,
                context: value.context,
                module: module
            };
        };
        MetadataBundler.prototype.convertReference = function (moduleName, value) {
            var _this = this;
            var createReference = function (symbol) {
                var declaration = symbol.declaration;
                if (declaration.module.startsWith('.')) {
                    // Reference to a symbol defined in the module. Ensure it is converted then return a
                    // references to the final symbol.
                    _this.convertSymbol(symbol);
                    return {
                        __symbolic: 'reference',
                        get name() {
                            // Resolved lazily because private names are assigned late.
                            var canonicalSymbol = symbol.canonicalSymbol;
                            if (canonicalSymbol.isPrivate == null) {
                                throw Error('Invalid state: isPrivate was not initialized');
                            }
                            return canonicalSymbol.isPrivate ? canonicalSymbol.privateName : canonicalSymbol.name;
                        }
                    };
                }
                else {
                    // The symbol was a re-exported symbol from another module. Return a reference to the
                    // original imported symbol.
                    return { __symbolic: 'reference', name: declaration.name, module: declaration.module };
                }
            };
            if (schema_1.isMetadataGlobalReferenceExpression(value)) {
                var metadata = this.getMetadata(moduleName);
                if (metadata && metadata.metadata && metadata.metadata[value.name]) {
                    // Reference to a symbol defined in the module
                    return createReference(this.canonicalSymbolOf(moduleName, value.name));
                }
                // If a reference has arguments, the arguments need to be converted.
                if (value.arguments) {
                    return {
                        __symbolic: 'reference',
                        name: value.name,
                        arguments: value.arguments.map(function (a) { return _this.convertValue(moduleName, a); })
                    };
                }
                // Global references without arguments (such as to Math or JSON) are unmodified.
                return value;
            }
            if (schema_1.isMetadataImportedSymbolReferenceExpression(value)) {
                // References to imported symbols are separated into two, references to bundled modules and
                // references to modules external to the bundle. If the module reference is relative it is
                // assumed to be in the bundle. If it is Global it is assumed to be outside the bundle.
                // References to symbols outside the bundle are left unmodified. References to symbol inside
                // the bundle need to be converted to a bundle import reference reachable from the bundle
                // index.
                if (value.module.startsWith('.')) {
                    // Reference is to a symbol defined inside the module. Convert the reference to a reference
                    // to the canonical symbol.
                    var referencedModule = resolveModule(value.module, moduleName);
                    var referencedName = value.name;
                    return createReference(this.canonicalSymbolOf(referencedModule, referencedName));
                }
                // Value is a reference to a symbol defined outside the module.
                if (value.arguments) {
                    // If a reference has arguments the arguments need to be converted.
                    return {
                        __symbolic: 'reference',
                        name: value.name,
                        module: value.module,
                        arguments: value.arguments.map(function (a) { return _this.convertValue(moduleName, a); })
                    };
                }
                return value;
            }
            if (schema_1.isMetadataModuleReferenceExpression(value)) {
                // Cannot support references to bundled modules as the internal modules of a bundle are erased
                // by the bundler.
                if (value.module.startsWith('.')) {
                    return {
                        __symbolic: 'error',
                        message: 'Unsupported bundled module reference',
                        context: { module: value.module }
                    };
                }
                // References to unbundled modules are unmodified.
                return value;
            }
        };
        MetadataBundler.prototype.convertExpressionNode = function (moduleName, value) {
            var result = { __symbolic: value.__symbolic };
            for (var key in value) {
                result[key] = this.convertValue(moduleName, value[key]);
            }
            return result;
        };
        MetadataBundler.prototype.symbolOf = function (module, name) {
            var symbolKey = module + ":" + name;
            var symbol = this.symbolMap.get(symbolKey);
            if (!symbol) {
                symbol = { module: module, name: name };
                this.symbolMap.set(symbolKey, symbol);
            }
            return symbol;
        };
        MetadataBundler.prototype.canonicalSymbolOf = function (module, name) {
            // Ensure the module has been seen.
            this.exportAll(module);
            var symbol = this.symbolOf(module, name);
            if (!symbol.canonicalSymbol) {
                this.canonicalizeSymbol(symbol);
            }
            return symbol;
        };
        return MetadataBundler;
    }());
    exports.MetadataBundler = MetadataBundler;
    var CompilerHostAdapter = /** @class */ (function () {
        function CompilerHostAdapter(host, cache, options) {
            this.host = host;
            this.cache = cache;
            this.options = options;
            this.collector = new collector_1.MetadataCollector();
        }
        CompilerHostAdapter.prototype.getMetadataFor = function (fileName, containingFile) {
            var resolvedModule = ts.resolveModuleName(fileName, containingFile, this.options, this.host).resolvedModule;
            var sourceFile;
            if (resolvedModule) {
                var resolvedFileName = resolvedModule.resolvedFileName;
                if (resolvedModule.extension !== '.ts') {
                    resolvedFileName = resolvedFileName.replace(/(\.d\.ts|\.js)$/, '.ts');
                }
                sourceFile = this.host.getSourceFile(resolvedFileName, ts.ScriptTarget.Latest);
            }
            else {
                // If typescript is unable to resolve the file, fallback on old behavior
                if (!this.host.fileExists(fileName + '.ts'))
                    return undefined;
                sourceFile = this.host.getSourceFile(fileName + '.ts', ts.ScriptTarget.Latest);
            }
            // If there is a metadata cache, use it to get the metadata for this source file. Otherwise,
            // fall back on the locally created MetadataCollector.
            if (!sourceFile) {
                return undefined;
            }
            else if (this.cache) {
                return this.cache.getMetadata(sourceFile);
            }
            else {
                return this.collector.getMetadata(sourceFile);
            }
        };
        return CompilerHostAdapter;
    }());
    exports.CompilerHostAdapter = CompilerHostAdapter;
    function resolveModule(importName, from) {
        if (importName.startsWith('.') && from) {
            var normalPath = path.normalize(path.join(path.dirname(from), importName));
            if (!normalPath.startsWith('.') && from.startsWith('.')) {
                // path.normalize() preserves leading '../' but not './'. This adds it back.
                normalPath = "." + path.sep + normalPath;
            }
            // Replace windows path delimiters with forward-slashes. Otherwise the paths are not
            // TypeScript compatible when building the bundle.
            return normalPath.replace(/\\/g, '/');
        }
        return importName;
    }
    function isPrimitive(o) {
        return o === null || (typeof o !== 'function' && typeof o !== 'object');
    }
    function getRootExport(symbol) {
        return symbol.reexportedAs ? getRootExport(symbol.reexportedAs) : symbol;
    }
    function getSymbolDeclaration(symbol) {
        return symbol.exports ? getSymbolDeclaration(symbol.exports) : symbol;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbWV0YWRhdGEvYnVuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwyQkFBNkI7SUFDN0IsK0JBQWlDO0lBSWpDLDBFQUE4QztJQUM5QyxvRUFBNGxCO0lBSTVsQixtREFBbUQ7SUFDbkQsSUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQztJQWtFeEQ7UUFTRSx5QkFDWSxJQUFZLEVBQVUsUUFBMEIsRUFBVSxJQUF5QixFQUMzRixtQkFBNEI7WUFEcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUFVLGFBQVEsR0FBUixRQUFRLENBQWtCO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBcUI7WUFUdkYsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1lBQ3RDLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW9DLENBQUM7WUFDNUQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1lBUzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVELDJDQUFpQixHQUFqQjtZQUNFLGdHQUFnRztZQUNoRyxlQUFlO1lBQ2YsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzFDLHVFQUF1RTtZQUN2RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxD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LFNBQVMsYUFBYSxDQUFDLE1BQWM7UUFDbkMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0UsQ0FBQztJQUVELFNBQVMsb0JBQW9CLENBQUMsTUFBYztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TWV0YWRhdGFDYWNoZX0gZnJvbSAnLi4vdHJhbnNmb3JtZXJzL21ldGFkYXRhX2NhY2hlJztcblxuaW1wb3J0IHtNZXRhZGF0YUNvbGxlY3Rvcn0gZnJvbSAnLi9jb2xsZWN0b3InO1xuaW1wb3J0IHtDbGFzc01ldGFkYXRhLCBDb25zdHJ1Y3Rvck1ldGFkYXRhLCBGdW5jdGlvbk1ldGFkYXRhLCBpc0NsYXNzTWV0YWRhdGEsIGlzQ29uc3RydWN0b3JNZXRhZGF0YSwgaXNGdW5jdGlvbk1ldGFkYXRhLCBpc0ludGVyZmFjZU1ldGFkYXRhLCBpc01ldGFkYXRhRXJyb3IsIGlzTWV0YWRhdGFHbG9iYWxSZWZlcmVuY2VFeHByZXNzaW9uLCBpc01ldGFkYXRhSW1wb3J0ZWRTeW1ib2xSZWZlcmVuY2VFeHByZXNzaW9uLCBpc01ldGFkYXRhTW9kdWxlUmVmZXJlbmNlRXhwcmVzc2lvbiwgaXNNZXRhZGF0YVN5bWJvbGljQ2FsbEV4cHJlc3Npb24sIGlzTWV0YWRhdGFTeW1ib2xpY0V4cHJlc3Npb24sIGlzTWV0aG9kTWV0YWRhdGEsIE1lbWJlck1ldGFkYXRhLCBNRVRBREFUQV9WRVJTSU9OLCBNZXRhZGF0YUVudHJ5LCBNZXRhZGF0YUVycm9yLCBNZXRhZGF0YU1hcCwgTWV0YWRhdGFPYmplY3QsIE1ldGFkYXRhU3ltYm9saWNFeHByZXNzaW9uLCBNZXRhZGF0YVN5bWJvbGljUmVmZXJlbmNlRXhwcmVzc2lvbiwgTWV0YWRhdGFWYWx1ZSwgTWV0aG9kTWV0YWRhdGEsIE1vZHVsZUV4cG9ydE1ldGFkYXRhLCBNb2R1bGVNZXRhZGF0YX0gZnJvbSAnLi9zY2hlbWEnO1xuXG5cblxuLy8gVGhlIGNoYXJhY3RlciBzZXQgdXNlZCB0byBwcm9kdWNlIHByaXZhdGUgbmFtZXMuXG5jb25zdCBQUklWQVRFX05BTUVfQ0hBUlMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuXG5pbnRlcmZhY2UgU3ltYm9sIHtcbiAgbW9kdWxlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICAvLyBQcm9kdWNlZCBieSBpbmRpcmVjdGx5IGJ5IGV4cG9ydEFsbCgpIGZvciBzeW1ib2xzIHJlLWV4cG9ydCBhbm90aGVyIHN5bWJvbC5cbiAgZXhwb3J0cz86IFN5bWJvbDtcblxuICAvLyBQcm9kdWNlZCBieSBpbmRpcmVjdGx5IGJ5IGV4cG9ydEFsbCgpIGZvciBzeW1ib2xzIGFyZSByZS1leHBvcnRlZCBieSBhbm90aGVyIHN5bWJvbC5cbiAgcmVleHBvcnRlZEFzPzogU3ltYm9sO1xuXG4gIC8vIFByb2R1Y2VkIGJ5IGNhbm9uaWNhbGl6ZVN5bWJvbHMoKSBmb3IgYWxsIHN5bWJvbHMuIEEgc3ltYm9sIGlzIHByaXZhdGUgaWYgaXQgaXMgbm90XG4gIC8vIGV4cG9ydGVkIGJ5IHRoZSBpbmRleC5cbiAgaXNQcml2YXRlPzogYm9vbGVhbjtcblxuICAvLyBQcm9kdWNlZCBieSBjYW5vbmljYWxpemVTeW1ib2xzKCkgZm9yIGFsbCBzeW1ib2xzLiBUaGlzIGlzIHRoZSBvbmUgc3ltYm9sIHRoYXRcbiAgLy8gcmVzcHJlc2VudHMgYWxsIG90aGVyIHN5bWJvbHMgYW5kIGlzIHRoZSBvbmx5IHN5bWJvbCB0aGF0LCBhbW9uZyBhbGwgdGhlIHJlLWV4cG9ydGVkXG4gIC8vIGFsaWFzZXMsIHdob3NlIGZpZWxkcyBjYW4gYmUgdHJ1c3RlZCB0byBjb250YWluIHRoZSBjb3JyZWN0IGluZm9ybWF0aW9uLlxuICAvLyBGb3IgcHJpdmF0ZSBzeW1ib2xzIHRoaXMgaXMgdGhlIGRlY2xhcmF0aW9uIHN5bWJvbC4gRm9yIHB1YmxpYyBzeW1ib2xzIHRoaXMgaXMgdGhlXG4gIC8vIHN5bWJvbCB0aGF0IGlzIGV4cG9ydGVkLlxuICBjYW5vbmljYWxTeW1ib2w/OiBTeW1ib2w7XG5cbiAgLy8gUHJvZHVjZWQgYnkgY2Fub25pY2FsaXplU3ltYm9scygpIGZvciBhbGwgc3ltYm9scy4gVGhpcyB0aGUgc3ltYm9sIHRoYXQgb3JpZ2luYWxseVxuICAvLyBkZWNsYXJlZCB0aGUgdmFsdWUgYW5kIHNob3VsZCBiZSB1c2VkIHRvIGZldGNoIHRoZSB2YWx1ZS5cbiAgZGVjbGFyYXRpb24/OiBTeW1ib2w7XG5cbiAgLy8gQSBzeW1ib2wgaXMgcmVmZXJlbmNlZCBpZiBpdCBpcyBleHBvcnRlZCBmcm9tIGluZGV4IG9yIHJlZmVyZW5jZWQgYnkgdGhlIHZhbHVlIG9mXG4gIC8vIGEgcmVmZXJlbmNlZCBzeW1ib2wncyB2YWx1ZS5cbiAgcmVmZXJlbmNlZD86IGJvb2xlYW47XG5cbiAgLy8gQSBzeW1ib2wgaXMgbWFya2VkIGFzIGEgcmUtZXhwb3J0IHRoZSBzeW1ib2wgd2FzIHJleHBvcnRlZCBmcm9tIGEgbW9kdWxlIHRoYXQgaXNcbiAgLy8gbm90IHBhcnQgb2YgdGhlIGZsYXQgbW9kdWxlIGJ1bmRsZS5cbiAgcmVleHBvcnQ/OiBib29sZWFuO1xuXG4gIC8vIE9ubHkgdmFsaWQgZm9yIHJlZmVyZW5jZWQgY2Fub25pY2FsIHN5bWJvbHMuIFByb2R1Y2VzIGJ5IGNvbnZlcnRTeW1ib2xzKCkuXG4gIHZhbHVlPzogTWV0YWRhdGFFbnRyeTtcblxuICAvLyBPbmx5IHZhbGlkIGZvciByZWZlcmVuY2VkIHByaXZhdGUgc3ltYm9scy4gSXQgaXMgdGhlIG5hbWUgdG8gdXNlIHRvIGltcG9ydCB0aGUgc3ltYm9sIGZyb21cbiAgLy8gdGhlIGJ1bmRsZSBpbmRleC4gUHJvZHVjZSBieSBhc3NpZ25Qcml2YXRlTmFtZXMoKTtcbiAgcHJpdmF0ZU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVuZGxlRW50cmllcyB7XG4gIFtuYW1lOiBzdHJpbmddOiBNZXRhZGF0YUVudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1bmRsZVByaXZhdGVFbnRyeSB7XG4gIHByaXZhdGVOYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbW9kdWxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVuZGxlZE1vZHVsZSB7XG4gIG1ldGFkYXRhOiBNb2R1bGVNZXRhZGF0YTtcbiAgcHJpdmF0ZXM6IEJ1bmRsZVByaXZhdGVFbnRyeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhQnVuZGxlckhvc3Qge1xuICBnZXRNZXRhZGF0YUZvcihtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlOiBzdHJpbmcpOiBNb2R1bGVNZXRhZGF0YXx1bmRlZmluZWQ7XG59XG5cbnR5cGUgU3RhdGljc01ldGFkYXRhID0ge1xuICBbbmFtZTogc3RyaW5nXTogTWV0YWRhdGFWYWx1ZXxGdW5jdGlvbk1ldGFkYXRhO1xufTtcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQnVuZGxlciB7XG4gIHByaXZhdGUgc3ltYm9sTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN5bWJvbD4oKTtcbiAgcHJpdmF0ZSBtZXRhZGF0YUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIE1vZHVsZU1ldGFkYXRhfHVuZGVmaW5lZD4oKTtcbiAgcHJpdmF0ZSBleHBvcnRzID0gbmV3IE1hcDxzdHJpbmcsIFN5bWJvbFtdPigpO1xuICBwcml2YXRlIHJvb3RNb2R1bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBwcml2YXRlU3ltYm9sUHJlZml4OiBzdHJpbmc7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIGV4cG9ydGVkITogU2V0PFN5bWJvbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJvb3Q6IHN0cmluZywgcHJpdmF0ZSBpbXBvcnRBczogc3RyaW5nfHVuZGVmaW5lZCwgcHJpdmF0ZSBob3N0OiBNZXRhZGF0YUJ1bmRsZXJIb3N0LFxuICAgICAgcHJpdmF0ZVN5bWJvbFByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMucm9vdE1vZHVsZSA9IGAuLyR7cGF0aC5iYXNlbmFtZShyb290KX1gO1xuICAgIHRoaXMucHJpdmF0ZVN5bWJvbFByZWZpeCA9IChwcml2YXRlU3ltYm9sUHJlZml4IHx8ICcnKS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgfVxuXG4gIGdldE1ldGFkYXRhQnVuZGxlKCk6IEJ1bmRsZWRNb2R1bGUge1xuICAgIC8vIEV4cG9ydCB0aGUgcm9vdCBtb2R1bGUuIFRoaXMgYWxzbyBjb2xsZWN0cyB0aGUgdHJhbnNpdGl2ZSBjbG9zdXJlIG9mIGFsbCB2YWx1ZXMgcmVmZXJlbmNlZCBieVxuICAgIC8vIHRoZSBleHBvcnRzLlxuICAgIGNvbnN0IGV4cG9ydGVkU3ltYm9scyA9IHRoaXMuZXhwb3J0QWxsKHRoaXMucm9vdE1vZHVsZSk7XG4gICAgdGhpcy5jYW5vbmljYWxpemVTeW1ib2xzKGV4cG9ydGVkU3ltYm9scyk7XG4gICAgLy8gVE9ETzogZXhwb3J0cz8gZS5nLiBhIG1vZHVsZSByZS1leHBvcnRzIGEgc3ltYm9sIGZyb20gYW5vdGhlciBidW5kbGVcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuZ2V0RW50cmllcyhleHBvcnRlZFN5bWJvbHMpO1xuICAgIGNvbnN0IHByaXZhdGVzID0gQXJyYXkuZnJvbSh0aGlzLnN5bWJvbE1hcC52YWx1ZXMoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHMgPT4gcy5yZWZlcmVuY2VkICYmIHMuaXNQcml2YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocyA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlTmFtZTogcy5wcml2YXRlTmFtZSEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHMuZGVjbGFyYXRpb24hLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogcy5kZWNsYXJhdGlvbiEubW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgY29uc3Qgb3JpZ2lucyA9IEFycmF5LmZyb20odGhpcy5zeW1ib2xNYXAudmFsdWVzKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHMgPT4gcy5yZWZlcmVuY2VkICYmICFzLnJlZXhwb3J0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZTx7W25hbWU6IHN0cmluZ106IHN0cmluZ30+KChwLCBzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBbcy5pc1ByaXZhdGUgPyBzLnByaXZhdGVOYW1lISA6IHMubmFtZV0gPSBzLmRlY2xhcmF0aW9uIS5tb2R1bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgIGNvbnN0IGV4cG9ydHMgPSB0aGlzLmdldFJlRXhwb3J0cyhleHBvcnRlZFN5bWJvbHMpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBfX3N5bWJvbGljOiAnbW9kdWxlJyxcbiAgICAgICAgdmVyc2lvbjogTUVUQURBVEFfVkVSU0lPTixcbiAgICAgICAgZXhwb3J0czogZXhwb3J0cy5sZW5ndGggPyBleHBvcnRzIDogdW5kZWZpbmVkLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgb3JpZ2lucyxcbiAgICAgICAgaW1wb3J0QXM6IHRoaXMuaW1wb3J0QXMhXG4gICAgICB9LFxuICAgICAgcHJpdmF0ZXNcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHJlc29sdmVNb2R1bGUoaW1wb3J0TmFtZTogc3RyaW5nLCBmcm9tOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXNvbHZlTW9kdWxlKGltcG9ydE5hbWUsIGZyb20pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNZXRhZGF0YShtb2R1bGVOYW1lOiBzdHJpbmcpOiBNb2R1bGVNZXRhZGF0YXx1bmRlZmluZWQge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLm1ldGFkYXRhQ2FjaGUuZ2V0KG1vZHVsZU5hbWUpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBpZiAobW9kdWxlTmFtZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgY29uc3QgZnVsbE1vZHVsZU5hbWUgPSByZXNvbHZlTW9kdWxlKG1vZHVsZU5hbWUsIHRoaXMucm9vdCk7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuaG9zdC5nZXRNZXRhZGF0YUZvcihmdWxsTW9kdWxlTmFtZSwgdGhpcy5yb290KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0YWRhdGFDYWNoZS5zZXQobW9kdWxlTmFtZSwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZXhwb3J0QWxsKG1vZHVsZU5hbWU6IHN0cmluZyk6IFN5bWJvbFtdIHtcbiAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmdldE1ldGFkYXRhKG1vZHVsZU5hbWUpO1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmV4cG9ydHMuZ2V0KG1vZHVsZU5hbWUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBbXTtcblxuICAgIGNvbnN0IGV4cG9ydFN5bWJvbCA9IChleHBvcnRlZFN5bWJvbDogU3ltYm9sLCBleHBvcnRBczogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbE9mKG1vZHVsZU5hbWUsIGV4cG9ydEFzKTtcbiAgICAgIHJlc3VsdCEucHVzaChzeW1ib2wpO1xuICAgICAgZXhwb3J0ZWRTeW1ib2wucmVleHBvcnRlZEFzID0gc3ltYm9sO1xuICAgICAgc3ltYm9sLmV4cG9ydHMgPSBleHBvcnRlZFN5bWJvbDtcbiAgICB9O1xuXG4gICAgLy8gRXhwb3J0IGFsbCB0aGUgc3ltYm9scyBkZWZpbmVkIGluIHRoaXMgbW9kdWxlLlxuICAgIGlmIChtb2R1bGUgJiYgbW9kdWxlLm1ldGFkYXRhKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlLm1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBtb2R1bGUubWV0YWRhdGFba2V5XTtcbiAgICAgICAgaWYgKGlzTWV0YWRhdGFJbXBvcnRlZFN5bWJvbFJlZmVyZW5jZUV4cHJlc3Npb24oZGF0YSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGEgcmUtZXhwb3J0IG9mIGFuIGltcG9ydGVkIHN5bWJvbC4gUmVjb3JkIHRoaXMgYXMgYSByZS1leHBvcnQuXG4gICAgICAgICAgY29uc3QgZXhwb3J0RnJvbSA9IHJlc29sdmVNb2R1bGUoZGF0YS5tb2R1bGUsIG1vZHVsZU5hbWUpO1xuICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKGV4cG9ydEZyb20pO1xuICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sT2YoZXhwb3J0RnJvbSwgZGF0YS5uYW1lKTtcbiAgICAgICAgICBleHBvcnRTeW1ib2woc3ltYm9sLCBrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlY29yZCB0aGF0IHRoaXMgc3ltYm9sIGlzIGV4cG9ydGVkIGJ5IHRoaXMgbW9kdWxlLlxuICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3ltYm9sT2YobW9kdWxlTmFtZSwga2V5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgYWxsIHRoZSByZS1leHBvcnRzIGZyb20gdGhpcyBtb2R1bGVcbiAgICBpZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBsZXQgdW5uYW1lZE1vZHVsZUV4cG9ydHNJZHggPSAwO1xuICAgICAgZm9yIChjb25zdCBleHBvcnREZWNsYXJhdGlvbiBvZiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBjb25zdCBleHBvcnRGcm9tID0gcmVzb2x2ZU1vZHVsZShleHBvcnREZWNsYXJhdGlvbi5mcm9tLCBtb2R1bGVOYW1lKTtcbiAgICAgICAgLy8gUmVjb3JkIGFsbCB0aGUgZXhwb3J0cyBmcm9tIHRoZSBtb2R1bGUgZXZlbiBpZiB3ZSBkb24ndCB1c2UgaXQgZGlyZWN0bHkuXG4gICAgICAgIGNvbnN0IGV4cG9ydGVkU3ltYm9scyA9IHRoaXMuZXhwb3J0QWxsKGV4cG9ydEZyb20pO1xuICAgICAgICBpZiAoZXhwb3J0RGVjbGFyYXRpb24uZXhwb3J0KSB7XG4gICAgICAgICAgLy8gUmUtZXhwb3J0IGFsbCB0aGUgbmFtZWQgZXhwb3J0cyBmcm9tIGEgbW9kdWxlLlxuICAgICAgICAgIGZvciAoY29uc3QgZXhwb3J0SXRlbSBvZiBleHBvcnREZWNsYXJhdGlvbi5leHBvcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgZXhwb3J0SXRlbSA9PSAnc3RyaW5nJyA/IGV4cG9ydEl0ZW0gOiBleHBvcnRJdGVtLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRBcyA9IHR5cGVvZiBleHBvcnRJdGVtID09ICdzdHJpbmcnID8gZXhwb3J0SXRlbSA6IGV4cG9ydEl0ZW0uYXM7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbE9mKGV4cG9ydEZyb20sIG5hbWUpO1xuICAgICAgICAgICAgaWYgKGV4cG9ydGVkU3ltYm9scyAmJiBleHBvcnRlZFN5bWJvbHMubGVuZ3RoID09IDEgJiYgZXhwb3J0ZWRTeW1ib2xzWzBdLnJlZXhwb3J0ICYmXG4gICAgICAgICAgICAgICAgZXhwb3J0ZWRTeW1ib2xzWzBdLm5hbWUgPT0gJyonKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBuYW1lZCBleHBvcnQgZnJvbSBhIG1vZHVsZSB3ZSBoYXZlIG5vIG1ldGFkYXRhIGFib3V0LiBSZWNvcmQgdGhlIG5hbWVkXG4gICAgICAgICAgICAgIC8vIGV4cG9ydCBhcyBhIHJlLWV4cG9ydC5cbiAgICAgICAgICAgICAgc3ltYm9sLnJlZXhwb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cG9ydFN5bWJvbCh0aGlzLnN5bWJvbE9mKGV4cG9ydEZyb20sIG5hbWUpLCBleHBvcnRBcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlLWV4cG9ydCBhbGwgdGhlIHN5bWJvbHMgZnJvbSB0aGUgbW9kdWxlXG4gICAgICAgICAgY29uc3QgZXhwb3J0ZWRTeW1ib2xzID0gdGhpcy5leHBvcnRBbGwoZXhwb3J0RnJvbSk7XG4gICAgICAgICAgZm9yIChjb25zdCBleHBvcnRlZFN5bWJvbCBvZiBleHBvcnRlZFN5bWJvbHMpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIGV4cG9ydGVkIHN5bWJvbCBkb2VzIG5vdCBoYXZlIGEgbmFtZSwgd2UgbmVlZCB0byBnaXZlIGl0IGFuIHVuaXF1ZVxuICAgICAgICAgICAgLy8gbmFtZSBmb3IgdGhlIGN1cnJlbnQgbW9kdWxlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZXJlIGNhbiBiZSBtdWx0aXBsZVxuICAgICAgICAgICAgLy8gdW5uYW1lZCByZS1leHBvcnRzIGluIGEgZ2l2ZW4gbW9kdWxlLlxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGV4cG9ydGVkU3ltYm9sLm5hbWUgPT09ICcqJyA/XG4gICAgICAgICAgICAgICAgYHVubmFtZWRfcmVleHBvcnRfJHt1bm5hbWVkTW9kdWxlRXhwb3J0c0lkeCsrfWAgOlxuICAgICAgICAgICAgICAgIGV4cG9ydGVkU3ltYm9sLm5hbWU7XG4gICAgICAgICAgICBleHBvcnRTeW1ib2woZXhwb3J0ZWRTeW1ib2wsIG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAvLyBJZiBubyBtZXRhZGF0YSBpcyBmb3VuZCBmb3IgdGhpcyBpbXBvcnQgdGhlbiBpdCBpcyBjb25zaWRlcmVkIGV4dGVybmFsIHRvIHRoZVxuICAgICAgLy8gbGlicmFyeSBhbmQgc2hvdWxkIGJlIHJlY29yZGVkIGFzIGEgcmUtZXhwb3J0IGluIHRoZSBmaW5hbCBtZXRhZGF0YSBpZiBpdCBpc1xuICAgICAgLy8gZXZlbnR1YWxseSByZS1leHBvcnRlZC5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sT2YobW9kdWxlTmFtZSwgJyonKTtcbiAgICAgIHN5bWJvbC5yZWV4cG9ydCA9IHRydWU7XG4gICAgICByZXN1bHQucHVzaChzeW1ib2wpO1xuICAgIH1cbiAgICB0aGlzLmV4cG9ydHMuc2V0KG1vZHVsZU5hbWUsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGwgaW4gdGhlIGNhbm9uaWNhbFN5bWJvbCB3aGljaCBpcyB0aGUgc3ltYm9sIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkIGJ5IGZhY3Rvcmllcy5cbiAgICogVGhlIGNhbm9uaWNhbCBzeW1ib2wgaXMgdGhlIG9uZSBleHBvcnRlZCBieSB0aGUgaW5kZXggZmlsZSBmb3IgdGhlIGJ1bmRsZSBvciBkZWZpbml0aW9uXG4gICAqIHN5bWJvbCBmb3IgcHJpdmF0ZSBzeW1ib2xzIHRoYXQgYXJlIG5vdCBleHBvcnRlZCBieSBidW5kbGUgaW5kZXguXG4gICAqL1xuICBwcml2YXRlIGNhbm9uaWNhbGl6ZVN5bWJvbHMoZXhwb3J0ZWRTeW1ib2xzOiBTeW1ib2xbXSkge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBBcnJheS5mcm9tKHRoaXMuc3ltYm9sTWFwLnZhbHVlcygpKTtcbiAgICB0aGlzLmV4cG9ydGVkID0gbmV3IFNldChleHBvcnRlZFN5bWJvbHMpO1xuICAgIHN5bWJvbHMuZm9yRWFjaCh0aGlzLmNhbm9uaWNhbGl6ZVN5bWJvbCwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGNhbm9uaWNhbGl6ZVN5bWJvbChzeW1ib2w6IFN5bWJvbCkge1xuICAgIGNvbnN0IHJvb3RFeHBvcnQgPSBnZXRSb290RXhwb3J0KHN5bWJvbCk7XG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBnZXRTeW1ib2xEZWNsYXJhdGlvbihzeW1ib2wpO1xuICAgIGNvbnN0IGlzUHJpdmF0ZSA9ICF0aGlzLmV4cG9ydGVkLmhhcyhyb290RXhwb3J0KTtcbiAgICBjb25zdCBjYW5vbmljYWxTeW1ib2wgPSBpc1ByaXZhdGUgPyBkZWNsYXJhdGlvbiA6IHJvb3RFeHBvcnQ7XG4gICAgc3ltYm9sLmlzUHJpdmF0ZSA9IGlzUHJpdmF0ZTtcbiAgICBzeW1ib2wuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgICBzeW1ib2wuY2Fub25pY2FsU3ltYm9sID0gY2Fub25pY2FsU3ltYm9sO1xuICAgIHN5bWJvbC5yZWV4cG9ydCA9IGRlY2xhcmF0aW9uLnJlZXhwb3J0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRyaWVzKGV4cG9ydGVkU3ltYm9sczogU3ltYm9sW10pOiBCdW5kbGVFbnRyaWVzIHtcbiAgICBjb25zdCByZXN1bHQ6IEJ1bmRsZUVudHJpZXMgPSB7fTtcblxuICAgIGNvbnN0IGV4cG9ydGVkTmFtZXMgPSBuZXcgU2V0KGV4cG9ydGVkU3ltYm9scy5tYXAocyA9PiBzLm5hbWUpKTtcbiAgICBsZXQgcHJpdmF0ZU5hbWUgPSAwO1xuXG4gICAgZnVuY3Rpb24gbmV3UHJpdmF0ZU5hbWUocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IGRpZ2l0czogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IGluZGV4ID0gcHJpdmF0ZU5hbWUrKztcbiAgICAgICAgbGV0IGJhc2UgPSBQUklWQVRFX05BTUVfQ0hBUlM7XG4gICAgICAgIHdoaWxlICghZGlnaXRzLmxlbmd0aCB8fCBpbmRleCA+IDApIHtcbiAgICAgICAgICBkaWdpdHMudW5zaGlmdChiYXNlW2luZGV4ICUgYmFzZS5sZW5ndGhdKTtcbiAgICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBiYXNlLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYFxcdTAyNzUke3ByZWZpeH0ke2RpZ2l0cy5qb2luKCcnKX1gO1xuICAgICAgICBpZiAoIWV4cG9ydGVkTmFtZXMuaGFzKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0ZWRTeW1ib2xzLmZvckVhY2goc3ltYm9sID0+IHRoaXMuY29udmVydFN5bWJvbChzeW1ib2wpKTtcblxuICAgIGNvbnN0IHN5bWJvbHNNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnN5bWJvbE1hcC52YWx1ZXMoKSkuZm9yRWFjaChzeW1ib2wgPT4ge1xuICAgICAgaWYgKHN5bWJvbC5yZWZlcmVuY2VkICYmICFzeW1ib2wucmVleHBvcnQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBzeW1ib2wubmFtZTtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGAke3N5bWJvbC5kZWNsYXJhdGlvbiEubW9kdWxlfToke3N5bWJvbC5kZWNsYXJhdGlvbiEubmFtZX1gO1xuICAgICAgICBpZiAoc3ltYm9sLmlzUHJpdmF0ZSAmJiAhc3ltYm9sLnByaXZhdGVOYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IG5ld1ByaXZhdGVOYW1lKHRoaXMucHJpdmF0ZVN5bWJvbFByZWZpeCk7XG4gICAgICAgICAgc3ltYm9sLnByaXZhdGVOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ltYm9sc01hcC5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgICAgICBjb25zdCBuYW1lcyA9IHN5bWJvbHNNYXAuZ2V0KGlkZW50aWZpZXIpO1xuICAgICAgICAgIG5hbWVzIS5wdXNoKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN5bWJvbHNNYXAuc2V0KGlkZW50aWZpZXIsIFtuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W25hbWVdID0gc3ltYm9sLnZhbHVlITtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrIGZvciBkdXBsaWNhdGVkIGVudHJpZXNcbiAgICBzeW1ib2xzTWFwLmZvckVhY2goKG5hbWVzOiBzdHJpbmdbXSwgaWRlbnRpZmllcjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAobmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBbbW9kdWxlLCBkZWNsYXJlZE5hbWVdID0gaWRlbnRpZmllci5zcGxpdCgnOicpO1xuICAgICAgICAvLyBwcmVmZXIgdGhlIGV4cG9ydCB0aGF0IHVzZXMgdGhlIGRlY2xhcmVkIG5hbWUgKGlmIGFueSlcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IG5hbWVzLmluZGV4T2YoZGVjbGFyZWROYW1lKTtcbiAgICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gLTEpIHtcbiAgICAgICAgICByZWZlcmVuY2UgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8ga2VlcCBvbmUgZW50cnkgYW5kIHJlcGxhY2UgdGhlIG90aGVycyBieSByZWZlcmVuY2VzXG4gICAgICAgIG5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGkgIT09IHJlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmVzdWx0W25hbWVdID0ge19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBuYW1lOiBuYW1lc1tyZWZlcmVuY2VdfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVFeHBvcnRzKGV4cG9ydGVkU3ltYm9sczogU3ltYm9sW10pOiBNb2R1bGVFeHBvcnRNZXRhZGF0YVtdIHtcbiAgICB0eXBlIEV4cG9ydENsYXVzZSA9IHtuYW1lOiBzdHJpbmcsIGFzOiBzdHJpbmd9W107XG4gICAgY29uc3QgbW9kdWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBFeHBvcnRDbGF1c2U+KCk7XG4gICAgY29uc3QgZXhwb3J0QWxscyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3Qgc3ltYm9sIG9mIGV4cG9ydGVkU3ltYm9scykge1xuICAgICAgaWYgKHN5bWJvbC5yZWV4cG9ydCkge1xuICAgICAgICAvLyBzeW1ib2wuZGVjbGFyYXRpb24gaXMgZ3VhcmFudGVlZCB0byBiZSBkZWZpbmVkIGR1cmluZyB0aGUgcGhhc2UgdGhpcyBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHN5bWJvbC5kZWNsYXJhdGlvbiE7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRlY2xhcmF0aW9uLm1vZHVsZTtcbiAgICAgICAgaWYgKGRlY2xhcmF0aW9uIS5uYW1lID09ICcqJykge1xuICAgICAgICAgIC8vIFJlZXhwb3J0IGFsbCB0aGUgc3ltYm9scy5cbiAgICAgICAgICBleHBvcnRBbGxzLmFkZChkZWNsYXJhdGlvbi5tb2R1bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlLWV4cG9ydCB0aGUgc3ltYm9sIGFzIHRoZSBleHBvcnRlZCBuYW1lLlxuICAgICAgICAgIGxldCBlbnRyeSA9IG1vZHVsZXMuZ2V0KG1vZHVsZSk7XG4gICAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkgPSBbXTtcbiAgICAgICAgICAgIG1vZHVsZXMuc2V0KG1vZHVsZSwgZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhcyA9IHN5bWJvbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZWNsYXJhdGlvbi5uYW1lO1xuICAgICAgICAgIGVudHJ5LnB1c2goe25hbWUsIGFzfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLkFycmF5LmZyb20oZXhwb3J0QWxscy52YWx1ZXMoKSkubWFwKGZyb20gPT4gKHtmcm9tfSkpLFxuICAgICAgLi4uQXJyYXkuZnJvbShtb2R1bGVzLmVudHJpZXMoKSkubWFwKChbZnJvbSwgZXhwb3J0c10pID0+ICh7ZXhwb3J0OiBleHBvcnRzLCBmcm9tfSkpXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFN5bWJvbChzeW1ib2w6IFN5bWJvbCkge1xuICAgIC8vIGNhbm9uaWNhbFN5bWJvbCBpcyBlbnN1cmVkIHRvIGJlIGRlZmluZWQgYmVmb3JlIHRoaXMgaXMgY2FsbGVkLlxuICAgIGNvbnN0IGNhbm9uaWNhbFN5bWJvbCA9IHN5bWJvbC5jYW5vbmljYWxTeW1ib2whO1xuXG4gICAgaWYgKCFjYW5vbmljYWxTeW1ib2wucmVmZXJlbmNlZCkge1xuICAgICAgY2Fub25pY2FsU3ltYm9sLnJlZmVyZW5jZWQgPSB0cnVlO1xuICAgICAgLy8gZGVjbGFyYXRpb24gaXMgZW5zdXJlZCB0byBiZSBkZWZpbmRlZCBiZWZvcmUgdGhpcyBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBjYW5vbmljYWxTeW1ib2wuZGVjbGFyYXRpb24hO1xuICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5nZXRNZXRhZGF0YShkZWNsYXJhdGlvbi5tb2R1bGUpO1xuICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1vZHVsZS5tZXRhZGF0YVtkZWNsYXJhdGlvbi5uYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlICYmICFkZWNsYXJhdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ19fXycpKSB7XG4gICAgICAgICAgY2Fub25pY2FsU3ltYm9sLnZhbHVlID0gdGhpcy5jb252ZXJ0RW50cnkoZGVjbGFyYXRpb24ubW9kdWxlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbnRyeShtb2R1bGVOYW1lOiBzdHJpbmcsIHZhbHVlOiBNZXRhZGF0YUVudHJ5KTogTWV0YWRhdGFFbnRyeSB7XG4gICAgaWYgKGlzQ2xhc3NNZXRhZGF0YSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRDbGFzcyhtb2R1bGVOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uTWV0YWRhdGEodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuY3Rpb24obW9kdWxlTmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNJbnRlcmZhY2VNZXRhZGF0YSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFZhbHVlKG1vZHVsZU5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENsYXNzKG1vZHVsZU5hbWU6IHN0cmluZywgdmFsdWU6IENsYXNzTWV0YWRhdGEpOiBDbGFzc01ldGFkYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19zeW1ib2xpYzogJ2NsYXNzJyxcbiAgICAgIGFyaXR5OiB2YWx1ZS5hcml0eSxcbiAgICAgIGV4dGVuZHM6IHRoaXMuY29udmVydEV4cHJlc3Npb24obW9kdWxlTmFtZSwgdmFsdWUuZXh0ZW5kcykgISxcbiAgICAgIGRlY29yYXRvcnM6XG4gICAgICAgICAgdmFsdWUuZGVjb3JhdG9ycyAmJiB2YWx1ZS5kZWNvcmF0b3JzLm1hcChkID0+IHRoaXMuY29udmVydEV4cHJlc3Npb24obW9kdWxlTmFtZSwgZCkgISksXG4gICAgICBtZW1iZXJzOiB0aGlzLmNvbnZlcnRNZW1iZXJzKG1vZHVsZU5hbWUsIHZhbHVlLm1lbWJlcnMgISksXG4gICAgICBzdGF0aWNzOiB2YWx1ZS5zdGF0aWNzICYmIHRoaXMuY29udmVydFN0YXRpY3MobW9kdWxlTmFtZSwgdmFsdWUuc3RhdGljcylcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TWVtYmVycyhtb2R1bGVOYW1lOiBzdHJpbmcsIG1lbWJlcnM6IE1ldGFkYXRhTWFwKTogTWV0YWRhdGFNYXAge1xuICAgIGNvbnN0IHJlc3VsdDogTWV0YWRhdGFNYXAgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbWVtYmVycykge1xuICAgICAgY29uc3QgdmFsdWUgPSBtZW1iZXJzW25hbWVdO1xuICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWUubWFwKHYgPT4gdGhpcy5jb252ZXJ0TWVtYmVyKG1vZHVsZU5hbWUsIHYpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE1lbWJlcihtb2R1bGVOYW1lOiBzdHJpbmcsIG1lbWJlcjogTWVtYmVyTWV0YWRhdGEpIHtcbiAgICBjb25zdCByZXN1bHQ6IE1lbWJlck1ldGFkYXRhID0ge19fc3ltYm9saWM6IG1lbWJlci5fX3N5bWJvbGljfTtcbiAgICByZXN1bHQuZGVjb3JhdG9ycyA9XG4gICAgICAgIG1lbWJlci5kZWNvcmF0b3JzICYmIG1lbWJlci5kZWNvcmF0b3JzLm1hcChkID0+IHRoaXMuY29udmVydEV4cHJlc3Npb24obW9kdWxlTmFtZSwgZCkhKTtcbiAgICBpZiAoaXNNZXRob2RNZXRhZGF0YShtZW1iZXIpKSB7XG4gICAgICAocmVzdWx0IGFzIE1ldGhvZE1ldGFkYXRhKS5wYXJhbWV0ZXJEZWNvcmF0b3JzID0gbWVtYmVyLnBhcmFtZXRlckRlY29yYXRvcnMgJiZcbiAgICAgICAgICBtZW1iZXIucGFyYW1ldGVyRGVjb3JhdG9ycy5tYXAoXG4gICAgICAgICAgICAgIGQgPT4gZCAmJiBkLm1hcChwID0+IHRoaXMuY29udmVydEV4cHJlc3Npb24obW9kdWxlTmFtZSwgcCkhKSk7XG4gICAgICBpZiAoaXNDb25zdHJ1Y3Rvck1ldGFkYXRhKG1lbWJlcikpIHtcbiAgICAgICAgaWYgKG1lbWJlci5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgKHJlc3VsdCBhcyBDb25zdHJ1Y3Rvck1ldGFkYXRhKS5wYXJhbWV0ZXJzID1cbiAgICAgICAgICAgICAgbWVtYmVyLnBhcmFtZXRlcnMubWFwKHAgPT4gdGhpcy5jb252ZXJ0RXhwcmVzc2lvbihtb2R1bGVOYW1lLCBwKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFN0YXRpY3MobW9kdWxlTmFtZTogc3RyaW5nLCBzdGF0aWNzOiBTdGF0aWNzTWV0YWRhdGEpOiBTdGF0aWNzTWV0YWRhdGEge1xuICAgIGxldCByZXN1bHQ6IFN0YXRpY3NNZXRhZGF0YSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0YXRpY3MpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGljc1trZXldO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbk1ldGFkYXRhKHZhbHVlKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMuY29udmVydEZ1bmN0aW9uKG1vZHVsZU5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZXRhZGF0YVN5bWJvbGljQ2FsbEV4cHJlc3Npb24odmFsdWUpKSB7XG4gICAgICAgIC8vIENsYXNzIG1lbWJlcnMgY2FuIGFsc28gY29udGFpbiBzdGF0aWMgbWVtYmVycyB0aGF0IGNhbGwgYSBmdW5jdGlvbiB3aXRoIG1vZHVsZVxuICAgICAgICAvLyByZWZlcmVuY2VzLiBlLmcuIFwic3RhdGljIMm1cHJvdiA9IMm1ybVkZWZpbmVJbmplY3RhYmxlKC4uKVwiLiBXZSBhbHNvIG5lZWQgdG9cbiAgICAgICAgLy8gY29udmVydCB0aGVzZSBtb2R1bGUgcmVmZXJlbmNlcyBiZWNhdXNlIG90aGVyd2lzZSB0aGVzZSByZXNvbHZlIHRvIG5vbi1leGlzdGVudCBmaWxlcy5cbiAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLmNvbnZlcnRWYWx1ZShtb2R1bGVOYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RnVuY3Rpb24obW9kdWxlTmFtZTogc3RyaW5nLCB2YWx1ZTogRnVuY3Rpb25NZXRhZGF0YSk6IEZ1bmN0aW9uTWV0YWRhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBfX3N5bWJvbGljOiAnZnVuY3Rpb24nLFxuICAgICAgcGFyYW1ldGVyczogdmFsdWUucGFyYW1ldGVycyxcbiAgICAgIGRlZmF1bHRzOiB2YWx1ZS5kZWZhdWx0cyAmJiB2YWx1ZS5kZWZhdWx0cy5tYXAodiA9PiB0aGlzLmNvbnZlcnRWYWx1ZShtb2R1bGVOYW1lLCB2KSksXG4gICAgICB2YWx1ZTogdGhpcy5jb252ZXJ0VmFsdWUobW9kdWxlTmFtZSwgdmFsdWUudmFsdWUpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFZhbHVlKG1vZHVsZU5hbWU6IHN0cmluZywgdmFsdWU6IE1ldGFkYXRhVmFsdWUpOiBNZXRhZGF0YVZhbHVlIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChpc01ldGFkYXRhRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RXJyb3IobW9kdWxlTmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNNZXRhZGF0YVN5bWJvbGljRXhwcmVzc2lvbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRFeHByZXNzaW9uKG1vZHVsZU5hbWUsIHZhbHVlKSE7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCh2ID0+IHRoaXMuY29udmVydFZhbHVlKG1vZHVsZU5hbWUsIHYpKTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgaXQgaXMgYSBtZXRhZGF0YSBvYmplY3QuXG4gICAgY29uc3Qgb2JqZWN0ID0gdmFsdWUgYXMgTWV0YWRhdGFPYmplY3Q7XG4gICAgY29uc3QgcmVzdWx0OiBNZXRhZGF0YU9iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLmNvbnZlcnRWYWx1ZShtb2R1bGVOYW1lLCBvYmplY3Rba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFeHByZXNzaW9uKFxuICAgICAgbW9kdWxlTmFtZTogc3RyaW5nLCB2YWx1ZTogTWV0YWRhdGFTeW1ib2xpY0V4cHJlc3Npb258TWV0YWRhdGFFcnJvcnxudWxsfHVuZGVmaW5lZCk6XG4gICAgICBNZXRhZGF0YVN5bWJvbGljRXhwcmVzc2lvbnxNZXRhZGF0YUVycm9yfHVuZGVmaW5lZHxudWxsIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodmFsdWUuX19zeW1ib2xpYykge1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEVycm9yKG1vZHVsZU5hbWUsIHZhbHVlIGFzIE1ldGFkYXRhRXJyb3IpO1xuICAgICAgICBjYXNlICdyZWZlcmVuY2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSZWZlcmVuY2UobW9kdWxlTmFtZSwgdmFsdWUgYXMgTWV0YWRhdGFTeW1ib2xpY1JlZmVyZW5jZUV4cHJlc3Npb24pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRFeHByZXNzaW9uTm9kZShtb2R1bGVOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVycm9yKG1vZHVsZTogc3RyaW5nLCB2YWx1ZTogTWV0YWRhdGFFcnJvcik6IE1ldGFkYXRhRXJyb3Ige1xuICAgIHJldHVybiB7XG4gICAgICBfX3N5bWJvbGljOiAnZXJyb3InLFxuICAgICAgbWVzc2FnZTogdmFsdWUubWVzc2FnZSxcbiAgICAgIGxpbmU6IHZhbHVlLmxpbmUsXG4gICAgICBjaGFyYWN0ZXI6IHZhbHVlLmNoYXJhY3RlcixcbiAgICAgIGNvbnRleHQ6IHZhbHVlLmNvbnRleHQsXG4gICAgICBtb2R1bGVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmVmZXJlbmNlKG1vZHVsZU5hbWU6IHN0cmluZywgdmFsdWU6IE1ldGFkYXRhU3ltYm9saWNSZWZlcmVuY2VFeHByZXNzaW9uKTpcbiAgICAgIE1ldGFkYXRhU3ltYm9saWNSZWZlcmVuY2VFeHByZXNzaW9ufE1ldGFkYXRhRXJyb3J8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBjcmVhdGVSZWZlcmVuY2UgPSAoc3ltYm9sOiBTeW1ib2wpOiBNZXRhZGF0YVN5bWJvbGljUmVmZXJlbmNlRXhwcmVzc2lvbiA9PiB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHN5bWJvbC5kZWNsYXJhdGlvbiE7XG4gICAgICBpZiAoZGVjbGFyYXRpb24ubW9kdWxlLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICAvLyBSZWZlcmVuY2UgdG8gYSBzeW1ib2wgZGVmaW5lZCBpbiB0aGUgbW9kdWxlLiBFbnN1cmUgaXQgaXMgY29udmVydGVkIHRoZW4gcmV0dXJuIGFcbiAgICAgICAgLy8gcmVmZXJlbmNlcyB0byB0aGUgZmluYWwgc3ltYm9sLlxuICAgICAgICB0aGlzLmNvbnZlcnRTeW1ib2woc3ltYm9sKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfX3N5bWJvbGljOiAncmVmZXJlbmNlJyxcbiAgICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIC8vIFJlc29sdmVkIGxhemlseSBiZWNhdXNlIHByaXZhdGUgbmFtZXMgYXJlIGFzc2lnbmVkIGxhdGUuXG4gICAgICAgICAgICBjb25zdCBjYW5vbmljYWxTeW1ib2wgPSBzeW1ib2wuY2Fub25pY2FsU3ltYm9sITtcbiAgICAgICAgICAgIGlmIChjYW5vbmljYWxTeW1ib2wuaXNQcml2YXRlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgc3RhdGU6IGlzUHJpdmF0ZSB3YXMgbm90IGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2Fub25pY2FsU3ltYm9sLmlzUHJpdmF0ZSA/IGNhbm9uaWNhbFN5bWJvbC5wcml2YXRlTmFtZSEgOiBjYW5vbmljYWxTeW1ib2wubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgc3ltYm9sIHdhcyBhIHJlLWV4cG9ydGVkIHN5bWJvbCBmcm9tIGFub3RoZXIgbW9kdWxlLiBSZXR1cm4gYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIGltcG9ydGVkIHN5bWJvbC5cbiAgICAgICAgcmV0dXJuIHtfX3N5bWJvbGljOiAncmVmZXJlbmNlJywgbmFtZTogZGVjbGFyYXRpb24ubmFtZSwgbW9kdWxlOiBkZWNsYXJhdGlvbi5tb2R1bGV9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoaXNNZXRhZGF0YUdsb2JhbFJlZmVyZW5jZUV4cHJlc3Npb24odmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuZ2V0TWV0YWRhdGEobW9kdWxlTmFtZSk7XG4gICAgICBpZiAobWV0YWRhdGEgJiYgbWV0YWRhdGEubWV0YWRhdGEgJiYgbWV0YWRhdGEubWV0YWRhdGFbdmFsdWUubmFtZV0pIHtcbiAgICAgICAgLy8gUmVmZXJlbmNlIHRvIGEgc3ltYm9sIGRlZmluZWQgaW4gdGhlIG1vZHVsZVxuICAgICAgICByZXR1cm4gY3JlYXRlUmVmZXJlbmNlKHRoaXMuY2Fub25pY2FsU3ltYm9sT2YobW9kdWxlTmFtZSwgdmFsdWUubmFtZSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhIHJlZmVyZW5jZSBoYXMgYXJndW1lbnRzLCB0aGUgYXJndW1lbnRzIG5lZWQgdG8gYmUgY29udmVydGVkLlxuICAgICAgaWYgKHZhbHVlLmFyZ3VtZW50cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF9fc3ltYm9saWM6ICdyZWZlcmVuY2UnLFxuICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXG4gICAgICAgICAgYXJndW1lbnRzOiB2YWx1ZS5hcmd1bWVudHMubWFwKGEgPT4gdGhpcy5jb252ZXJ0VmFsdWUobW9kdWxlTmFtZSwgYSkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEdsb2JhbCByZWZlcmVuY2VzIHdpdGhvdXQgYXJndW1lbnRzIChzdWNoIGFzIHRvIE1hdGggb3IgSlNPTikgYXJlIHVubW9kaWZpZWQuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGlzTWV0YWRhdGFJbXBvcnRlZFN5bWJvbFJlZmVyZW5jZUV4cHJlc3Npb24odmFsdWUpKSB7XG4gICAgICAvLyBSZWZlcmVuY2VzIHRvIGltcG9ydGVkIHN5bWJvbHMgYXJlIHNlcGFyYXRlZCBpbnRvIHR3bywgcmVmZXJlbmNlcyB0byBidW5kbGVkIG1vZHVsZXMgYW5kXG4gICAgICAvLyByZWZlcmVuY2VzIHRvIG1vZHVsZXMgZXh0ZXJuYWwgdG8gdGhlIGJ1bmRsZS4gSWYgdGhlIG1vZHVsZSByZWZlcmVuY2UgaXMgcmVsYXRpdmUgaXQgaXNcbiAgICAgIC8vIGFzc3VtZWQgdG8gYmUgaW4gdGhlIGJ1bmRsZS4gSWYgaXQgaXMgR2xvYmFsIGl0IGlzIGFzc3VtZWQgdG8gYmUgb3V0c2lkZSB0aGUgYnVuZGxlLlxuICAgICAgLy8gUmVmZXJlbmNlcyB0byBzeW1ib2xzIG91dHNpZGUgdGhlIGJ1bmRsZSBhcmUgbGVmdCB1bm1vZGlmaWVkLiBSZWZlcmVuY2VzIHRvIHN5bWJvbCBpbnNpZGVcbiAgICAgIC8vIHRoZSBidW5kbGUgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBidW5kbGUgaW1wb3J0IHJlZmVyZW5jZSByZWFjaGFibGUgZnJvbSB0aGUgYnVuZGxlXG4gICAgICAvLyBpbmRleC5cblxuICAgICAgaWYgKHZhbHVlLm1vZHVsZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgLy8gUmVmZXJlbmNlIGlzIHRvIGEgc3ltYm9sIGRlZmluZWQgaW5zaWRlIHRoZSBtb2R1bGUuIENvbnZlcnQgdGhlIHJlZmVyZW5jZSB0byBhIHJlZmVyZW5jZVxuICAgICAgICAvLyB0byB0aGUgY2Fub25pY2FsIHN5bWJvbC5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlZE1vZHVsZSA9IHJlc29sdmVNb2R1bGUodmFsdWUubW9kdWxlLCBtb2R1bGVOYW1lKTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlZE5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgICByZXR1cm4gY3JlYXRlUmVmZXJlbmNlKHRoaXMuY2Fub25pY2FsU3ltYm9sT2YocmVmZXJlbmNlZE1vZHVsZSwgcmVmZXJlbmNlZE5hbWUpKTtcbiAgICAgIH1cblxuICAgICAgLy8gVmFsdWUgaXMgYSByZWZlcmVuY2UgdG8gYSBzeW1ib2wgZGVmaW5lZCBvdXRzaWRlIHRoZSBtb2R1bGUuXG4gICAgICBpZiAodmFsdWUuYXJndW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGEgcmVmZXJlbmNlIGhhcyBhcmd1bWVudHMgdGhlIGFyZ3VtZW50cyBuZWVkIHRvIGJlIGNvbnZlcnRlZC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfX3N5bWJvbGljOiAncmVmZXJlbmNlJyxcbiAgICAgICAgICBuYW1lOiB2YWx1ZS5uYW1lLFxuICAgICAgICAgIG1vZHVsZTogdmFsdWUubW9kdWxlLFxuICAgICAgICAgIGFyZ3VtZW50czogdmFsdWUuYXJndW1lbnRzLm1hcChhID0+IHRoaXMuY29udmVydFZhbHVlKG1vZHVsZU5hbWUsIGEpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc01ldGFkYXRhTW9kdWxlUmVmZXJlbmNlRXhwcmVzc2lvbih2YWx1ZSkpIHtcbiAgICAgIC8vIENhbm5vdCBzdXBwb3J0IHJlZmVyZW5jZXMgdG8gYnVuZGxlZCBtb2R1bGVzIGFzIHRoZSBpbnRlcm5hbCBtb2R1bGVzIG9mIGEgYnVuZGxlIGFyZSBlcmFzZWRcbiAgICAgIC8vIGJ5IHRoZSBidW5kbGVyLlxuICAgICAgaWYgKHZhbHVlLm1vZHVsZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfX3N5bWJvbGljOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICdVbnN1cHBvcnRlZCBidW5kbGVkIG1vZHVsZSByZWZlcmVuY2UnLFxuICAgICAgICAgIGNvbnRleHQ6IHttb2R1bGU6IHZhbHVlLm1vZHVsZX1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVmZXJlbmNlcyB0byB1bmJ1bmRsZWQgbW9kdWxlcyBhcmUgdW5tb2RpZmllZC5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFeHByZXNzaW9uTm9kZShtb2R1bGVOYW1lOiBzdHJpbmcsIHZhbHVlOiBNZXRhZGF0YVN5bWJvbGljRXhwcmVzc2lvbik6XG4gICAgICBNZXRhZGF0YVN5bWJvbGljRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgcmVzdWx0OiBNZXRhZGF0YVN5bWJvbGljRXhwcmVzc2lvbiA9IHtfX3N5bWJvbGljOiB2YWx1ZS5fX3N5bWJvbGljfSBhcyBhbnk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIChyZXN1bHQgYXMgYW55KVtrZXldID0gdGhpcy5jb252ZXJ0VmFsdWUobW9kdWxlTmFtZSwgKHZhbHVlIGFzIGFueSlba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN5bWJvbE9mKG1vZHVsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBTeW1ib2wge1xuICAgIGNvbnN0IHN5bWJvbEtleSA9IGAke21vZHVsZX06JHtuYW1lfWA7XG4gICAgbGV0IHN5bWJvbCA9IHRoaXMuc3ltYm9sTWFwLmdldChzeW1ib2xLZXkpO1xuICAgIGlmICghc3ltYm9sKSB7XG4gICAgICBzeW1ib2wgPSB7bW9kdWxlLCBuYW1lfTtcbiAgICAgIHRoaXMuc3ltYm9sTWFwLnNldChzeW1ib2xLZXksIHN5bWJvbCk7XG4gICAgfVxuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cblxuICBwcml2YXRlIGNhbm9uaWNhbFN5bWJvbE9mKG1vZHVsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBTeW1ib2wge1xuICAgIC8vIEVuc3VyZSB0aGUgbW9kdWxlIGhhcyBiZWVuIHNlZW4uXG4gICAgdGhpcy5leHBvcnRBbGwobW9kdWxlKTtcbiAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbE9mKG1vZHVsZSwgbmFtZSk7XG4gICAgaWYgKCFzeW1ib2wuY2Fub25pY2FsU3ltYm9sKSB7XG4gICAgICB0aGlzLmNhbm9uaWNhbGl6ZVN5bWJvbChzeW1ib2wpO1xuICAgIH1cbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21waWxlckhvc3RBZGFwdGVyIGltcGxlbWVudHMgTWV0YWRhdGFCdW5kbGVySG9zdCB7XG4gIHByaXZhdGUgY29sbGVjdG9yID0gbmV3IE1ldGFkYXRhQ29sbGVjdG9yKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGhvc3Q6IHRzLkNvbXBpbGVySG9zdCwgcHJpdmF0ZSBjYWNoZTogTWV0YWRhdGFDYWNoZXxudWxsLFxuICAgICAgcHJpdmF0ZSBvcHRpb25zOiB0cy5Db21waWxlck9wdGlvbnMpIHt9XG5cbiAgZ2V0TWV0YWRhdGFGb3IoZmlsZU5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGU6IHN0cmluZyk6IE1vZHVsZU1ldGFkYXRhfHVuZGVmaW5lZCB7XG4gICAgY29uc3Qge3Jlc29sdmVkTW9kdWxlfSA9XG4gICAgICAgIHRzLnJlc29sdmVNb2R1bGVOYW1lKGZpbGVOYW1lLCBjb250YWluaW5nRmlsZSwgdGhpcy5vcHRpb25zLCB0aGlzLmhvc3QpO1xuXG4gICAgbGV0IHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGV8dW5kZWZpbmVkO1xuICAgIGlmIChyZXNvbHZlZE1vZHVsZSkge1xuICAgICAgbGV0IHtyZXNvbHZlZEZpbGVOYW1lfSA9IHJlc29sdmVkTW9kdWxlO1xuICAgICAgaWYgKHJlc29sdmVkTW9kdWxlLmV4dGVuc2lvbiAhPT0gJy50cycpIHtcbiAgICAgICAgcmVzb2x2ZWRGaWxlTmFtZSA9IHJlc29sdmVkRmlsZU5hbWUucmVwbGFjZSgvKFxcLmRcXC50c3xcXC5qcykkLywgJy50cycpO1xuICAgICAgfVxuICAgICAgc291cmNlRmlsZSA9IHRoaXMuaG9zdC5nZXRTb3VyY2VGaWxlKHJlc29sdmVkRmlsZU5hbWUsIHRzLlNjcmlwdFRhcmdldC5MYXRlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0eXBlc2NyaXB0IGlzIHVuYWJsZSB0byByZXNvbHZlIHRoZSBmaWxlLCBmYWxsYmFjayBvbiBvbGQgYmVoYXZpb3JcbiAgICAgIGlmICghdGhpcy5ob3N0LmZpbGVFeGlzdHMoZmlsZU5hbWUgKyAnLnRzJykpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBzb3VyY2VGaWxlID0gdGhpcy5ob3N0LmdldFNvdXJjZUZpbGUoZmlsZU5hbWUgKyAnLnRzJywgdHMuU2NyaXB0VGFyZ2V0LkxhdGVzdCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBtZXRhZGF0YSBjYWNoZSwgdXNlIGl0IHRvIGdldCB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgc291cmNlIGZpbGUuIE90aGVyd2lzZSxcbiAgICAvLyBmYWxsIGJhY2sgb24gdGhlIGxvY2FsbHkgY3JlYXRlZCBNZXRhZGF0YUNvbGxlY3Rvci5cbiAgICBpZiAoIXNvdXJjZUZpbGUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXRNZXRhZGF0YShzb3VyY2VGaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdG9yLmdldE1ldGFkYXRhKHNvdXJjZUZpbGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kdWxlKGltcG9ydE5hbWU6IHN0cmluZywgZnJvbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGltcG9ydE5hbWUuc3RhcnRzV2l0aCgnLicpICYmIGZyb20pIHtcbiAgICBsZXQgbm9ybWFsUGF0aCA9IHBhdGgubm9ybWFsaXplKHBhdGguam9pbihwYXRoLmRpcm5hbWUoZnJvbSksIGltcG9ydE5hbWUpKTtcbiAgICBpZiAoIW5vcm1hbFBhdGguc3RhcnRzV2l0aCgnLicpICYmIGZyb20uc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAvLyBwYXRoLm5vcm1hbGl6ZSgpIHByZXNlcnZlcyBsZWFkaW5nICcuLi8nIGJ1dCBub3QgJy4vJy4gVGhpcyBhZGRzIGl0IGJhY2suXG4gICAgICBub3JtYWxQYXRoID0gYC4ke3BhdGguc2VwfSR7bm9ybWFsUGF0aH1gO1xuICAgIH1cbiAgICAvLyBSZXBsYWNlIHdpbmRvd3MgcGF0aCBkZWxpbWl0ZXJzIHdpdGggZm9yd2FyZC1zbGFzaGVzLiBPdGhlcndpc2UgdGhlIHBhdGhzIGFyZSBub3RcbiAgICAvLyBUeXBlU2NyaXB0IGNvbXBhdGlibGUgd2hlbiBidWlsZGluZyB0aGUgYnVuZGxlLlxuICAgIHJldHVybiBub3JtYWxQYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgfVxuICByZXR1cm4gaW1wb3J0TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUobzogYW55KTogbyBpcyBib29sZWFufHN0cmluZ3xudW1iZXIge1xuICByZXR1cm4gbyA9PT0gbnVsbCB8fCAodHlwZW9mIG8gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG8gIT09ICdvYmplY3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um9vdEV4cG9ydChzeW1ib2w6IFN5bWJvbCk6IFN5bWJvbCB7XG4gIHJldHVybiBzeW1ib2wucmVleHBvcnRlZEFzID8gZ2V0Um9vdEV4cG9ydChzeW1ib2wucmVleHBvcnRlZEFzKSA6IHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gZ2V0U3ltYm9sRGVjbGFyYXRpb24oc3ltYm9sOiBTeW1ib2wpOiBTeW1ib2wge1xuICByZXR1cm4gc3ltYm9sLmV4cG9ydHMgPyBnZXRTeW1ib2xEZWNsYXJhdGlvbihzeW1ib2wuZXhwb3J0cykgOiBzeW1ib2w7XG59XG4iXX0=