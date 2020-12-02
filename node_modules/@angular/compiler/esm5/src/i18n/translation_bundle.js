/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { MissingTranslationStrategy } from '../core';
import { HtmlParser } from '../ml_parser/html_parser';
import { I18nError } from './parse_util';
import { escapeXml } from './serializers/xml_helper';
/**
 * A container for translated messages
 */
var TranslationBundle = /** @class */ (function () {
    function TranslationBundle(_i18nNodesByMsgId, locale, digest, mapperFactory, missingTranslationStrategy, console) {
        if (_i18nNodesByMsgId === void 0) { _i18nNodesByMsgId = {}; }
        if (missingTranslationStrategy === void 0) { missingTranslationStrategy = MissingTranslationStrategy.Warning; }
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
export { TranslationBundle };
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
        var html = new HtmlParser().parse(text, url, { tokenizeExpansionForms: true });
        return {
            nodes: html.rootNodes,
            errors: __spread(this._errors, html.errors),
        };
    };
    I18nToHtmlVisitor.prototype.visitText = function (text, context) {
        // `convert()` uses an `HtmlParser` to return `html.Node`s
        // we should then make sure that any special characters are escaped
        return escapeXml(text.value);
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
            if (this._missingTranslationStrategy === MissingTranslationStrategy.Error) {
                var ctx = this._locale ? " for locale \"" + this._locale + "\"" : '';
                this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"" + ctx);
            }
            else if (this._console &&
                this._missingTranslationStrategy === MissingTranslationStrategy.Warning) {
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
        this._errors.push(new I18nError(el.sourceSpan, msg));
    };
    return I18nToHtmlVisitor;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vdHJhbnNsYXRpb25fYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFbkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBSXBELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBR25EOztHQUVHO0FBQ0g7SUFHRSwyQkFDWSxpQkFBc0QsRUFBRSxNQUFtQixFQUM1RSxNQUFtQyxFQUNuQyxhQUFzRCxFQUM3RCwwQkFBMkYsRUFDM0YsT0FBaUI7UUFKVCxrQ0FBQSxFQUFBLHNCQUFzRDtRQUc5RCwyQ0FBQSxFQUFBLDZCQUF5RCwwQkFBMEIsQ0FBQyxPQUFPO1FBSG5GLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdkQsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBRy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FDcEMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFjLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELHNGQUFzRjtJQUMvRSxzQkFBSSxHQUFYLFVBQ0ksT0FBZSxFQUFFLEdBQVcsRUFBRSxVQUFzQixFQUNwRCwwQkFBc0QsRUFDdEQsT0FBaUI7UUFDYixJQUFBLGtDQUEwRCxFQUF6RCxrQkFBTSxFQUFFLHNDQUFpRCxDQUFDO1FBQ2pFLElBQU0sUUFBUSxHQUFHLFVBQUMsQ0FBZSxJQUFLLE9B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QUFJLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF2SUQsSUF1SUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3l9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuLi9tbF9wYXJzZXIvYXN0JztcbmltcG9ydCB7SHRtbFBhcnNlcn0gZnJvbSAnLi4vbWxfcGFyc2VyL2h0bWxfcGFyc2VyJztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi9pMThuX2FzdCc7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7UGxhY2Vob2xkZXJNYXBwZXIsIFNlcmlhbGl6ZXJ9IGZyb20gJy4vc2VyaWFsaXplcnMvc2VyaWFsaXplcic7XG5pbXBvcnQge2VzY2FwZVhtbH0gZnJvbSAnLi9zZXJpYWxpemVycy94bWxfaGVscGVyJztcblxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciB0cmFuc2xhdGVkIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIHByaXZhdGUgX2kxOG5Ub0h0bWw6IEkxOG5Ub0h0bWxWaXNpdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sIGxvY2FsZTogc3RyaW5nfG51bGwsXG4gICAgICBwdWJsaWMgZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgICBwdWJsaWMgbWFwcGVyRmFjdG9yeT86IChtOiBpMThuLk1lc3NhZ2UpID0+IFBsYWNlaG9sZGVyTWFwcGVyLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZyxcbiAgICAgIGNvbnNvbGU/OiBDb25zb2xlKSB7XG4gICAgdGhpcy5faTE4blRvSHRtbCA9IG5ldyBJMThuVG9IdG1sVmlzaXRvcihcbiAgICAgICAgX2kxOG5Ob2Rlc0J5TXNnSWQsIGxvY2FsZSwgZGlnZXN0LCBtYXBwZXJGYWN0b3J5ISwgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksIGNvbnNvbGUpO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyBhIGBUcmFuc2xhdGlvbkJ1bmRsZWAgYnkgcGFyc2luZyB0aGUgZ2l2ZW4gYGNvbnRlbnRgIHdpdGggdGhlIGBzZXJpYWxpemVyYC5cbiAgc3RhdGljIGxvYWQoXG4gICAgICBjb250ZW50OiBzdHJpbmcsIHVybDogc3RyaW5nLCBzZXJpYWxpemVyOiBTZXJpYWxpemVyLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgICAgY29uc29sZT86IENvbnNvbGUpOiBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gICAgY29uc3Qge2xvY2FsZSwgaTE4bk5vZGVzQnlNc2dJZH0gPSBzZXJpYWxpemVyLmxvYWQoY29udGVudCwgdXJsKTtcbiAgICBjb25zdCBkaWdlc3RGbiA9IChtOiBpMThuLk1lc3NhZ2UpID0+IHNlcmlhbGl6ZXIuZGlnZXN0KG0pO1xuICAgIGNvbnN0IG1hcHBlckZhY3RvcnkgPSAobTogaTE4bi5NZXNzYWdlKSA9PiBzZXJpYWxpemVyLmNyZWF0ZU5hbWVNYXBwZXIobSkhO1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25CdW5kbGUoXG4gICAgICAgIGkxOG5Ob2Rlc0J5TXNnSWQsIGxvY2FsZSwgZGlnZXN0Rm4sIG1hcHBlckZhY3RvcnksIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LCBjb25zb2xlKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGFzIEhUTUwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gc291cmNlIG1lc3NhZ2UuXG4gIGdldChzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IGh0bWwuTm9kZVtdIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5faTE4blRvSHRtbC5jb252ZXJ0KHNyY01zZyk7XG5cbiAgICBpZiAoaHRtbC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoaHRtbC5lcnJvcnMuam9pbignXFxuJykpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sLm5vZGVzO1xuICB9XG5cbiAgaGFzKHNyY01zZzogaTE4bi5NZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlnZXN0KHNyY01zZykgaW4gdGhpcy5faTE4bk5vZGVzQnlNc2dJZDtcbiAgfVxufVxuXG5jbGFzcyBJMThuVG9IdG1sVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9zcmNNc2chOiBpMThuLk1lc3NhZ2U7XG4gIHByaXZhdGUgX2NvbnRleHRTdGFjazoge21zZzogaTE4bi5NZXNzYWdlLCBtYXBwZXI6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZ31bXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdID0gW107XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9tYXBwZXIhOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9pMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSwgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmd8bnVsbCxcbiAgICAgIHByaXZhdGUgX2RpZ2VzdDogKG06IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgICAgcHJpdmF0ZSBfbWFwcGVyRmFjdG9yeTogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgICBwcml2YXRlIF9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksIHByaXZhdGUgX2NvbnNvbGU/OiBDb25zb2xlKSB7XG4gIH1cblxuICBjb252ZXJ0KHNyY01zZzogaTE4bi5NZXNzYWdlKToge25vZGVzOiBodG1sLk5vZGVbXSwgZXJyb3JzOiBJMThuRXJyb3JbXX0ge1xuICAgIHRoaXMuX2NvbnRleHRTdGFjay5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPSAwO1xuXG4gICAgLy8gaTE4biB0byB0ZXh0XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuX2NvbnZlcnRUb1RleHQoc3JjTXNnKTtcblxuICAgIC8vIHRleHQgdG8gaHRtbFxuICAgIGNvbnN0IHVybCA9IHNyY01zZy5ub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsO1xuICAgIGNvbnN0IGh0bWwgPSBuZXcgSHRtbFBhcnNlcigpLnBhcnNlKHRleHQsIHVybCwge3Rva2VuaXplRXhwYW5zaW9uRm9ybXM6IHRydWV9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBub2RlczogaHRtbC5yb290Tm9kZXMsXG4gICAgICBlcnJvcnM6IFsuLi50aGlzLl9lcnJvcnMsIC4uLmh0bWwuZXJyb3JzXSxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gYGNvbnZlcnQoKWAgdXNlcyBhbiBgSHRtbFBhcnNlcmAgdG8gcmV0dXJuIGBodG1sLk5vZGVgc1xuICAgIC8vIHdlIHNob3VsZCB0aGVuIG1ha2Ugc3VyZSB0aGF0IGFueSBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGVzY2FwZWRcbiAgICByZXR1cm4gZXNjYXBlWG1sKHRleHQudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoayA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuXG4gICAgLy8gVE9ETyh2aWNiKTogT25jZSBhbGwgZm9ybWF0IHN3aXRjaCB0byB1c2luZyBleHByZXNzaW9uIHBsYWNlaG9sZGVyc1xuICAgIC8vIHdlIHNob3VsZCB0aHJvdyB3aGVuIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgaW4gdGhlIHNvdXJjZSBtZXNzYWdlXG4gICAgY29uc3QgZXhwID0gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShpY3UuZXhwcmVzc2lvbikgP1xuICAgICAgICB0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzW2ljdS5leHByZXNzaW9uXSA6XG4gICAgICAgIGljdS5leHByZXNzaW9uO1xuXG4gICAgcmV0dXJuIGB7JHtleHB9LCAke2ljdS50eXBlfSwgJHtjYXNlcy5qb2luKCcgJyl9fWA7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9tYXBwZXIocGgubmFtZSk7XG4gICAgaWYgKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnMuaGFzT3duUHJvcGVydHkocGhOYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbcGhOYW1lXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlLmhhc093blByb3BlcnR5KHBoTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaE5hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRFcnJvcihwaCwgYFVua25vd24gcGxhY2Vob2xkZXIgXCIke3BoLm5hbWV9XCJgKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFnID0gYCR7cGgudGFnfWA7XG4gICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhwaC5hdHRycykubWFwKG5hbWUgPT4gYCR7bmFtZX09XCIke3BoLmF0dHJzW25hbWVdfVwiYCkuam9pbignICcpO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfS8+YDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAoKGM6IGkxOG4uTm9kZSkgPT4gYy52aXNpdCh0aGlzKSkuam9pbignJyk7XG4gICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9PiR7Y2hpbGRyZW59PC8ke3RhZ30+YDtcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBBbiBJQ1UgcGxhY2Vob2xkZXIgcmVmZXJlbmNlcyB0aGUgc291cmNlIG1lc3NhZ2UgdG8gYmUgc2VyaWFsaXplZFxuICAgIHJldHVybiB0aGlzLl9jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaC5uYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIHNvdXJjZSBtZXNzYWdlIHRvIGEgdHJhbnNsYXRlZCB0ZXh0IHN0cmluZzpcbiAgICogLSB0ZXh0IG5vZGVzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIHRyYW5zbGF0aW9uLFxuICAgKiAtIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciBjb250ZW50LFxuICAgKiAtIElDVSBub2RlcyBhcmUgY29udmVydGVkIHRvIElDVSBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgX2NvbnZlcnRUb1RleHQoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fZGlnZXN0KHNyY01zZyk7XG4gICAgY29uc3QgbWFwcGVyID0gdGhpcy5fbWFwcGVyRmFjdG9yeSA/IHRoaXMuX21hcHBlckZhY3Rvcnkoc3JjTXNnKSA6IG51bGw7XG4gICAgbGV0IG5vZGVzOiBpMThuLk5vZGVbXTtcblxuICAgIHRoaXMuX2NvbnRleHRTdGFjay5wdXNoKHttc2c6IHRoaXMuX3NyY01zZywgbWFwcGVyOiB0aGlzLl9tYXBwZXJ9KTtcbiAgICB0aGlzLl9zcmNNc2cgPSBzcmNNc2c7XG5cbiAgICBpZiAodGhpcy5faTE4bk5vZGVzQnlNc2dJZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSB0cmFuc2xhdGlvbiB1c2UgaXRzIG5vZGVzIGFzIHRoZSBzb3VyY2VcbiAgICAgIC8vIEFuZCBjcmVhdGUgYSBtYXBwZXIgdG8gY29udmVydCBzZXJpYWxpemVkIHBsYWNlaG9sZGVyIG5hbWVzIHRvIGludGVybmFsIG5hbWVzXG4gICAgICBub2RlcyA9IHRoaXMuX2kxOG5Ob2Rlc0J5TXNnSWRbaWRdO1xuICAgICAgdGhpcy5fbWFwcGVyID0gKG5hbWU6IHN0cmluZykgPT4gbWFwcGVyID8gbWFwcGVyLnRvSW50ZXJuYWxOYW1lKG5hbWUpISA6IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gbm8gdHJhbnNsYXRpb24gaGFzIGJlZW4gZm91bmRcbiAgICAgIC8vIC0gcmVwb3J0IGFuIGVycm9yIC8gYSB3YXJuaW5nIC8gbm90aGluZyxcbiAgICAgIC8vIC0gdXNlIHRoZSBub2RlcyBmcm9tIHRoZSBvcmlnaW5hbCBtZXNzYWdlXG4gICAgICAvLyAtIHBsYWNlaG9sZGVycyBhcmUgYWxyZWFkeSBpbnRlcm5hbCBhbmQgbmVlZCBubyBtYXBwZXJcbiAgICAgIGlmICh0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuRXJyb3IpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fbG9jYWxlID8gYCBmb3IgbG9jYWxlIFwiJHt0aGlzLl9sb2NhbGV9XCJgIDogJyc7XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKHNyY01zZy5ub2Rlc1swXSwgYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiJHtjdHh9YCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHRoaXMuX2NvbnNvbGUgJiZcbiAgICAgICAgICB0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZykge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9sb2NhbGUgPyBgIGZvciBsb2NhbGUgXCIke3RoaXMuX2xvY2FsZX1cImAgOiAnJztcbiAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBtZXNzYWdlIFwiJHtpZH1cIiR7Y3R4fWApO1xuICAgICAgfVxuICAgICAgbm9kZXMgPSBzcmNNc2cubm9kZXM7XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiBuYW1lO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gbm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkuam9pbignJyk7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHRTdGFjay5wb3AoKSE7XG4gICAgdGhpcy5fc3JjTXNnID0gY29udGV4dC5tc2c7XG4gICAgdGhpcy5fbWFwcGVyID0gY29udGV4dC5tYXBwZXI7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFcnJvcihlbDogaTE4bi5Ob2RlLCBtc2c6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3IoZWwuc291cmNlU3BhbiwgbXNnKSk7XG4gIH1cbn1cbiJdfQ==