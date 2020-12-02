/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CollectionViewer, DataSource, ListRange } from '@angular/cdk/collections';
import { DoCheck, IterableDiffers, NgIterable, NgZone, OnDestroy, TemplateRef, TrackByFunction, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkVirtualScrollViewport } from './virtual-scroll-viewport';
/** The context for an item rendered by `CdkVirtualForOf` */
import * as ɵngcc0 from '@angular/core';
export declare type CdkVirtualForOfContext<T> = {
    /** The item value. */
    $implicit: T;
    /** The DataSource, Observable, or NgIterable that was passed to *cdkVirtualFor. */
    cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T>;
    /** The index of the item in the DataSource. */
    index: number;
    /** The number of items in the DataSource. */
    count: number;
    /** Whether this is the first item in the DataSource. */
    first: boolean;
    /** Whether this is the last item in the DataSource. */
    last: boolean;
    /** Whether the index is even. */
    even: boolean;
    /** Whether the index is odd. */
    odd: boolean;
};
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
export declare class CdkVirtualForOf<T> implements CollectionViewer, DoCheck, OnDestroy {
    /** The view container to add items to. */
    private _viewContainerRef;
    /** The template to use when stamping out new items. */
    private _template;
    /** The set of available differs. */
    private _differs;
    /** The virtual scrolling viewport that these items are being rendered in. */
    private _viewport;
    /** Emits when the rendered view of the data changes. */
    viewChange: Subject<ListRange>;
    /** Subject that emits when a new DataSource instance is given. */
    private _dataSourceChanges;
    /** The DataSource to display. */
    get cdkVirtualForOf(): DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    set cdkVirtualForOf(value: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined);
    _cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */
    get cdkVirtualForTrackBy(): TrackByFunction<T> | undefined;
    set cdkVirtualForTrackBy(fn: TrackByFunction<T> | undefined);
    private _cdkVirtualForTrackBy;
    /** The template used to stamp out new elements. */
    set cdkVirtualForTemplate(value: TemplateRef<CdkVirtualForOfContext<T>>);
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    cdkVirtualForTemplateCacheSize: number;
    /** Emits whenever the data in the current DataSource changes. */
    dataStream: Observable<T[] | ReadonlyArray<T>>;
    /** The differ used to calculate changes to the data. */
    private _differ;
    /** The most recent data emitted from the DataSource. */
    private _data;
    /** The currently rendered items. */
    private _renderedItems;
    /** The currently rendered range of indices. */
    private _renderedRange;
    /**
     * The template cache used to hold on ot template instancess that have been stamped out, but don't
     * currently need to be rendered. These instances will be reused in the future rather than
     * stamping out brand new ones.
     */
    private _templateCache;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
    private _needsUpdate;
    private _destroyed;
    constructor(
    /** The view container to add items to. */
    _viewContainerRef: ViewContainerRef, 
    /** The template to use when stamping out new items. */
    _template: TemplateRef<CdkVirtualForOfContext<T>>, 
    /** The set of available differs. */
    _differs: IterableDiffers, 
    /** The virtual scrolling viewport that these items are being rendered in. */
    _viewport: CdkVirtualScrollViewport, ngZone: NgZone);
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    measureRangeSize(range: ListRange, orientation: 'horizontal' | 'vertical'): number;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /** React to scroll state changes in the viewport. */
    private _onRenderedDataChange;
    /** Swap out one `DataSource` for another. */
    private _changeDataSource;
    /** Update the `CdkVirtualForOfContext` for all views. */
    private _updateContext;
    /** Apply changes to the DOM. */
    private _applyChanges;
    /** Cache the given detached view. */
    private _cacheView;
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    private _insertViewForNewItem;
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    private _updateComputedContextProperties;
    /** Creates a new embedded view and moves it to the given index */
    private _createEmbeddedViewAt;
    /** Inserts a recycled view from the cache at the given index. */
    private _insertViewFromCache;
    /** Detaches the embedded view at the given index. */
    private _detachView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkVirtualForOf<any>, [null, null, null, { skipSelf: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkVirtualForOf<any>, "[cdkVirtualFor][cdkVirtualForOf]", never, { "cdkVirtualForTemplateCacheSize": "cdkVirtualForTemplateCacheSize"; "cdkVirtualForOf": "cdkVirtualForOf"; "cdkVirtualForTrackBy": "cdkVirtualForTrackBy"; "cdkVirtualForTemplate": "cdkVirtualForTemplate"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1mb3Itb2YuZC50cyIsInNvdXJjZXMiOlsidmlydHVhbC1mb3Itb2YuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlLCBMaXN0UmFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgRG9DaGVjaywgSXRlcmFibGVEaWZmZXJzLCBOZ0l0ZXJhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFRyYWNrQnlGdW5jdGlvbiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCc7XG4vKiogVGhlIGNvbnRleHQgZm9yIGFuIGl0ZW0gcmVuZGVyZWQgYnkgYENka1ZpcnR1YWxGb3JPZmAgKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ2RrVmlydHVhbEZvck9mQ29udGV4dDxUPiA9IHtcbiAgICAvKiogVGhlIGl0ZW0gdmFsdWUuICovXG4gICAgJGltcGxpY2l0OiBUO1xuICAgIC8qKiBUaGUgRGF0YVNvdXJjZSwgT2JzZXJ2YWJsZSwgb3IgTmdJdGVyYWJsZSB0aGF0IHdhcyBwYXNzZWQgdG8gKmNka1ZpcnR1YWxGb3IuICovXG4gICAgY2RrVmlydHVhbEZvck9mOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgTmdJdGVyYWJsZTxUPjtcbiAgICAvKiogVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBEYXRhU291cmNlLiAqL1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgLyoqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIERhdGFTb3VyY2UuICovXG4gICAgY291bnQ6IG51bWJlcjtcbiAgICAvKiogV2hldGhlciB0aGlzIGlzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBEYXRhU291cmNlLiAqL1xuICAgIGZpcnN0OiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoaXMgaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgRGF0YVNvdXJjZS4gKi9cbiAgICBsYXN0OiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBpbmRleCBpcyBldmVuLiAqL1xuICAgIGV2ZW46IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGluZGV4IGlzIG9kZC4gKi9cbiAgICBvZGQ6IGJvb2xlYW47XG59O1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSBzaW1pbGFyIHRvIGBuZ0Zvck9mYCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgZGF0YSBpbnNpZGUgYSB2aXJ0dWFsIHNjcm9sbGluZ1xuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtWaXJ0dWFsRm9yT2Y8VD4gaW1wbGVtZW50cyBDb2xsZWN0aW9uVmlld2VyLCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICAgIC8qKiBUaGUgdmlldyBjb250YWluZXIgdG8gYWRkIGl0ZW1zIHRvLiAqL1xuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY7XG4gICAgLyoqIFRoZSB0ZW1wbGF0ZSB0byB1c2Ugd2hlbiBzdGFtcGluZyBvdXQgbmV3IGl0ZW1zLiAqL1xuICAgIHByaXZhdGUgX3RlbXBsYXRlO1xuICAgIC8qKiBUaGUgc2V0IG9mIGF2YWlsYWJsZSBkaWZmZXJzLiAqL1xuICAgIHByaXZhdGUgX2RpZmZlcnM7XG4gICAgLyoqIFRoZSB2aXJ0dWFsIHNjcm9sbGluZyB2aWV3cG9ydCB0aGF0IHRoZXNlIGl0ZW1zIGFyZSBiZWluZyByZW5kZXJlZCBpbi4gKi9cbiAgICBwcml2YXRlIF92aWV3cG9ydDtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgcmVuZGVyZWQgdmlldyBvZiB0aGUgZGF0YSBjaGFuZ2VzLiAqL1xuICAgIHZpZXdDaGFuZ2U6IFN1YmplY3Q8TGlzdFJhbmdlPjtcbiAgICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gYSBuZXcgRGF0YVNvdXJjZSBpbnN0YW5jZSBpcyBnaXZlbi4gKi9cbiAgICBwcml2YXRlIF9kYXRhU291cmNlQ2hhbmdlcztcbiAgICAvKiogVGhlIERhdGFTb3VyY2UgdG8gZGlzcGxheS4gKi9cbiAgICBnZXQgY2RrVmlydHVhbEZvck9mKCk6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBOZ0l0ZXJhYmxlPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICBzZXQgY2RrVmlydHVhbEZvck9mKHZhbHVlOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgTmdJdGVyYWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWQpO1xuICAgIF9jZGtWaXJ0dWFsRm9yT2Y6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBOZ0l0ZXJhYmxlPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUaGUgYFRyYWNrQnlGdW5jdGlvbmAgdG8gdXNlIGZvciB0cmFja2luZyBjaGFuZ2VzLiBUaGUgYFRyYWNrQnlGdW5jdGlvbmAgdGFrZXMgdGhlIGluZGV4IGFuZFxuICAgICAqIHRoZSBpdGVtIGFuZCBwcm9kdWNlcyBhIHZhbHVlIHRvIGJlIHVzZWQgYXMgdGhlIGl0ZW0ncyBpZGVudGl0eSB3aGVuIHRyYWNraW5nIGNoYW5nZXMuXG4gICAgICovXG4gICAgZ2V0IGNka1ZpcnR1YWxGb3JUcmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPiB8IHVuZGVmaW5lZDtcbiAgICBzZXQgY2RrVmlydHVhbEZvclRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPiB8IHVuZGVmaW5lZCk7XG4gICAgcHJpdmF0ZSBfY2RrVmlydHVhbEZvclRyYWNrQnk7XG4gICAgLyoqIFRoZSB0ZW1wbGF0ZSB1c2VkIHRvIHN0YW1wIG91dCBuZXcgZWxlbWVudHMuICovXG4gICAgc2V0IGNka1ZpcnR1YWxGb3JUZW1wbGF0ZSh2YWx1ZTogVGVtcGxhdGVSZWY8Q2RrVmlydHVhbEZvck9mQ29udGV4dDxUPj4pO1xuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBjYWNoZSB1c2VkIHRvIHN0b3JlIHRlbXBsYXRlcyB0aGF0IGFyZSBub3QgYmVpbmcgdXNlZCBmb3IgcmUtdXNlIGxhdGVyLlxuICAgICAqIFNldHRpbmcgdGhlIGNhY2hlIHNpemUgdG8gYDBgIHdpbGwgZGlzYWJsZSBjYWNoaW5nLiBEZWZhdWx0cyB0byAyMCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgY2RrVmlydHVhbEZvclRlbXBsYXRlQ2FjaGVTaXplOiBudW1iZXI7XG4gICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBkYXRhIGluIHRoZSBjdXJyZW50IERhdGFTb3VyY2UgY2hhbmdlcy4gKi9cbiAgICBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4+O1xuICAgIC8qKiBUaGUgZGlmZmVyIHVzZWQgdG8gY2FsY3VsYXRlIGNoYW5nZXMgdG8gdGhlIGRhdGEuICovXG4gICAgcHJpdmF0ZSBfZGlmZmVyO1xuICAgIC8qKiBUaGUgbW9zdCByZWNlbnQgZGF0YSBlbWl0dGVkIGZyb20gdGhlIERhdGFTb3VyY2UuICovXG4gICAgcHJpdmF0ZSBfZGF0YTtcbiAgICAvKiogVGhlIGN1cnJlbnRseSByZW5kZXJlZCBpdGVtcy4gKi9cbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zO1xuICAgIC8qKiBUaGUgY3VycmVudGx5IHJlbmRlcmVkIHJhbmdlIG9mIGluZGljZXMuICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRSYW5nZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgY2FjaGUgdXNlZCB0byBob2xkIG9uIG90IHRlbXBsYXRlIGluc3RhbmNlc3MgdGhhdCBoYXZlIGJlZW4gc3RhbXBlZCBvdXQsIGJ1dCBkb24ndFxuICAgICAqIGN1cnJlbnRseSBuZWVkIHRvIGJlIHJlbmRlcmVkLiBUaGVzZSBpbnN0YW5jZXMgd2lsbCBiZSByZXVzZWQgaW4gdGhlIGZ1dHVyZSByYXRoZXIgdGhhblxuICAgICAqIHN0YW1waW5nIG91dCBicmFuZCBuZXcgb25lcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF90ZW1wbGF0ZUNhY2hlO1xuICAgIC8qKiBXaGV0aGVyIHRoZSByZW5kZXJlZCBkYXRhIHNob3VsZCBiZSB1cGRhdGVkIGR1cmluZyB0aGUgbmV4dCBuZ0RvQ2hlY2sgY3ljbGUuICovXG4gICAgcHJpdmF0ZSBfbmVlZHNVcGRhdGU7XG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBUaGUgdmlldyBjb250YWluZXIgdG8gYWRkIGl0ZW1zIHRvLiAqL1xuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBcbiAgICAvKiogVGhlIHRlbXBsYXRlIHRvIHVzZSB3aGVuIHN0YW1waW5nIG91dCBuZXcgaXRlbXMuICovXG4gICAgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxDZGtWaXJ0dWFsRm9yT2ZDb250ZXh0PFQ+PiwgXG4gICAgLyoqIFRoZSBzZXQgb2YgYXZhaWxhYmxlIGRpZmZlcnMuICovXG4gICAgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgXG4gICAgLyoqIFRoZSB2aXJ0dWFsIHNjcm9sbGluZyB2aWV3cG9ydCB0aGF0IHRoZXNlIGl0ZW1zIGFyZSBiZWluZyByZW5kZXJlZCBpbi4gKi9cbiAgICBfdmlld3BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgbmdab25lOiBOZ1pvbmUpO1xuICAgIC8qKlxuICAgICAqIE1lYXN1cmVzIHRoZSBjb21iaW5lZCBzaXplICh3aWR0aCBmb3IgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiwgaGVpZ2h0IGZvciB2ZXJ0aWNhbCkgb2YgYWxsIGl0ZW1zXG4gICAgICogaW4gdGhlIHNwZWNpZmllZCByYW5nZS4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSByYW5nZSBpbmNsdWRlcyBpdGVtcyB0aGF0IGFyZSBub3QgY3VycmVudGx5XG4gICAgICogcmVuZGVyZWQuXG4gICAgICovXG4gICAgbWVhc3VyZVJhbmdlU2l6ZShyYW5nZTogTGlzdFJhbmdlLCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyk6IG51bWJlcjtcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBSZWFjdCB0byBzY3JvbGwgc3RhdGUgY2hhbmdlcyBpbiB0aGUgdmlld3BvcnQuICovXG4gICAgcHJpdmF0ZSBfb25SZW5kZXJlZERhdGFDaGFuZ2U7XG4gICAgLyoqIFN3YXAgb3V0IG9uZSBgRGF0YVNvdXJjZWAgZm9yIGFub3RoZXIuICovXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGF0YVNvdXJjZTtcbiAgICAvKiogVXBkYXRlIHRoZSBgQ2RrVmlydHVhbEZvck9mQ29udGV4dGAgZm9yIGFsbCB2aWV3cy4gKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb250ZXh0O1xuICAgIC8qKiBBcHBseSBjaGFuZ2VzIHRvIHRoZSBET00uICovXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzO1xuICAgIC8qKiBDYWNoZSB0aGUgZ2l2ZW4gZGV0YWNoZWQgdmlldy4gKi9cbiAgICBwcml2YXRlIF9jYWNoZVZpZXc7XG4gICAgLyoqIEluc2VydHMgYSB2aWV3IGZvciBhIG5ldyBpdGVtLCBlaXRoZXIgZnJvbSB0aGUgY2FjaGUgb3IgYnkgY3JlYXRpbmcgYSBuZXcgb25lLiAqL1xuICAgIHByaXZhdGUgX2luc2VydFZpZXdGb3JOZXdJdGVtO1xuICAgIC8qKiBVcGRhdGUgdGhlIGNvbXB1dGVkIHByb3BlcnRpZXMgb24gdGhlIGBDZGtWaXJ0dWFsRm9yT2ZDb250ZXh0YC4gKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb21wdXRlZENvbnRleHRQcm9wZXJ0aWVzO1xuICAgIC8qKiBDcmVhdGVzIGEgbmV3IGVtYmVkZGVkIHZpZXcgYW5kIG1vdmVzIGl0IHRvIHRoZSBnaXZlbiBpbmRleCAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZUVtYmVkZGVkVmlld0F0O1xuICAgIC8qKiBJbnNlcnRzIGEgcmVjeWNsZWQgdmlldyBmcm9tIHRoZSBjYWNoZSBhdCB0aGUgZ2l2ZW4gaW5kZXguICovXG4gICAgcHJpdmF0ZSBfaW5zZXJ0Vmlld0Zyb21DYWNoZTtcbiAgICAvKiogRGV0YWNoZXMgdGhlIGVtYmVkZGVkIHZpZXcgYXQgdGhlIGdpdmVuIGluZGV4LiAqL1xuICAgIHByaXZhdGUgX2RldGFjaFZpZXc7XG59XG4iXX0=