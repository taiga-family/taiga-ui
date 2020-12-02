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
        define("@angular/compiler-cli/src/ngtsc/indexer/src/transform", ["require", "exports", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/indexer/src/template"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_1 = require("@angular/compiler");
    var template_1 = require("@angular/compiler-cli/src/ngtsc/indexer/src/template");
    /**
     * Generates `IndexedComponent` entries from a `IndexingContext`, which has information
     * about components discovered in the program registered in it.
     *
     * The context must be populated before `generateAnalysis` is called.
     */
    function generateAnalysis(context) {
        var analysis = new Map();
        context.components.forEach(function (_a) {
            var declaration = _a.declaration, selector = _a.selector, boundTemplate = _a.boundTemplate, templateMeta = _a.templateMeta;
            var name = declaration.name.getText();
            var usedComponents = new Set();
            var usedDirs = boundTemplate.getUsedDirectives();
            usedDirs.forEach(function (dir) {
                if (dir.isComponent) {
                    usedComponents.add(dir.ref.node);
                }
            });
            // Get source files for the component and the template. If the template is inline, its source
            // file is the component's.
            var componentFile = new compiler_1.ParseSourceFile(declaration.getSourceFile().getFullText(), declaration.getSourceFile().fileName);
            var templateFile;
            if (templateMeta.isInline) {
                templateFile = componentFile;
            }
            else {
                templateFile = templateMeta.file;
            }
            analysis.set(declaration, {
                name: name,
                selector: selector,
                file: componentFile,
                template: {
                    identifiers: template_1.getTemplateIdentifiers(boundTemplate),
                    usedComponents: usedComponents,
                    isInline: templateMeta.isInline,
                    file: templateFile,
                },
            });
        });
        return analysis;
    }
    exports.generateAnalysis = generateAnalysis;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9pbmRleGVyL3NyYy90cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBa0Q7SUFJbEQsaUZBQWtEO0lBRWxEOzs7OztPQUtHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBd0I7UUFDdkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQW9DLENBQUM7UUFFN0QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFvRDtnQkFBbkQsNEJBQVcsRUFBRSxzQkFBUSxFQUFFLGdDQUFhLEVBQUUsOEJBQVk7WUFDN0UsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV4QyxJQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztZQUNqRCxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNuRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO29CQUNuQixjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCw2RkFBNkY7WUFDN0YsMkJBQTJCO1lBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksMEJBQWUsQ0FDckMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRixJQUFJLFlBQTZCLENBQUM7WUFDbEMsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUN6QixZQUFZLEdBQUcsYUFBYSxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQ2xDO1lBRUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLElBQUksTUFBQTtnQkFDSixRQUFRLFVBQUE7Z0JBQ1IsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixXQUFXLEVBQUUsaUNBQXNCLENBQUMsYUFBYSxDQUFDO29CQUNsRCxjQUFjLGdCQUFBO29CQUNkLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtvQkFDL0IsSUFBSSxFQUFFLFlBQVk7aUJBQ25CO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBdkNELDRDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQYXJzZVNvdXJjZUZpbGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtJbmRleGVkQ29tcG9uZW50fSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge0luZGV4aW5nQ29udGV4dH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7Z2V0VGVtcGxhdGVJZGVudGlmaWVyc30gZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGBJbmRleGVkQ29tcG9uZW50YCBlbnRyaWVzIGZyb20gYSBgSW5kZXhpbmdDb250ZXh0YCwgd2hpY2ggaGFzIGluZm9ybWF0aW9uXG4gKiBhYm91dCBjb21wb25lbnRzIGRpc2NvdmVyZWQgaW4gdGhlIHByb2dyYW0gcmVnaXN0ZXJlZCBpbiBpdC5cbiAqXG4gKiBUaGUgY29udGV4dCBtdXN0IGJlIHBvcHVsYXRlZCBiZWZvcmUgYGdlbmVyYXRlQW5hbHlzaXNgIGlzIGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQW5hbHlzaXMoY29udGV4dDogSW5kZXhpbmdDb250ZXh0KTogTWFwPHRzLkRlY2xhcmF0aW9uLCBJbmRleGVkQ29tcG9uZW50PiB7XG4gIGNvbnN0IGFuYWx5c2lzID0gbmV3IE1hcDx0cy5EZWNsYXJhdGlvbiwgSW5kZXhlZENvbXBvbmVudD4oKTtcblxuICBjb250ZXh0LmNvbXBvbmVudHMuZm9yRWFjaCgoe2RlY2xhcmF0aW9uLCBzZWxlY3RvciwgYm91bmRUZW1wbGF0ZSwgdGVtcGxhdGVNZXRhfSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkZWNsYXJhdGlvbi5uYW1lLmdldFRleHQoKTtcblxuICAgIGNvbnN0IHVzZWRDb21wb25lbnRzID0gbmV3IFNldDx0cy5EZWNsYXJhdGlvbj4oKTtcbiAgICBjb25zdCB1c2VkRGlycyA9IGJvdW5kVGVtcGxhdGUuZ2V0VXNlZERpcmVjdGl2ZXMoKTtcbiAgICB1c2VkRGlycy5mb3JFYWNoKGRpciA9PiB7XG4gICAgICBpZiAoZGlyLmlzQ29tcG9uZW50KSB7XG4gICAgICAgIHVzZWRDb21wb25lbnRzLmFkZChkaXIucmVmLm5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gR2V0IHNvdXJjZSBmaWxlcyBmb3IgdGhlIGNvbXBvbmVudCBhbmQgdGhlIHRlbXBsYXRlLiBJZiB0aGUgdGVtcGxhdGUgaXMgaW5saW5lLCBpdHMgc291cmNlXG4gICAgLy8gZmlsZSBpcyB0aGUgY29tcG9uZW50J3MuXG4gICAgY29uc3QgY29tcG9uZW50RmlsZSA9IG5ldyBQYXJzZVNvdXJjZUZpbGUoXG4gICAgICAgIGRlY2xhcmF0aW9uLmdldFNvdXJjZUZpbGUoKS5nZXRGdWxsVGV4dCgpLCBkZWNsYXJhdGlvbi5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWUpO1xuICAgIGxldCB0ZW1wbGF0ZUZpbGU6IFBhcnNlU291cmNlRmlsZTtcbiAgICBpZiAodGVtcGxhdGVNZXRhLmlzSW5saW5lKSB7XG4gICAgICB0ZW1wbGF0ZUZpbGUgPSBjb21wb25lbnRGaWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZUZpbGUgPSB0ZW1wbGF0ZU1ldGEuZmlsZTtcbiAgICB9XG5cbiAgICBhbmFseXNpcy5zZXQoZGVjbGFyYXRpb24sIHtcbiAgICAgIG5hbWUsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGZpbGU6IGNvbXBvbmVudEZpbGUsXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBpZGVudGlmaWVyczogZ2V0VGVtcGxhdGVJZGVudGlmaWVycyhib3VuZFRlbXBsYXRlKSxcbiAgICAgICAgdXNlZENvbXBvbmVudHMsXG4gICAgICAgIGlzSW5saW5lOiB0ZW1wbGF0ZU1ldGEuaXNJbmxpbmUsXG4gICAgICAgIGZpbGU6IHRlbXBsYXRlRmlsZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBhbmFseXNpcztcbn1cbiJdfQ==