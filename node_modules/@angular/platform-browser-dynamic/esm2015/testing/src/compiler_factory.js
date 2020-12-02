/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/compiler_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';
import { Component, Directive, NgModule, Pipe, ɵstringify as stringify } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
/** @type {?} */
export const COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
export class TestingCompilerFactoryImpl {
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
export class TestingCompilerImpl {
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
        this._overrider = new MetadataOverrider();
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
            throw new Error(`${stringify(type)} was AOT compiled, so its metadata cannot be changed.`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy9jb21waWxlcl9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1SCxPQUFPLEVBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RyxPQUFPLEVBQW1DLFNBQVMsRUFBb0IsU0FBUyxFQUEwQyxRQUFRLEVBQW1CLElBQUksRUFBd0IsVUFBVSxJQUFJLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUkvTixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGtCQUFrQixHQUFxQjtJQUNsRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUM7SUFDdEQsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUMxRCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUM7SUFDaEUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN6RCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUM7Q0FDL0Q7QUFFRCxNQUFNLE9B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O0lBQzNCLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsU0FBc0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsSUFBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLEtBQVk7UUFDaEMsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsVUFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FDRjs7Ozs7O0lBOUVDLHlDQUE2Qzs7Ozs7SUFFekMsd0NBQStCOzs7OztJQUFFLGlEQUFpRDs7Ozs7SUFDbEYsNENBQXVDOzs7OztJQUFFLDhDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBEaXJlY3RpdmVSZXNvbHZlciwgRVJST1JfQ09NUE9ORU5UX1RZUEUsIE5nTW9kdWxlUmVzb2x2ZXIsIFBpcGVSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXIsIE1vY2tOZ01vZHVsZVJlc29sdmVyLCBNb2NrUGlwZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci90ZXN0aW5nJztcbmltcG9ydCB7Q29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgRGlyZWN0aXZlLCBJbmplY3RvciwgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSwgUGlwZSwgU3RhdGljUHJvdmlkZXIsIFR5cGUsIMm1c3RyaW5naWZ5IGFzIHN0cmluZ2lmeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGUsIMm1VGVzdGluZ0NvbXBpbGVyIGFzIFRlc3RpbmdDb21waWxlciwgybVUZXN0aW5nQ29tcGlsZXJGYWN0b3J5IGFzIFRlc3RpbmdDb21waWxlckZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge8m1Q29tcGlsZXJJbXBsIGFzIENvbXBpbGVySW1wbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlcn0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZXInO1xuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogTW9ja1BpcGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IFBpcGVSZXNvbHZlciwgdXNlRXhpc3Rpbmc6IE1vY2tQaXBlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja0RpcmVjdGl2ZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja05nTW9kdWxlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBOZ01vZHVsZVJlc29sdmVyLCB1c2VFeGlzdGluZzogTW9ja05nTW9kdWxlUmVzb2x2ZXJ9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFRlc3RpbmdDb21waWxlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfY29tcGlsZXJGYWN0b3J5OiBDb21waWxlckZhY3RvcnkpIHt9XG5cbiAgY3JlYXRlVGVzdGluZ0NvbXBpbGVyKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdKTogVGVzdGluZ0NvbXBpbGVyIHtcbiAgICBjb25zdCBjb21waWxlciA9IDxDb21waWxlckltcGw+dGhpcy5fY29tcGlsZXJGYWN0b3J5LmNyZWF0ZUNvbXBpbGVyKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgVGVzdGluZ0NvbXBpbGVySW1wbChcbiAgICAgICAgY29tcGlsZXIsIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrRGlyZWN0aXZlUmVzb2x2ZXIpLFxuICAgICAgICBjb21waWxlci5pbmplY3Rvci5nZXQoTW9ja1BpcGVSZXNvbHZlciksIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrTmdNb2R1bGVSZXNvbHZlcikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXN0aW5nQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfb3ZlcnJpZGVyID0gbmV3IE1ldGFkYXRhT3ZlcnJpZGVyKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY29tcGlsZXI6IENvbXBpbGVySW1wbCwgcHJpdmF0ZSBfZGlyZWN0aXZlUmVzb2x2ZXI6IE1vY2tEaXJlY3RpdmVSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX3BpcGVSZXNvbHZlcjogTW9ja1BpcGVSZXNvbHZlciwgcHJpdmF0ZSBfbW9kdWxlUmVzb2x2ZXI6IE1vY2tOZ01vZHVsZVJlc29sdmVyKSB7fVxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3Ige1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5pbmplY3RvcjtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBOZ01vZHVsZUZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlU3luYyhtb2R1bGVUeXBlKTtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKG1vZHVsZVR5cGUpO1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYyhtb2R1bGVUeXBlKTtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6XG4gICAgICBQcm9taXNlPE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYyhtb2R1bGVUeXBlKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmdldENvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgfVxuXG4gIGNoZWNrT3ZlcnJpZGVBbGxvd2VkKHR5cGU6IFR5cGU8YW55Pikge1xuICAgIGlmICh0aGlzLl9jb21waWxlci5oYXNBb3RTdW1tYXJ5KHR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c3RyaW5naWZ5KHR5cGUpfSB3YXMgQU9UIGNvbXBpbGVkLCBzbyBpdHMgbWV0YWRhdGEgY2Fubm90IGJlIGNoYW5nZWQuYCk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGVNb2R1bGUobmdNb2R1bGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8TmdNb2R1bGU+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChuZ01vZHVsZSk7XG4gICAgY29uc3Qgb2xkTWV0YWRhdGEgPSB0aGlzLl9tb2R1bGVSZXNvbHZlci5yZXNvbHZlKG5nTW9kdWxlLCBmYWxzZSk7XG4gICAgdGhpcy5fbW9kdWxlUmVzb2x2ZXIuc2V0TmdNb2R1bGUoXG4gICAgICAgIG5nTW9kdWxlLCB0aGlzLl9vdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YShOZ01vZHVsZSwgb2xkTWV0YWRhdGEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKG5nTW9kdWxlKTtcbiAgfVxuICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPdmVycmlkZUFsbG93ZWQoZGlyZWN0aXZlKTtcbiAgICBjb25zdCBvbGRNZXRhZGF0YSA9IHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnJlc29sdmUoZGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIuc2V0RGlyZWN0aXZlKFxuICAgICAgICBkaXJlY3RpdmUsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKERpcmVjdGl2ZSwgb2xkTWV0YWRhdGEhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihkaXJlY3RpdmUpO1xuICB9XG4gIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxDb21wb25lbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChjb21wb25lbnQpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZShjb21wb25lbnQsIGZhbHNlKTtcbiAgICB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5zZXREaXJlY3RpdmUoXG4gICAgICAgIGNvbXBvbmVudCwgdGhpcy5fb3ZlcnJpZGVyLm92ZXJyaWRlTWV0YWRhdGEoQ29tcG9uZW50LCBvbGRNZXRhZGF0YSEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKGNvbXBvbmVudCk7XG4gIH1cbiAgb3ZlcnJpZGVQaXBlKHBpcGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8UGlwZT4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrT3ZlcnJpZGVBbGxvd2VkKHBpcGUpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fcGlwZVJlc29sdmVyLnJlc29sdmUocGlwZSwgZmFsc2UpO1xuICAgIHRoaXMuX3BpcGVSZXNvbHZlci5zZXRQaXBlKHBpcGUsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKFBpcGUsIG9sZE1ldGFkYXRhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihwaXBlKTtcbiAgfVxuICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pIHtcbiAgICB0aGlzLl9jb21waWxlci5sb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllcyk7XG4gIH1cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21waWxlci5jbGVhckNhY2hlKCk7XG4gIH1cbiAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLl9jb21waWxlci5jbGVhckNhY2hlRm9yKHR5cGUpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RnJvbUVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9DT01QT05FTlRfVFlQRV0gfHwgbnVsbDtcbiAgfVxuXG4gIGdldE1vZHVsZUlkKG1vZHVsZVR5cGU6IFR5cGU8YW55Pik6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2R1bGVSZXNvbHZlci5yZXNvbHZlKG1vZHVsZVR5cGUsIHRydWUpLmlkO1xuICB9XG59XG4iXX0=