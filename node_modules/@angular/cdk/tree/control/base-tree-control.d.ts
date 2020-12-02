/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { TreeControl } from './tree-control';
/** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */
export declare abstract class BaseTreeControl<T> implements TreeControl<T> {
    /** Gets a list of descendent data nodes of a subtree rooted at given data node recursively. */
    abstract getDescendants(dataNode: T): T[];
    /** Expands all data nodes in the tree. */
    abstract expandAll(): void;
    /** Saved data node for `expandAll` action. */
    dataNodes: T[];
    /** A selection model with multi-selection to track expansion status. */
    expansionModel: SelectionModel<T>;
    /** Get depth of a given data node, return the level number. This is for flat tree node. */
    getLevel: (dataNode: T) => number;
    /**
     * Whether the data node is expandable. Returns true if expandable.
     * This is for flat tree node.
     */
    isExpandable: (dataNode: T) => boolean;
    /** Gets a stream that emits whenever the given data node's children change. */
    getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null);
    /** Toggles one single data node's expanded/collapsed state. */
    toggle(dataNode: T): void;
    /** Expands one single data node. */
    expand(dataNode: T): void;
    /** Collapses one single data node. */
    collapse(dataNode: T): void;
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
    isExpanded(dataNode: T): boolean;
    /** Toggles a subtree rooted at `node` recursively. */
    toggleDescendants(dataNode: T): void;
    /** Collapse all dataNodes in the tree. */
    collapseAll(): void;
    /** Expands a subtree rooted at given data node recursively. */
    expandDescendants(dataNode: T): void;
    /** Collapses a subtree rooted at given data node recursively. */
    collapseDescendants(dataNode: T): void;
}
