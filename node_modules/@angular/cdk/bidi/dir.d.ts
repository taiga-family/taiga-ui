/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { Direction, Directionality } from './directionality';
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Dir implements Directionality, AfterContentInit, OnDestroy {
    /** Normalized direction that accounts for invalid/unsupported values. */
    private _dir;
    /** Whether the `value` has been set to its initial value. */
    private _isInitialized;
    /** Direction as passed in by the consumer. */
    _rawDir: string;
    /** Event emitted when the direction changes. */
    change: EventEmitter<Direction>;
    /** @docs-private */
    get dir(): Direction;
    set dir(value: Direction);
    /** Current layout direction of the element. */
    get value(): Direction;
    /** Initialize once default value has been set. */
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Dir, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Dir, "[dir]", ["dir"], { "dir": "dir"; }, { "change": "dirChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLmQudHMiLCJzb3VyY2VzIjpbImRpci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICcuL2RpcmVjdGlvbmFsaXR5Jztcbi8qKlxuICogRGlyZWN0aXZlIHRvIGxpc3RlbiBmb3IgY2hhbmdlcyBvZiBkaXJlY3Rpb24gb2YgcGFydCBvZiB0aGUgRE9NLlxuICpcbiAqIFByb3ZpZGVzIGl0c2VsZiBhcyBEaXJlY3Rpb25hbGl0eSBzdWNoIHRoYXQgZGVzY2VuZGFudCBkaXJlY3RpdmVzIG9ubHkgbmVlZCB0byBldmVyIGluamVjdFxuICogRGlyZWN0aW9uYWxpdHkgdG8gZ2V0IHRoZSBjbG9zZXN0IGRpcmVjdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlyIGltcGxlbWVudHMgRGlyZWN0aW9uYWxpdHksIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgLyoqIE5vcm1hbGl6ZWQgZGlyZWN0aW9uIHRoYXQgYWNjb3VudHMgZm9yIGludmFsaWQvdW5zdXBwb3J0ZWQgdmFsdWVzLiAqL1xuICAgIHByaXZhdGUgX2RpcjtcbiAgICAvKiogV2hldGhlciB0aGUgYHZhbHVlYCBoYXMgYmVlbiBzZXQgdG8gaXRzIGluaXRpYWwgdmFsdWUuICovXG4gICAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZDtcbiAgICAvKiogRGlyZWN0aW9uIGFzIHBhc3NlZCBpbiBieSB0aGUgY29uc3VtZXIuICovXG4gICAgX3Jhd0Rpcjogc3RyaW5nO1xuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRpcmVjdGlvbiBjaGFuZ2VzLiAqL1xuICAgIGNoYW5nZTogRXZlbnRFbWl0dGVyPERpcmVjdGlvbj47XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBnZXQgZGlyKCk6IERpcmVjdGlvbjtcbiAgICBzZXQgZGlyKHZhbHVlOiBEaXJlY3Rpb24pO1xuICAgIC8qKiBDdXJyZW50IGxheW91dCBkaXJlY3Rpb24gb2YgdGhlIGVsZW1lbnQuICovXG4gICAgZ2V0IHZhbHVlKCk6IERpcmVjdGlvbjtcbiAgICAvKiogSW5pdGlhbGl6ZSBvbmNlIGRlZmF1bHQgdmFsdWUgaGFzIGJlZW4gc2V0LiAqL1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=