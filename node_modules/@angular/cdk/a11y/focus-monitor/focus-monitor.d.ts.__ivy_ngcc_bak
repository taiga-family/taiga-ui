/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, InjectionToken, NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
export declare const TOUCH_BUFFER_MS = 650;
export declare type FocusOrigin = 'touch' | 'mouse' | 'keyboard' | 'program' | null;
/**
 * Corresponds to the options that can be passed to the native `focus` event.
 * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
 */
export interface FocusOptions {
    /** Whether the browser should scroll to the element when it is focused. */
    preventScroll?: boolean;
}
/** Detection mode used for attributing the origin of a focus event. */
export declare const enum FocusMonitorDetectionMode {
    /**
     * Any mousedown, keydown, or touchstart event that happened in the previous
     * tick or the current tick will be used to assign a focus event's origin (to
     * either mouse, keyboard, or touch). This is the default option.
     */
    IMMEDIATE = 0,
    /**
     * A focus event's origin is always attributed to the last corresponding
     * mousedown, keydown, or touchstart event, no matter how long ago it occured.
     */
    EVENTUAL = 1
}
/** Injectable service-level options for FocusMonitor. */
export interface FocusMonitorOptions {
    detectionMode?: FocusMonitorDetectionMode;
}
/** InjectionToken for FocusMonitorOptions. */
export declare const FOCUS_MONITOR_DEFAULT_OPTIONS: InjectionToken<FocusMonitorOptions>;
/** Monitors mouse and keyboard events to determine the cause of focus events. */
export declare class FocusMonitor implements OnDestroy {
    private _ngZone;
    private _platform;
    /** The focus origin that the next focus event is a result of. */
    private _origin;
    /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
    private _lastFocusOrigin;
    /** Whether the window has just been focused. */
    private _windowFocused;
    /** The target of the last touch event. */
    private _lastTouchTarget;
    /** The timeout id of the touch timeout, used to cancel timeout later. */
    private _touchTimeoutId;
    /** The timeout id of the window focus timeout. */
    private _windowFocusTimeoutId;
    /** The timeout id of the origin clearing timeout. */
    private _originTimeoutId;
    /** Map of elements being monitored to their info. */
    private _elementInfo;
    /** The number of elements currently being monitored. */
    private _monitoredElementCount;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */
    private _rootNodeFocusListenerCount;
    /**
     * The specified detection mode, used for attributing the origin of a focus
     * event.
     */
    private readonly _detectionMode;
    /**
     * Event listener for `keydown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentKeydownListener;
    /**
     * Event listener for `mousedown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentMousedownListener;
    /**
     * Event listener for `touchstart` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentTouchstartListener;
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _windowFocusListener;
    /** Used to reference correct document/window */
    protected _document?: Document;
    constructor(_ngZone: NgZone, _platform: Platform, 
    /** @breaking-change 11.0.0 make document required */
    document: any | null, options: FocusMonitorOptions | null);
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _rootNodeFocusAndBlurListener;
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    monitor(element: HTMLElement, checkChildren?: boolean): Observable<FocusOrigin>;
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    monitor(element: ElementRef<HTMLElement>, checkChildren?: boolean): Observable<FocusOrigin>;
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: HTMLElement): void;
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: ElementRef<HTMLElement>): void;
    /**
     * Focuses the element via the specified focus origin.
     * @param element Element to focus.
     * @param origin Focus origin.
     * @param options Options that can be used to configure the focus behavior.
     */
    focusVia(element: HTMLElement, origin: FocusOrigin, options?: FocusOptions): void;
    /**
     * Focuses the element via the specified focus origin.
     * @param element Element to focus.
     * @param origin Focus origin.
     * @param options Options that can be used to configure the focus behavior.
     */
    focusVia(element: ElementRef<HTMLElement>, origin: FocusOrigin, options?: FocusOptions): void;
    ngOnDestroy(): void;
    /** Access injected document if available or fallback to global document reference */
    private _getDocument;
    /** Use defaultView of injected document if available or fallback to global window reference */
    private _getWindow;
    private _toggleClass;
    private _getFocusOrigin;
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    private _setClasses;
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * If the detection mode is 'eventual', the origin is never cleared.
     * @param origin The origin to set.
     */
    private _setOriginForCurrentEventQueue;
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    private _wasCausedByTouch;
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    private _onFocus;
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event: FocusEvent, element: HTMLElement): void;
    private _emitOrigin;
    private _registerGlobalListeners;
    private _removeGlobalListeners;
}
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
export declare class CdkMonitorFocus implements OnDestroy {
    private _elementRef;
    private _focusMonitor;
    private _monitorSubscription;
    cdkFocusChange: EventEmitter<FocusOrigin>;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusMonitor: FocusMonitor);
    ngOnDestroy(): void;
}
