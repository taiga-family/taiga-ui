/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { identifierName } from '../compile_metadata';
import { ASTWithSource, EmptyExpr } from '../expression_parser/ast';
import { createTokenForExternalReference, createTokenForReference, Identifiers } from '../identifiers';
import * as html from '../ml_parser/ast';
import { ParseTreeResult } from '../ml_parser/html_parser';
import { removeWhitespaces, replaceNgsp } from '../ml_parser/html_whitespaces';
import { expandNodes } from '../ml_parser/icu_ast_expander';
import { InterpolationConfig } from '../ml_parser/interpolation_config';
import { isNgTemplate, splitNsName } from '../ml_parser/tags';
import { ParseError, ParseErrorLevel, ParseSourceSpan } from '../parse_util';
import { ProviderElementContext, ProviderViewContext } from '../provider_analyzer';
import { CssSelector, SelectorMatcher } from '../selector';
import { isStyleUrlResolvable } from '../style_url_resolver';
import { newArray, syntaxError } from '../util';
import { BindingParser } from './binding_parser';
import * as t from './template_ast';
import { PreparsedElementType, preparseElement } from './template_preparser';
var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/;
// Group 1 = "bind-"
var KW_BIND_IDX = 1;
// Group 2 = "let-"
var KW_LET_IDX = 2;
// Group 3 = "ref-/#"
var KW_REF_IDX = 3;
// Group 4 = "on-"
var KW_ON_IDX = 4;
// Group 5 = "bindon-"
var KW_BINDON_IDX = 5;
// Group 6 = "@"
var KW_AT_IDX = 6;
// Group 7 = the identifier after "bind-", "let-", "ref-/#", "on-", "bindon-" or "@"
var IDENT_KW_IDX = 7;
// Group 8 = identifier inside [()]
var IDENT_BANANA_BOX_IDX = 8;
// Group 9 = identifier inside []
var IDENT_PROPERTY_IDX = 9;
// Group 10 = identifier inside ()
var IDENT_EVENT_IDX = 10;
var TEMPLATE_ATTR_PREFIX = '*';
var CLASS_ATTR = 'class';
var _TEXT_CSS_SELECTOR;
function TEXT_CSS_SELECTOR() {
    if (!_TEXT_CSS_SELECTOR) {
        _TEXT_CSS_SELECTOR = CssSelector.parse('*')[0];
    }
    return _TEXT_CSS_SELECTOR;
}
var TemplateParseError = /** @class */ (function (_super) {
    __extends(TemplateParseError, _super);
    function TemplateParseError(message, span, level) {
        return _super.call(this, span, message, level) || this;
    }
    return TemplateParseError;
}(ParseError));
export { TemplateParseError };
var TemplateParseResult = /** @class */ (function () {
    function TemplateParseResult(templateAst, usedPipes, errors) {
        this.templateAst = templateAst;
        this.usedPipes = usedPipes;
        this.errors = errors;
    }
    return TemplateParseResult;
}());
export { TemplateParseResult };
var TemplateParser = /** @class */ (function () {
    function TemplateParser(_config, _reflector, _exprParser, _schemaRegistry, _htmlParser, _console, transforms) {
        this._config = _config;
        this._reflector = _reflector;
        this._exprParser = _exprParser;
        this._schemaRegistry = _schemaRegistry;
        this._htmlParser = _htmlParser;
        this._console = _console;
        this.transforms = transforms;
    }
    Object.defineProperty(TemplateParser.prototype, "expressionParser", {
        get: function () {
            return this._exprParser;
        },
        enumerable: true,
        configurable: true
    });
    TemplateParser.prototype.parse = function (component, template, directives, pipes, schemas, templateUrl, preserveWhitespaces) {
        var result = this.tryParse(component, template, directives, pipes, schemas, templateUrl, preserveWhitespaces);
        var warnings = result.errors.filter(function (error) { return error.level === ParseErrorLevel.WARNING; });
        var errors = result.errors.filter(function (error) { return error.level === ParseErrorLevel.ERROR; });
        if (warnings.length > 0) {
            this._console.warn("Template parse warnings:\n" + warnings.join('\n'));
        }
        if (errors.length > 0) {
            var errorString = errors.join('\n');
            throw syntaxError("Template parse errors:\n" + errorString, errors);
        }
        return { template: result.templateAst, pipes: result.usedPipes };
    };
    TemplateParser.prototype.tryParse = function (component, template, directives, pipes, schemas, templateUrl, preserveWhitespaces) {
        var htmlParseResult = typeof template === 'string' ?
            this._htmlParser.parse(template, templateUrl, {
                tokenizeExpansionForms: true,
                interpolationConfig: this.getInterpolationConfig(component)
            }) :
            template;
        if (!preserveWhitespaces) {
            htmlParseResult = removeWhitespaces(htmlParseResult);
        }
        return this.tryParseHtml(this.expandHtml(htmlParseResult), component, directives, pipes, schemas);
    };
    TemplateParser.prototype.tryParseHtml = function (htmlAstWithErrors, component, directives, pipes, schemas) {
        var result;
        var errors = htmlAstWithErrors.errors;
        var usedPipes = [];
        if (htmlAstWithErrors.rootNodes.length > 0) {
            var uniqDirectives = removeSummaryDuplicates(directives);
            var uniqPipes = removeSummaryDuplicates(pipes);
            var providerViewContext = new ProviderViewContext(this._reflector, component);
            var interpolationConfig = undefined;
            if (component.template && component.template.interpolation) {
                interpolationConfig = {
                    start: component.template.interpolation[0],
                    end: component.template.interpolation[1]
                };
            }
            var bindingParser = new BindingParser(this._exprParser, interpolationConfig, this._schemaRegistry, uniqPipes, errors);
            var parseVisitor = new TemplateParseVisitor(this._reflector, this._config, providerViewContext, uniqDirectives, bindingParser, this._schemaRegistry, schemas, errors);
            result = html.visitAll(parseVisitor, htmlAstWithErrors.rootNodes, EMPTY_ELEMENT_CONTEXT);
            errors.push.apply(errors, __spread(providerViewContext.errors));
            usedPipes.push.apply(usedPipes, __spread(bindingParser.getUsedPipes()));
        }
        else {
            result = [];
        }
        this._assertNoReferenceDuplicationOnTemplate(result, errors);
        if (errors.length > 0) {
            return new TemplateParseResult(result, usedPipes, errors);
        }
        if (this.transforms) {
            this.transforms.forEach(function (transform) {
                result = t.templateVisitAll(transform, result);
            });
        }
        return new TemplateParseResult(result, usedPipes, errors);
    };
    TemplateParser.prototype.expandHtml = function (htmlAstWithErrors, forced) {
        if (forced === void 0) { forced = false; }
        var errors = htmlAstWithErrors.errors;
        if (errors.length == 0 || forced) {
            // Transform ICU messages to angular directives
            var expandedHtmlAst = expandNodes(htmlAstWithErrors.rootNodes);
            errors.push.apply(errors, __spread(expandedHtmlAst.errors));
            htmlAstWithErrors = new ParseTreeResult(expandedHtmlAst.nodes, errors);
        }
        return htmlAstWithErrors;
    };
    TemplateParser.prototype.getInterpolationConfig = function (component) {
        if (component.template) {
            return InterpolationConfig.fromArray(component.template.interpolation);
        }
        return undefined;
    };
    /** @internal */
    TemplateParser.prototype._assertNoReferenceDuplicationOnTemplate = function (result, errors) {
        var existingReferences = [];
        result.filter(function (element) { return !!element.references; })
            .forEach(function (element) { return element.references.forEach(function (reference) {
            var name = reference.name;
            if (existingReferences.indexOf(name) < 0) {
                existingReferences.push(name);
            }
            else {
                var error = new TemplateParseError("Reference \"#" + name + "\" is defined several times", reference.sourceSpan, ParseErrorLevel.ERROR);
                errors.push(error);
            }
        }); });
    };
    return TemplateParser;
}());
export { TemplateParser };
var TemplateParseVisitor = /** @class */ (function () {
    function TemplateParseVisitor(reflector, config, providerViewContext, directives, _bindingParser, _schemaRegistry, _schemas, _targetErrors) {
        var _this = this;
        this.reflector = reflector;
        this.config = config;
        this.providerViewContext = providerViewContext;
        this._bindingParser = _bindingParser;
        this._schemaRegistry = _schemaRegistry;
        this._schemas = _schemas;
        this._targetErrors = _targetErrors;
        this.selectorMatcher = new SelectorMatcher();
        this.directivesIndex = new Map();
        this.ngContentCount = 0;
        // Note: queries start with id 1 so we can use the number in a Bloom filter!
        this.contentQueryStartId = providerViewContext.component.viewQueries.length + 1;
        directives.forEach(function (directive, index) {
            var selector = CssSelector.parse(directive.selector);
            _this.selectorMatcher.addSelectables(selector, directive);
            _this.directivesIndex.set(directive, index);
        });
    }
    TemplateParseVisitor.prototype.visitExpansion = function (expansion, context) {
        return null;
    };
    TemplateParseVisitor.prototype.visitExpansionCase = function (expansionCase, context) {
        return null;
    };
    TemplateParseVisitor.prototype.visitText = function (text, parent) {
        var ngContentIndex = parent.findNgContentIndex(TEXT_CSS_SELECTOR());
        var valueNoNgsp = replaceNgsp(text.value);
        var expr = this._bindingParser.parseInterpolation(valueNoNgsp, text.sourceSpan);
        return expr ? new t.BoundTextAst(expr, ngContentIndex, text.sourceSpan) :
            new t.TextAst(valueNoNgsp, ngContentIndex, text.sourceSpan);
    };
    TemplateParseVisitor.prototype.visitAttribute = function (attribute, context) {
        return new t.AttrAst(attribute.name, attribute.value, attribute.sourceSpan);
    };
    TemplateParseVisitor.prototype.visitComment = function (comment, context) {
        return null;
    };
    TemplateParseVisitor.prototype.visitElement = function (element, parent) {
        var _this = this;
        var queryStartIndex = this.contentQueryStartId;
        var elName = element.name;
        var preparsedElement = preparseElement(element);
        if (preparsedElement.type === PreparsedElementType.SCRIPT ||
            preparsedElement.type === PreparsedElementType.STYLE) {
            // Skipping <script> for security reasons
            // Skipping <style> as we already processed them
            // in the StyleCompiler
            return null;
        }
        if (preparsedElement.type === PreparsedElementType.STYLESHEET &&
            isStyleUrlResolvable(preparsedElement.hrefAttr)) {
            // Skipping stylesheets with either relative urls or package scheme as we already processed
            // them in the StyleCompiler
            return null;
        }
        var matchableAttrs = [];
        var elementOrDirectiveProps = [];
        var elementOrDirectiveRefs = [];
        var elementVars = [];
        var events = [];
        var templateElementOrDirectiveProps = [];
        var templateMatchableAttrs = [];
        var templateElementVars = [];
        var hasInlineTemplates = false;
        var attrs = [];
        var isTemplateElement = isNgTemplate(element.name);
        element.attrs.forEach(function (attr) {
            var parsedVariables = [];
            var hasBinding = _this._parseAttr(isTemplateElement, attr, matchableAttrs, elementOrDirectiveProps, events, elementOrDirectiveRefs, elementVars);
            elementVars.push.apply(elementVars, __spread(parsedVariables.map(function (v) { return t.VariableAst.fromParsedVariable(v); })));
            var templateValue;
            var templateKey;
            var normalizedName = _this._normalizeAttributeName(attr.name);
            if (normalizedName.startsWith(TEMPLATE_ATTR_PREFIX)) {
                templateValue = attr.value;
                templateKey = normalizedName.substring(TEMPLATE_ATTR_PREFIX.length);
            }
            var hasTemplateBinding = templateValue != null;
            if (hasTemplateBinding) {
                if (hasInlineTemplates) {
                    _this._reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *", attr.sourceSpan);
                }
                hasInlineTemplates = true;
                var parsedVariables_1 = [];
                var absoluteOffset = (attr.valueSpan || attr.sourceSpan).start.offset;
                _this._bindingParser.parseInlineTemplateBinding(templateKey, templateValue, attr.sourceSpan, absoluteOffset, templateMatchableAttrs, templateElementOrDirectiveProps, parsedVariables_1);
                templateElementVars.push.apply(templateElementVars, __spread(parsedVariables_1.map(function (v) { return t.VariableAst.fromParsedVariable(v); })));
            }
            if (!hasBinding && !hasTemplateBinding) {
                // don't include the bindings as attributes as well in the AST
                attrs.push(_this.visitAttribute(attr, null));
                matchableAttrs.push([attr.name, attr.value]);
            }
        });
        var elementCssSelector = createElementCssSelector(elName, matchableAttrs);
        var _a = this._parseDirectives(this.selectorMatcher, elementCssSelector), directiveMetas = _a.directives, matchElement = _a.matchElement;
        var references = [];
        var boundDirectivePropNames = new Set();
        var directiveAsts = this._createDirectiveAsts(isTemplateElement, element.name, directiveMetas, elementOrDirectiveProps, elementOrDirectiveRefs, element.sourceSpan, references, boundDirectivePropNames);
        var elementProps = this._createElementPropertyAsts(element.name, elementOrDirectiveProps, boundDirectivePropNames);
        var isViewRoot = parent.isTemplateElement || hasInlineTemplates;
        var providerContext = new ProviderElementContext(this.providerViewContext, parent.providerContext, isViewRoot, directiveAsts, attrs, references, isTemplateElement, queryStartIndex, element.sourceSpan);
        var children = html.visitAll(preparsedElement.nonBindable ? NON_BINDABLE_VISITOR : this, element.children, ElementContext.create(isTemplateElement, directiveAsts, isTemplateElement ? parent.providerContext : providerContext));
        providerContext.afterElement();
        // Override the actual selector when the `ngProjectAs` attribute is provided
        var projectionSelector = preparsedElement.projectAs != '' ?
            CssSelector.parse(preparsedElement.projectAs)[0] :
            elementCssSelector;
        var ngContentIndex = parent.findNgContentIndex(projectionSelector);
        var parsedElement;
        if (preparsedElement.type === PreparsedElementType.NG_CONTENT) {
            // `<ng-content>` element
            if (element.children && !element.children.every(_isEmptyTextNode)) {
                this._reportError("<ng-content> element cannot have content.", element.sourceSpan);
            }
            parsedElement = new t.NgContentAst(this.ngContentCount++, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
        }
        else if (isTemplateElement) {
            // `<ng-template>` element
            this._assertAllEventsPublishedByDirectives(directiveAsts, events);
            this._assertNoComponentsNorElementBindingsOnTemplate(directiveAsts, elementProps, element.sourceSpan);
            parsedElement = new t.EmbeddedTemplateAst(attrs, events, references, elementVars, providerContext.transformedDirectiveAsts, providerContext.transformProviders, providerContext.transformedHasViewContainer, providerContext.queryMatches, children, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
        }
        else {
            // element other than `<ng-content>` and `<ng-template>`
            this._assertElementExists(matchElement, element);
            this._assertOnlyOneComponent(directiveAsts, element.sourceSpan);
            var ngContentIndex_1 = hasInlineTemplates ? null : parent.findNgContentIndex(projectionSelector);
            parsedElement = new t.ElementAst(elName, attrs, elementProps, events, references, providerContext.transformedDirectiveAsts, providerContext.transformProviders, providerContext.transformedHasViewContainer, providerContext.queryMatches, children, hasInlineTemplates ? null : ngContentIndex_1, element.sourceSpan, element.endSourceSpan || null);
        }
        if (hasInlineTemplates) {
            // The element as a *-attribute
            var templateQueryStartIndex = this.contentQueryStartId;
            var templateSelector = createElementCssSelector('ng-template', templateMatchableAttrs);
            var directives = this._parseDirectives(this.selectorMatcher, templateSelector).directives;
            var templateBoundDirectivePropNames = new Set();
            var templateDirectiveAsts = this._createDirectiveAsts(true, elName, directives, templateElementOrDirectiveProps, [], element.sourceSpan, [], templateBoundDirectivePropNames);
            var templateElementProps = this._createElementPropertyAsts(elName, templateElementOrDirectiveProps, templateBoundDirectivePropNames);
            this._assertNoComponentsNorElementBindingsOnTemplate(templateDirectiveAsts, templateElementProps, element.sourceSpan);
            var templateProviderContext = new ProviderElementContext(this.providerViewContext, parent.providerContext, parent.isTemplateElement, templateDirectiveAsts, [], [], true, templateQueryStartIndex, element.sourceSpan);
            templateProviderContext.afterElement();
            parsedElement = new t.EmbeddedTemplateAst([], [], [], templateElementVars, templateProviderContext.transformedDirectiveAsts, templateProviderContext.transformProviders, templateProviderContext.transformedHasViewContainer, templateProviderContext.queryMatches, [parsedElement], ngContentIndex, element.sourceSpan);
        }
        return parsedElement;
    };
    TemplateParseVisitor.prototype._parseAttr = function (isTemplateElement, attr, targetMatchableAttrs, targetProps, targetEvents, targetRefs, targetVars) {
        var name = this._normalizeAttributeName(attr.name);
        var value = attr.value;
        var srcSpan = attr.sourceSpan;
        var absoluteOffset = attr.valueSpan ? attr.valueSpan.start.offset : srcSpan.start.offset;
        var boundEvents = [];
        var bindParts = name.match(BIND_NAME_REGEXP);
        var hasBinding = false;
        if (bindParts !== null) {
            hasBinding = true;
            if (bindParts[KW_BIND_IDX] != null) {
                this._bindingParser.parsePropertyBinding(bindParts[IDENT_KW_IDX], value, false, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
            }
            else if (bindParts[KW_LET_IDX]) {
                if (isTemplateElement) {
                    var identifier = bindParts[IDENT_KW_IDX];
                    this._parseVariable(identifier, value, srcSpan, targetVars);
                }
                else {
                    this._reportError("\"let-\" is only supported on ng-template elements.", srcSpan);
                }
            }
            else if (bindParts[KW_REF_IDX]) {
                var identifier = bindParts[IDENT_KW_IDX];
                this._parseReference(identifier, value, srcSpan, targetRefs);
            }
            else if (bindParts[KW_ON_IDX]) {
                this._bindingParser.parseEvent(bindParts[IDENT_KW_IDX], value, srcSpan, attr.valueSpan || srcSpan, targetMatchableAttrs, boundEvents);
            }
            else if (bindParts[KW_BINDON_IDX]) {
                this._bindingParser.parsePropertyBinding(bindParts[IDENT_KW_IDX], value, false, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
                this._parseAssignmentEvent(bindParts[IDENT_KW_IDX], value, srcSpan, attr.valueSpan || srcSpan, targetMatchableAttrs, boundEvents);
            }
            else if (bindParts[KW_AT_IDX]) {
                this._bindingParser.parseLiteralAttr(name, value, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
            }
            else if (bindParts[IDENT_BANANA_BOX_IDX]) {
                this._bindingParser.parsePropertyBinding(bindParts[IDENT_BANANA_BOX_IDX], value, false, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
                this._parseAssignmentEvent(bindParts[IDENT_BANANA_BOX_IDX], value, srcSpan, attr.valueSpan || srcSpan, targetMatchableAttrs, boundEvents);
            }
            else if (bindParts[IDENT_PROPERTY_IDX]) {
                this._bindingParser.parsePropertyBinding(bindParts[IDENT_PROPERTY_IDX], value, false, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
            }
            else if (bindParts[IDENT_EVENT_IDX]) {
                this._bindingParser.parseEvent(bindParts[IDENT_EVENT_IDX], value, srcSpan, attr.valueSpan || srcSpan, targetMatchableAttrs, boundEvents);
            }
        }
        else {
            hasBinding = this._bindingParser.parsePropertyInterpolation(name, value, srcSpan, attr.valueSpan, targetMatchableAttrs, targetProps);
        }
        if (!hasBinding) {
            this._bindingParser.parseLiteralAttr(name, value, srcSpan, absoluteOffset, attr.valueSpan, targetMatchableAttrs, targetProps);
        }
        targetEvents.push.apply(targetEvents, __spread(boundEvents.map(function (e) { return t.BoundEventAst.fromParsedEvent(e); })));
        return hasBinding;
    };
    TemplateParseVisitor.prototype._normalizeAttributeName = function (attrName) {
        return /^data-/i.test(attrName) ? attrName.substring(5) : attrName;
    };
    TemplateParseVisitor.prototype._parseVariable = function (identifier, value, sourceSpan, targetVars) {
        if (identifier.indexOf('-') > -1) {
            this._reportError("\"-\" is not allowed in variable names", sourceSpan);
        }
        else if (identifier.length === 0) {
            this._reportError("Variable does not have a name", sourceSpan);
        }
        targetVars.push(new t.VariableAst(identifier, value, sourceSpan));
    };
    TemplateParseVisitor.prototype._parseReference = function (identifier, value, sourceSpan, targetRefs) {
        if (identifier.indexOf('-') > -1) {
            this._reportError("\"-\" is not allowed in reference names", sourceSpan);
        }
        else if (identifier.length === 0) {
            this._reportError("Reference does not have a name", sourceSpan);
        }
        targetRefs.push(new ElementOrDirectiveRef(identifier, value, sourceSpan));
    };
    TemplateParseVisitor.prototype._parseAssignmentEvent = function (name, expression, sourceSpan, valueSpan, targetMatchableAttrs, targetEvents) {
        this._bindingParser.parseEvent(name + "Change", expression + "=$event", sourceSpan, valueSpan, targetMatchableAttrs, targetEvents);
    };
    TemplateParseVisitor.prototype._parseDirectives = function (selectorMatcher, elementCssSelector) {
        var _this = this;
        // Need to sort the directives so that we get consistent results throughout,
        // as selectorMatcher uses Maps inside.
        // Also deduplicate directives as they might match more than one time!
        var directives = newArray(this.directivesIndex.size);
        // Whether any directive selector matches on the element name
        var matchElement = false;
        selectorMatcher.match(elementCssSelector, function (selector, directive) {
            directives[_this.directivesIndex.get(directive)] = directive;
            matchElement = matchElement || selector.hasElementSelector();
        });
        return {
            directives: directives.filter(function (dir) { return !!dir; }),
            matchElement: matchElement,
        };
    };
    TemplateParseVisitor.prototype._createDirectiveAsts = function (isTemplateElement, elementName, directives, props, elementOrDirectiveRefs, elementSourceSpan, targetReferences, targetBoundDirectivePropNames) {
        var _this = this;
        var matchedReferences = new Set();
        var component = null;
        var directiveAsts = directives.map(function (directive) {
            var sourceSpan = new ParseSourceSpan(elementSourceSpan.start, elementSourceSpan.end, "Directive " + identifierName(directive.type));
            if (directive.isComponent) {
                component = directive;
            }
            var directiveProperties = [];
            var boundProperties = _this._bindingParser.createDirectiveHostPropertyAsts(directive, elementName, sourceSpan);
            var hostProperties = boundProperties.map(function (prop) { return t.BoundElementPropertyAst.fromBoundProperty(prop); });
            // Note: We need to check the host properties here as well,
            // as we don't know the element name in the DirectiveWrapperCompiler yet.
            hostProperties = _this._checkPropertiesInSchema(elementName, hostProperties);
            var parsedEvents = _this._bindingParser.createDirectiveHostEventAsts(directive, sourceSpan);
            _this._createDirectivePropertyAsts(directive.inputs, props, directiveProperties, targetBoundDirectivePropNames);
            elementOrDirectiveRefs.forEach(function (elOrDirRef) {
                if ((elOrDirRef.value.length === 0 && directive.isComponent) ||
                    (elOrDirRef.isReferenceToDirective(directive))) {
                    targetReferences.push(new t.ReferenceAst(elOrDirRef.name, createTokenForReference(directive.type.reference), elOrDirRef.value, elOrDirRef.sourceSpan));
                    matchedReferences.add(elOrDirRef.name);
                }
            });
            var hostEvents = parsedEvents.map(function (e) { return t.BoundEventAst.fromParsedEvent(e); });
            var contentQueryStartId = _this.contentQueryStartId;
            _this.contentQueryStartId += directive.queries.length;
            return new t.DirectiveAst(directive, directiveProperties, hostProperties, hostEvents, contentQueryStartId, sourceSpan);
        });
        elementOrDirectiveRefs.forEach(function (elOrDirRef) {
            if (elOrDirRef.value.length > 0) {
                if (!matchedReferences.has(elOrDirRef.name)) {
                    _this._reportError("There is no directive with \"exportAs\" set to \"" + elOrDirRef.value + "\"", elOrDirRef.sourceSpan);
                }
            }
            else if (!component) {
                var refToken = null;
                if (isTemplateElement) {
                    refToken = createTokenForExternalReference(_this.reflector, Identifiers.TemplateRef);
                }
                targetReferences.push(new t.ReferenceAst(elOrDirRef.name, refToken, elOrDirRef.value, elOrDirRef.sourceSpan));
            }
        });
        return directiveAsts;
    };
    TemplateParseVisitor.prototype._createDirectivePropertyAsts = function (directiveProperties, boundProps, targetBoundDirectiveProps, targetBoundDirectivePropNames) {
        if (directiveProperties) {
            var boundPropsByName_1 = new Map();
            boundProps.forEach(function (boundProp) {
                var prevValue = boundPropsByName_1.get(boundProp.name);
                if (!prevValue || prevValue.isLiteral) {
                    // give [a]="b" a higher precedence than a="b" on the same element
                    boundPropsByName_1.set(boundProp.name, boundProp);
                }
            });
            Object.keys(directiveProperties).forEach(function (dirProp) {
                var elProp = directiveProperties[dirProp];
                var boundProp = boundPropsByName_1.get(elProp);
                // Bindings are optional, so this binding only needs to be set up if an expression is given.
                if (boundProp) {
                    targetBoundDirectivePropNames.add(boundProp.name);
                    if (!isEmptyExpression(boundProp.expression)) {
                        targetBoundDirectiveProps.push(new t.BoundDirectivePropertyAst(dirProp, boundProp.name, boundProp.expression, boundProp.sourceSpan));
                    }
                }
            });
        }
    };
    TemplateParseVisitor.prototype._createElementPropertyAsts = function (elementName, props, boundDirectivePropNames) {
        var _this = this;
        var boundElementProps = [];
        props.forEach(function (prop) {
            if (!prop.isLiteral && !boundDirectivePropNames.has(prop.name)) {
                var boundProp = _this._bindingParser.createBoundElementProperty(elementName, prop);
                boundElementProps.push(t.BoundElementPropertyAst.fromBoundProperty(boundProp));
            }
        });
        return this._checkPropertiesInSchema(elementName, boundElementProps);
    };
    TemplateParseVisitor.prototype._findComponentDirectives = function (directives) {
        return directives.filter(function (directive) { return directive.directive.isComponent; });
    };
    TemplateParseVisitor.prototype._findComponentDirectiveNames = function (directives) {
        return this._findComponentDirectives(directives)
            .map(function (directive) { return identifierName(directive.directive.type); });
    };
    TemplateParseVisitor.prototype._assertOnlyOneComponent = function (directives, sourceSpan) {
        var componentTypeNames = this._findComponentDirectiveNames(directives);
        if (componentTypeNames.length > 1) {
            this._reportError("More than one component matched on this element.\n" +
                "Make sure that only one component's selector can match a given element.\n" +
                ("Conflicting components: " + componentTypeNames.join(',')), sourceSpan);
        }
    };
    /**
     * Make sure that non-angular tags conform to the schemas.
     *
     * Note: An element is considered an angular tag when at least one directive selector matches the
     * tag name.
     *
     * @param matchElement Whether any directive has matched on the tag name
     * @param element the html element
     */
    TemplateParseVisitor.prototype._assertElementExists = function (matchElement, element) {
        var elName = element.name.replace(/^:xhtml:/, '');
        if (!matchElement && !this._schemaRegistry.hasElement(elName, this._schemas)) {
            var errorMsg = "'" + elName + "' is not a known element:\n";
            errorMsg += "1. If '" + elName + "' is an Angular component, then verify that it is part of this module.\n";
            if (elName.indexOf('-') > -1) {
                errorMsg += "2. If '" + elName + "' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.";
            }
            else {
                errorMsg +=
                    "2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
            }
            this._reportError(errorMsg, element.sourceSpan);
        }
    };
    TemplateParseVisitor.prototype._assertNoComponentsNorElementBindingsOnTemplate = function (directives, elementProps, sourceSpan) {
        var _this = this;
        var componentTypeNames = this._findComponentDirectiveNames(directives);
        if (componentTypeNames.length > 0) {
            this._reportError("Components on an embedded template: " + componentTypeNames.join(','), sourceSpan);
        }
        elementProps.forEach(function (prop) {
            _this._reportError("Property binding " + prop.name + " not used by any directive on an embedded template. Make sure that the property name is spelled correctly and all directives are listed in the \"@NgModule.declarations\".", sourceSpan);
        });
    };
    TemplateParseVisitor.prototype._assertAllEventsPublishedByDirectives = function (directives, events) {
        var _this = this;
        var allDirectiveEvents = new Set();
        directives.forEach(function (directive) {
            Object.keys(directive.directive.outputs).forEach(function (k) {
                var eventName = directive.directive.outputs[k];
                allDirectiveEvents.add(eventName);
            });
        });
        events.forEach(function (event) {
            if (event.target != null || !allDirectiveEvents.has(event.name)) {
                _this._reportError("Event binding " + event
                    .fullName + " not emitted by any directive on an embedded template. Make sure that the event name is spelled correctly and all directives are listed in the \"@NgModule.declarations\".", event.sourceSpan);
            }
        });
    };
    TemplateParseVisitor.prototype._checkPropertiesInSchema = function (elementName, boundProps) {
        var _this = this;
        // Note: We can't filter out empty expressions before this method,
        // as we still want to validate them!
        return boundProps.filter(function (boundProp) {
            if (boundProp.type === 0 /* Property */ &&
                !_this._schemaRegistry.hasProperty(elementName, boundProp.name, _this._schemas)) {
                var errorMsg = "Can't bind to '" + boundProp.name + "' since it isn't a known property of '" + elementName + "'.";
                if (elementName.startsWith('ng-')) {
                    errorMsg +=
                        "\n1. If '" + boundProp
                            .name + "' is an Angular directive, then add 'CommonModule' to the '@NgModule.imports' of this component." +
                            "\n2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
                }
                else if (elementName.indexOf('-') > -1) {
                    errorMsg +=
                        "\n1. If '" + elementName + "' is an Angular component and it has '" + boundProp.name + "' input, then verify that it is part of this module." +
                            ("\n2. If '" + elementName + "' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.") +
                            "\n3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
                }
                _this._reportError(errorMsg, boundProp.sourceSpan);
            }
            return !isEmptyExpression(boundProp.value);
        });
    };
    TemplateParseVisitor.prototype._reportError = function (message, sourceSpan, level) {
        if (level === void 0) { level = ParseErrorLevel.ERROR; }
        this._targetErrors.push(new ParseError(sourceSpan, message, level));
    };
    return TemplateParseVisitor;
}());
var NonBindableVisitor = /** @class */ (function () {
    function NonBindableVisitor() {
    }
    NonBindableVisitor.prototype.visitElement = function (ast, parent) {
        var preparsedElement = preparseElement(ast);
        if (preparsedElement.type === PreparsedElementType.SCRIPT ||
            preparsedElement.type === PreparsedElementType.STYLE ||
            preparsedElement.type === PreparsedElementType.STYLESHEET) {
            // Skipping <script> for security reasons
            // Skipping <style> and stylesheets as we already processed them
            // in the StyleCompiler
            return null;
        }
        var attrNameAndValues = ast.attrs.map(function (attr) { return [attr.name, attr.value]; });
        var selector = createElementCssSelector(ast.name, attrNameAndValues);
        var ngContentIndex = parent.findNgContentIndex(selector);
        var children = html.visitAll(this, ast.children, EMPTY_ELEMENT_CONTEXT);
        return new t.ElementAst(ast.name, html.visitAll(this, ast.attrs), [], [], [], [], [], false, [], children, ngContentIndex, ast.sourceSpan, ast.endSourceSpan);
    };
    NonBindableVisitor.prototype.visitComment = function (comment, context) {
        return null;
    };
    NonBindableVisitor.prototype.visitAttribute = function (attribute, context) {
        return new t.AttrAst(attribute.name, attribute.value, attribute.sourceSpan);
    };
    NonBindableVisitor.prototype.visitText = function (text, parent) {
        var ngContentIndex = parent.findNgContentIndex(TEXT_CSS_SELECTOR());
        return new t.TextAst(text.value, ngContentIndex, text.sourceSpan);
    };
    NonBindableVisitor.prototype.visitExpansion = function (expansion, context) {
        return expansion;
    };
    NonBindableVisitor.prototype.visitExpansionCase = function (expansionCase, context) {
        return expansionCase;
    };
    return NonBindableVisitor;
}());
/**
 * A reference to an element or directive in a template. E.g., the reference in this template:
 *
 * <div #myMenu="coolMenu">
 *
 * would be {name: 'myMenu', value: 'coolMenu', sourceSpan: ...}
 */
var ElementOrDirectiveRef = /** @class */ (function () {
    function ElementOrDirectiveRef(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /** Gets whether this is a reference to the given directive. */
    ElementOrDirectiveRef.prototype.isReferenceToDirective = function (directive) {
        return splitExportAs(directive.exportAs).indexOf(this.value) !== -1;
    };
    return ElementOrDirectiveRef;
}());
/** Splits a raw, potentially comma-delimited `exportAs` value into an array of names. */
function splitExportAs(exportAs) {
    return exportAs ? exportAs.split(',').map(function (e) { return e.trim(); }) : [];
}
export function splitClasses(classAttrValue) {
    return classAttrValue.trim().split(/\s+/g);
}
var ElementContext = /** @class */ (function () {
    function ElementContext(isTemplateElement, _ngContentIndexMatcher, _wildcardNgContentIndex, providerContext) {
        this.isTemplateElement = isTemplateElement;
        this._ngContentIndexMatcher = _ngContentIndexMatcher;
        this._wildcardNgContentIndex = _wildcardNgContentIndex;
        this.providerContext = providerContext;
    }
    ElementContext.create = function (isTemplateElement, directives, providerContext) {
        var matcher = new SelectorMatcher();
        var wildcardNgContentIndex = null;
        var component = directives.find(function (directive) { return directive.directive.isComponent; });
        if (component) {
            var ngContentSelectors = component.directive.template.ngContentSelectors;
            for (var i = 0; i < ngContentSelectors.length; i++) {
                var selector = ngContentSelectors[i];
                if (selector === '*') {
                    wildcardNgContentIndex = i;
                }
                else {
                    matcher.addSelectables(CssSelector.parse(ngContentSelectors[i]), i);
                }
            }
        }
        return new ElementContext(isTemplateElement, matcher, wildcardNgContentIndex, providerContext);
    };
    ElementContext.prototype.findNgContentIndex = function (selector) {
        var ngContentIndices = [];
        this._ngContentIndexMatcher.match(selector, function (selector, ngContentIndex) {
            ngContentIndices.push(ngContentIndex);
        });
        ngContentIndices.sort();
        if (this._wildcardNgContentIndex != null) {
            ngContentIndices.push(this._wildcardNgContentIndex);
        }
        return ngContentIndices.length > 0 ? ngContentIndices[0] : null;
    };
    return ElementContext;
}());
export function createElementCssSelector(elementName, attributes) {
    var cssSelector = new CssSelector();
    var elNameNoNs = splitNsName(elementName)[1];
    cssSelector.setElement(elNameNoNs);
    for (var i = 0; i < attributes.length; i++) {
        var attrName = attributes[i][0];
        var attrNameNoNs = splitNsName(attrName)[1];
        var attrValue = attributes[i][1];
        cssSelector.addAttribute(attrNameNoNs, attrValue);
        if (attrName.toLowerCase() == CLASS_ATTR) {
            var classes = splitClasses(attrValue);
            classes.forEach(function (className) { return cssSelector.addClassName(className); });
        }
    }
    return cssSelector;
}
var EMPTY_ELEMENT_CONTEXT = new ElementContext(true, new SelectorMatcher(), null, null);
var NON_BINDABLE_VISITOR = new NonBindableVisitor();
function _isEmptyTextNode(node) {
    return node instanceof html.Text && node.value.trim().length == 0;
}
export function removeSummaryDuplicates(items) {
    var map = new Map();
    items.forEach(function (item) {
        if (!map.get(item.type.reference)) {
            map.set(item.type.reference, item);
        }
    });
    return Array.from(map.values());
}
export function isEmptyExpression(ast) {
    if (ast instanceof ASTWithSource) {
        ast = ast.ast;
    }
    return ast instanceof EmptyExpr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBbUgsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFJckssT0FBTyxFQUFNLGFBQWEsRUFBRSxTQUFTLEVBQThDLE1BQU0sMEJBQTBCLENBQUM7QUFFcEgsT0FBTyxFQUFDLCtCQUErQixFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JHLE9BQU8sS0FBSyxJQUFJLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFhLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFDLHNCQUFzQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFakYsT0FBTyxFQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFVLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSxTQUFTLENB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bGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVQaXBlU3VtbWFyeSwgQ29tcGlsZVRva2VuTWV0YWRhdGEsIENvbXBpbGVUeXBlTWV0YWRhdGEsIGlkZW50aWZpZXJOYW1lfSBmcm9tICcuLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtDb21waWxlckNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7U2NoZW1hTWV0YWRhdGF9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtBU1QsIEFTVFdpdGhTb3VyY2UsIEVtcHR5RXhwciwgUGFyc2VkRXZlbnQsIFBhcnNlZFByb3BlcnR5LCBQYXJzZWRWYXJpYWJsZX0gZnJvbSAnLi4vZXhwcmVzc2lvbl9wYXJzZXIvYXN0JztcbmltcG9ydCB7UGFyc2VyfSBmcm9tICcuLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlLCBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZSwgSWRlbnRpZmllcnN9IGZyb20gJy4uL2lkZW50aWZpZXJzJztcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi4vbWxfcGFyc2VyL2FzdCc7XG5pbXBvcnQge0h0bWxQYXJzZXIsIFBhcnNlVHJlZVJlc3VsdH0gZnJvbSAnLi4vbWxfcGFyc2VyL2h0bWxfcGFyc2VyJztcbmltcG9ydCB7cmVtb3ZlV2hpdGVzcGFjZXMsIHJlcGxhY2VOZ3NwfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF93aGl0ZXNwYWNlcyc7XG5pbXBvcnQge2V4cGFuZE5vZGVzfSBmcm9tICcuLi9tbF9wYXJzZXIvaWN1X2FzdF9leHBhbmRlcic7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge2lzTmdUZW1wbGF0ZSwgc3BsaXROc05hbWV9IGZyb20gJy4uL21sX3BhcnNlci90YWdzJztcbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VFcnJvckxldmVsLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuaW1wb3J0IHtQcm92aWRlckVsZW1lbnRDb250ZXh0LCBQcm92aWRlclZpZXdDb250ZXh0fSBmcm9tICcuLi9wcm92aWRlcl9hbmFseXplcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi4vc2NoZW1hL2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5JztcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFNlbGVjdG9yTWF0Y2hlcn0gZnJvbSAnLi4vc2VsZWN0b3InO1xuaW1wb3J0IHtpc1N0eWxlVXJsUmVzb2x2YWJsZX0gZnJvbSAnLi4vc3R5bGVfdXJsX3Jlc29sdmVyJztcbmltcG9ydCB7Q29uc29sZSwgbmV3QXJyYXksIHN5bnRheEVycm9yfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtCaW5kaW5nUGFyc2VyfSBmcm9tICcuL2JpbmRpbmdfcGFyc2VyJztcbmltcG9ydCAqIGFzIHQgZnJvbSAnLi90ZW1wbGF0ZV9hc3QnO1xuaW1wb3J0IHtQcmVwYXJzZWRFbGVtZW50VHlwZSwgcHJlcGFyc2VFbGVtZW50fSBmcm9tICcuL3RlbXBsYXRlX3ByZXBhcnNlcic7XG5cbmNvbnN0IEJJTkRfTkFNRV9SRUdFWFAgPVxuICAgIC9eKD86KD86KD86KGJpbmQtKXwobGV0LSl8KHJlZi18Iyl8KG9uLSl8KGJpbmRvbi0pfChAKSkoLiopKXxcXFtcXCgoW15cXCldKylcXClcXF18XFxbKFteXFxdXSspXFxdfFxcKChbXlxcKV0rKVxcKSkkLztcblxuLy8gR3JvdXAgMSA9IFwiYmluZC1cIlxuY29uc3QgS1dfQklORF9JRFggPSAxO1xuLy8gR3JvdXAgMiA9IFwibGV0LVwiXG5jb25zdCBLV19MRVRfSURYID0gMjtcbi8vIEdyb3VwIDMgPSBcInJlZi0vI1wiXG5jb25zdCBLV19SRUZfSURYID0gMztcbi8vIEdyb3VwIDQgPSBcIm9uLVwiXG5jb25zdCBLV19PTl9JRFggPSA0O1xuLy8gR3JvdXAgNSA9IFwiYmluZG9uLVwiXG5jb25zdCBLV19CSU5ET05fSURYID0gNTtcbi8vIEdyb3VwIDYgPSBcIkBcIlxuY29uc3QgS1dfQVRfSURYID0gNjtcbi8vIEdyb3VwIDcgPSB0aGUgaWRlbnRpZmllciBhZnRlciBcImJpbmQtXCIsIFwibGV0LVwiLCBcInJlZi0vI1wiLCBcIm9uLVwiLCBcImJpbmRvbi1cIiBvciBcIkBcIlxuY29uc3QgSURFTlRfS1dfSURYID0gNztcbi8vIEdyb3VwIDggPSBpZGVudGlmaWVyIGluc2lkZSBbKCldXG5jb25zdCBJREVOVF9CQU5BTkFfQk9YX0lEWCA9IDg7XG4vLyBHcm91cCA5ID0gaWRlbnRpZmllciBpbnNpZGUgW11cbmNvbnN0IElERU5UX1BST1BFUlRZX0lEWCA9IDk7XG4vLyBHcm91cCAxMCA9IGlkZW50aWZpZXIgaW5zaWRlICgpXG5jb25zdCBJREVOVF9FVkVOVF9JRFggPSAxMDtcblxuY29uc3QgVEVNUExBVEVfQVRUUl9QUkVGSVggPSAnKic7XG5jb25zdCBDTEFTU19BVFRSID0gJ2NsYXNzJztcblxubGV0IF9URVhUX0NTU19TRUxFQ1RPUiE6IENzc1NlbGVjdG9yO1xuZnVuY3Rpb24gVEVYVF9DU1NfU0VMRUNUT1IoKTogQ3NzU2VsZWN0b3Ige1xuICBpZiAoIV9URVhUX0NTU19TRUxFQ1RPUikge1xuICAgIF9URVhUX0NTU19TRUxFQ1RPUiA9IENzc1NlbGVjdG9yLnBhcnNlKCcqJylbMF07XG4gIH1cbiAgcmV0dXJuIF9URVhUX0NTU19TRUxFQ1RPUjtcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGFyc2VFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFBhcnNlU291cmNlU3BhbiwgbGV2ZWw6IFBhcnNlRXJyb3JMZXZlbCkge1xuICAgIHN1cGVyKHNwYW4sIG1lc3NhZ2UsIGxldmVsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJzZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHRlbXBsYXRlQXN0PzogdC5UZW1wbGF0ZUFzdFtdLCBwdWJsaWMgdXNlZFBpcGVzPzogQ29tcGlsZVBpcGVTdW1tYXJ5W10sXG4gICAgICBwdWJsaWMgZXJyb3JzPzogUGFyc2VFcnJvcltdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NvbmZpZzogQ29tcGlsZXJDb25maWcsIHByaXZhdGUgX3JlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3RvcixcbiAgICAgIHByaXZhdGUgX2V4cHJQYXJzZXI6IFBhcnNlciwgcHJpdmF0ZSBfc2NoZW1hUmVnaXN0cnk6IEVsZW1lbnRTY2hlbWFSZWdpc3RyeSxcbiAgICAgIHByaXZhdGUgX2h0bWxQYXJzZXI6IEh0bWxQYXJzZXIsIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGUsXG4gICAgICBwdWJsaWMgdHJhbnNmb3JtczogdC5UZW1wbGF0ZUFzdFZpc2l0b3JbXSkge31cblxuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb25QYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cHJQYXJzZXI7XG4gIH1cblxuICBwYXJzZShcbiAgICAgIGNvbXBvbmVudDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCB0ZW1wbGF0ZTogc3RyaW5nfFBhcnNlVHJlZVJlc3VsdCxcbiAgICAgIGRpcmVjdGl2ZXM6IENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5W10sIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXSwgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXSxcbiAgICAgIHRlbXBsYXRlVXJsOiBzdHJpbmcsXG4gICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBib29sZWFuKToge3RlbXBsYXRlOiB0LlRlbXBsYXRlQXN0W10sIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXX0ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudHJ5UGFyc2UoXG4gICAgICAgIGNvbXBvbmVudCwgdGVtcGxhdGUsIGRpcmVjdGl2ZXMsIHBpcGVzLCBzY2hlbWFzLCB0ZW1wbGF0ZVVybCwgcHJlc2VydmVXaGl0ZXNwYWNlcyk7XG4gICAgY29uc3Qgd2FybmluZ3MgPSByZXN1bHQuZXJyb3JzIS5maWx0ZXIoZXJyb3IgPT4gZXJyb3IubGV2ZWwgPT09IFBhcnNlRXJyb3JMZXZlbC5XQVJOSU5HKTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHJlc3VsdC5lcnJvcnMhLmZpbHRlcihlcnJvciA9PiBlcnJvci5sZXZlbCA9PT0gUGFyc2VFcnJvckxldmVsLkVSUk9SKTtcblxuICAgIGlmICh3YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9jb25zb2xlLndhcm4oYFRlbXBsYXRlIHBhcnNlIHdhcm5pbmdzOlxcbiR7d2FybmluZ3Muam9pbignXFxuJyl9YCk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlcnJvclN0cmluZyA9IGVycm9ycy5qb2luKCdcXG4nKTtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKGBUZW1wbGF0ZSBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvclN0cmluZ31gLCBlcnJvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7dGVtcGxhdGU6IHJlc3VsdC50ZW1wbGF0ZUFzdCEsIHBpcGVzOiByZXN1bHQudXNlZFBpcGVzIX07XG4gIH1cblxuICB0cnlQYXJzZShcbiAgICAgIGNvbXBvbmVudDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCB0ZW1wbGF0ZTogc3RyaW5nfFBhcnNlVHJlZVJlc3VsdCxcbiAgICAgIGRpcmVjdGl2ZXM6IENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5W10sIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXSwgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXSxcbiAgICAgIHRlbXBsYXRlVXJsOiBzdHJpbmcsIHByZXNlcnZlV2hpdGVzcGFjZXM6IGJvb2xlYW4pOiBUZW1wbGF0ZVBhcnNlUmVzdWx0IHtcbiAgICBsZXQgaHRtbFBhcnNlUmVzdWx0ID0gdHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJyA/XG4gICAgICAgIHRoaXMuX2h0bWxQYXJzZXIhLnBhcnNlKHRlbXBsYXRlLCB0ZW1wbGF0ZVVybCwge1xuICAgICAgICAgIHRva2VuaXplRXhwYW5zaW9uRm9ybXM6IHRydWUsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogdGhpcy5nZXRJbnRlcnBvbGF0aW9uQ29uZmlnKGNvbXBvbmVudClcbiAgICAgICAgfSkgOlxuICAgICAgICB0ZW1wbGF0ZTtcblxuICAgIGlmICghcHJlc2VydmVXaGl0ZXNwYWNlcykge1xuICAgICAgaHRtbFBhcnNlUmVzdWx0ID0gcmVtb3ZlV2hpdGVzcGFjZXMoaHRtbFBhcnNlUmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50cnlQYXJzZUh0bWwoXG4gICAgICAgIHRoaXMuZXhwYW5kSHRtbChodG1sUGFyc2VSZXN1bHQpLCBjb21wb25lbnQsIGRpcmVjdGl2ZXMsIHBpcGVzLCBzY2hlbWFzKTtcbiAgfVxuXG4gIHRyeVBhcnNlSHRtbChcbiAgICAgIGh0bWxBc3RXaXRoRXJyb3JzOiBQYXJzZVRyZWVSZXN1bHQsIGNvbXBvbmVudDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgZGlyZWN0aXZlczogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSwgcGlwZXM6IENvbXBpbGVQaXBlU3VtbWFyeVtdLFxuICAgICAgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXSk6IFRlbXBsYXRlUGFyc2VSZXN1bHQge1xuICAgIGxldCByZXN1bHQ6IHQuVGVtcGxhdGVBc3RbXTtcbiAgICBjb25zdCBlcnJvcnMgPSBodG1sQXN0V2l0aEVycm9ycy5lcnJvcnM7XG4gICAgY29uc3QgdXNlZFBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXSA9IFtdO1xuICAgIGlmIChodG1sQXN0V2l0aEVycm9ycy5yb290Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdW5pcURpcmVjdGl2ZXMgPSByZW1vdmVTdW1tYXJ5RHVwbGljYXRlcyhkaXJlY3RpdmVzKTtcbiAgICAgIGNvbnN0IHVuaXFQaXBlcyA9IHJlbW92ZVN1bW1hcnlEdXBsaWNhdGVzKHBpcGVzKTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyVmlld0NvbnRleHQgPSBuZXcgUHJvdmlkZXJWaWV3Q29udGV4dCh0aGlzLl9yZWZsZWN0b3IsIGNvbXBvbmVudCk7XG4gICAgICBsZXQgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IHVuZGVmaW5lZCE7XG4gICAgICBpZiAoY29tcG9uZW50LnRlbXBsYXRlICYmIGNvbXBvbmVudC50ZW1wbGF0ZS5pbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIGludGVycG9sYXRpb25Db25maWcgPSB7XG4gICAgICAgICAgc3RhcnQ6IGNvbXBvbmVudC50ZW1wbGF0ZS5pbnRlcnBvbGF0aW9uWzBdLFxuICAgICAgICAgIGVuZDogY29tcG9uZW50LnRlbXBsYXRlLmludGVycG9sYXRpb25bMV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJpbmRpbmdQYXJzZXIgPSBuZXcgQmluZGluZ1BhcnNlcihcbiAgICAgICAgICB0aGlzLl9leHByUGFyc2VyLCBpbnRlcnBvbGF0aW9uQ29uZmlnISwgdGhpcy5fc2NoZW1hUmVnaXN0cnksIHVuaXFQaXBlcywgZXJyb3JzKTtcbiAgICAgIGNvbnN0IHBhcnNlVmlzaXRvciA9IG5ldyBUZW1wbGF0ZVBhcnNlVmlzaXRvcihcbiAgICAgICAgICB0aGlzLl9yZWZsZWN0b3IsIHRoaXMuX2NvbmZpZywgcHJvdmlkZXJWaWV3Q29udGV4dCwgdW5pcURpcmVjdGl2ZXMsIGJpbmRpbmdQYXJzZXIsXG4gICAgICAgICAgdGhpcy5fc2NoZW1hUmVnaXN0cnksIHNjaGVtYXMsIGVycm9ycyk7XG4gICAgICByZXN1bHQgPSBodG1sLnZpc2l0QWxsKHBhcnNlVmlzaXRvciwgaHRtbEFzdFdpdGhFcnJvcnMucm9vdE5vZGVzLCBFTVBUWV9FTEVNRU5UX0NPTlRFWFQpO1xuICAgICAgZXJyb3JzLnB1c2goLi4ucHJvdmlkZXJWaWV3Q29udGV4dC5lcnJvcnMpO1xuICAgICAgdXNlZFBpcGVzLnB1c2goLi4uYmluZGluZ1BhcnNlci5nZXRVc2VkUGlwZXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9hc3NlcnROb1JlZmVyZW5jZUR1cGxpY2F0aW9uT25UZW1wbGF0ZShyZXN1bHQsIGVycm9ycyk7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgVGVtcGxhdGVQYXJzZVJlc3VsdChyZXN1bHQsIHVzZWRQaXBlcywgZXJyb3JzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFuc2Zvcm1zKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtOiB0LlRlbXBsYXRlQXN0VmlzaXRvcikgPT4ge1xuICAgICAgICByZXN1bHQgPSB0LnRlbXBsYXRlVmlzaXRBbGwodHJhbnNmb3JtLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVBhcnNlUmVzdWx0KHJlc3VsdCwgdXNlZFBpcGVzLCBlcnJvcnMpO1xuICB9XG5cbiAgZXhwYW5kSHRtbChodG1sQXN0V2l0aEVycm9yczogUGFyc2VUcmVlUmVzdWx0LCBmb3JjZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgZXJyb3JzOiBQYXJzZUVycm9yW10gPSBodG1sQXN0V2l0aEVycm9ycy5lcnJvcnM7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwIHx8IGZvcmNlZCkge1xuICAgICAgLy8gVHJhbnNmb3JtIElDVSBtZXNzYWdlcyB0byBhbmd1bGFyIGRpcmVjdGl2ZXNcbiAgICAgIGNvbnN0IGV4cGFuZGVkSHRtbEFzdCA9IGV4cGFuZE5vZGVzKGh0bWxBc3RXaXRoRXJyb3JzLnJvb3ROb2Rlcyk7XG4gICAgICBlcnJvcnMucHVzaCguLi5leHBhbmRlZEh0bWxBc3QuZXJyb3JzKTtcbiAgICAgIGh0bWxBc3RXaXRoRXJyb3JzID0gbmV3IFBhcnNlVHJlZVJlc3VsdChleHBhbmRlZEh0bWxBc3Qubm9kZXMsIGVycm9ycyk7XG4gICAgfVxuICAgIHJldHVybiBodG1sQXN0V2l0aEVycm9ycztcbiAgfVxuXG4gIGdldEludGVycG9sYXRpb25Db25maWcoY29tcG9uZW50OiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEpOiBJbnRlcnBvbGF0aW9uQ29uZmlnfHVuZGVmaW5lZCB7XG4gICAgaWYgKGNvbXBvbmVudC50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIEludGVycG9sYXRpb25Db25maWcuZnJvbUFycmF5KGNvbXBvbmVudC50ZW1wbGF0ZS5pbnRlcnBvbGF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Fzc2VydE5vUmVmZXJlbmNlRHVwbGljYXRpb25PblRlbXBsYXRlKHJlc3VsdDogdC5UZW1wbGF0ZUFzdFtdLCBlcnJvcnM6IFRlbXBsYXRlUGFyc2VFcnJvcltdKTpcbiAgICAgIHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nUmVmZXJlbmNlczogc3RyaW5nW10gPSBbXTtcblxuICAgIHJlc3VsdC5maWx0ZXIoZWxlbWVudCA9PiAhISg8YW55PmVsZW1lbnQpLnJlZmVyZW5jZXMpXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gKDxhbnk+ZWxlbWVudCkucmVmZXJlbmNlcy5mb3JFYWNoKChyZWZlcmVuY2U6IHQuUmVmZXJlbmNlQXN0KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZS5uYW1lO1xuICAgICAgICAgIGlmIChleGlzdGluZ1JlZmVyZW5jZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgICAgIGV4aXN0aW5nUmVmZXJlbmNlcy5wdXNoKG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBUZW1wbGF0ZVBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgYFJlZmVyZW5jZSBcIiMke25hbWV9XCIgaXMgZGVmaW5lZCBzZXZlcmFsIHRpbWVzYCwgcmVmZXJlbmNlLnNvdXJjZVNwYW4sXG4gICAgICAgICAgICAgICAgUGFyc2VFcnJvckxldmVsLkVSUk9SKTtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgfVxufVxuXG5jbGFzcyBUZW1wbGF0ZVBhcnNlVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHNlbGVjdG9yTWF0Y2hlciA9IG5ldyBTZWxlY3Rvck1hdGNoZXIoKTtcbiAgZGlyZWN0aXZlc0luZGV4ID0gbmV3IE1hcDxDb21waWxlRGlyZWN0aXZlU3VtbWFyeSwgbnVtYmVyPigpO1xuICBuZ0NvbnRlbnRDb3VudCA9IDA7XG4gIGNvbnRlbnRRdWVyeVN0YXJ0SWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCBwcml2YXRlIGNvbmZpZzogQ29tcGlsZXJDb25maWcsXG4gICAgICBwdWJsaWMgcHJvdmlkZXJWaWV3Q29udGV4dDogUHJvdmlkZXJWaWV3Q29udGV4dCwgZGlyZWN0aXZlczogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSxcbiAgICAgIHByaXZhdGUgX2JpbmRpbmdQYXJzZXI6IEJpbmRpbmdQYXJzZXIsIHByaXZhdGUgX3NjaGVtYVJlZ2lzdHJ5OiBFbGVtZW50U2NoZW1hUmVnaXN0cnksXG4gICAgICBwcml2YXRlIF9zY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdLCBwcml2YXRlIF90YXJnZXRFcnJvcnM6IFRlbXBsYXRlUGFyc2VFcnJvcltdKSB7XG4gICAgLy8gTm90ZTogcXVlcmllcyBzdGFydCB3aXRoIGlkIDEgc28gd2UgY2FuIHVzZSB0aGUgbnVtYmVyIGluIGEgQmxvb20gZmlsdGVyIVxuICAgIHRoaXMuY29udGVudFF1ZXJ5U3RhcnRJZCA9IHByb3ZpZGVyVmlld0NvbnRleHQuY29tcG9uZW50LnZpZXdRdWVyaWVzLmxlbmd0aCArIDE7XG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IENzc1NlbGVjdG9yLnBhcnNlKGRpcmVjdGl2ZS5zZWxlY3RvciEpO1xuICAgICAgdGhpcy5zZWxlY3Rvck1hdGNoZXIuYWRkU2VsZWN0YWJsZXMoc2VsZWN0b3IsIGRpcmVjdGl2ZSk7XG4gICAgICB0aGlzLmRpcmVjdGl2ZXNJbmRleC5zZXQoZGlyZWN0aXZlLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIHBhcmVudDogRWxlbWVudENvbnRleHQpOiBhbnkge1xuICAgIGNvbnN0IG5nQ29udGVudEluZGV4ID0gcGFyZW50LmZpbmROZ0NvbnRlbnRJbmRleChURVhUX0NTU19TRUxFQ1RPUigpKSE7XG4gICAgY29uc3QgdmFsdWVOb05nc3AgPSByZXBsYWNlTmdzcCh0ZXh0LnZhbHVlKTtcbiAgICBjb25zdCBleHByID0gdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZUludGVycG9sYXRpb24odmFsdWVOb05nc3AsIHRleHQuc291cmNlU3BhbiEpO1xuICAgIHJldHVybiBleHByID8gbmV3IHQuQm91bmRUZXh0QXN0KGV4cHIsIG5nQ29udGVudEluZGV4LCB0ZXh0LnNvdXJjZVNwYW4hKSA6XG4gICAgICAgICAgICAgICAgICBuZXcgdC5UZXh0QXN0KHZhbHVlTm9OZ3NwLCBuZ0NvbnRlbnRJbmRleCwgdGV4dC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBuZXcgdC5BdHRyQXN0KGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUsIGF0dHJpYnV0ZS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBwYXJlbnQ6IEVsZW1lbnRDb250ZXh0KTogYW55IHtcbiAgICBjb25zdCBxdWVyeVN0YXJ0SW5kZXggPSB0aGlzLmNvbnRlbnRRdWVyeVN0YXJ0SWQ7XG4gICAgY29uc3QgZWxOYW1lID0gZWxlbWVudC5uYW1lO1xuICAgIGNvbnN0IHByZXBhcnNlZEVsZW1lbnQgPSBwcmVwYXJzZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHByZXBhcnNlZEVsZW1lbnQudHlwZSA9PT0gUHJlcGFyc2VkRWxlbWVudFR5cGUuU0NSSVBUIHx8XG4gICAgICAgIHByZXBhcnNlZEVsZW1lbnQudHlwZSA9PT0gUHJlcGFyc2VkRWxlbWVudFR5cGUuU1RZTEUpIHtcbiAgICAgIC8vIFNraXBwaW5nIDxzY3JpcHQ+IGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAvLyBTa2lwcGluZyA8c3R5bGU+IGFzIHdlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZW1cbiAgICAgIC8vIGluIHRoZSBTdHlsZUNvbXBpbGVyXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHByZXBhcnNlZEVsZW1lbnQudHlwZSA9PT0gUHJlcGFyc2VkRWxlbWVudFR5cGUuU1RZTEVTSEVFVCAmJlxuICAgICAgICBpc1N0eWxlVXJsUmVzb2x2YWJsZShwcmVwYXJzZWRFbGVtZW50LmhyZWZBdHRyKSkge1xuICAgICAgLy8gU2tpcHBpbmcgc3R5bGVzaGVldHMgd2l0aCBlaXRoZXIgcmVsYXRpdmUgdXJscyBvciBwYWNrYWdlIHNjaGVtZSBhcyB3ZSBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgLy8gdGhlbSBpbiB0aGUgU3R5bGVDb21waWxlclxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hhYmxlQXR0cnM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRPckRpcmVjdGl2ZVByb3BzOiBQYXJzZWRQcm9wZXJ0eVtdID0gW107XG4gICAgY29uc3QgZWxlbWVudE9yRGlyZWN0aXZlUmVmczogRWxlbWVudE9yRGlyZWN0aXZlUmVmW10gPSBbXTtcbiAgICBjb25zdCBlbGVtZW50VmFyczogdC5WYXJpYWJsZUFzdFtdID0gW107XG4gICAgY29uc3QgZXZlbnRzOiB0LkJvdW5kRXZlbnRBc3RbXSA9IFtdO1xuXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50T3JEaXJlY3RpdmVQcm9wczogUGFyc2VkUHJvcGVydHlbXSA9IFtdO1xuICAgIGNvbnN0IHRlbXBsYXRlTWF0Y2hhYmxlQXR0cnM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtdO1xuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudFZhcnM6IHQuVmFyaWFibGVBc3RbXSA9IFtdO1xuXG4gICAgbGV0IGhhc0lubGluZVRlbXBsYXRlcyA9IGZhbHNlO1xuICAgIGNvbnN0IGF0dHJzOiB0LkF0dHJBc3RbXSA9IFtdO1xuICAgIGNvbnN0IGlzVGVtcGxhdGVFbGVtZW50ID0gaXNOZ1RlbXBsYXRlKGVsZW1lbnQubmFtZSk7XG5cbiAgICBlbGVtZW50LmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRWYXJpYWJsZXM6IFBhcnNlZFZhcmlhYmxlW10gPSBbXTtcbiAgICAgIGNvbnN0IGhhc0JpbmRpbmcgPSB0aGlzLl9wYXJzZUF0dHIoXG4gICAgICAgICAgaXNUZW1wbGF0ZUVsZW1lbnQsIGF0dHIsIG1hdGNoYWJsZUF0dHJzLCBlbGVtZW50T3JEaXJlY3RpdmVQcm9wcywgZXZlbnRzLFxuICAgICAgICAgIGVsZW1lbnRPckRpcmVjdGl2ZVJlZnMsIGVsZW1lbnRWYXJzKTtcbiAgICAgIGVsZW1lbnRWYXJzLnB1c2goLi4ucGFyc2VkVmFyaWFibGVzLm1hcCh2ID0+IHQuVmFyaWFibGVBc3QuZnJvbVBhcnNlZFZhcmlhYmxlKHYpKSk7XG5cbiAgICAgIGxldCB0ZW1wbGF0ZVZhbHVlOiBzdHJpbmd8dW5kZWZpbmVkO1xuICAgICAgbGV0IHRlbXBsYXRlS2V5OiBzdHJpbmd8dW5kZWZpbmVkO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLl9ub3JtYWxpemVBdHRyaWJ1dGVOYW1lKGF0dHIubmFtZSk7XG5cbiAgICAgIGlmIChub3JtYWxpemVkTmFtZS5zdGFydHNXaXRoKFRFTVBMQVRFX0FUVFJfUFJFRklYKSkge1xuICAgICAgICB0ZW1wbGF0ZVZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgdGVtcGxhdGVLZXkgPSBub3JtYWxpemVkTmFtZS5zdWJzdHJpbmcoVEVNUExBVEVfQVRUUl9QUkVGSVgubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFzVGVtcGxhdGVCaW5kaW5nID0gdGVtcGxhdGVWYWx1ZSAhPSBudWxsO1xuICAgICAgaWYgKGhhc1RlbXBsYXRlQmluZGluZykge1xuICAgICAgICBpZiAoaGFzSW5saW5lVGVtcGxhdGVzKSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIGBDYW4ndCBoYXZlIG11bHRpcGxlIHRlbXBsYXRlIGJpbmRpbmdzIG9uIG9uZSBlbGVtZW50LiBVc2Ugb25seSBvbmUgYXR0cmlidXRlIHByZWZpeGVkIHdpdGggKmAsXG4gICAgICAgICAgICAgIGF0dHIuc291cmNlU3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgaGFzSW5saW5lVGVtcGxhdGVzID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcGFyc2VkVmFyaWFibGVzOiBQYXJzZWRWYXJpYWJsZVtdID0gW107XG4gICAgICAgIGNvbnN0IGFic29sdXRlT2Zmc2V0ID0gKGF0dHIudmFsdWVTcGFuIHx8IGF0dHIuc291cmNlU3Bhbikuc3RhcnQub2Zmc2V0O1xuICAgICAgICB0aGlzLl9iaW5kaW5nUGFyc2VyLnBhcnNlSW5saW5lVGVtcGxhdGVCaW5kaW5nKFxuICAgICAgICAgICAgdGVtcGxhdGVLZXkhLCB0ZW1wbGF0ZVZhbHVlISwgYXR0ci5zb3VyY2VTcGFuLCBhYnNvbHV0ZU9mZnNldCwgdGVtcGxhdGVNYXRjaGFibGVBdHRycyxcbiAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudE9yRGlyZWN0aXZlUHJvcHMsIHBhcnNlZFZhcmlhYmxlcyk7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudFZhcnMucHVzaCguLi5wYXJzZWRWYXJpYWJsZXMubWFwKHYgPT4gdC5WYXJpYWJsZUFzdC5mcm9tUGFyc2VkVmFyaWFibGUodikpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNCaW5kaW5nICYmICFoYXNUZW1wbGF0ZUJpbmRpbmcpIHtcbiAgICAgICAgLy8gZG9uJ3QgaW5jbHVkZSB0aGUgYmluZGluZ3MgYXMgYXR0cmlidXRlcyBhcyB3ZWxsIGluIHRoZSBBU1RcbiAgICAgICAgYXR0cnMucHVzaCh0aGlzLnZpc2l0QXR0cmlidXRlKGF0dHIsIG51bGwpKTtcbiAgICAgICAgbWF0Y2hhYmxlQXR0cnMucHVzaChbYXR0ci5uYW1lLCBhdHRyLnZhbHVlXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbGVtZW50Q3NzU2VsZWN0b3IgPSBjcmVhdGVFbGVtZW50Q3NzU2VsZWN0b3IoZWxOYW1lLCBtYXRjaGFibGVBdHRycyk7XG4gICAgY29uc3Qge2RpcmVjdGl2ZXM6IGRpcmVjdGl2ZU1ldGFzLCBtYXRjaEVsZW1lbnR9ID1cbiAgICAgICAgdGhpcy5fcGFyc2VEaXJlY3RpdmVzKHRoaXMuc2VsZWN0b3JNYXRjaGVyLCBlbGVtZW50Q3NzU2VsZWN0b3IpO1xuICAgIGNvbnN0IHJlZmVyZW5jZXM6IHQuUmVmZXJlbmNlQXN0W10gPSBbXTtcbiAgICBjb25zdCBib3VuZERpcmVjdGl2ZVByb3BOYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IGRpcmVjdGl2ZUFzdHMgPSB0aGlzLl9jcmVhdGVEaXJlY3RpdmVBc3RzKFxuICAgICAgICBpc1RlbXBsYXRlRWxlbWVudCwgZWxlbWVudC5uYW1lLCBkaXJlY3RpdmVNZXRhcywgZWxlbWVudE9yRGlyZWN0aXZlUHJvcHMsXG4gICAgICAgIGVsZW1lbnRPckRpcmVjdGl2ZVJlZnMsIGVsZW1lbnQuc291cmNlU3BhbiEsIHJlZmVyZW5jZXMsIGJvdW5kRGlyZWN0aXZlUHJvcE5hbWVzKTtcbiAgICBjb25zdCBlbGVtZW50UHJvcHM6IHQuQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRQcm9wZXJ0eUFzdHMoXG4gICAgICAgIGVsZW1lbnQubmFtZSwgZWxlbWVudE9yRGlyZWN0aXZlUHJvcHMsIGJvdW5kRGlyZWN0aXZlUHJvcE5hbWVzKTtcbiAgICBjb25zdCBpc1ZpZXdSb290ID0gcGFyZW50LmlzVGVtcGxhdGVFbGVtZW50IHx8IGhhc0lubGluZVRlbXBsYXRlcztcblxuICAgIGNvbnN0IHByb3ZpZGVyQ29udGV4dCA9IG5ldyBQcm92aWRlckVsZW1lbnRDb250ZXh0KFxuICAgICAgICB0aGlzLnByb3ZpZGVyVmlld0NvbnRleHQsIHBhcmVudC5wcm92aWRlckNvbnRleHQhLCBpc1ZpZXdSb290LCBkaXJlY3RpdmVBc3RzLCBhdHRycyxcbiAgICAgICAgcmVmZXJlbmNlcywgaXNUZW1wbGF0ZUVsZW1lbnQsIHF1ZXJ5U3RhcnRJbmRleCwgZWxlbWVudC5zb3VyY2VTcGFuISk7XG5cbiAgICBjb25zdCBjaGlsZHJlbjogdC5UZW1wbGF0ZUFzdFtdID0gaHRtbC52aXNpdEFsbChcbiAgICAgICAgcHJlcGFyc2VkRWxlbWVudC5ub25CaW5kYWJsZSA/IE5PTl9CSU5EQUJMRV9WSVNJVE9SIDogdGhpcywgZWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgRWxlbWVudENvbnRleHQuY3JlYXRlKFxuICAgICAgICAgICAgaXNUZW1wbGF0ZUVsZW1lbnQsIGRpcmVjdGl2ZUFzdHMsXG4gICAgICAgICAgICBpc1RlbXBsYXRlRWxlbWVudCA/IHBhcmVudC5wcm92aWRlckNvbnRleHQhIDogcHJvdmlkZXJDb250ZXh0KSk7XG4gICAgcHJvdmlkZXJDb250ZXh0LmFmdGVyRWxlbWVudCgpO1xuICAgIC8vIE92ZXJyaWRlIHRoZSBhY3R1YWwgc2VsZWN0b3Igd2hlbiB0aGUgYG5nUHJvamVjdEFzYCBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcbiAgICBjb25zdCBwcm9qZWN0aW9uU2VsZWN0b3IgPSBwcmVwYXJzZWRFbGVtZW50LnByb2plY3RBcyAhPSAnJyA/XG4gICAgICAgIENzc1NlbGVjdG9yLnBhcnNlKHByZXBhcnNlZEVsZW1lbnQucHJvamVjdEFzKVswXSA6XG4gICAgICAgIGVsZW1lbnRDc3NTZWxlY3RvcjtcbiAgICBjb25zdCBuZ0NvbnRlbnRJbmRleCA9IHBhcmVudC5maW5kTmdDb250ZW50SW5kZXgocHJvamVjdGlvblNlbGVjdG9yKSE7XG4gICAgbGV0IHBhcnNlZEVsZW1lbnQ6IHQuVGVtcGxhdGVBc3Q7XG5cbiAgICBpZiAocHJlcGFyc2VkRWxlbWVudC50eXBlID09PSBQcmVwYXJzZWRFbGVtZW50VHlwZS5OR19DT05URU5UKSB7XG4gICAgICAvLyBgPG5nLWNvbnRlbnQ+YCBlbGVtZW50XG4gICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbiAmJiAhZWxlbWVudC5jaGlsZHJlbi5ldmVyeShfaXNFbXB0eVRleHROb2RlKSkge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihgPG5nLWNvbnRlbnQ+IGVsZW1lbnQgY2Fubm90IGhhdmUgY29udGVudC5gLCBlbGVtZW50LnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkRWxlbWVudCA9IG5ldyB0Lk5nQ29udGVudEFzdChcbiAgICAgICAgICB0aGlzLm5nQ29udGVudENvdW50KyssIGhhc0lubGluZVRlbXBsYXRlcyA/IG51bGwhIDogbmdDb250ZW50SW5kZXgsIGVsZW1lbnQuc291cmNlU3BhbiEpO1xuICAgIH0gZWxzZSBpZiAoaXNUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIC8vIGA8bmctdGVtcGxhdGU+YCBlbGVtZW50XG4gICAgICB0aGlzLl9hc3NlcnRBbGxFdmVudHNQdWJsaXNoZWRCeURpcmVjdGl2ZXMoZGlyZWN0aXZlQXN0cywgZXZlbnRzKTtcbiAgICAgIHRoaXMuX2Fzc2VydE5vQ29tcG9uZW50c05vckVsZW1lbnRCaW5kaW5nc09uVGVtcGxhdGUoXG4gICAgICAgICAgZGlyZWN0aXZlQXN0cywgZWxlbWVudFByb3BzLCBlbGVtZW50LnNvdXJjZVNwYW4hKTtcblxuICAgICAgcGFyc2VkRWxlbWVudCA9IG5ldyB0LkVtYmVkZGVkVGVtcGxhdGVBc3QoXG4gICAgICAgICAgYXR0cnMsIGV2ZW50cywgcmVmZXJlbmNlcywgZWxlbWVudFZhcnMsIHByb3ZpZGVyQ29udGV4dC50cmFuc2Zvcm1lZERpcmVjdGl2ZUFzdHMsXG4gICAgICAgICAgcHJvdmlkZXJDb250ZXh0LnRyYW5zZm9ybVByb3ZpZGVycywgcHJvdmlkZXJDb250ZXh0LnRyYW5zZm9ybWVkSGFzVmlld0NvbnRhaW5lcixcbiAgICAgICAgICBwcm92aWRlckNvbnRleHQucXVlcnlNYXRjaGVzLCBjaGlsZHJlbiwgaGFzSW5saW5lVGVtcGxhdGVzID8gbnVsbCEgOiBuZ0NvbnRlbnRJbmRleCxcbiAgICAgICAgICBlbGVtZW50LnNvdXJjZVNwYW4hKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxlbWVudCBvdGhlciB0aGFuIGA8bmctY29udGVudD5gIGFuZCBgPG5nLXRlbXBsYXRlPmBcbiAgICAgIHRoaXMuX2Fzc2VydEVsZW1lbnRFeGlzdHMobWF0Y2hFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgIHRoaXMuX2Fzc2VydE9ubHlPbmVDb21wb25lbnQoZGlyZWN0aXZlQXN0cywgZWxlbWVudC5zb3VyY2VTcGFuISk7XG5cbiAgICAgIGNvbnN0IG5nQ29udGVudEluZGV4ID1cbiAgICAgICAgICBoYXNJbmxpbmVUZW1wbGF0ZXMgPyBudWxsIDogcGFyZW50LmZpbmROZ0NvbnRlbnRJbmRleChwcm9qZWN0aW9uU2VsZWN0b3IpO1xuICAgICAgcGFyc2VkRWxlbWVudCA9IG5ldyB0LkVsZW1lbnRBc3QoXG4gICAgICAgICAgZWxOYW1lLCBhdHRycywgZWxlbWVudFByb3BzLCBldmVudHMsIHJlZmVyZW5jZXMsIHByb3ZpZGVyQ29udGV4dC50cmFuc2Zvcm1lZERpcmVjdGl2ZUFzdHMsXG4gICAgICAgICAgcHJvdmlkZXJDb250ZXh0LnRyYW5zZm9ybVByb3ZpZGVycywgcHJvdmlkZXJDb250ZXh0LnRyYW5zZm9ybWVkSGFzVmlld0NvbnRhaW5lcixcbiAgICAgICAgICBwcm92aWRlckNvbnRleHQucXVlcnlNYXRjaGVzLCBjaGlsZHJlbiwgaGFzSW5saW5lVGVtcGxhdGVzID8gbnVsbCA6IG5nQ29udGVudEluZGV4LFxuICAgICAgICAgIGVsZW1lbnQuc291cmNlU3BhbiwgZWxlbWVudC5lbmRTb3VyY2VTcGFuIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChoYXNJbmxpbmVUZW1wbGF0ZXMpIHtcbiAgICAgIC8vIFRoZSBlbGVtZW50IGFzIGEgKi1hdHRyaWJ1dGVcbiAgICAgIGNvbnN0IHRlbXBsYXRlUXVlcnlTdGFydEluZGV4ID0gdGhpcy5jb250ZW50UXVlcnlTdGFydElkO1xuICAgICAgY29uc3QgdGVtcGxhdGVTZWxlY3RvciA9IGNyZWF0ZUVsZW1lbnRDc3NTZWxlY3RvcignbmctdGVtcGxhdGUnLCB0ZW1wbGF0ZU1hdGNoYWJsZUF0dHJzKTtcbiAgICAgIGNvbnN0IHtkaXJlY3RpdmVzfSA9IHRoaXMuX3BhcnNlRGlyZWN0aXZlcyh0aGlzLnNlbGVjdG9yTWF0Y2hlciwgdGVtcGxhdGVTZWxlY3Rvcik7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUJvdW5kRGlyZWN0aXZlUHJvcE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICBjb25zdCB0ZW1wbGF0ZURpcmVjdGl2ZUFzdHMgPSB0aGlzLl9jcmVhdGVEaXJlY3RpdmVBc3RzKFxuICAgICAgICAgIHRydWUsIGVsTmFtZSwgZGlyZWN0aXZlcywgdGVtcGxhdGVFbGVtZW50T3JEaXJlY3RpdmVQcm9wcywgW10sIGVsZW1lbnQuc291cmNlU3BhbiEsIFtdLFxuICAgICAgICAgIHRlbXBsYXRlQm91bmREaXJlY3RpdmVQcm9wTmFtZXMpO1xuICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50UHJvcHM6IHQuQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRQcm9wZXJ0eUFzdHMoXG4gICAgICAgICAgZWxOYW1lLCB0ZW1wbGF0ZUVsZW1lbnRPckRpcmVjdGl2ZVByb3BzLCB0ZW1wbGF0ZUJvdW5kRGlyZWN0aXZlUHJvcE5hbWVzKTtcbiAgICAgIHRoaXMuX2Fzc2VydE5vQ29tcG9uZW50c05vckVsZW1lbnRCaW5kaW5nc09uVGVtcGxhdGUoXG4gICAgICAgICAgdGVtcGxhdGVEaXJlY3RpdmVBc3RzLCB0ZW1wbGF0ZUVsZW1lbnRQcm9wcywgZWxlbWVudC5zb3VyY2VTcGFuISk7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVByb3ZpZGVyQ29udGV4dCA9IG5ldyBQcm92aWRlckVsZW1lbnRDb250ZXh0KFxuICAgICAgICAgIHRoaXMucHJvdmlkZXJWaWV3Q29udGV4dCwgcGFyZW50LnByb3ZpZGVyQ29udGV4dCEsIHBhcmVudC5pc1RlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgICB0ZW1wbGF0ZURpcmVjdGl2ZUFzdHMsIFtdLCBbXSwgdHJ1ZSwgdGVtcGxhdGVRdWVyeVN0YXJ0SW5kZXgsIGVsZW1lbnQuc291cmNlU3BhbiEpO1xuICAgICAgdGVtcGxhdGVQcm92aWRlckNvbnRleHQuYWZ0ZXJFbGVtZW50KCk7XG5cbiAgICAgIHBhcnNlZEVsZW1lbnQgPSBuZXcgdC5FbWJlZGRlZFRlbXBsYXRlQXN0KFxuICAgICAgICAgIFtdLCBbXSwgW10sIHRlbXBsYXRlRWxlbWVudFZhcnMsIHRlbXBsYXRlUHJvdmlkZXJDb250ZXh0LnRyYW5zZm9ybWVkRGlyZWN0aXZlQXN0cyxcbiAgICAgICAgICB0ZW1wbGF0ZVByb3ZpZGVyQ29udGV4dC50cmFuc2Zvcm1Qcm92aWRlcnMsXG4gICAgICAgICAgdGVtcGxhdGVQcm92aWRlckNvbnRleHQudHJhbnNmb3JtZWRIYXNWaWV3Q29udGFpbmVyLCB0ZW1wbGF0ZVByb3ZpZGVyQ29udGV4dC5xdWVyeU1hdGNoZXMsXG4gICAgICAgICAgW3BhcnNlZEVsZW1lbnRdLCBuZ0NvbnRlbnRJbmRleCwgZWxlbWVudC5zb3VyY2VTcGFuISk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUF0dHIoXG4gICAgICBpc1RlbXBsYXRlRWxlbWVudDogYm9vbGVhbiwgYXR0cjogaHRtbC5BdHRyaWJ1dGUsIHRhcmdldE1hdGNoYWJsZUF0dHJzOiBzdHJpbmdbXVtdLFxuICAgICAgdGFyZ2V0UHJvcHM6IFBhcnNlZFByb3BlcnR5W10sIHRhcmdldEV2ZW50czogdC5Cb3VuZEV2ZW50QXN0W10sXG4gICAgICB0YXJnZXRSZWZzOiBFbGVtZW50T3JEaXJlY3RpdmVSZWZbXSwgdGFyZ2V0VmFyczogdC5WYXJpYWJsZUFzdFtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX25vcm1hbGl6ZUF0dHJpYnV0ZU5hbWUoYXR0ci5uYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgY29uc3Qgc3JjU3BhbiA9IGF0dHIuc291cmNlU3BhbjtcbiAgICBjb25zdCBhYnNvbHV0ZU9mZnNldCA9IGF0dHIudmFsdWVTcGFuID8gYXR0ci52YWx1ZVNwYW4uc3RhcnQub2Zmc2V0IDogc3JjU3Bhbi5zdGFydC5vZmZzZXQ7XG5cbiAgICBjb25zdCBib3VuZEV2ZW50czogUGFyc2VkRXZlbnRbXSA9IFtdO1xuICAgIGNvbnN0IGJpbmRQYXJ0cyA9IG5hbWUubWF0Y2goQklORF9OQU1FX1JFR0VYUCk7XG4gICAgbGV0IGhhc0JpbmRpbmcgPSBmYWxzZTtcblxuICAgIGlmIChiaW5kUGFydHMgIT09IG51bGwpIHtcbiAgICAgIGhhc0JpbmRpbmcgPSB0cnVlO1xuICAgICAgaWYgKGJpbmRQYXJ0c1tLV19CSU5EX0lEWF0gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nUGFyc2VyLnBhcnNlUHJvcGVydHlCaW5kaW5nKFxuICAgICAgICAgICAgYmluZFBhcnRzW0lERU5UX0tXX0lEWF0sIHZhbHVlLCBmYWxzZSwgc3JjU3BhbiwgYWJzb2x1dGVPZmZzZXQsIGF0dHIudmFsdWVTcGFuLFxuICAgICAgICAgICAgdGFyZ2V0TWF0Y2hhYmxlQXR0cnMsIHRhcmdldFByb3BzKTtcblxuICAgICAgfSBlbHNlIGlmIChiaW5kUGFydHNbS1dfTEVUX0lEWF0pIHtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGJpbmRQYXJ0c1tJREVOVF9LV19JRFhdO1xuICAgICAgICAgIHRoaXMuX3BhcnNlVmFyaWFibGUoaWRlbnRpZmllciwgdmFsdWUsIHNyY1NwYW4sIHRhcmdldFZhcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBcImxldC1cIiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBuZy10ZW1wbGF0ZSBlbGVtZW50cy5gLCBzcmNTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGJpbmRQYXJ0c1tLV19SRUZfSURYXSkge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gYmluZFBhcnRzW0lERU5UX0tXX0lEWF07XG4gICAgICAgIHRoaXMuX3BhcnNlUmVmZXJlbmNlKGlkZW50aWZpZXIsIHZhbHVlLCBzcmNTcGFuLCB0YXJnZXRSZWZzKTtcblxuICAgICAgfSBlbHNlIGlmIChiaW5kUGFydHNbS1dfT05fSURYXSkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nUGFyc2VyLnBhcnNlRXZlbnQoXG4gICAgICAgICAgICBiaW5kUGFydHNbSURFTlRfS1dfSURYXSwgdmFsdWUsIHNyY1NwYW4sIGF0dHIudmFsdWVTcGFuIHx8IHNyY1NwYW4sXG4gICAgICAgICAgICB0YXJnZXRNYXRjaGFibGVBdHRycywgYm91bmRFdmVudHMpO1xuXG4gICAgICB9IGVsc2UgaWYgKGJpbmRQYXJ0c1tLV19CSU5ET05fSURYXSkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nUGFyc2VyLnBhcnNlUHJvcGVydHlCaW5kaW5nKFxuICAgICAgICAgICAgYmluZFBhcnRzW0lERU5UX0tXX0lEWF0sIHZhbHVlLCBmYWxzZSwgc3JjU3BhbiwgYWJzb2x1dGVPZmZzZXQsIGF0dHIudmFsdWVTcGFuLFxuICAgICAgICAgICAgdGFyZ2V0TWF0Y2hhYmxlQXR0cnMsIHRhcmdldFByb3BzKTtcbiAgICAgICAgdGhpcy5fcGFyc2VBc3NpZ25tZW50RXZlbnQoXG4gICAgICAgICAgICBiaW5kUGFydHNbSURFTlRfS1dfSURYXSwgdmFsdWUsIHNyY1NwYW4sIGF0dHIudmFsdWVTcGFuIHx8IHNyY1NwYW4sXG4gICAgICAgICAgICB0YXJnZXRNYXRjaGFibGVBdHRycywgYm91bmRFdmVudHMpO1xuXG4gICAgICB9IGVsc2UgaWYgKGJpbmRQYXJ0c1tLV19BVF9JRFhdKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdQYXJzZXIucGFyc2VMaXRlcmFsQXR0cihcbiAgICAgICAgICAgIG5hbWUsIHZhbHVlLCBzcmNTcGFuLCBhYnNvbHV0ZU9mZnNldCwgYXR0ci52YWx1ZVNwYW4sIHRhcmdldE1hdGNoYWJsZUF0dHJzLFxuICAgICAgICAgICAgdGFyZ2V0UHJvcHMpO1xuXG4gICAgICB9IGVsc2UgaWYgKGJpbmRQYXJ0c1tJREVOVF9CQU5BTkFfQk9YX0lEWF0pIHtcbiAgICAgICAgdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZVByb3BlcnR5QmluZGluZyhcbiAgICAgICAgICAgIGJpbmRQYXJ0c1tJREVOVF9CQU5BTkFfQk9YX0lEWF0sIHZhbHVlLCBmYWxzZSwgc3JjU3BhbiwgYWJzb2x1dGVPZmZzZXQsIGF0dHIudmFsdWVTcGFuLFxuICAgICAgICAgICAgdGFyZ2V0TWF0Y2hhYmxlQXR0cnMsIHRhcmdldFByb3BzKTtcbiAgICAgICAgdGhpcy5fcGFyc2VBc3NpZ25tZW50RXZlbnQoXG4gICAgICAgICAgICBiaW5kUGFydHNbSURFTlRfQkFOQU5BX0JPWF9JRFhdLCB2YWx1ZSwgc3JjU3BhbiwgYXR0ci52YWx1ZVNwYW4gfHwgc3JjU3BhbixcbiAgICAgICAgICAgIHRhcmdldE1hdGNoYWJsZUF0dHJzLCBib3VuZEV2ZW50cyk7XG5cbiAgICAgIH0gZWxzZSBpZiAoYmluZFBhcnRzW0lERU5UX1BST1BFUlRZX0lEWF0pIHtcbiAgICAgICAgdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZVByb3BlcnR5QmluZGluZyhcbiAgICAgICAgICAgIGJpbmRQYXJ0c1tJREVOVF9QUk9QRVJUWV9JRFhdLCB2YWx1ZSwgZmFsc2UsIHNyY1NwYW4sIGFic29sdXRlT2Zmc2V0LCBhdHRyLnZhbHVlU3BhbixcbiAgICAgICAgICAgIHRhcmdldE1hdGNoYWJsZUF0dHJzLCB0YXJnZXRQcm9wcyk7XG5cbiAgICAgIH0gZWxzZSBpZiAoYmluZFBhcnRzW0lERU5UX0VWRU5UX0lEWF0pIHtcbiAgICAgICAgdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZUV2ZW50KFxuICAgICAgICAgICAgYmluZFBhcnRzW0lERU5UX0VWRU5UX0lEWF0sIHZhbHVlLCBzcmNTcGFuLCBhdHRyLnZhbHVlU3BhbiB8fCBzcmNTcGFuLFxuICAgICAgICAgICAgdGFyZ2V0TWF0Y2hhYmxlQXR0cnMsIGJvdW5kRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGFzQmluZGluZyA9IHRoaXMuX2JpbmRpbmdQYXJzZXIucGFyc2VQcm9wZXJ0eUludGVycG9sYXRpb24oXG4gICAgICAgICAgbmFtZSwgdmFsdWUsIHNyY1NwYW4sIGF0dHIudmFsdWVTcGFuLCB0YXJnZXRNYXRjaGFibGVBdHRycywgdGFyZ2V0UHJvcHMpO1xuICAgIH1cblxuICAgIGlmICghaGFzQmluZGluZykge1xuICAgICAgdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZUxpdGVyYWxBdHRyKFxuICAgICAgICAgIG5hbWUsIHZhbHVlLCBzcmNTcGFuLCBhYnNvbHV0ZU9mZnNldCwgYXR0ci52YWx1ZVNwYW4sIHRhcmdldE1hdGNoYWJsZUF0dHJzLCB0YXJnZXRQcm9wcyk7XG4gICAgfVxuXG4gICAgdGFyZ2V0RXZlbnRzLnB1c2goLi4uYm91bmRFdmVudHMubWFwKGUgPT4gdC5Cb3VuZEV2ZW50QXN0LmZyb21QYXJzZWRFdmVudChlKSkpO1xuXG4gICAgcmV0dXJuIGhhc0JpbmRpbmc7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVBdHRyaWJ1dGVOYW1lKGF0dHJOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAvXmRhdGEtL2kudGVzdChhdHRyTmFtZSkgPyBhdHRyTmFtZS5zdWJzdHJpbmcoNSkgOiBhdHRyTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlVmFyaWFibGUoXG4gICAgICBpZGVudGlmaWVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgdGFyZ2V0VmFyczogdC5WYXJpYWJsZUFzdFtdKSB7XG4gICAgaWYgKGlkZW50aWZpZXIuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBcIi1cIiBpcyBub3QgYWxsb3dlZCBpbiB2YXJpYWJsZSBuYW1lc2AsIHNvdXJjZVNwYW4pO1xuICAgIH0gZWxzZSBpZiAoaWRlbnRpZmllci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBWYXJpYWJsZSBkb2VzIG5vdCBoYXZlIGEgbmFtZWAsIHNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIHRhcmdldFZhcnMucHVzaChuZXcgdC5WYXJpYWJsZUFzdChpZGVudGlmaWVyLCB2YWx1ZSwgc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VSZWZlcmVuY2UoXG4gICAgICBpZGVudGlmaWVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHRhcmdldFJlZnM6IEVsZW1lbnRPckRpcmVjdGl2ZVJlZltdKSB7XG4gICAgaWYgKGlkZW50aWZpZXIuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBcIi1cIiBpcyBub3QgYWxsb3dlZCBpbiByZWZlcmVuY2UgbmFtZXNgLCBzb3VyY2VTcGFuKTtcbiAgICB9IGVsc2UgaWYgKGlkZW50aWZpZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihgUmVmZXJlbmNlIGRvZXMgbm90IGhhdmUgYSBuYW1lYCwgc291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgdGFyZ2V0UmVmcy5wdXNoKG5ldyBFbGVtZW50T3JEaXJlY3RpdmVSZWYoaWRlbnRpZmllciwgdmFsdWUsIHNvdXJjZVNwYW4pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQXNzaWdubWVudEV2ZW50KFxuICAgICAgbmFtZTogc3RyaW5nLCBleHByZXNzaW9uOiBzdHJpbmcsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgdmFsdWVTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICB0YXJnZXRNYXRjaGFibGVBdHRyczogc3RyaW5nW11bXSwgdGFyZ2V0RXZlbnRzOiBQYXJzZWRFdmVudFtdKSB7XG4gICAgdGhpcy5fYmluZGluZ1BhcnNlci5wYXJzZUV2ZW50KFxuICAgICAgICBgJHtuYW1lfUNoYW5nZWAsIGAke2V4cHJlc3Npb259PSRldmVudGAsIHNvdXJjZVNwYW4sIHZhbHVlU3BhbiwgdGFyZ2V0TWF0Y2hhYmxlQXR0cnMsXG4gICAgICAgIHRhcmdldEV2ZW50cyk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZURpcmVjdGl2ZXMoc2VsZWN0b3JNYXRjaGVyOiBTZWxlY3Rvck1hdGNoZXIsIGVsZW1lbnRDc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IpOlxuICAgICAge2RpcmVjdGl2ZXM6IENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5W10sIG1hdGNoRWxlbWVudDogYm9vbGVhbn0ge1xuICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgZGlyZWN0aXZlcyBzbyB0aGF0IHdlIGdldCBjb25zaXN0ZW50IHJlc3VsdHMgdGhyb3VnaG91dCxcbiAgICAvLyBhcyBzZWxlY3Rvck1hdGNoZXIgdXNlcyBNYXBzIGluc2lkZS5cbiAgICAvLyBBbHNvIGRlZHVwbGljYXRlIGRpcmVjdGl2ZXMgYXMgdGhleSBtaWdodCBtYXRjaCBtb3JlIHRoYW4gb25lIHRpbWUhXG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IG5ld0FycmF5KHRoaXMuZGlyZWN0aXZlc0luZGV4LnNpemUpO1xuICAgIC8vIFdoZXRoZXIgYW55IGRpcmVjdGl2ZSBzZWxlY3RvciBtYXRjaGVzIG9uIHRoZSBlbGVtZW50IG5hbWVcbiAgICBsZXQgbWF0Y2hFbGVtZW50ID0gZmFsc2U7XG5cbiAgICBzZWxlY3Rvck1hdGNoZXIubWF0Y2goZWxlbWVudENzc1NlbGVjdG9yLCAoc2VsZWN0b3IsIGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgZGlyZWN0aXZlc1t0aGlzLmRpcmVjdGl2ZXNJbmRleC5nZXQoZGlyZWN0aXZlKSFdID0gZGlyZWN0aXZlO1xuICAgICAgbWF0Y2hFbGVtZW50ID0gbWF0Y2hFbGVtZW50IHx8IHNlbGVjdG9yLmhhc0VsZW1lbnRTZWxlY3RvcigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMuZmlsdGVyKGRpciA9PiAhIWRpciksXG4gICAgICBtYXRjaEVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZURpcmVjdGl2ZUFzdHMoXG4gICAgICBpc1RlbXBsYXRlRWxlbWVudDogYm9vbGVhbiwgZWxlbWVudE5hbWU6IHN0cmluZywgZGlyZWN0aXZlczogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSxcbiAgICAgIHByb3BzOiBQYXJzZWRQcm9wZXJ0eVtdLCBlbGVtZW50T3JEaXJlY3RpdmVSZWZzOiBFbGVtZW50T3JEaXJlY3RpdmVSZWZbXSxcbiAgICAgIGVsZW1lbnRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHRhcmdldFJlZmVyZW5jZXM6IHQuUmVmZXJlbmNlQXN0W10sXG4gICAgICB0YXJnZXRCb3VuZERpcmVjdGl2ZVByb3BOYW1lczogU2V0PHN0cmluZz4pOiB0LkRpcmVjdGl2ZUFzdFtdIHtcbiAgICBjb25zdCBtYXRjaGVkUmVmZXJlbmNlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGxldCBjb21wb25lbnQ6IENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5ID0gbnVsbCE7XG5cbiAgICBjb25zdCBkaXJlY3RpdmVBc3RzID0gZGlyZWN0aXZlcy5tYXAoKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4oXG4gICAgICAgICAgZWxlbWVudFNvdXJjZVNwYW4uc3RhcnQsIGVsZW1lbnRTb3VyY2VTcGFuLmVuZCxcbiAgICAgICAgICBgRGlyZWN0aXZlICR7aWRlbnRpZmllck5hbWUoZGlyZWN0aXZlLnR5cGUpfWApO1xuXG4gICAgICBpZiAoZGlyZWN0aXZlLmlzQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRpcmVjdGl2ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGl2ZVByb3BlcnRpZXM6IHQuQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdFtdID0gW107XG4gICAgICBjb25zdCBib3VuZFByb3BlcnRpZXMgPVxuICAgICAgICAgIHRoaXMuX2JpbmRpbmdQYXJzZXIuY3JlYXRlRGlyZWN0aXZlSG9zdFByb3BlcnR5QXN0cyhkaXJlY3RpdmUsIGVsZW1lbnROYW1lLCBzb3VyY2VTcGFuKSE7XG5cbiAgICAgIGxldCBob3N0UHJvcGVydGllcyA9XG4gICAgICAgICAgYm91bmRQcm9wZXJ0aWVzLm1hcChwcm9wID0+IHQuQm91bmRFbGVtZW50UHJvcGVydHlBc3QuZnJvbUJvdW5kUHJvcGVydHkocHJvcCkpO1xuICAgICAgLy8gTm90ZTogV2UgbmVlZCB0byBjaGVjayB0aGUgaG9zdCBwcm9wZXJ0aWVzIGhlcmUgYXMgd2VsbCxcbiAgICAgIC8vIGFzIHdlIGRvbid0IGtub3cgdGhlIGVsZW1lbnQgbmFtZSBpbiB0aGUgRGlyZWN0aXZlV3JhcHBlckNvbXBpbGVyIHlldC5cbiAgICAgIGhvc3RQcm9wZXJ0aWVzID0gdGhpcy5fY2hlY2tQcm9wZXJ0aWVzSW5TY2hlbWEoZWxlbWVudE5hbWUsIGhvc3RQcm9wZXJ0aWVzKTtcbiAgICAgIGNvbnN0IHBhcnNlZEV2ZW50cyA9IHRoaXMuX2JpbmRpbmdQYXJzZXIuY3JlYXRlRGlyZWN0aXZlSG9zdEV2ZW50QXN0cyhkaXJlY3RpdmUsIHNvdXJjZVNwYW4pITtcbiAgICAgIHRoaXMuX2NyZWF0ZURpcmVjdGl2ZVByb3BlcnR5QXN0cyhcbiAgICAgICAgICBkaXJlY3RpdmUuaW5wdXRzLCBwcm9wcywgZGlyZWN0aXZlUHJvcGVydGllcywgdGFyZ2V0Qm91bmREaXJlY3RpdmVQcm9wTmFtZXMpO1xuICAgICAgZWxlbWVudE9yRGlyZWN0aXZlUmVmcy5mb3JFYWNoKChlbE9yRGlyUmVmKSA9PiB7XG4gICAgICAgIGlmICgoZWxPckRpclJlZi52YWx1ZS5sZW5ndGggPT09IDAgJiYgZGlyZWN0aXZlLmlzQ29tcG9uZW50KSB8fFxuICAgICAgICAgICAgKGVsT3JEaXJSZWYuaXNSZWZlcmVuY2VUb0RpcmVjdGl2ZShkaXJlY3RpdmUpKSkge1xuICAgICAgICAgIHRhcmdldFJlZmVyZW5jZXMucHVzaChuZXcgdC5SZWZlcmVuY2VBc3QoXG4gICAgICAgICAgICAgIGVsT3JEaXJSZWYubmFtZSwgY3JlYXRlVG9rZW5Gb3JSZWZlcmVuY2UoZGlyZWN0aXZlLnR5cGUucmVmZXJlbmNlKSwgZWxPckRpclJlZi52YWx1ZSxcbiAgICAgICAgICAgICAgZWxPckRpclJlZi5zb3VyY2VTcGFuKSk7XG4gICAgICAgICAgbWF0Y2hlZFJlZmVyZW5jZXMuYWRkKGVsT3JEaXJSZWYubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgaG9zdEV2ZW50cyA9IHBhcnNlZEV2ZW50cy5tYXAoZSA9PiB0LkJvdW5kRXZlbnRBc3QuZnJvbVBhcnNlZEV2ZW50KGUpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRRdWVyeVN0YXJ0SWQgPSB0aGlzLmNvbnRlbnRRdWVyeVN0YXJ0SWQ7XG4gICAgICB0aGlzLmNvbnRlbnRRdWVyeVN0YXJ0SWQgKz0gZGlyZWN0aXZlLnF1ZXJpZXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyB0LkRpcmVjdGl2ZUFzdChcbiAgICAgICAgICBkaXJlY3RpdmUsIGRpcmVjdGl2ZVByb3BlcnRpZXMsIGhvc3RQcm9wZXJ0aWVzLCBob3N0RXZlbnRzLCBjb250ZW50UXVlcnlTdGFydElkLFxuICAgICAgICAgIHNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgZWxlbWVudE9yRGlyZWN0aXZlUmVmcy5mb3JFYWNoKChlbE9yRGlyUmVmKSA9PiB7XG4gICAgICBpZiAoZWxPckRpclJlZi52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFJlZmVyZW5jZXMuaGFzKGVsT3JEaXJSZWYubmFtZSkpIHtcbiAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgYFRoZXJlIGlzIG5vIGRpcmVjdGl2ZSB3aXRoIFwiZXhwb3J0QXNcIiBzZXQgdG8gXCIke2VsT3JEaXJSZWYudmFsdWV9XCJgLFxuICAgICAgICAgICAgICBlbE9yRGlyUmVmLnNvdXJjZVNwYW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHJlZlRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSA9IG51bGwhO1xuICAgICAgICBpZiAoaXNUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICByZWZUb2tlbiA9IGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy5yZWZsZWN0b3IsIElkZW50aWZpZXJzLlRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRSZWZlcmVuY2VzLnB1c2goXG4gICAgICAgICAgICBuZXcgdC5SZWZlcmVuY2VBc3QoZWxPckRpclJlZi5uYW1lLCByZWZUb2tlbiwgZWxPckRpclJlZi52YWx1ZSwgZWxPckRpclJlZi5zb3VyY2VTcGFuKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZUFzdHM7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXJlY3RpdmVQcm9wZXJ0eUFzdHMoXG4gICAgICBkaXJlY3RpdmVQcm9wZXJ0aWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSwgYm91bmRQcm9wczogUGFyc2VkUHJvcGVydHlbXSxcbiAgICAgIHRhcmdldEJvdW5kRGlyZWN0aXZlUHJvcHM6IHQuQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdFtdLFxuICAgICAgdGFyZ2V0Qm91bmREaXJlY3RpdmVQcm9wTmFtZXM6IFNldDxzdHJpbmc+KSB7XG4gICAgaWYgKGRpcmVjdGl2ZVByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IGJvdW5kUHJvcHNCeU5hbWUgPSBuZXcgTWFwPHN0cmluZywgUGFyc2VkUHJvcGVydHk+KCk7XG4gICAgICBib3VuZFByb3BzLmZvckVhY2goYm91bmRQcm9wID0+IHtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gYm91bmRQcm9wc0J5TmFtZS5nZXQoYm91bmRQcm9wLm5hbWUpO1xuICAgICAgICBpZiAoIXByZXZWYWx1ZSB8fCBwcmV2VmFsdWUuaXNMaXRlcmFsKSB7XG4gICAgICAgICAgLy8gZ2l2ZSBbYV09XCJiXCIgYSBoaWdoZXIgcHJlY2VkZW5jZSB0aGFuIGE9XCJiXCIgb24gdGhlIHNhbWUgZWxlbWVudFxuICAgICAgICAgIGJvdW5kUHJvcHNCeU5hbWUuc2V0KGJvdW5kUHJvcC5uYW1lLCBib3VuZFByb3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlyZWN0aXZlUHJvcGVydGllcykuZm9yRWFjaChkaXJQcm9wID0+IHtcbiAgICAgICAgY29uc3QgZWxQcm9wID0gZGlyZWN0aXZlUHJvcGVydGllc1tkaXJQcm9wXTtcbiAgICAgICAgY29uc3QgYm91bmRQcm9wID0gYm91bmRQcm9wc0J5TmFtZS5nZXQoZWxQcm9wKTtcblxuICAgICAgICAvLyBCaW5kaW5ncyBhcmUgb3B0aW9uYWwsIHNvIHRoaXMgYmluZGluZyBvbmx5IG5lZWRzIHRvIGJlIHNldCB1cCBpZiBhbiBleHByZXNzaW9uIGlzIGdpdmVuLlxuICAgICAgICBpZiAoYm91bmRQcm9wKSB7XG4gICAgICAgICAgdGFyZ2V0Qm91bmREaXJlY3RpdmVQcm9wTmFtZXMuYWRkKGJvdW5kUHJvcC5uYW1lKTtcbiAgICAgICAgICBpZiAoIWlzRW1wdHlFeHByZXNzaW9uKGJvdW5kUHJvcC5leHByZXNzaW9uKSkge1xuICAgICAgICAgICAgdGFyZ2V0Qm91bmREaXJlY3RpdmVQcm9wcy5wdXNoKG5ldyB0LkJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QoXG4gICAgICAgICAgICAgICAgZGlyUHJvcCwgYm91bmRQcm9wLm5hbWUsIGJvdW5kUHJvcC5leHByZXNzaW9uLCBib3VuZFByb3Auc291cmNlU3BhbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFByb3BlcnR5QXN0cyhcbiAgICAgIGVsZW1lbnROYW1lOiBzdHJpbmcsIHByb3BzOiBQYXJzZWRQcm9wZXJ0eVtdLFxuICAgICAgYm91bmREaXJlY3RpdmVQcm9wTmFtZXM6IFNldDxzdHJpbmc+KTogdC5Cb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdFtdIHtcbiAgICBjb25zdCBib3VuZEVsZW1lbnRQcm9wczogdC5Cb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdFtdID0gW107XG5cbiAgICBwcm9wcy5mb3JFYWNoKChwcm9wOiBQYXJzZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFwcm9wLmlzTGl0ZXJhbCAmJiAhYm91bmREaXJlY3RpdmVQcm9wTmFtZXMuaGFzKHByb3AubmFtZSkpIHtcbiAgICAgICAgY29uc3QgYm91bmRQcm9wID0gdGhpcy5fYmluZGluZ1BhcnNlci5jcmVhdGVCb3VuZEVsZW1lbnRQcm9wZXJ0eShlbGVtZW50TmFtZSwgcHJvcCk7XG4gICAgICAgIGJvdW5kRWxlbWVudFByb3BzLnB1c2godC5Cb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdC5mcm9tQm91bmRQcm9wZXJ0eShib3VuZFByb3ApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tQcm9wZXJ0aWVzSW5TY2hlbWEoZWxlbWVudE5hbWUsIGJvdW5kRWxlbWVudFByb3BzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRDb21wb25lbnREaXJlY3RpdmVzKGRpcmVjdGl2ZXM6IHQuRGlyZWN0aXZlQXN0W10pOiB0LkRpcmVjdGl2ZUFzdFtdIHtcbiAgICByZXR1cm4gZGlyZWN0aXZlcy5maWx0ZXIoZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS5kaXJlY3RpdmUuaXNDb21wb25lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmluZENvbXBvbmVudERpcmVjdGl2ZU5hbWVzKGRpcmVjdGl2ZXM6IHQuRGlyZWN0aXZlQXN0W10pOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRDb21wb25lbnREaXJlY3RpdmVzKGRpcmVjdGl2ZXMpXG4gICAgICAgIC5tYXAoZGlyZWN0aXZlID0+IGlkZW50aWZpZXJOYW1lKGRpcmVjdGl2ZS5kaXJlY3RpdmUudHlwZSkhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Fzc2VydE9ubHlPbmVDb21wb25lbnQoZGlyZWN0aXZlczogdC5EaXJlY3RpdmVBc3RbXSwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZU5hbWVzID0gdGhpcy5fZmluZENvbXBvbmVudERpcmVjdGl2ZU5hbWVzKGRpcmVjdGl2ZXMpO1xuICAgIGlmIChjb21wb25lbnRUeXBlTmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgYE1vcmUgdGhhbiBvbmUgY29tcG9uZW50IG1hdGNoZWQgb24gdGhpcyBlbGVtZW50LlxcbmAgK1xuICAgICAgICAgICAgICBgTWFrZSBzdXJlIHRoYXQgb25seSBvbmUgY29tcG9uZW50J3Mgc2VsZWN0b3IgY2FuIG1hdGNoIGEgZ2l2ZW4gZWxlbWVudC5cXG5gICtcbiAgICAgICAgICAgICAgYENvbmZsaWN0aW5nIGNvbXBvbmVudHM6ICR7Y29tcG9uZW50VHlwZU5hbWVzLmpvaW4oJywnKX1gLFxuICAgICAgICAgIHNvdXJjZVNwYW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhhdCBub24tYW5ndWxhciB0YWdzIGNvbmZvcm0gdG8gdGhlIHNjaGVtYXMuXG4gICAqXG4gICAqIE5vdGU6IEFuIGVsZW1lbnQgaXMgY29uc2lkZXJlZCBhbiBhbmd1bGFyIHRhZyB3aGVuIGF0IGxlYXN0IG9uZSBkaXJlY3RpdmUgc2VsZWN0b3IgbWF0Y2hlcyB0aGVcbiAgICogdGFnIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSBtYXRjaEVsZW1lbnQgV2hldGhlciBhbnkgZGlyZWN0aXZlIGhhcyBtYXRjaGVkIG9uIHRoZSB0YWcgbmFtZVxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaHRtbCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9hc3NlcnRFbGVtZW50RXhpc3RzKG1hdGNoRWxlbWVudDogYm9vbGVhbiwgZWxlbWVudDogaHRtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgZWxOYW1lID0gZWxlbWVudC5uYW1lLnJlcGxhY2UoL146eGh0bWw6LywgJycpO1xuXG4gICAgaWYgKCFtYXRjaEVsZW1lbnQgJiYgIXRoaXMuX3NjaGVtYVJlZ2lzdHJ5Lmhhc0VsZW1lbnQoZWxOYW1lLCB0aGlzLl9zY2hlbWFzKSkge1xuICAgICAgbGV0IGVycm9yTXNnID0gYCcke2VsTmFtZX0nIGlzIG5vdCBhIGtub3duIGVsZW1lbnQ6XFxuYDtcbiAgICAgIGVycm9yTXNnICs9IGAxLiBJZiAnJHtcbiAgICAgICAgICBlbE5hbWV9JyBpcyBhbiBBbmd1bGFyIGNvbXBvbmVudCwgdGhlbiB2ZXJpZnkgdGhhdCBpdCBpcyBwYXJ0IG9mIHRoaXMgbW9kdWxlLlxcbmA7XG4gICAgICBpZiAoZWxOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIGVycm9yTXNnICs9IGAyLiBJZiAnJHtcbiAgICAgICAgICAgIGVsTmFtZX0nIGlzIGEgV2ViIENvbXBvbmVudCB0aGVuIGFkZCAnQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQScgdG8gdGhlICdATmdNb2R1bGUuc2NoZW1hcycgb2YgdGhpcyBjb21wb25lbnQgdG8gc3VwcHJlc3MgdGhpcyBtZXNzYWdlLmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1zZyArPVxuICAgICAgICAgICAgYDIuIFRvIGFsbG93IGFueSBlbGVtZW50IGFkZCAnTk9fRVJST1JTX1NDSEVNQScgdG8gdGhlICdATmdNb2R1bGUuc2NoZW1hcycgb2YgdGhpcyBjb21wb25lbnQuYDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVycm9yTXNnLCBlbGVtZW50LnNvdXJjZVNwYW4hKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hc3NlcnROb0NvbXBvbmVudHNOb3JFbGVtZW50QmluZGluZ3NPblRlbXBsYXRlKFxuICAgICAgZGlyZWN0aXZlczogdC5EaXJlY3RpdmVBc3RbXSwgZWxlbWVudFByb3BzOiB0LkJvdW5kRWxlbWVudFByb3BlcnR5QXN0W10sXG4gICAgICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlTmFtZXM6IHN0cmluZ1tdID0gdGhpcy5fZmluZENvbXBvbmVudERpcmVjdGl2ZU5hbWVzKGRpcmVjdGl2ZXMpO1xuICAgIGlmIChjb21wb25lbnRUeXBlTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgYENvbXBvbmVudHMgb24gYW4gZW1iZWRkZWQgdGVtcGxhdGU6ICR7Y29tcG9uZW50VHlwZU5hbWVzLmpvaW4oJywnKX1gLCBzb3VyY2VTcGFuKTtcbiAgICB9XG4gICAgZWxlbWVudFByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBgUHJvcGVydHkgYmluZGluZyAke1xuICAgICAgICAgICAgICBwcm9wLm5hbWV9IG5vdCB1c2VkIGJ5IGFueSBkaXJlY3RpdmUgb24gYW4gZW1iZWRkZWQgdGVtcGxhdGUuIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lIGlzIHNwZWxsZWQgY29ycmVjdGx5IGFuZCBhbGwgZGlyZWN0aXZlcyBhcmUgbGlzdGVkIGluIHRoZSBcIkBOZ01vZHVsZS5kZWNsYXJhdGlvbnNcIi5gLFxuICAgICAgICAgIHNvdXJjZVNwYW4pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXNzZXJ0QWxsRXZlbnRzUHVibGlzaGVkQnlEaXJlY3RpdmVzKFxuICAgICAgZGlyZWN0aXZlczogdC5EaXJlY3RpdmVBc3RbXSwgZXZlbnRzOiB0LkJvdW5kRXZlbnRBc3RbXSkge1xuICAgIGNvbnN0IGFsbERpcmVjdGl2ZUV2ZW50cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmUuZGlyZWN0aXZlLm91dHB1dHMpLmZvckVhY2goayA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGRpcmVjdGl2ZS5kaXJlY3RpdmUub3V0cHV0c1trXTtcbiAgICAgICAgYWxsRGlyZWN0aXZlRXZlbnRzLmFkZChldmVudE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IG51bGwgfHwgIWFsbERpcmVjdGl2ZUV2ZW50cy5oYXMoZXZlbnQubmFtZSkpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICBgRXZlbnQgYmluZGluZyAke1xuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC5mdWxsTmFtZX0gbm90IGVtaXR0ZWQgYnkgYW55IGRpcmVjdGl2ZSBvbiBhbiBlbWJlZGRlZCB0ZW1wbGF0ZS4gTWFrZSBzdXJlIHRoYXQgdGhlIGV2ZW50IG5hbWUgaXMgc3BlbGxlZCBjb3JyZWN0bHkgYW5kIGFsbCBkaXJlY3RpdmVzIGFyZSBsaXN0ZWQgaW4gdGhlIFwiQE5nTW9kdWxlLmRlY2xhcmF0aW9uc1wiLmAsXG4gICAgICAgICAgICBldmVudC5zb3VyY2VTcGFuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrUHJvcGVydGllc0luU2NoZW1hKGVsZW1lbnROYW1lOiBzdHJpbmcsIGJvdW5kUHJvcHM6IHQuQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSk6XG4gICAgICB0LkJvdW5kRWxlbWVudFByb3BlcnR5QXN0W10ge1xuICAgIC8vIE5vdGU6IFdlIGNhbid0IGZpbHRlciBvdXQgZW1wdHkgZXhwcmVzc2lvbnMgYmVmb3JlIHRoaXMgbWV0aG9kLFxuICAgIC8vIGFzIHdlIHN0aWxsIHdhbnQgdG8gdmFsaWRhdGUgdGhlbSFcbiAgICByZXR1cm4gYm91bmRQcm9wcy5maWx0ZXIoKGJvdW5kUHJvcCkgPT4ge1xuICAgICAgaWYgKGJvdW5kUHJvcC50eXBlID09PSB0LlByb3BlcnR5QmluZGluZ1R5cGUuUHJvcGVydHkgJiZcbiAgICAgICAgICAhdGhpcy5fc2NoZW1hUmVnaXN0cnkuaGFzUHJvcGVydHkoZWxlbWVudE5hbWUsIGJvdW5kUHJvcC5uYW1lLCB0aGlzLl9zY2hlbWFzKSkge1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSBgQ2FuJ3QgYmluZCB0byAnJHtib3VuZFByb3AubmFtZX0nIHNpbmNlIGl0IGlzbid0IGEga25vd24gcHJvcGVydHkgb2YgJyR7XG4gICAgICAgICAgICBlbGVtZW50TmFtZX0nLmA7XG4gICAgICAgIGlmIChlbGVtZW50TmFtZS5zdGFydHNXaXRoKCduZy0nKSkge1xuICAgICAgICAgIGVycm9yTXNnICs9XG4gICAgICAgICAgICAgIGBcXG4xLiBJZiAnJHtcbiAgICAgICAgICAgICAgICAgIGJvdW5kUHJvcFxuICAgICAgICAgICAgICAgICAgICAgIC5uYW1lfScgaXMgYW4gQW5ndWxhciBkaXJlY3RpdmUsIHRoZW4gYWRkICdDb21tb25Nb2R1bGUnIHRvIHRoZSAnQE5nTW9kdWxlLmltcG9ydHMnIG9mIHRoaXMgY29tcG9uZW50LmAgK1xuICAgICAgICAgICAgICBgXFxuMi4gVG8gYWxsb3cgYW55IHByb3BlcnR5IGFkZCAnTk9fRVJST1JTX1NDSEVNQScgdG8gdGhlICdATmdNb2R1bGUuc2NoZW1hcycgb2YgdGhpcyBjb21wb25lbnQuYDtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50TmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICAgIGVycm9yTXNnICs9XG4gICAgICAgICAgICAgIGBcXG4xLiBJZiAnJHtlbGVtZW50TmFtZX0nIGlzIGFuIEFuZ3VsYXIgY29tcG9uZW50IGFuZCBpdCBoYXMgJyR7XG4gICAgICAgICAgICAgICAgICBib3VuZFByb3AubmFtZX0nIGlucHV0LCB0aGVuIHZlcmlmeSB0aGF0IGl0IGlzIHBhcnQgb2YgdGhpcyBtb2R1bGUuYCArXG4gICAgICAgICAgICAgIGBcXG4yLiBJZiAnJHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lfScgaXMgYSBXZWIgQ29tcG9uZW50IHRoZW4gYWRkICdDVVNUT01fRUxFTUVOVFNfU0NIRU1BJyB0byB0aGUgJ0BOZ01vZHVsZS5zY2hlbWFzJyBvZiB0aGlzIGNvbXBvbmVudCB0byBzdXBwcmVzcyB0aGlzIG1lc3NhZ2UuYCArXG4gICAgICAgICAgICAgIGBcXG4zLiBUbyBhbGxvdyBhbnkgcHJvcGVydHkgYWRkICdOT19FUlJPUlNfU0NIRU1BJyB0byB0aGUgJ0BOZ01vZHVsZS5zY2hlbWFzJyBvZiB0aGlzIGNvbXBvbmVudC5gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVycm9yTXNnLCBib3VuZFByb3Auc291cmNlU3Bhbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gIWlzRW1wdHlFeHByZXNzaW9uKGJvdW5kUHJvcC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihcbiAgICAgIG1lc3NhZ2U6IHN0cmluZywgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgbGV2ZWw6IFBhcnNlRXJyb3JMZXZlbCA9IFBhcnNlRXJyb3JMZXZlbC5FUlJPUikge1xuICAgIHRoaXMuX3RhcmdldEVycm9ycy5wdXNoKG5ldyBQYXJzZUVycm9yKHNvdXJjZVNwYW4sIG1lc3NhZ2UsIGxldmVsKSk7XG4gIH1cbn1cblxuY2xhc3MgTm9uQmluZGFibGVWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgdmlzaXRFbGVtZW50KGFzdDogaHRtbC5FbGVtZW50LCBwYXJlbnQ6IEVsZW1lbnRDb250ZXh0KTogdC5FbGVtZW50QXN0fG51bGwge1xuICAgIGNvbnN0IHByZXBhcnNlZEVsZW1lbnQgPSBwcmVwYXJzZUVsZW1lbnQoYXN0KTtcbiAgICBpZiAocHJlcGFyc2VkRWxlbWVudC50eXBlID09PSBQcmVwYXJzZWRFbGVtZW50VHlwZS5TQ1JJUFQgfHxcbiAgICAgICAgcHJlcGFyc2VkRWxlbWVudC50eXBlID09PSBQcmVwYXJzZWRFbGVtZW50VHlwZS5TVFlMRSB8fFxuICAgICAgICBwcmVwYXJzZWRFbGVtZW50LnR5cGUgPT09IFByZXBhcnNlZEVsZW1lbnRUeXBlLlNUWUxFU0hFRVQpIHtcbiAgICAgIC8vIFNraXBwaW5nIDxzY3JpcHQ+IGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAvLyBTa2lwcGluZyA8c3R5bGU+IGFuZCBzdHlsZXNoZWV0cyBhcyB3ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGVtXG4gICAgICAvLyBpbiB0aGUgU3R5bGVDb21waWxlclxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0ck5hbWVBbmRWYWx1ZXMgPSBhc3QuYXR0cnMubWFwKChhdHRyKTogW3N0cmluZywgc3RyaW5nXSA9PiBbYXR0ci5uYW1lLCBhdHRyLnZhbHVlXSk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVFbGVtZW50Q3NzU2VsZWN0b3IoYXN0Lm5hbWUsIGF0dHJOYW1lQW5kVmFsdWVzKTtcbiAgICBjb25zdCBuZ0NvbnRlbnRJbmRleCA9IHBhcmVudC5maW5kTmdDb250ZW50SW5kZXgoc2VsZWN0b3IpO1xuICAgIGNvbnN0IGNoaWxkcmVuOiB0LlRlbXBsYXRlQXN0W10gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGFzdC5jaGlsZHJlbiwgRU1QVFlfRUxFTUVOVF9DT05URVhUKTtcbiAgICByZXR1cm4gbmV3IHQuRWxlbWVudEFzdChcbiAgICAgICAgYXN0Lm5hbWUsIGh0bWwudmlzaXRBbGwodGhpcywgYXN0LmF0dHJzKSwgW10sIFtdLCBbXSwgW10sIFtdLCBmYWxzZSwgW10sIGNoaWxkcmVuLFxuICAgICAgICBuZ0NvbnRlbnRJbmRleCwgYXN0LnNvdXJjZVNwYW4sIGFzdC5lbmRTb3VyY2VTcGFuKTtcbiAgfVxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogdC5BdHRyQXN0IHtcbiAgICByZXR1cm4gbmV3IHQuQXR0ckFzdChhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBwYXJlbnQ6IEVsZW1lbnRDb250ZXh0KTogdC5UZXh0QXN0IHtcbiAgICBjb25zdCBuZ0NvbnRlbnRJbmRleCA9IHBhcmVudC5maW5kTmdDb250ZW50SW5kZXgoVEVYVF9DU1NfU0VMRUNUT1IoKSkhO1xuICAgIHJldHVybiBuZXcgdC5UZXh0QXN0KHRleHQudmFsdWUsIG5nQ29udGVudEluZGV4LCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGV4cGFuc2lvbjtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGV4cGFuc2lvbkNhc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50IG9yIGRpcmVjdGl2ZSBpbiBhIHRlbXBsYXRlLiBFLmcuLCB0aGUgcmVmZXJlbmNlIGluIHRoaXMgdGVtcGxhdGU6XG4gKlxuICogPGRpdiAjbXlNZW51PVwiY29vbE1lbnVcIj5cbiAqXG4gKiB3b3VsZCBiZSB7bmFtZTogJ215TWVudScsIHZhbHVlOiAnY29vbE1lbnUnLCBzb3VyY2VTcGFuOiAuLi59XG4gKi9cbmNsYXNzIEVsZW1lbnRPckRpcmVjdGl2ZVJlZiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhpcyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2l2ZW4gZGlyZWN0aXZlLiAqL1xuICBpc1JlZmVyZW5jZVRvRGlyZWN0aXZlKGRpcmVjdGl2ZTogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnkpIHtcbiAgICByZXR1cm4gc3BsaXRFeHBvcnRBcyhkaXJlY3RpdmUuZXhwb3J0QXMpLmluZGV4T2YodGhpcy52YWx1ZSkgIT09IC0xO1xuICB9XG59XG5cbi8qKiBTcGxpdHMgYSByYXcsIHBvdGVudGlhbGx5IGNvbW1hLWRlbGltaXRlZCBgZXhwb3J0QXNgIHZhbHVlIGludG8gYW4gYXJyYXkgb2YgbmFtZXMuICovXG5mdW5jdGlvbiBzcGxpdEV4cG9ydEFzKGV4cG9ydEFzOiBzdHJpbmd8bnVsbCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGV4cG9ydEFzID8gZXhwb3J0QXMuc3BsaXQoJywnKS5tYXAoZSA9PiBlLnRyaW0oKSkgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Q2xhc3NlcyhjbGFzc0F0dHJWYWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gY2xhc3NBdHRyVmFsdWUudHJpbSgpLnNwbGl0KC9cXHMrL2cpO1xufVxuXG5jbGFzcyBFbGVtZW50Q29udGV4dCB7XG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgICBpc1RlbXBsYXRlRWxlbWVudDogYm9vbGVhbiwgZGlyZWN0aXZlczogdC5EaXJlY3RpdmVBc3RbXSxcbiAgICAgIHByb3ZpZGVyQ29udGV4dDogUHJvdmlkZXJFbGVtZW50Q29udGV4dCk6IEVsZW1lbnRDb250ZXh0IHtcbiAgICBjb25zdCBtYXRjaGVyID0gbmV3IFNlbGVjdG9yTWF0Y2hlcigpO1xuICAgIGxldCB3aWxkY2FyZE5nQ29udGVudEluZGV4OiBudW1iZXIgPSBudWxsITtcbiAgICBjb25zdCBjb21wb25lbnQgPSBkaXJlY3RpdmVzLmZpbmQoZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS5kaXJlY3RpdmUuaXNDb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IG5nQ29udGVudFNlbGVjdG9ycyA9IGNvbXBvbmVudC5kaXJlY3RpdmUudGVtcGxhdGUgIS5uZ0NvbnRlbnRTZWxlY3RvcnM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nQ29udGVudFNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IG5nQ29udGVudFNlbGVjdG9yc1tpXTtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgICB3aWxkY2FyZE5nQ29udGVudEluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVyLmFkZFNlbGVjdGFibGVzKENzc1NlbGVjdG9yLnBhcnNlKG5nQ29udGVudFNlbGVjdG9yc1tpXSksIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgRWxlbWVudENvbnRleHQoaXNUZW1wbGF0ZUVsZW1lbnQsIG1hdGNoZXIsIHdpbGRjYXJkTmdDb250ZW50SW5kZXgsIHByb3ZpZGVyQ29udGV4dCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgaXNUZW1wbGF0ZUVsZW1lbnQ6IGJvb2xlYW4sIHByaXZhdGUgX25nQ29udGVudEluZGV4TWF0Y2hlcjogU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgcHJpdmF0ZSBfd2lsZGNhcmROZ0NvbnRlbnRJbmRleDogbnVtYmVyfG51bGwsXG4gICAgICBwdWJsaWMgcHJvdmlkZXJDb250ZXh0OiBQcm92aWRlckVsZW1lbnRDb250ZXh0fG51bGwpIHt9XG5cbiAgZmluZE5nQ29udGVudEluZGV4KHNlbGVjdG9yOiBDc3NTZWxlY3Rvcik6IG51bWJlcnxudWxsIHtcbiAgICBjb25zdCBuZ0NvbnRlbnRJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xuICAgIHRoaXMuX25nQ29udGVudEluZGV4TWF0Y2hlci5tYXRjaChzZWxlY3RvciwgKHNlbGVjdG9yLCBuZ0NvbnRlbnRJbmRleCkgPT4ge1xuICAgICAgbmdDb250ZW50SW5kaWNlcy5wdXNoKG5nQ29udGVudEluZGV4KTtcbiAgICB9KTtcbiAgICBuZ0NvbnRlbnRJbmRpY2VzLnNvcnQoKTtcbiAgICBpZiAodGhpcy5fd2lsZGNhcmROZ0NvbnRlbnRJbmRleCAhPSBudWxsKSB7XG4gICAgICBuZ0NvbnRlbnRJbmRpY2VzLnB1c2godGhpcy5fd2lsZGNhcmROZ0NvbnRlbnRJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBuZ0NvbnRlbnRJbmRpY2VzLmxlbmd0aCA+IDAgPyBuZ0NvbnRlbnRJbmRpY2VzWzBdIDogbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudENzc1NlbGVjdG9yKFxuICAgIGVsZW1lbnROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IFtzdHJpbmcsIHN0cmluZ11bXSk6IENzc1NlbGVjdG9yIHtcbiAgY29uc3QgY3NzU2VsZWN0b3IgPSBuZXcgQ3NzU2VsZWN0b3IoKTtcbiAgY29uc3QgZWxOYW1lTm9OcyA9IHNwbGl0TnNOYW1lKGVsZW1lbnROYW1lKVsxXTtcblxuICBjc3NTZWxlY3Rvci5zZXRFbGVtZW50KGVsTmFtZU5vTnMpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cmlidXRlc1tpXVswXTtcbiAgICBjb25zdCBhdHRyTmFtZU5vTnMgPSBzcGxpdE5zTmFtZShhdHRyTmFtZSlbMV07XG4gICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1tpXVsxXTtcblxuICAgIGNzc1NlbGVjdG9yLmFkZEF0dHJpYnV0ZShhdHRyTmFtZU5vTnMsIGF0dHJWYWx1ZSk7XG4gICAgaWYgKGF0dHJOYW1lLnRvTG93ZXJDYXNlKCkgPT0gQ0xBU1NfQVRUUikge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHNwbGl0Q2xhc3NlcyhhdHRyVmFsdWUpO1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiBjc3NTZWxlY3Rvci5hZGRDbGFzc05hbWUoY2xhc3NOYW1lKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjc3NTZWxlY3Rvcjtcbn1cblxuY29uc3QgRU1QVFlfRUxFTUVOVF9DT05URVhUID0gbmV3IEVsZW1lbnRDb250ZXh0KHRydWUsIG5ldyBTZWxlY3Rvck1hdGNoZXIoKSwgbnVsbCwgbnVsbCk7XG5jb25zdCBOT05fQklOREFCTEVfVklTSVRPUiA9IG5ldyBOb25CaW5kYWJsZVZpc2l0b3IoKTtcblxuZnVuY3Rpb24gX2lzRW1wdHlUZXh0Tm9kZShub2RlOiBodG1sLk5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBodG1sLlRleHQgJiYgbm9kZS52YWx1ZS50cmltKCkubGVuZ3RoID09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdW1tYXJ5RHVwbGljYXRlczxUIGV4dGVuZHMge3R5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGF9PihpdGVtczogVFtdKTogVFtdIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxhbnksIFQ+KCk7XG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmICghbWFwLmdldChpdGVtLnR5cGUucmVmZXJlbmNlKSkge1xuICAgICAgbWFwLnNldChpdGVtLnR5cGUucmVmZXJlbmNlLCBpdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBBcnJheS5mcm9tKG1hcC52YWx1ZXMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5RXhwcmVzc2lvbihhc3Q6IEFTVCk6IGJvb2xlYW4ge1xuICBpZiAoYXN0IGluc3RhbmNlb2YgQVNUV2l0aFNvdXJjZSkge1xuICAgIGFzdCA9IGFzdC5hc3Q7XG4gIH1cbiAgcmV0dXJuIGFzdCBpbnN0YW5jZW9mIEVtcHR5RXhwcjtcbn1cbiJdfQ==