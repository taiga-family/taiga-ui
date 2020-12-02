(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/view/i18n/util", ["require", "exports", "tslib", "@angular/compiler/src/i18n/i18n_ast", "@angular/compiler/src/i18n/serializers/xmb", "@angular/compiler/src/output/output_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var xmb_1 = require("@angular/compiler/src/i18n/serializers/xmb");
    var o = require("@angular/compiler/src/output/output_ast");
    /* Closure variables holding messages must be named `MSG_[A-Z0-9]+` */
    var CLOSURE_TRANSLATION_PREFIX = 'MSG_';
    /* Prefix for non-`goog.getMsg` i18n-related vars */
    exports.TRANSLATION_PREFIX = 'I18N_';
    /** Name of the i18n attributes **/
    exports.I18N_ATTR = 'i18n';
    exports.I18N_ATTR_PREFIX = 'i18n-';
    /** Prefix of var expressions used in ICUs */
    exports.I18N_ICU_VAR_PREFIX = 'VAR_';
    /** Prefix of ICU expressions for post processing */
    exports.I18N_ICU_MAPPING_PREFIX = 'I18N_EXP_';
    /** Placeholder wrapper for i18n expressions **/
    exports.I18N_PLACEHOLDER_SYMBOL = '�';
    function isI18nAttribute(name) {
        return name === exports.I18N_ATTR || name.startsWith(exports.I18N_ATTR_PREFIX);
    }
    exports.isI18nAttribute = isI18nAttribute;
    function isI18nRootNode(meta) {
        return meta instanceof i18n.Message;
    }
    exports.isI18nRootNode = isI18nRootNode;
    function isSingleI18nIcu(meta) {
        return isI18nRootNode(meta) && meta.nodes.length === 1 && meta.nodes[0] instanceof i18n.Icu;
    }
    exports.isSingleI18nIcu = isSingleI18nIcu;
    function hasI18nMeta(node) {
        return !!node.i18n;
    }
    exports.hasI18nMeta = hasI18nMeta;
    function hasI18nAttrs(element) {
        return element.attrs.some(function (attr) { return isI18nAttribute(attr.name); });
    }
    exports.hasI18nAttrs = hasI18nAttrs;
    function icuFromI18nMessage(message) {
        return message.nodes[0];
    }
    exports.icuFromI18nMessage = icuFromI18nMessage;
    function wrapI18nPlaceholder(content, contextId) {
        if (contextId === void 0) { contextId = 0; }
        var blockId = contextId > 0 ? ":" + contextId : '';
        return "" + exports.I18N_PLACEHOLDER_SYMBOL + content + blockId + exports.I18N_PLACEHOLDER_SYMBOL;
    }
    exports.wrapI18nPlaceholder = wrapI18nPlaceholder;
    function assembleI18nBoundString(strings, bindingStartIndex, contextId) {
        if (bindingStartIndex === void 0) { bindingStartIndex = 0; }
        if (contextId === void 0) { contextId = 0; }
        if (!strings.length)
            return '';
        var acc = '';
        var lastIdx = strings.length - 1;
        for (var i = 0; i < lastIdx; i++) {
            acc += "" + strings[i] + wrapI18nPlaceholder(bindingStartIndex + i, contextId);
        }
        acc += strings[lastIdx];
        return acc;
    }
    exports.assembleI18nBoundString = assembleI18nBoundString;
    function getSeqNumberGenerator(startsAt) {
        if (startsAt === void 0) { startsAt = 0; }
        var current = startsAt;
        return function () { return current++; };
    }
    exports.getSeqNumberGenerator = getSeqNumberGenerator;
    function placeholdersToParams(placeholders) {
        var params = {};
        placeholders.forEach(function (values, key) {
            params[key] = o.literal(values.length > 1 ? "[" + values.join('|') + "]" : values[0]);
        });
        return params;
    }
    exports.placeholdersToParams = placeholdersToParams;
    function updatePlaceholderMap(map, name) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var current = map.get(name) || [];
        current.push.apply(current, tslib_1.__spread(values));
        map.set(name, current);
    }
    exports.updatePlaceholderMap = updatePlaceholderMap;
    function assembleBoundTextPlaceholders(meta, bindingStartIndex, contextId) {
        if (bindingStartIndex === void 0) { bindingStartIndex = 0; }
        if (contextId === void 0) { contextId = 0; }
        var startIdx = bindingStartIndex;
        var placeholders = new Map();
        var node = meta instanceof i18n.Message ? meta.nodes.find(function (node) { return node instanceof i18n.Container; }) : meta;
        if (node) {
            node
                .children
                .filter(function (child) { return child instanceof i18n.Placeholder; })
                .forEach(function (child, idx) {
                var content = wrapI18nPlaceholder(startIdx + idx, contextId);
                updatePlaceholderMap(placeholders, child.name, content);
            });
        }
        return placeholders;
    }
    exports.assembleBoundTextPlaceholders = assembleBoundTextPlaceholders;
    /**
     * Format the placeholder names in a map of placeholders to expressions.
     *
     * The placeholder names are converted from "internal" format (e.g. `START_TAG_DIV_1`) to "external"
     * format (e.g. `startTagDiv_1`).
     *
     * @param params A map of placeholder names to expressions.
     * @param useCamelCase whether to camelCase the placeholder name when formatting.
     * @returns A new map of formatted placeholder names to expressions.
     */
    function i18nFormatPlaceholderNames(params, useCamelCase) {
        if (params === void 0) { params = {}; }
        var _params = {};
        if (params && Object.keys(params).length) {
            Object.keys(params).forEach(function (key) { return _params[formatI18nPlaceholderName(key, useCamelCase)] = params[key]; });
        }
        return _params;
    }
    exports.i18nFormatPlaceholderNames = i18nFormatPlaceholderNames;
    /**
     * Converts internal placeholder names to public-facing format
     * (for example to use in goog.getMsg call).
     * Example: `START_TAG_DIV_1` is converted to `startTagDiv_1`.
     *
     * @param name The placeholder name that should be formatted
     * @returns Formatted placeholder name
     */
    function formatI18nPlaceholderName(name, useCamelCase) {
        if (useCamelCase === void 0) { useCamelCase = true; }
        var publicName = xmb_1.toPublicName(name);
        if (!useCamelCase) {
            return publicName;
        }
        var chunks = publicName.split('_');
        if (chunks.length === 1) {
            // if no "_" found - just lowercase the value
            return name.toLowerCase();
        }
        var postfix;
        // eject last element if it's a number
        if (/^\d+$/.test(chunks[chunks.length - 1])) {
            postfix = chunks.pop();
        }
        var raw = chunks.shift().toLowerCase();
        if (chunks.length) {
            raw += chunks.map(function (c) { return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase(); }).join('');
        }
        return postfix ? raw + "_" + postfix : raw;
    }
    exports.formatI18nPlaceholderName = formatI18nPlaceholderName;
    /**
     * Generates a prefix for translation const name.
     *
     * @param extra Additional local prefix that should be injected into translation var name
     * @returns Complete translation const prefix
     */
    function getTranslationConstPrefix(extra) {
        return ("" + CLOSURE_TRANSLATION_PREFIX + extra).toUpperCase();
    }
    exports.getTranslationConstPrefix = getTranslationConstPrefix;
    /**
     * Generate AST to declare a variable. E.g. `var I18N_1;`.
     * @param variable the name of the variable to declare.
     */
    function declareI18nVariable(variable) {
        return new o.DeclareVarStmt(variable.name, undefined, o.INFERRED_TYPE, null, variable.sourceSpan);
    }
    exports.declareI18nVariable = declareI18nVariable;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDBEQUErQztJQUMvQyxrRUFBMkQ7SUFFM0QsMkRBQWdEO0lBR2hELHNFQUFzRTtJQUN0RSxJQUFNLDBCQUEwQixHQUFHLE1BQU0sQ0FBQztJQUUxQyxvREFBb0Q7SUFDdkMsUUFBQSxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFFMUMsbUNBQW1DO0lBQ3RCLFFBQUEsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUNuQixRQUFBLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUV4Qyw2Q0FBNkM7SUFDaEMsUUFBQSxtQkFBbUIsR0FBRyxNQUFNLENBQUM7SUFFMUMsb0RBQW9EO0lBQ3ZDLFFBQUEsdUJBQXVCLEdBQUcsV0FBVyxDQUFDO0lBRW5ELGdEQUFnRDtJQUNuQyxRQUFBLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztJQUUzQyxTQUFnQixlQUFlLENBQUMsSUFBWTtRQUMxQyxPQUFPLElBQUksS0FBSyxpQkFBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQWdCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRkQsMENBRUM7SUFFRCxTQUFnQixjQUFjLENBQUMsSUFBb0I7UUFDakQsT0FBTyxJQUFJLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRkQsd0NBRUM7SUFFRCxTQUFnQixlQUFlLENBQUMsSUFBb0I7UUFDbEQsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5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QUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFwRCxDQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFJLEdBQUcsU0FBSSxPQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBcEJELDhEQW9CQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBZ0IseUJBQXlCLENBQUMsS0FBYTtRQUNyRCxPQUFPLENBQUEsS0FBRywwQkFBMEIsR0FBRyxLQUFPLENBQUEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRkQsOERBRUM7SUFFRDs7O09BR0c7SUFDSCxTQUFnQixtQkFBbUIsQ0FBQyxRQUF1QjtRQUN6RCxPQUFPLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FDdkIsUUFBUSxDQUFDLElBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFIRCxrREFHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuX2FzdCc7XG5pbXBvcnQge3RvUHVibGljTmFtZX0gZnJvbSAnLi4vLi4vLi4vaTE4bi9zZXJpYWxpemVycy94bWInO1xuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuLi8uLi8uLi9tbF9wYXJzZXIvYXN0JztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0ICogYXMgdCBmcm9tICcuLi8uLi9yM19hc3QnO1xuXG4vKiBDbG9zdXJlIHZhcmlhYmxlcyBob2xkaW5nIG1lc3NhZ2VzIG11c3QgYmUgbmFtZWQgYE1TR19bQS1aMC05XStgICovXG5jb25zdCBDTE9TVVJFX1RSQU5TTEFUSU9OX1BSRUZJWCA9ICdNU0dfJztcblxuLyogUHJlZml4IGZvciBub24tYGdvb2cuZ2V0TXNnYCBpMThuLXJlbGF0ZWQgdmFycyAqL1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFUSU9OX1BSRUZJWCA9ICdJMThOXyc7XG5cbi8qKiBOYW1lIG9mIHRoZSBpMThuIGF0dHJpYnV0ZXMgKiovXG5leHBvcnQgY29uc3QgSTE4Tl9BVFRSID0gJ2kxOG4nO1xuZXhwb3J0IGNvbnN0IEkxOE5fQVRUUl9QUkVGSVggPSAnaTE4bi0nO1xuXG4vKiogUHJlZml4IG9mIHZhciBleHByZXNzaW9ucyB1c2VkIGluIElDVXMgKi9cbmV4cG9ydCBjb25zdCBJMThOX0lDVV9WQVJfUFJFRklYID0gJ1ZBUl8nO1xuXG4vKiogUHJlZml4IG9mIElDVSBleHByZXNzaW9ucyBmb3IgcG9zdCBwcm9jZXNzaW5nICovXG5leHBvcnQgY29uc3QgSTE4Tl9JQ1VfTUFQUElOR19QUkVGSVggPSAnSTE4Tl9FWFBfJztcblxuLyoqIFBsYWNlaG9sZGVyIHdyYXBwZXIgZm9yIGkxOG4gZXhwcmVzc2lvbnMgKiovXG5leHBvcnQgY29uc3QgSTE4Tl9QTEFDRUhPTERFUl9TWU1CT0wgPSAn77+9JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSTE4bkF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG5hbWUgPT09IEkxOE5fQVRUUiB8fCBuYW1lLnN0YXJ0c1dpdGgoSTE4Tl9BVFRSX1BSRUZJWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0kxOG5Sb290Tm9kZShtZXRhPzogaTE4bi5JMThuTWV0YSk6IG1ldGEgaXMgaTE4bi5NZXNzYWdlIHtcbiAgcmV0dXJuIG1ldGEgaW5zdGFuY2VvZiBpMThuLk1lc3NhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbmdsZUkxOG5JY3UobWV0YT86IGkxOG4uSTE4bk1ldGEpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzSTE4blJvb3ROb2RlKG1ldGEpICYmIG1ldGEubm9kZXMubGVuZ3RoID09PSAxICYmIG1ldGEubm9kZXNbMF0gaW5zdGFuY2VvZiBpMThuLkljdTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0kxOG5NZXRhKG5vZGU6IHQuTm9kZSZ7aTE4bj86IGkxOG4uSTE4bk1ldGF9KTogYm9vbGVhbiB7XG4gIHJldHVybiAhIW5vZGUuaTE4bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0kxOG5BdHRycyhlbGVtZW50OiBodG1sLkVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuYXR0cnMuc29tZSgoYXR0cjogaHRtbC5BdHRyaWJ1dGUpID0+IGlzSTE4bkF0dHJpYnV0ZShhdHRyLm5hbWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGljdUZyb21JMThuTWVzc2FnZShtZXNzYWdlOiBpMThuLk1lc3NhZ2UpIHtcbiAgcmV0dXJuIG1lc3NhZ2Uubm9kZXNbMF0gYXMgaTE4bi5JY3VQbGFjZWhvbGRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBJMThuUGxhY2Vob2xkZXIoY29udGVudDogc3RyaW5nfG51bWJlciwgY29udGV4dElkOiBudW1iZXIgPSAwKTogc3RyaW5nIHtcbiAgY29uc3QgYmxvY2tJZCA9IGNvbnRleHRJZCA+IDAgPyBgOiR7Y29udGV4dElkfWAgOiAnJztcbiAgcmV0dXJuIGAke0kxOE5fUExBQ0VIT0xERVJfU1lNQk9MfSR7Y29udGVudH0ke2Jsb2NrSWR9JHtJMThOX1BMQUNFSE9MREVSX1NZTUJPTH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZW1ibGVJMThuQm91bmRTdHJpbmcoXG4gICAgc3RyaW5nczogc3RyaW5nW10sIGJpbmRpbmdTdGFydEluZGV4OiBudW1iZXIgPSAwLCBjb250ZXh0SWQ6IG51bWJlciA9IDApOiBzdHJpbmcge1xuICBpZiAoIXN0cmluZ3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gIGxldCBhY2MgPSAnJztcbiAgY29uc3QgbGFzdElkeCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SWR4OyBpKyspIHtcbiAgICBhY2MgKz0gYCR7c3RyaW5nc1tpXX0ke3dyYXBJMThuUGxhY2Vob2xkZXIoYmluZGluZ1N0YXJ0SW5kZXggKyBpLCBjb250ZXh0SWQpfWA7XG4gIH1cbiAgYWNjICs9IHN0cmluZ3NbbGFzdElkeF07XG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXFOdW1iZXJHZW5lcmF0b3Ioc3RhcnRzQXQ6IG51bWJlciA9IDApOiAoKSA9PiBudW1iZXIge1xuICBsZXQgY3VycmVudCA9IHN0YXJ0c0F0O1xuICByZXR1cm4gKCkgPT4gY3VycmVudCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2Vob2xkZXJzVG9QYXJhbXMocGxhY2Vob2xkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pOlxuICAgIHtbbmFtZTogc3RyaW5nXTogby5MaXRlcmFsRXhwcn0ge1xuICBjb25zdCBwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogby5MaXRlcmFsRXhwcn0gPSB7fTtcbiAgcGxhY2Vob2xkZXJzLmZvckVhY2goKHZhbHVlczogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgcGFyYW1zW2tleV0gPSBvLmxpdGVyYWwodmFsdWVzLmxlbmd0aCA+IDEgPyBgWyR7dmFsdWVzLmpvaW4oJ3wnKX1dYCA6IHZhbHVlc1swXSk7XG4gIH0pO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxhY2Vob2xkZXJNYXAobWFwOiBNYXA8c3RyaW5nLCBhbnlbXT4sIG5hbWU6IHN0cmluZywgLi4udmFsdWVzOiBhbnlbXSkge1xuICBjb25zdCBjdXJyZW50ID0gbWFwLmdldChuYW1lKSB8fCBbXTtcbiAgY3VycmVudC5wdXNoKC4uLnZhbHVlcyk7XG4gIG1hcC5zZXQobmFtZSwgY3VycmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlbWJsZUJvdW5kVGV4dFBsYWNlaG9sZGVycyhcbiAgICBtZXRhOiBpMThuLkkxOG5NZXRhLCBiaW5kaW5nU3RhcnRJbmRleDogbnVtYmVyID0gMCwgY29udGV4dElkOiBudW1iZXIgPSAwKTogTWFwPHN0cmluZywgYW55W10+IHtcbiAgY29uc3Qgc3RhcnRJZHggPSBiaW5kaW5nU3RhcnRJbmRleDtcbiAgY29uc3QgcGxhY2Vob2xkZXJzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgY29uc3Qgbm9kZSA9XG4gICAgICBtZXRhIGluc3RhbmNlb2YgaTE4bi5NZXNzYWdlID8gbWV0YS5ub2Rlcy5maW5kKG5vZGUgPT4gbm9kZSBpbnN0YW5jZW9mIGkxOG4uQ29udGFpbmVyKSA6IG1ldGE7XG4gIGlmIChub2RlKSB7XG4gICAgKG5vZGUgYXMgaTE4bi5Db250YWluZXIpXG4gICAgICAgIC5jaGlsZHJlblxuICAgICAgICAuZmlsdGVyKChjaGlsZDogaTE4bi5Ob2RlKTogY2hpbGQgaXMgaTE4bi5QbGFjZWhvbGRlciA9PiBjaGlsZCBpbnN0YW5jZW9mIGkxOG4uUGxhY2Vob2xkZXIpXG4gICAgICAgIC5mb3JFYWNoKChjaGlsZDogaTE4bi5QbGFjZWhvbGRlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gd3JhcEkxOG5QbGFjZWhvbGRlcihzdGFydElkeCArIGlkeCwgY29udGV4dElkKTtcbiAgICAgICAgICB1cGRhdGVQbGFjZWhvbGRlck1hcChwbGFjZWhvbGRlcnMsIGNoaWxkLm5hbWUsIGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgfVxuICByZXR1cm4gcGxhY2Vob2xkZXJzO1xufVxuXG4vKipcbiAqIEZvcm1hdCB0aGUgcGxhY2Vob2xkZXIgbmFtZXMgaW4gYSBtYXAgb2YgcGxhY2Vob2xkZXJzIHRvIGV4cHJlc3Npb25zLlxuICpcbiAqIFRoZSBwbGFjZWhvbGRlciBuYW1lcyBhcmUgY29udmVydGVkIGZyb20gXCJpbnRlcm5hbFwiIGZvcm1hdCAoZS5nLiBgU1RBUlRfVEFHX0RJVl8xYCkgdG8gXCJleHRlcm5hbFwiXG4gKiBmb3JtYXQgKGUuZy4gYHN0YXJ0VGFnRGl2XzFgKS5cbiAqXG4gKiBAcGFyYW0gcGFyYW1zIEEgbWFwIG9mIHBsYWNlaG9sZGVyIG5hbWVzIHRvIGV4cHJlc3Npb25zLlxuICogQHBhcmFtIHVzZUNhbWVsQ2FzZSB3aGV0aGVyIHRvIGNhbWVsQ2FzZSB0aGUgcGxhY2Vob2xkZXIgbmFtZSB3aGVuIGZvcm1hdHRpbmcuXG4gKiBAcmV0dXJucyBBIG5ldyBtYXAgb2YgZm9ybWF0dGVkIHBsYWNlaG9sZGVyIG5hbWVzIHRvIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaTE4bkZvcm1hdFBsYWNlaG9sZGVyTmFtZXMoXG4gICAgcGFyYW1zOiB7W25hbWU6IHN0cmluZ106IG8uRXhwcmVzc2lvbn0gPSB7fSwgdXNlQ2FtZWxDYXNlOiBib29sZWFuKSB7XG4gIGNvbnN0IF9wYXJhbXM6IHtba2V5OiBzdHJpbmddOiBvLkV4cHJlc3Npb259ID0ge307XG4gIGlmIChwYXJhbXMgJiYgT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpIHtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goXG4gICAgICAgIGtleSA9PiBfcGFyYW1zW2Zvcm1hdEkxOG5QbGFjZWhvbGRlck5hbWUoa2V5LCB1c2VDYW1lbENhc2UpXSA9IHBhcmFtc1trZXldKTtcbiAgfVxuICByZXR1cm4gX3BhcmFtcztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBpbnRlcm5hbCBwbGFjZWhvbGRlciBuYW1lcyB0byBwdWJsaWMtZmFjaW5nIGZvcm1hdFxuICogKGZvciBleGFtcGxlIHRvIHVzZSBpbiBnb29nLmdldE1zZyBjYWxsKS5cbiAqIEV4YW1wbGU6IGBTVEFSVF9UQUdfRElWXzFgIGlzIGNvbnZlcnRlZCB0byBgc3RhcnRUYWdEaXZfMWAuXG4gKlxuICogQHBhcmFtIG5hbWUgVGhlIHBsYWNlaG9sZGVyIG5hbWUgdGhhdCBzaG91bGQgYmUgZm9ybWF0dGVkXG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgcGxhY2Vob2xkZXIgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0STE4blBsYWNlaG9sZGVyTmFtZShuYW1lOiBzdHJpbmcsIHVzZUNhbWVsQ2FzZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICBjb25zdCBwdWJsaWNOYW1lID0gdG9QdWJsaWNOYW1lKG5hbWUpO1xuICBpZiAoIXVzZUNhbWVsQ2FzZSkge1xuICAgIHJldHVybiBwdWJsaWNOYW1lO1xuICB9XG4gIGNvbnN0IGNodW5rcyA9IHB1YmxpY05hbWUuc3BsaXQoJ18nKTtcbiAgaWYgKGNodW5rcy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBpZiBubyBcIl9cIiBmb3VuZCAtIGp1c3QgbG93ZXJjYXNlIHRoZSB2YWx1ZVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgbGV0IHBvc3RmaXg7XG4gIC8vIGVqZWN0IGxhc3QgZWxlbWVudCBpZiBpdCdzIGEgbnVtYmVyXG4gIGlmICgvXlxcZCskLy50ZXN0KGNodW5rc1tjaHVua3MubGVuZ3RoIC0gMV0pKSB7XG4gICAgcG9zdGZpeCA9IGNodW5rcy5wb3AoKTtcbiAgfVxuICBsZXQgcmF3ID0gY2h1bmtzLnNoaWZ0KCkhLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjaHVua3MubGVuZ3RoKSB7XG4gICAgcmF3ICs9IGNodW5rcy5tYXAoYyA9PiBjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKS5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcG9zdGZpeCA/IGAke3Jhd31fJHtwb3N0Zml4fWAgOiByYXc7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcHJlZml4IGZvciB0cmFuc2xhdGlvbiBjb25zdCBuYW1lLlxuICpcbiAqIEBwYXJhbSBleHRyYSBBZGRpdGlvbmFsIGxvY2FsIHByZWZpeCB0aGF0IHNob3VsZCBiZSBpbmplY3RlZCBpbnRvIHRyYW5zbGF0aW9uIHZhciBuYW1lXG4gKiBAcmV0dXJucyBDb21wbGV0ZSB0cmFuc2xhdGlvbiBjb25zdCBwcmVmaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uQ29uc3RQcmVmaXgoZXh0cmE6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtDTE9TVVJFX1RSQU5TTEFUSU9OX1BSRUZJWH0ke2V4dHJhfWAudG9VcHBlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBBU1QgdG8gZGVjbGFyZSBhIHZhcmlhYmxlLiBFLmcuIGB2YXIgSTE4Tl8xO2AuXG4gKiBAcGFyYW0gdmFyaWFibGUgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGRlY2xhcmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlSTE4blZhcmlhYmxlKHZhcmlhYmxlOiBvLlJlYWRWYXJFeHByKTogby5TdGF0ZW1lbnQge1xuICByZXR1cm4gbmV3IG8uRGVjbGFyZVZhclN0bXQoXG4gICAgICB2YXJpYWJsZS5uYW1lISwgdW5kZWZpbmVkLCBvLklORkVSUkVEX1RZUEUsIG51bGwsIHZhcmlhYmxlLnNvdXJjZVNwYW4pO1xufVxuIl19