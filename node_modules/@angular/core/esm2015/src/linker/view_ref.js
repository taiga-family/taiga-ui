/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/view_ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectorRef } from '../change_detection/change_detector_ref';
/**
 * Represents an Angular [view](guide/glossary#view),
 * specifically the [host view](guide/glossary#view-tree) that is defined by a component.
 * Also serves as the base class
 * that adds destroy methods for [embedded views](guide/glossary#view-tree).
 *
 * @see `EmbeddedViewRef`
 *
 * \@publicApi
 * @abstract
 */
export class ViewRef extends ChangeDetectorRef {
}
if (false) {
    /**
     * Destroys this view and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    ViewRef.prototype.destroy = function () { };
    /**
     * Reports whether this view has been destroyed.
     * @abstract
     * @return {?} True after the `destroy()` method has been called, false otherwise.
     */
    ViewRef.prototype.destroyed = function () { };
    /**
     * A lifecycle hook that provides additional developer-defined cleanup
     * functionality for views.
     * @abstract
     * @param {?} callback A handler function that cleans up developer-defined data
     * associated with a view. Called when the `destroy()` method is invoked.
     * @return {?}
     */
    ViewRef.prototype.onDestroy = function (callback) { };
}
/**
 * Represents an Angular [view](guide/glossary#view) in a view container.
 * An [embedded view](guide/glossary#view-tree) can be referenced from a component
 * other than the hosting component whose template defines it, or it can be defined
 * independently by a `TemplateRef`.
 *
 * Properties of elements in a view can change, but the structure (number and order) of elements in
 * a view cannot. Change the structure of elements by inserting, moving, or
 * removing nested views in a view container.
 *
 * @see `ViewContainerRef`
 *
 * \@usageNotes
 *
 * The following template breaks down into two separate `TemplateRef` instances,
 * an outer one and an inner one.
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="let  item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * This is the outer `TemplateRef`:
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <ng-template ngFor let-item [ngForOf]="items"></ng-template>
 * </ul>
 * ```
 *
 * This is the inner `TemplateRef`:
 *
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * The outer and inner `TemplateRef` instances are assembled into views as follows:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <ng-template view-container-ref></ng-template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 * \@publicApi
 * @abstract
 * @template C
 */
export class EmbeddedViewRef extends ViewRef {
}
if (false) {
    /**
     * The context for this view, inherited from the anchor element.
     * @abstract
     * @return {?}
     */
    EmbeddedViewRef.prototype.context = function () { };
    /**
     * The root nodes for this embedded view.
     * @abstract
     * @return {?}
     */
    EmbeddedViewRef.prototype.rootNodes = function () { };
}
/**
 * @record
 */
