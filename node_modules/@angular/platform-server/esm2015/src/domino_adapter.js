/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/domino_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const domino = require('domino');
import { ɵBrowserDomAdapter as BrowserDomAdapter } from '@angular/platform-browser';
import { ɵsetRootDomAdapter as setRootDomAdapter } from '@angular/common';
/**
 * @param {?} methodName
 * @return {?}
 */
function _notImplemented(methodName) {
    return new Error('This method is not implemented in DominoAdapter: ' + methodName);
}
/**
 * @return {?}
 */
function setDomTypes() {
    // Make all Domino types available as types in the global env.
    Object.assign(global, domino.impl);
    ((/** @type {?} */ (global)))['KeyboardEvent'] = domino.impl.Event;
}
/**
 * Parses a document string to a Document object.
 * @param {?} html
 * @param {?=} url
 * @return {?}
 */
export function parseDocument(html, url = '/') {
    /** @type {?} */
    let window = domino.createWindow(html, url);
    /** @type {?} */
    let doc = window.document;
    return doc;
}
/**
 * Serializes a document to string.
 * @param {?} doc
 * @return {?}
 */
export function serializeDocument(doc) {
    return ((/** @type {?} */ (doc))).serialize();
}
/**
 * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
 */
export class DominoAdapter extends BrowserDomAdapter {
    /**
     * @return {?}
     */
    static makeCurrent() {
        setDomTypes();
        setRootDomAdapter(new DominoAdapter());
    }
    /**
     * @param {?} error
     * @return {?}
     */
    log(error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    logGroup(error) {
        console.error(error);
    }
    /**
     * @return {?}
     */
    logGroupEnd() { }
    /**
     * @return {?}
     */
    supportsDOMEvents() {
        return false;
    }
    /**
     * @return {?}
     */
    createHtmlDocument() {
        return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>');
    }
    /**
     * @return {?}
     */
    getDefaultDocument() {
        if (!DominoAdapter.defaultDoc) {
            DominoAdapter.defaultDoc = domino.createDocument();
        }
        return DominoAdapter.defaultDoc;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isElementNode(node) {
        return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isShadowRoot(node) {
        return node.shadowRoot == node;
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    getProperty(el, name) {
        if (name === 'href') {
            // Domino tries to resolve href-s which we do not want. Just return the
            // attribute value.
            return el.getAttribute('href');
        }
        else if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            return el.textContent;
        }
        return ((/** @type {?} */ (el)))[name];
    }
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    getGlobalEventTarget(doc, target) {
        if (target === 'window') {
            return doc.defaultView;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    }
    /**
     * @param {?} doc
     * @return {?}
     */
    getBaseHref(doc) {
        /** @type {?} */
        const base = (/** @type {?} */ (doc.documentElement)).querySelector('base');
        /** @type {?} */
        let href = '';
        if (base) {
            href = (/** @type {?} */ (base.getAttribute('href')));
        }
        // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
        return href;
    }
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    dispatchEvent(el, evt) {
        el.dispatchEvent(evt);
        // Dispatch the event to the window also.
        /** @type {?} */
        const doc = el.ownerDocument || el;
        /** @type {?} */
        const win = ((/** @type {?} */ (doc))).defaultView;
        if (win) {
            win.dispatchEvent(evt);
        }
    }
    /**
     * @return {?}
     */
    getHistory() {
        throw _notImplemented('getHistory');
    }
    /**
     * @return {?}
     */
    getLocation() {
        throw _notImplemented('getLocation');
    }
    /**
     * @return {?}
     */
    getUserAgent() {
        return 'Fake user agent';
    }
    /**
     * @return {?}
     */
    performanceNow() {
        return Date.now();
    }
    /**
     * @return {?}
     */
    supportsCookies() {
        return false;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getCookie(name) {
        throw _notImplemented('getCookie');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DominoAdapter.defaultDoc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9taW5vX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL2RvbWlub19hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFPTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUVoQyxPQUFPLEVBQUMsa0JBQWtCLElBQUksaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRixPQUFPLEVBQUMsa0JBQWtCLElBQUksaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFeEUsU0FBUyxlQUFlLENBQUMsVUFBa0I7SUFDekMsT0FBTyxJQUFJLEtBQUssQ0FBQyxtREFBbUQsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUNyRixDQUFDOzs7O0FBRUQsU0FBUyxXQUFXO0lBQ2xCLDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZELENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVksRUFBRSxHQUFHLEdBQUcsR0FBRzs7UUFDL0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzs7UUFDdkMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRO0lBQ3pCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQWE7SUFDN0MsT0FBTyxDQUFDLG1CQUFBLEdBQUcsRUFBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsQ0FBQzs7OztBQUtELE1BQU0sT0FBTyxh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Q3hCO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixNQUFNLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE1BQU0sZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDRCxZQUFZO1FBQ1YsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUNELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE1BQU0sZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjs7Ozs7O0lBckdDLHlCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmNvbnN0IGRvbWlubyA9IHJlcXVpcmUoJ2RvbWlubycpO1xuXG5pbXBvcnQge8m1QnJvd3NlckRvbUFkYXB0ZXIgYXMgQnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHvJtXNldFJvb3REb21BZGFwdGVyIGFzIHNldFJvb3REb21BZGFwdGVyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5mdW5jdGlvbiBfbm90SW1wbGVtZW50ZWQobWV0aG9kTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoJ1RoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBEb21pbm9BZGFwdGVyOiAnICsgbWV0aG9kTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldERvbVR5cGVzKCkge1xuICAvLyBNYWtlIGFsbCBEb21pbm8gdHlwZXMgYXZhaWxhYmxlIGFzIHR5cGVzIGluIHRoZSBnbG9iYWwgZW52LlxuICBPYmplY3QuYXNzaWduKGdsb2JhbCwgZG9taW5vLmltcGwpO1xuICAoZ2xvYmFsIGFzIGFueSlbJ0tleWJvYXJkRXZlbnQnXSA9IGRvbWluby5pbXBsLkV2ZW50O1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGRvY3VtZW50IHN0cmluZyB0byBhIERvY3VtZW50IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoaHRtbDogc3RyaW5nLCB1cmwgPSAnLycpIHtcbiAgbGV0IHdpbmRvdyA9IGRvbWluby5jcmVhdGVXaW5kb3coaHRtbCwgdXJsKTtcbiAgbGV0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbiAgcmV0dXJuIGRvYztcbn1cblxuLyoqXG4gKiBTZXJpYWxpemVzIGEgZG9jdW1lbnQgdG8gc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplRG9jdW1lbnQoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB7XG4gIHJldHVybiAoZG9jIGFzIGFueSkuc2VyaWFsaXplKCk7XG59XG5cbi8qKlxuICogRE9NIEFkYXB0ZXIgZm9yIHRoZSBzZXJ2ZXIgcGxhdGZvcm0gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2ZnbmFzcy9kb21pbm8uXG4gKi9cbmV4cG9ydCBjbGFzcyBEb21pbm9BZGFwdGVyIGV4dGVuZHMgQnJvd3NlckRvbUFkYXB0ZXIge1xuICBzdGF0aWMgbWFrZUN1cnJlbnQoKSB7XG4gICAgc2V0RG9tVHlwZXMoKTtcbiAgICBzZXRSb290RG9tQWRhcHRlcihuZXcgRG9taW5vQWRhcHRlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRlZmF1bHREb2M6IERvY3VtZW50O1xuXG4gIGxvZyhlcnJvcjogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cblxuICBsb2dHcm91cChlcnJvcjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICBsb2dHcm91cEVuZCgpIHt9XG5cbiAgc3VwcG9ydHNET01FdmVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlSHRtbERvY3VtZW50KCk6IEhUTUxEb2N1bWVudCB7XG4gICAgcmV0dXJuIHBhcnNlRG9jdW1lbnQoJzxodG1sPjxoZWFkPjx0aXRsZT5mYWtlVGl0bGU8L3RpdGxlPjwvaGVhZD48Ym9keT48L2JvZHk+PC9odG1sPicpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdERvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICBpZiAoIURvbWlub0FkYXB0ZXIuZGVmYXVsdERvYykge1xuICAgICAgRG9taW5vQWRhcHRlci5kZWZhdWx0RG9jID0gZG9taW5vLmNyZWF0ZURvY3VtZW50KCk7XG4gICAgfVxuICAgIHJldHVybiBEb21pbm9BZGFwdGVyLmRlZmF1bHREb2M7XG4gIH1cblxuICBpc0VsZW1lbnROb2RlKG5vZGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBub2RlID8gbm9kZS5ub2RlVHlwZSA9PT0gRG9taW5vQWRhcHRlci5kZWZhdWx0RG9jLkVMRU1FTlRfTk9ERSA6IGZhbHNlO1xuICB9XG4gIGlzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbm9kZS5zaGFkb3dSb290ID09IG5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAobmFtZSA9PT0gJ2hyZWYnKSB7XG4gICAgICAvLyBEb21pbm8gdHJpZXMgdG8gcmVzb2x2ZSBocmVmLXMgd2hpY2ggd2UgZG8gbm90IHdhbnQuIEp1c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlLlxuICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2lubmVyVGV4dCcpIHtcbiAgICAgIC8vIERvbWlubyBkb2VzIG5vdCBzdXBwb3J0IGlubmVyVGV4dC4gSnVzdCBtYXAgaXQgdG8gdGV4dENvbnRlbnQuXG4gICAgICByZXR1cm4gZWwudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiAoPGFueT5lbClbbmFtZV07XG4gIH1cblxuICBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IEV2ZW50VGFyZ2V0fG51bGwge1xuICAgIGlmICh0YXJnZXQgPT09ICd3aW5kb3cnKSB7XG4gICAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICByZXR1cm4gZG9jO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAnYm9keScpIHtcbiAgICAgIHJldHVybiBkb2MuYm9keTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRCYXNlSHJlZihkb2M6IERvY3VtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlID0gZG9jLmRvY3VtZW50RWxlbWVudCEucXVlcnlTZWxlY3RvcignYmFzZScpO1xuICAgIGxldCBocmVmID0gJyc7XG4gICAgaWYgKGJhc2UpIHtcbiAgICAgIGhyZWYgPSBiYXNlLmdldEF0dHJpYnV0ZSgnaHJlZicpITtcbiAgICB9XG4gICAgLy8gVE9ETyhhbHhodWIpOiBOZWVkIHJlbGF0aXZlIHBhdGggbG9naWMgZnJvbSBCcm93c2VyRG9tQWRhcHRlciBoZXJlP1xuICAgIHJldHVybiBocmVmO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChlbDogTm9kZSwgZXZ0OiBhbnkpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZXZlbnQgdG8gdGhlIHdpbmRvdyBhbHNvLlxuICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gICAgY29uc3Qgd2luID0gKGRvYyBhcyBhbnkpLmRlZmF1bHRWaWV3O1xuICAgIGlmICh3aW4pIHtcbiAgICAgIHdpbi5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5IHtcbiAgICB0aHJvdyBfbm90SW1wbGVtZW50ZWQoJ2dldEhpc3RvcnknKTtcbiAgfVxuICBnZXRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XG4gICAgdGhyb3cgX25vdEltcGxlbWVudGVkKCdnZXRMb2NhdGlvbicpO1xuICB9XG4gIGdldFVzZXJBZ2VudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnRmFrZSB1c2VyIGFnZW50JztcbiAgfVxuXG4gIHBlcmZvcm1hbmNlTm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIERhdGUubm93KCk7XG4gIH1cblxuICBzdXBwb3J0c0Nvb2tpZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRocm93IF9ub3RJbXBsZW1lbnRlZCgnZ2V0Q29va2llJyk7XG4gIH1cbn1cbiJdfQ==