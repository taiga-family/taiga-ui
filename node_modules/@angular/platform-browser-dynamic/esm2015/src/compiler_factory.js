/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/src/compiler_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileMetadataResolver, CompilerConfig, CompileReflector, DirectiveNormalizer, DirectiveResolver, DomElementSchemaRegistry, ElementSchemaRegistry, HtmlParser, I18NHtmlParser, JitCompiler, JitEvaluator, JitSummaryResolver, Lexer, NgModuleCompiler, NgModuleResolver, Parser, PipeResolver, ProviderMeta, ResourceLoader, StaticSymbolCache, StyleCompiler, SummaryResolver, TemplateParser, UrlResolver, ViewCompiler } from '@angular/compiler';
import { Compiler, Inject, InjectionToken, Injector, isDevMode, MissingTranslationStrategy, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, TRANSLATIONS_FORMAT, ViewEncapsulation, ɵConsole as Console } from '@angular/core';
import { JitReflector } from './compiler_reflector';
/** @type {?} */
export const ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {\@link PACKAGE_ROOT_URL} that maps to '/'.
 * @type {?}
 */
export const DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
/** @type {?} */
const _NO_RESOURCE_LOADER = {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        throw new Error(`No ResourceLoader implementation has been provided. Can't read the url "${url}"`);
    }
};
/** @type {?} */
const baseHtmlParser = new InjectionToken('HtmlParser');
export class CompilerImpl {
    /**
     * @param {?} injector
     * @param {?} _metadataResolver
     * @param {?} templateParser
     * @param {?} styleCompiler
     * @param {?} viewCompiler
     * @param {?} ngModuleCompiler
     * @param {?} summaryResolver
     * @param {?} compileReflector
     * @param {?} jitEvaluator
     * @param {?} compilerConfig
     * @param {?} console
     */
    constructor(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    getExtraNgModuleProviders() {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return (/** @type {?} */ (this._delegate.compileModuleSync(moduleType)));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return (/** @type {?} */ (this._delegate.compileModuleAsync(moduleType)));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        /** @type {?} */
        const result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: (/** @type {?} */ (result.ngModuleFactory)),
            componentFactories: (/** @type {?} */ (result.componentFactories)),
        };
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then((/**
         * @param {?} result
         * @return {?}
         */
        (result) => ({
            ngModuleFactory: (/** @type {?} */ (result.ngModuleFactory)),
            componentFactories: (/** @type {?} */ (result.componentFactories)),
        })));
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) {
        this._delegate.loadAotSummaries(summaries);
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    hasAotSummary(ref) {
        return this._delegate.hasAotSummary(ref);
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return (/** @type {?} */ (this._delegate.getComponentFactory(component)));
    }
    /**
     * @return {?}
     */
    clearCache() {
        this._delegate.clearCache();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) {
        this._delegate.clearCacheFor(type);
    }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        /** @type {?} */
        const meta = this._metadataResolver.getNgModuleMetadata(moduleType);
        return meta && meta.id || undefined;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompilerImpl.prototype._delegate;
    /** @type {?} */
    CompilerImpl.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CompilerImpl.prototype._metadataResolver;
}
const ɵ0 = new JitReflector(), ɵ1 = _NO_RESOURCE_LOADER, ɵ2 = /**
 * @param {?} parser
 * @param {?} translations
 * @param {?} format
 * @param {?} config
 * @param {?} console
 * @return {?}
 */
(parser, translations, format, config, console) => {
    translations = translations || '';
    /** @type {?} */
    const missingTranslation = translations ? (/** @type {?} */ (config.missingTranslation)) : MissingTranslationStrategy.Ignore;
    return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
}, ɵ3 = new CompilerConfig();
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 * @type {?}
 */
const COMPILER_PROVIDERS__PRE_R3__ = (/** @type {?} */ ([
    { provide: CompileReflector, useValue: ɵ0 },
    { provide: ResourceLoader, useValue: ɵ1 },
    { provide: JitSummaryResolver, deps: [] },
    { provide: SummaryResolver, useExisting: JitSummaryResolver },
    { provide: Console, deps: [] },
    { provide: Lexer, deps: [] },
    { provide: Parser, deps: [Lexer] },
    {
        provide: baseHtmlParser,
        useClass: HtmlParser,
        deps: [],
    },
    {
        provide: I18NHtmlParser,
        useFactory: (ɵ2),
        deps: [
            baseHtmlParser,
            [new Optional(), new Inject(TRANSLATIONS)],
            [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
            [CompilerConfig],
            [Console],
        ]
    },
    {
        provide: HtmlParser,
        useExisting: I18NHtmlParser,
    },
    {
        provide: TemplateParser,
        deps: [CompilerConfig, CompileReflector, Parser, ElementSchemaRegistry, I18NHtmlParser, Console]
    },
    { provide: JitEvaluator, useClass: JitEvaluator, deps: [] },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    {
        provide: CompileMetadataResolver,
        deps: [
            CompilerConfig, HtmlParser, NgModuleResolver, DirectiveResolver, PipeResolver,
            SummaryResolver, ElementSchemaRegistry, DirectiveNormalizer, Console,
            [Optional, StaticSymbolCache], CompileReflector, [Optional, ERROR_COLLECTOR_TOKEN]
        ]
    },
    DEFAULT_PACKAGE_URL_PROVIDER,
    { provide: StyleCompiler, deps: [UrlResolver] },
    { provide: ViewCompiler, deps: [CompileReflector] },
    { provide: NgModuleCompiler, deps: [CompileReflector] },
    { provide: CompilerConfig, useValue: ɵ3 },
    {
        provide: Compiler,
        useClass: CompilerImpl,
        deps: [
            Injector, CompileMetadataResolver, TemplateParser, StyleCompiler, ViewCompiler,
            NgModuleCompiler, SummaryResolver, CompileReflector, JitEvaluator, CompilerConfig, Console
        ]
    },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]));
/** @type {?} */
export const COMPILER_PROVIDERS__POST_R3__ = (/** @type {?} */ ([{ provide: Compiler, useFactory: (/**
         * @return {?}
         */
        () => new Compiler()) }]));
/** @type {?} */
export const COMPILER_PROVIDERS = COMPILER_PROVIDERS__PRE_R3__;
/**
 * \@publicApi
 */
export class JitCompilerFactory {
    /* @internal */
    /**
     * @param {?} defaultOptions
     */
    constructor(defaultOptions) {
        /** @type {?} */
        const compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = [compilerOptions, ...defaultOptions];
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createCompiler(options = []) {
        /** @type {?} */
        const opts = _mergeOptions(this._defaultOptions.concat(options));
        /** @type {?} */
        const injector = Injector.create([
            COMPILER_PROVIDERS, {
                provide: CompilerConfig,
                useFactory: (/**
                 * @return {?}
                 */
                () => {
                    return new CompilerConfig({
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        useJit: opts.useJit,
                        jitDevMode: isDevMode(),
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        defaultEncapsulation: opts.defaultEncapsulation,
                        missingTranslation: opts.missingTranslation,
                        preserveWhitespaces: opts.preserveWhitespaces,
                    });
                }),
                deps: []
            },
            (/** @type {?} */ (opts.providers))
        ]);
        return injector.get(Compiler);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    JitCompilerFactory.prototype._defaultOptions;
}
/**
 * @param {?} optionsArr
 * @return {?}
 */
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.useJit))),
        defaultEncapsulation: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.defaultEncapsulation))),
        providers: _mergeArrays(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => (/** @type {?} */ (options.providers))))),
        missingTranslation: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.missingTranslation))),
        preserveWhitespaces: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.preserveWhitespaces))),
    };
}
/**
 * @template T
 * @param {?} args
 * @return {?}
 */
function _lastDefined(args) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
/**
 * @param {?} parts
 * @return {?}
 */
function _mergeArrays(parts) {
    /** @type {?} */
    const result = [];
    parts.forEach((/**
     * @param {?} part
     * @return {?}
     */
    (part) => part && result.push(...part)));
    return result;
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9zcmMvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3YixPQUFPLEVBQUMsUUFBUSxFQUFzRCxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQWlELFFBQVEsRUFBRSxnQkFBZ0IsRUFBa0IsWUFBWSxFQUFFLG1CQUFtQixFQUFRLGlCQUFpQixFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaFYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUVsRCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUM7Ozs7O0FBS3pFLE1BQU0sT0FBTyw0QkFBNEIsR0FBRztJQUMxQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O01BRUssbUJBQW1CLEdBQW1COzs7OztJQUMxQyxHQUFHLENBQUMsR0FBVztRQUNiLE1BQU0sSUFBSSxLQUFL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QUssQ0FBQyxPQUFPOzs7O0lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUN0RCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBDb21waWxlckNvbmZpZywgQ29tcGlsZVJlZmxlY3RvciwgRGlyZWN0aXZlTm9ybWFsaXplciwgRGlyZWN0aXZlUmVzb2x2ZXIsIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBIdG1sUGFyc2VyLCBJMThOSHRtbFBhcnNlciwgSml0Q29tcGlsZXIsIEppdEV2YWx1YXRvciwgSml0U3VtbWFyeVJlc29sdmVyLCBMZXhlciwgTmdNb2R1bGVDb21waWxlciwgTmdNb2R1bGVSZXNvbHZlciwgUGFyc2VyLCBQaXBlUmVzb2x2ZXIsIFByb3ZpZGVyTWV0YSwgUmVzb3VyY2VMb2FkZXIsIFN0YXRpY1N5bWJvbENhY2hlLCBTdHlsZUNvbXBpbGVyLCBTdW1tYXJ5UmVzb2x2ZXIsIFRlbXBsYXRlUGFyc2VyLCBVcmxSZXNvbHZlciwgVmlld0NvbXBpbGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVyLCBDb21waWxlckZhY3RvcnksIENvbXBpbGVyT3B0aW9ucywgQ29tcG9uZW50RmFjdG9yeSwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIGlzRGV2TW9kZSwgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXMsIE5nTW9kdWxlRmFjdG9yeSwgT3B0aW9uYWwsIFBBQ0tBR0VfUk9PVF9VUkwsIFN0YXRpY1Byb3ZpZGVyLCBUUkFOU0xBVElPTlMsIFRSQU5TTEFUSU9OU19GT1JNQVQsIFR5cGUsIFZpZXdFbmNhcHN1bGF0aW9uLCDJtUNvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Sml0UmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVyX3JlZmxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9DT0xMRUNUT1JfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0Vycm9yQ29sbGVjdG9yJyk7XG5cbi8qKlxuICogQSBkZWZhdWx0IHByb3ZpZGVyIGZvciB7QGxpbmsgUEFDS0FHRV9ST09UX1VSTH0gdGhhdCBtYXBzIHRvICcvJy5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IFBBQ0tBR0VfUk9PVF9VUkwsXG4gIHVzZVZhbHVlOiAnLydcbn07XG5cbmNvbnN0IF9OT19SRVNPVVJDRV9MT0FERVI6IFJlc291cmNlTG9hZGVyID0ge1xuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIFJlc291cmNlTG9hZGVyIGltcGxlbWVudGF0aW9uIGhhcyBiZWVuIHByb3ZpZGVkLiBDYW4ndCByZWFkIHRoZSB1cmwgXCIke3VybH1cImApO1xuICB9XG59O1xuXG5jb25zdCBiYXNlSHRtbFBhcnNlciA9IG5ldyBJbmplY3Rpb25Ub2tlbignSHRtbFBhcnNlcicpO1xuXG5leHBvcnQgY2xhc3MgQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgQ29tcGlsZXIge1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogSml0Q29tcGlsZXI7XG4gIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICAgIHRlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsXG4gICAgICBuZ01vZHVsZUNvbXBpbGVyOiBOZ01vZHVsZUNvbXBpbGVyLCBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxUeXBlPGFueT4+LFxuICAgICAgY29tcGlsZVJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yOiBKaXRFdmFsdWF0b3IsXG4gICAgICBjb21waWxlckNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IENvbnNvbGUpIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IG5ldyBKaXRDb21waWxlcihcbiAgICAgICAgX21ldGFkYXRhUmVzb2x2ZXIsIHRlbXBsYXRlUGFyc2VyLCBzdHlsZUNvbXBpbGVyLCB2aWV3Q29tcGlsZXIsIG5nTW9kdWxlQ29tcGlsZXIsXG4gICAgICAgIHN1bW1hcnlSZXNvbHZlciwgY29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yLCBjb21waWxlckNvbmZpZywgY29uc29sZSxcbiAgICAgICAgdGhpcy5nZXRFeHRyYU5nTW9kdWxlUHJvdmlkZXJzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXh0cmFOZ01vZHVsZVByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gW3RoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UHJvdmlkZXJNZXRhZGF0YShcbiAgICAgICAgbmV3IFByb3ZpZGVyTWV0YShDb21waWxlciwge3VzZVZhbHVlOiB0aGlzfSkpXTtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBOZ01vZHVsZUZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlU3luYyhtb2R1bGVUeXBlKSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD47XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVHlwZSkgYXMgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+O1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZUZhY3Rvcnk6IHJlc3VsdC5uZ01vZHVsZUZhY3RvcnkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+LFxuICAgICAgY29tcG9uZW50RmFjdG9yaWVzOiByZXN1bHQuY29tcG9uZW50RmFjdG9yaWVzIGFzIENvbXBvbmVudEZhY3Rvcnk8YW55PltdLFxuICAgIH07XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTpcbiAgICAgIFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jKG1vZHVsZVR5cGUpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgbmdNb2R1bGVGYWN0b3J5OiByZXN1bHQubmdNb2R1bGVGYWN0b3J5IGFzIE5nTW9kdWxlRmFjdG9yeTxUPixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3JpZXM6IHJlc3VsdC5jb21wb25lbnRGYWN0b3JpZXMgYXMgQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sXG4gICAgICAgICAgICAgIH0pKTtcbiAgfVxuICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZS5sb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllcyk7XG4gIH1cbiAgaGFzQW90U3VtbWFyeShyZWY6IFR5cGU8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5oYXNBb3RTdW1tYXJ5KHJlZik7XG4gIH1cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IFR5cGU8VD4pOiBDb21wb25lbnRGYWN0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0Q29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpIGFzIENvbXBvbmVudEZhY3Rvcnk8VD47XG4gIH1cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZS5jbGVhckNhY2hlKCk7XG4gIH1cbiAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZS5jbGVhckNhY2hlRm9yKHR5cGUpO1xuICB9XG4gIGdldE1vZHVsZUlkKG1vZHVsZVR5cGU6IFR5cGU8YW55Pik6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldE5nTW9kdWxlTWV0YWRhdGEobW9kdWxlVHlwZSk7XG4gICAgcmV0dXJuIG1ldGEgJiYgbWV0YS5pZCB8fCB1bmRlZmluZWQ7XG4gIH1cbn1cbi8qKlxuICogQSBzZXQgb2YgcHJvdmlkZXJzIHRoYXQgcHJvdmlkZSBgSml0Q29tcGlsZXJgIGFuZCBpdHMgZGVwZW5kZW5jaWVzIHRvIHVzZSBmb3JcbiAqIHRlbXBsYXRlIGNvbXBpbGF0aW9uLlxuICovXG5jb25zdCBDT01QSUxFUl9QUk9WSURFUlNfX1BSRV9SM19fID0gPFN0YXRpY1Byb3ZpZGVyW10+W1xuICB7cHJvdmlkZTogQ29tcGlsZVJlZmxlY3RvciwgdXNlVmFsdWU6IG5ldyBKaXRSZWZsZWN0b3IoKX0sXG4gIHtwcm92aWRlOiBSZXNvdXJjZUxvYWRlciwgdXNlVmFsdWU6IF9OT19SRVNPVVJDRV9MT0FERVJ9LFxuICB7cHJvdmlkZTogSml0U3VtbWFyeVJlc29sdmVyLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBTdW1tYXJ5UmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBKaXRTdW1tYXJ5UmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogQ29uc29sZSwgZGVwczogW119LFxuICB7cHJvdmlkZTogTGV4ZXIsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IFBhcnNlciwgZGVwczogW0xleGVyXX0sXG4gIHtcbiAgICBwcm92aWRlOiBiYXNlSHRtbFBhcnNlcixcbiAgICB1c2VDbGFzczogSHRtbFBhcnNlcixcbiAgICBkZXBzOiBbXSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEkxOE5IdG1sUGFyc2VyLFxuICAgIHVzZUZhY3Rvcnk6XG4gICAgICAgIChwYXJzZXI6IEh0bWxQYXJzZXIsIHRyYW5zbGF0aW9uczogc3RyaW5nfG51bGwsIGZvcm1hdDogc3RyaW5nLCBjb25maWc6IENvbXBpbGVyQ29uZmlnLFxuICAgICAgICAgY29uc29sZTogQ29uc29sZSkgPT4ge1xuICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucyB8fCAnJztcbiAgICAgICAgICBjb25zdCBtaXNzaW5nVHJhbnNsYXRpb24gPVxuICAgICAgICAgICAgICB0cmFuc2xhdGlvbnMgPyBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uISA6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lklnbm9yZTtcbiAgICAgICAgICByZXR1cm4gbmV3IEkxOE5IdG1sUGFyc2VyKHBhcnNlciwgdHJhbnNsYXRpb25zLCBmb3JtYXQsIG1pc3NpbmdUcmFuc2xhdGlvbiwgY29uc29sZSk7XG4gICAgICAgIH0sXG4gICAgZGVwczogW1xuICAgICAgYmFzZUh0bWxQYXJzZXIsXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TKV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCldLFxuICAgICAgW0NvbXBpbGVyQ29uZmlnXSxcbiAgICAgIFtDb25zb2xlXSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdG1sUGFyc2VyLFxuICAgIHVzZUV4aXN0aW5nOiBJMThOSHRtbFBhcnNlcixcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFRlbXBsYXRlUGFyc2VyLFxuICAgIGRlcHM6IFtDb21waWxlckNvbmZpZywgQ29tcGlsZVJlZmxlY3RvciwgUGFyc2VyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIEkxOE5IdG1sUGFyc2VyLCBDb25zb2xlXVxuICB9LFxuICB7cHJvdmlkZTogSml0RXZhbHVhdG9yLCB1c2VDbGFzczogSml0RXZhbHVhdG9yLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBEaXJlY3RpdmVOb3JtYWxpemVyLCBkZXBzOiBbUmVzb3VyY2VMb2FkZXIsIFVybFJlc29sdmVyLCBIdG1sUGFyc2VyLCBDb21waWxlckNvbmZpZ119LFxuICB7XG4gICAgcHJvdmlkZTogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsXG4gICAgZGVwczogW1xuICAgICAgQ29tcGlsZXJDb25maWcsIEh0bWxQYXJzZXIsIE5nTW9kdWxlUmVzb2x2ZXIsIERpcmVjdGl2ZVJlc29sdmVyLCBQaXBlUmVzb2x2ZXIsXG4gICAgICBTdW1tYXJ5UmVzb2x2ZXIsIEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgRGlyZWN0aXZlTm9ybWFsaXplciwgQ29uc29sZSxcbiAgICAgIFtPcHRpb25hbCwgU3RhdGljU3ltYm9sQ2FjaGVdLCBDb21waWxlUmVmbGVjdG9yLCBbT3B0aW9uYWwsIEVSUk9SX0NPTExFQ1RPUl9UT0tFTl1cbiAgICBdXG4gIH0sXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIHtwcm92aWRlOiBTdHlsZUNvbXBpbGVyLCBkZXBzOiBbVXJsUmVzb2x2ZXJdfSxcbiAge3Byb3ZpZGU6IFZpZXdDb21waWxlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IE5nTW9kdWxlQ29tcGlsZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBDb21waWxlckNvbmZpZywgdXNlVmFsdWU6IG5ldyBDb21waWxlckNvbmZpZygpfSxcbiAge1xuICAgIHByb3ZpZGU6IENvbXBpbGVyLFxuICAgIHVzZUNsYXNzOiBDb21waWxlckltcGwsXG4gICAgZGVwczogW1xuICAgICAgSW5qZWN0b3IsIENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBUZW1wbGF0ZVBhcnNlciwgU3R5bGVDb21waWxlciwgVmlld0NvbXBpbGVyLFxuICAgICAgTmdNb2R1bGVDb21waWxlciwgU3VtbWFyeVJlc29sdmVyLCBDb21waWxlUmVmbGVjdG9yLCBKaXRFdmFsdWF0b3IsIENvbXBpbGVyQ29uZmlnLCBDb25zb2xlXG4gICAgXVxuICB9LFxuICB7cHJvdmlkZTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBFbGVtZW50U2NoZW1hUmVnaXN0cnksIHVzZUV4aXN0aW5nOiBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9LFxuICB7cHJvdmlkZTogVXJsUmVzb2x2ZXIsIGRlcHM6IFtQQUNLQUdFX1JPT1RfVVJMXX0sXG4gIHtwcm92aWRlOiBEaXJlY3RpdmVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IFBpcGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IE5nTW9kdWxlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTX19QT1NUX1IzX18gPVxuICAgIDxTdGF0aWNQcm92aWRlcltdPlt7cHJvdmlkZTogQ29tcGlsZXIsIHVzZUZhY3Rvcnk6ICgpID0+IG5ldyBDb21waWxlcigpfV07XG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTID0gQ09NUElMRVJfUFJPVklERVJTX19QUkVfUjNfXztcbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSml0Q29tcGlsZXJGYWN0b3J5IGltcGxlbWVudHMgQ29tcGlsZXJGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdO1xuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0T3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10pIHtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgIHVzZUppdDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZyxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSBbY29tcGlsZXJPcHRpb25zLCAuLi5kZWZhdWx0T3B0aW9uc107XG4gIH1cbiAgY3JlYXRlQ29tcGlsZXIob3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10gPSBbXSk6IENvbXBpbGVyIHtcbiAgICBjb25zdCBvcHRzID0gX21lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5jb25jYXQob3B0aW9ucykpO1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIENPTVBJTEVSX1BST1ZJREVSUywge1xuICAgICAgICBwcm92aWRlOiBDb21waWxlckNvbmZpZyxcbiAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoe1xuICAgICAgICAgICAgLy8gbGV0IGV4cGxpY2l0IHZhbHVlcyBmcm9tIHRoZSBjb21waWxlciBvcHRpb25zIG92ZXJ3cml0ZSBvcHRpb25zXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBhcHAgcHJvdmlkZXJzXG4gICAgICAgICAgICB1c2VKaXQ6IG9wdHMudXNlSml0LFxuICAgICAgICAgICAgaml0RGV2TW9kZTogaXNEZXZNb2RlKCksXG4gICAgICAgICAgICAvLyBsZXQgZXhwbGljaXQgdmFsdWVzIGZyb20gdGhlIGNvbXBpbGVyIG9wdGlvbnMgb3ZlcndyaXRlIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGFwcCBwcm92aWRlcnNcbiAgICAgICAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBvcHRzLmRlZmF1bHRFbmNhcHN1bGF0aW9uLFxuICAgICAgICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBvcHRzLm1pc3NpbmdUcmFuc2xhdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG9wdHMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW11cbiAgICAgIH0sXG4gICAgICBvcHRzLnByb3ZpZGVycyFcbiAgICBdKTtcbiAgICByZXR1cm4gaW5qZWN0b3IuZ2V0KENvbXBpbGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWVyZ2VPcHRpb25zKG9wdGlvbnNBcnI6IENvbXBpbGVyT3B0aW9uc1tdKTogQ29tcGlsZXJPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICB1c2VKaXQ6IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMudXNlSml0KSksXG4gICAgZGVmYXVsdEVuY2Fwc3VsYXRpb246IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24pKSxcbiAgICBwcm92aWRlcnM6IF9tZXJnZUFycmF5cyhvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMucHJvdmlkZXJzISkpLFxuICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogX2xhc3REZWZpbmVkKG9wdGlvbnNBcnIubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5taXNzaW5nVHJhbnNsYXRpb24pKSxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByZXNlcnZlV2hpdGVzcGFjZXMpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gX2xhc3REZWZpbmVkPFQ+KGFyZ3M6IFRbXSk6IFR8dW5kZWZpbmVkIHtcbiAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoYXJnc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYXJnc1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gX21lcmdlQXJyYXlzKHBhcnRzOiBhbnlbXVtdKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQgJiYgcmVzdWx0LnB1c2goLi4ucGFydCkpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19