export function InternalViewRef() { }
if (false) {
    /**
     * @return {?}
     */
    InternalViewRef.prototype.detachFromAppRef = function () { };
    /**
     * @param {?} appRef
     * @return {?}
     */
    InternalViewRef.prototype.attachToAppRef = function (appRef) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvdmlld19yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7OztBQVkxRSxNQUFNLE9BQWdCLE9BQVEsU0FBUSxpQkFBaUI7Q0FtQnREOzs7Ozs7O0lBZkMsNENBQXlCOzs7Ozs7SUFNekIsOENBQWtDOzs7Ozs7Ozs7SUFRbEMsc0RBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RGhFLE1BQU0sT0FBZ0IsZUFBbUIsU0FBUSxPQUFPO0NBVXZEOzs7Ozs7O0lBTkMsb0RBQTBCOzs7Ozs7SUFLMUIsc0RBQWdDOzs7OztBQUdsQyxxQ0FHQzs7Ozs7SUFGQyw2REFBeUI7Ozs7O0lBQ3pCLGlFQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvblJlZn0gZnJvbSAnLi4vYXBwbGljYXRpb25fcmVmJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBBbmd1bGFyIFt2aWV3XShndWlkZS9nbG9zc2FyeSN2aWV3KSxcbiAqIHNwZWNpZmljYWxseSB0aGUgW2hvc3Qgdmlld10oZ3VpZGUvZ2xvc3Nhcnkjdmlldy10cmVlKSB0aGF0IGlzIGRlZmluZWQgYnkgYSBjb21wb25lbnQuXG4gKiBBbHNvIHNlcnZlcyBhcyB0aGUgYmFzZSBjbGFzc1xuICogdGhhdCBhZGRzIGRlc3Ryb3kgbWV0aG9kcyBmb3IgW2VtYmVkZGVkIHZpZXdzXShndWlkZS9nbG9zc2FyeSN2aWV3LXRyZWUpLlxuICpcbiAqIEBzZWUgYEVtYmVkZGVkVmlld1JlZmBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaWV3UmVmIGV4dGVuZHMgQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICAvKipcbiAgICogRGVzdHJveXMgdGhpcyB2aWV3IGFuZCBhbGwgb2YgdGhlIGRhdGEgc3RydWN0dXJlcyBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAqL1xuICBhYnN0cmFjdCBkZXN0cm95KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgd2hldGhlciB0aGlzIHZpZXcgaGFzIGJlZW4gZGVzdHJveWVkLlxuICAgKiBAcmV0dXJucyBUcnVlIGFmdGVyIHRoZSBgZGVzdHJveSgpYCBtZXRob2QgaGFzIGJlZW4gY2FsbGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgZGVzdHJveWVkKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgbGlmZWN5Y2xlIGhvb2sgdGhhdCBwcm92aWRlcyBhZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIGNsZWFudXBcbiAgICogZnVuY3Rpb25hbGl0eSBmb3Igdmlld3MuXG4gICAqIEBwYXJhbSBjYWxsYmFjayBBIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCBjbGVhbnMgdXAgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YVxuICAgKiBhc3NvY2lhdGVkIHdpdGggYSB2aWV3LiBDYWxsZWQgd2hlbiB0aGUgYGRlc3Ryb3koKWAgbWV0aG9kIGlzIGludm9rZWQuXG4gICAqL1xuICBhYnN0cmFjdCBvbkRlc3Ryb3koY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IC8qKiBUT0RPICM5MTAwICovO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gQW5ndWxhciBbdmlld10oZ3VpZGUvZ2xvc3NhcnkjdmlldykgaW4gYSB2aWV3IGNvbnRhaW5lci5cbiAqIEFuIFtlbWJlZGRlZCB2aWV3XShndWlkZS9nbG9zc2FyeSN2aWV3LXRyZWUpIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gYSBjb21wb25lbnRcbiAqIG90aGVyIHRoYW4gdGhlIGhvc3RpbmcgY29tcG9uZW50IHdob3NlIHRlbXBsYXRlIGRlZmluZXMgaXQsIG9yIGl0IGNhbiBiZSBkZWZpbmVkXG4gKiBpbmRlcGVuZGVudGx5IGJ5IGEgYFRlbXBsYXRlUmVmYC5cbiAqXG4gKiBQcm9wZXJ0aWVzIG9mIGVsZW1lbnRzIGluIGEgdmlldyBjYW4gY2hhbmdlLCBidXQgdGhlIHN0cnVjdHVyZSAobnVtYmVyIGFuZCBvcmRlcikgb2YgZWxlbWVudHMgaW5cbiAqIGEgdmlldyBjYW5ub3QuIENoYW5nZSB0aGUgc3RydWN0dXJlIG9mIGVsZW1lbnRzIGJ5IGluc2VydGluZywgbW92aW5nLCBvclxuICogcmVtb3ZpbmcgbmVzdGVkIHZpZXdzIGluIGEgdmlldyBjb250YWluZXIuXG4gKlxuICogQHNlZSBgVmlld0NvbnRhaW5lclJlZmBcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgdGVtcGxhdGUgYnJlYWtzIGRvd24gaW50byB0d28gc2VwYXJhdGUgYFRlbXBsYXRlUmVmYCBpbnN0YW5jZXMsXG4gKiBhbiBvdXRlciBvbmUgYW5kIGFuIGlubmVyIG9uZS5cbiAqXG4gKiBgYGBcbiAqIENvdW50OiB7e2l0ZW1zLmxlbmd0aH19XG4gKiA8dWw+XG4gKiAgIDxsaSAqbmdGb3I9XCJsZXQgIGl0ZW0gb2YgaXRlbXNcIj57e2l0ZW19fTwvbGk+XG4gKiA8L3VsPlxuICogYGBgXG4gKlxuICogVGhpcyBpcyB0aGUgb3V0ZXIgYFRlbXBsYXRlUmVmYDpcbiAqXG4gKiBgYGBcbiAqIENvdW50OiB7e2l0ZW1zLmxlbmd0aH19XG4gKiA8dWw+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJpdGVtc1wiPjwvbmctdGVtcGxhdGU+XG4gKiA8L3VsPlxuICogYGBgXG4gKlxuICogVGhpcyBpcyB0aGUgaW5uZXIgYFRlbXBsYXRlUmVmYDpcbiAqXG4gKiBgYGBcbiAqICAgPGxpPnt7aXRlbX19PC9saT5cbiAqIGBgYFxuICpcbiAqIFRoZSBvdXRlciBhbmQgaW5uZXIgYFRlbXBsYXRlUmVmYCBpbnN0YW5jZXMgYXJlIGFzc2VtYmxlZCBpbnRvIHZpZXdzIGFzIGZvbGxvd3M6XG4gKlxuICogYGBgXG4gKiA8IS0tIFZpZXdSZWY6IG91dGVyLTAgLS0+XG4gKiBDb3VudDogMlxuICogPHVsPlxuICogICA8bmctdGVtcGxhdGUgdmlldy1jb250YWluZXItcmVmPjwvbmctdGVtcGxhdGU+XG4gKiAgIDwhLS0gVmlld1JlZjogaW5uZXItMSAtLT48bGk+Zmlyc3Q8L2xpPjwhLS0gL1ZpZXdSZWY6IGlubmVyLTEgLS0+XG4gKiAgIDwhLS0gVmlld1JlZjogaW5uZXItMiAtLT48bGk+c2Vjb25kPC9saT48IS0tIC9WaWV3UmVmOiBpbm5lci0yIC0tPlxuICogPC91bD5cbiAqIDwhLS0gL1ZpZXdSZWY6IG91dGVyLTAgLS0+XG4gKiBgYGBcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVtYmVkZGVkVmlld1JlZjxDPiBleHRlbmRzIFZpZXdSZWYge1xuICAvKipcbiAgICogVGhlIGNvbnRleHQgZm9yIHRoaXMgdmlldywgaW5oZXJpdGVkIGZyb20gdGhlIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGNvbnRleHQoKTogQztcblxuICAvKipcbiAgICogVGhlIHJvb3Qgbm9kZXMgZm9yIHRoaXMgZW1iZWRkZWQgdmlldy5cbiAgICovXG4gIGFic3RyYWN0IGdldCByb290Tm9kZXMoKTogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxWaWV3UmVmIGV4dGVuZHMgVmlld1JlZiB7XG4gIGRldGFjaEZyb21BcHBSZWYoKTogdm9pZDtcbiAgYXR0YWNoVG9BcHBSZWYoYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IHZvaWQ7XG59XG4iXX0=