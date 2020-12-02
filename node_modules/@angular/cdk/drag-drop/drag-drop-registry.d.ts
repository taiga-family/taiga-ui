/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare class DragDropRegistry<I, C> implements OnDestroy {
    private _ngZone;
    private _document;
    /** Registered drop container instances. */
    private _dropInstances;
    /** Registered drag item instances. */
    private _dragInstances;
    /** Drag item instances that are currently being dragged. */
    private _activeDragInstances;
    /** Keeps track of the event listeners that we've bound to the `document`. */
    private _globalListeners;
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    readonly pointerMove: Subject<TouchEvent | MouseEvent>;
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    readonly pointerUp: Subject<TouchEvent | MouseEvent>;
    /** Emits when the viewport has been scrolled while the user is dragging an item. */
    readonly scroll: Subject<Event>;
    constructor(_ngZone: NgZone, _document: any);
    /** Adds a drop container to the registry. */
    registerDropContainer(drop: C): void;
    /** Adds a drag item instance to the registry. */
    registerDragItem(drag: I): void;
    /** Removes a drop container from the registry. */
    removeDropContainer(drop: C): void;
    /** Removes a drag item instance from the registry. */
    removeDragItem(drag: I): void;
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    startDragging(drag: I, event: TouchEvent | MouseEvent): void;
    /** Stops dragging a drag item instance. */
    stopDragging(drag: I): void;
    /** Gets whether a drag item instance is currently being dragged. */
    isDragging(drag: I): boolean;
    ngOnDestroy(): void;
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */
    private _preventDefaultWhileDragging;
    /** Clears out the global event listeners from the `document`. */
    private _clearGlobalListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragDropRegistry<any, any>, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLXJlZ2lzdHJ5LmQudHMiLCJzb3VyY2VzIjpbImRyYWctZHJvcC1yZWdpc3RyeS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qKlxuICogU2VydmljZSB0aGF0IGtlZXBzIHRyYWNrIG9mIGFsbCB0aGUgZHJhZyBpdGVtIGFuZCBkcm9wIGNvbnRhaW5lclxuICogaW5zdGFuY2VzLCBhbmQgbWFuYWdlcyBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBgZG9jdW1lbnRgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcmFnRHJvcFJlZ2lzdHJ5PEksIEM+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgLyoqIFJlZ2lzdGVyZWQgZHJvcCBjb250YWluZXIgaW5zdGFuY2VzLiAqL1xuICAgIHByaXZhdGUgX2Ryb3BJbnN0YW5jZXM7XG4gICAgLyoqIFJlZ2lzdGVyZWQgZHJhZyBpdGVtIGluc3RhbmNlcy4gKi9cbiAgICBwcml2YXRlIF9kcmFnSW5zdGFuY2VzO1xuICAgIC8qKiBEcmFnIGl0ZW0gaW5zdGFuY2VzIHRoYXQgYXJlIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLiAqL1xuICAgIHByaXZhdGUgX2FjdGl2ZURyYWdJbnN0YW5jZXM7XG4gICAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCB3ZSd2ZSBib3VuZCB0byB0aGUgYGRvY3VtZW50YC4gKi9cbiAgICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lcnM7XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIGB0b3VjaG1vdmVgIG9yIGBtb3VzZW1vdmVgIGV2ZW50cyB0aGF0IGFyZSBkaXNwYXRjaGVkXG4gICAgICogd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSBkcmFnIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9pbnRlck1vdmU6IFN1YmplY3Q8VG91Y2hFdmVudCB8IE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBgdG91Y2hlbmRgIG9yIGBtb3VzZXVwYCBldmVudHMgdGhhdCBhcmUgZGlzcGF0Y2hlZFxuICAgICAqIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGEgZHJhZyBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvaW50ZXJVcDogU3ViamVjdDxUb3VjaEV2ZW50IHwgTW91c2VFdmVudD47XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHZpZXdwb3J0IGhhcyBiZWVuIHNjcm9sbGVkIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGFuIGl0ZW0uICovXG4gICAgcmVhZG9ubHkgc2Nyb2xsOiBTdWJqZWN0PEV2ZW50PjtcbiAgICBjb25zdHJ1Y3Rvcihfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogYW55KTtcbiAgICAvKiogQWRkcyBhIGRyb3AgY29udGFpbmVyIHRvIHRoZSByZWdpc3RyeS4gKi9cbiAgICByZWdpc3RlckRyb3BDb250YWluZXIoZHJvcDogQyk6IHZvaWQ7XG4gICAgLyoqIEFkZHMgYSBkcmFnIGl0ZW0gaW5zdGFuY2UgdG8gdGhlIHJlZ2lzdHJ5LiAqL1xuICAgIHJlZ2lzdGVyRHJhZ0l0ZW0oZHJhZzogSSk6IHZvaWQ7XG4gICAgLyoqIFJlbW92ZXMgYSBkcm9wIGNvbnRhaW5lciBmcm9tIHRoZSByZWdpc3RyeS4gKi9cbiAgICByZW1vdmVEcm9wQ29udGFpbmVyKGRyb3A6IEMpOiB2b2lkO1xuICAgIC8qKiBSZW1vdmVzIGEgZHJhZyBpdGVtIGluc3RhbmNlIGZyb20gdGhlIHJlZ2lzdHJ5LiAqL1xuICAgIHJlbW92ZURyYWdJdGVtKGRyYWc6IEkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZHJhZ2dpbmcgc2VxdWVuY2UgZm9yIGEgZHJhZyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gZHJhZyBEcmFnIGluc3RhbmNlIHdoaWNoIGlzIGJlaW5nIGRyYWdnZWQuXG4gICAgICogQHBhcmFtIGV2ZW50IEV2ZW50IHRoYXQgaW5pdGlhdGVkIHRoZSBkcmFnZ2luZy5cbiAgICAgKi9cbiAgICBzdGFydERyYWdnaW5nKGRyYWc6IEksIGV2ZW50OiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgLyoqIFN0b3BzIGRyYWdnaW5nIGEgZHJhZyBpdGVtIGluc3RhbmNlLiAqL1xuICAgIHN0b3BEcmFnZ2luZyhkcmFnOiBJKTogdm9pZDtcbiAgICAvKiogR2V0cyB3aGV0aGVyIGEgZHJhZyBpdGVtIGluc3RhbmNlIGlzIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLiAqL1xuICAgIGlzRHJhZ2dpbmcoZHJhZzogSSk6IGJvb2xlYW47XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lciB0aGF0IHdpbGwgcHJldmVudCB0aGUgZGVmYXVsdCBicm93c2VyIGFjdGlvbiB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZy5cbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgd2hvc2UgZGVmYXVsdCBhY3Rpb24gc2hvdWxkIGJlIHByZXZlbnRlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmV2ZW50RGVmYXVsdFdoaWxlRHJhZ2dpbmc7XG4gICAgLyoqIENsZWFycyBvdXQgdGhlIGdsb2JhbCBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYGRvY3VtZW50YC4gKi9cbiAgICBwcml2YXRlIF9jbGVhckdsb2JhbExpc3RlbmVycztcbn1cbiJdfQ==