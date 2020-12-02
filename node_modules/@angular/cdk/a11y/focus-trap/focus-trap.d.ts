/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ElementRef, NgZone, OnDestroy, DoCheck } from '@angular/core';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FocusTrap {
    readonly _element: HTMLElement;
    private _checker;
    readonly _ngZone: NgZone;
    readonly _document: Document;
    private _startAnchor;
    private _endAnchor;
    private _hasAttached;
    protected startAnchorListener: () => boolean;
    protected endAnchorListener: () => boolean;
    /** Whether the focus trap is active. */
    get enabled(): boolean;
    set enabled(value: boolean);
    protected _enabled: boolean;
    constructor(_element: HTMLElement, _checker: InteractivityChecker, _ngZone: NgZone, _document: Document, deferAnchors?: boolean);
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy(): void;
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors(): boolean;
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusInitialElementWhenReady(): Promise<boolean>;
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusFirstTabbableElementWhenReady(): Promise<boolean>;
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusLastTabbableElementWhenReady(): Promise<boolean>;
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    private _getRegionBoundary;
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    focusInitialElement(): boolean;
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    focusFirstTabbableElement(): boolean;
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    focusLastTabbableElement(): boolean;
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    hasAttached(): boolean;
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    private _getFirstTabbableElement;
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    private _getLastTabbableElement;
    /** Creates an anchor element. */
    private _createAnchor;
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    private _toggleAnchorTabIndex;
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */
    protected toggleAnchors(enabled: boolean): void;
    /** Executes a function when the zone is stable. */
    private _executeOnStable;
}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
export declare class FocusTrapFactory {
    private _checker;
    private _ngZone;
    private _document;
    constructor(_checker: InteractivityChecker, _ngZone: NgZone, _document: any);
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element: HTMLElement, deferCaptureElements?: boolean): FocusTrap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusTrapFactory, never>;
}
/** Directive for trapping focus within a region. */
export declare class CdkTrapFocus implements OnDestroy, AfterContentInit, DoCheck {
    private _elementRef;
    private _focusTrapFactory;
    private _document;
    /** Underlying FocusTrap instance. */
    focusTrap: FocusTrap;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    private _previouslyFocusedElement;
    /** Whether the focus trap is active. */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * Whether the directive should automatially move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    get autoCapture(): boolean;
    set autoCapture(value: boolean);
    private _autoCapture;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusTrapFactory: FocusTrapFactory, _document: any);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_autoCapture: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTrapFocus, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTrapFocus, "[cdkTrapFocus]", ["cdkTrapFocus"], { "enabled": "cdkTrapFocus"; "autoCapture": "cdkTrapFocusAutoCapture"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kLnRzIiwic291cmNlcyI6WyJmb2N1cy10cmFwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW50ZXJhY3Rpdml0eUNoZWNrZXIgfSBmcm9tICcuLi9pbnRlcmFjdGl2aXR5LWNoZWNrZXIvaW50ZXJhY3Rpdml0eS1jaGVja2VyJztcbi8qKlxuICogQ2xhc3MgdGhhdCBhbGxvd3MgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIERPTSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2xhc3MgY3VycmVudGx5IHVzZXMgYSByZWxhdGl2ZWx5IHNpbXBsZSBhcHByb2FjaCB0byBmb2N1cyB0cmFwcGluZy5cbiAqIEl0IGFzc3VtZXMgdGhhdCB0aGUgdGFiIG9yZGVyIGlzIHRoZSBzYW1lIGFzIERPTSBvcmRlciwgd2hpY2ggaXMgbm90IG5lY2Vzc2FyaWx5IHRydWUuXG4gKiBUaGluZ3MgbGlrZSBgdGFiSW5kZXggPiAwYCwgZmxleCBgb3JkZXJgLCBhbmQgc2hhZG93IHJvb3RzIGNhbiBjYXVzZSB0byB0d28gdG8gbWlzYWxpZ24uXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDb25maWd1cmFibGVGb2N1c1RyYXBgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIGZvciAxMS4wLjAgUmVtb3ZlIHRoaXMgY2xhc3MuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvY3VzVHJhcCB7XG4gICAgcmVhZG9ubHkgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX2NoZWNrZXI7XG4gICAgcmVhZG9ubHkgX25nWm9uZTogTmdab25lO1xuICAgIHJlYWRvbmx5IF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfc3RhcnRBbmNob3I7XG4gICAgcHJpdmF0ZSBfZW5kQW5jaG9yO1xuICAgIHByaXZhdGUgX2hhc0F0dGFjaGVkO1xuICAgIHByb3RlY3RlZCBzdGFydEFuY2hvckxpc3RlbmVyOiAoKSA9PiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBlbmRBbmNob3JMaXN0ZW5lcjogKCkgPT4gYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgZm9jdXMgdHJhcCBpcyBhY3RpdmUuICovXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbik7XG4gICAgcHJvdGVjdGVkIF9lbmFibGVkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50OiBIVE1MRWxlbWVudCwgX2NoZWNrZXI6IEludGVyYWN0aXZpdHlDaGVja2VyLCBfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogRG9jdW1lbnQsIGRlZmVyQW5jaG9ycz86IGJvb2xlYW4pO1xuICAgIC8qKiBEZXN0cm95cyB0aGUgZm9jdXMgdHJhcCBieSBjbGVhbmluZyB1cCB0aGUgYW5jaG9ycy4gKi9cbiAgICBkZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgYW5jaG9ycyBpbnRvIHRoZSBET00uIFRoaXMgaXMgdXN1YWxseSBkb25lIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBpbiB0aGUgY29uc3RydWN0b3IsIGJ1dCBjYW4gYmUgZGVmZXJyZWQgZm9yIGNhc2VzIGxpa2UgZGlyZWN0aXZlcyB3aXRoIGAqbmdJZmAuXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZm9jdXMgdHJhcCBtYW5hZ2VkIHRvIGF0dGFjaCBzdWNjZXNzZnVseS4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlXG4gICAgICogaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzbid0IGN1cnJlbnRseSBpbiB0aGUgRE9NLlxuICAgICAqL1xuICAgIGF0dGFjaEFuY2hvcnMoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc3RhYmlsaXplLCB0aGVuIGVpdGhlciBmb2N1c2VzIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgdGhlXG4gICAgICogdXNlciBzcGVjaWZpZWQsIG9yIHRoZSBmaXJzdCB0YWJiYWJsZSBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4sIGRlcGVuZGluZ1xuICAgICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgICAqL1xuICAgIGZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc3RhYmlsaXplLCB0aGVuIGZvY3VzZXNcbiAgICAgKiB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCB3aXRoaW4gdGhlIGZvY3VzIHRyYXAgcmVnaW9uLlxuICAgICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4sIGRlcGVuZGluZ1xuICAgICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgICAqL1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZUVsZW1lbnRXaGVuUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc3RhYmlsaXplLCB0aGVuIGZvY3VzZXNcbiAgICAgKiB0aGUgbGFzdCB0YWJiYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZm9jdXMgdHJhcCByZWdpb24uXG4gICAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAgICogb24gd2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAgICovXG4gICAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzcGVjaWZpZWQgYm91bmRhcnkgZWxlbWVudCBvZiB0aGUgdHJhcHBlZCByZWdpb24uXG4gICAgICogQHBhcmFtIGJvdW5kIFRoZSBib3VuZGFyeSB0byBnZXQgKHN0YXJ0IG9yIGVuZCBvZiB0cmFwcGVkIHJlZ2lvbikuXG4gICAgICogQHJldHVybnMgVGhlIGJvdW5kYXJ5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0UmVnaW9uQm91bmRhcnk7XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gdGhlIGZvY3VzIHRyYXAgaXMgaW5pdGlhbGl6ZWQuXG4gICAgICogQHJldHVybnMgV2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAgICovXG4gICAgZm9jdXNJbml0aWFsRWxlbWVudCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIGZvY3VzIHdhcyBtb3ZlZCBzdWNjZXNzZnVseS5cbiAgICAgKi9cbiAgICBmb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgbGFzdCB0YWJiYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZm9jdXMgdHJhcCByZWdpb24uXG4gICAgICogQHJldHVybnMgV2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAgICovXG4gICAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaGFzIHN1Y2Nlc3NmdWx5IGJlZW4gYXR0YWNoZWQuXG4gICAgICovXG4gICAgaGFzQXR0YWNoZWQoKTogYm9vbGVhbjtcbiAgICAvKiogR2V0IHRoZSBmaXJzdCB0YWJiYWJsZSBlbGVtZW50IGZyb20gYSBET00gc3VidHJlZSAoaW5jbHVzaXZlKS4gKi9cbiAgICBwcml2YXRlIF9nZXRGaXJzdFRhYmJhYmxlRWxlbWVudDtcbiAgICAvKiogR2V0IHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgZnJvbSBhIERPTSBzdWJ0cmVlIChpbmNsdXNpdmUpLiAqL1xuICAgIHByaXZhdGUgX2dldExhc3RUYWJiYWJsZUVsZW1lbnQ7XG4gICAgLyoqIENyZWF0ZXMgYW4gYW5jaG9yIGVsZW1lbnQuICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlQW5jaG9yO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGB0YWJpbmRleGAgb2YgYW4gYW5jaG9yLCBiYXNlZCBvbiB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgZm9jdXMgdHJhcC5cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gYW5jaG9yIEFuY2hvciBvbiB3aGljaCB0byB0b2dnbGUgdGhlIHRhYmluZGV4LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3RvZ2dsZUFuY2hvclRhYkluZGV4O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlYHRhYmluZGV4YCBvZiBib3RoIGFuY2hvcnMgdG8gZWl0aGVyIHRyYXAgVGFiIGZvY3VzIG9yIGFsbG93IGl0IHRvIGVzY2FwZS5cbiAgICAgKiBAcGFyYW0gZW5hYmxlZDogV2hldGhlciB0aGUgYW5jaG9ycyBzaG91bGQgdHJhcCBUYWIuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRvZ2dsZUFuY2hvcnMoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gd2hlbiB0aGUgem9uZSBpcyBzdGFibGUuICovXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU9uU3RhYmxlO1xufVxuLyoqXG4gKiBGYWN0b3J5IHRoYXQgYWxsb3dzIGVhc3kgaW5zdGFudGlhdGlvbiBvZiBmb2N1cyB0cmFwcy5cbiAqIEBkZXByZWNhdGVkIFVzZSBgQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeWAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgZm9yIDExLjAuMCBSZW1vdmUgdGhpcyBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRm9jdXNUcmFwRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBfY2hlY2tlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoX2NoZWNrZXI6IEludGVyYWN0aXZpdHlDaGVja2VyLCBfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogYW55KTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZm9jdXMtdHJhcHBlZCByZWdpb24gYXJvdW5kIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGFyb3VuZCB3aGljaCBmb2N1cyB3aWxsIGJlIHRyYXBwZWQuXG4gICAgICogQHBhcmFtIGRlZmVyQ2FwdHVyZUVsZW1lbnRzIERlZmVycyB0aGUgY3JlYXRpb24gb2YgZm9jdXMtY2FwdHVyaW5nIGVsZW1lbnRzIHRvIGJlIGRvbmVcbiAgICAgKiAgICAgbWFudWFsbHkgYnkgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMgVGhlIGNyZWF0ZWQgZm9jdXMgdHJhcCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjcmVhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRlZmVyQ2FwdHVyZUVsZW1lbnRzPzogYm9vbGVhbik6IEZvY3VzVHJhcDtcbn1cbi8qKiBEaXJlY3RpdmUgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIHJlZ2lvbi4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyYXBGb2N1cyBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjayB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5O1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIC8qKiBVbmRlcmx5aW5nIEZvY3VzVHJhcCBpbnN0YW5jZS4gKi9cbiAgICBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcbiAgICAvKiogUHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1cyB0byB1cG9uIGRlc3Ryb3kgd2hlbiB1c2luZyBhdXRvQ2FwdHVyZS4gKi9cbiAgICBwcml2YXRlIF9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ7XG4gICAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgYWN0aXZlLiAqL1xuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRpcmVjdGl2ZSBzaG91bGQgYXV0b21hdGlhbGx5IG1vdmUgZm9jdXMgaW50byB0aGUgdHJhcHBlZCByZWdpb24gdXBvblxuICAgICAqIGluaXRpYWxpemF0aW9uIGFuZCByZXR1cm4gZm9jdXMgdG8gdGhlIHByZXZpb3VzIGFjdGl2ZUVsZW1lbnQgdXBvbiBkZXN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgYXV0b0NhcHR1cmUoKTogYm9vbGVhbjtcbiAgICBzZXQgYXV0b0NhcHR1cmUodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2F1dG9DYXB0dXJlO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksIF9kb2N1bWVudDogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVkOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DYXB0dXJlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=