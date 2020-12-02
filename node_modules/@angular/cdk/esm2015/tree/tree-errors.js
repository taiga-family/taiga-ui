/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/tree-errors.ts
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
 * Returns an error to be thrown when there is no usable data.
 * \@docs-private
 * @return {?}
 */
export function getTreeNoValidDataSourceError() {
    return Error(`A valid data source must be provided.`);
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * \@docs-private
 * @return {?}
 */
export function getTreeMultipleDefaultNodeDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * \@docs-private
 * @return {?}
 */
export function getTreeMissingMatchingNodeDefError() {
    return Error(`Could not find a matching node definition for the provided node data.`);
}
/**
 * Returns an error to be thrown when there are tree control.
 * \@docs-private
 * @return {?}
 */
export function getTreeControlMissingError() {
    return Error(`Could not find a tree control for the tree.`);
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * \@docs-private
 * @return {?}
 */
export function getTreeControlFunctionsMissingError() {
    return Error(`Could not find functions for nested/flat tree in tree control.`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1lcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvdHJlZS1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLE9BQU8sS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7Ozs7OztBQU1ELE1BQU0sVUFBVSxrQ0FBa0M7SUFDaEQsT0FBTyxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQztBQUN4RixDQUFDOzs7Ozs7QUFNRCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE9BQU8sS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0FBQ2pGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZXJlIGlzIG5vIHVzYWJsZSBkYXRhLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJlZU5vVmFsaWREYXRhU291cmNlRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcihgQSB2YWxpZCBkYXRhIHNvdXJjZSBtdXN0IGJlIHByb3ZpZGVkLmApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIG5vZGVzIHRoYXQgYXJlIG1pc3NpbmcgYSB3aGVuIGZ1bmN0aW9uLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJlZU11bHRpcGxlRGVmYXVsdE5vZGVEZWZzRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcihgVGhlcmUgY2FuIG9ubHkgYmUgb25lIGRlZmF1bHQgcm93IHdpdGhvdXQgYSB3aGVuIHByZWRpY2F0ZSBmdW5jdGlvbi5gKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGluZyBub2RlIGRlZnMgZm9yIGEgcGFydGljdWxhciBzZXQgb2YgZGF0YS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyZWVNaXNzaW5nTWF0Y2hpbmdOb2RlRGVmRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBtYXRjaGluZyBub2RlIGRlZmluaXRpb24gZm9yIHRoZSBwcm92aWRlZCBub2RlIGRhdGEuYCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGVyZSBhcmUgdHJlZSBjb250cm9sLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJlZUNvbnRyb2xNaXNzaW5nRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcihgQ291bGQgbm90IGZpbmQgYSB0cmVlIGNvbnRyb2wgZm9yIHRoZSB0cmVlLmApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdHJlZSBjb250cm9sIGRpZCBub3QgaW1wbGVtZW50IGZ1bmN0aW9ucyBmb3IgZmxhdC9uZXN0ZWQgbm9kZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyZWVDb250cm9sRnVuY3Rpb25zTWlzc2luZ0Vycm9yKCkge1xuICByZXR1cm4gRXJyb3IoYENvdWxkIG5vdCBmaW5kIGZ1bmN0aW9ucyBmb3IgbmVzdGVkL2ZsYXQgdHJlZSBpbiB0cmVlIGNvbnRyb2wuYCk7XG59XG4iXX0=