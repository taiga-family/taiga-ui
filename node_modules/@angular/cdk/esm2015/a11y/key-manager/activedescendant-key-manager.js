/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/activedescendant-key-manager.ts
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
 * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
 * Each item must know how to style itself as active or inactive and whether or not it is
 * currently disabled.
 * @record
 */
export function Highlightable() { }
if (false) {
    /**
     * Applies the styles for an active item to this item.
     * @return {?}
     */
    Highlightable.prototype.setActiveStyles = function () { };
    /**
     * Applies the styles for an inactive item to this item.
     * @return {?}
     */
    Highlightable.prototype.setInactiveStyles = function () { };
}
/**
 * @template T
 */
export class ActiveDescendantKeyManager extends ListKeyManager {
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlZGVzY2VuZGFudC1rZXktbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9rZXktbWFuYWdlci9hY3RpdmVkZXNjZW5kYW50LWtleS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPeEUsbUNBTUM7Ozs7OztJQUpDLDBEQUF3Qjs7Ozs7SUFHeEIsNERBQTBCOzs7OztBQUc1QixNQUFNLE9BQU8sMEJBQThCLFNBQVEsY0FBaUM7Ozs7O0lBa0JsRixhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xpc3RLZXlNYW5hZ2VyLCBMaXN0S2V5TWFuYWdlck9wdGlvbn0gZnJvbSAnLi9saXN0LWtleS1tYW5hZ2VyJztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBpbnRlcmZhY2UgZm9yIGhpZ2hsaWdodGFibGUgaXRlbXMgKHVzZWQgYnkgdGhlIEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyKS5cbiAqIEVhY2ggaXRlbSBtdXN0IGtub3cgaG93IHRvIHN0eWxlIGl0c2VsZiBhcyBhY3RpdmUgb3IgaW5hY3RpdmUgYW5kIHdoZXRoZXIgb3Igbm90IGl0IGlzXG4gKiBjdXJyZW50bHkgZGlzYWJsZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGlnaGxpZ2h0YWJsZSBleHRlbmRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uIHtcbiAgLyoqIEFwcGxpZXMgdGhlIHN0eWxlcyBmb3IgYW4gYWN0aXZlIGl0ZW0gdG8gdGhpcyBpdGVtLiAqL1xuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZDtcblxuICAvKiogQXBwbGllcyB0aGUgc3R5bGVzIGZvciBhbiBpbmFjdGl2ZSBpdGVtIHRvIHRoaXMgaXRlbS4gKi9cbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPFQ+IGV4dGVuZHMgTGlzdEtleU1hbmFnZXI8SGlnaGxpZ2h0YWJsZSAmIFQ+IHtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgYWRkcyB0aGVcbiAgICogYWN0aXZlIHN0eWxlcyB0byB0aGUgbmV3bHkgYWN0aXZlIGl0ZW0uIEFsc28gcmVtb3ZlcyBhY3RpdmUgc3R5bGVzXG4gICAqIGZyb20gdGhlIHByZXZpb3VzbHkgYWN0aXZlIGl0ZW0uXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgaXRlbSB0byBiZSBzZXQgYXMgYWN0aXZlLlxuICAgKi9cbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGl0ZW0gdG8gdGhlIHNwZWNpZmllZCBvbmUgYW5kIGFkZHMgdGhlXG4gICAqIGFjdGl2ZSBzdHlsZXMgdG8gdGhlIGl0LiBBbHNvIHJlbW92ZXMgYWN0aXZlIHN0eWxlcyBmcm9tIHRoZVxuICAgKiBwcmV2aW91c2x5IGFjdGl2ZSBpdGVtLlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGJlIHNldCBhcyBhY3RpdmUuXG4gICAqL1xuICBzZXRBY3RpdmVJdGVtKGl0ZW06IFQpOiB2b2lkO1xuXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0pIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgIH1cbiAgICBzdXBlci5zZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==