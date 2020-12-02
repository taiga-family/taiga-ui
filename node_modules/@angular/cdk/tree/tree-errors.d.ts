/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when there is no usable data.
 * @docs-private
 */
export declare function getTreeNoValidDataSourceError(): Error;
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * @docs-private
 */
export declare function getTreeMultipleDefaultNodeDefsError(): Error;
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * @docs-private
 */
export declare function getTreeMissingMatchingNodeDefError(): Error;
/**
 * Returns an error to be thrown when there are tree control.
 * @docs-private
 */
export declare function getTreeControlMissingError(): Error;
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * @docs-private
 */
export declare function getTreeControlFunctionsMissingError(): Error;
