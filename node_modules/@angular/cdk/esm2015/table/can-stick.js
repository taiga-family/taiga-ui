/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/can-stick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Interface for a mixin to provide a directive with a function that checks if the sticky input has
 * been changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @record
 */
export function CanStick() { }
if (false) {
    /**
     * Whether sticky positioning should be applied.
     * @type {?}
     */
    CanStick.prototype.sticky;
    /**
     * Whether the sticky input has changed since it was last checked.
     * @type {?}
     */
    CanStick.prototype._hasStickyChanged;
    /**
     * Whether the sticky value has changed since this was last called.
     * @return {?}
     */
    CanStick.prototype.hasStickyChanged = function () { };
    /**
     * Resets the dirty check for cases where the sticky state has been used without checking.
     * @return {?}
     */
    CanStick.prototype.resetStickyChanged = function () { };
}
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinHasStickyInput(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            this._hasStickyChanged = false;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */
        get sticky() { return this._sticky; }
        /**
         * @param {?} v
         * @return {?}
         */
        set sticky(v) {
            /** @type {?} */
            const prevValue = this._sticky;
            this._sticky = coerceBooleanProperty(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        hasStickyChanged() {
            /** @type {?} */
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLXN0aWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS9jYW4tc3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0FBVzVELDhCQVlDOzs7Ozs7SUFWQywwQkFBZ0I7Ozs7O0lBR2hCLHFDQUEyQjs7Ozs7SUFHM0Isc0RBQTRCOzs7OztJQUc1Qix3REFBMkI7Ozs7Ozs7Ozs7O0FBWTdCLE1BQU0sVUFBVSxtQkFBbUIsQ0FBNEIsSUFBTztJQUNwRSxPQUFPLEtBQU0sU0FBUSxJQUFJOzs7O1FBeUJ2QixZQUFZLEdBQUcsSUFBVztZQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBakI3QyxZQUFPLEdBQVksS0FBSyxDQUFDOzs7O1lBR3pCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQWNXLENBQUM7Ozs7O1FBdkIvQyxJQUFJLE1BQU0sS0FBYyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7OztRQUM5QyxJQUFJLE1BQU0sQ0FBQyxDQUFVOztrQkFDYixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEQsQ0FBQzs7Ozs7UUFPRCxnQkFBZ0I7O2tCQUNSLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixPQUFPLGdCQUFnQixDQUFDO1FBQzFCLENBQUM7Ozs7O1FBR0Qsa0JBQWtCO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztLQUdGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IHR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIG1peGluIHRvIHByb3ZpZGUgYSBkaXJlY3RpdmUgd2l0aCBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZSBzdGlja3kgaW5wdXQgaGFzXG4gKiBiZWVuIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZnVuY3Rpb24gd2FzIGNhbGxlZC4gRXNzZW50aWFsbHkgYWRkcyBhIGRpcnR5LWNoZWNrIHRvIHRoZVxuICogc3RpY2t5IHZhbHVlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhblN0aWNrIHtcbiAgLyoqIFdoZXRoZXIgc3RpY2t5IHBvc2l0aW9uaW5nIHNob3VsZCBiZSBhcHBsaWVkLiAqL1xuICBzdGlja3k6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0aWNreSBpbnB1dCBoYXMgY2hhbmdlZCBzaW5jZSBpdCB3YXMgbGFzdCBjaGVja2VkLiAqL1xuICBfaGFzU3RpY2t5Q2hhbmdlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc3RpY2t5IHZhbHVlIGhhcyBjaGFuZ2VkIHNpbmNlIHRoaXMgd2FzIGxhc3QgY2FsbGVkLiAqL1xuICBoYXNTdGlja3lDaGFuZ2VkKCk6IGJvb2xlYW47XG5cbiAgLyoqIFJlc2V0cyB0aGUgZGlydHkgY2hlY2sgZm9yIGNhc2VzIHdoZXJlIHRoZSBzdGlja3kgc3RhdGUgaGFzIGJlZW4gdXNlZCB3aXRob3V0IGNoZWNraW5nLiAqL1xuICByZXNldFN0aWNreUNoYW5nZWQoKTogdm9pZDtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCB0eXBlIENhblN0aWNrQ3RvciA9IENvbnN0cnVjdG9yPENhblN0aWNrPjtcblxuLyoqXG4gKiBNaXhpbiB0byBwcm92aWRlIGEgZGlyZWN0aXZlIHdpdGggYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGUgc3RpY2t5IGlucHV0IGhhcyBiZWVuXG4gKiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGZ1bmN0aW9uIHdhcyBjYWxsZWQuIEVzc2VudGlhbGx5IGFkZHMgYSBkaXJ0eS1jaGVjayB0byB0aGVcbiAqIHN0aWNreSB2YWx1ZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluSGFzU3RpY2t5SW5wdXQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENhblN0aWNrQ3RvciAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICAvKiogV2hldGhlciBzdGlja3kgcG9zaXRpb25pbmcgc2hvdWxkIGJlIGFwcGxpZWQuICovXG4gICAgZ2V0IHN0aWNreSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0aWNreTsgfVxuICAgIHNldCBzdGlja3kodjogYm9vbGVhbikge1xuICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5fc3RpY2t5O1xuICAgICAgdGhpcy5fc3RpY2t5ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgICAgdGhpcy5faGFzU3RpY2t5Q2hhbmdlZCA9IHByZXZWYWx1ZSAhPT0gdGhpcy5fc3RpY2t5O1xuICAgIH1cbiAgICBfc3RpY2t5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc3RpY2t5IGlucHV0IGhhcyBjaGFuZ2VkIHNpbmNlIGl0IHdhcyBsYXN0IGNoZWNrZWQuICovXG4gICAgX2hhc1N0aWNreUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzdGlja3kgdmFsdWUgaGFzIGNoYW5nZWQgc2luY2UgdGhpcyB3YXMgbGFzdCBjYWxsZWQuICovXG4gICAgaGFzU3RpY2t5Q2hhbmdlZCgpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGhhc1N0aWNreUNoYW5nZWQgPSB0aGlzLl9oYXNTdGlja3lDaGFuZ2VkO1xuICAgICAgdGhpcy5faGFzU3RpY2t5Q2hhbmdlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGhhc1N0aWNreUNoYW5nZWQ7XG4gICAgfVxuXG4gICAgLyoqIFJlc2V0cyB0aGUgZGlydHkgY2hlY2sgZm9yIGNhc2VzIHdoZXJlIHRoZSBzdGlja3kgc3RhdGUgaGFzIGJlZW4gdXNlZCB3aXRob3V0IGNoZWNraW5nLiAqL1xuICAgIHJlc2V0U3RpY2t5Q2hhbmdlZCgpIHtcbiAgICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIl19