/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Directionality, [{ optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uYWxpdHkuZC50cyIsInNvdXJjZXMiOlsiZGlyZWN0aW9uYWxpdHkuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIHR5cGUgRGlyZWN0aW9uID0gJ2x0cicgfCAncnRsJztcbi8qKlxuICogVGhlIGRpcmVjdGlvbmFsaXR5IChMVFIgLyBSVEwpIGNvbnRleHQgZm9yIHRoZSBhcHBsaWNhdGlvbiAob3IgYSBzdWJ0cmVlIG9mIGl0KS5cbiAqIEV4cG9zZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIGFuZCBhIHN0cmVhbSBvZiBkaXJlY3Rpb24gY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlyZWN0aW9uYWxpdHkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8qKiBUaGUgY3VycmVudCAnbHRyJyBvciAncnRsJyB2YWx1ZS4gKi9cbiAgICByZWFkb25seSB2YWx1ZTogRGlyZWN0aW9uO1xuICAgIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgJ2x0cicgLyAncnRsJyBzdGF0ZSBjaGFuZ2VzLiAqL1xuICAgIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPERpcmVjdGlvbj47XG4gICAgY29uc3RydWN0b3IoX2RvY3VtZW50PzogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19