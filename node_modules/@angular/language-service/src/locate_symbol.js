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
        define("@angular/language-service/src/locate_symbol", ["require", "exports", "tslib", "@angular/compiler", "typescript/lib/tsserverlibrary", "@angular/language-service/src/expression_diagnostics", "@angular/language-service/src/expressions", "@angular/language-service/src/types", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var tss = require("typescript/lib/tsserverlibrary");
    var expression_diagnostics_1 = require("@angular/language-service/src/expression_diagnostics");
    var expressions_1 = require("@angular/language-service/src/expressions");
    var types_1 = require("@angular/language-service/src/types");
    var utils_1 = require("@angular/language-service/src/utils");
    /**
     * Traverses a template AST and locates symbol(s) at a specified position.
     * @param info template AST information set
     * @param position location to locate symbols at
     */
    function locateSymbols(info, position) {
        var templatePosition = position - info.template.span.start;
        // TODO: update `findTemplateAstAt` to use absolute positions.
        var path = utils_1.findTemplateAstAt(info.templateAst, templatePosition);
        var attribute = findAttribute(info, position);
        if (!path.tail)
            return [];
        var narrowest = utils_1.spanOf(path.tail);
        var toVisit = [];
        for (var node = path.tail; node && utils_1.isNarrower(utils_1.spanOf(node.sourceSpan), narrowest); node = path.parentOf(node)) {
            toVisit.push(node);
        }
        // For the structural directive, only care about the last template AST.
        if (attribute === null || attribute === void 0 ? void 0 : attribute.name.startsWith('*')) {
            toVisit.splice(0, toVisit.length - 1);
        }
        return toVisit.map(function (ast) { return locateSymbol(ast, path, info); })
            .filter(function (sym) { return sym !== undefined; });
    }
    exports.locateSymbols = locateSymbols;
    /**
     * Visits a template node and locates the symbol in that node at a path position.
     * @param ast template AST node to visit
     * @param path non-empty set of narrowing AST nodes at a position
     * @param info template AST information set
     */
    function locateSymbol(ast, path, info) {
        var templatePosition = path.position;
        var position = templatePosition + info.template.span.start;
        var symbol;
        var span;
        var staticSymbol;
        var attributeValueSymbol = function (ast) {
            var attribute = findAttribute(info, position);
            if (attribute) {
                if (utils_1.inSpan(templatePosition, utils_1.spanOf(attribute.valueSpan))) {
                    var result = void 0;
                    if (attribute.name.startsWith('*')) {
                        result = getSymbolInMicrosyntax(info, path, attribute);
                    }
                    else {
                        var dinfo = utils_1.diagnosticInfoFromTemplateInfo(info);
                        var scope = expression_diagnostics_1.getExpressionScope(dinfo, path);
                        result = expressions_1.getExpressionSymbol(scope, ast, templatePosition, info.template);
                    }
                    if (result) {
                        symbol = result.symbol;
                        span = utils_1.offsetSpan(result.span, attribute.valueSpan.start.offset);
                    }
                    return true;
                }
            }
            return false;
        };
        ast.visit({
            visitNgContent: function (_ast) { },
            visitEmbeddedTemplate: function (_ast) { },
            visitElement: function (ast) {
                var component = ast.directives.find(function (d) { return d.directive.isComponent; });
                if (component) {
                    // Need to cast because 'reference' is typed as any
                    staticSymbol = component.directive.type.reference;
                    symbol = info.template.query.getTypeSymbol(staticSymbol);
                    symbol = symbol && new OverrideKindSymbol(symbol, types_1.DirectiveKind.COMPONENT);
                    span = utils_1.spanOf(ast);
                }
                else {
                    // Find a directive that matches the element name
                    var directive = ast.directives.find(function (d) { return d.directive.selector != null && d.directive.selector.indexOf(ast.name) >= 0; });
                    if (directive) {
                        // Need to cast because 'reference' is typed as any
                        staticSymbol = directive.directive.type.reference;
                        symbol = info.template.query.getTypeSymbol(staticSymbol);
                        symbol = symbol && new OverrideKindSymbol(symbol, types_1.DirectiveKind.DIRECTIVE);
                        span = utils_1.spanOf(ast);
                    }
                }
            },
            visitReference: function (ast) {
                symbol = ast.value && info.template.query.getTypeSymbol(compiler_1.tokenReference(ast.value));
                span = utils_1.spanOf(ast);
            },
            visitVariable: function (_ast) { },
            visitEvent: function (ast) {
                if (!attributeValueSymbol(ast.handler)) {
                    symbol = utils_1.findOutputBinding(ast, path, info.template.query);
                    symbol = symbol && new OverrideKindSymbol(symbol, types_1.DirectiveKind.EVENT);
                    span = utils_1.spanOf(ast);
                }
            },
            visitElementProperty: function (ast) {
                attributeValueSymbol(ast.value);
            },
            visitAttr: function (ast) {
                var e_1, _a;
                var element = path.first(compiler_1.ElementAst);
                if (!element)
                    return;
                // Create a mapping of all directives applied to the element from their selectors.
                var matcher = new compiler_1.SelectorMatcher();
                try {
                    for (var _b = tslib_1.__values(element.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var dir = _c.value;
                        if (!dir.directive.selector)
                            continue;
                        matcher.addSelectables(compiler_1.CssSelector.parse(dir.directive.selector), dir);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // See if this attribute matches the selector of any directive on the element.
                var attributeSelector = "[" + ast.name + "=" + ast.value + "]";
                var parsedAttribute = compiler_1.CssSelector.parse(attributeSelector);
                if (!parsedAttribute.length)
                    return;
                matcher.match(parsedAttribute[0], function (_, _a) {
                    var directive = _a.directive;
                    // Need to cast because 'reference' is typed as any
                    staticSymbol = directive.type.reference;
                    symbol = info.template.query.getTypeSymbol(staticSymbol);
                    symbol = symbol && new OverrideKindSymbol(symbol, types_1.DirectiveKind.DIRECTIVE);
                    span = utils_1.spanOf(ast);
                });
            },
            visitBoundText: function (ast) {
                var expressionPosition = templatePosition - ast.sourceSpan.start.offset;
                if (utils_1.inSpan(expressionPosition, ast.value.span)) {
                    var dinfo = utils_1.diagnosticInfoFromTemplateInfo(info);
                    var scope = expression_diagnostics_1.getExpressionScope(dinfo, path);
                    var result = expressions_1.getExpressionSymbol(scope, ast.value, templatePosition, info.template);
                    if (result) {
                        symbol = result.symbol;
                        span = utils_1.offsetSpan(result.span, ast.sourceSpan.start.offset);
                    }
                }
            },
            visitText: function (_ast) { },
            visitDirective: function (ast) {
                // Need to cast because 'reference' is typed as any
                staticSymbol = ast.directive.type.reference;
                symbol = info.template.query.getTypeSymbol(staticSymbol);
                span = utils_1.spanOf(ast);
            },
            visitDirectiveProperty: function (ast) {
                if (!attributeValueSymbol(ast.value)) {
                    var directive = findParentOfBinding(info.templateAst, ast, templatePosition);
                    var attribute = findAttribute(info, position);
                    if (directive && attribute) {
                        if (attribute.name.startsWith('*')) {
                            var compileTypeSummary = directive.directive;
                            symbol = info.template.query.getTypeSymbol(compileTypeSummary.type.reference);
                            symbol = symbol && new OverrideKindSymbol(symbol, types_1.DirectiveKind.DIRECTIVE);
                            // Use 'attribute.sourceSpan' instead of the directive's,
                            // because the span of the directive is the whole opening tag of an element.
                            span = utils_1.spanOf(attribute.sourceSpan);
                        }
                        else {
                            symbol = findInputBinding(info, ast.templateName, directive);
                            span = utils_1.spanOf(ast);
                        }
                    }
                }
            }
        }, null);
        if (symbol && span) {
            var _a = utils_1.offsetSpan(span, info.template.span.start), start = _a.start, end = _a.end;
            return {
                symbol: symbol,
                span: tss.createTextSpanFromBounds(start, end),
                staticSymbol: staticSymbol,
            };
        }
    }
    // Get the symbol in microsyntax at template position.
    function getSymbolInMicrosyntax(info, path, attribute) {
        var e_2, _a;
        var _b;
        if (!attribute.valueSpan) {
            return;
        }
        var absValueOffset = attribute.valueSpan.start.offset;
        var result;
        var templateBindings = info.expressionParser.parseTemplateBindings(attribute.name, attribute.value, attribute.sourceSpan.toString(), attribute.sourceSpan.start.offset, attribute.valueSpan.start.offset).templateBindings;
        try {
            // Find the symbol that contains the position.
            for (var templateBindings_1 = tslib_1.__values(templateBindings), templateBindings_1_1 = templateBindings_1.next(); !templateBindings_1_1.done; templateBindings_1_1 = templateBindings_1.next()) {
                var tb = templateBindings_1_1.value;
                if (tb instanceof compiler_1.VariableBinding) {
                    // TODO(kyliau): if binding is variable we should still look for the value
                    // of the key. For example, "let i=index" => "index" should point to
                    // NgForOfContext.index
                    continue;
                }
                if (utils_1.inSpan(path.position, (_b = tb.value) === null || _b === void 0 ? void 0 : _b.ast.sourceSpan)) {
                    var dinfo = utils_1.diagnosticInfoFromTemplateInfo(info);
                    var scope = expression_diagnostics_1.getExpressionScope(dinfo, path);
                    result = expressions_1.getExpressionSymbol(scope, tb.value, path.position, info.template);
                }
                else if (utils_1.inSpan(path.position, tb.sourceSpan)) {
                    var template = path.first(compiler_1.EmbeddedTemplateAst);
                    if (template) {
                        // One element can only have one template binding.
                        var directiveAst = template.directives[0];
                        if (directiveAst) {
                            var symbol = findInputBinding(info, tb.key.source.substring(1), directiveAst);
                            if (symbol) {
                                result = {
                                    symbol: symbol,
                                    // the span here has to be relative to the start of the template
                                    // value so deduct the absolute offset.
                                    // TODO(kyliau): Use absolute source span throughout completions.
                                    span: utils_1.offsetSpan(tb.key.span, -absValueOffset),
                                };
                            }
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (templateBindings_1_1 && !templateBindings_1_1.done && (_a = templateBindings_1.return)) _a.call(templateBindings_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    }
    function findAttribute(info, position) {
        var templatePosition = position - info.template.span.start;
        var path = utils_1.getPathToNodeAtPosition(info.htmlAst, templatePosition);
        return path.first(compiler_1.Attribute);
    }
    // TODO: remove this function after the path includes 'DirectiveAst'.
    // Find the directive that corresponds to the specified 'binding'
    // at the specified 'position' in the 'ast'.
    function findParentOfBinding(ast, binding, position) {
        var res;
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (ast) {
                var span = utils_1.spanOf(ast);
                if (!utils_1.inSpan(position, span)) {
                    // Returning a value here will result in the children being skipped.
                    return true;
                }
            };
            class_1.prototype.visitEmbeddedTemplate = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitElement = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitDirective = function (ast) {
                var result = this.visitChildren(ast, function (visit) {
                    visit(ast.inputs);
                });
                return result;
            };
            class_1.prototype.visitDirectiveProperty = function (ast, context) {
                if (ast === binding) {
                    res = context;
                }
            };
            return class_1;
        }(compiler_1.RecursiveTemplateAstVisitor));
        compiler_1.templateVisitAll(visitor, ast);
        return res;
    }
    // Find the symbol of input binding in 'directiveAst' by 'name'.
    function findInputBinding(info, name, directiveAst) {
        var invertedInput = utils_1.invertMap(directiveAst.directive.inputs);
        var fieldName = invertedInput[name];
        if (fieldName) {
            var classSymbol = info.template.query.getTypeSymbol(directiveAst.directive.type.reference);
            if (classSymbol) {
                return classSymbol.members().get(fieldName);
            }
        }
    }
    /**
     * Wrap a symbol and change its kind to component.
     */
    var OverrideKindSymbol = /** @class */ (function () {
        function OverrideKindSymbol(sym, kindOverride) {
            this.sym = sym;
            this.kind = kindOverride;
        }
        Object.defineProperty(OverrideKindSymbol.prototype, "name", {
            get: function () {
                return this.sym.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "language", {
            get: function () {
                return this.sym.language;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "type", {
            get: function () {
                return this.sym.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "container", {
            get: function () {
                return this.sym.container;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "public", {
            get: function () {
                return this.sym.public;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "callable", {
            get: function () {
                return this.sym.callable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "nullable", {
            get: function () {
                return this.sym.nullable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "definition", {
            get: function () {
                return this.sym.definition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverrideKindSymbol.prototype, "documentation", {
            get: function () {
                return this.sym.documentation;
            },
            enumerable: true,
            configurable: true
        });
        OverrideKindSymbol.prototype.members = function () {
            return this.sym.members();
        };
        OverrideKindSymbol.prototype.signatures = function () {
            return this.sym.signatures();
        };
        OverrideKindSymbol.prototype.selectSignature = function (types) {
            return this.sym.selectSignature(types);
        };
        OverrideKindSymbol.prototype.indexed = function (argument) {
            return this.sym.indexed(argument);
        };
        OverrideKindSymbol.prototype.typeArguments = function () {
            return this.sym.typeArguments();
        };
        return OverrideKindSymbol;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRlX3N5bWJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2Uvc3JjL2xvY2F0ZV9zeW1ib2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOENBQXFSO0lBQ3JSLG9EQUFzRDtJQUV0RCwrRkFBNEQ7SUFDNUQseUVBQWtEO0lBQ2xELDZEQUF1RjtJQUN2Riw2REFBeUs7SUFFeks7Ozs7T0FJRztJQUNILFNBQWdCLGFBQWEsQ0FBQyxJQUFlLEVBQUUsUUFBZ0I7UUFDN0QsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdELDhEQUE4RDtRQUM5RCxJQUFNLElBQUksR0FBRyx5QkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUUxQixJQUFNLFNBQVMsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFrQixFQUFFLENBQUM7UUFDbEMsS0FBSyxJQUFJLElBQUksR0FBMEIsSUFBSSxDQUFDLElBQUksRUFDM0MsSUFBSSxJQUFJLGtCQUFVLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2RixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsdUVBQXVFO1FBQ3ZFLElBQUksU0FB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QUMvQixDQUFDO1FBRUQsNENBQWUsR0FBZixVQUFnQixLQUFlO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELG9DQUFPLEdBQVAsVUFBUSxRQUFnQjtZQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCwwQ0FBYSxHQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDSCx5QkFBQztJQUFELENBQUMsQUE3REQsSUE2REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVNULCBBdHRyaWJ1dGUsIEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIENzc1NlbGVjdG9yLCBEaXJlY3RpdmVBc3QsIEVsZW1lbnRBc3QsIEVtYmVkZGVkVGVtcGxhdGVBc3QsIFJlY3Vyc2l2ZVRlbXBsYXRlQXN0VmlzaXRvciwgU2VsZWN0b3JNYXRjaGVyLCBTdGF0aWNTeW1ib2wsIFRlbXBsYXRlQXN0LCBUZW1wbGF0ZUFzdFBhdGgsIHRlbXBsYXRlVmlzaXRBbGwsIHRva2VuUmVmZXJlbmNlLCBWYXJpYWJsZUJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzcyBmcm9tICd0eXBlc2NyaXB0L2xpYi90c3NlcnZlcmxpYnJhcnknO1xuXG5pbXBvcnQge2dldEV4cHJlc3Npb25TY29wZX0gZnJvbSAnLi9leHByZXNzaW9uX2RpYWdub3N0aWNzJztcbmltcG9ydCB7Z2V0RXhwcmVzc2lvblN5bWJvbH0gZnJvbSAnLi9leHByZXNzaW9ucyc7XG5pbXBvcnQge0FzdFJlc3VsdCwgRGVmaW5pdGlvbiwgRGlyZWN0aXZlS2luZCwgU3BhbiwgU3ltYm9sLCBTeW1ib2xJbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7ZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvLCBmaW5kT3V0cHV0QmluZGluZywgZmluZFRlbXBsYXRlQXN0QXQsIGdldFBhdGhUb05vZGVBdFBvc2l0aW9uLCBpblNwYW4sIGludmVydE1hcCwgaXNOYXJyb3dlciwgb2Zmc2V0U3Bhbiwgc3Bhbk9mfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBUcmF2ZXJzZXMgYSB0ZW1wbGF0ZSBBU1QgYW5kIGxvY2F0ZXMgc3ltYm9sKHMpIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uLlxuICogQHBhcmFtIGluZm8gdGVtcGxhdGUgQVNUIGluZm9ybWF0aW9uIHNldFxuICogQHBhcmFtIHBvc2l0aW9uIGxvY2F0aW9uIHRvIGxvY2F0ZSBzeW1ib2xzIGF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGVTeW1ib2xzKGluZm86IEFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlcik6IFN5bWJvbEluZm9bXSB7XG4gIGNvbnN0IHRlbXBsYXRlUG9zaXRpb24gPSBwb3NpdGlvbiAtIGluZm8udGVtcGxhdGUuc3Bhbi5zdGFydDtcbiAgLy8gVE9ETzogdXBkYXRlIGBmaW5kVGVtcGxhdGVBc3RBdGAgdG8gdXNlIGFic29sdXRlIHBvc2l0aW9ucy5cbiAgY29uc3QgcGF0aCA9IGZpbmRUZW1wbGF0ZUFzdEF0KGluZm8udGVtcGxhdGVBc3QsIHRlbXBsYXRlUG9zaXRpb24pO1xuICBjb25zdCBhdHRyaWJ1dGUgPSBmaW5kQXR0cmlidXRlKGluZm8sIHBvc2l0aW9uKTtcblxuICBpZiAoIXBhdGgudGFpbCkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IG5hcnJvd2VzdCA9IHNwYW5PZihwYXRoLnRhaWwpO1xuICBjb25zdCB0b1Zpc2l0OiBUZW1wbGF0ZUFzdFtdID0gW107XG4gIGZvciAobGV0IG5vZGU6IFRlbXBsYXRlQXN0fHVuZGVmaW5lZCA9IHBhdGgudGFpbDtcbiAgICAgICBub2RlICYmIGlzTmFycm93ZXIoc3Bhbk9mKG5vZGUuc291cmNlU3BhbiksIG5hcnJvd2VzdCk7IG5vZGUgPSBwYXRoLnBhcmVudE9mKG5vZGUpKSB7XG4gICAgdG9WaXNpdC5wdXNoKG5vZGUpO1xuICB9XG5cbiAgLy8gRm9yIHRoZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSwgb25seSBjYXJlIGFib3V0IHRoZSBsYXN0IHRlbXBsYXRlIEFTVC5cbiAgaWYgKGF0dHJpYnV0ZT8ubmFtZS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICB0b1Zpc2l0LnNwbGljZSgwLCB0b1Zpc2l0Lmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIHRvVmlzaXQubWFwKGFzdCA9PiBsb2NhdGVTeW1ib2woYXN0LCBwYXRoLCBpbmZvKSlcbiAgICAgIC5maWx0ZXIoKHN5bSk6IHN5bSBpcyBTeW1ib2xJbmZvID0+IHN5bSAhPT0gdW5kZWZpbmVkKTtcbn1cblxuLyoqXG4gKiBWaXNpdHMgYSB0ZW1wbGF0ZSBub2RlIGFuZCBsb2NhdGVzIHRoZSBzeW1ib2wgaW4gdGhhdCBub2RlIGF0IGEgcGF0aCBwb3NpdGlvbi5cbiAqIEBwYXJhbSBhc3QgdGVtcGxhdGUgQVNUIG5vZGUgdG8gdmlzaXRcbiAqIEBwYXJhbSBwYXRoIG5vbi1lbXB0eSBzZXQgb2YgbmFycm93aW5nIEFTVCBub2RlcyBhdCBhIHBvc2l0aW9uXG4gKiBAcGFyYW0gaW5mbyB0ZW1wbGF0ZSBBU1QgaW5mb3JtYXRpb24gc2V0XG4gKi9cbmZ1bmN0aW9uIGxvY2F0ZVN5bWJvbChhc3Q6IFRlbXBsYXRlQXN0LCBwYXRoOiBUZW1wbGF0ZUFzdFBhdGgsIGluZm86IEFzdFJlc3VsdCk6IFN5bWJvbEluZm98XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3QgdGVtcGxhdGVQb3NpdGlvbiA9IHBhdGgucG9zaXRpb247XG4gIGNvbnN0IHBvc2l0aW9uID0gdGVtcGxhdGVQb3NpdGlvbiArIGluZm8udGVtcGxhdGUuc3Bhbi5zdGFydDtcbiAgbGV0IHN5bWJvbDogU3ltYm9sfHVuZGVmaW5lZDtcbiAgbGV0IHNwYW46IFNwYW58dW5kZWZpbmVkO1xuICBsZXQgc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2x8dW5kZWZpbmVkO1xuICBjb25zdCBhdHRyaWJ1dGVWYWx1ZVN5bWJvbCA9IChhc3Q6IEFTVCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpbmRBdHRyaWJ1dGUoaW5mbywgcG9zaXRpb24pO1xuICAgIGlmIChhdHRyaWJ1dGUpIHtcbiAgICAgIGlmIChpblNwYW4odGVtcGxhdGVQb3NpdGlvbiwgc3Bhbk9mKGF0dHJpYnV0ZS52YWx1ZVNwYW4pKSkge1xuICAgICAgICBsZXQgcmVzdWx0OiB7c3ltYm9sOiBTeW1ib2wsIHNwYW46IFNwYW59fHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5uYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGdldFN5bWJvbEluTWljcm9zeW50YXgoaW5mbywgcGF0aCwgYXR0cmlidXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkaW5mbyA9IGRpYWdub3N0aWNJbmZvRnJvbVRlbXBsYXRlSW5mbyhpbmZvKTtcbiAgICAgICAgICBjb25zdCBzY29wZSA9IGdldEV4cHJlc3Npb25TY29wZShkaW5mbywgcGF0aCk7XG4gICAgICAgICAgcmVzdWx0ID0gZ2V0RXhwcmVzc2lvblN5bWJvbChzY29wZSwgYXN0LCB0ZW1wbGF0ZVBvc2l0aW9uLCBpbmZvLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgc3ltYm9sID0gcmVzdWx0LnN5bWJvbDtcbiAgICAgICAgICBzcGFuID0gb2Zmc2V0U3BhbihyZXN1bHQuc3BhbiwgYXR0cmlidXRlLnZhbHVlU3BhbiEuc3RhcnQub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBhc3QudmlzaXQoXG4gICAgICB7XG4gICAgICAgIHZpc2l0TmdDb250ZW50KF9hc3QpIHt9LFxuICAgICAgICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoX2FzdCkge30sXG4gICAgICAgIHZpc2l0RWxlbWVudChhc3QpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBhc3QuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5kaXJlY3RpdmUuaXNDb21wb25lbnQpO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gY2FzdCBiZWNhdXNlICdyZWZlcmVuY2UnIGlzIHR5cGVkIGFzIGFueVxuICAgICAgICAgICAgc3RhdGljU3ltYm9sID0gY29tcG9uZW50LmRpcmVjdGl2ZS50eXBlLnJlZmVyZW5jZSBhcyBTdGF0aWNTeW1ib2w7XG4gICAgICAgICAgICBzeW1ib2wgPSBpbmZvLnRlbXBsYXRlLnF1ZXJ5LmdldFR5cGVTeW1ib2woc3RhdGljU3ltYm9sKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbCAmJiBuZXcgT3ZlcnJpZGVLaW5kU3ltYm9sKHN5bWJvbCwgRGlyZWN0aXZlS2luZC5DT01QT05FTlQpO1xuICAgICAgICAgICAgc3BhbiA9IHNwYW5PZihhc3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGaW5kIGEgZGlyZWN0aXZlIHRoYXQgbWF0Y2hlcyB0aGUgZWxlbWVudCBuYW1lXG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBhc3QuZGlyZWN0aXZlcy5maW5kKFxuICAgICAgICAgICAgICAgIGQgPT4gZC5kaXJlY3RpdmUuc2VsZWN0b3IgIT0gbnVsbCAmJiBkLmRpcmVjdGl2ZS5zZWxlY3Rvci5pbmRleE9mKGFzdC5uYW1lKSA+PSAwKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgLy8gTmVlZCB0byBjYXN0IGJlY2F1c2UgJ3JlZmVyZW5jZScgaXMgdHlwZWQgYXMgYW55XG4gICAgICAgICAgICAgIHN0YXRpY1N5bWJvbCA9IGRpcmVjdGl2ZS5kaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UgYXMgU3RhdGljU3ltYm9sO1xuICAgICAgICAgICAgICBzeW1ib2wgPSBpbmZvLnRlbXBsYXRlLnF1ZXJ5LmdldFR5cGVTeW1ib2woc3RhdGljU3ltYm9sKTtcbiAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sICYmIG5ldyBPdmVycmlkZUtpbmRTeW1ib2woc3ltYm9sLCBEaXJlY3RpdmVLaW5kLkRJUkVDVElWRSk7XG4gICAgICAgICAgICAgIHNwYW4gPSBzcGFuT2YoYXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZpc2l0UmVmZXJlbmNlKGFzdCkge1xuICAgICAgICAgIHN5bWJvbCA9IGFzdC52YWx1ZSAmJiBpbmZvLnRlbXBsYXRlLnF1ZXJ5LmdldFR5cGVTeW1ib2wodG9rZW5SZWZlcmVuY2UoYXN0LnZhbHVlKSk7XG4gICAgICAgICAgc3BhbiA9IHNwYW5PZihhc3QpO1xuICAgICAgICB9LFxuICAgICAgICB2aXNpdFZhcmlhYmxlKF9hc3QpIHt9LFxuICAgICAgICB2aXNpdEV2ZW50KGFzdCkge1xuICAgICAgICAgIGlmICghYXR0cmlidXRlVmFsdWVTeW1ib2woYXN0LmhhbmRsZXIpKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBmaW5kT3V0cHV0QmluZGluZyhhc3QsIHBhdGgsIGluZm8udGVtcGxhdGUucXVlcnkpO1xuICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sICYmIG5ldyBPdmVycmlkZUtpbmRTeW1ib2woc3ltYm9sLCBEaXJlY3RpdmVLaW5kLkVWRU5UKTtcbiAgICAgICAgICAgIHNwYW4gPSBzcGFuT2YoYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZpc2l0RWxlbWVudFByb3BlcnR5KGFzdCkge1xuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlU3ltYm9sKGFzdC52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHZpc2l0QXR0cihhc3QpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcGF0aC5maXJzdChFbGVtZW50QXN0KTtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIGFsbCBkaXJlY3RpdmVzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgZnJvbSB0aGVpciBzZWxlY3RvcnMuXG4gICAgICAgICAgY29uc3QgbWF0Y2hlciA9IG5ldyBTZWxlY3Rvck1hdGNoZXI8RGlyZWN0aXZlQXN0PigpO1xuICAgICAgICAgIGZvciAoY29uc3QgZGlyIG9mIGVsZW1lbnQuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgaWYgKCFkaXIuZGlyZWN0aXZlLnNlbGVjdG9yKSBjb250aW51ZTtcbiAgICAgICAgICAgIG1hdGNoZXIuYWRkU2VsZWN0YWJsZXMoQ3NzU2VsZWN0b3IucGFyc2UoZGlyLmRpcmVjdGl2ZS5zZWxlY3RvciksIGRpcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIGlmIHRoaXMgYXR0cmlidXRlIG1hdGNoZXMgdGhlIHNlbGVjdG9yIG9mIGFueSBkaXJlY3RpdmUgb24gdGhlIGVsZW1lbnQuXG4gICAgICAgICAgY29uc3QgYXR0cmlidXRlU2VsZWN0b3IgPSBgWyR7YXN0Lm5hbWV9PSR7YXN0LnZhbHVlfV1gO1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEF0dHJpYnV0ZSA9IENzc1NlbGVjdG9yLnBhcnNlKGF0dHJpYnV0ZVNlbGVjdG9yKTtcbiAgICAgICAgICBpZiAoIXBhcnNlZEF0dHJpYnV0ZS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICBtYXRjaGVyLm1hdGNoKHBhcnNlZEF0dHJpYnV0ZVswXSwgKF8sIHtkaXJlY3RpdmV9KSA9PiB7XG4gICAgICAgICAgICAvLyBOZWVkIHRvIGNhc3QgYmVjYXVzZSAncmVmZXJlbmNlJyBpcyB0eXBlZCBhcyBhbnlcbiAgICAgICAgICAgIHN0YXRpY1N5bWJvbCA9IGRpcmVjdGl2ZS50eXBlLnJlZmVyZW5jZSBhcyBTdGF0aWNTeW1ib2w7XG4gICAgICAgICAgICBzeW1ib2wgPSBpbmZvLnRlbXBsYXRlLnF1ZXJ5LmdldFR5cGVTeW1ib2woc3RhdGljU3ltYm9sKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbCAmJiBuZXcgT3ZlcnJpZGVLaW5kU3ltYm9sKHN5bWJvbCwgRGlyZWN0aXZlS2luZC5ESVJFQ1RJVkUpO1xuICAgICAgICAgICAgc3BhbiA9IHNwYW5PZihhc3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB2aXNpdEJvdW5kVGV4dChhc3QpIHtcbiAgICAgICAgICBjb25zdCBleHByZXNzaW9uUG9zaXRpb24gPSB0ZW1wbGF0ZVBvc2l0aW9uIC0gYXN0LnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0O1xuICAgICAgICAgIGlmIChpblNwYW4oZXhwcmVzc2lvblBvc2l0aW9uLCBhc3QudmFsdWUuc3BhbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpbmZvID0gZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvKGluZm8pO1xuICAgICAgICAgICAgY29uc3Qgc2NvcGUgPSBnZXRFeHByZXNzaW9uU2NvcGUoZGluZm8sIHBhdGgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0RXhwcmVzc2lvblN5bWJvbChzY29wZSwgYXN0LnZhbHVlLCB0ZW1wbGF0ZVBvc2l0aW9uLCBpbmZvLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgc3ltYm9sID0gcmVzdWx0LnN5bWJvbDtcbiAgICAgICAgICAgICAgc3BhbiA9IG9mZnNldFNwYW4ocmVzdWx0LnNwYW4sIGFzdC5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2aXNpdFRleHQoX2FzdCkge30sXG4gICAgICAgIHZpc2l0RGlyZWN0aXZlKGFzdCkge1xuICAgICAgICAgIC8vIE5lZWQgdG8gY2FzdCBiZWNhdXNlICdyZWZlcmVuY2UnIGlzIHR5cGVkIGFzIGFueVxuICAgICAgICAgIHN0YXRpY1N5bWJvbCA9IGFzdC5kaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UgYXMgU3RhdGljU3ltYm9sO1xuICAgICAgICAgIHN5bWJvbCA9IGluZm8udGVtcGxhdGUucXVlcnkuZ2V0VHlwZVN5bWJvbChzdGF0aWNTeW1ib2wpO1xuICAgICAgICAgIHNwYW4gPSBzcGFuT2YoYXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaXREaXJlY3RpdmVQcm9wZXJ0eShhc3QpIHtcbiAgICAgICAgICBpZiAoIWF0dHJpYnV0ZVZhbHVlU3ltYm9sKGFzdC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGZpbmRQYXJlbnRPZkJpbmRpbmcoaW5mby50ZW1wbGF0ZUFzdCwgYXN0LCB0ZW1wbGF0ZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpbmRBdHRyaWJ1dGUoaW5mbywgcG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZSAmJiBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5uYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBpbGVUeXBlU3VtbWFyeSA9IGRpcmVjdGl2ZS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gaW5mby50ZW1wbGF0ZS5xdWVyeS5nZXRUeXBlU3ltYm9sKGNvbXBpbGVUeXBlU3VtbWFyeS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sICYmIG5ldyBPdmVycmlkZUtpbmRTeW1ib2woc3ltYm9sLCBEaXJlY3RpdmVLaW5kLkRJUkVDVElWRSk7XG4gICAgICAgICAgICAgICAgLy8gVXNlICdhdHRyaWJ1dGUuc291cmNlU3BhbicgaW5zdGVhZCBvZiB0aGUgZGlyZWN0aXZlJ3MsXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgc3BhbiBvZiB0aGUgZGlyZWN0aXZlIGlzIHRoZSB3aG9sZSBvcGVuaW5nIHRhZyBvZiBhbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHNwYW4gPSBzcGFuT2YoYXR0cmlidXRlLnNvdXJjZVNwYW4pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IGZpbmRJbnB1dEJpbmRpbmcoaW5mbywgYXN0LnRlbXBsYXRlTmFtZSwgZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzcGFuID0gc3Bhbk9mKGFzdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBudWxsKTtcbiAgaWYgKHN5bWJvbCAmJiBzcGFuKSB7XG4gICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gb2Zmc2V0U3BhbihzcGFuLCBpbmZvLnRlbXBsYXRlLnNwYW4uc3RhcnQpO1xuICAgIHJldHVybiB7XG4gICAgICBzeW1ib2wsXG4gICAgICBzcGFuOiB0c3MuY3JlYXRlVGV4dFNwYW5Gcm9tQm91bmRzKHN0YXJ0LCBlbmQpLFxuICAgICAgc3RhdGljU3ltYm9sLFxuICAgIH07XG4gIH1cbn1cblxuLy8gR2V0IHRoZSBzeW1ib2wgaW4gbWljcm9zeW50YXggYXQgdGVtcGxhdGUgcG9zaXRpb24uXG5mdW5jdGlvbiBnZXRTeW1ib2xJbk1pY3Jvc3ludGF4KGluZm86IEFzdFJlc3VsdCwgcGF0aDogVGVtcGxhdGVBc3RQYXRoLCBhdHRyaWJ1dGU6IEF0dHJpYnV0ZSk6XG4gICAge3N5bWJvbDogU3ltYm9sLCBzcGFuOiBTcGFufXx1bmRlZmluZWQge1xuICBpZiAoIWF0dHJpYnV0ZS52YWx1ZVNwYW4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYWJzVmFsdWVPZmZzZXQgPSBhdHRyaWJ1dGUudmFsdWVTcGFuLnN0YXJ0Lm9mZnNldDtcbiAgbGV0IHJlc3VsdDoge3N5bWJvbDogU3ltYm9sLCBzcGFuOiBTcGFufXx1bmRlZmluZWQ7XG4gIGNvbnN0IHt0ZW1wbGF0ZUJpbmRpbmdzfSA9IGluZm8uZXhwcmVzc2lvblBhcnNlci5wYXJzZVRlbXBsYXRlQmluZGluZ3MoXG4gICAgICBhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3Bhbi50b1N0cmluZygpLFxuICAgICAgYXR0cmlidXRlLnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0LCBhdHRyaWJ1dGUudmFsdWVTcGFuLnN0YXJ0Lm9mZnNldCk7XG5cbiAgLy8gRmluZCB0aGUgc3ltYm9sIHRoYXQgY29udGFpbnMgdGhlIHBvc2l0aW9uLlxuICBmb3IgKGNvbnN0IHRiIG9mIHRlbXBsYXRlQmluZGluZ3MpIHtcbiAgICBpZiAodGIgaW5zdGFuY2VvZiBWYXJpYWJsZUJpbmRpbmcpIHtcbiAgICAgIC8vIFRPRE8oa3lsaWF1KTogaWYgYmluZGluZyBpcyB2YXJpYWJsZSB3ZSBzaG91bGQgc3RpbGwgbG9vayBmb3IgdGhlIHZhbHVlXG4gICAgICAvLyBvZiB0aGUga2V5LiBGb3IgZXhhbXBsZSwgXCJsZXQgaT1pbmRleFwiID0+IFwiaW5kZXhcIiBzaG91bGQgcG9pbnQgdG9cbiAgICAgIC8vIE5nRm9yT2ZDb250ZXh0LmluZGV4XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGluU3BhbihwYXRoLnBvc2l0aW9uLCB0Yi52YWx1ZT8uYXN0LnNvdXJjZVNwYW4pKSB7XG4gICAgICBjb25zdCBkaW5mbyA9IGRpYWdub3N0aWNJbmZvRnJvbVRlbXBsYXRlSW5mbyhpbmZvKTtcbiAgICAgIGNvbnN0IHNjb3BlID0gZ2V0RXhwcmVzc2lvblNjb3BlKGRpbmZvLCBwYXRoKTtcbiAgICAgIHJlc3VsdCA9IGdldEV4cHJlc3Npb25TeW1ib2woc2NvcGUsIHRiLnZhbHVlISwgcGF0aC5wb3NpdGlvbiwgaW5mby50ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpblNwYW4ocGF0aC5wb3NpdGlvbiwgdGIuc291cmNlU3BhbikpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gcGF0aC5maXJzdChFbWJlZGRlZFRlbXBsYXRlQXN0KTtcbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBPbmUgZWxlbWVudCBjYW4gb25seSBoYXZlIG9uZSB0ZW1wbGF0ZSBiaW5kaW5nLlxuICAgICAgICBjb25zdCBkaXJlY3RpdmVBc3QgPSB0ZW1wbGF0ZS5kaXJlY3RpdmVzWzBdO1xuICAgICAgICBpZiAoZGlyZWN0aXZlQXN0KSB7XG4gICAgICAgICAgY29uc3Qgc3ltYm9sID0gZmluZElucHV0QmluZGluZyhpbmZvLCB0Yi5rZXkuc291cmNlLnN1YnN0cmluZygxKSwgZGlyZWN0aXZlQXN0KTtcbiAgICAgICAgICBpZiAoc3ltYm9sKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgLy8gdGhlIHNwYW4gaGVyZSBoYXMgdG8gYmUgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAvLyB2YWx1ZSBzbyBkZWR1Y3QgdGhlIGFic29sdXRlIG9mZnNldC5cbiAgICAgICAgICAgICAgLy8gVE9ETyhreWxpYXUpOiBVc2UgYWJzb2x1dGUgc291cmNlIHNwYW4gdGhyb3VnaG91dCBjb21wbGV0aW9ucy5cbiAgICAgICAgICAgICAgc3Bhbjogb2Zmc2V0U3Bhbih0Yi5rZXkuc3BhbiwgLWFic1ZhbHVlT2Zmc2V0KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRBdHRyaWJ1dGUoaW5mbzogQXN0UmVzdWx0LCBwb3NpdGlvbjogbnVtYmVyKTogQXR0cmlidXRlfHVuZGVmaW5lZCB7XG4gIGNvbnN0IHRlbXBsYXRlUG9zaXRpb24gPSBwb3NpdGlvbiAtIGluZm8udGVtcGxhdGUuc3Bhbi5zdGFydDtcbiAgY29uc3QgcGF0aCA9IGdldFBhdGhUb05vZGVBdFBvc2l0aW9uKGluZm8uaHRtbEFzdCwgdGVtcGxhdGVQb3NpdGlvbik7XG4gIHJldHVybiBwYXRoLmZpcnN0KEF0dHJpYnV0ZSk7XG59XG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGZ1bmN0aW9uIGFmdGVyIHRoZSBwYXRoIGluY2x1ZGVzICdEaXJlY3RpdmVBc3QnLlxuLy8gRmluZCB0aGUgZGlyZWN0aXZlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHNwZWNpZmllZCAnYmluZGluZydcbi8vIGF0IHRoZSBzcGVjaWZpZWQgJ3Bvc2l0aW9uJyBpbiB0aGUgJ2FzdCcuXG5mdW5jdGlvbiBmaW5kUGFyZW50T2ZCaW5kaW5nKFxuICAgIGFzdDogVGVtcGxhdGVBc3RbXSwgYmluZGluZzogQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCwgcG9zaXRpb246IG51bWJlcik6IERpcmVjdGl2ZUFzdHxcbiAgICB1bmRlZmluZWQge1xuICBsZXQgcmVzOiBEaXJlY3RpdmVBc3R8dW5kZWZpbmVkO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IGNsYXNzIGV4dGVuZHMgUmVjdXJzaXZlVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgICB2aXNpdChhc3Q6IFRlbXBsYXRlQXN0KTogYW55IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBzcGFuT2YoYXN0KTtcbiAgICAgIGlmICghaW5TcGFuKHBvc2l0aW9uLCBzcGFuKSkge1xuICAgICAgICAvLyBSZXR1cm5pbmcgYSB2YWx1ZSBoZXJlIHdpbGwgcmVzdWx0IGluIHRoZSBjaGlsZHJlbiBiZWluZyBza2lwcGVkLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7XG4gICAgICAgIHZpc2l0KGFzdC5kaXJlY3RpdmVzKTtcbiAgICAgICAgdmlzaXQoYXN0LmNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgICAgdmlzaXQoYXN0LmRpcmVjdGl2ZXMpO1xuICAgICAgICB2aXNpdChhc3QuY2hpbGRyZW4pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmlzaXREaXJlY3RpdmUoYXN0OiBEaXJlY3RpdmVBc3QpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmlzaXRDaGlsZHJlbihhc3QsIHZpc2l0ID0+IHtcbiAgICAgICAgdmlzaXQoYXN0LmlucHV0cyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmlzaXREaXJlY3RpdmVQcm9wZXJ0eShhc3Q6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIGNvbnRleHQ6IERpcmVjdGl2ZUFzdCkge1xuICAgICAgaWYgKGFzdCA9PT0gYmluZGluZykge1xuICAgICAgICByZXMgPSBjb250ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgdGVtcGxhdGVWaXNpdEFsbCh2aXNpdG9yLCBhc3QpO1xuICByZXR1cm4gcmVzO1xufVxuXG4vLyBGaW5kIHRoZSBzeW1ib2wgb2YgaW5wdXQgYmluZGluZyBpbiAnZGlyZWN0aXZlQXN0JyBieSAnbmFtZScuXG5mdW5jdGlvbiBmaW5kSW5wdXRCaW5kaW5nKGluZm86IEFzdFJlc3VsdCwgbmFtZTogc3RyaW5nLCBkaXJlY3RpdmVBc3Q6IERpcmVjdGl2ZUFzdCk6IFN5bWJvbHxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCBpbnZlcnRlZElucHV0ID0gaW52ZXJ0TWFwKGRpcmVjdGl2ZUFzdC5kaXJlY3RpdmUuaW5wdXRzKTtcbiAgY29uc3QgZmllbGROYW1lID0gaW52ZXJ0ZWRJbnB1dFtuYW1lXTtcbiAgaWYgKGZpZWxkTmFtZSkge1xuICAgIGNvbnN0IGNsYXNzU3ltYm9sID0gaW5mby50ZW1wbGF0ZS5xdWVyeS5nZXRUeXBlU3ltYm9sKGRpcmVjdGl2ZUFzdC5kaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UpO1xuICAgIGlmIChjbGFzc1N5bWJvbCkge1xuICAgICAgcmV0dXJuIGNsYXNzU3ltYm9sLm1lbWJlcnMoKS5nZXQoZmllbGROYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwIGEgc3ltYm9sIGFuZCBjaGFuZ2UgaXRzIGtpbmQgdG8gY29tcG9uZW50LlxuICovXG5jbGFzcyBPdmVycmlkZUtpbmRTeW1ib2wgaW1wbGVtZW50cyBTeW1ib2wge1xuICBwdWJsaWMgcmVhZG9ubHkga2luZDogRGlyZWN0aXZlS2luZDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzeW06IFN5bWJvbCwga2luZE92ZXJyaWRlOiBEaXJlY3RpdmVLaW5kKSB7XG4gICAgdGhpcy5raW5kID0ga2luZE92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zeW0ubmFtZTtcbiAgfVxuXG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN5bS5sYW5ndWFnZTtcbiAgfVxuXG4gIGdldCB0eXBlKCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnN5bS50eXBlO1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5zeW0uY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IHB1YmxpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zeW0ucHVibGljO1xuICB9XG5cbiAgZ2V0IGNhbGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN5bS5jYWxsYWJsZTtcbiAgfVxuXG4gIGdldCBudWxsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zeW0ubnVsbGFibGU7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbigpOiBEZWZpbml0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zeW0uZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldCBkb2N1bWVudGF0aW9uKCk6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W10ge1xuICAgIHJldHVybiB0aGlzLnN5bS5kb2N1bWVudGF0aW9uO1xuICB9XG5cbiAgbWVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW0ubWVtYmVycygpO1xuICB9XG5cbiAgc2lnbmF0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW0uc2lnbmF0dXJlcygpO1xuICB9XG5cbiAgc2VsZWN0U2lnbmF0dXJlKHR5cGVzOiBTeW1ib2xbXSkge1xuICAgIHJldHVybiB0aGlzLnN5bS5zZWxlY3RTaWduYXR1cmUodHlwZXMpO1xuICB9XG5cbiAgaW5kZXhlZChhcmd1bWVudDogU3ltYm9sKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltLmluZGV4ZWQoYXJndW1lbnQpO1xuICB9XG5cbiAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnN5bS50eXBlQXJndW1lbnRzKCk7XG4gIH1cbn1cbiJdfQ==