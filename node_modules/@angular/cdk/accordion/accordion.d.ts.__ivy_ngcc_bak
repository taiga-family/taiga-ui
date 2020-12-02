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
}
