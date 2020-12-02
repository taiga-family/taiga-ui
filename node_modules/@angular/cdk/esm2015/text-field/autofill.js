/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/text-field/autofill.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform, normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Injectable, NgZone, Output, } from '@angular/core';
import { coerceElement } from '@angular/cdk/coercion';
import { EMPTY, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * Options to pass to the animationstart listener.
 * @type {?}
 */
const listenerOptions = normalizePassiveListenerOptions({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
export class AutofillMonitor {
    /**
     * @param {?} _platform
     * @param {?} _ngZone
     */
    constructor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
            return EMPTY;
        }
        /** @type {?} */
        const element = coerceElement(elementOrRef);
        /** @type {?} */
        const info = this._monitoredElements.get(element);
        if (info) {
            return info.subject.asObservable();
        }
        /** @type {?} */
        const result = new Subject();
        /** @type {?} */
        const cssClass = 'cdk-text-field-autofilled';
        /** @type {?} */
        const listener = (/** @type {?} */ (((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => result.next({ target: (/** @type {?} */ (event.target)), isAutofilled: true })));
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => result.next({ target: (/** @type {?} */ (event.target)), isAutofilled: false })));
            }
        }))));
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        }));
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: (/**
             * @return {?}
             */
            () => {
                element.removeEventListener('animationstart', listener, listenerOptions);
            })
        });
        return result.asObservable();
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    stopMonitoring(elementOrRef) {
        /** @type {?} */
        const element = coerceElement(elementOrRef);
        /** @type {?} */
        const info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._monitoredElements.forEach((/**
         * @param {?} _info
         * @param {?} element
         * @return {?}
         */
        (_info, element) => this.stopMonitoring(element)));
    }
}
AutofillMonitor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AutofillMonitor.ctorParameters = () => [
    { type: Platform },
    { type: NgZone }
];
/** @nocollapse */ AutofillMonitor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i0.NgZone)); }, token: AutofillMonitor, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutofillMonitor.prototype._monitoredElements;
    /**
     * @type {?}
     * @private
     */
    AutofillMonitor.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    AutofillMonitor.prototype._ngZone;
}
/**
 * A directive that can be used to monitor the autofill state of an input.
 */
