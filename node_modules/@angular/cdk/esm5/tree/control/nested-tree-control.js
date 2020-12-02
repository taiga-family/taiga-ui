import { __extends, __read, __spread, __values } from "tslib";
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
/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */
var NestedTreeControl = /** @class */ (function (_super) {
    __extends(NestedTreeControl, _super);
    /** Construct with nested tree function getChildren. */
    function NestedTreeControl(getChildren) {
        var _this = _super.call(this) || this;
        _this.getChildren = getChildren;
        return _this;
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     */
    NestedTreeControl.prototype.expandAll = function () {
        var _a;
        var _this = this;
        this.expansionModel.clear();
        var allNodes = this.dataNodes.reduce(function (accumulator, dataNode) {
            return __spread(accumulator, _this.getDescendants(dataNode), [dataNode]);
        }, []);
        (_a = this.expansionModel).select.apply(_a, __spread(allNodes));
    };
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
    NestedTreeControl.prototype.getDescendants = function (dataNode) {
        var descendants = [];
        this._getDescendants(descendants, dataNode);
        // Remove the node itself
        return descendants.splice(1);
    };
    /** A helper function to get descendants recursively. */
    NestedTreeControl.prototype._getDescendants = function (descendants, dataNode) {
        var _this = this;
        descendants.push(dataNode);
        var childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(function (child) { return _this._getDescendants(descendants, child); });
        }
        else if (isObservable(childrenNodes)) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(take(1), filter(Boolean))
                .subscribe(function (children) {
                var e_1, _a;
                try {
                    for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                        var child = children_1_1.value;
                        _this._getDescendants(descendants, child);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }
    };
    return NestedTreeControl;
}(BaseTreeControl));
export { NestedTreeControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXRyZWUtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS9jb250cm9sL25lc3RlZC10cmVlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsOEZBQThGO0FBQzlGO0lBQTBDLHFDQUFrQjtJQUUxRCx1REFBdUQ7SUFDdkQsMkJBQW1CLFdBQXdFO1FBQTNGLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixpQkFBVyxHQUFYLFdBQVcsQ0FBNkQ7O0lBRTNGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFDQUFTLEdBQVQ7O1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBZ0IsRUFBRSxRQUFRO1lBQzlELGdCQUFJLFdBQVcsRUFBSyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFFLFFBQVE7UUFBM0QsQ0FBNEQsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFBLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxDQUFDLE1BQU0sb0JBQUksUUFBUSxHQUFFO0lBQzFDLENBQUM7SUFFRCw4RkFBOEY7SUFDOUYsMENBQWMsR0FBZCxVQUFlLFFBQVc7UUFDeEIsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLHlCQUF5QjtRQUN6QixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdEQUF3RDtJQUM5QywyQ0FBZSxHQUF6QixVQUEwQixXQUFnQixFQUFFLFFBQVc7UUFBdkQsaUJBZUM7UUFkQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO1NBQy9FO2FBQU0sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsb0ZBQW9GO1lBQ3BGLDRGQUE0RjtZQUM1RixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBd0IsQ0FBQyxDQUFDO2lCQUN4RCxTQUFTLENBQUMsVUFBQSxRQUFROzs7b0JBQ2pCLEtBQW9CLElBQUEsYUFBQSxTQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTt3QkFBekIsSUFBTSxLQUFLLHFCQUFBO3dCQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUMxQzs7Ozs7Ozs7O1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE5Q0QsQ0FBMEMsZUFBZSxHQThDeEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7T2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZSwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Jhc2VUcmVlQ29udHJvbH0gZnJvbSAnLi9iYXNlLXRyZWUtY29udHJvbCc7XG5cbi8qKiBOZXN0ZWQgdHJlZSBjb250cm9sLiBBYmxlIHRvIGV4cGFuZC9jb2xsYXBzZSBhIHN1YnRyZWUgcmVjdXJzaXZlbHkgZm9yIE5lc3RlZE5vZGUgdHlwZS4gKi9cbmV4cG9ydCBjbGFzcyBOZXN0ZWRUcmVlQ29udHJvbDxUPiBleHRlbmRzIEJhc2VUcmVlQ29udHJvbDxUPiB7XG5cbiAgLyoqIENvbnN0cnVjdCB3aXRoIG5lc3RlZCB0cmVlIGZ1bmN0aW9uIGdldENoaWxkcmVuLiAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0Q2hpbGRyZW46IChkYXRhTm9kZTogVCkgPT4gKE9ic2VydmFibGU8VFtdPiB8IFRbXSB8IHVuZGVmaW5lZCB8IG51bGwpKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRzIGFsbCBkYXRhTm9kZXMgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpcyB3b3JraW5nLCB0aGUgYGRhdGFOb2Rlc2AgdmFyaWFibGUgb2YgdGhlIFRyZWVDb250cm9sIG11c3QgYmUgc2V0IHRvIGFsbCByb290IGxldmVsXG4gICAqIGRhdGEgbm9kZXMgb2YgdGhlIHRyZWUuXG4gICAqL1xuICBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5jbGVhcigpO1xuICAgIGNvbnN0IGFsbE5vZGVzID0gdGhpcy5kYXRhTm9kZXMucmVkdWNlKChhY2N1bXVsYXRvcjogVFtdLCBkYXRhTm9kZSkgPT5cbiAgICAgICAgWy4uLmFjY3VtdWxhdG9yLCAuLi50aGlzLmdldERlc2NlbmRhbnRzKGRhdGFOb2RlKSwgZGF0YU5vZGVdLCBbXSk7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5zZWxlY3QoLi4uYWxsTm9kZXMpO1xuICB9XG5cbiAgLyoqIEdldHMgYSBsaXN0IG9mIGRlc2NlbmRhbnQgZGF0YU5vZGVzIG9mIGEgc3VidHJlZSByb290ZWQgYXQgZ2l2ZW4gZGF0YSBub2RlIHJlY3Vyc2l2ZWx5LiAqL1xuICBnZXREZXNjZW5kYW50cyhkYXRhTm9kZTogVCk6IFRbXSB7XG4gICAgY29uc3QgZGVzY2VuZGFudHM6IFRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZ2V0RGVzY2VuZGFudHMoZGVzY2VuZGFudHMsIGRhdGFOb2RlKTtcbiAgICAvLyBSZW1vdmUgdGhlIG5vZGUgaXRzZWxmXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRzLnNwbGljZSgxKTtcbiAgfVxuXG4gIC8qKiBBIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgZGVzY2VuZGFudHMgcmVjdXJzaXZlbHkuICovXG4gIHByb3RlY3RlZCBfZ2V0RGVzY2VuZGFudHMoZGVzY2VuZGFudHM6IFRbXSwgZGF0YU5vZGU6IFQpOiB2b2lkIHtcbiAgICBkZXNjZW5kYW50cy5wdXNoKGRhdGFOb2RlKTtcbiAgICBjb25zdCBjaGlsZHJlbk5vZGVzID0gdGhpcy5nZXRDaGlsZHJlbihkYXRhTm9kZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5Ob2RlcykpIHtcbiAgICAgIGNoaWxkcmVuTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IFQpID0+IHRoaXMuX2dldERlc2NlbmRhbnRzKGRlc2NlbmRhbnRzLCBjaGlsZCkpO1xuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKGNoaWxkcmVuTm9kZXMpKSB7XG4gICAgICAvLyBUeXBlU2NyaXB0IGFzIG9mIHZlcnNpb24gMy41IGRvZXNuJ3Qgc2VlbSB0byB0cmVhdCBgQm9vbGVhbmAgbGlrZSBhIGZ1bmN0aW9uIHRoYXRcbiAgICAgIC8vIHJldHVybnMgYSBgYm9vbGVhbmAgc3BlY2lmaWNhbGx5IGluIHRoZSBjb250ZXh0IG9mIGBmaWx0ZXJgLCBzbyB3ZSBtYW51YWxseSBjbGFyaWZ5IHRoYXQuXG4gICAgICBjaGlsZHJlbk5vZGVzLnBpcGUodGFrZSgxKSwgZmlsdGVyKEJvb2xlYW4gYXMgKCkgPT4gYm9vbGVhbikpXG4gICAgICAgICAgLnN1YnNjcmliZShjaGlsZHJlbiA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2dldERlc2NlbmRhbnRzKGRlc2NlbmRhbnRzLCBjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=