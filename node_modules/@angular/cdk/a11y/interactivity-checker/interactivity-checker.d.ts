/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
import * as ɵngcc0 from '@angular/core';
export declare class InteractivityChecker {
    private _platform;
    constructor(_platform: Platform);
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element: HTMLElement): boolean;
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element: HTMLElement): boolean;
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element: HTMLElement): boolean;
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    isFocusable(element: HTMLElement): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InteractivityChecker, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpdml0eS1jaGVja2VyLmQudHMiLCJzb3VyY2VzIjpbImludGVyYWN0aXZpdHktY2hlY2tlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuLyoqXG4gKiBVdGlsaXR5IGZvciBjaGVja2luZyB0aGUgaW50ZXJhY3Rpdml0eSBvZiBhbiBlbGVtZW50LCBzdWNoIGFzIHdoZXRoZXIgaXMgaXMgZm9jdXNhYmxlIG9yXG4gKiB0YWJiYWJsZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW50ZXJhY3Rpdml0eUNoZWNrZXIge1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIGNvbnN0cnVjdG9yKF9wbGF0Zm9ybTogUGxhdGZvcm0pO1xuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGRpc2FibGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBiZSBjaGVja2VkLlxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgaXNEaXNhYmxlZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBmb3IgdGhlIHB1cnBvc2VzIG9mIGludGVyYWN0aXZpdHkuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgY2FwdHVyZSBzdGF0ZXMgbGlrZSBgZGlzcGxheTogbm9uZWAgYW5kIGB2aXNpYmlsaXR5OiBoaWRkZW5gLCBidXQgbm90IHRoaW5ncyBsaWtlXG4gICAgICogYmVpbmcgY2xpcHBlZCBieSBhbiBgb3ZlcmZsb3c6IGhpZGRlbmAgcGFyZW50IG9yIGJlaW5nIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyB2aXNpYmxlLlxuICAgICAqL1xuICAgIGlzVmlzaWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgY2FuIGJlIHJlYWNoZWQgdmlhIFRhYiBrZXkuXG4gICAgICogQXNzdW1lcyB0aGF0IHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gY2hlY2tlZCB3aXRoIGlzRm9jdXNhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBiZSBjaGVja2VkLlxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdGFiYmFibGUuXG4gICAgICovXG4gICAgaXNUYWJiYWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgY2FuIGJlIGZvY3VzZWQgYnkgdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUuXG4gICAgICovXG4gICAgaXNGb2N1c2FibGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xufVxuIl19