/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection/change_detector_ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { injectChangeDetectorRef as render3InjectChangeDetectorRef } from '../render3/view_engine_compatibility';
/**
 * Base class for Angular Views, provides change detection functionality.
 * A change-detection tree collects all views that are to be checked for changes.
 * Use the methods to add and remove views from the tree, initiate change-detection,
 * and explicitly mark views as _dirty_, meaning that they have changed and need to be rerendered.
 *
 * \@usageNotes
 *
 * The following examples demonstrate how to modify default change-detection behavior
 * to perform explicit detection when needed.
 *
 * ### Use `markForCheck()` with `CheckOnce` strategy
 *
 * The following example sets the `OnPush` change-detection strategy for a component
 * (`CheckOnce`, rather than the default `CheckAlways`), then forces a second check
 * after an interval. See [live demo](http://plnkr.co/edit/GC512b?p=preview).
 *
 * <code-example path="core/ts/change_detect/change-detection.ts"
 * region="mark-for-check"></code-example>
 *
 * ### Detach change detector to limit how often check occurs
 *
 * The following example defines a component with a large list of read-only data
 * that is expected to change constantly, many times per second.
 * To improve performance, we want to check and update the list
 * less often than the changes actually occur. To do that, we detach
 * the component's change detector and perform an explicit local check every five seconds.
 *
 * <code-example path="core/ts/change_detect/change-detection.ts" region="detach"></code-example>
 *
 *
 * ### Reattaching a detached component
 *
 * The following example creates a component displaying live data.
 * The component detaches its change detector from the main change detector tree
 * when the `live` property is set to false, and reattaches it when the property
 * becomes true.
 *
 * <code-example path="core/ts/change_detect/change-detection.ts" region="reattach"></code-example>
 *
 * \@publicApi
 * @abstract
 */
export class ChangeDetectorRef {
}
/**
 * \@internal
 * @nocollapse
 */
