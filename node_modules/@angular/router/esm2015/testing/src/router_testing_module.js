/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/testing/src/router_testing_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Location, LocationStrategy } from '@angular/common';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { Compiler, Injectable, Injector, NgModule, NgModuleFactoryLoader, Optional } from '@angular/core';
import { ChildrenOutletContexts, NoPreloading, PreloadingStrategy, provideRoutes, Router, ROUTER_CONFIGURATION, RouterModule, ROUTES, UrlHandlingStrategy, UrlSerializer, ɵflatten as flatten, ɵROUTER_PROVIDERS as ROUTER_PROVIDERS } from '@angular/router';
/**
 * \@description
 *
 * Allows to simulate the loading of ng modules in tests.
 *
 * ```
 * const loader = TestBed.inject(NgModuleFactoryLoader);
 *
 * \@Component({template: 'lazy-loaded'})
 * class LazyLoadedComponent {}
 * \@NgModule({
 *   declarations: [LazyLoadedComponent],
 *   imports: [RouterModule.forChild([{path: 'loaded', component: LazyLoadedComponent}])]
 * })
 *
 * class LoadedModule {}
 *
 * // sets up stubbedModules
 * loader.stubbedModules = {lazyModule: LoadedModule};
 *
 * router.resetConfig([
 *   {path: 'lazy', loadChildren: 'lazyModule'},
 * ]);
 *
 * router.navigateByUrl('/lazy/loaded');
 * ```
 *
 * \@publicApi
 */
