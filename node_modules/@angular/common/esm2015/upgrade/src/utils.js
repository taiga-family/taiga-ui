/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/upgrade/src/utils.ts
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
 * @param {?} val
 * @param {?} prefix
 * @return {?}
 */
export function stripPrefix(val, prefix) {
    return val.startsWith(prefix) ? val.substring(prefix.length) : val;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    else if (!a || !b) {
        return false;
    }
    else {
        try {
            if ((a.prototype !== b.prototype) || (Array.isArray(a) && Array.isArray(b))) {
                return false;
            }
            return JSON.stringify(a) === JSON.stringify(b);
        }
        catch (e) {
            return false;
        }
    }
}
/**
 * @param {?} el
 * @return {?}
 */
export function isAnchor(el) {
    return ((/** @type {?} */ (el))).href !== undefined;
}
/**
 * @template T
 * @param {?} obj
 * @return {?}
 */
export function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vdXBncmFkZS9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQVcsRUFBRSxNQUFjO0lBQ3JELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQU0sRUFBRSxDQUFNO0lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDO0tBQ2I7U0FBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLElBQUk7WUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0UsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsRUFBa0M7SUFDekQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7QUFDcEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBVSxHQUFRO0lBQ3pDLDJDQUEyQztJQUMzQyxxRUFBcUU7SUFDckUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwUHJlZml4KHZhbDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWwuc3RhcnRzV2l0aChwcmVmaXgpID8gdmFsLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKSA6IHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKCFhIHx8ICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgfHwgKEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2hvcihlbDogKE5vZGUmUGFyZW50Tm9kZSl8RWxlbWVudHxudWxsKTogZWwgaXMgSFRNTEFuY2hvckVsZW1lbnQge1xuICByZXR1cm4gKDxIVE1MQW5jaG9yRWxlbWVudD5lbCkuaHJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlPFQgPSBhbnk+KG9iajogYW55KTogb2JqIGlzIFByb21pc2U8VD4ge1xuICAvLyBhbGxvdyBhbnkgUHJvbWlzZS9BKyBjb21wbGlhbnQgdGhlbmFibGUuXG4gIC8vIEl0J3MgdXAgdG8gdGhlIGNhbGxlciB0byBlbnN1cmUgdGhhdCBvYmoudGhlbiBjb25mb3JtcyB0byB0aGUgc3BlY1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuIl19