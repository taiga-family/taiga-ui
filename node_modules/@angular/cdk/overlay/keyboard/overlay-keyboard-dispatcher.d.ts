/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, Optional } from '@angular/core';
import { OverlayRef } from '../overlay-ref';
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayKeyboardDispatcher implements OnDestroy {
    /** Currently attached overlays in the order they were attached. */
    _attachedOverlays: OverlayRef[];
    private _document;
    private _isAttached;
    constructor(document: any);
    ngOnDestroy(): void;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef: OverlayRef): void;
    /** Remove an overlay from the list of attached overlay refs. */
    remove(overlayRef: OverlayRef): void;
    /** Detaches the global keyboard event listener. */
    private _detach;
    /** Keyboard event listener that will be attached to the body. */
    private _keydownListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayKeyboardDispatcher, never>;
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher: OverlayKeyboardDispatcher, _document: any): OverlayKeyboardDispatcher;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER: {
    provide: typeof OverlayKeyboardDispatcher;
    deps: (Optional[] | InjectionToken<any>)[];
    useFactory: typeof OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyLmQudHMiLCJzb3VyY2VzIjpbIm92ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuLi9vdmVybGF5LXJlZic7XG4vKipcbiAqIFNlcnZpY2UgZm9yIGRpc3BhdGNoaW5nIGtleWJvYXJkIGV2ZW50cyB0aGF0IGxhbmQgb24gdGhlIGJvZHkgdG8gYXBwcm9wcmlhdGUgb3ZlcmxheSByZWYsXG4gKiBpZiBhbnkuIEl0IG1haW50YWlucyBhIGxpc3Qgb2YgYXR0YWNoZWQgb3ZlcmxheXMgdG8gZGV0ZXJtaW5lIGJlc3Qgc3VpdGVkIG92ZXJsYXkgYmFzZWRcbiAqIG9uIGV2ZW50IHRhcmdldCBhbmQgb3JkZXIgb2Ygb3ZlcmxheSBvcGVucy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqIEN1cnJlbnRseSBhdHRhY2hlZCBvdmVybGF5cyBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIGF0dGFjaGVkLiAqL1xuICAgIF9hdHRhY2hlZE92ZXJsYXlzOiBPdmVybGF5UmVmW107XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfaXNBdHRhY2hlZDtcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudDogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBBZGQgYSBuZXcgb3ZlcmxheSB0byB0aGUgbGlzdCBvZiBhdHRhY2hlZCBvdmVybGF5IHJlZnMuICovXG4gICAgYWRkKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkO1xuICAgIC8qKiBSZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBsaXN0IG9mIGF0dGFjaGVkIG92ZXJsYXkgcmVmcy4gKi9cbiAgICByZW1vdmUob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQ7XG4gICAgLyoqIERldGFjaGVzIHRoZSBnbG9iYWwga2V5Ym9hcmQgZXZlbnQgbGlzdGVuZXIuICovXG4gICAgcHJpdmF0ZSBfZGV0YWNoO1xuICAgIC8qKiBLZXlib2FyZCBldmVudCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlIGJvZHkuICovXG4gICAgcHJpdmF0ZSBfa2V5ZG93bkxpc3RlbmVyO1xufVxuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gT1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSX0ZBQ1RPUlkoZGlzcGF0Y2hlcjogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgX2RvY3VtZW50OiBhbnkpOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyO1xuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgT1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSOiB7XG4gICAgcHJvdmlkZTogdHlwZW9mIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI7XG4gICAgZGVwczogKE9wdGlvbmFsW10gfCBJbmplY3Rpb25Ub2tlbjxhbnk+KVtdO1xuICAgIHVzZUZhY3Rvcnk6IHR5cGVvZiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWTtcbn07XG4iXX0=