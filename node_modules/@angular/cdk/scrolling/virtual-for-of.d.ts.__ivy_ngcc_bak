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
}
