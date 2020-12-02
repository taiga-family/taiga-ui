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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollStrategyOptions, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuZC50cyIsInNvdXJjZXMiOlsic2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoZXIsIFZpZXdwb3J0UnVsZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcbmltcG9ydCB7IENsb3NlU2Nyb2xsU3RyYXRlZ3ksIENsb3NlU2Nyb2xsU3RyYXRlZ3lDb25maWcgfSBmcm9tICcuL2Nsb3NlLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQgeyBOb29wU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuL25vb3Atc2Nyb2xsLXN0cmF0ZWd5JztcbmltcG9ydCB7IFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneSwgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnIH0gZnJvbSAnLi9yZXBvc2l0aW9uLXNjcm9sbC1zdHJhdGVneSc7XG4vKipcbiAqIE9wdGlvbnMgZm9yIGhvdyBhbiBvdmVybGF5IHdpbGwgaGFuZGxlIHNjcm9sbGluZy5cbiAqXG4gKiBVc2VycyBjYW4gcHJvdmlkZSBhIGN1c3RvbSB2YWx1ZSBmb3IgYFNjcm9sbFN0cmF0ZWd5T3B0aW9uc2AgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdFxuICogYmVoYXZpb3JzLiBUaGlzIGNsYXNzIHByaW1hcmlseSBhY3RzIGFzIGEgZmFjdG9yeSBmb3IgU2Nyb2xsU3RyYXRlZ3kgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTY3JvbGxTdHJhdGVneU9wdGlvbnMge1xuICAgIHByaXZhdGUgX3Njcm9sbERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoX3Njcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBfbmdab25lOiBOZ1pvbmUsIGRvY3VtZW50OiBhbnkpO1xuICAgIC8qKiBEbyBub3RoaW5nIG9uIHNjcm9sbC4gKi9cbiAgICBub29wOiAoKSA9PiBOb29wU2Nyb2xsU3RyYXRlZ3k7XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG92ZXJsYXkgYXMgc29vbiBhcyB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGluc2lkZSB0aGUgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGNsb3NlOiAoY29uZmlnPzogQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZyB8IHVuZGVmaW5lZCkgPT4gQ2xvc2VTY3JvbGxTdHJhdGVneTtcbiAgICAvKiogQmxvY2sgc2Nyb2xsaW5nLiAqL1xuICAgIGJsb2NrOiAoKSA9PiBCbG9ja1Njcm9sbFN0cmF0ZWd5O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgb3ZlcmxheSdzIHBvc2l0aW9uIG9uIHNjcm9sbC5cbiAgICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZCBpbnNpZGUgdGhlIHNjcm9sbCBzdHJhdGVneS5cbiAgICAgKiBBbGxvd3MgZGVib3VuY2luZyB0aGUgcmVwb3NpdGlvbiBjYWxscy5cbiAgICAgKi9cbiAgICByZXBvc2l0aW9uOiAoY29uZmlnPzogUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnIHwgdW5kZWZpbmVkKSA9PiBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3k7XG59XG4iXX0=