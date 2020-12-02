/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { ScrollStrategy } from './scroll-strategy';
import { OverlayReference } from '../overlay-reference';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
/**
 * Config options for the CloseScrollStrategy.
 */
export interface CloseScrollStrategyConfig {
    /** Amount of pixels the user has to scroll before the overlay is closed. */
    threshold?: number;
}
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
export declare class CloseScrollStrategy implements ScrollStrategy {
    private _scrollDispatcher;
    private _ngZone;
    private _viewportRuler;
    private _config?;
    private _scrollSubscription;
    private _overlayRef;
    private _initialScrollPosition;
    constructor(_scrollDispatcher: ScrollDispatcher, _ngZone: NgZone, _viewportRuler: ViewportRuler, _config?: CloseScrollStrategyConfig | undefined);
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef: OverlayReference): void;
    /** Enables the closing of the attached overlay on scroll. */
    enable(): void;
    /** Disables the closing the attached overlay on scroll. */
    disable(): void;
    detach(): void;
    /** Detaches the overlay ref and disables the scroll strategy. */
    private _detach;
}
