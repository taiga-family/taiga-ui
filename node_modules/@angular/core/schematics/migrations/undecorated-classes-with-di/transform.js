/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/core/schematics/migrations/undecorated-classes-with-di/transform", ["require", "exports", "@angular/core", "typescript", "@angular/core/schematics/utils/import_manager", "@angular/core/schematics/utils/ng_decorators", "@angular/core/schematics/utils/typescript/class_declaration", "@angular/core/schematics/utils/typescript/find_base_classes", "@angular/core/schematics/utils/typescript/imports", "@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/convert_directive_metadata", "@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/decorator_rewriter", "@angular/core/schematics/migrations/undecorated-classes-with-di/ng_declaration_collector"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular/core");
    const ts = require("typescript");
    const import_manager_1 = require("@angular/core/schematics/utils/import_manager");
    const ng_decorators_1 = require("@angular/core/schematics/utils/ng_decorators");
    const class_declaration_1 = require("@angular/core/schematics/utils/typescript/class_declaration");
    const find_base_classes_1 = require("@angular/core/schematics/utils/typescript/find_base_classes");
    const imports_1 = require("@angular/core/schematics/utils/typescript/imports");
    const convert_directive_metadata_1 = require("@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/convert_directive_metadata");
    const decorator_rewriter_1 = require("@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/decorator_rewriter");
    const ng_declaration_collector_1 = require("@angular/core/schematics/migrations/undecorated-classes-with-di/ng_declaration_collector");
    class UndecoratedClassesTransform {
        constructor(typeChecker, compiler, evaluator, getUpdateRecorder) {
            this.typeChecker = typeChecker;
            this.compiler = compiler;
            this.evaluator = evaluator;
            this.getUpdateRecorder = getUpdateRecorder;
            this.printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
            this.importManager = new import_manager_1.ImportManager(this.getUpdateRecorder, this.printer);
            this.decoratorRewriter = new decorator_rewriter_1.DecoratorRewriter(this.importManager, this.typeChecker, this.evaluator, this.compiler);
            /** Set of class declarations which have been decorated with "@Directive". */
            this.decoratedDirectives = new Set();
            /** Set of class declarations which have been decorated with "@Injectable" */
            this.decoratedProviders = new Set();
            /**
             * Set of class declarations which have been analyzed and need to specify
             * an explicit constructor.
             */
            this.missingExplicitConstructorClasses = new Set();
            this.symbolResolver = compiler['_symbolResolver'];
            this.compilerHost = compiler['_host'];
            this.metadataResolver = compiler['_metadataResolver'];
            // Unset the default error recorder so that the reflector will throw an exception
            // if metadata cannot be resolved.
            this.compiler.reflector['errorRecorder'] = undefined;
            // Disables that static symbols are resolved through summaries from within the static
            // reflector. Summaries cannot be used for decorator serialization as decorators are
            // omitted in summaries and the decorator can't be reconstructed from the directive summary.
            this._disableSummaryResolution();
        }
        /**
         * Migrates decorated directives which can potentially inherit a constructor
         * from an undecorated base class. All base classes until the first one
         * with an explicit constructor will be decorated with the abstract "@Directive()"
         * decorator. See case 1 in the migration plan: https://hackmd.io/@alx/S1XKqMZeS
         */
        migrateDecoratedDirectives(directives) {
            return directives.reduce((failures, node) => failures.concat(this._migrateDirectiveBaseClass(node)), []);
        }
        /**
         * Migrates decorated providers which can potentially inherit a constructor
         * from an undecorated base class. All base classes until the first one
         * with an explicit constructor will be decorated with the "@Injectable()".
         */
        migrateDecoratedProviders(providers) {
            return providers.reduce((failures, node) => failures.concat(this._migrateProviderBaseClass(node)), []);
        }
        _migrateProviderBaseClass(node) {
            return this._migrateDecoratedClassWithInheritedCtor(node, symbol => this.metadataResolver.isInjectable(symbol), node => this._addInjectableDecorator(node));
        }
        _migrateDirectiveBaseClass(node) {
            return this._migrateDecoratedClassWithInheritedCtor(node, symbol => this.metadataResolver.isDirective(symbol), node => this._addAbstractDirectiveDecorator(node));
        }
        _migrateDecoratedClassWithInheritedCtor(node, isClassDecorated, addClassDecorator) {
            // In case the provider has an explicit constructor, we don't need to do anything
            // because the class is already decorated and does not inherit a constructor.
            if (class_declaration_1.hasExplicitConstructor(node)) {
                return [];
            }
            const orderedBaseClasses = find_base_classes_1.findBaseClassDeclarations(node, this.typeChecker);
            const undecoratedBaseClasses = [];
            for (let { node: baseClass, identifier } of orderedBaseClasses) {
                const baseClassFile = baseClass.getSourceFile();
                if (class_declaration_1.hasExplicitConstructor(baseClass)) {
                    // All classes in between the decorated class and the undecorated class
                    // that defines the constructor need to be decorated as well.
                    undecoratedBaseClasses.forEach(b => addClassDecorator(b));
                    if (baseClassFile.isDeclarationFile) {
                        const staticSymbol = this._getStaticSymbolOfIdentifier(identifier);
                        // If the base class is decorated through metadata files, we don't
                        // need to add a comment to the derived class for the external base class.
                        if (staticSymbol && isClassDecorated(staticSymbol)) {
                            break;
                        }
                        // Find the last class in the inheritance chain that is decorated and will be
                        // used as anchor for a comment explaining that the class that defines the
                        // constructor cannot be decorated automatically.
                        const lastDecoratedClass = undecoratedBaseClasses[undecoratedBaseClasses.length - 1] || node;
                        return this._addMissingExplicitConstructorTodo(lastDecoratedClass);
                    }
                    // Decorate the class that defines the constructor that is inherited.
                    addClassDecorator(baseClass);
                    break;
                }
                // Add the class decorator for all base classes in the inheritance chain until
                // the base class with the explicit constructor. The decorator will be only
                // added for base classes which can be modified.
                if (!baseClassFile.isDeclarationFile) {
                    undecoratedBaseClasses.push(baseClass);
                }
            }
            return [];
        }
        /**
         * Adds the abstract "@Directive()" decorator to the given class in case there
         * is no existing directive decorator.
         */
        _addAbstractDirectiveDecorator(baseClass) {
            if (ng_declaration_collector_1.hasDirectiveDecorator(baseClass, this.typeChecker) ||
                this.decoratedDirectives.has(baseClass)) {
                return;
            }
            const baseClassFile = baseClass.getSourceFile();
            const recorder = this.getUpdateRecorder(baseClassFile);
            const directiveExpr = this.importManager.addImportToSourceFile(baseClassFile, 'Directive', '@angular/core');
            const newDecorator = ts.createDecorator(ts.createCall(directiveExpr, undefined, []));
            const newDecoratorText = this.printer.printNode(ts.EmitHint.Unspecified, newDecorator, baseClassFile);
            recorder.addClassDecorator(baseClass, newDecoratorText);
            this.decoratedDirectives.add(baseClass);
        }
        /**
         * Adds the abstract "@Injectable()" decorator to the given class in case there
         * is no existing directive decorator.
         */
        _addInjectableDecorator(baseClass) {
            if (ng_declaration_collector_1.hasInjectableDecorator(baseClass, this.typeChecker) ||
                this.decoratedProviders.has(baseClass)) {
                return;
            }
            const baseClassFile = baseClass.getSourceFile();
            const recorder = this.getUpdateRecorder(baseClassFile);
            const injectableExpr = this.importManager.addImportToSourceFile(baseClassFile, 'Injectable', '@angular/core');
            const newDecorator = ts.createDecorator(ts.createCall(injectableExpr, undefined, []));
            const newDecoratorText = this.printer.printNode(ts.EmitHint.Unspecified, newDecorator, baseClassFile);
            recorder.addClassDecorator(baseClass, newDecoratorText);
            this.decoratedProviders.add(baseClass);
        }
        /** Adds a comment for adding an explicit constructor to the given class declaration. */
        _addMissingExplicitConstructorTodo(node) {
            // In case a todo comment has been already inserted to the given class, we don't
            // want to add a comment or transform failure multiple times.
            if (this.missingExplicitConstructorClasses.has(node)) {
                return [];
            }
            this.missingExplicitConstructorClasses.add(node);
            const recorder = this.getUpdateRecorder(node.getSourceFile());
            recorder.addClassComment(node, 'TODO: add explicit constructor');
            return [{ node: node, message: 'Class needs to declare an explicit constructor.' }];
        }
        /**
         * Migrates undecorated directives which were referenced in NgModule declarations.
         * These directives inherit the metadata from a parent base class, but with Ivy
         * these classes need to explicitly have a decorator for locality. The migration
         * determines the inherited decorator and copies it to the undecorated declaration.
         *
         * Note that the migration serializes the metadata for external declarations
         * where the decorator is not part of the source file AST.
         *
         * See case 2 in the migration plan: https://hackmd.io/@alx/S1XKqMZeS
         */
        migrateUndecoratedDeclarations(directives) {
            return directives.reduce((failures, node) => failures.concat(this._migrateDerivedDeclaration(node)), []);
        }
        _migrateDerivedDeclaration(node) {
            const targetSourceFile = node.getSourceFile();
            const orderedBaseClasses = find_base_classes_1.findBaseClassDeclarations(node, this.typeChecker);
            let newDecoratorText = null;
            for (let { node: baseClass, identifier } of orderedBaseClasses) {
                // Before looking for decorators within the metadata or summary files, we
                // try to determine the directive decorator through the source file AST.
                if (baseClass.decorators) {
                    const ngDecorator = ng_decorators_1.getAngularDecorators(this.typeChecker, baseClass.decorators)
                        .find(({ name }) => name === 'Component' || name === 'Directive' || name === 'Pipe');
                    if (ngDecorator) {
                        const newDecorator = this.decoratorRewriter.rewrite(ngDecorator, node.getSourceFile());
                        newDecoratorText = this.printer.printNode(ts.EmitHint.Unspecified, newDecorator, ngDecorator.node.getSourceFile());
                        break;
                    }
                }
                // If no metadata could be found within the source-file AST, try to find
                // decorator data through Angular metadata and summary files.
                const staticSymbol = this._getStaticSymbolOfIdentifier(identifier);
                // Check if the static symbol resolves to a class declaration with
                // pipe or directive metadata.
                if (!staticSymbol ||
                    !(this.metadataResolver.isPipe(staticSymbol) ||
                        this.metadataResolver.isDirective(staticSymbol))) {
                    continue;
                }
                const metadata = this._resolveDeclarationMetadata(staticSymbol);
                // If no metadata could be resolved for the static symbol, print a failure message
                // and ask the developer to manually migrate the class. This case is rare because
                // usually decorator metadata is always present but just can't be read if a program
                // only has access to summaries (this is a special case in google3).
                if (!metadata) {
                    return [{
                            node,
                            message: `Class cannot be migrated as the inherited metadata from ` +
                                `${identifier.getText()} cannot be converted into a decorator. Please manually
            decorate the class.`,
                        }];
                }
                const newDecorator = this._constructDecoratorFromMetadata(metadata, targetSourceFile);
                if (!newDecorator) {
                    const annotationType = metadata.type;
                    return [{
                            node,
                            message: `Class cannot be migrated as the inherited @${annotationType} decorator ` +
                                `cannot be copied. Please manually add a @${annotationType} decorator.`,
                        }];
                }
                // In case the decorator could be constructed from the resolved metadata, use
                // that decorator for the derived undecorated classes.
                newDecoratorText =
                    this.printer.printNode(ts.EmitHint.Unspecified, newDecorator, targetSourceFile);
                break;
            }
            if (!newDecoratorText) {
                return [{
                        node,
                        message: 'Class cannot be migrated as no directive/component/pipe metadata could be found. ' +
                            'Please manually add a @Directive, @Component or @Pipe decorator.'
                    }];
            }
            this.getUpdateRecorder(targetSourceFile).addClassDecorator(node, newDecoratorText);
            return [];
        }
        /** Records all changes that were made in the import manager. */
        recordChanges() {
            this.importManager.recordChanges();
        }
        /**
         * Constructs a TypeScript decorator node from the specified declaration metadata. Returns
         * null if the metadata could not be simplified/resolved.
         */
        _constructDecoratorFromMetadata(directiveMetadata, targetSourceFile) {
            try {
                const decoratorExpr = convert_directive_metadata_1.convertDirectiveMetadataToExpression(directiveMetadata.metadata, staticSymbol => this.compilerHost
                    .fileNameToModuleName(staticSymbol.filePath, targetSourceFile.fileName)
                    .replace(/\/index$/, ''), (moduleName, name) => this.importManager.addImportToSourceFile(targetSourceFile, name, moduleName), (propertyName, value) => {
                    // Only normalize properties called "changeDetection" and "encapsulation"
                    // for "@Directive" and "@Component" annotations.
                    if (directiveMetadata.type === 'Pipe') {
                        return null;
                    }
                    // Instead of using the number as value for the "changeDetection" and
                    // "encapsulation" properties, we want to use the actual enum symbols.
                    if (propertyName === 'changeDetection' && typeof value === 'number') {
                        return ts.createPropertyAccess(this.importManager.addImportToSourceFile(targetSourceFile, 'ChangeDetectionStrategy', '@angular/core'), core_1.ChangeDetectionStrategy[value]);
                    }
                    else if (propertyName === 'encapsulation' && typeof value === 'number') {
                        return ts.createPropertyAccess(this.importManager.addImportToSourceFile(targetSourceFile, 'ViewEncapsulation', '@angular/core'), core_1.ViewEncapsulation[value]);
                    }
                    return null;
                });
                return ts.createDecorator(ts.createCall(this.importManager.addImportToSourceFile(targetSourceFile, directiveMetadata.type, '@angular/core'), undefined, [decoratorExpr]));
            }
            catch (e) {
                if (e instanceof convert_directive_metadata_1.UnexpectedMetadataValueError) {
                    return null;
                }
                throw e;
            }
        }
        /**
         * Resolves the declaration metadata of a given static symbol. The metadata
         * is determined by resolving metadata for the static symbol.
         */
        _resolveDeclarationMetadata(symbol) {
            try {
                // Note that this call can throw if the metadata is not computable. In that
                // case we are not able to serialize the metadata into a decorator and we return
                // null.
                const annotations = this.compiler.reflector.annotations(symbol).find(s => s.ngMetadataName === 'Component' || s.ngMetadataName === 'Directive' ||
                    s.ngMetadataName === 'Pipe');
                if (!annotations) {
                    return null;
                }
                const { ngMetadataName } = annotations, metadata = __rest(annotations, ["ngMetadataName"]);
                // Delete the "ngMetadataName" property as we don't want to generate
                // a property assignment in the new decorator for that internal property.
                delete metadata['ngMetadataName'];
                return { type: ngMetadataName, metadata };
            }
            catch (e) {
                return null;
            }
        }
        _getStaticSymbolOfIdentifier(node) {
            const sourceFile = node.getSourceFile();
            const resolvedImport = imports_1.getImportOfIdentifier(this.typeChecker, node);
            if (!resolvedImport) {
                return null;
            }
            const moduleName = this.compilerHost.moduleNameToFileName(resolvedImport.importModule, sourceFile.fileName);
            if (!moduleName) {
                return null;
            }
            // Find the declaration symbol as symbols could be aliased due to
            // metadata re-exports.
            return this.compiler.reflector.findSymbolDeclaration(this.symbolResolver.getStaticSymbol(moduleName, resolvedImport.name));
        }
        /**
         * Disables that static symbols are resolved through summaries. Summaries
         * cannot be used for decorator analysis as decorators are omitted in summaries.
         */
        _disableSummaryResolution() {
            // We never want to resolve symbols through summaries. Summaries never contain
            // decorators for class symbols and therefore summaries will cause every class
            // to be considered as undecorated. See reason for this in: "ToJsonSerializer".
            // In order to ensure that metadata is not retrieved through summaries, we
            // need to disable summary resolution, clear previous symbol caches. This way
            // future calls to "StaticReflector#annotations" are based on metadata files.
            this.symbolResolver['_resolveSymbolFromSummary'] = () => null;
            this.symbolResolver['resolvedSymbols'].clear();
            this.symbolResolver['symbolFromFile'].clear();
            this.compiler.reflector['annotationCache'].clear();
            // Original summary resolver used by the AOT compiler.
            const summaryResolver = this.symbolResolver['summaryResolver'];
            // Additionally we need to ensure that no files are treated as "library" files when
            // resolving metadata. This is necessary because by default the symbol resolver discards
            // class metadata for library files. See "StaticSymbolResolver#createResolvedSymbol".
            // Patching this function **only** for the static symbol resolver ensures that metadata
            // is not incorrectly omitted. Note that we only want to do this for the symbol resolver
            // because otherwise we could break the summary loading logic which is used to detect
            // if a static symbol is either a directive, component or pipe (see MetadataResolver).
            this.symbolResolver['summaryResolver'] = {
                fromSummaryFileName: summaryResolver.fromSummaryFileName.bind(summaryResolver),
                addSummary: summaryResolver.addSummary.bind(summaryResolver),
                getImportAs: summaryResolver.getImportAs.bind(summaryResolver),
                getKnownModuleName: summaryResolver.getKnownModuleName.bind(summaryResolver),
                resolveSummary: summaryResolver.resolveSummary.bind(summaryResolver),
                toSummaryFileName: summaryResolver.toSummaryFileName.bind(summaryResolver),
                getSymbolsOf: summaryResolver.getSymbolsOf.bind(summaryResolver),
                isLibraryFile: () => false,
            };
        }
    }
    exports.UndecoratedClassesTransform = UndecoratedClassesTransform;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvdW5kZWNvcmF0ZWQtY2xhc3Nlcy13aXRoLWRpL3RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUgsd0NBQXlFO0lBQ3pFLGlDQUFpQztJQUVqQyxrRkFBeUQ7SUFDekQsZ0ZBQStEO0lBQy9ELG1HQUFnRjtJQUNoRixtR0FBbUY7SUFDbkYsK0VBQXFFO0lBRXJFLDZKQUFrSTtJQUNsSSw2SUFBeUU7SUFDekUsdUlBQXlGO0lBZ0J6RixNQUFhLDJCQUEyQjtRQW9CdEMsWUFDWSxXQUEyQixFQUFVLFFBQXFCLEVBQzFELFNBQTJCLEVBQzNCLGlCQUF3RDtZQUZ4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1lBQzFELGNBQVMsR0FBVCxTQUFTLENBQWtCO1lBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBdUM7WUF0QjVELFlBQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUMvRCxrQkFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hFLHNCQUFpQixHQUNyQixJQUFJLHNDQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQU0vRiw2RUFBNkU7WUFDckUsd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7WUFDN0QsNkVBQTZFO1lB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LGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFL0QsbUZBQW1GO1lBQ25GLHdGQUF3RjtZQUN4RixxRkFBcUY7WUFDckYsdUZBQXVGO1lBQ3ZGLHdGQUF3RjtZQUN4RixxRkFBcUY7WUFDckYsc0ZBQXNGO1lBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBa0M7Z0JBQ3RFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM5RSxVQUFVLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM1RCxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM5RCxrQkFBa0IsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDNUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDcEUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQzFFLFlBQVksRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ2hFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLO2FBQzNCLENBQUM7UUFDSixDQUFDO0tBQ0Y7SUF0YUQsa0VBc2FDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FvdENvbXBpbGVyLCBBb3RDb21waWxlckhvc3QsIENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbFJlc29sdmVyLCBTdW1tYXJ5UmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7UGFydGlhbEV2YWx1YXRvcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbXBvcnRNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9pbXBvcnRfbWFuYWdlcic7XG5pbXBvcnQge2dldEFuZ3VsYXJEZWNvcmF0b3JzfSBmcm9tICcuLi8uLi91dGlscy9uZ19kZWNvcmF0b3JzJztcbmltcG9ydCB7aGFzRXhwbGljaXRDb25zdHJ1Y3Rvcn0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNjcmlwdC9jbGFzc19kZWNsYXJhdGlvbic7XG5pbXBvcnQge2ZpbmRCYXNlQ2xhc3NEZWNsYXJhdGlvbnN9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzY3JpcHQvZmluZF9iYXNlX2NsYXNzZXMnO1xuaW1wb3J0IHtnZXRJbXBvcnRPZklkZW50aWZpZXJ9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzY3JpcHQvaW1wb3J0cyc7XG5cbmltcG9ydCB7Y29udmVydERpcmVjdGl2ZU1ldGFkYXRhVG9FeHByZXNzaW9uLCBVbmV4cGVjdGVkTWV0YWRhdGFWYWx1ZUVycm9yfSBmcm9tICcuL2RlY29yYXRvcl9yZXdyaXRlL2NvbnZlcnRfZGlyZWN0aXZlX21ldGFkYXRhJztcbmltcG9ydCB7RGVjb3JhdG9yUmV3cml0ZXJ9IGZyb20gJy4vZGVjb3JhdG9yX3Jld3JpdGUvZGVjb3JhdG9yX3Jld3JpdGVyJztcbmltcG9ydCB7aGFzRGlyZWN0aXZlRGVjb3JhdG9yLCBoYXNJbmplY3RhYmxlRGVjb3JhdG9yfSBmcm9tICcuL25nX2RlY2xhcmF0aW9uX2NvbGxlY3Rvcic7XG5pbXBvcnQge1VwZGF0ZVJlY29yZGVyfSBmcm9tICcuL3VwZGF0ZV9yZWNvcmRlcic7XG5cblxuXG4vKiogUmVzb2x2ZWQgbWV0YWRhdGEgb2YgYSBkZWNsYXJhdGlvbi4gKi9cbmludGVyZmFjZSBEZWNsYXJhdGlvbk1ldGFkYXRhIHtcbiAgbWV0YWRhdGE6IGFueTtcbiAgdHlwZTogJ0NvbXBvbmVudCd8J0RpcmVjdGl2ZSd8J1BpcGUnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybUZhaWx1cmUge1xuICBub2RlOiB0cy5Ob2RlO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBVbmRlY29yYXRlZENsYXNzZXNUcmFuc2Zvcm0ge1xuICBwcml2YXRlIHByaW50ZXIgPSB0cy5jcmVhdGVQcmludGVyKHtuZXdMaW5lOiB0cy5OZXdMaW5lS2luZC5MaW5lRmVlZH0pO1xuICBwcml2YXRlIGltcG9ydE1hbmFnZXIgPSBuZXcgSW1wb3J0TWFuYWdlcih0aGlzLmdldFVwZGF0ZVJlY29yZGVyLCB0aGlzLnByaW50ZXIpO1xuICBwcml2YXRlIGRlY29yYXRvclJld3JpdGVyID1cbiAgICAgIG5ldyBEZWNvcmF0b3JSZXdyaXRlcih0aGlzLmltcG9ydE1hbmFnZXIsIHRoaXMudHlwZUNoZWNrZXIsIHRoaXMuZXZhbHVhdG9yLCB0aGlzLmNvbXBpbGVyKTtcblxuICBwcml2YXRlIGNvbXBpbGVySG9zdDogQW90Q29tcGlsZXJIb3N0O1xuICBwcml2YXRlIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcjtcbiAgcHJpdmF0ZSBtZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcjtcblxuICAvKiogU2V0IG9mIGNsYXNzIGRlY2xhcmF0aW9ucyB3aGljaCBoYXZlIGJlZW4gZGVjb3JhdGVkIHdpdGggXCJARGlyZWN0aXZlXCIuICovXG4gIHByaXZhdGUgZGVjb3JhdGVkRGlyZWN0aXZlcyA9IG5ldyBTZXQ8dHMuQ2xhc3NEZWNsYXJhdGlvbj4oKTtcbiAgLyoqIFNldCBvZiBjbGFzcyBkZWNsYXJhdGlvbnMgd2hpY2ggaGF2ZSBiZWVuIGRlY29yYXRlZCB3aXRoIFwiQEluamVjdGFibGVcIiAqL1xuICBwcml2YXRlIGRlY29yYXRlZFByb3ZpZGVycyA9IG5ldyBTZXQ8dHMuQ2xhc3NEZWNsYXJhdGlvbj4oKTtcbiAgLyoqXG4gICAqIFNldCBvZiBjbGFzcyBkZWNsYXJhdGlvbnMgd2hpY2ggaGF2ZSBiZWVuIGFuYWx5emVkIGFuZCBuZWVkIHRvIHNwZWNpZnlcbiAgICogYW4gZXhwbGljaXQgY29uc3RydWN0b3IuXG4gICAqL1xuICBwcml2YXRlIG1pc3NpbmdFeHBsaWNpdENvbnN0cnVjdG9yQ2xhc3NlcyA9IG5ldyBTZXQ8dHMuQ2xhc3NEZWNsYXJhdGlvbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBwcml2YXRlIGNvbXBpbGVyOiBBb3RDb21waWxlcixcbiAgICAgIHByaXZhdGUgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yLFxuICAgICAgcHJpdmF0ZSBnZXRVcGRhdGVSZWNvcmRlcjogKHNmOiB0cy5Tb3VyY2VGaWxlKSA9PiBVcGRhdGVSZWNvcmRlcikge1xuICAgIHRoaXMuc3ltYm9sUmVzb2x2ZXIgPSBjb21waWxlclsnX3N5bWJvbFJlc29sdmVyJ107XG4gICAgdGhpcy5jb21waWxlckhvc3QgPSBjb21waWxlclsnX2hvc3QnXTtcbiAgICB0aGlzLm1ldGFkYXRhUmVzb2x2ZXIgPSBjb21waWxlclsnX21ldGFkYXRhUmVzb2x2ZXInXTtcblxuICAgIC8vIFVuc2V0IHRoZSBkZWZhdWx0IGVycm9yIHJlY29yZGVyIHNvIHRoYXQgdGhlIHJlZmxlY3RvciB3aWxsIHRocm93IGFuIGV4Y2VwdGlvblxuICAgIC8vIGlmIG1ldGFkYXRhIGNhbm5vdCBiZSByZXNvbHZlZC5cbiAgICB0aGlzLmNvbXBpbGVyLnJlZmxlY3RvclsnZXJyb3JSZWNvcmRlciddID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRGlzYWJsZXMgdGhhdCBzdGF0aWMgc3ltYm9scyBhcmUgcmVzb2x2ZWQgdGhyb3VnaCBzdW1tYXJpZXMgZnJvbSB3aXRoaW4gdGhlIHN0YXRpY1xuICAgIC8vIHJlZmxlY3Rvci4gU3VtbWFyaWVzIGNhbm5vdCBiZSB1c2VkIGZvciBkZWNvcmF0b3Igc2VyaWFsaXphdGlvbiBhcyBkZWNvcmF0b3JzIGFyZVxuICAgIC8vIG9taXR0ZWQgaW4gc3VtbWFyaWVzIGFuZCB0aGUgZGVjb3JhdG9yIGNhbid0IGJlIHJlY29uc3RydWN0ZWQgZnJvbSB0aGUgZGlyZWN0aXZlIHN1bW1hcnkuXG4gICAgdGhpcy5fZGlzYWJsZVN1bW1hcnlSZXNvbHV0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogTWlncmF0ZXMgZGVjb3JhdGVkIGRpcmVjdGl2ZXMgd2hpY2ggY2FuIHBvdGVudGlhbGx5IGluaGVyaXQgYSBjb25zdHJ1Y3RvclxuICAgKiBmcm9tIGFuIHVuZGVjb3JhdGVkIGJhc2UgY2xhc3MuIEFsbCBiYXNlIGNsYXNzZXMgdW50aWwgdGhlIGZpcnN0IG9uZVxuICAgKiB3aXRoIGFuIGV4cGxpY2l0IGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVjb3JhdGVkIHdpdGggdGhlIGFic3RyYWN0IFwiQERpcmVjdGl2ZSgpXCJcbiAgICogZGVjb3JhdG9yLiBTZWUgY2FzZSAxIGluIHRoZSBtaWdyYXRpb24gcGxhbjogaHR0cHM6Ly9oYWNrbWQuaW8vQGFseC9TMVhLcU1aZVNcbiAgICovXG4gIG1pZ3JhdGVEZWNvcmF0ZWREaXJlY3RpdmVzKGRpcmVjdGl2ZXM6IHRzLkNsYXNzRGVjbGFyYXRpb25bXSk6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXMucmVkdWNlKFxuICAgICAgICAoZmFpbHVyZXMsIG5vZGUpID0+IGZhaWx1cmVzLmNvbmNhdCh0aGlzLl9taWdyYXRlRGlyZWN0aXZlQmFzZUNsYXNzKG5vZGUpKSxcbiAgICAgICAgW10gYXMgVHJhbnNmb3JtRmFpbHVyZVtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBkZWNvcmF0ZWQgcHJvdmlkZXJzIHdoaWNoIGNhbiBwb3RlbnRpYWxseSBpbmhlcml0IGEgY29uc3RydWN0b3JcbiAgICogZnJvbSBhbiB1bmRlY29yYXRlZCBiYXNlIGNsYXNzLiBBbGwgYmFzZSBjbGFzc2VzIHVudGlsIHRoZSBmaXJzdCBvbmVcbiAgICogd2l0aCBhbiBleHBsaWNpdCBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlY29yYXRlZCB3aXRoIHRoZSBcIkBJbmplY3RhYmxlKClcIi5cbiAgICovXG4gIG1pZ3JhdGVEZWNvcmF0ZWRQcm92aWRlcnMocHJvdmlkZXJzOiB0cy5DbGFzc0RlY2xhcmF0aW9uW10pOiBUcmFuc2Zvcm1GYWlsdXJlW10ge1xuICAgIHJldHVybiBwcm92aWRlcnMucmVkdWNlKFxuICAgICAgICAoZmFpbHVyZXMsIG5vZGUpID0+IGZhaWx1cmVzLmNvbmNhdCh0aGlzLl9taWdyYXRlUHJvdmlkZXJCYXNlQ2xhc3Mobm9kZSkpLFxuICAgICAgICBbXSBhcyBUcmFuc2Zvcm1GYWlsdXJlW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWlncmF0ZVByb3ZpZGVyQmFzZUNsYXNzKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24pOiBUcmFuc2Zvcm1GYWlsdXJlW10ge1xuICAgIHJldHVybiB0aGlzLl9taWdyYXRlRGVjb3JhdGVkQ2xhc3NXaXRoSW5oZXJpdGVkQ3RvcihcbiAgICAgICAgbm9kZSwgc3ltYm9sID0+IHRoaXMubWV0YWRhdGFSZXNvbHZlci5pc0luamVjdGFibGUoc3ltYm9sKSxcbiAgICAgICAgbm9kZSA9PiB0aGlzLl9hZGRJbmplY3RhYmxlRGVjb3JhdG9yKG5vZGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX21pZ3JhdGVEaXJlY3RpdmVCYXNlQ2xhc3Mobm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21pZ3JhdGVEZWNvcmF0ZWRDbGFzc1dpdGhJbmhlcml0ZWRDdG9yKFxuICAgICAgICBub2RlLCBzeW1ib2wgPT4gdGhpcy5tZXRhZGF0YVJlc29sdmVyLmlzRGlyZWN0aXZlKHN5bWJvbCksXG4gICAgICAgIG5vZGUgPT4gdGhpcy5fYWRkQWJzdHJhY3REaXJlY3RpdmVEZWNvcmF0b3Iobm9kZSkpO1xuICB9XG5cblxuICBwcml2YXRlIF9taWdyYXRlRGVjb3JhdGVkQ2xhc3NXaXRoSW5oZXJpdGVkQ3RvcihcbiAgICAgIG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24sIGlzQ2xhc3NEZWNvcmF0ZWQ6IChzeW1ib2w6IFN0YXRpY1N5bWJvbCkgPT4gYm9vbGVhbixcbiAgICAgIGFkZENsYXNzRGVjb3JhdG9yOiAobm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbikgPT4gdm9pZCk6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgLy8gSW4gY2FzZSB0aGUgcHJvdmlkZXIgaGFzIGFuIGV4cGxpY2l0IGNvbnN0cnVjdG9yLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgLy8gYmVjYXVzZSB0aGUgY2xhc3MgaXMgYWxyZWFkeSBkZWNvcmF0ZWQgYW5kIGRvZXMgbm90IGluaGVyaXQgYSBjb25zdHJ1Y3Rvci5cbiAgICBpZiAoaGFzRXhwbGljaXRDb25zdHJ1Y3Rvcihub2RlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyZWRCYXNlQ2xhc3NlcyA9IGZpbmRCYXNlQ2xhc3NEZWNsYXJhdGlvbnMobm9kZSwgdGhpcy50eXBlQ2hlY2tlcik7XG4gICAgY29uc3QgdW5kZWNvcmF0ZWRCYXNlQ2xhc3NlczogdHMuQ2xhc3NEZWNsYXJhdGlvbltdID0gW107XG5cbiAgICBmb3IgKGxldCB7bm9kZTogYmFzZUNsYXNzLCBpZGVudGlmaWVyfSBvZiBvcmRlcmVkQmFzZUNsYXNzZXMpIHtcbiAgICAgIGNvbnN0IGJhc2VDbGFzc0ZpbGUgPSBiYXNlQ2xhc3MuZ2V0U291cmNlRmlsZSgpO1xuXG4gICAgICBpZiAoaGFzRXhwbGljaXRDb25zdHJ1Y3RvcihiYXNlQ2xhc3MpKSB7XG4gICAgICAgIC8vIEFsbCBjbGFzc2VzIGluIGJldHdlZW4gdGhlIGRlY29yYXRlZCBjbGFzcyBhbmQgdGhlIHVuZGVjb3JhdGVkIGNsYXNzXG4gICAgICAgIC8vIHRoYXQgZGVmaW5lcyB0aGUgY29uc3RydWN0b3IgbmVlZCB0byBiZSBkZWNvcmF0ZWQgYXMgd2VsbC5cbiAgICAgICAgdW5kZWNvcmF0ZWRCYXNlQ2xhc3Nlcy5mb3JFYWNoKGIgPT4gYWRkQ2xhc3NEZWNvcmF0b3IoYikpO1xuXG4gICAgICAgIGlmIChiYXNlQ2xhc3NGaWxlLmlzRGVjbGFyYXRpb25GaWxlKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGljU3ltYm9sID0gdGhpcy5fZ2V0U3RhdGljU3ltYm9sT2ZJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGJhc2UgY2xhc3MgaXMgZGVjb3JhdGVkIHRocm91Z2ggbWV0YWRhdGEgZmlsZXMsIHdlIGRvbid0XG4gICAgICAgICAgLy8gbmVlZCB0byBhZGQgYSBjb21tZW50IHRvIHRoZSBkZXJpdmVkIGNsYXNzIGZvciB0aGUgZXh0ZXJuYWwgYmFzZSBjbGFzcy5cbiAgICAgICAgICBpZiAoc3RhdGljU3ltYm9sICYmIGlzQ2xhc3NEZWNvcmF0ZWQoc3RhdGljU3ltYm9sKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRmluZCB0aGUgbGFzdCBjbGFzcyBpbiB0aGUgaW5oZXJpdGFuY2UgY2hhaW4gdGhhdCBpcyBkZWNvcmF0ZWQgYW5kIHdpbGwgYmVcbiAgICAgICAgICAvLyB1c2VkIGFzIGFuY2hvciBmb3IgYSBjb21tZW50IGV4cGxhaW5pbmcgdGhhdCB0aGUgY2xhc3MgdGhhdCBkZWZpbmVzIHRoZVxuICAgICAgICAgIC8vIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBkZWNvcmF0ZWQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBjb25zdCBsYXN0RGVjb3JhdGVkQ2xhc3MgPVxuICAgICAgICAgICAgICB1bmRlY29yYXRlZEJhc2VDbGFzc2VzW3VuZGVjb3JhdGVkQmFzZUNsYXNzZXMubGVuZ3RoIC0gMV0gfHwgbm9kZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkTWlzc2luZ0V4cGxpY2l0Q29uc3RydWN0b3JUb2RvKGxhc3REZWNvcmF0ZWRDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWNvcmF0ZSB0aGUgY2xhc3MgdGhhdCBkZWZpbmVzIHRoZSBjb25zdHJ1Y3RvciB0aGF0IGlzIGluaGVyaXRlZC5cbiAgICAgICAgYWRkQ2xhc3NEZWNvcmF0b3IoYmFzZUNsYXNzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgY2xhc3MgZGVjb3JhdG9yIGZvciBhbGwgYmFzZSBjbGFzc2VzIGluIHRoZSBpbmhlcml0YW5jZSBjaGFpbiB1bnRpbFxuICAgICAgLy8gdGhlIGJhc2UgY2xhc3Mgd2l0aCB0aGUgZXhwbGljaXQgY29uc3RydWN0b3IuIFRoZSBkZWNvcmF0b3Igd2lsbCBiZSBvbmx5XG4gICAgICAvLyBhZGRlZCBmb3IgYmFzZSBjbGFzc2VzIHdoaWNoIGNhbiBiZSBtb2RpZmllZC5cbiAgICAgIGlmICghYmFzZUNsYXNzRmlsZS5pc0RlY2xhcmF0aW9uRmlsZSkge1xuICAgICAgICB1bmRlY29yYXRlZEJhc2VDbGFzc2VzLnB1c2goYmFzZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGFic3RyYWN0IFwiQERpcmVjdGl2ZSgpXCIgZGVjb3JhdG9yIHRvIHRoZSBnaXZlbiBjbGFzcyBpbiBjYXNlIHRoZXJlXG4gICAqIGlzIG5vIGV4aXN0aW5nIGRpcmVjdGl2ZSBkZWNvcmF0b3IuXG4gICAqL1xuICBwcml2YXRlIF9hZGRBYnN0cmFjdERpcmVjdGl2ZURlY29yYXRvcihiYXNlQ2xhc3M6IHRzLkNsYXNzRGVjbGFyYXRpb24pIHtcbiAgICBpZiAoaGFzRGlyZWN0aXZlRGVjb3JhdG9yKGJhc2VDbGFzcywgdGhpcy50eXBlQ2hlY2tlcikgfHxcbiAgICAgICAgdGhpcy5kZWNvcmF0ZWREaXJlY3RpdmVzLmhhcyhiYXNlQ2xhc3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYmFzZUNsYXNzRmlsZSA9IGJhc2VDbGFzcy5nZXRTb3VyY2VGaWxlKCk7XG4gICAgY29uc3QgcmVjb3JkZXIgPSB0aGlzLmdldFVwZGF0ZVJlY29yZGVyKGJhc2VDbGFzc0ZpbGUpO1xuICAgIGNvbnN0IGRpcmVjdGl2ZUV4cHIgPVxuICAgICAgICB0aGlzLmltcG9ydE1hbmFnZXIuYWRkSW1wb3J0VG9Tb3VyY2VGaWxlKGJhc2VDbGFzc0ZpbGUsICdEaXJlY3RpdmUnLCAnQGFuZ3VsYXIvY29yZScpO1xuXG4gICAgY29uc3QgbmV3RGVjb3JhdG9yID0gdHMuY3JlYXRlRGVjb3JhdG9yKHRzLmNyZWF0ZUNhbGwoZGlyZWN0aXZlRXhwciwgdW5kZWZpbmVkLCBbXSkpO1xuICAgIGNvbnN0IG5ld0RlY29yYXRvclRleHQgPVxuICAgICAgICB0aGlzLnByaW50ZXIucHJpbnROb2RlKHRzLkVtaXRIaW50LlVuc3BlY2lmaWVkLCBuZXdEZWNvcmF0b3IsIGJhc2VDbGFzc0ZpbGUpO1xuXG4gICAgcmVjb3JkZXIuYWRkQ2xhc3NEZWNvcmF0b3IoYmFzZUNsYXNzLCBuZXdEZWNvcmF0b3JUZXh0KTtcbiAgICB0aGlzLmRlY29yYXRlZERpcmVjdGl2ZXMuYWRkKGJhc2VDbGFzcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgYWJzdHJhY3QgXCJASW5qZWN0YWJsZSgpXCIgZGVjb3JhdG9yIHRvIHRoZSBnaXZlbiBjbGFzcyBpbiBjYXNlIHRoZXJlXG4gICAqIGlzIG5vIGV4aXN0aW5nIGRpcmVjdGl2ZSBkZWNvcmF0b3IuXG4gICAqL1xuICBwcml2YXRlIF9hZGRJbmplY3RhYmxlRGVjb3JhdG9yKGJhc2VDbGFzczogdHMuQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgIGlmIChoYXNJbmplY3RhYmxlRGVjb3JhdG9yKGJhc2VDbGFzcywgdGhpcy50eXBlQ2hlY2tlcikgfHxcbiAgICAgICAgdGhpcy5kZWNvcmF0ZWRQcm92aWRlcnMuaGFzKGJhc2VDbGFzcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlQ2xhc3NGaWxlID0gYmFzZUNsYXNzLmdldFNvdXJjZUZpbGUoKTtcbiAgICBjb25zdCByZWNvcmRlciA9IHRoaXMuZ2V0VXBkYXRlUmVjb3JkZXIoYmFzZUNsYXNzRmlsZSk7XG4gICAgY29uc3QgaW5qZWN0YWJsZUV4cHIgPVxuICAgICAgICB0aGlzLmltcG9ydE1hbmFnZXIuYWRkSW1wb3J0VG9Tb3VyY2VGaWxlKGJhc2VDbGFzc0ZpbGUsICdJbmplY3RhYmxlJywgJ0Bhbmd1bGFyL2NvcmUnKTtcblxuICAgIGNvbnN0IG5ld0RlY29yYXRvciA9IHRzLmNyZWF0ZURlY29yYXRvcih0cy5jcmVhdGVDYWxsKGluamVjdGFibGVFeHByLCB1bmRlZmluZWQsIFtdKSk7XG4gICAgY29uc3QgbmV3RGVjb3JhdG9yVGV4dCA9XG4gICAgICAgIHRoaXMucHJpbnRlci5wcmludE5vZGUodHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIG5ld0RlY29yYXRvciwgYmFzZUNsYXNzRmlsZSk7XG5cbiAgICByZWNvcmRlci5hZGRDbGFzc0RlY29yYXRvcihiYXNlQ2xhc3MsIG5ld0RlY29yYXRvclRleHQpO1xuICAgIHRoaXMuZGVjb3JhdGVkUHJvdmlkZXJzLmFkZChiYXNlQ2xhc3MpO1xuICB9XG5cbiAgLyoqIEFkZHMgYSBjb21tZW50IGZvciBhZGRpbmcgYW4gZXhwbGljaXQgY29uc3RydWN0b3IgdG8gdGhlIGdpdmVuIGNsYXNzIGRlY2xhcmF0aW9uLiAqL1xuICBwcml2YXRlIF9hZGRNaXNzaW5nRXhwbGljaXRDb25zdHJ1Y3RvclRvZG8obm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgLy8gSW4gY2FzZSBhIHRvZG8gY29tbWVudCBoYXMgYmVlbiBhbHJlYWR5IGluc2VydGVkIHRvIHRoZSBnaXZlbiBjbGFzcywgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGFkZCBhIGNvbW1lbnQgb3IgdHJhbnNmb3JtIGZhaWx1cmUgbXVsdGlwbGUgdGltZXMuXG4gICAgaWYgKHRoaXMubWlzc2luZ0V4cGxpY2l0Q29uc3RydWN0b3JDbGFzc2VzLmhhcyhub2RlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB0aGlzLm1pc3NpbmdFeHBsaWNpdENvbnN0cnVjdG9yQ2xhc3Nlcy5hZGQobm9kZSk7XG4gICAgY29uc3QgcmVjb3JkZXIgPSB0aGlzLmdldFVwZGF0ZVJlY29yZGVyKG5vZGUuZ2V0U291cmNlRmlsZSgpKTtcbiAgICByZWNvcmRlci5hZGRDbGFzc0NvbW1lbnQobm9kZSwgJ1RPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiBbe25vZGU6IG5vZGUsIG1lc3NhZ2U6ICdDbGFzcyBuZWVkcyB0byBkZWNsYXJlIGFuIGV4cGxpY2l0IGNvbnN0cnVjdG9yLid9XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyB1bmRlY29yYXRlZCBkaXJlY3RpdmVzIHdoaWNoIHdlcmUgcmVmZXJlbmNlZCBpbiBOZ01vZHVsZSBkZWNsYXJhdGlvbnMuXG4gICAqIFRoZXNlIGRpcmVjdGl2ZXMgaW5oZXJpdCB0aGUgbWV0YWRhdGEgZnJvbSBhIHBhcmVudCBiYXNlIGNsYXNzLCBidXQgd2l0aCBJdnlcbiAgICogdGhlc2UgY2xhc3NlcyBuZWVkIHRvIGV4cGxpY2l0bHkgaGF2ZSBhIGRlY29yYXRvciBmb3IgbG9jYWxpdHkuIFRoZSBtaWdyYXRpb25cbiAgICogZGV0ZXJtaW5lcyB0aGUgaW5oZXJpdGVkIGRlY29yYXRvciBhbmQgY29waWVzIGl0IHRvIHRoZSB1bmRlY29yYXRlZCBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBtaWdyYXRpb24gc2VyaWFsaXplcyB0aGUgbWV0YWRhdGEgZm9yIGV4dGVybmFsIGRlY2xhcmF0aW9uc1xuICAgKiB3aGVyZSB0aGUgZGVjb3JhdG9yIGlzIG5vdCBwYXJ0IG9mIHRoZSBzb3VyY2UgZmlsZSBBU1QuXG4gICAqXG4gICAqIFNlZSBjYXNlIDIgaW4gdGhlIG1pZ3JhdGlvbiBwbGFuOiBodHRwczovL2hhY2ttZC5pby9AYWx4L1MxWEtxTVplU1xuICAgKi9cbiAgbWlncmF0ZVVuZGVjb3JhdGVkRGVjbGFyYXRpb25zKGRpcmVjdGl2ZXM6IHRzLkNsYXNzRGVjbGFyYXRpb25bXSk6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXMucmVkdWNlKFxuICAgICAgICAoZmFpbHVyZXMsIG5vZGUpID0+IGZhaWx1cmVzLmNvbmNhdCh0aGlzLl9taWdyYXRlRGVyaXZlZERlY2xhcmF0aW9uKG5vZGUpKSxcbiAgICAgICAgW10gYXMgVHJhbnNmb3JtRmFpbHVyZVtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX21pZ3JhdGVEZXJpdmVkRGVjbGFyYXRpb24obm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IFRyYW5zZm9ybUZhaWx1cmVbXSB7XG4gICAgY29uc3QgdGFyZ2V0U291cmNlRmlsZSA9IG5vZGUuZ2V0U291cmNlRmlsZSgpO1xuICAgIGNvbnN0IG9yZGVyZWRCYXNlQ2xhc3NlcyA9IGZpbmRCYXNlQ2xhc3NEZWNsYXJhdGlvbnMobm9kZSwgdGhpcy50eXBlQ2hlY2tlcik7XG4gICAgbGV0IG5ld0RlY29yYXRvclRleHQ6IHN0cmluZ3xudWxsID0gbnVsbDtcblxuICAgIGZvciAobGV0IHtub2RlOiBiYXNlQ2xhc3MsIGlkZW50aWZpZXJ9IG9mIG9yZGVyZWRCYXNlQ2xhc3Nlcykge1xuICAgICAgLy8gQmVmb3JlIGxvb2tpbmcgZm9yIGRlY29yYXRvcnMgd2l0aGluIHRoZSBtZXRhZGF0YSBvciBzdW1tYXJ5IGZpbGVzLCB3ZVxuICAgICAgLy8gdHJ5IHRvIGRldGVybWluZSB0aGUgZGlyZWN0aXZlIGRlY29yYXRvciB0aHJvdWdoIHRoZSBzb3VyY2UgZmlsZSBBU1QuXG4gICAgICBpZiAoYmFzZUNsYXNzLmRlY29yYXRvcnMpIHtcbiAgICAgICAgY29uc3QgbmdEZWNvcmF0b3IgPVxuICAgICAgICAgICAgZ2V0QW5ndWxhckRlY29yYXRvcnModGhpcy50eXBlQ2hlY2tlciwgYmFzZUNsYXNzLmRlY29yYXRvcnMpXG4gICAgICAgICAgICAgICAgLmZpbmQoKHtuYW1lfSkgPT4gbmFtZSA9PT0gJ0NvbXBvbmVudCcgfHwgbmFtZSA9PT0gJ0RpcmVjdGl2ZScgfHwgbmFtZSA9PT0gJ1BpcGUnKTtcblxuICAgICAgICBpZiAobmdEZWNvcmF0b3IpIHtcbiAgICAgICAgICBjb25zdCBuZXdEZWNvcmF0b3IgPSB0aGlzLmRlY29yYXRvclJld3JpdGVyLnJld3JpdGUobmdEZWNvcmF0b3IsIG5vZGUuZ2V0U291cmNlRmlsZSgpKTtcbiAgICAgICAgICBuZXdEZWNvcmF0b3JUZXh0ID0gdGhpcy5wcmludGVyLnByaW50Tm9kZShcbiAgICAgICAgICAgICAgdHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIG5ld0RlY29yYXRvciwgbmdEZWNvcmF0b3Iubm9kZS5nZXRTb3VyY2VGaWxlKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIG1ldGFkYXRhIGNvdWxkIGJlIGZvdW5kIHdpdGhpbiB0aGUgc291cmNlLWZpbGUgQVNULCB0cnkgdG8gZmluZFxuICAgICAgLy8gZGVjb3JhdG9yIGRhdGEgdGhyb3VnaCBBbmd1bGFyIG1ldGFkYXRhIGFuZCBzdW1tYXJ5IGZpbGVzLlxuICAgICAgY29uc3Qgc3RhdGljU3ltYm9sID0gdGhpcy5fZ2V0U3RhdGljU3ltYm9sT2ZJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgc3RhdGljIHN5bWJvbCByZXNvbHZlcyB0byBhIGNsYXNzIGRlY2xhcmF0aW9uIHdpdGhcbiAgICAgIC8vIHBpcGUgb3IgZGlyZWN0aXZlIG1ldGFkYXRhLlxuICAgICAgaWYgKCFzdGF0aWNTeW1ib2wgfHxcbiAgICAgICAgICAhKHRoaXMubWV0YWRhdGFSZXNvbHZlci5pc1BpcGUoc3RhdGljU3ltYm9sKSB8fFxuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVJlc29sdmVyLmlzRGlyZWN0aXZlKHN0YXRpY1N5bWJvbCkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuX3Jlc29sdmVEZWNsYXJhdGlvbk1ldGFkYXRhKHN0YXRpY1N5bWJvbCk7XG5cbiAgICAgIC8vIElmIG5vIG1ldGFkYXRhIGNvdWxkIGJlIHJlc29sdmVkIGZvciB0aGUgc3RhdGljIHN5bWJvbCwgcHJpbnQgYSBmYWlsdXJlIG1lc3NhZ2VcbiAgICAgIC8vIGFuZCBhc2sgdGhlIGRldmVsb3BlciB0byBtYW51YWxseSBtaWdyYXRlIHRoZSBjbGFzcy4gVGhpcyBjYXNlIGlzIHJhcmUgYmVjYXVzZVxuICAgICAgLy8gdXN1YWxseSBkZWNvcmF0b3IgbWV0YWRhdGEgaXMgYWx3YXlzIHByZXNlbnQgYnV0IGp1c3QgY2FuJ3QgYmUgcmVhZCBpZiBhIHByb2dyYW1cbiAgICAgIC8vIG9ubHkgaGFzIGFjY2VzcyB0byBzdW1tYXJpZXMgKHRoaXMgaXMgYSBzcGVjaWFsIGNhc2UgaW4gZ29vZ2xlMykuXG4gICAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgbWVzc2FnZTogYENsYXNzIGNhbm5vdCBiZSBtaWdyYXRlZCBhcyB0aGUgaW5oZXJpdGVkIG1ldGFkYXRhIGZyb20gYCArXG4gICAgICAgICAgICAgIGAke2lkZW50aWZpZXIuZ2V0VGV4dCgpfSBjYW5ub3QgYmUgY29udmVydGVkIGludG8gYSBkZWNvcmF0b3IuIFBsZWFzZSBtYW51YWxseVxuICAgICAgICAgICAgZGVjb3JhdGUgdGhlIGNsYXNzLmAsXG4gICAgICAgIH1dO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEZWNvcmF0b3IgPSB0aGlzLl9jb25zdHJ1Y3REZWNvcmF0b3JGcm9tTWV0YWRhdGEobWV0YWRhdGEsIHRhcmdldFNvdXJjZUZpbGUpO1xuICAgICAgaWYgKCFuZXdEZWNvcmF0b3IpIHtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvblR5cGUgPSBtZXRhZGF0YS50eXBlO1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG1lc3NhZ2U6IGBDbGFzcyBjYW5ub3QgYmUgbWlncmF0ZWQgYXMgdGhlIGluaGVyaXRlZCBAJHthbm5vdGF0aW9uVHlwZX0gZGVjb3JhdG9yIGAgK1xuICAgICAgICAgICAgICBgY2Fubm90IGJlIGNvcGllZC4gUGxlYXNlIG1hbnVhbGx5IGFkZCBhIEAke2Fubm90YXRpb25UeXBlfSBkZWNvcmF0b3IuYCxcbiAgICAgICAgfV07XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGNhc2UgdGhlIGRlY29yYXRvciBjb3VsZCBiZSBjb25zdHJ1Y3RlZCBmcm9tIHRoZSByZXNvbHZlZCBtZXRhZGF0YSwgdXNlXG4gICAgICAvLyB0aGF0IGRlY29yYXRvciBmb3IgdGhlIGRlcml2ZWQgdW5kZWNvcmF0ZWQgY2xhc3Nlcy5cbiAgICAgIG5ld0RlY29yYXRvclRleHQgPVxuICAgICAgICAgIHRoaXMucHJpbnRlci5wcmludE5vZGUodHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIG5ld0RlY29yYXRvciwgdGFyZ2V0U291cmNlRmlsZSk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIW5ld0RlY29yYXRvclRleHQpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBub2RlLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ0NsYXNzIGNhbm5vdCBiZSBtaWdyYXRlZCBhcyBubyBkaXJlY3RpdmUvY29tcG9uZW50L3BpcGUgbWV0YWRhdGEgY291bGQgYmUgZm91bmQuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSBtYW51YWxseSBhZGQgYSBARGlyZWN0aXZlLCBAQ29tcG9uZW50IG9yIEBQaXBlIGRlY29yYXRvci4nXG4gICAgICB9XTtcbiAgICB9XG5cbiAgICB0aGlzLmdldFVwZGF0ZVJlY29yZGVyKHRhcmdldFNvdXJjZUZpbGUpLmFkZENsYXNzRGVjb3JhdG9yKG5vZGUsIG5ld0RlY29yYXRvclRleHQpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKiBSZWNvcmRzIGFsbCBjaGFuZ2VzIHRoYXQgd2VyZSBtYWRlIGluIHRoZSBpbXBvcnQgbWFuYWdlci4gKi9cbiAgcmVjb3JkQ2hhbmdlcygpIHtcbiAgICB0aGlzLmltcG9ydE1hbmFnZXIucmVjb3JkQ2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBUeXBlU2NyaXB0IGRlY29yYXRvciBub2RlIGZyb20gdGhlIHNwZWNpZmllZCBkZWNsYXJhdGlvbiBtZXRhZGF0YS4gUmV0dXJuc1xuICAgKiBudWxsIGlmIHRoZSBtZXRhZGF0YSBjb3VsZCBub3QgYmUgc2ltcGxpZmllZC9yZXNvbHZlZC5cbiAgICovXG4gIHByaXZhdGUgX2NvbnN0cnVjdERlY29yYXRvckZyb21NZXRhZGF0YShcbiAgICAgIGRpcmVjdGl2ZU1ldGFkYXRhOiBEZWNsYXJhdGlvbk1ldGFkYXRhLCB0YXJnZXRTb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKTogdHMuRGVjb3JhdG9yfG51bGwge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWNvcmF0b3JFeHByID0gY29udmVydERpcmVjdGl2ZU1ldGFkYXRhVG9FeHByZXNzaW9uKFxuICAgICAgICAgIGRpcmVjdGl2ZU1ldGFkYXRhLm1ldGFkYXRhLFxuICAgICAgICAgIHN0YXRpY1N5bWJvbCA9PlxuICAgICAgICAgICAgICB0aGlzLmNvbXBpbGVySG9zdFxuICAgICAgICAgICAgICAgICAgLmZpbGVOYW1lVG9Nb2R1bGVOYW1lKHN0YXRpY1N5bWJvbC5maWxlUGF0aCwgdGFyZ2V0U291cmNlRmlsZS5maWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9pbmRleCQvLCAnJyksXG4gICAgICAgICAgKG1vZHVsZU5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICB0aGlzLmltcG9ydE1hbmFnZXIuYWRkSW1wb3J0VG9Tb3VyY2VGaWxlKHRhcmdldFNvdXJjZUZpbGUsIG5hbWUsIG1vZHVsZU5hbWUpLFxuICAgICAgICAgIChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IG5vcm1hbGl6ZSBwcm9wZXJ0aWVzIGNhbGxlZCBcImNoYW5nZURldGVjdGlvblwiIGFuZCBcImVuY2Fwc3VsYXRpb25cIlxuICAgICAgICAgICAgLy8gZm9yIFwiQERpcmVjdGl2ZVwiIGFuZCBcIkBDb21wb25lbnRcIiBhbm5vdGF0aW9ucy5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmVNZXRhZGF0YS50eXBlID09PSAnUGlwZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgdXNpbmcgdGhlIG51bWJlciBhcyB2YWx1ZSBmb3IgdGhlIFwiY2hhbmdlRGV0ZWN0aW9uXCIgYW5kXG4gICAgICAgICAgICAvLyBcImVuY2Fwc3VsYXRpb25cIiBwcm9wZXJ0aWVzLCB3ZSB3YW50IHRvIHVzZSB0aGUgYWN0dWFsIGVudW0gc3ltYm9scy5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdjaGFuZ2VEZXRlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRzLmNyZWF0ZVByb3BlcnR5QWNjZXNzKFxuICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRNYW5hZ2VyLmFkZEltcG9ydFRvU291cmNlRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRTb3VyY2VGaWxlLCAnQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3knLCAnQGFuZ3VsYXIvY29yZScpLFxuICAgICAgICAgICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lbdmFsdWVdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAnZW5jYXBzdWxhdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICByZXR1cm4gdHMuY3JlYXRlUHJvcGVydHlBY2Nlc3MoXG4gICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydE1hbmFnZXIuYWRkSW1wb3J0VG9Tb3VyY2VGaWxlKFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNvdXJjZUZpbGUsICdWaWV3RW5jYXBzdWxhdGlvbicsICdAYW5ndWxhci9jb3JlJyksXG4gICAgICAgICAgICAgICAgICBWaWV3RW5jYXBzdWxhdGlvblt2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0cy5jcmVhdGVEZWNvcmF0b3IodHMuY3JlYXRlQ2FsbChcbiAgICAgICAgICB0aGlzLmltcG9ydE1hbmFnZXIuYWRkSW1wb3J0VG9Tb3VyY2VGaWxlKFxuICAgICAgICAgICAgICB0YXJnZXRTb3VyY2VGaWxlLCBkaXJlY3RpdmVNZXRhZGF0YS50eXBlLCAnQGFuZ3VsYXIvY29yZScpLFxuICAgICAgICAgIHVuZGVmaW5lZCwgW2RlY29yYXRvckV4cHJdKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbmV4cGVjdGVkTWV0YWRhdGFWYWx1ZUVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIGRlY2xhcmF0aW9uIG1ldGFkYXRhIG9mIGEgZ2l2ZW4gc3RhdGljIHN5bWJvbC4gVGhlIG1ldGFkYXRhXG4gICAqIGlzIGRldGVybWluZWQgYnkgcmVzb2x2aW5nIG1ldGFkYXRhIGZvciB0aGUgc3RhdGljIHN5bWJvbC5cbiAgICovXG4gIHByaXZhdGUgX3Jlc29sdmVEZWNsYXJhdGlvbk1ldGFkYXRhKHN5bWJvbDogU3RhdGljU3ltYm9sKTogbnVsbHxEZWNsYXJhdGlvbk1ldGFkYXRhIHtcbiAgICB0cnkge1xuICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2FsbCBjYW4gdGhyb3cgaWYgdGhlIG1ldGFkYXRhIGlzIG5vdCBjb21wdXRhYmxlLiBJbiB0aGF0XG4gICAgICAvLyBjYXNlIHdlIGFyZSBub3QgYWJsZSB0byBzZXJpYWxpemUgdGhlIG1ldGFkYXRhIGludG8gYSBkZWNvcmF0b3IgYW5kIHdlIHJldHVyblxuICAgICAgLy8gbnVsbC5cbiAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5jb21waWxlci5yZWZsZWN0b3IuYW5ub3RhdGlvbnMoc3ltYm9sKS5maW5kKFxuICAgICAgICAgIHMgPT4gcy5uZ01ldGFkYXRhTmFtZSA9PT0gJ0NvbXBvbmVudCcgfHwgcy5uZ01ldGFkYXRhTmFtZSA9PT0gJ0RpcmVjdGl2ZScgfHxcbiAgICAgICAgICAgICAgcy5uZ01ldGFkYXRhTmFtZSA9PT0gJ1BpcGUnKTtcblxuICAgICAgaWYgKCFhbm5vdGF0aW9ucykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge25nTWV0YWRhdGFOYW1lLCAuLi5tZXRhZGF0YX0gPSBhbm5vdGF0aW9ucztcblxuICAgICAgLy8gRGVsZXRlIHRoZSBcIm5nTWV0YWRhdGFOYW1lXCIgcHJvcGVydHkgYXMgd2UgZG9uJ3Qgd2FudCB0byBnZW5lcmF0ZVxuICAgICAgLy8gYSBwcm9wZXJ0eSBhc3NpZ25tZW50IGluIHRoZSBuZXcgZGVjb3JhdG9yIGZvciB0aGF0IGludGVybmFsIHByb3BlcnR5LlxuICAgICAgZGVsZXRlIG1ldGFkYXRhWyduZ01ldGFkYXRhTmFtZSddO1xuXG4gICAgICByZXR1cm4ge3R5cGU6IG5nTWV0YWRhdGFOYW1lLCBtZXRhZGF0YX07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RhdGljU3ltYm9sT2ZJZGVudGlmaWVyKG5vZGU6IHRzLklkZW50aWZpZXIpOiBTdGF0aWNTeW1ib2x8bnVsbCB7XG4gICAgY29uc3Qgc291cmNlRmlsZSA9IG5vZGUuZ2V0U291cmNlRmlsZSgpO1xuICAgIGNvbnN0IHJlc29sdmVkSW1wb3J0ID0gZ2V0SW1wb3J0T2ZJZGVudGlmaWVyKHRoaXMudHlwZUNoZWNrZXIsIG5vZGUpO1xuXG4gICAgaWYgKCFyZXNvbHZlZEltcG9ydCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kdWxlTmFtZSA9XG4gICAgICAgIHRoaXMuY29tcGlsZXJIb3N0Lm1vZHVsZU5hbWVUb0ZpbGVOYW1lKHJlc29sdmVkSW1wb3J0LmltcG9ydE1vZHVsZSwgc291cmNlRmlsZS5maWxlTmFtZSk7XG5cbiAgICBpZiAoIW1vZHVsZU5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGRlY2xhcmF0aW9uIHN5bWJvbCBhcyBzeW1ib2xzIGNvdWxkIGJlIGFsaWFzZWQgZHVlIHRvXG4gICAgLy8gbWV0YWRhdGEgcmUtZXhwb3J0cy5cbiAgICByZXR1cm4gdGhpcy5jb21waWxlci5yZWZsZWN0b3IuZmluZFN5bWJvbERlY2xhcmF0aW9uKFxuICAgICAgICB0aGlzLnN5bWJvbFJlc29sdmVyLmdldFN0YXRpY1N5bWJvbChtb2R1bGVOYW1lLCByZXNvbHZlZEltcG9ydC5uYW1lKSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhhdCBzdGF0aWMgc3ltYm9scyBhcmUgcmVzb2x2ZWQgdGhyb3VnaCBzdW1tYXJpZXMuIFN1bW1hcmllc1xuICAgKiBjYW5ub3QgYmUgdXNlZCBmb3IgZGVjb3JhdG9yIGFuYWx5c2lzIGFzIGRlY29yYXRvcnMgYXJlIG9taXR0ZWQgaW4gc3VtbWFyaWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZGlzYWJsZVN1bW1hcnlSZXNvbHV0aW9uKCkge1xuICAgIC8vIFdlIG5ldmVyIHdhbnQgdG8gcmVzb2x2ZSBzeW1ib2xzIHRocm91Z2ggc3VtbWFyaWVzLiBTdW1tYXJpZXMgbmV2ZXIgY29udGFpblxuICAgIC8vIGRlY29yYXRvcnMgZm9yIGNsYXNzIHN5bWJvbHMgYW5kIHRoZXJlZm9yZSBzdW1tYXJpZXMgd2lsbCBjYXVzZSBldmVyeSBjbGFzc1xuICAgIC8vIHRvIGJlIGNvbnNpZGVyZWQgYXMgdW5kZWNvcmF0ZWQuIFNlZSByZWFzb24gZm9yIHRoaXMgaW46IFwiVG9Kc29uU2VyaWFsaXplclwiLlxuICAgIC8vIEluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IG1ldGFkYXRhIGlzIG5vdCByZXRyaWV2ZWQgdGhyb3VnaCBzdW1tYXJpZXMsIHdlXG4gICAgLy8gbmVlZCB0byBkaXNhYmxlIHN1bW1hcnkgcmVzb2x1dGlvbiwgY2xlYXIgcHJldmlvdXMgc3ltYm9sIGNhY2hlcy4gVGhpcyB3YXlcbiAgICAvLyBmdXR1cmUgY2FsbHMgdG8gXCJTdGF0aWNSZWZsZWN0b3IjYW5ub3RhdGlvbnNcIiBhcmUgYmFzZWQgb24gbWV0YWRhdGEgZmlsZXMuXG4gICAgdGhpcy5zeW1ib2xSZXNvbHZlclsnX3Jlc29sdmVTeW1ib2xGcm9tU3VtbWFyeSddID0gKCkgPT4gbnVsbDtcbiAgICB0aGlzLnN5bWJvbFJlc29sdmVyWydyZXNvbHZlZFN5bWJvbHMnXS5jbGVhcigpO1xuICAgIHRoaXMuc3ltYm9sUmVzb2x2ZXJbJ3N5bWJvbEZyb21GaWxlJ10uY2xlYXIoKTtcbiAgICB0aGlzLmNvbXBpbGVyLnJlZmxlY3RvclsnYW5ub3RhdGlvbkNhY2hlJ10uY2xlYXIoKTtcblxuICAgIC8vIE9yaWdpbmFsIHN1bW1hcnkgcmVzb2x2ZXIgdXNlZCBieSB0aGUgQU9UIGNvbXBpbGVyLlxuICAgIGNvbnN0IHN1bW1hcnlSZXNvbHZlciA9IHRoaXMuc3ltYm9sUmVzb2x2ZXJbJ3N1bW1hcnlSZXNvbHZlciddO1xuXG4gICAgLy8gQWRkaXRpb25hbGx5IHdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgbm8gZmlsZXMgYXJlIHRyZWF0ZWQgYXMgXCJsaWJyYXJ5XCIgZmlsZXMgd2hlblxuICAgIC8vIHJlc29sdmluZyBtZXRhZGF0YS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBieSBkZWZhdWx0IHRoZSBzeW1ib2wgcmVzb2x2ZXIgZGlzY2FyZHNcbiAgICAvLyBjbGFzcyBtZXRhZGF0YSBmb3IgbGlicmFyeSBmaWxlcy4gU2VlIFwiU3RhdGljU3ltYm9sUmVzb2x2ZXIjY3JlYXRlUmVzb2x2ZWRTeW1ib2xcIi5cbiAgICAvLyBQYXRjaGluZyB0aGlzIGZ1bmN0aW9uICoqb25seSoqIGZvciB0aGUgc3RhdGljIHN5bWJvbCByZXNvbHZlciBlbnN1cmVzIHRoYXQgbWV0YWRhdGFcbiAgICAvLyBpcyBub3QgaW5jb3JyZWN0bHkgb21pdHRlZC4gTm90ZSB0aGF0IHdlIG9ubHkgd2FudCB0byBkbyB0aGlzIGZvciB0aGUgc3ltYm9sIHJlc29sdmVyXG4gICAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugd2UgY291bGQgYnJlYWsgdGhlIHN1bW1hcnkgbG9hZGluZyBsb2dpYyB3aGljaCBpcyB1c2VkIHRvIGRldGVjdFxuICAgIC8vIGlmIGEgc3RhdGljIHN5bWJvbCBpcyBlaXRoZXIgYSBkaXJlY3RpdmUsIGNvbXBvbmVudCBvciBwaXBlIChzZWUgTWV0YWRhdGFSZXNvbHZlcikuXG4gICAgdGhpcy5zeW1ib2xSZXNvbHZlclsnc3VtbWFyeVJlc29sdmVyJ10gPSA8U3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4+e1xuICAgICAgZnJvbVN1bW1hcnlGaWxlTmFtZTogc3VtbWFyeVJlc29sdmVyLmZyb21TdW1tYXJ5RmlsZU5hbWUuYmluZChzdW1tYXJ5UmVzb2x2ZXIpLFxuICAgICAgYWRkU3VtbWFyeTogc3VtbWFyeVJlc29sdmVyLmFkZFN1bW1hcnkuYmluZChzdW1tYXJ5UmVzb2x2ZXIpLFxuICAgICAgZ2V0SW1wb3J0QXM6IHN1bW1hcnlSZXNvbHZlci5nZXRJbXBvcnRBcy5iaW5kKHN1bW1hcnlSZXNvbHZlciksXG4gICAgICBnZXRLbm93bk1vZHVsZU5hbWU6IHN1bW1hcnlSZXNvbHZlci5nZXRLbm93bk1vZHVsZU5hbWUuYmluZChzdW1tYXJ5UmVzb2x2ZXIpLFxuICAgICAgcmVzb2x2ZVN1bW1hcnk6IHN1bW1hcnlSZXNvbHZlci5yZXNvbHZlU3VtbWFyeS5iaW5kKHN1bW1hcnlSZXNvbHZlciksXG4gICAgICB0b1N1bW1hcnlGaWxlTmFtZTogc3VtbWFyeVJlc29sdmVyLnRvU3VtbWFyeUZpbGVOYW1lLmJpbmQoc3VtbWFyeVJlc29sdmVyKSxcbiAgICAgIGdldFN5bWJvbHNPZjogc3VtbWFyeVJlc29sdmVyLmdldFN5bWJvbHNPZi5iaW5kKHN1bW1hcnlSZXNvbHZlciksXG4gICAgICBpc0xpYnJhcnlGaWxlOiAoKSA9PiBmYWxzZSxcbiAgICB9O1xuICB9XG59XG4iXX0=