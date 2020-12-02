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
        define("@angular/compiler/src/i18n/extractor_merger", ["require", "exports", "tslib", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/parser", "@angular/compiler/src/i18n/i18n_ast", "@angular/compiler/src/i18n/i18n_parser", "@angular/compiler/src/i18n/parse_util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var html = require("@angular/compiler/src/ml_parser/ast");
    var parser_1 = require("@angular/compiler/src/ml_parser/parser");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var i18n_parser_1 = require("@angular/compiler/src/i18n/i18n_parser");
    var parse_util_1 = require("@angular/compiler/src/i18n/parse_util");
    var _I18N_ATTR = 'i18n';
    var _I18N_ATTR_PREFIX = 'i18n-';
    var _I18N_COMMENT_PREFIX_REGEXP = /^i18n:?/;
    var MEANING_SEPARATOR = '|';
    var ID_SEPARATOR = '@@';
    var i18nCommentsWarned = false;
    /**
     * Extract translatable messages from an html AST
     */
    function extractMessages(nodes, interpolationConfig, implicitTags, implicitAttrs) {
        var visitor = new _Visitor(implicitTags, implicitAttrs);
        return visitor.extract(nodes, interpolationConfig);
    }
    exports.extractMessages = extractMessages;
    function mergeTranslations(nodes, translations, interpolationConfig, implicitTags, implicitAttrs) {
        var visitor = new _Visitor(implicitTags, implicitAttrs);
        return visitor.merge(nodes, translations, interpolationConfig);
    }
    exports.mergeTranslations = mergeTranslations;
    var ExtractionResult = /** @class */ (function () {
        function ExtractionResult(messages, errors) {
            this.messages = messages;
            this.errors = errors;
        }
        return ExtractionResult;
    }());
    exports.ExtractionResult = ExtractionResult;
    var _VisitorMode;
    (function (_VisitorMode) {
        _VisitorMode[_VisitorMode["Extract"] = 0] = "Extract";
        _VisitorMode[_VisitorMode["Merge"] = 1] = "Merge";
    })(_VisitorMode || (_VisitorMode = {}));
    /**
     * This Visitor is used:
     * 1. to extract all the translatable strings from an html AST (see `extract()`),
     * 2. to replace the translatable strings with the actual translations (see `merge()`)
     *
     * @internal
     */
    var _Visitor = /** @class */ (function () {
        function _Visitor(_implicitTags, _implicitAttrs) {
            this._implicitTags = _implicitTags;
            this._implicitAttrs = _implicitAttrs;
        }
        /**
         * Extracts the messages from the tree
         */
        _Visitor.prototype.extract = function (nodes, interpolationConfig) {
            var _this = this;
            this._init(_VisitorMode.Extract, interpolationConfig);
            nodes.forEach(function (node) { return node.visit(_this, null); });
            if (this._inI18nBlock) {
                this._reportError(nodes[nodes.length - 1], 'Unclosed block');
            }
            return new ExtractionResult(this._messages, this._errors);
        };
        /**
         * Returns a tree where all translatable nodes are translated
         */
        _Visitor.prototype.merge = function (nodes, translations, interpolationConfig) {
            this._init(_VisitorMode.Merge, interpolationConfig);
            this._translations = translations;
            // Construct a single fake root element
            var wrapper = new html.Element('wrapper', [], nodes, undefined, undefined, undefined);
            var translatedNode = wrapper.visit(this, null);
            if (this._inI18nBlock) {
                this._reportError(nodes[nodes.length - 1], 'Unclosed block');
            }
            return new parser_1.ParseTreeResult(translatedNode.children, this._errors);
        };
        _Visitor.prototype.visitExpansionCase = function (icuCase, context) {
            // Parse cases for translatable html attributes
            var expression = html.visitAll(this, icuCase.expression, context);
            if (this._mode === _VisitorMode.Merge) {
                return new html.ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
            }
        };
        _Visitor.prototype.visitExpansion = function (icu, context) {
            this._mayBeAddBlockChildren(icu);
            var wasInIcu = this._inIcu;
            if (!this._inIcu) {
                // nested ICU messages should not be extracted but top-level translated as a whole
                if (this._isInTranslatableSection) {
                    this._addMessage([icu]);
                }
                this._inIcu = true;
            }
            var cases = html.visitAll(this, icu.cases, context);
            if (this._mode === _VisitorMode.Merge) {
                icu = new html.Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
            }
            this._inIcu = wasInIcu;
            return icu;
        };
        _Visitor.prototype.visitComment = function (comment, context) {
            var isOpening = _isOpeningComment(comment);
            if (isOpening && this._isInTranslatableSection) {
                this._reportError(comment, 'Could not start a block inside a translatable section');
                return;
            }
            var isClosing = _isClosingComment(comment);
            if (isClosing && !this._inI18nBlock) {
                this._reportError(comment, 'Trying to close an unopened block');
                return;
            }
            if (!this._inI18nNode && !this._inIcu) {
                if (!this._inI18nBlock) {
                    if (isOpening) {
                        // deprecated from v5 you should use <ng-container i18n> instead of i18n comments
                        if (!i18nCommentsWarned && console && console.warn) {
                            i18nCommentsWarned = true;
                            var details = comment.sourceSpan.details ? ", " + comment.sourceSpan.details : '';
                            // TODO(ocombe): use a log service once there is a public one available
                            console.warn("I18n comments are deprecated, use an <ng-container> element instead (" + comment.sourceSpan.start + details + ")");
                        }
                        this._inI18nBlock = true;
                        this._blockStartDepth = this._depth;
                        this._blockChildren = [];
                        this._blockMeaningAndDesc =
                            comment.value.replace(_I18N_COMMENT_PREFIX_REGEXP, '').trim();
                        this._openTranslatableSection(comment);
                    }
                }
                else {
                    if (isClosing) {
                        if (this._depth == this._blockStartDepth) {
                            this._closeTranslatableSection(comment, this._blockChildren);
                            this._inI18nBlock = false;
                            var message = this._addMessage(this._blockChildren, this._blockMeaningAndDesc);
                            // merge attributes in sections
                            var nodes = this._translateMessage(comment, message);
                            return html.visitAll(this, nodes);
                        }
                        else {
                            this._reportError(comment, 'I18N blocks should not cross element boundaries');
                            return;
                        }
                    }
                }
            }
        };
        _Visitor.prototype.visitText = function (text, context) {
            if (this._isInTranslatableSection) {
                this._mayBeAddBlockChildren(text);
            }
            return text;
        };
        _Visitor.prototype.visitElement = function (el, context) {
            var _this = this;
            this._mayBeAddBlockChildren(el);
            this._depth++;
            var wasInI18nNode = this._inI18nNode;
            var wasInImplicitNode = this._inImplicitNode;
            var childNodes = [];
            var translatedChildNodes = undefined;
            // Extract:
            // - top level nodes with the (implicit) "i18n" attribute if not already in a section
            // - ICU messages
            var i18nAttr = _getI18nAttr(el);
            var i18nMeta = i18nAttr ? i18nAttr.value : '';
            var isImplicit = this._implicitTags.some(function (tag) { return el.name === tag; }) && !this._inIcu &&
                !this._isInTranslatableSection;
            var isTopLevelImplicit = !wasInImplicitNode && isImplicit;
            this._inImplicitNode = wasInImplicitNode || isImplicit;
            if (!this._isInTranslatableSection && !this._inIcu) {
                if (i18nAttr || isTopLevelImplicit) {
                    this._inI18nNode = true;
                    var message = this._addMessage(el.children, i18nMeta);
                    translatedChildNodes = this._translateMessage(el, message);
                }
                if (this._mode == _VisitorMode.Extract) {
                    var isTranslatable = i18nAttr || isTopLevelImplicit;
                    if (isTranslatable)
                        this._openTranslatableSection(el);
                    html.visitAll(this, el.children);
                    if (isTranslatable)
                        this._closeTranslatableSection(el, el.children);
                }
            }
            else {
                if (i18nAttr || isTopLevelImplicit) {
                    this._reportError(el, 'Could not mark an element as translatable inside a translatable section');
                }
                if (this._mode == _VisitorMode.Extract) {
                    // Descend into child nodes for extraction
                    html.visitAll(this, el.children);
                }
            }
            if (this._mode === _VisitorMode.Merge) {
                var visitNodes = translatedChildNodes || el.children;
                visitNodes.forEach(function (child) {
                    var visited = child.visit(_this, context);
                    if (visited && !_this._isInTranslatableSection) {
                        // Do not add the children from translatable sections (= i18n blocks here)
                        // They will be added later in this loop when the block closes (i.e. on `<!-- /i18n -->`)
                        childNodes = childNodes.concat(visited);
                    }
                });
            }
            this._visitAttributesOf(el);
            this._depth--;
            this._inI18nNode = wasInI18nNode;
            this._inImplicitNode = wasInImplicitNode;
            if (this._mode === _VisitorMode.Merge) {
                var translatedAttrs = this._translateAttributes(el);
                return new html.Element(el.name, translatedAttrs, childNodes, el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
            }
            return null;
        };
        _Visitor.prototype.visitAttribute = function (attribute, context) {
            throw new Error('unreachable code');
        };
        _Visitor.prototype._init = function (mode, interpolationConfig) {
            this._mode = mode;
            this._inI18nBlock = false;
            this._inI18nNode = false;
            this._depth = 0;
            this._inIcu = false;
            this._msgCountAtSectionStart = undefined;
            this._errors = [];
            this._messages = [];
            this._inImplicitNode = false;
            this._createI18nMessage = i18n_parser_1.createI18nMessageFactory(interpolationConfig);
        };
        // looks for translatable attributes
        _Visitor.prototype._visitAttributesOf = function (el) {
            var _this = this;
            var explicitAttrNameToValue = {};
            var implicitAttrNames = this._implicitAttrs[el.name] || [];
            el.attrs.filter(function (attr) { return attr.name.startsWith(_I18N_ATTR_PREFIX); })
                .forEach(function (attr) { return explicitAttrNameToValue[attr.name.slice(_I18N_ATTR_PREFIX.length)] =
                attr.value; });
            el.attrs.forEach(function (attr) {
                if (attr.name in explicitAttrNameToValue) {
                    _this._addMessage([attr], explicitAttrNameToValue[attr.name]);
                }
                else if (implicitAttrNames.some(function (name) { return attr.name === name; })) {
                    _this._addMessage([attr]);
                }
            });
        };
        // add a translatable message
        _Visitor.prototype._addMessage = function (ast, msgMeta) {
            if (ast.length == 0 ||
                ast.length == 1 && ast[0] instanceof html.Attribute && !ast[0].value) {
                // Do not create empty messages
                return null;
            }
            var _a = _parseMessageMeta(msgMeta), meaning = _a.meaning, description = _a.description, id = _a.id;
            var message = this._createI18nMessage(ast, meaning, description, id);
            this._messages.push(message);
            return message;
        };
        // Translates the given message given the `TranslationBundle`
        // This is used for translating elements / blocks - see `_translateAttributes` for attributes
        // no-op when called in extraction mode (returns [])
        _Visitor.prototype._translateMessage = function (el, message) {
            if (message && this._mode === _VisitorMode.Merge) {
                var nodes = this._translations.get(message);
                if (nodes) {
                    return nodes;
                }
                this._reportError(el, "Translation unavailable for message id=\"" + this._translations.digest(message) + "\"");
            }
            return [];
        };
        // translate the attributes of an element and remove i18n specific attributes
        _Visitor.prototype._translateAttributes = function (el) {
            var _this = this;
            var attributes = el.attrs;
            var i18nParsedMessageMeta = {};
            attributes.forEach(function (attr) {
                if (attr.name.startsWith(_I18N_ATTR_PREFIX)) {
                    i18nParsedMessageMeta[attr.name.slice(_I18N_ATTR_PREFIX.length)] =
                        _parseMessageMeta(attr.value);
                }
            });
            var translatedAttributes = [];
            attributes.forEach(function (attr) {
                if (attr.name === _I18N_ATTR || attr.name.startsWith(_I18N_ATTR_PREFIX)) {
                    // strip i18n specific attributes
                    return;
                }
                if (attr.value && attr.value != '' && i18nParsedMessageMeta.hasOwnProperty(attr.name)) {
                    var _a = i18nParsedMessageMeta[attr.name], meaning = _a.meaning, description = _a.description, id = _a.id;
                    var message = _this._createI18nMessage([attr], meaning, description, id);
                    var nodes = _this._translations.get(message);
                    if (nodes) {
                        if (nodes.length == 0) {
                            translatedAttributes.push(new html.Attribute(attr.name, '', attr.sourceSpan));
                        }
                        else if (nodes[0] instanceof html.Text) {
                            var value = nodes[0].value;
                            translatedAttributes.push(new html.Attribute(attr.name, value, attr.sourceSpan));
                        }
                        else {
                            _this._reportError(el, "Unexpected translation for attribute \"" + attr.name + "\" (id=\"" + (id || _this._translations.digest(message)) + "\")");
                        }
                    }
                    else {
                        _this._reportError(el, "Translation unavailable for attribute \"" + attr.name + "\" (id=\"" + (id || _this._translations.digest(message)) + "\")");
                    }
                }
                else {
                    translatedAttributes.push(attr);
                }
            });
            return translatedAttributes;
        };
        /**
         * Add the node as a child of the block when:
         * - we are in a block,
         * - we are not inside a ICU message (those are handled separately),
         * - the node is a "direct child" of the block
         */
        _Visitor.prototype._mayBeAddBlockChildren = function (node) {
            if (this._inI18nBlock && !this._inIcu && this._depth == this._blockStartDepth) {
                this._blockChildren.push(node);
            }
        };
        /**
         * Marks the start of a section, see `_closeTranslatableSection`
         */
        _Visitor.prototype._openTranslatableSection = function (node) {
            if (this._isInTranslatableSection) {
                this._reportError(node, 'Unexpected section start');
            }
            else {
                this._msgCountAtSectionStart = this._messages.length;
            }
        };
        Object.defineProperty(_Visitor.prototype, "_isInTranslatableSection", {
            /**
             * A translatable section could be:
             * - the content of translatable element,
             * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
             */
            get: function () {
                return this._msgCountAtSectionStart !== void 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Terminates a section.
         *
         * If a section has only one significant children (comments not significant) then we should not
         * keep the message from this children:
         *
         * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
         * - one for the <p> content with meaning and description,
         * - another one for the ICU message.
         *
         * In this case the last message is discarded as it contains less information (the AST is
         * otherwise identical).
         *
         * Note that we should still keep messages extracted from attributes inside the section (ie in the
         * ICU message here)
         */
        _Visitor.prototype._closeTranslatableSection = function (node, directChildren) {
            if (!this._isInTranslatableSection) {
                this._reportError(node, 'Unexpected section end');
                return;
            }
            var startIndex = this._msgCountAtSectionStart;
            var significantChildren = directChildren.reduce(function (count, node) { return count + (node instanceof html.Comment ? 0 : 1); }, 0);
            if (significantChildren == 1) {
                for (var i = this._messages.length - 1; i >= startIndex; i--) {
                    var ast = this._messages[i].nodes;
                    if (!(ast.length == 1 && ast[0] instanceof i18n.Text)) {
                        this._messages.splice(i, 1);
                        break;
                    }
                }
            }
            this._msgCountAtSectionStart = undefined;
        };
        _Visitor.prototype._reportError = function (node, msg) {
            this._errors.push(new parse_util_1.I18nError(node.sourceSpan, msg));
        };
        return _Visitor;
    }());
    function _isOpeningComment(n) {
        return !!(n instanceof html.Comment && n.value && n.value.startsWith('i18n'));
    }
    function _isClosingComment(n) {
        return !!(n instanceof html.Comment && n.value && n.value === '/i18n');
    }
    function _getI18nAttr(p) {
        return p.attrs.find(function (attr) { return attr.name === _I18N_ATTR; }) || null;
    }
    function _parseMessageMeta(i18n) {
        if (!i18n)
            return { meaning: '', description: '', id: '' };
        var idIndex = i18n.indexOf(ID_SEPARATOR);
        var descIndex = i18n.indexOf(MEANING_SEPARATOR);
        var _a = tslib_1.__read((idIndex > -1) ? [i18n.slice(0, idIndex), i18n.slice(idIndex + 2)] : [i18n, ''], 2), meaningAndDesc = _a[0], id = _a[1];
        var _b = tslib_1.__read((descIndex > -1) ?
            [meaningAndDesc.slice(0, descIndex), meaningAndDesc.slice(descIndex + 1)] :
            ['', meaningAndDesc], 2), meaning = _b[0], description = _b[1];
        return { meaning: meaning, description: description, id: id.trim() };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdG9yX21lcmdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL2V4dHJhY3Rvcl9tZXJnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsMERBQXlDO0lBRXpDLGlFQUFvRDtJQUVwRCwwREFBbUM7SUFDbkMsc0VBQTJFO0lBQzNFLG9FQUF1QztJQUd2QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUM7SUFDbEMsSUFBTSwyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDOUMsSUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUM7SUFDOUIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBRS9COztPQUVHO0lBQ0gsU0FBZ0IsZUFBZSxDQUMzQixLQUFrQixFQUFFLG1CQUF3QyxFQUFFLFlBQXNCLEVBQ3BGLGFBQXNDO1FBQ3hDLElBQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUxELDBDQUtDO0lBRUQsU0FBZ0IsaUJBQWlCLENBQzdCLEtBQWtCLEVBQUUsWUFBK0IsRUFBRSxtQkFBd0MsRUFDN0YsWUFBc0IsRUFBRSxhQUFzQztRQUNoRSxJQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBTEQsOENBS0M7SUFFRDtRQUNF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aUIsQ0FBQyxDQUFDO1FBQzVDLElBQUEsdUdBQzZFLEVBRDVFLHNCQUFjLEVBQUUsVUFDNEQsQ0FBQztRQUM5RSxJQUFBOztvQ0FFa0IsRUFGakIsZUFBTyxFQUFFLG1CQUVRLENBQUM7UUFFekIsT0FBTyxFQUFDLE9BQU8sU0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4uL21sX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtQYXJzZVRyZWVSZXN1bHR9IGZyb20gJy4uL21sX3BhcnNlci9wYXJzZXInO1xuXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4vaTE4bl9hc3QnO1xuaW1wb3J0IHtjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnksIEkxOG5NZXNzYWdlRmFjdG9yeX0gZnJvbSAnLi9pMThuX3BhcnNlcic7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7VHJhbnNsYXRpb25CdW5kbGV9IGZyb20gJy4vdHJhbnNsYXRpb25fYnVuZGxlJztcblxuY29uc3QgX0kxOE5fQVRUUiA9ICdpMThuJztcbmNvbnN0IF9JMThOX0FUVFJfUFJFRklYID0gJ2kxOG4tJztcbmNvbnN0IF9JMThOX0NPTU1FTlRfUFJFRklYX1JFR0VYUCA9IC9eaTE4bjo/LztcbmNvbnN0IE1FQU5JTkdfU0VQQVJBVE9SID0gJ3wnO1xuY29uc3QgSURfU0VQQVJBVE9SID0gJ0BAJztcbmxldCBpMThuQ29tbWVudHNXYXJuZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBFeHRyYWN0IHRyYW5zbGF0YWJsZSBtZXNzYWdlcyBmcm9tIGFuIGh0bWwgQVNUXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0TWVzc2FnZXMoXG4gICAgbm9kZXM6IGh0bWwuTm9kZVtdLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLCBpbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLFxuICAgIGltcGxpY2l0QXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nW119KTogRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgX1Zpc2l0b3IoaW1wbGljaXRUYWdzLCBpbXBsaWNpdEF0dHJzKTtcbiAgcmV0dXJuIHZpc2l0b3IuZXh0cmFjdChub2RlcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRyYW5zbGF0aW9ucyhcbiAgICBub2RlczogaHRtbC5Ob2RlW10sIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgaW1wbGljaXRUYWdzOiBzdHJpbmdbXSwgaW1wbGljaXRBdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmdbXX0pOiBQYXJzZVRyZWVSZXN1bHQge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IF9WaXNpdG9yKGltcGxpY2l0VGFncywgaW1wbGljaXRBdHRycyk7XG4gIHJldHVybiB2aXNpdG9yLm1lcmdlKG5vZGVzLCB0cmFuc2xhdGlvbnMsIGludGVycG9sYXRpb25Db25maWcpO1xufVxuXG5leHBvcnQgY2xhc3MgRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIHB1YmxpYyBlcnJvcnM6IEkxOG5FcnJvcltdKSB7fVxufVxuXG5lbnVtIF9WaXNpdG9yTW9kZSB7XG4gIEV4dHJhY3QsXG4gIE1lcmdlXG59XG5cbi8qKlxuICogVGhpcyBWaXNpdG9yIGlzIHVzZWQ6XG4gKiAxLiB0byBleHRyYWN0IGFsbCB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3MgZnJvbSBhbiBodG1sIEFTVCAoc2VlIGBleHRyYWN0KClgKSxcbiAqIDIuIHRvIHJlcGxhY2UgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIHdpdGggdGhlIGFjdHVhbCB0cmFuc2xhdGlvbnMgKHNlZSBgbWVyZ2UoKWApXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIF9WaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2RlcHRoITogbnVtYmVyO1xuXG4gIC8vIDxlbCBpMThuPi4uLjwvZWw+XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9pbkkxOG5Ob2RlITogYm9vbGVhbjtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2luSW1wbGljaXROb2RlITogYm9vbGVhbjtcblxuICAvLyA8IS0taTE4bi0tPi4uLjwhLS0vaTE4bi0tPlxuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfaW5JMThuQmxvY2shOiBib29sZWFuO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfYmxvY2tNZWFuaW5nQW5kRGVzYyE6IHN0cmluZztcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Jsb2NrQ2hpbGRyZW4hOiBodG1sLk5vZGVbXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Jsb2NrU3RhcnREZXB0aCE6IG51bWJlcjtcblxuICAvLyB7PGljdSBtZXNzYWdlPn1cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2luSWN1ITogYm9vbGVhbjtcblxuICAvLyBzZXQgdG8gdm9pZCAwIHdoZW4gbm90IGluIGEgc2VjdGlvblxuICBwcml2YXRlIF9tc2dDb3VudEF0U2VjdGlvblN0YXJ0OiBudW1iZXJ8dW5kZWZpbmVkO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfZXJyb3JzITogSTE4bkVycm9yW107XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9tb2RlITogX1Zpc2l0b3JNb2RlO1xuXG4gIC8vIF9WaXNpdG9yTW9kZS5FeHRyYWN0IG9ubHlcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX21lc3NhZ2VzITogaTE4bi5NZXNzYWdlW107XG5cbiAgLy8gX1Zpc2l0b3JNb2RlLk1lcmdlIG9ubHlcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9ucyE6IFRyYW5zbGF0aW9uQnVuZGxlO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfY3JlYXRlSTE4bk1lc3NhZ2UhOiBJMThuTWVzc2FnZUZhY3Rvcnk7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLCBwcml2YXRlIF9pbXBsaWNpdEF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ1tdfSkge31cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIG1lc3NhZ2VzIGZyb20gdGhlIHRyZWVcbiAgICovXG4gIGV4dHJhY3Qobm9kZXM6IGh0bWwuTm9kZVtdLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgdGhpcy5faW5pdChfVmlzaXRvck1vZGUuRXh0cmFjdCwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCBudWxsKSk7XG5cbiAgICBpZiAodGhpcy5faW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLCAnVW5jbG9zZWQgYmxvY2snKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV4dHJhY3Rpb25SZXN1bHQodGhpcy5fbWVzc2FnZXMsIHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHRyZWUgd2hlcmUgYWxsIHRyYW5zbGF0YWJsZSBub2RlcyBhcmUgdHJhbnNsYXRlZFxuICAgKi9cbiAgbWVyZ2UoXG4gICAgICBub2RlczogaHRtbC5Ob2RlW10sIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB0aGlzLl9pbml0KF9WaXNpdG9yTW9kZS5NZXJnZSwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5fdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuXG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoJ3dyYXBwZXInLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWROb2RlID0gd3JhcHBlci52aXNpdCh0aGlzLCBudWxsKTtcblxuICAgIGlmICh0aGlzLl9pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0sICdVbmNsb3NlZCBibG9jaycpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRyYW5zbGF0ZWROb2RlLmNoaWxkcmVuLCB0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAvLyBQYXJzZSBjYXNlcyBmb3IgdHJhbnNsYXRhYmxlIGh0bWwgYXR0cmlidXRlc1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5fbW9kZSA9PT0gX1Zpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZShcbiAgICAgICAgICBpY3VDYXNlLnZhbHVlLCBleHByZXNzaW9uLCBpY3VDYXNlLnNvdXJjZVNwYW4sIGljdUNhc2UudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICAgIGljdUNhc2UuZXhwU291cmNlU3Bhbik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaHRtbC5FeHBhbnNpb24ge1xuICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbihpY3UpO1xuXG4gICAgY29uc3Qgd2FzSW5JY3UgPSB0aGlzLl9pbkljdTtcblxuICAgIGlmICghdGhpcy5faW5JY3UpIHtcbiAgICAgIC8vIG5lc3RlZCBJQ1UgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgYnV0IHRvcC1sZXZlbCB0cmFuc2xhdGVkIGFzIGEgd2hvbGVcbiAgICAgIGlmICh0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICB0aGlzLl9hZGRNZXNzYWdlKFtpY3VdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luSWN1ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXNlcyA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGljdSA9IG5ldyBodG1sLkV4cGFuc2lvbihcbiAgICAgICAgICBpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlcywgaWN1LnNvdXJjZVNwYW4sIGljdS5zd2l0Y2hWYWx1ZVNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIHRoaXMuX2luSWN1ID0gd2FzSW5JY3U7XG5cbiAgICByZXR1cm4gaWN1O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBpc09wZW5pbmcgPSBfaXNPcGVuaW5nQ29tbWVudChjb21tZW50KTtcblxuICAgIGlmIChpc09wZW5pbmcgJiYgdGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGNvbW1lbnQsICdDb3VsZCBub3Qgc3RhcnQgYSBibG9jayBpbnNpZGUgYSB0cmFuc2xhdGFibGUgc2VjdGlvbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQ2xvc2luZyA9IF9pc0Nsb3NpbmdDb21tZW50KGNvbW1lbnQpO1xuXG4gICAgaWYgKGlzQ2xvc2luZyAmJiAhdGhpcy5faW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGNvbW1lbnQsICdUcnlpbmcgdG8gY2xvc2UgYW4gdW5vcGVuZWQgYmxvY2snKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2luSTE4bk5vZGUgJiYgIXRoaXMuX2luSWN1KSB7XG4gICAgICBpZiAoIXRoaXMuX2luSTE4bkJsb2NrKSB7XG4gICAgICAgIGlmIChpc09wZW5pbmcpIHtcbiAgICAgICAgICAvLyBkZXByZWNhdGVkIGZyb20gdjUgeW91IHNob3VsZCB1c2UgPG5nLWNvbnRhaW5lciBpMThuPiBpbnN0ZWFkIG9mIGkxOG4gY29tbWVudHNcbiAgICAgICAgICBpZiAoIWkxOG5Db21tZW50c1dhcm5lZCAmJiA8YW55PmNvbnNvbGUgJiYgPGFueT5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGkxOG5Db21tZW50c1dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gY29tbWVudC5zb3VyY2VTcGFuLmRldGFpbHMgPyBgLCAke2NvbW1lbnQuc291cmNlU3Bhbi5kZXRhaWxzfWAgOiAnJztcbiAgICAgICAgICAgIC8vIFRPRE8ob2NvbWJlKTogdXNlIGEgbG9nIHNlcnZpY2Ugb25jZSB0aGVyZSBpcyBhIHB1YmxpYyBvbmUgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEkxOG4gY29tbWVudHMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhbiA8bmctY29udGFpbmVyPiBlbGVtZW50IGluc3RlYWQgKCR7XG4gICAgICAgICAgICAgICAgY29tbWVudC5zb3VyY2VTcGFuLnN0YXJ0fSR7ZGV0YWlsc30pYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2luSTE4bkJsb2NrID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9ibG9ja1N0YXJ0RGVwdGggPSB0aGlzLl9kZXB0aDtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NoaWxkcmVuID0gW107XG4gICAgICAgICAgdGhpcy5fYmxvY2tNZWFuaW5nQW5kRGVzYyA9XG4gICAgICAgICAgICAgIGNvbW1lbnQudmFsdWUhLnJlcGxhY2UoX0kxOE5fQ09NTUVOVF9QUkVGSVhfUkVHRVhQLCAnJykudHJpbSgpO1xuICAgICAgICAgIHRoaXMuX29wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDbG9zaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2RlcHRoID09IHRoaXMuX2Jsb2NrU3RhcnREZXB0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGNvbW1lbnQsIHRoaXMuX2Jsb2NrQ2hpbGRyZW4pO1xuICAgICAgICAgICAgdGhpcy5faW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLl9hZGRNZXNzYWdlKHRoaXMuX2Jsb2NrQ2hpbGRyZW4sIHRoaXMuX2Jsb2NrTWVhbmluZ0FuZERlc2MpITtcbiAgICAgICAgICAgIC8vIG1lcmdlIGF0dHJpYnV0ZXMgaW4gc2VjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fdHJhbnNsYXRlTWVzc2FnZShjb21tZW50LCBtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnZpc2l0QWxsKHRoaXMsIG5vZGVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoY29tbWVudCwgJ0kxOE4gYmxvY2tzIHNob3VsZCBub3QgY3Jvc3MgZWxlbWVudCBib3VuZGFyaWVzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaHRtbC5UZXh0IHtcbiAgICBpZiAodGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbih0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaHRtbC5FbGVtZW50fG51bGwge1xuICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbihlbCk7XG4gICAgdGhpcy5fZGVwdGgrKztcbiAgICBjb25zdCB3YXNJbkkxOG5Ob2RlID0gdGhpcy5faW5JMThuTm9kZTtcbiAgICBjb25zdCB3YXNJbkltcGxpY2l0Tm9kZSA9IHRoaXMuX2luSW1wbGljaXROb2RlO1xuICAgIGxldCBjaGlsZE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICAgIGxldCB0cmFuc2xhdGVkQ2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSB1bmRlZmluZWQhO1xuXG4gICAgLy8gRXh0cmFjdDpcbiAgICAvLyAtIHRvcCBsZXZlbCBub2RlcyB3aXRoIHRoZSAoaW1wbGljaXQpIFwiaTE4blwiIGF0dHJpYnV0ZSBpZiBub3QgYWxyZWFkeSBpbiBhIHNlY3Rpb25cbiAgICAvLyAtIElDVSBtZXNzYWdlc1xuICAgIGNvbnN0IGkxOG5BdHRyID0gX2dldEkxOG5BdHRyKGVsKTtcbiAgICBjb25zdCBpMThuTWV0YSA9IGkxOG5BdHRyID8gaTE4bkF0dHIudmFsdWUgOiAnJztcbiAgICBjb25zdCBpc0ltcGxpY2l0ID0gdGhpcy5faW1wbGljaXRUYWdzLnNvbWUodGFnID0+IGVsLm5hbWUgPT09IHRhZykgJiYgIXRoaXMuX2luSWN1ICYmXG4gICAgICAgICF0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbjtcbiAgICBjb25zdCBpc1RvcExldmVsSW1wbGljaXQgPSAhd2FzSW5JbXBsaWNpdE5vZGUgJiYgaXNJbXBsaWNpdDtcbiAgICB0aGlzLl9pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlIHx8IGlzSW1wbGljaXQ7XG5cbiAgICBpZiAoIXRoaXMuX2lzSW5UcmFuc2xhdGFibGVTZWN0aW9uICYmICF0aGlzLl9pbkljdSkge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLl9pbkkxOG5Ob2RlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2FkZE1lc3NhZ2UoZWwuY2hpbGRyZW4sIGkxOG5NZXRhKSE7XG4gICAgICAgIHRyYW5zbGF0ZWRDaGlsZE5vZGVzID0gdGhpcy5fdHJhbnNsYXRlTWVzc2FnZShlbCwgbWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlID09IF9WaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGlzVHJhbnNsYXRhYmxlID0gaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0O1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHRoaXMuX29wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGVsKTtcbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0YWJsZSkgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGVsLCBlbC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICBlbCwgJ0NvdWxkIG5vdCBtYXJrIGFuIGVsZW1lbnQgYXMgdHJhbnNsYXRhYmxlIGluc2lkZSBhIHRyYW5zbGF0YWJsZSBzZWN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlID09IF9WaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIC8vIERlc2NlbmQgaW50byBjaGlsZCBub2RlcyBmb3IgZXh0cmFjdGlvblxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kZSA9PT0gX1Zpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCB2aXNpdE5vZGVzID0gdHJhbnNsYXRlZENoaWxkTm9kZXMgfHwgZWwuY2hpbGRyZW47XG4gICAgICB2aXNpdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCk7XG4gICAgICAgIGlmICh2aXNpdGVkICYmICF0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICAgIC8vIERvIG5vdCBhZGQgdGhlIGNoaWxkcmVuIGZyb20gdHJhbnNsYXRhYmxlIHNlY3Rpb25zICg9IGkxOG4gYmxvY2tzIGhlcmUpXG4gICAgICAgICAgLy8gVGhleSB3aWxsIGJlIGFkZGVkIGxhdGVyIGluIHRoaXMgbG9vcCB3aGVuIHRoZSBibG9jayBjbG9zZXMgKGkuZS4gb24gYDwhLS0gL2kxOG4gLS0+YClcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQodmlzaXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3Zpc2l0QXR0cmlidXRlc09mKGVsKTtcblxuICAgIHRoaXMuX2RlcHRoLS07XG4gICAgdGhpcy5faW5JMThuTm9kZSA9IHdhc0luSTE4bk5vZGU7XG4gICAgdGhpcy5faW5JbXBsaWNpdE5vZGUgPSB3YXNJbkltcGxpY2l0Tm9kZTtcblxuICAgIGlmICh0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRBdHRycyA9IHRoaXMuX3RyYW5zbGF0ZUF0dHJpYnV0ZXMoZWwpO1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoXG4gICAgICAgICAgZWwubmFtZSwgdHJhbnNsYXRlZEF0dHJzLCBjaGlsZE5vZGVzLCBlbC5zb3VyY2VTcGFuLCBlbC5zdGFydFNvdXJjZVNwYW4sXG4gICAgICAgICAgZWwuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVhY2hhYmxlIGNvZGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXQobW9kZTogX1Zpc2l0b3JNb2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5faW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLl9pbkkxOG5Ob2RlID0gZmFsc2U7XG4gICAgdGhpcy5fZGVwdGggPSAwO1xuICAgIHRoaXMuX2luSWN1ID0gZmFsc2U7XG4gICAgdGhpcy5fbXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lcnJvcnMgPSBbXTtcbiAgICB0aGlzLl9tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuX2luSW1wbGljaXROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5fY3JlYXRlSTE4bk1lc3NhZ2UgPSBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cblxuICAvLyBsb29rcyBmb3IgdHJhbnNsYXRhYmxlIGF0dHJpYnV0ZXNcbiAgcHJpdmF0ZSBfdmlzaXRBdHRyaWJ1dGVzT2YoZWw6IGh0bWwuRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV4cGxpY2l0QXR0ck5hbWVUb1ZhbHVlOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBjb25zdCBpbXBsaWNpdEF0dHJOYW1lczogc3RyaW5nW10gPSB0aGlzLl9pbXBsaWNpdEF0dHJzW2VsLm5hbWVdIHx8IFtdO1xuXG4gICAgZWwuYXR0cnMuZmlsdGVyKGF0dHIgPT4gYXR0ci5uYW1lLnN0YXJ0c1dpdGgoX0kxOE5fQVRUUl9QUkVGSVgpKVxuICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIGF0dHIgPT4gZXhwbGljaXRBdHRyTmFtZVRvVmFsdWVbYXR0ci5uYW1lLnNsaWNlKF9JMThOX0FUVFJfUFJFRklYLmxlbmd0aCldID1cbiAgICAgICAgICAgICAgICBhdHRyLnZhbHVlKTtcblxuICAgIGVsLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lIGluIGV4cGxpY2l0QXR0ck5hbWVUb1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2FkZE1lc3NhZ2UoW2F0dHJdLCBleHBsaWNpdEF0dHJOYW1lVG9WYWx1ZVthdHRyLm5hbWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1wbGljaXRBdHRyTmFtZXMuc29tZShuYW1lID0+IGF0dHIubmFtZSA9PT0gbmFtZSkpIHtcbiAgICAgICAgdGhpcy5fYWRkTWVzc2FnZShbYXR0cl0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWRkIGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2VcbiAgcHJpdmF0ZSBfYWRkTWVzc2FnZShhc3Q6IGh0bWwuTm9kZVtdLCBtc2dNZXRhPzogc3RyaW5nKTogaTE4bi5NZXNzYWdlfG51bGwge1xuICAgIGlmIChhc3QubGVuZ3RoID09IDAgfHxcbiAgICAgICAgYXN0Lmxlbmd0aCA9PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGh0bWwuQXR0cmlidXRlICYmICEoPGh0bWwuQXR0cmlidXRlPmFzdFswXSkudmFsdWUpIHtcbiAgICAgIC8vIERvIG5vdCBjcmVhdGUgZW1wdHkgbWVzc2FnZXNcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWR9ID0gX3BhcnNlTWVzc2FnZU1ldGEobXNnTWV0YSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2NyZWF0ZUkxOG5NZXNzYWdlKGFzdCwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gbWVzc2FnZSBnaXZlbiB0aGUgYFRyYW5zbGF0aW9uQnVuZGxlYFxuICAvLyBUaGlzIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzIC8gYmxvY2tzIC0gc2VlIGBfdHJhbnNsYXRlQXR0cmlidXRlc2AgZm9yIGF0dHJpYnV0ZXNcbiAgLy8gbm8tb3Agd2hlbiBjYWxsZWQgaW4gZXh0cmFjdGlvbiBtb2RlIChyZXR1cm5zIFtdKVxuICBwcml2YXRlIF90cmFuc2xhdGVNZXNzYWdlKGVsOiBodG1sLk5vZGUsIG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IGh0bWwuTm9kZVtdIHtcbiAgICBpZiAobWVzc2FnZSAmJiB0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fdHJhbnNsYXRpb25zLmdldChtZXNzYWdlKTtcblxuICAgICAgaWYgKG5vZGVzKSB7XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgZWwsIGBUcmFuc2xhdGlvbiB1bmF2YWlsYWJsZSBmb3IgbWVzc2FnZSBpZD1cIiR7dGhpcy5fdHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZSB0aGUgYXR0cmlidXRlcyBvZiBhbiBlbGVtZW50IGFuZCByZW1vdmUgaTE4biBzcGVjaWZpYyBhdHRyaWJ1dGVzXG4gIHByaXZhdGUgX3RyYW5zbGF0ZUF0dHJpYnV0ZXMoZWw6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlW10ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBlbC5hdHRycztcbiAgICBjb25zdCBpMThuUGFyc2VkTWVzc2FnZU1ldGE6XG4gICAgICAgIHtbbmFtZTogc3RyaW5nXToge21lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZ319ID0ge307XG5cbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoX0kxOE5fQVRUUl9QUkVGSVgpKSB7XG4gICAgICAgIGkxOG5QYXJzZWRNZXNzYWdlTWV0YVthdHRyLm5hbWUuc2xpY2UoX0kxOE5fQVRUUl9QUkVGSVgubGVuZ3RoKV0gPVxuICAgICAgICAgICAgX3BhcnNlTWVzc2FnZU1ldGEoYXR0ci52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVkQXR0cmlidXRlczogaHRtbC5BdHRyaWJ1dGVbXSA9IFtdO1xuXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lID09PSBfSTE4Tl9BVFRSIHx8IGF0dHIubmFtZS5zdGFydHNXaXRoKF9JMThOX0FUVFJfUFJFRklYKSkge1xuICAgICAgICAvLyBzdHJpcCBpMThuIHNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0ci52YWx1ZSAmJiBhdHRyLnZhbHVlICE9ICcnICYmIGkxOG5QYXJzZWRNZXNzYWdlTWV0YS5oYXNPd25Qcm9wZXJ0eShhdHRyLm5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWR9ID0gaTE4blBhcnNlZE1lc3NhZ2VNZXRhW2F0dHIubmFtZV07XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSA9IHRoaXMuX2NyZWF0ZUkxOG5NZXNzYWdlKFthdHRyXSwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl90cmFuc2xhdGlvbnMuZ2V0KG1lc3NhZ2UpO1xuICAgICAgICBpZiAobm9kZXMpIHtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZWRBdHRyaWJ1dGVzLnB1c2gobmV3IGh0bWwuQXR0cmlidXRlKGF0dHIubmFtZSwgJycsIGF0dHIuc291cmNlU3BhbikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXNbMF0gaW5zdGFuY2VvZiBodG1sLlRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKG5vZGVzWzBdIGFzIGh0bWwuVGV4dCkudmFsdWU7XG4gICAgICAgICAgICB0cmFuc2xhdGVkQXR0cmlidXRlcy5wdXNoKG5ldyBodG1sLkF0dHJpYnV0ZShhdHRyLm5hbWUsIHZhbHVlLCBhdHRyLnNvdXJjZVNwYW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgdHJhbnNsYXRpb24gZm9yIGF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIChpZD1cIiR7XG4gICAgICAgICAgICAgICAgICAgIGlkIHx8IHRoaXMuX3RyYW5zbGF0aW9ucy5kaWdlc3QobWVzc2FnZSl9XCIpYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgYFRyYW5zbGF0aW9uIHVuYXZhaWxhYmxlIGZvciBhdHRyaWJ1dGUgXCIke2F0dHIubmFtZX1cIiAoaWQ9XCIke1xuICAgICAgICAgICAgICAgICAgaWQgfHwgdGhpcy5fdHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cIilgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZEF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2xhdGVkQXR0cmlidXRlcztcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgbm9kZSBhcyBhIGNoaWxkIG9mIHRoZSBibG9jayB3aGVuOlxuICAgKiAtIHdlIGFyZSBpbiBhIGJsb2NrLFxuICAgKiAtIHdlIGFyZSBub3QgaW5zaWRlIGEgSUNVIG1lc3NhZ2UgKHRob3NlIGFyZSBoYW5kbGVkIHNlcGFyYXRlbHkpLFxuICAgKiAtIHRoZSBub2RlIGlzIGEgXCJkaXJlY3QgY2hpbGRcIiBvZiB0aGUgYmxvY2tcbiAgICovXG4gIHByaXZhdGUgX21heUJlQWRkQmxvY2tDaGlsZHJlbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5JMThuQmxvY2sgJiYgIXRoaXMuX2luSWN1ICYmIHRoaXMuX2RlcHRoID09IHRoaXMuX2Jsb2NrU3RhcnREZXB0aCkge1xuICAgICAgdGhpcy5fYmxvY2tDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgc3RhcnQgb2YgYSBzZWN0aW9uLCBzZWUgYF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb25gXG4gICAqL1xuICBwcml2YXRlIF9vcGVuVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsICdVbmV4cGVjdGVkIHNlY3Rpb24gc3RhcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHRoaXMuX21lc3NhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB0cmFuc2xhdGFibGUgc2VjdGlvbiBjb3VsZCBiZTpcbiAgICogLSB0aGUgY29udGVudCBvZiB0cmFuc2xhdGFibGUgZWxlbWVudCxcbiAgICogLSBub2RlcyBiZXR3ZWVuIGA8IS0tIGkxOG4gLS0+YCBhbmQgYDwhLS0gL2kxOG4gLS0+YCBjb21tZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgX2lzSW5UcmFuc2xhdGFibGVTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tc2dDb3VudEF0U2VjdGlvblN0YXJ0ICE9PSB2b2lkIDA7XG4gIH1cblxuICAvKipcbiAgICogVGVybWluYXRlcyBhIHNlY3Rpb24uXG4gICAqXG4gICAqIElmIGEgc2VjdGlvbiBoYXMgb25seSBvbmUgc2lnbmlmaWNhbnQgY2hpbGRyZW4gKGNvbW1lbnRzIG5vdCBzaWduaWZpY2FudCkgdGhlbiB3ZSBzaG91bGQgbm90XG4gICAqIGtlZXAgdGhlIG1lc3NhZ2UgZnJvbSB0aGlzIGNoaWxkcmVuOlxuICAgKlxuICAgKiBgPHAgaTE4bj1cIm1lYW5pbmd8ZGVzY3JpcHRpb25cIj57SUNVIG1lc3NhZ2V9PC9wPmAgd291bGQgcHJvZHVjZSB0d28gbWVzc2FnZXM6XG4gICAqIC0gb25lIGZvciB0aGUgPHA+IGNvbnRlbnQgd2l0aCBtZWFuaW5nIGFuZCBkZXNjcmlwdGlvbixcbiAgICogLSBhbm90aGVyIG9uZSBmb3IgdGhlIElDVSBtZXNzYWdlLlxuICAgKlxuICAgKiBJbiB0aGlzIGNhc2UgdGhlIGxhc3QgbWVzc2FnZSBpcyBkaXNjYXJkZWQgYXMgaXQgY29udGFpbnMgbGVzcyBpbmZvcm1hdGlvbiAodGhlIEFTVCBpc1xuICAgKiBvdGhlcndpc2UgaWRlbnRpY2FsKS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHdlIHNob3VsZCBzdGlsbCBrZWVwIG1lc3NhZ2VzIGV4dHJhY3RlZCBmcm9tIGF0dHJpYnV0ZXMgaW5zaWRlIHRoZSBzZWN0aW9uIChpZSBpbiB0aGVcbiAgICogSUNVIG1lc3NhZ2UgaGVyZSlcbiAgICovXG4gIHByaXZhdGUgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUsIGRpcmVjdENoaWxkcmVuOiBodG1sLk5vZGVbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsICdVbmV4cGVjdGVkIHNlY3Rpb24gZW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuX21zZ0NvdW50QXRTZWN0aW9uU3RhcnQ7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRDaGlsZHJlbjogbnVtYmVyID0gZGlyZWN0Q2hpbGRyZW4ucmVkdWNlKFxuICAgICAgICAoY291bnQ6IG51bWJlciwgbm9kZTogaHRtbC5Ob2RlKTogbnVtYmVyID0+IGNvdW50ICsgKG5vZGUgaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgPyAwIDogMSksXG4gICAgICAgIDApO1xuXG4gICAgaWYgKHNpZ25pZmljYW50Q2hpbGRyZW4gPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX21lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnRJbmRleCE7IGktLSkge1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLl9tZXNzYWdlc1tpXS5ub2RlcztcbiAgICAgICAgaWYgKCEoYXN0Lmxlbmd0aCA9PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGkxOG4uVGV4dCkpIHtcbiAgICAgICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3Iobm9kZTogaHRtbC5Ob2RlLCBtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbXNnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2lzT3BlbmluZ0NvbW1lbnQobjogaHRtbC5Ob2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIShuIGluc3RhbmNlb2YgaHRtbC5Db21tZW50ICYmIG4udmFsdWUgJiYgbi52YWx1ZS5zdGFydHNXaXRoKCdpMThuJykpO1xufVxuXG5mdW5jdGlvbiBfaXNDbG9zaW5nQ29tbWVudChuOiBodG1sLk5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhKG4gaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgJiYgbi52YWx1ZSAmJiBuLnZhbHVlID09PSAnL2kxOG4nKTtcbn1cblxuZnVuY3Rpb24gX2dldEkxOG5BdHRyKHA6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlfG51bGwge1xuICByZXR1cm4gcC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBfSTE4Tl9BVFRSKSB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBfcGFyc2VNZXNzYWdlTWV0YShpMThuPzogc3RyaW5nKToge21lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZ30ge1xuICBpZiAoIWkxOG4pIHJldHVybiB7bWVhbmluZzogJycsIGRlc2NyaXB0aW9uOiAnJywgaWQ6ICcnfTtcblxuICBjb25zdCBpZEluZGV4ID0gaTE4bi5pbmRleE9mKElEX1NFUEFSQVRPUik7XG4gIGNvbnN0IGRlc2NJbmRleCA9IGkxOG4uaW5kZXhPZihNRUFOSU5HX1NFUEFSQVRPUik7XG4gIGNvbnN0IFttZWFuaW5nQW5kRGVzYywgaWRdID1cbiAgICAgIChpZEluZGV4ID4gLTEpID8gW2kxOG4uc2xpY2UoMCwgaWRJbmRleCksIGkxOG4uc2xpY2UoaWRJbmRleCArIDIpXSA6IFtpMThuLCAnJ107XG4gIGNvbnN0IFttZWFuaW5nLCBkZXNjcmlwdGlvbl0gPSAoZGVzY0luZGV4ID4gLTEpID9cbiAgICAgIFttZWFuaW5nQW5kRGVzYy5zbGljZSgwLCBkZXNjSW5kZXgpLCBtZWFuaW5nQW5kRGVzYy5zbGljZShkZXNjSW5kZXggKyAxKV0gOlxuICAgICAgWycnLCBtZWFuaW5nQW5kRGVzY107XG5cbiAgcmV0dXJuIHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQ6IGlkLnRyaW0oKX07XG59XG4iXX0=