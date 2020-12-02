/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread, __values } from "tslib";
import { componentFactoryName, flatten, identifierName, templateSourceUrl } from '../compile_metadata';
import { ConstantPool } from '../constant_pool';
import { ViewEncapsulation } from '../core';
import { MessageBundle } from '../i18n/message_bundle';
import { createTokenForExternalReference, Identifiers } from '../identifiers';
import { HtmlParser } from '../ml_parser/html_parser';
import { removeWhitespaces } from '../ml_parser/html_whitespaces';
import { DEFAULT_INTERPOLATION_CONFIG, InterpolationConfig } from '../ml_parser/interpolation_config';
import * as o from '../output/output_ast';
import { compileNgModuleFromRender2 as compileR3Module } from '../render3/r3_module_compiler';
import { compilePipeFromRender2 as compileR3Pipe } from '../render3/r3_pipe_compiler';
import { htmlAstToRender3Ast } from '../render3/r3_template_transform';
import { compileComponentFromRender2 as compileR3Component, compileDirectiveFromRender2 as compileR3Directive } from '../render3/view/compiler';
import { DomElementSchemaRegistry } from '../schema/dom_element_schema_registry';
import { BindingParser } from '../template_parser/binding_parser';
import { error, newArray, syntaxError, visitValue } from '../util';
import { GeneratedFile } from './generated_file';
import { listLazyRoutes, parseLazyRoute } from './lazy_routes';
import { StaticSymbol } from './static_symbol';
import { createForJitStub, serializeSummaries } from './summary_serializer';
import { ngfactoryFilePath, normalizeGenFileSuffix, splitTypescriptSuffix, summaryFileName, summaryForJitFileName } from './util';
var AotCompiler = /** @class */ (function () {
    function AotCompiler(_config, _options, _host, reflector, _metadataResolver, _templateParser, _styleCompiler, _viewCompiler, _typeCheckCompiler, _ngModuleCompiler, _injectableCompiler, _outputEmitter, _summaryResolver, _symbolResolver) {
        this._config = _config;
        this._options = _options;
        this._host = _host;
        this.reflector = reflector;
        this._metadataResolver = _metadataResolver;
        this._templateParser = _templateParser;
        this._styleCompiler = _styleCompiler;
        this._viewCompiler = _viewCompiler;
        this._typeCheckCompiler = _typeCheckCompiler;
        this._ngModuleCompiler = _ngModuleCompiler;
        this._injectableCompiler = _injectableCompiler;
        this._outputEmitter = _outputEmitter;
        this._summaryResolver = _summaryResolver;
        this._symbolResolver = _symbolResolver;
        this._templateAstCache = new Map();
        this._analyzedFiles = new Map();
        this._analyzedFilesForInjectables = new Map();
    }
    AotCompiler.prototype.clearCache = function () {
        this._metadataResolver.clearCache();
    };
    AotCompiler.prototype.analyzeModulesSync = function (rootFiles) {
        var _this = this;
        var analyzeResult = analyzeAndValidateNgModules(rootFiles, this._host, this._symbolResolver, this._metadataResolver);
        analyzeResult.ngModules.forEach(function (ngModule) { return _this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, true); });
        return analyzeResult;
    };
    AotCompiler.prototype.analyzeModulesAsync = function (rootFiles) {
        var _this = this;
        var analyzeResult = analyzeAndValidateNgModules(rootFiles, this._host, this._symbolResolver, this._metadataResolver);
        return Promise
            .all(analyzeResult.ngModules.map(function (ngModule) { return _this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, false); }))
            .then(function () { return analyzeResult; });
    };
    AotCompiler.prototype._analyzeFile = function (fileName) {
        var analyzedFile = this._analyzedFiles.get(fileName);
        if (!analyzedFile) {
            analyzedFile =
                analyzeFile(this._host, this._symbolResolver, this._metadataResolver, fileName);
            this._analyzedFiles.set(fileName, analyzedFile);
        }
        return analyzedFile;
    };
    AotCompiler.prototype._analyzeFileForInjectables = function (fileName) {
        var analyzedFile = this._analyzedFilesForInjectables.get(fileName);
        if (!analyzedFile) {
            analyzedFile = analyzeFileForInjectables(this._host, this._symbolResolver, this._metadataResolver, fileName);
            this._analyzedFilesForInjectables.set(fileName, analyzedFile);
        }
        return analyzedFile;
    };
    AotCompiler.prototype.findGeneratedFileNames = function (fileName) {
        var _this = this;
        var genFileNames = [];
        var file = this._analyzeFile(fileName);
        // Make sure we create a .ngfactory if we have a injectable/directive/pipe/NgModule
        // or a reference to a non source file.
        // Note: This is overestimating the required .ngfactory files as the real calculation is harder.
        // Only do this for StubEmitFlags.Basic, as adding a type check block
        // does not change this file (as we generate type check blocks based on NgModules).
        if (this._options.allowEmptyCodegenFiles || file.directives.length || file.pipes.length ||
            file.injectables.length || file.ngModules.length || file.exportsNonSourceFiles) {
            genFileNames.push(ngfactoryFilePath(file.fileName, true));
            if (this._options.enableSummariesForJit) {
                genFileNames.push(summaryForJitFileName(file.fileName, true));
            }
        }
        var fileSuffix = normalizeGenFileSuffix(splitTypescriptSuffix(file.fileName, true)[1]);
        file.directives.forEach(function (dirSymbol) {
            var compMeta = _this._metadataResolver.getNonNormalizedDirectiveMetadata(dirSymbol).metadata;
            if (!compMeta.isComponent) {
                return;
            }
            // Note: compMeta is a component and therefore template is non null.
            compMeta.template.styleUrls.forEach(function (styleUrl) {
                var normalizedUrl = _this._host.resourceNameToFileName(styleUrl, file.fileName);
                if (!normalizedUrl) {
                    throw syntaxError("Couldn't resolve resource " + styleUrl + " relative to " + file.fileName);
                }
                var needsShim = (compMeta.template.encapsulation ||
                    _this._config.defaultEncapsulation) === ViewEncapsulation.Emulated;
                genFileNames.push(_stylesModuleUrl(normalizedUrl, needsShim, fileSuffix));
                if (_this._options.allowEmptyCodegenFiles) {
                    genFileNames.push(_stylesModuleUrl(normalizedUrl, !needsShim, fileSuffix));
                }
            });
        });
        return genFileNames;
    };
    AotCompiler.prototype.emitBasicStub = function (genFileName, originalFileName) {
        var outputCtx = this._createOutputContext(genFileName);
        if (genFileName.endsWith('.ngfactory.ts')) {
            if (!originalFileName) {
                throw new Error("Assertion error: require the original file for .ngfactory.ts stubs. File: " + genFileName);
            }
            var originalFile = this._analyzeFile(originalFileName);
            this._createNgFactoryStub(outputCtx, originalFile, 1 /* Basic */);
        }
        else if (genFileName.endsWith('.ngsummary.ts')) {
            if (this._options.enableSummariesForJit) {
                if (!originalFileName) {
                    throw new Error("Assertion error: require the original file for .ngsummary.ts stubs. File: " + genFileName);
                }
                var originalFile = this._analyzeFile(originalFileName);
                _createEmptyStub(outputCtx);
                originalFile.ngModules.forEach(function (ngModule) {
                    // create exports that user code can reference
                    createForJitStub(outputCtx, ngModule.type.reference);
                });
            }
        }
        else if (genFileName.endsWith('.ngstyle.ts')) {
            _createEmptyStub(outputCtx);
        }
        // Note: for the stubs, we don't need a property srcFileUrl,
        // as later on in emitAllImpls we will create the proper GeneratedFiles with the
        // correct srcFileUrl.
        // This is good as e.g. for .ngstyle.ts files we can't derive
        // the url of components based on the genFileUrl.
        return this._codegenSourceModule('unknown', outputCtx);
    };
    AotCompiler.prototype.emitTypeCheckStub = function (genFileName, originalFileName) {
        var originalFile = this._analyzeFile(originalFileName);
        var outputCtx = this._createOutputContext(genFileName);
        if (genFileName.endsWith('.ngfactory.ts')) {
            this._createNgFactoryStub(outputCtx, originalFile, 2 /* TypeCheck */);
        }
        return outputCtx.statements.length > 0 ?
            this._codegenSourceModule(originalFile.fileName, outputCtx) :
            null;
    };
    AotCompiler.prototype.loadFilesAsync = function (fileNames, tsFiles) {
        var _this = this;
        var files = fileNames.map(function (fileName) { return _this._analyzeFile(fileName); });
        var loadingPromises = [];
        files.forEach(function (file) { return file.ngModules.forEach(function (ngModule) {
            return loadingPromises.push(_this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, false));
        }); });
        var analyzedInjectables = tsFiles.map(function (tsFile) { return _this._analyzeFileForInjectables(tsFile); });
        return Promise.all(loadingPromises).then(function (_) { return ({
            analyzedModules: mergeAndValidateNgFiles(files),
            analyzedInjectables: analyzedInjectables,
        }); });
    };
    AotCompiler.prototype.loadFilesSync = function (fileNames, tsFiles) {
        var _this = this;
        var files = fileNames.map(function (fileName) { return _this._analyzeFile(fileName); });
        files.forEach(function (file) { return file.ngModules.forEach(function (ngModule) { return _this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, true); }); });
        var analyzedInjectables = tsFiles.map(function (tsFile) { return _this._analyzeFileForInjectables(tsFile); });
        return {
            analyzedModules: mergeAndValidateNgFiles(files),
            analyzedInjectables: analyzedInjectables,
        };
    };
    AotCompiler.prototype._createNgFactoryStub = function (outputCtx, file, emitFlags) {
        var _this = this;
        var componentId = 0;
        file.ngModules.forEach(function (ngModuleMeta, ngModuleIndex) {
            // Note: the code below needs to executed for StubEmitFlags.Basic and StubEmitFlags.TypeCheck,
            // so we don't change the .ngfactory file too much when adding the type-check block.
            // create exports that user code can reference
            _this._ngModuleCompiler.createStub(outputCtx, ngModuleMeta.type.reference);
            // add references to the symbols from the metadata.
            // These can be used by the type check block for components,
            // and they also cause TypeScript to include these files into the program too,
            // which will make them part of the analyzedFiles.
            var externalReferences = __spread(ngModuleMeta.transitiveModule.directives.map(function (d) { return d.reference; }), ngModuleMeta.transitiveModule.pipes.map(function (d) { return d.reference; }), ngModuleMeta.importedModules.map(function (m) { return m.type.reference; }), ngModuleMeta.exportedModules.map(function (m) { return m.type.reference; }), _this._externalIdentifierReferences([Identifiers.TemplateRef, Identifiers.ElementRef]));
            var externalReferenceVars = new Map();
            externalReferences.forEach(function (ref, typeIndex) {
                externalReferenceVars.set(ref, "_decl" + ngModuleIndex + "_" + typeIndex);
            });
            externalReferenceVars.forEach(function (varName, reference) {
                outputCtx.statements.push(o.variable(varName)
                    .set(o.NULL_EXPR.cast(o.DYNAMIC_TYPE))
                    .toDeclStmt(o.expressionType(outputCtx.importExpr(reference, /* typeParams */ null, /* useSummaries */ false))));
            });
            if (emitFlags & 2 /* TypeCheck */) {
                // add the type-check block for all components of the NgModule
                ngModuleMeta.declaredDirectives.forEach(function (dirId) {
                    var compMeta = _this._metadataResolver.getDirectiveMetadata(dirId.reference);
                    if (!compMeta.isComponent) {
                        return;
                    }
                    componentId++;
                    _this._createTypeCheckBlock(outputCtx, compMeta.type.reference.name + "_Host_" + componentId, ngModuleMeta, _this._metadataResolver.getHostComponentMetadata(compMeta), [compMeta.type], externalReferenceVars);
                    _this._createTypeCheckBlock(outputCtx, compMeta.type.reference.name + "_" + componentId, ngModuleMeta, compMeta, ngModuleMeta.transitiveModule.directives, externalReferenceVars);
                });
            }
        });
        if (outputCtx.statements.length === 0) {
            _createEmptyStub(outputCtx);
        }
    };
    AotCompiler.prototype._externalIdentifierReferences = function (references) {
        var e_1, _a;
        var result = [];
        try {
            for (var references_1 = __values(references), references_1_1 = references_1.next(); !references_1_1.done; references_1_1 = references_1.next()) {
                var reference = references_1_1.value;
                var token = createTokenForExternalReference(this.reflector, reference);
                if (token.identifier) {
                    result.push(token.identifier.reference);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (references_1_1 && !references_1_1.done && (_a = references_1.return)) _a.call(references_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    AotCompiler.prototype._createTypeCheckBlock = function (ctx, componentId, moduleMeta, compMeta, directives, externalReferenceVars) {
        var _a;
        var _b = this._parseTemplate(compMeta, moduleMeta, directives), parsedTemplate = _b.template, usedPipes = _b.pipes;
        (_a = ctx.statements).push.apply(_a, __spread(this._typeCheckCompiler.compileComponent(componentId, compMeta, parsedTemplate, usedPipes, externalReferenceVars, ctx)));
    };
    AotCompiler.prototype.emitMessageBundle = function (analyzeResult, locale) {
        var _this = this;
        var errors = [];
        var htmlParser = new HtmlParser();
        // TODO(vicb): implicit tags & attributes
        var messageBundle = new MessageBundle(htmlParser, [], {}, locale);
        analyzeResult.files.forEach(function (file) {
            var compMetas = [];
            file.directives.forEach(function (directiveType) {
                var dirMeta = _this._metadataResolver.getDirectiveMetadata(directiveType);
                if (dirMeta && dirMeta.isComponent) {
                    compMetas.push(dirMeta);
                }
            });
            compMetas.forEach(function (compMeta) {
                var html = compMeta.template.template;
                // Template URL points to either an HTML or TS file depending on whether
                // the file is used with `templateUrl:` or `template:`, respectively.
                var templateUrl = compMeta.template.templateUrl;
                var interpolationConfig = InterpolationConfig.fromArray(compMeta.template.interpolation);
                errors.push.apply(errors, __spread(messageBundle.updateFromTemplate(html, templateUrl, interpolationConfig)));
            });
        });
        if (errors.length) {
            throw new Error(errors.map(function (e) { return e.toString(); }).join('\n'));
        }
        return messageBundle;
    };
    AotCompiler.prototype.emitAllPartialModules = function (_a, r3Files) {
        var _this = this;
        var ngModuleByPipeOrDirective = _a.ngModuleByPipeOrDirective, files = _a.files;
        var contextMap = new Map();
        var getContext = function (fileName) {
            if (!contextMap.has(fileName)) {
                contextMap.set(fileName, _this._createOutputContext(fileName));
            }
            return contextMap.get(fileName);
        };
        files.forEach(function (file) { return _this._compilePartialModule(file.fileName, ngModuleByPipeOrDirective, file.directives, file.pipes, file.ngModules, file.injectables, getContext(file.fileName)); });
        r3Files.forEach(function (file) { return _this._compileShallowModules(file.fileName, file.shallowModules, getContext(file.fileName)); });
        return Array.from(contextMap.values())
            .map(function (context) { return ({
            fileName: context.genFilePath,
            statements: __spread(context.constantPool.statements, context.statements),
        }); });
    };
    AotCompiler.prototype._compileShallowModules = function (fileName, shallowModules, context) {
        var _this = this;
        shallowModules.forEach(function (module) { return compileR3Module(context, module, _this._injectableCompiler); });
    };
    AotCompiler.prototype._compilePartialModule = function (fileName, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables, context) {
        var _this = this;
        var errors = [];
        var schemaRegistry = new DomElementSchemaRegistry();
        var hostBindingParser = new BindingParser(this._templateParser.expressionParser, DEFAULT_INTERPOLATION_CONFIG, schemaRegistry, [], errors);
        // Process all components and directives
        directives.forEach(function (directiveType) {
            var directiveMetadata = _this._metadataResolver.getDirectiveMetadata(directiveType);
            if (directiveMetadata.isComponent) {
                var module = ngModuleByPipeOrDirective.get(directiveType);
                module ||
                    error("Cannot determine the module for component '" + identifierName(directiveMetadata.type) + "'");
                var htmlAst = directiveMetadata.template.htmlAst;
                var preserveWhitespaces = directiveMetadata.template.preserveWhitespaces;
                if (!preserveWhitespaces) {
                    htmlAst = removeWhitespaces(htmlAst);
                }
                var render3Ast = htmlAstToRender3Ast(htmlAst.rootNodes, hostBindingParser);
                // Map of StaticType by directive selectors
                var directiveTypeBySel_1 = new Map();
                var directives_1 = module.transitiveModule.directives.map(function (dir) { return _this._metadataResolver.getDirectiveSummary(dir.reference); });
                directives_1.forEach(function (directive) {
                    if (directive.selector) {
                        directiveTypeBySel_1.set(directive.selector, directive.type.reference);
                    }
                });
                // Map of StaticType by pipe names
                var pipeTypeByName_1 = new Map();
                var pipes_1 = module.transitiveModule.pipes.map(function (pipe) { return _this._metadataResolver.getPipeSummary(pipe.reference); });
                pipes_1.forEach(function (pipe) {
                    pipeTypeByName_1.set(pipe.name, pipe.type.reference);
                });
                compileR3Component(context, directiveMetadata, render3Ast, _this.reflector, hostBindingParser, directiveTypeBySel_1, pipeTypeByName_1);
            }
            else {
                compileR3Directive(context, directiveMetadata, _this.reflector, hostBindingParser);
            }
        });
        pipes.forEach(function (pipeType) {
            var pipeMetadata = _this._metadataResolver.getPipeMetadata(pipeType);
            if (pipeMetadata) {
                compileR3Pipe(context, pipeMetadata, _this.reflector);
            }
        });
        injectables.forEach(function (injectable) { return _this._injectableCompiler.compile(injectable, context); });
    };
    AotCompiler.prototype.emitAllPartialModules2 = function (files) {
        var _this = this;
        // Using reduce like this is a select many pattern (where map is a select pattern)
        return files.reduce(function (r, file) {
            r.push.apply(r, __spread(_this._emitPartialModule2(file.fileName, file.injectables)));
            return r;
        }, []);
    };
    AotCompiler.prototype._emitPartialModule2 = function (fileName, injectables) {
        var _this = this;
        var context = this._createOutputContext(fileName);
        injectables.forEach(function (injectable) { return _this._injectableCompiler.compile(injectable, context); });
        if (context.statements && context.statements.length > 0) {
            return [{ fileName: fileName, statements: __spread(context.constantPool.statements, context.statements) }];
        }
        return [];
    };
    AotCompiler.prototype.emitAllImpls = function (analyzeResult) {
        var _this = this;
        var ngModuleByPipeOrDirective = analyzeResult.ngModuleByPipeOrDirective, files = analyzeResult.files;
        var sourceModules = files.map(function (file) { return _this._compileImplFile(file.fileName, ngModuleByPipeOrDirective, file.directives, file.pipes, file.ngModules, file.injectables); });
        return flatten(sourceModules);
    };
    AotCompiler.prototype._compileImplFile = function (srcFileUrl, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables) {
        var _this = this;
        var fileSuffix = normalizeGenFileSuffix(splitTypescriptSuffix(srcFileUrl, true)[1]);
        var generatedFiles = [];
        var outputCtx = this._createOutputContext(ngfactoryFilePath(srcFileUrl, true));
        generatedFiles.push.apply(generatedFiles, __spread(this._createSummary(srcFileUrl, directives, pipes, ngModules, injectables, outputCtx)));
        // compile all ng modules
        ngModules.forEach(function (ngModuleMeta) { return _this._compileModule(outputCtx, ngModuleMeta); });
        // compile components
        directives.forEach(function (dirType) {
            var compMeta = _this._metadataResolver.getDirectiveMetadata(dirType);
            if (!compMeta.isComponent) {
                return;
            }
            var ngModule = ngModuleByPipeOrDirective.get(dirType);
            if (!ngModule) {
                throw new Error("Internal Error: cannot determine the module for component " + identifierName(compMeta.type) + "!");
            }
            // compile styles
            var componentStylesheet = _this._styleCompiler.compileComponent(outputCtx, compMeta);
            // Note: compMeta is a component and therefore template is non null.
            compMeta.template.externalStylesheets.forEach(function (stylesheetMeta) {
                // Note: fill non shim and shim style files as they might
                // be shared by component with and without ViewEncapsulation.
                var shim = _this._styleCompiler.needsStyleShim(compMeta);
                generatedFiles.push(_this._codegenStyles(srcFileUrl, compMeta, stylesheetMeta, shim, fileSuffix));
                if (_this._options.allowEmptyCodegenFiles) {
                    generatedFiles.push(_this._codegenStyles(srcFileUrl, compMeta, stylesheetMeta, !shim, fileSuffix));
                }
            });
            // compile components
            var compViewVars = _this._compileComponent(outputCtx, compMeta, ngModule, ngModule.transitiveModule.directives, componentStylesheet, fileSuffix);
            _this._compileComponentFactory(outputCtx, compMeta, ngModule, fileSuffix);
        });
        if (outputCtx.statements.length > 0 || this._options.allowEmptyCodegenFiles) {
            var srcModule = this._codegenSourceModule(srcFileUrl, outputCtx);
            generatedFiles.unshift(srcModule);
        }
        return generatedFiles;
    };
    AotCompiler.prototype._createSummary = function (srcFileName, directives, pipes, ngModules, injectables, ngFactoryCtx) {
        var _this = this;
        var symbolSummaries = this._symbolResolver.getSymbolsOf(srcFileName)
            .map(function (symbol) { return _this._symbolResolver.resolveSymbol(symbol); });
        var typeData = __spread(ngModules.map(function (meta) { return ({
            summary: _this._metadataResolver.getNgModuleSummary(meta.type.reference),
            metadata: _this._metadataResolver.getNgModuleMetadata(meta.type.reference)
        }); }), directives.map(function (ref) { return ({
            summary: _this._metadataResolver.getDirectiveSummary(ref),
            metadata: _this._metadataResolver.getDirectiveMetadata(ref)
        }); }), pipes.map(function (ref) { return ({
            summary: _this._metadataResolver.getPipeSummary(ref),
            metadata: _this._metadataResolver.getPipeMetadata(ref)
        }); }), injectables.map(function (ref) { return ({
            summary: _this._metadataResolver.getInjectableSummary(ref.symbol),
            metadata: _this._metadataResolver.getInjectableSummary(ref.symbol).type
        }); }));
        var forJitOutputCtx = this._options.enableSummariesForJit ?
            this._createOutputContext(summaryForJitFileName(srcFileName, true)) :
            null;
        var _a = serializeSummaries(srcFileName, forJitOutputCtx, this._summaryResolver, this._symbolResolver, symbolSummaries, typeData, this._options.createExternalSymbolFactoryReexports), json = _a.json, exportAs = _a.exportAs;
        exportAs.forEach(function (entry) {
            ngFactoryCtx.statements.push(o.variable(entry.exportAs).set(ngFactoryCtx.importExpr(entry.symbol)).toDeclStmt(null, [
                o.StmtModifier.Exported
            ]));
        });
        var summaryJson = new GeneratedFile(srcFileName, summaryFileName(srcFileName), json);
        var result = [summaryJson];
        if (forJitOutputCtx) {
            result.push(this._codegenSourceModule(srcFileName, forJitOutputCtx));
        }
        return result;
    };
    AotCompiler.prototype._compileModule = function (outputCtx, ngModule) {
        var providers = [];
        if (this._options.locale) {
            var normalizedLocale = this._options.locale.replace(/_/g, '-');
            providers.push({
                token: createTokenForExternalReference(this.reflector, Identifiers.LOCALE_ID),
                useValue: normalizedLocale,
            });
        }
        if (this._options.i18nFormat) {
            providers.push({
                token: createTokenForExternalReference(this.reflector, Identifiers.TRANSLATIONS_FORMAT),
                useValue: this._options.i18nFormat
            });
        }
        this._ngModuleCompiler.compile(outputCtx, ngModule, providers);
    };
    AotCompiler.prototype._compileComponentFactory = function (outputCtx, compMeta, ngModule, fileSuffix) {
        var hostMeta = this._metadataResolver.getHostComponentMetadata(compMeta);
        var hostViewFactoryVar = this._compileComponent(outputCtx, hostMeta, ngModule, [compMeta.type], null, fileSuffix)
            .viewClassVar;
        var compFactoryVar = componentFactoryName(compMeta.type.reference);
        var inputsExprs = [];
        for (var propName in compMeta.inputs) {
            var templateName = compMeta.inputs[propName];
            // Don't quote so that the key gets minified...
            inputsExprs.push(new o.LiteralMapEntry(propName, o.literal(templateName), false));
        }
        var outputsExprs = [];
        for (var propName in compMeta.outputs) {
            var templateName = compMeta.outputs[propName];
            // Don't quote so that the key gets minified...
            outputsExprs.push(new o.LiteralMapEntry(propName, o.literal(templateName), false));
        }
        outputCtx.statements.push(o.variable(compFactoryVar)
            .set(o.importExpr(Identifiers.createComponentFactory).callFn([
            o.literal(compMeta.selector), outputCtx.importExpr(compMeta.type.reference),
            o.variable(hostViewFactoryVar), new o.LiteralMapExpr(inputsExprs),
            new o.LiteralMapExpr(outputsExprs),
            o.literalArr(compMeta.template.ngContentSelectors.map(function (selector) { return o.literal(selector); }))
        ]))
            .toDeclStmt(o.importType(Identifiers.ComponentFactory, [o.expressionType(outputCtx.importExpr(compMeta.type.reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]));
    };
    AotCompiler.prototype._compileComponent = function (outputCtx, compMeta, ngModule, directiveIdentifiers, componentStyles, fileSuffix) {
        var _a = this._parseTemplate(compMeta, ngModule, directiveIdentifiers), parsedTemplate = _a.template, usedPipes = _a.pipes;
        var stylesExpr = componentStyles ? o.variable(componentStyles.stylesVar) : o.literalArr([]);
        var viewResult = this._viewCompiler.compileComponent(outputCtx, compMeta, parsedTemplate, stylesExpr, usedPipes);
        if (componentStyles) {
            _resolveStyleStatements(this._symbolResolver, componentStyles, this._styleCompiler.needsStyleShim(compMeta), fileSuffix);
        }
        return viewResult;
    };
    AotCompiler.prototype._parseTemplate = function (compMeta, ngModule, directiveIdentifiers) {
        var _this = this;
        if (this._templateAstCache.has(compMeta.type.reference)) {
            return this._templateAstCache.get(compMeta.type.reference);
        }
        var preserveWhitespaces = compMeta.template.preserveWhitespaces;
        var directives = directiveIdentifiers.map(function (dir) { return _this._metadataResolver.getDirectiveSummary(dir.reference); });
        var pipes = ngModule.transitiveModule.pipes.map(function (pipe) { return _this._metadataResolver.getPipeSummary(pipe.reference); });
        var result = this._templateParser.parse(compMeta, compMeta.template.htmlAst, directives, pipes, ngModule.schemas, templateSourceUrl(ngModule.type, compMeta, compMeta.template), preserveWhitespaces);
        this._templateAstCache.set(compMeta.type.reference, result);
        return result;
    };
    AotCompiler.prototype._createOutputContext = function (genFilePath) {
        var _this = this;
        var importExpr = function (symbol, typeParams, useSummaries) {
            if (typeParams === void 0) { typeParams = null; }
            if (useSummaries === void 0) { useSummaries = true; }
            if (!(symbol instanceof StaticSymbol)) {
                throw new Error("Internal error: unknown identifier " + JSON.stringify(symbol));
            }
            var arity = _this._symbolResolver.getTypeArity(symbol) || 0;
            var _a = _this._symbolResolver.getImportAs(symbol, useSummaries) || symbol, filePath = _a.filePath, name = _a.name, members = _a.members;
            var importModule = _this._fileNameToModuleName(filePath, genFilePath);
            // It should be good enough to compare filePath to genFilePath and if they are equal
            // there is a self reference. However, ngfactory files generate to .ts but their
            // symbols have .d.ts so a simple compare is insufficient. They should be canonical
            // and is tracked by #17705.
            var selfReference = _this._fileNameToModuleName(genFilePath, genFilePath);
            var moduleName = importModule === selfReference ? null : importModule;
            // If we are in a type expression that refers to a generic type then supply
            // the required type parameters. If there were not enough type parameters
            // supplied, supply any as the type. Outside a type expression the reference
            // should not supply type parameters and be treated as a simple value reference
            // to the constructor function itself.
            var suppliedTypeParams = typeParams || [];
            var missingTypeParamsCount = arity - suppliedTypeParams.length;
            var allTypeParams = suppliedTypeParams.concat(newArray(missingTypeParamsCount, o.DYNAMIC_TYPE));
            return members.reduce(function (expr, memberName) { return expr.prop(memberName); }, o.importExpr(new o.ExternalReference(moduleName, name, null), allTypeParams));
        };
        return { statements: [], genFilePath: genFilePath, importExpr: importExpr, constantPool: new ConstantPool() };
    };
    AotCompiler.prototype._fileNameToModuleName = function (importedFilePath, containingFilePath) {
        return this._summaryResolver.getKnownModuleName(importedFilePath) ||
            this._symbolResolver.getKnownModuleName(importedFilePath) ||
            this._host.fileNameToModuleName(importedFilePath, containingFilePath);
    };
    AotCompiler.prototype._codegenStyles = function (srcFileUrl, compMeta, stylesheetMetadata, isShimmed, fileSuffix) {
        var outputCtx = this._createOutputContext(_stylesModuleUrl(stylesheetMetadata.moduleUrl, isShimmed, fileSuffix));
        var compiledStylesheet = this._styleCompiler.compileStyles(outputCtx, compMeta, stylesheetMetadata, isShimmed);
        _resolveStyleStatements(this._symbolResolver, compiledStylesheet, isShimmed, fileSuffix);
        return this._codegenSourceModule(srcFileUrl, outputCtx);
    };
    AotCompiler.prototype._codegenSourceModule = function (srcFileUrl, ctx) {
        return new GeneratedFile(srcFileUrl, ctx.genFilePath, ctx.statements);
    };
    AotCompiler.prototype.listLazyRoutes = function (entryRoute, analyzedModules) {
        var e_2, _a, e_3, _b;
        var self = this;
        if (entryRoute) {
            var symbol = parseLazyRoute(entryRoute, this.reflector).referencedModule;
            return visitLazyRoute(symbol);
        }
        else if (analyzedModules) {
            var allLazyRoutes = [];
            try {
                for (var _c = __values(analyzedModules.ngModules), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var ngModule = _d.value;
                    var lazyRoutes = listLazyRoutes(ngModule, this.reflector);
                    try {
                        for (var lazyRoutes_1 = (e_3 = void 0, __values(lazyRoutes)), lazyRoutes_1_1 = lazyRoutes_1.next(); !lazyRoutes_1_1.done; lazyRoutes_1_1 = lazyRoutes_1.next()) {
                            var lazyRoute = lazyRoutes_1_1.value;
                            allLazyRoutes.push(lazyRoute);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (lazyRoutes_1_1 && !lazyRoutes_1_1.done && (_b = lazyRoutes_1.return)) _b.call(lazyRoutes_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return allLazyRoutes;
        }
        else {
            throw new Error("Either route or analyzedModules has to be specified!");
        }
        function visitLazyRoute(symbol, seenRoutes, allLazyRoutes) {
            var e_4, _a;
            if (seenRoutes === void 0) { seenRoutes = new Set(); }
            if (allLazyRoutes === void 0) { allLazyRoutes = []; }
            // Support pointing to default exports, but stop recursing there,
            // as the StaticReflector does not yet support default exports.
            if (seenRoutes.has(symbol) || !symbol.name) {
                return allLazyRoutes;
            }
            seenRoutes.add(symbol);
            var lazyRoutes = listLazyRoutes(self._metadataResolver.getNgModuleMetadata(symbol, true), self.reflector);
            try {
                for (var lazyRoutes_2 = __values(lazyRoutes), lazyRoutes_2_1 = lazyRoutes_2.next(); !lazyRoutes_2_1.done; lazyRoutes_2_1 = lazyRoutes_2.next()) {
                    var lazyRoute = lazyRoutes_2_1.value;
                    allLazyRoutes.push(lazyRoute);
                    visitLazyRoute(lazyRoute.referencedModule, seenRoutes, allLazyRoutes);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (lazyRoutes_2_1 && !lazyRoutes_2_1.done && (_a = lazyRoutes_2.return)) _a.call(lazyRoutes_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return allLazyRoutes;
        }
    };
    return AotCompiler;
}());
export { AotCompiler };
function _createEmptyStub(outputCtx) {
    // Note: We need to produce at least one import statement so that
    // TypeScript knows that the file is an es6 module. Otherwise our generated
    // exports / imports won't be emitted properly by TypeScript.
    outputCtx.statements.push(o.importExpr(Identifiers.ComponentFactory).toStmt());
}
function _resolveStyleStatements(symbolResolver, compileResult, needsShim, fileSuffix) {
    compileResult.dependencies.forEach(function (dep) {
        dep.setValue(symbolResolver.getStaticSymbol(_stylesModuleUrl(dep.moduleUrl, needsShim, fileSuffix), dep.name));
    });
}
function _stylesModuleUrl(stylesheetUrl, shim, suffix) {
    return "" + stylesheetUrl + (shim ? '.shim' : '') + ".ngstyle" + suffix;
}
export function analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
    var files = _analyzeFilesIncludingNonProgramFiles(fileNames, host, staticSymbolResolver, metadataResolver);
    return mergeAnalyzedFiles(files);
}
export function analyzeAndValidateNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
    return validateAnalyzedModules(analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver));
}
function validateAnalyzedModules(analyzedModules) {
    if (analyzedModules.symbolsMissingModule && analyzedModules.symbolsMissingModule.length) {
        var messages = analyzedModules.symbolsMissingModule.map(function (s) { return "Cannot determine the module for class " + s.name + " in " + s.filePath + "! Add " + s.name + " to the NgModule to fix it."; });
        throw syntaxError(messages.join('\n'));
    }
    return analyzedModules;
}
// Analyzes all of the program files,
// including files that are not part of the program
// but are referenced by an NgModule.
function _analyzeFilesIncludingNonProgramFiles(fileNames, host, staticSymbolResolver, metadataResolver) {
    var seenFiles = new Set();
    var files = [];
    var visitFile = function (fileName) {
        if (seenFiles.has(fileName) || !host.isSourceFile(fileName)) {
            return false;
        }
        seenFiles.add(fileName);
        var analyzedFile = analyzeFile(host, staticSymbolResolver, metadataResolver, fileName);
        files.push(analyzedFile);
        analyzedFile.ngModules.forEach(function (ngModule) {
            ngModule.transitiveModule.modules.forEach(function (modMeta) { return visitFile(modMeta.reference.filePath); });
        });
    };
    fileNames.forEach(function (fileName) { return visitFile(fileName); });
    return files;
}
export function analyzeFile(host, staticSymbolResolver, metadataResolver, fileName) {
    var abstractDirectives = [];
    var directives = [];
    var pipes = [];
    var injectables = [];
    var ngModules = [];
    var hasDecorators = staticSymbolResolver.hasDecorators(fileName);
    var exportsNonSourceFiles = false;
    var isDeclarationFile = fileName.endsWith('.d.ts');
    // Don't analyze .d.ts files that have no decorators as a shortcut
    // to speed up the analysis. This prevents us from
    // resolving the references in these files.
    // Note: exportsNonSourceFiles is only needed when compiling with summaries,
    // which is not the case when .d.ts files are treated as input files.
    if (!isDeclarationFile || hasDecorators) {
        staticSymbolResolver.getSymbolsOf(fileName).forEach(function (symbol) {
            var resolvedSymbol = staticSymbolResolver.resolveSymbol(symbol);
            var symbolMeta = resolvedSymbol.metadata;
            if (!symbolMeta || symbolMeta.__symbolic === 'error') {
                return;
            }
            var isNgSymbol = false;
            if (symbolMeta.__symbolic === 'class') {
                if (metadataResolver.isDirective(symbol)) {
                    isNgSymbol = true;
                    // This directive either has a selector or doesn't. Selector-less directives get tracked
                    // in abstractDirectives, not directives. The compiler doesn't deal with selector-less
                    // directives at all, really, other than to persist their metadata. This is done so that
                    // apps will have an easier time migrating to Ivy, which requires the selector-less
                    // annotations to be applied.
                    if (!metadataResolver.isAbstractDirective(symbol)) {
                        // The directive is an ordinary directive.
                        directives.push(symbol);
                    }
                    else {
                        // The directive has no selector and is an "abstract" directive, so track it
                        // accordingly.
                        abstractDirectives.push(symbol);
                    }
                }
                else if (metadataResolver.isPipe(symbol)) {
                    isNgSymbol = true;
                    pipes.push(symbol);
                }
                else if (metadataResolver.isNgModule(symbol)) {
                    var ngModule = metadataResolver.getNgModuleMetadata(symbol, false);
                    if (ngModule) {
                        isNgSymbol = true;
                        ngModules.push(ngModule);
                    }
                }
                else if (metadataResolver.isInjectable(symbol)) {
                    isNgSymbol = true;
                    var injectable = metadataResolver.getInjectableMetadata(symbol, null, false);
                    if (injectable) {
                        injectables.push(injectable);
                    }
                }
            }
            if (!isNgSymbol) {
                exportsNonSourceFiles =
                    exportsNonSourceFiles || isValueExportingNonSourceFile(host, symbolMeta);
            }
        });
    }
    return {
        fileName: fileName,
        directives: directives,
        abstractDirectives: abstractDirectives,
        pipes: pipes,
        ngModules: ngModules,
        injectables: injectables,
        exportsNonSourceFiles: exportsNonSourceFiles,
    };
}
export function analyzeFileForInjectables(host, staticSymbolResolver, metadataResolver, fileName) {
    var injectables = [];
    var shallowModules = [];
    if (staticSymbolResolver.hasDecorators(fileName)) {
        staticSymbolResolver.getSymbolsOf(fileName).forEach(function (symbol) {
            var resolvedSymbol = staticSymbolResolver.resolveSymbol(symbol);
            var symbolMeta = resolvedSymbol.metadata;
            if (!symbolMeta || symbolMeta.__symbolic === 'error') {
                return;
            }
            if (symbolMeta.__symbolic === 'class') {
                if (metadataResolver.isInjectable(symbol)) {
                    var injectable = metadataResolver.getInjectableMetadata(symbol, null, false);
                    if (injectable) {
                        injectables.push(injectable);
                    }
                }
                else if (metadataResolver.isNgModule(symbol)) {
                    var module = metadataResolver.getShallowModuleMetadata(symbol);
                    if (module) {
                        shallowModules.push(module);
                    }
                }
            }
        });
    }
    return { fileName: fileName, injectables: injectables, shallowModules: shallowModules };
}
function isValueExportingNonSourceFile(host, metadata) {
    var exportsNonSourceFiles = false;
    var Visitor = /** @class */ (function () {
        function Visitor() {
        }
        Visitor.prototype.visitArray = function (arr, context) {
            var _this = this;
            arr.forEach(function (v) { return visitValue(v, _this, context); });
        };
        Visitor.prototype.visitStringMap = function (map, context) {
            var _this = this;
            Object.keys(map).forEach(function (key) { return visitValue(map[key], _this, context); });
        };
        Visitor.prototype.visitPrimitive = function (value, context) { };
        Visitor.prototype.visitOther = function (value, context) {
            if (value instanceof StaticSymbol && !host.isSourceFile(value.filePath)) {
                exportsNonSourceFiles = true;
            }
        };
        return Visitor;
    }());
    visitValue(metadata, new Visitor(), null);
    return exportsNonSourceFiles;
}
export function mergeAnalyzedFiles(analyzedFiles) {
    var allNgModules = [];
    var ngModuleByPipeOrDirective = new Map();
    var allPipesAndDirectives = new Set();
    analyzedFiles.forEach(function (af) {
        af.ngModules.forEach(function (ngModule) {
            allNgModules.push(ngModule);
            ngModule.declaredDirectives.forEach(function (d) { return ngModuleByPipeOrDirective.set(d.reference, ngModule); });
            ngModule.declaredPipes.forEach(function (p) { return ngModuleByPipeOrDirective.set(p.reference, ngModule); });
        });
        af.directives.forEach(function (d) { return allPipesAndDirectives.add(d); });
        af.pipes.forEach(function (p) { return allPipesAndDirectives.add(p); });
    });
    var symbolsMissingModule = [];
    allPipesAndDirectives.forEach(function (ref) {
        if (!ngModuleByPipeOrDirective.has(ref)) {
            symbolsMissingModule.push(ref);
        }
    });
    return {
        ngModules: allNgModules,
        ngModuleByPipeOrDirective: ngModuleByPipeOrDirective,
        symbolsMissingModule: symbolsMissingModule,
        files: analyzedFiles
    };
}
function mergeAndValidateNgFiles(files) {
    return validateAnalyzedModules(mergeAnalyzedFiles(files));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYW90L2NvbXBpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQThRLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVsWCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsK0JBQStCLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBR3BHLE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFMUMsT0FBTyxFQUFDLDBCQUEwQixJQUFJLGVBQWUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBQyxzQkFBc0IsSUFBSSxhQUFhLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsMkJBQTJCLElBQUksa0JBQWtCLEVBQUUsMkJBQTJCLElBQUksa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5SSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsT0FBTyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQWlCLFdBQVcsRUFBZ0IsVUFBVSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBTTlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQVksY0FBYyxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQVFoSTtJQU1FLHFCQUNZLE9BQXVCLEVBQVUsUUFBNEIsRUFDN0QsS0FBc0IsRUFBVyxTQUEwQixFQUMzRCxpQkFBMEMsRUFBVSxlQUErQixFQUNuRixjQUE2QixFQUFVLGFBQTJCLEVBQ2xFLGtCQUFxQyxFQUFVLGlCQUFtQyxFQUNsRixtQkFBdUMsRUFBVSxjQUE2QixFQUM5RSxnQkFBK0MsRUFDL0MsZUFBcUM7UUFQckMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM3RCxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFXLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDbkYsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUNsRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNsRix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDOUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUErQjtRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUFiekMsc0JBQWlCLEdBQ3JCLElBQUksR0FBRyxFQUF3RSxDQUFDO1FBQzVFLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFDbkQsaUNBQTRCLEdBQUcsSUFBSSxHQUFHLEVBQXlDLENBQUM7SUFVcEMsQ0FBQztJQUVyRCxnQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsU0FBbUI7UUFBdEMsaUJBT0M7UUFOQyxJQUFNLGFBQWEsR0FBRywyQkFBMkIsQ0FDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RSxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDM0IsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQ25FLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUR0QixDQUNzQixDQUFDLENBQUM7UUFDeEMsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFtQixHQUFuQixVQUFvQixTQUFtQjtRQUF2QyxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHLDJCQUEyQixDQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sT0FBTzthQUNULEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDNUIsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQ25FLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUR2QixDQUN1QixDQUFDLENBQUM7YUFDeEMsSUFBSSxDQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ25DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsWUFBWTtnQkFDUixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU8sZ0RBQTBCLEdBQWxDLFVBQW1DLFFBQWdCO1FBQ2pELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixZQUFZLEdBQUcseUJBQXlCLENBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsNENBQXNCLEdBQXRCLFVBQXVCLFFBQWdCO1FBQXZDLGlCQXFDQztRQXBDQyxJQUFNLFlBQVksR0FBYSxFQUFFLENBQUM7UUFDbEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxtRkFBbUY7UUFDbkYsdUNBQXVDO1FBQ3ZDLGdHQUFnRztRQUNoRyxxRUFBcUU7UUFDckUsbUZBQW1GO1FBQ25GLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDbkYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ2xGLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0Q7U0FDRjtRQUNELElBQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDaEMsSUFBTSxRQUFRLEdBQ1YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBRSxDQUFDLFFBQVEsQ0FBQztZQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtnQkFDekIsT0FBTzthQUNSO1lBQ0Qsb0VBQW9FO1lBQ3BFLFFBQVEsQ0FBQyxRQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzdDLElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsTUFBTSxXQUFXLENBQUMsK0JBQTZCLFFBQVEscUJBQWdCLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQztpQkFDekY7Z0JBQ0QsSUFBTSxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBVSxDQUFDLGFBQWE7b0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JGLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3hDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQzVFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsV0FBbUIsRUFBRSxnQkFBeUI7UUFDMUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQ1gsK0VBQ0ksV0FBYSxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxZQUFZLGdCQUFzQixDQUFDO1NBQ3pFO2FBQU0sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNyQixNQUFNLElBQUksS0FBSyxDQUNYLCtFQUNJLFdBQWEsQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7b0JBQ3JDLDhDQUE4QztvQkFDOUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM5QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtRQUNELDREQUE0RDtRQUM1RCxnRkFBZ0Y7UUFDaEYsc0JBQXNCO1FBQ3RCLDZEQUE2RDtRQUM3RCxpREFBaUQ7UUFDakQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsV0FBbUIsRUFBRSxnQkFBd0I7UUFDN0QsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxZQUFZLG9CQUEwQixDQUFDO1NBQzdFO1FBQ0QsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsU0FBbUIsRUFBRSxPQUFpQjtRQUFyRCxpQkFjQztRQVpDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDckUsSUFBTSxlQUFlLEdBQWlDLEVBQUUsQ0FBQztRQUN6RCxLQUFLLENBQUMsT0FBTyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQzFCLFVBQUEsUUFBUTtZQUNKLE9BQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQzVFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRHBDLENBQ29DLENBQUMsRUFIckMsQ0FHcUMsQ0FBQyxDQUFDO1FBQ25ELElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDO1lBQ0osZUFBZSxFQUFFLHVCQUF1QixDQUFDLEtBQUssQ0FBQztZQUMvQyxtQkFBbUIsRUFBRSxtQkFBbUI7U0FDekMsQ0FBQyxFQUhHLENBR0gsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsU0FBbUIsRUFBRSxPQUFpQjtRQUFwRCxpQkFZQztRQVZDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLE9BQU8sQ0FDVCxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUMxQixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FDbkUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBRHRCLENBQ3NCLENBQUMsRUFGL0IsQ0FFK0IsQ0FBQyxDQUFDO1FBQzdDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU87WUFDTCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsS0FBSyxDQUFDO1lBQy9DLG1CQUFtQixFQUFFLG1CQUFtQjtTQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVPLDBDQUFvQixHQUE1QixVQUNJLFNBQXdCLEVBQUUsSUFBb0IsRUFBRSxTQUF3QjtRQUQ1RSxpQkEyREM7UUF6REMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWSxFQUFFLGFBQWE7WUFDakQsOEZBQThGO1lBQzlGLG9GQUFvRjtZQUVwRiw4Q0FBOEM7WUFDOUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUxRSxtREFBbUQ7WUFDbkQsNERBQTREO1lBQzVELDhFQUE4RTtZQUM5RSxrREFBa0Q7WUFDbEQsSUFBTSxrQkFBa0IsWUFFbkIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFYLENBQVcsQ0FBQyxFQUM5RCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLEVBQ3pELFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQWhCLENBQWdCLENBQUMsRUFDdkQsWUFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUd2RCxLQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUN6RixDQUFDO1lBRUYsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1lBQ3JELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUN4QyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVEsYUFBYSxTQUFJLFNBQVcsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUJBQXFCLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLFNBQVM7Z0JBQy9DLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNyQixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNyQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM3QyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxTQUFTLG9CQUEwQixFQUFFO2dCQUN2Qyw4REFBOEQ7Z0JBQzlELFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM1QyxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDekIsT0FBTztxQkFDUjtvQkFDRCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxLQUFJLENBQUMscUJBQXFCLENBQ3RCLFNBQVMsRUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGNBQVMsV0FBYSxFQUFFLFlBQVksRUFDOUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUMxRSxxQkFBcUIsQ0FBQyxDQUFDO29CQUMzQixLQUFJLENBQUMscUJBQXFCLENBQ3RCLFNBQVMsRUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQUksV0FBYSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQ25GLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRU8sbURBQTZCLEdBQXJDLFVBQXNDLFVBQWlDOztRQUNyRSxJQUFNLE1BQU0sR0FBbUIsRUFBRSxDQUFDOztZQUNsQyxLQUFzQixJQUFBLGVBQUEsU0FBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7Z0JBQTdCLElBQUksU0FBUyx1QkFBQTtnQkFDaEIsSUFBTSxLQUFLLEdBQUcsK0JBQStCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDekUsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3pDO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTywyQ0FBcUIsR0FBN0IsVUFDSSxHQUFrQixFQUFFLFdBQW1CLEVBQUUsVUFBbUMsRUFDNUUsUUFBa0MsRUFBRSxVQUF1QyxFQUMzRSxxQkFBdUM7O1FBQ25DLElBQUEsMERBQ21ELEVBRGxELDRCQUF3QixFQUFFLG9CQUN3QixDQUFDO1FBQzFELENBQUEsS0FBQSxHQUFHLENBQUMsVUFBVSxDQUFBLENBQUMsSUFBSSxvQkFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQzNELFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsR0FBRTtJQUNyRixDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLGFBQWdDLEVBQUUsTUFBbUI7UUFBdkUsaUJBK0JDO1FBOUJDLElBQU0sTUFBTSxHQUFpQixFQUFFLENBQUM7UUFDaEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUVwQyx5Q0FBeUM7UUFDekMsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEUsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzlCLElBQU0sU0FBUyxHQUErQixFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxhQUFhO2dCQUNuQyxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNFLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7b0JBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDeEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVUsQ0FBQyxRQUFVLENBQUM7Z0JBQzVDLHdFQUF3RTtnQkFDeEUscUVBQXFFO2dCQUNyRSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBVSxDQUFDLFdBQVksQ0FBQztnQkFDckQsSUFBTSxtQkFBbUIsR0FDckIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUFTLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFFLEdBQUU7WUFDNUYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQ0ksRUFBcUQsRUFDckQsT0FBd0M7UUFGNUMsaUJBeUJDO1lBeEJJLHdEQUF5QixFQUFFLGdCQUFLO1FBRW5DLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBRXBELElBQU0sVUFBVSxHQUFHLFVBQUMsUUFBZ0I7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUVGLEtBQUssQ0FBQyxPQUFPLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3JGLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUZ4QyxDQUV3QyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLE9BQU8sQ0FDWCxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFEMUQsQ0FDMEQsQ0FBQyxDQUFDO1FBRXhFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVztZQUM3QixVQUFVLFdBQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUN4RSxDQUFDLEVBSFMsQ0FHVCxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU8sNENBQXNCLEdBQTlCLFVBQ0ksUUFBZ0IsRUFBRSxjQUE4QyxFQUNoRSxPQUFzQjtRQUYxQixpQkFJQztRQURDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFTywyQ0FBcUIsR0FBN0IsVUFDSSxRQUFnQixFQUFFLHlCQUFxRSxFQUN2RixVQUEwQixFQUFFLEtBQXFCLEVBQUUsU0FBb0MsRUFDdkYsV0FBd0MsRUFBRSxPQUFzQjtRQUhwRSxpQkFrRUM7UUE5REMsSUFBTSxNQUFNLEdBQWlCLEVBQUUsQ0FBQztRQUVoQyxJQUFNLGNBQWMsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDdEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUN2RixNQUFNLENBQUMsQ0FBQztRQUVaLHdDQUF3QztRQUN4QyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYTtZQUM5QixJQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRixJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRTtnQkFDakMsSUFBTSxNQUFNLEdBQUcseUJBQXlCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBRSxDQUFDO2dCQUM3RCxNQUFNO29CQUNGLEtBQUssQ0FBQyxnREFDRixjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQUcsQ0FBQyxDQUFDO2dCQUVuRCxJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxRQUFVLENBQUMsT0FBUSxDQUFDO2dCQUNwRCxJQUFNLG1CQUFtQixHQUFHLGlCQUFrQixDQUFDLFFBQVUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFFOUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFO29CQUN4QixPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELElBQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFFN0UsMkNBQTJDO2dCQUMzQyxJQUFNLG9CQUFrQixHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7Z0JBRWxELElBQU0sWUFBVSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNyRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQXpELENBQXlELENBQUMsQ0FBQztnQkFFdEUsWUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7b0JBQzFCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDdEIsb0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDdEU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsa0NBQWtDO2dCQUNsQyxJQUFNLGdCQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztnQkFFOUMsSUFBTSxPQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQzNDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztnQkFFbkUsT0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ2hCLGdCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsa0JBQWtCLENBQ2QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUN6RSxvQkFBa0IsRUFBRSxnQkFBYyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsa0JBQWtCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDcEIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RSxJQUFJLFlBQVksRUFBRTtnQkFDaEIsYUFBYSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsNENBQXNCLEdBQXRCLFVBQXVCLEtBQXNDO1FBQTdELGlCQU1DO1FBTEMsa0ZBQWtGO1FBQ2xGLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBa0IsVUFBQyxDQUFDLEVBQUUsSUFBSTtZQUMzQyxDQUFDLENBQUMsSUFBSSxPQUFOLENBQUMsV0FBUyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUU7WUFDckUsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU8seUNBQW1CLEdBQTNCLFVBQTRCLFFBQWdCLEVBQUUsV0FBd0M7UUFBdEYsaUJBVUM7UUFSQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFFekYsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2RCxPQUFPLENBQUMsRUFBQyxRQUFRLFVBQUEsRUFBRSxVQUFVLFdBQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUM5RjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxhQUFnQztRQUE3QyxpQkFPQztRQU5RLElBQUEsbUVBQXlCLEVBQUUsMkJBQUssQ0FBa0I7UUFDekQsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FDM0IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3JGLElBQUksQ0FBQyxXQUFXLENBQUMsRUFGYixDQUVhLENBQUMsQ0FBQztRQUMzQixPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sc0NBQWdCLEdBQXhCLFVBQ0ksVUFBa0IsRUFBRSx5QkFBcUUsRUFDekYsVUFBMEIsRUFBRSxLQUFxQixFQUFFLFNBQW9DLEVBQ3ZGLFdBQXdDO1FBSDVDLGlCQXFEQztRQWpEQyxJQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFNLGNBQWMsR0FBb0IsRUFBRSxDQUFDO1FBRTNDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVqRixjQUFjLENBQUMsSUFBSSxPQUFuQixjQUFjLFdBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxHQUFFO1FBRTlGLHlCQUF5QjtRQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztRQUVsRixxQkFBcUI7UUFDckIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFNLE9BQU8sQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUN6QixPQUFPO2FBQ1I7WUFDRCxJQUFNLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUNaLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUcsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsaUJBQWlCO1lBQ2pCLElBQU0sbUJBQW1CLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEYsb0VBQW9FO1lBQ3BFLFFBQVEsQ0FBQyxRQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsY0FBYztnQkFDN0QseURBQXlEO2dCQUN6RCw2REFBNkQ7Z0JBQzdELElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRCxjQUFjLENBQUMsSUFBSSxDQUNmLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtvQkFDeEMsY0FBYyxDQUFDLElBQUksQ0FDZixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ25GO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUN2QyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUN4RixVQUFVLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFO1lBQzNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxvQ0FBYyxHQUF0QixVQUNJLFdBQW1CLEVBQUUsVUFBMEIsRUFBRSxLQUFxQixFQUN0RSxTQUFvQyxFQUFFLFdBQXdDLEVBQzlFLFlBQTJCO1FBSC9CLGlCQWlEQztRQTdDQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7YUFDekMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztRQUN2RixJQUFNLFFBQVEsWUFNTCxTQUFTLENBQUMsR0FBRyxDQUNaLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQztZQUNQLE9BQU8sRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUU7WUFDeEUsUUFBUSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRTtTQUMzRSxDQUFDLEVBSE0sQ0FHTixDQUFDLEVBQ0osVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7WUFDTixPQUFPLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBRTtZQUN6RCxRQUFRLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBRTtTQUM1RCxDQUFDLEVBSEssQ0FHTCxDQUFDLEVBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDO1lBQ04sT0FBTyxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFFO1lBQ3BELFFBQVEsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBRTtTQUN2RCxDQUFDLEVBSEssQ0FHTCxDQUFDLEVBQ2IsV0FBVyxDQUFDLEdBQUcsQ0FDZCxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7WUFDTixPQUFPLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUU7WUFDakUsUUFBUSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsSUFBSTtTQUN4RSxDQUFDLEVBSEssQ0FHTCxDQUFDLENBQ1IsQ0FBQztRQUNOLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUM7UUFDSCxJQUFBLGlMQUUyRCxFQUYxRCxjQUFJLEVBQUUsc0JBRW9ELENBQUM7UUFDbEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDckIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3hCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JGLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUTthQUN4QixDQUFDLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxXQUFXLEdBQUcsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RixJQUFNLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksZUFBZSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLG9DQUFjLEdBQXRCLFVBQXVCLFNBQXdCLEVBQUUsUUFBaUM7UUFDaEYsSUFBTSxTQUFTLEdBQThCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRSxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNiLEtBQUssRUFBRSwrQkFBK0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBQzdFLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLCtCQUErQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLG1CQUFtQixDQUFDO2dCQUN2RixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO2FBQ25DLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyw4Q0FBd0IsR0FBaEMsVUFDSSxTQUF3QixFQUFFLFFBQWtDLEVBQzVELFFBQWlDLEVBQUUsVUFBa0I7UUFDdkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNFLElBQU0sa0JBQWtCLEdBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO2FBQ25GLFlBQVksQ0FBQztRQUN0QixJQUFNLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7UUFDNUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsK0NBQStDO1lBQy9DLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkY7UUFDRCxJQUFNLFlBQVksR0FBd0IsRUFBRSxDQUFDO1FBQzdDLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNyQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELCtDQUErQztZQUMvQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3JCLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzRCxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDbEMsQ0FBQyxDQUFDLFVBQVUsQ0FDUixRQUFRLENBQUMsUUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztTQUNqRixDQUFDLENBQUM7YUFDRixVQUFVLENBQ1AsQ0FBQyxDQUFDLFVBQVUsQ0FDUixXQUFXLENBQUMsZ0JBQWdCLEVBQzVCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUUsQ0FBQyxFQUNsRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDM0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sdUNBQWlCLEdBQXpCLFVBQ0ksU0FBd0IsRUFBRSxRQUFrQyxFQUM1RCxRQUFpQyxFQUFFLG9CQUFpRCxFQUNwRixlQUF3QyxFQUFFLFVBQWtCO1FBQ3hELElBQUEsa0VBQzJELEVBRDFELDRCQUF3QixFQUFFLG9CQUNnQyxDQUFDO1FBQ2xFLElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUYsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDbEQsU0FBUyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksZUFBZSxFQUFFO1lBQ25CLHVCQUF1QixDQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFDbkYsVUFBVSxDQUFDLENBQUM7U0FDakI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFDSSxRQUFrQyxFQUFFLFFBQWlDLEVBQ3JFLG9CQUFpRDtRQUZyRCxpQkFpQkM7UUFiQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztTQUM3RDtRQUNELElBQU0sbUJBQW1CLEdBQUcsUUFBUyxDQUFDLFFBQVUsQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRSxJQUFNLFVBQVUsR0FDWixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUM7UUFDL0YsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQzdDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FDckMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFVLENBQUMsT0FBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFDM0UsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVUsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sMENBQW9CLEdBQTVCLFVBQTZCLFdBQW1CO1FBQWhELGlCQWtDQztRQWpDQyxJQUFNLFVBQVUsR0FDWixVQUFDLE1BQW9CLEVBQUUsVUFBZ0MsRUFBRSxZQUE0QjtZQUE5RCwyQkFBQSxFQUFBLGlCQUFnQztZQUFFLDZCQUFBLEVBQUEsbUJBQTRCO1lBQ25GLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxZQUFZLENBQUMsRUFBRTtnQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBc0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUcsQ0FBQyxDQUFDO2FBQ2pGO1lBQ0QsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELElBQUEsc0VBQzhELEVBRDdELHNCQUFRLEVBQUUsY0FBSSxFQUFFLG9CQUM2QyxDQUFDO1lBQ3JFLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdkUsb0ZBQW9GO1lBQ3BGLGdGQUFnRjtZQUNoRixtRkFBbUY7WUFDbkYsNEJBQTRCO1lBQzVCLElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDM0UsSUFBTSxVQUFVLEdBQUcsWUFBWSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFFeEUsMkVBQTJFO1lBQzNFLHlFQUF5RTtZQUN6RSw0RUFBNEU7WUFDNUUsK0VBQStFO1lBQy9FLHNDQUFzQztZQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDNUMsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQ2pFLElBQU0sYUFBYSxHQUNmLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEYsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNqQixVQUFDLElBQUksRUFBRSxVQUFVLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFyQixDQUFxQixFQUM3QixDQUFDLENBQUMsVUFBVSxDQUN0QixJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO1FBRU4sT0FBTyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsWUFBWSxFQUFFLElBQUksWUFBWSxFQUFFLEVBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU8sMkNBQXFCLEdBQTdCLFVBQThCLGdCQUF3QixFQUFFLGtCQUEwQjtRQUNoRixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFDSSxVQUFrQixFQUFFLFFBQWtDLEVBQ3RELGtCQUE2QyxFQUFFLFNBQWtCLEVBQ2pFLFVBQWtCO1FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsU0FBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQU0sa0JBQWtCLEdBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUYsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekYsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTywwQ0FBb0IsR0FBNUIsVUFBNkIsVUFBa0IsRUFBRSxHQUFrQjtRQUNqRSxPQUFPLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFVBQW1CLEVBQUUsZUFBbUM7O1FBQ3JFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzNFLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxlQUFlLEVBQUU7WUFDMUIsSUFBTSxhQUFhLEdBQWdCLEVBQUUsQ0FBQzs7Z0JBQ3RDLEtBQXVCLElBQUEsS0FBQSxTQUFBLGVBQWUsQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTdDLElBQU0sUUFBUSxXQUFBO29CQUNqQixJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7d0JBQzVELEtBQXdCLElBQUEsOEJBQUEsU0FBQSxVQUFVLENBQUEsQ0FBQSxzQ0FBQSw4REFBRTs0QkFBL0IsSUFBTSxTQUFTLHVCQUFBOzRCQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUMvQjs7Ozs7Ozs7O2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLGFBQWEsQ0FBQztTQUN0QjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsU0FBUyxjQUFjLENBQ25CLE1BQW9CLEVBQUUsVUFBb0MsRUFDMUQsYUFBK0I7O1lBRFQsMkJBQUEsRUFBQSxpQkFBaUIsR0FBRyxFQUFnQjtZQUMxRCw4QkFBQSxFQUFBLGtCQUErQjtZQUNqQyxpRUFBaUU7WUFDakUsK0RBQStEO1lBQy9ELElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzFDLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1lBQ0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixJQUFNLFVBQVUsR0FDWixjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O2dCQUM5RixLQUF3QixJQUFBLGVBQUEsU0FBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7b0JBQS9CLElBQU0sU0FBUyx1QkFBQTtvQkFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3ZFOzs7Ozs7Ozs7WUFDRCxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFzQkQsSUEwc0JDOztBQUVELFNBQVMsZ0JBQWdCLENBQUMsU0FBd0I7SUFDaEQsaUVBQWlFO0lBQ2pFLDJFQUEyRTtJQUMzRSw2REFBNkQ7SUFDN0QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFHRCxTQUFTLHVCQUF1QixDQUM1QixjQUFvQyxFQUFFLGFBQWlDLEVBQUUsU0FBa0IsRUFDM0YsVUFBa0I7SUFDcEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FDdkMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxhQUFxQixFQUFFLElBQWEsRUFBRSxNQUFjO0lBQzVFLE9BQU8sS0FBRyxhQUFhLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQVcsTUFBUSxDQUFDO0FBQ25FLENBQUM7QUE2QkQsTUFBTSxVQUFVLGdCQUFnQixDQUM1QixTQUFtQixFQUFFLElBQTBCLEVBQUUsb0JBQTBDLEVBQzNGLGdCQUF5QztJQUMzQyxJQUFNLEtBQUssR0FBRyxxQ0FBcUMsQ0FDL0MsU0FBUyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdELE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FDdkMsU0FBbUIsRUFBRSxJQUEwQixFQUFFLG9CQUEwQyxFQUMzRixnQkFBeUM7SUFDM0MsT0FBTyx1QkFBdUIsQ0FDMUIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsZUFBa0M7SUFDakUsSUFBSSxlQUFlLENBQUMsb0JBQW9CLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtRQUN2RixJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUNyRCxVQUFBLENBQUMsSUFBSSxPQUFBLDJDQUF5QyxDQUFDLENBQUMsSUFBSSxZQUFPLENBQUMsQ0FBQyxRQUFRLGNBQ2pFLENBQUMsQ0FBQyxJQUFJLGdDQUE2QixFQURsQyxDQUNrQyxDQUFDLENBQUM7UUFDN0MsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQUVELHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQscUNBQXFDO0FBQ3JDLFNBQVMscUNBQXFDLENBQzFDLFNBQW1CLEVBQUUsSUFBMEIsRUFBRSxvQkFBMEMsRUFDM0YsZ0JBQXlDO0lBQzNDLElBQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFDcEMsSUFBTSxLQUFLLEdBQXFCLEVBQUUsQ0FBQztJQUVuQyxJQUFNLFNBQVMsR0FBRyxVQUFDLFFBQWdCO1FBQ2pDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6RixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtZQUNyQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFDOUYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDckQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FDdkIsSUFBMEIsRUFBRSxvQkFBMEMsRUFDdEUsZ0JBQXlDLEVBQUUsUUFBZ0I7SUFDN0QsSUFBTSxrQkFBa0IsR0FBbUIsRUFBRSxDQUFDO0lBQzlDLElBQU0sVUFBVSxHQUFtQixFQUFFLENBQUM7SUFDdEMsSUFBTSxLQUFLLEdBQW1CLEVBQUUsQ0FBQztJQUNqQyxJQUFNLFdBQVcsR0FBZ0MsRUFBRSxDQUFDO0lBQ3BELElBQU0sU0FBUyxHQUE4QixFQUFFLENBQUM7SUFDaEQsSUFBTSxhQUFhLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLElBQUkscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxrRUFBa0U7SUFDbEUsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyw0RUFBNEU7SUFDNUUscUVBQXFFO0lBQ3JFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxhQUFhLEVBQUU7UUFDdkMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDekQsSUFBTSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtnQkFDcEQsT0FBTzthQUNSO1lBQ0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksVUFBVSxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3JDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQix3RkFBd0Y7b0JBQ3hGLHNGQUFzRjtvQkFDdEYsd0ZBQXdGO29CQUN4RixtRkFBbUY7b0JBQ25GLDZCQUE2QjtvQkFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNqRCwwQ0FBMEM7d0JBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3pCO3lCQUFNO3dCQUNMLDRFQUE0RTt3QkFDNUUsZUFBZTt3QkFDZixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO3FCQUFNLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMxQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDOUMsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyRSxJQUFJLFFBQVEsRUFBRTt3QkFDWixVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUMxQjtpQkFDRjtxQkFBTSxJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDaEQsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0UsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YscUJBQXFCO29CQUNqQixxQkFBcUIsSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDOUU7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTztRQUNMLFFBQVEsVUFBQTtRQUNSLFVBQVUsWUFBQTtRQUNWLGtCQUFrQixvQkFBQTtRQUNsQixLQUFLLE9BQUE7UUFDTCxTQUFTLFdBQUE7UUFDVCxXQUFXLGFBQUE7UUFDWCxxQkFBcUIsdUJBQUE7S0FDdEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQ3JDLElBQTBCLEVBQUUsb0JBQTBDLEVBQ3RFLGdCQUF5QyxFQUFFLFFBQWdCO0lBQzdELElBQU0sV0FBVyxHQUFnQyxFQUFFLENBQUM7SUFDcEQsSUFBTSxjQUFjLEdBQW1DLEVBQUUsQ0FBQztJQUMxRCxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNoRCxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUN6RCxJQUFNLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEUsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO2dCQUNwRCxPQUFPO2FBQ1I7WUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO2dCQUNyQyxJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekMsSUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0UsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0Y7cUJBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzlDLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRSxJQUFJLE1BQU0sRUFBRTt3QkFDVixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM3QjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBQyxRQUFRLFVBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxjQUFjLGdCQUFBLEVBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyw2QkFBNkIsQ0FBQyxJQUEwQixFQUFFLFFBQWE7SUFDOUUsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFFbEM7UUFBQTtRQWFBLENBQUM7UUFaQyw0QkFBVSxHQUFWLFVBQVcsR0FBVSxFQUFFLE9BQVk7WUFBbkMsaUJBRUM7WUFEQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFJLEVBQUUsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsZ0NBQWMsR0FBZCxVQUFlLEdBQXlCLEVBQUUsT0FBWTtZQUF0RCxpQkFFQztZQURDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFJLEVBQUUsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsZ0NBQWMsR0FBZCxVQUFlLEtBQVUsRUFBRSxPQUFZLElBQVEsQ0FBQztRQUNoRCw0QkFBVSxHQUFWLFVBQVcsS0FBVSxFQUFFLE9BQVk7WUFDakMsSUFBSSxLQUFLLFlBQVksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZFLHFCQUFxQixHQUFHLElBQUksQ0FBQzthQUM5QjtRQUNILENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFFRCxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsT0FBTyxxQkFBcUIsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLGFBQStCO0lBQ2hFLElBQU0sWUFBWSxHQUE4QixFQUFFLENBQUM7SUFDbkQsSUFBTSx5QkFBeUIsR0FBRyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztJQUNuRixJQUFNLHFCQUFxQixHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO0lBRXRELGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtZQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQy9CLFVBQUEsQ0FBQyxJQUFJLE9BQUEseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFNLG9CQUFvQixHQUFtQixFQUFFLENBQUM7SUFDaEQscUJBQXFCLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztRQUMvQixJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTztRQUNMLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLHlCQUF5QiwyQkFBQTtRQUN6QixvQkFBb0Isc0JBQUE7UUFDcEIsS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLEtBQXVCO0lBQ3RELE9BQU8sdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YSwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIENvbXBpbGVQaXBlTWV0YWRhdGEsIENvbXBpbGVQaXBlU3VtbWFyeSwgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsIENvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGEsIENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEsIENvbXBpbGVUeXBlTWV0YWRhdGEsIENvbXBpbGVUeXBlU3VtbWFyeSwgY29tcG9uZW50RmFjdG9yeU5hbWUsIGZsYXR0ZW4sIGlkZW50aWZpZXJOYW1lLCB0ZW1wbGF0ZVNvdXJjZVVybH0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtDb25zdGFudFBvb2x9IGZyb20gJy4uL2NvbnN0YW50X3Bvb2wnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lc3NhZ2VCdW5kbGV9IGZyb20gJy4uL2kxOG4vbWVzc2FnZV9idW5kbGUnO1xuaW1wb3J0IHtjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlLCBJZGVudGlmaWVyc30gZnJvbSAnLi4vaWRlbnRpZmllcnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlQ29tcGlsZXJ9IGZyb20gJy4uL2luamVjdGFibGVfY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnLi4vbWV0YWRhdGFfcmVzb2x2ZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtyZW1vdmVXaGl0ZXNwYWNlc30gZnJvbSAnLi4vbWxfcGFyc2VyL2h0bWxfd2hpdGVzcGFjZXMnO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtOZ01vZHVsZUNvbXBpbGVyfSBmcm9tICcuLi9uZ19tb2R1bGVfY29tcGlsZXInO1xuaW1wb3J0IHtPdXRwdXRFbWl0dGVyfSBmcm9tICcuLi9vdXRwdXQvYWJzdHJhY3RfZW1pdHRlcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7UGFyc2VFcnJvcn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge2NvbXBpbGVOZ01vZHVsZUZyb21SZW5kZXIyIGFzIGNvbXBpbGVSM01vZHVsZX0gZnJvbSAnLi4vcmVuZGVyMy9yM19tb2R1bGVfY29tcGlsZXInO1xuaW1wb3J0IHtjb21waWxlUGlwZUZyb21SZW5kZXIyIGFzIGNvbXBpbGVSM1BpcGV9IGZyb20gJy4uL3JlbmRlcjMvcjNfcGlwZV9jb21waWxlcic7XG5pbXBvcnQge2h0bWxBc3RUb1JlbmRlcjNBc3R9IGZyb20gJy4uL3JlbmRlcjMvcjNfdGVtcGxhdGVfdHJhbnNmb3JtJztcbmltcG9ydCB7Y29tcGlsZUNvbXBvbmVudEZyb21SZW5kZXIyIGFzIGNvbXBpbGVSM0NvbXBvbmVudCwgY29tcGlsZURpcmVjdGl2ZUZyb21SZW5kZXIyIGFzIGNvbXBpbGVSM0RpcmVjdGl2ZX0gZnJvbSAnLi4vcmVuZGVyMy92aWV3L2NvbXBpbGVyJztcbmltcG9ydCB7RG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSBmcm9tICcuLi9zY2hlbWEvZG9tX2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5JztcbmltcG9ydCB7Q29tcGlsZWRTdHlsZXNoZWV0LCBTdHlsZUNvbXBpbGVyfSBmcm9tICcuLi9zdHlsZV9jb21waWxlcic7XG5pbXBvcnQge1N1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi4vc3VtbWFyeV9yZXNvbHZlcic7XG5pbXBvcnQge0JpbmRpbmdQYXJzZXJ9IGZyb20gJy4uL3RlbXBsYXRlX3BhcnNlci9iaW5kaW5nX3BhcnNlcic7XG5pbXBvcnQge1RlbXBsYXRlQXN0fSBmcm9tICcuLi90ZW1wbGF0ZV9wYXJzZXIvdGVtcGxhdGVfYXN0JztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJy4uL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtlcnJvciwgbmV3QXJyYXksIE91dHB1dENvbnRleHQsIHN5bnRheEVycm9yLCBWYWx1ZVZpc2l0b3IsIHZpc2l0VmFsdWV9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHtUeXBlQ2hlY2tDb21waWxlcn0gZnJvbSAnLi4vdmlld19jb21waWxlci90eXBlX2NoZWNrX2NvbXBpbGVyJztcbmltcG9ydCB7Vmlld0NvbXBpbGVyLCBWaWV3Q29tcGlsZVJlc3VsdH0gZnJvbSAnLi4vdmlld19jb21waWxlci92aWV3X2NvbXBpbGVyJztcblxuaW1wb3J0IHtBb3RDb21waWxlckhvc3R9IGZyb20gJy4vY29tcGlsZXJfaG9zdCc7XG5pbXBvcnQge0FvdENvbXBpbGVyT3B0aW9uc30gZnJvbSAnLi9jb21waWxlcl9vcHRpb25zJztcbmltcG9ydCB7R2VuZXJhdGVkRmlsZX0gZnJvbSAnLi9nZW5lcmF0ZWRfZmlsZSc7XG5pbXBvcnQge0xhenlSb3V0ZSwgbGlzdExhenlSb3V0ZXMsIHBhcnNlTGF6eVJvdXRlfSBmcm9tICcuL2xhenlfcm91dGVzJztcbmltcG9ydCB7UGFydGlhbE1vZHVsZX0gZnJvbSAnLi9wYXJ0aWFsX21vZHVsZSc7XG5pbXBvcnQge1N0YXRpY1JlZmxlY3Rvcn0gZnJvbSAnLi9zdGF0aWNfcmVmbGVjdG9yJztcbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuL3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtTdGF0aWNTeW1ib2xSZXNvbHZlcn0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sX3Jlc29sdmVyJztcbmltcG9ydCB7Y3JlYXRlRm9ySml0U3R1Yiwgc2VyaWFsaXplU3VtbWFyaWVzfSBmcm9tICcuL3N1bW1hcnlfc2VyaWFsaXplcic7XG5pbXBvcnQge25nZmFjdG9yeUZpbGVQYXRoLCBub3JtYWxpemVHZW5GaWxlU3VmZml4LCBzcGxpdFR5cGVzY3JpcHRTdWZmaXgsIHN1bW1hcnlGaWxlTmFtZSwgc3VtbWFyeUZvckppdEZpbGVOYW1lfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBlbnVtIFN0dWJFbWl0RmxhZ3Mge1xuICBCYXNpYyA9IDEgPDwgMCxcbiAgVHlwZUNoZWNrID0gMSA8PCAxLFxuICBBbGwgPSBUeXBlQ2hlY2sgfCBCYXNpY1xufVxuXG5leHBvcnQgY2xhc3MgQW90Q29tcGlsZXIge1xuICBwcml2YXRlIF90ZW1wbGF0ZUFzdENhY2hlID1cbiAgICAgIG5ldyBNYXA8U3RhdGljU3ltYm9sLCB7dGVtcGxhdGU6IFRlbXBsYXRlQXN0W10sIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXX0+KCk7XG4gIHByaXZhdGUgX2FuYWx5emVkRmlsZXMgPSBuZXcgTWFwPHN0cmluZywgTmdBbmFseXplZEZpbGU+KCk7XG4gIHByaXZhdGUgX2FuYWx5emVkRmlsZXNGb3JJbmplY3RhYmxlcyA9IG5ldyBNYXA8c3RyaW5nLCBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlcz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NvbmZpZzogQ29tcGlsZXJDb25maWcsIHByaXZhdGUgX29wdGlvbnM6IEFvdENvbXBpbGVyT3B0aW9ucyxcbiAgICAgIHByaXZhdGUgX2hvc3Q6IEFvdENvbXBpbGVySG9zdCwgcmVhZG9ubHkgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsXG4gICAgICBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgcHJpdmF0ZSBfdGVtcGxhdGVQYXJzZXI6IFRlbXBsYXRlUGFyc2VyLFxuICAgICAgcHJpdmF0ZSBfc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgcHJpdmF0ZSBfdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsXG4gICAgICBwcml2YXRlIF90eXBlQ2hlY2tDb21waWxlcjogVHlwZUNoZWNrQ29tcGlsZXIsIHByaXZhdGUgX25nTW9kdWxlQ29tcGlsZXI6IE5nTW9kdWxlQ29tcGlsZXIsXG4gICAgICBwcml2YXRlIF9pbmplY3RhYmxlQ29tcGlsZXI6IEluamVjdGFibGVDb21waWxlciwgcHJpdmF0ZSBfb3V0cHV0RW1pdHRlcjogT3V0cHV0RW1pdHRlcixcbiAgICAgIHByaXZhdGUgX3N1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4sXG4gICAgICBwcml2YXRlIF9zeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIpIHt9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmNsZWFyQ2FjaGUoKTtcbiAgfVxuXG4gIGFuYWx5emVNb2R1bGVzU3luYyhyb290RmlsZXM6IHN0cmluZ1tdKTogTmdBbmFseXplZE1vZHVsZXMge1xuICAgIGNvbnN0IGFuYWx5emVSZXN1bHQgPSBhbmFseXplQW5kVmFsaWRhdGVOZ01vZHVsZXMoXG4gICAgICAgIHJvb3RGaWxlcywgdGhpcy5faG9zdCwgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIpO1xuICAgIGFuYWx5emVSZXN1bHQubmdNb2R1bGVzLmZvckVhY2goXG4gICAgICAgIG5nTW9kdWxlID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIubG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhKFxuICAgICAgICAgICAgbmdNb2R1bGUudHlwZS5yZWZlcmVuY2UsIHRydWUpKTtcbiAgICByZXR1cm4gYW5hbHl6ZVJlc3VsdDtcbiAgfVxuXG4gIGFuYWx5emVNb2R1bGVzQXN5bmMocm9vdEZpbGVzOiBzdHJpbmdbXSk6IFByb21pc2U8TmdBbmFseXplZE1vZHVsZXM+IHtcbiAgICBjb25zdCBhbmFseXplUmVzdWx0ID0gYW5hbHl6ZUFuZFZhbGlkYXRlTmdNb2R1bGVzKFxuICAgICAgICByb290RmlsZXMsIHRoaXMuX2hvc3QsIHRoaXMuX3N5bWJvbFJlc29sdmVyLCB0aGlzLl9tZXRhZGF0YVJlc29sdmVyKTtcbiAgICByZXR1cm4gUHJvbWlzZVxuICAgICAgICAuYWxsKGFuYWx5emVSZXN1bHQubmdNb2R1bGVzLm1hcChcbiAgICAgICAgICAgIG5nTW9kdWxlID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIubG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhKFxuICAgICAgICAgICAgICAgIG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlLCBmYWxzZSkpKVxuICAgICAgICAudGhlbigoKSA9PiBhbmFseXplUmVzdWx0KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FuYWx5emVGaWxlKGZpbGVOYW1lOiBzdHJpbmcpOiBOZ0FuYWx5emVkRmlsZSB7XG4gICAgbGV0IGFuYWx5emVkRmlsZSA9IHRoaXMuX2FuYWx5emVkRmlsZXMuZ2V0KGZpbGVOYW1lKTtcbiAgICBpZiAoIWFuYWx5emVkRmlsZSkge1xuICAgICAgYW5hbHl6ZWRGaWxlID1cbiAgICAgICAgICBhbmFseXplRmlsZSh0aGlzLl9ob3N0LCB0aGlzLl9zeW1ib2xSZXNvbHZlciwgdGhpcy5fbWV0YWRhdGFSZXNvbHZlciwgZmlsZU5hbWUpO1xuICAgICAgdGhpcy5fYW5hbHl6ZWRGaWxlcy5zZXQoZmlsZU5hbWUsIGFuYWx5emVkRmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBhbmFseXplZEZpbGU7XG4gIH1cblxuICBwcml2YXRlIF9hbmFseXplRmlsZUZvckluamVjdGFibGVzKGZpbGVOYW1lOiBzdHJpbmcpOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlcyB7XG4gICAgbGV0IGFuYWx5emVkRmlsZSA9IHRoaXMuX2FuYWx5emVkRmlsZXNGb3JJbmplY3RhYmxlcy5nZXQoZmlsZU5hbWUpO1xuICAgIGlmICghYW5hbHl6ZWRGaWxlKSB7XG4gICAgICBhbmFseXplZEZpbGUgPSBhbmFseXplRmlsZUZvckluamVjdGFibGVzKFxuICAgICAgICAgIHRoaXMuX2hvc3QsIHRoaXMuX3N5bWJvbFJlc29sdmVyLCB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLCBmaWxlTmFtZSk7XG4gICAgICB0aGlzLl9hbmFseXplZEZpbGVzRm9ySW5qZWN0YWJsZXMuc2V0KGZpbGVOYW1lLCBhbmFseXplZEZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYW5hbHl6ZWRGaWxlO1xuICB9XG5cbiAgZmluZEdlbmVyYXRlZEZpbGVOYW1lcyhmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGdlbkZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5fYW5hbHl6ZUZpbGUoZmlsZU5hbWUpO1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBjcmVhdGUgYSAubmdmYWN0b3J5IGlmIHdlIGhhdmUgYSBpbmplY3RhYmxlL2RpcmVjdGl2ZS9waXBlL05nTW9kdWxlXG4gICAgLy8gb3IgYSByZWZlcmVuY2UgdG8gYSBub24gc291cmNlIGZpbGUuXG4gICAgLy8gTm90ZTogVGhpcyBpcyBvdmVyZXN0aW1hdGluZyB0aGUgcmVxdWlyZWQgLm5nZmFjdG9yeSBmaWxlcyBhcyB0aGUgcmVhbCBjYWxjdWxhdGlvbiBpcyBoYXJkZXIuXG4gICAgLy8gT25seSBkbyB0aGlzIGZvciBTdHViRW1pdEZsYWdzLkJhc2ljLCBhcyBhZGRpbmcgYSB0eXBlIGNoZWNrIGJsb2NrXG4gICAgLy8gZG9lcyBub3QgY2hhbmdlIHRoaXMgZmlsZSAoYXMgd2UgZ2VuZXJhdGUgdHlwZSBjaGVjayBibG9ja3MgYmFzZWQgb24gTmdNb2R1bGVzKS5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hbGxvd0VtcHR5Q29kZWdlbkZpbGVzIHx8IGZpbGUuZGlyZWN0aXZlcy5sZW5ndGggfHwgZmlsZS5waXBlcy5sZW5ndGggfHxcbiAgICAgICAgZmlsZS5pbmplY3RhYmxlcy5sZW5ndGggfHwgZmlsZS5uZ01vZHVsZXMubGVuZ3RoIHx8IGZpbGUuZXhwb3J0c05vblNvdXJjZUZpbGVzKSB7XG4gICAgICBnZW5GaWxlTmFtZXMucHVzaChuZ2ZhY3RvcnlGaWxlUGF0aChmaWxlLmZpbGVOYW1lLCB0cnVlKSk7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVTdW1tYXJpZXNGb3JKaXQpIHtcbiAgICAgICAgZ2VuRmlsZU5hbWVzLnB1c2goc3VtbWFyeUZvckppdEZpbGVOYW1lKGZpbGUuZmlsZU5hbWUsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZmlsZVN1ZmZpeCA9IG5vcm1hbGl6ZUdlbkZpbGVTdWZmaXgoc3BsaXRUeXBlc2NyaXB0U3VmZml4KGZpbGUuZmlsZU5hbWUsIHRydWUpWzFdKTtcbiAgICBmaWxlLmRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyU3ltYm9sKSA9PiB7XG4gICAgICBjb25zdCBjb21wTWV0YSA9XG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROb25Ob3JtYWxpemVkRGlyZWN0aXZlTWV0YWRhdGEoZGlyU3ltYm9sKSEubWV0YWRhdGE7XG4gICAgICBpZiAoIWNvbXBNZXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIE5vdGU6IGNvbXBNZXRhIGlzIGEgY29tcG9uZW50IGFuZCB0aGVyZWZvcmUgdGVtcGxhdGUgaXMgbm9uIG51bGwuXG4gICAgICBjb21wTWV0YS50ZW1wbGF0ZSAhLnN0eWxlVXJscy5mb3JFYWNoKChzdHlsZVVybCkgPT4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gdGhpcy5faG9zdC5yZXNvdXJjZU5hbWVUb0ZpbGVOYW1lKHN0eWxlVXJsLCBmaWxlLmZpbGVOYW1lKTtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkVXJsKSB7XG4gICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYENvdWxkbid0IHJlc29sdmUgcmVzb3VyY2UgJHtzdHlsZVVybH0gcmVsYXRpdmUgdG8gJHtmaWxlLmZpbGVOYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5lZWRzU2hpbSA9IChjb21wTWV0YS50ZW1wbGF0ZSAhLmVuY2Fwc3VsYXRpb24gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0RW5jYXBzdWxhdGlvbikgPT09IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkO1xuICAgICAgICBnZW5GaWxlTmFtZXMucHVzaChfc3R5bGVzTW9kdWxlVXJsKG5vcm1hbGl6ZWRVcmwsIG5lZWRzU2hpbSwgZmlsZVN1ZmZpeCkpO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hbGxvd0VtcHR5Q29kZWdlbkZpbGVzKSB7XG4gICAgICAgICAgZ2VuRmlsZU5hbWVzLnB1c2goX3N0eWxlc01vZHVsZVVybChub3JtYWxpemVkVXJsLCAhbmVlZHNTaGltLCBmaWxlU3VmZml4KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBnZW5GaWxlTmFtZXM7XG4gIH1cblxuICBlbWl0QmFzaWNTdHViKGdlbkZpbGVOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRmlsZU5hbWU/OiBzdHJpbmcpOiBHZW5lcmF0ZWRGaWxlIHtcbiAgICBjb25zdCBvdXRwdXRDdHggPSB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KGdlbkZpbGVOYW1lKTtcbiAgICBpZiAoZ2VuRmlsZU5hbWUuZW5kc1dpdGgoJy5uZ2ZhY3RvcnkudHMnKSkge1xuICAgICAgaWYgKCFvcmlnaW5hbEZpbGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBBc3NlcnRpb24gZXJyb3I6IHJlcXVpcmUgdGhlIG9yaWdpbmFsIGZpbGUgZm9yIC5uZ2ZhY3RvcnkudHMgc3R1YnMuIEZpbGU6ICR7XG4gICAgICAgICAgICAgICAgZ2VuRmlsZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBvcmlnaW5hbEZpbGUgPSB0aGlzLl9hbmFseXplRmlsZShvcmlnaW5hbEZpbGVOYW1lKTtcbiAgICAgIHRoaXMuX2NyZWF0ZU5nRmFjdG9yeVN0dWIob3V0cHV0Q3R4LCBvcmlnaW5hbEZpbGUsIFN0dWJFbWl0RmxhZ3MuQmFzaWMpO1xuICAgIH0gZWxzZSBpZiAoZ2VuRmlsZU5hbWUuZW5kc1dpdGgoJy5uZ3N1bW1hcnkudHMnKSkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlU3VtbWFyaWVzRm9ySml0KSB7XG4gICAgICAgIGlmICghb3JpZ2luYWxGaWxlTmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYEFzc2VydGlvbiBlcnJvcjogcmVxdWlyZSB0aGUgb3JpZ2luYWwgZmlsZSBmb3IgLm5nc3VtbWFyeS50cyBzdHVicy4gRmlsZTogJHtcbiAgICAgICAgICAgICAgICAgIGdlbkZpbGVOYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZSA9IHRoaXMuX2FuYWx5emVGaWxlKG9yaWdpbmFsRmlsZU5hbWUpO1xuICAgICAgICBfY3JlYXRlRW1wdHlTdHViKG91dHB1dEN0eCk7XG4gICAgICAgIG9yaWdpbmFsRmlsZS5uZ01vZHVsZXMuZm9yRWFjaChuZ01vZHVsZSA9PiB7XG4gICAgICAgICAgLy8gY3JlYXRlIGV4cG9ydHMgdGhhdCB1c2VyIGNvZGUgY2FuIHJlZmVyZW5jZVxuICAgICAgICAgIGNyZWF0ZUZvckppdFN0dWIob3V0cHV0Q3R4LCBuZ01vZHVsZS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2VuRmlsZU5hbWUuZW5kc1dpdGgoJy5uZ3N0eWxlLnRzJykpIHtcbiAgICAgIF9jcmVhdGVFbXB0eVN0dWIob3V0cHV0Q3R4KTtcbiAgICB9XG4gICAgLy8gTm90ZTogZm9yIHRoZSBzdHVicywgd2UgZG9uJ3QgbmVlZCBhIHByb3BlcnR5IHNyY0ZpbGVVcmwsXG4gICAgLy8gYXMgbGF0ZXIgb24gaW4gZW1pdEFsbEltcGxzIHdlIHdpbGwgY3JlYXRlIHRoZSBwcm9wZXIgR2VuZXJhdGVkRmlsZXMgd2l0aCB0aGVcbiAgICAvLyBjb3JyZWN0IHNyY0ZpbGVVcmwuXG4gICAgLy8gVGhpcyBpcyBnb29kIGFzIGUuZy4gZm9yIC5uZ3N0eWxlLnRzIGZpbGVzIHdlIGNhbid0IGRlcml2ZVxuICAgIC8vIHRoZSB1cmwgb2YgY29tcG9uZW50cyBiYXNlZCBvbiB0aGUgZ2VuRmlsZVVybC5cbiAgICByZXR1cm4gdGhpcy5fY29kZWdlblNvdXJjZU1vZHVsZSgndW5rbm93bicsIG91dHB1dEN0eCk7XG4gIH1cblxuICBlbWl0VHlwZUNoZWNrU3R1YihnZW5GaWxlTmFtZTogc3RyaW5nLCBvcmlnaW5hbEZpbGVOYW1lOiBzdHJpbmcpOiBHZW5lcmF0ZWRGaWxlfG51bGwge1xuICAgIGNvbnN0IG9yaWdpbmFsRmlsZSA9IHRoaXMuX2FuYWx5emVGaWxlKG9yaWdpbmFsRmlsZU5hbWUpO1xuICAgIGNvbnN0IG91dHB1dEN0eCA9IHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoZ2VuRmlsZU5hbWUpO1xuICAgIGlmIChnZW5GaWxlTmFtZS5lbmRzV2l0aCgnLm5nZmFjdG9yeS50cycpKSB7XG4gICAgICB0aGlzLl9jcmVhdGVOZ0ZhY3RvcnlTdHViKG91dHB1dEN0eCwgb3JpZ2luYWxGaWxlLCBTdHViRW1pdEZsYWdzLlR5cGVDaGVjayk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRDdHguc3RhdGVtZW50cy5sZW5ndGggPiAwID9cbiAgICAgICAgdGhpcy5fY29kZWdlblNvdXJjZU1vZHVsZShvcmlnaW5hbEZpbGUuZmlsZU5hbWUsIG91dHB1dEN0eCkgOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgbG9hZEZpbGVzQXN5bmMoZmlsZU5hbWVzOiBzdHJpbmdbXSwgdHNGaWxlczogc3RyaW5nW10pOiBQcm9taXNlPFxuICAgICAge2FuYWx5emVkTW9kdWxlczogTmdBbmFseXplZE1vZHVsZXMsIGFuYWx5emVkSW5qZWN0YWJsZXM6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzW119PiB7XG4gICAgY29uc3QgZmlsZXMgPSBmaWxlTmFtZXMubWFwKGZpbGVOYW1lID0+IHRoaXMuX2FuYWx5emVGaWxlKGZpbGVOYW1lKSk7XG4gICAgY29uc3QgbG9hZGluZ1Byb21pc2VzOiBQcm9taXNlPE5nQW5hbHl6ZWRNb2R1bGVzPltdID0gW107XG4gICAgZmlsZXMuZm9yRWFjaChcbiAgICAgICAgZmlsZSA9PiBmaWxlLm5nTW9kdWxlcy5mb3JFYWNoKFxuICAgICAgICAgICAgbmdNb2R1bGUgPT5cbiAgICAgICAgICAgICAgICBsb2FkaW5nUHJvbWlzZXMucHVzaCh0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YShcbiAgICAgICAgICAgICAgICAgICAgbmdNb2R1bGUudHlwZS5yZWZlcmVuY2UsIGZhbHNlKSkpKTtcbiAgICBjb25zdCBhbmFseXplZEluamVjdGFibGVzID0gdHNGaWxlcy5tYXAodHNGaWxlID0+IHRoaXMuX2FuYWx5emVGaWxlRm9ySW5qZWN0YWJsZXModHNGaWxlKSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGxvYWRpbmdQcm9taXNlcykudGhlbihfID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5emVkTW9kdWxlczogbWVyZ2VBbmRWYWxpZGF0ZU5nRmlsZXMoZmlsZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXplZEluamVjdGFibGVzOiBhbmFseXplZEluamVjdGFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICB9XG5cbiAgbG9hZEZpbGVzU3luYyhmaWxlTmFtZXM6IHN0cmluZ1tdLCB0c0ZpbGVzOiBzdHJpbmdbXSk6XG4gICAgICB7YW5hbHl6ZWRNb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcywgYW5hbHl6ZWRJbmplY3RhYmxlczogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXNbXX0ge1xuICAgIGNvbnN0IGZpbGVzID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB0aGlzLl9hbmFseXplRmlsZShmaWxlTmFtZSkpO1xuICAgIGZpbGVzLmZvckVhY2goXG4gICAgICAgIGZpbGUgPT4gZmlsZS5uZ01vZHVsZXMuZm9yRWFjaChcbiAgICAgICAgICAgIG5nTW9kdWxlID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIubG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhKFxuICAgICAgICAgICAgICAgIG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlLCB0cnVlKSkpO1xuICAgIGNvbnN0IGFuYWx5emVkSW5qZWN0YWJsZXMgPSB0c0ZpbGVzLm1hcCh0c0ZpbGUgPT4gdGhpcy5fYW5hbHl6ZUZpbGVGb3JJbmplY3RhYmxlcyh0c0ZpbGUpKTtcbiAgICByZXR1cm4ge1xuICAgICAgYW5hbHl6ZWRNb2R1bGVzOiBtZXJnZUFuZFZhbGlkYXRlTmdGaWxlcyhmaWxlcyksXG4gICAgICBhbmFseXplZEluamVjdGFibGVzOiBhbmFseXplZEluamVjdGFibGVzLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVOZ0ZhY3RvcnlTdHViKFxuICAgICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBmaWxlOiBOZ0FuYWx5emVkRmlsZSwgZW1pdEZsYWdzOiBTdHViRW1pdEZsYWdzKSB7XG4gICAgbGV0IGNvbXBvbmVudElkID0gMDtcbiAgICBmaWxlLm5nTW9kdWxlcy5mb3JFYWNoKChuZ01vZHVsZU1ldGEsIG5nTW9kdWxlSW5kZXgpID0+IHtcbiAgICAgIC8vIE5vdGU6IHRoZSBjb2RlIGJlbG93IG5lZWRzIHRvIGV4ZWN1dGVkIGZvciBTdHViRW1pdEZsYWdzLkJhc2ljIGFuZCBTdHViRW1pdEZsYWdzLlR5cGVDaGVjayxcbiAgICAgIC8vIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgLm5nZmFjdG9yeSBmaWxlIHRvbyBtdWNoIHdoZW4gYWRkaW5nIHRoZSB0eXBlLWNoZWNrIGJsb2NrLlxuXG4gICAgICAvLyBjcmVhdGUgZXhwb3J0cyB0aGF0IHVzZXIgY29kZSBjYW4gcmVmZXJlbmNlXG4gICAgICB0aGlzLl9uZ01vZHVsZUNvbXBpbGVyLmNyZWF0ZVN0dWIob3V0cHV0Q3R4LCBuZ01vZHVsZU1ldGEudHlwZS5yZWZlcmVuY2UpO1xuXG4gICAgICAvLyBhZGQgcmVmZXJlbmNlcyB0byB0aGUgc3ltYm9scyBmcm9tIHRoZSBtZXRhZGF0YS5cbiAgICAgIC8vIFRoZXNlIGNhbiBiZSB1c2VkIGJ5IHRoZSB0eXBlIGNoZWNrIGJsb2NrIGZvciBjb21wb25lbnRzLFxuICAgICAgLy8gYW5kIHRoZXkgYWxzbyBjYXVzZSBUeXBlU2NyaXB0IHRvIGluY2x1ZGUgdGhlc2UgZmlsZXMgaW50byB0aGUgcHJvZ3JhbSB0b28sXG4gICAgICAvLyB3aGljaCB3aWxsIG1ha2UgdGhlbSBwYXJ0IG9mIHRoZSBhbmFseXplZEZpbGVzLlxuICAgICAgY29uc3QgZXh0ZXJuYWxSZWZlcmVuY2VzOiBTdGF0aWNTeW1ib2xbXSA9IFtcbiAgICAgICAgLy8gQWRkIHJlZmVyZW5jZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZyb20gYWxsIHRoZSBtb2R1bGVzIGFuZCBpbXBvcnRzLlxuICAgICAgICAuLi5uZ01vZHVsZU1ldGEudHJhbnNpdGl2ZU1vZHVsZS5kaXJlY3RpdmVzLm1hcChkID0+IGQucmVmZXJlbmNlKSxcbiAgICAgICAgLi4ubmdNb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUucGlwZXMubWFwKGQgPT4gZC5yZWZlcmVuY2UpLFxuICAgICAgICAuLi5uZ01vZHVsZU1ldGEuaW1wb3J0ZWRNb2R1bGVzLm1hcChtID0+IG0udHlwZS5yZWZlcmVuY2UpLFxuICAgICAgICAuLi5uZ01vZHVsZU1ldGEuZXhwb3J0ZWRNb2R1bGVzLm1hcChtID0+IG0udHlwZS5yZWZlcmVuY2UpLFxuXG4gICAgICAgIC8vIEFkZCByZWZlcmVuY2VzIHRoYXQgbWlnaHQgYmUgaW5zZXJ0ZWQgYnkgdGhlIHRlbXBsYXRlIGNvbXBpbGVyLlxuICAgICAgICAuLi50aGlzLl9leHRlcm5hbElkZW50aWZpZXJSZWZlcmVuY2VzKFtJZGVudGlmaWVycy5UZW1wbGF0ZVJlZiwgSWRlbnRpZmllcnMuRWxlbWVudFJlZl0pLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzID0gbmV3IE1hcDxhbnksIHN0cmluZz4oKTtcbiAgICAgIGV4dGVybmFsUmVmZXJlbmNlcy5mb3JFYWNoKChyZWYsIHR5cGVJbmRleCkgPT4ge1xuICAgICAgICBleHRlcm5hbFJlZmVyZW5jZVZhcnMuc2V0KHJlZiwgYF9kZWNsJHtuZ01vZHVsZUluZGV4fV8ke3R5cGVJbmRleH1gKTtcbiAgICAgIH0pO1xuICAgICAgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzLmZvckVhY2goKHZhck5hbWUsIHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICBvdXRwdXRDdHguc3RhdGVtZW50cy5wdXNoKFxuICAgICAgICAgICAgby52YXJpYWJsZSh2YXJOYW1lKVxuICAgICAgICAgICAgICAgIC5zZXQoby5OVUxMX0VYUFIuY2FzdChvLkRZTkFNSUNfVFlQRSkpXG4gICAgICAgICAgICAgICAgLnRvRGVjbFN0bXQoby5leHByZXNzaW9uVHlwZShvdXRwdXRDdHguaW1wb3J0RXhwcihcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLCAvKiB0eXBlUGFyYW1zICovIG51bGwsIC8qIHVzZVN1bW1hcmllcyAqLyBmYWxzZSkpKSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGVtaXRGbGFncyAmIFN0dWJFbWl0RmxhZ3MuVHlwZUNoZWNrKSB7XG4gICAgICAgIC8vIGFkZCB0aGUgdHlwZS1jaGVjayBibG9jayBmb3IgYWxsIGNvbXBvbmVudHMgb2YgdGhlIE5nTW9kdWxlXG4gICAgICAgIG5nTW9kdWxlTWV0YS5kZWNsYXJlZERpcmVjdGl2ZXMuZm9yRWFjaCgoZGlySWQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wTWV0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZGlySWQucmVmZXJlbmNlKTtcbiAgICAgICAgICBpZiAoIWNvbXBNZXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXBvbmVudElkKys7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlVHlwZUNoZWNrQmxvY2soXG4gICAgICAgICAgICAgIG91dHB1dEN0eCwgYCR7Y29tcE1ldGEudHlwZS5yZWZlcmVuY2UubmFtZX1fSG9zdF8ke2NvbXBvbmVudElkfWAsIG5nTW9kdWxlTWV0YSxcbiAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRIb3N0Q29tcG9uZW50TWV0YWRhdGEoY29tcE1ldGEpLCBbY29tcE1ldGEudHlwZV0sXG4gICAgICAgICAgICAgIGV4dGVybmFsUmVmZXJlbmNlVmFycyk7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlVHlwZUNoZWNrQmxvY2soXG4gICAgICAgICAgICAgIG91dHB1dEN0eCwgYCR7Y29tcE1ldGEudHlwZS5yZWZlcmVuY2UubmFtZX1fJHtjb21wb25lbnRJZH1gLCBuZ01vZHVsZU1ldGEsIGNvbXBNZXRhLFxuICAgICAgICAgICAgICBuZ01vZHVsZU1ldGEudHJhbnNpdGl2ZU1vZHVsZS5kaXJlY3RpdmVzLCBleHRlcm5hbFJlZmVyZW5jZVZhcnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvdXRwdXRDdHguc3RhdGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9jcmVhdGVFbXB0eVN0dWIob3V0cHV0Q3R4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9leHRlcm5hbElkZW50aWZpZXJSZWZlcmVuY2VzKHJlZmVyZW5jZXM6IG8uRXh0ZXJuYWxSZWZlcmVuY2VbXSk6IFN0YXRpY1N5bWJvbFtdIHtcbiAgICBjb25zdCByZXN1bHQ6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gICAgZm9yIChsZXQgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gY3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZSh0aGlzLnJlZmxlY3RvciwgcmVmZXJlbmNlKTtcbiAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRva2VuLmlkZW50aWZpZXIucmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cGVDaGVja0Jsb2NrKFxuICAgICAgY3R4OiBPdXRwdXRDb250ZXh0LCBjb21wb25lbnRJZDogc3RyaW5nLCBtb2R1bGVNZXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICAgIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIGRpcmVjdGl2ZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSxcbiAgICAgIGV4dGVybmFsUmVmZXJlbmNlVmFyczogTWFwPGFueSwgc3RyaW5nPikge1xuICAgIGNvbnN0IHt0ZW1wbGF0ZTogcGFyc2VkVGVtcGxhdGUsIHBpcGVzOiB1c2VkUGlwZXN9ID1cbiAgICAgICAgdGhpcy5fcGFyc2VUZW1wbGF0ZShjb21wTWV0YSwgbW9kdWxlTWV0YSwgZGlyZWN0aXZlcyk7XG4gICAgY3R4LnN0YXRlbWVudHMucHVzaCguLi50aGlzLl90eXBlQ2hlY2tDb21waWxlci5jb21waWxlQ29tcG9uZW50KFxuICAgICAgICBjb21wb25lbnRJZCwgY29tcE1ldGEsIHBhcnNlZFRlbXBsYXRlLCB1c2VkUGlwZXMsIGV4dGVybmFsUmVmZXJlbmNlVmFycywgY3R4KSk7XG4gIH1cblxuICBlbWl0TWVzc2FnZUJ1bmRsZShhbmFseXplUmVzdWx0OiBOZ0FuYWx5emVkTW9kdWxlcywgbG9jYWxlOiBzdHJpbmd8bnVsbCk6IE1lc3NhZ2VCdW5kbGUge1xuICAgIGNvbnN0IGVycm9yczogUGFyc2VFcnJvcltdID0gW107XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCk7XG5cbiAgICAvLyBUT0RPKHZpY2IpOiBpbXBsaWNpdCB0YWdzICYgYXR0cmlidXRlc1xuICAgIGNvbnN0IG1lc3NhZ2VCdW5kbGUgPSBuZXcgTWVzc2FnZUJ1bmRsZShodG1sUGFyc2VyLCBbXSwge30sIGxvY2FsZSk7XG5cbiAgICBhbmFseXplUmVzdWx0LmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBjb21wTWV0YXM6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YVtdID0gW107XG4gICAgICBmaWxlLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmVUeXBlID0+IHtcbiAgICAgICAgY29uc3QgZGlyTWV0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZGlyZWN0aXZlVHlwZSk7XG4gICAgICAgIGlmIChkaXJNZXRhICYmIGRpck1ldGEuaXNDb21wb25lbnQpIHtcbiAgICAgICAgICBjb21wTWV0YXMucHVzaChkaXJNZXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb21wTWV0YXMuZm9yRWFjaChjb21wTWV0YSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBjb21wTWV0YS50ZW1wbGF0ZSAhLnRlbXBsYXRlICE7XG4gICAgICAgIC8vIFRlbXBsYXRlIFVSTCBwb2ludHMgdG8gZWl0aGVyIGFuIEhUTUwgb3IgVFMgZmlsZSBkZXBlbmRpbmcgb24gd2hldGhlclxuICAgICAgICAvLyB0aGUgZmlsZSBpcyB1c2VkIHdpdGggYHRlbXBsYXRlVXJsOmAgb3IgYHRlbXBsYXRlOmAsIHJlc3BlY3RpdmVseS5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVVcmwgPSBjb21wTWV0YS50ZW1wbGF0ZSAhLnRlbXBsYXRlVXJsITtcbiAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbkNvbmZpZyA9XG4gICAgICAgICAgICBJbnRlcnBvbGF0aW9uQ29uZmlnLmZyb21BcnJheShjb21wTWV0YS50ZW1wbGF0ZSAhLmludGVycG9sYXRpb24pO1xuICAgICAgICBlcnJvcnMucHVzaCguLi5tZXNzYWdlQnVuZGxlLnVwZGF0ZUZyb21UZW1wbGF0ZShodG1sLCB0ZW1wbGF0ZVVybCwgaW50ZXJwb2xhdGlvbkNvbmZpZykhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMubWFwKGUgPT4gZS50b1N0cmluZygpKS5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2VCdW5kbGU7XG4gIH1cblxuICBlbWl0QWxsUGFydGlhbE1vZHVsZXMoXG4gICAgICB7bmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSwgZmlsZXN9OiBOZ0FuYWx5emVkTW9kdWxlcyxcbiAgICAgIHIzRmlsZXM6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzW10pOiBQYXJ0aWFsTW9kdWxlW10ge1xuICAgIGNvbnN0IGNvbnRleHRNYXAgPSBuZXcgTWFwPHN0cmluZywgT3V0cHV0Q29udGV4dD4oKTtcblxuICAgIGNvbnN0IGdldENvbnRleHQgPSAoZmlsZU5hbWU6IHN0cmluZyk6IE91dHB1dENvbnRleHQgPT4ge1xuICAgICAgaWYgKCFjb250ZXh0TWFwLmhhcyhmaWxlTmFtZSkpIHtcbiAgICAgICAgY29udGV4dE1hcC5zZXQoZmlsZU5hbWUsIHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoZmlsZU5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZXh0TWFwLmdldChmaWxlTmFtZSkhO1xuICAgIH07XG5cbiAgICBmaWxlcy5mb3JFYWNoKFxuICAgICAgICBmaWxlID0+IHRoaXMuX2NvbXBpbGVQYXJ0aWFsTW9kdWxlKFxuICAgICAgICAgICAgZmlsZS5maWxlTmFtZSwgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSwgZmlsZS5kaXJlY3RpdmVzLCBmaWxlLnBpcGVzLCBmaWxlLm5nTW9kdWxlcyxcbiAgICAgICAgICAgIGZpbGUuaW5qZWN0YWJsZXMsIGdldENvbnRleHQoZmlsZS5maWxlTmFtZSkpKTtcbiAgICByM0ZpbGVzLmZvckVhY2goXG4gICAgICAgIGZpbGUgPT4gdGhpcy5fY29tcGlsZVNoYWxsb3dNb2R1bGVzKFxuICAgICAgICAgICAgZmlsZS5maWxlTmFtZSwgZmlsZS5zaGFsbG93TW9kdWxlcywgZ2V0Q29udGV4dChmaWxlLmZpbGVOYW1lKSkpO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20oY29udGV4dE1hcC52YWx1ZXMoKSlcbiAgICAgICAgLm1hcChjb250ZXh0ID0+ICh7XG4gICAgICAgICAgICAgICBmaWxlTmFtZTogY29udGV4dC5nZW5GaWxlUGF0aCxcbiAgICAgICAgICAgICAgIHN0YXRlbWVudHM6IFsuLi5jb250ZXh0LmNvbnN0YW50UG9vbC5zdGF0ZW1lbnRzLCAuLi5jb250ZXh0LnN0YXRlbWVudHNdLFxuICAgICAgICAgICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVTaGFsbG93TW9kdWxlcyhcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIHNoYWxsb3dNb2R1bGVzOiBDb21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhW10sXG4gICAgICBjb250ZXh0OiBPdXRwdXRDb250ZXh0KTogdm9pZCB7XG4gICAgc2hhbGxvd01vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4gY29tcGlsZVIzTW9kdWxlKGNvbnRleHQsIG1vZHVsZSwgdGhpcy5faW5qZWN0YWJsZUNvbXBpbGVyKSk7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlUGFydGlhbE1vZHVsZShcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmU6IE1hcDxTdGF0aWNTeW1ib2wsIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhPixcbiAgICAgIGRpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdLCBwaXBlczogU3RhdGljU3ltYm9sW10sIG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXSxcbiAgICAgIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10sIGNvbnRleHQ6IE91dHB1dENvbnRleHQpOiB2b2lkIHtcbiAgICBjb25zdCBlcnJvcnM6IFBhcnNlRXJyb3JbXSA9IFtdO1xuXG4gICAgY29uc3Qgc2NoZW1hUmVnaXN0cnkgPSBuZXcgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5KCk7XG4gICAgY29uc3QgaG9zdEJpbmRpbmdQYXJzZXIgPSBuZXcgQmluZGluZ1BhcnNlcihcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVQYXJzZXIuZXhwcmVzc2lvblBhcnNlciwgREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgc2NoZW1hUmVnaXN0cnksIFtdLFxuICAgICAgICBlcnJvcnMpO1xuXG4gICAgLy8gUHJvY2VzcyBhbGwgY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlc1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmVUeXBlID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZU1ldGFkYXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlKTtcbiAgICAgIGlmIChkaXJlY3RpdmVNZXRhZGF0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmdldChkaXJlY3RpdmVUeXBlKSE7XG4gICAgICAgIG1vZHVsZSB8fFxuICAgICAgICAgICAgZXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZHVsZSBmb3IgY29tcG9uZW50ICcke1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXJOYW1lKGRpcmVjdGl2ZU1ldGFkYXRhLnR5cGUpfSdgKTtcblxuICAgICAgICBsZXQgaHRtbEFzdCA9IGRpcmVjdGl2ZU1ldGFkYXRhLnRlbXBsYXRlICEuaHRtbEFzdCE7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlV2hpdGVzcGFjZXMgPSBkaXJlY3RpdmVNZXRhZGF0YSEudGVtcGxhdGUgIS5wcmVzZXJ2ZVdoaXRlc3BhY2VzO1xuXG4gICAgICAgIGlmICghcHJlc2VydmVXaGl0ZXNwYWNlcykge1xuICAgICAgICAgIGh0bWxBc3QgPSByZW1vdmVXaGl0ZXNwYWNlcyhodG1sQXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW5kZXIzQXN0ID0gaHRtbEFzdFRvUmVuZGVyM0FzdChodG1sQXN0LnJvb3ROb2RlcywgaG9zdEJpbmRpbmdQYXJzZXIpO1xuXG4gICAgICAgIC8vIE1hcCBvZiBTdGF0aWNUeXBlIGJ5IGRpcmVjdGl2ZSBzZWxlY3RvcnNcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlVHlwZUJ5U2VsID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcblxuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gbW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUuZGlyZWN0aXZlcy5tYXAoXG4gICAgICAgICAgICBkaXIgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVTdW1tYXJ5KGRpci5yZWZlcmVuY2UpKTtcblxuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcbiAgICAgICAgICBpZiAoZGlyZWN0aXZlLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmVUeXBlQnlTZWwuc2V0KGRpcmVjdGl2ZS5zZWxlY3RvciwgZGlyZWN0aXZlLnR5cGUucmVmZXJlbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcCBvZiBTdGF0aWNUeXBlIGJ5IHBpcGUgbmFtZXNcbiAgICAgICAgY29uc3QgcGlwZVR5cGVCeU5hbWUgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuXG4gICAgICAgIGNvbnN0IHBpcGVzID0gbW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUucGlwZXMubWFwKFxuICAgICAgICAgICAgcGlwZSA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFBpcGVTdW1tYXJ5KHBpcGUucmVmZXJlbmNlKSk7XG5cbiAgICAgICAgcGlwZXMuZm9yRWFjaChwaXBlID0+IHtcbiAgICAgICAgICBwaXBlVHlwZUJ5TmFtZS5zZXQocGlwZS5uYW1lLCBwaXBlLnR5cGUucmVmZXJlbmNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcGlsZVIzQ29tcG9uZW50KFxuICAgICAgICAgICAgY29udGV4dCwgZGlyZWN0aXZlTWV0YWRhdGEsIHJlbmRlcjNBc3QsIHRoaXMucmVmbGVjdG9yLCBob3N0QmluZGluZ1BhcnNlcixcbiAgICAgICAgICAgIGRpcmVjdGl2ZVR5cGVCeVNlbCwgcGlwZVR5cGVCeU5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGlsZVIzRGlyZWN0aXZlKGNvbnRleHQsIGRpcmVjdGl2ZU1ldGFkYXRhLCB0aGlzLnJlZmxlY3RvciwgaG9zdEJpbmRpbmdQYXJzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGlwZXMuZm9yRWFjaChwaXBlVHlwZSA9PiB7XG4gICAgICBjb25zdCBwaXBlTWV0YWRhdGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFBpcGVNZXRhZGF0YShwaXBlVHlwZSk7XG4gICAgICBpZiAocGlwZU1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBpbGVSM1BpcGUoY29udGV4dCwgcGlwZU1ldGFkYXRhLCB0aGlzLnJlZmxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmplY3RhYmxlcy5mb3JFYWNoKGluamVjdGFibGUgPT4gdGhpcy5faW5qZWN0YWJsZUNvbXBpbGVyLmNvbXBpbGUoaW5qZWN0YWJsZSwgY29udGV4dCkpO1xuICB9XG5cbiAgZW1pdEFsbFBhcnRpYWxNb2R1bGVzMihmaWxlczogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXNbXSk6IFBhcnRpYWxNb2R1bGVbXSB7XG4gICAgLy8gVXNpbmcgcmVkdWNlIGxpa2UgdGhpcyBpcyBhIHNlbGVjdCBtYW55IHBhdHRlcm4gKHdoZXJlIG1hcCBpcyBhIHNlbGVjdCBwYXR0ZXJuKVxuICAgIHJldHVybiBmaWxlcy5yZWR1Y2U8UGFydGlhbE1vZHVsZVtdPigociwgZmlsZSkgPT4ge1xuICAgICAgci5wdXNoKC4uLnRoaXMuX2VtaXRQYXJ0aWFsTW9kdWxlMihmaWxlLmZpbGVOYW1lLCBmaWxlLmluamVjdGFibGVzKSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0UGFydGlhbE1vZHVsZTIoZmlsZU5hbWU6IHN0cmluZywgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSk6XG4gICAgICBQYXJ0aWFsTW9kdWxlW10ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KGZpbGVOYW1lKTtcblxuICAgIGluamVjdGFibGVzLmZvckVhY2goaW5qZWN0YWJsZSA9PiB0aGlzLl9pbmplY3RhYmxlQ29tcGlsZXIuY29tcGlsZShpbmplY3RhYmxlLCBjb250ZXh0KSk7XG5cbiAgICBpZiAoY29udGV4dC5zdGF0ZW1lbnRzICYmIGNvbnRleHQuc3RhdGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gW3tmaWxlTmFtZSwgc3RhdGVtZW50czogWy4uLmNvbnRleHQuY29uc3RhbnRQb29sLnN0YXRlbWVudHMsIC4uLmNvbnRleHQuc3RhdGVtZW50c119XTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZW1pdEFsbEltcGxzKGFuYWx5emVSZXN1bHQ6IE5nQW5hbHl6ZWRNb2R1bGVzKTogR2VuZXJhdGVkRmlsZVtdIHtcbiAgICBjb25zdCB7bmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSwgZmlsZXN9ID0gYW5hbHl6ZVJlc3VsdDtcbiAgICBjb25zdCBzb3VyY2VNb2R1bGVzID0gZmlsZXMubWFwKFxuICAgICAgICBmaWxlID0+IHRoaXMuX2NvbXBpbGVJbXBsRmlsZShcbiAgICAgICAgICAgIGZpbGUuZmlsZU5hbWUsIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUsIGZpbGUuZGlyZWN0aXZlcywgZmlsZS5waXBlcywgZmlsZS5uZ01vZHVsZXMsXG4gICAgICAgICAgICBmaWxlLmluamVjdGFibGVzKSk7XG4gICAgcmV0dXJuIGZsYXR0ZW4oc291cmNlTW9kdWxlcyk7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlSW1wbEZpbGUoXG4gICAgICBzcmNGaWxlVXJsOiBzdHJpbmcsIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmU6IE1hcDxTdGF0aWNTeW1ib2wsIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhPixcbiAgICAgIGRpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdLCBwaXBlczogU3RhdGljU3ltYm9sW10sIG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXSxcbiAgICAgIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10pOiBHZW5lcmF0ZWRGaWxlW10ge1xuICAgIGNvbnN0IGZpbGVTdWZmaXggPSBub3JtYWxpemVHZW5GaWxlU3VmZml4KHNwbGl0VHlwZXNjcmlwdFN1ZmZpeChzcmNGaWxlVXJsLCB0cnVlKVsxXSk7XG4gICAgY29uc3QgZ2VuZXJhdGVkRmlsZXM6IEdlbmVyYXRlZEZpbGVbXSA9IFtdO1xuXG4gICAgY29uc3Qgb3V0cHV0Q3R4ID0gdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChuZ2ZhY3RvcnlGaWxlUGF0aChzcmNGaWxlVXJsLCB0cnVlKSk7XG5cbiAgICBnZW5lcmF0ZWRGaWxlcy5wdXNoKFxuICAgICAgICAuLi50aGlzLl9jcmVhdGVTdW1tYXJ5KHNyY0ZpbGVVcmwsIGRpcmVjdGl2ZXMsIHBpcGVzLCBuZ01vZHVsZXMsIGluamVjdGFibGVzLCBvdXRwdXRDdHgpKTtcblxuICAgIC8vIGNvbXBpbGUgYWxsIG5nIG1vZHVsZXNcbiAgICBuZ01vZHVsZXMuZm9yRWFjaCgobmdNb2R1bGVNZXRhKSA9PiB0aGlzLl9jb21waWxlTW9kdWxlKG91dHB1dEN0eCwgbmdNb2R1bGVNZXRhKSk7XG5cbiAgICAvLyBjb21waWxlIGNvbXBvbmVudHNcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBNZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YSg8YW55PmRpclR5cGUpO1xuICAgICAgaWYgKCFjb21wTWV0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZ01vZHVsZSA9IG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuZ2V0KGRpclR5cGUpO1xuICAgICAgaWYgKCFuZ01vZHVsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIEVycm9yOiBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2R1bGUgZm9yIGNvbXBvbmVudCAke1xuICAgICAgICAgICAgaWRlbnRpZmllck5hbWUoY29tcE1ldGEudHlwZSl9IWApO1xuICAgICAgfVxuXG4gICAgICAvLyBjb21waWxlIHN0eWxlc1xuICAgICAgY29uc3QgY29tcG9uZW50U3R5bGVzaGVldCA9IHRoaXMuX3N0eWxlQ29tcGlsZXIuY29tcGlsZUNvbXBvbmVudChvdXRwdXRDdHgsIGNvbXBNZXRhKTtcbiAgICAgIC8vIE5vdGU6IGNvbXBNZXRhIGlzIGEgY29tcG9uZW50IGFuZCB0aGVyZWZvcmUgdGVtcGxhdGUgaXMgbm9uIG51bGwuXG4gICAgICBjb21wTWV0YS50ZW1wbGF0ZSAhLmV4dGVybmFsU3R5bGVzaGVldHMuZm9yRWFjaCgoc3R5bGVzaGVldE1ldGEpID0+IHtcbiAgICAgICAgLy8gTm90ZTogZmlsbCBub24gc2hpbSBhbmQgc2hpbSBzdHlsZSBmaWxlcyBhcyB0aGV5IG1pZ2h0XG4gICAgICAgIC8vIGJlIHNoYXJlZCBieSBjb21wb25lbnQgd2l0aCBhbmQgd2l0aG91dCBWaWV3RW5jYXBzdWxhdGlvbi5cbiAgICAgICAgY29uc3Qgc2hpbSA9IHRoaXMuX3N0eWxlQ29tcGlsZXIubmVlZHNTdHlsZVNoaW0oY29tcE1ldGEpO1xuICAgICAgICBnZW5lcmF0ZWRGaWxlcy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fY29kZWdlblN0eWxlcyhzcmNGaWxlVXJsLCBjb21wTWV0YSwgc3R5bGVzaGVldE1ldGEsIHNoaW0sIGZpbGVTdWZmaXgpKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYWxsb3dFbXB0eUNvZGVnZW5GaWxlcykge1xuICAgICAgICAgIGdlbmVyYXRlZEZpbGVzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMuX2NvZGVnZW5TdHlsZXMoc3JjRmlsZVVybCwgY29tcE1ldGEsIHN0eWxlc2hlZXRNZXRhLCAhc2hpbSwgZmlsZVN1ZmZpeCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gY29tcGlsZSBjb21wb25lbnRzXG4gICAgICBjb25zdCBjb21wVmlld1ZhcnMgPSB0aGlzLl9jb21waWxlQ29tcG9uZW50KFxuICAgICAgICAgIG91dHB1dEN0eCwgY29tcE1ldGEsIG5nTW9kdWxlLCBuZ01vZHVsZS50cmFuc2l0aXZlTW9kdWxlLmRpcmVjdGl2ZXMsIGNvbXBvbmVudFN0eWxlc2hlZXQsXG4gICAgICAgICAgZmlsZVN1ZmZpeCk7XG4gICAgICB0aGlzLl9jb21waWxlQ29tcG9uZW50RmFjdG9yeShvdXRwdXRDdHgsIGNvbXBNZXRhLCBuZ01vZHVsZSwgZmlsZVN1ZmZpeCk7XG4gICAgfSk7XG4gICAgaWYgKG91dHB1dEN0eC5zdGF0ZW1lbnRzLmxlbmd0aCA+IDAgfHwgdGhpcy5fb3B0aW9ucy5hbGxvd0VtcHR5Q29kZWdlbkZpbGVzKSB7XG4gICAgICBjb25zdCBzcmNNb2R1bGUgPSB0aGlzLl9jb2RlZ2VuU291cmNlTW9kdWxlKHNyY0ZpbGVVcmwsIG91dHB1dEN0eCk7XG4gICAgICBnZW5lcmF0ZWRGaWxlcy51bnNoaWZ0KHNyY01vZHVsZSk7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZWRGaWxlcztcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN1bW1hcnkoXG4gICAgICBzcmNGaWxlTmFtZTogc3RyaW5nLCBkaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXSwgcGlwZXM6IFN0YXRpY1N5bWJvbFtdLFxuICAgICAgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdLCBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdLFxuICAgICAgbmdGYWN0b3J5Q3R4OiBPdXRwdXRDb250ZXh0KTogR2VuZXJhdGVkRmlsZVtdIHtcbiAgICBjb25zdCBzeW1ib2xTdW1tYXJpZXMgPSB0aGlzLl9zeW1ib2xSZXNvbHZlci5nZXRTeW1ib2xzT2Yoc3JjRmlsZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoc3ltYm9sID0+IHRoaXMuX3N5bWJvbFJlc29sdmVyLnJlc29sdmVTeW1ib2woc3ltYm9sKSk7XG4gICAgY29uc3QgdHlwZURhdGE6IHtcbiAgICAgIHN1bW1hcnk6IENvbXBpbGVUeXBlU3VtbWFyeSxcbiAgICAgIG1ldGFkYXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YXxDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF8Q29tcGlsZVBpcGVNZXRhZGF0YXxcbiAgICAgIENvbXBpbGVUeXBlTWV0YWRhdGFcbiAgICB9W10gPVxuICAgICAgICBbXG4gICAgICAgICAgLi4ubmdNb2R1bGVzLm1hcChcbiAgICAgICAgICAgICAgbWV0YSA9PiAoe1xuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0TmdNb2R1bGVTdW1tYXJ5KG1ldGEudHlwZS5yZWZlcmVuY2UpISxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKG1ldGEudHlwZS5yZWZlcmVuY2UpIVxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgLi4uZGlyZWN0aXZlcy5tYXAocmVmID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZVN1bW1hcnkocmVmKSEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YShyZWYpIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAuLi5waXBlcy5tYXAocmVmID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQaXBlU3VtbWFyeShyZWYpISxcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQaXBlTWV0YWRhdGEocmVmKSFcbiAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIC4uLmluamVjdGFibGVzLm1hcChcbiAgICAgICAgICAgICAgcmVmID0+ICh7XG4gICAgICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRJbmplY3RhYmxlU3VtbWFyeShyZWYuc3ltYm9sKSEsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0SW5qZWN0YWJsZVN1bW1hcnkocmVmLnN5bWJvbCkhLnR5cGVcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgIF07XG4gICAgY29uc3QgZm9ySml0T3V0cHV0Q3R4ID0gdGhpcy5fb3B0aW9ucy5lbmFibGVTdW1tYXJpZXNGb3JKaXQgP1xuICAgICAgICB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KHN1bW1hcnlGb3JKaXRGaWxlTmFtZShzcmNGaWxlTmFtZSwgdHJ1ZSkpIDpcbiAgICAgICAgbnVsbDtcbiAgICBjb25zdCB7anNvbiwgZXhwb3J0QXN9ID0gc2VyaWFsaXplU3VtbWFyaWVzKFxuICAgICAgICBzcmNGaWxlTmFtZSwgZm9ySml0T3V0cHV0Q3R4LCB0aGlzLl9zdW1tYXJ5UmVzb2x2ZXIsIHRoaXMuX3N5bWJvbFJlc29sdmVyLCBzeW1ib2xTdW1tYXJpZXMsXG4gICAgICAgIHR5cGVEYXRhLCB0aGlzLl9vcHRpb25zLmNyZWF0ZUV4dGVybmFsU3ltYm9sRmFjdG9yeVJlZXhwb3J0cyk7XG4gICAgZXhwb3J0QXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIG5nRmFjdG9yeUN0eC5zdGF0ZW1lbnRzLnB1c2goXG4gICAgICAgICAgby52YXJpYWJsZShlbnRyeS5leHBvcnRBcykuc2V0KG5nRmFjdG9yeUN0eC5pbXBvcnRFeHByKGVudHJ5LnN5bWJvbCkpLnRvRGVjbFN0bXQobnVsbCwgW1xuICAgICAgICAgICAgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRcbiAgICAgICAgICBdKSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3VtbWFyeUpzb24gPSBuZXcgR2VuZXJhdGVkRmlsZShzcmNGaWxlTmFtZSwgc3VtbWFyeUZpbGVOYW1lKHNyY0ZpbGVOYW1lKSwganNvbik7XG4gICAgY29uc3QgcmVzdWx0ID0gW3N1bW1hcnlKc29uXTtcbiAgICBpZiAoZm9ySml0T3V0cHV0Q3R4KSB7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLl9jb2RlZ2VuU291cmNlTW9kdWxlKHNyY0ZpbGVOYW1lLCBmb3JKaXRPdXRwdXRDdHgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVNb2R1bGUob3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBuZ01vZHVsZTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10gPSBbXTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLmxvY2FsZSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZExvY2FsZSA9IHRoaXMuX29wdGlvbnMubG9jYWxlLnJlcGxhY2UoL18vZywgJy0nKTtcbiAgICAgIHByb3ZpZGVycy5wdXNoKHtcbiAgICAgICAgdG9rZW46IGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy5yZWZsZWN0b3IsIElkZW50aWZpZXJzLkxPQ0FMRV9JRCksXG4gICAgICAgIHVzZVZhbHVlOiBub3JtYWxpemVkTG9jYWxlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaTE4bkZvcm1hdCkge1xuICAgICAgcHJvdmlkZXJzLnB1c2goe1xuICAgICAgICB0b2tlbjogY3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZSh0aGlzLnJlZmxlY3RvciwgSWRlbnRpZmllcnMuVFJBTlNMQVRJT05TX0ZPUk1BVCksXG4gICAgICAgIHVzZVZhbHVlOiB0aGlzLl9vcHRpb25zLmkxOG5Gb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX25nTW9kdWxlQ29tcGlsZXIuY29tcGlsZShvdXRwdXRDdHgsIG5nTW9kdWxlLCBwcm92aWRlcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gICAgICBuZ01vZHVsZTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIGZpbGVTdWZmaXg6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGhvc3RNZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRIb3N0Q29tcG9uZW50TWV0YWRhdGEoY29tcE1ldGEpO1xuICAgIGNvbnN0IGhvc3RWaWV3RmFjdG9yeVZhciA9XG4gICAgICAgIHRoaXMuX2NvbXBpbGVDb21wb25lbnQob3V0cHV0Q3R4LCBob3N0TWV0YSwgbmdNb2R1bGUsIFtjb21wTWV0YS50eXBlXSwgbnVsbCwgZmlsZVN1ZmZpeClcbiAgICAgICAgICAgIC52aWV3Q2xhc3NWYXI7XG4gICAgY29uc3QgY29tcEZhY3RvcnlWYXIgPSBjb21wb25lbnRGYWN0b3J5TmFtZShjb21wTWV0YS50eXBlLnJlZmVyZW5jZSk7XG4gICAgY29uc3QgaW5wdXRzRXhwcnM6IG8uTGl0ZXJhbE1hcEVudHJ5W10gPSBbXTtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjb21wTWV0YS5pbnB1dHMpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGNvbXBNZXRhLmlucHV0c1twcm9wTmFtZV07XG4gICAgICAvLyBEb24ndCBxdW90ZSBzbyB0aGF0IHRoZSBrZXkgZ2V0cyBtaW5pZmllZC4uLlxuICAgICAgaW5wdXRzRXhwcnMucHVzaChuZXcgby5MaXRlcmFsTWFwRW50cnkocHJvcE5hbWUsIG8ubGl0ZXJhbCh0ZW1wbGF0ZU5hbWUpLCBmYWxzZSkpO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXRzRXhwcnM6IG8uTGl0ZXJhbE1hcEVudHJ5W10gPSBbXTtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjb21wTWV0YS5vdXRwdXRzKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBjb21wTWV0YS5vdXRwdXRzW3Byb3BOYW1lXTtcbiAgICAgIC8vIERvbid0IHF1b3RlIHNvIHRoYXQgdGhlIGtleSBnZXRzIG1pbmlmaWVkLi4uXG4gICAgICBvdXRwdXRzRXhwcnMucHVzaChuZXcgby5MaXRlcmFsTWFwRW50cnkocHJvcE5hbWUsIG8ubGl0ZXJhbCh0ZW1wbGF0ZU5hbWUpLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIG91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goXG4gICAgICAgIG8udmFyaWFibGUoY29tcEZhY3RvcnlWYXIpXG4gICAgICAgICAgICAuc2V0KG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5jcmVhdGVDb21wb25lbnRGYWN0b3J5KS5jYWxsRm4oW1xuICAgICAgICAgICAgICBvLmxpdGVyYWwoY29tcE1ldGEuc2VsZWN0b3IpLCBvdXRwdXRDdHguaW1wb3J0RXhwcihjb21wTWV0YS50eXBlLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIG8udmFyaWFibGUoaG9zdFZpZXdGYWN0b3J5VmFyKSwgbmV3IG8uTGl0ZXJhbE1hcEV4cHIoaW5wdXRzRXhwcnMpLFxuICAgICAgICAgICAgICBuZXcgby5MaXRlcmFsTWFwRXhwcihvdXRwdXRzRXhwcnMpLFxuICAgICAgICAgICAgICBvLmxpdGVyYWxBcnIoXG4gICAgICAgICAgICAgICAgICBjb21wTWV0YS50ZW1wbGF0ZSAhLm5nQ29udGVudFNlbGVjdG9ycy5tYXAoc2VsZWN0b3IgPT4gby5saXRlcmFsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIC50b0RlY2xTdG10KFxuICAgICAgICAgICAgICAgIG8uaW1wb3J0VHlwZShcbiAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMuQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgW28uZXhwcmVzc2lvblR5cGUob3V0cHV0Q3R4LmltcG9ydEV4cHIoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UpKSFdLFxuICAgICAgICAgICAgICAgICAgICBbby5UeXBlTW9kaWZpZXIuQ29uc3RdKSxcbiAgICAgICAgICAgICAgICBbby5TdG10TW9kaWZpZXIuRmluYWwsIG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZUNvbXBvbmVudChcbiAgICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgY29tcE1ldGE6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgICAgIG5nTW9kdWxlOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgZGlyZWN0aXZlSWRlbnRpZmllcnM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSxcbiAgICAgIGNvbXBvbmVudFN0eWxlczogQ29tcGlsZWRTdHlsZXNoZWV0fG51bGwsIGZpbGVTdWZmaXg6IHN0cmluZyk6IFZpZXdDb21waWxlUmVzdWx0IHtcbiAgICBjb25zdCB7dGVtcGxhdGU6IHBhcnNlZFRlbXBsYXRlLCBwaXBlczogdXNlZFBpcGVzfSA9XG4gICAgICAgIHRoaXMuX3BhcnNlVGVtcGxhdGUoY29tcE1ldGEsIG5nTW9kdWxlLCBkaXJlY3RpdmVJZGVudGlmaWVycyk7XG4gICAgY29uc3Qgc3R5bGVzRXhwciA9IGNvbXBvbmVudFN0eWxlcyA/IG8udmFyaWFibGUoY29tcG9uZW50U3R5bGVzLnN0eWxlc1ZhcikgOiBvLmxpdGVyYWxBcnIoW10pO1xuICAgIGNvbnN0IHZpZXdSZXN1bHQgPSB0aGlzLl92aWV3Q29tcGlsZXIuY29tcGlsZUNvbXBvbmVudChcbiAgICAgICAgb3V0cHV0Q3R4LCBjb21wTWV0YSwgcGFyc2VkVGVtcGxhdGUsIHN0eWxlc0V4cHIsIHVzZWRQaXBlcyk7XG4gICAgaWYgKGNvbXBvbmVudFN0eWxlcykge1xuICAgICAgX3Jlc29sdmVTdHlsZVN0YXRlbWVudHMoXG4gICAgICAgICAgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIGNvbXBvbmVudFN0eWxlcywgdGhpcy5fc3R5bGVDb21waWxlci5uZWVkc1N0eWxlU2hpbShjb21wTWV0YSksXG4gICAgICAgICAgZmlsZVN1ZmZpeCk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3UmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VUZW1wbGF0ZShcbiAgICAgIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIG5nTW9kdWxlOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICAgIGRpcmVjdGl2ZUlkZW50aWZpZXJzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10pOlxuICAgICAge3RlbXBsYXRlOiBUZW1wbGF0ZUFzdFtdLCBwaXBlczogQ29tcGlsZVBpcGVTdW1tYXJ5W119IHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVBc3RDYWNoZS5oYXMoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVBc3RDYWNoZS5nZXQoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UpITtcbiAgICB9XG4gICAgY29uc3QgcHJlc2VydmVXaGl0ZXNwYWNlcyA9IGNvbXBNZXRhIS50ZW1wbGF0ZSAhLnByZXNlcnZlV2hpdGVzcGFjZXM7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9XG4gICAgICAgIGRpcmVjdGl2ZUlkZW50aWZpZXJzLm1hcChkaXIgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVTdW1tYXJ5KGRpci5yZWZlcmVuY2UpKTtcbiAgICBjb25zdCBwaXBlcyA9IG5nTW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUucGlwZXMubWFwKFxuICAgICAgICBwaXBlID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UGlwZVN1bW1hcnkocGlwZS5yZWZlcmVuY2UpKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90ZW1wbGF0ZVBhcnNlci5wYXJzZShcbiAgICAgICAgY29tcE1ldGEsIGNvbXBNZXRhLnRlbXBsYXRlICEuaHRtbEFzdCEsIGRpcmVjdGl2ZXMsIHBpcGVzLCBuZ01vZHVsZS5zY2hlbWFzLFxuICAgICAgICB0ZW1wbGF0ZVNvdXJjZVVybChuZ01vZHVsZS50eXBlLCBjb21wTWV0YSwgY29tcE1ldGEudGVtcGxhdGUgISksIHByZXNlcnZlV2hpdGVzcGFjZXMpO1xuICAgIHRoaXMuX3RlbXBsYXRlQXN0Q2FjaGUuc2V0KGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVPdXRwdXRDb250ZXh0KGdlbkZpbGVQYXRoOiBzdHJpbmcpOiBPdXRwdXRDb250ZXh0IHtcbiAgICBjb25zdCBpbXBvcnRFeHByID1cbiAgICAgICAgKHN5bWJvbDogU3RhdGljU3ltYm9sLCB0eXBlUGFyYW1zOiBvLlR5cGVbXXxudWxsID0gbnVsbCwgdXNlU3VtbWFyaWVzOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgIGlmICghKHN5bWJvbCBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgZXJyb3I6IHVua25vd24gaWRlbnRpZmllciAke0pTT04uc3RyaW5naWZ5KHN5bWJvbCl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFyaXR5ID0gdGhpcy5fc3ltYm9sUmVzb2x2ZXIuZ2V0VHlwZUFyaXR5KHN5bWJvbCkgfHwgMDtcbiAgICAgICAgICBjb25zdCB7ZmlsZVBhdGgsIG5hbWUsIG1lbWJlcnN9ID1cbiAgICAgICAgICAgICAgdGhpcy5fc3ltYm9sUmVzb2x2ZXIuZ2V0SW1wb3J0QXMoc3ltYm9sLCB1c2VTdW1tYXJpZXMpIHx8IHN5bWJvbDtcbiAgICAgICAgICBjb25zdCBpbXBvcnRNb2R1bGUgPSB0aGlzLl9maWxlTmFtZVRvTW9kdWxlTmFtZShmaWxlUGF0aCwgZ2VuRmlsZVBhdGgpO1xuXG4gICAgICAgICAgLy8gSXQgc2hvdWxkIGJlIGdvb2QgZW5vdWdoIHRvIGNvbXBhcmUgZmlsZVBhdGggdG8gZ2VuRmlsZVBhdGggYW5kIGlmIHRoZXkgYXJlIGVxdWFsXG4gICAgICAgICAgLy8gdGhlcmUgaXMgYSBzZWxmIHJlZmVyZW5jZS4gSG93ZXZlciwgbmdmYWN0b3J5IGZpbGVzIGdlbmVyYXRlIHRvIC50cyBidXQgdGhlaXJcbiAgICAgICAgICAvLyBzeW1ib2xzIGhhdmUgLmQudHMgc28gYSBzaW1wbGUgY29tcGFyZSBpcyBpbnN1ZmZpY2llbnQuIFRoZXkgc2hvdWxkIGJlIGNhbm9uaWNhbFxuICAgICAgICAgIC8vIGFuZCBpcyB0cmFja2VkIGJ5ICMxNzcwNS5cbiAgICAgICAgICBjb25zdCBzZWxmUmVmZXJlbmNlID0gdGhpcy5fZmlsZU5hbWVUb01vZHVsZU5hbWUoZ2VuRmlsZVBhdGgsIGdlbkZpbGVQYXRoKTtcbiAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gaW1wb3J0TW9kdWxlID09PSBzZWxmUmVmZXJlbmNlID8gbnVsbCA6IGltcG9ydE1vZHVsZTtcblxuICAgICAgICAgIC8vIElmIHdlIGFyZSBpbiBhIHR5cGUgZXhwcmVzc2lvbiB0aGF0IHJlZmVycyB0byBhIGdlbmVyaWMgdHlwZSB0aGVuIHN1cHBseVxuICAgICAgICAgIC8vIHRoZSByZXF1aXJlZCB0eXBlIHBhcmFtZXRlcnMuIElmIHRoZXJlIHdlcmUgbm90IGVub3VnaCB0eXBlIHBhcmFtZXRlcnNcbiAgICAgICAgICAvLyBzdXBwbGllZCwgc3VwcGx5IGFueSBhcyB0aGUgdHlwZS4gT3V0c2lkZSBhIHR5cGUgZXhwcmVzc2lvbiB0aGUgcmVmZXJlbmNlXG4gICAgICAgICAgLy8gc2hvdWxkIG5vdCBzdXBwbHkgdHlwZSBwYXJhbWV0ZXJzIGFuZCBiZSB0cmVhdGVkIGFzIGEgc2ltcGxlIHZhbHVlIHJlZmVyZW5jZVxuICAgICAgICAgIC8vIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgICAgY29uc3Qgc3VwcGxpZWRUeXBlUGFyYW1zID0gdHlwZVBhcmFtcyB8fCBbXTtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nVHlwZVBhcmFtc0NvdW50ID0gYXJpdHkgLSBzdXBwbGllZFR5cGVQYXJhbXMubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IGFsbFR5cGVQYXJhbXMgPVxuICAgICAgICAgICAgICBzdXBwbGllZFR5cGVQYXJhbXMuY29uY2F0KG5ld0FycmF5KG1pc3NpbmdUeXBlUGFyYW1zQ291bnQsIG8uRFlOQU1JQ19UWVBFKSk7XG4gICAgICAgICAgcmV0dXJuIG1lbWJlcnMucmVkdWNlKFxuICAgICAgICAgICAgICAoZXhwciwgbWVtYmVyTmFtZSkgPT4gZXhwci5wcm9wKG1lbWJlck5hbWUpLFxuICAgICAgICAgICAgICA8by5FeHByZXNzaW9uPm8uaW1wb3J0RXhwcihcbiAgICAgICAgICAgICAgICAgIG5ldyBvLkV4dGVybmFsUmVmZXJlbmNlKG1vZHVsZU5hbWUsIG5hbWUsIG51bGwpLCBhbGxUeXBlUGFyYW1zKSk7XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXRlbWVudHM6IFtdLCBnZW5GaWxlUGF0aCwgaW1wb3J0RXhwciwgY29uc3RhbnRQb29sOiBuZXcgQ29uc3RhbnRQb29sKCl9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsZU5hbWVUb01vZHVsZU5hbWUoaW1wb3J0ZWRGaWxlUGF0aDogc3RyaW5nLCBjb250YWluaW5nRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N1bW1hcnlSZXNvbHZlci5nZXRLbm93bk1vZHVsZU5hbWUoaW1wb3J0ZWRGaWxlUGF0aCkgfHxcbiAgICAgICAgdGhpcy5fc3ltYm9sUmVzb2x2ZXIuZ2V0S25vd25Nb2R1bGVOYW1lKGltcG9ydGVkRmlsZVBhdGgpIHx8XG4gICAgICAgIHRoaXMuX2hvc3QuZmlsZU5hbWVUb01vZHVsZU5hbWUoaW1wb3J0ZWRGaWxlUGF0aCwgY29udGFpbmluZ0ZpbGVQYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvZGVnZW5TdHlsZXMoXG4gICAgICBzcmNGaWxlVXJsOiBzdHJpbmcsIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gICAgICBzdHlsZXNoZWV0TWV0YWRhdGE6IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEsIGlzU2hpbW1lZDogYm9vbGVhbixcbiAgICAgIGZpbGVTdWZmaXg6IHN0cmluZyk6IEdlbmVyYXRlZEZpbGUge1xuICAgIGNvbnN0IG91dHB1dEN0eCA9IHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoXG4gICAgICAgIF9zdHlsZXNNb2R1bGVVcmwoc3R5bGVzaGVldE1ldGFkYXRhLm1vZHVsZVVybCEsIGlzU2hpbW1lZCwgZmlsZVN1ZmZpeCkpO1xuICAgIGNvbnN0IGNvbXBpbGVkU3R5bGVzaGVldCA9XG4gICAgICAgIHRoaXMuX3N0eWxlQ29tcGlsZXIuY29tcGlsZVN0eWxlcyhvdXRwdXRDdHgsIGNvbXBNZXRhLCBzdHlsZXNoZWV0TWV0YWRhdGEsIGlzU2hpbW1lZCk7XG4gICAgX3Jlc29sdmVTdHlsZVN0YXRlbWVudHModGhpcy5fc3ltYm9sUmVzb2x2ZXIsIGNvbXBpbGVkU3R5bGVzaGVldCwgaXNTaGltbWVkLCBmaWxlU3VmZml4KTtcbiAgICByZXR1cm4gdGhpcy5fY29kZWdlblNvdXJjZU1vZHVsZShzcmNGaWxlVXJsLCBvdXRwdXRDdHgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29kZWdlblNvdXJjZU1vZHVsZShzcmNGaWxlVXJsOiBzdHJpbmcsIGN0eDogT3V0cHV0Q29udGV4dCk6IEdlbmVyYXRlZEZpbGUge1xuICAgIHJldHVybiBuZXcgR2VuZXJhdGVkRmlsZShzcmNGaWxlVXJsLCBjdHguZ2VuRmlsZVBhdGgsIGN0eC5zdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIGxpc3RMYXp5Um91dGVzKGVudHJ5Um91dGU/OiBzdHJpbmcsIGFuYWx5emVkTW9kdWxlcz86IE5nQW5hbHl6ZWRNb2R1bGVzKTogTGF6eVJvdXRlW10ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChlbnRyeVJvdXRlKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBwYXJzZUxhenlSb3V0ZShlbnRyeVJvdXRlLCB0aGlzLnJlZmxlY3RvcikucmVmZXJlbmNlZE1vZHVsZTtcbiAgICAgIHJldHVybiB2aXNpdExhenlSb3V0ZShzeW1ib2wpO1xuICAgIH0gZWxzZSBpZiAoYW5hbHl6ZWRNb2R1bGVzKSB7XG4gICAgICBjb25zdCBhbGxMYXp5Um91dGVzOiBMYXp5Um91dGVbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBuZ01vZHVsZSBvZiBhbmFseXplZE1vZHVsZXMubmdNb2R1bGVzKSB7XG4gICAgICAgIGNvbnN0IGxhenlSb3V0ZXMgPSBsaXN0TGF6eVJvdXRlcyhuZ01vZHVsZSwgdGhpcy5yZWZsZWN0b3IpO1xuICAgICAgICBmb3IgKGNvbnN0IGxhenlSb3V0ZSBvZiBsYXp5Um91dGVzKSB7XG4gICAgICAgICAgYWxsTGF6eVJvdXRlcy5wdXNoKGxhenlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxMYXp5Um91dGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVpdGhlciByb3V0ZSBvciBhbmFseXplZE1vZHVsZXMgaGFzIHRvIGJlIHNwZWNpZmllZCFgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2aXNpdExhenlSb3V0ZShcbiAgICAgICAgc3ltYm9sOiBTdGF0aWNTeW1ib2wsIHNlZW5Sb3V0ZXMgPSBuZXcgU2V0PFN0YXRpY1N5bWJvbD4oKSxcbiAgICAgICAgYWxsTGF6eVJvdXRlczogTGF6eVJvdXRlW10gPSBbXSk6IExhenlSb3V0ZVtdIHtcbiAgICAgIC8vIFN1cHBvcnQgcG9pbnRpbmcgdG8gZGVmYXVsdCBleHBvcnRzLCBidXQgc3RvcCByZWN1cnNpbmcgdGhlcmUsXG4gICAgICAvLyBhcyB0aGUgU3RhdGljUmVmbGVjdG9yIGRvZXMgbm90IHlldCBzdXBwb3J0IGRlZmF1bHQgZXhwb3J0cy5cbiAgICAgIGlmIChzZWVuUm91dGVzLmhhcyhzeW1ib2wpIHx8ICFzeW1ib2wubmFtZSkge1xuICAgICAgICByZXR1cm4gYWxsTGF6eVJvdXRlcztcbiAgICAgIH1cbiAgICAgIHNlZW5Sb3V0ZXMuYWRkKHN5bWJvbCk7XG4gICAgICBjb25zdCBsYXp5Um91dGVzID1cbiAgICAgICAgICBsaXN0TGF6eVJvdXRlcyhzZWxmLl9tZXRhZGF0YVJlc29sdmVyLmdldE5nTW9kdWxlTWV0YWRhdGEoc3ltYm9sLCB0cnVlKSEsIHNlbGYucmVmbGVjdG9yKTtcbiAgICAgIGZvciAoY29uc3QgbGF6eVJvdXRlIG9mIGxhenlSb3V0ZXMpIHtcbiAgICAgICAgYWxsTGF6eVJvdXRlcy5wdXNoKGxhenlSb3V0ZSk7XG4gICAgICAgIHZpc2l0TGF6eVJvdXRlKGxhenlSb3V0ZS5yZWZlcmVuY2VkTW9kdWxlLCBzZWVuUm91dGVzLCBhbGxMYXp5Um91dGVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxMYXp5Um91dGVzO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRW1wdHlTdHViKG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCkge1xuICAvLyBOb3RlOiBXZSBuZWVkIHRvIHByb2R1Y2UgYXQgbGVhc3Qgb25lIGltcG9ydCBzdGF0ZW1lbnQgc28gdGhhdFxuICAvLyBUeXBlU2NyaXB0IGtub3dzIHRoYXQgdGhlIGZpbGUgaXMgYW4gZXM2IG1vZHVsZS4gT3RoZXJ3aXNlIG91ciBnZW5lcmF0ZWRcbiAgLy8gZXhwb3J0cyAvIGltcG9ydHMgd29uJ3QgYmUgZW1pdHRlZCBwcm9wZXJseSBieSBUeXBlU2NyaXB0LlxuICBvdXRwdXRDdHguc3RhdGVtZW50cy5wdXNoKG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5Db21wb25lbnRGYWN0b3J5KS50b1N0bXQoKSk7XG59XG5cblxuZnVuY3Rpb24gX3Jlc29sdmVTdHlsZVN0YXRlbWVudHMoXG4gICAgc3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLCBjb21waWxlUmVzdWx0OiBDb21waWxlZFN0eWxlc2hlZXQsIG5lZWRzU2hpbTogYm9vbGVhbixcbiAgICBmaWxlU3VmZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgY29tcGlsZVJlc3VsdC5kZXBlbmRlbmNpZXMuZm9yRWFjaCgoZGVwKSA9PiB7XG4gICAgZGVwLnNldFZhbHVlKHN5bWJvbFJlc29sdmVyLmdldFN0YXRpY1N5bWJvbChcbiAgICAgICAgX3N0eWxlc01vZHVsZVVybChkZXAubW9kdWxlVXJsLCBuZWVkc1NoaW0sIGZpbGVTdWZmaXgpLCBkZXAubmFtZSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3N0eWxlc01vZHVsZVVybChzdHlsZXNoZWV0VXJsOiBzdHJpbmcsIHNoaW06IGJvb2xlYW4sIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3N0eWxlc2hlZXRVcmx9JHtzaGltID8gJy5zaGltJyA6ICcnfS5uZ3N0eWxlJHtzdWZmaXh9YDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXTtcbiAgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZTogTWFwPFN0YXRpY1N5bWJvbCwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGE+O1xuICBmaWxlczogTmdBbmFseXplZEZpbGVbXTtcbiAgc3ltYm9sc01pc3NpbmdNb2R1bGU/OiBTdGF0aWNTeW1ib2xbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlcyB7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW107XG4gIHNoYWxsb3dNb2R1bGVzOiBDb21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdBbmFseXplZEZpbGUge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBkaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXTtcbiAgYWJzdHJhY3REaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXTtcbiAgcGlwZXM6IFN0YXRpY1N5bWJvbFtdO1xuICBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW107XG4gIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW107XG4gIGV4cG9ydHNOb25Tb3VyY2VGaWxlczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ0FuYWx5emVNb2R1bGVzSG9zdCB7XG4gIGlzU291cmNlRmlsZShmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVOZ01vZHVsZXMoXG4gICAgZmlsZU5hbWVzOiBzdHJpbmdbXSwgaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcik6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgY29uc3QgZmlsZXMgPSBfYW5hbHl6ZUZpbGVzSW5jbHVkaW5nTm9uUHJvZ3JhbUZpbGVzKFxuICAgICAgZmlsZU5hbWVzLCBob3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlciwgbWV0YWRhdGFSZXNvbHZlcik7XG4gIHJldHVybiBtZXJnZUFuYWx5emVkRmlsZXMoZmlsZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZUFuZFZhbGlkYXRlTmdNb2R1bGVzKFxuICAgIGZpbGVOYW1lczogc3RyaW5nW10sIGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIpOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIHJldHVybiB2YWxpZGF0ZUFuYWx5emVkTW9kdWxlcyhcbiAgICAgIGFuYWx5emVOZ01vZHVsZXMoZmlsZU5hbWVzLCBob3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlciwgbWV0YWRhdGFSZXNvbHZlcikpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFuYWx5emVkTW9kdWxlcyhhbmFseXplZE1vZHVsZXM6IE5nQW5hbHl6ZWRNb2R1bGVzKTogTmdBbmFseXplZE1vZHVsZXMge1xuICBpZiAoYW5hbHl6ZWRNb2R1bGVzLnN5bWJvbHNNaXNzaW5nTW9kdWxlICYmIGFuYWx5emVkTW9kdWxlcy5zeW1ib2xzTWlzc2luZ01vZHVsZS5sZW5ndGgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGFuYWx5emVkTW9kdWxlcy5zeW1ib2xzTWlzc2luZ01vZHVsZS5tYXAoXG4gICAgICAgIHMgPT4gYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZHVsZSBmb3IgY2xhc3MgJHtzLm5hbWV9IGluICR7cy5maWxlUGF0aH0hIEFkZCAke1xuICAgICAgICAgICAgcy5uYW1lfSB0byB0aGUgTmdNb2R1bGUgdG8gZml4IGl0LmApO1xuICAgIHRocm93IHN5bnRheEVycm9yKG1lc3NhZ2VzLmpvaW4oJ1xcbicpKTtcbiAgfVxuICByZXR1cm4gYW5hbHl6ZWRNb2R1bGVzO1xufVxuXG4vLyBBbmFseXplcyBhbGwgb2YgdGhlIHByb2dyYW0gZmlsZXMsXG4vLyBpbmNsdWRpbmcgZmlsZXMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIHByb2dyYW1cbi8vIGJ1dCBhcmUgcmVmZXJlbmNlZCBieSBhbiBOZ01vZHVsZS5cbmZ1bmN0aW9uIF9hbmFseXplRmlsZXNJbmNsdWRpbmdOb25Qcm9ncmFtRmlsZXMoXG4gICAgZmlsZU5hbWVzOiBzdHJpbmdbXSwgaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcik6IE5nQW5hbHl6ZWRGaWxlW10ge1xuICBjb25zdCBzZWVuRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgZmlsZXM6IE5nQW5hbHl6ZWRGaWxlW10gPSBbXTtcblxuICBjb25zdCB2aXNpdEZpbGUgPSAoZmlsZU5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmIChzZWVuRmlsZXMuaGFzKGZpbGVOYW1lKSB8fCAhaG9zdC5pc1NvdXJjZUZpbGUoZmlsZU5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNlZW5GaWxlcy5hZGQoZmlsZU5hbWUpO1xuICAgIGNvbnN0IGFuYWx5emVkRmlsZSA9IGFuYWx5emVGaWxlKGhvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyLCBtZXRhZGF0YVJlc29sdmVyLCBmaWxlTmFtZSk7XG4gICAgZmlsZXMucHVzaChhbmFseXplZEZpbGUpO1xuICAgIGFuYWx5emVkRmlsZS5uZ01vZHVsZXMuZm9yRWFjaChuZ01vZHVsZSA9PiB7XG4gICAgICBuZ01vZHVsZS50cmFuc2l0aXZlTW9kdWxlLm1vZHVsZXMuZm9yRWFjaChtb2RNZXRhID0+IHZpc2l0RmlsZShtb2RNZXRhLnJlZmVyZW5jZS5maWxlUGF0aCkpO1xuICAgIH0pO1xuICB9O1xuICBmaWxlTmFtZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHZpc2l0RmlsZShmaWxlTmFtZSkpO1xuICByZXR1cm4gZmlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplRmlsZShcbiAgICBob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIG1ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBmaWxlTmFtZTogc3RyaW5nKTogTmdBbmFseXplZEZpbGUge1xuICBjb25zdCBhYnN0cmFjdERpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gIGNvbnN0IGRpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gIGNvbnN0IHBpcGVzOiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICBjb25zdCBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBoYXNEZWNvcmF0b3JzID0gc3RhdGljU3ltYm9sUmVzb2x2ZXIuaGFzRGVjb3JhdG9ycyhmaWxlTmFtZSk7XG4gIGxldCBleHBvcnRzTm9uU291cmNlRmlsZXMgPSBmYWxzZTtcbiAgY29uc3QgaXNEZWNsYXJhdGlvbkZpbGUgPSBmaWxlTmFtZS5lbmRzV2l0aCgnLmQudHMnKTtcbiAgLy8gRG9uJ3QgYW5hbHl6ZSAuZC50cyBmaWxlcyB0aGF0IGhhdmUgbm8gZGVjb3JhdG9ycyBhcyBhIHNob3J0Y3V0XG4gIC8vIHRvIHNwZWVkIHVwIHRoZSBhbmFseXNpcy4gVGhpcyBwcmV2ZW50cyB1cyBmcm9tXG4gIC8vIHJlc29sdmluZyB0aGUgcmVmZXJlbmNlcyBpbiB0aGVzZSBmaWxlcy5cbiAgLy8gTm90ZTogZXhwb3J0c05vblNvdXJjZUZpbGVzIGlzIG9ubHkgbmVlZGVkIHdoZW4gY29tcGlsaW5nIHdpdGggc3VtbWFyaWVzLFxuICAvLyB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2hlbiAuZC50cyBmaWxlcyBhcmUgdHJlYXRlZCBhcyBpbnB1dCBmaWxlcy5cbiAgaWYgKCFpc0RlY2xhcmF0aW9uRmlsZSB8fCBoYXNEZWNvcmF0b3JzKSB7XG4gICAgc3RhdGljU3ltYm9sUmVzb2x2ZXIuZ2V0U3ltYm9sc09mKGZpbGVOYW1lKS5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVkU3ltYm9sID0gc3RhdGljU3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzeW1ib2wpO1xuICAgICAgY29uc3Qgc3ltYm9sTWV0YSA9IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhO1xuICAgICAgaWYgKCFzeW1ib2xNZXRhIHx8IHN5bWJvbE1ldGEuX19zeW1ib2xpYyA9PT0gJ2Vycm9yJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaXNOZ1N5bWJvbCA9IGZhbHNlO1xuICAgICAgaWYgKHN5bWJvbE1ldGEuX19zeW1ib2xpYyA9PT0gJ2NsYXNzJykge1xuICAgICAgICBpZiAobWV0YWRhdGFSZXNvbHZlci5pc0RpcmVjdGl2ZShzeW1ib2wpKSB7XG4gICAgICAgICAgaXNOZ1N5bWJvbCA9IHRydWU7XG4gICAgICAgICAgLy8gVGhpcyBkaXJlY3RpdmUgZWl0aGVyIGhhcyBhIHNlbGVjdG9yIG9yIGRvZXNuJ3QuIFNlbGVjdG9yLWxlc3MgZGlyZWN0aXZlcyBnZXQgdHJhY2tlZFxuICAgICAgICAgIC8vIGluIGFic3RyYWN0RGlyZWN0aXZlcywgbm90IGRpcmVjdGl2ZXMuIFRoZSBjb21waWxlciBkb2Vzbid0IGRlYWwgd2l0aCBzZWxlY3Rvci1sZXNzXG4gICAgICAgICAgLy8gZGlyZWN0aXZlcyBhdCBhbGwsIHJlYWxseSwgb3RoZXIgdGhhbiB0byBwZXJzaXN0IHRoZWlyIG1ldGFkYXRhLiBUaGlzIGlzIGRvbmUgc28gdGhhdFxuICAgICAgICAgIC8vIGFwcHMgd2lsbCBoYXZlIGFuIGVhc2llciB0aW1lIG1pZ3JhdGluZyB0byBJdnksIHdoaWNoIHJlcXVpcmVzIHRoZSBzZWxlY3Rvci1sZXNzXG4gICAgICAgICAgLy8gYW5ub3RhdGlvbnMgdG8gYmUgYXBwbGllZC5cbiAgICAgICAgICBpZiAoIW1ldGFkYXRhUmVzb2x2ZXIuaXNBYnN0cmFjdERpcmVjdGl2ZShzeW1ib2wpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZGlyZWN0aXZlIGlzIGFuIG9yZGluYXJ5IGRpcmVjdGl2ZS5cbiAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaChzeW1ib2wpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgZGlyZWN0aXZlIGhhcyBubyBzZWxlY3RvciBhbmQgaXMgYW4gXCJhYnN0cmFjdFwiIGRpcmVjdGl2ZSwgc28gdHJhY2sgaXRcbiAgICAgICAgICAgIC8vIGFjY29yZGluZ2x5LlxuICAgICAgICAgICAgYWJzdHJhY3REaXJlY3RpdmVzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFSZXNvbHZlci5pc1BpcGUoc3ltYm9sKSkge1xuICAgICAgICAgIGlzTmdTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgIHBpcGVzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzTmdNb2R1bGUoc3ltYm9sKSkge1xuICAgICAgICAgIGNvbnN0IG5nTW9kdWxlID0gbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKHN5bWJvbCwgZmFsc2UpO1xuICAgICAgICAgIGlmIChuZ01vZHVsZSkge1xuICAgICAgICAgICAgaXNOZ1N5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBuZ01vZHVsZXMucHVzaChuZ01vZHVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNJbmplY3RhYmxlKHN5bWJvbCkpIHtcbiAgICAgICAgICBpc05nU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBpbmplY3RhYmxlID0gbWV0YWRhdGFSZXNvbHZlci5nZXRJbmplY3RhYmxlTWV0YWRhdGEoc3ltYm9sLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKGluamVjdGFibGUpIHtcbiAgICAgICAgICAgIGluamVjdGFibGVzLnB1c2goaW5qZWN0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzTmdTeW1ib2wpIHtcbiAgICAgICAgZXhwb3J0c05vblNvdXJjZUZpbGVzID1cbiAgICAgICAgICAgIGV4cG9ydHNOb25Tb3VyY2VGaWxlcyB8fCBpc1ZhbHVlRXhwb3J0aW5nTm9uU291cmNlRmlsZShob3N0LCBzeW1ib2xNZXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lLFxuICAgIGRpcmVjdGl2ZXMsXG4gICAgYWJzdHJhY3REaXJlY3RpdmVzLFxuICAgIHBpcGVzLFxuICAgIG5nTW9kdWxlcyxcbiAgICBpbmplY3RhYmxlcyxcbiAgICBleHBvcnRzTm9uU291cmNlRmlsZXMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplRmlsZUZvckluamVjdGFibGVzKFxuICAgIGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIGZpbGVOYW1lOiBzdHJpbmcpOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlcyB7XG4gIGNvbnN0IGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10gPSBbXTtcbiAgY29uc3Qgc2hhbGxvd01vZHVsZXM6IENvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGFbXSA9IFtdO1xuICBpZiAoc3RhdGljU3ltYm9sUmVzb2x2ZXIuaGFzRGVjb3JhdG9ycyhmaWxlTmFtZSkpIHtcbiAgICBzdGF0aWNTeW1ib2xSZXNvbHZlci5nZXRTeW1ib2xzT2YoZmlsZU5hbWUpLmZvckVhY2goKHN5bWJvbCkgPT4ge1xuICAgICAgY29uc3QgcmVzb2x2ZWRTeW1ib2wgPSBzdGF0aWNTeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHN5bWJvbCk7XG4gICAgICBjb25zdCBzeW1ib2xNZXRhID0gcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGE7XG4gICAgICBpZiAoIXN5bWJvbE1ldGEgfHwgc3ltYm9sTWV0YS5fX3N5bWJvbGljID09PSAnZXJyb3InKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzeW1ib2xNZXRhLl9fc3ltYm9saWMgPT09ICdjbGFzcycpIHtcbiAgICAgICAgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNJbmplY3RhYmxlKHN5bWJvbCkpIHtcbiAgICAgICAgICBjb25zdCBpbmplY3RhYmxlID0gbWV0YWRhdGFSZXNvbHZlci5nZXRJbmplY3RhYmxlTWV0YWRhdGEoc3ltYm9sLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKGluamVjdGFibGUpIHtcbiAgICAgICAgICAgIGluamVjdGFibGVzLnB1c2goaW5qZWN0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNOZ01vZHVsZShzeW1ib2wpKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlID0gbWV0YWRhdGFSZXNvbHZlci5nZXRTaGFsbG93TW9kdWxlTWV0YWRhdGEoc3ltYm9sKTtcbiAgICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBzaGFsbG93TW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtmaWxlTmFtZSwgaW5qZWN0YWJsZXMsIHNoYWxsb3dNb2R1bGVzfTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUV4cG9ydGluZ05vblNvdXJjZUZpbGUoaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIG1ldGFkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgbGV0IGV4cG9ydHNOb25Tb3VyY2VGaWxlcyA9IGZhbHNlO1xuXG4gIGNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBWYWx1ZVZpc2l0b3Ige1xuICAgIHZpc2l0QXJyYXkoYXJyOiBhbnlbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIGFyci5mb3JFYWNoKHYgPT4gdmlzaXRWYWx1ZSh2LCB0aGlzLCBjb250ZXh0KSk7XG4gICAgfVxuICAgIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGtleSkgPT4gdmlzaXRWYWx1ZShtYXBba2V5XSwgdGhpcywgY29udGV4dCkpO1xuICAgIH1cbiAgICB2aXNpdFByaW1pdGl2ZSh2YWx1ZTogYW55LCBjb250ZXh0OiBhbnkpOiBhbnkge31cbiAgICB2aXNpdE90aGVyKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wgJiYgIWhvc3QuaXNTb3VyY2VGaWxlKHZhbHVlLmZpbGVQYXRoKSkge1xuICAgICAgICBleHBvcnRzTm9uU291cmNlRmlsZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0VmFsdWUobWV0YWRhdGEsIG5ldyBWaXNpdG9yKCksIG51bGwpO1xuICByZXR1cm4gZXhwb3J0c05vblNvdXJjZUZpbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbmFseXplZEZpbGVzKGFuYWx5emVkRmlsZXM6IE5nQW5hbHl6ZWRGaWxlW10pOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIGNvbnN0IGFsbE5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhPigpO1xuICBjb25zdCBhbGxQaXBlc0FuZERpcmVjdGl2ZXMgPSBuZXcgU2V0PFN0YXRpY1N5bWJvbD4oKTtcblxuICBhbmFseXplZEZpbGVzLmZvckVhY2goYWYgPT4ge1xuICAgIGFmLm5nTW9kdWxlcy5mb3JFYWNoKG5nTW9kdWxlID0+IHtcbiAgICAgIGFsbE5nTW9kdWxlcy5wdXNoKG5nTW9kdWxlKTtcbiAgICAgIG5nTW9kdWxlLmRlY2xhcmVkRGlyZWN0aXZlcy5mb3JFYWNoKFxuICAgICAgICAgIGQgPT4gbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZS5zZXQoZC5yZWZlcmVuY2UsIG5nTW9kdWxlKSk7XG4gICAgICBuZ01vZHVsZS5kZWNsYXJlZFBpcGVzLmZvckVhY2gocCA9PiBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLnNldChwLnJlZmVyZW5jZSwgbmdNb2R1bGUpKTtcbiAgICB9KTtcbiAgICBhZi5kaXJlY3RpdmVzLmZvckVhY2goZCA9PiBhbGxQaXBlc0FuZERpcmVjdGl2ZXMuYWRkKGQpKTtcbiAgICBhZi5waXBlcy5mb3JFYWNoKHAgPT4gYWxsUGlwZXNBbmREaXJlY3RpdmVzLmFkZChwKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHN5bWJvbHNNaXNzaW5nTW9kdWxlOiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICBhbGxQaXBlc0FuZERpcmVjdGl2ZXMuZm9yRWFjaChyZWYgPT4ge1xuICAgIGlmICghbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZS5oYXMocmVmKSkge1xuICAgICAgc3ltYm9sc01pc3NpbmdNb2R1bGUucHVzaChyZWYpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbmdNb2R1bGVzOiBhbGxOZ01vZHVsZXMsXG4gICAgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSxcbiAgICBzeW1ib2xzTWlzc2luZ01vZHVsZSxcbiAgICBmaWxlczogYW5hbHl6ZWRGaWxlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUFuZFZhbGlkYXRlTmdGaWxlcyhmaWxlczogTmdBbmFseXplZEZpbGVbXSk6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgcmV0dXJuIHZhbGlkYXRlQW5hbHl6ZWRNb2R1bGVzKG1lcmdlQW5hbHl6ZWRGaWxlcyhmaWxlcykpO1xufVxuIl19