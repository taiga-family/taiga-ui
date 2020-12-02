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
        define("@angular/core/schematics/migrations/module-with-providers/transform", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/reflection", "typescript", "@angular/core/schematics/migrations/module-with-providers/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    const partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    const reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    const ts = require("typescript");
    const util_1 = require("@angular/core/schematics/migrations/module-with-providers/util");
    const TODO_COMMENT = 'TODO: The following node requires a generic type for `ModuleWithProviders';
    class ModuleWithProvidersTransform {
        constructor(typeChecker, getUpdateRecorder) {
            this.typeChecker = typeChecker;
            this.getUpdateRecorder = getUpdateRecorder;
            this.printer = ts.createPrinter();
            this.partialEvaluator = new partial_evaluator_1.PartialEvaluator(new reflection_1.TypeScriptReflectionHost(this.typeChecker), this.typeChecker, 
            /* dependencyTracker */ null);
        }
        /** Migrates a given NgModule by walking through the referenced providers and static methods. */
        migrateModule(module) {
            return module.staticMethodsWithoutType.map(this._migrateStaticNgModuleMethod.bind(this))
                .filter(v => v);
        }
        /** Migrates a ModuleWithProviders type definition that has no explicit generic type */
        migrateType(type) {
            const parent = type.parent;
            let moduleText;
            if ((ts.isFunctionDeclaration(parent) || ts.isMethodDeclaration(parent)) && parent.body) {
                const returnStatement = parent.body.statements.find(ts.isReturnStatement);
                // No return type found, exit
                if (!returnStatement || !returnStatement.expression) {
                    return [{ node: parent, message: `Return type is not statically analyzable.` }];
                }
                moduleText = this._getNgModuleTypeOfExpression(returnStatement.expression);
            }
            else if (ts.isPropertyDeclaration(parent) || ts.isVariableDeclaration(parent)) {
                if (!parent.initializer) {
                    addTodoToNode(type, TODO_COMMENT);
                    this._updateNode(type, type);
                    return [{ node: parent, message: `Unable to determine type for declaration.` }];
                }
                moduleText = this._getNgModuleTypeOfExpression(parent.initializer);
            }
            if (moduleText) {
                this._addGenericToTypeReference(type, moduleText);
                return [];
            }
            return [{ node: parent, message: `Type is not statically analyzable.` }];
        }
        /** Add a given generic to a type reference node */
        _addGenericToTypeReference(node, typeName) {
            const newGenericExpr = util_1.createModuleWithProvidersType(typeName, node);
            this._updateNode(node, newGenericExpr);
        }
        /**
         * Migrates a given static method if its ModuleWithProviders does not provide
         * a generic type.
         */
        _updateStaticMethodType(method, typeName) {
            const newGenericExpr = util_1.createModuleWithProvidersType(typeName, method.type);
            const newMethodDecl = ts.updateMethod(method, method.decorators, method.modifiers, method.asteriskToken, method.name, method.questionToken, method.typeParameters, method.parameters, newGenericExpr, method.body);
            this._updateNode(method, newMethodDecl);
        }
        /** Whether the resolved value map represents a ModuleWithProviders object */
        isModuleWithProvidersType(value) {
            const ngModule = value.get('ngModule') !== undefined;
            const providers = value.get('providers') !== undefined;
            return ngModule && (value.size === 1 || (providers && value.size === 2));
        }
        /**
         * Determine the generic type of a suspected ModuleWithProviders return type and add it
         * explicitly
         */
        _migrateStaticNgModuleMethod(node) {
            const returnStatement = node.body &&
                node.body.statements.find(n => ts.isReturnStatement(n));
            // No return type found, exit
            if (!returnStatement || !returnStatement.expression) {
                return { node: node, message: `Return type is not statically analyzable.` };
            }
            const moduleText = this._getNgModuleTypeOfExpression(returnStatement.expression);
            if (moduleText) {
                this._updateStaticMethodType(node, moduleText);
                return null;
            }
            return { node: node, message: `Method type is not statically analyzable.` };
        }
        /** Evaluate and return the ngModule type from an expression */
        _getNgModuleTypeOfExpression(expr) {
            const evaluatedExpr = this.partialEvaluator.evaluate(expr);
            return this._getTypeOfResolvedValue(evaluatedExpr);
        }
        /**
         * Visits a given object literal expression to determine the ngModule type. If the expression
         * cannot be resolved, add a TODO to alert the user.
         */
        _getTypeOfResolvedValue(value) {
            if (value instanceof Map && this.isModuleWithProvidersType(value)) {
                const mapValue = value.get('ngModule');
                if (mapValue instanceof imports_1.Reference && ts.isClassDeclaration(mapValue.node) &&
                    mapValue.node.name) {
                    return mapValue.node.name.text;
                }
                else if (mapValue instanceof partial_evaluator_1.DynamicValue) {
                    addTodoToNode(mapValue.node, TODO_COMMENT);
                    this._updateNode(mapValue.node, mapValue.node);
                }
            }
            return undefined;
        }
        _updateNode(node, newNode) {
            const newText = this.printer.printNode(ts.EmitHint.Unspecified, newNode, node.getSourceFile());
            const recorder = this.getUpdateRecorder(node.getSourceFile());
            recorder.remove(node.getStart(), node.getWidth());
            recorder.insertRight(node.getStart(), newText);
        }
    }
    exports.ModuleWithProvidersTransform = ModuleWithProvidersTransform;
    /**
     * Adds a to-do to the given TypeScript node which alerts developers to fix
     * potential issues identified by the migration.
     */
    function addTodoToNode(node, text) {
        ts.setSyntheticLeadingComments(node, [{
                pos: -1,
                end: -1,
                hasTrailingNewLine: false,
                kind: ts.SyntaxKind.MultiLineCommentTrivia,
                text: ` ${text} `
            }]);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvbW9kdWxlLXdpdGgtcHJvdmlkZXJzL3RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILHFFQUFrRTtJQUNsRSx5RkFBa0k7SUFDbEksMkVBQW9GO0lBQ3BGLGlDQUFpQztJQUdqQyx5RkFBcUQ7SUFPckQsTUFBTSxZQUFZLEdBQUcsMkVBQTJFLENBQUM7SUFFakcsTUFBYSw0QkFBNEI7UUFNdkMsWUFDWSxXQUEyQixFQUMzQixpQkFBd0Q7WUFEeEQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1lBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBdUM7WUFQNUQsWUFBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3QixxQkFBZ0IsR0FBcUIsSUFBSSxvQ0FBZ0IsQ0FDN0QsSUFBSSxxQ0FBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEUsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFJcUMsQ0FBQztRQUV4RSxnR0FBZ0c7UUFDaEcsYUFBYSxDQUFDLE1BQXdCO1lBQ3BDLE9BQU8sTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQXNCLENBQUM7UUFDbEQsQ0FBQztRQUVELHVGQUF1RjtRQUN2RixXQUFXLENBQUMsSUFBMEI7WUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLFVBQTRCLENBQUM7WUFDakMsSUFBSSxDQUFDLEVBQUUs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QUFDO2dCQUNQLGtCQUFrQixFQUFFLEtBQUs7Z0JBQ3pCLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQjtnQkFDMUMsSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHO2FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VXBkYXRlUmVjb3JkZXJ9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMnO1xuaW1wb3J0IHtEeW5hbWljVmFsdWUsIFBhcnRpYWxFdmFsdWF0b3IsIFJlc29sdmVkVmFsdWUsIFJlc29sdmVkVmFsdWVNYXB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGFydGlhbF9ldmFsdWF0b3InO1xuaW1wb3J0IHtUeXBlU2NyaXB0UmVmbGVjdGlvbkhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtSZXNvbHZlZE5nTW9kdWxlfSBmcm9tICcuL2NvbGxlY3Rvcic7XG5pbXBvcnQge2NyZWF0ZU1vZHVsZVdpdGhQcm92aWRlcnNUeXBlfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuYWx5c2lzRmFpbHVyZSB7XG4gIG5vZGU6IHRzLk5vZGU7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgVE9ET19DT01NRU5UID0gJ1RPRE86IFRoZSBmb2xsb3dpbmcgbm9kZSByZXF1aXJlcyBhIGdlbmVyaWMgdHlwZSBmb3IgYE1vZHVsZVdpdGhQcm92aWRlcnMnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlV2l0aFByb3ZpZGVyc1RyYW5zZm9ybSB7XG4gIHByaXZhdGUgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgcHJpdmF0ZSBwYXJ0aWFsRXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yID0gbmV3IFBhcnRpYWxFdmFsdWF0b3IoXG4gICAgICBuZXcgVHlwZVNjcmlwdFJlZmxlY3Rpb25Ib3N0KHRoaXMudHlwZUNoZWNrZXIpLCB0aGlzLnR5cGVDaGVja2VyLFxuICAgICAgLyogZGVwZW5kZW5jeVRyYWNrZXIgKi8gbnVsbCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlcixcbiAgICAgIHByaXZhdGUgZ2V0VXBkYXRlUmVjb3JkZXI6IChzZjogdHMuU291cmNlRmlsZSkgPT4gVXBkYXRlUmVjb3JkZXIpIHt9XG5cbiAgLyoqIE1pZ3JhdGVzIGEgZ2l2ZW4gTmdNb2R1bGUgYnkgd2Fsa2luZyB0aHJvdWdoIHRoZSByZWZlcmVuY2VkIHByb3ZpZGVycyBhbmQgc3RhdGljIG1ldGhvZHMuICovXG4gIG1pZ3JhdGVNb2R1bGUobW9kdWxlOiBSZXNvbHZlZE5nTW9kdWxlKTogQW5hbHlzaXNGYWlsdXJlW10ge1xuICAgIHJldHVybiBtb2R1bGUuc3RhdGljTWV0aG9kc1dpdGhvdXRUeXBlLm1hcCh0aGlzLl9taWdyYXRlU3RhdGljTmdNb2R1bGVNZXRob2QuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2KSBhcyBBbmFseXNpc0ZhaWx1cmVbXTtcbiAgfVxuXG4gIC8qKiBNaWdyYXRlcyBhIE1vZHVsZVdpdGhQcm92aWRlcnMgdHlwZSBkZWZpbml0aW9uIHRoYXQgaGFzIG5vIGV4cGxpY2l0IGdlbmVyaWMgdHlwZSAqL1xuICBtaWdyYXRlVHlwZSh0eXBlOiB0cy5UeXBlUmVmZXJlbmNlTm9kZSk6IEFuYWx5c2lzRmFpbHVyZVtdIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0eXBlLnBhcmVudDtcbiAgICBsZXQgbW9kdWxlVGV4dDogc3RyaW5nfHVuZGVmaW5lZDtcbiAgICBpZiAoKHRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihwYXJlbnQpIHx8IHRzLmlzTWV0aG9kRGVjbGFyYXRpb24ocGFyZW50KSkgJiYgcGFyZW50LmJvZHkpIHtcbiAgICAgIGNvbnN0IHJldHVyblN0YXRlbWVudCA9IHBhcmVudC5ib2R5LnN0YXRlbWVudHMuZmluZCh0cy5pc1JldHVyblN0YXRlbWVudCk7XG5cbiAgICAgIC8vIE5vIHJldHVybiB0eXBlIGZvdW5kLCBleGl0XG4gICAgICBpZiAoIXJldHVyblN0YXRlbWVudCB8fCAhcmV0dXJuU3RhdGVtZW50LmV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIFt7bm9kZTogcGFyZW50LCBtZXNzYWdlOiBgUmV0dXJuIHR5cGUgaXMgbm90IHN0YXRpY2FsbHkgYW5hbHl6YWJsZS5gfV07XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZVRleHQgPSB0aGlzLl9nZXROZ01vZHVsZVR5cGVPZkV4cHJlc3Npb24ocmV0dXJuU3RhdGVtZW50LmV4cHJlc3Npb24pO1xuICAgIH0gZWxzZSBpZiAodHMuaXNQcm9wZXJ0eURlY2xhcmF0aW9uKHBhcmVudCkgfHwgdHMuaXNWYXJpYWJsZURlY2xhcmF0aW9uKHBhcmVudCkpIHtcbiAgICAgIGlmICghcGFyZW50LmluaXRpYWxpemVyKSB7XG4gICAgICAgIGFkZFRvZG9Ub05vZGUodHlwZSwgVE9ET19DT01NRU5UKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTm9kZSh0eXBlLCB0eXBlKTtcbiAgICAgICAgcmV0dXJuIFt7bm9kZTogcGFyZW50LCBtZXNzYWdlOiBgVW5hYmxlIHRvIGRldGVybWluZSB0eXBlIGZvciBkZWNsYXJhdGlvbi5gfV07XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZVRleHQgPSB0aGlzLl9nZXROZ01vZHVsZVR5cGVPZkV4cHJlc3Npb24ocGFyZW50LmluaXRpYWxpemVyKTtcbiAgICB9XG5cbiAgICBpZiAobW9kdWxlVGV4dCkge1xuICAgICAgdGhpcy5fYWRkR2VuZXJpY1RvVHlwZVJlZmVyZW5jZSh0eXBlLCBtb2R1bGVUZXh0KTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3tub2RlOiBwYXJlbnQsIG1lc3NhZ2U6IGBUeXBlIGlzIG5vdCBzdGF0aWNhbGx5IGFuYWx5emFibGUuYH1dO1xuICB9XG5cbiAgLyoqIEFkZCBhIGdpdmVuIGdlbmVyaWMgdG8gYSB0eXBlIHJlZmVyZW5jZSBub2RlICovXG4gIHByaXZhdGUgX2FkZEdlbmVyaWNUb1R5cGVSZWZlcmVuY2Uobm9kZTogdHMuVHlwZVJlZmVyZW5jZU5vZGUsIHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdHZW5lcmljRXhwciA9IGNyZWF0ZU1vZHVsZVdpdGhQcm92aWRlcnNUeXBlKHR5cGVOYW1lLCBub2RlKTtcbiAgICB0aGlzLl91cGRhdGVOb2RlKG5vZGUsIG5ld0dlbmVyaWNFeHByKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBhIGdpdmVuIHN0YXRpYyBtZXRob2QgaWYgaXRzIE1vZHVsZVdpdGhQcm92aWRlcnMgZG9lcyBub3QgcHJvdmlkZVxuICAgKiBhIGdlbmVyaWMgdHlwZS5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRpY01ldGhvZFR5cGUobWV0aG9kOiB0cy5NZXRob2REZWNsYXJhdGlvbiwgdHlwZU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0dlbmVyaWNFeHByID1cbiAgICAgICAgY3JlYXRlTW9kdWxlV2l0aFByb3ZpZGVyc1R5cGUodHlwZU5hbWUsIG1ldGhvZC50eXBlIGFzIHRzLlR5cGVSZWZlcmVuY2VOb2RlKTtcbiAgICBjb25zdCBuZXdNZXRob2REZWNsID0gdHMudXBkYXRlTWV0aG9kKFxuICAgICAgICBtZXRob2QsIG1ldGhvZC5kZWNvcmF0b3JzLCBtZXRob2QubW9kaWZpZXJzLCBtZXRob2QuYXN0ZXJpc2tUb2tlbiwgbWV0aG9kLm5hbWUsXG4gICAgICAgIG1ldGhvZC5xdWVzdGlvblRva2VuLCBtZXRob2QudHlwZVBhcmFtZXRlcnMsIG1ldGhvZC5wYXJhbWV0ZXJzLCBuZXdHZW5lcmljRXhwcixcbiAgICAgICAgbWV0aG9kLmJvZHkpO1xuXG4gICAgdGhpcy5fdXBkYXRlTm9kZShtZXRob2QsIG5ld01ldGhvZERlY2wpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHJlc29sdmVkIHZhbHVlIG1hcCByZXByZXNlbnRzIGEgTW9kdWxlV2l0aFByb3ZpZGVycyBvYmplY3QgKi9cbiAgaXNNb2R1bGVXaXRoUHJvdmlkZXJzVHlwZSh2YWx1ZTogUmVzb2x2ZWRWYWx1ZU1hcCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5nTW9kdWxlID0gdmFsdWUuZ2V0KCduZ01vZHVsZScpICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gdmFsdWUuZ2V0KCdwcm92aWRlcnMnKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIG5nTW9kdWxlICYmICh2YWx1ZS5zaXplID09PSAxIHx8IChwcm92aWRlcnMgJiYgdmFsdWUuc2l6ZSA9PT0gMikpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgZ2VuZXJpYyB0eXBlIG9mIGEgc3VzcGVjdGVkIE1vZHVsZVdpdGhQcm92aWRlcnMgcmV0dXJuIHR5cGUgYW5kIGFkZCBpdFxuICAgKiBleHBsaWNpdGx5XG4gICAqL1xuICBwcml2YXRlIF9taWdyYXRlU3RhdGljTmdNb2R1bGVNZXRob2Qobm9kZTogdHMuTWV0aG9kRGVjbGFyYXRpb24pOiBBbmFseXNpc0ZhaWx1cmV8bnVsbCB7XG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gbm9kZS5ib2R5ICYmXG4gICAgICAgIG5vZGUuYm9keS5zdGF0ZW1lbnRzLmZpbmQobiA9PiB0cy5pc1JldHVyblN0YXRlbWVudChuKSkgYXMgdHMuUmV0dXJuU3RhdGVtZW50IHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gTm8gcmV0dXJuIHR5cGUgZm91bmQsIGV4aXRcbiAgICBpZiAoIXJldHVyblN0YXRlbWVudCB8fCAhcmV0dXJuU3RhdGVtZW50LmV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiB7bm9kZTogbm9kZSwgbWVzc2FnZTogYFJldHVybiB0eXBlIGlzIG5vdCBzdGF0aWNhbGx5IGFuYWx5emFibGUuYH07XG4gICAgfVxuXG4gICAgY29uc3QgbW9kdWxlVGV4dCA9IHRoaXMuX2dldE5nTW9kdWxlVHlwZU9mRXhwcmVzc2lvbihyZXR1cm5TdGF0ZW1lbnQuZXhwcmVzc2lvbik7XG5cbiAgICBpZiAobW9kdWxlVGV4dCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGljTWV0aG9kVHlwZShub2RlLCBtb2R1bGVUZXh0KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7bm9kZTogbm9kZSwgbWVzc2FnZTogYE1ldGhvZCB0eXBlIGlzIG5vdCBzdGF0aWNhbGx5IGFuYWx5emFibGUuYH07XG4gIH1cblxuICAvKiogRXZhbHVhdGUgYW5kIHJldHVybiB0aGUgbmdNb2R1bGUgdHlwZSBmcm9tIGFuIGV4cHJlc3Npb24gKi9cbiAgcHJpdmF0ZSBfZ2V0TmdNb2R1bGVUeXBlT2ZFeHByZXNzaW9uKGV4cHI6IHRzLkV4cHJlc3Npb24pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBldmFsdWF0ZWRFeHByID0gdGhpcy5wYXJ0aWFsRXZhbHVhdG9yLmV2YWx1YXRlKGV4cHIpO1xuICAgIHJldHVybiB0aGlzLl9nZXRUeXBlT2ZSZXNvbHZlZFZhbHVlKGV2YWx1YXRlZEV4cHIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpc2l0cyBhIGdpdmVuIG9iamVjdCBsaXRlcmFsIGV4cHJlc3Npb24gdG8gZGV0ZXJtaW5lIHRoZSBuZ01vZHVsZSB0eXBlLiBJZiB0aGUgZXhwcmVzc2lvblxuICAgKiBjYW5ub3QgYmUgcmVzb2x2ZWQsIGFkZCBhIFRPRE8gdG8gYWxlcnQgdGhlIHVzZXIuXG4gICAqL1xuICBwcml2YXRlIF9nZXRUeXBlT2ZSZXNvbHZlZFZhbHVlKHZhbHVlOiBSZXNvbHZlZFZhbHVlKTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwICYmIHRoaXMuaXNNb2R1bGVXaXRoUHJvdmlkZXJzVHlwZSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1hcFZhbHVlID0gdmFsdWUuZ2V0KCduZ01vZHVsZScpITtcbiAgICAgIGlmIChtYXBWYWx1ZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSAmJiB0cy5pc0NsYXNzRGVjbGFyYXRpb24obWFwVmFsdWUubm9kZSkgJiZcbiAgICAgICAgICBtYXBWYWx1ZS5ub2RlLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlLm5vZGUubmFtZS50ZXh0O1xuICAgICAgfSBlbHNlIGlmIChtYXBWYWx1ZSBpbnN0YW5jZW9mIER5bmFtaWNWYWx1ZSkge1xuICAgICAgICBhZGRUb2RvVG9Ob2RlKG1hcFZhbHVlLm5vZGUsIFRPRE9fQ09NTUVOVCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5vZGUobWFwVmFsdWUubm9kZSwgbWFwVmFsdWUubm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU5vZGUobm9kZTogdHMuTm9kZSwgbmV3Tm9kZTogdHMuTm9kZSkge1xuICAgIGNvbnN0IG5ld1RleHQgPSB0aGlzLnByaW50ZXIucHJpbnROb2RlKHRzLkVtaXRIaW50LlVuc3BlY2lmaWVkLCBuZXdOb2RlLCBub2RlLmdldFNvdXJjZUZpbGUoKSk7XG4gICAgY29uc3QgcmVjb3JkZXIgPSB0aGlzLmdldFVwZGF0ZVJlY29yZGVyKG5vZGUuZ2V0U291cmNlRmlsZSgpKTtcblxuICAgIHJlY29yZGVyLnJlbW92ZShub2RlLmdldFN0YXJ0KCksIG5vZGUuZ2V0V2lkdGgoKSk7XG4gICAgcmVjb3JkZXIuaW5zZXJ0UmlnaHQobm9kZS5nZXRTdGFydCgpLCBuZXdUZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYSB0by1kbyB0byB0aGUgZ2l2ZW4gVHlwZVNjcmlwdCBub2RlIHdoaWNoIGFsZXJ0cyBkZXZlbG9wZXJzIHRvIGZpeFxuICogcG90ZW50aWFsIGlzc3VlcyBpZGVudGlmaWVkIGJ5IHRoZSBtaWdyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGFkZFRvZG9Ub05vZGUobm9kZTogdHMuTm9kZSwgdGV4dDogc3RyaW5nKSB7XG4gIHRzLnNldFN5bnRoZXRpY0xlYWRpbmdDb21tZW50cyhub2RlLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNUcmFpbGluZ05ld0xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAgJHt0ZXh0fSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSk7XG59XG4iXX0=