export class SpyNgModuleFactoryLoader {
    /**
     * @param {?} compiler
     */
    constructor(compiler) {
        this.compiler = compiler;
        /**
         * \@docsNotRequired
         */
        this._stubbedModules = {};
    }
    /**
     * \@docsNotRequired
     * @param {?} modules
     * @return {?}
     */
    set stubbedModules(modules) {
        /** @type {?} */
        const res = {};
        for (const t of Object.keys(modules)) {
            res[t] = this.compiler.compileModuleAsync(modules[t]);
        }
        this._stubbedModules = res;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    get stubbedModules() {
        return this._stubbedModules;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    load(path) {
        if (this._stubbedModules[path]) {
            return this._stubbedModules[path];
        }
        else {
            return (/** @type {?} */ (Promise.reject(new Error(`Cannot find module ${path}`))));
        }
    }
}
SpyNgModuleFactoryLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SpyNgModuleFactoryLoader.ctorParameters = () => [
    { type: Compiler }
];
if (false) {
    /**
     * \@docsNotRequired
     * @type {?}
     * @private
     */
    SpyNgModuleFactoryLoader.prototype._stubbedModules;
    /**
     * @type {?}
     * @private
     */
    SpyNgModuleFactoryLoader.prototype.compiler;
}
/**
 * @param {?} opts
 * @return {?}
 */
function isUrlHandlingStrategy(opts) {
    // This property check is needed because UrlHandlingStrategy is an interface and doesn't exist at
    // runtime.
    return 'shouldProcessUrl' in opts;
}
/**
 * Router setup factory function used for testing.
 *
 * \@publicApi
 * @param {?} urlSerializer
 * @param {?} contexts
 * @param {?} location
 * @param {?} loader
 * @param {?} compiler
 * @param {?} injector
 * @param {?} routes
 * @param {?=} opts
 * @param {?=} urlHandlingStrategy
 * @return {?}
 */
export function setupTestingRouter(urlSerializer, contexts, location, loader, compiler, injector, routes, opts, urlHandlingStrategy) {
    /** @type {?} */
    const router = new Router((/** @type {?} */ (null)), urlSerializer, contexts, location, injector, loader, compiler, flatten(routes));
    if (opts) {
        // Handle deprecated argument ordering.
        if (isUrlHandlingStrategy(opts)) {
            router.urlHandlingStrategy = opts;
        }
        else {
            // Handle ExtraOptions
            if (opts.malformedUriErrorHandler) {
                router.malformedUriErrorHandler = opts.malformedUriErrorHandler;
            }
            if (opts.paramsInheritanceStrategy) {
                router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy;
            }
        }
    }
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    return router;
}
/**
 * \@description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location`, `LocationStrategy`, and {\@link
 * NgModuleFactoryLoader}.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * \@publicApi
 */
export class RouterTestingModule {
    /**
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    static withRoutes(routes, config) {
        return {
            ngModule: RouterTestingModule,
            providers: [
                provideRoutes(routes),
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
            ]
        };
    }
}
RouterTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [RouterModule],
                providers: [
                    ROUTER_PROVIDERS, { provide: Location, useClass: SpyLocation },
                    { provide: LocationStrategy, useClass: MockLocationStrategy },
                    { provide: NgModuleFactoryLoader, useClass: SpyNgModuleFactoryLoader }, {
                        provide: Router,
                        useFactory: setupTestingRouter,
                        deps: [
                            UrlSerializer, ChildrenOutletContexts, Location, NgModuleFactoryLoader, Compiler, Injector,
                            ROUTES, ROUTER_CONFIGURATION, [UrlHandlingStrategy, new Optional()]
                        ]
                    },
                    { provide: PreloadingStrategy, useExisting: NoPreloading }, provideRoutes([])
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Rlc3RpbmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3Rlc3Rpbmcvc3JjL3JvdXRlcl90ZXN0aW5nX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFDLG9CQUFvQixFQUFFLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFtQixxQkFBcUIsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUksT0FBTyxFQUFDLHNCQUFzQixFQUFnQixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFTLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxRQUFRLElBQUksT0FBTyxFQUFFLGlCQUFpQixJQUFJLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDelIsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQXdCbkMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7OztRQXBCOUIsb0JBQWUsR0FBb0QsRUFBRSxDQUFDO0lBb0JyQyxDQUFDOzs7Ozs7SUFmMUMsSUFBSSxjQUFjLENBQUMsT0FBOEI7O2NBQ3pDLEdBQUcsR0FBMEIsRUFBRTtRQUNyQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDOzs7OztJQUtELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFJRCxJQUFJLENBQUMsSUFBWTtRQUNmLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLE9BQU8sbUJBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFBLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7WUFqQ0YsVUFBVTs7OztZQWxDSCxRQUFROzs7Ozs7OztJQXVDZCxtREFBOEU7Ozs7O0lBb0JsRSw0Q0FBMEI7Ozs7OztBQVd4QyxTQUFTLHFCQUFxQixDQUFDLElBQ21CO0lBQ2hELGlHQUFpRztJQUNqRyxXQUFXO0lBQ1gsT0FBTyxrQkFBa0IsSUFBSSxJQUFJLENBQUM7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQTZCRCxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLGFBQTRCLEVBQUUsUUFBZ0MsRUFBRSxRQUFrQixFQUNsRixNQUE2QixFQUFFLFFBQWtCLEVBQUUsUUFBa0IsRUFBRSxNQUFpQixFQUN4RixJQUF1QyxFQUFFLG1CQUF5Qzs7VUFDOUUsTUFBTSxHQUFHLElBQUksTUFBTSxDQUNyQixtQkFBQSxJQUFJLEVBQUMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUYsSUFBSSxJQUFJLEVBQUU7UUFDUix1Q0FBdUM7UUFDdkMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixNQUFNLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ25DO2FBQU07WUFDTCxzQkFBc0I7WUFFdEIsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7YUFDakU7WUFFRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQzthQUNuRTtTQUNGO0tBQ0Y7SUFFRCxJQUFJLG1CQUFtQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztLQUNsRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBcUI7UUFFckQsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDO2FBQ2hFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTFCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1QsZ0JBQWdCLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7b0JBQzVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztvQkFDM0QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDLEVBQUU7d0JBQ3BFLE9BQU8sRUFBRSxNQUFNO3dCQUNmLFVBQVUsRUFBRSxrQkFBa0I7d0JBQzlCLElBQUksRUFBRTs0QkFDSixhQUFhLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxRQUFROzRCQUMxRixNQUFNLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDO3lCQUNwRTtxQkFDRjtvQkFDRCxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQztpQkFDNUU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9ja0xvY2F0aW9uU3RyYXRlZ3ksIFNweUxvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24vdGVzdGluZyc7XG5pbXBvcnQge0NvbXBpbGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoaWxkcmVuT3V0bGV0Q29udGV4dHMsIEV4dHJhT3B0aW9ucywgTm9QcmVsb2FkaW5nLCBQcmVsb2FkaW5nU3RyYXRlZ3ksIHByb3ZpZGVSb3V0ZXMsIFJvdXRlLCBSb3V0ZXIsIFJPVVRFUl9DT05GSUdVUkFUSU9OLCBSb3V0ZXJNb2R1bGUsIFJPVVRFUywgUm91dGVzLCBVcmxIYW5kbGluZ1N0cmF0ZWd5LCBVcmxTZXJpYWxpemVyLCDJtWZsYXR0ZW4gYXMgZmxhdHRlbiwgybVST1VURVJfUFJPVklERVJTIGFzIFJPVVRFUl9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEFsbG93cyB0byBzaW11bGF0ZSB0aGUgbG9hZGluZyBvZiBuZyBtb2R1bGVzIGluIHRlc3RzLlxuICpcbiAqIGBgYFxuICogY29uc3QgbG9hZGVyID0gVGVzdEJlZC5pbmplY3QoTmdNb2R1bGVGYWN0b3J5TG9hZGVyKTtcbiAqXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZTogJ2xhenktbG9hZGVkJ30pXG4gKiBjbGFzcyBMYXp5TG9hZGVkQ29tcG9uZW50IHt9XG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFtMYXp5TG9hZGVkQ29tcG9uZW50XSxcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChbe3BhdGg6ICdsb2FkZWQnLCBjb21wb25lbnQ6IExhenlMb2FkZWRDb21wb25lbnR9XSldXG4gKiB9KVxuICpcbiAqIGNsYXNzIExvYWRlZE1vZHVsZSB7fVxuICpcbiAqIC8vIHNldHMgdXAgc3R1YmJlZE1vZHVsZXNcbiAqIGxvYWRlci5zdHViYmVkTW9kdWxlcyA9IHtsYXp5TW9kdWxlOiBMb2FkZWRNb2R1bGV9O1xuICpcbiAqIHJvdXRlci5yZXNldENvbmZpZyhbXG4gKiAgIHtwYXRoOiAnbGF6eScsIGxvYWRDaGlsZHJlbjogJ2xhenlNb2R1bGUnfSxcbiAqIF0pO1xuICpcbiAqIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbGF6eS9sb2FkZWQnKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNweU5nTW9kdWxlRmFjdG9yeUxvYWRlciBpbXBsZW1lbnRzIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB7XG4gIC8qKlxuICAgKiBAZG9jc05vdFJlcXVpcmVkXG4gICAqL1xuICBwcml2YXRlIF9zdHViYmVkTW9kdWxlczoge1twYXRoOiBzdHJpbmddOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxhbnk+Pn0gPSB7fTtcblxuICAvKipcbiAgICogQGRvY3NOb3RSZXF1aXJlZFxuICAgKi9cbiAgc2V0IHN0dWJiZWRNb2R1bGVzKG1vZHVsZXM6IHtbcGF0aDogc3RyaW5nXTogYW55fSkge1xuICAgIGNvbnN0IHJlczoge1twYXRoOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgZm9yIChjb25zdCB0IG9mIE9iamVjdC5rZXlzKG1vZHVsZXMpKSB7XG4gICAgICByZXNbdF0gPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGVzW3RdKTtcbiAgICB9XG4gICAgdGhpcy5fc3R1YmJlZE1vZHVsZXMgPSByZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRvY3NOb3RSZXF1aXJlZFxuICAgKi9cbiAgZ2V0IHN0dWJiZWRNb2R1bGVzKCk6IHtbcGF0aDogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0dWJiZWRNb2R1bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHt9XG5cbiAgbG9hZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxhbnk+PiB7XG4gICAgaWYgKHRoaXMuX3N0dWJiZWRNb2R1bGVzW3BhdGhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3R1YmJlZE1vZHVsZXNbcGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8YW55PlByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgbW9kdWxlICR7cGF0aH1gKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVXJsSGFuZGxpbmdTdHJhdGVneShvcHRzOiBFeHRyYU9wdGlvbnN8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXJsSGFuZGxpbmdTdHJhdGVneSk6IG9wdHMgaXMgVXJsSGFuZGxpbmdTdHJhdGVneSB7XG4gIC8vIFRoaXMgcHJvcGVydHkgY2hlY2sgaXMgbmVlZGVkIGJlY2F1c2UgVXJsSGFuZGxpbmdTdHJhdGVneSBpcyBhbiBpbnRlcmZhY2UgYW5kIGRvZXNuJ3QgZXhpc3QgYXRcbiAgLy8gcnVudGltZS5cbiAgcmV0dXJuICdzaG91bGRQcm9jZXNzVXJsJyBpbiBvcHRzO1xufVxuXG4vKipcbiAqIFJvdXRlciBzZXR1cCBmYWN0b3J5IGZ1bmN0aW9uIHVzZWQgZm9yIHRlc3RpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUZXN0aW5nUm91dGVyKFxuICAgIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIGNvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGNvbXBpbGVyOiBDb21waWxlciwgaW5qZWN0b3I6IEluamVjdG9yLCByb3V0ZXM6IFJvdXRlW11bXSxcbiAgICBvcHRzPzogRXh0cmFPcHRpb25zLCB1cmxIYW5kbGluZ1N0cmF0ZWd5PzogVXJsSGFuZGxpbmdTdHJhdGVneSk6IFJvdXRlcjtcblxuLyoqXG4gKiBSb3V0ZXIgc2V0dXAgZmFjdG9yeSBmdW5jdGlvbiB1c2VkIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBkZXByZWNhdGVkIEFzIG9mIHY1LjIuIFRoZSAybmQtdG8tbGFzdCBhcmd1bWVudCBzaG91bGQgYmUgYEV4dHJhT3B0aW9uc2AsIG5vdFxuICogYFVybEhhbmRsaW5nU3RyYXRlZ3lgXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFRlc3RpbmdSb3V0ZXIoXG4gICAgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgY29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBsb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgY29tcGlsZXI6IENvbXBpbGVyLCBpbmplY3RvcjogSW5qZWN0b3IsIHJvdXRlczogUm91dGVbXVtdLFxuICAgIHVybEhhbmRsaW5nU3RyYXRlZ3k/OiBVcmxIYW5kbGluZ1N0cmF0ZWd5KTogUm91dGVyO1xuXG4vKipcbiAqIFJvdXRlciBzZXR1cCBmYWN0b3J5IGZ1bmN0aW9uIHVzZWQgZm9yIHRlc3RpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUZXN0aW5nUm91dGVyKFxuICAgIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIGNvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGNvbXBpbGVyOiBDb21waWxlciwgaW5qZWN0b3I6IEluamVjdG9yLCByb3V0ZXM6IFJvdXRlW11bXSxcbiAgICBvcHRzPzogRXh0cmFPcHRpb25zfFVybEhhbmRsaW5nU3RyYXRlZ3ksIHVybEhhbmRsaW5nU3RyYXRlZ3k/OiBVcmxIYW5kbGluZ1N0cmF0ZWd5KSB7XG4gIGNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoXG4gICAgICBudWxsISwgdXJsU2VyaWFsaXplciwgY29udGV4dHMsIGxvY2F0aW9uLCBpbmplY3RvciwgbG9hZGVyLCBjb21waWxlciwgZmxhdHRlbihyb3V0ZXMpKTtcbiAgaWYgKG9wdHMpIHtcbiAgICAvLyBIYW5kbGUgZGVwcmVjYXRlZCBhcmd1bWVudCBvcmRlcmluZy5cbiAgICBpZiAoaXNVcmxIYW5kbGluZ1N0cmF0ZWd5KG9wdHMpKSB7XG4gICAgICByb3V0ZXIudXJsSGFuZGxpbmdTdHJhdGVneSA9IG9wdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBFeHRyYU9wdGlvbnNcblxuICAgICAgaWYgKG9wdHMubWFsZm9ybWVkVXJpRXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIHJvdXRlci5tYWxmb3JtZWRVcmlFcnJvckhhbmRsZXIgPSBvcHRzLm1hbGZvcm1lZFVyaUVycm9ySGFuZGxlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMucGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneSkge1xuICAgICAgICByb3V0ZXIucGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneSA9IG9wdHMucGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodXJsSGFuZGxpbmdTdHJhdGVneSkge1xuICAgIHJvdXRlci51cmxIYW5kbGluZ1N0cmF0ZWd5ID0gdXJsSGFuZGxpbmdTdHJhdGVneTtcbiAgfVxuICByZXR1cm4gcm91dGVyO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFNldHMgdXAgdGhlIHJvdXRlciB0byBiZSB1c2VkIGZvciB0ZXN0aW5nLlxuICpcbiAqIFRoZSBtb2R1bGVzIHNldHMgdXAgdGhlIHJvdXRlciB0byBiZSB1c2VkIGZvciB0ZXN0aW5nLlxuICogSXQgcHJvdmlkZXMgc3B5IGltcGxlbWVudGF0aW9ucyBvZiBgTG9jYXRpb25gLCBgTG9jYXRpb25TdHJhdGVneWAsIGFuZCB7QGxpbmtcbiAqIE5nTW9kdWxlRmFjdG9yeUxvYWRlcn0uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBiZWZvcmVFYWNoKCgpID0+IHtcbiAqICAgVGVzdEJlZC5jb25maWd1cmVUZXN0TW9kdWxlKHtcbiAqICAgICBpbXBvcnRzOiBbXG4gKiAgICAgICBSb3V0ZXJUZXN0aW5nTW9kdWxlLndpdGhSb3V0ZXMoXG4gKiAgICAgICAgIFt7cGF0aDogJycsIGNvbXBvbmVudDogQmxhbmtDbXB9LCB7cGF0aDogJ3NpbXBsZScsIGNvbXBvbmVudDogU2ltcGxlQ21wfV1cbiAqICAgICAgIClcbiAqICAgICBdXG4gKiAgIH0pO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBST1VURVJfUFJPVklERVJTLCB7cHJvdmlkZTogTG9jYXRpb24sIHVzZUNsYXNzOiBTcHlMb2NhdGlvbn0sXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0sXG4gICAge3Byb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IFNweU5nTW9kdWxlRmFjdG9yeUxvYWRlcn0sIHtcbiAgICAgIHByb3ZpZGU6IFJvdXRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwVGVzdGluZ1JvdXRlcixcbiAgICAgIGRlcHM6IFtcbiAgICAgICAgVXJsU2VyaWFsaXplciwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgTG9jYXRpb24sIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgQ29tcGlsZXIsIEluamVjdG9yLFxuICAgICAgICBST1VURVMsIFJPVVRFUl9DT05GSUdVUkFUSU9OLCBbVXJsSGFuZGxpbmdTdHJhdGVneSwgbmV3IE9wdGlvbmFsKCldXG4gICAgICBdXG4gICAgfSxcbiAgICB7cHJvdmlkZTogUHJlbG9hZGluZ1N0cmF0ZWd5LCB1c2VFeGlzdGluZzogTm9QcmVsb2FkaW5nfSwgcHJvdmlkZVJvdXRlcyhbXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJUZXN0aW5nTW9kdWxlIHtcbiAgc3RhdGljIHdpdGhSb3V0ZXMocm91dGVzOiBSb3V0ZXMsIGNvbmZpZz86IEV4dHJhT3B0aW9ucyk6XG4gICAgICBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRlclRlc3RpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJvdXRlclRlc3RpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZVJvdXRlcyhyb3V0ZXMpLFxuICAgICAgICB7cHJvdmlkZTogUk9VVEVSX0NPTkZJR1VSQVRJT04sIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7fX0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19