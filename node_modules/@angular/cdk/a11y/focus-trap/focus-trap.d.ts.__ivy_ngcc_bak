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
}
