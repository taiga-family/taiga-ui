/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkAccordion implements OnDestroy, OnChanges {
    /** Emits when the state of the accordion changes */
    readonly _stateChanges: Subject<SimpleChanges>;
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    readonly _openCloseAllActions: Subject<boolean>;
    /** A readonly id value to use for unique selection coordination. */
    readonly id: string;
    /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
    get multi(): boolean;
    set multi(multi: boolean);
    private _multi;
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    openAll(): void;
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    closeAll(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _openCloseAll;
    static ngAcceptInputType_multi: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkAccordion, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkAccordion, "cdk-accordion, [cdkAccordion]", ["cdkAccordion"], { "multi": "multi"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmQudHMiLCJzb3VyY2VzIjpbImFjY29yZGlvbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIERpcmVjdGl2ZSB3aG9zZSBwdXJwb3NlIGlzIHRvIG1hbmFnZSB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgQ2RrQWNjb3JkaW9uSXRlbSBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQWNjb3JkaW9uIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGNoYW5nZXMgKi9cbiAgICByZWFkb25seSBfc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+O1xuICAgIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0cnVlL2ZhbHNlIHdoZW4gb3BlbkFsbC9jbG9zZUFsbCBpcyB0cmlnZ2VyZWQuICovXG4gICAgcmVhZG9ubHkgX29wZW5DbG9zZUFsbEFjdGlvbnM6IFN1YmplY3Q8Ym9vbGVhbj47XG4gICAgLyoqIEEgcmVhZG9ubHkgaWQgdmFsdWUgdG8gdXNlIGZvciB1bmlxdWUgc2VsZWN0aW9uIGNvb3JkaW5hdGlvbi4gKi9cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBhY2NvcmRpb24gc2hvdWxkIGFsbG93IG11bHRpcGxlIGV4cGFuZGVkIGFjY29yZGlvbiBpdGVtcyBzaW11bHRhbmVvdXNseS4gKi9cbiAgICBnZXQgbXVsdGkoKTogYm9vbGVhbjtcbiAgICBzZXQgbXVsdGkobXVsdGk6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX211bHRpO1xuICAgIC8qKiBPcGVucyBhbGwgZW5hYmxlZCBhY2NvcmRpb24gaXRlbXMgaW4gYW4gYWNjb3JkaW9uIHdoZXJlIG11bHRpIGlzIGVuYWJsZWQuICovXG4gICAgb3BlbkFsbCgpOiB2b2lkO1xuICAgIC8qKiBDbG9zZXMgYWxsIGVuYWJsZWQgYWNjb3JkaW9uIGl0ZW1zIGluIGFuIGFjY29yZGlvbiB3aGVyZSBtdWx0aSBpcyBlbmFibGVkLiAqL1xuICAgIGNsb3NlQWxsKCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIF9vcGVuQ2xvc2VBbGw7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX211bHRpOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=