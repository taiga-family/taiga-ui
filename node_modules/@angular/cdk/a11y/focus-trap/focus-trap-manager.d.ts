/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A FocusTrap managed by FocusTrapManager.
 * Implemented by ConfigurableFocusTrap to avoid circular dependency.
 */
import * as ɵngcc0 from '@angular/core';
export interface ManagedFocusTrap {
    _enable(): void;
    _disable(): void;
    focusInitialElementWhenReady(): Promise<boolean>;
}
/** Injectable that ensures only the most recently enabled FocusTrap is active. */
export declare class FocusTrapManager {
    private _focusTrapStack;
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap: ManagedFocusTrap): void;
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap: ManagedFocusTrap): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusTrapManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbImZvY3VzLXRyYXAtbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEEgRm9jdXNUcmFwIG1hbmFnZWQgYnkgRm9jdXNUcmFwTWFuYWdlci5cbiAqIEltcGxlbWVudGVkIGJ5IENvbmZpZ3VyYWJsZUZvY3VzVHJhcCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hbmFnZWRGb2N1c1RyYXAge1xuICAgIF9lbmFibGUoKTogdm9pZDtcbiAgICBfZGlzYWJsZSgpOiB2b2lkO1xuICAgIGZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPjtcbn1cbi8qKiBJbmplY3RhYmxlIHRoYXQgZW5zdXJlcyBvbmx5IHRoZSBtb3N0IHJlY2VudGx5IGVuYWJsZWQgRm9jdXNUcmFwIGlzIGFjdGl2ZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvY3VzVHJhcE1hbmFnZXIge1xuICAgIHByaXZhdGUgX2ZvY3VzVHJhcFN0YWNrO1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoZSBGb2N1c1RyYXAgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2ssIGFuZCB0aGVuIHB1c2hlc1xuICAgICAqIHRoZSBuZXcgRm9jdXNUcmFwIG9udG8gdGhlIHN0YWNrLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGZvY3VzVHJhcDogTWFuYWdlZEZvY3VzVHJhcCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgRm9jdXNUcmFwIGZyb20gdGhlIHN0YWNrLCBhbmQgYWN0aXZhdGVzIHRoZVxuICAgICAqIEZvY3VzVHJhcCB0aGF0IGlzIHRoZSBuZXcgdG9wIG9mIHRoZSBzdGFjay5cbiAgICAgKi9cbiAgICBkZXJlZ2lzdGVyKGZvY3VzVHJhcDogTWFuYWdlZEZvY3VzVHJhcCk6IHZvaWQ7XG59XG4iXX0=