import { isDataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, Input, IterableDiffers, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, of as observableOf, Subject, isObservable, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkTreeNodeDef, CdkTreeNodeOutletContext } from './node';
import { CdkTreeNodeOutlet } from './outlet';
import { getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError } from './tree-errors';
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
var CdkTree = /** @class */ (function () {
    function CdkTree(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        /** Level of nodes */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
    }
    Object.defineProperty(CdkTree.prototype, "dataSource", {
        /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         */
        get: function () { return this._dataSource; },
        set: function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkTree.prototype.ngOnInit = function () {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl) {
            throw getTreeControlMissingError();
        }
    };
    CdkTree.prototype.ngOnDestroy = function () {
        this._nodeOutlet.viewContainer.clear();
        this.viewChange.complete();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    };
    CdkTree.prototype.ngAfterContentChecked = function () {
        var defaultNodeDefs = this._nodeDefs.filter(function (def) { return !def.when; });
        if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    };
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    CdkTree.prototype._switchDataSource = function (dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    };
    /** Set up a subscription for the data provided by the data source. */
    CdkTree.prototype._observeRenderChanges = function () {
        var _this = this;
        var dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (isObservable(this._dataSource)) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = observableOf(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(takeUntil(this._onDestroy))
                .subscribe(function (data) { return _this.renderNodeChanges(data); });
        }
        else {
            throw getTreeNoValidDataSourceError();
        }
    };
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    CdkTree.prototype.renderNodeChanges = function (data, dataDiffer, viewContainer, parentData) {
        var _this = this;
        if (dataDiffer === void 0) { dataDiffer = this._dataDiffer; }
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        var changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                _this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
                _this._levels.delete(item.item);
            }
            else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._changeDetectorRef.detectChanges();
    };
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    CdkTree.prototype._getNodeDef = function (data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        var nodeDef = this._nodeDefs.find(function (def) { return def.when && def.when(i, data); }) || this._defaultNodeDef;
        if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    };
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    CdkTree.prototype.insertNode = function (nodeData, index, viewContainer, parentData) {
        var node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        var context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = this._levels.get(parentData) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    };
    CdkTree.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree',
                    exportAs: 'cdkTree',
                    template: "<ng-container cdkTreeNodeOutlet></ng-container>",
                    host: {
                        'class': 'cdk-tree',
                        'role': 'tree',
                    },
                    encapsulation: ViewEncapsulation.None,
                    // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                    // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                    // declared elsewhere, they are checked when their declaration points are checked.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default
                }] }
    ];
    /** @nocollapse */
    CdkTree.ctorParameters = function () { return [
        { type: IterableDiffers },
        { type: ChangeDetectorRef }
    ]; };
    CdkTree.propDecorators = {
        dataSource: [{ type: Input }],
        treeControl: [{ type: Input }],
        trackBy: [{ type: Input }],
        _nodeOutlet: [{ type: ViewChild, args: [CdkTreeNodeOutlet, { static: true },] }],
        _nodeDefs: [{ type: ContentChildren, args: [CdkTreeNodeDef, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return CdkTree;
}());
export { CdkTree };
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
var CdkTreeNode = /** @class */ (function () {
    function CdkTreeNode(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new Subject();
        /** Emits when the node's data has changed. */
        this._dataChanges = new Subject();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */
        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode = this;
    }
    Object.defineProperty(CdkTreeNode.prototype, "data", {
        /** The tree node's data. */
        get: function () { return this._data; },
        set: function (value) {
            if (value !== this._data) {
                this._data = value;
                this._setRoleFromData();
                this._dataChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "isExpanded", {
        get: function () {
            return this._tree.treeControl.isExpanded(this._data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "level", {
        get: function () {
            return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        },
        enumerable: true,
        configurable: true
    });
    CdkTreeNode.prototype.ngOnDestroy = function () {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Focuses the menu item. Implements for FocusableOption. */
    CdkTreeNode.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    CdkTreeNode.prototype._setRoleFromData = function () {
        var _this = this;
        if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
        }
        else {
            if (!this._tree.treeControl.getChildren) {
                throw getTreeControlFunctionsMissingError();
            }
            var childrenNodes = this._tree.treeControl.getChildren(this._data);
            if (Array.isArray(childrenNodes)) {
                this._setRoleFromChildren(childrenNodes);
            }
            else if (isObservable(childrenNodes)) {
                childrenNodes.pipe(takeUntil(this._destroyed))
                    .subscribe(function (children) { return _this._setRoleFromChildren(children); });
            }
        }
    };
    CdkTreeNode.prototype._setRoleFromChildren = function (children) {
        this.role = children && children.length ? 'group' : 'treeitem';
    };
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    CdkTreeNode.mostRecentTreeNode = null;
    CdkTreeNode.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-tree-node',
                    exportAs: 'cdkTreeNode',
                    host: {
                        '[attr.aria-expanded]': 'isExpanded',
                        '[attr.aria-level]': 'role === "treeitem" ? level : null',
                        '[attr.role]': 'role',
                        'class': 'cdk-tree-node',
                    },
                },] }
    ];
    /** @nocollapse */
    CdkTreeNode.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CdkTree }
    ]; };
    CdkTreeNode.propDecorators = {
        role: [{ type: Input }]
    };
    return CdkTreeNode;
}());
export { CdkTreeNode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFBK0IsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxlQUFlLEVBR2YsU0FBUyxFQUNULFNBQVMsRUFFVCxpQkFBaUIsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFFZixFQUFFLElBQUksWUFBWSxFQUNsQixPQUFPLEVBRVAsWUFBWSxHQUNiLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyxtQ0FBbUMsRUFDbkMsNkJBQTZCLEVBQzlCLE1BQU0sZUFBZSxDQUFDO0FBRXZCOzs7R0FHRztBQUNIO0lBNEVFLGlCQUFvQixRQUF5QixFQUN6QixrQkFBcUM7UUFEckMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTVEekQsZ0VBQWdFO1FBQ3hELGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBV3pDLHFCQUFxQjtRQUNiLFlBQU8sR0FBbUIsSUFBSSxHQUFHLEVBQWEsQ0FBQztRQXFDdkQsNkZBQTZGO1FBQzdGLHlDQUF5QztRQUN6Qzs7O1dBR0c7UUFDSCxlQUFV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LENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDakUsQ0FBQztJQTlFRDs7O09BR0c7SUFDSSw4QkFBa0IsR0FBNEIsSUFBSSxDQUFDOztnQkFmM0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsSUFBSSxFQUFFO3dCQUNKLHNCQUFzQixFQUFFLFlBQVk7d0JBQ3BDLG1CQUFtQixFQUFFLG9DQUFvQzt3QkFDekQsYUFBYSxFQUFFLE1BQU07d0JBQ3JCLE9BQU8sRUFBRSxlQUFlO3FCQUN6QjtpQkFDRjs7OztnQkFqU0MsVUFBVTtnQkF5VW1CLE9BQU87Ozt1QkFIbkMsS0FBSzs7SUE0Q1Isa0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQWhGWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0ZvY3VzYWJsZU9wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlLCBpc0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBJdGVyYWJsZUNoYW5nZVJlY29yZCxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVHJhY2tCeUZ1bmN0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIFN1YmplY3QsXG4gIFN1YnNjcmlwdGlvbixcbiAgaXNPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1RyZWVDb250cm9sfSBmcm9tICcuL2NvbnRyb2wvdHJlZS1jb250cm9sJztcbmltcG9ydCB7Q2RrVHJlZU5vZGVEZWYsIENka1RyZWVOb2RlT3V0bGV0Q29udGV4dH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7Q2RrVHJlZU5vZGVPdXRsZXR9IGZyb20gJy4vb3V0bGV0JztcbmltcG9ydCB7XG4gIGdldFRyZWVDb250cm9sRnVuY3Rpb25zTWlzc2luZ0Vycm9yLFxuICBnZXRUcmVlQ29udHJvbE1pc3NpbmdFcnJvcixcbiAgZ2V0VHJlZU1pc3NpbmdNYXRjaGluZ05vZGVEZWZFcnJvcixcbiAgZ2V0VHJlZU11bHRpcGxlRGVmYXVsdE5vZGVEZWZzRXJyb3IsXG4gIGdldFRyZWVOb1ZhbGlkRGF0YVNvdXJjZUVycm9yXG59IGZyb20gJy4vdHJlZS1lcnJvcnMnO1xuXG4vKipcbiAqIENESyB0cmVlIGNvbXBvbmVudCB0aGF0IGNvbm5lY3RzIHdpdGggYSBkYXRhIHNvdXJjZSB0byByZXRyaWV2ZSBkYXRhIG9mIHR5cGUgYFRgIGFuZCByZW5kZXJzXG4gKiBkYXRhTm9kZXMgd2l0aCBoaWVyYXJjaHkuIFVwZGF0ZXMgdGhlIGRhdGFOb2RlcyB3aGVuIG5ldyBkYXRhIGlzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUnLFxuICBleHBvcnRBczogJ2Nka1RyZWUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgY2RrVHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+YCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdHJlZScsXG4gICAgJ3JvbGUnOiAndHJlZScsXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cbiAgLy8gVGhlIFwiT25QdXNoXCIgc3RhdHVzIGZvciB0aGUgYENka1RyZWVgIGNvbXBvbmVudCBpcyBlZmZlY3RpdmVseSBhIG5vb3AsIHNvIHdlIGFyZSByZW1vdmluZyBpdC5cbiAgLy8gVGhlIHZpZXcgZm9yIGBDZGtUcmVlYCBjb25zaXN0cyBlbnRpcmVseSBvZiB0ZW1wbGF0ZXMgZGVjbGFyZWQgaW4gb3RoZXIgdmlld3MuIEFzIHRoZXkgYXJlXG4gIC8vIGRlY2xhcmVkIGVsc2V3aGVyZSwgdGhleSBhcmUgY2hlY2tlZCB3aGVuIHRoZWlyIGRlY2xhcmF0aW9uIHBvaW50cyBhcmUgY2hlY2tlZC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb2xsZWN0aW9uVmlld2VyLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRGlmZmVyIHVzZWQgdG8gZmluZCB0aGUgY2hhbmdlcyBpbiB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gIHByaXZhdGUgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPFQ+O1xuXG4gIC8qKiBTdG9yZXMgdGhlIG5vZGUgZGVmaW5pdGlvbiB0aGF0IGRvZXMgbm90IGhhdmUgYSB3aGVuIHByZWRpY2F0ZS4gKi9cbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IENka1RyZWVOb2RlRGVmPFQ+IHwgbnVsbDtcblxuICAvKiogRGF0YSBzdWJzY3JpcHRpb24gKi9cbiAgcHJpdmF0ZSBfZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogTGV2ZWwgb2Ygbm9kZXMgKi9cbiAgcHJpdmF0ZSBfbGV2ZWxzOiBNYXA8VCwgbnVtYmVyPiA9IG5ldyBNYXA8VCwgbnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIHN0cmVhbSBjb250YWluaW5nIHRoZSBsYXRlc3QgZGF0YSBhcnJheSB0byByZW5kZXIuIEluZmx1ZW5jZWQgYnkgdGhlIHRyZWUnc1xuICAgKiBzdHJlYW0gb2YgdmlldyB3aW5kb3cgKHdoYXQgZGF0YU5vZGVzIGFyZSBjdXJyZW50bHkgb24gc2NyZWVuKS5cbiAgICogRGF0YSBzb3VyY2UgY2FuIGJlIGFuIG9ic2VydmFibGUgb2YgZGF0YSBhcnJheSwgb3IgYSBkYXRhIGFycmF5IHRvIHJlbmRlci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhU291cmNlKCk6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBUW10geyByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTsgfVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdKSB7XG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgIT09IGRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2RhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBUW107XG5cbiAgLyoqIFRoZSB0cmVlIGNvbnRyb2xsZXIgKi9cbiAgQElucHV0KCkgdHJlZUNvbnRyb2w6IFRyZWVDb250cm9sPFQ+O1xuXG4gIC8qKlxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxuICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgbm9kZSBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgbm9kZSBiYXNlZCBvbiBpdHMgZGF0YVxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIG5vZGUgc2hvdWxkIGJlIGFkZGVkL3JlbW92ZWQvbW92ZWQuXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXG4gICAqL1xuICBASW5wdXQoKSB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD47XG5cbiAgLy8gT3V0bGV0cyB3aXRoaW4gdGhlIHRyZWUncyB0ZW1wbGF0ZSB3aGVyZSB0aGUgZGF0YU5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuXG4gIEBWaWV3Q2hpbGQoQ2RrVHJlZU5vZGVPdXRsZXQsIHtzdGF0aWM6IHRydWV9KSBfbm9kZU91dGxldDogQ2RrVHJlZU5vZGVPdXRsZXQ7XG5cbiAgLyoqIFRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIHRoZSB0cmVlICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2RrVHJlZU5vZGVEZWYsIHtcbiAgICAvLyBXZSBuZWVkIHRvIHVzZSBgZGVzY2VuZGFudHM6IHRydWVgLCBiZWNhdXNlIEl2eSB3aWxsIG5vIGxvbmdlciBtYXRjaFxuICAgIC8vIGluZGlyZWN0IGRlc2NlbmRhbnRzIGlmIGl0J3MgbGVmdCBhcyBmYWxzZS5cbiAgICBkZXNjZW5kYW50czogdHJ1ZVxuICB9KSBfbm9kZURlZnM6IFF1ZXJ5TGlzdDxDZGtUcmVlTm9kZURlZjxUPj47XG5cbiAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IFNldHVwIGEgbGlzdGVuZXIgZm9yIHNjcm9sbGluZywgZW1pdCB0aGUgY2FsY3VsYXRlZCB2aWV3IHRvIHZpZXdDaGFuZ2UuXG4gIC8vICAgICBSZW1vdmUgdGhlIE1BWF9WQUxVRSBpbiB2aWV3Q2hhbmdlXG4gIC8qKlxuICAgKiBTdHJlYW0gY29udGFpbmluZyB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHdoYXQgcm93cyBhcmUgYmVpbmcgZGlzcGxheWVkIG9uIHNjcmVlbi5cbiAgICogQ2FuIGJlIHVzZWQgYnkgdGhlIGRhdGEgc291cmNlIHRvIGFzIGEgaGV1cmlzdGljIG9mIHdoYXQgZGF0YSBzaG91bGQgYmUgcHJvdmlkZWQuXG4gICAqL1xuICB2aWV3Q2hhbmdlID1cbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PHtzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcn0+KHtzdGFydDogMCwgZW5kOiBOdW1iZXIuTUFYX1ZBTFVFfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZChbXSkuY3JlYXRlKHRoaXMudHJhY2tCeSk7XG4gICAgaWYgKCF0aGlzLnRyZWVDb250cm9sKSB7XG4gICAgICB0aHJvdyBnZXRUcmVlQ29udHJvbE1pc3NpbmdFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuXG4gICAgdGhpcy52aWV3Q2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcblxuICAgIGlmICh0aGlzLl9kYXRhU291cmNlICYmIHR5cGVvZiAodGhpcy5fZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlPFQ+KS5kaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAodGhpcy5kYXRhU291cmNlIGFzIERhdGFTb3VyY2U8VD4pLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGFTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0Tm9kZURlZnMgPSB0aGlzLl9ub2RlRGVmcy5maWx0ZXIoZGVmID0+ICFkZWYud2hlbik7XG4gICAgaWYgKGRlZmF1bHROb2RlRGVmcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBnZXRUcmVlTXVsdGlwbGVEZWZhdWx0Tm9kZURlZnNFcnJvcigpO1xuICAgIH1cbiAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZiA9IGRlZmF1bHROb2RlRGVmc1swXTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5fbm9kZURlZnMgJiYgIXRoaXMuX2RhdGFTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cblxuICAvLyBUT0RPKHRpbmF5dWFuZ2FvKTogV29yayBvbiBrZXlib2FyZCB0cmF2ZXJzYWwgYW5kIGFjdGlvbnMsIG1ha2Ugc3VyZSBpdCdzIHdvcmtpbmcgZm9yIFJUTFxuICAvLyAgICAgYW5kIG5lc3RlZCB0cmVlcy5cblxuICAvKipcbiAgICogU3dpdGNoIHRvIHRoZSBwcm92aWRlZCBkYXRhIHNvdXJjZSBieSByZXNldHRpbmcgdGhlIGRhdGEgYW5kIHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgKiByZW5kZXIgY2hhbmdlIHN1YnNjcmlwdGlvbiBpZiBvbmUgZXhpc3RzLiBJZiB0aGUgZGF0YSBzb3VyY2UgaXMgbnVsbCwgaW50ZXJwcmV0IHRoaXMgYnlcbiAgICogY2xlYXJpbmcgdGhlIG5vZGUgb3V0bGV0LiBPdGhlcndpc2Ugc3RhcnQgbGlzdGVuaW5nIGZvciBuZXcgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IFRbXSkge1xuICAgIGlmICh0aGlzLl9kYXRhU291cmNlICYmIHR5cGVvZiAodGhpcy5fZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlPFQ+KS5kaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAodGhpcy5kYXRhU291cmNlIGFzIERhdGFTb3VyY2U8VD4pLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGFTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgYWxsIGRhdGFOb2RlcyBpZiB0aGVyZSBpcyBub3cgbm8gZGF0YSBzb3VyY2VcbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIGlmICh0aGlzLl9ub2RlRGVmcykge1xuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0IHVwIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4+IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKGlzRGF0YVNvdXJjZSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2UuY29ubmVjdCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2RhdGFTb3VyY2UpKSB7XG4gICAgICBkYXRhU3RyZWFtID0gb2JzZXJ2YWJsZU9mKHRoaXMuX2RhdGFTb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhU3RyZWFtKSB7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gZGF0YVN0cmVhbS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5yZW5kZXJOb2RlQ2hhbmdlcyhkYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGdldFRyZWVOb1ZhbGlkRGF0YVNvdXJjZUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrIGZvciBjaGFuZ2VzIG1hZGUgaW4gdGhlIGRhdGEgYW5kIHJlbmRlciBlYWNoIGNoYW5nZSAobm9kZSBhZGRlZC9yZW1vdmVkL21vdmVkKS4gKi9cbiAgcmVuZGVyTm9kZUNoYW5nZXMoZGF0YTogVFtdIHwgUmVhZG9ubHlBcnJheTxUPiwgZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8VD4gPSB0aGlzLl9kYXRhRGlmZmVyLFxuICAgICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnREYXRhPzogVCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSBkYXRhRGlmZmVyLmRpZmYoZGF0YSk7XG4gICAgaWYgKCFjaGFuZ2VzKSB7IHJldHVybjsgfVxuXG4gICAgY2hhbmdlcy5mb3JFYWNoT3BlcmF0aW9uKChpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxUPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyIHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyIHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmluc2VydE5vZGUoZGF0YVtjdXJyZW50SW5kZXghXSwgY3VycmVudEluZGV4ISwgdmlld0NvbnRhaW5lciwgcGFyZW50RGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLnJlbW92ZShhZGp1c3RlZFByZXZpb3VzSW5kZXghKTtcbiAgICAgICAgICB0aGlzLl9sZXZlbHMuZGVsZXRlKGl0ZW0uaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCEpO1xuICAgICAgICAgIHZpZXdDb250YWluZXIubW92ZSh2aWV3ISwgY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIG1hdGNoaW5nIG5vZGUgZGVmaW5pdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGlzIG5vZGUgZGF0YS4gSWYgdGhlcmUgaXMgb25seVxuICAgKiBvbmUgbm9kZSBkZWZpbml0aW9uLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBmaW5kIHRoZSBub2RlIGRlZmluaXRpb24gdGhhdCBoYXMgYSB3aGVuXG4gICAqIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdHJ1ZSB3aXRoIHRoZSBkYXRhLiBJZiBub25lIHJldHVybiB0cnVlLCByZXR1cm4gdGhlIGRlZmF1bHQgbm9kZVxuICAgKiBkZWZpbml0aW9uLlxuICAgKi9cbiAgX2dldE5vZGVEZWYoZGF0YTogVCwgaTogbnVtYmVyKTogQ2RrVHJlZU5vZGVEZWY8VD4ge1xuICAgIGlmICh0aGlzLl9ub2RlRGVmcy5sZW5ndGggPT09IDEpIHsgcmV0dXJuIHRoaXMuX25vZGVEZWZzLmZpcnN0OyB9XG5cbiAgICBjb25zdCBub2RlRGVmID1cbiAgICAgIHRoaXMuX25vZGVEZWZzLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fCB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcbiAgICBpZiAoIW5vZGVEZWYpIHsgdGhyb3cgZ2V0VHJlZU1pc3NpbmdNYXRjaGluZ05vZGVEZWZFcnJvcigpOyB9XG5cbiAgICByZXR1cm4gbm9kZURlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGVtYmVkZGVkIHZpZXcgZm9yIHRoZSBkYXRhIG5vZGUgdGVtcGxhdGUgYW5kIHBsYWNlIGl0IGluIHRoZSBjb3JyZWN0IGluZGV4IGxvY2F0aW9uXG4gICAqIHdpdGhpbiB0aGUgZGF0YSBub2RlIHZpZXcgY29udGFpbmVyLlxuICAgKi9cbiAgaW5zZXJ0Tm9kZShub2RlRGF0YTogVCwgaW5kZXg6IG51bWJlciwgdmlld0NvbnRhaW5lcj86IFZpZXdDb250YWluZXJSZWYsIHBhcmVudERhdGE/OiBUKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYobm9kZURhdGEsIGluZGV4KTtcblxuICAgIC8vIE5vZGUgY29udGV4dCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gY3JlYXRlZCBlbWJlZGRlZCB2aWV3XG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDZGtUcmVlTm9kZU91dGxldENvbnRleHQ8VD4obm9kZURhdGEpO1xuXG4gICAgLy8gSWYgdGhlIHRyZWUgaXMgZmxhdCB0cmVlLCB0aGVuIHVzZSB0aGUgYGdldExldmVsYCBmdW5jdGlvbiBpbiBmbGF0IHRyZWUgY29udHJvbFxuICAgIC8vIE90aGVyd2lzZSwgdXNlIHRoZSBsZXZlbCBvZiBwYXJlbnQgbm9kZS5cbiAgICBpZiAodGhpcy50cmVlQ29udHJvbC5nZXRMZXZlbCkge1xuICAgICAgY29udGV4dC5sZXZlbCA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0TGV2ZWwobm9kZURhdGEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmVudERhdGEgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2xldmVscy5oYXMocGFyZW50RGF0YSkpIHtcbiAgICAgIGNvbnRleHQubGV2ZWwgPSB0aGlzLl9sZXZlbHMuZ2V0KHBhcmVudERhdGEpISArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQubGV2ZWwgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9sZXZlbHMuc2V0KG5vZGVEYXRhLCBjb250ZXh0LmxldmVsKTtcblxuICAgIC8vIFVzZSBkZWZhdWx0IHRyZWUgbm9kZU91dGxldCwgb3IgbmVzdGVkIG5vZGUncyBub2RlT3V0bGV0XG4gICAgY29uc3QgY29udGFpbmVyID0gdmlld0NvbnRhaW5lciA/IHZpZXdDb250YWluZXIgOiB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhub2RlLnRlbXBsYXRlLCBjb250ZXh0LCBpbmRleCk7XG5cbiAgICAvLyBTZXQgdGhlIGRhdGEgdG8ganVzdCBjcmVhdGVkIGBDZGtUcmVlTm9kZWAuXG4gICAgLy8gVGhlIGBDZGtUcmVlTm9kZWAgY3JlYXRlZCBmcm9tIGBjcmVhdGVFbWJlZGRlZFZpZXdgIHdpbGwgYmUgc2F2ZWQgaW4gc3RhdGljIHZhcmlhYmxlXG4gICAgLy8gICAgIGBtb3N0UmVjZW50VHJlZU5vZGVgLiBXZSBnZXQgaXQgZnJvbSBzdGF0aWMgdmFyaWFibGUgYW5kIHBhc3MgdGhlIG5vZGUgZGF0YSB0byBpdC5cbiAgICBpZiAoQ2RrVHJlZU5vZGUubW9zdFJlY2VudFRyZWVOb2RlKSB7XG4gICAgICBDZGtUcmVlTm9kZS5tb3N0UmVjZW50VHJlZU5vZGUuZGF0YSA9IG5vZGVEYXRhO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogVHJlZSBub2RlIGZvciBDZGtUcmVlLiBJdCBjb250YWlucyB0aGUgZGF0YSBpbiB0aGUgdHJlZSBub2RlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1ub2RlJyxcbiAgZXhwb3J0QXM6ICdjZGtUcmVlTm9kZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnaXNFeHBhbmRlZCcsXG4gICAgJ1thdHRyLmFyaWEtbGV2ZWxdJzogJ3JvbGUgPT09IFwidHJlZWl0ZW1cIiA/IGxldmVsIDogbnVsbCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdjbGFzcyc6ICdjZGstdHJlZS1ub2RlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU5vZGU8VD4gaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24sIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbW9zdCByZWNlbnRseSBjcmVhdGVkIGBDZGtUcmVlTm9kZWAuIFdlIHNhdmUgaXQgaW4gc3RhdGljIHZhcmlhYmxlIHNvIHdlIGNhbiByZXRyaWV2ZSBpdFxuICAgKiBpbiBgQ2RrVHJlZWAgYW5kIHNldCB0aGUgZGF0YSB0byBpdC5cbiAgICovXG4gIHN0YXRpYyBtb3N0UmVjZW50VHJlZU5vZGU6IENka1RyZWVOb2RlPGFueT4gfCBudWxsID0gbnVsbDtcblxuICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByb3RlY3RlZCBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgbm9kZSdzIGRhdGEgaGFzIGNoYW5nZWQuICovXG4gIF9kYXRhQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFRoZSB0cmVlIG5vZGUncyBkYXRhLiAqL1xuICBnZXQgZGF0YSgpOiBUIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cbiAgc2V0IGRhdGEodmFsdWU6IFQpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3NldFJvbGVGcm9tRGF0YSgpO1xuICAgICAgdGhpcy5fZGF0YUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX2RhdGE6IFQ7XG5cbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyZWUudHJlZUNvbnRyb2wuaXNFeHBhbmRlZCh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldExldmVsID8gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRMZXZlbCh0aGlzLl9kYXRhKSA6IDA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJvbGUgb2YgdGhlIG5vZGUgc2hvdWxkIGJlICdncm91cCcgaWYgaXQncyBhbiBpbnRlcm5hbCBub2RlLFxuICAgKiBhbmQgJ3RyZWVpdGVtJyBpZiBpdCdzIGEgbGVhZiBub2RlLlxuICAgKi9cbiAgQElucHV0KCkgcm9sZTogJ3RyZWVpdGVtJyB8ICdncm91cCcgPSAndHJlZWl0ZW0nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdHJlZTogQ2RrVHJlZTxUPikge1xuICAgIENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSA9IHRoaXMgYXMgQ2RrVHJlZU5vZGU8VD47XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IHRyZWUgbm9kZSBiZWluZyBkZXN0cm95ZWQsXG4gICAgLy8gY2xlYXIgb3V0IHRoZSByZWZlcmVuY2UgdG8gYXZvaWQgbGVha2luZyBtZW1vcnkuXG4gICAgaWYgKENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSA9PT0gdGhpcykge1xuICAgICAgQ2RrVHJlZU5vZGUubW9zdFJlY2VudFRyZWVOb2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgbWVudSBpdGVtLiBJbXBsZW1lbnRzIGZvciBGb2N1c2FibGVPcHRpb24uICovXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXRSb2xlRnJvbURhdGEoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RyZWUudHJlZUNvbnRyb2wuaXNFeHBhbmRhYmxlKSB7XG4gICAgICB0aGlzLnJvbGUgPSB0aGlzLl90cmVlLnRyZWVDb250cm9sLmlzRXhwYW5kYWJsZSh0aGlzLl9kYXRhKSA/ICdncm91cCcgOiAndHJlZWl0ZW0nO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3RyZWUudHJlZUNvbnRyb2wuZ2V0Q2hpbGRyZW4pIHtcbiAgICAgICAgdGhyb3cgZ2V0VHJlZUNvbnRyb2xGdW5jdGlvbnNNaXNzaW5nRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkcmVuTm9kZXMgPSB0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldENoaWxkcmVuKHRoaXMuX2RhdGEpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5Ob2RlcykpIHtcbiAgICAgICAgdGhpcy5fc2V0Um9sZUZyb21DaGlsZHJlbihjaGlsZHJlbk5vZGVzIGFzIFRbXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZShjaGlsZHJlbk5vZGVzKSkge1xuICAgICAgICBjaGlsZHJlbk5vZGVzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNoaWxkcmVuID0+IHRoaXMuX3NldFJvbGVGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3NldFJvbGVGcm9tQ2hpbGRyZW4oY2hpbGRyZW46IFRbXSkge1xuICAgIHRoaXMucm9sZSA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA/ICdncm91cCcgOiAndHJlZWl0ZW0nO1xuICB9XG59XG4iXX0=