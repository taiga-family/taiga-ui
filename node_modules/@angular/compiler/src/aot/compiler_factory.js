/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/aot/compiler_factory", ["require", "exports", "@angular/compiler/src/config", "@angular/compiler/src/core", "@angular/compiler/src/directive_normalizer", "@angular/compiler/src/directive_resolver", "@angular/compiler/src/expression_parser/lexer", "@angular/compiler/src/expression_parser/parser", "@angular/compiler/src/i18n/i18n_html_parser", "@angular/compiler/src/injectable_compiler", "@angular/compiler/src/metadata_resolver", "@angular/compiler/src/ml_parser/html_parser", "@angular/compiler/src/ng_module_compiler", "@angular/compiler/src/ng_module_resolver", "@angular/compiler/src/output/ts_emitter", "@angular/compiler/src/pipe_resolver", "@angular/compiler/src/schema/dom_element_schema_registry", "@angular/compiler/src/style_compiler", "@angular/compiler/src/template_parser/template_parser", "@angular/compiler/src/util", "@angular/compiler/src/view_compiler/type_check_compiler", "@angular/compiler/src/view_compiler/view_compiler", "@angular/compiler/src/aot/compiler", "@angular/compiler/src/aot/static_reflector", "@angular/compiler/src/aot/static_symbol", "@angular/compiler/src/aot/static_symbol_resolver", "@angular/compiler/src/aot/summary_resolver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config_1 = require("@angular/compiler/src/config");
    var core_1 = require("@angular/compiler/src/core");
    var directive_normalizer_1 = require("@angular/compiler/src/directive_normalizer");
    var directive_resolver_1 = require("@angular/compiler/src/directive_resolver");
    var lexer_1 = require("@angular/compiler/src/expression_parser/lexer");
    var parser_1 = require("@angular/compiler/src/expression_parser/parser");
    var i18n_html_parser_1 = require("@angular/compiler/src/i18n/i18n_html_parser");
    var injectable_compiler_1 = require("@angular/compiler/src/injectable_compiler");
    var metadata_resolver_1 = require("@angular/compiler/src/metadata_resolver");
    var html_parser_1 = require("@angular/compiler/src/ml_parser/html_parser");
    var ng_module_compiler_1 = require("@angular/compiler/src/ng_module_compiler");
    var ng_module_resolver_1 = require("@angular/compiler/src/ng_module_resolver");
    var ts_emitter_1 = require("@angular/compiler/src/output/ts_emitter");
    var pipe_resolver_1 = require("@angular/compiler/src/pipe_resolver");
    var dom_element_schema_registry_1 = require("@angular/compiler/src/schema/dom_element_schema_registry");
    var style_compiler_1 = require("@angular/compiler/src/style_compiler");
    var template_parser_1 = require("@angular/compiler/src/template_parser/template_parser");
    var util_1 = require("@angular/compiler/src/util");
    var type_check_compiler_1 = require("@angular/compiler/src/view_compiler/type_check_compiler");
    var view_compiler_1 = require("@angular/compiler/src/view_compiler/view_compiler");
    var compiler_1 = require("@angular/compiler/src/aot/compiler");
    var static_reflector_1 = require("@angular/compiler/src/aot/static_reflector");
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var static_symbol_resolver_1 = require("@angular/compiler/src/aot/static_symbol_resolver");
    var summary_resolver_1 = require("@angular/compiler/src/aot/summary_resolver");
    function createAotUrlResolver(host) {
        return {
            resolve: function (basePath, url) {
                var filePath = host.resourceNameToFileName(url, basePath);
                if (!filePath) {
                    throw util_1.syntaxError("Couldn't resolve resource " + url + " from " + basePath);
                }
                return filePath;
            }
        };
    }
    exports.createAotUrlResolver = createAotUrlResolver;
    /**
     * Creates a new AotCompiler based on options and a host.
     */
    function createAotCompiler(compilerHost, options, errorCollector) {
        var translations = options.translations || '';
        var urlResolver = createAotUrlResolver(compilerHost);
        var symbolCache = new static_symbol_1.StaticSymbolCache();
        var summaryResolver = new summary_resolver_1.AotSummaryResolver(compilerHost, symbolCache);
        var symbolResolver = new static_symbol_resolver_1.StaticSymbolResolver(compilerHost, symbolCache, summaryResolver);
        var staticReflector = new static_reflector_1.StaticReflector(summaryResolver, symbolResolver, [], [], errorCollector);
        var htmlParser;
        if (!!options.enableIvy) {
            // Ivy handles i18n at the compiler level so we must use a regular parser
            htmlParser = new html_parser_1.HtmlParser();
        }
        else {
            htmlParser = new i18n_html_parser_1.I18NHtmlParser(new html_parser_1.HtmlParser(), translations, options.i18nFormat, options.missingTranslation, console);
        }
        var config = new config_1.CompilerConfig({
            defaultEncapsulation: core_1.ViewEncapsulation.Emulated,
            useJit: false,
            missingTranslation: options.missingTranslation,
            preserveWhitespaces: options.preserveWhitespaces,
            strictInjectionParameters: options.strictInjectionParameters,
        });
        var normalizer = new directive_normalizer_1.DirectiveNormalizer({ get: function (url) { return compilerHost.loadResource(url); } }, urlResolver, htmlParser, config);
        var expressionParser = new parser_1.Parser(new lexer_1.Lexer());
        var elementSchemaRegistry = new dom_element_schema_registry_1.DomElementSchemaRegistry();
        var tmplParser = new template_parser_1.TemplateParser(config, staticReflector, expressionParser, elementSchemaRegistry, htmlParser, console, []);
        var resolver = new metadata_resolver_1.CompileMetadataResolver(config, htmlParser, new ng_module_resolver_1.NgModuleResolver(staticReflector), new directive_resolver_1.DirectiveResolver(staticReflector), new pipe_resolver_1.PipeResolver(staticReflector), summaryResolver, elementSchemaRegistry, normalizer, console, symbolCache, staticReflector, errorCollector);
        // TODO(vicb): do not pass options.i18nFormat here
        var viewCompiler = new view_compiler_1.ViewCompiler(staticReflector);
        var typeCheckCompiler = new type_check_compiler_1.TypeCheckCompiler(options, staticReflector);
        var compiler = new compiler_1.AotCompiler(config, options, compilerHost, staticReflector, resolver, tmplParser, new style_compiler_1.StyleCompiler(urlResolver), viewCompiler, typeCheckCompiler, new ng_module_compiler_1.NgModuleCompiler(staticReflector), new injectable_compiler_1.InjectableCompiler(staticReflector, !!options.enableIvy), new ts_emitter_1.TypeScriptEmitter(), summaryResolver, symbolResolver);
        return { compiler: compiler, reflector: staticReflector };
    }
    exports.createAotCompiler = createAotCompiler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3QvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHVEQUF5QztJQUN6QyxtREFBc0U7SUFDdEUsbUZBQTREO0lBQzVELCtFQUF3RDtJQUN4RCx1RUFBaUQ7SUFDakQseUVBQW1EO0lBQ25ELGdGQUF3RDtJQUN4RCxpRkFBMEQ7SUFDMUQsNkVBQTZEO0lBQzdELDJFQUFvRDtJQUNwRCwrRUFBdUQ7SUFDdkQsK0VBQXVEO0lBQ3ZELHNFQUF1RDtJQUN2RCxxRUFBOEM7SUFDOUMsd0dBQStFO0lBQy9FLHVFQUFnRDtJQUNoRCx5RkFBa0U7SUFFbEUsbURBQW9DO0lBQ3BDLCtGQUF1RTtJQUN2RSxtRkFBNEQ7SUFFNUQsK0RBQXVDO0lBR3ZDLCtFQUFtRDtJQUNuRCx5RUFBZ0U7SUFDaEUsMkZBQThEO0lBQzlELCtFQUFzRDtJQUV0RCxTQUFnQixvQkFBb0IsQ0FDaEMsSUFBOEY7UUFFaEcsT0FBTztZQUNMLE9BQU8sRUFBRSxVQUFDLFFBQWdCLEVBQUUsR0FBVztnQkFDckMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixNQUFNLGtCQUFXLENBQUMsK0JBQTZCLEdBQUcsY0FBUyxRQUFVLENBQUMsQ0FBQztpQkFDeEU7Z0JBQ0QsT0FBTyxRQUFRLENBQUM7WUFDbEIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBWkQsb0RBWUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLGlCQUFpQixDQUM3QixZQUE2QixFQUFFLE9BQTJCLEVBQzFELGNBQ1E7UUFDVixJQUFJLFlBQVksR0FBVyxPQUFPLENB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RSxJQUFJLDhCQUFpQixFQUFFLEVBQ3JGLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNyQyxPQUFPLEVBQUMsUUFBUSxVQUFBLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDO0lBQ2hELENBQUM7SUEvQ0QsOENBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmVOb3JtYWxpemVyfSBmcm9tICcuLi9kaXJlY3RpdmVfbm9ybWFsaXplcic7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuLi9kaXJlY3RpdmVfcmVzb2x2ZXInO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSAnLi4vZXhwcmVzc2lvbl9wYXJzZXIvbGV4ZXInO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gJy4uL2V4cHJlc3Npb25fcGFyc2VyL3BhcnNlcic7XG5pbXBvcnQge0kxOE5IdG1sUGFyc2VyfSBmcm9tICcuLi9pMThuL2kxOG5faHRtbF9wYXJzZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlQ29tcGlsZXJ9IGZyb20gJy4uL2luamVjdGFibGVfY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnLi4vbWV0YWRhdGFfcmVzb2x2ZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtOZ01vZHVsZUNvbXBpbGVyfSBmcm9tICcuLi9uZ19tb2R1bGVfY29tcGlsZXInO1xuaW1wb3J0IHtOZ01vZHVsZVJlc29sdmVyfSBmcm9tICcuLi9uZ19tb2R1bGVfcmVzb2x2ZXInO1xuaW1wb3J0IHtUeXBlU2NyaXB0RW1pdHRlcn0gZnJvbSAnLi4vb3V0cHV0L3RzX2VtaXR0ZXInO1xuaW1wb3J0IHtQaXBlUmVzb2x2ZXJ9IGZyb20gJy4uL3BpcGVfcmVzb2x2ZXInO1xuaW1wb3J0IHtEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9IGZyb20gJy4uL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtTdHlsZUNvbXBpbGVyfSBmcm9tICcuLi9zdHlsZV9jb21waWxlcic7XG5pbXBvcnQge1RlbXBsYXRlUGFyc2VyfSBmcm9tICcuLi90ZW1wbGF0ZV9wYXJzZXIvdGVtcGxhdGVfcGFyc2VyJztcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gJy4uL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge3N5bnRheEVycm9yfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7VHlwZUNoZWNrQ29tcGlsZXJ9IGZyb20gJy4uL3ZpZXdfY29tcGlsZXIvdHlwZV9jaGVja19jb21waWxlcic7XG5pbXBvcnQge1ZpZXdDb21waWxlcn0gZnJvbSAnLi4vdmlld19jb21waWxlci92aWV3X2NvbXBpbGVyJztcblxuaW1wb3J0IHtBb3RDb21waWxlcn0gZnJvbSAnLi9jb21waWxlcic7XG5pbXBvcnQge0FvdENvbXBpbGVySG9zdH0gZnJvbSAnLi9jb21waWxlcl9ob3N0JztcbmltcG9ydCB7QW90Q29tcGlsZXJPcHRpb25zfSBmcm9tICcuL2NvbXBpbGVyX29wdGlvbnMnO1xuaW1wb3J0IHtTdGF0aWNSZWZsZWN0b3J9IGZyb20gJy4vc3RhdGljX3JlZmxlY3Rvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sQ2FjaGV9IGZyb20gJy4vc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge1N0YXRpY1N5bWJvbFJlc29sdmVyfSBmcm9tICcuL3N0YXRpY19zeW1ib2xfcmVzb2x2ZXInO1xuaW1wb3J0IHtBb3RTdW1tYXJ5UmVzb2x2ZXJ9IGZyb20gJy4vc3VtbWFyeV9yZXNvbHZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBb3RVcmxSZXNvbHZlcihcbiAgICBob3N0OiB7cmVzb3VyY2VOYW1lVG9GaWxlTmFtZShyZXNvdXJjZU5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbDt9KTpcbiAgICBVcmxSZXNvbHZlciB7XG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogKGJhc2VQYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGhvc3QucmVzb3VyY2VOYW1lVG9GaWxlTmFtZSh1cmwsIGJhc2VQYXRoKTtcbiAgICAgIGlmICghZmlsZVBhdGgpIHtcbiAgICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYENvdWxkbid0IHJlc29sdmUgcmVzb3VyY2UgJHt1cmx9IGZyb20gJHtiYXNlUGF0aH1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBBb3RDb21waWxlciBiYXNlZCBvbiBvcHRpb25zIGFuZCBhIGhvc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBb3RDb21waWxlcihcbiAgICBjb21waWxlckhvc3Q6IEFvdENvbXBpbGVySG9zdCwgb3B0aW9uczogQW90Q29tcGlsZXJPcHRpb25zLFxuICAgIGVycm9yQ29sbGVjdG9yPzogKGVycm9yOiBhbnksIHR5cGU/OiBhbnkpID0+XG4gICAgICAgIHZvaWQpOiB7Y29tcGlsZXI6IEFvdENvbXBpbGVyLCByZWZsZWN0b3I6IFN0YXRpY1JlZmxlY3Rvcn0ge1xuICBsZXQgdHJhbnNsYXRpb25zOiBzdHJpbmcgPSBvcHRpb25zLnRyYW5zbGF0aW9ucyB8fCAnJztcblxuICBjb25zdCB1cmxSZXNvbHZlciA9IGNyZWF0ZUFvdFVybFJlc29sdmVyKGNvbXBpbGVySG9zdCk7XG4gIGNvbnN0IHN5bWJvbENhY2hlID0gbmV3IFN0YXRpY1N5bWJvbENhY2hlKCk7XG4gIGNvbnN0IHN1bW1hcnlSZXNvbHZlciA9IG5ldyBBb3RTdW1tYXJ5UmVzb2x2ZXIoY29tcGlsZXJIb3N0LCBzeW1ib2xDYWNoZSk7XG4gIGNvbnN0IHN5bWJvbFJlc29sdmVyID0gbmV3IFN0YXRpY1N5bWJvbFJlc29sdmVyKGNvbXBpbGVySG9zdCwgc3ltYm9sQ2FjaGUsIHN1bW1hcnlSZXNvbHZlcik7XG4gIGNvbnN0IHN0YXRpY1JlZmxlY3RvciA9XG4gICAgICBuZXcgU3RhdGljUmVmbGVjdG9yKHN1bW1hcnlSZXNvbHZlciwgc3ltYm9sUmVzb2x2ZXIsIFtdLCBbXSwgZXJyb3JDb2xsZWN0b3IpO1xuICBsZXQgaHRtbFBhcnNlcjogSTE4Tkh0bWxQYXJzZXI7XG4gIGlmICghIW9wdGlvbnMuZW5hYmxlSXZ5KSB7XG4gICAgLy8gSXZ5IGhhbmRsZXMgaTE4biBhdCB0aGUgY29tcGlsZXIgbGV2ZWwgc28gd2UgbXVzdCB1c2UgYSByZWd1bGFyIHBhcnNlclxuICAgIGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpIGFzIEkxOE5IdG1sUGFyc2VyO1xuICB9IGVsc2Uge1xuICAgIGh0bWxQYXJzZXIgPSBuZXcgSTE4Tkh0bWxQYXJzZXIoXG4gICAgICAgIG5ldyBIdG1sUGFyc2VyKCksIHRyYW5zbGF0aW9ucywgb3B0aW9ucy5pMThuRm9ybWF0LCBvcHRpb25zLm1pc3NpbmdUcmFuc2xhdGlvbiwgY29uc29sZSk7XG4gIH1cbiAgY29uc3QgY29uZmlnID0gbmV3IENvbXBpbGVyQ29uZmlnKHtcbiAgICBkZWZhdWx0RW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG4gICAgdXNlSml0OiBmYWxzZSxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb246IG9wdGlvbnMubWlzc2luZ1RyYW5zbGF0aW9uLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICBzdHJpY3RJbmplY3Rpb25QYXJhbWV0ZXJzOiBvcHRpb25zLnN0cmljdEluamVjdGlvblBhcmFtZXRlcnMsXG4gIH0pO1xuICBjb25zdCBub3JtYWxpemVyID0gbmV3IERpcmVjdGl2ZU5vcm1hbGl6ZXIoXG4gICAgICB7Z2V0OiAodXJsOiBzdHJpbmcpID0+IGNvbXBpbGVySG9zdC5sb2FkUmVzb3VyY2UodXJsKX0sIHVybFJlc29sdmVyLCBodG1sUGFyc2VyLCBjb25maWcpO1xuICBjb25zdCBleHByZXNzaW9uUGFyc2VyID0gbmV3IFBhcnNlcihuZXcgTGV4ZXIoKSk7XG4gIGNvbnN0IGVsZW1lbnRTY2hlbWFSZWdpc3RyeSA9IG5ldyBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnkoKTtcbiAgY29uc3QgdG1wbFBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcihcbiAgICAgIGNvbmZpZywgc3RhdGljUmVmbGVjdG9yLCBleHByZXNzaW9uUGFyc2VyLCBlbGVtZW50U2NoZW1hUmVnaXN0cnksIGh0bWxQYXJzZXIsIGNvbnNvbGUsIFtdKTtcbiAgY29uc3QgcmVzb2x2ZXIgPSBuZXcgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIoXG4gICAgICBjb25maWcsIGh0bWxQYXJzZXIsIG5ldyBOZ01vZHVsZVJlc29sdmVyKHN0YXRpY1JlZmxlY3RvciksXG4gICAgICBuZXcgRGlyZWN0aXZlUmVzb2x2ZXIoc3RhdGljUmVmbGVjdG9yKSwgbmV3IFBpcGVSZXNvbHZlcihzdGF0aWNSZWZsZWN0b3IpLCBzdW1tYXJ5UmVzb2x2ZXIsXG4gICAgICBlbGVtZW50U2NoZW1hUmVnaXN0cnksIG5vcm1hbGl6ZXIsIGNvbnNvbGUsIHN5bWJvbENhY2hlLCBzdGF0aWNSZWZsZWN0b3IsIGVycm9yQ29sbGVjdG9yKTtcbiAgLy8gVE9ETyh2aWNiKTogZG8gbm90IHBhc3Mgb3B0aW9ucy5pMThuRm9ybWF0IGhlcmVcbiAgY29uc3Qgdmlld0NvbXBpbGVyID0gbmV3IFZpZXdDb21waWxlcihzdGF0aWNSZWZsZWN0b3IpO1xuICBjb25zdCB0eXBlQ2hlY2tDb21waWxlciA9IG5ldyBUeXBlQ2hlY2tDb21waWxlcihvcHRpb25zLCBzdGF0aWNSZWZsZWN0b3IpO1xuICBjb25zdCBjb21waWxlciA9IG5ldyBBb3RDb21waWxlcihcbiAgICAgIGNvbmZpZywgb3B0aW9ucywgY29tcGlsZXJIb3N0LCBzdGF0aWNSZWZsZWN0b3IsIHJlc29sdmVyLCB0bXBsUGFyc2VyLFxuICAgICAgbmV3IFN0eWxlQ29tcGlsZXIodXJsUmVzb2x2ZXIpLCB2aWV3Q29tcGlsZXIsIHR5cGVDaGVja0NvbXBpbGVyLFxuICAgICAgbmV3IE5nTW9kdWxlQ29tcGlsZXIoc3RhdGljUmVmbGVjdG9yKSxcbiAgICAgIG5ldyBJbmplY3RhYmxlQ29tcGlsZXIoc3RhdGljUmVmbGVjdG9yLCAhIW9wdGlvbnMuZW5hYmxlSXZ5KSwgbmV3IFR5cGVTY3JpcHRFbWl0dGVyKCksXG4gICAgICBzdW1tYXJ5UmVzb2x2ZXIsIHN5bWJvbFJlc29sdmVyKTtcbiAgcmV0dXJuIHtjb21waWxlciwgcmVmbGVjdG9yOiBzdGF0aWNSZWZsZWN0b3J9O1xufVxuIl19