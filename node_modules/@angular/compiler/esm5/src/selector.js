/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getHtmlTagDefinition } from './ml_parser/html_tags';
var _SELECTOR_REGEXP = new RegExp('(\\:not\\()|' + // 1: ":not("
    '(([\\.\\#]?)[-\\w]+)|' + // 2: "tag"; 3: "."/"#";
    // "-" should appear first in the regexp below as FF31 parses "[.-\w]" as a range
    // 4: attribute; 5: attribute_string; 6: attribute_value
    '(?:\\[([-.\\w*]+)(?:=([\"\']?)([^\\]\"\']*)\\5)?\\])|' + // "[name]", "[name=value]",
    // "[name="value"]",
    // "[name='value']"
    '(\\))|' + // 7: ")"
    '(\\s*,\\s*)', // 8: ","
'g');
/**
 * A css selector contains an element name,
 * css classes and attribute/value pairs with the purpose
 * of selecting subsets out of them.
 */
var CssSelector = /** @class */ (function () {
    function CssSelector() {
        this.element = null;
        this.classNames = [];
        /**
         * The selectors are encoded in pairs where:
         * - even locations are attribute names
         * - odd locations are attribute values.
         *
         * Example:
         * Selector: `[key1=value1][key2]` would parse to:
         * ```
         * ['key1', 'value1', 'key2', '']
         * ```
         */
        this.attrs = [];
        this.notSelectors = [];
    }
    CssSelector.parse = function (selector) {
        var results = [];
        var _addResult = function (res, cssSel) {
            if (cssSel.notSelectors.length > 0 && !cssSel.element && cssSel.classNames.length == 0 &&
                cssSel.attrs.length == 0) {
                cssSel.element = '*';
            }
            res.push(cssSel);
        };
        var cssSelector = new CssSelector();
        var match;
        var current = cssSelector;
        var inNot = false;
        _SELECTOR_REGEXP.lastIndex = 0;
        while (match = _SELECTOR_REGEXP.exec(selector)) {
            if (match[1 /* NOT */]) {
                if (inNot) {
                    throw new Error('Nesting :not in a selector is not allowed');
                }
                inNot = true;
                current = new CssSelector();
                cssSelector.notSelectors.push(current);
            }
            var tag = match[2 /* TAG */];
            if (tag) {
                var prefix = match[3 /* PREFIX */];
                if (prefix === '#') {
                    // #hash
                    current.addAttribute('id', tag.substr(1));
                }
                else if (prefix === '.') {
                    // Class
                    current.addClassName(tag.substr(1));
                }
                else {
                    // Element
                    current.setElement(tag);
                }
            }
            var attribute = match[4 /* ATTRIBUTE */];
            if (attribute) {
                current.addAttribute(attribute, match[6 /* ATTRIBUTE_VALUE */]);
            }
            if (match[7 /* NOT_END */]) {
                inNot = false;
                current = cssSelector;
            }
            if (match[8 /* SEPARATOR */]) {
                if (inNot) {
                    throw new Error('Multiple selectors in :not are not supported');
                }
                _addResult(results, cssSelector);
                cssSelector = current = new CssSelector();
            }
        }
        _addResult(results, cssSelector);
        return results;
    };
    CssSelector.prototype.isElementSelector = function () {
        return this.hasElementSelector() && this.classNames.length == 0 && this.attrs.length == 0 &&
            this.notSelectors.length === 0;
    };
    CssSelector.prototype.hasElementSelector = function () {
        return !!this.element;
    };
    CssSelector.prototype.setElement = function (element) {
        if (element === void 0) { element = null; }
        this.element = element;
    };
    /** Gets a template string for an element that matches the selector. */
    CssSelector.prototype.getMatchingElementTemplate = function () {
        var tagName = this.element || 'div';
        var classAttr = this.classNames.length > 0 ? " class=\"" + this.classNames.join(' ') + "\"" : '';
        var attrs = '';
        for (var i = 0; i < this.attrs.length; i += 2) {
            var attrName = this.attrs[i];
            var attrValue = this.attrs[i + 1] !== '' ? "=\"" + this.attrs[i + 1] + "\"" : '';
            attrs += " " + attrName + attrValue;
        }
        return getHtmlTagDefinition(tagName).isVoid ? "<" + tagName + classAttr + attrs + "/>" :
            "<" + tagName + classAttr + attrs + "></" + tagName + ">";
    };
    CssSelector.prototype.getAttrs = function () {
        var result = [];
        if (this.classNames.length > 0) {
            result.push('class', this.classNames.join(' '));
        }
        return result.concat(this.attrs);
    };
    CssSelector.prototype.addAttribute = function (name, value) {
        if (value === void 0) { value = ''; }
        this.attrs.push(name, value && value.toLowerCase() || '');
    };
    CssSelector.prototype.addClassName = function (name) {
        this.classNames.push(name.toLowerCase());
    };
    CssSelector.prototype.toString = function () {
        var res = this.element || '';
        if (this.classNames) {
            this.classNames.forEach(function (klass) { return res += "." + klass; });
        }
        if (this.attrs) {
            for (var i = 0; i < this.attrs.length; i += 2) {
                var name_1 = this.attrs[i];
                var value = this.attrs[i + 1];
                res += "[" + name_1 + (value ? '=' + value : '') + "]";
            }
        }
        this.notSelectors.forEach(function (notSelector) { return res += ":not(" + notSelector + ")"; });
        return res;
    };
    return CssSelector;
}());
export { CssSelector };
/**
 * Reads a list of CssSelectors and allows to calculate which ones
 * are contained in a given CssSelector.
 */
