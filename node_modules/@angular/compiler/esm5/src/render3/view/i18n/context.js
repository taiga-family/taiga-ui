/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { assembleBoundTextPlaceholders, getSeqNumberGenerator, updatePlaceholderMap, wrapI18nPlaceholder } from './util';
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
    return { getUniqueId: getSeqNumberGenerator(), icus: new Map() };
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
        updatePlaceholderMap(this.placeholders, ph, content);
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
        updatePlaceholderMap(this._registry.icus, name, ref);
    };
    I18nContext.prototype.appendBoundText = function (node) {
        var _this = this;
        var phs = assembleBoundTextPlaceholders(node, this.bindings.size, this.id);
        phs.forEach(function (values, key) { return updatePlaceholderMap.apply(void 0, __spread([_this.placeholders, key], values)); });
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
                    phs.splice.apply(phs, __spread([tmplIdx + (isCloseTag ? 0 : 1), 0], values));
                }
                else {
                    var idx = isCloseTag ? values.length - 1 : 0;
                    values[idx].tmpl = phs[tmplIdx];
                    phs.splice.apply(phs, __spread([tmplIdx, 1], values));
                }
            }
            else {
                // ... otherwise just append content to placeholder value
                phs.push.apply(phs, __spread(values));
            }
            _this.placeholders.set(key, phs);
        });
        this._unresolvedCtxCount--;
    };
    return I18nContext;
}());
export { I18nContext };
//
// Helper methods
//
function wrap(symbol, index, contextId, closed) {
    var state = closed ? '/' : '';
    return wrapI18nPlaceholder("" + state + symbol + index, contextId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFNSCxPQUFPLEVBQUMsNkJBQTZCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkgsSUFBSyxPQUlKO0FBSkQsV0FBSyxPQUFPO0lBQ1YsMkNBQU8sQ0FBQTtJQUNQLDZDQUFRLENBQUE7SUFDUixpREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUpJLE9BQU8sS0FBUCxPQUFPLFFBSVg7QUFFRDs7R0FFRztBQUNILFNBQVMsYUFBYTtJQUNwQixPQUFPLEVBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFpQixFQUFDLENBQUM7QUFDaEYsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFTRSxxQkFDYSxLQUFhLEVBQVcsR0FBa0IsRUFBVyxLQUFpQixFQUN0RSxhQUFpQyxFQUFXLElBQW1CLEVBQ2hFLFFBQWM7UUFGd0Msc0JBQUEsRUFBQSxTQUFpQjtRQUN0RSw4QkFBQSxFQUFBLG9CQUFpQztRQURqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVcsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFXLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDdEUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNoRSxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBVm5CLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7UUFDeEMsY0FBUyxHQUFZLEtBQUssQ0FBQztR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QyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5RTtZQUNELGtEQUFrRDtZQUNsRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3hDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsS0FBSyxPQUFPLENBQUMsUUFBUTtZQUNuQixPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLEtBQUssT0FBTyxDQUFDLFVBQVU7WUFDckIsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QztZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBU1R9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Npb25fcGFyc2VyL2FzdCc7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4uLy4uLy4uL2kxOG4vaTE4bl9hc3QnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi8uLi8uLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5cbmltcG9ydCB7YXNzZW1ibGVCb3VuZFRleHRQbGFjZWhvbGRlcnMsIGdldFNlcU51bWJlckdlbmVyYXRvciwgdXBkYXRlUGxhY2Vob2xkZXJNYXAsIHdyYXBJMThuUGxhY2Vob2xkZXJ9IGZyb20gJy4vdXRpbCc7XG5cbmVudW0gVGFnVHlwZSB7XG4gIEVMRU1FTlQsXG4gIFRFTVBMQVRFLFxuICBQUk9KRUNUSU9OXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIG9iamVjdCB0aGF0IGlzIHVzZWQgYXMgYSBzaGFyZWQgc3RhdGUgYmV0d2VlbiBwYXJlbnQgYW5kIGFsbCBjaGlsZCBjb250ZXh0cy5cbiAqL1xuZnVuY3Rpb24gc2V0dXBSZWdpc3RyeSgpIHtcbiAgcmV0dXJuIHtnZXRVbmlxdWVJZDogZ2V0U2VxTnVtYmVyR2VuZXJhdG9yKCksIGljdXM6IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKX07XG59XG5cbi8qKlxuICogSTE4bkNvbnRleHQgaXMgYSBoZWxwZXIgY2xhc3Mgd2hpY2gga2VlcHMgdHJhY2sgb2YgYWxsIGkxOG4tcmVsYXRlZCBhc3BlY3RzXG4gKiAoYWNjdW11bGF0ZXMgcGxhY2Vob2xkZXJzLCBiaW5kaW5ncywgZXRjKSBiZXR3ZWVuIGkxOG5TdGFydCBhbmQgaTE4bkVuZCBpbnN0cnVjdGlvbnMuXG4gKlxuICogV2hlbiB3ZSBlbnRlciBhIG5lc3RlZCB0ZW1wbGF0ZSwgdGhlIHRvcC1sZXZlbCBjb250ZXh0IGlzIGJlaW5nIHBhc3NlZCBkb3duXG4gKiB0byB0aGUgbmVzdGVkIGNvbXBvbmVudCwgd2hpY2ggdXNlcyB0aGlzIGNvbnRleHQgdG8gZ2VuZXJhdGUgYSBjaGlsZCBpbnN0YW5jZVxuICogb2YgSTE4bkNvbnRleHQgY2xhc3MgKHRvIGhhbmRsZSBuZXN0ZWQgdGVtcGxhdGUpIGFuZCBhdCB0aGUgZW5kLCByZWNvbmNpbGVzIGl0IGJhY2tcbiAqIHdpdGggdGhlIHBhcmVudCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSBpbmRleCBJbnN0cnVjdGlvbiBpbmRleCBvZiBpMThuU3RhcnQsIHdoaWNoIGluaXRpYXRlcyB0aGlzIGNvbnRleHRcbiAqIEBwYXJhbSByZWYgUmVmZXJlbmNlIHRvIGEgdHJhbnNsYXRpb24gY29uc3QgdGhhdCByZXByZXNlbnRzIHRoZSBjb250ZW50IGlmIHRodXMgY29udGV4dFxuICogQHBhcmFtIGxldmVsIE5lc3RuZyBsZXZlbCBkZWZpbmVkIGZvciBjaGlsZCBjb250ZXh0c1xuICogQHBhcmFtIHRlbXBsYXRlSW5kZXggSW5zdHJ1Y3Rpb24gaW5kZXggb2YgYSB0ZW1wbGF0ZSB3aGljaCB0aGlzIGNvbnRleHQgYmVsb25ncyB0b1xuICogQHBhcmFtIG1ldGEgTWV0YSBpbmZvcm1hdGlvbiAoaWQsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBldGMpIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEkxOG5Db250ZXh0IHtcbiAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXI7XG4gIHB1YmxpYyBiaW5kaW5ncyA9IG5ldyBTZXQ8QVNUPigpO1xuICBwdWJsaWMgcGxhY2Vob2xkZXJzID0gbmV3IE1hcDxzdHJpbmcsIGFueVtdPigpO1xuICBwdWJsaWMgaXNFbWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcmVnaXN0cnkhOiBhbnk7XG4gIHByaXZhdGUgX3VucmVzb2x2ZWRDdHhDb3VudDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHJlYWRvbmx5IGluZGV4OiBudW1iZXIsIHJlYWRvbmx5IHJlZjogby5SZWFkVmFyRXhwciwgcmVhZG9ubHkgbGV2ZWw6IG51bWJlciA9IDAsXG4gICAgICByZWFkb25seSB0ZW1wbGF0ZUluZGV4OiBudW1iZXJ8bnVsbCA9IG51bGwsIHJlYWRvbmx5IG1ldGE6IGkxOG4uSTE4bk1ldGEsXG4gICAgICBwcml2YXRlIHJlZ2lzdHJ5PzogYW55KSB7XG4gICAgdGhpcy5fcmVnaXN0cnkgPSByZWdpc3RyeSB8fCBzZXR1cFJlZ2lzdHJ5KCk7XG4gICAgdGhpcy5pZCA9IHRoaXMuX3JlZ2lzdHJ5LmdldFVuaXF1ZUlkKCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFRhZyh0eXBlOiBUYWdUeXBlLCBub2RlOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBpbmRleDogbnVtYmVyLCBjbG9zZWQ/OiBib29sZWFuKSB7XG4gICAgaWYgKG5vZGUuaXNWb2lkICYmIGNsb3NlZCkge1xuICAgICAgcmV0dXJuOyAgLy8gaWdub3JlIFwiY2xvc2VcIiBmb3Igdm9pZCB0YWdzXG4gICAgfVxuICAgIGNvbnN0IHBoID0gbm9kZS5pc1ZvaWQgfHwgIWNsb3NlZCA/IG5vZGUuc3RhcnROYW1lIDogbm9kZS5jbG9zZU5hbWU7XG4gICAgY29uc3QgY29udGVudCA9IHt0eXBlLCBpbmRleCwgY3R4OiB0aGlzLmlkLCBpc1ZvaWQ6IG5vZGUuaXNWb2lkLCBjbG9zZWR9O1xuICAgIHVwZGF0ZVBsYWNlaG9sZGVyTWFwKHRoaXMucGxhY2Vob2xkZXJzLCBwaCwgY29udGVudCk7XG4gIH1cblxuICBnZXQgaWN1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnkuaWN1cztcbiAgfVxuICBnZXQgaXNSb290KCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsID09PSAwO1xuICB9XG4gIGdldCBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLl91bnJlc29sdmVkQ3R4Q291bnQgPT09IDA7XG4gIH1cblxuICBnZXRTZXJpYWxpemVkUGxhY2Vob2xkZXJzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVycy5mb3JFYWNoKFxuICAgICAgICAodmFsdWVzLCBrZXkpID0+IHJlc3VsdC5zZXQoa2V5LCB2YWx1ZXMubWFwKHNlcmlhbGl6ZVBsYWNlaG9sZGVyVmFsdWUpKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUEkgdG8gYWNjdW11bGF0ZSBpMThuLXJlbGF0ZWQgY29udGVudFxuICBhcHBlbmRCaW5kaW5nKGJpbmRpbmc6IEFTVCkge1xuICAgIHRoaXMuYmluZGluZ3MuYWRkKGJpbmRpbmcpO1xuICB9XG4gIGFwcGVuZEljdShuYW1lOiBzdHJpbmcsIHJlZjogby5FeHByZXNzaW9uKSB7XG4gICAgdXBkYXRlUGxhY2Vob2xkZXJNYXAodGhpcy5fcmVnaXN0cnkuaWN1cywgbmFtZSwgcmVmKTtcbiAgfVxuICBhcHBlbmRCb3VuZFRleHQobm9kZTogaTE4bi5JMThuTWV0YSkge1xuICAgIGNvbnN0IHBocyA9IGFzc2VtYmxlQm91bmRUZXh0UGxhY2Vob2xkZXJzKG5vZGUsIHRoaXMuYmluZGluZ3Muc2l6ZSwgdGhpcy5pZCk7XG4gICAgcGhzLmZvckVhY2goKHZhbHVlcywga2V5KSA9PiB1cGRhdGVQbGFjZWhvbGRlck1hcCh0aGlzLnBsYWNlaG9sZGVycywga2V5LCAuLi52YWx1ZXMpKTtcbiAgfVxuICBhcHBlbmRUZW1wbGF0ZShub2RlOiBpMThuLkkxOG5NZXRhLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gYWRkIG9wZW4gYW5kIGNsb3NlIHRhZ3MgYXQgdGhlIHNhbWUgdGltZSxcbiAgICAvLyBzaW5jZSB3ZSBwcm9jZXNzIG5lc3RlZCB0ZW1wbGF0ZXMgc2VwYXJhdGVseVxuICAgIHRoaXMuYXBwZW5kVGFnKFRhZ1R5cGUuVEVNUExBVEUsIG5vZGUgYXMgaTE4bi5UYWdQbGFjZWhvbGRlciwgaW5kZXgsIGZhbHNlKTtcbiAgICB0aGlzLmFwcGVuZFRhZyhUYWdUeXBlLlRFTVBMQVRFLCBub2RlIGFzIGkxOG4uVGFnUGxhY2Vob2xkZXIsIGluZGV4LCB0cnVlKTtcbiAgICB0aGlzLl91bnJlc29sdmVkQ3R4Q291bnQrKztcbiAgfVxuICBhcHBlbmRFbGVtZW50KG5vZGU6IGkxOG4uSTE4bk1ldGEsIGluZGV4OiBudW1iZXIsIGNsb3NlZD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFwcGVuZFRhZyhUYWdUeXBlLkVMRU1FTlQsIG5vZGUgYXMgaTE4bi5UYWdQbGFjZWhvbGRlciwgaW5kZXgsIGNsb3NlZCk7XG4gIH1cbiAgYXBwZW5kUHJvamVjdGlvbihub2RlOiBpMThuLkkxOG5NZXRhLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gYWRkIG9wZW4gYW5kIGNsb3NlIHRhZ3MgYXQgdGhlIHNhbWUgdGltZSxcbiAgICAvLyBzaW5jZSB3ZSBwcm9jZXNzIHByb2plY3RlZCBjb250ZW50IHNlcGFyYXRlbHlcbiAgICB0aGlzLmFwcGVuZFRhZyhUYWdUeXBlLlBST0pFQ1RJT04sIG5vZGUgYXMgaTE4bi5UYWdQbGFjZWhvbGRlciwgaW5kZXgsIGZhbHNlKTtcbiAgICB0aGlzLmFwcGVuZFRhZyhUYWdUeXBlLlBST0pFQ1RJT04sIG5vZGUgYXMgaTE4bi5UYWdQbGFjZWhvbGRlciwgaW5kZXgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBpbnN0YW5jZSBvZiBhIGNoaWxkIGNvbnRleHQgYmFzZWQgb24gdGhlIHJvb3Qgb25lLFxuICAgKiB3aGVuIHdlIGVudGVyIGEgbmVzdGVkIHRlbXBsYXRlIHdpdGhpbiBJMThuIHNlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBJbnN0cnVjdGlvbiBpbmRleCBvZiBjb3JyZXNwb25kaW5nIGkxOG5TdGFydCwgd2hpY2ggaW5pdGlhdGVzIHRoaXMgY29udGV4dFxuICAgKiBAcGFyYW0gdGVtcGxhdGVJbmRleCBJbnN0cnVjdGlvbiBpbmRleCBvZiBhIHRlbXBsYXRlIHdoaWNoIHRoaXMgY29udGV4dCBiZWxvbmdzIHRvXG4gICAqIEBwYXJhbSBtZXRhIE1ldGEgaW5mb3JtYXRpb24gKGlkLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgZXRjKSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250ZXh0XG4gICAqXG4gICAqIEByZXR1cm5zIEkxOG5Db250ZXh0IGluc3RhbmNlXG4gICAqL1xuICBmb3JrQ2hpbGRDb250ZXh0KGluZGV4OiBudW1iZXIsIHRlbXBsYXRlSW5kZXg6IG51bWJlciwgbWV0YTogaTE4bi5JMThuTWV0YSkge1xuICAgIHJldHVybiBuZXcgSTE4bkNvbnRleHQoaW5kZXgsIHRoaXMucmVmLCB0aGlzLmxldmVsICsgMSwgdGVtcGxhdGVJbmRleCwgbWV0YSwgdGhpcy5fcmVnaXN0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29uY2lsZXMgY2hpbGQgY29udGV4dCBpbnRvIHBhcmVudCBvbmUgb25jZSB0aGUgZW5kIG9mIHRoZSBpMThuIGJsb2NrIGlzIHJlYWNoZWQgKGkxOG5FbmQpLlxuICAgKlxuICAgKiBAcGFyYW0gY29udGV4dCBDaGlsZCBJMThuQ29udGV4dCBpbnN0YW5jZSB0byBiZSByZWNvbmNpbGVkIHdpdGggcGFyZW50IGNvbnRleHQuXG4gICAqL1xuICByZWNvbmNpbGVDaGlsZENvbnRleHQoY29udGV4dDogSTE4bkNvbnRleHQpIHtcbiAgICAvLyBzZXQgdGhlIHJpZ2h0IGNvbnRleHQgaWQgZm9yIG9wZW4gYW5kIGNsb3NlXG4gICAgLy8gdGVtcGxhdGUgdGFncywgc28gd2UgY2FuIHVzZSBpdCBhcyBzdWItYmxvY2sgaWRzXG4gICAgWydzdGFydCcsICdjbG9zZSddLmZvckVhY2goKG9wOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IChjb250ZXh0Lm1ldGEgYXMgYW55KVtgJHtvcH1OYW1lYF07XG4gICAgICBjb25zdCBwaHMgPSB0aGlzLnBsYWNlaG9sZGVycy5nZXQoa2V5KSB8fCBbXTtcbiAgICAgIGNvbnN0IHRhZyA9IHBocy5maW5kKGZpbmRUZW1wbGF0ZUZuKHRoaXMuaWQsIGNvbnRleHQudGVtcGxhdGVJbmRleCkpO1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICB0YWcuY3R4ID0gY29udGV4dC5pZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHJlY29uY2lsZSBwbGFjZWhvbGRlcnNcbiAgICBjb25zdCBjaGlsZFBocyA9IGNvbnRleHQucGxhY2Vob2xkZXJzO1xuICAgIGNoaWxkUGhzLmZvckVhY2goKHZhbHVlczogYW55W10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBwaHMgPSB0aGlzLnBsYWNlaG9sZGVycy5nZXQoa2V5KTtcbiAgICAgIGlmICghcGhzKSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJzLnNldChrZXksIHZhbHVlcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHRyeSB0byBmaW5kIG1hdGNoaW5nIHRlbXBsYXRlLi4uXG4gICAgICBjb25zdCB0bXBsSWR4ID0gcGhzLmZpbmRJbmRleChmaW5kVGVtcGxhdGVGbihjb250ZXh0LmlkLCBjb250ZXh0LnRlbXBsYXRlSW5kZXgpKTtcbiAgICAgIGlmICh0bXBsSWR4ID49IDApIHtcbiAgICAgICAgLy8gLi4uIGlmIGZvdW5kIC0gcmVwbGFjZSBpdCB3aXRoIG5lc3RlZCB0ZW1wbGF0ZSBjb250ZW50XG4gICAgICAgIGNvbnN0IGlzQ2xvc2VUYWcgPSBrZXkuc3RhcnRzV2l0aCgnQ0xPU0UnKTtcbiAgICAgICAgY29uc3QgaXNUZW1wbGF0ZVRhZyA9IGtleS5lbmRzV2l0aCgnTkctVEVNUExBVEUnKTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVUYWcpIHtcbiAgICAgICAgICAvLyBjdXJyZW50IHRlbXBsYXRlJ3MgY29udGVudCBpcyBwbGFjZWQgYmVmb3JlIG9yIGFmdGVyXG4gICAgICAgICAgLy8gcGFyZW50IHRlbXBsYXRlIHRhZywgZGVwZW5kaW5nIG9uIHRoZSBvcGVuL2Nsb3NlIGF0cnJpYnV0ZVxuICAgICAgICAgIHBocy5zcGxpY2UodG1wbElkeCArIChpc0Nsb3NlVGFnID8gMCA6IDEpLCAwLCAuLi52YWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IGlzQ2xvc2VUYWcgPyB2YWx1ZXMubGVuZ3RoIC0gMSA6IDA7XG4gICAgICAgICAgdmFsdWVzW2lkeF0udG1wbCA9IHBoc1t0bXBsSWR4XTtcbiAgICAgICAgICBwaHMuc3BsaWNlKHRtcGxJZHgsIDEsIC4uLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIC4uLiBvdGhlcndpc2UganVzdCBhcHBlbmQgY29udGVudCB0byBwbGFjZWhvbGRlciB2YWx1ZVxuICAgICAgICBwaHMucHVzaCguLi52YWx1ZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGFjZWhvbGRlcnMuc2V0KGtleSwgcGhzKTtcbiAgICB9KTtcbiAgICB0aGlzLl91bnJlc29sdmVkQ3R4Q291bnQtLTtcbiAgfVxufVxuXG4vL1xuLy8gSGVscGVyIG1ldGhvZHNcbi8vXG5cbmZ1bmN0aW9uIHdyYXAoc3ltYm9sOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNvbnRleHRJZDogbnVtYmVyLCBjbG9zZWQ/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RhdGUgPSBjbG9zZWQgPyAnLycgOiAnJztcbiAgcmV0dXJuIHdyYXBJMThuUGxhY2Vob2xkZXIoYCR7c3RhdGV9JHtzeW1ib2x9JHtpbmRleH1gLCBjb250ZXh0SWQpO1xufVxuXG5mdW5jdGlvbiB3cmFwVGFnKHN5bWJvbDogc3RyaW5nLCB7aW5kZXgsIGN0eCwgaXNWb2lkfTogYW55LCBjbG9zZWQ/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzVm9pZCA/IHdyYXAoc3ltYm9sLCBpbmRleCwgY3R4KSArIHdyYXAoc3ltYm9sLCBpbmRleCwgY3R4LCB0cnVlKSA6XG4gICAgICAgICAgICAgICAgICB3cmFwKHN5bWJvbCwgaW5kZXgsIGN0eCwgY2xvc2VkKTtcbn1cblxuZnVuY3Rpb24gZmluZFRlbXBsYXRlRm4oY3R4OiBudW1iZXIsIHRlbXBsYXRlSW5kZXg6IG51bWJlcnxudWxsKSB7XG4gIHJldHVybiAodG9rZW46IGFueSkgPT4gdHlwZW9mIHRva2VuID09PSAnb2JqZWN0JyAmJiB0b2tlbi50eXBlID09PSBUYWdUeXBlLlRFTVBMQVRFICYmXG4gICAgICB0b2tlbi5pbmRleCA9PT0gdGVtcGxhdGVJbmRleCAmJiB0b2tlbi5jdHggPT09IGN0eDtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplUGxhY2Vob2xkZXJWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgZWxlbWVudCA9IChkYXRhOiBhbnksIGNsb3NlZD86IGJvb2xlYW4pID0+IHdyYXBUYWcoJyMnLCBkYXRhLCBjbG9zZWQpO1xuICBjb25zdCB0ZW1wbGF0ZSA9IChkYXRhOiBhbnksIGNsb3NlZD86IGJvb2xlYW4pID0+IHdyYXBUYWcoJyonLCBkYXRhLCBjbG9zZWQpO1xuICBjb25zdCBwcm9qZWN0aW9uID0gKGRhdGE6IGFueSwgY2xvc2VkPzogYm9vbGVhbikgPT4gd3JhcFRhZygnIScsIGRhdGEsIGNsb3NlZCk7XG5cbiAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XG4gICAgY2FzZSBUYWdUeXBlLkVMRU1FTlQ6XG4gICAgICAvLyBjbG9zZSBlbGVtZW50IHRhZ1xuICAgICAgaWYgKHZhbHVlLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudCh2YWx1ZSwgdHJ1ZSkgKyAodmFsdWUudG1wbCA/IHRlbXBsYXRlKHZhbHVlLnRtcGwsIHRydWUpIDogJycpO1xuICAgICAgfVxuICAgICAgLy8gb3BlbiBlbGVtZW50IHRhZyB0aGF0IGFsc28gaW5pdGlhdGVzIGEgdGVtcGxhdGVcbiAgICAgIGlmICh2YWx1ZS50bXBsKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZSh2YWx1ZS50bXBsKSArIGVsZW1lbnQodmFsdWUpICtcbiAgICAgICAgICAgICh2YWx1ZS5pc1ZvaWQgPyB0ZW1wbGF0ZSh2YWx1ZS50bXBsLCB0cnVlKSA6ICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50KHZhbHVlKTtcblxuICAgIGNhc2UgVGFnVHlwZS5URU1QTEFURTpcbiAgICAgIHJldHVybiB0ZW1wbGF0ZSh2YWx1ZSwgdmFsdWUuY2xvc2VkKTtcblxuICAgIGNhc2UgVGFnVHlwZS5QUk9KRUNUSU9OOlxuICAgICAgcmV0dXJuIHByb2plY3Rpb24odmFsdWUsIHZhbHVlLmNsb3NlZCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=