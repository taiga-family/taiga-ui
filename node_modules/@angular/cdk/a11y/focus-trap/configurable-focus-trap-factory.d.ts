/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
import { ConfigurableFocusTrap } from './configurable-focus-trap';
import { ConfigurableFocusTrapConfig } from './configurable-focus-trap-config';
import { FocusTrapInertStrategy } from './focus-trap-inert-strategy';
import { FocusTrapManager } from './focus-trap-manager';
/** Factory that allows easy instantiation of configurable focus traps. */
import * as ɵngcc0 from '@angular/core';
export declare class ConfigurableFocusTrapFactory {
    private _checker;
    private _ngZone;
    private _focusTrapManager;
    private _document;
    private _inertStrategy;
    constructor(_checker: InteractivityChecker, _ngZone: NgZone, _focusTrapManager: FocusTrapManager, _document: any, _inertStrategy?: FocusTrapInertStrategy);
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param config The focus trap configuration.
     * @returns The created focus trap instance.
     */
    create(element: HTMLElement, config?: ConfigurableFocusTrapConfig): ConfigurableFocusTrap;
    /**
     * @deprecated Pass a config object instead of the `deferCaptureElements` flag.
     * @breaking-change 11.0.0
     */
    create(element: HTMLElement, deferCaptureElements: boolean): ConfigurableFocusTrap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurableFocusTrapFactory, [null, null, null, null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWZvY3VzLXRyYXAtZmFjdG9yeS5kLnRzIiwic291cmNlcyI6WyJjb25maWd1cmFibGUtZm9jdXMtdHJhcC1mYWN0b3J5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcmFjdGl2aXR5Q2hlY2tlciB9IGZyb20gJy4uL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlRm9jdXNUcmFwIH0gZnJvbSAnLi9jb25maWd1cmFibGUtZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVGb2N1c1RyYXBDb25maWcgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWNvbmZpZyc7XG5pbXBvcnQgeyBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5IH0gZnJvbSAnLi9mb2N1cy10cmFwLWluZXJ0LXN0cmF0ZWd5JztcbmltcG9ydCB7IEZvY3VzVHJhcE1hbmFnZXIgfSBmcm9tICcuL2ZvY3VzLXRyYXAtbWFuYWdlcic7XG4vKiogRmFjdG9yeSB0aGF0IGFsbG93cyBlYXN5IGluc3RhbnRpYXRpb24gb2YgY29uZmlndXJhYmxlIGZvY3VzIHRyYXBzLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBfY2hlY2tlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwTWFuYWdlcjtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9pbmVydFN0cmF0ZWd5O1xuICAgIGNvbnN0cnVjdG9yKF9jaGVja2VyOiBJbnRlcmFjdGl2aXR5Q2hlY2tlciwgX25nWm9uZTogTmdab25lLCBfZm9jdXNUcmFwTWFuYWdlcjogRm9jdXNUcmFwTWFuYWdlciwgX2RvY3VtZW50OiBhbnksIF9pbmVydFN0cmF0ZWd5PzogRm9jdXNUcmFwSW5lcnRTdHJhdGVneSk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZvY3VzLXRyYXBwZWQgcmVnaW9uIGFyb3VuZCB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBhcm91bmQgd2hpY2ggZm9jdXMgd2lsbCBiZSB0cmFwcGVkLlxuICAgICAqIEBwYXJhbSBjb25maWcgVGhlIGZvY3VzIHRyYXAgY29uZmlndXJhdGlvbi5cbiAgICAgKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBmb2N1cyB0cmFwIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGNyZWF0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnPzogQ29uZmlndXJhYmxlRm9jdXNUcmFwQ29uZmlnKTogQ29uZmlndXJhYmxlRm9jdXNUcmFwO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFBhc3MgYSBjb25maWcgb2JqZWN0IGluc3RlYWQgb2YgdGhlIGBkZWZlckNhcHR1cmVFbGVtZW50c2AgZmxhZy5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgICAqL1xuICAgIGNyZWF0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGVmZXJDYXB0dXJlRWxlbWVudHM6IGJvb2xlYW4pOiBDb25maWd1cmFibGVGb2N1c1RyYXA7XG59XG4iXX0=