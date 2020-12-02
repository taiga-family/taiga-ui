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
        define("@angular/compiler/src/css_parser/css_ast", ["require", "exports", "tslib", "@angular/compiler/src/css_parser/css_lexer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var css_lexer_1 = require("@angular/compiler/src/css_parser/css_lexer");
    var BlockType;
    (function (BlockType) {
        BlockType[BlockType["Import"] = 0] = "Import";
        BlockType[BlockType["Charset"] = 1] = "Charset";
        BlockType[BlockType["Namespace"] = 2] = "Namespace";
        BlockType[BlockType["Supports"] = 3] = "Supports";
        BlockType[BlockType["Keyframes"] = 4] = "Keyframes";
        BlockType[BlockType["MediaQuery"] = 5] = "MediaQuery";
        BlockType[BlockType["Selector"] = 6] = "Selector";
        BlockType[BlockType["FontFace"] = 7] = "FontFace";
        BlockType[BlockType["Page"] = 8] = "Page";
        BlockType[BlockType["Document"] = 9] = "Document";
        BlockType[BlockType["Viewport"] = 10] = "Viewport";
        BlockType[BlockType["Unsupported"] = 11] = "Unsupported";
    })(BlockType = exports.BlockType || (exports.BlockType = {}));
    var CssAst = /** @class */ (function () {
        function CssAst(location) {
            this.location = location;
        }
        Object.defineProperty(CssAst.prototype, "start", {
            get: function () {
                return this.location.start;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CssAst.prototype, "end", {
            get: function () {
                return this.location.end;
            },
            enumerable: true,
            configurable: true
        });
        return CssAst;
    }());
    exports.CssAst = CssAst;
    var CssStyleValueAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssStyleValueAst, _super);
        function CssStyleValueAst(location, tokens, strValue) {
            var _this = _super.call(this, location) || this;
            _this.tokens = tokens;
            _this.strValue = strValue;
            return _this;
        }
        CssStyleValueAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssValue(this);
        };
        return CssStyleValueAst;
    }(CssAst));
    exports.CssStyleValueAst = CssStyleValueAst;
    var CssRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssRuleAst, _super);
        function CssRuleAst(location) {
            return _super.call(this, location) || this;
        }
        return CssRuleAst;
    }(CssAst));
    exports.CssRuleAst = CssRuleAst;
    var CssBlockRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssBlockRuleAst, _super);
        function CssBlockRuleAst(location, type, block, name) {
            if (name === void 0) { name = null; }
            var _this = _super.call(this, location) || this;
            _this.location = location;
            _this.type = type;
            _this.block = block;
            _this.name = name;
            return _this;
        }
        CssBlockRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssBlock(this.block, context);
        };
        return CssBlockRuleAst;
    }(CssRuleAst));
    exports.CssBlockRuleAst = CssBlockRuleAst;
    var CssKeyframeRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssKeyframeRuleAst, _super);
        function CssKeyframeRuleAst(location, name, block) {
            return _super.call(this, location, BlockType.Keyframes, block, name) || this;
        }
        CssKeyframeRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssKeyframeRule(this, context);
        };
        return CssKeyframeRuleAst;
    }(CssBlockRuleAst));
    exports.CssKeyframeRuleAst = CssKeyframeRuleAst;
    var CssKeyframeDefinitionAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssKeyframeDefinitionAst, _super);
        function CssKeyframeDefinitionAst(location, steps, block) {
            var _this = _super.call(this, location, BlockType.Keyframes, block, mergeTokens(steps, ',')) || this;
            _this.steps = steps;
            return _this;
        }
        CssKeyframeDefinitionAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssKeyframeDefinition(this, context);
        };
        return CssKeyframeDefinitionAst;
    }(CssBlockRuleAst));
    exports.CssKeyframeDefinitionAst = CssKeyframeDefinitionAst;
    var CssBlockDefinitionRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssBlockDefinitionRuleAst, _super);
        function CssBlockDefinitionRuleAst(location, strValue, type, query, block) {
            var _this = _super.call(this, location, type, block) || this;
            _this.strValue = strValue;
            _this.query = query;
            var firstCssToken = query.tokens[0];
            _this.name = new css_lexer_1.CssToken(firstCssToken.index, firstCssToken.column, firstCssToken.line, css_lexer_1.CssTokenType.Identifier, _this.strValue);
            return _this;
        }
        CssBlockDefinitionRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssBlock(this.block, context);
        };
        return CssBlockDefinitionRuleAst;
    }(CssBlockRuleAst));
    exports.CssBlockDefinitionRuleAst = CssBlockDefinitionRuleAst;
    var CssMediaQueryRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssMediaQueryRuleAst, _super);
        function CssMediaQueryRuleAst(location, strValue, query, block) {
            return _super.call(this, location, strValue, BlockType.MediaQuery, query, block) || this;
        }
        CssMediaQueryRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssMediaQueryRule(this, context);
        };
        return CssMediaQueryRuleAst;
    }(CssBlockDefinitionRuleAst));
    exports.CssMediaQueryRuleAst = CssMediaQueryRuleAst;
    var CssAtRulePredicateAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssAtRulePredicateAst, _super);
        function CssAtRulePredicateAst(location, strValue, tokens) {
            var _this = _super.call(this, location) || this;
            _this.strValue = strValue;
            _this.tokens = tokens;
            return _this;
        }
        CssAtRulePredicateAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssAtRulePredicate(this, context);
        };
        return CssAtRulePredicateAst;
    }(CssAst));
    exports.CssAtRulePredicateAst = CssAtRulePredicateAst;
    var CssInlineRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssInlineRuleAst, _super);
        function CssInlineRuleAst(location, type, value) {
            var _this = _super.call(this, location) || this;
            _this.type = type;
            _this.value = value;
            return _this;
        }
        CssInlineRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssInlineRule(this, context);
        };
        return CssInlineRuleAst;
    }(CssRuleAst));
    exports.CssInlineRuleAst = CssInlineRuleAst;
    var CssSelectorRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssSelectorRuleAst, _super);
        function CssSelectorRuleAst(location, selectors, block) {
            var _this = _super.call(this, location, BlockType.Selector, block) || this;
            _this.selectors = selectors;
            _this.strValue = selectors.map(function (selector) { return selector.strValue; }).join(',');
            return _this;
        }
        CssSelectorRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssSelectorRule(this, context);
        };
        return CssSelectorRuleAst;
    }(CssBlockRuleAst));
    exports.CssSelectorRuleAst = CssSelectorRuleAst;
    var CssDefinitionAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssDefinitionAst, _super);
        function CssDefinitionAst(location, property, value) {
            var _this = _super.call(this, location) || this;
            _this.property = property;
            _this.value = value;
            return _this;
        }
        CssDefinitionAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssDefinition(this, context);
        };
        return CssDefinitionAst;
    }(CssAst));
    exports.CssDefinitionAst = CssDefinitionAst;
    var CssSelectorPartAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssSelectorPartAst, _super);
        function CssSelectorPartAst(location) {
            return _super.call(this, location) || this;
        }
        return CssSelectorPartAst;
    }(CssAst));
    exports.CssSelectorPartAst = CssSelectorPartAst;
    var CssSelectorAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssSelectorAst, _super);
        function CssSelectorAst(location, selectorParts) {
            var _this = _super.call(this, location) || this;
            _this.selectorParts = selectorParts;
            _this.strValue = selectorParts.map(function (part) { return part.strValue; }).join('');
            return _this;
        }
        CssSelectorAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssSelector(this, context);
        };
        return CssSelectorAst;
    }(CssSelectorPartAst));
    exports.CssSelectorAst = CssSelectorAst;
    var CssSimpleSelectorAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssSimpleSelectorAst, _super);
        function CssSimpleSelectorAst(location, tokens, strValue, pseudoSelectors, operator) {
            var _this = _super.call(this, location) || this;
            _this.tokens = tokens;
            _this.strValue = strValue;
            _this.pseudoSelectors = pseudoSelectors;
            _this.operator = operator;
            return _this;
        }
        CssSimpleSelectorAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssSimpleSelector(this, context);
        };
        return CssSimpleSelectorAst;
    }(CssSelectorPartAst));
    exports.CssSimpleSelectorAst = CssSimpleSelectorAst;
    var CssPseudoSelectorAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssPseudoSelectorAst, _super);
        function CssPseudoSelectorAst(location, strValue, name, tokens, innerSelectors) {
            var _this = _super.call(this, location) || this;
            _this.strValue = strValue;
            _this.name = name;
            _this.tokens = tokens;
            _this.innerSelectors = innerSelectors;
            return _this;
        }
        CssPseudoSelectorAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssPseudoSelector(this, context);
        };
        return CssPseudoSelectorAst;
    }(CssSelectorPartAst));
    exports.CssPseudoSelectorAst = CssPseudoSelectorAst;
    var CssBlockAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssBlockAst, _super);
        function CssBlockAst(location, entries) {
            var _this = _super.call(this, location) || this;
            _this.entries = entries;
            return _this;
        }
        CssBlockAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssBlock(this, context);
        };
        return CssBlockAst;
    }(CssAst));
    exports.CssBlockAst = CssBlockAst;
    /*
     a style block is different from a standard block because it contains
     css prop:value definitions. A regular block can contain a list of Ast entries.
     */
    var CssStylesBlockAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssStylesBlockAst, _super);
        function CssStylesBlockAst(location, definitions) {
            var _this = _super.call(this, location, definitions) || this;
            _this.definitions = definitions;
            return _this;
        }
        CssStylesBlockAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssStylesBlock(this, context);
        };
        return CssStylesBlockAst;
    }(CssBlockAst));
    exports.CssStylesBlockAst = CssStylesBlockAst;
    var CssStyleSheetAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssStyleSheetAst, _super);
        function CssStyleSheetAst(location, rules) {
            var _this = _super.call(this, location) || this;
            _this.rules = rules;
            return _this;
        }
        CssStyleSheetAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssStyleSheet(this, context);
        };
        return CssStyleSheetAst;
    }(CssAst));
    exports.CssStyleSheetAst = CssStyleSheetAst;
    var CssUnknownRuleAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssUnknownRuleAst, _super);
        function CssUnknownRuleAst(location, ruleName, tokens) {
            var _this = _super.call(this, location) || this;
            _this.ruleName = ruleName;
            _this.tokens = tokens;
            return _this;
        }
        CssUnknownRuleAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssUnknownRule(this, context);
        };
        return CssUnknownRuleAst;
    }(CssRuleAst));
    exports.CssUnknownRuleAst = CssUnknownRuleAst;
    var CssUnknownTokenListAst = /** @class */ (function (_super) {
        tslib_1.__extends(CssUnknownTokenListAst, _super);
        function CssUnknownTokenListAst(location, name, tokens) {
            var _this = _super.call(this, location) || this;
            _this.name = name;
            _this.tokens = tokens;
            return _this;
        }
        CssUnknownTokenListAst.prototype.visit = function (visitor, context) {
            return visitor.visitCssUnknownTokenList(this, context);
        };
        return CssUnknownTokenListAst;
    }(CssRuleAst));
    exports.CssUnknownTokenListAst = CssUnknownTokenListAst;
    function mergeTokens(tokens, separator) {
        if (separator === void 0) { separator = ''; }
        var mainToken = tokens[0];
        var str = mainToken.strValue;
        for (var i = 1; i < tokens.length; i++) {
            str += separator + tokens[i].strValue;
        }
        return new css_lexer_1.CssToken(mainToken.index, mainToken.column, mainToken.line, mainToken.type, str);
    }
    exports.mergeTokens = mergeTokens;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2FzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jc3NfcGFyc2VyL2Nzc19hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBSUgsd0VBQW1EO0lBRW5ELElBQVksU0FhWDtJQWJELFdBQVksU0FBUztRQUNuQiw2Q0FBTSxDQUFBO1FBQ04sK0NBQU8sQ0FBQTtRQUNQLG1EQUFTLENBQUE7UUFDVCxpREFBUSxDQUFBO1FBQ1IsbURBQVMsQ0FBQTtRQUNULHFEQUFVLENBQUE7UUFDVixpREFBUSxDQUFBO1FBQ1IsaURBQVEsQ0FBQTtRQUNSLHlDQUFJLENBQUE7UUFDSixpREFBUSxDQUFBO1FBQ1Isa0RBQVEsQ0FBQTtRQUNSLHdEQUFXLENBQUE7SUFDYixDQUFDLEVBYlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFhcEI7SUFxQkQ7UUFDRSxnQkFBbUIsUUFBeUI7WUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBRyxDQUFDO1FBQ2hELHNCQUFJLHlCQUFLO2lCQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0IsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSx1QkFBRztpQkFBUDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQzNCLENBQUM7OztXQUFBO1FBRUgsYUFBQztJQUFELENBQUMsQUFURCxJQVNDO0lBVHFCLHdCQUFNO0lBVzVCO1FBQXNDLDRDQUFNO1FBQzFDLDBCQUFZLFFBQXlCLEVBQVMsTUFBa0IsRUFBUyxRQUFnQjtZQUF6RixZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtZQUY2QyxZQUFNLEdBQU4sTUFBTSxDQUFZO1lBQVMsY0FBUSxHQUFSLFFBQVEsQ0FBUTs7UUFFekYsQ0FBQztRQUNELGdDQUFLLEdBQUws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QUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQUFDLEFBUEQsQ0FBNEMsVUFBVSxHQU9yRDtJQVBZLHdEQUFzQjtJQVNuQyxTQUFnQixXQUFXLENBQUMsTUFBa0IsRUFBRSxTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGNBQXNCO1FBQ3BFLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxvQkFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQVJELGtDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BhcnNlTG9jYXRpb24sIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmltcG9ydCB7Q3NzVG9rZW4sIENzc1Rva2VuVHlwZX0gZnJvbSAnLi9jc3NfbGV4ZXInO1xuXG5leHBvcnQgZW51bSBCbG9ja1R5cGUge1xuICBJbXBvcnQsXG4gIENoYXJzZXQsXG4gIE5hbWVzcGFjZSxcbiAgU3VwcG9ydHMsXG4gIEtleWZyYW1lcyxcbiAgTWVkaWFRdWVyeSxcbiAgU2VsZWN0b3IsXG4gIEZvbnRGYWNlLFxuICBQYWdlLFxuICBEb2N1bWVudCxcbiAgVmlld3BvcnQsXG4gIFVuc3VwcG9ydGVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3NzQXN0VmlzaXRvciB7XG4gIHZpc2l0Q3NzVmFsdWUoYXN0OiBDc3NTdHlsZVZhbHVlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0lubGluZVJ1bGUoYXN0OiBDc3NJbmxpbmVSdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0F0UnVsZVByZWRpY2F0ZShhc3Q6IENzc0F0UnVsZVByZWRpY2F0ZUFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NLZXlmcmFtZVJ1bGUoYXN0OiBDc3NLZXlmcmFtZVJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzS2V5ZnJhbWVEZWZpbml0aW9uKGFzdDogQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc01lZGlhUXVlcnlSdWxlKGFzdDogQ3NzTWVkaWFRdWVyeVJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU2VsZWN0b3JSdWxlKGFzdDogQ3NzU2VsZWN0b3JSdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1NlbGVjdG9yKGFzdDogQ3NzU2VsZWN0b3JBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU2ltcGxlU2VsZWN0b3IoYXN0OiBDc3NTaW1wbGVTZWxlY3RvckFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NQc2V1ZG9TZWxlY3Rvcihhc3Q6IENzc1BzZXVkb1NlbGVjdG9yQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0RlZmluaXRpb24oYXN0OiBDc3NEZWZpbml0aW9uQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0Jsb2NrKGFzdDogQ3NzQmxvY2tBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU3R5bGVzQmxvY2soYXN0OiBDc3NTdHlsZXNCbG9ja0FzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NTdHlsZVNoZWV0KGFzdDogQ3NzU3R5bGVTaGVldEFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NVbmtub3duUnVsZShhc3Q6IENzc1Vua25vd25SdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1Vua25vd25Ub2tlbkxpc3QoYXN0OiBDc3NVbmtub3duVG9rZW5MaXN0QXN0LCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIGdldCBzdGFydCgpOiBQYXJzZUxvY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5zdGFydDtcbiAgfVxuICBnZXQgZW5kKCk6IFBhcnNlTG9jYXRpb24ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLmVuZDtcbiAgfVxuICBhYnN0cmFjdCB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQ3NzU3R5bGVWYWx1ZUFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10sIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzVmFsdWUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1J1bGVBc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NCbG9ja1J1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIGJsb2NrOiBDc3NCbG9ja0FzdCxcbiAgICAgIHB1YmxpYyBuYW1lOiBDc3NUb2tlbnxudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0Jsb2NrKHRoaXMuYmxvY2ssIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NLZXlmcmFtZVJ1bGVBc3QgZXh0ZW5kcyBDc3NCbG9ja1J1bGVBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBuYW1lOiBDc3NUb2tlbiwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5LZXlmcmFtZXMsIGJsb2NrLCBuYW1lKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0ZXBzOiBDc3NUb2tlbltdLCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgQmxvY2tUeXBlLktleWZyYW1lcywgYmxvY2ssIG1lcmdlVG9rZW5zKHN0ZXBzLCAnLCcpKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lRGVmaW5pdGlvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCBleHRlbmRzIENzc0Jsb2NrUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHR5cGU6IEJsb2NrVHlwZSxcbiAgICAgIHB1YmxpYyBxdWVyeTogQ3NzQXRSdWxlUHJlZGljYXRlQXN0LCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgdHlwZSwgYmxvY2spO1xuICAgIGNvbnN0IGZpcnN0Q3NzVG9rZW46IENzc1Rva2VuID0gcXVlcnkudG9rZW5zWzBdO1xuICAgIHRoaXMubmFtZSA9IG5ldyBDc3NUb2tlbihcbiAgICAgICAgZmlyc3RDc3NUb2tlbi5pbmRleCwgZmlyc3RDc3NUb2tlbi5jb2x1bW4sIGZpcnN0Q3NzVG9rZW4ubGluZSwgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsXG4gICAgICAgIHRoaXMuc3RyVmFsdWUpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcy5ibG9jaywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc01lZGlhUXVlcnlSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3Bhbiwgc3RyVmFsdWU6IHN0cmluZywgcXVlcnk6IENzc0F0UnVsZVByZWRpY2F0ZUFzdCxcbiAgICAgIGJsb2NrOiBDc3NCbG9ja0FzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uLCBzdHJWYWx1ZSwgQmxvY2tUeXBlLk1lZGlhUXVlcnksIHF1ZXJ5LCBibG9jayk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NNZWRpYVF1ZXJ5UnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQXRSdWxlUHJlZGljYXRlQXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NBdFJ1bGVQcmVkaWNhdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0lubGluZVJ1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIHZhbHVlOiBDc3NTdHlsZVZhbHVlQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzSW5saW5lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzU2VsZWN0b3JSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgcHVibGljIHN0clZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5TZWxlY3RvciwgYmxvY2spO1xuICAgIHRoaXMuc3RyVmFsdWUgPSBzZWxlY3RvcnMubWFwKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0clZhbHVlKS5qb2luKCcsJyk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTZWxlY3RvclJ1bGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0RlZmluaXRpb25Bc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBwcm9wZXJ0eTogQ3NzVG9rZW4sIHB1YmxpYyB2YWx1ZTogQ3NzU3R5bGVWYWx1ZUFzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0RlZmluaXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1NlbGVjdG9yUGFydEFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1NlbGVjdG9yQXN0IGV4dGVuZHMgQ3NzU2VsZWN0b3JQYXJ0QXN0IHtcbiAgcHVibGljIHN0clZhbHVlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzZWxlY3RvclBhcnRzOiBDc3NTaW1wbGVTZWxlY3RvckFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMuc3RyVmFsdWUgPSBzZWxlY3RvclBhcnRzLm1hcChwYXJ0ID0+IHBhcnQuc3RyVmFsdWUpLmpvaW4oJycpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzU2VsZWN0b3IodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1NpbXBsZVNlbGVjdG9yQXN0IGV4dGVuZHMgQ3NzU2VsZWN0b3JQYXJ0QXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgdG9rZW5zOiBDc3NUb2tlbltdLCBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBwc2V1ZG9TZWxlY3RvcnM6IENzc1BzZXVkb1NlbGVjdG9yQXN0W10sIHB1YmxpYyBvcGVyYXRvcjogQ3NzVG9rZW4pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTaW1wbGVTZWxlY3Rvcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzUHNldWRvU2VsZWN0b3JBc3QgZXh0ZW5kcyBDc3NTZWxlY3RvclBhcnRBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSwgcHVibGljIGlubmVyU2VsZWN0b3JzOiBDc3NTZWxlY3RvckFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzUHNldWRvU2VsZWN0b3IodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0Jsb2NrQXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIGVudHJpZXM6IENzc0FzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLypcbiBhIHN0eWxlIGJsb2NrIGlzIGRpZmZlcmVudCBmcm9tIGEgc3RhbmRhcmQgYmxvY2sgYmVjYXVzZSBpdCBjb250YWluc1xuIGNzcyBwcm9wOnZhbHVlIGRlZmluaXRpb25zLiBBIHJlZ3VsYXIgYmxvY2sgY2FuIGNvbnRhaW4gYSBsaXN0IG9mIEFzdCBlbnRyaWVzLlxuICovXG5leHBvcnQgY2xhc3MgQ3NzU3R5bGVzQmxvY2tBc3QgZXh0ZW5kcyBDc3NCbG9ja0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBkZWZpbml0aW9uczogQ3NzRGVmaW5pdGlvbkFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24sIGRlZmluaXRpb25zKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1N0eWxlc0Jsb2NrKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTdHlsZVNoZWV0QXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHJ1bGVzOiBDc3NBc3RbXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1N0eWxlU2hlZXQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1Vua25vd25SdWxlQXN0IGV4dGVuZHMgQ3NzUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nLCBwdWJsaWMgdG9rZW5zOiBDc3NUb2tlbltdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzVW5rbm93blJ1bGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1Vua25vd25Ub2tlbkxpc3RBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1Vua25vd25Ub2tlbkxpc3QodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVG9rZW5zKHRva2VuczogQ3NzVG9rZW5bXSwgc2VwYXJhdG9yOiBzdHJpbmcgPSAnJyk6IENzc1Rva2VuIHtcbiAgY29uc3QgbWFpblRva2VuID0gdG9rZW5zWzBdO1xuICBsZXQgc3RyID0gbWFpblRva2VuLnN0clZhbHVlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSBzZXBhcmF0b3IgKyB0b2tlbnNbaV0uc3RyVmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IENzc1Rva2VuKG1haW5Ub2tlbi5pbmRleCwgbWFpblRva2VuLmNvbHVtbiwgbWFpblRva2VuLmxpbmUsIG1haW5Ub2tlbi50eXBlLCBzdHIpO1xufVxuIl19