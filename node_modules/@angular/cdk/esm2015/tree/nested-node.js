/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/nested-node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentChildren, Directive, ElementRef, IterableDiffers, QueryList, } from '@angular/core';
import { isObservable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet } from './outlet';
import { CdkTree, CdkTreeNode } from './tree';
import { getTreeControlFunctionsMissingError } from './tree-errors';
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 * @template T
 */
export class CdkNestedTreeNode extends CdkTreeNode {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} _differs
     */
    constructor(_elementRef, _tree, _differs) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
        }
        /** @type {?} */
        const childrenNodes = this._tree.treeControl.getChildren(this.data);
        if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes((/** @type {?} */ (childrenNodes)));
        }
        else if (isObservable(childrenNodes)) {
            childrenNodes.pipe(takeUntil(this._destroyed))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => this.updateChildrenNodes(result)));
        }
        this.nodeOutlet.changes.pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateChildrenNodes()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._clear();
        super.ngOnDestroy();
    }
    /**
     * Add children dataNodes to the NodeOutlet
     * @protected
     * @param {?=} children
     * @return {?}
     */
    updateChildrenNodes(children) {
        /** @type {?} */
        const outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            /** @type {?} */
            const viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
        }
    }
    /**
     * Clear the children dataNodes.
     * @protected
     * @return {?}
     */
    _clear() {
        /** @type {?} */
        const outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    }
    /**
     * Gets the outlet for the current node.
     * @private
     * @return {?}
     */
    _getNodeOutlet() {
        /** @type {?} */
        const outlets = this.nodeOutlet;
        // Note that since we use `descendants: true` on the query, we have to ensure
        // that we don't pick up the outlet of a child node by accident.
        return outlets && outlets.find((/**
         * @param {?} outlet
         * @return {?}
         */
        outlet => !outlet._node || outlet._node === this));
    }
}
CdkNestedTreeNode.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-nested-tree-node',
                exportAs: 'cdkNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node cdk-nested-tree-node',
                },
                providers: [
                    { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                ]
            },] }
];
/** @nocollapse */
CdkNestedTreeNode.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkTree },
    { type: IterableDiffers }
];
CdkNestedTreeNode.propDecorators = {
    nodeOutlet: [{ type: ContentChildren, args: [CdkTreeNodeOutlet, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
if (false) {
    /**
     * Differ used to find the changes in the data provided by the data source.
     * @type {?}
     * @private
     */
    CdkNestedTreeNode.prototype._dataDiffer;
    /**
     * The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`.
     * @type {?}
     * @protected
     */
    CdkNestedTreeNode.prototype._children;
    /**
     * The children node placeholder.
     * @type {?}
     */
    CdkNestedTreeNode.prototype.nodeOutlet;
    /**
     * @type {?}
     * @protected
     */
    CdkNestedTreeNode.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    CdkNestedTreeNode.prototype._tree;
    /**
     * @type {?}
     * @protected
     */
    CdkNestedTreeNode.prototype._differs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvbmVzdGVkLW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUVWLGVBQWUsRUFFZixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFxQmxFLE1BQU0sT0FBTyxpQkFBcUIsU0FBUSxXQUFjOzs7Ozs7SUFldEQsWUFBc0IsV0FBb0MsRUFDcEMsS0FBaUIsRUFDakIsUUFBeUI7UUFDN0MsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUhOLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRS9DLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLE1BQU0sbUNBQW1DLEVBQUUsQ0FBQztTQUM3Qzs7Y0FDSyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMzQyxTQUFTOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25ELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUdTLG1CQUFtQixDQUFDLFFBQWM7O2NBQ3BDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3BDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7UUFDRCxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDdEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNMLCtEQUErRDtZQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7OztJQUdTLE1BQU07O2NBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDcEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7O0lBR08sY0FBYzs7Y0FDZCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFFL0IsNkVBQTZFO1FBQzdFLGdFQUFnRTtRQUNoRSxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBdEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0osc0JBQXNCLEVBQUUsWUFBWTtvQkFDcEMsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLE9BQU8sRUFBRSxvQ0FBb0M7aUJBQzlDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFDO29CQUN0RCxFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUM7aUJBQ3JFO2FBQ0Y7Ozs7WUEvQkMsVUFBVTtZQVVKLE9BQU87WUFSYixlQUFlOzs7eUJBc0NkLGVBQWUsU0FBQyxpQkFBaUIsRUFBRTs7O29CQUdsQyxXQUFXLEVBQUUsSUFBSTtpQkFDbEI7Ozs7Ozs7O0lBVkQsd0NBQXVDOzs7Ozs7SUFHdkMsc0NBQXlCOzs7OztJQUd6Qix1Q0FLeUM7Ozs7O0lBRTdCLHdDQUE4Qzs7Ozs7SUFDOUMsa0NBQTJCOzs7OztJQUMzQixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0NES19UUkVFX05PREVfT1VUTEVUX05PREUsIENka1RyZWVOb2RlT3V0bGV0fSBmcm9tICcuL291dGxldCc7XG5pbXBvcnQge0Nka1RyZWUsIENka1RyZWVOb2RlfSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IHtnZXRUcmVlQ29udHJvbEZ1bmN0aW9uc01pc3NpbmdFcnJvcn0gZnJvbSAnLi90cmVlLWVycm9ycyc7XG5cbi8qKlxuICogTmVzdGVkIG5vZGUgaXMgYSBjaGlsZCBvZiBgPGNkay10cmVlPmAuIEl0IHdvcmtzIHdpdGggbmVzdGVkIHRyZWUuXG4gKiBCeSB1c2luZyBgY2RrLW5lc3RlZC10cmVlLW5vZGVgIGNvbXBvbmVudCBpbiB0cmVlIG5vZGUgdGVtcGxhdGUsIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZSB3aWxsXG4gKiBiZSBhZGRlZCBpbiB0aGUgYGNka1RyZWVOb2RlT3V0bGV0YCBpbiB0cmVlIG5vZGUgdGVtcGxhdGUuXG4gKiBUaGUgY2hpbGRyZW4gb2Ygbm9kZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYGNka1RyZWVOb2RlT3V0bGV0YC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2RrLW5lc3RlZC10cmVlLW5vZGUnLFxuICBleHBvcnRBczogJ2Nka05lc3RlZFRyZWVOb2RlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdpc0V4cGFuZGVkJyxcbiAgICAnW2F0dHIucm9sZV0nOiAncm9sZScsXG4gICAgJ2NsYXNzJzogJ2Nkay10cmVlLW5vZGUgY2RrLW5lc3RlZC10cmVlLW5vZGUnLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogQ2RrVHJlZU5vZGUsIHVzZUV4aXN0aW5nOiBDZGtOZXN0ZWRUcmVlTm9kZX0sXG4gICAge3Byb3ZpZGU6IENES19UUkVFX05PREVfT1VUTEVUX05PREUsIHVzZUV4aXN0aW5nOiBDZGtOZXN0ZWRUcmVlTm9kZX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtOZXN0ZWRUcmVlTm9kZTxUPiBleHRlbmRzIENka1RyZWVOb2RlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxUPjtcblxuICAvKiogVGhlIGNoaWxkcmVuIGRhdGEgZGF0YU5vZGVzIG9mIGN1cnJlbnQgbm9kZS4gVGhleSB3aWxsIGJlIHBsYWNlZCBpbiBgQ2RrVHJlZU5vZGVPdXRsZXRgLiAqL1xuICBwcm90ZWN0ZWQgX2NoaWxkcmVuOiBUW107XG5cbiAgLyoqIFRoZSBjaGlsZHJlbiBub2RlIHBsYWNlaG9sZGVyLiAqL1xuICBAQ29udGVudENoaWxkcmVuKENka1RyZWVOb2RlT3V0bGV0LCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSlcbiAgbm9kZU91dGxldDogUXVlcnlMaXN0PENka1RyZWVOb2RlT3V0bGV0PjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3RyZWU6IENka1RyZWU8VD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIF90cmVlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9kYXRhRGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKFtdKS5jcmVhdGUodGhpcy5fdHJlZS50cmFja0J5KTtcbiAgICBpZiAoIXRoaXMuX3RyZWUudHJlZUNvbnRyb2wuZ2V0Q2hpbGRyZW4pIHtcbiAgICAgIHRocm93IGdldFRyZWVDb250cm9sRnVuY3Rpb25zTWlzc2luZ0Vycm9yKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuTm9kZXMgPSB0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldENoaWxkcmVuKHRoaXMuZGF0YSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5Ob2RlcykpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5Ob2RlcyhjaGlsZHJlbk5vZGVzIGFzIFRbXSk7XG4gICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUoY2hpbGRyZW5Ob2RlcykpIHtcbiAgICAgIGNoaWxkcmVuTm9kZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy51cGRhdGVDaGlsZHJlbk5vZGVzKHJlc3VsdCkpO1xuICAgIH1cbiAgICB0aGlzLm5vZGVPdXRsZXQuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ2hpbGRyZW5Ob2RlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBBZGQgY2hpbGRyZW4gZGF0YU5vZGVzIHRvIHRoZSBOb2RlT3V0bGV0ICovXG4gIHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbk5vZGVzKGNoaWxkcmVuPzogVFtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3V0bGV0ID0gdGhpcy5fZ2V0Tm9kZU91dGxldCgpO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKG91dGxldCAmJiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IG91dGxldC52aWV3Q29udGFpbmVyO1xuICAgICAgdGhpcy5fdHJlZS5yZW5kZXJOb2RlQ2hhbmdlcyh0aGlzLl9jaGlsZHJlbiwgdGhpcy5fZGF0YURpZmZlciwgdmlld0NvbnRhaW5lciwgdGhpcy5fZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc2V0IHRoZSBkYXRhIGRpZmZlciBpZiB0aGVyZSdzIG5vIGNoaWxkcmVuIG5vZGVzIGRpc3BsYXllZFxuICAgICAgdGhpcy5fZGF0YURpZmZlci5kaWZmKFtdKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXIgdGhlIGNoaWxkcmVuIGRhdGFOb2Rlcy4gKi9cbiAgcHJvdGVjdGVkIF9jbGVhcigpOiB2b2lkIHtcbiAgICBjb25zdCBvdXRsZXQgPSB0aGlzLl9nZXROb2RlT3V0bGV0KCk7XG4gICAgaWYgKG91dGxldCkge1xuICAgICAgb3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2RhdGFEaWZmZXIuZGlmZihbXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIG91dGxldCBmb3IgdGhlIGN1cnJlbnQgbm9kZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0Tm9kZU91dGxldCgpIHtcbiAgICBjb25zdCBvdXRsZXRzID0gdGhpcy5ub2RlT3V0bGV0O1xuXG4gICAgLy8gTm90ZSB0aGF0IHNpbmNlIHdlIHVzZSBgZGVzY2VuZGFudHM6IHRydWVgIG9uIHRoZSBxdWVyeSwgd2UgaGF2ZSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IHdlIGRvbid0IHBpY2sgdXAgdGhlIG91dGxldCBvZiBhIGNoaWxkIG5vZGUgYnkgYWNjaWRlbnQuXG4gICAgcmV0dXJuIG91dGxldHMgJiYgb3V0bGV0cy5maW5kKG91dGxldCA9PiAhb3V0bGV0Ll9ub2RlIHx8IG91dGxldC5fbm9kZSA9PT0gdGhpcyk7XG4gIH1cbn1cbiJdfQ==