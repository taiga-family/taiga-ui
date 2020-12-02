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
        define("@angular/compiler/src/output/abstract_js_emitter", ["require", "exports", "tslib", "@angular/compiler/src/output/abstract_emitter", "@angular/compiler/src/output/output_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var abstract_emitter_1 = require("@angular/compiler/src/output/abstract_emitter");
    var o = require("@angular/compiler/src/output/output_ast");
    var AbstractJsEmitterVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(AbstractJsEmitterVisitor, _super);
        function AbstractJsEmitterVisitor() {
            return _super.call(this, false) || this;
        }
        AbstractJsEmitterVisitor.prototype.visitDeclareClassStmt = function (stmt, ctx) {
            var _this = this;
            ctx.pushClass(stmt);
            this._visitClassConstructor(stmt, ctx);
            if (stmt.parent != null) {
                ctx.print(stmt, stmt.name + ".prototype = Object.create(");
                stmt.parent.visitExpression(this, ctx);
                ctx.println(stmt, ".prototype);");
            }
            stmt.getters.forEach(function (getter) { return _this._visitClassGetter(stmt, getter, ctx); });
            stmt.methods.forEach(function (method) { return _this._visitClassMethod(stmt, method, ctx); });
            ctx.popClass();
            return null;
        };
        AbstractJsEmitterVisitor.prototype._visitClassConstructor = function (stmt, ctx) {
            ctx.print(stmt, "function " + stmt.name + "(");
            if (stmt.constructorMethod != null) {
                this._visitParams(stmt.constructorMethod.params, ctx);
            }
            ctx.println(stmt, ") {");
            ctx.incIndent();
            if (stmt.constructorMethod != null) {
                if (stmt.constructorMethod.body.length > 0) {
                    ctx.println(stmt, "var self = this;");
                    this.visitAllStatements(stmt.constructorMethod.body, ctx);
                }
            }
            ctx.decIndent();
            ctx.println(stmt, "}");
        };
        AbstractJsEmitterVisitor.prototype._visitClassGetter = function (stmt, getter, ctx) {
            ctx.println(stmt, "Object.defineProperty(" + stmt.name + ".prototype, '" + getter.name + "', { get: function() {");
            ctx.incIndent();
            if (getter.body.length > 0) {
                ctx.println(stmt, "var self = this;");
                this.visitAllStatements(getter.body, ctx);
            }
            ctx.decIndent();
            ctx.println(stmt, "}});");
        };
        AbstractJsEmitterVisitor.prototype._visitClassMethod = function (stmt, method, ctx) {
            ctx.print(stmt, stmt.name + ".prototype." + method.name + " = function(");
            this._visitParams(method.params, ctx);
            ctx.println(stmt, ") {");
            ctx.incIndent();
            if (method.body.length > 0) {
                ctx.println(stmt, "var self = this;");
                this.visitAllStatements(method.body, ctx);
            }
            ctx.decIndent();
            ctx.println(stmt, "};");
        };
        AbstractJsEmitterVisitor.prototype.visitWrappedNodeExpr = function (ast, ctx) {
            throw new Error('Cannot emit a WrappedNodeExpr in Javascript.');
        };
        AbstractJsEmitterVisitor.prototype.visitReadVarExpr = function (ast, ctx) {
            if (ast.builtin === o.BuiltinVar.This) {
                ctx.print(ast, 'self');
            }
            else if (ast.builtin === o.BuiltinVar.Super) {
                throw new Error("'super' needs to be handled at a parent ast node, not at the variable level!");
            }
            else {
                _super.prototype.visitReadVarExpr.call(this, ast, ctx);
            }
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitDeclareVarStmt = function (stmt, ctx) {
            ctx.print(stmt, "var " + stmt.name);
            if (stmt.value) {
                ctx.print(stmt, ' = ');
                stmt.value.visitExpression(this, ctx);
            }
            ctx.println(stmt, ";");
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitCastExpr = function (ast, ctx) {
            ast.value.visitExpression(this, ctx);
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitInvokeFunctionExpr = function (expr, ctx) {
            var fnExpr = expr.fn;
            if (fnExpr instanceof o.ReadVarExpr && fnExpr.builtin === o.BuiltinVar.Super) {
                ctx.currentClass.parent.visitExpression(this, ctx);
                ctx.print(expr, ".call(this");
                if (expr.args.length > 0) {
                    ctx.print(expr, ", ");
                    this.visitAllExpressions(expr.args, ctx, ',');
                }
                ctx.print(expr, ")");
            }
            else {
                _super.prototype.visitInvokeFunctionExpr.call(this, expr, ctx);
            }
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitFunctionExpr = function (ast, ctx) {
            ctx.print(ast, "function" + (ast.name ? ' ' + ast.name : '') + "(");
            this._visitParams(ast.params, ctx);
            ctx.println(ast, ") {");
            ctx.incIndent();
            this.visitAllStatements(ast.statements, ctx);
            ctx.decIndent();
            ctx.print(ast, "}");
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitDeclareFunctionStmt = function (stmt, ctx) {
            ctx.print(stmt, "function " + stmt.name + "(");
            this._visitParams(stmt.params, ctx);
            ctx.println(stmt, ") {");
            ctx.incIndent();
            this.visitAllStatements(stmt.statements, ctx);
            ctx.decIndent();
            ctx.println(stmt, "}");
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitTryCatchStmt = function (stmt, ctx) {
            ctx.println(stmt, "try {");
            ctx.incIndent();
            this.visitAllStatements(stmt.bodyStmts, ctx);
            ctx.decIndent();
            ctx.println(stmt, "} catch (" + abstract_emitter_1.CATCH_ERROR_VAR.name + ") {");
            ctx.incIndent();
            var catchStmts = [abstract_emitter_1.CATCH_STACK_VAR.set(abstract_emitter_1.CATCH_ERROR_VAR.prop('stack')).toDeclStmt(null, [
                    o.StmtModifier.Final
                ])].concat(stmt.catchStmts);
            this.visitAllStatements(catchStmts, ctx);
            ctx.decIndent();
            ctx.println(stmt, "}");
            return null;
        };
        AbstractJsEmitterVisitor.prototype.visitLocalizedString = function (ast, ctx) {
            var _this = this;
            // The following convoluted piece of code is effectively the downlevelled equivalent of
            // ```
            // $localize `...`
            // ```
            // which is effectively like:
            // ```
            // $localize(__makeTemplateObject(cooked, raw), expression1, expression2, ...);
            // ```
            //
            // The `$localize` function expects a "template object", which is an array of "cooked" strings
            // plus a `raw` property that contains an array of "raw" strings.
            //
            // In some environments a helper function called `__makeTemplateObject(cooked, raw)` might be
            // available, in which case we use that. Otherwise we must create our own helper function
            // inline.
            //
            // In the inline function, if `Object.defineProperty` is available we use that to attach the
            // `raw` array.
            ctx.print(ast, '$localize((this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})(');
            var parts = [ast.serializeI18nHead()];
            for (var i = 1; i < ast.messageParts.length; i++) {
                parts.push(ast.serializeI18nTemplatePart(i));
            }
            ctx.print(ast, "[" + parts.map(function (part) { return abstract_emitter_1.escapeIdentifier(part.cooked, false); }).join(', ') + "], ");
            ctx.print(ast, "[" + parts.map(function (part) { return abstract_emitter_1.escapeIdentifier(part.raw, false); }).join(', ') + "])");
            ast.expressions.forEach(function (expression) {
                ctx.print(ast, ', ');
                expression.visitExpression(_this, ctx);
            });
            ctx.print(ast, ')');
            return null;
        };
        AbstractJsEmitterVisitor.prototype._visitParams = function (params, ctx) {
            this.visitAllObjects(function (param) { return ctx.print(null, param.name); }, params, ctx, ',');
        };
        AbstractJsEmitterVisitor.prototype.getBuiltinMethodName = function (method) {
            var name;
            switch (method) {
                case o.BuiltinMethod.ConcatArray:
                    name = 'concat';
                    break;
                case o.BuiltinMethod.SubscribeObservable:
                    name = 'subscribe';
                    break;
                case o.BuiltinMethod.Bind:
                    name = 'bind';
                    break;
                default:
                    throw new Error("Unknown builtin method: " + method);
            }
            return name;
        };
        return AbstractJsEmitterVisitor;
    }(abstract_emitter_1.AbstractEmitterVisitor));
    exports.AbstractJsEmitterVisitor = AbstractJsEmitterVisitor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RfanNfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvYWJzdHJhY3RfanNfZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFHSCxrRkFBcUk7SUFDckksMkRBQWtDO0lBRWxDO1FBQXVELG9EQUFzQjtRQUMzRTttQkFDRSxrQkFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO1FBQ0Qsd0RBQXFCLEdBQXJCLFVBQXNCLElBQWlCLEVBQUUsR0FBMEI7WUFBbkUsaUJBYUM7WUFaQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUssSUFBSSxDQUFDLElBQUksZ0NBQTZCLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUF6QyxD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QUFNLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVc7b0JBQzlCLElBQUksR0FBRyxRQUFRLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLG1CQUFtQjtvQkFDdEMsSUFBSSxHQUFHLFdBQVcsQ0FBQztvQkFDbkIsTUFBTTtnQkFDUixLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSTtvQkFDdkIsSUFBSSxHQUFHLE1BQU0sQ0FBQztvQkFDZCxNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTJCLE1BQVEsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0gsK0JBQUM7SUFBRCxDQUFDLEFBdk1ELENBQXVELHlDQUFzQixHQXVNNUU7SUF2TXFCLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0Fic3RyYWN0RW1pdHRlclZpc2l0b3IsIENBVENIX0VSUk9SX1ZBUiwgQ0FUQ0hfU1RBQ0tfVkFSLCBFbWl0dGVyVmlzaXRvckNvbnRleHQsIGVzY2FwZUlkZW50aWZpZXJ9IGZyb20gJy4vYWJzdHJhY3RfZW1pdHRlcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEpzRW1pdHRlclZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdEVtaXR0ZXJWaXNpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoZmFsc2UpO1xuICB9XG4gIHZpc2l0RGVjbGFyZUNsYXNzU3RtdChzdG10OiBvLkNsYXNzU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIGN0eC5wdXNoQ2xhc3Moc3RtdCk7XG4gICAgdGhpcy5fdmlzaXRDbGFzc0NvbnN0cnVjdG9yKHN0bXQsIGN0eCk7XG5cbiAgICBpZiAoc3RtdC5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgY3R4LnByaW50KHN0bXQsIGAke3N0bXQubmFtZX0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShgKTtcbiAgICAgIHN0bXQucGFyZW50LnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgICAgY3R4LnByaW50bG4oc3RtdCwgYC5wcm90b3R5cGUpO2ApO1xuICAgIH1cbiAgICBzdG10LmdldHRlcnMuZm9yRWFjaCgoZ2V0dGVyKSA9PiB0aGlzLl92aXNpdENsYXNzR2V0dGVyKHN0bXQsIGdldHRlciwgY3R4KSk7XG4gICAgc3RtdC5tZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4gdGhpcy5fdmlzaXRDbGFzc01ldGhvZChzdG10LCBtZXRob2QsIGN0eCkpO1xuICAgIGN0eC5wb3BDbGFzcygpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRDbGFzc0NvbnN0cnVjdG9yKHN0bXQ6IG8uQ2xhc3NTdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCkge1xuICAgIGN0eC5wcmludChzdG10LCBgZnVuY3Rpb24gJHtzdG10Lm5hbWV9KGApO1xuICAgIGlmIChzdG10LmNvbnN0cnVjdG9yTWV0aG9kICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3Zpc2l0UGFyYW1zKHN0bXQuY29uc3RydWN0b3JNZXRob2QucGFyYW1zLCBjdHgpO1xuICAgIH1cbiAgICBjdHgucHJpbnRsbihzdG10LCBgKSB7YCk7XG4gICAgY3R4LmluY0luZGVudCgpO1xuICAgIGlmIChzdG10LmNvbnN0cnVjdG9yTWV0aG9kICE9IG51bGwpIHtcbiAgICAgIGlmIChzdG10LmNvbnN0cnVjdG9yTWV0aG9kLmJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICBjdHgucHJpbnRsbihzdG10LCBgdmFyIHNlbGYgPSB0aGlzO2ApO1xuICAgICAgICB0aGlzLnZpc2l0QWxsU3RhdGVtZW50cyhzdG10LmNvbnN0cnVjdG9yTWV0aG9kLmJvZHksIGN0eCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5kZWNJbmRlbnQoKTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRDbGFzc0dldHRlcihzdG10OiBvLkNsYXNzU3RtdCwgZ2V0dGVyOiBvLkNsYXNzR2V0dGVyLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCkge1xuICAgIGN0eC5wcmludGxuKFxuICAgICAgICBzdG10LFxuICAgICAgICBgT2JqZWN0LmRlZmluZVByb3BlcnR5KCR7c3RtdC5uYW1lfS5wcm90b3R5cGUsICcke2dldHRlci5uYW1lfScsIHsgZ2V0OiBmdW5jdGlvbigpIHtgKTtcbiAgICBjdHguaW5jSW5kZW50KCk7XG4gICAgaWYgKGdldHRlci5ib2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGN0eC5wcmludGxuKHN0bXQsIGB2YXIgc2VsZiA9IHRoaXM7YCk7XG4gICAgICB0aGlzLnZpc2l0QWxsU3RhdGVtZW50cyhnZXR0ZXIuYm9keSwgY3R4KTtcbiAgICB9XG4gICAgY3R4LmRlY0luZGVudCgpO1xuICAgIGN0eC5wcmludGxuKHN0bXQsIGB9fSk7YCk7XG4gIH1cblxuICBwcml2YXRlIF92aXNpdENsYXNzTWV0aG9kKHN0bXQ6IG8uQ2xhc3NTdG10LCBtZXRob2Q6IG8uQ2xhc3NNZXRob2QsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KSB7XG4gICAgY3R4LnByaW50KHN0bXQsIGAke3N0bXQubmFtZX0ucHJvdG90eXBlLiR7bWV0aG9kLm5hbWV9ID0gZnVuY3Rpb24oYCk7XG4gICAgdGhpcy5fdmlzaXRQYXJhbXMobWV0aG9kLnBhcmFtcywgY3R4KTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgKSB7YCk7XG4gICAgY3R4LmluY0luZGVudCgpO1xuICAgIGlmIChtZXRob2QuYm9keS5sZW5ndGggPiAwKSB7XG4gICAgICBjdHgucHJpbnRsbihzdG10LCBgdmFyIHNlbGYgPSB0aGlzO2ApO1xuICAgICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMobWV0aG9kLmJvZHksIGN0eCk7XG4gICAgfVxuICAgIGN0eC5kZWNJbmRlbnQoKTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgfTtgKTtcbiAgfVxuXG4gIHZpc2l0V3JhcHBlZE5vZGVFeHByKGFzdDogby5XcmFwcGVkTm9kZUV4cHI8YW55PiwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGVtaXQgYSBXcmFwcGVkTm9kZUV4cHIgaW4gSmF2YXNjcmlwdC4nKTtcbiAgfVxuXG4gIHZpc2l0UmVhZFZhckV4cHIoYXN0OiBvLlJlYWRWYXJFeHByLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAoYXN0LmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5UaGlzKSB7XG4gICAgICBjdHgucHJpbnQoYXN0LCAnc2VsZicpO1xuICAgIH0gZWxzZSBpZiAoYXN0LmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5TdXBlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGAnc3VwZXInIG5lZWRzIHRvIGJlIGhhbmRsZWQgYXQgYSBwYXJlbnQgYXN0IG5vZGUsIG5vdCBhdCB0aGUgdmFyaWFibGUgbGV2ZWwhYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLnZpc2l0UmVhZFZhckV4cHIoYXN0LCBjdHgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdERlY2xhcmVWYXJTdG10KHN0bXQ6IG8uRGVjbGFyZVZhclN0bXQsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjdHgucHJpbnQoc3RtdCwgYHZhciAke3N0bXQubmFtZX1gKTtcbiAgICBpZiAoc3RtdC52YWx1ZSkge1xuICAgICAgY3R4LnByaW50KHN0bXQsICcgPSAnKTtcbiAgICAgIHN0bXQudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgfVxuICAgIGN0eC5wcmludGxuKHN0bXQsIGA7YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRDYXN0RXhwcihhc3Q6IG8uQ2FzdEV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBhc3QudmFsdWUudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnZva2VGdW5jdGlvbkV4cHIoZXhwcjogby5JbnZva2VGdW5jdGlvbkV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogc3RyaW5nfG51bGwge1xuICAgIGNvbnN0IGZuRXhwciA9IGV4cHIuZm47XG4gICAgaWYgKGZuRXhwciBpbnN0YW5jZW9mIG8uUmVhZFZhckV4cHIgJiYgZm5FeHByLmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5TdXBlcikge1xuICAgICAgY3R4LmN1cnJlbnRDbGFzcyEucGFyZW50IS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICAgIGN0eC5wcmludChleHByLCBgLmNhbGwodGhpc2ApO1xuICAgICAgaWYgKGV4cHIuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN0eC5wcmludChleHByLCBgLCBgKTtcbiAgICAgICAgdGhpcy52aXNpdEFsbEV4cHJlc3Npb25zKGV4cHIuYXJncywgY3R4LCAnLCcpO1xuICAgICAgfVxuICAgICAgY3R4LnByaW50KGV4cHIsIGApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLnZpc2l0SW52b2tlRnVuY3Rpb25FeHByKGV4cHIsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25FeHByKGFzdDogby5GdW5jdGlvbkV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjdHgucHJpbnQoYXN0LCBgZnVuY3Rpb24ke2FzdC5uYW1lID8gJyAnICsgYXN0Lm5hbWUgOiAnJ30oYCk7XG4gICAgdGhpcy5fdmlzaXRQYXJhbXMoYXN0LnBhcmFtcywgY3R4KTtcbiAgICBjdHgucHJpbnRsbihhc3QsIGApIHtgKTtcbiAgICBjdHguaW5jSW5kZW50KCk7XG4gICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoYXN0LnN0YXRlbWVudHMsIGN0eCk7XG4gICAgY3R4LmRlY0luZGVudCgpO1xuICAgIGN0eC5wcmludChhc3QsIGB9YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXREZWNsYXJlRnVuY3Rpb25TdG10KHN0bXQ6IG8uRGVjbGFyZUZ1bmN0aW9uU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIGN0eC5wcmludChzdG10LCBgZnVuY3Rpb24gJHtzdG10Lm5hbWV9KGApO1xuICAgIHRoaXMuX3Zpc2l0UGFyYW1zKHN0bXQucGFyYW1zLCBjdHgpO1xuICAgIGN0eC5wcmludGxuKHN0bXQsIGApIHtgKTtcbiAgICBjdHguaW5jSW5kZW50KCk7XG4gICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5zdGF0ZW1lbnRzLCBjdHgpO1xuICAgIGN0eC5kZWNJbmRlbnQoKTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgfWApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0VHJ5Q2F0Y2hTdG10KHN0bXQ6IG8uVHJ5Q2F0Y2hTdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYHRyeSB7YCk7XG4gICAgY3R4LmluY0luZGVudCgpO1xuICAgIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKHN0bXQuYm9keVN0bXRzLCBjdHgpO1xuICAgIGN0eC5kZWNJbmRlbnQoKTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgfSBjYXRjaCAoJHtDQVRDSF9FUlJPUl9WQVIubmFtZX0pIHtgKTtcbiAgICBjdHguaW5jSW5kZW50KCk7XG4gICAgY29uc3QgY2F0Y2hTdG10cyA9XG4gICAgICAgIFs8by5TdGF0ZW1lbnQ+Q0FUQ0hfU1RBQ0tfVkFSLnNldChDQVRDSF9FUlJPUl9WQVIucHJvcCgnc3RhY2snKSkudG9EZWNsU3RtdChudWxsLCBbXG4gICAgICAgICAgby5TdG10TW9kaWZpZXIuRmluYWxcbiAgICAgICAgXSldLmNvbmNhdChzdG10LmNhdGNoU3RtdHMpO1xuICAgIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKGNhdGNoU3RtdHMsIGN0eCk7XG4gICAgY3R4LmRlY0luZGVudCgpO1xuICAgIGN0eC5wcmludGxuKHN0bXQsIGB9YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdExvY2FsaXplZFN0cmluZyhhc3Q6IG8uTG9jYWxpemVkU3RyaW5nLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb252b2x1dGVkIHBpZWNlIG9mIGNvZGUgaXMgZWZmZWN0aXZlbHkgdGhlIGRvd25sZXZlbGxlZCBlcXVpdmFsZW50IG9mXG4gICAgLy8gYGBgXG4gICAgLy8gJGxvY2FsaXplIGAuLi5gXG4gICAgLy8gYGBgXG4gICAgLy8gd2hpY2ggaXMgZWZmZWN0aXZlbHkgbGlrZTpcbiAgICAvLyBgYGBcbiAgICAvLyAkbG9jYWxpemUoX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpLCBleHByZXNzaW9uMSwgZXhwcmVzc2lvbjIsIC4uLik7XG4gICAgLy8gYGBgXG4gICAgLy9cbiAgICAvLyBUaGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZXhwZWN0cyBhIFwidGVtcGxhdGUgb2JqZWN0XCIsIHdoaWNoIGlzIGFuIGFycmF5IG9mIFwiY29va2VkXCIgc3RyaW5nc1xuICAgIC8vIHBsdXMgYSBgcmF3YCBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFuIGFycmF5IG9mIFwicmF3XCIgc3RyaW5ncy5cbiAgICAvL1xuICAgIC8vIEluIHNvbWUgZW52aXJvbm1lbnRzIGEgaGVscGVyIGZ1bmN0aW9uIGNhbGxlZCBgX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpYCBtaWdodCBiZVxuICAgIC8vIGF2YWlsYWJsZSwgaW4gd2hpY2ggY2FzZSB3ZSB1c2UgdGhhdC4gT3RoZXJ3aXNlIHdlIG11c3QgY3JlYXRlIG91ciBvd24gaGVscGVyIGZ1bmN0aW9uXG4gICAgLy8gaW5saW5lLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGlubGluZSBmdW5jdGlvbiwgaWYgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgaXMgYXZhaWxhYmxlIHdlIHVzZSB0aGF0IHRvIGF0dGFjaCB0aGVcbiAgICAvLyBgcmF3YCBhcnJheS5cbiAgICBjdHgucHJpbnQoXG4gICAgICAgIGFzdCxcbiAgICAgICAgJyRsb2NhbGl6ZSgodGhpcyYmdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdHx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5P09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwicmF3XCIse3ZhbHVlOnR9KTplLnJhdz10LGV9KSgnKTtcbiAgICBjb25zdCBwYXJ0cyA9IFthc3Quc2VyaWFsaXplSTE4bkhlYWQoKV07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhc3QubWVzc2FnZVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYXJ0cy5wdXNoKGFzdC5zZXJpYWxpemVJMThuVGVtcGxhdGVQYXJ0KGkpKTtcbiAgICB9XG4gICAgY3R4LnByaW50KGFzdCwgYFske3BhcnRzLm1hcChwYXJ0ID0+IGVzY2FwZUlkZW50aWZpZXIocGFydC5jb29rZWQsIGZhbHNlKSkuam9pbignLCAnKX1dLCBgKTtcbiAgICBjdHgucHJpbnQoYXN0LCBgWyR7cGFydHMubWFwKHBhcnQgPT4gZXNjYXBlSWRlbnRpZmllcihwYXJ0LnJhdywgZmFsc2UpKS5qb2luKCcsICcpfV0pYCk7XG4gICAgYXN0LmV4cHJlc3Npb25zLmZvckVhY2goZXhwcmVzc2lvbiA9PiB7XG4gICAgICBjdHgucHJpbnQoYXN0LCAnLCAnKTtcbiAgICAgIGV4cHJlc3Npb24udmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgfSk7XG4gICAgY3R4LnByaW50KGFzdCwgJyknKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0UGFyYW1zKHBhcmFtczogby5GblBhcmFtW10sIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdEFsbE9iamVjdHMocGFyYW0gPT4gY3R4LnByaW50KG51bGwsIHBhcmFtLm5hbWUpLCBwYXJhbXMsIGN0eCwgJywnKTtcbiAgfVxuXG4gIGdldEJ1aWx0aW5NZXRob2ROYW1lKG1ldGhvZDogby5CdWlsdGluTWV0aG9kKTogc3RyaW5nIHtcbiAgICBsZXQgbmFtZTogc3RyaW5nO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5Db25jYXRBcnJheTpcbiAgICAgICAgbmFtZSA9ICdjb25jYXQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugby5CdWlsdGluTWV0aG9kLlN1YnNjcmliZU9ic2VydmFibGU6XG4gICAgICAgIG5hbWUgPSAnc3Vic2NyaWJlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG8uQnVpbHRpbk1ldGhvZC5CaW5kOlxuICAgICAgICBuYW1lID0gJ2JpbmQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBidWlsdGluIG1ldGhvZDogJHttZXRob2R9YCk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xuICB9XG59XG4iXX0=