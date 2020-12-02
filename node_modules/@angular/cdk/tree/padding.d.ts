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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodePadding<any>, [null, null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodePadding<any>, "[cdkTreeNodePadding]", never, { "level": "cdkTreeNodePadding"; "indent": "cdkTreeNodePaddingIndent"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kLnRzIiwic291cmNlcyI6WyJwYWRkaW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTnVtYmVySW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka1RyZWUsIENka1RyZWVOb2RlIH0gZnJvbSAnLi90cmVlJztcbi8qKlxuICogSW5kZW50IGZvciB0aGUgY2hpbGRyZW4gdHJlZSBkYXRhTm9kZXMuXG4gKiBUaGlzIGRpcmVjdGl2ZSB3aWxsIGFkZCBsZWZ0LXBhZGRpbmcgdG8gdGhlIG5vZGUgdG8gc2hvdyBoaWVyYXJjaHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyZWVOb2RlUGFkZGluZzxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfdHJlZU5vZGU7XG4gICAgcHJpdmF0ZSBfdHJlZTtcbiAgICBwcml2YXRlIF9lbGVtZW50O1xuICAgIHByaXZhdGUgX2RpcjtcbiAgICAvKiogQ3VycmVudCBwYWRkaW5nIHZhbHVlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuIFVzZWQgdG8gYXZvaWQgdW5uZWNlc3NhcmlseSBoaXR0aW5nIHRoZSBET00uICovXG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZGRpbmc7XG4gICAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICAgIHByaXZhdGUgX2Rlc3Ryb3llZDtcbiAgICAvKiogQ1NTIHVuaXRzIHVzZWQgZm9yIHRoZSBpbmRlbnRhdGlvbiB2YWx1ZS4gKi9cbiAgICBpbmRlbnRVbml0czogc3RyaW5nO1xuICAgIC8qKiBUaGUgbGV2ZWwgb2YgZGVwdGggb2YgdGhlIHRyZWUgbm9kZS4gVGhlIHBhZGRpbmcgd2lsbCBiZSBgbGV2ZWwgKiBpbmRlbnRgIHBpeGVscy4gKi9cbiAgICBnZXQgbGV2ZWwoKTogbnVtYmVyO1xuICAgIHNldCBsZXZlbCh2YWx1ZTogbnVtYmVyKTtcbiAgICBfbGV2ZWw6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZW50IGZvciBlYWNoIGxldmVsLiBDYW4gYmUgYSBudW1iZXIgb3IgYSBDU1Mgc3RyaW5nLlxuICAgICAqIERlZmF1bHQgbnVtYmVyIDQwcHggZnJvbSBtYXRlcmlhbCBkZXNpZ24gbWVudSBzdWItbWVudSBzcGVjLlxuICAgICAqL1xuICAgIGdldCBpbmRlbnQoKTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHNldCBpbmRlbnQoaW5kZW50OiBudW1iZXIgfCBzdHJpbmcpO1xuICAgIF9pbmRlbnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihfdHJlZU5vZGU6IENka1RyZWVOb2RlPFQ+LCBfdHJlZTogQ2RrVHJlZTxUPiwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgX3JlbmRlcmVyIHBhcmFtZXRlciBubyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgICAqL1xuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9kaXI6IERpcmVjdGlvbmFsaXR5KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBUaGUgcGFkZGluZyBpbmRlbnQgdmFsdWUgZm9yIHRoZSB0cmVlIG5vZGUuIFJldHVybnMgYSBzdHJpbmcgd2l0aCBweCBudW1iZXJzIGlmIG5vdCBudWxsLiAqL1xuICAgIF9wYWRkaW5nSW5kZW50KCk6IHN0cmluZyB8IG51bGw7XG4gICAgX3NldFBhZGRpbmcoZm9yY2VDaGFuZ2U/OiBib29sZWFuKTogdm9pZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGV2ZWw6IE51bWJlcklucHV0O1xufVxuIl19