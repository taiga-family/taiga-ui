/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
import { FocusTrap } from './focus-trap';
import { FocusTrapManager, ManagedFocusTrap } from './focus-trap-manager';
import { FocusTrapInertStrategy } from './focus-trap-inert-strategy';
import { ConfigurableFocusTrapConfig } from './configurable-focus-trap-config';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
export declare class ConfigurableFocusTrap extends FocusTrap implements ManagedFocusTrap {
    private _focusTrapManager;
    private _inertStrategy;
    /** Whether the FocusTrap is enabled. */
    get enabled(): boolean;
    set enabled(value: boolean);
    constructor(_element: HTMLElement, _checker: InteractivityChecker, _ngZone: NgZone, _document: Document, _focusTrapManager: FocusTrapManager, _inertStrategy: FocusTrapInertStrategy, config: ConfigurableFocusTrapConfig);
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    destroy(): void;
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _enable(): void;
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _disable(): void;
}
