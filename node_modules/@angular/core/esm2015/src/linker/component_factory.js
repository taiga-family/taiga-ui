/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/component_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents a component created by a `ComponentFactory`.
 * Provides access to the component instance and related objects,
 * and provides the means of destroying the instance.
 *
 * \@publicApi
 * @abstract
 * @template C
 */
export class ComponentRef {
}
if (false) {
    /**
     * The host or anchor [element](guide/glossary#element) for this component instance.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.location = function () { };
    /**
     * The [dependency injector](guide/glossary#injector) for this component instance.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.injector = function () { };
    /**
     * This component instance.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.instance = function () { };
    /**
     * The [host view](guide/glossary#view-tree) defined by the template
     * for this component instance.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.hostView = function () { };
    /**
     * The change detector for this component instance.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.changeDetectorRef = function () { };
    /**
     * The type of this component (as created by a `ComponentFactory` class).
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.componentType = function () { };
    /**
     * Destroys the component instance and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.destroy = function () { };
    /**
     * A lifecycle hook that provides additional developer-defined cleanup
     * functionality for the component.
     * @abstract
     * @param {?} callback A handler function that cleans up developer-defined data
     * associated with this component. Called when the `destroy()` method is invoked.
     * @return {?}
     */
    ComponentRef.prototype.onDestroy = function (callback) { };
}
/**
 * Base class for a factory that can create a component dynamically.
 * Instantiate a factory for a given type of component with `resolveComponentFactory()`.
 * Use the resulting `ComponentFactory.create()` method to create a component of that type.
 *
 * @see [Dynamic Components](guide/dynamic-component-loader)
 *
 * \@publicApi
 * @abstract
 * @template C
 */
