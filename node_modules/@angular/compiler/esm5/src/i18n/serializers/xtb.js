/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import * as ml from '../../ml_parser/ast';
import { XmlParser } from '../../ml_parser/xml_parser';
import * as i18n from '../i18n_ast';
import { I18nError } from '../parse_util';
import { Serializer, SimplePlaceholderMapper } from './serializer';
import { digest, toPublicName } from './xmb';
var _TRANSLATIONS_TAG = 'translationbundle';
var _TRANSLATION_TAG = 'translation';
var _PLACEHOLDER_TAG = 'ph';
var Xtb = /** @class */ (function (_super) {
    __extends(Xtb, _super);
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
        return digest(message);
    };
    Xtb.prototype.createNameMapper = function (message) {
        return new SimplePlaceholderMapper(message, toPublicName);
    };
    return Xtb;
}(Serializer));
export { Xtb };
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
        var xml = new XmlParser().parse(xtb, url);
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
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return XtbParser;
}());
// Convert ml nodes (xtb syntax) to i18n nodes
var XmlToI18n = /** @class */ (function () {
    function XmlToI18n() {
    }
    XmlToI18n.prototype.convert = function (message, url) {
        var xmlIcu = new XmlParser().parse(message, url, { tokenizeExpansionForms: true });
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
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return XmlToI18n;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vc2VyaWFsaXplcnMveHRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRCxPQUFPLEtBQUssSUFBSSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE9BQU8sRUFBb0IsVUFBVSxFQUFFLHVCQUF1QixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTNDLElBQU0saUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7QUFDOUMsSUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFOUI7SUFBeUIsdUJBQVU7SUFBbkM7O0lBMkNBLENBQUM7SUExQ0MsbUJBQUssR0FBTCxVQUFNLFFBQXdCLEVBQUUsTUFBbUI7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0JBQUksR0FBSixVQUFLLE9BQWUsRUFBRSxHQUFXO1FBRS9CLG1CQUFtQjtRQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUEsa0NBQTZELEVBQTVELGtCQUFNLEVBQUUsNEJBQVcsRUFBRSxrQkFBdUMsQ0FBQztRQUVwRSwwQkFBMEI7UUFDMUIsSUFBTSxnQkFBZ0IsR0FBbUMsRUFBRSxDQUFDO1FBQzVELElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENB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QUQsQ0FBQyxBQTVERCxJQTREQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSAnLi4vLi4vbWxfcGFyc2VyL2FzdCc7XG5pbXBvcnQge1htbFBhcnNlcn0gZnJvbSAnLi4vLi4vbWxfcGFyc2VyL3htbF9wYXJzZXInO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuLi9pMThuX2FzdCc7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmltcG9ydCB7UGxhY2Vob2xkZXJNYXBwZXIsIFNlcmlhbGl6ZXIsIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyfSBmcm9tICcuL3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtkaWdlc3QsIHRvUHVibGljTmFtZX0gZnJvbSAnLi94bWInO1xuXG5jb25zdCBfVFJBTlNMQVRJT05TX1RBRyA9ICd0cmFuc2xhdGlvbmJ1bmRsZSc7XG5jb25zdCBfVFJBTlNMQVRJT05fVEFHID0gJ3RyYW5zbGF0aW9uJztcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSAncGgnO1xuXG5leHBvcnQgY2xhc3MgWHRiIGV4dGVuZHMgU2VyaWFsaXplciB7XG4gIHdyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmd8bnVsbCk6IHN0cmluZyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCcpO1xuICB9XG5cbiAgbG9hZChjb250ZW50OiBzdHJpbmcsIHVybDogc3RyaW5nKTpcbiAgICAgIHtsb2NhbGU6IHN0cmluZywgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119fSB7XG4gICAgLy8geHRiIHRvIHhtbCBub2Rlc1xuICAgIGNvbnN0IHh0YlBhcnNlciA9IG5ldyBYdGJQYXJzZXIoKTtcbiAgICBjb25zdCB7bG9jYWxlLCBtc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHh0YlBhcnNlci5wYXJzZShjb250ZW50LCB1cmwpO1xuXG4gICAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgWG1sVG9JMThuKCk7XG5cbiAgICAvLyBCZWNhdXNlIHdlIHNob3VsZCBiZSBhYmxlIHRvIGxvYWQgeHRiIGZpbGVzIHRoYXQgcmVseSBvbiBmZWF0dXJlcyBub3Qgc3VwcG9ydGVkIGJ5IGFuZ3VsYXIsXG4gICAgLy8gd2UgbmVlZCB0byBkZWxheSB0aGUgY29udmVyc2lvbiBvZiBodG1sIHRvIGkxOG4gbm9kZXMgc28gdGhhdCBub24gYW5ndWxhciBtZXNzYWdlcyBhcmUgbm90XG4gICAgLy8gY29udmVydGVkXG4gICAgT2JqZWN0LmtleXMobXNnSWRUb0h0bWwpLmZvckVhY2gobXNnSWQgPT4ge1xuICAgICAgY29uc3QgdmFsdWVGbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnN9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdLCB1cmwpO1xuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKCdcXG4nKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bk5vZGVzO1xuICAgICAgfTtcbiAgICAgIGNyZWF0ZUxhenlQcm9wZXJ0eShpMThuTm9kZXNCeU1zZ0lkLCBtc2dJZCwgdmFsdWVGbik7XG4gICAgfSk7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB4dGIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oJ1xcbicpfWApO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9jYWxlOiBsb2NhbGUhLCBpMThuTm9kZXNCeU1zZ0lkfTtcbiAgfVxuXG4gIGRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIHJldHVybiBkaWdlc3QobWVzc2FnZSk7XG4gIH1cblxuICBjcmVhdGVOYW1lTWFwcGVyKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgICByZXR1cm4gbmV3IFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyKG1lc3NhZ2UsIHRvUHVibGljTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGF6eVByb3BlcnR5KG1lc3NhZ2VzOiBhbnksIGlkOiBzdHJpbmcsIHZhbHVlRm46ICgpID0+IGFueSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVzc2FnZXMsIGlkLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGbigpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge2VudW1lcmFibGU6IHRydWUsIHZhbHVlfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IF8gPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3Qgb3ZlcndyaXRlIGFuIFhUQiB0cmFuc2xhdGlvbicpO1xuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4dGIgZmlsZVxuY2xhc3MgWHRiUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9idW5kbGVEZXB0aCE6IG51bWJlcjtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Vycm9ycyE6IEkxOG5FcnJvcltdO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfbXNnSWRUb0h0bWwhOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuICBwcml2YXRlIF9sb2NhbGU6IHN0cmluZ3xudWxsID0gbnVsbDtcblxuICBwYXJzZSh4dGI6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idW5kbGVEZXB0aCA9IDA7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIC8vIFdlIGNhbiBub3QgcGFyc2UgdGhlIElDVSBtZXNzYWdlcyBhdCB0aGlzIHBvaW50IGFzIHNvbWUgbWVzc2FnZXMgbWlnaHQgbm90IG9yaWdpbmF0ZVxuICAgIC8vIGZyb20gQW5ndWxhciB0aGF0IGNvdWxkIG5vdCBiZSBsZXgnZC5cbiAgICBjb25zdCB4bWwgPSBuZXcgWG1sUGFyc2VyKCkucGFyc2UoeHRiLCB1cmwpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0geG1sLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCB4bWwucm9vdE5vZGVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9ycyxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVFJBTlNMQVRJT05TX1RBRzpcbiAgICAgICAgdGhpcy5fYnVuZGxlRGVwdGgrKztcbiAgICAgICAgaWYgKHRoaXMuX2J1bmRsZURlcHRoID4gMSkge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVFJBTlNMQVRJT05TX1RBR30+IGVsZW1lbnRzIGNhbiBub3QgYmUgbmVzdGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFuZ0F0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gJ2xhbmcnKTtcbiAgICAgICAgaWYgKGxhbmdBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxlID0gbGFuZ0F0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoLS07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UUkFOU0xBVElPTl9UQUc6XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSAnaWQnKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCEsIGlubmVyVGV4dEVuZCEpO1xuICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gaW5uZXJUZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgJ1VuZXhwZWN0ZWQgdGFnJyk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4dGIgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Vycm9ycyE6IEkxOG5FcnJvcltdO1xuXG4gIGNvbnZlcnQobWVzc2FnZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBYbWxQYXJzZXIoKS5wYXJzZShtZXNzYWdlLCB1cmwsIHt0b2tlbml6ZUV4cGFuc2lvbkZvcm1zOiB0cnVlfSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9IHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwIHx8IHhtbEljdS5yb290Tm9kZXMubGVuZ3RoID09IDAgP1xuICAgICAgICBbXSA6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzLFxuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBpMThuLlRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgY2FzZU1hcFtjLnZhbHVlXSA9IG5ldyBpMThuLkNvbnRhaW5lcihjLm5vZGVzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uSWN1KGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGNhc2VNYXAsIGljdS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaWN1Q2FzZS52YWx1ZSxcbiAgICAgIG5vZGVzOiBtbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24pLFxuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uUGxhY2Vob2xkZXJ8bnVsbCB7XG4gICAgaWYgKGVsLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSAnbmFtZScpO1xuICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcignJywgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcIm5hbWVcIiBhdHRyaWJ1dGVgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGBVbmV4cGVjdGVkIHRhZ2ApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuIl19