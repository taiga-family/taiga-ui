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
        define("@angular/language-service/src/utils", ["require", "exports", "tslib", "@angular/compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    function isParseSourceSpan(value) {
        return value && !!value.start;
    }
    function spanOf(span) {
        if (!span)
            return undefined;
        if (isParseSourceSpan(span)) {
            return { start: span.start.offset, end: span.end.offset };
        }
        else {
            if (span.endSourceSpan) {
                return { start: span.sourceSpan.start.offset, end: span.endSourceSpan.end.offset };
            }
            else if (span.children && span.children.length) {
                return {
                    start: span.sourceSpan.start.offset,
                    end: spanOf(span.children[span.children.length - 1]).end
                };
            }
            return { start: span.sourceSpan.start.offset, end: span.sourceSpan.end.offset };
        }
    }
    exports.spanOf = spanOf;
    function inSpan(position, span, exclusive) {
        return span != null &&
            (exclusive ? position >= span.start && position < span.end :
                position >= span.start && position <= span.end);
    }
    exports.inSpan = inSpan;
    function offsetSpan(span, amount) {
        return { start: span.start + amount, end: span.end + amount };
    }
    exports.offsetSpan = offsetSpan;
    function isNarrower(spanA, spanB) {
        return spanA.start >= spanB.start && spanA.end <= spanB.end;
    }
    exports.isNarrower = isNarrower;
    function isStructuralDirective(type) {
        var e_1, _a;
        var _b;
        try {
            for (var _c = tslib_1.__values(type.diDeps), _d = _c.next(); !_d.done; _d = _c.next()) {
                var diDep = _d.value;
                var diDepName = compiler_1.identifierName((_b = diDep.token) === null || _b === void 0 ? void 0 : _b.identifier);
                if (diDepName === compiler_1.Identifiers.TemplateRef.name ||
                    diDepName === compiler_1.Identifiers.ViewContainerRef.name) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    }
    exports.isStructuralDirective = isStructuralDirective;
    function getSelectors(info) {
        var e_2, _a, e_3, _b;
        var map = new Map();
        var results = [];
        try {
            for (var _c = tslib_1.__values(info.directives), _d = _c.next(); !_d.done; _d = _c.next()) {
                var directive = _d.value;
                var selectors = compiler_1.CssSelector.parse(directive.selector);
                try {
                    for (var selectors_1 = (e_3 = void 0, tslib_1.__values(selectors)), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                        var selector = selectors_1_1.value;
                        results.push(selector);
                        map.set(selector, directive);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (selectors_1_1 && !selectors_1_1.done && (_b = selectors_1.return)) _b.call(selectors_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { selectors: results, map: map };
    }
    exports.getSelectors = getSelectors;
    function diagnosticInfoFromTemplateInfo(info) {
        return {
            fileName: info.template.fileName,
            offset: info.template.span.start,
            query: info.template.query,
            members: info.template.members,
            htmlAst: info.htmlAst,
            templateAst: info.templateAst,
            source: info.template.source,
        };
    }
    exports.diagnosticInfoFromTemplateInfo = diagnosticInfoFromTemplateInfo;
    function findTemplateAstAt(ast, position) {
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (ast) {
                var span = spanOf(ast);
                if (inSpan(position, span)) {
                    var len = path.length;
                    if (!len || isNarrower(span, spanOf(path[len - 1]))) {
                        path.push(ast);
                    }
                }
                else {
                    // Returning a value here will result in the children being skipped.
                    return true;
                }
            };
            class_1.prototype.visitEmbeddedTemplate = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    // Ignore reference, variable and providers
                    visit(ast.attrs);
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitElement = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    // Ingnore providers
                    visit(ast.attrs);
                    visit(ast.inputs);
                    visit(ast.outputs);
                    visit(ast.references);
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitDirective = function (ast, context) {
                // Ignore the host properties of a directive
                var result = this.visitChildren(context, function (visit) {
                    visit(ast.inputs);
                });
                // We never care about the diretive itself, just its inputs.
                if (path[path.length - 1] === ast) {
                    path.pop();
                }
                return result;
            };
            return class_1;
        }(compiler_1.RecursiveTemplateAstVisitor));
        compiler_1.templateVisitAll(visitor, ast);
        return new compiler_1.AstPath(path, position);
    }
    exports.findTemplateAstAt = findTemplateAstAt;
    /**
     * Find the tightest node at the specified `position` from the AST `nodes`, and
     * return the path to the node.
     * @param nodes HTML AST nodes
     * @param position
     */
    function getPathToNodeAtPosition(nodes, position) {
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.visit = function (ast) {
                var span = spanOf(ast);
                if (inSpan(position, span)) {
                    path.push(ast);
                }
                else {
                    // Returning a truthy value here will skip all children and terminate
                    // the visit.
                    return true;
                }
            };
            return class_2;
        }(compiler_1.RecursiveVisitor));
        compiler_1.visitAll(visitor, nodes);
        return new compiler_1.AstPath(path, position);
    }
    exports.getPathToNodeAtPosition = getPathToNodeAtPosition;
    /**
     * Inverts an object's key-value pairs.
     */
    function invertMap(obj) {
        var e_4, _a;
        var result = {};
        try {
            for (var _b = tslib_1.__values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                var v = obj[name_1];
                result[v] = name_1;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    }
    exports.invertMap = invertMap;
    /**
     * Finds the directive member providing a template output binding, if one exists.
     * @param info aggregate template AST information
     * @param path narrowing
     */
    function findOutputBinding(binding, path, query) {
        var e_5, _a;
        var element = path.first(compiler_1.ElementAst);
        if (element) {
            try {
                for (var _b = tslib_1.__values(element.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var directive = _c.value;
                    var invertedOutputs = invertMap(directive.directive.outputs);
                    var fieldName = invertedOutputs[binding.name];
                    if (fieldName) {
                        var classSymbol = query.getTypeSymbol(directive.directive.type.reference);
                        if (classSymbol) {
                            return classSymbol.members().get(fieldName);
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
    exports.findOutputBinding = findOutputBinding;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBNlU7SUFTN1UsU0FBUyxpQkFBaUIsQ0FBQyxLQUFVO1FBQ25DLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFLRCxTQUFnQixNQUFNLENBQUMsSUFBaUM7UUFDdEQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUM1QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDO2FBQ2xGO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDaEQsT0FBTztvQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRztpQkFDMUQsQ0FBQzthQUNIO1lBQ0QsT0FBTyxF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cUIsRUFBRSxLQUFrQjs7UUFDbkUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxPQUFPLEVBQUU7O2dCQUNYLEtBQXdCLElBQUEsS0FBQSxpQkFBQSxPQUFPLENBQUMsVUFBVSxDQUFBLGdCQUFBLDRCQUFFO29CQUF2QyxJQUFNLFNBQVMsV0FBQTtvQkFDbEIsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9ELElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELElBQUksU0FBUyxFQUFFO3dCQUNiLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzVFLElBQUksV0FBVyxFQUFFOzRCQUNmLE9BQU8sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFDN0M7cUJBQ0Y7aUJBQ0Y7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQztJQWZELDhDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FzdFBhdGgsIEJvdW5kRXZlbnRBc3QsIENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5LCBDb21waWxlVHlwZU1ldGFkYXRhLCBDc3NTZWxlY3RvciwgRGlyZWN0aXZlQXN0LCBFbGVtZW50QXN0LCBFbWJlZGRlZFRlbXBsYXRlQXN0LCBIdG1sQXN0UGF0aCwgaWRlbnRpZmllck5hbWUsIElkZW50aWZpZXJzLCBOb2RlLCBQYXJzZVNvdXJjZVNwYW4sIFJlY3Vyc2l2ZVRlbXBsYXRlQXN0VmlzaXRvciwgUmVjdXJzaXZlVmlzaXRvciwgVGVtcGxhdGVBc3QsIFRlbXBsYXRlQXN0UGF0aCwgdGVtcGxhdGVWaXNpdEFsbCwgdmlzaXRBbGx9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7QXN0UmVzdWx0LCBEaWFnbm9zdGljVGVtcGxhdGVJbmZvLCBTZWxlY3RvckluZm8sIFNwYW4sIFN5bWJvbCwgU3ltYm9sUXVlcnl9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgU3BhbkhvbGRlciB7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgZW5kU291cmNlU3Bhbj86IFBhcnNlU291cmNlU3BhbnxudWxsO1xuICBjaGlsZHJlbj86IFNwYW5Ib2xkZXJbXTtcbn1cblxuZnVuY3Rpb24gaXNQYXJzZVNvdXJjZVNwYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFBhcnNlU291cmNlU3BhbiB7XG4gIHJldHVybiB2YWx1ZSAmJiAhIXZhbHVlLnN0YXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bhbk9mKHNwYW46IFNwYW5Ib2xkZXIpOiBTcGFuO1xuZXhwb3J0IGZ1bmN0aW9uIHNwYW5PZihzcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBTcGFuO1xuZXhwb3J0IGZ1bmN0aW9uIHNwYW5PZihzcGFuOiBTcGFuSG9sZGVyfFBhcnNlU291cmNlU3Bhbnx1bmRlZmluZWQpOiBTcGFufHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBzcGFuT2Yoc3Bhbj86IFNwYW5Ib2xkZXJ8UGFyc2VTb3VyY2VTcGFuKTogU3Bhbnx1bmRlZmluZWQge1xuICBpZiAoIXNwYW4pIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChpc1BhcnNlU291cmNlU3BhbihzcGFuKSkge1xuICAgIHJldHVybiB7c3RhcnQ6IHNwYW4uc3RhcnQub2Zmc2V0LCBlbmQ6IHNwYW4uZW5kLm9mZnNldH07XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNwYW4uZW5kU291cmNlU3Bhbikge1xuICAgICAgcmV0dXJuIHtzdGFydDogc3Bhbi5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCwgZW5kOiBzcGFuLmVuZFNvdXJjZVNwYW4uZW5kLm9mZnNldH07XG4gICAgfSBlbHNlIGlmIChzcGFuLmNoaWxkcmVuICYmIHNwYW4uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3Bhbi5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCxcbiAgICAgICAgZW5kOiBzcGFuT2Yoc3Bhbi5jaGlsZHJlbltzcGFuLmNoaWxkcmVuLmxlbmd0aCAtIDFdKSEuZW5kXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge3N0YXJ0OiBzcGFuLnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0LCBlbmQ6IHNwYW4uc291cmNlU3Bhbi5lbmQub2Zmc2V0fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5TcGFuKHBvc2l0aW9uOiBudW1iZXIsIHNwYW4/OiBTcGFuLCBleGNsdXNpdmU/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGFuICE9IG51bGwgJiZcbiAgICAgIChleGNsdXNpdmUgPyBwb3NpdGlvbiA+PSBzcGFuLnN0YXJ0ICYmIHBvc2l0aW9uIDwgc3Bhbi5lbmQgOlxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID49IHNwYW4uc3RhcnQgJiYgcG9zaXRpb24gPD0gc3Bhbi5lbmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0U3BhbihzcGFuOiBTcGFuLCBhbW91bnQ6IG51bWJlcik6IFNwYW4ge1xuICByZXR1cm4ge3N0YXJ0OiBzcGFuLnN0YXJ0ICsgYW1vdW50LCBlbmQ6IHNwYW4uZW5kICsgYW1vdW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFycm93ZXIoc3BhbkE6IFNwYW4sIHNwYW5COiBTcGFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGFuQS5zdGFydCA+PSBzcGFuQi5zdGFydCAmJiBzcGFuQS5lbmQgPD0gc3BhbkIuZW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJ1Y3R1cmFsRGlyZWN0aXZlKHR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGEpOiBib29sZWFuIHtcbiAgZm9yIChjb25zdCBkaURlcCBvZiB0eXBlLmRpRGVwcykge1xuICAgIGNvbnN0IGRpRGVwTmFtZSA9IGlkZW50aWZpZXJOYW1lKGRpRGVwLnRva2VuPy5pZGVudGlmaWVyKTtcbiAgICBpZiAoZGlEZXBOYW1lID09PSBJZGVudGlmaWVycy5UZW1wbGF0ZVJlZi5uYW1lIHx8XG4gICAgICAgIGRpRGVwTmFtZSA9PT0gSWRlbnRpZmllcnMuVmlld0NvbnRhaW5lclJlZi5uYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKGluZm86IEFzdFJlc3VsdCk6IFNlbGVjdG9ySW5mbyB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8Q3NzU2VsZWN0b3IsIENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5PigpO1xuICBjb25zdCByZXN1bHRzOiBDc3NTZWxlY3RvcltdID0gW107XG4gIGZvciAoY29uc3QgZGlyZWN0aXZlIG9mIGluZm8uZGlyZWN0aXZlcykge1xuICAgIGNvbnN0IHNlbGVjdG9yczogQ3NzU2VsZWN0b3JbXSA9IENzc1NlbGVjdG9yLnBhcnNlKGRpcmVjdGl2ZS5zZWxlY3RvciEpO1xuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XG4gICAgICByZXN1bHRzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgbWFwLnNldChzZWxlY3RvciwgZGlyZWN0aXZlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtzZWxlY3RvcnM6IHJlc3VsdHMsIG1hcH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWFnbm9zdGljSW5mb0Zyb21UZW1wbGF0ZUluZm8oaW5mbzogQXN0UmVzdWx0KTogRGlhZ25vc3RpY1RlbXBsYXRlSW5mbyB7XG4gIHJldHVybiB7XG4gICAgZmlsZU5hbWU6IGluZm8udGVtcGxhdGUuZmlsZU5hbWUsXG4gICAgb2Zmc2V0OiBpbmZvLnRlbXBsYXRlLnNwYW4uc3RhcnQsXG4gICAgcXVlcnk6IGluZm8udGVtcGxhdGUucXVlcnksXG4gICAgbWVtYmVyczogaW5mby50ZW1wbGF0ZS5tZW1iZXJzLFxuICAgIGh0bWxBc3Q6IGluZm8uaHRtbEFzdCxcbiAgICB0ZW1wbGF0ZUFzdDogaW5mby50ZW1wbGF0ZUFzdCxcbiAgICBzb3VyY2U6IGluZm8udGVtcGxhdGUuc291cmNlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRlbXBsYXRlQXN0QXQoYXN0OiBUZW1wbGF0ZUFzdFtdLCBwb3NpdGlvbjogbnVtYmVyKTogVGVtcGxhdGVBc3RQYXRoIHtcbiAgY29uc3QgcGF0aDogVGVtcGxhdGVBc3RbXSA9IFtdO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IGNsYXNzIGV4dGVuZHMgUmVjdXJzaXZlVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgICB2aXNpdChhc3Q6IFRlbXBsYXRlQXN0KTogYW55IHtcbiAgICAgIGxldCBzcGFuID0gc3Bhbk9mKGFzdCk7XG4gICAgICBpZiAoaW5TcGFuKHBvc2l0aW9uLCBzcGFuKSkge1xuICAgICAgICBjb25zdCBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgICAgICAgaWYgKCFsZW4gfHwgaXNOYXJyb3dlcihzcGFuLCBzcGFuT2YocGF0aFtsZW4gLSAxXSkpKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKGFzdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybmluZyBhIHZhbHVlIGhlcmUgd2lsbCByZXN1bHQgaW4gdGhlIGNoaWxkcmVuIGJlaW5nIHNraXBwZWQuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZpc2l0RW1iZWRkZWRUZW1wbGF0ZShhc3Q6IEVtYmVkZGVkVGVtcGxhdGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgICAgLy8gSWdub3JlIHJlZmVyZW5jZSwgdmFyaWFibGUgYW5kIHByb3ZpZGVyc1xuICAgICAgICB2aXNpdChhc3QuYXR0cnMpO1xuICAgICAgICB2aXNpdChhc3QuZGlyZWN0aXZlcyk7XG4gICAgICAgIHZpc2l0KGFzdC5jaGlsZHJlbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2aXNpdEVsZW1lbnQoYXN0OiBFbGVtZW50QXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7XG4gICAgICAgIC8vIEluZ25vcmUgcHJvdmlkZXJzXG4gICAgICAgIHZpc2l0KGFzdC5hdHRycyk7XG4gICAgICAgIHZpc2l0KGFzdC5pbnB1dHMpO1xuICAgICAgICB2aXNpdChhc3Qub3V0cHV0cyk7XG4gICAgICAgIHZpc2l0KGFzdC5yZWZlcmVuY2VzKTtcbiAgICAgICAgdmlzaXQoYXN0LmRpcmVjdGl2ZXMpO1xuICAgICAgICB2aXNpdChhc3QuY2hpbGRyZW4pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmlzaXREaXJlY3RpdmUoYXN0OiBEaXJlY3RpdmVBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICAvLyBJZ25vcmUgdGhlIGhvc3QgcHJvcGVydGllcyBvZiBhIGRpcmVjdGl2ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgICAgdmlzaXQoYXN0LmlucHV0cyk7XG4gICAgICB9KTtcbiAgICAgIC8vIFdlIG5ldmVyIGNhcmUgYWJvdXQgdGhlIGRpcmV0aXZlIGl0c2VsZiwganVzdCBpdHMgaW5wdXRzLlxuICAgICAgaWYgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gYXN0KSB7XG4gICAgICAgIHBhdGgucG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICB0ZW1wbGF0ZVZpc2l0QWxsKHZpc2l0b3IsIGFzdCk7XG5cbiAgcmV0dXJuIG5ldyBBc3RQYXRoPFRlbXBsYXRlQXN0PihwYXRoLCBwb3NpdGlvbik7XG59XG5cbi8qKlxuICogRmluZCB0aGUgdGlnaHRlc3Qgbm9kZSBhdCB0aGUgc3BlY2lmaWVkIGBwb3NpdGlvbmAgZnJvbSB0aGUgQVNUIGBub2Rlc2AsIGFuZFxuICogcmV0dXJuIHRoZSBwYXRoIHRvIHRoZSBub2RlLlxuICogQHBhcmFtIG5vZGVzIEhUTUwgQVNUIG5vZGVzXG4gKiBAcGFyYW0gcG9zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdGhUb05vZGVBdFBvc2l0aW9uKG5vZGVzOiBOb2RlW10sIHBvc2l0aW9uOiBudW1iZXIpOiBIdG1sQXN0UGF0aCB7XG4gIGNvbnN0IHBhdGg6IE5vZGVbXSA9IFtdO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IGNsYXNzIGV4dGVuZHMgUmVjdXJzaXZlVmlzaXRvciB7XG4gICAgdmlzaXQoYXN0OiBOb2RlKSB7XG4gICAgICBjb25zdCBzcGFuID0gc3Bhbk9mKGFzdCk7XG4gICAgICBpZiAoaW5TcGFuKHBvc2l0aW9uLCBzcGFuKSkge1xuICAgICAgICBwYXRoLnB1c2goYXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybmluZyBhIHRydXRoeSB2YWx1ZSBoZXJlIHdpbGwgc2tpcCBhbGwgY2hpbGRyZW4gYW5kIHRlcm1pbmF0ZVxuICAgICAgICAvLyB0aGUgdmlzaXQuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgdmlzaXRBbGwodmlzaXRvciwgbm9kZXMpO1xuICByZXR1cm4gbmV3IEFzdFBhdGg8Tm9kZT4ocGF0aCwgcG9zaXRpb24pO1xufVxuXG5cbi8qKlxuICogSW52ZXJ0cyBhbiBvYmplY3QncyBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnRNYXAob2JqOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30pOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30ge1xuICBjb25zdCByZXN1bHQ6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuICAgIGNvbnN0IHYgPSBvYmpbbmFtZV07XG4gICAgcmVzdWx0W3ZdID0gbmFtZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKlxuICogRmluZHMgdGhlIGRpcmVjdGl2ZSBtZW1iZXIgcHJvdmlkaW5nIGEgdGVtcGxhdGUgb3V0cHV0IGJpbmRpbmcsIGlmIG9uZSBleGlzdHMuXG4gKiBAcGFyYW0gaW5mbyBhZ2dyZWdhdGUgdGVtcGxhdGUgQVNUIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0gcGF0aCBuYXJyb3dpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRPdXRwdXRCaW5kaW5nKFxuICAgIGJpbmRpbmc6IEJvdW5kRXZlbnRBc3QsIHBhdGg6IFRlbXBsYXRlQXN0UGF0aCwgcXVlcnk6IFN5bWJvbFF1ZXJ5KTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gIGNvbnN0IGVsZW1lbnQgPSBwYXRoLmZpcnN0KEVsZW1lbnRBc3QpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgZGlyZWN0aXZlIG9mIGVsZW1lbnQuZGlyZWN0aXZlcykge1xuICAgICAgY29uc3QgaW52ZXJ0ZWRPdXRwdXRzID0gaW52ZXJ0TWFwKGRpcmVjdGl2ZS5kaXJlY3RpdmUub3V0cHV0cyk7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBpbnZlcnRlZE91dHB1dHNbYmluZGluZy5uYW1lXTtcbiAgICAgIGlmIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NTeW1ib2wgPSBxdWVyeS5nZXRUeXBlU3ltYm9sKGRpcmVjdGl2ZS5kaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICBpZiAoY2xhc3NTeW1ib2wpIHtcbiAgICAgICAgICByZXR1cm4gY2xhc3NTeW1ib2wubWVtYmVycygpLmdldChmaWVsZE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=