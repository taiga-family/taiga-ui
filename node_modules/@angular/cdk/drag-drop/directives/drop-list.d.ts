/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkDrag } from './drag';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, CdkDragSortEvent } from '../drag-events';
import { CdkDropListGroup } from './drop-list-group';
import { DropListRef } from '../drop-list-ref';
import { DragDrop } from '../drag-drop';
import { DropListOrientation, DragAxis, DragDropConfig } from './config';
/**
 * Internal compile-time-only representation of a `CdkDropList`.
 * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export interface CdkDropListInternal extends CdkDropList {
}
/** Container that wraps a set of draggable items. */
export declare class CdkDropList<T = any> implements OnDestroy {
    /** Element that the drop list is attached to. */
    element: ElementRef<HTMLElement>;
    private _changeDetectorRef;
    private _dir?;
    private _group?;
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    private _scrollDispatcher?;
    /** Emits when the list has been destroyed. */
    private _destroyed;
    /** Whether the element's scrollable parents have been resolved. */
    private _scrollableParentsResolved;
    /** Keeps track of the drop lists that are currently on the page. */
    private static _dropLists;
    /** Reference to the underlying drop list instance. */
    _dropListRef: DropListRef<CdkDropList<T>>;
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */
    connectedTo: (CdkDropList | string)[] | CdkDropList | string;
    /** Arbitrary data to attach to this container. */
    data: T;
    /** Direction in which the list is oriented. */
    orientation: DropListOrientation;
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */
    id: string;
    /** Locks the position of the draggable elements inside the container along the specified axis. */
    lockAxis: DragAxis;
    /** Whether starting a dragging sequence from this container is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Whether sorting within this drop list is disabled. */
    sortingDisabled: boolean;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    enterPredicate: (drag: CdkDrag, drop: CdkDropList) => boolean;
    /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
    autoScrollDisabled: boolean;
    /** Emits when the user drops an item inside the container. */
    dropped: EventEmitter<CdkDragDrop<T, any>>;
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    entered: EventEmitter<CdkDragEnter<T>>;
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    exited: EventEmitter<CdkDragExit<T>>;
    /** Emits as the user is swapping items while actively dragging. */
    sorted: EventEmitter<CdkDragSortEvent<T>>;
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */
    private _unsortedItems;
    constructor(
    /** Element that the drop list is attached to. */
    element: ElementRef<HTMLElement>, dragDrop: DragDrop, _changeDetectorRef: ChangeDetectorRef, _dir?: Directionality | undefined, _group?: CdkDropListGroup<CdkDropList<any>> | undefined, 
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    _scrollDispatcher?: ScrollDispatcher | undefined, config?: DragDropConfig);
    /** Registers an items with the drop list. */
    addItem(item: CdkDrag): void;
    /** Removes an item from the drop list. */
    removeItem(item: CdkDrag): void;
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    getSortedItems(): CdkDrag[];
    ngOnDestroy(): void;
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    start(): void;
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    drop(item: CdkDrag, currentIndex: number, previousContainer: CdkDropList, isPointerOverContainer: boolean): void;
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    enter(item: CdkDrag, pointerX: number, pointerY: number): void;
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    exit(item: CdkDrag): void;
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    getItemIndex(item: CdkDrag): number;
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    private _setupInputSyncSubscription;
    /** Handles events from the underlying DropListRef. */
    private _handleEvents;
    /** Assigns the default input values based on a provided config object. */
    private _assignDefaults;
    /** Syncs up the registered drag items with underlying drop list ref. */
    private _syncItemsWithRef;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_sortingDisabled: BooleanInput;
    static ngAcceptInputType_autoScrollDisabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDropList<any>, [null, null, null, { optional: true; }, { optional: true; skipSelf: true; }, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDropList<any>, "[cdkDropList], cdk-drop-list", ["cdkDropList"], { "connectedTo": "cdkDropListConnectedTo"; "id": "id"; "enterPredicate": "cdkDropListEnterPredicate"; "disabled": "cdkDropListDisabled"; "sortingDisabled": "cdkDropListSortingDisabled"; "autoScrollDisabled": "cdkDropListAutoScrollDisabled"; "orientation": "cdkDropListOrientation"; "lockAxis": "cdkDropListLockAxis"; "data": "cdkDropListData"; }, { "dropped": "cdkDropListDropped"; "entered": "cdkDropListEntered"; "exited": "cdkDropListExited"; "sorted": "cdkDropListSorted"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LmQudHMiLCJzb3VyY2VzIjpbImRyb3AtbGlzdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENka0RyYWcgfSBmcm9tICcuL2RyYWcnO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIENka0RyYWdFbnRlciwgQ2RrRHJhZ0V4aXQsIENka0RyYWdTb3J0RXZlbnQgfSBmcm9tICcuLi9kcmFnLWV2ZW50cyc7XG5pbXBvcnQgeyBDZGtEcm9wTGlzdEdyb3VwIH0gZnJvbSAnLi9kcm9wLWxpc3QtZ3JvdXAnO1xuaW1wb3J0IHsgRHJvcExpc3RSZWYgfSBmcm9tICcuLi9kcm9wLWxpc3QtcmVmJztcbmltcG9ydCB7IERyYWdEcm9wIH0gZnJvbSAnLi4vZHJhZy1kcm9wJztcbmltcG9ydCB7IERyb3BMaXN0T3JpZW50YXRpb24sIERyYWdBeGlzLCBEcmFnRHJvcENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbi8qKlxuICogSW50ZXJuYWwgY29tcGlsZS10aW1lLW9ubHkgcmVwcmVzZW50YXRpb24gb2YgYSBgQ2RrRHJvcExpc3RgLlxuICogVXNlZCB0byBhdm9pZCBjaXJjdWxhciBpbXBvcnQgaXNzdWVzIGJldHdlZW4gdGhlIGBDZGtEcm9wTGlzdGAgYW5kIHRoZSBgQ2RrRHJhZ2AuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRHJvcExpc3RJbnRlcm5hbCBleHRlbmRzIENka0Ryb3BMaXN0IHtcbn1cbi8qKiBDb250YWluZXIgdGhhdCB3cmFwcyBhIHNldCBvZiBkcmFnZ2FibGUgaXRlbXMuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtEcm9wTGlzdDxUID0gYW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgZHJvcCBsaXN0IGlzIGF0dGFjaGVkIHRvLiAqL1xuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmO1xuICAgIHByaXZhdGUgX2Rpcj87XG4gICAgcHJpdmF0ZSBfZ3JvdXA/O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIF9zY3JvbGxEaXNwYXRjaGVyIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMS4wLjBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zY3JvbGxEaXNwYXRjaGVyPztcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgbGlzdCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50J3Mgc2Nyb2xsYWJsZSBwYXJlbnRzIGhhdmUgYmVlbiByZXNvbHZlZC4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxhYmxlUGFyZW50c1Jlc29sdmVkO1xuICAgIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZHJvcCBsaXN0cyB0aGF0IGFyZSBjdXJyZW50bHkgb24gdGhlIHBhZ2UuICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Ryb3BMaXN0cztcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIGRyb3AgbGlzdCBpbnN0YW5jZS4gKi9cbiAgICBfZHJvcExpc3RSZWY6IERyb3BMaXN0UmVmPENka0Ryb3BMaXN0PFQ+PjtcbiAgICAvKipcbiAgICAgKiBPdGhlciBkcmFnZ2FibGUgY29udGFpbmVycyB0aGF0IHRoaXMgY29udGFpbmVyIGlzIGNvbm5lY3RlZCB0byBhbmQgaW50byB3aGljaCB0aGVcbiAgICAgKiBjb250YWluZXIncyBpdGVtcyBjYW4gYmUgdHJhbnNmZXJyZWQuIENhbiBlaXRoZXIgYmUgcmVmZXJlbmNlcyB0byBvdGhlciBkcm9wIGNvbnRhaW5lcnMsXG4gICAgICogb3IgdGhlaXIgdW5pcXVlIElEcy5cbiAgICAgKi9cbiAgICBjb25uZWN0ZWRUbzogKENka0Ryb3BMaXN0IHwgc3RyaW5nKVtdIHwgQ2RrRHJvcExpc3QgfCBzdHJpbmc7XG4gICAgLyoqIEFyYml0cmFyeSBkYXRhIHRvIGF0dGFjaCB0byB0aGlzIGNvbnRhaW5lci4gKi9cbiAgICBkYXRhOiBUO1xuICAgIC8qKiBEaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGxpc3QgaXMgb3JpZW50ZWQuICovXG4gICAgb3JpZW50YXRpb246IERyb3BMaXN0T3JpZW50YXRpb247XG4gICAgLyoqXG4gICAgICogVW5pcXVlIElEIGZvciB0aGUgZHJvcCB6b25lLiBDYW4gYmUgdXNlZCBhcyBhIHJlZmVyZW5jZVxuICAgICAqIGluIHRoZSBgY29ubmVjdGVkVG9gIG9mIGFub3RoZXIgYENka0Ryb3BMaXN0YC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKiBMb2NrcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBpbnNpZGUgdGhlIGNvbnRhaW5lciBhbG9uZyB0aGUgc3BlY2lmaWVkIGF4aXMuICovXG4gICAgbG9ja0F4aXM6IERyYWdBeGlzO1xuICAgIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSB0aGlzIGNvbnRhaW5lciBpcyBkaXNhYmxlZC4gKi9cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xuICAgIC8qKiBXaGV0aGVyIHNvcnRpbmcgd2l0aGluIHRoaXMgZHJvcCBsaXN0IGlzIGRpc2FibGVkLiAqL1xuICAgIHNvcnRpbmdEaXNhYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gaXRlbVxuICAgICAqIGlzIGFsbG93ZWQgdG8gYmUgbW92ZWQgaW50byBhIGRyb3AgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGVudGVyUHJlZGljYXRlOiAoZHJhZzogQ2RrRHJhZywgZHJvcDogQ2RrRHJvcExpc3QpID0+IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdG8gYXV0by1zY3JvbGwgdGhlIHZpZXcgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGVpciBwb2ludGVyIGNsb3NlIHRvIHRoZSBlZGdlcy4gKi9cbiAgICBhdXRvU2Nyb2xsRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgZHJvcHMgYW4gaXRlbSBpbnNpZGUgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBkcm9wcGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0Ryb3A8VCwgYW55Pj47XG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiB0aGUgdXNlciBoYXMgbW92ZWQgYSBuZXcgZHJhZyBpdGVtIGludG8gdGhpcyBjb250YWluZXIuXG4gICAgICovXG4gICAgZW50ZXJlZDogRXZlbnRFbWl0dGVyPENka0RyYWdFbnRlcjxUPj47XG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiB0aGUgdXNlciByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgY29udGFpbmVyXG4gICAgICogYnkgZHJhZ2dpbmcgaXQgaW50byBhbm90aGVyIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBleGl0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxUPj47XG4gICAgLyoqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIHN3YXBwaW5nIGl0ZW1zIHdoaWxlIGFjdGl2ZWx5IGRyYWdnaW5nLiAqL1xuICAgIHNvcnRlZDogRXZlbnRFbWl0dGVyPENka0RyYWdTb3J0RXZlbnQ8VD4+O1xuICAgIC8qKlxuICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBpdGVtcyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhpcyBjb250YWluZXIuIEhpc3RvcmljYWxseSB3ZSB1c2VkIHRvXG4gICAgICogZG8gdGhpcyB3aXRoIGEgYENvbnRlbnRDaGlsZHJlbmAgcXVlcnksIGhvd2V2ZXIgcXVlcmllcyBkb24ndCBoYW5kbGUgdHJhbnNwbGFudGVkIHZpZXdzIHZlcnlcbiAgICAgKiB3ZWxsIHdoaWNoIG1lYW5zIHRoYXQgd2UgY2FuJ3QgaGFuZGxlIGNhc2VzIGxpa2UgZHJhZ2dpbmcgdGhlIGhlYWRlcnMgb2YgYSBgbWF0LXRhYmxlYFxuICAgICAqIGNvcnJlY3RseS4gV2hhdCB3ZSBkbyBpbnN0ZWFkIGlzIHRvIGhhdmUgdGhlIGl0ZW1zIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCB0aGUgY29udGFpbmVyXG4gICAgICogYW5kIHRoZW4gd2Ugc29ydCB0aGVtIGJhc2VkIG9uIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET00uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdW5zb3J0ZWRJdGVtcztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogRWxlbWVudCB0aGF0IHRoZSBkcm9wIGxpc3QgaXMgYXR0YWNoZWQgdG8uICovXG4gICAgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGRyYWdEcm9wOiBEcmFnRHJvcCwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgX2Rpcj86IERpcmVjdGlvbmFsaXR5IHwgdW5kZWZpbmVkLCBfZ3JvdXA/OiBDZGtEcm9wTGlzdEdyb3VwPENka0Ryb3BMaXN0PGFueT4+IHwgdW5kZWZpbmVkLCBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBfc2Nyb2xsRGlzcGF0Y2hlciBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wXG4gICAgICovXG4gICAgX3Njcm9sbERpc3BhdGNoZXI/OiBTY3JvbGxEaXNwYXRjaGVyIHwgdW5kZWZpbmVkLCBjb25maWc/OiBEcmFnRHJvcENvbmZpZyk7XG4gICAgLyoqIFJlZ2lzdGVycyBhbiBpdGVtcyB3aXRoIHRoZSBkcm9wIGxpc3QuICovXG4gICAgYWRkSXRlbShpdGVtOiBDZGtEcmFnKTogdm9pZDtcbiAgICAvKiogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGRyb3AgbGlzdC4gKi9cbiAgICByZW1vdmVJdGVtKGl0ZW06IENka0RyYWcpOiB2b2lkO1xuICAgIC8qKiBHZXRzIHRoZSByZWdpc3RlcmVkIGl0ZW1zIGluIHRoZSBsaXN0LCBzb3J0ZWQgYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTS4gKi9cbiAgICBnZXRTb3J0ZWRJdGVtcygpOiBDZGtEcmFnW107XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTdGFydHMgZHJhZ2dpbmcgYW4gaXRlbS5cbiAgICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHN0YXJ0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRHJvcHMgYW4gaXRlbSBpbnRvIHRoaXMgY29udGFpbmVyLlxuICAgICAqIEBwYXJhbSBpdGVtIEl0ZW0gYmVpbmcgZHJvcHBlZCBpbnRvIHRoZSBjb250YWluZXIuXG4gICAgICogQHBhcmFtIGN1cnJlbnRJbmRleCBJbmRleCBhdCB3aGljaCB0aGUgaXRlbSBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gICAgICogQHBhcmFtIHByZXZpb3VzQ29udGFpbmVyIENvbnRhaW5lciBmcm9tIHdoaWNoIHRoZSBpdGVtIGdvdCBkcmFnZ2VkIGluLlxuICAgICAqIEBwYXJhbSBpc1BvaW50ZXJPdmVyQ29udGFpbmVyIFdoZXRoZXIgdGhlIHVzZXIncyBwb2ludGVyIHdhcyBvdmVyIHRoZVxuICAgICAqICAgIGNvbnRhaW5lciB3aGVuIHRoZSBpdGVtIHdhcyBkcm9wcGVkLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBkcm9wKGl0ZW06IENka0RyYWcsIGN1cnJlbnRJbmRleDogbnVtYmVyLCBwcmV2aW91c0NvbnRhaW5lcjogQ2RrRHJvcExpc3QsIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgbW92ZWQgYW4gaXRlbSBpbnRvIHRoZSBjb250YWluZXIuXG4gICAgICogQHBhcmFtIGl0ZW0gSXRlbSB0aGF0IHdhcyBtb3ZlZCBpbnRvIHRoZSBjb250YWluZXIuXG4gICAgICogQHBhcmFtIHBvaW50ZXJYIFBvc2l0aW9uIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBYIGF4aXMuXG4gICAgICogQHBhcmFtIHBvaW50ZXJZIFBvc2l0aW9uIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBZIGF4aXMuXG4gICAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBlbnRlcihpdGVtOiBDZGtEcmFnLCBwb2ludGVyWDogbnVtYmVyLCBwb2ludGVyWTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgY29udGFpbmVyIGFmdGVyIGl0IHdhcyBkcmFnZ2VkIGludG8gYW5vdGhlciBjb250YWluZXIgYnkgdGhlIHVzZXIuXG4gICAgICogQHBhcmFtIGl0ZW0gSXRlbSB0aGF0IHdhcyBkcmFnZ2VkIG91dC5cbiAgICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIGV4aXQoaXRlbTogQ2RrRHJhZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRmlndXJlcyBvdXQgdGhlIGluZGV4IG9mIGFuIGl0ZW0gaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gaXRlbSBJdGVtIHdob3NlIGluZGV4IHNob3VsZCBiZSBkZXRlcm1pbmVkLlxuICAgICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgZ2V0SXRlbUluZGV4KGl0ZW06IENka0RyYWcpOiBudW1iZXI7XG4gICAgLyoqIFN5bmNzIHRoZSBpbnB1dHMgb2YgdGhlIENka0Ryb3BMaXN0IHdpdGggdGhlIG9wdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgRHJvcExpc3RSZWYuICovXG4gICAgcHJpdmF0ZSBfc2V0dXBJbnB1dFN5bmNTdWJzY3JpcHRpb247XG4gICAgLyoqIEhhbmRsZXMgZXZlbnRzIGZyb20gdGhlIHVuZGVybHlpbmcgRHJvcExpc3RSZWYuICovXG4gICAgcHJpdmF0ZSBfaGFuZGxlRXZlbnRzO1xuICAgIC8qKiBBc3NpZ25zIHRoZSBkZWZhdWx0IGlucHV0IHZhbHVlcyBiYXNlZCBvbiBhIHByb3ZpZGVkIGNvbmZpZyBvYmplY3QuICovXG4gICAgcHJpdmF0ZSBfYXNzaWduRGVmYXVsdHM7XG4gICAgLyoqIFN5bmNzIHVwIHRoZSByZWdpc3RlcmVkIGRyYWcgaXRlbXMgd2l0aCB1bmRlcmx5aW5nIGRyb3AgbGlzdCByZWYuICovXG4gICAgcHJpdmF0ZSBfc3luY0l0ZW1zV2l0aFJlZjtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc29ydGluZ0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9TY3JvbGxEaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19