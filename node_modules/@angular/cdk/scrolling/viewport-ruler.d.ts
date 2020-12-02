/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
/** Time in ms to throttle the resize events by default. */
import * as ɵngcc0 from '@angular/core';
export declare const DEFAULT_RESIZE_TIME = 20;
/** Object that holds the scroll position of the viewport in each direction. */
export interface ViewportScrollPosition {
    top: number;
    left: number;
}
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
export declare class ViewportRuler implements OnDestroy {
    private _platform;
    /** Cached viewport dimensions. */
    private _viewportSize;
    /** Stream of viewport change events. */
    private _change;
    /** Subscription to streams that invalidate the cached viewport dimensions. */
    private _invalidateCache;
    /** Used to reference correct document/window */
    protected _document?: Document;
    constructor(_platform: Platform, ngZone: NgZone, 
    /** @breaking-change 11.0.0 make document required */
    document?: any);
    ngOnDestroy(): void;
    /** Returns the viewport's width and height. */
    getViewportSize(): Readonly<{
        width: number;
        height: number;
    }>;
    /** Gets a ClientRect for the viewport's bounds. */
    getViewportRect(): ClientRect;
    /** Gets the (top, left) scroll position of the viewport. */
    getViewportScrollPosition(): ViewportScrollPosition;
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    change(throttleTime?: number): Observable<Event>;
    /** Access injected document if available or fallback to global document reference */
    private _getDocument;
    /** Use defaultView of injected document if available or fallback to global window reference */
    private _getWindow;
    /** Updates the cached viewport size. */
    private _updateViewportSize;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ViewportRuler, [null, null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQtcnVsZXIuZC50cyIsInNvdXJjZXMiOlsidmlld3BvcnQtcnVsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKiogVGltZSBpbiBtcyB0byB0aHJvdHRsZSB0aGUgcmVzaXplIGV2ZW50cyBieSBkZWZhdWx0LiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgREVGQVVMVF9SRVNJWkVfVElNRSA9IDIwO1xuLyoqIE9iamVjdCB0aGF0IGhvbGRzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHZpZXdwb3J0IGluIGVhY2ggZGlyZWN0aW9uLiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3cG9ydFNjcm9sbFBvc2l0aW9uIHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG59XG4vKipcbiAqIFNpbXBsZSB1dGlsaXR5IGZvciBnZXR0aW5nIHRoZSBib3VuZHMgb2YgdGhlIGJyb3dzZXIgdmlld3BvcnQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFZpZXdwb3J0UnVsZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIC8qKiBDYWNoZWQgdmlld3BvcnQgZGltZW5zaW9ucy4gKi9cbiAgICBwcml2YXRlIF92aWV3cG9ydFNpemU7XG4gICAgLyoqIFN0cmVhbSBvZiB2aWV3cG9ydCBjaGFuZ2UgZXZlbnRzLiAqL1xuICAgIHByaXZhdGUgX2NoYW5nZTtcbiAgICAvKiogU3Vic2NyaXB0aW9uIHRvIHN0cmVhbXMgdGhhdCBpbnZhbGlkYXRlIHRoZSBjYWNoZWQgdmlld3BvcnQgZGltZW5zaW9ucy4gKi9cbiAgICBwcml2YXRlIF9pbnZhbGlkYXRlQ2FjaGU7XG4gICAgLyoqIFVzZWQgdG8gcmVmZXJlbmNlIGNvcnJlY3QgZG9jdW1lbnQvd2luZG93ICovXG4gICAgcHJvdGVjdGVkIF9kb2N1bWVudD86IERvY3VtZW50O1xuICAgIGNvbnN0cnVjdG9yKF9wbGF0Zm9ybTogUGxhdGZvcm0sIG5nWm9uZTogTmdab25lLCBcbiAgICAvKiogQGJyZWFraW5nLWNoYW5nZSAxMS4wLjAgbWFrZSBkb2N1bWVudCByZXF1aXJlZCAqL1xuICAgIGRvY3VtZW50PzogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBSZXR1cm5zIHRoZSB2aWV3cG9ydCdzIHdpZHRoIGFuZCBoZWlnaHQuICovXG4gICAgZ2V0Vmlld3BvcnRTaXplKCk6IFJlYWRvbmx5PHtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgfT47XG4gICAgLyoqIEdldHMgYSBDbGllbnRSZWN0IGZvciB0aGUgdmlld3BvcnQncyBib3VuZHMuICovXG4gICAgZ2V0Vmlld3BvcnRSZWN0KCk6IENsaWVudFJlY3Q7XG4gICAgLyoqIEdldHMgdGhlICh0b3AsIGxlZnQpIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgdmlld3BvcnQuICovXG4gICAgZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpOiBWaWV3cG9ydFNjcm9sbFBvc2l0aW9uO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQgY2hhbmdlcy5cbiAgICAgKiBAcGFyYW0gdGhyb3R0bGVUaW1lIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIHRoZSBzdHJlYW0uXG4gICAgICovXG4gICAgY2hhbmdlKHRocm90dGxlVGltZT86IG51bWJlcik6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIC8qKiBBY2Nlc3MgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCBkb2N1bWVudCByZWZlcmVuY2UgKi9cbiAgICBwcml2YXRlIF9nZXREb2N1bWVudDtcbiAgICAvKiogVXNlIGRlZmF1bHRWaWV3IG9mIGluamVjdGVkIGRvY3VtZW50IGlmIGF2YWlsYWJsZSBvciBmYWxsYmFjayB0byBnbG9iYWwgd2luZG93IHJlZmVyZW5jZSAqL1xuICAgIHByaXZhdGUgX2dldFdpbmRvdztcbiAgICAvKiogVXBkYXRlcyB0aGUgY2FjaGVkIHZpZXdwb3J0IHNpemUuICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmlld3BvcnRTaXplO1xufVxuIl19