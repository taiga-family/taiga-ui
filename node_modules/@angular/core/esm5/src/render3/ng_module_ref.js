/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Injector } from '../di/injector';
import { INJECTOR } from '../di/injector_compatibility';
import { InjectFlags } from '../di/interface/injector';
import { createInjectorWithoutInjectorInstances } from '../di/r3_injector';
import { ComponentFactoryResolver as viewEngine_ComponentFactoryResolver } from '../linker/component_factory_resolver';
import { NgModuleFactory as viewEngine_NgModuleFactory, NgModuleRef as viewEngine_NgModuleRef } from '../linker/ng_module_factory';
import { registerNgModuleType } from '../linker/ng_module_factory_registration';
import { assertDefined } from '../util/assert';
import { stringify } from '../util/stringify';
import { ComponentFactoryResolver } from './component_ref';
import { getNgLocaleIdDef, getNgModuleDef } from './definition';
import { setLocaleId } from './i18n';
import { maybeUnwrapFn } from './util/misc_utils';
var NgModuleRef = /** @class */ (function (_super) {
    __extends(NgModuleRef, _super);
    function NgModuleRef(ngModuleType, _parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        // tslint:disable-next-line:require-internal-with-underscore
        _this._bootstrapComponents = [];
        _this.injector = _this;
        _this.destroyCbs = [];
        // When bootstrapping a module we have a dependency graph that looks like this:
        // ApplicationRef -> ComponentFactoryResolver -> NgModuleRef. The problem is that if the
        // module being resolved tries to inject the ComponentFactoryResolver, it'll create a
        // circular dependency which will result in a runtime error, because the injector doesn't
        // exist yet. We work around the issue by creating the ComponentFactoryResolver ourselves
        // and providing it, rather than letting the injector resolve it.
        _this.componentFactoryResolver = new ComponentFactoryResolver(_this);
        var ngModuleDef = getNgModuleDef(ngModuleType);
        ngDevMode &&
            assertDefined(ngModuleDef, "NgModule '" + stringify(ngModuleType) + "' is not a subtype of 'NgModuleType'.");
        var ngLocaleIdDef = getNgLocaleIdDef(ngModuleType);
        ngLocaleIdDef && setLocaleId(ngLocaleIdDef);
        _this._bootstrapComponents = maybeUnwrapFn(ngModuleDef.bootstrap);
        _this._r3Injector = createInjectorWithoutInjectorInstances(ngModuleType, _parent, [
            { provide: viewEngine_NgModuleRef, useValue: _this }, {
                provide: viewEngine_ComponentFactoryResolver,
                useValue: _this.componentFactoryResolver
            }
        ], stringify(ngModuleType));
        // We need to resolve the injector types separately from the injector creation, because
        // the module might be trying to use this ref in its contructor for DI which will cause a
        // circular error that will eventually error out, because the injector isn't created yet.
        _this._r3Injector._resolveInjectorDefTypes();
        _this.instance = _this.get(ngModuleType);
        return _this;
    }
    NgModuleRef.prototype.get = function (token, notFoundValue, injectFlags) {
        if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
        if (injectFlags === void 0) { injectFlags = InjectFlags.Default; }
        if (token === Injector || token === viewEngine_NgModuleRef || token === INJECTOR) {
            return this;
        }
        return this._r3Injector.get(token, notFoundValue, injectFlags);
    };
    NgModuleRef.prototype.destroy = function () {
        ngDevMode && assertDefined(this.destroyCbs, 'NgModule already destroyed');
        var injector = this._r3Injector;
        !injector.destroyed && injector.destroy();
        this.destroyCbs.forEach(function (fn) { return fn(); });
        this.destroyCbs = null;
    };
    NgModuleRef.prototype.onDestroy = function (callback) {
        ngDevMode && assertDefined(this.destroyCbs, 'NgModule already destroyed');
        this.destroyCbs.push(callback);
    };
    return NgModuleRef;
}(viewEngine_NgModuleRef));
export { NgModuleRef };
var NgModuleFactory = /** @class */ (function (_super) {
    __extends(NgModuleFactory, _super);
    function NgModuleFactory(moduleType) {
        var _this = _super.call(this) || this;
        _this.moduleType = moduleType;
        var ngModuleDef = getNgModuleDef(moduleType);
        if (ngModuleDef !== null) {
            // Register the NgModule with Angular's module registry. The location (and hence timing) of
            // this call is critical to ensure this works correctly (modules get registered when expected)
            // without bloating bundles (modules are registered when otherwise not referenced).
            //
            // In View Engine, registration occurs in the .ngfactory.js file as a side effect. This has
            // several practical consequences:
            //
            // - If an .ngfactory file is not imported from, the module won't be registered (and can be
            //   tree shaken).
            // - If an .ngfactory file is imported from, the module will be registered even if an instance
            //   is not actually created (via `create` below).
            // - Since an .ngfactory file in View Engine references the .ngfactory files of the NgModule's
            //   imports,
            //
            // In Ivy, things are a bit different. .ngfactory files still exist for compatibility, but are
            // not a required API to use - there are other ways to obtain an NgModuleFactory for a given
            // NgModule. Thus, relying on a side effect in the .ngfactory file is not sufficient. Instead,
            // the side effect of registration is added here, in the constructor of NgModuleFactory,
            // ensuring no matter how a factory is created, the module is registered correctly.
            //
            // An alternative would be to include the registration side effect inline following the actual
            // NgModule definition. This also has the correct timing, but breaks tree-shaking - modules
            // will be registered and retained even if they're otherwise never referenced.
            registerNgModuleType(moduleType);
        }
        return _this;
    }
    NgModuleFactory.prototype.create = function (parentInjector) {
        return new NgModuleRef(this.moduleType, parentInjector);
    };
    return NgModuleFactory;
}(viewEngine_NgModuleFactory));
export { NgModuleFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvbmdfbW9kdWxlX3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNDQUFzQyxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFFckYsT0FBTyxFQUFDLHdCQUF3QixJQUFJLG1DQUFtQyxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckgsT0FBTyxFQUFzQixlQUFlLElBQUksMEJBQTBCLEVBQUUsV0FBVyxJQUFJLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdEosT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBTWhEO0lBQW9DLCtCQUF5QjtJQWlCM0QscUJBQVksWUFBcUIsRUFBUyxPQUFzQjtRQUFoRSxZQUNFLGlCQUFPLFNBeUJSO1FBMUJ5QyxhQUFPLEdBQVAsT0FBTyxDQUFlO1FBaEJoRSw0REFBNEQ7UUFDNUQsMEJBQW9CLEdBQWdCLEVBQUUsQ0FBQztRQUd2QyxjQUFRLEdBQWEsS0FBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQywrRUFBK0U7UUFDL0Usd0ZBQXdGO1FBQ3hGLHFGQUFxRjtRQUNyRix5RkFBeUY7UUFDekYseUZBQXlGO1FBQ3pGLGlFQUFpRTtRQUN4RCw4QkFBd0IsR0FBNkIsSUFBSSx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUkvRixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsU0FBUztZQUNMLGFBQWEsQ0FDVCxXQUFXLEVBQ1gsZUFBYSxTQUFTLENBQUMsWUFBWSxDQUFDLDBDQUF1QyxDQUFDLENBQUM7UUFFckYsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsYUFBYSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLFdBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxLQUFJLENBQUMsV0FBVyxHQUFHLHNDQUFzQyxDQUNsQyxZQUFZLEVBQUUsT0FBTyxFQUNyQjtZQUNFLEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxLQUFJLEVBQUMsRUFBRTtnQkFDakQsT0FBTyxFQUFFLG1DQUFtQztnQkFDNUMsUUFBUSxFQUFFLEtBQUksQ0FBQyx3QkFBd0I7YUFDeEM7U0FDRixFQUNELFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBZSxDQUFDO1FBRTlELHVGQUF1RjtRQUN2Rix5RkFBeUY7UUFDekYseUZBQXlGO1FBQ3pGLEtBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3pDLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksS0FBVSxFQUFFLGFBQWdELEVBQzVELFdBQThDO1FBRGxDLDhCQUFBLEVBQUEsZ0JBQXFCLFFBQVEsQ0FBQyxrQkFBa0I7UUFDNUQsNEJBQUEsRUFBQSxjQUEyQixXQUFXLENBQUMsT0FBTztRQUNoRCxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLHNCQUFzQixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDaEYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLFNBQVMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwrQkFBUyxHQUFULFVBQVUsUUFBb0I7UUFDNUIsU0FBUyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUFvQyxzQkFBc0IsR0FnRXpEOztBQUVEO0lBQXdDLG1DQUE2QjtJQUNuRSx5QkFBbUIsVUFBbUI7UUFBdEMsWUFDRSxpQkFBTyxTQTZCUjtRQTlCa0IsZ0JBQVUsR0FBVixVQUFVLENBQVM7UUFHcEMsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUN4QiwyRkFBMkY7WUFDM0YsOEZBQThGO1lBQzlGLG1GQUFtRjtZQUNuRixFQUFFO1lBQ0YsMkZBQTJGO1lBQzNGLGtDQUFrQztZQUNsQyxFQUFFO1lBQ0YsMkZBQTJGO1lBQzNGLGtCQUFrQjtZQUNsQiw4RkFBOEY7WUFDOUYsa0RBQWtEO1lBQ2xELDhGQUE4RjtZQUM5RixhQUFhO1lBQ2IsRUFBRTtZQUNGLDhGQUE4RjtZQUM5Riw0RkFBNEY7WUFDNUYsOEZBQThGO1lBQzlGLHdGQUF3RjtZQUN4RixtRkFBbUY7WUFDbkYsRUFBRTtZQUNGLDhGQUE4RjtZQUM5RiwyRkFBMkY7WUFDM0YsOEVBQThFO1lBQzlFLG9CQUFvQixDQUFDLFVBQTBCLENBQUMsQ0FBQztTQUNsRDs7SUFDSCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLGNBQTZCO1FBQ2xDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBcENELENBQXdDLDBCQUEwQixHQW9DakUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7SU5KRUNUT1J9IGZyb20gJy4uL2RpL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuaW1wb3J0IHtJbmplY3RGbGFnc30gZnJvbSAnLi4vZGkvaW50ZXJmYWNlL2luamVjdG9yJztcbmltcG9ydCB7Y3JlYXRlSW5qZWN0b3JXaXRob3V0SW5qZWN0b3JJbnN0YW5jZXMsIFIzSW5qZWN0b3J9IGZyb20gJy4uL2RpL3IzX2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgYXMgdmlld0VuZ2luZV9Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeV9yZXNvbHZlcic7XG5pbXBvcnQge0ludGVybmFsTmdNb2R1bGVSZWYsIE5nTW9kdWxlRmFjdG9yeSBhcyB2aWV3RW5naW5lX05nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWYgYXMgdmlld0VuZ2luZV9OZ01vZHVsZVJlZn0gZnJvbSAnLi4vbGlua2VyL25nX21vZHVsZV9mYWN0b3J5JztcbmltcG9ydCB7cmVnaXN0ZXJOZ01vZHVsZVR5cGV9IGZyb20gJy4uL2xpbmtlci9uZ19tb2R1bGVfZmFjdG9yeV9yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHtOZ01vZHVsZURlZn0gZnJvbSAnLi4vbWV0YWRhdGEvbmdfbW9kdWxlJztcbmltcG9ydCB7YXNzZXJ0RGVmaW5lZH0gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJy4vY29tcG9uZW50X3JlZic7XG5pbXBvcnQge2dldE5nTG9jYWxlSWREZWYsIGdldE5nTW9kdWxlRGVmfSBmcm9tICcuL2RlZmluaXRpb24nO1xuaW1wb3J0IHtzZXRMb2NhbGVJZH0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bWF5YmVVbndyYXBGbn0gZnJvbSAnLi91dGlsL21pc2NfdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlVHlwZTxUID0gYW55PiBleHRlbmRzIFR5cGU8VD4ge1xuICDJtW1vZDogTmdNb2R1bGVEZWY8VD47XG59XG5cbmV4cG9ydCBjbGFzcyBOZ01vZHVsZVJlZjxUPiBleHRlbmRzIHZpZXdFbmdpbmVfTmdNb2R1bGVSZWY8VD4gaW1wbGVtZW50cyBJbnRlcm5hbE5nTW9kdWxlUmVmPFQ+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gIF9ib290c3RyYXBDb21wb25lbnRzOiBUeXBlPGFueT5bXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgX3IzSW5qZWN0b3I6IFIzSW5qZWN0b3I7XG4gIGluamVjdG9yOiBJbmplY3RvciA9IHRoaXM7XG4gIGluc3RhbmNlOiBUO1xuICBkZXN0cm95Q2JzOiAoKCkgPT4gdm9pZClbXXxudWxsID0gW107XG5cbiAgLy8gV2hlbiBib290c3RyYXBwaW5nIGEgbW9kdWxlIHdlIGhhdmUgYSBkZXBlbmRlbmN5IGdyYXBoIHRoYXQgbG9va3MgbGlrZSB0aGlzOlxuICAvLyBBcHBsaWNhdGlvblJlZiAtPiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgLT4gTmdNb2R1bGVSZWYuIFRoZSBwcm9ibGVtIGlzIHRoYXQgaWYgdGhlXG4gIC8vIG1vZHVsZSBiZWluZyByZXNvbHZlZCB0cmllcyB0byBpbmplY3QgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaXQnbGwgY3JlYXRlIGFcbiAgLy8gY2lyY3VsYXIgZGVwZW5kZW5jeSB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIHJ1bnRpbWUgZXJyb3IsIGJlY2F1c2UgdGhlIGluamVjdG9yIGRvZXNuJ3RcbiAgLy8gZXhpc3QgeWV0LiBXZSB3b3JrIGFyb3VuZCB0aGUgaXNzdWUgYnkgY3JlYXRpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciBvdXJzZWx2ZXNcbiAgLy8gYW5kIHByb3ZpZGluZyBpdCwgcmF0aGVyIHRoYW4gbGV0dGluZyB0aGUgaW5qZWN0b3IgcmVzb2x2ZSBpdC5cbiAgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSBuZXcgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKG5nTW9kdWxlVHlwZTogVHlwZTxUPiwgcHVibGljIF9wYXJlbnQ6IEluamVjdG9yfG51bGwpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IG5nTW9kdWxlRGVmID0gZ2V0TmdNb2R1bGVEZWYobmdNb2R1bGVUeXBlKTtcbiAgICBuZ0Rldk1vZGUgJiZcbiAgICAgICAgYXNzZXJ0RGVmaW5lZChcbiAgICAgICAgICAgIG5nTW9kdWxlRGVmLFxuICAgICAgICAgICAgYE5nTW9kdWxlICcke3N0cmluZ2lmeShuZ01vZHVsZVR5cGUpfScgaXMgbm90IGEgc3VidHlwZSBvZiAnTmdNb2R1bGVUeXBlJy5gKTtcblxuICAgIGNvbnN0IG5nTG9jYWxlSWREZWYgPSBnZXROZ0xvY2FsZUlkRGVmKG5nTW9kdWxlVHlwZSk7XG4gICAgbmdMb2NhbGVJZERlZiAmJiBzZXRMb2NhbGVJZChuZ0xvY2FsZUlkRGVmKTtcbiAgICB0aGlzLl9ib290c3RyYXBDb21wb25lbnRzID0gbWF5YmVVbndyYXBGbihuZ01vZHVsZURlZiEuYm9vdHN0cmFwKTtcbiAgICB0aGlzLl9yM0luamVjdG9yID0gY3JlYXRlSW5qZWN0b3JXaXRob3V0SW5qZWN0b3JJbnN0YW5jZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZ01vZHVsZVR5cGUsIF9wYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlOiB2aWV3RW5naW5lX05nTW9kdWxlUmVmLCB1c2VWYWx1ZTogdGhpc30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiB2aWV3RW5naW5lX0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZ01vZHVsZVR5cGUpKSBhcyBSM0luamVjdG9yO1xuXG4gICAgLy8gV2UgbmVlZCB0byByZXNvbHZlIHRoZSBpbmplY3RvciB0eXBlcyBzZXBhcmF0ZWx5IGZyb20gdGhlIGluamVjdG9yIGNyZWF0aW9uLCBiZWNhdXNlXG4gICAgLy8gdGhlIG1vZHVsZSBtaWdodCBiZSB0cnlpbmcgdG8gdXNlIHRoaXMgcmVmIGluIGl0cyBjb250cnVjdG9yIGZvciBESSB3aGljaCB3aWxsIGNhdXNlIGFcbiAgICAvLyBjaXJjdWxhciBlcnJvciB0aGF0IHdpbGwgZXZlbnR1YWxseSBlcnJvciBvdXQsIGJlY2F1c2UgdGhlIGluamVjdG9yIGlzbid0IGNyZWF0ZWQgeWV0LlxuICAgIHRoaXMuX3IzSW5qZWN0b3IuX3Jlc29sdmVJbmplY3RvckRlZlR5cGVzKCk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuZ2V0KG5nTW9kdWxlVHlwZSk7XG4gIH1cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZTogYW55ID0gSW5qZWN0b3IuVEhST1dfSUZfTk9UX0ZPVU5ELFxuICAgICAgaW5qZWN0RmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdCk6IGFueSB7XG4gICAgaWYgKHRva2VuID09PSBJbmplY3RvciB8fCB0b2tlbiA9PT0gdmlld0VuZ2luZV9OZ01vZHVsZVJlZiB8fCB0b2tlbiA9PT0gSU5KRUNUT1IpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcjNJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGluamVjdEZsYWdzKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQodGhpcy5kZXN0cm95Q2JzLCAnTmdNb2R1bGUgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuX3IzSW5qZWN0b3I7XG4gICAgIWluamVjdG9yLmRlc3Ryb3llZCAmJiBpbmplY3Rvci5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95Q2JzIS5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgIHRoaXMuZGVzdHJveUNicyA9IG51bGw7XG4gIH1cbiAgb25EZXN0cm95KGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQodGhpcy5kZXN0cm95Q2JzLCAnTmdNb2R1bGUgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICB0aGlzLmRlc3Ryb3lDYnMhLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZ01vZHVsZUZhY3Rvcnk8VD4gZXh0ZW5kcyB2aWV3RW5naW5lX05nTW9kdWxlRmFjdG9yeTxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2R1bGVUeXBlOiBUeXBlPFQ+KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IG5nTW9kdWxlRGVmID0gZ2V0TmdNb2R1bGVEZWYobW9kdWxlVHlwZSk7XG4gICAgaWYgKG5nTW9kdWxlRGVmICE9PSBudWxsKSB7XG4gICAgICAvLyBSZWdpc3RlciB0aGUgTmdNb2R1bGUgd2l0aCBBbmd1bGFyJ3MgbW9kdWxlIHJlZ2lzdHJ5LiBUaGUgbG9jYXRpb24gKGFuZCBoZW5jZSB0aW1pbmcpIG9mXG4gICAgICAvLyB0aGlzIGNhbGwgaXMgY3JpdGljYWwgdG8gZW5zdXJlIHRoaXMgd29ya3MgY29ycmVjdGx5IChtb2R1bGVzIGdldCByZWdpc3RlcmVkIHdoZW4gZXhwZWN0ZWQpXG4gICAgICAvLyB3aXRob3V0IGJsb2F0aW5nIGJ1bmRsZXMgKG1vZHVsZXMgYXJlIHJlZ2lzdGVyZWQgd2hlbiBvdGhlcndpc2Ugbm90IHJlZmVyZW5jZWQpLlxuICAgICAgLy9cbiAgICAgIC8vIEluIFZpZXcgRW5naW5lLCByZWdpc3RyYXRpb24gb2NjdXJzIGluIHRoZSAubmdmYWN0b3J5LmpzIGZpbGUgYXMgYSBzaWRlIGVmZmVjdC4gVGhpcyBoYXNcbiAgICAgIC8vIHNldmVyYWwgcHJhY3RpY2FsIGNvbnNlcXVlbmNlczpcbiAgICAgIC8vXG4gICAgICAvLyAtIElmIGFuIC5uZ2ZhY3RvcnkgZmlsZSBpcyBub3QgaW1wb3J0ZWQgZnJvbSwgdGhlIG1vZHVsZSB3b24ndCBiZSByZWdpc3RlcmVkIChhbmQgY2FuIGJlXG4gICAgICAvLyAgIHRyZWUgc2hha2VuKS5cbiAgICAgIC8vIC0gSWYgYW4gLm5nZmFjdG9yeSBmaWxlIGlzIGltcG9ydGVkIGZyb20sIHRoZSBtb2R1bGUgd2lsbCBiZSByZWdpc3RlcmVkIGV2ZW4gaWYgYW4gaW5zdGFuY2VcbiAgICAgIC8vICAgaXMgbm90IGFjdHVhbGx5IGNyZWF0ZWQgKHZpYSBgY3JlYXRlYCBiZWxvdykuXG4gICAgICAvLyAtIFNpbmNlIGFuIC5uZ2ZhY3RvcnkgZmlsZSBpbiBWaWV3IEVuZ2luZSByZWZlcmVuY2VzIHRoZSAubmdmYWN0b3J5IGZpbGVzIG9mIHRoZSBOZ01vZHVsZSdzXG4gICAgICAvLyAgIGltcG9ydHMsXG4gICAgICAvL1xuICAgICAgLy8gSW4gSXZ5LCB0aGluZ3MgYXJlIGEgYml0IGRpZmZlcmVudC4gLm5nZmFjdG9yeSBmaWxlcyBzdGlsbCBleGlzdCBmb3IgY29tcGF0aWJpbGl0eSwgYnV0IGFyZVxuICAgICAgLy8gbm90IGEgcmVxdWlyZWQgQVBJIHRvIHVzZSAtIHRoZXJlIGFyZSBvdGhlciB3YXlzIHRvIG9idGFpbiBhbiBOZ01vZHVsZUZhY3RvcnkgZm9yIGEgZ2l2ZW5cbiAgICAgIC8vIE5nTW9kdWxlLiBUaHVzLCByZWx5aW5nIG9uIGEgc2lkZSBlZmZlY3QgaW4gdGhlIC5uZ2ZhY3RvcnkgZmlsZSBpcyBub3Qgc3VmZmljaWVudC4gSW5zdGVhZCxcbiAgICAgIC8vIHRoZSBzaWRlIGVmZmVjdCBvZiByZWdpc3RyYXRpb24gaXMgYWRkZWQgaGVyZSwgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIE5nTW9kdWxlRmFjdG9yeSxcbiAgICAgIC8vIGVuc3VyaW5nIG5vIG1hdHRlciBob3cgYSBmYWN0b3J5IGlzIGNyZWF0ZWQsIHRoZSBtb2R1bGUgaXMgcmVnaXN0ZXJlZCBjb3JyZWN0bHkuXG4gICAgICAvL1xuICAgICAgLy8gQW4gYWx0ZXJuYXRpdmUgd291bGQgYmUgdG8gaW5jbHVkZSB0aGUgcmVnaXN0cmF0aW9uIHNpZGUgZWZmZWN0IGlubGluZSBmb2xsb3dpbmcgdGhlIGFjdHVhbFxuICAgICAgLy8gTmdNb2R1bGUgZGVmaW5pdGlvbi4gVGhpcyBhbHNvIGhhcyB0aGUgY29ycmVjdCB0aW1pbmcsIGJ1dCBicmVha3MgdHJlZS1zaGFraW5nIC0gbW9kdWxlc1xuICAgICAgLy8gd2lsbCBiZSByZWdpc3RlcmVkIGFuZCByZXRhaW5lZCBldmVuIGlmIHRoZXkncmUgb3RoZXJ3aXNlIG5ldmVyIHJlZmVyZW5jZWQuXG4gICAgICByZWdpc3Rlck5nTW9kdWxlVHlwZShtb2R1bGVUeXBlIGFzIE5nTW9kdWxlVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlKHBhcmVudEluamVjdG9yOiBJbmplY3RvcnxudWxsKTogdmlld0VuZ2luZV9OZ01vZHVsZVJlZjxUPiB7XG4gICAgcmV0dXJuIG5ldyBOZ01vZHVsZVJlZih0aGlzLm1vZHVsZVR5cGUsIHBhcmVudEluamVjdG9yKTtcbiAgfVxufVxuIl19