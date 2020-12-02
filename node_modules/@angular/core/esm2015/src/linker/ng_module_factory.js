/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/ng_module_factory.ts
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
 * Represents an instance of an NgModule created via a {\@link NgModuleFactory}.
 *
 * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
 * NgModule Instance.
 *
 * \@publicApi
 * @abstract
 * @template T
 */
export class NgModuleRef {
}
if (false) {
    /**
     * The injector that contains all of the providers of the NgModule.
     * @abstract
     * @return {?}
     */
    NgModuleRef.prototype.injector = function () { };
    /**
     * The ComponentFactoryResolver to get hold of the ComponentFactories
     * declared in the `entryComponents` property of the module.
     * @abstract
     * @return {?}
     */
    NgModuleRef.prototype.componentFactoryResolver = function () { };
    /**
     * The NgModule instance.
     * @abstract
     * @return {?}
     */
    NgModuleRef.prototype.instance = function () { };
    /**
     * Destroys the module instance and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    NgModuleRef.prototype.destroy = function () { };
    /**
     * Allows to register a callback that will be called when the module is destroyed.
     * @abstract
     * @param {?} callback
     * @return {?}
     */
    NgModuleRef.prototype.onDestroy = function (callback) { };
}
/**
 * @record
 * @template T
 */
export function InternalNgModuleRef() { }
if (false) {
    /** @type {?} */
    InternalNgModuleRef.prototype._bootstrapComponents;
}
/**
 * \@publicApi
 * @abstract
 * @template T
 */
export class NgModuleFactory {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    NgModuleFactory.prototype.moduleType = function () { };
    /**
     * @abstract
     * @param {?} parentInjector
     * @return {?}
     */
    NgModuleFactory.prototype.create = function (parentInjector) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxNQUFNLE9BQWdCLFdBQVc7Q0EwQmhDOzs7Ozs7O0lBdEJDLGlEQUFrQzs7Ozs7OztJQU1sQyxpRUFBa0U7Ozs7OztJQUtsRSxpREFBMkI7Ozs7OztJQUszQixnREFBeUI7Ozs7Ozs7SUFLekIsMERBQStDOzs7Ozs7QUFHakQseUNBSUM7OztJQURDLG1EQUFrQzs7Ozs7OztBQU1wQyxNQUFNLE9BQWdCLGVBQWU7Q0FHcEM7Ozs7OztJQUZDLHVEQUFtQzs7Ozs7O0lBQ25DLGlFQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5cbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSBmcm9tICcuL2NvbXBvbmVudF9mYWN0b3J5X3Jlc29sdmVyJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW5zdGFuY2Ugb2YgYW4gTmdNb2R1bGUgY3JlYXRlZCB2aWEgYSB7QGxpbmsgTmdNb2R1bGVGYWN0b3J5fS5cbiAqXG4gKiBgTmdNb2R1bGVSZWZgIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgTmdNb2R1bGUgSW5zdGFuY2UgYXMgd2VsbCBvdGhlciBvYmplY3RzIHJlbGF0ZWQgdG8gdGhpc1xuICogTmdNb2R1bGUgSW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdNb2R1bGVSZWY8VD4ge1xuICAvKipcbiAgICogVGhlIGluamVjdG9yIHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBwcm92aWRlcnMgb2YgdGhlIE5nTW9kdWxlLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBUaGUgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHRvIGdldCBob2xkIG9mIHRoZSBDb21wb25lbnRGYWN0b3JpZXNcbiAgICogZGVjbGFyZWQgaW4gdGhlIGBlbnRyeUNvbXBvbmVudHNgIHByb3BlcnR5IG9mIHRoZSBtb2R1bGUuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyKCk6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcblxuICAvKipcbiAgICogVGhlIE5nTW9kdWxlIGluc3RhbmNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGluc3RhbmNlKCk6IFQ7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBtb2R1bGUgaW5zdGFuY2UgYW5kIGFsbCBvZiB0aGUgZGF0YSBzdHJ1Y3R1cmVzIGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgICovXG4gIGFic3RyYWN0IGRlc3Ryb3koKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHRvIHJlZ2lzdGVyIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBtb2R1bGUgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgYWJzdHJhY3Qgb25EZXN0cm95KGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbE5nTW9kdWxlUmVmPFQ+IGV4dGVuZHMgTmdNb2R1bGVSZWY8VD4ge1xuICAvLyBOb3RlOiB3ZSBhcmUgdXNpbmcgdGhlIHByZWZpeCBfIGFzIE5nTW9kdWxlRGF0YSBpcyBhbiBOZ01vZHVsZVJlZiBhbmQgdGhlcmVmb3JlIGRpcmVjdGx5XG4gIC8vIGV4cG9zZWQgdG8gdGhlIHVzZXIuXG4gIF9ib290c3RyYXBDb21wb25lbnRzOiBUeXBlPGFueT5bXTtcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ01vZHVsZUZhY3Rvcnk8VD4ge1xuICBhYnN0cmFjdCBnZXQgbW9kdWxlVHlwZSgpOiBUeXBlPFQ+O1xuICBhYnN0cmFjdCBjcmVhdGUocGFyZW50SW5qZWN0b3I6IEluamVjdG9yfG51bGwpOiBOZ01vZHVsZVJlZjxUPjtcbn1cbiJdfQ==