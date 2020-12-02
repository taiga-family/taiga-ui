/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __decorate, __metadata, __read, __spread, __values } from "tslib";
import './util/ng_jit_mode';
import { merge, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { ApplicationInitStatus } from './application_init';
import { APP_BOOTSTRAP_LISTENER, PLATFORM_INITIALIZER } from './application_tokens';
import { getCompilerFacade } from './compiler/compiler_facade';
import { Console } from './console';
import { Injectable, InjectionToken, Injector } from './di';
import { INJECTOR_SCOPE } from './di/scope';
import { ErrorHandler } from './error_handler';
import { DEFAULT_LOCALE_ID } from './i18n/localization';
import { LOCALE_ID } from './i18n/tokens';
import { ivyEnabled } from './ivy_switch';
import { COMPILER_OPTIONS, CompilerFactory } from './linker/compiler';
import { ComponentFactory } from './linker/component_factory';
import { ComponentFactoryBoundToModule, ComponentFactoryResolver } from './linker/component_factory_resolver';
import { NgModuleRef } from './linker/ng_module_factory';
import { isComponentResourceResolutionQueueEmpty, resolveComponentResources } from './metadata/resource_loading';
import { assertNgModuleType } from './render3/assert';
import { setLocaleId } from './render3/i18n';
import { setJitOptions } from './render3/jit/jit_options';
import { NgModuleFactory as R3NgModuleFactory } from './render3/ng_module_ref';
import { publishDefaultGlobalUtils as _publishDefaultGlobalUtils } from './render3/util/global_utils';
import { Testability, TestabilityRegistry } from './testability/testability';
import { isDevMode } from './util/is_dev_mode';
import { isPromise } from './util/lang';
import { scheduleMicroTask } from './util/microtask';
import { stringify } from './util/stringify';
import { NgZone, NoopNgZone } from './zone/ng_zone';
var _platform;
var compileNgModuleFactory = compileNgModuleFactory__PRE_R3__;
function compileNgModuleFactory__PRE_R3__(injector, options, moduleType) {
    var compilerFactory = injector.get(CompilerFactory);
    var compiler = compilerFactory.createCompiler([options]);
    return compiler.compileModuleAsync(moduleType);
}
export function compileNgModuleFactory__POST_R3__(injector, options, moduleType) {
    ngDevMode && assertNgModuleType(moduleType);
    var compilerOptions = injector.get(COMPILER_OPTIONS, []).concat(options);
    if (typeof ngJitMode === 'undefined' || ngJitMode) {
        // Configure the compiler to use the provided options. This call may fail when multiple modules
        // are bootstrapped with incompatible options, as a component can only be compiled according to
        // a single set of options.
        setJitOptions({
            defaultEncapsulation: _lastDefined(compilerOptions.map(function (options) { return options.defaultEncapsulation; })),
            preserveWhitespaces: _lastDefined(compilerOptions.map(function (options) { return options.preserveWhitespaces; })),
        });
    }
    var moduleFactory = new R3NgModuleFactory(moduleType);
    if (isComponentResourceResolutionQueueEmpty()) {
        return Promise.resolve(moduleFactory);
    }
    var compilerProviders = _mergeArrays(compilerOptions.map(function (o) { return o.providers; }));
    // In case there are no compiler providers, we just return the module factory as
    // there won't be any resource loader. This can happen with Ivy, because AOT compiled
    // modules can be still passed through "bootstrapModule". In that case we shouldn't
    // unnecessarily require the JIT compiler.
    if (compilerProviders.length === 0) {
        return Promise.resolve(moduleFactory);
    }
    var compiler = getCompilerFacade();
    var compilerInjector = Injector.create({ providers: compilerProviders });
    var resourceLoader = compilerInjector.get(compiler.ResourceLoader);
    // The resource loader can also return a string while the "resolveComponentResources"
    // always expects a promise. Therefore we need to wrap the returned value in a promise.
    return resolveComponentResources(function (url) { return Promise.resolve(resourceLoader.get(url)); })
        .then(function () { return moduleFactory; });
}
// the `window.ng` global utilities are only available in non-VE versions of
// Angular. The function switch below will make sure that the code is not
// included into Angular when PRE mode is active.
export function publishDefaultGlobalUtils__PRE_R3__() { }
export function publishDefaultGlobalUtils__POST_R3__() {
    ngDevMode && _publishDefaultGlobalUtils();
}
var publishDefaultGlobalUtils = publishDefaultGlobalUtils__PRE_R3__;
var isBoundToModule = isBoundToModule__PRE_R3__;
export function isBoundToModule__PRE_R3__(cf) {
    return cf instanceof ComponentFactoryBoundToModule;
}
export function isBoundToModule__POST_R3__(cf) {
    return cf.isBoundToModule;
}
export var ALLOW_MULTIPLE_PLATFORMS = new InjectionToken('AllowMultipleToken');
/**
 * A token for third-party components that can register themselves with NgProbe.
 *
 * @publicApi
 */
var NgProbeToken = /** @class */ (function () {
    function NgProbeToken(name, token) {
        this.name = name;
        this.token = token;
    }
    return NgProbeToken;
}());
export { NgProbeToken };
/**
 * Creates a platform.
 * Platforms have to be eagerly created via this function.
 *
 * @publicApi
 */
export function createPlatform(injector) {
    if (_platform && !_platform.destroyed &&
        !_platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
        throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
    }
    publishDefaultGlobalUtils();
    _platform = injector.get(PlatformRef);
    var inits = injector.get(PLATFORM_INITIALIZER, null);
    if (inits)
        inits.forEach(function (init) { return init(); });
    return _platform;
}
/**
 * Creates a factory for a platform
 *
 * @publicApi
 */
export function createPlatformFactory(parentPlatformFactory, name, providers) {
    if (providers === void 0) { providers = []; }
    var desc = "Platform: " + name;
    var marker = new InjectionToken(desc);
    return function (extraProviders) {
        if (extraProviders === void 0) { extraProviders = []; }
        var platform = getPlatform();
        if (!platform || platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
            if (parentPlatformFactory) {
                parentPlatformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
            }
            else {
                var injectedProviders = providers.concat(extraProviders).concat({ provide: marker, useValue: true }, {
                    provide: INJECTOR_SCOPE,
                    useValue: 'platform'
                });
                createPlatform(Injector.create({ providers: injectedProviders, name: desc }));
            }
        }
        return assertPlatform(marker);
    };
}
/**
 * Checks that there currently is a platform which contains the given token as a provider.
 *
 * @publicApi
 */
export function assertPlatform(requiredToken) {
    var platform = getPlatform();
    if (!platform) {
        throw new Error('No platform exists!');
    }
    if (!platform.injector.get(requiredToken, null)) {
        throw new Error('A platform with a different configuration has been created. Please destroy it first.');
    }
    return platform;
}
/**
 * Destroy the existing platform.
 *
 * @publicApi
 */
export function destroyPlatform() {
    if (_platform && !_platform.destroyed) {
        _platform.destroy();
    }
}
/**
 * Returns the current platform.
 *
 * @publicApi
 */
export function getPlatform() {
    return _platform && !_platform.destroyed ? _platform : null;
}
/**
 * The Angular platform is the entry point for Angular on a web page. Each page
 * has exactly one platform, and services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 *
 * A page's platform is initialized implicitly when a platform is created via a platform factory
 * (e.g. {@link platformBrowser}), or explicitly by calling the {@link createPlatform} function.
 *
 * @publicApi
 */
var PlatformRef = /** @class */ (function () {
    /** @internal */
    function PlatformRef(_injector) {
        this._injector = _injector;
        this._modules = [];
        this._destroyListeners = [];
        this._destroyed = false;
    }
    /**
     * Creates an instance of an `@NgModule` for the given platform
     * for offline compilation.
     *
     * @usageNotes
     * ### Simple Example
     *
     * ```typescript
     * my_module.ts:
     *
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * main.ts:
     * import {MyModuleNgFactory} from './my_module.ngfactory';
     * import {platformBrowser} from '@angular/platform-browser';
     *
     * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
     * ```
     */
    PlatformRef.prototype.bootstrapModuleFactory = function (moduleFactory, options) {
        var _this = this;
        // Note: We need to create the NgZone _before_ we instantiate the module,
        // as instantiating the module creates some providers eagerly.
        // So we create a mini parent injector that just contains the new NgZone and
        // pass that as parent to the NgModuleFactory.
        var ngZoneOption = options ? options.ngZone : undefined;
        var ngZoneEventCoalescing = (options && options.ngZoneEventCoalescing) || false;
        var ngZone = getNgZone(ngZoneOption, ngZoneEventCoalescing);
        var providers = [{ provide: NgZone, useValue: ngZone }];
        // Attention: Don't use ApplicationRef.run here,
        // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
        return ngZone.run(function () {
            var ngZoneInjector = Injector.create({ providers: providers, parent: _this.injector, name: moduleFactory.moduleType.name });
            var moduleRef = moduleFactory.create(ngZoneInjector);
            var exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
            if (!exceptionHandler) {
                throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            }
            moduleRef.onDestroy(function () { return remove(_this._modules, moduleRef); });
            ngZone.runOutsideAngular(function () { return ngZone.onError.subscribe({
                next: function (error) {
                    exceptionHandler.handleError(error);
                }
            }); });
            return _callAndReportToErrorHandler(exceptionHandler, ngZone, function () {
                var initStatus = moduleRef.injector.get(ApplicationInitStatus);
                initStatus.runInitializers();
                return initStatus.donePromise.then(function () {
                    if (ivyEnabled) {
                        // If the `LOCALE_ID` provider is defined at bootstrap then we set the value for ivy
                        var localeId = moduleRef.injector.get(LOCALE_ID, DEFAULT_LOCALE_ID);
                        setLocaleId(localeId || DEFAULT_LOCALE_ID);
                    }
                    _this._moduleDoBootstrap(moduleRef);
                    return moduleRef;
                });
            });
        });
    };
    /**
     * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
     *
     * @usageNotes
     * ### Simple Example
     *
     * ```typescript
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * let moduleRef = platformBrowser().bootstrapModule(MyModule);
     * ```
     *
     */
    PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
        var _this = this;
        if (compilerOptions === void 0) { compilerOptions = []; }
        var options = optionsReducer({}, compilerOptions);
        return compileNgModuleFactory(this.injector, options, moduleType)
            .then(function (moduleFactory) { return _this.bootstrapModuleFactory(moduleFactory, options); });
    };
    PlatformRef.prototype._moduleDoBootstrap = function (moduleRef) {
        var appRef = moduleRef.injector.get(ApplicationRef);
        if (moduleRef._bootstrapComponents.length > 0) {
            moduleRef._bootstrapComponents.forEach(function (f) { return appRef.bootstrap(f); });
        }
        else if (moduleRef.instance.ngDoBootstrap) {
            moduleRef.instance.ngDoBootstrap(appRef);
        }
        else {
            throw new Error("The module " + stringify(moduleRef.instance
                .constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. " +
                "Please define one of these.");
        }
        this._modules.push(moduleRef);
    };
    /**
     * Register a listener to be called when the platform is disposed.
     */
    PlatformRef.prototype.onDestroy = function (callback) {
        this._destroyListeners.push(callback);
    };
    Object.defineProperty(PlatformRef.prototype, "injector", {
        /**
         * Retrieve the platform {@link Injector}, which is the parent injector for
         * every Angular application on the page and provides singleton providers.
         */
        get: function () {
            return this._injector;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the Angular platform and all Angular applications on the page.
     */
    PlatformRef.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error('The platform has already been destroyed!');
        }
        this._modules.slice().forEach(function (module) { return module.destroy(); });
        this._destroyListeners.forEach(function (listener) { return listener(); });
        this._destroyed = true;
    };
    Object.defineProperty(PlatformRef.prototype, "destroyed", {
        get: function () {
            return this._destroyed;
        },
        enumerable: true,
        configurable: true
    });
    PlatformRef = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], PlatformRef);
    return PlatformRef;
}());
export { PlatformRef };
function getNgZone(ngZoneOption, ngZoneEventCoalescing) {
    var ngZone;
    if (ngZoneOption === 'noop') {
        ngZone = new NoopNgZone();
    }
    else {
        ngZone = (ngZoneOption === 'zone.js' ? undefined : ngZoneOption) || new NgZone({
            enableLongStackTrace: isDevMode(),
            shouldCoalesceEventChangeDetection: ngZoneEventCoalescing
        });
    }
    return ngZone;
}
function _callAndReportToErrorHandler(errorHandler, ngZone, callback) {
    try {
        var result = callback();
        if (isPromise(result)) {
            return result.catch(function (e) {
                ngZone.runOutsideAngular(function () { return errorHandler.handleError(e); });
                // rethrow as the exception handler might not do it
                throw e;
            });
        }
        return result;
    }
    catch (e) {
        ngZone.runOutsideAngular(function () { return errorHandler.handleError(e); });
        // rethrow as the exception handler might not do it
        throw e;
    }
}
function optionsReducer(dst, objs) {
    if (Array.isArray(objs)) {
        dst = objs.reduce(optionsReducer, dst);
    }
    else {
        dst = __assign(__assign({}, dst), objs);
    }
    return dst;
}
/**
 * A reference to an Angular application running on a page.
 *
 * @usageNotes
 *
 * {@a is-stable-examples}
 * ### isStable examples and caveats
 *
 * Note two important points about `isStable`, demonstrated in the examples below:
 * - the application will never be stable if you start any kind
 * of recurrent asynchronous task when the application starts
 * (for example for a polling process, started with a `setInterval`, a `setTimeout`
 * or using RxJS operators like `interval`);
 * - the `isStable` Observable runs outside of the Angular zone.
 *
 * Let's imagine that you start a recurrent task
 * (here incrementing a counter, using RxJS `interval`),
 * and at the same time subscribe to `isStable`.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *      filter(stable => stable)
 *   ).subscribe(() => console.log('App is stable now');
 *   interval(1000).subscribe(counter => console.log(counter));
 * }
 * ```
 * In this example, `isStable` will never emit `true`,
 * and the trace "App is stable now" will never get logged.
 *
 * If you want to execute something when the app is stable,
 * you have to wait for the application to be stable
 * before starting your polling process.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     tap(stable => console.log('App is stable now')),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => console.log(counter));
 * }
 * ```
 * In this example, the trace "App is stable now" will be logged
 * and then the counter starts incrementing every second.
 *
 * Note also that this Observable runs outside of the Angular zone,
 * which means that the code in the subscription
 * to this Observable will not trigger the change detection.
 *
 * Let's imagine that instead of logging the counter value,
 * you update a field of your component
 * and display it in its template.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => this.value = counter);
 * }
 * ```
 * As the `isStable` Observable runs outside the zone,
 * the `value` field will be updated properly,
 * but the template will not be refreshed!
 *
 * You'll have to manually trigger the change detection to update the template.
 *
 * ```
 * constructor(appRef: ApplicationRef, cd: ChangeDetectorRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => {
 *     this.value = counter;
 *     cd.detectChanges();
 *   });
 * }
 * ```
 *
 * Or make the subscription callback run inside the zone.
 *
 * ```
 * constructor(appRef: ApplicationRef, zone: NgZone) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => zone.run(() => this.value = counter));
 * }
 * ```
 *
 * @publicApi
 */
