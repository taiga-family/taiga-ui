/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/control/flat-tree-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseTreeControl } from './base-tree-control';
/**
 * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
 * @template T
 */
export class FlatTreeControl extends BaseTreeControl {
    /**
     * Construct with flat tree data node functions getLevel and isExpandable.
     * @param {?} getLevel
     * @param {?} isExpandable
     */
    constructor(getLevel, isExpandable) {
        super();
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
    }
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     * @param {?} dataNode
     * @return {?}
     */
    getDescendants(dataNode) {
        /** @type {?} */
        const startIndex = this.dataNodes.indexOf(dataNode);
        /** @type {?} */
        const results = [];
        // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
        // The level of descendants of a tree node must be greater than the level of the given
        // tree node.
        // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
        // If we reach a node whose level is greater than the level of the tree node, we hit a
        // sibling of an ancestor.
        for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
        }
        return results;
    }
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     * @return {?}
     */
    expandAll() {
        this.expansionModel.select(...this.dataNodes);
    }
}
if (false) {
    /** @type {?} */
    FlatTreeControl.prototype.getLevel;
    /** @type {?} */
    FlatTreeControl.prototype.isExpandable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC10cmVlLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvY29udHJvbC9mbGF0LXRyZWUtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBR3BELE1BQU0sT0FBTyxlQUFtQixTQUFRLGVBQWtCOzs7Ozs7SUFHeEQsWUFBbUIsUUFBaUMsRUFDakMsWUFBc0M7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFGUyxhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFFekQsQ0FBQzs7Ozs7Ozs7O0lBUUQsY0FBYyxDQUFDLFFBQVc7O2NBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2NBQzdDLE9BQU8sR0FBUSxFQUFFO1FBRXZCLHVGQUF1RjtRQUN2RixzRkFBc0Y7UUFDdEYsYUFBYTtRQUNiLDJGQUEyRjtRQUMzRixzRkFBc0Y7UUFDdEYsMEJBQTBCO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZGLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7OztJQVFELFNBQVM7UUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7OztJQXRDYSxtQ0FBd0M7O0lBQ3hDLHVDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jhc2VUcmVlQ29udHJvbH0gZnJvbSAnLi9iYXNlLXRyZWUtY29udHJvbCc7XG5cbi8qKiBGbGF0IHRyZWUgY29udHJvbC4gQWJsZSB0byBleHBhbmQvY29sbGFwc2UgYSBzdWJ0cmVlIHJlY3Vyc2l2ZWx5IGZvciBmbGF0dGVuZWQgdHJlZS4gKi9cbmV4cG9ydCBjbGFzcyBGbGF0VHJlZUNvbnRyb2w8VD4gZXh0ZW5kcyBCYXNlVHJlZUNvbnRyb2w8VD4ge1xuXG4gIC8qKiBDb25zdHJ1Y3Qgd2l0aCBmbGF0IHRyZWUgZGF0YSBub2RlIGZ1bmN0aW9ucyBnZXRMZXZlbCBhbmQgaXNFeHBhbmRhYmxlLiAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0TGV2ZWw6IChkYXRhTm9kZTogVCkgPT4gbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgaXNFeHBhbmRhYmxlOiAoZGF0YU5vZGU6IFQpID0+IGJvb2xlYW4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIHRoZSBkYXRhIG5vZGUncyBzdWJ0cmVlIG9mIGRlc2NlbmRlbnQgZGF0YSBub2Rlcy5cbiAgICpcbiAgICogVG8gbWFrZSB0aGlzIHdvcmtpbmcsIHRoZSBgZGF0YU5vZGVzYCBvZiB0aGUgVHJlZUNvbnRyb2wgbXVzdCBiZSBmbGF0dGVuZWQgdHJlZSBub2Rlc1xuICAgKiB3aXRoIGNvcnJlY3QgbGV2ZWxzLlxuICAgKi9cbiAgZ2V0RGVzY2VuZGFudHMoZGF0YU5vZGU6IFQpOiBUW10ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLmRhdGFOb2Rlcy5pbmRleE9mKGRhdGFOb2RlKTtcbiAgICBjb25zdCByZXN1bHRzOiBUW10gPSBbXTtcblxuICAgIC8vIEdvZXMgdGhyb3VnaCBmbGF0dGVuZWQgdHJlZSBub2RlcyBpbiB0aGUgYGRhdGFOb2Rlc2AgYXJyYXksIGFuZCBnZXQgYWxsIGRlc2NlbmRhbnRzLlxuICAgIC8vIFRoZSBsZXZlbCBvZiBkZXNjZW5kYW50cyBvZiBhIHRyZWUgbm9kZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbGV2ZWwgb2YgdGhlIGdpdmVuXG4gICAgLy8gdHJlZSBub2RlLlxuICAgIC8vIElmIHdlIHJlYWNoIGEgbm9kZSB3aG9zZSBsZXZlbCBpcyBlcXVhbCB0byB0aGUgbGV2ZWwgb2YgdGhlIHRyZWUgbm9kZSwgd2UgaGl0IGEgc2libGluZy5cbiAgICAvLyBJZiB3ZSByZWFjaCBhIG5vZGUgd2hvc2UgbGV2ZWwgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZXZlbCBvZiB0aGUgdHJlZSBub2RlLCB3ZSBoaXQgYVxuICAgIC8vIHNpYmxpbmcgb2YgYW4gYW5jZXN0b3IuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggKyAxO1xuICAgICAgICBpIDwgdGhpcy5kYXRhTm9kZXMubGVuZ3RoICYmIHRoaXMuZ2V0TGV2ZWwoZGF0YU5vZGUpIDwgdGhpcy5nZXRMZXZlbCh0aGlzLmRhdGFOb2Rlc1tpXSk7XG4gICAgICAgIGkrKykge1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuZGF0YU5vZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kcyBhbGwgZGF0YSBub2RlcyBpbiB0aGUgdHJlZS5cbiAgICpcbiAgICogVG8gbWFrZSB0aGlzIHdvcmtpbmcsIHRoZSBgZGF0YU5vZGVzYCB2YXJpYWJsZSBvZiB0aGUgVHJlZUNvbnRyb2wgbXVzdCBiZSBzZXQgdG8gYWxsIGZsYXR0ZW5lZFxuICAgKiBkYXRhIG5vZGVzIG9mIHRoZSB0cmVlLlxuICAgKi9cbiAgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uTW9kZWwuc2VsZWN0KC4uLnRoaXMuZGF0YU5vZGVzKTtcbiAgfVxufVxuIl19