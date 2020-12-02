/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/context.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This property will be monkey-patched on elements, components and directives
 * @type {?}
 */
export const MONKEY_PATCH_KEY_NAME = '__ngContext__';
/**
 * The internal view context which is specific to a given DOM element, directive or
 * component instance. Each value in here (besides the LView and element node details)
 * can be present, null or undefined. If undefined then it implies the value has not been
 * looked up yet, otherwise, if null, then a lookup was executed and nothing was found.
 *
 * Each value will get filled when the respective value is examined within the getContext
 * function. The component, element and each directive instance will share the same instance
 * of the context.
 * @record
 */
export function LContext() { }
if (false) {
    /**
     * The component's parent view data.
     * @type {?}
     */
    LContext.prototype.lView;
    /**
     * The index instance of the node.
     * @type {?}
     */
    LContext.prototype.nodeIndex;
    /**
     * The instance of the DOM node that is attached to the lNode.
     * @type {?}
     */
    LContext.prototype.native;
    /**
     * The instance of the Component node.
     * @type {?}
     */
    LContext.prototype.component;
    /**
     * The list of active directives that exist on this element.
     * @type {?}
     */
    LContext.prototype.directives;
    /**
     * The map of local references (local reference name => element or directive instance) that exist
     * on this element.
     * @type {?}
     */
    LContext.prototype.localRefs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxNQUFNLE9BQU8scUJBQXFCLEdBQUcsZUFBZTs7Ozs7Ozs7Ozs7O0FBWXBELDhCQStCQzs7Ozs7O0lBM0JDLHlCQUFhOzs7OztJQUtiLDZCQUFrQjs7Ozs7SUFLbEIsMEJBQWM7Ozs7O0lBS2QsNkJBQTZCOzs7OztJQUs3Qiw4QkFBaUM7Ozs7OztJQU1qQyw2QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtSTm9kZX0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQge0xWaWV3fSBmcm9tICcuL3ZpZXcnO1xuXG4vKipcbiAqIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBtb25rZXktcGF0Y2hlZCBvbiBlbGVtZW50cywgY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlc1xuICovXG5leHBvcnQgY29uc3QgTU9OS0VZX1BBVENIX0tFWV9OQU1FID0gJ19fbmdDb250ZXh0X18nO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCB2aWV3IGNvbnRleHQgd2hpY2ggaXMgc3BlY2lmaWMgdG8gYSBnaXZlbiBET00gZWxlbWVudCwgZGlyZWN0aXZlIG9yXG4gKiBjb21wb25lbnQgaW5zdGFuY2UuIEVhY2ggdmFsdWUgaW4gaGVyZSAoYmVzaWRlcyB0aGUgTFZpZXcgYW5kIGVsZW1lbnQgbm9kZSBkZXRhaWxzKVxuICogY2FuIGJlIHByZXNlbnQsIG51bGwgb3IgdW5kZWZpbmVkLiBJZiB1bmRlZmluZWQgdGhlbiBpdCBpbXBsaWVzIHRoZSB2YWx1ZSBoYXMgbm90IGJlZW5cbiAqIGxvb2tlZCB1cCB5ZXQsIG90aGVyd2lzZSwgaWYgbnVsbCwgdGhlbiBhIGxvb2t1cCB3YXMgZXhlY3V0ZWQgYW5kIG5vdGhpbmcgd2FzIGZvdW5kLlxuICpcbiAqIEVhY2ggdmFsdWUgd2lsbCBnZXQgZmlsbGVkIHdoZW4gdGhlIHJlc3BlY3RpdmUgdmFsdWUgaXMgZXhhbWluZWQgd2l0aGluIHRoZSBnZXRDb250ZXh0XG4gKiBmdW5jdGlvbi4gVGhlIGNvbXBvbmVudCwgZWxlbWVudCBhbmQgZWFjaCBkaXJlY3RpdmUgaW5zdGFuY2Ugd2lsbCBzaGFyZSB0aGUgc2FtZSBpbnN0YW5jZVxuICogb2YgdGhlIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTENvbnRleHQge1xuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCdzIHBhcmVudCB2aWV3IGRhdGEuXG4gICAqL1xuICBsVmlldzogTFZpZXc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBpbnN0YW5jZSBvZiB0aGUgbm9kZS5cbiAgICovXG4gIG5vZGVJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5zdGFuY2Ugb2YgdGhlIERPTSBub2RlIHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIGxOb2RlLlxuICAgKi9cbiAgbmF0aXZlOiBSTm9kZTtcblxuICAvKipcbiAgICogVGhlIGluc3RhbmNlIG9mIHRoZSBDb21wb25lbnQgbm9kZS5cbiAgICovXG4gIGNvbXBvbmVudDoge318bnVsbHx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGFjdGl2ZSBkaXJlY3RpdmVzIHRoYXQgZXhpc3Qgb24gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgZGlyZWN0aXZlczogYW55W118bnVsbHx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgb2YgbG9jYWwgcmVmZXJlbmNlcyAobG9jYWwgcmVmZXJlbmNlIG5hbWUgPT4gZWxlbWVudCBvciBkaXJlY3RpdmUgaW5zdGFuY2UpIHRoYXQgZXhpc3RcbiAgICogb24gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgbG9jYWxSZWZzOiB7W2tleTogc3RyaW5nXTogYW55fXxudWxsfHVuZGVmaW5lZDtcbn1cbiJdfQ==