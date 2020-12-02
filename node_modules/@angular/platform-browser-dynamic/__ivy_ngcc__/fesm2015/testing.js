/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { Injectable, Inject, ɵstringify, NgModule, Directive, Component, Pipe, createPlatformFactory, COMPILER_OPTIONS, Injector, CompilerFactory } from '@angular/core';
import { TestComponentRenderer, ɵMetadataOverrider, ɵTestingCompilerFactory } from '@angular/core/testing';
import { ɵplatformCoreDynamic, ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ɵgetDOM, DOCUMENT } from '@angular/common';
import { CompileReflector, PipeResolver, DirectiveResolver, NgModuleResolver, ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { MockPipeResolver, MockDirectiveResolver, MockNgModuleResolver } from '@angular/compiler/testing';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/dom_test_component_renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
import * as ɵngcc0 from '@angular/core';
class DOMTestComponentRenderer extends TestComponentRenderer {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    /**
     * @param {?} rootElId
     * @return {?}
     */
    insertRootElement(rootElId) {
        /** @type {?} */
        const template = ɵgetDOM().getDefaultDocument().createElement('template');
        template.innerHTML = `<div id="${rootElId}"></div>`;
        /** @type {?} */
        const rootEl = (/** @type {?} */ (getContent(template).firstChild));
        // TODO(juliemr): can/should this be optional?
        /** @type {?} */
        const oldRoots = this._doc.querySelectorAll('[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            ɵgetDOM().remove(oldRoots[i]);
        }
        this._doc.body.appendChild(rootEl);
    }
}
DOMTestComponentRenderer.ɵfac = function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(ɵngcc0.ɵɵinject(DOCUMENT)); };
DOMTestComponentRenderer.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: DOMTestComponentRenderer.ɵfac });
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    DOMTestComponentRenderer.prototype._doc;
}
/**
 * @param {?} node
 * @return {?}
 */
function getContent(node) {
    if ('content' in node) {
        return ((/** @type {?} */ (node))).content;
    }
    else {
        return node;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/metadata_overrider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/compiler_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
class TestingCompilerFactoryImpl {
    /**
     * @param {?} _injector
     * @param {?} _compilerFactory
     */
    constructor(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    createTestingCompiler(options) {
        /** @type {?} */
        const compiler = (/** @type {?} */ (this._compilerFactory.createCompiler(options)));
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingCompilerFactoryImpl.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerFactoryImpl.prototype._compilerFactory;
}
class TestingCompilerImpl {
    /**
     * @param {?} _compiler
     * @param {?} _directiveResolver
     * @param {?} _pipeResolver
     * @param {?} _moduleResolver
     */
    constructor(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new ɵMetadataOverrider();
    }
    /**
     * @return {?}
     */
    get injector() {
        return this._compiler.injector;
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return this._compiler.getComponentFactory(component);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    checkOverrideAllowed(type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(`${ɵstringify(type)} was AOT compiled, so its metadata cannot be changed.`);
        }
    }
    /**
     * @param {?} ngModule
     * @param {?} override
     * @return {?}
     */
    overrideModule(ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        /** @type {?} */
        const oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    }
    /**
     * @param {?} directive
     * @param {?} override
     * @return {?}
     */
    overrideDirective(directive, override) {
        this.checkOverrideAllowed(directive);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, (/** @type {?} */ (oldMetadata)), override));
        this.clearCacheFor(directive);
    }
    /**
     * @param {?} component
     * @param {?} override
     * @return {?}
     */
    overrideComponent(component, override) {
        this.checkOverrideAllowed(component);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, (/** @type {?} */ (oldMetadata)), override));
        this.clearCacheFor(component);
    }
    /**
     * @param {?} pipe
     * @param {?} override
     * @return {?}
     */
    overridePipe(pipe, override) {
        this.checkOverrideAllowed(pipe);
        /** @type {?} */
        const oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) {
        this._compiler.loadAotSummaries(summaries);
    }
    /**
     * @return {?}
     */
    clearCache() {
        this._compiler.clearCache();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) {
        this._compiler.clearCacheFor(type);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    getComponentFromError(error) {
        return ((/** @type {?} */ (error)))[ERROR_COMPONENT_TYPE] || null;
    }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        return this._moduleResolver.resolve(moduleType, true).id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._overrider;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._compiler;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._directiveResolver;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._pipeResolver;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._moduleResolver;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/platform_core_dynamic_testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { providers: COMPILER_PROVIDERS };
/**
 * Platform for dynamic tests
 *
 * \@publicApi
 * @type {?}
 */
const platformCoreDynamicTesting = createPlatformFactory(ɵplatformCoreDynamic, 'coreDynamicTesting', [
    { provide: COMPILER_OPTIONS, useValue: ɵ0, multi: true }, {
        provide: ɵTestingCompilerFactory,
        useClass: TestingCompilerFactoryImpl,
        deps: [Injector, CompilerFactory]
    }
]);

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/private_export_testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * \@publicApi
 */
class BrowserDynamicTestingModule {
}
BrowserDynamicTestingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BrowserDynamicTestingModule });
BrowserDynamicTestingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); }, providers: [
        { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
    ], imports: [BrowserTestingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BrowserDynamicTestingModule, { exports: function () { return [BrowserTestingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BrowserDynamicTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting, DOMTestComponentRenderer as ɵDOMTestComponentRenderer, COMPILER_PROVIDERS as ɵangular_packages_platform_browser_dynamic_testing_testing_a, TestingCompilerFactoryImpl as ɵangular_packages_platform_browser_dynamic_testing_testing_b, platformCoreDynamicTesting as ɵplatformCoreDynamicTesting };

//# sourceMappingURL=testing.js.map