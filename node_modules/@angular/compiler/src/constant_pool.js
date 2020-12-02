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
        define("@angular/compiler/src/constant_pool", ["require", "exports", "tslib", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var o = require("@angular/compiler/src/output/output_ast");
    var util_1 = require("@angular/compiler/src/util");
    var CONSTANT_PREFIX = '_c';
    /**
     * `ConstantPool` tries to reuse literal factories when two or more literals are identical.
     * We determine whether literals are identical by creating a key out of their AST using the
     * `KeyVisitor`. This constant is used to replace dynamic expressions which can't be safely
     * converted into a key. E.g. given an expression `{foo: bar()}`, since we don't know what
     * the result of `bar` will be, we create a key that looks like `{foo: <unknown>}`. Note
     * that we use a variable, rather than something like `null` in order to avoid collisions.
     */
    var UNKNOWN_VALUE_KEY = o.variable('<unknown>');
    /**
     * Context to use when producing a key.
     *
     * This ensures we see the constant not the reference variable when producing
     * a key.
     */
    var KEY_CONTEXT = {};
    /**
     * A node that is a place-holder that allows the node to be replaced when the actual
     * node is known.
     *
     * This allows the constant pool to change an expression from a direct reference to
     * a constant to a shared constant. It returns a fix-up node that is later allowed to
     * change the referenced expression.
     */
    var FixupExpression = /** @class */ (function (_super) {
        tslib_1.__extends(FixupExpression, _super);
        function FixupExpression(resolved) {
            var _this = _super.call(this, resolved.type) || this;
            _this.resolved = resolved;
            _this.original = resolved;
            return _this;
        }
        FixupExpression.prototype.visitExpression = function (visitor, context) {
            if (context === KEY_CONTEXT) {
                // When producing a key we want to traverse the constant not the
                // variable used to refer to it.
                return this.original.visitExpression(visitor, context);
            }
            else {
                return this.resolved.visitExpression(visitor, context);
            }
        };
        FixupExpression.prototype.isEquivalent = function (e) {
            return e instanceof FixupExpression && this.resolved.isEquivalent(e.resolved);
        };
        FixupExpression.prototype.isConstant = function () {
            return true;
        };
        FixupExpression.prototype.fixup = function (expression) {
            this.resolved = expression;
            this.shared = true;
        };
        return FixupExpression;
    }(o.Expression));
    /**
     * A constant pool allows a code emitter to share constant in an output context.
     *
     * The constant pool also supports sharing access to ivy definitions references.
     */
    var ConstantPool = /** @class */ (function () {
        function ConstantPool() {
            this.statements = [];
            this.literals = new Map();
            this.literalFactories = new Map();
            this.injectorDefinitions = new Map();
            this.directiveDefinitions = new Map();
            this.componentDefinitions = new Map();
            this.pipeDefinitions = new Map();
            this.nextNameIndex = 0;
        }
        ConstantPool.prototype.getConstLiteral = function (literal, forceShared) {
            if (literal instanceof o.LiteralExpr || literal instanceof FixupExpression) {
                // Do no put simple literals into the constant pool or try to produce a constant for a
                // reference to a constant.
                return literal;
            }
            var key = this.keyOf(literal);
            var fixup = this.literals.get(key);
            var newValue = false;
            if (!fixup) {
                fixup = new FixupExpression(literal);
                this.literals.set(key, fixup);
                newValue = true;
            }
            if ((!newValue && !fixup.shared) || (newValue && forceShared)) {
                // Replace the expression with a variable
                var name_1 = this.freshName();
                this.statements.push(o.variable(name_1).set(literal).toDeclStmt(o.INFERRED_TYPE, [o.StmtModifier.Final]));
                fixup.fixup(o.variable(name_1));
            }
            return fixup;
        };
        ConstantPool.prototype.getDefinition = function (type, kind, ctx, forceShared) {
            if (forceShared === void 0) { forceShared = false; }
            var definitions = this.definitionsOf(kind);
            var fixup = definitions.get(type);
            var newValue = false;
            if (!fixup) {
                var property = this.propertyNameOf(kind);
                fixup = new FixupExpression(ctx.importExpr(type).prop(property));
                definitions.set(type, fixup);
                newValue = true;
            }
            if ((!newValue && !fixup.shared) || (newValue && forceShared)) {
                var name_2 = this.freshName();
                this.statements.push(o.variable(name_2).set(fixup.resolved).toDeclStmt(o.INFERRED_TYPE, [o.StmtModifier.Final]));
                fixup.fixup(o.variable(name_2));
            }
            return fixup;
        };
        ConstantPool.prototype.getLiteralFactory = function (literal) {
            // Create a pure function that builds an array of a mix of constant and variable expressions
            if (literal instanceof o.LiteralArrayExpr) {
                var argumentsForKey = literal.entries.map(function (e) { return e.isConstant() ? e : UNKNOWN_VALUE_KEY; });
                var key = this.keyOf(o.literalArr(argumentsForKey));
                return this._getLiteralFactory(key, literal.entries, function (entries) { return o.literalArr(entries); });
            }
            else {
                var expressionForKey = o.literalMap(literal.entries.map(function (e) { return ({
                    key: e.key,
                    value: e.value.isConstant() ? e.value : UNKNOWN_VALUE_KEY,
                    quoted: e.quoted
                }); }));
                var key = this.keyOf(expressionForKey);
                return this._getLiteralFactory(key, literal.entries.map(function (e) { return e.value; }), function (entries) { return o.literalMap(entries.map(function (value, index) { return ({
                    key: literal.entries[index].key,
                    value: value,
                    quoted: literal.entries[index].quoted
                }); })); });
            }
        };
        ConstantPool.prototype._getLiteralFactory = function (key, values, resultMap) {
            var _this = this;
            var literalFactory = this.literalFactories.get(key);
            var literalFactoryArguments = values.filter((function (e) { return !e.isConstant(); }));
            if (!literalFactory) {
                var resultExpressions = values.map(function (e, index) { return e.isConstant() ? _this.getConstLiteral(e, true) : o.variable("a" + index); });
                var parameters = resultExpressions.filter(isVariable).map(function (e) { return new o.FnParam(e.name, o.DYNAMIC_TYPE); });
                var pureFunctionDeclaration = o.fn(parameters, [new o.ReturnStatement(resultMap(resultExpressions))], o.INFERRED_TYPE);
                var name_3 = this.freshName();
                this.statements.push(o.variable(name_3).set(pureFunctionDeclaration).toDeclStmt(o.INFERRED_TYPE, [
                    o.StmtModifier.Final
                ]));
                literalFactory = o.variable(name_3);
                this.literalFactories.set(key, literalFactory);
            }
            return { literalFactory: literalFactory, literalFactoryArguments: literalFactoryArguments };
        };
        /**
         * Produce a unique name.
         *
         * The name might be unique among different prefixes if any of the prefixes end in
         * a digit so the prefix should be a constant string (not based on user input) and
         * must not end in a digit.
         */
        ConstantPool.prototype.uniqueName = function (prefix) {
            return "" + prefix + this.nextNameIndex++;
        };
        ConstantPool.prototype.definitionsOf = function (kind) {
            switch (kind) {
                case 2 /* Component */:
                    return this.componentDefinitions;
                case 1 /* Directive */:
                    return this.directiveDefinitions;
                case 0 /* Injector */:
                    return this.injectorDefinitions;
                case 3 /* Pipe */:
                    return this.pipeDefinitions;
            }
            util_1.error("Unknown definition kind " + kind);
            return this.componentDefinitions;
        };
        ConstantPool.prototype.propertyNameOf = function (kind) {
            switch (kind) {
                case 2 /* Component */:
                    return 'ɵcmp';
                case 1 /* Directive */:
                    return 'ɵdir';
                case 0 /* Injector */:
                    return 'ɵinj';
                case 3 /* Pipe */:
                    return 'ɵpipe';
            }
            util_1.error("Unknown definition kind " + kind);
            return '<unknown>';
        };
        ConstantPool.prototype.freshName = function () {
            return this.uniqueName(CONSTANT_PREFIX);
        };
        ConstantPool.prototype.keyOf = function (expression) {
            return expression.visitExpression(new KeyVisitor(), KEY_CONTEXT);
        };
        return ConstantPool;
    }());
    exports.ConstantPool = ConstantPool;
    /**
     * Visitor used to determine if 2 expressions are equivalent and can be shared in the
     * `ConstantPool`.
     *
     * When the id (string) generated by the visitor is equal, expressions are considered equivalent.
     */
    var KeyVisitor = /** @class */ (function () {
        function KeyVisitor() {
            this.visitWrappedNodeExpr = invalid;
            this.visitWriteVarExpr = invalid;
            this.visitWriteKeyExpr = invalid;
            this.visitWritePropExpr = invalid;
            this.visitInvokeMethodExpr = invalid;
            this.visitInvokeFunctionExpr = invalid;
            this.visitInstantiateExpr = invalid;
            this.visitConditionalExpr = invalid;
            this.visitNotExpr = invalid;
            this.visitAssertNotNullExpr = invalid;
            this.visitCastExpr = invalid;
            this.visitFunctionExpr = invalid;
            this.visitBinaryOperatorExpr = invalid;
            this.visitReadPropExpr = invalid;
            this.visitReadKeyExpr = invalid;
            this.visitCommaExpr = invalid;
            this.visitLocalizedString = invalid;
        }
        KeyVisitor.prototype.visitLiteralExpr = function (ast) {
            return "" + (typeof ast.value === 'string' ? '"' + ast.value + '"' : ast.value);
        };
        KeyVisitor.prototype.visitLiteralArrayExpr = function (ast, context) {
            var _this = this;
            return "[" + ast.entries.map(function (entry) { return entry.visitExpression(_this, context); }).join(',') + "]";
        };
        KeyVisitor.prototype.visitLiteralMapExpr = function (ast, context) {
            var _this = this;
            var mapKey = function (entry) {
                var quote = entry.quoted ? '"' : '';
                return "" + quote + entry.key + quote;
            };
            var mapEntry = function (entry) {
                return mapKey(entry) + ":" + entry.value.visitExpression(_this, context);
            };
            return "{" + ast.entries.map(mapEntry).join(',');
        };
        KeyVisitor.prototype.visitExternalExpr = function (ast) {
            return ast.value.moduleName ? "EX:" + ast.value.moduleName + ":" + ast.value.name :
                "EX:" + ast.value.runtime.name;
        };
        KeyVisitor.prototype.visitReadVarExpr = function (node) {
            return "VAR:" + node.name;
        };
        KeyVisitor.prototype.visitTypeofExpr = function (node, context) {
            return "TYPEOF:" + node.expr.visitExpression(this, context);
        };
        return KeyVisitor;
    }());
    function invalid(arg) {
        throw new Error("Invalid state: Visitor " + this.constructor.name + " doesn't handle " + arg.constructor.name);
    }
    function isVariable(e) {
        return e instanceof o.ReadVarExpr;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRfcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jb25zdGFudF9wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDJEQUF5QztJQUN6QyxtREFBNEM7SUFFNUMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRTdCOzs7Ozs7O09BT0c7SUFDSCxJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFTbEQ7Ozs7O09BS0c7SUFDSCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFdkI7Ozs7Ozs7T0FPRztJQUNIO1FBQThCLDJDQUFZO1FBTXhDLHlCQUFtQixRQUFzQjtZQUF6QyxZQUNFLGtCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FFckI7WUFIa0IsY0FBUSxHQUFSLFFBQVEsQ0FBYztZQUV2QyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7UUFDM0IsQ0FBQztRQUVELHlDQUFlLEdBQWYsVUFBZ0IsT0FBNEIsRUFBRSxPQUFZO1lBQ3hELElBQUksT0FBTyxLQUFLLFdBQVcsRUFBRTtnQkFDM0IsZ0VBQWdFO2dCQUNoRSxnQ0FBZ0M7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQztRQUVELHNDQUFZLEdBQVosVUFBYSxDQUFlO1lBQzFCLE9BQU8sQ0FBQyxZQUFZLGVBQWUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsQ0FB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R0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDaEQsUUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFNLENBQUM7UUFDL0QsQ0FBQztRQUVELHFDQUFnQixHQUFoQixVQUFpQixJQUFtQjtZQUNsQyxPQUFPLFNBQU8sSUFBSSxDQUFDLElBQU0sQ0FBQztRQUM1QixDQUFDO1FBRUQsb0NBQWUsR0FBZixVQUFnQixJQUFrQixFQUFFLE9BQVk7WUFDOUMsT0FBTyxZQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUcsQ0FBQztRQUM5RCxDQUFDO1FBbUJILGlCQUFDO0lBQUQsQ0FBQyxBQWpERCxJQWlEQztJQUVELFNBQVMsT0FBTyxDQUErQixHQUE2QjtRQUMxRSxNQUFNLElBQUksS0FBSyxDQUNYLDRCQUEwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQW1CLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLENBQWU7UUFDakMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtlcnJvciwgT3V0cHV0Q29udGV4dH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgQ09OU1RBTlRfUFJFRklYID0gJ19jJztcblxuLyoqXG4gKiBgQ29uc3RhbnRQb29sYCB0cmllcyB0byByZXVzZSBsaXRlcmFsIGZhY3RvcmllcyB3aGVuIHR3byBvciBtb3JlIGxpdGVyYWxzIGFyZSBpZGVudGljYWwuXG4gKiBXZSBkZXRlcm1pbmUgd2hldGhlciBsaXRlcmFscyBhcmUgaWRlbnRpY2FsIGJ5IGNyZWF0aW5nIGEga2V5IG91dCBvZiB0aGVpciBBU1QgdXNpbmcgdGhlXG4gKiBgS2V5VmlzaXRvcmAuIFRoaXMgY29uc3RhbnQgaXMgdXNlZCB0byByZXBsYWNlIGR5bmFtaWMgZXhwcmVzc2lvbnMgd2hpY2ggY2FuJ3QgYmUgc2FmZWx5XG4gKiBjb252ZXJ0ZWQgaW50byBhIGtleS4gRS5nLiBnaXZlbiBhbiBleHByZXNzaW9uIGB7Zm9vOiBiYXIoKX1gLCBzaW5jZSB3ZSBkb24ndCBrbm93IHdoYXRcbiAqIHRoZSByZXN1bHQgb2YgYGJhcmAgd2lsbCBiZSwgd2UgY3JlYXRlIGEga2V5IHRoYXQgbG9va3MgbGlrZSBge2ZvbzogPHVua25vd24+fWAuIE5vdGVcbiAqIHRoYXQgd2UgdXNlIGEgdmFyaWFibGUsIHJhdGhlciB0aGFuIHNvbWV0aGluZyBsaWtlIGBudWxsYCBpbiBvcmRlciB0byBhdm9pZCBjb2xsaXNpb25zLlxuICovXG5jb25zdCBVTktOT1dOX1ZBTFVFX0tFWSA9IG8udmFyaWFibGUoJzx1bmtub3duPicpO1xuXG5leHBvcnQgY29uc3QgZW51bSBEZWZpbml0aW9uS2luZCB7XG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIENvbXBvbmVudCxcbiAgUGlwZVxufVxuXG4vKipcbiAqIENvbnRleHQgdG8gdXNlIHdoZW4gcHJvZHVjaW5nIGEga2V5LlxuICpcbiAqIFRoaXMgZW5zdXJlcyB3ZSBzZWUgdGhlIGNvbnN0YW50IG5vdCB0aGUgcmVmZXJlbmNlIHZhcmlhYmxlIHdoZW4gcHJvZHVjaW5nXG4gKiBhIGtleS5cbiAqL1xuY29uc3QgS0VZX0NPTlRFWFQgPSB7fTtcblxuLyoqXG4gKiBBIG5vZGUgdGhhdCBpcyBhIHBsYWNlLWhvbGRlciB0aGF0IGFsbG93cyB0aGUgbm9kZSB0byBiZSByZXBsYWNlZCB3aGVuIHRoZSBhY3R1YWxcbiAqIG5vZGUgaXMga25vd24uXG4gKlxuICogVGhpcyBhbGxvd3MgdGhlIGNvbnN0YW50IHBvb2wgdG8gY2hhbmdlIGFuIGV4cHJlc3Npb24gZnJvbSBhIGRpcmVjdCByZWZlcmVuY2UgdG9cbiAqIGEgY29uc3RhbnQgdG8gYSBzaGFyZWQgY29uc3RhbnQuIEl0IHJldHVybnMgYSBmaXgtdXAgbm9kZSB0aGF0IGlzIGxhdGVyIGFsbG93ZWQgdG9cbiAqIGNoYW5nZSB0aGUgcmVmZXJlbmNlZCBleHByZXNzaW9uLlxuICovXG5jbGFzcyBGaXh1cEV4cHJlc3Npb24gZXh0ZW5kcyBvLkV4cHJlc3Npb24ge1xuICBwcml2YXRlIG9yaWdpbmFsOiBvLkV4cHJlc3Npb247XG5cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHNoYXJlZCE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc29sdmVkOiBvLkV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihyZXNvbHZlZC50eXBlKTtcbiAgICB0aGlzLm9yaWdpbmFsID0gcmVzb2x2ZWQ7XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb24odmlzaXRvcjogby5FeHByZXNzaW9uVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAoY29udGV4dCA9PT0gS0VZX0NPTlRFWFQpIHtcbiAgICAgIC8vIFdoZW4gcHJvZHVjaW5nIGEga2V5IHdlIHdhbnQgdG8gdHJhdmVyc2UgdGhlIGNvbnN0YW50IG5vdCB0aGVcbiAgICAgIC8vIHZhcmlhYmxlIHVzZWQgdG8gcmVmZXIgdG8gaXQuXG4gICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbC52aXNpdEV4cHJlc3Npb24odmlzaXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmVkLnZpc2l0RXhwcmVzc2lvbih2aXNpdG9yLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBpc0VxdWl2YWxlbnQoZTogby5FeHByZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBGaXh1cEV4cHJlc3Npb24gJiYgdGhpcy5yZXNvbHZlZC5pc0VxdWl2YWxlbnQoZS5yZXNvbHZlZCk7XG4gIH1cblxuICBpc0NvbnN0YW50KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZml4dXAoZXhwcmVzc2lvbjogby5FeHByZXNzaW9uKSB7XG4gICAgdGhpcy5yZXNvbHZlZCA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5zaGFyZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQSBjb25zdGFudCBwb29sIGFsbG93cyBhIGNvZGUgZW1pdHRlciB0byBzaGFyZSBjb25zdGFudCBpbiBhbiBvdXRwdXQgY29udGV4dC5cbiAqXG4gKiBUaGUgY29uc3RhbnQgcG9vbCBhbHNvIHN1cHBvcnRzIHNoYXJpbmcgYWNjZXNzIHRvIGl2eSBkZWZpbml0aW9ucyByZWZlcmVuY2VzLlxuICovXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRQb29sIHtcbiAgc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGxpdGVyYWxzID0gbmV3IE1hcDxzdHJpbmcsIEZpeHVwRXhwcmVzc2lvbj4oKTtcbiAgcHJpdmF0ZSBsaXRlcmFsRmFjdG9yaWVzID0gbmV3IE1hcDxzdHJpbmcsIG8uRXhwcmVzc2lvbj4oKTtcbiAgcHJpdmF0ZSBpbmplY3RvckRlZmluaXRpb25zID0gbmV3IE1hcDxhbnksIEZpeHVwRXhwcmVzc2lvbj4oKTtcbiAgcHJpdmF0ZSBkaXJlY3RpdmVEZWZpbml0aW9ucyA9IG5ldyBNYXA8YW55LCBGaXh1cEV4cHJlc3Npb24+KCk7XG4gIHByaXZhdGUgY29tcG9uZW50RGVmaW5pdGlvbnMgPSBuZXcgTWFwPGFueSwgRml4dXBFeHByZXNzaW9uPigpO1xuICBwcml2YXRlIHBpcGVEZWZpbml0aW9ucyA9IG5ldyBNYXA8YW55LCBGaXh1cEV4cHJlc3Npb24+KCk7XG5cbiAgcHJpdmF0ZSBuZXh0TmFtZUluZGV4ID0gMDtcblxuICBnZXRDb25zdExpdGVyYWwobGl0ZXJhbDogby5FeHByZXNzaW9uLCBmb3JjZVNoYXJlZD86IGJvb2xlYW4pOiBvLkV4cHJlc3Npb24ge1xuICAgIGlmIChsaXRlcmFsIGluc3RhbmNlb2Ygby5MaXRlcmFsRXhwciB8fCBsaXRlcmFsIGluc3RhbmNlb2YgRml4dXBFeHByZXNzaW9uKSB7XG4gICAgICAvLyBEbyBubyBwdXQgc2ltcGxlIGxpdGVyYWxzIGludG8gdGhlIGNvbnN0YW50IHBvb2wgb3IgdHJ5IHRvIHByb2R1Y2UgYSBjb25zdGFudCBmb3IgYVxuICAgICAgLy8gcmVmZXJlbmNlIHRvIGEgY29uc3RhbnQuXG4gICAgICByZXR1cm4gbGl0ZXJhbDtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gdGhpcy5rZXlPZihsaXRlcmFsKTtcbiAgICBsZXQgZml4dXAgPSB0aGlzLmxpdGVyYWxzLmdldChrZXkpO1xuICAgIGxldCBuZXdWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghZml4dXApIHtcbiAgICAgIGZpeHVwID0gbmV3IEZpeHVwRXhwcmVzc2lvbihsaXRlcmFsKTtcbiAgICAgIHRoaXMubGl0ZXJhbHMuc2V0KGtleSwgZml4dXApO1xuICAgICAgbmV3VmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgoIW5ld1ZhbHVlICYmICFmaXh1cC5zaGFyZWQpIHx8IChuZXdWYWx1ZSAmJiBmb3JjZVNoYXJlZCkpIHtcbiAgICAgIC8vIFJlcGxhY2UgdGhlIGV4cHJlc3Npb24gd2l0aCBhIHZhcmlhYmxlXG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5mcmVzaE5hbWUoKTtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKFxuICAgICAgICAgIG8udmFyaWFibGUobmFtZSkuc2V0KGxpdGVyYWwpLnRvRGVjbFN0bXQoby5JTkZFUlJFRF9UWVBFLCBbby5TdG10TW9kaWZpZXIuRmluYWxdKSk7XG4gICAgICBmaXh1cC5maXh1cChvLnZhcmlhYmxlKG5hbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZml4dXA7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKHR5cGU6IGFueSwga2luZDogRGVmaW5pdGlvbktpbmQsIGN0eDogT3V0cHV0Q29udGV4dCwgZm9yY2VTaGFyZWQ6IGJvb2xlYW4gPSBmYWxzZSk6XG4gICAgICBvLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5kZWZpbml0aW9uc09mKGtpbmQpO1xuICAgIGxldCBmaXh1cCA9IGRlZmluaXRpb25zLmdldCh0eXBlKTtcbiAgICBsZXQgbmV3VmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIWZpeHVwKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydHlOYW1lT2Yoa2luZCk7XG4gICAgICBmaXh1cCA9IG5ldyBGaXh1cEV4cHJlc3Npb24oY3R4LmltcG9ydEV4cHIodHlwZSkucHJvcChwcm9wZXJ0eSkpO1xuICAgICAgZGVmaW5pdGlvbnMuc2V0KHR5cGUsIGZpeHVwKTtcbiAgICAgIG5ld1ZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoKCFuZXdWYWx1ZSAmJiAhZml4dXAuc2hhcmVkKSB8fCAobmV3VmFsdWUgJiYgZm9yY2VTaGFyZWQpKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5mcmVzaE5hbWUoKTtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKFxuICAgICAgICAgIG8udmFyaWFibGUobmFtZSkuc2V0KGZpeHVwLnJlc29sdmVkKS50b0RlY2xTdG10KG8uSU5GRVJSRURfVFlQRSwgW28uU3RtdE1vZGlmaWVyLkZpbmFsXSkpO1xuICAgICAgZml4dXAuZml4dXAoby52YXJpYWJsZShuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBmaXh1cDtcbiAgfVxuXG4gIGdldExpdGVyYWxGYWN0b3J5KGxpdGVyYWw6IG8uTGl0ZXJhbEFycmF5RXhwcnxvLkxpdGVyYWxNYXBFeHByKTpcbiAgICAgIHtsaXRlcmFsRmFjdG9yeTogby5FeHByZXNzaW9uLCBsaXRlcmFsRmFjdG9yeUFyZ3VtZW50czogby5FeHByZXNzaW9uW119IHtcbiAgICAvLyBDcmVhdGUgYSBwdXJlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIGFuIGFycmF5IG9mIGEgbWl4IG9mIGNvbnN0YW50IGFuZCB2YXJpYWJsZSBleHByZXNzaW9uc1xuICAgIGlmIChsaXRlcmFsIGluc3RhbmNlb2Ygby5MaXRlcmFsQXJyYXlFeHByKSB7XG4gICAgICBjb25zdCBhcmd1bWVudHNGb3JLZXkgPSBsaXRlcmFsLmVudHJpZXMubWFwKGUgPT4gZS5pc0NvbnN0YW50KCkgPyBlIDogVU5LTk9XTl9WQUxVRV9LRVkpO1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5rZXlPZihvLmxpdGVyYWxBcnIoYXJndW1lbnRzRm9yS2V5KSk7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TGl0ZXJhbEZhY3Rvcnkoa2V5LCBsaXRlcmFsLmVudHJpZXMsIGVudHJpZXMgPT4gby5saXRlcmFsQXJyKGVudHJpZXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbkZvcktleSA9IG8ubGl0ZXJhbE1hcChcbiAgICAgICAgICBsaXRlcmFsLmVudHJpZXMubWFwKGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBlLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudmFsdWUuaXNDb25zdGFudCgpID8gZS52YWx1ZSA6IFVOS05PV05fVkFMVUVfS0VZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZWQ6IGUucXVvdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5rZXlPZihleHByZXNzaW9uRm9yS2V5KTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRMaXRlcmFsRmFjdG9yeShcbiAgICAgICAgICBrZXksIGxpdGVyYWwuZW50cmllcy5tYXAoZSA9PiBlLnZhbHVlKSxcbiAgICAgICAgICBlbnRyaWVzID0+IG8ubGl0ZXJhbE1hcChlbnRyaWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBsaXRlcmFsLmVudHJpZXNbaW5kZXhdLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVkOiBsaXRlcmFsLmVudHJpZXNbaW5kZXhdLnF1b3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldExpdGVyYWxGYWN0b3J5KFxuICAgICAga2V5OiBzdHJpbmcsIHZhbHVlczogby5FeHByZXNzaW9uW10sIHJlc3VsdE1hcDogKHBhcmFtZXRlcnM6IG8uRXhwcmVzc2lvbltdKSA9PiBvLkV4cHJlc3Npb24pOlxuICAgICAge2xpdGVyYWxGYWN0b3J5OiBvLkV4cHJlc3Npb24sIGxpdGVyYWxGYWN0b3J5QXJndW1lbnRzOiBvLkV4cHJlc3Npb25bXX0ge1xuICAgIGxldCBsaXRlcmFsRmFjdG9yeSA9IHRoaXMubGl0ZXJhbEZhY3Rvcmllcy5nZXQoa2V5KTtcbiAgICBjb25zdCBsaXRlcmFsRmFjdG9yeUFyZ3VtZW50cyA9IHZhbHVlcy5maWx0ZXIoKGUgPT4gIWUuaXNDb25zdGFudCgpKSk7XG4gICAgaWYgKCFsaXRlcmFsRmFjdG9yeSkge1xuICAgICAgY29uc3QgcmVzdWx0RXhwcmVzc2lvbnMgPSB2YWx1ZXMubWFwKFxuICAgICAgICAgIChlLCBpbmRleCkgPT4gZS5pc0NvbnN0YW50KCkgPyB0aGlzLmdldENvbnN0TGl0ZXJhbChlLCB0cnVlKSA6IG8udmFyaWFibGUoYGEke2luZGV4fWApKTtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPVxuICAgICAgICAgIHJlc3VsdEV4cHJlc3Npb25zLmZpbHRlcihpc1ZhcmlhYmxlKS5tYXAoZSA9PiBuZXcgby5GblBhcmFtKGUubmFtZSEsIG8uRFlOQU1JQ19UWVBFKSk7XG4gICAgICBjb25zdCBwdXJlRnVuY3Rpb25EZWNsYXJhdGlvbiA9XG4gICAgICAgICAgby5mbihwYXJhbWV0ZXJzLCBbbmV3IG8uUmV0dXJuU3RhdGVtZW50KHJlc3VsdE1hcChyZXN1bHRFeHByZXNzaW9ucykpXSwgby5JTkZFUlJFRF9UWVBFKTtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZyZXNoTmFtZSgpO1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goXG4gICAgICAgICAgby52YXJpYWJsZShuYW1lKS5zZXQocHVyZUZ1bmN0aW9uRGVjbGFyYXRpb24pLnRvRGVjbFN0bXQoby5JTkZFUlJFRF9UWVBFLCBbXG4gICAgICAgICAgICBvLlN0bXRNb2RpZmllci5GaW5hbFxuICAgICAgICAgIF0pKTtcbiAgICAgIGxpdGVyYWxGYWN0b3J5ID0gby52YXJpYWJsZShuYW1lKTtcbiAgICAgIHRoaXMubGl0ZXJhbEZhY3Rvcmllcy5zZXQoa2V5LCBsaXRlcmFsRmFjdG9yeSk7XG4gICAgfVxuICAgIHJldHVybiB7bGl0ZXJhbEZhY3RvcnksIGxpdGVyYWxGYWN0b3J5QXJndW1lbnRzfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIGEgdW5pcXVlIG5hbWUuXG4gICAqXG4gICAqIFRoZSBuYW1lIG1pZ2h0IGJlIHVuaXF1ZSBhbW9uZyBkaWZmZXJlbnQgcHJlZml4ZXMgaWYgYW55IG9mIHRoZSBwcmVmaXhlcyBlbmQgaW5cbiAgICogYSBkaWdpdCBzbyB0aGUgcHJlZml4IHNob3VsZCBiZSBhIGNvbnN0YW50IHN0cmluZyAobm90IGJhc2VkIG9uIHVzZXIgaW5wdXQpIGFuZFxuICAgKiBtdXN0IG5vdCBlbmQgaW4gYSBkaWdpdC5cbiAgICovXG4gIHVuaXF1ZU5hbWUocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHt0aGlzLm5leHROYW1lSW5kZXgrK31gO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbml0aW9uc09mKGtpbmQ6IERlZmluaXRpb25LaW5kKTogTWFwPGFueSwgRml4dXBFeHByZXNzaW9uPiB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIERlZmluaXRpb25LaW5kLkNvbXBvbmVudDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGVmaW5pdGlvbnM7XG4gICAgICBjYXNlIERlZmluaXRpb25LaW5kLkRpcmVjdGl2ZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlRGVmaW5pdGlvbnM7XG4gICAgICBjYXNlIERlZmluaXRpb25LaW5kLkluamVjdG9yOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3RvckRlZmluaXRpb25zO1xuICAgICAgY2FzZSBEZWZpbml0aW9uS2luZC5QaXBlOlxuICAgICAgICByZXR1cm4gdGhpcy5waXBlRGVmaW5pdGlvbnM7XG4gICAgfVxuICAgIGVycm9yKGBVbmtub3duIGRlZmluaXRpb24ga2luZCAke2tpbmR9YCk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGVmaW5pdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgcHJvcGVydHlOYW1lT2Yoa2luZDogRGVmaW5pdGlvbktpbmQpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBEZWZpbml0aW9uS2luZC5Db21wb25lbnQ6XG4gICAgICAgIHJldHVybiAnybVjbXAnO1xuICAgICAgY2FzZSBEZWZpbml0aW9uS2luZC5EaXJlY3RpdmU6XG4gICAgICAgIHJldHVybiAnybVkaXInO1xuICAgICAgY2FzZSBEZWZpbml0aW9uS2luZC5JbmplY3RvcjpcbiAgICAgICAgcmV0dXJuICfJtWluaic7XG4gICAgICBjYXNlIERlZmluaXRpb25LaW5kLlBpcGU6XG4gICAgICAgIHJldHVybiAnybVwaXBlJztcbiAgICB9XG4gICAgZXJyb3IoYFVua25vd24gZGVmaW5pdGlvbiBraW5kICR7a2luZH1gKTtcbiAgICByZXR1cm4gJzx1bmtub3duPic7XG4gIH1cblxuICBwcml2YXRlIGZyZXNoTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVuaXF1ZU5hbWUoQ09OU1RBTlRfUFJFRklYKTtcbiAgfVxuXG4gIHByaXZhdGUga2V5T2YoZXhwcmVzc2lvbjogby5FeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb24udmlzaXRFeHByZXNzaW9uKG5ldyBLZXlWaXNpdG9yKCksIEtFWV9DT05URVhUKTtcbiAgfVxufVxuXG4vKipcbiAqIFZpc2l0b3IgdXNlZCB0byBkZXRlcm1pbmUgaWYgMiBleHByZXNzaW9ucyBhcmUgZXF1aXZhbGVudCBhbmQgY2FuIGJlIHNoYXJlZCBpbiB0aGVcbiAqIGBDb25zdGFudFBvb2xgLlxuICpcbiAqIFdoZW4gdGhlIGlkIChzdHJpbmcpIGdlbmVyYXRlZCBieSB0aGUgdmlzaXRvciBpcyBlcXVhbCwgZXhwcmVzc2lvbnMgYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudC5cbiAqL1xuY2xhc3MgS2V5VmlzaXRvciBpbXBsZW1lbnRzIG8uRXhwcmVzc2lvblZpc2l0b3Ige1xuICB2aXNpdExpdGVyYWxFeHByKGFzdDogby5MaXRlcmFsRXhwcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3R5cGVvZiBhc3QudmFsdWUgPT09ICdzdHJpbmcnID8gJ1wiJyArIGFzdC52YWx1ZSArICdcIicgOiBhc3QudmFsdWV9YDtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5RXhwcihhc3Q6IG8uTGl0ZXJhbEFycmF5RXhwciwgY29udGV4dDogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFske2FzdC5lbnRyaWVzLm1hcChlbnRyeSA9PiBlbnRyeS52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCkpLmpvaW4oJywnKX1dYDtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcEV4cHIoYXN0OiBvLkxpdGVyYWxNYXBFeHByLCBjb250ZXh0OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcEtleSA9IChlbnRyeTogby5MaXRlcmFsTWFwRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHF1b3RlID0gZW50cnkucXVvdGVkID8gJ1wiJyA6ICcnO1xuICAgICAgcmV0dXJuIGAke3F1b3RlfSR7ZW50cnkua2V5fSR7cXVvdGV9YDtcbiAgICB9O1xuICAgIGNvbnN0IG1hcEVudHJ5ID0gKGVudHJ5OiBvLkxpdGVyYWxNYXBFbnRyeSkgPT5cbiAgICAgICAgYCR7bWFwS2V5KGVudHJ5KX06JHtlbnRyeS52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCl9YDtcbiAgICByZXR1cm4gYHske2FzdC5lbnRyaWVzLm1hcChtYXBFbnRyeSkuam9pbignLCcpfWA7XG4gIH1cblxuICB2aXNpdEV4dGVybmFsRXhwcihhc3Q6IG8uRXh0ZXJuYWxFeHByKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYXN0LnZhbHVlLm1vZHVsZU5hbWUgPyBgRVg6JHthc3QudmFsdWUubW9kdWxlTmFtZX06JHthc3QudmFsdWUubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRVg6JHthc3QudmFsdWUucnVudGltZS5uYW1lfWA7XG4gIH1cblxuICB2aXNpdFJlYWRWYXJFeHByKG5vZGU6IG8uUmVhZFZhckV4cHIpIHtcbiAgICByZXR1cm4gYFZBUjoke25vZGUubmFtZX1gO1xuICB9XG5cbiAgdmlzaXRUeXBlb2ZFeHByKG5vZGU6IG8uVHlwZW9mRXhwciwgY29udGV4dDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFRZUEVPRjoke25vZGUuZXhwci52aXNpdEV4cHJlc3Npb24odGhpcywgY29udGV4dCl9YDtcbiAgfVxuXG4gIHZpc2l0V3JhcHBlZE5vZGVFeHByID0gaW52YWxpZDtcbiAgdmlzaXRXcml0ZVZhckV4cHIgPSBpbnZhbGlkO1xuICB2aXNpdFdyaXRlS2V5RXhwciA9IGludmFsaWQ7XG4gIHZpc2l0V3JpdGVQcm9wRXhwciA9IGludmFsaWQ7XG4gIHZpc2l0SW52b2tlTWV0aG9kRXhwciA9IGludmFsaWQ7XG4gIHZpc2l0SW52b2tlRnVuY3Rpb25FeHByID0gaW52YWxpZDtcbiAgdmlzaXRJbnN0YW50aWF0ZUV4cHIgPSBpbnZhbGlkO1xuICB2aXNpdENvbmRpdGlvbmFsRXhwciA9IGludmFsaWQ7XG4gIHZpc2l0Tm90RXhwciA9IGludmFsaWQ7XG4gIHZpc2l0QXNzZXJ0Tm90TnVsbEV4cHIgPSBpbnZhbGlkO1xuICB2aXNpdENhc3RFeHByID0gaW52YWxpZDtcbiAgdmlzaXRGdW5jdGlvbkV4cHIgPSBpbnZhbGlkO1xuICB2aXNpdEJpbmFyeU9wZXJhdG9yRXhwciA9IGludmFsaWQ7XG4gIHZpc2l0UmVhZFByb3BFeHByID0gaW52YWxpZDtcbiAgdmlzaXRSZWFkS2V5RXhwciA9IGludmFsaWQ7XG4gIHZpc2l0Q29tbWFFeHByID0gaW52YWxpZDtcbiAgdmlzaXRMb2NhbGl6ZWRTdHJpbmcgPSBpbnZhbGlkO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkPFQ+KHRoaXM6IG8uRXhwcmVzc2lvblZpc2l0b3IsIGFyZzogby5FeHByZXNzaW9ufG8uU3RhdGVtZW50KTogbmV2ZXIge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBzdGF0ZTogVmlzaXRvciAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gZG9lc24ndCBoYW5kbGUgJHthcmcuY29uc3RydWN0b3IubmFtZX1gKTtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZShlOiBvLkV4cHJlc3Npb24pOiBlIGlzIG8uUmVhZFZhckV4cHIge1xuICByZXR1cm4gZSBpbnN0YW5jZW9mIG8uUmVhZFZhckV4cHI7XG59XG4iXX0=