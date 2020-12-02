/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/src/browser_util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵgetDOM as getDOM } from '@angular/common';
import { NgZone, ɵglobal as global } from '@angular/core';
export class BrowserDetection {
    /**
     * @param {?} ua
     */
    constructor(ua) {
        this._overrideUa = ua;
    }
    /**
     * @private
     * @return {?}
     */
    get _ua() {
        if (typeof this._overrideUa === 'string') {
            return this._overrideUa;
        }
        return getDOM() ? getDOM().getUserAgent() : '';
    }
    /**
     * @return {?}
     */
    static setup() {
        return new BrowserDetection(null);
    }
    /**
     * @return {?}
     */
    get isFirefox() {
        return this._ua.indexOf('Firefox') > -1;
    }
    /**
     * @return {?}
     */
    get isAndroid() {
        return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 &&
            this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1 &&
            this._ua.indexOf('IEMobile') == -1;
    }
    /**
     * @return {?}
     */
    get isEdge() {
        return this._ua.indexOf('Edge') > -1;
    }
    /**
     * @return {?}
     */
    get isIE() {
        return this._ua.indexOf('Trident') > -1;
    }
    /**
     * @return {?}
     */
    get isWebkit() {
        return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1 &&
            this._ua.indexOf('IEMobile') == -1;
    }
    /**
     * @return {?}
     */
    get isIOS7() {
        return (this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1) &&
            this._ua.indexOf('IEMobile') == -1;
    }
    /**
     * @return {?}
     */
    get isSlow() {
        return this.isAndroid || this.isIE || this.isIOS7;
    }
    // The Intl API is only natively supported in Chrome, Firefox, IE11 and Edge.
    // This detector is needed in tests to make the difference between:
    // 1) IE11/Edge: they have a native Intl API, but with some discrepancies
    // 2) IE9/IE10: they use the polyfill, and so no discrepancies
    /**
     * @return {?}
     */
    get supportsNativeIntlApi() {
        return !!((/** @type {?} */ (global))).Intl && ((/** @type {?} */ (global))).Intl !== ((/** @type {?} */ (global))).IntlPolyfill;
    }
    /**
     * @return {?}
     */
    get isChromeDesktop() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Mobile Safari') == -1 &&
            this._ua.indexOf('Edge') == -1;
    }
    // "Old Chrome" means Chrome 3X, where there are some discrepancies in the Intl API.
    // Android 4.4 and 5.X have such browsers by default (respectively 30 and 39).
    /**
     * @return {?}
     */
    get isOldChrome() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Chrome/3') > -1 &&
            this._ua.indexOf('Edge') == -1;
    }
    /**
     * @return {?}
     */
    get supportsCustomElements() {
        return (typeof ((/** @type {?} */ (global))).customElements !== 'undefined');
    }
    /**
     * @return {?}
     */
    get supportsDeprecatedCustomCustomElementsV0() {
        return (typeof ((/** @type {?} */ (document))).registerElement !== 'undefined');
    }
    /**
     * @return {?}
     */
    get supportsRegExUnicodeFlag() {
        return RegExp.prototype.hasOwnProperty('unicode');
    }
    /**
     * @return {?}
     */
    get supportsShadowDom() {
        /** @type {?} */
        const testEl = document.createElement('div');
        return (typeof testEl.attachShadow !== 'undefined');
    }
    /**
     * @return {?}
     */
    get supportsDeprecatedShadowDomV0() {
        /** @type {?} */
        const testEl = (/** @type {?} */ (document.createElement('div')));
        return (typeof testEl.createShadowRoot !== 'undefined');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrowserDetection.prototype._overrideUa;
}
/** @type {?} */
export const browserDetection = BrowserDetection.setup();
/**
 * @param {?} element
 * @param {?} eventType
 * @return {?}
 */
export function dispatchEvent(element, eventType) {
    /** @type {?} */
    const evt = getDOM().getDefaultDocument().createEvent('Event');
    evt.initEvent(eventType, true, true);
    getDOM().dispatchEvent(element, evt);
}
/**
 * @param {?} eventType
 * @return {?}
 */
