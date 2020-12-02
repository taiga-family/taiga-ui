/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
export declare class CdkDropListGroup<T> implements OnDestroy {
    /** Drop lists registered inside the group. */
    readonly _items: Set<T>;
    /** Whether starting a dragging sequence from inside this group is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
}
