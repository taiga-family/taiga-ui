/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/component_factory_resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { stringify } from '../util/stringify';
import { ComponentFactory } from './component_factory';
/**
 * @param {?} component
 * @return {?}
 */
export function noComponentFactoryError(component) {
    /** @type {?} */
    const error = Error(`No component factory found for ${stringify(component)}. Did you add it to @NgModule.entryComponents?`);
    ((/** @type {?} */ (error)))[ERROR_COMPONENT] = component;
    return error;
}
/** @type {?} */
const ERROR_COMPONENT = 'ngComponent';
/**
 * @param {?} error
 * @return {?}
 */
export function getComponent(error) {
    return ((/** @type {?} */ (error)))[ERROR_COMPONENT];
}
class _NullComponentFactoryResolver {
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    resolveComponentFactory(component) {
        throw noComponentFactoryError(component);
    }
}
/**
 * A simple registry that maps `Components` to generated `ComponentFactory` classes
 * that can be used to create instances of components.
 * Use to obtain the factory for a given component type,
 * then use the factory's `create()` method to create a component of that type.
 *
 * @see [Dynamic Components](guide/dynamic-component-loader)
 * \@publicApi
 * @abstract
 */
export class ComponentFactoryResolver {
}
ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
if (false) {
    /** @type {?} */
    ComponentFactoryResolver.NULL;
    /**
     * Retrieves the factory object that creates a component of the given type.
     * @abstract
     * @template T
     * @param {?} component The component type.
     * @return {?}
     */
    ComponentFactoryResolver.prototype.resolveComponentFactory = function (component) { };
}
export class CodegenComponentFactoryResolver {
    /**
     * @param {?} factories
     * @param {?} _parent
     * @param {?} _ngModule
     */
    constructor(factories, _parent, _ngModule) {
        this._parent = _parent;
        this._ngModule = _ngModule;
        this._factories = new Map();
        for (let i = 0; i < factories.length; i++) {
            /** @type {?} */
            const factory = factories[i];
            this._factories.set(factory.componentType, factory);
        }
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    resolveComponentFactory(component) {
        /** @type {?} */
        let factory = this._factories.get(component);
        if (!factory && this._parent) {
            factory = this._parent.resolveComponentFactory(component);
        }
        if (!factory) {
            throw noComponentFactoryError(component);
        }
        return new ComponentFactoryBoundToModule(factory, this._ngModule);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CodegenComponentFactoryResolver.prototype._factories;
    /**
     * @type {?}
     * @private
     */
    CodegenComponentFactoryResolver.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    CodegenComponentFactoryResolver.prototype._ngModule;
}
/**
 * @template C
 */
export class ComponentFactoryBoundToModule extends ComponentFactory {
    /**
     * @param {?} factory
     * @param {?} ngModule
     */
    constructor(factory, ngModule) {
        super();
        this.factory = factory;
        this.ngModule = ngModule;
        this.selector = factory.selector;
        this.componentType = factory.componentType;
        this.ngContentSelectors = factory.ngContentSelectors;
        this.inputs = factory.inputs;
        this.outputs = factory.outputs;
    }
    /**
     * @param {?} injector
     * @param {?=} projectableNodes
     * @param {?=} rootSelectorOrNode
     * @param {?=} ngModule
     * @return {?}
     */
    create(injector, projectableNodes, rootSelectorOrNode, ngModule) {
        return this.factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule || this.ngModule);
    }
}
if (false) {
    /** @type {?} */
    ComponentFactoryBoundToModule.prototype.selector;
    /** @type {?} */
    ComponentFactoryBoundToModule.prototype.componentType;
    /** @type {?} */
    ComponentFactoryBoundToModule.prototype.ngContentSelectors;
    /** @type {?} */
    ComponentFactoryBoundToModule.prototype.inputs;
    /** @type {?} */
    ComponentFactoryBoundToModule.prototype.outputs;
    /**
     * @type {?}
     * @private
     */
    ComponentFactoryBoundToModule.prototype.factory;
    /**
     * @type {?}
     * @private
     */
    ComponentFactoryBoundToModule.prototype.ngModule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBZSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUduRSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsU0FBbUI7O1VBQ25ELEtBQUssR0FBRyxLQUFLLENBQUMsa0NBQ2hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0RBQWdELENBQUM7SUFDekUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM1QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O01BRUssZUFBZSxHQUFHLGFBQWE7Ozs7O0FBRXJDLE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBWTtJQUN2QyxPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBR0QsTUFBTSw2QkFBNkI7Ozs7OztJQUNqQyx1QkFBdUIsQ0FBSSxTQUFtQztRQUM1RCxNQUFNLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7QUFXRCxNQUFNLE9BQWdCLHdCQUF3Qjs7QUFDckMsNkJBQUksR0FBNkIsSUFBSSw2QkFBNkIsRUFBRSxDQUFDOzs7SUFBNUUsOEJBQTRFOzs7Ozs7OztJQUs1RSxzRkFBNkU7O0FBRy9FLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQUcxQyxZQUNJLFNBQWtDLEVBQVUsT0FBaUMsRUFDckUsU0FBMkI7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNyRSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUovQixlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFLekQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNuQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsdUJBQXVCLENBQUksU0FBbUM7O1lBQ3hELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0Y7Ozs7OztJQXJCQyxxREFBMkQ7Ozs7O0lBR25CLGtEQUF5Qzs7Ozs7SUFDN0Usb0RBQW1DOzs7OztBQW1CekMsTUFBTSxPQUFPLDZCQUFpQyxTQUFRLGdCQUFtQjs7Ozs7SUFPdkUsWUFBb0IsT0FBNEIsRUFBVSxRQUEwQjtRQUNsRixLQUFLLEVBQUUsQ0FBQztRQURVLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFFbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7SUFFRCxNQUFNLENBQ0YsUUFBa0IsRUFBRSxnQkFBMEIsRUFBRSxrQkFBK0IsRUFDL0UsUUFBMkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDdEIsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNGOzs7SUFyQkMsaURBQTBCOztJQUMxQixzREFBa0M7O0lBQ2xDLDJEQUFzQzs7SUFDdEMsK0NBQTREOztJQUM1RCxnREFBNkQ7Ozs7O0lBRWpELGdEQUFvQzs7Ozs7SUFBRSxpREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRSZWZ9IGZyb20gJy4vY29tcG9uZW50X2ZhY3RvcnknO1xuaW1wb3J0IHtOZ01vZHVsZVJlZn0gZnJvbSAnLi9uZ19tb2R1bGVfZmFjdG9yeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub0NvbXBvbmVudEZhY3RvcnlFcnJvcihjb21wb25lbnQ6IEZ1bmN0aW9uKSB7XG4gIGNvbnN0IGVycm9yID0gRXJyb3IoYE5vIGNvbXBvbmVudCBmYWN0b3J5IGZvdW5kIGZvciAke1xuICAgICAgc3RyaW5naWZ5KGNvbXBvbmVudCl9LiBEaWQgeW91IGFkZCBpdCB0byBATmdNb2R1bGUuZW50cnlDb21wb25lbnRzP2ApO1xuICAoZXJyb3IgYXMgYW55KVtFUlJPUl9DT01QT05FTlRdID0gY29tcG9uZW50O1xuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IEVSUk9SX0NPTVBPTkVOVCA9ICduZ0NvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnQoZXJyb3I6IEVycm9yKTogVHlwZTxhbnk+IHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX0NPTVBPTkVOVF07XG59XG5cblxuY2xhc3MgX051bGxDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgaW1wbGVtZW50cyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xuICByZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IHtuZXcoLi4uYXJnczogYW55W10pOiBUfSk6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHRocm93IG5vQ29tcG9uZW50RmFjdG9yeUVycm9yKGNvbXBvbmVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHNpbXBsZSByZWdpc3RyeSB0aGF0IG1hcHMgYENvbXBvbmVudHNgIHRvIGdlbmVyYXRlZCBgQ29tcG9uZW50RmFjdG9yeWAgY2xhc3Nlc1xuICogdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGNvbXBvbmVudHMuXG4gKiBVc2UgdG8gb2J0YWluIHRoZSBmYWN0b3J5IGZvciBhIGdpdmVuIGNvbXBvbmVudCB0eXBlLFxuICogdGhlbiB1c2UgdGhlIGZhY3RvcnkncyBgY3JlYXRlKClgIG1ldGhvZCB0byBjcmVhdGUgYSBjb21wb25lbnQgb2YgdGhhdCB0eXBlLlxuICpcbiAqIEBzZWUgW0R5bmFtaWMgQ29tcG9uZW50c10oZ3VpZGUvZHluYW1pYy1jb21wb25lbnQtbG9hZGVyKVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHtcbiAgc3RhdGljIE5VTEw6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IG5ldyBfTnVsbENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcigpO1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmYWN0b3J5IG9iamVjdCB0aGF0IGNyZWF0ZXMgYSBjb21wb25lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgYWJzdHJhY3QgcmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbn1cblxuZXhwb3J0IGNsYXNzIENvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgaW1wbGVtZW50cyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xuICBwcml2YXRlIF9mYWN0b3JpZXMgPSBuZXcgTWFwPGFueSwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgZmFjdG9yaWVzOiBDb21wb25lbnRGYWN0b3J5PGFueT5bXSwgcHJpdmF0ZSBfcGFyZW50OiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIF9uZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Pikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gZmFjdG9yaWVzW2ldO1xuICAgICAgdGhpcy5fZmFjdG9yaWVzLnNldChmYWN0b3J5LmNvbXBvbmVudFR5cGUsIGZhY3RvcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDoge25ldyguLi5hcmdzOiBhbnlbXSk6IFR9KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgbGV0IGZhY3RvcnkgPSB0aGlzLl9mYWN0b3JpZXMuZ2V0KGNvbXBvbmVudCk7XG4gICAgaWYgKCFmYWN0b3J5ICYmIHRoaXMuX3BhcmVudCkge1xuICAgICAgZmFjdG9yeSA9IHRoaXMuX3BhcmVudC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIH1cbiAgICBpZiAoIWZhY3RvcnkpIHtcbiAgICAgIHRocm93IG5vQ29tcG9uZW50RmFjdG9yeUVycm9yKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ29tcG9uZW50RmFjdG9yeUJvdW5kVG9Nb2R1bGUoZmFjdG9yeSwgdGhpcy5fbmdNb2R1bGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGYWN0b3J5Qm91bmRUb01vZHVsZTxDPiBleHRlbmRzIENvbXBvbmVudEZhY3Rvcnk8Qz4ge1xuICByZWFkb25seSBzZWxlY3Rvcjogc3RyaW5nO1xuICByZWFkb25seSBjb21wb25lbnRUeXBlOiBUeXBlPGFueT47XG4gIHJlYWRvbmx5IG5nQ29udGVudFNlbGVjdG9yczogc3RyaW5nW107XG4gIHJlYWRvbmx5IGlucHV0czoge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdO1xuICByZWFkb25seSBvdXRwdXRzOiB7cHJvcE5hbWU6IHN0cmluZywgdGVtcGxhdGVOYW1lOiBzdHJpbmd9W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEM+LCBwcml2YXRlIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gZmFjdG9yeS5zZWxlY3RvcjtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBmYWN0b3J5LmNvbXBvbmVudFR5cGU7XG4gICAgdGhpcy5uZ0NvbnRlbnRTZWxlY3RvcnMgPSBmYWN0b3J5Lm5nQ29udGVudFNlbGVjdG9ycztcbiAgICB0aGlzLmlucHV0cyA9IGZhY3RvcnkuaW5wdXRzO1xuICAgIHRoaXMub3V0cHV0cyA9IGZhY3Rvcnkub3V0cHV0cztcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICAgIGluamVjdG9yOiBJbmplY3RvciwgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW10sIHJvb3RTZWxlY3Rvck9yTm9kZT86IHN0cmluZ3xhbnksXG4gICAgICBuZ01vZHVsZT86IE5nTW9kdWxlUmVmPGFueT4pOiBDb21wb25lbnRSZWY8Qz4ge1xuICAgIHJldHVybiB0aGlzLmZhY3RvcnkuY3JlYXRlKFxuICAgICAgICBpbmplY3RvciwgcHJvamVjdGFibGVOb2Rlcywgcm9vdFNlbGVjdG9yT3JOb2RlLCBuZ01vZHVsZSB8fCB0aGlzLm5nTW9kdWxlKTtcbiAgfVxufVxuIl19