export function createMouseEvent(eventType) {
    /** @type {?} */
    const evt = getDOM().getDefaultDocument().createEvent('MouseEvent');
    evt.initEvent(eventType, true, true);
    return evt;
}
/**
 * @param {?} html
 * @return {?}
 */
export function el(html) {
    return (/** @type {?} */ (getContent(createTemplate(html)).firstChild));
}
/**
 * @param {?} css
 * @return {?}
 */
export function normalizeCSS(css) {
    return css.replace(/\s+/g, ' ')
        .replace(/:\s/g, ':')
        .replace(/'/g, '"')
        .replace(/ }/g, '}')
        .replace(/url\((\"|\s)(.+)(\"|\s)\)(\s*)/g, (/**
     * @param {...?} match
     * @return {?}
     */
    (...match) => `url("${match[2]}")`))
        .replace(/\[(.+)=([^"\]]+)\]/g, (/**
     * @param {...?} match
     * @return {?}
     */
    (...match) => `[${match[1]}="${match[2]}"]`));
}
/**
 * @param {?} element
 * @return {?}
 */
function getAttributeMap(element) {
    /** @type {?} */
    const res = new Map();
    /** @type {?} */
    const elAttrs = element.attributes;
    for (let i = 0; i < elAttrs.length; i++) {
        /** @type {?} */
        const attrib = elAttrs.item(i);
        res.set(attrib.name, attrib.value);
    }
    return res;
}
/** @type {?} */
const _selfClosingTags = ['br', 'hr', 'input'];
/**
 * @param {?} el
 * @return {?}
 */
export function stringifyElement(el /** TODO #9100 */) {
    /** @type {?} */
    let result = '';
    if (getDOM().isElementNode(el)) {
        /** @type {?} */
        const tagName = el.tagName.toLowerCase();
        // Opening tag
        result += `<${tagName}`;
        // Attributes in an ordered way
        /** @type {?} */
        const attributeMap = getAttributeMap(el);
        /** @type {?} */
        const sortedKeys = Array.from(attributeMap.keys()).sort();
        for (const key of sortedKeys) {
            /** @type {?} */
            const lowerCaseKey = key.toLowerCase();
            /** @type {?} */
            let attValue = attributeMap.get(key);
            if (typeof attValue !== 'string') {
                result += ` ${lowerCaseKey}`;
            }
            else {
                // Browsers order style rules differently. Order them alphabetically for consistency.
                if (lowerCaseKey === 'style') {
                    attValue = attValue.split(/; ?/).filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => !!s)).sort().map((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => `${s};`)).join(' ');
                }
                result += ` ${lowerCaseKey}="${attValue}"`;
            }
        }
        result += '>';
        // Children
        /** @type {?} */
        const childrenRoot = templateAwareRoot(el);
        /** @type {?} */
        const children = childrenRoot ? childrenRoot.childNodes : [];
        for (let j = 0; j < children.length; j++) {
            result += stringifyElement(children[j]);
        }
        // Closing tag
        if (_selfClosingTags.indexOf(tagName) == -1) {
            result += `</${tagName}>`;
        }
    }
    else if (isCommentNode(el)) {
        result += `<!--${el.nodeValue}-->`;
    }
    else {
        result += el.textContent;
    }
    return result;
}
/**
 * @return {?}
 */
export function createNgZone() {
    return new NgZone({ enableLongStackTrace: true, shouldCoalesceEventChangeDetection: false });
}
/**
 * @param {?} node
 * @return {?}
 */
export function isCommentNode(node) {
    return node.nodeType === Node.COMMENT_NODE;
}
/**
 * @param {?} node
 * @return {?}
 */
export function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
/**
 * @param {?} node
 * @return {?}
 */
export function getContent(node) {
    if ('content' in node) {
        return ((/** @type {?} */ (node))).content;
    }
    else {
        return node;
    }
}
/**
 * @param {?} el
 * @return {?}
 */
export function templateAwareRoot(el) {
    return getDOM().isElementNode(el) && el.nodeName === 'TEMPLATE' ? getContent(el) : el;
}
/**
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
export function setCookie(name, value) {
    // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
    // not clear other cookies.
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}
/**
 * @return {?}
 */
export function supportsWebAnimation() {
    return typeof ((/** @type {?} */ (Element))).prototype['animate'] === 'function';
}
/**
 * @param {?} element
 * @param {?} styleName
 * @param {?=} styleValue
 * @return {?}
 */
export function hasStyle(element, styleName, styleValue) {
    /** @type {?} */
    const value = element.style[styleName] || '';
    return styleValue ? value == styleValue : value.length > 0;
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
export function hasClass(element, className) {
    return element.classList.contains(className);
}
/**
 * @param {?} element
 * @return {?}
 */
export function sortedClassList(element) {
    return Array.prototype.slice.call(element.classList, 0).sort();
}
/**
 * @param {?} html
 * @return {?}
 */
export function createTemplate(html) {
    /** @type {?} */
    const t = getDOM().getDefaultDocument().createElement('template');
    t.innerHTML = html;
    return t;
}
/**
 * @param {?} el
 * @return {?}
 */
export function childNodesAsList(el) {
    /** @type {?} */
    const childNodes = el.childNodes;
    /** @type {?} */
    const res = [];
    for (let i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci90ZXN0aW5nL3NyYy9icm93c2VyX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWMzQixZQUFZLEVBQWU7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFkRCxJQUFZLEdBQUc7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQU1ELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNF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QVUsZUFBZSxDQUFDLE9BQVk7SUFDMUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBUzs7VUFDaEMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNqRSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNuQixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEVBQVE7O1VBQ2pDLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVTs7VUFDMUIsR0FBRyxHQUFHLEVBQUU7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Tmdab25lLCDJtWdsb2JhbCBhcyBnbG9iYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlckRldGVjdGlvbiB7XG4gIHByaXZhdGUgX292ZXJyaWRlVWE6IHN0cmluZ3xudWxsO1xuICBwcml2YXRlIGdldCBfdWEoKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX292ZXJyaWRlVWEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGVVYTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0RE9NKCkgPyBnZXRET00oKS5nZXRVc2VyQWdlbnQoKSA6ICcnO1xuICB9XG5cbiAgc3RhdGljIHNldHVwKCkge1xuICAgIHJldHVybiBuZXcgQnJvd3NlckRldGVjdGlvbihudWxsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHVhOiBzdHJpbmd8bnVsbCkge1xuICAgIHRoaXMuX292ZXJyaWRlVWEgPSB1YTtcbiAgfVxuXG4gIGdldCBpc0ZpcmVmb3goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VhLmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xO1xuICB9XG5cbiAgZ2V0IGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignTW96aWxsYS81LjAnKSA+IC0xICYmIHRoaXMuX3VhLmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xICYmXG4gICAgICAgIHRoaXMuX3VhLmluZGV4T2YoJ0FwcGxlV2ViS2l0JykgPiAtMSAmJiB0aGlzLl91YS5pbmRleE9mKCdDaHJvbWUnKSA9PSAtMSAmJlxuICAgICAgICB0aGlzLl91YS5pbmRleE9mKCdJRU1vYmlsZScpID09IC0xO1xuICB9XG5cbiAgZ2V0IGlzRWRnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignRWRnZScpID4gLTE7XG4gIH1cblxuICBnZXQgaXNJRSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignVHJpZGVudCcpID4gLTE7XG4gIH1cblxuICBnZXQgaXNXZWJraXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VhLmluZGV4T2YoJ0FwcGxlV2ViS2l0JykgPiAtMSAmJiB0aGlzLl91YS5pbmRleE9mKCdFZGdlJykgPT0gLTEgJiZcbiAgICAgICAgdGhpcy5fdWEuaW5kZXhPZignSUVNb2JpbGUnKSA9PSAtMTtcbiAgfVxuXG4gIGdldCBpc0lPUzcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLl91YS5pbmRleE9mKCdpUGhvbmUgT1MgNycpID4gLTEgfHwgdGhpcy5fdWEuaW5kZXhPZignaVBhZCBPUyA3JykgPiAtMSkgJiZcbiAgICAgICAgdGhpcy5fdWEuaW5kZXhPZignSUVNb2JpbGUnKSA9PSAtMTtcbiAgfVxuXG4gIGdldCBpc1Nsb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbmRyb2lkIHx8IHRoaXMuaXNJRSB8fCB0aGlzLmlzSU9TNztcbiAgfVxuXG4gIC8vIFRoZSBJbnRsIEFQSSBpcyBvbmx5IG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiBDaHJvbWUsIEZpcmVmb3gsIElFMTEgYW5kIEVkZ2UuXG4gIC8vIFRoaXMgZGV0ZWN0b3IgaXMgbmVlZGVkIGluIHRlc3RzIHRvIG1ha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbjpcbiAgLy8gMSkgSUUxMS9FZGdlOiB0aGV5IGhhdmUgYSBuYXRpdmUgSW50bCBBUEksIGJ1dCB3aXRoIHNvbWUgZGlzY3JlcGFuY2llc1xuICAvLyAyKSBJRTkvSUUxMDogdGhleSB1c2UgdGhlIHBvbHlmaWxsLCBhbmQgc28gbm8gZGlzY3JlcGFuY2llc1xuICBnZXQgc3VwcG9ydHNOYXRpdmVJbnRsQXBpKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISg8YW55Pmdsb2JhbCkuSW50bCAmJiAoPGFueT5nbG9iYWwpLkludGwgIT09ICg8YW55Pmdsb2JhbCkuSW50bFBvbHlmaWxsO1xuICB9XG5cbiAgZ2V0IGlzQ2hyb21lRGVza3RvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignQ2hyb21lJykgPiAtMSAmJiB0aGlzLl91YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgPT0gLTEgJiZcbiAgICAgICAgdGhpcy5fdWEuaW5kZXhPZignRWRnZScpID09IC0xO1xuICB9XG5cbiAgLy8gXCJPbGQgQ2hyb21lXCIgbWVhbnMgQ2hyb21lIDNYLCB3aGVyZSB0aGVyZSBhcmUgc29tZSBkaXNjcmVwYW5jaWVzIGluIHRoZSBJbnRsIEFQSS5cbiAgLy8gQW5kcm9pZCA0LjQgYW5kIDUuWCBoYXZlIHN1Y2ggYnJvd3NlcnMgYnkgZGVmYXVsdCAocmVzcGVjdGl2ZWx5IDMwIGFuZCAzOSkuXG4gIGdldCBpc09sZENocm9tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignQ2hyb21lJykgPiAtMSAmJiB0aGlzLl91YS5pbmRleE9mKCdDaHJvbWUvMycpID4gLTEgJiZcbiAgICAgICAgdGhpcy5fdWEuaW5kZXhPZignRWRnZScpID09IC0xO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ3VzdG9tRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgKDxhbnk+Z2xvYmFsKS5jdXN0b21FbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzRGVwcmVjYXRlZEN1c3RvbUN1c3RvbUVsZW1lbnRzVjAoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgKGRvY3VtZW50IGFzIGFueSkucmVnaXN0ZXJFbGVtZW50ICE9PSAndW5kZWZpbmVkJyk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNSZWdFeFVuaWNvZGVGbGFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBSZWdFeHAucHJvdG90eXBlLmhhc093blByb3BlcnR5KCd1bmljb2RlJyk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTaGFkb3dEb20oKSB7XG4gICAgY29uc3QgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICh0eXBlb2YgdGVzdEVsLmF0dGFjaFNoYWRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzRGVwcmVjYXRlZFNoYWRvd0RvbVYwKCkge1xuICAgIGNvbnN0IHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIGFueTtcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXN0RWwuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBicm93c2VyRGV0ZWN0aW9uOiBCcm93c2VyRGV0ZWN0aW9uID0gQnJvd3NlckRldGVjdGlvbi5zZXR1cCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50OiBhbnksIGV2ZW50VHlwZTogYW55KTogdm9pZCB7XG4gIGNvbnN0IGV2dDogRXZlbnQgPSBnZXRET00oKS5nZXREZWZhdWx0RG9jdW1lbnQoKS5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgZXZ0LmluaXRFdmVudChldmVudFR5cGUsIHRydWUsIHRydWUpO1xuICBnZXRET00oKS5kaXNwYXRjaEV2ZW50KGVsZW1lbnQsIGV2dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3VzZUV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogTW91c2VFdmVudCB7XG4gIGNvbnN0IGV2dDogTW91c2VFdmVudCA9IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpLmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG4gIGV2dC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlKTtcbiAgcmV0dXJuIGV2dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsKGh0bWw6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgcmV0dXJuIDxIVE1MRWxlbWVudD5nZXRDb250ZW50KGNyZWF0ZVRlbXBsYXRlKGh0bWwpKS5maXJzdENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ1NTKGNzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNzcy5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgIC5yZXBsYWNlKC86XFxzL2csICc6JylcbiAgICAgIC5yZXBsYWNlKC8nL2csICdcIicpXG4gICAgICAucmVwbGFjZSgvIH0vZywgJ30nKVxuICAgICAgLnJlcGxhY2UoL3VybFxcKChcXFwifFxccykoLispKFxcXCJ8XFxzKVxcKShcXHMqKS9nLCAoLi4ubWF0Y2g6IHN0cmluZ1tdKSA9PiBgdXJsKFwiJHttYXRjaFsyXX1cIilgKVxuICAgICAgLnJlcGxhY2UoL1xcWyguKyk9KFteXCJcXF1dKylcXF0vZywgKC4uLm1hdGNoOiBzdHJpbmdbXSkgPT4gYFske21hdGNoWzFdfT1cIiR7bWF0Y2hbMl19XCJdYCk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZU1hcChlbGVtZW50OiBhbnkpOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgcmVzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgY29uc3QgZWxBdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbEF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0cmliID0gZWxBdHRycy5pdGVtKGkpO1xuICAgIHJlcy5zZXQoYXR0cmliLm5hbWUsIGF0dHJpYi52YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuY29uc3QgX3NlbGZDbG9zaW5nVGFncyA9IFsnYnInLCAnaHInLCAnaW5wdXQnXTtcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlFbGVtZW50KGVsOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8pOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGlmIChnZXRET00oKS5pc0VsZW1lbnROb2RlKGVsKSkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBPcGVuaW5nIHRhZ1xuICAgIHJlc3VsdCArPSBgPCR7dGFnTmFtZX1gO1xuXG4gICAgLy8gQXR0cmlidXRlcyBpbiBhbiBvcmRlcmVkIHdheVxuICAgIGNvbnN0IGF0dHJpYnV0ZU1hcCA9IGdldEF0dHJpYnV0ZU1hcChlbCk7XG4gICAgY29uc3Qgc29ydGVkS2V5cyA9IEFycmF5LmZyb20oYXR0cmlidXRlTWFwLmtleXMoKSkuc29ydCgpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHNvcnRlZEtleXMpIHtcbiAgICAgIGNvbnN0IGxvd2VyQ2FzZUtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IGF0dFZhbHVlID0gYXR0cmlidXRlTWFwLmdldChrZXkpO1xuXG4gICAgICBpZiAodHlwZW9mIGF0dFZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXN1bHQgKz0gYCAke2xvd2VyQ2FzZUtleX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlcnMgb3JkZXIgc3R5bGUgcnVsZXMgZGlmZmVyZW50bHkuIE9yZGVyIHRoZW0gYWxwaGFiZXRpY2FsbHkgZm9yIGNvbnNpc3RlbmN5LlxuICAgICAgICBpZiAobG93ZXJDYXNlS2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgYXR0VmFsdWUgPSBhdHRWYWx1ZS5zcGxpdCgvOyA/LykuZmlsdGVyKHMgPT4gISFzKS5zb3J0KCkubWFwKHMgPT4gYCR7c307YCkuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IGAgJHtsb3dlckNhc2VLZXl9PVwiJHthdHRWYWx1ZX1cImA7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSAnPic7XG5cbiAgICAvLyBDaGlsZHJlblxuICAgIGNvbnN0IGNoaWxkcmVuUm9vdCA9IHRlbXBsYXRlQXdhcmVSb290KGVsKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuUm9vdCA/IGNoaWxkcmVuUm9vdC5jaGlsZE5vZGVzIDogW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZ2lmeUVsZW1lbnQoY2hpbGRyZW5bal0pO1xuICAgIH1cblxuICAgIC8vIENsb3NpbmcgdGFnXG4gICAgaWYgKF9zZWxmQ2xvc2luZ1RhZ3MuaW5kZXhPZih0YWdOYW1lKSA9PSAtMSkge1xuICAgICAgcmVzdWx0ICs9IGA8LyR7dGFnTmFtZX0+YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDb21tZW50Tm9kZShlbCkpIHtcbiAgICByZXN1bHQgKz0gYDwhLS0ke2VsLm5vZGVWYWx1ZX0tLT5gO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSBlbC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZ1pvbmUoKTogTmdab25lIHtcbiAgcmV0dXJuIG5ldyBOZ1pvbmUoe2VuYWJsZUxvbmdTdGFja1RyYWNlOiB0cnVlLCBzaG91bGRDb2FsZXNjZUV2ZW50Q2hhbmdlRGV0ZWN0aW9uOiBmYWxzZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tZW50Tm9kZShub2RlOiBOb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dE5vZGUobm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KG5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgaWYgKCdjb250ZW50JyBpbiBub2RlKSB7XG4gICAgcmV0dXJuICg8YW55Pm5vZGUpLmNvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlQXdhcmVSb290KGVsOiBOb2RlKTogYW55IHtcbiAgcmV0dXJuIGdldERPTSgpLmlzRWxlbWVudE5vZGUoZWwpICYmIGVsLm5vZGVOYW1lID09PSAnVEVNUExBVEUnID8gZ2V0Q29udGVudChlbCkgOiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgLy8gZG9jdW1lbnQuY29va2llIGlzIG1hZ2ljYWwsIGFzc2lnbmluZyBpbnRvIGl0IGFzc2lnbnMvb3ZlcnJpZGVzIG9uZSBjb29raWUgdmFsdWUsIGJ1dCBkb2VzXG4gIC8vIG5vdCBjbGVhciBvdGhlciBjb29raWVzLlxuICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJBbmltYXRpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgKDxhbnk+RWxlbWVudCkucHJvdG90eXBlWydhbmltYXRlJ10gPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTdHlsZShlbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlPzogc3RyaW5nfG51bGwpOiBib29sZWFuIHtcbiAgY29uc3QgdmFsdWUgPSBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gfHwgJyc7XG4gIHJldHVybiBzdHlsZVZhbHVlID8gdmFsdWUgPT0gc3R5bGVWYWx1ZSA6IHZhbHVlLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkQ2xhc3NMaXN0KGVsZW1lbnQ6IGFueSk6IGFueVtdIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0LCAwKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShodG1sOiBhbnkpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHQgPSBnZXRET00oKS5nZXREZWZhdWx0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICB0LmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGROb2Rlc0FzTGlzdChlbDogTm9kZSk6IGFueVtdIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGVsLmNoaWxkTm9kZXM7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXNbaV0gPSBjaGlsZE5vZGVzW2ldO1xuICB9XG4gIHJldHVybiByZXM7XG59XG4iXX0=