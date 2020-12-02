/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, Optional } from '@angular/core';
import { OverlayRef } from '../overlay-ref';
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
export declare class OverlayKeyboardDispatcher implements OnDestroy {
    /** Currently attached overlays in the order they were attached. */
    _attachedOverlays: OverlayRef[];
    private _document;
    private _isAttached;
    constructor(document: any);
    ngOnDestroy(): void;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef: OverlayRef): void;
    /** Remove an overlay from the list of attached overlay refs. */
    remove(overlayRef: OverlayRef): void;
    /** Detaches the global keyboard event listener. */
    private _detach;
    /** Keyboard event listener that will be attached to the body. */
    private _keydownListener;
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher: OverlayKeyboardDispatcher, _document: any): OverlayKeyboardDispatcher;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER: {
    provide: typeof OverlayKeyboardDispatcher;
    deps: (Optional[] | InjectionToken<any>)[];
    useFactory: typeof OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
};
