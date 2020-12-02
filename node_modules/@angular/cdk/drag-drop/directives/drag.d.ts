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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDrag<any>, [null, { optional: true; skipSelf: true; }, null, null, null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDrag<any>, "[cdkDrag]", ["cdkDrag"], { "disabled": "cdkDragDisabled"; "dragStartDelay": "cdkDragStartDelay"; "lockAxis": "cdkDragLockAxis"; "constrainPosition": "cdkDragConstrainPosition"; "previewClass": "cdkDragPreviewClass"; "boundaryElement": "cdkDragBoundary"; "rootElementSelector": "cdkDragRootElement"; "data": "cdkDragData"; "freeDragPosition": "cdkDragFreeDragPosition"; }, { "started": "cdkDragStarted"; "released": "cdkDragReleased"; "ended": "cdkDragEnded"; "entered": "cdkDragEntered"; "exited": "cdkDragExited"; "dropped": "cdkDragDropped"; "moved": "cdkDragMoved"; }, ["_previewTemplate", "_placeholderTemplate", "_handles"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kLnRzIiwic291cmNlcyI6WyJkcmFnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBWaWV3Q29udGFpbmVyUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIENka0RyYWdFbmQsIENka0RyYWdFbnRlciwgQ2RrRHJhZ0V4aXQsIENka0RyYWdNb3ZlLCBDZGtEcmFnU3RhcnQsIENka0RyYWdSZWxlYXNlIH0gZnJvbSAnLi4vZHJhZy1ldmVudHMnO1xuaW1wb3J0IHsgQ2RrRHJhZ0hhbmRsZSB9IGZyb20gJy4vZHJhZy1oYW5kbGUnO1xuaW1wb3J0IHsgQ2RrRHJhZ1BsYWNlaG9sZGVyIH0gZnJvbSAnLi9kcmFnLXBsYWNlaG9sZGVyJztcbmltcG9ydCB7IENka0RyYWdQcmV2aWV3IH0gZnJvbSAnLi9kcmFnLXByZXZpZXcnO1xuaW1wb3J0IHsgRHJhZ1JlZiwgUG9pbnQgfSBmcm9tICcuLi9kcmFnLXJlZic7XG5pbXBvcnQgeyBDZGtEcm9wTGlzdEludGVybmFsIGFzIENka0Ryb3BMaXN0IH0gZnJvbSAnLi9kcm9wLWxpc3QnO1xuaW1wb3J0IHsgRHJhZ0Ryb3AgfSBmcm9tICcuLi9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcsIERyYWdTdGFydERlbGF5LCBEcmFnQXhpcyB9IGZyb20gJy4vY29uZmlnJztcbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgaXMgdXNlZCB0byBwcm92aWRlIGEgQ2RrRHJvcExpc3QgaW5zdGFuY2UgdG8gQ2RrRHJhZy5cbiAqIFVzZWQgZm9yIGF2b2lkaW5nIGNpcmN1bGFyIGltcG9ydHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENES19EUk9QX0xJU1Q6IEluamVjdGlvblRva2VuPENka0Ryb3BMaXN0Pjtcbi8qKiBFbGVtZW50IHRoYXQgY2FuIGJlIG1vdmVkIGluc2lkZSBhIENka0Ryb3BMaXN0IGNvbnRhaW5lci4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0RyYWc8VCA9IGFueT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgZHJhZ2dhYmxlIGlzIGF0dGFjaGVkIHRvLiAqL1xuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIC8qKiBEcm9wcGFibGUgY29udGFpbmVyIHRoYXQgdGhlIGRyYWdnYWJsZSBpcyBhIHBhcnQgb2YuICovXG4gICAgZHJvcENvbnRhaW5lcjogQ2RrRHJvcExpc3Q7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY7XG4gICAgcHJpdmF0ZSBfZGlyO1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3llZDtcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIGRyYWcgaW5zdGFuY2UuICovXG4gICAgX2RyYWdSZWY6IERyYWdSZWY8Q2RrRHJhZzxUPj47XG4gICAgLyoqIEVsZW1lbnRzIHRoYXQgY2FuIGJlIHVzZWQgdG8gZHJhZyB0aGUgZHJhZ2dhYmxlIGl0ZW0uICovXG4gICAgX2hhbmRsZXM6IFF1ZXJ5TGlzdDxDZGtEcmFnSGFuZGxlPjtcbiAgICAvKiogRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHRlbXBsYXRlIHRvIGNyZWF0ZSB0aGUgZHJhZ2dhYmxlIGl0ZW0ncyBwcmV2aWV3LiAqL1xuICAgIF9wcmV2aWV3VGVtcGxhdGU6IENka0RyYWdQcmV2aWV3O1xuICAgIC8qKiBUZW1wbGF0ZSBmb3IgcGxhY2Vob2xkZXIgZWxlbWVudCByZW5kZXJlZCB0byBzaG93IHdoZXJlIGEgZHJhZ2dhYmxlIHdvdWxkIGJlIGRyb3BwZWQuICovXG4gICAgX3BsYWNlaG9sZGVyVGVtcGxhdGU6IENka0RyYWdQbGFjZWhvbGRlcjtcbiAgICAvKiogQXJiaXRyYXJ5IGRhdGEgdG8gYXR0YWNoIHRvIHRoaXMgZHJhZyBpbnN0YW5jZS4gKi9cbiAgICBkYXRhOiBUO1xuICAgIC8qKiBMb2NrcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbG9uZyB0aGUgc3BlY2lmaWVkIGF4aXMuICovXG4gICAgbG9ja0F4aXM6IERyYWdBeGlzO1xuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgcm9vdCBkcmFnZ2FibGUgZWxlbWVudCwgc3RhcnRpbmcgZnJvbVxuICAgICAqIHRoZSBgY2RrRHJhZ2AgZWxlbWVudCBhbmQgZ29pbmcgdXAgdGhlIERPTS4gUGFzc2luZyBhbiBhbHRlcm5hdGUgcm9vdCBlbGVtZW50IGlzIHVzZWZ1bFxuICAgICAqIHdoZW4gdHJ5aW5nIHRvIGVuYWJsZSBkcmFnZ2luZyBvbiBhbiBlbGVtZW50IHRoYXQgeW91IG1pZ2h0IG5vdCBoYXZlIGFjY2VzcyB0by5cbiAgICAgKi9cbiAgICByb290RWxlbWVudFNlbGVjdG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTm9kZSBvciBzZWxlY3RvciB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGRyYWdnYWJsZSdzXG4gICAgICogcG9zaXRpb24gd2lsbCBiZSBjb25zdHJhaW5lZC4gSWYgYSBzdHJpbmcgaXMgcGFzc2VkIGluLCBpdCdsbCBiZSB1c2VkIGFzIGEgc2VsZWN0b3IgdGhhdFxuICAgICAqIHdpbGwgYmUgbWF0Y2hlZCBzdGFydGluZyBmcm9tIHRoZSBlbGVtZW50J3MgcGFyZW50IGFuZCBnb2luZyB1cCB0aGUgRE9NIHVudGlsIGEgbWF0Y2hcbiAgICAgKiBoYXMgYmVlbiBmb3VuZC5cbiAgICAgKi9cbiAgICBib3VuZGFyeUVsZW1lbnQ6IHN0cmluZyB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGFmdGVyIHRoZSB1c2VyIGhhcyBwdXQgdGhlaXJcbiAgICAgKiBwb2ludGVyIGRvd24gYmVmb3JlIHN0YXJ0aW5nIHRvIGRyYWcgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0RGVsYXk6IERyYWdTdGFydERlbGF5O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIGEgYENka0RyYWdgIHRoYXQgaXMgb3V0c2lkZSBvZiBhIGRyb3AgY29udGFpbmVyLlxuICAgICAqIENhbiBiZSB1c2VkIHRvIHJlc3RvcmUgdGhlIGVsZW1lbnQncyBwb3NpdGlvbiBmb3IgYSByZXR1cm5pbmcgdXNlci5cbiAgICAgKi9cbiAgICBmcmVlRHJhZ1Bvc2l0aW9uOiB7XG4gICAgICAgIHg6IG51bWJlcjtcbiAgICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgdG8gZHJhZyB0aGlzIGVsZW1lbnQgaXMgZGlzYWJsZWQuICovXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgbG9naWMgb2YgaG93IHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhZyBpdGVtXG4gICAgICogaXMgbGltaXRlZCB3aGlsZSBpdCdzIGJlaW5nIGRyYWdnZWQuIEdldHMgY2FsbGVkIHdpdGggYSBwb2ludCBjb250YWluaW5nIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICogb2YgdGhlIHVzZXIncyBwb2ludGVyIG9uIHRoZSBwYWdlIGFuZCBzaG91bGQgcmV0dXJuIGEgcG9pbnQgZGVzY3JpYmluZyB3aGVyZSB0aGUgaXRlbSBzaG91bGRcbiAgICAgKiBiZSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBjb25zdHJhaW5Qb3NpdGlvbj86IChwb2ludDogUG9pbnQsIGRyYWdSZWY6IERyYWdSZWYpID0+IFBvaW50O1xuICAgIC8qKiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgcHJldmlldyBlbGVtZW50LiAqL1xuICAgIHByZXZpZXdDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBpdGVtLiAqL1xuICAgIHN0YXJ0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnU3RhcnQ+O1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGhhcyByZWxlYXNlZCBhIGRyYWcgaXRlbSwgYmVmb3JlIGFueSBhbmltYXRpb25zIGhhdmUgc3RhcnRlZC4gKi9cbiAgICByZWxlYXNlZDogRXZlbnRFbWl0dGVyPENka0RyYWdSZWxlYXNlPjtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyBhbiBpdGVtIGluIHRoZSBjb250YWluZXIuICovXG4gICAgZW5kZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW5kPjtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGl0ZW0gaW50byBhIG5ldyBjb250YWluZXIuICovXG4gICAgZW50ZXJlZDogRXZlbnRFbWl0dGVyPENka0RyYWdFbnRlcjxhbnk+PjtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciByZW1vdmVzIHRoZSBpdGVtIGl0cyBjb250YWluZXIgYnkgZHJhZ2dpbmcgaXQgaW50byBhbm90aGVyIGNvbnRhaW5lci4gKi9cbiAgICBleGl0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxhbnk+PjtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBkcm9wcyB0aGUgaXRlbSBpbnNpZGUgYSBjb250YWluZXIuICovXG4gICAgZHJvcHBlZDogRXZlbnRFbWl0dGVyPENka0RyYWdEcm9wPGFueT4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nIHRoZSBpdGVtLiBVc2Ugd2l0aCBjYXV0aW9uLFxuICAgICAqIGJlY2F1c2UgdGhpcyBldmVudCB3aWxsIGZpcmUgZm9yIGV2ZXJ5IHBpeGVsIHRoYXQgdGhlIHVzZXIgaGFzIGRyYWdnZWQuXG4gICAgICovXG4gICAgbW92ZWQ6IE9ic2VydmFibGU8Q2RrRHJhZ01vdmU8VD4+O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBFbGVtZW50IHRoYXQgdGhlIGRyYWdnYWJsZSBpcyBhdHRhY2hlZCB0by4gKi9cbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgXG4gICAgLyoqIERyb3BwYWJsZSBjb250YWluZXIgdGhhdCB0aGUgZHJhZ2dhYmxlIGlzIGEgcGFydCBvZi4gKi9cbiAgICBkcm9wQ29udGFpbmVyOiBDZGtEcm9wTGlzdCwgX2RvY3VtZW50OiBhbnksIF9uZ1pvbmU6IE5nWm9uZSwgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9kaXI6IERpcmVjdGlvbmFsaXR5LCBkcmFnRHJvcDogRHJhZ0Ryb3AsIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyB1c2VkIGFzIGEgcGxhY2Vob2xkZXJcbiAgICAgKiB3aGlsZSB0aGUgY3VycmVudCBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQuXG4gICAgICovXG4gICAgZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuICAgIC8qKiBSZXR1cm5zIHRoZSByb290IGRyYWdnYWJsZSBlbGVtZW50LiAqL1xuICAgIGdldFJvb3RFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuICAgIC8qKiBSZXNldHMgYSBzdGFuZGFsb25lIGRyYWcgaXRlbSB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbi4gKi9cbiAgICByZXNldCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBpeGVsIGNvb3JkaW5hdGVzIG9mIHRoZSBkcmFnZ2FibGUgb3V0c2lkZSBvZiBhIGRyb3AgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGdldEZyZWVEcmFnUG9zaXRpb24oKToge1xuICAgICAgICByZWFkb25seSB4OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHk6IG51bWJlcjtcbiAgICB9O1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqIFN5bmNzIHRoZSByb290IGVsZW1lbnQgd2l0aCB0aGUgYERyYWdSZWZgLiAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJvb3RFbGVtZW50O1xuICAgIC8qKiBHZXRzIHRoZSBib3VuZGFyeSBlbGVtZW50LCBiYXNlZCBvbiB0aGUgYGJvdW5kYXJ5RWxlbWVudGAgdmFsdWUuICovXG4gICAgcHJpdmF0ZSBfZ2V0Qm91bmRhcnlFbGVtZW50O1xuICAgIC8qKiBTeW5jcyB0aGUgaW5wdXRzIG9mIHRoZSBDZGtEcmFnIHdpdGggdGhlIG9wdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgRHJhZ1JlZi4gKi9cbiAgICBwcml2YXRlIF9zeW5jSW5wdXRzO1xuICAgIC8qKiBIYW5kbGVzIHRoZSBldmVudHMgZnJvbSB0aGUgdW5kZXJseWluZyBgRHJhZ1JlZmAuICovXG4gICAgcHJpdmF0ZSBfaGFuZGxlRXZlbnRzO1xuICAgIC8qKiBBc3NpZ25zIHRoZSBkZWZhdWx0IGlucHV0IHZhbHVlcyBiYXNlZCBvbiBhIHByb3ZpZGVkIGNvbmZpZyBvYmplY3QuICovXG4gICAgcHJpdmF0ZSBfYXNzaWduRGVmYXVsdHM7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=