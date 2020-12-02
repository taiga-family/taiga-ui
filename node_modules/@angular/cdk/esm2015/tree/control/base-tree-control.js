/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/control/base-tree-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SelectionModel } from '@angular/cdk/collections';
/**
 * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
 * @abstract
 * @template T
 */
export class BaseTreeControl {
    constructor() {
        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new SelectionModel(true);
    }
    /**
     * Toggles one single data node's expanded/collapsed state.
     * @param {?} dataNode
     * @return {?}
     */
    toggle(dataNode) {
        this.expansionModel.toggle(dataNode);
    }
    /**
     * Expands one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    expand(dataNode) {
        this.expansionModel.select(dataNode);
    }
    /**
     * Collapses one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    collapse(dataNode) {
        this.expansionModel.deselect(dataNode);
    }
    /**
     * Whether a given data node is expanded or not. Returns true if the data node is expanded.
     * @param {?} dataNode
     * @return {?}
     */
    isExpanded(dataNode) {
        return this.expansionModel.isSelected(dataNode);
    }
    /**
     * Toggles a subtree rooted at `node` recursively.
     * @param {?} dataNode
     * @return {?}
     */
    toggleDescendants(dataNode) {
        this.expansionModel.isSelected(dataNode)
            ? this.collapseDescendants(dataNode)
            : this.expandDescendants(dataNode);
    }
    /**
     * Collapse all dataNodes in the tree.
     * @return {?}
     */
    collapseAll() {
        this.expansionModel.clear();
    }
    /**
     * Expands a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    expandDescendants(dataNode) {
        /** @type {?} */
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.select(...toBeProcessed);
    }
    /**
     * Collapses a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    collapseDescendants(dataNode) {
        /** @type {?} */
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.deselect(...toBeProcessed);
    }
}
if (false) {
    /**
     * Saved data node for `expandAll` action.
     * @type {?}
     */
    BaseTreeControl.prototype.dataNodes;
    /**
     * A selection model with multi-selection to track expansion status.
     * @type {?}
     */
    BaseTreeControl.prototype.expansionModel;
    /**
     * Get depth of a given data node, return the level number. This is for flat tree node.
     * @type {?}
     */
    BaseTreeControl.prototype.getLevel;
    /**
     * Whether the data node is expandable. Returns true if expandable.
     * This is for flat tree node.
     * @type {?}
     */
    BaseTreeControl.prototype.isExpandable;
    /**
     * Gets a stream that emits whenever the given data node's children change.
     * @type {?}
     */
    BaseTreeControl.prototype.getChildren;
    /**
     * Gets a list of descendent data nodes of a subtree rooted at given data node recursively.
     * @abstract
     * @param {?} dataNode
     * @return {?}
     */
    BaseTreeControl.prototype.getDescendants = function (dataNode) { };
    /**
     * Expands all data nodes in the tree.
     * @abstract
     * @return {?}
     */
    BaseTreeControl.prototype.expandAll = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10cmVlLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvY29udHJvbC9iYXNlLXRyZWUtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQUt4RCxNQUFNLE9BQWdCLGVBQWU7SUFBckM7Ozs7UUFZRSxtQkFBYyxHQUFzQixJQUFJLGNBQWMsQ0FBSSxJQUFJLENBQUMsQ0FBQztJQTJEbEUsQ0FBQzs7Ozs7O0lBNUNDLE1BQU0sQ0FBQyxRQUFXO1FBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxRQUFXO1FBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxRQUFXO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdELFVBQVUsQ0FBQyxRQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsUUFBVztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUdELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUdELGlCQUFpQixDQUFDLFFBQVc7O1lBQ3ZCLGFBQWEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBR0QsbUJBQW1CLENBQUMsUUFBVzs7WUFDekIsYUFBYSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7Ozs7OztJQTlEQyxvQ0FBZTs7Ozs7SUFHZix5Q0FBZ0U7Ozs7O0lBR2hFLG1DQUFrQzs7Ozs7O0lBTWxDLHVDQUF1Qzs7Ozs7SUFHdkMsc0NBQXlFOzs7Ozs7O0lBckJ6RSxtRUFBMEM7Ozs7OztJQUcxQyxzREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtUcmVlQ29udHJvbH0gZnJvbSAnLi90cmVlLWNvbnRyb2wnO1xuXG4vKiogQmFzZSB0cmVlIGNvbnRyb2wuIEl0IGhhcyBiYXNpYyB0b2dnbGUvZXhwYW5kL2NvbGxhcHNlIG9wZXJhdGlvbnMgb24gYSBzaW5nbGUgZGF0YSBub2RlLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUcmVlQ29udHJvbDxUPiBpbXBsZW1lbnRzIFRyZWVDb250cm9sPFQ+IHtcblxuICAvKiogR2V0cyBhIGxpc3Qgb2YgZGVzY2VuZGVudCBkYXRhIG5vZGVzIG9mIGEgc3VidHJlZSByb290ZWQgYXQgZ2l2ZW4gZGF0YSBub2RlIHJlY3Vyc2l2ZWx5LiAqL1xuICBhYnN0cmFjdCBnZXREZXNjZW5kYW50cyhkYXRhTm9kZTogVCk6IFRbXTtcblxuICAvKiogRXhwYW5kcyBhbGwgZGF0YSBub2RlcyBpbiB0aGUgdHJlZS4gKi9cbiAgYWJzdHJhY3QgZXhwYW5kQWxsKCk6IHZvaWQ7XG5cbiAgLyoqIFNhdmVkIGRhdGEgbm9kZSBmb3IgYGV4cGFuZEFsbGAgYWN0aW9uLiAqL1xuICBkYXRhTm9kZXM6IFRbXTtcblxuICAvKiogQSBzZWxlY3Rpb24gbW9kZWwgd2l0aCBtdWx0aS1zZWxlY3Rpb24gdG8gdHJhY2sgZXhwYW5zaW9uIHN0YXR1cy4gKi9cbiAgZXhwYW5zaW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPFQ+ID0gbmV3IFNlbGVjdGlvbk1vZGVsPFQ+KHRydWUpO1xuXG4gIC8qKiBHZXQgZGVwdGggb2YgYSBnaXZlbiBkYXRhIG5vZGUsIHJldHVybiB0aGUgbGV2ZWwgbnVtYmVyLiBUaGlzIGlzIGZvciBmbGF0IHRyZWUgbm9kZS4gKi9cbiAgZ2V0TGV2ZWw6IChkYXRhTm9kZTogVCkgPT4gbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkYXRhIG5vZGUgaXMgZXhwYW5kYWJsZS4gUmV0dXJucyB0cnVlIGlmIGV4cGFuZGFibGUuXG4gICAqIFRoaXMgaXMgZm9yIGZsYXQgdHJlZSBub2RlLlxuICAgKi9cbiAgaXNFeHBhbmRhYmxlOiAoZGF0YU5vZGU6IFQpID0+IGJvb2xlYW47XG5cbiAgLyoqIEdldHMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgZ2l2ZW4gZGF0YSBub2RlJ3MgY2hpbGRyZW4gY2hhbmdlLiAqL1xuICBnZXRDaGlsZHJlbjogKGRhdGFOb2RlOiBUKSA9PiAoT2JzZXJ2YWJsZTxUW10+IHwgVFtdIHwgdW5kZWZpbmVkIHwgbnVsbCk7XG5cbiAgLyoqIFRvZ2dsZXMgb25lIHNpbmdsZSBkYXRhIG5vZGUncyBleHBhbmRlZC9jb2xsYXBzZWQgc3RhdGUuICovXG4gIHRvZ2dsZShkYXRhTm9kZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uTW9kZWwudG9nZ2xlKGRhdGFOb2RlKTtcbiAgfVxuXG4gIC8qKiBFeHBhbmRzIG9uZSBzaW5nbGUgZGF0YSBub2RlLiAqL1xuICBleHBhbmQoZGF0YU5vZGU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLnNlbGVjdChkYXRhTm9kZSk7XG4gIH1cblxuICAvKiogQ29sbGFwc2VzIG9uZSBzaW5nbGUgZGF0YSBub2RlLiAqL1xuICBjb2xsYXBzZShkYXRhTm9kZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uTW9kZWwuZGVzZWxlY3QoZGF0YU5vZGUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgYSBnaXZlbiBkYXRhIG5vZGUgaXMgZXhwYW5kZWQgb3Igbm90LiBSZXR1cm5zIHRydWUgaWYgdGhlIGRhdGEgbm9kZSBpcyBleHBhbmRlZC4gKi9cbiAgaXNFeHBhbmRlZChkYXRhTm9kZTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cGFuc2lvbk1vZGVsLmlzU2VsZWN0ZWQoZGF0YU5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgYSBzdWJ0cmVlIHJvb3RlZCBhdCBgbm9kZWAgcmVjdXJzaXZlbHkuICovXG4gIHRvZ2dsZURlc2NlbmRhbnRzKGRhdGFOb2RlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5pc1NlbGVjdGVkKGRhdGFOb2RlKVxuICAgICAgICA/IHRoaXMuY29sbGFwc2VEZXNjZW5kYW50cyhkYXRhTm9kZSlcbiAgICAgICAgOiB0aGlzLmV4cGFuZERlc2NlbmRhbnRzKGRhdGFOb2RlKTtcbiAgfVxuXG4gIC8qKiBDb2xsYXBzZSBhbGwgZGF0YU5vZGVzIGluIHRoZSB0cmVlLiAqL1xuICBjb2xsYXBzZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLmNsZWFyKCk7XG4gIH1cblxuICAvKiogRXhwYW5kcyBhIHN1YnRyZWUgcm9vdGVkIGF0IGdpdmVuIGRhdGEgbm9kZSByZWN1cnNpdmVseS4gKi9cbiAgZXhwYW5kRGVzY2VuZGFudHMoZGF0YU5vZGU6IFQpOiB2b2lkIHtcbiAgICBsZXQgdG9CZVByb2Nlc3NlZCA9IFtkYXRhTm9kZV07XG4gICAgdG9CZVByb2Nlc3NlZC5wdXNoKC4uLnRoaXMuZ2V0RGVzY2VuZGFudHMoZGF0YU5vZGUpKTtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLnNlbGVjdCguLi50b0JlUHJvY2Vzc2VkKTtcbiAgfVxuXG4gIC8qKiBDb2xsYXBzZXMgYSBzdWJ0cmVlIHJvb3RlZCBhdCBnaXZlbiBkYXRhIG5vZGUgcmVjdXJzaXZlbHkuICovXG4gIGNvbGxhcHNlRGVzY2VuZGFudHMoZGF0YU5vZGU6IFQpOiB2b2lkIHtcbiAgICBsZXQgdG9CZVByb2Nlc3NlZCA9IFtkYXRhTm9kZV07XG4gICAgdG9CZVByb2Nlc3NlZC5wdXNoKC4uLnRoaXMuZ2V0RGVzY2VuZGFudHMoZGF0YU5vZGUpKTtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLmRlc2VsZWN0KC4uLnRvQmVQcm9jZXNzZWQpO1xuICB9XG59XG4iXX0=