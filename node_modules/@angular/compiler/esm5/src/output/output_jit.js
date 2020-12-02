/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { identifierName } from '../compile_metadata';
import { EmitterVisitorContext } from './abstract_emitter';
import { AbstractJsEmitterVisitor } from './abstract_js_emitter';
import * as o from './output_ast';
/**
 * A helper class to manage the evaluation of JIT generated code.
 */
var JitEvaluator = /** @class */ (function () {
    function JitEvaluator() {
    }
    /**
     *
     * @param sourceUrl The URL of the generated code.
     * @param statements An array of Angular statement AST nodes to be evaluated.
     * @param reflector A helper used when converting the statements to executable code.
     * @param createSourceMaps If true then create a source-map for the generated code and include it
     * inline as a source-map comment.
     * @returns A map of all the variables in the generated code.
     */
    JitEvaluator.prototype.evaluateStatements = function (sourceUrl, statements, reflector, createSourceMaps) {
        var converter = new JitEmitterVisitor(reflector);
        var ctx = EmitterVisitorContext.createRoot();
        // Ensure generated code is in strict mode
        if (statements.length > 0 && !isUseStrictStatement(statements[0])) {
            statements = __spread([
                o.literal('use strict').toStmt()
            ], statements);
        }
        converter.visitAllStatements(statements, ctx);
        converter.createReturnStmt(ctx);
        return this.evaluateCode(sourceUrl, ctx, converter.getArgs(), createSourceMaps);
    };
    /**
     * Evaluate a piece of JIT generated code.
     * @param sourceUrl The URL of this generated code.
     * @param ctx A context object that contains an AST of the code to be evaluated.
     * @param vars A map containing the names and values of variables that the evaluated code might
     * reference.
     * @param createSourceMap If true then create a source-map for the generated code and include it
     * inline as a source-map comment.
     * @returns The result of evaluating the code.
     */
    JitEvaluator.prototype.evaluateCode = function (sourceUrl, ctx, vars, createSourceMap) {
        var fnBody = "\"use strict\";" + ctx.toSource() + "\n//# sourceURL=" + sourceUrl;
        var fnArgNames = [];
        var fnArgValues = [];
        for (var argName in vars) {
            fnArgValues.push(vars[argName]);
            fnArgNames.push(argName);
        }
        if (createSourceMap) {
            // using `new Function(...)` generates a header, 1 line of no arguments, 2 lines otherwise
            // E.g. ```
            // function anonymous(a,b,c
            // /**/) { ... }```
            // We don't want to hard code this fact, so we auto detect it via an empty function first.
            var emptyFn = new (Function.bind.apply(Function, __spread([void 0], fnArgNames.concat('return null;'))))().toString();
            var headerLines = emptyFn.slice(0, emptyFn.indexOf('return null;')).split('\n').length - 1;
            fnBody += "\n" + ctx.toSourceMapGenerator(sourceUrl, headerLines).toJsComment();
        }
        var fn = new (Function.bind.apply(Function, __spread([void 0], fnArgNames.concat(fnBody))))();
        return this.executeFunction(fn, fnArgValues);
    };
    /**
     * Execute a JIT generated function by calling it.
     *
     * This method can be overridden in tests to capture the functions that are generated
     * by this `JitEvaluator` class.
     *
     * @param fn A function to execute.
     * @param args The arguments to pass to the function being executed.
     * @returns The return value of the executed function.
     */
    JitEvaluator.prototype.executeFunction = function (fn, args) {
        return fn.apply(void 0, __spread(args));
    };
    return JitEvaluator;
}());
export { JitEvaluator };
/**
 * An Angular AST visitor that converts AST nodes into executable JavaScript code.
 */
