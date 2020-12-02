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
        define("@angular/compiler/src/ml_parser/parser", ["require", "exports", "tslib", "@angular/compiler/src/parse_util", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/lexer", "@angular/compiler/src/ml_parser/tags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var parse_util_1 = require("@angular/compiler/src/parse_util");
    var html = require("@angular/compiler/src/ml_parser/ast");
    var lex = require("@angular/compiler/src/ml_parser/lexer");
    var tags_1 = require("@angular/compiler/src/ml_parser/tags");
    var TreeError = /** @class */ (function (_super) {
        tslib_1.__extends(TreeError, _super);
        function TreeError(elementName, span, msg) {
            var _this = _super.call(this, span, msg) || this;
            _this.elementName = elementName;
            return _this;
        }
        TreeError.create = function (elementName, span, msg) {
            return new TreeError(elementName, span, msg);
        };
        return TreeError;
    }(parse_util_1.ParseError));
    exports.TreeError = TreeError;
    var ParseTreeResult = /** @class */ (function () {
        function ParseTreeResult(rootNodes, errors) {
            this.rootNodes = rootNodes;
            this.errors = errors;
        }
        return ParseTreeResult;
    }());
    exports.ParseTreeResult = ParseTreeResult;
    var Parser = /** @class */ (function () {
        function Parser(getTagDefinition) {
            this.getTagDefinition = getTagDefinition;
        }
        Parser.prototype.parse = function (source, url, options) {
            var tokensAndErrors = lex.tokenize(source, url, this.getTagDefinition, options);
            var treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
            return new ParseTreeResult(treeAndErrors.rootNodes, tokensAndErrors.errors.concat(treeAndErrors.errors));
        };
        return Parser;
    }());
    exports.Parser = Parser;
    var _TreeBuilder = /** @class */ (function () {
        function _TreeBuilder(tokens, getTagDefinition) {
            this.tokens = tokens;
            this.getTagDefinition = getTagDefinition;
            this._index = -1;
            this._rootNodes = [];
            this._errors = [];
            this._elementStack = [];
            this._advance();
        }
        _TreeBuilder.prototype.build = function () {
            while (this._peek.type !== lex.TokenType.EOF) {
                if (this._peek.type === lex.TokenType.TAG_OPEN_START) {
                    this._consumeStartTag(this._advance());
                }
                else if (this._peek.type === lex.TokenType.TAG_CLOSE) {
                    this._consumeEndTag(this._advance());
                }
                else if (this._peek.type === lex.TokenType.CDATA_START) {
                    this._closeVoidElement();
                    this._consumeCdata(this._advance());
                }
                else if (this._peek.type === lex.TokenType.COMMENT_START) {
                    this._closeVoidElement();
                    this._consumeComment(this._advance());
                }
                else if (this._peek.type === lex.TokenType.TEXT || this._peek.type === lex.TokenType.RAW_TEXT ||
                    this._peek.type === lex.TokenType.ESCAPABLE_RAW_TEXT) {
                    this._closeVoidElement();
                    this._consumeText(this._advance());
                }
                else if (this._peek.type === lex.TokenType.EXPANSION_FORM_START) {
                    this._consumeExpansion(this._advance());
                }
                else {
                    // Skip all other tokens...
                    this._advance();
                }
            }
            return new ParseTreeResult(this._rootNodes, this._errors);
        };
        _TreeBuilder.prototype._advance = function () {
            var prev = this._peek;
            if (this._index < this.tokens.length - 1) {
                // Note: there is always an EOF token at the end
                this._index++;
            }
            this._peek = this.tokens[this._index];
            return prev;
        };
        _TreeBuilder.prototype._advanceIf = function (type) {
            if (this._peek.type === type) {
                return this._advance();
            }
            return null;
        };
        _TreeBuilder.prototype._consumeCdata = function (startToken) {
            this._consumeText(this._advance());
            this._advanceIf(lex.TokenType.CDATA_END);
        };
        _TreeBuilder.prototype._consumeComment = function (token) {
            var text = this._advanceIf(lex.TokenType.RAW_TEXT);
            this._advanceIf(lex.TokenType.COMMENT_END);
            var value = text != null ? text.parts[0].trim() : null;
            this._addToParent(new html.Comment(value, token.sourceSpan));
        };
        _TreeBuilder.prototype._consumeExpansion = function (token) {
            var switchValue = this._advance();
            var type = this._advance();
            var cases = [];
            // read =
            while (this._peek.type === lex.TokenType.EXPANSION_CASE_VALUE) {
                var expCase = this._parseExpansionCase();
                if (!expCase)
                    return; // error
                cases.push(expCase);
            }
            // read the final }
            if (this._peek.type !== lex.TokenType.EXPANSION_FORM_END) {
                this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
                return;
            }
            var sourceSpan = new parse_util_1.ParseSourceSpan(token.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new html.Expansion(switchValue.parts[0], type.parts[0], cases, sourceSpan, switchValue.sourceSpan));
            this._advance();
        };
        _TreeBuilder.prototype._parseExpansionCase = function () {
            var value = this._advance();
            // read {
            if (this._peek.type !== lex.TokenType.EXPANSION_CASE_EXP_START) {
                this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'."));
                return null;
            }
            // read until }
            var start = this._advance();
            var exp = this._collectExpansionExpTokens(start);
            if (!exp)
                return null;
            var end = this._advance();
            exp.push(new lex.Token(lex.TokenType.EOF, [], end.sourceSpan));
            // parse everything in between { and }
            var parsedExp = new _TreeBuilder(exp, this.getTagDefinition).build();
            if (parsedExp.errors.length > 0) {
                this._errors = this._errors.concat(parsedExp.errors);
                return null;
            }
            var sourceSpan = new parse_util_1.ParseSourceSpan(value.sourceSpan.start, end.sourceSpan.end);
            var expSourceSpan = new parse_util_1.ParseSourceSpan(start.sourceSpan.start, end.sourceSpan.end);
            return new html.ExpansionCase(value.parts[0], parsedExp.rootNodes, sourceSpan, value.sourceSpan, expSourceSpan);
        };
        _TreeBuilder.prototype._collectExpansionExpTokens = function (start) {
            var exp = [];
            var expansionFormStack = [lex.TokenType.EXPANSION_CASE_EXP_START];
            while (true) {
                if (this._peek.type === lex.TokenType.EXPANSION_FORM_START ||
                    this._peek.type === lex.TokenType.EXPANSION_CASE_EXP_START) {
                    expansionFormStack.push(this._peek.type);
                }
                if (this._peek.type === lex.TokenType.EXPANSION_CASE_EXP_END) {
                    if (lastOnStack(expansionFormStack, lex.TokenType.EXPANSION_CASE_EXP_START)) {
                        expansionFormStack.pop();
                        if (expansionFormStack.length == 0)
                            return exp;
                    }
                    else {
                        this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                        return null;
                    }
                }
                if (this._peek.type === lex.TokenType.EXPANSION_FORM_END) {
                    if (lastOnStack(expansionFormStack, lex.TokenType.EXPANSION_FORM_START)) {
                        expansionFormStack.pop();
                    }
                    else {
                        this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                        return null;
                    }
                }
                if (this._peek.type === lex.TokenType.EOF) {
                    this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                    return null;
                }
                exp.push(this._advance());
            }
        };
        _TreeBuilder.prototype._consumeText = function (token) {
            var text = token.parts[0];
            if (text.length > 0 && text[0] == '\n') {
                var parent_1 = this._getParentElement();
                if (parent_1 != null && parent_1.children.length == 0 &&
                    this.getTagDefinition(parent_1.name).ignoreFirstLf) {
                    text = text.substring(1);
                }
            }
            if (text.length > 0) {
                this._addToParent(new html.Text(text, token.sourceSpan));
            }
        };
        _TreeBuilder.prototype._closeVoidElement = function () {
            var el = this._getParentElement();
            if (el && this.getTagDefinition(el.name).isVoid) {
                this._elementStack.pop();
            }
        };
        _TreeBuilder.prototype._consumeStartTag = function (startTagToken) {
            var prefix = startTagToken.parts[0];
            var name = startTagToken.parts[1];
            var attrs = [];
            while (this._peek.type === lex.TokenType.ATTR_NAME) {
                attrs.push(this._consumeAttr(this._advance()));
            }
            var fullName = this._getElementFullName(prefix, name, this._getParentElement());
            var selfClosing = false;
            // Note: There could have been a tokenizer error
            // so that we don't get a token for the end tag...
            if (this._peek.type === lex.TokenType.TAG_OPEN_END_VOID) {
                this._advance();
                selfClosing = true;
                var tagDef = this.getTagDefinition(fullName);
                if (!(tagDef.canSelfClose || tags_1.getNsPrefix(fullName) !== null || tagDef.isVoid)) {
                    this._errors.push(TreeError.create(fullName, startTagToken.sourceSpan, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
                }
            }
            else if (this._peek.type === lex.TokenType.TAG_OPEN_END) {
                this._advance();
                selfClosing = false;
            }
            var end = this._peek.sourceSpan.start;
            var span = new parse_util_1.ParseSourceSpan(startTagToken.sourceSpan.start, end);
            var el = new html.Element(fullName, attrs, [], span, span, undefined);
            this._pushElement(el);
            if (selfClosing) {
                this._popElement(fullName);
                el.endSourceSpan = span;
            }
        };
        _TreeBuilder.prototype._pushElement = function (el) {
            var parentEl = this._getParentElement();
            if (parentEl && this.getTagDefinition(parentEl.name).isClosedByChild(el.name)) {
                this._elementStack.pop();
            }
            this._addToParent(el);
            this._elementStack.push(el);
        };
        _TreeBuilder.prototype._consumeEndTag = function (endTagToken) {
            var fullName = this._getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
            if (this._getParentElement()) {
                this._getParentElement().endSourceSpan = endTagToken.sourceSpan;
            }
            if (this.getTagDefinition(fullName).isVoid) {
                this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
            }
            else if (!this._popElement(fullName)) {
                var errMsg = "Unexpected closing tag \"" + fullName + "\". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags";
                this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, errMsg));
            }
        };
        _TreeBuilder.prototype._popElement = function (fullName) {
            for (var stackIndex = this._elementStack.length - 1; stackIndex >= 0; stackIndex--) {
                var el = this._elementStack[stackIndex];
                if (el.name == fullName) {
                    this._elementStack.splice(stackIndex, this._elementStack.length - stackIndex);
                    return true;
                }
                if (!this.getTagDefinition(el.name).closedByParent) {
                    return false;
                }
            }
            return false;
        };
        _TreeBuilder.prototype._consumeAttr = function (attrName) {
            var fullName = tags_1.mergeNsAndName(attrName.parts[0], attrName.parts[1]);
            var end = attrName.sourceSpan.end;
            var value = '';
            var valueSpan = undefined;
            if (this._peek.type === lex.TokenType.ATTR_QUOTE) {
                this._advance();
            }
            if (this._peek.type === lex.TokenType.ATTR_VALUE) {
                var valueToken = this._advance();
                value = valueToken.parts[0];
                end = valueToken.sourceSpan.end;
                valueSpan = valueToken.sourceSpan;
            }
            if (this._peek.type === lex.TokenType.ATTR_QUOTE) {
                var quoteToken = this._advance();
                end = quoteToken.sourceSpan.end;
            }
            return new html.Attribute(fullName, value, new parse_util_1.ParseSourceSpan(attrName.sourceSpan.start, end), valueSpan);
        };
        _TreeBuilder.prototype._getParentElement = function () {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
        };
        /**
         * Returns the parent in the DOM and the container.
         *
         * `<ng-container>` elements are skipped as they are not rendered as DOM element.
         */
        _TreeBuilder.prototype._getParentElementSkippingContainers = function () {
            var container = null;
            for (var i = this._elementStack.length - 1; i >= 0; i--) {
                if (!tags_1.isNgContainer(this._elementStack[i].name)) {
                    return { parent: this._elementStack[i], container: container };
                }
                container = this._elementStack[i];
            }
            return { parent: null, container: container };
        };
        _TreeBuilder.prototype._addToParent = function (node) {
            var parent = this._getParentElement();
            if (parent != null) {
                parent.children.push(node);
            }
            else {
                this._rootNodes.push(node);
            }
        };
        /**
         * Insert a node between the parent and the container.
         * When no container is given, the node is appended as a child of the parent.
         * Also updates the element stack accordingly.
         *
         * @internal
         */
        _TreeBuilder.prototype._insertBeforeContainer = function (parent, container, node) {
            if (!container) {
                this._addToParent(node);
                this._elementStack.push(node);
            }
            else {
                if (parent) {
                    // replace the container with the new node in the children
                    var index = parent.children.indexOf(container);
                    parent.children[index] = node;
                }
                else {
                    this._rootNodes.push(node);
                }
                node.children.push(container);
                this._elementStack.splice(this._elementStack.indexOf(container), 0, node);
            }
        };
        _TreeBuilder.prototype._getElementFullName = function (prefix, localName, parentElement) {
            if (prefix === '') {
                prefix = this.getTagDefinition(localName).implicitNamespacePrefix || '';
                if (prefix === '' && parentElement != null) {
                    prefix = tags_1.getNsPrefix(parentElement.name);
                }
            }
            return tags_1.mergeNsAndName(prefix, localName);
        };
        return _TreeBuilder;
    }());
    function lastOnStack(stack, element) {
        return stack.length > 0 && stack[stack.length - 1] === element;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL21sX3BhcnNlci9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsK0RBQTBEO0lBRTFELDBEQUE4QjtJQUM5QiwyREFBK0I7SUFDL0IsNkRBQWlGO0lBRWpGO1FBQStCLHFDQUFVO1FBS3ZDLG1CQUFtQixXQUF3QixFQUFFLElBQXFCLEVBQUUsR0FBVztZQUEvRSxZQUNFLGtCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsU0FDakI7WUFGa0IsaUJBQVcsR0FBWCxXQUFXLENBQWE7O1FBRTNDLENBQUM7UUFOTSxnQkFBTSxHQUFiLFVBQWMsV0FBd0IsRUFBRSxJQUFxQixFQUFFLEdBQVc7WUFDeEUsT0FBTyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFLSCxnQkFBQztJQUFELENBQUMsQUFSRCxDQUErQix1QkFBVSxHQVF4QztJQVJZLDhCQUFTO0lBVXRCO1FBQ0UseUJBQW1CLFNBQXNCLEVBQVMsTUFBb0I7WUFBbkQsY0FBUyxHQUFULFNBQVMsQ0FBYTtZQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFBRyxDQUFDO1FBQzVFLHNCQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFGWSwwQ0FBZTtJQUk1QjtRQUNFLGdCQUFtQixnQkFBb0Q7WUFBcEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQztRQUFHLENBQUM7UUFFM0Usc0JBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBNkI7WUFDOUQsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVsRixJ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LGFBQWEsSUFBSSxJQUFJLEVBQUU7b0JBQzFDLE1BQU0sR0FBRyxrQkFBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7YUFDRjtZQUVELE9BQU8scUJBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNILG1CQUFDO0lBQUQsQ0FBQyxBQTFXRCxJQTBXQztJQUVELFNBQVMsV0FBVyxDQUFDLEtBQVksRUFBRSxPQUFZO1FBQzdDLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDO0lBQ2pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2FzdCc7XG5pbXBvcnQgKiBhcyBsZXggZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQge2dldE5zUHJlZml4LCBpc05nQ29udGFpbmVyLCBtZXJnZU5zQW5kTmFtZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIFRyZWVFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lOiBzdHJpbmd8bnVsbCwgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZyk6IFRyZWVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUcmVlRXJyb3IoZWxlbWVudE5hbWUsIHNwYW4sIG1zZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudE5hbWU6IHN0cmluZ3xudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3BhbiwgbXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VUcmVlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3ROb2RlczogaHRtbC5Ob2RlW10sIHB1YmxpYyBlcnJvcnM6IFBhcnNlRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7fVxuXG4gIHBhcnNlKHNvdXJjZTogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IGxleC5Ub2tlbml6ZU9wdGlvbnMpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIGNvbnN0IHRva2Vuc0FuZEVycm9ycyA9IGxleC50b2tlbml6ZShzb3VyY2UsIHVybCwgdGhpcy5nZXRUYWdEZWZpbml0aW9uLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRyZWVBbmRFcnJvcnMgPSBuZXcgX1RyZWVCdWlsZGVyKHRva2Vuc0FuZEVycm9ycy50b2tlbnMsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbikuYnVpbGQoKTtcblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KFxuICAgICAgICB0cmVlQW5kRXJyb3JzLnJvb3ROb2RlcyxcbiAgICAgICAgKDxQYXJzZUVycm9yW10+dG9rZW5zQW5kRXJyb3JzLmVycm9ycykuY29uY2F0KHRyZWVBbmRFcnJvcnMuZXJyb3JzKSk7XG4gIH1cbn1cblxuY2xhc3MgX1RyZWVCdWlsZGVyIHtcbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IC0xO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfcGVlayE6IGxleC5Ub2tlbjtcblxuICBwcml2YXRlIF9yb290Tm9kZXM6IGh0bWwuTm9kZVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogVHJlZUVycm9yW10gPSBbXTtcblxuICBwcml2YXRlIF9lbGVtZW50U3RhY2s6IGh0bWwuRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHRva2VuczogbGV4LlRva2VuW10sIHByaXZhdGUgZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgfVxuXG4gIGJ1aWxkKCk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSAhPT0gbGV4LlRva2VuVHlwZS5FT0YpIHtcbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEFHX09QRU5fU1RBUlQpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZVN0YXJ0VGFnKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfQ0xPU0UpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUVuZFRhZyh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQ0RBVEFfU1RBUlQpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VWb2lkRWxlbWVudCgpO1xuICAgICAgICB0aGlzLl9jb25zdW1lQ2RhdGEodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkNPTU1FTlRfU1RBUlQpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VWb2lkRWxlbWVudCgpO1xuICAgICAgICB0aGlzLl9jb25zdW1lQ29tbWVudCh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEVYVCB8fCB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuUkFXX1RFWFQgfHxcbiAgICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb24odGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIHRva2Vucy4uLlxuICAgICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRoaXMuX3Jvb3ROb2RlcywgdGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKTogbGV4LlRva2VuIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5fcGVlaztcbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBOb3RlOiB0aGVyZSBpcyBhbHdheXMgYW4gRU9GIHRva2VuIGF0IHRoZSBlbmRcbiAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuX3BlZWsgPSB0aGlzLnRva2Vuc1t0aGlzLl9pbmRleF07XG4gICAgcmV0dXJuIHByZXY7XG4gIH1cblxuICBwcml2YXRlIF9hZHZhbmNlSWYodHlwZTogbGV4LlRva2VuVHlwZSk6IGxleC5Ub2tlbnxudWxsIHtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSB0eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDZGF0YShzdGFydFRva2VuOiBsZXguVG9rZW4pIHtcbiAgICB0aGlzLl9jb25zdW1lVGV4dCh0aGlzLl9hZHZhbmNlKCkpO1xuICAgIHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLkNEQVRBX0VORCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ29tbWVudCh0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLlJBV19URVhUKTtcbiAgICB0aGlzLl9hZHZhbmNlSWYobGV4LlRva2VuVHlwZS5DT01NRU5UX0VORCk7XG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0ICE9IG51bGwgPyB0ZXh0LnBhcnRzWzBdLnRyaW0oKSA6IG51bGw7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuQ29tbWVudCh2YWx1ZSwgdG9rZW4uc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbih0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGNvbnN0IGNhc2VzOiBodG1sLkV4cGFuc2lvbkNhc2VbXSA9IFtdO1xuXG4gICAgLy8gcmVhZCA9XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSkge1xuICAgICAgY29uc3QgZXhwQ2FzZSA9IHRoaXMuX3BhcnNlRXhwYW5zaW9uQ2FzZSgpO1xuICAgICAgaWYgKCFleHBDYXNlKSByZXR1cm47ICAvLyBlcnJvclxuICAgICAgY2FzZXMucHVzaChleHBDYXNlKTtcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBmaW5hbCB9XG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSAhPT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgIFRyZWVFcnJvci5jcmVhdGUobnVsbCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3Bhbih0b2tlbi5zb3VyY2VTcGFuLnN0YXJ0LCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5FeHBhbnNpb24oXG4gICAgICAgIHN3aXRjaFZhbHVlLnBhcnRzWzBdLCB0eXBlLnBhcnRzWzBdLCBjYXNlcywgc291cmNlU3Bhbiwgc3dpdGNoVmFsdWUuc291cmNlU3BhbikpO1xuXG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VFeHBhbnNpb25DYXNlKCk6IGh0bWwuRXhwYW5zaW9uQ2FzZXxudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIC8vIHJlYWQge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChcbiAgICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ3snLmApKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlYWQgdW50aWwgfVxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fYWR2YW5jZSgpO1xuXG4gICAgY29uc3QgZXhwID0gdGhpcy5fY29sbGVjdEV4cGFuc2lvbkV4cFRva2VucyhzdGFydCk7XG4gICAgaWYgKCFleHApIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZW5kID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGV4cC5wdXNoKG5ldyBsZXguVG9rZW4obGV4LlRva2VuVHlwZS5FT0YsIFtdLCBlbmQuc291cmNlU3BhbikpO1xuXG4gICAgLy8gcGFyc2UgZXZlcnl0aGluZyBpbiBiZXR3ZWVuIHsgYW5kIH1cbiAgICBjb25zdCBwYXJzZWRFeHAgPSBuZXcgX1RyZWVCdWlsZGVyKGV4cCwgdGhpcy5nZXRUYWdEZWZpbml0aW9uKS5idWlsZCgpO1xuICAgIGlmIChwYXJzZWRFeHAuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2Vycm9ycyA9IHRoaXMuX2Vycm9ycy5jb25jYXQoPFRyZWVFcnJvcltdPnBhcnNlZEV4cC5lcnJvcnMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odmFsdWUuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICBjb25zdCBleHBTb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydC5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQuc291cmNlU3Bhbi5lbmQpO1xuICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKFxuICAgICAgICB2YWx1ZS5wYXJ0c1swXSwgcGFyc2VkRXhwLnJvb3ROb2Rlcywgc291cmNlU3BhbiwgdmFsdWUuc291cmNlU3BhbiwgZXhwU291cmNlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9jb2xsZWN0RXhwYW5zaW9uRXhwVG9rZW5zKHN0YXJ0OiBsZXguVG9rZW4pOiBsZXguVG9rZW5bXXxudWxsIHtcbiAgICBjb25zdCBleHA6IGxleC5Ub2tlbltdID0gW107XG4gICAgY29uc3QgZXhwYW5zaW9uRm9ybVN0YWNrID0gW2xleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUXTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUIHx8XG4gICAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkge1xuICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucHVzaCh0aGlzLl9wZWVrLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChleHBhbnNpb25Gb3JtU3RhY2subGVuZ3RoID09IDApIHJldHVybiBleHA7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChcbiAgICAgICAgICAgICAgVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5EKSB7XG4gICAgICAgIGlmIChsYXN0T25TdGFjayhleHBhbnNpb25Gb3JtU3RhY2ssIGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FT0YpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goXG4gICAgICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBleHAucHVzaCh0aGlzLl9hZHZhbmNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUZXh0KHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBsZXQgdGV4dCA9IHRva2VuLnBhcnRzWzBdO1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDAgJiYgdGV4dFswXSA9PSAnXFxuJykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKHBhcmVudCAhPSBudWxsICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihwYXJlbnQubmFtZSkuaWdub3JlRmlyc3RMZikge1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuVGV4dCh0ZXh0LCB0b2tlbi5zb3VyY2VTcGFuKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VWb2lkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcbiAgICBpZiAoZWwgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmlzVm9pZCkge1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVTdGFydFRhZyhzdGFydFRhZ1Rva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCBwcmVmaXggPSBzdGFydFRhZ1Rva2VuLnBhcnRzWzBdO1xuICAgIGNvbnN0IG5hbWUgPSBzdGFydFRhZ1Rva2VuLnBhcnRzWzFdO1xuICAgIGNvbnN0IGF0dHJzOiBodG1sLkF0dHJpYnV0ZVtdID0gW107XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5BVFRSX05BTUUpIHtcbiAgICAgIGF0dHJzLnB1c2godGhpcy5fY29uc3VtZUF0dHIodGhpcy5fYWR2YW5jZSgpKSk7XG4gICAgfVxuICAgIGNvbnN0IGZ1bGxOYW1lID0gdGhpcy5fZ2V0RWxlbWVudEZ1bGxOYW1lKHByZWZpeCwgbmFtZSwgdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpKTtcbiAgICBsZXQgc2VsZkNsb3NpbmcgPSBmYWxzZTtcbiAgICAvLyBOb3RlOiBUaGVyZSBjb3VsZCBoYXZlIGJlZW4gYSB0b2tlbml6ZXIgZXJyb3JcbiAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGdldCBhIHRva2VuIGZvciB0aGUgZW5kIHRhZy4uLlxuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEFHX09QRU5fRU5EX1ZPSUQpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHNlbGZDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhZ0RlZiA9IHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihmdWxsTmFtZSk7XG4gICAgICBpZiAoISh0YWdEZWYuY2FuU2VsZkNsb3NlIHx8IGdldE5zUHJlZml4KGZ1bGxOYW1lKSAhPT0gbnVsbCB8fCB0YWdEZWYuaXNWb2lkKSkge1xuICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKFxuICAgICAgICAgICAgZnVsbE5hbWUsIHN0YXJ0VGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICAgIGBPbmx5IHZvaWQgYW5kIGZvcmVpZ24gZWxlbWVudHMgY2FuIGJlIHNlbGYgY2xvc2VkIFwiJHtzdGFydFRhZ1Rva2VuLnBhcnRzWzFdfVwiYCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX0VORCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZW5kID0gdGhpcy5fcGVlay5zb3VyY2VTcGFuLnN0YXJ0O1xuICAgIGNvbnN0IHNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0VGFnVG9rZW4uc291cmNlU3Bhbi5zdGFydCwgZW5kKTtcbiAgICBjb25zdCBlbCA9IG5ldyBodG1sLkVsZW1lbnQoZnVsbE5hbWUsIGF0dHJzLCBbXSwgc3Bhbiwgc3BhbiwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9wdXNoRWxlbWVudChlbCk7XG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICB0aGlzLl9wb3BFbGVtZW50KGZ1bGxOYW1lKTtcbiAgICAgIGVsLmVuZFNvdXJjZVNwYW4gPSBzcGFuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3B1c2hFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcblxuICAgIGlmIChwYXJlbnRFbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24ocGFyZW50RWwubmFtZSkuaXNDbG9zZWRCeUNoaWxkKGVsLm5hbWUpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkVG9QYXJlbnQoZWwpO1xuICAgIHRoaXMuX2VsZW1lbnRTdGFjay5wdXNoKGVsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFbmRUYWcoZW5kVGFnVG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IGZ1bGxOYW1lID0gdGhpcy5fZ2V0RWxlbWVudEZ1bGxOYW1lKFxuICAgICAgICBlbmRUYWdUb2tlbi5wYXJ0c1swXSwgZW5kVGFnVG9rZW4ucGFydHNbMV0sIHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSk7XG5cbiAgICBpZiAodGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpKSB7XG4gICAgICB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkhLmVuZFNvdXJjZVNwYW4gPSBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldFRhZ0RlZmluaXRpb24oZnVsbE5hbWUpLmlzVm9pZCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShcbiAgICAgICAgICBmdWxsTmFtZSwgZW5kVGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICBgVm9pZCBlbGVtZW50cyBkbyBub3QgaGF2ZSBlbmQgdGFncyBcIiR7ZW5kVGFnVG9rZW4ucGFydHNbMV19XCJgKSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGBVbmV4cGVjdGVkIGNsb3NpbmcgdGFnIFwiJHtcbiAgICAgICAgICBmdWxsTmFtZX1cIi4gSXQgbWF5IGhhcHBlbiB3aGVuIHRoZSB0YWcgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnkgYW5vdGhlciB0YWcuIEZvciBtb3JlIGluZm8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNjbG9zaW5nLWVsZW1lbnRzLXRoYXQtaGF2ZS1pbXBsaWVkLWVuZC10YWdzYDtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUoZnVsbE5hbWUsIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sIGVyck1zZykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BvcEVsZW1lbnQoZnVsbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IHN0YWNrSW5kZXggPSB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgc3RhY2tJbmRleCA+PSAwOyBzdGFja0luZGV4LS0pIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgaWYgKGVsLm5hbWUgPT0gZnVsbE5hbWUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnNwbGljZShzdGFja0luZGV4LCB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gc3RhY2tJbmRleCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKS5jbG9zZWRCeVBhcmVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVBdHRyKGF0dHJOYW1lOiBsZXguVG9rZW4pOiBodG1sLkF0dHJpYnV0ZSB7XG4gICAgY29uc3QgZnVsbE5hbWUgPSBtZXJnZU5zQW5kTmFtZShhdHRyTmFtZS5wYXJ0c1swXSwgYXR0ck5hbWUucGFydHNbMV0pO1xuICAgIGxldCBlbmQgPSBhdHRyTmFtZS5zb3VyY2VTcGFuLmVuZDtcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBsZXQgdmFsdWVTcGFuOiBQYXJzZVNvdXJjZVNwYW4gPSB1bmRlZmluZWQhO1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQVRUUl9RVU9URSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfVkFMVUUpIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlVG9rZW4ucGFydHNbMF07XG4gICAgICBlbmQgPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgdmFsdWVTcGFuID0gdmFsdWVUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfUVVPVEUpIHtcbiAgICAgIGNvbnN0IHF1b3RlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICBlbmQgPSBxdW90ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGh0bWwuQXR0cmlidXRlKFxuICAgICAgICBmdWxsTmFtZSwgdmFsdWUsIG5ldyBQYXJzZVNvdXJjZVNwYW4oYXR0ck5hbWUuc291cmNlU3Bhbi5zdGFydCwgZW5kKSwgdmFsdWVTcGFuKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudEVsZW1lbnQoKTogaHRtbC5FbGVtZW50fG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoID4gMCA/IHRoaXMuX2VsZW1lbnRTdGFja1t0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBpbiB0aGUgRE9NIGFuZCB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBgPG5nLWNvbnRhaW5lcj5gIGVsZW1lbnRzIGFyZSBza2lwcGVkIGFzIHRoZXkgYXJlIG5vdCByZW5kZXJlZCBhcyBET00gZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX2dldFBhcmVudEVsZW1lbnRTa2lwcGluZ0NvbnRhaW5lcnMoKTpcbiAgICAgIHtwYXJlbnQ6IGh0bWwuRWxlbWVudHxudWxsLCBjb250YWluZXI6IGh0bWwuRWxlbWVudHxudWxsfSB7XG4gICAgbGV0IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50fG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpc05nQ29udGFpbmVyKHRoaXMuX2VsZW1lbnRTdGFja1tpXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge3BhcmVudDogdGhpcy5fZWxlbWVudFN0YWNrW2ldLCBjb250YWluZXJ9O1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFN0YWNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7cGFyZW50OiBudWxsLCBjb250YWluZXJ9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9QYXJlbnQobm9kZTogaHRtbC5Ob2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBub2RlIGJldHdlZW4gdGhlIHBhcmVudCBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICogV2hlbiBubyBjb250YWluZXIgaXMgZ2l2ZW4sIHRoZSBub2RlIGlzIGFwcGVuZGVkIGFzIGEgY2hpbGQgb2YgdGhlIHBhcmVudC5cbiAgICogQWxzbyB1cGRhdGVzIHRoZSBlbGVtZW50IHN0YWNrIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX2luc2VydEJlZm9yZUNvbnRhaW5lcihcbiAgICAgIHBhcmVudDogaHRtbC5FbGVtZW50LCBjb250YWluZXI6IGh0bWwuRWxlbWVudHxudWxsLCBub2RlOiBodG1sLkVsZW1lbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fYWRkVG9QYXJlbnQobm9kZSk7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucHVzaChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBjb250YWluZXIgd2l0aCB0aGUgbmV3IG5vZGUgaW4gdGhlIGNoaWxkcmVuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY29udGFpbmVyKTtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChjb250YWluZXIpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnNwbGljZSh0aGlzLl9lbGVtZW50U3RhY2suaW5kZXhPZihjb250YWluZXIpLCAwLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4OiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nLCBwYXJlbnRFbGVtZW50OiBodG1sLkVsZW1lbnR8bnVsbCk6XG4gICAgICBzdHJpbmcge1xuICAgIGlmIChwcmVmaXggPT09ICcnKSB7XG4gICAgICBwcmVmaXggPSB0aGlzLmdldFRhZ0RlZmluaXRpb24obG9jYWxOYW1lKS5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCB8fCAnJztcbiAgICAgIGlmIChwcmVmaXggPT09ICcnICYmIHBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICBwcmVmaXggPSBnZXROc1ByZWZpeChwYXJlbnRFbGVtZW50Lm5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXJnZU5zQW5kTmFtZShwcmVmaXgsIGxvY2FsTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGFzdE9uU3RhY2soc3RhY2s6IGFueVtdLCBlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN0YWNrLmxlbmd0aCA+IDAgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09IGVsZW1lbnQ7XG59XG4iXX0=