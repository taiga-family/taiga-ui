/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { assertDefined } from '../util/assert';
import { checkNoChangesInRootView, checkNoChangesInternal, detectChangesInRootView, detectChangesInternal, markViewDirty, storeCleanupFn } from './instructions/shared';
import { CONTAINER_HEADER_OFFSET } from './interfaces/container';
import { isLContainer } from './interfaces/type_checks';
import { CONTEXT, DECLARATION_COMPONENT_VIEW, FLAGS, HOST, T_HOST, TVIEW } from './interfaces/view';
import { assertNodeOfPossibleTypes } from './node_assert';
import { destroyLView, renderDetachView } from './node_manipulation';
import { getLViewParent } from './util/view_traversal_utils';
import { unwrapRNode } from './util/view_utils';
var ViewRef = /** @class */ (function () {
    function ViewRef(
    /**
     * This represents `LView` associated with the component when ViewRef is a ChangeDetectorRef.
     *
     * When ViewRef is created for a dynamic component, this also represents the `LView` for the
     * component.
     *
     * For a "regular" ViewRef created for an embedded view, this is the `LView` for the embedded
     * view.
     *
     * @internal
     */
    _lView, 
    /**
     * This represents the `LView` associated with the point where `ChangeDetectorRef` was
     * requested.
     *
     * This may be different from `_lView` if the `_cdRefInjectingView` is an embedded view.
     */
    _cdRefInjectingView) {
        this._lView = _lView;
        this._cdRefInjectingView = _cdRefInjectingView;
        this._appRef = null;
        this._viewContainerRef = null;
    }
    Object.defineProperty(ViewRef.prototype, "rootNodes", {
        get: function () {
            var lView = this._lView;
            if (lView[HOST] == null) {
                var hostTView = lView[T_HOST];
                return collectNativeNodes(lView[TVIEW], lView, hostTView.child, []);
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef.prototype, "context", {
        get: function () {
            return this._lView[CONTEXT];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef.prototype, "destroyed", {
        get: function () {
            return (this._lView[FLAGS] & 256 /* Destroyed */) === 256 /* Destroyed */;
        },
        enumerable: true,
        configurable: true
    });
    ViewRef.prototype.destroy = function () {
        if (this._appRef) {
            this._appRef.detachView(this);
        }
        else if (this._viewContainerRef) {
            var index = this._viewContainerRef.indexOf(this);
            if (index > -1) {
                this._viewContainerRef.detach(index);
            }
            this._viewContainerRef = null;
        }
        destroyLView(this._lView[TVIEW], this._lView);
    };
    ViewRef.prototype.onDestroy = function (callback) {
        storeCleanupFn(this._lView[TVIEW], this._lView, callback);
    };
    /**
     * Marks a view and all of its ancestors dirty.
     *
     * It also triggers change detection by calling `scheduleTick` internally, which coalesces
     * multiple `markForCheck` calls to into one change detection run.
     *
     * This can be used to ensure an {@link ChangeDetectionStrategy#OnPush OnPush} component is
     * checked when it needs to be re-rendered but the two normal triggers haven't marked it
     * dirty (i.e. inputs haven't changed and events haven't fired in the view).
     *
     * <!-- TODO: Add a link to a chapter on OnPush components -->
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * @Component({
     *   selector: 'my-app',
     *   template: `Number of ticks: {{numberOfTicks}}`
     *   changeDetection: ChangeDetectionStrategy.OnPush,
     * })
     * class AppComponent {
     *   numberOfTicks = 0;
     *
     *   constructor(private ref: ChangeDetectorRef) {
     *     setInterval(() => {
     *       this.numberOfTicks++;
     *       // the following is required, otherwise the view will not be updated
     *       this.ref.markForCheck();
     *     }, 1000);
     *   }
     * }
     * ```
     */
    ViewRef.prototype.markForCheck = function () {
        markViewDirty(this._cdRefInjectingView || this._lView);
    };
    /**
     * Detaches the view from the change detection tree.
     *
     * Detached views will not be checked during change detection runs until they are
     * re-attached, even if they are dirty. `detach` can be used in combination with
     * {@link ChangeDetectorRef#detectChanges detectChanges} to implement local change
     * detection checks.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
     *
     * @usageNotes
     * ### Example
     *
     * The following example defines a component with a large list of readonly data.
     * Imagine the data changes constantly, many times per second. For performance reasons,
     * we want to check and update the list every five seconds. We can do that by detaching
     * the component's change detector and doing a local check every five seconds.
     *
     * ```typescript
     * class DataProvider {
     *   // in a real application the returned data will be different every time
     *   get data() {
     *     return [1,2,3,4,5];
     *   }
     * }
     *
     * @Component({
     *   selector: 'giant-list',
     *   template: `
     *     <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
     *   `,
     * })
     * class GiantList {
     *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
     *     ref.detach();
     *     setInterval(() => {
     *       this.ref.detectChanges();
     *     }, 5000);
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   providers: [DataProvider],
     *   template: `
     *     <giant-list><giant-list>
     *   `,
     * })
     * class App {
     * }
     * ```
     */
    ViewRef.prototype.detach = function () {
        this._lView[FLAGS] &= ~128 /* Attached */;
    };
    /**
     * Re-attaches a view to the change detection tree.
     *
     * This can be used to re-attach views that were previously detached from the tree
     * using {@link ChangeDetectorRef#detach detach}. Views are attached to the tree by default.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     *
     * @usageNotes
     * ### Example
     *
     * The following example creates a component displaying `live` data. The component will detach
     * its change detector from the main change detector tree when the component's live property
     * is set to false.
     *
     * ```typescript
     * class DataProvider {
     *   data = 1;
     *
     *   constructor() {
     *     setInterval(() => {
     *       this.data = this.data * 2;
     *     }, 500);
     *   }
     * }
     *
     * @Component({
     *   selector: 'live-data',
     *   inputs: ['live'],
     *   template: 'Data: {{dataProvider.data}}'
     * })
     * class LiveData {
     *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}
     *
     *   set live(value) {
     *     if (value) {
     *       this.ref.reattach();
     *     } else {
     *       this.ref.detach();
     *     }
     *   }
     * }
     *
     * @Component({
     *   selector: 'my-app',
     *   providers: [DataProvider],
     *   template: `
     *     Live Update: <input type="checkbox" [(ngModel)]="live">
     *     <live-data [live]="live"><live-data>
     *   `,
     * })
     * class AppComponent {
     *   live = true;
     * }
     * ```
     */
    ViewRef.prototype.reattach = function () {
        this._lView[FLAGS] |= 128 /* Attached */;
    };
    /**
     * Checks the view and its children.
     *
     * This can also be used in combination with {@link ChangeDetectorRef#detach detach} to implement
     * local change detection checks.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
     *
     * @usageNotes
     * ### Example
     *
     * The following example defines a component with a large list of readonly data.
     * Imagine, the data changes constantly, many times per second. For performance reasons,
     * we want to check and update the list every five seconds.
     *
     * We can do that by detaching the component's change detector and doing a local change detection
     * check every five seconds.
     *
     * See {@link ChangeDetectorRef#detach detach} for more information.
     */
    ViewRef.prototype.detectChanges = function () {
        detectChangesInternal(this._lView[TVIEW], this._lView, this.context);
    };
    /**
     * Checks the change detector and its children, and throws if any changes are detected.
     *
     * This is used in development mode to verify that running change detection doesn't
     * introduce other changes.
     */
    ViewRef.prototype.checkNoChanges = function () {
        checkNoChangesInternal(this._lView[TVIEW], this._lView, this.context);
    };
    ViewRef.prototype.attachToViewContainerRef = function (vcRef) {
        if (this._appRef) {
            throw new Error('This view is already attached directly to the ApplicationRef!');
        }
        this._viewContainerRef = vcRef;
    };
    ViewRef.prototype.detachFromAppRef = function () {
        this._appRef = null;
        renderDetachView(this._lView[TVIEW], this._lView);
    };
    ViewRef.prototype.attachToAppRef = function (appRef) {
        if (this._viewContainerRef) {
            throw new Error('This view is already attached to a ViewContainer!');
        }
        this._appRef = appRef;
    };
    return ViewRef;
}());
export { ViewRef };
/** @internal */
var RootViewRef = /** @class */ (function (_super) {
    __extends(RootViewRef, _super);
    function RootViewRef(_view) {
        var _this = _super.call(this, _view) || this;
        _this._view = _view;
        return _this;
    }
    RootViewRef.prototype.detectChanges = function () {
        detectChangesInRootView(this._view);
    };
    RootViewRef.prototype.checkNoChanges = function () {
        checkNoChangesInRootView(this._view);
    };
    Object.defineProperty(RootViewRef.prototype, "context", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return RootViewRef;
}(ViewRef));
export { RootViewRef };
function collectNativeNodes(tView, lView, tNode, result, isProjection) {
    if (isProjection === void 0) { isProjection = false; }
    while (tNode !== null) {
        ngDevMode &&
            assertNodeOfPossibleTypes(tNode, 3 /* Element */, 0 /* Container */, 1 /* Projection */, 4 /* ElementContainer */, 5 /* IcuContainer */);
        var lNode = lView[tNode.index];
        if (lNode !== null) {
            result.push(unwrapRNode(lNode));
        }
        // A given lNode can represent either a native node or a LContainer (when it is a host of a
        // ViewContainerRef). When we find a LContainer we need to descend into it to collect root nodes
        // from the views in this container.
        if (isLContainer(lNode)) {
            for (var i = CONTAINER_HEADER_OFFSET; i < lNode.length; i++) {
                var lViewInAContainer = lNode[i];
                var lViewFirstChildTNode = lViewInAContainer[TVIEW].firstChild;
                if (lViewFirstChildTNode !== null) {
                    collectNativeNodes(lViewInAContainer[TVIEW], lViewInAContainer, lViewFirstChildTNode, result);
                }
            }
        }
        var tNodeType = tNode.type;
        if (tNodeType === 4 /* ElementContainer */ || tNodeType === 5 /* IcuContainer */) {
            collectNativeNodes(tView, lView, tNode.child, result);
        }
        else if (tNodeType === 1 /* Projection */) {
            var componentView = lView[DECLARATION_COMPONENT_VIEW];
            var componentHost = componentView[T_HOST];
            var slotIdx = tNode.projection;
            ngDevMode &&
                assertDefined(componentHost.projection, 'Components with projection nodes (<ng-content>) must have projection slots defined.');
            var nodesInSlot = componentHost.projection[slotIdx];
            if (Array.isArray(nodesInSlot)) {
                result.push.apply(result, __spread(nodesInSlot));
            }
            else {
                var parentView = getLViewParent(componentView);
                ngDevMode &&
                    assertDefined(parentView, 'Component views should always have a parent view (component\'s host view)');
                collectNativeNodes(parentView[TVIEW], parentView, nodesInSlot, result, true);
            }
        }
        tNode = isProjection ? tNode.projectionNext : tNode.next;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3ZpZXdfcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFNSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0SyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUUvRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFxQixNQUFNLEVBQUUsS0FBSyxFQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDNUgsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBUzlDO0lBY0U7SUFDSTs7Ozs7Ozs7OztPQVVHO0lBQ0ksTUFBYTtJQUVwQjs7Ozs7T0FLRztJQUNLLG1CQUEyQjtRQVI1QixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBUVosd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFRO1FBaEMvQixZQUFPLEdBQXdCLElBQUksQ0FBQztRQUNwQyxzQkFBaUIsR0FBcUMsSUFBSSxDQUFDO0lBK0J6QixDQUFDO0lBN0IzQyxzQkFBSSw4QkFBUzthQUFiO1lB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QUssQ0FBQyxVQUFvQixDQUFDO1lBQzNDLFNBQVM7Z0JBQ0wsYUFBYSxDQUNULGFBQWEsQ0FBQyxVQUFVLEVBQ3hCLHFGQUFxRixDQUFDLENBQUM7WUFFL0YsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUFTLFdBQVcsR0FBRTthQUM3QjtpQkFBTTtnQkFDTCxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ2xELFNBQVM7b0JBQ0wsYUFBYSxDQUNULFVBQVUsRUFDViwyRUFBMkUsQ0FBQyxDQUFDO2dCQUNyRixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDOUU7U0FDRjtRQUNELEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7S0FDMUQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FwcGxpY2F0aW9uUmVmfSBmcm9tICcuLi9hcHBsaWNhdGlvbl9yZWYnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiBhcyB2aWV3RW5naW5lX0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmIGFzIHZpZXdFbmdpbmVfVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnLi4vbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZic7XG5pbXBvcnQge0VtYmVkZGVkVmlld1JlZiBhcyB2aWV3RW5naW5lX0VtYmVkZGVkVmlld1JlZiwgSW50ZXJuYWxWaWV3UmVmIGFzIHZpZXdFbmdpbmVfSW50ZXJuYWxWaWV3UmVmfSBmcm9tICcuLi9saW5rZXIvdmlld19yZWYnO1xuaW1wb3J0IHthc3NlcnREZWZpbmVkfSBmcm9tICcuLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2NoZWNrTm9DaGFuZ2VzSW5Sb290VmlldywgY2hlY2tOb0NoYW5nZXNJbnRlcm5hbCwgZGV0ZWN0Q2hhbmdlc0luUm9vdFZpZXcsIGRldGVjdENoYW5nZXNJbnRlcm5hbCwgbWFya1ZpZXdEaXJ0eSwgc3RvcmVDbGVhbnVwRm59IGZyb20gJy4vaW5zdHJ1Y3Rpb25zL3NoYXJlZCc7XG5pbXBvcnQge0NPTlRBSU5FUl9IRUFERVJfT0ZGU0VUfSBmcm9tICcuL2ludGVyZmFjZXMvY29udGFpbmVyJztcbmltcG9ydCB7VEVsZW1lbnROb2RlLCBUTm9kZSwgVE5vZGVUeXBlLCBUVmlld05vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7aXNMQ29udGFpbmVyfSBmcm9tICcuL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuaW1wb3J0IHtDT05URVhULCBERUNMQVJBVElPTl9DT01QT05FTlRfVklFVywgRkxBR1MsIEhPU1QsIExWaWV3LCBMVmlld0ZsYWdzLCBUX0hPU1QsIFRWSUVXLCBUVmlld30gZnJvbSAnLi9pbnRlcmZhY2VzL3ZpZXcnO1xuaW1wb3J0IHthc3NlcnROb2RlT2ZQb3NzaWJsZVR5cGVzfSBmcm9tICcuL25vZGVfYXNzZXJ0JztcbmltcG9ydCB7ZGVzdHJveUxWaWV3LCByZW5kZXJEZXRhY2hWaWV3fSBmcm9tICcuL25vZGVfbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7Z2V0TFZpZXdQYXJlbnR9IGZyb20gJy4vdXRpbC92aWV3X3RyYXZlcnNhbF91dGlscyc7XG5pbXBvcnQge3Vud3JhcFJOb2RlfSBmcm9tICcuL3V0aWwvdmlld191dGlscyc7XG5cblxuXG4vLyBOZWVkZWQgZHVlIHRvIHRzaWNrbGUgZG93bmxldmVsaW5nIHdoZXJlIG11bHRpcGxlIGBpbXBsZW1lbnRzYCB3aXRoIGNsYXNzZXMgY3JlYXRlc1xuLy8gbXVsdGlwbGUgQGV4dGVuZHMgaW4gQ2xvc3VyZSBhbm5vdGF0aW9ucywgd2hpY2ggaXMgaWxsZWdhbC4gVGhpcyB3b3JrYXJvdW5kIGZpeGVzXG4vLyB0aGUgbXVsdGlwbGUgQGV4dGVuZHMgYnkgbWFraW5nIHRoZSBhbm5vdGF0aW9uIEBpbXBsZW1lbnRzIGluc3RlYWRcbmV4cG9ydCBpbnRlcmZhY2Ugdmlld0VuZ2luZV9DaGFuZ2VEZXRlY3RvclJlZl9pbnRlcmZhY2UgZXh0ZW5kcyB2aWV3RW5naW5lX0NoYW5nZURldGVjdG9yUmVmIHt9XG5cbmV4cG9ydCBjbGFzcyBWaWV3UmVmPFQ+IGltcGxlbWVudHMgdmlld0VuZ2luZV9FbWJlZGRlZFZpZXdSZWY8VD4sIHZpZXdFbmdpbmVfSW50ZXJuYWxWaWV3UmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3RW5naW5lX0NoYW5nZURldGVjdG9yUmVmX2ludGVyZmFjZSB7XG4gIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWZ8bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IHZpZXdFbmdpbmVfVmlld0NvbnRhaW5lclJlZnxudWxsID0gbnVsbDtcblxuICBnZXQgcm9vdE5vZGVzKCk6IGFueVtdIHtcbiAgICBjb25zdCBsVmlldyA9IHRoaXMuX2xWaWV3O1xuICAgIGlmIChsVmlld1tIT1NUXSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBob3N0VFZpZXcgPSBsVmlld1tUX0hPU1RdIGFzIFRWaWV3Tm9kZTtcbiAgICAgIHJldHVybiBjb2xsZWN0TmF0aXZlTm9kZXMobFZpZXdbVFZJRVddLCBsVmlldywgaG9zdFRWaWV3LmNoaWxkLCBbXSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIHJlcHJlc2VudHMgYExWaWV3YCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbXBvbmVudCB3aGVuIFZpZXdSZWYgaXMgYSBDaGFuZ2VEZXRlY3RvclJlZi5cbiAgICAgICAqXG4gICAgICAgKiBXaGVuIFZpZXdSZWYgaXMgY3JlYXRlZCBmb3IgYSBkeW5hbWljIGNvbXBvbmVudCwgdGhpcyBhbHNvIHJlcHJlc2VudHMgdGhlIGBMVmlld2AgZm9yIHRoZVxuICAgICAgICogY29tcG9uZW50LlxuICAgICAgICpcbiAgICAgICAqIEZvciBhIFwicmVndWxhclwiIFZpZXdSZWYgY3JlYXRlZCBmb3IgYW4gZW1iZWRkZWQgdmlldywgdGhpcyBpcyB0aGUgYExWaWV3YCBmb3IgdGhlIGVtYmVkZGVkXG4gICAgICAgKiB2aWV3LlxuICAgICAgICpcbiAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICovXG4gICAgICBwdWJsaWMgX2xWaWV3OiBMVmlldyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIHJlcHJlc2VudHMgdGhlIGBMVmlld2AgYXNzb2NpYXRlZCB3aXRoIHRoZSBwb2ludCB3aGVyZSBgQ2hhbmdlRGV0ZWN0b3JSZWZgIHdhc1xuICAgICAgICogcmVxdWVzdGVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgbWF5IGJlIGRpZmZlcmVudCBmcm9tIGBfbFZpZXdgIGlmIHRoZSBgX2NkUmVmSW5qZWN0aW5nVmlld2AgaXMgYW4gZW1iZWRkZWQgdmlldy5cbiAgICAgICAqL1xuICAgICAgcHJpdmF0ZSBfY2RSZWZJbmplY3RpbmdWaWV3PzogTFZpZXcpIHt9XG5cbiAgZ2V0IGNvbnRleHQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX2xWaWV3W0NPTlRFWFRdIGFzIFQ7XG4gIH1cblxuICBnZXQgZGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fbFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5EZXN0cm95ZWQpID09PSBMVmlld0ZsYWdzLkRlc3Ryb3llZDtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FwcFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2goaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB9XG4gICAgZGVzdHJveUxWaWV3KHRoaXMuX2xWaWV3W1RWSUVXXSwgdGhpcy5fbFZpZXcpO1xuICB9XG5cbiAgb25EZXN0cm95KGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHN0b3JlQ2xlYW51cEZuKHRoaXMuX2xWaWV3W1RWSUVXXSwgdGhpcy5fbFZpZXcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyBhIHZpZXcgYW5kIGFsbCBvZiBpdHMgYW5jZXN0b3JzIGRpcnR5LlxuICAgKlxuICAgKiBJdCBhbHNvIHRyaWdnZXJzIGNoYW5nZSBkZXRlY3Rpb24gYnkgY2FsbGluZyBgc2NoZWR1bGVUaWNrYCBpbnRlcm5hbGx5LCB3aGljaCBjb2FsZXNjZXNcbiAgICogbXVsdGlwbGUgYG1hcmtGb3JDaGVja2AgY2FsbHMgdG8gaW50byBvbmUgY2hhbmdlIGRldGVjdGlvbiBydW4uXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGFuIHtAbGluayBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSNPblB1c2ggT25QdXNofSBjb21wb25lbnQgaXNcbiAgICogY2hlY2tlZCB3aGVuIGl0IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGJ1dCB0aGUgdHdvIG5vcm1hbCB0cmlnZ2VycyBoYXZlbid0IG1hcmtlZCBpdFxuICAgKiBkaXJ0eSAoaS5lLiBpbnB1dHMgaGF2ZW4ndCBjaGFuZ2VkIGFuZCBldmVudHMgaGF2ZW4ndCBmaXJlZCBpbiB0aGUgdmlldykuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gT25QdXNoIGNvbXBvbmVudHMgLS0+XG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgKiAgIHRlbXBsYXRlOiBgTnVtYmVyIG9mIHRpY2tzOiB7e251bWJlck9mVGlja3N9fWBcbiAgICogICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICogfSlcbiAgICogY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICogICBudW1iZXJPZlRpY2tzID0gMDtcbiAgICpcbiAgICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICogICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICogICAgICAgdGhpcy5udW1iZXJPZlRpY2tzKys7XG4gICAqICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaXMgcmVxdWlyZWQsIG90aGVyd2lzZSB0aGUgdmlldyB3aWxsIG5vdCBiZSB1cGRhdGVkXG4gICAqICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgKiAgICAgfSwgMTAwMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIG1hcmtWaWV3RGlydHkodGhpcy5fY2RSZWZJbmplY3RpbmdWaWV3IHx8IHRoaXMuX2xWaWV3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyB0aGUgdmlldyBmcm9tIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRyZWUuXG4gICAqXG4gICAqIERldGFjaGVkIHZpZXdzIHdpbGwgbm90IGJlIGNoZWNrZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24gcnVucyB1bnRpbCB0aGV5IGFyZVxuICAgKiByZS1hdHRhY2hlZCwgZXZlbiBpZiB0aGV5IGFyZSBkaXJ0eS4gYGRldGFjaGAgY2FuIGJlIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aFxuICAgKiB7QGxpbmsgQ2hhbmdlRGV0ZWN0b3JSZWYjZGV0ZWN0Q2hhbmdlcyBkZXRlY3RDaGFuZ2VzfSB0byBpbXBsZW1lbnQgbG9jYWwgY2hhbmdlXG4gICAqIGRldGVjdGlvbiBjaGVja3MuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gZGV0YWNoL3JlYXR0YWNoL2xvY2FsIGRpZ2VzdCAtLT5cbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaXZlIGRlbW8gb25jZSByZWYuZGV0ZWN0Q2hhbmdlcyBpcyBtZXJnZWQgaW50byBtYXN0ZXIgLS0+XG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBkZWZpbmVzIGEgY29tcG9uZW50IHdpdGggYSBsYXJnZSBsaXN0IG9mIHJlYWRvbmx5IGRhdGEuXG4gICAqIEltYWdpbmUgdGhlIGRhdGEgY2hhbmdlcyBjb25zdGFudGx5LCBtYW55IHRpbWVzIHBlciBzZWNvbmQuIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLFxuICAgKiB3ZSB3YW50IHRvIGNoZWNrIGFuZCB1cGRhdGUgdGhlIGxpc3QgZXZlcnkgZml2ZSBzZWNvbmRzLiBXZSBjYW4gZG8gdGhhdCBieSBkZXRhY2hpbmdcbiAgICogdGhlIGNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3RvciBhbmQgZG9pbmcgYSBsb2NhbCBjaGVjayBldmVyeSBmaXZlIHNlY29uZHMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgICogICAvLyBpbiBhIHJlYWwgYXBwbGljYXRpb24gdGhlIHJldHVybmVkIGRhdGEgd2lsbCBiZSBkaWZmZXJlbnQgZXZlcnkgdGltZVxuICAgKiAgIGdldCBkYXRhKCkge1xuICAgKiAgICAgcmV0dXJuIFsxLDIsMyw0LDVdO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ2dpYW50LWxpc3QnLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICA8bGkgKm5nRm9yPVwibGV0IGQgb2YgZGF0YVByb3ZpZGVyLmRhdGFcIj5EYXRhIHt7ZH19PC9saT5cbiAgICogICBgLFxuICAgKiB9KVxuICAgKiBjbGFzcyBHaWFudExpc3Qge1xuICAgKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcikge1xuICAgKiAgICAgcmVmLmRldGFjaCgpO1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAqICAgICB9LCA1MDAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIHByb3ZpZGVyczogW0RhdGFQcm92aWRlcl0sXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIDxnaWFudC1saXN0PjxnaWFudC1saXN0PlxuICAgKiAgIGAsXG4gICAqIH0pXG4gICAqIGNsYXNzIEFwcCB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBkZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fbFZpZXdbRkxBR1NdICY9IH5MVmlld0ZsYWdzLkF0dGFjaGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlLWF0dGFjaGVzIGEgdmlldyB0byB0aGUgY2hhbmdlIGRldGVjdGlvbiB0cmVlLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLWF0dGFjaCB2aWV3cyB0aGF0IHdlcmUgcHJldmlvdXNseSBkZXRhY2hlZCBmcm9tIHRoZSB0cmVlXG4gICAqIHVzaW5nIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZiNkZXRhY2ggZGV0YWNofS4gVmlld3MgYXJlIGF0dGFjaGVkIHRvIHRoZSB0cmVlIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gZGV0YWNoL3JlYXR0YWNoL2xvY2FsIGRpZ2VzdCAtLT5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNyZWF0ZXMgYSBjb21wb25lbnQgZGlzcGxheWluZyBgbGl2ZWAgZGF0YS4gVGhlIGNvbXBvbmVudCB3aWxsIGRldGFjaFxuICAgKiBpdHMgY2hhbmdlIGRldGVjdG9yIGZyb20gdGhlIG1haW4gY2hhbmdlIGRldGVjdG9yIHRyZWUgd2hlbiB0aGUgY29tcG9uZW50J3MgbGl2ZSBwcm9wZXJ0eVxuICAgKiBpcyBzZXQgdG8gZmFsc2UuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgICogICBkYXRhID0gMTtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICogICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhICogMjtcbiAgICogICAgIH0sIDUwMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnbGl2ZS1kYXRhJyxcbiAgICogICBpbnB1dHM6IFsnbGl2ZSddLFxuICAgKiAgIHRlbXBsYXRlOiAnRGF0YToge3tkYXRhUHJvdmlkZXIuZGF0YX19J1xuICAgKiB9KVxuICAgKiBjbGFzcyBMaXZlRGF0YSB7XG4gICAqICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKSB7fVxuICAgKlxuICAgKiAgIHNldCBsaXZlKHZhbHVlKSB7XG4gICAqICAgICBpZiAodmFsdWUpIHtcbiAgICogICAgICAgdGhpcy5yZWYucmVhdHRhY2goKTtcbiAgICogICAgIH0gZWxzZSB7XG4gICAqICAgICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgKiAgICAgfVxuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAqICAgcHJvdmlkZXJzOiBbRGF0YVByb3ZpZGVyXSxcbiAgICogICB0ZW1wbGF0ZTogYFxuICAgKiAgICAgTGl2ZSBVcGRhdGU6IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImxpdmVcIj5cbiAgICogICAgIDxsaXZlLWRhdGEgW2xpdmVdPVwibGl2ZVwiPjxsaXZlLWRhdGE+XG4gICAqICAgYCxcbiAgICogfSlcbiAgICogY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICogICBsaXZlID0gdHJ1ZTtcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHJlYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2xWaWV3W0ZMQUdTXSB8PSBMVmlld0ZsYWdzLkF0dGFjaGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgdmlldyBhbmQgaXRzIGNoaWxkcmVuLlxuICAgKlxuICAgKiBUaGlzIGNhbiBhbHNvIGJlIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCB7QGxpbmsgQ2hhbmdlRGV0ZWN0b3JSZWYjZGV0YWNoIGRldGFjaH0gdG8gaW1wbGVtZW50XG4gICAqIGxvY2FsIGNoYW5nZSBkZXRlY3Rpb24gY2hlY2tzLlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gYSBjaGFwdGVyIG9uIGRldGFjaC9yZWF0dGFjaC9sb2NhbCBkaWdlc3QgLS0+XG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGl2ZSBkZW1vIG9uY2UgcmVmLmRldGVjdENoYW5nZXMgaXMgbWVyZ2VkIGludG8gbWFzdGVyIC0tPlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIGNvbXBvbmVudCB3aXRoIGEgbGFyZ2UgbGlzdCBvZiByZWFkb25seSBkYXRhLlxuICAgKiBJbWFnaW5lLCB0aGUgZGF0YSBjaGFuZ2VzIGNvbnN0YW50bHksIG1hbnkgdGltZXMgcGVyIHNlY29uZC4gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsXG4gICAqIHdlIHdhbnQgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgbGlzdCBldmVyeSBmaXZlIHNlY29uZHMuXG4gICAqXG4gICAqIFdlIGNhbiBkbyB0aGF0IGJ5IGRldGFjaGluZyB0aGUgY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdG9yIGFuZCBkb2luZyBhIGxvY2FsIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogY2hlY2sgZXZlcnkgZml2ZSBzZWNvbmRzLlxuICAgKlxuICAgKiBTZWUge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaCBkZXRhY2h9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICBkZXRlY3RDaGFuZ2VzSW50ZXJuYWwodGhpcy5fbFZpZXdbVFZJRVddLCB0aGlzLl9sVmlldywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIGNoYW5nZSBkZXRlY3RvciBhbmQgaXRzIGNoaWxkcmVuLCBhbmQgdGhyb3dzIGlmIGFueSBjaGFuZ2VzIGFyZSBkZXRlY3RlZC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIGluIGRldmVsb3BtZW50IG1vZGUgdG8gdmVyaWZ5IHRoYXQgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIGRvZXNuJ3RcbiAgICogaW50cm9kdWNlIG90aGVyIGNoYW5nZXMuXG4gICAqL1xuICBjaGVja05vQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjaGVja05vQ2hhbmdlc0ludGVybmFsKHRoaXMuX2xWaWV3W1RWSUVXXSwgdGhpcy5fbFZpZXcsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBhdHRhY2hUb1ZpZXdDb250YWluZXJSZWYodmNSZWY6IHZpZXdFbmdpbmVfVmlld0NvbnRhaW5lclJlZikge1xuICAgIGlmICh0aGlzLl9hcHBSZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyB2aWV3IGlzIGFscmVhZHkgYXR0YWNoZWQgZGlyZWN0bHkgdG8gdGhlIEFwcGxpY2F0aW9uUmVmIScpO1xuICAgIH1cbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gdmNSZWY7XG4gIH1cblxuICBkZXRhY2hGcm9tQXBwUmVmKCkge1xuICAgIHRoaXMuX2FwcFJlZiA9IG51bGw7XG4gICAgcmVuZGVyRGV0YWNoVmlldyh0aGlzLl9sVmlld1tUVklFV10sIHRoaXMuX2xWaWV3KTtcbiAgfVxuXG4gIGF0dGFjaFRvQXBwUmVmKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHZpZXcgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBhIFZpZXdDb250YWluZXIhJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwcFJlZiA9IGFwcFJlZjtcbiAgfVxufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgUm9vdFZpZXdSZWY8VD4gZXh0ZW5kcyBWaWV3UmVmPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3OiBMVmlldykge1xuICAgIHN1cGVyKF92aWV3KTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgZGV0ZWN0Q2hhbmdlc0luUm9vdFZpZXcodGhpcy5fdmlldyk7XG4gIH1cblxuICBjaGVja05vQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjaGVja05vQ2hhbmdlc0luUm9vdFZpZXcodGhpcy5fdmlldyk7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBUIHtcbiAgICByZXR1cm4gbnVsbCE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdE5hdGl2ZU5vZGVzKFxuICAgIHRWaWV3OiBUVmlldywgbFZpZXc6IExWaWV3LCB0Tm9kZTogVE5vZGV8bnVsbCwgcmVzdWx0OiBhbnlbXSxcbiAgICBpc1Byb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgd2hpbGUgKHROb2RlICE9PSBudWxsKSB7XG4gICAgbmdEZXZNb2RlICYmXG4gICAgICAgIGFzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXMoXG4gICAgICAgICAgICB0Tm9kZSwgVE5vZGVUeXBlLkVsZW1lbnQsIFROb2RlVHlwZS5Db250YWluZXIsIFROb2RlVHlwZS5Qcm9qZWN0aW9uLFxuICAgICAgICAgICAgVE5vZGVUeXBlLkVsZW1lbnRDb250YWluZXIsIFROb2RlVHlwZS5JY3VDb250YWluZXIpO1xuXG4gICAgY29uc3QgbE5vZGUgPSBsVmlld1t0Tm9kZS5pbmRleF07XG4gICAgaWYgKGxOb2RlICE9PSBudWxsKSB7XG4gICAgICByZXN1bHQucHVzaCh1bndyYXBSTm9kZShsTm9kZSkpO1xuICAgIH1cblxuICAgIC8vIEEgZ2l2ZW4gbE5vZGUgY2FuIHJlcHJlc2VudCBlaXRoZXIgYSBuYXRpdmUgbm9kZSBvciBhIExDb250YWluZXIgKHdoZW4gaXQgaXMgYSBob3N0IG9mIGFcbiAgICAvLyBWaWV3Q29udGFpbmVyUmVmKS4gV2hlbiB3ZSBmaW5kIGEgTENvbnRhaW5lciB3ZSBuZWVkIHRvIGRlc2NlbmQgaW50byBpdCB0byBjb2xsZWN0IHJvb3Qgbm9kZXNcbiAgICAvLyBmcm9tIHRoZSB2aWV3cyBpbiB0aGlzIGNvbnRhaW5lci5cbiAgICBpZiAoaXNMQ29udGFpbmVyKGxOb2RlKSkge1xuICAgICAgZm9yIChsZXQgaSA9IENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUOyBpIDwgbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbFZpZXdJbkFDb250YWluZXIgPSBsTm9kZVtpXTtcbiAgICAgICAgY29uc3QgbFZpZXdGaXJzdENoaWxkVE5vZGUgPSBsVmlld0luQUNvbnRhaW5lcltUVklFV10uZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGxWaWV3Rmlyc3RDaGlsZFROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29sbGVjdE5hdGl2ZU5vZGVzKFxuICAgICAgICAgICAgICBsVmlld0luQUNvbnRhaW5lcltUVklFV10sIGxWaWV3SW5BQ29udGFpbmVyLCBsVmlld0ZpcnN0Q2hpbGRUTm9kZSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHROb2RlVHlwZSA9IHROb2RlLnR5cGU7XG4gICAgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLkVsZW1lbnRDb250YWluZXIgfHwgdE5vZGVUeXBlID09PSBUTm9kZVR5cGUuSWN1Q29udGFpbmVyKSB7XG4gICAgICBjb2xsZWN0TmF0aXZlTm9kZXModFZpZXcsIGxWaWV3LCB0Tm9kZS5jaGlsZCwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLlByb2plY3Rpb24pIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFZpZXcgPSBsVmlld1tERUNMQVJBVElPTl9DT01QT05FTlRfVklFV107XG4gICAgICBjb25zdCBjb21wb25lbnRIb3N0ID0gY29tcG9uZW50Vmlld1tUX0hPU1RdIGFzIFRFbGVtZW50Tm9kZTtcbiAgICAgIGNvbnN0IHNsb3RJZHggPSB0Tm9kZS5wcm9qZWN0aW9uIGFzIG51bWJlcjtcbiAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICAgIGFzc2VydERlZmluZWQoXG4gICAgICAgICAgICAgIGNvbXBvbmVudEhvc3QucHJvamVjdGlvbixcbiAgICAgICAgICAgICAgJ0NvbXBvbmVudHMgd2l0aCBwcm9qZWN0aW9uIG5vZGVzICg8bmctY29udGVudD4pIG11c3QgaGF2ZSBwcm9qZWN0aW9uIHNsb3RzIGRlZmluZWQuJyk7XG5cbiAgICAgIGNvbnN0IG5vZGVzSW5TbG90ID0gY29tcG9uZW50SG9zdC5wcm9qZWN0aW9uIVtzbG90SWR4XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGVzSW5TbG90KSkge1xuICAgICAgICByZXN1bHQucHVzaCguLi5ub2Rlc0luU2xvdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJlbnRWaWV3ID0gZ2V0TFZpZXdQYXJlbnQoY29tcG9uZW50VmlldykhO1xuICAgICAgICBuZ0Rldk1vZGUgJiZcbiAgICAgICAgICAgIGFzc2VydERlZmluZWQoXG4gICAgICAgICAgICAgICAgcGFyZW50VmlldyxcbiAgICAgICAgICAgICAgICAnQ29tcG9uZW50IHZpZXdzIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBhcmVudCB2aWV3IChjb21wb25lbnRcXCdzIGhvc3QgdmlldyknKTtcbiAgICAgICAgY29sbGVjdE5hdGl2ZU5vZGVzKHBhcmVudFZpZXdbVFZJRVddLCBwYXJlbnRWaWV3LCBub2Rlc0luU2xvdCwgcmVzdWx0LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdE5vZGUgPSBpc1Byb2plY3Rpb24gPyB0Tm9kZS5wcm9qZWN0aW9uTmV4dCA6IHROb2RlLm5leHQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19