var ApplicationRef = /** @class */ (function () {
    /** @internal */
    function ApplicationRef(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus) {
        var _this = this;
        this._zone = _zone;
        this._console = _console;
        this._injector = _injector;
        this._exceptionHandler = _exceptionHandler;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initStatus = _initStatus;
        /** @internal */
        this._bootstrapListeners = [];
        this._views = [];
        this._runningTick = false;
        this._enforceNoNewChanges = false;
        this._stable = true;
        /**
         * Get a list of component types registered to this application.
         * This list is populated even before the component is created.
         */
        this.componentTypes = [];
        /**
         * Get a list of components registered to this application.
         */
        this.components = [];
        this._enforceNoNewChanges = isDevMode();
        this._zone.onMicrotaskEmpty.subscribe({
            next: function () {
                _this._zone.run(function () {
                    _this.tick();
                });
            }
        });
        var isCurrentlyStable = new Observable(function (observer) {
            _this._stable = _this._zone.isStable && !_this._zone.hasPendingMacrotasks &&
                !_this._zone.hasPendingMicrotasks;
            _this._zone.runOutsideAngular(function () {
                observer.next(_this._stable);
                observer.complete();
            });
        });
        var isStable = new Observable(function (observer) {
            // Create the subscription to onStable outside the Angular Zone so that
            // the callback is run outside the Angular Zone.
            var stableSub;
            _this._zone.runOutsideAngular(function () {
                stableSub = _this._zone.onStable.subscribe(function () {
                    NgZone.assertNotInAngularZone();
                    // Check whether there are no pending macro/micro tasks in the next tick
                    // to allow for NgZone to update the state.
                    scheduleMicroTask(function () {
                        if (!_this._stable && !_this._zone.hasPendingMacrotasks &&
                            !_this._zone.hasPendingMicrotasks) {
                            _this._stable = true;
                            observer.next(true);
                        }
                    });
                });
            });
            var unstableSub = _this._zone.onUnstable.subscribe(function () {
                NgZone.assertInAngularZone();
                if (_this._stable) {
                    _this._stable = false;
                    _this._zone.runOutsideAngular(function () {
                        observer.next(false);
                    });
                }
            });
            return function () {
                stableSub.unsubscribe();
                unstableSub.unsubscribe();
            };
        });
        this.isStable =
            merge(isCurrentlyStable, isStable.pipe(share()));
    }
    /**
     * Bootstrap a new component at the root level of the application.
     *
     * @usageNotes
     * ### Bootstrap process
     *
     * When bootstrapping a new root component into an application, Angular mounts the
     * specified application component onto DOM elements identified by the componentType's
     * selector and kicks off automatic change detection to finish initializing the component.
     *
     * Optionally, a component can be mounted onto a DOM element that does not match the
     * componentType's selector.
     *
     * ### Example
     * {@example core/ts/platform/platform.ts region='longform'}
     */
    ApplicationRef.prototype.bootstrap = function (componentOrFactory, rootSelectorOrNode) {
        var _this = this;
        if (!this._initStatus.done) {
            throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
        }
        var componentFactory;
        if (componentOrFactory instanceof ComponentFactory) {
            componentFactory = componentOrFactory;
        }
        else {
            componentFactory =
                this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
        }
        this.componentTypes.push(componentFactory.componentType);
        // Create a factory associated with the current module if it's not bound to some other
        var ngModule = isBoundToModule(componentFactory) ? undefined : this._injector.get(NgModuleRef);
        var selectorOrNode = rootSelectorOrNode || componentFactory.selector;
        var compRef = componentFactory.create(Injector.NULL, [], selectorOrNode, ngModule);
        compRef.onDestroy(function () {
            _this._unloadComponent(compRef);
        });
        var testability = compRef.injector.get(Testability, null);
        if (testability) {
            compRef.injector.get(TestabilityRegistry)
                .registerApplication(compRef.location.nativeElement, testability);
        }
        this._loadComponent(compRef);
        if (isDevMode()) {
            this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode.");
        }
        return compRef;
    };
    /**
     * Invoke this method to explicitly process change detection and its side-effects.
     *
     * In development mode, `tick()` also performs a second change detection cycle to ensure that no
     * further changes are detected. If additional changes are picked up during this second cycle,
     * bindings in the app have side-effects that cannot be resolved in a single change detection
     * pass.
     * In this case, Angular throws an error, since an Angular application can only have one change
     * detection pass during which all change detection must complete.
     */
    ApplicationRef.prototype.tick = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (this._runningTick) {
            throw new Error('ApplicationRef.tick is called recursively');
        }
        try {
            this._runningTick = true;
            try {
                for (var _c = __values(this._views), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var view = _d.value;
                    view.detectChanges();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this._enforceNoNewChanges) {
                try {
                    for (var _e = __values(this._views), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var view = _f.value;
                        view.checkNoChanges();
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e) {
            // Attention: Don't rethrow as it could cancel subscriptions to Observables!
            this._zone.runOutsideAngular(function () { return _this._exceptionHandler.handleError(e); });
        }
        finally {
            this._runningTick = false;
        }
    };
    /**
     * Attaches a view so that it will be dirty checked.
     * The view will be automatically detached when it is destroyed.
     * This will throw if the view is already attached to a ViewContainer.
     */
    ApplicationRef.prototype.attachView = function (viewRef) {
        var view = viewRef;
        this._views.push(view);
        view.attachToAppRef(this);
    };
    /**
     * Detaches a view from dirty checking again.
     */
    ApplicationRef.prototype.detachView = function (viewRef) {
        var view = viewRef;
        remove(this._views, view);
        view.detachFromAppRef();
    };
    ApplicationRef.prototype._loadComponent = function (componentRef) {
        this.attachView(componentRef.hostView);
        this.tick();
        this.components.push(componentRef);
        // Get the listeners lazily to prevent DI cycles.
        var listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, []).concat(this._bootstrapListeners);
        listeners.forEach(function (listener) { return listener(componentRef); });
    };
    ApplicationRef.prototype._unloadComponent = function (componentRef) {
        this.detachView(componentRef.hostView);
        remove(this.components, componentRef);
    };
    /** @internal */
    ApplicationRef.prototype.ngOnDestroy = function () {
        // TODO(alxhub): Dispose of the NgZone.
        this._views.slice().forEach(function (view) { return view.destroy(); });
    };
    Object.defineProperty(ApplicationRef.prototype, "viewCount", {
        /**
         * Returns the number of attached views.
         */
        get: function () {
            return this._views.length;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationRef = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgZone, Console, Injector,
            ErrorHandler,
            ComponentFactoryResolver,
            ApplicationInitStatus])
    ], ApplicationRef);
    return ApplicationRef;
}());
export { ApplicationRef };
function remove(list, el) {
    var index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
function _lastDefined(args) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
function _mergeArrays(parts) {
    var result = [];
    parts.forEach(function (part) { return part && result.push.apply(result, __spread(part)); });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvYXBwbGljYXRpb25fcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUF5QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFrQixNQUFNLG1CQUFtQixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQzFFLE9BQU8sRUFBQyw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzVHLE9BQU8sRUFBdUMsV0FBVyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0YsT0FBTyxFQUFDLHVDQUF1QyxFQUFFLHlCQUF5QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0csT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxJQUFJLGlCQUFpQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0UsT0FBTyxFQUFDLHlCQUF5QixJQUFJLDBCQUEwQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEcsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWxELElBQUksU0FBc0IsQ0FBQztBQUUzQixJQUFJLHNCQUFzQixHQUVZLGdDQUFnQyxDQUFDO0FBRXZFLFNBQVMsZ0NBQWdDLENBQ3JDLFFBQWtCLEVBQUUsT0FBd0IsRUFDNUMsVUFBbUI7SUFDckIsSUFBTSxlQUFlLEdBQW9CLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkUsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0QsT0FBTyxRQUFRLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQ0FBaUMsQ0FDN0MsUUFBa0IsRUFBRSxPQUF3QixFQUM1QyxVQUFtQjtJQUNyQixTQUFTLElBQUksa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFNUMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFM0UsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO1FBQ2pELCtGQUErRjtRQUMvRiwrRkFBK0Y7UUFDL0YsMkJBQTJCO1FBQzNCLGFBQWEsQ0FBQztZQUNaLG9CQUFvQixFQUNoQixZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxvQkFBb0IsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1lBQzlFLG1CQUFtQixFQUNmLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLG1CQUFtQixFQUEzQixDQUEyQixDQUFDLENBQUM7U0FDOUUsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFNLGFBQWEsR0FBRyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXhELElBQUksdUNBQXVDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDdkM7SUFFRCxJQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVUsRUFBWixDQUFZLENBQUMsQ0FBQyxDQUFDO0lBRS9FLGdGQUFnRjtJQUNoRixxRkFBcUY7SUFDckYsbUZBQW1GO0lBQ25GLDBDQUEwQztJQUMxQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUscUZBQXFGO0lBQ3JGLHVGQUF1RjtJQUN2RixPQUFPLHlCQUF5QixDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXhDLENBQXdDLENBQUM7U0FDNUUsSUFBSSxDQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELDRFQUE0RTtBQUM1RSx5RUFBeUU7QUFDekUsaURBQWlEO0FBQ2pELE1BQU0sVUFBVSxtQ0FBbUMsS0FBSSxDQUFDO0FBQ3hELE1BQU0sVUFBVSxvQ0FBb0M7SUFDbEQsU0FBUyxJQUFJLDBCQUEwQixFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUVELElBQUkseUJBQXlCLEdBQWMsbUNBQW1DLENBQUM7QUFFL0UsSUFBSSxlQUFlLEdBQTRDLHlCQUF5QixDQUFDO0FBRXpGLE1BQU0sVUFBVSx5QkFBeUIsQ0FBSSxFQUF1QjtJQUNsRSxPQUFPLEVBQUUsWUFBWSw2QkFBNkIsQ0FBQztBQUNyRCxDQUFDO0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFJLEVBQXVCO0lBQ25FLE9BQVEsRUFBNEIsQ0FBQyxlQUFlLENBQUM7QUFDdkQsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLElBQUksY0FBYyxDQUFVLG9CQUFvQixDQUFDLENBQUM7QUFJMUY7Ozs7R0FJRztBQUNIO0lBQ0Usc0JBQW1CLElBQVksRUFBUyxLQUFVO1FBQS9CLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFLO0lBQUcsQ0FBQztJQUN4RCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjtJQUMvQyxJQUFJLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1FBQ2pDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FDWCwrRUFBK0UsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELElBQUksS0FBSztRQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLEVBQUUsRUFBTixDQUFNLENBQUMsQ0FBQztJQUNoRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FDakMscUJBQWdGLEVBQUUsSUFBWSxFQUM5RixTQUFnQztJQUFoQywwQkFBQSxFQUFBLGNBQWdDO0lBQ2xDLElBQU0sSUFBSSxHQUFHLGVBQWEsSUFBTSxDQUFDO0lBQ2pDLElBQU0sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sVUFBQyxjQUFxQztRQUFyQywrQkFBQSxFQUFBLG1CQUFxQztRQUMzQyxJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3ZFLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLHFCQUFxQixDQUNqQixTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFNLGlCQUFpQixHQUNuQixTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFO29CQUN6RSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCLENBQUMsQ0FBQztnQkFDUCxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdFO1NBQ0Y7UUFDRCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsYUFBa0I7SUFDL0MsSUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFFL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUN4QztJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FDWCxzRkFBc0YsQ0FBQyxDQUFDO0tBQzdGO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZUFBZTtJQUM3QixJQUFJLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFDckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlELENBQUM7QUF1Q0Q7Ozs7Ozs7OztHQVNHO0FBRUg7SUFLRSxnQkFBZ0I7SUFDaEIscUJBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFML0IsYUFBUSxHQUF1QixFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFHTSxDQUFDO0lBRTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQkc7SUFDSCw0Q0FBc0IsR0FBdEIsVUFBMEIsYUFBaUMsRUFBRSxPQUEwQjtRQUF2RixpQkF3Q0M7UUF0Q0MseUVBQXlFO1FBQ3pFLDhEQUE4RDtRQUM5RCw0RUFBNEU7UUFDNUUsOENBQThDO1FBQzlDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQU0scUJBQXFCLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksS0FBSyxDQUFDO1FBQ2xGLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUM5RCxJQUFNLFNBQVMsR0FBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDMUUsZ0RBQWdEO1FBQ2hELHFGQUFxRjtRQUNyRixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDaEIsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDbEMsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDeEYsSUFBTSxTQUFTLEdBQTJCLGFBQWEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0UsSUFBTSxnQkFBZ0IsR0FBc0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztZQUM1RCxNQUFPLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLE1BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUN4RCxJQUFJLEVBQUUsVUFBQyxLQUFVO29CQUNmLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEMsQ0FBQzthQUNGLENBQUMsRUFKOEIsQ0FJOUIsQ0FBQyxDQUFDO1lBQ0osT0FBTyw0QkFBNEIsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFPLEVBQUU7Z0JBQzdELElBQU0sVUFBVSxHQUEwQixTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN4RixVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzdCLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksVUFBVSxFQUFFO3dCQUNkLG9GQUFvRjt3QkFDcEYsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7d0JBQ3RFLFdBQVcsQ0FBQyxRQUFRLElBQUksaUJBQWlCLENBQUMsQ0FBQztxQkFDNUM7b0JBQ0QsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxPQUFPLFNBQVMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNILHFDQUFlLEdBQWYsVUFDSSxVQUFtQixFQUNuQixlQUM0QztRQUhoRCxpQkFPQztRQUxHLGdDQUFBLEVBQUEsb0JBQzRDO1FBQzlDLElBQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDcEQsT0FBTyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7YUFDNUQsSUFBSSxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTyx3Q0FBa0IsR0FBMUIsVUFBMkIsU0FBbUM7UUFDNUQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFtQixDQUFDO1FBQ3hFLElBQUksU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0MsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztTQUNsRTthQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDM0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQ1gsZ0JBQ0ksU0FBUyxDQUNMLFNBQVMsQ0FBQyxRQUFRO2lCQUNiLFdBQVcsQ0FBQyxtSEFBNEc7Z0JBQ3JJLDZCQUE2QixDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBUyxHQUFULFVBQVUsUUFBb0I7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBTUQsc0JBQUksaUNBQVE7UUFKWjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ0gsNkJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQUksa0NBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQS9JVSxXQUFXO1FBRHZCLFVBQVUsRUFBRTt5Q0FPb0IsUUFBUTtPQU41QixXQUFXLENBZ0p2QjtJQUFELGtCQUFDO0NBQUEsQUFoSkQsSUFnSkM7U0FoSlksV0FBVztBQWtKeEIsU0FBUyxTQUFTLENBQ2QsWUFBK0MsRUFBRSxxQkFBOEI7SUFDakYsSUFBSSxNQUFjLENBQUM7SUFFbkIsSUFBSSxZQUFZLEtBQUssTUFBTSxFQUFFO1FBQzNCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0tBQzNCO1NBQU07UUFDTCxNQUFNLEdBQUcsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1lBQ3BFLG9CQUFvQixFQUFFLFNBQVMsRUFBRTtZQUNqQyxrQ0FBa0MsRUFBRSxxQkFBcUI7U0FDMUQsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FDakMsWUFBMEIsRUFBRSxNQUFjLEVBQUUsUUFBbUI7SUFDakUsSUFBSTtRQUNGLElBQU0sTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQU07Z0JBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO2dCQUM1RCxtREFBbUQ7Z0JBQ25ELE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQzVELG1EQUFtRDtRQUNuRCxNQUFNLENBQUMsQ0FBQztLQUNUO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFtQixHQUFRLEVBQUUsSUFBVztJQUM3RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3hDO1NBQU07UUFDTCxHQUFHLHlCQUFPLEdBQUcsR0FBTSxJQUFZLENBQUMsQ0FBQztLQUNsQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRGRztBQUVIO0lBMkJFLGdCQUFnQjtJQUNoQix3QkFDWSxLQUFhLEVBQVUsUUFBaUIsRUFBVSxTQUFtQixFQUNyRSxpQkFBK0IsRUFDL0IseUJBQW1ELEVBQ25ELFdBQWtDO1FBSjlDLGlCQThEQztRQTdEVyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDckUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFjO1FBQy9CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBL0I5QyxnQkFBZ0I7UUFDUix3QkFBbUIsR0FBNkMsRUFBRSxDQUFDO1FBQ25FLFdBQU0sR0FBc0IsRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZCOzs7V0FHRztRQUNhLG1CQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUVqRDs7V0FFRztRQUNhLGVBQVUsR0FBd0IsRUFBRSxDQUFDO1FBZ0JuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFO2dCQUNKLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNiLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFNLGlCQUFpQixHQUFHLElBQUksVUFBVSxDQUFVLFVBQUMsUUFBMkI7WUFDNUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CO2dCQUNsRSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDckMsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQVUsVUFBQyxRQUEyQjtZQUNuRSx1RUFBdUU7WUFDdkUsZ0RBQWdEO1lBQ2hELElBQUksU0FBdUIsQ0FBQztZQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2dCQUMzQixTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO29CQUN4QyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFFaEMsd0VBQXdFO29CQUN4RSwyQ0FBMkM7b0JBQzNDLGlCQUFpQixDQUFDO3dCQUNoQixJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9COzRCQUNqRCxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUU7NEJBQ3BDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNyQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBTSxXQUFXLEdBQWlCLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzdCLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7d0JBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPO2dCQUNMLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDeEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUYsSUFBd0MsQ0FBQyxRQUFRO1lBQzlDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsa0NBQVMsR0FBVCxVQUFhLGtCQUErQyxFQUFFLGtCQUErQjtRQUE3RixpQkFvQ0M7UUFsQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQ1gsK0lBQStJLENBQUMsQ0FBQztTQUN0SjtRQUNELElBQUksZ0JBQXFDLENBQUM7UUFDMUMsSUFBSSxrQkFBa0IsWUFBWSxnQkFBZ0IsRUFBRTtZQUNsRCxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztTQUN2QzthQUFNO1lBQ0wsZ0JBQWdCO2dCQUNaLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFekQsc0ZBQXNGO1FBQ3RGLElBQU0sUUFBUSxHQUNWLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BGLElBQU0sY0FBYyxHQUFHLGtCQUFrQixJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUN2RSxJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJGLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksV0FBVyxFQUFFO1lBQ2YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7aUJBQ3BDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2Isa0dBQWtHLENBQUMsQ0FBQztTQUN6RztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCw2QkFBSSxHQUFKOztRQUFBLGlCQXFCQztRQXBCQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztnQkFDekIsS0FBaUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxnQkFBQSw0QkFBRTtvQkFBekIsSUFBSSxJQUFJLFdBQUE7b0JBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN0Qjs7Ozs7Ozs7O1lBQ0QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7O29CQUM3QixLQUFpQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO3dCQUF6QixJQUFJLElBQUksV0FBQTt3QkFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQ3ZCOzs7Ozs7Ozs7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDViw0RUFBNEU7WUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1NBQzNFO2dCQUFTO1lBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFNLElBQUksR0FBSSxPQUEyQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLElBQU0sSUFBSSxHQUFJLE9BQTJCLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHVDQUFjLEdBQXRCLFVBQXVCLFlBQStCO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLGlEQUFpRDtRQUNqRCxJQUFNLFNBQVMsR0FDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyx5Q0FBZ0IsR0FBeEIsVUFBeUIsWUFBK0I7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixvQ0FBVyxHQUFYO1FBQ0UsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFLRCxzQkFBSSxxQ0FBUztRQUhiOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBak9VLGNBQWM7UUFEMUIsVUFBVSxFQUFFO3lDQThCUSxNQUFNLEVBQW9CLE9BQU8sRUFBcUIsUUFBUTtZQUNsRCxZQUFZO1lBQ0osd0JBQXdCO1lBQ3RDLHFCQUFxQjtPQWhDbkMsY0FBYyxDQWtPMUI7SUFBRCxxQkFBQztDQUFBLEFBbE9ELElBa09DO1NBbE9ZLGNBQWM7QUFvTzNCLFNBQVMsTUFBTSxDQUFJLElBQVMsRUFBRSxFQUFLO0lBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBSSxJQUFTO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFjO0lBQ2xDLElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUFTLElBQUksRUFBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICcuL3V0aWwvbmdfaml0X21vZGUnO1xuXG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7c2hhcmV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtBcHBsaWNhdGlvbkluaXRTdGF0dXN9IGZyb20gJy4vYXBwbGljYXRpb25faW5pdCc7XG5pbXBvcnQge0FQUF9CT09UU1RSQVBfTElTVEVORVIsIFBMQVRGT1JNX0lOSVRJQUxJWkVSfSBmcm9tICcuL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5pbXBvcnQge2dldENvbXBpbGVyRmFjYWRlfSBmcm9tICcuL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZSc7XG5pbXBvcnQge0NvbnNvbGV9IGZyb20gJy4vY29uc29sZSc7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciwgU3RhdGljUHJvdmlkZXJ9IGZyb20gJy4vZGknO1xuaW1wb3J0IHtJTkpFQ1RPUl9TQ09QRX0gZnJvbSAnLi9kaS9zY29wZSc7XG5pbXBvcnQge0Vycm9ySGFuZGxlcn0gZnJvbSAnLi9lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7REVGQVVMVF9MT0NBTEVfSUR9IGZyb20gJy4vaTE4bi9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtMT0NBTEVfSUR9IGZyb20gJy4vaTE4bi90b2tlbnMnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7aXZ5RW5hYmxlZH0gZnJvbSAnLi9pdnlfc3dpdGNoJztcbmltcG9ydCB7Q09NUElMRVJfT1BUSU9OUywgQ29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnN9IGZyb20gJy4vbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmfSBmcm9tICcuL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5pbXBvcnQge0NvbXBvbmVudEZhY3RvcnlCb3VuZFRvTW9kdWxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5X3Jlc29sdmVyJztcbmltcG9ydCB7SW50ZXJuYWxOZ01vZHVsZVJlZiwgTmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZVJlZn0gZnJvbSAnLi9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtJbnRlcm5hbFZpZXdSZWYsIFZpZXdSZWZ9IGZyb20gJy4vbGlua2VyL3ZpZXdfcmVmJztcbmltcG9ydCB7aXNDb21wb25lbnRSZXNvdXJjZVJlc29sdXRpb25RdWV1ZUVtcHR5LCByZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzfSBmcm9tICcuL21ldGFkYXRhL3Jlc291cmNlX2xvYWRpbmcnO1xuaW1wb3J0IHthc3NlcnROZ01vZHVsZVR5cGV9IGZyb20gJy4vcmVuZGVyMy9hc3NlcnQnO1xuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5IGFzIFIzQ29tcG9uZW50RmFjdG9yeX0gZnJvbSAnLi9yZW5kZXIzL2NvbXBvbmVudF9yZWYnO1xuaW1wb3J0IHtzZXRMb2NhbGVJZH0gZnJvbSAnLi9yZW5kZXIzL2kxOG4nO1xuaW1wb3J0IHtzZXRKaXRPcHRpb25zfSBmcm9tICcuL3JlbmRlcjMvaml0L2ppdF9vcHRpb25zJztcbmltcG9ydCB7TmdNb2R1bGVGYWN0b3J5IGFzIFIzTmdNb2R1bGVGYWN0b3J5fSBmcm9tICcuL3JlbmRlcjMvbmdfbW9kdWxlX3JlZic7XG5pbXBvcnQge3B1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHMgYXMgX3B1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHN9IGZyb20gJy4vcmVuZGVyMy91dGlsL2dsb2JhbF91dGlscyc7XG5pbXBvcnQge1Rlc3RhYmlsaXR5LCBUZXN0YWJpbGl0eVJlZ2lzdHJ5fSBmcm9tICcuL3Rlc3RhYmlsaXR5L3Rlc3RhYmlsaXR5JztcbmltcG9ydCB7aXNEZXZNb2RlfSBmcm9tICcuL3V0aWwvaXNfZGV2X21vZGUnO1xuaW1wb3J0IHtpc1Byb21pc2V9IGZyb20gJy4vdXRpbC9sYW5nJztcbmltcG9ydCB7c2NoZWR1bGVNaWNyb1Rhc2t9IGZyb20gJy4vdXRpbC9taWNyb3Rhc2snO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4vdXRpbC9zdHJpbmdpZnknO1xuaW1wb3J0IHtOZ1pvbmUsIE5vb3BOZ1pvbmV9IGZyb20gJy4vem9uZS9uZ196b25lJztcblxubGV0IF9wbGF0Zm9ybTogUGxhdGZvcm1SZWY7XG5cbmxldCBjb21waWxlTmdNb2R1bGVGYWN0b3J5OlxuICAgIDxNPihpbmplY3RvcjogSW5qZWN0b3IsIG9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgbW9kdWxlVHlwZTogVHlwZTxNPikgPT5cbiAgICAgICAgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8TT4+ID0gY29tcGlsZU5nTW9kdWxlRmFjdG9yeV9fUFJFX1IzX187XG5cbmZ1bmN0aW9uIGNvbXBpbGVOZ01vZHVsZUZhY3RvcnlfX1BSRV9SM19fPE0+KFxuICAgIGluamVjdG9yOiBJbmplY3Rvciwgb3B0aW9uczogQ29tcGlsZXJPcHRpb25zLFxuICAgIG1vZHVsZVR5cGU6IFR5cGU8TT4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxNPj4ge1xuICBjb25zdCBjb21waWxlckZhY3Rvcnk6IENvbXBpbGVyRmFjdG9yeSA9IGluamVjdG9yLmdldChDb21waWxlckZhY3RvcnkpO1xuICBjb25zdCBjb21waWxlciA9IGNvbXBpbGVyRmFjdG9yeS5jcmVhdGVDb21waWxlcihbb3B0aW9uc10pO1xuICByZXR1cm4gY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKG1vZHVsZVR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5nTW9kdWxlRmFjdG9yeV9fUE9TVF9SM19fPE0+KFxuICAgIGluamVjdG9yOiBJbmplY3Rvciwgb3B0aW9uczogQ29tcGlsZXJPcHRpb25zLFxuICAgIG1vZHVsZVR5cGU6IFR5cGU8TT4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxNPj4ge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TmdNb2R1bGVUeXBlKG1vZHVsZVR5cGUpO1xuXG4gIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IGluamVjdG9yLmdldChDT01QSUxFUl9PUFRJT05TLCBbXSkuY29uY2F0KG9wdGlvbnMpO1xuXG4gIGlmICh0eXBlb2YgbmdKaXRNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0ppdE1vZGUpIHtcbiAgICAvLyBDb25maWd1cmUgdGhlIGNvbXBpbGVyIHRvIHVzZSB0aGUgcHJvdmlkZWQgb3B0aW9ucy4gVGhpcyBjYWxsIG1heSBmYWlsIHdoZW4gbXVsdGlwbGUgbW9kdWxlc1xuICAgIC8vIGFyZSBib290c3RyYXBwZWQgd2l0aCBpbmNvbXBhdGlibGUgb3B0aW9ucywgYXMgYSBjb21wb25lbnQgY2FuIG9ubHkgYmUgY29tcGlsZWQgYWNjb3JkaW5nIHRvXG4gICAgLy8gYSBzaW5nbGUgc2V0IG9mIG9wdGlvbnMuXG4gICAgc2V0Sml0T3B0aW9ucyh7XG4gICAgICBkZWZhdWx0RW5jYXBzdWxhdGlvbjpcbiAgICAgICAgICBfbGFzdERlZmluZWQoY29tcGlsZXJPcHRpb25zLm1hcChvcHRpb25zID0+IG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24pKSxcbiAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6XG4gICAgICAgICAgX2xhc3REZWZpbmVkKGNvbXBpbGVyT3B0aW9ucy5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByZXNlcnZlV2hpdGVzcGFjZXMpKSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG1vZHVsZUZhY3RvcnkgPSBuZXcgUjNOZ01vZHVsZUZhY3RvcnkobW9kdWxlVHlwZSk7XG5cbiAgaWYgKGlzQ29tcG9uZW50UmVzb3VyY2VSZXNvbHV0aW9uUXVldWVFbXB0eSgpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtb2R1bGVGYWN0b3J5KTtcbiAgfVxuXG4gIGNvbnN0IGNvbXBpbGVyUHJvdmlkZXJzID0gX21lcmdlQXJyYXlzKGNvbXBpbGVyT3B0aW9ucy5tYXAobyA9PiBvLnByb3ZpZGVycyEpKTtcblxuICAvLyBJbiBjYXNlIHRoZXJlIGFyZSBubyBjb21waWxlciBwcm92aWRlcnMsIHdlIGp1c3QgcmV0dXJuIHRoZSBtb2R1bGUgZmFjdG9yeSBhc1xuICAvLyB0aGVyZSB3b24ndCBiZSBhbnkgcmVzb3VyY2UgbG9hZGVyLiBUaGlzIGNhbiBoYXBwZW4gd2l0aCBJdnksIGJlY2F1c2UgQU9UIGNvbXBpbGVkXG4gIC8vIG1vZHVsZXMgY2FuIGJlIHN0aWxsIHBhc3NlZCB0aHJvdWdoIFwiYm9vdHN0cmFwTW9kdWxlXCIuIEluIHRoYXQgY2FzZSB3ZSBzaG91bGRuJ3RcbiAgLy8gdW5uZWNlc3NhcmlseSByZXF1aXJlIHRoZSBKSVQgY29tcGlsZXIuXG4gIGlmIChjb21waWxlclByb3ZpZGVycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1vZHVsZUZhY3RvcnkpO1xuICB9XG5cbiAgY29uc3QgY29tcGlsZXIgPSBnZXRDb21waWxlckZhY2FkZSgpO1xuICBjb25zdCBjb21waWxlckluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtwcm92aWRlcnM6IGNvbXBpbGVyUHJvdmlkZXJzfSk7XG4gIGNvbnN0IHJlc291cmNlTG9hZGVyID0gY29tcGlsZXJJbmplY3Rvci5nZXQoY29tcGlsZXIuUmVzb3VyY2VMb2FkZXIpO1xuICAvLyBUaGUgcmVzb3VyY2UgbG9hZGVyIGNhbiBhbHNvIHJldHVybiBhIHN0cmluZyB3aGlsZSB0aGUgXCJyZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzXCJcbiAgLy8gYWx3YXlzIGV4cGVjdHMgYSBwcm9taXNlLiBUaGVyZWZvcmUgd2UgbmVlZCB0byB3cmFwIHRoZSByZXR1cm5lZCB2YWx1ZSBpbiBhIHByb21pc2UuXG4gIHJldHVybiByZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzKHVybCA9PiBQcm9taXNlLnJlc29sdmUocmVzb3VyY2VMb2FkZXIuZ2V0KHVybCkpKVxuICAgICAgLnRoZW4oKCkgPT4gbW9kdWxlRmFjdG9yeSk7XG59XG5cbi8vIHRoZSBgd2luZG93Lm5nYCBnbG9iYWwgdXRpbGl0aWVzIGFyZSBvbmx5IGF2YWlsYWJsZSBpbiBub24tVkUgdmVyc2lvbnMgb2Zcbi8vIEFuZ3VsYXIuIFRoZSBmdW5jdGlvbiBzd2l0Y2ggYmVsb3cgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgY29kZSBpcyBub3Rcbi8vIGluY2x1ZGVkIGludG8gQW5ndWxhciB3aGVuIFBSRSBtb2RlIGlzIGFjdGl2ZS5cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoRGVmYXVsdEdsb2JhbFV0aWxzX19QUkVfUjNfXygpIHt9XG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaERlZmF1bHRHbG9iYWxVdGlsc19fUE9TVF9SM19fKCkge1xuICBuZ0Rldk1vZGUgJiYgX3B1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHMoKTtcbn1cblxubGV0IHB1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHM6ICgpID0+IGFueSA9IHB1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHNfX1BSRV9SM19fO1xuXG5sZXQgaXNCb3VuZFRvTW9kdWxlOiA8Qz4oY2Y6IENvbXBvbmVudEZhY3Rvcnk8Qz4pID0+IGJvb2xlYW4gPSBpc0JvdW5kVG9Nb2R1bGVfX1BSRV9SM19fO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCb3VuZFRvTW9kdWxlX19QUkVfUjNfXzxDPihjZjogQ29tcG9uZW50RmFjdG9yeTxDPik6IGJvb2xlYW4ge1xuICByZXR1cm4gY2YgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5Qm91bmRUb01vZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm91bmRUb01vZHVsZV9fUE9TVF9SM19fPEM+KGNmOiBDb21wb25lbnRGYWN0b3J5PEM+KTogYm9vbGVhbiB7XG4gIHJldHVybiAoY2YgYXMgUjNDb21wb25lbnRGYWN0b3J5PEM+KS5pc0JvdW5kVG9Nb2R1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBBTExPV19NVUxUSVBMRV9QTEFURk9STVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ0FsbG93TXVsdGlwbGVUb2tlbicpO1xuXG5cblxuLyoqXG4gKiBBIHRva2VuIGZvciB0aGlyZC1wYXJ0eSBjb21wb25lbnRzIHRoYXQgY2FuIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCBOZ1Byb2JlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIE5nUHJvYmVUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0b2tlbjogYW55KSB7fVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwbGF0Zm9ybS5cbiAqIFBsYXRmb3JtcyBoYXZlIHRvIGJlIGVhZ2VybHkgY3JlYXRlZCB2aWEgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF0Zm9ybShpbmplY3RvcjogSW5qZWN0b3IpOiBQbGF0Zm9ybVJlZiB7XG4gIGlmIChfcGxhdGZvcm0gJiYgIV9wbGF0Zm9ybS5kZXN0cm95ZWQgJiZcbiAgICAgICFfcGxhdGZvcm0uaW5qZWN0b3IuZ2V0KEFMTE9XX01VTFRJUExFX1BMQVRGT1JNUywgZmFsc2UpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlcmUgY2FuIGJlIG9ubHkgb25lIHBsYXRmb3JtLiBEZXN0cm95IHRoZSBwcmV2aW91cyBvbmUgdG8gY3JlYXRlIGEgbmV3IG9uZS4nKTtcbiAgfVxuICBwdWJsaXNoRGVmYXVsdEdsb2JhbFV0aWxzKCk7XG4gIF9wbGF0Zm9ybSA9IGluamVjdG9yLmdldChQbGF0Zm9ybVJlZik7XG4gIGNvbnN0IGluaXRzID0gaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lOSVRJQUxJWkVSLCBudWxsKTtcbiAgaWYgKGluaXRzKSBpbml0cy5mb3JFYWNoKChpbml0OiBhbnkpID0+IGluaXQoKSk7XG4gIHJldHVybiBfcGxhdGZvcm07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZhY3RvcnkgZm9yIGEgcGxhdGZvcm1cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkoXG4gICAgcGFyZW50UGxhdGZvcm1GYWN0b3J5OiAoKGV4dHJhUHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXSkgPT4gUGxhdGZvcm1SZWYpfG51bGwsIG5hbWU6IHN0cmluZyxcbiAgICBwcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXSk6IChleHRyYVByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10pID0+IFBsYXRmb3JtUmVmIHtcbiAgY29uc3QgZGVzYyA9IGBQbGF0Zm9ybTogJHtuYW1lfWA7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBJbmplY3Rpb25Ub2tlbihkZXNjKTtcbiAgcmV0dXJuIChleHRyYVByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdKSA9PiB7XG4gICAgbGV0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKTtcbiAgICBpZiAoIXBsYXRmb3JtIHx8IHBsYXRmb3JtLmluamVjdG9yLmdldChBTExPV19NVUxUSVBMRV9QTEFURk9STVMsIGZhbHNlKSkge1xuICAgICAgaWYgKHBhcmVudFBsYXRmb3JtRmFjdG9yeSkge1xuICAgICAgICBwYXJlbnRQbGF0Zm9ybUZhY3RvcnkoXG4gICAgICAgICAgICBwcm92aWRlcnMuY29uY2F0KGV4dHJhUHJvdmlkZXJzKS5jb25jYXQoe3Byb3ZpZGU6IG1hcmtlciwgdXNlVmFsdWU6IHRydWV9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbmplY3RlZFByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9XG4gICAgICAgICAgICBwcm92aWRlcnMuY29uY2F0KGV4dHJhUHJvdmlkZXJzKS5jb25jYXQoe3Byb3ZpZGU6IG1hcmtlciwgdXNlVmFsdWU6IHRydWV9LCB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IElOSkVDVE9SX1NDT1BFLFxuICAgICAgICAgICAgICB1c2VWYWx1ZTogJ3BsYXRmb3JtJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNyZWF0ZVBsYXRmb3JtKEluamVjdG9yLmNyZWF0ZSh7cHJvdmlkZXJzOiBpbmplY3RlZFByb3ZpZGVycywgbmFtZTogZGVzY30pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzc2VydFBsYXRmb3JtKG1hcmtlcik7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIHRoYXQgdGhlcmUgY3VycmVudGx5IGlzIGEgcGxhdGZvcm0gd2hpY2ggY29udGFpbnMgdGhlIGdpdmVuIHRva2VuIGFzIGEgcHJvdmlkZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGxhdGZvcm0ocmVxdWlyZWRUb2tlbjogYW55KTogUGxhdGZvcm1SZWYge1xuICBjb25zdCBwbGF0Zm9ybSA9IGdldFBsYXRmb3JtKCk7XG5cbiAgaWYgKCFwbGF0Zm9ybSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gcGxhdGZvcm0gZXhpc3RzIScpO1xuICB9XG5cbiAgaWYgKCFwbGF0Zm9ybS5pbmplY3Rvci5nZXQocmVxdWlyZWRUb2tlbiwgbnVsbCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdBIHBsYXRmb3JtIHdpdGggYSBkaWZmZXJlbnQgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjcmVhdGVkLiBQbGVhc2UgZGVzdHJveSBpdCBmaXJzdC4nKTtcbiAgfVxuXG4gIHJldHVybiBwbGF0Zm9ybTtcbn1cblxuLyoqXG4gKiBEZXN0cm95IHRoZSBleGlzdGluZyBwbGF0Zm9ybS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95UGxhdGZvcm0oKTogdm9pZCB7XG4gIGlmIChfcGxhdGZvcm0gJiYgIV9wbGF0Zm9ybS5kZXN0cm95ZWQpIHtcbiAgICBfcGxhdGZvcm0uZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBwbGF0Zm9ybS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpOiBQbGF0Zm9ybVJlZnxudWxsIHtcbiAgcmV0dXJuIF9wbGF0Zm9ybSAmJiAhX3BsYXRmb3JtLmRlc3Ryb3llZCA/IF9wbGF0Zm9ybSA6IG51bGw7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYWRkaXRpb25hbCBvcHRpb25zIHRvIHRoZSBib290c3RyYXBpbmcgcHJvY2Vzcy5cbiAqXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJvb3RzdHJhcE9wdGlvbnMge1xuICAvKipcbiAgICogT3B0aW9uYWxseSBzcGVjaWZ5IHdoaWNoIGBOZ1pvbmVgIHNob3VsZCBiZSB1c2VkLlxuICAgKlxuICAgKiAtIFByb3ZpZGUgeW91ciBvd24gYE5nWm9uZWAgaW5zdGFuY2UuXG4gICAqIC0gYHpvbmUuanNgIC0gVXNlIGRlZmF1bHQgYE5nWm9uZWAgd2hpY2ggcmVxdWlyZXMgYFpvbmUuanNgLlxuICAgKiAtIGBub29wYCAtIFVzZSBgTm9vcE5nWm9uZWAgd2hpY2ggZG9lcyBub3RoaW5nLlxuICAgKi9cbiAgbmdab25lPzogTmdab25lfCd6b25lLmpzJ3wnbm9vcCc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsbHkgc3BlY2lmeSBjb2FsZXNjaW5nIGV2ZW50IGNoYW5nZSBkZXRlY3Rpb25zIG9yIG5vdC5cbiAgICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyBjYXNlLlxuICAgKlxuICAgKiA8ZGl2IChjbGljayk9XCJkb1NvbWV0aGluZygpXCI+XG4gICAqICAgPGJ1dHRvbiAoY2xpY2spPVwiZG9Tb21ldGhpbmdFbHNlKClcIj48L2J1dHRvbj5cbiAgICogPC9kaXY+XG4gICAqXG4gICAqIFdoZW4gYnV0dG9uIGlzIGNsaWNrZWQsIGJlY2F1c2Ugb2YgdGhlIGV2ZW50IGJ1YmJsaW5nLCBib3RoXG4gICAqIGV2ZW50IGhhbmRsZXJzIHdpbGwgYmUgY2FsbGVkIGFuZCAyIGNoYW5nZSBkZXRlY3Rpb25zIHdpbGwgYmVcbiAgICogdHJpZ2dlcmVkLiBXZSBjYW4gY29sZXNjZSBzdWNoIGtpbmQgb2YgZXZlbnRzIHRvIG9ubHkgdHJpZ2dlclxuICAgKiBjaGFuZ2UgZGV0ZWN0aW9uIG9ubHkgb25jZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBvcHRpb24gd2lsbCBiZSBmYWxzZS4gU28gdGhlIGV2ZW50cyB3aWxsIG5vdCBiZVxuICAgKiBjb2FsZXNjZWQgYW5kIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHdpbGwgYmUgdHJpZ2dlcmVkIG11bHRpcGxlIHRpbWVzLlxuICAgKiBBbmQgaWYgdGhpcyBvcHRpb24gYmUgc2V0IHRvIHRydWUsIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHdpbGwgYmVcbiAgICogdHJpZ2dlcmVkIGFzeW5jIGJ5IHNjaGVkdWxpbmcgYSBhbmltYXRpb24gZnJhbWUuIFNvIGluIHRoZSBjYXNlIGFib3ZlLFxuICAgKiB0aGUgY2hhbmdlIGRldGVjdGlvbiB3aWxsIG9ubHkgYmUgdHJpZ2dlZCBvbmNlLlxuICAgKi9cbiAgbmdab25lRXZlbnRDb2FsZXNjaW5nPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgQW5ndWxhciBwbGF0Zm9ybSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIEFuZ3VsYXIgb24gYSB3ZWIgcGFnZS4gRWFjaCBwYWdlXG4gKiBoYXMgZXhhY3RseSBvbmUgcGxhdGZvcm0sIGFuZCBzZXJ2aWNlcyAoc3VjaCBhcyByZWZsZWN0aW9uKSB3aGljaCBhcmUgY29tbW9uXG4gKiB0byBldmVyeSBBbmd1bGFyIGFwcGxpY2F0aW9uIHJ1bm5pbmcgb24gdGhlIHBhZ2UgYXJlIGJvdW5kIGluIGl0cyBzY29wZS5cbiAqXG4gKiBBIHBhZ2UncyBwbGF0Zm9ybSBpcyBpbml0aWFsaXplZCBpbXBsaWNpdGx5IHdoZW4gYSBwbGF0Zm9ybSBpcyBjcmVhdGVkIHZpYSBhIHBsYXRmb3JtIGZhY3RvcnlcbiAqIChlLmcuIHtAbGluayBwbGF0Zm9ybUJyb3dzZXJ9KSwgb3IgZXhwbGljaXRseSBieSBjYWxsaW5nIHRoZSB7QGxpbmsgY3JlYXRlUGxhdGZvcm19IGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtUmVmIHtcbiAgcHJpdmF0ZSBfbW9kdWxlczogTmdNb2R1bGVSZWY8YW55PltdID0gW107XG4gIHByaXZhdGUgX2Rlc3Ryb3lMaXN0ZW5lcnM6IEZ1bmN0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYEBOZ01vZHVsZWAgZm9yIHRoZSBnaXZlbiBwbGF0Zm9ybVxuICAgKiBmb3Igb2ZmbGluZSBjb21waWxhdGlvbi5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIFNpbXBsZSBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogbXlfbW9kdWxlLnRzOlxuICAgKlxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXVxuICAgKiB9KVxuICAgKiBjbGFzcyBNeU1vZHVsZSB7fVxuICAgKlxuICAgKiBtYWluLnRzOlxuICAgKiBpbXBvcnQge015TW9kdWxlTmdGYWN0b3J5fSBmcm9tICcuL215X21vZHVsZS5uZ2ZhY3RvcnknO1xuICAgKiBpbXBvcnQge3BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4gICAqXG4gICAqIGxldCBtb2R1bGVSZWYgPSBwbGF0Zm9ybUJyb3dzZXIoKS5ib290c3RyYXBNb2R1bGVGYWN0b3J5KE15TW9kdWxlTmdGYWN0b3J5KTtcbiAgICogYGBgXG4gICAqL1xuICBib290c3RyYXBNb2R1bGVGYWN0b3J5PE0+KG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxNPiwgb3B0aW9ucz86IEJvb3RzdHJhcE9wdGlvbnMpOlxuICAgICAgUHJvbWlzZTxOZ01vZHVsZVJlZjxNPj4ge1xuICAgIC8vIE5vdGU6IFdlIG5lZWQgdG8gY3JlYXRlIHRoZSBOZ1pvbmUgX2JlZm9yZV8gd2UgaW5zdGFudGlhdGUgdGhlIG1vZHVsZSxcbiAgICAvLyBhcyBpbnN0YW50aWF0aW5nIHRoZSBtb2R1bGUgY3JlYXRlcyBzb21lIHByb3ZpZGVycyBlYWdlcmx5LlxuICAgIC8vIFNvIHdlIGNyZWF0ZSBhIG1pbmkgcGFyZW50IGluamVjdG9yIHRoYXQganVzdCBjb250YWlucyB0aGUgbmV3IE5nWm9uZSBhbmRcbiAgICAvLyBwYXNzIHRoYXQgYXMgcGFyZW50IHRvIHRoZSBOZ01vZHVsZUZhY3RvcnkuXG4gICAgY29uc3Qgbmdab25lT3B0aW9uID0gb3B0aW9ucyA/IG9wdGlvbnMubmdab25lIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG5nWm9uZUV2ZW50Q29hbGVzY2luZyA9IChvcHRpb25zICYmIG9wdGlvbnMubmdab25lRXZlbnRDb2FsZXNjaW5nKSB8fCBmYWxzZTtcbiAgICBjb25zdCBuZ1pvbmUgPSBnZXROZ1pvbmUobmdab25lT3B0aW9uLCBuZ1pvbmVFdmVudENvYWxlc2NpbmcpO1xuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFt7cHJvdmlkZTogTmdab25lLCB1c2VWYWx1ZTogbmdab25lfV07XG4gICAgLy8gQXR0ZW50aW9uOiBEb24ndCB1c2UgQXBwbGljYXRpb25SZWYucnVuIGhlcmUsXG4gICAgLy8gYXMgd2Ugd2FudCB0byBiZSBzdXJlIHRoYXQgYWxsIHBvc3NpYmxlIGNvbnN0cnVjdG9yIGNhbGxzIGFyZSBpbnNpZGUgYG5nWm9uZS5ydW5gIVxuICAgIHJldHVybiBuZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5nWm9uZUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFxuICAgICAgICAgIHtwcm92aWRlcnM6IHByb3ZpZGVycywgcGFyZW50OiB0aGlzLmluamVjdG9yLCBuYW1lOiBtb2R1bGVGYWN0b3J5Lm1vZHVsZVR5cGUubmFtZX0pO1xuICAgICAgY29uc3QgbW9kdWxlUmVmID0gPEludGVybmFsTmdNb2R1bGVSZWY8TT4+bW9kdWxlRmFjdG9yeS5jcmVhdGUobmdab25lSW5qZWN0b3IpO1xuICAgICAgY29uc3QgZXhjZXB0aW9uSGFuZGxlcjogRXJyb3JIYW5kbGVyfG51bGwgPSBtb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KEVycm9ySGFuZGxlciwgbnVsbCk7XG4gICAgICBpZiAoIWV4Y2VwdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBFcnJvckhhbmRsZXIuIElzIHBsYXRmb3JtIG1vZHVsZSAoQnJvd3Nlck1vZHVsZSkgaW5jbHVkZWQ/Jyk7XG4gICAgICB9XG4gICAgICBtb2R1bGVSZWYub25EZXN0cm95KCgpID0+IHJlbW92ZSh0aGlzLl9tb2R1bGVzLCBtb2R1bGVSZWYpKTtcbiAgICAgIG5nWm9uZSEucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gbmdab25lIS5vbkVycm9yLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgZXhjZXB0aW9uSGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBfY2FsbEFuZFJlcG9ydFRvRXJyb3JIYW5kbGVyKGV4Y2VwdGlvbkhhbmRsZXIsIG5nWm9uZSEsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5pdFN0YXR1czogQXBwbGljYXRpb25Jbml0U3RhdHVzID0gbW9kdWxlUmVmLmluamVjdG9yLmdldChBcHBsaWNhdGlvbkluaXRTdGF0dXMpO1xuICAgICAgICBpbml0U3RhdHVzLnJ1bkluaXRpYWxpemVycygpO1xuICAgICAgICByZXR1cm4gaW5pdFN0YXR1cy5kb25lUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAoaXZ5RW5hYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGBMT0NBTEVfSURgIHByb3ZpZGVyIGlzIGRlZmluZWQgYXQgYm9vdHN0cmFwIHRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBmb3IgaXZ5XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVJZCA9IG1vZHVsZVJlZi5pbmplY3Rvci5nZXQoTE9DQUxFX0lELCBERUZBVUxUX0xPQ0FMRV9JRCk7XG4gICAgICAgICAgICBzZXRMb2NhbGVJZChsb2NhbGVJZCB8fCBERUZBVUxUX0xPQ0FMRV9JRCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX21vZHVsZURvQm9vdHN0cmFwKG1vZHVsZVJlZik7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZVJlZjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBATmdNb2R1bGVgIGZvciBhIGdpdmVuIHBsYXRmb3JtIHVzaW5nIHRoZSBnaXZlbiBydW50aW1lIGNvbXBpbGVyLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgU2ltcGxlIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXVxuICAgKiB9KVxuICAgKiBjbGFzcyBNeU1vZHVsZSB7fVxuICAgKlxuICAgKiBsZXQgbW9kdWxlUmVmID0gcGxhdGZvcm1Ccm93c2VyKCkuYm9vdHN0cmFwTW9kdWxlKE15TW9kdWxlKTtcbiAgICogYGBgXG4gICAqXG4gICAqL1xuICBib290c3RyYXBNb2R1bGU8TT4oXG4gICAgICBtb2R1bGVUeXBlOiBUeXBlPE0+LFxuICAgICAgY29tcGlsZXJPcHRpb25zOiAoQ29tcGlsZXJPcHRpb25zJkJvb3RzdHJhcE9wdGlvbnMpfFxuICAgICAgQXJyYXk8Q29tcGlsZXJPcHRpb25zJkJvb3RzdHJhcE9wdGlvbnM+ID0gW10pOiBQcm9taXNlPE5nTW9kdWxlUmVmPE0+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbnNSZWR1Y2VyKHt9LCBjb21waWxlck9wdGlvbnMpO1xuICAgIHJldHVybiBjb21waWxlTmdNb2R1bGVGYWN0b3J5KHRoaXMuaW5qZWN0b3IsIG9wdGlvbnMsIG1vZHVsZVR5cGUpXG4gICAgICAgIC50aGVuKG1vZHVsZUZhY3RvcnkgPT4gdGhpcy5ib290c3RyYXBNb2R1bGVGYWN0b3J5KG1vZHVsZUZhY3RvcnksIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHByaXZhdGUgX21vZHVsZURvQm9vdHN0cmFwKG1vZHVsZVJlZjogSW50ZXJuYWxOZ01vZHVsZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgYXBwUmVmID0gbW9kdWxlUmVmLmluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZikgYXMgQXBwbGljYXRpb25SZWY7XG4gICAgaWYgKG1vZHVsZVJlZi5fYm9vdHN0cmFwQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBtb2R1bGVSZWYuX2Jvb3RzdHJhcENvbXBvbmVudHMuZm9yRWFjaChmID0+IGFwcFJlZi5ib290c3RyYXAoZikpO1xuICAgIH0gZWxzZSBpZiAobW9kdWxlUmVmLmluc3RhbmNlLm5nRG9Cb290c3RyYXApIHtcbiAgICAgIG1vZHVsZVJlZi5pbnN0YW5jZS5uZ0RvQm9vdHN0cmFwKGFwcFJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhlIG1vZHVsZSAke1xuICAgICAgICAgICAgICBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICBtb2R1bGVSZWYuaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAuY29uc3RydWN0b3IpfSB3YXMgYm9vdHN0cmFwcGVkLCBidXQgaXQgZG9lcyBub3QgZGVjbGFyZSBcIkBOZ01vZHVsZS5ib290c3RyYXBcIiBjb21wb25lbnRzIG5vciBhIFwibmdEb0Jvb3RzdHJhcFwiIG1ldGhvZC4gYCArXG4gICAgICAgICAgYFBsZWFzZSBkZWZpbmUgb25lIG9mIHRoZXNlLmApO1xuICAgIH1cbiAgICB0aGlzLl9tb2R1bGVzLnB1c2gobW9kdWxlUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwbGF0Zm9ybSBpcyBkaXNwb3NlZC5cbiAgICovXG4gIG9uRGVzdHJveShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3lMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHBsYXRmb3JtIHtAbGluayBJbmplY3Rvcn0sIHdoaWNoIGlzIHRoZSBwYXJlbnQgaW5qZWN0b3IgZm9yXG4gICAqIGV2ZXJ5IEFuZ3VsYXIgYXBwbGljYXRpb24gb24gdGhlIHBhZ2UgYW5kIHByb3ZpZGVzIHNpbmdsZXRvbiBwcm92aWRlcnMuXG4gICAqL1xuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3Ige1xuICAgIHJldHVybiB0aGlzLl9pbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBBbmd1bGFyIHBsYXRmb3JtIGFuZCBhbGwgQW5ndWxhciBhcHBsaWNhdGlvbnMgb24gdGhlIHBhZ2UuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBsYXRmb3JtIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkIScpO1xuICAgIH1cbiAgICB0aGlzLl9tb2R1bGVzLnNsaWNlKCkuZm9yRWFjaChtb2R1bGUgPT4gbW9kdWxlLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fZGVzdHJveUxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKCkpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBnZXQgZGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Tmdab25lKFxuICAgIG5nWm9uZU9wdGlvbjogTmdab25lfCd6b25lLmpzJ3wnbm9vcCd8dW5kZWZpbmVkLCBuZ1pvbmVFdmVudENvYWxlc2Npbmc6IGJvb2xlYW4pOiBOZ1pvbmUge1xuICBsZXQgbmdab25lOiBOZ1pvbmU7XG5cbiAgaWYgKG5nWm9uZU9wdGlvbiA9PT0gJ25vb3AnKSB7XG4gICAgbmdab25lID0gbmV3IE5vb3BOZ1pvbmUoKTtcbiAgfSBlbHNlIHtcbiAgICBuZ1pvbmUgPSAobmdab25lT3B0aW9uID09PSAnem9uZS5qcycgPyB1bmRlZmluZWQgOiBuZ1pvbmVPcHRpb24pIHx8IG5ldyBOZ1pvbmUoe1xuICAgICAgICAgICAgICAgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGlzRGV2TW9kZSgpLFxuICAgICAgICAgICAgICAgc2hvdWxkQ29hbGVzY2VFdmVudENoYW5nZURldGVjdGlvbjogbmdab25lRXZlbnRDb2FsZXNjaW5nXG4gICAgICAgICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5nWm9uZTtcbn1cblxuZnVuY3Rpb24gX2NhbGxBbmRSZXBvcnRUb0Vycm9ySGFuZGxlcihcbiAgICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciwgbmdab25lOiBOZ1pvbmUsIGNhbGxiYWNrOiAoKSA9PiBhbnkpOiBhbnkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IGVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlKSk7XG4gICAgICAgIC8vIHJldGhyb3cgYXMgdGhlIGV4Y2VwdGlvbiBoYW5kbGVyIG1pZ2h0IG5vdCBkbyBpdFxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBlcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZSkpO1xuICAgIC8vIHJldGhyb3cgYXMgdGhlIGV4Y2VwdGlvbiBoYW5kbGVyIG1pZ2h0IG5vdCBkbyBpdFxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uc1JlZHVjZXI8VCBleHRlbmRzIE9iamVjdD4oZHN0OiBhbnksIG9ianM6IFR8VFtdKTogVCB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9ianMpKSB7XG4gICAgZHN0ID0gb2Jqcy5yZWR1Y2Uob3B0aW9uc1JlZHVjZXIsIGRzdCk7XG4gIH0gZWxzZSB7XG4gICAgZHN0ID0gey4uLmRzdCwgLi4uKG9ianMgYXMgYW55KX07XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBBIHJlZmVyZW5jZSB0byBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIHJ1bm5pbmcgb24gYSBwYWdlLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICoge0BhIGlzLXN0YWJsZS1leGFtcGxlc31cbiAqICMjIyBpc1N0YWJsZSBleGFtcGxlcyBhbmQgY2F2ZWF0c1xuICpcbiAqIE5vdGUgdHdvIGltcG9ydGFudCBwb2ludHMgYWJvdXQgYGlzU3RhYmxlYCwgZGVtb25zdHJhdGVkIGluIHRoZSBleGFtcGxlcyBiZWxvdzpcbiAqIC0gdGhlIGFwcGxpY2F0aW9uIHdpbGwgbmV2ZXIgYmUgc3RhYmxlIGlmIHlvdSBzdGFydCBhbnkga2luZFxuICogb2YgcmVjdXJyZW50IGFzeW5jaHJvbm91cyB0YXNrIHdoZW4gdGhlIGFwcGxpY2F0aW9uIHN0YXJ0c1xuICogKGZvciBleGFtcGxlIGZvciBhIHBvbGxpbmcgcHJvY2Vzcywgc3RhcnRlZCB3aXRoIGEgYHNldEludGVydmFsYCwgYSBgc2V0VGltZW91dGBcbiAqIG9yIHVzaW5nIFJ4SlMgb3BlcmF0b3JzIGxpa2UgYGludGVydmFsYCk7XG4gKiAtIHRoZSBgaXNTdGFibGVgIE9ic2VydmFibGUgcnVucyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIHpvbmUuXG4gKlxuICogTGV0J3MgaW1hZ2luZSB0aGF0IHlvdSBzdGFydCBhIHJlY3VycmVudCB0YXNrXG4gKiAoaGVyZSBpbmNyZW1lbnRpbmcgYSBjb3VudGVyLCB1c2luZyBSeEpTIGBpbnRlcnZhbGApLFxuICogYW5kIGF0IHRoZSBzYW1lIHRpbWUgc3Vic2NyaWJlIHRvIGBpc1N0YWJsZWAuXG4gKlxuICogYGBgXG4gKiBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gKiAgIGFwcFJlZi5pc1N0YWJsZS5waXBlKFxuICogICAgICBmaWx0ZXIoc3RhYmxlID0+IHN0YWJsZSlcbiAqICAgKS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0FwcCBpcyBzdGFibGUgbm93Jyk7XG4gKiAgIGludGVydmFsKDEwMDApLnN1YnNjcmliZShjb3VudGVyID0+IGNvbnNvbGUubG9nKGNvdW50ZXIpKTtcbiAqIH1cbiAqIGBgYFxuICogSW4gdGhpcyBleGFtcGxlLCBgaXNTdGFibGVgIHdpbGwgbmV2ZXIgZW1pdCBgdHJ1ZWAsXG4gKiBhbmQgdGhlIHRyYWNlIFwiQXBwIGlzIHN0YWJsZSBub3dcIiB3aWxsIG5ldmVyIGdldCBsb2dnZWQuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gZXhlY3V0ZSBzb21ldGhpbmcgd2hlbiB0aGUgYXBwIGlzIHN0YWJsZSxcbiAqIHlvdSBoYXZlIHRvIHdhaXQgZm9yIHRoZSBhcHBsaWNhdGlvbiB0byBiZSBzdGFibGVcbiAqIGJlZm9yZSBzdGFydGluZyB5b3VyIHBvbGxpbmcgcHJvY2Vzcy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0cnVjdG9yKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAqICAgYXBwUmVmLmlzU3RhYmxlLnBpcGUoXG4gKiAgICAgZmlyc3Qoc3RhYmxlID0+IHN0YWJsZSksXG4gKiAgICAgdGFwKHN0YWJsZSA9PiBjb25zb2xlLmxvZygnQXBwIGlzIHN0YWJsZSBub3cnKSksXG4gKiAgICAgc3dpdGNoTWFwKCgpID0+IGludGVydmFsKDEwMDApKVxuICogICApLnN1YnNjcmliZShjb3VudGVyID0+IGNvbnNvbGUubG9nKGNvdW50ZXIpKTtcbiAqIH1cbiAqIGBgYFxuICogSW4gdGhpcyBleGFtcGxlLCB0aGUgdHJhY2UgXCJBcHAgaXMgc3RhYmxlIG5vd1wiIHdpbGwgYmUgbG9nZ2VkXG4gKiBhbmQgdGhlbiB0aGUgY291bnRlciBzdGFydHMgaW5jcmVtZW50aW5nIGV2ZXJ5IHNlY29uZC5cbiAqXG4gKiBOb3RlIGFsc28gdGhhdCB0aGlzIE9ic2VydmFibGUgcnVucyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIHpvbmUsXG4gKiB3aGljaCBtZWFucyB0aGF0IHRoZSBjb2RlIGluIHRoZSBzdWJzY3JpcHRpb25cbiAqIHRvIHRoaXMgT2JzZXJ2YWJsZSB3aWxsIG5vdCB0cmlnZ2VyIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uLlxuICpcbiAqIExldCdzIGltYWdpbmUgdGhhdCBpbnN0ZWFkIG9mIGxvZ2dpbmcgdGhlIGNvdW50ZXIgdmFsdWUsXG4gKiB5b3UgdXBkYXRlIGEgZmllbGQgb2YgeW91ciBjb21wb25lbnRcbiAqIGFuZCBkaXNwbGF5IGl0IGluIGl0cyB0ZW1wbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0cnVjdG9yKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAqICAgYXBwUmVmLmlzU3RhYmxlLnBpcGUoXG4gKiAgICAgZmlyc3Qoc3RhYmxlID0+IHN0YWJsZSksXG4gKiAgICAgc3dpdGNoTWFwKCgpID0+IGludGVydmFsKDEwMDApKVxuICogICApLnN1YnNjcmliZShjb3VudGVyID0+IHRoaXMudmFsdWUgPSBjb3VudGVyKTtcbiAqIH1cbiAqIGBgYFxuICogQXMgdGhlIGBpc1N0YWJsZWAgT2JzZXJ2YWJsZSBydW5zIG91dHNpZGUgdGhlIHpvbmUsXG4gKiB0aGUgYHZhbHVlYCBmaWVsZCB3aWxsIGJlIHVwZGF0ZWQgcHJvcGVybHksXG4gKiBidXQgdGhlIHRlbXBsYXRlIHdpbGwgbm90IGJlIHJlZnJlc2hlZCFcbiAqXG4gKiBZb3UnbGwgaGF2ZSB0byBtYW51YWxseSB0cmlnZ2VyIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHVwZGF0ZSB0aGUgdGVtcGxhdGUuXG4gKlxuICogYGBgXG4gKiBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAqICAgYXBwUmVmLmlzU3RhYmxlLnBpcGUoXG4gKiAgICAgZmlyc3Qoc3RhYmxlID0+IHN0YWJsZSksXG4gKiAgICAgc3dpdGNoTWFwKCgpID0+IGludGVydmFsKDEwMDApKVxuICogICApLnN1YnNjcmliZShjb3VudGVyID0+IHtcbiAqICAgICB0aGlzLnZhbHVlID0gY291bnRlcjtcbiAqICAgICBjZC5kZXRlY3RDaGFuZ2VzKCk7XG4gKiAgIH0pO1xuICogfVxuICogYGBgXG4gKlxuICogT3IgbWFrZSB0aGUgc3Vic2NyaXB0aW9uIGNhbGxiYWNrIHJ1biBpbnNpZGUgdGhlIHpvbmUuXG4gKlxuICogYGBgXG4gKiBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCB6b25lOiBOZ1pvbmUpIHtcbiAqICAgYXBwUmVmLmlzU3RhYmxlLnBpcGUoXG4gKiAgICAgZmlyc3Qoc3RhYmxlID0+IHN0YWJsZSksXG4gKiAgICAgc3dpdGNoTWFwKCgpID0+IGludGVydmFsKDEwMDApKVxuICogICApLnN1YnNjcmliZShjb3VudGVyID0+IHpvbmUucnVuKCgpID0+IHRoaXMudmFsdWUgPSBjb3VudGVyKSk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblJlZiB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfYm9vdHN0cmFwTGlzdGVuZXJzOiAoKGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgX3ZpZXdzOiBJbnRlcm5hbFZpZXdSZWZbXSA9IFtdO1xuICBwcml2YXRlIF9ydW5uaW5nVGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lbmZvcmNlTm9OZXdDaGFuZ2VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YWJsZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgY29tcG9uZW50IHR5cGVzIHJlZ2lzdGVyZWQgdG8gdGhpcyBhcHBsaWNhdGlvbi5cbiAgICogVGhpcyBsaXN0IGlzIHBvcHVsYXRlZCBldmVuIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50VHlwZXM6IFR5cGU8YW55PltdID0gW107XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgY29tcG9uZW50cyByZWdpc3RlcmVkIHRvIHRoaXMgYXBwbGljYXRpb24uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50czogQ29tcG9uZW50UmVmPGFueT5bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBpbmRpY2F0ZXMgd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgc3RhYmxlIG9yIHVuc3RhYmxlLlxuICAgKlxuICAgKiBAc2VlICBbVXNhZ2Ugbm90ZXNdKCNpcy1zdGFibGUtZXhhbXBsZXMpIGZvciBleGFtcGxlcyBhbmQgY2F2ZWF0cyB3aGVuIHVzaW5nIHRoaXMgQVBJLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHB1YmxpYyByZWFkb25seSBpc1N0YWJsZSE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfY29uc29sZTogQ29uc29sZSwgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgcHJpdmF0ZSBfZXhjZXB0aW9uSGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIF9pbml0U3RhdHVzOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMpIHtcbiAgICB0aGlzLl9lbmZvcmNlTm9OZXdDaGFuZ2VzID0gaXNEZXZNb2RlKCk7XG5cbiAgICB0aGlzLl96b25lLm9uTWljcm90YXNrRW1wdHkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGlzQ3VycmVudGx5U3RhYmxlID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKG9ic2VydmVyOiBPYnNlcnZlcjxib29sZWFuPikgPT4ge1xuICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5fem9uZS5pc1N0YWJsZSAmJiAhdGhpcy5fem9uZS5oYXNQZW5kaW5nTWFjcm90YXNrcyAmJlxuICAgICAgICAgICF0aGlzLl96b25lLmhhc1BlbmRpbmdNaWNyb3Rhc2tzO1xuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5fc3RhYmxlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaXNTdGFibGUgPSBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPigob2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+KSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHN1YnNjcmlwdGlvbiB0byBvblN0YWJsZSBvdXRzaWRlIHRoZSBBbmd1bGFyIFpvbmUgc28gdGhhdFxuICAgICAgLy8gdGhlIGNhbGxiYWNrIGlzIHJ1biBvdXRzaWRlIHRoZSBBbmd1bGFyIFpvbmUuXG4gICAgICBsZXQgc3RhYmxlU3ViOiBTdWJzY3JpcHRpb247XG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgc3RhYmxlU3ViID0gdGhpcy5fem9uZS5vblN0YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIE5nWm9uZS5hc3NlcnROb3RJbkFuZ3VsYXJab25lKCk7XG5cbiAgICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZXJlIGFyZSBubyBwZW5kaW5nIG1hY3JvL21pY3JvIHRhc2tzIGluIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICAvLyB0byBhbGxvdyBmb3IgTmdab25lIHRvIHVwZGF0ZSB0aGUgc3RhdGUuXG4gICAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9zdGFibGUgJiYgIXRoaXMuX3pvbmUuaGFzUGVuZGluZ01hY3JvdGFza3MgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5fem9uZS5oYXNQZW5kaW5nTWljcm90YXNrcykge1xuICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1bnN0YWJsZVN1YjogU3Vic2NyaXB0aW9uID0gdGhpcy5fem9uZS5vblVuc3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIE5nWm9uZS5hc3NlcnRJbkFuZ3VsYXJab25lKCk7XG4gICAgICAgIGlmICh0aGlzLl9zdGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3RhYmxlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHVuc3RhYmxlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgKHRoaXMgYXMge2lzU3RhYmxlOiBPYnNlcnZhYmxlPGJvb2xlYW4+fSkuaXNTdGFibGUgPVxuICAgICAgICBtZXJnZShpc0N1cnJlbnRseVN0YWJsZSwgaXNTdGFibGUucGlwZShzaGFyZSgpKSk7XG4gIH1cblxuICAvKipcbiAgICogQm9vdHN0cmFwIGEgbmV3IGNvbXBvbmVudCBhdCB0aGUgcm9vdCBsZXZlbCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBCb290c3RyYXAgcHJvY2Vzc1xuICAgKlxuICAgKiBXaGVuIGJvb3RzdHJhcHBpbmcgYSBuZXcgcm9vdCBjb21wb25lbnQgaW50byBhbiBhcHBsaWNhdGlvbiwgQW5ndWxhciBtb3VudHMgdGhlXG4gICAqIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBjb21wb25lbnQgb250byBET00gZWxlbWVudHMgaWRlbnRpZmllZCBieSB0aGUgY29tcG9uZW50VHlwZSdzXG4gICAqIHNlbGVjdG9yIGFuZCBraWNrcyBvZmYgYXV0b21hdGljIGNoYW5nZSBkZXRlY3Rpb24gdG8gZmluaXNoIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBPcHRpb25hbGx5LCBhIGNvbXBvbmVudCBjYW4gYmUgbW91bnRlZCBvbnRvIGEgRE9NIGVsZW1lbnQgdGhhdCBkb2VzIG5vdCBtYXRjaCB0aGVcbiAgICogY29tcG9uZW50VHlwZSdzIHNlbGVjdG9yLlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKiB7QGV4YW1wbGUgY29yZS90cy9wbGF0Zm9ybS9wbGF0Zm9ybS50cyByZWdpb249J2xvbmdmb3JtJ31cbiAgICovXG4gIGJvb3RzdHJhcDxDPihjb21wb25lbnRPckZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Qz58VHlwZTxDPiwgcm9vdFNlbGVjdG9yT3JOb2RlPzogc3RyaW5nfGFueSk6XG4gICAgICBDb21wb25lbnRSZWY8Qz4ge1xuICAgIGlmICghdGhpcy5faW5pdFN0YXR1cy5kb25lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBib290c3RyYXAgYXMgdGhlcmUgYXJlIHN0aWxsIGFzeW5jaHJvbm91cyBpbml0aWFsaXplcnMgcnVubmluZy4gQm9vdHN0cmFwIGNvbXBvbmVudHMgaW4gdGhlIGBuZ0RvQm9vdHN0cmFwYCBtZXRob2Qgb2YgdGhlIHJvb3QgbW9kdWxlLicpO1xuICAgIH1cbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDPjtcbiAgICBpZiAoY29tcG9uZW50T3JGYWN0b3J5IGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgY29tcG9uZW50RmFjdG9yeSA9IGNvbXBvbmVudE9yRmFjdG9yeTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50RmFjdG9yeSA9XG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudE9yRmFjdG9yeSkhO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudFR5cGVzLnB1c2goY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnRUeXBlKTtcblxuICAgIC8vIENyZWF0ZSBhIGZhY3RvcnkgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IG1vZHVsZSBpZiBpdCdzIG5vdCBib3VuZCB0byBzb21lIG90aGVyXG4gICAgY29uc3QgbmdNb2R1bGUgPVxuICAgICAgICBpc0JvdW5kVG9Nb2R1bGUoY29tcG9uZW50RmFjdG9yeSkgPyB1bmRlZmluZWQgOiB0aGlzLl9pbmplY3Rvci5nZXQoTmdNb2R1bGVSZWYpO1xuICAgIGNvbnN0IHNlbGVjdG9yT3JOb2RlID0gcm9vdFNlbGVjdG9yT3JOb2RlIHx8IGNvbXBvbmVudEZhY3Rvcnkuc2VsZWN0b3I7XG4gICAgY29uc3QgY29tcFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKEluamVjdG9yLk5VTEwsIFtdLCBzZWxlY3Rvck9yTm9kZSwgbmdNb2R1bGUpO1xuXG4gICAgY29tcFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgdGhpcy5fdW5sb2FkQ29tcG9uZW50KGNvbXBSZWYpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRlc3RhYmlsaXR5ID0gY29tcFJlZi5pbmplY3Rvci5nZXQoVGVzdGFiaWxpdHksIG51bGwpO1xuICAgIGlmICh0ZXN0YWJpbGl0eSkge1xuICAgICAgY29tcFJlZi5pbmplY3Rvci5nZXQoVGVzdGFiaWxpdHlSZWdpc3RyeSlcbiAgICAgICAgICAucmVnaXN0ZXJBcHBsaWNhdGlvbihjb21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIHRlc3RhYmlsaXR5KTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkQ29tcG9uZW50KGNvbXBSZWYpO1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgdGhpcy5fY29uc29sZS5sb2coXG4gICAgICAgICAgYEFuZ3VsYXIgaXMgcnVubmluZyBpbiB0aGUgZGV2ZWxvcG1lbnQgbW9kZS4gQ2FsbCBlbmFibGVQcm9kTW9kZSgpIHRvIGVuYWJsZSB0aGUgcHJvZHVjdGlvbiBtb2RlLmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gZXhwbGljaXRseSBwcm9jZXNzIGNoYW5nZSBkZXRlY3Rpb24gYW5kIGl0cyBzaWRlLWVmZmVjdHMuXG4gICAqXG4gICAqIEluIGRldmVsb3BtZW50IG1vZGUsIGB0aWNrKClgIGFsc28gcGVyZm9ybXMgYSBzZWNvbmQgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSB0byBlbnN1cmUgdGhhdCBub1xuICAgKiBmdXJ0aGVyIGNoYW5nZXMgYXJlIGRldGVjdGVkLiBJZiBhZGRpdGlvbmFsIGNoYW5nZXMgYXJlIHBpY2tlZCB1cCBkdXJpbmcgdGhpcyBzZWNvbmQgY3ljbGUsXG4gICAqIGJpbmRpbmdzIGluIHRoZSBhcHAgaGF2ZSBzaWRlLWVmZmVjdHMgdGhhdCBjYW5ub3QgYmUgcmVzb2x2ZWQgaW4gYSBzaW5nbGUgY2hhbmdlIGRldGVjdGlvblxuICAgKiBwYXNzLlxuICAgKiBJbiB0aGlzIGNhc2UsIEFuZ3VsYXIgdGhyb3dzIGFuIGVycm9yLCBzaW5jZSBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIGNhbiBvbmx5IGhhdmUgb25lIGNoYW5nZVxuICAgKiBkZXRlY3Rpb24gcGFzcyBkdXJpbmcgd2hpY2ggYWxsIGNoYW5nZSBkZXRlY3Rpb24gbXVzdCBjb21wbGV0ZS5cbiAgICovXG4gIHRpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmdUaWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uUmVmLnRpY2sgaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5Jyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3J1bm5pbmdUaWNrID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IHZpZXcgb2YgdGhpcy5fdmlld3MpIHtcbiAgICAgICAgdmlldy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZW5mb3JjZU5vTmV3Q2hhbmdlcykge1xuICAgICAgICBmb3IgKGxldCB2aWV3IG9mIHRoaXMuX3ZpZXdzKSB7XG4gICAgICAgICAgdmlldy5jaGVja05vQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQXR0ZW50aW9uOiBEb24ndCByZXRocm93IGFzIGl0IGNvdWxkIGNhbmNlbCBzdWJzY3JpcHRpb25zIHRvIE9ic2VydmFibGVzIVxuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9leGNlcHRpb25IYW5kbGVyLmhhbmRsZUVycm9yKGUpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcnVubmluZ1RpY2sgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgYSB2aWV3IHNvIHRoYXQgaXQgd2lsbCBiZSBkaXJ0eSBjaGVja2VkLlxuICAgKiBUaGUgdmlldyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGV0YWNoZWQgd2hlbiBpdCBpcyBkZXN0cm95ZWQuXG4gICAqIFRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgdmlldyBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIGEgVmlld0NvbnRhaW5lci5cbiAgICovXG4gIGF0dGFjaFZpZXcodmlld1JlZjogVmlld1JlZik6IHZvaWQge1xuICAgIGNvbnN0IHZpZXcgPSAodmlld1JlZiBhcyBJbnRlcm5hbFZpZXdSZWYpO1xuICAgIHRoaXMuX3ZpZXdzLnB1c2godmlldyk7XG4gICAgdmlldy5hdHRhY2hUb0FwcFJlZih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2Fpbi5cbiAgICovXG4gIGRldGFjaFZpZXcodmlld1JlZjogVmlld1JlZik6IHZvaWQge1xuICAgIGNvbnN0IHZpZXcgPSAodmlld1JlZiBhcyBJbnRlcm5hbFZpZXdSZWYpO1xuICAgIHJlbW92ZSh0aGlzLl92aWV3cywgdmlldyk7XG4gICAgdmlldy5kZXRhY2hGcm9tQXBwUmVmKCk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkQ29tcG9uZW50KGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB0aGlzLnRpY2soKTtcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnRSZWYpO1xuICAgIC8vIEdldCB0aGUgbGlzdGVuZXJzIGxhemlseSB0byBwcmV2ZW50IERJIGN5Y2xlcy5cbiAgICBjb25zdCBsaXN0ZW5lcnMgPVxuICAgICAgICB0aGlzLl9pbmplY3Rvci5nZXQoQVBQX0JPT1RTVFJBUF9MSVNURU5FUiwgW10pLmNvbmNhdCh0aGlzLl9ib290c3RyYXBMaXN0ZW5lcnMpO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoY29tcG9uZW50UmVmKSk7XG4gIH1cblxuICBwcml2YXRlIF91bmxvYWRDb21wb25lbnQoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIHJlbW92ZSh0aGlzLmNvbXBvbmVudHMsIGNvbXBvbmVudFJlZik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIFRPRE8oYWx4aHViKTogRGlzcG9zZSBvZiB0aGUgTmdab25lLlxuICAgIHRoaXMuX3ZpZXdzLnNsaWNlKCkuZm9yRWFjaCgodmlldykgPT4gdmlldy5kZXN0cm95KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhdHRhY2hlZCB2aWV3cy5cbiAgICovXG4gIGdldCB2aWV3Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdzLmxlbmd0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmU8VD4obGlzdDogVFtdLCBlbDogVCk6IHZvaWQge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9sYXN0RGVmaW5lZDxUPihhcmdzOiBUW10pOiBUfHVuZGVmaW5lZCB7XG4gIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGFyZ3NbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFyZ3NbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZUFycmF5cyhwYXJ0czogYW55W11bXSk6IGFueVtdIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0ICYmIHJlc3VsdC5wdXNoKC4uLnBhcnQpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==