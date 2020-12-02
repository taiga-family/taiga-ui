/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceArray, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ElementRef, EventEmitter, Input, Output, Optional, Directive, ChangeDetectorRef, SkipSelf, Inject, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CDK_DROP_LIST } from './drag';
import { CdkDropListGroup } from './drop-list-group';
import { DragDrop } from '../drag-drop';
import { CDK_DRAG_CONFIG } from './config';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
/** Counter used to generate unique ids for drop zones. */
var _uniqueIdCounter = 0;
var ɵ0 = undefined;
/** Container that wraps a set of draggable items. */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _dir, _group, 
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    _scrollDispatcher, config) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /** Emits when the list has been destroyed. */
        this._destroyed = new Subject();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter++;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /** Emits when the user drops an item inside the container. */
        this.dropped = new EventEmitter();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new EventEmitter();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new EventEmitter();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new EventEmitter();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: function (value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Registers an items with the drop list. */
    CdkDropList.prototype.addItem = function (item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Removes an item from the drop list. */
    CdkDropList.prototype.removeItem = function (item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    CdkDropList.prototype.getSortedItems = function () {
        return Array.from(this._unsortedItems).sort(function (a, b) {
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
    };
    CdkDropList.prototype.ngOnDestroy = function () {
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.start = function () {
        this._dropListRef.start();
    };
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
    CdkDropList.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.enter = function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.exit = function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.getItemIndex = function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    CdkDropList.prototype._setupInputSyncSubscription = function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(startWith(this._dir.value), takeUntil(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            var siblings = coerceArray(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    CdkDropList._dropLists.find(function (list) { return list.id === drop; }) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!_this._scrollableParentsResolved && _this._scrollDispatcher) {
                var scrollableParents = _this._scrollDispatcher
                    .getAncestorScrollContainers(_this.element)
                    .map(function (scrollable) { return scrollable.getElementRef().nativeElement; });
                _this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                _this._scrollableParentsResolved = true;
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = coerceBooleanProperty(_this.sortingDisabled);
            ref.autoScrollDisabled = coerceBooleanProperty(_this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    CdkDropList.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._syncItemsWithRef();
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /** Assigns the default input values based on a provided config object. */
    CdkDropList.prototype._assignDefaults = function (config) {
        var lockAxis = config.lockAxis, draggingDisabled = config.draggingDisabled, sortingDisabled = config.sortingDisabled, listAutoScrollDisabled = config.listAutoScrollDisabled, listOrientation = config.listOrientation;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    };
    /** Syncs up the registered drag items with underlying drop list ref. */
    CdkDropList.prototype._syncItemsWithRef = function () {
        this._dropListRef.withItems(this.getSortedItems().map(function (item) { return item._dragRef; }));
    };
    /** Keeps track of the drop lists that are currently on the page. */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] }
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDrop },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: CdkDropListGroup, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: ScrollDispatcher },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DRAG_CONFIG,] }] }
    ]; };
    CdkDropList.propDecorators = {
        connectedTo: [{ type: Input, args: ['cdkDropListConnectedTo',] }],
        data: [{ type: Input, args: ['cdkDropListData',] }],
        orientation: [{ type: Input, args: ['cdkDropListOrientation',] }],
        id: [{ type: Input }],
        lockAxis: [{ type: Input, args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: Input, args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: Input, args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: Input, args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: Input, args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: Output, args: ['cdkDropListDropped',] }],
        entered: [{ type: Output, args: ['cdkDropListEntered',] }],
        exited: [{ type: Output, args: ['cdkDropListExited',] }],
        sorted: [{ type: Output, args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());
export { CdkDropList };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9kcm9wLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFlLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZGLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFVLGFBQWEsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUU5QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUduRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3RDLE9BQU8sRUFBZ0QsZUFBZSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCwwREFBMEQ7QUFDMUQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FlaUIsU0FBUztBQU5uRCxxREFBcUQ7QUFDckQ7SUErR0U7SUFDSSxpREFBaUQ7SUFDMUMsT0FBZ0MsRUFBRSxRQUFrQixFQUNuRCxrQkFBcUMsRUFBc0IsSUFBcUIsRUFDeEQsTUFBc0M7SUFFdEU7OztPQUdHO0lBQ0ssaUJBQW9DLEVBQ1AsTUFBdUI7UUFY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QVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUU7d0JBQ1QsMkVBQTJFO3dCQUMzRSxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLElBQVcsRUFBQzt3QkFDaEQsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUM7cUJBQ25EO29CQUNELElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsZUFBZTt3QkFDeEIsTUFBTSxFQUFFLElBQUk7d0JBQ1osZ0NBQWdDLEVBQUUsVUFBVTt3QkFDNUMsZ0NBQWdDLEVBQUUsMkJBQTJCO3dCQUM3RCxpQ0FBaUMsRUFBRSw0QkFBNEI7cUJBQ2hFO2lCQUNGOzs7O2dCQWpEQyxVQUFVO2dCQWtCSixRQUFRO2dCQVhkLGlCQUFpQjtnQkFJWCxjQUFjLHVCQXlJZ0MsUUFBUTtnQkFySXRELGdCQUFnQix1QkFzSWpCLFFBQVEsWUFBSSxRQUFRO2dCQXpJbkIsZ0JBQWdCO2dEQWdKakIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7OEJBeEZ0QyxLQUFLLFNBQUMsd0JBQXdCO3VCQUk5QixLQUFLLFNBQUMsaUJBQWlCOzhCQUd2QixLQUFLLFNBQUMsd0JBQXdCO3FCQU05QixLQUFLOzJCQUdMLEtBQUssU0FBQyxxQkFBcUI7MkJBRzNCLEtBQUssU0FBQyxxQkFBcUI7a0NBYzNCLEtBQUssU0FBQyw0QkFBNEI7aUNBT2xDLEtBQUssU0FBQywyQkFBMkI7cUNBSWpDLEtBQUssU0FBQywrQkFBK0I7MEJBSXJDLE1BQU0sU0FBQyxvQkFBb0I7MEJBTTNCLE1BQU0sU0FBQyxvQkFBb0I7eUJBTzNCLE1BQU0sU0FBQyxtQkFBbUI7eUJBSTFCLE1BQU0sU0FBQyxtQkFBbUI7O0lBNlE3QixrQkFBQztDQUFBLEFBaFhELElBZ1hDO1NBaFdZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUFycmF5LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG4gIERpcmVjdGl2ZSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNraXBTZWxmLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7Q2RrRHJhZywgQ0RLX0RST1BfTElTVH0gZnJvbSAnLi9kcmFnJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIENka0RyYWdFbnRlciwgQ2RrRHJhZ0V4aXQsIENka0RyYWdTb3J0RXZlbnR9IGZyb20gJy4uL2RyYWctZXZlbnRzJztcbmltcG9ydCB7Q2RrRHJvcExpc3RHcm91cH0gZnJvbSAnLi9kcm9wLWxpc3QtZ3JvdXAnO1xuaW1wb3J0IHtEcm9wTGlzdFJlZn0gZnJvbSAnLi4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQge0RyYWdSZWZ9IGZyb20gJy4uL2RyYWctcmVmJztcbmltcG9ydCB7RHJhZ0Ryb3B9IGZyb20gJy4uL2RyYWctZHJvcCc7XG5pbXBvcnQge0Ryb3BMaXN0T3JpZW50YXRpb24sIERyYWdBeGlzLCBEcmFnRHJvcENvbmZpZywgQ0RLX0RSQUdfQ09ORklHfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBpZHMgZm9yIGRyb3Agem9uZXMuICovXG5sZXQgX3VuaXF1ZUlkQ291bnRlciA9IDA7XG5cbi8qKlxuICogSW50ZXJuYWwgY29tcGlsZS10aW1lLW9ubHkgcmVwcmVzZW50YXRpb24gb2YgYSBgQ2RrRHJvcExpc3RgLlxuICogVXNlZCB0byBhdm9pZCBjaXJjdWxhciBpbXBvcnQgaXNzdWVzIGJldHdlZW4gdGhlIGBDZGtEcm9wTGlzdGAgYW5kIHRoZSBgQ2RrRHJhZ2AuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRHJvcExpc3RJbnRlcm5hbCBleHRlbmRzIENka0Ryb3BMaXN0IHt9XG5cbi8qKiBDb250YWluZXIgdGhhdCB3cmFwcyBhIHNldCBvZiBkcmFnZ2FibGUgaXRlbXMuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrRHJvcExpc3RdLCBjZGstZHJvcC1saXN0JyxcbiAgZXhwb3J0QXM6ICdjZGtEcm9wTGlzdCcsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFByZXZlbnQgY2hpbGQgZHJvcCBsaXN0cyBmcm9tIHBpY2tpbmcgdXAgdGhlIHNhbWUgZ3JvdXAgYXMgdGhlaXIgcGFyZW50LlxuICAgIHtwcm92aWRlOiBDZGtEcm9wTGlzdEdyb3VwLCB1c2VWYWx1ZTogdW5kZWZpbmVkfSxcbiAgICB7cHJvdmlkZTogQ0RLX0RST1BfTElTVCwgdXNlRXhpc3Rpbmc6IENka0Ryb3BMaXN0fSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstZHJvcC1saXN0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1tjbGFzcy5jZGstZHJvcC1saXN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5jZGstZHJvcC1saXN0LWRyYWdnaW5nXSc6ICdfZHJvcExpc3RSZWYuaXNEcmFnZ2luZygpJyxcbiAgICAnW2NsYXNzLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nXSc6ICdfZHJvcExpc3RSZWYuaXNSZWNlaXZpbmcoKScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJvcExpc3Q8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgbGlzdCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQncyBzY3JvbGxhYmxlIHBhcmVudHMgaGF2ZSBiZWVuIHJlc29sdmVkLiAqL1xuICBwcml2YXRlIF9zY3JvbGxhYmxlUGFyZW50c1Jlc29sdmVkOiBib29sZWFuO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZHJvcCBsaXN0cyB0aGF0IGFyZSBjdXJyZW50bHkgb24gdGhlIHBhZ2UuICovXG4gIHByaXZhdGUgc3RhdGljIF9kcm9wTGlzdHM6IENka0Ryb3BMaXN0W10gPSBbXTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIGRyb3AgbGlzdCBpbnN0YW5jZS4gKi9cbiAgX2Ryb3BMaXN0UmVmOiBEcm9wTGlzdFJlZjxDZGtEcm9wTGlzdDxUPj47XG5cbiAgLyoqXG4gICAqIE90aGVyIGRyYWdnYWJsZSBjb250YWluZXJzIHRoYXQgdGhpcyBjb250YWluZXIgaXMgY29ubmVjdGVkIHRvIGFuZCBpbnRvIHdoaWNoIHRoZVxuICAgKiBjb250YWluZXIncyBpdGVtcyBjYW4gYmUgdHJhbnNmZXJyZWQuIENhbiBlaXRoZXIgYmUgcmVmZXJlbmNlcyB0byBvdGhlciBkcm9wIGNvbnRhaW5lcnMsXG4gICAqIG9yIHRoZWlyIHVuaXF1ZSBJRHMuXG4gICAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0Q29ubmVjdGVkVG8nKVxuICBjb25uZWN0ZWRUbzogKENka0Ryb3BMaXN0IHwgc3RyaW5nKVtdIHwgQ2RrRHJvcExpc3QgfCBzdHJpbmcgPSBbXTtcblxuICAvKiogQXJiaXRyYXJ5IGRhdGEgdG8gYXR0YWNoIHRvIHRoaXMgY29udGFpbmVyLiAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0RGF0YScpIGRhdGE6IFQ7XG5cbiAgLyoqIERpcmVjdGlvbiBpbiB3aGljaCB0aGUgbGlzdCBpcyBvcmllbnRlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdE9yaWVudGF0aW9uJykgb3JpZW50YXRpb246IERyb3BMaXN0T3JpZW50YXRpb247XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIGRyb3Agem9uZS4gQ2FuIGJlIHVzZWQgYXMgYSByZWZlcmVuY2VcbiAgICogaW4gdGhlIGBjb25uZWN0ZWRUb2Agb2YgYW5vdGhlciBgQ2RrRHJvcExpc3RgLlxuICAgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBjZGstZHJvcC1saXN0LSR7X3VuaXF1ZUlkQ291bnRlcisrfWA7XG5cbiAgLyoqIExvY2tzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgY29udGFpbmVyIGFsb25nIHRoZSBzcGVjaWZpZWQgYXhpcy4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdExvY2tBeGlzJykgbG9ja0F4aXM6IERyYWdBeGlzO1xuXG4gIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSB0aGlzIGNvbnRhaW5lciBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdERpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAoISF0aGlzLl9ncm91cCAmJiB0aGlzLl9ncm91cC5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gVXN1YWxseSB3ZSBzeW5jIHRoZSBkaXJlY3RpdmUgYW5kIHJlZiBzdGF0ZSByaWdodCBiZWZvcmUgZHJhZ2dpbmcgc3RhcnRzLCBpbiBvcmRlciB0byBoYXZlXG4gICAgLy8gYSBzaW5nbGUgcG9pbnQgb2YgZmFpbHVyZSBhbmQgdG8gYXZvaWQgaGF2aW5nIHRvIHVzZSBzZXR0ZXJzIGZvciBldmVyeXRoaW5nLiBgZGlzYWJsZWRgIGlzXG4gICAgLy8gYSBzcGVjaWFsIGNhc2UsIGJlY2F1c2UgaXQgY2FuIHByZXZlbnQgdGhlIGBiZWZvcmVTdGFydGVkYCBldmVudCBmcm9tIGZpcmluZywgd2hpY2ggY2FuIGxvY2tcbiAgICAvLyB0aGUgdXNlciBpbiBhIGRpc2FibGVkIHN0YXRlLCBzbyB3ZSBhbHNvIG5lZWQgdG8gc3luYyBpdCBhcyBpdCdzIGJlaW5nIHNldC5cbiAgICB0aGlzLl9kcm9wTGlzdFJlZi5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBzb3J0aW5nIHdpdGhpbiB0aGlzIGRyb3AgbGlzdCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdFNvcnRpbmdEaXNhYmxlZCcpXG4gIHNvcnRpbmdEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGl0ZW1cbiAgICogaXMgYWxsb3dlZCB0byBiZSBtb3ZlZCBpbnRvIGEgZHJvcCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0RW50ZXJQcmVkaWNhdGUnKVxuICBlbnRlclByZWRpY2F0ZTogKGRyYWc6IENka0RyYWcsIGRyb3A6IENka0Ryb3BMaXN0KSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZVxuXG4gIC8qKiBXaGV0aGVyIHRvIGF1dG8tc2Nyb2xsIHRoZSB2aWV3IHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlaXIgcG9pbnRlciBjbG9zZSB0byB0aGUgZWRnZXMuICovXG4gIEBJbnB1dCgnY2RrRHJvcExpc3RBdXRvU2Nyb2xsRGlzYWJsZWQnKVxuICBhdXRvU2Nyb2xsRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgZHJvcHMgYW4gaXRlbSBpbnNpZGUgdGhlIGNvbnRhaW5lci4gKi9cbiAgQE91dHB1dCgnY2RrRHJvcExpc3REcm9wcGVkJylcbiAgZHJvcHBlZDogRXZlbnRFbWl0dGVyPENka0RyYWdEcm9wPFQsIGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRHJvcDxULCBhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCBhIG5ldyBkcmFnIGl0ZW0gaW50byB0aGlzIGNvbnRhaW5lci5cbiAgICovXG4gIEBPdXRwdXQoJ2Nka0Ryb3BMaXN0RW50ZXJlZCcpXG4gIGVudGVyZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW50ZXI8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW50ZXI8VD4+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGNvbnRhaW5lclxuICAgKiBieSBkcmFnZ2luZyBpdCBpbnRvIGFub3RoZXIgY29udGFpbmVyLlxuICAgKi9cbiAgQE91dHB1dCgnY2RrRHJvcExpc3RFeGl0ZWQnKVxuICBleGl0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdFeGl0PFQ+PigpO1xuXG4gIC8qKiBFbWl0cyBhcyB0aGUgdXNlciBpcyBzd2FwcGluZyBpdGVtcyB3aGlsZSBhY3RpdmVseSBkcmFnZ2luZy4gKi9cbiAgQE91dHB1dCgnY2RrRHJvcExpc3RTb3J0ZWQnKVxuICBzb3J0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnU29ydEV2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ1NvcnRFdmVudDxUPj4oKTtcblxuICAvKipcbiAgICogS2VlcHMgdHJhY2sgb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGNvbnRhaW5lci4gSGlzdG9yaWNhbGx5IHdlIHVzZWQgdG9cbiAgICogZG8gdGhpcyB3aXRoIGEgYENvbnRlbnRDaGlsZHJlbmAgcXVlcnksIGhvd2V2ZXIgcXVlcmllcyBkb24ndCBoYW5kbGUgdHJhbnNwbGFudGVkIHZpZXdzIHZlcnlcbiAgICogd2VsbCB3aGljaCBtZWFucyB0aGF0IHdlIGNhbid0IGhhbmRsZSBjYXNlcyBsaWtlIGRyYWdnaW5nIHRoZSBoZWFkZXJzIG9mIGEgYG1hdC10YWJsZWBcbiAgICogY29ycmVjdGx5LiBXaGF0IHdlIGRvIGluc3RlYWQgaXMgdG8gaGF2ZSB0aGUgaXRlbXMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB3aXRoIHRoZSBjb250YWluZXJcbiAgICogYW5kIHRoZW4gd2Ugc29ydCB0aGVtIGJhc2VkIG9uIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET00uXG4gICAqL1xuICBwcml2YXRlIF91bnNvcnRlZEl0ZW1zID0gbmV3IFNldDxDZGtEcmFnPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgZHJvcCBsaXN0IGlzIGF0dGFjaGVkIHRvLiAqL1xuICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBkcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgX2Rpcj86IERpcmVjdGlvbmFsaXR5LFxuICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBfZ3JvdXA/OiBDZGtEcm9wTGlzdEdyb3VwPENka0Ryb3BMaXN0PixcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBfc2Nyb2xsRGlzcGF0Y2hlciBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMS4wLjBcbiAgICAgICAqL1xuICAgICAgcHJpdmF0ZSBfc2Nyb2xsRGlzcGF0Y2hlcj86IFNjcm9sbERpc3BhdGNoZXIsXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENES19EUkFHX0NPTkZJRykgY29uZmlnPzogRHJhZ0Ryb3BDb25maWcpIHtcbiAgICB0aGlzLl9kcm9wTGlzdFJlZiA9IGRyYWdEcm9wLmNyZWF0ZURyb3BMaXN0KGVsZW1lbnQpO1xuICAgIHRoaXMuX2Ryb3BMaXN0UmVmLmRhdGEgPSB0aGlzO1xuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgdGhpcy5fYXNzaWduRGVmYXVsdHMoY29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kcm9wTGlzdFJlZi5lbnRlclByZWRpY2F0ZSA9IChkcmFnOiBEcmFnUmVmPENka0RyYWc+LCBkcm9wOiBEcm9wTGlzdFJlZjxDZGtEcm9wTGlzdD4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVudGVyUHJlZGljYXRlKGRyYWcuZGF0YSwgZHJvcC5kYXRhKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fc2V0dXBJbnB1dFN5bmNTdWJzY3JpcHRpb24odGhpcy5fZHJvcExpc3RSZWYpO1xuICAgIHRoaXMuX2hhbmRsZUV2ZW50cyh0aGlzLl9kcm9wTGlzdFJlZik7XG4gICAgQ2RrRHJvcExpc3QuX2Ryb3BMaXN0cy5wdXNoKHRoaXMpO1xuXG4gICAgaWYgKF9ncm91cCkge1xuICAgICAgX2dyb3VwLl9pdGVtcy5hZGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlZ2lzdGVycyBhbiBpdGVtcyB3aXRoIHRoZSBkcm9wIGxpc3QuICovXG4gIGFkZEl0ZW0oaXRlbTogQ2RrRHJhZyk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc29ydGVkSXRlbXMuYWRkKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuX2Ryb3BMaXN0UmVmLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgdGhpcy5fc3luY0l0ZW1zV2l0aFJlZigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgZHJvcCBsaXN0LiAqL1xuICByZW1vdmVJdGVtKGl0ZW06IENka0RyYWcpOiB2b2lkIHtcbiAgICB0aGlzLl91bnNvcnRlZEl0ZW1zLmRlbGV0ZShpdGVtKTtcblxuICAgIGlmICh0aGlzLl9kcm9wTGlzdFJlZi5pc0RyYWdnaW5nKCkpIHtcbiAgICAgIHRoaXMuX3N5bmNJdGVtc1dpdGhSZWYoKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcmVnaXN0ZXJlZCBpdGVtcyBpbiB0aGUgbGlzdCwgc29ydGVkIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET00uICovXG4gIGdldFNvcnRlZEl0ZW1zKCk6IENka0RyYWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fdW5zb3J0ZWRJdGVtcykuc29ydCgoYTogQ2RrRHJhZywgYjogQ2RrRHJhZykgPT4ge1xuICAgICAgY29uc3QgZG9jdW1lbnRQb3NpdGlvbiA9XG4gICAgICAgICAgYS5fZHJhZ1JlZi5nZXRWaXNpYmxlRWxlbWVudCgpLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIuX2RyYWdSZWYuZ2V0VmlzaWJsZUVsZW1lbnQoKSk7XG5cbiAgICAgIC8vIGBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbmAgcmV0dXJucyBhIGJpdG1hc2sgc28gd2UgaGF2ZSB0byB1c2UgYSBiaXR3aXNlIG9wZXJhdG9yLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvY29tcGFyZURvY3VtZW50UG9zaXRpb25cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICByZXR1cm4gZG9jdW1lbnRQb3NpdGlvbiAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc3QgaW5kZXggPSBDZGtEcm9wTGlzdC5fZHJvcExpc3RzLmluZGV4T2YodGhpcyk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgQ2RrRHJvcExpc3QuX2Ryb3BMaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ncm91cCkge1xuICAgICAgdGhpcy5fZ3JvdXAuX2l0ZW1zLmRlbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLl91bnNvcnRlZEl0ZW1zLmNsZWFyKCk7XG4gICAgdGhpcy5fZHJvcExpc3RSZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGRyYWdnaW5nIGFuIGl0ZW0uXG4gICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5fZHJvcExpc3RSZWYuc3RhcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wcyBhbiBpdGVtIGludG8gdGhpcyBjb250YWluZXIuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gYmVpbmcgZHJvcHBlZCBpbnRvIHRoZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSBjdXJyZW50SW5kZXggSW5kZXggYXQgd2hpY2ggdGhlIGl0ZW0gc2hvdWxkIGJlIGluc2VydGVkLlxuICAgKiBAcGFyYW0gcHJldmlvdXNDb250YWluZXIgQ29udGFpbmVyIGZyb20gd2hpY2ggdGhlIGl0ZW0gZ290IGRyYWdnZWQgaW4uXG4gICAqIEBwYXJhbSBpc1BvaW50ZXJPdmVyQ29udGFpbmVyIFdoZXRoZXIgdGhlIHVzZXIncyBwb2ludGVyIHdhcyBvdmVyIHRoZVxuICAgKiAgICBjb250YWluZXIgd2hlbiB0aGUgaXRlbSB3YXMgZHJvcHBlZC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBkcm9wKGl0ZW06IENka0RyYWcsIGN1cnJlbnRJbmRleDogbnVtYmVyLCBwcmV2aW91c0NvbnRhaW5lcjogQ2RrRHJvcExpc3QsXG4gICAgaXNQb2ludGVyT3ZlckNvbnRhaW5lcjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Ryb3BMaXN0UmVmLmRyb3AoaXRlbS5fZHJhZ1JlZiwgY3VycmVudEluZGV4LCBwcmV2aW91c0NvbnRhaW5lci5fZHJvcExpc3RSZWYsXG4gICAgICAgIGlzUG9pbnRlck92ZXJDb250YWluZXIsIHt4OiAwLCB5OiAwfSk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBtb3ZlZCBhbiBpdGVtIGludG8gdGhlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0aGF0IHdhcyBtb3ZlZCBpbnRvIHRoZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSBwb2ludGVyWCBQb3NpdGlvbiBvZiB0aGUgaXRlbSBhbG9uZyB0aGUgWCBheGlzLlxuICAgKiBAcGFyYW0gcG9pbnRlclkgUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFkgYXhpcy5cbiAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBlbnRlcihpdGVtOiBDZGtEcmFnLCBwb2ludGVyWDogbnVtYmVyLCBwb2ludGVyWTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZHJvcExpc3RSZWYuZW50ZXIoaXRlbS5fZHJhZ1JlZiwgcG9pbnRlclgsIHBvaW50ZXJZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgY29udGFpbmVyIGFmdGVyIGl0IHdhcyBkcmFnZ2VkIGludG8gYW5vdGhlciBjb250YWluZXIgYnkgdGhlIHVzZXIuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdGhhdCB3YXMgZHJhZ2dlZCBvdXQuXG4gICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgZXhpdChpdGVtOiBDZGtEcmFnKTogdm9pZCB7XG4gICAgdGhpcy5fZHJvcExpc3RSZWYuZXhpdChpdGVtLl9kcmFnUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWd1cmVzIG91dCB0aGUgaW5kZXggb2YgYW4gaXRlbSBpbiB0aGUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIHdob3NlIGluZGV4IHNob3VsZCBiZSBkZXRlcm1pbmVkLlxuICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGdldEl0ZW1JbmRleChpdGVtOiBDZGtEcmFnKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcExpc3RSZWYuZ2V0SXRlbUluZGV4KGl0ZW0uX2RyYWdSZWYpO1xuICB9XG5cbiAgLyoqIFN5bmNzIHRoZSBpbnB1dHMgb2YgdGhlIENka0Ryb3BMaXN0IHdpdGggdGhlIG9wdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgRHJvcExpc3RSZWYuICovXG4gIHByaXZhdGUgX3NldHVwSW5wdXRTeW5jU3Vic2NyaXB0aW9uKHJlZjogRHJvcExpc3RSZWY8Q2RrRHJvcExpc3Q+KSB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgdGhpcy5fZGlyLmNoYW5nZVxuICAgICAgICAucGlwZShzdGFydFdpdGgodGhpcy5fZGlyLnZhbHVlKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gcmVmLndpdGhEaXJlY3Rpb24odmFsdWUpKTtcbiAgICB9XG5cbiAgICByZWYuYmVmb3JlU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2libGluZ3MgPSBjb2VyY2VBcnJheSh0aGlzLmNvbm5lY3RlZFRvKS5tYXAoZHJvcCA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZHJvcCA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgQ2RrRHJvcExpc3QuX2Ryb3BMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PT0gZHJvcCkhIDogZHJvcDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fZ3JvdXApIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAuX2l0ZW1zLmZvckVhY2goZHJvcCA9PiB7XG4gICAgICAgICAgaWYgKHNpYmxpbmdzLmluZGV4T2YoZHJvcCkgPT09IC0xKSB7XG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKGRyb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSByZXNvbHZlIHRoZSBzY3JvbGxhYmxlIHBhcmVudHMgaGVyZSBzbyB0aGF0IHdlIGRlbGF5IHRoZSByZXNvbHV0aW9uXG4gICAgICAvLyBhcyBsb25nIGFzIHBvc3NpYmxlLCBlbnN1cmluZyB0aGF0IHRoZSBlbGVtZW50IGlzIGluIGl0cyBmaW5hbCBwbGFjZSBpbiB0aGUgRE9NLlxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMS4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIF9zY3JvbGxEaXNwYXRjaGVyIG9uY2UgaXQncyByZXF1aXJlZC5cbiAgICAgIGlmICghdGhpcy5fc2Nyb2xsYWJsZVBhcmVudHNSZXNvbHZlZCAmJiB0aGlzLl9zY3JvbGxEaXNwYXRjaGVyKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVQYXJlbnRzID0gdGhpcy5fc2Nyb2xsRGlzcGF0Y2hlclxuICAgICAgICAgIC5nZXRBbmNlc3RvclNjcm9sbENvbnRhaW5lcnModGhpcy5lbGVtZW50KVxuICAgICAgICAgIC5tYXAoc2Nyb2xsYWJsZSA9PiBzY3JvbGxhYmxlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZHJvcExpc3RSZWYud2l0aFNjcm9sbGFibGVQYXJlbnRzKHNjcm9sbGFibGVQYXJlbnRzKTtcblxuICAgICAgICAvLyBPbmx5IGRvIHRoaXMgb25jZSBzaW5jZSBpdCBpbnZvbHZlcyB0cmF2ZXJzaW5nIHRoZSBET00gYW5kIHRoZSBwYXJlbnRzXG4gICAgICAgIC8vIHNob3VsZG4ndCBiZSBhYmxlIHRvIGNoYW5nZSB3aXRob3V0IHRoZSBkcm9wIGxpc3QgYmVpbmcgZGVzdHJveWVkLlxuICAgICAgICB0aGlzLl9zY3JvbGxhYmxlUGFyZW50c1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmVmLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIHJlZi5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XG4gICAgICByZWYuc29ydGluZ0Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHRoaXMuc29ydGluZ0Rpc2FibGVkKTtcbiAgICAgIHJlZi5hdXRvU2Nyb2xsRGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodGhpcy5hdXRvU2Nyb2xsRGlzYWJsZWQpO1xuICAgICAgcmVmXG4gICAgICAgIC5jb25uZWN0ZWRUbyhzaWJsaW5ncy5maWx0ZXIoZHJvcCA9PiBkcm9wICYmIGRyb3AgIT09IHRoaXMpLm1hcChsaXN0ID0+IGxpc3QuX2Ryb3BMaXN0UmVmKSlcbiAgICAgICAgLndpdGhPcmllbnRhdGlvbih0aGlzLm9yaWVudGF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGV2ZW50cyBmcm9tIHRoZSB1bmRlcmx5aW5nIERyb3BMaXN0UmVmLiAqL1xuICBwcml2YXRlIF9oYW5kbGVFdmVudHMocmVmOiBEcm9wTGlzdFJlZjxDZGtEcm9wTGlzdD4pIHtcbiAgICByZWYuYmVmb3JlU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fc3luY0l0ZW1zV2l0aFJlZigpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICByZWYuZW50ZXJlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5lbnRlcmVkLmVtaXQoe1xuICAgICAgICBjb250YWluZXI6IHRoaXMsXG4gICAgICAgIGl0ZW06IGV2ZW50Lml0ZW0uZGF0YSxcbiAgICAgICAgY3VycmVudEluZGV4OiBldmVudC5jdXJyZW50SW5kZXhcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVmLmV4aXRlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5leGl0ZWQuZW1pdCh7XG4gICAgICAgIGNvbnRhaW5lcjogdGhpcyxcbiAgICAgICAgaXRlbTogZXZlbnQuaXRlbS5kYXRhXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgcmVmLnNvcnRlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zb3J0ZWQuZW1pdCh7XG4gICAgICAgIHByZXZpb3VzSW5kZXg6IGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgIGN1cnJlbnRJbmRleDogZXZlbnQuY3VycmVudEluZGV4LFxuICAgICAgICBjb250YWluZXI6IHRoaXMsXG4gICAgICAgIGl0ZW06IGV2ZW50Lml0ZW0uZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZWYuZHJvcHBlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5kcm9wcGVkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c0luZGV4OiBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICBjdXJyZW50SW5kZXg6IGV2ZW50LmN1cnJlbnRJbmRleCxcbiAgICAgICAgcHJldmlvdXNDb250YWluZXI6IGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgIGNvbnRhaW5lcjogZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGl0ZW06IGV2ZW50Lml0ZW0uZGF0YSxcbiAgICAgICAgaXNQb2ludGVyT3ZlckNvbnRhaW5lcjogZXZlbnQuaXNQb2ludGVyT3ZlckNvbnRhaW5lcixcbiAgICAgICAgZGlzdGFuY2U6IGV2ZW50LmRpc3RhbmNlXG4gICAgICB9KTtcblxuICAgICAgLy8gTWFyayBmb3IgY2hlY2sgc2luY2UgYWxsIG9mIHRoZXNlIGV2ZW50cyBydW4gb3V0c2lkZSBvZiBjaGFuZ2VcbiAgICAgIC8vIGRldGVjdGlvbiBhbmQgd2UncmUgbm90IGd1YXJhbnRlZWQgZm9yIHNvbWV0aGluZyBlbHNlIHRvIGhhdmUgdHJpZ2dlcmVkIGl0LlxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQXNzaWducyB0aGUgZGVmYXVsdCBpbnB1dCB2YWx1ZXMgYmFzZWQgb24gYSBwcm92aWRlZCBjb25maWcgb2JqZWN0LiAqL1xuICBwcml2YXRlIF9hc3NpZ25EZWZhdWx0cyhjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9ja0F4aXMsIGRyYWdnaW5nRGlzYWJsZWQsIHNvcnRpbmdEaXNhYmxlZCwgbGlzdEF1dG9TY3JvbGxEaXNhYmxlZCwgbGlzdE9yaWVudGF0aW9uXG4gICAgfSA9IGNvbmZpZztcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBkcmFnZ2luZ0Rpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IGRyYWdnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5zb3J0aW5nRGlzYWJsZWQgPSBzb3J0aW5nRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogc29ydGluZ0Rpc2FibGVkO1xuICAgIHRoaXMuYXV0b1Njcm9sbERpc2FibGVkID0gbGlzdEF1dG9TY3JvbGxEaXNhYmxlZCA9PSBudWxsID8gZmFsc2UgOiBsaXN0QXV0b1Njcm9sbERpc2FibGVkO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBsaXN0T3JpZW50YXRpb24gfHwgJ3ZlcnRpY2FsJztcblxuICAgIGlmIChsb2NrQXhpcykge1xuICAgICAgdGhpcy5sb2NrQXhpcyA9IGxvY2tBeGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTeW5jcyB1cCB0aGUgcmVnaXN0ZXJlZCBkcmFnIGl0ZW1zIHdpdGggdW5kZXJseWluZyBkcm9wIGxpc3QgcmVmLiAqL1xuICBwcml2YXRlIF9zeW5jSXRlbXNXaXRoUmVmKCkge1xuICAgIHRoaXMuX2Ryb3BMaXN0UmVmLndpdGhJdGVtcyh0aGlzLmdldFNvcnRlZEl0ZW1zKCkubWFwKGl0ZW0gPT4gaXRlbS5fZHJhZ1JlZikpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zb3J0aW5nRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9TY3JvbGxEaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19