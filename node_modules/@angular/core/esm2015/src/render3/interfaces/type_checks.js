/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/type_checks.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TYPE } from './container';
import { FLAGS } from './view';
/**
 * True if `value` is `LView`.
 * @param {?} value wrapped value of `RNode`, `LView`, `LContainer`
 * @return {?}
 */
export function isLView(value) {
    return Array.isArray(value) && typeof value[TYPE] === 'object';
}
/**
 * True if `value` is `LContainer`.
 * @param {?} value wrapped value of `RNode`, `LView`, `LContainer`
 * @return {?}
 */
export function isLContainer(value) {
    return Array.isArray(value) && value[TYPE] === true;
}
/**
 * @param {?} tNode
 * @return {?}
 */
export function isContentQueryHost(tNode) {
    return (tNode.flags & 8 /* hasContentQuery */) !== 0;
}
/**
 * @param {?} tNode
 * @return {?}
 */
export function isComponentHost(tNode) {
    return (tNode.flags & 2 /* isComponentHost */) === 2 /* isComponentHost */;
}
/**
 * @param {?} tNode
 * @return {?}
 */
export function isDirectiveHost(tNode) {
    return (tNode.flags & 1 /* isDirectiveHost */) === 1 /* isDirectiveHost */;
}
/**
 * @template T
 * @param {?} def
 * @return {?}
 */
export function isComponentDef(def) {
    return ((/** @type {?} */ (def))).template !== null;
}
/**
 * @param {?} target
 * @return {?}
 */
export function isRootView(target) {
    return (target[FLAGS] & 512 /* IsRoot */) !== 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ludGVyZmFjZXMvdHlwZV9jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFhLElBQUksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUc3QyxPQUFPLEVBQUMsS0FBSyxFQUFvQixNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBT2hELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBcUM7SUFDM0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqRSxDQUFDOzs7Ozs7QUFNRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQXFDO0lBQ2hFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQ3RELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQVk7SUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLDBCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFZO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSywwQkFBNkIsQ0FBQyw0QkFBK0IsQ0FBQztBQUNuRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBWTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssMEJBQTZCLENBQUMsNEJBQStCLENBQUM7QUFDbkYsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBSSxHQUFvQjtJQUNwRCxPQUFPLENBQUMsbUJBQUEsR0FBRyxFQUFtQixDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztBQUNwRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBYTtJQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudERlZiwgRGlyZWN0aXZlRGVmfSBmcm9tICcuLic7XG5cbmltcG9ydCB7TENvbnRhaW5lciwgVFlQRX0gZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IHtUTm9kZSwgVE5vZGVGbGFnc30gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7Uk5vZGV9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHtGTEFHUywgTFZpZXcsIExWaWV3RmxhZ3N9IGZyb20gJy4vdmlldyc7XG5cblxuLyoqXG4gKiBUcnVlIGlmIGB2YWx1ZWAgaXMgYExWaWV3YC5cbiAqIEBwYXJhbSB2YWx1ZSB3cmFwcGVkIHZhbHVlIG9mIGBSTm9kZWAsIGBMVmlld2AsIGBMQ29udGFpbmVyYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMVmlldyh2YWx1ZTogUk5vZGV8TFZpZXd8TENvbnRhaW5lcnx7fXxudWxsKTogdmFsdWUgaXMgTFZpZXcge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1RZUEVdID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBUcnVlIGlmIGB2YWx1ZWAgaXMgYExDb250YWluZXJgLlxuICogQHBhcmFtIHZhbHVlIHdyYXBwZWQgdmFsdWUgb2YgYFJOb2RlYCwgYExWaWV3YCwgYExDb250YWluZXJgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xDb250YWluZXIodmFsdWU6IFJOb2RlfExWaWV3fExDb250YWluZXJ8e318bnVsbCk6IHZhbHVlIGlzIExDb250YWluZXIge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWVbVFlQRV0gPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnRlbnRRdWVyeUhvc3QodE5vZGU6IFROb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiAodE5vZGUuZmxhZ3MgJiBUTm9kZUZsYWdzLmhhc0NvbnRlbnRRdWVyeSkgIT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudEhvc3QodE5vZGU6IFROb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiAodE5vZGUuZmxhZ3MgJiBUTm9kZUZsYWdzLmlzQ29tcG9uZW50SG9zdCkgPT09IFROb2RlRmxhZ3MuaXNDb21wb25lbnRIb3N0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RpdmVIb3N0KHROb2RlOiBUTm9kZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKHROb2RlLmZsYWdzICYgVE5vZGVGbGFncy5pc0RpcmVjdGl2ZUhvc3QpID09PSBUTm9kZUZsYWdzLmlzRGlyZWN0aXZlSG9zdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50RGVmPFQ+KGRlZjogRGlyZWN0aXZlRGVmPFQ+KTogZGVmIGlzIENvbXBvbmVudERlZjxUPiB7XG4gIHJldHVybiAoZGVmIGFzIENvbXBvbmVudERlZjxUPikudGVtcGxhdGUgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jvb3RWaWV3KHRhcmdldDogTFZpZXcpOiBib29sZWFuIHtcbiAgcmV0dXJuICh0YXJnZXRbRkxBR1NdICYgTFZpZXdGbGFncy5Jc1Jvb3QpICE9PSAwO1xufVxuIl19