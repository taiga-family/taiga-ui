/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { CssToken, CssTokenType } from './css_lexer';
export var BlockType;
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
})(BlockType || (BlockType = {}));
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
export { CssAst };
var CssStyleValueAst = /** @class */ (function (_super) {
    __extends(CssStyleValueAst, _super);
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
export { CssStyleValueAst };
var CssRuleAst = /** @class */ (function (_super) {
    __extends(CssRuleAst, _super);
    function CssRuleAst(location) {
        return _super.call(this, location) || this;
    }
    return CssRuleAst;
}(CssAst));
export { CssRuleAst };
var CssBlockRuleAst = /** @class */ (function (_super) {
    __extends(CssBlockRuleAst, _super);
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
export { CssBlockRuleAst };
var CssKeyframeRuleAst = /** @class */ (function (_super) {
    __extends(CssKeyframeRuleAst, _super);
    function CssKeyframeRuleAst(location, name, block) {
        return _super.call(this, location, BlockType.Keyframes, block, name) || this;
    }
    CssKeyframeRuleAst.prototype.visit = function (visitor, context) {
        return visitor.visitCssKeyframeRule(this, context);
    };
    return CssKeyframeRuleAst;
}(CssBlockRuleAst));
export { CssKeyframeRuleAst };
var CssKeyframeDefinitionAst = /** @class */ (function (_super) {
    __extends(CssKeyframeDefinitionAst, _super);
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
export { CssKeyframeDefinitionAst };
var CssBlockDefinitionRuleAst = /** @class */ (function (_super) {
    __extends(CssBlockDefinitionRuleAst, _super);
    function CssBlockDefinitionRuleAst(location, strValue, type, query, block) {
        var _this = _super.call(this, location, type, block) || this;
        _this.strValue = strValue;
        _this.query = query;
        var firstCssToken = query.tokens[0];
        _this.name = new CssToken(firstCssToken.index, firstCssToken.column, firstCssToken.line, CssTokenType.Identifier, _this.strValue);
        return _this;
    }
    CssBlockDefinitionRuleAst.prototype.visit = function (visitor, context) {
        return visitor.visitCssBlock(this.block, context);
    };
    return CssBlockDefinitionRuleAst;
}(CssBlockRuleAst));
export { CssBlockDefinitionRuleAst };
var CssMediaQueryRuleAst = /** @class */ (function (_super) {
    __extends(CssMediaQueryRuleAst, _super);
    function CssMediaQueryRuleAst(location, strValue, query, block) {
        return _super.call(this, location, strValue, BlockType.MediaQuery, query, block) || this;
    }
    CssMediaQueryRuleAst.prototype.visit = function (visitor, context) {
        return visitor.visitCssMediaQueryRule(this, context);
    };
    return CssMediaQueryRuleAst;
}(CssBlockDefinitionRuleAst));
export { CssMediaQueryRuleAst };
var CssAtRulePredicateAst = /** @class */ (function (_super) {
    __extends(CssAtRulePredicateAst, _super);
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
export { CssAtRulePredicateAst };
var CssInlineRuleAst = /** @class */ (function (_super) {
    __extends(CssInlineRuleAst, _super);
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
export { CssInlineRuleAst };
var CssSelectorRuleAst = /** @class */ (function (_super) {
    __extends(CssSelectorRuleAst, _super);
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
export { CssSelectorRuleAst };
var CssDefinitionAst = /** @class */ (function (_super) {
    __extends(CssDefinitionAst, _super);
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
export { CssDefinitionAst };
var CssSelectorPartAst = /** @class */ (function (_super) {
    __extends(CssSelectorPartAst, _super);
    function CssSelectorPartAst(location) {
        return _super.call(this, location) || this;
    }
    return CssSelectorPartAst;
}(CssAst));
export { CssSelectorPartAst };
var CssSelectorAst = /** @class */ (function (_super) {
    __extends(CssSelectorAst, _super);
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
export { CssSelectorAst };
var CssSimpleSelectorAst = /** @class */ (function (_super) {
    __extends(CssSimpleSelectorAst, _super);
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
export { CssSimpleSelectorAst };
var CssPseudoSelectorAst = /** @class */ (function (_super) {
    __extends(CssPseudoSelectorAst, _super);
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
export { CssPseudoSelectorAst };
var CssBlockAst = /** @class */ (function (_super) {
    __extends(CssBlockAst, _super);
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
export { CssBlockAst };
/*
 a style block is different from a standard block because it contains
 css prop:value definitions. A regular block can contain a list of Ast entries.
 */
var CssStylesBlockAst = /** @class */ (function (_super) {
    __extends(CssStylesBlockAst, _super);
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
export { CssStylesBlockAst };
var CssStyleSheetAst = /** @class */ (function (_super) {
    __extends(CssStyleSheetAst, _super);
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
export { CssStyleSheetAst };
var CssUnknownRuleAst = /** @class */ (function (_super) {
    __extends(CssUnknownRuleAst, _super);
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
export { CssUnknownRuleAst };
var CssUnknownTokenListAst = /** @class */ (function (_super) {
    __extends(CssUnknownTokenListAst, _super);
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
export { CssUnknownTokenListAst };
export function mergeTokens(tokens, separator) {
    if (separator === void 0) { separator = ''; }
    var mainToken = tokens[0];
    var str = mainToken.strValue;
    for (var i = 1; i < tokens.length; i++) {
        str += separator + tokens[i].strValue;
    }
    return new CssToken(mainToken.index, mainToken.column, mainToken.line, mainToken.type, str);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2FzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jc3NfcGFyc2VyL2Nzc19hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlILE9BQU8sRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRW5ELE1BQU0sQ0FBTixJQUFZLFNBYVg7QUFiRCxXQUFZLFNBQVM7SUFDbkIsNkNBQU0sQ0FBQTtJQUNOLCtDQUFPLENBQUE7SUFDUCxtREFBUyxDQUFBO0lBQ1QsaURBQVEsQ0FBQTtJQUNSLG1EQUFTLENBQUE7SUFDVCxxREFBVSxDQUFBO0lBQ1YsaURBQVEsQ0FBQTtJQUNSLGlEQUFRLENBQUE7SUFDUix5Q0FBSSxDQUFBO0lBQ0osaURBQVEsQ0FBQTtJQUNSLGtEQUFRLENBQUE7SUFDUix3REFBVyxDQUFBO0FBQ2IsQ0FBQyxFQWJXLFNBQVMsS0FBVCxTQUFTLFFBYXBCO0FBcUJEO0lBQ0UsZ0JBQW1CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQUcsQ0FBQztJQUNoRCxzQkFBSSx5QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVCQUFHO2FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUgsYUFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVEO0lBQXNDLG9DQUFNO0lBQzFDLDBCQUFZLFFBQXlCLEVBQVMsTUFBa0IsRUFBUyxRQUFnQjtRQUF6RixZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtRQUY2QyxZQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVMsY0FBUSxHQUFSLFFBQVEsQ0FBUTs7SUFFekYsQ0FB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QUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEdBQUcsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUN2QztJQUVELE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BhcnNlTG9jYXRpb24sIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmltcG9ydCB7Q3NzVG9rZW4sIENzc1Rva2VuVHlwZX0gZnJvbSAnLi9jc3NfbGV4ZXInO1xuXG5leHBvcnQgZW51bSBCbG9ja1R5cGUge1xuICBJbXBvcnQsXG4gIENoYXJzZXQsXG4gIE5hbWVzcGFjZSxcbiAgU3VwcG9ydHMsXG4gIEtleWZyYW1lcyxcbiAgTWVkaWFRdWVyeSxcbiAgU2VsZWN0b3IsXG4gIEZvbnRGYWNlLFxuICBQYWdlLFxuICBEb2N1bWVudCxcbiAgVmlld3BvcnQsXG4gIFVuc3VwcG9ydGVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3NzQXN0VmlzaXRvciB7XG4gIHZpc2l0Q3NzVmFsdWUoYXN0OiBDc3NTdHlsZVZhbHVlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0lubGluZVJ1bGUoYXN0OiBDc3NJbmxpbmVSdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0F0UnVsZVByZWRpY2F0ZShhc3Q6IENzc0F0UnVsZVByZWRpY2F0ZUFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NLZXlmcmFtZVJ1bGUoYXN0OiBDc3NLZXlmcmFtZVJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzS2V5ZnJhbWVEZWZpbml0aW9uKGFzdDogQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc01lZGlhUXVlcnlSdWxlKGFzdDogQ3NzTWVkaWFRdWVyeVJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU2VsZWN0b3JSdWxlKGFzdDogQ3NzU2VsZWN0b3JSdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1NlbGVjdG9yKGFzdDogQ3NzU2VsZWN0b3JBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU2ltcGxlU2VsZWN0b3IoYXN0OiBDc3NTaW1wbGVTZWxlY3RvckFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NQc2V1ZG9TZWxlY3Rvcihhc3Q6IENzc1BzZXVkb1NlbGVjdG9yQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0RlZmluaXRpb24oYXN0OiBDc3NEZWZpbml0aW9uQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0Jsb2NrKGFzdDogQ3NzQmxvY2tBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU3R5bGVzQmxvY2soYXN0OiBDc3NTdHlsZXNCbG9ja0FzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NTdHlsZVNoZWV0KGFzdDogQ3NzU3R5bGVTaGVldEFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NVbmtub3duUnVsZShhc3Q6IENzc1Vua25vd25SdWxlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1Vua25vd25Ub2tlbkxpc3QoYXN0OiBDc3NVbmtub3duVG9rZW5MaXN0QXN0LCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIGdldCBzdGFydCgpOiBQYXJzZUxvY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5zdGFydDtcbiAgfVxuICBnZXQgZW5kKCk6IFBhcnNlTG9jYXRpb24ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLmVuZDtcbiAgfVxuICBhYnN0cmFjdCB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQ3NzU3R5bGVWYWx1ZUFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10sIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzVmFsdWUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1J1bGVBc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NCbG9ja1J1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIGJsb2NrOiBDc3NCbG9ja0FzdCxcbiAgICAgIHB1YmxpYyBuYW1lOiBDc3NUb2tlbnxudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0Jsb2NrKHRoaXMuYmxvY2ssIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NLZXlmcmFtZVJ1bGVBc3QgZXh0ZW5kcyBDc3NCbG9ja1J1bGVBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBuYW1lOiBDc3NUb2tlbiwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5LZXlmcmFtZXMsIGJsb2NrLCBuYW1lKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0ZXBzOiBDc3NUb2tlbltdLCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgQmxvY2tUeXBlLktleWZyYW1lcywgYmxvY2ssIG1lcmdlVG9rZW5zKHN0ZXBzLCAnLCcpKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lRGVmaW5pdGlvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCBleHRlbmRzIENzc0Jsb2NrUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHR5cGU6IEJsb2NrVHlwZSxcbiAgICAgIHB1YmxpYyBxdWVyeTogQ3NzQXRSdWxlUHJlZGljYXRlQXN0LCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgdHlwZSwgYmxvY2spO1xuICAgIGNvbnN0IGZpcnN0Q3NzVG9rZW46IENzc1Rva2VuID0gcXVlcnkudG9rZW5zWzBdO1xuICAgIHRoaXMubmFtZSA9IG5ldyBDc3NUb2tlbihcbiAgICAgICAgZmlyc3RDc3NUb2tlbi5pbmRleCwgZmlyc3RDc3NUb2tlbi5jb2x1bW4sIGZpcnN0Q3NzVG9rZW4ubGluZSwgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsXG4gICAgICAgIHRoaXMuc3RyVmFsdWUpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcy5ibG9jaywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc01lZGlhUXVlcnlSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3Bhbiwgc3RyVmFsdWU6IHN0cmluZywgcXVlcnk6IENzc0F0UnVsZVByZWRpY2F0ZUFzdCxcbiAgICAgIGJsb2NrOiBDc3NCbG9ja0FzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uLCBzdHJWYWx1ZSwgQmxvY2tUeXBlLk1lZGlhUXVlcnksIHF1ZXJ5LCBibG9jayk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NNZWRpYVF1ZXJ5UnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQXRSdWxlUHJlZGljYXRlQXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NBdFJ1bGVQcmVkaWNhdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0lubGluZVJ1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIHZhbHVlOiBDc3NTdHlsZVZhbHVlQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzSW5saW5lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzU2VsZWN0b3JSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgcHVibGljIHN0clZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5TZWxlY3RvciwgYmxvY2spO1xuICAgIHRoaXMuc3RyVmFsdWUgPSBzZWxlY3RvcnMubWFwKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0clZhbHVlKS5qb2luKCcsJyk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTZWxlY3RvclJ1bGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0RlZmluaXRpb25Bc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBwcm9wZXJ0eTogQ3NzVG9rZW4sIHB1YmxpYyB2YWx1ZTogQ3NzU3R5bGVWYWx1ZUFzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0RlZmluaXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1NlbGVjdG9yUGFydEFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1NlbGVjdG9yQXN0IGV4dGVuZHMgQ3NzU2VsZWN0b3JQYXJ0QXN0IHtcbiAgcHVibGljIHN0clZhbHVlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzZWxlY3RvclBhcnRzOiBDc3NTaW1wbGVTZWxlY3RvckFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMuc3RyVmFsdWUgPSBzZWxlY3RvclBhcnRzLm1hcChwYXJ0ID0+IHBhcnQuc3RyVmFsdWUpLmpvaW4oJycpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzU2VsZWN0b3IodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1NpbXBsZVNlbGVjdG9yQXN0IGV4dGVuZHMgQ3NzU2VsZWN0b3JQYXJ0QXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgdG9rZW5zOiBDc3NUb2tlbltdLCBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBwc2V1ZG9TZWxlY3RvcnM6IENzc1BzZXVkb1NlbGVjdG9yQXN0W10sIHB1YmxpYyBvcGVyYXRvcjogQ3NzVG9rZW4pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTaW1wbGVTZWxlY3Rvcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzUHNldWRvU2VsZWN0b3JBc3QgZXh0ZW5kcyBDc3NTZWxlY3RvclBhcnRBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSwgcHVibGljIGlubmVyU2VsZWN0b3JzOiBDc3NTZWxlY3RvckFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzUHNldWRvU2VsZWN0b3IodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0Jsb2NrQXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIGVudHJpZXM6IENzc0FzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLypcbiBhIHN0eWxlIGJsb2NrIGlzIGRpZmZlcmVudCBmcm9tIGEgc3RhbmRhcmQgYmxvY2sgYmVjYXVzZSBpdCBjb250YWluc1xuIGNzcyBwcm9wOnZhbHVlIGRlZmluaXRpb25zLiBBIHJlZ3VsYXIgYmxvY2sgY2FuIGNvbnRhaW4gYSBsaXN0IG9mIEFzdCBlbnRyaWVzLlxuICovXG5leHBvcnQgY2xhc3MgQ3NzU3R5bGVzQmxvY2tBc3QgZXh0ZW5kcyBDc3NCbG9ja0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBkZWZpbml0aW9uczogQ3NzRGVmaW5pdGlvbkFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24sIGRlZmluaXRpb25zKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1N0eWxlc0Jsb2NrKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTdHlsZVNoZWV0QXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHJ1bGVzOiBDc3NBc3RbXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1N0eWxlU2hlZXQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1Vua25vd25SdWxlQXN0IGV4dGVuZHMgQ3NzUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nLCBwdWJsaWMgdG9rZW5zOiBDc3NUb2tlbltdKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzVW5rbm93blJ1bGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1Vua25vd25Ub2tlbkxpc3RBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1Vua25vd25Ub2tlbkxpc3QodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVG9rZW5zKHRva2VuczogQ3NzVG9rZW5bXSwgc2VwYXJhdG9yOiBzdHJpbmcgPSAnJyk6IENzc1Rva2VuIHtcbiAgY29uc3QgbWFpblRva2VuID0gdG9rZW5zWzBdO1xuICBsZXQgc3RyID0gbWFpblRva2VuLnN0clZhbHVlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSBzZXBhcmF0b3IgKyB0b2tlbnNbaV0uc3RyVmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IENzc1Rva2VuKG1haW5Ub2tlbi5pbmRleCwgbWFpblRva2VuLmNvbHVtbiwgbWFpblRva2VuLmxpbmUsIG1haW5Ub2tlbi50eXBlLCBzdHIpO1xufVxuIl19