export class CdkAutofill {
    /**
     * @param {?} _elementRef
     * @param {?} _autofillMonitor
     */
    constructor(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */
        this.cdkAutofill = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.cdkAutofill.emit(event)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    }
}
CdkAutofill.decorators = [
    { type: Directive, args: [{
                selector: '[cdkAutofill]',
            },] }
];
/** @nocollapse */
CdkAutofill.ctorParameters = () => [
    { type: ElementRef },
    { type: AutofillMonitor }
];
CdkAutofill.propDecorators = {
    cdkAutofill: [{ type: Output }]
};
if (false) {
    /**
     * Emits when the autofill state of the element changes.
     * @type {?}
     */
    CdkAutofill.prototype.cdkAutofill;
    /**
     * @type {?}
     * @private
     */
    CdkAutofill.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    CdkAutofill.prototype._autofillMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RleHQtZmllbGQvYXV0b2ZpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUdOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLEtBQUssRUFBYyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7TUFvQjFDLGVBQWUsR0FBRywrQkFBK0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQzs7Ozs7O0FBU3hFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUcxQixZQUFvQixTQUFtQixFQUFVLE9BQWU7UUFBNUMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGeEQsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7SUFFSCxDQUFDOzs7OztJQWdCcEUsT0FBTyxDQUFDLFlBQTJDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUVLLE9BQU8sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDOztjQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFakQsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7O2NBRUssTUFBTSxHQUFHLElBQUksT0FB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Ozs7SUFFMUQsb0NBQTJCOzs7OztJQUFFLGtDQUF1Qjs7Ozs7QUErRmxFLE1BQU0sT0FBTyxXQUFXOzs7OztJQUl0QixZQUFvQixXQUFvQyxFQUNwQyxnQkFBaUM7UUFEakMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Ozs7UUFIM0MsZ0JBQVcsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFHL0IsQ0FBQzs7OztJQUV6RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQjthQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QixTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQXZJQyxVQUFVO1lBNkk0QixlQUFlOzs7MEJBSHBELE1BQU07Ozs7Ozs7SUFBUCxrQ0FBdUY7Ozs7O0lBRTNFLGtDQUE0Qzs7Ozs7SUFDNUMsdUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm0sIG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0YWJsZSxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29lcmNlRWxlbWVudH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RU1QVFksIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5cbi8qKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgYW4gaW5wdXQgY2hhbmdlcy4gKi9cbmV4cG9ydCB0eXBlIEF1dG9maWxsRXZlbnQgPSB7XG4gIC8qKiBUaGUgZWxlbWVudCB3aG9zZSBhdXRvZmlsbCBzdGF0ZSBjaGFuZ2VzLiAqL1xuICB0YXJnZXQ6IEVsZW1lbnQ7XG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBhdXRvZmlsbGVkLiAqL1xuICBpc0F1dG9maWxsZWQ6IGJvb2xlYW47XG59O1xuXG5cbi8qKiBVc2VkIHRvIHRyYWNrIGluZm8gYWJvdXQgY3VycmVudGx5IG1vbml0b3JlZCBlbGVtZW50cy4gKi9cbnR5cGUgTW9uaXRvcmVkRWxlbWVudEluZm8gPSB7XG4gIHN1YmplY3Q6IFN1YmplY3Q8QXV0b2ZpbGxFdmVudD47XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xufTtcblxuXG4vKiogT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBhbmltYXRpb25zdGFydCBsaXN0ZW5lci4gKi9cbmNvbnN0IGxpc3RlbmVyT3B0aW9ucyA9IG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoe3Bhc3NpdmU6IHRydWV9KTtcblxuXG4vKipcbiAqIEFuIGluamVjdGFibGUgc2VydmljZSB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIGF1dG9maWxsIHN0YXRlIG9mIGFuIGlucHV0LlxuICogQmFzZWQgb24gdGhlIGZvbGxvd2luZyBibG9nIHBvc3Q6XG4gKiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBdXRvZmlsbE1vbml0b3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tb25pdG9yZWRFbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgTW9uaXRvcmVkRWxlbWVudEluZm8+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICAvKipcbiAgICogTW9uaXRvciBmb3IgY2hhbmdlcyBpbiB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgdGhlIGdpdmVuIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1vbml0b3IuXG4gICAqIEByZXR1cm4gQSBzdHJlYW0gb2YgYXV0b2ZpbGwgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIG1vbml0b3IoZWxlbWVudDogRWxlbWVudCk6IE9ic2VydmFibGU8QXV0b2ZpbGxFdmVudD47XG5cbiAgLyoqXG4gICAqIE1vbml0b3IgZm9yIGNoYW5nZXMgaW4gdGhlIGF1dG9maWxsIHN0YXRlIG9mIHRoZSBnaXZlbiBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtb25pdG9yLlxuICAgKiBAcmV0dXJuIEEgc3RyZWFtIG9mIGF1dG9maWxsIHN0YXRlIGNoYW5nZXMuXG4gICAqL1xuICBtb25pdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWY8RWxlbWVudD4pOiBPYnNlcnZhYmxlPEF1dG9maWxsRXZlbnQ+O1xuXG4gIG1vbml0b3IoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8QXV0b2ZpbGxFdmVudD4ge1xuICAgIGlmICghdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQoZWxlbWVudE9yUmVmKTtcbiAgICBjb25zdCBpbmZvID0gdGhpcy5fbW9uaXRvcmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuXG4gICAgaWYgKGluZm8pIHtcbiAgICAgIHJldHVybiBpbmZvLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFN1YmplY3Q8QXV0b2ZpbGxFdmVudD4oKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9ICdjZGstdGV4dC1maWVsZC1hdXRvZmlsbGVkJztcbiAgICBjb25zdCBsaXN0ZW5lciA9ICgoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSA9PiB7XG4gICAgICAvLyBBbmltYXRpb24gZXZlbnRzIGZpcmUgb24gaW5pdGlhbCBlbGVtZW50IHJlbmRlciwgd2UgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYXV0b2ZpbGxcbiAgICAgIC8vIENTUyBjbGFzcyB0byBtYWtlIHN1cmUgdGhpcyBpcyBhIHJlYWwgY2hhbmdlIGluIHN0YXRlLCBub3QganVzdCB0aGUgaW5pdGlhbCByZW5kZXIgYmVmb3JlXG4gICAgICAvLyB3ZSBmaXJlIG9mZiBldmVudHMuXG4gICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gJ2Nkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0JyAmJlxuICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiByZXN1bHQubmV4dCh7dGFyZ2V0OiBldmVudC50YXJnZXQgYXMgRWxlbWVudCwgaXNBdXRvZmlsbGVkOiB0cnVlfSkpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSAnY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kJyAmJlxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHJlc3VsdC5uZXh0KHt0YXJnZXQ6IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50LCBpc0F1dG9maWxsZWQ6IGZhbHNlfSkpO1xuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGxpc3RlbmVyLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX21vbml0b3JlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7XG4gICAgICBzdWJqZWN0OiByZXN1bHQsXG4gICAgICB1bmxpc3RlbjogKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgbGlzdGVuZXIsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbW9uaXRvcmluZyB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgdGhlIGdpdmVuIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHN0b3AgbW9uaXRvcmluZy5cbiAgICovXG4gIHN0b3BNb25pdG9yaW5nKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTdG9wIG1vbml0b3JpbmcgdGhlIGF1dG9maWxsIHN0YXRlIG9mIHRoZSBnaXZlbiBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzdG9wIG1vbml0b3JpbmcuXG4gICAqL1xuICBzdG9wTW9uaXRvcmluZyhlbGVtZW50OiBFbGVtZW50UmVmPEVsZW1lbnQ+KTogdm9pZDtcblxuICBzdG9wTW9uaXRvcmluZyhlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQoZWxlbWVudE9yUmVmKTtcbiAgICBjb25zdCBpbmZvID0gdGhpcy5fbW9uaXRvcmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuXG4gICAgaWYgKGluZm8pIHtcbiAgICAgIGluZm8udW5saXN0ZW4oKTtcbiAgICAgIGluZm8uc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2RrLXRleHQtZmllbGQtYXV0b2ZpbGxlZCcpO1xuICAgICAgdGhpcy5fbW9uaXRvcmVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX21vbml0b3JlZEVsZW1lbnRzLmZvckVhY2goKF9pbmZvLCBlbGVtZW50KSA9PiB0aGlzLnN0b3BNb25pdG9yaW5nKGVsZW1lbnQpKTtcbiAgfVxufVxuXG5cbi8qKiBBIGRpcmVjdGl2ZSB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIGF1dG9maWxsIHN0YXRlIG9mIGFuIGlucHV0LiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0F1dG9maWxsXScsXG59KVxuZXhwb3J0IGNsYXNzIENka0F1dG9maWxsIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgdGhlIGVsZW1lbnQgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIGNka0F1dG9maWxsOiBFdmVudEVtaXR0ZXI8QXV0b2ZpbGxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEF1dG9maWxsRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dG9maWxsTW9uaXRvcjogQXV0b2ZpbGxNb25pdG9yKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2F1dG9maWxsTW9uaXRvclxuICAgICAgLm1vbml0b3IodGhpcy5fZWxlbWVudFJlZilcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5jZGtBdXRvZmlsbC5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9hdXRvZmlsbE1vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cbn1cbiJdfQ==