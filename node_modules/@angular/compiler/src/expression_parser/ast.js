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
        define("@angular/compiler/src/expression_parser/ast", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ParserError = /** @class */ (function () {
        function ParserError(message, input, errLocation, ctxLocation) {
            this.input = input;
            this.errLocation = errLocation;
            this.ctxLocation = ctxLocation;
            this.message = "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation;
        }
        return ParserError;
    }());
    exports.ParserError = ParserError;
    var ParseSpan = /** @class */ (function () {
        function ParseSpan(start, end) {
            this.start = start;
            this.end = end;
        }
        ParseSpan.prototype.toAbsolute = function (absoluteOffset) {
            return new AbsoluteSourceSpan(absoluteOffset + this.start, absoluteOffset + this.end);
        };
        return ParseSpan;
    }());
    exports.ParseSpan = ParseSpan;
    var AST = /** @class */ (function () {
        function AST(span, 
        /**
         * Absolute location of the expression AST in a source code file.
         */
        sourceSpan) {
            this.span = span;
            this.sourceSpan = sourceSpan;
        }
        AST.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return null;
        };
        AST.prototype.toString = function () {
            return 'AST';
        };
        return AST;
    }());
    exports.AST = AST;
    var ASTWithName = /** @class */ (function (_super) {
        tslib_1.__extends(ASTWithName, _super);
        function ASTWithName(span, sourceSpan, nameSpan) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.nameSpan = nameSpan;
            return _this;
        }
        return ASTWithName;
    }(AST));
    exports.ASTWithName = ASTWithName;
    /**
     * Represents a quoted expression of the form:
     *
     * quote = prefix `:` uninterpretedExpression
     * prefix = identifier
     * uninterpretedExpression = arbitrary string
     *
     * A quoted expression is meant to be pre-processed by an AST transformer that
     * converts it into another AST that no longer contains quoted expressions.
     * It is meant to allow third-party developers to extend Angular template
     * expression language. The `uninterpretedExpression` part of the quote is
     * therefore not interpreted by the Angular's own expression parser.
     */
    var Quote = /** @class */ (function (_super) {
        tslib_1.__extends(Quote, _super);
        function Quote(span, sourceSpan, prefix, uninterpretedExpression, location) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.prefix = prefix;
            _this.uninterpretedExpression = uninterpretedExpression;
            _this.location = location;
            return _this;
        }
        Quote.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitQuote(this, context);
        };
        Quote.prototype.toString = function () {
            return 'Quote';
        };
        return Quote;
    }(AST));
    exports.Quote = Quote;
    var EmptyExpr = /** @class */ (function (_super) {
        tslib_1.__extends(EmptyExpr, _super);
        function EmptyExpr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyExpr.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            // do nothing
        };
        return EmptyExpr;
    }(AST));
    exports.EmptyExpr = EmptyExpr;
    var ImplicitReceiver = /** @class */ (function (_super) {
        tslib_1.__extends(ImplicitReceiver, _super);
        function ImplicitReceiver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImplicitReceiver.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitImplicitReceiver(this, context);
        };
        return ImplicitReceiver;
    }(AST));
    exports.ImplicitReceiver = ImplicitReceiver;
    /**
     * Multiple expressions separated by a semicolon.
     */
    var Chain = /** @class */ (function (_super) {
        tslib_1.__extends(Chain, _super);
        function Chain(span, sourceSpan, expressions) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.expressions = expressions;
            return _this;
        }
        Chain.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitChain(this, context);
        };
        return Chain;
    }(AST));
    exports.Chain = Chain;
    var Conditional = /** @class */ (function (_super) {
        tslib_1.__extends(Conditional, _super);
        function Conditional(span, sourceSpan, condition, trueExp, falseExp) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.condition = condition;
            _this.trueExp = trueExp;
            _this.falseExp = falseExp;
            return _this;
        }
        Conditional.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitConditional(this, context);
        };
        return Conditional;
    }(AST));
    exports.Conditional = Conditional;
    var PropertyRead = /** @class */ (function (_super) {
        tslib_1.__extends(PropertyRead, _super);
        function PropertyRead(span, sourceSpan, nameSpan, receiver, name) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.receiver = receiver;
            _this.name = name;
            return _this;
        }
        PropertyRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPropertyRead(this, context);
        };
        return PropertyRead;
    }(ASTWithName));
    exports.PropertyRead = PropertyRead;
    var PropertyWrite = /** @class */ (function (_super) {
        tslib_1.__extends(PropertyWrite, _super);
        function PropertyWrite(span, sourceSpan, nameSpan, receiver, name, value) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.receiver = receiver;
            _this.name = name;
            _this.value = value;
            return _this;
        }
        PropertyWrite.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPropertyWrite(this, context);
        };
        return PropertyWrite;
    }(ASTWithName));
    exports.PropertyWrite = PropertyWrite;
    var SafePropertyRead = /** @class */ (function (_super) {
        tslib_1.__extends(SafePropertyRead, _super);
        function SafePropertyRead(span, sourceSpan, nameSpan, receiver, name) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.receiver = receiver;
            _this.name = name;
            return _this;
        }
        SafePropertyRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitSafePropertyRead(this, context);
        };
        return SafePropertyRead;
    }(ASTWithName));
    exports.SafePropertyRead = SafePropertyRead;
    var KeyedRead = /** @class */ (function (_super) {
        tslib_1.__extends(KeyedRead, _super);
        function KeyedRead(span, sourceSpan, obj, key) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.obj = obj;
            _this.key = key;
            return _this;
        }
        KeyedRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitKeyedRead(this, context);
        };
        return KeyedRead;
    }(AST));
    exports.KeyedRead = KeyedRead;
    var KeyedWrite = /** @class */ (function (_super) {
        tslib_1.__extends(KeyedWrite, _super);
        function KeyedWrite(span, sourceSpan, obj, key, value) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.obj = obj;
            _this.key = key;
            _this.value = value;
            return _this;
        }
        KeyedWrite.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitKeyedWrite(this, context);
        };
        return KeyedWrite;
    }(AST));
    exports.KeyedWrite = KeyedWrite;
    var BindingPipe = /** @class */ (function (_super) {
        tslib_1.__extends(BindingPipe, _super);
        function BindingPipe(span, sourceSpan, exp, name, args, nameSpan) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.exp = exp;
            _this.name = name;
            _this.args = args;
            return _this;
        }
        BindingPipe.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPipe(this, context);
        };
        return BindingPipe;
    }(ASTWithName));
    exports.BindingPipe = BindingPipe;
    var LiteralPrimitive = /** @class */ (function (_super) {
        tslib_1.__extends(LiteralPrimitive, _super);
        function LiteralPrimitive(span, sourceSpan, value) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.value = value;
            return _this;
        }
        LiteralPrimitive.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralPrimitive(this, context);
        };
        return LiteralPrimitive;
    }(AST));
    exports.LiteralPrimitive = LiteralPrimitive;
    var LiteralArray = /** @class */ (function (_super) {
        tslib_1.__extends(LiteralArray, _super);
        function LiteralArray(span, sourceSpan, expressions) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.expressions = expressions;
            return _this;
        }
        LiteralArray.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralArray(this, context);
        };
        return LiteralArray;
    }(AST));
    exports.LiteralArray = LiteralArray;
    var LiteralMap = /** @class */ (function (_super) {
        tslib_1.__extends(LiteralMap, _super);
        function LiteralMap(span, sourceSpan, keys, values) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.keys = keys;
            _this.values = values;
            return _this;
        }
        LiteralMap.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralMap(this, context);
        };
        return LiteralMap;
    }(AST));
    exports.LiteralMap = LiteralMap;
    var Interpolation = /** @class */ (function (_super) {
        tslib_1.__extends(Interpolation, _super);
        function Interpolation(span, sourceSpan, strings, expressions) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.strings = strings;
            _this.expressions = expressions;
            return _this;
        }
        Interpolation.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitInterpolation(this, context);
        };
        return Interpolation;
    }(AST));
    exports.Interpolation = Interpolation;
    var Binary = /** @class */ (function (_super) {
        tslib_1.__extends(Binary, _super);
        function Binary(span, sourceSpan, operation, left, right) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.operation = operation;
            _this.left = left;
            _this.right = right;
            return _this;
        }
        Binary.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitBinary(this, context);
        };
        return Binary;
    }(AST));
    exports.Binary = Binary;
    var PrefixNot = /** @class */ (function (_super) {
        tslib_1.__extends(PrefixNot, _super);
        function PrefixNot(span, sourceSpan, expression) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.expression = expression;
            return _this;
        }
        PrefixNot.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPrefixNot(this, context);
        };
        return PrefixNot;
    }(AST));
    exports.PrefixNot = PrefixNot;
    var NonNullAssert = /** @class */ (function (_super) {
        tslib_1.__extends(NonNullAssert, _super);
        function NonNullAssert(span, sourceSpan, expression) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.expression = expression;
            return _this;
        }
        NonNullAssert.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitNonNullAssert(this, context);
        };
        return NonNullAssert;
    }(AST));
    exports.NonNullAssert = NonNullAssert;
    var MethodCall = /** @class */ (function (_super) {
        tslib_1.__extends(MethodCall, _super);
        function MethodCall(span, sourceSpan, nameSpan, receiver, name, args) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.receiver = receiver;
            _this.name = name;
            _this.args = args;
            return _this;
        }
        MethodCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitMethodCall(this, context);
        };
        return MethodCall;
    }(ASTWithName));
    exports.MethodCall = MethodCall;
    var SafeMethodCall = /** @class */ (function (_super) {
        tslib_1.__extends(SafeMethodCall, _super);
        function SafeMethodCall(span, sourceSpan, nameSpan, receiver, name, args) {
            var _this = _super.call(this, span, sourceSpan, nameSpan) || this;
            _this.receiver = receiver;
            _this.name = name;
            _this.args = args;
            return _this;
        }
        SafeMethodCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitSafeMethodCall(this, context);
        };
        return SafeMethodCall;
    }(ASTWithName));
    exports.SafeMethodCall = SafeMethodCall;
    var FunctionCall = /** @class */ (function (_super) {
        tslib_1.__extends(FunctionCall, _super);
        function FunctionCall(span, sourceSpan, target, args) {
            var _this = _super.call(this, span, sourceSpan) || this;
            _this.target = target;
            _this.args = args;
            return _this;
        }
        FunctionCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitFunctionCall(this, context);
        };
        return FunctionCall;
    }(AST));
    exports.FunctionCall = FunctionCall;
    /**
     * Records the absolute position of a text span in a source file, where `start` and `end` are the
     * starting and ending byte offsets, respectively, of the text span in a source file.
     */
    var AbsoluteSourceSpan = /** @class */ (function () {
        function AbsoluteSourceSpan(start, end) {
            this.start = start;
            this.end = end;
        }
        return AbsoluteSourceSpan;
    }());
    exports.AbsoluteSourceSpan = AbsoluteSourceSpan;
    var ASTWithSource = /** @class */ (function (_super) {
        tslib_1.__extends(ASTWithSource, _super);
        function ASTWithSource(ast, source, location, absoluteOffset, errors) {
            var _this = _super.call(this, new ParseSpan(0, source === null ? 0 : source.length), new AbsoluteSourceSpan(absoluteOffset, source === null ? absoluteOffset : absoluteOffset + source.length)) || this;
            _this.ast = ast;
            _this.source = source;
            _this.location = location;
            _this.errors = errors;
            return _this;
        }
        ASTWithSource.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            if (visitor.visitASTWithSource) {
                return visitor.visitASTWithSource(this, context);
            }
            return this.ast.visit(visitor, context);
        };
        ASTWithSource.prototype.toString = function () {
            return this.source + " in " + this.location;
        };
        return ASTWithSource;
    }(AST));
    exports.ASTWithSource = ASTWithSource;
    var VariableBinding = /** @class */ (function () {
        /**
         * @param sourceSpan entire span of the binding.
         * @param key name of the LHS along with its span.
         * @param value optional value for the RHS along with its span.
         */
        function VariableBinding(sourceSpan, key, value) {
            this.sourceSpan = sourceSpan;
            this.key = key;
            this.value = value;
        }
        return VariableBinding;
    }());
    exports.VariableBinding = VariableBinding;
    var ExpressionBinding = /** @class */ (function () {
        /**
         * @param sourceSpan entire span of the binding.
         * @param key binding name, like ngForOf, ngForTrackBy, ngIf, along with its
         * span. Note that the length of the span may not be the same as
         * `key.source.length`. For example,
         * 1. key.source = ngFor, key.span is for "ngFor"
         * 2. key.source = ngForOf, key.span is for "of"
         * 3. key.source = ngForTrackBy, key.span is for "trackBy"
         * @param value optional expression for the RHS.
         */
        function ExpressionBinding(sourceSpan, key, value) {
            this.sourceSpan = sourceSpan;
            this.key = key;
            this.value = value;
        }
        return ExpressionBinding;
    }());
    exports.ExpressionBinding = ExpressionBinding;
    var RecursiveAstVisitor = /** @class */ (function () {
        function RecursiveAstVisitor() {
        }
        RecursiveAstVisitor.prototype.visit = function (ast, context) {
            // The default implementation just visits every node.
            // Classes that extend RecursiveAstVisitor should override this function
            // to selectively visit the specified node.
            ast.visit(this, context);
        };
        RecursiveAstVisitor.prototype.visitBinary = function (ast, context) {
            this.visit(ast.left, context);
            this.visit(ast.right, context);
        };
        RecursiveAstVisitor.prototype.visitChain = function (ast, context) {
            this.visitAll(ast.expressions, context);
        };
        RecursiveAstVisitor.prototype.visitConditional = function (ast, context) {
            this.visit(ast.condition, context);
            this.visit(ast.trueExp, context);
            this.visit(ast.falseExp, context);
        };
        RecursiveAstVisitor.prototype.visitPipe = function (ast, context) {
            this.visit(ast.exp, context);
            this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitFunctionCall = function (ast, context) {
            if (ast.target) {
                this.visit(ast.target, context);
            }
            this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitImplicitReceiver = function (ast, context) { };
        RecursiveAstVisitor.prototype.visitInterpolation = function (ast, context) {
            this.visitAll(ast.expressions, context);
        };
        RecursiveAstVisitor.prototype.visitKeyedRead = function (ast, context) {
            this.visit(ast.obj, context);
            this.visit(ast.key, context);
        };
        RecursiveAstVisitor.prototype.visitKeyedWrite = function (ast, context) {
            this.visit(ast.obj, context);
            this.visit(ast.key, context);
            this.visit(ast.value, context);
        };
        RecursiveAstVisitor.prototype.visitLiteralArray = function (ast, context) {
            this.visitAll(ast.expressions, context);
        };
        RecursiveAstVisitor.prototype.visitLiteralMap = function (ast, context) {
            this.visitAll(ast.values, context);
        };
        RecursiveAstVisitor.prototype.visitLiteralPrimitive = function (ast, context) { };
        RecursiveAstVisitor.prototype.visitMethodCall = function (ast, context) {
            this.visit(ast.receiver, context);
            this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitPrefixNot = function (ast, context) {
            this.visit(ast.expression, context);
        };
        RecursiveAstVisitor.prototype.visitNonNullAssert = function (ast, context) {
            this.visit(ast.expression, context);
        };
        RecursiveAstVisitor.prototype.visitPropertyRead = function (ast, context) {
            this.visit(ast.receiver, context);
        };
        RecursiveAstVisitor.prototype.visitPropertyWrite = function (ast, context) {
            this.visit(ast.receiver, context);
            this.visit(ast.value, context);
        };
        RecursiveAstVisitor.prototype.visitSafePropertyRead = function (ast, context) {
            this.visit(ast.receiver, context);
        };
        RecursiveAstVisitor.prototype.visitSafeMethodCall = function (ast, context) {
            this.visit(ast.receiver, context);
            this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitQuote = function (ast, context) { };
        // This is not part of the AstVisitor interface, just a helper method
        RecursiveAstVisitor.prototype.visitAll = function (asts, context) {
            var e_1, _a;
            try {
                for (var asts_1 = tslib_1.__values(asts), asts_1_1 = asts_1.next(); !asts_1_1.done; asts_1_1 = asts_1.next()) {
                    var ast = asts_1_1.value;
                    this.visit(ast, context);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (asts_1_1 && !asts_1_1.done && (_a = asts_1.return)) _a.call(asts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return RecursiveAstVisitor;
    }());
    exports.RecursiveAstVisitor = RecursiveAstVisitor;
    var AstTransformer = /** @class */ (function () {
        function AstTransformer() {
        }
        AstTransformer.prototype.visitImplicitReceiver = function (ast, context) {
            return ast;
        };
        AstTransformer.prototype.visitInterpolation = function (ast, context) {
            return new Interpolation(ast.span, ast.sourceSpan, ast.strings, this.visitAll(ast.expressions));
        };
        AstTransformer.prototype.visitLiteralPrimitive = function (ast, context) {
            return new LiteralPrimitive(ast.span, ast.sourceSpan, ast.value);
        };
        AstTransformer.prototype.visitPropertyRead = function (ast, context) {
            return new PropertyRead(ast.span, ast.sourceSpan, ast.nameSpan, ast.receiver.visit(this), ast.name);
        };
        AstTransformer.prototype.visitPropertyWrite = function (ast, context) {
            return new PropertyWrite(ast.span, ast.sourceSpan, ast.nameSpan, ast.receiver.visit(this), ast.name, ast.value.visit(this));
        };
        AstTransformer.prototype.visitSafePropertyRead = function (ast, context) {
            return new SafePropertyRead(ast.span, ast.sourceSpan, ast.nameSpan, ast.receiver.visit(this), ast.name);
        };
        AstTransformer.prototype.visitMethodCall = function (ast, context) {
            return new MethodCall(ast.span, ast.sourceSpan, ast.nameSpan, ast.receiver.visit(this), ast.name, this.visitAll(ast.args));
        };
        AstTransformer.prototype.visitSafeMethodCall = function (ast, context) {
            return new SafeMethodCall(ast.span, ast.sourceSpan, ast.nameSpan, ast.receiver.visit(this), ast.name, this.visitAll(ast.args));
        };
        AstTransformer.prototype.visitFunctionCall = function (ast, context) {
            return new FunctionCall(ast.span, ast.sourceSpan, ast.target.visit(this), this.visitAll(ast.args));
        };
        AstTransformer.prototype.visitLiteralArray = function (ast, context) {
            return new LiteralArray(ast.span, ast.sourceSpan, this.visitAll(ast.expressions));
        };
        AstTransformer.prototype.visitLiteralMap = function (ast, context) {
            return new LiteralMap(ast.span, ast.sourceSpan, ast.keys, this.visitAll(ast.values));
        };
        AstTransformer.prototype.visitBinary = function (ast, context) {
            return new Binary(ast.span, ast.sourceSpan, ast.operation, ast.left.visit(this), ast.right.visit(this));
        };
        AstTransformer.prototype.visitPrefixNot = function (ast, context) {
            return new PrefixNot(ast.span, ast.sourceSpan, ast.expression.visit(this));
        };
        AstTransformer.prototype.visitNonNullAssert = function (ast, context) {
            return new NonNullAssert(ast.span, ast.sourceSpan, ast.expression.visit(this));
        };
        AstTransformer.prototype.visitConditional = function (ast, context) {
            return new Conditional(ast.span, ast.sourceSpan, ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
        };
        AstTransformer.prototype.visitPipe = function (ast, context) {
            return new BindingPipe(ast.span, ast.sourceSpan, ast.exp.visit(this), ast.name, this.visitAll(ast.args), ast.nameSpan);
        };
        AstTransformer.prototype.visitKeyedRead = function (ast, context) {
            return new KeyedRead(ast.span, ast.sourceSpan, ast.obj.visit(this), ast.key.visit(this));
        };
        AstTransformer.prototype.visitKeyedWrite = function (ast, context) {
            return new KeyedWrite(ast.span, ast.sourceSpan, ast.obj.visit(this), ast.key.visit(this), ast.value.visit(this));
        };
        AstTransformer.prototype.visitAll = function (asts) {
            var res = [];
            for (var i = 0; i < asts.length; ++i) {
                res[i] = asts[i].visit(this);
            }
            return res;
        };
        AstTransformer.prototype.visitChain = function (ast, context) {
            return new Chain(ast.span, ast.sourceSpan, this.visitAll(ast.expressions));
        };
        AstTransformer.prototype.visitQuote = function (ast, context) {
            return new Quote(ast.span, ast.sourceSpan, ast.prefix, ast.uninterpretedExpression, ast.location);
        };
        return AstTransformer;
    }());
    exports.AstTransformer = AstTransformer;
    // A transformer that only creates new nodes if the transformer makes a change or
    // a change is made a child node.
    var AstMemoryEfficientTransformer = /** @class */ (function () {
        function AstMemoryEfficientTransformer() {
        }
        AstMemoryEfficientTransformer.prototype.visitImplicitReceiver = function (ast, context) {
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitInterpolation = function (ast, context) {
            var expressions = this.visitAll(ast.expressions);
            if (expressions !== ast.expressions)
                return new Interpolation(ast.span, ast.sourceSpan, ast.strings, expressions);
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitLiteralPrimitive = function (ast, context) {
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitPropertyRead = function (ast, context) {
            var receiver = ast.receiver.visit(this);
            if (receiver !== ast.receiver) {
                return new PropertyRead(ast.span, ast.sourceSpan, ast.nameSpan, receiver, ast.name);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitPropertyWrite = function (ast, context) {
            var receiver = ast.receiver.visit(this);
            var value = ast.value.visit(this);
            if (receiver !== ast.receiver || value !== ast.value) {
                return new PropertyWrite(ast.span, ast.sourceSpan, ast.nameSpan, receiver, ast.name, value);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitSafePropertyRead = function (ast, context) {
            var receiver = ast.receiver.visit(this);
            if (receiver !== ast.receiver) {
                return new SafePropertyRead(ast.span, ast.sourceSpan, ast.nameSpan, receiver, ast.name);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitMethodCall = function (ast, context) {
            var receiver = ast.receiver.visit(this);
            var args = this.visitAll(ast.args);
            if (receiver !== ast.receiver || args !== ast.args) {
                return new MethodCall(ast.span, ast.sourceSpan, ast.nameSpan, receiver, ast.name, args);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitSafeMethodCall = function (ast, context) {
            var receiver = ast.receiver.visit(this);
            var args = this.visitAll(ast.args);
            if (receiver !== ast.receiver || args !== ast.args) {
                return new SafeMethodCall(ast.span, ast.sourceSpan, ast.nameSpan, receiver, ast.name, args);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitFunctionCall = function (ast, context) {
            var target = ast.target && ast.target.visit(this);
            var args = this.visitAll(ast.args);
            if (target !== ast.target || args !== ast.args) {
                return new FunctionCall(ast.span, ast.sourceSpan, target, args);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitLiteralArray = function (ast, context) {
            var expressions = this.visitAll(ast.expressions);
            if (expressions !== ast.expressions) {
                return new LiteralArray(ast.span, ast.sourceSpan, expressions);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitLiteralMap = function (ast, context) {
            var values = this.visitAll(ast.values);
            if (values !== ast.values) {
                return new LiteralMap(ast.span, ast.sourceSpan, ast.keys, values);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitBinary = function (ast, context) {
            var left = ast.left.visit(this);
            var right = ast.right.visit(this);
            if (left !== ast.left || right !== ast.right) {
                return new Binary(ast.span, ast.sourceSpan, ast.operation, left, right);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitPrefixNot = function (ast, context) {
            var expression = ast.expression.visit(this);
            if (expression !== ast.expression) {
                return new PrefixNot(ast.span, ast.sourceSpan, expression);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitNonNullAssert = function (ast, context) {
            var expression = ast.expression.visit(this);
            if (expression !== ast.expression) {
                return new NonNullAssert(ast.span, ast.sourceSpan, expression);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitConditional = function (ast, context) {
            var condition = ast.condition.visit(this);
            var trueExp = ast.trueExp.visit(this);
            var falseExp = ast.falseExp.visit(this);
            if (condition !== ast.condition || trueExp !== ast.trueExp || falseExp !== ast.falseExp) {
                return new Conditional(ast.span, ast.sourceSpan, condition, trueExp, falseExp);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitPipe = function (ast, context) {
            var exp = ast.exp.visit(this);
            var args = this.visitAll(ast.args);
            if (exp !== ast.exp || args !== ast.args) {
                return new BindingPipe(ast.span, ast.sourceSpan, exp, ast.name, args, ast.nameSpan);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitKeyedRead = function (ast, context) {
            var obj = ast.obj.visit(this);
            var key = ast.key.visit(this);
            if (obj !== ast.obj || key !== ast.key) {
                return new KeyedRead(ast.span, ast.sourceSpan, obj, key);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitKeyedWrite = function (ast, context) {
            var obj = ast.obj.visit(this);
            var key = ast.key.visit(this);
            var value = ast.value.visit(this);
            if (obj !== ast.obj || key !== ast.key || value !== ast.value) {
                return new KeyedWrite(ast.span, ast.sourceSpan, obj, key, value);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitAll = function (asts) {
            var res = [];
            var modified = false;
            for (var i = 0; i < asts.length; ++i) {
                var original = asts[i];
                var value = original.visit(this);
                res[i] = value;
                modified = modified || value !== original;
            }
            return modified ? res : asts;
        };
        AstMemoryEfficientTransformer.prototype.visitChain = function (ast, context) {
            var expressions = this.visitAll(ast.expressions);
            if (expressions !== ast.expressions) {
                return new Chain(ast.span, ast.sourceSpan, expressions);
            }
            return ast;
        };
        AstMemoryEfficientTransformer.prototype.visitQuote = function (ast, context) {
            return ast;
        };
        return AstMemoryEfficientTransformer;
    }());
    exports.AstMemoryEfficientTransformer = AstMemoryEfficientTransformer;
    // Bindings
    var ParsedProperty = /** @class */ (function () {
        function ParsedProperty(name, expression, type, sourceSpan, valueSpan) {
            this.name = name;
            this.expression = expression;
            this.type = type;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
            this.isLiteral = this.type === ParsedPropertyType.LITERAL_ATTR;
            this.isAnimation = this.type === ParsedPropertyType.ANIMATION;
        }
        return ParsedProperty;
    }());
    exports.ParsedProperty = ParsedProperty;
    var ParsedPropertyType;
    (function (ParsedPropertyType) {
        ParsedPropertyType[ParsedPropertyType["DEFAULT"] = 0] = "DEFAULT";
        ParsedPropertyType[ParsedPropertyType["LITERAL_ATTR"] = 1] = "LITERAL_ATTR";
        ParsedPropertyType[ParsedPropertyType["ANIMATION"] = 2] = "ANIMATION";
    })(ParsedPropertyType = exports.ParsedPropertyType || (exports.ParsedPropertyType = {}));
    var ParsedEvent = /** @class */ (function () {
        // Regular events have a target
        // Animation events have a phase
        function ParsedEvent(name, targetOrPhase, type, handler, sourceSpan, handlerSpan) {
            this.name = name;
            this.targetOrPhase = targetOrPhase;
            this.type = type;
            this.handler = handler;
            this.sourceSpan = sourceSpan;
            this.handlerSpan = handlerSpan;
        }
        return ParsedEvent;
    }());
    exports.ParsedEvent = ParsedEvent;
    /**
     * ParsedVariable represents a variable declaration in a microsyntax expression.
     */
    var ParsedVariable = /** @class */ (function () {
        function ParsedVariable(name, value, sourceSpan, keySpan, valueSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
            this.keySpan = keySpan;
            this.valueSpan = valueSpan;
        }
        return ParsedVariable;
    }());
    exports.ParsedVariable = ParsedVariable;
    var BoundElementProperty = /** @class */ (function () {
        function BoundElementProperty(name, type, securityContext, value, unit, sourceSpan, valueSpan) {
            this.name = name;
            this.type = type;
            this.securityContext = securityContext;
            this.value = value;
            this.unit = unit;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
        }
        return BoundElementProperty;
    }());
    exports.BoundElementProperty = BoundElementProperty;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2V4cHJlc3Npb25fcGFyc2VyL2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFLSDtRQUVFLHFCQUNJLE9BQWUsRUFBUyxLQUFhLEVBQVMsV0FBbUIsRUFBUyxXQUFpQjtZQUFuRSxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBTTtZQUM3RixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFpQixPQUFPLFNBQUksV0FBVyxVQUFLLEtBQUssYUFBUSxXQUFhLENBQUM7UUFDeEYsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQU5ELElBTUM7SUFOWSxrQ0FBVztJQVF4QjtRQUNFLG1CQUFtQixLQUFhLEVBQVMsR0FBVztZQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFHLENBQUM7UUFDeEQsOEJBQVUsR0FBVixVQUFXLGNBQXNCO1lBQy9CLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBTFksOEJBQVM7SUFPdEI7UUFDRSxhQUNXLElBQWU7UUFDdEI7O1dBRUc7UUFDSSxVQUE4QjtZQUo5QixTQUFJLEdBQUosSUFBSSxDQUFXO1lBSWYsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFBRyxDQUFDO1FBQzdDLG1CQUFLLEdBQUwsVUFBTSxPQUFtQixFQUFFLE9BQW1CO1lBQW5CLHdCQUFBLEVBQUEsY0FBbUI7WUFDNUMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFD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QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtZQUNyRSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFHLENBQUM7UUFDckQscUJBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUxZLHdDQUFjO0lBb0IzQjtRQUNFLDhCQUNXLElBQVksRUFBUyxJQUFpQixFQUFTLGVBQWdDLEVBQy9FLEtBQW9CLEVBQVMsSUFBaUIsRUFBUyxVQUEyQixFQUNsRixTQUEyQjtZQUYzQixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQVMsU0FBSSxHQUFKLElBQUksQ0FBYTtZQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUMvRSxVQUFLLEdBQUwsS0FBSyxDQUFlO1lBQVMsU0FBSSxHQUFKLElBQUksQ0FBYTtZQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO1lBQ2xGLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQUcsQ0FBQztRQUM1QywyQkFBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBTFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXJFcnJvciB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbWVzc2FnZTogc3RyaW5nLCBwdWJsaWMgaW5wdXQ6IHN0cmluZywgcHVibGljIGVyckxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMubWVzc2FnZSA9IGBQYXJzZXIgRXJyb3I6ICR7bWVzc2FnZX0gJHtlcnJMb2NhdGlvbn0gWyR7aW5wdXR9XSBpbiAke2N0eExvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogbnVtYmVyLCBwdWJsaWMgZW5kOiBudW1iZXIpIHt9XG4gIHRvQWJzb2x1dGUoYWJzb2x1dGVPZmZzZXQ6IG51bWJlcik6IEFic29sdXRlU291cmNlU3BhbiB7XG4gICAgcmV0dXJuIG5ldyBBYnNvbHV0ZVNvdXJjZVNwYW4oYWJzb2x1dGVPZmZzZXQgKyB0aGlzLnN0YXJ0LCBhYnNvbHV0ZU9mZnNldCArIHRoaXMuZW5kKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQVNUIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgc3BhbjogUGFyc2VTcGFuLFxuICAgICAgLyoqXG4gICAgICAgKiBBYnNvbHV0ZSBsb2NhdGlvbiBvZiB0aGUgZXhwcmVzc2lvbiBBU1QgaW4gYSBzb3VyY2UgY29kZSBmaWxlLlxuICAgICAgICovXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQVNUJztcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVNUV2l0aE5hbWUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgbmFtZVNwYW46IEFic29sdXRlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIHNvdXJjZVNwYW4pO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHF1b3RlZCBleHByZXNzaW9uIG9mIHRoZSBmb3JtOlxuICpcbiAqIHF1b3RlID0gcHJlZml4IGA6YCB1bmludGVycHJldGVkRXhwcmVzc2lvblxuICogcHJlZml4ID0gaWRlbnRpZmllclxuICogdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBhcmJpdHJhcnkgc3RyaW5nXG4gKlxuICogQSBxdW90ZWQgZXhwcmVzc2lvbiBpcyBtZWFudCB0byBiZSBwcmUtcHJvY2Vzc2VkIGJ5IGFuIEFTVCB0cmFuc2Zvcm1lciB0aGF0XG4gKiBjb252ZXJ0cyBpdCBpbnRvIGFub3RoZXIgQVNUIHRoYXQgbm8gbG9uZ2VyIGNvbnRhaW5zIHF1b3RlZCBleHByZXNzaW9ucy5cbiAqIEl0IGlzIG1lYW50IHRvIGFsbG93IHRoaXJkLXBhcnR5IGRldmVsb3BlcnMgdG8gZXh0ZW5kIEFuZ3VsYXIgdGVtcGxhdGVcbiAqIGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFRoZSBgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25gIHBhcnQgb2YgdGhlIHF1b3RlIGlzXG4gKiB0aGVyZWZvcmUgbm90IGludGVycHJldGVkIGJ5IHRoZSBBbmd1bGFyJ3Mgb3duIGV4cHJlc3Npb24gcGFyc2VyLlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgcHJlZml4OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgdW5pbnRlcnByZXRlZEV4cHJlc3Npb246IHN0cmluZywgcHVibGljIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBzdXBlcihzcGFuLCBzb3VyY2VTcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFF1b3RlKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdRdW90ZSc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5RXhwciBleHRlbmRzIEFTVCB7XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcGxpY2l0UmVjZWl2ZXIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEltcGxpY2l0UmVjZWl2ZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBleHByZXNzaW9ucyBzZXBhcmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFpbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGFpbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgY29uZGl0aW9uOiBBU1QsIHB1YmxpYyB0cnVlRXhwOiBBU1QsXG4gICAgICBwdWJsaWMgZmFsc2VFeHA6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4sIHNvdXJjZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29uZGl0aW9uYWwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UmVhZCBleHRlbmRzIEFTVFdpdGhOYW1lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBzcGFuOiBQYXJzZVNwYW4sIHNvdXJjZVNwYW46IEFic29sdXRlU291cmNlU3BhbiwgbmFtZVNwYW46IEFic29sdXRlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVdyaXRlIGV4dGVuZHMgQVNUV2l0aE5hbWUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBuYW1lU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlXcml0ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZVByb3BlcnR5UmVhZCBleHRlbmRzIEFTVFdpdGhOYW1lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBzcGFuOiBQYXJzZVNwYW4sIHNvdXJjZVNwYW46IEFic29sdXRlU291cmNlU3BhbiwgbmFtZVNwYW46IEFic29sdXRlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2FmZVByb3BlcnR5UmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5ZWRSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleWVkV3JpdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgb2JqOiBBU1QsIHB1YmxpYyBrZXk6IEFTVCxcbiAgICAgIHB1YmxpYyB2YWx1ZTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFdyaXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUGlwZSBleHRlbmRzIEFTVFdpdGhOYW1lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBzcGFuOiBQYXJzZVNwYW4sIHNvdXJjZVNwYW46IEFic29sdXRlU291cmNlU3BhbiwgcHVibGljIGV4cDogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgcHVibGljIGFyZ3M6IGFueVtdLCBuYW1lU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGlwZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFByaW1pdGl2ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHNwYW4sIHNvdXJjZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbFByaW1pdGl2ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEFycmF5IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuLCBzb3VyY2VTcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxBcnJheSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBMaXRlcmFsTWFwS2V5ID0ge1xuICBrZXk6IHN0cmluZzsgcXVvdGVkOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxNYXAgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMga2V5czogTGl0ZXJhbE1hcEtleVtdLFxuICAgICAgcHVibGljIHZhbHVlczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuLCBzb3VyY2VTcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxNYXAodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRpb24gZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgc3RyaW5nczogYW55W10sXG4gICAgICBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbnRlcnBvbGF0aW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IFBhcnNlU3Bhbiwgc291cmNlU3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmcsIHB1YmxpYyBsZWZ0OiBBU1QsXG4gICAgICBwdWJsaWMgcmlnaHQ6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4sIHNvdXJjZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhOb3QgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHNvdXJjZVNwYW46IEFic29sdXRlU291cmNlU3BhbiwgcHVibGljIGV4cHJlc3Npb246IEFTVCkge1xuICAgIHN1cGVyKHNwYW4sIHNvdXJjZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJlZml4Tm90KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb25OdWxsQXNzZXJ0IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuLCBzb3VyY2VTcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE5vbk51bGxBc3NlcnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZENhbGwgZXh0ZW5kcyBBU1RXaXRoTmFtZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIG5hbWVTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sXG4gICAgICBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZU1ldGhvZENhbGwgZXh0ZW5kcyBBU1RXaXRoTmFtZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIG5hbWVTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sXG4gICAgICBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbmFtZVNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2FmZU1ldGhvZENhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3BhbjogUGFyc2VTcGFuLCBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sIHB1YmxpYyB0YXJnZXQ6IEFTVHxudWxsLFxuICAgICAgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jdGlvbkNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWNvcmRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBhIHRleHQgc3BhbiBpbiBhIHNvdXJjZSBmaWxlLCB3aGVyZSBgc3RhcnRgIGFuZCBgZW5kYCBhcmUgdGhlXG4gKiBzdGFydGluZyBhbmQgZW5kaW5nIGJ5dGUgb2Zmc2V0cywgcmVzcGVjdGl2ZWx5LCBvZiB0aGUgdGV4dCBzcGFuIGluIGEgc291cmNlIGZpbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYnNvbHV0ZVNvdXJjZVNwYW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RhcnQ6IG51bWJlciwgcHVibGljIHJlYWRvbmx5IGVuZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUV2l0aFNvdXJjZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGFzdDogQVNULCBwdWJsaWMgc291cmNlOiBzdHJpbmd8bnVsbCwgcHVibGljIGxvY2F0aW9uOiBzdHJpbmcsIGFic29sdXRlT2Zmc2V0OiBudW1iZXIsXG4gICAgICBwdWJsaWMgZXJyb3JzOiBQYXJzZXJFcnJvcltdKSB7XG4gICAgc3VwZXIoXG4gICAgICAgIG5ldyBQYXJzZVNwYW4oMCwgc291cmNlID09PSBudWxsID8gMCA6IHNvdXJjZS5sZW5ndGgpLFxuICAgICAgICBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKFxuICAgICAgICAgICAgYWJzb2x1dGVPZmZzZXQsIHNvdXJjZSA9PT0gbnVsbCA/IGFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXQgKyBzb3VyY2UubGVuZ3RoKSk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgaWYgKHZpc2l0b3IudmlzaXRBU1RXaXRoU291cmNlKSB7XG4gICAgICByZXR1cm4gdmlzaXRvci52aXNpdEFTVFdpdGhTb3VyY2UodGhpcywgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnNvdXJjZX0gaW4gJHt0aGlzLmxvY2F0aW9ufWA7XG4gIH1cbn1cblxuLyoqXG4gKiBUZW1wbGF0ZUJpbmRpbmcgcmVmZXJzIHRvIGEgcGFydGljdWxhciBrZXktdmFsdWUgcGFpciBpbiBhIG1pY3Jvc3ludGF4XG4gKiBleHByZXNzaW9uLiBBIGZldyBleGFtcGxlcyBhcmU6XG4gKlxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLXxcbiAqICAgfCAgICAgZXhwcmVzc2lvbiAgICAgIHwgICAgIGtleSAgICAgIHwgIHZhbHVlICB8IGJpbmRpbmcgdHlwZSB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tfFxuICogICB8IDEuIGxldCBpdGVtICAgICAgICAgfCAgICBpdGVtICAgICAgfCAgbnVsbCAgIHwgICB2YXJpYWJsZSAgIHxcbiAqICAgfCAyLiBvZiBpdGVtcyAgICAgICAgIHwgICBuZ0Zvck9mICAgIHwgIGl0ZW1zICB8ICBleHByZXNzaW9uICB8XG4gKiAgIHwgMy4gbGV0IHggPSB5ICAgICAgICB8ICAgICAgeCAgICAgICB8ICAgIHkgICAgfCAgIHZhcmlhYmxlICAgfFxuICogICB8IDQuIGluZGV4IGFzIGkgICAgICAgfCAgICAgIGkgICAgICAgfCAgaW5kZXggIHwgICB2YXJpYWJsZSAgIHxcbiAqICAgfCA1LiB0cmFja0J5OiBmdW5jICAgIHwgbmdGb3JUcmFja0J5IHwgICBmdW5jICB8ICBleHByZXNzaW9uICB8XG4gKiAgIHwgNi4gKm5nSWY9XCJjb25kXCIgICAgIHwgICAgIG5nSWYgICAgIHwgICBjb25kICB8ICBleHByZXNzaW9uICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tfFxuICpcbiAqICg2KSBpcyBhIG5vdGFibGUgZXhjZXB0aW9uIGJlY2F1c2UgaXQgaXMgYSBiaW5kaW5nIGZyb20gdGhlIHRlbXBsYXRlIGtleSBpblxuICogdGhlIExIUyBvZiBhIEhUTUwgYXR0cmlidXRlIHRvIHRoZSBleHByZXNzaW9uIGluIHRoZSBSSFMuIEFsbCBvdGhlciBiaW5kaW5nc1xuICogaW4gdGhlIGV4YW1wbGUgYWJvdmUgYXJlIGRlcml2ZWQgc29sZWx5IGZyb20gdGhlIFJIUy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVCaW5kaW5nID0gVmFyaWFibGVCaW5kaW5nfEV4cHJlc3Npb25CaW5kaW5nO1xuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVCaW5kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBzb3VyY2VTcGFuIGVudGlyZSBzcGFuIG9mIHRoZSBiaW5kaW5nLlxuICAgKiBAcGFyYW0ga2V5IG5hbWUgb2YgdGhlIExIUyBhbG9uZyB3aXRoIGl0cyBzcGFuLlxuICAgKiBAcGFyYW0gdmFsdWUgb3B0aW9uYWwgdmFsdWUgZm9yIHRoZSBSSFMgYWxvbmcgd2l0aCBpdHMgc3Bhbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHJlYWRvbmx5IHNvdXJjZVNwYW46IEFic29sdXRlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyByZWFkb25seSBrZXk6IFRlbXBsYXRlQmluZGluZ0lkZW50aWZpZXIsXG4gICAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IFRlbXBsYXRlQmluZGluZ0lkZW50aWZpZXJ8bnVsbCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25CaW5kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBzb3VyY2VTcGFuIGVudGlyZSBzcGFuIG9mIHRoZSBiaW5kaW5nLlxuICAgKiBAcGFyYW0ga2V5IGJpbmRpbmcgbmFtZSwgbGlrZSBuZ0Zvck9mLCBuZ0ZvclRyYWNrQnksIG5nSWYsIGFsb25nIHdpdGggaXRzXG4gICAqIHNwYW4uIE5vdGUgdGhhdCB0aGUgbGVuZ3RoIG9mIHRoZSBzcGFuIG1heSBub3QgYmUgdGhlIHNhbWUgYXNcbiAgICogYGtleS5zb3VyY2UubGVuZ3RoYC4gRm9yIGV4YW1wbGUsXG4gICAqIDEuIGtleS5zb3VyY2UgPSBuZ0Zvciwga2V5LnNwYW4gaXMgZm9yIFwibmdGb3JcIlxuICAgKiAyLiBrZXkuc291cmNlID0gbmdGb3JPZiwga2V5LnNwYW4gaXMgZm9yIFwib2ZcIlxuICAgKiAzLiBrZXkuc291cmNlID0gbmdGb3JUcmFja0J5LCBrZXkuc3BhbiBpcyBmb3IgXCJ0cmFja0J5XCJcbiAgICogQHBhcmFtIHZhbHVlIG9wdGlvbmFsIGV4cHJlc3Npb24gZm9yIHRoZSBSSFMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyByZWFkb25seSBzb3VyY2VTcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW4sXG4gICAgICBwdWJsaWMgcmVhZG9ubHkga2V5OiBUZW1wbGF0ZUJpbmRpbmdJZGVudGlmaWVyLCBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IEFTVFdpdGhTb3VyY2V8bnVsbCkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUJpbmRpbmdJZGVudGlmaWVyIHtcbiAgc291cmNlOiBzdHJpbmc7XG4gIHNwYW46IEFic29sdXRlU291cmNlU3Bhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QVNUV2l0aFNvdXJjZT8oYXN0OiBBU1RXaXRoU291cmNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIG9wdGlvbmFsbHkgZGVmaW5lZCB0byBhbGxvdyBjbGFzc2VzIHRoYXQgaW1wbGVtZW50IHRoaXNcbiAgICogaW50ZXJmYWNlIHRvIHNlbGVjdGl2ZWx5IGRlY2lkZSBpZiB0aGUgc3BlY2lmaWVkIGBhc3RgIHNob3VsZCBiZSB2aXNpdGVkLlxuICAgKiBAcGFyYW0gYXN0IG5vZGUgdG8gdmlzaXRcbiAgICogQHBhcmFtIGNvbnRleHQgY29udGV4dCB0aGF0IGdldHMgcGFzc2VkIHRvIHRoZSBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gICAqL1xuICB2aXNpdD8oYXN0OiBBU1QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN1cnNpdmVBc3RWaXNpdG9yIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHZpc2l0KGFzdDogQVNULCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICAvLyBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBqdXN0IHZpc2l0cyBldmVyeSBub2RlLlxuICAgIC8vIENsYXNzZXMgdGhhdCBleHRlbmQgUmVjdXJzaXZlQXN0VmlzaXRvciBzaG91bGQgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvblxuICAgIC8vIHRvIHNlbGVjdGl2ZWx5IHZpc2l0IHRoZSBzcGVjaWZpZWQgbm9kZS5cbiAgICBhc3QudmlzaXQodGhpcywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QubGVmdCwgY29udGV4dCk7XG4gICAgdGhpcy52aXNpdChhc3QucmlnaHQsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXQoYXN0LmNvbmRpdGlvbiwgY29udGV4dCk7XG4gICAgdGhpcy52aXNpdChhc3QudHJ1ZUV4cCwgY29udGV4dCk7XG4gICAgdGhpcy52aXNpdChhc3QuZmFsc2VFeHAsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXQoYXN0LmV4cCwgY29udGV4dCk7XG4gICAgdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKGFzdC50YXJnZXQpIHtcbiAgICAgIHRoaXMudmlzaXQoYXN0LnRhcmdldCwgY29udGV4dCk7XG4gICAgfVxuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0KGFzdC5vYmosIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXQoYXN0LmtleSwgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0KGFzdC5vYmosIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXQoYXN0LmtleSwgY29udGV4dCk7XG4gICAgdGhpcy52aXNpdChhc3QudmFsdWUsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogYW55IHt9XG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QucmVjZWl2ZXIsIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXQoYXN0LmV4cHJlc3Npb24sIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QuZXhwcmVzc2lvbiwgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QucmVjZWl2ZXIsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QucmVjZWl2ZXIsIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXQoYXN0LnZhbHVlLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXQoYXN0LnJlY2VpdmVyLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdChhc3QucmVjZWl2ZXIsIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogYW55IHt9XG4gIC8vIFRoaXMgaXMgbm90IHBhcnQgb2YgdGhlIEFzdFZpc2l0b3IgaW50ZXJmYWNlLCBqdXN0IGEgaGVscGVyIG1ldGhvZFxuICB2aXNpdEFsbChhc3RzOiBBU1RbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBmb3IgKGNvbnN0IGFzdCBvZiBhc3RzKSB7XG4gICAgICB0aGlzLnZpc2l0KGFzdCwgY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3RUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgSW50ZXJwb2xhdGlvbihhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5zdHJpbmdzLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUoYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVJlYWQoXG4gICAgICAgIGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0Lm5hbWVTcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKFxuICAgICAgICBhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5uYW1lU3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSxcbiAgICAgICAgYXN0LnZhbHVlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBTYWZlUHJvcGVydHlSZWFkKFxuICAgICAgICBhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5uYW1lU3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSk7XG4gIH1cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTWV0aG9kQ2FsbChcbiAgICAgICAgYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3QubmFtZVNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsXG4gICAgICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVNZXRob2RDYWxsKFxuICAgICAgICBhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5uYW1lU3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSxcbiAgICAgICAgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbkNhbGwoXG4gICAgICAgIGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LnRhcmdldCEudmlzaXQodGhpcyksIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTWFwKGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LmtleXMsIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcykpO1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCaW5hcnkoXG4gICAgICAgIGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0Lm9wZXJhdGlvbiwgYXN0LmxlZnQudmlzaXQodGhpcyksIGFzdC5yaWdodC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByZWZpeE5vdChhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBOb25OdWxsQXNzZXJ0KGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWwoXG4gICAgICAgIGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LmNvbmRpdGlvbi52aXNpdCh0aGlzKSwgYXN0LnRydWVFeHAudmlzaXQodGhpcyksXG4gICAgICAgIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEJpbmRpbmdQaXBlKFxuICAgICAgICBhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5leHAudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSxcbiAgICAgICAgYXN0Lm5hbWVTcGFuKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRSZWFkKGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0Lm9iai52aXNpdCh0aGlzKSwgYXN0LmtleS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRXcml0ZShcbiAgICAgICAgYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICByZXNbaV0gPSBhc3RzW2ldLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ2hhaW4oYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUXVvdGUoXG4gICAgICAgIGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LnByZWZpeCwgYXN0LnVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uLCBhc3QubG9jYXRpb24pO1xuICB9XG59XG5cbi8vIEEgdHJhbnNmb3JtZXIgdGhhdCBvbmx5IGNyZWF0ZXMgbmV3IG5vZGVzIGlmIHRoZSB0cmFuc2Zvcm1lciBtYWtlcyBhIGNoYW5nZSBvclxuLy8gYSBjaGFuZ2UgaXMgbWFkZSBhIGNoaWxkIG5vZGUuXG5leHBvcnQgY2xhc3MgQXN0TWVtb3J5RWZmaWNpZW50VHJhbnNmb3JtZXIgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogSW50ZXJwb2xhdGlvbiB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucyk7XG4gICAgaWYgKGV4cHJlc3Npb25zICE9PSBhc3QuZXhwcmVzc2lvbnMpXG4gICAgICByZXR1cm4gbmV3IEludGVycG9sYXRpb24oYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3Quc3RyaW5ncywgZXhwcmVzc2lvbnMpO1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICBjb25zdCByZWNlaXZlciA9IGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICBpZiAocmVjZWl2ZXIgIT09IGFzdC5yZWNlaXZlcikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3QubmFtZVNwYW4sIHJlY2VpdmVyLCBhc3QubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IHZhbHVlID0gYXN0LnZhbHVlLnZpc2l0KHRoaXMpO1xuICAgIGlmIChyZWNlaXZlciAhPT0gYXN0LnJlY2VpdmVyIHx8IHZhbHVlICE9PSBhc3QudmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvcGVydHlXcml0ZShhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5uYW1lU3BhbiwgcmVjZWl2ZXIsIGFzdC5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGlmIChyZWNlaXZlciAhPT0gYXN0LnJlY2VpdmVyKSB7XG4gICAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhc3QubmFtZVNwYW4sIHJlY2VpdmVyLCBhc3QubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKTtcbiAgICBpZiAocmVjZWl2ZXIgIT09IGFzdC5yZWNlaXZlciB8fCBhcmdzICE9PSBhc3QuYXJncykge1xuICAgICAgcmV0dXJuIG5ldyBNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0Lm5hbWVTcGFuLCByZWNlaXZlciwgYXN0Lm5hbWUsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKTtcbiAgICBpZiAocmVjZWl2ZXIgIT09IGFzdC5yZWNlaXZlciB8fCBhcmdzICE9PSBhc3QuYXJncykge1xuICAgICAgcmV0dXJuIG5ldyBTYWZlTWV0aG9kQ2FsbChhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5uYW1lU3BhbiwgcmVjZWl2ZXIsIGFzdC5uYW1lLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IHRhcmdldCA9IGFzdC50YXJnZXQgJiYgYXN0LnRhcmdldC52aXNpdCh0aGlzKTtcbiAgICBjb25zdCBhcmdzID0gdGhpcy52aXNpdEFsbChhc3QuYXJncyk7XG4gICAgaWYgKHRhcmdldCAhPT0gYXN0LnRhcmdldCB8fCBhcmdzICE9PSBhc3QuYXJncykge1xuICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbkNhbGwoYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCB0YXJnZXQsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucyk7XG4gICAgaWYgKGV4cHJlc3Npb25zICE9PSBhc3QuZXhwcmVzc2lvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgZXhwcmVzc2lvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpO1xuICAgIGlmICh2YWx1ZXMgIT09IGFzdC52YWx1ZXMpIHtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE1hcChhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5rZXlzLCB2YWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgY29uc3QgbGVmdCA9IGFzdC5sZWZ0LnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IHJpZ2h0ID0gYXN0LnJpZ2h0LnZpc2l0KHRoaXMpO1xuICAgIGlmIChsZWZ0ICE9PSBhc3QubGVmdCB8fCByaWdodCAhPT0gYXN0LnJpZ2h0KSB7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeShhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5vcGVyYXRpb24sIGxlZnQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gYXN0LmV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBuZXcgUHJlZml4Tm90KGFzdC5zcGFuLCBhc3Quc291cmNlU3BhbiwgZXhwcmVzc2lvbik7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gYXN0LmV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBuZXcgTm9uTnVsbEFzc2VydChhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGV4cHJlc3Npb24pO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGFzdC5jb25kaXRpb24udmlzaXQodGhpcyk7XG4gICAgY29uc3QgdHJ1ZUV4cCA9IGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IGZhbHNlRXhwID0gYXN0LmZhbHNlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGlmIChjb25kaXRpb24gIT09IGFzdC5jb25kaXRpb24gfHwgdHJ1ZUV4cCAhPT0gYXN0LnRydWVFeHAgfHwgZmFsc2VFeHAgIT09IGFzdC5mYWxzZUV4cCkge1xuICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbChhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGNvbmRpdGlvbiwgdHJ1ZUV4cCwgZmFsc2VFeHApO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgY29uc3QgZXhwID0gYXN0LmV4cC52aXNpdCh0aGlzKTtcbiAgICBjb25zdCBhcmdzID0gdGhpcy52aXNpdEFsbChhc3QuYXJncyk7XG4gICAgaWYgKGV4cCAhPT0gYXN0LmV4cCB8fCBhcmdzICE9PSBhc3QuYXJncykge1xuICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nUGlwZShhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGV4cCwgYXN0Lm5hbWUsIGFyZ3MsIGFzdC5uYW1lU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICBjb25zdCBvYmogPSBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IGtleSA9IGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgaWYgKG9iaiAhPT0gYXN0Lm9iaiB8fCBrZXkgIT09IGFzdC5rZXkpIHtcbiAgICAgIHJldHVybiBuZXcgS2V5ZWRSZWFkKGFzdC5zcGFuLCBhc3Quc291cmNlU3Bhbiwgb2JqLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICBjb25zdCBvYmogPSBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGNvbnN0IGtleSA9IGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgY29uc3QgdmFsdWUgPSBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgaWYgKG9iaiAhPT0gYXN0Lm9iaiB8fCBrZXkgIT09IGFzdC5rZXkgfHwgdmFsdWUgIT09IGFzdC52YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBLZXllZFdyaXRlKGFzdC5zcGFuLCBhc3Quc291cmNlU3Bhbiwgb2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIHZpc2l0QWxsKGFzdHM6IGFueVtdKTogYW55W10ge1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgIGxldCBtb2RpZmllZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qgb3JpZ2luYWwgPSBhc3RzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSBvcmlnaW5hbC52aXNpdCh0aGlzKTtcbiAgICAgIHJlc1tpXSA9IHZhbHVlO1xuICAgICAgbW9kaWZpZWQgPSBtb2RpZmllZCB8fCB2YWx1ZSAhPT0gb3JpZ2luYWw7XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZCA/IHJlcyA6IGFzdHM7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucyk7XG4gICAgaWYgKGV4cHJlc3Npb25zICE9PSBhc3QuZXhwcmVzc2lvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgQ2hhaW4oYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBleHByZXNzaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxufVxuXG4vLyBCaW5kaW5nc1xuXG5leHBvcnQgY2xhc3MgUGFyc2VkUHJvcGVydHkge1xuICBwdWJsaWMgcmVhZG9ubHkgaXNMaXRlcmFsOiBib29sZWFuO1xuICBwdWJsaWMgcmVhZG9ubHkgaXNBbmltYXRpb246IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZXhwcmVzc2lvbjogQVNUV2l0aFNvdXJjZSwgcHVibGljIHR5cGU6IFBhcnNlZFByb3BlcnR5VHlwZSxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICB0aGlzLmlzTGl0ZXJhbCA9IHRoaXMudHlwZSA9PT0gUGFyc2VkUHJvcGVydHlUeXBlLkxJVEVSQUxfQVRUUjtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gdGhpcy50eXBlID09PSBQYXJzZWRQcm9wZXJ0eVR5cGUuQU5JTUFUSU9OO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFBhcnNlZFByb3BlcnR5VHlwZSB7XG4gIERFRkFVTFQsXG4gIExJVEVSQUxfQVRUUixcbiAgQU5JTUFUSU9OXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFBhcnNlZEV2ZW50VHlwZSB7XG4gIC8vIERPTSBvciBEaXJlY3RpdmUgZXZlbnRcbiAgUmVndWxhcixcbiAgLy8gQW5pbWF0aW9uIHNwZWNpZmljIGV2ZW50XG4gIEFuaW1hdGlvbixcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlZEV2ZW50IHtcbiAgLy8gUmVndWxhciBldmVudHMgaGF2ZSBhIHRhcmdldFxuICAvLyBBbmltYXRpb24gZXZlbnRzIGhhdmUgYSBwaGFzZVxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0YXJnZXRPclBoYXNlOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBQYXJzZWRFdmVudFR5cGUsXG4gICAgICBwdWJsaWMgaGFuZGxlcjogQVNUV2l0aFNvdXJjZSwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyBoYW5kbGVyU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxufVxuXG4vKipcbiAqIFBhcnNlZFZhcmlhYmxlIHJlcHJlc2VudHMgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiBhIG1pY3Jvc3ludGF4IGV4cHJlc3Npb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJzZWRWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZywgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcmVhZG9ubHkgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgcmVhZG9ubHkga2V5U3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIHJlYWRvbmx5IHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3Bhbikge31cbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQmluZGluZ1R5cGUge1xuICAvLyBBIHJlZ3VsYXIgYmluZGluZyB0byBhIHByb3BlcnR5IChlLmcuIGBbcHJvcGVydHldPVwiZXhwcmVzc2lvblwiYCkuXG4gIFByb3BlcnR5LFxuICAvLyBBIGJpbmRpbmcgdG8gYW4gZWxlbWVudCBhdHRyaWJ1dGUgKGUuZy4gYFthdHRyLm5hbWVdPVwiZXhwcmVzc2lvblwiYCkuXG4gIEF0dHJpYnV0ZSxcbiAgLy8gQSBiaW5kaW5nIHRvIGEgQ1NTIGNsYXNzIChlLmcuIGBbY2xhc3MubmFtZV09XCJjb25kaXRpb25cImApLlxuICBDbGFzcyxcbiAgLy8gQSBiaW5kaW5nIHRvIGEgc3R5bGUgcnVsZSAoZS5nLiBgW3N0eWxlLnJ1bGVdPVwiZXhwcmVzc2lvblwiYCkuXG4gIFN0eWxlLFxuICAvLyBBIGJpbmRpbmcgdG8gYW4gYW5pbWF0aW9uIHJlZmVyZW5jZSAoZS5nLiBgW2FuaW1hdGUua2V5XT1cImV4cHJlc3Npb25cImApLlxuICBBbmltYXRpb24sXG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZEVsZW1lbnRQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHR5cGU6IEJpbmRpbmdUeXBlLCBwdWJsaWMgc2VjdXJpdHlDb250ZXh0OiBTZWN1cml0eUNvbnRleHQsXG4gICAgICBwdWJsaWMgdmFsdWU6IEFTVFdpdGhTb3VyY2UsIHB1YmxpYyB1bml0OiBzdHJpbmd8bnVsbCwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4pIHt9XG59XG4iXX0=