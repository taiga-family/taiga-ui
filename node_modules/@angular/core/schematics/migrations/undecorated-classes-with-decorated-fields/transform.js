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
        define("@angular/core/schematics/migrations/undecorated-classes-with-decorated-fields/transform", ["require", "exports", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/reflection", "typescript", "@angular/core/schematics/utils/import_manager", "@angular/core/schematics/utils/ng_decorators", "@angular/core/schematics/utils/typescript/find_base_classes", "@angular/core/schematics/utils/typescript/functions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    const reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    const ts = require("typescript");
    const import_manager_1 = require("@angular/core/schematics/utils/import_manager");
    const ng_decorators_1 = require("@angular/core/schematics/utils/ng_decorators");
    const find_base_classes_1 = require("@angular/core/schematics/utils/typescript/find_base_classes");
    const functions_1 = require("@angular/core/schematics/utils/typescript/functions");
    class UndecoratedClassesWithDecoratedFieldsTransform {
        constructor(typeChecker, getUpdateRecorder) {
            this.typeChecker = typeChecker;
            this.getUpdateRecorder = getUpdateRecorder;
            this.printer = ts.createPrinter();
            this.importManager = new import_manager_1.ImportManager(this.getUpdateRecorder, this.printer);
            this.reflectionHost = new reflection_1.TypeScriptReflectionHost(this.typeChecker);
            this.partialEvaluator = new partial_evaluator_1.PartialEvaluator(this.reflectionHost, this.typeChecker, null);
        }
        /**
         * Migrates the specified source files. The transform adds the abstract `@Directive`
         * decorator to classes that have Angular field decorators but are not decorated.
         * https://hackmd.io/vuQfavzfRG6KUCtU7oK_EA
         */
        migrate(sourceFiles) {
            this._findUndecoratedAbstractDirectives(sourceFiles).forEach(node => {
                const sourceFile = node.getSourceFile();
                const recorder = this.getUpdateRecorder(sourceFile);
                const directiveExpr = this.importManager.addImportToSourceFile(sourceFile, 'Directive', '@angular/core');
                const decoratorExpr = ts.createDecorator(ts.createCall(directiveExpr, undefined, undefined));
                recorder.addClassDecorator(node, this.printer.printNode(ts.EmitHint.Unspecified, decoratorExpr, sourceFile));
            });
        }
        /** Records all changes that were made in the import manager. */
        recordChanges() {
            this.importManager.recordChanges();
        }
        /** Finds undecorated abstract directives in the specified source files. */
        _findUndecoratedAbstractDirectives(sourceFiles) {
            const result = new Set();
            const undecoratedClasses = new Set();
            const nonAbstractDirectives = new WeakSet();
            const abstractDirectives = new WeakSet();
            const visitNode = (node) => {
                node.forEachChild(visitNode);
                if (!ts.isClassDeclaration(node)) {
                    return;
                }
                const { isDirectiveOrComponent, isAbstractDirective, usesAngularFeatures } = this._analyzeClassDeclaration(node);
                if (isDirectiveOrComponent) {
                    if (isAbstractDirective) {
                        abstractDirectives.add(node);
                    }
                    else {
                        nonAbstractDirectives.add(node);
                    }
                }
                else if (usesAngularFeatures) {
                    abstractDirectives.add(node);
                    result.add(node);
                }
                else {
                    undecoratedClasses.add(node);
                }
            };
            sourceFiles.forEach(sourceFile => sourceFile.forEachChild(visitNode));
            // We collected all undecorated class declarations which inherit from abstract directives.
            // For such abstract directives, the derived classes also need to be migrated.
            undecoratedClasses.forEach(node => {
                for (const { node: baseClass } of find_base_classes_1.findBaseClassDeclarations(node, this.typeChecker)) {
                    // If the undecorated class inherits from a non-abstract directive, skip the current
                    // class. We do this because undecorated classes which inherit metadata from non-abstract
                    // directives are handle in the `undecorated-classes-with-di` migration that copies
                    // inherited metadata into an explicit decorator.
                    if (nonAbstractDirectives.has(baseClass)) {
                        break;
                    }
                    else if (abstractDirectives.has(baseClass)) {
                        result.add(node);
                        break;
                    }
                }
            });
            return result;
        }
        /**
         * Analyzes the given class declaration by determining whether the class
         * is a directive, is an abstract directive, or uses Angular features.
         */
        _analyzeClassDeclaration(node) {
            const ngDecorators = node.decorators && ng_decorators_1.getAngularDecorators(this.typeChecker, node.decorators);
            const usesAngularFeatures = this._hasAngularDecoratedClassMember(node);
            if (ngDecorators === undefined || ngDecorators.length === 0) {
                return { isDirectiveOrComponent: false, isAbstractDirective: false, usesAngularFeatures };
            }
            const directiveDecorator = ngDecorators.find(({ name }) => name === 'Directive');
            const componentDecorator = ngDecorators.find(({ name }) => name === 'Component');
            const isAbstractDirective = directiveDecorator !== undefined && this._isAbstractDirective(directiveDecorator);
            return {
                isDirectiveOrComponent: !!directiveDecorator || !!componentDecorator,
                isAbstractDirective,
                usesAngularFeatures,
            };
        }
        /**
         * Checks whether the given decorator resolves to an abstract directive. An directive is
         * considered "abstract" if there is no selector specified.
         */
        _isAbstractDirective({ node }) {
            const metadataArgs = node.expression.arguments;
            if (metadataArgs.length === 0) {
                return true;
            }
            const metadataExpr = functions_1.unwrapExpression(metadataArgs[0]);
            if (!ts.isObjectLiteralExpression(metadataExpr)) {
                return false;
            }
            const metadata = reflection_1.reflectObjectLiteral(metadataExpr);
            if (!metadata.has('selector')) {
                return false;
            }
            const selector = this.partialEvaluator.evaluate(metadata.get('selector'));
            return selector == null;
        }
        _hasAngularDecoratedClassMember(node) {
            return node.members.some(m => m.decorators && ng_decorators_1.getAngularDecorators(this.typeChecker, m.decorators).length !== 0);
        }
    }
    exports.UndecoratedClassesWithDecoratedFieldsTransform = UndecoratedClassesWithDecoratedFieldsTransform;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvdW5kZWNvcmF0ZWQtY2xhc3Nlcy13aXRoLWRlY29yYXRlZC1maWVsZHMvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUZBQW1GO0lBQ25GLDJFQUEwRztJQUMxRyxpQ0FBaUM7SUFFakMsa0ZBQXlEO0lBQ3pELGdGQUE0RTtJQUM1RSxtR0FBbUY7SUFDbkYsbUZBQWtFO0lBZWxFLE1BQWEsOENBQThDO1FBTXpELFlBQ1ksV0FBMkIsRUFDM0IsaUJBQXdEO1lBRHhELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtZQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXVDO1lBUDVELFlBQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0Isa0JBQWEsR0FBRyxJQUFJLDhCQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RSxtQkFBYyxHQUFHLElBQUkscUNBQXdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLHFCQUFnQixHQUFHLElBQUksb0NBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSXRCLENBQUM7UUFFeEU7Ozs7V0FJRztRQUNILE9BQU8sQ0FBQyxXQUE0QjtZQUNsQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FB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TUFBTSxZQUFZLEdBQUcsNEJBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE1BQU0sUUFBUSxHQUFHLGlDQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUM7WUFDM0UsT0FBTyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFFTywrQkFBK0IsQ0FBQyxJQUF5QjtZQUMvRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksb0NBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlGLENBQUM7S0FDRjtJQWhJRCx3R0FnSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFydGlhbEV2YWx1YXRvcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge3JlZmxlY3RPYmplY3RMaXRlcmFsLCBUeXBlU2NyaXB0UmVmbGVjdGlvbkhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbXBvcnRNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9pbXBvcnRfbWFuYWdlcic7XG5pbXBvcnQge2dldEFuZ3VsYXJEZWNvcmF0b3JzLCBOZ0RlY29yYXRvcn0gZnJvbSAnLi4vLi4vdXRpbHMvbmdfZGVjb3JhdG9ycyc7XG5pbXBvcnQge2ZpbmRCYXNlQ2xhc3NEZWNsYXJhdGlvbnN9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzY3JpcHQvZmluZF9iYXNlX2NsYXNzZXMnO1xuaW1wb3J0IHt1bndyYXBFeHByZXNzaW9ufSBmcm9tICcuLi8uLi91dGlscy90eXBlc2NyaXB0L2Z1bmN0aW9ucyc7XG5cbmltcG9ydCB7VXBkYXRlUmVjb3JkZXJ9IGZyb20gJy4vdXBkYXRlX3JlY29yZGVyJztcblxuXG4vKiogQW5hbHl6ZWQgY2xhc3MgZGVjbGFyYXRpb24uICovXG5pbnRlcmZhY2UgQW5hbHl6ZWRDbGFzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBjbGFzcyBpcyBkZWNvcmF0ZWQgd2l0aCBARGlyZWN0aXZlIG9yIEBDb21wb25lbnQuICovXG4gIGlzRGlyZWN0aXZlT3JDb21wb25lbnQ6IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRoZSBjbGFzcyBpcyBhbiBhYnN0cmFjdCBkaXJlY3RpdmUuICovXG4gIGlzQWJzdHJhY3REaXJlY3RpdmU6IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRoZSBjbGFzcyB1c2VzIGFueSBBbmd1bGFyIGZlYXR1cmVzLiAqL1xuICB1c2VzQW5ndWxhckZlYXR1cmVzOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgVW5kZWNvcmF0ZWRDbGFzc2VzV2l0aERlY29yYXRlZEZpZWxkc1RyYW5zZm9ybSB7XG4gIHByaXZhdGUgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgcHJpdmF0ZSBpbXBvcnRNYW5hZ2VyID0gbmV3IEltcG9ydE1hbmFnZXIodGhpcy5nZXRVcGRhdGVSZWNvcmRlciwgdGhpcy5wcmludGVyKTtcbiAgcHJpdmF0ZSByZWZsZWN0aW9uSG9zdCA9IG5ldyBUeXBlU2NyaXB0UmVmbGVjdGlvbkhvc3QodGhpcy50eXBlQ2hlY2tlcik7XG4gIHByaXZhdGUgcGFydGlhbEV2YWx1YXRvciA9IG5ldyBQYXJ0aWFsRXZhbHVhdG9yKHRoaXMucmVmbGVjdGlvbkhvc3QsIHRoaXMudHlwZUNoZWNrZXIsIG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSB0eXBlQ2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsXG4gICAgICBwcml2YXRlIGdldFVwZGF0ZVJlY29yZGVyOiAoc2Y6IHRzLlNvdXJjZUZpbGUpID0+IFVwZGF0ZVJlY29yZGVyKSB7fVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyB0aGUgc3BlY2lmaWVkIHNvdXJjZSBmaWxlcy4gVGhlIHRyYW5zZm9ybSBhZGRzIHRoZSBhYnN0cmFjdCBgQERpcmVjdGl2ZWBcbiAgICogZGVjb3JhdG9yIHRvIGNsYXNzZXMgdGhhdCBoYXZlIEFuZ3VsYXIgZmllbGQgZGVjb3JhdG9ycyBidXQgYXJlIG5vdCBkZWNvcmF0ZWQuXG4gICAqIGh0dHBzOi8vaGFja21kLmlvL3Z1UWZhdnpmUkc2S1VDdFU3b0tfRUFcbiAgICovXG4gIG1pZ3JhdGUoc291cmNlRmlsZXM6IHRzLlNvdXJjZUZpbGVbXSkge1xuICAgIHRoaXMuX2ZpbmRVbmRlY29yYXRlZEFic3RyYWN0RGlyZWN0aXZlcyhzb3VyY2VGaWxlcykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBub2RlLmdldFNvdXJjZUZpbGUoKTtcbiAgICAgIGNvbnN0IHJlY29yZGVyID0gdGhpcy5nZXRVcGRhdGVSZWNvcmRlcihzb3VyY2VGaWxlKTtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZUV4cHIgPVxuICAgICAgICAgIHRoaXMuaW1wb3J0TWFuYWdlci5hZGRJbXBvcnRUb1NvdXJjZUZpbGUoc291cmNlRmlsZSwgJ0RpcmVjdGl2ZScsICdAYW5ndWxhci9jb3JlJyk7XG4gICAgICBjb25zdCBkZWNvcmF0b3JFeHByID0gdHMuY3JlYXRlRGVjb3JhdG9yKHRzLmNyZWF0ZUNhbGwoZGlyZWN0aXZlRXhwciwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKTtcbiAgICAgIHJlY29yZGVyLmFkZENsYXNzRGVjb3JhdG9yKFxuICAgICAgICAgIG5vZGUsIHRoaXMucHJpbnRlci5wcmludE5vZGUodHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIGRlY29yYXRvckV4cHIsIHNvdXJjZUZpbGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZWNvcmRzIGFsbCBjaGFuZ2VzIHRoYXQgd2VyZSBtYWRlIGluIHRoZSBpbXBvcnQgbWFuYWdlci4gKi9cbiAgcmVjb3JkQ2hhbmdlcygpIHtcbiAgICB0aGlzLmltcG9ydE1hbmFnZXIucmVjb3JkQ2hhbmdlcygpO1xuICB9XG5cbiAgLyoqIEZpbmRzIHVuZGVjb3JhdGVkIGFic3RyYWN0IGRpcmVjdGl2ZXMgaW4gdGhlIHNwZWNpZmllZCBzb3VyY2UgZmlsZXMuICovXG4gIHByaXZhdGUgX2ZpbmRVbmRlY29yYXRlZEFic3RyYWN0RGlyZWN0aXZlcyhzb3VyY2VGaWxlczogdHMuU291cmNlRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDx0cy5DbGFzc0RlY2xhcmF0aW9uPigpO1xuICAgIGNvbnN0IHVuZGVjb3JhdGVkQ2xhc3NlcyA9IG5ldyBTZXQ8dHMuQ2xhc3NEZWNsYXJhdGlvbj4oKTtcbiAgICBjb25zdCBub25BYnN0cmFjdERpcmVjdGl2ZXMgPSBuZXcgV2Vha1NldDx0cy5DbGFzc0RlY2xhcmF0aW9uPigpO1xuICAgIGNvbnN0IGFic3RyYWN0RGlyZWN0aXZlcyA9IG5ldyBXZWFrU2V0PHRzLkNsYXNzRGVjbGFyYXRpb24+KCk7XG5cbiAgICBjb25zdCB2aXNpdE5vZGUgPSAobm9kZTogdHMuTm9kZSkgPT4ge1xuICAgICAgbm9kZS5mb3JFYWNoQ2hpbGQodmlzaXROb2RlKTtcbiAgICAgIGlmICghdHMuaXNDbGFzc0RlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtpc0RpcmVjdGl2ZU9yQ29tcG9uZW50LCBpc0Fic3RyYWN0RGlyZWN0aXZlLCB1c2VzQW5ndWxhckZlYXR1cmVzfSA9XG4gICAgICAgICAgdGhpcy5fYW5hbHl6ZUNsYXNzRGVjbGFyYXRpb24obm9kZSk7XG4gICAgICBpZiAoaXNEaXJlY3RpdmVPckNvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNBYnN0cmFjdERpcmVjdGl2ZSkge1xuICAgICAgICAgIGFic3RyYWN0RGlyZWN0aXZlcy5hZGQobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uQWJzdHJhY3REaXJlY3RpdmVzLmFkZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1c2VzQW5ndWxhckZlYXR1cmVzKSB7XG4gICAgICAgIGFic3RyYWN0RGlyZWN0aXZlcy5hZGQobm9kZSk7XG4gICAgICAgIHJlc3VsdC5hZGQobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmRlY29yYXRlZENsYXNzZXMuYWRkKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzb3VyY2VGaWxlcy5mb3JFYWNoKHNvdXJjZUZpbGUgPT4gc291cmNlRmlsZS5mb3JFYWNoQ2hpbGQodmlzaXROb2RlKSk7XG5cbiAgICAvLyBXZSBjb2xsZWN0ZWQgYWxsIHVuZGVjb3JhdGVkIGNsYXNzIGRlY2xhcmF0aW9ucyB3aGljaCBpbmhlcml0IGZyb20gYWJzdHJhY3QgZGlyZWN0aXZlcy5cbiAgICAvLyBGb3Igc3VjaCBhYnN0cmFjdCBkaXJlY3RpdmVzLCB0aGUgZGVyaXZlZCBjbGFzc2VzIGFsc28gbmVlZCB0byBiZSBtaWdyYXRlZC5cbiAgICB1bmRlY29yYXRlZENsYXNzZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGZvciAoY29uc3Qge25vZGU6IGJhc2VDbGFzc30gb2YgZmluZEJhc2VDbGFzc0RlY2xhcmF0aW9ucyhub2RlLCB0aGlzLnR5cGVDaGVja2VyKSkge1xuICAgICAgICAvLyBJZiB0aGUgdW5kZWNvcmF0ZWQgY2xhc3MgaW5oZXJpdHMgZnJvbSBhIG5vbi1hYnN0cmFjdCBkaXJlY3RpdmUsIHNraXAgdGhlIGN1cnJlbnRcbiAgICAgICAgLy8gY2xhc3MuIFdlIGRvIHRoaXMgYmVjYXVzZSB1bmRlY29yYXRlZCBjbGFzc2VzIHdoaWNoIGluaGVyaXQgbWV0YWRhdGEgZnJvbSBub24tYWJzdHJhY3RcbiAgICAgICAgLy8gZGlyZWN0aXZlcyBhcmUgaGFuZGxlIGluIHRoZSBgdW5kZWNvcmF0ZWQtY2xhc3Nlcy13aXRoLWRpYCBtaWdyYXRpb24gdGhhdCBjb3BpZXNcbiAgICAgICAgLy8gaW5oZXJpdGVkIG1ldGFkYXRhIGludG8gYW4gZXhwbGljaXQgZGVjb3JhdG9yLlxuICAgICAgICBpZiAobm9uQWJzdHJhY3REaXJlY3RpdmVzLmhhcyhiYXNlQ2xhc3MpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoYWJzdHJhY3REaXJlY3RpdmVzLmhhcyhiYXNlQ2xhc3MpKSB7XG4gICAgICAgICAgcmVzdWx0LmFkZChub2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmFseXplcyB0aGUgZ2l2ZW4gY2xhc3MgZGVjbGFyYXRpb24gYnkgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgY2xhc3NcbiAgICogaXMgYSBkaXJlY3RpdmUsIGlzIGFuIGFic3RyYWN0IGRpcmVjdGl2ZSwgb3IgdXNlcyBBbmd1bGFyIGZlYXR1cmVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYW5hbHl6ZUNsYXNzRGVjbGFyYXRpb24obm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IEFuYWx5emVkQ2xhc3Mge1xuICAgIGNvbnN0IG5nRGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycyAmJiBnZXRBbmd1bGFyRGVjb3JhdG9ycyh0aGlzLnR5cGVDaGVja2VyLCBub2RlLmRlY29yYXRvcnMpO1xuICAgIGNvbnN0IHVzZXNBbmd1bGFyRmVhdHVyZXMgPSB0aGlzLl9oYXNBbmd1bGFyRGVjb3JhdGVkQ2xhc3NNZW1iZXIobm9kZSk7XG4gICAgaWYgKG5nRGVjb3JhdG9ycyA9PT0gdW5kZWZpbmVkIHx8IG5nRGVjb3JhdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7aXNEaXJlY3RpdmVPckNvbXBvbmVudDogZmFsc2UsIGlzQWJzdHJhY3REaXJlY3RpdmU6IGZhbHNlLCB1c2VzQW5ndWxhckZlYXR1cmVzfTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlRGVjb3JhdG9yID0gbmdEZWNvcmF0b3JzLmZpbmQoKHtuYW1lfSkgPT4gbmFtZSA9PT0gJ0RpcmVjdGl2ZScpO1xuICAgIGNvbnN0IGNvbXBvbmVudERlY29yYXRvciA9IG5nRGVjb3JhdG9ycy5maW5kKCh7bmFtZX0pID0+IG5hbWUgPT09ICdDb21wb25lbnQnKTtcbiAgICBjb25zdCBpc0Fic3RyYWN0RGlyZWN0aXZlID1cbiAgICAgICAgZGlyZWN0aXZlRGVjb3JhdG9yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5faXNBYnN0cmFjdERpcmVjdGl2ZShkaXJlY3RpdmVEZWNvcmF0b3IpO1xuICAgIHJldHVybiB7XG4gICAgICBpc0RpcmVjdGl2ZU9yQ29tcG9uZW50OiAhIWRpcmVjdGl2ZURlY29yYXRvciB8fCAhIWNvbXBvbmVudERlY29yYXRvcixcbiAgICAgIGlzQWJzdHJhY3REaXJlY3RpdmUsXG4gICAgICB1c2VzQW5ndWxhckZlYXR1cmVzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGRlY29yYXRvciByZXNvbHZlcyB0byBhbiBhYnN0cmFjdCBkaXJlY3RpdmUuIEFuIGRpcmVjdGl2ZSBpc1xuICAgKiBjb25zaWRlcmVkIFwiYWJzdHJhY3RcIiBpZiB0aGVyZSBpcyBubyBzZWxlY3RvciBzcGVjaWZpZWQuXG4gICAqL1xuICBwcml2YXRlIF9pc0Fic3RyYWN0RGlyZWN0aXZlKHtub2RlfTogTmdEZWNvcmF0b3IpOiBib29sZWFuIHtcbiAgICBjb25zdCBtZXRhZGF0YUFyZ3MgPSBub2RlLmV4cHJlc3Npb24uYXJndW1lbnRzO1xuICAgIGlmIChtZXRhZGF0YUFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgbWV0YWRhdGFFeHByID0gdW53cmFwRXhwcmVzc2lvbihtZXRhZGF0YUFyZ3NbMF0pO1xuICAgIGlmICghdHMuaXNPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihtZXRhZGF0YUV4cHIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG1ldGFkYXRhID0gcmVmbGVjdE9iamVjdExpdGVyYWwobWV0YWRhdGFFeHByKTtcbiAgICBpZiAoIW1ldGFkYXRhLmhhcygnc2VsZWN0b3InKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMucGFydGlhbEV2YWx1YXRvci5ldmFsdWF0ZShtZXRhZGF0YS5nZXQoJ3NlbGVjdG9yJykhKTtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc0FuZ3VsYXJEZWNvcmF0ZWRDbGFzc01lbWJlcihub2RlOiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5vZGUubWVtYmVycy5zb21lKFxuICAgICAgICBtID0+IG0uZGVjb3JhdG9ycyAmJiBnZXRBbmd1bGFyRGVjb3JhdG9ycyh0aGlzLnR5cGVDaGVja2VyLCBtLmRlY29yYXRvcnMpLmxlbmd0aCAhPT0gMCk7XG4gIH1cbn1cbiJdfQ==