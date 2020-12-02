/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/** Event options that can be used to bind an active, capturing event. */
var activeCapturingEventOptions = normalizePassiveListenerOptions({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /** Registered drop container instances. */
        this._dropInstances = new Set();
        /** Registered drag item instances. */
        this._dragInstances = new Set();
        /** Drag item instances that are currently being dragged. */
        this._activeDragInstances = new Set();
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new Subject();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new Subject();
        /** Emits when the viewport has been scrolled while the user is dragging an item. */
        this.scroll = new Subject();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    DragDropRegistry.prototype.registerDropContainer = function (drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    DragDropRegistry.prototype.registerDragItem = function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    DragDropRegistry.prototype.removeDropContainer = function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    DragDropRegistry.prototype.removeDragItem = function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    DragDropRegistry.prototype.startDragging = function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            var isTouchEvent = event.type.startsWith('touch');
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next(e); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next(e); },
                options: true
            })
                .set('scroll', {
                handler: function (e) { return _this.scroll.next(e); },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    DragDropRegistry.prototype.stopDragging = function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    DragDropRegistry.prototype.isDragging = function (drag) {
        return this._activeDragInstances.has(drag);
    };
    DragDropRegistry.prototype.ngOnDestroy = function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    DragDropRegistry.prototype._clearGlobalListeners = function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DragDropRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.DOCUMENT)); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());
