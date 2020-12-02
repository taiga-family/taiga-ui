/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusableOption } from '@angular/cdk/a11y';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterContentChecked, ChangeDetectorRef, ElementRef, IterableDiffer, IterableDiffers, OnDestroy, OnInit, QueryList, ViewContainerRef, TrackByFunction } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TreeControl } from './control/tree-control';
import { CdkTreeNodeDef } from './node';
import { CdkTreeNodeOutlet } from './outlet';
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTree<T> implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit {
    private _differs;
    private _changeDetectorRef;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDiffer;
    /** Stores the node definition that does not have a when predicate. */
    private _defaultNodeDef;
    /** Data subscription */
    private _dataSubscription;
    /** Level of nodes */
    private _levels;
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     */
    get dataSource(): DataSource<T> | Observable<T[]> | T[];
    set dataSource(dataSource: DataSource<T> | Observable<T[]> | T[]);
    private _dataSource;
    /** The tree controller */
    treeControl: TreeControl<T>;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
     * relative to the function to know if a node should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    trackBy: TrackByFunction<T>;
    _nodeOutlet: CdkTreeNodeOutlet;
    /** The tree node template for the tree */
    _nodeDefs: QueryList<CdkTreeNodeDef<T>>;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */
    viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    constructor(_differs: IterableDiffers, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    private _switchDataSource;
    /** Set up a subscription for the data provided by the data source. */
    private _observeRenderChanges;
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    renderNodeChanges(data: T[] | ReadonlyArray<T>, dataDiffer?: IterableDiffer<T>, viewContainer?: ViewContainerRef, parentData?: T): void;
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    _getNodeDef(data: T, i: number): CdkTreeNodeDef<T>;
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    insertNode(nodeData: T, index: number, viewContainer?: ViewContainerRef, parentData?: T): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTree<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkTree<any>, "cdk-tree", ["cdkTree"], { "dataSource": "dataSource"; "treeControl": "treeControl"; "trackBy": "trackBy"; }, {}, ["_nodeDefs"], never>;
}
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
export declare class CdkTreeNode<T> implements FocusableOption, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    static mostRecentTreeNode: CdkTreeNode<any> | null;
    /** Subject that emits when the component has been destroyed. */
    protected _destroyed: Subject<void>;
    /** Emits when the node's data has changed. */
    _dataChanges: Subject<void>;
    /** The tree node's data. */
    get data(): T;
    set data(value: T);
    protected _data: T;
    get isExpanded(): boolean;
    get level(): number;
    /**
     * The role of the node should be 'group' if it's an internal node,
     * and 'treeitem' if it's a leaf node.
     */
    role: 'treeitem' | 'group';
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>);
    ngOnDestroy(): void;
    /** Focuses the menu item. Implements for FocusableOption. */
    focus(): void;
    protected _setRoleFromData(): void;
    protected _setRoleFromChildren(children: T[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNode<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNode<any>, "cdk-tree-node", ["cdkTreeNode"], { "role": "role"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kLnRzIiwic291cmNlcyI6WyJ0cmVlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBGb2N1c2FibGVPcHRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q29udGFpbmVyUmVmLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJlZUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2wvdHJlZS1jb250cm9sJztcbmltcG9ydCB7IENka1RyZWVOb2RlRGVmIH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7IENka1RyZWVOb2RlT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuLyoqXG4gKiBDREsgdHJlZSBjb21wb25lbnQgdGhhdCBjb25uZWN0cyB3aXRoIGEgZGF0YSBzb3VyY2UgdG8gcmV0cmlldmUgZGF0YSBvZiB0eXBlIGBUYCBhbmQgcmVuZGVyc1xuICogZGF0YU5vZGVzIHdpdGggaGllcmFyY2h5LiBVcGRhdGVzIHRoZSBkYXRhTm9kZXMgd2hlbiBuZXcgZGF0YSBpcyBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyZWU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb2xsZWN0aW9uVmlld2VyLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGlmZmVycztcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjtcbiAgICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95O1xuICAgIC8qKiBEaWZmZXIgdXNlZCB0byBmaW5kIHRoZSBjaGFuZ2VzIGluIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgICBwcml2YXRlIF9kYXRhRGlmZmVyO1xuICAgIC8qKiBTdG9yZXMgdGhlIG5vZGUgZGVmaW5pdGlvbiB0aGF0IGRvZXMgbm90IGhhdmUgYSB3aGVuIHByZWRpY2F0ZS4gKi9cbiAgICBwcml2YXRlIF9kZWZhdWx0Tm9kZURlZjtcbiAgICAvKiogRGF0YSBzdWJzY3JpcHRpb24gKi9cbiAgICBwcml2YXRlIF9kYXRhU3Vic2NyaXB0aW9uO1xuICAgIC8qKiBMZXZlbCBvZiBub2RlcyAqL1xuICAgIHByaXZhdGUgX2xldmVscztcbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHN0cmVhbSBjb250YWluaW5nIHRoZSBsYXRlc3QgZGF0YSBhcnJheSB0byByZW5kZXIuIEluZmx1ZW5jZWQgYnkgdGhlIHRyZWUnc1xuICAgICAqIHN0cmVhbSBvZiB2aWV3IHdpbmRvdyAod2hhdCBkYXRhTm9kZXMgYXJlIGN1cnJlbnRseSBvbiBzY3JlZW4pLlxuICAgICAqIERhdGEgc291cmNlIGNhbiBiZSBhbiBvYnNlcnZhYmxlIG9mIGRhdGEgYXJyYXksIG9yIGEgZGF0YSBhcnJheSB0byByZW5kZXIuXG4gICAgICovXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IFRbXTtcbiAgICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdKTtcbiAgICBwcml2YXRlIF9kYXRhU291cmNlO1xuICAgIC8qKiBUaGUgdHJlZSBjb250cm9sbGVyICovXG4gICAgdHJlZUNvbnRyb2w6IFRyZWVDb250cm9sPFQ+O1xuICAgIC8qKlxuICAgICAqIFRyYWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlcyBpbiBkYXRhIGNoYW5nZXMuIFVzZWQgc2ltaWxhcmx5XG4gICAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIG5vZGUgb3BlcmF0aW9ucyBieSBpZGVudGlmeWluZyBhIG5vZGUgYmFzZWQgb24gaXRzIGRhdGFcbiAgICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIG5vZGUgc2hvdWxkIGJlIGFkZGVkL3JlbW92ZWQvbW92ZWQuXG4gICAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGBpbmRleGAgYW5kIGBpdGVtYC5cbiAgICAgKi9cbiAgICB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD47XG4gICAgX25vZGVPdXRsZXQ6IENka1RyZWVOb2RlT3V0bGV0O1xuICAgIC8qKiBUaGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciB0aGUgdHJlZSAqL1xuICAgIF9ub2RlRGVmczogUXVlcnlMaXN0PENka1RyZWVOb2RlRGVmPFQ+PjtcbiAgICAvKipcbiAgICAgKiBTdHJlYW0gY29udGFpbmluZyB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHdoYXQgcm93cyBhcmUgYmVpbmcgZGlzcGxheWVkIG9uIHNjcmVlbi5cbiAgICAgKiBDYW4gYmUgdXNlZCBieSB0aGUgZGF0YSBzb3VyY2UgdG8gYXMgYSBoZXVyaXN0aWMgb2Ygd2hhdCBkYXRhIHNob3VsZCBiZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICB2aWV3Q2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8e1xuICAgICAgICBzdGFydDogbnVtYmVyO1xuICAgICAgICBlbmQ6IG51bWJlcjtcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3RvcihfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3dpdGNoIHRvIHRoZSBwcm92aWRlZCBkYXRhIHNvdXJjZSBieSByZXNldHRpbmcgdGhlIGRhdGEgYW5kIHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgICAqIHJlbmRlciBjaGFuZ2Ugc3Vic2NyaXB0aW9uIGlmIG9uZSBleGlzdHMuIElmIHRoZSBkYXRhIHNvdXJjZSBpcyBudWxsLCBpbnRlcnByZXQgdGhpcyBieVxuICAgICAqIGNsZWFyaW5nIHRoZSBub2RlIG91dGxldC4gT3RoZXJ3aXNlIHN0YXJ0IGxpc3RlbmluZyBmb3IgbmV3IGRhdGEuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZTtcbiAgICAvKiogU2V0IHVwIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXM7XG4gICAgLyoqIENoZWNrIGZvciBjaGFuZ2VzIG1hZGUgaW4gdGhlIGRhdGEgYW5kIHJlbmRlciBlYWNoIGNoYW5nZSAobm9kZSBhZGRlZC9yZW1vdmVkL21vdmVkKS4gKi9cbiAgICByZW5kZXJOb2RlQ2hhbmdlcyhkYXRhOiBUW10gfCBSZWFkb25seUFycmF5PFQ+LCBkYXRhRGlmZmVyPzogSXRlcmFibGVEaWZmZXI8VD4sIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmLCBwYXJlbnREYXRhPzogVCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIG1hdGNoaW5nIG5vZGUgZGVmaW5pdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGlzIG5vZGUgZGF0YS4gSWYgdGhlcmUgaXMgb25seVxuICAgICAqIG9uZSBub2RlIGRlZmluaXRpb24sIGl0IGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGZpbmQgdGhlIG5vZGUgZGVmaW5pdGlvbiB0aGF0IGhhcyBhIHdoZW5cbiAgICAgKiBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgd2l0aCB0aGUgZGF0YS4gSWYgbm9uZSByZXR1cm4gdHJ1ZSwgcmV0dXJuIHRoZSBkZWZhdWx0IG5vZGVcbiAgICAgKiBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIF9nZXROb2RlRGVmKGRhdGE6IFQsIGk6IG51bWJlcik6IENka1RyZWVOb2RlRGVmPFQ+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgZW1iZWRkZWQgdmlldyBmb3IgdGhlIGRhdGEgbm9kZSB0ZW1wbGF0ZSBhbmQgcGxhY2UgaXQgaW4gdGhlIGNvcnJlY3QgaW5kZXggbG9jYXRpb25cbiAgICAgKiB3aXRoaW4gdGhlIGRhdGEgbm9kZSB2aWV3IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBpbnNlcnROb2RlKG5vZGVEYXRhOiBULCBpbmRleDogbnVtYmVyLCB2aWV3Q29udGFpbmVyPzogVmlld0NvbnRhaW5lclJlZiwgcGFyZW50RGF0YT86IFQpOiB2b2lkO1xufVxuLyoqXG4gKiBUcmVlIG5vZGUgZm9yIENka1RyZWUuIEl0IGNvbnRhaW5zIHRoZSBkYXRhIGluIHRoZSB0cmVlIG5vZGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyZWVOb2RlPFQ+IGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uLCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJvdGVjdGVkIF90cmVlOiBDZGtUcmVlPFQ+O1xuICAgIC8qKlxuICAgICAqIFRoZSBtb3N0IHJlY2VudGx5IGNyZWF0ZWQgYENka1RyZWVOb2RlYC4gV2Ugc2F2ZSBpdCBpbiBzdGF0aWMgdmFyaWFibGUgc28gd2UgY2FuIHJldHJpZXZlIGl0XG4gICAgICogaW4gYENka1RyZWVgIGFuZCBzZXQgdGhlIGRhdGEgdG8gaXQuXG4gICAgICovXG4gICAgc3RhdGljIG1vc3RSZWNlbnRUcmVlTm9kZTogQ2RrVHJlZU5vZGU8YW55PiB8IG51bGw7XG4gICAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICAgIHByb3RlY3RlZCBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+O1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBub2RlJ3MgZGF0YSBoYXMgY2hhbmdlZC4gKi9cbiAgICBfZGF0YUNoYW5nZXM6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqIFRoZSB0cmVlIG5vZGUncyBkYXRhLiAqL1xuICAgIGdldCBkYXRhKCk6IFQ7XG4gICAgc2V0IGRhdGEodmFsdWU6IFQpO1xuICAgIHByb3RlY3RlZCBfZGF0YTogVDtcbiAgICBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuO1xuICAgIGdldCBsZXZlbCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHJvbGUgb2YgdGhlIG5vZGUgc2hvdWxkIGJlICdncm91cCcgaWYgaXQncyBhbiBpbnRlcm5hbCBub2RlLFxuICAgICAqIGFuZCAndHJlZWl0ZW0nIGlmIGl0J3MgYSBsZWFmIG5vZGUuXG4gICAgICovXG4gICAgcm9sZTogJ3RyZWVpdGVtJyB8ICdncm91cCc7XG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBfdHJlZTogQ2RrVHJlZTxUPik7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogRm9jdXNlcyB0aGUgbWVudSBpdGVtLiBJbXBsZW1lbnRzIGZvciBGb2N1c2FibGVPcHRpb24uICovXG4gICAgZm9jdXMoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgX3NldFJvbGVGcm9tRGF0YSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBfc2V0Um9sZUZyb21DaGlsZHJlbihjaGlsZHJlbjogVFtdKTogdm9pZDtcbn1cbiJdfQ==