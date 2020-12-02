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
        define("@angular/language-service/src/typescript_symbols", ["require", "exports", "tslib", "path", "typescript", "@angular/language-service/src/symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var path = require("path");
    var ts = require("typescript");
    var symbols_1 = require("@angular/language-service/src/symbols");
    // In TypeScript 2.1 these flags moved
    // These helpers work for both 2.0 and 2.1.
    var isPrivate = ts.ModifierFlags ?
        (function (node) {
            return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Private);
        }) :
        (function (node) { return !!(node.flags & ts.NodeFlags.Private); });
    var isReferenceType = ts.ObjectFlags ?
        (function (type) {
            return !!(type.flags & ts.TypeFlags.Object &&
                type.objectFlags & ts.ObjectFlags.Reference);
        }) :
        (function (type) { return !!(type.flags & ts.TypeFlags.Reference); });
    function getSymbolQuery(program, checker, source, fetchPipes) {
        return new TypeScriptSymbolQuery(program, checker, source, fetchPipes);
    }
    exports.getSymbolQuery = getSymbolQuery;
    function getClassMembers(program, checker, staticSymbol) {
        var declaration = getClassFromStaticSymbol(program, staticSymbol);
        if (declaration) {
            var type = checker.getTypeAtLocation(declaration);
            var node = program.getSourceFile(staticSymbol.filePath);
            if (node) {
                return new TypeWrapper(type, { node: node, program: program, checker: checker }).members();
            }
        }
    }
    exports.getClassMembers = getClassMembers;
    function getClassMembersFromDeclaration(program, checker, source, declaration) {
        var type = checker.getTypeAtLocation(declaration);
        return new TypeWrapper(type, { node: source, program: program, checker: checker }).members();
    }
    exports.getClassMembersFromDeclaration = getClassMembersFromDeclaration;
    function getPipesTable(source, program, checker, pipes) {
        return new PipesTable(pipes, { program: program, checker: checker, node: source });
    }
    exports.getPipesTable = getPipesTable;
    function getClassFromStaticSymbol(program, type) {
        var source = program.getSourceFile(type.filePath);
        if (source) {
            return ts.forEachChild(source, function (child) {
                if (child.kind === ts.SyntaxKind.ClassDeclaration) {
                    var classDeclaration = child;
                    if (classDeclaration.name != null && classDeclaration.name.text === type.name) {
                        return classDeclaration;
                    }
                }
            });
        }
        return undefined;
    }
    var TypeScriptSymbolQuery = /** @class */ (function () {
        function TypeScriptSymbolQuery(program, checker, source, fetchPipes) {
            this.program = program;
            this.checker = checker;
            this.source = source;
            this.fetchPipes = fetchPipes;
            this.typeCache = new Map();
        }
        TypeScriptSymbolQuery.prototype.getTypeKind = function (symbol) {
            var type = symbol instanceof TypeWrapper ? symbol.tsType : undefined;
            return typeKindOf(type);
        };
        TypeScriptSymbolQuery.prototype.getBuiltinType = function (kind) {
            var result = this.typeCache.get(kind);
            if (!result) {
                var type = getTsTypeFromBuiltinType(kind, {
                    checker: this.checker,
                    node: this.source,
                    program: this.program,
                });
                result =
                    new TypeWrapper(type, { program: this.program, checker: this.checker, node: this.source });
                this.typeCache.set(kind, result);
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTypeUnion = function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            // No API exists so return any if the types are not all the same type.
            var result = undefined;
            if (types.length) {
                result = types[0];
                for (var i = 1; i < types.length; i++) {
                    if (types[i] != result) {
                        result = undefined;
                        break;
                    }
                }
            }
            return result || this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getArrayType = function (_type) {
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getElementType = function (type) {
            if (type instanceof TypeWrapper) {
                var ty = type.tsType;
                var tyArgs = type.typeArguments();
                // TODO(ayazhafiz): Track https://github.com/microsoft/TypeScript/issues/37711 to expose
                // `isArrayLikeType` as a public method.
                if (!this.checker.isArrayLikeType(ty) || (tyArgs === null || tyArgs === void 0 ? void 0 : tyArgs.length) !== 1)
                    return;
                return tyArgs[0];
            }
        };
        TypeScriptSymbolQuery.prototype.getNonNullableType = function (symbol) {
            if (symbol instanceof TypeWrapper && (typeof this.checker.getNonNullableType == 'function')) {
                var tsType = symbol.tsType;
                var nonNullableType = this.checker.getNonNullableType(tsType);
                if (nonNullableType != tsType) {
                    return new TypeWrapper(nonNullableType, symbol.context);
                }
                else if (nonNullableType == tsType) {
                    return symbol;
                }
            }
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getPipes = function () {
            var result = this.pipesCache;
            if (!result) {
                result = this.pipesCache = this.fetchPipes();
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTemplateContext = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            if (typeSymbol) {
                var contextType = this.getTemplateRefContextType(typeSymbol, context);
                if (contextType)
                    return contextType.members();
            }
        };
        TypeScriptSymbolQuery.prototype.getTypeSymbol = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            return typeSymbol && new SymbolWrapper(typeSymbol, context);
        };
        TypeScriptSymbolQuery.prototype.createSymbolTable = function (symbols) {
            var result = new MapSymbolTable();
            result.addAll(symbols.map(function (s) { return new DeclaredSymbol(s); }));
            return result;
        };
        TypeScriptSymbolQuery.prototype.mergeSymbolTable = function (symbolTables) {
            var e_1, _a;
            var result = new MapSymbolTable();
            try {
                for (var symbolTables_1 = tslib_1.__values(symbolTables), symbolTables_1_1 = symbolTables_1.next(); !symbolTables_1_1.done; symbolTables_1_1 = symbolTables_1.next()) {
                    var symbolTable = symbolTables_1_1.value;
                    result.addAll(symbolTable.values());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (symbolTables_1_1 && !symbolTables_1_1.done && (_a = symbolTables_1.return)) _a.call(symbolTables_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getSpanAt = function (line, column) {
            return spanAt(this.source, line, column);
        };
        TypeScriptSymbolQuery.prototype.getTemplateRefContextType = function (typeSymbol, context) {
            var e_2, _a;
            var type = this.checker.getTypeOfSymbolAtLocation(typeSymbol, this.source);
            var constructor = type.symbol && type.symbol.members &&
                getFromSymbolTable(type.symbol.members, '__constructor');
            if (constructor) {
                var constructorDeclaration = constructor.declarations[0];
                try {
                    for (var _b = tslib_1.__values(constructorDeclaration.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var parameter = _c.value;
                        var type_1 = this.checker.getTypeAtLocation(parameter.type);
                        if (type_1.symbol.name == 'TemplateRef' && isReferenceType(type_1)) {
                            var typeWrapper = new TypeWrapper(type_1, context);
                            var typeArguments = typeWrapper.typeArguments();
                            if (typeArguments && typeArguments.length === 1) {
                                return typeArguments[0];
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        return TypeScriptSymbolQuery;
    }());
    function typeCallable(type) {
        var signatures = type.getCallSignatures();
        return signatures && signatures.length != 0;
    }
    function signaturesOf(type, context) {
        return type.getCallSignatures().map(function (s) { return new SignatureWrapper(s, context); });
    }
    function selectSignature(type, context, _types) {
        // TODO: Do a better job of selecting the right signature. TypeScript does not currently support a
        // Type Relationship API (see https://github.com/angular/vscode-ng-language-service/issues/143).
        // Consider creating a TypeCheckBlock host in the language service that may also act as a
        // scratchpad for type comparisons.
        var signatures = type.getCallSignatures();
        return signatures.length ? new SignatureWrapper(signatures[0], context) : undefined;
    }
    var TypeWrapper = /** @class */ (function () {
        function TypeWrapper(tsType, context) {
            this.tsType = tsType;
            this.context = context;
            this.kind = 'type';
            this.language = 'typescript';
            this.type = undefined;
            this.container = undefined;
            this.public = true;
            if (!tsType) {
                throw Error('Internal: null type');
            }
        }
        Object.defineProperty(TypeWrapper.prototype, "name", {
            get: function () {
                return this.context.checker.typeToString(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "nullable", {
            get: function () {
                return this.context.checker.getNonNullableType(this.tsType) != this.tsType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        TypeWrapper.prototype.members = function () {
            // Should call getApparentProperties() instead of getProperties() because
            // the former includes properties on the base class whereas the latter does
            // not. This provides properties like .bind(), .call(), .apply(), etc for
            // functions.
            return new SymbolTableWrapper(this.tsType.getApparentProperties(), this.context, this.tsType);
        };
        TypeWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        TypeWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        TypeWrapper.prototype.indexed = function (type, value) {
            if (!(type instanceof TypeWrapper))
                return;
            var typeKind = typeKindOf(type.tsType);
            switch (typeKind) {
                case symbols_1.BuiltinType.Number:
                    var nType = this.tsType.getNumberIndexType();
                    if (nType) {
                        // get the right tuple type by value, like 'var t: [number, string];'
                        if (nType.isUnion()) {
                            // return undefined if array index out of bound.
                            return nType.types[value] && new TypeWrapper(nType.types[value], this.context);
                        }
                        return new TypeWrapper(nType, this.context);
                    }
                    return undefined;
                case symbols_1.BuiltinType.String:
                    var sType = this.tsType.getStringIndexType();
                    return sType && new TypeWrapper(sType, this.context);
            }
        };
        TypeWrapper.prototype.typeArguments = function () {
            var _this = this;
            if (!isReferenceType(this.tsType))
                return;
            var typeReference = this.tsType;
            var typeArguments;
            typeArguments = this.context.checker.getTypeArguments(typeReference);
            if (!typeArguments)
                return undefined;
            return typeArguments.map(function (ta) { return new TypeWrapper(ta, _this.context); });
        };
        return TypeWrapper;
    }());
    // If stringIndexType a primitive type(e.g. 'string'), the Symbol is undefined;
    // and in AstType.resolvePropertyRead method, the Symbol.type should get the right type.
    var StringIndexTypeWrapper = /** @class */ (function (_super) {
        tslib_1.__extends(StringIndexTypeWrapper, _super);
        function StringIndexTypeWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = new TypeWrapper(_this.tsType, _this.context);
            return _this;
        }
        return StringIndexTypeWrapper;
    }(TypeWrapper));
    var SymbolWrapper = /** @class */ (function () {
        function SymbolWrapper(symbol, 
        /** TypeScript type context of the symbol. */
        context, 
        /**
         * Type of the TypeScript symbol, if known. If not provided, the type of the symbol
         * will be determined dynamically; see `SymbolWrapper#tsType`.
         */
        _tsType) {
            this.context = context;
            this._tsType = _tsType;
            this.nullable = false;
            this.language = 'typescript';
            this.symbol = symbol && context && (symbol.flags & ts.SymbolFlags.Alias) ?
                context.checker.getAliasedSymbol(symbol) :
                symbol;
        }
        Object.defineProperty(SymbolWrapper.prototype, "name", {
            get: function () {
                return this.symbol.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "kind", {
            get: function () {
                return this.callable ? 'method' : 'property';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "container", {
            get: function () {
                return getContainerOf(this.symbol, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "public", {
            get: function () {
                // Symbols that are not explicitly made private are public.
                return !isSymbolPrivate(this.symbol);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "definition", {
            get: function () {
                return definitionFromTsSymbol(this.symbol);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "documentation", {
            get: function () {
                return this.symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        SymbolWrapper.prototype.members = function () {
            if (!this._members) {
                if ((this.symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface)) != 0) {
                    var declaredType = this.context.checker.getDeclaredTypeOfSymbol(this.symbol);
                    var typeWrapper = new TypeWrapper(declaredType, this.context);
                    this._members = typeWrapper.members();
                }
                else {
                    this._members = new SymbolTableWrapper(this.symbol.members, this.context, this.tsType);
                }
            }
            return this._members;
        };
        SymbolWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        SymbolWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        SymbolWrapper.prototype.indexed = function (_argument) {
            return undefined;
        };
        SymbolWrapper.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(SymbolWrapper.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    type = this._tsType =
                        this.context.checker.getTypeOfSymbolAtLocation(this.symbol, this.context.node);
                }
                return type;
            },
            enumerable: true,
            configurable: true
        });
        return SymbolWrapper;
    }());
    var DeclaredSymbol = /** @class */ (function () {
        function DeclaredSymbol(declaration) {
            this.declaration = declaration;
            this.language = 'ng-template';
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(DeclaredSymbol.prototype, "name", {
            get: function () {
                return this.declaration.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "kind", {
            get: function () {
                return this.declaration.kind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "container", {
            get: function () {
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "type", {
            get: function () {
                return this.declaration.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "callable", {
            get: function () {
                return this.type.callable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "definition", {
            get: function () {
                return this.declaration.definition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "documentation", {
            get: function () {
                return this.declaration.type.documentation;
            },
            enumerable: true,
            configurable: true
        });
        DeclaredSymbol.prototype.members = function () {
            return this.type.members();
        };
        DeclaredSymbol.prototype.signatures = function () {
            return this.type.signatures();
        };
        DeclaredSymbol.prototype.selectSignature = function (types) {
            return this.type.selectSignature(types);
        };
        DeclaredSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        DeclaredSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        return DeclaredSymbol;
    }());
    var SignatureWrapper = /** @class */ (function () {
        function SignatureWrapper(signature, context) {
            this.signature = signature;
            this.context = context;
        }
        Object.defineProperty(SignatureWrapper.prototype, "arguments", {
            get: function () {
                return new SymbolTableWrapper(this.signature.getParameters(), this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureWrapper.prototype, "result", {
            get: function () {
                return new TypeWrapper(this.signature.getReturnType(), this.context);
            },
            enumerable: true,
            configurable: true
        });
        return SignatureWrapper;
    }());
    var SignatureResultOverride = /** @class */ (function () {
        function SignatureResultOverride(signature, resultType) {
            this.signature = signature;
            this.resultType = resultType;
        }
        Object.defineProperty(SignatureResultOverride.prototype, "arguments", {
            get: function () {
                return this.signature.arguments;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureResultOverride.prototype, "result", {
            get: function () {
                return this.resultType;
            },
            enumerable: true,
            configurable: true
        });
        return SignatureResultOverride;
    }());
    function toSymbolTableFactory(symbols) {
        var e_3, _a;
        // ∀ Typescript version >= 2.2, `SymbolTable` is implemented as an ES6 `Map`
        var result = new Map();
        try {
            for (var symbols_2 = tslib_1.__values(symbols), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                var symbol = symbols_2_1.value;
                result.set(symbol.name, symbol);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (symbols_2_1 && !symbols_2_1.done && (_a = symbols_2.return)) _a.call(symbols_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    }
    function toSymbols(symbolTable) {
        if (!symbolTable)
            return [];
        var table = symbolTable;
        if (typeof table.values === 'function') {
            return Array.from(table.values());
        }
        var result = [];
        var own = typeof table.hasOwnProperty === 'function' ?
            function (name) { return table.hasOwnProperty(name); } :
            function (name) { return !!table[name]; };
        for (var name_1 in table) {
            if (own(name_1)) {
                result.push(table[name_1]);
            }
        }
        return result;
    }
    var SymbolTableWrapper = /** @class */ (function () {
        /**
         * Creates a queryable table of symbols belonging to a TypeScript entity.
         * @param symbols symbols to query belonging to the entity
         * @param context program context
         * @param type original TypeScript type of entity owning the symbols, if known
         */
        function SymbolTableWrapper(symbols, context, type) {
            this.context = context;
            symbols = symbols || [];
            if (Array.isArray(symbols)) {
                this.symbols = symbols;
                this.symbolTable = toSymbolTableFactory(symbols);
            }
            else {
                this.symbols = toSymbols(symbols);
                this.symbolTable = symbols;
            }
            if (type) {
                this.stringIndexType = type.getStringIndexType();
            }
        }
        Object.defineProperty(SymbolTableWrapper.prototype, "size", {
            get: function () {
                return this.symbols.length;
            },
            enumerable: true,
            configurable: true
        });
        SymbolTableWrapper.prototype.get = function (key) {
            var symbol = getFromSymbolTable(this.symbolTable, key);
            if (symbol) {
                return new SymbolWrapper(symbol, this.context);
            }
            if (this.stringIndexType) {
                // If the key does not exist as an explicit symbol on the type, it may be accessing a string
                // index signature using dot notation:
                //
                //   const obj<T>: { [key: string]: T };
                //   obj.stringIndex // equivalent to obj['stringIndex'];
                //
                // In this case, return the type indexed by an arbitrary string key.
                return new StringIndexTypeWrapper(this.stringIndexType, this.context);
            }
            return undefined;
        };
        SymbolTableWrapper.prototype.has = function (key) {
            var table = this.symbolTable;
            return ((typeof table.has === 'function') ? table.has(key) : table[key] != null) ||
                this.stringIndexType !== undefined;
        };
        SymbolTableWrapper.prototype.values = function () {
            var _this = this;
            return this.symbols.map(function (s) { return new SymbolWrapper(s, _this.context); });
        };
        return SymbolTableWrapper;
    }());
    var MapSymbolTable = /** @class */ (function () {
        function MapSymbolTable() {
            this.map = new Map();
            this._values = [];
        }
        Object.defineProperty(MapSymbolTable.prototype, "size", {
            get: function () {
                return this.map.size;
            },
            enumerable: true,
            configurable: true
        });
        MapSymbolTable.prototype.get = function (key) {
            return this.map.get(key);
        };
        MapSymbolTable.prototype.add = function (symbol) {
            if (this.map.has(symbol.name)) {
                var previous = this.map.get(symbol.name);
                this._values[this._values.indexOf(previous)] = symbol;
            }
            this.map.set(symbol.name, symbol);
            this._values.push(symbol);
        };
        MapSymbolTable.prototype.addAll = function (symbols) {
            var e_4, _a;
            try {
                for (var symbols_3 = tslib_1.__values(symbols), symbols_3_1 = symbols_3.next(); !symbols_3_1.done; symbols_3_1 = symbols_3.next()) {
                    var symbol = symbols_3_1.value;
                    this.add(symbol);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (symbols_3_1 && !symbols_3_1.done && (_a = symbols_3.return)) _a.call(symbols_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        MapSymbolTable.prototype.has = function (key) {
            return this.map.has(key);
        };
        MapSymbolTable.prototype.values = function () {
            // Switch to this.map.values once iterables are supported by the target language.
            return this._values;
        };
        return MapSymbolTable;
    }());
    var PipesTable = /** @class */ (function () {
        function PipesTable(pipes, context) {
            this.pipes = pipes;
            this.context = context;
        }
        Object.defineProperty(PipesTable.prototype, "size", {
            get: function () {
                return this.pipes.length;
            },
            enumerable: true,
            configurable: true
        });
        PipesTable.prototype.get = function (key) {
            var pipe = this.pipes.find(function (pipe) { return pipe.name == key; });
            if (pipe) {
                return new PipeSymbol(pipe, this.context);
            }
        };
        PipesTable.prototype.has = function (key) {
            return this.pipes.find(function (pipe) { return pipe.name == key; }) != null;
        };
        PipesTable.prototype.values = function () {
            var _this = this;
            return this.pipes.map(function (pipe) { return new PipeSymbol(pipe, _this.context); });
        };
        return PipesTable;
    }());
    // This matches .d.ts files that look like ".../<package-name>/<package-name>.d.ts",
    var INDEX_PATTERN = /[\\/]([^\\/]+)[\\/]\1\.d\.ts$/;
    var PipeSymbol = /** @class */ (function () {
        function PipeSymbol(pipe, context) {
            this.pipe = pipe;
            this.context = context;
            this.kind = 'pipe';
            this.language = 'typescript';
            this.container = undefined;
            this.callable = true;
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(PipeSymbol.prototype, "name", {
            get: function () {
                return this.pipe.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        PipeSymbol.prototype.members = function () {
            return EmptyTable.instance;
        };
        PipeSymbol.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        PipeSymbol.prototype.selectSignature = function (types) {
            var signature = selectSignature(this.tsType, this.context, types);
            if (types.length > 0) {
                var parameterType = types[0];
                var resultType = undefined;
                switch (this.name) {
                    case 'async':
                        // Get type argument of 'Observable', 'Promise', or 'EventEmitter'.
                        var tArgs = parameterType.typeArguments();
                        if (tArgs && tArgs.length === 1) {
                            resultType = tArgs[0];
                        }
                        break;
                    case 'slice':
                        resultType = parameterType;
                        break;
                }
                if (resultType) {
                    signature = new SignatureResultOverride(signature, resultType);
                }
            }
            return signature;
        };
        PipeSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        PipeSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(PipeSymbol.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    var classSymbol = this.findClassSymbol(this.pipe.type.reference);
                    if (classSymbol) {
                        type = this._tsType = this.findTransformMethodType(classSymbol);
                    }
                    if (!type) {
                        type = this._tsType = getTsTypeFromBuiltinType(symbols_1.BuiltinType.Any, this.context);
                    }
                }
                return type;
            },
            enumerable: true,
            configurable: true
        });
        PipeSymbol.prototype.findClassSymbol = function (type) {
            return findClassSymbolInContext(type, this.context);
        };
        PipeSymbol.prototype.findTransformMethodType = function (classSymbol) {
            var classType = this.context.checker.getDeclaredTypeOfSymbol(classSymbol);
            if (classType) {
                var transform = classType.getProperty('transform');
                if (transform) {
                    return this.context.checker.getTypeOfSymbolAtLocation(transform, this.context.node);
                }
            }
        };
        return PipeSymbol;
    }());
    function findClassSymbolInContext(type, context) {
        var sourceFile = context.program.getSourceFile(type.filePath);
        if (!sourceFile) {
            // This handles a case where an <packageName>/index.d.ts and a <packageName>/<packageName>.d.ts
            // are in the same directory. If we are looking for <packageName>/<packageName> and didn't
            // find it, look for <packageName>/index.d.ts as the program might have found that instead.
            var p = type.filePath;
            var m = p.match(INDEX_PATTERN);
            if (m) {
                var indexVersion = path.join(path.dirname(p), 'index.d.ts');
                sourceFile = context.program.getSourceFile(indexVersion);
            }
        }
        if (sourceFile) {
            var moduleSymbol = sourceFile.module || sourceFile.symbol;
            var exports_1 = context.checker.getExportsOfModule(moduleSymbol);
            return (exports_1 || []).find(function (symbol) { return symbol.name == type.name; });
        }
    }
    var EmptyTable = /** @class */ (function () {
        function EmptyTable() {
            this.size = 0;
        }
        EmptyTable.prototype.get = function (_key) {
            return undefined;
        };
        EmptyTable.prototype.has = function (_key) {
            return false;
        };
        EmptyTable.prototype.values = function () {
            return [];
        };
        EmptyTable.instance = new EmptyTable();
        return EmptyTable;
    }());
    function isSymbolPrivate(s) {
        return !!s.valueDeclaration && isPrivate(s.valueDeclaration);
    }
    function getTsTypeFromBuiltinType(builtinType, ctx) {
        var syntaxKind;
        switch (builtinType) {
            case symbols_1.BuiltinType.Any:
                syntaxKind = ts.SyntaxKind.AnyKeyword;
                break;
            case symbols_1.BuiltinType.Boolean:
                syntaxKind = ts.SyntaxKind.BooleanKeyword;
                break;
            case symbols_1.BuiltinType.Null:
                syntaxKind = ts.SyntaxKind.NullKeyword;
                break;
            case symbols_1.BuiltinType.Number:
                syntaxKind = ts.SyntaxKind.NumberKeyword;
                break;
            case symbols_1.BuiltinType.String:
                syntaxKind = ts.SyntaxKind.StringKeyword;
                break;
            case symbols_1.BuiltinType.Undefined:
                syntaxKind = ts.SyntaxKind.UndefinedKeyword;
                break;
            default:
                throw new Error("Internal error, unhandled literal kind " + builtinType + ":" + symbols_1.BuiltinType[builtinType]);
        }
        var node = ts.createNode(syntaxKind);
        node.parent = ctx.node;
        return ctx.checker.getTypeAtLocation(node);
    }
    function spanAt(sourceFile, line, column) {
        if (line != null && column != null) {
            var position_1 = ts.getPositionOfLineAndCharacter(sourceFile, line, column);
            var findChild = function findChild(node) {
                if (node.kind > ts.SyntaxKind.LastToken && node.pos <= position_1 && node.end > position_1) {
                    var betterNode = ts.forEachChild(node, findChild);
                    return betterNode || node;
                }
            };
            var node = ts.forEachChild(sourceFile, findChild);
            if (node) {
                return { start: node.getStart(), end: node.getEnd() };
            }
        }
    }
    function definitionFromTsSymbol(symbol) {
        var declarations = symbol.declarations;
        if (declarations) {
            return declarations.map(function (declaration) {
                var sourceFile = declaration.getSourceFile();
                return {
                    fileName: sourceFile.fileName,
                    span: { start: declaration.getStart(), end: declaration.getEnd() }
                };
            });
        }
    }
    function parentDeclarationOf(node) {
        while (node) {
            switch (node.kind) {
                case ts.SyntaxKind.ClassDeclaration:
                case ts.SyntaxKind.InterfaceDeclaration:
                    return node;
                case ts.SyntaxKind.SourceFile:
                    return undefined;
            }
            node = node.parent;
        }
    }
    function getContainerOf(symbol, context) {
        var e_5, _a;
        if (symbol.getFlags() & ts.SymbolFlags.ClassMember && symbol.declarations) {
            try {
                for (var _b = tslib_1.__values(symbol.declarations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var declaration = _c.value;
                    var parent_1 = parentDeclarationOf(declaration);
                    if (parent_1) {
                        var type = context.checker.getTypeAtLocation(parent_1);
                        if (type) {
                            return new TypeWrapper(type, context);
                        }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    function typeKindOf(type) {
        var e_6, _a;
        if (type) {
            if (type.flags & ts.TypeFlags.Any) {
                return symbols_1.BuiltinType.Any;
            }
            else if (type.flags & (ts.TypeFlags.String | ts.TypeFlags.StringLike | ts.TypeFlags.StringLiteral)) {
                return symbols_1.BuiltinType.String;
            }
            else if (type.flags & (ts.TypeFlags.Number | ts.TypeFlags.NumberLike)) {
                return symbols_1.BuiltinType.Number;
            }
            else if (type.flags & ts.TypeFlags.Object) {
                return symbols_1.BuiltinType.Object;
            }
            else if (type.flags & (ts.TypeFlags.Undefined)) {
                return symbols_1.BuiltinType.Undefined;
            }
            else if (type.flags & (ts.TypeFlags.Null)) {
                return symbols_1.BuiltinType.Null;
            }
            else if (type.flags & ts.TypeFlags.Union) {
                var unionType = type;
                if (unionType.types.length === 0)
                    return symbols_1.BuiltinType.Other;
                var ty = 0;
                try {
                    for (var _b = tslib_1.__values(unionType.types), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var subType = _c.value;
                        ty |= typeKindOf(subType);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return ty;
            }
            else if (type.flags & ts.TypeFlags.TypeParameter) {
                return symbols_1.BuiltinType.Unbound;
            }
        }
        return symbols_1.BuiltinType.Other;
    }
    function getFromSymbolTable(symbolTable, key) {
        var table = symbolTable;
        var symbol;
        if (typeof table.get === 'function') {
            // TS 2.2 uses a Map
            symbol = table.get(key);
        }
        else {
            // TS pre-2.2 uses an object
            symbol = table[key];
        }
        return symbol;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9zeW1ib2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHlwZXNjcmlwdF9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUdILDJCQUE2QjtJQUM3QiwrQkFBaUM7SUFFakMsaUVBQXlJO0lBRXpJLHNDQUFzQztJQUN0QywyQ0FBMkM7SUFDM0MsSUFBTSxTQUFTLEdBQUksRUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsVUFBQyxJQUFhO1lBQ1YsT0FBQSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUksRUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFBbEYsQ0FBa0YsQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQyxVQUFDLElBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksRUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBRXhFLElBQU0sZUFBZSxHQUFJLEVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLFVBQUMsSUFBYTtZQUNWLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBSSxFQUFVLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3hDLElBQVksQ0FBQyxXQUFXLEdBQUksRUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFEakUsQ0FDaUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxVQUFDLElBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksRUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0lBUTFFLFNBQWdCLGNBQWMsQ0FDMUIsT0FBbUIsRUFBRSxPQUF1QixFQUFFLE1BQXFCLEVBQ25FLFVBQTZCO1FBQy9CLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBSkQsd0NBSUM7SUFFRCxTQUFnQixlQUFlLENBQzNCLE9BQW1CLEVBQUUsT0FBdUIsRUFBRSxZQUEwQjtRQUUxRSxJQUFNLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEUsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7SUFYRCwwQ0FXQztJQUVELFNBQWdCLDhCQUE4QixDQUMxQyxPQUFtQixFQUFFLE9BQXVCLEVBQUUsTUFBcUIsRUFDbkUsV0FBZ0M7UUFDbEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUxELHdFQUtDO0lBRUQsU0FBZ0IsYUFBYSxDQUN6QixNQUFxQixFQUFFLE9BQW1CLEVBQUUsT0FBdUIsRUFDbkUsS0FBMkI7UUFDN0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBSkQsc0NBSUM7SUFFRCxTQUFTLHdCQUF3QixDQUFDLE9BQW1CLEVBQUUsSUFBa0I7UUFFdkUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSztnQkFDbEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ2pELElBQU0sZ0JBQWdCLEdBQUcsS0FBNEIsQ0FBQztvQkFDdEQsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDN0UsT0FBTyxnQkFBZ0IsQ0FBQztxQkFDekI7aUJBQ0Y7WUFDSCxDQUFDLENBQXNDLENBQUM7U0FDekM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7UUFJRSwrQkFDWSxPQUFtQixFQUFVLE9BQXVCLEVBQVUsTUFBcUIsRUFDbkYsVUFBNkI7WUFEN0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtZQUNuRixlQUFVLEdBQVYsVUFBVSxDQUFtQjtZQUxqQyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFLUCxDQUFDO1FBRTdDLDJDQUFXLEdBQVgsVUFBWSxNQUFjO1lBQ3hCLElBQU0sSUFBSSxHQUFHLE1BQU0sWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN2RSxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBRUQsOENBQWMsR0FBZCxVQUFlLElBQWlCO1lBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBTSxJQUFJLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxFQUFFO29CQUMxQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtvQkFDRixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsQztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCw0Q0FBWSxHQUFaO1lBQWEsZUFBa0I7aUJBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtnQkFBbEIsMEJBQWtCOztZQUM3QixzRUFBc0U7WUFDdEUsSUFBSSxNQUFNLEdBQXFCLFNBQVMsQ0FBQztZQUN6QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7d0JBQ3RCLE1BQU0sR0FBRyxTQUFTLENBQUM7d0JBQ25CLE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsNENBQVksR0FBWixVQUFhLEtBQWE7WUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELDhDQUFjLEdBQWQsVUFBZSxJQUFZO1lBQ3pCLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtnQkFDL0IsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNwQyx3RkFBd0Y7Z0JBQ3hGLHdDQUF3QztnQkFDeEMsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE1BQU0sTUFBSyxDQUFDO29CQUFFLE9BQU87Z0JBQy9FLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztRQUVELGtEQUFrQixHQUFsQixVQUFtQixNQUFjO1lBQy9CLElBQUksTUFBTSxZQUFZLFdBQVcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsSUFBSSxVQUFVLENBQUMsRUFBRTtnQkFDM0YsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxlQUFlLElBQUksTUFBTSxFQUFFO29CQUM3QixPQUFPLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNLElBQUksZUFBZSxJQUFJLE1BQU0sRUFBRTtvQkFDcEMsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCx3Q0FBUSxHQUFSO1lBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUM5QztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxrREFBa0IsR0FBbEIsVUFBbUIsSUFBa0I7WUFDbkMsSUFBTSxPQUFPLEdBQWdCLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztZQUMvRixJQUFNLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0QsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxXQUFXO29CQUFFLE9BQU8sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQy9DO1FBQ0gsQ0FBQztRQUVELDZDQUFhLEdBQWIsVUFBYyxJQUFrQjtZQUM5QixJQUFNLE9BQU8sR0FBZ0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO1lBQy9GLElBQU0sVUFBVSxHQUFHLHdCQUF3QixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzRCxPQUFPLFVBQVUsSUFBSSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELGlEQUFpQixHQUFqQixVQUFrQixPQUE0QjtZQUM1QyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFlBQTJCOztZQUMxQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDOztnQkFDcEMsS0FBMEIsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7b0JBQW5DLElBQU0sV0FBVyx5QkFBQTtvQkFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDckM7Ozs7Ozs7OztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx5Q0FBUyxHQUFULFVBQVUsSUFBWSxFQUFFLE1BQWM7WUFDcEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVPLHlEQUF5QixHQUFqQyxVQUFrQyxVQUFxQixFQUFFLE9BQW9COztZQUMzRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2xELGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTlELElBQUksV0FBVyxFQUFFO2dCQUNmLElBQU0sc0JBQXNCLEdBQUcsV0FBVyxDQUFDLFlBQWEsQ0FBQyxDQUFDLENBQTJCLENBQUM7O29CQUN0RixLQUF3QixJQUFBLEtBQUEsaUJBQUEsc0JBQXNCLENBQUMsVUFBVSxDQUFBLGdCQUFBLDRCQUFFO3dCQUF0RCxJQUFNLFNBQVMsV0FBQTt3QkFDbEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSyxDQUFDLENBQUM7d0JBQzdELElBQUksTUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLElBQUksYUFBYSxJQUFJLGVBQWUsQ0FBQyxNQUFJLENBQUMsRUFBRTs0QkFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzRCQUNuRCxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ2xELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dDQUMvQyxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDekI7eUJBQ0Y7cUJBQ0Y7Ozs7Ozs7OzthQUNGO1FBQ0gsQ0FBQztRQUNILDRCQUFDO0lBQUQsQ0FBQyxBQW5JRCxJQW1JQztJQUVELFNBQVMsWUFBWSxDQUFDLElBQWE7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsT0FBTyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLElBQWEsRUFBRSxPQUFvQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLElBQWEsRUFBRSxPQUFvQixFQUFFLE1BQWdCO1FBRTVFLGtHQUFrRztRQUNsRyxnR0FBZ0c7UUFDaEcseUZBQXlGO1FBQ3pGLG1DQUFtQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEYsQ0FBQztJQUVEO1FBQ0UscUJBQW1CLE1BQWUsRUFBUyxPQUFvQjtZQUE1QyxXQUFNLEdBQU4sTUFBTSxDQUFTO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBYTtZQVUvQyxTQUFJLEdBQW9CLE1BQU0sQ0FBQztZQUUvQixhQUFRLEdBQVcsWUFBWSxDQUFDO1lBRWhDLFNBQUksR0FBcUIsU0FBUyxDQUFDO1lBRW5DLGNBQVMsR0FBcUIsU0FBUyxDQUFDO1lBRXhDLFdBQU0sR0FBWSxJQUFJLENBQUM7WUFqQnJDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUM7UUFFRCxzQkFBSSw2QkFBSTtpQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsQ0FBQzs7O1dBQUE7UUFZRCxzQkFBSSxpQ0FBUTtpQkFBWjtnQkFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxpQ0FBUTtpQkFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdFLENBQUM7OztXQUFBO1FBRUQsc0JBQUksc0NBQWE7aUJBQWpCO2dCQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7aUJBQ1g7Z0JBQ0QsT0FBTyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLG1DQUFVO2lCQUFkO2dCQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzdELENBQUM7OztXQUFBO1FBRUQsNkJBQU8sR0FBUDtZQUNFLHlFQUF5RTtZQUN6RSwyRUFBMkU7WUFDM0UseUVBQXlFO1lBQ3pFLGFBQWE7WUFDYixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFFRCxnQ0FBVSxHQUFWO1lBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELHFDQUFlLEdBQWYsVUFBZ0IsS0FBZTtZQUM3QixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsS0FBVTtZQUM5QixJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksV0FBVyxDQUFDO2dCQUFFLE9BQU87WUFFM0MsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxRQUFRLFFBQVEsRUFBRTtnQkFDaEIsS0FBSyxxQkFBVyxDQUFDLE1BQU07b0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxLQUFLLEVBQUU7d0JBQ1QscUVBQXFFO3dCQUNyRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTs0QkFDbkIsZ0RBQWdEOzRCQUNoRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2hGO3dCQUNELE9BQU8sSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDN0M7b0JBQ0QsT0FBTyxTQUFTLENBQUM7Z0JBQ25CLEtBQUsscUJBQVcsQ0FBQyxNQUFNO29CQUNyQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQy9DLE9BQU8sS0FBSyxJQUFJLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDO1FBRUQsbUNBQWEsR0FBYjtZQUFBLGlCQVFDO1lBUEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFFMUMsSUFBTSxhQUFhLEdBQUksSUFBSSxDQUFDLE1BQTJCLENBQUM7WUFDeEQsSUFBSSxhQUErQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsYUFBYTtnQkFBRSxPQUFPLFNBQVMsQ0FBQztZQUNyQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQXpGRCxJQXlGQztJQUVELCtFQUErRTtJQUMvRSx3RkFBd0Y7SUFDeEY7UUFBcUMsa0RBQVc7UUFBaEQ7WUFBQSxxRUFFQztZQURpQixVQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1FBQ3BFLENBQUM7UUFBRCw2QkFBQztJQUFELENBQUMsQUFGRCxDQUFxQyxXQUFXLEdBRS9DO0lBRUQ7UUFPRSx1QkFDSSxNQUFpQjtRQUNqQiw2Q0FBNkM7UUFDckMsT0FBb0I7UUFDNUI7OztXQUdHO1FBQ0ssT0FBaUI7WUFMakIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtZQUtwQixZQUFPLEdBQVAsT0FBTyxDQUFVO1lBWGIsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixhQUFRLEdBQVcsWUFBWSxDQUFDO1lBVzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQztRQUNiLENBQUM7UUFFRCxzQkFBSSwrQkFBSTtpQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksK0JBQUk7aUJBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUMvQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLCtCQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBUztpQkFBYjtnQkFDRSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGlDQUFNO2lCQUFWO2dCQUNFLDJEQUEyRDtnQkFDM0QsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxtQ0FBUTtpQkFBWjtnQkFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxxQ0FBVTtpQkFBZDtnQkFDRSxPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHdDQUFhO2lCQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSxDQUFDOzs7V0FBQTtRQUVELCtCQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDaEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvRSxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN6RjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxrQ0FBVSxHQUFWO1lBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELHVDQUFlLEdBQWYsVUFBZ0IsS0FBZTtZQUM3QixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELCtCQUFPLEdBQVAsVUFBUSxTQUFpQjtZQUN2QixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUQscUNBQWEsR0FBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsc0JBQVksaUNBQU07aUJBQWxCO2dCQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO3dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEY7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDOzs7V0FBQTtRQUNILG9CQUFDO0lBQUQsQ0FBQyxBQTNGRCxJQTJGQztJQUVEO1FBT0Usd0JBQW9CLFdBQThCO1lBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtZQU5sQyxhQUFRLEdBQVcsYUFBYSxDQUFDO1lBRWpDLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFFMUIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUVjLENBQUM7UUFFdEQsc0JBQUksZ0NBQUk7aUJBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGdDQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDL0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxxQ0FBUztpQkFBYjtnQkFDRSxPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGdDQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDL0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBUTtpQkFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzVCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksc0NBQVU7aUJBQWQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHlDQUFhO2lCQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM3QyxDQUFDOzs7V0FBQTtRQUVELGdDQUFPLEdBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUVELG1DQUFVLEdBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUVELHdDQUFlLEdBQWYsVUFBZ0IsS0FBZTtZQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxzQ0FBYSxHQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxnQ0FBTyxHQUFQLFVBQVEsU0FBaUI7WUFDdkIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FBQyxBQXhERCxJQXdEQztJQUVEO1FBQ0UsMEJBQW9CLFNBQXVCLEVBQVUsT0FBb0I7WUFBckQsY0FBUyxHQUFULFNBQVMsQ0FBYztZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFBRyxDQUFDO1FBRTdFLHNCQUFJLHVDQUFTO2lCQUFiO2dCQUNFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RSxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLG9DQUFNO2lCQUFWO2dCQUNFLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkUsQ0FBQzs7O1dBQUE7UUFDSCx1QkFBQztJQUFELENBQUMsQUFWRCxJQVVDO0lBRUQ7UUFDRSxpQ0FBb0IsU0FBb0IsRUFBVSxVQUFrQjtZQUFoRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1lBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFHLENBQUM7UUFFeEUsc0JBQUksOENBQVM7aUJBQWI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDJDQUFNO2lCQUFWO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUNILDhCQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFFRCxTQUFTLG9CQUFvQixDQUFDLE9BQW9COztRQUNoRCw0RUFBNEU7UUFDNUUsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7O1lBQzVDLEtBQXFCLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQXpCLElBQU0sTUFBTSxvQkFBQTtnQkFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztRQUVELE9BQU8sTUFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsU0FBUyxTQUFTLENBQUMsV0FBcUM7UUFDdEQsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUU1QixJQUFNLEtBQUssR0FBRyxXQUFrQixDQUFDO1FBRWpDLElBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFnQixDQUFDO1NBQ2xEO1FBRUQsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUUvQixJQUFNLEdBQUcsR0FBRyxPQUFPLEtBQUssQ0FBQyxjQUFjLEtBQUssVUFBVSxDQUFDLENBQUM7WUFDcEQsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7WUFDOUMsVUFBQyxJQUFZLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQztRQUVwQyxLQUFLLElBQU0sTUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLEdBQUcsQ0FBQyxNQUFJLENBQUMsRUFBRTtnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7UUFLRTs7Ozs7V0FLRztRQUNILDRCQUFZLE9BQW1DLEVBQVUsT0FBb0IsRUFBRSxJQUFjO1lBQXBDLFlBQU8sR0FBUCxPQUFPLENBQWE7WUFDM0UsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFFeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7YUFDNUI7WUFFRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQztRQUVELHNCQUFJLG9DQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDN0IsQ0FBQzs7O1dBQUE7UUFFRCxnQ0FBRyxHQUFILFVBQUksR0FBVztZQUNiLElBQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4Qiw0RkFBNEY7Z0JBQzVGLHNDQUFzQztnQkFDdEMsRUFBRTtnQkFDRix3Q0FBd0M7Z0JBQ3hDLHlEQUF5RDtnQkFDekQsRUFBRTtnQkFDRixvRUFBb0U7Z0JBQ3BFLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2RTtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxnQ0FBRyxHQUFILFVBQUksR0FBVztZQUNiLElBQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUM1RSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsbUNBQU0sR0FBTjtZQUFBLGlCQUVDO1lBREMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLEFBNURELElBNERDO0lBRUQ7UUFBQTtZQUNVLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztZQUNoQyxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBaUNqQyxDQUFDO1FBL0JDLHNCQUFJLGdDQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdkIsQ0FBQzs7O1dBQUE7UUFFRCw0QkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELDRCQUFHLEdBQUgsVUFBSSxNQUFjO1lBQ2hCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDdkQ7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCwrQkFBTSxHQUFOLFVBQU8sT0FBaUI7OztnQkFDdEIsS0FBcUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtvQkFBekIsSUFBTSxNQUFNLG9CQUFBO29CQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xCOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRUQsNEJBQUcsR0FBSCxVQUFJLEdBQVc7WUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCwrQkFBTSxHQUFOO1lBQ0UsaUZBQWlGO1lBQ2pGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQUFDLEFBbkNELElBbUNDO0lBRUQ7UUFDRSxvQkFBb0IsS0FBMkIsRUFBVSxPQUFvQjtZQUF6RCxVQUFLLEdBQUwsS0FBSyxDQUFzQjtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFBRyxDQUFDO1FBRWpGLHNCQUFJLDRCQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0IsQ0FBQzs7O1dBQUE7UUFFRCx3QkFBRyxHQUFILFVBQUksR0FBVztZQUNiLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUN2RCxJQUFJLElBQUksRUFBRTtnQkFDUixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDO1FBRUQsd0JBQUcsR0FBSCxVQUFJLEdBQVc7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQWhCLENBQWdCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDM0QsQ0FBQztRQUVELDJCQUFNLEdBQU47WUFBQSxpQkFFQztZQURDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0FBQyxBQXJCRCxJQXFCQztJQUVELG9GQUFvRjtJQUNwRixJQUFNLGFBQWEsR0FBRywrQkFBK0IsQ0FBQztJQUV0RDtRQVNFLG9CQUFvQixJQUF3QixFQUFVLE9BQW9CO1lBQXRELFNBQUksR0FBSixJQUFJLENBQW9CO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtZQVAxRCxTQUFJLEdBQW9CLE1BQU0sQ0FBQztZQUMvQixhQUFRLEdBQVcsWUFBWSxDQUFDO1lBQ2hDLGNBQVMsR0FBcUIsU0FBUyxDQUFDO1lBQ3hDLGFBQVEsR0FBWSxJQUFJLENBQUM7WUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXNDLENBQUM7UUFFOUUsc0JBQUksNEJBQUk7aUJBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDRCQUFJO2lCQUFSO2dCQUNFLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxrQ0FBVTtpQkFBZDtnQkFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM3RCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHFDQUFhO2lCQUFqQjtnQkFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2dCQUNELE9BQU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUQsQ0FBQzs7O1dBQUE7UUFFRCw0QkFBTyxHQUFQO1lBQ0UsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7UUFFRCwrQkFBVSxHQUFWO1lBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELG9DQUFlLEdBQWYsVUFBZ0IsS0FBZTtZQUM3QixJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBRSxDQUFDO1lBQ25FLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxVQUFVLEdBQXFCLFNBQVMsQ0FBQztnQkFDN0MsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNqQixLQUFLLE9BQU87d0JBQ1YsbUVBQW1FO3dCQUNuRSxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQzVDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOzRCQUMvQixVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN2Qjt3QkFDRCxNQUFNO29CQUNSLEtBQUssT0FBTzt3QkFDVixVQUFVLEdBQUcsYUFBYSxDQUFDO3dCQUMzQixNQUFNO2lCQUNUO2dCQUNELElBQUksVUFBVSxFQUFFO29CQUNkLFNBQVMsR0FBRyxJQUFJLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDaEU7YUFDRjtZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCw0QkFBTyxHQUFQLFVBQVEsU0FBaUI7WUFDdkIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUVELGtDQUFhLEdBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELHNCQUFZLDhCQUFNO2lCQUFsQjtnQkFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25FLElBQUksV0FBVyxFQUFFO3dCQUNmLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUUsQ0FBQztxQkFDbEU7b0JBQ0QsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxxQkFBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQy9FO2lCQUNGO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7O1dBQUE7UUFFTyxvQ0FBZSxHQUF2QixVQUF3QixJQUFrQjtZQUN4QyxPQUFPLHdCQUF3QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVPLDRDQUF1QixHQUEvQixVQUFnQyxXQUFzQjtZQUNwRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1RSxJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFNBQVMsRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyRjthQUNGO1FBQ0gsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0FBQyxBQW5HRCxJQW1HQztJQUVELFNBQVMsd0JBQXdCLENBQUMsSUFBa0IsRUFBRSxPQUFvQjtRQUN4RSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLCtGQUErRjtZQUMvRiwwRkFBMEY7WUFDMUYsMkZBQTJGO1lBQzNGLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzlELFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxRDtTQUNGO1FBQ0QsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFNLFlBQVksR0FBSSxVQUFrQixDQUFDLE1BQU0sSUFBSyxVQUFrQixDQUFDLE1BQU0sQ0FBQztZQUM5RSxJQUFNLFNBQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxTQUFPLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRUQ7UUFBQTtZQUNrQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBV25DLENBQUM7UUFWQyx3QkFBRyxHQUFILFVBQUksSUFBWTtZQUNkLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCx3QkFBRyxHQUFILFVBQUksSUFBWTtZQUNkLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELDJCQUFNLEdBQU47WUFDRSxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFDTSxtQkFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDckMsaUJBQUM7S0FBQSxBQVpELElBWUM7SUFFRCxTQUFTLGVBQWUsQ0FBQyxDQUFZO1FBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVMsd0JBQXdCLENBQUMsV0FBd0IsRUFBRSxHQUFnQjtRQUMxRSxJQUFJLFVBQXlCLENBQUM7UUFDOUIsUUFBUSxXQUFXLEVBQUU7WUFDbkIsS0FBSyxxQkFBVyxDQUFDLEdBQUc7Z0JBQ2xCLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUsscUJBQVcsQ0FBQyxPQUFPO2dCQUN0QixVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLHFCQUFXLENBQUMsSUFBSTtnQkFDbkIsVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxNQUFNO1lBQ1IsS0FBSyxxQkFBVyxDQUFDLE1BQU07Z0JBQ3JCLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUsscUJBQVcsQ0FBQyxNQUFNO2dCQUNyQixVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLHFCQUFXLENBQUMsU0FBUztnQkFDeEIsVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzVDLE1BQU07WUFDUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUNYLDRDQUEwQyxXQUFXLFNBQUkscUJBQVcsQ0FBQyxXQUFXLENBQUcsQ0FBQyxDQUFDO1NBQzVGO1FBQ0QsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdkIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxTQUFTLE1BQU0sQ0FBQyxVQUF5QixFQUFFLElBQVksRUFBRSxNQUFjO1FBQ3JFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xDLElBQU0sVUFBUSxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLElBQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLElBQWE7Z0JBQ2hELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVEsRUFBRTtvQkFDdEYsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BELE9BQU8sVUFBVSxJQUFJLElBQUksQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwRCxJQUFJLElBQUksRUFBRTtnQkFDUixPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7YUFDckQ7U0FDRjtJQUNILENBQUM7SUFFRCxTQUFTLHNCQUFzQixDQUFDLE1BQWlCO1FBQy9DLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVztnQkFDakMsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQyxPQUFPO29CQUNMLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTtvQkFDN0IsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFDO2lCQUNqRSxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQWE7UUFDeEMsT0FBTyxJQUFJLEVBQUU7WUFDWCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQjtvQkFDckMsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVU7b0JBQzNCLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFPLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsTUFBaUIsRUFBRSxPQUFvQjs7UUFDN0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7Z0JBQ3pFLEtBQTBCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO29CQUExQyxJQUFNLFdBQVcsV0FBQTtvQkFDcEIsSUFBTSxRQUFNLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2hELElBQUksUUFBTSxFQUFFO3dCQUNWLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBTSxDQUFDLENBQUM7d0JBQ3ZELElBQUksSUFBSSxFQUFFOzRCQUNSLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUN2QztxQkFDRjtpQkFDRjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsSUFBdUI7O1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxPQUFPLHFCQUFXLENBQUMsR0FBRyxDQUFDO2FBQ3hCO2lCQUFNLElBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzdGLE9BQU8scUJBQVcsQ0FBQyxNQUFNLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkUsT0FBTyxxQkFBVyxDQUFDLE1BQU0sQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNDLE9BQU8scUJBQVcsQ0FBQyxNQUFNLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDaEQsT0FBTyxxQkFBVyxDQUFDLFNBQVMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLHFCQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBb0IsQ0FBQztnQkFDdkMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUFFLE9BQU8scUJBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQzNELElBQUksRUFBRSxHQUFnQixDQUFDLENBQUM7O29CQUN4QixLQUFzQixJQUFBLEtBQUEsaUJBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQSxnQkFBQSw0QkFBRTt3QkFBbEMsSUFBTSxPQUFPLFdBQUE7d0JBQ2hCLEVBQUUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzNCOzs7Ozs7Ozs7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xELE9BQU8scUJBQVcsQ0FBQyxPQUFPLENBQUM7YUFDNUI7U0FDRjtRQUNELE9BQU8scUJBQVcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUMsV0FBMkIsRUFBRSxHQUFXO1FBQ2xFLElBQU0sS0FBSyxHQUFHLFdBQWtCLENBQUM7UUFDakMsSUFBSSxNQUEyQixDQUFDO1FBRWhDLElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUNuQyxvQkFBb0I7WUFDcEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLDRCQUE0QjtZQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUGlwZVN1bW1hcnksIFN0YXRpY1N5bWJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0J1aWx0aW5UeXBlLCBEZWNsYXJhdGlvbktpbmQsIERlZmluaXRpb24sIFNpZ25hdHVyZSwgU3BhbiwgU3ltYm9sLCBTeW1ib2xEZWNsYXJhdGlvbiwgU3ltYm9sUXVlcnksIFN5bWJvbFRhYmxlfSBmcm9tICcuL3N5bWJvbHMnO1xuXG4vLyBJbiBUeXBlU2NyaXB0IDIuMSB0aGVzZSBmbGFncyBtb3ZlZFxuLy8gVGhlc2UgaGVscGVycyB3b3JrIGZvciBib3RoIDIuMCBhbmQgMi4xLlxuY29uc3QgaXNQcml2YXRlID0gKHRzIGFzIGFueSkuTW9kaWZpZXJGbGFncyA/XG4gICAgKChub2RlOiB0cy5Ob2RlKSA9PlxuICAgICAgICAgISEoKHRzIGFzIGFueSkuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUpICYgKHRzIGFzIGFueSkuTW9kaWZpZXJGbGFncy5Qcml2YXRlKSkgOlxuICAgICgobm9kZTogdHMuTm9kZSkgPT4gISEobm9kZS5mbGFncyAmICh0cyBhcyBhbnkpLk5vZGVGbGFncy5Qcml2YXRlKSk7XG5cbmNvbnN0IGlzUmVmZXJlbmNlVHlwZSA9ICh0cyBhcyBhbnkpLk9iamVjdEZsYWdzID9cbiAgICAoKHR5cGU6IHRzLlR5cGUpID0+XG4gICAgICAgICAhISh0eXBlLmZsYWdzICYgKHRzIGFzIGFueSkuVHlwZUZsYWdzLk9iamVjdCAmJlxuICAgICAgICAgICAgKHR5cGUgYXMgYW55KS5vYmplY3RGbGFncyAmICh0cyBhcyBhbnkpLk9iamVjdEZsYWdzLlJlZmVyZW5jZSkpIDpcbiAgICAoKHR5cGU6IHRzLlR5cGUpID0+ICEhKHR5cGUuZmxhZ3MgJiAodHMgYXMgYW55KS5UeXBlRmxhZ3MuUmVmZXJlbmNlKSk7XG5cbmludGVyZmFjZSBUeXBlQ29udGV4dCB7XG4gIG5vZGU6IHRzLk5vZGU7XG4gIHByb2dyYW06IHRzLlByb2dyYW07XG4gIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sUXVlcnkoXG4gICAgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIHNvdXJjZTogdHMuU291cmNlRmlsZSxcbiAgICBmZXRjaFBpcGVzOiAoKSA9PiBTeW1ib2xUYWJsZSk6IFN5bWJvbFF1ZXJ5IHtcbiAgcmV0dXJuIG5ldyBUeXBlU2NyaXB0U3ltYm9sUXVlcnkocHJvZ3JhbSwgY2hlY2tlciwgc291cmNlLCBmZXRjaFBpcGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTWVtYmVycyhcbiAgICBwcm9ncmFtOiB0cy5Qcm9ncmFtLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBTeW1ib2xUYWJsZXxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCBkZWNsYXJhdGlvbiA9IGdldENsYXNzRnJvbVN0YXRpY1N5bWJvbChwcm9ncmFtLCBzdGF0aWNTeW1ib2wpO1xuICBpZiAoZGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCB0eXBlID0gY2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihkZWNsYXJhdGlvbik7XG4gICAgY29uc3Qgbm9kZSA9IHByb2dyYW0uZ2V0U291cmNlRmlsZShzdGF0aWNTeW1ib2wuZmlsZVBhdGgpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHR5cGUsIHtub2RlLCBwcm9ncmFtLCBjaGVja2VyfSkubWVtYmVycygpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NNZW1iZXJzRnJvbURlY2xhcmF0aW9uKFxuICAgIHByb2dyYW06IHRzLlByb2dyYW0sIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBzb3VyY2U6IHRzLlNvdXJjZUZpbGUsXG4gICAgZGVjbGFyYXRpb246IHRzLkNsYXNzRGVjbGFyYXRpb24pIHtcbiAgY29uc3QgdHlwZSA9IGNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24oZGVjbGFyYXRpb24pO1xuICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHR5cGUsIHtub2RlOiBzb3VyY2UsIHByb2dyYW0sIGNoZWNrZXJ9KS5tZW1iZXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQaXBlc1RhYmxlKFxuICAgIHNvdXJjZTogdHMuU291cmNlRmlsZSwgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsXG4gICAgcGlwZXM6IENvbXBpbGVQaXBlU3VtbWFyeVtdKTogU3ltYm9sVGFibGUge1xuICByZXR1cm4gbmV3IFBpcGVzVGFibGUocGlwZXMsIHtwcm9ncmFtLCBjaGVja2VyLCBub2RlOiBzb3VyY2V9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NGcm9tU3RhdGljU3ltYm9sKHByb2dyYW06IHRzLlByb2dyYW0sIHR5cGU6IFN0YXRpY1N5bWJvbCk6IHRzLkNsYXNzRGVjbGFyYXRpb258XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3Qgc291cmNlID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKHR5cGUuZmlsZVBhdGgpO1xuICBpZiAoc291cmNlKSB7XG4gICAgcmV0dXJuIHRzLmZvckVhY2hDaGlsZChzb3VyY2UsIGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZC5raW5kID09PSB0cy5TeW50YXhLaW5kLkNsYXNzRGVjbGFyYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2xhc3NEZWNsYXJhdGlvbiA9IGNoaWxkIGFzIHRzLkNsYXNzRGVjbGFyYXRpb247XG4gICAgICAgIGlmIChjbGFzc0RlY2xhcmF0aW9uLm5hbWUgIT0gbnVsbCAmJiBjbGFzc0RlY2xhcmF0aW9uLm5hbWUudGV4dCA9PT0gdHlwZS5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGNsYXNzRGVjbGFyYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSBhcyAodHMuQ2xhc3NEZWNsYXJhdGlvbiB8IHVuZGVmaW5lZCk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jbGFzcyBUeXBlU2NyaXB0U3ltYm9sUXVlcnkgaW1wbGVtZW50cyBTeW1ib2xRdWVyeSB7XG4gIHByaXZhdGUgdHlwZUNhY2hlID0gbmV3IE1hcDxCdWlsdGluVHlwZSwgU3ltYm9sPigpO1xuICBwcml2YXRlIHBpcGVzQ2FjaGU6IFN5bWJvbFRhYmxlfHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgcHJpdmF0ZSBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgcHJpdmF0ZSBzb3VyY2U6IHRzLlNvdXJjZUZpbGUsXG4gICAgICBwcml2YXRlIGZldGNoUGlwZXM6ICgpID0+IFN5bWJvbFRhYmxlKSB7fVxuXG4gIGdldFR5cGVLaW5kKHN5bWJvbDogU3ltYm9sKTogQnVpbHRpblR5cGUge1xuICAgIGNvbnN0IHR5cGUgPSBzeW1ib2wgaW5zdGFuY2VvZiBUeXBlV3JhcHBlciA/IHN5bWJvbC50c1R5cGUgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHR5cGVLaW5kT2YodHlwZSk7XG4gIH1cblxuICBnZXRCdWlsdGluVHlwZShraW5kOiBCdWlsdGluVHlwZSk6IFN5bWJvbCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMudHlwZUNhY2hlLmdldChraW5kKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgY29uc3QgdHlwZSA9IGdldFRzVHlwZUZyb21CdWlsdGluVHlwZShraW5kLCB7XG4gICAgICAgIGNoZWNrZXI6IHRoaXMuY2hlY2tlcixcbiAgICAgICAgbm9kZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgICBuZXcgVHlwZVdyYXBwZXIodHlwZSwge3Byb2dyYW06IHRoaXMucHJvZ3JhbSwgY2hlY2tlcjogdGhpcy5jaGVja2VyLCBub2RlOiB0aGlzLnNvdXJjZX0pO1xuICAgICAgdGhpcy50eXBlQ2FjaGUuc2V0KGtpbmQsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRUeXBlVW5pb24oLi4udHlwZXM6IFN5bWJvbFtdKTogU3ltYm9sIHtcbiAgICAvLyBObyBBUEkgZXhpc3RzIHNvIHJldHVybiBhbnkgaWYgdGhlIHR5cGVzIGFyZSBub3QgYWxsIHRoZSBzYW1lIHR5cGUuXG4gICAgbGV0IHJlc3VsdDogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZXMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB0eXBlc1swXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVzW2ldICE9IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0IHx8IHRoaXMuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbiAgfVxuXG4gIGdldEFycmF5VHlwZShfdHlwZTogU3ltYm9sKTogU3ltYm9sIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5BbnkpO1xuICB9XG5cbiAgZ2V0RWxlbWVudFR5cGUodHlwZTogU3ltYm9sKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUeXBlV3JhcHBlcikge1xuICAgICAgY29uc3QgdHkgPSB0eXBlLnRzVHlwZTtcbiAgICAgIGNvbnN0IHR5QXJncyA9IHR5cGUudHlwZUFyZ3VtZW50cygpO1xuICAgICAgLy8gVE9ETyhheWF6aGFmaXopOiBUcmFjayBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM3NzExIHRvIGV4cG9zZVxuICAgICAgLy8gYGlzQXJyYXlMaWtlVHlwZWAgYXMgYSBwdWJsaWMgbWV0aG9kLlxuICAgICAgaWYgKCEodGhpcy5jaGVja2VyIGFzIGFueSkuaXNBcnJheUxpa2VUeXBlKHR5KSB8fCB0eUFyZ3M/Lmxlbmd0aCAhPT0gMSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHR5QXJnc1swXTtcbiAgICB9XG4gIH1cblxuICBnZXROb25OdWxsYWJsZVR5cGUoc3ltYm9sOiBTeW1ib2wpOiBTeW1ib2wge1xuICAgIGlmIChzeW1ib2wgaW5zdGFuY2VvZiBUeXBlV3JhcHBlciAmJiAodHlwZW9mIHRoaXMuY2hlY2tlci5nZXROb25OdWxsYWJsZVR5cGUgPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIGNvbnN0IHRzVHlwZSA9IHN5bWJvbC50c1R5cGU7XG4gICAgICBjb25zdCBub25OdWxsYWJsZVR5cGUgPSB0aGlzLmNoZWNrZXIuZ2V0Tm9uTnVsbGFibGVUeXBlKHRzVHlwZSk7XG4gICAgICBpZiAobm9uTnVsbGFibGVUeXBlICE9IHRzVHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKG5vbk51bGxhYmxlVHlwZSwgc3ltYm9sLmNvbnRleHQpO1xuICAgICAgfSBlbHNlIGlmIChub25OdWxsYWJsZVR5cGUgPT0gdHNUeXBlKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSk7XG4gIH1cblxuICBnZXRQaXBlcygpOiBTeW1ib2xUYWJsZSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGlwZXNDYWNoZTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5waXBlc0NhY2hlID0gdGhpcy5mZXRjaFBpcGVzKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUNvbnRleHQodHlwZTogU3RhdGljU3ltYm9sKTogU3ltYm9sVGFibGV8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb250ZXh0OiBUeXBlQ29udGV4dCA9IHtub2RlOiB0aGlzLnNvdXJjZSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLCBjaGVja2VyOiB0aGlzLmNoZWNrZXJ9O1xuICAgIGNvbnN0IHR5cGVTeW1ib2wgPSBmaW5kQ2xhc3NTeW1ib2xJbkNvbnRleHQodHlwZSwgY29udGV4dCk7XG4gICAgaWYgKHR5cGVTeW1ib2wpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVJlZkNvbnRleHRUeXBlKHR5cGVTeW1ib2wsIGNvbnRleHQpO1xuICAgICAgaWYgKGNvbnRleHRUeXBlKSByZXR1cm4gY29udGV4dFR5cGUubWVtYmVycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldFR5cGVTeW1ib2wodHlwZTogU3RhdGljU3ltYm9sKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY29udGV4dDogVHlwZUNvbnRleHQgPSB7bm9kZTogdGhpcy5zb3VyY2UsIHByb2dyYW06IHRoaXMucHJvZ3JhbSwgY2hlY2tlcjogdGhpcy5jaGVja2VyfTtcbiAgICBjb25zdCB0eXBlU3ltYm9sID0gZmluZENsYXNzU3ltYm9sSW5Db250ZXh0KHR5cGUsIGNvbnRleHQpO1xuICAgIHJldHVybiB0eXBlU3ltYm9sICYmIG5ldyBTeW1ib2xXcmFwcGVyKHR5cGVTeW1ib2wsIGNvbnRleHQpO1xuICB9XG5cbiAgY3JlYXRlU3ltYm9sVGFibGUoc3ltYm9sczogU3ltYm9sRGVjbGFyYXRpb25bXSk6IFN5bWJvbFRhYmxlIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwU3ltYm9sVGFibGUoKTtcbiAgICByZXN1bHQuYWRkQWxsKHN5bWJvbHMubWFwKHMgPT4gbmV3IERlY2xhcmVkU3ltYm9sKHMpKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1lcmdlU3ltYm9sVGFibGUoc3ltYm9sVGFibGVzOiBTeW1ib2xUYWJsZVtdKTogU3ltYm9sVGFibGUge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXBTeW1ib2xUYWJsZSgpO1xuICAgIGZvciAoY29uc3Qgc3ltYm9sVGFibGUgb2Ygc3ltYm9sVGFibGVzKSB7XG4gICAgICByZXN1bHQuYWRkQWxsKHN5bWJvbFRhYmxlLnZhbHVlcygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFNwYW5BdChsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogU3Bhbnx1bmRlZmluZWQge1xuICAgIHJldHVybiBzcGFuQXQodGhpcy5zb3VyY2UsIGxpbmUsIGNvbHVtbik7XG4gIH1cblxuICBwcml2YXRlIGdldFRlbXBsYXRlUmVmQ29udGV4dFR5cGUodHlwZVN5bWJvbDogdHMuU3ltYm9sLCBjb250ZXh0OiBUeXBlQ29udGV4dCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNoZWNrZXIuZ2V0VHlwZU9mU3ltYm9sQXRMb2NhdGlvbih0eXBlU3ltYm9sLCB0aGlzLnNvdXJjZSk7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlLnN5bWJvbCAmJiB0eXBlLnN5bWJvbC5tZW1iZXJzICYmXG4gICAgICAgIGdldEZyb21TeW1ib2xUYWJsZSh0eXBlLnN5bWJvbC5tZW1iZXJzISwgJ19fY29uc3RydWN0b3InKTtcblxuICAgIGlmIChjb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yLmRlY2xhcmF0aW9ucyFbMF0gYXMgdHMuQ29uc3RydWN0b3JUeXBlTm9kZTtcbiAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24ucGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5jaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKHBhcmFtZXRlci50eXBlISk7XG4gICAgICAgIGlmICh0eXBlLnN5bWJvbCEubmFtZSA9PSAnVGVtcGxhdGVSZWYnICYmIGlzUmVmZXJlbmNlVHlwZSh0eXBlKSkge1xuICAgICAgICAgIGNvbnN0IHR5cGVXcmFwcGVyID0gbmV3IFR5cGVXcmFwcGVyKHR5cGUsIGNvbnRleHQpO1xuICAgICAgICAgIGNvbnN0IHR5cGVBcmd1bWVudHMgPSB0eXBlV3JhcHBlci50eXBlQXJndW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHR5cGVBcmd1bWVudHMgJiYgdHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlQXJndW1lbnRzWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlQ2FsbGFibGUodHlwZTogdHMuVHlwZSk6IGJvb2xlYW4ge1xuICBjb25zdCBzaWduYXR1cmVzID0gdHlwZS5nZXRDYWxsU2lnbmF0dXJlcygpO1xuICByZXR1cm4gc2lnbmF0dXJlcyAmJiBzaWduYXR1cmVzLmxlbmd0aCAhPSAwO1xufVxuXG5mdW5jdGlvbiBzaWduYXR1cmVzT2YodHlwZTogdHMuVHlwZSwgY29udGV4dDogVHlwZUNvbnRleHQpOiBTaWduYXR1cmVbXSB7XG4gIHJldHVybiB0eXBlLmdldENhbGxTaWduYXR1cmVzKCkubWFwKHMgPT4gbmV3IFNpZ25hdHVyZVdyYXBwZXIocywgY29udGV4dCkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RTaWduYXR1cmUodHlwZTogdHMuVHlwZSwgY29udGV4dDogVHlwZUNvbnRleHQsIF90eXBlczogU3ltYm9sW10pOiBTaWduYXR1cmV8XG4gICAgdW5kZWZpbmVkIHtcbiAgLy8gVE9ETzogRG8gYSBiZXR0ZXIgam9iIG9mIHNlbGVjdGluZyB0aGUgcmlnaHQgc2lnbmF0dXJlLiBUeXBlU2NyaXB0IGRvZXMgbm90IGN1cnJlbnRseSBzdXBwb3J0IGFcbiAgLy8gVHlwZSBSZWxhdGlvbnNoaXAgQVBJIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdnNjb2RlLW5nLWxhbmd1YWdlLXNlcnZpY2UvaXNzdWVzLzE0MykuXG4gIC8vIENvbnNpZGVyIGNyZWF0aW5nIGEgVHlwZUNoZWNrQmxvY2sgaG9zdCBpbiB0aGUgbGFuZ3VhZ2Ugc2VydmljZSB0aGF0IG1heSBhbHNvIGFjdCBhcyBhXG4gIC8vIHNjcmF0Y2hwYWQgZm9yIHR5cGUgY29tcGFyaXNvbnMuXG4gIGNvbnN0IHNpZ25hdHVyZXMgPSB0eXBlLmdldENhbGxTaWduYXR1cmVzKCk7XG4gIHJldHVybiBzaWduYXR1cmVzLmxlbmd0aCA/IG5ldyBTaWduYXR1cmVXcmFwcGVyKHNpZ25hdHVyZXNbMF0sIGNvbnRleHQpIDogdW5kZWZpbmVkO1xufVxuXG5jbGFzcyBUeXBlV3JhcHBlciBpbXBsZW1lbnRzIFN5bWJvbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0c1R5cGU6IHRzLlR5cGUsIHB1YmxpYyBjb250ZXh0OiBUeXBlQ29udGV4dCkge1xuICAgIGlmICghdHNUeXBlKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW50ZXJuYWw6IG51bGwgdHlwZScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jaGVja2VyLnR5cGVUb1N0cmluZyh0aGlzLnRzVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkga2luZDogRGVjbGFyYXRpb25LaW5kID0gJ3R5cGUnO1xuXG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogc3RyaW5nID0gJ3R5cGVzY3JpcHQnO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlOiBTeW1ib2x8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyByZWFkb25seSBjb250YWluZXI6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIHJlYWRvbmx5IHB1YmxpYzogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGNhbGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlQ2FsbGFibGUodGhpcy50c1R5cGUpO1xuICB9XG5cbiAgZ2V0IG51bGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXROb25OdWxsYWJsZVR5cGUodGhpcy50c1R5cGUpICE9IHRoaXMudHNUeXBlO1xuICB9XG5cbiAgZ2V0IGRvY3VtZW50YXRpb24oKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gICAgY29uc3Qgc3ltYm9sID0gdGhpcy50c1R5cGUuZ2V0U3ltYm9sKCk7XG4gICAgaWYgKCFzeW1ib2wpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bWJvbC5nZXREb2N1bWVudGF0aW9uQ29tbWVudCh0aGlzLmNvbnRleHQuY2hlY2tlcik7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbigpOiBEZWZpbml0aW9ufHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3ltYm9sID0gdGhpcy50c1R5cGUuZ2V0U3ltYm9sKCk7XG4gICAgcmV0dXJuIHN5bWJvbCA/IGRlZmluaXRpb25Gcm9tVHNTeW1ib2woc3ltYm9sKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1lbWJlcnMoKTogU3ltYm9sVGFibGUge1xuICAgIC8vIFNob3VsZCBjYWxsIGdldEFwcGFyZW50UHJvcGVydGllcygpIGluc3RlYWQgb2YgZ2V0UHJvcGVydGllcygpIGJlY2F1c2VcbiAgICAvLyB0aGUgZm9ybWVyIGluY2x1ZGVzIHByb3BlcnRpZXMgb24gdGhlIGJhc2UgY2xhc3Mgd2hlcmVhcyB0aGUgbGF0dGVyIGRvZXNcbiAgICAvLyBub3QuIFRoaXMgcHJvdmlkZXMgcHJvcGVydGllcyBsaWtlIC5iaW5kKCksIC5jYWxsKCksIC5hcHBseSgpLCBldGMgZm9yXG4gICAgLy8gZnVuY3Rpb25zLlxuICAgIHJldHVybiBuZXcgU3ltYm9sVGFibGVXcmFwcGVyKHRoaXMudHNUeXBlLmdldEFwcGFyZW50UHJvcGVydGllcygpLCB0aGlzLmNvbnRleHQsIHRoaXMudHNUeXBlKTtcbiAgfVxuXG4gIHNpZ25hdHVyZXMoKTogU2lnbmF0dXJlW10ge1xuICAgIHJldHVybiBzaWduYXR1cmVzT2YodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBzZWxlY3RTaWduYXR1cmUodHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHNlbGVjdFNpZ25hdHVyZSh0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0LCB0eXBlcyk7XG4gIH1cblxuICBpbmRleGVkKHR5cGU6IFN5bWJvbCwgdmFsdWU6IGFueSk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGlmICghKHR5cGUgaW5zdGFuY2VvZiBUeXBlV3JhcHBlcikpIHJldHVybjtcblxuICAgIGNvbnN0IHR5cGVLaW5kID0gdHlwZUtpbmRPZih0eXBlLnRzVHlwZSk7XG4gICAgc3dpdGNoICh0eXBlS2luZCkge1xuICAgICAgY2FzZSBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgIGNvbnN0IG5UeXBlID0gdGhpcy50c1R5cGUuZ2V0TnVtYmVySW5kZXhUeXBlKCk7XG4gICAgICAgIGlmIChuVHlwZSkge1xuICAgICAgICAgIC8vIGdldCB0aGUgcmlnaHQgdHVwbGUgdHlwZSBieSB2YWx1ZSwgbGlrZSAndmFyIHQ6IFtudW1iZXIsIHN0cmluZ107J1xuICAgICAgICAgIGlmIChuVHlwZS5pc1VuaW9uKCkpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB1bmRlZmluZWQgaWYgYXJyYXkgaW5kZXggb3V0IG9mIGJvdW5kLlxuICAgICAgICAgICAgcmV0dXJuIG5UeXBlLnR5cGVzW3ZhbHVlXSAmJiBuZXcgVHlwZVdyYXBwZXIoblR5cGUudHlwZXNbdmFsdWVdLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKG5UeXBlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZzpcbiAgICAgICAgY29uc3Qgc1R5cGUgPSB0aGlzLnRzVHlwZS5nZXRTdHJpbmdJbmRleFR5cGUoKTtcbiAgICAgICAgcmV0dXJuIHNUeXBlICYmIG5ldyBUeXBlV3JhcHBlcihzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICB0eXBlQXJndW1lbnRzKCk6IFN5bWJvbFtdfHVuZGVmaW5lZCB7XG4gICAgaWYgKCFpc1JlZmVyZW5jZVR5cGUodGhpcy50c1R5cGUpKSByZXR1cm47XG5cbiAgICBjb25zdCB0eXBlUmVmZXJlbmNlID0gKHRoaXMudHNUeXBlIGFzIHRzLlR5cGVSZWZlcmVuY2UpO1xuICAgIGxldCB0eXBlQXJndW1lbnRzOiBSZWFkb25seUFycmF5PHRzLlR5cGU+fHVuZGVmaW5lZDtcbiAgICB0eXBlQXJndW1lbnRzID0gdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0VHlwZUFyZ3VtZW50cyh0eXBlUmVmZXJlbmNlKTtcbiAgICBpZiAoIXR5cGVBcmd1bWVudHMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHR5cGVBcmd1bWVudHMubWFwKHRhID0+IG5ldyBUeXBlV3JhcHBlcih0YSwgdGhpcy5jb250ZXh0KSk7XG4gIH1cbn1cblxuLy8gSWYgc3RyaW5nSW5kZXhUeXBlIGEgcHJpbWl0aXZlIHR5cGUoZS5nLiAnc3RyaW5nJyksIHRoZSBTeW1ib2wgaXMgdW5kZWZpbmVkO1xuLy8gYW5kIGluIEFzdFR5cGUucmVzb2x2ZVByb3BlcnR5UmVhZCBtZXRob2QsIHRoZSBTeW1ib2wudHlwZSBzaG91bGQgZ2V0IHRoZSByaWdodCB0eXBlLlxuY2xhc3MgU3RyaW5nSW5kZXhUeXBlV3JhcHBlciBleHRlbmRzIFR5cGVXcmFwcGVyIHtcbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSBuZXcgVHlwZVdyYXBwZXIodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG59XG5cbmNsYXNzIFN5bWJvbFdyYXBwZXIgaW1wbGVtZW50cyBTeW1ib2wge1xuICBwcml2YXRlIHN5bWJvbDogdHMuU3ltYm9sO1xuICBwcml2YXRlIF9tZW1iZXJzPzogU3ltYm9sVGFibGU7XG5cbiAgcHVibGljIHJlYWRvbmx5IG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogc3RyaW5nID0gJ3R5cGVzY3JpcHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3ltYm9sOiB0cy5TeW1ib2wsXG4gICAgICAvKiogVHlwZVNjcmlwdCB0eXBlIGNvbnRleHQgb2YgdGhlIHN5bWJvbC4gKi9cbiAgICAgIHByaXZhdGUgY29udGV4dDogVHlwZUNvbnRleHQsXG4gICAgICAvKipcbiAgICAgICAqIFR5cGUgb2YgdGhlIFR5cGVTY3JpcHQgc3ltYm9sLCBpZiBrbm93bi4gSWYgbm90IHByb3ZpZGVkLCB0aGUgdHlwZSBvZiB0aGUgc3ltYm9sXG4gICAgICAgKiB3aWxsIGJlIGRldGVybWluZWQgZHluYW1pY2FsbHk7IHNlZSBgU3ltYm9sV3JhcHBlciN0c1R5cGVgLlxuICAgICAgICovXG4gICAgICBwcml2YXRlIF90c1R5cGU/OiB0cy5UeXBlKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2wgJiYgY29udGV4dCAmJiAoc3ltYm9sLmZsYWdzICYgdHMuU3ltYm9sRmxhZ3MuQWxpYXMpID9cbiAgICAgICAgY29udGV4dC5jaGVja2VyLmdldEFsaWFzZWRTeW1ib2woc3ltYm9sKSA6XG4gICAgICAgIHN5bWJvbDtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sLm5hbWU7XG4gIH1cblxuICBnZXQga2luZCgpOiBEZWNsYXJhdGlvbktpbmQge1xuICAgIHJldHVybiB0aGlzLmNhbGxhYmxlID8gJ21ldGhvZCcgOiAncHJvcGVydHknO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogVHlwZVdyYXBwZXIge1xuICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiBnZXRDb250YWluZXJPZih0aGlzLnN5bWJvbCwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBwdWJsaWMoKTogYm9vbGVhbiB7XG4gICAgLy8gU3ltYm9scyB0aGF0IGFyZSBub3QgZXhwbGljaXRseSBtYWRlIHByaXZhdGUgYXJlIHB1YmxpYy5cbiAgICByZXR1cm4gIWlzU3ltYm9sUHJpdmF0ZSh0aGlzLnN5bWJvbCk7XG4gIH1cblxuICBnZXQgY2FsbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVDYWxsYWJsZSh0aGlzLnRzVHlwZSk7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbigpOiBEZWZpbml0aW9uIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvbkZyb21Uc1N5bWJvbCh0aGlzLnN5bWJvbCk7XG4gIH1cblxuICBnZXQgZG9jdW1lbnRhdGlvbigpOiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2wuZ2V0RG9jdW1lbnRhdGlvbkNvbW1lbnQodGhpcy5jb250ZXh0LmNoZWNrZXIpO1xuICB9XG5cbiAgbWVtYmVycygpOiBTeW1ib2xUYWJsZSB7XG4gICAgaWYgKCF0aGlzLl9tZW1iZXJzKSB7XG4gICAgICBpZiAoKHRoaXMuc3ltYm9sLmZsYWdzICYgKHRzLlN5bWJvbEZsYWdzLkNsYXNzIHwgdHMuU3ltYm9sRmxhZ3MuSW50ZXJmYWNlKSkgIT0gMCkge1xuICAgICAgICBjb25zdCBkZWNsYXJlZFR5cGUgPSB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXREZWNsYXJlZFR5cGVPZlN5bWJvbCh0aGlzLnN5bWJvbCk7XG4gICAgICAgIGNvbnN0IHR5cGVXcmFwcGVyID0gbmV3IFR5cGVXcmFwcGVyKGRlY2xhcmVkVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5fbWVtYmVycyA9IHR5cGVXcmFwcGVyLm1lbWJlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21lbWJlcnMgPSBuZXcgU3ltYm9sVGFibGVXcmFwcGVyKHRoaXMuc3ltYm9sLm1lbWJlcnMhLCB0aGlzLmNvbnRleHQsIHRoaXMudHNUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lbWJlcnM7XG4gIH1cblxuICBzaWduYXR1cmVzKCk6IFNpZ25hdHVyZVtdIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlc09mKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgc2VsZWN0U2lnbmF0dXJlKHR5cGVzOiBTeW1ib2xbXSk6IFNpZ25hdHVyZXx1bmRlZmluZWQge1xuICAgIHJldHVybiBzZWxlY3RTaWduYXR1cmUodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCwgdHlwZXMpO1xuICB9XG5cbiAgaW5kZXhlZChfYXJndW1lbnQ6IFN5bWJvbCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB0eXBlQXJndW1lbnRzKCk6IFN5bWJvbFtdfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS50eXBlQXJndW1lbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCB0c1R5cGUoKTogdHMuVHlwZSB7XG4gICAgbGV0IHR5cGUgPSB0aGlzLl90c1R5cGU7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICB0eXBlID0gdGhpcy5fdHNUeXBlID1cbiAgICAgICAgICB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXRUeXBlT2ZTeW1ib2xBdExvY2F0aW9uKHRoaXMuc3ltYm9sLCB0aGlzLmNvbnRleHQubm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmNsYXNzIERlY2xhcmVkU3ltYm9sIGltcGxlbWVudHMgU3ltYm9sIHtcbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmcgPSAnbmctdGVtcGxhdGUnO1xuXG4gIHB1YmxpYyByZWFkb25seSBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyByZWFkb25seSBwdWJsaWM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVjbGFyYXRpb246IFN5bWJvbERlY2xhcmF0aW9uKSB7fVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLm5hbWU7XG4gIH1cblxuICBnZXQga2luZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi5raW5kO1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogU3ltYm9sIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi50eXBlO1xuICB9XG5cbiAgZ2V0IGNhbGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUuY2FsbGFibGU7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbigpOiBEZWZpbml0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0IGRvY3VtZW50YXRpb24oKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24udHlwZS5kb2N1bWVudGF0aW9uO1xuICB9XG5cbiAgbWVtYmVycygpOiBTeW1ib2xUYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS5tZW1iZXJzKCk7XG4gIH1cblxuICBzaWduYXR1cmVzKCk6IFNpZ25hdHVyZVtdIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLnNpZ25hdHVyZXMoKTtcbiAgfVxuXG4gIHNlbGVjdFNpZ25hdHVyZSh0eXBlczogU3ltYm9sW10pOiBTaWduYXR1cmV8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLnNlbGVjdFNpZ25hdHVyZSh0eXBlcyk7XG4gIH1cblxuICB0eXBlQXJndW1lbnRzKCk6IFN5bWJvbFtdfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS50eXBlQXJndW1lbnRzKCk7XG4gIH1cblxuICBpbmRleGVkKF9hcmd1bWVudDogU3ltYm9sKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5jbGFzcyBTaWduYXR1cmVXcmFwcGVyIGltcGxlbWVudHMgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWduYXR1cmU6IHRzLlNpZ25hdHVyZSwgcHJpdmF0ZSBjb250ZXh0OiBUeXBlQ29udGV4dCkge31cblxuICBnZXQgYXJndW1lbnRzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICByZXR1cm4gbmV3IFN5bWJvbFRhYmxlV3JhcHBlcih0aGlzLnNpZ25hdHVyZS5nZXRQYXJhbWV0ZXJzKCksIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgcmVzdWx0KCk6IFN5bWJvbCB7XG4gICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0aGlzLnNpZ25hdHVyZS5nZXRSZXR1cm5UeXBlKCksIHRoaXMuY29udGV4dCk7XG4gIH1cbn1cblxuY2xhc3MgU2lnbmF0dXJlUmVzdWx0T3ZlcnJpZGUgaW1wbGVtZW50cyBTaWduYXR1cmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZ25hdHVyZTogU2lnbmF0dXJlLCBwcml2YXRlIHJlc3VsdFR5cGU6IFN5bWJvbCkge31cblxuICBnZXQgYXJndW1lbnRzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmUuYXJndW1lbnRzO1xuICB9XG5cbiAgZ2V0IHJlc3VsdCgpOiBTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdFR5cGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9TeW1ib2xUYWJsZUZhY3Rvcnkoc3ltYm9sczogdHMuU3ltYm9sW10pOiB0cy5TeW1ib2xUYWJsZSB7XG4gIC8vIOKIgCBUeXBlc2NyaXB0IHZlcnNpb24gPj0gMi4yLCBgU3ltYm9sVGFibGVgIGlzIGltcGxlbWVudGVkIGFzIGFuIEVTNiBgTWFwYFxuICBjb25zdCByZXN1bHQgPSBuZXcgTWFwPHN0cmluZywgdHMuU3ltYm9sPigpO1xuICBmb3IgKGNvbnN0IHN5bWJvbCBvZiBzeW1ib2xzKSB7XG4gICAgcmVzdWx0LnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgYXMgdHMuU3ltYm9sVGFibGU7XG59XG5cbmZ1bmN0aW9uIHRvU3ltYm9scyhzeW1ib2xUYWJsZTogdHMuU3ltYm9sVGFibGV8dW5kZWZpbmVkKTogdHMuU3ltYm9sW10ge1xuICBpZiAoIXN5bWJvbFRhYmxlKSByZXR1cm4gW107XG5cbiAgY29uc3QgdGFibGUgPSBzeW1ib2xUYWJsZSBhcyBhbnk7XG5cbiAgaWYgKHR5cGVvZiB0YWJsZS52YWx1ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0YWJsZS52YWx1ZXMoKSkgYXMgdHMuU3ltYm9sW107XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IHRzLlN5bWJvbFtdID0gW107XG5cbiAgY29uc3Qgb3duID0gdHlwZW9mIHRhYmxlLmhhc093blByb3BlcnR5ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIChuYW1lOiBzdHJpbmcpID0+IHRhYmxlLmhhc093blByb3BlcnR5KG5hbWUpIDpcbiAgICAgIChuYW1lOiBzdHJpbmcpID0+ICEhdGFibGVbbmFtZV07XG5cbiAgZm9yIChjb25zdCBuYW1lIGluIHRhYmxlKSB7XG4gICAgaWYgKG93bihuYW1lKSkge1xuICAgICAgcmVzdWx0LnB1c2godGFibGVbbmFtZV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jbGFzcyBTeW1ib2xUYWJsZVdyYXBwZXIgaW1wbGVtZW50cyBTeW1ib2xUYWJsZSB7XG4gIHByaXZhdGUgc3ltYm9sczogdHMuU3ltYm9sW107XG4gIHByaXZhdGUgc3ltYm9sVGFibGU6IHRzLlN5bWJvbFRhYmxlO1xuICBwcml2YXRlIHN0cmluZ0luZGV4VHlwZT86IHRzLlR5cGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBxdWVyeWFibGUgdGFibGUgb2Ygc3ltYm9scyBiZWxvbmdpbmcgdG8gYSBUeXBlU2NyaXB0IGVudGl0eS5cbiAgICogQHBhcmFtIHN5bWJvbHMgc3ltYm9scyB0byBxdWVyeSBiZWxvbmdpbmcgdG8gdGhlIGVudGl0eVxuICAgKiBAcGFyYW0gY29udGV4dCBwcm9ncmFtIGNvbnRleHRcbiAgICogQHBhcmFtIHR5cGUgb3JpZ2luYWwgVHlwZVNjcmlwdCB0eXBlIG9mIGVudGl0eSBvd25pbmcgdGhlIHN5bWJvbHMsIGlmIGtub3duXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzOiB0cy5TeW1ib2xUYWJsZXx0cy5TeW1ib2xbXSwgcHJpdmF0ZSBjb250ZXh0OiBUeXBlQ29udGV4dCwgdHlwZT86IHRzLlR5cGUpIHtcbiAgICBzeW1ib2xzID0gc3ltYm9scyB8fCBbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN5bWJvbHMpKSB7XG4gICAgICB0aGlzLnN5bWJvbHMgPSBzeW1ib2xzO1xuICAgICAgdGhpcy5zeW1ib2xUYWJsZSA9IHRvU3ltYm9sVGFibGVGYWN0b3J5KHN5bWJvbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN5bWJvbHMgPSB0b1N5bWJvbHMoc3ltYm9scyk7XG4gICAgICB0aGlzLnN5bWJvbFRhYmxlID0gc3ltYm9scztcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpcy5zdHJpbmdJbmRleFR5cGUgPSB0eXBlLmdldFN0cmluZ0luZGV4VHlwZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5sZW5ndGg7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBzeW1ib2wgPSBnZXRGcm9tU3ltYm9sVGFibGUodGhpcy5zeW1ib2xUYWJsZSwga2V5KTtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICByZXR1cm4gbmV3IFN5bWJvbFdyYXBwZXIoc3ltYm9sLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0cmluZ0luZGV4VHlwZSkge1xuICAgICAgLy8gSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCBhcyBhbiBleHBsaWNpdCBzeW1ib2wgb24gdGhlIHR5cGUsIGl0IG1heSBiZSBhY2Nlc3NpbmcgYSBzdHJpbmdcbiAgICAgIC8vIGluZGV4IHNpZ25hdHVyZSB1c2luZyBkb3Qgbm90YXRpb246XG4gICAgICAvL1xuICAgICAgLy8gICBjb25zdCBvYmo8VD46IHsgW2tleTogc3RyaW5nXTogVCB9O1xuICAgICAgLy8gICBvYmouc3RyaW5nSW5kZXggLy8gZXF1aXZhbGVudCB0byBvYmpbJ3N0cmluZ0luZGV4J107XG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhpcyBjYXNlLCByZXR1cm4gdGhlIHR5cGUgaW5kZXhlZCBieSBhbiBhcmJpdHJhcnkgc3RyaW5nIGtleS5cbiAgICAgIHJldHVybiBuZXcgU3RyaW5nSW5kZXhUeXBlV3JhcHBlcih0aGlzLnN0cmluZ0luZGV4VHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFibGU6IGFueSA9IHRoaXMuc3ltYm9sVGFibGU7XG4gICAgcmV0dXJuICgodHlwZW9mIHRhYmxlLmhhcyA9PT0gJ2Z1bmN0aW9uJykgPyB0YWJsZS5oYXMoa2V5KSA6IHRhYmxlW2tleV0gIT0gbnVsbCkgfHxcbiAgICAgICAgdGhpcy5zdHJpbmdJbmRleFR5cGUgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhbHVlcygpOiBTeW1ib2xbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5tYXAocyA9PiBuZXcgU3ltYm9sV3JhcHBlcihzLCB0aGlzLmNvbnRleHQpKTtcbiAgfVxufVxuXG5jbGFzcyBNYXBTeW1ib2xUYWJsZSBpbXBsZW1lbnRzIFN5bWJvbFRhYmxlIHtcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgU3ltYm9sPigpO1xuICBwcml2YXRlIF92YWx1ZXM6IFN5bWJvbFtdID0gW107XG5cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuc2l6ZTtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZyk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgfVxuXG4gIGFkZChzeW1ib2w6IFN5bWJvbCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXMoc3ltYm9sLm5hbWUpKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMubWFwLmdldChzeW1ib2wubmFtZSkhO1xuICAgICAgdGhpcy5fdmFsdWVzW3RoaXMuX3ZhbHVlcy5pbmRleE9mKHByZXZpb3VzKV0gPSBzeW1ib2w7XG4gICAgfVxuICAgIHRoaXMubWFwLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcbiAgICB0aGlzLl92YWx1ZXMucHVzaChzeW1ib2wpO1xuICB9XG5cbiAgYWRkQWxsKHN5bWJvbHM6IFN5bWJvbFtdKSB7XG4gICAgZm9yIChjb25zdCBzeW1ib2wgb2Ygc3ltYm9scykge1xuICAgICAgdGhpcy5hZGQoc3ltYm9sKTtcbiAgICB9XG4gIH1cblxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG4gIH1cblxuICB2YWx1ZXMoKTogU3ltYm9sW10ge1xuICAgIC8vIFN3aXRjaCB0byB0aGlzLm1hcC52YWx1ZXMgb25jZSBpdGVyYWJsZXMgYXJlIHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IGxhbmd1YWdlLlxuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cbn1cblxuY2xhc3MgUGlwZXNUYWJsZSBpbXBsZW1lbnRzIFN5bWJvbFRhYmxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwaXBlczogQ29tcGlsZVBpcGVTdW1tYXJ5W10sIHByaXZhdGUgY29udGV4dDogVHlwZUNvbnRleHQpIHt9XG5cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGlwZXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcGlwZSA9IHRoaXMucGlwZXMuZmluZChwaXBlID0+IHBpcGUubmFtZSA9PSBrZXkpO1xuICAgIGlmIChwaXBlKSB7XG4gICAgICByZXR1cm4gbmV3IFBpcGVTeW1ib2wocGlwZSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5waXBlcy5maW5kKHBpcGUgPT4gcGlwZS5uYW1lID09IGtleSkgIT0gbnVsbDtcbiAgfVxuXG4gIHZhbHVlcygpOiBTeW1ib2xbXSB7XG4gICAgcmV0dXJuIHRoaXMucGlwZXMubWFwKHBpcGUgPT4gbmV3IFBpcGVTeW1ib2wocGlwZSwgdGhpcy5jb250ZXh0KSk7XG4gIH1cbn1cblxuLy8gVGhpcyBtYXRjaGVzIC5kLnRzIGZpbGVzIHRoYXQgbG9vayBsaWtlIFwiLi4uLzxwYWNrYWdlLW5hbWU+LzxwYWNrYWdlLW5hbWU+LmQudHNcIixcbmNvbnN0IElOREVYX1BBVFRFUk4gPSAvW1xcXFwvXShbXlxcXFwvXSspW1xcXFwvXVxcMVxcLmRcXC50cyQvO1xuXG5jbGFzcyBQaXBlU3ltYm9sIGltcGxlbWVudHMgU3ltYm9sIHtcbiAgcHJpdmF0ZSBfdHNUeXBlOiB0cy5UeXBlfHVuZGVmaW5lZDtcbiAgcHVibGljIHJlYWRvbmx5IGtpbmQ6IERlY2xhcmF0aW9uS2luZCA9ICdwaXBlJztcbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmcgPSAndHlwZXNjcmlwdCc7XG4gIHB1YmxpYyByZWFkb25seSBjb250YWluZXI6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBjYWxsYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyByZWFkb25seSBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVhZG9ubHkgcHVibGljOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpcGU6IENvbXBpbGVQaXBlU3VtbWFyeSwgcHJpdmF0ZSBjb250ZXh0OiBUeXBlQ29udGV4dCkge31cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBpcGUubmFtZTtcbiAgfVxuXG4gIGdldCB0eXBlKCk6IFR5cGVXcmFwcGVyIHtcbiAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IGRlZmluaXRpb24oKTogRGVmaW5pdGlvbnx1bmRlZmluZWQge1xuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMudHNUeXBlLmdldFN5bWJvbCgpO1xuICAgIHJldHVybiBzeW1ib2wgPyBkZWZpbml0aW9uRnJvbVRzU3ltYm9sKHN5bWJvbCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgZG9jdW1lbnRhdGlvbigpOiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdIHtcbiAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnRzVHlwZS5nZXRTeW1ib2woKTtcbiAgICBpZiAoIXN5bWJvbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gc3ltYm9sLmdldERvY3VtZW50YXRpb25Db21tZW50KHRoaXMuY29udGV4dC5jaGVja2VyKTtcbiAgfVxuXG4gIG1lbWJlcnMoKTogU3ltYm9sVGFibGUge1xuICAgIHJldHVybiBFbXB0eVRhYmxlLmluc3RhbmNlO1xuICB9XG5cbiAgc2lnbmF0dXJlcygpOiBTaWduYXR1cmVbXSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZXNPZih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIHNlbGVjdFNpZ25hdHVyZSh0eXBlczogU3ltYm9sW10pOiBTaWduYXR1cmV8dW5kZWZpbmVkIHtcbiAgICBsZXQgc2lnbmF0dXJlID0gc2VsZWN0U2lnbmF0dXJlKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQsIHR5cGVzKSE7XG4gICAgaWYgKHR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSB0eXBlc1swXTtcbiAgICAgIGxldCByZXN1bHRUeXBlOiBTeW1ib2x8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgICAgc3dpdGNoICh0aGlzLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnYXN5bmMnOlxuICAgICAgICAgIC8vIEdldCB0eXBlIGFyZ3VtZW50IG9mICdPYnNlcnZhYmxlJywgJ1Byb21pc2UnLCBvciAnRXZlbnRFbWl0dGVyJy5cbiAgICAgICAgICBjb25zdCB0QXJncyA9IHBhcmFtZXRlclR5cGUudHlwZUFyZ3VtZW50cygpO1xuICAgICAgICAgIGlmICh0QXJncyAmJiB0QXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFR5cGUgPSB0QXJnc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NsaWNlJzpcbiAgICAgICAgICByZXN1bHRUeXBlID0gcGFyYW1ldGVyVHlwZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHRUeXBlKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmVSZXN1bHRPdmVycmlkZShzaWduYXR1cmUsIHJlc3VsdFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgaW5kZXhlZChfYXJndW1lbnQ6IFN5bWJvbCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB0eXBlQXJndW1lbnRzKCk6IFN5bWJvbFtdfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS50eXBlQXJndW1lbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCB0c1R5cGUoKTogdHMuVHlwZSB7XG4gICAgbGV0IHR5cGUgPSB0aGlzLl90c1R5cGU7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICBjb25zdCBjbGFzc1N5bWJvbCA9IHRoaXMuZmluZENsYXNzU3ltYm9sKHRoaXMucGlwZS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICBpZiAoY2xhc3NTeW1ib2wpIHtcbiAgICAgICAgdHlwZSA9IHRoaXMuX3RzVHlwZSA9IHRoaXMuZmluZFRyYW5zZm9ybU1ldGhvZFR5cGUoY2xhc3NTeW1ib2wpITtcbiAgICAgIH1cbiAgICAgIGlmICghdHlwZSkge1xuICAgICAgICB0eXBlID0gdGhpcy5fdHNUeXBlID0gZ2V0VHNUeXBlRnJvbUJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSwgdGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDbGFzc1N5bWJvbCh0eXBlOiBTdGF0aWNTeW1ib2wpOiB0cy5TeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gZmluZENsYXNzU3ltYm9sSW5Db250ZXh0KHR5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRUcmFuc2Zvcm1NZXRob2RUeXBlKGNsYXNzU3ltYm9sOiB0cy5TeW1ib2wpOiB0cy5UeXBlfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY2xhc3NUeXBlID0gdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0RGVjbGFyZWRUeXBlT2ZTeW1ib2woY2xhc3NTeW1ib2wpO1xuICAgIGlmIChjbGFzc1R5cGUpIHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGNsYXNzVHlwZS5nZXRQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXRUeXBlT2ZTeW1ib2xBdExvY2F0aW9uKHRyYW5zZm9ybSwgdGhpcy5jb250ZXh0Lm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2xhc3NTeW1ib2xJbkNvbnRleHQodHlwZTogU3RhdGljU3ltYm9sLCBjb250ZXh0OiBUeXBlQ29udGV4dCk6IHRzLlN5bWJvbHx1bmRlZmluZWQge1xuICBsZXQgc291cmNlRmlsZSA9IGNvbnRleHQucHJvZ3JhbS5nZXRTb3VyY2VGaWxlKHR5cGUuZmlsZVBhdGgpO1xuICBpZiAoIXNvdXJjZUZpbGUpIHtcbiAgICAvLyBUaGlzIGhhbmRsZXMgYSBjYXNlIHdoZXJlIGFuIDxwYWNrYWdlTmFtZT4vaW5kZXguZC50cyBhbmQgYSA8cGFja2FnZU5hbWU+LzxwYWNrYWdlTmFtZT4uZC50c1xuICAgIC8vIGFyZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuIElmIHdlIGFyZSBsb29raW5nIGZvciA8cGFja2FnZU5hbWU+LzxwYWNrYWdlTmFtZT4gYW5kIGRpZG4ndFxuICAgIC8vIGZpbmQgaXQsIGxvb2sgZm9yIDxwYWNrYWdlTmFtZT4vaW5kZXguZC50cyBhcyB0aGUgcHJvZ3JhbSBtaWdodCBoYXZlIGZvdW5kIHRoYXQgaW5zdGVhZC5cbiAgICBjb25zdCBwID0gdHlwZS5maWxlUGF0aDtcbiAgICBjb25zdCBtID0gcC5tYXRjaChJTkRFWF9QQVRURVJOKTtcbiAgICBpZiAobSkge1xuICAgICAgY29uc3QgaW5kZXhWZXJzaW9uID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShwKSwgJ2luZGV4LmQudHMnKTtcbiAgICAgIHNvdXJjZUZpbGUgPSBjb250ZXh0LnByb2dyYW0uZ2V0U291cmNlRmlsZShpbmRleFZlcnNpb24pO1xuICAgIH1cbiAgfVxuICBpZiAoc291cmNlRmlsZSkge1xuICAgIGNvbnN0IG1vZHVsZVN5bWJvbCA9IChzb3VyY2VGaWxlIGFzIGFueSkubW9kdWxlIHx8IChzb3VyY2VGaWxlIGFzIGFueSkuc3ltYm9sO1xuICAgIGNvbnN0IGV4cG9ydHMgPSBjb250ZXh0LmNoZWNrZXIuZ2V0RXhwb3J0c09mTW9kdWxlKG1vZHVsZVN5bWJvbCk7XG4gICAgcmV0dXJuIChleHBvcnRzIHx8IFtdKS5maW5kKHN5bWJvbCA9PiBzeW1ib2wubmFtZSA9PSB0eXBlLm5hbWUpO1xuICB9XG59XG5cbmNsYXNzIEVtcHR5VGFibGUgaW1wbGVtZW50cyBTeW1ib2xUYWJsZSB7XG4gIHB1YmxpYyByZWFkb25seSBzaXplOiBudW1iZXIgPSAwO1xuICBnZXQoX2tleTogc3RyaW5nKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBoYXMoX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhbHVlcygpOiBTeW1ib2xbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBFbXB0eVRhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGlzU3ltYm9sUHJpdmF0ZShzOiB0cy5TeW1ib2wpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhcy52YWx1ZURlY2xhcmF0aW9uICYmIGlzUHJpdmF0ZShzLnZhbHVlRGVjbGFyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBnZXRUc1R5cGVGcm9tQnVpbHRpblR5cGUoYnVpbHRpblR5cGU6IEJ1aWx0aW5UeXBlLCBjdHg6IFR5cGVDb250ZXh0KTogdHMuVHlwZSB7XG4gIGxldCBzeW50YXhLaW5kOiB0cy5TeW50YXhLaW5kO1xuICBzd2l0Y2ggKGJ1aWx0aW5UeXBlKSB7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5BbnlLZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuQm9vbGVhbktleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bGw6XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5OdWxsS2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuTnVtYmVyS2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuU3RyaW5nS2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQnVpbHRpblR5cGUuVW5kZWZpbmVkOlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuVW5kZWZpbmVkS2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludGVybmFsIGVycm9yLCB1bmhhbmRsZWQgbGl0ZXJhbCBraW5kICR7YnVpbHRpblR5cGV9OiR7QnVpbHRpblR5cGVbYnVpbHRpblR5cGVdfWApO1xuICB9XG4gIGNvbnN0IG5vZGUgPSB0cy5jcmVhdGVOb2RlKHN5bnRheEtpbmQpO1xuICBub2RlLnBhcmVudCA9IGN0eC5ub2RlO1xuICByZXR1cm4gY3R4LmNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24obm9kZSk7XG59XG5cbmZ1bmN0aW9uIHNwYW5BdChzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogU3Bhbnx1bmRlZmluZWQge1xuICBpZiAobGluZSAhPSBudWxsICYmIGNvbHVtbiAhPSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0cy5nZXRQb3NpdGlvbk9mTGluZUFuZENoYXJhY3Rlcihzb3VyY2VGaWxlLCBsaW5lLCBjb2x1bW4pO1xuICAgIGNvbnN0IGZpbmRDaGlsZCA9IGZ1bmN0aW9uIGZpbmRDaGlsZChub2RlOiB0cy5Ob2RlKTogdHMuTm9kZXx1bmRlZmluZWQge1xuICAgICAgaWYgKG5vZGUua2luZCA+IHRzLlN5bnRheEtpbmQuTGFzdFRva2VuICYmIG5vZGUucG9zIDw9IHBvc2l0aW9uICYmIG5vZGUuZW5kID4gcG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYmV0dGVyTm9kZSA9IHRzLmZvckVhY2hDaGlsZChub2RlLCBmaW5kQ2hpbGQpO1xuICAgICAgICByZXR1cm4gYmV0dGVyTm9kZSB8fCBub2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBub2RlID0gdHMuZm9yRWFjaENoaWxkKHNvdXJjZUZpbGUsIGZpbmRDaGlsZCk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybiB7c3RhcnQ6IG5vZGUuZ2V0U3RhcnQoKSwgZW5kOiBub2RlLmdldEVuZCgpfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbkZyb21Uc1N5bWJvbChzeW1ib2w6IHRzLlN5bWJvbCk6IERlZmluaXRpb24ge1xuICBjb25zdCBkZWNsYXJhdGlvbnMgPSBzeW1ib2wuZGVjbGFyYXRpb25zO1xuICBpZiAoZGVjbGFyYXRpb25zKSB7XG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucy5tYXAoZGVjbGFyYXRpb24gPT4ge1xuICAgICAgY29uc3Qgc291cmNlRmlsZSA9IGRlY2xhcmF0aW9uLmdldFNvdXJjZUZpbGUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVOYW1lOiBzb3VyY2VGaWxlLmZpbGVOYW1lLFxuICAgICAgICBzcGFuOiB7c3RhcnQ6IGRlY2xhcmF0aW9uLmdldFN0YXJ0KCksIGVuZDogZGVjbGFyYXRpb24uZ2V0RW5kKCl9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmVudERlY2xhcmF0aW9uT2Yobm9kZTogdHMuTm9kZSk6IHRzLk5vZGV8dW5kZWZpbmVkIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkNsYXNzRGVjbGFyYXRpb246XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuSW50ZXJmYWNlRGVjbGFyYXRpb246XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlNvdXJjZUZpbGU6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudCE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyT2Yoc3ltYm9sOiB0cy5TeW1ib2wsIGNvbnRleHQ6IFR5cGVDb250ZXh0KTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gIGlmIChzeW1ib2wuZ2V0RmxhZ3MoKSAmIHRzLlN5bWJvbEZsYWdzLkNsYXNzTWVtYmVyICYmIHN5bWJvbC5kZWNsYXJhdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGRlY2xhcmF0aW9uIG9mIHN5bWJvbC5kZWNsYXJhdGlvbnMpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudERlY2xhcmF0aW9uT2YoZGVjbGFyYXRpb24pO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5jaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKHBhcmVudCk7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlS2luZE9mKHR5cGU6IHRzLlR5cGV8dW5kZWZpbmVkKTogQnVpbHRpblR5cGUge1xuICBpZiAodHlwZSkge1xuICAgIGlmICh0eXBlLmZsYWdzICYgdHMuVHlwZUZsYWdzLkFueSkge1xuICAgICAgcmV0dXJuIEJ1aWx0aW5UeXBlLkFueTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlLmZsYWdzICYgKHRzLlR5cGVGbGFncy5TdHJpbmcgfCB0cy5UeXBlRmxhZ3MuU3RyaW5nTGlrZSB8IHRzLlR5cGVGbGFncy5TdHJpbmdMaXRlcmFsKSkge1xuICAgICAgcmV0dXJuIEJ1aWx0aW5UeXBlLlN0cmluZztcbiAgICB9IGVsc2UgaWYgKHR5cGUuZmxhZ3MgJiAodHMuVHlwZUZsYWdzLk51bWJlciB8IHRzLlR5cGVGbGFncy5OdW1iZXJMaWtlKSkge1xuICAgICAgcmV0dXJuIEJ1aWx0aW5UeXBlLk51bWJlcjtcbiAgICB9IGVsc2UgaWYgKHR5cGUuZmxhZ3MgJiB0cy5UeXBlRmxhZ3MuT2JqZWN0KSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuT2JqZWN0O1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmICh0cy5UeXBlRmxhZ3MuVW5kZWZpbmVkKSkge1xuICAgICAgcmV0dXJuIEJ1aWx0aW5UeXBlLlVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGUuZmxhZ3MgJiAodHMuVHlwZUZsYWdzLk51bGwpKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuTnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGUuZmxhZ3MgJiB0cy5UeXBlRmxhZ3MuVW5pb24pIHtcbiAgICAgIGNvbnN0IHVuaW9uVHlwZSA9IHR5cGUgYXMgdHMuVW5pb25UeXBlO1xuICAgICAgaWYgKHVuaW9uVHlwZS50eXBlcy5sZW5ndGggPT09IDApIHJldHVybiBCdWlsdGluVHlwZS5PdGhlcjtcbiAgICAgIGxldCB0eTogQnVpbHRpblR5cGUgPSAwO1xuICAgICAgZm9yIChjb25zdCBzdWJUeXBlIG9mIHVuaW9uVHlwZS50eXBlcykge1xuICAgICAgICB0eSB8PSB0eXBlS2luZE9mKHN1YlR5cGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5O1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmIHRzLlR5cGVGbGFncy5UeXBlUGFyYW1ldGVyKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuVW5ib3VuZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJ1aWx0aW5UeXBlLk90aGVyO1xufVxuXG5mdW5jdGlvbiBnZXRGcm9tU3ltYm9sVGFibGUoc3ltYm9sVGFibGU6IHRzLlN5bWJvbFRhYmxlLCBrZXk6IHN0cmluZyk6IHRzLlN5bWJvbHx1bmRlZmluZWQge1xuICBjb25zdCB0YWJsZSA9IHN5bWJvbFRhYmxlIGFzIGFueTtcbiAgbGV0IHN5bWJvbDogdHMuU3ltYm9sfHVuZGVmaW5lZDtcblxuICBpZiAodHlwZW9mIHRhYmxlLmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFRTIDIuMiB1c2VzIGEgTWFwXG4gICAgc3ltYm9sID0gdGFibGUuZ2V0KGtleSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVFMgcHJlLTIuMiB1c2VzIGFuIG9iamVjdFxuICAgIHN5bWJvbCA9IHRhYmxlW2tleV07XG4gIH1cblxuICByZXR1cm4gc3ltYm9sO1xufVxuIl19