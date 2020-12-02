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
        define("@angular/compiler/src/i18n/translation_bundle", ["require", "exports", "tslib", "@angular/compiler/src/core", "@angular/compiler/src/ml_parser/html_parser", "@angular/compiler/src/i18n/parse_util", "@angular/compiler/src/i18n/serializers/xml_helper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@angular/compiler/src/core");
    var html_parser_1 = require("@angular/compiler/src/ml_parser/html_parser");
    var parse_util_1 = require("@angular/compiler/src/i18n/parse_util");
    var xml_helper_1 = require("@angular/compiler/src/i18n/serializers/xml_helper");
    /**
     * A container for translated messages
     */
    var TranslationBundle = /** @class */ (function () {
        function TranslationBundle(_i18nNodesByMsgId, locale, digest, mapperFactory, missingTranslationStrategy, console) {
            if (_i18nNodesByMsgId === void 0) { _i18nNodesByMsgId = {}; }
            if (missingTranslationStrategy === void 0) { missingTranslationStrategy = core_1.MissingTranslationStrategy.Warning; }
            this._i18nNodesByMsgId = _i18nNodesByMsgId;
            this.digest = digest;
            this.mapperFactory = mapperFactory;
            this._i18nToHtml = new I18nToHtmlVisitor(_i18nNodesByMsgId, locale, digest, mapperFactory, missingTranslationStrategy, console);
        }
        // Creates a `TranslationBundle` by parsing the given `content` with the `serializer`.
        TranslationBundle.load = function (content, url, serializer, missingTranslationStrategy, console) {
            var _a = serializer.load(content, url), locale = _a.locale, i18nNodesByMsgId = _a.i18nNodesByMsgId;
            var digestFn = function (m) { return serializer.digest(m); };
            var mapperFactory = function (m) { return serializer.createNameMapper(m); };
            return new TranslationBundle(i18nNodesByMsgId, locale, digestFn, mapperFactory, missingTranslationStrategy, console);
        };
        // Returns the translation as HTML nodes from the given source message.
        TranslationBundle.prototype.get = function (srcMsg) {
            var html = this._i18nToHtml.convert(srcMsg);
            if (html.errors.length) {
                throw new Error(html.errors.join('\n'));
            }
            return html.nodes;
        };
        TranslationBundle.prototype.has = function (srcMsg) {
            return this.digest(srcMsg) in this._i18nNodesByMsgId;
        };
        return TranslationBundle;
    }());
    exports.TranslationBundle = TranslationBundle;
    var I18nToHtmlVisitor = /** @class */ (function () {
        function I18nToHtmlVisitor(_i18nNodesByMsgId, _locale, _digest, _mapperFactory, _missingTranslationStrategy, _console) {
            if (_i18nNodesByMsgId === void 0) { _i18nNodesByMsgId = {}; }
            this._i18nNodesByMsgId = _i18nNodesByMsgId;
            this._locale = _locale;
            this._digest = _digest;
            this._mapperFactory = _mapperFactory;
            this._missingTranslationStrategy = _missingTranslationStrategy;
            this._console = _console;
            this._contextStack = [];
            this._errors = [];
        }
        I18nToHtmlVisitor.prototype.convert = function (srcMsg) {
            this._contextStack.length = 0;
            this._errors.length = 0;
            // i18n to text
            var text = this._convertToText(srcMsg);
            // text to html
            var url = srcMsg.nodes[0].sourceSpan.start.file.url;
            var html = new html_parser_1.HtmlParser().parse(text, url, { tokenizeExpansionForms: true });
            return {
                nodes: html.rootNodes,
                errors: tslib_1.__spread(this._errors, html.errors),
            };
        };
        I18nToHtmlVisitor.prototype.visitText = function (text, context) {
            // `convert()` uses an `HtmlParser` to return `html.Node`s
            // we should then make sure that any special characters are escaped
            return xml_helper_1.escapeXml(text.value);
        };
        I18nToHtmlVisitor.prototype.visitContainer = function (container, context) {
            var _this = this;
            return container.children.map(function (n) { return n.visit(_this); }).join('');
        };
        I18nToHtmlVisitor.prototype.visitIcu = function (icu, context) {
            var _this = this;
            var cases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
            // TODO(vicb): Once all format switch to using expression placeholders
            // we should throw when the placeholder is not in the source message
            var exp = this._srcMsg.placeholders.hasOwnProperty(icu.expression) ?
                this._srcMsg.placeholders[icu.expression] :
                icu.expression;
            return "{" + exp + ", " + icu.type + ", " + cases.join(' ') + "}";
        };
        I18nToHtmlVisitor.prototype.visitPlaceholder = function (ph, context) {
            var phName = this._mapper(ph.name);
            if (this._srcMsg.placeholders.hasOwnProperty(phName)) {
                return this._srcMsg.placeholders[phName];
            }
            if (this._srcMsg.placeholderToMessage.hasOwnProperty(phName)) {
                return this._convertToText(this._srcMsg.placeholderToMessage[phName]);
            }
            this._addError(ph, "Unknown placeholder \"" + ph.name + "\"");
            return '';
        };
        // Loaded message contains only placeholders (vs tag and icu placeholders).
        // However when a translation can not be found, we need to serialize the source message
        // which can contain tag placeholders
        I18nToHtmlVisitor.prototype.visitTagPlaceholder = function (ph, context) {
            var _this = this;
            var tag = "" + ph.tag;
            var attrs = Object.keys(ph.attrs).map(function (name) { return name + "=\"" + ph.attrs[name] + "\""; }).join(' ');
            if (ph.isVoid) {
                return "<" + tag + " " + attrs + "/>";
            }
            var children = ph.children.map(function (c) { return c.visit(_this); }).join('');
            return "<" + tag + " " + attrs + ">" + children + "</" + tag + ">";
        };
        // Loaded message contains only placeholders (vs tag and icu placeholders).
        // However when a translation can not be found, we need to serialize the source message
        // which can contain tag placeholders
        I18nToHtmlVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
            // An ICU placeholder references the source message to be serialized
            return this._convertToText(this._srcMsg.placeholderToMessage[ph.name]);
        };
        /**
         * Convert a source message to a translated text string:
         * - text nodes are replaced with their translation,
         * - placeholders are replaced with their content,
         * - ICU nodes are converted to ICU expressions.
         */
        I18nToHtmlVisitor.prototype._convertToText = function (srcMsg) {
            var _this = this;
            var id = this._digest(srcMsg);
            var mapper = this._mapperFactory ? this._mapperFactory(srcMsg) : null;
            var nodes;
            this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper });
            this._srcMsg = srcMsg;
            if (this._i18nNodesByMsgId.hasOwnProperty(id)) {
                // When there is a translation use its nodes as the source
                // And create a mapper to convert serialized placeholder names to internal names
                nodes = this._i18nNodesByMsgId[id];
                this._mapper = function (name) { return mapper ? mapper.toInternalName(name) : name; };
            }
            else {
                // When no translation has been found
                // - report an error / a warning / nothing,
                // - use the nodes from the original message
                // - placeholders are already internal and need no mapper
                if (this._missingTranslationStrategy === core_1.MissingTranslationStrategy.Error) {
                    var ctx = this._locale ? " for locale \"" + this._locale + "\"" : '';
                    this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"" + ctx);
                }
                else if (this._console &&
                    this._missingTranslationStrategy === core_1.MissingTranslationStrategy.Warning) {
                    var ctx = this._locale ? " for locale \"" + this._locale + "\"" : '';
                    this._console.warn("Missing translation for message \"" + id + "\"" + ctx);
                }
                nodes = srcMsg.nodes;
                this._mapper = function (name) { return name; };
            }
            var text = nodes.map(function (node) { return node.visit(_this); }).join('');
            var context = this._contextStack.pop();
            this._srcMsg = context.msg;
            this._mapper = context.mapper;
            return text;
        };
        I18nToHtmlVisitor.prototype._addError = function (el, msg) {
            this._errors.push(new parse_util_1.I18nError(el.sourceSpan, msg));
        };
        return I18nToHtmlVisitor;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vdHJhbnNsYXRpb25fYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILG1EQUFtRDtJQUVuRCwyRUFBb0Q7SUFJcEQsb0VBQXVDO0lBRXZDLGdGQUFtRDtJQUduRDs7T0FFRztJQUNIO1FBR0UsMkJBQ1ksaUJBQXNELEVBQUUsTUFBbUIsRUFDNUUsTUFBbUMsRUFDbkMsYUFBc0QsRUFDN0QsMEJBQTJGLEVBQzNGLE9BQWlCO1lBSlQsa0NBQUEsRUFBQSxzQkFBc0Q7WUFHOUQsMkNBQUEsRUFBQSw2QkFBeUQsaUNBQTBCLENBQUMsT0FBTztZQUhuRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1lBQ3ZELFdBQU0sR0FBTixNQUFNLENBQTZCO1lBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUF5QztZQUcvRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksaUJBQWlCLENBQ3BDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYyxFQUFFLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFFRCxzRkFBc0Y7UUFDL0Usc0JBQUksR0FBWCxVQUNJLE9BQWUsRUFBRSxHQUFXLEVBQUUsVUFBc0IsRUFDcEQsMEJBQXNELEVBQ3RELE9BQWlCO1lBQ2IsSUFBQSxrQ0FBMEQsRUFBekQsa0JBQU0sRUFBRSxzQ0FBaUQsQ0FBQztZQUNqRSxJQUFNLFFBQVEsR0FBRyxVQUFDLENBQWUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLENBQUM7WUFDM0QsSUFBTSxhQUFhLEdBQUcsVUFBQyxDQUFlLElBQUssT0FBQSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FB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QUNILHdCQUFDO0lBQUQsQ0FBQyxBQXZJRCxJQXVJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4uL21sX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuL2kxOG5fYXN0JztcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tICcuL3BhcnNlX3V0aWwnO1xuaW1wb3J0IHtQbGFjZWhvbGRlck1hcHBlciwgU2VyaWFsaXplcn0gZnJvbSAnLi9zZXJpYWxpemVycy9zZXJpYWxpemVyJztcbmltcG9ydCB7ZXNjYXBlWG1sfSBmcm9tICcuL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXInO1xuXG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIHRyYW5zbGF0ZWQgbWVzc2FnZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgcHJpdmF0ZSBfaTE4blRvSHRtbDogSTE4blRvSHRtbFZpc2l0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9pMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSwgbG9jYWxlOiBzdHJpbmd8bnVsbCxcbiAgICAgIHB1YmxpYyBkaWdlc3Q6IChtOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICAgIHB1YmxpYyBtYXBwZXJGYWN0b3J5PzogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nLFxuICAgICAgY29uc29sZT86IENvbnNvbGUpIHtcbiAgICB0aGlzLl9pMThuVG9IdG1sID0gbmV3IEkxOG5Ub0h0bWxWaXNpdG9yKFxuICAgICAgICBfaTE4bk5vZGVzQnlNc2dJZCwgbG9jYWxlLCBkaWdlc3QsIG1hcHBlckZhY3RvcnkhLCBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSwgY29uc29sZSk7XG4gIH1cblxuICAvLyBDcmVhdGVzIGEgYFRyYW5zbGF0aW9uQnVuZGxlYCBieSBwYXJzaW5nIHRoZSBnaXZlbiBgY29udGVudGAgd2l0aCB0aGUgYHNlcmlhbGl6ZXJgLlxuICBzdGF0aWMgbG9hZChcbiAgICAgIGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcsIHNlcmlhbGl6ZXI6IFNlcmlhbGl6ZXIsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgICBjb25zb2xlPzogQ29uc29sZSk6IFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgICBjb25zdCB7bG9jYWxlLCBpMThuTm9kZXNCeU1zZ0lkfSA9IHNlcmlhbGl6ZXIubG9hZChjb250ZW50LCB1cmwpO1xuICAgIGNvbnN0IGRpZ2VzdEZuID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gc2VyaWFsaXplci5kaWdlc3QobSk7XG4gICAgY29uc3QgbWFwcGVyRmFjdG9yeSA9IChtOiBpMThuLk1lc3NhZ2UpID0+IHNlcmlhbGl6ZXIuY3JlYXRlTmFtZU1hcHBlcihtKSE7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbkJ1bmRsZShcbiAgICAgICAgaTE4bk5vZGVzQnlNc2dJZCwgbG9jYWxlLCBkaWdlc3RGbiwgbWFwcGVyRmFjdG9yeSwgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksIGNvbnNvbGUpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gYXMgSFRNTCBub2RlcyBmcm9tIHRoZSBnaXZlbiBzb3VyY2UgbWVzc2FnZS5cbiAgZ2V0KHNyY01zZzogaTE4bi5NZXNzYWdlKTogaHRtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLl9pMThuVG9IdG1sLmNvbnZlcnQoc3JjTXNnKTtcblxuICAgIGlmIChodG1sLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihodG1sLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWwubm9kZXM7XG4gIH1cblxuICBoYXMoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3JjTXNnKSBpbiB0aGlzLl9pMThuTm9kZXNCeU1zZ0lkO1xuICB9XG59XG5cbmNsYXNzIEkxOG5Ub0h0bWxWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3NyY01zZyE6IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBfY29udGV4dFN0YWNrOiB7bXNnOiBpMThuLk1lc3NhZ2UsIG1hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nfVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW10gPSBbXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX21hcHBlciE6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2kxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9LCBwcml2YXRlIF9sb2NhbGU6IHN0cmluZ3xudWxsLFxuICAgICAgcHJpdmF0ZSBfZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgICBwcml2YXRlIF9tYXBwZXJGYWN0b3J5OiAobTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlcixcbiAgICAgIHByaXZhdGUgX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSwgcHJpdmF0ZSBfY29uc29sZT86IENvbnNvbGUpIHtcbiAgfVxuXG4gIGNvbnZlcnQoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiB7bm9kZXM6IGh0bWwuTm9kZVtdLCBlcnJvcnM6IEkxOG5FcnJvcltdfSB7XG4gICAgdGhpcy5fY29udGV4dFN0YWNrLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBpMThuIHRvIHRleHRcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fY29udmVydFRvVGV4dChzcmNNc2cpO1xuXG4gICAgLy8gdGV4dCB0byBodG1sXG4gICAgY29uc3QgdXJsID0gc3JjTXNnLm5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgY29uc3QgaHRtbCA9IG5ldyBIdG1sUGFyc2VyKCkucGFyc2UodGV4dCwgdXJsLCB7dG9rZW5pemVFeHBhbnNpb25Gb3JtczogdHJ1ZX0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVzOiBodG1sLnJvb3ROb2RlcyxcbiAgICAgIGVycm9yczogWy4uLnRoaXMuX2Vycm9ycywgLi4uaHRtbC5lcnJvcnNdLFxuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBgY29udmVydCgpYCB1c2VzIGFuIGBIdG1sUGFyc2VyYCB0byByZXR1cm4gYGh0bWwuTm9kZWBzXG4gICAgLy8gd2Ugc2hvdWxkIHRoZW4gbWFrZSBzdXJlIHRoYXQgYW55IHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgZXNjYXBlZFxuICAgIHJldHVybiBlc2NhcGVYbWwodGV4dC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcykpLmpvaW4oJycpO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcChrID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG5cbiAgICAvLyBUT0RPKHZpY2IpOiBPbmNlIGFsbCBmb3JtYXQgc3dpdGNoIHRvIHVzaW5nIGV4cHJlc3Npb24gcGxhY2Vob2xkZXJzXG4gICAgLy8gd2Ugc2hvdWxkIHRocm93IHdoZW4gdGhlIHBsYWNlaG9sZGVyIGlzIG5vdCBpbiB0aGUgc291cmNlIG1lc3NhZ2VcbiAgICBjb25zdCBleHAgPSB0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzLmhhc093blByb3BlcnR5KGljdS5leHByZXNzaW9uKSA/XG4gICAgICAgIHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbaWN1LmV4cHJlc3Npb25dIDpcbiAgICAgICAgaWN1LmV4cHJlc3Npb247XG5cbiAgICByZXR1cm4gYHske2V4cH0sICR7aWN1LnR5cGV9LCAke2Nhc2VzLmpvaW4oJyAnKX19YDtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX21hcHBlcihwaC5uYW1lKTtcbiAgICBpZiAodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyc1twaE5hbWVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2UuaGFzT3duUHJvcGVydHkocGhOYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRUb1RleHQodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlW3BoTmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZEVycm9yKHBoLCBgVW5rbm93biBwbGFjZWhvbGRlciBcIiR7cGgubmFtZX1cImApO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWcgPSBgJHtwaC50YWd9YDtcbiAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKHBoLmF0dHJzKS5tYXAobmFtZSA9PiBgJHtuYW1lfT1cIiR7cGguYXR0cnNbbmFtZV19XCJgKS5qb2luKCcgJyk7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9Lz5gO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcCgoYzogaTE4bi5Ob2RlKSA9PiBjLnZpc2l0KHRoaXMpKS5qb2luKCcnKTtcbiAgICByZXR1cm4gYDwke3RhZ30gJHthdHRyc30+JHtjaGlsZHJlbn08LyR7dGFnfT5gO1xuICB9XG5cbiAgLy8gTG9hZGVkIG1lc3NhZ2UgY29udGFpbnMgb25seSBwbGFjZWhvbGRlcnMgKHZzIHRhZyBhbmQgaWN1IHBsYWNlaG9sZGVycykuXG4gIC8vIEhvd2V2ZXIgd2hlbiBhIHRyYW5zbGF0aW9uIGNhbiBub3QgYmUgZm91bmQsIHdlIG5lZWQgdG8gc2VyaWFsaXplIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAvLyB3aGljaCBjYW4gY29udGFpbiB0YWcgcGxhY2Vob2xkZXJzXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIEFuIElDVSBwbGFjZWhvbGRlciByZWZlcmVuY2VzIHRoZSBzb3VyY2UgbWVzc2FnZSB0byBiZSBzZXJpYWxpemVkXG4gICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRUb1RleHQodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlW3BoLm5hbWVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgc291cmNlIG1lc3NhZ2UgdG8gYSB0cmFuc2xhdGVkIHRleHQgc3RyaW5nOlxuICAgKiAtIHRleHQgbm9kZXMgYXJlIHJlcGxhY2VkIHdpdGggdGhlaXIgdHJhbnNsYXRpb24sXG4gICAqIC0gcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIGNvbnRlbnQsXG4gICAqIC0gSUNVIG5vZGVzIGFyZSBjb252ZXJ0ZWQgdG8gSUNVIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBfY29udmVydFRvVGV4dChzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9kaWdlc3Qoc3JjTXNnKTtcbiAgICBjb25zdCBtYXBwZXIgPSB0aGlzLl9tYXBwZXJGYWN0b3J5ID8gdGhpcy5fbWFwcGVyRmFjdG9yeShzcmNNc2cpIDogbnVsbDtcbiAgICBsZXQgbm9kZXM6IGkxOG4uTm9kZVtdO1xuXG4gICAgdGhpcy5fY29udGV4dFN0YWNrLnB1c2goe21zZzogdGhpcy5fc3JjTXNnLCBtYXBwZXI6IHRoaXMuX21hcHBlcn0pO1xuICAgIHRoaXMuX3NyY01zZyA9IHNyY01zZztcblxuICAgIGlmICh0aGlzLl9pMThuTm9kZXNCeU1zZ0lkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gV2hlbiB0aGVyZSBpcyBhIHRyYW5zbGF0aW9uIHVzZSBpdHMgbm9kZXMgYXMgdGhlIHNvdXJjZVxuICAgICAgLy8gQW5kIGNyZWF0ZSBhIG1hcHBlciB0byBjb252ZXJ0IHNlcmlhbGl6ZWQgcGxhY2Vob2xkZXIgbmFtZXMgdG8gaW50ZXJuYWwgbmFtZXNcbiAgICAgIG5vZGVzID0gdGhpcy5faTE4bk5vZGVzQnlNc2dJZFtpZF07XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiBtYXBwZXIgPyBtYXBwZXIudG9JbnRlcm5hbE5hbWUobmFtZSkhIDogbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiBubyB0cmFuc2xhdGlvbiBoYXMgYmVlbiBmb3VuZFxuICAgICAgLy8gLSByZXBvcnQgYW4gZXJyb3IgLyBhIHdhcm5pbmcgLyBub3RoaW5nLFxuICAgICAgLy8gLSB1c2UgdGhlIG5vZGVzIGZyb20gdGhlIG9yaWdpbmFsIG1lc3NhZ2VcbiAgICAgIC8vIC0gcGxhY2Vob2xkZXJzIGFyZSBhbHJlYWR5IGludGVybmFsIGFuZCBuZWVkIG5vIG1hcHBlclxuICAgICAgaWYgKHRoaXMuX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID09PSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5FcnJvcikge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9sb2NhbGUgPyBgIGZvciBsb2NhbGUgXCIke3RoaXMuX2xvY2FsZX1cImAgOiAnJztcbiAgICAgICAgdGhpcy5fYWRkRXJyb3Ioc3JjTXNnLm5vZGVzWzBdLCBgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgbWVzc2FnZSBcIiR7aWR9XCIke2N0eH1gKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGhpcy5fY29uc29sZSAmJlxuICAgICAgICAgIHRoaXMuX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID09PSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2xvY2FsZSA/IGAgZm9yIGxvY2FsZSBcIiR7dGhpcy5fbG9jYWxlfVwiYCA6ICcnO1xuICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiJHtjdHh9YCk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IHNyY01zZy5ub2RlcztcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKS5qb2luKCcnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dFN0YWNrLnBvcCgpITtcbiAgICB0aGlzLl9zcmNNc2cgPSBjb250ZXh0Lm1zZztcbiAgICB0aGlzLl9tYXBwZXIgPSBjb250ZXh0Lm1hcHBlcjtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKGVsOiBpMThuLk5vZGUsIG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihlbC5zb3VyY2VTcGFuLCBtc2cpKTtcbiAgfVxufVxuIl19