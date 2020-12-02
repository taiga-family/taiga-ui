/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import * as cdAst from '../expression_parser/ast';
import { Identifiers } from '../identifiers';
import * as o from '../output/output_ast';
import { ParseSourceSpan } from '../parse_util';
var EventHandlerVars = /** @class */ (function () {
    function EventHandlerVars() {
    }
    EventHandlerVars.event = o.variable('$event');
    return EventHandlerVars;
}());
export { EventHandlerVars };
var ConvertActionBindingResult = /** @class */ (function () {
    function ConvertActionBindingResult(
    /**
     * Render2 compatible statements,
     */
    stmts, 
    /**
     * Variable name used with render2 compatible statements.
     */
    allowDefault) {
        this.stmts = stmts;
        this.allowDefault = allowDefault;
        /**
         * This is bit of a hack. It converts statements which render2 expects to statements which are
         * expected by render3.
         *
         * Example: `<div click="doSomething($event)">` will generate:
         *
         * Render3:
         * ```
         * const pd_b:any = ((<any>ctx.doSomething($event)) !== false);
         * return pd_b;
         * ```
         *
         * but render2 expects:
         * ```
         * return ctx.doSomething($event);
         * ```
         */
        // TODO(misko): remove this hack once we no longer support ViewEngine.
        this.render3Stmts = stmts.map(function (statement) {
            if (statement instanceof o.DeclareVarStmt && statement.name == allowDefault.name &&
                statement.value instanceof o.BinaryOperatorExpr) {
                var lhs = statement.value.lhs;
                return new o.ReturnStatement(lhs.value);
            }
            return statement;
        });
    }
    return ConvertActionBindingResult;
}());
export { ConvertActionBindingResult };
/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in an action binding (e.g. an event handler).
 */
export function convertActionBinding(localResolver, implicitReceiver, action, bindingId, interpolationFunction, baseSourceSpan, implicitReceiverAccesses) {
    if (!localResolver) {
        localResolver = new DefaultLocalResolver();
    }
    var actionWithoutBuiltins = convertPropertyBindingBuiltins({
        createLiteralArrayConverter: function (argCount) {
            // Note: no caching for literal arrays in actions.
            return function (args) { return o.literalArr(args); };
        },
        createLiteralMapConverter: function (keys) {
            // Note: no caching for literal maps in actions.
            return function (values) {
                var entries = keys.map(function (k, i) { return ({
                    key: k.key,
                    value: values[i],
                    quoted: k.quoted,
                }); });
                return o.literalMap(entries);
            };
        },
        createPipeConverter: function (name) {
            throw new Error("Illegal State: Actions are not allowed to contain pipes. Pipe: " + name);
        }
    }, action);
    var visitor = new _AstToIrVisitor(localResolver, implicitReceiver, bindingId, interpolationFunction, baseSourceSpan, implicitReceiverAccesses);
    var actionStmts = [];
    flattenStatements(actionWithoutBuiltins.visit(visitor, _Mode.Statement), actionStmts);
    prependTemporaryDecls(visitor.temporaryCount, bindingId, actionStmts);
    if (visitor.usesImplicitReceiver) {
        localResolver.notifyImplicitReceiverUse();
    }
    var lastIndex = actionStmts.length - 1;
    var preventDefaultVar = null;
    if (lastIndex >= 0) {
        var lastStatement = actionStmts[lastIndex];
        var returnExpr = convertStmtIntoExpression(lastStatement);
        if (returnExpr) {
            // Note: We need to cast the result of the method call to dynamic,
            // as it might be a void method!
            preventDefaultVar = createPreventDefaultVar(bindingId);
            actionStmts[lastIndex] =
                preventDefaultVar.set(returnExpr.cast(o.DYNAMIC_TYPE).notIdentical(o.literal(false)))
                    .toDeclStmt(null, [o.StmtModifier.Final]);
        }
    }
    return new ConvertActionBindingResult(actionStmts, preventDefaultVar);
}
export function convertPropertyBindingBuiltins(converterFactory, ast) {
    return convertBuiltins(converterFactory, ast);
}
var ConvertPropertyBindingResult = /** @class */ (function () {
    function ConvertPropertyBindingResult(stmts, currValExpr) {
        this.stmts = stmts;
        this.currValExpr = currValExpr;
    }
    return ConvertPropertyBindingResult;
}());
export { ConvertPropertyBindingResult };
export var BindingForm;
(function (BindingForm) {
    // The general form of binding expression, supports all expressions.
    BindingForm[BindingForm["General"] = 0] = "General";
    // Try to generate a simple binding (no temporaries or statements)
    // otherwise generate a general binding
    BindingForm[BindingForm["TrySimple"] = 1] = "TrySimple";
})(BindingForm || (BindingForm = {}));
/**
 * Converts the given expression AST into an executable output AST, assuming the expression
 * is used in property binding. The expression has to be preprocessed via
 * `convertPropertyBindingBuiltins`.
 */
export function convertPropertyBinding(localResolver, implicitReceiver, expressionWithoutBuiltins, bindingId, form, interpolationFunction) {
    if (!localResolver) {
        localResolver = new DefaultLocalResolver();
    }
    var currValExpr = createCurrValueExpr(bindingId);
    var visitor = new _AstToIrVisitor(localResolver, implicitReceiver, bindingId, interpolationFunction);
    var outputExpr = expressionWithoutBuiltins.visit(visitor, _Mode.Expression);
    var stmts = getStatementsFromVisitor(visitor, bindingId);
    if (visitor.usesImplicitReceiver) {
        localResolver.notifyImplicitReceiverUse();
    }
    if (visitor.temporaryCount === 0 && form == BindingForm.TrySimple) {
        return new ConvertPropertyBindingResult([], outputExpr);
    }
    stmts.push(currValExpr.set(outputExpr).toDeclStmt(o.DYNAMIC_TYPE, [o.StmtModifier.Final]));
    return new ConvertPropertyBindingResult(stmts, currValExpr);
}
/**
 * Given some expression, such as a binding or interpolation expression, and a context expression to
 * look values up on, visit each facet of the given expression resolving values from the context
 * expression such that a list of arguments can be derived from the found values that can be used as
 * arguments to an external update instruction.
 *
 * @param localResolver The resolver to use to look up expressions by name appropriately
 * @param contextVariableExpression The expression representing the context variable used to create
 * the final argument expressions
 * @param expressionWithArgumentsToExtract The expression to visit to figure out what values need to
 * be resolved and what arguments list to build.
 * @param bindingId A name prefix used to create temporary variable names if they're needed for the
 * arguments generated
 * @returns An array of expressions that can be passed as arguments to instruction expressions like
 * `o.importExpr(R3.propertyInterpolate).callFn(result)`
 */
