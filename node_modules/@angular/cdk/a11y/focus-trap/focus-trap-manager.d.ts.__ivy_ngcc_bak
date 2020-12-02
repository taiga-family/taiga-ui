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
}
