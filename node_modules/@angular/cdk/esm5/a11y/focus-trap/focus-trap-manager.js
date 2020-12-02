/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Injectable that ensures only the most recently enabled FocusTrap is active. */
var FocusTrapManager = /** @class */ (function () {
    function FocusTrapManager() {
        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    FocusTrapManager.prototype.register = function (focusTrap) {
        // Dedupe focusTraps that register multiple times.
        this._focusTrapStack = this._focusTrapStack.filter(function (ft) { return ft !== focusTrap; });
        var stack = this._focusTrapStack;
        if (stack.length) {
            stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
    };
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    FocusTrapManager.prototype.deregister = function (focusTrap) {
        focusTrap._disable();
        var stack = this._focusTrapStack;
        var i = stack.indexOf(focusTrap);
        if (i !== -1) {
            stack.splice(i, 1);
            if (stack.length) {
                stack[stack.length - 1]._enable();
            }
        }
    };
    FocusTrapManager.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    FocusTrapManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function FocusTrapManager_Factory() { return new FocusTrapManager(); }, token: FocusTrapManager, providedIn: "root" });
    return FocusTrapManager;
}());
export { FocusTrapManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBWXpDLGtGQUFrRjtBQUNsRjtJQUFBO1FBRUUsbUVBQW1FO1FBQ25FLDhCQUE4QjtRQUN0QixvQkFBZSxHQUF1QixFQUFFLENBQUM7S0FxQ2xEO0lBbkNDOzs7T0FHRztJQUNILG1DQUFRLEdBQVIsVUFBUyxTQUEyQjtRQUNsQyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsS0FBSyxTQUFTLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUU3RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRWpDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQ0FBVSxHQUFWLFVBQVcsU0FBMkI7UUFDcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFbkMsSUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7O2dCQXhDRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7MkJBckJoQztDQThEQyxBQXpDRCxJQXlDQztTQXhDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIEZvY3VzVHJhcCBtYW5hZ2VkIGJ5IEZvY3VzVHJhcE1hbmFnZXIuXG4gKiBJbXBsZW1lbnRlZCBieSBDb25maWd1cmFibGVGb2N1c1RyYXAgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkRm9jdXNUcmFwIHtcbiAgX2VuYWJsZSgpOiB2b2lkO1xuICBfZGlzYWJsZSgpOiB2b2lkO1xuICBmb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbi8qKiBJbmplY3RhYmxlIHRoYXQgZW5zdXJlcyBvbmx5IHRoZSBtb3N0IHJlY2VudGx5IGVuYWJsZWQgRm9jdXNUcmFwIGlzIGFjdGl2ZS4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcE1hbmFnZXIge1xuICAvLyBBIHN0YWNrIG9mIHRoZSBGb2N1c1RyYXBzIG9uIHRoZSBwYWdlLiBPbmx5IHRoZSBGb2N1c1RyYXAgYXQgdGhlXG4gIC8vIHRvcCBvZiB0aGUgc3RhY2sgaXMgYWN0aXZlLlxuICBwcml2YXRlIF9mb2N1c1RyYXBTdGFjazogTWFuYWdlZEZvY3VzVHJhcFtdID0gW107XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBGb2N1c1RyYXAgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2ssIGFuZCB0aGVuIHB1c2hlc1xuICAgKiB0aGUgbmV3IEZvY3VzVHJhcCBvbnRvIHRoZSBzdGFjay5cbiAgICovXG4gIHJlZ2lzdGVyKGZvY3VzVHJhcDogTWFuYWdlZEZvY3VzVHJhcCk6IHZvaWQge1xuICAgIC8vIERlZHVwZSBmb2N1c1RyYXBzIHRoYXQgcmVnaXN0ZXIgbXVsdGlwbGUgdGltZXMuXG4gICAgdGhpcy5fZm9jdXNUcmFwU3RhY2sgPSB0aGlzLl9mb2N1c1RyYXBTdGFjay5maWx0ZXIoKGZ0KSA9PiBmdCAhPT0gZm9jdXNUcmFwKTtcblxuICAgIGxldCBzdGFjayA9IHRoaXMuX2ZvY3VzVHJhcFN0YWNrO1xuXG4gICAgaWYgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0uX2Rpc2FibGUoKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKGZvY3VzVHJhcCk7XG4gICAgZm9jdXNUcmFwLl9lbmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBGb2N1c1RyYXAgZnJvbSB0aGUgc3RhY2ssIGFuZCBhY3RpdmF0ZXMgdGhlXG4gICAqIEZvY3VzVHJhcCB0aGF0IGlzIHRoZSBuZXcgdG9wIG9mIHRoZSBzdGFjay5cbiAgICovXG4gIGRlcmVnaXN0ZXIoZm9jdXNUcmFwOiBNYW5hZ2VkRm9jdXNUcmFwKTogdm9pZCB7XG4gICAgZm9jdXNUcmFwLl9kaXNhYmxlKCk7XG5cbiAgICBjb25zdCBzdGFjayA9IHRoaXMuX2ZvY3VzVHJhcFN0YWNrO1xuXG4gICAgY29uc3QgaSA9IHN0YWNrLmluZGV4T2YoZm9jdXNUcmFwKTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIHN0YWNrLnNwbGljZShpLCAxKTtcbiAgICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0uX2VuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19