/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ElementRef, EventEmitter, InjectionToken, NgZone, OnDestroy, QueryList, ViewContainerRef, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Observable } from 'rxjs';
import { CdkDragDrop, CdkDragEnd, CdkDragEnter, CdkDragExit, CdkDragMove, CdkDragStart, CdkDragRelease } from '../drag-events';
import { CdkDragHandle } from './drag-handle';
import { CdkDragPlaceholder } from './drag-placeholder';
import { CdkDragPreview } from './drag-preview';
import { DragRef, Point } from '../drag-ref';
import { CdkDropListInternal as CdkDropList } from './drop-list';
import { DragDrop } from '../drag-drop';
import { DragDropConfig, DragStartDelay, DragAxis } from './config';
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 */
export declare const CDK_DROP_LIST: InjectionToken<CdkDropList>;
/** Element that can be moved inside a CdkDropList container. */
export declare class CdkDrag<T = any> implements AfterViewInit, OnChanges, OnDestroy {
    /** Element that the draggable is attached to. */
    element: ElementRef<HTMLElement>;
    /** Droppable container that the draggable is a part of. */
    dropContainer: CdkDropList;
    private _document;
    private _ngZone;
    private _viewContainerRef;
    private _dir;
    private _changeDetectorRef;
    private _destroyed;
    /** Reference to the underlying drag instance. */
    _dragRef: DragRef<CdkDrag<T>>;
    /** Elements that can be used to drag the draggable item. */
    _handles: QueryList<CdkDragHandle>;
    /** Element that will be used as a template to create the draggable item's preview. */
    _previewTemplate: CdkDragPreview;
    /** Template for placeholder element rendered to show where a draggable would be dropped. */
    _placeholderTemplate: CdkDragPlaceholder;
    /** Arbitrary data to attach to this drag instance. */
    data: T;
    /** Locks the position of the dragged element along the specified axis. */
    lockAxis: DragAxis;
    /**
     * Selector that will be used to determine the root draggable element, starting from
     * the `cdkDrag` element and going up the DOM. Passing an alternate root element is useful
     * when trying to enable dragging on an element that you might not have access to.
     */
    rootElementSelector: string;
    /**
     * Node or selector that will be used to determine the element to which the draggable's
     * position will be constrained. If a string is passed in, it'll be used as a selector that
     * will be matched starting from the element's parent and going up the DOM until a match
     * has been found.
     */
    boundaryElement: string | ElementRef<HTMLElement> | HTMLElement;
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    dragStartDelay: DragStartDelay;
    /**
     * Sets the position of a `CdkDrag` that is outside of a drop container.
     * Can be used to restore the element's position for a returning user.
     */
    freeDragPosition: {
        x: number;
        y: number;
    };
    /** Whether starting to drag this element is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /**
     * Function that can be used to customize the logic of how the position of the drag item
     * is limited while it's being dragged. Gets called with a point containing the current position
     * of the user's pointer on the page and should return a point describing where the item should
     * be rendered.
     */
    constrainPosition?: (point: Point, dragRef: DragRef) => Point;
    /** Class to be added to the preview element. */
    previewClass: string | string[];
    /** Emits when the user starts dragging the item. */
    started: EventEmitter<CdkDragStart>;
    /** Emits when the user has released a drag item, before any animations have started. */
    released: EventEmitter<CdkDragRelease>;
    /** Emits when the user stops dragging an item in the container. */
    ended: EventEmitter<CdkDragEnd>;
    /** Emits when the user has moved the item into a new container. */
    entered: EventEmitter<CdkDragEnter<any>>;
    /** Emits when the user removes the item its container by dragging it into another container. */
    exited: EventEmitter<CdkDragExit<any>>;
    /** Emits when the user drops the item inside a container. */
    dropped: EventEmitter<CdkDragDrop<any>>;
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    moved: Observable<CdkDragMove<T>>;
    constructor(
    /** Element that the draggable is attached to. */
    element: ElementRef<HTMLElement>, 
    /** Droppable container that the draggable is a part of. */
    dropContainer: CdkDropList, _document: any, _ngZone: NgZone, _viewContainerRef: ViewContainerRef, config: DragDropConfig, _dir: Directionality, dragDrop: DragDrop, _changeDetectorRef: ChangeDetectorRef);
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement(): HTMLElement;
    /** Returns the root draggable element. */
    getRootElement(): HTMLElement;
    /** Resets a standalone drag item to its initial position. */
    reset(): void;
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    getFreeDragPosition(): {
        readonly x: number;
        readonly y: number;
    };
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Syncs the root element with the `DragRef`. */
    private _updateRootElement;
    /** Gets the boundary element, based on the `boundaryElement` value. */
    private _getBoundaryElement;
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    private _syncInputs;
    /** Handles the events from the underlying `DragRef`. */
    private _handleEvents;
    /** Assigns the default input values based on a provided config object. */
    private _assignDefaults;
    static ngAcceptInputType_disabled: BooleanInput;
}
