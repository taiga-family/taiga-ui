/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewportRuler } from '@angular/cdk/scrolling';
/** Object holding the scroll position of something. */
interface ScrollPosition {
    top: number;
    left: number;
}
/** Keeps track of the scroll position and dimensions of the parents of an element. */
export declare class ParentPositionTracker {
    private _document;
    private _viewportRuler;
    /** Cached positions of the scrollable parent elements. */
    readonly positions: Map<Document | HTMLElement, {
        scrollPosition: ScrollPosition;
        clientRect?: ClientRect | undefined;
    }>;
    constructor(_document: Document, _viewportRuler: ViewportRuler);
    /** Clears the cached positions. */
    clear(): void;
    /** Caches the positions. Should be called at the beginning of a drag sequence. */
    cache(elements: HTMLElement[] | ReadonlyArray<HTMLElement>): void;
    /** Handles scrolling while a drag is taking place. */
    handleScroll(event: Event): ScrollPosition | null;
}
export {};
