/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
/** Context provided to the tree node component. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTreeNodeOutletContext<T> {
    /** Data for the node. */
    $implicit: T;
    /** Depth of the node. */
    level: number;
    /** Index location of the node. */
    index?: number;
    /** Length of the number of total dataNodes. */
    count?: number;
    constructor(data: T);
}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */
export declare class CdkTreeNodeDef<T> {
    template: TemplateRef<any>;
    /**
     * Function that should return true if this node template should be used for the provided node
     * data and index. If left undefined, this node will be considered the default node template to
     * use when no other when functions return true for the data.
     * For every node, there must be at least one when function that passes or an undefined to
     * default.
     */
    when: (index: number, nodeData: T) => boolean;
    /** @docs-private */
    constructor(template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodeDef<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodeDef<any>, "[cdkTreeNodeDef]", never, { "when": "cdkTreeNodeDefWhen"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5kLnRzIiwic291cmNlcyI6WyJub2RlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKiogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgdHJlZSBub2RlIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyZWVOb2RlT3V0bGV0Q29udGV4dDxUPiB7XG4gICAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xuICAgICRpbXBsaWNpdDogVDtcbiAgICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXG4gICAgbGV2ZWw6IG51bWJlcjtcbiAgICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXG4gICAgaW5kZXg/OiBudW1iZXI7XG4gICAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cbiAgICBjb3VudD86IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBUKTtcbn1cbi8qKlxuICogRGF0YSBub2RlIGRlZmluaXRpb24gZm9yIHRoZSBDZGtUcmVlLlxuICogQ2FwdHVyZXMgdGhlIG5vZGUncyB0ZW1wbGF0ZSBhbmQgYSB3aGVuIHByZWRpY2F0ZSB0aGF0IGRlc2NyaWJlcyB3aGVuIHRoaXMgbm9kZSBzaG91bGQgYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGVEZWY8VD4ge1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoaXMgbm9kZSB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHByb3ZpZGVkIG5vZGVcbiAgICAgKiBkYXRhIGFuZCBpbmRleC4gSWYgbGVmdCB1bmRlZmluZWQsIHRoaXMgbm9kZSB3aWxsIGJlIGNvbnNpZGVyZWQgdGhlIGRlZmF1bHQgbm9kZSB0ZW1wbGF0ZSB0b1xuICAgICAqIHVzZSB3aGVuIG5vIG90aGVyIHdoZW4gZnVuY3Rpb25zIHJldHVybiB0cnVlIGZvciB0aGUgZGF0YS5cbiAgICAgKiBGb3IgZXZlcnkgbm9kZSwgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG9cbiAgICAgKiBkZWZhdWx0LlxuICAgICAqL1xuICAgIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbiJdfQ==