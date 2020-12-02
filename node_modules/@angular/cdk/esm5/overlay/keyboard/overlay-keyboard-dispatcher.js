/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /** Currently attached overlays in the order they were attached. */
        this._attachedOverlays = [];
        /** Keyboard event listener that will be attached to the body. */
        this._keydownListener = function (event) {
            var overlays = _this._attachedOverlays;
            for (var i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEvents.observers.length > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        };
        this._document = document;
    }
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    OverlayKeyboardDispatcher.prototype.add = function (overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    OverlayKeyboardDispatcher.prototype.remove = function (overlayRef) {
        var index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /** Detaches the global keyboard event listener. */
    OverlayKeyboardDispatcher.prototype._detach = function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    OverlayKeyboardDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(i0.ɵɵinject(i1.DOCUMENT)); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
export { OverlayKeyboardDispatcher };
/** @docs-private @deprecated @breaking-change 8.0.0 */
export function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new Optional(), new SkipSelf(), OverlayKeyboardDispatcher],
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        DOCUMENT
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L2tleWJvYXJkL292ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBR1YsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQzs7O0FBSXZCOzs7O0dBSUc7QUFDSDtJQVNFLG1DQUE4QixRQUFhO1FBQTNDLGlCQUVDO1FBUkQsbUVBQW1FO1FBQ25FLHNCQUFpQixHQUFpQixFQUFFLENBQUM7UUFpRHJDLGlFQUFpRTtRQUN6RCxxQkFBZ0IsR0FBRyxVQUFDLEtBQW9CO1lBQzlDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUV4QyxLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsNkZBQTZGO2dCQUM3Riw4RkFBOEY7Z0JBQzlGLDJGQUEyRjtnQkFDM0YsNEZBQTRGO2dCQUM1RiwyRkFBMkY7Z0JBQzNGLGdCQUFnQjtnQkFDaEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNuRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtpQkFDUDthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBM0RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsdUNBQUcsR0FBSCxVQUFJLFVBQXNCO1FBQ3hCLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsMENBQU0sR0FBTixVQUFPLFVBQXNCO1FBQzNCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUVELDhEQUE4RDtRQUM5RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxtREFBbUQ7SUFDM0MsMkNBQU8sR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDSCxDQUFDOztnQkFuREYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnREFTakIsTUFBTSxTQUFDLFFBQVE7OztvQ0FsQzlCO0NBK0ZDLEFBdEVELElBc0VDO1NBckVZLHlCQUF5QjtBQXdFdEMsdURBQXVEO0FBQ3ZELE1BQU0sVUFBVSw0Q0FBNEMsQ0FDeEQsVUFBcUMsRUFBRSxTQUFjO0lBQ3ZELE9BQU8sVUFBVSxJQUFJLElBQUkseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVELHVEQUF1RDtBQUN2RCxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FBRztJQUNsRCx3RUFBd0U7SUFDeEUsZ0NBQWdDO0lBQ2hDLE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsSUFBSSxFQUFFO1FBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUseUJBQXlCLENBQUM7UUFFM0Qsa0VBQWtFO1FBQ2xFLGtDQUFrQztRQUNsQyxRQUErQjtLQUNoQztJQUNELFVBQVUsRUFBRSw0Q0FBNEM7Q0FDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5UmVmfSBmcm9tICcuLi9vdmVybGF5LXJlZic7XG5cblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBkaXNwYXRjaGluZyBrZXlib2FyZCBldmVudHMgdGhhdCBsYW5kIG9uIHRoZSBib2R5IHRvIGFwcHJvcHJpYXRlIG92ZXJsYXkgcmVmLFxuICogaWYgYW55LiBJdCBtYWludGFpbnMgYSBsaXN0IG9mIGF0dGFjaGVkIG92ZXJsYXlzIHRvIGRldGVybWluZSBiZXN0IHN1aXRlZCBvdmVybGF5IGJhc2VkXG4gKiBvbiBldmVudCB0YXJnZXQgYW5kIG9yZGVyIG9mIG92ZXJsYXkgb3BlbnMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKiBDdXJyZW50bHkgYXR0YWNoZWQgb3ZlcmxheXMgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBhdHRhY2hlZC4gKi9cbiAgX2F0dGFjaGVkT3ZlcmxheXM6IE92ZXJsYXlSZWZbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgcHJpdmF0ZSBfaXNBdHRhY2hlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2RldGFjaCgpO1xuICB9XG5cbiAgLyoqIEFkZCBhIG5ldyBvdmVybGF5IHRvIHRoZSBsaXN0IG9mIGF0dGFjaGVkIG92ZXJsYXkgcmVmcy4gKi9cbiAgYWRkKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSBkb24ndCBnZXQgdGhlIHNhbWUgb3ZlcmxheSBtdWx0aXBsZSB0aW1lcy5cbiAgICB0aGlzLnJlbW92ZShvdmVybGF5UmVmKTtcblxuICAgIC8vIExhemlseSBzdGFydCBkaXNwYXRjaGVyIG9uY2UgZmlyc3Qgb3ZlcmxheSBpcyBhZGRlZFxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5ZG93bkxpc3RlbmVyKTtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkT3ZlcmxheXMucHVzaChvdmVybGF5UmVmKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBsaXN0IG9mIGF0dGFjaGVkIG92ZXJsYXkgcmVmcy4gKi9cbiAgcmVtb3ZlKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2F0dGFjaGVkT3ZlcmxheXMuaW5kZXhPZihvdmVybGF5UmVmKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9hdHRhY2hlZE92ZXJsYXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgbGlzdGVuZXIgb25jZSB0aGVyZSBhcmUgbm8gbW9yZSBvdmVybGF5cy5cbiAgICBpZiAodGhpcy5fYXR0YWNoZWRPdmVybGF5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2RldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGUgZ2xvYmFsIGtleWJvYXJkIGV2ZW50IGxpc3RlbmVyLiAqL1xuICBwcml2YXRlIF9kZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleWRvd25MaXN0ZW5lcik7XG4gICAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqIEtleWJvYXJkIGV2ZW50IGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgYm9keS4gKi9cbiAgcHJpdmF0ZSBfa2V5ZG93bkxpc3RlbmVyID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgb3ZlcmxheXMgPSB0aGlzLl9hdHRhY2hlZE92ZXJsYXlzO1xuXG4gICAgZm9yIChsZXQgaSA9IG92ZXJsYXlzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAvLyBEaXNwYXRjaCB0aGUga2V5ZG93biBldmVudCB0byB0aGUgdG9wIG92ZXJsYXkgd2hpY2ggaGFzIHN1YnNjcmliZXJzIHRvIGl0cyBrZXlkb3duIGV2ZW50cy5cbiAgICAgIC8vIFdlIHdhbnQgdG8gdGFyZ2V0IHRoZSBtb3N0IHJlY2VudCBvdmVybGF5LCByYXRoZXIgdGhhbiB0cnlpbmcgdG8gbWF0Y2ggd2hlcmUgdGhlIGV2ZW50IGNhbWVcbiAgICAgIC8vIGZyb20sIGJlY2F1c2Ugc29tZSBjb21wb25lbnRzIG1pZ2h0IG9wZW4gYW4gb3ZlcmxheSwgYnV0IGtlZXAgZm9jdXMgb24gYSB0cmlnZ2VyIGVsZW1lbnRcbiAgICAgIC8vIChlLmcuIGZvciBzZWxlY3QgYW5kIGF1dG9jb21wbGV0ZSkuIFdlIHNraXAgb3ZlcmxheXMgd2l0aG91dCBrZXlkb3duIGV2ZW50IHN1YnNjcmlwdGlvbnMsXG4gICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgb3ZlcmxheXMgdGhhdCBkb24ndCBoYW5kbGUga2V5Ym9hcmQgZXZlbnRzIHRvIGJsb2NrIHRoZSBvbmVzIGJlbG93XG4gICAgICAvLyB0aGVtIHRoYXQgZG8uXG4gICAgICBpZiAob3ZlcmxheXNbaV0uX2tleWRvd25FdmVudHMub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3ZlcmxheXNbaV0uX2tleWRvd25FdmVudHMubmV4dChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKiBAZG9jcy1wcml2YXRlIEBkZXByZWNhdGVkIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgKi9cbmV4cG9ydCBmdW5jdGlvbiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWShcbiAgICBkaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBfZG9jdW1lbnQ6IGFueSkge1xuICByZXR1cm4gZGlzcGF0Y2hlciB8fCBuZXcgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcihfZG9jdW1lbnQpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgY29uc3QgT1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC5cbiAgLy8gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcixcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJdLFxuXG4gICAgLy8gQ29lcmNlIHRvIGBJbmplY3Rpb25Ub2tlbmAgc28gdGhhdCB0aGUgYGRlcHNgIG1hdGNoIHRoZSBcInNoYXBlXCJcbiAgICAvLyBvZiB0aGUgdHlwZSBleHBlY3RlZCBieSBBbmd1bGFyXG4gICAgRE9DVU1FTlQgYXMgSW5qZWN0aW9uVG9rZW48YW55PlxuICBdLFxuICB1c2VGYWN0b3J5OiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWVxufTtcbiJdfQ==