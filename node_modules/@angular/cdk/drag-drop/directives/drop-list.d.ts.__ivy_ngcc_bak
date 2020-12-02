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
}
