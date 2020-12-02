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
        define("@angular/compiler/src/aot/compiler", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/constant_pool", "@angular/compiler/src/core", "@angular/compiler/src/i18n/message_bundle", "@angular/compiler/src/identifiers", "@angular/compiler/src/ml_parser/html_parser", "@angular/compiler/src/ml_parser/html_whitespaces", "@angular/compiler/src/ml_parser/interpolation_config", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/render3/r3_module_compiler", "@angular/compiler/src/render3/r3_pipe_compiler", "@angular/compiler/src/render3/r3_template_transform", "@angular/compiler/src/render3/view/compiler", "@angular/compiler/src/schema/dom_element_schema_registry", "@angular/compiler/src/template_parser/binding_parser", "@angular/compiler/src/util", "@angular/compiler/src/aot/generated_file", "@angular/compiler/src/aot/lazy_routes", "@angular/compiler/src/aot/static_symbol", "@angular/compiler/src/aot/summary_serializer", "@angular/compiler/src/aot/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var constant_pool_1 = require("@angular/compiler/src/constant_pool");
    var core_1 = require("@angular/compiler/src/core");
    var message_bundle_1 = require("@angular/compiler/src/i18n/message_bundle");
    var identifiers_1 = require("@angular/compiler/src/identifiers");
    var html_parser_1 = require("@angular/compiler/src/ml_parser/html_parser");
    var html_whitespaces_1 = require("@angular/compiler/src/ml_parser/html_whitespaces");
    var interpolation_config_1 = require("@angular/compiler/src/ml_parser/interpolation_config");
    var o = require("@angular/compiler/src/output/output_ast");
    var r3_module_compiler_1 = require("@angular/compiler/src/render3/r3_module_compiler");
    var r3_pipe_compiler_1 = require("@angular/compiler/src/render3/r3_pipe_compiler");
    var r3_template_transform_1 = require("@angular/compiler/src/render3/r3_template_transform");
    var compiler_1 = require("@angular/compiler/src/render3/view/compiler");
    var dom_element_schema_registry_1 = require("@angular/compiler/src/schema/dom_element_schema_registry");
    var binding_parser_1 = require("@angular/compiler/src/template_parser/binding_parser");
    var util_1 = require("@angular/compiler/src/util");
    var generated_file_1 = require("@angular/compiler/src/aot/generated_file");
    var lazy_routes_1 = require("@angular/compiler/src/aot/lazy_routes");
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var summary_serializer_1 = require("@angular/compiler/src/aot/summary_serializer");
    var util_2 = require("@angular/compiler/src/aot/util");
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
                genFileNames.push(util_2.ngfactoryFilePath(file.fileName, true));
                if (this._options.enableSummariesForJit) {
                    genFileNames.push(util_2.summaryForJitFileName(file.fileName, true));
                }
            }
            var fileSuffix = util_2.normalizeGenFileSuffix(util_2.splitTypescriptSuffix(file.fileName, true)[1]);
            file.directives.forEach(function (dirSymbol) {
                var compMeta = _this._metadataResolver.getNonNormalizedDirectiveMetadata(dirSymbol).metadata;
                if (!compMeta.isComponent) {
                    return;
                }
                // Note: compMeta is a component and therefore template is non null.
                compMeta.template.styleUrls.forEach(function (styleUrl) {
                    var normalizedUrl = _this._host.resourceNameToFileName(styleUrl, file.fileName);
                    if (!normalizedUrl) {
                        throw util_1.syntaxError("Couldn't resolve resource " + styleUrl + " relative to " + file.fileName);
                    }
                    var needsShim = (compMeta.template.encapsulation ||
                        _this._config.defaultEncapsulation) === core_1.ViewEncapsulation.Emulated;
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
                        summary_serializer_1.createForJitStub(outputCtx, ngModule.type.reference);
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
                var externalReferences = tslib_1.__spread(ngModuleMeta.transitiveModule.directives.map(function (d) { return d.reference; }), ngModuleMeta.transitiveModule.pipes.map(function (d) { return d.reference; }), ngModuleMeta.importedModules.map(function (m) { return m.type.reference; }), ngModuleMeta.exportedModules.map(function (m) { return m.type.reference; }), _this._externalIdentifierReferences([identifiers_1.Identifiers.TemplateRef, identifiers_1.Identifiers.ElementRef]));
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
                for (var references_1 = tslib_1.__values(references), references_1_1 = references_1.next(); !references_1_1.done; references_1_1 = references_1.next()) {
                    var reference = references_1_1.value;
                    var token = identifiers_1.createTokenForExternalReference(this.reflector, reference);
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
            (_a = ctx.statements).push.apply(_a, tslib_1.__spread(this._typeCheckCompiler.compileComponent(componentId, compMeta, parsedTemplate, usedPipes, externalReferenceVars, ctx)));
        };
        AotCompiler.prototype.emitMessageBundle = function (analyzeResult, locale) {
            var _this = this;
            var errors = [];
            var htmlParser = new html_parser_1.HtmlParser();
            // TODO(vicb): implicit tags & attributes
            var messageBundle = new message_bundle_1.MessageBundle(htmlParser, [], {}, locale);
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
                    var interpolationConfig = interpolation_config_1.InterpolationConfig.fromArray(compMeta.template.interpolation);
                    errors.push.apply(errors, tslib_1.__spread(messageBundle.updateFromTemplate(html, templateUrl, interpolationConfig)));
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
                statements: tslib_1.__spread(context.constantPool.statements, context.statements),
            }); });
        };
        AotCompiler.prototype._compileShallowModules = function (fileName, shallowModules, context) {
            var _this = this;
            shallowModules.forEach(function (module) { return r3_module_compiler_1.compileNgModuleFromRender2(context, module, _this._injectableCompiler); });
        };
        AotCompiler.prototype._compilePartialModule = function (fileName, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables, context) {
            var _this = this;
            var errors = [];
            var schemaRegistry = new dom_element_schema_registry_1.DomElementSchemaRegistry();
            var hostBindingParser = new binding_parser_1.BindingParser(this._templateParser.expressionParser, interpolation_config_1.DEFAULT_INTERPOLATION_CONFIG, schemaRegistry, [], errors);
            // Process all components and directives
            directives.forEach(function (directiveType) {
                var directiveMetadata = _this._metadataResolver.getDirectiveMetadata(directiveType);
                if (directiveMetadata.isComponent) {
                    var module = ngModuleByPipeOrDirective.get(directiveType);
                    module ||
                        util_1.error("Cannot determine the module for component '" + compile_metadata_1.identifierName(directiveMetadata.type) + "'");
                    var htmlAst = directiveMetadata.template.htmlAst;
                    var preserveWhitespaces = directiveMetadata.template.preserveWhitespaces;
                    if (!preserveWhitespaces) {
                        htmlAst = html_whitespaces_1.removeWhitespaces(htmlAst);
                    }
                    var render3Ast = r3_template_transform_1.htmlAstToRender3Ast(htmlAst.rootNodes, hostBindingParser);
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
                    compiler_1.compileComponentFromRender2(context, directiveMetadata, render3Ast, _this.reflector, hostBindingParser, directiveTypeBySel_1, pipeTypeByName_1);
                }
                else {
                    compiler_1.compileDirectiveFromRender2(context, directiveMetadata, _this.reflector, hostBindingParser);
                }
            });
            pipes.forEach(function (pipeType) {
                var pipeMetadata = _this._metadataResolver.getPipeMetadata(pipeType);
                if (pipeMetadata) {
                    r3_pipe_compiler_1.compilePipeFromRender2(context, pipeMetadata, _this.reflector);
                }
            });
            injectables.forEach(function (injectable) { return _this._injectableCompiler.compile(injectable, context); });
        };
        AotCompiler.prototype.emitAllPartialModules2 = function (files) {
            var _this = this;
            // Using reduce like this is a select many pattern (where map is a select pattern)
            return files.reduce(function (r, file) {
                r.push.apply(r, tslib_1.__spread(_this._emitPartialModule2(file.fileName, file.injectables)));
                return r;
            }, []);
        };
        AotCompiler.prototype._emitPartialModule2 = function (fileName, injectables) {
            var _this = this;
            var context = this._createOutputContext(fileName);
            injectables.forEach(function (injectable) { return _this._injectableCompiler.compile(injectable, context); });
            if (context.statements && context.statements.length > 0) {
                return [{ fileName: fileName, statements: tslib_1.__spread(context.constantPool.statements, context.statements) }];
            }
            return [];
        };
        AotCompiler.prototype.emitAllImpls = function (analyzeResult) {
            var _this = this;
            var ngModuleByPipeOrDirective = analyzeResult.ngModuleByPipeOrDirective, files = analyzeResult.files;
            var sourceModules = files.map(function (file) { return _this._compileImplFile(file.fileName, ngModuleByPipeOrDirective, file.directives, file.pipes, file.ngModules, file.injectables); });
            return compile_metadata_1.flatten(sourceModules);
        };
        AotCompiler.prototype._compileImplFile = function (srcFileUrl, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables) {
            var _this = this;
            var fileSuffix = util_2.normalizeGenFileSuffix(util_2.splitTypescriptSuffix(srcFileUrl, true)[1]);
            var generatedFiles = [];
            var outputCtx = this._createOutputContext(util_2.ngfactoryFilePath(srcFileUrl, true));
            generatedFiles.push.apply(generatedFiles, tslib_1.__spread(this._createSummary(srcFileUrl, directives, pipes, ngModules, injectables, outputCtx)));
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
                    throw new Error("Internal Error: cannot determine the module for component " + compile_metadata_1.identifierName(compMeta.type) + "!");
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
            var typeData = tslib_1.__spread(ngModules.map(function (meta) { return ({
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
                this._createOutputContext(util_2.summaryForJitFileName(srcFileName, true)) :
                null;
            var _a = summary_serializer_1.serializeSummaries(srcFileName, forJitOutputCtx, this._summaryResolver, this._symbolResolver, symbolSummaries, typeData, this._options.createExternalSymbolFactoryReexports), json = _a.json, exportAs = _a.exportAs;
            exportAs.forEach(function (entry) {
                ngFactoryCtx.statements.push(o.variable(entry.exportAs).set(ngFactoryCtx.importExpr(entry.symbol)).toDeclStmt(null, [
                    o.StmtModifier.Exported
                ]));
            });
            var summaryJson = new generated_file_1.GeneratedFile(srcFileName, util_2.summaryFileName(srcFileName), json);
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
                    token: identifiers_1.createTokenForExternalReference(this.reflector, identifiers_1.Identifiers.LOCALE_ID),
                    useValue: normalizedLocale,
                });
            }
            if (this._options.i18nFormat) {
                providers.push({
                    token: identifiers_1.createTokenForExternalReference(this.reflector, identifiers_1.Identifiers.TRANSLATIONS_FORMAT),
                    useValue: this._options.i18nFormat
                });
            }
            this._ngModuleCompiler.compile(outputCtx, ngModule, providers);
        };
        AotCompiler.prototype._compileComponentFactory = function (outputCtx, compMeta, ngModule, fileSuffix) {
            var hostMeta = this._metadataResolver.getHostComponentMetadata(compMeta);
            var hostViewFactoryVar = this._compileComponent(outputCtx, hostMeta, ngModule, [compMeta.type], null, fileSuffix)
                .viewClassVar;
            var compFactoryVar = compile_metadata_1.componentFactoryName(compMeta.type.reference);
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
                .set(o.importExpr(identifiers_1.Identifiers.createComponentFactory).callFn([
                o.literal(compMeta.selector), outputCtx.importExpr(compMeta.type.reference),
                o.variable(hostViewFactoryVar), new o.LiteralMapExpr(inputsExprs),
                new o.LiteralMapExpr(outputsExprs),
                o.literalArr(compMeta.template.ngContentSelectors.map(function (selector) { return o.literal(selector); }))
            ]))
                .toDeclStmt(o.importType(identifiers_1.Identifiers.ComponentFactory, [o.expressionType(outputCtx.importExpr(compMeta.type.reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]));
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
            var result = this._templateParser.parse(compMeta, compMeta.template.htmlAst, directives, pipes, ngModule.schemas, compile_metadata_1.templateSourceUrl(ngModule.type, compMeta, compMeta.template), preserveWhitespaces);
            this._templateAstCache.set(compMeta.type.reference, result);
            return result;
        };
        AotCompiler.prototype._createOutputContext = function (genFilePath) {
            var _this = this;
            var importExpr = function (symbol, typeParams, useSummaries) {
                if (typeParams === void 0) { typeParams = null; }
                if (useSummaries === void 0) { useSummaries = true; }
                if (!(symbol instanceof static_symbol_1.StaticSymbol)) {
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
                var allTypeParams = suppliedTypeParams.concat(util_1.newArray(missingTypeParamsCount, o.DYNAMIC_TYPE));
                return members.reduce(function (expr, memberName) { return expr.prop(memberName); }, o.importExpr(new o.ExternalReference(moduleName, name, null), allTypeParams));
            };
            return { statements: [], genFilePath: genFilePath, importExpr: importExpr, constantPool: new constant_pool_1.ConstantPool() };
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
            return new generated_file_1.GeneratedFile(srcFileUrl, ctx.genFilePath, ctx.statements);
        };
        AotCompiler.prototype.listLazyRoutes = function (entryRoute, analyzedModules) {
            var e_2, _a, e_3, _b;
            var self = this;
            if (entryRoute) {
                var symbol = lazy_routes_1.parseLazyRoute(entryRoute, this.reflector).referencedModule;
                return visitLazyRoute(symbol);
            }
            else if (analyzedModules) {
                var allLazyRoutes = [];
                try {
                    for (var _c = tslib_1.__values(analyzedModules.ngModules), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var ngModule = _d.value;
                        var lazyRoutes = lazy_routes_1.listLazyRoutes(ngModule, this.reflector);
                        try {
                            for (var lazyRoutes_1 = (e_3 = void 0, tslib_1.__values(lazyRoutes)), lazyRoutes_1_1 = lazyRoutes_1.next(); !lazyRoutes_1_1.done; lazyRoutes_1_1 = lazyRoutes_1.next()) {
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
                var lazyRoutes = lazy_routes_1.listLazyRoutes(self._metadataResolver.getNgModuleMetadata(symbol, true), self.reflector);
                try {
                    for (var lazyRoutes_2 = tslib_1.__values(lazyRoutes), lazyRoutes_2_1 = lazyRoutes_2.next(); !lazyRoutes_2_1.done; lazyRoutes_2_1 = lazyRoutes_2.next()) {
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
    exports.AotCompiler = AotCompiler;
    function _createEmptyStub(outputCtx) {
        // Note: We need to produce at least one import statement so that
        // TypeScript knows that the file is an es6 module. Otherwise our generated
        // exports / imports won't be emitted properly by TypeScript.
        outputCtx.statements.push(o.importExpr(identifiers_1.Identifiers.ComponentFactory).toStmt());
    }
    function _resolveStyleStatements(symbolResolver, compileResult, needsShim, fileSuffix) {
        compileResult.dependencies.forEach(function (dep) {
            dep.setValue(symbolResolver.getStaticSymbol(_stylesModuleUrl(dep.moduleUrl, needsShim, fileSuffix), dep.name));
        });
    }
    function _stylesModuleUrl(stylesheetUrl, shim, suffix) {
        return "" + stylesheetUrl + (shim ? '.shim' : '') + ".ngstyle" + suffix;
    }
    function analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
        var files = _analyzeFilesIncludingNonProgramFiles(fileNames, host, staticSymbolResolver, metadataResolver);
        return mergeAnalyzedFiles(files);
    }
    exports.analyzeNgModules = analyzeNgModules;
    function analyzeAndValidateNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
        return validateAnalyzedModules(analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver));
    }
    exports.analyzeAndValidateNgModules = analyzeAndValidateNgModules;
    function validateAnalyzedModules(analyzedModules) {
        if (analyzedModules.symbolsMissingModule && analyzedModules.symbolsMissingModule.length) {
            var messages = analyzedModules.symbolsMissingModule.map(function (s) { return "Cannot determine the module for class " + s.name + " in " + s.filePath + "! Add " + s.name + " to the NgModule to fix it."; });
            throw util_1.syntaxError(messages.join('\n'));
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
    function analyzeFile(host, staticSymbolResolver, metadataResolver, fileName) {
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
    exports.analyzeFile = analyzeFile;
    function analyzeFileForInjectables(host, staticSymbolResolver, metadataResolver, fileName) {
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
    exports.analyzeFileForInjectables = analyzeFileForInjectables;
    function isValueExportingNonSourceFile(host, metadata) {
        var exportsNonSourceFiles = false;
        var Visitor = /** @class */ (function () {
            function Visitor() {
            }
            Visitor.prototype.visitArray = function (arr, context) {
                var _this = this;
                arr.forEach(function (v) { return util_1.visitValue(v, _this, context); });
            };
            Visitor.prototype.visitStringMap = function (map, context) {
                var _this = this;
                Object.keys(map).forEach(function (key) { return util_1.visitValue(map[key], _this, context); });
            };
            Visitor.prototype.visitPrimitive = function (value, context) { };
            Visitor.prototype.visitOther = function (value, context) {
                if (value instanceof static_symbol_1.StaticSymbol && !host.isSourceFile(value.filePath)) {
                    exportsNonSourceFiles = true;
                }
            };
            return Visitor;
        }());
        util_1.visitValue(metadata, new Visitor(), null);
        return exportsNonSourceFiles;
    }
    function mergeAnalyzedFiles(analyzedFiles) {
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
    exports.mergeAnalyzedFiles = mergeAnalyzedFiles;
    function mergeAndValidateNgFiles(files) {
        return validateAnalyzedModules(mergeAnalyzedFiles(files));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYW90L2NvbXBpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDJFQUFrWDtJQUVsWCxxRUFBOEM7SUFDOUMsbURBQTBDO0lBQzFDLDRFQUFxRDtJQUNyRCxpRUFBNEU7SUFHNUUsMkVBQW9EO0lBQ3BELHFGQUFnRTtJQUNoRSw2RkFBb0c7SUFHcEcsMkRBQTBDO0lBRTFDLHVGQUE0RjtJQUM1RixtRkFBb0Y7SUFDcEYsNkZBQXFFO0lBQ3JFLHdFQUE4STtJQUM5SSx3R0FBK0U7SUFHL0UsdUZBQWdFO0lBR2hFLG1EQUE4RjtJQU05RiwyRUFBK0M7SUFDL0MscUVBQXdFO0lBR3hFLHlFQUE2QztJQUU3QyxtRkFBMEU7SUFDMUUsdURBQWdJO0lBUWhJO1FBTUUscUJBQ1ksT0FBdUIsRUFBVSxRQUE0QixFQUM3RCxLQUFzQixFQUFXLFNBQTBCLEVBQzNELGlCQUEwQyxFQUFVLGVBQStCLEVBQ25GLGNBQTZCLEVBQVUsYUFBMkIsRUFDbEUsa0JBQXFDLEVBQVUsaUJBQW1DLEVBQ2xGLG1CQUF1QyxFQUFVLGNBQTZCLEVBQzlFLGdCQUErQyxFQUMvQyxlQUFxQztZQVByQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtZQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1lBQzdELFVBQUssR0FBTCxLQUFLLENBQWlCO1lBQVcsY0FBUyxHQUFULFNBQVMsQ0FBaUI7WUFDM0Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtZQUNuRixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1lBQ2xFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7WUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENB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QUMsS0FBdUI7UUFDdEQsT0FBTyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhLCBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgQ29tcGlsZVBpcGVNZXRhZGF0YSwgQ29tcGlsZVBpcGVTdW1tYXJ5LCBDb21waWxlUHJvdmlkZXJNZXRhZGF0YSwgQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YSwgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSwgQ29tcGlsZVR5cGVNZXRhZGF0YSwgQ29tcGlsZVR5cGVTdW1tYXJ5LCBjb21wb25lbnRGYWN0b3J5TmFtZSwgZmxhdHRlbiwgaWRlbnRpZmllck5hbWUsIHRlbXBsYXRlU291cmNlVXJsfSBmcm9tICcuLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZXJDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnLi4vY29uc3RhbnRfcG9vbCc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUJ1bmRsZX0gZnJvbSAnLi4vaTE4bi9tZXNzYWdlX2J1bmRsZSc7XG5pbXBvcnQge2NyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UsIElkZW50aWZpZXJzfSBmcm9tICcuLi9pZGVudGlmaWVycyc7XG5pbXBvcnQge0luamVjdGFibGVDb21waWxlcn0gZnJvbSAnLi4vaW5qZWN0YWJsZV9jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuLi9tZXRhZGF0YV9yZXNvbHZlcic7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge3JlbW92ZVdoaXRlc3BhY2VzfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF93aGl0ZXNwYWNlcyc7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge05nTW9kdWxlQ29tcGlsZXJ9IGZyb20gJy4uL25nX21vZHVsZV9jb21waWxlcic7XG5pbXBvcnQge091dHB1dEVtaXR0ZXJ9IGZyb20gJy4uL291dHB1dC9hYnN0cmFjdF9lbWl0dGVyJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtQYXJzZUVycm9yfSBmcm9tICcuLi9wYXJzZV91dGlsJztcbmltcG9ydCB7Y29tcGlsZU5nTW9kdWxlRnJvbVJlbmRlcjIgYXMgY29tcGlsZVIzTW9kdWxlfSBmcm9tICcuLi9yZW5kZXIzL3IzX21vZHVsZV9jb21waWxlcic7XG5pbXBvcnQge2NvbXBpbGVQaXBlRnJvbVJlbmRlcjIgYXMgY29tcGlsZVIzUGlwZX0gZnJvbSAnLi4vcmVuZGVyMy9yM19waXBlX2NvbXBpbGVyJztcbmltcG9ydCB7aHRtbEFzdFRvUmVuZGVyM0FzdH0gZnJvbSAnLi4vcmVuZGVyMy9yM190ZW1wbGF0ZV90cmFuc2Zvcm0nO1xuaW1wb3J0IHtjb21waWxlQ29tcG9uZW50RnJvbVJlbmRlcjIgYXMgY29tcGlsZVIzQ29tcG9uZW50LCBjb21waWxlRGlyZWN0aXZlRnJvbVJlbmRlcjIgYXMgY29tcGlsZVIzRGlyZWN0aXZlfSBmcm9tICcuLi9yZW5kZXIzL3ZpZXcvY29tcGlsZXInO1xuaW1wb3J0IHtEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9IGZyb20gJy4uL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtDb21waWxlZFN0eWxlc2hlZXQsIFN0eWxlQ29tcGlsZXJ9IGZyb20gJy4uL3N0eWxlX2NvbXBpbGVyJztcbmltcG9ydCB7U3VtbWFyeVJlc29sdmVyfSBmcm9tICcuLi9zdW1tYXJ5X3Jlc29sdmVyJztcbmltcG9ydCB7QmluZGluZ1BhcnNlcn0gZnJvbSAnLi4vdGVtcGxhdGVfcGFyc2VyL2JpbmRpbmdfcGFyc2VyJztcbmltcG9ydCB7VGVtcGxhdGVBc3R9IGZyb20gJy4uL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9hc3QnO1xuaW1wb3J0IHtUZW1wbGF0ZVBhcnNlcn0gZnJvbSAnLi4vdGVtcGxhdGVfcGFyc2VyL3RlbXBsYXRlX3BhcnNlcic7XG5pbXBvcnQge2Vycm9yLCBuZXdBcnJheSwgT3V0cHV0Q29udGV4dCwgc3ludGF4RXJyb3IsIFZhbHVlVmlzaXRvciwgdmlzaXRWYWx1ZX0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQge1R5cGVDaGVja0NvbXBpbGVyfSBmcm9tICcuLi92aWV3X2NvbXBpbGVyL3R5cGVfY2hlY2tfY29tcGlsZXInO1xuaW1wb3J0IHtWaWV3Q29tcGlsZXIsIFZpZXdDb21waWxlUmVzdWx0fSBmcm9tICcuLi92aWV3X2NvbXBpbGVyL3ZpZXdfY29tcGlsZXInO1xuXG5pbXBvcnQge0FvdENvbXBpbGVySG9zdH0gZnJvbSAnLi9jb21waWxlcl9ob3N0JztcbmltcG9ydCB7QW90Q29tcGlsZXJPcHRpb25zfSBmcm9tICcuL2NvbXBpbGVyX29wdGlvbnMnO1xuaW1wb3J0IHtHZW5lcmF0ZWRGaWxlfSBmcm9tICcuL2dlbmVyYXRlZF9maWxlJztcbmltcG9ydCB7TGF6eVJvdXRlLCBsaXN0TGF6eVJvdXRlcywgcGFyc2VMYXp5Um91dGV9IGZyb20gJy4vbGF6eV9yb3V0ZXMnO1xuaW1wb3J0IHtQYXJ0aWFsTW9kdWxlfSBmcm9tICcuL3BhcnRpYWxfbW9kdWxlJztcbmltcG9ydCB7U3RhdGljUmVmbGVjdG9yfSBmcm9tICcuL3N0YXRpY19yZWZsZWN0b3InO1xuaW1wb3J0IHtTdGF0aWNTeW1ib2x9IGZyb20gJy4vc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge1N0YXRpY1N5bWJvbFJlc29sdmVyfSBmcm9tICcuL3N0YXRpY19zeW1ib2xfcmVzb2x2ZXInO1xuaW1wb3J0IHtjcmVhdGVGb3JKaXRTdHViLCBzZXJpYWxpemVTdW1tYXJpZXN9IGZyb20gJy4vc3VtbWFyeV9zZXJpYWxpemVyJztcbmltcG9ydCB7bmdmYWN0b3J5RmlsZVBhdGgsIG5vcm1hbGl6ZUdlbkZpbGVTdWZmaXgsIHNwbGl0VHlwZXNjcmlwdFN1ZmZpeCwgc3VtbWFyeUZpbGVOYW1lLCBzdW1tYXJ5Rm9ySml0RmlsZU5hbWV9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGVudW0gU3R1YkVtaXRGbGFncyB7XG4gIEJhc2ljID0gMSA8PCAwLFxuICBUeXBlQ2hlY2sgPSAxIDw8IDEsXG4gIEFsbCA9IFR5cGVDaGVjayB8IEJhc2ljXG59XG5cbmV4cG9ydCBjbGFzcyBBb3RDb21waWxlciB7XG4gIHByaXZhdGUgX3RlbXBsYXRlQXN0Q2FjaGUgPVxuICAgICAgbmV3IE1hcDxTdGF0aWNTeW1ib2wsIHt0ZW1wbGF0ZTogVGVtcGxhdGVBc3RbXSwgcGlwZXM6IENvbXBpbGVQaXBlU3VtbWFyeVtdfT4oKTtcbiAgcHJpdmF0ZSBfYW5hbHl6ZWRGaWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBOZ0FuYWx5emVkRmlsZT4oKTtcbiAgcHJpdmF0ZSBfYW5hbHl6ZWRGaWxlc0ZvckluamVjdGFibGVzID0gbmV3IE1hcDxzdHJpbmcsIE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY29uZmlnOiBDb21waWxlckNvbmZpZywgcHJpdmF0ZSBfb3B0aW9uczogQW90Q29tcGlsZXJPcHRpb25zLFxuICAgICAgcHJpdmF0ZSBfaG9zdDogQW90Q29tcGlsZXJIb3N0LCByZWFkb25seSByZWZsZWN0b3I6IFN0YXRpY1JlZmxlY3RvcixcbiAgICAgIHByaXZhdGUgX21ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBwcml2YXRlIF90ZW1wbGF0ZVBhcnNlcjogVGVtcGxhdGVQYXJzZXIsXG4gICAgICBwcml2YXRlIF9zdHlsZUNvbXBpbGVyOiBTdHlsZUNvbXBpbGVyLCBwcml2YXRlIF92aWV3Q29tcGlsZXI6IFZpZXdDb21waWxlcixcbiAgICAgIHByaXZhdGUgX3R5cGVDaGVja0NvbXBpbGVyOiBUeXBlQ2hlY2tDb21waWxlciwgcHJpdmF0ZSBfbmdNb2R1bGVDb21waWxlcjogTmdNb2R1bGVDb21waWxlcixcbiAgICAgIHByaXZhdGUgX2luamVjdGFibGVDb21waWxlcjogSW5qZWN0YWJsZUNvbXBpbGVyLCBwcml2YXRlIF9vdXRwdXRFbWl0dGVyOiBPdXRwdXRFbWl0dGVyLFxuICAgICAgcHJpdmF0ZSBfc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8U3RhdGljU3ltYm9sPixcbiAgICAgIHByaXZhdGUgX3N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcikge31cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuY2xlYXJDYWNoZSgpO1xuICB9XG5cbiAgYW5hbHl6ZU1vZHVsZXNTeW5jKHJvb3RGaWxlczogc3RyaW5nW10pOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gICAgY29uc3QgYW5hbHl6ZVJlc3VsdCA9IGFuYWx5emVBbmRWYWxpZGF0ZU5nTW9kdWxlcyhcbiAgICAgICAgcm9vdEZpbGVzLCB0aGlzLl9ob3N0LCB0aGlzLl9zeW1ib2xSZXNvbHZlciwgdGhpcy5fbWV0YWRhdGFSZXNvbHZlcik7XG4gICAgYW5hbHl6ZVJlc3VsdC5uZ01vZHVsZXMuZm9yRWFjaChcbiAgICAgICAgbmdNb2R1bGUgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5sb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGEoXG4gICAgICAgICAgICBuZ01vZHVsZS50eXBlLnJlZmVyZW5jZSwgdHJ1ZSkpO1xuICAgIHJldHVybiBhbmFseXplUmVzdWx0O1xuICB9XG5cbiAgYW5hbHl6ZU1vZHVsZXNBc3luYyhyb290RmlsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxOZ0FuYWx5emVkTW9kdWxlcz4ge1xuICAgIGNvbnN0IGFuYWx5emVSZXN1bHQgPSBhbmFseXplQW5kVmFsaWRhdGVOZ01vZHVsZXMoXG4gICAgICAgIHJvb3RGaWxlcywgdGhpcy5faG9zdCwgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIpO1xuICAgIHJldHVybiBQcm9taXNlXG4gICAgICAgIC5hbGwoYW5hbHl6ZVJlc3VsdC5uZ01vZHVsZXMubWFwKFxuICAgICAgICAgICAgbmdNb2R1bGUgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5sb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGEoXG4gICAgICAgICAgICAgICAgbmdNb2R1bGUudHlwZS5yZWZlcmVuY2UsIGZhbHNlKSkpXG4gICAgICAgIC50aGVuKCgpID0+IGFuYWx5emVSZXN1bHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5hbHl6ZUZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IE5nQW5hbHl6ZWRGaWxlIHtcbiAgICBsZXQgYW5hbHl6ZWRGaWxlID0gdGhpcy5fYW5hbHl6ZWRGaWxlcy5nZXQoZmlsZU5hbWUpO1xuICAgIGlmICghYW5hbHl6ZWRGaWxlKSB7XG4gICAgICBhbmFseXplZEZpbGUgPVxuICAgICAgICAgIGFuYWx5emVGaWxlKHRoaXMuX2hvc3QsIHRoaXMuX3N5bWJvbFJlc29sdmVyLCB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLCBmaWxlTmFtZSk7XG4gICAgICB0aGlzLl9hbmFseXplZEZpbGVzLnNldChmaWxlTmFtZSwgYW5hbHl6ZWRGaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuYWx5emVkRmlsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FuYWx5emVGaWxlRm9ySW5qZWN0YWJsZXMoZmlsZU5hbWU6IHN0cmluZyk6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzIHtcbiAgICBsZXQgYW5hbHl6ZWRGaWxlID0gdGhpcy5fYW5hbHl6ZWRGaWxlc0ZvckluamVjdGFibGVzLmdldChmaWxlTmFtZSk7XG4gICAgaWYgKCFhbmFseXplZEZpbGUpIHtcbiAgICAgIGFuYWx5emVkRmlsZSA9IGFuYWx5emVGaWxlRm9ySW5qZWN0YWJsZXMoXG4gICAgICAgICAgdGhpcy5faG9zdCwgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIsIGZpbGVOYW1lKTtcbiAgICAgIHRoaXMuX2FuYWx5emVkRmlsZXNGb3JJbmplY3RhYmxlcy5zZXQoZmlsZU5hbWUsIGFuYWx5emVkRmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBhbmFseXplZEZpbGU7XG4gIH1cblxuICBmaW5kR2VuZXJhdGVkRmlsZU5hbWVzKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZ2VuRmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLl9hbmFseXplRmlsZShmaWxlTmFtZSk7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGNyZWF0ZSBhIC5uZ2ZhY3RvcnkgaWYgd2UgaGF2ZSBhIGluamVjdGFibGUvZGlyZWN0aXZlL3BpcGUvTmdNb2R1bGVcbiAgICAvLyBvciBhIHJlZmVyZW5jZSB0byBhIG5vbiBzb3VyY2UgZmlsZS5cbiAgICAvLyBOb3RlOiBUaGlzIGlzIG92ZXJlc3RpbWF0aW5nIHRoZSByZXF1aXJlZCAubmdmYWN0b3J5IGZpbGVzIGFzIHRoZSByZWFsIGNhbGN1bGF0aW9uIGlzIGhhcmRlci5cbiAgICAvLyBPbmx5IGRvIHRoaXMgZm9yIFN0dWJFbWl0RmxhZ3MuQmFzaWMsIGFzIGFkZGluZyBhIHR5cGUgY2hlY2sgYmxvY2tcbiAgICAvLyBkb2VzIG5vdCBjaGFuZ2UgdGhpcyBmaWxlIChhcyB3ZSBnZW5lcmF0ZSB0eXBlIGNoZWNrIGJsb2NrcyBiYXNlZCBvbiBOZ01vZHVsZXMpLlxuICAgIGlmICh0aGlzLl9vcHRpb25zLmFsbG93RW1wdHlDb2RlZ2VuRmlsZXMgfHwgZmlsZS5kaXJlY3RpdmVzLmxlbmd0aCB8fCBmaWxlLnBpcGVzLmxlbmd0aCB8fFxuICAgICAgICBmaWxlLmluamVjdGFibGVzLmxlbmd0aCB8fCBmaWxlLm5nTW9kdWxlcy5sZW5ndGggfHwgZmlsZS5leHBvcnRzTm9uU291cmNlRmlsZXMpIHtcbiAgICAgIGdlbkZpbGVOYW1lcy5wdXNoKG5nZmFjdG9yeUZpbGVQYXRoKGZpbGUuZmlsZU5hbWUsIHRydWUpKTtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmVuYWJsZVN1bW1hcmllc0ZvckppdCkge1xuICAgICAgICBnZW5GaWxlTmFtZXMucHVzaChzdW1tYXJ5Rm9ySml0RmlsZU5hbWUoZmlsZS5maWxlTmFtZSwgdHJ1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmaWxlU3VmZml4ID0gbm9ybWFsaXplR2VuRmlsZVN1ZmZpeChzcGxpdFR5cGVzY3JpcHRTdWZmaXgoZmlsZS5maWxlTmFtZSwgdHJ1ZSlbMV0pO1xuICAgIGZpbGUuZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJTeW1ib2wpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBNZXRhID1cbiAgICAgICAgICB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldE5vbk5vcm1hbGl6ZWREaXJlY3RpdmVNZXRhZGF0YShkaXJTeW1ib2wpIS5tZXRhZGF0YTtcbiAgICAgIGlmICghY29tcE1ldGEuaXNDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gTm90ZTogY29tcE1ldGEgaXMgYSBjb21wb25lbnQgYW5kIHRoZXJlZm9yZSB0ZW1wbGF0ZSBpcyBub24gbnVsbC5cbiAgICAgIGNvbXBNZXRhLnRlbXBsYXRlICEuc3R5bGVVcmxzLmZvckVhY2goKHN0eWxlVXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSB0aGlzLl9ob3N0LnJlc291cmNlTmFtZVRvRmlsZU5hbWUoc3R5bGVVcmwsIGZpbGUuZmlsZU5hbWUpO1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRVcmwpIHtcbiAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihgQ291bGRuJ3QgcmVzb2x2ZSByZXNvdXJjZSAke3N0eWxlVXJsfSByZWxhdGl2ZSB0byAke2ZpbGUuZmlsZU5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmVlZHNTaGltID0gKGNvbXBNZXRhLnRlbXBsYXRlICEuZW5jYXBzdWxhdGlvbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRFbmNhcHN1bGF0aW9uKSA9PT0gVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQ7XG4gICAgICAgIGdlbkZpbGVOYW1lcy5wdXNoKF9zdHlsZXNNb2R1bGVVcmwobm9ybWFsaXplZFVybCwgbmVlZHNTaGltLCBmaWxlU3VmZml4KSk7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmFsbG93RW1wdHlDb2RlZ2VuRmlsZXMpIHtcbiAgICAgICAgICBnZW5GaWxlTmFtZXMucHVzaChfc3R5bGVzTW9kdWxlVXJsKG5vcm1hbGl6ZWRVcmwsICFuZWVkc1NoaW0sIGZpbGVTdWZmaXgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbkZpbGVOYW1lcztcbiAgfVxuXG4gIGVtaXRCYXNpY1N0dWIoZ2VuRmlsZU5hbWU6IHN0cmluZywgb3JpZ2luYWxGaWxlTmFtZT86IHN0cmluZyk6IEdlbmVyYXRlZEZpbGUge1xuICAgIGNvbnN0IG91dHB1dEN0eCA9IHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoZ2VuRmlsZU5hbWUpO1xuICAgIGlmIChnZW5GaWxlTmFtZS5lbmRzV2l0aCgnLm5nZmFjdG9yeS50cycpKSB7XG4gICAgICBpZiAoIW9yaWdpbmFsRmlsZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEFzc2VydGlvbiBlcnJvcjogcmVxdWlyZSB0aGUgb3JpZ2luYWwgZmlsZSBmb3IgLm5nZmFjdG9yeS50cyBzdHVicy4gRmlsZTogJHtcbiAgICAgICAgICAgICAgICBnZW5GaWxlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZSA9IHRoaXMuX2FuYWx5emVGaWxlKG9yaWdpbmFsRmlsZU5hbWUpO1xuICAgICAgdGhpcy5fY3JlYXRlTmdGYWN0b3J5U3R1YihvdXRwdXRDdHgsIG9yaWdpbmFsRmlsZSwgU3R1YkVtaXRGbGFncy5CYXNpYyk7XG4gICAgfSBlbHNlIGlmIChnZW5GaWxlTmFtZS5lbmRzV2l0aCgnLm5nc3VtbWFyeS50cycpKSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVTdW1tYXJpZXNGb3JKaXQpIHtcbiAgICAgICAgaWYgKCFvcmlnaW5hbEZpbGVOYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgQXNzZXJ0aW9uIGVycm9yOiByZXF1aXJlIHRoZSBvcmlnaW5hbCBmaWxlIGZvciAubmdzdW1tYXJ5LnRzIHN0dWJzLiBGaWxlOiAke1xuICAgICAgICAgICAgICAgICAgZ2VuRmlsZU5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxGaWxlID0gdGhpcy5fYW5hbHl6ZUZpbGUob3JpZ2luYWxGaWxlTmFtZSk7XG4gICAgICAgIF9jcmVhdGVFbXB0eVN0dWIob3V0cHV0Q3R4KTtcbiAgICAgICAgb3JpZ2luYWxGaWxlLm5nTW9kdWxlcy5mb3JFYWNoKG5nTW9kdWxlID0+IHtcbiAgICAgICAgICAvLyBjcmVhdGUgZXhwb3J0cyB0aGF0IHVzZXIgY29kZSBjYW4gcmVmZXJlbmNlXG4gICAgICAgICAgY3JlYXRlRm9ySml0U3R1YihvdXRwdXRDdHgsIG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnZW5GaWxlTmFtZS5lbmRzV2l0aCgnLm5nc3R5bGUudHMnKSkge1xuICAgICAgX2NyZWF0ZUVtcHR5U3R1YihvdXRwdXRDdHgpO1xuICAgIH1cbiAgICAvLyBOb3RlOiBmb3IgdGhlIHN0dWJzLCB3ZSBkb24ndCBuZWVkIGEgcHJvcGVydHkgc3JjRmlsZVVybCxcbiAgICAvLyBhcyBsYXRlciBvbiBpbiBlbWl0QWxsSW1wbHMgd2Ugd2lsbCBjcmVhdGUgdGhlIHByb3BlciBHZW5lcmF0ZWRGaWxlcyB3aXRoIHRoZVxuICAgIC8vIGNvcnJlY3Qgc3JjRmlsZVVybC5cbiAgICAvLyBUaGlzIGlzIGdvb2QgYXMgZS5nLiBmb3IgLm5nc3R5bGUudHMgZmlsZXMgd2UgY2FuJ3QgZGVyaXZlXG4gICAgLy8gdGhlIHVybCBvZiBjb21wb25lbnRzIGJhc2VkIG9uIHRoZSBnZW5GaWxlVXJsLlxuICAgIHJldHVybiB0aGlzLl9jb2RlZ2VuU291cmNlTW9kdWxlKCd1bmtub3duJywgb3V0cHV0Q3R4KTtcbiAgfVxuXG4gIGVtaXRUeXBlQ2hlY2tTdHViKGdlbkZpbGVOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRmlsZU5hbWU6IHN0cmluZyk6IEdlbmVyYXRlZEZpbGV8bnVsbCB7XG4gICAgY29uc3Qgb3JpZ2luYWxGaWxlID0gdGhpcy5fYW5hbHl6ZUZpbGUob3JpZ2luYWxGaWxlTmFtZSk7XG4gICAgY29uc3Qgb3V0cHV0Q3R4ID0gdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChnZW5GaWxlTmFtZSk7XG4gICAgaWYgKGdlbkZpbGVOYW1lLmVuZHNXaXRoKCcubmdmYWN0b3J5LnRzJykpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU5nRmFjdG9yeVN0dWIob3V0cHV0Q3R4LCBvcmlnaW5hbEZpbGUsIFN0dWJFbWl0RmxhZ3MuVHlwZUNoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEN0eC5zdGF0ZW1lbnRzLmxlbmd0aCA+IDAgP1xuICAgICAgICB0aGlzLl9jb2RlZ2VuU291cmNlTW9kdWxlKG9yaWdpbmFsRmlsZS5maWxlTmFtZSwgb3V0cHV0Q3R4KSA6XG4gICAgICAgIG51bGw7XG4gIH1cblxuICBsb2FkRmlsZXNBc3luYyhmaWxlTmFtZXM6IHN0cmluZ1tdLCB0c0ZpbGVzOiBzdHJpbmdbXSk6IFByb21pc2U8XG4gICAgICB7YW5hbHl6ZWRNb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcywgYW5hbHl6ZWRJbmplY3RhYmxlczogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXNbXX0+IHtcbiAgICBjb25zdCBmaWxlcyA9IGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gdGhpcy5fYW5hbHl6ZUZpbGUoZmlsZU5hbWUpKTtcbiAgICBjb25zdCBsb2FkaW5nUHJvbWlzZXM6IFByb21pc2U8TmdBbmFseXplZE1vZHVsZXM+W10gPSBbXTtcbiAgICBmaWxlcy5mb3JFYWNoKFxuICAgICAgICBmaWxlID0+IGZpbGUubmdNb2R1bGVzLmZvckVhY2goXG4gICAgICAgICAgICBuZ01vZHVsZSA9PlxuICAgICAgICAgICAgICAgIGxvYWRpbmdQcm9taXNlcy5wdXNoKHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIubG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhKFxuICAgICAgICAgICAgICAgICAgICBuZ01vZHVsZS50eXBlLnJlZmVyZW5jZSwgZmFsc2UpKSkpO1xuICAgIGNvbnN0IGFuYWx5emVkSW5qZWN0YWJsZXMgPSB0c0ZpbGVzLm1hcCh0c0ZpbGUgPT4gdGhpcy5fYW5hbHl6ZUZpbGVGb3JJbmplY3RhYmxlcyh0c0ZpbGUpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZGluZ1Byb21pc2VzKS50aGVuKF8gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHl6ZWRNb2R1bGVzOiBtZXJnZUFuZFZhbGlkYXRlTmdGaWxlcyhmaWxlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5emVkSW5qZWN0YWJsZXM6IGFuYWx5emVkSW5qZWN0YWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gIH1cblxuICBsb2FkRmlsZXNTeW5jKGZpbGVOYW1lczogc3RyaW5nW10sIHRzRmlsZXM6IHN0cmluZ1tdKTpcbiAgICAgIHthbmFseXplZE1vZHVsZXM6IE5nQW5hbHl6ZWRNb2R1bGVzLCBhbmFseXplZEluamVjdGFibGVzOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlc1tdfSB7XG4gICAgY29uc3QgZmlsZXMgPSBmaWxlTmFtZXMubWFwKGZpbGVOYW1lID0+IHRoaXMuX2FuYWx5emVGaWxlKGZpbGVOYW1lKSk7XG4gICAgZmlsZXMuZm9yRWFjaChcbiAgICAgICAgZmlsZSA9PiBmaWxlLm5nTW9kdWxlcy5mb3JFYWNoKFxuICAgICAgICAgICAgbmdNb2R1bGUgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5sb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGEoXG4gICAgICAgICAgICAgICAgbmdNb2R1bGUudHlwZS5yZWZlcmVuY2UsIHRydWUpKSk7XG4gICAgY29uc3QgYW5hbHl6ZWRJbmplY3RhYmxlcyA9IHRzRmlsZXMubWFwKHRzRmlsZSA9PiB0aGlzLl9hbmFseXplRmlsZUZvckluamVjdGFibGVzKHRzRmlsZSkpO1xuICAgIHJldHVybiB7XG4gICAgICBhbmFseXplZE1vZHVsZXM6IG1lcmdlQW5kVmFsaWRhdGVOZ0ZpbGVzKGZpbGVzKSxcbiAgICAgIGFuYWx5emVkSW5qZWN0YWJsZXM6IGFuYWx5emVkSW5qZWN0YWJsZXMsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU5nRmFjdG9yeVN0dWIoXG4gICAgICBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIGZpbGU6IE5nQW5hbHl6ZWRGaWxlLCBlbWl0RmxhZ3M6IFN0dWJFbWl0RmxhZ3MpIHtcbiAgICBsZXQgY29tcG9uZW50SWQgPSAwO1xuICAgIGZpbGUubmdNb2R1bGVzLmZvckVhY2goKG5nTW9kdWxlTWV0YSwgbmdNb2R1bGVJbmRleCkgPT4ge1xuICAgICAgLy8gTm90ZTogdGhlIGNvZGUgYmVsb3cgbmVlZHMgdG8gZXhlY3V0ZWQgZm9yIFN0dWJFbWl0RmxhZ3MuQmFzaWMgYW5kIFN0dWJFbWl0RmxhZ3MuVHlwZUNoZWNrLFxuICAgICAgLy8gc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSAubmdmYWN0b3J5IGZpbGUgdG9vIG11Y2ggd2hlbiBhZGRpbmcgdGhlIHR5cGUtY2hlY2sgYmxvY2suXG5cbiAgICAgIC8vIGNyZWF0ZSBleHBvcnRzIHRoYXQgdXNlciBjb2RlIGNhbiByZWZlcmVuY2VcbiAgICAgIHRoaXMuX25nTW9kdWxlQ29tcGlsZXIuY3JlYXRlU3R1YihvdXRwdXRDdHgsIG5nTW9kdWxlTWV0YS50eXBlLnJlZmVyZW5jZSk7XG5cbiAgICAgIC8vIGFkZCByZWZlcmVuY2VzIHRvIHRoZSBzeW1ib2xzIGZyb20gdGhlIG1ldGFkYXRhLlxuICAgICAgLy8gVGhlc2UgY2FuIGJlIHVzZWQgYnkgdGhlIHR5cGUgY2hlY2sgYmxvY2sgZm9yIGNvbXBvbmVudHMsXG4gICAgICAvLyBhbmQgdGhleSBhbHNvIGNhdXNlIFR5cGVTY3JpcHQgdG8gaW5jbHVkZSB0aGVzZSBmaWxlcyBpbnRvIHRoZSBwcm9ncmFtIHRvbyxcbiAgICAgIC8vIHdoaWNoIHdpbGwgbWFrZSB0aGVtIHBhcnQgb2YgdGhlIGFuYWx5emVkRmlsZXMuXG4gICAgICBjb25zdCBleHRlcm5hbFJlZmVyZW5jZXM6IFN0YXRpY1N5bWJvbFtdID0gW1xuICAgICAgICAvLyBBZGQgcmVmZXJlbmNlcyB0aGF0IGFyZSBhdmFpbGFibGUgZnJvbSBhbGwgdGhlIG1vZHVsZXMgYW5kIGltcG9ydHMuXG4gICAgICAgIC4uLm5nTW9kdWxlTWV0YS50cmFuc2l0aXZlTW9kdWxlLmRpcmVjdGl2ZXMubWFwKGQgPT4gZC5yZWZlcmVuY2UpLFxuICAgICAgICAuLi5uZ01vZHVsZU1ldGEudHJhbnNpdGl2ZU1vZHVsZS5waXBlcy5tYXAoZCA9PiBkLnJlZmVyZW5jZSksXG4gICAgICAgIC4uLm5nTW9kdWxlTWV0YS5pbXBvcnRlZE1vZHVsZXMubWFwKG0gPT4gbS50eXBlLnJlZmVyZW5jZSksXG4gICAgICAgIC4uLm5nTW9kdWxlTWV0YS5leHBvcnRlZE1vZHVsZXMubWFwKG0gPT4gbS50eXBlLnJlZmVyZW5jZSksXG5cbiAgICAgICAgLy8gQWRkIHJlZmVyZW5jZXMgdGhhdCBtaWdodCBiZSBpbnNlcnRlZCBieSB0aGUgdGVtcGxhdGUgY29tcGlsZXIuXG4gICAgICAgIC4uLnRoaXMuX2V4dGVybmFsSWRlbnRpZmllclJlZmVyZW5jZXMoW0lkZW50aWZpZXJzLlRlbXBsYXRlUmVmLCBJZGVudGlmaWVycy5FbGVtZW50UmVmXSksXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBleHRlcm5hbFJlZmVyZW5jZVZhcnMgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAgICAgZXh0ZXJuYWxSZWZlcmVuY2VzLmZvckVhY2goKHJlZiwgdHlwZUluZGV4KSA9PiB7XG4gICAgICAgIGV4dGVybmFsUmVmZXJlbmNlVmFycy5zZXQocmVmLCBgX2RlY2wke25nTW9kdWxlSW5kZXh9XyR7dHlwZUluZGV4fWApO1xuICAgICAgfSk7XG4gICAgICBleHRlcm5hbFJlZmVyZW5jZVZhcnMuZm9yRWFjaCgodmFyTmFtZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIG91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goXG4gICAgICAgICAgICBvLnZhcmlhYmxlKHZhck5hbWUpXG4gICAgICAgICAgICAgICAgLnNldChvLk5VTExfRVhQUi5jYXN0KG8uRFlOQU1JQ19UWVBFKSlcbiAgICAgICAgICAgICAgICAudG9EZWNsU3RtdChvLmV4cHJlc3Npb25UeXBlKG91dHB1dEN0eC5pbXBvcnRFeHByKFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UsIC8qIHR5cGVQYXJhbXMgKi8gbnVsbCwgLyogdXNlU3VtbWFyaWVzICovIGZhbHNlKSkpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZW1pdEZsYWdzICYgU3R1YkVtaXRGbGFncy5UeXBlQ2hlY2spIHtcbiAgICAgICAgLy8gYWRkIHRoZSB0eXBlLWNoZWNrIGJsb2NrIGZvciBhbGwgY29tcG9uZW50cyBvZiB0aGUgTmdNb2R1bGVcbiAgICAgICAgbmdNb2R1bGVNZXRhLmRlY2xhcmVkRGlyZWN0aXZlcy5mb3JFYWNoKChkaXJJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbXBNZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YShkaXJJZC5yZWZlcmVuY2UpO1xuICAgICAgICAgIGlmICghY29tcE1ldGEuaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcG9uZW50SWQrKztcbiAgICAgICAgICB0aGlzLl9jcmVhdGVUeXBlQ2hlY2tCbG9jayhcbiAgICAgICAgICAgICAgb3V0cHV0Q3R4LCBgJHtjb21wTWV0YS50eXBlLnJlZmVyZW5jZS5uYW1lfV9Ib3N0XyR7Y29tcG9uZW50SWR9YCwgbmdNb2R1bGVNZXRhLFxuICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldEhvc3RDb21wb25lbnRNZXRhZGF0YShjb21wTWV0YSksIFtjb21wTWV0YS50eXBlXSxcbiAgICAgICAgICAgICAgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzKTtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVUeXBlQ2hlY2tCbG9jayhcbiAgICAgICAgICAgICAgb3V0cHV0Q3R4LCBgJHtjb21wTWV0YS50eXBlLnJlZmVyZW5jZS5uYW1lfV8ke2NvbXBvbmVudElkfWAsIG5nTW9kdWxlTWV0YSwgY29tcE1ldGEsXG4gICAgICAgICAgICAgIG5nTW9kdWxlTWV0YS50cmFuc2l0aXZlTW9kdWxlLmRpcmVjdGl2ZXMsIGV4dGVybmFsUmVmZXJlbmNlVmFycyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG91dHB1dEN0eC5zdGF0ZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgX2NyZWF0ZUVtcHR5U3R1YihvdXRwdXRDdHgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2V4dGVybmFsSWRlbnRpZmllclJlZmVyZW5jZXMocmVmZXJlbmNlczogby5FeHRlcm5hbFJlZmVyZW5jZVtdKTogU3RhdGljU3ltYm9sW10ge1xuICAgIGNvbnN0IHJlc3VsdDogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgICBmb3IgKGxldCByZWZlcmVuY2Ugb2YgcmVmZXJlbmNlcykge1xuICAgICAgY29uc3QgdG9rZW4gPSBjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlKHRoaXMucmVmbGVjdG9yLCByZWZlcmVuY2UpO1xuICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godG9rZW4uaWRlbnRpZmllci5yZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwZUNoZWNrQmxvY2soXG4gICAgICBjdHg6IE91dHB1dENvbnRleHQsIGNvbXBvbmVudElkOiBzdHJpbmcsIG1vZHVsZU1ldGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLFxuICAgICAgY29tcE1ldGE6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgZGlyZWN0aXZlczogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdLFxuICAgICAgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzOiBNYXA8YW55LCBzdHJpbmc+KSB7XG4gICAgY29uc3Qge3RlbXBsYXRlOiBwYXJzZWRUZW1wbGF0ZSwgcGlwZXM6IHVzZWRQaXBlc30gPVxuICAgICAgICB0aGlzLl9wYXJzZVRlbXBsYXRlKGNvbXBNZXRhLCBtb2R1bGVNZXRhLCBkaXJlY3RpdmVzKTtcbiAgICBjdHguc3RhdGVtZW50cy5wdXNoKC4uLnRoaXMuX3R5cGVDaGVja0NvbXBpbGVyLmNvbXBpbGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudElkLCBjb21wTWV0YSwgcGFyc2VkVGVtcGxhdGUsIHVzZWRQaXBlcywgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzLCBjdHgpKTtcbiAgfVxuXG4gIGVtaXRNZXNzYWdlQnVuZGxlKGFuYWx5emVSZXN1bHQ6IE5nQW5hbHl6ZWRNb2R1bGVzLCBsb2NhbGU6IHN0cmluZ3xudWxsKTogTWVzc2FnZUJ1bmRsZSB7XG4gICAgY29uc3QgZXJyb3JzOiBQYXJzZUVycm9yW10gPSBbXTtcbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKTtcblxuICAgIC8vIFRPRE8odmljYik6IGltcGxpY2l0IHRhZ3MgJiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbWVzc2FnZUJ1bmRsZSA9IG5ldyBNZXNzYWdlQnVuZGxlKGh0bWxQYXJzZXIsIFtdLCB7fSwgbG9jYWxlKTtcblxuICAgIGFuYWx5emVSZXN1bHQuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGNvbnN0IGNvbXBNZXRhczogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhW10gPSBbXTtcbiAgICAgIGZpbGUuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZVR5cGUgPT4ge1xuICAgICAgICBjb25zdCBkaXJNZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlKTtcbiAgICAgICAgaWYgKGRpck1ldGEgJiYgZGlyTWV0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgIGNvbXBNZXRhcy5wdXNoKGRpck1ldGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbXBNZXRhcy5mb3JFYWNoKGNvbXBNZXRhID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGNvbXBNZXRhLnRlbXBsYXRlICEudGVtcGxhdGUgITtcbiAgICAgICAgLy8gVGVtcGxhdGUgVVJMIHBvaW50cyB0byBlaXRoZXIgYW4gSFRNTCBvciBUUyBmaWxlIGRlcGVuZGluZyBvbiB3aGV0aGVyXG4gICAgICAgIC8vIHRoZSBmaWxlIGlzIHVzZWQgd2l0aCBgdGVtcGxhdGVVcmw6YCBvciBgdGVtcGxhdGU6YCwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZVVybCA9IGNvbXBNZXRhLnRlbXBsYXRlICEudGVtcGxhdGVVcmwhO1xuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uQ29uZmlnID1cbiAgICAgICAgICAgIEludGVycG9sYXRpb25Db25maWcuZnJvbUFycmF5KGNvbXBNZXRhLnRlbXBsYXRlICEuaW50ZXJwb2xhdGlvbik7XG4gICAgICAgIGVycm9ycy5wdXNoKC4uLm1lc3NhZ2VCdW5kbGUudXBkYXRlRnJvbVRlbXBsYXRlKGh0bWwsIHRlbXBsYXRlVXJsLCBpbnRlcnBvbGF0aW9uQ29uZmlnKSEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5tYXAoZSA9PiBlLnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZUJ1bmRsZTtcbiAgfVxuXG4gIGVtaXRBbGxQYXJ0aWFsTW9kdWxlcyhcbiAgICAgIHtuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLCBmaWxlc306IE5nQW5hbHl6ZWRNb2R1bGVzLFxuICAgICAgcjNGaWxlczogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXNbXSk6IFBhcnRpYWxNb2R1bGVbXSB7XG4gICAgY29uc3QgY29udGV4dE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBPdXRwdXRDb250ZXh0PigpO1xuXG4gICAgY29uc3QgZ2V0Q29udGV4dCA9IChmaWxlTmFtZTogc3RyaW5nKTogT3V0cHV0Q29udGV4dCA9PiB7XG4gICAgICBpZiAoIWNvbnRleHRNYXAuaGFzKGZpbGVOYW1lKSkge1xuICAgICAgICBjb250ZXh0TWFwLnNldChmaWxlTmFtZSwgdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChmaWxlTmFtZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRleHRNYXAuZ2V0KGZpbGVOYW1lKSE7XG4gICAgfTtcblxuICAgIGZpbGVzLmZvckVhY2goXG4gICAgICAgIGZpbGUgPT4gdGhpcy5fY29tcGlsZVBhcnRpYWxNb2R1bGUoXG4gICAgICAgICAgICBmaWxlLmZpbGVOYW1lLCBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLCBmaWxlLmRpcmVjdGl2ZXMsIGZpbGUucGlwZXMsIGZpbGUubmdNb2R1bGVzLFxuICAgICAgICAgICAgZmlsZS5pbmplY3RhYmxlcywgZ2V0Q29udGV4dChmaWxlLmZpbGVOYW1lKSkpO1xuICAgIHIzRmlsZXMuZm9yRWFjaChcbiAgICAgICAgZmlsZSA9PiB0aGlzLl9jb21waWxlU2hhbGxvd01vZHVsZXMoXG4gICAgICAgICAgICBmaWxlLmZpbGVOYW1lLCBmaWxlLnNoYWxsb3dNb2R1bGVzLCBnZXRDb250ZXh0KGZpbGUuZmlsZU5hbWUpKSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShjb250ZXh0TWFwLnZhbHVlcygpKVxuICAgICAgICAubWFwKGNvbnRleHQgPT4gKHtcbiAgICAgICAgICAgICAgIGZpbGVOYW1lOiBjb250ZXh0LmdlbkZpbGVQYXRoLFxuICAgICAgICAgICAgICAgc3RhdGVtZW50czogWy4uLmNvbnRleHQuY29uc3RhbnRQb29sLnN0YXRlbWVudHMsIC4uLmNvbnRleHQuc3RhdGVtZW50c10sXG4gICAgICAgICAgICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZVNoYWxsb3dNb2R1bGVzKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgc2hhbGxvd01vZHVsZXM6IENvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGFbXSxcbiAgICAgIGNvbnRleHQ6IE91dHB1dENvbnRleHQpOiB2b2lkIHtcbiAgICBzaGFsbG93TW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiBjb21waWxlUjNNb2R1bGUoY29udGV4dCwgbW9kdWxlLCB0aGlzLl9pbmplY3RhYmxlQ29tcGlsZXIpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVQYXJ0aWFsTW9kdWxlKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZTogTWFwPFN0YXRpY1N5bWJvbCwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGE+LFxuICAgICAgZGlyZWN0aXZlczogU3RhdGljU3ltYm9sW10sIHBpcGVzOiBTdGF0aWNTeW1ib2xbXSwgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdLFxuICAgICAgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSwgY29udGV4dDogT3V0cHV0Q29udGV4dCk6IHZvaWQge1xuICAgIGNvbnN0IGVycm9yczogUGFyc2VFcnJvcltdID0gW107XG5cbiAgICBjb25zdCBzY2hlbWFSZWdpc3RyeSA9IG5ldyBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnkoKTtcbiAgICBjb25zdCBob3N0QmluZGluZ1BhcnNlciA9IG5ldyBCaW5kaW5nUGFyc2VyKFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVBhcnNlci5leHByZXNzaW9uUGFyc2VyLCBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBzY2hlbWFSZWdpc3RyeSwgW10sXG4gICAgICAgIGVycm9ycyk7XG5cbiAgICAvLyBQcm9jZXNzIGFsbCBjb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzXG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZVR5cGUgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlTWV0YWRhdGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgaWYgKGRpcmVjdGl2ZU1ldGFkYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuZ2V0KGRpcmVjdGl2ZVR5cGUpITtcbiAgICAgICAgbW9kdWxlIHx8XG4gICAgICAgICAgICBlcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kdWxlIGZvciBjb21wb25lbnQgJyR7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllck5hbWUoZGlyZWN0aXZlTWV0YWRhdGEudHlwZSl9J2ApO1xuXG4gICAgICAgIGxldCBodG1sQXN0ID0gZGlyZWN0aXZlTWV0YWRhdGEudGVtcGxhdGUgIS5odG1sQXN0ITtcbiAgICAgICAgY29uc3QgcHJlc2VydmVXaGl0ZXNwYWNlcyA9IGRpcmVjdGl2ZU1ldGFkYXRhIS50ZW1wbGF0ZSAhLnByZXNlcnZlV2hpdGVzcGFjZXM7XG5cbiAgICAgICAgaWYgKCFwcmVzZXJ2ZVdoaXRlc3BhY2VzKSB7XG4gICAgICAgICAgaHRtbEFzdCA9IHJlbW92ZVdoaXRlc3BhY2VzKGh0bWxBc3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcjNBc3QgPSBodG1sQXN0VG9SZW5kZXIzQXN0KGh0bWxBc3Qucm9vdE5vZGVzLCBob3N0QmluZGluZ1BhcnNlcik7XG5cbiAgICAgICAgLy8gTWFwIG9mIFN0YXRpY1R5cGUgYnkgZGlyZWN0aXZlIHNlbGVjdG9yc1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVUeXBlQnlTZWwgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBtb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5kaXJlY3RpdmVzLm1hcChcbiAgICAgICAgICAgIGRpciA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZVN1bW1hcnkoZGlyLnJlZmVyZW5jZSkpO1xuXG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgIGlmIChkaXJlY3RpdmUuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZVR5cGVCeVNlbC5zZXQoZGlyZWN0aXZlLnNlbGVjdG9yLCBkaXJlY3RpdmUudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFwIG9mIFN0YXRpY1R5cGUgYnkgcGlwZSBuYW1lc1xuICAgICAgICBjb25zdCBwaXBlVHlwZUJ5TmFtZSA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgICAgICAgY29uc3QgcGlwZXMgPSBtb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5waXBlcy5tYXAoXG4gICAgICAgICAgICBwaXBlID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UGlwZVN1bW1hcnkocGlwZS5yZWZlcmVuY2UpKTtcblxuICAgICAgICBwaXBlcy5mb3JFYWNoKHBpcGUgPT4ge1xuICAgICAgICAgIHBpcGVUeXBlQnlOYW1lLnNldChwaXBlLm5hbWUsIHBpcGUudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21waWxlUjNDb21wb25lbnQoXG4gICAgICAgICAgICBjb250ZXh0LCBkaXJlY3RpdmVNZXRhZGF0YSwgcmVuZGVyM0FzdCwgdGhpcy5yZWZsZWN0b3IsIGhvc3RCaW5kaW5nUGFyc2VyLFxuICAgICAgICAgICAgZGlyZWN0aXZlVHlwZUJ5U2VsLCBwaXBlVHlwZUJ5TmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21waWxlUjNEaXJlY3RpdmUoY29udGV4dCwgZGlyZWN0aXZlTWV0YWRhdGEsIHRoaXMucmVmbGVjdG9yLCBob3N0QmluZGluZ1BhcnNlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwaXBlcy5mb3JFYWNoKHBpcGVUeXBlID0+IHtcbiAgICAgIGNvbnN0IHBpcGVNZXRhZGF0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UGlwZU1ldGFkYXRhKHBpcGVUeXBlKTtcbiAgICAgIGlmIChwaXBlTWV0YWRhdGEpIHtcbiAgICAgICAgY29tcGlsZVIzUGlwZShjb250ZXh0LCBwaXBlTWV0YWRhdGEsIHRoaXMucmVmbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluamVjdGFibGVzLmZvckVhY2goaW5qZWN0YWJsZSA9PiB0aGlzLl9pbmplY3RhYmxlQ29tcGlsZXIuY29tcGlsZShpbmplY3RhYmxlLCBjb250ZXh0KSk7XG4gIH1cblxuICBlbWl0QWxsUGFydGlhbE1vZHVsZXMyKGZpbGVzOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlc1tdKTogUGFydGlhbE1vZHVsZVtdIHtcbiAgICAvLyBVc2luZyByZWR1Y2UgbGlrZSB0aGlzIGlzIGEgc2VsZWN0IG1hbnkgcGF0dGVybiAod2hlcmUgbWFwIGlzIGEgc2VsZWN0IHBhdHRlcm4pXG4gICAgcmV0dXJuIGZpbGVzLnJlZHVjZTxQYXJ0aWFsTW9kdWxlW10+KChyLCBmaWxlKSA9PiB7XG4gICAgICByLnB1c2goLi4udGhpcy5fZW1pdFBhcnRpYWxNb2R1bGUyKGZpbGUuZmlsZU5hbWUsIGZpbGUuaW5qZWN0YWJsZXMpKTtcbiAgICAgIHJldHVybiByO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VtaXRQYXJ0aWFsTW9kdWxlMihmaWxlTmFtZTogc3RyaW5nLCBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdKTpcbiAgICAgIFBhcnRpYWxNb2R1bGVbXSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoZmlsZU5hbWUpO1xuXG4gICAgaW5qZWN0YWJsZXMuZm9yRWFjaChpbmplY3RhYmxlID0+IHRoaXMuX2luamVjdGFibGVDb21waWxlci5jb21waWxlKGluamVjdGFibGUsIGNvbnRleHQpKTtcblxuICAgIGlmIChjb250ZXh0LnN0YXRlbWVudHMgJiYgY29udGV4dC5zdGF0ZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBbe2ZpbGVOYW1lLCBzdGF0ZW1lbnRzOiBbLi4uY29udGV4dC5jb25zdGFudFBvb2wuc3RhdGVtZW50cywgLi4uY29udGV4dC5zdGF0ZW1lbnRzXX1dO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBlbWl0QWxsSW1wbHMoYW5hbHl6ZVJlc3VsdDogTmdBbmFseXplZE1vZHVsZXMpOiBHZW5lcmF0ZWRGaWxlW10ge1xuICAgIGNvbnN0IHtuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLCBmaWxlc30gPSBhbmFseXplUmVzdWx0O1xuICAgIGNvbnN0IHNvdXJjZU1vZHVsZXMgPSBmaWxlcy5tYXAoXG4gICAgICAgIGZpbGUgPT4gdGhpcy5fY29tcGlsZUltcGxGaWxlKFxuICAgICAgICAgICAgZmlsZS5maWxlTmFtZSwgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSwgZmlsZS5kaXJlY3RpdmVzLCBmaWxlLnBpcGVzLCBmaWxlLm5nTW9kdWxlcyxcbiAgICAgICAgICAgIGZpbGUuaW5qZWN0YWJsZXMpKTtcbiAgICByZXR1cm4gZmxhdHRlbihzb3VyY2VNb2R1bGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVJbXBsRmlsZShcbiAgICAgIHNyY0ZpbGVVcmw6IHN0cmluZywgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZTogTWFwPFN0YXRpY1N5bWJvbCwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGE+LFxuICAgICAgZGlyZWN0aXZlczogU3RhdGljU3ltYm9sW10sIHBpcGVzOiBTdGF0aWNTeW1ib2xbXSwgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdLFxuICAgICAgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSk6IEdlbmVyYXRlZEZpbGVbXSB7XG4gICAgY29uc3QgZmlsZVN1ZmZpeCA9IG5vcm1hbGl6ZUdlbkZpbGVTdWZmaXgoc3BsaXRUeXBlc2NyaXB0U3VmZml4KHNyY0ZpbGVVcmwsIHRydWUpWzFdKTtcbiAgICBjb25zdCBnZW5lcmF0ZWRGaWxlczogR2VuZXJhdGVkRmlsZVtdID0gW107XG5cbiAgICBjb25zdCBvdXRwdXRDdHggPSB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KG5nZmFjdG9yeUZpbGVQYXRoKHNyY0ZpbGVVcmwsIHRydWUpKTtcblxuICAgIGdlbmVyYXRlZEZpbGVzLnB1c2goXG4gICAgICAgIC4uLnRoaXMuX2NyZWF0ZVN1bW1hcnkoc3JjRmlsZVVybCwgZGlyZWN0aXZlcywgcGlwZXMsIG5nTW9kdWxlcywgaW5qZWN0YWJsZXMsIG91dHB1dEN0eCkpO1xuXG4gICAgLy8gY29tcGlsZSBhbGwgbmcgbW9kdWxlc1xuICAgIG5nTW9kdWxlcy5mb3JFYWNoKChuZ01vZHVsZU1ldGEpID0+IHRoaXMuX2NvbXBpbGVNb2R1bGUob3V0cHV0Q3R4LCBuZ01vZHVsZU1ldGEpKTtcblxuICAgIC8vIGNvbXBpbGUgY29tcG9uZW50c1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyVHlwZSkgPT4ge1xuICAgICAgY29uc3QgY29tcE1ldGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKDxhbnk+ZGlyVHlwZSk7XG4gICAgICBpZiAoIWNvbXBNZXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5nTW9kdWxlID0gbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZS5nZXQoZGlyVHlwZSk7XG4gICAgICBpZiAoIW5nTW9kdWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgRXJyb3I6IGNhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZHVsZSBmb3IgY29tcG9uZW50ICR7XG4gICAgICAgICAgICBpZGVudGlmaWVyTmFtZShjb21wTWV0YS50eXBlKX0hYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbXBpbGUgc3R5bGVzXG4gICAgICBjb25zdCBjb21wb25lbnRTdHlsZXNoZWV0ID0gdGhpcy5fc3R5bGVDb21waWxlci5jb21waWxlQ29tcG9uZW50KG91dHB1dEN0eCwgY29tcE1ldGEpO1xuICAgICAgLy8gTm90ZTogY29tcE1ldGEgaXMgYSBjb21wb25lbnQgYW5kIHRoZXJlZm9yZSB0ZW1wbGF0ZSBpcyBub24gbnVsbC5cbiAgICAgIGNvbXBNZXRhLnRlbXBsYXRlICEuZXh0ZXJuYWxTdHlsZXNoZWV0cy5mb3JFYWNoKChzdHlsZXNoZWV0TWV0YSkgPT4ge1xuICAgICAgICAvLyBOb3RlOiBmaWxsIG5vbiBzaGltIGFuZCBzaGltIHN0eWxlIGZpbGVzIGFzIHRoZXkgbWlnaHRcbiAgICAgICAgLy8gYmUgc2hhcmVkIGJ5IGNvbXBvbmVudCB3aXRoIGFuZCB3aXRob3V0IFZpZXdFbmNhcHN1bGF0aW9uLlxuICAgICAgICBjb25zdCBzaGltID0gdGhpcy5fc3R5bGVDb21waWxlci5uZWVkc1N0eWxlU2hpbShjb21wTWV0YSk7XG4gICAgICAgIGdlbmVyYXRlZEZpbGVzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9jb2RlZ2VuU3R5bGVzKHNyY0ZpbGVVcmwsIGNvbXBNZXRhLCBzdHlsZXNoZWV0TWV0YSwgc2hpbSwgZmlsZVN1ZmZpeCkpO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hbGxvd0VtcHR5Q29kZWdlbkZpbGVzKSB7XG4gICAgICAgICAgZ2VuZXJhdGVkRmlsZXMucHVzaChcbiAgICAgICAgICAgICAgdGhpcy5fY29kZWdlblN0eWxlcyhzcmNGaWxlVXJsLCBjb21wTWV0YSwgc3R5bGVzaGVldE1ldGEsICFzaGltLCBmaWxlU3VmZml4KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb21waWxlIGNvbXBvbmVudHNcbiAgICAgIGNvbnN0IGNvbXBWaWV3VmFycyA9IHRoaXMuX2NvbXBpbGVDb21wb25lbnQoXG4gICAgICAgICAgb3V0cHV0Q3R4LCBjb21wTWV0YSwgbmdNb2R1bGUsIG5nTW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUuZGlyZWN0aXZlcywgY29tcG9uZW50U3R5bGVzaGVldCxcbiAgICAgICAgICBmaWxlU3VmZml4KTtcbiAgICAgIHRoaXMuX2NvbXBpbGVDb21wb25lbnRGYWN0b3J5KG91dHB1dEN0eCwgY29tcE1ldGEsIG5nTW9kdWxlLCBmaWxlU3VmZml4KTtcbiAgICB9KTtcbiAgICBpZiAob3V0cHV0Q3R4LnN0YXRlbWVudHMubGVuZ3RoID4gMCB8fCB0aGlzLl9vcHRpb25zLmFsbG93RW1wdHlDb2RlZ2VuRmlsZXMpIHtcbiAgICAgIGNvbnN0IHNyY01vZHVsZSA9IHRoaXMuX2NvZGVnZW5Tb3VyY2VNb2R1bGUoc3JjRmlsZVVybCwgb3V0cHV0Q3R4KTtcbiAgICAgIGdlbmVyYXRlZEZpbGVzLnVuc2hpZnQoc3JjTW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlZEZpbGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3VtbWFyeShcbiAgICAgIHNyY0ZpbGVOYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdLCBwaXBlczogU3RhdGljU3ltYm9sW10sXG4gICAgICBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW10sIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10sXG4gICAgICBuZ0ZhY3RvcnlDdHg6IE91dHB1dENvbnRleHQpOiBHZW5lcmF0ZWRGaWxlW10ge1xuICAgIGNvbnN0IHN5bWJvbFN1bW1hcmllcyA9IHRoaXMuX3N5bWJvbFJlc29sdmVyLmdldFN5bWJvbHNPZihzcmNGaWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChzeW1ib2wgPT4gdGhpcy5fc3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzeW1ib2wpKTtcbiAgICBjb25zdCB0eXBlRGF0YToge1xuICAgICAgc3VtbWFyeTogQ29tcGlsZVR5cGVTdW1tYXJ5LFxuICAgICAgbWV0YWRhdGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YXxDb21waWxlUGlwZU1ldGFkYXRhfFxuICAgICAgQ29tcGlsZVR5cGVNZXRhZGF0YVxuICAgIH1bXSA9XG4gICAgICAgIFtcbiAgICAgICAgICAuLi5uZ01vZHVsZXMubWFwKFxuICAgICAgICAgICAgICBtZXRhID0+ICh7XG4gICAgICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZVN1bW1hcnkobWV0YS50eXBlLnJlZmVyZW5jZSkhLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldE5nTW9kdWxlTWV0YWRhdGEobWV0YS50eXBlLnJlZmVyZW5jZSkhXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAuLi5kaXJlY3RpdmVzLm1hcChyZWYgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlU3VtbWFyeShyZWYpISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKHJlZikhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIC4uLnBpcGVzLm1hcChyZWYgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFBpcGVTdW1tYXJ5KHJlZikhLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFBpcGVNZXRhZGF0YShyZWYpIVxuICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgLi4uaW5qZWN0YWJsZXMubWFwKFxuICAgICAgICAgICAgICByZWYgPT4gKHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldEluamVjdGFibGVTdW1tYXJ5KHJlZi5zeW1ib2wpISxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRJbmplY3RhYmxlU3VtbWFyeShyZWYuc3ltYm9sKSEudHlwZVxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgXTtcbiAgICBjb25zdCBmb3JKaXRPdXRwdXRDdHggPSB0aGlzLl9vcHRpb25zLmVuYWJsZVN1bW1hcmllc0ZvckppdCA/XG4gICAgICAgIHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQoc3VtbWFyeUZvckppdEZpbGVOYW1lKHNyY0ZpbGVOYW1lLCB0cnVlKSkgOlxuICAgICAgICBudWxsO1xuICAgIGNvbnN0IHtqc29uLCBleHBvcnRBc30gPSBzZXJpYWxpemVTdW1tYXJpZXMoXG4gICAgICAgIHNyY0ZpbGVOYW1lLCBmb3JKaXRPdXRwdXRDdHgsIHRoaXMuX3N1bW1hcnlSZXNvbHZlciwgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIHN5bWJvbFN1bW1hcmllcyxcbiAgICAgICAgdHlwZURhdGEsIHRoaXMuX29wdGlvbnMuY3JlYXRlRXh0ZXJuYWxTeW1ib2xGYWN0b3J5UmVleHBvcnRzKTtcbiAgICBleHBvcnRBcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgbmdGYWN0b3J5Q3R4LnN0YXRlbWVudHMucHVzaChcbiAgICAgICAgICBvLnZhcmlhYmxlKGVudHJ5LmV4cG9ydEFzKS5zZXQobmdGYWN0b3J5Q3R4LmltcG9ydEV4cHIoZW50cnkuc3ltYm9sKSkudG9EZWNsU3RtdChudWxsLCBbXG4gICAgICAgICAgICBvLlN0bXRNb2RpZmllci5FeHBvcnRlZFxuICAgICAgICAgIF0pKTtcbiAgICB9KTtcbiAgICBjb25zdCBzdW1tYXJ5SnNvbiA9IG5ldyBHZW5lcmF0ZWRGaWxlKHNyY0ZpbGVOYW1lLCBzdW1tYXJ5RmlsZU5hbWUoc3JjRmlsZU5hbWUpLCBqc29uKTtcbiAgICBjb25zdCByZXN1bHQgPSBbc3VtbWFyeUpzb25dO1xuICAgIGlmIChmb3JKaXRPdXRwdXRDdHgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuX2NvZGVnZW5Tb3VyY2VNb2R1bGUoc3JjRmlsZU5hbWUsIGZvckppdE91dHB1dEN0eCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZU1vZHVsZShvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIG5nTW9kdWxlOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSk6IHZvaWQge1xuICAgIGNvbnN0IHByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubG9jYWxlKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkTG9jYWxlID0gdGhpcy5fb3B0aW9ucy5sb2NhbGUucmVwbGFjZSgvXy9nLCAnLScpO1xuICAgICAgcHJvdmlkZXJzLnB1c2goe1xuICAgICAgICB0b2tlbjogY3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZSh0aGlzLnJlZmxlY3RvciwgSWRlbnRpZmllcnMuTE9DQUxFX0lEKSxcbiAgICAgICAgdXNlVmFsdWU6IG5vcm1hbGl6ZWRMb2NhbGUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pMThuRm9ybWF0KSB7XG4gICAgICBwcm92aWRlcnMucHVzaCh7XG4gICAgICAgIHRva2VuOiBjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlKHRoaXMucmVmbGVjdG9yLCBJZGVudGlmaWVycy5UUkFOU0xBVElPTlNfRk9STUFUKSxcbiAgICAgICAgdXNlVmFsdWU6IHRoaXMuX29wdGlvbnMuaTE4bkZvcm1hdFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbmdNb2R1bGVDb21waWxlci5jb21waWxlKG91dHB1dEN0eCwgbmdNb2R1bGUsIHByb3ZpZGVycyk7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgY29tcE1ldGE6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgICAgIG5nTW9kdWxlOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgZmlsZVN1ZmZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdE1ldGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldEhvc3RDb21wb25lbnRNZXRhZGF0YShjb21wTWV0YSk7XG4gICAgY29uc3QgaG9zdFZpZXdGYWN0b3J5VmFyID1cbiAgICAgICAgdGhpcy5fY29tcGlsZUNvbXBvbmVudChvdXRwdXRDdHgsIGhvc3RNZXRhLCBuZ01vZHVsZSwgW2NvbXBNZXRhLnR5cGVdLCBudWxsLCBmaWxlU3VmZml4KVxuICAgICAgICAgICAgLnZpZXdDbGFzc1ZhcjtcbiAgICBjb25zdCBjb21wRmFjdG9yeVZhciA9IGNvbXBvbmVudEZhY3RvcnlOYW1lKGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKTtcbiAgICBjb25zdCBpbnB1dHNFeHByczogby5MaXRlcmFsTWFwRW50cnlbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNvbXBNZXRhLmlucHV0cykge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gY29tcE1ldGEuaW5wdXRzW3Byb3BOYW1lXTtcbiAgICAgIC8vIERvbid0IHF1b3RlIHNvIHRoYXQgdGhlIGtleSBnZXRzIG1pbmlmaWVkLi4uXG4gICAgICBpbnB1dHNFeHBycy5wdXNoKG5ldyBvLkxpdGVyYWxNYXBFbnRyeShwcm9wTmFtZSwgby5saXRlcmFsKHRlbXBsYXRlTmFtZSksIGZhbHNlKSk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dHNFeHByczogby5MaXRlcmFsTWFwRW50cnlbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNvbXBNZXRhLm91dHB1dHMpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGNvbXBNZXRhLm91dHB1dHNbcHJvcE5hbWVdO1xuICAgICAgLy8gRG9uJ3QgcXVvdGUgc28gdGhhdCB0aGUga2V5IGdldHMgbWluaWZpZWQuLi5cbiAgICAgIG91dHB1dHNFeHBycy5wdXNoKG5ldyBvLkxpdGVyYWxNYXBFbnRyeShwcm9wTmFtZSwgby5saXRlcmFsKHRlbXBsYXRlTmFtZSksIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChcbiAgICAgICAgby52YXJpYWJsZShjb21wRmFjdG9yeVZhcilcbiAgICAgICAgICAgIC5zZXQoby5pbXBvcnRFeHByKElkZW50aWZpZXJzLmNyZWF0ZUNvbXBvbmVudEZhY3RvcnkpLmNhbGxGbihbXG4gICAgICAgICAgICAgIG8ubGl0ZXJhbChjb21wTWV0YS5zZWxlY3RvciksIG91dHB1dEN0eC5pbXBvcnRFeHByKGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgby52YXJpYWJsZShob3N0Vmlld0ZhY3RvcnlWYXIpLCBuZXcgby5MaXRlcmFsTWFwRXhwcihpbnB1dHNFeHBycyksXG4gICAgICAgICAgICAgIG5ldyBvLkxpdGVyYWxNYXBFeHByKG91dHB1dHNFeHBycyksXG4gICAgICAgICAgICAgIG8ubGl0ZXJhbEFycihcbiAgICAgICAgICAgICAgICAgIGNvbXBNZXRhLnRlbXBsYXRlICEubmdDb250ZW50U2VsZWN0b3JzLm1hcChzZWxlY3RvciA9PiBvLmxpdGVyYWwoc2VsZWN0b3IpKSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgLnRvRGVjbFN0bXQoXG4gICAgICAgICAgICAgICAgby5pbXBvcnRUeXBlKFxuICAgICAgICAgICAgICAgICAgICBJZGVudGlmaWVycy5Db21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBbby5leHByZXNzaW9uVHlwZShvdXRwdXRDdHguaW1wb3J0RXhwcihjb21wTWV0YS50eXBlLnJlZmVyZW5jZSkpIV0sXG4gICAgICAgICAgICAgICAgICAgIFtvLlR5cGVNb2RpZmllci5Db25zdF0pLFxuICAgICAgICAgICAgICAgIFtvLlN0bXRNb2RpZmllci5GaW5hbCwgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRdKSk7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlQ29tcG9uZW50KFxuICAgICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBjb21wTWV0YTogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgbmdNb2R1bGU6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLCBkaXJlY3RpdmVJZGVudGlmaWVyczogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdLFxuICAgICAgY29tcG9uZW50U3R5bGVzOiBDb21waWxlZFN0eWxlc2hlZXR8bnVsbCwgZmlsZVN1ZmZpeDogc3RyaW5nKTogVmlld0NvbXBpbGVSZXN1bHQge1xuICAgIGNvbnN0IHt0ZW1wbGF0ZTogcGFyc2VkVGVtcGxhdGUsIHBpcGVzOiB1c2VkUGlwZXN9ID1cbiAgICAgICAgdGhpcy5fcGFyc2VUZW1wbGF0ZShjb21wTWV0YSwgbmdNb2R1bGUsIGRpcmVjdGl2ZUlkZW50aWZpZXJzKTtcbiAgICBjb25zdCBzdHlsZXNFeHByID0gY29tcG9uZW50U3R5bGVzID8gby52YXJpYWJsZShjb21wb25lbnRTdHlsZXMuc3R5bGVzVmFyKSA6IG8ubGl0ZXJhbEFycihbXSk7XG4gICAgY29uc3Qgdmlld1Jlc3VsdCA9IHRoaXMuX3ZpZXdDb21waWxlci5jb21waWxlQ29tcG9uZW50KFxuICAgICAgICBvdXRwdXRDdHgsIGNvbXBNZXRhLCBwYXJzZWRUZW1wbGF0ZSwgc3R5bGVzRXhwciwgdXNlZFBpcGVzKTtcbiAgICBpZiAoY29tcG9uZW50U3R5bGVzKSB7XG4gICAgICBfcmVzb2x2ZVN0eWxlU3RhdGVtZW50cyhcbiAgICAgICAgICB0aGlzLl9zeW1ib2xSZXNvbHZlciwgY29tcG9uZW50U3R5bGVzLCB0aGlzLl9zdHlsZUNvbXBpbGVyLm5lZWRzU3R5bGVTaGltKGNvbXBNZXRhKSxcbiAgICAgICAgICBmaWxlU3VmZml4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXdSZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVRlbXBsYXRlKFxuICAgICAgY29tcE1ldGE6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgbmdNb2R1bGU6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLFxuICAgICAgZGlyZWN0aXZlSWRlbnRpZmllcnM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSk6XG4gICAgICB7dGVtcGxhdGU6IFRlbXBsYXRlQXN0W10sIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXX0ge1xuICAgIGlmICh0aGlzLl90ZW1wbGF0ZUFzdENhY2hlLmhhcyhjb21wTWV0YS50eXBlLnJlZmVyZW5jZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUFzdENhY2hlLmdldChjb21wTWV0YS50eXBlLnJlZmVyZW5jZSkhO1xuICAgIH1cbiAgICBjb25zdCBwcmVzZXJ2ZVdoaXRlc3BhY2VzID0gY29tcE1ldGEhLnRlbXBsYXRlICEucHJlc2VydmVXaGl0ZXNwYWNlcztcbiAgICBjb25zdCBkaXJlY3RpdmVzID1cbiAgICAgICAgZGlyZWN0aXZlSWRlbnRpZmllcnMubWFwKGRpciA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZVN1bW1hcnkoZGlyLnJlZmVyZW5jZSkpO1xuICAgIGNvbnN0IHBpcGVzID0gbmdNb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5waXBlcy5tYXAoXG4gICAgICAgIHBpcGUgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQaXBlU3VtbWFyeShwaXBlLnJlZmVyZW5jZSkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3RlbXBsYXRlUGFyc2VyLnBhcnNlKFxuICAgICAgICBjb21wTWV0YSwgY29tcE1ldGEudGVtcGxhdGUgIS5odG1sQXN0ISwgZGlyZWN0aXZlcywgcGlwZXMsIG5nTW9kdWxlLnNjaGVtYXMsXG4gICAgICAgIHRlbXBsYXRlU291cmNlVXJsKG5nTW9kdWxlLnR5cGUsIGNvbXBNZXRhLCBjb21wTWV0YS50ZW1wbGF0ZSAhKSwgcHJlc2VydmVXaGl0ZXNwYWNlcyk7XG4gICAgdGhpcy5fdGVtcGxhdGVBc3RDYWNoZS5zZXQoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU91dHB1dENvbnRleHQoZ2VuRmlsZVBhdGg6IHN0cmluZyk6IE91dHB1dENvbnRleHQge1xuICAgIGNvbnN0IGltcG9ydEV4cHIgPVxuICAgICAgICAoc3ltYm9sOiBTdGF0aWNTeW1ib2wsIHR5cGVQYXJhbXM6IG8uVHlwZVtdfG51bGwgPSBudWxsLCB1c2VTdW1tYXJpZXM6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XG4gICAgICAgICAgaWYgKCEoc3ltYm9sIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBlcnJvcjogdW5rbm93biBpZGVudGlmaWVyICR7SlNPTi5zdHJpbmdpZnkoc3ltYm9sKX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYXJpdHkgPSB0aGlzLl9zeW1ib2xSZXNvbHZlci5nZXRUeXBlQXJpdHkoc3ltYm9sKSB8fCAwO1xuICAgICAgICAgIGNvbnN0IHtmaWxlUGF0aCwgbmFtZSwgbWVtYmVyc30gPVxuICAgICAgICAgICAgICB0aGlzLl9zeW1ib2xSZXNvbHZlci5nZXRJbXBvcnRBcyhzeW1ib2wsIHVzZVN1bW1hcmllcykgfHwgc3ltYm9sO1xuICAgICAgICAgIGNvbnN0IGltcG9ydE1vZHVsZSA9IHRoaXMuX2ZpbGVOYW1lVG9Nb2R1bGVOYW1lKGZpbGVQYXRoLCBnZW5GaWxlUGF0aCk7XG5cbiAgICAgICAgICAvLyBJdCBzaG91bGQgYmUgZ29vZCBlbm91Z2ggdG8gY29tcGFyZSBmaWxlUGF0aCB0byBnZW5GaWxlUGF0aCBhbmQgaWYgdGhleSBhcmUgZXF1YWxcbiAgICAgICAgICAvLyB0aGVyZSBpcyBhIHNlbGYgcmVmZXJlbmNlLiBIb3dldmVyLCBuZ2ZhY3RvcnkgZmlsZXMgZ2VuZXJhdGUgdG8gLnRzIGJ1dCB0aGVpclxuICAgICAgICAgIC8vIHN5bWJvbHMgaGF2ZSAuZC50cyBzbyBhIHNpbXBsZSBjb21wYXJlIGlzIGluc3VmZmljaWVudC4gVGhleSBzaG91bGQgYmUgY2Fub25pY2FsXG4gICAgICAgICAgLy8gYW5kIGlzIHRyYWNrZWQgYnkgIzE3NzA1LlxuICAgICAgICAgIGNvbnN0IHNlbGZSZWZlcmVuY2UgPSB0aGlzLl9maWxlTmFtZVRvTW9kdWxlTmFtZShnZW5GaWxlUGF0aCwgZ2VuRmlsZVBhdGgpO1xuICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBpbXBvcnRNb2R1bGUgPT09IHNlbGZSZWZlcmVuY2UgPyBudWxsIDogaW1wb3J0TW9kdWxlO1xuXG4gICAgICAgICAgLy8gSWYgd2UgYXJlIGluIGEgdHlwZSBleHByZXNzaW9uIHRoYXQgcmVmZXJzIHRvIGEgZ2VuZXJpYyB0eXBlIHRoZW4gc3VwcGx5XG4gICAgICAgICAgLy8gdGhlIHJlcXVpcmVkIHR5cGUgcGFyYW1ldGVycy4gSWYgdGhlcmUgd2VyZSBub3QgZW5vdWdoIHR5cGUgcGFyYW1ldGVyc1xuICAgICAgICAgIC8vIHN1cHBsaWVkLCBzdXBwbHkgYW55IGFzIHRoZSB0eXBlLiBPdXRzaWRlIGEgdHlwZSBleHByZXNzaW9uIHRoZSByZWZlcmVuY2VcbiAgICAgICAgICAvLyBzaG91bGQgbm90IHN1cHBseSB0eXBlIHBhcmFtZXRlcnMgYW5kIGJlIHRyZWF0ZWQgYXMgYSBzaW1wbGUgdmFsdWUgcmVmZXJlbmNlXG4gICAgICAgICAgLy8gdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgICBjb25zdCBzdXBwbGllZFR5cGVQYXJhbXMgPSB0eXBlUGFyYW1zIHx8IFtdO1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdUeXBlUGFyYW1zQ291bnQgPSBhcml0eSAtIHN1cHBsaWVkVHlwZVBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgYWxsVHlwZVBhcmFtcyA9XG4gICAgICAgICAgICAgIHN1cHBsaWVkVHlwZVBhcmFtcy5jb25jYXQobmV3QXJyYXkobWlzc2luZ1R5cGVQYXJhbXNDb3VudCwgby5EWU5BTUlDX1RZUEUpKTtcbiAgICAgICAgICByZXR1cm4gbWVtYmVycy5yZWR1Y2UoXG4gICAgICAgICAgICAgIChleHByLCBtZW1iZXJOYW1lKSA9PiBleHByLnByb3AobWVtYmVyTmFtZSksXG4gICAgICAgICAgICAgIDxvLkV4cHJlc3Npb24+by5pbXBvcnRFeHByKFxuICAgICAgICAgICAgICAgICAgbmV3IG8uRXh0ZXJuYWxSZWZlcmVuY2UobW9kdWxlTmFtZSwgbmFtZSwgbnVsbCksIGFsbFR5cGVQYXJhbXMpKTtcbiAgICAgICAgfTtcblxuICAgIHJldHVybiB7c3RhdGVtZW50czogW10sIGdlbkZpbGVQYXRoLCBpbXBvcnRFeHByLCBjb25zdGFudFBvb2w6IG5ldyBDb25zdGFudFBvb2woKX07XG4gIH1cblxuICBwcml2YXRlIF9maWxlTmFtZVRvTW9kdWxlTmFtZShpbXBvcnRlZEZpbGVQYXRoOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3VtbWFyeVJlc29sdmVyLmdldEtub3duTW9kdWxlTmFtZShpbXBvcnRlZEZpbGVQYXRoKSB8fFxuICAgICAgICB0aGlzLl9zeW1ib2xSZXNvbHZlci5nZXRLbm93bk1vZHVsZU5hbWUoaW1wb3J0ZWRGaWxlUGF0aCkgfHxcbiAgICAgICAgdGhpcy5faG9zdC5maWxlTmFtZVRvTW9kdWxlTmFtZShpbXBvcnRlZEZpbGVQYXRoLCBjb250YWluaW5nRmlsZVBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29kZWdlblN0eWxlcyhcbiAgICAgIHNyY0ZpbGVVcmw6IHN0cmluZywgY29tcE1ldGE6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgICAgIHN0eWxlc2hlZXRNZXRhZGF0YTogQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSwgaXNTaGltbWVkOiBib29sZWFuLFxuICAgICAgZmlsZVN1ZmZpeDogc3RyaW5nKTogR2VuZXJhdGVkRmlsZSB7XG4gICAgY29uc3Qgb3V0cHV0Q3R4ID0gdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChcbiAgICAgICAgX3N0eWxlc01vZHVsZVVybChzdHlsZXNoZWV0TWV0YWRhdGEubW9kdWxlVXJsISwgaXNTaGltbWVkLCBmaWxlU3VmZml4KSk7XG4gICAgY29uc3QgY29tcGlsZWRTdHlsZXNoZWV0ID1cbiAgICAgICAgdGhpcy5fc3R5bGVDb21waWxlci5jb21waWxlU3R5bGVzKG91dHB1dEN0eCwgY29tcE1ldGEsIHN0eWxlc2hlZXRNZXRhZGF0YSwgaXNTaGltbWVkKTtcbiAgICBfcmVzb2x2ZVN0eWxlU3RhdGVtZW50cyh0aGlzLl9zeW1ib2xSZXNvbHZlciwgY29tcGlsZWRTdHlsZXNoZWV0LCBpc1NoaW1tZWQsIGZpbGVTdWZmaXgpO1xuICAgIHJldHVybiB0aGlzLl9jb2RlZ2VuU291cmNlTW9kdWxlKHNyY0ZpbGVVcmwsIG91dHB1dEN0eCk7XG4gIH1cblxuICBwcml2YXRlIF9jb2RlZ2VuU291cmNlTW9kdWxlKHNyY0ZpbGVVcmw6IHN0cmluZywgY3R4OiBPdXRwdXRDb250ZXh0KTogR2VuZXJhdGVkRmlsZSB7XG4gICAgcmV0dXJuIG5ldyBHZW5lcmF0ZWRGaWxlKHNyY0ZpbGVVcmwsIGN0eC5nZW5GaWxlUGF0aCwgY3R4LnN0YXRlbWVudHMpO1xuICB9XG5cbiAgbGlzdExhenlSb3V0ZXMoZW50cnlSb3V0ZT86IHN0cmluZywgYW5hbHl6ZWRNb2R1bGVzPzogTmdBbmFseXplZE1vZHVsZXMpOiBMYXp5Um91dGVbXSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGVudHJ5Um91dGUpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHBhcnNlTGF6eVJvdXRlKGVudHJ5Um91dGUsIHRoaXMucmVmbGVjdG9yKS5yZWZlcmVuY2VkTW9kdWxlO1xuICAgICAgcmV0dXJuIHZpc2l0TGF6eVJvdXRlKHN5bWJvbCk7XG4gICAgfSBlbHNlIGlmIChhbmFseXplZE1vZHVsZXMpIHtcbiAgICAgIGNvbnN0IGFsbExhenlSb3V0ZXM6IExhenlSb3V0ZVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IG5nTW9kdWxlIG9mIGFuYWx5emVkTW9kdWxlcy5uZ01vZHVsZXMpIHtcbiAgICAgICAgY29uc3QgbGF6eVJvdXRlcyA9IGxpc3RMYXp5Um91dGVzKG5nTW9kdWxlLCB0aGlzLnJlZmxlY3Rvcik7XG4gICAgICAgIGZvciAoY29uc3QgbGF6eVJvdXRlIG9mIGxhenlSb3V0ZXMpIHtcbiAgICAgICAgICBhbGxMYXp5Um91dGVzLnB1c2gobGF6eVJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbExhenlSb3V0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWl0aGVyIHJvdXRlIG9yIGFuYWx5emVkTW9kdWxlcyBoYXMgdG8gYmUgc3BlY2lmaWVkIWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpc2l0TGF6eVJvdXRlKFxuICAgICAgICBzeW1ib2w6IFN0YXRpY1N5bWJvbCwgc2VlblJvdXRlcyA9IG5ldyBTZXQ8U3RhdGljU3ltYm9sPigpLFxuICAgICAgICBhbGxMYXp5Um91dGVzOiBMYXp5Um91dGVbXSA9IFtdKTogTGF6eVJvdXRlW10ge1xuICAgICAgLy8gU3VwcG9ydCBwb2ludGluZyB0byBkZWZhdWx0IGV4cG9ydHMsIGJ1dCBzdG9wIHJlY3Vyc2luZyB0aGVyZSxcbiAgICAgIC8vIGFzIHRoZSBTdGF0aWNSZWZsZWN0b3IgZG9lcyBub3QgeWV0IHN1cHBvcnQgZGVmYXVsdCBleHBvcnRzLlxuICAgICAgaWYgKHNlZW5Sb3V0ZXMuaGFzKHN5bWJvbCkgfHwgIXN5bWJvbC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBhbGxMYXp5Um91dGVzO1xuICAgICAgfVxuICAgICAgc2VlblJvdXRlcy5hZGQoc3ltYm9sKTtcbiAgICAgIGNvbnN0IGxhenlSb3V0ZXMgPVxuICAgICAgICAgIGxpc3RMYXp5Um91dGVzKHNlbGYuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0TmdNb2R1bGVNZXRhZGF0YShzeW1ib2wsIHRydWUpISwgc2VsZi5yZWZsZWN0b3IpO1xuICAgICAgZm9yIChjb25zdCBsYXp5Um91dGUgb2YgbGF6eVJvdXRlcykge1xuICAgICAgICBhbGxMYXp5Um91dGVzLnB1c2gobGF6eVJvdXRlKTtcbiAgICAgICAgdmlzaXRMYXp5Um91dGUobGF6eVJvdXRlLnJlZmVyZW5jZWRNb2R1bGUsIHNlZW5Sb3V0ZXMsIGFsbExhenlSb3V0ZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbExhenlSb3V0ZXM7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbXB0eVN0dWIob3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0KSB7XG4gIC8vIE5vdGU6IFdlIG5lZWQgdG8gcHJvZHVjZSBhdCBsZWFzdCBvbmUgaW1wb3J0IHN0YXRlbWVudCBzbyB0aGF0XG4gIC8vIFR5cGVTY3JpcHQga25vd3MgdGhhdCB0aGUgZmlsZSBpcyBhbiBlczYgbW9kdWxlLiBPdGhlcndpc2Ugb3VyIGdlbmVyYXRlZFxuICAvLyBleHBvcnRzIC8gaW1wb3J0cyB3b24ndCBiZSBlbWl0dGVkIHByb3Blcmx5IGJ5IFR5cGVTY3JpcHQuXG4gIG91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goby5pbXBvcnRFeHByKElkZW50aWZpZXJzLkNvbXBvbmVudEZhY3RvcnkpLnRvU3RtdCgpKTtcbn1cblxuXG5mdW5jdGlvbiBfcmVzb2x2ZVN0eWxlU3RhdGVtZW50cyhcbiAgICBzeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsIGNvbXBpbGVSZXN1bHQ6IENvbXBpbGVkU3R5bGVzaGVldCwgbmVlZHNTaGltOiBib29sZWFuLFxuICAgIGZpbGVTdWZmaXg6IHN0cmluZyk6IHZvaWQge1xuICBjb21waWxlUmVzdWx0LmRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICBkZXAuc2V0VmFsdWUoc3ltYm9sUmVzb2x2ZXIuZ2V0U3RhdGljU3ltYm9sKFxuICAgICAgICBfc3R5bGVzTW9kdWxlVXJsKGRlcC5tb2R1bGVVcmwsIG5lZWRzU2hpbSwgZmlsZVN1ZmZpeCksIGRlcC5uYW1lKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfc3R5bGVzTW9kdWxlVXJsKHN0eWxlc2hlZXRVcmw6IHN0cmluZywgc2hpbTogYm9vbGVhbiwgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7c3R5bGVzaGVldFVybH0ke3NoaW0gPyAnLnNoaW0nIDogJyd9Lm5nc3R5bGUke3N1ZmZpeH1gO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdO1xuICBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlOiBNYXA8U3RhdGljU3ltYm9sLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YT47XG4gIGZpbGVzOiBOZ0FuYWx5emVkRmlsZVtdO1xuICBzeW1ib2xzTWlzc2luZ01vZHVsZT86IFN0YXRpY1N5bWJvbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXTtcbiAgc2hhbGxvd01vZHVsZXM6IENvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ0FuYWx5emVkRmlsZSB7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIGRpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdO1xuICBhYnN0cmFjdERpcmVjdGl2ZXM6IFN0YXRpY1N5bWJvbFtdO1xuICBwaXBlczogU3RhdGljU3ltYm9sW107XG4gIG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXTtcbiAgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXTtcbiAgZXhwb3J0c05vblNvdXJjZUZpbGVzOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nQW5hbHl6ZU1vZHVsZXNIb3N0IHtcbiAgaXNTb3VyY2VGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZU5nTW9kdWxlcyhcbiAgICBmaWxlTmFtZXM6IHN0cmluZ1tdLCBob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIG1ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyKTogTmdBbmFseXplZE1vZHVsZXMge1xuICBjb25zdCBmaWxlcyA9IF9hbmFseXplRmlsZXNJbmNsdWRpbmdOb25Qcm9ncmFtRmlsZXMoXG4gICAgICBmaWxlTmFtZXMsIGhvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyLCBtZXRhZGF0YVJlc29sdmVyKTtcbiAgcmV0dXJuIG1lcmdlQW5hbHl6ZWRGaWxlcyhmaWxlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplQW5kVmFsaWRhdGVOZ01vZHVsZXMoXG4gICAgZmlsZU5hbWVzOiBzdHJpbmdbXSwgaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcik6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgcmV0dXJuIHZhbGlkYXRlQW5hbHl6ZWRNb2R1bGVzKFxuICAgICAgYW5hbHl6ZU5nTW9kdWxlcyhmaWxlTmFtZXMsIGhvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyLCBtZXRhZGF0YVJlc29sdmVyKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQW5hbHl6ZWRNb2R1bGVzKGFuYWx5emVkTW9kdWxlczogTmdBbmFseXplZE1vZHVsZXMpOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIGlmIChhbmFseXplZE1vZHVsZXMuc3ltYm9sc01pc3NpbmdNb2R1bGUgJiYgYW5hbHl6ZWRNb2R1bGVzLnN5bWJvbHNNaXNzaW5nTW9kdWxlLmxlbmd0aCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gYW5hbHl6ZWRNb2R1bGVzLnN5bWJvbHNNaXNzaW5nTW9kdWxlLm1hcChcbiAgICAgICAgcyA9PiBgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kdWxlIGZvciBjbGFzcyAke3MubmFtZX0gaW4gJHtzLmZpbGVQYXRofSEgQWRkICR7XG4gICAgICAgICAgICBzLm5hbWV9IHRvIHRoZSBOZ01vZHVsZSB0byBmaXggaXQuYCk7XG4gICAgdGhyb3cgc3ludGF4RXJyb3IobWVzc2FnZXMuam9pbignXFxuJykpO1xuICB9XG4gIHJldHVybiBhbmFseXplZE1vZHVsZXM7XG59XG5cbi8vIEFuYWx5emVzIGFsbCBvZiB0aGUgcHJvZ3JhbSBmaWxlcyxcbi8vIGluY2x1ZGluZyBmaWxlcyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvZ3JhbVxuLy8gYnV0IGFyZSByZWZlcmVuY2VkIGJ5IGFuIE5nTW9kdWxlLlxuZnVuY3Rpb24gX2FuYWx5emVGaWxlc0luY2x1ZGluZ05vblByb2dyYW1GaWxlcyhcbiAgICBmaWxlTmFtZXM6IHN0cmluZ1tdLCBob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIG1ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyKTogTmdBbmFseXplZEZpbGVbXSB7XG4gIGNvbnN0IHNlZW5GaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBmaWxlczogTmdBbmFseXplZEZpbGVbXSA9IFtdO1xuXG4gIGNvbnN0IHZpc2l0RmlsZSA9IChmaWxlTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHNlZW5GaWxlcy5oYXMoZmlsZU5hbWUpIHx8ICFob3N0LmlzU291cmNlRmlsZShmaWxlTmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2VlbkZpbGVzLmFkZChmaWxlTmFtZSk7XG4gICAgY29uc3QgYW5hbHl6ZWRGaWxlID0gYW5hbHl6ZUZpbGUoaG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXIsIG1ldGFkYXRhUmVzb2x2ZXIsIGZpbGVOYW1lKTtcbiAgICBmaWxlcy5wdXNoKGFuYWx5emVkRmlsZSk7XG4gICAgYW5hbHl6ZWRGaWxlLm5nTW9kdWxlcy5mb3JFYWNoKG5nTW9kdWxlID0+IHtcbiAgICAgIG5nTW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUubW9kdWxlcy5mb3JFYWNoKG1vZE1ldGEgPT4gdmlzaXRGaWxlKG1vZE1ldGEucmVmZXJlbmNlLmZpbGVQYXRoKSk7XG4gICAgfSk7XG4gIH07XG4gIGZpbGVOYW1lcy5mb3JFYWNoKChmaWxlTmFtZSkgPT4gdmlzaXRGaWxlKGZpbGVOYW1lKSk7XG4gIHJldHVybiBmaWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVGaWxlKFxuICAgIGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIGZpbGVOYW1lOiBzdHJpbmcpOiBOZ0FuYWx5emVkRmlsZSB7XG4gIGNvbnN0IGFic3RyYWN0RGlyZWN0aXZlczogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgY29uc3QgZGlyZWN0aXZlczogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgY29uc3QgcGlwZXM6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gIGNvbnN0IGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10gPSBbXTtcbiAgY29uc3QgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IGhhc0RlY29yYXRvcnMgPSBzdGF0aWNTeW1ib2xSZXNvbHZlci5oYXNEZWNvcmF0b3JzKGZpbGVOYW1lKTtcbiAgbGV0IGV4cG9ydHNOb25Tb3VyY2VGaWxlcyA9IGZhbHNlO1xuICBjb25zdCBpc0RlY2xhcmF0aW9uRmlsZSA9IGZpbGVOYW1lLmVuZHNXaXRoKCcuZC50cycpO1xuICAvLyBEb24ndCBhbmFseXplIC5kLnRzIGZpbGVzIHRoYXQgaGF2ZSBubyBkZWNvcmF0b3JzIGFzIGEgc2hvcnRjdXRcbiAgLy8gdG8gc3BlZWQgdXAgdGhlIGFuYWx5c2lzLiBUaGlzIHByZXZlbnRzIHVzIGZyb21cbiAgLy8gcmVzb2x2aW5nIHRoZSByZWZlcmVuY2VzIGluIHRoZXNlIGZpbGVzLlxuICAvLyBOb3RlOiBleHBvcnRzTm9uU291cmNlRmlsZXMgaXMgb25seSBuZWVkZWQgd2hlbiBjb21waWxpbmcgd2l0aCBzdW1tYXJpZXMsXG4gIC8vIHdoaWNoIGlzIG5vdCB0aGUgY2FzZSB3aGVuIC5kLnRzIGZpbGVzIGFyZSB0cmVhdGVkIGFzIGlucHV0IGZpbGVzLlxuICBpZiAoIWlzRGVjbGFyYXRpb25GaWxlIHx8IGhhc0RlY29yYXRvcnMpIHtcbiAgICBzdGF0aWNTeW1ib2xSZXNvbHZlci5nZXRTeW1ib2xzT2YoZmlsZU5hbWUpLmZvckVhY2goKHN5bWJvbCkgPT4ge1xuICAgICAgY29uc3QgcmVzb2x2ZWRTeW1ib2wgPSBzdGF0aWNTeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHN5bWJvbCk7XG4gICAgICBjb25zdCBzeW1ib2xNZXRhID0gcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGE7XG4gICAgICBpZiAoIXN5bWJvbE1ldGEgfHwgc3ltYm9sTWV0YS5fX3N5bWJvbGljID09PSAnZXJyb3InKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBpc05nU3ltYm9sID0gZmFsc2U7XG4gICAgICBpZiAoc3ltYm9sTWV0YS5fX3N5bWJvbGljID09PSAnY2xhc3MnKSB7XG4gICAgICAgIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzRGlyZWN0aXZlKHN5bWJvbCkpIHtcbiAgICAgICAgICBpc05nU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAvLyBUaGlzIGRpcmVjdGl2ZSBlaXRoZXIgaGFzIGEgc2VsZWN0b3Igb3IgZG9lc24ndC4gU2VsZWN0b3ItbGVzcyBkaXJlY3RpdmVzIGdldCB0cmFja2VkXG4gICAgICAgICAgLy8gaW4gYWJzdHJhY3REaXJlY3RpdmVzLCBub3QgZGlyZWN0aXZlcy4gVGhlIGNvbXBpbGVyIGRvZXNuJ3QgZGVhbCB3aXRoIHNlbGVjdG9yLWxlc3NcbiAgICAgICAgICAvLyBkaXJlY3RpdmVzIGF0IGFsbCwgcmVhbGx5LCBvdGhlciB0aGFuIHRvIHBlcnNpc3QgdGhlaXIgbWV0YWRhdGEuIFRoaXMgaXMgZG9uZSBzbyB0aGF0XG4gICAgICAgICAgLy8gYXBwcyB3aWxsIGhhdmUgYW4gZWFzaWVyIHRpbWUgbWlncmF0aW5nIHRvIEl2eSwgd2hpY2ggcmVxdWlyZXMgdGhlIHNlbGVjdG9yLWxlc3NcbiAgICAgICAgICAvLyBhbm5vdGF0aW9ucyB0byBiZSBhcHBsaWVkLlxuICAgICAgICAgIGlmICghbWV0YWRhdGFSZXNvbHZlci5pc0Fic3RyYWN0RGlyZWN0aXZlKHN5bWJvbCkpIHtcbiAgICAgICAgICAgIC8vIFRoZSBkaXJlY3RpdmUgaXMgYW4gb3JkaW5hcnkgZGlyZWN0aXZlLlxuICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBkaXJlY3RpdmUgaGFzIG5vIHNlbGVjdG9yIGFuZCBpcyBhbiBcImFic3RyYWN0XCIgZGlyZWN0aXZlLCBzbyB0cmFjayBpdFxuICAgICAgICAgICAgLy8gYWNjb3JkaW5nbHkuXG4gICAgICAgICAgICBhYnN0cmFjdERpcmVjdGl2ZXMucHVzaChzeW1ib2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzUGlwZShzeW1ib2wpKSB7XG4gICAgICAgICAgaXNOZ1N5bWJvbCA9IHRydWU7XG4gICAgICAgICAgcGlwZXMucHVzaChzeW1ib2wpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNOZ01vZHVsZShzeW1ib2wpKSB7XG4gICAgICAgICAgY29uc3QgbmdNb2R1bGUgPSBtZXRhZGF0YVJlc29sdmVyLmdldE5nTW9kdWxlTWV0YWRhdGEoc3ltYm9sLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKG5nTW9kdWxlKSB7XG4gICAgICAgICAgICBpc05nU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIG5nTW9kdWxlcy5wdXNoKG5nTW9kdWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFSZXNvbHZlci5pc0luamVjdGFibGUoc3ltYm9sKSkge1xuICAgICAgICAgIGlzTmdTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGluamVjdGFibGUgPSBtZXRhZGF0YVJlc29sdmVyLmdldEluamVjdGFibGVNZXRhZGF0YShzeW1ib2wsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICBpZiAoaW5qZWN0YWJsZSkge1xuICAgICAgICAgICAgaW5qZWN0YWJsZXMucHVzaChpbmplY3RhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNOZ1N5bWJvbCkge1xuICAgICAgICBleHBvcnRzTm9uU291cmNlRmlsZXMgPVxuICAgICAgICAgICAgZXhwb3J0c05vblNvdXJjZUZpbGVzIHx8IGlzVmFsdWVFeHBvcnRpbmdOb25Tb3VyY2VGaWxlKGhvc3QsIHN5bWJvbE1ldGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZU5hbWUsXG4gICAgZGlyZWN0aXZlcyxcbiAgICBhYnN0cmFjdERpcmVjdGl2ZXMsXG4gICAgcGlwZXMsXG4gICAgbmdNb2R1bGVzLFxuICAgIGluamVjdGFibGVzLFxuICAgIGV4cG9ydHNOb25Tb3VyY2VGaWxlcyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVGaWxlRm9ySW5qZWN0YWJsZXMoXG4gICAgaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgZmlsZU5hbWU6IHN0cmluZyk6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzIHtcbiAgY29uc3QgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBzaGFsbG93TW9kdWxlczogQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YVtdID0gW107XG4gIGlmIChzdGF0aWNTeW1ib2xSZXNvbHZlci5oYXNEZWNvcmF0b3JzKGZpbGVOYW1lKSkge1xuICAgIHN0YXRpY1N5bWJvbFJlc29sdmVyLmdldFN5bWJvbHNPZihmaWxlTmFtZSkuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHN0YXRpY1N5bWJvbFJlc29sdmVyLnJlc29sdmVTeW1ib2woc3ltYm9sKTtcbiAgICAgIGNvbnN0IHN5bWJvbE1ldGEgPSByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YTtcbiAgICAgIGlmICghc3ltYm9sTWV0YSB8fCBzeW1ib2xNZXRhLl9fc3ltYm9saWMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHN5bWJvbE1ldGEuX19zeW1ib2xpYyA9PT0gJ2NsYXNzJykge1xuICAgICAgICBpZiAobWV0YWRhdGFSZXNvbHZlci5pc0luamVjdGFibGUoc3ltYm9sKSkge1xuICAgICAgICAgIGNvbnN0IGluamVjdGFibGUgPSBtZXRhZGF0YVJlc29sdmVyLmdldEluamVjdGFibGVNZXRhZGF0YShzeW1ib2wsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICBpZiAoaW5qZWN0YWJsZSkge1xuICAgICAgICAgICAgaW5qZWN0YWJsZXMucHVzaChpbmplY3RhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFSZXNvbHZlci5pc05nTW9kdWxlKHN5bWJvbCkpIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBtZXRhZGF0YVJlc29sdmVyLmdldFNoYWxsb3dNb2R1bGVNZXRhZGF0YShzeW1ib2wpO1xuICAgICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHNoYWxsb3dNb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge2ZpbGVOYW1lLCBpbmplY3RhYmxlcywgc2hhbGxvd01vZHVsZXN9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlRXhwb3J0aW5nTm9uU291cmNlRmlsZShob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgbWV0YWRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICBsZXQgZXhwb3J0c05vblNvdXJjZUZpbGVzID0gZmFsc2U7XG5cbiAgY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIFZhbHVlVmlzaXRvciB7XG4gICAgdmlzaXRBcnJheShhcnI6IGFueVtdLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgYXJyLmZvckVhY2godiA9PiB2aXNpdFZhbHVlKHYsIHRoaXMsIGNvbnRleHQpKTtcbiAgICB9XG4gICAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCgoa2V5KSA9PiB2aXNpdFZhbHVlKG1hcFtrZXldLCB0aGlzLCBjb250ZXh0KSk7XG4gICAgfVxuICAgIHZpc2l0UHJpbWl0aXZlKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuICAgIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCAmJiAhaG9zdC5pc1NvdXJjZUZpbGUodmFsdWUuZmlsZVBhdGgpKSB7XG4gICAgICAgIGV4cG9ydHNOb25Tb3VyY2VGaWxlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRWYWx1ZShtZXRhZGF0YSwgbmV3IFZpc2l0b3IoKSwgbnVsbCk7XG4gIHJldHVybiBleHBvcnRzTm9uU291cmNlRmlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFuYWx5emVkRmlsZXMoYW5hbHl6ZWRGaWxlczogTmdBbmFseXplZEZpbGVbXSk6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgY29uc3QgYWxsTmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGE+KCk7XG4gIGNvbnN0IGFsbFBpcGVzQW5kRGlyZWN0aXZlcyA9IG5ldyBTZXQ8U3RhdGljU3ltYm9sPigpO1xuXG4gIGFuYWx5emVkRmlsZXMuZm9yRWFjaChhZiA9PiB7XG4gICAgYWYubmdNb2R1bGVzLmZvckVhY2gobmdNb2R1bGUgPT4ge1xuICAgICAgYWxsTmdNb2R1bGVzLnB1c2gobmdNb2R1bGUpO1xuICAgICAgbmdNb2R1bGUuZGVjbGFyZWREaXJlY3RpdmVzLmZvckVhY2goXG4gICAgICAgICAgZCA9PiBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLnNldChkLnJlZmVyZW5jZSwgbmdNb2R1bGUpKTtcbiAgICAgIG5nTW9kdWxlLmRlY2xhcmVkUGlwZXMuZm9yRWFjaChwID0+IG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuc2V0KHAucmVmZXJlbmNlLCBuZ01vZHVsZSkpO1xuICAgIH0pO1xuICAgIGFmLmRpcmVjdGl2ZXMuZm9yRWFjaChkID0+IGFsbFBpcGVzQW5kRGlyZWN0aXZlcy5hZGQoZCkpO1xuICAgIGFmLnBpcGVzLmZvckVhY2gocCA9PiBhbGxQaXBlc0FuZERpcmVjdGl2ZXMuYWRkKHApKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3ltYm9sc01pc3NpbmdNb2R1bGU6IFN0YXRpY1N5bWJvbFtdID0gW107XG4gIGFsbFBpcGVzQW5kRGlyZWN0aXZlcy5mb3JFYWNoKHJlZiA9PiB7XG4gICAgaWYgKCFuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmhhcyhyZWYpKSB7XG4gICAgICBzeW1ib2xzTWlzc2luZ01vZHVsZS5wdXNoKHJlZik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBuZ01vZHVsZXM6IGFsbE5nTW9kdWxlcyxcbiAgICBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLFxuICAgIHN5bWJvbHNNaXNzaW5nTW9kdWxlLFxuICAgIGZpbGVzOiBhbmFseXplZEZpbGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQW5kVmFsaWRhdGVOZ0ZpbGVzKGZpbGVzOiBOZ0FuYWx5emVkRmlsZVtdKTogTmdBbmFseXplZE1vZHVsZXMge1xuICByZXR1cm4gdmFsaWRhdGVBbmFseXplZE1vZHVsZXMobWVyZ2VBbmFseXplZEZpbGVzKGZpbGVzKSk7XG59XG4iXX0=