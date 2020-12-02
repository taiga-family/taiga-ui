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
        define("@angular/compiler/src/i18n/i18n_parser", ["require", "exports", "@angular/compiler/src/expression_parser/lexer", "@angular/compiler/src/expression_parser/parser", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/html_tags", "@angular/compiler/src/i18n/i18n_ast", "@angular/compiler/src/i18n/serializers/placeholder"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lexer_1 = require("@angular/compiler/src/expression_parser/lexer");
    var parser_1 = require("@angular/compiler/src/expression_parser/parser");
    var html = require("@angular/compiler/src/ml_parser/ast");
    var html_tags_1 = require("@angular/compiler/src/ml_parser/html_tags");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var placeholder_1 = require("@angular/compiler/src/i18n/serializers/placeholder");
    var _expParser = new parser_1.Parser(new lexer_1.Lexer());
    /**
     * Returns a function converting html nodes to an i18n Message given an interpolationConfig
     */
    function createI18nMessageFactory(interpolationConfig) {
        var visitor = new _I18nVisitor(_expParser, interpolationConfig);
        return function (nodes, meaning, description, customId, visitNodeFn) {
            return visitor.toI18nMessage(nodes, meaning, description, customId, visitNodeFn);
        };
    }
    exports.createI18nMessageFactory = createI18nMessageFactory;
    function noopVisitNodeFn(_html, i18n) {
        return i18n;
    }
    var _I18nVisitor = /** @class */ (function () {
        function _I18nVisitor(_expressionParser, _interpolationConfig) {
            this._expressionParser = _expressionParser;
            this._interpolationConfig = _interpolationConfig;
        }
        _I18nVisitor.prototype.toI18nMessage = function (nodes, meaning, description, customId, visitNodeFn) {
            if (meaning === void 0) { meaning = ''; }
            if (description === void 0) { description = ''; }
            if (customId === void 0) { customId = ''; }
            var context = {
                isIcu: nodes.length == 1 && nodes[0] instanceof html.Expansion,
                icuDepth: 0,
                placeholderRegistry: new placeholder_1.PlaceholderRegistry(),
                placeholderToContent: {},
                placeholderToMessage: {},
                visitNodeFn: visitNodeFn || noopVisitNodeFn,
            };
            var i18nodes = html.visitAll(this, nodes, context);
            return new i18n.Message(i18nodes, context.placeholderToContent, context.placeholderToMessage, meaning, description, customId);
        };
        _I18nVisitor.prototype.visitElement = function (el, context) {
            var children = html.visitAll(this, el.children, context);
            var attrs = {};
            el.attrs.forEach(function (attr) {
                // Do not visit the attributes, translatable ones are top-level ASTs
                attrs[attr.name] = attr.value;
            });
            var isVoid = html_tags_1.getHtmlTagDefinition(el.name).isVoid;
            var startPhName = context.placeholderRegistry.getStartTagPlaceholderName(el.name, attrs, isVoid);
            context.placeholderToContent[startPhName] = el.sourceSpan.toString();
            var closePhName = '';
            if (!isVoid) {
                closePhName = context.placeholderRegistry.getCloseTagPlaceholderName(el.name);
                context.placeholderToContent[closePhName] = "</" + el.name + ">";
            }
            var node = new i18n.TagPlaceholder(el.name, attrs, startPhName, closePhName, children, isVoid, el.sourceSpan);
            return context.visitNodeFn(el, node);
        };
        _I18nVisitor.prototype.visitAttribute = function (attribute, context) {
            var node = this._visitTextWithInterpolation(attribute.value, attribute.sourceSpan, context);
            return context.visitNodeFn(attribute, node);
        };
        _I18nVisitor.prototype.visitText = function (text, context) {
            var node = this._visitTextWithInterpolation(text.value, text.sourceSpan, context);
            return context.visitNodeFn(text, node);
        };
        _I18nVisitor.prototype.visitComment = function (comment, context) {
            return null;
        };
        _I18nVisitor.prototype.visitExpansion = function (icu, context) {
            var _this = this;
            context.icuDepth++;
            var i18nIcuCases = {};
            var i18nIcu = new i18n.Icu(icu.switchValue, icu.type, i18nIcuCases, icu.sourceSpan);
            icu.cases.forEach(function (caze) {
                i18nIcuCases[caze.value] = new i18n.Container(caze.expression.map(function (node) { return node.visit(_this, context); }), caze.expSourceSpan);
            });
            context.icuDepth--;
            if (context.isIcu || context.icuDepth > 0) {
                // Returns an ICU node when:
                // - the message (vs a part of the message) is an ICU message, or
                // - the ICU message is nested.
                var expPh = context.placeholderRegistry.getUniquePlaceholder("VAR_" + icu.type);
                i18nIcu.expressionPlaceholder = expPh;
                context.placeholderToContent[expPh] = icu.switchValue;
                return context.visitNodeFn(icu, i18nIcu);
            }
            // Else returns a placeholder
            // ICU placeholders should not be replaced with their original content but with the their
            // translations.
            // TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
            var phName = context.placeholderRegistry.getPlaceholderName('ICU', icu.sourceSpan.toString());
            context.placeholderToMessage[phName] = this.toI18nMessage([icu], '', '', '', undefined);
            var node = new i18n.IcuPlaceholder(i18nIcu, phName, icu.sourceSpan);
            return context.visitNodeFn(icu, node);
        };
        _I18nVisitor.prototype.visitExpansionCase = function (_icuCase, _context) {
            throw new Error('Unreachable code');
        };
        _I18nVisitor.prototype._visitTextWithInterpolation = function (text, sourceSpan, context) {
            var splitInterpolation = this._expressionParser.splitInterpolation(text, sourceSpan.start.toString(), this._interpolationConfig);
            if (!splitInterpolation) {
                // No expression, return a single text
                return new i18n.Text(text, sourceSpan);
            }
            // Return a group of text + expressions
            var nodes = [];
            var container = new i18n.Container(nodes, sourceSpan);
            var _a = this._interpolationConfig, sDelimiter = _a.start, eDelimiter = _a.end;
            for (var i = 0; i < splitInterpolation.strings.length - 1; i++) {
                var expression = splitInterpolation.expressions[i];
                var baseName = _extractPlaceholderName(expression) || 'INTERPOLATION';
                var phName = context.placeholderRegistry.getPlaceholderName(baseName, expression);
                if (splitInterpolation.strings[i].length) {
                    // No need to add empty strings
                    nodes.push(new i18n.Text(splitInterpolation.strings[i], sourceSpan));
                }
                nodes.push(new i18n.Placeholder(expression, phName, sourceSpan));
                context.placeholderToContent[phName] = sDelimiter + expression + eDelimiter;
            }
            // The last index contains no expression
            var lastStringIdx = splitInterpolation.strings.length - 1;
            if (splitInterpolation.strings[lastStringIdx].length) {
                nodes.push(new i18n.Text(splitInterpolation.strings[lastStringIdx], sourceSpan));
            }
            return container;
        };
        return _I18nVisitor;
    }());
    var _CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
    function _extractPlaceholderName(input) {
        return input.split(_CUSTOM_PH_EXP)[2];
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9pMThuX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHVFQUFvRTtJQUNwRSx5RUFBdUU7SUFDdkUsMERBQXlDO0lBQ3pDLHVFQUE0RDtJQUk1RCwwREFBbUM7SUFDbkMsa0ZBQThEO0lBRTlELElBQU0sVUFBVSxHQUFHLElBQUksZUFBZ0IsQ0FBQyxJQUFJLGFBQWUsRUFBRSxDQUFDLENBQUM7SUFTL0Q7O09BRUc7SUFDSCxTQUFnQix3QkFBd0IsQ0FBQyxtQkFBd0M7UUFFL0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDbEUsT0FBTyxVQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXO1lBQy9DLE9BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO1FBQXpFLENBQXlFLENBQUM7SUFDdkYsQ0FBQztJQUxELDREQUtDO0lBV0QsU0FBUyxlQUFlLENBQUMsS0FBZ0IsRUFBRSxJQUFlO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEO1FBQ0Usc0JBQ1ksaUJBQW1DLEVBQ25DLG9CQUF5QztZQUR6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1lBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFBRyxDQUFDO1FBRWxELG9DQUFhLEdBQXBCLFVBQ0ksS0FBa0IsRUFBRSxPQUFZLEVBQUUsV0FBZ0IsRUFBRSxRQUFhLEVBQ2pFLFdBQWtDO1lBRGQsd0JBQUEsRUFBQSxZQUFZO1lBQUUsNEJBQUEsRUFBQSxnQkFBZ0I7WUFB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QUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzVELElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEY7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBcklELElBcUlDO0lBRUQsSUFBTSxjQUFjLEdBQ2hCLDZFQUE2RSxDQUFDO0lBRWxGLFNBQVMsdUJBQXVCLENBQUMsS0FBYTtRQUM1QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtMZXhlciBhcyBFeHByZXNzaW9uTGV4ZXJ9IGZyb20gJy4uL2V4cHJlc3Npb25fcGFyc2VyL2xleGVyJztcbmltcG9ydCB7UGFyc2VyIGFzIEV4cHJlc3Npb25QYXJzZXJ9IGZyb20gJy4uL2V4cHJlc3Npb25fcGFyc2VyL3BhcnNlcic7XG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4uL21sX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi4vbWxfcGFyc2VyL2h0bWxfdGFncyc7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi9pMThuX2FzdCc7XG5pbXBvcnQge1BsYWNlaG9sZGVyUmVnaXN0cnl9IGZyb20gJy4vc2VyaWFsaXplcnMvcGxhY2Vob2xkZXInO1xuXG5jb25zdCBfZXhwUGFyc2VyID0gbmV3IEV4cHJlc3Npb25QYXJzZXIobmV3IEV4cHJlc3Npb25MZXhlcigpKTtcblxuZXhwb3J0IHR5cGUgVmlzaXROb2RlRm4gPSAoaHRtbDogaHRtbC5Ob2RlLCBpMThuOiBpMThuLk5vZGUpID0+IGkxOG4uTm9kZTtcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTWVzc2FnZUZhY3Rvcnkge1xuICAobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmd8dW5kZWZpbmVkLCBkZXNjcmlwdGlvbjogc3RyaW5nfHVuZGVmaW5lZCxcbiAgIGN1c3RvbUlkOiBzdHJpbmd8dW5kZWZpbmVkLCB2aXNpdE5vZGVGbj86IFZpc2l0Tm9kZUZuKTogaTE4bi5NZXNzYWdlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBjb252ZXJ0aW5nIGh0bWwgbm9kZXMgdG8gYW4gaTE4biBNZXNzYWdlIGdpdmVuIGFuIGludGVycG9sYXRpb25Db25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTpcbiAgICBJMThuTWVzc2FnZUZhY3Rvcnkge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IF9JMThuVmlzaXRvcihfZXhwUGFyc2VyLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgcmV0dXJuIChub2RlcywgbWVhbmluZywgZGVzY3JpcHRpb24sIGN1c3RvbUlkLCB2aXNpdE5vZGVGbikgPT5cbiAgICAgICAgICAgICB2aXNpdG9yLnRvSTE4bk1lc3NhZ2Uobm9kZXMsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBjdXN0b21JZCwgdmlzaXROb2RlRm4pO1xufVxuXG5pbnRlcmZhY2UgSTE4bk1lc3NhZ2VWaXNpdG9yQ29udGV4dCB7XG4gIGlzSWN1OiBib29sZWFuO1xuICBpY3VEZXB0aDogbnVtYmVyO1xuICBwbGFjZWhvbGRlclJlZ2lzdHJ5OiBQbGFjZWhvbGRlclJlZ2lzdHJ5O1xuICBwbGFjZWhvbGRlclRvQ29udGVudDoge1twaE5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIHBsYWNlaG9sZGVyVG9NZXNzYWdlOiB7W3BoTmFtZTogc3RyaW5nXTogaTE4bi5NZXNzYWdlfTtcbiAgdmlzaXROb2RlRm46IFZpc2l0Tm9kZUZuO1xufVxuXG5mdW5jdGlvbiBub29wVmlzaXROb2RlRm4oX2h0bWw6IGh0bWwuTm9kZSwgaTE4bjogaTE4bi5Ob2RlKTogaTE4bi5Ob2RlIHtcbiAgcmV0dXJuIGkxOG47XG59XG5cbmNsYXNzIF9JMThuVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfZXhwcmVzc2lvblBhcnNlcjogRXhwcmVzc2lvblBhcnNlcixcbiAgICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpIHt9XG5cbiAgcHVibGljIHRvSTE4bk1lc3NhZ2UoXG4gICAgICBub2RlczogaHRtbC5Ob2RlW10sIG1lYW5pbmcgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgY3VzdG9tSWQgPSAnJyxcbiAgICAgIHZpc2l0Tm9kZUZuOiBWaXNpdE5vZGVGbnx1bmRlZmluZWQpOiBpMThuLk1lc3NhZ2Uge1xuICAgIGNvbnN0IGNvbnRleHQ6IEkxOG5NZXNzYWdlVmlzaXRvckNvbnRleHQgPSB7XG4gICAgICBpc0ljdTogbm9kZXMubGVuZ3RoID09IDEgJiYgbm9kZXNbMF0gaW5zdGFuY2VvZiBodG1sLkV4cGFuc2lvbixcbiAgICAgIGljdURlcHRoOiAwLFxuICAgICAgcGxhY2Vob2xkZXJSZWdpc3RyeTogbmV3IFBsYWNlaG9sZGVyUmVnaXN0cnkoKSxcbiAgICAgIHBsYWNlaG9sZGVyVG9Db250ZW50OiB7fSxcbiAgICAgIHBsYWNlaG9sZGVyVG9NZXNzYWdlOiB7fSxcbiAgICAgIHZpc2l0Tm9kZUZuOiB2aXNpdE5vZGVGbiB8fCBub29wVmlzaXROb2RlRm4sXG4gICAgfTtcblxuICAgIGNvbnN0IGkxOG5vZGVzOiBpMThuLk5vZGVbXSA9IGh0bWwudmlzaXRBbGwodGhpcywgbm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLk1lc3NhZ2UoXG4gICAgICAgIGkxOG5vZGVzLCBjb250ZXh0LnBsYWNlaG9sZGVyVG9Db250ZW50LCBjb250ZXh0LnBsYWNlaG9sZGVyVG9NZXNzYWdlLCBtZWFuaW5nLCBkZXNjcmlwdGlvbixcbiAgICAgICAgY3VzdG9tSWQpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IEkxOG5NZXNzYWdlVmlzaXRvckNvbnRleHQpOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbiwgY29udGV4dCk7XG4gICAgY29uc3QgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGVsLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAvLyBEbyBub3QgdmlzaXQgdGhlIGF0dHJpYnV0ZXMsIHRyYW5zbGF0YWJsZSBvbmVzIGFyZSB0b3AtbGV2ZWwgQVNUc1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpc1ZvaWQ6IGJvb2xlYW4gPSBnZXRIdG1sVGFnRGVmaW5pdGlvbihlbC5uYW1lKS5pc1ZvaWQ7XG4gICAgY29uc3Qgc3RhcnRQaE5hbWUgPVxuICAgICAgICBjb250ZXh0LnBsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0U3RhcnRUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSwgYXR0cnMsIGlzVm9pZCk7XG4gICAgY29udGV4dC5wbGFjZWhvbGRlclRvQ29udGVudFtzdGFydFBoTmFtZV0gPSBlbC5zb3VyY2VTcGFuIS50b1N0cmluZygpO1xuXG4gICAgbGV0IGNsb3NlUGhOYW1lID0gJyc7XG5cbiAgICBpZiAoIWlzVm9pZCkge1xuICAgICAgY2xvc2VQaE5hbWUgPSBjb250ZXh0LnBsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0Q2xvc2VUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSk7XG4gICAgICBjb250ZXh0LnBsYWNlaG9sZGVyVG9Db250ZW50W2Nsb3NlUGhOYW1lXSA9IGA8LyR7ZWwubmFtZX0+YDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbmV3IGkxOG4uVGFnUGxhY2Vob2xkZXIoXG4gICAgICAgIGVsLm5hbWUsIGF0dHJzLCBzdGFydFBoTmFtZSwgY2xvc2VQaE5hbWUsIGNoaWxkcmVuLCBpc1ZvaWQsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICByZXR1cm4gY29udGV4dC52aXNpdE5vZGVGbihlbCwgbm9kZSk7XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBJMThuTWVzc2FnZVZpc2l0b3JDb250ZXh0KTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24oYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3BhbiwgY29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQudmlzaXROb2RlRm4oYXR0cmlidXRlLCBub2RlKTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IEkxOG5NZXNzYWdlVmlzaXRvckNvbnRleHQpOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbih0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hLCBjb250ZXh0KTtcbiAgICByZXR1cm4gY29udGV4dC52aXNpdE5vZGVGbih0ZXh0LCBub2RlKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IEkxOG5NZXNzYWdlVmlzaXRvckNvbnRleHQpOiBpMThuLk5vZGV8bnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBJMThuTWVzc2FnZVZpc2l0b3JDb250ZXh0KTogaTE4bi5Ob2RlIHtcbiAgICBjb250ZXh0LmljdURlcHRoKys7XG4gICAgY29uc3QgaTE4bkljdUNhc2VzOiB7W2s6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcbiAgICBjb25zdCBpMThuSWN1ID0gbmV3IGkxOG4uSWN1KGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGkxOG5JY3VDYXNlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIGljdS5jYXNlcy5mb3JFYWNoKChjYXplKTogdm9pZCA9PiB7XG4gICAgICBpMThuSWN1Q2FzZXNbY2F6ZS52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoXG4gICAgICAgICAgY2F6ZS5leHByZXNzaW9uLm1hcCgobm9kZSkgPT4gbm9kZS52aXNpdCh0aGlzLCBjb250ZXh0KSksIGNhemUuZXhwU291cmNlU3Bhbik7XG4gICAgfSk7XG4gICAgY29udGV4dC5pY3VEZXB0aC0tO1xuXG4gICAgaWYgKGNvbnRleHQuaXNJY3UgfHwgY29udGV4dC5pY3VEZXB0aCA+IDApIHtcbiAgICAgIC8vIFJldHVybnMgYW4gSUNVIG5vZGUgd2hlbjpcbiAgICAgIC8vIC0gdGhlIG1lc3NhZ2UgKHZzIGEgcGFydCBvZiB0aGUgbWVzc2FnZSkgaXMgYW4gSUNVIG1lc3NhZ2UsIG9yXG4gICAgICAvLyAtIHRoZSBJQ1UgbWVzc2FnZSBpcyBuZXN0ZWQuXG4gICAgICBjb25zdCBleHBQaCA9IGNvbnRleHQucGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRVbmlxdWVQbGFjZWhvbGRlcihgVkFSXyR7aWN1LnR5cGV9YCk7XG4gICAgICBpMThuSWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlciA9IGV4cFBoO1xuICAgICAgY29udGV4dC5wbGFjZWhvbGRlclRvQ29udGVudFtleHBQaF0gPSBpY3Uuc3dpdGNoVmFsdWU7XG4gICAgICByZXR1cm4gY29udGV4dC52aXNpdE5vZGVGbihpY3UsIGkxOG5JY3UpO1xuICAgIH1cblxuICAgIC8vIEVsc2UgcmV0dXJucyBhIHBsYWNlaG9sZGVyXG4gICAgLy8gSUNVIHBsYWNlaG9sZGVycyBzaG91bGQgbm90IGJlIHJlcGxhY2VkIHdpdGggdGhlaXIgb3JpZ2luYWwgY29udGVudCBidXQgd2l0aCB0aGUgdGhlaXJcbiAgICAvLyB0cmFuc2xhdGlvbnMuXG4gICAgLy8gVE9ETyh2aWNiKTogYWRkIGEgaHRtbC5Ob2RlIC0+IGkxOG4uTWVzc2FnZSBjYWNoZSB0byBhdm9pZCBoYXZpbmcgdG8gcmUtY3JlYXRlIHRoZSBtc2dcbiAgICBjb25zdCBwaE5hbWUgPSBjb250ZXh0LnBsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKCdJQ1UnLCBpY3Uuc291cmNlU3Bhbi50b1N0cmluZygpKTtcbiAgICBjb250ZXh0LnBsYWNlaG9sZGVyVG9NZXNzYWdlW3BoTmFtZV0gPSB0aGlzLnRvSTE4bk1lc3NhZ2UoW2ljdV0sICcnLCAnJywgJycsIHVuZGVmaW5lZCk7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBpMThuLkljdVBsYWNlaG9sZGVyKGkxOG5JY3UsIHBoTmFtZSwgaWN1LnNvdXJjZVNwYW4pO1xuICAgIHJldHVybiBjb250ZXh0LnZpc2l0Tm9kZUZuKGljdSwgbm9kZSk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoX2ljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgX2NvbnRleHQ6IEkxOG5NZXNzYWdlVmlzaXRvckNvbnRleHQpOiBpMThuLk5vZGUge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5yZWFjaGFibGUgY29kZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24oXG4gICAgICB0ZXh0OiBzdHJpbmcsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgY29udGV4dDogSTE4bk1lc3NhZ2VWaXNpdG9yQ29udGV4dCk6IGkxOG4uTm9kZSB7XG4gICAgY29uc3Qgc3BsaXRJbnRlcnBvbGF0aW9uID0gdGhpcy5fZXhwcmVzc2lvblBhcnNlci5zcGxpdEludGVycG9sYXRpb24oXG4gICAgICAgIHRleHQsIHNvdXJjZVNwYW4uc3RhcnQudG9TdHJpbmcoKSwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBpZiAoIXNwbGl0SW50ZXJwb2xhdGlvbikge1xuICAgICAgLy8gTm8gZXhwcmVzc2lvbiwgcmV0dXJuIGEgc2luZ2xlIHRleHRcbiAgICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQsIHNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGdyb3VwIG9mIHRleHQgKyBleHByZXNzaW9uc1xuICAgIGNvbnN0IG5vZGVzOiBpMThuLk5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBpMThuLkNvbnRhaW5lcihub2Rlcywgc291cmNlU3Bhbik7XG4gICAgY29uc3Qge3N0YXJ0OiBzRGVsaW1pdGVyLCBlbmQ6IGVEZWxpbWl0ZXJ9ID0gdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uID0gc3BsaXRJbnRlcnBvbGF0aW9uLmV4cHJlc3Npb25zW2ldO1xuICAgICAgY29uc3QgYmFzZU5hbWUgPSBfZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShleHByZXNzaW9uKSB8fCAnSU5URVJQT0xBVElPTic7XG4gICAgICBjb25zdCBwaE5hbWUgPSBjb250ZXh0LnBsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKGJhc2VOYW1lLCBleHByZXNzaW9uKTtcblxuICAgICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBlbXB0eSBzdHJpbmdzXG4gICAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXSwgc291cmNlU3BhbikpO1xuICAgICAgfVxuXG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlBsYWNlaG9sZGVyKGV4cHJlc3Npb24sIHBoTmFtZSwgc291cmNlU3BhbikpO1xuICAgICAgY29udGV4dC5wbGFjZWhvbGRlclRvQ29udGVudFtwaE5hbWVdID0gc0RlbGltaXRlciArIGV4cHJlc3Npb24gKyBlRGVsaW1pdGVyO1xuICAgIH1cblxuICAgIC8vIFRoZSBsYXN0IGluZGV4IGNvbnRhaW5zIG5vIGV4cHJlc3Npb25cbiAgICBjb25zdCBsYXN0U3RyaW5nSWR4ID0gc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBpZiAoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbbGFzdFN0cmluZ0lkeF0ubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlRleHQoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbbGFzdFN0cmluZ0lkeF0sIHNvdXJjZVNwYW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuXG5jb25zdCBfQ1VTVE9NX1BIX0VYUCA9XG4gICAgL1xcL1xcL1tcXHNcXFNdKmkxOG5bXFxzXFxTXSpcXChbXFxzXFxTXSpwaFtcXHNcXFNdKj1bXFxzXFxTXSooXCJ8JykoW1xcc1xcU10qPylcXDFbXFxzXFxTXSpcXCkvZztcblxuZnVuY3Rpb24gX2V4dHJhY3RQbGFjZWhvbGRlck5hbWUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnB1dC5zcGxpdChfQ1VTVE9NX1BIX0VYUClbMl07XG59XG4iXX0=