var SelectorMatcher = /** @class */ (function () {
    function SelectorMatcher() {
        this._elementMap = new Map();
        this._elementPartialMap = new Map();
        this._classMap = new Map();
        this._classPartialMap = new Map();
        this._attrValueMap = new Map();
        this._attrValuePartialMap = new Map();
        this._listContexts = [];
    }
    SelectorMatcher.createNotMatcher = function (notSelectors) {
        var notMatcher = new SelectorMatcher();
        notMatcher.addSelectables(notSelectors, null);
        return notMatcher;
    };
    SelectorMatcher.prototype.addSelectables = function (cssSelectors, callbackCtxt) {
        var listContext = null;
        if (cssSelectors.length > 1) {
            listContext = new SelectorListContext(cssSelectors);
            this._listContexts.push(listContext);
        }
        for (var i = 0; i < cssSelectors.length; i++) {
            this._addSelectable(cssSelectors[i], callbackCtxt, listContext);
        }
    };
    /**
     * Add an object that can be found later on by calling `match`.
     * @param cssSelector A css selector
     * @param callbackCtxt An opaque object that will be given to the callback of the `match` function
     */
    SelectorMatcher.prototype._addSelectable = function (cssSelector, callbackCtxt, listContext) {
        var matcher = this;
        var element = cssSelector.element;
        var classNames = cssSelector.classNames;
        var attrs = cssSelector.attrs;
        var selectable = new SelectorContext(cssSelector, callbackCtxt, listContext);
        if (element) {
            var isTerminal = attrs.length === 0 && classNames.length === 0;
            if (isTerminal) {
                this._addTerminal(matcher._elementMap, element, selectable);
            }
            else {
                matcher = this._addPartial(matcher._elementPartialMap, element);
            }
        }
        if (classNames) {
            for (var i = 0; i < classNames.length; i++) {
                var isTerminal = attrs.length === 0 && i === classNames.length - 1;
                var className = classNames[i];
                if (isTerminal) {
                    this._addTerminal(matcher._classMap, className, selectable);
                }
                else {
                    matcher = this._addPartial(matcher._classPartialMap, className);
                }
            }
        }
        if (attrs) {
            for (var i = 0; i < attrs.length; i += 2) {
                var isTerminal = i === attrs.length - 2;
                var name_2 = attrs[i];
                var value = attrs[i + 1];
                if (isTerminal) {
                    var terminalMap = matcher._attrValueMap;
                    var terminalValuesMap = terminalMap.get(name_2);
                    if (!terminalValuesMap) {
                        terminalValuesMap = new Map();
                        terminalMap.set(name_2, terminalValuesMap);
                    }
                    this._addTerminal(terminalValuesMap, value, selectable);
                }
                else {
                    var partialMap = matcher._attrValuePartialMap;
                    var partialValuesMap = partialMap.get(name_2);
                    if (!partialValuesMap) {
                        partialValuesMap = new Map();
                        partialMap.set(name_2, partialValuesMap);
                    }
                    matcher = this._addPartial(partialValuesMap, value);
                }
            }
        }
    };
    SelectorMatcher.prototype._addTerminal = function (map, name, selectable) {
        var terminalList = map.get(name);
        if (!terminalList) {
            terminalList = [];
            map.set(name, terminalList);
        }
        terminalList.push(selectable);
    };
    SelectorMatcher.prototype._addPartial = function (map, name) {
        var matcher = map.get(name);
        if (!matcher) {
            matcher = new SelectorMatcher();
            map.set(name, matcher);
        }
        return matcher;
    };
    /**
     * Find the objects that have been added via `addSelectable`
     * whose css selector is contained in the given css selector.
     * @param cssSelector A css selector
     * @param matchedCallback This callback will be called with the object handed into `addSelectable`
     * @return boolean true if a match was found
     */
    SelectorMatcher.prototype.match = function (cssSelector, matchedCallback) {
        var result = false;
        var element = cssSelector.element;
        var classNames = cssSelector.classNames;
        var attrs = cssSelector.attrs;
        for (var i = 0; i < this._listContexts.length; i++) {
            this._listContexts[i].alreadyMatched = false;
        }
        result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
        result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) ||
            result;
        if (classNames) {
            for (var i = 0; i < classNames.length; i++) {
                var className = classNames[i];
                result =
                    this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
                result =
                    this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) ||
                        result;
            }
        }
        if (attrs) {
            for (var i = 0; i < attrs.length; i += 2) {
                var name_3 = attrs[i];
                var value = attrs[i + 1];
                var terminalValuesMap = this._attrValueMap.get(name_3);
                if (value) {
                    result =
                        this._matchTerminal(terminalValuesMap, '', cssSelector, matchedCallback) || result;
                }
                result =
                    this._matchTerminal(terminalValuesMap, value, cssSelector, matchedCallback) || result;
                var partialValuesMap = this._attrValuePartialMap.get(name_3);
                if (value) {
                    result = this._matchPartial(partialValuesMap, '', cssSelector, matchedCallback) || result;
                }
                result =
                    this._matchPartial(partialValuesMap, value, cssSelector, matchedCallback) || result;
            }
        }
        return result;
    };
    /** @internal */
    SelectorMatcher.prototype._matchTerminal = function (map, name, cssSelector, matchedCallback) {
        if (!map || typeof name !== 'string') {
            return false;
        }
        var selectables = map.get(name) || [];
        var starSelectables = map.get('*');
        if (starSelectables) {
            selectables = selectables.concat(starSelectables);
        }
        if (selectables.length === 0) {
            return false;
        }
        var selectable;
        var result = false;
        for (var i = 0; i < selectables.length; i++) {
            selectable = selectables[i];
            result = selectable.finalize(cssSelector, matchedCallback) || result;
        }
        return result;
    };
    /** @internal */
    SelectorMatcher.prototype._matchPartial = function (map, name, cssSelector, matchedCallback) {
        if (!map || typeof name !== 'string') {
            return false;
        }
        var nestedSelector = map.get(name);
        if (!nestedSelector) {
            return false;
        }
        // TODO(perf): get rid of recursion and measure again
        // TODO(perf): don't pass the whole selector into the recursion,
        // but only the not processed parts
        return nestedSelector.match(cssSelector, matchedCallback);
    };
    return SelectorMatcher;
}());
export { SelectorMatcher };
var SelectorListContext = /** @class */ (function () {
    function SelectorListContext(selectors) {
        this.selectors = selectors;
        this.alreadyMatched = false;
    }
    return SelectorListContext;
}());
export { SelectorListContext };
// Store context to pass back selector and context when a selector is matched
var SelectorContext = /** @class */ (function () {
    function SelectorContext(selector, cbContext, listContext) {
        this.selector = selector;
        this.cbContext = cbContext;
        this.listContext = listContext;
        this.notSelectors = selector.notSelectors;
    }
    SelectorContext.prototype.finalize = function (cssSelector, callback) {
        var result = true;
        if (this.notSelectors.length > 0 && (!this.listContext || !this.listContext.alreadyMatched)) {
            var notMatcher = SelectorMatcher.createNotMatcher(this.notSelectors);
            result = !notMatcher.match(cssSelector, null);
        }
        if (result && callback && (!this.listContext || !this.listContext.alreadyMatched)) {
            if (this.listContext) {
                this.listContext.alreadyMatched = true;
            }
            callback(this.selector, this.cbContext);
        }
        return result;
    };
    return SelectorContext;
}());
export { SelectorContext };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FDL0IsY0FBYyxHQUFpQixhQUFhO0lBQ3hDLHVCQUF1QixHQUFJLHdCQUF3QjtJQUNuRCxpRkFBaUY7SUFDakYsd0RBQXdEO0lBQ3hELHVEQUF1RCxHQUFJLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQzlFLFFBQVEsR0FBbUQsU0FBUztJQUNwRSxhQUFhLEVBQThDLFNBQVM7QUFDeEUsR0FBRyxDQUFDLENBQUM7QUFnQlQ7Ozs7R0FJRztBQUNIO0lBQUE7UUFDRSxZQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1QixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCOzs7Ozs7Ozs7O1dBVUc7UUFDSCxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztJQXVIbkMsQ0FBQztJQXJIUSxpQkFBSyxHQUFaLFVBQWEsUUFBZ0I7UUFDM0IsSUFBTSxPQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQWtCLEVBQUUsTUFBbUI7WUFDekQsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQ2xGLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDdEI7WUFDRCxH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LENBQUM7SUFDaEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi9tbF9wYXJzZXIvaHRtbF90YWdzJztcblxuY29uc3QgX1NFTEVDVE9SX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICAgJyhcXFxcOm5vdFxcXFwoKXwnICsgICAgICAgICAgICAgICAvLyAxOiBcIjpub3QoXCJcbiAgICAgICAgJygoW1xcXFwuXFxcXCNdPylbLVxcXFx3XSspfCcgKyAgLy8gMjogXCJ0YWdcIjsgMzogXCIuXCIvXCIjXCI7XG4gICAgICAgIC8vIFwiLVwiIHNob3VsZCBhcHBlYXIgZmlyc3QgaW4gdGhlIHJlZ2V4cCBiZWxvdyBhcyBGRjMxIHBhcnNlcyBcIlsuLVxcd11cIiBhcyBhIHJhbmdlXG4gICAgICAgIC8vIDQ6IGF0dHJpYnV0ZTsgNTogYXR0cmlidXRlX3N0cmluZzsgNjogYXR0cmlidXRlX3ZhbHVlXG4gICAgICAgICcoPzpcXFxcWyhbLS5cXFxcdypdKykoPzo9KFtcXFwiXFwnXT8pKFteXFxcXF1cXFwiXFwnXSopXFxcXDUpP1xcXFxdKXwnICsgIC8vIFwiW25hbWVdXCIsIFwiW25hbWU9dmFsdWVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJbbmFtZT1cInZhbHVlXCJdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJbbmFtZT0ndmFsdWUnXVwiXG4gICAgICAgICcoXFxcXCkpfCcgKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3OiBcIilcIlxuICAgICAgICAnKFxcXFxzKixcXFxccyopJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA4OiBcIixcIlxuICAgICdnJyk7XG5cbi8qKlxuICogVGhlc2Ugb2Zmc2V0cyBzaG91bGQgbWF0Y2ggdGhlIG1hdGNoLWdyb3VwcyBpbiBgX1NFTEVDVE9SX1JFR0VYUGAgb2Zmc2V0cy5cbiAqL1xuY29uc3QgZW51bSBTZWxlY3RvclJlZ2V4cCB7XG4gIEFMTCA9IDAsICAvLyBUaGUgd2hvbGUgbWF0Y2hcbiAgTk9UID0gMSxcbiAgVEFHID0gMixcbiAgUFJFRklYID0gMyxcbiAgQVRUUklCVVRFID0gNCxcbiAgQVRUUklCVVRFX1NUUklORyA9IDUsXG4gIEFUVFJJQlVURV9WQUxVRSA9IDYsXG4gIE5PVF9FTkQgPSA3LFxuICBTRVBBUkFUT1IgPSA4LFxufVxuLyoqXG4gKiBBIGNzcyBzZWxlY3RvciBjb250YWlucyBhbiBlbGVtZW50IG5hbWUsXG4gKiBjc3MgY2xhc3NlcyBhbmQgYXR0cmlidXRlL3ZhbHVlIHBhaXJzIHdpdGggdGhlIHB1cnBvc2VcbiAqIG9mIHNlbGVjdGluZyBzdWJzZXRzIG91dCBvZiB0aGVtLlxuICovXG5leHBvcnQgY2xhc3MgQ3NzU2VsZWN0b3Ige1xuICBlbGVtZW50OiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gIGNsYXNzTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKlxuICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBlbmNvZGVkIGluIHBhaXJzIHdoZXJlOlxuICAgKiAtIGV2ZW4gbG9jYXRpb25zIGFyZSBhdHRyaWJ1dGUgbmFtZXNcbiAgICogLSBvZGQgbG9jYXRpb25zIGFyZSBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBTZWxlY3RvcjogYFtrZXkxPXZhbHVlMV1ba2V5Ml1gIHdvdWxkIHBhcnNlIHRvOlxuICAgKiBgYGBcbiAgICogWydrZXkxJywgJ3ZhbHVlMScsICdrZXkyJywgJyddXG4gICAqIGBgYFxuICAgKi9cbiAgYXR0cnM6IHN0cmluZ1tdID0gW107XG4gIG5vdFNlbGVjdG9yczogQ3NzU2VsZWN0b3JbXSA9IFtdO1xuXG4gIHN0YXRpYyBwYXJzZShzZWxlY3Rvcjogc3RyaW5nKTogQ3NzU2VsZWN0b3JbXSB7XG4gICAgY29uc3QgcmVzdWx0czogQ3NzU2VsZWN0b3JbXSA9IFtdO1xuICAgIGNvbnN0IF9hZGRSZXN1bHQgPSAocmVzOiBDc3NTZWxlY3RvcltdLCBjc3NTZWw6IENzc1NlbGVjdG9yKSA9PiB7XG4gICAgICBpZiAoY3NzU2VsLm5vdFNlbGVjdG9ycy5sZW5ndGggPiAwICYmICFjc3NTZWwuZWxlbWVudCAmJiBjc3NTZWwuY2xhc3NOYW1lcy5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgIGNzc1NlbC5hdHRycy5sZW5ndGggPT0gMCkge1xuICAgICAgICBjc3NTZWwuZWxlbWVudCA9ICcqJztcbiAgICAgIH1cbiAgICAgIHJlcy5wdXNoKGNzc1NlbCk7XG4gICAgfTtcbiAgICBsZXQgY3NzU2VsZWN0b3IgPSBuZXcgQ3NzU2VsZWN0b3IoKTtcbiAgICBsZXQgbWF0Y2g6IHN0cmluZ1tdfG51bGw7XG4gICAgbGV0IGN1cnJlbnQgPSBjc3NTZWxlY3RvcjtcbiAgICBsZXQgaW5Ob3QgPSBmYWxzZTtcbiAgICBfU0VMRUNUT1JfUkVHRVhQLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKG1hdGNoID0gX1NFTEVDVE9SX1JFR0VYUC5leGVjKHNlbGVjdG9yKSkge1xuICAgICAgaWYgKG1hdGNoW1NlbGVjdG9yUmVnZXhwLk5PVF0pIHtcbiAgICAgICAgaWYgKGluTm90KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXN0aW5nIDpub3QgaW4gYSBzZWxlY3RvciBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGluTm90ID0gdHJ1ZTtcbiAgICAgICAgY3VycmVudCA9IG5ldyBDc3NTZWxlY3RvcigpO1xuICAgICAgICBjc3NTZWxlY3Rvci5ub3RTZWxlY3RvcnMucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhZyA9IG1hdGNoW1NlbGVjdG9yUmVnZXhwLlRBR107XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1NlbGVjdG9yUmVnZXhwLlBSRUZJWF07XG4gICAgICAgIGlmIChwcmVmaXggPT09ICcjJykge1xuICAgICAgICAgIC8vICNoYXNoXG4gICAgICAgICAgY3VycmVudC5hZGRBdHRyaWJ1dGUoJ2lkJywgdGFnLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgICAgICAvLyBDbGFzc1xuICAgICAgICAgIGN1cnJlbnQuYWRkQ2xhc3NOYW1lKHRhZy5zdWJzdHIoMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEVsZW1lbnRcbiAgICAgICAgICBjdXJyZW50LnNldEVsZW1lbnQodGFnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlID0gbWF0Y2hbU2VsZWN0b3JSZWdleHAuQVRUUklCVVRFXTtcbiAgICAgIGlmIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgY3VycmVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlLCBtYXRjaFtTZWxlY3RvclJlZ2V4cC5BVFRSSUJVVEVfVkFMVUVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaFtTZWxlY3RvclJlZ2V4cC5OT1RfRU5EXSkge1xuICAgICAgICBpbk5vdCA9IGZhbHNlO1xuICAgICAgICBjdXJyZW50ID0gY3NzU2VsZWN0b3I7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hbU2VsZWN0b3JSZWdleHAuU0VQQVJBVE9SXSkge1xuICAgICAgICBpZiAoaW5Ob3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011bHRpcGxlIHNlbGVjdG9ycyBpbiA6bm90IGFyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgX2FkZFJlc3VsdChyZXN1bHRzLCBjc3NTZWxlY3Rvcik7XG4gICAgICAgIGNzc1NlbGVjdG9yID0gY3VycmVudCA9IG5ldyBDc3NTZWxlY3RvcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBfYWRkUmVzdWx0KHJlc3VsdHMsIGNzc1NlbGVjdG9yKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGlzRWxlbWVudFNlbGVjdG9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0VsZW1lbnRTZWxlY3RvcigpICYmIHRoaXMuY2xhc3NOYW1lcy5sZW5ndGggPT0gMCAmJiB0aGlzLmF0dHJzLmxlbmd0aCA9PSAwICYmXG4gICAgICAgIHRoaXMubm90U2VsZWN0b3JzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGhhc0VsZW1lbnRTZWxlY3RvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBzZXRFbGVtZW50KGVsZW1lbnQ6IHN0cmluZ3xudWxsID0gbnVsbCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvKiogR2V0cyBhIHRlbXBsYXRlIHN0cmluZyBmb3IgYW4gZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yLiAqL1xuICBnZXRNYXRjaGluZ0VsZW1lbnRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmVsZW1lbnQgfHwgJ2Rpdic7XG4gICAgY29uc3QgY2xhc3NBdHRyID0gdGhpcy5jbGFzc05hbWVzLmxlbmd0aCA+IDAgPyBgIGNsYXNzPVwiJHt0aGlzLmNsYXNzTmFtZXMuam9pbignICcpfVwiYCA6ICcnO1xuXG4gICAgbGV0IGF0dHJzID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dHJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBjb25zdCBhdHRyTmFtZSA9IHRoaXMuYXR0cnNbaV07XG4gICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLmF0dHJzW2kgKyAxXSAhPT0gJycgPyBgPVwiJHt0aGlzLmF0dHJzW2kgKyAxXX1cImAgOiAnJztcbiAgICAgIGF0dHJzICs9IGAgJHthdHRyTmFtZX0ke2F0dHJWYWx1ZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRIdG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lKS5pc1ZvaWQgPyBgPCR7dGFnTmFtZX0ke2NsYXNzQXR0cn0ke2F0dHJzfS8+YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8JHt0YWdOYW1lfSR7Y2xhc3NBdHRyfSR7YXR0cnN9PjwvJHt0YWdOYW1lfT5gO1xuICB9XG5cbiAgZ2V0QXR0cnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5jbGFzc05hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKCdjbGFzcycsIHRoaXMuY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdCh0aGlzLmF0dHJzKTtcbiAgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgPSAnJykge1xuICAgIHRoaXMuYXR0cnMucHVzaChuYW1lLCB2YWx1ZSAmJiB2YWx1ZS50b0xvd2VyQ2FzZSgpIHx8ICcnKTtcbiAgfVxuXG4gIGFkZENsYXNzTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsYXNzTmFtZXMucHVzaChuYW1lLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSB0aGlzLmVsZW1lbnQgfHwgJyc7XG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lcykge1xuICAgICAgdGhpcy5jbGFzc05hbWVzLmZvckVhY2goa2xhc3MgPT4gcmVzICs9IGAuJHtrbGFzc31gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXR0cnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdHRycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5hdHRyc1tpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmF0dHJzW2kgKyAxXTtcbiAgICAgICAgcmVzICs9IGBbJHtuYW1lfSR7dmFsdWUgPyAnPScgKyB2YWx1ZSA6ICcnfV1gO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5vdFNlbGVjdG9ycy5mb3JFYWNoKG5vdFNlbGVjdG9yID0+IHJlcyArPSBgOm5vdCgke25vdFNlbGVjdG9yfSlgKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogUmVhZHMgYSBsaXN0IG9mIENzc1NlbGVjdG9ycyBhbmQgYWxsb3dzIHRvIGNhbGN1bGF0ZSB3aGljaCBvbmVzXG4gKiBhcmUgY29udGFpbmVkIGluIGEgZ2l2ZW4gQ3NzU2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rvck1hdGNoZXI8VCA9IGFueT4ge1xuICBzdGF0aWMgY3JlYXRlTm90TWF0Y2hlcihub3RTZWxlY3RvcnM6IENzc1NlbGVjdG9yW10pOiBTZWxlY3Rvck1hdGNoZXI8bnVsbD4ge1xuICAgIGNvbnN0IG5vdE1hdGNoZXIgPSBuZXcgU2VsZWN0b3JNYXRjaGVyPG51bGw+KCk7XG4gICAgbm90TWF0Y2hlci5hZGRTZWxlY3RhYmxlcyhub3RTZWxlY3RvcnMsIG51bGwpO1xuICAgIHJldHVybiBub3RNYXRjaGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWxlbWVudE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvckNvbnRleHQ8VD5bXT4oKTtcbiAgcHJpdmF0ZSBfZWxlbWVudFBhcnRpYWxNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JNYXRjaGVyPFQ+PigpO1xuICBwcml2YXRlIF9jbGFzc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvckNvbnRleHQ8VD5bXT4oKTtcbiAgcHJpdmF0ZSBfY2xhc3NQYXJ0aWFsTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yTWF0Y2hlcjxUPj4oKTtcbiAgcHJpdmF0ZSBfYXR0clZhbHVlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPj4oKTtcbiAgcHJpdmF0ZSBfYXR0clZhbHVlUGFydGlhbE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBTZWxlY3Rvck1hdGNoZXI8VD4+PigpO1xuICBwcml2YXRlIF9saXN0Q29udGV4dHM6IFNlbGVjdG9yTGlzdENvbnRleHRbXSA9IFtdO1xuXG4gIGFkZFNlbGVjdGFibGVzKGNzc1NlbGVjdG9yczogQ3NzU2VsZWN0b3JbXSwgY2FsbGJhY2tDdHh0PzogVCkge1xuICAgIGxldCBsaXN0Q29udGV4dDogU2VsZWN0b3JMaXN0Q29udGV4dCA9IG51bGwhO1xuICAgIGlmIChjc3NTZWxlY3RvcnMubGVuZ3RoID4gMSkge1xuICAgICAgbGlzdENvbnRleHQgPSBuZXcgU2VsZWN0b3JMaXN0Q29udGV4dChjc3NTZWxlY3RvcnMpO1xuICAgICAgdGhpcy5fbGlzdENvbnRleHRzLnB1c2gobGlzdENvbnRleHQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1NlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fYWRkU2VsZWN0YWJsZShjc3NTZWxlY3RvcnNbaV0sIGNhbGxiYWNrQ3R4dCBhcyBULCBsaXN0Q29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvYmplY3QgdGhhdCBjYW4gYmUgZm91bmQgbGF0ZXIgb24gYnkgY2FsbGluZyBgbWF0Y2hgLlxuICAgKiBAcGFyYW0gY3NzU2VsZWN0b3IgQSBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIGNhbGxiYWNrQ3R4dCBBbiBvcGFxdWUgb2JqZWN0IHRoYXQgd2lsbCBiZSBnaXZlbiB0byB0aGUgY2FsbGJhY2sgb2YgdGhlIGBtYXRjaGAgZnVuY3Rpb25cbiAgICovXG4gIHByaXZhdGUgX2FkZFNlbGVjdGFibGUoXG4gICAgICBjc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IsIGNhbGxiYWNrQ3R4dDogVCwgbGlzdENvbnRleHQ6IFNlbGVjdG9yTGlzdENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcjogU2VsZWN0b3JNYXRjaGVyPFQ+ID0gdGhpcztcbiAgICBjb25zdCBlbGVtZW50ID0gY3NzU2VsZWN0b3IuZWxlbWVudDtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY3NzU2VsZWN0b3IuY2xhc3NOYW1lcztcbiAgICBjb25zdCBhdHRycyA9IGNzc1NlbGVjdG9yLmF0dHJzO1xuICAgIGNvbnN0IHNlbGVjdGFibGUgPSBuZXcgU2VsZWN0b3JDb250ZXh0KGNzc1NlbGVjdG9yLCBjYWxsYmFja0N0eHQsIGxpc3RDb250ZXh0KTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBpc1Rlcm1pbmFsID0gYXR0cnMubGVuZ3RoID09PSAwICYmIGNsYXNzTmFtZXMubGVuZ3RoID09PSAwO1xuICAgICAgaWYgKGlzVGVybWluYWwpIHtcbiAgICAgICAgdGhpcy5fYWRkVGVybWluYWwobWF0Y2hlci5fZWxlbWVudE1hcCwgZWxlbWVudCwgc2VsZWN0YWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGVyID0gdGhpcy5fYWRkUGFydGlhbChtYXRjaGVyLl9lbGVtZW50UGFydGlhbE1hcCwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpc1Rlcm1pbmFsID0gYXR0cnMubGVuZ3RoID09PSAwICYmIGkgPT09IGNsYXNzTmFtZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lc1tpXTtcbiAgICAgICAgaWYgKGlzVGVybWluYWwpIHtcbiAgICAgICAgICB0aGlzLl9hZGRUZXJtaW5hbChtYXRjaGVyLl9jbGFzc01hcCwgY2xhc3NOYW1lLCBzZWxlY3RhYmxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVyID0gdGhpcy5fYWRkUGFydGlhbChtYXRjaGVyLl9jbGFzc1BhcnRpYWxNYXAsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgY29uc3QgaXNUZXJtaW5hbCA9IGkgPT09IGF0dHJzLmxlbmd0aCAtIDI7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1tpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1tpICsgMV07XG4gICAgICAgIGlmIChpc1Rlcm1pbmFsKSB7XG4gICAgICAgICAgY29uc3QgdGVybWluYWxNYXAgPSBtYXRjaGVyLl9hdHRyVmFsdWVNYXA7XG4gICAgICAgICAgbGV0IHRlcm1pbmFsVmFsdWVzTWFwID0gdGVybWluYWxNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAgIGlmICghdGVybWluYWxWYWx1ZXNNYXApIHtcbiAgICAgICAgICAgIHRlcm1pbmFsVmFsdWVzTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPigpO1xuICAgICAgICAgICAgdGVybWluYWxNYXAuc2V0KG5hbWUsIHRlcm1pbmFsVmFsdWVzTWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYWRkVGVybWluYWwodGVybWluYWxWYWx1ZXNNYXAsIHZhbHVlLCBzZWxlY3RhYmxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0aWFsTWFwID0gbWF0Y2hlci5fYXR0clZhbHVlUGFydGlhbE1hcDtcbiAgICAgICAgICBsZXQgcGFydGlhbFZhbHVlc01hcCA9IHBhcnRpYWxNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAgIGlmICghcGFydGlhbFZhbHVlc01hcCkge1xuICAgICAgICAgICAgcGFydGlhbFZhbHVlc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3Rvck1hdGNoZXI8VD4+KCk7XG4gICAgICAgICAgICBwYXJ0aWFsTWFwLnNldChuYW1lLCBwYXJ0aWFsVmFsdWVzTWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWF0Y2hlciA9IHRoaXMuX2FkZFBhcnRpYWwocGFydGlhbFZhbHVlc01hcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVGVybWluYWwoXG4gICAgICBtYXA6IE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPiwgbmFtZTogc3RyaW5nLCBzZWxlY3RhYmxlOiBTZWxlY3RvckNvbnRleHQ8VD4pIHtcbiAgICBsZXQgdGVybWluYWxMaXN0ID0gbWFwLmdldChuYW1lKTtcbiAgICBpZiAoIXRlcm1pbmFsTGlzdCkge1xuICAgICAgdGVybWluYWxMaXN0ID0gW107XG4gICAgICBtYXAuc2V0KG5hbWUsIHRlcm1pbmFsTGlzdCk7XG4gICAgfVxuICAgIHRlcm1pbmFsTGlzdC5wdXNoKHNlbGVjdGFibGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkUGFydGlhbChtYXA6IE1hcDxzdHJpbmcsIFNlbGVjdG9yTWF0Y2hlcjxUPj4sIG5hbWU6IHN0cmluZyk6IFNlbGVjdG9yTWF0Y2hlcjxUPiB7XG4gICAgbGV0IG1hdGNoZXIgPSBtYXAuZ2V0KG5hbWUpO1xuICAgIGlmICghbWF0Y2hlcikge1xuICAgICAgbWF0Y2hlciA9IG5ldyBTZWxlY3Rvck1hdGNoZXI8VD4oKTtcbiAgICAgIG1hcC5zZXQobmFtZSwgbWF0Y2hlcik7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIG9iamVjdHMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgdmlhIGBhZGRTZWxlY3RhYmxlYFxuICAgKiB3aG9zZSBjc3Mgc2VsZWN0b3IgaXMgY29udGFpbmVkIGluIHRoZSBnaXZlbiBjc3Mgc2VsZWN0b3IuXG4gICAqIEBwYXJhbSBjc3NTZWxlY3RvciBBIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0gbWF0Y2hlZENhbGxiYWNrIFRoaXMgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgb2JqZWN0IGhhbmRlZCBpbnRvIGBhZGRTZWxlY3RhYmxlYFxuICAgKiBAcmV0dXJuIGJvb2xlYW4gdHJ1ZSBpZiBhIG1hdGNoIHdhcyBmb3VuZFxuICAgKi9cbiAgbWF0Y2goY3NzU2VsZWN0b3I6IENzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2s6ICgoYzogQ3NzU2VsZWN0b3IsIGE6IFQpID0+IHZvaWQpfG51bGwpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgY29uc3QgZWxlbWVudCA9IGNzc1NlbGVjdG9yLmVsZW1lbnQhO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjc3NTZWxlY3Rvci5jbGFzc05hbWVzO1xuICAgIGNvbnN0IGF0dHJzID0gY3NzU2VsZWN0b3IuYXR0cnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RDb250ZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fbGlzdENvbnRleHRzW2ldLmFscmVhZHlNYXRjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gdGhpcy5fbWF0Y2hUZXJtaW5hbCh0aGlzLl9lbGVtZW50TWFwLCBlbGVtZW50LCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fCByZXN1bHQ7XG4gICAgcmVzdWx0ID0gdGhpcy5fbWF0Y2hQYXJ0aWFsKHRoaXMuX2VsZW1lbnRQYXJ0aWFsTWFwLCBlbGVtZW50LCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoY2xhc3NOYW1lcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbaV07XG4gICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICB0aGlzLl9tYXRjaFRlcm1pbmFsKHRoaXMuX2NsYXNzTWFwLCBjbGFzc05hbWUsIGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spIHx8IHJlc3VsdDtcbiAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgIHRoaXMuX21hdGNoUGFydGlhbCh0aGlzLl9jbGFzc1BhcnRpYWxNYXAsIGNsYXNzTmFtZSwgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHxcbiAgICAgICAgICAgIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2kgKyAxXTtcblxuICAgICAgICBjb25zdCB0ZXJtaW5hbFZhbHVlc01hcCA9IHRoaXMuX2F0dHJWYWx1ZU1hcC5nZXQobmFtZSkhO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICByZXN1bHQgPVxuICAgICAgICAgICAgICB0aGlzLl9tYXRjaFRlcm1pbmFsKHRlcm1pbmFsVmFsdWVzTWFwLCAnJywgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHwgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICB0aGlzLl9tYXRjaFRlcm1pbmFsKHRlcm1pbmFsVmFsdWVzTWFwLCB2YWx1ZSwgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHwgcmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IHBhcnRpYWxWYWx1ZXNNYXAgPSB0aGlzLl9hdHRyVmFsdWVQYXJ0aWFsTWFwLmdldChuYW1lKSE7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX21hdGNoUGFydGlhbChwYXJ0aWFsVmFsdWVzTWFwLCAnJywgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHwgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICB0aGlzLl9tYXRjaFBhcnRpYWwocGFydGlhbFZhbHVlc01hcCwgdmFsdWUsIGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spIHx8IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX21hdGNoVGVybWluYWwoXG4gICAgICBtYXA6IE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPiwgbmFtZTogc3RyaW5nLCBjc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IsXG4gICAgICBtYXRjaGVkQ2FsbGJhY2s6ICgoYzogQ3NzU2VsZWN0b3IsIGE6IGFueSkgPT4gdm9pZCl8bnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmICghbWFwIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RhYmxlczogU2VsZWN0b3JDb250ZXh0PFQ+W10gPSBtYXAuZ2V0KG5hbWUpIHx8IFtdO1xuICAgIGNvbnN0IHN0YXJTZWxlY3RhYmxlczogU2VsZWN0b3JDb250ZXh0PFQ+W10gPSBtYXAuZ2V0KCcqJykhO1xuICAgIGlmIChzdGFyU2VsZWN0YWJsZXMpIHtcbiAgICAgIHNlbGVjdGFibGVzID0gc2VsZWN0YWJsZXMuY29uY2F0KHN0YXJTZWxlY3RhYmxlcyk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGFibGU6IFNlbGVjdG9yQ29udGV4dDxUPjtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VsZWN0YWJsZSA9IHNlbGVjdGFibGVzW2ldO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0YWJsZS5maW5hbGl6ZShjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fCByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9tYXRjaFBhcnRpYWwoXG4gICAgICBtYXA6IE1hcDxzdHJpbmcsIFNlbGVjdG9yTWF0Y2hlcjxUPj4sIG5hbWU6IHN0cmluZywgY3NzU2VsZWN0b3I6IENzc1NlbGVjdG9yLFxuICAgICAgbWF0Y2hlZENhbGxiYWNrOiAoKGM6IENzc1NlbGVjdG9yLCBhOiBhbnkpID0+IHZvaWQpfG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAoIW1hcCB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXN0ZWRTZWxlY3RvciA9IG1hcC5nZXQobmFtZSk7XG4gICAgaWYgKCFuZXN0ZWRTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUT0RPKHBlcmYpOiBnZXQgcmlkIG9mIHJlY3Vyc2lvbiBhbmQgbWVhc3VyZSBhZ2FpblxuICAgIC8vIFRPRE8ocGVyZik6IGRvbid0IHBhc3MgdGhlIHdob2xlIHNlbGVjdG9yIGludG8gdGhlIHJlY3Vyc2lvbixcbiAgICAvLyBidXQgb25seSB0aGUgbm90IHByb2Nlc3NlZCBwYXJ0c1xuICAgIHJldHVybiBuZXN0ZWRTZWxlY3Rvci5tYXRjaChjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rvckxpc3RDb250ZXh0IHtcbiAgYWxyZWFkeU1hdGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VsZWN0b3JzOiBDc3NTZWxlY3RvcltdKSB7fVxufVxuXG4vLyBTdG9yZSBjb250ZXh0IHRvIHBhc3MgYmFjayBzZWxlY3RvciBhbmQgY29udGV4dCB3aGVuIGEgc2VsZWN0b3IgaXMgbWF0Y2hlZFxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yQ29udGV4dDxUID0gYW55PiB7XG4gIG5vdFNlbGVjdG9yczogQ3NzU2VsZWN0b3JbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHB1YmxpYyBjYkNvbnRleHQ6IFQsIHB1YmxpYyBsaXN0Q29udGV4dDogU2VsZWN0b3JMaXN0Q29udGV4dCkge1xuICAgIHRoaXMubm90U2VsZWN0b3JzID0gc2VsZWN0b3Iubm90U2VsZWN0b3JzO1xuICB9XG5cbiAgZmluYWxpemUoY3NzU2VsZWN0b3I6IENzc1NlbGVjdG9yLCBjYWxsYmFjazogKChjOiBDc3NTZWxlY3RvciwgYTogVCkgPT4gdm9pZCl8bnVsbCk6IGJvb2xlYW4ge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm5vdFNlbGVjdG9ycy5sZW5ndGggPiAwICYmICghdGhpcy5saXN0Q29udGV4dCB8fCAhdGhpcy5saXN0Q29udGV4dC5hbHJlYWR5TWF0Y2hlZCkpIHtcbiAgICAgIGNvbnN0IG5vdE1hdGNoZXIgPSBTZWxlY3Rvck1hdGNoZXIuY3JlYXRlTm90TWF0Y2hlcih0aGlzLm5vdFNlbGVjdG9ycyk7XG4gICAgICByZXN1bHQgPSAhbm90TWF0Y2hlci5tYXRjaChjc3NTZWxlY3RvciwgbnVsbCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgJiYgY2FsbGJhY2sgJiYgKCF0aGlzLmxpc3RDb250ZXh0IHx8ICF0aGlzLmxpc3RDb250ZXh0LmFscmVhZHlNYXRjaGVkKSkge1xuICAgICAgaWYgKHRoaXMubGlzdENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGV4dC5hbHJlYWR5TWF0Y2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayh0aGlzLnNlbGVjdG9yLCB0aGlzLmNiQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==