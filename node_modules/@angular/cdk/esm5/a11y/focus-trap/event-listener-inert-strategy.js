/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { closest } from './polyfill';
/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
var EventListenerFocusTrapInertStrategy = /** @class */ (function () {
    function EventListenerFocusTrapInertStrategy() {
        /** Focus event handler. */
        this._listener = null;
    }
    /** Adds a document event listener that keeps focus inside the FocusTrap. */
    EventListenerFocusTrapInertStrategy.prototype.preventFocus = function (focusTrap) {
        var _this = this;
        // Ensure there's only one listener per document
        if (this._listener) {
            focusTrap._document.removeEventListener('focus', this._listener, true);
        }
        this._listener = function (e) { return _this._trapFocus(focusTrap, e); };
        focusTrap._ngZone.runOutsideAngular(function () {
            focusTrap._document.addEventListener('focus', _this._listener, true);
        });
    };
    /** Removes the event listener added in preventFocus. */
    EventListenerFocusTrapInertStrategy.prototype.allowFocus = function (focusTrap) {
        if (!this._listener) {
            return;
        }
        focusTrap._document.removeEventListener('focus', this._listener, true);
        this._listener = null;
    };
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */
    EventListenerFocusTrapInertStrategy.prototype._trapFocus = function (focusTrap, event) {
        var target = event.target;
        var focusTrapRoot = focusTrap._element;
        // Don't refocus if target was in an overlay, because the overlay might be associated
        // with an element inside the FocusTrap, ex. mat-select.
        if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(function () {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                    focusTrap.focusFirstTabbableElement();
                }
            });
        }
    };
    return EventListenerFocusTrapInertStrategy;
}());
export { EventListenerFocusTrapInertStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdGVuZXItaW5lcnQtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZm9jdXMtdHJhcC9ldmVudC1saXN0ZW5lci1pbmVydC1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DOzs7R0FHRztBQUNIO0lBQUE7UUFDRSwyQkFBMkI7UUFDbkIsY0FBUyxHQUFxQyxJQUFJLENBQUM7SUFpRDdELENBQUM7SUEvQ0MsNEVBQTRFO0lBQzVFLDBEQUFZLEdBQVosVUFBYSxTQUFnQztRQUE3QyxpQkFVQztRQVRDLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBQyxDQUFhLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztRQUNsRSxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxTQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELHdEQUFVLEdBQVYsVUFBVyxTQUFnQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxTQUFTLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx3REFBVSxHQUFsQixVQUFtQixTQUFnQyxFQUFFLEtBQWlCO1FBQ3BFLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBQzNDLElBQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFekMscUZBQXFGO1FBQ3JGLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3JGLGdGQUFnRjtZQUNoRix3RUFBd0U7WUFDeEUsMkRBQTJEO1lBQzNELFVBQVUsQ0FBQztnQkFDVCx5RkFBeUY7Z0JBQ3pGLElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDbkYsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNMLENBQUM7SUFDSCwwQ0FBQztBQUFELENBQUMsQUFuREQsSUFtREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtGb2N1c1RyYXBJbmVydFN0cmF0ZWd5fSBmcm9tICcuL2ZvY3VzLXRyYXAtaW5lcnQtc3RyYXRlZ3knO1xuaW1wb3J0IHtDb25maWd1cmFibGVGb2N1c1RyYXB9IGZyb20gJy4vY29uZmlndXJhYmxlLWZvY3VzLXRyYXAnO1xuaW1wb3J0IHtjbG9zZXN0fSBmcm9tICcuL3BvbHlmaWxsJztcblxuLyoqXG4gKiBMaWdodHdlaWdodCBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5IHRoYXQgYWRkcyBhIGRvY3VtZW50IGZvY3VzIGV2ZW50XG4gKiBsaXN0ZW5lciB0byByZWRpcmVjdCBmb2N1cyBiYWNrIGluc2lkZSB0aGUgRm9jdXNUcmFwLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lckZvY3VzVHJhcEluZXJ0U3RyYXRlZ3kgaW1wbGVtZW50cyBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5IHtcbiAgLyoqIEZvY3VzIGV2ZW50IGhhbmRsZXIuICovXG4gIHByaXZhdGUgX2xpc3RlbmVyOiAoKGU6IEZvY3VzRXZlbnQpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEFkZHMgYSBkb2N1bWVudCBldmVudCBsaXN0ZW5lciB0aGF0IGtlZXBzIGZvY3VzIGluc2lkZSB0aGUgRm9jdXNUcmFwLiAqL1xuICBwcmV2ZW50Rm9jdXMoZm9jdXNUcmFwOiBDb25maWd1cmFibGVGb2N1c1RyYXApOiB2b2lkIHtcbiAgICAvLyBFbnN1cmUgdGhlcmUncyBvbmx5IG9uZSBsaXN0ZW5lciBwZXIgZG9jdW1lbnRcbiAgICBpZiAodGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgIGZvY3VzVHJhcC5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9saXN0ZW5lciEsIHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyID0gKGU6IEZvY3VzRXZlbnQpID0+IHRoaXMuX3RyYXBGb2N1cyhmb2N1c1RyYXAsIGUpO1xuICAgIGZvY3VzVHJhcC5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZvY3VzVHJhcC5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9saXN0ZW5lciEsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVyIGFkZGVkIGluIHByZXZlbnRGb2N1cy4gKi9cbiAgYWxsb3dGb2N1cyhmb2N1c1RyYXA6IENvbmZpZ3VyYWJsZUZvY3VzVHJhcCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9jdXNUcmFwLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2xpc3RlbmVyISwgdHJ1ZSk7XG4gICAgdGhpcy5fbGlzdGVuZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZm9jdXNlcyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgRm9jdXNUcmFwIGlmIHRoZSBmb2N1cyBldmVudCB0YXJnZXQgd2FzIG91dHNpZGVcbiAgICogdGhlIEZvY3VzVHJhcC5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBldmVudCBsaXN0ZW5lciBjYWxsYmFjay4gVGhlIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkIGluIHJ1bk91dHNpZGVBbmd1bGFyLFxuICAgKiBzbyBhbGwgdGhpcyBjb2RlIHJ1bnMgb3V0c2lkZSBBbmd1bGFyIGFzIHdlbGwuXG4gICAqL1xuICBwcml2YXRlIF90cmFwRm9jdXMoZm9jdXNUcmFwOiBDb25maWd1cmFibGVGb2N1c1RyYXAsIGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGZvY3VzVHJhcFJvb3QgPSBmb2N1c1RyYXAuX2VsZW1lbnQ7XG5cbiAgICAvLyBEb24ndCByZWZvY3VzIGlmIHRhcmdldCB3YXMgaW4gYW4gb3ZlcmxheSwgYmVjYXVzZSB0aGUgb3ZlcmxheSBtaWdodCBiZSBhc3NvY2lhdGVkXG4gICAgLy8gd2l0aCBhbiBlbGVtZW50IGluc2lkZSB0aGUgRm9jdXNUcmFwLCBleC4gbWF0LXNlbGVjdC5cbiAgICBpZiAoIWZvY3VzVHJhcFJvb3QuY29udGFpbnModGFyZ2V0KSAmJiBjbG9zZXN0KHRhcmdldCwgJ2Rpdi5jZGstb3ZlcmxheS1wYW5lJykgPT09IG51bGwpIHtcbiAgICAgICAgLy8gU29tZSBsZWdhY3kgRm9jdXNUcmFwIHVzYWdlcyBoYXZlIGxvZ2ljIHRoYXQgZm9jdXNlcyBzb21lIGVsZW1lbnQgb24gdGhlIHBhZ2VcbiAgICAgICAgLy8ganVzdCBiZWZvcmUgRm9jdXNUcmFwIGlzIGRlc3Ryb3llZC4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3YWl0XG4gICAgICAgIC8vIHRvIGJlIHN1cmUgRm9jdXNUcmFwIGlzIHN0aWxsIGVuYWJsZWQgYmVmb3JlIHJlZm9jdXNpbmcuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgZm9jdXMgd2Fzbid0IHB1dCBiYWNrIGludG8gdGhlIGZvY3VzIHRyYXAgd2hpbGUgdGhlIHRpbWVvdXQgd2FzIHBlbmRpbmcuXG4gICAgICAgICAgaWYgKGZvY3VzVHJhcC5lbmFibGVkICYmICFmb2N1c1RyYXBSb290LmNvbnRhaW5zKGZvY3VzVHJhcC5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGZvY3VzVHJhcC5mb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxufVxuIl19