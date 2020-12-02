"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compiler = require("@angular/compiler");
var config_1 = require("../config");
var ngVersion_1 = require("../../util/ngVersion");
var refId = 0;
var dummyMetadataFactory = function (declaration) {
    if (refId > 1e10) {
        refId = 0;
    }
    return {
        inputs: declaration.inputs || [],
        outputs: declaration.outputs || [],
        hostListeners: declaration.hostListeners || [],
        hostProperties: declaration.hostProperties || [],
        hostAttributes: declaration.hostAttributes || [],
        isSummary: true,
        type: {
            diDeps: [],
            lifecycleHooks: [],
            isHost: false,
            reference: ++refId + '-ref'
        },
        isComponent: false,
        selector: declaration.selector,
        exportAs: declaration.exportAs,
        providers: [],
        viewProviders: [],
        queries: [],
        entryComponents: [],
        changeDetection: 0,
        template: {
            isSummary: true,
            animations: [],
            ngContentSelectors: [],
            encapsulation: 0
        }
    };
};
var Console = (function () {
    function Console() {
    }
    Console.prototype.log = function (message) { };
    Console.prototype.warn = function (message) { };
    return Console;
}());
var defaultDirectives = [];
exports.parseTemplate = function (template, directives) {
    if (directives === void 0) { directives = []; }
    defaultDirectives = directives.map(function (d) { return dummyMetadataFactory(d); });
    var TemplateParser = compiler.TemplateParser;
    var expressionParser = new compiler.Parser(new compiler.Lexer());
    var elementSchemaRegistry = new compiler.DomElementSchemaRegistry();
    var ngConsole = new Console();
    var htmlParser = new compiler.HtmlParser();
    var tmplParser;
    ngVersion_1.SemVerDSL.gte('4.0.0-beta.8', function () {
        var config = new compiler.CompilerConfig({});
        tmplParser = new TemplateParser(config, expressionParser, elementSchemaRegistry, htmlParser, ngConsole, []);
    })
        .elseIf.lt('4.1.0', function () {
        tmplParser = new TemplateParser(expressionParser, elementSchemaRegistry, htmlParser, ngConsole, []);
    })
        .elseIf.lt('5.0.0-rc.0', function () {
        var config = new compiler.CompilerConfig({});
        tmplParser = new TemplateParser(config, new compiler.JitReflector(), expressionParser, elementSchemaRegistry, htmlParser, ngConsole, []);
    })
        .else(function () {
        var JitReflector = require('./jitReflector').JitReflector;
        var config = new compiler.CompilerConfig({});
        tmplParser = new compiler.TemplateParser(config, new JitReflector(), expressionParser, elementSchemaRegistry, htmlParser, ngConsole, []);
    });
    var interpolation = config_1.Config.interpolation;
    var summaryKind = (compiler.CompileSummaryKind || {}).Template;
    var templateMetadata = {
        encapsulation: 0,
        template: template,
        templateUrl: '',
        styles: [],
        isInline: true,
        styleUrls: [],
        ngContentSelectors: [],
        animations: [],
        externalStylesheets: [],
        interpolation: interpolation,
        toSummary: function () {
            return {
                isSummary: true,
                animations: this.animations.map(function (anim) { return anim.name; }),
                ngContentSelectors: this.ngContentSelectors,
                encapsulation: this.encapsulation,
                summaryKind: summaryKind
            };
        }
    };
    var type = {
        diDeps: [],
        lifecycleHooks: [],
        reference: null,
        isHost: false,
        name: '',
        prefix: '',
        moduleUrl: '',
        value: '',
        identifier: null
    };
    var result;
    try {
        ngVersion_1.SemVerDSL.lt('4.1.0', function () {
            result = tmplParser.tryParse(compiler.CompileDirectiveMetadata.create({
                type: type,
                template: templateMetadata
            }), template, defaultDirectives, [], [core_1.NO_ERRORS_SCHEMA], '').templateAst;
        })
            .elseIf.lt('4.1.3', function () {
            result = tmplParser.tryParse(compiler.CompileDirectiveMetadata.create({
                type: type,
                template: templateMetadata,
                isHost: true,
                isComponent: true,
                selector: '',
                exportAs: '',
                changeDetection: core_1.ChangeDetectionStrategy.Default,
                inputs: [],
                outputs: [],
                host: {},
                providers: [],
                viewProviders: [],
                queries: [],
                viewQueries: [],
                entryComponents: [],
                guards: [],
                componentViewType: null,
                rendererType: null,
                componentFactory: null
            }), template, defaultDirectives, [], [core_1.NO_ERRORS_SCHEMA], '').templateAst;
        })
            .elseIf.lt('5.0.0-rc.0', function () {
            result = tmplParser.tryParse(compiler.CompileDirectiveMetadata.create({
                type: type,
                template: templateMetadata,
                isHost: true,
                isComponent: true,
                selector: '',
                exportAs: '',
                changeDetection: core_1.ChangeDetectionStrategy.Default,
                inputs: [],
                outputs: [],
                host: {},
                providers: [],
                viewProviders: [],
                queries: [],
                viewQueries: [],
                entryComponents: [],
                guards: [],
                componentViewType: null,
                rendererType: null,
                componentFactory: null
            }), template, defaultDirectives, [], [core_1.NO_ERRORS_SCHEMA], '').templateAst;
        })
            .elseIf.lt('5.2.0', function () {
            result = tmplParser.tryParse(compiler.CompileDirectiveMetadata.create({
                type: type,
                template: templateMetadata,
                isHost: true,
                isComponent: true,
                selector: '',
                exportAs: '',
                changeDetection: core_1.ChangeDetectionStrategy.Default,
                inputs: [],
                outputs: [],
                host: {},
                providers: [],
                viewProviders: [],
                queries: [],
                viewQueries: [],
                entryComponents: [],
                guards: [],
                componentViewType: null,
                rendererType: null,
                componentFactory: null
            }), template, defaultDirectives, [], [core_1.NO_ERRORS_SCHEMA], '', true).templateAst;
        })
            .else(function () {
            result = tmplParser.tryParse(compiler.CompileDirectiveMetadata.create({
                type: type,
                template: templateMetadata,
                isHost: true,
                isComponent: true,
                selector: '',
                exportAs: '',
                changeDetection: core_1.ChangeDetectionStrategy.Default,
                inputs: [],
                outputs: [],
                host: {},
                providers: [],
                viewProviders: [],
                queries: [],
                viewQueries: [],
                entryComponents: [],
                componentViewType: null,
                rendererType: null,
                componentFactory: null,
                guards: {}
            }), template, defaultDirectives, [], [core_1.NO_ERRORS_SCHEMA], '', true).templateAst;
        });
    }
    catch (e) {
        console.error(e);
    }
    return result;
};
