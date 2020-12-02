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
        define("@angular/compiler/src/selector", ["require", "exports", "@angular/compiler/src/ml_parser/html_tags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var html_tags_1 = require("@angular/compiler/src/ml_parser/html_tags");
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
            return html_tags_1.getHtmlTagDefinition(tagName).isVoid ? "<" + tagName + classAttr + attrs + "/>" :
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
    exports.CssSelector = CssSelector;
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
    exports.SelectorMatcher = SelectorMatcher;
    var SelectorListContext = /** @class */ (function () {
        function SelectorListContext(selectors) {
            this.selectors = selectors;
            this.alreadyMatched = false;
        }
        return SelectorListContext;
    }());
    exports.SelectorListContext = SelectorListContext;
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
    exports.SelectorContext = SelectorContext;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx1RUFBMkQ7SUFFM0QsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FDL0IsY0FBYyxHQUFpQixhQUFhO1FBQ3hDLHVCQUF1QixHQUFJLHdCQUF3QjtRQUNuRCxpRkFBaUY7UUFDakYsd0RBQXdEO1FBQ3hELHVEQUF1RCxHQUFJLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQzlFLFFBQVEsR0FBbUQsU0FBUztRQUNwRSxhQUFhLEVBQThDLFNBQVM7SUFDeEUsR0FBRyxDQUFDLENBQUM7SUFnQlQ7Ozs7T0FJRztJQUNIO1FBQUE7WUFDRSxZQUFPLEdBQWdCLElBQUksQ0FBQztZQUM1QixlQUFVLEdBQWEsRUFBRSxDQUFDO1lBQzFCOzs7Ozs7Ozs7O2VBVUc7WUFDSCxVQUFLLEdBQWEsRUFBRSxDQUFDO1lBQ3JCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQXVIbkMsQ0FBQztRQXJIUSxpQkFBSyxHQUFaLFVBQWEsUUFBZ0I7WUFDM0IsSUFBTSxPQUFPLEdBQWtCLEVBQUUsQ0FBQztZQUNsQyxJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQWtCLEVBQUUsTUFBbUI7Z0JBQ3pELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDO29CQUNsRixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2lCQUN0QjtnQkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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SUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQUFDLEFBdEJELElBc0JDO0lBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tICcuL21sX3BhcnNlci9odG1sX3RhZ3MnO1xuXG5jb25zdCBfU0VMRUNUT1JfUkVHRVhQID0gbmV3IFJlZ0V4cChcbiAgICAnKFxcXFw6bm90XFxcXCgpfCcgKyAgICAgICAgICAgICAgIC8vIDE6IFwiOm5vdChcIlxuICAgICAgICAnKChbXFxcXC5cXFxcI10/KVstXFxcXHddKyl8JyArICAvLyAyOiBcInRhZ1wiOyAzOiBcIi5cIi9cIiNcIjtcbiAgICAgICAgLy8gXCItXCIgc2hvdWxkIGFwcGVhciBmaXJzdCBpbiB0aGUgcmVnZXhwIGJlbG93IGFzIEZGMzEgcGFyc2VzIFwiWy4tXFx3XVwiIGFzIGEgcmFuZ2VcbiAgICAgICAgLy8gNDogYXR0cmlidXRlOyA1OiBhdHRyaWJ1dGVfc3RyaW5nOyA2OiBhdHRyaWJ1dGVfdmFsdWVcbiAgICAgICAgJyg/OlxcXFxbKFstLlxcXFx3Kl0rKSg/Oj0oW1xcXCJcXCddPykoW15cXFxcXVxcXCJcXCddKilcXFxcNSk/XFxcXF0pfCcgKyAgLy8gXCJbbmFtZV1cIiwgXCJbbmFtZT12YWx1ZV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIltuYW1lPVwidmFsdWVcIl1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIltuYW1lPSd2YWx1ZSddXCJcbiAgICAgICAgJyhcXFxcKSl8JyArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc6IFwiKVwiXG4gICAgICAgICcoXFxcXHMqLFxcXFxzKiknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDg6IFwiLFwiXG4gICAgJ2cnKTtcblxuLyoqXG4gKiBUaGVzZSBvZmZzZXRzIHNob3VsZCBtYXRjaCB0aGUgbWF0Y2gtZ3JvdXBzIGluIGBfU0VMRUNUT1JfUkVHRVhQYCBvZmZzZXRzLlxuICovXG5jb25zdCBlbnVtIFNlbGVjdG9yUmVnZXhwIHtcbiAgQUxMID0gMCwgIC8vIFRoZSB3aG9sZSBtYXRjaFxuICBOT1QgPSAxLFxuICBUQUcgPSAyLFxuICBQUkVGSVggPSAzLFxuICBBVFRSSUJVVEUgPSA0LFxuICBBVFRSSUJVVEVfU1RSSU5HID0gNSxcbiAgQVRUUklCVVRFX1ZBTFVFID0gNixcbiAgTk9UX0VORCA9IDcsXG4gIFNFUEFSQVRPUiA9IDgsXG59XG4vKipcbiAqIEEgY3NzIHNlbGVjdG9yIGNvbnRhaW5zIGFuIGVsZW1lbnQgbmFtZSxcbiAqIGNzcyBjbGFzc2VzIGFuZCBhdHRyaWJ1dGUvdmFsdWUgcGFpcnMgd2l0aCB0aGUgcHVycG9zZVxuICogb2Ygc2VsZWN0aW5nIHN1YnNldHMgb3V0IG9mIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBDc3NTZWxlY3RvciB7XG4gIGVsZW1lbnQ6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgY2xhc3NOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RvcnMgYXJlIGVuY29kZWQgaW4gcGFpcnMgd2hlcmU6XG4gICAqIC0gZXZlbiBsb2NhdGlvbnMgYXJlIGF0dHJpYnV0ZSBuYW1lc1xuICAgKiAtIG9kZCBsb2NhdGlvbnMgYXJlIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIFNlbGVjdG9yOiBgW2tleTE9dmFsdWUxXVtrZXkyXWAgd291bGQgcGFyc2UgdG86XG4gICAqIGBgYFxuICAgKiBbJ2tleTEnLCAndmFsdWUxJywgJ2tleTInLCAnJ11cbiAgICogYGBgXG4gICAqL1xuICBhdHRyczogc3RyaW5nW10gPSBbXTtcbiAgbm90U2VsZWN0b3JzOiBDc3NTZWxlY3RvcltdID0gW107XG5cbiAgc3RhdGljIHBhcnNlKHNlbGVjdG9yOiBzdHJpbmcpOiBDc3NTZWxlY3RvcltdIHtcbiAgICBjb25zdCByZXN1bHRzOiBDc3NTZWxlY3RvcltdID0gW107XG4gICAgY29uc3QgX2FkZFJlc3VsdCA9IChyZXM6IENzc1NlbGVjdG9yW10sIGNzc1NlbDogQ3NzU2VsZWN0b3IpID0+IHtcbiAgICAgIGlmIChjc3NTZWwubm90U2VsZWN0b3JzLmxlbmd0aCA+IDAgJiYgIWNzc1NlbC5lbGVtZW50ICYmIGNzc1NlbC5jbGFzc05hbWVzLmxlbmd0aCA9PSAwICYmXG4gICAgICAgICAgY3NzU2VsLmF0dHJzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNzc1NlbC5lbGVtZW50ID0gJyonO1xuICAgICAgfVxuICAgICAgcmVzLnB1c2goY3NzU2VsKTtcbiAgICB9O1xuICAgIGxldCBjc3NTZWxlY3RvciA9IG5ldyBDc3NTZWxlY3RvcigpO1xuICAgIGxldCBtYXRjaDogc3RyaW5nW118bnVsbDtcbiAgICBsZXQgY3VycmVudCA9IGNzc1NlbGVjdG9yO1xuICAgIGxldCBpbk5vdCA9IGZhbHNlO1xuICAgIF9TRUxFQ1RPUl9SRUdFWFAubGFzdEluZGV4ID0gMDtcbiAgICB3aGlsZSAobWF0Y2ggPSBfU0VMRUNUT1JfUkVHRVhQLmV4ZWMoc2VsZWN0b3IpKSB7XG4gICAgICBpZiAobWF0Y2hbU2VsZWN0b3JSZWdleHAuTk9UXSkge1xuICAgICAgICBpZiAoaW5Ob3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lc3RpbmcgOm5vdCBpbiBhIHNlbGVjdG9yIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaW5Ob3QgPSB0cnVlO1xuICAgICAgICBjdXJyZW50ID0gbmV3IENzc1NlbGVjdG9yKCk7XG4gICAgICAgIGNzc1NlbGVjdG9yLm5vdFNlbGVjdG9ycy5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFnID0gbWF0Y2hbU2VsZWN0b3JSZWdleHAuVEFHXTtcbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbU2VsZWN0b3JSZWdleHAuUFJFRklYXTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJyMnKSB7XG4gICAgICAgICAgLy8gI2hhc2hcbiAgICAgICAgICBjdXJyZW50LmFkZEF0dHJpYnV0ZSgnaWQnLCB0YWcuc3Vic3RyKDEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgICAgIC8vIENsYXNzXG4gICAgICAgICAgY3VycmVudC5hZGRDbGFzc05hbWUodGFnLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRWxlbWVudFxuICAgICAgICAgIGN1cnJlbnQuc2V0RWxlbWVudCh0YWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRyaWJ1dGUgPSBtYXRjaFtTZWxlY3RvclJlZ2V4cC5BVFRSSUJVVEVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICBjdXJyZW50LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIG1hdGNoW1NlbGVjdG9yUmVnZXhwLkFUVFJJQlVURV9WQUxVRV0pO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoW1NlbGVjdG9yUmVnZXhwLk5PVF9FTkRdKSB7XG4gICAgICAgIGluTm90ID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnQgPSBjc3NTZWxlY3RvcjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaFtTZWxlY3RvclJlZ2V4cC5TRVBBUkFUT1JdKSB7XG4gICAgICAgIGlmIChpbk5vdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVsdGlwbGUgc2VsZWN0b3JzIGluIDpub3QgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBfYWRkUmVzdWx0KHJlc3VsdHMsIGNzc1NlbGVjdG9yKTtcbiAgICAgICAgY3NzU2VsZWN0b3IgPSBjdXJyZW50ID0gbmV3IENzc1NlbGVjdG9yKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9hZGRSZXN1bHQocmVzdWx0cywgY3NzU2VsZWN0b3IpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgaXNFbGVtZW50U2VsZWN0b3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzRWxlbWVudFNlbGVjdG9yKCkgJiYgdGhpcy5jbGFzc05hbWVzLmxlbmd0aCA9PSAwICYmIHRoaXMuYXR0cnMubGVuZ3RoID09IDAgJiZcbiAgICAgICAgdGhpcy5ub3RTZWxlY3RvcnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaGFzRWxlbWVudFNlbGVjdG9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIHNldEVsZW1lbnQoZWxlbWVudDogc3RyaW5nfG51bGwgPSBudWxsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKiBHZXRzIGEgdGVtcGxhdGUgc3RyaW5nIGZvciBhbiBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IuICovXG4gIGdldE1hdGNoaW5nRWxlbWVudFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZWxlbWVudCB8fCAnZGl2JztcbiAgICBjb25zdCBjbGFzc0F0dHIgPSB0aGlzLmNsYXNzTmFtZXMubGVuZ3RoID4gMCA/IGAgY2xhc3M9XCIke3RoaXMuY2xhc3NOYW1lcy5qb2luKCcgJyl9XCJgIDogJyc7XG5cbiAgICBsZXQgYXR0cnMgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0cnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGNvbnN0IGF0dHJOYW1lID0gdGhpcy5hdHRyc1tpXTtcbiAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuYXR0cnNbaSArIDFdICE9PSAnJyA/IGA9XCIke3RoaXMuYXR0cnNbaSArIDFdfVwiYCA6ICcnO1xuICAgICAgYXR0cnMgKz0gYCAke2F0dHJOYW1lfSR7YXR0clZhbHVlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEh0bWxUYWdEZWZpbml0aW9uKHRhZ05hbWUpLmlzVm9pZCA/IGA8JHt0YWdOYW1lfSR7Y2xhc3NBdHRyfSR7YXR0cnN9Lz5gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDwke3RhZ05hbWV9JHtjbGFzc0F0dHJ9JHthdHRyc30+PC8ke3RhZ05hbWV9PmA7XG4gIH1cblxuICBnZXRBdHRycygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh0aGlzLmNsYXNzTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0LnB1c2goJ2NsYXNzJywgdGhpcy5jbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuY29uY2F0KHRoaXMuYXR0cnMpO1xuICB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyA9ICcnKSB7XG4gICAgdGhpcy5hdHRycy5wdXNoKG5hbWUsIHZhbHVlICYmIHZhbHVlLnRvTG93ZXJDYXNlKCkgfHwgJycpO1xuICB9XG5cbiAgYWRkQ2xhc3NOYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY2xhc3NOYW1lcy5wdXNoKG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGxldCByZXM6IHN0cmluZyA9IHRoaXMuZWxlbWVudCB8fCAnJztcbiAgICBpZiAodGhpcy5jbGFzc05hbWVzKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZXMuZm9yRWFjaChrbGFzcyA9PiByZXMgKz0gYC4ke2tsYXNzfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdHRycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dHJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmF0dHJzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXR0cnNbaSArIDFdO1xuICAgICAgICByZXMgKz0gYFske25hbWV9JHt2YWx1ZSA/ICc9JyArIHZhbHVlIDogJyd9XWA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubm90U2VsZWN0b3JzLmZvckVhY2gobm90U2VsZWN0b3IgPT4gcmVzICs9IGA6bm90KCR7bm90U2VsZWN0b3J9KWApO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWFkcyBhIGxpc3Qgb2YgQ3NzU2VsZWN0b3JzIGFuZCBhbGxvd3MgdG8gY2FsY3VsYXRlIHdoaWNoIG9uZXNcbiAqIGFyZSBjb250YWluZWQgaW4gYSBnaXZlbiBDc3NTZWxlY3Rvci5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdG9yTWF0Y2hlcjxUID0gYW55PiB7XG4gIHN0YXRpYyBjcmVhdGVOb3RNYXRjaGVyKG5vdFNlbGVjdG9yczogQ3NzU2VsZWN0b3JbXSk6IFNlbGVjdG9yTWF0Y2hlcjxudWxsPiB7XG4gICAgY29uc3Qgbm90TWF0Y2hlciA9IG5ldyBTZWxlY3Rvck1hdGNoZXI8bnVsbD4oKTtcbiAgICBub3RNYXRjaGVyLmFkZFNlbGVjdGFibGVzKG5vdFNlbGVjdG9ycywgbnVsbCk7XG4gICAgcmV0dXJuIG5vdE1hdGNoZXI7XG4gIH1cblxuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPigpO1xuICBwcml2YXRlIF9lbGVtZW50UGFydGlhbE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3Rvck1hdGNoZXI8VD4+KCk7XG4gIHByaXZhdGUgX2NsYXNzTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yQ29udGV4dDxUPltdPigpO1xuICBwcml2YXRlIF9jbGFzc1BhcnRpYWxNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JNYXRjaGVyPFQ+PigpO1xuICBwcml2YXRlIF9hdHRyVmFsdWVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgU2VsZWN0b3JDb250ZXh0PFQ+W10+PigpO1xuICBwcml2YXRlIF9hdHRyVmFsdWVQYXJ0aWFsTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIFNlbGVjdG9yTWF0Y2hlcjxUPj4+KCk7XG4gIHByaXZhdGUgX2xpc3RDb250ZXh0czogU2VsZWN0b3JMaXN0Q29udGV4dFtdID0gW107XG5cbiAgYWRkU2VsZWN0YWJsZXMoY3NzU2VsZWN0b3JzOiBDc3NTZWxlY3RvcltdLCBjYWxsYmFja0N0eHQ/OiBUKSB7XG4gICAgbGV0IGxpc3RDb250ZXh0OiBTZWxlY3Rvckxpc3RDb250ZXh0ID0gbnVsbCE7XG4gICAgaWYgKGNzc1NlbGVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICBsaXN0Q29udGV4dCA9IG5ldyBTZWxlY3Rvckxpc3RDb250ZXh0KGNzc1NlbGVjdG9ycyk7XG4gICAgICB0aGlzLl9saXN0Q29udGV4dHMucHVzaChsaXN0Q29udGV4dCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzU2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9hZGRTZWxlY3RhYmxlKGNzc1NlbGVjdG9yc1tpXSwgY2FsbGJhY2tDdHh0IGFzIFQsIGxpc3RDb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBmb3VuZCBsYXRlciBvbiBieSBjYWxsaW5nIGBtYXRjaGAuXG4gICAqIEBwYXJhbSBjc3NTZWxlY3RvciBBIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0gY2FsbGJhY2tDdHh0IEFuIG9wYXF1ZSBvYmplY3QgdGhhdCB3aWxsIGJlIGdpdmVuIHRvIHRoZSBjYWxsYmFjayBvZiB0aGUgYG1hdGNoYCBmdW5jdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkU2VsZWN0YWJsZShcbiAgICAgIGNzc1NlbGVjdG9yOiBDc3NTZWxlY3RvciwgY2FsbGJhY2tDdHh0OiBULCBsaXN0Q29udGV4dDogU2VsZWN0b3JMaXN0Q29udGV4dCkge1xuICAgIGxldCBtYXRjaGVyOiBTZWxlY3Rvck1hdGNoZXI8VD4gPSB0aGlzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjc3NTZWxlY3Rvci5lbGVtZW50O1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjc3NTZWxlY3Rvci5jbGFzc05hbWVzO1xuICAgIGNvbnN0IGF0dHJzID0gY3NzU2VsZWN0b3IuYXR0cnM7XG4gICAgY29uc3Qgc2VsZWN0YWJsZSA9IG5ldyBTZWxlY3RvckNvbnRleHQoY3NzU2VsZWN0b3IsIGNhbGxiYWNrQ3R4dCwgbGlzdENvbnRleHQpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlzVGVybWluYWwgPSBhdHRycy5sZW5ndGggPT09IDAgJiYgY2xhc3NOYW1lcy5sZW5ndGggPT09IDA7XG4gICAgICBpZiAoaXNUZXJtaW5hbCkge1xuICAgICAgICB0aGlzLl9hZGRUZXJtaW5hbChtYXRjaGVyLl9lbGVtZW50TWFwLCBlbGVtZW50LCBzZWxlY3RhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoZXIgPSB0aGlzLl9hZGRQYXJ0aWFsKG1hdGNoZXIuX2VsZW1lbnRQYXJ0aWFsTWFwLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGlzVGVybWluYWwgPSBhdHRycy5sZW5ndGggPT09IDAgJiYgaSA9PT0gY2xhc3NOYW1lcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzW2ldO1xuICAgICAgICBpZiAoaXNUZXJtaW5hbCkge1xuICAgICAgICAgIHRoaXMuX2FkZFRlcm1pbmFsKG1hdGNoZXIuX2NsYXNzTWFwLCBjbGFzc05hbWUsIHNlbGVjdGFibGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZXIgPSB0aGlzLl9hZGRQYXJ0aWFsKG1hdGNoZXIuX2NsYXNzUGFydGlhbE1hcCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBpc1Rlcm1pbmFsID0gaSA9PT0gYXR0cnMubGVuZ3RoIC0gMjtcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2kgKyAxXTtcbiAgICAgICAgaWYgKGlzVGVybWluYWwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hbE1hcCA9IG1hdGNoZXIuX2F0dHJWYWx1ZU1hcDtcbiAgICAgICAgICBsZXQgdGVybWluYWxWYWx1ZXNNYXAgPSB0ZXJtaW5hbE1hcC5nZXQobmFtZSk7XG4gICAgICAgICAgaWYgKCF0ZXJtaW5hbFZhbHVlc01hcCkge1xuICAgICAgICAgICAgdGVybWluYWxWYWx1ZXNNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JDb250ZXh0PFQ+W10+KCk7XG4gICAgICAgICAgICB0ZXJtaW5hbE1hcC5zZXQobmFtZSwgdGVybWluYWxWYWx1ZXNNYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hZGRUZXJtaW5hbCh0ZXJtaW5hbFZhbHVlc01hcCwgdmFsdWUsIHNlbGVjdGFibGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnRpYWxNYXAgPSBtYXRjaGVyLl9hdHRyVmFsdWVQYXJ0aWFsTWFwO1xuICAgICAgICAgIGxldCBwYXJ0aWFsVmFsdWVzTWFwID0gcGFydGlhbE1hcC5nZXQobmFtZSk7XG4gICAgICAgICAgaWYgKCFwYXJ0aWFsVmFsdWVzTWFwKSB7XG4gICAgICAgICAgICBwYXJ0aWFsVmFsdWVzTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yTWF0Y2hlcjxUPj4oKTtcbiAgICAgICAgICAgIHBhcnRpYWxNYXAuc2V0KG5hbWUsIHBhcnRpYWxWYWx1ZXNNYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXRjaGVyID0gdGhpcy5fYWRkUGFydGlhbChwYXJ0aWFsVmFsdWVzTWFwLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRUZXJtaW5hbChcbiAgICAgIG1hcDogTWFwPHN0cmluZywgU2VsZWN0b3JDb250ZXh0PFQ+W10+LCBuYW1lOiBzdHJpbmcsIHNlbGVjdGFibGU6IFNlbGVjdG9yQ29udGV4dDxUPikge1xuICAgIGxldCB0ZXJtaW5hbExpc3QgPSBtYXAuZ2V0KG5hbWUpO1xuICAgIGlmICghdGVybWluYWxMaXN0KSB7XG4gICAgICB0ZXJtaW5hbExpc3QgPSBbXTtcbiAgICAgIG1hcC5zZXQobmFtZSwgdGVybWluYWxMaXN0KTtcbiAgICB9XG4gICAgdGVybWluYWxMaXN0LnB1c2goc2VsZWN0YWJsZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRQYXJ0aWFsKG1hcDogTWFwPHN0cmluZywgU2VsZWN0b3JNYXRjaGVyPFQ+PiwgbmFtZTogc3RyaW5nKTogU2VsZWN0b3JNYXRjaGVyPFQ+IHtcbiAgICBsZXQgbWF0Y2hlciA9IG1hcC5nZXQobmFtZSk7XG4gICAgaWYgKCFtYXRjaGVyKSB7XG4gICAgICBtYXRjaGVyID0gbmV3IFNlbGVjdG9yTWF0Y2hlcjxUPigpO1xuICAgICAgbWFwLnNldChuYW1lLCBtYXRjaGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgb2JqZWN0cyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB2aWEgYGFkZFNlbGVjdGFibGVgXG4gICAqIHdob3NlIGNzcyBzZWxlY3RvciBpcyBjb250YWluZWQgaW4gdGhlIGdpdmVuIGNzcyBzZWxlY3Rvci5cbiAgICogQHBhcmFtIGNzc1NlbGVjdG9yIEEgY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSBtYXRjaGVkQ2FsbGJhY2sgVGhpcyBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBvYmplY3QgaGFuZGVkIGludG8gYGFkZFNlbGVjdGFibGVgXG4gICAqIEByZXR1cm4gYm9vbGVhbiB0cnVlIGlmIGEgbWF0Y2ggd2FzIGZvdW5kXG4gICAqL1xuICBtYXRjaChjc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjazogKChjOiBDc3NTZWxlY3RvciwgYTogVCkgPT4gdm9pZCl8bnVsbCk6IGJvb2xlYW4ge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBjb25zdCBlbGVtZW50ID0gY3NzU2VsZWN0b3IuZWxlbWVudCE7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNzc1NlbGVjdG9yLmNsYXNzTmFtZXM7XG4gICAgY29uc3QgYXR0cnMgPSBjc3NTZWxlY3Rvci5hdHRycztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdENvbnRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9saXN0Q29udGV4dHNbaV0uYWxyZWFkeU1hdGNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSB0aGlzLl9tYXRjaFRlcm1pbmFsKHRoaXMuX2VsZW1lbnRNYXAsIGVsZW1lbnQsIGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spIHx8IHJlc3VsdDtcbiAgICByZXN1bHQgPSB0aGlzLl9tYXRjaFBhcnRpYWwodGhpcy5fZWxlbWVudFBhcnRpYWxNYXAsIGVsZW1lbnQsIGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spIHx8XG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChjbGFzc05hbWVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lc1tpXTtcbiAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgIHRoaXMuX21hdGNoVGVybWluYWwodGhpcy5fY2xhc3NNYXAsIGNsYXNzTmFtZSwgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHwgcmVzdWx0O1xuICAgICAgICByZXN1bHQgPVxuICAgICAgICAgICAgdGhpcy5fbWF0Y2hQYXJ0aWFsKHRoaXMuX2NsYXNzUGFydGlhbE1hcCwgY2xhc3NOYW1lLCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fFxuICAgICAgICAgICAgcmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbaSArIDFdO1xuXG4gICAgICAgIGNvbnN0IHRlcm1pbmFsVmFsdWVzTWFwID0gdGhpcy5fYXR0clZhbHVlTWFwLmdldChuYW1lKSE7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICAgIHRoaXMuX21hdGNoVGVybWluYWwodGVybWluYWxWYWx1ZXNNYXAsICcnLCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgIHRoaXMuX21hdGNoVGVybWluYWwodGVybWluYWxWYWx1ZXNNYXAsIHZhbHVlLCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fCByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgcGFydGlhbFZhbHVlc01hcCA9IHRoaXMuX2F0dHJWYWx1ZVBhcnRpYWxNYXAuZ2V0KG5hbWUpITtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbWF0Y2hQYXJ0aWFsKHBhcnRpYWxWYWx1ZXNNYXAsICcnLCBjc3NTZWxlY3RvciwgbWF0Y2hlZENhbGxiYWNrKSB8fCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgIHRoaXMuX21hdGNoUGFydGlhbChwYXJ0aWFsVmFsdWVzTWFwLCB2YWx1ZSwgY3NzU2VsZWN0b3IsIG1hdGNoZWRDYWxsYmFjaykgfHwgcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbWF0Y2hUZXJtaW5hbChcbiAgICAgIG1hcDogTWFwPHN0cmluZywgU2VsZWN0b3JDb250ZXh0PFQ+W10+LCBuYW1lOiBzdHJpbmcsIGNzc1NlbGVjdG9yOiBDc3NTZWxlY3RvcixcbiAgICAgIG1hdGNoZWRDYWxsYmFjazogKChjOiBDc3NTZWxlY3RvciwgYTogYW55KSA9PiB2b2lkKXxudWxsKTogYm9vbGVhbiB7XG4gICAgaWYgKCFtYXAgfHwgdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdGFibGVzOiBTZWxlY3RvckNvbnRleHQ8VD5bXSA9IG1hcC5nZXQobmFtZSkgfHwgW107XG4gICAgY29uc3Qgc3RhclNlbGVjdGFibGVzOiBTZWxlY3RvckNvbnRleHQ8VD5bXSA9IG1hcC5nZXQoJyonKSE7XG4gICAgaWYgKHN0YXJTZWxlY3RhYmxlcykge1xuICAgICAgc2VsZWN0YWJsZXMgPSBzZWxlY3RhYmxlcy5jb25jYXQoc3RhclNlbGVjdGFibGVzKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0YWJsZTogU2VsZWN0b3JDb250ZXh0PFQ+O1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWxlY3RhYmxlID0gc2VsZWN0YWJsZXNbaV07XG4gICAgICByZXN1bHQgPSBzZWxlY3RhYmxlLmZpbmFsaXplKGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spIHx8IHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX21hdGNoUGFydGlhbChcbiAgICAgIG1hcDogTWFwPHN0cmluZywgU2VsZWN0b3JNYXRjaGVyPFQ+PiwgbmFtZTogc3RyaW5nLCBjc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IsXG4gICAgICBtYXRjaGVkQ2FsbGJhY2s6ICgoYzogQ3NzU2VsZWN0b3IsIGE6IGFueSkgPT4gdm9pZCl8bnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmICghbWFwIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZFNlbGVjdG9yID0gbWFwLmdldChuYW1lKTtcbiAgICBpZiAoIW5lc3RlZFNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRPRE8ocGVyZik6IGdldCByaWQgb2YgcmVjdXJzaW9uIGFuZCBtZWFzdXJlIGFnYWluXG4gICAgLy8gVE9ETyhwZXJmKTogZG9uJ3QgcGFzcyB0aGUgd2hvbGUgc2VsZWN0b3IgaW50byB0aGUgcmVjdXJzaW9uLFxuICAgIC8vIGJ1dCBvbmx5IHRoZSBub3QgcHJvY2Vzc2VkIHBhcnRzXG4gICAgcmV0dXJuIG5lc3RlZFNlbGVjdG9yLm1hdGNoKGNzc1NlbGVjdG9yLCBtYXRjaGVkQ2FsbGJhY2spO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yTGlzdENvbnRleHQge1xuICBhbHJlYWR5TWF0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZWxlY3RvcnM6IENzc1NlbGVjdG9yW10pIHt9XG59XG5cbi8vIFN0b3JlIGNvbnRleHQgdG8gcGFzcyBiYWNrIHNlbGVjdG9yIGFuZCBjb250ZXh0IHdoZW4gYSBzZWxlY3RvciBpcyBtYXRjaGVkXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JDb250ZXh0PFQgPSBhbnk+IHtcbiAgbm90U2VsZWN0b3JzOiBDc3NTZWxlY3RvcltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHNlbGVjdG9yOiBDc3NTZWxlY3RvciwgcHVibGljIGNiQ29udGV4dDogVCwgcHVibGljIGxpc3RDb250ZXh0OiBTZWxlY3Rvckxpc3RDb250ZXh0KSB7XG4gICAgdGhpcy5ub3RTZWxlY3RvcnMgPSBzZWxlY3Rvci5ub3RTZWxlY3RvcnM7XG4gIH1cblxuICBmaW5hbGl6ZShjc3NTZWxlY3RvcjogQ3NzU2VsZWN0b3IsIGNhbGxiYWNrOiAoKGM6IENzc1NlbGVjdG9yLCBhOiBUKSA9PiB2b2lkKXxudWxsKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKHRoaXMubm90U2VsZWN0b3JzLmxlbmd0aCA+IDAgJiYgKCF0aGlzLmxpc3RDb250ZXh0IHx8ICF0aGlzLmxpc3RDb250ZXh0LmFscmVhZHlNYXRjaGVkKSkge1xuICAgICAgY29uc3Qgbm90TWF0Y2hlciA9IFNlbGVjdG9yTWF0Y2hlci5jcmVhdGVOb3RNYXRjaGVyKHRoaXMubm90U2VsZWN0b3JzKTtcbiAgICAgIHJlc3VsdCA9ICFub3RNYXRjaGVyLm1hdGNoKGNzc1NlbGVjdG9yLCBudWxsKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjayAmJiAoIXRoaXMubGlzdENvbnRleHQgfHwgIXRoaXMubGlzdENvbnRleHQuYWxyZWFkeU1hdGNoZWQpKSB7XG4gICAgICBpZiAodGhpcy5saXN0Q29udGV4dCkge1xuICAgICAgICB0aGlzLmxpc3RDb250ZXh0LmFscmVhZHlNYXRjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKHRoaXMuc2VsZWN0b3IsIHRoaXMuY2JDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19