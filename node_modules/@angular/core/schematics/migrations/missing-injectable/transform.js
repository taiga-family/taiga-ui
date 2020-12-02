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
        define("@angular/core/schematics/migrations/missing-injectable/transform", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/reflection", "typescript", "@angular/core/schematics/utils/import_manager", "@angular/core/schematics/utils/ng_decorators", "@angular/core/schematics/migrations/missing-injectable/providers_evaluator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    const partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    const reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    const ts = require("typescript");
    const import_manager_1 = require("@angular/core/schematics/utils/import_manager");
    const ng_decorators_1 = require("@angular/core/schematics/utils/ng_decorators");
    const providers_evaluator_1 = require("@angular/core/schematics/migrations/missing-injectable/providers_evaluator");
    /**
     * Name of decorators which imply that a given class does not need to be migrated.
     *    - `@Injectable`, `@Directive`, `@Component` and `@Pipe` instruct the compiler
     *       to generate a factory definition.
     *    - `@NgModule` instructs the compiler to generate a provider definition that holds
     *       the factory function.
     */
    const NO_MIGRATE_DECORATORS = ['Injectable', 'Directive', 'Component', 'Pipe', 'NgModule'];
    class MissingInjectableTransform {
        constructor(typeChecker, getUpdateRecorder) {
            this.typeChecker = typeChecker;
            this.getUpdateRecorder = getUpdateRecorder;
            this.printer = ts.createPrinter();
            this.importManager = new import_manager_1.ImportManager(this.getUpdateRecorder, this.printer);
            /** Set of provider class declarations which were already checked or migrated. */
            this.visitedProviderClasses = new Set();
            /** Set of provider object literals which were already checked or migrated. */
            this.visitedProviderLiterals = new Set();
            this.providersEvaluator = new providers_evaluator_1.ProvidersEvaluator(new reflection_1.TypeScriptReflectionHost(typeChecker), typeChecker, /* dependencyTracker */ null);
        }
        recordChanges() {
            this.importManager.recordChanges();
        }
        /**
         * Migrates all specified NgModule's by walking through referenced providers
         * and decorating them with "@Injectable" if needed.
         */
        migrateModules(modules) {
            return modules.reduce((failures, node) => failures.concat(this.migrateModule(node)), []);
        }
        /**
         * Migrates all specified directives by walking through referenced providers
         * and decorating them with "@Injectable" if needed.
         */
        migrateDirectives(directives) {
            return directives.reduce((failures, node) => failures.concat(this.migrateDirective(node)), []);
        }
        /** Migrates a given NgModule by walking through the referenced providers. */
        migrateModule(module) {
            if (module.providersExpr === null) {
                return [];
            }
            const { resolvedValue, literals } = this.providersEvaluator.evaluate(module.providersExpr);
            this._migrateLiteralProviders(literals);
            if (!Array.isArray(resolvedValue)) {
                return [
                    { node: module.providersExpr, message: 'Providers of module are not statically analyzable.' }
                ];
            }
            return this._visitProviderResolvedValue(resolvedValue, module);
        }
        /**
         * Migrates a given directive by walking through defined providers. This method
         * also handles components with "viewProviders" defined.
         */
        migrateDirective(directive) {
            const failures = [];
            // Migrate "providers" on directives and components if defined.
            if (directive.providersExpr) {
                const { resolvedValue, literals } = this.providersEvaluator.evaluate(directive.providersExpr);
                this._migrateLiteralProviders(literals);
                if (!Array.isArray(resolvedValue)) {
                    return [
                        { node: directive.providersExpr, message: `Providers are not statically analyzable.` }
                    ];
                }
                failures.push(...this._visitProviderResolvedValue(resolvedValue, directive));
            }
            // Migrate "viewProviders" on components if defined.
            if (directive.viewProvidersExpr) {
                const { resolvedValue, literals } = this.providersEvaluator.evaluate(directive.viewProvidersExpr);
                this._migrateLiteralProviders(literals);
                if (!Array.isArray(resolvedValue)) {
                    return [
                        { node: directive.viewProvidersExpr, message: `Providers are not statically analyzable.` }
                    ];
                }
                failures.push(...this._visitProviderResolvedValue(resolvedValue, directive));
            }
            return failures;
        }
        /**
         * Migrates a given provider class if it is not decorated with
         * any Angular decorator.
         */
        migrateProviderClass(node, context) {
            if (this.visitedProviderClasses.has(node)) {
                return;
            }
            this.visitedProviderClasses.add(node);
            const sourceFile = node.getSourceFile();
            // We cannot migrate provider classes outside of source files. This is because the
            // migration for third-party library files should happen in "ngcc", and in general
            // would also involve metadata parsing.
            if (sourceFile.isDeclarationFile) {
                return;
            }
            const ngDecorators = node.decorators ? ng_decorators_1.getAngularDecorators(this.typeChecker, node.decorators) : null;
            if (ngDecorators !== null &&
                ngDecorators.some(d => NO_MIGRATE_DECORATORS.indexOf(d.name) !== -1)) {
                return;
            }
            const updateRecorder = this.getUpdateRecorder(sourceFile);
            const importExpr = this.importManager.addImportToSourceFile(sourceFile, 'Injectable', '@angular/core');
            const newDecoratorExpr = ts.createDecorator(ts.createCall(importExpr, undefined, undefined));
            const newDecoratorText = this.printer.printNode(ts.EmitHint.Unspecified, newDecoratorExpr, sourceFile);
            // In case the class is already decorated with "@Inject(..)", we replace the "@Inject"
            // decorator with "@Injectable()" since using "@Inject(..)" on a class is a noop and
            // most likely was meant to be "@Injectable()".
            const existingInjectDecorator = ngDecorators !== null ? ngDecorators.find(d => d.name === 'Inject') : null;
            if (existingInjectDecorator) {
                updateRecorder.replaceDecorator(existingInjectDecorator.node, newDecoratorText, context.name);
            }
            else {
                updateRecorder.addClassDecorator(node, newDecoratorText, context.name);
            }
        }
        /**
         * Migrates object literal providers which do not use "useValue", "useClass",
         * "useExisting" or "useFactory". These providers behave differently in Ivy. e.g.
         *
         * ```ts
         *   {provide: X} -> {provide: X, useValue: undefined} // this is how it behaves in VE
         *   {provide: X} -> {provide: X, useClass: X} // this is how it behaves in Ivy
         * ```
         *
         * To ensure forward compatibility, we migrate these empty object literal providers
         * to explicitly use `useValue: undefined`.
         */
        _migrateLiteralProviders(literals) {
            for (let { node, resolvedValue } of literals) {
                if (this.visitedProviderLiterals.has(node)) {
                    continue;
                }
                this.visitedProviderLiterals.add(node);
                if (!resolvedValue || !(resolvedValue instanceof Map) || !resolvedValue.has('provide') ||
                    resolvedValue.has('useClass') || resolvedValue.has('useValue') ||
                    resolvedValue.has('useExisting') || resolvedValue.has('useFactory')) {
                    continue;
                }
                const sourceFile = node.getSourceFile();
                const newObjectLiteral = ts.updateObjectLiteral(node, node.properties.concat(ts.createPropertyAssignment('useValue', ts.createIdentifier('undefined'))));
                this.getUpdateRecorder(sourceFile)
                    .updateObjectLiteral(node, this.printer.printNode(ts.EmitHint.Unspecified, newObjectLiteral, sourceFile));
            }
        }
        /**
         * Visits the given resolved value of a provider. Providers can be nested in
         * arrays and we need to recursively walk through the providers to be able to
         * migrate all referenced provider classes. e.g. "providers: [[A, [B]]]".
         */
        _visitProviderResolvedValue(value, module) {
            if (value instanceof imports_1.Reference && ts.isClassDeclaration(value.node)) {
                this.migrateProviderClass(value.node, module);
            }
            else if (value instanceof Map) {
                // If a "ClassProvider" has the "deps" property set, then we do not need to
                // decorate the class. This is because the class is instantiated through the
                // specified "deps" and the class does not need a factory definition.
                if (value.has('provide') && value.has('useClass') && value.get('deps') == null) {
                    return this._visitProviderResolvedValue(value.get('useClass'), module);
                }
            }
            else if (Array.isArray(value)) {
                return value.reduce((res, v) => res.concat(this._visitProviderResolvedValue(v, module)), []);
            }
            else if (value instanceof partial_evaluator_1.DynamicValue) {
                return [{ node: value.node, message: `Provider is not statically analyzable.` }];
            }
            return [];
        }
    }
    exports.MissingInjectableTransform = MissingInjectableTransform;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvbWlzc2luZy1pbmplY3RhYmxlL3RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHFFQUFrRTtJQUNsRSx5RkFBOEY7SUFDOUYsMkVBQW9GO0lBQ3BGLGlDQUFpQztJQUVqQyxrRkFBeUQ7SUFDekQsZ0ZBQStEO0lBRy9ELG9IQUEwRTtJQUcxRTs7Ozs7O09BTUc7SUFDSCxNQUFNLHFCQUFxQixHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBTzNGLE1BQWEsMEJBQTBCO1FBV3JDLFlBQ1ksV0FBMkIsRUFDM0IsaUJBQXdEO1lBRHhELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtZQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXVDO1lBWjVELFlBQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0Isa0JBQWEsR0FBRyxJQUFJLDhCQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUdoRixpRkFBaUY7WUFDekUsMkJBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7WUFFaEUsOEVBQThFO1lBQ3RFLDRCQUF1QixHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1lBS3RFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHdDQUFrQixDQUM1QyxJQUFJLHFDQUF3QixDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRUQsYUFBYTtZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENB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TSxDQUFDLENBQUM7aUJBQ3pFO2FBQ0Y7aUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2YsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDbkUsRUFBdUIsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksS0FBSyxZQUFZLGdDQUFZLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FDRjtJQTFNRCxnRUEwTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMnO1xuaW1wb3J0IHtEeW5hbWljVmFsdWUsIFJlc29sdmVkVmFsdWV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGFydGlhbF9ldmFsdWF0b3InO1xuaW1wb3J0IHtUeXBlU2NyaXB0UmVmbGVjdGlvbkhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbXBvcnRNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9pbXBvcnRfbWFuYWdlcic7XG5pbXBvcnQge2dldEFuZ3VsYXJEZWNvcmF0b3JzfSBmcm9tICcuLi8uLi91dGlscy9uZ19kZWNvcmF0b3JzJztcblxuaW1wb3J0IHtSZXNvbHZlZERpcmVjdGl2ZSwgUmVzb2x2ZWROZ01vZHVsZX0gZnJvbSAnLi9kZWZpbml0aW9uX2NvbGxlY3Rvcic7XG5pbXBvcnQge1Byb3ZpZGVyTGl0ZXJhbCwgUHJvdmlkZXJzRXZhbHVhdG9yfSBmcm9tICcuL3Byb3ZpZGVyc19ldmFsdWF0b3InO1xuaW1wb3J0IHtVcGRhdGVSZWNvcmRlcn0gZnJvbSAnLi91cGRhdGVfcmVjb3JkZXInO1xuXG4vKipcbiAqIE5hbWUgb2YgZGVjb3JhdG9ycyB3aGljaCBpbXBseSB0aGF0IGEgZ2l2ZW4gY2xhc3MgZG9lcyBub3QgbmVlZCB0byBiZSBtaWdyYXRlZC5cbiAqICAgIC0gYEBJbmplY3RhYmxlYCwgYEBEaXJlY3RpdmVgLCBgQENvbXBvbmVudGAgYW5kIGBAUGlwZWAgaW5zdHJ1Y3QgdGhlIGNvbXBpbGVyXG4gKiAgICAgICB0byBnZW5lcmF0ZSBhIGZhY3RvcnkgZGVmaW5pdGlvbi5cbiAqICAgIC0gYEBOZ01vZHVsZWAgaW5zdHJ1Y3RzIHRoZSBjb21waWxlciB0byBnZW5lcmF0ZSBhIHByb3ZpZGVyIGRlZmluaXRpb24gdGhhdCBob2xkc1xuICogICAgICAgdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IE5PX01JR1JBVEVfREVDT1JBVE9SUyA9IFsnSW5qZWN0YWJsZScsICdEaXJlY3RpdmUnLCAnQ29tcG9uZW50JywgJ1BpcGUnLCAnTmdNb2R1bGUnXTtcblxuZXhwb3J0IGludGVyZmFjZSBBbmFseXNpc0ZhaWx1cmUge1xuICBub2RlOiB0cy5Ob2RlO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBNaXNzaW5nSW5qZWN0YWJsZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgcHJpdmF0ZSBpbXBvcnRNYW5hZ2VyID0gbmV3IEltcG9ydE1hbmFnZXIodGhpcy5nZXRVcGRhdGVSZWNvcmRlciwgdGhpcy5wcmludGVyKTtcbiAgcHJpdmF0ZSBwcm92aWRlcnNFdmFsdWF0b3I6IFByb3ZpZGVyc0V2YWx1YXRvcjtcblxuICAvKiogU2V0IG9mIHByb3ZpZGVyIGNsYXNzIGRlY2xhcmF0aW9ucyB3aGljaCB3ZXJlIGFscmVhZHkgY2hlY2tlZCBvciBtaWdyYXRlZC4gKi9cbiAgcHJpdmF0ZSB2aXNpdGVkUHJvdmlkZXJDbGFzc2VzID0gbmV3IFNldDx0cy5DbGFzc0RlY2xhcmF0aW9uPigpO1xuXG4gIC8qKiBTZXQgb2YgcHJvdmlkZXIgb2JqZWN0IGxpdGVyYWxzIHdoaWNoIHdlcmUgYWxyZWFkeSBjaGVja2VkIG9yIG1pZ3JhdGVkLiAqL1xuICBwcml2YXRlIHZpc2l0ZWRQcm92aWRlckxpdGVyYWxzID0gbmV3IFNldDx0cy5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLFxuICAgICAgcHJpdmF0ZSBnZXRVcGRhdGVSZWNvcmRlcjogKHNmOiB0cy5Tb3VyY2VGaWxlKSA9PiBVcGRhdGVSZWNvcmRlcikge1xuICAgIHRoaXMucHJvdmlkZXJzRXZhbHVhdG9yID0gbmV3IFByb3ZpZGVyc0V2YWx1YXRvcihcbiAgICAgICAgbmV3IFR5cGVTY3JpcHRSZWZsZWN0aW9uSG9zdCh0eXBlQ2hlY2tlciksIHR5cGVDaGVja2VyLCAvKiBkZXBlbmRlbmN5VHJhY2tlciAqLyBudWxsKTtcbiAgfVxuXG4gIHJlY29yZENoYW5nZXMoKSB7XG4gICAgdGhpcy5pbXBvcnRNYW5hZ2VyLnJlY29yZENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBhbGwgc3BlY2lmaWVkIE5nTW9kdWxlJ3MgYnkgd2Fsa2luZyB0aHJvdWdoIHJlZmVyZW5jZWQgcHJvdmlkZXJzXG4gICAqIGFuZCBkZWNvcmF0aW5nIHRoZW0gd2l0aCBcIkBJbmplY3RhYmxlXCIgaWYgbmVlZGVkLlxuICAgKi9cbiAgbWlncmF0ZU1vZHVsZXMobW9kdWxlczogUmVzb2x2ZWROZ01vZHVsZVtdKTogQW5hbHlzaXNGYWlsdXJlW10ge1xuICAgIHJldHVybiBtb2R1bGVzLnJlZHVjZShcbiAgICAgICAgKGZhaWx1cmVzLCBub2RlKSA9PiBmYWlsdXJlcy5jb25jYXQodGhpcy5taWdyYXRlTW9kdWxlKG5vZGUpKSwgW10gYXMgQW5hbHlzaXNGYWlsdXJlW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGVzIGFsbCBzcGVjaWZpZWQgZGlyZWN0aXZlcyBieSB3YWxraW5nIHRocm91Z2ggcmVmZXJlbmNlZCBwcm92aWRlcnNcbiAgICogYW5kIGRlY29yYXRpbmcgdGhlbSB3aXRoIFwiQEluamVjdGFibGVcIiBpZiBuZWVkZWQuXG4gICAqL1xuICBtaWdyYXRlRGlyZWN0aXZlcyhkaXJlY3RpdmVzOiBSZXNvbHZlZERpcmVjdGl2ZVtdKTogQW5hbHlzaXNGYWlsdXJlW10ge1xuICAgIHJldHVybiBkaXJlY3RpdmVzLnJlZHVjZShcbiAgICAgICAgKGZhaWx1cmVzLCBub2RlKSA9PiBmYWlsdXJlcy5jb25jYXQodGhpcy5taWdyYXRlRGlyZWN0aXZlKG5vZGUpKSwgW10gYXMgQW5hbHlzaXNGYWlsdXJlW10pO1xuICB9XG5cbiAgLyoqIE1pZ3JhdGVzIGEgZ2l2ZW4gTmdNb2R1bGUgYnkgd2Fsa2luZyB0aHJvdWdoIHRoZSByZWZlcmVuY2VkIHByb3ZpZGVycy4gKi9cbiAgbWlncmF0ZU1vZHVsZShtb2R1bGU6IFJlc29sdmVkTmdNb2R1bGUpOiBBbmFseXNpc0ZhaWx1cmVbXSB7XG4gICAgaWYgKG1vZHVsZS5wcm92aWRlcnNFeHByID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3Qge3Jlc29sdmVkVmFsdWUsIGxpdGVyYWxzfSA9IHRoaXMucHJvdmlkZXJzRXZhbHVhdG9yLmV2YWx1YXRlKG1vZHVsZS5wcm92aWRlcnNFeHByKTtcbiAgICB0aGlzLl9taWdyYXRlTGl0ZXJhbFByb3ZpZGVycyhsaXRlcmFscyk7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzb2x2ZWRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtub2RlOiBtb2R1bGUucHJvdmlkZXJzRXhwciwgbWVzc2FnZTogJ1Byb3ZpZGVycyBvZiBtb2R1bGUgYXJlIG5vdCBzdGF0aWNhbGx5IGFuYWx5emFibGUuJ31cbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2l0UHJvdmlkZXJSZXNvbHZlZFZhbHVlKHJlc29sdmVkVmFsdWUsIG1vZHVsZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBhIGdpdmVuIGRpcmVjdGl2ZSBieSB3YWxraW5nIHRocm91Z2ggZGVmaW5lZCBwcm92aWRlcnMuIFRoaXMgbWV0aG9kXG4gICAqIGFsc28gaGFuZGxlcyBjb21wb25lbnRzIHdpdGggXCJ2aWV3UHJvdmlkZXJzXCIgZGVmaW5lZC5cbiAgICovXG4gIG1pZ3JhdGVEaXJlY3RpdmUoZGlyZWN0aXZlOiBSZXNvbHZlZERpcmVjdGl2ZSk6IEFuYWx5c2lzRmFpbHVyZVtdIHtcbiAgICBjb25zdCBmYWlsdXJlczogQW5hbHlzaXNGYWlsdXJlW10gPSBbXTtcblxuICAgIC8vIE1pZ3JhdGUgXCJwcm92aWRlcnNcIiBvbiBkaXJlY3RpdmVzIGFuZCBjb21wb25lbnRzIGlmIGRlZmluZWQuXG4gICAgaWYgKGRpcmVjdGl2ZS5wcm92aWRlcnNFeHByKSB7XG4gICAgICBjb25zdCB7cmVzb2x2ZWRWYWx1ZSwgbGl0ZXJhbHN9ID0gdGhpcy5wcm92aWRlcnNFdmFsdWF0b3IuZXZhbHVhdGUoZGlyZWN0aXZlLnByb3ZpZGVyc0V4cHIpO1xuICAgICAgdGhpcy5fbWlncmF0ZUxpdGVyYWxQcm92aWRlcnMobGl0ZXJhbHMpO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc29sdmVkVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge25vZGU6IGRpcmVjdGl2ZS5wcm92aWRlcnNFeHByLCBtZXNzYWdlOiBgUHJvdmlkZXJzIGFyZSBub3Qgc3RhdGljYWxseSBhbmFseXphYmxlLmB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICBmYWlsdXJlcy5wdXNoKC4uLnRoaXMuX3Zpc2l0UHJvdmlkZXJSZXNvbHZlZFZhbHVlKHJlc29sdmVkVmFsdWUsIGRpcmVjdGl2ZSkpO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgXCJ2aWV3UHJvdmlkZXJzXCIgb24gY29tcG9uZW50cyBpZiBkZWZpbmVkLlxuICAgIGlmIChkaXJlY3RpdmUudmlld1Byb3ZpZGVyc0V4cHIpIHtcbiAgICAgIGNvbnN0IHtyZXNvbHZlZFZhbHVlLCBsaXRlcmFsc30gPVxuICAgICAgICAgIHRoaXMucHJvdmlkZXJzRXZhbHVhdG9yLmV2YWx1YXRlKGRpcmVjdGl2ZS52aWV3UHJvdmlkZXJzRXhwcik7XG4gICAgICB0aGlzLl9taWdyYXRlTGl0ZXJhbFByb3ZpZGVycyhsaXRlcmFscyk7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzb2x2ZWRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7bm9kZTogZGlyZWN0aXZlLnZpZXdQcm92aWRlcnNFeHByLCBtZXNzYWdlOiBgUHJvdmlkZXJzIGFyZSBub3Qgc3RhdGljYWxseSBhbmFseXphYmxlLmB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICBmYWlsdXJlcy5wdXNoKC4uLnRoaXMuX3Zpc2l0UHJvdmlkZXJSZXNvbHZlZFZhbHVlKHJlc29sdmVkVmFsdWUsIGRpcmVjdGl2ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbHVyZXM7XG4gIH1cblxuICAvKipcbiAgICogTWlncmF0ZXMgYSBnaXZlbiBwcm92aWRlciBjbGFzcyBpZiBpdCBpcyBub3QgZGVjb3JhdGVkIHdpdGhcbiAgICogYW55IEFuZ3VsYXIgZGVjb3JhdG9yLlxuICAgKi9cbiAgbWlncmF0ZVByb3ZpZGVyQ2xhc3Mobm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbiwgY29udGV4dDogUmVzb2x2ZWROZ01vZHVsZXxSZXNvbHZlZERpcmVjdGl2ZSkge1xuICAgIGlmICh0aGlzLnZpc2l0ZWRQcm92aWRlckNsYXNzZXMuaGFzKG5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmlzaXRlZFByb3ZpZGVyQ2xhc3Nlcy5hZGQobm9kZSk7XG5cbiAgICBjb25zdCBzb3VyY2VGaWxlID0gbm9kZS5nZXRTb3VyY2VGaWxlKCk7XG5cbiAgICAvLyBXZSBjYW5ub3QgbWlncmF0ZSBwcm92aWRlciBjbGFzc2VzIG91dHNpZGUgb2Ygc291cmNlIGZpbGVzLiBUaGlzIGlzIGJlY2F1c2UgdGhlXG4gICAgLy8gbWlncmF0aW9uIGZvciB0aGlyZC1wYXJ0eSBsaWJyYXJ5IGZpbGVzIHNob3VsZCBoYXBwZW4gaW4gXCJuZ2NjXCIsIGFuZCBpbiBnZW5lcmFsXG4gICAgLy8gd291bGQgYWxzbyBpbnZvbHZlIG1ldGFkYXRhIHBhcnNpbmcuXG4gICAgaWYgKHNvdXJjZUZpbGUuaXNEZWNsYXJhdGlvbkZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZ0RlY29yYXRvcnMgPVxuICAgICAgICBub2RlLmRlY29yYXRvcnMgPyBnZXRBbmd1bGFyRGVjb3JhdG9ycyh0aGlzLnR5cGVDaGVja2VyLCBub2RlLmRlY29yYXRvcnMpIDogbnVsbDtcblxuICAgIGlmIChuZ0RlY29yYXRvcnMgIT09IG51bGwgJiZcbiAgICAgICAgbmdEZWNvcmF0b3JzLnNvbWUoZCA9PiBOT19NSUdSQVRFX0RFQ09SQVRPUlMuaW5kZXhPZihkLm5hbWUpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVSZWNvcmRlciA9IHRoaXMuZ2V0VXBkYXRlUmVjb3JkZXIoc291cmNlRmlsZSk7XG4gICAgY29uc3QgaW1wb3J0RXhwciA9XG4gICAgICAgIHRoaXMuaW1wb3J0TWFuYWdlci5hZGRJbXBvcnRUb1NvdXJjZUZpbGUoc291cmNlRmlsZSwgJ0luamVjdGFibGUnLCAnQGFuZ3VsYXIvY29yZScpO1xuICAgIGNvbnN0IG5ld0RlY29yYXRvckV4cHIgPSB0cy5jcmVhdGVEZWNvcmF0b3IodHMuY3JlYXRlQ2FsbChpbXBvcnRFeHByLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkpO1xuICAgIGNvbnN0IG5ld0RlY29yYXRvclRleHQgPVxuICAgICAgICB0aGlzLnByaW50ZXIucHJpbnROb2RlKHRzLkVtaXRIaW50LlVuc3BlY2lmaWVkLCBuZXdEZWNvcmF0b3JFeHByLCBzb3VyY2VGaWxlKTtcblxuXG4gICAgLy8gSW4gY2FzZSB0aGUgY2xhc3MgaXMgYWxyZWFkeSBkZWNvcmF0ZWQgd2l0aCBcIkBJbmplY3QoLi4pXCIsIHdlIHJlcGxhY2UgdGhlIFwiQEluamVjdFwiXG4gICAgLy8gZGVjb3JhdG9yIHdpdGggXCJASW5qZWN0YWJsZSgpXCIgc2luY2UgdXNpbmcgXCJASW5qZWN0KC4uKVwiIG9uIGEgY2xhc3MgaXMgYSBub29wIGFuZFxuICAgIC8vIG1vc3QgbGlrZWx5IHdhcyBtZWFudCB0byBiZSBcIkBJbmplY3RhYmxlKClcIi5cbiAgICBjb25zdCBleGlzdGluZ0luamVjdERlY29yYXRvciA9XG4gICAgICAgIG5nRGVjb3JhdG9ycyAhPT0gbnVsbCA/IG5nRGVjb3JhdG9ycy5maW5kKGQgPT4gZC5uYW1lID09PSAnSW5qZWN0JykgOiBudWxsO1xuICAgIGlmIChleGlzdGluZ0luamVjdERlY29yYXRvcikge1xuICAgICAgdXBkYXRlUmVjb3JkZXIucmVwbGFjZURlY29yYXRvcihleGlzdGluZ0luamVjdERlY29yYXRvci5ub2RlLCBuZXdEZWNvcmF0b3JUZXh0LCBjb250ZXh0Lm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVSZWNvcmRlci5hZGRDbGFzc0RlY29yYXRvcihub2RlLCBuZXdEZWNvcmF0b3JUZXh0LCBjb250ZXh0Lm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBvYmplY3QgbGl0ZXJhbCBwcm92aWRlcnMgd2hpY2ggZG8gbm90IHVzZSBcInVzZVZhbHVlXCIsIFwidXNlQ2xhc3NcIixcbiAgICogXCJ1c2VFeGlzdGluZ1wiIG9yIFwidXNlRmFjdG9yeVwiLiBUaGVzZSBwcm92aWRlcnMgYmVoYXZlIGRpZmZlcmVudGx5IGluIEl2eS4gZS5nLlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiAgIHtwcm92aWRlOiBYfSAtPiB7cHJvdmlkZTogWCwgdXNlVmFsdWU6IHVuZGVmaW5lZH0gLy8gdGhpcyBpcyBob3cgaXQgYmVoYXZlcyBpbiBWRVxuICAgKiAgIHtwcm92aWRlOiBYfSAtPiB7cHJvdmlkZTogWCwgdXNlQ2xhc3M6IFh9IC8vIHRoaXMgaXMgaG93IGl0IGJlaGF2ZXMgaW4gSXZ5XG4gICAqIGBgYFxuICAgKlxuICAgKiBUbyBlbnN1cmUgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB3ZSBtaWdyYXRlIHRoZXNlIGVtcHR5IG9iamVjdCBsaXRlcmFsIHByb3ZpZGVyc1xuICAgKiB0byBleHBsaWNpdGx5IHVzZSBgdXNlVmFsdWU6IHVuZGVmaW5lZGAuXG4gICAqL1xuICBwcml2YXRlIF9taWdyYXRlTGl0ZXJhbFByb3ZpZGVycyhsaXRlcmFsczogUHJvdmlkZXJMaXRlcmFsW10pIHtcbiAgICBmb3IgKGxldCB7bm9kZSwgcmVzb2x2ZWRWYWx1ZX0gb2YgbGl0ZXJhbHMpIHtcbiAgICAgIGlmICh0aGlzLnZpc2l0ZWRQcm92aWRlckxpdGVyYWxzLmhhcyhub2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlzaXRlZFByb3ZpZGVyTGl0ZXJhbHMuYWRkKG5vZGUpO1xuXG4gICAgICBpZiAoIXJlc29sdmVkVmFsdWUgfHwgIShyZXNvbHZlZFZhbHVlIGluc3RhbmNlb2YgTWFwKSB8fCAhcmVzb2x2ZWRWYWx1ZS5oYXMoJ3Byb3ZpZGUnKSB8fFxuICAgICAgICAgIHJlc29sdmVkVmFsdWUuaGFzKCd1c2VDbGFzcycpIHx8IHJlc29sdmVkVmFsdWUuaGFzKCd1c2VWYWx1ZScpIHx8XG4gICAgICAgICAgcmVzb2x2ZWRWYWx1ZS5oYXMoJ3VzZUV4aXN0aW5nJykgfHwgcmVzb2x2ZWRWYWx1ZS5oYXMoJ3VzZUZhY3RvcnknKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc291cmNlRmlsZSA9IG5vZGUuZ2V0U291cmNlRmlsZSgpO1xuICAgICAgY29uc3QgbmV3T2JqZWN0TGl0ZXJhbCA9IHRzLnVwZGF0ZU9iamVjdExpdGVyYWwoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBub2RlLnByb3BlcnRpZXMuY29uY2F0KFxuICAgICAgICAgICAgICB0cy5jcmVhdGVQcm9wZXJ0eUFzc2lnbm1lbnQoJ3VzZVZhbHVlJywgdHMuY3JlYXRlSWRlbnRpZmllcigndW5kZWZpbmVkJykpKSk7XG5cbiAgICAgIHRoaXMuZ2V0VXBkYXRlUmVjb3JkZXIoc291cmNlRmlsZSlcbiAgICAgICAgICAudXBkYXRlT2JqZWN0TGl0ZXJhbChcbiAgICAgICAgICAgICAgbm9kZSwgdGhpcy5wcmludGVyLnByaW50Tm9kZSh0cy5FbWl0SGludC5VbnNwZWNpZmllZCwgbmV3T2JqZWN0TGl0ZXJhbCwgc291cmNlRmlsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpdHMgdGhlIGdpdmVuIHJlc29sdmVkIHZhbHVlIG9mIGEgcHJvdmlkZXIuIFByb3ZpZGVycyBjYW4gYmUgbmVzdGVkIGluXG4gICAqIGFycmF5cyBhbmQgd2UgbmVlZCB0byByZWN1cnNpdmVseSB3YWxrIHRocm91Z2ggdGhlIHByb3ZpZGVycyB0byBiZSBhYmxlIHRvXG4gICAqIG1pZ3JhdGUgYWxsIHJlZmVyZW5jZWQgcHJvdmlkZXIgY2xhc3Nlcy4gZS5nLiBcInByb3ZpZGVyczogW1tBLCBbQl1dXVwiLlxuICAgKi9cbiAgcHJpdmF0ZSBfdmlzaXRQcm92aWRlclJlc29sdmVkVmFsdWUodmFsdWU6IFJlc29sdmVkVmFsdWUsIG1vZHVsZTogUmVzb2x2ZWROZ01vZHVsZSk6XG4gICAgICBBbmFseXNpc0ZhaWx1cmVbXSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUmVmZXJlbmNlICYmIHRzLmlzQ2xhc3NEZWNsYXJhdGlvbih2YWx1ZS5ub2RlKSkge1xuICAgICAgdGhpcy5taWdyYXRlUHJvdmlkZXJDbGFzcyh2YWx1ZS5ub2RlLCBtb2R1bGUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIC8vIElmIGEgXCJDbGFzc1Byb3ZpZGVyXCIgaGFzIHRoZSBcImRlcHNcIiBwcm9wZXJ0eSBzZXQsIHRoZW4gd2UgZG8gbm90IG5lZWQgdG9cbiAgICAgIC8vIGRlY29yYXRlIHRoZSBjbGFzcy4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjbGFzcyBpcyBpbnN0YW50aWF0ZWQgdGhyb3VnaCB0aGVcbiAgICAgIC8vIHNwZWNpZmllZCBcImRlcHNcIiBhbmQgdGhlIGNsYXNzIGRvZXMgbm90IG5lZWQgYSBmYWN0b3J5IGRlZmluaXRpb24uXG4gICAgICBpZiAodmFsdWUuaGFzKCdwcm92aWRlJykgJiYgdmFsdWUuaGFzKCd1c2VDbGFzcycpICYmIHZhbHVlLmdldCgnZGVwcycpID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2l0UHJvdmlkZXJSZXNvbHZlZFZhbHVlKHZhbHVlLmdldCgndXNlQ2xhc3MnKSEsIG1vZHVsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlZHVjZShcbiAgICAgICAgICAocmVzLCB2KSA9PiByZXMuY29uY2F0KHRoaXMuX3Zpc2l0UHJvdmlkZXJSZXNvbHZlZFZhbHVlKHYsIG1vZHVsZSkpLFxuICAgICAgICAgIFtdIGFzIEFuYWx5c2lzRmFpbHVyZVtdKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRHluYW1pY1ZhbHVlKSB7XG4gICAgICByZXR1cm4gW3tub2RlOiB2YWx1ZS5ub2RlLCBtZXNzYWdlOiBgUHJvdmlkZXIgaXMgbm90IHN0YXRpY2FsbHkgYW5hbHl6YWJsZS5gfV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl19