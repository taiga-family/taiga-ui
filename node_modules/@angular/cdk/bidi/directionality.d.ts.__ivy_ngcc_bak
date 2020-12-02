/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, OnDestroy } from '@angular/core';
export declare type Direction = 'ltr' | 'rtl';
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
export declare class Directionality implements OnDestroy {
    /** The current 'ltr' or 'rtl' value. */
    readonly value: Direction;
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
    readonly change: EventEmitter<Direction>;
    constructor(_document?: any);
    ngOnDestroy(): void;
}
