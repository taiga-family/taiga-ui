/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, NgZone, ViewContainerRef, TemplateRef } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Direction } from '@angular/cdk/bidi';
import { Subject, Observable } from 'rxjs';
import { DropListRefInternal as DropListRef } from './drop-list-ref';
import { DragDropRegistry } from './drag-drop-registry';
/** Object that can be used to configure the behavior of DragRef. */
export interface DragRefConfig {
    /**
     * Minimum amount of pixels that the user should
     * drag, before the CDK initiates a drag sequence.
     */
    dragStartThreshold: number;
    /**
     * Amount the pixels the user should drag before the CDK
     * considers them to have changed the drag direction.
     */
    pointerDirectionChangeThreshold: number;
    /** `z-index` for the absolutely-positioned elements that are created by the drag item. */
    zIndex?: number;
}
/**
 * Internal compile-time-only representation of a `DragRef`.
 * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
 * @docs-private
 */
export interface DragRefInternal extends DragRef {
}
/** Template that can be used to create a drag helper element (e.g. a preview or a placeholder). */
interface DragHelperTemplate<T = any> {
    template: TemplateRef<T> | null;
    viewContainer: ViewContainerRef;
    context: T;
}
/** Template that can be used to create a drag preview element. */
interface DragPreviewTemplate<T = any> extends DragHelperTemplate<T> {
    matchSize?: boolean;
}
/** Point on the page or within an element. */
export interface Point {
    x: number;
    y: number;
}
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
export declare class DragRef<T = any> {
    private _config;
    private _document;
    private _ngZone;
    private _viewportRuler;
    private _dragDropRegistry;
    /** Element displayed next to the user's pointer while the element is dragged. */
    private _preview;
    /** Reference to the view of the preview element. */
    private _previewRef;
    /** Reference to the view of the placeholder element. */
    private _placeholderRef;
    /** Element that is rendered instead of the draggable item while it is being sorted. */
    private _placeholder;
    /** Coordinates within the element at which the user picked up the element. */
    private _pickupPositionInElement;
    /** Coordinates on the page at which the user picked up the element. */
    private _pickupPositionOnPage;
    /**
     * Anchor node used to save the place in the DOM where the element was
     * picked up so that it can be restored at the end of the drag sequence.
     */
    private _anchor;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */
    private _passiveTransform;
    /** CSS `transform` that is applied to the element while it's being dragged. */
    private _activeTransform;
    /** Inline `transform` value that the element had before the first dragging sequence. */
    private _initialTransform?;
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */
    private _hasStartedDragging;
    /** Whether the element has moved since the user started dragging it. */
    private _hasMoved;
    /** Drop container in which the DragRef resided when dragging began. */
    private _initialContainer;
    /** Index at which the item started in its initial container. */
    private _initialIndex;
    /** Cached positions of scrollable parent elements. */
    private _parentPositions;
    /** Emits when the item is being moved. */
    private _moveEvents;
    /** Keeps track of the direction in which the user is dragging along each axis. */
    private _pointerDirectionDelta;
    /** Pointer position at which the last change in the delta occurred. */
    private _pointerPositionAtLastDirectionChange;
    /**
     * Root DOM node of the drag instance. This is the element that will
     * be moved around as the user is dragging.
     */
    private _rootElement;
    /**
     * Inline style value of `-webkit-tap-highlight-color` at the time the
     * dragging was started. Used to restore the value once we're done dragging.
     */
    private _rootElementTapHighlight;
    /** Subscription to pointer movement events. */
    private _pointerMoveSubscription;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */
    private _pointerUpSubscription;
    /** Subscription to the viewport being scrolled. */
    private _scrollSubscription;
    /** Subscription to the viewport being resized. */
    private _resizeSubscription;
    /**
     * Time at which the last touch event occurred. Used to avoid firing the same
     * events multiple times on touch devices where the browser will fire a fake
     * mouse event for each touch event, after a certain time.
     */
    private _lastTouchEventTime;
    /** Time at which the last dragging sequence was started. */
    private _dragStartTime;
    /** Cached reference to the boundary element. */
    private _boundaryElement;
    /** Whether the native dragging interactions have been enabled on the root element. */
    private _nativeInteractionsEnabled;
    /** Cached dimensions of the preview element. */
    private _previewRect?;
    /** Cached dimensions of the boundary element. */
    private _boundaryRect?;
    /** Element that will be used as a template to create the draggable item's preview. */
    private _previewTemplate?;
    /** Template for placeholder element rendered to show where a draggable would be dropped. */
    private _placeholderTemplate?;
    /** Elements that can be used to drag the draggable item. */
    private _handles;
    /** Registered handles that are currently disabled. */
    private _disabledHandles;
    /** Droppable container that the draggable is a part of. */
    private _dropContainer?;
    /** Layout direction of the item. */
    private _direction;
    /** Axis along which dragging is locked. */
    lockAxis: 'x' | 'y';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    dragStartDelay: number | {
        touch: number;
        mouse: number;
    };
    /** Class to be added to the preview element. */
    previewClass: string | string[] | undefined;
    /** Whether starting to drag this element is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Emits as the drag sequence is being prepared. */
    beforeStarted: Subject<void>;
    /** Emits when the user starts dragging the item. */
    started: Subject<{
        source: DragRef<any>;
    }>;
    /** Emits when the user has released a drag item, before any animations have started. */
    released: Subject<{
        source: DragRef<any>;
    }>;
    /** Emits when the user stops dragging an item in the container. */
    ended: Subject<{
        source: DragRef<any>;
        distance: Point;
    }>;
    /** Emits when the user has moved the item into a new container. */
    entered: Subject<{
        container: DropListRef;
        item: DragRef<any>;
        currentIndex: number;
    }>;
    /** Emits when the user removes the item its container by dragging it into another container. */
    exited: Subject<{
        container: DropListRef;
        item: DragRef<any>;
    }>;
    /** Emits when the user drops the item inside a container. */
    dropped: Subject<{
        previousIndex: number;
        currentIndex: number;
        item: DragRef<any>;
        container: DropListRef;
        previousContainer: DropListRef;
        distance: Point;
        isPointerOverContainer: boolean;
    }>;
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    moved: Observable<{
        source: DragRef;
        pointerPosition: {
            x: number;
            y: number;
        };
        event: MouseEvent | TouchEvent;
        distance: Point;
        delta: {
            x: -1 | 0 | 1;
            y: -1 | 0 | 1;
        };
    }>;
    /** Arbitrary data that can be attached to the drag item. */
    data: T;
    /**
     * Function that can be used to customize the logic of how the position of the drag item
     * is limited while it's being dragged. Gets called with a point containing the current position
     * of the user's pointer on the page and should return a point describing where the item should
     * be rendered.
     */
    constrainPosition?: (point: Point, dragRef: DragRef) => Point;
    constructor(element: ElementRef<HTMLElement> | HTMLElement, _config: DragRefConfig, _document: Document, _ngZone: NgZone, _viewportRuler: ViewportRuler, _dragDropRegistry: DragDropRegistry<DragRef, DropListRef>);
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement(): HTMLElement;
    /** Returns the root draggable element. */
    getRootElement(): HTMLElement;
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */
    getVisibleElement(): HTMLElement;
    /** Registers the handles that can be used to drag the element. */
    withHandles(handles: (HTMLElement | ElementRef<HTMLElement>)[]): this;
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    withPreviewTemplate(template: DragPreviewTemplate | null): this;
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    withPlaceholderTemplate(template: DragHelperTemplate | null): this;
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this;
    /**
     * Element to which the draggable's position will be constrained.
     */
    withBoundaryElement(boundaryElement: ElementRef<HTMLElement> | HTMLElement | null): this;
    /** Removes the dragging functionality from the DOM element. */
    dispose(): void;
    /** Checks whether the element is currently being dragged. */
    isDragging(): boolean;
    /** Resets a standalone drag item to its initial position. */
    reset(): void;
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    disableHandle(handle: HTMLElement): void;
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    enableHandle(handle: HTMLElement): void;
    /** Sets the layout direction of the draggable item. */
    withDirection(direction: Direction): this;
    /** Sets the container that the item is part of. */
    _withDropContainer(container: DropListRef): void;
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    getFreeDragPosition(): Readonly<Point>;
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    setFreeDragPosition(value: Point): this;
    /** Updates the item's sort order based on the last-known pointer position. */
    _sortFromLastPointerPosition(): void;
    /** Unsubscribes from the global subscriptions. */
    private _removeSubscriptions;
    /** Destroys the preview element and its ViewRef. */
    private _destroyPreview;
    /** Destroys the placeholder element and its ViewRef. */
    private _destroyPlaceholder;
    /** Handler for the `mousedown`/`touchstart` events. */
    private _pointerDown;
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
    private _pointerMove;
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
    private _pointerUp;
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    private _endDragSequence;
    /** Starts the dragging sequence. */
    private _startDragSequence;
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    private _initializeDragSequence;
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    private _cleanupDragArtifacts;
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    private _updateActiveDropContainer;
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    private _createPreviewElement;
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    private _animatePreviewToPlaceholder;
    /** Creates an element that will be shown instead of the current element while dragging. */
    private _createPlaceholderElement;
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    private _getPointerPositionInElement;
    /** Determines the point of the page that was touched by the user. */
    private _getPointerPositionOnPage;
    /** Gets the pointer position on the page, accounting for any position constraints. */
    private _getConstrainedPointerPosition;
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    private _updatePointerDirectionDelta;
    /** Toggles the native drag interactions, based on how many handles are registered. */
    private _toggleNativeDragInteractions;
    /** Removes the manually-added event listeners from the root element. */
    private _removeRootElementListeners;
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    private _applyRootElementTransform;
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    private _getDragDistance;
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    private _cleanupCachedDimensions;
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    private _containInsideBoundaryOnResize;
    /** Gets the drag start delay, based on the event type. */
    private _getDragStartDelay;
    /** Updates the internal state of the draggable element when scrolling has occurred. */
    private _updateOnScroll;
    /** Gets the scroll position of the viewport. */
    private _getViewportScrollPosition;
}
export {};
