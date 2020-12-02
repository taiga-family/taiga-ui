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
        define("@angular/compiler/src/i18n/serializers/xtb", ["require", "exports", "tslib", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/xml_parser", "@angular/compiler/src/i18n/i18n_ast", "@angular/compiler/src/i18n/parse_util", "@angular/compiler/src/i18n/serializers/serializer", "@angular/compiler/src/i18n/serializers/xmb"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ml = require("@angular/compiler/src/ml_parser/ast");
    var xml_parser_1 = require("@angular/compiler/src/ml_parser/xml_parser");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var parse_util_1 = require("@angular/compiler/src/i18n/parse_util");
    var serializer_1 = require("@angular/compiler/src/i18n/serializers/serializer");
    var xmb_1 = require("@angular/compiler/src/i18n/serializers/xmb");
    var _TRANSLATIONS_TAG = 'translationbundle';
    var _TRANSLATION_TAG = 'translation';
    var _PLACEHOLDER_TAG = 'ph';
    var Xtb = /** @class */ (function (_super) {
        tslib_1.__extends(Xtb, _super);
        function Xtb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xtb.prototype.write = function (messages, locale) {
            throw new Error('Unsupported');
        };
        Xtb.prototype.load = function (content, url) {
            // xtb to xml nodes
            var xtbParser = new XtbParser();
            var _a = xtbParser.parse(content, url), locale = _a.locale, msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
            // xml nodes to i18n nodes
            var i18nNodesByMsgId = {};
            var converter = new XmlToI18n();
            // Because we should be able to load xtb files that rely on features not supported by angular,
            // we need to delay the conversion of html to i18n nodes so that non angular messages are not
            // converted
            Object.keys(msgIdToHtml).forEach(function (msgId) {
                var valueFn = function () {
                    var _a = converter.convert(msgIdToHtml[msgId], url), i18nNodes = _a.i18nNodes, errors = _a.errors;
                    if (errors.length) {
                        throw new Error("xtb parse errors:\n" + errors.join('\n'));
                    }
                    return i18nNodes;
                };
                createLazyProperty(i18nNodesByMsgId, msgId, valueFn);
            });
            if (errors.length) {
                throw new Error("xtb parse errors:\n" + errors.join('\n'));
            }
            return { locale: locale, i18nNodesByMsgId: i18nNodesByMsgId };
        };
        Xtb.prototype.digest = function (message) {
            return xmb_1.digest(message);
        };
        Xtb.prototype.createNameMapper = function (message) {
            return new serializer_1.SimplePlaceholderMapper(message, xmb_1.toPublicName);
        };
        return Xtb;
    }(serializer_1.Serializer));
    exports.Xtb = Xtb;
    function createLazyProperty(messages, id, valueFn) {
        Object.defineProperty(messages, id, {
            configurable: true,
            enumerable: true,
            get: function () {
                var value = valueFn();
                Object.defineProperty(messages, id, { enumerable: true, value: value });
                return value;
            },
            set: function (_) {
                throw new Error('Could not overwrite an XTB translation');
            },
        });
    }
    // Extract messages as xml nodes from the xtb file
    var XtbParser = /** @class */ (function () {
        function XtbParser() {
            this._locale = null;
        }
        XtbParser.prototype.parse = function (xtb, url) {
            this._bundleDepth = 0;
            this._msgIdToHtml = {};
            // We can not parse the ICU messages at this point as some messages might not originate
            // from Angular that could not be lex'd.
            var xml = new xml_parser_1.XmlParser().parse(xtb, url);
            this._errors = xml.errors;
            ml.visitAll(this, xml.rootNodes);
            return {
                msgIdToHtml: this._msgIdToHtml,
                errors: this._errors,
                locale: this._locale,
            };
        };
        XtbParser.prototype.visitElement = function (element, context) {
            switch (element.name) {
                case _TRANSLATIONS_TAG:
                    this._bundleDepth++;
                    if (this._bundleDepth > 1) {
                        this._addError(element, "<" + _TRANSLATIONS_TAG + "> elements can not be nested");
                    }
                    var langAttr = element.attrs.find(function (attr) { return attr.name === 'lang'; });
                    if (langAttr) {
                        this._locale = langAttr.value;
                    }
                    ml.visitAll(this, element.children, null);
                    this._bundleDepth--;
                    break;
                case _TRANSLATION_TAG:
                    var idAttr = element.attrs.find(function (attr) { return attr.name === 'id'; });
                    if (!idAttr) {
                        this._addError(element, "<" + _TRANSLATION_TAG + "> misses the \"id\" attribute");
                    }
                    else {
                        var id = idAttr.value;
                        if (this._msgIdToHtml.hasOwnProperty(id)) {
                            this._addError(element, "Duplicated translations for msg " + id);
                        }
                        else {
                            var innerTextStart = element.startSourceSpan.end.offset;
                            var innerTextEnd = element.endSourceSpan.start.offset;
                            var content = element.startSourceSpan.start.file.content;
                            var innerText = content.slice(innerTextStart, innerTextEnd);
                            this._msgIdToHtml[id] = innerText;
                        }
                    }
                    break;
                default:
                    this._addError(element, 'Unexpected tag');
            }
        };
        XtbParser.prototype.visitAttribute = function (attribute, context) { };
        XtbParser.prototype.visitText = function (text, context) { };
        XtbParser.prototype.visitComment = function (comment, context) { };
        XtbParser.prototype.visitExpansion = function (expansion, context) { };
        XtbParser.prototype.visitExpansionCase = function (expansionCase, context) { };
        XtbParser.prototype._addError = function (node, message) {
            this._errors.push(new parse_util_1.I18nError(node.sourceSpan, message));
        };
        return XtbParser;
    }());
    // Convert ml nodes (xtb syntax) to i18n nodes
    var XmlToI18n = /** @class */ (function () {
        function XmlToI18n() {
        }
        XmlToI18n.prototype.convert = function (message, url) {
            var xmlIcu = new xml_parser_1.XmlParser().parse(message, url, { tokenizeExpansionForms: true });
            this._errors = xmlIcu.errors;
            var i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length == 0 ?
                [] :
                ml.visitAll(this, xmlIcu.rootNodes);
            return {
                i18nNodes: i18nNodes,
                errors: this._errors,
            };
        };
        XmlToI18n.prototype.visitText = function (text, context) {
            return new i18n.Text(text.value, text.sourceSpan);
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
        XmlToI18n.prototype.visitElement = function (el, context) {
            if (el.name === _PLACEHOLDER_TAG) {
                var nameAttr = el.attrs.find(function (attr) { return attr.name === 'name'; });
                if (nameAttr) {
                    return new i18n.Placeholder('', nameAttr.value, el.sourceSpan);
                }
                this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"name\" attribute");
            }
            else {
                this._addError(el, "Unexpected tag");
            }
            return null;
        };
        XmlToI18n.prototype.visitComment = function (comment, context) { };
        XmlToI18n.prototype.visitAttribute = function (attribute, context) { };
        XmlToI18n.prototype._addError = function (node, message) {
            this._errors.push(new parse_util_1.I18nError(node.sourceSpan, message));
        };
        return XmlToI18n;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vc2VyaWFsaXplcnMveHRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILHdEQUEwQztJQUMxQyx5RUFBcUQ7SUFDckQsMERBQW9DO0lBQ3BDLG9FQUF3QztJQUV4QyxnRkFBb0Y7SUFDcEYsa0VBQTJDO0lBRTNDLElBQU0saUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7SUFDOUMsSUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7SUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFOUI7UUFBeUIsK0JBQVU7UUFBbkM7O1FBMkNBLENBQUM7UUExQ0MsbUJBQUssR0FBTCxVQUFNLFFBQXdCLEVBQUUsTUFBbUI7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsa0JBQUksR0FBSixVQUFLLE9BQWUsRUFBRSxHQUFXO1lBRS9CLG1CQUFtQjtZQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUEsa0NBQTZELEVBQTVELGtCQUFNLEVBQUUsNEJBQVcsRUFBRSxrQkFBdUMsQ0FBQztZQUVwRSwwQkFBMEI7WUFDMUIsSUFBTSxnQkFBZ0IsR0FBbUMsRUFBRSxDQUFDO1lBQzVELElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFFbEMsOEZBQThGO1lBQzlGLDZGQUE2RjtZQUM3RixZQUFZO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUNwQyxJQUFNLE9BQU8sR0FBRztvQkFDUixJQUFBLCtDQUFnRSxFQUEvRCx3QkFBUyxFQUFFLGtCQUFvRCxDQUFDO29CQUN2RSxJQUFJLE1B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QVUsQ0FBQzthQUM3QyxDQUFDO1FBQ0osQ0FBQztRQUVELGdDQUFZLEdBQVosVUFBYSxFQUFjLEVBQUUsT0FBWTtZQUN2QyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7Z0JBQ2hDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxRQUFRLEVBQUU7b0JBQ1osT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2lCQUNqRTtnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFJLGdCQUFnQixvQ0FBK0IsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDdEM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxnQ0FBWSxHQUFaLFVBQWEsT0FBbUIsRUFBRSxPQUFZLElBQUcsQ0FBQztRQUVsRCxrQ0FBYyxHQUFkLFVBQWUsU0FBdUIsRUFBRSxPQUFZLElBQUcsQ0FBQztRQUVoRCw2QkFBUyxHQUFqQixVQUFrQixJQUFhLEVBQUUsT0FBZTtZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUE1REQsSUE0REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gJy4uLy4uL21sX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtYbWxQYXJzZXJ9IGZyb20gJy4uLy4uL21sX3BhcnNlci94bWxfcGFyc2VyJztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vaTE4bl9hc3QnO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5pbXBvcnQge1BsYWNlaG9sZGVyTWFwcGVyLCBTZXJpYWxpemVyLCBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcn0gZnJvbSAnLi9zZXJpYWxpemVyJztcbmltcG9ydCB7ZGlnZXN0LCB0b1B1YmxpY05hbWV9IGZyb20gJy4veG1iJztcblxuY29uc3QgX1RSQU5TTEFUSU9OU19UQUcgPSAndHJhbnNsYXRpb25idW5kbGUnO1xuY29uc3QgX1RSQU5TTEFUSU9OX1RBRyA9ICd0cmFuc2xhdGlvbic7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gJ3BoJztcblxuZXhwb3J0IGNsYXNzIFh0YiBleHRlbmRzIFNlcmlhbGl6ZXIge1xuICB3cml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nfG51bGwpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIGxvYWQoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZyk6XG4gICAgICB7bG9jYWxlOiBzdHJpbmcsIGkxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfX0ge1xuICAgIC8vIHh0YiB0byB4bWwgbm9kZXNcbiAgICBjb25zdCB4dGJQYXJzZXIgPSBuZXcgWHRiUGFyc2VyKCk7XG4gICAgY29uc3Qge2xvY2FsZSwgbXNnSWRUb0h0bWwsIGVycm9yc30gPSB4dGJQYXJzZXIucGFyc2UoY29udGVudCwgdXJsKTtcblxuICAgIC8vIHhtbCBub2RlcyB0byBpMThuIG5vZGVzXG4gICAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBzaG91bGQgYmUgYWJsZSB0byBsb2FkIHh0YiBmaWxlcyB0aGF0IHJlbHkgb24gZmVhdHVyZXMgbm90IHN1cHBvcnRlZCBieSBhbmd1bGFyLFxuICAgIC8vIHdlIG5lZWQgdG8gZGVsYXkgdGhlIGNvbnZlcnNpb24gb2YgaHRtbCB0byBpMThuIG5vZGVzIHNvIHRoYXQgbm9uIGFuZ3VsYXIgbWVzc2FnZXMgYXJlIG5vdFxuICAgIC8vIGNvbnZlcnRlZFxuICAgIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlRm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSwgdXJsKTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHh0YiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbignXFxuJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5Ob2RlcztcbiAgICAgIH07XG4gICAgICBjcmVhdGVMYXp5UHJvcGVydHkoaTE4bk5vZGVzQnlNc2dJZCwgbXNnSWQsIHZhbHVlRm4pO1xuICAgIH0pO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKCdcXG4nKX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvY2FsZTogbG9jYWxlISwgaTE4bk5vZGVzQnlNc2dJZH07XG4gIH1cblxuICBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGlnZXN0KG1lc3NhZ2UpO1xuICB9XG5cbiAgY3JlYXRlTmFtZU1hcHBlcihtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBQbGFjZWhvbGRlck1hcHBlciB7XG4gICAgcmV0dXJuIG5ldyBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcihtZXNzYWdlLCB0b1B1YmxpY05hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhenlQcm9wZXJ0eShtZXNzYWdlczogYW55LCBpZDogc3RyaW5nLCB2YWx1ZUZuOiAoKSA9PiBhbnkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRm4oKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXNzYWdlcywgaWQsIHtlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZX0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBfID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IG92ZXJ3cml0ZSBhbiBYVEIgdHJhbnNsYXRpb24nKTtcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gRXh0cmFjdCBtZXNzYWdlcyBhcyB4bWwgbm9kZXMgZnJvbSB0aGUgeHRiIGZpbGVcbmNsYXNzIFh0YlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfYnVuZGxlRGVwdGghOiBudW1iZXI7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9lcnJvcnMhOiBJMThuRXJyb3JbXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sIToge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG5cbiAgcGFyc2UoeHRiOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVuZGxlRGVwdGggPSAwO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICAvLyBXZSBjYW4gbm90IHBhcnNlIHRoZSBJQ1UgbWVzc2FnZXMgYXQgdGhpcyBwb2ludCBhcyBzb21lIG1lc3NhZ2VzIG1pZ2h0IG5vdCBvcmlnaW5hdGVcbiAgICAvLyBmcm9tIEFuZ3VsYXIgdGhhdCBjb3VsZCBub3QgYmUgbGV4J2QuXG4gICAgY29uc3QgeG1sID0gbmV3IFhtbFBhcnNlcigpLnBhcnNlKHh0YiwgdXJsKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHhtbC5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgeG1sLnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnMsXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OU19UQUc6XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoKys7XG4gICAgICAgIGlmICh0aGlzLl9idW5kbGVEZXB0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OU19UQUd9PiBlbGVtZW50cyBjYW4gbm90IGJlIG5lc3RlZGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhbmdBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09ICdsYW5nJyk7XG4gICAgICAgIGlmIChsYW5nQXR0cikge1xuICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IGxhbmdBdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aC0tO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVFJBTlNMQVRJT05fVEFHOlxuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gJ2lkJyk7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTl9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQhLCBpbm5lclRleHRFbmQhKTtcbiAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IGlubmVyVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsICdVbmV4cGVjdGVkIHRhZycpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeHRiIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9lcnJvcnMhOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgWG1sUGFyc2VyKCkucGFyc2UobWVzc2FnZSwgdXJsLCB7dG9rZW5pemVFeHBhbnNpb25Gb3JtczogdHJ1ZX0pO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPSB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PSAwID9cbiAgICAgICAgW10gOlxuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpMThuTm9kZXMsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9ycyxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaChjID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKSxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyfG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gJ25hbWUnKTtcbiAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICByZXR1cm4gbmV3IGkxOG4uUGxhY2Vob2xkZXIoJycsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJuYW1lXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cbiJdfQ==