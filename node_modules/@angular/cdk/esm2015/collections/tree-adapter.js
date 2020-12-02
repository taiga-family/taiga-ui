/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/tree-adapter.ts
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
 * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
 * data back into its original structure. Should be used in conjunction with the cdk-tree.
 * @record
 * @template T
 */
export function TreeDataNodeFlattener() { }
if (false) {
    /**
     * Transforms a set of hierarchical structured data into a flattened data array.
     * @param {?} structuredData
     * @return {?}
     */
    TreeDataNodeFlattener.prototype.flattenNodes = function (structuredData) { };
    /**
     * Expands a flattened array of data into its hierarchical form using the provided expansion
     * model.
     * @param {?} nodes
     * @param {?} expansionModel
     * @return {?}
     */
    TreeDataNodeFlattener.prototype.expandFlattenedNodes = function (nodes, expansionModel) { };
    /**
     * Put node descendants of node in array.
     * If `onlyExpandable` is true, then only process expandable descendants.
     * @param {?} node
     * @param {?} nodes
     * @param {?} onlyExpandable
     * @return {?}
     */
    TreeDataNodeFlattener.prototype.nodeDescendents = function (node, nodes, onlyExpandable) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jb2xsZWN0aW9ucy90cmVlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsMkNBZUM7Ozs7Ozs7SUFiQyw2RUFBeUM7Ozs7Ozs7O0lBTXpDLDRGQUF5RTs7Ozs7Ozs7O0lBTXpFLDZGQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1NlbGVjdGlvbk1vZGVsfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjYW4gZmxhdHRlbiBoaWVyYXJjaGljYWwgc3RydWN0dXJlZCBkYXRhIGFuZCByZS1leHBhbmQgdGhlIGZsYXR0ZW5lZFxuICogZGF0YSBiYWNrIGludG8gaXRzIG9yaWdpbmFsIHN0cnVjdHVyZS4gU2hvdWxkIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgY2RrLXRyZWUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZURhdGFOb2RlRmxhdHRlbmVyPFQ+IHtcbiAgLyoqIFRyYW5zZm9ybXMgYSBzZXQgb2YgaGllcmFyY2hpY2FsIHN0cnVjdHVyZWQgZGF0YSBpbnRvIGEgZmxhdHRlbmVkIGRhdGEgYXJyYXkuICovXG4gIGZsYXR0ZW5Ob2RlcyhzdHJ1Y3R1cmVkRGF0YTogYW55W10pOiBUW107XG5cbiAgLyoqXG4gICAqIEV4cGFuZHMgYSBmbGF0dGVuZWQgYXJyYXkgb2YgZGF0YSBpbnRvIGl0cyBoaWVyYXJjaGljYWwgZm9ybSB1c2luZyB0aGUgcHJvdmlkZWQgZXhwYW5zaW9uXG4gICAqIG1vZGVsLlxuICAgKi9cbiAgZXhwYW5kRmxhdHRlbmVkTm9kZXMobm9kZXM6IFRbXSwgZXhwYW5zaW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPFQ+KTogVFtdO1xuXG4gIC8qKlxuICAgKiBQdXQgbm9kZSBkZXNjZW5kYW50cyBvZiBub2RlIGluIGFycmF5LlxuICAgKiBJZiBgb25seUV4cGFuZGFibGVgIGlzIHRydWUsIHRoZW4gb25seSBwcm9jZXNzIGV4cGFuZGFibGUgZGVzY2VuZGFudHMuXG4gICAqL1xuICBub2RlRGVzY2VuZGVudHMobm9kZTogVCwgbm9kZXM6IFRbXSwgb25seUV4cGFuZGFibGU6IGJvb2xlYW4pOiB2b2lkO1xufVxuIl19