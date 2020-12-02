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
        define("@angular/core/schematics/migrations/move-document", ["require", "exports", "@angular-devkit/schematics", "path", "@angular/core/schematics/utils/project_tsconfig_paths", "@angular/core/schematics/utils/typescript/compiler_host", "@angular/core/schematics/migrations/move-document/document_import_visitor", "@angular/core/schematics/migrations/move-document/move-import"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const path_1 = require("path");
    const project_tsconfig_paths_1 = require("@angular/core/schematics/utils/project_tsconfig_paths");
    const compiler_host_1 = require("@angular/core/schematics/utils/typescript/compiler_host");
    const document_import_visitor_1 = require("@angular/core/schematics/migrations/move-document/document_import_visitor");
    const move_import_1 = require("@angular/core/schematics/migrations/move-document/move-import");
    /** Entry point for the V8 move-document migration. */
    function default_1() {
        return (tree) => {
            const { buildPaths, testPaths } = project_tsconfig_paths_1.getProjectTsConfigPaths(tree);
            const basePath = process.cwd();
            if (!buildPaths.length && !testPaths.length) {
                throw new schematics_1.SchematicsException(`Could not find any tsconfig file. Cannot migrate DOCUMENT 
          to new import source.`);
            }
            for (const tsconfigPath of [...buildPaths, ...testPaths]) {
                runMoveDocumentMigration(tree, tsconfigPath, basePath);
            }
        };
    }
    exports.default = default_1;
    /**
     * Runs the DOCUMENT InjectionToken import migration for the given TypeScript project. The
     * schematic analyzes the imports within the project and moves the deprecated symbol to the
     * new import source.
     */
    function runMoveDocumentMigration(tree, tsconfigPath, basePath) {
        const { program } = compiler_host_1.createMigrationProgram(tree, tsconfigPath, basePath);
        const typeChecker = program.getTypeChecker();
        const visitor = new document_import_visitor_1.DocumentImportVisitor(typeChecker);
        const sourceFiles = program.getSourceFiles().filter(f => !f.isDeclarationFile && !program.isSourceFileFromExternalLibrary(f));
        // Analyze source files by finding imports.
        sourceFiles.forEach(sourceFile => visitor.visitNode(sourceFile));
        const { importsMap } = visitor;
        // Walk through all source files that contain resolved queries and update
        // the source files if needed. Note that we need to update multiple queries
        // within a source file within the same recorder in order to not throw off
        // the TypeScript node offsets.
        importsMap.forEach((resolvedImport, sourceFile) => {
            const { platformBrowserImport, commonImport, documentElement } = resolvedImport;
            if (!documentElement || !platformBrowserImport) {
                return;
            }
            const update = tree.beginUpdate(path_1.relative(basePath, sourceFile.fileName));
            const platformBrowserDeclaration = platformBrowserImport.parent.parent;
            const newPlatformBrowserText = move_import_1.removeFromImport(platformBrowserImport, sourceFile, document_import_visitor_1.DOCUMENT_TOKEN_NAME);
            const newCommonText = commonImport ?
                move_import_1.addToImport(commonImport, sourceFile, documentElement.name, documentElement.propertyName) :
                move_import_1.createImport(document_import_visitor_1.COMMON_IMPORT, sourceFile, documentElement.name, documentElement.propertyName);
            // Replace the existing query decorator call expression with the updated
            // call expression node.
            update.remove(platformBrowserDeclaration.getStart(), platformBrowserDeclaration.getWidth());
            update.insertRight(platformBrowserDeclaration.getStart(), newPlatformBrowserText);
            if (commonImport) {
                const commonDeclaration = commonImport.parent.parent;
                update.remove(commonDeclaration.getStart(), commonDeclaration.getWidth());
                update.insertRight(commonDeclaration.getStart(), newCommonText);
            }
            else {
                update.insertRight(platformBrowserDeclaration.getStart(), newCommonText);
            }
            tree.commitUpdate(update);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NjaGVtYXRpY3MvbWlncmF0aW9ucy9tb3ZlLWRvY3VtZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsMkRBQTJFO0lBQzNFLCtCQUE4QjtJQUc5QixrR0FBMkU7SUFDM0UsMkZBQTRFO0lBRTVFLHVIQUE0SDtJQUM1SCwrRkFBMEU7SUFHMUUsc0RBQXNEO0lBQ3REO1FBQ0UsT0FBTyxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEdBQUcsZ0RBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDM0MsTUFBTSxJQUFJLGdDQUFtQixDQUFDO2dDQUNKLENBQUMsQ0FBQzthQUM3QjtZQUVELEtBQUssTUFBTSxZQUFZLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFO2dCQUN4RCx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWRELDRCQWNDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsd0JBQXdCLENBQUMsSUFBVSxFQUFFLFlBQW9CLEVBQUUsUUFBZ0I7UUFDbEYsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLHNDQUFzQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksK0NBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlFLDJDQUEyQztRQUMzQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxPQUFPLENBQUM7UUFFN0IseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSwwRUFBMEU7UUFDMUUsK0JBQStCO1FBQy9CLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFzQyxFQUFFLFVBQXlCLEVBQUUsRUFBRTtZQUN2RixNQUFNLEVBQUMscUJBQXFCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxHQUFHLGNBQWMsQ0FBQztZQUM5RSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzlDLE9BQU87YUFDUjtZQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUV6RSxNQUFNLDBCQUEwQixHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdkUsTUFBTSxzQkFBc0IsR0FDeEIsOEJBQWdCLENBQUMscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDZDQUFtQixDQUFDLENBQUM7WUFDN0UsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUM7Z0JBQ2hDLHlCQUFXLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMzRiwwQkFBWSxDQUFDLHVDQUFhLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWhHLHdFQUF3RTtZQUN4RSx3QkFBd0I7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsRUFBRSwwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUVsRixJQUFJLFlBQVksRUFBRTtnQkFDaEIsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDMUU7WUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSdWxlLCBTY2hlbWF0aWNzRXhjZXB0aW9uLCBUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge3JlbGF0aXZlfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2dldFByb2plY3RUc0NvbmZpZ1BhdGhzfSBmcm9tICcuLi8uLi91dGlscy9wcm9qZWN0X3RzY29uZmlnX3BhdGhzJztcbmltcG9ydCB7Y3JlYXRlTWlncmF0aW9uUHJvZ3JhbX0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNjcmlwdC9jb21waWxlcl9ob3N0JztcblxuaW1wb3J0IHtDT01NT05fSU1QT1JULCBET0NVTUVOVF9UT0tFTl9OQU1FLCBEb2N1bWVudEltcG9ydFZpc2l0b3IsIFJlc29sdmVkRG9jdW1lbnRJbXBvcnR9IGZyb20gJy4vZG9jdW1lbnRfaW1wb3J0X3Zpc2l0b3InO1xuaW1wb3J0IHthZGRUb0ltcG9ydCwgY3JlYXRlSW1wb3J0LCByZW1vdmVGcm9tSW1wb3J0fSBmcm9tICcuL21vdmUtaW1wb3J0JztcblxuXG4vKiogRW50cnkgcG9pbnQgZm9yIHRoZSBWOCBtb3ZlLWRvY3VtZW50IG1pZ3JhdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCk6IFJ1bGUge1xuICByZXR1cm4gKHRyZWU6IFRyZWUpID0+IHtcbiAgICBjb25zdCB7YnVpbGRQYXRocywgdGVzdFBhdGhzfSA9IGdldFByb2plY3RUc0NvbmZpZ1BhdGhzKHRyZWUpO1xuICAgIGNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5jd2QoKTtcblxuICAgIGlmICghYnVpbGRQYXRocy5sZW5ndGggJiYgIXRlc3RQYXRocy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKGBDb3VsZCBub3QgZmluZCBhbnkgdHNjb25maWcgZmlsZS4gQ2Fubm90IG1pZ3JhdGUgRE9DVU1FTlQgXG4gICAgICAgICAgdG8gbmV3IGltcG9ydCBzb3VyY2UuYCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0c2NvbmZpZ1BhdGggb2YgWy4uLmJ1aWxkUGF0aHMsIC4uLnRlc3RQYXRoc10pIHtcbiAgICAgIHJ1bk1vdmVEb2N1bWVudE1pZ3JhdGlvbih0cmVlLCB0c2NvbmZpZ1BhdGgsIGJhc2VQYXRoKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogUnVucyB0aGUgRE9DVU1FTlQgSW5qZWN0aW9uVG9rZW4gaW1wb3J0IG1pZ3JhdGlvbiBmb3IgdGhlIGdpdmVuIFR5cGVTY3JpcHQgcHJvamVjdC4gVGhlXG4gKiBzY2hlbWF0aWMgYW5hbHl6ZXMgdGhlIGltcG9ydHMgd2l0aGluIHRoZSBwcm9qZWN0IGFuZCBtb3ZlcyB0aGUgZGVwcmVjYXRlZCBzeW1ib2wgdG8gdGhlXG4gKiBuZXcgaW1wb3J0IHNvdXJjZS5cbiAqL1xuZnVuY3Rpb24gcnVuTW92ZURvY3VtZW50TWlncmF0aW9uKHRyZWU6IFRyZWUsIHRzY29uZmlnUGF0aDogc3RyaW5nLCBiYXNlUGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHtwcm9ncmFtfSA9IGNyZWF0ZU1pZ3JhdGlvblByb2dyYW0odHJlZSwgdHNjb25maWdQYXRoLCBiYXNlUGF0aCk7XG4gIGNvbnN0IHR5cGVDaGVja2VyID0gcHJvZ3JhbS5nZXRUeXBlQ2hlY2tlcigpO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IERvY3VtZW50SW1wb3J0VmlzaXRvcih0eXBlQ2hlY2tlcik7XG4gIGNvbnN0IHNvdXJjZUZpbGVzID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlcygpLmZpbHRlcihcbiAgICAgIGYgPT4gIWYuaXNEZWNsYXJhdGlvbkZpbGUgJiYgIXByb2dyYW0uaXNTb3VyY2VGaWxlRnJvbUV4dGVybmFsTGlicmFyeShmKSk7XG5cbiAgLy8gQW5hbHl6ZSBzb3VyY2UgZmlsZXMgYnkgZmluZGluZyBpbXBvcnRzLlxuICBzb3VyY2VGaWxlcy5mb3JFYWNoKHNvdXJjZUZpbGUgPT4gdmlzaXRvci52aXNpdE5vZGUoc291cmNlRmlsZSkpO1xuXG4gIGNvbnN0IHtpbXBvcnRzTWFwfSA9IHZpc2l0b3I7XG5cbiAgLy8gV2FsayB0aHJvdWdoIGFsbCBzb3VyY2UgZmlsZXMgdGhhdCBjb250YWluIHJlc29sdmVkIHF1ZXJpZXMgYW5kIHVwZGF0ZVxuICAvLyB0aGUgc291cmNlIGZpbGVzIGlmIG5lZWRlZC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gdXBkYXRlIG11bHRpcGxlIHF1ZXJpZXNcbiAgLy8gd2l0aGluIGEgc291cmNlIGZpbGUgd2l0aGluIHRoZSBzYW1lIHJlY29yZGVyIGluIG9yZGVyIHRvIG5vdCB0aHJvdyBvZmZcbiAgLy8gdGhlIFR5cGVTY3JpcHQgbm9kZSBvZmZzZXRzLlxuICBpbXBvcnRzTWFwLmZvckVhY2goKHJlc29sdmVkSW1wb3J0OiBSZXNvbHZlZERvY3VtZW50SW1wb3J0LCBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKSA9PiB7XG4gICAgY29uc3Qge3BsYXRmb3JtQnJvd3NlckltcG9ydCwgY29tbW9uSW1wb3J0LCBkb2N1bWVudEVsZW1lbnR9ID0gcmVzb2x2ZWRJbXBvcnQ7XG4gICAgaWYgKCFkb2N1bWVudEVsZW1lbnQgfHwgIXBsYXRmb3JtQnJvd3NlckltcG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGUgPSB0cmVlLmJlZ2luVXBkYXRlKHJlbGF0aXZlKGJhc2VQYXRoLCBzb3VyY2VGaWxlLmZpbGVOYW1lKSk7XG5cbiAgICBjb25zdCBwbGF0Zm9ybUJyb3dzZXJEZWNsYXJhdGlvbiA9IHBsYXRmb3JtQnJvd3NlckltcG9ydC5wYXJlbnQucGFyZW50O1xuICAgIGNvbnN0IG5ld1BsYXRmb3JtQnJvd3NlclRleHQgPVxuICAgICAgICByZW1vdmVGcm9tSW1wb3J0KHBsYXRmb3JtQnJvd3NlckltcG9ydCwgc291cmNlRmlsZSwgRE9DVU1FTlRfVE9LRU5fTkFNRSk7XG4gICAgY29uc3QgbmV3Q29tbW9uVGV4dCA9IGNvbW1vbkltcG9ydCA/XG4gICAgICAgIGFkZFRvSW1wb3J0KGNvbW1vbkltcG9ydCwgc291cmNlRmlsZSwgZG9jdW1lbnRFbGVtZW50Lm5hbWUsIGRvY3VtZW50RWxlbWVudC5wcm9wZXJ0eU5hbWUpIDpcbiAgICAgICAgY3JlYXRlSW1wb3J0KENPTU1PTl9JTVBPUlQsIHNvdXJjZUZpbGUsIGRvY3VtZW50RWxlbWVudC5uYW1lLCBkb2N1bWVudEVsZW1lbnQucHJvcGVydHlOYW1lKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIHF1ZXJ5IGRlY29yYXRvciBjYWxsIGV4cHJlc3Npb24gd2l0aCB0aGUgdXBkYXRlZFxuICAgIC8vIGNhbGwgZXhwcmVzc2lvbiBub2RlLlxuICAgIHVwZGF0ZS5yZW1vdmUocGxhdGZvcm1Ccm93c2VyRGVjbGFyYXRpb24uZ2V0U3RhcnQoKSwgcGxhdGZvcm1Ccm93c2VyRGVjbGFyYXRpb24uZ2V0V2lkdGgoKSk7XG4gICAgdXBkYXRlLmluc2VydFJpZ2h0KHBsYXRmb3JtQnJvd3NlckRlY2xhcmF0aW9uLmdldFN0YXJ0KCksIG5ld1BsYXRmb3JtQnJvd3NlclRleHQpO1xuXG4gICAgaWYgKGNvbW1vbkltcG9ydCkge1xuICAgICAgY29uc3QgY29tbW9uRGVjbGFyYXRpb24gPSBjb21tb25JbXBvcnQucGFyZW50LnBhcmVudDtcbiAgICAgIHVwZGF0ZS5yZW1vdmUoY29tbW9uRGVjbGFyYXRpb24uZ2V0U3RhcnQoKSwgY29tbW9uRGVjbGFyYXRpb24uZ2V0V2lkdGgoKSk7XG4gICAgICB1cGRhdGUuaW5zZXJ0UmlnaHQoY29tbW9uRGVjbGFyYXRpb24uZ2V0U3RhcnQoKSwgbmV3Q29tbW9uVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZS5pbnNlcnRSaWdodChwbGF0Zm9ybUJyb3dzZXJEZWNsYXJhdGlvbi5nZXRTdGFydCgpLCBuZXdDb21tb25UZXh0KTtcbiAgICB9XG5cbiAgICB0cmVlLmNvbW1pdFVwZGF0ZSh1cGRhdGUpO1xuICB9KTtcbn1cbiJdfQ==