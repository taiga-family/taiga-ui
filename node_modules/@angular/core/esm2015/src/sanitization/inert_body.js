/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/sanitization/inert_body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This helper class is used to get hold of an inert tree of DOM elements containing dirty HTML
 * that needs sanitizing.
 * Depending upon browser support we must use one of three strategies for doing this.
 * Support: Safari 10.x -> XHR strategy
 * Support: Firefox -> DomParser strategy
 * Default: InertDocument strategy
 */
export class InertBodyHelper {
    /**
     * @param {?} defaultDoc
     */
    constructor(defaultDoc) {
        this.defaultDoc = defaultDoc;
        this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert');
        /** @type {?} */
        let inertBodyElement = this.inertDocument.body;
        if (inertBodyElement == null) {
            // usually there should be only one body element in the document, but IE doesn't have any, so
            // we need to create one.
            /** @type {?} */
            const inertHtml = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(inertHtml);
            inertBodyElement = this.inertDocument.createElement('body');
            inertHtml.appendChild(inertBodyElement);
        }
        inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>';
        if (inertBodyElement.querySelector && !inertBodyElement.querySelector('svg')) {
            // We just hit the Safari 10.1 bug - which allows JS to run inside the SVG G element
            // so use the XHR strategy.
            this.getInertBodyElement = this.getInertBodyElement_XHR;
            return;
        }
        inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';
        if (inertBodyElement.querySelector && inertBodyElement.querySelector('svg img')) {
            // We just hit the Firefox bug - which prevents the inner img JS from being sanitized
            // so use the DOMParser strategy, if it is available.
            // If the DOMParser is not available then we are not in Firefox (Server/WebWorker?) so we
            // fall through to the default strategy below.
            if (isDOMParserAvailable()) {
                this.getInertBodyElement = this.getInertBodyElement_DOMParser;
                return;
            }
        }
        // None of the bugs were hit so it is safe for us to use the default InertDocument strategy
        this.getInertBodyElement = this.getInertBodyElement_InertDocument;
    }
    /**
     * Use XHR to create and fill an inert body element (on Safari 10.1)
     * See
     * https://github.com/cure53/DOMPurify/blob/a992d3a75031cb8bb032e5ea8399ba972bdf9a65/src/purify.js#L439-L449
     * @private
     * @param {?} html
     * @return {?}
     */
    getInertBodyElement_XHR(html) {
        // We add these extra elements to ensure that the rest of the content is parsed as expected
        // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
        // `<head>` tag.
        html = '<body><remove></remove>' + html + '</body>';
        try {
            html = encodeURI(html);
        }
        catch (_a) {
            return null;
        }
        /** @type {?} */
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'document';
        xhr.open('GET', 'data:text/html;charset=utf-8,' + html, false);
        xhr.send(undefined);
        /** @type {?} */
        const body = xhr.response.body;
        body.removeChild((/** @type {?} */ (body.firstChild)));
        return body;
    }
    /**
     * Use DOMParser to create and fill an inert body element (on Firefox)
     * See https://github.com/cure53/DOMPurify/releases/tag/0.6.7
     *
     * @private
     * @param {?} html
     * @return {?}
     */
    getInertBodyElement_DOMParser(html) {
        // We add these extra elements to ensure that the rest of the content is parsed as expected
        // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
        // `<head>` tag.
        html = '<body><remove></remove>' + html + '</body>';
        try {
            /** @type {?} */
            const body = (/** @type {?} */ (new ((/** @type {?} */ (window))).DOMParser().parseFromString(html, 'text/html').body));
            body.removeChild((/** @type {?} */ (body.firstChild)));
            return body;
        }
        catch (_a) {
            return null;
        }
    }
    /**
     * Use an HTML5 `template` element, if supported, or an inert body element created via
     * `createHtmlDocument` to create and fill an inert DOM element.
     * This is the default sane strategy to use if the browser does not require one of the specialised
     * strategies above.
     * @private
     * @param {?} html
     * @return {?}
     */
    getInertBodyElement_InertDocument(html) {
        // Prefer using <template> element if supported.
        /** @type {?} */
        const templateEl = this.inertDocument.createElement('template');
        if ('content' in templateEl) {
            templateEl.innerHTML = html;
            return templateEl;
        }
        // Note that previously we used to do something like `this.inertDocument.body.innerHTML = html`
        // and we returned the inert `body` node. This was changed, because IE seems to treat setting
        // `innerHTML` on an inserted element differently, compared to one that hasn't been inserted
        // yet. In particular, IE appears to split some of the text into multiple text nodes rather
        // than keeping them in a single one which ends up messing with Ivy's i18n parsing further
        // down the line. This has been worked around by creating a new inert `body` and using it as
        // the root node in which we insert the HTML.
        /** @type {?} */
        const inertBody = this.inertDocument.createElement('body');
        inertBody.innerHTML = html;
        // Support: IE 9-11 only
        // strip custom-namespaced attributes on IE<=11
        if (((/** @type {?} */ (this.defaultDoc))).documentMode) {
            this.stripCustomNsAttrs(inertBody);
        }
        return inertBody;
    }
    /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g.
     * 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     * @private
     * @param {?} el
     * @return {?}
     */
    stripCustomNsAttrs(el) {
        /** @type {?} */
        const elAttrs = el.attributes;
        // loop backwards so that we can support removals.
        for (let i = elAttrs.length - 1; 0 < i; i--) {
            /** @type {?} */
            const attrib = elAttrs.item(i);
            /** @type {?} */
            const attrName = (/** @type {?} */ (attrib)).name;
            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                el.removeAttribute(attrName);
            }
        }
        /** @type {?} */
        let childNode = (/** @type {?} */ (el.firstChild));
        while (childNode) {
            if (childNode.nodeType === Node.ELEMENT_NODE)
                this.stripCustomNsAttrs((/** @type {?} */ (childNode)));
            childNode = childNode.nextSibling;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InertBodyHelper.prototype.inertDocument;
    /**
     * Get an inert DOM element containing DOM created from the dirty HTML string provided.
     * The implementation of this is determined in the constructor, when the class is instantiated.
     * @type {?}
     */
    InertBodyHelper.prototype.getInertBodyElement;
    /**
     * @type {?}
     * @private
     */
    InertBodyHelper.prototype.defaultDoc;
}
/**
 * We need to determine whether the DOMParser exists in the global context.
 * The try-catch is because, on some browsers, trying to access this property
 * on window can actually throw an error.
 *
 * @suppress {uselessCode}
 * @return {?}
 */
function isDOMParserAvailable() {
    try {
        return !!((/** @type {?} */ (window))).DOMParser;
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5lcnRfYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi9pbmVydF9ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQU0sT0FBTyxlQUFlOzs7O0lBRzFCLFlBQW9CLFVBQW9CO1FBQXBCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztZQUN6RixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7UUFFOUMsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7Ozs7a0JBR3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLHNEQUFzRCxDQUFDO1FBQ3BGLElBQUksZ0JBQWdCLENBQUMsYUFBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVFLG9GQUFvRjtZQUNwRiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUN4RCxPQUFPO1NBQ1I7UUFFRCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsa0VBQWtFLENBQUM7UUFDaEcsSUFBSSxnQkFBZ0IsQ0FBQyxhQUFh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QyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O2tCQUN4QixRQUFRLEdBQUcsbUJBQUEsTUFBTSxFQUFDLENBQUMsSUFBSTtZQUM3QixJQUFJLFFBQVEsS0FBSyxXQUFXLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELEVBQUUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7U0FDRjs7WUFDRyxTQUFTLEdBQUcsbUJBQUEsRUFBRSxDQUFDLFVBQVUsRUFBZTtRQUM1QyxPQUFPLFNBQVMsRUFBRTtZQUNoQixJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVk7Z0JBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFBLFNBQVMsRUFBVyxDQUFDLENBQUM7WUFDNUYsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDbkM7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWxKQyx3Q0FBZ0M7Ozs7OztJQTJDaEMsOENBQTBEOzs7OztJQXpDOUMscUNBQTRCOzs7Ozs7Ozs7O0FBeUoxQyxTQUFTLG9CQUFvQjtJQUMzQixJQUFJO1FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztLQUNwQztJQUFDLFdBQU07UUFDTixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBUaGlzIGhlbHBlciBjbGFzcyBpcyB1c2VkIHRvIGdldCBob2xkIG9mIGFuIGluZXJ0IHRyZWUgb2YgRE9NIGVsZW1lbnRzIGNvbnRhaW5pbmcgZGlydHkgSFRNTFxuICogdGhhdCBuZWVkcyBzYW5pdGl6aW5nLlxuICogRGVwZW5kaW5nIHVwb24gYnJvd3NlciBzdXBwb3J0IHdlIG11c3QgdXNlIG9uZSBvZiB0aHJlZSBzdHJhdGVnaWVzIGZvciBkb2luZyB0aGlzLlxuICogU3VwcG9ydDogU2FmYXJpIDEwLnggLT4gWEhSIHN0cmF0ZWd5XG4gKiBTdXBwb3J0OiBGaXJlZm94IC0+IERvbVBhcnNlciBzdHJhdGVneVxuICogRGVmYXVsdDogSW5lcnREb2N1bWVudCBzdHJhdGVneVxuICovXG5leHBvcnQgY2xhc3MgSW5lcnRCb2R5SGVscGVyIHtcbiAgcHJpdmF0ZSBpbmVydERvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZmF1bHREb2M6IERvY3VtZW50KSB7XG4gICAgdGhpcy5pbmVydERvY3VtZW50ID0gdGhpcy5kZWZhdWx0RG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnc2FuaXRpemF0aW9uLWluZXJ0Jyk7XG4gICAgbGV0IGluZXJ0Qm9keUVsZW1lbnQgPSB0aGlzLmluZXJ0RG9jdW1lbnQuYm9keTtcblxuICAgIGlmIChpbmVydEJvZHlFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIC8vIHVzdWFsbHkgdGhlcmUgc2hvdWxkIGJlIG9ubHkgb25lIGJvZHkgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnQsIGJ1dCBJRSBkb2Vzbid0IGhhdmUgYW55LCBzb1xuICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgb25lLlxuICAgICAgY29uc3QgaW5lcnRIdG1sID0gdGhpcy5pbmVydERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgIHRoaXMuaW5lcnREb2N1bWVudC5hcHBlbmRDaGlsZChpbmVydEh0bWwpO1xuICAgICAgaW5lcnRCb2R5RWxlbWVudCA9IHRoaXMuaW5lcnREb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgICBpbmVydEh0bWwuYXBwZW5kQ2hpbGQoaW5lcnRCb2R5RWxlbWVudCk7XG4gICAgfVxuXG4gICAgaW5lcnRCb2R5RWxlbWVudC5pbm5lckhUTUwgPSAnPHN2Zz48ZyBvbmxvYWQ9XCJ0aGlzLnBhcmVudE5vZGUucmVtb3ZlKClcIj48L2c+PC9zdmc+JztcbiAgICBpZiAoaW5lcnRCb2R5RWxlbWVudC5xdWVyeVNlbGVjdG9yICYmICFpbmVydEJvZHlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpKSB7XG4gICAgICAvLyBXZSBqdXN0IGhpdCB0aGUgU2FmYXJpIDEwLjEgYnVnIC0gd2hpY2ggYWxsb3dzIEpTIHRvIHJ1biBpbnNpZGUgdGhlIFNWRyBHIGVsZW1lbnRcbiAgICAgIC8vIHNvIHVzZSB0aGUgWEhSIHN0cmF0ZWd5LlxuICAgICAgdGhpcy5nZXRJbmVydEJvZHlFbGVtZW50ID0gdGhpcy5nZXRJbmVydEJvZHlFbGVtZW50X1hIUjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbmVydEJvZHlFbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnPjxwPjxzdHlsZT48aW1nIHNyYz1cIjwvc3R5bGU+PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpLy9cIj4nO1xuICAgIGlmIChpbmVydEJvZHlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IgJiYgaW5lcnRCb2R5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgaW1nJykpIHtcbiAgICAgIC8vIFdlIGp1c3QgaGl0IHRoZSBGaXJlZm94IGJ1ZyAtIHdoaWNoIHByZXZlbnRzIHRoZSBpbm5lciBpbWcgSlMgZnJvbSBiZWluZyBzYW5pdGl6ZWRcbiAgICAgIC8vIHNvIHVzZSB0aGUgRE9NUGFyc2VyIHN0cmF0ZWd5LCBpZiBpdCBpcyBhdmFpbGFibGUuXG4gICAgICAvLyBJZiB0aGUgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgdGhlbiB3ZSBhcmUgbm90IGluIEZpcmVmb3ggKFNlcnZlci9XZWJXb3JrZXI/KSBzbyB3ZVxuICAgICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkZWZhdWx0IHN0cmF0ZWd5IGJlbG93LlxuICAgICAgaWYgKGlzRE9NUGFyc2VyQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5nZXRJbmVydEJvZHlFbGVtZW50ID0gdGhpcy5nZXRJbmVydEJvZHlFbGVtZW50X0RPTVBhcnNlcjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vbmUgb2YgdGhlIGJ1Z3Mgd2VyZSBoaXQgc28gaXQgaXMgc2FmZSBmb3IgdXMgdG8gdXNlIHRoZSBkZWZhdWx0IEluZXJ0RG9jdW1lbnQgc3RyYXRlZ3lcbiAgICB0aGlzLmdldEluZXJ0Qm9keUVsZW1lbnQgPSB0aGlzLmdldEluZXJ0Qm9keUVsZW1lbnRfSW5lcnREb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5lcnQgRE9NIGVsZW1lbnQgY29udGFpbmluZyBET00gY3JlYXRlZCBmcm9tIHRoZSBkaXJ0eSBIVE1MIHN0cmluZyBwcm92aWRlZC5cbiAgICogVGhlIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgaXMgZGV0ZXJtaW5lZCBpbiB0aGUgY29uc3RydWN0b3IsIHdoZW4gdGhlIGNsYXNzIGlzIGluc3RhbnRpYXRlZC5cbiAgICovXG4gIGdldEluZXJ0Qm9keUVsZW1lbnQ6IChodG1sOiBzdHJpbmcpID0+IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAvKipcbiAgICogVXNlIFhIUiB0byBjcmVhdGUgYW5kIGZpbGwgYW4gaW5lcnQgYm9keSBlbGVtZW50IChvbiBTYWZhcmkgMTAuMSlcbiAgICogU2VlXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvYTk5MmQzYTc1MDMxY2I4YmIwMzJlNWVhODM5OWJhOTcyYmRmOWE2NS9zcmMvcHVyaWZ5LmpzI0w0MzktTDQ0OVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbmVydEJvZHlFbGVtZW50X1hIUihodG1sOiBzdHJpbmcpIHtcbiAgICAvLyBXZSBhZGQgdGhlc2UgZXh0cmEgZWxlbWVudHMgdG8gZW5zdXJlIHRoYXQgdGhlIHJlc3Qgb2YgdGhlIGNvbnRlbnQgaXMgcGFyc2VkIGFzIGV4cGVjdGVkXG4gICAgLy8gZS5nLiBsZWFkaW5nIHdoaXRlc3BhY2UgaXMgbWFpbnRhaW5lZCBhbmQgdGFncyBsaWtlIGA8bWV0YT5gIGRvIG5vdCBnZXQgaG9pc3RlZCB0byB0aGVcbiAgICAvLyBgPGhlYWQ+YCB0YWcuXG4gICAgaHRtbCA9ICc8Ym9keT48cmVtb3ZlPjwvcmVtb3ZlPicgKyBodG1sICsgJzwvYm9keT4nO1xuICAgIHRyeSB7XG4gICAgICBodG1sID0gZW5jb2RlVVJJKGh0bWwpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnZG9jdW1lbnQnO1xuICAgIHhoci5vcGVuKCdHRVQnLCAnZGF0YTp0ZXh0L2h0bWw7Y2hhcnNldD11dGYtOCwnICsgaHRtbCwgZmFsc2UpO1xuICAgIHhoci5zZW5kKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgYm9keTogSFRNTEJvZHlFbGVtZW50ID0geGhyLnJlc3BvbnNlLmJvZHk7XG4gICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQhKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgRE9NUGFyc2VyIHRvIGNyZWF0ZSBhbmQgZmlsbCBhbiBpbmVydCBib2R5IGVsZW1lbnQgKG9uIEZpcmVmb3gpXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY3VyZTUzL0RPTVB1cmlmeS9yZWxlYXNlcy90YWcvMC42LjdcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5lcnRCb2R5RWxlbWVudF9ET01QYXJzZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgLy8gV2UgYWRkIHRoZXNlIGV4dHJhIGVsZW1lbnRzIHRvIGVuc3VyZSB0aGF0IHRoZSByZXN0IG9mIHRoZSBjb250ZW50IGlzIHBhcnNlZCBhcyBleHBlY3RlZFxuICAgIC8vIGUuZy4gbGVhZGluZyB3aGl0ZXNwYWNlIGlzIG1haW50YWluZWQgYW5kIHRhZ3MgbGlrZSBgPG1ldGE+YCBkbyBub3QgZ2V0IGhvaXN0ZWQgdG8gdGhlXG4gICAgLy8gYDxoZWFkPmAgdGFnLlxuICAgIGh0bWwgPSAnPGJvZHk+PHJlbW92ZT48L3JlbW92ZT4nICsgaHRtbCArICc8L2JvZHk+JztcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IG5ldyAod2luZG93IGFzIGFueSkuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5IGFzXG4gICAgICAgICAgSFRNTEJvZHlFbGVtZW50O1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQhKTtcbiAgICAgIHJldHVybiBib2R5O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSBhbiBIVE1MNSBgdGVtcGxhdGVgIGVsZW1lbnQsIGlmIHN1cHBvcnRlZCwgb3IgYW4gaW5lcnQgYm9keSBlbGVtZW50IGNyZWF0ZWQgdmlhXG4gICAqIGBjcmVhdGVIdG1sRG9jdW1lbnRgIHRvIGNyZWF0ZSBhbmQgZmlsbCBhbiBpbmVydCBET00gZWxlbWVudC5cbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBzYW5lIHN0cmF0ZWd5IHRvIHVzZSBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCByZXF1aXJlIG9uZSBvZiB0aGUgc3BlY2lhbGlzZWRcbiAgICogc3RyYXRlZ2llcyBhYm92ZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0SW5lcnRCb2R5RWxlbWVudF9JbmVydERvY3VtZW50KGh0bWw6IHN0cmluZykge1xuICAgIC8vIFByZWZlciB1c2luZyA8dGVtcGxhdGU+IGVsZW1lbnQgaWYgc3VwcG9ydGVkLlxuICAgIGNvbnN0IHRlbXBsYXRlRWwgPSB0aGlzLmluZXJ0RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBpZiAoJ2NvbnRlbnQnIGluIHRlbXBsYXRlRWwpIHtcbiAgICAgIHRlbXBsYXRlRWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZUVsO1xuICAgIH1cblxuICAgIC8vIE5vdGUgdGhhdCBwcmV2aW91c2x5IHdlIHVzZWQgdG8gZG8gc29tZXRoaW5nIGxpa2UgYHRoaXMuaW5lcnREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGh0bWxgXG4gICAgLy8gYW5kIHdlIHJldHVybmVkIHRoZSBpbmVydCBgYm9keWAgbm9kZS4gVGhpcyB3YXMgY2hhbmdlZCwgYmVjYXVzZSBJRSBzZWVtcyB0byB0cmVhdCBzZXR0aW5nXG4gICAgLy8gYGlubmVySFRNTGAgb24gYW4gaW5zZXJ0ZWQgZWxlbWVudCBkaWZmZXJlbnRseSwgY29tcGFyZWQgdG8gb25lIHRoYXQgaGFzbid0IGJlZW4gaW5zZXJ0ZWRcbiAgICAvLyB5ZXQuIEluIHBhcnRpY3VsYXIsIElFIGFwcGVhcnMgdG8gc3BsaXQgc29tZSBvZiB0aGUgdGV4dCBpbnRvIG11bHRpcGxlIHRleHQgbm9kZXMgcmF0aGVyXG4gICAgLy8gdGhhbiBrZWVwaW5nIHRoZW0gaW4gYSBzaW5nbGUgb25lIHdoaWNoIGVuZHMgdXAgbWVzc2luZyB3aXRoIEl2eSdzIGkxOG4gcGFyc2luZyBmdXJ0aGVyXG4gICAgLy8gZG93biB0aGUgbGluZS4gVGhpcyBoYXMgYmVlbiB3b3JrZWQgYXJvdW5kIGJ5IGNyZWF0aW5nIGEgbmV3IGluZXJ0IGBib2R5YCBhbmQgdXNpbmcgaXQgYXNcbiAgICAvLyB0aGUgcm9vdCBub2RlIGluIHdoaWNoIHdlIGluc2VydCB0aGUgSFRNTC5cbiAgICBjb25zdCBpbmVydEJvZHkgPSB0aGlzLmluZXJ0RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgIGluZXJ0Qm9keS5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgLy8gU3VwcG9ydDogSUUgOS0xMSBvbmx5XG4gICAgLy8gc3RyaXAgY3VzdG9tLW5hbWVzcGFjZWQgYXR0cmlidXRlcyBvbiBJRTw9MTFcbiAgICBpZiAoKHRoaXMuZGVmYXVsdERvYyBhcyBhbnkpLmRvY3VtZW50TW9kZSkge1xuICAgICAgdGhpcy5zdHJpcEN1c3RvbU5zQXR0cnMoaW5lcnRCb2R5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5lcnRCb2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gSUU5LTExIGNvbWVzIGFjcm9zcyBhbiB1bmtub3duIG5hbWVzcGFjZWQgYXR0cmlidXRlIGUuZy4gJ3hsaW5rOmZvbycgaXQgYWRkcyAneG1sbnM6bnMxJ1xuICAgKiBhdHRyaWJ1dGUgdG8gZGVjbGFyZSBuczEgbmFtZXNwYWNlIGFuZCBwcmVmaXhlcyB0aGUgYXR0cmlidXRlIHdpdGggJ25zMScgKGUuZy5cbiAgICogJ25zMTp4bGluazpmb28nKS5cbiAgICpcbiAgICogVGhpcyBpcyB1bmRlc2lyYWJsZSBzaW5jZSB3ZSBkb24ndCB3YW50IHRvIGFsbG93IGFueSBvZiB0aGVzZSBjdXN0b20gYXR0cmlidXRlcy4gVGhpcyBtZXRob2RcbiAgICogc3RyaXBzIHRoZW0gYWxsLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHJpcEN1c3RvbU5zQXR0cnMoZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBlbEF0dHJzID0gZWwuYXR0cmlidXRlcztcbiAgICAvLyBsb29wIGJhY2t3YXJkcyBzbyB0aGF0IHdlIGNhbiBzdXBwb3J0IHJlbW92YWxzLlxuICAgIGZvciAobGV0IGkgPSBlbEF0dHJzLmxlbmd0aCAtIDE7IDAgPCBpOyBpLS0pIHtcbiAgICAgIGNvbnN0IGF0dHJpYiA9IGVsQXR0cnMuaXRlbShpKTtcbiAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cmliIS5uYW1lO1xuICAgICAgaWYgKGF0dHJOYW1lID09PSAneG1sbnM6bnMxJyB8fCBhdHRyTmFtZS5pbmRleE9mKCduczE6JykgPT09IDApIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNoaWxkTm9kZSA9IGVsLmZpcnN0Q2hpbGQgYXMgTm9kZSB8IG51bGw7XG4gICAgd2hpbGUgKGNoaWxkTm9kZSkge1xuICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHRoaXMuc3RyaXBDdXN0b21Oc0F0dHJzKGNoaWxkTm9kZSBhcyBFbGVtZW50KTtcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBET01QYXJzZXIgZXhpc3RzIGluIHRoZSBnbG9iYWwgY29udGV4dC5cbiAqIFRoZSB0cnktY2F0Y2ggaXMgYmVjYXVzZSwgb24gc29tZSBicm93c2VycywgdHJ5aW5nIHRvIGFjY2VzcyB0aGlzIHByb3BlcnR5XG4gKiBvbiB3aW5kb3cgY2FuIGFjdHVhbGx5IHRocm93IGFuIGVycm9yLlxuICpcbiAqIEBzdXBwcmVzcyB7dXNlbGVzc0NvZGV9XG4gKi9cbmZ1bmN0aW9uIGlzRE9NUGFyc2VyQXZhaWxhYmxlKCkge1xuICB0cnkge1xuICAgIHJldHVybiAhISh3aW5kb3cgYXMgYW55KS5ET01QYXJzZXI7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19