export class ComponentFactory {
}
if (false) {
    /**
     * The component's HTML selector.
     * @abstract
     * @return {?}
     */
    ComponentFactory.prototype.selector = function () { };
    /**
     * The type of component the factory will create.
     * @abstract
     * @return {?}
     */
    ComponentFactory.prototype.componentType = function () { };
    /**
     * Selector for all <ng-content> elements in the component.
     * @abstract
     * @return {?}
     */
    ComponentFactory.prototype.ngContentSelectors = function () { };
    /**
     * The inputs of the component.
     * @abstract
     * @return {?}
     */
    ComponentFactory.prototype.inputs = function () { };
    /**
     * The outputs of the component.
     * @abstract
     * @return {?}
     */
    ComponentFactory.prototype.outputs = function () { };
    /**
     * Creates a new component.
     * @abstract
     * @param {?} injector
     * @param {?=} projectableNodes
     * @param {?=} rootSelectorOrNode
     * @param {?=} ngModule
     * @return {?}
     */
    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode, ngModule) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLE1BQU0sT0FBZ0IsWUFBWTtDQTRDakM7Ozs7Ozs7SUF4Q0Msa0RBQW9DOzs7Ozs7SUFLcEMsa0RBQWtDOzs7Ozs7SUFLbEMsa0RBQTJCOzs7Ozs7O0lBTTNCLGtEQUFpQzs7Ozs7O0lBS2pDLDJEQUFvRDs7Ozs7O0lBS3BELHVEQUF3Qzs7Ozs7O0lBS3hDLGlEQUF5Qjs7Ozs7Ozs7O0lBUXpCLDJEQUE2Qzs7Ozs7Ozs7Ozs7OztBQVkvQyxNQUFNLE9BQWdCLGdCQUFnQjtDQTJCckM7Ozs7Ozs7SUF2QkMsc0RBQWdDOzs7Ozs7SUFJaEMsMkRBQXdDOzs7Ozs7SUFJeEMsZ0VBQTRDOzs7Ozs7SUFJNUMsb0RBQWtFOzs7Ozs7SUFJbEUscURBQW1FOzs7Ozs7Ozs7O0lBSW5FLDRHQUVrRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuXG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJy4vZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtOZ01vZHVsZVJlZn0gZnJvbSAnLi9uZ19tb2R1bGVfZmFjdG9yeSc7XG5pbXBvcnQge1ZpZXdSZWZ9IGZyb20gJy4vdmlld19yZWYnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb21wb25lbnQgY3JlYXRlZCBieSBhIGBDb21wb25lbnRGYWN0b3J5YC5cbiAqIFByb3ZpZGVzIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IGluc3RhbmNlIGFuZCByZWxhdGVkIG9iamVjdHMsXG4gKiBhbmQgcHJvdmlkZXMgdGhlIG1lYW5zIG9mIGRlc3Ryb3lpbmcgdGhlIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFJlZjxDPiB7XG4gIC8qKlxuICAgKiBUaGUgaG9zdCBvciBhbmNob3IgW2VsZW1lbnRdKGd1aWRlL2dsb3NzYXJ5I2VsZW1lbnQpIGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBsb2NhdGlvbigpOiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBUaGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3I7XG5cbiAgLyoqXG4gICAqIFRoaXMgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGluc3RhbmNlKCk6IEM7XG5cbiAgLyoqXG4gICAqIFRoZSBbaG9zdCB2aWV3XShndWlkZS9nbG9zc2FyeSN2aWV3LXRyZWUpIGRlZmluZWQgYnkgdGhlIHRlbXBsYXRlXG4gICAqIGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBob3N0VmlldygpOiBWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhbmdlIGRldGVjdG9yIGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBjaGFuZ2VEZXRlY3RvclJlZigpOiBDaGFuZ2VEZXRlY3RvclJlZjtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhpcyBjb21wb25lbnQgKGFzIGNyZWF0ZWQgYnkgYSBgQ29tcG9uZW50RmFjdG9yeWAgY2xhc3MpLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGNvbXBvbmVudFR5cGUoKTogVHlwZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgY29tcG9uZW50IGluc3RhbmNlIGFuZCBhbGwgb2YgdGhlIGRhdGEgc3RydWN0dXJlcyBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAqL1xuICBhYnN0cmFjdCBkZXN0cm95KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgbGlmZWN5Y2xlIGhvb2sgdGhhdCBwcm92aWRlcyBhZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIGNsZWFudXBcbiAgICogZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNhbGxiYWNrIEEgaGFuZGxlciBmdW5jdGlvbiB0aGF0IGNsZWFucyB1cCBkZXZlbG9wZXItZGVmaW5lZCBkYXRhXG4gICAqIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudC4gQ2FsbGVkIHdoZW4gdGhlIGBkZXN0cm95KClgIG1ldGhvZCBpcyBpbnZva2VkLlxuICAgKi9cbiAgYWJzdHJhY3Qgb25EZXN0cm95KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgYSBmYWN0b3J5IHRoYXQgY2FuIGNyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseS5cbiAqIEluc3RhbnRpYXRlIGEgZmFjdG9yeSBmb3IgYSBnaXZlbiB0eXBlIG9mIGNvbXBvbmVudCB3aXRoIGByZXNvbHZlQ29tcG9uZW50RmFjdG9yeSgpYC5cbiAqIFVzZSB0aGUgcmVzdWx0aW5nIGBDb21wb25lbnRGYWN0b3J5LmNyZWF0ZSgpYCBtZXRob2QgdG8gY3JlYXRlIGEgY29tcG9uZW50IG9mIHRoYXQgdHlwZS5cbiAqXG4gKiBAc2VlIFtEeW5hbWljIENvbXBvbmVudHNdKGd1aWRlL2R5bmFtaWMtY29tcG9uZW50LWxvYWRlcilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRGYWN0b3J5PEM+IHtcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQncyBIVE1MIHNlbGVjdG9yLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IHNlbGVjdG9yKCk6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0aGUgZmFjdG9yeSB3aWxsIGNyZWF0ZS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBjb21wb25lbnRUeXBlKCk6IFR5cGU8YW55PjtcbiAgLyoqXG4gICAqIFNlbGVjdG9yIGZvciBhbGwgPG5nLWNvbnRlbnQ+IGVsZW1lbnRzIGluIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgbmdDb250ZW50U2VsZWN0b3JzKCk6IHN0cmluZ1tdO1xuICAvKipcbiAgICogVGhlIGlucHV0cyBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGlucHV0cygpOiB7cHJvcE5hbWU6IHN0cmluZywgdGVtcGxhdGVOYW1lOiBzdHJpbmd9W107XG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0cyBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IG91dHB1dHMoKToge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdO1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb21wb25lbnQuXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdLCByb290U2VsZWN0b3JPck5vZGU/OiBzdHJpbmd8YW55LFxuICAgICAgbmdNb2R1bGU/OiBOZ01vZHVsZVJlZjxhbnk+KTogQ29tcG9uZW50UmVmPEM+O1xufVxuIl19