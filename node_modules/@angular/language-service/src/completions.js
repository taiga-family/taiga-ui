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
        define("@angular/language-service/src/completions", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler/src/chars", "@angular/language-service/src/binding_utils", "@angular/language-service/src/expression_diagnostics", "@angular/language-service/src/expressions", "@angular/language-service/src/html_info", "@angular/language-service/src/template", "@angular/language-service/src/types", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var chars_1 = require("@angular/compiler/src/chars");
    var binding_utils_1 = require("@angular/language-service/src/binding_utils");
    var expression_diagnostics_1 = require("@angular/language-service/src/expression_diagnostics");
    var expressions_1 = require("@angular/language-service/src/expressions");
    var html_info_1 = require("@angular/language-service/src/html_info");
    var template_1 = require("@angular/language-service/src/template");
    var ng = require("@angular/language-service/src/types");
    var utils_1 = require("@angular/language-service/src/utils");
    var HIDDEN_HTML_ELEMENTS = new Set(['html', 'script', 'noscript', 'base', 'body', 'title', 'head', 'link']);
    var HTML_ELEMENTS = html_info_1.elementNames().filter(function (name) { return !HIDDEN_HTML_ELEMENTS.has(name); }).map(function (name) {
        return {
            name: name,
            kind: ng.CompletionKind.HTML_ELEMENT,
            sortText: name,
        };
    });
    var ANGULAR_ELEMENTS = [
        {
            name: 'ng-container',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-container',
        },
        {
            name: 'ng-content',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-content',
        },
        {
            name: 'ng-template',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-template',
        },
    ];
    function isIdentifierPart(code) {
        // Identifiers consist of alphanumeric characters, '_', or '$'.
        return chars_1.isAsciiLetter(code) || chars_1.isDigit(code) || code == chars_1.$$ || code == chars_1.$_;
    }
    /**
     * Gets the span of word in a template that surrounds `position`. If there is no word around
     * `position`, nothing is returned.
     */
    function getBoundedWordSpan(templateInfo, position, ast) {
        var template = templateInfo.template;
        var templateSrc = template.source;
        if (!templateSrc)
            return;
        if (ast instanceof compiler_1.Element) {
            // The HTML tag may include `-` (e.g. `app-root`),
            // so use the HtmlAst to get the span before ayazhafiz refactor the code.
            return {
                start: templateInfo.template.span.start + ast.startSourceSpan.start.offset + 1,
                length: ast.name.length
            };
        }
        // TODO(ayazhafiz): A solution based on word expansion will always be expensive compared to one
        // based on ASTs. Whatever penalty we incur is probably manageable for small-length (i.e. the
        // majority of) identifiers, but the current solution involes a number of branchings and we can't
        // control potentially very long identifiers. Consider moving to an AST-based solution once
        // existing difficulties with AST spans are more clearly resolved (see #31898 for discussion of
        // known problems, and #33091 for how they affect text replacement).
        //
        // `templatePosition` represents the right-bound location of a cursor in the template.
        //    key.ent|ry
        //           ^---- cursor, at position `r` is at.
        // A cursor is not itself a character in the template; it has a left (lower) and right (upper)
        // index bound that hugs the cursor itself.
        var templatePosition = position - template.span.start;
        // To perform word expansion, we want to determine the left and right indices that hug the cursor.
        // There are three cases here.
        var left, right;
        if (templatePosition === 0) {
            // 1. Case like
            //      |rest of template
            //    the cursor is at the start of the template, hugged only by the right side (0-index).
            left = right = 0;
        }
        else if (templatePosition === templateSrc.length) {
            // 2. Case like
            //      rest of template|
            //    the cursor is at the end of the template, hugged only by the left side (last-index).
            left = right = templateSrc.length - 1;
        }
        else {
            // 3. Case like
            //      wo|rd
            //    there is a clear left and right index.
            left = templatePosition - 1;
            right = templatePosition;
        }
        if (!isIdentifierPart(templateSrc.charCodeAt(left)) &&
            !isIdentifierPart(templateSrc.charCodeAt(right))) {
            // Case like
            //         .|.
            // left ---^ ^--- right
            // There is no word here.
            return;
        }
        // Expand on the left and right side until a word boundary is hit. Back up one expansion on both
        // side to stay inside the word.
        while (left >= 0 && isIdentifierPart(templateSrc.charCodeAt(left)))
            --left;
        ++left;
        while (right < templateSrc.length && isIdentifierPart(templateSrc.charCodeAt(right)))
            ++right;
        --right;
        var absoluteStartPosition = position - (templatePosition - left);
        var length = right - left + 1;
        return { start: absoluteStartPosition, length: length };
    }
    function getTemplateCompletions(templateInfo, position) {
        var result = [];
        var htmlAst = templateInfo.htmlAst, template = templateInfo.template;
        // The templateNode starts at the delimiter character so we add 1 to skip it.
        var templatePosition = position - template.span.start;
        var path = utils_1.getPathToNodeAtPosition(htmlAst, templatePosition);
        var mostSpecific = path.tail;
        if (path.empty || !mostSpecific) {
            result = elementCompletions(templateInfo);
        }
        else {
            var astPosition_1 = templatePosition - mostSpecific.sourceSpan.start.offset;
            mostSpecific.visit({
                visitElement: function (ast) {
                    var startTagSpan = utils_1.spanOf(ast.sourceSpan);
                    var tagLen = ast.name.length;
                    // + 1 for the opening angle bracket
                    if (templatePosition <= startTagSpan.start + tagLen + 1) {
                        // If we are in the tag then return the element completions.
                        result = elementCompletions(templateInfo);
                    }
                    else if (templatePosition < startTagSpan.end) {
                        // We are in the attribute section of the element (but not in an attribute).
                        // Return the attribute completions.
                        result = attributeCompletionsForElement(templateInfo, ast.name);
                    }
                },
                visitAttribute: function (ast) {
                    // An attribute consists of two parts, LHS="RHS".
                    // Determine if completions are requested for LHS or RHS
                    if (ast.valueSpan && utils_1.inSpan(templatePosition, utils_1.spanOf(ast.valueSpan))) {
                        // RHS completion
                        result = attributeValueCompletions(templateInfo, path);
                    }
                    else {
                        // LHS completion
                        result = attributeCompletions(templateInfo, path);
                    }
                },
                visitText: function (ast) {
                    // Check if we are in a entity.
                    result = entityCompletions(getSourceText(template, utils_1.spanOf(ast)), astPosition_1);
                    if (result.length)
                        return result;
                    result = interpolationCompletions(templateInfo, templatePosition);
                    if (result.length)
                        return result;
                    var element = path.first(compiler_1.Element);
                    if (element) {
                        var definition = compiler_1.getHtmlTagDefinition(element.name);
                        if (definition.contentType === compiler_1.TagContentType.PARSABLE_DATA) {
                            result = voidElementAttributeCompletions(templateInfo, path);
                            if (!result.length) {
                                // If the element can hold content, show element completions.
                                result = elementCompletions(templateInfo);
                            }
                        }
                    }
                    else {
                        // If no element container, implies parsable data so show elements.
                        result = voidElementAttributeCompletions(templateInfo, path);
                        if (!result.length) {
                            result = elementCompletions(templateInfo);
                        }
                    }
                },
                visitComment: function () { },
                visitExpansion: function () { },
                visitExpansionCase: function () { }
            }, null);
        }
        var replacementSpan = getBoundedWordSpan(templateInfo, position, mostSpecific);
        return result.map(function (entry) {
            return tslib_1.__assign(tslib_1.__assign({}, entry), { replacementSpan: replacementSpan });
        });
    }
    exports.getTemplateCompletions = getTemplateCompletions;
    function attributeCompletions(info, path) {
        var attr = path.tail;
        var elem = path.parentOf(attr);
        if (!(attr instanceof compiler_1.Attribute) || !(elem instanceof compiler_1.Element)) {
            return [];
        }
        // TODO: Consider parsing the attrinute name to a proper AST instead of
        // matching using regex. This is because the regexp would incorrectly identify
        // bind parts for cases like [()|]
        //                              ^ cursor is here
        var binding = binding_utils_1.getBindingDescriptor(attr.name);
        if (!binding) {
            // This is a normal HTML attribute, not an Angular attribute.
            return attributeCompletionsForElement(info, elem.name);
        }
        var results = [];
        var ngAttrs = angularAttributes(info, elem.name);
        switch (binding.kind) {
            case binding_utils_1.ATTR.KW_MICROSYNTAX:
                // template reference attribute: *attrName
                results.push.apply(results, tslib_1.__spread(ngAttrs.templateRefs));
                break;
            case binding_utils_1.ATTR.KW_BIND:
            case binding_utils_1.ATTR.IDENT_PROPERTY:
                // property binding via bind- or []
                results.push.apply(results, tslib_1.__spread(html_info_1.propertyNames(elem.name), ngAttrs.inputs));
                break;
            case binding_utils_1.ATTR.KW_ON:
            case binding_utils_1.ATTR.IDENT_EVENT:
                // event binding via on- or ()
                results.push.apply(results, tslib_1.__spread(html_info_1.eventNames(elem.name), ngAttrs.outputs));
                break;
            case binding_utils_1.ATTR.KW_BINDON:
            case binding_utils_1.ATTR.IDENT_BANANA_BOX:
                // banana-in-a-box binding via bindon- or [()]
                results.push.apply(results, tslib_1.__spread(ngAttrs.bananas));
                break;
        }
        return results.map(function (name) {
            return {
                name: name,
                kind: ng.CompletionKind.ATTRIBUTE,
                sortText: name,
            };
        });
    }
    function attributeCompletionsForElement(info, elementName) {
        var e_1, _a, e_2, _b;
        var results = [];
        if (info.template instanceof template_1.InlineTemplate) {
            try {
                // Provide HTML attributes completion only for inline templates
                for (var _c = tslib_1.__values(html_info_1.attributeNames(elementName)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_1 = _d.value;
                    results.push({
                        name: name_1,
                        kind: ng.CompletionKind.HTML_ATTRIBUTE,
                        sortText: name_1,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Add Angular attributes
        var ngAttrs = angularAttributes(info, elementName);
        try {
            for (var _e = tslib_1.__values(ngAttrs.others), _f = _e.next(); !_f.done; _f = _e.next()) {
                var name_2 = _f.value;
                results.push({
                    name: name_2,
                    kind: ng.CompletionKind.ATTRIBUTE,
                    sortText: name_2,
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return results;
    }
    /**
     * Provide completions to the RHS of an attribute, which is of the form
     * LHS="RHS". The template path is computed from the specified `info` whereas
     * the context is determined from the specified `htmlPath`.
     * @param info Object that contains the template AST
     * @param htmlPath Path to the HTML node
     */
    function attributeValueCompletions(info, htmlPath) {
        // Find the corresponding Template AST path.
        var templatePath = utils_1.findTemplateAstAt(info.templateAst, htmlPath.position);
        var visitor = new ExpressionVisitor(info, htmlPath.position, function () {
            var dinfo = utils_1.diagnosticInfoFromTemplateInfo(info);
            return expression_diagnostics_1.getExpressionScope(dinfo, templatePath);
        });
        if (templatePath.tail instanceof compiler_1.AttrAst ||
            templatePath.tail instanceof compiler_1.BoundElementPropertyAst ||
            templatePath.tail instanceof compiler_1.BoundEventAst) {
            templatePath.tail.visit(visitor, null);
            return visitor.results;
        }
        // In order to provide accurate attribute value completion, we need to know
        // what the LHS is, and construct the proper AST if it is missing.
        var htmlAttr = htmlPath.tail;
        var binding = binding_utils_1.getBindingDescriptor(htmlAttr.name);
        if (binding && binding.kind === binding_utils_1.ATTR.KW_REF) {
            var refAst = void 0;
            var elemAst = void 0;
            if (templatePath.tail instanceof compiler_1.ReferenceAst) {
                refAst = templatePath.tail;
                var parent_1 = templatePath.parentOf(refAst);
                if (parent_1 instanceof compiler_1.ElementAst) {
                    elemAst = parent_1;
                }
            }
            else if (templatePath.tail instanceof compiler_1.ElementAst) {
                refAst = new compiler_1.ReferenceAst(htmlAttr.name, null, htmlAttr.value, htmlAttr.valueSpan);
                elemAst = templatePath.tail;
            }
            if (refAst && elemAst) {
                refAst.visit(visitor, elemAst);
            }
        }
        else {
            // HtmlAst contains the `Attribute` node, however the corresponding `AttrAst`
            // node is missing from the TemplateAst.
            var attrAst = new compiler_1.AttrAst(htmlAttr.name, htmlAttr.value, htmlAttr.valueSpan);
            attrAst.visit(visitor, null);
        }
        return visitor.results;
    }
    function elementCompletions(info) {
        var e_3, _a;
        var results = tslib_1.__spread(ANGULAR_ELEMENTS);
        if (info.template instanceof template_1.InlineTemplate) {
            // Provide HTML elements completion only for inline templates
            results.push.apply(results, tslib_1.__spread(HTML_ELEMENTS));
        }
        // Collect the elements referenced by the selectors
        var components = new Set();
        try {
            for (var _b = tslib_1.__values(utils_1.getSelectors(info).selectors), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selector = _c.value;
                var name_3 = selector.element;
                if (name_3 && !components.has(name_3)) {
                    components.add(name_3);
                    results.push({
                        name: name_3,
                        kind: ng.CompletionKind.COMPONENT,
                        sortText: name_3,
                    });
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
        return results;
    }
    function entityCompletions(value, position) {
        // Look for entity completions
        var re = /&[A-Za-z]*;?(?!\d)/g;
        var found;
        var result = [];
        while (found = re.exec(value)) {
            var len = found[0].length;
            if (position >= found.index && position < (found.index + len)) {
                result = Object.keys(compiler_1.NAMED_ENTITIES).map(function (name) {
                    return {
                        name: "&" + name + ";",
                        kind: ng.CompletionKind.ENTITY,
                        sortText: name,
                    };
                });
                break;
            }
        }
        return result;
    }
    function interpolationCompletions(info, position) {
        // Look for an interpolation in at the position.
        var templatePath = utils_1.findTemplateAstAt(info.templateAst, position);
        if (!templatePath.tail) {
            return [];
        }
        var visitor = new ExpressionVisitor(info, position, function () { return expression_diagnostics_1.getExpressionScope(utils_1.diagnosticInfoFromTemplateInfo(info), templatePath); });
        templatePath.tail.visit(visitor, null);
        return visitor.results;
    }
    // There is a special case of HTML where text that contains a unclosed tag is treated as
    // text. For exaple '<h1> Some <a text </h1>' produces a text nodes inside of the H1
    // element "Some <a text". We, however, want to treat this as if the user was requesting
    // the attributes of an "a" element, not requesting completion in the a text element. This
    // code checks for this case and returns element completions if it is detected or undefined
    // if it is not.
    function voidElementAttributeCompletions(info, path) {
        var tail = path.tail;
        if (tail instanceof compiler_1.Text) {
            var match = tail.value.match(/<(\w(\w|\d|-)*:)?(\w(\w|\d|-)*)\s/);
            // The position must be after the match, otherwise we are still in a place where elements
            // are expected (such as `<|a` or `<a|`; we only want attributes for `<a |` or after).
            if (match &&
                path.position >= (match.index || 0) + match[0].length + tail.sourceSpan.start.offset) {
                return attributeCompletionsForElement(info, match[3]);
            }
        }
        return [];
    }
    var ExpressionVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(ExpressionVisitor, _super);
        function ExpressionVisitor(info, position, getExpressionScope) {
            var _this = _super.call(this) || this;
            _this.info = info;
            _this.position = position;
            _this.getExpressionScope = getExpressionScope;
            _this.completions = new Map();
            return _this;
        }
        Object.defineProperty(ExpressionVisitor.prototype, "results", {
            get: function () {
                return Array.from(this.completions.values());
            },
            enumerable: true,
            configurable: true
        });
        ExpressionVisitor.prototype.visitDirectiveProperty = function (ast) {
            this.processExpressionCompletions(ast.value);
        };
        ExpressionVisitor.prototype.visitElementProperty = function (ast) {
            this.processExpressionCompletions(ast.value);
        };
        ExpressionVisitor.prototype.visitEvent = function (ast) {
            this.processExpressionCompletions(ast.handler);
        };
        ExpressionVisitor.prototype.visitElement = function () {
            // no-op for now
        };
        ExpressionVisitor.prototype.visitAttr = function (ast) {
            var binding = binding_utils_1.getBindingDescriptor(ast.name);
            if (binding && binding.kind === binding_utils_1.ATTR.KW_MICROSYNTAX) {
                // This a template binding given by micro syntax expression.
                // First, verify the attribute consists of some binding we can give completions for.
                // The sourceSpan of AttrAst points to the RHS of the attribute
                var templateKey = binding.name;
                var templateValue = ast.sourceSpan.toString();
                var templateUrl = ast.sourceSpan.start.file.url;
                // TODO(kyliau): We are unable to determine the absolute offset of the key
                // but it is okay here, because we are only looking at the RHS of the attr
                var absKeyOffset = 0;
                var absValueOffset = ast.sourceSpan.start.offset;
                var templateBindings = this.info.expressionParser.parseTemplateBindings(templateKey, templateValue, templateUrl, absKeyOffset, absValueOffset).templateBindings;
                // Find the nearest template binding to the position.
                var lastBindingEnd = templateBindings.length > 0 &&
                    templateBindings[templateBindings.length - 1].sourceSpan.end;
                var normalizedPositionToBinding_1 = lastBindingEnd && this.position > lastBindingEnd ? lastBindingEnd : this.position;
                var templateBinding = templateBindings.find(function (b) { return utils_1.inSpan(normalizedPositionToBinding_1, b.sourceSpan); });
                if (!templateBinding) {
                    return;
                }
                this.microSyntaxInAttributeValue(ast, templateBinding);
            }
            else {
                var expressionAst = this.info.expressionParser.parseBinding(ast.value, ast.sourceSpan.toString(), ast.sourceSpan.start.offset);
                this.processExpressionCompletions(expressionAst);
            }
        };
        ExpressionVisitor.prototype.visitReference = function (_ast, context) {
            var _this = this;
            context.directives.forEach(function (dir) {
                var exportAs = dir.directive.exportAs;
                if (exportAs) {
                    _this.completions.set(exportAs, { name: exportAs, kind: ng.CompletionKind.REFERENCE, sortText: exportAs });
                }
            });
        };
        ExpressionVisitor.prototype.visitBoundText = function (ast) {
            if (utils_1.inSpan(this.position, ast.value.sourceSpan)) {
                var completions = expressions_1.getExpressionCompletions(this.getExpressionScope(), ast.value, this.position, this.info.template);
                if (completions) {
                    this.addSymbolsToCompletions(completions);
                }
            }
        };
        ExpressionVisitor.prototype.processExpressionCompletions = function (value) {
            var symbols = expressions_1.getExpressionCompletions(this.getExpressionScope(), value, this.position, this.info.template);
            if (symbols) {
                this.addSymbolsToCompletions(symbols);
            }
        };
        ExpressionVisitor.prototype.addSymbolsToCompletions = function (symbols) {
            var e_4, _a;
            try {
                for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                    var s = symbols_1_1.value;
                    if (s.name.startsWith('__') || !s.public || this.completions.has(s.name)) {
                        continue;
                    }
                    // The pipe method should not include parentheses.
                    // e.g. {{ value_expression | slice : start [ : end ] }}
                    var shouldInsertParentheses = s.callable && s.kind !== ng.CompletionKind.PIPE;
                    this.completions.set(s.name, {
                        name: s.name,
                        kind: s.kind,
                        sortText: s.name,
                        insertText: shouldInsertParentheses ? s.name + "()" : s.name,
                    });
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        /**
         * This method handles the completions of attribute values for directives that
         * support the microsyntax format. Examples are *ngFor and *ngIf.
         * These directives allows declaration of "let" variables, adds context-specific
         * symbols like $implicit, index, count, among other behaviors.
         * For a complete description of such format, see
         * https://angular.io/guide/structural-directives#the-asterisk--prefix
         *
         * @param attr descriptor for attribute name and value pair
         * @param binding template binding for the expression in the attribute
         */
        ExpressionVisitor.prototype.microSyntaxInAttributeValue = function (attr, binding) {
            var _a;
            var key = attr.name.substring(1); // remove leading asterisk
            // Find the selector - eg ngFor, ngIf, etc
            var selectorInfo = utils_1.getSelectors(this.info);
            var selector = selectorInfo.selectors.find(function (s) {
                // attributes are listed in (attribute, value) pairs
                for (var i = 0; i < s.attrs.length; i += 2) {
                    if (s.attrs[i] === key) {
                        return true;
                    }
                }
            });
            if (!selector) {
                return;
            }
            var valueRelativePosition = this.position - attr.sourceSpan.start.offset;
            if (binding instanceof compiler_1.VariableBinding) {
                // TODO(kyliau): With expression sourceSpan we shouldn't have to search
                // the attribute value string anymore. Just check if position is in the
                // expression source span.
                var equalLocation = attr.value.indexOf('=');
                if (equalLocation > 0 && valueRelativePosition > equalLocation) {
                    // We are after the '=' in a let clause. The valid values here are the members of the
                    // template reference's type parameter.
                    var directiveMetadata = selectorInfo.map.get(selector);
                    if (directiveMetadata) {
                        var contextTable = this.info.template.query.getTemplateContext(directiveMetadata.type.reference);
                        if (contextTable) {
                            // This adds symbols like $implicit, index, count, etc.
                            this.addSymbolsToCompletions(contextTable.values());
                            return;
                        }
                    }
                }
            }
            else if (binding instanceof compiler_1.ExpressionBinding) {
                if (utils_1.inSpan(this.position, (_a = binding.value) === null || _a === void 0 ? void 0 : _a.ast.sourceSpan)) {
                    this.processExpressionCompletions(binding.value.ast);
                    return;
                }
                else if (!binding.value && this.position > binding.key.span.end) {
                    // No expression is defined for the value of the key expression binding, but the cursor is
                    // in a location where the expression would be defined. This can happen in a case like
                    //   let i of |
                    //            ^-- cursor
                    // In this case, backfill the value to be an empty expression and retrieve completions.
                    this.processExpressionCompletions(new compiler_1.EmptyExpr(new compiler_1.ParseSpan(valueRelativePosition, valueRelativePosition), new compiler_1.AbsoluteSourceSpan(this.position, this.position)));
                    return;
                }
            }
        };
        return ExpressionVisitor;
    }(compiler_1.NullTemplateVisitor));
    function getSourceText(template, span) {
        return template.source.substring(span.start, span.end);
    }
    /**
     * Return all Angular-specific attributes for the element with `elementName`.
     * @param info
     * @param elementName
     */
    function angularAttributes(info, elementName) {
        var e_5, _a, e_6, _b, e_7, _c, e_8, _d;
        var _e = utils_1.getSelectors(info), selectors = _e.selectors, selectorMap = _e.map;
        var templateRefs = new Set();
        var inputs = new Set();
        var outputs = new Set();
        var bananas = new Set();
        var others = new Set();
        try {
            for (var selectors_1 = tslib_1.__values(selectors), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                var selector = selectors_1_1.value;
                if (selector.element && selector.element !== elementName) {
                    continue;
                }
                var summary = selectorMap.get(selector);
                var hasTemplateRef = utils_1.isStructuralDirective(summary.type);
                // attributes are listed in (attribute, value) pairs
                for (var i = 0; i < selector.attrs.length; i += 2) {
                    var attr = selector.attrs[i];
                    if (hasTemplateRef) {
                        templateRefs.add(attr);
                    }
                    else {
                        others.add(attr);
                    }
                }
                try {
                    for (var _f = (e_6 = void 0, tslib_1.__values(Object.values(summary.inputs))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var input = _g.value;
                        inputs.add(input);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                try {
                    for (var _h = (e_7 = void 0, tslib_1.__values(Object.values(summary.outputs))), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var output = _j.value;
                        outputs.add(output);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return)) _a.call(selectors_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var inputs_1 = tslib_1.__values(inputs), inputs_1_1 = inputs_1.next(); !inputs_1_1.done; inputs_1_1 = inputs_1.next()) {
                var name_4 = inputs_1_1.value;
                // Add banana-in-a-box syntax
                // https://angular.io/guide/template-syntax#two-way-binding-
                if (outputs.has(name_4 + "Change")) {
                    bananas.add(name_4);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (inputs_1_1 && !inputs_1_1.done && (_d = inputs_1.return)) _d.call(inputs_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return { templateRefs: templateRefs, inputs: inputs, outputs: outputs, bananas: bananas, others: others };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9jb21wbGV0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBcVk7SUFDclkscURBQTJFO0lBRTNFLDZFQUEyRDtJQUMzRCwrRkFBNEQ7SUFDNUQseUVBQXVEO0lBQ3ZELHFFQUFvRjtJQUNwRixtRUFBMEM7SUFDMUMsd0RBQThCO0lBQzlCLDZEQUF3SjtJQUV4SixJQUFNLG9CQUFvQixHQUN0QixJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQU0sYUFBYSxHQUNmLHdCQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7UUFDckUsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVk7WUFDcEMsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxJQUFNLGdCQUFnQixHQUFzQztRQUMxRDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWU7WUFDdkMsUUFBUSxFQUFFLGNBQWM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWU7WUFDdkMsUUFBUSxFQUFFLFlBQVk7U0FD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LENBQUMsQ0FBQztxQkFDbEI7aUJBQ0Y7O29CQUNELEtBQW9CLElBQUEsb0JBQUEsaUJBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBOUMsSUFBTSxLQUFLLFdBQUE7d0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkI7Ozs7Ozs7Ozs7b0JBQ0QsS0FBcUIsSUFBQSxvQkFBQSxpQkFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLGdCQUFBLDRCQUFFO3dCQUFoRCxJQUFNLE1BQU0sV0FBQTt3QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQjs7Ozs7Ozs7O2FBQ0Y7Ozs7Ozs7Ozs7WUFDRCxLQUFtQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUF0QixJQUFNLE1BQUksbUJBQUE7Z0JBQ2IsNkJBQTZCO2dCQUM3Qiw0REFBNEQ7Z0JBQzVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBSSxNQUFJLFdBQVEsQ0FBQyxFQUFFO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBQyxDQUFDO2lCQUNuQjthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLEVBQUMsWUFBWSxjQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsQ0FBQztJQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Fic29sdXRlU291cmNlU3BhbiwgQVNULCBBc3RQYXRoLCBBdHRyQXN0LCBBdHRyaWJ1dGUsIEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIEJvdW5kRWxlbWVudFByb3BlcnR5QXN0LCBCb3VuZEV2ZW50QXN0LCBCb3VuZFRleHRBc3QsIEVsZW1lbnQsIEVsZW1lbnRBc3QsIEVtcHR5RXhwciwgRXhwcmVzc2lvbkJpbmRpbmcsIGdldEh0bWxUYWdEZWZpbml0aW9uLCBIdG1sQXN0UGF0aCwgTkFNRURfRU5USVRJRVMsIE5vZGUgYXMgSHRtbEFzdCwgTnVsbFRlbXBsYXRlVmlzaXRvciwgUGFyc2VTcGFuLCBSZWZlcmVuY2VBc3QsIFRhZ0NvbnRlbnRUeXBlLCBUZW1wbGF0ZUJpbmRpbmcsIFRleHQsIFZhcmlhYmxlQmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHskJCwgJF8sIGlzQXNjaWlMZXR0ZXIsIGlzRGlnaXR9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jaGFycyc7XG5cbmltcG9ydCB7QVRUUiwgZ2V0QmluZGluZ0Rlc2NyaXB0b3J9IGZyb20gJy4vYmluZGluZ191dGlscyc7XG5pbXBvcnQge2dldEV4cHJlc3Npb25TY29wZX0gZnJvbSAnLi9leHByZXNzaW9uX2RpYWdub3N0aWNzJztcbmltcG9ydCB7Z2V0RXhwcmVzc2lvbkNvbXBsZXRpb25zfSBmcm9tICcuL2V4cHJlc3Npb25zJztcbmltcG9ydCB7YXR0cmlidXRlTmFtZXMsIGVsZW1lbnROYW1lcywgZXZlbnROYW1lcywgcHJvcGVydHlOYW1lc30gZnJvbSAnLi9odG1sX2luZm8nO1xuaW1wb3J0IHtJbmxpbmVUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgKiBhcyBuZyBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7ZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvLCBmaW5kVGVtcGxhdGVBc3RBdCwgZ2V0UGF0aFRvTm9kZUF0UG9zaXRpb24sIGdldFNlbGVjdG9ycywgaW5TcGFuLCBpc1N0cnVjdHVyYWxEaXJlY3RpdmUsIHNwYW5PZn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEhJRERFTl9IVE1MX0VMRU1FTlRTOiBSZWFkb25seVNldDxzdHJpbmc+ID1cbiAgICBuZXcgU2V0KFsnaHRtbCcsICdzY3JpcHQnLCAnbm9zY3JpcHQnLCAnYmFzZScsICdib2R5JywgJ3RpdGxlJywgJ2hlYWQnLCAnbGluayddKTtcbmNvbnN0IEhUTUxfRUxFTUVOVFM6IFJlYWRvbmx5QXJyYXk8bmcuQ29tcGxldGlvbkVudHJ5PiA9XG4gICAgZWxlbWVudE5hbWVzKCkuZmlsdGVyKG5hbWUgPT4gIUhJRERFTl9IVE1MX0VMRU1FTlRTLmhhcyhuYW1lKSkubWFwKG5hbWUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAga2luZDogbmcuQ29tcGxldGlvbktpbmQuSFRNTF9FTEVNRU5ULFxuICAgICAgICBzb3J0VGV4dDogbmFtZSxcbiAgICAgIH07XG4gICAgfSk7XG5jb25zdCBBTkdVTEFSX0VMRU1FTlRTOiBSZWFkb25seUFycmF5PG5nLkNvbXBsZXRpb25FbnRyeT4gPSBbXG4gIHtcbiAgICBuYW1lOiAnbmctY29udGFpbmVyJyxcbiAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BTkdVTEFSX0VMRU1FTlQsXG4gICAgc29ydFRleHQ6ICduZy1jb250YWluZXInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25nLWNvbnRlbnQnLFxuICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkFOR1VMQVJfRUxFTUVOVCxcbiAgICBzb3J0VGV4dDogJ25nLWNvbnRlbnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25nLXRlbXBsYXRlJyxcbiAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BTkdVTEFSX0VMRU1FTlQsXG4gICAgc29ydFRleHQ6ICduZy10ZW1wbGF0ZScsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0KGNvZGU6IG51bWJlcikge1xuICAvLyBJZGVudGlmaWVycyBjb25zaXN0IG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCAnXycsIG9yICckJy5cbiAgcmV0dXJuIGlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgaXNEaWdpdChjb2RlKSB8fCBjb2RlID09ICQkIHx8IGNvZGUgPT0gJF87XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3BhbiBvZiB3b3JkIGluIGEgdGVtcGxhdGUgdGhhdCBzdXJyb3VuZHMgYHBvc2l0aW9uYC4gSWYgdGhlcmUgaXMgbm8gd29yZCBhcm91bmRcbiAqIGBwb3NpdGlvbmAsIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kZWRXb3JkU3BhbihcbiAgICB0ZW1wbGF0ZUluZm86IG5nLkFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlciwgYXN0OiBIdG1sQXN0fHVuZGVmaW5lZCk6IHRzLlRleHRTcGFufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHt0ZW1wbGF0ZX0gPSB0ZW1wbGF0ZUluZm87XG4gIGNvbnN0IHRlbXBsYXRlU3JjID0gdGVtcGxhdGUuc291cmNlO1xuXG4gIGlmICghdGVtcGxhdGVTcmMpIHJldHVybjtcblxuICBpZiAoYXN0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIC8vIFRoZSBIVE1MIHRhZyBtYXkgaW5jbHVkZSBgLWAgKGUuZy4gYGFwcC1yb290YCksXG4gICAgLy8gc28gdXNlIHRoZSBIdG1sQXN0IHRvIGdldCB0aGUgc3BhbiBiZWZvcmUgYXlhemhhZml6IHJlZmFjdG9yIHRoZSBjb2RlLlxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdGVtcGxhdGVJbmZvLnRlbXBsYXRlLnNwYW4uc3RhcnQgKyBhc3Quc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQgKyAxLFxuICAgICAgbGVuZ3RoOiBhc3QubmFtZS5sZW5ndGhcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETyhheWF6aGFmaXopOiBBIHNvbHV0aW9uIGJhc2VkIG9uIHdvcmQgZXhwYW5zaW9uIHdpbGwgYWx3YXlzIGJlIGV4cGVuc2l2ZSBjb21wYXJlZCB0byBvbmVcbiAgLy8gYmFzZWQgb24gQVNUcy4gV2hhdGV2ZXIgcGVuYWx0eSB3ZSBpbmN1ciBpcyBwcm9iYWJseSBtYW5hZ2VhYmxlIGZvciBzbWFsbC1sZW5ndGggKGkuZS4gdGhlXG4gIC8vIG1ham9yaXR5IG9mKSBpZGVudGlmaWVycywgYnV0IHRoZSBjdXJyZW50IHNvbHV0aW9uIGludm9sZXMgYSBudW1iZXIgb2YgYnJhbmNoaW5ncyBhbmQgd2UgY2FuJ3RcbiAgLy8gY29udHJvbCBwb3RlbnRpYWxseSB2ZXJ5IGxvbmcgaWRlbnRpZmllcnMuIENvbnNpZGVyIG1vdmluZyB0byBhbiBBU1QtYmFzZWQgc29sdXRpb24gb25jZVxuICAvLyBleGlzdGluZyBkaWZmaWN1bHRpZXMgd2l0aCBBU1Qgc3BhbnMgYXJlIG1vcmUgY2xlYXJseSByZXNvbHZlZCAoc2VlICMzMTg5OCBmb3IgZGlzY3Vzc2lvbiBvZlxuICAvLyBrbm93biBwcm9ibGVtcywgYW5kICMzMzA5MSBmb3IgaG93IHRoZXkgYWZmZWN0IHRleHQgcmVwbGFjZW1lbnQpLlxuICAvL1xuICAvLyBgdGVtcGxhdGVQb3NpdGlvbmAgcmVwcmVzZW50cyB0aGUgcmlnaHQtYm91bmQgbG9jYXRpb24gb2YgYSBjdXJzb3IgaW4gdGhlIHRlbXBsYXRlLlxuICAvLyAgICBrZXkuZW50fHJ5XG4gIC8vICAgICAgICAgICBeLS0tLSBjdXJzb3IsIGF0IHBvc2l0aW9uIGByYCBpcyBhdC5cbiAgLy8gQSBjdXJzb3IgaXMgbm90IGl0c2VsZiBhIGNoYXJhY3RlciBpbiB0aGUgdGVtcGxhdGU7IGl0IGhhcyBhIGxlZnQgKGxvd2VyKSBhbmQgcmlnaHQgKHVwcGVyKVxuICAvLyBpbmRleCBib3VuZCB0aGF0IGh1Z3MgdGhlIGN1cnNvciBpdHNlbGYuXG4gIGxldCB0ZW1wbGF0ZVBvc2l0aW9uID0gcG9zaXRpb24gLSB0ZW1wbGF0ZS5zcGFuLnN0YXJ0O1xuICAvLyBUbyBwZXJmb3JtIHdvcmQgZXhwYW5zaW9uLCB3ZSB3YW50IHRvIGRldGVybWluZSB0aGUgbGVmdCBhbmQgcmlnaHQgaW5kaWNlcyB0aGF0IGh1ZyB0aGUgY3Vyc29yLlxuICAvLyBUaGVyZSBhcmUgdGhyZWUgY2FzZXMgaGVyZS5cbiAgbGV0IGxlZnQsIHJpZ2h0O1xuICBpZiAodGVtcGxhdGVQb3NpdGlvbiA9PT0gMCkge1xuICAgIC8vIDEuIENhc2UgbGlrZVxuICAgIC8vICAgICAgfHJlc3Qgb2YgdGVtcGxhdGVcbiAgICAvLyAgICB0aGUgY3Vyc29yIGlzIGF0IHRoZSBzdGFydCBvZiB0aGUgdGVtcGxhdGUsIGh1Z2dlZCBvbmx5IGJ5IHRoZSByaWdodCBzaWRlICgwLWluZGV4KS5cbiAgICBsZWZ0ID0gcmlnaHQgPSAwO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlUG9zaXRpb24gPT09IHRlbXBsYXRlU3JjLmxlbmd0aCkge1xuICAgIC8vIDIuIENhc2UgbGlrZVxuICAgIC8vICAgICAgcmVzdCBvZiB0ZW1wbGF0ZXxcbiAgICAvLyAgICB0aGUgY3Vyc29yIGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRlbXBsYXRlLCBodWdnZWQgb25seSBieSB0aGUgbGVmdCBzaWRlIChsYXN0LWluZGV4KS5cbiAgICBsZWZ0ID0gcmlnaHQgPSB0ZW1wbGF0ZVNyYy5sZW5ndGggLSAxO1xuICB9IGVsc2Uge1xuICAgIC8vIDMuIENhc2UgbGlrZVxuICAgIC8vICAgICAgd298cmRcbiAgICAvLyAgICB0aGVyZSBpcyBhIGNsZWFyIGxlZnQgYW5kIHJpZ2h0IGluZGV4LlxuICAgIGxlZnQgPSB0ZW1wbGF0ZVBvc2l0aW9uIC0gMTtcbiAgICByaWdodCA9IHRlbXBsYXRlUG9zaXRpb247XG4gIH1cblxuICBpZiAoIWlzSWRlbnRpZmllclBhcnQodGVtcGxhdGVTcmMuY2hhckNvZGVBdChsZWZ0KSkgJiZcbiAgICAgICFpc0lkZW50aWZpZXJQYXJ0KHRlbXBsYXRlU3JjLmNoYXJDb2RlQXQocmlnaHQpKSkge1xuICAgIC8vIENhc2UgbGlrZVxuICAgIC8vICAgICAgICAgLnwuXG4gICAgLy8gbGVmdCAtLS1eIF4tLS0gcmlnaHRcbiAgICAvLyBUaGVyZSBpcyBubyB3b3JkIGhlcmUuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRXhwYW5kIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIHVudGlsIGEgd29yZCBib3VuZGFyeSBpcyBoaXQuIEJhY2sgdXAgb25lIGV4cGFuc2lvbiBvbiBib3RoXG4gIC8vIHNpZGUgdG8gc3RheSBpbnNpZGUgdGhlIHdvcmQuXG4gIHdoaWxlIChsZWZ0ID49IDAgJiYgaXNJZGVudGlmaWVyUGFydCh0ZW1wbGF0ZVNyYy5jaGFyQ29kZUF0KGxlZnQpKSkgLS1sZWZ0O1xuICArK2xlZnQ7XG4gIHdoaWxlIChyaWdodCA8IHRlbXBsYXRlU3JjLmxlbmd0aCAmJiBpc0lkZW50aWZpZXJQYXJ0KHRlbXBsYXRlU3JjLmNoYXJDb2RlQXQocmlnaHQpKSkgKytyaWdodDtcbiAgLS1yaWdodDtcblxuICBjb25zdCBhYnNvbHV0ZVN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbiAtICh0ZW1wbGF0ZVBvc2l0aW9uIC0gbGVmdCk7XG4gIGNvbnN0IGxlbmd0aCA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gIHJldHVybiB7c3RhcnQ6IGFic29sdXRlU3RhcnRQb3NpdGlvbiwgbGVuZ3RofTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlQ29tcGxldGlvbnMoXG4gICAgdGVtcGxhdGVJbmZvOiBuZy5Bc3RSZXN1bHQsIHBvc2l0aW9uOiBudW1iZXIpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIGxldCByZXN1bHQ6IG5nLkNvbXBsZXRpb25FbnRyeVtdID0gW107XG4gIGNvbnN0IHtodG1sQXN0LCB0ZW1wbGF0ZX0gPSB0ZW1wbGF0ZUluZm87XG4gIC8vIFRoZSB0ZW1wbGF0ZU5vZGUgc3RhcnRzIGF0IHRoZSBkZWxpbWl0ZXIgY2hhcmFjdGVyIHNvIHdlIGFkZCAxIHRvIHNraXAgaXQuXG4gIGNvbnN0IHRlbXBsYXRlUG9zaXRpb24gPSBwb3NpdGlvbiAtIHRlbXBsYXRlLnNwYW4uc3RhcnQ7XG4gIGNvbnN0IHBhdGggPSBnZXRQYXRoVG9Ob2RlQXRQb3NpdGlvbihodG1sQXN0LCB0ZW1wbGF0ZVBvc2l0aW9uKTtcbiAgY29uc3QgbW9zdFNwZWNpZmljID0gcGF0aC50YWlsO1xuICBpZiAocGF0aC5lbXB0eSB8fCAhbW9zdFNwZWNpZmljKSB7XG4gICAgcmVzdWx0ID0gZWxlbWVudENvbXBsZXRpb25zKHRlbXBsYXRlSW5mbyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYXN0UG9zaXRpb24gPSB0ZW1wbGF0ZVBvc2l0aW9uIC0gbW9zdFNwZWNpZmljLnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0O1xuICAgIG1vc3RTcGVjaWZpYy52aXNpdChcbiAgICAgICAge1xuICAgICAgICAgIHZpc2l0RWxlbWVudChhc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGFnU3BhbiA9IHNwYW5PZihhc3Quc291cmNlU3Bhbik7XG4gICAgICAgICAgICBjb25zdCB0YWdMZW4gPSBhc3QubmFtZS5sZW5ndGg7XG4gICAgICAgICAgICAvLyArIDEgZm9yIHRoZSBvcGVuaW5nIGFuZ2xlIGJyYWNrZXRcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZVBvc2l0aW9uIDw9IHN0YXJ0VGFnU3Bhbi5zdGFydCArIHRhZ0xlbiArIDEpIHtcbiAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGluIHRoZSB0YWcgdGhlbiByZXR1cm4gdGhlIGVsZW1lbnQgY29tcGxldGlvbnMuXG4gICAgICAgICAgICAgIHJlc3VsdCA9IGVsZW1lbnRDb21wbGV0aW9ucyh0ZW1wbGF0ZUluZm8pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZVBvc2l0aW9uIDwgc3RhcnRUYWdTcGFuLmVuZCkge1xuICAgICAgICAgICAgICAvLyBXZSBhcmUgaW4gdGhlIGF0dHJpYnV0ZSBzZWN0aW9uIG9mIHRoZSBlbGVtZW50IChidXQgbm90IGluIGFuIGF0dHJpYnV0ZSkuXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgYXR0cmlidXRlIGNvbXBsZXRpb25zLlxuICAgICAgICAgICAgICByZXN1bHQgPSBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQodGVtcGxhdGVJbmZvLCBhc3QubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXNpdEF0dHJpYnV0ZShhc3Q6IEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgLy8gQW4gYXR0cmlidXRlIGNvbnNpc3RzIG9mIHR3byBwYXJ0cywgTEhTPVwiUkhTXCIuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgY29tcGxldGlvbnMgYXJlIHJlcXVlc3RlZCBmb3IgTEhTIG9yIFJIU1xuICAgICAgICAgICAgaWYgKGFzdC52YWx1ZVNwYW4gJiYgaW5TcGFuKHRlbXBsYXRlUG9zaXRpb24sIHNwYW5PZihhc3QudmFsdWVTcGFuKSkpIHtcbiAgICAgICAgICAgICAgLy8gUkhTIGNvbXBsZXRpb25cbiAgICAgICAgICAgICAgcmVzdWx0ID0gYXR0cmlidXRlVmFsdWVDb21wbGV0aW9ucyh0ZW1wbGF0ZUluZm8sIHBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTEhTIGNvbXBsZXRpb25cbiAgICAgICAgICAgICAgcmVzdWx0ID0gYXR0cmlidXRlQ29tcGxldGlvbnModGVtcGxhdGVJbmZvLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2l0VGV4dChhc3QpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBpbiBhIGVudGl0eS5cbiAgICAgICAgICAgIHJlc3VsdCA9IGVudGl0eUNvbXBsZXRpb25zKGdldFNvdXJjZVRleHQodGVtcGxhdGUsIHNwYW5PZihhc3QpKSwgYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICByZXN1bHQgPSBpbnRlcnBvbGF0aW9uQ29tcGxldGlvbnModGVtcGxhdGVJbmZvLCB0ZW1wbGF0ZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhdGguZmlyc3QoRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0SHRtbFRhZ0RlZmluaXRpb24oZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgaWYgKGRlZmluaXRpb24uY29udGVudFR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLlBBUlNBQkxFX0RBVEEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2b2lkRWxlbWVudEF0dHJpYnV0ZUNvbXBsZXRpb25zKHRlbXBsYXRlSW5mbywgcGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBjYW4gaG9sZCBjb250ZW50LCBzaG93IGVsZW1lbnQgY29tcGxldGlvbnMuXG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVtZW50Q29tcGxldGlvbnModGVtcGxhdGVJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIElmIG5vIGVsZW1lbnQgY29udGFpbmVyLCBpbXBsaWVzIHBhcnNhYmxlIGRhdGEgc28gc2hvdyBlbGVtZW50cy5cbiAgICAgICAgICAgICAgcmVzdWx0ID0gdm9pZEVsZW1lbnRBdHRyaWJ1dGVDb21wbGV0aW9ucyh0ZW1wbGF0ZUluZm8sIHBhdGgpO1xuICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVtZW50Q29tcGxldGlvbnModGVtcGxhdGVJbmZvKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlzaXRDb21tZW50KCkge30sXG4gICAgICAgICAgdmlzaXRFeHBhbnNpb24oKSB7fSxcbiAgICAgICAgICB2aXNpdEV4cGFuc2lvbkNhc2UoKSB7fVxuICAgICAgICB9LFxuICAgICAgICBudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHJlcGxhY2VtZW50U3BhbiA9IGdldEJvdW5kZWRXb3JkU3Bhbih0ZW1wbGF0ZUluZm8sIHBvc2l0aW9uLCBtb3N0U3BlY2lmaWMpO1xuICByZXR1cm4gcmVzdWx0Lm1hcChlbnRyeSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVudHJ5LFxuICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVDb21wbGV0aW9ucyhpbmZvOiBuZy5Bc3RSZXN1bHQsIHBhdGg6IEFzdFBhdGg8SHRtbEFzdD4pOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIGNvbnN0IGF0dHIgPSBwYXRoLnRhaWw7XG4gIGNvbnN0IGVsZW0gPSBwYXRoLnBhcmVudE9mKGF0dHIpO1xuICBpZiAoIShhdHRyIGluc3RhbmNlb2YgQXR0cmlidXRlKSB8fCAhKGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIFRPRE86IENvbnNpZGVyIHBhcnNpbmcgdGhlIGF0dHJpbnV0ZSBuYW1lIHRvIGEgcHJvcGVyIEFTVCBpbnN0ZWFkIG9mXG4gIC8vIG1hdGNoaW5nIHVzaW5nIHJlZ2V4LiBUaGlzIGlzIGJlY2F1c2UgdGhlIHJlZ2V4cCB3b3VsZCBpbmNvcnJlY3RseSBpZGVudGlmeVxuICAvLyBiaW5kIHBhcnRzIGZvciBjYXNlcyBsaWtlIFsoKXxdXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXiBjdXJzb3IgaXMgaGVyZVxuICBjb25zdCBiaW5kaW5nID0gZ2V0QmluZGluZ0Rlc2NyaXB0b3IoYXR0ci5uYW1lKTtcbiAgaWYgKCFiaW5kaW5nKSB7XG4gICAgLy8gVGhpcyBpcyBhIG5vcm1hbCBIVE1MIGF0dHJpYnV0ZSwgbm90IGFuIEFuZ3VsYXIgYXR0cmlidXRlLlxuICAgIHJldHVybiBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQoaW5mbywgZWxlbS5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IG5nQXR0cnMgPSBhbmd1bGFyQXR0cmlidXRlcyhpbmZvLCBlbGVtLm5hbWUpO1xuICBzd2l0Y2ggKGJpbmRpbmcua2luZCkge1xuICAgIGNhc2UgQVRUUi5LV19NSUNST1NZTlRBWDpcbiAgICAgIC8vIHRlbXBsYXRlIHJlZmVyZW5jZSBhdHRyaWJ1dGU6ICphdHRyTmFtZVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLm5nQXR0cnMudGVtcGxhdGVSZWZzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX0JJTkQ6XG4gICAgY2FzZSBBVFRSLklERU5UX1BST1BFUlRZOlxuICAgICAgLy8gcHJvcGVydHkgYmluZGluZyB2aWEgYmluZC0gb3IgW11cbiAgICAgIHJlc3VsdHMucHVzaCguLi5wcm9wZXJ0eU5hbWVzKGVsZW0ubmFtZSksIC4uLm5nQXR0cnMuaW5wdXRzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX09OOlxuICAgIGNhc2UgQVRUUi5JREVOVF9FVkVOVDpcbiAgICAgIC8vIGV2ZW50IGJpbmRpbmcgdmlhIG9uLSBvciAoKVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmV2ZW50TmFtZXMoZWxlbS5uYW1lKSwgLi4ubmdBdHRycy5vdXRwdXRzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX0JJTkRPTjpcbiAgICBjYXNlIEFUVFIuSURFTlRfQkFOQU5BX0JPWDpcbiAgICAgIC8vIGJhbmFuYS1pbi1hLWJveCBiaW5kaW5nIHZpYSBiaW5kb24tIG9yIFsoKV1cbiAgICAgIHJlc3VsdHMucHVzaCguLi5uZ0F0dHJzLmJhbmFuYXMpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5tYXAobmFtZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BVFRSSUJVVEUsXG4gICAgICBzb3J0VGV4dDogbmFtZSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlQ29tcGxldGlvbnNGb3JFbGVtZW50KFxuICAgIGluZm86IG5nLkFzdFJlc3VsdCwgZWxlbWVudE5hbWU6IHN0cmluZyk6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgY29uc3QgcmVzdWx0czogbmcuQ29tcGxldGlvbkVudHJ5W10gPSBbXTtcblxuICBpZiAoaW5mby50ZW1wbGF0ZSBpbnN0YW5jZW9mIElubGluZVRlbXBsYXRlKSB7XG4gICAgLy8gUHJvdmlkZSBIVE1MIGF0dHJpYnV0ZXMgY29tcGxldGlvbiBvbmx5IGZvciBpbmxpbmUgdGVtcGxhdGVzXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJpYnV0ZU5hbWVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAga2luZDogbmcuQ29tcGxldGlvbktpbmQuSFRNTF9BVFRSSUJVVEUsXG4gICAgICAgIHNvcnRUZXh0OiBuYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIEFuZ3VsYXIgYXR0cmlidXRlc1xuICBjb25zdCBuZ0F0dHJzID0gYW5ndWxhckF0dHJpYnV0ZXMoaW5mbywgZWxlbWVudE5hbWUpO1xuICBmb3IgKGNvbnN0IG5hbWUgb2YgbmdBdHRycy5vdGhlcnMpIHtcbiAgICByZXN1bHRzLnB1c2goe1xuICAgICAgbmFtZSxcbiAgICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkFUVFJJQlVURSxcbiAgICAgIHNvcnRUZXh0OiBuYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogUHJvdmlkZSBjb21wbGV0aW9ucyB0byB0aGUgUkhTIG9mIGFuIGF0dHJpYnV0ZSwgd2hpY2ggaXMgb2YgdGhlIGZvcm1cbiAqIExIUz1cIlJIU1wiLiBUaGUgdGVtcGxhdGUgcGF0aCBpcyBjb21wdXRlZCBmcm9tIHRoZSBzcGVjaWZpZWQgYGluZm9gIHdoZXJlYXNcbiAqIHRoZSBjb250ZXh0IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY2lmaWVkIGBodG1sUGF0aGAuXG4gKiBAcGFyYW0gaW5mbyBPYmplY3QgdGhhdCBjb250YWlucyB0aGUgdGVtcGxhdGUgQVNUXG4gKiBAcGFyYW0gaHRtbFBhdGggUGF0aCB0byB0aGUgSFRNTCBub2RlXG4gKi9cbmZ1bmN0aW9uIGF0dHJpYnV0ZVZhbHVlQ29tcGxldGlvbnMoXG4gICAgaW5mbzogbmcuQXN0UmVzdWx0LCBodG1sUGF0aDogSHRtbEFzdFBhdGgpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgVGVtcGxhdGUgQVNUIHBhdGguXG4gIGNvbnN0IHRlbXBsYXRlUGF0aCA9IGZpbmRUZW1wbGF0ZUFzdEF0KGluZm8udGVtcGxhdGVBc3QsIGh0bWxQYXRoLnBvc2l0aW9uKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBFeHByZXNzaW9uVmlzaXRvcihpbmZvLCBodG1sUGF0aC5wb3NpdGlvbiwgKCkgPT4ge1xuICAgIGNvbnN0IGRpbmZvID0gZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvKGluZm8pO1xuICAgIHJldHVybiBnZXRFeHByZXNzaW9uU2NvcGUoZGluZm8sIHRlbXBsYXRlUGF0aCk7XG4gIH0pO1xuICBpZiAodGVtcGxhdGVQYXRoLnRhaWwgaW5zdGFuY2VvZiBBdHRyQXN0IHx8XG4gICAgICB0ZW1wbGF0ZVBhdGgudGFpbCBpbnN0YW5jZW9mIEJvdW5kRWxlbWVudFByb3BlcnR5QXN0IHx8XG4gICAgICB0ZW1wbGF0ZVBhdGgudGFpbCBpbnN0YW5jZW9mIEJvdW5kRXZlbnRBc3QpIHtcbiAgICB0ZW1wbGF0ZVBhdGgudGFpbC52aXNpdCh2aXNpdG9yLCBudWxsKTtcbiAgICByZXR1cm4gdmlzaXRvci5yZXN1bHRzO1xuICB9XG4gIC8vIEluIG9yZGVyIHRvIHByb3ZpZGUgYWNjdXJhdGUgYXR0cmlidXRlIHZhbHVlIGNvbXBsZXRpb24sIHdlIG5lZWQgdG8ga25vd1xuICAvLyB3aGF0IHRoZSBMSFMgaXMsIGFuZCBjb25zdHJ1Y3QgdGhlIHByb3BlciBBU1QgaWYgaXQgaXMgbWlzc2luZy5cbiAgY29uc3QgaHRtbEF0dHIgPSBodG1sUGF0aC50YWlsIGFzIEF0dHJpYnV0ZTtcbiAgY29uc3QgYmluZGluZyA9IGdldEJpbmRpbmdEZXNjcmlwdG9yKGh0bWxBdHRyLm5hbWUpO1xuICBpZiAoYmluZGluZyAmJiBiaW5kaW5nLmtpbmQgPT09IEFUVFIuS1dfUkVGKSB7XG4gICAgbGV0IHJlZkFzdDogUmVmZXJlbmNlQXN0fHVuZGVmaW5lZDtcbiAgICBsZXQgZWxlbUFzdDogRWxlbWVudEFzdHx1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlUGF0aC50YWlsIGluc3RhbmNlb2YgUmVmZXJlbmNlQXN0KSB7XG4gICAgICByZWZBc3QgPSB0ZW1wbGF0ZVBhdGgudGFpbDtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlUGF0aC5wYXJlbnRPZihyZWZBc3QpO1xuICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnRBc3QpIHtcbiAgICAgICAgZWxlbUFzdCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlbXBsYXRlUGF0aC50YWlsIGluc3RhbmNlb2YgRWxlbWVudEFzdCkge1xuICAgICAgcmVmQXN0ID0gbmV3IFJlZmVyZW5jZUFzdChodG1sQXR0ci5uYW1lLCBudWxsISwgaHRtbEF0dHIudmFsdWUsIGh0bWxBdHRyLnZhbHVlU3BhbiEpO1xuICAgICAgZWxlbUFzdCA9IHRlbXBsYXRlUGF0aC50YWlsO1xuICAgIH1cbiAgICBpZiAocmVmQXN0ICYmIGVsZW1Bc3QpIHtcbiAgICAgIHJlZkFzdC52aXNpdCh2aXNpdG9yLCBlbGVtQXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSHRtbEFzdCBjb250YWlucyB0aGUgYEF0dHJpYnV0ZWAgbm9kZSwgaG93ZXZlciB0aGUgY29ycmVzcG9uZGluZyBgQXR0ckFzdGBcbiAgICAvLyBub2RlIGlzIG1pc3NpbmcgZnJvbSB0aGUgVGVtcGxhdGVBc3QuXG4gICAgY29uc3QgYXR0ckFzdCA9IG5ldyBBdHRyQXN0KGh0bWxBdHRyLm5hbWUsIGh0bWxBdHRyLnZhbHVlLCBodG1sQXR0ci52YWx1ZVNwYW4hKTtcbiAgICBhdHRyQXN0LnZpc2l0KHZpc2l0b3IsIG51bGwpO1xuICB9XG4gIHJldHVybiB2aXNpdG9yLnJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRDb21wbGV0aW9ucyhpbmZvOiBuZy5Bc3RSZXN1bHQpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIGNvbnN0IHJlc3VsdHM6IG5nLkNvbXBsZXRpb25FbnRyeVtdID0gWy4uLkFOR1VMQVJfRUxFTUVOVFNdO1xuXG4gIGlmIChpbmZvLnRlbXBsYXRlIGluc3RhbmNlb2YgSW5saW5lVGVtcGxhdGUpIHtcbiAgICAvLyBQcm92aWRlIEhUTUwgZWxlbWVudHMgY29tcGxldGlvbiBvbmx5IGZvciBpbmxpbmUgdGVtcGxhdGVzXG4gICAgcmVzdWx0cy5wdXNoKC4uLkhUTUxfRUxFTUVOVFMpO1xuICB9XG5cbiAgLy8gQ29sbGVjdCB0aGUgZWxlbWVudHMgcmVmZXJlbmNlZCBieSB0aGUgc2VsZWN0b3JzXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBnZXRTZWxlY3RvcnMoaW5mbykuc2VsZWN0b3JzKSB7XG4gICAgY29uc3QgbmFtZSA9IHNlbGVjdG9yLmVsZW1lbnQ7XG4gICAgaWYgKG5hbWUgJiYgIWNvbXBvbmVudHMuaGFzKG5hbWUpKSB7XG4gICAgICBjb21wb25lbnRzLmFkZChuYW1lKTtcbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkNPTVBPTkVOVCxcbiAgICAgICAgc29ydFRleHQ6IG5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gZW50aXR5Q29tcGxldGlvbnModmFsdWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgLy8gTG9vayBmb3IgZW50aXR5IGNvbXBsZXRpb25zXG4gIGNvbnN0IHJlID0gLyZbQS1aYS16XSo7Pyg/IVxcZCkvZztcbiAgbGV0IGZvdW5kOiBSZWdFeHBFeGVjQXJyYXl8bnVsbDtcbiAgbGV0IHJlc3VsdDogbmcuQ29tcGxldGlvbkVudHJ5W10gPSBbXTtcbiAgd2hpbGUgKGZvdW5kID0gcmUuZXhlYyh2YWx1ZSkpIHtcbiAgICBsZXQgbGVuID0gZm91bmRbMF0ubGVuZ3RoO1xuICAgIGlmIChwb3NpdGlvbiA+PSBmb3VuZC5pbmRleCAmJiBwb3NpdGlvbiA8IChmb3VuZC5pbmRleCArIGxlbikpIHtcbiAgICAgIHJlc3VsdCA9IE9iamVjdC5rZXlzKE5BTUVEX0VOVElUSUVTKS5tYXAobmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogYCYke25hbWV9O2AsXG4gICAgICAgICAga2luZDogbmcuQ29tcGxldGlvbktpbmQuRU5USVRZLFxuICAgICAgICAgIHNvcnRUZXh0OiBuYW1lLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbkNvbXBsZXRpb25zKGluZm86IG5nLkFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlcik6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgLy8gTG9vayBmb3IgYW4gaW50ZXJwb2xhdGlvbiBpbiBhdCB0aGUgcG9zaXRpb24uXG4gIGNvbnN0IHRlbXBsYXRlUGF0aCA9IGZpbmRUZW1wbGF0ZUFzdEF0KGluZm8udGVtcGxhdGVBc3QsIHBvc2l0aW9uKTtcbiAgaWYgKCF0ZW1wbGF0ZVBhdGgudGFpbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCB2aXNpdG9yID0gbmV3IEV4cHJlc3Npb25WaXNpdG9yKFxuICAgICAgaW5mbywgcG9zaXRpb24sICgpID0+IGdldEV4cHJlc3Npb25TY29wZShkaWFnbm9zdGljSW5mb0Zyb21UZW1wbGF0ZUluZm8oaW5mbyksIHRlbXBsYXRlUGF0aCkpO1xuICB0ZW1wbGF0ZVBhdGgudGFpbC52aXNpdCh2aXNpdG9yLCBudWxsKTtcbiAgcmV0dXJuIHZpc2l0b3IucmVzdWx0cztcbn1cblxuLy8gVGhlcmUgaXMgYSBzcGVjaWFsIGNhc2Ugb2YgSFRNTCB3aGVyZSB0ZXh0IHRoYXQgY29udGFpbnMgYSB1bmNsb3NlZCB0YWcgaXMgdHJlYXRlZCBhc1xuLy8gdGV4dC4gRm9yIGV4YXBsZSAnPGgxPiBTb21lIDxhIHRleHQgPC9oMT4nIHByb2R1Y2VzIGEgdGV4dCBub2RlcyBpbnNpZGUgb2YgdGhlIEgxXG4vLyBlbGVtZW50IFwiU29tZSA8YSB0ZXh0XCIuIFdlLCBob3dldmVyLCB3YW50IHRvIHRyZWF0IHRoaXMgYXMgaWYgdGhlIHVzZXIgd2FzIHJlcXVlc3Rpbmdcbi8vIHRoZSBhdHRyaWJ1dGVzIG9mIGFuIFwiYVwiIGVsZW1lbnQsIG5vdCByZXF1ZXN0aW5nIGNvbXBsZXRpb24gaW4gdGhlIGEgdGV4dCBlbGVtZW50LiBUaGlzXG4vLyBjb2RlIGNoZWNrcyBmb3IgdGhpcyBjYXNlIGFuZCByZXR1cm5zIGVsZW1lbnQgY29tcGxldGlvbnMgaWYgaXQgaXMgZGV0ZWN0ZWQgb3IgdW5kZWZpbmVkXG4vLyBpZiBpdCBpcyBub3QuXG5mdW5jdGlvbiB2b2lkRWxlbWVudEF0dHJpYnV0ZUNvbXBsZXRpb25zKFxuICAgIGluZm86IG5nLkFzdFJlc3VsdCwgcGF0aDogQXN0UGF0aDxIdG1sQXN0Pik6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgY29uc3QgdGFpbCA9IHBhdGgudGFpbDtcbiAgaWYgKHRhaWwgaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgY29uc3QgbWF0Y2ggPSB0YWlsLnZhbHVlLm1hdGNoKC88KFxcdyhcXHd8XFxkfC0pKjopPyhcXHcoXFx3fFxcZHwtKSopXFxzLyk7XG4gICAgLy8gVGhlIHBvc2l0aW9uIG11c3QgYmUgYWZ0ZXIgdGhlIG1hdGNoLCBvdGhlcndpc2Ugd2UgYXJlIHN0aWxsIGluIGEgcGxhY2Ugd2hlcmUgZWxlbWVudHNcbiAgICAvLyBhcmUgZXhwZWN0ZWQgKHN1Y2ggYXMgYDx8YWAgb3IgYDxhfGA7IHdlIG9ubHkgd2FudCBhdHRyaWJ1dGVzIGZvciBgPGEgfGAgb3IgYWZ0ZXIpLlxuICAgIGlmIChtYXRjaCAmJlxuICAgICAgICBwYXRoLnBvc2l0aW9uID49IChtYXRjaC5pbmRleCB8fCAwKSArIG1hdGNoWzBdLmxlbmd0aCArIHRhaWwuc291cmNlU3Bhbi5zdGFydC5vZmZzZXQpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQoaW5mbywgbWF0Y2hbM10pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cbmNsYXNzIEV4cHJlc3Npb25WaXNpdG9yIGV4dGVuZHMgTnVsbFRlbXBsYXRlVmlzaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29tcGxldGlvbnMgPSBuZXcgTWFwPHN0cmluZywgbmcuQ29tcGxldGlvbkVudHJ5PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBpbmZvOiBuZy5Bc3RSZXN1bHQsIHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgZ2V0RXhwcmVzc2lvblNjb3BlOiAoKSA9PiBuZy5TeW1ib2xUYWJsZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgcmVzdWx0cygpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jb21wbGV0aW9ucy52YWx1ZXMoKSk7XG4gIH1cblxuICB2aXNpdERpcmVjdGl2ZVByb3BlcnR5KGFzdDogQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCk6IHZvaWQge1xuICAgIHRoaXMucHJvY2Vzc0V4cHJlc3Npb25Db21wbGV0aW9ucyhhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50UHJvcGVydHkoYXN0OiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCk6IHZvaWQge1xuICAgIHRoaXMucHJvY2Vzc0V4cHJlc3Npb25Db21wbGV0aW9ucyhhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRFdmVudChhc3Q6IEJvdW5kRXZlbnRBc3QpOiB2b2lkIHtcbiAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMoYXN0LmhhbmRsZXIpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KCk6IHZvaWQge1xuICAgIC8vIG5vLW9wIGZvciBub3dcbiAgfVxuXG4gIHZpc2l0QXR0cihhc3Q6IEF0dHJBc3QpIHtcbiAgICBjb25zdCBiaW5kaW5nID0gZ2V0QmluZGluZ0Rlc2NyaXB0b3IoYXN0Lm5hbWUpO1xuICAgIGlmIChiaW5kaW5nICYmIGJpbmRpbmcua2luZCA9PT0gQVRUUi5LV19NSUNST1NZTlRBWCkge1xuICAgICAgLy8gVGhpcyBhIHRlbXBsYXRlIGJpbmRpbmcgZ2l2ZW4gYnkgbWljcm8gc3ludGF4IGV4cHJlc3Npb24uXG4gICAgICAvLyBGaXJzdCwgdmVyaWZ5IHRoZSBhdHRyaWJ1dGUgY29uc2lzdHMgb2Ygc29tZSBiaW5kaW5nIHdlIGNhbiBnaXZlIGNvbXBsZXRpb25zIGZvci5cbiAgICAgIC8vIFRoZSBzb3VyY2VTcGFuIG9mIEF0dHJBc3QgcG9pbnRzIHRvIHRoZSBSSFMgb2YgdGhlIGF0dHJpYnV0ZVxuICAgICAgY29uc3QgdGVtcGxhdGVLZXkgPSBiaW5kaW5nLm5hbWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVZhbHVlID0gYXN0LnNvdXJjZVNwYW4udG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlVXJsID0gYXN0LnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgICAvLyBUT0RPKGt5bGlhdSk6IFdlIGFyZSB1bmFibGUgdG8gZGV0ZXJtaW5lIHRoZSBhYnNvbHV0ZSBvZmZzZXQgb2YgdGhlIGtleVxuICAgICAgLy8gYnV0IGl0IGlzIG9rYXkgaGVyZSwgYmVjYXVzZSB3ZSBhcmUgb25seSBsb29raW5nIGF0IHRoZSBSSFMgb2YgdGhlIGF0dHJcbiAgICAgIGNvbnN0IGFic0tleU9mZnNldCA9IDA7XG4gICAgICBjb25zdCBhYnNWYWx1ZU9mZnNldCA9IGFzdC5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldDtcbiAgICAgIGNvbnN0IHt0ZW1wbGF0ZUJpbmRpbmdzfSA9IHRoaXMuaW5mby5leHByZXNzaW9uUGFyc2VyLnBhcnNlVGVtcGxhdGVCaW5kaW5ncyhcbiAgICAgICAgICB0ZW1wbGF0ZUtleSwgdGVtcGxhdGVWYWx1ZSwgdGVtcGxhdGVVcmwsIGFic0tleU9mZnNldCwgYWJzVmFsdWVPZmZzZXQpO1xuICAgICAgLy8gRmluZCB0aGUgbmVhcmVzdCB0ZW1wbGF0ZSBiaW5kaW5nIHRvIHRoZSBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IGxhc3RCaW5kaW5nRW5kID0gdGVtcGxhdGVCaW5kaW5ncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgdGVtcGxhdGVCaW5kaW5nc1t0ZW1wbGF0ZUJpbmRpbmdzLmxlbmd0aCAtIDFdLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFBvc2l0aW9uVG9CaW5kaW5nID1cbiAgICAgICAgICBsYXN0QmluZGluZ0VuZCAmJiB0aGlzLnBvc2l0aW9uID4gbGFzdEJpbmRpbmdFbmQgPyBsYXN0QmluZGluZ0VuZCA6IHRoaXMucG9zaXRpb247XG4gICAgICBjb25zdCB0ZW1wbGF0ZUJpbmRpbmcgPVxuICAgICAgICAgIHRlbXBsYXRlQmluZGluZ3MuZmluZChiID0+IGluU3Bhbihub3JtYWxpemVkUG9zaXRpb25Ub0JpbmRpbmcsIGIuc291cmNlU3BhbikpO1xuXG4gICAgICBpZiAoIXRlbXBsYXRlQmluZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWljcm9TeW50YXhJbkF0dHJpYnV0ZVZhbHVlKGFzdCwgdGVtcGxhdGVCaW5kaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbkFzdCA9IHRoaXMuaW5mby5leHByZXNzaW9uUGFyc2VyLnBhcnNlQmluZGluZyhcbiAgICAgICAgICBhc3QudmFsdWUsIGFzdC5zb3VyY2VTcGFuLnRvU3RyaW5nKCksIGFzdC5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCk7XG4gICAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMoZXhwcmVzc2lvbkFzdCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRSZWZlcmVuY2UoX2FzdDogUmVmZXJlbmNlQXN0LCBjb250ZXh0OiBFbGVtZW50QXN0KSB7XG4gICAgY29udGV4dC5kaXJlY3RpdmVzLmZvckVhY2goZGlyID0+IHtcbiAgICAgIGNvbnN0IHtleHBvcnRBc30gPSBkaXIuZGlyZWN0aXZlO1xuICAgICAgaWYgKGV4cG9ydEFzKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbnMuc2V0KFxuICAgICAgICAgICAgZXhwb3J0QXMsIHtuYW1lOiBleHBvcnRBcywga2luZDogbmcuQ29tcGxldGlvbktpbmQuUkVGRVJFTkNFLCBzb3J0VGV4dDogZXhwb3J0QXN9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0Qm91bmRUZXh0KGFzdDogQm91bmRUZXh0QXN0KSB7XG4gICAgaWYgKGluU3Bhbih0aGlzLnBvc2l0aW9uLCBhc3QudmFsdWUuc291cmNlU3BhbikpIHtcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gZ2V0RXhwcmVzc2lvbkNvbXBsZXRpb25zKFxuICAgICAgICAgIHRoaXMuZ2V0RXhwcmVzc2lvblNjb3BlKCksIGFzdC52YWx1ZSwgdGhpcy5wb3NpdGlvbiwgdGhpcy5pbmZvLnRlbXBsYXRlKTtcbiAgICAgIGlmIChjb21wbGV0aW9ucykge1xuICAgICAgICB0aGlzLmFkZFN5bWJvbHNUb0NvbXBsZXRpb25zKGNvbXBsZXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnModmFsdWU6IEFTVCkge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRFeHByZXNzaW9uQ29tcGxldGlvbnMoXG4gICAgICAgIHRoaXMuZ2V0RXhwcmVzc2lvblNjb3BlKCksIHZhbHVlLCB0aGlzLnBvc2l0aW9uLCB0aGlzLmluZm8udGVtcGxhdGUpO1xuICAgIGlmIChzeW1ib2xzKSB7XG4gICAgICB0aGlzLmFkZFN5bWJvbHNUb0NvbXBsZXRpb25zKHN5bWJvbHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3ltYm9sc1RvQ29tcGxldGlvbnMoc3ltYm9sczogbmcuU3ltYm9sW10pIHtcbiAgICBmb3IgKGNvbnN0IHMgb2Ygc3ltYm9scykge1xuICAgICAgaWYgKHMubmFtZS5zdGFydHNXaXRoKCdfXycpIHx8ICFzLnB1YmxpYyB8fCB0aGlzLmNvbXBsZXRpb25zLmhhcyhzLm5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcGlwZSBtZXRob2Qgc2hvdWxkIG5vdCBpbmNsdWRlIHBhcmVudGhlc2VzLlxuICAgICAgLy8gZS5nLiB7eyB2YWx1ZV9leHByZXNzaW9uIHwgc2xpY2UgOiBzdGFydCBbIDogZW5kIF0gfX1cbiAgICAgIGNvbnN0IHNob3VsZEluc2VydFBhcmVudGhlc2VzID0gcy5jYWxsYWJsZSAmJiBzLmtpbmQgIT09IG5nLkNvbXBsZXRpb25LaW5kLlBJUEU7XG4gICAgICB0aGlzLmNvbXBsZXRpb25zLnNldChzLm5hbWUsIHtcbiAgICAgICAgbmFtZTogcy5uYW1lLFxuICAgICAgICBraW5kOiBzLmtpbmQgYXMgbmcuQ29tcGxldGlvbktpbmQsXG4gICAgICAgIHNvcnRUZXh0OiBzLm5hbWUsXG4gICAgICAgIGluc2VydFRleHQ6IHNob3VsZEluc2VydFBhcmVudGhlc2VzID8gYCR7cy5uYW1lfSgpYCA6IHMubmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBoYW5kbGVzIHRoZSBjb21wbGV0aW9ucyBvZiBhdHRyaWJ1dGUgdmFsdWVzIGZvciBkaXJlY3RpdmVzIHRoYXRcbiAgICogc3VwcG9ydCB0aGUgbWljcm9zeW50YXggZm9ybWF0LiBFeGFtcGxlcyBhcmUgKm5nRm9yIGFuZCAqbmdJZi5cbiAgICogVGhlc2UgZGlyZWN0aXZlcyBhbGxvd3MgZGVjbGFyYXRpb24gb2YgXCJsZXRcIiB2YXJpYWJsZXMsIGFkZHMgY29udGV4dC1zcGVjaWZpY1xuICAgKiBzeW1ib2xzIGxpa2UgJGltcGxpY2l0LCBpbmRleCwgY291bnQsIGFtb25nIG90aGVyIGJlaGF2aW9ycy5cbiAgICogRm9yIGEgY29tcGxldGUgZGVzY3JpcHRpb24gb2Ygc3VjaCBmb3JtYXQsIHNlZVxuICAgKiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI3RoZS1hc3Rlcmlzay0tcHJlZml4XG4gICAqXG4gICAqIEBwYXJhbSBhdHRyIGRlc2NyaXB0b3IgZm9yIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBwYWlyXG4gICAqIEBwYXJhbSBiaW5kaW5nIHRlbXBsYXRlIGJpbmRpbmcgZm9yIHRoZSBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHByaXZhdGUgbWljcm9TeW50YXhJbkF0dHJpYnV0ZVZhbHVlKGF0dHI6IEF0dHJBc3QsIGJpbmRpbmc6IFRlbXBsYXRlQmluZGluZykge1xuICAgIGNvbnN0IGtleSA9IGF0dHIubmFtZS5zdWJzdHJpbmcoMSk7ICAvLyByZW1vdmUgbGVhZGluZyBhc3Rlcmlza1xuXG4gICAgLy8gRmluZCB0aGUgc2VsZWN0b3IgLSBlZyBuZ0ZvciwgbmdJZiwgZXRjXG4gICAgY29uc3Qgc2VsZWN0b3JJbmZvID0gZ2V0U2VsZWN0b3JzKHRoaXMuaW5mbyk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckluZm8uc2VsZWN0b3JzLmZpbmQocyA9PiB7XG4gICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgaW4gKGF0dHJpYnV0ZSwgdmFsdWUpIHBhaXJzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMuYXR0cnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgaWYgKHMuYXR0cnNbaV0gPT09IGtleSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVSZWxhdGl2ZVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiAtIGF0dHIuc291cmNlU3Bhbi5zdGFydC5vZmZzZXQ7XG5cbiAgICBpZiAoYmluZGluZyBpbnN0YW5jZW9mIFZhcmlhYmxlQmluZGluZykge1xuICAgICAgLy8gVE9ETyhreWxpYXUpOiBXaXRoIGV4cHJlc3Npb24gc291cmNlU3BhbiB3ZSBzaG91bGRuJ3QgaGF2ZSB0byBzZWFyY2hcbiAgICAgIC8vIHRoZSBhdHRyaWJ1dGUgdmFsdWUgc3RyaW5nIGFueW1vcmUuIEp1c3QgY2hlY2sgaWYgcG9zaXRpb24gaXMgaW4gdGhlXG4gICAgICAvLyBleHByZXNzaW9uIHNvdXJjZSBzcGFuLlxuICAgICAgY29uc3QgZXF1YWxMb2NhdGlvbiA9IGF0dHIudmFsdWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxdWFsTG9jYXRpb24gPiAwICYmIHZhbHVlUmVsYXRpdmVQb3NpdGlvbiA+IGVxdWFsTG9jYXRpb24pIHtcbiAgICAgICAgLy8gV2UgYXJlIGFmdGVyIHRoZSAnPScgaW4gYSBsZXQgY2xhdXNlLiBUaGUgdmFsaWQgdmFsdWVzIGhlcmUgYXJlIHRoZSBtZW1iZXJzIG9mIHRoZVxuICAgICAgICAvLyB0ZW1wbGF0ZSByZWZlcmVuY2UncyB0eXBlIHBhcmFtZXRlci5cbiAgICAgICAgY29uc3QgZGlyZWN0aXZlTWV0YWRhdGEgPSBzZWxlY3RvckluZm8ubWFwLmdldChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChkaXJlY3RpdmVNZXRhZGF0YSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHRUYWJsZSA9XG4gICAgICAgICAgICAgIHRoaXMuaW5mby50ZW1wbGF0ZS5xdWVyeS5nZXRUZW1wbGF0ZUNvbnRleHQoZGlyZWN0aXZlTWV0YWRhdGEudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICAgIGlmIChjb250ZXh0VGFibGUpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgYWRkcyBzeW1ib2xzIGxpa2UgJGltcGxpY2l0LCBpbmRleCwgY291bnQsIGV0Yy5cbiAgICAgICAgICAgIHRoaXMuYWRkU3ltYm9sc1RvQ29tcGxldGlvbnMoY29udGV4dFRhYmxlLnZhbHVlcygpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJpbmRpbmcgaW5zdGFuY2VvZiBFeHByZXNzaW9uQmluZGluZykge1xuICAgICAgaWYgKGluU3Bhbih0aGlzLnBvc2l0aW9uLCBiaW5kaW5nLnZhbHVlPy5hc3Quc291cmNlU3BhbikpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRXhwcmVzc2lvbkNvbXBsZXRpb25zKGJpbmRpbmcudmFsdWUhLmFzdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoIWJpbmRpbmcudmFsdWUgJiYgdGhpcy5wb3NpdGlvbiA+IGJpbmRpbmcua2V5LnNwYW4uZW5kKSB7XG4gICAgICAgIC8vIE5vIGV4cHJlc3Npb24gaXMgZGVmaW5lZCBmb3IgdGhlIHZhbHVlIG9mIHRoZSBrZXkgZXhwcmVzc2lvbiBiaW5kaW5nLCBidXQgdGhlIGN1cnNvciBpc1xuICAgICAgICAvLyBpbiBhIGxvY2F0aW9uIHdoZXJlIHRoZSBleHByZXNzaW9uIHdvdWxkIGJlIGRlZmluZWQuIFRoaXMgY2FuIGhhcHBlbiBpbiBhIGNhc2UgbGlrZVxuICAgICAgICAvLyAgIGxldCBpIG9mIHxcbiAgICAgICAgLy8gICAgICAgICAgICBeLS0gY3Vyc29yXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSwgYmFja2ZpbGwgdGhlIHZhbHVlIHRvIGJlIGFuIGVtcHR5IGV4cHJlc3Npb24gYW5kIHJldHJpZXZlIGNvbXBsZXRpb25zLlxuICAgICAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMobmV3IEVtcHR5RXhwcihcbiAgICAgICAgICAgIG5ldyBQYXJzZVNwYW4odmFsdWVSZWxhdGl2ZVBvc2l0aW9uLCB2YWx1ZVJlbGF0aXZlUG9zaXRpb24pLFxuICAgICAgICAgICAgbmV3IEFic29sdXRlU291cmNlU3Bhbih0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZVRleHQodGVtcGxhdGU6IG5nLlRlbXBsYXRlU291cmNlLCBzcGFuOiBuZy5TcGFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnNvdXJjZS5zdWJzdHJpbmcoc3Bhbi5zdGFydCwgc3Bhbi5lbmQpO1xufVxuXG5pbnRlcmZhY2UgQW5ndWxhckF0dHJpYnV0ZXMge1xuICAvKipcbiAgICogQXR0cmlidXRlcyB0aGF0IHN1cHBvcnQgdGhlICogc3ludGF4LiBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL1RlbXBsYXRlUmVmXG4gICAqL1xuICB0ZW1wbGF0ZVJlZnM6IFNldDxzdHJpbmc+O1xuICAvKipcbiAgICogQXR0cmlidXRlcyB3aXRoIHRoZSBASW5wdXQgYW5ub3RhdGlvbi5cbiAgICovXG4gIGlucHV0czogU2V0PHN0cmluZz47XG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIHdpdGggdGhlIEBPdXRwdXQgYW5ub3RhdGlvbi5cbiAgICovXG4gIG91dHB1dHM6IFNldDxzdHJpbmc+O1xuICAvKipcbiAgICogQXR0cmlidXRlcyB0aGF0IHN1cHBvcnQgdGhlIFsoKV0gb3IgYmluZG9uLSBzeW50YXguXG4gICAqL1xuICBiYW5hbmFzOiBTZXQ8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEdlbmVyYWwgYXR0cmlidXRlcyB0aGF0IG1hdGNoIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICovXG4gIG90aGVyczogU2V0PHN0cmluZz47XG59XG5cbi8qKlxuICogUmV0dXJuIGFsbCBBbmd1bGFyLXNwZWNpZmljIGF0dHJpYnV0ZXMgZm9yIHRoZSBlbGVtZW50IHdpdGggYGVsZW1lbnROYW1lYC5cbiAqIEBwYXJhbSBpbmZvXG4gKiBAcGFyYW0gZWxlbWVudE5hbWVcbiAqL1xuZnVuY3Rpb24gYW5ndWxhckF0dHJpYnV0ZXMoaW5mbzogbmcuQXN0UmVzdWx0LCBlbGVtZW50TmFtZTogc3RyaW5nKTogQW5ndWxhckF0dHJpYnV0ZXMge1xuICBjb25zdCB7c2VsZWN0b3JzLCBtYXA6IHNlbGVjdG9yTWFwfSA9IGdldFNlbGVjdG9ycyhpbmZvKTtcbiAgY29uc3QgdGVtcGxhdGVSZWZzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IGlucHV0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBvdXRwdXRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IGJhbmFuYXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3Qgb3RoZXJzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XG4gICAgaWYgKHNlbGVjdG9yLmVsZW1lbnQgJiYgc2VsZWN0b3IuZWxlbWVudCAhPT0gZWxlbWVudE5hbWUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBzdW1tYXJ5ID0gc2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yKSE7XG4gICAgY29uc3QgaGFzVGVtcGxhdGVSZWYgPSBpc1N0cnVjdHVyYWxEaXJlY3RpdmUoc3VtbWFyeS50eXBlKTtcbiAgICAvLyBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgaW4gKGF0dHJpYnV0ZSwgdmFsdWUpIHBhaXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5hdHRycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgY29uc3QgYXR0ciA9IHNlbGVjdG9yLmF0dHJzW2ldO1xuICAgICAgaWYgKGhhc1RlbXBsYXRlUmVmKSB7XG4gICAgICAgIHRlbXBsYXRlUmVmcy5hZGQoYXR0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdGhlcnMuYWRkKGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXMoc3VtbWFyeS5pbnB1dHMpKSB7XG4gICAgICBpbnB1dHMuYWRkKGlucHV0KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBvdXRwdXQgb2YgT2JqZWN0LnZhbHVlcyhzdW1tYXJ5Lm91dHB1dHMpKSB7XG4gICAgICBvdXRwdXRzLmFkZChvdXRwdXQpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgaW5wdXRzKSB7XG4gICAgLy8gQWRkIGJhbmFuYS1pbi1hLWJveCBzeW50YXhcbiAgICAvLyBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvdGVtcGxhdGUtc3ludGF4I3R3by13YXktYmluZGluZy1cbiAgICBpZiAob3V0cHV0cy5oYXMoYCR7bmFtZX1DaGFuZ2VgKSkge1xuICAgICAgYmFuYW5hcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7dGVtcGxhdGVSZWZzLCBpbnB1dHMsIG91dHB1dHMsIGJhbmFuYXMsIG90aGVyc307XG59XG4iXX0=