export { DragDropRegistry };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLXJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZHJhZy1kcm9wLXJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFhLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBRTdCLHlFQUF5RTtBQUN6RSxJQUFNLDJCQUEyQixHQUFHLCtCQUErQixDQUFDO0lBQ2xFLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUM7QUFFSDs7OztHQUlHO0FBQ0gsa0dBQWtHO0FBQ2xHLGdHQUFnRztBQUNoRyw0RUFBNEU7QUFDNUU7SUFrQ0UsMEJBQ1UsT0FBZSxFQUNMLFNBQWM7UUFGbEMsaUJBSUM7UUFIUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBL0J6QiwyQ0FBMkM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBSyxDQUFDO1FBRXRDLHNDQUFzQztRQUM5QixtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFLLENBQUM7UUFFdEMsNERBQTREO1FBQ3BELHlCQUFvQixHQUFHLElBQUksR0FBRyxFQUFLLENBQUM7UUFFNUMsNkVBQTZFO1FBQ3JFLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUc5QixDQUFDO1FBRUw7OztXQUdHO1FBQ00sZ0JBQVcsR0FBcUMsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFFaEc7OztXQUdHO1FBQ00sY0FBUyxHQUFxQyxJQUFJLE9BQU8sRUFBMkIsQ0FB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OzsyQkEvRHBCO0NBd01DLEFBN0tELElBNktDO1NBNUtZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7bm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBFdmVudCBvcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYmluZCBhbiBhY3RpdmUsIGNhcHR1cmluZyBldmVudC4gKi9cbmNvbnN0IGFjdGl2ZUNhcHR1cmluZ0V2ZW50T3B0aW9ucyA9IG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoe1xuICBwYXNzaXZlOiBmYWxzZSxcbiAgY2FwdHVyZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGtlZXBzIHRyYWNrIG9mIGFsbCB0aGUgZHJhZyBpdGVtIGFuZCBkcm9wIGNvbnRhaW5lclxuICogaW5zdGFuY2VzLCBhbmQgbWFuYWdlcyBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBgZG9jdW1lbnRgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG4vLyBOb3RlOiB0aGlzIGNsYXNzIGlzIGdlbmVyaWMsIHJhdGhlciB0aGFuIHJlZmVyZW5jaW5nIENka0RyYWcgYW5kIENka0Ryb3BMaXN0IGRpcmVjdGx5LCBpbiBvcmRlclxuLy8gdG8gYXZvaWQgY2lyY3VsYXIgaW1wb3J0cy4gSWYgd2Ugd2VyZSB0byByZWZlcmVuY2UgdGhlbSBoZXJlLCBpbXBvcnRpbmcgdGhlIHJlZ2lzdHJ5IGludG8gdGhlXG4vLyBjbGFzc2VzIHRoYXQgYXJlIHJlZ2lzdGVyaW5nIHRoZW1zZWx2ZXMgd2lsbCBpbnRyb2R1Y2UgYSBjaXJjdWxhciBpbXBvcnQuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFJlZ2lzdHJ5PEksIEM+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKiBSZWdpc3RlcmVkIGRyb3AgY29udGFpbmVyIGluc3RhbmNlcy4gKi9cbiAgcHJpdmF0ZSBfZHJvcEluc3RhbmNlcyA9IG5ldyBTZXQ8Qz4oKTtcblxuICAvKiogUmVnaXN0ZXJlZCBkcmFnIGl0ZW0gaW5zdGFuY2VzLiAqL1xuICBwcml2YXRlIF9kcmFnSW5zdGFuY2VzID0gbmV3IFNldDxJPigpO1xuXG4gIC8qKiBEcmFnIGl0ZW0gaW5zdGFuY2VzIHRoYXQgYXJlIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLiAqL1xuICBwcml2YXRlIF9hY3RpdmVEcmFnSW5zdGFuY2VzID0gbmV3IFNldDxJPigpO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZXZlbnQgbGlzdGVuZXJzIHRoYXQgd2UndmUgYm91bmQgdG8gdGhlIGBkb2N1bWVudGAuICovXG4gIHByaXZhdGUgX2dsb2JhbExpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCB7XG4gICAgaGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcbiAgICBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuXG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBgdG91Y2htb3ZlYCBvciBgbW91c2Vtb3ZlYCBldmVudHMgdGhhdCBhcmUgZGlzcGF0Y2hlZFxuICAgKiB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZyBhIGRyYWcgaXRlbSBpbnN0YW5jZS5cbiAgICovXG4gIHJlYWRvbmx5IHBvaW50ZXJNb3ZlOiBTdWJqZWN0PFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgYHRvdWNoZW5kYCBvciBgbW91c2V1cGAgZXZlbnRzIHRoYXQgYXJlIGRpc3BhdGNoZWRcbiAgICogd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSBkcmFnIGl0ZW0gaW5zdGFuY2UuXG4gICAqL1xuICByZWFkb25seSBwb2ludGVyVXA6IFN1YmplY3Q8VG91Y2hFdmVudCB8IE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8VG91Y2hFdmVudCB8IE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHZpZXdwb3J0IGhhcyBiZWVuIHNjcm9sbGVkIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGFuIGl0ZW0uICovXG4gIHJlYWRvbmx5IHNjcm9sbDogU3ViamVjdDxFdmVudD4gPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gX2RvY3VtZW50O1xuICB9XG5cbiAgLyoqIEFkZHMgYSBkcm9wIGNvbnRhaW5lciB0byB0aGUgcmVnaXN0cnkuICovXG4gIHJlZ2lzdGVyRHJvcENvbnRhaW5lcihkcm9wOiBDKSB7XG4gICAgaWYgKCF0aGlzLl9kcm9wSW5zdGFuY2VzLmhhcyhkcm9wKSkge1xuICAgICAgdGhpcy5fZHJvcEluc3RhbmNlcy5hZGQoZHJvcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEFkZHMgYSBkcmFnIGl0ZW0gaW5zdGFuY2UgdG8gdGhlIHJlZ2lzdHJ5LiAqL1xuICByZWdpc3RlckRyYWdJdGVtKGRyYWc6IEkpIHtcbiAgICB0aGlzLl9kcmFnSW5zdGFuY2VzLmFkZChkcmFnKTtcblxuICAgIC8vIFRoZSBgdG91Y2htb3ZlYCBldmVudCBnZXRzIGJvdW5kIG9uY2UsIGFoZWFkIG9mIHRpbWUsIGJlY2F1c2UgV2ViS2l0XG4gICAgLy8gd29uJ3QgcHJldmVudERlZmF1bHQgb24gYSBkeW5hbWljYWxseS1hZGRlZCBgdG91Y2htb3ZlYCBsaXN0ZW5lci5cbiAgICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4NDI1MC5cbiAgICBpZiAodGhpcy5fZHJhZ0luc3RhbmNlcy5zaXplID09PSAxKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBUaGUgZXZlbnQgaGFuZGxlciBoYXMgdG8gYmUgZXhwbGljaXRseSBhY3RpdmUsXG4gICAgICAgIC8vIGJlY2F1c2UgbmV3ZXIgYnJvd3NlcnMgbWFrZSBpdCBwYXNzaXZlIGJ5IGRlZmF1bHQuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX3ByZXZlbnREZWZhdWx0V2hpbGVEcmFnZ2luZyxcbiAgICAgICAgICAgIGFjdGl2ZUNhcHR1cmluZ0V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhIGRyb3AgY29udGFpbmVyIGZyb20gdGhlIHJlZ2lzdHJ5LiAqL1xuICByZW1vdmVEcm9wQ29udGFpbmVyKGRyb3A6IEMpIHtcbiAgICB0aGlzLl9kcm9wSW5zdGFuY2VzLmRlbGV0ZShkcm9wKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGEgZHJhZyBpdGVtIGluc3RhbmNlIGZyb20gdGhlIHJlZ2lzdHJ5LiAqL1xuICByZW1vdmVEcmFnSXRlbShkcmFnOiBJKSB7XG4gICAgdGhpcy5fZHJhZ0luc3RhbmNlcy5kZWxldGUoZHJhZyk7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcoZHJhZyk7XG5cbiAgICBpZiAodGhpcy5fZHJhZ0luc3RhbmNlcy5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9wcmV2ZW50RGVmYXVsdFdoaWxlRHJhZ2dpbmcsXG4gICAgICAgICAgYWN0aXZlQ2FwdHVyaW5nRXZlbnRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBkcmFnZ2luZyBzZXF1ZW5jZSBmb3IgYSBkcmFnIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gZHJhZyBEcmFnIGluc3RhbmNlIHdoaWNoIGlzIGJlaW5nIGRyYWdnZWQuXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCB0aGF0IGluaXRpYXRlZCB0aGUgZHJhZ2dpbmcuXG4gICAqL1xuICBzdGFydERyYWdnaW5nKGRyYWc6IEksIGV2ZW50OiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIC8vIERvIG5vdCBwcm9jZXNzIHRoZSBzYW1lIGRyYWcgdHdpY2UgdG8gYXZvaWQgbWVtb3J5IGxlYWtzIGFuZCByZWR1bmRhbnQgbGlzdGVuZXJzXG4gICAgaWYgKHRoaXMuX2FjdGl2ZURyYWdJbnN0YW5jZXMuaGFzKGRyYWcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlRHJhZ0luc3RhbmNlcy5hZGQoZHJhZyk7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlRHJhZ0luc3RhbmNlcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XG4gICAgICBjb25zdCBtb3ZlRXZlbnQgPSBpc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICAgICAgY29uc3QgdXBFdmVudCA9IGlzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XG5cbiAgICAgIC8vIFdlIGV4cGxpY2l0bHkgYmluZCBfX2FjdGl2ZV9fIGxpc3RlbmVycyBoZXJlLCBiZWNhdXNlIG5ld2VyIGJyb3dzZXJzIHdpbGwgZGVmYXVsdCB0b1xuICAgICAgLy8gcGFzc2l2ZSBvbmVzIGZvciBgbW91c2Vtb3ZlYCBhbmQgYHRvdWNobW92ZWAuIFRoZSBldmVudHMgbmVlZCB0byBiZSBhY3RpdmUsIGJlY2F1c2Ugd2VcbiAgICAgIC8vIHVzZSBgcHJldmVudERlZmF1bHRgIHRvIHByZXZlbnQgdGhlIHBhZ2UgZnJvbSBzY3JvbGxpbmcgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuXG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcnNcbiAgICAgICAgLnNldChtb3ZlRXZlbnQsIHtcbiAgICAgICAgICBoYW5kbGVyOiAoZTogRXZlbnQpID0+IHRoaXMucG9pbnRlck1vdmUubmV4dChlIGFzIFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSxcbiAgICAgICAgICBvcHRpb25zOiBhY3RpdmVDYXB0dXJpbmdFdmVudE9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgICAgLnNldCh1cEV2ZW50LCB7XG4gICAgICAgICAgaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB0aGlzLnBvaW50ZXJVcC5uZXh0KGUgYXMgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpLFxuICAgICAgICAgIG9wdGlvbnM6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLnNldCgnc2Nyb2xsJywge1xuICAgICAgICAgIGhhbmRsZXI6IChlOiBFdmVudCkgPT4gdGhpcy5zY3JvbGwubmV4dChlKSxcbiAgICAgICAgICAvLyBVc2UgY2FwdHVyaW5nIHNvIHRoYXQgd2UgcGljayB1cCBzY3JvbGwgY2hhbmdlcyBpbiBhbnkgc2Nyb2xsYWJsZSBub2RlcyB0aGF0IGFyZW4ndFxuICAgICAgICAgIC8vIHRoZSBkb2N1bWVudC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzE3MTQ0LlxuICAgICAgICAgIG9wdGlvbnM6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgZGVmYXVsdCBhY3Rpb24gb24gYG1vdXNlbW92ZWAgaXNuJ3QgZW5vdWdoIHRvIGRpc2FibGUgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgLy8gb24gU2FmYXJpIHNvIHdlIG5lZWQgdG8gcHJldmVudCB0aGUgc2VsZWN0aW9uIGV2ZW50IGFzIHdlbGwuIEFsdGVybmF0aXZlbHkgdGhpcyBjYW5cbiAgICAgICAgLy8gYmUgZG9uZSBieSBzZXR0aW5nIGB1c2VyLXNlbGVjdDogbm9uZWAgb24gdGhlIGBib2R5YCwgaG93ZXZlciBpdCBoYXMgY2F1c2VzIGEgc3R5bGVcbiAgICAgICAgLy8gcmVjYWxjdWxhdGlvbiB3aGljaCBjYW4gYmUgZXhwZW5zaXZlIG9uIHBhZ2VzIHdpdGggYSBsb3Qgb2YgZWxlbWVudHMuXG4gICAgICAgIC5zZXQoJ3NlbGVjdHN0YXJ0Jywge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMuX3ByZXZlbnREZWZhdWx0V2hpbGVEcmFnZ2luZyxcbiAgICAgICAgICBvcHRpb25zOiBhY3RpdmVDYXB0dXJpbmdFdmVudE9wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5mb3JFYWNoKChjb25maWcsIG5hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNvbmZpZy5oYW5kbGVyLCBjb25maWcub3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFN0b3BzIGRyYWdnaW5nIGEgZHJhZyBpdGVtIGluc3RhbmNlLiAqL1xuICBzdG9wRHJhZ2dpbmcoZHJhZzogSSkge1xuICAgIHRoaXMuX2FjdGl2ZURyYWdJbnN0YW5jZXMuZGVsZXRlKGRyYWcpO1xuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZURyYWdJbnN0YW5jZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5fY2xlYXJHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgZHJhZyBpdGVtIGluc3RhbmNlIGlzIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLiAqL1xuICBpc0RyYWdnaW5nKGRyYWc6IEkpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRHJhZ0luc3RhbmNlcy5oYXMoZHJhZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kcmFnSW5zdGFuY2VzLmZvckVhY2goaW5zdGFuY2UgPT4gdGhpcy5yZW1vdmVEcmFnSXRlbShpbnN0YW5jZSkpO1xuICAgIHRoaXMuX2Ryb3BJbnN0YW5jZXMuZm9yRWFjaChpbnN0YW5jZSA9PiB0aGlzLnJlbW92ZURyb3BDb250YWluZXIoaW5zdGFuY2UpKTtcbiAgICB0aGlzLl9jbGVhckdsb2JhbExpc3RlbmVycygpO1xuICAgIHRoaXMucG9pbnRlck1vdmUuY29tcGxldGUoKTtcbiAgICB0aGlzLnBvaW50ZXJVcC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RlbmVyIHRoYXQgd2lsbCBwcmV2ZW50IHRoZSBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgd2hvc2UgZGVmYXVsdCBhY3Rpb24gc2hvdWxkIGJlIHByZXZlbnRlZC5cbiAgICovXG4gIHByaXZhdGUgX3ByZXZlbnREZWZhdWx0V2hpbGVEcmFnZ2luZyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5fYWN0aXZlRHJhZ0luc3RhbmNlcy5zaXplKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhcnMgb3V0IHRoZSBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGBkb2N1bWVudGAuICovXG4gIHByaXZhdGUgX2NsZWFyR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5mb3JFYWNoKChjb25maWcsIG5hbWUpID0+IHtcbiAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgY29uZmlnLmhhbmRsZXIsIGNvbmZpZy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2dsb2JhbExpc3RlbmVycy5jbGVhcigpO1xuICB9XG59XG4iXX0=