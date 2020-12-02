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
        define("@angular/compiler/src/render3/view/i18n/context", ["require", "exports", "tslib", "@angular/compiler/src/render3/view/i18n/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var util_1 = require("@angular/compiler/src/render3/view/i18n/util");
    var TagType;
    (function (TagType) {
        TagType[TagType["ELEMENT"] = 0] = "ELEMENT";
        TagType[TagType["TEMPLATE"] = 1] = "TEMPLATE";
        TagType[TagType["PROJECTION"] = 2] = "PROJECTION";
    })(TagType || (TagType = {}));
    /**
     * Generates an object that is used as a shared state between parent and all child contexts.
     */
    function setupRegistry() {
        return { getUniqueId: util_1.getSeqNumberGenerator(), icus: new Map() };
    }
    /**
     * I18nContext is a helper class which keeps track of all i18n-related aspects
     * (accumulates placeholders, bindings, etc) between i18nStart and i18nEnd instructions.
     *
     * When we enter a nested template, the top-level context is being passed down
     * to the nested component, which uses this context to generate a child instance
     * of I18nContext class (to handle nested template) and at the end, reconciles it back
     * with the parent context.
     *
     * @param index Instruction index of i18nStart, which initiates this context
     * @param ref Reference to a translation const that represents the content if thus context
     * @param level Nestng level defined for child contexts
     * @param templateIndex Instruction index of a template which this context belongs to
     * @param meta Meta information (id, meaning, description, etc) associated with this context
     */
    var I18nContext = /** @class */ (function () {
        function I18nContext(index, ref, level, templateIndex, meta, registry) {
            if (level === void 0) { level = 0; }
            if (templateIndex === void 0) { templateIndex = null; }
            this.index = index;
            this.ref = ref;
            this.level = level;
            this.templateIndex = templateIndex;
            this.meta = meta;
            this.registry = registry;
            this.bindings = new Set();
            this.placeholders = new Map();
            this.isEmitted = false;
            this._unresolvedCtxCount = 0;
            this._registry = registry || setupRegistry();
            this.id = this._registry.getUniqueId();
        }
        I18nContext.prototype.appendTag = function (type, node, index, closed) {
            if (node.isVoid && closed) {
                return; // ignore "close" for void tags
            }
            var ph = node.isVoid || !closed ? node.startName : node.closeName;
            var content = { type: type, index: index, ctx: this.id, isVoid: node.isVoid, closed: closed };
            util_1.updatePlaceholderMap(this.placeholders, ph, content);
        };
        Object.defineProperty(I18nContext.prototype, "icus", {
            get: function () {
                return this._registry.icus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(I18nContext.prototype, "isRoot", {
            get: function () {
                return this.level === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(I18nContext.prototype, "isResolved", {
            get: function () {
                return this._unresolvedCtxCount === 0;
            },
            enumerable: true,
            configurable: true
        });
        I18nContext.prototype.getSerializedPlaceholders = function () {
            var result = new Map();
            this.placeholders.forEach(function (values, key) { return result.set(key, values.map(serializePlaceholderValue)); });
            return result;
        };
        // public API to accumulate i18n-related content
        I18nContext.prototype.appendBinding = function (binding) {
            this.bindings.add(binding);
        };
        I18nContext.prototype.appendIcu = function (name, ref) {
            util_1.updatePlaceholderMap(this._registry.icus, name, ref);
        };
        I18nContext.prototype.appendBoundText = function (node) {
            var _this = this;
            var phs = util_1.assembleBoundTextPlaceholders(node, this.bindings.size, this.id);
            phs.forEach(function (values, key) { return util_1.updatePlaceholderMap.apply(void 0, tslib_1.__spread([_this.placeholders, key], values)); });
        };
        I18nContext.prototype.appendTemplate = function (node, index) {
            // add open and close tags at the same time,
            // since we process nested templates separately
            this.appendTag(TagType.TEMPLATE, node, index, false);
            this.appendTag(TagType.TEMPLATE, node, index, true);
            this._unresolvedCtxCount++;
        };
        I18nContext.prototype.appendElement = function (node, index, closed) {
            this.appendTag(TagType.ELEMENT, node, index, closed);
        };
        I18nContext.prototype.appendProjection = function (node, index) {
            // add open and close tags at the same time,
            // since we process projected content separately
            this.appendTag(TagType.PROJECTION, node, index, false);
            this.appendTag(TagType.PROJECTION, node, index, true);
        };
        /**
         * Generates an instance of a child context based on the root one,
         * when we enter a nested template within I18n section.
         *
         * @param index Instruction index of corresponding i18nStart, which initiates this context
         * @param templateIndex Instruction index of a template which this context belongs to
         * @param meta Meta information (id, meaning, description, etc) associated with this context
         *
         * @returns I18nContext instance
         */
        I18nContext.prototype.forkChildContext = function (index, templateIndex, meta) {
            return new I18nContext(index, this.ref, this.level + 1, templateIndex, meta, this._registry);
        };
        /**
         * Reconciles child context into parent one once the end of the i18n block is reached (i18nEnd).
         *
         * @param context Child I18nContext instance to be reconciled with parent context.
         */
        I18nContext.prototype.reconcileChildContext = function (context) {
            var _this = this;
            // set the right context id for open and close
            // template tags, so we can use it as sub-block ids
            ['start', 'close'].forEach(function (op) {
                var key = context.meta[op + "Name"];
                var phs = _this.placeholders.get(key) || [];
                var tag = phs.find(findTemplateFn(_this.id, context.templateIndex));
                if (tag) {
                    tag.ctx = context.id;
                }
            });
            // reconcile placeholders
            var childPhs = context.placeholders;
            childPhs.forEach(function (values, key) {
                var phs = _this.placeholders.get(key);
                if (!phs) {
                    _this.placeholders.set(key, values);
                    return;
                }
                // try to find matching template...
                var tmplIdx = phs.findIndex(findTemplateFn(context.id, context.templateIndex));
                if (tmplIdx >= 0) {
                    // ... if found - replace it with nested template content
                    var isCloseTag = key.startsWith('CLOSE');
                    var isTemplateTag = key.endsWith('NG-TEMPLATE');
                    if (isTemplateTag) {
                        // current template's content is placed before or after
                        // parent template tag, depending on the open/close atrribute
                        phs.splice.apply(phs, tslib_1.__spread([tmplIdx + (isCloseTag ? 0 : 1), 0], values));
                    }
                    else {
                        var idx = isCloseTag ? values.length - 1 : 0;
                        values[idx].tmpl = phs[tmplIdx];
                        phs.splice.apply(phs, tslib_1.__spread([tmplIdx, 1], values));
                    }
                }
                else {
                    // ... otherwise just append content to placeholder value
                    phs.push.apply(phs, tslib_1.__spread(values));
                }
                _this.placeholders.set(key, phs);
            });
            this._unresolvedCtxCount--;
        };
        return I18nContext;
    }());
    exports.I18nContext = I18nContext;
    //
    // Helper methods
    //
    function wrap(symbol, index, contextId, closed) {
        var state = closed ? '/' : '';
        return util_1.wrapI18nPlaceholder("" + state + symbol + index, contextId);
    }
    function wrapTag(symbol, _a, closed) {
        var index = _a.index, ctx = _a.ctx, isVoid = _a.isVoid;
        return isVoid ? wrap(symbol, index, ctx) + wrap(symbol, index, ctx, true) :
            wrap(symbol, index, ctx, closed);
    }
    function findTemplateFn(ctx, templateIndex) {
        return function (token) { return typeof token === 'object' && token.type === TagType.TEMPLATE &&
            token.index === templateIndex && token.ctx === ctx; };
    }
    function serializePlaceholderValue(value) {
        var element = function (data, closed) { return wrapTag('#', data, closed); };
        var template = function (data, closed) { return wrapTag('*', data, closed); };
        var projection = function (data, closed) { return wrapTag('!', data, closed); };
        switch (value.type) {
            case TagType.ELEMENT:
                // close element tag
                if (value.closed) {
                    return element(value, true) + (value.tmpl ? template(value.tmpl, true) : '');
                }
                // open element tag that also initiates a template
                if (value.tmpl) {
                    return template(value.tmpl) + element(value) +
                        (value.isVoid ? template(value.tmpl, true) : '');
                }
                return element(value);
            case TagType.TEMPLATE:
                return template(value, value.closed);
            case TagType.PROJECTION:
                return projection(value, value.closed);
            default:
                return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQU1ILHFFQUF1SDtJQUV2SCxJQUFLLE9BSUo7SUFKRCxXQUFLLE9BQU87UUFDViwyQ0FBTyxDQUFBO1FBQ1AsNkNBQVEsQ0FBQTtRQUNSLGlEQUFVLENBQUE7SUFDWixDQUFDLEVBSkksT0FBTyxLQUFQLE9BQU8sUUFJWDtJQUVEOztPQUVHO0lBQ0gsU0FBUyxhQUFhO1FBQ3BCLE9BQU8sRUFBQyxXQUFXLEVBQUUsNEJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQWlCLEVBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7O09BY0c7SUFDSDtRQVNFLHFCQUNhLEtBQWEsRUFBVyxHQUFrQixFQUFXLEtBQWlCLEVBQ3RFLGFBQWlDLEVBQVcsSUFBbUIsRUFDaEUsUUFBYztZQUZ3QyxzQkFBQSxFQUFBLFNBQWlCO1lBQ3RFLDhCQUFBLEVBQUEsb0JBQWlDO1lBRGpDLFVBQUssR0FBTCxLQUFLLENBQVE7WUFBVyxRQUFHLEdBQUgsR0FBRyxDQUFlO1lBQVcsVUFBSyxHQUFMLEtBQUssQ0FBWTtZQUN0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7WUFBVyxTQUFJLEdBQUosSUFBSSxDQUFlO1lBQ2hFLGFBQVEsR0FBUixRQUFRLENBQU07WUFWbkIsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFPLENBQUM7WUFDMUIsaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztZQUN4QyxjQUFTLEdBQVksS0FBSyxDQUFDO1lBRzFCLHdCQUFtQixHQUFXLENBQUMsQ0FBQztZQU10QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsSUFBSSxh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QyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM5RTtnQkFDRCxrREFBa0Q7Z0JBQ2xELElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDZCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDeEMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3REO2dCQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhCLEtBQUssT0FBTyxDQUFDLFFBQVE7Z0JBQ25CLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkMsS0FBSyxPQUFPLENBQUMsVUFBVTtnQkFDckIsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QztnQkFDRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVNUfSBmcm9tICcuLi8uLi8uLi9leHByZXNzaW9uX3BhcnNlci9hc3QnO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuLi8uLi8uLi9pMThuL2kxOG5fYXN0JztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5pbXBvcnQge2Fzc2VtYmxlQm91bmRUZXh0UGxhY2Vob2xkZXJzLCBnZXRTZXFOdW1iZXJHZW5lcmF0b3IsIHVwZGF0ZVBsYWNlaG9sZGVyTWFwLCB3cmFwSTE4blBsYWNlaG9sZGVyfSBmcm9tICcuL3V0aWwnO1xuXG5lbnVtIFRhZ1R5cGUge1xuICBFTEVNRU5ULFxuICBURU1QTEFURSxcbiAgUFJPSkVDVElPTlxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBvYmplY3QgdGhhdCBpcyB1c2VkIGFzIGEgc2hhcmVkIHN0YXRlIGJldHdlZW4gcGFyZW50IGFuZCBhbGwgY2hpbGQgY29udGV4dHMuXG4gKi9cbmZ1bmN0aW9uIHNldHVwUmVnaXN0cnkoKSB7XG4gIHJldHVybiB7Z2V0VW5pcXVlSWQ6IGdldFNlcU51bWJlckdlbmVyYXRvcigpLCBpY3VzOiBuZXcgTWFwPHN0cmluZywgYW55W10+KCl9O1xufVxuXG4vKipcbiAqIEkxOG5Db250ZXh0IGlzIGEgaGVscGVyIGNsYXNzIHdoaWNoIGtlZXBzIHRyYWNrIG9mIGFsbCBpMThuLXJlbGF0ZWQgYXNwZWN0c1xuICogKGFjY3VtdWxhdGVzIHBsYWNlaG9sZGVycywgYmluZGluZ3MsIGV0YykgYmV0d2VlbiBpMThuU3RhcnQgYW5kIGkxOG5FbmQgaW5zdHJ1Y3Rpb25zLlxuICpcbiAqIFdoZW4gd2UgZW50ZXIgYSBuZXN0ZWQgdGVtcGxhdGUsIHRoZSB0b3AtbGV2ZWwgY29udGV4dCBpcyBiZWluZyBwYXNzZWQgZG93blxuICogdG8gdGhlIG5lc3RlZCBjb21wb25lbnQsIHdoaWNoIHVzZXMgdGhpcyBjb250ZXh0IHRvIGdlbmVyYXRlIGEgY2hpbGQgaW5zdGFuY2VcbiAqIG9mIEkxOG5Db250ZXh0IGNsYXNzICh0byBoYW5kbGUgbmVzdGVkIHRlbXBsYXRlKSBhbmQgYXQgdGhlIGVuZCwgcmVjb25jaWxlcyBpdCBiYWNrXG4gKiB3aXRoIHRoZSBwYXJlbnQgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0gaW5kZXggSW5zdHJ1Y3Rpb24gaW5kZXggb2YgaTE4blN0YXJ0LCB3aGljaCBpbml0aWF0ZXMgdGhpcyBjb250ZXh0XG4gKiBAcGFyYW0gcmVmIFJlZmVyZW5jZSB0byBhIHRyYW5zbGF0aW9uIGNvbnN0IHRoYXQgcmVwcmVzZW50cyB0aGUgY29udGVudCBpZiB0aHVzIGNvbnRleHRcbiAqIEBwYXJhbSBsZXZlbCBOZXN0bmcgbGV2ZWwgZGVmaW5lZCBmb3IgY2hpbGQgY29udGV4dHNcbiAqIEBwYXJhbSB0ZW1wbGF0ZUluZGV4IEluc3RydWN0aW9uIGluZGV4IG9mIGEgdGVtcGxhdGUgd2hpY2ggdGhpcyBjb250ZXh0IGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSBtZXRhIE1ldGEgaW5mb3JtYXRpb24gKGlkLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgZXRjKSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBJMThuQ29udGV4dCB7XG4gIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyO1xuICBwdWJsaWMgYmluZGluZ3MgPSBuZXcgU2V0PEFTVD4oKTtcbiAgcHVibGljIHBsYWNlaG9sZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKTtcbiAgcHVibGljIGlzRW1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3JlZ2lzdHJ5ITogYW55O1xuICBwcml2YXRlIF91bnJlc29sdmVkQ3R4Q291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBpbmRleDogbnVtYmVyLCByZWFkb25seSByZWY6IG8uUmVhZFZhckV4cHIsIHJlYWRvbmx5IGxldmVsOiBudW1iZXIgPSAwLFxuICAgICAgcmVhZG9ubHkgdGVtcGxhdGVJbmRleDogbnVtYmVyfG51bGwgPSBudWxsLCByZWFkb25seSBtZXRhOiBpMThuLkkxOG5NZXRhLFxuICAgICAgcHJpdmF0ZSByZWdpc3RyeT86IGFueSkge1xuICAgIHRoaXMuX3JlZ2lzdHJ5ID0gcmVnaXN0cnkgfHwgc2V0dXBSZWdpc3RyeSgpO1xuICAgIHRoaXMuaWQgPSB0aGlzLl9yZWdpc3RyeS5nZXRVbmlxdWVJZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRUYWcodHlwZTogVGFnVHlwZSwgbm9kZTogaTE4bi5UYWdQbGFjZWhvbGRlciwgaW5kZXg6IG51bWJlciwgY2xvc2VkPzogYm9vbGVhbikge1xuICAgIGlmIChub2RlLmlzVm9pZCAmJiBjbG9zZWQpIHtcbiAgICAgIHJldHVybjsgIC8vIGlnbm9yZSBcImNsb3NlXCIgZm9yIHZvaWQgdGFnc1xuICAgIH1cbiAgICBjb25zdCBwaCA9IG5vZGUuaXNWb2lkIHx8ICFjbG9zZWQgPyBub2RlLnN0YXJ0TmFtZSA6IG5vZGUuY2xvc2VOYW1lO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB7dHlwZSwgaW5kZXgsIGN0eDogdGhpcy5pZCwgaXNWb2lkOiBub2RlLmlzVm9pZCwgY2xvc2VkfTtcbiAgICB1cGRhdGVQbGFjZWhvbGRlck1hcCh0aGlzLnBsYWNlaG9sZGVycywgcGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgZ2V0IGljdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5LmljdXM7XG4gIH1cbiAgZ2V0IGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gMDtcbiAgfVxuICBnZXQgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5yZXNvbHZlZEN0eENvdW50ID09PSAwO1xuICB9XG5cbiAgZ2V0U2VyaWFsaXplZFBsYWNlaG9sZGVycygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwPHN0cmluZywgYW55W10+KCk7XG4gICAgdGhpcy5wbGFjZWhvbGRlcnMuZm9yRWFjaChcbiAgICAgICAgKHZhbHVlcywga2V5KSA9PiByZXN1bHQuc2V0KGtleSwgdmFsdWVzLm1hcChzZXJpYWxpemVQbGFjZWhvbGRlclZhbHVlKSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBwdWJsaWMgQVBJIHRvIGFjY3VtdWxhdGUgaTE4bi1yZWxhdGVkIGNvbnRlbnRcbiAgYXBwZW5kQmluZGluZyhiaW5kaW5nOiBBU1QpIHtcbiAgICB0aGlzLmJpbmRpbmdzLmFkZChiaW5kaW5nKTtcbiAgfVxuICBhcHBlbmRJY3UobmFtZTogc3RyaW5nLCByZWY6IG8uRXhwcmVzc2lvbikge1xuICAgIHVwZGF0ZVBsYWNlaG9sZGVyTWFwKHRoaXMuX3JlZ2lzdHJ5LmljdXMsIG5hbWUsIHJlZik7XG4gIH1cbiAgYXBwZW5kQm91bmRUZXh0KG5vZGU6IGkxOG4uSTE4bk1ldGEpIHtcbiAgICBjb25zdCBwaHMgPSBhc3NlbWJsZUJvdW5kVGV4dFBsYWNlaG9sZGVycyhub2RlLCB0aGlzLmJpbmRpbmdzLnNpemUsIHRoaXMuaWQpO1xuICAgIHBocy5mb3JFYWNoKCh2YWx1ZXMsIGtleSkgPT4gdXBkYXRlUGxhY2Vob2xkZXJNYXAodGhpcy5wbGFjZWhvbGRlcnMsIGtleSwgLi4udmFsdWVzKSk7XG4gIH1cbiAgYXBwZW5kVGVtcGxhdGUobm9kZTogaTE4bi5JMThuTWV0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIC8vIGFkZCBvcGVuIGFuZCBjbG9zZSB0YWdzIGF0IHRoZSBzYW1lIHRpbWUsXG4gICAgLy8gc2luY2Ugd2UgcHJvY2VzcyBuZXN0ZWQgdGVtcGxhdGVzIHNlcGFyYXRlbHlcbiAgICB0aGlzLmFwcGVuZFRhZyhUYWdUeXBlLlRFTVBMQVRFLCBub2RlIGFzIGkxOG4uVGFnUGxhY2Vob2xkZXIsIGluZGV4LCBmYWxzZSk7XG4gICAgdGhpcy5hcHBlbmRUYWcoVGFnVHlwZS5URU1QTEFURSwgbm9kZSBhcyBpMThuLlRhZ1BsYWNlaG9sZGVyLCBpbmRleCwgdHJ1ZSk7XG4gICAgdGhpcy5fdW5yZXNvbHZlZEN0eENvdW50Kys7XG4gIH1cbiAgYXBwZW5kRWxlbWVudChub2RlOiBpMThuLkkxOG5NZXRhLCBpbmRleDogbnVtYmVyLCBjbG9zZWQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hcHBlbmRUYWcoVGFnVHlwZS5FTEVNRU5ULCBub2RlIGFzIGkxOG4uVGFnUGxhY2Vob2xkZXIsIGluZGV4LCBjbG9zZWQpO1xuICB9XG4gIGFwcGVuZFByb2plY3Rpb24obm9kZTogaTE4bi5JMThuTWV0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIC8vIGFkZCBvcGVuIGFuZCBjbG9zZSB0YWdzIGF0IHRoZSBzYW1lIHRpbWUsXG4gICAgLy8gc2luY2Ugd2UgcHJvY2VzcyBwcm9qZWN0ZWQgY29udGVudCBzZXBhcmF0ZWx5XG4gICAgdGhpcy5hcHBlbmRUYWcoVGFnVHlwZS5QUk9KRUNUSU9OLCBub2RlIGFzIGkxOG4uVGFnUGxhY2Vob2xkZXIsIGluZGV4LCBmYWxzZSk7XG4gICAgdGhpcy5hcHBlbmRUYWcoVGFnVHlwZS5QUk9KRUNUSU9OLCBub2RlIGFzIGkxOG4uVGFnUGxhY2Vob2xkZXIsIGluZGV4LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBjaGlsZCBjb250ZXh0IGJhc2VkIG9uIHRoZSByb290IG9uZSxcbiAgICogd2hlbiB3ZSBlbnRlciBhIG5lc3RlZCB0ZW1wbGF0ZSB3aXRoaW4gSTE4biBzZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggSW5zdHJ1Y3Rpb24gaW5kZXggb2YgY29ycmVzcG9uZGluZyBpMThuU3RhcnQsIHdoaWNoIGluaXRpYXRlcyB0aGlzIGNvbnRleHRcbiAgICogQHBhcmFtIHRlbXBsYXRlSW5kZXggSW5zdHJ1Y3Rpb24gaW5kZXggb2YgYSB0ZW1wbGF0ZSB3aGljaCB0aGlzIGNvbnRleHQgYmVsb25ncyB0b1xuICAgKiBAcGFyYW0gbWV0YSBNZXRhIGluZm9ybWF0aW9uIChpZCwgbWVhbmluZywgZGVzY3JpcHRpb24sIGV0YykgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29udGV4dFxuICAgKlxuICAgKiBAcmV0dXJucyBJMThuQ29udGV4dCBpbnN0YW5jZVxuICAgKi9cbiAgZm9ya0NoaWxkQ29udGV4dChpbmRleDogbnVtYmVyLCB0ZW1wbGF0ZUluZGV4OiBudW1iZXIsIG1ldGE6IGkxOG4uSTE4bk1ldGEpIHtcbiAgICByZXR1cm4gbmV3IEkxOG5Db250ZXh0KGluZGV4LCB0aGlzLnJlZiwgdGhpcy5sZXZlbCArIDEsIHRlbXBsYXRlSW5kZXgsIG1ldGEsIHRoaXMuX3JlZ2lzdHJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbmNpbGVzIGNoaWxkIGNvbnRleHQgaW50byBwYXJlbnQgb25lIG9uY2UgdGhlIGVuZCBvZiB0aGUgaTE4biBibG9jayBpcyByZWFjaGVkIChpMThuRW5kKS5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRleHQgQ2hpbGQgSTE4bkNvbnRleHQgaW5zdGFuY2UgdG8gYmUgcmVjb25jaWxlZCB3aXRoIHBhcmVudCBjb250ZXh0LlxuICAgKi9cbiAgcmVjb25jaWxlQ2hpbGRDb250ZXh0KGNvbnRleHQ6IEkxOG5Db250ZXh0KSB7XG4gICAgLy8gc2V0IHRoZSByaWdodCBjb250ZXh0IGlkIGZvciBvcGVuIGFuZCBjbG9zZVxuICAgIC8vIHRlbXBsYXRlIHRhZ3MsIHNvIHdlIGNhbiB1c2UgaXQgYXMgc3ViLWJsb2NrIGlkc1xuICAgIFsnc3RhcnQnLCAnY2xvc2UnXS5mb3JFYWNoKChvcDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSAoY29udGV4dC5tZXRhIGFzIGFueSlbYCR7b3B9TmFtZWBdO1xuICAgICAgY29uc3QgcGhzID0gdGhpcy5wbGFjZWhvbGRlcnMuZ2V0KGtleSkgfHwgW107XG4gICAgICBjb25zdCB0YWcgPSBwaHMuZmluZChmaW5kVGVtcGxhdGVGbih0aGlzLmlkLCBjb250ZXh0LnRlbXBsYXRlSW5kZXgpKTtcbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgdGFnLmN0eCA9IGNvbnRleHQuaWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyByZWNvbmNpbGUgcGxhY2Vob2xkZXJzXG4gICAgY29uc3QgY2hpbGRQaHMgPSBjb250ZXh0LnBsYWNlaG9sZGVycztcbiAgICBjaGlsZFBocy5mb3JFYWNoKCh2YWx1ZXM6IGFueVtdLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcGhzID0gdGhpcy5wbGFjZWhvbGRlcnMuZ2V0KGtleSk7XG4gICAgICBpZiAoIXBocykge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVycy5zZXQoa2V5LCB2YWx1ZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0cnkgdG8gZmluZCBtYXRjaGluZyB0ZW1wbGF0ZS4uLlxuICAgICAgY29uc3QgdG1wbElkeCA9IHBocy5maW5kSW5kZXgoZmluZFRlbXBsYXRlRm4oY29udGV4dC5pZCwgY29udGV4dC50ZW1wbGF0ZUluZGV4KSk7XG4gICAgICBpZiAodG1wbElkeCA+PSAwKSB7XG4gICAgICAgIC8vIC4uLiBpZiBmb3VuZCAtIHJlcGxhY2UgaXQgd2l0aCBuZXN0ZWQgdGVtcGxhdGUgY29udGVudFxuICAgICAgICBjb25zdCBpc0Nsb3NlVGFnID0ga2V5LnN0YXJ0c1dpdGgoJ0NMT1NFJyk7XG4gICAgICAgIGNvbnN0IGlzVGVtcGxhdGVUYWcgPSBrZXkuZW5kc1dpdGgoJ05HLVRFTVBMQVRFJyk7XG4gICAgICAgIGlmIChpc1RlbXBsYXRlVGFnKSB7XG4gICAgICAgICAgLy8gY3VycmVudCB0ZW1wbGF0ZSdzIGNvbnRlbnQgaXMgcGxhY2VkIGJlZm9yZSBvciBhZnRlclxuICAgICAgICAgIC8vIHBhcmVudCB0ZW1wbGF0ZSB0YWcsIGRlcGVuZGluZyBvbiB0aGUgb3Blbi9jbG9zZSBhdHJyaWJ1dGVcbiAgICAgICAgICBwaHMuc3BsaWNlKHRtcGxJZHggKyAoaXNDbG9zZVRhZyA/IDAgOiAxKSwgMCwgLi4udmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZHggPSBpc0Nsb3NlVGFnID8gdmFsdWVzLmxlbmd0aCAtIDEgOiAwO1xuICAgICAgICAgIHZhbHVlc1tpZHhdLnRtcGwgPSBwaHNbdG1wbElkeF07XG4gICAgICAgICAgcGhzLnNwbGljZSh0bXBsSWR4LCAxLCAuLi52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAuLi4gb3RoZXJ3aXNlIGp1c3QgYXBwZW5kIGNvbnRlbnQgdG8gcGxhY2Vob2xkZXIgdmFsdWVcbiAgICAgICAgcGhzLnB1c2goLi4udmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxhY2Vob2xkZXJzLnNldChrZXksIHBocyk7XG4gICAgfSk7XG4gICAgdGhpcy5fdW5yZXNvbHZlZEN0eENvdW50LS07XG4gIH1cbn1cblxuLy9cbi8vIEhlbHBlciBtZXRob2RzXG4vL1xuXG5mdW5jdGlvbiB3cmFwKHN5bWJvbDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb250ZXh0SWQ6IG51bWJlciwgY2xvc2VkPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IHN0YXRlID0gY2xvc2VkID8gJy8nIDogJyc7XG4gIHJldHVybiB3cmFwSTE4blBsYWNlaG9sZGVyKGAke3N0YXRlfSR7c3ltYm9sfSR7aW5kZXh9YCwgY29udGV4dElkKTtcbn1cblxuZnVuY3Rpb24gd3JhcFRhZyhzeW1ib2w6IHN0cmluZywge2luZGV4LCBjdHgsIGlzVm9pZH06IGFueSwgY2xvc2VkPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIHJldHVybiBpc1ZvaWQgPyB3cmFwKHN5bWJvbCwgaW5kZXgsIGN0eCkgKyB3cmFwKHN5bWJvbCwgaW5kZXgsIGN0eCwgdHJ1ZSkgOlxuICAgICAgICAgICAgICAgICAgd3JhcChzeW1ib2wsIGluZGV4LCBjdHgsIGNsb3NlZCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUZW1wbGF0ZUZuKGN0eDogbnVtYmVyLCB0ZW1wbGF0ZUluZGV4OiBudW1iZXJ8bnVsbCkge1xuICByZXR1cm4gKHRva2VuOiBhbnkpID0+IHR5cGVvZiB0b2tlbiA9PT0gJ29iamVjdCcgJiYgdG9rZW4udHlwZSA9PT0gVGFnVHlwZS5URU1QTEFURSAmJlxuICAgICAgdG9rZW4uaW5kZXggPT09IHRlbXBsYXRlSW5kZXggJiYgdG9rZW4uY3R4ID09PSBjdHg7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVBsYWNlaG9sZGVyVmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IGVsZW1lbnQgPSAoZGF0YTogYW55LCBjbG9zZWQ/OiBib29sZWFuKSA9PiB3cmFwVGFnKCcjJywgZGF0YSwgY2xvc2VkKTtcbiAgY29uc3QgdGVtcGxhdGUgPSAoZGF0YTogYW55LCBjbG9zZWQ/OiBib29sZWFuKSA9PiB3cmFwVGFnKCcqJywgZGF0YSwgY2xvc2VkKTtcbiAgY29uc3QgcHJvamVjdGlvbiA9IChkYXRhOiBhbnksIGNsb3NlZD86IGJvb2xlYW4pID0+IHdyYXBUYWcoJyEnLCBkYXRhLCBjbG9zZWQpO1xuXG4gIHN3aXRjaCAodmFsdWUudHlwZSkge1xuICAgIGNhc2UgVGFnVHlwZS5FTEVNRU5UOlxuICAgICAgLy8gY2xvc2UgZWxlbWVudCB0YWdcbiAgICAgIGlmICh2YWx1ZS5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQodmFsdWUsIHRydWUpICsgKHZhbHVlLnRtcGwgPyB0ZW1wbGF0ZSh2YWx1ZS50bXBsLCB0cnVlKSA6ICcnKTtcbiAgICAgIH1cbiAgICAgIC8vIG9wZW4gZWxlbWVudCB0YWcgdGhhdCBhbHNvIGluaXRpYXRlcyBhIHRlbXBsYXRlXG4gICAgICBpZiAodmFsdWUudG1wbCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUodmFsdWUudG1wbCkgKyBlbGVtZW50KHZhbHVlKSArXG4gICAgICAgICAgICAodmFsdWUuaXNWb2lkID8gdGVtcGxhdGUodmFsdWUudG1wbCwgdHJ1ZSkgOiAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudCh2YWx1ZSk7XG5cbiAgICBjYXNlIFRhZ1R5cGUuVEVNUExBVEU6XG4gICAgICByZXR1cm4gdGVtcGxhdGUodmFsdWUsIHZhbHVlLmNsb3NlZCk7XG5cbiAgICBjYXNlIFRhZ1R5cGUuUFJPSkVDVElPTjpcbiAgICAgIHJldHVybiBwcm9qZWN0aW9uKHZhbHVlLCB2YWx1ZS5jbG9zZWQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19