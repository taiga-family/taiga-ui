/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { NumberInput } from '@angular/cdk/coercion';
import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CdkTree, CdkTreeNode } from './tree';
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */
export declare class CdkTreeNodePadding<T> implements OnDestroy {
    private _treeNode;
    private _tree;
    private _element;
    private _dir;
    /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
    private _currentPadding;
    /** Subject that emits when the component has been destroyed. */
    private _destroyed;
    /** CSS units used for the indentation value. */
    indentUnits: string;
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level(): number;
    set level(value: number);
    _level: number;
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     */
    get indent(): number | string;
    set indent(indent: number | string);
    _indent: number;
    constructor(_treeNode: CdkTreeNode<T>, _tree: CdkTree<T>, 
    /**
     * @deprecated _renderer parameter no longer being used. To be removed.
     * @breaking-change 11.0.0
     */
    _renderer: Renderer2, _element: ElementRef<HTMLElement>, _dir: Directionality);
    ngOnDestroy(): void;
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    _paddingIndent(): string | null;
    _setPadding(forceChange?: boolean): void;
    static ngAcceptInputType_level: NumberInput;
}
