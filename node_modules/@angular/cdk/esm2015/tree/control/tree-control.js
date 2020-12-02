/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/control/tree-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tree control interface. User can implement TreeControl to expand/collapse dataNodes in the tree.
 * The CDKTree will use this TreeControl to expand/collapse a node.
 * User can also use it outside the `<cdk-tree>` to control the expansion status of the tree.
 * @record
 * @template T
 */
export function TreeControl() { }
if (false) {
    /**
     * The saved tree nodes data for `expandAll` action.
     * @type {?}
     */
    TreeControl.prototype.dataNodes;
    /**
     * The expansion model
     * @type {?}
     */
    TreeControl.prototype.expansionModel;
    /**
     * Get depth of a given data node, return the level number. This is for flat tree node.
     * @type {?}
     */
    TreeControl.prototype.getLevel;
    /**
     * Whether the data node is expandable. Returns true if expandable.
     * This is for flat tree node.
     * @type {?}
     */
    TreeControl.prototype.isExpandable;
    /**
     * Gets a stream that emits whenever the given data node's children change.
     * @type {?}
     */
    TreeControl.prototype.getChildren;
    /**
     * Whether the data node is expanded or collapsed. Return true if it's expanded.
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.isExpanded = function (dataNode) { };
    /**
     * Get all descendants of a data node
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.getDescendants = function (dataNode) { };
    /**
     * Expand or collapse data node
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.toggle = function (dataNode) { };
    /**
     * Expand one data node
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.expand = function (dataNode) { };
    /**
     * Collapse one data node
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.collapse = function (dataNode) { };
    /**
     * Expand all the dataNodes in the tree
     * @return {?}
     */
    TreeControl.prototype.expandAll = function () { };
    /**
     * Collapse all the dataNodes in the tree
     * @return {?}
     */
    TreeControl.prototype.collapseAll = function () { };
    /**
     * Toggle a data node by expand/collapse it and all its descendants
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.toggleDescendants = function (dataNode) { };
    /**
     * Expand a data node and all its descendants
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.expandDescendants = function (dataNode) { };
    /**
     * Collapse a data node and all its descendants
     * @param {?} dataNode
     * @return {?}
     */
    TreeControl.prototype.collapseDescendants = function (dataNode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL2NvbnRyb2wvdHJlZS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWVBLGlDQWdEQzs7Ozs7O0lBOUNDLGdDQUFlOzs7OztJQUdmLHFDQUFrQzs7Ozs7SUFpQ2xDLCtCQUEyQzs7Ozs7O0lBTTNDLG1DQUFnRDs7Ozs7SUFHaEQsa0NBQWdGOzs7Ozs7SUF2Q2hGLDJEQUFpQzs7Ozs7O0lBR2pDLCtEQUFtQzs7Ozs7O0lBR25DLHVEQUEwQjs7Ozs7O0lBRzFCLHVEQUEwQjs7Ozs7O0lBRzFCLHlEQUE0Qjs7Ozs7SUFHNUIsa0RBQWtCOzs7OztJQUdsQixvREFBb0I7Ozs7OztJQUdwQixrRUFBcUM7Ozs7OztJQUdyQyxrRUFBcUM7Ozs7OztJQUdyQyxvRUFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRyZWUgY29udHJvbCBpbnRlcmZhY2UuIFVzZXIgY2FuIGltcGxlbWVudCBUcmVlQ29udHJvbCB0byBleHBhbmQvY29sbGFwc2UgZGF0YU5vZGVzIGluIHRoZSB0cmVlLlxuICogVGhlIENES1RyZWUgd2lsbCB1c2UgdGhpcyBUcmVlQ29udHJvbCB0byBleHBhbmQvY29sbGFwc2UgYSBub2RlLlxuICogVXNlciBjYW4gYWxzbyB1c2UgaXQgb3V0c2lkZSB0aGUgYDxjZGstdHJlZT5gIHRvIGNvbnRyb2wgdGhlIGV4cGFuc2lvbiBzdGF0dXMgb2YgdGhlIHRyZWUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUNvbnRyb2w8VD4ge1xuICAvKiogVGhlIHNhdmVkIHRyZWUgbm9kZXMgZGF0YSBmb3IgYGV4cGFuZEFsbGAgYWN0aW9uLiAqL1xuICBkYXRhTm9kZXM6IFRbXTtcblxuICAvKiogVGhlIGV4cGFuc2lvbiBtb2RlbCAqL1xuICBleHBhbnNpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWw8VD47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGEgbm9kZSBpcyBleHBhbmRlZCBvciBjb2xsYXBzZWQuIFJldHVybiB0cnVlIGlmIGl0J3MgZXhwYW5kZWQuICovXG4gIGlzRXhwYW5kZWQoZGF0YU5vZGU6IFQpOiBib29sZWFuO1xuXG4gIC8qKiBHZXQgYWxsIGRlc2NlbmRhbnRzIG9mIGEgZGF0YSBub2RlICovXG4gIGdldERlc2NlbmRhbnRzKGRhdGFOb2RlOiBUKTogYW55W107XG5cbiAgLyoqIEV4cGFuZCBvciBjb2xsYXBzZSBkYXRhIG5vZGUgKi9cbiAgdG9nZ2xlKGRhdGFOb2RlOiBUKTogdm9pZDtcblxuICAvKiogRXhwYW5kIG9uZSBkYXRhIG5vZGUgKi9cbiAgZXhwYW5kKGRhdGFOb2RlOiBUKTogdm9pZDtcblxuICAvKiogQ29sbGFwc2Ugb25lIGRhdGEgbm9kZSAqL1xuICBjb2xsYXBzZShkYXRhTm9kZTogVCk6IHZvaWQ7XG5cbiAgLyoqIEV4cGFuZCBhbGwgdGhlIGRhdGFOb2RlcyBpbiB0aGUgdHJlZSAqL1xuICBleHBhbmRBbGwoKTogdm9pZDtcblxuICAvKiogQ29sbGFwc2UgYWxsIHRoZSBkYXRhTm9kZXMgaW4gdGhlIHRyZWUgKi9cbiAgY29sbGFwc2VBbGwoKTogdm9pZDtcblxuICAvKiogVG9nZ2xlIGEgZGF0YSBub2RlIGJ5IGV4cGFuZC9jb2xsYXBzZSBpdCBhbmQgYWxsIGl0cyBkZXNjZW5kYW50cyAqL1xuICB0b2dnbGVEZXNjZW5kYW50cyhkYXRhTm9kZTogVCk6IHZvaWQ7XG5cbiAgLyoqIEV4cGFuZCBhIGRhdGEgbm9kZSBhbmQgYWxsIGl0cyBkZXNjZW5kYW50cyAqL1xuICBleHBhbmREZXNjZW5kYW50cyhkYXRhTm9kZTogVCk6IHZvaWQ7XG5cbiAgLyoqIENvbGxhcHNlIGEgZGF0YSBub2RlIGFuZCBhbGwgaXRzIGRlc2NlbmRhbnRzICovXG4gIGNvbGxhcHNlRGVzY2VuZGFudHMoZGF0YU5vZGU6IFQpOiB2b2lkO1xuXG4gIC8qKiBHZXQgZGVwdGggb2YgYSBnaXZlbiBkYXRhIG5vZGUsIHJldHVybiB0aGUgbGV2ZWwgbnVtYmVyLiBUaGlzIGlzIGZvciBmbGF0IHRyZWUgbm9kZS4gKi9cbiAgcmVhZG9ubHkgZ2V0TGV2ZWw6IChkYXRhTm9kZTogVCkgPT4gbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkYXRhIG5vZGUgaXMgZXhwYW5kYWJsZS4gUmV0dXJucyB0cnVlIGlmIGV4cGFuZGFibGUuXG4gICAqIFRoaXMgaXMgZm9yIGZsYXQgdHJlZSBub2RlLlxuICAgKi9cbiAgcmVhZG9ubHkgaXNFeHBhbmRhYmxlOiAoZGF0YU5vZGU6IFQpID0+IGJvb2xlYW47XG5cbiAgLyoqIEdldHMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgZ2l2ZW4gZGF0YSBub2RlJ3MgY2hpbGRyZW4gY2hhbmdlLiAqL1xuICByZWFkb25seSBnZXRDaGlsZHJlbjogKGRhdGFOb2RlOiBUKSA9PiBPYnNlcnZhYmxlPFRbXT4gfCBUW10gfCB1bmRlZmluZWQgfCBudWxsO1xufVxuIl19