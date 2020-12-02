/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/focus-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ListKeyManager } from './list-key-manager';
/**
 * This is the interface for focusable items (used by the FocusKeyManager).
 * Each item must know how to focus itself, whether or not it is currently disabled
 * and be able to supply its label.
 * @record
 */
export function FocusableOption() { }
if (false) {
    /**
     * Focuses the `FocusableOption`.
     * @param {?=} origin
     * @return {?}
     */
    FocusableOption.prototype.focus = function (origin) { };
}
/**
 * @template T
 */
export class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this._origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    setFocusOrigin(origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FocusKeyManager.prototype._origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMta2V5LW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkva2V5LW1hbmFnZXIvZm9jdXMta2V5LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBdUIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVF4RSxxQ0FHQzs7Ozs7OztJQURDLHdEQUFrQzs7Ozs7QUFHcEMsTUFBTSxPQUFPLGVBQW1CLFNBQVEsY0FBbUM7SUFBM0U7O1FBQ1UsWUFBTyxHQUFnQixTQUFTLENBQUM7SUErQjNDLENBQUM7Ozs7Ozs7O0lBekJDLGNBQWMsQ0FBQyxNQUFtQjtRQUNoQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7OztJQWVELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FDRjs7Ozs7O0lBL0JDLGtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xpc3RLZXlNYW5hZ2VyLCBMaXN0S2V5TWFuYWdlck9wdGlvbn0gZnJvbSAnLi9saXN0LWtleS1tYW5hZ2VyJztcbmltcG9ydCB7Rm9jdXNPcmlnaW59IGZyb20gJy4uL2ZvY3VzLW1vbml0b3IvZm9jdXMtbW9uaXRvcic7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgaW50ZXJmYWNlIGZvciBmb2N1c2FibGUgaXRlbXMgKHVzZWQgYnkgdGhlIEZvY3VzS2V5TWFuYWdlcikuXG4gKiBFYWNoIGl0ZW0gbXVzdCBrbm93IGhvdyB0byBmb2N1cyBpdHNlbGYsIHdoZXRoZXIgb3Igbm90IGl0IGlzIGN1cnJlbnRseSBkaXNhYmxlZFxuICogYW5kIGJlIGFibGUgdG8gc3VwcGx5IGl0cyBsYWJlbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb2N1c2FibGVPcHRpb24gZXh0ZW5kcyBMaXN0S2V5TWFuYWdlck9wdGlvbiB7XG4gIC8qKiBGb2N1c2VzIHRoZSBgRm9jdXNhYmxlT3B0aW9uYC4gKi9cbiAgZm9jdXMob3JpZ2luPzogRm9jdXNPcmlnaW4pOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRm9jdXNLZXlNYW5hZ2VyPFQ+IGV4dGVuZHMgTGlzdEtleU1hbmFnZXI8Rm9jdXNhYmxlT3B0aW9uICYgVD4ge1xuICBwcml2YXRlIF9vcmlnaW46IEZvY3VzT3JpZ2luID0gJ3Byb2dyYW0nO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBmb2N1cyBvcmlnaW4gdGhhdCB3aWxsIGJlIHBhc3NlZCBpbiB0byB0aGUgaXRlbXMgZm9yIGFueSBzdWJzZXF1ZW50IGBmb2N1c2AgY2FsbHMuXG4gICAqIEBwYXJhbSBvcmlnaW4gRm9jdXMgb3JpZ2luIHRvIGJlIHVzZWQgd2hlbiBmb2N1c2luZyBpdGVtcy5cbiAgICovXG4gIHNldEZvY3VzT3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiB0aGlzIHtcbiAgICB0aGlzLl9vcmlnaW4gPSBvcmlnaW47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZFxuICAgKiBpbmRleCBhbmQgZm9jdXNlcyB0aGUgbmV3bHkgYWN0aXZlIGl0ZW0uXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgaXRlbSB0byBiZSBzZXQgYXMgYWN0aXZlLlxuICAgKi9cbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGl0ZW0gdGhhdCBpcyBzcGVjaWZpZWQgYW5kIGZvY3VzZXMgaXQuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUl0ZW0oaXRlbTogVCk6IHZvaWQ7XG5cbiAgc2V0QWN0aXZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRBY3RpdmVJdGVtKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbSkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLmZvY3VzKHRoaXMuX29yaWdpbik7XG4gICAgfVxuICB9XG59XG4iXX0=