export function convertUpdateArguments(localResolver, contextVariableExpression, expressionWithArgumentsToExtract, bindingId) {
    var visitor = new _AstToIrVisitor(localResolver, contextVariableExpression, bindingId, undefined);
    var outputExpr = expressionWithArgumentsToExtract.visit(visitor, _Mode.Expression);
    if (visitor.usesImplicitReceiver) {
        localResolver.notifyImplicitReceiverUse();
    }
    var stmts = getStatementsFromVisitor(visitor, bindingId);
    // Removing the first argument, because it was a length for ViewEngine, not Ivy.
    var args = outputExpr.args.slice(1);
    if (expressionWithArgumentsToExtract instanceof cdAst.Interpolation) {
        // If we're dealing with an interpolation of 1 value with an empty prefix and suffix, reduce the
        // args returned to just the value, because we're going to pass it to a special instruction.
        var strings = expressionWithArgumentsToExtract.strings;
        if (args.length === 3 && strings[0] === '' && strings[1] === '') {
            // Single argument interpolate instructions.
            args = [args[1]];
        }
        else if (args.length >= 19) {
            // 19 or more arguments must be passed to the `interpolateV`-style instructions, which accept
            // an array of arguments
            args = [o.literalArr(args)];
        }
    }
    return { stmts: stmts, args: args };
}
function getStatementsFromVisitor(visitor, bindingId) {
    var stmts = [];
    for (var i = 0; i < visitor.temporaryCount; i++) {
        stmts.push(temporaryDeclaration(bindingId, i));
    }
    return stmts;
}
function convertBuiltins(converterFactory, ast) {
    var visitor = new _BuiltinAstConverter(converterFactory);
    return ast.visit(visitor);
}
function temporaryName(bindingId, temporaryNumber) {
    return "tmp_" + bindingId + "_" + temporaryNumber;
}
export function temporaryDeclaration(bindingId, temporaryNumber) {
    return new o.DeclareVarStmt(temporaryName(bindingId, temporaryNumber), o.NULL_EXPR);
}
function prependTemporaryDecls(temporaryCount, bindingId, statements) {
    for (var i = temporaryCount - 1; i >= 0; i--) {
        statements.unshift(temporaryDeclaration(bindingId, i));
    }
}
var _Mode;
(function (_Mode) {
    _Mode[_Mode["Statement"] = 0] = "Statement";
    _Mode[_Mode["Expression"] = 1] = "Expression";
})(_Mode || (_Mode = {}));
function ensureStatementMode(mode, ast) {
    if (mode !== _Mode.Statement) {
        throw new Error("Expected a statement, but saw " + ast);
    }
}
function ensureExpressionMode(mode, ast) {
    if (mode !== _Mode.Expression) {
        throw new Error("Expected an expression, but saw " + ast);
    }
}
function convertToStatementIfNeeded(mode, expr) {
    if (mode === _Mode.Statement) {
        return expr.toStmt();
    }
    else {
        return expr;
    }
}
var _BuiltinAstConverter = /** @class */ (function (_super) {
    __extends(_BuiltinAstConverter, _super);
    function _BuiltinAstConverter(_converterFactory) {
        var _this = _super.call(this) || this;
        _this._converterFactory = _converterFactory;
        return _this;
    }
    _BuiltinAstConverter.prototype.visitPipe = function (ast, context) {
        var _this = this;
        var args = __spread([ast.exp], ast.args).map(function (ast) { return ast.visit(_this, context); });
        return new BuiltinFunctionCall(ast.span, ast.sourceSpan, args, this._converterFactory.createPipeConverter(ast.name, args.length));
    };
    _BuiltinAstConverter.prototype.visitLiteralArray = function (ast, context) {
        var _this = this;
        var args = ast.expressions.map(function (ast) { return ast.visit(_this, context); });
        return new BuiltinFunctionCall(ast.span, ast.sourceSpan, args, this._converterFactory.createLiteralArrayConverter(ast.expressions.length));
    };
    _BuiltinAstConverter.prototype.visitLiteralMap = function (ast, context) {
        var _this = this;
        var args = ast.values.map(function (ast) { return ast.visit(_this, context); });
        return new BuiltinFunctionCall(ast.span, ast.sourceSpan, args, this._converterFactory.createLiteralMapConverter(ast.keys));
    };
    return _BuiltinAstConverter;
}(cdAst.AstTransformer));
var _AstToIrVisitor = /** @class */ (function () {
    function _AstToIrVisitor(_localResolver, _implicitReceiver, bindingId, interpolationFunction, baseSourceSpan, implicitReceiverAccesses) {
        this._localResolver = _localResolver;
        this._implicitReceiver = _implicitReceiver;
        this.bindingId = bindingId;
        this.interpolationFunction = interpolationFunction;
        this.baseSourceSpan = baseSourceSpan;
        this.implicitReceiverAccesses = implicitReceiverAccesses;
        this._nodeMap = new Map();
        this._resultMap = new Map();
        this._currentTemporary = 0;
        this.temporaryCount = 0;
        this.usesImplicitReceiver = false;
    }
    _AstToIrVisitor.prototype.visitBinary = function (ast, mode) {
        var op;
        switch (ast.operation) {
            case '+':
                op = o.BinaryOperator.Plus;
                break;
            case '-':
                op = o.BinaryOperator.Minus;
                break;
            case '*':
                op = o.BinaryOperator.Multiply;
                break;
            case '/':
                op = o.BinaryOperator.Divide;
                break;
            case '%':
                op = o.BinaryOperator.Modulo;
                break;
            case '&&':
                op = o.BinaryOperator.And;
                break;
            case '||':
                op = o.BinaryOperator.Or;
                break;
            case '==':
                op = o.BinaryOperator.Equals;
                break;
            case '!=':
                op = o.BinaryOperator.NotEquals;
                break;
            case '===':
                op = o.BinaryOperator.Identical;
                break;
            case '!==':
                op = o.BinaryOperator.NotIdentical;
                break;
            case '<':
                op = o.BinaryOperator.Lower;
                break;
            case '>':
                op = o.BinaryOperator.Bigger;
                break;
            case '<=':
                op = o.BinaryOperator.LowerEquals;
                break;
            case '>=':
                op = o.BinaryOperator.BiggerEquals;
                break;
            default:
                throw new Error("Unsupported operation " + ast.operation);
        }
        return convertToStatementIfNeeded(mode, new o.BinaryOperatorExpr(op, this._visit(ast.left, _Mode.Expression), this._visit(ast.right, _Mode.Expression), undefined, this.convertSourceSpan(ast.span)));
    };
    _AstToIrVisitor.prototype.visitChain = function (ast, mode) {
        ensureStatementMode(mode, ast);
        return this.visitAll(ast.expressions, mode);
    };
    _AstToIrVisitor.prototype.visitConditional = function (ast, mode) {
        var value = this._visit(ast.condition, _Mode.Expression);
        return convertToStatementIfNeeded(mode, value.conditional(this._visit(ast.trueExp, _Mode.Expression), this._visit(ast.falseExp, _Mode.Expression), this.convertSourceSpan(ast.span)));
    };
    _AstToIrVisitor.prototype.visitPipe = function (ast, mode) {
        throw new Error("Illegal state: Pipes should have been converted into functions. Pipe: " + ast.name);
    };
    _AstToIrVisitor.prototype.visitFunctionCall = function (ast, mode) {
        var convertedArgs = this.visitAll(ast.args, _Mode.Expression);
        var fnResult;
        if (ast instanceof BuiltinFunctionCall) {
            fnResult = ast.converter(convertedArgs);
        }
        else {
            fnResult = this._visit(ast.target, _Mode.Expression)
                .callFn(convertedArgs, this.convertSourceSpan(ast.span));
        }
        return convertToStatementIfNeeded(mode, fnResult);
    };
    _AstToIrVisitor.prototype.visitImplicitReceiver = function (ast, mode) {
        ensureExpressionMode(mode, ast);
        this.usesImplicitReceiver = true;
        return this._implicitReceiver;
    };
    _AstToIrVisitor.prototype.visitInterpolation = function (ast, mode) {
        ensureExpressionMode(mode, ast);
        var args = [o.literal(ast.expressions.length)];
        for (var i = 0; i < ast.strings.length - 1; i++) {
            args.push(o.literal(ast.strings[i]));
            args.push(this._visit(ast.expressions[i], _Mode.Expression));
        }
        args.push(o.literal(ast.strings[ast.strings.length - 1]));
        if (this.interpolationFunction) {
            return this.interpolationFunction(args);
        }
        return ast.expressions.length <= 9 ?
            o.importExpr(Identifiers.inlineInterpolate).callFn(args) :
            o.importExpr(Identifiers.interpolate).callFn([
                args[0], o.literalArr(args.slice(1), undefined, this.convertSourceSpan(ast.span))
            ]);
    };
    _AstToIrVisitor.prototype.visitKeyedRead = function (ast, mode) {
        var leftMostSafe = this.leftMostSafeNode(ast);
        if (leftMostSafe) {
            return this.convertSafeAccess(ast, leftMostSafe, mode);
        }
        else {
            return convertToStatementIfNeeded(mode, this._visit(ast.obj, _Mode.Expression).key(this._visit(ast.key, _Mode.Expression)));
        }
    };
    _AstToIrVisitor.prototype.visitKeyedWrite = function (ast, mode) {
        var obj = this._visit(ast.obj, _Mode.Expression);
        var key = this._visit(ast.key, _Mode.Expression);
        var value = this._visit(ast.value, _Mode.Expression);
        return convertToStatementIfNeeded(mode, obj.key(key).set(value));
    };
    _AstToIrVisitor.prototype.visitLiteralArray = function (ast, mode) {
        throw new Error("Illegal State: literal arrays should have been converted into functions");
    };
    _AstToIrVisitor.prototype.visitLiteralMap = function (ast, mode) {
        throw new Error("Illegal State: literal maps should have been converted into functions");
    };
    _AstToIrVisitor.prototype.visitLiteralPrimitive = function (ast, mode) {
        // For literal values of null, undefined, true, or false allow type interference
        // to infer the type.
        var type = ast.value === null || ast.value === undefined || ast.value === true || ast.value === true ?
            o.INFERRED_TYPE :
            undefined;
        return convertToStatementIfNeeded(mode, o.literal(ast.value, type, this.convertSourceSpan(ast.span)));
    };
    _AstToIrVisitor.prototype._getLocal = function (name) {
        return this._localResolver.getLocal(name);
    };
    _AstToIrVisitor.prototype.visitMethodCall = function (ast, mode) {
        if (ast.receiver instanceof cdAst.ImplicitReceiver && ast.name == '$any') {
            var args = this.visitAll(ast.args, _Mode.Expression);
            if (args.length != 1) {
                throw new Error("Invalid call to $any, expected 1 argument but received " + (args.length || 'none'));
            }
            return args[0].cast(o.DYNAMIC_TYPE, this.convertSourceSpan(ast.span));
        }
        var leftMostSafe = this.leftMostSafeNode(ast);
        if (leftMostSafe) {
            return this.convertSafeAccess(ast, leftMostSafe, mode);
        }
        else {
            var args = this.visitAll(ast.args, _Mode.Expression);
            var prevUsesImplicitReceiver = this.usesImplicitReceiver;
            var result = null;
            var receiver = this._visit(ast.receiver, _Mode.Expression);
            if (receiver === this._implicitReceiver) {
                var varExpr = this._getLocal(ast.name);
                if (varExpr) {
                    // Restore the previous "usesImplicitReceiver" state since the implicit
                    // receiver has been replaced with a resolved local expression.
                    this.usesImplicitReceiver = prevUsesImplicitReceiver;
                    result = varExpr.callFn(args);
                }
                this.addImplicitReceiverAccess(ast.name);
            }
            if (result == null) {
                result = receiver.callMethod(ast.name, args, this.convertSourceSpan(ast.span));
            }
            return convertToStatementIfNeeded(mode, result);
        }
    };
    _AstToIrVisitor.prototype.visitPrefixNot = function (ast, mode) {
        return convertToStatementIfNeeded(mode, o.not(this._visit(ast.expression, _Mode.Expression)));
    };
    _AstToIrVisitor.prototype.visitNonNullAssert = function (ast, mode) {
        return convertToStatementIfNeeded(mode, o.assertNotNull(this._visit(ast.expression, _Mode.Expression)));
    };
    _AstToIrVisitor.prototype.visitPropertyRead = function (ast, mode) {
        var leftMostSafe = this.leftMostSafeNode(ast);
        if (leftMostSafe) {
            return this.convertSafeAccess(ast, leftMostSafe, mode);
        }
        else {
            var result = null;
            var prevUsesImplicitReceiver = this.usesImplicitReceiver;
            var receiver = this._visit(ast.receiver, _Mode.Expression);
            if (receiver === this._implicitReceiver) {
                result = this._getLocal(ast.name);
                if (result) {
                    // Restore the previous "usesImplicitReceiver" state since the implicit
                    // receiver has been replaced with a resolved local expression.
                    this.usesImplicitReceiver = prevUsesImplicitReceiver;
                }
                this.addImplicitReceiverAccess(ast.name);
            }
            if (result == null) {
                result = receiver.prop(ast.name);
            }
            return convertToStatementIfNeeded(mode, result);
        }
    };
    _AstToIrVisitor.prototype.visitPropertyWrite = function (ast, mode) {
        var receiver = this._visit(ast.receiver, _Mode.Expression);
        var prevUsesImplicitReceiver = this.usesImplicitReceiver;
        var varExpr = null;
        if (receiver === this._implicitReceiver) {
            var localExpr = this._getLocal(ast.name);
            if (localExpr) {
                if (localExpr instanceof o.ReadPropExpr) {
                    // If the local variable is a property read expression, it's a reference
                    // to a 'context.property' value and will be used as the target of the
                    // write expression.
                    varExpr = localExpr;
                    // Restore the previous "usesImplicitReceiver" state since the implicit
                    // receiver has been replaced with a resolved local expression.
                    this.usesImplicitReceiver = prevUsesImplicitReceiver;
                    this.addImplicitReceiverAccess(ast.name);
                }
                else {
                    // Otherwise it's an error.
                    var receiver_1 = ast.name;
                    var value = (ast.value instanceof cdAst.PropertyRead) ? ast.value.name : undefined;
                    throw new Error("Cannot assign value \"" + value + "\" to template variable \"" + receiver_1 + "\". Template variables are read-only.");
                }
            }
        }
        // If no local expression could be produced, use the original receiver's
        // property as the target.
        if (varExpr === null) {
            varExpr = receiver.prop(ast.name);
        }
        return convertToStatementIfNeeded(mode, varExpr.set(this._visit(ast.value, _Mode.Expression)));
    };
    _AstToIrVisitor.prototype.visitSafePropertyRead = function (ast, mode) {
        return this.convertSafeAccess(ast, this.leftMostSafeNode(ast), mode);
    };
    _AstToIrVisitor.prototype.visitSafeMethodCall = function (ast, mode) {
        return this.convertSafeAccess(ast, this.leftMostSafeNode(ast), mode);
    };
    _AstToIrVisitor.prototype.visitAll = function (asts, mode) {
        var _this = this;
        return asts.map(function (ast) { return _this._visit(ast, mode); });
    };
    _AstToIrVisitor.prototype.visitQuote = function (ast, mode) {
        throw new Error("Quotes are not supported for evaluation!\n        Statement: " + ast.uninterpretedExpression + " located at " + ast.location);
    };
    _AstToIrVisitor.prototype._visit = function (ast, mode) {
        var result = this._resultMap.get(ast);
        if (result)
            return result;
        return (this._nodeMap.get(ast) || ast).visit(this, mode);
    };
    _AstToIrVisitor.prototype.convertSafeAccess = function (ast, leftMostSafe, mode) {
        // If the expression contains a safe access node on the left it needs to be converted to
        // an expression that guards the access to the member by checking the receiver for blank. As
        // execution proceeds from left to right, the left most part of the expression must be guarded
        // first but, because member access is left associative, the right side of the expression is at
        // the top of the AST. The desired result requires lifting a copy of the left part of the
        // expression up to test it for blank before generating the unguarded version.
        // Consider, for example the following expression: a?.b.c?.d.e
        // This results in the ast:
        //         .
        //        / \
        //       ?.   e
        //      /  \
        //     .    d
        //    / \
        //   ?.  c
        //  /  \
        // a    b
        // The following tree should be generated:
        //
        //        /---- ? ----\
        //       /      |      \
        //     a   /--- ? ---\  null
        //        /     |     \
        //       .      .     null
        //      / \    / \
        //     .  c   .   e
        //    / \    / \
        //   a   b  .   d
        //         / \
        //        .   c
        //       / \
        //      a   b
        //
        // Notice that the first guard condition is the left hand of the left most safe access node
        // which comes in as leftMostSafe to this routine.
        var guardedExpression = this._visit(leftMostSafe.receiver, _Mode.Expression);
        var temporary = undefined;
        if (this.needsTemporary(leftMostSafe.receiver)) {
            // If the expression has method calls or pipes then we need to save the result into a
            // temporary variable to avoid calling stateful or impure code more than once.
            temporary = this.allocateTemporary();
            // Preserve the result in the temporary variable
            guardedExpression = temporary.set(guardedExpression);
            // Ensure all further references to the guarded expression refer to the temporary instead.
            this._resultMap.set(leftMostSafe.receiver, temporary);
        }
        var condition = guardedExpression.isBlank();
        // Convert the ast to an unguarded access to the receiver's member. The map will substitute
        // leftMostNode with its unguarded version in the call to `this.visit()`.
        if (leftMostSafe instanceof cdAst.SafeMethodCall) {
            this._nodeMap.set(leftMostSafe, new cdAst.MethodCall(leftMostSafe.span, leftMostSafe.sourceSpan, leftMostSafe.nameSpan, leftMostSafe.receiver, leftMostSafe.name, leftMostSafe.args));
        }
        else {
            this._nodeMap.set(leftMostSafe, new cdAst.PropertyRead(leftMostSafe.span, leftMostSafe.sourceSpan, leftMostSafe.nameSpan, leftMostSafe.receiver, leftMostSafe.name));
        }
        // Recursively convert the node now without the guarded member access.
        var access = this._visit(ast, _Mode.Expression);
        // Remove the mapping. This is not strictly required as the converter only traverses each node
        // once but is safer if the conversion is changed to traverse the nodes more than once.
        this._nodeMap.delete(leftMostSafe);
        // If we allocated a temporary, release it.
        if (temporary) {
            this.releaseTemporary(temporary);
        }
        // Produce the conditional
        return convertToStatementIfNeeded(mode, condition.conditional(o.literal(null), access));
    };
    // Given an expression of the form a?.b.c?.d.e then the left most safe node is
    // the (a?.b). The . and ?. are left associative thus can be rewritten as:
    // ((((a?.c).b).c)?.d).e. This returns the most deeply nested safe read or
    // safe method call as this needs to be transformed initially to:
    //   a == null ? null : a.c.b.c?.d.e
    // then to:
    //   a == null ? null : a.b.c == null ? null : a.b.c.d.e
    _AstToIrVisitor.prototype.leftMostSafeNode = function (ast) {
        var _this = this;
        var visit = function (visitor, ast) {
            return (_this._nodeMap.get(ast) || ast).visit(visitor);
        };
        return ast.visit({
            visitBinary: function (ast) {
                return null;
            },
            visitChain: function (ast) {
                return null;
            },
            visitConditional: function (ast) {
                return null;
            },
            visitFunctionCall: function (ast) {
                return null;
            },
            visitImplicitReceiver: function (ast) {
                return null;
            },
            visitInterpolation: function (ast) {
                return null;
            },
            visitKeyedRead: function (ast) {
                return visit(this, ast.obj);
            },
            visitKeyedWrite: function (ast) {
                return null;
            },
            visitLiteralArray: function (ast) {
                return null;
            },
            visitLiteralMap: function (ast) {
                return null;
            },
            visitLiteralPrimitive: function (ast) {
                return null;
            },
            visitMethodCall: function (ast) {
                return visit(this, ast.receiver);
            },
            visitPipe: function (ast) {
                return null;
            },
            visitPrefixNot: function (ast) {
                return null;
            },
            visitNonNullAssert: function (ast) {
                return null;
            },
            visitPropertyRead: function (ast) {
                return visit(this, ast.receiver);
            },
            visitPropertyWrite: function (ast) {
                return null;
            },
            visitQuote: function (ast) {
                return null;
            },
            visitSafeMethodCall: function (ast) {
                return visit(this, ast.receiver) || ast;
            },
            visitSafePropertyRead: function (ast) {
                return visit(this, ast.receiver) || ast;
            }
        });
    };
    // Returns true of the AST includes a method or a pipe indicating that, if the
    // expression is used as the target of a safe property or method access then
    // the expression should be stored into a temporary variable.
    _AstToIrVisitor.prototype.needsTemporary = function (ast) {
        var _this = this;
        var visit = function (visitor, ast) {
            return ast && (_this._nodeMap.get(ast) || ast).visit(visitor);
        };
        var visitSome = function (visitor, ast) {
            return ast.some(function (ast) { return visit(visitor, ast); });
        };
        return ast.visit({
            visitBinary: function (ast) {
                return visit(this, ast.left) || visit(this, ast.right);
            },
            visitChain: function (ast) {
                return false;
            },
            visitConditional: function (ast) {
                return visit(this, ast.condition) || visit(this, ast.trueExp) || visit(this, ast.falseExp);
            },
            visitFunctionCall: function (ast) {
                return true;
            },
            visitImplicitReceiver: function (ast) {
                return false;
            },
            visitInterpolation: function (ast) {
                return visitSome(this, ast.expressions);
            },
            visitKeyedRead: function (ast) {
                return false;
            },
            visitKeyedWrite: function (ast) {
                return false;
            },
            visitLiteralArray: function (ast) {
                return true;
            },
            visitLiteralMap: function (ast) {
                return true;
            },
            visitLiteralPrimitive: function (ast) {
                return false;
            },
            visitMethodCall: function (ast) {
                return true;
            },
            visitPipe: function (ast) {
                return true;
            },
            visitPrefixNot: function (ast) {
                return visit(this, ast.expression);
            },
            visitNonNullAssert: function (ast) {
                return visit(this, ast.expression);
            },
            visitPropertyRead: function (ast) {
                return false;
            },
            visitPropertyWrite: function (ast) {
                return false;
            },
            visitQuote: function (ast) {
                return false;
            },
            visitSafeMethodCall: function (ast) {
                return true;
            },
            visitSafePropertyRead: function (ast) {
                return false;
            }
        });
    };
    _AstToIrVisitor.prototype.allocateTemporary = function () {
        var tempNumber = this._currentTemporary++;
        this.temporaryCount = Math.max(this._currentTemporary, this.temporaryCount);
        return new o.ReadVarExpr(temporaryName(this.bindingId, tempNumber));
    };
    _AstToIrVisitor.prototype.releaseTemporary = function (temporary) {
        this._currentTemporary--;
        if (temporary.name != temporaryName(this.bindingId, this._currentTemporary)) {
            throw new Error("Temporary " + temporary.name + " released out of order");
        }
    };
    /**
     * Creates an absolute `ParseSourceSpan` from the relative `ParseSpan`.
     *
     * `ParseSpan` objects are relative to the start of the expression.
     * This method converts these to full `ParseSourceSpan` objects that
     * show where the span is within the overall source file.
     *
     * @param span the relative span to convert.
     * @returns a `ParseSourceSpan` for the given span or null if no
     * `baseSourceSpan` was provided to this class.
     */
    _AstToIrVisitor.prototype.convertSourceSpan = function (span) {
        if (this.baseSourceSpan) {
            var start = this.baseSourceSpan.start.moveBy(span.start);
            var end = this.baseSourceSpan.start.moveBy(span.end);
            return new ParseSourceSpan(start, end);
        }
        else {
            return null;
        }
    };
    /** Adds the name of an AST to the list of implicit receiver accesses. */
    _AstToIrVisitor.prototype.addImplicitReceiverAccess = function (name) {
        if (this.implicitReceiverAccesses) {
            this.implicitReceiverAccesses.add(name);
        }
    };
    return _AstToIrVisitor;
}());
function flattenStatements(arg, output) {
    if (Array.isArray(arg)) {
        arg.forEach(function (entry) { return flattenStatements(entry, output); });
    }
    else {
        output.push(arg);
    }
}
var DefaultLocalResolver = /** @class */ (function () {
    function DefaultLocalResolver() {
    }
    DefaultLocalResolver.prototype.notifyImplicitReceiverUse = function () { };
    DefaultLocalResolver.prototype.getLocal = function (name) {
        if (name === EventHandlerVars.event.name) {
            return EventHandlerVars.event;
        }
        return null;
    };
    return DefaultLocalResolver;
}());
function createCurrValueExpr(bindingId) {
    return o.variable("currVal_" + bindingId); // fix syntax highlighting: `
}
function createPreventDefaultVar(bindingId) {
    return o.variable("pd_" + bindingId);
}
function convertStmtIntoExpression(stmt) {
    if (stmt instanceof o.ExpressionStatement) {
        return stmt.expr;
    }
    else if (stmt instanceof o.ReturnStatement) {
        return stmt.value;
    }
    return null;
}
var BuiltinFunctionCall = /** @class */ (function (_super) {
    __extends(BuiltinFunctionCall, _super);
    function BuiltinFunctionCall(span, sourceSpan, args, converter) {
        var _this = _super.call(this, span, sourceSpan, null, args) || this;
        _this.args = args;
        _this.converter = converter;
        return _this;
    }
    return BuiltinFunctionCall;
}(cdAst.FunctionCall));
export { BuiltinFunctionCall };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbl9jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvY29tcGlsZXJfdXRpbC9leHByZXNzaW9uX2NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxLQUFLLEtBQUssTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTlDO0lBQUE7SUFFQSxDQUFDO0lBRFEsc0JBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLHVCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksZ0JBQWdCO0FBUzdCO0lBS0U7SUFDSTs7T0FFRztJQUNJLEtBQW9CO0lBQzNCOztPQUVHO0lBQ0ksWUFBMkI7UUFKM0IsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUlwQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUNwQzs7Ozs7Ozs7Ozs7Ozs7OztXQWdCRztRQUNILHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFzQjtZQUNuRCxJQUFJLFNBQVMsWUFBWSxDQUFDLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLElBQUk7Z0JBQzVFLFNBQVMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO2dCQUNuRCxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQWlCLENBQUM7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcs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SUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEO0lBQXlDLHVDQUFrQjtJQUN6RCw2QkFDSSxJQUFxQixFQUFFLFVBQW9DLEVBQVMsSUFBaUIsRUFDOUUsU0FBMkI7UUFGdEMsWUFHRSxrQkFBTSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FDcEM7UUFIdUUsVUFBSSxHQUFKLElBQUksQ0FBYTtRQUM5RSxlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXlDLEtBQUssQ0FBQyxZQUFZLEdBTTFEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBjZEFzdCBmcm9tICcuLi9leHByZXNzaW9uX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtJZGVudGlmaWVyc30gZnJvbSAnLi4vaWRlbnRpZmllcnMnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJWYXJzIHtcbiAgc3RhdGljIGV2ZW50ID0gby52YXJpYWJsZSgnJGV2ZW50Jyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxSZXNvbHZlciB7XG4gIGdldExvY2FsKG5hbWU6IHN0cmluZyk6IG8uRXhwcmVzc2lvbnxudWxsO1xuICBub3RpZnlJbXBsaWNpdFJlY2VpdmVyVXNlKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDb252ZXJ0QWN0aW9uQmluZGluZ1Jlc3VsdCB7XG4gIC8qKlxuICAgKiBTdG9yZSBzdGF0ZW1lbnRzIHdoaWNoIGFyZSByZW5kZXIzIGNvbXBhdGlibGUuXG4gICAqL1xuICByZW5kZXIzU3RtdHM6IG8uU3RhdGVtZW50W107XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqXG4gICAgICAgKiBSZW5kZXIyIGNvbXBhdGlibGUgc3RhdGVtZW50cyxcbiAgICAgICAqL1xuICAgICAgcHVibGljIHN0bXRzOiBvLlN0YXRlbWVudFtdLFxuICAgICAgLyoqXG4gICAgICAgKiBWYXJpYWJsZSBuYW1lIHVzZWQgd2l0aCByZW5kZXIyIGNvbXBhdGlibGUgc3RhdGVtZW50cy5cbiAgICAgICAqL1xuICAgICAgcHVibGljIGFsbG93RGVmYXVsdDogby5SZWFkVmFyRXhwcikge1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYml0IG9mIGEgaGFjay4gSXQgY29udmVydHMgc3RhdGVtZW50cyB3aGljaCByZW5kZXIyIGV4cGVjdHMgdG8gc3RhdGVtZW50cyB3aGljaCBhcmVcbiAgICAgKiBleHBlY3RlZCBieSByZW5kZXIzLlxuICAgICAqXG4gICAgICogRXhhbXBsZTogYDxkaXYgY2xpY2s9XCJkb1NvbWV0aGluZygkZXZlbnQpXCI+YCB3aWxsIGdlbmVyYXRlOlxuICAgICAqXG4gICAgICogUmVuZGVyMzpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBwZF9iOmFueSA9ICgoPGFueT5jdHguZG9Tb21ldGhpbmcoJGV2ZW50KSkgIT09IGZhbHNlKTtcbiAgICAgKiByZXR1cm4gcGRfYjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGJ1dCByZW5kZXIyIGV4cGVjdHM6XG4gICAgICogYGBgXG4gICAgICogcmV0dXJuIGN0eC5kb1NvbWV0aGluZygkZXZlbnQpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIC8vIFRPRE8obWlza28pOiByZW1vdmUgdGhpcyBoYWNrIG9uY2Ugd2Ugbm8gbG9uZ2VyIHN1cHBvcnQgVmlld0VuZ2luZS5cbiAgICB0aGlzLnJlbmRlcjNTdG10cyA9IHN0bXRzLm1hcCgoc3RhdGVtZW50OiBvLlN0YXRlbWVudCkgPT4ge1xuICAgICAgaWYgKHN0YXRlbWVudCBpbnN0YW5jZW9mIG8uRGVjbGFyZVZhclN0bXQgJiYgc3RhdGVtZW50Lm5hbWUgPT0gYWxsb3dEZWZhdWx0Lm5hbWUgJiZcbiAgICAgICAgICBzdGF0ZW1lbnQudmFsdWUgaW5zdGFuY2VvZiBvLkJpbmFyeU9wZXJhdG9yRXhwcikge1xuICAgICAgICBjb25zdCBsaHMgPSBzdGF0ZW1lbnQudmFsdWUubGhzIGFzIG8uQ2FzdEV4cHI7XG4gICAgICAgIHJldHVybiBuZXcgby5SZXR1cm5TdGF0ZW1lbnQobGhzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gKGFyZ3M6IG8uRXhwcmVzc2lvbltdKSA9PiBvLkV4cHJlc3Npb247XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIGV4cHJlc3Npb24gQVNUIGludG8gYW4gZXhlY3V0YWJsZSBvdXRwdXQgQVNULCBhc3N1bWluZyB0aGUgZXhwcmVzc2lvbiBpc1xuICogdXNlZCBpbiBhbiBhY3Rpb24gYmluZGluZyAoZS5nLiBhbiBldmVudCBoYW5kbGVyKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRBY3Rpb25CaW5kaW5nKFxuICAgIGxvY2FsUmVzb2x2ZXI6IExvY2FsUmVzb2x2ZXJ8bnVsbCwgaW1wbGljaXRSZWNlaXZlcjogby5FeHByZXNzaW9uLCBhY3Rpb246IGNkQXN0LkFTVCxcbiAgICBiaW5kaW5nSWQ6IHN0cmluZywgaW50ZXJwb2xhdGlvbkZ1bmN0aW9uPzogSW50ZXJwb2xhdGlvbkZ1bmN0aW9uLFxuICAgIGJhc2VTb3VyY2VTcGFuPzogUGFyc2VTb3VyY2VTcGFuLFxuICAgIGltcGxpY2l0UmVjZWl2ZXJBY2Nlc3Nlcz86IFNldDxzdHJpbmc+KTogQ29udmVydEFjdGlvbkJpbmRpbmdSZXN1bHQge1xuICBpZiAoIWxvY2FsUmVzb2x2ZXIpIHtcbiAgICBsb2NhbFJlc29sdmVyID0gbmV3IERlZmF1bHRMb2NhbFJlc29sdmVyKCk7XG4gIH1cbiAgY29uc3QgYWN0aW9uV2l0aG91dEJ1aWx0aW5zID0gY29udmVydFByb3BlcnR5QmluZGluZ0J1aWx0aW5zKFxuICAgICAge1xuICAgICAgICBjcmVhdGVMaXRlcmFsQXJyYXlDb252ZXJ0ZXI6IChhcmdDb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgLy8gTm90ZTogbm8gY2FjaGluZyBmb3IgbGl0ZXJhbCBhcnJheXMgaW4gYWN0aW9ucy5cbiAgICAgICAgICByZXR1cm4gKGFyZ3M6IG8uRXhwcmVzc2lvbltdKSA9PiBvLmxpdGVyYWxBcnIoYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUxpdGVyYWxNYXBDb252ZXJ0ZXI6IChrZXlzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbn1bXSkgPT4ge1xuICAgICAgICAgIC8vIE5vdGU6IG5vIGNhY2hpbmcgZm9yIGxpdGVyYWwgbWFwcyBpbiBhY3Rpb25zLlxuICAgICAgICAgIHJldHVybiAodmFsdWVzOiBvLkV4cHJlc3Npb25bXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IGtleXMubWFwKChrLCBpKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBrLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZWQ6IGsucXVvdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBvLmxpdGVyYWxNYXAoZW50cmllcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlUGlwZUNvbnZlcnRlcjogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBTdGF0ZTogQWN0aW9ucyBhcmUgbm90IGFsbG93ZWQgdG8gY29udGFpbiBwaXBlcy4gUGlwZTogJHtuYW1lfWApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aW9uKTtcblxuICBjb25zdCB2aXNpdG9yID0gbmV3IF9Bc3RUb0lyVmlzaXRvcihcbiAgICAgIGxvY2FsUmVzb2x2ZXIsIGltcGxpY2l0UmVjZWl2ZXIsIGJpbmRpbmdJZCwgaW50ZXJwb2xhdGlvbkZ1bmN0aW9uLCBiYXNlU291cmNlU3BhbixcbiAgICAgIGltcGxpY2l0UmVjZWl2ZXJBY2Nlc3Nlcyk7XG4gIGNvbnN0IGFjdGlvblN0bXRzOiBvLlN0YXRlbWVudFtdID0gW107XG4gIGZsYXR0ZW5TdGF0ZW1lbnRzKGFjdGlvbldpdGhvdXRCdWlsdGlucy52aXNpdCh2aXNpdG9yLCBfTW9kZS5TdGF0ZW1lbnQpLCBhY3Rpb25TdG10cyk7XG4gIHByZXBlbmRUZW1wb3JhcnlEZWNscyh2aXNpdG9yLnRlbXBvcmFyeUNvdW50LCBiaW5kaW5nSWQsIGFjdGlvblN0bXRzKTtcblxuICBpZiAodmlzaXRvci51c2VzSW1wbGljaXRSZWNlaXZlcikge1xuICAgIGxvY2FsUmVzb2x2ZXIubm90aWZ5SW1wbGljaXRSZWNlaXZlclVzZSgpO1xuICB9XG5cbiAgY29uc3QgbGFzdEluZGV4ID0gYWN0aW9uU3RtdHMubGVuZ3RoIC0gMTtcbiAgbGV0IHByZXZlbnREZWZhdWx0VmFyOiBvLlJlYWRWYXJFeHByID0gbnVsbCE7XG4gIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnQgPSBhY3Rpb25TdG10c1tsYXN0SW5kZXhdO1xuICAgIGNvbnN0IHJldHVybkV4cHIgPSBjb252ZXJ0U3RtdEludG9FeHByZXNzaW9uKGxhc3RTdGF0ZW1lbnQpO1xuICAgIGlmIChyZXR1cm5FeHByKSB7XG4gICAgICAvLyBOb3RlOiBXZSBuZWVkIHRvIGNhc3QgdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGNhbGwgdG8gZHluYW1pYyxcbiAgICAgIC8vIGFzIGl0IG1pZ2h0IGJlIGEgdm9pZCBtZXRob2QhXG4gICAgICBwcmV2ZW50RGVmYXVsdFZhciA9IGNyZWF0ZVByZXZlbnREZWZhdWx0VmFyKGJpbmRpbmdJZCk7XG4gICAgICBhY3Rpb25TdG10c1tsYXN0SW5kZXhdID1cbiAgICAgICAgICBwcmV2ZW50RGVmYXVsdFZhci5zZXQocmV0dXJuRXhwci5jYXN0KG8uRFlOQU1JQ19UWVBFKS5ub3RJZGVudGljYWwoby5saXRlcmFsKGZhbHNlKSkpXG4gICAgICAgICAgICAgIC50b0RlY2xTdG10KG51bGwsIFtvLlN0bXRNb2RpZmllci5GaW5hbF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IENvbnZlcnRBY3Rpb25CaW5kaW5nUmVzdWx0KGFjdGlvblN0bXRzLCBwcmV2ZW50RGVmYXVsdFZhcik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbHRpbkNvbnZlcnRlciB7XG4gIChhcmdzOiBvLkV4cHJlc3Npb25bXSk6IG8uRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWlsdGluQ29udmVydGVyRmFjdG9yeSB7XG4gIGNyZWF0ZUxpdGVyYWxBcnJheUNvbnZlcnRlcihhcmdDb3VudDogbnVtYmVyKTogQnVpbHRpbkNvbnZlcnRlcjtcbiAgY3JlYXRlTGl0ZXJhbE1hcENvbnZlcnRlcihrZXlzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbn1bXSk6IEJ1aWx0aW5Db252ZXJ0ZXI7XG4gIGNyZWF0ZVBpcGVDb252ZXJ0ZXIobmFtZTogc3RyaW5nLCBhcmdDb3VudDogbnVtYmVyKTogQnVpbHRpbkNvbnZlcnRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQcm9wZXJ0eUJpbmRpbmdCdWlsdGlucyhcbiAgICBjb252ZXJ0ZXJGYWN0b3J5OiBCdWlsdGluQ29udmVydGVyRmFjdG9yeSwgYXN0OiBjZEFzdC5BU1QpOiBjZEFzdC5BU1Qge1xuICByZXR1cm4gY29udmVydEJ1aWx0aW5zKGNvbnZlcnRlckZhY3RvcnksIGFzdCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb252ZXJ0UHJvcGVydHlCaW5kaW5nUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0bXRzOiBvLlN0YXRlbWVudFtdLCBwdWJsaWMgY3VyclZhbEV4cHI6IG8uRXhwcmVzc2lvbikge31cbn1cblxuZXhwb3J0IGVudW0gQmluZGluZ0Zvcm0ge1xuICAvLyBUaGUgZ2VuZXJhbCBmb3JtIG9mIGJpbmRpbmcgZXhwcmVzc2lvbiwgc3VwcG9ydHMgYWxsIGV4cHJlc3Npb25zLlxuICBHZW5lcmFsLFxuXG4gIC8vIFRyeSB0byBnZW5lcmF0ZSBhIHNpbXBsZSBiaW5kaW5nIChubyB0ZW1wb3JhcmllcyBvciBzdGF0ZW1lbnRzKVxuICAvLyBvdGhlcndpc2UgZ2VuZXJhdGUgYSBnZW5lcmFsIGJpbmRpbmdcbiAgVHJ5U2ltcGxlLFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBleHByZXNzaW9uIEFTVCBpbnRvIGFuIGV4ZWN1dGFibGUgb3V0cHV0IEFTVCwgYXNzdW1pbmcgdGhlIGV4cHJlc3Npb25cbiAqIGlzIHVzZWQgaW4gcHJvcGVydHkgYmluZGluZy4gVGhlIGV4cHJlc3Npb24gaGFzIHRvIGJlIHByZXByb2Nlc3NlZCB2aWFcbiAqIGBjb252ZXJ0UHJvcGVydHlCaW5kaW5nQnVpbHRpbnNgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFByb3BlcnR5QmluZGluZyhcbiAgICBsb2NhbFJlc29sdmVyOiBMb2NhbFJlc29sdmVyfG51bGwsIGltcGxpY2l0UmVjZWl2ZXI6IG8uRXhwcmVzc2lvbixcbiAgICBleHByZXNzaW9uV2l0aG91dEJ1aWx0aW5zOiBjZEFzdC5BU1QsIGJpbmRpbmdJZDogc3RyaW5nLCBmb3JtOiBCaW5kaW5nRm9ybSxcbiAgICBpbnRlcnBvbGF0aW9uRnVuY3Rpb24/OiBJbnRlcnBvbGF0aW9uRnVuY3Rpb24pOiBDb252ZXJ0UHJvcGVydHlCaW5kaW5nUmVzdWx0IHtcbiAgaWYgKCFsb2NhbFJlc29sdmVyKSB7XG4gICAgbG9jYWxSZXNvbHZlciA9IG5ldyBEZWZhdWx0TG9jYWxSZXNvbHZlcigpO1xuICB9XG4gIGNvbnN0IGN1cnJWYWxFeHByID0gY3JlYXRlQ3VyclZhbHVlRXhwcihiaW5kaW5nSWQpO1xuICBjb25zdCB2aXNpdG9yID1cbiAgICAgIG5ldyBfQXN0VG9JclZpc2l0b3IobG9jYWxSZXNvbHZlciwgaW1wbGljaXRSZWNlaXZlciwgYmluZGluZ0lkLCBpbnRlcnBvbGF0aW9uRnVuY3Rpb24pO1xuICBjb25zdCBvdXRwdXRFeHByOiBvLkV4cHJlc3Npb24gPSBleHByZXNzaW9uV2l0aG91dEJ1aWx0aW5zLnZpc2l0KHZpc2l0b3IsIF9Nb2RlLkV4cHJlc3Npb24pO1xuICBjb25zdCBzdG10czogby5TdGF0ZW1lbnRbXSA9IGdldFN0YXRlbWVudHNGcm9tVmlzaXRvcih2aXNpdG9yLCBiaW5kaW5nSWQpO1xuXG4gIGlmICh2aXNpdG9yLnVzZXNJbXBsaWNpdFJlY2VpdmVyKSB7XG4gICAgbG9jYWxSZXNvbHZlci5ub3RpZnlJbXBsaWNpdFJlY2VpdmVyVXNlKCk7XG4gIH1cblxuICBpZiAodmlzaXRvci50ZW1wb3JhcnlDb3VudCA9PT0gMCAmJiBmb3JtID09IEJpbmRpbmdGb3JtLlRyeVNpbXBsZSkge1xuICAgIHJldHVybiBuZXcgQ29udmVydFByb3BlcnR5QmluZGluZ1Jlc3VsdChbXSwgb3V0cHV0RXhwcik7XG4gIH1cblxuICBzdG10cy5wdXNoKGN1cnJWYWxFeHByLnNldChvdXRwdXRFeHByKS50b0RlY2xTdG10KG8uRFlOQU1JQ19UWVBFLCBbby5TdG10TW9kaWZpZXIuRmluYWxdKSk7XG4gIHJldHVybiBuZXcgQ29udmVydFByb3BlcnR5QmluZGluZ1Jlc3VsdChzdG10cywgY3VyclZhbEV4cHIpO1xufVxuXG4vKipcbiAqIEdpdmVuIHNvbWUgZXhwcmVzc2lvbiwgc3VjaCBhcyBhIGJpbmRpbmcgb3IgaW50ZXJwb2xhdGlvbiBleHByZXNzaW9uLCBhbmQgYSBjb250ZXh0IGV4cHJlc3Npb24gdG9cbiAqIGxvb2sgdmFsdWVzIHVwIG9uLCB2aXNpdCBlYWNoIGZhY2V0IG9mIHRoZSBnaXZlbiBleHByZXNzaW9uIHJlc29sdmluZyB2YWx1ZXMgZnJvbSB0aGUgY29udGV4dFxuICogZXhwcmVzc2lvbiBzdWNoIHRoYXQgYSBsaXN0IG9mIGFyZ3VtZW50cyBjYW4gYmUgZGVyaXZlZCBmcm9tIHRoZSBmb3VuZCB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBhc1xuICogYXJndW1lbnRzIHRvIGFuIGV4dGVybmFsIHVwZGF0ZSBpbnN0cnVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gbG9jYWxSZXNvbHZlciBUaGUgcmVzb2x2ZXIgdG8gdXNlIHRvIGxvb2sgdXAgZXhwcmVzc2lvbnMgYnkgbmFtZSBhcHByb3ByaWF0ZWx5XG4gKiBAcGFyYW0gY29udGV4dFZhcmlhYmxlRXhwcmVzc2lvbiBUaGUgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgdmFyaWFibGUgdXNlZCB0byBjcmVhdGVcbiAqIHRoZSBmaW5hbCBhcmd1bWVudCBleHByZXNzaW9uc1xuICogQHBhcmFtIGV4cHJlc3Npb25XaXRoQXJndW1lbnRzVG9FeHRyYWN0IFRoZSBleHByZXNzaW9uIHRvIHZpc2l0IHRvIGZpZ3VyZSBvdXQgd2hhdCB2YWx1ZXMgbmVlZCB0b1xuICogYmUgcmVzb2x2ZWQgYW5kIHdoYXQgYXJndW1lbnRzIGxpc3QgdG8gYnVpbGQuXG4gKiBAcGFyYW0gYmluZGluZ0lkIEEgbmFtZSBwcmVmaXggdXNlZCB0byBjcmVhdGUgdGVtcG9yYXJ5IHZhcmlhYmxlIG5hbWVzIGlmIHRoZXkncmUgbmVlZGVkIGZvciB0aGVcbiAqIGFyZ3VtZW50cyBnZW5lcmF0ZWRcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGV4cHJlc3Npb25zIHRoYXQgY2FuIGJlIHBhc3NlZCBhcyBhcmd1bWVudHMgdG8gaW5zdHJ1Y3Rpb24gZXhwcmVzc2lvbnMgbGlrZVxuICogYG8uaW1wb3J0RXhwcihSMy5wcm9wZXJ0eUludGVycG9sYXRlKS5jYWxsRm4ocmVzdWx0KWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRVcGRhdGVBcmd1bWVudHMoXG4gICAgbG9jYWxSZXNvbHZlcjogTG9jYWxSZXNvbHZlciwgY29udGV4dFZhcmlhYmxlRXhwcmVzc2lvbjogby5FeHByZXNzaW9uLFxuICAgIGV4cHJlc3Npb25XaXRoQXJndW1lbnRzVG9FeHRyYWN0OiBjZEFzdC5BU1QsIGJpbmRpbmdJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHZpc2l0b3IgPVxuICAgICAgbmV3IF9Bc3RUb0lyVmlzaXRvcihsb2NhbFJlc29sdmVyLCBjb250ZXh0VmFyaWFibGVFeHByZXNzaW9uLCBiaW5kaW5nSWQsIHVuZGVmaW5lZCk7XG4gIGNvbnN0IG91dHB1dEV4cHI6IG8uSW52b2tlRnVuY3Rpb25FeHByID1cbiAgICAgIGV4cHJlc3Npb25XaXRoQXJndW1lbnRzVG9FeHRyYWN0LnZpc2l0KHZpc2l0b3IsIF9Nb2RlLkV4cHJlc3Npb24pO1xuXG4gIGlmICh2aXNpdG9yLnVzZXNJbXBsaWNpdFJlY2VpdmVyKSB7XG4gICAgbG9jYWxSZXNvbHZlci5ub3RpZnlJbXBsaWNpdFJlY2VpdmVyVXNlKCk7XG4gIH1cblxuICBjb25zdCBzdG10cyA9IGdldFN0YXRlbWVudHNGcm9tVmlzaXRvcih2aXNpdG9yLCBiaW5kaW5nSWQpO1xuXG4gIC8vIFJlbW92aW5nIHRoZSBmaXJzdCBhcmd1bWVudCwgYmVjYXVzZSBpdCB3YXMgYSBsZW5ndGggZm9yIFZpZXdFbmdpbmUsIG5vdCBJdnkuXG4gIGxldCBhcmdzID0gb3V0cHV0RXhwci5hcmdzLnNsaWNlKDEpO1xuICBpZiAoZXhwcmVzc2lvbldpdGhBcmd1bWVudHNUb0V4dHJhY3QgaW5zdGFuY2VvZiBjZEFzdC5JbnRlcnBvbGF0aW9uKSB7XG4gICAgLy8gSWYgd2UncmUgZGVhbGluZyB3aXRoIGFuIGludGVycG9sYXRpb24gb2YgMSB2YWx1ZSB3aXRoIGFuIGVtcHR5IHByZWZpeCBhbmQgc3VmZml4LCByZWR1Y2UgdGhlXG4gICAgLy8gYXJncyByZXR1cm5lZCB0byBqdXN0IHRoZSB2YWx1ZSwgYmVjYXVzZSB3ZSdyZSBnb2luZyB0byBwYXNzIGl0IHRvIGEgc3BlY2lhbCBpbnN0cnVjdGlvbi5cbiAgICBjb25zdCBzdHJpbmdzID0gZXhwcmVzc2lvbldpdGhBcmd1bWVudHNUb0V4dHJhY3Quc3RyaW5ncztcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpIHtcbiAgICAgIC8vIFNpbmdsZSBhcmd1bWVudCBpbnRlcnBvbGF0ZSBpbnN0cnVjdGlvbnMuXG4gICAgICBhcmdzID0gW2FyZ3NbMV1dO1xuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPj0gMTkpIHtcbiAgICAgIC8vIDE5IG9yIG1vcmUgYXJndW1lbnRzIG11c3QgYmUgcGFzc2VkIHRvIHRoZSBgaW50ZXJwb2xhdGVWYC1zdHlsZSBpbnN0cnVjdGlvbnMsIHdoaWNoIGFjY2VwdFxuICAgICAgLy8gYW4gYXJyYXkgb2YgYXJndW1lbnRzXG4gICAgICBhcmdzID0gW28ubGl0ZXJhbEFycihhcmdzKV07XG4gICAgfVxuICB9XG4gIHJldHVybiB7c3RtdHMsIGFyZ3N9O1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZW1lbnRzRnJvbVZpc2l0b3IodmlzaXRvcjogX0FzdFRvSXJWaXNpdG9yLCBiaW5kaW5nSWQ6IHN0cmluZykge1xuICBjb25zdCBzdG10czogby5TdGF0ZW1lbnRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc2l0b3IudGVtcG9yYXJ5Q291bnQ7IGkrKykge1xuICAgIHN0bXRzLnB1c2godGVtcG9yYXJ5RGVjbGFyYXRpb24oYmluZGluZ0lkLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHN0bXRzO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0QnVpbHRpbnMoY29udmVydGVyRmFjdG9yeTogQnVpbHRpbkNvbnZlcnRlckZhY3RvcnksIGFzdDogY2RBc3QuQVNUKTogY2RBc3QuQVNUIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBfQnVpbHRpbkFzdENvbnZlcnRlcihjb252ZXJ0ZXJGYWN0b3J5KTtcbiAgcmV0dXJuIGFzdC52aXNpdCh2aXNpdG9yKTtcbn1cblxuZnVuY3Rpb24gdGVtcG9yYXJ5TmFtZShiaW5kaW5nSWQ6IHN0cmluZywgdGVtcG9yYXJ5TnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYHRtcF8ke2JpbmRpbmdJZH1fJHt0ZW1wb3JhcnlOdW1iZXJ9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBvcmFyeURlY2xhcmF0aW9uKGJpbmRpbmdJZDogc3RyaW5nLCB0ZW1wb3JhcnlOdW1iZXI6IG51bWJlcik6IG8uU3RhdGVtZW50IHtcbiAgcmV0dXJuIG5ldyBvLkRlY2xhcmVWYXJTdG10KHRlbXBvcmFyeU5hbWUoYmluZGluZ0lkLCB0ZW1wb3JhcnlOdW1iZXIpLCBvLk5VTExfRVhQUik7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRUZW1wb3JhcnlEZWNscyhcbiAgICB0ZW1wb3JhcnlDb3VudDogbnVtYmVyLCBiaW5kaW5nSWQ6IHN0cmluZywgc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXSkge1xuICBmb3IgKGxldCBpID0gdGVtcG9yYXJ5Q291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgIHN0YXRlbWVudHMudW5zaGlmdCh0ZW1wb3JhcnlEZWNsYXJhdGlvbihiaW5kaW5nSWQsIGkpKTtcbiAgfVxufVxuXG5lbnVtIF9Nb2RlIHtcbiAgU3RhdGVtZW50LFxuICBFeHByZXNzaW9uXG59XG5cbmZ1bmN0aW9uIGVuc3VyZVN0YXRlbWVudE1vZGUobW9kZTogX01vZGUsIGFzdDogY2RBc3QuQVNUKSB7XG4gIGlmIChtb2RlICE9PSBfTW9kZS5TdGF0ZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEgc3RhdGVtZW50LCBidXQgc2F3ICR7YXN0fWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuc3VyZUV4cHJlc3Npb25Nb2RlKG1vZGU6IF9Nb2RlLCBhc3Q6IGNkQXN0LkFTVCkge1xuICBpZiAobW9kZSAhPT0gX01vZGUuRXhwcmVzc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYW4gZXhwcmVzc2lvbiwgYnV0IHNhdyAke2FzdH1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdGF0ZW1lbnRJZk5lZWRlZChtb2RlOiBfTW9kZSwgZXhwcjogby5FeHByZXNzaW9uKTogby5FeHByZXNzaW9ufG8uU3RhdGVtZW50IHtcbiAgaWYgKG1vZGUgPT09IF9Nb2RlLlN0YXRlbWVudCkge1xuICAgIHJldHVybiBleHByLnRvU3RtdCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHByO1xuICB9XG59XG5cbmNsYXNzIF9CdWlsdGluQXN0Q29udmVydGVyIGV4dGVuZHMgY2RBc3QuQXN0VHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb252ZXJ0ZXJGYWN0b3J5OiBCdWlsdGluQ29udmVydGVyRmFjdG9yeSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgdmlzaXRQaXBlKGFzdDogY2RBc3QuQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgYXJncyA9IFthc3QuZXhwLCAuLi5hc3QuYXJnc10ubWFwKGFzdCA9PiBhc3QudmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgQnVpbHRpbkZ1bmN0aW9uQ2FsbChcbiAgICAgICAgYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhcmdzLFxuICAgICAgICB0aGlzLl9jb252ZXJ0ZXJGYWN0b3J5LmNyZWF0ZVBpcGVDb252ZXJ0ZXIoYXN0Lm5hbWUsIGFyZ3MubGVuZ3RoKSk7XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBjZEFzdC5MaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgYXJncyA9IGFzdC5leHByZXNzaW9ucy5tYXAoYXN0ID0+IGFzdC52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG5ldyBCdWlsdGluRnVuY3Rpb25DYWxsKFxuICAgICAgICBhc3Quc3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFyZ3MsXG4gICAgICAgIHRoaXMuX2NvbnZlcnRlckZhY3RvcnkuY3JlYXRlTGl0ZXJhbEFycmF5Q29udmVydGVyKGFzdC5leHByZXNzaW9ucy5sZW5ndGgpKTtcbiAgfVxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBjZEFzdC5MaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGFyZ3MgPSBhc3QudmFsdWVzLm1hcChhc3QgPT4gYXN0LnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcblxuICAgIHJldHVybiBuZXcgQnVpbHRpbkZ1bmN0aW9uQ2FsbChcbiAgICAgICAgYXN0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLCBhcmdzLCB0aGlzLl9jb252ZXJ0ZXJGYWN0b3J5LmNyZWF0ZUxpdGVyYWxNYXBDb252ZXJ0ZXIoYXN0LmtleXMpKTtcbiAgfVxufVxuXG5jbGFzcyBfQXN0VG9JclZpc2l0b3IgaW1wbGVtZW50cyBjZEFzdC5Bc3RWaXNpdG9yIHtcbiAgcHJpdmF0ZSBfbm9kZU1hcCA9IG5ldyBNYXA8Y2RBc3QuQVNULCBjZEFzdC5BU1Q+KCk7XG4gIHByaXZhdGUgX3Jlc3VsdE1hcCA9IG5ldyBNYXA8Y2RBc3QuQVNULCBvLkV4cHJlc3Npb24+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wb3Jhcnk6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB0ZW1wb3JhcnlDb3VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHVzZXNJbXBsaWNpdFJlY2VpdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9sb2NhbFJlc29sdmVyOiBMb2NhbFJlc29sdmVyLCBwcml2YXRlIF9pbXBsaWNpdFJlY2VpdmVyOiBvLkV4cHJlc3Npb24sXG4gICAgICBwcml2YXRlIGJpbmRpbmdJZDogc3RyaW5nLCBwcml2YXRlIGludGVycG9sYXRpb25GdW5jdGlvbjogSW50ZXJwb2xhdGlvbkZ1bmN0aW9ufHVuZGVmaW5lZCxcbiAgICAgIHByaXZhdGUgYmFzZVNvdXJjZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4sIHByaXZhdGUgaW1wbGljaXRSZWNlaXZlckFjY2Vzc2VzPzogU2V0PHN0cmluZz4pIHt9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBjZEFzdC5CaW5hcnksIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICBsZXQgb3A6IG8uQmluYXJ5T3BlcmF0b3I7XG4gICAgc3dpdGNoIChhc3Qub3BlcmF0aW9uKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLlBsdXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIG9wID0gby5CaW5hcnlPcGVyYXRvci5NaW51cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLk11bHRpcGx5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBvcCA9IG8uQmluYXJ5T3BlcmF0b3IuRGl2aWRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgICBvcCA9IG8uQmluYXJ5T3BlcmF0b3IuTW9kdWxvO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLkFuZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd8fCc6XG4gICAgICAgIG9wID0gby5CaW5hcnlPcGVyYXRvci5PcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9PSc6XG4gICAgICAgIG9wID0gby5CaW5hcnlPcGVyYXRvci5FcXVhbHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnIT0nOlxuICAgICAgICBvcCA9IG8uQmluYXJ5T3BlcmF0b3IuTm90RXF1YWxzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgIG9wID0gby5CaW5hcnlPcGVyYXRvci5JZGVudGljYWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLk5vdElkZW50aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc8JzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLkxvd2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz4nOlxuICAgICAgICBvcCA9IG8uQmluYXJ5T3BlcmF0b3IuQmlnZ2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLkxvd2VyRXF1YWxzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgb3AgPSBvLkJpbmFyeU9wZXJhdG9yLkJpZ2dlckVxdWFscztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIG9wZXJhdGlvbiAke2FzdC5vcGVyYXRpb259YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKFxuICAgICAgICBtb2RlLFxuICAgICAgICBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoXG4gICAgICAgICAgICBvcCwgdGhpcy5fdmlzaXQoYXN0LmxlZnQsIF9Nb2RlLkV4cHJlc3Npb24pLCB0aGlzLl92aXNpdChhc3QucmlnaHQsIF9Nb2RlLkV4cHJlc3Npb24pLFxuICAgICAgICAgICAgdW5kZWZpbmVkLCB0aGlzLmNvbnZlcnRTb3VyY2VTcGFuKGFzdC5zcGFuKSkpO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IGNkQXN0LkNoYWluLCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgZW5zdXJlU3RhdGVtZW50TW9kZShtb2RlLCBhc3QpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgbW9kZSk7XG4gIH1cblxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogY2RBc3QuQ29uZGl0aW9uYWwsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICBjb25zdCB2YWx1ZTogby5FeHByZXNzaW9uID0gdGhpcy5fdmlzaXQoYXN0LmNvbmRpdGlvbiwgX01vZGUuRXhwcmVzc2lvbik7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKFxuICAgICAgICBtb2RlLFxuICAgICAgICB2YWx1ZS5jb25kaXRpb25hbChcbiAgICAgICAgICAgIHRoaXMuX3Zpc2l0KGFzdC50cnVlRXhwLCBfTW9kZS5FeHByZXNzaW9uKSwgdGhpcy5fdmlzaXQoYXN0LmZhbHNlRXhwLCBfTW9kZS5FeHByZXNzaW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29udmVydFNvdXJjZVNwYW4oYXN0LnNwYW4pKSk7XG4gIH1cblxuICB2aXNpdFBpcGUoYXN0OiBjZEFzdC5CaW5kaW5nUGlwZSwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYElsbGVnYWwgc3RhdGU6IFBpcGVzIHNob3VsZCBoYXZlIGJlZW4gY29udmVydGVkIGludG8gZnVuY3Rpb25zLiBQaXBlOiAke2FzdC5uYW1lfWApO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBjZEFzdC5GdW5jdGlvbkNhbGwsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICBjb25zdCBjb252ZXJ0ZWRBcmdzID0gdGhpcy52aXNpdEFsbChhc3QuYXJncywgX01vZGUuRXhwcmVzc2lvbik7XG4gICAgbGV0IGZuUmVzdWx0OiBvLkV4cHJlc3Npb247XG4gICAgaWYgKGFzdCBpbnN0YW5jZW9mIEJ1aWx0aW5GdW5jdGlvbkNhbGwpIHtcbiAgICAgIGZuUmVzdWx0ID0gYXN0LmNvbnZlcnRlcihjb252ZXJ0ZWRBcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm5SZXN1bHQgPSB0aGlzLl92aXNpdChhc3QudGFyZ2V0ISwgX01vZGUuRXhwcmVzc2lvbilcbiAgICAgICAgICAgICAgICAgICAgIC5jYWxsRm4oY29udmVydGVkQXJncywgdGhpcy5jb252ZXJ0U291cmNlU3Bhbihhc3Quc3BhbikpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydFRvU3RhdGVtZW50SWZOZWVkZWQobW9kZSwgZm5SZXN1bHQpO1xuICB9XG5cbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogY2RBc3QuSW1wbGljaXRSZWNlaXZlciwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIGVuc3VyZUV4cHJlc3Npb25Nb2RlKG1vZGUsIGFzdCk7XG4gICAgdGhpcy51c2VzSW1wbGljaXRSZWNlaXZlciA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX2ltcGxpY2l0UmVjZWl2ZXI7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBjZEFzdC5JbnRlcnBvbGF0aW9uLCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgZW5zdXJlRXhwcmVzc2lvbk1vZGUobW9kZSwgYXN0KTtcbiAgICBjb25zdCBhcmdzID0gW28ubGl0ZXJhbChhc3QuZXhwcmVzc2lvbnMubGVuZ3RoKV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3Quc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChvLmxpdGVyYWwoYXN0LnN0cmluZ3NbaV0pKTtcbiAgICAgIGFyZ3MucHVzaCh0aGlzLl92aXNpdChhc3QuZXhwcmVzc2lvbnNbaV0sIF9Nb2RlLkV4cHJlc3Npb24pKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKG8ubGl0ZXJhbChhc3Quc3RyaW5nc1thc3Quc3RyaW5ncy5sZW5ndGggLSAxXSkpO1xuXG4gICAgaWYgKHRoaXMuaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRnVuY3Rpb24oYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBhc3QuZXhwcmVzc2lvbnMubGVuZ3RoIDw9IDkgP1xuICAgICAgICBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuaW5saW5lSW50ZXJwb2xhdGUpLmNhbGxGbihhcmdzKSA6XG4gICAgICAgIG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5pbnRlcnBvbGF0ZSkuY2FsbEZuKFtcbiAgICAgICAgICBhcmdzWzBdLCBvLmxpdGVyYWxBcnIoYXJncy5zbGljZSgxKSwgdW5kZWZpbmVkLCB0aGlzLmNvbnZlcnRTb3VyY2VTcGFuKGFzdC5zcGFuKSlcbiAgICAgICAgXSk7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IGNkQXN0LktleWVkUmVhZCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIGNvbnN0IGxlZnRNb3N0U2FmZSA9IHRoaXMubGVmdE1vc3RTYWZlTm9kZShhc3QpO1xuICAgIGlmIChsZWZ0TW9zdFNhZmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTYWZlQWNjZXNzKGFzdCwgbGVmdE1vc3RTYWZlLCBtb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKFxuICAgICAgICAgIG1vZGUsIHRoaXMuX3Zpc2l0KGFzdC5vYmosIF9Nb2RlLkV4cHJlc3Npb24pLmtleSh0aGlzLl92aXNpdChhc3Qua2V5LCBfTW9kZS5FeHByZXNzaW9uKSkpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IGNkQXN0LktleWVkV3JpdGUsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICBjb25zdCBvYmo6IG8uRXhwcmVzc2lvbiA9IHRoaXMuX3Zpc2l0KGFzdC5vYmosIF9Nb2RlLkV4cHJlc3Npb24pO1xuICAgIGNvbnN0IGtleTogby5FeHByZXNzaW9uID0gdGhpcy5fdmlzaXQoYXN0LmtleSwgX01vZGUuRXhwcmVzc2lvbik7XG4gICAgY29uc3QgdmFsdWU6IG8uRXhwcmVzc2lvbiA9IHRoaXMuX3Zpc2l0KGFzdC52YWx1ZSwgX01vZGUuRXhwcmVzc2lvbik7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKG1vZGUsIG9iai5rZXkoa2V5KS5zZXQodmFsdWUpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogY2RBc3QuTGl0ZXJhbEFycmF5LCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBsaXRlcmFsIGFycmF5cyBzaG91bGQgaGF2ZSBiZWVuIGNvbnZlcnRlZCBpbnRvIGZ1bmN0aW9uc2ApO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogY2RBc3QuTGl0ZXJhbE1hcCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBTdGF0ZTogbGl0ZXJhbCBtYXBzIHNob3VsZCBoYXZlIGJlZW4gY29udmVydGVkIGludG8gZnVuY3Rpb25zYCk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBjZEFzdC5MaXRlcmFsUHJpbWl0aXZlLCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgLy8gRm9yIGxpdGVyYWwgdmFsdWVzIG9mIG51bGwsIHVuZGVmaW5lZCwgdHJ1ZSwgb3IgZmFsc2UgYWxsb3cgdHlwZSBpbnRlcmZlcmVuY2VcbiAgICAvLyB0byBpbmZlciB0aGUgdHlwZS5cbiAgICBjb25zdCB0eXBlID1cbiAgICAgICAgYXN0LnZhbHVlID09PSBudWxsIHx8IGFzdC52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGFzdC52YWx1ZSA9PT0gdHJ1ZSB8fCBhc3QudmFsdWUgPT09IHRydWUgP1xuICAgICAgICBvLklORkVSUkVEX1RZUEUgOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKFxuICAgICAgICBtb2RlLCBvLmxpdGVyYWwoYXN0LnZhbHVlLCB0eXBlLCB0aGlzLmNvbnZlcnRTb3VyY2VTcGFuKGFzdC5zcGFuKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYWwobmFtZTogc3RyaW5nKTogby5FeHByZXNzaW9ufG51bGwge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbFJlc29sdmVyLmdldExvY2FsKG5hbWUpO1xuICB9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogY2RBc3QuTWV0aG9kQ2FsbCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIGlmIChhc3QucmVjZWl2ZXIgaW5zdGFuY2VvZiBjZEFzdC5JbXBsaWNpdFJlY2VpdmVyICYmIGFzdC5uYW1lID09ICckYW55Jykge1xuICAgICAgY29uc3QgYXJncyA9IHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIF9Nb2RlLkV4cHJlc3Npb24pIGFzIGFueVtdO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgY2FsbCB0byAkYW55LCBleHBlY3RlZCAxIGFyZ3VtZW50IGJ1dCByZWNlaXZlZCAke2FyZ3MubGVuZ3RoIHx8ICdub25lJ31gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoYXJnc1swXSBhcyBvLkV4cHJlc3Npb24pLmNhc3Qoby5EWU5BTUlDX1RZUEUsIHRoaXMuY29udmVydFNvdXJjZVNwYW4oYXN0LnNwYW4pKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0TW9zdFNhZmUgPSB0aGlzLmxlZnRNb3N0U2FmZU5vZGUoYXN0KTtcbiAgICBpZiAobGVmdE1vc3RTYWZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0U2FmZUFjY2Vzcyhhc3QsIGxlZnRNb3N0U2FmZSwgbW9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBfTW9kZS5FeHByZXNzaW9uKTtcbiAgICAgIGNvbnN0IHByZXZVc2VzSW1wbGljaXRSZWNlaXZlciA9IHRoaXMudXNlc0ltcGxpY2l0UmVjZWl2ZXI7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSBudWxsO1xuICAgICAgY29uc3QgcmVjZWl2ZXIgPSB0aGlzLl92aXNpdChhc3QucmVjZWl2ZXIsIF9Nb2RlLkV4cHJlc3Npb24pO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSB0aGlzLl9pbXBsaWNpdFJlY2VpdmVyKSB7XG4gICAgICAgIGNvbnN0IHZhckV4cHIgPSB0aGlzLl9nZXRMb2NhbChhc3QubmFtZSk7XG4gICAgICAgIGlmICh2YXJFeHByKSB7XG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgcHJldmlvdXMgXCJ1c2VzSW1wbGljaXRSZWNlaXZlclwiIHN0YXRlIHNpbmNlIHRoZSBpbXBsaWNpdFxuICAgICAgICAgIC8vIHJlY2VpdmVyIGhhcyBiZWVuIHJlcGxhY2VkIHdpdGggYSByZXNvbHZlZCBsb2NhbCBleHByZXNzaW9uLlxuICAgICAgICAgIHRoaXMudXNlc0ltcGxpY2l0UmVjZWl2ZXIgPSBwcmV2VXNlc0ltcGxpY2l0UmVjZWl2ZXI7XG4gICAgICAgICAgcmVzdWx0ID0gdmFyRXhwci5jYWxsRm4oYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJbXBsaWNpdFJlY2VpdmVyQWNjZXNzKGFzdC5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXN1bHQgPSByZWNlaXZlci5jYWxsTWV0aG9kKGFzdC5uYW1lLCBhcmdzLCB0aGlzLmNvbnZlcnRTb3VyY2VTcGFuKGFzdC5zcGFuKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udmVydFRvU3RhdGVtZW50SWZOZWVkZWQobW9kZSwgcmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IGNkQXN0LlByZWZpeE5vdCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIHJldHVybiBjb252ZXJ0VG9TdGF0ZW1lbnRJZk5lZWRlZChtb2RlLCBvLm5vdCh0aGlzLl92aXNpdChhc3QuZXhwcmVzc2lvbiwgX01vZGUuRXhwcmVzc2lvbikpKTtcbiAgfVxuXG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IGNkQXN0Lk5vbk51bGxBc3NlcnQsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICByZXR1cm4gY29udmVydFRvU3RhdGVtZW50SWZOZWVkZWQoXG4gICAgICAgIG1vZGUsIG8uYXNzZXJ0Tm90TnVsbCh0aGlzLl92aXNpdChhc3QuZXhwcmVzc2lvbiwgX01vZGUuRXhwcmVzc2lvbikpKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogY2RBc3QuUHJvcGVydHlSZWFkLCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgY29uc3QgbGVmdE1vc3RTYWZlID0gdGhpcy5sZWZ0TW9zdFNhZmVOb2RlKGFzdCk7XG4gICAgaWYgKGxlZnRNb3N0U2FmZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFNhZmVBY2Nlc3MoYXN0LCBsZWZ0TW9zdFNhZmUsIG1vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSBudWxsO1xuICAgICAgY29uc3QgcHJldlVzZXNJbXBsaWNpdFJlY2VpdmVyID0gdGhpcy51c2VzSW1wbGljaXRSZWNlaXZlcjtcbiAgICAgIGNvbnN0IHJlY2VpdmVyID0gdGhpcy5fdmlzaXQoYXN0LnJlY2VpdmVyLCBfTW9kZS5FeHByZXNzaW9uKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gdGhpcy5faW1wbGljaXRSZWNlaXZlcikge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9nZXRMb2NhbChhc3QubmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBwcmV2aW91cyBcInVzZXNJbXBsaWNpdFJlY2VpdmVyXCIgc3RhdGUgc2luY2UgdGhlIGltcGxpY2l0XG4gICAgICAgICAgLy8gcmVjZWl2ZXIgaGFzIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHJlc29sdmVkIGxvY2FsIGV4cHJlc3Npb24uXG4gICAgICAgICAgdGhpcy51c2VzSW1wbGljaXRSZWNlaXZlciA9IHByZXZVc2VzSW1wbGljaXRSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEltcGxpY2l0UmVjZWl2ZXJBY2Nlc3MoYXN0Lm5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2VpdmVyLnByb3AoYXN0Lm5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKG1vZGUsIHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogY2RBc3QuUHJvcGVydHlXcml0ZSwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIGNvbnN0IHJlY2VpdmVyOiBvLkV4cHJlc3Npb24gPSB0aGlzLl92aXNpdChhc3QucmVjZWl2ZXIsIF9Nb2RlLkV4cHJlc3Npb24pO1xuICAgIGNvbnN0IHByZXZVc2VzSW1wbGljaXRSZWNlaXZlciA9IHRoaXMudXNlc0ltcGxpY2l0UmVjZWl2ZXI7XG5cbiAgICBsZXQgdmFyRXhwcjogby5SZWFkUHJvcEV4cHJ8bnVsbCA9IG51bGw7XG4gICAgaWYgKHJlY2VpdmVyID09PSB0aGlzLl9pbXBsaWNpdFJlY2VpdmVyKSB7XG4gICAgICBjb25zdCBsb2NhbEV4cHIgPSB0aGlzLl9nZXRMb2NhbChhc3QubmFtZSk7XG4gICAgICBpZiAobG9jYWxFeHByKSB7XG4gICAgICAgIGlmIChsb2NhbEV4cHIgaW5zdGFuY2VvZiBvLlJlYWRQcm9wRXhwcikge1xuICAgICAgICAgIC8vIElmIHRoZSBsb2NhbCB2YXJpYWJsZSBpcyBhIHByb3BlcnR5IHJlYWQgZXhwcmVzc2lvbiwgaXQncyBhIHJlZmVyZW5jZVxuICAgICAgICAgIC8vIHRvIGEgJ2NvbnRleHQucHJvcGVydHknIHZhbHVlIGFuZCB3aWxsIGJlIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGVcbiAgICAgICAgICAvLyB3cml0ZSBleHByZXNzaW9uLlxuICAgICAgICAgIHZhckV4cHIgPSBsb2NhbEV4cHI7XG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgcHJldmlvdXMgXCJ1c2VzSW1wbGljaXRSZWNlaXZlclwiIHN0YXRlIHNpbmNlIHRoZSBpbXBsaWNpdFxuICAgICAgICAgIC8vIHJlY2VpdmVyIGhhcyBiZWVuIHJlcGxhY2VkIHdpdGggYSByZXNvbHZlZCBsb2NhbCBleHByZXNzaW9uLlxuICAgICAgICAgIHRoaXMudXNlc0ltcGxpY2l0UmVjZWl2ZXIgPSBwcmV2VXNlc0ltcGxpY2l0UmVjZWl2ZXI7XG4gICAgICAgICAgdGhpcy5hZGRJbXBsaWNpdFJlY2VpdmVyQWNjZXNzKGFzdC5uYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgaXQncyBhbiBlcnJvci5cbiAgICAgICAgICBjb25zdCByZWNlaXZlciA9IGFzdC5uYW1lO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGFzdC52YWx1ZSBpbnN0YW5jZW9mIGNkQXN0LlByb3BlcnR5UmVhZCkgPyBhc3QudmFsdWUubmFtZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhc3NpZ24gdmFsdWUgXCIke3ZhbHVlfVwiIHRvIHRlbXBsYXRlIHZhcmlhYmxlIFwiJHtcbiAgICAgICAgICAgICAgcmVjZWl2ZXJ9XCIuIFRlbXBsYXRlIHZhcmlhYmxlcyBhcmUgcmVhZC1vbmx5LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIGxvY2FsIGV4cHJlc3Npb24gY291bGQgYmUgcHJvZHVjZWQsIHVzZSB0aGUgb3JpZ2luYWwgcmVjZWl2ZXInc1xuICAgIC8vIHByb3BlcnR5IGFzIHRoZSB0YXJnZXQuXG4gICAgaWYgKHZhckV4cHIgPT09IG51bGwpIHtcbiAgICAgIHZhckV4cHIgPSByZWNlaXZlci5wcm9wKGFzdC5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRUb1N0YXRlbWVudElmTmVlZGVkKG1vZGUsIHZhckV4cHIuc2V0KHRoaXMuX3Zpc2l0KGFzdC52YWx1ZSwgX01vZGUuRXhwcmVzc2lvbikpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IGNkQXN0LlNhZmVQcm9wZXJ0eVJlYWQsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0U2FmZUFjY2Vzcyhhc3QsIHRoaXMubGVmdE1vc3RTYWZlTm9kZShhc3QpLCBtb2RlKTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBjZEFzdC5TYWZlTWV0aG9kQ2FsbCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRTYWZlQWNjZXNzKGFzdCwgdGhpcy5sZWZ0TW9zdFNhZmVOb2RlKGFzdCksIG1vZGUpO1xuICB9XG5cbiAgdmlzaXRBbGwoYXN0czogY2RBc3QuQVNUW10sIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICByZXR1cm4gYXN0cy5tYXAoYXN0ID0+IHRoaXMuX3Zpc2l0KGFzdCwgbW9kZSkpO1xuICB9XG5cbiAgdmlzaXRRdW90ZShhc3Q6IGNkQXN0LlF1b3RlLCBtb2RlOiBfTW9kZSk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBRdW90ZXMgYXJlIG5vdCBzdXBwb3J0ZWQgZm9yIGV2YWx1YXRpb24hXG4gICAgICAgIFN0YXRlbWVudDogJHthc3QudW5pbnRlcnByZXRlZEV4cHJlc3Npb259IGxvY2F0ZWQgYXQgJHthc3QubG9jYXRpb259YCk7XG4gIH1cblxuICBwcml2YXRlIF92aXNpdChhc3Q6IGNkQXN0LkFTVCwgbW9kZTogX01vZGUpOiBhbnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3Jlc3VsdE1hcC5nZXQoYXN0KTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiAodGhpcy5fbm9kZU1hcC5nZXQoYXN0KSB8fCBhc3QpLnZpc2l0KHRoaXMsIG1vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0U2FmZUFjY2VzcyhcbiAgICAgIGFzdDogY2RBc3QuQVNULCBsZWZ0TW9zdFNhZmU6IGNkQXN0LlNhZmVNZXRob2RDYWxsfGNkQXN0LlNhZmVQcm9wZXJ0eVJlYWQsIG1vZGU6IF9Nb2RlKTogYW55IHtcbiAgICAvLyBJZiB0aGUgZXhwcmVzc2lvbiBjb250YWlucyBhIHNhZmUgYWNjZXNzIG5vZGUgb24gdGhlIGxlZnQgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvXG4gICAgLy8gYW4gZXhwcmVzc2lvbiB0aGF0IGd1YXJkcyB0aGUgYWNjZXNzIHRvIHRoZSBtZW1iZXIgYnkgY2hlY2tpbmcgdGhlIHJlY2VpdmVyIGZvciBibGFuay4gQXNcbiAgICAvLyBleGVjdXRpb24gcHJvY2VlZHMgZnJvbSBsZWZ0IHRvIHJpZ2h0LCB0aGUgbGVmdCBtb3N0IHBhcnQgb2YgdGhlIGV4cHJlc3Npb24gbXVzdCBiZSBndWFyZGVkXG4gICAgLy8gZmlyc3QgYnV0LCBiZWNhdXNlIG1lbWJlciBhY2Nlc3MgaXMgbGVmdCBhc3NvY2lhdGl2ZSwgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGV4cHJlc3Npb24gaXMgYXRcbiAgICAvLyB0aGUgdG9wIG9mIHRoZSBBU1QuIFRoZSBkZXNpcmVkIHJlc3VsdCByZXF1aXJlcyBsaWZ0aW5nIGEgY29weSBvZiB0aGUgbGVmdCBwYXJ0IG9mIHRoZVxuICAgIC8vIGV4cHJlc3Npb24gdXAgdG8gdGVzdCBpdCBmb3IgYmxhbmsgYmVmb3JlIGdlbmVyYXRpbmcgdGhlIHVuZ3VhcmRlZCB2ZXJzaW9uLlxuXG4gICAgLy8gQ29uc2lkZXIsIGZvciBleGFtcGxlIHRoZSBmb2xsb3dpbmcgZXhwcmVzc2lvbjogYT8uYi5jPy5kLmVcblxuICAgIC8vIFRoaXMgcmVzdWx0cyBpbiB0aGUgYXN0OlxuICAgIC8vICAgICAgICAgLlxuICAgIC8vICAgICAgICAvIFxcXG4gICAgLy8gICAgICAgPy4gICBlXG4gICAgLy8gICAgICAvICBcXFxuICAgIC8vICAgICAuICAgIGRcbiAgICAvLyAgICAvIFxcXG4gICAgLy8gICA/LiAgY1xuICAgIC8vICAvICBcXFxuICAgIC8vIGEgICAgYlxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyB0cmVlIHNob3VsZCBiZSBnZW5lcmF0ZWQ6XG4gICAgLy9cbiAgICAvLyAgICAgICAgLy0tLS0gPyAtLS0tXFxcbiAgICAvLyAgICAgICAvICAgICAgfCAgICAgIFxcXG4gICAgLy8gICAgIGEgICAvLS0tID8gLS0tXFwgIG51bGxcbiAgICAvLyAgICAgICAgLyAgICAgfCAgICAgXFxcbiAgICAvLyAgICAgICAuICAgICAgLiAgICAgbnVsbFxuICAgIC8vICAgICAgLyBcXCAgICAvIFxcXG4gICAgLy8gICAgIC4gIGMgICAuICAgZVxuICAgIC8vICAgIC8gXFwgICAgLyBcXFxuICAgIC8vICAgYSAgIGIgIC4gICBkXG4gICAgLy8gICAgICAgICAvIFxcXG4gICAgLy8gICAgICAgIC4gICBjXG4gICAgLy8gICAgICAgLyBcXFxuICAgIC8vICAgICAgYSAgIGJcbiAgICAvL1xuICAgIC8vIE5vdGljZSB0aGF0IHRoZSBmaXJzdCBndWFyZCBjb25kaXRpb24gaXMgdGhlIGxlZnQgaGFuZCBvZiB0aGUgbGVmdCBtb3N0IHNhZmUgYWNjZXNzIG5vZGVcbiAgICAvLyB3aGljaCBjb21lcyBpbiBhcyBsZWZ0TW9zdFNhZmUgdG8gdGhpcyByb3V0aW5lLlxuXG4gICAgbGV0IGd1YXJkZWRFeHByZXNzaW9uID0gdGhpcy5fdmlzaXQobGVmdE1vc3RTYWZlLnJlY2VpdmVyLCBfTW9kZS5FeHByZXNzaW9uKTtcbiAgICBsZXQgdGVtcG9yYXJ5OiBvLlJlYWRWYXJFeHByID0gdW5kZWZpbmVkITtcbiAgICBpZiAodGhpcy5uZWVkc1RlbXBvcmFyeShsZWZ0TW9zdFNhZmUucmVjZWl2ZXIpKSB7XG4gICAgICAvLyBJZiB0aGUgZXhwcmVzc2lvbiBoYXMgbWV0aG9kIGNhbGxzIG9yIHBpcGVzIHRoZW4gd2UgbmVlZCB0byBzYXZlIHRoZSByZXN1bHQgaW50byBhXG4gICAgICAvLyB0ZW1wb3JhcnkgdmFyaWFibGUgdG8gYXZvaWQgY2FsbGluZyBzdGF0ZWZ1bCBvciBpbXB1cmUgY29kZSBtb3JlIHRoYW4gb25jZS5cbiAgICAgIHRlbXBvcmFyeSA9IHRoaXMuYWxsb2NhdGVUZW1wb3JhcnkoKTtcblxuICAgICAgLy8gUHJlc2VydmUgdGhlIHJlc3VsdCBpbiB0aGUgdGVtcG9yYXJ5IHZhcmlhYmxlXG4gICAgICBndWFyZGVkRXhwcmVzc2lvbiA9IHRlbXBvcmFyeS5zZXQoZ3VhcmRlZEV4cHJlc3Npb24pO1xuXG4gICAgICAvLyBFbnN1cmUgYWxsIGZ1cnRoZXIgcmVmZXJlbmNlcyB0byB0aGUgZ3VhcmRlZCBleHByZXNzaW9uIHJlZmVyIHRvIHRoZSB0ZW1wb3JhcnkgaW5zdGVhZC5cbiAgICAgIHRoaXMuX3Jlc3VsdE1hcC5zZXQobGVmdE1vc3RTYWZlLnJlY2VpdmVyLCB0ZW1wb3JhcnkpO1xuICAgIH1cbiAgICBjb25zdCBjb25kaXRpb24gPSBndWFyZGVkRXhwcmVzc2lvbi5pc0JsYW5rKCk7XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBhc3QgdG8gYW4gdW5ndWFyZGVkIGFjY2VzcyB0byB0aGUgcmVjZWl2ZXIncyBtZW1iZXIuIFRoZSBtYXAgd2lsbCBzdWJzdGl0dXRlXG4gICAgLy8gbGVmdE1vc3ROb2RlIHdpdGggaXRzIHVuZ3VhcmRlZCB2ZXJzaW9uIGluIHRoZSBjYWxsIHRvIGB0aGlzLnZpc2l0KClgLlxuICAgIGlmIChsZWZ0TW9zdFNhZmUgaW5zdGFuY2VvZiBjZEFzdC5TYWZlTWV0aG9kQ2FsbCkge1xuICAgICAgdGhpcy5fbm9kZU1hcC5zZXQoXG4gICAgICAgICAgbGVmdE1vc3RTYWZlLFxuICAgICAgICAgIG5ldyBjZEFzdC5NZXRob2RDYWxsKFxuICAgICAgICAgICAgICBsZWZ0TW9zdFNhZmUuc3BhbiwgbGVmdE1vc3RTYWZlLnNvdXJjZVNwYW4sIGxlZnRNb3N0U2FmZS5uYW1lU3BhbixcbiAgICAgICAgICAgICAgbGVmdE1vc3RTYWZlLnJlY2VpdmVyLCBsZWZ0TW9zdFNhZmUubmFtZSwgbGVmdE1vc3RTYWZlLmFyZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbm9kZU1hcC5zZXQoXG4gICAgICAgICAgbGVmdE1vc3RTYWZlLFxuICAgICAgICAgIG5ldyBjZEFzdC5Qcm9wZXJ0eVJlYWQoXG4gICAgICAgICAgICAgIGxlZnRNb3N0U2FmZS5zcGFuLCBsZWZ0TW9zdFNhZmUuc291cmNlU3BhbiwgbGVmdE1vc3RTYWZlLm5hbWVTcGFuLFxuICAgICAgICAgICAgICBsZWZ0TW9zdFNhZmUucmVjZWl2ZXIsIGxlZnRNb3N0U2FmZS5uYW1lKSk7XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB0aGUgbm9kZSBub3cgd2l0aG91dCB0aGUgZ3VhcmRlZCBtZW1iZXIgYWNjZXNzLlxuICAgIGNvbnN0IGFjY2VzcyA9IHRoaXMuX3Zpc2l0KGFzdCwgX01vZGUuRXhwcmVzc2lvbik7XG5cbiAgICAvLyBSZW1vdmUgdGhlIG1hcHBpbmcuIFRoaXMgaXMgbm90IHN0cmljdGx5IHJlcXVpcmVkIGFzIHRoZSBjb252ZXJ0ZXIgb25seSB0cmF2ZXJzZXMgZWFjaCBub2RlXG4gICAgLy8gb25jZSBidXQgaXMgc2FmZXIgaWYgdGhlIGNvbnZlcnNpb24gaXMgY2hhbmdlZCB0byB0cmF2ZXJzZSB0aGUgbm9kZXMgbW9yZSB0aGFuIG9uY2UuXG4gICAgdGhpcy5fbm9kZU1hcC5kZWxldGUobGVmdE1vc3RTYWZlKTtcblxuICAgIC8vIElmIHdlIGFsbG9jYXRlZCBhIHRlbXBvcmFyeSwgcmVsZWFzZSBpdC5cbiAgICBpZiAodGVtcG9yYXJ5KSB7XG4gICAgICB0aGlzLnJlbGVhc2VUZW1wb3JhcnkodGVtcG9yYXJ5KTtcbiAgICB9XG5cbiAgICAvLyBQcm9kdWNlIHRoZSBjb25kaXRpb25hbFxuICAgIHJldHVybiBjb252ZXJ0VG9TdGF0ZW1lbnRJZk5lZWRlZChtb2RlLCBjb25kaXRpb24uY29uZGl0aW9uYWwoby5saXRlcmFsKG51bGwpLCBhY2Nlc3MpKTtcbiAgfVxuXG4gIC8vIEdpdmVuIGFuIGV4cHJlc3Npb24gb2YgdGhlIGZvcm0gYT8uYi5jPy5kLmUgdGhlbiB0aGUgbGVmdCBtb3N0IHNhZmUgbm9kZSBpc1xuICAvLyB0aGUgKGE/LmIpLiBUaGUgLiBhbmQgPy4gYXJlIGxlZnQgYXNzb2NpYXRpdmUgdGh1cyBjYW4gYmUgcmV3cml0dGVuIGFzOlxuICAvLyAoKCgoYT8uYykuYikuYyk/LmQpLmUuIFRoaXMgcmV0dXJucyB0aGUgbW9zdCBkZWVwbHkgbmVzdGVkIHNhZmUgcmVhZCBvclxuICAvLyBzYWZlIG1ldGhvZCBjYWxsIGFzIHRoaXMgbmVlZHMgdG8gYmUgdHJhbnNmb3JtZWQgaW5pdGlhbGx5IHRvOlxuICAvLyAgIGEgPT0gbnVsbCA/IG51bGwgOiBhLmMuYi5jPy5kLmVcbiAgLy8gdGhlbiB0bzpcbiAgLy8gICBhID09IG51bGwgPyBudWxsIDogYS5iLmMgPT0gbnVsbCA/IG51bGwgOiBhLmIuYy5kLmVcbiAgcHJpdmF0ZSBsZWZ0TW9zdFNhZmVOb2RlKGFzdDogY2RBc3QuQVNUKTogY2RBc3QuU2FmZVByb3BlcnR5UmVhZHxjZEFzdC5TYWZlTWV0aG9kQ2FsbCB7XG4gICAgY29uc3QgdmlzaXQgPSAodmlzaXRvcjogY2RBc3QuQXN0VmlzaXRvciwgYXN0OiBjZEFzdC5BU1QpOiBhbnkgPT4ge1xuICAgICAgcmV0dXJuICh0aGlzLl9ub2RlTWFwLmdldChhc3QpIHx8IGFzdCkudmlzaXQodmlzaXRvcik7XG4gICAgfTtcbiAgICByZXR1cm4gYXN0LnZpc2l0KHtcbiAgICAgIHZpc2l0QmluYXJ5KGFzdDogY2RBc3QuQmluYXJ5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0Q2hhaW4oYXN0OiBjZEFzdC5DaGFpbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICB2aXNpdENvbmRpdGlvbmFsKGFzdDogY2RBc3QuQ29uZGl0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBjZEFzdC5GdW5jdGlvbkNhbGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogY2RBc3QuSW1wbGljaXRSZWNlaXZlcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBjZEFzdC5JbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0S2V5ZWRSZWFkKGFzdDogY2RBc3QuS2V5ZWRSZWFkKSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3Qub2JqKTtcbiAgICAgIH0sXG4gICAgICB2aXNpdEtleWVkV3JpdGUoYXN0OiBjZEFzdC5LZXllZFdyaXRlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogY2RBc3QuTGl0ZXJhbEFycmF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IGNkQXN0LkxpdGVyYWxNYXApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogY2RBc3QuTGl0ZXJhbFByaW1pdGl2ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICB2aXNpdE1ldGhvZENhbGwoYXN0OiBjZEFzdC5NZXRob2RDYWxsKSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QucmVjZWl2ZXIpO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UGlwZShhc3Q6IGNkQXN0LkJpbmRpbmdQaXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UHJlZml4Tm90KGFzdDogY2RBc3QuUHJlZml4Tm90KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IGNkQXN0Lk5vbk51bGxBc3NlcnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBjZEFzdC5Qcm9wZXJ0eVJlYWQpIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0KHRoaXMsIGFzdC5yZWNlaXZlcik7XG4gICAgICB9LFxuICAgICAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogY2RBc3QuUHJvcGVydHlXcml0ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICB2aXNpdFF1b3RlKGFzdDogY2RBc3QuUXVvdGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IGNkQXN0LlNhZmVNZXRob2RDYWxsKSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QucmVjZWl2ZXIpIHx8IGFzdDtcbiAgICAgIH0sXG4gICAgICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBjZEFzdC5TYWZlUHJvcGVydHlSZWFkKSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QucmVjZWl2ZXIpIHx8IGFzdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBvZiB0aGUgQVNUIGluY2x1ZGVzIGEgbWV0aG9kIG9yIGEgcGlwZSBpbmRpY2F0aW5nIHRoYXQsIGlmIHRoZVxuICAvLyBleHByZXNzaW9uIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiBhIHNhZmUgcHJvcGVydHkgb3IgbWV0aG9kIGFjY2VzcyB0aGVuXG4gIC8vIHRoZSBleHByZXNzaW9uIHNob3VsZCBiZSBzdG9yZWQgaW50byBhIHRlbXBvcmFyeSB2YXJpYWJsZS5cbiAgcHJpdmF0ZSBuZWVkc1RlbXBvcmFyeShhc3Q6IGNkQXN0LkFTVCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZpc2l0ID0gKHZpc2l0b3I6IGNkQXN0LkFzdFZpc2l0b3IsIGFzdDogY2RBc3QuQVNUKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gYXN0ICYmICh0aGlzLl9ub2RlTWFwLmdldChhc3QpIHx8IGFzdCkudmlzaXQodmlzaXRvcik7XG4gICAgfTtcbiAgICBjb25zdCB2aXNpdFNvbWUgPSAodmlzaXRvcjogY2RBc3QuQXN0VmlzaXRvciwgYXN0OiBjZEFzdC5BU1RbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIGFzdC5zb21lKGFzdCA9PiB2aXNpdCh2aXNpdG9yLCBhc3QpKTtcbiAgICB9O1xuICAgIHJldHVybiBhc3QudmlzaXQoe1xuICAgICAgdmlzaXRCaW5hcnkoYXN0OiBjZEFzdC5CaW5hcnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0KHRoaXMsIGFzdC5sZWZ0KSB8fCB2aXNpdCh0aGlzLCBhc3QucmlnaHQpO1xuICAgICAgfSxcbiAgICAgIHZpc2l0Q2hhaW4oYXN0OiBjZEFzdC5DaGFpbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdmlzaXRDb25kaXRpb25hbChhc3Q6IGNkQXN0LkNvbmRpdGlvbmFsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QuY29uZGl0aW9uKSB8fCB2aXNpdCh0aGlzLCBhc3QudHJ1ZUV4cCkgfHwgdmlzaXQodGhpcywgYXN0LmZhbHNlRXhwKTtcbiAgICAgIH0sXG4gICAgICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IGNkQXN0LkZ1bmN0aW9uQ2FsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBjZEFzdC5JbXBsaWNpdFJlY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBjZEFzdC5JbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIHJldHVybiB2aXNpdFNvbWUodGhpcywgYXN0LmV4cHJlc3Npb25zKTtcbiAgICAgIH0sXG4gICAgICB2aXNpdEtleWVkUmVhZChhc3Q6IGNkQXN0LktleWVkUmVhZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdmlzaXRLZXllZFdyaXRlKGFzdDogY2RBc3QuS2V5ZWRXcml0ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBjZEFzdC5MaXRlcmFsQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgdmlzaXRMaXRlcmFsTWFwKGFzdDogY2RBc3QuTGl0ZXJhbE1hcCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBjZEFzdC5MaXRlcmFsUHJpbWl0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB2aXNpdE1ldGhvZENhbGwoYXN0OiBjZEFzdC5NZXRob2RDYWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UGlwZShhc3Q6IGNkQXN0LkJpbmRpbmdQaXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UHJlZml4Tm90KGFzdDogY2RBc3QuUHJlZml4Tm90KSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QuZXhwcmVzc2lvbik7XG4gICAgICB9LFxuICAgICAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogY2RBc3QuUHJlZml4Tm90KSB7XG4gICAgICAgIHJldHVybiB2aXNpdCh0aGlzLCBhc3QuZXhwcmVzc2lvbik7XG4gICAgICB9LFxuICAgICAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBjZEFzdC5Qcm9wZXJ0eVJlYWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IGNkQXN0LlByb3BlcnR5V3JpdGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHZpc2l0UXVvdGUoYXN0OiBjZEFzdC5RdW90ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IGNkQXN0LlNhZmVNZXRob2RDYWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IGNkQXN0LlNhZmVQcm9wZXJ0eVJlYWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhbGxvY2F0ZVRlbXBvcmFyeSgpOiBvLlJlYWRWYXJFeHByIHtcbiAgICBjb25zdCB0ZW1wTnVtYmVyID0gdGhpcy5fY3VycmVudFRlbXBvcmFyeSsrO1xuICAgIHRoaXMudGVtcG9yYXJ5Q291bnQgPSBNYXRoLm1heCh0aGlzLl9jdXJyZW50VGVtcG9yYXJ5LCB0aGlzLnRlbXBvcmFyeUNvdW50KTtcbiAgICByZXR1cm4gbmV3IG8uUmVhZFZhckV4cHIodGVtcG9yYXJ5TmFtZSh0aGlzLmJpbmRpbmdJZCwgdGVtcE51bWJlcikpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVGVtcG9yYXJ5KHRlbXBvcmFyeTogby5SZWFkVmFyRXhwcikge1xuICAgIHRoaXMuX2N1cnJlbnRUZW1wb3JhcnktLTtcbiAgICBpZiAodGVtcG9yYXJ5Lm5hbWUgIT0gdGVtcG9yYXJ5TmFtZSh0aGlzLmJpbmRpbmdJZCwgdGhpcy5fY3VycmVudFRlbXBvcmFyeSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGVtcG9yYXJ5ICR7dGVtcG9yYXJ5Lm5hbWV9IHJlbGVhc2VkIG91dCBvZiBvcmRlcmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFic29sdXRlIGBQYXJzZVNvdXJjZVNwYW5gIGZyb20gdGhlIHJlbGF0aXZlIGBQYXJzZVNwYW5gLlxuICAgKlxuICAgKiBgUGFyc2VTcGFuYCBvYmplY3RzIGFyZSByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGV4cHJlc3Npb24uXG4gICAqIFRoaXMgbWV0aG9kIGNvbnZlcnRzIHRoZXNlIHRvIGZ1bGwgYFBhcnNlU291cmNlU3BhbmAgb2JqZWN0cyB0aGF0XG4gICAqIHNob3cgd2hlcmUgdGhlIHNwYW4gaXMgd2l0aGluIHRoZSBvdmVyYWxsIHNvdXJjZSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gc3BhbiB0aGUgcmVsYXRpdmUgc3BhbiB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyBhIGBQYXJzZVNvdXJjZVNwYW5gIGZvciB0aGUgZ2l2ZW4gc3BhbiBvciBudWxsIGlmIG5vXG4gICAqIGBiYXNlU291cmNlU3BhbmAgd2FzIHByb3ZpZGVkIHRvIHRoaXMgY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRTb3VyY2VTcGFuKHNwYW46IGNkQXN0LlBhcnNlU3Bhbikge1xuICAgIGlmICh0aGlzLmJhc2VTb3VyY2VTcGFuKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuYmFzZVNvdXJjZVNwYW4uc3RhcnQubW92ZUJ5KHNwYW4uc3RhcnQpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5iYXNlU291cmNlU3Bhbi5zdGFydC5tb3ZlQnkoc3Bhbi5lbmQpO1xuICAgICAgcmV0dXJuIG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQsIGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBBZGRzIHRoZSBuYW1lIG9mIGFuIEFTVCB0byB0aGUgbGlzdCBvZiBpbXBsaWNpdCByZWNlaXZlciBhY2Nlc3Nlcy4gKi9cbiAgcHJpdmF0ZSBhZGRJbXBsaWNpdFJlY2VpdmVyQWNjZXNzKG5hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmltcGxpY2l0UmVjZWl2ZXJBY2Nlc3Nlcykge1xuICAgICAgdGhpcy5pbXBsaWNpdFJlY2VpdmVyQWNjZXNzZXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuU3RhdGVtZW50cyhhcmc6IGFueSwgb3V0cHV0OiBvLlN0YXRlbWVudFtdKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAoPGFueVtdPmFyZykuZm9yRWFjaCgoZW50cnkpID0+IGZsYXR0ZW5TdGF0ZW1lbnRzKGVudHJ5LCBvdXRwdXQpKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQucHVzaChhcmcpO1xuICB9XG59XG5cbmNsYXNzIERlZmF1bHRMb2NhbFJlc29sdmVyIGltcGxlbWVudHMgTG9jYWxSZXNvbHZlciB7XG4gIG5vdGlmeUltcGxpY2l0UmVjZWl2ZXJVc2UoKTogdm9pZCB7fVxuICBnZXRMb2NhbChuYW1lOiBzdHJpbmcpOiBvLkV4cHJlc3Npb258bnVsbCB7XG4gICAgaWYgKG5hbWUgPT09IEV2ZW50SGFuZGxlclZhcnMuZXZlbnQubmFtZSkge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlclZhcnMuZXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJWYWx1ZUV4cHIoYmluZGluZ0lkOiBzdHJpbmcpOiBvLlJlYWRWYXJFeHByIHtcbiAgcmV0dXJuIG8udmFyaWFibGUoYGN1cnJWYWxfJHtiaW5kaW5nSWR9YCk7ICAvLyBmaXggc3ludGF4IGhpZ2hsaWdodGluZzogYFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmV2ZW50RGVmYXVsdFZhcihiaW5kaW5nSWQ6IHN0cmluZyk6IG8uUmVhZFZhckV4cHIge1xuICByZXR1cm4gby52YXJpYWJsZShgcGRfJHtiaW5kaW5nSWR9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdG10SW50b0V4cHJlc3Npb24oc3RtdDogby5TdGF0ZW1lbnQpOiBvLkV4cHJlc3Npb258bnVsbCB7XG4gIGlmIChzdG10IGluc3RhbmNlb2Ygby5FeHByZXNzaW9uU3RhdGVtZW50KSB7XG4gICAgcmV0dXJuIHN0bXQuZXhwcjtcbiAgfSBlbHNlIGlmIChzdG10IGluc3RhbmNlb2Ygby5SZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICByZXR1cm4gc3RtdC52YWx1ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1aWx0aW5GdW5jdGlvbkNhbGwgZXh0ZW5kcyBjZEFzdC5GdW5jdGlvbkNhbGwge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHNwYW46IGNkQXN0LlBhcnNlU3Bhbiwgc291cmNlU3BhbjogY2RBc3QuQWJzb2x1dGVTb3VyY2VTcGFuLCBwdWJsaWMgYXJnczogY2RBc3QuQVNUW10sXG4gICAgICBwdWJsaWMgY29udmVydGVyOiBCdWlsdGluQ29udmVydGVyKSB7XG4gICAgc3VwZXIoc3Bhbiwgc291cmNlU3BhbiwgbnVsbCwgYXJncyk7XG4gIH1cbn1cbiJdfQ==