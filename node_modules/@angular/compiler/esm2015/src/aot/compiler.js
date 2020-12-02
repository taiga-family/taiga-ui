/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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
export class AotCompiler {
    constructor(_config, _options, _host, reflector, _metadataResolver, _templateParser, _styleCompiler, _viewCompiler, _typeCheckCompiler, _ngModuleCompiler, _injectableCompiler, _outputEmitter, _summaryResolver, _symbolResolver) {
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
    clearCache() {
        this._metadataResolver.clearCache();
    }
    analyzeModulesSync(rootFiles) {
        const analyzeResult = analyzeAndValidateNgModules(rootFiles, this._host, this._symbolResolver, this._metadataResolver);
        analyzeResult.ngModules.forEach(ngModule => this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, true));
        return analyzeResult;
    }
    analyzeModulesAsync(rootFiles) {
        const analyzeResult = analyzeAndValidateNgModules(rootFiles, this._host, this._symbolResolver, this._metadataResolver);
        return Promise
            .all(analyzeResult.ngModules.map(ngModule => this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, false)))
            .then(() => analyzeResult);
    }
    _analyzeFile(fileName) {
        let analyzedFile = this._analyzedFiles.get(fileName);
        if (!analyzedFile) {
            analyzedFile =
                analyzeFile(this._host, this._symbolResolver, this._metadataResolver, fileName);
            this._analyzedFiles.set(fileName, analyzedFile);
        }
        return analyzedFile;
    }
    _analyzeFileForInjectables(fileName) {
        let analyzedFile = this._analyzedFilesForInjectables.get(fileName);
        if (!analyzedFile) {
            analyzedFile = analyzeFileForInjectables(this._host, this._symbolResolver, this._metadataResolver, fileName);
            this._analyzedFilesForInjectables.set(fileName, analyzedFile);
        }
        return analyzedFile;
    }
    findGeneratedFileNames(fileName) {
        const genFileNames = [];
        const file = this._analyzeFile(fileName);
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
        const fileSuffix = normalizeGenFileSuffix(splitTypescriptSuffix(file.fileName, true)[1]);
        file.directives.forEach((dirSymbol) => {
            const compMeta = this._metadataResolver.getNonNormalizedDirectiveMetadata(dirSymbol).metadata;
            if (!compMeta.isComponent) {
                return;
            }
            // Note: compMeta is a component and therefore template is non null.
            compMeta.template.styleUrls.forEach((styleUrl) => {
                const normalizedUrl = this._host.resourceNameToFileName(styleUrl, file.fileName);
                if (!normalizedUrl) {
                    throw syntaxError(`Couldn't resolve resource ${styleUrl} relative to ${file.fileName}`);
                }
                const needsShim = (compMeta.template.encapsulation ||
                    this._config.defaultEncapsulation) === ViewEncapsulation.Emulated;
                genFileNames.push(_stylesModuleUrl(normalizedUrl, needsShim, fileSuffix));
                if (this._options.allowEmptyCodegenFiles) {
                    genFileNames.push(_stylesModuleUrl(normalizedUrl, !needsShim, fileSuffix));
                }
            });
        });
        return genFileNames;
    }
    emitBasicStub(genFileName, originalFileName) {
        const outputCtx = this._createOutputContext(genFileName);
        if (genFileName.endsWith('.ngfactory.ts')) {
            if (!originalFileName) {
                throw new Error(`Assertion error: require the original file for .ngfactory.ts stubs. File: ${genFileName}`);
            }
            const originalFile = this._analyzeFile(originalFileName);
            this._createNgFactoryStub(outputCtx, originalFile, 1 /* Basic */);
        }
        else if (genFileName.endsWith('.ngsummary.ts')) {
            if (this._options.enableSummariesForJit) {
                if (!originalFileName) {
                    throw new Error(`Assertion error: require the original file for .ngsummary.ts stubs. File: ${genFileName}`);
                }
                const originalFile = this._analyzeFile(originalFileName);
                _createEmptyStub(outputCtx);
                originalFile.ngModules.forEach(ngModule => {
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
    }
    emitTypeCheckStub(genFileName, originalFileName) {
        const originalFile = this._analyzeFile(originalFileName);
        const outputCtx = this._createOutputContext(genFileName);
        if (genFileName.endsWith('.ngfactory.ts')) {
            this._createNgFactoryStub(outputCtx, originalFile, 2 /* TypeCheck */);
        }
        return outputCtx.statements.length > 0 ?
            this._codegenSourceModule(originalFile.fileName, outputCtx) :
            null;
    }
    loadFilesAsync(fileNames, tsFiles) {
        const files = fileNames.map(fileName => this._analyzeFile(fileName));
        const loadingPromises = [];
        files.forEach(file => file.ngModules.forEach(ngModule => loadingPromises.push(this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, false))));
        const analyzedInjectables = tsFiles.map(tsFile => this._analyzeFileForInjectables(tsFile));
        return Promise.all(loadingPromises).then(_ => ({
            analyzedModules: mergeAndValidateNgFiles(files),
            analyzedInjectables: analyzedInjectables,
        }));
    }
    loadFilesSync(fileNames, tsFiles) {
        const files = fileNames.map(fileName => this._analyzeFile(fileName));
        files.forEach(file => file.ngModules.forEach(ngModule => this._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference, true)));
        const analyzedInjectables = tsFiles.map(tsFile => this._analyzeFileForInjectables(tsFile));
        return {
            analyzedModules: mergeAndValidateNgFiles(files),
            analyzedInjectables: analyzedInjectables,
        };
    }
    _createNgFactoryStub(outputCtx, file, emitFlags) {
        let componentId = 0;
        file.ngModules.forEach((ngModuleMeta, ngModuleIndex) => {
            // Note: the code below needs to executed for StubEmitFlags.Basic and StubEmitFlags.TypeCheck,
            // so we don't change the .ngfactory file too much when adding the type-check block.
            // create exports that user code can reference
            this._ngModuleCompiler.createStub(outputCtx, ngModuleMeta.type.reference);
            // add references to the symbols from the metadata.
            // These can be used by the type check block for components,
            // and they also cause TypeScript to include these files into the program too,
            // which will make them part of the analyzedFiles.
            const externalReferences = [
                // Add references that are available from all the modules and imports.
                ...ngModuleMeta.transitiveModule.directives.map(d => d.reference),
                ...ngModuleMeta.transitiveModule.pipes.map(d => d.reference),
                ...ngModuleMeta.importedModules.map(m => m.type.reference),
                ...ngModuleMeta.exportedModules.map(m => m.type.reference),
                // Add references that might be inserted by the template compiler.
                ...this._externalIdentifierReferences([Identifiers.TemplateRef, Identifiers.ElementRef]),
            ];
            const externalReferenceVars = new Map();
            externalReferences.forEach((ref, typeIndex) => {
                externalReferenceVars.set(ref, `_decl${ngModuleIndex}_${typeIndex}`);
            });
            externalReferenceVars.forEach((varName, reference) => {
                outputCtx.statements.push(o.variable(varName)
                    .set(o.NULL_EXPR.cast(o.DYNAMIC_TYPE))
                    .toDeclStmt(o.expressionType(outputCtx.importExpr(reference, /* typeParams */ null, /* useSummaries */ false))));
            });
            if (emitFlags & 2 /* TypeCheck */) {
                // add the type-check block for all components of the NgModule
                ngModuleMeta.declaredDirectives.forEach((dirId) => {
                    const compMeta = this._metadataResolver.getDirectiveMetadata(dirId.reference);
                    if (!compMeta.isComponent) {
                        return;
                    }
                    componentId++;
                    this._createTypeCheckBlock(outputCtx, `${compMeta.type.reference.name}_Host_${componentId}`, ngModuleMeta, this._metadataResolver.getHostComponentMetadata(compMeta), [compMeta.type], externalReferenceVars);
                    this._createTypeCheckBlock(outputCtx, `${compMeta.type.reference.name}_${componentId}`, ngModuleMeta, compMeta, ngModuleMeta.transitiveModule.directives, externalReferenceVars);
                });
            }
        });
        if (outputCtx.statements.length === 0) {
            _createEmptyStub(outputCtx);
        }
    }
    _externalIdentifierReferences(references) {
        const result = [];
        for (let reference of references) {
            const token = createTokenForExternalReference(this.reflector, reference);
            if (token.identifier) {
                result.push(token.identifier.reference);
            }
        }
        return result;
    }
    _createTypeCheckBlock(ctx, componentId, moduleMeta, compMeta, directives, externalReferenceVars) {
        const { template: parsedTemplate, pipes: usedPipes } = this._parseTemplate(compMeta, moduleMeta, directives);
        ctx.statements.push(...this._typeCheckCompiler.compileComponent(componentId, compMeta, parsedTemplate, usedPipes, externalReferenceVars, ctx));
    }
    emitMessageBundle(analyzeResult, locale) {
        const errors = [];
        const htmlParser = new HtmlParser();
        // TODO(vicb): implicit tags & attributes
        const messageBundle = new MessageBundle(htmlParser, [], {}, locale);
        analyzeResult.files.forEach(file => {
            const compMetas = [];
            file.directives.forEach(directiveType => {
                const dirMeta = this._metadataResolver.getDirectiveMetadata(directiveType);
                if (dirMeta && dirMeta.isComponent) {
                    compMetas.push(dirMeta);
                }
            });
            compMetas.forEach(compMeta => {
                const html = compMeta.template.template;
                // Template URL points to either an HTML or TS file depending on whether
                // the file is used with `templateUrl:` or `template:`, respectively.
                const templateUrl = compMeta.template.templateUrl;
                const interpolationConfig = InterpolationConfig.fromArray(compMeta.template.interpolation);
                errors.push(...messageBundle.updateFromTemplate(html, templateUrl, interpolationConfig));
            });
        });
        if (errors.length) {
            throw new Error(errors.map(e => e.toString()).join('\n'));
        }
        return messageBundle;
    }
    emitAllPartialModules({ ngModuleByPipeOrDirective, files }, r3Files) {
        const contextMap = new Map();
        const getContext = (fileName) => {
            if (!contextMap.has(fileName)) {
                contextMap.set(fileName, this._createOutputContext(fileName));
            }
            return contextMap.get(fileName);
        };
        files.forEach(file => this._compilePartialModule(file.fileName, ngModuleByPipeOrDirective, file.directives, file.pipes, file.ngModules, file.injectables, getContext(file.fileName)));
        r3Files.forEach(file => this._compileShallowModules(file.fileName, file.shallowModules, getContext(file.fileName)));
        return Array.from(contextMap.values())
            .map(context => ({
            fileName: context.genFilePath,
            statements: [...context.constantPool.statements, ...context.statements],
        }));
    }
    _compileShallowModules(fileName, shallowModules, context) {
        shallowModules.forEach(module => compileR3Module(context, module, this._injectableCompiler));
    }
    _compilePartialModule(fileName, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables, context) {
        const errors = [];
        const schemaRegistry = new DomElementSchemaRegistry();
        const hostBindingParser = new BindingParser(this._templateParser.expressionParser, DEFAULT_INTERPOLATION_CONFIG, schemaRegistry, [], errors);
        // Process all components and directives
        directives.forEach(directiveType => {
            const directiveMetadata = this._metadataResolver.getDirectiveMetadata(directiveType);
            if (directiveMetadata.isComponent) {
                const module = ngModuleByPipeOrDirective.get(directiveType);
                module ||
                    error(`Cannot determine the module for component '${identifierName(directiveMetadata.type)}'`);
                let htmlAst = directiveMetadata.template.htmlAst;
                const preserveWhitespaces = directiveMetadata.template.preserveWhitespaces;
                if (!preserveWhitespaces) {
                    htmlAst = removeWhitespaces(htmlAst);
                }
                const render3Ast = htmlAstToRender3Ast(htmlAst.rootNodes, hostBindingParser);
                // Map of StaticType by directive selectors
                const directiveTypeBySel = new Map();
                const directives = module.transitiveModule.directives.map(dir => this._metadataResolver.getDirectiveSummary(dir.reference));
                directives.forEach(directive => {
                    if (directive.selector) {
                        directiveTypeBySel.set(directive.selector, directive.type.reference);
                    }
                });
                // Map of StaticType by pipe names
                const pipeTypeByName = new Map();
                const pipes = module.transitiveModule.pipes.map(pipe => this._metadataResolver.getPipeSummary(pipe.reference));
                pipes.forEach(pipe => {
                    pipeTypeByName.set(pipe.name, pipe.type.reference);
                });
                compileR3Component(context, directiveMetadata, render3Ast, this.reflector, hostBindingParser, directiveTypeBySel, pipeTypeByName);
            }
            else {
                compileR3Directive(context, directiveMetadata, this.reflector, hostBindingParser);
            }
        });
        pipes.forEach(pipeType => {
            const pipeMetadata = this._metadataResolver.getPipeMetadata(pipeType);
            if (pipeMetadata) {
                compileR3Pipe(context, pipeMetadata, this.reflector);
            }
        });
        injectables.forEach(injectable => this._injectableCompiler.compile(injectable, context));
    }
    emitAllPartialModules2(files) {
        // Using reduce like this is a select many pattern (where map is a select pattern)
        return files.reduce((r, file) => {
            r.push(...this._emitPartialModule2(file.fileName, file.injectables));
            return r;
        }, []);
    }
    _emitPartialModule2(fileName, injectables) {
        const context = this._createOutputContext(fileName);
        injectables.forEach(injectable => this._injectableCompiler.compile(injectable, context));
        if (context.statements && context.statements.length > 0) {
            return [{ fileName, statements: [...context.constantPool.statements, ...context.statements] }];
        }
        return [];
    }
    emitAllImpls(analyzeResult) {
        const { ngModuleByPipeOrDirective, files } = analyzeResult;
        const sourceModules = files.map(file => this._compileImplFile(file.fileName, ngModuleByPipeOrDirective, file.directives, file.pipes, file.ngModules, file.injectables));
        return flatten(sourceModules);
    }
    _compileImplFile(srcFileUrl, ngModuleByPipeOrDirective, directives, pipes, ngModules, injectables) {
        const fileSuffix = normalizeGenFileSuffix(splitTypescriptSuffix(srcFileUrl, true)[1]);
        const generatedFiles = [];
        const outputCtx = this._createOutputContext(ngfactoryFilePath(srcFileUrl, true));
        generatedFiles.push(...this._createSummary(srcFileUrl, directives, pipes, ngModules, injectables, outputCtx));
        // compile all ng modules
        ngModules.forEach((ngModuleMeta) => this._compileModule(outputCtx, ngModuleMeta));
        // compile components
        directives.forEach((dirType) => {
            const compMeta = this._metadataResolver.getDirectiveMetadata(dirType);
            if (!compMeta.isComponent) {
                return;
            }
            const ngModule = ngModuleByPipeOrDirective.get(dirType);
            if (!ngModule) {
                throw new Error(`Internal Error: cannot determine the module for component ${identifierName(compMeta.type)}!`);
            }
            // compile styles
            const componentStylesheet = this._styleCompiler.compileComponent(outputCtx, compMeta);
            // Note: compMeta is a component and therefore template is non null.
            compMeta.template.externalStylesheets.forEach((stylesheetMeta) => {
                // Note: fill non shim and shim style files as they might
                // be shared by component with and without ViewEncapsulation.
                const shim = this._styleCompiler.needsStyleShim(compMeta);
                generatedFiles.push(this._codegenStyles(srcFileUrl, compMeta, stylesheetMeta, shim, fileSuffix));
                if (this._options.allowEmptyCodegenFiles) {
                    generatedFiles.push(this._codegenStyles(srcFileUrl, compMeta, stylesheetMeta, !shim, fileSuffix));
                }
            });
            // compile components
            const compViewVars = this._compileComponent(outputCtx, compMeta, ngModule, ngModule.transitiveModule.directives, componentStylesheet, fileSuffix);
            this._compileComponentFactory(outputCtx, compMeta, ngModule, fileSuffix);
        });
        if (outputCtx.statements.length > 0 || this._options.allowEmptyCodegenFiles) {
            const srcModule = this._codegenSourceModule(srcFileUrl, outputCtx);
            generatedFiles.unshift(srcModule);
        }
        return generatedFiles;
    }
    _createSummary(srcFileName, directives, pipes, ngModules, injectables, ngFactoryCtx) {
        const symbolSummaries = this._symbolResolver.getSymbolsOf(srcFileName)
            .map(symbol => this._symbolResolver.resolveSymbol(symbol));
        const typeData = [
            ...ngModules.map(meta => ({
                summary: this._metadataResolver.getNgModuleSummary(meta.type.reference),
                metadata: this._metadataResolver.getNgModuleMetadata(meta.type.reference)
            })),
            ...directives.map(ref => ({
                summary: this._metadataResolver.getDirectiveSummary(ref),
                metadata: this._metadataResolver.getDirectiveMetadata(ref)
            })),
            ...pipes.map(ref => ({
                summary: this._metadataResolver.getPipeSummary(ref),
                metadata: this._metadataResolver.getPipeMetadata(ref)
            })),
            ...injectables.map(ref => ({
                summary: this._metadataResolver.getInjectableSummary(ref.symbol),
                metadata: this._metadataResolver.getInjectableSummary(ref.symbol).type
            }))
        ];
        const forJitOutputCtx = this._options.enableSummariesForJit ?
            this._createOutputContext(summaryForJitFileName(srcFileName, true)) :
            null;
        const { json, exportAs } = serializeSummaries(srcFileName, forJitOutputCtx, this._summaryResolver, this._symbolResolver, symbolSummaries, typeData, this._options.createExternalSymbolFactoryReexports);
        exportAs.forEach((entry) => {
            ngFactoryCtx.statements.push(o.variable(entry.exportAs).set(ngFactoryCtx.importExpr(entry.symbol)).toDeclStmt(null, [
                o.StmtModifier.Exported
            ]));
        });
        const summaryJson = new GeneratedFile(srcFileName, summaryFileName(srcFileName), json);
        const result = [summaryJson];
        if (forJitOutputCtx) {
            result.push(this._codegenSourceModule(srcFileName, forJitOutputCtx));
        }
        return result;
    }
    _compileModule(outputCtx, ngModule) {
        const providers = [];
        if (this._options.locale) {
            const normalizedLocale = this._options.locale.replace(/_/g, '-');
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
    }
    _compileComponentFactory(outputCtx, compMeta, ngModule, fileSuffix) {
        const hostMeta = this._metadataResolver.getHostComponentMetadata(compMeta);
        const hostViewFactoryVar = this._compileComponent(outputCtx, hostMeta, ngModule, [compMeta.type], null, fileSuffix)
            .viewClassVar;
        const compFactoryVar = componentFactoryName(compMeta.type.reference);
        const inputsExprs = [];
        for (let propName in compMeta.inputs) {
            const templateName = compMeta.inputs[propName];
            // Don't quote so that the key gets minified...
            inputsExprs.push(new o.LiteralMapEntry(propName, o.literal(templateName), false));
        }
        const outputsExprs = [];
        for (let propName in compMeta.outputs) {
            const templateName = compMeta.outputs[propName];
            // Don't quote so that the key gets minified...
            outputsExprs.push(new o.LiteralMapEntry(propName, o.literal(templateName), false));
        }
        outputCtx.statements.push(o.variable(compFactoryVar)
            .set(o.importExpr(Identifiers.createComponentFactory).callFn([
            o.literal(compMeta.selector), outputCtx.importExpr(compMeta.type.reference),
            o.variable(hostViewFactoryVar), new o.LiteralMapExpr(inputsExprs),
            new o.LiteralMapExpr(outputsExprs),
            o.literalArr(compMeta.template.ngContentSelectors.map(selector => o.literal(selector)))
        ]))
            .toDeclStmt(o.importType(Identifiers.ComponentFactory, [o.expressionType(outputCtx.importExpr(compMeta.type.reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]));
    }
    _compileComponent(outputCtx, compMeta, ngModule, directiveIdentifiers, componentStyles, fileSuffix) {
        const { template: parsedTemplate, pipes: usedPipes } = this._parseTemplate(compMeta, ngModule, directiveIdentifiers);
        const stylesExpr = componentStyles ? o.variable(componentStyles.stylesVar) : o.literalArr([]);
        const viewResult = this._viewCompiler.compileComponent(outputCtx, compMeta, parsedTemplate, stylesExpr, usedPipes);
        if (componentStyles) {
            _resolveStyleStatements(this._symbolResolver, componentStyles, this._styleCompiler.needsStyleShim(compMeta), fileSuffix);
        }
        return viewResult;
    }
    _parseTemplate(compMeta, ngModule, directiveIdentifiers) {
        if (this._templateAstCache.has(compMeta.type.reference)) {
            return this._templateAstCache.get(compMeta.type.reference);
        }
        const preserveWhitespaces = compMeta.template.preserveWhitespaces;
        const directives = directiveIdentifiers.map(dir => this._metadataResolver.getDirectiveSummary(dir.reference));
        const pipes = ngModule.transitiveModule.pipes.map(pipe => this._metadataResolver.getPipeSummary(pipe.reference));
        const result = this._templateParser.parse(compMeta, compMeta.template.htmlAst, directives, pipes, ngModule.schemas, templateSourceUrl(ngModule.type, compMeta, compMeta.template), preserveWhitespaces);
        this._templateAstCache.set(compMeta.type.reference, result);
        return result;
    }
    _createOutputContext(genFilePath) {
        const importExpr = (symbol, typeParams = null, useSummaries = true) => {
            if (!(symbol instanceof StaticSymbol)) {
                throw new Error(`Internal error: unknown identifier ${JSON.stringify(symbol)}`);
            }
            const arity = this._symbolResolver.getTypeArity(symbol) || 0;
            const { filePath, name, members } = this._symbolResolver.getImportAs(symbol, useSummaries) || symbol;
            const importModule = this._fileNameToModuleName(filePath, genFilePath);
            // It should be good enough to compare filePath to genFilePath and if they are equal
            // there is a self reference. However, ngfactory files generate to .ts but their
            // symbols have .d.ts so a simple compare is insufficient. They should be canonical
            // and is tracked by #17705.
            const selfReference = this._fileNameToModuleName(genFilePath, genFilePath);
            const moduleName = importModule === selfReference ? null : importModule;
            // If we are in a type expression that refers to a generic type then supply
            // the required type parameters. If there were not enough type parameters
            // supplied, supply any as the type. Outside a type expression the reference
            // should not supply type parameters and be treated as a simple value reference
            // to the constructor function itself.
            const suppliedTypeParams = typeParams || [];
            const missingTypeParamsCount = arity - suppliedTypeParams.length;
            const allTypeParams = suppliedTypeParams.concat(newArray(missingTypeParamsCount, o.DYNAMIC_TYPE));
            return members.reduce((expr, memberName) => expr.prop(memberName), o.importExpr(new o.ExternalReference(moduleName, name, null), allTypeParams));
        };
        return { statements: [], genFilePath, importExpr, constantPool: new ConstantPool() };
    }
    _fileNameToModuleName(importedFilePath, containingFilePath) {
        return this._summaryResolver.getKnownModuleName(importedFilePath) ||
            this._symbolResolver.getKnownModuleName(importedFilePath) ||
            this._host.fileNameToModuleName(importedFilePath, containingFilePath);
    }
    _codegenStyles(srcFileUrl, compMeta, stylesheetMetadata, isShimmed, fileSuffix) {
        const outputCtx = this._createOutputContext(_stylesModuleUrl(stylesheetMetadata.moduleUrl, isShimmed, fileSuffix));
        const compiledStylesheet = this._styleCompiler.compileStyles(outputCtx, compMeta, stylesheetMetadata, isShimmed);
        _resolveStyleStatements(this._symbolResolver, compiledStylesheet, isShimmed, fileSuffix);
        return this._codegenSourceModule(srcFileUrl, outputCtx);
    }
    _codegenSourceModule(srcFileUrl, ctx) {
        return new GeneratedFile(srcFileUrl, ctx.genFilePath, ctx.statements);
    }
    listLazyRoutes(entryRoute, analyzedModules) {
        const self = this;
        if (entryRoute) {
            const symbol = parseLazyRoute(entryRoute, this.reflector).referencedModule;
            return visitLazyRoute(symbol);
        }
        else if (analyzedModules) {
            const allLazyRoutes = [];
            for (const ngModule of analyzedModules.ngModules) {
                const lazyRoutes = listLazyRoutes(ngModule, this.reflector);
                for (const lazyRoute of lazyRoutes) {
                    allLazyRoutes.push(lazyRoute);
                }
            }
            return allLazyRoutes;
        }
        else {
            throw new Error(`Either route or analyzedModules has to be specified!`);
        }
        function visitLazyRoute(symbol, seenRoutes = new Set(), allLazyRoutes = []) {
            // Support pointing to default exports, but stop recursing there,
            // as the StaticReflector does not yet support default exports.
            if (seenRoutes.has(symbol) || !symbol.name) {
                return allLazyRoutes;
            }
            seenRoutes.add(symbol);
            const lazyRoutes = listLazyRoutes(self._metadataResolver.getNgModuleMetadata(symbol, true), self.reflector);
            for (const lazyRoute of lazyRoutes) {
                allLazyRoutes.push(lazyRoute);
                visitLazyRoute(lazyRoute.referencedModule, seenRoutes, allLazyRoutes);
            }
            return allLazyRoutes;
        }
    }
}
function _createEmptyStub(outputCtx) {
    // Note: We need to produce at least one import statement so that
    // TypeScript knows that the file is an es6 module. Otherwise our generated
    // exports / imports won't be emitted properly by TypeScript.
    outputCtx.statements.push(o.importExpr(Identifiers.ComponentFactory).toStmt());
}
function _resolveStyleStatements(symbolResolver, compileResult, needsShim, fileSuffix) {
    compileResult.dependencies.forEach((dep) => {
        dep.setValue(symbolResolver.getStaticSymbol(_stylesModuleUrl(dep.moduleUrl, needsShim, fileSuffix), dep.name));
    });
}
function _stylesModuleUrl(stylesheetUrl, shim, suffix) {
    return `${stylesheetUrl}${shim ? '.shim' : ''}.ngstyle${suffix}`;
}
export function analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
    const files = _analyzeFilesIncludingNonProgramFiles(fileNames, host, staticSymbolResolver, metadataResolver);
    return mergeAnalyzedFiles(files);
}
export function analyzeAndValidateNgModules(fileNames, host, staticSymbolResolver, metadataResolver) {
    return validateAnalyzedModules(analyzeNgModules(fileNames, host, staticSymbolResolver, metadataResolver));
}
function validateAnalyzedModules(analyzedModules) {
    if (analyzedModules.symbolsMissingModule && analyzedModules.symbolsMissingModule.length) {
        const messages = analyzedModules.symbolsMissingModule.map(s => `Cannot determine the module for class ${s.name} in ${s.filePath}! Add ${s.name} to the NgModule to fix it.`);
        throw syntaxError(messages.join('\n'));
    }
    return analyzedModules;
}
// Analyzes all of the program files,
// including files that are not part of the program
// but are referenced by an NgModule.
function _analyzeFilesIncludingNonProgramFiles(fileNames, host, staticSymbolResolver, metadataResolver) {
    const seenFiles = new Set();
    const files = [];
    const visitFile = (fileName) => {
        if (seenFiles.has(fileName) || !host.isSourceFile(fileName)) {
            return false;
        }
        seenFiles.add(fileName);
        const analyzedFile = analyzeFile(host, staticSymbolResolver, metadataResolver, fileName);
        files.push(analyzedFile);
        analyzedFile.ngModules.forEach(ngModule => {
            ngModule.transitiveModule.modules.forEach(modMeta => visitFile(modMeta.reference.filePath));
        });
    };
    fileNames.forEach((fileName) => visitFile(fileName));
    return files;
}
export function analyzeFile(host, staticSymbolResolver, metadataResolver, fileName) {
    const abstractDirectives = [];
    const directives = [];
    const pipes = [];
    const injectables = [];
    const ngModules = [];
    const hasDecorators = staticSymbolResolver.hasDecorators(fileName);
    let exportsNonSourceFiles = false;
    const isDeclarationFile = fileName.endsWith('.d.ts');
    // Don't analyze .d.ts files that have no decorators as a shortcut
    // to speed up the analysis. This prevents us from
    // resolving the references in these files.
    // Note: exportsNonSourceFiles is only needed when compiling with summaries,
    // which is not the case when .d.ts files are treated as input files.
    if (!isDeclarationFile || hasDecorators) {
        staticSymbolResolver.getSymbolsOf(fileName).forEach((symbol) => {
            const resolvedSymbol = staticSymbolResolver.resolveSymbol(symbol);
            const symbolMeta = resolvedSymbol.metadata;
            if (!symbolMeta || symbolMeta.__symbolic === 'error') {
                return;
            }
            let isNgSymbol = false;
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
                    const ngModule = metadataResolver.getNgModuleMetadata(symbol, false);
                    if (ngModule) {
                        isNgSymbol = true;
                        ngModules.push(ngModule);
                    }
                }
                else if (metadataResolver.isInjectable(symbol)) {
                    isNgSymbol = true;
                    const injectable = metadataResolver.getInjectableMetadata(symbol, null, false);
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
        fileName,
        directives,
        abstractDirectives,
        pipes,
        ngModules,
        injectables,
        exportsNonSourceFiles,
    };
}
export function analyzeFileForInjectables(host, staticSymbolResolver, metadataResolver, fileName) {
    const injectables = [];
    const shallowModules = [];
    if (staticSymbolResolver.hasDecorators(fileName)) {
        staticSymbolResolver.getSymbolsOf(fileName).forEach((symbol) => {
            const resolvedSymbol = staticSymbolResolver.resolveSymbol(symbol);
            const symbolMeta = resolvedSymbol.metadata;
            if (!symbolMeta || symbolMeta.__symbolic === 'error') {
                return;
            }
            if (symbolMeta.__symbolic === 'class') {
                if (metadataResolver.isInjectable(symbol)) {
                    const injectable = metadataResolver.getInjectableMetadata(symbol, null, false);
                    if (injectable) {
                        injectables.push(injectable);
                    }
                }
                else if (metadataResolver.isNgModule(symbol)) {
                    const module = metadataResolver.getShallowModuleMetadata(symbol);
                    if (module) {
                        shallowModules.push(module);
                    }
                }
            }
        });
    }
    return { fileName, injectables, shallowModules };
}
function isValueExportingNonSourceFile(host, metadata) {
    let exportsNonSourceFiles = false;
    class Visitor {
        visitArray(arr, context) {
            arr.forEach(v => visitValue(v, this, context));
        }
        visitStringMap(map, context) {
            Object.keys(map).forEach((key) => visitValue(map[key], this, context));
        }
        visitPrimitive(value, context) { }
        visitOther(value, context) {
            if (value instanceof StaticSymbol && !host.isSourceFile(value.filePath)) {
                exportsNonSourceFiles = true;
            }
        }
    }
    visitValue(metadata, new Visitor(), null);
    return exportsNonSourceFiles;
}
export function mergeAnalyzedFiles(analyzedFiles) {
    const allNgModules = [];
    const ngModuleByPipeOrDirective = new Map();
    const allPipesAndDirectives = new Set();
    analyzedFiles.forEach(af => {
        af.ngModules.forEach(ngModule => {
            allNgModules.push(ngModule);
            ngModule.declaredDirectives.forEach(d => ngModuleByPipeOrDirective.set(d.reference, ngModule));
            ngModule.declaredPipes.forEach(p => ngModuleByPipeOrDirective.set(p.reference, ngModule));
        });
        af.directives.forEach(d => allPipesAndDirectives.add(d));
        af.pipes.forEach(p => allPipesAndDirectives.add(p));
    });
    const symbolsMissingModule = [];
    allPipesAndDirectives.forEach(ref => {
        if (!ngModuleByPipeOrDirective.has(ref)) {
            symbolsMissingModule.push(ref);
        }
    });
    return {
        ngModules: allNgModules,
        ngModuleByPipeOrDirective,
        symbolsMissingModule,
        files: analyzedFiles
    };
}
function mergeAndValidateNgFiles(files) {
    return validateAnalyzedModules(mergeAnalyzedFiles(files));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYW90L2NvbXBpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBOFEsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWxYLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQywrQkFBK0IsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDRCQUE0QixFQUFFLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFHcEcsT0FBTyxLQUFLLENBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxPQUFPLEVBQUMsMEJBQTBCLElBQUksZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFDLHNCQUFzQixJQUFJLGFBQWEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQywyQkFBMkIsSUFBSSxrQkFBa0IsRUFBRSwyQkFBMkIsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlJLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRy9FLE9BQU8sRUFB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Q0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEsIENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGEsIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLCBDb21waWxlUGlwZU1ldGFkYXRhLCBDb21waWxlUGlwZVN1bW1hcnksIENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBDb21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhLCBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhLCBDb21waWxlVHlwZU1ldGFkYXRhLCBDb21waWxlVHlwZVN1bW1hcnksIGNvbXBvbmVudEZhY3RvcnlOYW1lLCBmbGF0dGVuLCBpZGVudGlmaWVyTmFtZSwgdGVtcGxhdGVTb3VyY2VVcmx9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlckNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7Q29uc3RhbnRQb29sfSBmcm9tICcuLi9jb25zdGFudF9wb29sJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQnVuZGxlfSBmcm9tICcuLi9pMThuL21lc3NhZ2VfYnVuZGxlJztcbmltcG9ydCB7Y3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZSwgSWRlbnRpZmllcnN9IGZyb20gJy4uL2lkZW50aWZpZXJzJztcbmltcG9ydCB7SW5qZWN0YWJsZUNvbXBpbGVyfSBmcm9tICcuLi9pbmplY3RhYmxlX2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcGlsZU1ldGFkYXRhUmVzb2x2ZXJ9IGZyb20gJy4uL21ldGFkYXRhX3Jlc29sdmVyJztcbmltcG9ydCB7SHRtbFBhcnNlcn0gZnJvbSAnLi4vbWxfcGFyc2VyL2h0bWxfcGFyc2VyJztcbmltcG9ydCB7cmVtb3ZlV2hpdGVzcGFjZXN9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3doaXRlc3BhY2VzJztcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSAnLi4vbWxfcGFyc2VyL2ludGVycG9sYXRpb25fY29uZmlnJztcbmltcG9ydCB7TmdNb2R1bGVDb21waWxlcn0gZnJvbSAnLi4vbmdfbW9kdWxlX2NvbXBpbGVyJztcbmltcG9ydCB7T3V0cHV0RW1pdHRlcn0gZnJvbSAnLi4vb3V0cHV0L2Fic3RyYWN0X2VtaXR0ZXInO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlRXJyb3J9IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuaW1wb3J0IHtjb21waWxlTmdNb2R1bGVGcm9tUmVuZGVyMiBhcyBjb21waWxlUjNNb2R1bGV9IGZyb20gJy4uL3JlbmRlcjMvcjNfbW9kdWxlX2NvbXBpbGVyJztcbmltcG9ydCB7Y29tcGlsZVBpcGVGcm9tUmVuZGVyMiBhcyBjb21waWxlUjNQaXBlfSBmcm9tICcuLi9yZW5kZXIzL3IzX3BpcGVfY29tcGlsZXInO1xuaW1wb3J0IHtodG1sQXN0VG9SZW5kZXIzQXN0fSBmcm9tICcuLi9yZW5kZXIzL3IzX3RlbXBsYXRlX3RyYW5zZm9ybSc7XG5pbXBvcnQge2NvbXBpbGVDb21wb25lbnRGcm9tUmVuZGVyMiBhcyBjb21waWxlUjNDb21wb25lbnQsIGNvbXBpbGVEaXJlY3RpdmVGcm9tUmVuZGVyMiBhcyBjb21waWxlUjNEaXJlY3RpdmV9IGZyb20gJy4uL3JlbmRlcjMvdmlldy9jb21waWxlcic7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi4vc2NoZW1hL2RvbV9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0NvbXBpbGVkU3R5bGVzaGVldCwgU3R5bGVDb21waWxlcn0gZnJvbSAnLi4vc3R5bGVfY29tcGlsZXInO1xuaW1wb3J0IHtTdW1tYXJ5UmVzb2x2ZXJ9IGZyb20gJy4uL3N1bW1hcnlfcmVzb2x2ZXInO1xuaW1wb3J0IHtCaW5kaW5nUGFyc2VyfSBmcm9tICcuLi90ZW1wbGF0ZV9wYXJzZXIvYmluZGluZ19wYXJzZXInO1xuaW1wb3J0IHtUZW1wbGF0ZUFzdH0gZnJvbSAnLi4vdGVtcGxhdGVfcGFyc2VyL3RlbXBsYXRlX2FzdCc7XG5pbXBvcnQge1RlbXBsYXRlUGFyc2VyfSBmcm9tICcuLi90ZW1wbGF0ZV9wYXJzZXIvdGVtcGxhdGVfcGFyc2VyJztcbmltcG9ydCB7ZXJyb3IsIG5ld0FycmF5LCBPdXRwdXRDb250ZXh0LCBzeW50YXhFcnJvciwgVmFsdWVWaXNpdG9yLCB2aXNpdFZhbHVlfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7VHlwZUNoZWNrQ29tcGlsZXJ9IGZyb20gJy4uL3ZpZXdfY29tcGlsZXIvdHlwZV9jaGVja19jb21waWxlcic7XG5pbXBvcnQge1ZpZXdDb21waWxlciwgVmlld0NvbXBpbGVSZXN1bHR9IGZyb20gJy4uL3ZpZXdfY29tcGlsZXIvdmlld19jb21waWxlcic7XG5cbmltcG9ydCB7QW90Q29tcGlsZXJIb3N0fSBmcm9tICcuL2NvbXBpbGVyX2hvc3QnO1xuaW1wb3J0IHtBb3RDb21waWxlck9wdGlvbnN9IGZyb20gJy4vY29tcGlsZXJfb3B0aW9ucyc7XG5pbXBvcnQge0dlbmVyYXRlZEZpbGV9IGZyb20gJy4vZ2VuZXJhdGVkX2ZpbGUnO1xuaW1wb3J0IHtMYXp5Um91dGUsIGxpc3RMYXp5Um91dGVzLCBwYXJzZUxhenlSb3V0ZX0gZnJvbSAnLi9sYXp5X3JvdXRlcyc7XG5pbXBvcnQge1BhcnRpYWxNb2R1bGV9IGZyb20gJy4vcGFydGlhbF9tb2R1bGUnO1xuaW1wb3J0IHtTdGF0aWNSZWZsZWN0b3J9IGZyb20gJy4vc3RhdGljX3JlZmxlY3Rvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7U3RhdGljU3ltYm9sUmVzb2x2ZXJ9IGZyb20gJy4vc3RhdGljX3N5bWJvbF9yZXNvbHZlcic7XG5pbXBvcnQge2NyZWF0ZUZvckppdFN0dWIsIHNlcmlhbGl6ZVN1bW1hcmllc30gZnJvbSAnLi9zdW1tYXJ5X3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtuZ2ZhY3RvcnlGaWxlUGF0aCwgbm9ybWFsaXplR2VuRmlsZVN1ZmZpeCwgc3BsaXRUeXBlc2NyaXB0U3VmZml4LCBzdW1tYXJ5RmlsZU5hbWUsIHN1bW1hcnlGb3JKaXRGaWxlTmFtZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgZW51bSBTdHViRW1pdEZsYWdzIHtcbiAgQmFzaWMgPSAxIDw8IDAsXG4gIFR5cGVDaGVjayA9IDEgPDwgMSxcbiAgQWxsID0gVHlwZUNoZWNrIHwgQmFzaWNcbn1cblxuZXhwb3J0IGNsYXNzIEFvdENvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVBc3RDYWNoZSA9XG4gICAgICBuZXcgTWFwPFN0YXRpY1N5bWJvbCwge3RlbXBsYXRlOiBUZW1wbGF0ZUFzdFtdLCBwaXBlczogQ29tcGlsZVBpcGVTdW1tYXJ5W119PigpO1xuICBwcml2YXRlIF9hbmFseXplZEZpbGVzID0gbmV3IE1hcDxzdHJpbmcsIE5nQW5hbHl6ZWRGaWxlPigpO1xuICBwcml2YXRlIF9hbmFseXplZEZpbGVzRm9ySW5qZWN0YWJsZXMgPSBuZXcgTWFwPHN0cmluZywgTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXM+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jb25maWc6IENvbXBpbGVyQ29uZmlnLCBwcml2YXRlIF9vcHRpb25zOiBBb3RDb21waWxlck9wdGlvbnMsXG4gICAgICBwcml2YXRlIF9ob3N0OiBBb3RDb21waWxlckhvc3QsIHJlYWRvbmx5IHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yLFxuICAgICAgcHJpdmF0ZSBfbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIHByaXZhdGUgX3RlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlcixcbiAgICAgIHByaXZhdGUgX3N0eWxlQ29tcGlsZXI6IFN0eWxlQ29tcGlsZXIsIHByaXZhdGUgX3ZpZXdDb21waWxlcjogVmlld0NvbXBpbGVyLFxuICAgICAgcHJpdmF0ZSBfdHlwZUNoZWNrQ29tcGlsZXI6IFR5cGVDaGVja0NvbXBpbGVyLCBwcml2YXRlIF9uZ01vZHVsZUNvbXBpbGVyOiBOZ01vZHVsZUNvbXBpbGVyLFxuICAgICAgcHJpdmF0ZSBfaW5qZWN0YWJsZUNvbXBpbGVyOiBJbmplY3RhYmxlQ29tcGlsZXIsIHByaXZhdGUgX291dHB1dEVtaXR0ZXI6IE91dHB1dEVtaXR0ZXIsXG4gICAgICBwcml2YXRlIF9zdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LFxuICAgICAgcHJpdmF0ZSBfc3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyKSB7fVxuXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5jbGVhckNhY2hlKCk7XG4gIH1cblxuICBhbmFseXplTW9kdWxlc1N5bmMocm9vdEZpbGVzOiBzdHJpbmdbXSk6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgICBjb25zdCBhbmFseXplUmVzdWx0ID0gYW5hbHl6ZUFuZFZhbGlkYXRlTmdNb2R1bGVzKFxuICAgICAgICByb290RmlsZXMsIHRoaXMuX2hvc3QsIHRoaXMuX3N5bWJvbFJlc29sdmVyLCB0aGlzLl9tZXRhZGF0YVJlc29sdmVyKTtcbiAgICBhbmFseXplUmVzdWx0Lm5nTW9kdWxlcy5mb3JFYWNoKFxuICAgICAgICBuZ01vZHVsZSA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YShcbiAgICAgICAgICAgIG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlLCB0cnVlKSk7XG4gICAgcmV0dXJuIGFuYWx5emVSZXN1bHQ7XG4gIH1cblxuICBhbmFseXplTW9kdWxlc0FzeW5jKHJvb3RGaWxlczogc3RyaW5nW10pOiBQcm9taXNlPE5nQW5hbHl6ZWRNb2R1bGVzPiB7XG4gICAgY29uc3QgYW5hbHl6ZVJlc3VsdCA9IGFuYWx5emVBbmRWYWxpZGF0ZU5nTW9kdWxlcyhcbiAgICAgICAgcm9vdEZpbGVzLCB0aGlzLl9ob3N0LCB0aGlzLl9zeW1ib2xSZXNvbHZlciwgdGhpcy5fbWV0YWRhdGFSZXNvbHZlcik7XG4gICAgcmV0dXJuIFByb21pc2VcbiAgICAgICAgLmFsbChhbmFseXplUmVzdWx0Lm5nTW9kdWxlcy5tYXAoXG4gICAgICAgICAgICBuZ01vZHVsZSA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YShcbiAgICAgICAgICAgICAgICBuZ01vZHVsZS50eXBlLnJlZmVyZW5jZSwgZmFsc2UpKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gYW5hbHl6ZVJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIF9hbmFseXplRmlsZShmaWxlTmFtZTogc3RyaW5nKTogTmdBbmFseXplZEZpbGUge1xuICAgIGxldCBhbmFseXplZEZpbGUgPSB0aGlzLl9hbmFseXplZEZpbGVzLmdldChmaWxlTmFtZSk7XG4gICAgaWYgKCFhbmFseXplZEZpbGUpIHtcbiAgICAgIGFuYWx5emVkRmlsZSA9XG4gICAgICAgICAgYW5hbHl6ZUZpbGUodGhpcy5faG9zdCwgdGhpcy5fc3ltYm9sUmVzb2x2ZXIsIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIsIGZpbGVOYW1lKTtcbiAgICAgIHRoaXMuX2FuYWx5emVkRmlsZXMuc2V0KGZpbGVOYW1lLCBhbmFseXplZEZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYW5hbHl6ZWRGaWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5hbHl6ZUZpbGVGb3JJbmplY3RhYmxlcyhmaWxlTmFtZTogc3RyaW5nKTogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXMge1xuICAgIGxldCBhbmFseXplZEZpbGUgPSB0aGlzLl9hbmFseXplZEZpbGVzRm9ySW5qZWN0YWJsZXMuZ2V0KGZpbGVOYW1lKTtcbiAgICBpZiAoIWFuYWx5emVkRmlsZSkge1xuICAgICAgYW5hbHl6ZWRGaWxlID0gYW5hbHl6ZUZpbGVGb3JJbmplY3RhYmxlcyhcbiAgICAgICAgICB0aGlzLl9ob3N0LCB0aGlzLl9zeW1ib2xSZXNvbHZlciwgdGhpcy5fbWV0YWRhdGFSZXNvbHZlciwgZmlsZU5hbWUpO1xuICAgICAgdGhpcy5fYW5hbHl6ZWRGaWxlc0ZvckluamVjdGFibGVzLnNldChmaWxlTmFtZSwgYW5hbHl6ZWRGaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuYWx5emVkRmlsZTtcbiAgfVxuXG4gIGZpbmRHZW5lcmF0ZWRGaWxlTmFtZXMoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBnZW5GaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuX2FuYWx5emVGaWxlKGZpbGVOYW1lKTtcbiAgICAvLyBNYWtlIHN1cmUgd2UgY3JlYXRlIGEgLm5nZmFjdG9yeSBpZiB3ZSBoYXZlIGEgaW5qZWN0YWJsZS9kaXJlY3RpdmUvcGlwZS9OZ01vZHVsZVxuICAgIC8vIG9yIGEgcmVmZXJlbmNlIHRvIGEgbm9uIHNvdXJjZSBmaWxlLlxuICAgIC8vIE5vdGU6IFRoaXMgaXMgb3ZlcmVzdGltYXRpbmcgdGhlIHJlcXVpcmVkIC5uZ2ZhY3RvcnkgZmlsZXMgYXMgdGhlIHJlYWwgY2FsY3VsYXRpb24gaXMgaGFyZGVyLlxuICAgIC8vIE9ubHkgZG8gdGhpcyBmb3IgU3R1YkVtaXRGbGFncy5CYXNpYywgYXMgYWRkaW5nIGEgdHlwZSBjaGVjayBibG9ja1xuICAgIC8vIGRvZXMgbm90IGNoYW5nZSB0aGlzIGZpbGUgKGFzIHdlIGdlbmVyYXRlIHR5cGUgY2hlY2sgYmxvY2tzIGJhc2VkIG9uIE5nTW9kdWxlcykuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYWxsb3dFbXB0eUNvZGVnZW5GaWxlcyB8fCBmaWxlLmRpcmVjdGl2ZXMubGVuZ3RoIHx8IGZpbGUucGlwZXMubGVuZ3RoIHx8XG4gICAgICAgIGZpbGUuaW5qZWN0YWJsZXMubGVuZ3RoIHx8IGZpbGUubmdNb2R1bGVzLmxlbmd0aCB8fCBmaWxlLmV4cG9ydHNOb25Tb3VyY2VGaWxlcykge1xuICAgICAgZ2VuRmlsZU5hbWVzLnB1c2gobmdmYWN0b3J5RmlsZVBhdGgoZmlsZS5maWxlTmFtZSwgdHJ1ZSkpO1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlU3VtbWFyaWVzRm9ySml0KSB7XG4gICAgICAgIGdlbkZpbGVOYW1lcy5wdXNoKHN1bW1hcnlGb3JKaXRGaWxlTmFtZShmaWxlLmZpbGVOYW1lLCB0cnVlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGZpbGVTdWZmaXggPSBub3JtYWxpemVHZW5GaWxlU3VmZml4KHNwbGl0VHlwZXNjcmlwdFN1ZmZpeChmaWxlLmZpbGVOYW1lLCB0cnVlKVsxXSk7XG4gICAgZmlsZS5kaXJlY3RpdmVzLmZvckVhY2goKGRpclN5bWJvbCkgPT4ge1xuICAgICAgY29uc3QgY29tcE1ldGEgPVxuICAgICAgICAgIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0Tm9uTm9ybWFsaXplZERpcmVjdGl2ZU1ldGFkYXRhKGRpclN5bWJvbCkhLm1ldGFkYXRhO1xuICAgICAgaWYgKCFjb21wTWV0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBOb3RlOiBjb21wTWV0YSBpcyBhIGNvbXBvbmVudCBhbmQgdGhlcmVmb3JlIHRlbXBsYXRlIGlzIG5vbiBudWxsLlxuICAgICAgY29tcE1ldGEudGVtcGxhdGUgIS5zdHlsZVVybHMuZm9yRWFjaCgoc3R5bGVVcmwpID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9IHRoaXMuX2hvc3QucmVzb3VyY2VOYW1lVG9GaWxlTmFtZShzdHlsZVVybCwgZmlsZS5maWxlTmFtZSk7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFVybCkge1xuICAgICAgICAgIHRocm93IHN5bnRheEVycm9yKGBDb3VsZG4ndCByZXNvbHZlIHJlc291cmNlICR7c3R5bGVVcmx9IHJlbGF0aXZlIHRvICR7ZmlsZS5maWxlTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZWVkc1NoaW0gPSAoY29tcE1ldGEudGVtcGxhdGUgIS5lbmNhcHN1bGF0aW9uIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEVuY2Fwc3VsYXRpb24pID09PSBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZDtcbiAgICAgICAgZ2VuRmlsZU5hbWVzLnB1c2goX3N0eWxlc01vZHVsZVVybChub3JtYWxpemVkVXJsLCBuZWVkc1NoaW0sIGZpbGVTdWZmaXgpKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYWxsb3dFbXB0eUNvZGVnZW5GaWxlcykge1xuICAgICAgICAgIGdlbkZpbGVOYW1lcy5wdXNoKF9zdHlsZXNNb2R1bGVVcmwobm9ybWFsaXplZFVybCwgIW5lZWRzU2hpbSwgZmlsZVN1ZmZpeCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuRmlsZU5hbWVzO1xuICB9XG5cbiAgZW1pdEJhc2ljU3R1YihnZW5GaWxlTmFtZTogc3RyaW5nLCBvcmlnaW5hbEZpbGVOYW1lPzogc3RyaW5nKTogR2VuZXJhdGVkRmlsZSB7XG4gICAgY29uc3Qgb3V0cHV0Q3R4ID0gdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChnZW5GaWxlTmFtZSk7XG4gICAgaWYgKGdlbkZpbGVOYW1lLmVuZHNXaXRoKCcubmdmYWN0b3J5LnRzJykpIHtcbiAgICAgIGlmICghb3JpZ2luYWxGaWxlTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgQXNzZXJ0aW9uIGVycm9yOiByZXF1aXJlIHRoZSBvcmlnaW5hbCBmaWxlIGZvciAubmdmYWN0b3J5LnRzIHN0dWJzLiBGaWxlOiAke1xuICAgICAgICAgICAgICAgIGdlbkZpbGVOYW1lfWApO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luYWxGaWxlID0gdGhpcy5fYW5hbHl6ZUZpbGUob3JpZ2luYWxGaWxlTmFtZSk7XG4gICAgICB0aGlzLl9jcmVhdGVOZ0ZhY3RvcnlTdHViKG91dHB1dEN0eCwgb3JpZ2luYWxGaWxlLCBTdHViRW1pdEZsYWdzLkJhc2ljKTtcbiAgICB9IGVsc2UgaWYgKGdlbkZpbGVOYW1lLmVuZHNXaXRoKCcubmdzdW1tYXJ5LnRzJykpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmVuYWJsZVN1bW1hcmllc0ZvckppdCkge1xuICAgICAgICBpZiAoIW9yaWdpbmFsRmlsZU5hbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBBc3NlcnRpb24gZXJyb3I6IHJlcXVpcmUgdGhlIG9yaWdpbmFsIGZpbGUgZm9yIC5uZ3N1bW1hcnkudHMgc3R1YnMuIEZpbGU6ICR7XG4gICAgICAgICAgICAgICAgICBnZW5GaWxlTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcmlnaW5hbEZpbGUgPSB0aGlzLl9hbmFseXplRmlsZShvcmlnaW5hbEZpbGVOYW1lKTtcbiAgICAgICAgX2NyZWF0ZUVtcHR5U3R1YihvdXRwdXRDdHgpO1xuICAgICAgICBvcmlnaW5hbEZpbGUubmdNb2R1bGVzLmZvckVhY2gobmdNb2R1bGUgPT4ge1xuICAgICAgICAgIC8vIGNyZWF0ZSBleHBvcnRzIHRoYXQgdXNlciBjb2RlIGNhbiByZWZlcmVuY2VcbiAgICAgICAgICBjcmVhdGVGb3JKaXRTdHViKG91dHB1dEN0eCwgbmdNb2R1bGUudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdlbkZpbGVOYW1lLmVuZHNXaXRoKCcubmdzdHlsZS50cycpKSB7XG4gICAgICBfY3JlYXRlRW1wdHlTdHViKG91dHB1dEN0eCk7XG4gICAgfVxuICAgIC8vIE5vdGU6IGZvciB0aGUgc3R1YnMsIHdlIGRvbid0IG5lZWQgYSBwcm9wZXJ0eSBzcmNGaWxlVXJsLFxuICAgIC8vIGFzIGxhdGVyIG9uIGluIGVtaXRBbGxJbXBscyB3ZSB3aWxsIGNyZWF0ZSB0aGUgcHJvcGVyIEdlbmVyYXRlZEZpbGVzIHdpdGggdGhlXG4gICAgLy8gY29ycmVjdCBzcmNGaWxlVXJsLlxuICAgIC8vIFRoaXMgaXMgZ29vZCBhcyBlLmcuIGZvciAubmdzdHlsZS50cyBmaWxlcyB3ZSBjYW4ndCBkZXJpdmVcbiAgICAvLyB0aGUgdXJsIG9mIGNvbXBvbmVudHMgYmFzZWQgb24gdGhlIGdlbkZpbGVVcmwuXG4gICAgcmV0dXJuIHRoaXMuX2NvZGVnZW5Tb3VyY2VNb2R1bGUoJ3Vua25vd24nLCBvdXRwdXRDdHgpO1xuICB9XG5cbiAgZW1pdFR5cGVDaGVja1N0dWIoZ2VuRmlsZU5hbWU6IHN0cmluZywgb3JpZ2luYWxGaWxlTmFtZTogc3RyaW5nKTogR2VuZXJhdGVkRmlsZXxudWxsIHtcbiAgICBjb25zdCBvcmlnaW5hbEZpbGUgPSB0aGlzLl9hbmFseXplRmlsZShvcmlnaW5hbEZpbGVOYW1lKTtcbiAgICBjb25zdCBvdXRwdXRDdHggPSB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KGdlbkZpbGVOYW1lKTtcbiAgICBpZiAoZ2VuRmlsZU5hbWUuZW5kc1dpdGgoJy5uZ2ZhY3RvcnkudHMnKSkge1xuICAgICAgdGhpcy5fY3JlYXRlTmdGYWN0b3J5U3R1YihvdXRwdXRDdHgsIG9yaWdpbmFsRmlsZSwgU3R1YkVtaXRGbGFncy5UeXBlQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0Q3R4LnN0YXRlbWVudHMubGVuZ3RoID4gMCA/XG4gICAgICAgIHRoaXMuX2NvZGVnZW5Tb3VyY2VNb2R1bGUob3JpZ2luYWxGaWxlLmZpbGVOYW1lLCBvdXRwdXRDdHgpIDpcbiAgICAgICAgbnVsbDtcbiAgfVxuXG4gIGxvYWRGaWxlc0FzeW5jKGZpbGVOYW1lczogc3RyaW5nW10sIHRzRmlsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxcbiAgICAgIHthbmFseXplZE1vZHVsZXM6IE5nQW5hbHl6ZWRNb2R1bGVzLCBhbmFseXplZEluamVjdGFibGVzOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlc1tdfT4ge1xuICAgIGNvbnN0IGZpbGVzID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB0aGlzLl9hbmFseXplRmlsZShmaWxlTmFtZSkpO1xuICAgIGNvbnN0IGxvYWRpbmdQcm9taXNlczogUHJvbWlzZTxOZ0FuYWx5emVkTW9kdWxlcz5bXSA9IFtdO1xuICAgIGZpbGVzLmZvckVhY2goXG4gICAgICAgIGZpbGUgPT4gZmlsZS5uZ01vZHVsZXMuZm9yRWFjaChcbiAgICAgICAgICAgIG5nTW9kdWxlID0+XG4gICAgICAgICAgICAgICAgbG9hZGluZ1Byb21pc2VzLnB1c2godGhpcy5fbWV0YWRhdGFSZXNvbHZlci5sb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGEoXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlLCBmYWxzZSkpKSk7XG4gICAgY29uc3QgYW5hbHl6ZWRJbmplY3RhYmxlcyA9IHRzRmlsZXMubWFwKHRzRmlsZSA9PiB0aGlzLl9hbmFseXplRmlsZUZvckluamVjdGFibGVzKHRzRmlsZSkpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChsb2FkaW5nUHJvbWlzZXMpLnRoZW4oXyA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXplZE1vZHVsZXM6IG1lcmdlQW5kVmFsaWRhdGVOZ0ZpbGVzKGZpbGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHl6ZWRJbmplY3RhYmxlczogYW5hbHl6ZWRJbmplY3RhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgfVxuXG4gIGxvYWRGaWxlc1N5bmMoZmlsZU5hbWVzOiBzdHJpbmdbXSwgdHNGaWxlczogc3RyaW5nW10pOlxuICAgICAge2FuYWx5emVkTW9kdWxlczogTmdBbmFseXplZE1vZHVsZXMsIGFuYWx5emVkSW5qZWN0YWJsZXM6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzW119IHtcbiAgICBjb25zdCBmaWxlcyA9IGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gdGhpcy5fYW5hbHl6ZUZpbGUoZmlsZU5hbWUpKTtcbiAgICBmaWxlcy5mb3JFYWNoKFxuICAgICAgICBmaWxlID0+IGZpbGUubmdNb2R1bGVzLmZvckVhY2goXG4gICAgICAgICAgICBuZ01vZHVsZSA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YShcbiAgICAgICAgICAgICAgICBuZ01vZHVsZS50eXBlLnJlZmVyZW5jZSwgdHJ1ZSkpKTtcbiAgICBjb25zdCBhbmFseXplZEluamVjdGFibGVzID0gdHNGaWxlcy5tYXAodHNGaWxlID0+IHRoaXMuX2FuYWx5emVGaWxlRm9ySW5qZWN0YWJsZXModHNGaWxlKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuYWx5emVkTW9kdWxlczogbWVyZ2VBbmRWYWxpZGF0ZU5nRmlsZXMoZmlsZXMpLFxuICAgICAgYW5hbHl6ZWRJbmplY3RhYmxlczogYW5hbHl6ZWRJbmplY3RhYmxlcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTmdGYWN0b3J5U3R1YihcbiAgICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgZmlsZTogTmdBbmFseXplZEZpbGUsIGVtaXRGbGFnczogU3R1YkVtaXRGbGFncykge1xuICAgIGxldCBjb21wb25lbnRJZCA9IDA7XG4gICAgZmlsZS5uZ01vZHVsZXMuZm9yRWFjaCgobmdNb2R1bGVNZXRhLCBuZ01vZHVsZUluZGV4KSA9PiB7XG4gICAgICAvLyBOb3RlOiB0aGUgY29kZSBiZWxvdyBuZWVkcyB0byBleGVjdXRlZCBmb3IgU3R1YkVtaXRGbGFncy5CYXNpYyBhbmQgU3R1YkVtaXRGbGFncy5UeXBlQ2hlY2ssXG4gICAgICAvLyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIC5uZ2ZhY3RvcnkgZmlsZSB0b28gbXVjaCB3aGVuIGFkZGluZyB0aGUgdHlwZS1jaGVjayBibG9jay5cblxuICAgICAgLy8gY3JlYXRlIGV4cG9ydHMgdGhhdCB1c2VyIGNvZGUgY2FuIHJlZmVyZW5jZVxuICAgICAgdGhpcy5fbmdNb2R1bGVDb21waWxlci5jcmVhdGVTdHViKG91dHB1dEN0eCwgbmdNb2R1bGVNZXRhLnR5cGUucmVmZXJlbmNlKTtcblxuICAgICAgLy8gYWRkIHJlZmVyZW5jZXMgdG8gdGhlIHN5bWJvbHMgZnJvbSB0aGUgbWV0YWRhdGEuXG4gICAgICAvLyBUaGVzZSBjYW4gYmUgdXNlZCBieSB0aGUgdHlwZSBjaGVjayBibG9jayBmb3IgY29tcG9uZW50cyxcbiAgICAgIC8vIGFuZCB0aGV5IGFsc28gY2F1c2UgVHlwZVNjcmlwdCB0byBpbmNsdWRlIHRoZXNlIGZpbGVzIGludG8gdGhlIHByb2dyYW0gdG9vLFxuICAgICAgLy8gd2hpY2ggd2lsbCBtYWtlIHRoZW0gcGFydCBvZiB0aGUgYW5hbHl6ZWRGaWxlcy5cbiAgICAgIGNvbnN0IGV4dGVybmFsUmVmZXJlbmNlczogU3RhdGljU3ltYm9sW10gPSBbXG4gICAgICAgIC8vIEFkZCByZWZlcmVuY2VzIHRoYXQgYXJlIGF2YWlsYWJsZSBmcm9tIGFsbCB0aGUgbW9kdWxlcyBhbmQgaW1wb3J0cy5cbiAgICAgICAgLi4ubmdNb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUuZGlyZWN0aXZlcy5tYXAoZCA9PiBkLnJlZmVyZW5jZSksXG4gICAgICAgIC4uLm5nTW9kdWxlTWV0YS50cmFuc2l0aXZlTW9kdWxlLnBpcGVzLm1hcChkID0+IGQucmVmZXJlbmNlKSxcbiAgICAgICAgLi4ubmdNb2R1bGVNZXRhLmltcG9ydGVkTW9kdWxlcy5tYXAobSA9PiBtLnR5cGUucmVmZXJlbmNlKSxcbiAgICAgICAgLi4ubmdNb2R1bGVNZXRhLmV4cG9ydGVkTW9kdWxlcy5tYXAobSA9PiBtLnR5cGUucmVmZXJlbmNlKSxcblxuICAgICAgICAvLyBBZGQgcmVmZXJlbmNlcyB0aGF0IG1pZ2h0IGJlIGluc2VydGVkIGJ5IHRoZSB0ZW1wbGF0ZSBjb21waWxlci5cbiAgICAgICAgLi4udGhpcy5fZXh0ZXJuYWxJZGVudGlmaWVyUmVmZXJlbmNlcyhbSWRlbnRpZmllcnMuVGVtcGxhdGVSZWYsIElkZW50aWZpZXJzLkVsZW1lbnRSZWZdKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IGV4dGVybmFsUmVmZXJlbmNlVmFycyA9IG5ldyBNYXA8YW55LCBzdHJpbmc+KCk7XG4gICAgICBleHRlcm5hbFJlZmVyZW5jZXMuZm9yRWFjaCgocmVmLCB0eXBlSW5kZXgpID0+IHtcbiAgICAgICAgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzLnNldChyZWYsIGBfZGVjbCR7bmdNb2R1bGVJbmRleH1fJHt0eXBlSW5kZXh9YCk7XG4gICAgICB9KTtcbiAgICAgIGV4dGVybmFsUmVmZXJlbmNlVmFycy5mb3JFYWNoKCh2YXJOYW1lLCByZWZlcmVuY2UpID0+IHtcbiAgICAgICAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChcbiAgICAgICAgICAgIG8udmFyaWFibGUodmFyTmFtZSlcbiAgICAgICAgICAgICAgICAuc2V0KG8uTlVMTF9FWFBSLmNhc3Qoby5EWU5BTUlDX1RZUEUpKVxuICAgICAgICAgICAgICAgIC50b0RlY2xTdG10KG8uZXhwcmVzc2lvblR5cGUob3V0cHV0Q3R4LmltcG9ydEV4cHIoXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSwgLyogdHlwZVBhcmFtcyAqLyBudWxsLCAvKiB1c2VTdW1tYXJpZXMgKi8gZmFsc2UpKSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbWl0RmxhZ3MgJiBTdHViRW1pdEZsYWdzLlR5cGVDaGVjaykge1xuICAgICAgICAvLyBhZGQgdGhlIHR5cGUtY2hlY2sgYmxvY2sgZm9yIGFsbCBjb21wb25lbnRzIG9mIHRoZSBOZ01vZHVsZVxuICAgICAgICBuZ01vZHVsZU1ldGEuZGVjbGFyZWREaXJlY3RpdmVzLmZvckVhY2goKGRpcklkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tcE1ldGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKGRpcklkLnJlZmVyZW5jZSk7XG4gICAgICAgICAgaWYgKCFjb21wTWV0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wb25lbnRJZCsrO1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVR5cGVDaGVja0Jsb2NrKFxuICAgICAgICAgICAgICBvdXRwdXRDdHgsIGAke2NvbXBNZXRhLnR5cGUucmVmZXJlbmNlLm5hbWV9X0hvc3RfJHtjb21wb25lbnRJZH1gLCBuZ01vZHVsZU1ldGEsXG4gICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0SG9zdENvbXBvbmVudE1ldGFkYXRhKGNvbXBNZXRhKSwgW2NvbXBNZXRhLnR5cGVdLFxuICAgICAgICAgICAgICBleHRlcm5hbFJlZmVyZW5jZVZhcnMpO1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVR5cGVDaGVja0Jsb2NrKFxuICAgICAgICAgICAgICBvdXRwdXRDdHgsIGAke2NvbXBNZXRhLnR5cGUucmVmZXJlbmNlLm5hbWV9XyR7Y29tcG9uZW50SWR9YCwgbmdNb2R1bGVNZXRhLCBjb21wTWV0YSxcbiAgICAgICAgICAgICAgbmdNb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUuZGlyZWN0aXZlcywgZXh0ZXJuYWxSZWZlcmVuY2VWYXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAob3V0cHV0Q3R4LnN0YXRlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBfY3JlYXRlRW1wdHlTdHViKG91dHB1dEN0eCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXh0ZXJuYWxJZGVudGlmaWVyUmVmZXJlbmNlcyhyZWZlcmVuY2VzOiBvLkV4dGVybmFsUmVmZXJlbmNlW10pOiBTdGF0aWNTeW1ib2xbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICAgIGZvciAobGV0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy5yZWZsZWN0b3IsIHJlZmVyZW5jZSk7XG4gICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICByZXN1bHQucHVzaCh0b2tlbi5pZGVudGlmaWVyLnJlZmVyZW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVUeXBlQ2hlY2tCbG9jayhcbiAgICAgIGN0eDogT3V0cHV0Q29udGV4dCwgY29tcG9uZW50SWQ6IHN0cmluZywgbW9kdWxlTWV0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsXG4gICAgICBjb21wTWV0YTogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBkaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10sXG4gICAgICBleHRlcm5hbFJlZmVyZW5jZVZhcnM6IE1hcDxhbnksIHN0cmluZz4pIHtcbiAgICBjb25zdCB7dGVtcGxhdGU6IHBhcnNlZFRlbXBsYXRlLCBwaXBlczogdXNlZFBpcGVzfSA9XG4gICAgICAgIHRoaXMuX3BhcnNlVGVtcGxhdGUoY29tcE1ldGEsIG1vZHVsZU1ldGEsIGRpcmVjdGl2ZXMpO1xuICAgIGN0eC5zdGF0ZW1lbnRzLnB1c2goLi4udGhpcy5fdHlwZUNoZWNrQ29tcGlsZXIuY29tcGlsZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50SWQsIGNvbXBNZXRhLCBwYXJzZWRUZW1wbGF0ZSwgdXNlZFBpcGVzLCBleHRlcm5hbFJlZmVyZW5jZVZhcnMsIGN0eCkpO1xuICB9XG5cbiAgZW1pdE1lc3NhZ2VCdW5kbGUoYW5hbHl6ZVJlc3VsdDogTmdBbmFseXplZE1vZHVsZXMsIGxvY2FsZTogc3RyaW5nfG51bGwpOiBNZXNzYWdlQnVuZGxlIHtcbiAgICBjb25zdCBlcnJvcnM6IFBhcnNlRXJyb3JbXSA9IFtdO1xuICAgIGNvbnN0IGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpO1xuXG4gICAgLy8gVE9ETyh2aWNiKTogaW1wbGljaXQgdGFncyAmIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBtZXNzYWdlQnVuZGxlID0gbmV3IE1lc3NhZ2VCdW5kbGUoaHRtbFBhcnNlciwgW10sIHt9LCBsb2NhbGUpO1xuXG4gICAgYW5hbHl6ZVJlc3VsdC5maWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc3QgY29tcE1ldGFzOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGFbXSA9IFtdO1xuICAgICAgZmlsZS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlVHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IGRpck1ldGEgPSB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgICBpZiAoZGlyTWV0YSAmJiBkaXJNZXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29tcE1ldGFzLnB1c2goZGlyTWV0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29tcE1ldGFzLmZvckVhY2goY29tcE1ldGEgPT4ge1xuICAgICAgICBjb25zdCBodG1sID0gY29tcE1ldGEudGVtcGxhdGUgIS50ZW1wbGF0ZSAhO1xuICAgICAgICAvLyBUZW1wbGF0ZSBVUkwgcG9pbnRzIHRvIGVpdGhlciBhbiBIVE1MIG9yIFRTIGZpbGUgZGVwZW5kaW5nIG9uIHdoZXRoZXJcbiAgICAgICAgLy8gdGhlIGZpbGUgaXMgdXNlZCB3aXRoIGB0ZW1wbGF0ZVVybDpgIG9yIGB0ZW1wbGF0ZTpgLCByZXNwZWN0aXZlbHkuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlVXJsID0gY29tcE1ldGEudGVtcGxhdGUgIS50ZW1wbGF0ZVVybCE7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRpb25Db25maWcgPVxuICAgICAgICAgICAgSW50ZXJwb2xhdGlvbkNvbmZpZy5mcm9tQXJyYXkoY29tcE1ldGEudGVtcGxhdGUgIS5pbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgZXJyb3JzLnB1c2goLi4ubWVzc2FnZUJ1bmRsZS51cGRhdGVGcm9tVGVtcGxhdGUoaHRtbCwgdGVtcGxhdGVVcmwsIGludGVycG9sYXRpb25Db25maWcpISk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLm1hcChlID0+IGUudG9TdHJpbmcoKSkuam9pbignXFxuJykpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlQnVuZGxlO1xuICB9XG5cbiAgZW1pdEFsbFBhcnRpYWxNb2R1bGVzKFxuICAgICAge25nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUsIGZpbGVzfTogTmdBbmFseXplZE1vZHVsZXMsXG4gICAgICByM0ZpbGVzOiBOZ0FuYWx5emVkRmlsZVdpdGhJbmplY3RhYmxlc1tdKTogUGFydGlhbE1vZHVsZVtdIHtcbiAgICBjb25zdCBjb250ZXh0TWFwID0gbmV3IE1hcDxzdHJpbmcsIE91dHB1dENvbnRleHQ+KCk7XG5cbiAgICBjb25zdCBnZXRDb250ZXh0ID0gKGZpbGVOYW1lOiBzdHJpbmcpOiBPdXRwdXRDb250ZXh0ID0+IHtcbiAgICAgIGlmICghY29udGV4dE1hcC5oYXMoZmlsZU5hbWUpKSB7XG4gICAgICAgIGNvbnRleHRNYXAuc2V0KGZpbGVOYW1lLCB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KGZpbGVOYW1lKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGV4dE1hcC5nZXQoZmlsZU5hbWUpITtcbiAgICB9O1xuXG4gICAgZmlsZXMuZm9yRWFjaChcbiAgICAgICAgZmlsZSA9PiB0aGlzLl9jb21waWxlUGFydGlhbE1vZHVsZShcbiAgICAgICAgICAgIGZpbGUuZmlsZU5hbWUsIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUsIGZpbGUuZGlyZWN0aXZlcywgZmlsZS5waXBlcywgZmlsZS5uZ01vZHVsZXMsXG4gICAgICAgICAgICBmaWxlLmluamVjdGFibGVzLCBnZXRDb250ZXh0KGZpbGUuZmlsZU5hbWUpKSk7XG4gICAgcjNGaWxlcy5mb3JFYWNoKFxuICAgICAgICBmaWxlID0+IHRoaXMuX2NvbXBpbGVTaGFsbG93TW9kdWxlcyhcbiAgICAgICAgICAgIGZpbGUuZmlsZU5hbWUsIGZpbGUuc2hhbGxvd01vZHVsZXMsIGdldENvbnRleHQoZmlsZS5maWxlTmFtZSkpKTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvbnRleHRNYXAudmFsdWVzKCkpXG4gICAgICAgIC5tYXAoY29udGV4dCA9PiAoe1xuICAgICAgICAgICAgICAgZmlsZU5hbWU6IGNvbnRleHQuZ2VuRmlsZVBhdGgsXG4gICAgICAgICAgICAgICBzdGF0ZW1lbnRzOiBbLi4uY29udGV4dC5jb25zdGFudFBvb2wuc3RhdGVtZW50cywgLi4uY29udGV4dC5zdGF0ZW1lbnRzXSxcbiAgICAgICAgICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlU2hhbGxvd01vZHVsZXMoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBzaGFsbG93TW9kdWxlczogQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YVtdLFxuICAgICAgY29udGV4dDogT3V0cHV0Q29udGV4dCk6IHZvaWQge1xuICAgIHNoYWxsb3dNb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IGNvbXBpbGVSM01vZHVsZShjb250ZXh0LCBtb2R1bGUsIHRoaXMuX2luamVjdGFibGVDb21waWxlcikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZVBhcnRpYWxNb2R1bGUoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlOiBNYXA8U3RhdGljU3ltYm9sLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YT4sXG4gICAgICBkaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXSwgcGlwZXM6IFN0YXRpY1N5bWJvbFtdLCBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW10sXG4gICAgICBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdLCBjb250ZXh0OiBPdXRwdXRDb250ZXh0KTogdm9pZCB7XG4gICAgY29uc3QgZXJyb3JzOiBQYXJzZUVycm9yW10gPSBbXTtcblxuICAgIGNvbnN0IHNjaGVtYVJlZ2lzdHJ5ID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuICAgIGNvbnN0IGhvc3RCaW5kaW5nUGFyc2VyID0gbmV3IEJpbmRpbmdQYXJzZXIoXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlUGFyc2VyLmV4cHJlc3Npb25QYXJzZXIsIERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIHNjaGVtYVJlZ2lzdHJ5LCBbXSxcbiAgICAgICAgZXJyb3JzKTtcblxuICAgIC8vIFByb2Nlc3MgYWxsIGNvbXBvbmVudHMgYW5kIGRpcmVjdGl2ZXNcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlVHlwZSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RpdmVNZXRhZGF0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZGlyZWN0aXZlVHlwZSk7XG4gICAgICBpZiAoZGlyZWN0aXZlTWV0YWRhdGEuaXNDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZS5nZXQoZGlyZWN0aXZlVHlwZSkhO1xuICAgICAgICBtb2R1bGUgfHxcbiAgICAgICAgICAgIGVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2R1bGUgZm9yIGNvbXBvbmVudCAnJHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyTmFtZShkaXJlY3RpdmVNZXRhZGF0YS50eXBlKX0nYCk7XG5cbiAgICAgICAgbGV0IGh0bWxBc3QgPSBkaXJlY3RpdmVNZXRhZGF0YS50ZW1wbGF0ZSAhLmh0bWxBc3QhO1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZVdoaXRlc3BhY2VzID0gZGlyZWN0aXZlTWV0YWRhdGEhLnRlbXBsYXRlICEucHJlc2VydmVXaGl0ZXNwYWNlcztcblxuICAgICAgICBpZiAoIXByZXNlcnZlV2hpdGVzcGFjZXMpIHtcbiAgICAgICAgICBodG1sQXN0ID0gcmVtb3ZlV2hpdGVzcGFjZXMoaHRtbEFzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVuZGVyM0FzdCA9IGh0bWxBc3RUb1JlbmRlcjNBc3QoaHRtbEFzdC5yb290Tm9kZXMsIGhvc3RCaW5kaW5nUGFyc2VyKTtcblxuICAgICAgICAvLyBNYXAgb2YgU3RhdGljVHlwZSBieSBkaXJlY3RpdmUgc2VsZWN0b3JzXG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZVR5cGVCeVNlbCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IG1vZHVsZS50cmFuc2l0aXZlTW9kdWxlLmRpcmVjdGl2ZXMubWFwKFxuICAgICAgICAgICAgZGlyID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlU3VtbWFyeShkaXIucmVmZXJlbmNlKSk7XG5cbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgaWYgKGRpcmVjdGl2ZS5zZWxlY3Rvcikge1xuICAgICAgICAgICAgZGlyZWN0aXZlVHlwZUJ5U2VsLnNldChkaXJlY3RpdmUuc2VsZWN0b3IsIGRpcmVjdGl2ZS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXAgb2YgU3RhdGljVHlwZSBieSBwaXBlIG5hbWVzXG4gICAgICAgIGNvbnN0IHBpcGVUeXBlQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcblxuICAgICAgICBjb25zdCBwaXBlcyA9IG1vZHVsZS50cmFuc2l0aXZlTW9kdWxlLnBpcGVzLm1hcChcbiAgICAgICAgICAgIHBpcGUgPT4gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQaXBlU3VtbWFyeShwaXBlLnJlZmVyZW5jZSkpO1xuXG4gICAgICAgIHBpcGVzLmZvckVhY2gocGlwZSA9PiB7XG4gICAgICAgICAgcGlwZVR5cGVCeU5hbWUuc2V0KHBpcGUubmFtZSwgcGlwZS50eXBlLnJlZmVyZW5jZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBpbGVSM0NvbXBvbmVudChcbiAgICAgICAgICAgIGNvbnRleHQsIGRpcmVjdGl2ZU1ldGFkYXRhLCByZW5kZXIzQXN0LCB0aGlzLnJlZmxlY3RvciwgaG9zdEJpbmRpbmdQYXJzZXIsXG4gICAgICAgICAgICBkaXJlY3RpdmVUeXBlQnlTZWwsIHBpcGVUeXBlQnlOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBpbGVSM0RpcmVjdGl2ZShjb250ZXh0LCBkaXJlY3RpdmVNZXRhZGF0YSwgdGhpcy5yZWZsZWN0b3IsIGhvc3RCaW5kaW5nUGFyc2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBpcGVzLmZvckVhY2gocGlwZVR5cGUgPT4ge1xuICAgICAgY29uc3QgcGlwZU1ldGFkYXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQaXBlTWV0YWRhdGEocGlwZVR5cGUpO1xuICAgICAgaWYgKHBpcGVNZXRhZGF0YSkge1xuICAgICAgICBjb21waWxlUjNQaXBlKGNvbnRleHQsIHBpcGVNZXRhZGF0YSwgdGhpcy5yZWZsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5qZWN0YWJsZXMuZm9yRWFjaChpbmplY3RhYmxlID0+IHRoaXMuX2luamVjdGFibGVDb21waWxlci5jb21waWxlKGluamVjdGFibGUsIGNvbnRleHQpKTtcbiAgfVxuXG4gIGVtaXRBbGxQYXJ0aWFsTW9kdWxlczIoZmlsZXM6IE5nQW5hbHl6ZWRGaWxlV2l0aEluamVjdGFibGVzW10pOiBQYXJ0aWFsTW9kdWxlW10ge1xuICAgIC8vIFVzaW5nIHJlZHVjZSBsaWtlIHRoaXMgaXMgYSBzZWxlY3QgbWFueSBwYXR0ZXJuICh3aGVyZSBtYXAgaXMgYSBzZWxlY3QgcGF0dGVybilcbiAgICByZXR1cm4gZmlsZXMucmVkdWNlPFBhcnRpYWxNb2R1bGVbXT4oKHIsIGZpbGUpID0+IHtcbiAgICAgIHIucHVzaCguLi50aGlzLl9lbWl0UGFydGlhbE1vZHVsZTIoZmlsZS5maWxlTmFtZSwgZmlsZS5pbmplY3RhYmxlcykpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdFBhcnRpYWxNb2R1bGUyKGZpbGVOYW1lOiBzdHJpbmcsIGluamVjdGFibGVzOiBDb21waWxlSW5qZWN0YWJsZU1ldGFkYXRhW10pOlxuICAgICAgUGFydGlhbE1vZHVsZVtdIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChmaWxlTmFtZSk7XG5cbiAgICBpbmplY3RhYmxlcy5mb3JFYWNoKGluamVjdGFibGUgPT4gdGhpcy5faW5qZWN0YWJsZUNvbXBpbGVyLmNvbXBpbGUoaW5qZWN0YWJsZSwgY29udGV4dCkpO1xuXG4gICAgaWYgKGNvbnRleHQuc3RhdGVtZW50cyAmJiBjb250ZXh0LnN0YXRlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIFt7ZmlsZU5hbWUsIHN0YXRlbWVudHM6IFsuLi5jb250ZXh0LmNvbnN0YW50UG9vbC5zdGF0ZW1lbnRzLCAuLi5jb250ZXh0LnN0YXRlbWVudHNdfV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGVtaXRBbGxJbXBscyhhbmFseXplUmVzdWx0OiBOZ0FuYWx5emVkTW9kdWxlcyk6IEdlbmVyYXRlZEZpbGVbXSB7XG4gICAgY29uc3Qge25nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUsIGZpbGVzfSA9IGFuYWx5emVSZXN1bHQ7XG4gICAgY29uc3Qgc291cmNlTW9kdWxlcyA9IGZpbGVzLm1hcChcbiAgICAgICAgZmlsZSA9PiB0aGlzLl9jb21waWxlSW1wbEZpbGUoXG4gICAgICAgICAgICBmaWxlLmZpbGVOYW1lLCBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLCBmaWxlLmRpcmVjdGl2ZXMsIGZpbGUucGlwZXMsIGZpbGUubmdNb2R1bGVzLFxuICAgICAgICAgICAgZmlsZS5pbmplY3RhYmxlcykpO1xuICAgIHJldHVybiBmbGF0dGVuKHNvdXJjZU1vZHVsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGlsZUltcGxGaWxlKFxuICAgICAgc3JjRmlsZVVybDogc3RyaW5nLCBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlOiBNYXA8U3RhdGljU3ltYm9sLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YT4sXG4gICAgICBkaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXSwgcGlwZXM6IFN0YXRpY1N5bWJvbFtdLCBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW10sXG4gICAgICBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdKTogR2VuZXJhdGVkRmlsZVtdIHtcbiAgICBjb25zdCBmaWxlU3VmZml4ID0gbm9ybWFsaXplR2VuRmlsZVN1ZmZpeChzcGxpdFR5cGVzY3JpcHRTdWZmaXgoc3JjRmlsZVVybCwgdHJ1ZSlbMV0pO1xuICAgIGNvbnN0IGdlbmVyYXRlZEZpbGVzOiBHZW5lcmF0ZWRGaWxlW10gPSBbXTtcblxuICAgIGNvbnN0IG91dHB1dEN0eCA9IHRoaXMuX2NyZWF0ZU91dHB1dENvbnRleHQobmdmYWN0b3J5RmlsZVBhdGgoc3JjRmlsZVVybCwgdHJ1ZSkpO1xuXG4gICAgZ2VuZXJhdGVkRmlsZXMucHVzaChcbiAgICAgICAgLi4udGhpcy5fY3JlYXRlU3VtbWFyeShzcmNGaWxlVXJsLCBkaXJlY3RpdmVzLCBwaXBlcywgbmdNb2R1bGVzLCBpbmplY3RhYmxlcywgb3V0cHV0Q3R4KSk7XG5cbiAgICAvLyBjb21waWxlIGFsbCBuZyBtb2R1bGVzXG4gICAgbmdNb2R1bGVzLmZvckVhY2goKG5nTW9kdWxlTWV0YSkgPT4gdGhpcy5fY29tcGlsZU1vZHVsZShvdXRwdXRDdHgsIG5nTW9kdWxlTWV0YSkpO1xuXG4gICAgLy8gY29tcGlsZSBjb21wb25lbnRzXG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBjb21wTWV0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoPGFueT5kaXJUeXBlKTtcbiAgICAgIGlmICghY29tcE1ldGEuaXNDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmdNb2R1bGUgPSBuZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmdldChkaXJUeXBlKTtcbiAgICAgIGlmICghbmdNb2R1bGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBFcnJvcjogY2Fubm90IGRldGVybWluZSB0aGUgbW9kdWxlIGZvciBjb21wb25lbnQgJHtcbiAgICAgICAgICAgIGlkZW50aWZpZXJOYW1lKGNvbXBNZXRhLnR5cGUpfSFgKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29tcGlsZSBzdHlsZXNcbiAgICAgIGNvbnN0IGNvbXBvbmVudFN0eWxlc2hlZXQgPSB0aGlzLl9zdHlsZUNvbXBpbGVyLmNvbXBpbGVDb21wb25lbnQob3V0cHV0Q3R4LCBjb21wTWV0YSk7XG4gICAgICAvLyBOb3RlOiBjb21wTWV0YSBpcyBhIGNvbXBvbmVudCBhbmQgdGhlcmVmb3JlIHRlbXBsYXRlIGlzIG5vbiBudWxsLlxuICAgICAgY29tcE1ldGEudGVtcGxhdGUgIS5leHRlcm5hbFN0eWxlc2hlZXRzLmZvckVhY2goKHN0eWxlc2hlZXRNZXRhKSA9PiB7XG4gICAgICAgIC8vIE5vdGU6IGZpbGwgbm9uIHNoaW0gYW5kIHNoaW0gc3R5bGUgZmlsZXMgYXMgdGhleSBtaWdodFxuICAgICAgICAvLyBiZSBzaGFyZWQgYnkgY29tcG9uZW50IHdpdGggYW5kIHdpdGhvdXQgVmlld0VuY2Fwc3VsYXRpb24uXG4gICAgICAgIGNvbnN0IHNoaW0gPSB0aGlzLl9zdHlsZUNvbXBpbGVyLm5lZWRzU3R5bGVTaGltKGNvbXBNZXRhKTtcbiAgICAgICAgZ2VuZXJhdGVkRmlsZXMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX2NvZGVnZW5TdHlsZXMoc3JjRmlsZVVybCwgY29tcE1ldGEsIHN0eWxlc2hlZXRNZXRhLCBzaGltLCBmaWxlU3VmZml4KSk7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmFsbG93RW1wdHlDb2RlZ2VuRmlsZXMpIHtcbiAgICAgICAgICBnZW5lcmF0ZWRGaWxlcy5wdXNoKFxuICAgICAgICAgICAgICB0aGlzLl9jb2RlZ2VuU3R5bGVzKHNyY0ZpbGVVcmwsIGNvbXBNZXRhLCBzdHlsZXNoZWV0TWV0YSwgIXNoaW0sIGZpbGVTdWZmaXgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbXBpbGUgY29tcG9uZW50c1xuICAgICAgY29uc3QgY29tcFZpZXdWYXJzID0gdGhpcy5fY29tcGlsZUNvbXBvbmVudChcbiAgICAgICAgICBvdXRwdXRDdHgsIGNvbXBNZXRhLCBuZ01vZHVsZSwgbmdNb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5kaXJlY3RpdmVzLCBjb21wb25lbnRTdHlsZXNoZWV0LFxuICAgICAgICAgIGZpbGVTdWZmaXgpO1xuICAgICAgdGhpcy5fY29tcGlsZUNvbXBvbmVudEZhY3Rvcnkob3V0cHV0Q3R4LCBjb21wTWV0YSwgbmdNb2R1bGUsIGZpbGVTdWZmaXgpO1xuICAgIH0pO1xuICAgIGlmIChvdXRwdXRDdHguc3RhdGVtZW50cy5sZW5ndGggPiAwIHx8IHRoaXMuX29wdGlvbnMuYWxsb3dFbXB0eUNvZGVnZW5GaWxlcykge1xuICAgICAgY29uc3Qgc3JjTW9kdWxlID0gdGhpcy5fY29kZWdlblNvdXJjZU1vZHVsZShzcmNGaWxlVXJsLCBvdXRwdXRDdHgpO1xuICAgICAgZ2VuZXJhdGVkRmlsZXMudW5zaGlmdChzcmNNb2R1bGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVkRmlsZXM7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdW1tYXJ5KFxuICAgICAgc3JjRmlsZU5hbWU6IHN0cmluZywgZGlyZWN0aXZlczogU3RhdGljU3ltYm9sW10sIHBpcGVzOiBTdGF0aWNTeW1ib2xbXSxcbiAgICAgIG5nTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGFbXSwgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSxcbiAgICAgIG5nRmFjdG9yeUN0eDogT3V0cHV0Q29udGV4dCk6IEdlbmVyYXRlZEZpbGVbXSB7XG4gICAgY29uc3Qgc3ltYm9sU3VtbWFyaWVzID0gdGhpcy5fc3ltYm9sUmVzb2x2ZXIuZ2V0U3ltYm9sc09mKHNyY0ZpbGVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHN5bWJvbCA9PiB0aGlzLl9zeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHN5bWJvbCkpO1xuICAgIGNvbnN0IHR5cGVEYXRhOiB7XG4gICAgICBzdW1tYXJ5OiBDb21waWxlVHlwZVN1bW1hcnksXG4gICAgICBtZXRhZGF0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhfENvbXBpbGVQaXBlTWV0YWRhdGF8XG4gICAgICBDb21waWxlVHlwZU1ldGFkYXRhXG4gICAgfVtdID1cbiAgICAgICAgW1xuICAgICAgICAgIC4uLm5nTW9kdWxlcy5tYXAoXG4gICAgICAgICAgICAgIG1ldGEgPT4gKHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldE5nTW9kdWxlU3VtbWFyeShtZXRhLnR5cGUucmVmZXJlbmNlKSEsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0TmdNb2R1bGVNZXRhZGF0YShtZXRhLnR5cGUucmVmZXJlbmNlKSFcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIC4uLmRpcmVjdGl2ZXMubWFwKHJlZiA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVTdW1tYXJ5KHJlZikhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEocmVmKSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgLi4ucGlwZXMubWFwKHJlZiA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UGlwZVN1bW1hcnkocmVmKSEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UGlwZU1ldGFkYXRhKHJlZikhXG4gICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAuLi5pbmplY3RhYmxlcy5tYXAoXG4gICAgICAgICAgICAgIHJlZiA9PiAoe1xuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0SW5qZWN0YWJsZVN1bW1hcnkocmVmLnN5bWJvbCkhLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldEluamVjdGFibGVTdW1tYXJ5KHJlZi5zeW1ib2wpIS50eXBlXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICBdO1xuICAgIGNvbnN0IGZvckppdE91dHB1dEN0eCA9IHRoaXMuX29wdGlvbnMuZW5hYmxlU3VtbWFyaWVzRm9ySml0ID9cbiAgICAgICAgdGhpcy5fY3JlYXRlT3V0cHV0Q29udGV4dChzdW1tYXJ5Rm9ySml0RmlsZU5hbWUoc3JjRmlsZU5hbWUsIHRydWUpKSA6XG4gICAgICAgIG51bGw7XG4gICAgY29uc3Qge2pzb24sIGV4cG9ydEFzfSA9IHNlcmlhbGl6ZVN1bW1hcmllcyhcbiAgICAgICAgc3JjRmlsZU5hbWUsIGZvckppdE91dHB1dEN0eCwgdGhpcy5fc3VtbWFyeVJlc29sdmVyLCB0aGlzLl9zeW1ib2xSZXNvbHZlciwgc3ltYm9sU3VtbWFyaWVzLFxuICAgICAgICB0eXBlRGF0YSwgdGhpcy5fb3B0aW9ucy5jcmVhdGVFeHRlcm5hbFN5bWJvbEZhY3RvcnlSZWV4cG9ydHMpO1xuICAgIGV4cG9ydEFzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBuZ0ZhY3RvcnlDdHguc3RhdGVtZW50cy5wdXNoKFxuICAgICAgICAgIG8udmFyaWFibGUoZW50cnkuZXhwb3J0QXMpLnNldChuZ0ZhY3RvcnlDdHguaW1wb3J0RXhwcihlbnRyeS5zeW1ib2wpKS50b0RlY2xTdG10KG51bGwsIFtcbiAgICAgICAgICAgIG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkXG4gICAgICAgICAgXSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN1bW1hcnlKc29uID0gbmV3IEdlbmVyYXRlZEZpbGUoc3JjRmlsZU5hbWUsIHN1bW1hcnlGaWxlTmFtZShzcmNGaWxlTmFtZSksIGpzb24pO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtzdW1tYXJ5SnNvbl07XG4gICAgaWYgKGZvckppdE91dHB1dEN0eCkge1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5fY29kZWdlblNvdXJjZU1vZHVsZShzcmNGaWxlTmFtZSwgZm9ySml0T3V0cHV0Q3R4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlTW9kdWxlKG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgbmdNb2R1bGU6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhKTogdm9pZCB7XG4gICAgY29uc3QgcHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW107XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRMb2NhbGUgPSB0aGlzLl9vcHRpb25zLmxvY2FsZS5yZXBsYWNlKC9fL2csICctJyk7XG4gICAgICBwcm92aWRlcnMucHVzaCh7XG4gICAgICAgIHRva2VuOiBjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlKHRoaXMucmVmbGVjdG9yLCBJZGVudGlmaWVycy5MT0NBTEVfSUQpLFxuICAgICAgICB1c2VWYWx1ZTogbm9ybWFsaXplZExvY2FsZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpb25zLmkxOG5Gb3JtYXQpIHtcbiAgICAgIHByb3ZpZGVycy5wdXNoKHtcbiAgICAgICAgdG9rZW46IGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy5yZWZsZWN0b3IsIElkZW50aWZpZXJzLlRSQU5TTEFUSU9OU19GT1JNQVQpLFxuICAgICAgICB1c2VWYWx1ZTogdGhpcy5fb3B0aW9ucy5pMThuRm9ybWF0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9uZ01vZHVsZUNvbXBpbGVyLmNvbXBpbGUob3V0cHV0Q3R4LCBuZ01vZHVsZSwgcHJvdmlkZXJzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBjb21wTWV0YTogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgbmdNb2R1bGU6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLCBmaWxlU3VmZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0TWV0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0SG9zdENvbXBvbmVudE1ldGFkYXRhKGNvbXBNZXRhKTtcbiAgICBjb25zdCBob3N0Vmlld0ZhY3RvcnlWYXIgPVxuICAgICAgICB0aGlzLl9jb21waWxlQ29tcG9uZW50KG91dHB1dEN0eCwgaG9zdE1ldGEsIG5nTW9kdWxlLCBbY29tcE1ldGEudHlwZV0sIG51bGwsIGZpbGVTdWZmaXgpXG4gICAgICAgICAgICAudmlld0NsYXNzVmFyO1xuICAgIGNvbnN0IGNvbXBGYWN0b3J5VmFyID0gY29tcG9uZW50RmFjdG9yeU5hbWUoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UpO1xuICAgIGNvbnN0IGlucHV0c0V4cHJzOiBvLkxpdGVyYWxNYXBFbnRyeVtdID0gW107XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY29tcE1ldGEuaW5wdXRzKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBjb21wTWV0YS5pbnB1dHNbcHJvcE5hbWVdO1xuICAgICAgLy8gRG9uJ3QgcXVvdGUgc28gdGhhdCB0aGUga2V5IGdldHMgbWluaWZpZWQuLi5cbiAgICAgIGlucHV0c0V4cHJzLnB1c2gobmV3IG8uTGl0ZXJhbE1hcEVudHJ5KHByb3BOYW1lLCBvLmxpdGVyYWwodGVtcGxhdGVOYW1lKSwgZmFsc2UpKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0c0V4cHJzOiBvLkxpdGVyYWxNYXBFbnRyeVtdID0gW107XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY29tcE1ldGEub3V0cHV0cykge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gY29tcE1ldGEub3V0cHV0c1twcm9wTmFtZV07XG4gICAgICAvLyBEb24ndCBxdW90ZSBzbyB0aGF0IHRoZSBrZXkgZ2V0cyBtaW5pZmllZC4uLlxuICAgICAgb3V0cHV0c0V4cHJzLnB1c2gobmV3IG8uTGl0ZXJhbE1hcEVudHJ5KHByb3BOYW1lLCBvLmxpdGVyYWwodGVtcGxhdGVOYW1lKSwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICBvdXRwdXRDdHguc3RhdGVtZW50cy5wdXNoKFxuICAgICAgICBvLnZhcmlhYmxlKGNvbXBGYWN0b3J5VmFyKVxuICAgICAgICAgICAgLnNldChvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuY3JlYXRlQ29tcG9uZW50RmFjdG9yeSkuY2FsbEZuKFtcbiAgICAgICAgICAgICAgby5saXRlcmFsKGNvbXBNZXRhLnNlbGVjdG9yKSwgb3V0cHV0Q3R4LmltcG9ydEV4cHIoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBvLnZhcmlhYmxlKGhvc3RWaWV3RmFjdG9yeVZhciksIG5ldyBvLkxpdGVyYWxNYXBFeHByKGlucHV0c0V4cHJzKSxcbiAgICAgICAgICAgICAgbmV3IG8uTGl0ZXJhbE1hcEV4cHIob3V0cHV0c0V4cHJzKSxcbiAgICAgICAgICAgICAgby5saXRlcmFsQXJyKFxuICAgICAgICAgICAgICAgICAgY29tcE1ldGEudGVtcGxhdGUgIS5uZ0NvbnRlbnRTZWxlY3RvcnMubWFwKHNlbGVjdG9yID0+IG8ubGl0ZXJhbChzZWxlY3RvcikpKVxuICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAudG9EZWNsU3RtdChcbiAgICAgICAgICAgICAgICBvLmltcG9ydFR5cGUoXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLkNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIFtvLmV4cHJlc3Npb25UeXBlKG91dHB1dEN0eC5pbXBvcnRFeHByKGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKSkhXSxcbiAgICAgICAgICAgICAgICAgICAgW28uVHlwZU1vZGlmaWVyLkNvbnN0XSksXG4gICAgICAgICAgICAgICAgW28uU3RtdE1vZGlmaWVyLkZpbmFsLCBvLlN0bXRNb2RpZmllci5FeHBvcnRlZF0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBpbGVDb21wb25lbnQoXG4gICAgICBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gICAgICBuZ01vZHVsZTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIGRpcmVjdGl2ZUlkZW50aWZpZXJzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10sXG4gICAgICBjb21wb25lbnRTdHlsZXM6IENvbXBpbGVkU3R5bGVzaGVldHxudWxsLCBmaWxlU3VmZml4OiBzdHJpbmcpOiBWaWV3Q29tcGlsZVJlc3VsdCB7XG4gICAgY29uc3Qge3RlbXBsYXRlOiBwYXJzZWRUZW1wbGF0ZSwgcGlwZXM6IHVzZWRQaXBlc30gPVxuICAgICAgICB0aGlzLl9wYXJzZVRlbXBsYXRlKGNvbXBNZXRhLCBuZ01vZHVsZSwgZGlyZWN0aXZlSWRlbnRpZmllcnMpO1xuICAgIGNvbnN0IHN0eWxlc0V4cHIgPSBjb21wb25lbnRTdHlsZXMgPyBvLnZhcmlhYmxlKGNvbXBvbmVudFN0eWxlcy5zdHlsZXNWYXIpIDogby5saXRlcmFsQXJyKFtdKTtcbiAgICBjb25zdCB2aWV3UmVzdWx0ID0gdGhpcy5fdmlld0NvbXBpbGVyLmNvbXBpbGVDb21wb25lbnQoXG4gICAgICAgIG91dHB1dEN0eCwgY29tcE1ldGEsIHBhcnNlZFRlbXBsYXRlLCBzdHlsZXNFeHByLCB1c2VkUGlwZXMpO1xuICAgIGlmIChjb21wb25lbnRTdHlsZXMpIHtcbiAgICAgIF9yZXNvbHZlU3R5bGVTdGF0ZW1lbnRzKFxuICAgICAgICAgIHRoaXMuX3N5bWJvbFJlc29sdmVyLCBjb21wb25lbnRTdHlsZXMsIHRoaXMuX3N0eWxlQ29tcGlsZXIubmVlZHNTdHlsZVNoaW0oY29tcE1ldGEpLFxuICAgICAgICAgIGZpbGVTdWZmaXgpO1xuICAgIH1cbiAgICByZXR1cm4gdmlld1Jlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlVGVtcGxhdGUoXG4gICAgICBjb21wTWV0YTogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBuZ01vZHVsZTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsXG4gICAgICBkaXJlY3RpdmVJZGVudGlmaWVyczogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdKTpcbiAgICAgIHt0ZW1wbGF0ZTogVGVtcGxhdGVBc3RbXSwgcGlwZXM6IENvbXBpbGVQaXBlU3VtbWFyeVtdfSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlQXN0Q2FjaGUuaGFzKGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlQXN0Q2FjaGUuZ2V0KGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKSE7XG4gICAgfVxuICAgIGNvbnN0IHByZXNlcnZlV2hpdGVzcGFjZXMgPSBjb21wTWV0YSEudGVtcGxhdGUgIS5wcmVzZXJ2ZVdoaXRlc3BhY2VzO1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPVxuICAgICAgICBkaXJlY3RpdmVJZGVudGlmaWVycy5tYXAoZGlyID0+IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0RGlyZWN0aXZlU3VtbWFyeShkaXIucmVmZXJlbmNlKSk7XG4gICAgY29uc3QgcGlwZXMgPSBuZ01vZHVsZS50cmFuc2l0aXZlTW9kdWxlLnBpcGVzLm1hcChcbiAgICAgICAgcGlwZSA9PiB0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFBpcGVTdW1tYXJ5KHBpcGUucmVmZXJlbmNlKSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fdGVtcGxhdGVQYXJzZXIucGFyc2UoXG4gICAgICAgIGNvbXBNZXRhLCBjb21wTWV0YS50ZW1wbGF0ZSAhLmh0bWxBc3QhLCBkaXJlY3RpdmVzLCBwaXBlcywgbmdNb2R1bGUuc2NoZW1hcyxcbiAgICAgICAgdGVtcGxhdGVTb3VyY2VVcmwobmdNb2R1bGUudHlwZSwgY29tcE1ldGEsIGNvbXBNZXRhLnRlbXBsYXRlICEpLCBwcmVzZXJ2ZVdoaXRlc3BhY2VzKTtcbiAgICB0aGlzLl90ZW1wbGF0ZUFzdENhY2hlLnNldChjb21wTWV0YS50eXBlLnJlZmVyZW5jZSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT3V0cHV0Q29udGV4dChnZW5GaWxlUGF0aDogc3RyaW5nKTogT3V0cHV0Q29udGV4dCB7XG4gICAgY29uc3QgaW1wb3J0RXhwciA9XG4gICAgICAgIChzeW1ib2w6IFN0YXRpY1N5bWJvbCwgdHlwZVBhcmFtczogby5UeXBlW118bnVsbCA9IG51bGwsIHVzZVN1bW1hcmllczogYm9vbGVhbiA9IHRydWUpID0+IHtcbiAgICAgICAgICBpZiAoIShzeW1ib2wgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIGVycm9yOiB1bmtub3duIGlkZW50aWZpZXIgJHtKU09OLnN0cmluZ2lmeShzeW1ib2wpfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhcml0eSA9IHRoaXMuX3N5bWJvbFJlc29sdmVyLmdldFR5cGVBcml0eShzeW1ib2wpIHx8IDA7XG4gICAgICAgICAgY29uc3Qge2ZpbGVQYXRoLCBuYW1lLCBtZW1iZXJzfSA9XG4gICAgICAgICAgICAgIHRoaXMuX3N5bWJvbFJlc29sdmVyLmdldEltcG9ydEFzKHN5bWJvbCwgdXNlU3VtbWFyaWVzKSB8fCBzeW1ib2w7XG4gICAgICAgICAgY29uc3QgaW1wb3J0TW9kdWxlID0gdGhpcy5fZmlsZU5hbWVUb01vZHVsZU5hbWUoZmlsZVBhdGgsIGdlbkZpbGVQYXRoKTtcblxuICAgICAgICAgIC8vIEl0IHNob3VsZCBiZSBnb29kIGVub3VnaCB0byBjb21wYXJlIGZpbGVQYXRoIHRvIGdlbkZpbGVQYXRoIGFuZCBpZiB0aGV5IGFyZSBlcXVhbFxuICAgICAgICAgIC8vIHRoZXJlIGlzIGEgc2VsZiByZWZlcmVuY2UuIEhvd2V2ZXIsIG5nZmFjdG9yeSBmaWxlcyBnZW5lcmF0ZSB0byAudHMgYnV0IHRoZWlyXG4gICAgICAgICAgLy8gc3ltYm9scyBoYXZlIC5kLnRzIHNvIGEgc2ltcGxlIGNvbXBhcmUgaXMgaW5zdWZmaWNpZW50LiBUaGV5IHNob3VsZCBiZSBjYW5vbmljYWxcbiAgICAgICAgICAvLyBhbmQgaXMgdHJhY2tlZCBieSAjMTc3MDUuXG4gICAgICAgICAgY29uc3Qgc2VsZlJlZmVyZW5jZSA9IHRoaXMuX2ZpbGVOYW1lVG9Nb2R1bGVOYW1lKGdlbkZpbGVQYXRoLCBnZW5GaWxlUGF0aCk7XG4gICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGltcG9ydE1vZHVsZSA9PT0gc2VsZlJlZmVyZW5jZSA/IG51bGwgOiBpbXBvcnRNb2R1bGU7XG5cbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgaW4gYSB0eXBlIGV4cHJlc3Npb24gdGhhdCByZWZlcnMgdG8gYSBnZW5lcmljIHR5cGUgdGhlbiBzdXBwbHlcbiAgICAgICAgICAvLyB0aGUgcmVxdWlyZWQgdHlwZSBwYXJhbWV0ZXJzLiBJZiB0aGVyZSB3ZXJlIG5vdCBlbm91Z2ggdHlwZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgLy8gc3VwcGxpZWQsIHN1cHBseSBhbnkgYXMgdGhlIHR5cGUuIE91dHNpZGUgYSB0eXBlIGV4cHJlc3Npb24gdGhlIHJlZmVyZW5jZVxuICAgICAgICAgIC8vIHNob3VsZCBub3Qgc3VwcGx5IHR5cGUgcGFyYW1ldGVycyBhbmQgYmUgdHJlYXRlZCBhcyBhIHNpbXBsZSB2YWx1ZSByZWZlcmVuY2VcbiAgICAgICAgICAvLyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICAgIGNvbnN0IHN1cHBsaWVkVHlwZVBhcmFtcyA9IHR5cGVQYXJhbXMgfHwgW107XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1R5cGVQYXJhbXNDb3VudCA9IGFyaXR5IC0gc3VwcGxpZWRUeXBlUGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBhbGxUeXBlUGFyYW1zID1cbiAgICAgICAgICAgICAgc3VwcGxpZWRUeXBlUGFyYW1zLmNvbmNhdChuZXdBcnJheShtaXNzaW5nVHlwZVBhcmFtc0NvdW50LCBvLkRZTkFNSUNfVFlQRSkpO1xuICAgICAgICAgIHJldHVybiBtZW1iZXJzLnJlZHVjZShcbiAgICAgICAgICAgICAgKGV4cHIsIG1lbWJlck5hbWUpID0+IGV4cHIucHJvcChtZW1iZXJOYW1lKSxcbiAgICAgICAgICAgICAgPG8uRXhwcmVzc2lvbj5vLmltcG9ydEV4cHIoXG4gICAgICAgICAgICAgICAgICBuZXcgby5FeHRlcm5hbFJlZmVyZW5jZShtb2R1bGVOYW1lLCBuYW1lLCBudWxsKSwgYWxsVHlwZVBhcmFtcykpO1xuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGF0ZW1lbnRzOiBbXSwgZ2VuRmlsZVBhdGgsIGltcG9ydEV4cHIsIGNvbnN0YW50UG9vbDogbmV3IENvbnN0YW50UG9vbCgpfTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbGVOYW1lVG9Nb2R1bGVOYW1lKGltcG9ydGVkRmlsZVBhdGg6IHN0cmluZywgY29udGFpbmluZ0ZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdW1tYXJ5UmVzb2x2ZXIuZ2V0S25vd25Nb2R1bGVOYW1lKGltcG9ydGVkRmlsZVBhdGgpIHx8XG4gICAgICAgIHRoaXMuX3N5bWJvbFJlc29sdmVyLmdldEtub3duTW9kdWxlTmFtZShpbXBvcnRlZEZpbGVQYXRoKSB8fFxuICAgICAgICB0aGlzLl9ob3N0LmZpbGVOYW1lVG9Nb2R1bGVOYW1lKGltcG9ydGVkRmlsZVBhdGgsIGNvbnRhaW5pbmdGaWxlUGF0aCk7XG4gIH1cblxuICBwcml2YXRlIF9jb2RlZ2VuU3R5bGVzKFxuICAgICAgc3JjRmlsZVVybDogc3RyaW5nLCBjb21wTWV0YTogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgc3R5bGVzaGVldE1ldGFkYXRhOiBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhLCBpc1NoaW1tZWQ6IGJvb2xlYW4sXG4gICAgICBmaWxlU3VmZml4OiBzdHJpbmcpOiBHZW5lcmF0ZWRGaWxlIHtcbiAgICBjb25zdCBvdXRwdXRDdHggPSB0aGlzLl9jcmVhdGVPdXRwdXRDb250ZXh0KFxuICAgICAgICBfc3R5bGVzTW9kdWxlVXJsKHN0eWxlc2hlZXRNZXRhZGF0YS5tb2R1bGVVcmwhLCBpc1NoaW1tZWQsIGZpbGVTdWZmaXgpKTtcbiAgICBjb25zdCBjb21waWxlZFN0eWxlc2hlZXQgPVxuICAgICAgICB0aGlzLl9zdHlsZUNvbXBpbGVyLmNvbXBpbGVTdHlsZXMob3V0cHV0Q3R4LCBjb21wTWV0YSwgc3R5bGVzaGVldE1ldGFkYXRhLCBpc1NoaW1tZWQpO1xuICAgIF9yZXNvbHZlU3R5bGVTdGF0ZW1lbnRzKHRoaXMuX3N5bWJvbFJlc29sdmVyLCBjb21waWxlZFN0eWxlc2hlZXQsIGlzU2hpbW1lZCwgZmlsZVN1ZmZpeCk7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVnZW5Tb3VyY2VNb2R1bGUoc3JjRmlsZVVybCwgb3V0cHV0Q3R4KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvZGVnZW5Tb3VyY2VNb2R1bGUoc3JjRmlsZVVybDogc3RyaW5nLCBjdHg6IE91dHB1dENvbnRleHQpOiBHZW5lcmF0ZWRGaWxlIHtcbiAgICByZXR1cm4gbmV3IEdlbmVyYXRlZEZpbGUoc3JjRmlsZVVybCwgY3R4LmdlbkZpbGVQYXRoLCBjdHguc3RhdGVtZW50cyk7XG4gIH1cblxuICBsaXN0TGF6eVJvdXRlcyhlbnRyeVJvdXRlPzogc3RyaW5nLCBhbmFseXplZE1vZHVsZXM/OiBOZ0FuYWx5emVkTW9kdWxlcyk6IExhenlSb3V0ZVtdIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoZW50cnlSb3V0ZSkge1xuICAgICAgY29uc3Qgc3ltYm9sID0gcGFyc2VMYXp5Um91dGUoZW50cnlSb3V0ZSwgdGhpcy5yZWZsZWN0b3IpLnJlZmVyZW5jZWRNb2R1bGU7XG4gICAgICByZXR1cm4gdmlzaXRMYXp5Um91dGUoc3ltYm9sKTtcbiAgICB9IGVsc2UgaWYgKGFuYWx5emVkTW9kdWxlcykge1xuICAgICAgY29uc3QgYWxsTGF6eVJvdXRlczogTGF6eVJvdXRlW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgbmdNb2R1bGUgb2YgYW5hbHl6ZWRNb2R1bGVzLm5nTW9kdWxlcykge1xuICAgICAgICBjb25zdCBsYXp5Um91dGVzID0gbGlzdExhenlSb3V0ZXMobmdNb2R1bGUsIHRoaXMucmVmbGVjdG9yKTtcbiAgICAgICAgZm9yIChjb25zdCBsYXp5Um91dGUgb2YgbGF6eVJvdXRlcykge1xuICAgICAgICAgIGFsbExhenlSb3V0ZXMucHVzaChsYXp5Um91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsTGF6eVJvdXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFaXRoZXIgcm91dGUgb3IgYW5hbHl6ZWRNb2R1bGVzIGhhcyB0byBiZSBzcGVjaWZpZWQhYCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmlzaXRMYXp5Um91dGUoXG4gICAgICAgIHN5bWJvbDogU3RhdGljU3ltYm9sLCBzZWVuUm91dGVzID0gbmV3IFNldDxTdGF0aWNTeW1ib2w+KCksXG4gICAgICAgIGFsbExhenlSb3V0ZXM6IExhenlSb3V0ZVtdID0gW10pOiBMYXp5Um91dGVbXSB7XG4gICAgICAvLyBTdXBwb3J0IHBvaW50aW5nIHRvIGRlZmF1bHQgZXhwb3J0cywgYnV0IHN0b3AgcmVjdXJzaW5nIHRoZXJlLFxuICAgICAgLy8gYXMgdGhlIFN0YXRpY1JlZmxlY3RvciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBkZWZhdWx0IGV4cG9ydHMuXG4gICAgICBpZiAoc2VlblJvdXRlcy5oYXMoc3ltYm9sKSB8fCAhc3ltYm9sLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGFsbExhenlSb3V0ZXM7XG4gICAgICB9XG4gICAgICBzZWVuUm91dGVzLmFkZChzeW1ib2wpO1xuICAgICAgY29uc3QgbGF6eVJvdXRlcyA9XG4gICAgICAgICAgbGlzdExhenlSb3V0ZXMoc2VsZi5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKHN5bWJvbCwgdHJ1ZSkhLCBzZWxmLnJlZmxlY3Rvcik7XG4gICAgICBmb3IgKGNvbnN0IGxhenlSb3V0ZSBvZiBsYXp5Um91dGVzKSB7XG4gICAgICAgIGFsbExhenlSb3V0ZXMucHVzaChsYXp5Um91dGUpO1xuICAgICAgICB2aXNpdExhenlSb3V0ZShsYXp5Um91dGUucmVmZXJlbmNlZE1vZHVsZSwgc2VlblJvdXRlcywgYWxsTGF6eVJvdXRlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsTGF6eVJvdXRlcztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVtcHR5U3R1YihvdXRwdXRDdHg6IE91dHB1dENvbnRleHQpIHtcbiAgLy8gTm90ZTogV2UgbmVlZCB0byBwcm9kdWNlIGF0IGxlYXN0IG9uZSBpbXBvcnQgc3RhdGVtZW50IHNvIHRoYXRcbiAgLy8gVHlwZVNjcmlwdCBrbm93cyB0aGF0IHRoZSBmaWxlIGlzIGFuIGVzNiBtb2R1bGUuIE90aGVyd2lzZSBvdXIgZ2VuZXJhdGVkXG4gIC8vIGV4cG9ydHMgLyBpbXBvcnRzIHdvbid0IGJlIGVtaXR0ZWQgcHJvcGVybHkgYnkgVHlwZVNjcmlwdC5cbiAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuQ29tcG9uZW50RmFjdG9yeSkudG9TdG10KCkpO1xufVxuXG5cbmZ1bmN0aW9uIF9yZXNvbHZlU3R5bGVTdGF0ZW1lbnRzKFxuICAgIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlciwgY29tcGlsZVJlc3VsdDogQ29tcGlsZWRTdHlsZXNoZWV0LCBuZWVkc1NoaW06IGJvb2xlYW4sXG4gICAgZmlsZVN1ZmZpeDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbXBpbGVSZXN1bHQuZGVwZW5kZW5jaWVzLmZvckVhY2goKGRlcCkgPT4ge1xuICAgIGRlcC5zZXRWYWx1ZShzeW1ib2xSZXNvbHZlci5nZXRTdGF0aWNTeW1ib2woXG4gICAgICAgIF9zdHlsZXNNb2R1bGVVcmwoZGVwLm1vZHVsZVVybCwgbmVlZHNTaGltLCBmaWxlU3VmZml4KSwgZGVwLm5hbWUpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9zdHlsZXNNb2R1bGVVcmwoc3R5bGVzaGVldFVybDogc3RyaW5nLCBzaGltOiBib29sZWFuLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtzdHlsZXNoZWV0VXJsfSR7c2hpbSA/ICcuc2hpbScgOiAnJ30ubmdzdHlsZSR7c3VmZml4fWA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdBbmFseXplZE1vZHVsZXMge1xuICBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW107XG4gIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmU6IE1hcDxTdGF0aWNTeW1ib2wsIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhPjtcbiAgZmlsZXM6IE5nQW5hbHl6ZWRGaWxlW107XG4gIHN5bWJvbHNNaXNzaW5nTW9kdWxlPzogU3RhdGljU3ltYm9sW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXMge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdO1xuICBzaGFsbG93TW9kdWxlczogQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nQW5hbHl6ZWRGaWxlIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgZGlyZWN0aXZlczogU3RhdGljU3ltYm9sW107XG4gIGFic3RyYWN0RGlyZWN0aXZlczogU3RhdGljU3ltYm9sW107XG4gIHBpcGVzOiBTdGF0aWNTeW1ib2xbXTtcbiAgbmdNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YVtdO1xuICBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdO1xuICBleHBvcnRzTm9uU291cmNlRmlsZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdBbmFseXplTW9kdWxlc0hvc3Qge1xuICBpc1NvdXJjZUZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplTmdNb2R1bGVzKFxuICAgIGZpbGVOYW1lczogc3RyaW5nW10sIGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIpOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIGNvbnN0IGZpbGVzID0gX2FuYWx5emVGaWxlc0luY2x1ZGluZ05vblByb2dyYW1GaWxlcyhcbiAgICAgIGZpbGVOYW1lcywgaG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXIsIG1ldGFkYXRhUmVzb2x2ZXIpO1xuICByZXR1cm4gbWVyZ2VBbmFseXplZEZpbGVzKGZpbGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVBbmRWYWxpZGF0ZU5nTW9kdWxlcyhcbiAgICBmaWxlTmFtZXM6IHN0cmluZ1tdLCBob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIG1ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyKTogTmdBbmFseXplZE1vZHVsZXMge1xuICByZXR1cm4gdmFsaWRhdGVBbmFseXplZE1vZHVsZXMoXG4gICAgICBhbmFseXplTmdNb2R1bGVzKGZpbGVOYW1lcywgaG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXIsIG1ldGFkYXRhUmVzb2x2ZXIpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBbmFseXplZE1vZHVsZXMoYW5hbHl6ZWRNb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcyk6IE5nQW5hbHl6ZWRNb2R1bGVzIHtcbiAgaWYgKGFuYWx5emVkTW9kdWxlcy5zeW1ib2xzTWlzc2luZ01vZHVsZSAmJiBhbmFseXplZE1vZHVsZXMuc3ltYm9sc01pc3NpbmdNb2R1bGUubGVuZ3RoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBhbmFseXplZE1vZHVsZXMuc3ltYm9sc01pc3NpbmdNb2R1bGUubWFwKFxuICAgICAgICBzID0+IGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2R1bGUgZm9yIGNsYXNzICR7cy5uYW1lfSBpbiAke3MuZmlsZVBhdGh9ISBBZGQgJHtcbiAgICAgICAgICAgIHMubmFtZX0gdG8gdGhlIE5nTW9kdWxlIHRvIGZpeCBpdC5gKTtcbiAgICB0aHJvdyBzeW50YXhFcnJvcihtZXNzYWdlcy5qb2luKCdcXG4nKSk7XG4gIH1cbiAgcmV0dXJuIGFuYWx5emVkTW9kdWxlcztcbn1cblxuLy8gQW5hbHl6ZXMgYWxsIG9mIHRoZSBwcm9ncmFtIGZpbGVzLFxuLy8gaW5jbHVkaW5nIGZpbGVzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9ncmFtXG4vLyBidXQgYXJlIHJlZmVyZW5jZWQgYnkgYW4gTmdNb2R1bGUuXG5mdW5jdGlvbiBfYW5hbHl6ZUZpbGVzSW5jbHVkaW5nTm9uUHJvZ3JhbUZpbGVzKFxuICAgIGZpbGVOYW1lczogc3RyaW5nW10sIGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIpOiBOZ0FuYWx5emVkRmlsZVtdIHtcbiAgY29uc3Qgc2VlbkZpbGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IGZpbGVzOiBOZ0FuYWx5emVkRmlsZVtdID0gW107XG5cbiAgY29uc3QgdmlzaXRGaWxlID0gKGZpbGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc2VlbkZpbGVzLmhhcyhmaWxlTmFtZSkgfHwgIWhvc3QuaXNTb3VyY2VGaWxlKGZpbGVOYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzZWVuRmlsZXMuYWRkKGZpbGVOYW1lKTtcbiAgICBjb25zdCBhbmFseXplZEZpbGUgPSBhbmFseXplRmlsZShob3N0LCBzdGF0aWNTeW1ib2xSZXNvbHZlciwgbWV0YWRhdGFSZXNvbHZlciwgZmlsZU5hbWUpO1xuICAgIGZpbGVzLnB1c2goYW5hbHl6ZWRGaWxlKTtcbiAgICBhbmFseXplZEZpbGUubmdNb2R1bGVzLmZvckVhY2gobmdNb2R1bGUgPT4ge1xuICAgICAgbmdNb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5tb2R1bGVzLmZvckVhY2gobW9kTWV0YSA9PiB2aXNpdEZpbGUobW9kTWV0YS5yZWZlcmVuY2UuZmlsZVBhdGgpKTtcbiAgICB9KTtcbiAgfTtcbiAgZmlsZU5hbWVzLmZvckVhY2goKGZpbGVOYW1lKSA9PiB2aXNpdEZpbGUoZmlsZU5hbWUpKTtcbiAgcmV0dXJuIGZpbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZUZpbGUoXG4gICAgaG9zdDogTmdBbmFseXplTW9kdWxlc0hvc3QsIHN0YXRpY1N5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgZmlsZU5hbWU6IHN0cmluZyk6IE5nQW5hbHl6ZWRGaWxlIHtcbiAgY29uc3QgYWJzdHJhY3REaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICBjb25zdCBkaXJlY3RpdmVzOiBTdGF0aWNTeW1ib2xbXSA9IFtdO1xuICBjb25zdCBwaXBlczogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgY29uc3QgaW5qZWN0YWJsZXM6IENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBuZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW10gPSBbXTtcbiAgY29uc3QgaGFzRGVjb3JhdG9ycyA9IHN0YXRpY1N5bWJvbFJlc29sdmVyLmhhc0RlY29yYXRvcnMoZmlsZU5hbWUpO1xuICBsZXQgZXhwb3J0c05vblNvdXJjZUZpbGVzID0gZmFsc2U7XG4gIGNvbnN0IGlzRGVjbGFyYXRpb25GaWxlID0gZmlsZU5hbWUuZW5kc1dpdGgoJy5kLnRzJyk7XG4gIC8vIERvbid0IGFuYWx5emUgLmQudHMgZmlsZXMgdGhhdCBoYXZlIG5vIGRlY29yYXRvcnMgYXMgYSBzaG9ydGN1dFxuICAvLyB0byBzcGVlZCB1cCB0aGUgYW5hbHlzaXMuIFRoaXMgcHJldmVudHMgdXMgZnJvbVxuICAvLyByZXNvbHZpbmcgdGhlIHJlZmVyZW5jZXMgaW4gdGhlc2UgZmlsZXMuXG4gIC8vIE5vdGU6IGV4cG9ydHNOb25Tb3VyY2VGaWxlcyBpcyBvbmx5IG5lZWRlZCB3aGVuIGNvbXBpbGluZyB3aXRoIHN1bW1hcmllcyxcbiAgLy8gd2hpY2ggaXMgbm90IHRoZSBjYXNlIHdoZW4gLmQudHMgZmlsZXMgYXJlIHRyZWF0ZWQgYXMgaW5wdXQgZmlsZXMuXG4gIGlmICghaXNEZWNsYXJhdGlvbkZpbGUgfHwgaGFzRGVjb3JhdG9ycykge1xuICAgIHN0YXRpY1N5bWJvbFJlc29sdmVyLmdldFN5bWJvbHNPZihmaWxlTmFtZSkuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHN0YXRpY1N5bWJvbFJlc29sdmVyLnJlc29sdmVTeW1ib2woc3ltYm9sKTtcbiAgICAgIGNvbnN0IHN5bWJvbE1ldGEgPSByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YTtcbiAgICAgIGlmICghc3ltYm9sTWV0YSB8fCBzeW1ib2xNZXRhLl9fc3ltYm9saWMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGlzTmdTeW1ib2wgPSBmYWxzZTtcbiAgICAgIGlmIChzeW1ib2xNZXRhLl9fc3ltYm9saWMgPT09ICdjbGFzcycpIHtcbiAgICAgICAgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNEaXJlY3RpdmUoc3ltYm9sKSkge1xuICAgICAgICAgIGlzTmdTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgIC8vIFRoaXMgZGlyZWN0aXZlIGVpdGhlciBoYXMgYSBzZWxlY3RvciBvciBkb2Vzbid0LiBTZWxlY3Rvci1sZXNzIGRpcmVjdGl2ZXMgZ2V0IHRyYWNrZWRcbiAgICAgICAgICAvLyBpbiBhYnN0cmFjdERpcmVjdGl2ZXMsIG5vdCBkaXJlY3RpdmVzLiBUaGUgY29tcGlsZXIgZG9lc24ndCBkZWFsIHdpdGggc2VsZWN0b3ItbGVzc1xuICAgICAgICAgIC8vIGRpcmVjdGl2ZXMgYXQgYWxsLCByZWFsbHksIG90aGVyIHRoYW4gdG8gcGVyc2lzdCB0aGVpciBtZXRhZGF0YS4gVGhpcyBpcyBkb25lIHNvIHRoYXRcbiAgICAgICAgICAvLyBhcHBzIHdpbGwgaGF2ZSBhbiBlYXNpZXIgdGltZSBtaWdyYXRpbmcgdG8gSXZ5LCB3aGljaCByZXF1aXJlcyB0aGUgc2VsZWN0b3ItbGVzc1xuICAgICAgICAgIC8vIGFubm90YXRpb25zIHRvIGJlIGFwcGxpZWQuXG4gICAgICAgICAgaWYgKCFtZXRhZGF0YVJlc29sdmVyLmlzQWJzdHJhY3REaXJlY3RpdmUoc3ltYm9sKSkge1xuICAgICAgICAgICAgLy8gVGhlIGRpcmVjdGl2ZSBpcyBhbiBvcmRpbmFyeSBkaXJlY3RpdmUuXG4gICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIGRpcmVjdGl2ZSBoYXMgbm8gc2VsZWN0b3IgYW5kIGlzIGFuIFwiYWJzdHJhY3RcIiBkaXJlY3RpdmUsIHNvIHRyYWNrIGl0XG4gICAgICAgICAgICAvLyBhY2NvcmRpbmdseS5cbiAgICAgICAgICAgIGFic3RyYWN0RGlyZWN0aXZlcy5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUmVzb2x2ZXIuaXNQaXBlKHN5bWJvbCkpIHtcbiAgICAgICAgICBpc05nU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICBwaXBlcy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFSZXNvbHZlci5pc05nTW9kdWxlKHN5bWJvbCkpIHtcbiAgICAgICAgICBjb25zdCBuZ01vZHVsZSA9IG1ldGFkYXRhUmVzb2x2ZXIuZ2V0TmdNb2R1bGVNZXRhZGF0YShzeW1ib2wsIGZhbHNlKTtcbiAgICAgICAgICBpZiAobmdNb2R1bGUpIHtcbiAgICAgICAgICAgIGlzTmdTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgICAgbmdNb2R1bGVzLnB1c2gobmdNb2R1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzSW5qZWN0YWJsZShzeW1ib2wpKSB7XG4gICAgICAgICAgaXNOZ1N5bWJvbCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgaW5qZWN0YWJsZSA9IG1ldGFkYXRhUmVzb2x2ZXIuZ2V0SW5qZWN0YWJsZU1ldGFkYXRhKHN5bWJvbCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgIGlmIChpbmplY3RhYmxlKSB7XG4gICAgICAgICAgICBpbmplY3RhYmxlcy5wdXNoKGluamVjdGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc05nU3ltYm9sKSB7XG4gICAgICAgIGV4cG9ydHNOb25Tb3VyY2VGaWxlcyA9XG4gICAgICAgICAgICBleHBvcnRzTm9uU291cmNlRmlsZXMgfHwgaXNWYWx1ZUV4cG9ydGluZ05vblNvdXJjZUZpbGUoaG9zdCwgc3ltYm9sTWV0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlTmFtZSxcbiAgICBkaXJlY3RpdmVzLFxuICAgIGFic3RyYWN0RGlyZWN0aXZlcyxcbiAgICBwaXBlcyxcbiAgICBuZ01vZHVsZXMsXG4gICAgaW5qZWN0YWJsZXMsXG4gICAgZXhwb3J0c05vblNvdXJjZUZpbGVzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZUZpbGVGb3JJbmplY3RhYmxlcyhcbiAgICBob3N0OiBOZ0FuYWx5emVNb2R1bGVzSG9zdCwgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyLFxuICAgIG1ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBmaWxlTmFtZTogc3RyaW5nKTogTmdBbmFseXplZEZpbGVXaXRoSW5qZWN0YWJsZXMge1xuICBjb25zdCBpbmplY3RhYmxlczogQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IHNoYWxsb3dNb2R1bGVzOiBDb21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhW10gPSBbXTtcbiAgaWYgKHN0YXRpY1N5bWJvbFJlc29sdmVyLmhhc0RlY29yYXRvcnMoZmlsZU5hbWUpKSB7XG4gICAgc3RhdGljU3ltYm9sUmVzb2x2ZXIuZ2V0U3ltYm9sc09mKGZpbGVOYW1lKS5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVkU3ltYm9sID0gc3RhdGljU3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzeW1ib2wpO1xuICAgICAgY29uc3Qgc3ltYm9sTWV0YSA9IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhO1xuICAgICAgaWYgKCFzeW1ib2xNZXRhIHx8IHN5bWJvbE1ldGEuX19zeW1ib2xpYyA9PT0gJ2Vycm9yJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc3ltYm9sTWV0YS5fX3N5bWJvbGljID09PSAnY2xhc3MnKSB7XG4gICAgICAgIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzSW5qZWN0YWJsZShzeW1ib2wpKSB7XG4gICAgICAgICAgY29uc3QgaW5qZWN0YWJsZSA9IG1ldGFkYXRhUmVzb2x2ZXIuZ2V0SW5qZWN0YWJsZU1ldGFkYXRhKHN5bWJvbCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgIGlmIChpbmplY3RhYmxlKSB7XG4gICAgICAgICAgICBpbmplY3RhYmxlcy5wdXNoKGluamVjdGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVJlc29sdmVyLmlzTmdNb2R1bGUoc3ltYm9sKSkge1xuICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG1ldGFkYXRhUmVzb2x2ZXIuZ2V0U2hhbGxvd01vZHVsZU1ldGFkYXRhKHN5bWJvbCk7XG4gICAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgc2hhbGxvd01vZHVsZXMucHVzaChtb2R1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7ZmlsZU5hbWUsIGluamVjdGFibGVzLCBzaGFsbG93TW9kdWxlc307XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVFeHBvcnRpbmdOb25Tb3VyY2VGaWxlKGhvc3Q6IE5nQW5hbHl6ZU1vZHVsZXNIb3N0LCBtZXRhZGF0YTogYW55KTogYm9vbGVhbiB7XG4gIGxldCBleHBvcnRzTm9uU291cmNlRmlsZXMgPSBmYWxzZTtcblxuICBjbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgVmFsdWVWaXNpdG9yIHtcbiAgICB2aXNpdEFycmF5KGFycjogYW55W10sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgICBhcnIuZm9yRWFjaCh2ID0+IHZpc2l0VmFsdWUodiwgdGhpcywgY29udGV4dCkpO1xuICAgIH1cbiAgICB2aXNpdFN0cmluZ01hcChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXkpID0+IHZpc2l0VmFsdWUobWFwW2tleV0sIHRoaXMsIGNvbnRleHQpKTtcbiAgICB9XG4gICAgdmlzaXRQcmltaXRpdmUodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHt9XG4gICAgdmlzaXRPdGhlcih2YWx1ZTogYW55LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sICYmICFob3N0LmlzU291cmNlRmlsZSh2YWx1ZS5maWxlUGF0aCkpIHtcbiAgICAgICAgZXhwb3J0c05vblNvdXJjZUZpbGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdFZhbHVlKG1ldGFkYXRhLCBuZXcgVmlzaXRvcigpLCBudWxsKTtcbiAgcmV0dXJuIGV4cG9ydHNOb25Tb3VyY2VGaWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQW5hbHl6ZWRGaWxlcyhhbmFseXplZEZpbGVzOiBOZ0FuYWx5emVkRmlsZVtdKTogTmdBbmFseXplZE1vZHVsZXMge1xuICBjb25zdCBhbGxOZ01vZHVsZXM6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhW10gPSBbXTtcbiAgY29uc3QgbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZSA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YT4oKTtcbiAgY29uc3QgYWxsUGlwZXNBbmREaXJlY3RpdmVzID0gbmV3IFNldDxTdGF0aWNTeW1ib2w+KCk7XG5cbiAgYW5hbHl6ZWRGaWxlcy5mb3JFYWNoKGFmID0+IHtcbiAgICBhZi5uZ01vZHVsZXMuZm9yRWFjaChuZ01vZHVsZSA9PiB7XG4gICAgICBhbGxOZ01vZHVsZXMucHVzaChuZ01vZHVsZSk7XG4gICAgICBuZ01vZHVsZS5kZWNsYXJlZERpcmVjdGl2ZXMuZm9yRWFjaChcbiAgICAgICAgICBkID0+IG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuc2V0KGQucmVmZXJlbmNlLCBuZ01vZHVsZSkpO1xuICAgICAgbmdNb2R1bGUuZGVjbGFyZWRQaXBlcy5mb3JFYWNoKHAgPT4gbmdNb2R1bGVCeVBpcGVPckRpcmVjdGl2ZS5zZXQocC5yZWZlcmVuY2UsIG5nTW9kdWxlKSk7XG4gICAgfSk7XG4gICAgYWYuZGlyZWN0aXZlcy5mb3JFYWNoKGQgPT4gYWxsUGlwZXNBbmREaXJlY3RpdmVzLmFkZChkKSk7XG4gICAgYWYucGlwZXMuZm9yRWFjaChwID0+IGFsbFBpcGVzQW5kRGlyZWN0aXZlcy5hZGQocCkpO1xuICB9KTtcblxuICBjb25zdCBzeW1ib2xzTWlzc2luZ01vZHVsZTogU3RhdGljU3ltYm9sW10gPSBbXTtcbiAgYWxsUGlwZXNBbmREaXJlY3RpdmVzLmZvckVhY2gocmVmID0+IHtcbiAgICBpZiAoIW5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuaGFzKHJlZikpIHtcbiAgICAgIHN5bWJvbHNNaXNzaW5nTW9kdWxlLnB1c2gocmVmKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG5nTW9kdWxlczogYWxsTmdNb2R1bGVzLFxuICAgIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUsXG4gICAgc3ltYm9sc01pc3NpbmdNb2R1bGUsXG4gICAgZmlsZXM6IGFuYWx5emVkRmlsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VBbmRWYWxpZGF0ZU5nRmlsZXMoZmlsZXM6IE5nQW5hbHl6ZWRGaWxlW10pOiBOZ0FuYWx5emVkTW9kdWxlcyB7XG4gIHJldHVybiB2YWxpZGF0ZUFuYWx5emVkTW9kdWxlcyhtZXJnZUFuYWx5emVkRmlsZXMoZmlsZXMpKTtcbn1cbiJdfQ==