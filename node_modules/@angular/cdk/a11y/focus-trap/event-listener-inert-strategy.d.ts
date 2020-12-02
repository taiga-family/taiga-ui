/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusTrapInertStrategy } from './focus-trap-inert-strategy';
import { ConfigurableFocusTrap } from './configurable-focus-trap';
/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
export declare class EventListenerFocusTrapInertStrategy implements FocusTrapInertStrategy {
    /** Focus event handler. */
    private _listener;
    /** Adds a document event listener that keeps focus inside the FocusTrap. */
    preventFocus(focusTrap: ConfigurableFocusTrap): void;
    /** Removes the event listener added in preventFocus. */
    allowFocus(focusTrap: ConfigurableFocusTrap): void;
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */
    private _trapFocus;
}
