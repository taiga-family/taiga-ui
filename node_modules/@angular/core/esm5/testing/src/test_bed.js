/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __read, __spread, __values } from "tslib";
import { ApplicationInitStatus, Component, InjectFlags, Injector, NgModule, NgZone, Optional, SkipSelf, ɵclearOverrides as clearOverrides, ɵgetInjectableDef as getInjectableDef, ɵINJECTOR_SCOPE as INJECTOR_SCOPE, ɵivyEnabled as ivyEnabled, ɵoverrideComponentView as overrideComponentView, ɵoverrideProvider as overrideProvider, ɵstringify as stringify } from '@angular/core';
import { AsyncTestCompleter } from './async_test_completer';
import { ComponentFixture } from './component_fixture';
import { _getTestBedRender3, TestBedRender3 } from './r3_test_bed';
import { ComponentFixtureAutoDetect, ComponentFixtureNoNgZone, TestComponentRenderer } from './test_bed_common';
import { TestingCompilerFactory } from './test_compiler';
var _nextRootElementId = 0;
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * Note: Use `TestBed` in tests. It will be set to either `TestBedViewEngine` or `TestBedRender3`
 * according to the compiler used.
 */
var TestBedViewEngine = /** @class */ (function () {
    function TestBedViewEngine() {
        this._instantiated = false;
        this._compiler = null;
        this._moduleRef = null;
        this._moduleFactory = null;
        this._compilerOptions = [];
        this._moduleOverrides = [];
        this._componentOverrides = [];
        this._directiveOverrides = [];
        this._pipeOverrides = [];
        this._providers = [];
        this._declarations = [];
        this._imports = [];
        this._schemas = [];
        this._activeFixtures = [];
        this._testEnvAotSummaries = function () { return []; };
        this._aotSummaries = [];
        this._templateOverrides = [];
        this._isRoot = true;
        this._rootProviderOverrides = [];
        this.platform = null;
        this.ngModule = null;
    }
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    TestBedViewEngine.initTestEnvironment = function (ngModule, platform, aotSummaries) {
        var testBed = _getTestBedViewEngine();
        testBed.initTestEnvironment(ngModule, platform, aotSummaries);
        return testBed;
    };
    /**
     * Reset the providers for the test injector.
     */
    TestBedViewEngine.resetTestEnvironment = function () {
        _getTestBedViewEngine().resetTestEnvironment();
    };
    TestBedViewEngine.resetTestingModule = function () {
        _getTestBedViewEngine().resetTestingModule();
        return TestBedViewEngine;
    };
    /**
     * Allows overriding default compiler providers and settings
     * which are defined in test_injector.js
     */
    TestBedViewEngine.configureCompiler = function (config) {
        _getTestBedViewEngine().configureCompiler(config);
        return TestBedViewEngine;
    };
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    TestBedViewEngine.configureTestingModule = function (moduleDef) {
        _getTestBedViewEngine().configureTestingModule(moduleDef);
        return TestBedViewEngine;
    };
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    TestBedViewEngine.compileComponents = function () {
        return getTestBed().compileComponents();
    };
    TestBedViewEngine.overrideModule = function (ngModule, override) {
        _getTestBedViewEngine().overrideModule(ngModule, override);
        return TestBedViewEngine;
    };
    TestBedViewEngine.overrideComponent = function (component, override) {
        _getTestBedViewEngine().overrideComponent(component, override);
        return TestBedViewEngine;
    };
    TestBedViewEngine.overrideDirective = function (directive, override) {
        _getTestBedViewEngine().overrideDirective(directive, override);
        return TestBedViewEngine;
    };
    TestBedViewEngine.overridePipe = function (pipe, override) {
        _getTestBedViewEngine().overridePipe(pipe, override);
        return TestBedViewEngine;
    };
    TestBedViewEngine.overrideTemplate = function (component, template) {
        _getTestBedViewEngine().overrideComponent(component, { set: { template: template, templateUrl: null } });
        return TestBedViewEngine;
    };
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    TestBedViewEngine.overrideTemplateUsingTestingModule = function (component, template) {
        _getTestBedViewEngine().overrideTemplateUsingTestingModule(component, template);
        return TestBedViewEngine;
    };
    TestBedViewEngine.overrideProvider = function (token, provider) {
        _getTestBedViewEngine().overrideProvider(token, provider);
        return TestBedViewEngine;
    };
    TestBedViewEngine.inject = function (token, notFoundValue, flags) {
        return _getTestBedViewEngine().inject(token, notFoundValue, flags);
    };
    /** @deprecated from v9.0.0 use TestBed.inject */
    TestBedViewEngine.get = function (token, notFoundValue, flags) {
        if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
        if (flags === void 0) { flags = InjectFlags.Default; }
        return _getTestBedViewEngine().inject(token, notFoundValue, flags);
    };
    TestBedViewEngine.createComponent = function (component) {
        return _getTestBedViewEngine().createComponent(component);
    };
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    TestBedViewEngine.prototype.initTestEnvironment = function (ngModule, platform, aotSummaries) {
        if (this.platform || this.ngModule) {
            throw new Error('Cannot set base providers because it has already been called');
        }
        this.platform = platform;
        this.ngModule = ngModule;
        if (aotSummaries) {
            this._testEnvAotSummaries = aotSummaries;
        }
    };
    /**
     * Reset the providers for the test injector.
     */
    TestBedViewEngine.prototype.resetTestEnvironment = function () {
        this.resetTestingModule();
        this.platform = null;
        this.ngModule = null;
        this._testEnvAotSummaries = function () { return []; };
    };
    TestBedViewEngine.prototype.resetTestingModule = function () {
        clearOverrides();
        this._aotSummaries = [];
        this._templateOverrides = [];
        this._compiler = null;
        this._moduleOverrides = [];
        this._componentOverrides = [];
        this._directiveOverrides = [];
        this._pipeOverrides = [];
        this._isRoot = true;
        this._rootProviderOverrides = [];
        this._moduleRef = null;
        this._moduleFactory = null;
        this._compilerOptions = [];
        this._providers = [];
        this._declarations = [];
        this._imports = [];
        this._schemas = [];
        this._instantiated = false;
        this._activeFixtures.forEach(function (fixture) {
            try {
                fixture.destroy();
            }
            catch (e) {
                console.error('Error during cleanup of component', {
                    component: fixture.componentInstance,
                    stacktrace: e,
                });
            }
        });
        this._activeFixtures = [];
    };
    TestBedViewEngine.prototype.configureCompiler = function (config) {
        this._assertNotInstantiated('TestBed.configureCompiler', 'configure the compiler');
        this._compilerOptions.push(config);
    };
    TestBedViewEngine.prototype.configureTestingModule = function (moduleDef) {
        var _a, _b, _c, _d;
        this._assertNotInstantiated('TestBed.configureTestingModule', 'configure the test module');
        if (moduleDef.providers) {
            (_a = this._providers).push.apply(_a, __spread(moduleDef.providers));
        }
        if (moduleDef.declarations) {
            (_b = this._declarations).push.apply(_b, __spread(moduleDef.declarations));
        }
        if (moduleDef.imports) {
            (_c = this._imports).push.apply(_c, __spread(moduleDef.imports));
        }
        if (moduleDef.schemas) {
            (_d = this._schemas).push.apply(_d, __spread(moduleDef.schemas));
        }
        if (moduleDef.aotSummaries) {
            this._aotSummaries.push(moduleDef.aotSummaries);
        }
    };
    TestBedViewEngine.prototype.compileComponents = function () {
        var _this = this;
        if (this._moduleFactory || this._instantiated) {
            return Promise.resolve(null);
        }
        var moduleType = this._createCompilerAndModule();
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType)
            .then(function (moduleAndComponentFactories) {
            _this._moduleFactory = moduleAndComponentFactories.ngModuleFactory;
        });
    };
    TestBedViewEngine.prototype._initIfNeeded = function () {
        var e_1, _a;
        if (this._instantiated) {
            return;
        }
        if (!this._moduleFactory) {
            try {
                var moduleType = this._createCompilerAndModule();
                this._moduleFactory =
                    this._compiler.compileModuleAndAllComponentsSync(moduleType).ngModuleFactory;
            }
            catch (e) {
                var errorCompType = this._compiler.getComponentFromError(e);
                if (errorCompType) {
                    throw new Error("This test module uses the component " + stringify(errorCompType) + " which is using a \"templateUrl\" or \"styleUrls\", but they were never compiled. " +
                        "Please call \"TestBed.compileComponents\" before your test.");
                }
                else {
                    throw e;
                }
            }
        }
        try {
            for (var _b = __values(this._templateOverrides), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, component = _d.component, templateOf = _d.templateOf;
                var compFactory = this._compiler.getComponentFactory(templateOf);
                overrideComponentView(component, compFactory);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var ngZone = new NgZone({ enableLongStackTrace: true, shouldCoalesceEventChangeDetection: false });
        var providers = [{ provide: NgZone, useValue: ngZone }];
        var ngZoneInjector = Injector.create({
            providers: providers,
            parent: this.platform.injector,
            name: this._moduleFactory.moduleType.name
        });
        this._moduleRef = this._moduleFactory.create(ngZoneInjector);
        // ApplicationInitStatus.runInitializers() is marked @internal to core. So casting to any
        // before accessing it.
        this._moduleRef.injector.get(ApplicationInitStatus).runInitializers();
        this._instantiated = true;
    };
    TestBedViewEngine.prototype._createCompilerAndModule = function () {
        var e_2, _a;
        var _this = this;
        var providers = this._providers.concat([{ provide: TestBed, useValue: this }]);
        var declarations = __spread(this._declarations, this._templateOverrides.map(function (entry) { return entry.templateOf; }));
        var rootScopeImports = [];
        var rootProviderOverrides = this._rootProviderOverrides;
        if (this._isRoot) {
            var RootScopeModule = /** @class */ (function () {
                function RootScopeModule() {
                }
                RootScopeModule = __decorate([
                    NgModule({
                        providers: __spread(rootProviderOverrides),
                        jit: true,
                    })
                ], RootScopeModule);
                return RootScopeModule;
            }());
            rootScopeImports.push(RootScopeModule);
        }
        providers.push({ provide: INJECTOR_SCOPE, useValue: this._isRoot ? 'root' : null });
        var imports = [rootScopeImports, this.ngModule, this._imports];
        var schemas = this._schemas;
        var DynamicTestModule = /** @class */ (function () {
            function DynamicTestModule() {
            }
            DynamicTestModule = __decorate([
                NgModule({ providers: providers, declarations: declarations, imports: imports, schemas: schemas, jit: true })
            ], DynamicTestModule);
            return DynamicTestModule;
        }());
        var compilerFactory = this.platform.injector.get(TestingCompilerFactory);
        this._compiler = compilerFactory.createTestingCompiler(this._compilerOptions);
        try {
            for (var _b = __values(__spread([this._testEnvAotSummaries], this._aotSummaries)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var summary = _c.value;
                this._compiler.loadAotSummaries(summary);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._moduleOverrides.forEach(function (entry) { return _this._compiler.overrideModule(entry[0], entry[1]); });
        this._componentOverrides.forEach(function (entry) { return _this._compiler.overrideComponent(entry[0], entry[1]); });
        this._directiveOverrides.forEach(function (entry) { return _this._compiler.overrideDirective(entry[0], entry[1]); });
        this._pipeOverrides.forEach(function (entry) { return _this._compiler.overridePipe(entry[0], entry[1]); });
        return DynamicTestModule;
    };
    TestBedViewEngine.prototype._assertNotInstantiated = function (methodName, methodDescription) {
        if (this._instantiated) {
            throw new Error("Cannot " + methodDescription + " when the test module has already been instantiated. " +
                ("Make sure you are not using `inject` before `" + methodName + "`."));
        }
    };
    TestBedViewEngine.prototype.inject = function (token, notFoundValue, flags) {
        this._initIfNeeded();
        if (token === TestBed) {
            return this;
        }
        // Tests can inject things from the ng module and from the compiler,
        // but the ng module can't inject things from the compiler and vice versa.
        var UNDEFINED = {};
        var result = this._moduleRef.injector.get(token, UNDEFINED, flags);
        return result === UNDEFINED ? this._compiler.injector.get(token, notFoundValue, flags) :
            result;
    };
    /** @deprecated from v9.0.0 use TestBed.inject */
    TestBedViewEngine.prototype.get = function (token, notFoundValue, flags) {
        if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
        if (flags === void 0) { flags = InjectFlags.Default; }
        return this.inject(token, notFoundValue, flags);
    };
    TestBedViewEngine.prototype.execute = function (tokens, fn, context) {
        var _this = this;
        this._initIfNeeded();
        var params = tokens.map(function (t) { return _this.inject(t); });
        return fn.apply(context, params);
    };
    TestBedViewEngine.prototype.overrideModule = function (ngModule, override) {
        this._assertNotInstantiated('overrideModule', 'override module metadata');
        this._moduleOverrides.push([ngModule, override]);
    };
    TestBedViewEngine.prototype.overrideComponent = function (component, override) {
        this._assertNotInstantiated('overrideComponent', 'override component metadata');
        this._componentOverrides.push([component, override]);
    };
    TestBedViewEngine.prototype.overrideDirective = function (directive, override) {
        this._assertNotInstantiated('overrideDirective', 'override directive metadata');
        this._directiveOverrides.push([directive, override]);
    };
    TestBedViewEngine.prototype.overridePipe = function (pipe, override) {
        this._assertNotInstantiated('overridePipe', 'override pipe metadata');
        this._pipeOverrides.push([pipe, override]);
    };
    TestBedViewEngine.prototype.overrideProvider = function (token, provider) {
        this.overrideProviderImpl(token, provider);
    };
    TestBedViewEngine.prototype.overrideProviderImpl = function (token, provider, deprecated) {
        if (deprecated === void 0) { deprecated = false; }
        var def = null;
        if (typeof token !== 'string' && (def = getInjectableDef(token)) && def.providedIn === 'root') {
            if (provider.useFactory) {
                this._rootProviderOverrides.push({ provide: token, useFactory: provider.useFactory, deps: provider.deps || [] });
            }
            else {
                this._rootProviderOverrides.push({ provide: token, useValue: provider.useValue });
            }
        }
        var flags = 0;
        var value;
        if (provider.useFactory) {
            flags |= 1024 /* TypeFactoryProvider */;
            value = provider.useFactory;
        }
        else {
            flags |= 256 /* TypeValueProvider */;
            value = provider.useValue;
        }
        var deps = (provider.deps || []).map(function (dep) {
            var depFlags = 0 /* None */;
            var depToken;
            if (Array.isArray(dep)) {
                dep.forEach(function (entry) {
                    if (entry instanceof Optional) {
                        depFlags |= 2 /* Optional */;
                    }
                    else if (entry instanceof SkipSelf) {
                        depFlags |= 1 /* SkipSelf */;
                    }
                    else {
                        depToken = entry;
                    }
                });
            }
            else {
                depToken = dep;
            }
            return [depFlags, depToken];
        });
        overrideProvider({ token: token, flags: flags, deps: deps, value: value, deprecatedBehavior: deprecated });
    };
    TestBedViewEngine.prototype.overrideTemplateUsingTestingModule = function (component, template) {
        this._assertNotInstantiated('overrideTemplateUsingTestingModule', 'override template');
        var OverrideComponent = /** @class */ (function () {
            function OverrideComponent() {
            }
            OverrideComponent = __decorate([
                Component({ selector: 'empty', template: template, jit: true })
            ], OverrideComponent);
            return OverrideComponent;
        }());
        this._templateOverrides.push({ component: component, templateOf: OverrideComponent });
    };
    TestBedViewEngine.prototype.createComponent = function (component) {
        var _this = this;
        this._initIfNeeded();
        var componentFactory = this._compiler.getComponentFactory(component);
        if (!componentFactory) {
            throw new Error("Cannot create the component " + stringify(component) + " as it was not imported into the testing module!");
        }
        // TODO: Don't cast as `InjectionToken<boolean>`, declared type is boolean[]
        var noNgZone = this.inject(ComponentFixtureNoNgZone, false);
        // TODO: Don't cast as `InjectionToken<boolean>`, declared type is boolean[]
        var autoDetect = this.inject(ComponentFixtureAutoDetect, false);
        var ngZone = noNgZone ? null : this.inject(NgZone, null);
        var testComponentRenderer = this.inject(TestComponentRenderer);
        var rootElId = "root" + _nextRootElementId++;
        testComponentRenderer.insertRootElement(rootElId);
        var initComponent = function () {
            var componentRef = componentFactory.create(Injector.NULL, [], "#" + rootElId, _this._moduleRef);
            return new ComponentFixture(componentRef, ngZone, autoDetect);
        };
        var fixture = !ngZone ? initComponent() : ngZone.run(initComponent);
        this._activeFixtures.push(fixture);
        return fixture;
    };
    return TestBedViewEngine;
}());
export { TestBedViewEngine };
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * Note: Use `TestBed` in tests. It will be set to either `TestBedViewEngine` or `TestBedRender3`
 * according to the compiler used.
 *
 * @publicApi
 */
export var TestBed = ivyEnabled ? TestBedRender3 : TestBedViewEngine;
/**
 * Returns a singleton of the applicable `TestBed`.
 *
 * It will be either an instance of `TestBedViewEngine` or `TestBedRender3`.
 *
 * @publicApi
 */
export var getTestBed = ivyEnabled ? _getTestBedRender3 : _getTestBedViewEngine;
var testBed;
function _getTestBedViewEngine() {
    return testBed = testBed || new TestBedViewEngine();
}
/**
 * Allows injecting dependencies in `beforeEach()` and `it()`.
 *
 * Example:
 *
 * ```
 * beforeEach(inject([Dependency, AClass], (dep, object) => {
 *   // some code that uses `dep` and `object`
 *   // ...
 * }));
 *
 * it('...', inject([AClass], (object) => {
 *   object.doSomething();
 *   expect(...);
 * })
 * ```
 *
 * Notes:
 * - inject is currently a function because of some Traceur limitation the syntax should
 * eventually
 *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
 *
 * @publicApi
 */
export function inject(tokens, fn) {
    var testBed = getTestBed();
    if (tokens.indexOf(AsyncTestCompleter) >= 0) {
        // Not using an arrow function to preserve context passed from call site
        return function () {
            var _this = this;
            // Return an async test method that returns a Promise if AsyncTestCompleter is one of
            // the injected tokens.
            return testBed.compileComponents().then(function () {
                var completer = testBed.inject(AsyncTestCompleter);
                testBed.execute(tokens, fn, _this);
                return completer.promise;
            });
        };
    }
    else {
        // Not using an arrow function to preserve context passed from call site
        return function () {
            return testBed.execute(tokens, fn, this);
        };
    }
}
/**
 * @publicApi
 */
var InjectSetupWrapper = /** @class */ (function () {
    function InjectSetupWrapper(_moduleDef) {
        this._moduleDef = _moduleDef;
    }
    InjectSetupWrapper.prototype._addModule = function () {
        var moduleDef = this._moduleDef();
        if (moduleDef) {
            getTestBed().configureTestingModule(moduleDef);
        }
    };
    InjectSetupWrapper.prototype.inject = function (tokens, fn) {
        var self = this;
        // Not using an arrow function to preserve context passed from call site
        return function () {
            self._addModule();
            return inject(tokens, fn).call(this);
        };
    };
    return InjectSetupWrapper;
}());
export { InjectSetupWrapper };
export function withModule(moduleDef, fn) {
    if (fn) {
        // Not using an arrow function to preserve context passed from call site
        return function () {
            var testBed = getTestBed();
            if (moduleDef) {
                testBed.configureTestingModule(moduleDef);
            }
            return fn.apply(this);
        };
    }
    return new InjectSetupWrapper(function () { return moduleDef; });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9iZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL3Rlc3RfYmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQWUscUJBQXFCLEVBQW1CLFNBQVMsRUFBYSxXQUFXLEVBQWtCLFFBQVEsRUFBRSxRQUFRLEVBQWdDLE1BQU0sRUFBRSxRQUFRLEVBQStDLFFBQVEsRUFBd0IsZUFBZSxJQUFJLGNBQWMsRUFBeUIsaUJBQWlCLElBQUksZ0JBQWdCLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxXQUFXLElBQUksVUFBVSxFQUEyQixzQkFBc0IsSUFBSSxxQkFBcUIsRUFBRSxpQkFBaUIsSUFBSSxnQkFBZ0IsRUFBRSxVQUFVLElBQUksU0FBUyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUVqbEIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLEVBQWlCLHFCQUFxQixFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pKLE9BQU8sRUFBa0Isc0JBQXNCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQTBFM0I7Ozs7Ozs7OztHQVNHO0FBQ0g7SUFBQTtRQWlKVSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixjQUFTLEdBQW9CLElBQUssQ0FBQztRQUNuQyxlQUFVLEdBQXFCLElBQUssQ0FBQztRQUNyQyxtQkFBYyxHQUF5QixJQUFLLENBQUM7UUFFN0MscUJBQWdCLEdBQXNCLEVB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LENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sTUFBYSxFQUFFLEVBQVk7UUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHdFQUF3RTtRQUN4RSxPQUFPO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7QUFPRCxNQUFNLFVBQVUsVUFBVSxDQUFDLFNBQTZCLEVBQUUsRUFBa0I7SUFFMUUsSUFBSSxFQUFFLEVBQUU7UUFDTix3RUFBd0U7UUFDeEUsT0FBTztZQUNMLElBQU0sT0FBTyxHQUFHLFVBQVUsRUFBRSxDQUFDO1lBQzdCLElBQUksU0FBUyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7S0FDSDtJQUNELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWJzdHJhY3RUeXBlLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMsIENvbXBpbGVyT3B0aW9ucywgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEluamVjdEZsYWdzLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlUmVmLCBOZ1pvbmUsIE9wdGlvbmFsLCBQaXBlLCBQbGF0Zm9ybVJlZiwgUHJvdmlkZXIsIFNjaGVtYU1ldGFkYXRhLCBTa2lwU2VsZiwgU3RhdGljUHJvdmlkZXIsIFR5cGUsIMm1Y2xlYXJPdmVycmlkZXMgYXMgY2xlYXJPdmVycmlkZXMsIMm1RGVwRmxhZ3MgYXMgRGVwRmxhZ3MsIMm1Z2V0SW5qZWN0YWJsZURlZiBhcyBnZXRJbmplY3RhYmxlRGVmLCDJtUlOSkVDVE9SX1NDT1BFIGFzIElOSkVDVE9SX1NDT1BFLCDJtWl2eUVuYWJsZWQgYXMgaXZ5RW5hYmxlZCwgybVOb2RlRmxhZ3MgYXMgTm9kZUZsYWdzLCDJtW92ZXJyaWRlQ29tcG9uZW50VmlldyBhcyBvdmVycmlkZUNvbXBvbmVudFZpZXcsIMm1b3ZlcnJpZGVQcm92aWRlciBhcyBvdmVycmlkZVByb3ZpZGVyLCDJtXN0cmluZ2lmeSBhcyBzdHJpbmdpZnksIMm1ybVJbmplY3RhYmxlRGVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBc3luY1Rlc3RDb21wbGV0ZXJ9IGZyb20gJy4vYXN5bmNfdGVzdF9jb21wbGV0ZXInO1xuaW1wb3J0IHtDb21wb25lbnRGaXh0dXJlfSBmcm9tICcuL2NvbXBvbmVudF9maXh0dXJlJztcbmltcG9ydCB7TWV0YWRhdGFPdmVycmlkZX0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZSc7XG5pbXBvcnQge19nZXRUZXN0QmVkUmVuZGVyMywgVGVzdEJlZFJlbmRlcjN9IGZyb20gJy4vcjNfdGVzdF9iZWQnO1xuaW1wb3J0IHtDb21wb25lbnRGaXh0dXJlQXV0b0RldGVjdCwgQ29tcG9uZW50Rml4dHVyZU5vTmdab25lLCBUZXN0QmVkU3RhdGljLCBUZXN0Q29tcG9uZW50UmVuZGVyZXIsIFRlc3RNb2R1bGVNZXRhZGF0YX0gZnJvbSAnLi90ZXN0X2JlZF9jb21tb24nO1xuaW1wb3J0IHtUZXN0aW5nQ29tcGlsZXIsIFRlc3RpbmdDb21waWxlckZhY3Rvcnl9IGZyb20gJy4vdGVzdF9jb21waWxlcic7XG5cblxubGV0IF9uZXh0Um9vdEVsZW1lbnRJZCA9IDA7XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RCZWQge1xuICBwbGF0Zm9ybTogUGxhdGZvcm1SZWY7XG5cbiAgbmdNb2R1bGU6IFR5cGU8YW55PnxUeXBlPGFueT5bXTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgZW52aXJvbm1lbnQgZm9yIHRlc3Rpbmcgd2l0aCBhIGNvbXBpbGVyIGZhY3RvcnksIGEgUGxhdGZvcm1SZWYsIGFuZCBhblxuICAgKiBhbmd1bGFyIG1vZHVsZS4gVGhlc2UgYXJlIGNvbW1vbiB0byBldmVyeSB0ZXN0IGluIHRoZSBzdWl0ZS5cbiAgICpcbiAgICogVGhpcyBtYXkgb25seSBiZSBjYWxsZWQgb25jZSwgdG8gc2V0IHVwIHRoZSBjb21tb24gcHJvdmlkZXJzIGZvciB0aGUgY3VycmVudCB0ZXN0XG4gICAqIHN1aXRlIG9uIHRoZSBjdXJyZW50IHBsYXRmb3JtLiBJZiB5b3UgYWJzb2x1dGVseSBuZWVkIHRvIGNoYW5nZSB0aGUgcHJvdmlkZXJzLFxuICAgKiBmaXJzdCB1c2UgYHJlc2V0VGVzdEVudmlyb25tZW50YC5cbiAgICpcbiAgICogVGVzdCBtb2R1bGVzIGFuZCBwbGF0Zm9ybXMgZm9yIGluZGl2aWR1YWwgcGxhdGZvcm1zIGFyZSBhdmFpbGFibGUgZnJvbVxuICAgKiAnQGFuZ3VsYXIvPHBsYXRmb3JtX25hbWU+L3Rlc3RpbmcnLlxuICAgKi9cbiAgaW5pdFRlc3RFbnZpcm9ubWVudChcbiAgICAgIG5nTW9kdWxlOiBUeXBlPGFueT58VHlwZTxhbnk+W10sIHBsYXRmb3JtOiBQbGF0Zm9ybVJlZiwgYW90U3VtbWFyaWVzPzogKCkgPT4gYW55W10pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcHJvdmlkZXJzIGZvciB0aGUgdGVzdCBpbmplY3Rvci5cbiAgICovXG4gIHJlc2V0VGVzdEVudmlyb25tZW50KCk6IHZvaWQ7XG5cbiAgcmVzZXRUZXN0aW5nTW9kdWxlKCk6IHZvaWQ7XG5cbiAgY29uZmlndXJlQ29tcGlsZXIoY29uZmlnOiB7cHJvdmlkZXJzPzogYW55W10sIHVzZUppdD86IGJvb2xlYW59KTogdm9pZDtcblxuICBjb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhKTogdm9pZDtcblxuICBjb21waWxlQ29tcG9uZW50cygpOiBQcm9taXNlPGFueT47XG5cbiAgaW5qZWN0PFQ+KFxuICAgICAgdG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD58QWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQ7XG4gIGluamVjdDxUPihcbiAgICAgIHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+fEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZTogbnVsbCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFRcbiAgICAgIHxudWxsO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cbiAgZ2V0PFQ+KHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IGFueTtcbiAgLyoqIEBkZXByZWNhdGVkIGZyb20gdjkuMC4wIHVzZSBUZXN0QmVkLmluamVjdCAqL1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueTtcblxuICBleGVjdXRlKHRva2VuczogYW55W10sIGZuOiBGdW5jdGlvbiwgY29udGV4dD86IGFueSk6IGFueTtcblxuICBvdmVycmlkZU1vZHVsZShuZ01vZHVsZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiB2b2lkO1xuXG4gIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxDb21wb25lbnQ+KTogdm9pZDtcblxuICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IHZvaWQ7XG5cbiAgb3ZlcnJpZGVQaXBlKHBpcGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8UGlwZT4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGVzIGFsbCBwcm92aWRlcnMgZm9yIHRoZSBnaXZlbiB0b2tlbiB3aXRoIHRoZSBnaXZlbiBwcm92aWRlciBkZWZpbml0aW9uLlxuICAgKi9cbiAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge1xuICAgIHVzZUZhY3Rvcnk6IEZ1bmN0aW9uLFxuICAgIGRlcHM6IGFueVtdLFxuICB9KTogdm9pZDtcbiAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge3VzZVZhbHVlOiBhbnk7fSk6IHZvaWQ7XG4gIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHt1c2VGYWN0b3J5PzogRnVuY3Rpb24sIHVzZVZhbHVlPzogYW55LCBkZXBzPzogYW55W119KTpcbiAgICAgIHZvaWQ7XG5cbiAgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZpeHR1cmU8VD47XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb25maWd1cmVzIGFuZCBpbml0aWFsaXplcyBlbnZpcm9ubWVudCBmb3IgdW5pdCB0ZXN0aW5nIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvclxuICogY3JlYXRpbmcgY29tcG9uZW50cyBhbmQgc2VydmljZXMgaW4gdW5pdCB0ZXN0cy5cbiAqXG4gKiBgVGVzdEJlZGAgaXMgdGhlIHByaW1hcnkgYXBpIGZvciB3cml0aW5nIHVuaXQgdGVzdHMgZm9yIEFuZ3VsYXIgYXBwbGljYXRpb25zIGFuZCBsaWJyYXJpZXMuXG4gKlxuICogTm90ZTogVXNlIGBUZXN0QmVkYCBpbiB0ZXN0cy4gSXQgd2lsbCBiZSBzZXQgdG8gZWl0aGVyIGBUZXN0QmVkVmlld0VuZ2luZWAgb3IgYFRlc3RCZWRSZW5kZXIzYFxuICogYWNjb3JkaW5nIHRvIHRoZSBjb21waWxlciB1c2VkLlxuICovXG5leHBvcnQgY2xhc3MgVGVzdEJlZFZpZXdFbmdpbmUgaW1wbGVtZW50cyBUZXN0QmVkIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGVudmlyb25tZW50IGZvciB0ZXN0aW5nIHdpdGggYSBjb21waWxlciBmYWN0b3J5LCBhIFBsYXRmb3JtUmVmLCBhbmQgYW5cbiAgICogYW5ndWxhciBtb2R1bGUuIFRoZXNlIGFyZSBjb21tb24gdG8gZXZlcnkgdGVzdCBpbiB0aGUgc3VpdGUuXG4gICAqXG4gICAqIFRoaXMgbWF5IG9ubHkgYmUgY2FsbGVkIG9uY2UsIHRvIHNldCB1cCB0aGUgY29tbW9uIHByb3ZpZGVycyBmb3IgdGhlIGN1cnJlbnQgdGVzdFxuICAgKiBzdWl0ZSBvbiB0aGUgY3VycmVudCBwbGF0Zm9ybS4gSWYgeW91IGFic29sdXRlbHkgbmVlZCB0byBjaGFuZ2UgdGhlIHByb3ZpZGVycyxcbiAgICogZmlyc3QgdXNlIGByZXNldFRlc3RFbnZpcm9ubWVudGAuXG4gICAqXG4gICAqIFRlc3QgbW9kdWxlcyBhbmQgcGxhdGZvcm1zIGZvciBpbmRpdmlkdWFsIHBsYXRmb3JtcyBhcmUgYXZhaWxhYmxlIGZyb21cbiAgICogJ0Bhbmd1bGFyLzxwbGF0Zm9ybV9uYW1lPi90ZXN0aW5nJy5cbiAgICovXG4gIHN0YXRpYyBpbml0VGVzdEVudmlyb25tZW50KFxuICAgICAgbmdNb2R1bGU6IFR5cGU8YW55PnxUeXBlPGFueT5bXSwgcGxhdGZvcm06IFBsYXRmb3JtUmVmLFxuICAgICAgYW90U3VtbWFyaWVzPzogKCkgPT4gYW55W10pOiBUZXN0QmVkVmlld0VuZ2luZSB7XG4gICAgY29uc3QgdGVzdEJlZCA9IF9nZXRUZXN0QmVkVmlld0VuZ2luZSgpO1xuICAgIHRlc3RCZWQuaW5pdFRlc3RFbnZpcm9ubWVudChuZ01vZHVsZSwgcGxhdGZvcm0sIGFvdFN1bW1hcmllcyk7XG4gICAgcmV0dXJuIHRlc3RCZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHByb3ZpZGVycyBmb3IgdGhlIHRlc3QgaW5qZWN0b3IuXG4gICAqL1xuICBzdGF0aWMgcmVzZXRUZXN0RW52aXJvbm1lbnQoKTogdm9pZCB7XG4gICAgX2dldFRlc3RCZWRWaWV3RW5naW5lKCkucmVzZXRUZXN0RW52aXJvbm1lbnQoKTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldFRlc3RpbmdNb2R1bGUoKTogVGVzdEJlZFN0YXRpYyB7XG4gICAgX2dldFRlc3RCZWRWaWV3RW5naW5lKCkucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBvdmVycmlkaW5nIGRlZmF1bHQgY29tcGlsZXIgcHJvdmlkZXJzIGFuZCBzZXR0aW5nc1xuICAgKiB3aGljaCBhcmUgZGVmaW5lZCBpbiB0ZXN0X2luamVjdG9yLmpzXG4gICAqL1xuICBzdGF0aWMgY29uZmlndXJlQ29tcGlsZXIoY29uZmlnOiB7cHJvdmlkZXJzPzogYW55W107IHVzZUppdD86IGJvb2xlYW47fSk6IFRlc3RCZWRTdGF0aWMge1xuICAgIF9nZXRUZXN0QmVkVmlld0VuZ2luZSgpLmNvbmZpZ3VyZUNvbXBpbGVyKGNvbmZpZyk7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBvdmVycmlkaW5nIGRlZmF1bHQgcHJvdmlkZXJzLCBkaXJlY3RpdmVzLCBwaXBlcywgbW9kdWxlcyBvZiB0aGUgdGVzdCBpbmplY3RvcixcbiAgICogd2hpY2ggYXJlIGRlZmluZWQgaW4gdGVzdF9pbmplY3Rvci5qc1xuICAgKi9cbiAgc3RhdGljIGNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUobW9kdWxlRGVmOiBUZXN0TW9kdWxlTWV0YWRhdGEpOiBUZXN0QmVkU3RhdGljIHtcbiAgICBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKS5jb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZURlZik7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgY29tcG9uZW50cyB3aXRoIGEgYHRlbXBsYXRlVXJsYCBmb3IgdGhlIHRlc3QncyBOZ01vZHVsZS5cbiAgICogSXQgaXMgbmVjZXNzYXJ5IHRvIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKiBhcyBmZXRjaGluZyB1cmxzIGlzIGFzeW5jaHJvbm91cy5cbiAgICovXG4gIHN0YXRpYyBjb21waWxlQ29tcG9uZW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRUZXN0QmVkKCkuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBvdmVycmlkZU1vZHVsZShuZ01vZHVsZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiBUZXN0QmVkU3RhdGljIHtcbiAgICBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKS5vdmVycmlkZU1vZHVsZShuZ01vZHVsZSwgb3ZlcnJpZGUpO1xuICAgIHJldHVybiBUZXN0QmVkVmlld0VuZ2luZSBhcyBhbnkgYXMgVGVzdEJlZFN0YXRpYztcbiAgfVxuXG4gIHN0YXRpYyBvdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6XG4gICAgICBUZXN0QmVkU3RhdGljIHtcbiAgICBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKS5vdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQsIG92ZXJyaWRlKTtcbiAgICByZXR1cm4gVGVzdEJlZFZpZXdFbmdpbmUgYXMgYW55IGFzIFRlc3RCZWRTdGF0aWM7XG4gIH1cblxuICBzdGF0aWMgb3ZlcnJpZGVEaXJlY3RpdmUoZGlyZWN0aXZlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPERpcmVjdGl2ZT4pOlxuICAgICAgVGVzdEJlZFN0YXRpYyB7XG4gICAgX2dldFRlc3RCZWRWaWV3RW5naW5lKCkub3ZlcnJpZGVEaXJlY3RpdmUoZGlyZWN0aXZlLCBvdmVycmlkZSk7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgc3RhdGljIG92ZXJyaWRlUGlwZShwaXBlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPFBpcGU+KTogVGVzdEJlZFN0YXRpYyB7XG4gICAgX2dldFRlc3RCZWRWaWV3RW5naW5lKCkub3ZlcnJpZGVQaXBlKHBpcGUsIG92ZXJyaWRlKTtcbiAgICByZXR1cm4gVGVzdEJlZFZpZXdFbmdpbmUgYXMgYW55IGFzIFRlc3RCZWRTdGF0aWM7XG4gIH1cblxuICBzdGF0aWMgb3ZlcnJpZGVUZW1wbGF0ZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IFRlc3RCZWRTdGF0aWMge1xuICAgIF9nZXRUZXN0QmVkVmlld0VuZ2luZSgpLm92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudCwge3NldDoge3RlbXBsYXRlLCB0ZW1wbGF0ZVVybDogbnVsbCF9fSk7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgdGVtcGxhdGUgb2YgdGhlIGdpdmVuIGNvbXBvbmVudCwgY29tcGlsaW5nIHRoZSB0ZW1wbGF0ZVxuICAgKiBpbiB0aGUgY29udGV4dCBvZiB0aGUgVGVzdGluZ01vZHVsZS5cbiAgICpcbiAgICogTm90ZTogVGhpcyB3b3JrcyBmb3IgSklUIGFuZCBBT1RlZCBjb21wb25lbnRzIGFzIHdlbGwuXG4gICAqL1xuICBzdGF0aWMgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IFRlc3RCZWRTdGF0aWMge1xuICAgIF9nZXRUZXN0QmVkVmlld0VuZ2luZSgpLm92ZXJyaWRlVGVtcGxhdGVVc2luZ1Rlc3RpbmdNb2R1bGUoY29tcG9uZW50LCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgd29ya3MgZm9yIEpJVCBhbmQgQU9UZWQgY29tcG9uZW50cyBhcyB3ZWxsLlxuICAgKi9cbiAgc3RhdGljIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcbiAgICB1c2VGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzOiBhbnlbXSxcbiAgfSk6IFRlc3RCZWRTdGF0aWM7XG4gIHN0YXRpYyBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7dXNlVmFsdWU6IGFueTt9KTogVGVzdEJlZFN0YXRpYztcbiAgc3RhdGljIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcbiAgICB1c2VGYWN0b3J5PzogRnVuY3Rpb24sXG4gICAgdXNlVmFsdWU/OiBhbnksXG4gICAgZGVwcz86IGFueVtdLFxuICB9KTogVGVzdEJlZFN0YXRpYyB7XG4gICAgX2dldFRlc3RCZWRWaWV3RW5naW5lKCkub3ZlcnJpZGVQcm92aWRlcih0b2tlbiwgcHJvdmlkZXIgYXMgYW55KTtcbiAgICByZXR1cm4gVGVzdEJlZFZpZXdFbmdpbmUgYXMgYW55IGFzIFRlc3RCZWRTdGF0aWM7XG4gIH1cblxuICBzdGF0aWMgaW5qZWN0PFQ+KFxuICAgICAgdG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD58QWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQ7XG4gIHN0YXRpYyBpbmplY3Q8VD4oXG4gICAgICB0b2tlbjogVHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPnxBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUXG4gICAgICB8bnVsbDtcbiAgc3RhdGljIGluamVjdDxUPihcbiAgICAgIHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+fEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZT86IFR8bnVsbCxcbiAgICAgIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUfG51bGwge1xuICAgIHJldHVybiBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKS5pbmplY3QodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cbiAgc3RhdGljIGdldDxUPih0b2tlbjogVHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBhbnk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3RcbiAgICogQHN1cHByZXNzIHtkdXBsaWNhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XG4gIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cbiAgc3RhdGljIGdldChcbiAgICAgIHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU6IGFueSA9IEluamVjdG9yLlRIUk9XX0lGX05PVF9GT1VORCxcbiAgICAgIGZsYWdzOiBJbmplY3RGbGFncyA9IEluamVjdEZsYWdzLkRlZmF1bHQpOiBhbnkge1xuICAgIHJldHVybiBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKS5pbmplY3QodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50Rml4dHVyZTxUPiB7XG4gICAgcmV0dXJuIF9nZXRUZXN0QmVkVmlld0VuZ2luZSgpLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5zdGFudGlhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfY29tcGlsZXI6IFRlc3RpbmdDb21waWxlciA9IG51bGwhO1xuICBwcml2YXRlIF9tb2R1bGVSZWY6IE5nTW9kdWxlUmVmPGFueT4gPSBudWxsITtcbiAgcHJpdmF0ZSBfbW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4gPSBudWxsITtcblxuICBwcml2YXRlIF9jb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdID0gW107XG5cbiAgcHJpdmF0ZSBfbW9kdWxlT3ZlcnJpZGVzOiBbVHlwZTxhbnk+LCBNZXRhZGF0YU92ZXJyaWRlPE5nTW9kdWxlPl1bXSA9IFtdO1xuICBwcml2YXRlIF9jb21wb25lbnRPdmVycmlkZXM6IFtUeXBlPGFueT4sIE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pl1bXSA9IFtdO1xuICBwcml2YXRlIF9kaXJlY3RpdmVPdmVycmlkZXM6IFtUeXBlPGFueT4sIE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPl1bXSA9IFtdO1xuICBwcml2YXRlIF9waXBlT3ZlcnJpZGVzOiBbVHlwZTxhbnk+LCBNZXRhZGF0YU92ZXJyaWRlPFBpcGU+XVtdID0gW107XG5cbiAgcHJpdmF0ZSBfcHJvdmlkZXJzOiBQcm92aWRlcltdID0gW107XG4gIHByaXZhdGUgX2RlY2xhcmF0aW9uczogQXJyYXk8VHlwZTxhbnk+fGFueVtdfGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBfaW1wb3J0czogQXJyYXk8VHlwZTxhbnk+fGFueVtdfGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBfc2NoZW1hczogQXJyYXk8U2NoZW1hTWV0YWRhdGF8YW55W10+ID0gW107XG4gIHByaXZhdGUgX2FjdGl2ZUZpeHR1cmVzOiBDb21wb25lbnRGaXh0dXJlPGFueT5bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3Rlc3RFbnZBb3RTdW1tYXJpZXM6ICgpID0+IGFueVtdID0gKCkgPT4gW107XG4gIHByaXZhdGUgX2FvdFN1bW1hcmllczogQXJyYXk8KCkgPT4gYW55W10+ID0gW107XG4gIHByaXZhdGUgX3RlbXBsYXRlT3ZlcnJpZGVzOiBBcnJheTx7Y29tcG9uZW50OiBUeXBlPGFueT4sIHRlbXBsYXRlT2Y6IFR5cGU8YW55Pn0+ID0gW107XG5cbiAgcHJpdmF0ZSBfaXNSb290OiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcm9vdFByb3ZpZGVyT3ZlcnJpZGVzOiBQcm92aWRlcltdID0gW107XG5cbiAgcGxhdGZvcm06IFBsYXRmb3JtUmVmID0gbnVsbCE7XG5cbiAgbmdNb2R1bGU6IFR5cGU8YW55PnxUeXBlPGFueT5bXSA9IG51bGwhO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBlbnZpcm9ubWVudCBmb3IgdGVzdGluZyB3aXRoIGEgY29tcGlsZXIgZmFjdG9yeSwgYSBQbGF0Zm9ybVJlZiwgYW5kIGFuXG4gICAqIGFuZ3VsYXIgbW9kdWxlLiBUaGVzZSBhcmUgY29tbW9uIHRvIGV2ZXJ5IHRlc3QgaW4gdGhlIHN1aXRlLlxuICAgKlxuICAgKiBUaGlzIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlLCB0byBzZXQgdXAgdGhlIGNvbW1vbiBwcm92aWRlcnMgZm9yIHRoZSBjdXJyZW50IHRlc3RcbiAgICogc3VpdGUgb24gdGhlIGN1cnJlbnQgcGxhdGZvcm0uIElmIHlvdSBhYnNvbHV0ZWx5IG5lZWQgdG8gY2hhbmdlIHRoZSBwcm92aWRlcnMsXG4gICAqIGZpcnN0IHVzZSBgcmVzZXRUZXN0RW52aXJvbm1lbnRgLlxuICAgKlxuICAgKiBUZXN0IG1vZHVsZXMgYW5kIHBsYXRmb3JtcyBmb3IgaW5kaXZpZHVhbCBwbGF0Zm9ybXMgYXJlIGF2YWlsYWJsZSBmcm9tXG4gICAqICdAYW5ndWxhci88cGxhdGZvcm1fbmFtZT4vdGVzdGluZycuXG4gICAqL1xuICBpbml0VGVzdEVudmlyb25tZW50KFxuICAgICAgbmdNb2R1bGU6IFR5cGU8YW55PnxUeXBlPGFueT5bXSwgcGxhdGZvcm06IFBsYXRmb3JtUmVmLCBhb3RTdW1tYXJpZXM/OiAoKSA9PiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtIHx8IHRoaXMubmdNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBiYXNlIHByb3ZpZGVycyBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkJyk7XG4gICAgfVxuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICB0aGlzLm5nTW9kdWxlID0gbmdNb2R1bGU7XG4gICAgaWYgKGFvdFN1bW1hcmllcykge1xuICAgICAgdGhpcy5fdGVzdEVudkFvdFN1bW1hcmllcyA9IGFvdFN1bW1hcmllcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHByb3ZpZGVycyBmb3IgdGhlIHRlc3QgaW5qZWN0b3IuXG4gICAqL1xuICByZXNldFRlc3RFbnZpcm9ubWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xuICAgIHRoaXMucGxhdGZvcm0gPSBudWxsITtcbiAgICB0aGlzLm5nTW9kdWxlID0gbnVsbCE7XG4gICAgdGhpcy5fdGVzdEVudkFvdFN1bW1hcmllcyA9ICgpID0+IFtdO1xuICB9XG5cbiAgcmVzZXRUZXN0aW5nTW9kdWxlKCk6IHZvaWQge1xuICAgIGNsZWFyT3ZlcnJpZGVzKCk7XG4gICAgdGhpcy5fYW90U3VtbWFyaWVzID0gW107XG4gICAgdGhpcy5fdGVtcGxhdGVPdmVycmlkZXMgPSBbXTtcbiAgICB0aGlzLl9jb21waWxlciA9IG51bGwhO1xuICAgIHRoaXMuX21vZHVsZU92ZXJyaWRlcyA9IFtdO1xuICAgIHRoaXMuX2NvbXBvbmVudE92ZXJyaWRlcyA9IFtdO1xuICAgIHRoaXMuX2RpcmVjdGl2ZU92ZXJyaWRlcyA9IFtdO1xuICAgIHRoaXMuX3BpcGVPdmVycmlkZXMgPSBbXTtcblxuICAgIHRoaXMuX2lzUm9vdCA9IHRydWU7XG4gICAgdGhpcy5fcm9vdFByb3ZpZGVyT3ZlcnJpZGVzID0gW107XG5cbiAgICB0aGlzLl9tb2R1bGVSZWYgPSBudWxsITtcbiAgICB0aGlzLl9tb2R1bGVGYWN0b3J5ID0gbnVsbCE7XG4gICAgdGhpcy5fY29tcGlsZXJPcHRpb25zID0gW107XG4gICAgdGhpcy5fcHJvdmlkZXJzID0gW107XG4gICAgdGhpcy5fZGVjbGFyYXRpb25zID0gW107XG4gICAgdGhpcy5faW1wb3J0cyA9IFtdO1xuICAgIHRoaXMuX3NjaGVtYXMgPSBbXTtcbiAgICB0aGlzLl9pbnN0YW50aWF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmVGaXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBmaXh0dXJlLmRlc3Ryb3koKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50Jywge1xuICAgICAgICAgIGNvbXBvbmVudDogZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZSxcbiAgICAgICAgICBzdGFja3RyYWNlOiBlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9hY3RpdmVGaXh0dXJlcyA9IFtdO1xuICB9XG5cbiAgY29uZmlndXJlQ29tcGlsZXIoY29uZmlnOiB7cHJvdmlkZXJzPzogYW55W10sIHVzZUppdD86IGJvb2xlYW59KTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXJ0Tm90SW5zdGFudGlhdGVkKCdUZXN0QmVkLmNvbmZpZ3VyZUNvbXBpbGVyJywgJ2NvbmZpZ3VyZSB0aGUgY29tcGlsZXInKTtcbiAgICB0aGlzLl9jb21waWxlck9wdGlvbnMucHVzaChjb25maWcpO1xuICB9XG5cbiAgY29uZmlndXJlVGVzdGluZ01vZHVsZShtb2R1bGVEZWY6IFRlc3RNb2R1bGVNZXRhZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuX2Fzc2VydE5vdEluc3RhbnRpYXRlZCgnVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlJywgJ2NvbmZpZ3VyZSB0aGUgdGVzdCBtb2R1bGUnKTtcbiAgICBpZiAobW9kdWxlRGVmLnByb3ZpZGVycykge1xuICAgICAgdGhpcy5fcHJvdmlkZXJzLnB1c2goLi4ubW9kdWxlRGVmLnByb3ZpZGVycyk7XG4gICAgfVxuICAgIGlmIChtb2R1bGVEZWYuZGVjbGFyYXRpb25zKSB7XG4gICAgICB0aGlzLl9kZWNsYXJhdGlvbnMucHVzaCguLi5tb2R1bGVEZWYuZGVjbGFyYXRpb25zKTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZURlZi5pbXBvcnRzKSB7XG4gICAgICB0aGlzLl9pbXBvcnRzLnB1c2goLi4ubW9kdWxlRGVmLmltcG9ydHMpO1xuICAgIH1cbiAgICBpZiAobW9kdWxlRGVmLnNjaGVtYXMpIHtcbiAgICAgIHRoaXMuX3NjaGVtYXMucHVzaCguLi5tb2R1bGVEZWYuc2NoZW1hcyk7XG4gICAgfVxuICAgIGlmIChtb2R1bGVEZWYuYW90U3VtbWFyaWVzKSB7XG4gICAgICB0aGlzLl9hb3RTdW1tYXJpZXMucHVzaChtb2R1bGVEZWYuYW90U3VtbWFyaWVzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlQ29tcG9uZW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLl9tb2R1bGVGYWN0b3J5IHx8IHRoaXMuX2luc3RhbnRpYXRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2R1bGVUeXBlID0gdGhpcy5fY3JlYXRlQ29tcGlsZXJBbmRNb2R1bGUoKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYyhtb2R1bGVUeXBlKVxuICAgICAgICAudGhlbigobW9kdWxlQW5kQ29tcG9uZW50RmFjdG9yaWVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbW9kdWxlRmFjdG9yeSA9IG1vZHVsZUFuZENvbXBvbmVudEZhY3Rvcmllcy5uZ01vZHVsZUZhY3Rvcnk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdElmTmVlZGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW50aWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9tb2R1bGVGYWN0b3J5KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtb2R1bGVUeXBlID0gdGhpcy5fY3JlYXRlQ29tcGlsZXJBbmRNb2R1bGUoKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlRmFjdG9yeSA9XG4gICAgICAgICAgICB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMobW9kdWxlVHlwZSkubmdNb2R1bGVGYWN0b3J5O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvckNvbXBUeXBlID0gdGhpcy5fY29tcGlsZXIuZ2V0Q29tcG9uZW50RnJvbUVycm9yKGUpO1xuICAgICAgICBpZiAoZXJyb3JDb21wVHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoaXMgdGVzdCBtb2R1bGUgdXNlcyB0aGUgY29tcG9uZW50ICR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb21wVHlwZSl9IHdoaWNoIGlzIHVzaW5nIGEgXCJ0ZW1wbGF0ZVVybFwiIG9yIFwic3R5bGVVcmxzXCIsIGJ1dCB0aGV5IHdlcmUgbmV2ZXIgY29tcGlsZWQuIGAgK1xuICAgICAgICAgICAgICBgUGxlYXNlIGNhbGwgXCJUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzXCIgYmVmb3JlIHlvdXIgdGVzdC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qge2NvbXBvbmVudCwgdGVtcGxhdGVPZn0gb2YgdGhpcy5fdGVtcGxhdGVPdmVycmlkZXMpIHtcbiAgICAgIGNvbnN0IGNvbXBGYWN0b3J5ID0gdGhpcy5fY29tcGlsZXIuZ2V0Q29tcG9uZW50RmFjdG9yeSh0ZW1wbGF0ZU9mKTtcbiAgICAgIG92ZXJyaWRlQ29tcG9uZW50Vmlldyhjb21wb25lbnQsIGNvbXBGYWN0b3J5KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZ1pvbmUgPVxuICAgICAgICBuZXcgTmdab25lKHtlbmFibGVMb25nU3RhY2tUcmFjZTogdHJ1ZSwgc2hvdWxkQ29hbGVzY2VFdmVudENoYW5nZURldGVjdGlvbjogZmFsc2V9KTtcbiAgICBjb25zdCBwcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbe3Byb3ZpZGU6IE5nWm9uZSwgdXNlVmFsdWU6IG5nWm9uZX1dO1xuICAgIGNvbnN0IG5nWm9uZUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgICAgcGFyZW50OiB0aGlzLnBsYXRmb3JtLmluamVjdG9yLFxuICAgICAgbmFtZTogdGhpcy5fbW9kdWxlRmFjdG9yeS5tb2R1bGVUeXBlLm5hbWVcbiAgICB9KTtcbiAgICB0aGlzLl9tb2R1bGVSZWYgPSB0aGlzLl9tb2R1bGVGYWN0b3J5LmNyZWF0ZShuZ1pvbmVJbmplY3Rvcik7XG4gICAgLy8gQXBwbGljYXRpb25Jbml0U3RhdHVzLnJ1bkluaXRpYWxpemVycygpIGlzIG1hcmtlZCBAaW50ZXJuYWwgdG8gY29yZS4gU28gY2FzdGluZyB0byBhbnlcbiAgICAvLyBiZWZvcmUgYWNjZXNzaW5nIGl0LlxuICAgICh0aGlzLl9tb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uSW5pdFN0YXR1cykgYXMgYW55KS5ydW5Jbml0aWFsaXplcnMoKTtcbiAgICB0aGlzLl9pbnN0YW50aWF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29tcGlsZXJBbmRNb2R1bGUoKTogVHlwZTxhbnk+IHtcbiAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLl9wcm92aWRlcnMuY29uY2F0KFt7cHJvdmlkZTogVGVzdEJlZCwgdXNlVmFsdWU6IHRoaXN9XSk7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID1cbiAgICAgICAgWy4uLnRoaXMuX2RlY2xhcmF0aW9ucywgLi4udGhpcy5fdGVtcGxhdGVPdmVycmlkZXMubWFwKGVudHJ5ID0+IGVudHJ5LnRlbXBsYXRlT2YpXTtcblxuICAgIGNvbnN0IHJvb3RTY29wZUltcG9ydHMgPSBbXTtcbiAgICBjb25zdCByb290UHJvdmlkZXJPdmVycmlkZXMgPSB0aGlzLl9yb290UHJvdmlkZXJPdmVycmlkZXM7XG4gICAgaWYgKHRoaXMuX2lzUm9vdCkge1xuICAgICAgQE5nTW9kdWxlKHtcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgLi4ucm9vdFByb3ZpZGVyT3ZlcnJpZGVzLFxuICAgICAgICBdLFxuICAgICAgICBqaXQ6IHRydWUsXG4gICAgICB9KVxuICAgICAgY2xhc3MgUm9vdFNjb3BlTW9kdWxlIHtcbiAgICAgIH1cbiAgICAgIHJvb3RTY29wZUltcG9ydHMucHVzaChSb290U2NvcGVNb2R1bGUpO1xuICAgIH1cbiAgICBwcm92aWRlcnMucHVzaCh7cHJvdmlkZTogSU5KRUNUT1JfU0NPUEUsIHVzZVZhbHVlOiB0aGlzLl9pc1Jvb3QgPyAncm9vdCcgOiBudWxsfSk7XG5cbiAgICBjb25zdCBpbXBvcnRzID0gW3Jvb3RTY29wZUltcG9ydHMsIHRoaXMubmdNb2R1bGUsIHRoaXMuX2ltcG9ydHNdO1xuICAgIGNvbnN0IHNjaGVtYXMgPSB0aGlzLl9zY2hlbWFzO1xuXG4gICAgQE5nTW9kdWxlKHtwcm92aWRlcnMsIGRlY2xhcmF0aW9ucywgaW1wb3J0cywgc2NoZW1hcywgaml0OiB0cnVlfSlcbiAgICBjbGFzcyBEeW5hbWljVGVzdE1vZHVsZSB7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZXJGYWN0b3J5ID0gdGhpcy5wbGF0Zm9ybS5pbmplY3Rvci5nZXQoVGVzdGluZ0NvbXBpbGVyRmFjdG9yeSk7XG4gICAgdGhpcy5fY29tcGlsZXIgPSBjb21waWxlckZhY3RvcnkuY3JlYXRlVGVzdGluZ0NvbXBpbGVyKHRoaXMuX2NvbXBpbGVyT3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBzdW1tYXJ5IG9mIFt0aGlzLl90ZXN0RW52QW90U3VtbWFyaWVzLCAuLi50aGlzLl9hb3RTdW1tYXJpZXNdKSB7XG4gICAgICB0aGlzLl9jb21waWxlci5sb2FkQW90U3VtbWFyaWVzKHN1bW1hcnkpO1xuICAgIH1cbiAgICB0aGlzLl9tb2R1bGVPdmVycmlkZXMuZm9yRWFjaCgoZW50cnkpID0+IHRoaXMuX2NvbXBpbGVyLm92ZXJyaWRlTW9kdWxlKGVudHJ5WzBdLCBlbnRyeVsxXSkpO1xuICAgIHRoaXMuX2NvbXBvbmVudE92ZXJyaWRlcy5mb3JFYWNoKFxuICAgICAgICAoZW50cnkpID0+IHRoaXMuX2NvbXBpbGVyLm92ZXJyaWRlQ29tcG9uZW50KGVudHJ5WzBdLCBlbnRyeVsxXSkpO1xuICAgIHRoaXMuX2RpcmVjdGl2ZU92ZXJyaWRlcy5mb3JFYWNoKFxuICAgICAgICAoZW50cnkpID0+IHRoaXMuX2NvbXBpbGVyLm92ZXJyaWRlRGlyZWN0aXZlKGVudHJ5WzBdLCBlbnRyeVsxXSkpO1xuICAgIHRoaXMuX3BpcGVPdmVycmlkZXMuZm9yRWFjaCgoZW50cnkpID0+IHRoaXMuX2NvbXBpbGVyLm92ZXJyaWRlUGlwZShlbnRyeVswXSwgZW50cnlbMV0pKTtcbiAgICByZXR1cm4gRHluYW1pY1Rlc3RNb2R1bGU7XG4gIH1cblxuICBwcml2YXRlIF9hc3NlcnROb3RJbnN0YW50aWF0ZWQobWV0aG9kTmFtZTogc3RyaW5nLCBtZXRob2REZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbnRpYXRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgJHttZXRob2REZXNjcmlwdGlvbn0gd2hlbiB0aGUgdGVzdCBtb2R1bGUgaGFzIGFscmVhZHkgYmVlbiBpbnN0YW50aWF0ZWQuIGAgK1xuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGFyZSBub3QgdXNpbmcgXFxgaW5qZWN0XFxgIGJlZm9yZSBcXGAke21ldGhvZE5hbWV9XFxgLmApO1xuICAgIH1cbiAgfVxuXG4gIGluamVjdDxUPihcbiAgICAgIHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+fEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUO1xuICBpbmplY3Q8VD4oXG4gICAgICB0b2tlbjogVHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPnxBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUXG4gICAgICB8bnVsbDtcbiAgaW5qZWN0PFQ+KFxuICAgICAgdG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD58QWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVHxudWxsLFxuICAgICAgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFR8bnVsbCB7XG4gICAgdGhpcy5faW5pdElmTmVlZGVkKCk7XG4gICAgaWYgKHRva2VuIGFzIHVua25vd24gPT09IFRlc3RCZWQpIHtcbiAgICAgIHJldHVybiB0aGlzIGFzIGFueTtcbiAgICB9XG4gICAgLy8gVGVzdHMgY2FuIGluamVjdCB0aGluZ3MgZnJvbSB0aGUgbmcgbW9kdWxlIGFuZCBmcm9tIHRoZSBjb21waWxlcixcbiAgICAvLyBidXQgdGhlIG5nIG1vZHVsZSBjYW4ndCBpbmplY3QgdGhpbmdzIGZyb20gdGhlIGNvbXBpbGVyIGFuZCB2aWNlIHZlcnNhLlxuICAgIGNvbnN0IFVOREVGSU5FRCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX21vZHVsZVJlZi5pbmplY3Rvci5nZXQodG9rZW4sIFVOREVGSU5FRCwgZmxhZ3MpO1xuICAgIHJldHVybiByZXN1bHQgPT09IFVOREVGSU5FRCA/IHRoaXMuX2NvbXBpbGVyLmluamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSwgZmxhZ3MpIGFzIGFueSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0O1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIGZyb20gdjkuMC4wIHVzZSBUZXN0QmVkLmluamVjdCAqL1xuICBnZXQ8VD4odG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU/OiBULCBmbGFncz86IEluamVjdEZsYWdzKTogYW55O1xuICAvKiogQGRlcHJlY2F0ZWQgZnJvbSB2OS4wLjAgdXNlIFRlc3RCZWQuaW5qZWN0ICovXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55O1xuICAvKiogQGRlcHJlY2F0ZWQgZnJvbSB2OS4wLjAgdXNlIFRlc3RCZWQuaW5qZWN0ICovXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlOiBhbnkgPSBJbmplY3Rvci5USFJPV19JRl9OT1RfRk9VTkQsXG4gICAgICBmbGFnczogSW5qZWN0RmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3QodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzKTtcbiAgfVxuXG4gIGV4ZWN1dGUodG9rZW5zOiBhbnlbXSwgZm46IEZ1bmN0aW9uLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLl9pbml0SWZOZWVkZWQoKTtcbiAgICBjb25zdCBwYXJhbXMgPSB0b2tlbnMubWFwKHQgPT4gdGhpcy5pbmplY3QodCkpO1xuICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICB9XG5cbiAgb3ZlcnJpZGVNb2R1bGUobmdNb2R1bGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8TmdNb2R1bGU+KTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXJ0Tm90SW5zdGFudGlhdGVkKCdvdmVycmlkZU1vZHVsZScsICdvdmVycmlkZSBtb2R1bGUgbWV0YWRhdGEnKTtcbiAgICB0aGlzLl9tb2R1bGVPdmVycmlkZXMucHVzaChbbmdNb2R1bGUsIG92ZXJyaWRlXSk7XG4gIH1cblxuICBvdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6IHZvaWQge1xuICAgIHRoaXMuX2Fzc2VydE5vdEluc3RhbnRpYXRlZCgnb3ZlcnJpZGVDb21wb25lbnQnLCAnb3ZlcnJpZGUgY29tcG9uZW50IG1ldGFkYXRhJyk7XG4gICAgdGhpcy5fY29tcG9uZW50T3ZlcnJpZGVzLnB1c2goW2NvbXBvbmVudCwgb3ZlcnJpZGVdKTtcbiAgfVxuXG4gIG92ZXJyaWRlRGlyZWN0aXZlKGRpcmVjdGl2ZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxEaXJlY3RpdmU+KTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXJ0Tm90SW5zdGFudGlhdGVkKCdvdmVycmlkZURpcmVjdGl2ZScsICdvdmVycmlkZSBkaXJlY3RpdmUgbWV0YWRhdGEnKTtcbiAgICB0aGlzLl9kaXJlY3RpdmVPdmVycmlkZXMucHVzaChbZGlyZWN0aXZlLCBvdmVycmlkZV0pO1xuICB9XG5cbiAgb3ZlcnJpZGVQaXBlKHBpcGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8UGlwZT4pOiB2b2lkIHtcbiAgICB0aGlzLl9hc3NlcnROb3RJbnN0YW50aWF0ZWQoJ292ZXJyaWRlUGlwZScsICdvdmVycmlkZSBwaXBlIG1ldGFkYXRhJyk7XG4gICAgdGhpcy5fcGlwZU92ZXJyaWRlcy5wdXNoKFtwaXBlLCBvdmVycmlkZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXG4gICAqL1xuICBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XG4gICAgdXNlRmFjdG9yeTogRnVuY3Rpb24sXG4gICAgZGVwczogYW55W10sXG4gIH0pOiB2b2lkO1xuICBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7dXNlVmFsdWU6IGFueTt9KTogdm9pZDtcbiAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge3VzZUZhY3Rvcnk/OiBGdW5jdGlvbiwgdXNlVmFsdWU/OiBhbnksIGRlcHM/OiBhbnlbXX0pOlxuICAgICAgdm9pZCB7XG4gICAgdGhpcy5vdmVycmlkZVByb3ZpZGVySW1wbCh0b2tlbiwgcHJvdmlkZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZVByb3ZpZGVySW1wbChcbiAgICAgIHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XG4gICAgICAgIHVzZUZhY3Rvcnk/OiBGdW5jdGlvbixcbiAgICAgICAgdXNlVmFsdWU/OiBhbnksXG4gICAgICAgIGRlcHM/OiBhbnlbXSxcbiAgICAgIH0sXG4gICAgICBkZXByZWNhdGVkID0gZmFsc2UpOiB2b2lkIHtcbiAgICBsZXQgZGVmOiDJtcm1SW5qZWN0YWJsZURlZjxhbnk+fG51bGwgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgdG9rZW4gIT09ICdzdHJpbmcnICYmIChkZWYgPSBnZXRJbmplY3RhYmxlRGVmKHRva2VuKSkgJiYgZGVmLnByb3ZpZGVkSW4gPT09ICdyb290Jykge1xuICAgICAgaWYgKHByb3ZpZGVyLnVzZUZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fcm9vdFByb3ZpZGVyT3ZlcnJpZGVzLnB1c2goXG4gICAgICAgICAgICB7cHJvdmlkZTogdG9rZW4sIHVzZUZhY3Rvcnk6IHByb3ZpZGVyLnVzZUZhY3RvcnksIGRlcHM6IHByb3ZpZGVyLmRlcHMgfHwgW119KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jvb3RQcm92aWRlck92ZXJyaWRlcy5wdXNoKHtwcm92aWRlOiB0b2tlbiwgdXNlVmFsdWU6IHByb3ZpZGVyLnVzZVZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBmbGFnczogTm9kZUZsYWdzID0gMDtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAocHJvdmlkZXIudXNlRmFjdG9yeSkge1xuICAgICAgZmxhZ3MgfD0gTm9kZUZsYWdzLlR5cGVGYWN0b3J5UHJvdmlkZXI7XG4gICAgICB2YWx1ZSA9IHByb3ZpZGVyLnVzZUZhY3Rvcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWdzIHw9IE5vZGVGbGFncy5UeXBlVmFsdWVQcm92aWRlcjtcbiAgICAgIHZhbHVlID0gcHJvdmlkZXIudXNlVmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGRlcHMgPSAocHJvdmlkZXIuZGVwcyB8fCBbXSkubWFwKChkZXApID0+IHtcbiAgICAgIGxldCBkZXBGbGFnczogRGVwRmxhZ3MgPSBEZXBGbGFncy5Ob25lO1xuICAgICAgbGV0IGRlcFRva2VuOiBhbnk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkZXApKSB7XG4gICAgICAgIGRlcC5mb3JFYWNoKChlbnRyeTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgT3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGRlcEZsYWdzIHw9IERlcEZsYWdzLk9wdGlvbmFsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkgaW5zdGFuY2VvZiBTa2lwU2VsZikge1xuICAgICAgICAgICAgZGVwRmxhZ3MgfD0gRGVwRmxhZ3MuU2tpcFNlbGY7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlcFRva2VuID0gZW50cnk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcFRva2VuID0gZGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtkZXBGbGFncywgZGVwVG9rZW5dO1xuICAgIH0pO1xuICAgIG92ZXJyaWRlUHJvdmlkZXIoe3Rva2VuLCBmbGFncywgZGVwcywgdmFsdWUsIGRlcHJlY2F0ZWRCZWhhdmlvcjogZGVwcmVjYXRlZH0pO1xuICB9XG5cbiAgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fzc2VydE5vdEluc3RhbnRpYXRlZCgnb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZScsICdvdmVycmlkZSB0ZW1wbGF0ZScpO1xuXG4gICAgQENvbXBvbmVudCh7c2VsZWN0b3I6ICdlbXB0eScsIHRlbXBsYXRlLCBqaXQ6IHRydWV9KVxuICAgIGNsYXNzIE92ZXJyaWRlQ29tcG9uZW50IHtcbiAgICB9XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU92ZXJyaWRlcy5wdXNoKHtjb21wb25lbnQsIHRlbXBsYXRlT2Y6IE92ZXJyaWRlQ29tcG9uZW50fSk7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50Rml4dHVyZTxUPiB7XG4gICAgdGhpcy5faW5pdElmTmVlZGVkKCk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBpbGVyLmdldENvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuICAgIGlmICghY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIHRoZSBjb21wb25lbnQgJHtcbiAgICAgICAgICBzdHJpbmdpZnkoY29tcG9uZW50KX0gYXMgaXQgd2FzIG5vdCBpbXBvcnRlZCBpbnRvIHRoZSB0ZXN0aW5nIG1vZHVsZSFgKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBEb24ndCBjYXN0IGFzIGBJbmplY3Rpb25Ub2tlbjxib29sZWFuPmAsIGRlY2xhcmVkIHR5cGUgaXMgYm9vbGVhbltdXG4gICAgY29uc3Qgbm9OZ1pvbmUgPSB0aGlzLmluamVjdChDb21wb25lbnRGaXh0dXJlTm9OZ1pvbmUgYXMgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4sIGZhbHNlKTtcbiAgICAvLyBUT0RPOiBEb24ndCBjYXN0IGFzIGBJbmplY3Rpb25Ub2tlbjxib29sZWFuPmAsIGRlY2xhcmVkIHR5cGUgaXMgYm9vbGVhbltdXG4gICAgY29uc3QgYXV0b0RldGVjdDogYm9vbGVhbiA9XG4gICAgICAgIHRoaXMuaW5qZWN0KENvbXBvbmVudEZpeHR1cmVBdXRvRGV0ZWN0IGFzIEluamVjdGlvblRva2VuPGJvb2xlYW4+LCBmYWxzZSk7XG4gICAgY29uc3Qgbmdab25lOiBOZ1pvbmV8bnVsbCA9IG5vTmdab25lID8gbnVsbCA6IHRoaXMuaW5qZWN0KE5nWm9uZSwgbnVsbCk7XG4gICAgY29uc3QgdGVzdENvbXBvbmVudFJlbmRlcmVyOiBUZXN0Q29tcG9uZW50UmVuZGVyZXIgPSB0aGlzLmluamVjdChUZXN0Q29tcG9uZW50UmVuZGVyZXIpO1xuICAgIGNvbnN0IHJvb3RFbElkID0gYHJvb3Qke19uZXh0Um9vdEVsZW1lbnRJZCsrfWA7XG4gICAgdGVzdENvbXBvbmVudFJlbmRlcmVyLmluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkKTtcblxuICAgIGNvbnN0IGluaXRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPVxuICAgICAgICAgIGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKEluamVjdG9yLk5VTEwsIFtdLCBgIyR7cm9vdEVsSWR9YCwgdGhpcy5fbW9kdWxlUmVmKTtcbiAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50Rml4dHVyZTxUPihjb21wb25lbnRSZWYsIG5nWm9uZSwgYXV0b0RldGVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpeHR1cmUgPSAhbmdab25lID8gaW5pdENvbXBvbmVudCgpIDogbmdab25lLnJ1bihpbml0Q29tcG9uZW50KTtcbiAgICB0aGlzLl9hY3RpdmVGaXh0dXJlcy5wdXNoKGZpeHR1cmUpO1xuICAgIHJldHVybiBmaXh0dXJlO1xuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb25maWd1cmVzIGFuZCBpbml0aWFsaXplcyBlbnZpcm9ubWVudCBmb3IgdW5pdCB0ZXN0aW5nIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvclxuICogY3JlYXRpbmcgY29tcG9uZW50cyBhbmQgc2VydmljZXMgaW4gdW5pdCB0ZXN0cy5cbiAqXG4gKiBgVGVzdEJlZGAgaXMgdGhlIHByaW1hcnkgYXBpIGZvciB3cml0aW5nIHVuaXQgdGVzdHMgZm9yIEFuZ3VsYXIgYXBwbGljYXRpb25zIGFuZCBsaWJyYXJpZXMuXG4gKlxuICogTm90ZTogVXNlIGBUZXN0QmVkYCBpbiB0ZXN0cy4gSXQgd2lsbCBiZSBzZXQgdG8gZWl0aGVyIGBUZXN0QmVkVmlld0VuZ2luZWAgb3IgYFRlc3RCZWRSZW5kZXIzYFxuICogYWNjb3JkaW5nIHRvIHRoZSBjb21waWxlciB1c2VkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFRlc3RCZWQ6IFRlc3RCZWRTdGF0aWMgPVxuICAgIGl2eUVuYWJsZWQgPyBUZXN0QmVkUmVuZGVyMyBhcyBhbnkgYXMgVGVzdEJlZFN0YXRpYyA6IFRlc3RCZWRWaWV3RW5naW5lIGFzIGFueSBhcyBUZXN0QmVkU3RhdGljO1xuXG4vKipcbiAqIFJldHVybnMgYSBzaW5nbGV0b24gb2YgdGhlIGFwcGxpY2FibGUgYFRlc3RCZWRgLlxuICpcbiAqIEl0IHdpbGwgYmUgZWl0aGVyIGFuIGluc3RhbmNlIG9mIGBUZXN0QmVkVmlld0VuZ2luZWAgb3IgYFRlc3RCZWRSZW5kZXIzYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZXN0QmVkOiAoKSA9PiBUZXN0QmVkID0gaXZ5RW5hYmxlZCA/IF9nZXRUZXN0QmVkUmVuZGVyMyA6IF9nZXRUZXN0QmVkVmlld0VuZ2luZTtcblxubGV0IHRlc3RCZWQ6IFRlc3RCZWRWaWV3RW5naW5lO1xuXG5mdW5jdGlvbiBfZ2V0VGVzdEJlZFZpZXdFbmdpbmUoKTogVGVzdEJlZFZpZXdFbmdpbmUge1xuICByZXR1cm4gdGVzdEJlZCA9IHRlc3RCZWQgfHwgbmV3IFRlc3RCZWRWaWV3RW5naW5lKCk7XG59XG5cbi8qKlxuICogQWxsb3dzIGluamVjdGluZyBkZXBlbmRlbmNpZXMgaW4gYGJlZm9yZUVhY2goKWAgYW5kIGBpdCgpYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogYmVmb3JlRWFjaChpbmplY3QoW0RlcGVuZGVuY3ksIEFDbGFzc10sIChkZXAsIG9iamVjdCkgPT4ge1xuICogICAvLyBzb21lIGNvZGUgdGhhdCB1c2VzIGBkZXBgIGFuZCBgb2JqZWN0YFxuICogICAvLyAuLi5cbiAqIH0pKTtcbiAqXG4gKiBpdCgnLi4uJywgaW5qZWN0KFtBQ2xhc3NdLCAob2JqZWN0KSA9PiB7XG4gKiAgIG9iamVjdC5kb1NvbWV0aGluZygpO1xuICogICBleHBlY3QoLi4uKTtcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBOb3RlczpcbiAqIC0gaW5qZWN0IGlzIGN1cnJlbnRseSBhIGZ1bmN0aW9uIGJlY2F1c2Ugb2Ygc29tZSBUcmFjZXVyIGxpbWl0YXRpb24gdGhlIHN5bnRheCBzaG91bGRcbiAqIGV2ZW50dWFsbHlcbiAqICAgYmVjb21lcyBgaXQoJy4uLicsIEBJbmplY3QgKG9iamVjdDogQUNsYXNzLCBhc3luYzogQXN5bmNUZXN0Q29tcGxldGVyKSA9PiB7IC4uLiB9KTtgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0KHRva2VuczogYW55W10sIGZuOiBGdW5jdGlvbik6ICgpID0+IGFueSB7XG4gIGNvbnN0IHRlc3RCZWQgPSBnZXRUZXN0QmVkKCk7XG4gIGlmICh0b2tlbnMuaW5kZXhPZihBc3luY1Rlc3RDb21wbGV0ZXIpID49IDApIHtcbiAgICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgLy8gUmV0dXJuIGFuIGFzeW5jIHRlc3QgbWV0aG9kIHRoYXQgcmV0dXJucyBhIFByb21pc2UgaWYgQXN5bmNUZXN0Q29tcGxldGVyIGlzIG9uZSBvZlxuICAgICAgLy8gdGhlIGluamVjdGVkIHRva2Vucy5cbiAgICAgIHJldHVybiB0ZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlciA9IHRlc3RCZWQuaW5qZWN0KEFzeW5jVGVzdENvbXBsZXRlcik7XG4gICAgICAgIHRlc3RCZWQuZXhlY3V0ZSh0b2tlbnMsIGZuLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlci5wcm9taXNlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgcmV0dXJuIHRlc3RCZWQuZXhlY3V0ZSh0b2tlbnMsIGZuLCB0aGlzKTtcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSW5qZWN0U2V0dXBXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kdWxlRGVmOiAoKSA9PiBUZXN0TW9kdWxlTWV0YWRhdGEpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkTW9kdWxlKCkge1xuICAgIGNvbnN0IG1vZHVsZURlZiA9IHRoaXMuX21vZHVsZURlZigpO1xuICAgIGlmIChtb2R1bGVEZWYpIHtcbiAgICAgIGdldFRlc3RCZWQoKS5jb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZURlZik7XG4gICAgfVxuICB9XG5cbiAgaW5qZWN0KHRva2VuczogYW55W10sIGZuOiBGdW5jdGlvbik6ICgpID0+IGFueSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24pIHtcbiAgICAgIHNlbGYuX2FkZE1vZHVsZSgpO1xuICAgICAgcmV0dXJuIGluamVjdCh0b2tlbnMsIGZuKS5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoTW9kdWxlKG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhKTogSW5qZWN0U2V0dXBXcmFwcGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhNb2R1bGUobW9kdWxlRGVmOiBUZXN0TW9kdWxlTWV0YWRhdGEsIGZuOiBGdW5jdGlvbik6ICgpID0+IGFueTtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoTW9kdWxlKG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhLCBmbj86IEZ1bmN0aW9ufG51bGwpOiAoKCkgPT4gYW55KXxcbiAgICBJbmplY3RTZXR1cFdyYXBwZXIge1xuICBpZiAoZm4pIHtcbiAgICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgY29uc3QgdGVzdEJlZCA9IGdldFRlc3RCZWQoKTtcbiAgICAgIGlmIChtb2R1bGVEZWYpIHtcbiAgICAgICAgdGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZURlZik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gbmV3IEluamVjdFNldHVwV3JhcHBlcigoKSA9PiBtb2R1bGVEZWYpO1xufVxuIl19