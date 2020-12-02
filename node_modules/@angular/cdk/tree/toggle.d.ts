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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodeToggle<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodeToggle<any>, "[cdkTreeNodeToggle]", never, { "recursive": "cdkTreeNodeToggleRecursive"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmQudHMiLCJzb3VyY2VzIjpbInRvZ2dsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDZGtUcmVlLCBDZGtUcmVlTm9kZSB9IGZyb20gJy4vdHJlZSc7XG4vKipcbiAqIE5vZGUgdG9nZ2xlIHRvIGV4cGFuZC9jb2xsYXBzZSB0aGUgbm9kZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGVUb2dnbGU8VD4ge1xuICAgIHByb3RlY3RlZCBfdHJlZTogQ2RrVHJlZTxUPjtcbiAgICBwcm90ZWN0ZWQgX3RyZWVOb2RlOiBDZGtUcmVlTm9kZTxUPjtcbiAgICAvKiogV2hldGhlciBleHBhbmQvY29sbGFwc2UgdGhlIG5vZGUgcmVjdXJzaXZlbHkuICovXG4gICAgZ2V0IHJlY3Vyc2l2ZSgpOiBib29sZWFuO1xuICAgIHNldCByZWN1cnNpdmUodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByb3RlY3RlZCBfcmVjdXJzaXZlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKF90cmVlOiBDZGtUcmVlPFQ+LCBfdHJlZU5vZGU6IENka1RyZWVOb2RlPFQ+KTtcbiAgICBfdG9nZ2xlKGV2ZW50OiBFdmVudCk6IHZvaWQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlY3Vyc2l2ZTogQm9vbGVhbklucHV0O1xufVxuIl19