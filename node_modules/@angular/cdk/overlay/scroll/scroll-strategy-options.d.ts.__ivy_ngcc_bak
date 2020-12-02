/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { NgZone } from '@angular/core';
import { BlockScrollStrategy } from './block-scroll-strategy';
import { CloseScrollStrategy, CloseScrollStrategyConfig } from './close-scroll-strategy';
import { NoopScrollStrategy } from './noop-scroll-strategy';
import { RepositionScrollStrategy, RepositionScrollStrategyConfig } from './reposition-scroll-strategy';
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
export declare class ScrollStrategyOptions {
    private _scrollDispatcher;
    private _viewportRuler;
    private _ngZone;
    private _document;
    constructor(_scrollDispatcher: ScrollDispatcher, _viewportRuler: ViewportRuler, _ngZone: NgZone, document: any);
    /** Do nothing on scroll. */
    noop: () => NoopScrollStrategy;
    /**
     * Close the overlay as soon as the user scrolls.
     * @param config Configuration to be used inside the scroll strategy.
     */
    close: (config?: CloseScrollStrategyConfig | undefined) => CloseScrollStrategy;
    /** Block scrolling. */
    block: () => BlockScrollStrategy;
    /**
     * Update the overlay's position on scroll.
     * @param config Configuration to be used inside the scroll strategy.
     * Allows debouncing the reposition calls.
     */
    reposition: (config?: RepositionScrollStrategyConfig | undefined) => RepositionScrollStrategy;
}
