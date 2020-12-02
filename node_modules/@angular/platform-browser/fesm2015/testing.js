/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵglobal, NgZone, PLATFORM_INITIALIZER, createPlatformFactory, platformCore, NgModule, APP_ID } from '@angular/core';
import { ɵBrowserDomAdapter, BrowserModule, ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { ɵgetDOM } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/src/browser_util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BrowserDetection {
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
        return ɵgetDOM() ? ɵgetDOM().getUserAgent() : '';
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
        return !!((/** @type {?} */ (ɵglobal))).Intl && ((/** @type {?} */ (ɵglobal))).Intl !== ((/** @type {?} */ (ɵglobal))).IntlPolyfill;
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
        return (typeof ((/** @type {?} */ (ɵglobal))).customElements !== 'undefined');
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
const browserDetection = BrowserDetection.setup();
/**
 * @param {?} element
 * @param {?} eventType
 * @return {?}
 */
function dispatchEvent(element, eventType) {
    /** @type {?} */
    const evt = ɵgetDOM().getDefaultDocument().createEvent('Event');
    evt.initEvent(eventType, true, true);
    ɵgetDOM().dispatchEvent(element, evt);
}
/**
 * @param {?} eventType
 * @return {?}
 */
function createMouseEvent(eventType) {
    /** @type {?} */
    const evt = ɵgetDOM().getDefaultDocument().createEvent('MouseEvent');
    evt.initEvent(eventType, true, true);
    return evt;
}
/**
 * @param {?} html
 * @return {?}
 */
function el(html) {
    return (/** @type {?} */ (getContent(createTemplate(html)).firstChild));
}
/**
 * @param {?} css
 * @return {?}
 */
function normalizeCSS(css) {
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
function stringifyElement(el /** TODO #9100 */) {
    /** @type {?} */
    let result = '';
    if (ɵgetDOM().isElementNode(el)) {
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
function createNgZone() {
    return new NgZone({ enableLongStackTrace: true, shouldCoalesceEventChangeDetection: false });
}
/**
 * @param {?} node
 * @return {?}
 */
function isCommentNode(node) {
    return node.nodeType === Node.COMMENT_NODE;
}
/**
 * @param {?} node
 * @return {?}
 */
function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
/**
 * @param {?} node
 * @return {?}
 */
function getContent(node) {
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
function templateAwareRoot(el) {
    return ɵgetDOM().isElementNode(el) && el.nodeName === 'TEMPLATE' ? getContent(el) : el;
}
/**
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
function setCookie(name, value) {
    // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
    // not clear other cookies.
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}
/**
 * @return {?}
 */
function supportsWebAnimation() {
    return typeof ((/** @type {?} */ (Element))).prototype['animate'] === 'function';
}
/**
 * @param {?} element
 * @param {?} styleName
 * @param {?=} styleValue
 * @return {?}
 */
function hasStyle(element, styleName, styleValue) {
    /** @type {?} */
    const value = element.style[styleName] || '';
    return styleValue ? value == styleValue : value.length > 0;
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function hasClass(element, className) {
    return element.classList.contains(className);
}
/**
 * @param {?} element
 * @return {?}
 */
function sortedClassList(element) {
    return Array.prototype.slice.call(element.classList, 0).sort();
}
/**
 * @param {?} html
 * @return {?}
 */
function createTemplate(html) {
    /** @type {?} */
    const t = ɵgetDOM().getDefaultDocument().createElement('template');
    t.innerHTML = html;
    return t;
}
/**
 * @param {?} el
 * @return {?}
 */
function childNodesAsList(el) {
    /** @type {?} */
    const childNodes = el.childNodes;
    /** @type {?} */
    const res = [];
    for (let i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/src/browser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initBrowserTests() {
    ɵBrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
/** @type {?} */
const _TEST_BROWSER_PLATFORM_PROVIDERS = [{ provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }];
/**
 * Platform for testing
 *
 * \@publicApi
 * @type {?}
 */
const platformBrowserTesting = createPlatformFactory(platformCore, 'browserTesting', _TEST_BROWSER_PLATFORM_PROVIDERS);
const ɵ0 = createNgZone;
/**
 * NgModule for testing.
 *
 * \@publicApi
 */
class BrowserTestingModule {
}
BrowserTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                providers: [
                    { provide: APP_ID, useValue: 'a' },
                    ɵELEMENT_PROBE_PROVIDERS,
                    { provide: NgZone, useFactory: ɵ0 },
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/src/testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BrowserTestingModule, platformBrowserTesting, createNgZone as ɵangular_packages_platform_browser_testing_testing_a };
//# sourceMappingURL=testing.js.map
