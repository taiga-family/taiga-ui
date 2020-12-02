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
        define("@angular/compiler/src/i18n/message_bundle", ["require", "exports", "tslib", "@angular/compiler/src/i18n/extractor_merger", "@angular/compiler/src/i18n/i18n_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var extractor_merger_1 = require("@angular/compiler/src/i18n/extractor_merger");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    /**
     * A container for message extracted from the templates.
     */
    var MessageBundle = /** @class */ (function () {
        function MessageBundle(_htmlParser, _implicitTags, _implicitAttrs, _locale) {
            if (_locale === void 0) { _locale = null; }
            this._htmlParser = _htmlParser;
            this._implicitTags = _implicitTags;
            this._implicitAttrs = _implicitAttrs;
            this._locale = _locale;
            this._messages = [];
        }
        MessageBundle.prototype.updateFromTemplate = function (html, url, interpolationConfig) {
            var _a;
            var htmlParserResult = this._htmlParser.parse(html, url, { tokenizeExpansionForms: true, interpolationConfig: interpolationConfig });
            if (htmlParserResult.errors.length) {
                return htmlParserResult.errors;
            }
            var i18nParserResult = extractor_merger_1.extractMessages(htmlParserResult.rootNodes, interpolationConfig, this._implicitTags, this._implicitAttrs);
            if (i18nParserResult.errors.length) {
                return i18nParserResult.errors;
            }
            (_a = this._messages).push.apply(_a, tslib_1.__spread(i18nParserResult.messages));
            return [];
        };
        // Return the message in the internal format
        // The public (serialized) format might be different, see the `write` method.
        MessageBundle.prototype.getMessages = function () {
            return this._messages;
        };
        MessageBundle.prototype.write = function (serializer, filterSources) {
            var messages = {};
            var mapperVisitor = new MapPlaceholderNames();
            // Deduplicate messages based on their ID
            this._messages.forEach(function (message) {
                var _a;
                var id = serializer.digest(message);
                if (!messages.hasOwnProperty(id)) {
                    messages[id] = message;
                }
                else {
                    (_a = messages[id].sources).push.apply(_a, tslib_1.__spread(message.sources));
                }
            });
            // Transform placeholder names using the serializer mapping
            var msgList = Object.keys(messages).map(function (id) {
                var mapper = serializer.createNameMapper(messages[id]);
                var src = messages[id];
                var nodes = mapper ? mapperVisitor.convert(src.nodes, mapper) : src.nodes;
                var transformedMessage = new i18n.Message(nodes, {}, {}, src.meaning, src.description, id);
                transformedMessage.sources = src.sources;
                if (filterSources) {
                    transformedMessage.sources.forEach(function (source) { return source.filePath = filterSources(source.filePath); });
                }
                return transformedMessage;
            });
            return serializer.write(msgList, this._locale);
        };
        return MessageBundle;
    }());
    exports.MessageBundle = MessageBundle;
    // Transform an i18n AST by renaming the placeholder nodes with the given mapper
    var MapPlaceholderNames = /** @class */ (function (_super) {
        tslib_1.__extends(MapPlaceholderNames, _super);
        function MapPlaceholderNames() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MapPlaceholderNames.prototype.convert = function (nodes, mapper) {
            var _this = this;
            return mapper ? nodes.map(function (n) { return n.visit(_this, mapper); }) : nodes;
        };
        MapPlaceholderNames.prototype.visitTagPlaceholder = function (ph, mapper) {
            var _this = this;
            var startName = mapper.toPublicName(ph.startName);
            var closeName = ph.closeName ? mapper.toPublicName(ph.closeName) : ph.closeName;
            var children = ph.children.map(function (n) { return n.visit(_this, mapper); });
            return new i18n.TagPlaceholder(ph.tag, ph.attrs, startName, closeName, children, ph.isVoid, ph.sourceSpan);
        };
        MapPlaceholderNames.prototype.visitPlaceholder = function (ph, mapper) {
            return new i18n.Placeholder(ph.value, mapper.toPublicName(ph.name), ph.sourceSpan);
        };
        MapPlaceholderNames.prototype.visitIcuPlaceholder = function (ph, mapper) {
            return new i18n.IcuPlaceholder(ph.value, mapper.toPublicName(ph.name), ph.sourceSpan);
        };
        return MapPlaceholderNames;
    }(i18n.CloneVisitor));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZV9idW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9tZXNzYWdlX2J1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFNSCxnRkFBbUQ7SUFDbkQsMERBQW1DO0lBSW5DOztPQUVHO0lBQ0g7UUFHRSx1QkFDWSxXQUF1QixFQUFVLGFBQXVCLEVBQ3hELGNBQXVDLEVBQVUsT0FBMkI7WUFBM0Isd0JBQUEsRUFBQSxjQUEyQjtZQUQ1RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1lBQ3hELG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO1lBSmhGLGNBQVMsR0FBbUIsRUFBRSxDQUFDO1FBSW9ELENBQUM7UUFFNUYsMENBQWtCLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXLEVBQUUsbUJBQXdDOztZQUVwRixJQUFNLGdCQUFnQixHQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixxQkFBQSxFQUFDLENBQUMsQ0FBQztZQUUzRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1lBRUQsSUFBTSxnQkFBZ0IsR0FBRyxrQ0FBZSxDQUNwQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFOUYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FB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LEdBb0JsRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtQYXJzZUVycm9yfSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0IHtleHRyYWN0TWVzc2FnZXN9IGZyb20gJy4vZXh0cmFjdG9yX21lcmdlcic7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4vaTE4bl9hc3QnO1xuaW1wb3J0IHtQbGFjZWhvbGRlck1hcHBlciwgU2VyaWFsaXplcn0gZnJvbSAnLi9zZXJpYWxpemVycy9zZXJpYWxpemVyJztcblxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBtZXNzYWdlIGV4dHJhY3RlZCBmcm9tIHRoZSB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVuZGxlIHtcbiAgcHJpdmF0ZSBfbWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9odG1sUGFyc2VyOiBIdG1sUGFyc2VyLCBwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLFxuICAgICAgcHJpdmF0ZSBfaW1wbGljaXRBdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmdbXX0sIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nfG51bGwgPSBudWxsKSB7fVxuXG4gIHVwZGF0ZUZyb21UZW1wbGF0ZShodG1sOiBzdHJpbmcsIHVybDogc3RyaW5nLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTpcbiAgICAgIFBhcnNlRXJyb3JbXSB7XG4gICAgY29uc3QgaHRtbFBhcnNlclJlc3VsdCA9XG4gICAgICAgIHRoaXMuX2h0bWxQYXJzZXIucGFyc2UoaHRtbCwgdXJsLCB7dG9rZW5pemVFeHBhbnNpb25Gb3JtczogdHJ1ZSwgaW50ZXJwb2xhdGlvbkNvbmZpZ30pO1xuXG4gICAgaWYgKGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgIH1cblxuICAgIGNvbnN0IGkxOG5QYXJzZXJSZXN1bHQgPSBleHRyYWN0TWVzc2FnZXMoXG4gICAgICAgIGh0bWxQYXJzZXJSZXN1bHQucm9vdE5vZGVzLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCB0aGlzLl9pbXBsaWNpdFRhZ3MsIHRoaXMuX2ltcGxpY2l0QXR0cnMpO1xuXG4gICAgaWYgKGkxOG5QYXJzZXJSZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGkxOG5QYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgIH1cblxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goLi4uaTE4blBhcnNlclJlc3VsdC5tZXNzYWdlcyk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBtZXNzYWdlIGluIHRoZSBpbnRlcm5hbCBmb3JtYXRcbiAgLy8gVGhlIHB1YmxpYyAoc2VyaWFsaXplZCkgZm9ybWF0IG1pZ2h0IGJlIGRpZmZlcmVudCwgc2VlIHRoZSBgd3JpdGVgIG1ldGhvZC5cbiAgZ2V0TWVzc2FnZXMoKTogaTE4bi5NZXNzYWdlW10ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcztcbiAgfVxuXG4gIHdyaXRlKHNlcmlhbGl6ZXI6IFNlcmlhbGl6ZXIsIGZpbHRlclNvdXJjZXM/OiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lc3NhZ2VzOiB7W2lkOiBzdHJpbmddOiBpMThuLk1lc3NhZ2V9ID0ge307XG4gICAgY29uc3QgbWFwcGVyVmlzaXRvciA9IG5ldyBNYXBQbGFjZWhvbGRlck5hbWVzKCk7XG5cbiAgICAvLyBEZWR1cGxpY2F0ZSBtZXNzYWdlcyBiYXNlZCBvbiB0aGVpciBJRFxuICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHNlcmlhbGl6ZXIuZGlnZXN0KG1lc3NhZ2UpO1xuICAgICAgaWYgKCFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgbWVzc2FnZXNbaWRdID0gbWVzc2FnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VzW2lkXS5zb3VyY2VzLnB1c2goLi4ubWVzc2FnZS5zb3VyY2VzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRyYW5zZm9ybSBwbGFjZWhvbGRlciBuYW1lcyB1c2luZyB0aGUgc2VyaWFsaXplciBtYXBwaW5nXG4gICAgY29uc3QgbXNnTGlzdCA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKS5tYXAoaWQgPT4ge1xuICAgICAgY29uc3QgbWFwcGVyID0gc2VyaWFsaXplci5jcmVhdGVOYW1lTWFwcGVyKG1lc3NhZ2VzW2lkXSk7XG4gICAgICBjb25zdCBzcmMgPSBtZXNzYWdlc1tpZF07XG4gICAgICBjb25zdCBub2RlcyA9IG1hcHBlciA/IG1hcHBlclZpc2l0b3IuY29udmVydChzcmMubm9kZXMsIG1hcHBlcikgOiBzcmMubm9kZXM7XG4gICAgICBsZXQgdHJhbnNmb3JtZWRNZXNzYWdlID0gbmV3IGkxOG4uTWVzc2FnZShub2Rlcywge30sIHt9LCBzcmMubWVhbmluZywgc3JjLmRlc2NyaXB0aW9uLCBpZCk7XG4gICAgICB0cmFuc2Zvcm1lZE1lc3NhZ2Uuc291cmNlcyA9IHNyYy5zb3VyY2VzO1xuICAgICAgaWYgKGZpbHRlclNvdXJjZXMpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRNZXNzYWdlLnNvdXJjZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHNvdXJjZS5maWxlUGF0aCA9IGZpbHRlclNvdXJjZXMoc291cmNlLmZpbGVQYXRoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZWRNZXNzYWdlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIud3JpdGUobXNnTGlzdCwgdGhpcy5fbG9jYWxlKTtcbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm0gYW4gaTE4biBBU1QgYnkgcmVuYW1pbmcgdGhlIHBsYWNlaG9sZGVyIG5vZGVzIHdpdGggdGhlIGdpdmVuIG1hcHBlclxuY2xhc3MgTWFwUGxhY2Vob2xkZXJOYW1lcyBleHRlbmRzIGkxOG4uQ2xvbmVWaXNpdG9yIHtcbiAgY29udmVydChub2RlczogaTE4bi5Ob2RlW10sIG1hcHBlcjogUGxhY2Vob2xkZXJNYXBwZXIpOiBpMThuLk5vZGVbXSB7XG4gICAgcmV0dXJuIG1hcHBlciA/IG5vZGVzLm1hcChuID0+IG4udmlzaXQodGhpcywgbWFwcGVyKSkgOiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIG1hcHBlcjogUGxhY2Vob2xkZXJNYXBwZXIpOiBpMThuLlRhZ1BsYWNlaG9sZGVyIHtcbiAgICBjb25zdCBzdGFydE5hbWUgPSBtYXBwZXIudG9QdWJsaWNOYW1lKHBoLnN0YXJ0TmFtZSkhO1xuICAgIGNvbnN0IGNsb3NlTmFtZSA9IHBoLmNsb3NlTmFtZSA/IG1hcHBlci50b1B1YmxpY05hbWUocGguY2xvc2VOYW1lKSEgOiBwaC5jbG9zZU5hbWU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIG1hcHBlcikpO1xuICAgIHJldHVybiBuZXcgaTE4bi5UYWdQbGFjZWhvbGRlcihcbiAgICAgICAgcGgudGFnLCBwaC5hdHRycywgc3RhcnROYW1lLCBjbG9zZU5hbWUsIGNoaWxkcmVuLCBwaC5pc1ZvaWQsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcihwaC52YWx1ZSwgbWFwcGVyLnRvUHVibGljTmFtZShwaC5uYW1lKSEsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uSWN1UGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgaTE4bi5JY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgbWFwcGVyLnRvUHVibGljTmFtZShwaC5uYW1lKSEsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG59XG4iXX0=