/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/node_assert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined, assertEqual } from '../util/assert';
/**
 * @param {?} tNode
 * @param {?} type
 * @return {?}
 */
export function assertNodeType(tNode, type) {
    assertDefined(tNode, 'should be called with a TNode');
    assertEqual(tNode.type, type, `should be a ${typeName(type)}`);
}
/**
 * @param {?} tNode
 * @param {...?} types
 * @return {?}
 */
export function assertNodeOfPossibleTypes(tNode, ...types) {
    assertDefined(tNode, 'should be called with a TNode');
    /** @type {?} */
    const found = types.some((/**
     * @param {?} type
     * @return {?}
     */
    type => tNode.type === type));
    assertEqual(found, true, `Should be one of ${types.map(typeName).join(', ')} but got ${typeName(tNode.type)}`);
}
/**
 * @param {?} type
 * @return {?}
 */
function typeName(type) {
    if (type == 1 /* Projection */)
        return 'Projection';
    if (type == 0 /* Container */)
        return 'Container';
    if (type == 5 /* IcuContainer */)
        return 'IcuContainer';
    if (type == 2 /* View */)
        return 'View';
    if (type == 3 /* Element */)
        return 'Element';
    if (type == 4 /* ElementContainer */)
        return 'ElementContainer';
    return '<unknown>';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV9hc3NlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL25vZGVfYXNzZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQWUxRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVksRUFBRSxJQUFlO0lBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUN0RCxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxLQUFpQixFQUFFLEdBQUcsS0FBa0I7SUFDaEYsYUFBYSxDQUFDLEtBQUssRUFBRSwrQkFBK0IsQ0FBQyxDQUFDOztVQUNoRCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDO0lBQ3JELFdBQVcsQ0FDUCxLQUFLLEVBQUUsSUFBSSxFQUNYLG9CQUFvQixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1RixDQUFDOzs7OztBQUVELFNBQVMsUUFBUSxDQUFDLElBQWU7SUFDL0IsSUFBSSxJQUFJLHNCQUF3QjtRQUFFLE9BQU8sWUFBWSxDQUFDO0lBQ3RELElBQUksSUFBSSxxQkFBdUI7UUFBRSxPQUFPLFdBQVcsQ0FBQztJQUNwRCxJQUFJLElBQUksd0JBQTBCO1FBQUUsT0FBTyxjQUFjLENBQUM7SUFDMUQsSUFBSSxJQUFJLGdCQUFrQjtRQUFFLE9BQU8sTUFBTSxDQUFDO0lBQzFDLElBQUksSUFBSSxtQkFBcUI7UUFBRSxPQUFPLFNBQVMsQ0FBQztJQUNoRCxJQUFJLElBQUksNEJBQThCO1FBQUUsT0FBTyxrQkFBa0IsQ0FBQztJQUNsRSxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Fzc2VydERlZmluZWQsIGFzc2VydEVxdWFsfSBmcm9tICcuLi91dGlsL2Fzc2VydCc7XG5cbmltcG9ydCB7VENvbnRhaW5lck5vZGUsIFRFbGVtZW50Q29udGFpbmVyTm9kZSwgVEVsZW1lbnROb2RlLCBUSWN1Q29udGFpbmVyTm9kZSwgVE5vZGUsIFROb2RlVHlwZSwgVFByb2plY3Rpb25Ob2RlfSBmcm9tICcuL2ludGVyZmFjZXMvbm9kZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb2RlVHlwZShcbiAgICB0Tm9kZTogVE5vZGUsIHR5cGU6IFROb2RlVHlwZS5Db250YWluZXIpOiBhc3NlcnRzIHROb2RlIGlzIFRDb250YWluZXJOb2RlO1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vZGVUeXBlKFxuICAgIHROb2RlOiBUTm9kZSwgdHlwZTogVE5vZGVUeXBlLkVsZW1lbnQpOiBhc3NlcnRzIHROb2RlIGlzIFRFbGVtZW50Tm9kZTtcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb2RlVHlwZShcbiAgICB0Tm9kZTogVE5vZGUsIHR5cGU6IFROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyKTogYXNzZXJ0cyB0Tm9kZSBpcyBURWxlbWVudENvbnRhaW5lck5vZGU7XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm9kZVR5cGUoXG4gICAgdE5vZGU6IFROb2RlLCB0eXBlOiBUTm9kZVR5cGUuSWN1Q29udGFpbmVyKTogYXNzZXJ0cyB0Tm9kZSBpcyBUSWN1Q29udGFpbmVyTm9kZTtcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb2RlVHlwZShcbiAgICB0Tm9kZTogVE5vZGUsIHR5cGU6IFROb2RlVHlwZS5Qcm9qZWN0aW9uKTogYXNzZXJ0cyB0Tm9kZSBpcyBUUHJvamVjdGlvbk5vZGU7XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm9kZVR5cGUodE5vZGU6IFROb2RlLCB0eXBlOiBUTm9kZVR5cGUuVmlldyk6IGFzc2VydHMgdE5vZGUgaXMgVENvbnRhaW5lck5vZGU7XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm9kZVR5cGUodE5vZGU6IFROb2RlLCB0eXBlOiBUTm9kZVR5cGUpOiBhc3NlcnRzIHROb2RlIGlzIFROb2RlIHtcbiAgYXNzZXJ0RGVmaW5lZCh0Tm9kZSwgJ3Nob3VsZCBiZSBjYWxsZWQgd2l0aCBhIFROb2RlJyk7XG4gIGFzc2VydEVxdWFsKHROb2RlLnR5cGUsIHR5cGUsIGBzaG91bGQgYmUgYSAke3R5cGVOYW1lKHR5cGUpfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm9kZU9mUG9zc2libGVUeXBlcyh0Tm9kZTogVE5vZGV8bnVsbCwgLi4udHlwZXM6IFROb2RlVHlwZVtdKTogdm9pZCB7XG4gIGFzc2VydERlZmluZWQodE5vZGUsICdzaG91bGQgYmUgY2FsbGVkIHdpdGggYSBUTm9kZScpO1xuICBjb25zdCBmb3VuZCA9IHR5cGVzLnNvbWUodHlwZSA9PiB0Tm9kZS50eXBlID09PSB0eXBlKTtcbiAgYXNzZXJ0RXF1YWwoXG4gICAgICBmb3VuZCwgdHJ1ZSxcbiAgICAgIGBTaG91bGQgYmUgb25lIG9mICR7dHlwZXMubWFwKHR5cGVOYW1lKS5qb2luKCcsICcpfSBidXQgZ290ICR7dHlwZU5hbWUodE5vZGUudHlwZSl9YCk7XG59XG5cbmZ1bmN0aW9uIHR5cGVOYW1lKHR5cGU6IFROb2RlVHlwZSk6IHN0cmluZyB7XG4gIGlmICh0eXBlID09IFROb2RlVHlwZS5Qcm9qZWN0aW9uKSByZXR1cm4gJ1Byb2plY3Rpb24nO1xuICBpZiAodHlwZSA9PSBUTm9kZVR5cGUuQ29udGFpbmVyKSByZXR1cm4gJ0NvbnRhaW5lcic7XG4gIGlmICh0eXBlID09IFROb2RlVHlwZS5JY3VDb250YWluZXIpIHJldHVybiAnSWN1Q29udGFpbmVyJztcbiAgaWYgKHR5cGUgPT0gVE5vZGVUeXBlLlZpZXcpIHJldHVybiAnVmlldyc7XG4gIGlmICh0eXBlID09IFROb2RlVHlwZS5FbGVtZW50KSByZXR1cm4gJ0VsZW1lbnQnO1xuICBpZiAodHlwZSA9PSBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lcikgcmV0dXJuICdFbGVtZW50Q29udGFpbmVyJztcbiAgcmV0dXJuICc8dW5rbm93bj4nO1xufVxuIl19