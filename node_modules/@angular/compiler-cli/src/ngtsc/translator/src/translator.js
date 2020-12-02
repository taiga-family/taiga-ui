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
        define("@angular/compiler-cli/src/ngtsc/translator/src/translator", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var Context = /** @class */ (function () {
        function Context(isStatement) {
            this.isStatement = isStatement;
        }
        Object.defineProperty(Context.prototype, "withExpressionMode", {
            get: function () {
                return this.isStatement ? new Context(false) : this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "withStatementMode", {
            get: function () {
                return !this.isStatement ? new Context(true) : this;
            },
            enumerable: true,
            configurable: true
        });
        return Context;
    }());
    exports.Context = Context;
    var BINARY_OPERATORS = new Map([
        [compiler_1.BinaryOperator.And, ts.SyntaxKind.AmpersandAmpersandToken],
        [compiler_1.BinaryOperator.Bigger, ts.SyntaxKind.GreaterThanToken],
        [compiler_1.BinaryOperator.BiggerEquals, ts.SyntaxKind.GreaterThanEqualsToken],
        [compiler_1.BinaryOperator.BitwiseAnd, ts.SyntaxKind.AmpersandToken],
        [compiler_1.BinaryOperator.Divide, ts.SyntaxKind.SlashToken],
        [compiler_1.BinaryOperator.Equals, ts.SyntaxKind.EqualsEqualsToken],
        [compiler_1.BinaryOperator.Identical, ts.SyntaxKind.EqualsEqualsEqualsToken],
        [compiler_1.BinaryOperator.Lower, ts.SyntaxKind.LessThanToken],
        [compiler_1.BinaryOperator.LowerEquals, ts.SyntaxKind.LessThanEqualsToken],
        [compiler_1.BinaryOperator.Minus, ts.SyntaxKind.MinusToken],
        [compiler_1.BinaryOperator.Modulo, ts.SyntaxKind.PercentToken],
        [compiler_1.BinaryOperator.Multiply, ts.SyntaxKind.AsteriskToken],
        [compiler_1.BinaryOperator.NotEquals, ts.SyntaxKind.ExclamationEqualsToken],
        [compiler_1.BinaryOperator.NotIdentical, ts.SyntaxKind.ExclamationEqualsEqualsToken],
        [compiler_1.BinaryOperator.Or, ts.SyntaxKind.BarBarToken],
        [compiler_1.BinaryOperator.Plus, ts.SyntaxKind.PlusToken],
    ]);
    var ImportManager = /** @class */ (function () {
        function ImportManager(rewriter, prefix) {
            if (rewriter === void 0) { rewriter = new imports_1.NoopImportRewriter(); }
            if (prefix === void 0) { prefix = 'i'; }
            this.rewriter = rewriter;
            this.prefix = prefix;
            this.specifierToIdentifier = new Map();
            this.nextIndex = 0;
        }
        ImportManager.prototype.generateNamedImport = function (moduleName, originalSymbol) {
            // First, rewrite the symbol name.
            var symbol = this.rewriter.rewriteSymbol(originalSymbol, moduleName);
            // Ask the rewriter if this symbol should be imported at all. If not, it can be referenced
            // directly (moduleImport: null).
            if (!this.rewriter.shouldImportSymbol(symbol, moduleName)) {
                // The symbol should be referenced directly.
                return { moduleImport: null, symbol: symbol };
            }
            // If not, this symbol will be imported. Allocate a prefix for the imported module if needed.
            if (!this.specifierToIdentifier.has(moduleName)) {
                this.specifierToIdentifier.set(moduleName, "" + this.prefix + this.nextIndex++);
            }
            var moduleImport = this.specifierToIdentifier.get(moduleName);
            return { moduleImport: moduleImport, symbol: symbol };
        };
        ImportManager.prototype.getAllImports = function (contextPath) {
            var _this = this;
            var imports = [];
            this.specifierToIdentifier.forEach(function (qualifier, specifier) {
                specifier = _this.rewriter.rewriteSpecifier(specifier, contextPath);
                imports.push({ specifier: specifier, qualifier: qualifier });
            });
            return imports;
        };
        return ImportManager;
    }());
    exports.ImportManager = ImportManager;
    function translateExpression(expression, imports, defaultImportRecorder, scriptTarget) {
        return expression.visitExpression(new ExpressionTranslatorVisitor(imports, defaultImportRecorder, scriptTarget), new Context(false));
    }
    exports.translateExpression = translateExpression;
    function translateStatement(statement, imports, defaultImportRecorder, scriptTarget) {
        return statement.visitStatement(new ExpressionTranslatorVisitor(imports, defaultImportRecorder, scriptTarget), new Context(true));
    }
    exports.translateStatement = translateStatement;
    function translateType(type, imports) {
        return type.visitType(new TypeTranslatorVisitor(imports), new Context(false));
    }
    exports.translateType = translateType;
    var ExpressionTranslatorVisitor = /** @class */ (function () {
        function ExpressionTranslatorVisitor(imports, defaultImportRecorder, scriptTarget) {
            this.imports = imports;
            this.defaultImportRecorder = defaultImportRecorder;
            this.scriptTarget = scriptTarget;
            this.externalSourceFiles = new Map();
        }
        ExpressionTranslatorVisitor.prototype.visitDeclareVarStmt = function (stmt, context) {
            var nodeFlags = ((this.scriptTarget >= ts.ScriptTarget.ES2015) && stmt.hasModifier(compiler_1.StmtModifier.Final)) ?
                ts.NodeFlags.Const :
                ts.NodeFlags.None;
            return ts.createVariableStatement(undefined, ts.createVariableDeclarationList([ts.createVariableDeclaration(stmt.name, undefined, stmt.value && stmt.value.visitExpression(this, context.withExpressionMode))], nodeFlags));
        };
        ExpressionTranslatorVisitor.prototype.visitDeclareFunctionStmt = function (stmt, context) {
            var _this = this;
            return ts.createFunctionDeclaration(undefined, undefined, undefined, stmt.name, undefined, stmt.params.map(function (param) { return ts.createParameter(undefined, undefined, undefined, param.name); }), undefined, ts.createBlock(stmt.statements.map(function (child) { return child.visitStatement(_this, context.withStatementMode); })));
        };
        ExpressionTranslatorVisitor.prototype.visitExpressionStmt = function (stmt, context) {
            return ts.createStatement(stmt.expr.visitExpression(this, context.withStatementMode));
        };
        ExpressionTranslatorVisitor.prototype.visitReturnStmt = function (stmt, context) {
            return ts.createReturn(stmt.value.visitExpression(this, context.withExpressionMode));
        };
        ExpressionTranslatorVisitor.prototype.visitDeclareClassStmt = function (stmt, context) {
            if (this.scriptTarget < ts.ScriptTarget.ES2015) {
                throw new Error("Unsupported mode: Visiting a \"declare class\" statement (class " + stmt.name + ") while " +
                    ("targeting " + ts.ScriptTarget[this.scriptTarget] + "."));
            }
            throw new Error('Method not implemented.');
        };
        ExpressionTranslatorVisitor.prototype.visitIfStmt = function (stmt, context) {
            var _this = this;
            return ts.createIf(stmt.condition.visitExpression(this, context), ts.createBlock(stmt.trueCase.map(function (child) { return child.visitStatement(_this, context.withStatementMode); })), stmt.falseCase.length > 0 ?
                ts.createBlock(stmt.falseCase.map(function (child) { return child.visitStatement(_this, context.withStatementMode); })) :
                undefined);
        };
        ExpressionTranslatorVisitor.prototype.visitTryCatchStmt = function (stmt, context) {
            throw new Error('Method not implemented.');
        };
        ExpressionTranslatorVisitor.prototype.visitThrowStmt = function (stmt, context) {
            return ts.createThrow(stmt.error.visitExpression(this, context.withExpressionMode));
        };
        ExpressionTranslatorVisitor.prototype.visitCommentStmt = function (stmt, context) {
            throw new Error('Method not implemented.');
        };
        ExpressionTranslatorVisitor.prototype.visitJSDocCommentStmt = function (stmt, context) {
            var commentStmt = ts.createNotEmittedStatement(ts.createLiteral(''));
            var text = stmt.toString();
            var kind = ts.SyntaxKind.MultiLineCommentTrivia;
            ts.setSyntheticLeadingComments(commentStmt, [{ kind: kind, text: text, pos: -1, end: -1 }]);
            return commentStmt;
        };
        ExpressionTranslatorVisitor.prototype.visitReadVarExpr = function (ast, context) {
            var identifier = ts.createIdentifier(ast.name);
            this.setSourceMapRange(identifier, ast);
            return identifier;
        };
        ExpressionTranslatorVisitor.prototype.visitWriteVarExpr = function (expr, context) {
            var result = ts.createBinary(ts.createIdentifier(expr.name), ts.SyntaxKind.EqualsToken, expr.value.visitExpression(this, context));
            return context.isStatement ? result : ts.createParen(result);
        };
        ExpressionTranslatorVisitor.prototype.visitWriteKeyExpr = function (expr, context) {
            var exprContext = context.withExpressionMode;
            var lhs = ts.createElementAccess(expr.receiver.visitExpression(this, exprContext), expr.index.visitExpression(this, exprContext));
            var rhs = expr.value.visitExpression(this, exprContext);
            var result = ts.createBinary(lhs, ts.SyntaxKind.EqualsToken, rhs);
            return context.isStatement ? result : ts.createParen(result);
        };
        ExpressionTranslatorVisitor.prototype.visitWritePropExpr = function (expr, context) {
            return ts.createBinary(ts.createPropertyAccess(expr.receiver.visitExpression(this, context), expr.name), ts.SyntaxKind.EqualsToken, expr.value.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.visitInvokeMethodExpr = function (ast, context) {
            var _this = this;
            var target = ast.receiver.visitExpression(this, context);
            var call = ts.createCall(ast.name !== null ? ts.createPropertyAccess(target, ast.name) : target, undefined, ast.args.map(function (arg) { return arg.visitExpression(_this, context); }));
            this.setSourceMapRange(call, ast);
            return call;
        };
        ExpressionTranslatorVisitor.prototype.visitInvokeFunctionExpr = function (ast, context) {
            var _this = this;
            var expr = ts.createCall(ast.fn.visitExpression(this, context), undefined, ast.args.map(function (arg) { return arg.visitExpression(_this, context); }));
            if (ast.pure) {
                ts.addSyntheticLeadingComment(expr, ts.SyntaxKind.MultiLineCommentTrivia, '@__PURE__', false);
            }
            this.setSourceMapRange(expr, ast);
            return expr;
        };
        ExpressionTranslatorVisitor.prototype.visitInstantiateExpr = function (ast, context) {
            var _this = this;
            return ts.createNew(ast.classExpr.visitExpression(this, context), undefined, ast.args.map(function (arg) { return arg.visitExpression(_this, context); }));
        };
        ExpressionTranslatorVisitor.prototype.visitLiteralExpr = function (ast, context) {
            var expr;
            if (ast.value === undefined) {
                expr = ts.createIdentifier('undefined');
            }
            else if (ast.value === null) {
                expr = ts.createNull();
            }
            else {
                expr = ts.createLiteral(ast.value);
            }
            this.setSourceMapRange(expr, ast);
            return expr;
        };
        ExpressionTranslatorVisitor.prototype.visitLocalizedString = function (ast, context) {
            return this.scriptTarget >= ts.ScriptTarget.ES2015 ?
                createLocalizedStringTaggedTemplate(ast, context, this) :
                createLocalizedStringFunctionCall(ast, context, this, this.imports);
        };
        ExpressionTranslatorVisitor.prototype.visitExternalExpr = function (ast, context) {
            if (ast.value.name === null) {
                throw new Error("Import unknown module or symbol " + ast.value);
            }
            // If a moduleName is specified, this is a normal import. If there's no module name, it's a
            // reference to a global/ambient symbol.
            if (ast.value.moduleName !== null) {
                // This is a normal import. Find the imported module.
                var _a = this.imports.generateNamedImport(ast.value.moduleName, ast.value.name), moduleImport = _a.moduleImport, symbol = _a.symbol;
                if (moduleImport === null) {
                    // The symbol was ambient after all.
                    return ts.createIdentifier(symbol);
                }
                else {
                    return ts.createPropertyAccess(ts.createIdentifier(moduleImport), ts.createIdentifier(symbol));
                }
            }
            else {
                // The symbol is ambient, so just reference it.
                return ts.createIdentifier(ast.value.name);
            }
        };
        ExpressionTranslatorVisitor.prototype.visitConditionalExpr = function (ast, context) {
            var cond = ast.condition.visitExpression(this, context);
            // Ordinarily the ternary operator is right-associative. The following are equivalent:
            //   `a ? b : c ? d : e` => `a ? b : (c ? d : e)`
            //
            // However, occasionally Angular needs to produce a left-associative conditional, such as in
            // the case of a null-safe navigation production: `{{a?.b ? c : d}}`. This template produces
            // a ternary of the form:
            //   `a == null ? null : rest of expression`
            // If the rest of the expression is also a ternary though, this would produce the form:
            //   `a == null ? null : a.b ? c : d`
            // which, if left as right-associative, would be incorrectly associated as:
            //   `a == null ? null : (a.b ? c : d)`
            //
            // In such cases, the left-associativity needs to be enforced with parentheses:
            //   `(a == null ? null : a.b) ? c : d`
            //
            // Such parentheses could always be included in the condition (guaranteeing correct behavior) in
            // all cases, but this has a code size cost. Instead, parentheses are added only when a
            // conditional expression is directly used as the condition of another.
            //
            // TODO(alxhub): investigate better logic for precendence of conditional operators
            if (ast.condition instanceof compiler_1.ConditionalExpr) {
                // The condition of this ternary needs to be wrapped in parentheses to maintain
                // left-associativity.
                cond = ts.createParen(cond);
            }
            return ts.createConditional(cond, ast.trueCase.visitExpression(this, context), ast.falseCase.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.visitNotExpr = function (ast, context) {
            return ts.createPrefix(ts.SyntaxKind.ExclamationToken, ast.condition.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.visitAssertNotNullExpr = function (ast, context) {
            return ast.condition.visitExpression(this, context);
        };
        ExpressionTranslatorVisitor.prototype.visitCastExpr = function (ast, context) {
            return ast.value.visitExpression(this, context);
        };
        ExpressionTranslatorVisitor.prototype.visitFunctionExpr = function (ast, context) {
            var _this = this;
            return ts.createFunctionExpression(undefined, undefined, ast.name || undefined, undefined, ast.params.map(function (param) { return ts.createParameter(undefined, undefined, undefined, param.name, undefined, undefined, undefined); }), undefined, ts.createBlock(ast.statements.map(function (stmt) { return stmt.visitStatement(_this, context); })));
        };
        ExpressionTranslatorVisitor.prototype.visitBinaryOperatorExpr = function (ast, context) {
            if (!BINARY_OPERATORS.has(ast.operator)) {
                throw new Error("Unknown binary operator: " + compiler_1.BinaryOperator[ast.operator]);
            }
            return ts.createBinary(ast.lhs.visitExpression(this, context), BINARY_OPERATORS.get(ast.operator), ast.rhs.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.visitReadPropExpr = function (ast, context) {
            return ts.createPropertyAccess(ast.receiver.visitExpression(this, context), ast.name);
        };
        ExpressionTranslatorVisitor.prototype.visitReadKeyExpr = function (ast, context) {
            return ts.createElementAccess(ast.receiver.visitExpression(this, context), ast.index.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.visitLiteralArrayExpr = function (ast, context) {
            var _this = this;
            var expr = ts.createArrayLiteral(ast.entries.map(function (expr) { return expr.visitExpression(_this, context); }));
            this.setSourceMapRange(expr, ast);
            return expr;
        };
        ExpressionTranslatorVisitor.prototype.visitLiteralMapExpr = function (ast, context) {
            var _this = this;
            var entries = ast.entries.map(function (entry) { return ts.createPropertyAssignment(entry.quoted ? ts.createLiteral(entry.key) : ts.createIdentifier(entry.key), entry.value.visitExpression(_this, context)); });
            var expr = ts.createObjectLiteral(entries);
            this.setSourceMapRange(expr, ast);
            return expr;
        };
        ExpressionTranslatorVisitor.prototype.visitCommaExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        ExpressionTranslatorVisitor.prototype.visitWrappedNodeExpr = function (ast, context) {
            if (ts.isIdentifier(ast.node)) {
                this.defaultImportRecorder.recordUsedIdentifier(ast.node);
            }
            return ast.node;
        };
        ExpressionTranslatorVisitor.prototype.visitTypeofExpr = function (ast, context) {
            return ts.createTypeOf(ast.expr.visitExpression(this, context));
        };
        ExpressionTranslatorVisitor.prototype.setSourceMapRange = function (expr, ast) {
            if (ast.sourceSpan) {
                var _a = ast.sourceSpan, start = _a.start, end = _a.end;
                var _b = start.file, url = _b.url, content = _b.content;
                if (url) {
                    if (!this.externalSourceFiles.has(url)) {
                        this.externalSourceFiles.set(url, ts.createSourceMapSource(url, content, function (pos) { return pos; }));
                    }
                    var source = this.externalSourceFiles.get(url);
                    ts.setSourceMapRange(expr, { pos: start.offset, end: end.offset, source: source });
                }
            }
        };
        return ExpressionTranslatorVisitor;
    }());
    var TypeTranslatorVisitor = /** @class */ (function () {
        function TypeTranslatorVisitor(imports) {
            this.imports = imports;
        }
        TypeTranslatorVisitor.prototype.visitBuiltinType = function (type, context) {
            switch (type.name) {
                case compiler_1.BuiltinTypeName.Bool:
                    return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
                case compiler_1.BuiltinTypeName.Dynamic:
                    return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
                case compiler_1.BuiltinTypeName.Int:
                case compiler_1.BuiltinTypeName.Number:
                    return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
                case compiler_1.BuiltinTypeName.String:
                    return ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
                case compiler_1.BuiltinTypeName.None:
                    return ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword);
                default:
                    throw new Error("Unsupported builtin type: " + compiler_1.BuiltinTypeName[type.name]);
            }
        };
        TypeTranslatorVisitor.prototype.visitExpressionType = function (type, context) {
            var _this = this;
            var typeNode = this.translateExpression(type.value, context);
            if (type.typeParams === null) {
                return typeNode;
            }
            if (!ts.isTypeReferenceNode(typeNode)) {
                throw new Error('An ExpressionType with type arguments must translate into a TypeReferenceNode');
            }
            else if (typeNode.typeArguments !== undefined) {
                throw new Error("An ExpressionType with type arguments cannot have multiple levels of type arguments");
            }
            var typeArgs = type.typeParams.map(function (param) { return _this.translateType(param, context); });
            return ts.createTypeReferenceNode(typeNode.typeName, typeArgs);
        };
        TypeTranslatorVisitor.prototype.visitArrayType = function (type, context) {
            return ts.createArrayTypeNode(this.translateType(type.of, context));
        };
        TypeTranslatorVisitor.prototype.visitMapType = function (type, context) {
            var parameter = ts.createParameter(undefined, undefined, undefined, 'key', undefined, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword));
            var typeArgs = type.valueType !== null ?
                this.translateType(type.valueType, context) :
                ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
            var indexSignature = ts.createIndexSignature(undefined, undefined, [parameter], typeArgs);
            return ts.createTypeLiteralNode([indexSignature]);
        };
        TypeTranslatorVisitor.prototype.visitReadVarExpr = function (ast, context) {
            if (ast.name === null) {
                throw new Error("ReadVarExpr with no variable name in type");
            }
            return ts.createTypeQueryNode(ts.createIdentifier(ast.name));
        };
        TypeTranslatorVisitor.prototype.visitWriteVarExpr = function (expr, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitWriteKeyExpr = function (expr, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitWritePropExpr = function (expr, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitInvokeMethodExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitInvokeFunctionExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitInstantiateExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitLiteralExpr = function (ast, context) {
            if (ast.value === null) {
                return ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword);
            }
            else if (ast.value === undefined) {
                return ts.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword);
            }
            else if (typeof ast.value === 'boolean') {
                return ts.createLiteralTypeNode(ts.createLiteral(ast.value));
            }
            else if (typeof ast.value === 'number') {
                return ts.createLiteralTypeNode(ts.createLiteral(ast.value));
            }
            else {
                return ts.createLiteralTypeNode(ts.createLiteral(ast.value));
            }
        };
        TypeTranslatorVisitor.prototype.visitLocalizedString = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitExternalExpr = function (ast, context) {
            var _this = this;
            if (ast.value.moduleName === null || ast.value.name === null) {
                throw new Error("Import unknown module or symbol");
            }
            var _a = this.imports.generateNamedImport(ast.value.moduleName, ast.value.name), moduleImport = _a.moduleImport, symbol = _a.symbol;
            var symbolIdentifier = ts.createIdentifier(symbol);
            var typeName = moduleImport ?
                ts.createQualifiedName(ts.createIdentifier(moduleImport), symbolIdentifier) :
                symbolIdentifier;
            var typeArguments = ast.typeParams !== null ?
                ast.typeParams.map(function (type) { return _this.translateType(type, context); }) :
                undefined;
            return ts.createTypeReferenceNode(typeName, typeArguments);
        };
        TypeTranslatorVisitor.prototype.visitConditionalExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitNotExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitAssertNotNullExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitCastExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitFunctionExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitBinaryOperatorExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitReadPropExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitReadKeyExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitLiteralArrayExpr = function (ast, context) {
            var _this = this;
            var values = ast.entries.map(function (expr) { return _this.translateExpression(expr, context); });
            return ts.createTupleTypeNode(values);
        };
        TypeTranslatorVisitor.prototype.visitLiteralMapExpr = function (ast, context) {
            var _this = this;
            var entries = ast.entries.map(function (entry) {
                var key = entry.key, quoted = entry.quoted;
                var type = _this.translateExpression(entry.value, context);
                return ts.createPropertySignature(
                /* modifiers */ undefined, 
                /* name */ quoted ? ts.createStringLiteral(key) : key, 
                /* questionToken */ undefined, 
                /* type */ type, 
                /* initializer */ undefined);
            });
            return ts.createTypeLiteralNode(entries);
        };
        TypeTranslatorVisitor.prototype.visitCommaExpr = function (ast, context) {
            throw new Error('Method not implemented.');
        };
        TypeTranslatorVisitor.prototype.visitWrappedNodeExpr = function (ast, context) {
            var node = ast.node;
            if (ts.isEntityName(node)) {
                return ts.createTypeReferenceNode(node, /* typeArguments */ undefined);
            }
            else if (ts.isTypeNode(node)) {
                return node;
            }
            else if (ts.isLiteralExpression(node)) {
                return ts.createLiteralTypeNode(node);
            }
            else {
                throw new Error("Unsupported WrappedNodeExpr in TypeTranslatorVisitor: " + ts.SyntaxKind[node.kind]);
            }
        };
        TypeTranslatorVisitor.prototype.visitTypeofExpr = function (ast, context) {
            var expr = translateExpression(ast.expr, this.imports, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, ts.ScriptTarget.ES2015);
            return ts.createTypeQueryNode(expr);
        };
        TypeTranslatorVisitor.prototype.translateType = function (type, context) {
            var typeNode = type.visitType(this, context);
            if (!ts.isTypeNode(typeNode)) {
                throw new Error("A Type must translate to a TypeNode, but was " + ts.SyntaxKind[typeNode.kind]);
            }
            return typeNode;
        };
        TypeTranslatorVisitor.prototype.translateExpression = function (expr, context) {
            var typeNode = expr.visitExpression(this, context);
            if (!ts.isTypeNode(typeNode)) {
                throw new Error("An Expression must translate to a TypeNode, but was " + ts.SyntaxKind[typeNode.kind]);
            }
            return typeNode;
        };
        return TypeTranslatorVisitor;
    }());
    exports.TypeTranslatorVisitor = TypeTranslatorVisitor;
    /**
     * Translate the `LocalizedString` node into a `TaggedTemplateExpression` for ES2015 formatted
     * output.
     */
    function createLocalizedStringTaggedTemplate(ast, context, visitor) {
        var template;
        var length = ast.messageParts.length;
        var metaBlock = ast.serializeI18nHead();
        if (length === 1) {
            template = ts.createNoSubstitutionTemplateLiteral(metaBlock.cooked, metaBlock.raw);
        }
        else {
            // Create the head part
            var head = ts.createTemplateHead(metaBlock.cooked, metaBlock.raw);
            var spans = [];
            // Create the middle parts
            for (var i = 1; i < length - 1; i++) {
                var resolvedExpression_1 = ast.expressions[i - 1].visitExpression(visitor, context);
                var templatePart_1 = ast.serializeI18nTemplatePart(i);
                var templateMiddle = createTemplateMiddle(templatePart_1.cooked, templatePart_1.raw);
                spans.push(ts.createTemplateSpan(resolvedExpression_1, templateMiddle));
            }
            // Create the tail part
            var resolvedExpression = ast.expressions[length - 2].visitExpression(visitor, context);
            var templatePart = ast.serializeI18nTemplatePart(length - 1);
            var templateTail = createTemplateTail(templatePart.cooked, templatePart.raw);
            spans.push(ts.createTemplateSpan(resolvedExpression, templateTail));
            // Put it all together
            template = ts.createTemplateExpression(head, spans);
        }
        return ts.createTaggedTemplate(ts.createIdentifier('$localize'), template);
    }
    // HACK: Use this in place of `ts.createTemplateMiddle()`.
    // Revert once https://github.com/microsoft/TypeScript/issues/35374 is fixed
    function createTemplateMiddle(cooked, raw) {
        var node = ts.createTemplateHead(cooked, raw);
        node.kind = ts.SyntaxKind.TemplateMiddle;
        return node;
    }
    // HACK: Use this in place of `ts.createTemplateTail()`.
    // Revert once https://github.com/microsoft/TypeScript/issues/35374 is fixed
    function createTemplateTail(cooked, raw) {
        var node = ts.createTemplateHead(cooked, raw);
        node.kind = ts.SyntaxKind.TemplateTail;
        return node;
    }
    /**
     * Translate the `LocalizedString` node into a `$localize` call using the imported
     * `__makeTemplateObject` helper for ES5 formatted output.
     */
    function createLocalizedStringFunctionCall(ast, context, visitor, imports) {
        // A `$localize` message consists `messageParts` and `expressions`, which get interleaved
        // together. The interleaved pieces look like:
        // `[messagePart0, expression0, messagePart1, expression1, messagePart2]`
        //
        // Note that there is always a message part at the start and end, and so therefore
        // `messageParts.length === expressions.length + 1`.
        //
        // Each message part may be prefixed with "metadata", which is wrapped in colons (:) delimiters.
        // The metadata is attached to the first and subsequent message parts by calls to
        // `serializeI18nHead()` and `serializeI18nTemplatePart()` respectively.
        // The first message part (i.e. `ast.messageParts[0]`) is used to initialize `messageParts` array.
        var messageParts = [ast.serializeI18nHead()];
        var expressions = [];
        // The rest of the `ast.messageParts` and each of the expressions are `ast.expressions` pushed
        // into the arrays. Note that `ast.messagePart[i]` corresponds to `expressions[i-1]`
        for (var i = 1; i < ast.messageParts.length; i++) {
            expressions.push(ast.expressions[i - 1].visitExpression(visitor, context));
            messageParts.push(ast.serializeI18nTemplatePart(i));
        }
        // The resulting downlevelled tagged template string uses a call to the `__makeTemplateObject()`
        // helper, so we must ensure it has been imported.
        var _a = imports.generateNamedImport('tslib', '__makeTemplateObject'), moduleImport = _a.moduleImport, symbol = _a.symbol;
        var __makeTemplateObjectHelper = (moduleImport === null) ?
            ts.createIdentifier(symbol) :
            ts.createPropertyAccess(ts.createIdentifier(moduleImport), ts.createIdentifier(symbol));
        // Generate the call in the form:
        // `$localize(__makeTemplateObject(cookedMessageParts, rawMessageParts), ...expressions);`
        return ts.createCall(
        /* expression */ ts.createIdentifier('$localize'), 
        /* typeArguments */ undefined, tslib_1.__spread([
            ts.createCall(
            /* expression */ __makeTemplateObjectHelper, 
            /* typeArguments */ undefined, 
            /* argumentsArray */
            [
                ts.createArrayLiteral(messageParts.map(function (messagePart) { return ts.createStringLiteral(messagePart.cooked); })),
                ts.createArrayLiteral(messageParts.map(function (messagePart) { return ts.createStringLiteral(messagePart.raw); })),
            ])
        ], expressions));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHJhbnNsYXRvci9zcmMvdHJhbnNsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBMHFCO0lBRTFxQiwrQkFBaUM7SUFFakMsbUVBQXNIO0lBRXRIO1FBQ0UsaUJBQXFCLFdBQW9CO1lBQXBCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQUcsQ0FBQztRQUU3QyxzQkFBSSx1Q0FBa0I7aUJBQXRCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0RCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHNDQUFpQjtpQkFBckI7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEQsQ0FBQzs7O1dBQUE7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFWWSwwQkFBTztJQVlwQixJQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxDQUFvQztRQUNsRSxDQUFDLHlCQUFjLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDM0QsQ0FBQyx5QkFBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELENBQUMseUJBQWMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuRSxDQUFDLHlCQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENB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QUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEQsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU1RixpQ0FBaUM7UUFDakMsMEZBQTBGO1FBQzFGLE9BQU8sRUFBRSxDQUFDLFVBQVU7UUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNqRCxtQkFBbUIsQ0FBQyxTQUFTO1lBRTNCLEVBQUUsQ0FBQyxVQUFVO1lBQ1QsZ0JBQWdCLENBQUMsMEJBQTBCO1lBQzNDLG1CQUFtQixDQUFDLFNBQVM7WUFDN0Isb0JBQW9CO1lBQ3BCO2dCQUNFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztnQkFDaEYsRUFBRSxDQUFDLGtCQUFrQixDQUNqQixZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO2FBQzlFLENBQUM7V0FDSCxXQUFXLEVBQ2QsQ0FBQztJQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXJyYXlUeXBlLCBBc3NlcnROb3ROdWxsLCBCaW5hcnlPcGVyYXRvciwgQmluYXJ5T3BlcmF0b3JFeHByLCBCdWlsdGluVHlwZSwgQnVpbHRpblR5cGVOYW1lLCBDYXN0RXhwciwgQ2xhc3NTdG10LCBDb21tYUV4cHIsIENvbW1lbnRTdG10LCBDb25kaXRpb25hbEV4cHIsIERlY2xhcmVGdW5jdGlvblN0bXQsIERlY2xhcmVWYXJTdG10LCBFeHByZXNzaW9uLCBFeHByZXNzaW9uU3RhdGVtZW50LCBFeHByZXNzaW9uVHlwZSwgRXhwcmVzc2lvblZpc2l0b3IsIEV4dGVybmFsRXhwciwgRnVuY3Rpb25FeHByLCBJZlN0bXQsIEluc3RhbnRpYXRlRXhwciwgSW52b2tlRnVuY3Rpb25FeHByLCBJbnZva2VNZXRob2RFeHByLCBKU0RvY0NvbW1lbnRTdG10LCBMaXRlcmFsQXJyYXlFeHByLCBMaXRlcmFsRXhwciwgTGl0ZXJhbE1hcEV4cHIsIE1hcFR5cGUsIE5vdEV4cHIsIFJlYWRLZXlFeHByLCBSZWFkUHJvcEV4cHIsIFJlYWRWYXJFeHByLCBSZXR1cm5TdGF0ZW1lbnQsIFN0YXRlbWVudCwgU3RhdGVtZW50VmlzaXRvciwgU3RtdE1vZGlmaWVyLCBUaHJvd1N0bXQsIFRyeUNhdGNoU3RtdCwgVHlwZSwgVHlwZW9mRXhwciwgVHlwZVZpc2l0b3IsIFdyYXBwZWROb2RlRXhwciwgV3JpdGVLZXlFeHByLCBXcml0ZVByb3BFeHByLCBXcml0ZVZhckV4cHJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7TG9jYWxpemVkU3RyaW5nfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RGVmYXVsdEltcG9ydFJlY29yZGVyLCBJbXBvcnRSZXdyaXRlciwgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUiwgTm9vcEltcG9ydFJld3JpdGVyfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpc1N0YXRlbWVudDogYm9vbGVhbikge31cblxuICBnZXQgd2l0aEV4cHJlc3Npb25Nb2RlKCk6IENvbnRleHQge1xuICAgIHJldHVybiB0aGlzLmlzU3RhdGVtZW50ID8gbmV3IENvbnRleHQoZmFsc2UpIDogdGhpcztcbiAgfVxuXG4gIGdldCB3aXRoU3RhdGVtZW50TW9kZSgpOiBDb250ZXh0IHtcbiAgICByZXR1cm4gIXRoaXMuaXNTdGF0ZW1lbnQgPyBuZXcgQ29udGV4dCh0cnVlKSA6IHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQklOQVJZX09QRVJBVE9SUyA9IG5ldyBNYXA8QmluYXJ5T3BlcmF0b3IsIHRzLkJpbmFyeU9wZXJhdG9yPihbXG4gIFtCaW5hcnlPcGVyYXRvci5BbmQsIHRzLlN5bnRheEtpbmQuQW1wZXJzYW5kQW1wZXJzYW5kVG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuQmlnZ2VyLCB0cy5TeW50YXhLaW5kLkdyZWF0ZXJUaGFuVG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuQmlnZ2VyRXF1YWxzLCB0cy5TeW50YXhLaW5kLkdyZWF0ZXJUaGFuRXF1YWxzVG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuQml0d2lzZUFuZCwgdHMuU3ludGF4S2luZC5BbXBlcnNhbmRUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5EaXZpZGUsIHRzLlN5bnRheEtpbmQuU2xhc2hUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5FcXVhbHMsIHRzLlN5bnRheEtpbmQuRXF1YWxzRXF1YWxzVG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuSWRlbnRpY2FsLCB0cy5TeW50YXhLaW5kLkVxdWFsc0VxdWFsc0VxdWFsc1Rva2VuXSxcbiAgW0JpbmFyeU9wZXJhdG9yLkxvd2VyLCB0cy5TeW50YXhLaW5kLkxlc3NUaGFuVG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuTG93ZXJFcXVhbHMsIHRzLlN5bnRheEtpbmQuTGVzc1RoYW5FcXVhbHNUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5NaW51cywgdHMuU3ludGF4S2luZC5NaW51c1Rva2VuXSxcbiAgW0JpbmFyeU9wZXJhdG9yLk1vZHVsbywgdHMuU3ludGF4S2luZC5QZXJjZW50VG9rZW5dLFxuICBbQmluYXJ5T3BlcmF0b3IuTXVsdGlwbHksIHRzLlN5bnRheEtpbmQuQXN0ZXJpc2tUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5Ob3RFcXVhbHMsIHRzLlN5bnRheEtpbmQuRXhjbGFtYXRpb25FcXVhbHNUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5Ob3RJZGVudGljYWwsIHRzLlN5bnRheEtpbmQuRXhjbGFtYXRpb25FcXVhbHNFcXVhbHNUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5PciwgdHMuU3ludGF4S2luZC5CYXJCYXJUb2tlbl0sXG4gIFtCaW5hcnlPcGVyYXRvci5QbHVzLCB0cy5TeW50YXhLaW5kLlBsdXNUb2tlbl0sXG5dKTtcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCBhbiBpbXBvcnQgdGhhdCBoYXMgYmVlbiBhZGRlZCB0byBhIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbXBvcnQge1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIG1vZHVsZSB0aGF0IGhhcyBiZWVuIGltcG9ydGVkLiAqL1xuICBzcGVjaWZpZXI6IHN0cmluZztcbiAgLyoqIFRoZSBhbGlhcyBvZiB0aGUgaW1wb3J0ZWQgbW9kdWxlLiAqL1xuICBxdWFsaWZpZXI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgc3ltYm9sIG5hbWUgYW5kIGltcG9ydCBuYW1lc3BhY2Ugb2YgYW4gaW1wb3J0ZWQgc3ltYm9sLFxuICogd2hpY2ggaGFzIGJlZW4gcmVnaXN0ZXJlZCB0aHJvdWdoIHRoZSBJbXBvcnRNYW5hZ2VyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVkSW1wb3J0IHtcbiAgLyoqIFRoZSBpbXBvcnQgbmFtZXNwYWNlIGNvbnRhaW5pbmcgdGhpcyBpbXBvcnRlZCBzeW1ib2wuICovXG4gIG1vZHVsZUltcG9ydDogc3RyaW5nfG51bGw7XG4gIC8qKiBUaGUgKHBvc3NpYmx5IHJld3JpdHRlbikgbmFtZSBvZiB0aGUgaW1wb3J0ZWQgc3ltYm9sLiAqL1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEltcG9ydE1hbmFnZXIge1xuICBwcml2YXRlIHNwZWNpZmllclRvSWRlbnRpZmllciA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgbmV4dEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmV3cml0ZXI6IEltcG9ydFJld3JpdGVyID0gbmV3IE5vb3BJbXBvcnRSZXdyaXRlcigpLCBwcml2YXRlIHByZWZpeCA9ICdpJykge1xuICB9XG5cbiAgZ2VuZXJhdGVOYW1lZEltcG9ydChtb2R1bGVOYW1lOiBzdHJpbmcsIG9yaWdpbmFsU3ltYm9sOiBzdHJpbmcpOiBOYW1lZEltcG9ydCB7XG4gICAgLy8gRmlyc3QsIHJld3JpdGUgdGhlIHN5bWJvbCBuYW1lLlxuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMucmV3cml0ZXIucmV3cml0ZVN5bWJvbChvcmlnaW5hbFN5bWJvbCwgbW9kdWxlTmFtZSk7XG5cbiAgICAvLyBBc2sgdGhlIHJld3JpdGVyIGlmIHRoaXMgc3ltYm9sIHNob3VsZCBiZSBpbXBvcnRlZCBhdCBhbGwuIElmIG5vdCwgaXQgY2FuIGJlIHJlZmVyZW5jZWRcbiAgICAvLyBkaXJlY3RseSAobW9kdWxlSW1wb3J0OiBudWxsKS5cbiAgICBpZiAoIXRoaXMucmV3cml0ZXIuc2hvdWxkSW1wb3J0U3ltYm9sKHN5bWJvbCwgbW9kdWxlTmFtZSkpIHtcbiAgICAgIC8vIFRoZSBzeW1ib2wgc2hvdWxkIGJlIHJlZmVyZW5jZWQgZGlyZWN0bHkuXG4gICAgICByZXR1cm4ge21vZHVsZUltcG9ydDogbnVsbCwgc3ltYm9sfTtcbiAgICB9XG5cbiAgICAvLyBJZiBub3QsIHRoaXMgc3ltYm9sIHdpbGwgYmUgaW1wb3J0ZWQuIEFsbG9jYXRlIGEgcHJlZml4IGZvciB0aGUgaW1wb3J0ZWQgbW9kdWxlIGlmIG5lZWRlZC5cblxuICAgIGlmICghdGhpcy5zcGVjaWZpZXJUb0lkZW50aWZpZXIuaGFzKG1vZHVsZU5hbWUpKSB7XG4gICAgICB0aGlzLnNwZWNpZmllclRvSWRlbnRpZmllci5zZXQobW9kdWxlTmFtZSwgYCR7dGhpcy5wcmVmaXh9JHt0aGlzLm5leHRJbmRleCsrfWApO1xuICAgIH1cbiAgICBjb25zdCBtb2R1bGVJbXBvcnQgPSB0aGlzLnNwZWNpZmllclRvSWRlbnRpZmllci5nZXQobW9kdWxlTmFtZSkhO1xuXG4gICAgcmV0dXJuIHttb2R1bGVJbXBvcnQsIHN5bWJvbH07XG4gIH1cblxuICBnZXRBbGxJbXBvcnRzKGNvbnRleHRQYXRoOiBzdHJpbmcpOiBJbXBvcnRbXSB7XG4gICAgY29uc3QgaW1wb3J0czoge3NwZWNpZmllcjogc3RyaW5nLCBxdWFsaWZpZXI6IHN0cmluZ31bXSA9IFtdO1xuICAgIHRoaXMuc3BlY2lmaWVyVG9JZGVudGlmaWVyLmZvckVhY2goKHF1YWxpZmllciwgc3BlY2lmaWVyKSA9PiB7XG4gICAgICBzcGVjaWZpZXIgPSB0aGlzLnJld3JpdGVyLnJld3JpdGVTcGVjaWZpZXIoc3BlY2lmaWVyLCBjb250ZXh0UGF0aCk7XG4gICAgICBpbXBvcnRzLnB1c2goe3NwZWNpZmllciwgcXVhbGlmaWVyfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGltcG9ydHM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUV4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbiwgaW1wb3J0czogSW1wb3J0TWFuYWdlciwgZGVmYXVsdEltcG9ydFJlY29yZGVyOiBEZWZhdWx0SW1wb3J0UmVjb3JkZXIsXG4gICAgc2NyaXB0VGFyZ2V0OiBFeGNsdWRlPHRzLlNjcmlwdFRhcmdldCwgdHMuU2NyaXB0VGFyZ2V0LkpTT04+KTogdHMuRXhwcmVzc2lvbiB7XG4gIHJldHVybiBleHByZXNzaW9uLnZpc2l0RXhwcmVzc2lvbihcbiAgICAgIG5ldyBFeHByZXNzaW9uVHJhbnNsYXRvclZpc2l0b3IoaW1wb3J0cywgZGVmYXVsdEltcG9ydFJlY29yZGVyLCBzY3JpcHRUYXJnZXQpLFxuICAgICAgbmV3IENvbnRleHQoZmFsc2UpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVN0YXRlbWVudChcbiAgICBzdGF0ZW1lbnQ6IFN0YXRlbWVudCwgaW1wb3J0czogSW1wb3J0TWFuYWdlciwgZGVmYXVsdEltcG9ydFJlY29yZGVyOiBEZWZhdWx0SW1wb3J0UmVjb3JkZXIsXG4gICAgc2NyaXB0VGFyZ2V0OiBFeGNsdWRlPHRzLlNjcmlwdFRhcmdldCwgdHMuU2NyaXB0VGFyZ2V0LkpTT04+KTogdHMuU3RhdGVtZW50IHtcbiAgcmV0dXJuIHN0YXRlbWVudC52aXNpdFN0YXRlbWVudChcbiAgICAgIG5ldyBFeHByZXNzaW9uVHJhbnNsYXRvclZpc2l0b3IoaW1wb3J0cywgZGVmYXVsdEltcG9ydFJlY29yZGVyLCBzY3JpcHRUYXJnZXQpLFxuICAgICAgbmV3IENvbnRleHQodHJ1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVHlwZSh0eXBlOiBUeXBlLCBpbXBvcnRzOiBJbXBvcnRNYW5hZ2VyKTogdHMuVHlwZU5vZGUge1xuICByZXR1cm4gdHlwZS52aXNpdFR5cGUobmV3IFR5cGVUcmFuc2xhdG9yVmlzaXRvcihpbXBvcnRzKSwgbmV3IENvbnRleHQoZmFsc2UpKTtcbn1cblxuY2xhc3MgRXhwcmVzc2lvblRyYW5zbGF0b3JWaXNpdG9yIGltcGxlbWVudHMgRXhwcmVzc2lvblZpc2l0b3IsIFN0YXRlbWVudFZpc2l0b3Ige1xuICBwcml2YXRlIGV4dGVybmFsU291cmNlRmlsZXMgPSBuZXcgTWFwPHN0cmluZywgdHMuU291cmNlTWFwU291cmNlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaW1wb3J0czogSW1wb3J0TWFuYWdlciwgcHJpdmF0ZSBkZWZhdWx0SW1wb3J0UmVjb3JkZXI6IERlZmF1bHRJbXBvcnRSZWNvcmRlcixcbiAgICAgIHByaXZhdGUgc2NyaXB0VGFyZ2V0OiBFeGNsdWRlPHRzLlNjcmlwdFRhcmdldCwgdHMuU2NyaXB0VGFyZ2V0LkpTT04+KSB7fVxuXG4gIHZpc2l0RGVjbGFyZVZhclN0bXQoc3RtdDogRGVjbGFyZVZhclN0bXQsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5WYXJpYWJsZVN0YXRlbWVudCB7XG4gICAgY29uc3Qgbm9kZUZsYWdzID1cbiAgICAgICAgKCh0aGlzLnNjcmlwdFRhcmdldCA+PSB0cy5TY3JpcHRUYXJnZXQuRVMyMDE1KSAmJiBzdG10Lmhhc01vZGlmaWVyKFN0bXRNb2RpZmllci5GaW5hbCkpID9cbiAgICAgICAgdHMuTm9kZUZsYWdzLkNvbnN0IDpcbiAgICAgICAgdHMuTm9kZUZsYWdzLk5vbmU7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRzLmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb25MaXN0KFxuICAgICAgICAgICAgW3RzLmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb24oXG4gICAgICAgICAgICAgICAgc3RtdC5uYW1lLCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc3RtdC52YWx1ZSAmJiBzdG10LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0LndpdGhFeHByZXNzaW9uTW9kZSkpXSxcbiAgICAgICAgICAgIG5vZGVGbGFncykpO1xuICB9XG5cbiAgdmlzaXREZWNsYXJlRnVuY3Rpb25TdG10KHN0bXQ6IERlY2xhcmVGdW5jdGlvblN0bXQsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5GdW5jdGlvbkRlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4gdHMuY3JlYXRlRnVuY3Rpb25EZWNsYXJhdGlvbihcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgc3RtdC5uYW1lLCB1bmRlZmluZWQsXG4gICAgICAgIHN0bXQucGFyYW1zLm1hcChwYXJhbSA9PiB0cy5jcmVhdGVQYXJhbWV0ZXIodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyYW0ubmFtZSkpLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRzLmNyZWF0ZUJsb2NrKFxuICAgICAgICAgICAgc3RtdC5zdGF0ZW1lbnRzLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdFN0YXRlbWVudCh0aGlzLCBjb250ZXh0LndpdGhTdGF0ZW1lbnRNb2RlKSkpKTtcbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvblN0YXRlbWVudCwgY29udGV4dDogQ29udGV4dCk6IHRzLkV4cHJlc3Npb25TdGF0ZW1lbnQge1xuICAgIHJldHVybiB0cy5jcmVhdGVTdGF0ZW1lbnQoc3RtdC5leHByLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0LndpdGhTdGF0ZW1lbnRNb2RlKSk7XG4gIH1cblxuICB2aXNpdFJldHVyblN0bXQoc3RtdDogUmV0dXJuU3RhdGVtZW50LCBjb250ZXh0OiBDb250ZXh0KTogdHMuUmV0dXJuU3RhdGVtZW50IHtcbiAgICByZXR1cm4gdHMuY3JlYXRlUmV0dXJuKHN0bXQudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQud2l0aEV4cHJlc3Npb25Nb2RlKSk7XG4gIH1cblxuICB2aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdDogQ2xhc3NTdG10LCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuc2NyaXB0VGFyZ2V0IDwgdHMuU2NyaXB0VGFyZ2V0LkVTMjAxNSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBVbnN1cHBvcnRlZCBtb2RlOiBWaXNpdGluZyBhIFwiZGVjbGFyZSBjbGFzc1wiIHN0YXRlbWVudCAoY2xhc3MgJHtzdG10Lm5hbWV9KSB3aGlsZSBgICtcbiAgICAgICAgICBgdGFyZ2V0aW5nICR7dHMuU2NyaXB0VGFyZ2V0W3RoaXMuc2NyaXB0VGFyZ2V0XX0uYCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0SWZTdG10KHN0bXQ6IElmU3RtdCwgY29udGV4dDogQ29udGV4dCk6IHRzLklmU3RhdGVtZW50IHtcbiAgICByZXR1cm4gdHMuY3JlYXRlSWYoXG4gICAgICAgIHN0bXQuY29uZGl0aW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0KSxcbiAgICAgICAgdHMuY3JlYXRlQmxvY2soXG4gICAgICAgICAgICBzdG10LnRydWVDYXNlLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdFN0YXRlbWVudCh0aGlzLCBjb250ZXh0LndpdGhTdGF0ZW1lbnRNb2RlKSkpLFxuICAgICAgICBzdG10LmZhbHNlQ2FzZS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHRzLmNyZWF0ZUJsb2NrKHN0bXQuZmFsc2VDYXNlLm1hcChcbiAgICAgICAgICAgICAgICBjaGlsZCA9PiBjaGlsZC52aXNpdFN0YXRlbWVudCh0aGlzLCBjb250ZXh0LndpdGhTdGF0ZW1lbnRNb2RlKSkpIDpcbiAgICAgICAgICAgIHVuZGVmaW5lZCk7XG4gIH1cblxuICB2aXNpdFRyeUNhdGNoU3RtdChzdG10OiBUcnlDYXRjaFN0bXQsIGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB2aXNpdFRocm93U3RtdChzdG10OiBUaHJvd1N0bXQsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5UaHJvd1N0YXRlbWVudCB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVRocm93KHN0bXQuZXJyb3IudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQud2l0aEV4cHJlc3Npb25Nb2RlKSk7XG4gIH1cblxuICB2aXNpdENvbW1lbnRTdG10KHN0bXQ6IENvbW1lbnRTdG10LCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0SlNEb2NDb21tZW50U3RtdChzdG10OiBKU0RvY0NvbW1lbnRTdG10LCBjb250ZXh0OiBDb250ZXh0KTogdHMuTm90RW1pdHRlZFN0YXRlbWVudCB7XG4gICAgY29uc3QgY29tbWVudFN0bXQgPSB0cy5jcmVhdGVOb3RFbWl0dGVkU3RhdGVtZW50KHRzLmNyZWF0ZUxpdGVyYWwoJycpKTtcbiAgICBjb25zdCB0ZXh0ID0gc3RtdC50b1N0cmluZygpO1xuICAgIGNvbnN0IGtpbmQgPSB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWE7XG4gICAgdHMuc2V0U3ludGhldGljTGVhZGluZ0NvbW1lbnRzKGNvbW1lbnRTdG10LCBbe2tpbmQsIHRleHQsIHBvczogLTEsIGVuZDogLTF9XSk7XG4gICAgcmV0dXJuIGNvbW1lbnRTdG10O1xuICB9XG5cbiAgdmlzaXRSZWFkVmFyRXhwcihhc3Q6IFJlYWRWYXJFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuSWRlbnRpZmllciB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRzLmNyZWF0ZUlkZW50aWZpZXIoYXN0Lm5hbWUhKTtcbiAgICB0aGlzLnNldFNvdXJjZU1hcFJhbmdlKGlkZW50aWZpZXIsIGFzdCk7XG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICB2aXNpdFdyaXRlVmFyRXhwcihleHByOiBXcml0ZVZhckV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5FeHByZXNzaW9uIHtcbiAgICBjb25zdCByZXN1bHQ6IHRzLkV4cHJlc3Npb24gPSB0cy5jcmVhdGVCaW5hcnkoXG4gICAgICAgIHRzLmNyZWF0ZUlkZW50aWZpZXIoZXhwci5uYW1lKSwgdHMuU3ludGF4S2luZC5FcXVhbHNUb2tlbixcbiAgICAgICAgZXhwci52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBjb250ZXh0LmlzU3RhdGVtZW50ID8gcmVzdWx0IDogdHMuY3JlYXRlUGFyZW4ocmVzdWx0KTtcbiAgfVxuXG4gIHZpc2l0V3JpdGVLZXlFeHByKGV4cHI6IFdyaXRlS2V5RXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGV4cHJDb250ZXh0ID0gY29udGV4dC53aXRoRXhwcmVzc2lvbk1vZGU7XG4gICAgY29uc3QgbGhzID0gdHMuY3JlYXRlRWxlbWVudEFjY2VzcyhcbiAgICAgICAgZXhwci5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgZXhwckNvbnRleHQpLFxuICAgICAgICBleHByLmluZGV4LnZpc2l0RXhwcmVzc2lvbih0aGlzLCBleHByQ29udGV4dCkpO1xuICAgIGNvbnN0IHJocyA9IGV4cHIudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGV4cHJDb250ZXh0KTtcbiAgICBjb25zdCByZXN1bHQ6IHRzLkV4cHJlc3Npb24gPSB0cy5jcmVhdGVCaW5hcnkobGhzLCB0cy5TeW50YXhLaW5kLkVxdWFsc1Rva2VuLCByaHMpO1xuICAgIHJldHVybiBjb250ZXh0LmlzU3RhdGVtZW50ID8gcmVzdWx0IDogdHMuY3JlYXRlUGFyZW4ocmVzdWx0KTtcbiAgfVxuXG4gIHZpc2l0V3JpdGVQcm9wRXhwcihleHByOiBXcml0ZVByb3BFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuQmluYXJ5RXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUJpbmFyeShcbiAgICAgICAgdHMuY3JlYXRlUHJvcGVydHlBY2Nlc3MoZXhwci5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCksIGV4cHIubmFtZSksXG4gICAgICAgIHRzLlN5bnRheEtpbmQuRXF1YWxzVG9rZW4sIGV4cHIudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpKTtcbiAgfVxuXG4gIHZpc2l0SW52b2tlTWV0aG9kRXhwcihhc3Q6IEludm9rZU1ldGhvZEV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5DYWxsRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYXN0LnJlY2VpdmVyLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0KTtcbiAgICBjb25zdCBjYWxsID0gdHMuY3JlYXRlQ2FsbChcbiAgICAgICAgYXN0Lm5hbWUgIT09IG51bGwgPyB0cy5jcmVhdGVQcm9wZXJ0eUFjY2Vzcyh0YXJnZXQsIGFzdC5uYW1lKSA6IHRhcmdldCwgdW5kZWZpbmVkLFxuICAgICAgICBhc3QuYXJncy5tYXAoYXJnID0+IGFyZy52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpKTtcbiAgICB0aGlzLnNldFNvdXJjZU1hcFJhbmdlKGNhbGwsIGFzdCk7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICB2aXNpdEludm9rZUZ1bmN0aW9uRXhwcihhc3Q6IEludm9rZUZ1bmN0aW9uRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLkNhbGxFeHByZXNzaW9uIHtcbiAgICBjb25zdCBleHByID0gdHMuY3JlYXRlQ2FsbChcbiAgICAgICAgYXN0LmZuLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0KSwgdW5kZWZpbmVkLFxuICAgICAgICBhc3QuYXJncy5tYXAoYXJnID0+IGFyZy52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpKTtcbiAgICBpZiAoYXN0LnB1cmUpIHtcbiAgICAgIHRzLmFkZFN5bnRoZXRpY0xlYWRpbmdDb21tZW50KGV4cHIsIHRzLlN5bnRheEtpbmQuTXVsdGlMaW5lQ29tbWVudFRyaXZpYSwgJ0BfX1BVUkVfXycsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTb3VyY2VNYXBSYW5nZShleHByLCBhc3QpO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgdmlzaXRJbnN0YW50aWF0ZUV4cHIoYXN0OiBJbnN0YW50aWF0ZUV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5OZXdFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gdHMuY3JlYXRlTmV3KFxuICAgICAgICBhc3QuY2xhc3NFeHByLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0KSwgdW5kZWZpbmVkLFxuICAgICAgICBhc3QuYXJncy5tYXAoYXJnID0+IGFyZy52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHIoYXN0OiBMaXRlcmFsRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLkV4cHJlc3Npb24ge1xuICAgIGxldCBleHByOiB0cy5FeHByZXNzaW9uO1xuICAgIGlmIChhc3QudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXhwciA9IHRzLmNyZWF0ZUlkZW50aWZpZXIoJ3VuZGVmaW5lZCcpO1xuICAgIH0gZWxzZSBpZiAoYXN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgICBleHByID0gdHMuY3JlYXRlTnVsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gdHMuY3JlYXRlTGl0ZXJhbChhc3QudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldFNvdXJjZU1hcFJhbmdlKGV4cHIsIGFzdCk7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICB2aXNpdExvY2FsaXplZFN0cmluZyhhc3Q6IExvY2FsaXplZFN0cmluZywgY29udGV4dDogQ29udGV4dCk6IHRzLkV4cHJlc3Npb24ge1xuICAgIHJldHVybiB0aGlzLnNjcmlwdFRhcmdldCA+PSB0cy5TY3JpcHRUYXJnZXQuRVMyMDE1ID9cbiAgICAgICAgY3JlYXRlTG9jYWxpemVkU3RyaW5nVGFnZ2VkVGVtcGxhdGUoYXN0LCBjb250ZXh0LCB0aGlzKSA6XG4gICAgICAgIGNyZWF0ZUxvY2FsaXplZFN0cmluZ0Z1bmN0aW9uQ2FsbChhc3QsIGNvbnRleHQsIHRoaXMsIHRoaXMuaW1wb3J0cyk7XG4gIH1cblxuICB2aXNpdEV4dGVybmFsRXhwcihhc3Q6IEV4dGVybmFsRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvblxuICAgICAgfHRzLklkZW50aWZpZXIge1xuICAgIGlmIChhc3QudmFsdWUubmFtZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbXBvcnQgdW5rbm93biBtb2R1bGUgb3Igc3ltYm9sICR7YXN0LnZhbHVlfWApO1xuICAgIH1cbiAgICAvLyBJZiBhIG1vZHVsZU5hbWUgaXMgc3BlY2lmaWVkLCB0aGlzIGlzIGEgbm9ybWFsIGltcG9ydC4gSWYgdGhlcmUncyBubyBtb2R1bGUgbmFtZSwgaXQncyBhXG4gICAgLy8gcmVmZXJlbmNlIHRvIGEgZ2xvYmFsL2FtYmllbnQgc3ltYm9sLlxuICAgIGlmIChhc3QudmFsdWUubW9kdWxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyBhIG5vcm1hbCBpbXBvcnQuIEZpbmQgdGhlIGltcG9ydGVkIG1vZHVsZS5cbiAgICAgIGNvbnN0IHttb2R1bGVJbXBvcnQsIHN5bWJvbH0gPVxuICAgICAgICAgIHRoaXMuaW1wb3J0cy5nZW5lcmF0ZU5hbWVkSW1wb3J0KGFzdC52YWx1ZS5tb2R1bGVOYW1lLCBhc3QudmFsdWUubmFtZSk7XG4gICAgICBpZiAobW9kdWxlSW1wb3J0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZSBzeW1ib2wgd2FzIGFtYmllbnQgYWZ0ZXIgYWxsLlxuICAgICAgICByZXR1cm4gdHMuY3JlYXRlSWRlbnRpZmllcihzeW1ib2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRzLmNyZWF0ZVByb3BlcnR5QWNjZXNzKFxuICAgICAgICAgICAgdHMuY3JlYXRlSWRlbnRpZmllcihtb2R1bGVJbXBvcnQpLCB0cy5jcmVhdGVJZGVudGlmaWVyKHN5bWJvbCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgc3ltYm9sIGlzIGFtYmllbnQsIHNvIGp1c3QgcmVmZXJlbmNlIGl0LlxuICAgICAgcmV0dXJuIHRzLmNyZWF0ZUlkZW50aWZpZXIoYXN0LnZhbHVlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q29uZGl0aW9uYWxFeHByKGFzdDogQ29uZGl0aW9uYWxFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuQ29uZGl0aW9uYWxFeHByZXNzaW9uIHtcbiAgICBsZXQgY29uZDogdHMuRXhwcmVzc2lvbiA9IGFzdC5jb25kaXRpb24udmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpO1xuXG4gICAgLy8gT3JkaW5hcmlseSB0aGUgdGVybmFyeSBvcGVyYXRvciBpcyByaWdodC1hc3NvY2lhdGl2ZS4gVGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAgICAvLyAgIGBhID8gYiA6IGMgPyBkIDogZWAgPT4gYGEgPyBiIDogKGMgPyBkIDogZSlgXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBvY2Nhc2lvbmFsbHkgQW5ndWxhciBuZWVkcyB0byBwcm9kdWNlIGEgbGVmdC1hc3NvY2lhdGl2ZSBjb25kaXRpb25hbCwgc3VjaCBhcyBpblxuICAgIC8vIHRoZSBjYXNlIG9mIGEgbnVsbC1zYWZlIG5hdmlnYXRpb24gcHJvZHVjdGlvbjogYHt7YT8uYiA/IGMgOiBkfX1gLiBUaGlzIHRlbXBsYXRlIHByb2R1Y2VzXG4gICAgLy8gYSB0ZXJuYXJ5IG9mIHRoZSBmb3JtOlxuICAgIC8vICAgYGEgPT0gbnVsbCA/IG51bGwgOiByZXN0IG9mIGV4cHJlc3Npb25gXG4gICAgLy8gSWYgdGhlIHJlc3Qgb2YgdGhlIGV4cHJlc3Npb24gaXMgYWxzbyBhIHRlcm5hcnkgdGhvdWdoLCB0aGlzIHdvdWxkIHByb2R1Y2UgdGhlIGZvcm06XG4gICAgLy8gICBgYSA9PSBudWxsID8gbnVsbCA6IGEuYiA/IGMgOiBkYFxuICAgIC8vIHdoaWNoLCBpZiBsZWZ0IGFzIHJpZ2h0LWFzc29jaWF0aXZlLCB3b3VsZCBiZSBpbmNvcnJlY3RseSBhc3NvY2lhdGVkIGFzOlxuICAgIC8vICAgYGEgPT0gbnVsbCA/IG51bGwgOiAoYS5iID8gYyA6IGQpYFxuICAgIC8vXG4gICAgLy8gSW4gc3VjaCBjYXNlcywgdGhlIGxlZnQtYXNzb2NpYXRpdml0eSBuZWVkcyB0byBiZSBlbmZvcmNlZCB3aXRoIHBhcmVudGhlc2VzOlxuICAgIC8vICAgYChhID09IG51bGwgPyBudWxsIDogYS5iKSA/IGMgOiBkYFxuICAgIC8vXG4gICAgLy8gU3VjaCBwYXJlbnRoZXNlcyBjb3VsZCBhbHdheXMgYmUgaW5jbHVkZWQgaW4gdGhlIGNvbmRpdGlvbiAoZ3VhcmFudGVlaW5nIGNvcnJlY3QgYmVoYXZpb3IpIGluXG4gICAgLy8gYWxsIGNhc2VzLCBidXQgdGhpcyBoYXMgYSBjb2RlIHNpemUgY29zdC4gSW5zdGVhZCwgcGFyZW50aGVzZXMgYXJlIGFkZGVkIG9ubHkgd2hlbiBhXG4gICAgLy8gY29uZGl0aW9uYWwgZXhwcmVzc2lvbiBpcyBkaXJlY3RseSB1c2VkIGFzIHRoZSBjb25kaXRpb24gb2YgYW5vdGhlci5cbiAgICAvL1xuICAgIC8vIFRPRE8oYWx4aHViKTogaW52ZXN0aWdhdGUgYmV0dGVyIGxvZ2ljIGZvciBwcmVjZW5kZW5jZSBvZiBjb25kaXRpb25hbCBvcGVyYXRvcnNcbiAgICBpZiAoYXN0LmNvbmRpdGlvbiBpbnN0YW5jZW9mIENvbmRpdGlvbmFsRXhwcikge1xuICAgICAgLy8gVGhlIGNvbmRpdGlvbiBvZiB0aGlzIHRlcm5hcnkgbmVlZHMgdG8gYmUgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyB0byBtYWludGFpblxuICAgICAgLy8gbGVmdC1hc3NvY2lhdGl2aXR5LlxuICAgICAgY29uZCA9IHRzLmNyZWF0ZVBhcmVuKGNvbmQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cy5jcmVhdGVDb25kaXRpb25hbChcbiAgICAgICAgY29uZCwgYXN0LnRydWVDYXNlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjb250ZXh0KSxcbiAgICAgICAgYXN0LmZhbHNlQ2FzZSEudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpKTtcbiAgfVxuXG4gIHZpc2l0Tm90RXhwcihhc3Q6IE5vdEV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5QcmVmaXhVbmFyeUV4cHJlc3Npb24ge1xuICAgIHJldHVybiB0cy5jcmVhdGVQcmVmaXgoXG4gICAgICAgIHRzLlN5bnRheEtpbmQuRXhjbGFtYXRpb25Ub2tlbiwgYXN0LmNvbmRpdGlvbi52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpO1xuICB9XG5cbiAgdmlzaXRBc3NlcnROb3ROdWxsRXhwcihhc3Q6IEFzc2VydE5vdE51bGwsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5Ob25OdWxsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIGFzdC5jb25kaXRpb24udmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgdmlzaXRDYXN0RXhwcihhc3Q6IENhc3RFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIGFzdC52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRXhwcihhc3Q6IEZ1bmN0aW9uRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLkZ1bmN0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUZ1bmN0aW9uRXhwcmVzc2lvbihcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFzdC5uYW1lIHx8IHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgICAgICBhc3QucGFyYW1zLm1hcChcbiAgICAgICAgICAgIHBhcmFtID0+IHRzLmNyZWF0ZVBhcmFtZXRlcihcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwYXJhbS5uYW1lLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSksXG4gICAgICAgIHVuZGVmaW5lZCwgdHMuY3JlYXRlQmxvY2soYXN0LnN0YXRlbWVudHMubWFwKHN0bXQgPT4gc3RtdC52aXNpdFN0YXRlbWVudCh0aGlzLCBjb250ZXh0KSkpKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5T3BlcmF0b3JFeHByKGFzdDogQmluYXJ5T3BlcmF0b3JFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuRXhwcmVzc2lvbiB7XG4gICAgaWYgKCFCSU5BUllfT1BFUkFUT1JTLmhhcyhhc3Qub3BlcmF0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYmluYXJ5IG9wZXJhdG9yOiAke0JpbmFyeU9wZXJhdG9yW2FzdC5vcGVyYXRvcl19YCk7XG4gICAgfVxuICAgIHJldHVybiB0cy5jcmVhdGVCaW5hcnkoXG4gICAgICAgIGFzdC5saHMudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpLCBCSU5BUllfT1BFUkFUT1JTLmdldChhc3Qub3BlcmF0b3IpISxcbiAgICAgICAgYXN0LnJocy52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpO1xuICB9XG5cbiAgdmlzaXRSZWFkUHJvcEV4cHIoYXN0OiBSZWFkUHJvcEV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5Qcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24ge1xuICAgIHJldHVybiB0cy5jcmVhdGVQcm9wZXJ0eUFjY2Vzcyhhc3QucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpLCBhc3QubmFtZSk7XG4gIH1cblxuICB2aXNpdFJlYWRLZXlFeHByKGFzdDogUmVhZEtleUV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5FbGVtZW50QWNjZXNzRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUVsZW1lbnRBY2Nlc3MoXG4gICAgICAgIGFzdC5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCksIGFzdC5pbmRleC52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXlFeHByKGFzdDogTGl0ZXJhbEFycmF5RXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLkFycmF5TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGV4cHIgPVxuICAgICAgICB0cy5jcmVhdGVBcnJheUxpdGVyYWwoYXN0LmVudHJpZXMubWFwKGV4cHIgPT4gZXhwci52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpKTtcbiAgICB0aGlzLnNldFNvdXJjZU1hcFJhbmdlKGV4cHIsIGFzdCk7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICB2aXNpdExpdGVyYWxNYXBFeHByKGFzdDogTGl0ZXJhbE1hcEV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgZW50cmllcyA9IGFzdC5lbnRyaWVzLm1hcChcbiAgICAgICAgZW50cnkgPT4gdHMuY3JlYXRlUHJvcGVydHlBc3NpZ25tZW50KFxuICAgICAgICAgICAgZW50cnkucXVvdGVkID8gdHMuY3JlYXRlTGl0ZXJhbChlbnRyeS5rZXkpIDogdHMuY3JlYXRlSWRlbnRpZmllcihlbnRyeS5rZXkpLFxuICAgICAgICAgICAgZW50cnkudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpKSk7XG4gICAgY29uc3QgZXhwciA9IHRzLmNyZWF0ZU9iamVjdExpdGVyYWwoZW50cmllcyk7XG4gICAgdGhpcy5zZXRTb3VyY2VNYXBSYW5nZShleHByLCBhc3QpO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHIoYXN0OiBDb21tYUV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXRXcmFwcGVkTm9kZUV4cHIoYXN0OiBXcmFwcGVkTm9kZUV4cHI8YW55PiwgY29udGV4dDogQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKHRzLmlzSWRlbnRpZmllcihhc3Qubm9kZSkpIHtcbiAgICAgIHRoaXMuZGVmYXVsdEltcG9ydFJlY29yZGVyLnJlY29yZFVzZWRJZGVudGlmaWVyKGFzdC5ub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFzdC5ub2RlO1xuICB9XG5cbiAgdmlzaXRUeXBlb2ZFeHByKGFzdDogVHlwZW9mRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlR5cGVPZkV4cHJlc3Npb24ge1xuICAgIHJldHVybiB0cy5jcmVhdGVUeXBlT2YoYXN0LmV4cHIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGNvbnRleHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U291cmNlTWFwUmFuZ2UoZXhwcjogdHMuRXhwcmVzc2lvbiwgYXN0OiBFeHByZXNzaW9uKSB7XG4gICAgaWYgKGFzdC5zb3VyY2VTcGFuKSB7XG4gICAgICBjb25zdCB7c3RhcnQsIGVuZH0gPSBhc3Quc291cmNlU3BhbjtcbiAgICAgIGNvbnN0IHt1cmwsIGNvbnRlbnR9ID0gc3RhcnQuZmlsZTtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV4dGVybmFsU291cmNlRmlsZXMuaGFzKHVybCkpIHtcbiAgICAgICAgICB0aGlzLmV4dGVybmFsU291cmNlRmlsZXMuc2V0KHVybCwgdHMuY3JlYXRlU291cmNlTWFwU291cmNlKHVybCwgY29udGVudCwgcG9zID0+IHBvcykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuZXh0ZXJuYWxTb3VyY2VGaWxlcy5nZXQodXJsKTtcbiAgICAgICAgdHMuc2V0U291cmNlTWFwUmFuZ2UoZXhwciwge3Bvczogc3RhcnQub2Zmc2V0LCBlbmQ6IGVuZC5vZmZzZXQsIHNvdXJjZX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVRyYW5zbGF0b3JWaXNpdG9yIGltcGxlbWVudHMgRXhwcmVzc2lvblZpc2l0b3IsIFR5cGVWaXNpdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbXBvcnRzOiBJbXBvcnRNYW5hZ2VyKSB7fVxuXG4gIHZpc2l0QnVpbHRpblR5cGUodHlwZTogQnVpbHRpblR5cGUsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5LZXl3b3JkVHlwZU5vZGUge1xuICAgIHN3aXRjaCAodHlwZS5uYW1lKSB7XG4gICAgICBjYXNlIEJ1aWx0aW5UeXBlTmFtZS5Cb29sOlxuICAgICAgICByZXR1cm4gdHMuY3JlYXRlS2V5d29yZFR5cGVOb2RlKHRzLlN5bnRheEtpbmQuQm9vbGVhbktleXdvcmQpO1xuICAgICAgY2FzZSBCdWlsdGluVHlwZU5hbWUuRHluYW1pYzpcbiAgICAgICAgcmV0dXJuIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLkFueUtleXdvcmQpO1xuICAgICAgY2FzZSBCdWlsdGluVHlwZU5hbWUuSW50OlxuICAgICAgY2FzZSBCdWlsdGluVHlwZU5hbWUuTnVtYmVyOlxuICAgICAgICByZXR1cm4gdHMuY3JlYXRlS2V5d29yZFR5cGVOb2RlKHRzLlN5bnRheEtpbmQuTnVtYmVyS2V5d29yZCk7XG4gICAgICBjYXNlIEJ1aWx0aW5UeXBlTmFtZS5TdHJpbmc6XG4gICAgICAgIHJldHVybiB0cy5jcmVhdGVLZXl3b3JkVHlwZU5vZGUodHMuU3ludGF4S2luZC5TdHJpbmdLZXl3b3JkKTtcbiAgICAgIGNhc2UgQnVpbHRpblR5cGVOYW1lLk5vbmU6XG4gICAgICAgIHJldHVybiB0cy5jcmVhdGVLZXl3b3JkVHlwZU5vZGUodHMuU3ludGF4S2luZC5OZXZlcktleXdvcmQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBidWlsdGluIHR5cGU6ICR7QnVpbHRpblR5cGVOYW1lW3R5cGUubmFtZV19YCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHByZXNzaW9uVHlwZSh0eXBlOiBFeHByZXNzaW9uVHlwZSwgY29udGV4dDogQ29udGV4dCk6IHRzLlR5cGVOb2RlIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMudHJhbnNsYXRlRXhwcmVzc2lvbih0eXBlLnZhbHVlLCBjb250ZXh0KTtcbiAgICBpZiAodHlwZS50eXBlUGFyYW1zID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHlwZU5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCF0cy5pc1R5cGVSZWZlcmVuY2VOb2RlKHR5cGVOb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdBbiBFeHByZXNzaW9uVHlwZSB3aXRoIHR5cGUgYXJndW1lbnRzIG11c3QgdHJhbnNsYXRlIGludG8gYSBUeXBlUmVmZXJlbmNlTm9kZScpO1xuICAgIH0gZWxzZSBpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEFuIEV4cHJlc3Npb25UeXBlIHdpdGggdHlwZSBhcmd1bWVudHMgY2Fubm90IGhhdmUgbXVsdGlwbGUgbGV2ZWxzIG9mIHR5cGUgYXJndW1lbnRzYCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZUFyZ3MgPSB0eXBlLnR5cGVQYXJhbXMubWFwKHBhcmFtID0+IHRoaXMudHJhbnNsYXRlVHlwZShwYXJhbSwgY29udGV4dCkpO1xuICAgIHJldHVybiB0cy5jcmVhdGVUeXBlUmVmZXJlbmNlTm9kZSh0eXBlTm9kZS50eXBlTmFtZSwgdHlwZUFyZ3MpO1xuICB9XG5cbiAgdmlzaXRBcnJheVR5cGUodHlwZTogQXJyYXlUeXBlLCBjb250ZXh0OiBDb250ZXh0KTogdHMuQXJyYXlUeXBlTm9kZSB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUFycmF5VHlwZU5vZGUodGhpcy50cmFuc2xhdGVUeXBlKHR5cGUub2YsIGNvbnRleHQpKTtcbiAgfVxuXG4gIHZpc2l0TWFwVHlwZSh0eXBlOiBNYXBUeXBlLCBjb250ZXh0OiBDb250ZXh0KTogdHMuVHlwZUxpdGVyYWxOb2RlIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0cy5jcmVhdGVQYXJhbWV0ZXIoXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdrZXknLCB1bmRlZmluZWQsXG4gICAgICAgIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLlN0cmluZ0tleXdvcmQpKTtcbiAgICBjb25zdCB0eXBlQXJncyA9IHR5cGUudmFsdWVUeXBlICE9PSBudWxsID9cbiAgICAgICAgdGhpcy50cmFuc2xhdGVUeXBlKHR5cGUudmFsdWVUeXBlLCBjb250ZXh0KSA6XG4gICAgICAgIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLlVua25vd25LZXl3b3JkKTtcbiAgICBjb25zdCBpbmRleFNpZ25hdHVyZSA9IHRzLmNyZWF0ZUluZGV4U2lnbmF0dXJlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBbcGFyYW1ldGVyXSwgdHlwZUFyZ3MpO1xuICAgIHJldHVybiB0cy5jcmVhdGVUeXBlTGl0ZXJhbE5vZGUoW2luZGV4U2lnbmF0dXJlXSk7XG4gIH1cblxuICB2aXNpdFJlYWRWYXJFeHByKGFzdDogUmVhZFZhckV4cHIsIGNvbnRleHQ6IENvbnRleHQpOiB0cy5UeXBlUXVlcnlOb2RlIHtcbiAgICBpZiAoYXN0Lm5hbWUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhZFZhckV4cHIgd2l0aCBubyB2YXJpYWJsZSBuYW1lIGluIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVR5cGVRdWVyeU5vZGUodHMuY3JlYXRlSWRlbnRpZmllcihhc3QubmFtZSkpO1xuICB9XG5cbiAgdmlzaXRXcml0ZVZhckV4cHIoZXhwcjogV3JpdGVWYXJFeHByLCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0V3JpdGVLZXlFeHByKGV4cHI6IFdyaXRlS2V5RXhwciwgY29udGV4dDogQ29udGV4dCk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB2aXNpdFdyaXRlUHJvcEV4cHIoZXhwcjogV3JpdGVQcm9wRXhwciwgY29udGV4dDogQ29udGV4dCk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB2aXNpdEludm9rZU1ldGhvZEV4cHIoYXN0OiBJbnZva2VNZXRob2RFeHByLCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0SW52b2tlRnVuY3Rpb25FeHByKGFzdDogSW52b2tlRnVuY3Rpb25FeHByLCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0SW5zdGFudGlhdGVFeHByKGFzdDogSW5zdGFudGlhdGVFeHByLCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHIoYXN0OiBMaXRlcmFsRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlR5cGVOb2RlIHtcbiAgICBpZiAoYXN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHMuY3JlYXRlS2V5d29yZFR5cGVOb2RlKHRzLlN5bnRheEtpbmQuTnVsbEtleXdvcmQpO1xuICAgIH0gZWxzZSBpZiAoYXN0LnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVLZXl3b3JkVHlwZU5vZGUodHMuU3ludGF4S2luZC5VbmRlZmluZWRLZXl3b3JkKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhc3QudmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRzLmNyZWF0ZUxpdGVyYWxUeXBlTm9kZSh0cy5jcmVhdGVMaXRlcmFsKGFzdC52YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFzdC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVMaXRlcmFsVHlwZU5vZGUodHMuY3JlYXRlTGl0ZXJhbChhc3QudmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRzLmNyZWF0ZUxpdGVyYWxUeXBlTm9kZSh0cy5jcmVhdGVMaXRlcmFsKGFzdC52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0TG9jYWxpemVkU3RyaW5nKGFzdDogTG9jYWxpemVkU3RyaW5nLCBjb250ZXh0OiBDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogRXh0ZXJuYWxFeHByLCBjb250ZXh0OiBDb250ZXh0KTogdHMuRW50aXR5TmFtZXx0cy5UeXBlUmVmZXJlbmNlTm9kZSB7XG4gICAgaWYgKGFzdC52YWx1ZS5tb2R1bGVOYW1lID09PSBudWxsIHx8IGFzdC52YWx1ZS5uYW1lID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEltcG9ydCB1bmtub3duIG1vZHVsZSBvciBzeW1ib2xgKTtcbiAgICB9XG4gICAgY29uc3Qge21vZHVsZUltcG9ydCwgc3ltYm9sfSA9XG4gICAgICAgIHRoaXMuaW1wb3J0cy5nZW5lcmF0ZU5hbWVkSW1wb3J0KGFzdC52YWx1ZS5tb2R1bGVOYW1lLCBhc3QudmFsdWUubmFtZSk7XG4gICAgY29uc3Qgc3ltYm9sSWRlbnRpZmllciA9IHRzLmNyZWF0ZUlkZW50aWZpZXIoc3ltYm9sKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gbW9kdWxlSW1wb3J0ID9cbiAgICAgICAgdHMuY3JlYXRlUXVhbGlmaWVkTmFtZSh0cy5jcmVhdGVJZGVudGlmaWVyKG1vZHVsZUltcG9ydCksIHN5bWJvbElkZW50aWZpZXIpIDpcbiAgICAgICAgc3ltYm9sSWRlbnRpZmllcjtcblxuICAgIGNvbnN0IHR5cGVBcmd1bWVudHMgPSBhc3QudHlwZVBhcmFtcyAhPT0gbnVsbCA/XG4gICAgICAgIGFzdC50eXBlUGFyYW1zLm1hcCh0eXBlID0+IHRoaXMudHJhbnNsYXRlVHlwZSh0eXBlLCBjb250ZXh0KSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVR5cGVSZWZlcmVuY2VOb2RlKHR5cGVOYW1lLCB0eXBlQXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0Q29uZGl0aW9uYWxFeHByKGFzdDogQ29uZGl0aW9uYWxFeHByLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXROb3RFeHByKGFzdDogTm90RXhwciwgY29udGV4dDogQ29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0QXNzZXJ0Tm90TnVsbEV4cHIoYXN0OiBBc3NlcnROb3ROdWxsLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXRDYXN0RXhwcihhc3Q6IENhc3RFeHByLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHIoYXN0OiBGdW5jdGlvbkV4cHIsIGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB2aXNpdEJpbmFyeU9wZXJhdG9yRXhwcihhc3Q6IEJpbmFyeU9wZXJhdG9yRXhwciwgY29udGV4dDogQ29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0UmVhZFByb3BFeHByKGFzdDogUmVhZFByb3BFeHByLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXRSZWFkS2V5RXhwcihhc3Q6IFJlYWRLZXlFeHByLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXlFeHByKGFzdDogTGl0ZXJhbEFycmF5RXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlR1cGxlVHlwZU5vZGUge1xuICAgIGNvbnN0IHZhbHVlcyA9IGFzdC5lbnRyaWVzLm1hcChleHByID0+IHRoaXMudHJhbnNsYXRlRXhwcmVzc2lvbihleHByLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVR1cGxlVHlwZU5vZGUodmFsdWVzKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcEV4cHIoYXN0OiBMaXRlcmFsTWFwRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlR5cGVMaXRlcmFsTm9kZSB7XG4gICAgY29uc3QgZW50cmllcyA9IGFzdC5lbnRyaWVzLm1hcChlbnRyeSA9PiB7XG4gICAgICBjb25zdCB7a2V5LCBxdW90ZWR9ID0gZW50cnk7XG4gICAgICBjb25zdCB0eXBlID0gdGhpcy50cmFuc2xhdGVFeHByZXNzaW9uKGVudHJ5LnZhbHVlLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVQcm9wZXJ0eVNpZ25hdHVyZShcbiAgICAgICAgICAvKiBtb2RpZmllcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAgIC8qIG5hbWUgKi8gcXVvdGVkID8gdHMuY3JlYXRlU3RyaW5nTGl0ZXJhbChrZXkpIDoga2V5LFxuICAgICAgICAgIC8qIHF1ZXN0aW9uVG9rZW4gKi8gdW5kZWZpbmVkLFxuICAgICAgICAgIC8qIHR5cGUgKi8gdHlwZSxcbiAgICAgICAgICAvKiBpbml0aWFsaXplciAqLyB1bmRlZmluZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cy5jcmVhdGVUeXBlTGl0ZXJhbE5vZGUoZW50cmllcyk7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcihhc3Q6IENvbW1hRXhwciwgY29udGV4dDogQ29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHZpc2l0V3JhcHBlZE5vZGVFeHByKGFzdDogV3JhcHBlZE5vZGVFeHByPGFueT4sIGNvbnRleHQ6IENvbnRleHQpOiB0cy5UeXBlTm9kZSB7XG4gICAgY29uc3Qgbm9kZTogdHMuTm9kZSA9IGFzdC5ub2RlO1xuICAgIGlmICh0cy5pc0VudGl0eU5hbWUobm9kZSkpIHtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVUeXBlUmVmZXJlbmNlTm9kZShub2RlLCAvKiB0eXBlQXJndW1lbnRzICovIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIGlmICh0cy5pc1R5cGVOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKHRzLmlzTGl0ZXJhbEV4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVMaXRlcmFsVHlwZU5vZGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVW5zdXBwb3J0ZWQgV3JhcHBlZE5vZGVFeHByIGluIFR5cGVUcmFuc2xhdG9yVmlzaXRvcjogJHt0cy5TeW50YXhLaW5kW25vZGUua2luZF19YCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUeXBlb2ZFeHByKGFzdDogVHlwZW9mRXhwciwgY29udGV4dDogQ29udGV4dCk6IHRzLlR5cGVRdWVyeU5vZGUge1xuICAgIGxldCBleHByID0gdHJhbnNsYXRlRXhwcmVzc2lvbihcbiAgICAgICAgYXN0LmV4cHIsIHRoaXMuaW1wb3J0cywgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUiwgdHMuU2NyaXB0VGFyZ2V0LkVTMjAxNSk7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZVR5cGVRdWVyeU5vZGUoZXhwciBhcyB0cy5JZGVudGlmaWVyKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlVHlwZSh0eXBlOiBUeXBlLCBjb250ZXh0OiBDb250ZXh0KTogdHMuVHlwZU5vZGUge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZS52aXNpdFR5cGUodGhpcywgY29udGV4dCk7XG4gICAgaWYgKCF0cy5pc1R5cGVOb2RlKHR5cGVOb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBBIFR5cGUgbXVzdCB0cmFuc2xhdGUgdG8gYSBUeXBlTm9kZSwgYnV0IHdhcyAke3RzLlN5bnRheEtpbmRbdHlwZU5vZGUua2luZF19YCk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlRXhwcmVzc2lvbihleHByOiBFeHByZXNzaW9uLCBjb250ZXh0OiBDb250ZXh0KTogdHMuVHlwZU5vZGUge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gZXhwci52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCk7XG4gICAgaWYgKCF0cy5pc1R5cGVOb2RlKHR5cGVOb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBBbiBFeHByZXNzaW9uIG11c3QgdHJhbnNsYXRlIHRvIGEgVHlwZU5vZGUsIGJ1dCB3YXMgJHt0cy5TeW50YXhLaW5kW3R5cGVOb2RlLmtpbmRdfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgdGhlIGBMb2NhbGl6ZWRTdHJpbmdgIG5vZGUgaW50byBhIGBUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25gIGZvciBFUzIwMTUgZm9ybWF0dGVkXG4gKiBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsaXplZFN0cmluZ1RhZ2dlZFRlbXBsYXRlKFxuICAgIGFzdDogTG9jYWxpemVkU3RyaW5nLCBjb250ZXh0OiBDb250ZXh0LCB2aXNpdG9yOiBFeHByZXNzaW9uVmlzaXRvcikge1xuICBsZXQgdGVtcGxhdGU6IHRzLlRlbXBsYXRlTGl0ZXJhbDtcbiAgY29uc3QgbGVuZ3RoID0gYXN0Lm1lc3NhZ2VQYXJ0cy5sZW5ndGg7XG4gIGNvbnN0IG1ldGFCbG9jayA9IGFzdC5zZXJpYWxpemVJMThuSGVhZCgpO1xuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgdGVtcGxhdGUgPSB0cy5jcmVhdGVOb1N1YnN0aXR1dGlvblRlbXBsYXRlTGl0ZXJhbChtZXRhQmxvY2suY29va2VkLCBtZXRhQmxvY2sucmF3KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDcmVhdGUgdGhlIGhlYWQgcGFydFxuICAgIGNvbnN0IGhlYWQgPSB0cy5jcmVhdGVUZW1wbGF0ZUhlYWQobWV0YUJsb2NrLmNvb2tlZCwgbWV0YUJsb2NrLnJhdyk7XG4gICAgY29uc3Qgc3BhbnM6IHRzLlRlbXBsYXRlU3BhbltdID0gW107XG4gICAgLy8gQ3JlYXRlIHRoZSBtaWRkbGUgcGFydHNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgcmVzb2x2ZWRFeHByZXNzaW9uID0gYXN0LmV4cHJlc3Npb25zW2kgLSAxXS52aXNpdEV4cHJlc3Npb24odmlzaXRvciwgY29udGV4dCk7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVBhcnQgPSBhc3Quc2VyaWFsaXplSTE4blRlbXBsYXRlUGFydChpKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTWlkZGxlID0gY3JlYXRlVGVtcGxhdGVNaWRkbGUodGVtcGxhdGVQYXJ0LmNvb2tlZCwgdGVtcGxhdGVQYXJ0LnJhdyk7XG4gICAgICBzcGFucy5wdXNoKHRzLmNyZWF0ZVRlbXBsYXRlU3BhbihyZXNvbHZlZEV4cHJlc3Npb24sIHRlbXBsYXRlTWlkZGxlKSk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSB0aGUgdGFpbCBwYXJ0XG4gICAgY29uc3QgcmVzb2x2ZWRFeHByZXNzaW9uID0gYXN0LmV4cHJlc3Npb25zW2xlbmd0aCAtIDJdLnZpc2l0RXhwcmVzc2lvbih2aXNpdG9yLCBjb250ZXh0KTtcbiAgICBjb25zdCB0ZW1wbGF0ZVBhcnQgPSBhc3Quc2VyaWFsaXplSTE4blRlbXBsYXRlUGFydChsZW5ndGggLSAxKTtcbiAgICBjb25zdCB0ZW1wbGF0ZVRhaWwgPSBjcmVhdGVUZW1wbGF0ZVRhaWwodGVtcGxhdGVQYXJ0LmNvb2tlZCwgdGVtcGxhdGVQYXJ0LnJhdyk7XG4gICAgc3BhbnMucHVzaCh0cy5jcmVhdGVUZW1wbGF0ZVNwYW4ocmVzb2x2ZWRFeHByZXNzaW9uLCB0ZW1wbGF0ZVRhaWwpKTtcbiAgICAvLyBQdXQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgdGVtcGxhdGUgPSB0cy5jcmVhdGVUZW1wbGF0ZUV4cHJlc3Npb24oaGVhZCwgc3BhbnMpO1xuICB9XG4gIHJldHVybiB0cy5jcmVhdGVUYWdnZWRUZW1wbGF0ZSh0cy5jcmVhdGVJZGVudGlmaWVyKCckbG9jYWxpemUnKSwgdGVtcGxhdGUpO1xufVxuXG5cbi8vIEhBQ0s6IFVzZSB0aGlzIGluIHBsYWNlIG9mIGB0cy5jcmVhdGVUZW1wbGF0ZU1pZGRsZSgpYC5cbi8vIFJldmVydCBvbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzUzNzQgaXMgZml4ZWRcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlTWlkZGxlKGNvb2tlZDogc3RyaW5nLCByYXc6IHN0cmluZyk6IHRzLlRlbXBsYXRlTWlkZGxlIHtcbiAgY29uc3Qgbm9kZTogdHMuVGVtcGxhdGVMaXRlcmFsTGlrZU5vZGUgPSB0cy5jcmVhdGVUZW1wbGF0ZUhlYWQoY29va2VkLCByYXcpO1xuICBub2RlLmtpbmQgPSB0cy5TeW50YXhLaW5kLlRlbXBsYXRlTWlkZGxlO1xuICByZXR1cm4gbm9kZSBhcyB0cy5UZW1wbGF0ZU1pZGRsZTtcbn1cblxuLy8gSEFDSzogVXNlIHRoaXMgaW4gcGxhY2Ugb2YgYHRzLmNyZWF0ZVRlbXBsYXRlVGFpbCgpYC5cbi8vIFJldmVydCBvbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzUzNzQgaXMgZml4ZWRcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlVGFpbChjb29rZWQ6IHN0cmluZywgcmF3OiBzdHJpbmcpOiB0cy5UZW1wbGF0ZVRhaWwge1xuICBjb25zdCBub2RlOiB0cy5UZW1wbGF0ZUxpdGVyYWxMaWtlTm9kZSA9IHRzLmNyZWF0ZVRlbXBsYXRlSGVhZChjb29rZWQsIHJhdyk7XG4gIG5vZGUua2luZCA9IHRzLlN5bnRheEtpbmQuVGVtcGxhdGVUYWlsO1xuICByZXR1cm4gbm9kZSBhcyB0cy5UZW1wbGF0ZVRhaWw7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlIHRoZSBgTG9jYWxpemVkU3RyaW5nYCBub2RlIGludG8gYSBgJGxvY2FsaXplYCBjYWxsIHVzaW5nIHRoZSBpbXBvcnRlZFxuICogYF9fbWFrZVRlbXBsYXRlT2JqZWN0YCBoZWxwZXIgZm9yIEVTNSBmb3JtYXR0ZWQgb3V0cHV0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVMb2NhbGl6ZWRTdHJpbmdGdW5jdGlvbkNhbGwoXG4gICAgYXN0OiBMb2NhbGl6ZWRTdHJpbmcsIGNvbnRleHQ6IENvbnRleHQsIHZpc2l0b3I6IEV4cHJlc3Npb25WaXNpdG9yLCBpbXBvcnRzOiBJbXBvcnRNYW5hZ2VyKSB7XG4gIC8vIEEgYCRsb2NhbGl6ZWAgbWVzc2FnZSBjb25zaXN0cyBgbWVzc2FnZVBhcnRzYCBhbmQgYGV4cHJlc3Npb25zYCwgd2hpY2ggZ2V0IGludGVybGVhdmVkXG4gIC8vIHRvZ2V0aGVyLiBUaGUgaW50ZXJsZWF2ZWQgcGllY2VzIGxvb2sgbGlrZTpcbiAgLy8gYFttZXNzYWdlUGFydDAsIGV4cHJlc3Npb24wLCBtZXNzYWdlUGFydDEsIGV4cHJlc3Npb24xLCBtZXNzYWdlUGFydDJdYFxuICAvL1xuICAvLyBOb3RlIHRoYXQgdGhlcmUgaXMgYWx3YXlzIGEgbWVzc2FnZSBwYXJ0IGF0IHRoZSBzdGFydCBhbmQgZW5kLCBhbmQgc28gdGhlcmVmb3JlXG4gIC8vIGBtZXNzYWdlUGFydHMubGVuZ3RoID09PSBleHByZXNzaW9ucy5sZW5ndGggKyAxYC5cbiAgLy9cbiAgLy8gRWFjaCBtZXNzYWdlIHBhcnQgbWF5IGJlIHByZWZpeGVkIHdpdGggXCJtZXRhZGF0YVwiLCB3aGljaCBpcyB3cmFwcGVkIGluIGNvbG9ucyAoOikgZGVsaW1pdGVycy5cbiAgLy8gVGhlIG1ldGFkYXRhIGlzIGF0dGFjaGVkIHRvIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBtZXNzYWdlIHBhcnRzIGJ5IGNhbGxzIHRvXG4gIC8vIGBzZXJpYWxpemVJMThuSGVhZCgpYCBhbmQgYHNlcmlhbGl6ZUkxOG5UZW1wbGF0ZVBhcnQoKWAgcmVzcGVjdGl2ZWx5LlxuXG4gIC8vIFRoZSBmaXJzdCBtZXNzYWdlIHBhcnQgKGkuZS4gYGFzdC5tZXNzYWdlUGFydHNbMF1gKSBpcyB1c2VkIHRvIGluaXRpYWxpemUgYG1lc3NhZ2VQYXJ0c2AgYXJyYXkuXG4gIGNvbnN0IG1lc3NhZ2VQYXJ0cyA9IFthc3Quc2VyaWFsaXplSTE4bkhlYWQoKV07XG4gIGNvbnN0IGV4cHJlc3Npb25zOiBhbnlbXSA9IFtdO1xuXG4gIC8vIFRoZSByZXN0IG9mIHRoZSBgYXN0Lm1lc3NhZ2VQYXJ0c2AgYW5kIGVhY2ggb2YgdGhlIGV4cHJlc3Npb25zIGFyZSBgYXN0LmV4cHJlc3Npb25zYCBwdXNoZWRcbiAgLy8gaW50byB0aGUgYXJyYXlzLiBOb3RlIHRoYXQgYGFzdC5tZXNzYWdlUGFydFtpXWAgY29ycmVzcG9uZHMgdG8gYGV4cHJlc3Npb25zW2ktMV1gXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXN0Lm1lc3NhZ2VQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGV4cHJlc3Npb25zLnB1c2goYXN0LmV4cHJlc3Npb25zW2kgLSAxXS52aXNpdEV4cHJlc3Npb24odmlzaXRvciwgY29udGV4dCkpO1xuICAgIG1lc3NhZ2VQYXJ0cy5wdXNoKGFzdC5zZXJpYWxpemVJMThuVGVtcGxhdGVQYXJ0KGkpKTtcbiAgfVxuXG4gIC8vIFRoZSByZXN1bHRpbmcgZG93bmxldmVsbGVkIHRhZ2dlZCB0ZW1wbGF0ZSBzdHJpbmcgdXNlcyBhIGNhbGwgdG8gdGhlIGBfX21ha2VUZW1wbGF0ZU9iamVjdCgpYFxuICAvLyBoZWxwZXIsIHNvIHdlIG11c3QgZW5zdXJlIGl0IGhhcyBiZWVuIGltcG9ydGVkLlxuICBjb25zdCB7bW9kdWxlSW1wb3J0LCBzeW1ib2x9ID0gaW1wb3J0cy5nZW5lcmF0ZU5hbWVkSW1wb3J0KCd0c2xpYicsICdfX21ha2VUZW1wbGF0ZU9iamVjdCcpO1xuICBjb25zdCBfX21ha2VUZW1wbGF0ZU9iamVjdEhlbHBlciA9IChtb2R1bGVJbXBvcnQgPT09IG51bGwpID9cbiAgICAgIHRzLmNyZWF0ZUlkZW50aWZpZXIoc3ltYm9sKSA6XG4gICAgICB0cy5jcmVhdGVQcm9wZXJ0eUFjY2Vzcyh0cy5jcmVhdGVJZGVudGlmaWVyKG1vZHVsZUltcG9ydCksIHRzLmNyZWF0ZUlkZW50aWZpZXIoc3ltYm9sKSk7XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGNhbGwgaW4gdGhlIGZvcm06XG4gIC8vIGAkbG9jYWxpemUoX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkTWVzc2FnZVBhcnRzLCByYXdNZXNzYWdlUGFydHMpLCAuLi5leHByZXNzaW9ucyk7YFxuICByZXR1cm4gdHMuY3JlYXRlQ2FsbChcbiAgICAgIC8qIGV4cHJlc3Npb24gKi8gdHMuY3JlYXRlSWRlbnRpZmllcignJGxvY2FsaXplJyksXG4gICAgICAvKiB0eXBlQXJndW1lbnRzICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIGFyZ3VtZW50c0FycmF5ICovW1xuICAgICAgICB0cy5jcmVhdGVDYWxsKFxuICAgICAgICAgICAgLyogZXhwcmVzc2lvbiAqLyBfX21ha2VUZW1wbGF0ZU9iamVjdEhlbHBlcixcbiAgICAgICAgICAgIC8qIHR5cGVBcmd1bWVudHMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgLyogYXJndW1lbnRzQXJyYXkgKi9cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdHMuY3JlYXRlQXJyYXlMaXRlcmFsKFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZVBhcnRzLm1hcChtZXNzYWdlUGFydCA9PiB0cy5jcmVhdGVTdHJpbmdMaXRlcmFsKG1lc3NhZ2VQYXJ0LmNvb2tlZCkpKSxcbiAgICAgICAgICAgICAgdHMuY3JlYXRlQXJyYXlMaXRlcmFsKFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZVBhcnRzLm1hcChtZXNzYWdlUGFydCA9PiB0cy5jcmVhdGVTdHJpbmdMaXRlcmFsKG1lc3NhZ2VQYXJ0LnJhdykpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAuLi5leHByZXNzaW9ucyxcbiAgICAgIF0pO1xufVxuIl19