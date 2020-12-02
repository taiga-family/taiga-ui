(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/output/output_interpreter", ["require", "exports", "tslib", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/output/ts_emitter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var o = require("@angular/compiler/src/output/output_ast");
    var ts_emitter_1 = require("@angular/compiler/src/output/ts_emitter");
    function interpretStatements(statements, reflector) {
        var ctx = new _ExecutionContext(null, null, null, new Map());
        var visitor = new StatementInterpreter(reflector);
        visitor.visitAllStatements(statements, ctx);
        var result = {};
        ctx.exports.forEach(function (exportName) {
            result[exportName] = ctx.vars.get(exportName);
        });
        return result;
    }
    exports.interpretStatements = interpretStatements;
    function _executeFunctionStatements(varNames, varValues, statements, ctx, visitor) {
        var childCtx = ctx.createChildWihtLocalVars();
        for (var i = 0; i < varNames.length; i++) {
            childCtx.vars.set(varNames[i], varValues[i]);
        }
        var result = visitor.visitAllStatements(statements, childCtx);
        return result ? result.value : null;
    }
    var _ExecutionContext = /** @class */ (function () {
        function _ExecutionContext(parent, instance, className, vars) {
            this.parent = parent;
            this.instance = instance;
            this.className = className;
            this.vars = vars;
            this.exports = [];
        }
        _ExecutionContext.prototype.createChildWihtLocalVars = function () {
            return new _ExecutionContext(this, this.instance, this.className, new Map());
        };
        return _ExecutionContext;
    }());
    var ReturnValue = /** @class */ (function () {
        function ReturnValue(value) {
            this.value = value;
        }
        return ReturnValue;
    }());
    function createDynamicClass(_classStmt, _ctx, _visitor) {
        var propertyDescriptors = {};
        _classStmt.getters.forEach(function (getter) {
            // Note: use `function` instead of arrow function to capture `this`
            propertyDescriptors[getter.name] = {
                configurable: false,
                get: function () {
                    var instanceCtx = new _ExecutionContext(_ctx, this, _classStmt.name, _ctx.vars);
                    return _executeFunctionStatements([], [], getter.body, instanceCtx, _visitor);
                }
            };
        });
        _classStmt.methods.forEach(function (method) {
            var paramNames = method.params.map(function (param) { return param.name; });
            // Note: use `function` instead of arrow function to capture `this`
            propertyDescriptors[method.name] = {
                writable: false,
                configurable: false,
                value: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var instanceCtx = new _ExecutionContext(_ctx, this, _classStmt.name, _ctx.vars);
                    return _executeFunctionStatements(paramNames, args, method.body, instanceCtx, _visitor);
                }
            };
        });
        var ctorParamNames = _classStmt.constructorMethod.params.map(function (param) { return param.name; });
        // Note: use `function` instead of arrow function to capture `this`
        var ctor = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var instanceCtx = new _ExecutionContext(_ctx, this, _classStmt.name, _ctx.vars);
            _classStmt.fields.forEach(function (field) {
                _this[field.name] = undefined;
            });
            _executeFunctionStatements(ctorParamNames, args, _classStmt.constructorMethod.body, instanceCtx, _visitor);
        };
        var superClass = _classStmt.parent ? _classStmt.parent.visitExpression(_visitor, _ctx) : Object;
        ctor.prototype = Object.create(superClass.prototype, propertyDescriptors);
        return ctor;
    }
    var StatementInterpreter = /** @class */ (function () {
        function StatementInterpreter(reflector) {
            this.reflector = reflector;
        }
        StatementInterpreter.prototype.debugAst = function (ast) {
            return ts_emitter_1.debugOutputAstAsTypeScript(ast);
        };
        StatementInterpreter.prototype.visitDeclareVarStmt = function (stmt, ctx) {
            var initialValue = stmt.value ? stmt.value.visitExpression(this, ctx) : undefined;
            ctx.vars.set(stmt.name, initialValue);
            if (stmt.hasModifier(o.StmtModifier.Exported)) {
                ctx.exports.push(stmt.name);
            }
            return null;
        };
        StatementInterpreter.prototype.visitWriteVarExpr = function (expr, ctx) {
            var value = expr.value.visitExpression(this, ctx);
            var currCtx = ctx;
            while (currCtx != null) {
                if (currCtx.vars.has(expr.name)) {
                    currCtx.vars.set(expr.name, value);
                    return value;
                }
                currCtx = currCtx.parent;
            }
            throw new Error("Not declared variable " + expr.name);
        };
        StatementInterpreter.prototype.visitWrappedNodeExpr = function (ast, ctx) {
            throw new Error('Cannot interpret a WrappedNodeExpr.');
        };
        StatementInterpreter.prototype.visitTypeofExpr = function (ast, ctx) {
            throw new Error('Cannot interpret a TypeofExpr');
        };
        StatementInterpreter.prototype.visitReadVarExpr = function (ast, ctx) {
            var varName = ast.name;
            if (ast.builtin != null) {
                switch (ast.builtin) {
                    case o.BuiltinVar.Super:
                        return Object.getPrototypeOf(ctx.instance);
                    case o.BuiltinVar.This:
                        return ctx.instance;
                    case o.BuiltinVar.CatchError:
                        varName = CATCH_ERROR_VAR;
                        break;
                    case o.BuiltinVar.CatchStack:
                        varName = CATCH_STACK_VAR;
                        break;
                    default:
                        throw new Error("Unknown builtin variable " + ast.builtin);
                }
            }
            var currCtx = ctx;
            while (currCtx != null) {
                if (currCtx.vars.has(varName)) {
                    return currCtx.vars.get(varName);
                }
                currCtx = currCtx.parent;
            }
            throw new Error("Not declared variable " + varName);
        };
        StatementInterpreter.prototype.visitWriteKeyExpr = function (expr, ctx) {
            var receiver = expr.receiver.visitExpression(this, ctx);
            var index = expr.index.visitExpression(this, ctx);
            var value = expr.value.visitExpression(this, ctx);
            receiver[index] = value;
            return value;
        };
        StatementInterpreter.prototype.visitWritePropExpr = function (expr, ctx) {
            var receiver = expr.receiver.visitExpression(this, ctx);
            var value = expr.value.visitExpression(this, ctx);
            receiver[expr.name] = value;
            return value;
        };
        StatementInterpreter.prototype.visitInvokeMethodExpr = function (expr, ctx) {
            var receiver = expr.receiver.visitExpression(this, ctx);
            var args = this.visitAllExpressions(expr.args, ctx);
            var result;
            if (expr.builtin != null) {
                switch (expr.builtin) {
                    case o.BuiltinMethod.ConcatArray:
                        result = receiver.concat.apply(receiver, tslib_1.__spread(args));
                        break;
                    case o.BuiltinMethod.SubscribeObservable:
                        result = receiver.subscribe({ next: args[0] });
                        break;
                    case o.BuiltinMethod.Bind:
                        result = receiver.bind.apply(receiver, tslib_1.__spread(args));
                        break;
                    default:
                        throw new Error("Unknown builtin method " + expr.builtin);
                }
            }
            else {
                result = receiver[expr.name].apply(receiver, args);
            }
            return result;
        };
        StatementInterpreter.prototype.visitInvokeFunctionExpr = function (stmt, ctx) {
            var args = this.visitAllExpressions(stmt.args, ctx);
            var fnExpr = stmt.fn;
            if (fnExpr instanceof o.ReadVarExpr && fnExpr.builtin === o.BuiltinVar.Super) {
                ctx.instance.constructor.prototype.constructor.apply(ctx.instance, args);
                return null;
            }
            else {
                var fn = stmt.fn.visitExpression(this, ctx);
                return fn.apply(null, args);
            }
        };
        StatementInterpreter.prototype.visitReturnStmt = function (stmt, ctx) {
            return new ReturnValue(stmt.value.visitExpression(this, ctx));
        };
        StatementInterpreter.prototype.visitDeclareClassStmt = function (stmt, ctx) {
            var clazz = createDynamicClass(stmt, ctx, this);
            ctx.vars.set(stmt.name, clazz);
            if (stmt.hasModifier(o.StmtModifier.Exported)) {
                ctx.exports.push(stmt.name);
            }
            return null;
        };
        StatementInterpreter.prototype.visitExpressionStmt = function (stmt, ctx) {
            return stmt.expr.visitExpression(this, ctx);
        };
        StatementInterpreter.prototype.visitIfStmt = function (stmt, ctx) {
            var condition = stmt.condition.visitExpression(this, ctx);
            if (condition) {
                return this.visitAllStatements(stmt.trueCase, ctx);
            }
            else if (stmt.falseCase != null) {
                return this.visitAllStatements(stmt.falseCase, ctx);
            }
            return null;
        };
        StatementInterpreter.prototype.visitTryCatchStmt = function (stmt, ctx) {
            try {
                return this.visitAllStatements(stmt.bodyStmts, ctx);
            }
            catch (e) {
                var childCtx = ctx.createChildWihtLocalVars();
                childCtx.vars.set(CATCH_ERROR_VAR, e);
                childCtx.vars.set(CATCH_STACK_VAR, e.stack);
                return this.visitAllStatements(stmt.catchStmts, childCtx);
            }
        };
        StatementInterpreter.prototype.visitThrowStmt = function (stmt, ctx) {
            throw stmt.error.visitExpression(this, ctx);
        };
        StatementInterpreter.prototype.visitCommentStmt = function (stmt, context) {
            return null;
        };
        StatementInterpreter.prototype.visitJSDocCommentStmt = function (stmt, context) {
            return null;
        };
        StatementInterpreter.prototype.visitInstantiateExpr = function (ast, ctx) {
            var args = this.visitAllExpressions(ast.args, ctx);
            var clazz = ast.classExpr.visitExpression(this, ctx);
            return new (clazz.bind.apply(clazz, tslib_1.__spread([void 0], args)))();
        };
        StatementInterpreter.prototype.visitLiteralExpr = function (ast, ctx) {
            return ast.value;
        };
        StatementInterpreter.prototype.visitLocalizedString = function (ast, context) {
            return null;
        };
        StatementInterpreter.prototype.visitExternalExpr = function (ast, ctx) {
            return this.reflector.resolveExternalReference(ast.value);
        };
        StatementInterpreter.prototype.visitConditionalExpr = function (ast, ctx) {
            if (ast.condition.visitExpression(this, ctx)) {
                return ast.trueCase.visitExpression(this, ctx);
            }
            else if (ast.falseCase != null) {
                return ast.falseCase.visitExpression(this, ctx);
            }
            return null;
        };
        StatementInterpreter.prototype.visitNotExpr = function (ast, ctx) {
            return !ast.condition.visitExpression(this, ctx);
        };
        StatementInterpreter.prototype.visitAssertNotNullExpr = function (ast, ctx) {
            return ast.condition.visitExpression(this, ctx);
        };
        StatementInterpreter.prototype.visitCastExpr = function (ast, ctx) {
            return ast.value.visitExpression(this, ctx);
        };
        StatementInterpreter.prototype.visitFunctionExpr = function (ast, ctx) {
            var paramNames = ast.params.map(function (param) { return param.name; });
            return _declareFn(paramNames, ast.statements, ctx, this);
        };
        StatementInterpreter.prototype.visitDeclareFunctionStmt = function (stmt, ctx) {
            var paramNames = stmt.params.map(function (param) { return param.name; });
            ctx.vars.set(stmt.name, _declareFn(paramNames, stmt.statements, ctx, this));
            if (stmt.hasModifier(o.StmtModifier.Exported)) {
                ctx.exports.push(stmt.name);
            }
            return null;
        };
        StatementInterpreter.prototype.visitBinaryOperatorExpr = function (ast, ctx) {
            var _this = this;
            var lhs = function () { return ast.lhs.visitExpression(_this, ctx); };
            var rhs = function () { return ast.rhs.visitExpression(_this, ctx); };
            switch (ast.operator) {
                case o.BinaryOperator.Equals:
                    return lhs() == rhs();
                case o.BinaryOperator.Identical:
                    return lhs() === rhs();
                case o.BinaryOperator.NotEquals:
                    return lhs() != rhs();
                case o.BinaryOperator.NotIdentical:
                    return lhs() !== rhs();
                case o.BinaryOperator.And:
                    return lhs() && rhs();
                case o.BinaryOperator.Or:
                    return lhs() || rhs();
                case o.BinaryOperator.Plus:
                    return lhs() + rhs();
                case o.BinaryOperator.Minus:
                    return lhs() - rhs();
                case o.BinaryOperator.Divide:
                    return lhs() / rhs();
                case o.BinaryOperator.Multiply:
                    return lhs() * rhs();
                case o.BinaryOperator.Modulo:
                    return lhs() % rhs();
                case o.BinaryOperator.Lower:
                    return lhs() < rhs();
                case o.BinaryOperator.LowerEquals:
                    return lhs() <= rhs();
                case o.BinaryOperator.Bigger:
                    return lhs() > rhs();
                case o.BinaryOperator.BiggerEquals:
                    return lhs() >= rhs();
                default:
                    throw new Error("Unknown operator " + ast.operator);
            }
        };
        StatementInterpreter.prototype.visitReadPropExpr = function (ast, ctx) {
            var result;
            var receiver = ast.receiver.visitExpression(this, ctx);
            result = receiver[ast.name];
            return result;
        };
        StatementInterpreter.prototype.visitReadKeyExpr = function (ast, ctx) {
            var receiver = ast.receiver.visitExpression(this, ctx);
            var prop = ast.index.visitExpression(this, ctx);
            return receiver[prop];
        };
        StatementInterpreter.prototype.visitLiteralArrayExpr = function (ast, ctx) {
            return this.visitAllExpressions(ast.entries, ctx);
        };
        StatementInterpreter.prototype.visitLiteralMapExpr = function (ast, ctx) {
            var _this = this;
            var result = {};
            ast.entries.forEach(function (entry) { return result[entry.key] = entry.value.visitExpression(_this, ctx); });
            return result;
        };
        StatementInterpreter.prototype.visitCommaExpr = function (ast, context) {
            var values = this.visitAllExpressions(ast.parts, context);
            return values[values.length - 1];
        };
        StatementInterpreter.prototype.visitAllExpressions = function (expressions, ctx) {
            var _this = this;
            return expressions.map(function (expr) { return expr.visitExpression(_this, ctx); });
        };
        StatementInterpreter.prototype.visitAllStatements = function (statements, ctx) {
            for (var i = 0; i < statements.length; i++) {
                var stmt = statements[i];
                var val = stmt.visitStatement(this, ctx);
                if (val instanceof ReturnValue) {
                    return val;
                }
            }
            return null;
        };
        return StatementInterpreter;
    }());
    function _declareFn(varNames, statements, ctx, visitor) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _executeFunctionStatements(varNames, args, statements, ctx, visitor);
        };
    }
    var CATCH_ERROR_VAR = 'error';
    var CATCH_STACK_VAR = 'stack';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0X2ludGVycHJldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfaW50ZXJwcmV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBUUEsMkRBQWtDO0lBQ2xDLHNFQUF3RDtJQUV4RCxTQUFnQixtQkFBbUIsQ0FDL0IsVUFBeUIsRUFBRSxTQUEyQjtRQUN4RCxJQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFlLENBQUMsQ0FBQztRQUM1RSxJQUFNLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQVZELGtEQVVDO0lBRUQsU0FBUywwQkFBMEIsQ0FDL0IsUUFBa0IsRUFBRSxTQUFnQixFQUFFLFVBQXlCLEVBQUUsR0FBc0IsRUFDdkYsT0FBNkI7UUFDL0IsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENB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LEdBQXNCO1lBQXZFLGlCQUVDO1lBREMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLEVBQUUsR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsaURBQWtCLEdBQWxCLFVBQW1CLFVBQXlCLEVBQUUsR0FBc0I7WUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtvQkFDOUIsT0FBTyxHQUFHLENBQUM7aUJBQ1o7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQTVRRCxJQTRRQztJQUVELFNBQVMsVUFBVSxDQUNmLFFBQWtCLEVBQUUsVUFBeUIsRUFBRSxHQUFzQixFQUNyRSxPQUE2QjtRQUMvQixPQUFPO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUFLLE9BQUEsMEJBQTBCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQztRQUFwRSxDQUFvRSxDQUFDO0lBQ2xHLENBQUM7SUFFRCxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDaEMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5pbXBvcnQge2RlYnVnT3V0cHV0QXN0QXNUeXBlU2NyaXB0fSBmcm9tICcuL3RzX2VtaXR0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwcmV0U3RhdGVtZW50cyhcbiAgICBzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdLCByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIGNvbnN0IGN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChudWxsLCBudWxsLCBudWxsLCBuZXcgTWFwPHN0cmluZywgYW55PigpKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTdGF0ZW1lbnRJbnRlcnByZXRlcihyZWZsZWN0b3IpO1xuICB2aXNpdG9yLnZpc2l0QWxsU3RhdGVtZW50cyhzdGF0ZW1lbnRzLCBjdHgpO1xuICBjb25zdCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gIGN0eC5leHBvcnRzLmZvckVhY2goKGV4cG9ydE5hbWUpID0+IHtcbiAgICByZXN1bHRbZXhwb3J0TmFtZV0gPSBjdHgudmFycy5nZXQoZXhwb3J0TmFtZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfZXhlY3V0ZUZ1bmN0aW9uU3RhdGVtZW50cyhcbiAgICB2YXJOYW1lczogc3RyaW5nW10sIHZhclZhbHVlczogYW55W10sIHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10sIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQsXG4gICAgdmlzaXRvcjogU3RhdGVtZW50SW50ZXJwcmV0ZXIpOiBhbnkge1xuICBjb25zdCBjaGlsZEN0eCA9IGN0eC5jcmVhdGVDaGlsZFdpaHRMb2NhbFZhcnMoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkQ3R4LnZhcnMuc2V0KHZhck5hbWVzW2ldLCB2YXJWYWx1ZXNbaV0pO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHZpc2l0b3IudmlzaXRBbGxTdGF0ZW1lbnRzKHN0YXRlbWVudHMsIGNoaWxkQ3R4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC52YWx1ZSA6IG51bGw7XG59XG5cbmNsYXNzIF9FeGVjdXRpb25Db250ZXh0IHtcbiAgZXhwb3J0czogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBwYXJlbnQ6IF9FeGVjdXRpb25Db250ZXh0fG51bGwsIHB1YmxpYyBpbnN0YW5jZTogT2JqZWN0fG51bGwsXG4gICAgICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmd8bnVsbCwgcHVibGljIHZhcnM6IE1hcDxzdHJpbmcsIGFueT4pIHt9XG5cbiAgY3JlYXRlQ2hpbGRXaWh0TG9jYWxWYXJzKCk6IF9FeGVjdXRpb25Db250ZXh0IHtcbiAgICByZXR1cm4gbmV3IF9FeGVjdXRpb25Db250ZXh0KHRoaXMsIHRoaXMuaW5zdGFuY2UsIHRoaXMuY2xhc3NOYW1lLCBuZXcgTWFwPHN0cmluZywgYW55PigpKTtcbiAgfVxufVxuXG5jbGFzcyBSZXR1cm5WYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55KSB7fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEeW5hbWljQ2xhc3MoXG4gICAgX2NsYXNzU3RtdDogby5DbGFzc1N0bXQsIF9jdHg6IF9FeGVjdXRpb25Db250ZXh0LCBfdmlzaXRvcjogU3RhdGVtZW50SW50ZXJwcmV0ZXIpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHByb3BlcnR5RGVzY3JpcHRvcnM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgX2NsYXNzU3RtdC5nZXR0ZXJzLmZvckVhY2goKGdldHRlcjogby5DbGFzc0dldHRlcikgPT4ge1xuICAgIC8vIE5vdGU6IHVzZSBgZnVuY3Rpb25gIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gdG8gY2FwdHVyZSBgdGhpc2BcbiAgICBwcm9wZXJ0eURlc2NyaXB0b3JzW2dldHRlci5uYW1lXSA9IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZUN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChfY3R4LCB0aGlzLCBfY2xhc3NTdG10Lm5hbWUsIF9jdHgudmFycyk7XG4gICAgICAgIHJldHVybiBfZXhlY3V0ZUZ1bmN0aW9uU3RhdGVtZW50cyhbXSwgW10sIGdldHRlci5ib2R5LCBpbnN0YW5jZUN0eCwgX3Zpc2l0b3IpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBfY2xhc3NTdG10Lm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2Q6IG8uQ2xhc3NNZXRob2QpIHtcbiAgICBjb25zdCBwYXJhbU5hbWVzID0gbWV0aG9kLnBhcmFtcy5tYXAocGFyYW0gPT4gcGFyYW0ubmFtZSk7XG4gICAgLy8gTm90ZTogdXNlIGBmdW5jdGlvbmAgaW5zdGVhZCBvZiBhcnJvdyBmdW5jdGlvbiB0byBjYXB0dXJlIGB0aGlzYFxuICAgIHByb3BlcnR5RGVzY3JpcHRvcnNbbWV0aG9kLm5hbWUhXSA9IHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VDdHggPSBuZXcgX0V4ZWN1dGlvbkNvbnRleHQoX2N0eCwgdGhpcywgX2NsYXNzU3RtdC5uYW1lLCBfY3R4LnZhcnMpO1xuICAgICAgICByZXR1cm4gX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHMocGFyYW1OYW1lcywgYXJncywgbWV0aG9kLmJvZHksIGluc3RhbmNlQ3R4LCBfdmlzaXRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgY3RvclBhcmFtTmFtZXMgPSBfY2xhc3NTdG10LmNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtcy5tYXAocGFyYW0gPT4gcGFyYW0ubmFtZSk7XG4gIC8vIE5vdGU6IHVzZSBgZnVuY3Rpb25gIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gdG8gY2FwdHVyZSBgdGhpc2BcbiAgY29uc3QgY3RvciA9IGZ1bmN0aW9uKHRoaXM6IE9iamVjdCwgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zdCBpbnN0YW5jZUN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChfY3R4LCB0aGlzLCBfY2xhc3NTdG10Lm5hbWUsIF9jdHgudmFycyk7XG4gICAgX2NsYXNzU3RtdC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSlbZmllbGQubmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHMoXG4gICAgICAgIGN0b3JQYXJhbU5hbWVzLCBhcmdzLCBfY2xhc3NTdG10LmNvbnN0cnVjdG9yTWV0aG9kLmJvZHksIGluc3RhbmNlQ3R4LCBfdmlzaXRvcik7XG4gIH07XG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBfY2xhc3NTdG10LnBhcmVudCA/IF9jbGFzc1N0bXQucGFyZW50LnZpc2l0RXhwcmVzc2lvbihfdmlzaXRvciwgX2N0eCkgOiBPYmplY3Q7XG4gIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSwgcHJvcGVydHlEZXNjcmlwdG9ycyk7XG4gIHJldHVybiBjdG9yO1xufVxuXG5jbGFzcyBTdGF0ZW1lbnRJbnRlcnByZXRlciBpbXBsZW1lbnRzIG8uU3RhdGVtZW50VmlzaXRvciwgby5FeHByZXNzaW9uVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yKSB7fVxuICBkZWJ1Z0FzdChhc3Q6IG8uRXhwcmVzc2lvbnxvLlN0YXRlbWVudHxvLlR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWJ1Z091dHB1dEFzdEFzVHlwZVNjcmlwdChhc3QpO1xuICB9XG5cbiAgdmlzaXREZWNsYXJlVmFyU3RtdChzdG10OiBvLkRlY2xhcmVWYXJTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBzdG10LnZhbHVlID8gc3RtdC52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSA6IHVuZGVmaW5lZDtcbiAgICBjdHgudmFycy5zZXQoc3RtdC5uYW1lLCBpbml0aWFsVmFsdWUpO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LmV4cG9ydHMucHVzaChzdG10Lm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFdyaXRlVmFyRXhwcihleHByOiBvLldyaXRlVmFyRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIGxldCBjdXJyQ3R4ID0gY3R4O1xuICAgIHdoaWxlIChjdXJyQ3R4ICE9IG51bGwpIHtcbiAgICAgIGlmIChjdXJyQ3R4LnZhcnMuaGFzKGV4cHIubmFtZSkpIHtcbiAgICAgICAgY3VyckN0eC52YXJzLnNldChleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY3VyckN0eCA9IGN1cnJDdHgucGFyZW50ITtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZGVjbGFyZWQgdmFyaWFibGUgJHtleHByLm5hbWV9YCk7XG4gIH1cbiAgdmlzaXRXcmFwcGVkTm9kZUV4cHIoYXN0OiBvLldyYXBwZWROb2RlRXhwcjxhbnk+LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycHJldCBhIFdyYXBwZWROb2RlRXhwci4nKTtcbiAgfVxuICB2aXNpdFR5cGVvZkV4cHIoYXN0OiBvLlR5cGVvZkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwcmV0IGEgVHlwZW9mRXhwcicpO1xuICB9XG4gIHZpc2l0UmVhZFZhckV4cHIoYXN0OiBvLlJlYWRWYXJFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBsZXQgdmFyTmFtZSA9IGFzdC5uYW1lITtcbiAgICBpZiAoYXN0LmJ1aWx0aW4gIT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChhc3QuYnVpbHRpbikge1xuICAgICAgICBjYXNlIG8uQnVpbHRpblZhci5TdXBlcjpcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0eC5pbnN0YW5jZSk7XG4gICAgICAgIGNhc2Ugby5CdWlsdGluVmFyLlRoaXM6XG4gICAgICAgICAgcmV0dXJuIGN0eC5pbnN0YW5jZTtcbiAgICAgICAgY2FzZSBvLkJ1aWx0aW5WYXIuQ2F0Y2hFcnJvcjpcbiAgICAgICAgICB2YXJOYW1lID0gQ0FUQ0hfRVJST1JfVkFSO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpblZhci5DYXRjaFN0YWNrOlxuICAgICAgICAgIHZhck5hbWUgPSBDQVRDSF9TVEFDS19WQVI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJ1aWx0aW4gdmFyaWFibGUgJHthc3QuYnVpbHRpbn1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGN1cnJDdHggPSBjdHg7XG4gICAgd2hpbGUgKGN1cnJDdHggIT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJDdHgudmFycy5oYXModmFyTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJDdHgudmFycy5nZXQodmFyTmFtZSk7XG4gICAgICB9XG4gICAgICBjdXJyQ3R4ID0gY3VyckN0eC5wYXJlbnQhO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBkZWNsYXJlZCB2YXJpYWJsZSAke3Zhck5hbWV9YCk7XG4gIH1cbiAgdmlzaXRXcml0ZUtleUV4cHIoZXhwcjogby5Xcml0ZUtleUV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gZXhwci5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICBjb25zdCBpbmRleCA9IGV4cHIuaW5kZXgudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIHJlY2VpdmVyW2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2aXNpdFdyaXRlUHJvcEV4cHIoZXhwcjogby5Xcml0ZVByb3BFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZWNlaXZlciA9IGV4cHIucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIHJlY2VpdmVyW2V4cHIubmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB2aXNpdEludm9rZU1ldGhvZEV4cHIoZXhwcjogby5JbnZva2VNZXRob2RFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZWNlaXZlciA9IGV4cHIucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgYXJncyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhleHByLmFyZ3MsIGN0eCk7XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIGlmIChleHByLmJ1aWx0aW4gIT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChleHByLmJ1aWx0aW4pIHtcbiAgICAgICAgY2FzZSBvLkJ1aWx0aW5NZXRob2QuQ29uY2F0QXJyYXk6XG4gICAgICAgICAgcmVzdWx0ID0gcmVjZWl2ZXIuY29uY2F0KC4uLmFyZ3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5TdWJzY3JpYmVPYnNlcnZhYmxlOlxuICAgICAgICAgIHJlc3VsdCA9IHJlY2VpdmVyLnN1YnNjcmliZSh7bmV4dDogYXJnc1swXX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5CaW5kOlxuICAgICAgICAgIHJlc3VsdCA9IHJlY2VpdmVyLmJpbmQoLi4uYXJncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJ1aWx0aW4gbWV0aG9kICR7ZXhwci5idWlsdGlufWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSByZWNlaXZlcltleHByLm5hbWUhXS5hcHBseShyZWNlaXZlciwgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmlzaXRJbnZva2VGdW5jdGlvbkV4cHIoc3RtdDogby5JbnZva2VGdW5jdGlvbkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnZpc2l0QWxsRXhwcmVzc2lvbnMoc3RtdC5hcmdzLCBjdHgpO1xuICAgIGNvbnN0IGZuRXhwciA9IHN0bXQuZm47XG4gICAgaWYgKGZuRXhwciBpbnN0YW5jZW9mIG8uUmVhZFZhckV4cHIgJiYgZm5FeHByLmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5TdXBlcikge1xuICAgICAgY3R4Lmluc3RhbmNlIS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IuYXBwbHkoY3R4Lmluc3RhbmNlLCBhcmdzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmbiA9IHN0bXQuZm4udmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9XG4gIHZpc2l0UmV0dXJuU3RtdChzdG10OiBvLlJldHVyblN0YXRlbWVudCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBSZXR1cm5WYWx1ZShzdG10LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpKTtcbiAgfVxuICB2aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdDogby5DbGFzc1N0bXQsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGNsYXp6ID0gY3JlYXRlRHluYW1pY0NsYXNzKHN0bXQsIGN0eCwgdGhpcyk7XG4gICAgY3R4LnZhcnMuc2V0KHN0bXQubmFtZSwgY2xhenopO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LmV4cG9ydHMucHVzaChzdG10Lm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IG8uRXhwcmVzc2lvblN0YXRlbWVudCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIHN0bXQuZXhwci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgfVxuICB2aXNpdElmU3RtdChzdG10OiBvLklmU3RtdCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gc3RtdC5jb25kaXRpb24udmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKHN0bXQudHJ1ZUNhc2UsIGN0eCk7XG4gICAgfSBlbHNlIGlmIChzdG10LmZhbHNlQ2FzZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5mYWxzZUNhc2UsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0VHJ5Q2F0Y2hTdG10KHN0bXQ6IG8uVHJ5Q2F0Y2hTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKHN0bXQuYm9keVN0bXRzLCBjdHgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkQ3R4ID0gY3R4LmNyZWF0ZUNoaWxkV2lodExvY2FsVmFycygpO1xuICAgICAgY2hpbGRDdHgudmFycy5zZXQoQ0FUQ0hfRVJST1JfVkFSLCBlKTtcbiAgICAgIGNoaWxkQ3R4LnZhcnMuc2V0KENBVENIX1NUQUNLX1ZBUiwgZS5zdGFjayk7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5jYXRjaFN0bXRzLCBjaGlsZEN0eCk7XG4gICAgfVxuICB9XG4gIHZpc2l0VGhyb3dTdG10KHN0bXQ6IG8uVGhyb3dTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICB0aHJvdyBzdG10LmVycm9yLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0Q29tbWVudFN0bXQoc3RtdDogby5Db21tZW50U3RtdCwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRKU0RvY0NvbW1lbnRTdG10KHN0bXQ6IG8uSlNEb2NDb21tZW50U3RtdCwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnN0YW50aWF0ZUV4cHIoYXN0OiBvLkluc3RhbnRpYXRlRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgYXJncyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhhc3QuYXJncywgY3R4KTtcbiAgICBjb25zdCBjbGF6eiA9IGFzdC5jbGFzc0V4cHIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgcmV0dXJuIG5ldyBjbGF6eiguLi5hcmdzKTtcbiAgfVxuICB2aXNpdExpdGVyYWxFeHByKGFzdDogby5MaXRlcmFsRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIGFzdC52YWx1ZTtcbiAgfVxuICB2aXNpdExvY2FsaXplZFN0cmluZyhhc3Q6IG8uTG9jYWxpemVkU3RyaW5nLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogby5FeHRlcm5hbEV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoYXN0LnZhbHVlKTtcbiAgfVxuICB2aXNpdENvbmRpdGlvbmFsRXhwcihhc3Q6IG8uQ29uZGl0aW9uYWxFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBpZiAoYXN0LmNvbmRpdGlvbi52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSkge1xuICAgICAgcmV0dXJuIGFzdC50cnVlQ2FzZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICB9IGVsc2UgaWYgKGFzdC5mYWxzZUNhc2UgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFzdC5mYWxzZUNhc2UudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Tm90RXhwcihhc3Q6IG8uTm90RXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuICFhc3QuY29uZGl0aW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0QXNzZXJ0Tm90TnVsbEV4cHIoYXN0OiBvLkFzc2VydE5vdE51bGwsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiBhc3QuY29uZGl0aW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0Q2FzdEV4cHIoYXN0OiBvLkNhc3RFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gYXN0LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25FeHByKGFzdDogby5GdW5jdGlvbkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtTmFtZXMgPSBhc3QucGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLm5hbWUpO1xuICAgIHJldHVybiBfZGVjbGFyZUZuKHBhcmFtTmFtZXMsIGFzdC5zdGF0ZW1lbnRzLCBjdHgsIHRoaXMpO1xuICB9XG4gIHZpc2l0RGVjbGFyZUZ1bmN0aW9uU3RtdChzdG10OiBvLkRlY2xhcmVGdW5jdGlvblN0bXQsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtTmFtZXMgPSBzdG10LnBhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5uYW1lKTtcbiAgICBjdHgudmFycy5zZXQoc3RtdC5uYW1lLCBfZGVjbGFyZUZuKHBhcmFtTmFtZXMsIHN0bXQuc3RhdGVtZW50cywgY3R4LCB0aGlzKSk7XG4gICAgaWYgKHN0bXQuaGFzTW9kaWZpZXIoby5TdG10TW9kaWZpZXIuRXhwb3J0ZWQpKSB7XG4gICAgICBjdHguZXhwb3J0cy5wdXNoKHN0bXQubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0QmluYXJ5T3BlcmF0b3JFeHByKGFzdDogby5CaW5hcnlPcGVyYXRvckV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGxocyA9ICgpID0+IGFzdC5saHMudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgcmhzID0gKCkgPT4gYXN0LnJocy52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcblxuICAgIHN3aXRjaCAoYXN0Lm9wZXJhdG9yKSB7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuRXF1YWxzOlxuICAgICAgICByZXR1cm4gbGhzKCkgPT0gcmhzKCk7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuSWRlbnRpY2FsOlxuICAgICAgICByZXR1cm4gbGhzKCkgPT09IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk5vdEVxdWFsczpcbiAgICAgICAgcmV0dXJuIGxocygpICE9IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk5vdElkZW50aWNhbDpcbiAgICAgICAgcmV0dXJuIGxocygpICE9PSByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5BbmQ6XG4gICAgICAgIHJldHVybiBsaHMoKSAmJiByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5PcjpcbiAgICAgICAgcmV0dXJuIGxocygpIHx8IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLlBsdXM6XG4gICAgICAgIHJldHVybiBsaHMoKSArIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk1pbnVzOlxuICAgICAgICByZXR1cm4gbGhzKCkgLSByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5EaXZpZGU6XG4gICAgICAgIHJldHVybiBsaHMoKSAvIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk11bHRpcGx5OlxuICAgICAgICByZXR1cm4gbGhzKCkgKiByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5Nb2R1bG86XG4gICAgICAgIHJldHVybiBsaHMoKSAlIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLkxvd2VyOlxuICAgICAgICByZXR1cm4gbGhzKCkgPCByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5Mb3dlckVxdWFsczpcbiAgICAgICAgcmV0dXJuIGxocygpIDw9IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLkJpZ2dlcjpcbiAgICAgICAgcmV0dXJuIGxocygpID4gcmhzKCk7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuQmlnZ2VyRXF1YWxzOlxuICAgICAgICByZXR1cm4gbGhzKCkgPj0gcmhzKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHthc3Qub3BlcmF0b3J9YCk7XG4gICAgfVxuICB9XG4gIHZpc2l0UmVhZFByb3BFeHByKGFzdDogby5SZWFkUHJvcEV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICBjb25zdCByZWNlaXZlciA9IGFzdC5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICByZXN1bHQgPSByZWNlaXZlclthc3QubmFtZV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2aXNpdFJlYWRLZXlFeHByKGFzdDogby5SZWFkS2V5RXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBhc3QucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgcHJvcCA9IGFzdC5pbmRleC52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICByZXR1cm4gcmVjZWl2ZXJbcHJvcF07XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXlFeHByKGFzdDogby5MaXRlcmFsQXJyYXlFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbEV4cHJlc3Npb25zKGFzdC5lbnRyaWVzLCBjdHgpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbE1hcEV4cHIoYXN0OiBvLkxpdGVyYWxNYXBFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZXN1bHQ6IHtbazogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGFzdC5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4gcmVzdWx0W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2aXNpdENvbW1hRXhwcihhc3Q6IG8uQ29tbWFFeHByLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhhc3QucGFydHMsIGNvbnRleHQpO1xuICAgIHJldHVybiB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdO1xuICB9XG4gIHZpc2l0QWxsRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnM6IG8uRXhwcmVzc2lvbltdLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbnMubWFwKChleHByKSA9PiBleHByLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpKTtcbiAgfVxuXG4gIHZpc2l0QWxsU3RhdGVtZW50cyhzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogUmV0dXJuVmFsdWV8bnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdG10ID0gc3RhdGVtZW50c1tpXTtcbiAgICAgIGNvbnN0IHZhbCA9IHN0bXQudmlzaXRTdGF0ZW1lbnQodGhpcywgY3R4KTtcbiAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVjbGFyZUZuKFxuICAgIHZhck5hbWVzOiBzdHJpbmdbXSwgc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXSwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCxcbiAgICB2aXNpdG9yOiBTdGF0ZW1lbnRJbnRlcnByZXRlcik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHModmFyTmFtZXMsIGFyZ3MsIHN0YXRlbWVudHMsIGN0eCwgdmlzaXRvcik7XG59XG5cbmNvbnN0IENBVENIX0VSUk9SX1ZBUiA9ICdlcnJvcic7XG5jb25zdCBDQVRDSF9TVEFDS19WQVIgPSAnc3RhY2snO1xuIl19