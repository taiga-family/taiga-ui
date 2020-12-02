(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/indexer/src/template", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/indexer/src/api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/indexer/src/api");
    /**
     * Visits the AST of an Angular template syntax expression, finding interesting
     * entities (variable references, etc.). Creates an array of Entities found in
     * the expression, with the location of the Entities being relative to the
     * expression.
     *
     * Visiting `text {{prop}}` will return
     * `[TopLevelIdentifier {name: 'prop', span: {start: 7, end: 11}}]`.
     */
    var ExpressionVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(ExpressionVisitor, _super);
        function ExpressionVisitor(expressionStr, absoluteOffset, boundTemplate, targetToIdentifier) {
            var _this = _super.call(this) || this;
            _this.expressionStr = expressionStr;
            _this.absoluteOffset = absoluteOffset;
            _this.boundTemplate = boundTemplate;
            _this.targetToIdentifier = targetToIdentifier;
            _this.identifiers = [];
            return _this;
        }
        /**
         * Returns identifiers discovered in an expression.
         *
         * @param ast expression AST to visit
         * @param source expression AST source code
         * @param absoluteOffset absolute byte offset from start of the file to the start of the AST
         * source code.
         * @param boundTemplate bound target of the entire template, which can be used to query for the
         * entities expressions target.
         * @param targetToIdentifier closure converting a template target node to its identifier.
         */
        ExpressionVisitor.getIdentifiers = function (ast, source, absoluteOffset, boundTemplate, targetToIdentifier) {
            var visitor = new ExpressionVisitor(source, absoluteOffset, boundTemplate, targetToIdentifier);
            visitor.visit(ast);
            return visitor.identifiers;
        };
        ExpressionVisitor.prototype.visit = function (ast) {
            ast.visit(this);
        };
        ExpressionVisitor.prototype.visitMethodCall = function (ast, context) {
            this.visitIdentifier(ast, api_1.IdentifierKind.Method);
            _super.prototype.visitMethodCall.call(this, ast, context);
        };
        ExpressionVisitor.prototype.visitPropertyRead = function (ast, context) {
            this.visitIdentifier(ast, api_1.IdentifierKind.Property);
            _super.prototype.visitPropertyRead.call(this, ast, context);
        };
        ExpressionVisitor.prototype.visitPropertyWrite = function (ast, context) {
            this.visitIdentifier(ast, api_1.IdentifierKind.Property);
            _super.prototype.visitPropertyWrite.call(this, ast, context);
        };
        /**
         * Visits an identifier, adding it to the identifier store if it is useful for indexing.
         *
         * @param ast expression AST the identifier is in
         * @param kind identifier kind
         */
        ExpressionVisitor.prototype.visitIdentifier = function (ast, kind) {
            // The definition of a non-top-level property such as `bar` in `{{foo.bar}}` is currently
            // impossible to determine by an indexer and unsupported by the indexing module.
            // The indexing module also does not currently support references to identifiers declared in the
            // template itself, which have a non-null expression target.
            if (!(ast.receiver instanceof compiler_1.ImplicitReceiver)) {
                return;
            }
            // Get the location of the identifier of real interest.
            // The compiler's expression parser records the location of some expressions in a manner not
            // useful to the indexer. For example, a `MethodCall` `foo(a, b)` will record the span of the
            // entire method call, but the indexer is interested only in the method identifier.
            var localExpression = this.expressionStr.substr(ast.span.start);
            if (!localExpression.includes(ast.name)) {
                throw new Error("Impossible state: \"" + ast.name + "\" not found in \"" + localExpression + "\"");
            }
            var identifierStart = ast.span.start + localExpression.indexOf(ast.name);
            // Join the relative position of the expression within a node with the absolute position
            // of the node to get the absolute position of the expression in the source code.
            var absoluteStart = this.absoluteOffset + identifierStart;
            var span = new api_1.AbsoluteSourceSpan(absoluteStart, absoluteStart + ast.name.length);
            var targetAst = this.boundTemplate.getExpressionTarget(ast);
            var target = targetAst ? this.targetToIdentifier(targetAst) : null;
            var identifier = {
                name: ast.name,
                span: span,
                kind: kind,
                target: target,
            };
            this.identifiers.push(identifier);
        };
        return ExpressionVisitor;
    }(compiler_1.RecursiveAstVisitor));
    /**
     * Visits the AST of a parsed Angular template. Discovers and stores
     * identifiers of interest, deferring to an `ExpressionVisitor` as needed.
     */
    var TemplateVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(TemplateVisitor, _super);
        /**
         * Creates a template visitor for a bound template target. The bound target can be used when
         * deferred to the expression visitor to get information about the target of an expression.
         *
         * @param boundTemplate bound template target
         */
        function TemplateVisitor(boundTemplate) {
            var _this = _super.call(this) || this;
            _this.boundTemplate = boundTemplate;
            // Identifiers of interest found in the template.
            _this.identifiers = new Set();
            // Map of targets in a template to their identifiers.
            _this.targetIdentifierCache = new Map();
            // Map of elements and templates to their identifiers.
            _this.elementAndTemplateIdentifierCache = new Map();
            return _this;
        }
        /**
         * Visits a node in the template.
         *
         * @param node node to visit
         */
        TemplateVisitor.prototype.visit = function (node) {
            node.visit(this);
        };
        TemplateVisitor.prototype.visitAll = function (nodes) {
            var _this = this;
            nodes.forEach(function (node) { return _this.visit(node); });
        };
        /**
         * Add an identifier for an HTML element and visit its children recursively.
         *
         * @param element
         */
        TemplateVisitor.prototype.visitElement = function (element) {
            var elementIdentifier = this.elementOrTemplateToIdentifier(element);
            this.identifiers.add(elementIdentifier);
            this.visitAll(element.references);
            this.visitAll(element.inputs);
            this.visitAll(element.attributes);
            this.visitAll(element.children);
            this.visitAll(element.outputs);
        };
        TemplateVisitor.prototype.visitTemplate = function (template) {
            var templateIdentifier = this.elementOrTemplateToIdentifier(template);
            this.identifiers.add(templateIdentifier);
            this.visitAll(template.variables);
            this.visitAll(template.attributes);
            this.visitAll(template.templateAttrs);
            this.visitAll(template.children);
            this.visitAll(template.references);
        };
        TemplateVisitor.prototype.visitBoundAttribute = function (attribute) {
            var _this = this;
            // A BoundAttribute's value (the parent AST) may have subexpressions (children ASTs) that have
            // recorded spans extending past the recorded span of the parent. The most common example of
            // this is with `*ngFor`.
            // To resolve this, use the information on the BoundAttribute Template AST, which is always
            // correct, to determine locations of identifiers in the expression.
            //
            // TODO(ayazhafiz): Remove this when https://github.com/angular/angular/pull/31813 lands.
            var attributeSrc = attribute.sourceSpan.toString();
            var attributeAbsolutePosition = attribute.sourceSpan.start.offset;
            // Skip the bytes of the attribute name so that there are no collisions between the attribute
            // name and expression identifier names later.
            var nameSkipOffet = attributeSrc.indexOf(attribute.name) + attribute.name.length;
            var expressionSrc = attributeSrc.substring(nameSkipOffet);
            var expressionAbsolutePosition = attributeAbsolutePosition + nameSkipOffet;
            var identifiers = ExpressionVisitor.getIdentifiers(attribute.value, expressionSrc, expressionAbsolutePosition, this.boundTemplate, this.targetToIdentifier.bind(this));
            identifiers.forEach(function (id) { return _this.identifiers.add(id); });
        };
        TemplateVisitor.prototype.visitBoundEvent = function (attribute) {
            this.visitExpression(attribute.handler);
        };
        TemplateVisitor.prototype.visitBoundText = function (text) {
            this.visitExpression(text.value);
        };
        TemplateVisitor.prototype.visitReference = function (reference) {
            var referenceIdentifer = this.targetToIdentifier(reference);
            this.identifiers.add(referenceIdentifer);
        };
        TemplateVisitor.prototype.visitVariable = function (variable) {
            var variableIdentifier = this.targetToIdentifier(variable);
            this.identifiers.add(variableIdentifier);
        };
        /** Creates an identifier for a template element or template node. */
        TemplateVisitor.prototype.elementOrTemplateToIdentifier = function (node) {
            // If this node has already been seen, return the cached result.
            if (this.elementAndTemplateIdentifierCache.has(node)) {
                return this.elementAndTemplateIdentifierCache.get(node);
            }
            var name;
            var kind;
            if (node instanceof compiler_1.TmplAstTemplate) {
                name = node.tagName;
                kind = api_1.IdentifierKind.Template;
            }
            else {
                name = node.name;
                kind = api_1.IdentifierKind.Element;
            }
            var sourceSpan = node.sourceSpan;
            // An element's or template's source span can be of the form `<element>`, `<element />`, or
            // `<element></element>`. Only the selector is interesting to the indexer, so the source is
            // searched for the first occurrence of the element (selector) name.
            var start = this.getStartLocation(name, sourceSpan);
            var absoluteSpan = new api_1.AbsoluteSourceSpan(start, start + name.length);
            // Record the nodes's attributes, which an indexer can later traverse to see if any of them
            // specify a used directive on the node.
            var attributes = node.attributes.map(function (_a) {
                var name = _a.name, sourceSpan = _a.sourceSpan;
                return {
                    name: name,
                    span: new api_1.AbsoluteSourceSpan(sourceSpan.start.offset, sourceSpan.end.offset),
                    kind: api_1.IdentifierKind.Attribute,
                };
            });
            var usedDirectives = this.boundTemplate.getDirectivesOfNode(node) || [];
            var identifier = {
                name: name,
                span: absoluteSpan,
                kind: kind,
                attributes: new Set(attributes),
                usedDirectives: new Set(usedDirectives.map(function (dir) {
                    return {
                        node: dir.ref.node,
                        selector: dir.selector,
                    };
                })),
            };
            this.elementAndTemplateIdentifierCache.set(node, identifier);
            return identifier;
        };
        /** Creates an identifier for a template reference or template variable target. */
        TemplateVisitor.prototype.targetToIdentifier = function (node) {
            // If this node has already been seen, return the cached result.
            if (this.targetIdentifierCache.has(node)) {
                return this.targetIdentifierCache.get(node);
            }
            var name = node.name, sourceSpan = node.sourceSpan;
            var start = this.getStartLocation(name, sourceSpan);
            var span = new api_1.AbsoluteSourceSpan(start, start + name.length);
            var identifier;
            if (node instanceof compiler_1.TmplAstReference) {
                // If the node is a reference, we care about its target. The target can be an element, a
                // template, a directive applied on a template or element (in which case the directive field
                // is non-null), or nothing at all.
                var refTarget = this.boundTemplate.getReferenceTarget(node);
                var target = null;
                if (refTarget) {
                    if (refTarget instanceof compiler_1.TmplAstElement || refTarget instanceof compiler_1.TmplAstTemplate) {
                        target = {
                            node: this.elementOrTemplateToIdentifier(refTarget),
                            directive: null,
                        };
                    }
                    else {
                        target = {
                            node: this.elementOrTemplateToIdentifier(refTarget.node),
                            directive: refTarget.directive.ref.node,
                        };
                    }
                }
                identifier = {
                    name: name,
                    span: span,
                    kind: api_1.IdentifierKind.Reference,
                    target: target,
                };
            }
            else {
                identifier = {
                    name: name,
                    span: span,
                    kind: api_1.IdentifierKind.Variable,
                };
            }
            this.targetIdentifierCache.set(node, identifier);
            return identifier;
        };
        /** Gets the start location of a string in a SourceSpan */
        TemplateVisitor.prototype.getStartLocation = function (name, context) {
            var localStr = context.toString();
            if (!localStr.includes(name)) {
                throw new Error("Impossible state: \"" + name + "\" not found in \"" + localStr + "\"");
            }
            return context.start.offset + localStr.indexOf(name);
        };
        /**
         * Visits a node's expression and adds its identifiers, if any, to the visitor's state.
         * Only ASTs with information about the expression source and its location are visited.
         *
         * @param node node whose expression to visit
         */
        TemplateVisitor.prototype.visitExpression = function (ast) {
            var _this = this;
            // Only include ASTs that have information about their source and absolute source spans.
            if (ast instanceof compiler_1.ASTWithSource && ast.source !== null) {
                // Make target to identifier mapping closure stateful to this visitor instance.
                var targetToIdentifier = this.targetToIdentifier.bind(this);
                var absoluteOffset = ast.sourceSpan.start;
                var identifiers = ExpressionVisitor.getIdentifiers(ast, ast.source, absoluteOffset, this.boundTemplate, targetToIdentifier);
                identifiers.forEach(function (id) { return _this.identifiers.add(id); });
            }
        };
        return TemplateVisitor;
    }(compiler_1.TmplAstRecursiveVisitor));
    /**
     * Traverses a template AST and builds identifiers discovered in it.
     *
     * @param boundTemplate bound template target, which can be used for querying expression targets.
     * @return identifiers in template
     */
    function getTemplateIdentifiers(boundTemplate) {
        var visitor = new TemplateVisitor(boundTemplate);
        if (boundTemplate.target.template !== undefined) {
            visitor.visitAll(boundTemplate.target.template);
        }
        return visitor.identifiers;
    }
    exports.getTemplateIdentifiers = getTemplateIdentifiers;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2luZGV4ZXIvc3JjL3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDhDQUF5VTtJQUN6VSx1RUFBNE47SUFpQjVOOzs7Ozs7OztPQVFHO0lBQ0g7UUFBZ0MsNkNBQW1CO1FBR2pELDJCQUNxQixhQUFxQixFQUFtQixjQUFzQixFQUM5RCxhQUF5QyxFQUN6QyxrQkFBNEQ7WUFIakYsWUFJRSxpQkFBTyxTQUNSO1lBSm9CLG1CQUFhLEdBQWIsYUFBYSxDQUFRO1lBQW1CLG9CQUFjLEdBQWQsY0FBYyxDQUFRO1lBQzlELG1CQUFhLEdBQWIsYUFBYSxDQUE0QjtZQUN6Qyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBDO1lBTHhFLGlCQUFXLEdBQTJCLEVBQUUsQ0FBQzs7UUFPbEQsQ0FBQztRQUVEOzs7Ozs7Ozs7O1dBVUc7UUFDSSxnQ0FBYyxHQUFyQixVQUNJLEdBQVEsRUFBRSxNQUFjLEVBQUUsY0FBc0IsRUFBRSxhQUF5QyxFQUMzRixrQkFBNEQ7WUFDOUQsSUFBTSxPQUFPLEdBQ1QsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzdCLENBQUM7UUFFRCxpQ0FBSyxHQUFMLFVBQU0sR0FBUTtZQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELDJDQUFlLEdBQWYsVUFBZ0IsR0FBZSxFQUFFLE9BQVc7WUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUs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QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUQsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzVDLElBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FDaEQsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDN0UsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7YUFDckQ7UUFDSCxDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQUFDLEFBck9ELENBQThCLGtDQUF1QixHQXFPcEQ7SUFFRDs7Ozs7T0FLRztJQUNILFNBQWdCLHNCQUFzQixDQUFDLGFBQXlDO1FBRTlFLElBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUM3QixDQUFDO0lBUEQsd0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FTVCwgQVNUV2l0aFNvdXJjZSwgQm91bmRUYXJnZXQsIEltcGxpY2l0UmVjZWl2ZXIsIE1ldGhvZENhbGwsIFBhcnNlU291cmNlU3BhbiwgUHJvcGVydHlSZWFkLCBQcm9wZXJ0eVdyaXRlLCBSZWN1cnNpdmVBc3RWaXNpdG9yLCBUbXBsQXN0Qm91bmRBdHRyaWJ1dGUsIFRtcGxBc3RCb3VuZEV2ZW50LCBUbXBsQXN0Qm91bmRUZXh0LCBUbXBsQXN0RWxlbWVudCwgVG1wbEFzdE5vZGUsIFRtcGxBc3RSZWN1cnNpdmVWaXNpdG9yLCBUbXBsQXN0UmVmZXJlbmNlLCBUbXBsQXN0VGVtcGxhdGUsIFRtcGxBc3RWYXJpYWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtBYnNvbHV0ZVNvdXJjZVNwYW4sIEF0dHJpYnV0ZUlkZW50aWZpZXIsIEVsZW1lbnRJZGVudGlmaWVyLCBJZGVudGlmaWVyS2luZCwgTWV0aG9kSWRlbnRpZmllciwgUHJvcGVydHlJZGVudGlmaWVyLCBSZWZlcmVuY2VJZGVudGlmaWVyLCBUZW1wbGF0ZU5vZGVJZGVudGlmaWVyLCBUb3BMZXZlbElkZW50aWZpZXIsIFZhcmlhYmxlSWRlbnRpZmllcn0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtDb21wb25lbnRNZXRhfSBmcm9tICcuL2NvbnRleHQnO1xuXG4vKipcbiAqIEEgcGFyc2VkIG5vZGUgaW4gYSB0ZW1wbGF0ZSwgd2hpY2ggbWF5IGhhdmUgYSBuYW1lIChpZiBpdCBpcyBhIHNlbGVjdG9yKSBvclxuICogYmUgYW5vbnltb3VzIChsaWtlIGEgdGV4dCBzcGFuKS5cbiAqL1xuaW50ZXJmYWNlIEhUTUxOb2RlIGV4dGVuZHMgVG1wbEFzdE5vZGUge1xuICB0YWdOYW1lPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG50eXBlIEV4cHJlc3Npb25JZGVudGlmaWVyID0gUHJvcGVydHlJZGVudGlmaWVyfE1ldGhvZElkZW50aWZpZXI7XG50eXBlIFRtcGxUYXJnZXQgPSBUbXBsQXN0UmVmZXJlbmNlfFRtcGxBc3RWYXJpYWJsZTtcbnR5cGUgVGFyZ2V0SWRlbnRpZmllciA9IFJlZmVyZW5jZUlkZW50aWZpZXJ8VmFyaWFibGVJZGVudGlmaWVyO1xudHlwZSBUYXJnZXRJZGVudGlmaWVyTWFwID0gTWFwPFRtcGxUYXJnZXQsIFRhcmdldElkZW50aWZpZXI+O1xuXG4vKipcbiAqIFZpc2l0cyB0aGUgQVNUIG9mIGFuIEFuZ3VsYXIgdGVtcGxhdGUgc3ludGF4IGV4cHJlc3Npb24sIGZpbmRpbmcgaW50ZXJlc3RpbmdcbiAqIGVudGl0aWVzICh2YXJpYWJsZSByZWZlcmVuY2VzLCBldGMuKS4gQ3JlYXRlcyBhbiBhcnJheSBvZiBFbnRpdGllcyBmb3VuZCBpblxuICogdGhlIGV4cHJlc3Npb24sIHdpdGggdGhlIGxvY2F0aW9uIG9mIHRoZSBFbnRpdGllcyBiZWluZyByZWxhdGl2ZSB0byB0aGVcbiAqIGV4cHJlc3Npb24uXG4gKlxuICogVmlzaXRpbmcgYHRleHQge3twcm9wfX1gIHdpbGwgcmV0dXJuXG4gKiBgW1RvcExldmVsSWRlbnRpZmllciB7bmFtZTogJ3Byb3AnLCBzcGFuOiB7c3RhcnQ6IDcsIGVuZDogMTF9fV1gLlxuICovXG5jbGFzcyBFeHByZXNzaW9uVmlzaXRvciBleHRlbmRzIFJlY3Vyc2l2ZUFzdFZpc2l0b3Ige1xuICByZWFkb25seSBpZGVudGlmaWVyczogRXhwcmVzc2lvbklkZW50aWZpZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IGV4cHJlc3Npb25TdHI6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBhYnNvbHV0ZU9mZnNldDogbnVtYmVyLFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBib3VuZFRlbXBsYXRlOiBCb3VuZFRhcmdldDxDb21wb25lbnRNZXRhPixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0VG9JZGVudGlmaWVyOiAodGFyZ2V0OiBUbXBsVGFyZ2V0KSA9PiBUYXJnZXRJZGVudGlmaWVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlkZW50aWZpZXJzIGRpc2NvdmVyZWQgaW4gYW4gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIGFzdCBleHByZXNzaW9uIEFTVCB0byB2aXNpdFxuICAgKiBAcGFyYW0gc291cmNlIGV4cHJlc3Npb24gQVNUIHNvdXJjZSBjb2RlXG4gICAqIEBwYXJhbSBhYnNvbHV0ZU9mZnNldCBhYnNvbHV0ZSBieXRlIG9mZnNldCBmcm9tIHN0YXJ0IG9mIHRoZSBmaWxlIHRvIHRoZSBzdGFydCBvZiB0aGUgQVNUXG4gICAqIHNvdXJjZSBjb2RlLlxuICAgKiBAcGFyYW0gYm91bmRUZW1wbGF0ZSBib3VuZCB0YXJnZXQgb2YgdGhlIGVudGlyZSB0ZW1wbGF0ZSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gcXVlcnkgZm9yIHRoZVxuICAgKiBlbnRpdGllcyBleHByZXNzaW9ucyB0YXJnZXQuXG4gICAqIEBwYXJhbSB0YXJnZXRUb0lkZW50aWZpZXIgY2xvc3VyZSBjb252ZXJ0aW5nIGEgdGVtcGxhdGUgdGFyZ2V0IG5vZGUgdG8gaXRzIGlkZW50aWZpZXIuXG4gICAqL1xuICBzdGF0aWMgZ2V0SWRlbnRpZmllcnMoXG4gICAgICBhc3Q6IEFTVCwgc291cmNlOiBzdHJpbmcsIGFic29sdXRlT2Zmc2V0OiBudW1iZXIsIGJvdW5kVGVtcGxhdGU6IEJvdW5kVGFyZ2V0PENvbXBvbmVudE1ldGE+LFxuICAgICAgdGFyZ2V0VG9JZGVudGlmaWVyOiAodGFyZ2V0OiBUbXBsVGFyZ2V0KSA9PiBUYXJnZXRJZGVudGlmaWVyKTogVG9wTGV2ZWxJZGVudGlmaWVyW10ge1xuICAgIGNvbnN0IHZpc2l0b3IgPVxuICAgICAgICBuZXcgRXhwcmVzc2lvblZpc2l0b3Ioc291cmNlLCBhYnNvbHV0ZU9mZnNldCwgYm91bmRUZW1wbGF0ZSwgdGFyZ2V0VG9JZGVudGlmaWVyKTtcbiAgICB2aXNpdG9yLnZpc2l0KGFzdCk7XG4gICAgcmV0dXJuIHZpc2l0b3IuaWRlbnRpZmllcnM7XG4gIH1cblxuICB2aXNpdChhc3Q6IEFTVCkge1xuICAgIGFzdC52aXNpdCh0aGlzKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IHt9KSB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXIoYXN0LCBJZGVudGlmaWVyS2luZC5NZXRob2QpO1xuICAgIHN1cGVyLnZpc2l0TWV0aG9kQ2FsbChhc3QsIGNvbnRleHQpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IHt9KSB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXIoYXN0LCBJZGVudGlmaWVyS2luZC5Qcm9wZXJ0eSk7XG4gICAgc3VwZXIudmlzaXRQcm9wZXJ0eVJlYWQoYXN0LCBjb250ZXh0KTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IHt9KSB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXIoYXN0LCBJZGVudGlmaWVyS2luZC5Qcm9wZXJ0eSk7XG4gICAgc3VwZXIudmlzaXRQcm9wZXJ0eVdyaXRlKGFzdCwgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVmlzaXRzIGFuIGlkZW50aWZpZXIsIGFkZGluZyBpdCB0byB0aGUgaWRlbnRpZmllciBzdG9yZSBpZiBpdCBpcyB1c2VmdWwgZm9yIGluZGV4aW5nLlxuICAgKlxuICAgKiBAcGFyYW0gYXN0IGV4cHJlc3Npb24gQVNUIHRoZSBpZGVudGlmaWVyIGlzIGluXG4gICAqIEBwYXJhbSBraW5kIGlkZW50aWZpZXIga2luZFxuICAgKi9cbiAgcHJpdmF0ZSB2aXNpdElkZW50aWZpZXIoXG4gICAgICBhc3Q6IEFTVCZ7bmFtZTogc3RyaW5nLCByZWNlaXZlcjogQVNUfSwga2luZDogRXhwcmVzc2lvbklkZW50aWZpZXJbJ2tpbmQnXSkge1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIGEgbm9uLXRvcC1sZXZlbCBwcm9wZXJ0eSBzdWNoIGFzIGBiYXJgIGluIGB7e2Zvby5iYXJ9fWAgaXMgY3VycmVudGx5XG4gICAgLy8gaW1wb3NzaWJsZSB0byBkZXRlcm1pbmUgYnkgYW4gaW5kZXhlciBhbmQgdW5zdXBwb3J0ZWQgYnkgdGhlIGluZGV4aW5nIG1vZHVsZS5cbiAgICAvLyBUaGUgaW5kZXhpbmcgbW9kdWxlIGFsc28gZG9lcyBub3QgY3VycmVudGx5IHN1cHBvcnQgcmVmZXJlbmNlcyB0byBpZGVudGlmaWVycyBkZWNsYXJlZCBpbiB0aGVcbiAgICAvLyB0ZW1wbGF0ZSBpdHNlbGYsIHdoaWNoIGhhdmUgYSBub24tbnVsbCBleHByZXNzaW9uIHRhcmdldC5cbiAgICBpZiAoIShhc3QucmVjZWl2ZXIgaW5zdGFuY2VvZiBJbXBsaWNpdFJlY2VpdmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbG9jYXRpb24gb2YgdGhlIGlkZW50aWZpZXIgb2YgcmVhbCBpbnRlcmVzdC5cbiAgICAvLyBUaGUgY29tcGlsZXIncyBleHByZXNzaW9uIHBhcnNlciByZWNvcmRzIHRoZSBsb2NhdGlvbiBvZiBzb21lIGV4cHJlc3Npb25zIGluIGEgbWFubmVyIG5vdFxuICAgIC8vIHVzZWZ1bCB0byB0aGUgaW5kZXhlci4gRm9yIGV4YW1wbGUsIGEgYE1ldGhvZENhbGxgIGBmb28oYSwgYilgIHdpbGwgcmVjb3JkIHRoZSBzcGFuIG9mIHRoZVxuICAgIC8vIGVudGlyZSBtZXRob2QgY2FsbCwgYnV0IHRoZSBpbmRleGVyIGlzIGludGVyZXN0ZWQgb25seSBpbiB0aGUgbWV0aG9kIGlkZW50aWZpZXIuXG4gICAgY29uc3QgbG9jYWxFeHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uU3RyLnN1YnN0cihhc3Quc3Bhbi5zdGFydCk7XG4gICAgaWYgKCFsb2NhbEV4cHJlc3Npb24uaW5jbHVkZXMoYXN0Lm5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEltcG9zc2libGUgc3RhdGU6IFwiJHthc3QubmFtZX1cIiBub3QgZm91bmQgaW4gXCIke2xvY2FsRXhwcmVzc2lvbn1cImApO1xuICAgIH1cbiAgICBjb25zdCBpZGVudGlmaWVyU3RhcnQgPSBhc3Quc3Bhbi5zdGFydCArIGxvY2FsRXhwcmVzc2lvbi5pbmRleE9mKGFzdC5uYW1lKTtcblxuICAgIC8vIEpvaW4gdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBleHByZXNzaW9uIHdpdGhpbiBhIG5vZGUgd2l0aCB0aGUgYWJzb2x1dGUgcG9zaXRpb25cbiAgICAvLyBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBleHByZXNzaW9uIGluIHRoZSBzb3VyY2UgY29kZS5cbiAgICBjb25zdCBhYnNvbHV0ZVN0YXJ0ID0gdGhpcy5hYnNvbHV0ZU9mZnNldCArIGlkZW50aWZpZXJTdGFydDtcbiAgICBjb25zdCBzcGFuID0gbmV3IEFic29sdXRlU291cmNlU3BhbihhYnNvbHV0ZVN0YXJ0LCBhYnNvbHV0ZVN0YXJ0ICsgYXN0Lm5hbWUubGVuZ3RoKTtcblxuICAgIGNvbnN0IHRhcmdldEFzdCA9IHRoaXMuYm91bmRUZW1wbGF0ZS5nZXRFeHByZXNzaW9uVGFyZ2V0KGFzdCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0QXN0ID8gdGhpcy50YXJnZXRUb0lkZW50aWZpZXIodGFyZ2V0QXN0KSA6IG51bGw7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHtcbiAgICAgIG5hbWU6IGFzdC5uYW1lLFxuICAgICAgc3BhbixcbiAgICAgIGtpbmQsXG4gICAgICB0YXJnZXQsXG4gICAgfSBhcyBFeHByZXNzaW9uSWRlbnRpZmllcjtcblxuICAgIHRoaXMuaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxufVxuXG4vKipcbiAqIFZpc2l0cyB0aGUgQVNUIG9mIGEgcGFyc2VkIEFuZ3VsYXIgdGVtcGxhdGUuIERpc2NvdmVycyBhbmQgc3RvcmVzXG4gKiBpZGVudGlmaWVycyBvZiBpbnRlcmVzdCwgZGVmZXJyaW5nIHRvIGFuIGBFeHByZXNzaW9uVmlzaXRvcmAgYXMgbmVlZGVkLlxuICovXG5jbGFzcyBUZW1wbGF0ZVZpc2l0b3IgZXh0ZW5kcyBUbXBsQXN0UmVjdXJzaXZlVmlzaXRvciB7XG4gIC8vIElkZW50aWZpZXJzIG9mIGludGVyZXN0IGZvdW5kIGluIHRoZSB0ZW1wbGF0ZS5cbiAgcmVhZG9ubHkgaWRlbnRpZmllcnMgPSBuZXcgU2V0PFRvcExldmVsSWRlbnRpZmllcj4oKTtcblxuICAvLyBNYXAgb2YgdGFyZ2V0cyBpbiBhIHRlbXBsYXRlIHRvIHRoZWlyIGlkZW50aWZpZXJzLlxuICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldElkZW50aWZpZXJDYWNoZTogVGFyZ2V0SWRlbnRpZmllck1hcCA9IG5ldyBNYXAoKTtcblxuICAvLyBNYXAgb2YgZWxlbWVudHMgYW5kIHRlbXBsYXRlcyB0byB0aGVpciBpZGVudGlmaWVycy5cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50QW5kVGVtcGxhdGVJZGVudGlmaWVyQ2FjaGUgPVxuICAgICAgbmV3IE1hcDxUbXBsQXN0RWxlbWVudHxUbXBsQXN0VGVtcGxhdGUsIEVsZW1lbnRJZGVudGlmaWVyfFRlbXBsYXRlTm9kZUlkZW50aWZpZXI+KCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSB2aXNpdG9yIGZvciBhIGJvdW5kIHRlbXBsYXRlIHRhcmdldC4gVGhlIGJvdW5kIHRhcmdldCBjYW4gYmUgdXNlZCB3aGVuXG4gICAqIGRlZmVycmVkIHRvIHRoZSBleHByZXNzaW9uIHZpc2l0b3IgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0YXJnZXQgb2YgYW4gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIGJvdW5kVGVtcGxhdGUgYm91bmQgdGVtcGxhdGUgdGFyZ2V0XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdW5kVGVtcGxhdGU6IEJvdW5kVGFyZ2V0PENvbXBvbmVudE1ldGE+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpdHMgYSBub2RlIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIG5vZGUgbm9kZSB0byB2aXNpdFxuICAgKi9cbiAgdmlzaXQobm9kZTogSFRNTE5vZGUpIHtcbiAgICBub2RlLnZpc2l0KHRoaXMpO1xuICB9XG5cbiAgdmlzaXRBbGwobm9kZXM6IFRtcGxBc3ROb2RlW10pIHtcbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy52aXNpdChub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGlkZW50aWZpZXIgZm9yIGFuIEhUTUwgZWxlbWVudCBhbmQgdmlzaXQgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IFRtcGxBc3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudElkZW50aWZpZXIgPSB0aGlzLmVsZW1lbnRPclRlbXBsYXRlVG9JZGVudGlmaWVyKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVycy5hZGQoZWxlbWVudElkZW50aWZpZXIpO1xuXG4gICAgdGhpcy52aXNpdEFsbChlbGVtZW50LnJlZmVyZW5jZXMpO1xuICAgIHRoaXMudmlzaXRBbGwoZWxlbWVudC5pbnB1dHMpO1xuICAgIHRoaXMudmlzaXRBbGwoZWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICB0aGlzLnZpc2l0QWxsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIHRoaXMudmlzaXRBbGwoZWxlbWVudC5vdXRwdXRzKTtcbiAgfVxuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiBUbXBsQXN0VGVtcGxhdGUpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUlkZW50aWZpZXIgPSB0aGlzLmVsZW1lbnRPclRlbXBsYXRlVG9JZGVudGlmaWVyKHRlbXBsYXRlKTtcblxuICAgIHRoaXMuaWRlbnRpZmllcnMuYWRkKHRlbXBsYXRlSWRlbnRpZmllcik7XG5cbiAgICB0aGlzLnZpc2l0QWxsKHRlbXBsYXRlLnZhcmlhYmxlcyk7XG4gICAgdGhpcy52aXNpdEFsbCh0ZW1wbGF0ZS5hdHRyaWJ1dGVzKTtcbiAgICB0aGlzLnZpc2l0QWxsKHRlbXBsYXRlLnRlbXBsYXRlQXR0cnMpO1xuICAgIHRoaXMudmlzaXRBbGwodGVtcGxhdGUuY2hpbGRyZW4pO1xuICAgIHRoaXMudmlzaXRBbGwodGVtcGxhdGUucmVmZXJlbmNlcyk7XG4gIH1cbiAgdmlzaXRCb3VuZEF0dHJpYnV0ZShhdHRyaWJ1dGU6IFRtcGxBc3RCb3VuZEF0dHJpYnV0ZSkge1xuICAgIC8vIEEgQm91bmRBdHRyaWJ1dGUncyB2YWx1ZSAodGhlIHBhcmVudCBBU1QpIG1heSBoYXZlIHN1YmV4cHJlc3Npb25zIChjaGlsZHJlbiBBU1RzKSB0aGF0IGhhdmVcbiAgICAvLyByZWNvcmRlZCBzcGFucyBleHRlbmRpbmcgcGFzdCB0aGUgcmVjb3JkZWQgc3BhbiBvZiB0aGUgcGFyZW50LiBUaGUgbW9zdCBjb21tb24gZXhhbXBsZSBvZlxuICAgIC8vIHRoaXMgaXMgd2l0aCBgKm5nRm9yYC5cbiAgICAvLyBUbyByZXNvbHZlIHRoaXMsIHVzZSB0aGUgaW5mb3JtYXRpb24gb24gdGhlIEJvdW5kQXR0cmlidXRlIFRlbXBsYXRlIEFTVCwgd2hpY2ggaXMgYWx3YXlzXG4gICAgLy8gY29ycmVjdCwgdG8gZGV0ZXJtaW5lIGxvY2F0aW9ucyBvZiBpZGVudGlmaWVycyBpbiB0aGUgZXhwcmVzc2lvbi5cbiAgICAvL1xuICAgIC8vIFRPRE8oYXlhemhhZml6KTogUmVtb3ZlIHRoaXMgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMzE4MTMgbGFuZHMuXG4gICAgY29uc3QgYXR0cmlidXRlU3JjID0gYXR0cmlidXRlLnNvdXJjZVNwYW4udG9TdHJpbmcoKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVBYnNvbHV0ZVBvc2l0aW9uID0gYXR0cmlidXRlLnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0O1xuXG4gICAgLy8gU2tpcCB0aGUgYnl0ZXMgb2YgdGhlIGF0dHJpYnV0ZSBuYW1lIHNvIHRoYXQgdGhlcmUgYXJlIG5vIGNvbGxpc2lvbnMgYmV0d2VlbiB0aGUgYXR0cmlidXRlXG4gICAgLy8gbmFtZSBhbmQgZXhwcmVzc2lvbiBpZGVudGlmaWVyIG5hbWVzIGxhdGVyLlxuICAgIGNvbnN0IG5hbWVTa2lwT2ZmZXQgPSBhdHRyaWJ1dGVTcmMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgKyBhdHRyaWJ1dGUubmFtZS5sZW5ndGg7XG4gICAgY29uc3QgZXhwcmVzc2lvblNyYyA9IGF0dHJpYnV0ZVNyYy5zdWJzdHJpbmcobmFtZVNraXBPZmZldCk7XG4gICAgY29uc3QgZXhwcmVzc2lvbkFic29sdXRlUG9zaXRpb24gPSBhdHRyaWJ1dGVBYnNvbHV0ZVBvc2l0aW9uICsgbmFtZVNraXBPZmZldDtcblxuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gRXhwcmVzc2lvblZpc2l0b3IuZ2V0SWRlbnRpZmllcnMoXG4gICAgICAgIGF0dHJpYnV0ZS52YWx1ZSwgZXhwcmVzc2lvblNyYywgZXhwcmVzc2lvbkFic29sdXRlUG9zaXRpb24sIHRoaXMuYm91bmRUZW1wbGF0ZSxcbiAgICAgICAgdGhpcy50YXJnZXRUb0lkZW50aWZpZXIuYmluZCh0aGlzKSk7XG4gICAgaWRlbnRpZmllcnMuZm9yRWFjaChpZCA9PiB0aGlzLmlkZW50aWZpZXJzLmFkZChpZCkpO1xuICB9XG4gIHZpc2l0Qm91bmRFdmVudChhdHRyaWJ1dGU6IFRtcGxBc3RCb3VuZEV2ZW50KSB7XG4gICAgdGhpcy52aXNpdEV4cHJlc3Npb24oYXR0cmlidXRlLmhhbmRsZXIpO1xuICB9XG4gIHZpc2l0Qm91bmRUZXh0KHRleHQ6IFRtcGxBc3RCb3VuZFRleHQpIHtcbiAgICB0aGlzLnZpc2l0RXhwcmVzc2lvbih0ZXh0LnZhbHVlKTtcbiAgfVxuICB2aXNpdFJlZmVyZW5jZShyZWZlcmVuY2U6IFRtcGxBc3RSZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VJZGVudGlmZXIgPSB0aGlzLnRhcmdldFRvSWRlbnRpZmllcihyZWZlcmVuY2UpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVycy5hZGQocmVmZXJlbmNlSWRlbnRpZmVyKTtcbiAgfVxuICB2aXNpdFZhcmlhYmxlKHZhcmlhYmxlOiBUbXBsQXN0VmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnRhcmdldFRvSWRlbnRpZmllcih2YXJpYWJsZSk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXJzLmFkZCh2YXJpYWJsZUlkZW50aWZpZXIpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYW4gaWRlbnRpZmllciBmb3IgYSB0ZW1wbGF0ZSBlbGVtZW50IG9yIHRlbXBsYXRlIG5vZGUuICovXG4gIHByaXZhdGUgZWxlbWVudE9yVGVtcGxhdGVUb0lkZW50aWZpZXIobm9kZTogVG1wbEFzdEVsZW1lbnR8VG1wbEFzdFRlbXBsYXRlKTogRWxlbWVudElkZW50aWZpZXJcbiAgICAgIHxUZW1wbGF0ZU5vZGVJZGVudGlmaWVyIHtcbiAgICAvLyBJZiB0aGlzIG5vZGUgaGFzIGFscmVhZHkgYmVlbiBzZWVuLCByZXR1cm4gdGhlIGNhY2hlZCByZXN1bHQuXG4gICAgaWYgKHRoaXMuZWxlbWVudEFuZFRlbXBsYXRlSWRlbnRpZmllckNhY2hlLmhhcyhub2RlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudEFuZFRlbXBsYXRlSWRlbnRpZmllckNhY2hlLmdldChub2RlKSE7XG4gICAgfVxuXG4gICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICBsZXQga2luZDogSWRlbnRpZmllcktpbmQuRWxlbWVudHxJZGVudGlmaWVyS2luZC5UZW1wbGF0ZTtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RUZW1wbGF0ZSkge1xuICAgICAgbmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgIGtpbmQgPSBJZGVudGlmaWVyS2luZC5UZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5vZGUubmFtZTtcbiAgICAgIGtpbmQgPSBJZGVudGlmaWVyS2luZC5FbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCB7c291cmNlU3Bhbn0gPSBub2RlO1xuICAgIC8vIEFuIGVsZW1lbnQncyBvciB0ZW1wbGF0ZSdzIHNvdXJjZSBzcGFuIGNhbiBiZSBvZiB0aGUgZm9ybSBgPGVsZW1lbnQ+YCwgYDxlbGVtZW50IC8+YCwgb3JcbiAgICAvLyBgPGVsZW1lbnQ+PC9lbGVtZW50PmAuIE9ubHkgdGhlIHNlbGVjdG9yIGlzIGludGVyZXN0aW5nIHRvIHRoZSBpbmRleGVyLCBzbyB0aGUgc291cmNlIGlzXG4gICAgLy8gc2VhcmNoZWQgZm9yIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBlbGVtZW50IChzZWxlY3RvcikgbmFtZS5cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuZ2V0U3RhcnRMb2NhdGlvbihuYW1lLCBzb3VyY2VTcGFuKTtcbiAgICBjb25zdCBhYnNvbHV0ZVNwYW4gPSBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKHN0YXJ0LCBzdGFydCArIG5hbWUubGVuZ3RoKTtcblxuICAgIC8vIFJlY29yZCB0aGUgbm9kZXMncyBhdHRyaWJ1dGVzLCB3aGljaCBhbiBpbmRleGVyIGNhbiBsYXRlciB0cmF2ZXJzZSB0byBzZWUgaWYgYW55IG9mIHRoZW1cbiAgICAvLyBzcGVjaWZ5IGEgdXNlZCBkaXJlY3RpdmUgb24gdGhlIG5vZGUuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcy5tYXAoKHtuYW1lLCBzb3VyY2VTcGFufSk6IEF0dHJpYnV0ZUlkZW50aWZpZXIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3BhbjogbmV3IEFic29sdXRlU291cmNlU3Bhbihzb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCwgc291cmNlU3Bhbi5lbmQub2Zmc2V0KSxcbiAgICAgICAga2luZDogSWRlbnRpZmllcktpbmQuQXR0cmlidXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCB1c2VkRGlyZWN0aXZlcyA9IHRoaXMuYm91bmRUZW1wbGF0ZS5nZXREaXJlY3RpdmVzT2ZOb2RlKG5vZGUpIHx8IFtdO1xuXG4gICAgY29uc3QgaWRlbnRpZmllciA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBzcGFuOiBhYnNvbHV0ZVNwYW4sXG4gICAgICBraW5kLFxuICAgICAgYXR0cmlidXRlczogbmV3IFNldChhdHRyaWJ1dGVzKSxcbiAgICAgIHVzZWREaXJlY3RpdmVzOiBuZXcgU2V0KHVzZWREaXJlY3RpdmVzLm1hcChkaXIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGU6IGRpci5yZWYubm9kZSxcbiAgICAgICAgICBzZWxlY3RvcjogZGlyLnNlbGVjdG9yLFxuICAgICAgICB9O1xuICAgICAgfSkpLFxuICAgICAgLy8gY2FzdCBiL2MgcHJlLVR5cGVTY3JpcHQgMy41IHVuaW9ucyBhcmVuJ3Qgd2VsbCBkaXNjcmltaW5hdGVkXG4gICAgfSBhcyBFbGVtZW50SWRlbnRpZmllciB8XG4gICAgICAgIFRlbXBsYXRlTm9kZUlkZW50aWZpZXI7XG5cbiAgICB0aGlzLmVsZW1lbnRBbmRUZW1wbGF0ZUlkZW50aWZpZXJDYWNoZS5zZXQobm9kZSwgaWRlbnRpZmllcik7XG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhbiBpZGVudGlmaWVyIGZvciBhIHRlbXBsYXRlIHJlZmVyZW5jZSBvciB0ZW1wbGF0ZSB2YXJpYWJsZSB0YXJnZXQuICovXG4gIHByaXZhdGUgdGFyZ2V0VG9JZGVudGlmaWVyKG5vZGU6IFRtcGxBc3RSZWZlcmVuY2V8VG1wbEFzdFZhcmlhYmxlKTogVGFyZ2V0SWRlbnRpZmllciB7XG4gICAgLy8gSWYgdGhpcyBub2RlIGhhcyBhbHJlYWR5IGJlZW4gc2VlbiwgcmV0dXJuIHRoZSBjYWNoZWQgcmVzdWx0LlxuICAgIGlmICh0aGlzLnRhcmdldElkZW50aWZpZXJDYWNoZS5oYXMobm9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldElkZW50aWZpZXJDYWNoZS5nZXQobm9kZSkhO1xuICAgIH1cblxuICAgIGNvbnN0IHtuYW1lLCBzb3VyY2VTcGFufSA9IG5vZGU7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0TG9jYXRpb24obmFtZSwgc291cmNlU3Bhbik7XG4gICAgY29uc3Qgc3BhbiA9IG5ldyBBYnNvbHV0ZVNvdXJjZVNwYW4oc3RhcnQsIHN0YXJ0ICsgbmFtZS5sZW5ndGgpO1xuICAgIGxldCBpZGVudGlmaWVyOiBSZWZlcmVuY2VJZGVudGlmaWVyfFZhcmlhYmxlSWRlbnRpZmllcjtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RSZWZlcmVuY2UpIHtcbiAgICAgIC8vIElmIHRoZSBub2RlIGlzIGEgcmVmZXJlbmNlLCB3ZSBjYXJlIGFib3V0IGl0cyB0YXJnZXQuIFRoZSB0YXJnZXQgY2FuIGJlIGFuIGVsZW1lbnQsIGFcbiAgICAgIC8vIHRlbXBsYXRlLCBhIGRpcmVjdGl2ZSBhcHBsaWVkIG9uIGEgdGVtcGxhdGUgb3IgZWxlbWVudCAoaW4gd2hpY2ggY2FzZSB0aGUgZGlyZWN0aXZlIGZpZWxkXG4gICAgICAvLyBpcyBub24tbnVsbCksIG9yIG5vdGhpbmcgYXQgYWxsLlxuICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGhpcy5ib3VuZFRlbXBsYXRlLmdldFJlZmVyZW5jZVRhcmdldChub2RlKTtcbiAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xuICAgICAgaWYgKHJlZlRhcmdldCkge1xuICAgICAgICBpZiAocmVmVGFyZ2V0IGluc3RhbmNlb2YgVG1wbEFzdEVsZW1lbnQgfHwgcmVmVGFyZ2V0IGluc3RhbmNlb2YgVG1wbEFzdFRlbXBsYXRlKSB7XG4gICAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgICAgbm9kZTogdGhpcy5lbGVtZW50T3JUZW1wbGF0ZVRvSWRlbnRpZmllcihyZWZUYXJnZXQpLFxuICAgICAgICAgICAgZGlyZWN0aXZlOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgICAgbm9kZTogdGhpcy5lbGVtZW50T3JUZW1wbGF0ZVRvSWRlbnRpZmllcihyZWZUYXJnZXQubm9kZSksXG4gICAgICAgICAgICBkaXJlY3RpdmU6IHJlZlRhcmdldC5kaXJlY3RpdmUucmVmLm5vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZGVudGlmaWVyID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzcGFuLFxuICAgICAgICBraW5kOiBJZGVudGlmaWVyS2luZC5SZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkZW50aWZpZXIgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNwYW4sXG4gICAgICAgIGtpbmQ6IElkZW50aWZpZXJLaW5kLlZhcmlhYmxlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldElkZW50aWZpZXJDYWNoZS5zZXQobm9kZSwgaWRlbnRpZmllcik7XG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgc3RhcnQgbG9jYXRpb24gb2YgYSBzdHJpbmcgaW4gYSBTb3VyY2VTcGFuICovXG4gIHByaXZhdGUgZ2V0U3RhcnRMb2NhdGlvbihuYW1lOiBzdHJpbmcsIGNvbnRleHQ6IFBhcnNlU291cmNlU3Bhbik6IG51bWJlciB7XG4gICAgY29uc3QgbG9jYWxTdHIgPSBjb250ZXh0LnRvU3RyaW5nKCk7XG4gICAgaWYgKCFsb2NhbFN0ci5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbXBvc3NpYmxlIHN0YXRlOiBcIiR7bmFtZX1cIiBub3QgZm91bmQgaW4gXCIke2xvY2FsU3RyfVwiYCk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0LnN0YXJ0Lm9mZnNldCArIGxvY2FsU3RyLmluZGV4T2YobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVmlzaXRzIGEgbm9kZSdzIGV4cHJlc3Npb24gYW5kIGFkZHMgaXRzIGlkZW50aWZpZXJzLCBpZiBhbnksIHRvIHRoZSB2aXNpdG9yJ3Mgc3RhdGUuXG4gICAqIE9ubHkgQVNUcyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleHByZXNzaW9uIHNvdXJjZSBhbmQgaXRzIGxvY2F0aW9uIGFyZSB2aXNpdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSBub2RlIHdob3NlIGV4cHJlc3Npb24gdG8gdmlzaXRcbiAgICovXG4gIHByaXZhdGUgdmlzaXRFeHByZXNzaW9uKGFzdDogQVNUKSB7XG4gICAgLy8gT25seSBpbmNsdWRlIEFTVHMgdGhhdCBoYXZlIGluZm9ybWF0aW9uIGFib3V0IHRoZWlyIHNvdXJjZSBhbmQgYWJzb2x1dGUgc291cmNlIHNwYW5zLlxuICAgIGlmIChhc3QgaW5zdGFuY2VvZiBBU1RXaXRoU291cmNlICYmIGFzdC5zb3VyY2UgIT09IG51bGwpIHtcbiAgICAgIC8vIE1ha2UgdGFyZ2V0IHRvIGlkZW50aWZpZXIgbWFwcGluZyBjbG9zdXJlIHN0YXRlZnVsIHRvIHRoaXMgdmlzaXRvciBpbnN0YW5jZS5cbiAgICAgIGNvbnN0IHRhcmdldFRvSWRlbnRpZmllciA9IHRoaXMudGFyZ2V0VG9JZGVudGlmaWVyLmJpbmQodGhpcyk7XG4gICAgICBjb25zdCBhYnNvbHV0ZU9mZnNldCA9IGFzdC5zb3VyY2VTcGFuLnN0YXJ0O1xuICAgICAgY29uc3QgaWRlbnRpZmllcnMgPSBFeHByZXNzaW9uVmlzaXRvci5nZXRJZGVudGlmaWVycyhcbiAgICAgICAgICBhc3QsIGFzdC5zb3VyY2UsIGFic29sdXRlT2Zmc2V0LCB0aGlzLmJvdW5kVGVtcGxhdGUsIHRhcmdldFRvSWRlbnRpZmllcik7XG4gICAgICBpZGVudGlmaWVycy5mb3JFYWNoKGlkID0+IHRoaXMuaWRlbnRpZmllcnMuYWRkKGlkKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGEgdGVtcGxhdGUgQVNUIGFuZCBidWlsZHMgaWRlbnRpZmllcnMgZGlzY292ZXJlZCBpbiBpdC5cbiAqXG4gKiBAcGFyYW0gYm91bmRUZW1wbGF0ZSBib3VuZCB0ZW1wbGF0ZSB0YXJnZXQsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBxdWVyeWluZyBleHByZXNzaW9uIHRhcmdldHMuXG4gKiBAcmV0dXJuIGlkZW50aWZpZXJzIGluIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUlkZW50aWZpZXJzKGJvdW5kVGVtcGxhdGU6IEJvdW5kVGFyZ2V0PENvbXBvbmVudE1ldGE+KTpcbiAgICBTZXQ8VG9wTGV2ZWxJZGVudGlmaWVyPiB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgVGVtcGxhdGVWaXNpdG9yKGJvdW5kVGVtcGxhdGUpO1xuICBpZiAoYm91bmRUZW1wbGF0ZS50YXJnZXQudGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHZpc2l0b3IudmlzaXRBbGwoYm91bmRUZW1wbGF0ZS50YXJnZXQudGVtcGxhdGUpO1xuICB9XG4gIHJldHVybiB2aXNpdG9yLmlkZW50aWZpZXJzO1xufVxuIl19