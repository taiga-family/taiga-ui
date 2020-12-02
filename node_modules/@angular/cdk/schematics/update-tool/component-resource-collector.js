/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/update-tool/component-resource-collector", ["require", "exports", "path", "typescript", "@angular/cdk/schematics/update-tool/utils/decorators", "@angular/cdk/schematics/update-tool/utils/functions", "@angular/cdk/schematics/update-tool/utils/line-mappings", "@angular/cdk/schematics/update-tool/utils/property-name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const path_1 = require("path");
    const ts = require("typescript");
    const decorators_1 = require("@angular/cdk/schematics/update-tool/utils/decorators");
    const functions_1 = require("@angular/cdk/schematics/update-tool/utils/functions");
    const line_mappings_1 = require("@angular/cdk/schematics/update-tool/utils/line-mappings");
    const property_name_1 = require("@angular/cdk/schematics/update-tool/utils/property-name");
    /**
     * Collector that can be used to find Angular templates and stylesheets referenced within
     * given TypeScript source files (inline or external referenced files)
     */
    class ComponentResourceCollector {
        constructor(typeChecker, _fileSystem) {
            this.typeChecker = typeChecker;
            this._fileSystem = _fileSystem;
            this.resolvedTemplates = [];
            this.resolvedStylesheets = [];
        }
        visitNode(node) {
            if (node.kind === ts.SyntaxKind.ClassDeclaration) {
                this._visitClassDeclaration(node);
            }
        }
        _visitClassDeclaration(node) {
            if (!node.decorators || !node.decorators.length) {
                return;
            }
            const ngDecorators = decorators_1.getAngularDecorators(this.typeChecker, node.decorators);
            const componentDecorator = ngDecorators.find(dec => dec.name === 'Component');
            // In case no "@Component" decorator could be found on the current class, skip.
            if (!componentDecorator) {
                return;
            }
            const decoratorCall = componentDecorator.node.expression;
            // In case the component decorator call is not valid, skip this class declaration.
            if (decoratorCall.arguments.length !== 1) {
                return;
            }
            const componentMetadata = functions_1.unwrapExpression(decoratorCall.arguments[0]);
            // Ensure that the component metadata is an object literal expression.
            if (!ts.isObjectLiteralExpression(componentMetadata)) {
                return;
            }
            const sourceFile = node.getSourceFile();
            const sourceFileName = sourceFile.fileName;
            // Walk through all component metadata properties and determine the referenced
            // HTML templates (either external or inline)
            componentMetadata.properties.forEach(property => {
                if (!ts.isPropertyAssignment(property)) {
                    return;
                }
                const propertyName = property_name_1.getPropertyNameText(property.name);
                const filePath = path_1.resolve(sourceFileName);
                if (propertyName === 'styles' && ts.isArrayLiteralExpression(property.initializer)) {
                    property.initializer.elements.forEach(el => {
                        if (ts.isStringLiteralLike(el)) {
                            // Need to add an offset of one to the start because the template quotes are
                            // not part of the template content.
                            const templateStartIdx = el.getStart() + 1;
                            this.resolvedStylesheets.push({
                                filePath: filePath,
                                container: node,
                                content: el.text,
                                inline: true,
                                start: templateStartIdx,
                                getCharacterAndLineOfPosition: pos => ts.getLineAndCharacterOfPosition(sourceFile, pos + templateStartIdx),
                            });
                        }
                    });
                }
                // In case there is an inline template specified, ensure that the value is statically
                // analyzable by checking if the initializer is a string literal-like node.
                if (propertyName === 'template' && ts.isStringLiteralLike(property.initializer)) {
                    // Need to add an offset of one to the start because the template quotes are
                    // not part of the template content.
                    const templateStartIdx = property.initializer.getStart() + 1;
                    this.resolvedTemplates.push({
                        filePath: filePath,
                        container: node,
                        content: property.initializer.text,
                        inline: true,
                        start: templateStartIdx,
                        getCharacterAndLineOfPosition: pos => ts.getLineAndCharacterOfPosition(sourceFile, pos + templateStartIdx)
                    });
                }
                if (propertyName === 'styleUrls' && ts.isArrayLiteralExpression(property.initializer)) {
                    property.initializer.elements.forEach(el => {
                        if (ts.isStringLiteralLike(el)) {
                            const stylesheetPath = path_1.resolve(path_1.dirname(sourceFileName), el.text);
                            // In case the stylesheet does not exist in the file system, skip it gracefully.
                            if (!this._fileSystem.exists(stylesheetPath)) {
                                return;
                            }
                            this.resolvedStylesheets.push(this.resolveExternalStylesheet(stylesheetPath, node));
                        }
                    });
                }
                if (propertyName === 'templateUrl' && ts.isStringLiteralLike(property.initializer)) {
                    const templatePath = path_1.resolve(path_1.dirname(sourceFileName), property.initializer.text);
                    // In case the template does not exist in the file system, skip this
                    // external template.
                    if (!this._fileSystem.exists(templatePath)) {
                        return;
                    }
                    const fileContent = this._fileSystem.read(templatePath);
                    const lineStartsMap = line_mappings_1.computeLineStartsMap(fileContent);
                    this.resolvedTemplates.push({
                        filePath: templatePath,
                        container: node,
                        content: fileContent,
                        inline: false,
                        start: 0,
                        getCharacterAndLineOfPosition: pos => line_mappings_1.getLineAndCharacterFromPosition(lineStartsMap, pos),
                    });
                }
            });
        }
        /** Resolves an external stylesheet by reading its content and computing line mappings. */
        resolveExternalStylesheet(filePath, container) {
            const fileContent = this._fileSystem.read(filePath);
            const lineStartsMap = line_mappings_1.computeLineStartsMap(fileContent);
            return {
                filePath: filePath,
                container: container,
                content: fileContent,
                inline: false,
                start: 0,
                getCharacterAndLineOfPosition: pos => line_mappings_1.getLineAndCharacterFromPosition(lineStartsMap, pos),
            };
        }
    }
    exports.ComponentResourceCollector = ComponentResourceCollector;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91cGRhdGUtdG9vbC9jb21wb25lbnQtcmVzb3VyY2UtY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQXNDO0lBQ3RDLGlDQUFpQztJQUVqQyxxRkFBd0Q7SUFDeEQsbUZBQW1EO0lBQ25ELDJGQUkrQjtJQUMvQiwyRkFBMEQ7SUFxQjFEOzs7T0FHRztJQUNILE1BQWEsMEJBQTBCO1FBSXJDLFlBQW1CLFdBQTJCLEVBQVUsV0FBdUI7WUFBNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFIL0Usc0JBQWlCLEdBQXVCLEVBQUUsQ0FBQztZQUMzQyx3QkFBbUIsR0FBdUIsRUFBRSxDQUFDO1FBRXFDLENBQUM7UUFFbkYsU0FBUyxDQUFDLElBQWE7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUEyQixDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDO1FBRU8sc0JBQXNCLENBQUMsSUFBeUI7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDL0MsT0FBTzthQUNSO1lBRUQsTUFBTSxZQUFZLEdBQUcsaUNBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0UsTUFBTSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxXQUFXLENB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USxFQUFFLFlBQVk7d0JBQ3RCLFNBQVMsRUFBRSxJQUFJO3dCQUNmLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsQ0FBQzt3QkFDUiw2QkFBNkIsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLCtDQUErQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUM7cUJBQzFGLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDBGQUEwRjtRQUMxRix5QkFBeUIsQ0FBQyxRQUFnQixFQUFFLFNBQW1DO1lBRTdFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sYUFBYSxHQUFHLG9DQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXhELE9BQU87Z0JBQ0wsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQywrQ0FBK0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDO2FBQzFGLENBQUM7UUFDSixDQUFDO0tBQ0Y7SUE5SUQsZ0VBOElDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZGlybmFtZSwgcmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7RmlsZVN5c3RlbX0gZnJvbSAnLi9maWxlLXN5c3RlbSc7XG5pbXBvcnQge2dldEFuZ3VsYXJEZWNvcmF0b3JzfSBmcm9tICcuL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHt1bndyYXBFeHByZXNzaW9ufSBmcm9tICcuL3V0aWxzL2Z1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBjb21wdXRlTGluZVN0YXJ0c01hcCxcbiAgZ2V0TGluZUFuZENoYXJhY3RlckZyb21Qb3NpdGlvbixcbiAgTGluZUFuZENoYXJhY3RlclxufSBmcm9tICcuL3V0aWxzL2xpbmUtbWFwcGluZ3MnO1xuaW1wb3J0IHtnZXRQcm9wZXJ0eU5hbWVUZXh0fSBmcm9tICcuL3V0aWxzL3Byb3BlcnR5LW5hbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVkUmVzb3VyY2Uge1xuICAvKiogQ2xhc3MgZGVjbGFyYXRpb24gdGhhdCBjb250YWlucyB0aGlzIHJlc291cmNlLiAqL1xuICBjb250YWluZXI6IHRzLkNsYXNzRGVjbGFyYXRpb258bnVsbDtcbiAgLyoqIEZpbGUgY29udGVudCBvZiB0aGUgZ2l2ZW4gdGVtcGxhdGUuICovXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgLyoqIFN0YXJ0IG9mZnNldCBvZiB0aGUgcmVzb3VyY2UgY29udGVudCAoZS5nLiBpbiB0aGUgaW5saW5lIHNvdXJjZSBmaWxlKSAqL1xuICBzdGFydDogbnVtYmVyO1xuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gcmVzb3VyY2UgaXMgaW5saW5lIG9yIG5vdC4gKi9cbiAgaW5saW5lOiBib29sZWFuO1xuICAvKiogUGF0aCB0byB0aGUgZmlsZSB0aGF0IGNvbnRhaW5zIHRoaXMgcmVzb3VyY2UuICovXG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjaGFyYWN0ZXIgYW5kIGxpbmUgb2YgYSBnaXZlbiBwb3NpdGlvbiBpbmRleCBpbiB0aGUgcmVzb3VyY2UuXG4gICAqIElmIHRoZSByZXNvdXJjZSBpcyBkZWNsYXJlZCBpbmxpbmUgd2l0aGluIGEgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZSwgdGhlIGxpbmUgYW5kXG4gICAqIGNoYXJhY3RlciBhcmUgYmFzZWQgb24gdGhlIGZ1bGwgc291cmNlIGZpbGUgY29udGVudC5cbiAgICovXG4gIGdldENoYXJhY3RlckFuZExpbmVPZlBvc2l0aW9uOiAocG9zOiBudW1iZXIpID0+IExpbmVBbmRDaGFyYWN0ZXI7XG59XG5cbi8qKlxuICogQ29sbGVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBBbmd1bGFyIHRlbXBsYXRlcyBhbmQgc3R5bGVzaGVldHMgcmVmZXJlbmNlZCB3aXRoaW5cbiAqIGdpdmVuIFR5cGVTY3JpcHQgc291cmNlIGZpbGVzIChpbmxpbmUgb3IgZXh0ZXJuYWwgcmVmZXJlbmNlZCBmaWxlcylcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlc291cmNlQ29sbGVjdG9yIHtcbiAgcmVzb2x2ZWRUZW1wbGF0ZXM6IFJlc29sdmVkUmVzb3VyY2VbXSA9IFtdO1xuICByZXNvbHZlZFN0eWxlc2hlZXRzOiBSZXNvbHZlZFJlc291cmNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBwcml2YXRlIF9maWxlU3lzdGVtOiBGaWxlU3lzdGVtKSB7fVxuXG4gIHZpc2l0Tm9kZShub2RlOiB0cy5Ob2RlKSB7XG4gICAgaWYgKG5vZGUua2luZCA9PT0gdHMuU3ludGF4S2luZC5DbGFzc0RlY2xhcmF0aW9uKSB7XG4gICAgICB0aGlzLl92aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSBhcyB0cy5DbGFzc0RlY2xhcmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgIGlmICghbm9kZS5kZWNvcmF0b3JzIHx8ICFub2RlLmRlY29yYXRvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmdEZWNvcmF0b3JzID0gZ2V0QW5ndWxhckRlY29yYXRvcnModGhpcy50eXBlQ2hlY2tlciwgbm9kZS5kZWNvcmF0b3JzKTtcbiAgICBjb25zdCBjb21wb25lbnREZWNvcmF0b3IgPSBuZ0RlY29yYXRvcnMuZmluZChkZWMgPT4gZGVjLm5hbWUgPT09ICdDb21wb25lbnQnKTtcblxuICAgIC8vIEluIGNhc2Ugbm8gXCJAQ29tcG9uZW50XCIgZGVjb3JhdG9yIGNvdWxkIGJlIGZvdW5kIG9uIHRoZSBjdXJyZW50IGNsYXNzLCBza2lwLlxuICAgIGlmICghY29tcG9uZW50RGVjb3JhdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVjb3JhdG9yQ2FsbCA9IGNvbXBvbmVudERlY29yYXRvci5ub2RlLmV4cHJlc3Npb247XG5cbiAgICAvLyBJbiBjYXNlIHRoZSBjb21wb25lbnQgZGVjb3JhdG9yIGNhbGwgaXMgbm90IHZhbGlkLCBza2lwIHRoaXMgY2xhc3MgZGVjbGFyYXRpb24uXG4gICAgaWYgKGRlY29yYXRvckNhbGwuYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudE1ldGFkYXRhID0gdW53cmFwRXhwcmVzc2lvbihkZWNvcmF0b3JDYWxsLmFyZ3VtZW50c1swXSk7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgY29tcG9uZW50IG1ldGFkYXRhIGlzIGFuIG9iamVjdCBsaXRlcmFsIGV4cHJlc3Npb24uXG4gICAgaWYgKCF0cy5pc09iamVjdExpdGVyYWxFeHByZXNzaW9uKGNvbXBvbmVudE1ldGFkYXRhKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBub2RlLmdldFNvdXJjZUZpbGUoKTtcbiAgICBjb25zdCBzb3VyY2VGaWxlTmFtZSA9IHNvdXJjZUZpbGUuZmlsZU5hbWU7XG5cbiAgICAvLyBXYWxrIHRocm91Z2ggYWxsIGNvbXBvbmVudCBtZXRhZGF0YSBwcm9wZXJ0aWVzIGFuZCBkZXRlcm1pbmUgdGhlIHJlZmVyZW5jZWRcbiAgICAvLyBIVE1MIHRlbXBsYXRlcyAoZWl0aGVyIGV4dGVybmFsIG9yIGlubGluZSlcbiAgICBjb21wb25lbnRNZXRhZGF0YS5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgaWYgKCF0cy5pc1Byb3BlcnR5QXNzaWdubWVudChwcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBnZXRQcm9wZXJ0eU5hbWVUZXh0KHByb3BlcnR5Lm5hbWUpO1xuICAgICAgY29uc3QgZmlsZVBhdGggPSByZXNvbHZlKHNvdXJjZUZpbGVOYW1lKTtcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3N0eWxlcycgJiYgdHMuaXNBcnJheUxpdGVyYWxFeHByZXNzaW9uKHByb3BlcnR5LmluaXRpYWxpemVyKSkge1xuICAgICAgICBwcm9wZXJ0eS5pbml0aWFsaXplci5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBpZiAodHMuaXNTdHJpbmdMaXRlcmFsTGlrZShlbCkpIHtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gYWRkIGFuIG9mZnNldCBvZiBvbmUgdG8gdGhlIHN0YXJ0IGJlY2F1c2UgdGhlIHRlbXBsYXRlIHF1b3RlcyBhcmVcbiAgICAgICAgICAgIC8vIG5vdCBwYXJ0IG9mIHRoZSB0ZW1wbGF0ZSBjb250ZW50LlxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVTdGFydElkeCA9IGVsLmdldFN0YXJ0KCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlZFN0eWxlc2hlZXRzLnB1c2goe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgIGNvbnRhaW5lcjogbm9kZSxcbiAgICAgICAgICAgICAgY29udGVudDogZWwudGV4dCxcbiAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgICBzdGFydDogdGVtcGxhdGVTdGFydElkeCxcbiAgICAgICAgICAgICAgZ2V0Q2hhcmFjdGVyQW5kTGluZU9mUG9zaXRpb246IHBvcyA9PlxuICAgICAgICAgICAgICAgICAgdHMuZ2V0TGluZUFuZENoYXJhY3Rlck9mUG9zaXRpb24oc291cmNlRmlsZSwgcG9zICsgdGVtcGxhdGVTdGFydElkeCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBjYXNlIHRoZXJlIGlzIGFuIGlubGluZSB0ZW1wbGF0ZSBzcGVjaWZpZWQsIGVuc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBzdGF0aWNhbGx5XG4gICAgICAvLyBhbmFseXphYmxlIGJ5IGNoZWNraW5nIGlmIHRoZSBpbml0aWFsaXplciBpcyBhIHN0cmluZyBsaXRlcmFsLWxpa2Ugbm9kZS5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd0ZW1wbGF0ZScgJiYgdHMuaXNTdHJpbmdMaXRlcmFsTGlrZShwcm9wZXJ0eS5pbml0aWFsaXplcikpIHtcbiAgICAgICAgLy8gTmVlZCB0byBhZGQgYW4gb2Zmc2V0IG9mIG9uZSB0byB0aGUgc3RhcnQgYmVjYXVzZSB0aGUgdGVtcGxhdGUgcXVvdGVzIGFyZVxuICAgICAgICAvLyBub3QgcGFydCBvZiB0aGUgdGVtcGxhdGUgY29udGVudC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVTdGFydElkeCA9IHByb3BlcnR5LmluaXRpYWxpemVyLmdldFN0YXJ0KCkgKyAxO1xuICAgICAgICB0aGlzLnJlc29sdmVkVGVtcGxhdGVzLnB1c2goe1xuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgICBjb250YWluZXI6IG5vZGUsXG4gICAgICAgICAgY29udGVudDogcHJvcGVydHkuaW5pdGlhbGl6ZXIudGV4dCxcbiAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgc3RhcnQ6IHRlbXBsYXRlU3RhcnRJZHgsXG4gICAgICAgICAgZ2V0Q2hhcmFjdGVyQW5kTGluZU9mUG9zaXRpb246IHBvcyA9PlxuICAgICAgICAgICAgICB0cy5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihzb3VyY2VGaWxlLCBwb3MgKyB0ZW1wbGF0ZVN0YXJ0SWR4KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3N0eWxlVXJscycgJiYgdHMuaXNBcnJheUxpdGVyYWxFeHByZXNzaW9uKHByb3BlcnR5LmluaXRpYWxpemVyKSkge1xuICAgICAgICBwcm9wZXJ0eS5pbml0aWFsaXplci5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBpZiAodHMuaXNTdHJpbmdMaXRlcmFsTGlrZShlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXRQYXRoID0gcmVzb2x2ZShkaXJuYW1lKHNvdXJjZUZpbGVOYW1lKSwgZWwudGV4dCk7XG5cbiAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIHN0eWxlc2hlZXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGZpbGUgc3lzdGVtLCBza2lwIGl0IGdyYWNlZnVsbHkuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ZpbGVTeXN0ZW0uZXhpc3RzKHN0eWxlc2hlZXRQYXRoKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRTdHlsZXNoZWV0cy5wdXNoKHRoaXMucmVzb2x2ZUV4dGVybmFsU3R5bGVzaGVldChzdHlsZXNoZWV0UGF0aCwgbm9kZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd0ZW1wbGF0ZVVybCcgJiYgdHMuaXNTdHJpbmdMaXRlcmFsTGlrZShwcm9wZXJ0eS5pbml0aWFsaXplcikpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQYXRoID0gcmVzb2x2ZShkaXJuYW1lKHNvdXJjZUZpbGVOYW1lKSwgcHJvcGVydHkuaW5pdGlhbGl6ZXIudGV4dCk7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgdGVtcGxhdGUgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGZpbGUgc3lzdGVtLCBza2lwIHRoaXNcbiAgICAgICAgLy8gZXh0ZXJuYWwgdGVtcGxhdGUuXG4gICAgICAgIGlmICghdGhpcy5fZmlsZVN5c3RlbS5leGlzdHModGVtcGxhdGVQYXRoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gdGhpcy5fZmlsZVN5c3RlbS5yZWFkKHRlbXBsYXRlUGF0aCk7XG4gICAgICAgIGNvbnN0IGxpbmVTdGFydHNNYXAgPSBjb21wdXRlTGluZVN0YXJ0c01hcChmaWxlQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5yZXNvbHZlZFRlbXBsYXRlcy5wdXNoKHtcbiAgICAgICAgICBmaWxlUGF0aDogdGVtcGxhdGVQYXRoLFxuICAgICAgICAgIGNvbnRhaW5lcjogbm9kZSxcbiAgICAgICAgICBjb250ZW50OiBmaWxlQ29udGVudCxcbiAgICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgIGdldENoYXJhY3RlckFuZExpbmVPZlBvc2l0aW9uOiBwb3MgPT4gZ2V0TGluZUFuZENoYXJhY3RlckZyb21Qb3NpdGlvbihsaW5lU3RhcnRzTWFwLCBwb3MpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXNvbHZlcyBhbiBleHRlcm5hbCBzdHlsZXNoZWV0IGJ5IHJlYWRpbmcgaXRzIGNvbnRlbnQgYW5kIGNvbXB1dGluZyBsaW5lIG1hcHBpbmdzLiAqL1xuICByZXNvbHZlRXh0ZXJuYWxTdHlsZXNoZWV0KGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRhaW5lcjogdHMuQ2xhc3NEZWNsYXJhdGlvbnxudWxsKTpcbiAgICAgIFJlc29sdmVkUmVzb3VyY2Uge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gdGhpcy5fZmlsZVN5c3RlbS5yZWFkKGZpbGVQYXRoKTtcbiAgICBjb25zdCBsaW5lU3RhcnRzTWFwID0gY29tcHV0ZUxpbmVTdGFydHNNYXAoZmlsZUNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgY29udGVudDogZmlsZUNvbnRlbnQsXG4gICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBnZXRDaGFyYWN0ZXJBbmRMaW5lT2ZQb3NpdGlvbjogcG9zID0+IGdldExpbmVBbmRDaGFyYWN0ZXJGcm9tUG9zaXRpb24obGluZVN0YXJ0c01hcCwgcG9zKSxcbiAgICB9O1xuICB9XG59XG4iXX0=