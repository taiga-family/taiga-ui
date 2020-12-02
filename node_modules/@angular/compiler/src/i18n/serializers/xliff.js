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
        define("@angular/compiler/src/i18n/serializers/xliff", ["require", "exports", "tslib", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/xml_parser", "@angular/compiler/src/i18n/digest", "@angular/compiler/src/i18n/i18n_ast", "@angular/compiler/src/i18n/parse_util", "@angular/compiler/src/i18n/serializers/serializer", "@angular/compiler/src/i18n/serializers/xml_helper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ml = require("@angular/compiler/src/ml_parser/ast");
    var xml_parser_1 = require("@angular/compiler/src/ml_parser/xml_parser");
    var digest_1 = require("@angular/compiler/src/i18n/digest");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var parse_util_1 = require("@angular/compiler/src/i18n/parse_util");
    var serializer_1 = require("@angular/compiler/src/i18n/serializers/serializer");
    var xml = require("@angular/compiler/src/i18n/serializers/xml_helper");
    var _VERSION = '1.2';
    var _XMLNS = 'urn:oasis:names:tc:xliff:document:1.2';
    // TODO(vicb): make this a param (s/_/-/)
    var _DEFAULT_SOURCE_LANG = 'en';
    var _PLACEHOLDER_TAG = 'x';
    var _MARKER_TAG = 'mrk';
    var _FILE_TAG = 'file';
    var _SOURCE_TAG = 'source';
    var _SEGMENT_SOURCE_TAG = 'seg-source';
    var _ALT_TRANS_TAG = 'alt-trans';
    var _TARGET_TAG = 'target';
    var _UNIT_TAG = 'trans-unit';
    var _CONTEXT_GROUP_TAG = 'context-group';
    var _CONTEXT_TAG = 'context';
    // http://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html
    // http://docs.oasis-open.org/xliff/v1.2/xliff-profile-html/xliff-profile-html-1.2.html
    var Xliff = /** @class */ (function (_super) {
        tslib_1.__extends(Xliff, _super);
        function Xliff() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xliff.prototype.write = function (messages, locale) {
            var visitor = new _WriteVisitor();
            var transUnits = [];
            messages.forEach(function (message) {
                var _a;
                var contextTags = [];
                message.sources.forEach(function (source) {
                    var contextGroupTag = new xml.Tag(_CONTEXT_GROUP_TAG, { purpose: 'location' });
                    contextGroupTag.children.push(new xml.CR(10), new xml.Tag(_CONTEXT_TAG, { 'context-type': 'sourcefile' }, [new xml.Text(source.filePath)]), new xml.CR(10), new xml.Tag(_CONTEXT_TAG, { 'context-type': 'linenumber' }, [new xml.Text("" + source.startLine)]), new xml.CR(8));
                    contextTags.push(new xml.CR(8), contextGroupTag);
                });
                var transUnit = new xml.Tag(_UNIT_TAG, { id: message.id, datatype: 'html' });
                (_a = transUnit.children).push.apply(_a, tslib_1.__spread([new xml.CR(8), new xml.Tag(_SOURCE_TAG, {}, visitor.serialize(message.nodes))], contextTags));
                if (message.description) {
                    transUnit.children.push(new xml.CR(8), new xml.Tag('note', { priority: '1', from: 'description' }, [new xml.Text(message.description)]));
                }
                if (message.meaning) {
                    transUnit.children.push(new xml.CR(8), new xml.Tag('note', { priority: '1', from: 'meaning' }, [new xml.Text(message.meaning)]));
                }
                transUnit.children.push(new xml.CR(6));
                transUnits.push(new xml.CR(6), transUnit);
            });
            var body = new xml.Tag('body', {}, tslib_1.__spread(transUnits, [new xml.CR(4)]));
            var file = new xml.Tag('file', {
                'source-language': locale || _DEFAULT_SOURCE_LANG,
                datatype: 'plaintext',
                original: 'ng2.template',
            }, [new xml.CR(4), body, new xml.CR(2)]);
            var xliff = new xml.Tag('xliff', { version: _VERSION, xmlns: _XMLNS }, [new xml.CR(2), file, new xml.CR()]);
            return xml.serialize([
                new xml.Declaration({ version: '1.0', encoding: 'UTF-8' }), new xml.CR(), xliff, new xml.CR()
            ]);
        };
        Xliff.prototype.load = function (content, url) {
            // xliff to xml nodes
            var xliffParser = new XliffParser();
            var _a = xliffParser.parse(content, url), locale = _a.locale, msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
            // xml nodes to i18n nodes
            var i18nNodesByMsgId = {};
            var converter = new XmlToI18n();
            Object.keys(msgIdToHtml).forEach(function (msgId) {
                var _a = converter.convert(msgIdToHtml[msgId], url), i18nNodes = _a.i18nNodes, e = _a.errors;
                errors.push.apply(errors, tslib_1.__spread(e));
                i18nNodesByMsgId[msgId] = i18nNodes;
            });
            if (errors.length) {
                throw new Error("xliff parse errors:\n" + errors.join('\n'));
            }
            return { locale: locale, i18nNodesByMsgId: i18nNodesByMsgId };
        };
        Xliff.prototype.digest = function (message) {
            return digest_1.digest(message);
        };
        return Xliff;
    }(serializer_1.Serializer));
    exports.Xliff = Xliff;
    var _WriteVisitor = /** @class */ (function () {
        function _WriteVisitor() {
        }
        _WriteVisitor.prototype.visitText = function (text, context) {
            return [new xml.Text(text.value)];
        };
        _WriteVisitor.prototype.visitContainer = function (container, context) {
            var _this = this;
            var nodes = [];
            container.children.forEach(function (node) { return nodes.push.apply(nodes, tslib_1.__spread(node.visit(_this))); });
            return nodes;
        };
        _WriteVisitor.prototype.visitIcu = function (icu, context) {
            var _this = this;
            var nodes = [new xml.Text("{" + icu.expressionPlaceholder + ", " + icu.type + ", ")];
            Object.keys(icu.cases).forEach(function (c) {
                nodes.push.apply(nodes, tslib_1.__spread([new xml.Text(c + " {")], icu.cases[c].visit(_this), [new xml.Text("} ")]));
            });
            nodes.push(new xml.Text("}"));
            return nodes;
        };
        _WriteVisitor.prototype.visitTagPlaceholder = function (ph, context) {
            var ctype = getCtypeForTag(ph.tag);
            if (ph.isVoid) {
                // void tags have no children nor closing tags
                return [new xml.Tag(_PLACEHOLDER_TAG, { id: ph.startName, ctype: ctype, 'equiv-text': "<" + ph.tag + "/>" })];
            }
            var startTagPh = new xml.Tag(_PLACEHOLDER_TAG, { id: ph.startName, ctype: ctype, 'equiv-text': "<" + ph.tag + ">" });
            var closeTagPh = new xml.Tag(_PLACEHOLDER_TAG, { id: ph.closeName, ctype: ctype, 'equiv-text': "</" + ph.tag + ">" });
            return tslib_1.__spread([startTagPh], this.serialize(ph.children), [closeTagPh]);
        };
        _WriteVisitor.prototype.visitPlaceholder = function (ph, context) {
            return [new xml.Tag(_PLACEHOLDER_TAG, { id: ph.name, 'equiv-text': "{{" + ph.value + "}}" })];
        };
        _WriteVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
            var equivText = "{" + ph.value.expression + ", " + ph.value.type + ", " + Object.keys(ph.value.cases).map(function (value) { return value + ' {...}'; }).join(' ') + "}";
            return [new xml.Tag(_PLACEHOLDER_TAG, { id: ph.name, 'equiv-text': equivText })];
        };
        _WriteVisitor.prototype.serialize = function (nodes) {
            var _this = this;
            return [].concat.apply([], tslib_1.__spread(nodes.map(function (node) { return node.visit(_this); })));
        };
        return _WriteVisitor;
    }());
    // TODO(vicb): add error management (structure)
    // Extract messages as xml nodes from the xliff file
    var XliffParser = /** @class */ (function () {
        function XliffParser() {
            this._locale = null;
        }
        XliffParser.prototype.parse = function (xliff, url) {
            this._unitMlString = null;
            this._msgIdToHtml = {};
            var xml = new xml_parser_1.XmlParser().parse(xliff, url);
            this._errors = xml.errors;
            ml.visitAll(this, xml.rootNodes, null);
            return {
                msgIdToHtml: this._msgIdToHtml,
                errors: this._errors,
                locale: this._locale,
            };
        };
        XliffParser.prototype.visitElement = function (element, context) {
            switch (element.name) {
                case _UNIT_TAG:
                    this._unitMlString = null;
                    var idAttr = element.attrs.find(function (attr) { return attr.name === 'id'; });
                    if (!idAttr) {
                        this._addError(element, "<" + _UNIT_TAG + "> misses the \"id\" attribute");
                    }
                    else {
                        var id = idAttr.value;
                        if (this._msgIdToHtml.hasOwnProperty(id)) {
                            this._addError(element, "Duplicated translations for msg " + id);
                        }
                        else {
                            ml.visitAll(this, element.children, null);
                            if (typeof this._unitMlString === 'string') {
                                this._msgIdToHtml[id] = this._unitMlString;
                            }
                            else {
                                this._addError(element, "Message " + id + " misses a translation");
                            }
                        }
                    }
                    break;
                // ignore those tags
                case _SOURCE_TAG:
                case _SEGMENT_SOURCE_TAG:
                case _ALT_TRANS_TAG:
                    break;
                case _TARGET_TAG:
                    var innerTextStart = element.startSourceSpan.end.offset;
                    var innerTextEnd = element.endSourceSpan.start.offset;
                    var content = element.startSourceSpan.start.file.content;
                    var innerText = content.slice(innerTextStart, innerTextEnd);
                    this._unitMlString = innerText;
                    break;
                case _FILE_TAG:
                    var localeAttr = element.attrs.find(function (attr) { return attr.name === 'target-language'; });
                    if (localeAttr) {
                        this._locale = localeAttr.value;
                    }
                    ml.visitAll(this, element.children, null);
                    break;
                default:
                    // TODO(vicb): assert file structure, xliff version
                    // For now only recurse on unhandled nodes
                    ml.visitAll(this, element.children, null);
            }
        };
        XliffParser.prototype.visitAttribute = function (attribute, context) { };
        XliffParser.prototype.visitText = function (text, context) { };
        XliffParser.prototype.visitComment = function (comment, context) { };
        XliffParser.prototype.visitExpansion = function (expansion, context) { };
        XliffParser.prototype.visitExpansionCase = function (expansionCase, context) { };
        XliffParser.prototype._addError = function (node, message) {
            this._errors.push(new parse_util_1.I18nError(node.sourceSpan, message));
        };
        return XliffParser;
    }());
    // Convert ml nodes (xliff syntax) to i18n nodes
    var XmlToI18n = /** @class */ (function () {
        function XmlToI18n() {
        }
        XmlToI18n.prototype.convert = function (message, url) {
            var xmlIcu = new xml_parser_1.XmlParser().parse(message, url, { tokenizeExpansionForms: true });
            this._errors = xmlIcu.errors;
            var i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length == 0 ?
                [] : [].concat.apply([], tslib_1.__spread(ml.visitAll(this, xmlIcu.rootNodes)));
            return {
                i18nNodes: i18nNodes,
                errors: this._errors,
            };
        };
        XmlToI18n.prototype.visitText = function (text, context) {
            return new i18n.Text(text.value, text.sourceSpan);
        };
        XmlToI18n.prototype.visitElement = function (el, context) {
            if (el.name === _PLACEHOLDER_TAG) {
                var nameAttr = el.attrs.find(function (attr) { return attr.name === 'id'; });
                if (nameAttr) {
                    return new i18n.Placeholder('', nameAttr.value, el.sourceSpan);
                }
                this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"id\" attribute");
                return null;
            }
            if (el.name === _MARKER_TAG) {
                return [].concat.apply([], tslib_1.__spread(ml.visitAll(this, el.children)));
            }
            this._addError(el, "Unexpected tag");
            return null;
        };
        XmlToI18n.prototype.visitExpansion = function (icu, context) {
            var caseMap = {};
            ml.visitAll(this, icu.cases).forEach(function (c) {
                caseMap[c.value] = new i18n.Container(c.nodes, icu.sourceSpan);
            });
            return new i18n.Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
        };
        XmlToI18n.prototype.visitExpansionCase = function (icuCase, context) {
            return {
                value: icuCase.value,
                nodes: ml.visitAll(this, icuCase.expression),
            };
        };
        XmlToI18n.prototype.visitComment = function (comment, context) { };
        XmlToI18n.prototype.visitAttribute = function (attribute, context) { };
        XmlToI18n.prototype._addError = function (node, message) {
            this._errors.push(new parse_util_1.I18nError(node.sourceSpan, message));
        };
        return XmlToI18n;
    }());
    function getCtypeForTag(tag) {
        switch (tag.toLowerCase()) {
            case 'br':
                return 'lb';
            case 'img':
                return 'image';
            default:
                return "x-" + tag;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxpZmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9zZXJpYWxpemVycy94bGlmZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCx3REFBMEM7SUFDMUMseUVBQXFEO0lBQ3JELDREQUFpQztJQUNqQywwREFBb0M7SUFDcEMsb0VBQXdDO0lBRXhDLGdGQUF3QztJQUN4Qyx1RUFBb0M7SUFFcEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLElBQU0sTUFBTSxHQUFHLHVDQUF1QyxDQUFDO0lBQ3ZELHlDQUF5QztJQUN6QyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNsQyxJQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM3QixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFFMUIsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUM3QixJQUFNLG1CQUFtQixHQUFHLFlBQVksQ0FBQztJQUN6QyxJQUFNLGNBQWMsR0FBRyxXQUFXLENBQUM7SUFDbkMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQzdCLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQztJQUMvQixJQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztJQUMzQyxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7SUFFL0IsMkRBQTJEO0lBQzNELHVGQUF1RjtJQUN2RjtRQUEyQixpQ0FBVTtRQUFyQzs7UUFxRkEsQ0FBQztRQXBGQyxxQkFBSyxHQUFMLFVBQU0sUUFBd0IsRUFBRSxNQUFtQjtZQUNqRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3BDLElBQU0sVUFBVSxHQUFlLEVBQUUsQ0FBQztZQUVsQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVB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QUMsQ0FBQztZQUVILE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRCxzQ0FBa0IsR0FBbEIsVUFBbUIsT0FBeUIsRUFBRSxPQUFZO1lBQ3hELE9BQU87Z0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQzthQUM3QyxDQUFDO1FBQ0osQ0FBQztRQUVELGdDQUFZLEdBQVosVUFBYSxPQUFtQixFQUFFLE9BQVksSUFBRyxDQUFDO1FBRWxELGtDQUFjLEdBQWQsVUFBZSxTQUF1QixFQUFFLE9BQVksSUFBRyxDQUFDO1FBRWhELDZCQUFTLEdBQWpCLFVBQWtCLElBQWEsRUFBRSxPQUFlO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FBQyxBQWpFRCxJQWlFQztJQUVELFNBQVMsY0FBYyxDQUFDLEdBQVc7UUFDakMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDekIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sT0FBTyxDQUFDO1lBQ2pCO2dCQUNFLE9BQU8sT0FBSyxHQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tICcuLi8uLi9tbF9wYXJzZXIvYXN0JztcbmltcG9ydCB7WG1sUGFyc2VyfSBmcm9tICcuLi8uLi9tbF9wYXJzZXIveG1sX3BhcnNlcic7XG5pbXBvcnQge2RpZ2VzdH0gZnJvbSAnLi4vZGlnZXN0JztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vaTE4bl9hc3QnO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gJy4vc2VyaWFsaXplcic7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSAnLi94bWxfaGVscGVyJztcblxuY29uc3QgX1ZFUlNJT04gPSAnMS4yJztcbmNvbnN0IF9YTUxOUyA9ICd1cm46b2FzaXM6bmFtZXM6dGM6eGxpZmY6ZG9jdW1lbnQ6MS4yJztcbi8vIFRPRE8odmljYik6IG1ha2UgdGhpcyBhIHBhcmFtIChzL18vLS8pXG5jb25zdCBfREVGQVVMVF9TT1VSQ0VfTEFORyA9ICdlbic7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gJ3gnO1xuY29uc3QgX01BUktFUl9UQUcgPSAnbXJrJztcblxuY29uc3QgX0ZJTEVfVEFHID0gJ2ZpbGUnO1xuY29uc3QgX1NPVVJDRV9UQUcgPSAnc291cmNlJztcbmNvbnN0IF9TRUdNRU5UX1NPVVJDRV9UQUcgPSAnc2VnLXNvdXJjZSc7XG5jb25zdCBfQUxUX1RSQU5TX1RBRyA9ICdhbHQtdHJhbnMnO1xuY29uc3QgX1RBUkdFVF9UQUcgPSAndGFyZ2V0JztcbmNvbnN0IF9VTklUX1RBRyA9ICd0cmFucy11bml0JztcbmNvbnN0IF9DT05URVhUX0dST1VQX1RBRyA9ICdjb250ZXh0LWdyb3VwJztcbmNvbnN0IF9DT05URVhUX1RBRyA9ICdjb250ZXh0JztcblxuLy8gaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi9vcy94bGlmZi1jb3JlLmh0bWxcbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3YxLjIveGxpZmYtcHJvZmlsZS1odG1sL3hsaWZmLXByb2ZpbGUtaHRtbC0xLjIuaHRtbFxuZXhwb3J0IGNsYXNzIFhsaWZmIGV4dGVuZHMgU2VyaWFsaXplciB7XG4gIHdyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmd8bnVsbCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBfV3JpdGVWaXNpdG9yKCk7XG4gICAgY29uc3QgdHJhbnNVbml0czogeG1sLk5vZGVbXSA9IFtdO1xuXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgIGxldCBjb250ZXh0VGFnczogeG1sLk5vZGVbXSA9IFtdO1xuICAgICAgbWVzc2FnZS5zb3VyY2VzLmZvckVhY2goKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4ge1xuICAgICAgICBsZXQgY29udGV4dEdyb3VwVGFnID0gbmV3IHhtbC5UYWcoX0NPTlRFWFRfR1JPVVBfVEFHLCB7cHVycG9zZTogJ2xvY2F0aW9uJ30pO1xuICAgICAgICBjb250ZXh0R3JvdXBUYWcuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIG5ldyB4bWwuQ1IoMTApLFxuICAgICAgICAgICAgbmV3IHhtbC5UYWcoXG4gICAgICAgICAgICAgICAgX0NPTlRFWFRfVEFHLCB7J2NvbnRleHQtdHlwZSc6ICdzb3VyY2VmaWxlJ30sIFtuZXcgeG1sLlRleHQoc291cmNlLmZpbGVQYXRoKV0pLFxuICAgICAgICAgICAgbmV3IHhtbC5DUigxMCksXG4gICAgICAgICAgICBuZXcgeG1sLlRhZyhfQ09OVEVYVF9UQUcsIHsnY29udGV4dC10eXBlJzogJ2xpbmVudW1iZXInfSwgW25ldyB4bWwuVGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c291cmNlLnN0YXJ0TGluZX1gKV0pLFxuICAgICAgICAgICAgbmV3IHhtbC5DUig4KSk7XG4gICAgICAgIGNvbnRleHRUYWdzLnB1c2gobmV3IHhtbC5DUig4KSwgY29udGV4dEdyb3VwVGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0cmFuc1VuaXQgPSBuZXcgeG1sLlRhZyhfVU5JVF9UQUcsIHtpZDogbWVzc2FnZS5pZCwgZGF0YXR5cGU6ICdodG1sJ30pO1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSwgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksXG4gICAgICAgICAgLi4uY29udGV4dFRhZ3MpO1xuXG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgICBuZXcgeG1sLlRhZyhcbiAgICAgICAgICAgICAgICAnbm90ZScsIHtwcmlvcml0eTogJzEnLCBmcm9tOiAnZGVzY3JpcHRpb24nfSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLmRlc2NyaXB0aW9uKV0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgICBuZXcgeG1sLlRhZygnbm90ZScsIHtwcmlvcml0eTogJzEnLCBmcm9tOiAnbWVhbmluZyd9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UubWVhbmluZyldKSk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zVW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgICB0cmFuc1VuaXRzLnB1c2gobmV3IHhtbC5DUig2KSwgdHJhbnNVbml0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBuZXcgeG1sLlRhZygnYm9keScsIHt9LCBbLi4udHJhbnNVbml0cywgbmV3IHhtbC5DUig0KV0pO1xuICAgIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhcbiAgICAgICAgJ2ZpbGUnLCB7XG4gICAgICAgICAgJ3NvdXJjZS1sYW5ndWFnZSc6IGxvY2FsZSB8fCBfREVGQVVMVF9TT1VSQ0VfTEFORyxcbiAgICAgICAgICBkYXRhdHlwZTogJ3BsYWludGV4dCcsXG4gICAgICAgICAgb3JpZ2luYWw6ICduZzIudGVtcGxhdGUnLFxuICAgICAgICB9LFxuICAgICAgICBbbmV3IHhtbC5DUig0KSwgYm9keSwgbmV3IHhtbC5DUigyKV0pO1xuICAgIGNvbnN0IHhsaWZmID0gbmV3IHhtbC5UYWcoXG4gICAgICAgICd4bGlmZicsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOU30sIFtuZXcgeG1sLkNSKDIpLCBmaWxlLCBuZXcgeG1sLkNSKCldKTtcblxuICAgIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICAgIG5ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246ICcxLjAnLCBlbmNvZGluZzogJ1VURi04J30pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKClcbiAgICBdKTtcbiAgfVxuXG4gIGxvYWQoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZyk6XG4gICAgICB7bG9jYWxlOiBzdHJpbmcsIGkxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfX0ge1xuICAgIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICAgIGNvbnN0IHhsaWZmUGFyc2VyID0gbmV3IFhsaWZmUGFyc2VyKCk7XG4gICAgY29uc3Qge2xvY2FsZSwgbXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZlBhcnNlci5wYXJzZShjb250ZW50LCB1cmwpO1xuXG4gICAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgWG1sVG9JMThuKCk7XG5cbiAgICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdLCB1cmwpO1xuICAgICAgZXJyb3JzLnB1c2goLi4uZSk7XG4gICAgICBpMThuTm9kZXNCeU1zZ0lkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgICB9KTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKCdcXG4nKX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvY2FsZTogbG9jYWxlISwgaTE4bk5vZGVzQnlNc2dJZH07XG4gIH1cblxuICBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGlnZXN0KG1lc3NhZ2UpO1xuICB9XG59XG5cbmNsYXNzIF9Xcml0ZVZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW107XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IGkxOG4uTm9kZSkgPT4gbm9kZXMucHVzaCguLi5ub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzID0gW25ldyB4bWwuVGV4dChgeyR7aWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcn0sICR7aWN1LnR5cGV9LCBgKV07XG5cbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goKGM6IHN0cmluZykgPT4ge1xuICAgICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYCR7Y30ge2ApLCAuLi5pY3UuY2FzZXNbY10udmlzaXQodGhpcyksIG5ldyB4bWwuVGV4dChgfSBgKSk7XG4gICAgfSk7XG5cbiAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgfWApKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBjdHlwZSA9IGdldEN0eXBlRm9yVGFnKHBoLnRhZyk7XG5cbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICAvLyB2b2lkIHRhZ3MgaGF2ZSBubyBjaGlsZHJlbiBub3IgY2xvc2luZyB0YWdzXG4gICAgICByZXR1cm4gW25ldyB4bWwuVGFnKFxuICAgICAgICAgIF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGguc3RhcnROYW1lLCBjdHlwZSwgJ2VxdWl2LXRleHQnOiBgPCR7cGgudGFnfS8+YH0pXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRhZ1BoID1cbiAgICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCAnZXF1aXYtdGV4dCc6IGA8JHtwaC50YWd9PmB9KTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID1cbiAgICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5jbG9zZU5hbWUsIGN0eXBlLCAnZXF1aXYtdGV4dCc6IGA8LyR7cGgudGFnfT5gfSk7XG5cbiAgICByZXR1cm4gW3N0YXJ0VGFnUGgsIC4uLnRoaXMuc2VyaWFsaXplKHBoLmNoaWxkcmVuKSwgY2xvc2VUYWdQaF07XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLm5hbWUsICdlcXVpdi10ZXh0JzogYHt7JHtwaC52YWx1ZX19fWB9KV07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgZXF1aXZUZXh0ID0gYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke1xuICAgICAgICBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcykubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZSArICcgey4uLn0nKS5qb2luKCcgJyl9fWA7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLm5hbWUsICdlcXVpdi10ZXh0JzogZXF1aXZUZXh0fSldO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbi8vIFRPRE8odmljYik6IGFkZCBlcnJvciBtYW5hZ2VtZW50IChzdHJ1Y3R1cmUpXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfdW5pdE1sU3RyaW5nITogc3RyaW5nfG51bGw7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9lcnJvcnMhOiBJMThuRXJyb3JbXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sIToge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG5cbiAgcGFyc2UoeGxpZmY6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICBjb25zdCB4bWwgPSBuZXcgWG1sUGFyc2VyKCkucGFyc2UoeGxpZmYsIHVybCk7XG5cbiAgICB0aGlzLl9lcnJvcnMgPSB4bWwuZXJyb3JzO1xuICAgIG1sLnZpc2l0QWxsKHRoaXMsIHhtbC5yb290Tm9kZXMsIG51bGwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZ0lkVG9IdG1sOiB0aGlzLl9tc2dJZFRvSHRtbCxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzLFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIF9VTklUX1RBRzpcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gbnVsbCE7XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSAnaWQnKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1VOSVRfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3VuaXRNbFN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gdGhpcy5fdW5pdE1sU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYE1lc3NhZ2UgJHtpZH0gbWlzc2VzIGEgdHJhbnNsYXRpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGlnbm9yZSB0aG9zZSB0YWdzXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgY2FzZSBfU0VHTUVOVF9TT1VSQ0VfVEFHOlxuICAgICAgY2FzZSBfQUxUX1RSQU5TX1RBRzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfRklMRV9UQUc6XG4gICAgICAgIGNvbnN0IGxvY2FsZUF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gJ3RhcmdldC1sYW5ndWFnZScpO1xuICAgICAgICBpZiAobG9jYWxlQXR0cikge1xuICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZUF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPKHZpY2IpOiBhc3NlcnQgZmlsZSBzdHJ1Y3R1cmUsIHhsaWZmIHZlcnNpb25cbiAgICAgICAgLy8gRm9yIG5vdyBvbmx5IHJlY3Vyc2Ugb24gdW5oYW5kbGVkIG5vZGVzXG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeGxpZmYgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Vycm9ycyE6IEkxOG5FcnJvcltdO1xuXG4gIGNvbnZlcnQobWVzc2FnZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBYbWxQYXJzZXIoKS5wYXJzZShtZXNzYWdlLCB1cmwsIHt0b2tlbml6ZUV4cGFuc2lvbkZvcm1zOiB0cnVlfSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9IHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwIHx8IHhtbEljdS5yb290Tm9kZXMubGVuZ3RoID09IDAgP1xuICAgICAgICBbXSA6XG4gICAgICAgIFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzOiBpMThuTm9kZXMsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9ycyxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyfG1sLk5vZGVbXXxudWxsIHtcbiAgICBpZiAoZWwubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgY29uc3QgbmFtZUF0dHIgPSBlbC5hdHRycy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09ICdpZCcpO1xuICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcignJywgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWwubmFtZSA9PT0gX01BUktFUl9UQUcpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4ubWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKSxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN0eXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2JyJzpcbiAgICAgIHJldHVybiAnbGInO1xuICAgIGNhc2UgJ2ltZyc6XG4gICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGB4LSR7dGFnfWA7XG4gIH1cbn1cbiJdfQ==