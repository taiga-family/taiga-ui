/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/control/nested-tree-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isObservable } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import { BaseTreeControl } from './base-tree-control';
/**
 * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
 * @template T
 */
export class NestedTreeControl extends BaseTreeControl {
    /**
     * Construct with nested tree function getChildren.
     * @param {?} getChildren
     */
    constructor(getChildren) {
        super();
        this.getChildren = getChildren;
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     * @return {?}
     */
    expandAll() {
        this.expansionModel.clear();
        /** @type {?} */
        const allNodes = this.dataNodes.reduce((/**
         * @param {?} accumulator
         * @param {?} dataNode
         * @return {?}
         */
        (accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode]), []);
        this.expansionModel.select(...allNodes);
    }
    /**
     * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    getDescendants(dataNode) {
        /** @type {?} */
        const descendants = [];
        this._getDescendants(descendants, dataNode);
        // Remove the node itself
        return descendants.splice(1);
    }
    /**
     * A helper function to get descendants recursively.
     * @protected
     * @param {?} descendants
     * @param {?} dataNode
     * @return {?}
     */
    _getDescendants(descendants, dataNode) {
        descendants.push(dataNode);
        /** @type {?} */
        const childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => this._getDescendants(descendants, child)));
        }
        else if (isObservable(childrenNodes)) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(take(1), filter((/** @type {?} */ (Boolean))))
                .subscribe((/**
             * @param {?} children
             * @return {?}
             */
            children => {
                for (const child of children) {
                    this._getDescendants(descendants, child);
                }
            }));
        }
    }
}
if (false) {
    /** @type {?} */
    NestedTreeControl.prototype.getChildren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXRyZWUtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS9jb250cm9sL25lc3RlZC10cmVlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFhLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFHcEQsTUFBTSxPQUFPLGlCQUFxQixTQUFRLGVBQWtCOzs7OztJQUcxRCxZQUFtQixXQUF3RTtRQUN6RixLQUFLLEVBQUUsQ0FBQztRQURTLGdCQUFXLEdBQVgsV0FBVyxDQUE2RDtJQUUzRixDQUFDOzs7Ozs7OztJQVFELFNBQVM7UUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDOztjQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsV0FBZ0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNsRSxDQUFDLEdBQUcsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRSxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsUUFBVzs7Y0FDbEIsV0FBVyxHQUFRLEVBQUU7UUFFM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMseUJBQXlCO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUdTLGVBQWUsQ0FBQyxXQUFnQixFQUFFLFFBQVc7UUFDckQsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNoQyxhQUFhLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDO1NBQy9FO2FBQU0sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsb0ZBQW9GO1lBQ3BGLDRGQUE0RjtZQUM1RixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7aUJBQ3hELFNBQVM7Ozs7WUFBQyxRQUFRLENBQUMsRUFBRTtnQkFDcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMxQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDO0NBQ0Y7OztJQTNDYSx3Q0FBK0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7T2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZSwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Jhc2VUcmVlQ29udHJvbH0gZnJvbSAnLi9iYXNlLXRyZWUtY29udHJvbCc7XG5cbi8qKiBOZXN0ZWQgdHJlZSBjb250cm9sLiBBYmxlIHRvIGV4cGFuZC9jb2xsYXBzZSBhIHN1YnRyZWUgcmVjdXJzaXZlbHkgZm9yIE5lc3RlZE5vZGUgdHlwZS4gKi9cbmV4cG9ydCBjbGFzcyBOZXN0ZWRUcmVlQ29udHJvbDxUPiBleHRlbmRzIEJhc2VUcmVlQ29udHJvbDxUPiB7XG5cbiAgLyoqIENvbnN0cnVjdCB3aXRoIG5lc3RlZCB0cmVlIGZ1bmN0aW9uIGdldENoaWxkcmVuLiAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0Q2hpbGRyZW46IChkYXRhTm9kZTogVCkgPT4gKE9ic2VydmFibGU8VFtdPiB8IFRbXSB8IHVuZGVmaW5lZCB8IG51bGwpKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRzIGFsbCBkYXRhTm9kZXMgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpcyB3b3JraW5nLCB0aGUgYGRhdGFOb2Rlc2AgdmFyaWFibGUgb2YgdGhlIFRyZWVDb250cm9sIG11c3QgYmUgc2V0IHRvIGFsbCByb290IGxldmVsXG4gICAqIGRhdGEgbm9kZXMgb2YgdGhlIHRyZWUuXG4gICAqL1xuICBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5jbGVhcigpO1xuICAgIGNvbnN0IGFsbE5vZGVzID0gdGhpcy5kYXRhTm9kZXMucmVkdWNlKChhY2N1bXVsYXRvcjogVFtdLCBkYXRhTm9kZSkgPT5cbiAgICAgICAgWy4uLmFjY3VtdWxhdG9yLCAuLi50aGlzLmdldERlc2NlbmRhbnRzKGRhdGFOb2RlKSwgZGF0YU5vZGVdLCBbXSk7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5zZWxlY3QoLi4uYWxsTm9kZXMpO1xuICB9XG5cbiAgLyoqIEdldHMgYSBsaXN0IG9mIGRlc2NlbmRhbnQgZGF0YU5vZGVzIG9mIGEgc3VidHJlZSByb290ZWQgYXQgZ2l2ZW4gZGF0YSBub2RlIHJlY3Vyc2l2ZWx5LiAqL1xuICBnZXREZXNjZW5kYW50cyhkYXRhTm9kZTogVCk6IFRbXSB7XG4gICAgY29uc3QgZGVzY2VuZGFudHM6IFRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZ2V0RGVzY2VuZGFudHMoZGVzY2VuZGFudHMsIGRhdGFOb2RlKTtcbiAgICAvLyBSZW1vdmUgdGhlIG5vZGUgaXRzZWxmXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRzLnNwbGljZSgxKTtcbiAgfVxuXG4gIC8qKiBBIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgZGVzY2VuZGFudHMgcmVjdXJzaXZlbHkuICovXG4gIHByb3RlY3RlZCBfZ2V0RGVzY2VuZGFudHMoZGVzY2VuZGFudHM6IFRbXSwgZGF0YU5vZGU6IFQpOiB2b2lkIHtcbiAgICBkZXNjZW5kYW50cy5wdXNoKGRhdGFOb2RlKTtcbiAgICBjb25zdCBjaGlsZHJlbk5vZGVzID0gdGhpcy5nZXRDaGlsZHJlbihkYXRhTm9kZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5Ob2RlcykpIHtcbiAgICAgIGNoaWxkcmVuTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IFQpID0+IHRoaXMuX2dldERlc2NlbmRhbnRzKGRlc2NlbmRhbnRzLCBjaGlsZCkpO1xuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKGNoaWxkcmVuTm9kZXMpKSB7XG4gICAgICAvLyBUeXBlU2NyaXB0IGFzIG9mIHZlcnNpb24gMy41IGRvZXNuJ3Qgc2VlbSB0byB0cmVhdCBgQm9vbGVhbmAgbGlrZSBhIGZ1bmN0aW9uIHRoYXRcbiAgICAgIC8vIHJldHVybnMgYSBgYm9vbGVhbmAgc3BlY2lmaWNhbGx5IGluIHRoZSBjb250ZXh0IG9mIGBmaWx0ZXJgLCBzbyB3ZSBtYW51YWxseSBjbGFyaWZ5IHRoYXQuXG4gICAgICBjaGlsZHJlbk5vZGVzLnBpcGUodGFrZSgxKSwgZmlsdGVyKEJvb2xlYW4gYXMgKCkgPT4gYm9vbGVhbikpXG4gICAgICAgICAgLnN1YnNjcmliZShjaGlsZHJlbiA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2dldERlc2NlbmRhbnRzKGRlc2NlbmRhbnRzLCBjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=