ChangeDetectorRef.__NG_ELEMENT_ID__ = (/**
 * @return {?}
 */
() => SWITCH_CHANGE_DETECTOR_REF_FACTORY());
if (false) {
    /**
     * \@internal
     * @nocollapse
     * @type {?}
     */
    ChangeDetectorRef.__NG_ELEMENT_ID__;
    /**
     * When a view uses the {\@link ChangeDetectionStrategy#OnPush OnPush} (checkOnce)
     * change detection strategy, explicitly marks the view as changed so that
     * it can be checked again.
     *
     * Components are normally marked as dirty (in need of rerendering) when inputs
     * have changed or events have fired in the view. Call this method to ensure that
     * a component is checked even if these triggers have not occured.
     *
     * <!-- TODO: Add a link to a chapter on OnPush components -->
     *
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.markForCheck = function () { };
    /**
     * Detaches this view from the change-detection tree.
     * A detached view is  not checked until it is reattached.
     * Use in combination with `detectChanges()` to implement local change detection checks.
     *
     * Detached views are not checked during change detection runs until they are
     * re-attached, even if they are marked as dirty.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
     *
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.detach = function () { };
    /**
     * Checks this view and its children. Use in combination with {\@link ChangeDetectorRef#detach
     * detach}
     * to implement local change detection checks.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
     *
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.detectChanges = function () { };
    /**
     * Checks the change detector and its children, and throws if any changes are detected.
     *
     * Use in development mode to verify that running change detection doesn't introduce
     * other changes.
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.checkNoChanges = function () { };
    /**
     * Re-attaches the previously detached view to the change detection tree.
     * Views are attached to the tree by default.
     *
     * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
     *
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.reattach = function () { };
}
/** @type {?} */
export const SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ = render3InjectChangeDetectorRef;
/** @type {?} */
const SWITCH_CHANGE_DETECTOR_REF_FACTORY__PRE_R3__ = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => { });
const ɵ0 = SWITCH_CHANGE_DETECTOR_REF_FACTORY__PRE_R3__;
/** @type {?} */
const SWITCH_CHANGE_DETECTOR_REF_FACTORY = SWITCH_CHANGE_DETECTOR_REF_FACTORY__PRE_R3__;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdG9yX3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsdUJBQXVCLElBQUksOEJBQThCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qy9HLE1BQU0sT0FBZ0IsaUJBQWlCOzs7Ozs7QUE2RDlCLG1DQUFpQjs7O0FBQTRCLEdBQUcsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEVBQUM7Ozs7Ozs7SUFBL0Ysb0NBQStGOzs7Ozs7Ozs7Ozs7Ozs7SUFoRC9GLDJEQUE4Qjs7Ozs7Ozs7Ozs7Ozs7O0lBYzlCLHFEQUF3Qjs7Ozs7Ozs7Ozs7O0lBV3hCLDREQUErQjs7Ozs7Ozs7O0lBUS9CLDZEQUFnQzs7Ozs7Ozs7OztJQVNoQyx1REFBMEI7OztBQVc1QixNQUFNLE9BQU8sNkNBQTZDLEdBQUcsOEJBQThCOztNQUNyRiw0Q0FBNEM7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBVyxFQUFPLEVBQUUsR0FBRSxDQUFDLENBQUE7OztNQUMxRSxrQ0FBa0MsR0FDcEMsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2luamVjdENoYW5nZURldGVjdG9yUmVmIGFzIHJlbmRlcjNJbmplY3RDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi4vcmVuZGVyMy92aWV3X2VuZ2luZV9jb21wYXRpYmlsaXR5JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBBbmd1bGFyIFZpZXdzLCBwcm92aWRlcyBjaGFuZ2UgZGV0ZWN0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gKiBBIGNoYW5nZS1kZXRlY3Rpb24gdHJlZSBjb2xsZWN0cyBhbGwgdmlld3MgdGhhdCBhcmUgdG8gYmUgY2hlY2tlZCBmb3IgY2hhbmdlcy5cbiAqIFVzZSB0aGUgbWV0aG9kcyB0byBhZGQgYW5kIHJlbW92ZSB2aWV3cyBmcm9tIHRoZSB0cmVlLCBpbml0aWF0ZSBjaGFuZ2UtZGV0ZWN0aW9uLFxuICogYW5kIGV4cGxpY2l0bHkgbWFyayB2aWV3cyBhcyBfZGlydHlfLCBtZWFuaW5nIHRoYXQgdGhleSBoYXZlIGNoYW5nZWQgYW5kIG5lZWQgdG8gYmUgcmVyZW5kZXJlZC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgZGVtb25zdHJhdGUgaG93IHRvIG1vZGlmeSBkZWZhdWx0IGNoYW5nZS1kZXRlY3Rpb24gYmVoYXZpb3JcbiAqIHRvIHBlcmZvcm0gZXhwbGljaXQgZGV0ZWN0aW9uIHdoZW4gbmVlZGVkLlxuICpcbiAqICMjIyBVc2UgYG1hcmtGb3JDaGVjaygpYCB3aXRoIGBDaGVja09uY2VgIHN0cmF0ZWd5XG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNldHMgdGhlIGBPblB1c2hgIGNoYW5nZS1kZXRlY3Rpb24gc3RyYXRlZ3kgZm9yIGEgY29tcG9uZW50XG4gKiAoYENoZWNrT25jZWAsIHJhdGhlciB0aGFuIHRoZSBkZWZhdWx0IGBDaGVja0Fsd2F5c2ApLCB0aGVuIGZvcmNlcyBhIHNlY29uZCBjaGVja1xuICogYWZ0ZXIgYW4gaW50ZXJ2YWwuIFNlZSBbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9HQzUxMmI/cD1wcmV2aWV3KS5cbiAqXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb3JlL3RzL2NoYW5nZV9kZXRlY3QvY2hhbmdlLWRldGVjdGlvbi50c1wiXG4gKiByZWdpb249XCJtYXJrLWZvci1jaGVja1wiPjwvY29kZS1leGFtcGxlPlxuICpcbiAqICMjIyBEZXRhY2ggY2hhbmdlIGRldGVjdG9yIHRvIGxpbWl0IGhvdyBvZnRlbiBjaGVjayBvY2N1cnNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIGNvbXBvbmVudCB3aXRoIGEgbGFyZ2UgbGlzdCBvZiByZWFkLW9ubHkgZGF0YVxuICogdGhhdCBpcyBleHBlY3RlZCB0byBjaGFuZ2UgY29uc3RhbnRseSwgbWFueSB0aW1lcyBwZXIgc2Vjb25kLlxuICogVG8gaW1wcm92ZSBwZXJmb3JtYW5jZSwgd2Ugd2FudCB0byBjaGVjayBhbmQgdXBkYXRlIHRoZSBsaXN0XG4gKiBsZXNzIG9mdGVuIHRoYW4gdGhlIGNoYW5nZXMgYWN0dWFsbHkgb2NjdXIuIFRvIGRvIHRoYXQsIHdlIGRldGFjaFxuICogdGhlIGNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3RvciBhbmQgcGVyZm9ybSBhbiBleHBsaWNpdCBsb2NhbCBjaGVjayBldmVyeSBmaXZlIHNlY29uZHMuXG4gKlxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29yZS90cy9jaGFuZ2VfZGV0ZWN0L2NoYW5nZS1kZXRlY3Rpb24udHNcIiByZWdpb249XCJkZXRhY2hcIj48L2NvZGUtZXhhbXBsZT5cbiAqXG4gKlxuICogIyMjIFJlYXR0YWNoaW5nIGEgZGV0YWNoZWQgY29tcG9uZW50XG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNyZWF0ZXMgYSBjb21wb25lbnQgZGlzcGxheWluZyBsaXZlIGRhdGEuXG4gKiBUaGUgY29tcG9uZW50IGRldGFjaGVzIGl0cyBjaGFuZ2UgZGV0ZWN0b3IgZnJvbSB0aGUgbWFpbiBjaGFuZ2UgZGV0ZWN0b3IgdHJlZVxuICogd2hlbiB0aGUgYGxpdmVgIHByb3BlcnR5IGlzIHNldCB0byBmYWxzZSwgYW5kIHJlYXR0YWNoZXMgaXQgd2hlbiB0aGUgcHJvcGVydHlcbiAqIGJlY29tZXMgdHJ1ZS5cbiAqXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb3JlL3RzL2NoYW5nZV9kZXRlY3QvY2hhbmdlLWRldGVjdGlvbi50c1wiIHJlZ2lvbj1cInJlYXR0YWNoXCI+PC9jb2RlLWV4YW1wbGU+XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICAvKipcbiAgICogV2hlbiBhIHZpZXcgdXNlcyB0aGUge0BsaW5rIENoYW5nZURldGVjdGlvblN0cmF0ZWd5I09uUHVzaCBPblB1c2h9IChjaGVja09uY2UpXG4gICAqIGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3ksIGV4cGxpY2l0bHkgbWFya3MgdGhlIHZpZXcgYXMgY2hhbmdlZCBzbyB0aGF0XG4gICAqIGl0IGNhbiBiZSBjaGVja2VkIGFnYWluLlxuICAgKlxuICAgKiBDb21wb25lbnRzIGFyZSBub3JtYWxseSBtYXJrZWQgYXMgZGlydHkgKGluIG5lZWQgb2YgcmVyZW5kZXJpbmcpIHdoZW4gaW5wdXRzXG4gICAqIGhhdmUgY2hhbmdlZCBvciBldmVudHMgaGF2ZSBmaXJlZCBpbiB0aGUgdmlldy4gQ2FsbCB0aGlzIG1ldGhvZCB0byBlbnN1cmUgdGhhdFxuICAgKiBhIGNvbXBvbmVudCBpcyBjaGVja2VkIGV2ZW4gaWYgdGhlc2UgdHJpZ2dlcnMgaGF2ZSBub3Qgb2NjdXJlZC5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBPblB1c2ggY29tcG9uZW50cyAtLT5cbiAgICpcbiAgICovXG4gIGFic3RyYWN0IG1hcmtGb3JDaGVjaygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyB0aGlzIHZpZXcgZnJvbSB0aGUgY2hhbmdlLWRldGVjdGlvbiB0cmVlLlxuICAgKiBBIGRldGFjaGVkIHZpZXcgaXMgIG5vdCBjaGVja2VkIHVudGlsIGl0IGlzIHJlYXR0YWNoZWQuXG4gICAqIFVzZSBpbiBjb21iaW5hdGlvbiB3aXRoIGBkZXRlY3RDaGFuZ2VzKClgIHRvIGltcGxlbWVudCBsb2NhbCBjaGFuZ2UgZGV0ZWN0aW9uIGNoZWNrcy5cbiAgICpcbiAgICogRGV0YWNoZWQgdmlld3MgYXJlIG5vdCBjaGVja2VkIGR1cmluZyBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMgdW50aWwgdGhleSBhcmVcbiAgICogcmUtYXR0YWNoZWQsIGV2ZW4gaWYgdGhleSBhcmUgbWFya2VkIGFzIGRpcnR5LlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gYSBjaGFwdGVyIG9uIGRldGFjaC9yZWF0dGFjaC9sb2NhbCBkaWdlc3QgLS0+XG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGl2ZSBkZW1vIG9uY2UgcmVmLmRldGVjdENoYW5nZXMgaXMgbWVyZ2VkIGludG8gbWFzdGVyIC0tPlxuICAgKlxuICAgKi9cbiAgYWJzdHJhY3QgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGlzIHZpZXcgYW5kIGl0cyBjaGlsZHJlbi4gVXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaFxuICAgKiBkZXRhY2h9XG4gICAqIHRvIGltcGxlbWVudCBsb2NhbCBjaGFuZ2UgZGV0ZWN0aW9uIGNoZWNrcy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBkZXRhY2gvcmVhdHRhY2gvbG9jYWwgZGlnZXN0IC0tPlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpdmUgZGVtbyBvbmNlIHJlZi5kZXRlY3RDaGFuZ2VzIGlzIG1lcmdlZCBpbnRvIG1hc3RlciAtLT5cbiAgICpcbiAgICovXG4gIGFic3RyYWN0IGRldGVjdENoYW5nZXMoKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgYW5kIGl0cyBjaGlsZHJlbiwgYW5kIHRocm93cyBpZiBhbnkgY2hhbmdlcyBhcmUgZGV0ZWN0ZWQuXG4gICAqXG4gICAqIFVzZSBpbiBkZXZlbG9wbWVudCBtb2RlIHRvIHZlcmlmeSB0aGF0IHJ1bm5pbmcgY2hhbmdlIGRldGVjdGlvbiBkb2Vzbid0IGludHJvZHVjZVxuICAgKiBvdGhlciBjaGFuZ2VzLlxuICAgKi9cbiAgYWJzdHJhY3QgY2hlY2tOb0NoYW5nZXMoKTogdm9pZDtcblxuICAvKipcbiAgICogUmUtYXR0YWNoZXMgdGhlIHByZXZpb3VzbHkgZGV0YWNoZWQgdmlldyB0byB0aGUgY2hhbmdlIGRldGVjdGlvbiB0cmVlLlxuICAgKiBWaWV3cyBhcmUgYXR0YWNoZWQgdG8gdGhlIHRyZWUgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBkZXRhY2gvcmVhdHRhY2gvbG9jYWwgZGlnZXN0IC0tPlxuICAgKlxuICAgKi9cbiAgYWJzdHJhY3QgcmVhdHRhY2goKTogdm9pZDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgX19OR19FTEVNRU5UX0lEX186ICgpID0+IENoYW5nZURldGVjdG9yUmVmID0gKCkgPT4gU1dJVENIX0NIQU5HRV9ERVRFQ1RPUl9SRUZfRkFDVE9SWSgpO1xufVxuXG5cblxuZXhwb3J0IGNvbnN0IFNXSVRDSF9DSEFOR0VfREVURUNUT1JfUkVGX0ZBQ1RPUllfX1BPU1RfUjNfXyA9IHJlbmRlcjNJbmplY3RDaGFuZ2VEZXRlY3RvclJlZjtcbmNvbnN0IFNXSVRDSF9DSEFOR0VfREVURUNUT1JfUkVGX0ZBQ1RPUllfX1BSRV9SM19fID0gKC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHt9O1xuY29uc3QgU1dJVENIX0NIQU5HRV9ERVRFQ1RPUl9SRUZfRkFDVE9SWTogdHlwZW9mIHJlbmRlcjNJbmplY3RDaGFuZ2VEZXRlY3RvclJlZiA9XG4gICAgU1dJVENIX0NIQU5HRV9ERVRFQ1RPUl9SRUZfRkFDVE9SWV9fUFJFX1IzX187XG4iXX0=