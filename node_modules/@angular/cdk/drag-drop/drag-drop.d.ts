/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, ElementRef } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DragRef, DragRefConfig } from './drag-ref';
import { DropListRef } from './drop-list-ref';
import { DragDropRegistry } from './drag-drop-registry';
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DragDrop {
    private _document;
    private _ngZone;
    private _viewportRuler;
    private _dragDropRegistry;
    constructor(_document: any, _ngZone: NgZone, _viewportRuler: ViewportRuler, _dragDropRegistry: DragDropRegistry<DragRef, DropListRef>);
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    createDrag<T = any>(element: ElementRef<HTMLElement> | HTMLElement, config?: DragRefConfig): DragRef<T>;
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    createDropList<T = any>(element: ElementRef<HTMLElement> | HTMLElement): DropListRef<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragDrop, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmQudHMiLCJzb3VyY2VzIjpbImRyYWctZHJvcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBOZ1pvbmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdwb3J0UnVsZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IERyYWdSZWYsIERyYWdSZWZDb25maWcgfSBmcm9tICcuL2RyYWctcmVmJztcbmltcG9ydCB7IERyb3BMaXN0UmVmIH0gZnJvbSAnLi9kcm9wLWxpc3QtcmVmJztcbmltcG9ydCB7IERyYWdEcm9wUmVnaXN0cnkgfSBmcm9tICcuL2RyYWctZHJvcC1yZWdpc3RyeSc7XG4vKipcbiAqIFNlcnZpY2UgdGhhdCBhbGxvd3MgZm9yIGRyYWctYW5kLWRyb3AgZnVuY3Rpb25hbGl0eSB0byBiZSBhdHRhY2hlZCB0byBET00gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdEcm9wIHtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjtcbiAgICBwcml2YXRlIF9kcmFnRHJvcFJlZ2lzdHJ5O1xuICAgIGNvbnN0cnVjdG9yKF9kb2N1bWVudDogYW55LCBfbmdab25lOiBOZ1pvbmUsIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBfZHJhZ0Ryb3BSZWdpc3RyeTogRHJhZ0Ryb3BSZWdpc3RyeTxEcmFnUmVmLCBEcm9wTGlzdFJlZj4pO1xuICAgIC8qKlxuICAgICAqIFR1cm5zIGFuIGVsZW1lbnQgaW50byBhIGRyYWdnYWJsZSBpdGVtLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gd2hpY2ggdG8gYXR0YWNoIHRoZSBkcmFnZ2luZyBmdW5jdGlvbmFsaXR5LlxuICAgICAqIEBwYXJhbSBjb25maWcgT2JqZWN0IHVzZWQgdG8gY29uZmlndXJlIHRoZSBkcmFnZ2luZyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBjcmVhdGVEcmFnPFQgPSBhbnk+KGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQsIGNvbmZpZz86IERyYWdSZWZDb25maWcpOiBEcmFnUmVmPFQ+O1xuICAgIC8qKlxuICAgICAqIFR1cm5zIGFuIGVsZW1lbnQgaW50byBhIGRyb3AgbGlzdC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIHdoaWNoIHRvIGF0dGFjaCB0aGUgZHJvcCBsaXN0IGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgY3JlYXRlRHJvcExpc3Q8VCA9IGFueT4oZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudCk6IERyb3BMaXN0UmVmPFQ+O1xufVxuIl19