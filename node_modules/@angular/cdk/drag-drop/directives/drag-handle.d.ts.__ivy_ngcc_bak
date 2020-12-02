/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
/** Handle that can be used to drag and CdkDrag instance. */
export declare class CdkDragHandle implements OnDestroy {
    element: ElementRef<HTMLElement>;
    /** Closest parent draggable instance. */
    _parentDrag: {} | undefined;
    /** Emits when the state of the handle has changed. */
    _stateChanges: Subject<CdkDragHandle>;
    /** Whether starting to drag through this handle is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    constructor(element: ElementRef<HTMLElement>, parentDrag?: any);
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
}
