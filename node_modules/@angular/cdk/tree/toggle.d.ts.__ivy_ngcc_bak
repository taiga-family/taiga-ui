/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkTree, CdkTreeNode } from './tree';
/**
 * Node toggle to expand/collapse the node.
 */
export declare class CdkTreeNodeToggle<T> {
    protected _tree: CdkTree<T>;
    protected _treeNode: CdkTreeNode<T>;
    /** Whether expand/collapse the node recursively. */
    get recursive(): boolean;
    set recursive(value: boolean);
    protected _recursive: boolean;
    constructor(_tree: CdkTree<T>, _treeNode: CdkTreeNode<T>);
    _toggle(event: Event): void;
    static ngAcceptInputType_recursive: BooleanInput;
}
