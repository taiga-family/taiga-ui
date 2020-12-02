/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { BaseTreeControl } from './base-tree-control';
/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */
export declare class NestedTreeControl<T> extends BaseTreeControl<T> {
    getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null);
    /** Construct with nested tree function getChildren. */
    constructor(getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null));
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     */
    expandAll(): void;
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
    getDescendants(dataNode: T): T[];
    /** A helper function to get descendants recursively. */
    protected _getDescendants(descendants: T[], dataNode: T): void;
}
