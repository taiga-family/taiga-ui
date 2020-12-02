/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, NgZone } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subject } from 'rxjs';
import { DragDropRegistry } from './drag-drop-registry';
import { DragRefInternal as DragRef, Point } from './drag-ref';
/**
 * Internal compile-time-only representation of a `DropListRef`.
 * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
 * @docs-private
 */
export interface DropListRefInternal extends DropListRef {
}
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
export declare class DropListRef<T = any> {
    private _dragDropRegistry;
    private _ngZone;
    private _viewportRuler;
    /** Element that the drop list is attached to. */
    element: HTMLElement | ElementRef<HTMLElement>;
    /** Whether starting a dragging sequence from this container is disabled. */
    disabled: boolean;
    /** Whether sorting items within the list is disabled. */
    sortingDisabled: boolean;
    /** Locks the position of the draggable elements inside the container along the specified axis. */
    lockAxis: 'x' | 'y';
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */
    autoScrollDisabled: boolean;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    enterPredicate: (drag: DragRef, drop: DropListRef) => boolean;
    /** Emits right before dragging has started. */
    beforeStarted: Subject<void>;
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    entered: Subject<{
        item: DragRef;
        container: DropListRef<any>;
        currentIndex: number;
    }>;
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    exited: Subject<{
        item: DragRef;
        container: DropListRef<any>;
    }>;
    /** Emits when the user drops an item inside the container. */
    dropped: Subject<{
        item: DragRef;
        currentIndex: number;
        previousIndex: number;
        container: DropListRef<any>;
        previousContainer: DropListRef<any>;
        isPointerOverContainer: boolean;
        distance: Point;
    }>;
    /** Emits as the user is swapping items while actively dragging. */
    sorted: Subject<{
        previousIndex: number;
        currentIndex: number;
        container: DropListRef<any>;
        item: DragRef;
    }>;
    /** Arbitrary data that can be attached to the drop list. */
    data: T;
    /** Whether an item in the list is being dragged. */
    private _isDragging;
    /** Cache of the dimensions of all the items inside the container. */
    private _itemPositions;
    /** Keeps track of the positions of any parent scrollable elements. */
    private _parentPositions;
    /** Cached `ClientRect` of the drop list. */
    private _clientRect;
    /**
     * Draggable items that are currently active inside the container. Includes the items
     * from `_draggables`, as well as any items that have been dragged in, but haven't
     * been dropped yet.
     */
    private _activeDraggables;
    /**
     * Keeps track of the item that was last swapped with the dragged item, as
     * well as what direction the pointer was moving in when the swap occured.
     */
    private _previousSwap;
    /** Draggable items in the container. */
    private _draggables;
    /** Drop lists that are connected to the current one. */
    private _siblings;
    /** Direction in which the list is oriented. */
    private _orientation;
    /** Connected siblings that currently have a dragged item. */
    private _activeSiblings;
    /** Layout direction of the drop list. */
    private _direction;
    /** Subscription to the window being scrolled. */
    private _viewportScrollSubscription;
    /** Vertical direction in which the list is currently scrolling. */
    private _verticalScrollDirection;
    /** Horizontal direction in which the list is currently scrolling. */
    private _horizontalScrollDirection;
    /** Node that is being auto-scrolled. */
    private _scrollNode;
    /** Used to signal to the current auto-scroll sequence when to stop. */
    private _stopScrollTimers;
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
    private _cachedShadowRoot;
    /** Reference to the document. */
    private _document;
    /** Elements that can be scrolled while the user is dragging. */
    private _scrollableElements;
    /** Initial value for the element's `scroll-snap-type` style. */
    private _initialScrollSnap;
    constructor(element: ElementRef<HTMLElement> | HTMLElement, _dragDropRegistry: DragDropRegistry<DragRef, DropListRef>, _document: any, _ngZone: NgZone, _viewportRuler: ViewportRuler);
    /** Removes the drop list functionality from the DOM element. */
    dispose(): void;
    /** Whether an item from this list is currently being dragged. */
    isDragging(): boolean;
    /** Starts dragging an item. */
    start(): void;
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     */
    enter(item: DragRef, pointerX: number, pointerY: number, index?: number): void;
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    exit(item: DragRef): void;
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @param previousIndex Index of the item when dragging started.
     *
     * @breaking-change 11.0.0 `previousIndex` parameter to become required.
     */
    drop(item: DragRef, currentIndex: number, previousContainer: DropListRef, isPointerOverContainer: boolean, distance: Point, previousIndex?: number): void;
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    withItems(items: DragRef[]): this;
    /** Sets the layout direction of the drop list. */
    withDirection(direction: Direction): this;
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    connectedTo(connectedTo: DropListRef[]): this;
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    withOrientation(orientation: 'vertical' | 'horizontal'): this;
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @param elements Elements that can be scrolled.
     */
    withScrollableParents(elements: HTMLElement[]): this;
    /** Gets the scrollable parents that are registered with this drop container. */
    getScrollableParents(): ReadonlyArray<HTMLElement>;
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    getItemIndex(item: DragRef): number;
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    isReceiving(): boolean;
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    _sortItem(item: DragRef, pointerX: number, pointerY: number, pointerDelta: {
        x: number;
        y: number;
    }): void;
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    _startScrollingIfNecessary(pointerX: number, pointerY: number): void;
    /** Stops any currently-running auto-scroll sequences. */
    _stopScrolling(): void;
    /** Caches the positions of the configured scrollable parents. */
    private _cacheParentPositions;
    /** Refreshes the position cache of the items and sibling containers. */
    private _cacheItemPositions;
    /** Resets the container to its initial state. */
    private _reset;
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    private _getSiblingOffsetPx;
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    private _getItemOffsetPx;
    /**
     * Checks if pointer is entering in the first position
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     */
    private _shouldEnterAsFirstChild;
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    private _getItemIndexFromPointerPosition;
    /** Caches the current items in the list and their positions. */
    private _cacheItems;
    /** Starts the interval that'll auto-scroll the element. */
    private _startScrollInterval;
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    _isOverContainer(x: number, y: number): boolean;
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    _getSiblingContainerFromPosition(item: DragRef, x: number, y: number): DropListRef | undefined;
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    _canReceive(item: DragRef, x: number, y: number): boolean;
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    _startReceiving(sibling: DropListRef): void;
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    _stopReceiving(sibling: DropListRef): void;
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    private _listenToScrollEvents;
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */
    private _getShadowRoot;
}
