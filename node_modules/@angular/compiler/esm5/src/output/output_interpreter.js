import { __read, __spread } from "tslib";
import * as o from './output_ast';
import { debugOutputAstAsTypeScript } from './ts_emitter';
export function interpretStatements(statements, reflector) {
    var ctx = new _ExecutionContext(null, null, null, new Map());
    var visitor = new StatementInterpreter(reflector);
    visitor.visitAllStatements(statements, ctx);
    var result = {};
    ctx.exports.forEach(function (exportName) {
        result[exportName] = ctx.vars.get(exportName);
    });
    return result;
}
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
        return debugOutputAstAsTypeScript(ast);
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
                    result = receiver.concat.apply(receiver, __spread(args));
                    break;
                case o.BuiltinMethod.SubscribeObservable:
                    result = receiver.subscribe({ next: args[0] });
                    break;
                case o.BuiltinMethod.Bind:
                    result = receiver.bind.apply(receiver, __spread(args));
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
        return new (clazz.bind.apply(clazz, __spread([void 0], args)))();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0X2ludGVycHJldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfaW50ZXJwcmV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2xDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUV4RCxNQUFNLFVBQVUsbUJBQW1CLENBQy9CLFVBQXlCLEVBQUUsU0FBMkI7SUFDeEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBZSxDQUFDLENBQUM7SUFDNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLElBQU0sTUFBTSxHQUF5QixFQUFFLENBQUM7SUFDeEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO1FBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLDBCQUEwQixDQUMvQixRQUFrQixFQUFFLFNBQWdCLEVBQUUsVUFBeUIsRUFBRSxHQUFzQixFQUN2RixPQUE2QjtJQUMvQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFD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QUVDO1FBREMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLEVBQUUsR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaURBQWtCLEdBQWxCLFVBQW1CLFVBQXlCLEVBQUUsR0FBc0I7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtnQkFDOUIsT0FBTyxHQUFHLENBQUM7YUFDWjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBNVFELElBNFFDO0FBRUQsU0FBUyxVQUFVLENBQ2YsUUFBa0IsRUFBRSxVQUF5QixFQUFFLEdBQXNCLEVBQ3JFLE9BQTZCO0lBQy9CLE9BQU87UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUFLLE9BQUEsMEJBQTBCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQztJQUFwRSxDQUFvRSxDQUFDO0FBQ2xHLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFDaEMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5pbXBvcnQge2RlYnVnT3V0cHV0QXN0QXNUeXBlU2NyaXB0fSBmcm9tICcuL3RzX2VtaXR0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwcmV0U3RhdGVtZW50cyhcbiAgICBzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdLCByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIGNvbnN0IGN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChudWxsLCBudWxsLCBudWxsLCBuZXcgTWFwPHN0cmluZywgYW55PigpKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTdGF0ZW1lbnRJbnRlcnByZXRlcihyZWZsZWN0b3IpO1xuICB2aXNpdG9yLnZpc2l0QWxsU3RhdGVtZW50cyhzdGF0ZW1lbnRzLCBjdHgpO1xuICBjb25zdCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gIGN0eC5leHBvcnRzLmZvckVhY2goKGV4cG9ydE5hbWUpID0+IHtcbiAgICByZXN1bHRbZXhwb3J0TmFtZV0gPSBjdHgudmFycy5nZXQoZXhwb3J0TmFtZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfZXhlY3V0ZUZ1bmN0aW9uU3RhdGVtZW50cyhcbiAgICB2YXJOYW1lczogc3RyaW5nW10sIHZhclZhbHVlczogYW55W10sIHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10sIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQsXG4gICAgdmlzaXRvcjogU3RhdGVtZW50SW50ZXJwcmV0ZXIpOiBhbnkge1xuICBjb25zdCBjaGlsZEN0eCA9IGN0eC5jcmVhdGVDaGlsZFdpaHRMb2NhbFZhcnMoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkQ3R4LnZhcnMuc2V0KHZhck5hbWVzW2ldLCB2YXJWYWx1ZXNbaV0pO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHZpc2l0b3IudmlzaXRBbGxTdGF0ZW1lbnRzKHN0YXRlbWVudHMsIGNoaWxkQ3R4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC52YWx1ZSA6IG51bGw7XG59XG5cbmNsYXNzIF9FeGVjdXRpb25Db250ZXh0IHtcbiAgZXhwb3J0czogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBwYXJlbnQ6IF9FeGVjdXRpb25Db250ZXh0fG51bGwsIHB1YmxpYyBpbnN0YW5jZTogT2JqZWN0fG51bGwsXG4gICAgICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmd8bnVsbCwgcHVibGljIHZhcnM6IE1hcDxzdHJpbmcsIGFueT4pIHt9XG5cbiAgY3JlYXRlQ2hpbGRXaWh0TG9jYWxWYXJzKCk6IF9FeGVjdXRpb25Db250ZXh0IHtcbiAgICByZXR1cm4gbmV3IF9FeGVjdXRpb25Db250ZXh0KHRoaXMsIHRoaXMuaW5zdGFuY2UsIHRoaXMuY2xhc3NOYW1lLCBuZXcgTWFwPHN0cmluZywgYW55PigpKTtcbiAgfVxufVxuXG5jbGFzcyBSZXR1cm5WYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55KSB7fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEeW5hbWljQ2xhc3MoXG4gICAgX2NsYXNzU3RtdDogby5DbGFzc1N0bXQsIF9jdHg6IF9FeGVjdXRpb25Db250ZXh0LCBfdmlzaXRvcjogU3RhdGVtZW50SW50ZXJwcmV0ZXIpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHByb3BlcnR5RGVzY3JpcHRvcnM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgX2NsYXNzU3RtdC5nZXR0ZXJzLmZvckVhY2goKGdldHRlcjogby5DbGFzc0dldHRlcikgPT4ge1xuICAgIC8vIE5vdGU6IHVzZSBgZnVuY3Rpb25gIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gdG8gY2FwdHVyZSBgdGhpc2BcbiAgICBwcm9wZXJ0eURlc2NyaXB0b3JzW2dldHRlci5uYW1lXSA9IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZUN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChfY3R4LCB0aGlzLCBfY2xhc3NTdG10Lm5hbWUsIF9jdHgudmFycyk7XG4gICAgICAgIHJldHVybiBfZXhlY3V0ZUZ1bmN0aW9uU3RhdGVtZW50cyhbXSwgW10sIGdldHRlci5ib2R5LCBpbnN0YW5jZUN0eCwgX3Zpc2l0b3IpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBfY2xhc3NTdG10Lm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2Q6IG8uQ2xhc3NNZXRob2QpIHtcbiAgICBjb25zdCBwYXJhbU5hbWVzID0gbWV0aG9kLnBhcmFtcy5tYXAocGFyYW0gPT4gcGFyYW0ubmFtZSk7XG4gICAgLy8gTm90ZTogdXNlIGBmdW5jdGlvbmAgaW5zdGVhZCBvZiBhcnJvdyBmdW5jdGlvbiB0byBjYXB0dXJlIGB0aGlzYFxuICAgIHByb3BlcnR5RGVzY3JpcHRvcnNbbWV0aG9kLm5hbWUhXSA9IHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VDdHggPSBuZXcgX0V4ZWN1dGlvbkNvbnRleHQoX2N0eCwgdGhpcywgX2NsYXNzU3RtdC5uYW1lLCBfY3R4LnZhcnMpO1xuICAgICAgICByZXR1cm4gX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHMocGFyYW1OYW1lcywgYXJncywgbWV0aG9kLmJvZHksIGluc3RhbmNlQ3R4LCBfdmlzaXRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgY3RvclBhcmFtTmFtZXMgPSBfY2xhc3NTdG10LmNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtcy5tYXAocGFyYW0gPT4gcGFyYW0ubmFtZSk7XG4gIC8vIE5vdGU6IHVzZSBgZnVuY3Rpb25gIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gdG8gY2FwdHVyZSBgdGhpc2BcbiAgY29uc3QgY3RvciA9IGZ1bmN0aW9uKHRoaXM6IE9iamVjdCwgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zdCBpbnN0YW5jZUN0eCA9IG5ldyBfRXhlY3V0aW9uQ29udGV4dChfY3R4LCB0aGlzLCBfY2xhc3NTdG10Lm5hbWUsIF9jdHgudmFycyk7XG4gICAgX2NsYXNzU3RtdC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSlbZmllbGQubmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHMoXG4gICAgICAgIGN0b3JQYXJhbU5hbWVzLCBhcmdzLCBfY2xhc3NTdG10LmNvbnN0cnVjdG9yTWV0aG9kLmJvZHksIGluc3RhbmNlQ3R4LCBfdmlzaXRvcik7XG4gIH07XG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBfY2xhc3NTdG10LnBhcmVudCA/IF9jbGFzc1N0bXQucGFyZW50LnZpc2l0RXhwcmVzc2lvbihfdmlzaXRvciwgX2N0eCkgOiBPYmplY3Q7XG4gIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSwgcHJvcGVydHlEZXNjcmlwdG9ycyk7XG4gIHJldHVybiBjdG9yO1xufVxuXG5jbGFzcyBTdGF0ZW1lbnRJbnRlcnByZXRlciBpbXBsZW1lbnRzIG8uU3RhdGVtZW50VmlzaXRvciwgby5FeHByZXNzaW9uVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yKSB7fVxuICBkZWJ1Z0FzdChhc3Q6IG8uRXhwcmVzc2lvbnxvLlN0YXRlbWVudHxvLlR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWJ1Z091dHB1dEFzdEFzVHlwZVNjcmlwdChhc3QpO1xuICB9XG5cbiAgdmlzaXREZWNsYXJlVmFyU3RtdChzdG10OiBvLkRlY2xhcmVWYXJTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBzdG10LnZhbHVlID8gc3RtdC52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSA6IHVuZGVmaW5lZDtcbiAgICBjdHgudmFycy5zZXQoc3RtdC5uYW1lLCBpbml0aWFsVmFsdWUpO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LmV4cG9ydHMucHVzaChzdG10Lm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFdyaXRlVmFyRXhwcihleHByOiBvLldyaXRlVmFyRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIGxldCBjdXJyQ3R4ID0gY3R4O1xuICAgIHdoaWxlIChjdXJyQ3R4ICE9IG51bGwpIHtcbiAgICAgIGlmIChjdXJyQ3R4LnZhcnMuaGFzKGV4cHIubmFtZSkpIHtcbiAgICAgICAgY3VyckN0eC52YXJzLnNldChleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY3VyckN0eCA9IGN1cnJDdHgucGFyZW50ITtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZGVjbGFyZWQgdmFyaWFibGUgJHtleHByLm5hbWV9YCk7XG4gIH1cbiAgdmlzaXRXcmFwcGVkTm9kZUV4cHIoYXN0OiBvLldyYXBwZWROb2RlRXhwcjxhbnk+LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycHJldCBhIFdyYXBwZWROb2RlRXhwci4nKTtcbiAgfVxuICB2aXNpdFR5cGVvZkV4cHIoYXN0OiBvLlR5cGVvZkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwcmV0IGEgVHlwZW9mRXhwcicpO1xuICB9XG4gIHZpc2l0UmVhZFZhckV4cHIoYXN0OiBvLlJlYWRWYXJFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBsZXQgdmFyTmFtZSA9IGFzdC5uYW1lITtcbiAgICBpZiAoYXN0LmJ1aWx0aW4gIT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChhc3QuYnVpbHRpbikge1xuICAgICAgICBjYXNlIG8uQnVpbHRpblZhci5TdXBlcjpcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0eC5pbnN0YW5jZSk7XG4gICAgICAgIGNhc2Ugby5CdWlsdGluVmFyLlRoaXM6XG4gICAgICAgICAgcmV0dXJuIGN0eC5pbnN0YW5jZTtcbiAgICAgICAgY2FzZSBvLkJ1aWx0aW5WYXIuQ2F0Y2hFcnJvcjpcbiAgICAgICAgICB2YXJOYW1lID0gQ0FUQ0hfRVJST1JfVkFSO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpblZhci5DYXRjaFN0YWNrOlxuICAgICAgICAgIHZhck5hbWUgPSBDQVRDSF9TVEFDS19WQVI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJ1aWx0aW4gdmFyaWFibGUgJHthc3QuYnVpbHRpbn1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGN1cnJDdHggPSBjdHg7XG4gICAgd2hpbGUgKGN1cnJDdHggIT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJDdHgudmFycy5oYXModmFyTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJDdHgudmFycy5nZXQodmFyTmFtZSk7XG4gICAgICB9XG4gICAgICBjdXJyQ3R4ID0gY3VyckN0eC5wYXJlbnQhO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBkZWNsYXJlZCB2YXJpYWJsZSAke3Zhck5hbWV9YCk7XG4gIH1cbiAgdmlzaXRXcml0ZUtleUV4cHIoZXhwcjogby5Xcml0ZUtleUV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gZXhwci5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICBjb25zdCBpbmRleCA9IGV4cHIuaW5kZXgudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIHJlY2VpdmVyW2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2aXNpdFdyaXRlUHJvcEV4cHIoZXhwcjogby5Xcml0ZVByb3BFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZWNlaXZlciA9IGV4cHIucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgdmFsdWUgPSBleHByLnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIHJlY2VpdmVyW2V4cHIubmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB2aXNpdEludm9rZU1ldGhvZEV4cHIoZXhwcjogby5JbnZva2VNZXRob2RFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZWNlaXZlciA9IGV4cHIucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgYXJncyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhleHByLmFyZ3MsIGN0eCk7XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIGlmIChleHByLmJ1aWx0aW4gIT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChleHByLmJ1aWx0aW4pIHtcbiAgICAgICAgY2FzZSBvLkJ1aWx0aW5NZXRob2QuQ29uY2F0QXJyYXk6XG4gICAgICAgICAgcmVzdWx0ID0gcmVjZWl2ZXIuY29uY2F0KC4uLmFyZ3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5TdWJzY3JpYmVPYnNlcnZhYmxlOlxuICAgICAgICAgIHJlc3VsdCA9IHJlY2VpdmVyLnN1YnNjcmliZSh7bmV4dDogYXJnc1swXX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5CaW5kOlxuICAgICAgICAgIHJlc3VsdCA9IHJlY2VpdmVyLmJpbmQoLi4uYXJncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJ1aWx0aW4gbWV0aG9kICR7ZXhwci5idWlsdGlufWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSByZWNlaXZlcltleHByLm5hbWUhXS5hcHBseShyZWNlaXZlciwgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmlzaXRJbnZva2VGdW5jdGlvbkV4cHIoc3RtdDogby5JbnZva2VGdW5jdGlvbkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnZpc2l0QWxsRXhwcmVzc2lvbnMoc3RtdC5hcmdzLCBjdHgpO1xuICAgIGNvbnN0IGZuRXhwciA9IHN0bXQuZm47XG4gICAgaWYgKGZuRXhwciBpbnN0YW5jZW9mIG8uUmVhZFZhckV4cHIgJiYgZm5FeHByLmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5TdXBlcikge1xuICAgICAgY3R4Lmluc3RhbmNlIS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IuYXBwbHkoY3R4Lmluc3RhbmNlLCBhcmdzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmbiA9IHN0bXQuZm4udmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9XG4gIHZpc2l0UmV0dXJuU3RtdChzdG10OiBvLlJldHVyblN0YXRlbWVudCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBSZXR1cm5WYWx1ZShzdG10LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpKTtcbiAgfVxuICB2aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdDogby5DbGFzc1N0bXQsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGNsYXp6ID0gY3JlYXRlRHluYW1pY0NsYXNzKHN0bXQsIGN0eCwgdGhpcyk7XG4gICAgY3R4LnZhcnMuc2V0KHN0bXQubmFtZSwgY2xhenopO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LmV4cG9ydHMucHVzaChzdG10Lm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IG8uRXhwcmVzc2lvblN0YXRlbWVudCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIHN0bXQuZXhwci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgfVxuICB2aXNpdElmU3RtdChzdG10OiBvLklmU3RtdCwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gc3RtdC5jb25kaXRpb24udmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKHN0bXQudHJ1ZUNhc2UsIGN0eCk7XG4gICAgfSBlbHNlIGlmIChzdG10LmZhbHNlQ2FzZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5mYWxzZUNhc2UsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0VHJ5Q2F0Y2hTdG10KHN0bXQ6IG8uVHJ5Q2F0Y2hTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKHN0bXQuYm9keVN0bXRzLCBjdHgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkQ3R4ID0gY3R4LmNyZWF0ZUNoaWxkV2lodExvY2FsVmFycygpO1xuICAgICAgY2hpbGRDdHgudmFycy5zZXQoQ0FUQ0hfRVJST1JfVkFSLCBlKTtcbiAgICAgIGNoaWxkQ3R4LnZhcnMuc2V0KENBVENIX1NUQUNLX1ZBUiwgZS5zdGFjayk7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5jYXRjaFN0bXRzLCBjaGlsZEN0eCk7XG4gICAgfVxuICB9XG4gIHZpc2l0VGhyb3dTdG10KHN0bXQ6IG8uVGhyb3dTdG10LCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICB0aHJvdyBzdG10LmVycm9yLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0Q29tbWVudFN0bXQoc3RtdDogby5Db21tZW50U3RtdCwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRKU0RvY0NvbW1lbnRTdG10KHN0bXQ6IG8uSlNEb2NDb21tZW50U3RtdCwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnN0YW50aWF0ZUV4cHIoYXN0OiBvLkluc3RhbnRpYXRlRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgYXJncyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhhc3QuYXJncywgY3R4KTtcbiAgICBjb25zdCBjbGF6eiA9IGFzdC5jbGFzc0V4cHIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgcmV0dXJuIG5ldyBjbGF6eiguLi5hcmdzKTtcbiAgfVxuICB2aXNpdExpdGVyYWxFeHByKGFzdDogby5MaXRlcmFsRXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuIGFzdC52YWx1ZTtcbiAgfVxuICB2aXNpdExvY2FsaXplZFN0cmluZyhhc3Q6IG8uTG9jYWxpemVkU3RyaW5nLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogby5FeHRlcm5hbEV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoYXN0LnZhbHVlKTtcbiAgfVxuICB2aXNpdENvbmRpdGlvbmFsRXhwcihhc3Q6IG8uQ29uZGl0aW9uYWxFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBpZiAoYXN0LmNvbmRpdGlvbi52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSkge1xuICAgICAgcmV0dXJuIGFzdC50cnVlQ2FzZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICB9IGVsc2UgaWYgKGFzdC5mYWxzZUNhc2UgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFzdC5mYWxzZUNhc2UudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Tm90RXhwcihhc3Q6IG8uTm90RXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgcmV0dXJuICFhc3QuY29uZGl0aW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0QXNzZXJ0Tm90TnVsbEV4cHIoYXN0OiBvLkFzc2VydE5vdE51bGwsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiBhc3QuY29uZGl0aW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0Q2FzdEV4cHIoYXN0OiBvLkNhc3RFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gYXN0LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25FeHByKGFzdDogby5GdW5jdGlvbkV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtTmFtZXMgPSBhc3QucGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLm5hbWUpO1xuICAgIHJldHVybiBfZGVjbGFyZUZuKHBhcmFtTmFtZXMsIGFzdC5zdGF0ZW1lbnRzLCBjdHgsIHRoaXMpO1xuICB9XG4gIHZpc2l0RGVjbGFyZUZ1bmN0aW9uU3RtdChzdG10OiBvLkRlY2xhcmVGdW5jdGlvblN0bXQsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtTmFtZXMgPSBzdG10LnBhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5uYW1lKTtcbiAgICBjdHgudmFycy5zZXQoc3RtdC5uYW1lLCBfZGVjbGFyZUZuKHBhcmFtTmFtZXMsIHN0bXQuc3RhdGVtZW50cywgY3R4LCB0aGlzKSk7XG4gICAgaWYgKHN0bXQuaGFzTW9kaWZpZXIoby5TdG10TW9kaWZpZXIuRXhwb3J0ZWQpKSB7XG4gICAgICBjdHguZXhwb3J0cy5wdXNoKHN0bXQubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0QmluYXJ5T3BlcmF0b3JFeHByKGFzdDogby5CaW5hcnlPcGVyYXRvckV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IGxocyA9ICgpID0+IGFzdC5saHMudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgcmhzID0gKCkgPT4gYXN0LnJocy52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcblxuICAgIHN3aXRjaCAoYXN0Lm9wZXJhdG9yKSB7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuRXF1YWxzOlxuICAgICAgICByZXR1cm4gbGhzKCkgPT0gcmhzKCk7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuSWRlbnRpY2FsOlxuICAgICAgICByZXR1cm4gbGhzKCkgPT09IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk5vdEVxdWFsczpcbiAgICAgICAgcmV0dXJuIGxocygpICE9IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk5vdElkZW50aWNhbDpcbiAgICAgICAgcmV0dXJuIGxocygpICE9PSByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5BbmQ6XG4gICAgICAgIHJldHVybiBsaHMoKSAmJiByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5PcjpcbiAgICAgICAgcmV0dXJuIGxocygpIHx8IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLlBsdXM6XG4gICAgICAgIHJldHVybiBsaHMoKSArIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk1pbnVzOlxuICAgICAgICByZXR1cm4gbGhzKCkgLSByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5EaXZpZGU6XG4gICAgICAgIHJldHVybiBsaHMoKSAvIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLk11bHRpcGx5OlxuICAgICAgICByZXR1cm4gbGhzKCkgKiByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5Nb2R1bG86XG4gICAgICAgIHJldHVybiBsaHMoKSAlIHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLkxvd2VyOlxuICAgICAgICByZXR1cm4gbGhzKCkgPCByaHMoKTtcbiAgICAgIGNhc2Ugby5CaW5hcnlPcGVyYXRvci5Mb3dlckVxdWFsczpcbiAgICAgICAgcmV0dXJuIGxocygpIDw9IHJocygpO1xuICAgICAgY2FzZSBvLkJpbmFyeU9wZXJhdG9yLkJpZ2dlcjpcbiAgICAgICAgcmV0dXJuIGxocygpID4gcmhzKCk7XG4gICAgICBjYXNlIG8uQmluYXJ5T3BlcmF0b3IuQmlnZ2VyRXF1YWxzOlxuICAgICAgICByZXR1cm4gbGhzKCkgPj0gcmhzKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHthc3Qub3BlcmF0b3J9YCk7XG4gICAgfVxuICB9XG4gIHZpc2l0UmVhZFByb3BFeHByKGFzdDogby5SZWFkUHJvcEV4cHIsIGN0eDogX0V4ZWN1dGlvbkNvbnRleHQpOiBhbnkge1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICBjb25zdCByZWNlaXZlciA9IGFzdC5yZWNlaXZlci52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICByZXN1bHQgPSByZWNlaXZlclthc3QubmFtZV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2aXNpdFJlYWRLZXlFeHByKGFzdDogby5SZWFkS2V5RXhwciwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBhc3QucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY29uc3QgcHJvcCA9IGFzdC5pbmRleC52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICByZXR1cm4gcmVjZWl2ZXJbcHJvcF07XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXlFeHByKGFzdDogby5MaXRlcmFsQXJyYXlFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbEV4cHJlc3Npb25zKGFzdC5lbnRyaWVzLCBjdHgpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbE1hcEV4cHIoYXN0OiBvLkxpdGVyYWxNYXBFeHByLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICBjb25zdCByZXN1bHQ6IHtbazogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGFzdC5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4gcmVzdWx0W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2aXNpdENvbW1hRXhwcihhc3Q6IG8uQ29tbWFFeHByLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmlzaXRBbGxFeHByZXNzaW9ucyhhc3QucGFydHMsIGNvbnRleHQpO1xuICAgIHJldHVybiB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdO1xuICB9XG4gIHZpc2l0QWxsRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnM6IG8uRXhwcmVzc2lvbltdLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbnMubWFwKChleHByKSA9PiBleHByLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpKTtcbiAgfVxuXG4gIHZpc2l0QWxsU3RhdGVtZW50cyhzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdLCBjdHg6IF9FeGVjdXRpb25Db250ZXh0KTogUmV0dXJuVmFsdWV8bnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdG10ID0gc3RhdGVtZW50c1tpXTtcbiAgICAgIGNvbnN0IHZhbCA9IHN0bXQudmlzaXRTdGF0ZW1lbnQodGhpcywgY3R4KTtcbiAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVjbGFyZUZuKFxuICAgIHZhck5hbWVzOiBzdHJpbmdbXSwgc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXSwgY3R4OiBfRXhlY3V0aW9uQ29udGV4dCxcbiAgICB2aXNpdG9yOiBTdGF0ZW1lbnRJbnRlcnByZXRlcik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gX2V4ZWN1dGVGdW5jdGlvblN0YXRlbWVudHModmFyTmFtZXMsIGFyZ3MsIHN0YXRlbWVudHMsIGN0eCwgdmlzaXRvcik7XG59XG5cbmNvbnN0IENBVENIX0VSUk9SX1ZBUiA9ICdlcnJvcic7XG5jb25zdCBDQVRDSF9TVEFDS19WQVIgPSAnc3RhY2snO1xuIl19