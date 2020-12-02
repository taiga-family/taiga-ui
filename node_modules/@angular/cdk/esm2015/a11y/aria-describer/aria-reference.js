/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/aria-describer/aria-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * IDs are delimited by an empty space, as per the spec.
 * @type {?}
 */
const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
export function addAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    if (ids.some((/**
     * @param {?} existingId
     * @return {?}
     */
    existingId => existingId.trim() == id.trim()))) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
export function removeAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    /** @type {?} */
    const filteredIds = ids.filter((/**
     * @param {?} val
     * @return {?}
     */
    val => val != id.trim()));
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
export function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace delimited) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpYS1yZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvYXJpYS1kZXNjcmliZXIvYXJpYS1yZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQVNNLFlBQVksR0FBRyxHQUFHOzs7Ozs7Ozs7QUFNeEIsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEVBQVcsRUFBRSxJQUFZLEVBQUUsRUFBVTs7VUFDakUsR0FBRyxHQUFHLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSTs7OztJQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxFQUFFO1FBQUUsT0FBTztLQUFFO0lBQ3ZFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFcEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7Ozs7Ozs7OztBQU1ELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxFQUFXLEVBQUUsSUFBWSxFQUFFLEVBQVU7O1VBQ3BFLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDOztVQUNuQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU07Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUM7SUFFdkQsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN2RDtTQUFNO1FBQ0wsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjtBQUNILENBQUM7Ozs7Ozs7O0FBTUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEVBQVcsRUFBRSxJQUFZO0lBQzNELHVGQUF1RjtJQUN2RixPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIElEcyBhcmUgZGVsaW1pdGVkIGJ5IGFuIGVtcHR5IHNwYWNlLCBhcyBwZXIgdGhlIHNwZWMuICovXG5jb25zdCBJRF9ERUxJTUlURVIgPSAnICc7XG5cbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gSUQgdG8gdGhlIHNwZWNpZmllZCBBUklBIGF0dHJpYnV0ZSBvbiBhbiBlbGVtZW50LlxuICogVXNlZCBmb3IgYXR0cmlidXRlcyBzdWNoIGFzIGFyaWEtbGFiZWxsZWRieSwgYXJpYS1vd25zLCBldGMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcmlhUmVmZXJlbmNlZElkKGVsOiBFbGVtZW50LCBhdHRyOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgaWRzID0gZ2V0QXJpYVJlZmVyZW5jZUlkcyhlbCwgYXR0cik7XG4gIGlmIChpZHMuc29tZShleGlzdGluZ0lkID0+IGV4aXN0aW5nSWQudHJpbSgpID09IGlkLnRyaW0oKSkpIHsgcmV0dXJuOyB9XG4gIGlkcy5wdXNoKGlkLnRyaW0oKSk7XG5cbiAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIGlkcy5qb2luKElEX0RFTElNSVRFUikpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGdpdmVuIElEIGZyb20gdGhlIHNwZWNpZmllZCBBUklBIGF0dHJpYnV0ZSBvbiBhbiBlbGVtZW50LlxuICogVXNlZCBmb3IgYXR0cmlidXRlcyBzdWNoIGFzIGFyaWEtbGFiZWxsZWRieSwgYXJpYS1vd25zLCBldGMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBcmlhUmVmZXJlbmNlZElkKGVsOiBFbGVtZW50LCBhdHRyOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgaWRzID0gZ2V0QXJpYVJlZmVyZW5jZUlkcyhlbCwgYXR0cik7XG4gIGNvbnN0IGZpbHRlcmVkSWRzID0gaWRzLmZpbHRlcih2YWwgPT4gdmFsICE9IGlkLnRyaW0oKSk7XG5cbiAgaWYgKGZpbHRlcmVkSWRzLmxlbmd0aCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBmaWx0ZXJlZElkcy5qb2luKElEX0RFTElNSVRFUikpO1xuICB9IGVsc2Uge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3Qgb2YgSURzIHJlZmVyZW5jZWQgYnkgdGhlIGdpdmVuIEFSSUEgYXR0cmlidXRlIG9uIGFuIGVsZW1lbnQuXG4gKiBVc2VkIGZvciBhdHRyaWJ1dGVzIHN1Y2ggYXMgYXJpYS1sYWJlbGxlZGJ5LCBhcmlhLW93bnMsIGV0Yy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyaWFSZWZlcmVuY2VJZHMoZWw6IEVsZW1lbnQsIGF0dHI6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgLy8gR2V0IHN0cmluZyBhcnJheSBvZiBhbGwgaW5kaXZpZHVhbCBpZHMgKHdoaXRlc3BhY2UgZGVsaW1pdGVkKSBpbiB0aGUgYXR0cmlidXRlIHZhbHVlXG4gIHJldHVybiAoZWwuZ2V0QXR0cmlidXRlKGF0dHIpIHx8ICcnKS5tYXRjaCgvXFxTKy9nKSB8fCBbXTtcbn1cbiJdfQ==