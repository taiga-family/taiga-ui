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
        define("@angular/language-service/src/expressions", ["require", "exports", "tslib", "@angular/compiler", "@angular/language-service/src/expression_type", "@angular/language-service/src/types", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var expression_type_1 = require("@angular/language-service/src/expression_type");
    var types_1 = require("@angular/language-service/src/types");
    var utils_1 = require("@angular/language-service/src/utils");
    function findAstAt(ast, position, excludeEmpty) {
        if (excludeEmpty === void 0) { excludeEmpty = false; }
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (ast) {
                if ((!excludeEmpty || ast.sourceSpan.start < ast.sourceSpan.end) &&
                    utils_1.inSpan(position, ast.sourceSpan)) {
                    path.push(ast);
                    ast.visit(this);
                }
            };
            return class_1;
        }(compiler_1.RecursiveAstVisitor));
        // We never care about the ASTWithSource node and its visit() method calls its ast's visit so
        // the visit() method above would never see it.
        if (ast instanceof compiler_1.ASTWithSource) {
            ast = ast.ast;
        }
        visitor.visit(ast);
        return new compiler_1.AstPath(path, position);
    }
    function getExpressionCompletions(scope, ast, position, templateInfo) {
        var path = findAstAt(ast, position);
        if (path.empty)
            return undefined;
        var tail = path.tail;
        var result = scope;
        function getType(ast) {
            return new expression_type_1.AstType(scope, templateInfo.query, {}, templateInfo.source).getType(ast);
        }
        // If the completion request is in a not in a pipe or property access then the global scope
        // (that is the scope of the implicit receiver) is the right scope as the user is typing the
        // beginning of an expression.
        tail.visit({
            visitBinary: function (_ast) { },
            visitChain: function (_ast) { },
            visitConditional: function (_ast) { },
            visitFunctionCall: function (_ast) { },
            visitImplicitReceiver: function (_ast) { },
            visitInterpolation: function (_ast) {
                result = undefined;
            },
            visitKeyedRead: function (_ast) { },
            visitKeyedWrite: function (_ast) { },
            visitLiteralArray: function (_ast) { },
            visitLiteralMap: function (_ast) { },
            visitLiteralPrimitive: function (_ast) { },
            visitMethodCall: function (_ast) { },
            visitPipe: function (ast) {
                if (position >= ast.exp.span.end &&
                    (!ast.args || !ast.args.length || position < ast.args[0].span.start)) {
                    // We are in a position a pipe name is expected.
                    result = templateInfo.query.getPipes();
                }
            },
            visitPrefixNot: function (_ast) { },
            visitNonNullAssert: function (_ast) { },
            visitPropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitPropertyWrite: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitQuote: function (_ast) {
                // For a quote, return the members of any (if there are any).
                result = templateInfo.query.getBuiltinType(types_1.BuiltinType.Any).members();
            },
            visitSafeMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitSafePropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
        });
        return result && result.values();
    }
    exports.getExpressionCompletions = getExpressionCompletions;
    /**
     * Retrieves the expression symbol at a particular position in a template.
     *
     * @param scope symbols in scope of the template
     * @param ast template AST
     * @param position absolute location in template to retrieve symbol at
     * @param query type symbol query for the template scope
     */
    function getExpressionSymbol(scope, ast, position, templateInfo) {
        var path = findAstAt(ast, position, /* excludeEmpty */ true);
        if (path.empty)
            return undefined;
        var tail = path.tail;
        function getType(ast) {
            return new expression_type_1.AstType(scope, templateInfo.query, {}, templateInfo.source).getType(ast);
        }
        function spanFromName(ast) {
            // `nameSpan` is an absolute span, but the span expected by the result of this method is
            // relative to the start of the expression.
            // TODO(ayazhafiz): migrate to only using absolute spans
            var offset = ast.sourceSpan.start - ast.span.start;
            return {
                start: ast.nameSpan.start - offset,
                end: ast.nameSpan.end - offset,
            };
        }
        var symbol = undefined;
        var span = undefined;
        // If the completion request is in a not in a pipe or property access then the global scope
        // (that is the scope of the implicit receiver) is the right scope as the user is typing the
        // beginning of an expression.
        tail.visit({
            visitBinary: function (_ast) { },
            visitChain: function (_ast) { },
            visitConditional: function (_ast) { },
            visitFunctionCall: function (_ast) { },
            visitImplicitReceiver: function (_ast) { },
            visitInterpolation: function (_ast) { },
            visitKeyedRead: function (_ast) { },
            visitKeyedWrite: function (_ast) { },
            visitLiteralArray: function (_ast) { },
            visitLiteralMap: function (_ast) { },
            visitLiteralPrimitive: function (_ast) { },
            visitMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitPipe: function (ast) {
                if (utils_1.inSpan(position, ast.nameSpan, /* exclusive */ true)) {
                    // We are in a position a pipe name is expected.
                    var pipes = templateInfo.query.getPipes();
                    symbol = pipes.get(ast.name);
                    span = spanFromName(ast);
                }
            },
            visitPrefixNot: function (_ast) { },
            visitNonNullAssert: function (_ast) { },
            visitPropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitPropertyWrite: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitQuote: function (_ast) { },
            visitSafeMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitSafePropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
        });
        if (symbol && span) {
            return { symbol: symbol, span: span };
        }
    }
    exports.getExpressionSymbol = getExpressionSymbol;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9leHByZXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBK0c7SUFFL0csaUZBQTBDO0lBQzFDLDZEQUErRTtJQUMvRSw2REFBK0I7SUFJL0IsU0FBUyxTQUFTLENBQUMsR0FBUSxFQUFFLFFBQWdCLEVBQUUsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFDMUUsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sT0FBTyxHQUFHO1lBQWtCLG1DQUFtQjtZQUFqQzs7WUFRcEIsQ0FBQztZQVBDLHVCQUFLLEdBQUwsVUFBTSxHQUFRO2dCQUNaLElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztvQkFDNUQsY0FBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7WUFDSCxDQUFDO1lBQ0gsY0FBQztRQUFELENBQUMsQUFSbUIsQ0FBYyw4QkFBbUIsRUFRcEQsQ0FBQztRQUVGLDZGQUE2RjtRQUM3RiwrQ0FBK0M7UUFDL0MsSUFBSSxHQUFHLFlBQVksd0JBQWEsRUFBRTtZQUNoQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUNmO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQixPQUFPLElBQUksa0JBQVcsQ0FBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMs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QUFDLENBQUM7Z0JBQzlELElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELHFCQUFxQixZQUFDLEdBQUc7Z0JBQ3ZCLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixPQUFPLEVBQUMsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFqRkQsa0RBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FTVCwgQXN0UGF0aCBhcyBBc3RQYXRoQmFzZSwgQVNUV2l0aE5hbWUsIEFTVFdpdGhTb3VyY2UsIFJlY3Vyc2l2ZUFzdFZpc2l0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuaW1wb3J0IHtBc3RUeXBlfSBmcm9tICcuL2V4cHJlc3Npb25fdHlwZSc7XG5pbXBvcnQge0J1aWx0aW5UeXBlLCBTcGFuLCBTeW1ib2wsIFN5bWJvbFRhYmxlLCBUZW1wbGF0ZVNvdXJjZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2luU3Bhbn0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgQXN0UGF0aCA9IEFzdFBhdGhCYXNlPEFTVD47XG5cbmZ1bmN0aW9uIGZpbmRBc3RBdChhc3Q6IEFTVCwgcG9zaXRpb246IG51bWJlciwgZXhjbHVkZUVtcHR5OiBib29sZWFuID0gZmFsc2UpOiBBc3RQYXRoIHtcbiAgY29uc3QgcGF0aDogQVNUW10gPSBbXTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBjbGFzcyBleHRlbmRzIFJlY3Vyc2l2ZUFzdFZpc2l0b3Ige1xuICAgIHZpc2l0KGFzdDogQVNUKSB7XG4gICAgICBpZiAoKCFleGNsdWRlRW1wdHkgfHwgYXN0LnNvdXJjZVNwYW4uc3RhcnQgPCBhc3Quc291cmNlU3Bhbi5lbmQpICYmXG4gICAgICAgICAgaW5TcGFuKHBvc2l0aW9uLCBhc3Quc291cmNlU3BhbikpIHtcbiAgICAgICAgcGF0aC5wdXNoKGFzdCk7XG4gICAgICAgIGFzdC52aXNpdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gV2UgbmV2ZXIgY2FyZSBhYm91dCB0aGUgQVNUV2l0aFNvdXJjZSBub2RlIGFuZCBpdHMgdmlzaXQoKSBtZXRob2QgY2FsbHMgaXRzIGFzdCdzIHZpc2l0IHNvXG4gIC8vIHRoZSB2aXNpdCgpIG1ldGhvZCBhYm92ZSB3b3VsZCBuZXZlciBzZWUgaXQuXG4gIGlmIChhc3QgaW5zdGFuY2VvZiBBU1RXaXRoU291cmNlKSB7XG4gICAgYXN0ID0gYXN0LmFzdDtcbiAgfVxuXG4gIHZpc2l0b3IudmlzaXQoYXN0KTtcblxuICByZXR1cm4gbmV3IEFzdFBhdGhCYXNlPEFTVD4ocGF0aCwgcG9zaXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwcmVzc2lvbkNvbXBsZXRpb25zKFxuICAgIHNjb3BlOiBTeW1ib2xUYWJsZSwgYXN0OiBBU1QsIHBvc2l0aW9uOiBudW1iZXIsIHRlbXBsYXRlSW5mbzogVGVtcGxhdGVTb3VyY2UpOiBTeW1ib2xbXXxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCBwYXRoID0gZmluZEFzdEF0KGFzdCwgcG9zaXRpb24pO1xuICBpZiAocGF0aC5lbXB0eSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY29uc3QgdGFpbCA9IHBhdGgudGFpbCE7XG4gIGxldCByZXN1bHQ6IFN5bWJvbFRhYmxlfHVuZGVmaW5lZCA9IHNjb3BlO1xuXG4gIGZ1bmN0aW9uIGdldFR5cGUoYXN0OiBBU1QpOiBTeW1ib2wge1xuICAgIHJldHVybiBuZXcgQXN0VHlwZShzY29wZSwgdGVtcGxhdGVJbmZvLnF1ZXJ5LCB7fSwgdGVtcGxhdGVJbmZvLnNvdXJjZSkuZ2V0VHlwZShhc3QpO1xuICB9XG5cbiAgLy8gSWYgdGhlIGNvbXBsZXRpb24gcmVxdWVzdCBpcyBpbiBhIG5vdCBpbiBhIHBpcGUgb3IgcHJvcGVydHkgYWNjZXNzIHRoZW4gdGhlIGdsb2JhbCBzY29wZVxuICAvLyAodGhhdCBpcyB0aGUgc2NvcGUgb2YgdGhlIGltcGxpY2l0IHJlY2VpdmVyKSBpcyB0aGUgcmlnaHQgc2NvcGUgYXMgdGhlIHVzZXIgaXMgdHlwaW5nIHRoZVxuICAvLyBiZWdpbm5pbmcgb2YgYW4gZXhwcmVzc2lvbi5cbiAgdGFpbC52aXNpdCh7XG4gICAgdmlzaXRCaW5hcnkoX2FzdCkge30sXG4gICAgdmlzaXRDaGFpbihfYXN0KSB7fSxcbiAgICB2aXNpdENvbmRpdGlvbmFsKF9hc3QpIHt9LFxuICAgIHZpc2l0RnVuY3Rpb25DYWxsKF9hc3QpIHt9LFxuICAgIHZpc2l0SW1wbGljaXRSZWNlaXZlcihfYXN0KSB7fSxcbiAgICB2aXNpdEludGVycG9sYXRpb24oX2FzdCkge1xuICAgICAgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgdmlzaXRLZXllZFJlYWQoX2FzdCkge30sXG4gICAgdmlzaXRLZXllZFdyaXRlKF9hc3QpIHt9LFxuICAgIHZpc2l0TGl0ZXJhbEFycmF5KF9hc3QpIHt9LFxuICAgIHZpc2l0TGl0ZXJhbE1hcChfYXN0KSB7fSxcbiAgICB2aXNpdExpdGVyYWxQcmltaXRpdmUoX2FzdCkge30sXG4gICAgdmlzaXRNZXRob2RDYWxsKF9hc3QpIHt9LFxuICAgIHZpc2l0UGlwZShhc3QpIHtcbiAgICAgIGlmIChwb3NpdGlvbiA+PSBhc3QuZXhwLnNwYW4uZW5kICYmXG4gICAgICAgICAgKCFhc3QuYXJncyB8fCAhYXN0LmFyZ3MubGVuZ3RoIHx8IHBvc2l0aW9uIDwgKDxBU1Q+YXN0LmFyZ3NbMF0pLnNwYW4uc3RhcnQpKSB7XG4gICAgICAgIC8vIFdlIGFyZSBpbiBhIHBvc2l0aW9uIGEgcGlwZSBuYW1lIGlzIGV4cGVjdGVkLlxuICAgICAgICByZXN1bHQgPSB0ZW1wbGF0ZUluZm8ucXVlcnkuZ2V0UGlwZXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpc2l0UHJlZml4Tm90KF9hc3QpIHt9LFxuICAgIHZpc2l0Tm9uTnVsbEFzc2VydChfYXN0KSB7fSxcbiAgICB2aXNpdFByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0UHJvcGVydHlXcml0ZShhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0UXVvdGUoX2FzdCkge1xuICAgICAgLy8gRm9yIGEgcXVvdGUsIHJldHVybiB0aGUgbWVtYmVycyBvZiBhbnkgKGlmIHRoZXJlIGFyZSBhbnkpLlxuICAgICAgcmVzdWx0ID0gdGVtcGxhdGVJbmZvLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSkubWVtYmVycygpO1xuICAgIH0sXG4gICAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZXMoKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGV4cHJlc3Npb24gc3ltYm9sIGF0IGEgcGFydGljdWxhciBwb3NpdGlvbiBpbiBhIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBzY29wZSBzeW1ib2xzIGluIHNjb3BlIG9mIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIGFzdCB0ZW1wbGF0ZSBBU1RcbiAqIEBwYXJhbSBwb3NpdGlvbiBhYnNvbHV0ZSBsb2NhdGlvbiBpbiB0ZW1wbGF0ZSB0byByZXRyaWV2ZSBzeW1ib2wgYXRcbiAqIEBwYXJhbSBxdWVyeSB0eXBlIHN5bWJvbCBxdWVyeSBmb3IgdGhlIHRlbXBsYXRlIHNjb3BlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHByZXNzaW9uU3ltYm9sKFxuICAgIHNjb3BlOiBTeW1ib2xUYWJsZSwgYXN0OiBBU1QsIHBvc2l0aW9uOiBudW1iZXIsXG4gICAgdGVtcGxhdGVJbmZvOiBUZW1wbGF0ZVNvdXJjZSk6IHtzeW1ib2w6IFN5bWJvbCwgc3BhbjogU3Bhbn18dW5kZWZpbmVkIHtcbiAgY29uc3QgcGF0aCA9IGZpbmRBc3RBdChhc3QsIHBvc2l0aW9uLCAvKiBleGNsdWRlRW1wdHkgKi8gdHJ1ZSk7XG4gIGlmIChwYXRoLmVtcHR5KSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCB0YWlsID0gcGF0aC50YWlsITtcblxuICBmdW5jdGlvbiBnZXRUeXBlKGFzdDogQVNUKTogU3ltYm9sIHtcbiAgICByZXR1cm4gbmV3IEFzdFR5cGUoc2NvcGUsIHRlbXBsYXRlSW5mby5xdWVyeSwge30sIHRlbXBsYXRlSW5mby5zb3VyY2UpLmdldFR5cGUoYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwYW5Gcm9tTmFtZShhc3Q6IEFTVFdpdGhOYW1lKTogU3BhbiB7XG4gICAgLy8gYG5hbWVTcGFuYCBpcyBhbiBhYnNvbHV0ZSBzcGFuLCBidXQgdGhlIHNwYW4gZXhwZWN0ZWQgYnkgdGhlIHJlc3VsdCBvZiB0aGlzIG1ldGhvZCBpc1xuICAgIC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgICAvLyBUT0RPKGF5YXpoYWZpeik6IG1pZ3JhdGUgdG8gb25seSB1c2luZyBhYnNvbHV0ZSBzcGFuc1xuICAgIGNvbnN0IG9mZnNldCA9IGFzdC5zb3VyY2VTcGFuLnN0YXJ0IC0gYXN0LnNwYW4uc3RhcnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBhc3QubmFtZVNwYW4uc3RhcnQgLSBvZmZzZXQsXG4gICAgICBlbmQ6IGFzdC5uYW1lU3Bhbi5lbmQgLSBvZmZzZXQsXG4gICAgfTtcbiAgfVxuXG4gIGxldCBzeW1ib2w6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxldCBzcGFuOiBTcGFufHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvLyBJZiB0aGUgY29tcGxldGlvbiByZXF1ZXN0IGlzIGluIGEgbm90IGluIGEgcGlwZSBvciBwcm9wZXJ0eSBhY2Nlc3MgdGhlbiB0aGUgZ2xvYmFsIHNjb3BlXG4gIC8vICh0aGF0IGlzIHRoZSBzY29wZSBvZiB0aGUgaW1wbGljaXQgcmVjZWl2ZXIpIGlzIHRoZSByaWdodCBzY29wZSBhcyB0aGUgdXNlciBpcyB0eXBpbmcgdGhlXG4gIC8vIGJlZ2lubmluZyBvZiBhbiBleHByZXNzaW9uLlxuICB0YWlsLnZpc2l0KHtcbiAgICB2aXNpdEJpbmFyeShfYXN0KSB7fSxcbiAgICB2aXNpdENoYWluKF9hc3QpIHt9LFxuICAgIHZpc2l0Q29uZGl0aW9uYWwoX2FzdCkge30sXG4gICAgdmlzaXRGdW5jdGlvbkNhbGwoX2FzdCkge30sXG4gICAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKF9hc3QpIHt9LFxuICAgIHZpc2l0SW50ZXJwb2xhdGlvbihfYXN0KSB7fSxcbiAgICB2aXNpdEtleWVkUmVhZChfYXN0KSB7fSxcbiAgICB2aXNpdEtleWVkV3JpdGUoX2FzdCkge30sXG4gICAgdmlzaXRMaXRlcmFsQXJyYXkoX2FzdCkge30sXG4gICAgdmlzaXRMaXRlcmFsTWFwKF9hc3QpIHt9LFxuICAgIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShfYXN0KSB7fSxcbiAgICB2aXNpdE1ldGhvZENhbGwoYXN0KSB7XG4gICAgICBjb25zdCByZWNlaXZlclR5cGUgPSBnZXRUeXBlKGFzdC5yZWNlaXZlcik7XG4gICAgICBzeW1ib2wgPSByZWNlaXZlclR5cGUgJiYgcmVjZWl2ZXJUeXBlLm1lbWJlcnMoKS5nZXQoYXN0Lm5hbWUpO1xuICAgICAgc3BhbiA9IHNwYW5Gcm9tTmFtZShhc3QpO1xuICAgIH0sXG4gICAgdmlzaXRQaXBlKGFzdCkge1xuICAgICAgaWYgKGluU3Bhbihwb3NpdGlvbiwgYXN0Lm5hbWVTcGFuLCAvKiBleGNsdXNpdmUgKi8gdHJ1ZSkpIHtcbiAgICAgICAgLy8gV2UgYXJlIGluIGEgcG9zaXRpb24gYSBwaXBlIG5hbWUgaXMgZXhwZWN0ZWQuXG4gICAgICAgIGNvbnN0IHBpcGVzID0gdGVtcGxhdGVJbmZvLnF1ZXJ5LmdldFBpcGVzKCk7XG4gICAgICAgIHN5bWJvbCA9IHBpcGVzLmdldChhc3QubmFtZSk7XG4gICAgICAgIHNwYW4gPSBzcGFuRnJvbU5hbWUoYXN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpc2l0UHJlZml4Tm90KF9hc3QpIHt9LFxuICAgIHZpc2l0Tm9uTnVsbEFzc2VydChfYXN0KSB7fSxcbiAgICB2aXNpdFByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHN5bWJvbCA9IHJlY2VpdmVyVHlwZSAmJiByZWNlaXZlclR5cGUubWVtYmVycygpLmdldChhc3QubmFtZSk7XG4gICAgICBzcGFuID0gc3BhbkZyb21OYW1lKGFzdCk7XG4gICAgfSxcbiAgICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0KSB7XG4gICAgICBjb25zdCByZWNlaXZlclR5cGUgPSBnZXRUeXBlKGFzdC5yZWNlaXZlcik7XG4gICAgICBzeW1ib2wgPSByZWNlaXZlclR5cGUgJiYgcmVjZWl2ZXJUeXBlLm1lbWJlcnMoKS5nZXQoYXN0Lm5hbWUpO1xuICAgICAgc3BhbiA9IHNwYW5Gcm9tTmFtZShhc3QpO1xuICAgIH0sXG4gICAgdmlzaXRRdW90ZShfYXN0KSB7fSxcbiAgICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdCkge1xuICAgICAgY29uc3QgcmVjZWl2ZXJUeXBlID0gZ2V0VHlwZShhc3QucmVjZWl2ZXIpO1xuICAgICAgc3ltYm9sID0gcmVjZWl2ZXJUeXBlICYmIHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkuZ2V0KGFzdC5uYW1lKTtcbiAgICAgIHNwYW4gPSBzcGFuRnJvbU5hbWUoYXN0KTtcbiAgICB9LFxuICAgIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHN5bWJvbCA9IHJlY2VpdmVyVHlwZSAmJiByZWNlaXZlclR5cGUubWVtYmVycygpLmdldChhc3QubmFtZSk7XG4gICAgICBzcGFuID0gc3BhbkZyb21OYW1lKGFzdCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKHN5bWJvbCAmJiBzcGFuKSB7XG4gICAgcmV0dXJuIHtzeW1ib2wsIHNwYW59O1xuICB9XG59XG4iXX0=