/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ɵparseCookieValue as parseCookieValue, ɵsetRootDomAdapter as setRootDomAdapter } from '@angular/common';
import { ɵglobal as global } from '@angular/core';
import { GenericBrowserDomAdapter } from './generic_browser_adapter';
var ɵ0 = function () {
    if (global['Node']) {
        return global['Node'].prototype.contains || function (node) {
            return !!(this.compareDocumentPosition(node) & 16);
        };
    }
    return undefined;
};
var nodeContains = (ɵ0)();
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
var BrowserDomAdapter = /** @class */ (function (_super) {
    __extends(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserDomAdapter.makeCurrent = function () {
        setRootDomAdapter(new BrowserDomAdapter());
    };
    BrowserDomAdapter.prototype.getProperty = function (el, name) {
        return el[name];
    };
    BrowserDomAdapter.prototype.log = function (error) {
        if (window.console) {
            window.console.log && window.console.log(error);
        }
    };
    BrowserDomAdapter.prototype.logGroup = function (error) {
        if (window.console) {
            window.console.group && window.console.group(error);
        }
    };
    BrowserDomAdapter.prototype.logGroupEnd = function () {
        if (window.console) {
            window.console.groupEnd && window.console.groupEnd();
        }
    };
    BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return function () {
            el.removeEventListener(evt, listener, false);
        };
    };
    BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) {
        el.dispatchEvent(evt);
    };
    BrowserDomAdapter.prototype.remove = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return node;
    };
    BrowserDomAdapter.prototype.getValue = function (el) {
        return el.value;
    };
    BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    };
    BrowserDomAdapter.prototype.createHtmlDocument = function () {
        return document.implementation.createHTMLDocument('fakeTitle');
    };
    BrowserDomAdapter.prototype.getDefaultDocument = function () {
        return document;
    };
    BrowserDomAdapter.prototype.isElementNode = function (node) {
        return node.nodeType === Node.ELEMENT_NODE;
    };
    BrowserDomAdapter.prototype.isShadowRoot = function (node) {
        return node instanceof DocumentFragment;
    };
    BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    };
    BrowserDomAdapter.prototype.getHistory = function () {
        return window.history;
    };
    BrowserDomAdapter.prototype.getLocation = function () {
        return window.location;
    };
    BrowserDomAdapter.prototype.getBaseHref = function (doc) {
        var href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    };
    BrowserDomAdapter.prototype.resetBaseElement = function () {
        baseElement = null;
    };
    BrowserDomAdapter.prototype.getUserAgent = function () {
        return window.navigator.userAgent;
    };
    BrowserDomAdapter.prototype.performanceNow = function () {
        // performance.now() is not available in all browsers, see
        // http://caniuse.com/#search=performance.now
        return window.performance && window.performance.now ? window.performance.now() :
            new Date().getTime();
    };
    BrowserDomAdapter.prototype.supportsCookies = function () {
        return true;
    };
    BrowserDomAdapter.prototype.getCookie = function (name) {
        return parseCookieValue(document.cookie, name);
    };
    return BrowserDomAdapter;
}(GenericBrowserDomAdapter));
export { BrowserDomAdapter };
var baseElement = null;
function getBaseElementHref() {
    if (!baseElement) {
        baseElement = document.querySelector('base');
        if (!baseElement) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode;
function relativePath(url) {
    if (!urlParsingNode) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
        '/' + urlParsingNode.pathname;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3Nlci9icm93c2VyX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxnQkFBZ0IsRUFBRSxrQkFBa0IsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9HLE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO1NBRVA7SUFDMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxVQUFxQixJQUFTO1lBQ3hFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQztLQUNIO0lBRUQsT0FBTyxTQUFnQixDQUFDO0FBQzFCLENBQUM7QUFSRCxJQUFNLFlBQVksR0FBeUMsSUFRekQsRUFBRSxDQUFDO0FBRUw7Ozs7O0dBS0c7QUFDSCxvREFBb0Q7QUFDcEQ7SUFBdUMscUNBQXdCO0lBQS9EOztJQTJHQSxDQUFDO0lBMUdRLDZCQUFXLEdBQWxCO1FBQ0UsaUJBQWlCLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHVDQUFXLEdBQVgsVUFBWSxFQUFRLEVBQUUsSUFBWTtRQUNoQyxPQUFhLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLEtBQWE7UUFDZixJ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LFlBQVksQ0FBQyxHQUFRO0lBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUM7SUFDRCxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixHQUFHLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1cGFyc2VDb29raWVWYWx1ZSBhcyBwYXJzZUNvb2tpZVZhbHVlLCDJtXNldFJvb3REb21BZGFwdGVyIGFzIHNldFJvb3REb21BZGFwdGVyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHvJtWdsb2JhbCBhcyBnbG9iYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dlbmVyaWNCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSAnLi9nZW5lcmljX2Jyb3dzZXJfYWRhcHRlcic7XG5cbmNvbnN0IG5vZGVDb250YWluczogKHRoaXM6IE5vZGUsIG90aGVyOiBOb2RlKSA9PiBib29sZWFuID0gKCgpID0+IHtcbiAgaWYgKGdsb2JhbFsnTm9kZSddKSB7XG4gICAgcmV0dXJuIGdsb2JhbFsnTm9kZSddLnByb3RvdHlwZS5jb250YWlucyB8fCBmdW5jdGlvbih0aGlzOiBOb2RlLCBub2RlOiBhbnkpIHtcbiAgICAgIHJldHVybiAhISh0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUpICYgMTYpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkIGFzIGFueTtcbn0pKCk7XG5cbi8qKlxuICogQSBgRG9tQWRhcHRlcmAgcG93ZXJlZCBieSBmdWxsIGJyb3dzZXIgRE9NIEFQSXMuXG4gKlxuICogQHNlY3VyaXR5IFRyZWFkIGNhcmVmdWxseSEgSW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIGRpcmVjdGx5IGlzIGRhbmdlcm91cyBhbmRcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpyZXF1aXJlUGFyYW1ldGVyVHlwZSBuby1jb25zb2xlICovXG5leHBvcnQgY2xhc3MgQnJvd3NlckRvbUFkYXB0ZXIgZXh0ZW5kcyBHZW5lcmljQnJvd3NlckRvbUFkYXB0ZXIge1xuICBzdGF0aWMgbWFrZUN1cnJlbnQoKSB7XG4gICAgc2V0Um9vdERvbUFkYXB0ZXIobmV3IEJyb3dzZXJEb21BZGFwdGVyKCkpO1xuICB9XG4gIGdldFByb3BlcnR5KGVsOiBOb2RlLCBuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiAoPGFueT5lbClbbmFtZV07XG4gIH1cblxuICBsb2coZXJyb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgICAgd2luZG93LmNvbnNvbGUubG9nICYmIHdpbmRvdy5jb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgbG9nR3JvdXAoZXJyb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgICAgd2luZG93LmNvbnNvbGUuZ3JvdXAgJiYgd2luZG93LmNvbnNvbGUuZ3JvdXAoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ0dyb3VwRW5kKCk6IHZvaWQge1xuICAgIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgICAgd2luZG93LmNvbnNvbGUuZ3JvdXBFbmQgJiYgd2luZG93LmNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICB9XG4gIH1cblxuICBvbkFuZENhbmNlbChlbDogTm9kZSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgLy8gTmVlZGVkIHRvIGZvbGxvdyBEYXJ0J3Mgc3Vic2NyaXB0aW9uIHNlbWFudGljLCB1bnRpbCBmaXggb2ZcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2RhcnQvaXNzdWVzL2RldGFpbD9pZD0xNzQwNlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9O1xuICB9XG4gIGRpc3BhdGNoRXZlbnQoZWw6IE5vZGUsIGV2dDogYW55KSB7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG4gIHJlbW92ZShub2RlOiBOb2RlKTogTm9kZSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBnZXRWYWx1ZShlbDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH1cbiAgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBzdHJpbmcsIGRvYz86IERvY3VtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGRvYyA9IGRvYyB8fCB0aGlzLmdldERlZmF1bHREb2N1bWVudCgpO1xuICAgIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgfVxuICBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCdmYWtlVGl0bGUnKTtcbiAgfVxuICBnZXREZWZhdWx0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuXG4gIGlzRWxlbWVudE5vZGUobm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbiAgfVxuXG4gIGlzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ7XG4gIH1cblxuICBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IEV2ZW50VGFyZ2V0fG51bGwge1xuICAgIGlmICh0YXJnZXQgPT09ICd3aW5kb3cnKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICByZXR1cm4gZG9jO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAnYm9keScpIHtcbiAgICAgIHJldHVybiBkb2MuYm9keTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnk7XG4gIH1cbiAgZ2V0TG9jYXRpb24oKTogTG9jYXRpb24ge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb247XG4gIH1cbiAgZ2V0QmFzZUhyZWYoZG9jOiBEb2N1bWVudCk6IHN0cmluZ3xudWxsIHtcbiAgICBjb25zdCBocmVmID0gZ2V0QmFzZUVsZW1lbnRIcmVmKCk7XG4gICAgcmV0dXJuIGhyZWYgPT0gbnVsbCA/IG51bGwgOiByZWxhdGl2ZVBhdGgoaHJlZik7XG4gIH1cbiAgcmVzZXRCYXNlRWxlbWVudCgpOiB2b2lkIHtcbiAgICBiYXNlRWxlbWVudCA9IG51bGw7XG4gIH1cbiAgZ2V0VXNlckFnZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICB9XG4gIHBlcmZvcm1hbmNlTm93KCk6IG51bWJlciB7XG4gICAgLy8gcGVyZm9ybWFuY2Uubm93KCkgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsIHNlZVxuICAgIC8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXBlcmZvcm1hbmNlLm5vd1xuICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxuICBzdXBwb3J0c0Nvb2tpZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIHJldHVybiBwYXJzZUNvb2tpZVZhbHVlKGRvY3VtZW50LmNvb2tpZSwgbmFtZSk7XG4gIH1cbn1cblxubGV0IGJhc2VFbGVtZW50OiBIVE1MRWxlbWVudHxudWxsID0gbnVsbDtcbmZ1bmN0aW9uIGdldEJhc2VFbGVtZW50SHJlZigpOiBzdHJpbmd8bnVsbCB7XG4gIGlmICghYmFzZUVsZW1lbnQpIHtcbiAgICBiYXNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKSE7XG4gICAgaWYgKCFiYXNlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbn1cblxuLy8gYmFzZWQgb24gdXJsVXRpbHMuanMgaW4gQW5ndWxhckpTIDFcbmxldCB1cmxQYXJzaW5nTm9kZTogYW55O1xuZnVuY3Rpb24gcmVsYXRpdmVQYXRoKHVybDogYW55KTogc3RyaW5nIHtcbiAgaWYgKCF1cmxQYXJzaW5nTm9kZSkge1xuICAgIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB9XG4gIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gIHJldHVybiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lO1xufVxuIl19