var JitEmitterVisitor = /** @class */ (function (_super) {
    __extends(JitEmitterVisitor, _super);
    function JitEmitterVisitor(reflector) {
        var _this = _super.call(this) || this;
        _this.reflector = reflector;
        _this._evalArgNames = [];
        _this._evalArgValues = [];
        _this._evalExportedVars = [];
        return _this;
    }
    JitEmitterVisitor.prototype.createReturnStmt = function (ctx) {
        var stmt = new o.ReturnStatement(new o.LiteralMapExpr(this._evalExportedVars.map(function (resultVar) { return new o.LiteralMapEntry(resultVar, o.variable(resultVar), false); })));
        stmt.visitStatement(this, ctx);
    };
    JitEmitterVisitor.prototype.getArgs = function () {
        var result = {};
        for (var i = 0; i < this._evalArgNames.length; i++) {
            result[this._evalArgNames[i]] = this._evalArgValues[i];
        }
        return result;
    };
    JitEmitterVisitor.prototype.visitExternalExpr = function (ast, ctx) {
        this._emitReferenceToExternal(ast, this.reflector.resolveExternalReference(ast.value), ctx);
        return null;
    };
    JitEmitterVisitor.prototype.visitWrappedNodeExpr = function (ast, ctx) {
        this._emitReferenceToExternal(ast, ast.node, ctx);
        return null;
    };
    JitEmitterVisitor.prototype.visitDeclareVarStmt = function (stmt, ctx) {
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            this._evalExportedVars.push(stmt.name);
        }
        return _super.prototype.visitDeclareVarStmt.call(this, stmt, ctx);
    };
    JitEmitterVisitor.prototype.visitDeclareFunctionStmt = function (stmt, ctx) {
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            this._evalExportedVars.push(stmt.name);
        }
        return _super.prototype.visitDeclareFunctionStmt.call(this, stmt, ctx);
    };
    JitEmitterVisitor.prototype.visitDeclareClassStmt = function (stmt, ctx) {
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            this._evalExportedVars.push(stmt.name);
        }
        return _super.prototype.visitDeclareClassStmt.call(this, stmt, ctx);
    };
    JitEmitterVisitor.prototype._emitReferenceToExternal = function (ast, value, ctx) {
        var id = this._evalArgValues.indexOf(value);
        if (id === -1) {
            id = this._evalArgValues.length;
            this._evalArgValues.push(value);
            var name_1 = identifierName({ reference: value }) || 'val';
            this._evalArgNames.push("jit_" + name_1 + "_" + id);
        }
        ctx.print(ast, this._evalArgNames[id]);
    };
    return JitEmitterVisitor;
}(AbstractJsEmitterVisitor));
export { JitEmitterVisitor };
function isUseStrictStatement(statement) {
    return statement.isEquivalent(o.literal('use strict').toStmt());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0X2ppdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2ppdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBR25ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sS0FBSyxDQUFDLE1BQU0sY0FBYyxDQUFDO0FBRWxDOztHQUVHO0FBQ0g7SUFBQTtJQTBFQSxDQUFDO0lBekVDOzs7Ozs7OztPQVFHO0lBQ0gseUNBQWtCLEdBQWxCLFVBQ0ksU0FBaUIsRUFBRSxVQUF5QixFQUFFLFNBQTJCLEVBQ3pFLGdCQUF5QjtRQUMzQixJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQU0sR0FBRyxHQUFHLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLDBDQUEwQztRQUMxQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakUsVUFBVTtnQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtlQUM3QixVQUFVLENBQ2QsQ0FBQztTQUNIO1FBQ0QsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILG1DQUFZLEdBQVosVUFDSSxTQUFpQixFQUFFLEdBQTBCLEVBQUUsSUFBMEIsRUFDekUsZUFBd0I7UUFDMUIsSUFBSSxNQUFNLEdBQUcsb0JBQWdCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQW1CLFNBQVcsQ0FBQztRQUMxRSxJQUFNLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFDaEMsSUFBTSxXQUFXLEdBQVUsRUFBRSxDQUFDO1FBQzlCLEtBQUssSUFBTSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLDBGQUEwRjtZQUMxRixXQUFXO1lBQ1gsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQiwwRkFBMEY7WUFDMUYsSUFBTSxPQUFPLEdBQUcsS0FBSSxRQUFRLFlBQVIsUUFBUSxxQkFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzlFLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3RixNQUFNLElBQUksT0FBSyxHQUFHLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBSSxDQUFDO1NBQ2pGO1FBQ0QsSUFBTSxFQUFFLFFBQU8sUUFBUSxZQUFSLFFBQVEscUJBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILHNDQUFlLEdBQWYsVUFBZ0IsRUFBWSxFQUFFLElBQVc7UUFDdkMsT0FBTyxFQUFFLHdCQUFJLElBQUksR0FBRTtJQUNyQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDOztBQUVEOztHQUVHO0FBQ0g7SUFBdUMscUNBQXdCO0lBSzdELDJCQUFvQixTQUEyQjtRQUEvQyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFKdkMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0Isb0JBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQWEsRUFBRSxDQUFDOztJQUl6QyxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLEdBQTBCO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FDOUUsVUFBQSxTQUFTLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQTlELENBQThELENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxJQUFNLE1BQU0sR0FBeUIsRUFBRSxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEdBQW1CLEVBQUUsR0FBMEI7UUFDL0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnREFBb0IsR0FBcEIsVUFBcUIsR0FBMkIsRUFBRSxHQUEwQjtRQUMxRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLElBQXNCLEVBQUUsR0FBMEI7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLGlCQUFNLG1CQUFtQixZQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsb0RBQXdCLEdBQXhCLFVBQXlCLElBQTJCLEVBQUUsR0FBMEI7UUFDOUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLGlCQUFNLHdCQUF3QixZQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaURBQXFCLEdBQXJCLFVBQXNCLElBQWlCLEVBQUUsR0FBMEI7UUFDakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLGlCQUFNLHFCQUFxQixZQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sb0RBQXdCLEdBQWhDLFVBQWlDLEdBQWlCLEVBQUUsS0FBVSxFQUFFLEdBQTBCO1FBRXhGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2IsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQU0sTUFBSSxHQUFHLGNBQWMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFPLE1BQUksU0FBSSxFQUFJLENBQUMsQ0FBQztTQUM5QztRQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBakVELENBQXVDLHdCQUF3QixHQWlFOUQ7O0FBR0QsU0FBUyxvQkFBb0IsQ0FBQyxTQUFzQjtJQUNsRCxPQUFPLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7aWRlbnRpZmllck5hbWV9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuLi9jb21waWxlX3JlZmxlY3Rvcic7XG5cbmltcG9ydCB7RW1pdHRlclZpc2l0b3JDb250ZXh0fSBmcm9tICcuL2Fic3RyYWN0X2VtaXR0ZXInO1xuaW1wb3J0IHtBYnN0cmFjdEpzRW1pdHRlclZpc2l0b3J9IGZyb20gJy4vYWJzdHJhY3RfanNfZW1pdHRlcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5cbi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gbWFuYWdlIHRoZSBldmFsdWF0aW9uIG9mIEpJVCBnZW5lcmF0ZWQgY29kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEppdEV2YWx1YXRvciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlVXJsIFRoZSBVUkwgb2YgdGhlIGdlbmVyYXRlZCBjb2RlLlxuICAgKiBAcGFyYW0gc3RhdGVtZW50cyBBbiBhcnJheSBvZiBBbmd1bGFyIHN0YXRlbWVudCBBU1Qgbm9kZXMgdG8gYmUgZXZhbHVhdGVkLlxuICAgKiBAcGFyYW0gcmVmbGVjdG9yIEEgaGVscGVyIHVzZWQgd2hlbiBjb252ZXJ0aW5nIHRoZSBzdGF0ZW1lbnRzIHRvIGV4ZWN1dGFibGUgY29kZS5cbiAgICogQHBhcmFtIGNyZWF0ZVNvdXJjZU1hcHMgSWYgdHJ1ZSB0aGVuIGNyZWF0ZSBhIHNvdXJjZS1tYXAgZm9yIHRoZSBnZW5lcmF0ZWQgY29kZSBhbmQgaW5jbHVkZSBpdFxuICAgKiBpbmxpbmUgYXMgYSBzb3VyY2UtbWFwIGNvbW1lbnQuXG4gICAqIEByZXR1cm5zIEEgbWFwIG9mIGFsbCB0aGUgdmFyaWFibGVzIGluIHRoZSBnZW5lcmF0ZWQgY29kZS5cbiAgICovXG4gIGV2YWx1YXRlU3RhdGVtZW50cyhcbiAgICAgIHNvdXJjZVVybDogc3RyaW5nLCBzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdLCByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsXG4gICAgICBjcmVhdGVTb3VyY2VNYXBzOiBib29sZWFuKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBKaXRFbWl0dGVyVmlzaXRvcihyZWZsZWN0b3IpO1xuICAgIGNvbnN0IGN0eCA9IEVtaXR0ZXJWaXNpdG9yQ29udGV4dC5jcmVhdGVSb290KCk7XG4gICAgLy8gRW5zdXJlIGdlbmVyYXRlZCBjb2RlIGlzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKHN0YXRlbWVudHMubGVuZ3RoID4gMCAmJiAhaXNVc2VTdHJpY3RTdGF0ZW1lbnQoc3RhdGVtZW50c1swXSkpIHtcbiAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgIG8ubGl0ZXJhbCgndXNlIHN0cmljdCcpLnRvU3RtdCgpLFxuICAgICAgICAuLi5zdGF0ZW1lbnRzLFxuICAgICAgXTtcbiAgICB9XG4gICAgY29udmVydGVyLnZpc2l0QWxsU3RhdGVtZW50cyhzdGF0ZW1lbnRzLCBjdHgpO1xuICAgIGNvbnZlcnRlci5jcmVhdGVSZXR1cm5TdG10KGN0eCk7XG4gICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVDb2RlKHNvdXJjZVVybCwgY3R4LCBjb252ZXJ0ZXIuZ2V0QXJncygpLCBjcmVhdGVTb3VyY2VNYXBzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBhIHBpZWNlIG9mIEpJVCBnZW5lcmF0ZWQgY29kZS5cbiAgICogQHBhcmFtIHNvdXJjZVVybCBUaGUgVVJMIG9mIHRoaXMgZ2VuZXJhdGVkIGNvZGUuXG4gICAqIEBwYXJhbSBjdHggQSBjb250ZXh0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFuIEFTVCBvZiB0aGUgY29kZSB0byBiZSBldmFsdWF0ZWQuXG4gICAqIEBwYXJhbSB2YXJzIEEgbWFwIGNvbnRhaW5pbmcgdGhlIG5hbWVzIGFuZCB2YWx1ZXMgb2YgdmFyaWFibGVzIHRoYXQgdGhlIGV2YWx1YXRlZCBjb2RlIG1pZ2h0XG4gICAqIHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGNyZWF0ZVNvdXJjZU1hcCBJZiB0cnVlIHRoZW4gY3JlYXRlIGEgc291cmNlLW1hcCBmb3IgdGhlIGdlbmVyYXRlZCBjb2RlIGFuZCBpbmNsdWRlIGl0XG4gICAqIGlubGluZSBhcyBhIHNvdXJjZS1tYXAgY29tbWVudC5cbiAgICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiBldmFsdWF0aW5nIHRoZSBjb2RlLlxuICAgKi9cbiAgZXZhbHVhdGVDb2RlKFxuICAgICAgc291cmNlVXJsOiBzdHJpbmcsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0LCB2YXJzOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICAgIGNyZWF0ZVNvdXJjZU1hcDogYm9vbGVhbik6IGFueSB7XG4gICAgbGV0IGZuQm9keSA9IGBcInVzZSBzdHJpY3RcIjske2N0eC50b1NvdXJjZSgpfVxcbi8vIyBzb3VyY2VVUkw9JHtzb3VyY2VVcmx9YDtcbiAgICBjb25zdCBmbkFyZ05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGZuQXJnVmFsdWVzOiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYXJnTmFtZSBpbiB2YXJzKSB7XG4gICAgICBmbkFyZ1ZhbHVlcy5wdXNoKHZhcnNbYXJnTmFtZV0pO1xuICAgICAgZm5BcmdOYW1lcy5wdXNoKGFyZ05hbWUpO1xuICAgIH1cbiAgICBpZiAoY3JlYXRlU291cmNlTWFwKSB7XG4gICAgICAvLyB1c2luZyBgbmV3IEZ1bmN0aW9uKC4uLilgIGdlbmVyYXRlcyBhIGhlYWRlciwgMSBsaW5lIG9mIG5vIGFyZ3VtZW50cywgMiBsaW5lcyBvdGhlcndpc2VcbiAgICAgIC8vIEUuZy4gYGBgXG4gICAgICAvLyBmdW5jdGlvbiBhbm9ueW1vdXMoYSxiLGNcbiAgICAgIC8vIC8qKi8pIHsgLi4uIH1gYGBcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGFyZCBjb2RlIHRoaXMgZmFjdCwgc28gd2UgYXV0byBkZXRlY3QgaXQgdmlhIGFuIGVtcHR5IGZ1bmN0aW9uIGZpcnN0LlxuICAgICAgY29uc3QgZW1wdHlGbiA9IG5ldyBGdW5jdGlvbiguLi5mbkFyZ05hbWVzLmNvbmNhdCgncmV0dXJuIG51bGw7JykpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBoZWFkZXJMaW5lcyA9IGVtcHR5Rm4uc2xpY2UoMCwgZW1wdHlGbi5pbmRleE9mKCdyZXR1cm4gbnVsbDsnKSkuc3BsaXQoJ1xcbicpLmxlbmd0aCAtIDE7XG4gICAgICBmbkJvZHkgKz0gYFxcbiR7Y3R4LnRvU291cmNlTWFwR2VuZXJhdG9yKHNvdXJjZVVybCwgaGVhZGVyTGluZXMpLnRvSnNDb21tZW50KCl9YDtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oLi4uZm5BcmdOYW1lcy5jb25jYXQoZm5Cb2R5KSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUZ1bmN0aW9uKGZuLCBmbkFyZ1ZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBhIEpJVCBnZW5lcmF0ZWQgZnVuY3Rpb24gYnkgY2FsbGluZyBpdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdGVzdHMgdG8gY2FwdHVyZSB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIGdlbmVyYXRlZFxuICAgKiBieSB0aGlzIGBKaXRFdmFsdWF0b3JgIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gQSBmdW5jdGlvbiB0byBleGVjdXRlLlxuICAgKiBAcGFyYW0gYXJncyBUaGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGZ1bmN0aW9uIGJlaW5nIGV4ZWN1dGVkLlxuICAgKiBAcmV0dXJucyBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBleGVjdXRlZCBmdW5jdGlvbi5cbiAgICovXG4gIGV4ZWN1dGVGdW5jdGlvbihmbjogRnVuY3Rpb24sIGFyZ3M6IGFueVtdKSB7XG4gICAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8qKlxuICogQW4gQW5ndWxhciBBU1QgdmlzaXRvciB0aGF0IGNvbnZlcnRzIEFTVCBub2RlcyBpbnRvIGV4ZWN1dGFibGUgSmF2YVNjcmlwdCBjb2RlLlxuICovXG5leHBvcnQgY2xhc3MgSml0RW1pdHRlclZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdEpzRW1pdHRlclZpc2l0b3Ige1xuICBwcml2YXRlIF9ldmFsQXJnTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2V2YWxBcmdWYWx1ZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2V2YWxFeHBvcnRlZFZhcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlUmV0dXJuU3RtdChjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCkge1xuICAgIGNvbnN0IHN0bXQgPSBuZXcgby5SZXR1cm5TdGF0ZW1lbnQobmV3IG8uTGl0ZXJhbE1hcEV4cHIodGhpcy5fZXZhbEV4cG9ydGVkVmFycy5tYXAoXG4gICAgICAgIHJlc3VsdFZhciA9PiBuZXcgby5MaXRlcmFsTWFwRW50cnkocmVzdWx0VmFyLCBvLnZhcmlhYmxlKHJlc3VsdFZhciksIGZhbHNlKSkpKTtcbiAgICBzdG10LnZpc2l0U3RhdGVtZW50KHRoaXMsIGN0eCk7XG4gIH1cblxuICBnZXRBcmdzKCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICBjb25zdCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmFsQXJnTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFt0aGlzLl9ldmFsQXJnTmFtZXNbaV1dID0gdGhpcy5fZXZhbEFyZ1ZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogby5FeHRlcm5hbEV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICB0aGlzLl9lbWl0UmVmZXJlbmNlVG9FeHRlcm5hbChhc3QsIHRoaXMucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShhc3QudmFsdWUpLCBjdHgpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRXcmFwcGVkTm9kZUV4cHIoYXN0OiBvLldyYXBwZWROb2RlRXhwcjxhbnk+LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgdGhpcy5fZW1pdFJlZmVyZW5jZVRvRXh0ZXJuYWwoYXN0LCBhc3Qubm9kZSwgY3R4KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0RGVjbGFyZVZhclN0bXQoc3RtdDogby5EZWNsYXJlVmFyU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgdGhpcy5fZXZhbEV4cG9ydGVkVmFycy5wdXNoKHN0bXQubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdERlY2xhcmVWYXJTdG10KHN0bXQsIGN0eCk7XG4gIH1cblxuICB2aXNpdERlY2xhcmVGdW5jdGlvblN0bXQoc3RtdDogby5EZWNsYXJlRnVuY3Rpb25TdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKHN0bXQuaGFzTW9kaWZpZXIoby5TdG10TW9kaWZpZXIuRXhwb3J0ZWQpKSB7XG4gICAgICB0aGlzLl9ldmFsRXhwb3J0ZWRWYXJzLnB1c2goc3RtdC5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnZpc2l0RGVjbGFyZUZ1bmN0aW9uU3RtdChzdG10LCBjdHgpO1xuICB9XG5cbiAgdmlzaXREZWNsYXJlQ2xhc3NTdG10KHN0bXQ6IG8uQ2xhc3NTdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKHN0bXQuaGFzTW9kaWZpZXIoby5TdG10TW9kaWZpZXIuRXhwb3J0ZWQpKSB7XG4gICAgICB0aGlzLl9ldmFsRXhwb3J0ZWRWYXJzLnB1c2goc3RtdC5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnZpc2l0RGVjbGFyZUNsYXNzU3RtdChzdG10LCBjdHgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdFJlZmVyZW5jZVRvRXh0ZXJuYWwoYXN0OiBvLkV4cHJlc3Npb24sIHZhbHVlOiBhbnksIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTpcbiAgICAgIHZvaWQge1xuICAgIGxldCBpZCA9IHRoaXMuX2V2YWxBcmdWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGlkID09PSAtMSkge1xuICAgICAgaWQgPSB0aGlzLl9ldmFsQXJnVmFsdWVzLmxlbmd0aDtcbiAgICAgIHRoaXMuX2V2YWxBcmdWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICBjb25zdCBuYW1lID0gaWRlbnRpZmllck5hbWUoe3JlZmVyZW5jZTogdmFsdWV9KSB8fCAndmFsJztcbiAgICAgIHRoaXMuX2V2YWxBcmdOYW1lcy5wdXNoKGBqaXRfJHtuYW1lfV8ke2lkfWApO1xuICAgIH1cbiAgICBjdHgucHJpbnQoYXN0LCB0aGlzLl9ldmFsQXJnTmFtZXNbaWRdKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGlzVXNlU3RyaWN0U3RhdGVtZW50KHN0YXRlbWVudDogby5TdGF0ZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN0YXRlbWVudC5pc0VxdWl2YWxlbnQoby5saXRlcmFsKCd1c2Ugc3RyaWN0JykudG9TdG10KCkpO1xufVxuIl19