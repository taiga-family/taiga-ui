/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { extractMessages } from './extractor_merger';
import * as i18n from './i18n_ast';
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
        var i18nParserResult = extractMessages(htmlParserResult.rootNodes, interpolationConfig, this._implicitTags, this._implicitAttrs);
        if (i18nParserResult.errors.length) {
            return i18nParserResult.errors;
        }
        (_a = this._messages).push.apply(_a, __spread(i18nParserResult.messages));
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
                (_a = messages[id].sources).push.apply(_a, __spread(message.sources));
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
export { MessageBundle };
// Transform an i18n AST by renaming the placeholder nodes with the given mapper
var MapPlaceholderNames = /** @class */ (function (_super) {
    __extends(MapPlaceholderNames, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZV9idW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9tZXNzYWdlX2J1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBTUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DOztHQUVHO0FBQ0g7SUFHRSx1QkFDWSxXQUF1QixFQUFVLGFBQXVCLEVBQ3hELGNBQXVDLEVBQVUsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxjQUEyQjtRQUQ1RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1FBQ3hELG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBSmhGLGNBQVMsR0FBbUIsRUFBRSxDQUFDO0lBSW9ELENBQUM7SUFFNUYsMENBQWtCLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXLEVBQUUsbUJBQXdDOztRQUVwRixJQUFNLGdCQUFnQixHQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixxQkFBQSxFQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7U0FDaEM7UUFFRCxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FDcEMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUNoQztRQUVELENBQUEsS0FBQSxJQUFJLENBQUMsU0FBUyxDQUFBLENBQUMsSUFBSSxvQkFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUU7UUFDbEQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLDZFQUE2RTtJQUM3RSxtQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sVUFBc0IsRUFBRSxhQUF3QztRQUNwRSxJQUFNLFFBQVEsR0FBaUMsRUFBRSxDQUFDO1FBQ2xELElBQU0sYUFBYSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUVoRCx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPOztZQUM1QixJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNoQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLENBQUEsS0FBQSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFBLENBQUMsSUFBSSxvQkFBSSxPQUFPLENBQUMsT0FBTyxHQUFFO2FBQy9DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCwyREFBMkQ7UUFDM0QsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFO1lBQzFDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pDLElBQUksYUFBYSxFQUFFO2dCQUNqQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUM5QixVQUFDLE1BQXdCLElBQUssT0FBQSxNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQzthQUNyRjtZQUNELE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDOztBQUVELGdGQUFnRjtBQUNoRjtJQUFrQyx1Q0FBaUI7SUFBbkQ7O0lBb0JBLENBQUM7SUFuQkMscUNBQU8sR0FBUCxVQUFRLEtBQWtCLEVBQUUsTUFBeUI7UUFBckQsaUJBRUM7UUFEQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBRUQsaURBQW1CLEdBQW5CLFVBQW9CLEVBQXVCLEVBQUUsTUFBeUI7UUFBdEUsaUJBTUM7UUFMQyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUNyRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNuRixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLEVBQW9CLEVBQUUsTUFBeUI7UUFDOUQsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGlEQUFtQixHQUFuQixVQUFvQixFQUF1QixFQUFFLE1BQXlCO1FBQ3BFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBa0MsSUFBSSxDQUFDLFlBQVksR0FvQmxEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge1BhcnNlRXJyb3J9IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5pbXBvcnQge2V4dHJhY3RNZXNzYWdlc30gZnJvbSAnLi9leHRyYWN0b3JfbWVyZ2VyJztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi9pMThuX2FzdCc7XG5pbXBvcnQge1BsYWNlaG9sZGVyTWFwcGVyLCBTZXJpYWxpemVyfSBmcm9tICcuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXInO1xuXG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIG1lc3NhZ2UgZXh0cmFjdGVkIGZyb20gdGhlIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdW5kbGUge1xuICBwcml2YXRlIF9tZXNzYWdlczogaTE4bi5NZXNzYWdlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2h0bWxQYXJzZXI6IEh0bWxQYXJzZXIsIHByaXZhdGUgX2ltcGxpY2l0VGFnczogc3RyaW5nW10sXG4gICAgICBwcml2YXRlIF9pbXBsaWNpdEF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ1tdfSwgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmd8bnVsbCA9IG51bGwpIHt9XG5cbiAgdXBkYXRlRnJvbVRlbXBsYXRlKGh0bWw6IHN0cmluZywgdXJsOiBzdHJpbmcsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOlxuICAgICAgUGFyc2VFcnJvcltdIHtcbiAgICBjb25zdCBodG1sUGFyc2VyUmVzdWx0ID1cbiAgICAgICAgdGhpcy5faHRtbFBhcnNlci5wYXJzZShodG1sLCB1cmwsIHt0b2tlbml6ZUV4cGFuc2lvbkZvcm1zOiB0cnVlLCBpbnRlcnBvbGF0aW9uQ29uZmlnfSk7XG5cbiAgICBpZiAoaHRtbFBhcnNlclJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaHRtbFBhcnNlclJlc3VsdC5lcnJvcnM7XG4gICAgfVxuXG4gICAgY29uc3QgaTE4blBhcnNlclJlc3VsdCA9IGV4dHJhY3RNZXNzYWdlcyhcbiAgICAgICAgaHRtbFBhcnNlclJlc3VsdC5yb290Tm9kZXMsIGludGVycG9sYXRpb25Db25maWcsIHRoaXMuX2ltcGxpY2l0VGFncywgdGhpcy5faW1wbGljaXRBdHRycyk7XG5cbiAgICBpZiAoaTE4blBhcnNlclJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaTE4blBhcnNlclJlc3VsdC5lcnJvcnM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCguLi5pMThuUGFyc2VyUmVzdWx0Lm1lc3NhZ2VzKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIG1lc3NhZ2UgaW4gdGhlIGludGVybmFsIGZvcm1hdFxuICAvLyBUaGUgcHVibGljIChzZXJpYWxpemVkKSBmb3JtYXQgbWlnaHQgYmUgZGlmZmVyZW50LCBzZWUgdGhlIGB3cml0ZWAgbWV0aG9kLlxuICBnZXRNZXNzYWdlcygpOiBpMThuLk1lc3NhZ2VbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzO1xuICB9XG5cbiAgd3JpdGUoc2VyaWFsaXplcjogU2VyaWFsaXplciwgZmlsdGVyU291cmNlcz86IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVzc2FnZXM6IHtbaWQ6IHN0cmluZ106IGkxOG4uTWVzc2FnZX0gPSB7fTtcbiAgICBjb25zdCBtYXBwZXJWaXNpdG9yID0gbmV3IE1hcFBsYWNlaG9sZGVyTmFtZXMoKTtcblxuICAgIC8vIERlZHVwbGljYXRlIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZWlyIElEXG4gICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgIGNvbnN0IGlkID0gc2VyaWFsaXplci5kaWdlc3QobWVzc2FnZSk7XG4gICAgICBpZiAoIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICBtZXNzYWdlc1tpZF0gPSBtZXNzYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXNbaWRdLnNvdXJjZXMucHVzaCguLi5tZXNzYWdlLnNvdXJjZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVHJhbnNmb3JtIHBsYWNlaG9sZGVyIG5hbWVzIHVzaW5nIHRoZSBzZXJpYWxpemVyIG1hcHBpbmdcbiAgICBjb25zdCBtc2dMaXN0ID0gT2JqZWN0LmtleXMobWVzc2FnZXMpLm1hcChpZCA9PiB7XG4gICAgICBjb25zdCBtYXBwZXIgPSBzZXJpYWxpemVyLmNyZWF0ZU5hbWVNYXBwZXIobWVzc2FnZXNbaWRdKTtcbiAgICAgIGNvbnN0IHNyYyA9IG1lc3NhZ2VzW2lkXTtcbiAgICAgIGNvbnN0IG5vZGVzID0gbWFwcGVyID8gbWFwcGVyVmlzaXRvci5jb252ZXJ0KHNyYy5ub2RlcywgbWFwcGVyKSA6IHNyYy5ub2RlcztcbiAgICAgIGxldCB0cmFuc2Zvcm1lZE1lc3NhZ2UgPSBuZXcgaTE4bi5NZXNzYWdlKG5vZGVzLCB7fSwge30sIHNyYy5tZWFuaW5nLCBzcmMuZGVzY3JpcHRpb24sIGlkKTtcbiAgICAgIHRyYW5zZm9ybWVkTWVzc2FnZS5zb3VyY2VzID0gc3JjLnNvdXJjZXM7XG4gICAgICBpZiAoZmlsdGVyU291cmNlcykge1xuICAgICAgICB0cmFuc2Zvcm1lZE1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4gc291cmNlLmZpbGVQYXRoID0gZmlsdGVyU291cmNlcyhzb3VyY2UuZmlsZVBhdGgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2Zvcm1lZE1lc3NhZ2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXplci53cml0ZShtc2dMaXN0LCB0aGlzLl9sb2NhbGUpO1xuICB9XG59XG5cbi8vIFRyYW5zZm9ybSBhbiBpMThuIEFTVCBieSByZW5hbWluZyB0aGUgcGxhY2Vob2xkZXIgbm9kZXMgd2l0aCB0aGUgZ2l2ZW4gbWFwcGVyXG5jbGFzcyBNYXBQbGFjZWhvbGRlck5hbWVzIGV4dGVuZHMgaTE4bi5DbG9uZVZpc2l0b3Ige1xuICBjb252ZXJ0KG5vZGVzOiBpMThuLk5vZGVbXSwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uTm9kZVtdIHtcbiAgICByZXR1cm4gbWFwcGVyID8gbm9kZXMubWFwKG4gPT4gbi52aXNpdCh0aGlzLCBtYXBwZXIpKSA6IG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uVGFnUGxhY2Vob2xkZXIge1xuICAgIGNvbnN0IHN0YXJ0TmFtZSA9IG1hcHBlci50b1B1YmxpY05hbWUocGguc3RhcnROYW1lKSE7XG4gICAgY29uc3QgY2xvc2VOYW1lID0gcGguY2xvc2VOYW1lID8gbWFwcGVyLnRvUHVibGljTmFtZShwaC5jbG9zZU5hbWUpISA6IHBoLmNsb3NlTmFtZTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgbWFwcGVyKSk7XG4gICAgcmV0dXJuIG5ldyBpMThuLlRhZ1BsYWNlaG9sZGVyKFxuICAgICAgICBwaC50YWcsIHBoLmF0dHJzLCBzdGFydE5hbWUsIGNsb3NlTmFtZSwgY2hpbGRyZW4sIHBoLmlzVm9pZCwgcGguc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBtYXBwZXI6IFBsYWNlaG9sZGVyTWFwcGVyKTogaTE4bi5QbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKHBoLnZhbHVlLCBtYXBwZXIudG9QdWJsaWNOYW1lKHBoLm5hbWUpISwgcGguc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBtYXBwZXI6IFBsYWNlaG9sZGVyTWFwcGVyKTogaTE4bi5JY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBpMThuLkljdVBsYWNlaG9sZGVyKHBoLnZhbHVlLCBtYXBwZXIudG9QdWJsaWNOYW1lKHBoLm5hbWUpISwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cbiJdfQ==