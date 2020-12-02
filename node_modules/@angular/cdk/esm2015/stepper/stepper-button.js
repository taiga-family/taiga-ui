/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/stepper-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, HostListener, Input } from '@angular/core';
import { CdkStepper } from './stepper';
/**
 * Button that moves to the next step in a stepper workflow.
 */
export class CdkStepperNext {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.decorators = [
    { type: Directive, args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type',
                }
            },] }
];
/** @nocollapse */
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: Input }],
    _handleClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * Type of the next button. Defaults to "submit" if not specified.
     * @type {?}
     */
    CdkStepperNext.prototype.type;
    /** @type {?} */
    CdkStepperNext.prototype._stepper;
}
/**
 * Button that moves to the previous step in a stepper workflow.
 */
export class CdkStepperPrevious {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.decorators = [
    { type: Directive, args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type',
                }
            },] }
];
/** @nocollapse */
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: Input }],
    _handleClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * Type of the previous button. Defaults to "button" if not specified.
     * @type {?}
     */
    CdkStepperPrevious.prototype.type;
    /** @type {?} */
    CdkStepperPrevious.prototype._stepper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3N0ZXBwZXIvc3RlcHBlci1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7QUFTckMsTUFBTSxPQUFPLGNBQWM7Ozs7SUFJekIsWUFBbUIsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQUY5QixTQUFJLEdBQVcsUUFBUSxDQUFDO0lBRVMsQ0FBQzs7Ozs7Ozs7O0lBUTNDLFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGOzs7O1lBUk8sVUFBVTs7O21CQVdmLEtBQUs7MkJBU0wsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUFUckIsOEJBQWlDOztJQUVyQixrQ0FBMkI7Ozs7O0FBb0J6QyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBSTdCLFlBQW1CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7Ozs7UUFGOUIsU0FBSSxHQUFXLFFBQVEsQ0FBQztJQUVTLENBQUM7Ozs7Ozs7OztJQVEzQyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjs7OztZQWhDTyxVQUFVOzs7bUJBbUNmLEtBQUs7MkJBU0wsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUFUckIsa0NBQWlDOztJQUVyQixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJy4vc3RlcHBlcic7XG5cbi8qKiBCdXR0b24gdGhhdCBtb3ZlcyB0byB0aGUgbmV4dCBzdGVwIGluIGEgc3RlcHBlciB3b3JrZmxvdy4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltjZGtTdGVwcGVyTmV4dF0nLFxuICBob3N0OiB7XG4gICAgJ1t0eXBlXSc6ICd0eXBlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwcGVyTmV4dCB7XG4gIC8qKiBUeXBlIG9mIHRoZSBuZXh0IGJ1dHRvbi4gRGVmYXVsdHMgdG8gXCJzdWJtaXRcIiBpZiBub3Qgc3BlY2lmaWVkLiAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnc3VibWl0JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3N0ZXBwZXI6IENka1N0ZXBwZXIpIHt9XG5cbiAgLy8gV2UgaGF2ZSB0byB1c2UgYSBgSG9zdExpc3RlbmVyYCBoZXJlIGluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBJdnkgYW5kIFZpZXdFbmdpbmUuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIGJpbmRpbmdzIHdpbGwgYmUgbWVyZ2VkIHdoZW4gdGhpcyBjbGFzcyBpcyBleHRlbmRlZCwgd2hlcmVhcyBpblxuICAvLyBWaWV3RW5naW5lIHRoZXkncmUgb3ZlcndyaXR0ZW4uXG4gIC8vIFRPRE8oY3Jpc2JldG8pOiB3ZSBtb3ZlIHRoaXMgYmFjayBpbnRvIGBob3N0YCBvbmNlIEl2eSBpcyB0dXJuZWQgb24gYnkgZGVmYXVsdC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuX3N0ZXBwZXIubmV4dCgpO1xuICB9XG59XG5cbi8qKiBCdXR0b24gdGhhdCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bY2RrU3RlcHBlclByZXZpb3VzXScsXG4gIGhvc3Q6IHtcbiAgICAnW3R5cGVdJzogJ3R5cGUnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENka1N0ZXBwZXJQcmV2aW91cyB7XG4gIC8qKiBUeXBlIG9mIHRoZSBwcmV2aW91cyBidXR0b24uIERlZmF1bHRzIHRvIFwiYnV0dG9uXCIgaWYgbm90IHNwZWNpZmllZC4gKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2J1dHRvbic7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9zdGVwcGVyOiBDZGtTdGVwcGVyKSB7fVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLl9zdGVwcGVyLnByZXZpb3VzKCk7XG4gIH1cbn1cbiJdfQ==