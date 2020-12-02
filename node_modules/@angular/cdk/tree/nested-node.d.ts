/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ElementRef, IterableDiffers, OnDestroy, QueryList } from '@angular/core';
import { CdkTreeNodeOutlet } from './outlet';
import { CdkTree, CdkTreeNode } from './tree';
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkNestedTreeNode<T> extends CdkTreeNode<T> implements AfterContentInit, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    protected _differs: IterableDiffers;
    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDiffer;
    /** The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`. */
    protected _children: T[];
    /** The children node placeholder. */
    nodeOutlet: QueryList<CdkTreeNodeOutlet>;
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>, _differs: IterableDiffers);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Add children dataNodes to the NodeOutlet */
    protected updateChildrenNodes(children?: T[]): void;
    /** Clear the children dataNodes. */
    protected _clear(): void;
    /** Gets the outlet for the current node. */
    private _getNodeOutlet;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkNestedTreeNode<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkNestedTreeNode<any>, "cdk-nested-tree-node", ["cdkNestedTreeNode"], {}, {}, ["nodeOutlet"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW5vZGUuZC50cyIsInNvdXJjZXMiOlsibmVzdGVkLW5vZGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEVsZW1lbnRSZWYsIEl0ZXJhYmxlRGlmZmVycywgT25EZXN0cm95LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka1RyZWVOb2RlT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHsgQ2RrVHJlZSwgQ2RrVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUnO1xuLyoqXG4gKiBOZXN0ZWQgbm9kZSBpcyBhIGNoaWxkIG9mIGA8Y2RrLXRyZWU+YC4gSXQgd29ya3Mgd2l0aCBuZXN0ZWQgdHJlZS5cbiAqIEJ5IHVzaW5nIGBjZGstbmVzdGVkLXRyZWUtbm9kZWAgY29tcG9uZW50IGluIHRyZWUgbm9kZSB0ZW1wbGF0ZSwgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBub2RlIHdpbGxcbiAqIGJlIGFkZGVkIGluIHRoZSBgY2RrVHJlZU5vZGVPdXRsZXRgIGluIHRyZWUgbm9kZSB0ZW1wbGF0ZS5cbiAqIFRoZSBjaGlsZHJlbiBvZiBub2RlIHdpbGwgYmUgYXV0b21hdGljYWxseSBhZGRlZCB0byBgY2RrVHJlZU5vZGVPdXRsZXRgLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtOZXN0ZWRUcmVlTm9kZTxUPiBleHRlbmRzIENka1RyZWVOb2RlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByb3RlY3RlZCBfdHJlZTogQ2RrVHJlZTxUPjtcbiAgICBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycztcbiAgICAvKiogRGlmZmVyIHVzZWQgdG8gZmluZCB0aGUgY2hhbmdlcyBpbiB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gICAgcHJpdmF0ZSBfZGF0YURpZmZlcjtcbiAgICAvKiogVGhlIGNoaWxkcmVuIGRhdGEgZGF0YU5vZGVzIG9mIGN1cnJlbnQgbm9kZS4gVGhleSB3aWxsIGJlIHBsYWNlZCBpbiBgQ2RrVHJlZU5vZGVPdXRsZXRgLiAqL1xuICAgIHByb3RlY3RlZCBfY2hpbGRyZW46IFRbXTtcbiAgICAvKiogVGhlIGNoaWxkcmVuIG5vZGUgcGxhY2Vob2xkZXIuICovXG4gICAgbm9kZU91dGxldDogUXVlcnlMaXN0PENka1RyZWVOb2RlT3V0bGV0PjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF90cmVlOiBDZGtUcmVlPFQ+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBBZGQgY2hpbGRyZW4gZGF0YU5vZGVzIHRvIHRoZSBOb2RlT3V0bGV0ICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNoaWxkcmVuTm9kZXMoY2hpbGRyZW4/OiBUW10pOiB2b2lkO1xuICAgIC8qKiBDbGVhciB0aGUgY2hpbGRyZW4gZGF0YU5vZGVzLiAqL1xuICAgIHByb3RlY3RlZCBfY2xlYXIoKTogdm9pZDtcbiAgICAvKiogR2V0cyB0aGUgb3V0bGV0IGZvciB0aGUgY3VycmVudCBub2RlLiAqL1xuICAgIHByaXZhdGUgX2dldE5vZGVPdXRsZXQ7XG59XG4iXX0=