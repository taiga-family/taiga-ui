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
        define("@angular/language-service/src/expression_diagnostics", ["require", "exports", "tslib", "@angular/compiler", "@angular/language-service/src/diagnostic_messages", "@angular/language-service/src/expression_type", "@angular/language-service/src/symbols", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var diagnostic_messages_1 = require("@angular/language-service/src/diagnostic_messages");
    var expression_type_1 = require("@angular/language-service/src/expression_type");
    var symbols_1 = require("@angular/language-service/src/symbols");
    var utils_1 = require("@angular/language-service/src/utils");
    function getTemplateExpressionDiagnostics(info) {
        var visitor = new ExpressionDiagnosticsVisitor(info, function (path) { return getExpressionScope(info, path); });
        compiler_1.templateVisitAll(visitor, info.templateAst);
        return visitor.diagnostics;
    }
    exports.getTemplateExpressionDiagnostics = getTemplateExpressionDiagnostics;
    function getReferences(info) {
        var result = [];
        function processReferences(references) {
            var e_1, _a;
            var _loop_1 = function (reference) {
                var type = undefined;
                if (reference.value) {
                    type = info.query.getTypeSymbol(compiler_1.tokenReference(reference.value));
                }
                result.push({
                    name: reference.name,
                    kind: 'reference',
                    type: type || info.query.getBuiltinType(symbols_1.BuiltinType.Any),
                    get definition() {
                        return getDefinitionOf(info, reference);
                    }
                });
            };
            try {
                for (var references_1 = tslib_1.__values(references), references_1_1 = references_1.next(); !references_1_1.done; references_1_1 = references_1.next()) {
                    var reference = references_1_1.value;
                    _loop_1(reference);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (references_1_1 && !references_1_1.done && (_a = references_1.return)) _a.call(references_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visitEmbeddedTemplate = function (ast, context) {
                _super.prototype.visitEmbeddedTemplate.call(this, ast, context);
                processReferences(ast.references);
            };
            class_1.prototype.visitElement = function (ast, context) {
                _super.prototype.visitElement.call(this, ast, context);
                processReferences(ast.references);
            };
            return class_1;
        }(compiler_1.RecursiveTemplateAstVisitor));
        compiler_1.templateVisitAll(visitor, info.templateAst);
        return result;
    }
    function getDefinitionOf(info, ast) {
        if (info.fileName) {
            var templateOffset = info.offset;
            return [{
                    fileName: info.fileName,
                    span: {
                        start: ast.sourceSpan.start.offset + templateOffset,
                        end: ast.sourceSpan.end.offset + templateOffset
                    }
                }];
        }
    }
    /**
     * Resolve all variable declarations in a template by traversing the specified
     * `path`.
     * @param info
     * @param path template AST path
     */
    function getVarDeclarations(info, path) {
        var e_2, _a;
        var results = [];
        for (var current = path.head; current; current = path.childOf(current)) {
            if (!(current instanceof compiler_1.EmbeddedTemplateAst)) {
                continue;
            }
            var _loop_2 = function (variable) {
                var symbol = getVariableTypeFromDirectiveContext(variable.value, info.query, current);
                var kind = info.query.getTypeKind(symbol);
                if (kind === symbols_1.BuiltinType.Any || kind === symbols_1.BuiltinType.Unbound) {
                    // For special cases such as ngFor and ngIf, the any type is not very useful.
                    // We can do better by resolving the binding value.
                    var symbolsInScope = info.query.mergeSymbolTable([
                        info.members,
                        // Since we are traversing the AST path from head to tail, any variables
                        // that have been declared so far are also in scope.
                        info.query.createSymbolTable(results),
                    ]);
                    symbol = refinedVariableType(variable.value, symbolsInScope, info, current);
                }
                results.push({
                    name: variable.name,
                    kind: 'variable',
                    type: symbol,
                    get definition() {
                        return getDefinitionOf(info, variable);
                    },
                });
            };
            try {
                for (var _b = (e_2 = void 0, tslib_1.__values(current.variables)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var variable = _c.value;
                    _loop_2(variable);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return results;
    }
    /**
     * Resolve the type for the variable in `templateElement` by finding the structural
     * directive which has the context member. Returns any when not found.
     * @param value variable value name
     * @param query type symbol query
     * @param templateElement
     */
    function getVariableTypeFromDirectiveContext(value, query, templateElement) {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(templateElement.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                var directive = _c.value.directive;
                var context = query.getTemplateContext(directive.type.reference);
                if (context) {
                    var member = context.get(value);
                    if (member && member.type) {
                        return member.type;
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return query.getBuiltinType(symbols_1.BuiltinType.Any);
    }
    /**
     * Resolve a more specific type for the variable in `templateElement` by inspecting
     * all variables that are in scope in the `mergedTable`. This function is a special
     * case for `ngFor` and `ngIf`. If resolution fails, return the `any` type.
     * @param value variable value name
     * @param mergedTable symbol table for all variables in scope
     * @param info available template information
     * @param templateElement
     */
    function refinedVariableType(value, mergedTable, info, templateElement) {
        if (value === '$implicit') {
            // Special case: ngFor directive
            var ngForDirective = templateElement.directives.find(function (d) {
                var name = compiler_1.identifierName(d.directive.type);
                return name == 'NgFor' || name == 'NgForOf';
            });
            if (ngForDirective) {
                var ngForOfBinding = ngForDirective.inputs.find(function (i) { return i.directiveName == 'ngForOf'; });
                if (ngForOfBinding) {
                    // Check if there is a known type for the ngFor binding.
                    var bindingType = new expression_type_1.AstType(mergedTable, info.query, {}, info.source).getType(ngForOfBinding.value);
                    if (bindingType) {
                        var result = info.query.getElementType(bindingType);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
        if (value === 'ngIf' || value === '$implicit') {
            var ngIfDirective = templateElement.directives.find(function (d) { return compiler_1.identifierName(d.directive.type) === 'NgIf'; });
            if (ngIfDirective) {
                // Special case: ngIf directive. The NgIf structural directive owns a template context with
                // "$implicit" and "ngIf" members. These properties are typed as generics. Until the language
                // service uses an Ivy and TypecheckBlock backend, we cannot bind these values to a concrete
                // type without manual inference. To get the concrete type, look up the type of the "ngIf"
                // import on the NgIf directive bound to the template.
                //
                // See @angular/common/ng_if.ts for more information.
                var ngIfBinding = ngIfDirective.inputs.find(function (i) { return i.directiveName === 'ngIf'; });
                if (ngIfBinding) {
                    // Check if there is a known type bound to the ngIf input.
                    var bindingType = new expression_type_1.AstType(mergedTable, info.query, {}, info.source).getType(ngIfBinding.value);
                    if (bindingType) {
                        return bindingType;
                    }
                }
            }
        }
        // We can't do better, return any
        return info.query.getBuiltinType(symbols_1.BuiltinType.Any);
    }
    function getEventDeclaration(info, path) {
        var event = path.tail;
        if (!(event instanceof compiler_1.BoundEventAst)) {
            // No event available in this context.
            return;
        }
        var genericEvent = {
            name: '$event',
            kind: 'variable',
            type: info.query.getBuiltinType(symbols_1.BuiltinType.Any),
        };
        var outputSymbol = utils_1.findOutputBinding(event, path, info.query);
        if (!outputSymbol) {
            // The `$event` variable doesn't belong to an output, so its type can't be refined.
            // TODO: type `$event` variables in bindings to DOM events.
            return genericEvent;
        }
        // The raw event type is wrapped in a generic, like EventEmitter<T> or Observable<T>.
        var ta = outputSymbol.typeArguments();
        if (!ta || ta.length !== 1)
            return genericEvent;
        var eventType = ta[0];
        return tslib_1.__assign(tslib_1.__assign({}, genericEvent), { type: eventType });
    }
    /**
     * Returns the symbols available in a particular scope of a template.
     * @param info parsed template information
     * @param path path of template nodes narrowing to the context the expression scope should be
     * derived for.
     */
    function getExpressionScope(info, path) {
        var result = info.members;
        var references = getReferences(info);
        var variables = getVarDeclarations(info, path);
        var event = getEventDeclaration(info, path);
        if (references.length || variables.length || event) {
            var referenceTable = info.query.createSymbolTable(references);
            var variableTable = info.query.createSymbolTable(variables);
            var eventsTable = info.query.createSymbolTable(event ? [event] : []);
            result = info.query.mergeSymbolTable([result, referenceTable, variableTable, eventsTable]);
        }
        return result;
    }
    exports.getExpressionScope = getExpressionScope;
    var ExpressionDiagnosticsVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(ExpressionDiagnosticsVisitor, _super);
        function ExpressionDiagnosticsVisitor(info, getExpressionScope) {
            var _this = _super.call(this) || this;
            _this.info = info;
            _this.getExpressionScope = getExpressionScope;
            _this.diagnostics = [];
            _this.path = new compiler_1.AstPath([]);
            return _this;
        }
        ExpressionDiagnosticsVisitor.prototype.visitDirective = function (ast, context) {
            // Override the default child visitor to ignore the host properties of a directive.
            if (ast.inputs && ast.inputs.length) {
                compiler_1.templateVisitAll(this, ast.inputs, context);
            }
        };
        ExpressionDiagnosticsVisitor.prototype.visitBoundText = function (ast) {
            this.push(ast);
            this.diagnoseExpression(ast.value, ast.sourceSpan.start.offset, false);
            this.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.visitDirectiveProperty = function (ast) {
            this.push(ast);
            this.diagnoseExpression(ast.value, this.attributeValueLocation(ast), false);
            this.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.visitElementProperty = function (ast) {
            this.push(ast);
            this.diagnoseExpression(ast.value, this.attributeValueLocation(ast), false);
            this.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.visitEvent = function (ast) {
            this.push(ast);
            this.diagnoseExpression(ast.handler, this.attributeValueLocation(ast), true);
            this.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.visitVariable = function (ast) {
            var directive = this.directiveSummary;
            if (directive && ast.value) {
                var context = this.info.query.getTemplateContext(directive.type.reference);
                if (context && !context.has(ast.value)) {
                    var missingMember = ast.value === '$implicit' ? 'an implicit value' : "a member called '" + ast.value + "'";
                    var span = this.absSpan(spanOf(ast.sourceSpan));
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(span, diagnostic_messages_1.Diagnostic.template_context_missing_member, directive.type.reference.name, missingMember));
                }
            }
        };
        ExpressionDiagnosticsVisitor.prototype.visitElement = function (ast, context) {
            this.push(ast);
            _super.prototype.visitElement.call(this, ast, context);
            this.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
            var previousDirectiveSummary = this.directiveSummary;
            this.push(ast);
            // Find directive that references this template
            this.directiveSummary =
                ast.directives.map(function (d) { return d.directive; }).find(function (d) { return hasTemplateReference(d.type); });
            // Process children
            _super.prototype.visitEmbeddedTemplate.call(this, ast, context);
            this.pop();
            this.directiveSummary = previousDirectiveSummary;
        };
        ExpressionDiagnosticsVisitor.prototype.attributeValueLocation = function (ast) {
            var path = utils_1.getPathToNodeAtPosition(this.info.htmlAst, ast.sourceSpan.start.offset);
            var last = path.tail;
            if (last instanceof compiler_1.Attribute && last.valueSpan) {
                return last.valueSpan.start.offset;
            }
            return ast.sourceSpan.start.offset;
        };
        ExpressionDiagnosticsVisitor.prototype.diagnoseExpression = function (ast, offset, inEvent) {
            var e_4, _a;
            var scope = this.getExpressionScope(this.path, inEvent);
            var analyzer = new expression_type_1.AstType(scope, this.info.query, { inEvent: inEvent }, this.info.source);
            try {
                for (var _b = tslib_1.__values(analyzer.getDiagnostics(ast)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var diagnostic = _c.value;
                    diagnostic.span = this.absSpan(diagnostic.span, offset);
                    this.diagnostics.push(diagnostic);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        ExpressionDiagnosticsVisitor.prototype.push = function (ast) {
            this.path.push(ast);
        };
        ExpressionDiagnosticsVisitor.prototype.pop = function () {
            this.path.pop();
        };
        ExpressionDiagnosticsVisitor.prototype.absSpan = function (span, additionalOffset) {
            if (additionalOffset === void 0) { additionalOffset = 0; }
            return {
                start: span.start + this.info.offset + additionalOffset,
                end: span.end + this.info.offset + additionalOffset,
            };
        };
        return ExpressionDiagnosticsVisitor;
    }(compiler_1.RecursiveTemplateAstVisitor));
    function hasTemplateReference(type) {
        var e_5, _a;
        if (type.diDeps) {
            try {
                for (var _b = tslib_1.__values(type.diDeps), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var diDep = _c.value;
                    if (diDep.token && diDep.token.identifier &&
                        compiler_1.identifierName(diDep.token.identifier) == 'TemplateRef')
                        return true;
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
        return false;
    }
    function spanOf(sourceSpan) {
        return { start: sourceSpan.start.offset, end: sourceSpan.end.offset };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbl9kaWFnbm9zdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2Uvc3JjL2V4cHJlc3Npb25fZGlhZ25vc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOENBQWlZO0lBRWpZLHlGQUFtRTtJQUNuRSxpRkFBMEM7SUFDMUMsaUVBQTZHO0lBRTdHLDZEQUFtRTtJQUVuRSxTQUFnQixnQ0FBZ0MsQ0FBQyxJQUErQjtRQUM5RSxJQUFNLE9BQU8sR0FBRyxJQUFJLDRCQUE0QixDQUM1QyxJQUFJLEVBQUUsVUFBQyxJQUFxQixJQUFLLE9BQUEsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDckUsMkJBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDN0IsQ0FBQztJQUxELDRFQUtDO0lBRUQsU0FBUyxhQUFhLENBQUMsSUFBK0I7UUFDcEQsSUFBTSxNQUFNLEdBQXdCLEVBQUUsQ0FBQztRQUV2QyxTQUFTLGlCQUFpQixDQUFDLFVBQTBCOztvQ0FDeEMsU0FBUztnQkFDbEIsSUFBSSxJQUFJLEdBQXFCLFNBQVMsQ0FBQztnQkFDdkMsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMseUJBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7b0JBQ3BCLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FB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TSxFQUFDLENBQUM7SUFDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBU1QsIEFzdFBhdGgsIEF0dHJpYnV0ZSwgQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCwgQm91bmRFbGVtZW50UHJvcGVydHlBc3QsIEJvdW5kRXZlbnRBc3QsIEJvdW5kVGV4dEFzdCwgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVUeXBlTWV0YWRhdGEsIERpcmVjdGl2ZUFzdCwgRWxlbWVudEFzdCwgRW1iZWRkZWRUZW1wbGF0ZUFzdCwgaWRlbnRpZmllck5hbWUsIFBhcnNlU291cmNlU3BhbiwgUmVjdXJzaXZlVGVtcGxhdGVBc3RWaXNpdG9yLCBSZWZlcmVuY2VBc3QsIFRlbXBsYXRlQXN0LCBUZW1wbGF0ZUFzdFBhdGgsIHRlbXBsYXRlVmlzaXRBbGwsIHRva2VuUmVmZXJlbmNlLCBWYXJpYWJsZUFzdH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge2NyZWF0ZURpYWdub3N0aWMsIERpYWdub3N0aWN9IGZyb20gJy4vZGlhZ25vc3RpY19tZXNzYWdlcyc7XG5pbXBvcnQge0FzdFR5cGV9IGZyb20gJy4vZXhwcmVzc2lvbl90eXBlJztcbmltcG9ydCB7QnVpbHRpblR5cGUsIERlZmluaXRpb24sIFNwYW4sIFN5bWJvbCwgU3ltYm9sRGVjbGFyYXRpb24sIFN5bWJvbFF1ZXJ5LCBTeW1ib2xUYWJsZX0gZnJvbSAnLi9zeW1ib2xzJztcbmltcG9ydCAqIGFzIG5nIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtmaW5kT3V0cHV0QmluZGluZywgZ2V0UGF0aFRvTm9kZUF0UG9zaXRpb259IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGVFeHByZXNzaW9uRGlhZ25vc3RpY3MoaW5mbzogbmcuRGlhZ25vc3RpY1RlbXBsYXRlSW5mbyk6IG5nLkRpYWdub3N0aWNbXSB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgRXhwcmVzc2lvbkRpYWdub3N0aWNzVmlzaXRvcihcbiAgICAgIGluZm8sIChwYXRoOiBUZW1wbGF0ZUFzdFBhdGgpID0+IGdldEV4cHJlc3Npb25TY29wZShpbmZvLCBwYXRoKSk7XG4gIHRlbXBsYXRlVmlzaXRBbGwodmlzaXRvciwgaW5mby50ZW1wbGF0ZUFzdCk7XG4gIHJldHVybiB2aXNpdG9yLmRpYWdub3N0aWNzO1xufVxuXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VzKGluZm86IG5nLkRpYWdub3N0aWNUZW1wbGF0ZUluZm8pOiBTeW1ib2xEZWNsYXJhdGlvbltdIHtcbiAgY29uc3QgcmVzdWx0OiBTeW1ib2xEZWNsYXJhdGlvbltdID0gW107XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JlZmVyZW5jZXMocmVmZXJlbmNlczogUmVmZXJlbmNlQXN0W10pIHtcbiAgICBmb3IgKGNvbnN0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICBsZXQgdHlwZTogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChyZWZlcmVuY2UudmFsdWUpIHtcbiAgICAgICAgdHlwZSA9IGluZm8ucXVlcnkuZ2V0VHlwZVN5bWJvbCh0b2tlblJlZmVyZW5jZShyZWZlcmVuY2UudmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbmFtZTogcmVmZXJlbmNlLm5hbWUsXG4gICAgICAgIGtpbmQ6ICdyZWZlcmVuY2UnLFxuICAgICAgICB0eXBlOiB0eXBlIHx8IGluZm8ucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KSxcbiAgICAgICAgZ2V0IGRlZmluaXRpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdldERlZmluaXRpb25PZihpbmZvLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB2aXNpdG9yID0gbmV3IGNsYXNzIGV4dGVuZHMgUmVjdXJzaXZlVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgc3VwZXIudmlzaXRFbWJlZGRlZFRlbXBsYXRlKGFzdCwgY29udGV4dCk7XG4gICAgICBwcm9jZXNzUmVmZXJlbmNlcyhhc3QucmVmZXJlbmNlcyk7XG4gICAgfVxuICAgIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICBzdXBlci52aXNpdEVsZW1lbnQoYXN0LCBjb250ZXh0KTtcbiAgICAgIHByb2Nlc3NSZWZlcmVuY2VzKGFzdC5yZWZlcmVuY2VzKTtcbiAgICB9XG4gIH07XG5cbiAgdGVtcGxhdGVWaXNpdEFsbCh2aXNpdG9yLCBpbmZvLnRlbXBsYXRlQXN0KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uT2YoaW5mbzogbmcuRGlhZ25vc3RpY1RlbXBsYXRlSW5mbywgYXN0OiBUZW1wbGF0ZUFzdCk6IERlZmluaXRpb258dW5kZWZpbmVkIHtcbiAgaWYgKGluZm8uZmlsZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZU9mZnNldCA9IGluZm8ub2Zmc2V0O1xuICAgIHJldHVybiBbe1xuICAgICAgZmlsZU5hbWU6IGluZm8uZmlsZU5hbWUsXG4gICAgICBzcGFuOiB7XG4gICAgICAgIHN0YXJ0OiBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQgKyB0ZW1wbGF0ZU9mZnNldCxcbiAgICAgICAgZW5kOiBhc3Quc291cmNlU3Bhbi5lbmQub2Zmc2V0ICsgdGVtcGxhdGVPZmZzZXRcbiAgICAgIH1cbiAgICB9XTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgYWxsIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBpbiBhIHRlbXBsYXRlIGJ5IHRyYXZlcnNpbmcgdGhlIHNwZWNpZmllZFxuICogYHBhdGhgLlxuICogQHBhcmFtIGluZm9cbiAqIEBwYXJhbSBwYXRoIHRlbXBsYXRlIEFTVCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGdldFZhckRlY2xhcmF0aW9ucyhcbiAgICBpbmZvOiBuZy5EaWFnbm9zdGljVGVtcGxhdGVJbmZvLCBwYXRoOiBUZW1wbGF0ZUFzdFBhdGgpOiBTeW1ib2xEZWNsYXJhdGlvbltdIHtcbiAgY29uc3QgcmVzdWx0czogU3ltYm9sRGVjbGFyYXRpb25bXSA9IFtdO1xuICBmb3IgKGxldCBjdXJyZW50ID0gcGF0aC5oZWFkOyBjdXJyZW50OyBjdXJyZW50ID0gcGF0aC5jaGlsZE9mKGN1cnJlbnQpKSB7XG4gICAgaWYgKCEoY3VycmVudCBpbnN0YW5jZW9mIEVtYmVkZGVkVGVtcGxhdGVBc3QpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiBjdXJyZW50LnZhcmlhYmxlcykge1xuICAgICAgbGV0IHN5bWJvbCA9IGdldFZhcmlhYmxlVHlwZUZyb21EaXJlY3RpdmVDb250ZXh0KHZhcmlhYmxlLnZhbHVlLCBpbmZvLnF1ZXJ5LCBjdXJyZW50KTtcblxuICAgICAgY29uc3Qga2luZCA9IGluZm8ucXVlcnkuZ2V0VHlwZUtpbmQoc3ltYm9sKTtcbiAgICAgIGlmIChraW5kID09PSBCdWlsdGluVHlwZS5BbnkgfHwga2luZCA9PT0gQnVpbHRpblR5cGUuVW5ib3VuZCkge1xuICAgICAgICAvLyBGb3Igc3BlY2lhbCBjYXNlcyBzdWNoIGFzIG5nRm9yIGFuZCBuZ0lmLCB0aGUgYW55IHR5cGUgaXMgbm90IHZlcnkgdXNlZnVsLlxuICAgICAgICAvLyBXZSBjYW4gZG8gYmV0dGVyIGJ5IHJlc29sdmluZyB0aGUgYmluZGluZyB2YWx1ZS5cbiAgICAgICAgY29uc3Qgc3ltYm9sc0luU2NvcGUgPSBpbmZvLnF1ZXJ5Lm1lcmdlU3ltYm9sVGFibGUoW1xuICAgICAgICAgIGluZm8ubWVtYmVycyxcbiAgICAgICAgICAvLyBTaW5jZSB3ZSBhcmUgdHJhdmVyc2luZyB0aGUgQVNUIHBhdGggZnJvbSBoZWFkIHRvIHRhaWwsIGFueSB2YXJpYWJsZXNcbiAgICAgICAgICAvLyB0aGF0IGhhdmUgYmVlbiBkZWNsYXJlZCBzbyBmYXIgYXJlIGFsc28gaW4gc2NvcGUuXG4gICAgICAgICAgaW5mby5xdWVyeS5jcmVhdGVTeW1ib2xUYWJsZShyZXN1bHRzKSxcbiAgICAgICAgXSk7XG4gICAgICAgIHN5bWJvbCA9IHJlZmluZWRWYXJpYWJsZVR5cGUodmFyaWFibGUudmFsdWUsIHN5bWJvbHNJblNjb3BlLCBpbmZvLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIG5hbWU6IHZhcmlhYmxlLm5hbWUsXG4gICAgICAgIGtpbmQ6ICd2YXJpYWJsZScsXG4gICAgICAgIHR5cGU6IHN5bWJvbCxcbiAgICAgICAgZ2V0IGRlZmluaXRpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdldERlZmluaXRpb25PZihpbmZvLCB2YXJpYWJsZSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgdHlwZSBmb3IgdGhlIHZhcmlhYmxlIGluIGB0ZW1wbGF0ZUVsZW1lbnRgIGJ5IGZpbmRpbmcgdGhlIHN0cnVjdHVyYWxcbiAqIGRpcmVjdGl2ZSB3aGljaCBoYXMgdGhlIGNvbnRleHQgbWVtYmVyLiBSZXR1cm5zIGFueSB3aGVuIG5vdCBmb3VuZC5cbiAqIEBwYXJhbSB2YWx1ZSB2YXJpYWJsZSB2YWx1ZSBuYW1lXG4gKiBAcGFyYW0gcXVlcnkgdHlwZSBzeW1ib2wgcXVlcnlcbiAqIEBwYXJhbSB0ZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0VmFyaWFibGVUeXBlRnJvbURpcmVjdGl2ZUNvbnRleHQoXG4gICAgdmFsdWU6IHN0cmluZywgcXVlcnk6IFN5bWJvbFF1ZXJ5LCB0ZW1wbGF0ZUVsZW1lbnQ6IEVtYmVkZGVkVGVtcGxhdGVBc3QpOiBTeW1ib2wge1xuICBmb3IgKGNvbnN0IHtkaXJlY3RpdmV9IG9mIHRlbXBsYXRlRWxlbWVudC5kaXJlY3RpdmVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHF1ZXJ5LmdldFRlbXBsYXRlQ29udGV4dChkaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UpO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBjb25zdCBtZW1iZXIgPSBjb250ZXh0LmdldCh2YWx1ZSk7XG4gICAgICBpZiAobWVtYmVyICYmIG1lbWJlci50eXBlKSB7XG4gICAgICAgIHJldHVybiBtZW1iZXIudHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgbW9yZSBzcGVjaWZpYyB0eXBlIGZvciB0aGUgdmFyaWFibGUgaW4gYHRlbXBsYXRlRWxlbWVudGAgYnkgaW5zcGVjdGluZ1xuICogYWxsIHZhcmlhYmxlcyB0aGF0IGFyZSBpbiBzY29wZSBpbiB0aGUgYG1lcmdlZFRhYmxlYC4gVGhpcyBmdW5jdGlvbiBpcyBhIHNwZWNpYWxcbiAqIGNhc2UgZm9yIGBuZ0ZvcmAgYW5kIGBuZ0lmYC4gSWYgcmVzb2x1dGlvbiBmYWlscywgcmV0dXJuIHRoZSBgYW55YCB0eXBlLlxuICogQHBhcmFtIHZhbHVlIHZhcmlhYmxlIHZhbHVlIG5hbWVcbiAqIEBwYXJhbSBtZXJnZWRUYWJsZSBzeW1ib2wgdGFibGUgZm9yIGFsbCB2YXJpYWJsZXMgaW4gc2NvcGVcbiAqIEBwYXJhbSBpbmZvIGF2YWlsYWJsZSB0ZW1wbGF0ZSBpbmZvcm1hdGlvblxuICogQHBhcmFtIHRlbXBsYXRlRWxlbWVudFxuICovXG5mdW5jdGlvbiByZWZpbmVkVmFyaWFibGVUeXBlKFxuICAgIHZhbHVlOiBzdHJpbmcsIG1lcmdlZFRhYmxlOiBTeW1ib2xUYWJsZSwgaW5mbzogbmcuRGlhZ25vc3RpY1RlbXBsYXRlSW5mbyxcbiAgICB0ZW1wbGF0ZUVsZW1lbnQ6IEVtYmVkZGVkVGVtcGxhdGVBc3QpOiBTeW1ib2wge1xuICBpZiAodmFsdWUgPT09ICckaW1wbGljaXQnKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBuZ0ZvciBkaXJlY3RpdmVcbiAgICBjb25zdCBuZ0ZvckRpcmVjdGl2ZSA9IHRlbXBsYXRlRWxlbWVudC5kaXJlY3RpdmVzLmZpbmQoZCA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gaWRlbnRpZmllck5hbWUoZC5kaXJlY3RpdmUudHlwZSk7XG4gICAgICByZXR1cm4gbmFtZSA9PSAnTmdGb3InIHx8IG5hbWUgPT0gJ05nRm9yT2YnO1xuICAgIH0pO1xuICAgIGlmIChuZ0ZvckRpcmVjdGl2ZSkge1xuICAgICAgY29uc3QgbmdGb3JPZkJpbmRpbmcgPSBuZ0ZvckRpcmVjdGl2ZS5pbnB1dHMuZmluZChpID0+IGkuZGlyZWN0aXZlTmFtZSA9PSAnbmdGb3JPZicpO1xuICAgICAgaWYgKG5nRm9yT2ZCaW5kaW5nKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEga25vd24gdHlwZSBmb3IgdGhlIG5nRm9yIGJpbmRpbmcuXG4gICAgICAgIGNvbnN0IGJpbmRpbmdUeXBlID1cbiAgICAgICAgICAgIG5ldyBBc3RUeXBlKG1lcmdlZFRhYmxlLCBpbmZvLnF1ZXJ5LCB7fSwgaW5mby5zb3VyY2UpLmdldFR5cGUobmdGb3JPZkJpbmRpbmcudmFsdWUpO1xuICAgICAgICBpZiAoYmluZGluZ1R5cGUpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBpbmZvLnF1ZXJ5LmdldEVsZW1lbnRUeXBlKGJpbmRpbmdUeXBlKTtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ25nSWYnIHx8IHZhbHVlID09PSAnJGltcGxpY2l0Jykge1xuICAgIGNvbnN0IG5nSWZEaXJlY3RpdmUgPVxuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuZGlyZWN0aXZlcy5maW5kKGQgPT4gaWRlbnRpZmllck5hbWUoZC5kaXJlY3RpdmUudHlwZSkgPT09ICdOZ0lmJyk7XG4gICAgaWYgKG5nSWZEaXJlY3RpdmUpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogbmdJZiBkaXJlY3RpdmUuIFRoZSBOZ0lmIHN0cnVjdHVyYWwgZGlyZWN0aXZlIG93bnMgYSB0ZW1wbGF0ZSBjb250ZXh0IHdpdGhcbiAgICAgIC8vIFwiJGltcGxpY2l0XCIgYW5kIFwibmdJZlwiIG1lbWJlcnMuIFRoZXNlIHByb3BlcnRpZXMgYXJlIHR5cGVkIGFzIGdlbmVyaWNzLiBVbnRpbCB0aGUgbGFuZ3VhZ2VcbiAgICAgIC8vIHNlcnZpY2UgdXNlcyBhbiBJdnkgYW5kIFR5cGVjaGVja0Jsb2NrIGJhY2tlbmQsIHdlIGNhbm5vdCBiaW5kIHRoZXNlIHZhbHVlcyB0byBhIGNvbmNyZXRlXG4gICAgICAvLyB0eXBlIHdpdGhvdXQgbWFudWFsIGluZmVyZW5jZS4gVG8gZ2V0IHRoZSBjb25jcmV0ZSB0eXBlLCBsb29rIHVwIHRoZSB0eXBlIG9mIHRoZSBcIm5nSWZcIlxuICAgICAgLy8gaW1wb3J0IG9uIHRoZSBOZ0lmIGRpcmVjdGl2ZSBib3VuZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICAvL1xuICAgICAgLy8gU2VlIEBhbmd1bGFyL2NvbW1vbi9uZ19pZi50cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgIGNvbnN0IG5nSWZCaW5kaW5nID0gbmdJZkRpcmVjdGl2ZS5pbnB1dHMuZmluZChpID0+IGkuZGlyZWN0aXZlTmFtZSA9PT0gJ25nSWYnKTtcbiAgICAgIGlmIChuZ0lmQmluZGluZykge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGtub3duIHR5cGUgYm91bmQgdG8gdGhlIG5nSWYgaW5wdXQuXG4gICAgICAgIGNvbnN0IGJpbmRpbmdUeXBlID1cbiAgICAgICAgICAgIG5ldyBBc3RUeXBlKG1lcmdlZFRhYmxlLCBpbmZvLnF1ZXJ5LCB7fSwgaW5mby5zb3VyY2UpLmdldFR5cGUobmdJZkJpbmRpbmcudmFsdWUpO1xuICAgICAgICBpZiAoYmluZGluZ1R5cGUpIHtcbiAgICAgICAgICByZXR1cm4gYmluZGluZ1R5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBXZSBjYW4ndCBkbyBiZXR0ZXIsIHJldHVybiBhbnlcbiAgcmV0dXJuIGluZm8ucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnREZWNsYXJhdGlvbihcbiAgICBpbmZvOiBuZy5EaWFnbm9zdGljVGVtcGxhdGVJbmZvLCBwYXRoOiBUZW1wbGF0ZUFzdFBhdGgpOiBTeW1ib2xEZWNsYXJhdGlvbnx1bmRlZmluZWQge1xuICBjb25zdCBldmVudCA9IHBhdGgudGFpbDtcbiAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBCb3VuZEV2ZW50QXN0KSkge1xuICAgIC8vIE5vIGV2ZW50IGF2YWlsYWJsZSBpbiB0aGlzIGNvbnRleHQuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZ2VuZXJpY0V2ZW50OiBTeW1ib2xEZWNsYXJhdGlvbiA9IHtcbiAgICBuYW1lOiAnJGV2ZW50JyxcbiAgICBraW5kOiAndmFyaWFibGUnLFxuICAgIHR5cGU6IGluZm8ucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KSxcbiAgfTtcblxuICBjb25zdCBvdXRwdXRTeW1ib2wgPSBmaW5kT3V0cHV0QmluZGluZyhldmVudCwgcGF0aCwgaW5mby5xdWVyeSk7XG4gIGlmICghb3V0cHV0U3ltYm9sKSB7XG4gICAgLy8gVGhlIGAkZXZlbnRgIHZhcmlhYmxlIGRvZXNuJ3QgYmVsb25nIHRvIGFuIG91dHB1dCwgc28gaXRzIHR5cGUgY2FuJ3QgYmUgcmVmaW5lZC5cbiAgICAvLyBUT0RPOiB0eXBlIGAkZXZlbnRgIHZhcmlhYmxlcyBpbiBiaW5kaW5ncyB0byBET00gZXZlbnRzLlxuICAgIHJldHVybiBnZW5lcmljRXZlbnQ7XG4gIH1cblxuICAvLyBUaGUgcmF3IGV2ZW50IHR5cGUgaXMgd3JhcHBlZCBpbiBhIGdlbmVyaWMsIGxpa2UgRXZlbnRFbWl0dGVyPFQ+IG9yIE9ic2VydmFibGU8VD4uXG4gIGNvbnN0IHRhID0gb3V0cHV0U3ltYm9sLnR5cGVBcmd1bWVudHMoKTtcbiAgaWYgKCF0YSB8fCB0YS5sZW5ndGggIT09IDEpIHJldHVybiBnZW5lcmljRXZlbnQ7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IHRhWzBdO1xuXG4gIHJldHVybiB7Li4uZ2VuZXJpY0V2ZW50LCB0eXBlOiBldmVudFR5cGV9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN5bWJvbHMgYXZhaWxhYmxlIGluIGEgcGFydGljdWxhciBzY29wZSBvZiBhIHRlbXBsYXRlLlxuICogQHBhcmFtIGluZm8gcGFyc2VkIHRlbXBsYXRlIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0gcGF0aCBwYXRoIG9mIHRlbXBsYXRlIG5vZGVzIG5hcnJvd2luZyB0byB0aGUgY29udGV4dCB0aGUgZXhwcmVzc2lvbiBzY29wZSBzaG91bGQgYmVcbiAqIGRlcml2ZWQgZm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwcmVzc2lvblNjb3BlKFxuICAgIGluZm86IG5nLkRpYWdub3N0aWNUZW1wbGF0ZUluZm8sIHBhdGg6IFRlbXBsYXRlQXN0UGF0aCk6IFN5bWJvbFRhYmxlIHtcbiAgbGV0IHJlc3VsdCA9IGluZm8ubWVtYmVycztcbiAgY29uc3QgcmVmZXJlbmNlcyA9IGdldFJlZmVyZW5jZXMoaW5mbyk7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IGdldFZhckRlY2xhcmF0aW9ucyhpbmZvLCBwYXRoKTtcbiAgY29uc3QgZXZlbnQgPSBnZXRFdmVudERlY2xhcmF0aW9uKGluZm8sIHBhdGgpO1xuICBpZiAocmVmZXJlbmNlcy5sZW5ndGggfHwgdmFyaWFibGVzLmxlbmd0aCB8fCBldmVudCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZVRhYmxlID0gaW5mby5xdWVyeS5jcmVhdGVTeW1ib2xUYWJsZShyZWZlcmVuY2VzKTtcbiAgICBjb25zdCB2YXJpYWJsZVRhYmxlID0gaW5mby5xdWVyeS5jcmVhdGVTeW1ib2xUYWJsZSh2YXJpYWJsZXMpO1xuICAgIGNvbnN0IGV2ZW50c1RhYmxlID0gaW5mby5xdWVyeS5jcmVhdGVTeW1ib2xUYWJsZShldmVudCA/IFtldmVudF0gOiBbXSk7XG4gICAgcmVzdWx0ID0gaW5mby5xdWVyeS5tZXJnZVN5bWJvbFRhYmxlKFtyZXN1bHQsIHJlZmVyZW5jZVRhYmxlLCB2YXJpYWJsZVRhYmxlLCBldmVudHNUYWJsZV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNsYXNzIEV4cHJlc3Npb25EaWFnbm9zdGljc1Zpc2l0b3IgZXh0ZW5kcyBSZWN1cnNpdmVUZW1wbGF0ZUFzdFZpc2l0b3Ige1xuICBwcml2YXRlIHBhdGg6IFRlbXBsYXRlQXN0UGF0aDtcbiAgcHJpdmF0ZSBkaXJlY3RpdmVTdW1tYXJ5OiBDb21waWxlRGlyZWN0aXZlU3VtbWFyeXx1bmRlZmluZWQ7XG5cbiAgZGlhZ25vc3RpY3M6IG5nLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBpbmZvOiBuZy5EaWFnbm9zdGljVGVtcGxhdGVJbmZvLFxuICAgICAgcHJpdmF0ZSBnZXRFeHByZXNzaW9uU2NvcGU6IChwYXRoOiBUZW1wbGF0ZUFzdFBhdGgsIGluY2x1ZGVFdmVudDogYm9vbGVhbikgPT4gU3ltYm9sVGFibGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGF0aCA9IG5ldyBBc3RQYXRoPFRlbXBsYXRlQXN0PihbXSk7XG4gIH1cblxuICB2aXNpdERpcmVjdGl2ZShhc3Q6IERpcmVjdGl2ZUFzdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBjaGlsZCB2aXNpdG9yIHRvIGlnbm9yZSB0aGUgaG9zdCBwcm9wZXJ0aWVzIG9mIGEgZGlyZWN0aXZlLlxuICAgIGlmIChhc3QuaW5wdXRzICYmIGFzdC5pbnB1dHMubGVuZ3RoKSB7XG4gICAgICB0ZW1wbGF0ZVZpc2l0QWxsKHRoaXMsIGFzdC5pbnB1dHMsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Qm91bmRUZXh0KGFzdDogQm91bmRUZXh0QXN0KTogdm9pZCB7XG4gICAgdGhpcy5wdXNoKGFzdCk7XG4gICAgdGhpcy5kaWFnbm9zZUV4cHJlc3Npb24oYXN0LnZhbHVlLCBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQsIGZhbHNlKTtcbiAgICB0aGlzLnBvcCgpO1xuICB9XG5cbiAgdmlzaXREaXJlY3RpdmVQcm9wZXJ0eShhc3Q6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QpOiB2b2lkIHtcbiAgICB0aGlzLnB1c2goYXN0KTtcbiAgICB0aGlzLmRpYWdub3NlRXhwcmVzc2lvbihhc3QudmFsdWUsIHRoaXMuYXR0cmlidXRlVmFsdWVMb2NhdGlvbihhc3QpLCBmYWxzZSk7XG4gICAgdGhpcy5wb3AoKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudFByb3BlcnR5KGFzdDogQm91bmRFbGVtZW50UHJvcGVydHlBc3QpOiB2b2lkIHtcbiAgICB0aGlzLnB1c2goYXN0KTtcbiAgICB0aGlzLmRpYWdub3NlRXhwcmVzc2lvbihhc3QudmFsdWUsIHRoaXMuYXR0cmlidXRlVmFsdWVMb2NhdGlvbihhc3QpLCBmYWxzZSk7XG4gICAgdGhpcy5wb3AoKTtcbiAgfVxuXG4gIHZpc2l0RXZlbnQoYXN0OiBCb3VuZEV2ZW50QXN0KTogdm9pZCB7XG4gICAgdGhpcy5wdXNoKGFzdCk7XG4gICAgdGhpcy5kaWFnbm9zZUV4cHJlc3Npb24oYXN0LmhhbmRsZXIsIHRoaXMuYXR0cmlidXRlVmFsdWVMb2NhdGlvbihhc3QpLCB0cnVlKTtcbiAgICB0aGlzLnBvcCgpO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZShhc3Q6IFZhcmlhYmxlQXN0KTogdm9pZCB7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5kaXJlY3RpdmVTdW1tYXJ5O1xuICAgIGlmIChkaXJlY3RpdmUgJiYgYXN0LnZhbHVlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5pbmZvLnF1ZXJ5LmdldFRlbXBsYXRlQ29udGV4dChkaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UpITtcbiAgICAgIGlmIChjb250ZXh0ICYmICFjb250ZXh0Lmhhcyhhc3QudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdNZW1iZXIgPVxuICAgICAgICAgICAgYXN0LnZhbHVlID09PSAnJGltcGxpY2l0JyA/ICdhbiBpbXBsaWNpdCB2YWx1ZScgOiBgYSBtZW1iZXIgY2FsbGVkICcke2FzdC52YWx1ZX0nYDtcblxuICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5hYnNTcGFuKHNwYW5PZihhc3Quc291cmNlU3BhbikpO1xuICAgICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICAgIHNwYW4sIERpYWdub3N0aWMudGVtcGxhdGVfY29udGV4dF9taXNzaW5nX21lbWJlciwgZGlyZWN0aXZlLnR5cGUucmVmZXJlbmNlLm5hbWUsXG4gICAgICAgICAgICBtaXNzaW5nTWVtYmVyKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50KGFzdDogRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wdXNoKGFzdCk7XG4gICAgc3VwZXIudmlzaXRFbGVtZW50KGFzdCwgY29udGV4dCk7XG4gICAgdGhpcy5wb3AoKTtcbiAgfVxuXG4gIHZpc2l0RW1iZWRkZWRUZW1wbGF0ZShhc3Q6IEVtYmVkZGVkVGVtcGxhdGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcHJldmlvdXNEaXJlY3RpdmVTdW1tYXJ5ID0gdGhpcy5kaXJlY3RpdmVTdW1tYXJ5O1xuXG4gICAgdGhpcy5wdXNoKGFzdCk7XG5cbiAgICAvLyBGaW5kIGRpcmVjdGl2ZSB0aGF0IHJlZmVyZW5jZXMgdGhpcyB0ZW1wbGF0ZVxuICAgIHRoaXMuZGlyZWN0aXZlU3VtbWFyeSA9XG4gICAgICAgIGFzdC5kaXJlY3RpdmVzLm1hcChkID0+IGQuZGlyZWN0aXZlKS5maW5kKGQgPT4gaGFzVGVtcGxhdGVSZWZlcmVuY2UoZC50eXBlKSkhO1xuXG4gICAgLy8gUHJvY2VzcyBjaGlsZHJlblxuICAgIHN1cGVyLnZpc2l0RW1iZWRkZWRUZW1wbGF0ZShhc3QsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5wb3AoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlU3VtbWFyeSA9IHByZXZpb3VzRGlyZWN0aXZlU3VtbWFyeTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0cmlidXRlVmFsdWVMb2NhdGlvbihhc3Q6IFRlbXBsYXRlQXN0KSB7XG4gICAgY29uc3QgcGF0aCA9IGdldFBhdGhUb05vZGVBdFBvc2l0aW9uKHRoaXMuaW5mby5odG1sQXN0LCBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQpO1xuICAgIGNvbnN0IGxhc3QgPSBwYXRoLnRhaWw7XG4gICAgaWYgKGxhc3QgaW5zdGFuY2VvZiBBdHRyaWJ1dGUgJiYgbGFzdC52YWx1ZVNwYW4pIHtcbiAgICAgIHJldHVybiBsYXN0LnZhbHVlU3Bhbi5zdGFydC5vZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIGRpYWdub3NlRXhwcmVzc2lvbihhc3Q6IEFTVCwgb2Zmc2V0OiBudW1iZXIsIGluRXZlbnQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXMuZ2V0RXhwcmVzc2lvblNjb3BlKHRoaXMucGF0aCwgaW5FdmVudCk7XG4gICAgY29uc3QgYW5hbHl6ZXIgPSBuZXcgQXN0VHlwZShzY29wZSwgdGhpcy5pbmZvLnF1ZXJ5LCB7aW5FdmVudH0sIHRoaXMuaW5mby5zb3VyY2UpO1xuICAgIGZvciAoY29uc3QgZGlhZ25vc3RpYyBvZiBhbmFseXplci5nZXREaWFnbm9zdGljcyhhc3QpKSB7XG4gICAgICBkaWFnbm9zdGljLnNwYW4gPSB0aGlzLmFic1NwYW4oZGlhZ25vc3RpYy5zcGFuLCBvZmZzZXQpO1xuICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKGRpYWdub3N0aWMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHVzaChhc3Q6IFRlbXBsYXRlQXN0KSB7XG4gICAgdGhpcy5wYXRoLnB1c2goYXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgcG9wKCkge1xuICAgIHRoaXMucGF0aC5wb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWJzU3BhbihzcGFuOiBTcGFuLCBhZGRpdGlvbmFsT2Zmc2V0OiBudW1iZXIgPSAwKTogU3BhbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBzcGFuLnN0YXJ0ICsgdGhpcy5pbmZvLm9mZnNldCArIGFkZGl0aW9uYWxPZmZzZXQsXG4gICAgICBlbmQ6IHNwYW4uZW5kICsgdGhpcy5pbmZvLm9mZnNldCArIGFkZGl0aW9uYWxPZmZzZXQsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNUZW1wbGF0ZVJlZmVyZW5jZSh0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlLmRpRGVwcykge1xuICAgIGZvciAobGV0IGRpRGVwIG9mIHR5cGUuZGlEZXBzKSB7XG4gICAgICBpZiAoZGlEZXAudG9rZW4gJiYgZGlEZXAudG9rZW4uaWRlbnRpZmllciAmJlxuICAgICAgICAgIGlkZW50aWZpZXJOYW1lKGRpRGVwLnRva2VuIS5pZGVudGlmaWVyISkgPT0gJ1RlbXBsYXRlUmVmJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3Bhbk9mKHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbik6IFNwYW4ge1xuICByZXR1cm4ge3N0YXJ0OiBzb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCwgZW5kOiBzb3VyY2VTcGFuLmVuZC5vZmZzZXR9O1xufVxuIl19