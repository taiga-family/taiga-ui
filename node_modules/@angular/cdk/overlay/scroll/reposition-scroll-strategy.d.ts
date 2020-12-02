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
 * Config options for the RepositionScrollStrategy.
 */
export interface RepositionScrollStrategyConfig {
    /** Time in milliseconds to throttle the scroll events. */
    scrollThrottle?: number;
    /** Whether to close the overlay once the user has scrolled away completely. */
    autoClose?: boolean;
}
/**
 * Strategy that will update the element position as the user is scrolling.
 */
export declare class RepositionScrollStrategy implements ScrollStrategy {
    private _scrollDispatcher;
    private _viewportRuler;
    private _ngZone;
    private _config?;
    private _scrollSubscription;
    private _overlayRef;
    constructor(_scrollDispatcher: ScrollDispatcher, _viewportRuler: ViewportRuler, _ngZone: NgZone, _config?: RepositionScrollStrategyConfig | undefined);
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef: OverlayReference): void;
    /** Enables repositioning of the attached overlay on scroll. */
    enable(): void;
    /** Disables repositioning of the attached overlay on scroll. */
    disable(): void;
    detach(): void;
}
