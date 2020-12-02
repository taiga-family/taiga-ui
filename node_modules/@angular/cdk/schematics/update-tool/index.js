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
        define("@angular/cdk/schematics/update-tool", ["require", "exports", "path", "typescript", "@angular/cdk/schematics/update-tool/component-resource-collector", "@angular/cdk/schematics/update-tool/logger", "@angular/cdk/schematics/update-tool/utils/parse-tsconfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const path_1 = require("path");
    const ts = require("typescript");
    const component_resource_collector_1 = require("@angular/cdk/schematics/update-tool/component-resource-collector");
    const logger_1 = require("@angular/cdk/schematics/update-tool/logger");
    const parse_tsconfig_1 = require("@angular/cdk/schematics/update-tool/utils/parse-tsconfig");
    /**
     * An update project that can be run against individual migrations. An update project
     * accepts a TypeScript program and a context that is provided to all migrations. The
     * context is usually not used by migrations, but in some cases migrations rely on
     * specifics from the tool that performs the update (e.g. the Angular CLI). In those cases,
     * the context can provide the necessary specifics to the migrations in a type-safe way.
     */
    class UpdateProject {
        constructor(_context, _program, _fileSystem, _analyzedFiles = new Set(), _logger = logger_1.defaultLogger) {
            this._context = _context;
            this._program = _program;
            this._fileSystem = _fileSystem;
            this._analyzedFiles = _analyzedFiles;
            this._logger = _logger;
            this._typeChecker = this._program.getTypeChecker();
        }
        /**
         * Migrates the project to the specified target version.
         * @param migrationTypes Migrations that should be run.
         * @param target Version the project should be updated to.
         * @param data Upgrade data that is passed to all migration rules.
         * @param additionalStylesheetPaths Additional stylesheets that should be migrated, if not
         *   referenced in an Angular component. This is helpful for global stylesheets in a project.
         */
        migrate(migrationTypes, target, data, additionalStylesheetPaths) {
            // Create instances of the specified migrations.
            const migrations = this._createMigrations(migrationTypes, target, data);
            // Creates the component resource collector. The collector can visit arbitrary
            // TypeScript nodes and will find Angular component resources. Resources include
            // templates and stylesheets. It also captures inline stylesheets and templates.
            const resourceCollector = new component_resource_collector_1.ComponentResourceCollector(this._typeChecker, this._fileSystem);
            // Collect all of the TypeScript source files we want to migrate. We don't
            // migrate type definition files, or source files from external libraries.
            const sourceFiles = this._program.getSourceFiles().filter(f => !f.isDeclarationFile && !this._program.isSourceFileFromExternalLibrary(f));
            // Helper function that visits a given TypeScript node and collects all referenced
            // component resources (i.e. stylesheets or templates). Additionally, the helper
            // visits the node in each instantiated migration.
            const visitNodeAndCollectResources = (node) => {
                migrations.forEach(r => r.visitNode(node));
                ts.forEachChild(node, visitNodeAndCollectResources);
                resourceCollector.visitNode(node);
            };
            // Walk through all source file, if it has not been visited before, and
            // visit found nodes while collecting potential resources.
            sourceFiles.forEach(sourceFile => {
                const resolvedPath = this._fileSystem.resolve(sourceFile.fileName);
                // Do not visit source files which have been checked as part of a
                // previously migrated TypeScript project.
                if (!this._analyzedFiles.has(resolvedPath)) {
                    visitNodeAndCollectResources(sourceFile);
                    this._analyzedFiles.add(resolvedPath);
                }
            });
            // Walk through all resolved templates and visit them in each instantiated
            // migration. Note that this can only happen after source files have been
            // visited because we find templates through the TypeScript source files.
            resourceCollector.resolvedTemplates.forEach(template => {
                const resolvedPath = this._fileSystem.resolve(template.filePath);
                // Do not visit the template if it has been checked before. Inline
                // templates cannot be referenced multiple times.
                if (template.inline || !this._analyzedFiles.has(resolvedPath)) {
                    migrations.forEach(m => m.visitTemplate(template));
                    this._analyzedFiles.add(resolvedPath);
                }
            });
            // Walk through all resolved stylesheets and visit them in each instantiated
            // migration. Note that this can only happen after source files have been
            // visited because we find stylesheets through the TypeScript source files.
            resourceCollector.resolvedStylesheets.forEach(stylesheet => {
                const resolvedPath = this._fileSystem.resolve(stylesheet.filePath);
                // Do not visit the stylesheet if it has been checked before. Inline
                // stylesheets cannot be referenced multiple times.
                if (stylesheet.inline || !this._analyzedFiles.has(resolvedPath)) {
                    migrations.forEach(r => r.visitStylesheet(stylesheet));
                    this._analyzedFiles.add(resolvedPath);
                }
            });
            // In some applications, developers will have global stylesheets which are not
            // specified in any Angular component. Therefore we allow for additional stylesheets
            // being specified. We visit them in each migration unless they have been already
            // discovered before as actual component resource.
            additionalStylesheetPaths.forEach(filePath => {
                const stylesheet = resourceCollector.resolveExternalStylesheet(filePath, null);
                const resolvedPath = this._fileSystem.resolve(filePath);
                // Do not visit stylesheets which have been referenced from a component.
                if (!this._analyzedFiles.has(resolvedPath)) {
                    migrations.forEach(r => r.visitStylesheet(stylesheet));
                    this._analyzedFiles.add(resolvedPath);
                }
            });
            // Call the "postAnalysis" method for each migration.
            migrations.forEach(r => r.postAnalysis());
            // Collect all failures reported by individual migrations.
            const failures = migrations.reduce((res, m) => res.concat(m.failures), []);
            // In case there are failures, print these to the CLI logger as warnings.
            if (failures.length) {
                failures.forEach(({ filePath, message, position }) => {
                    const posixFilePath = this._fileSystem.resolve(filePath).replace(/\\/g, '/');
                    const lineAndCharacter = position ? `@${position.line + 1}:${position.character + 1}` : '';
                    this._logger.warn(`${posixFilePath}${lineAndCharacter} - ${message}`);
                });
            }
            return {
                hasFailures: !!failures.length,
            };
        }
        /**
         * Creates instances of the given migrations with the specified target
         * version and data.
         */
        _createMigrations(types, target, data) {
            const result = [];
            for (const ctor of types) {
                const instance = new ctor(this._program, this._typeChecker, target, this._context, data, this._fileSystem, this._logger);
                instance.init();
                if (instance.enabled) {
                    result.push(instance);
                }
            }
            return result;
        }
        /**
         * Creates a program form the specified tsconfig and patches the host
         * to read files through the given file system.
         */
        static createProgramFromTsconfig(tsconfigFsPath, fs) {
            const parsed = parse_tsconfig_1.parseTsconfigFile(tsconfigFsPath, path_1.dirname(tsconfigFsPath));
            const host = ts.createCompilerHost(parsed.options, true);
            // Patch the host to read files through the specified file system.
            host.readFile = fileName => {
                const fileContent = fs.read(fileName);
                // Strip BOM as otherwise TSC methods (e.g. "getWidth") will return an offset which
                // which breaks the CLI UpdateRecorder. https://github.com/angular/angular/pull/30719
                return fileContent !== null ? fileContent.replace(/^\uFEFF/, '') : undefined;
            };
            return ts.createProgram(parsed.fileNames, parsed.options, host);
        }
    }
    exports.UpdateProject = UpdateProject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXBkYXRlLXRvb2wvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwrQkFBNkI7SUFDN0IsaUNBQWlDO0lBRWpDLG1IQUEwRTtJQUUxRSx1RUFBcUQ7SUFHckQsNkZBQXlEO0lBRXpEOzs7Ozs7T0FNRztJQUNILE1BQWEsYUFBYTtRQUd4QixZQUFvQixRQUFpQixFQUNqQixRQUFvQixFQUNwQixXQUF1QixFQUN2QixpQkFBOEIsSUFBSSxHQUFHLEVBQUUsRUFDdkMsVUFBd0Isc0JBQWE7WUFKckMsYUFBUSxHQUFSLFFBQVEsQ0FBUztZQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFZO1lBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1lBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtZQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtZQU54QyxpQkFBWSxHQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBTW5CLENBQUM7UUFFN0Q7Ozs7Ozs7V0FPRztRQUNILE9BQU8sQ0FBTyxjQUE4QyxFQUFFLE1BQXFCLEVBQUUsSUFBVSxFQUMzRix5QkFBb0M7WUFDdEMsZ0RBQWdEO1lBQ2hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hFLDhFQUE4RTtZQUM5RSxnRkFBZ0Y7WUFDaEYsZ0ZBQWdGO1lBQ2hGLE1BQU0saUJBQWlCLEdBQUcsSUFBSSx5REFBMEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RiwwRUFBMEU7WUFDMUUsMEVBQTBFO1lBQzFFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxGLGtGQUFrRjtZQUNsRixnRkFBZ0Y7WUFDaEYsa0RBQWtEO1lBQ2xELE1BQU0sNEJBQTRCLEdBQUcsQ0FBQyxJQUFhLEVBQUUsRUFBRTtnQkFDckQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztnQkFDcEQsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGLHVFQUF1RTtZQUN2RSwwREFBMEQ7WUFDMUQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxpRUFBaUU7Z0JBQ2pFLDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUMxQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCwwRUFBMEU7WUFDMUUseUVBQXlFO1lBQ3pFLHlFQUF5RTtZQUN6RSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakUsa0VBQWtFO2dCQUNsRSxpREFBaUQ7Z0JBQ2pELElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUM3RCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDdkM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILDRFQUE0RTtZQUM1RSx5RUFBeUU7WUFDekUsMkVBQTJFO1lBQzNFLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxvRUFBb0U7Z0JBQ3BFLG1EQUFtRDtnQkFDbkQsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQy9ELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN2QztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsOEVBQThFO1lBQzlFLG9GQUFvRjtZQUNwRixpRkFBaUY7WUFDakYsa0RBQWtEO1lBQ2xELHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0MsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsd0VBQXdFO2dCQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQzFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN2QztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgscURBQXFEO1lBQ3JELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUUxQywwREFBMEQ7WUFDMUQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUF3QixDQUFDLENBQUM7WUFFdEQseUVBQXlFO1lBQ3pFLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFO29CQUNqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM3RSxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxHQUFHLGdCQUFnQixNQUFNLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3hFLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPO2dCQUNMLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDL0IsQ0FBQztRQUNKLENBQUM7UUFFRDs7O1dBR0c7UUFDSyxpQkFBaUIsQ0FBTyxLQUFxQyxFQUFFLE1BQXFCLEVBQzVELElBQVU7WUFDeEMsTUFBTSxNQUFNLEdBQStCLEVBQUUsQ0FBQztZQUM5QyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUMvRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxjQUFzQixFQUFFLEVBQWM7WUFDckUsTUFBTSxNQUFNLEdBQUcsa0NBQWlCLENBQUMsY0FBYyxFQUFFLGNBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxtRkFBbUY7Z0JBQ25GLHFGQUFxRjtnQkFDckYsT0FBTyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQy9FLENBQUMsQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUNGO0lBbEpELHNDQWtKQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Rpcm5hbWV9IGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Q29tcG9uZW50UmVzb3VyY2VDb2xsZWN0b3J9IGZyb20gJy4vY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge0ZpbGVTeXN0ZW19IGZyb20gJy4vZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHtkZWZhdWx0TG9nZ2VyLCBVcGRhdGVMb2dnZXJ9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7TWlncmF0aW9uLCBNaWdyYXRpb25DdG9yLCBNaWdyYXRpb25GYWlsdXJlfSBmcm9tICcuL21pZ3JhdGlvbic7XG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4vdGFyZ2V0LXZlcnNpb24nO1xuaW1wb3J0IHtwYXJzZVRzY29uZmlnRmlsZX0gZnJvbSAnLi91dGlscy9wYXJzZS10c2NvbmZpZyc7XG5cbi8qKlxuICogQW4gdXBkYXRlIHByb2plY3QgdGhhdCBjYW4gYmUgcnVuIGFnYWluc3QgaW5kaXZpZHVhbCBtaWdyYXRpb25zLiBBbiB1cGRhdGUgcHJvamVjdFxuICogYWNjZXB0cyBhIFR5cGVTY3JpcHQgcHJvZ3JhbSBhbmQgYSBjb250ZXh0IHRoYXQgaXMgcHJvdmlkZWQgdG8gYWxsIG1pZ3JhdGlvbnMuIFRoZVxuICogY29udGV4dCBpcyB1c3VhbGx5IG5vdCB1c2VkIGJ5IG1pZ3JhdGlvbnMsIGJ1dCBpbiBzb21lIGNhc2VzIG1pZ3JhdGlvbnMgcmVseSBvblxuICogc3BlY2lmaWNzIGZyb20gdGhlIHRvb2wgdGhhdCBwZXJmb3JtcyB0aGUgdXBkYXRlIChlLmcuIHRoZSBBbmd1bGFyIENMSSkuIEluIHRob3NlIGNhc2VzLFxuICogdGhlIGNvbnRleHQgY2FuIHByb3ZpZGUgdGhlIG5lY2Vzc2FyeSBzcGVjaWZpY3MgdG8gdGhlIG1pZ3JhdGlvbnMgaW4gYSB0eXBlLXNhZmUgd2F5LlxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlUHJvamVjdDxDb250ZXh0PiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3R5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlciA9IHRoaXMuX3Byb2dyYW0uZ2V0VHlwZUNoZWNrZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZXh0OiBDb250ZXh0LFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9ncmFtOiB0cy5Qcm9ncmFtLFxuICAgICAgICAgICAgICBwcml2YXRlIF9maWxlU3lzdGVtOiBGaWxlU3lzdGVtLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hbmFseXplZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9nZ2VyOiBVcGRhdGVMb2dnZXIgPSBkZWZhdWx0TG9nZ2VyKSB7fVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyB0aGUgcHJvamVjdCB0byB0aGUgc3BlY2lmaWVkIHRhcmdldCB2ZXJzaW9uLlxuICAgKiBAcGFyYW0gbWlncmF0aW9uVHlwZXMgTWlncmF0aW9ucyB0aGF0IHNob3VsZCBiZSBydW4uXG4gICAqIEBwYXJhbSB0YXJnZXQgVmVyc2lvbiB0aGUgcHJvamVjdCBzaG91bGQgYmUgdXBkYXRlZCB0by5cbiAgICogQHBhcmFtIGRhdGEgVXBncmFkZSBkYXRhIHRoYXQgaXMgcGFzc2VkIHRvIGFsbCBtaWdyYXRpb24gcnVsZXMuXG4gICAqIEBwYXJhbSBhZGRpdGlvbmFsU3R5bGVzaGVldFBhdGhzIEFkZGl0aW9uYWwgc3R5bGVzaGVldHMgdGhhdCBzaG91bGQgYmUgbWlncmF0ZWQsIGlmIG5vdFxuICAgKiAgIHJlZmVyZW5jZWQgaW4gYW4gQW5ndWxhciBjb21wb25lbnQuIFRoaXMgaXMgaGVscGZ1bCBmb3IgZ2xvYmFsIHN0eWxlc2hlZXRzIGluIGEgcHJvamVjdC5cbiAgICovXG4gIG1pZ3JhdGU8RGF0YT4obWlncmF0aW9uVHlwZXM6IE1pZ3JhdGlvbkN0b3I8RGF0YSwgQ29udGV4dD5bXSwgdGFyZ2V0OiBUYXJnZXRWZXJzaW9uLCBkYXRhOiBEYXRhLFxuICAgICAgYWRkaXRpb25hbFN0eWxlc2hlZXRQYXRocz86IHN0cmluZ1tdKToge2hhc0ZhaWx1cmVzOiBib29sZWFufSB7XG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlcyBvZiB0aGUgc3BlY2lmaWVkIG1pZ3JhdGlvbnMuXG4gICAgY29uc3QgbWlncmF0aW9ucyA9IHRoaXMuX2NyZWF0ZU1pZ3JhdGlvbnMobWlncmF0aW9uVHlwZXMsIHRhcmdldCwgZGF0YSk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgY29tcG9uZW50IHJlc291cmNlIGNvbGxlY3Rvci4gVGhlIGNvbGxlY3RvciBjYW4gdmlzaXQgYXJiaXRyYXJ5XG4gICAgLy8gVHlwZVNjcmlwdCBub2RlcyBhbmQgd2lsbCBmaW5kIEFuZ3VsYXIgY29tcG9uZW50IHJlc291cmNlcy4gUmVzb3VyY2VzIGluY2x1ZGVcbiAgICAvLyB0ZW1wbGF0ZXMgYW5kIHN0eWxlc2hlZXRzLiBJdCBhbHNvIGNhcHR1cmVzIGlubGluZSBzdHlsZXNoZWV0cyBhbmQgdGVtcGxhdGVzLlxuICAgIGNvbnN0IHJlc291cmNlQ29sbGVjdG9yID0gbmV3IENvbXBvbmVudFJlc291cmNlQ29sbGVjdG9yKHRoaXMuX3R5cGVDaGVja2VyLCB0aGlzLl9maWxlU3lzdGVtKTtcbiAgICAvLyBDb2xsZWN0IGFsbCBvZiB0aGUgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZXMgd2Ugd2FudCB0byBtaWdyYXRlLiBXZSBkb24ndFxuICAgIC8vIG1pZ3JhdGUgdHlwZSBkZWZpbml0aW9uIGZpbGVzLCBvciBzb3VyY2UgZmlsZXMgZnJvbSBleHRlcm5hbCBsaWJyYXJpZXMuXG4gICAgY29uc3Qgc291cmNlRmlsZXMgPSB0aGlzLl9wcm9ncmFtLmdldFNvdXJjZUZpbGVzKCkuZmlsdGVyKFxuICAgICAgZiA9PiAhZi5pc0RlY2xhcmF0aW9uRmlsZSAmJiAhdGhpcy5fcHJvZ3JhbS5pc1NvdXJjZUZpbGVGcm9tRXh0ZXJuYWxMaWJyYXJ5KGYpKTtcblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IHZpc2l0cyBhIGdpdmVuIFR5cGVTY3JpcHQgbm9kZSBhbmQgY29sbGVjdHMgYWxsIHJlZmVyZW5jZWRcbiAgICAvLyBjb21wb25lbnQgcmVzb3VyY2VzIChpLmUuIHN0eWxlc2hlZXRzIG9yIHRlbXBsYXRlcykuIEFkZGl0aW9uYWxseSwgdGhlIGhlbHBlclxuICAgIC8vIHZpc2l0cyB0aGUgbm9kZSBpbiBlYWNoIGluc3RhbnRpYXRlZCBtaWdyYXRpb24uXG4gICAgY29uc3QgdmlzaXROb2RlQW5kQ29sbGVjdFJlc291cmNlcyA9IChub2RlOiB0cy5Ob2RlKSA9PiB7XG4gICAgICBtaWdyYXRpb25zLmZvckVhY2gociA9PiByLnZpc2l0Tm9kZShub2RlKSk7XG4gICAgICB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgdmlzaXROb2RlQW5kQ29sbGVjdFJlc291cmNlcyk7XG4gICAgICByZXNvdXJjZUNvbGxlY3Rvci52aXNpdE5vZGUobm9kZSk7XG4gICAgfTtcblxuICAgIC8vIFdhbGsgdGhyb3VnaCBhbGwgc291cmNlIGZpbGUsIGlmIGl0IGhhcyBub3QgYmVlbiB2aXNpdGVkIGJlZm9yZSwgYW5kXG4gICAgLy8gdmlzaXQgZm91bmQgbm9kZXMgd2hpbGUgY29sbGVjdGluZyBwb3RlbnRpYWwgcmVzb3VyY2VzLlxuICAgIHNvdXJjZUZpbGVzLmZvckVhY2goc291cmNlRmlsZSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZFBhdGggPSB0aGlzLl9maWxlU3lzdGVtLnJlc29sdmUoc291cmNlRmlsZS5maWxlTmFtZSk7XG4gICAgICAvLyBEbyBub3QgdmlzaXQgc291cmNlIGZpbGVzIHdoaWNoIGhhdmUgYmVlbiBjaGVja2VkIGFzIHBhcnQgb2YgYVxuICAgICAgLy8gcHJldmlvdXNseSBtaWdyYXRlZCBUeXBlU2NyaXB0IHByb2plY3QuXG4gICAgICBpZiAoIXRoaXMuX2FuYWx5emVkRmlsZXMuaGFzKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgdmlzaXROb2RlQW5kQ29sbGVjdFJlc291cmNlcyhzb3VyY2VGaWxlKTtcbiAgICAgICAgdGhpcy5fYW5hbHl6ZWRGaWxlcy5hZGQocmVzb2x2ZWRQYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdhbGsgdGhyb3VnaCBhbGwgcmVzb2x2ZWQgdGVtcGxhdGVzIGFuZCB2aXNpdCB0aGVtIGluIGVhY2ggaW5zdGFudGlhdGVkXG4gICAgLy8gbWlncmF0aW9uLiBOb3RlIHRoYXQgdGhpcyBjYW4gb25seSBoYXBwZW4gYWZ0ZXIgc291cmNlIGZpbGVzIGhhdmUgYmVlblxuICAgIC8vIHZpc2l0ZWQgYmVjYXVzZSB3ZSBmaW5kIHRlbXBsYXRlcyB0aHJvdWdoIHRoZSBUeXBlU2NyaXB0IHNvdXJjZSBmaWxlcy5cbiAgICByZXNvdXJjZUNvbGxlY3Rvci5yZXNvbHZlZFRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHRoaXMuX2ZpbGVTeXN0ZW0ucmVzb2x2ZSh0ZW1wbGF0ZS5maWxlUGF0aCk7XG4gICAgICAvLyBEbyBub3QgdmlzaXQgdGhlIHRlbXBsYXRlIGlmIGl0IGhhcyBiZWVuIGNoZWNrZWQgYmVmb3JlLiBJbmxpbmVcbiAgICAgIC8vIHRlbXBsYXRlcyBjYW5ub3QgYmUgcmVmZXJlbmNlZCBtdWx0aXBsZSB0aW1lcy5cbiAgICAgIGlmICh0ZW1wbGF0ZS5pbmxpbmUgfHwgIXRoaXMuX2FuYWx5emVkRmlsZXMuaGFzKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgbWlncmF0aW9ucy5mb3JFYWNoKG0gPT4gbS52aXNpdFRlbXBsYXRlKHRlbXBsYXRlKSk7XG4gICAgICAgIHRoaXMuX2FuYWx5emVkRmlsZXMuYWRkKHJlc29sdmVkUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXYWxrIHRocm91Z2ggYWxsIHJlc29sdmVkIHN0eWxlc2hlZXRzIGFuZCB2aXNpdCB0aGVtIGluIGVhY2ggaW5zdGFudGlhdGVkXG4gICAgLy8gbWlncmF0aW9uLiBOb3RlIHRoYXQgdGhpcyBjYW4gb25seSBoYXBwZW4gYWZ0ZXIgc291cmNlIGZpbGVzIGhhdmUgYmVlblxuICAgIC8vIHZpc2l0ZWQgYmVjYXVzZSB3ZSBmaW5kIHN0eWxlc2hlZXRzIHRocm91Z2ggdGhlIFR5cGVTY3JpcHQgc291cmNlIGZpbGVzLlxuICAgIHJlc291cmNlQ29sbGVjdG9yLnJlc29sdmVkU3R5bGVzaGVldHMuZm9yRWFjaChzdHlsZXNoZWV0ID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHRoaXMuX2ZpbGVTeXN0ZW0ucmVzb2x2ZShzdHlsZXNoZWV0LmZpbGVQYXRoKTtcbiAgICAgIC8vIERvIG5vdCB2aXNpdCB0aGUgc3R5bGVzaGVldCBpZiBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZS4gSW5saW5lXG4gICAgICAvLyBzdHlsZXNoZWV0cyBjYW5ub3QgYmUgcmVmZXJlbmNlZCBtdWx0aXBsZSB0aW1lcy5cbiAgICAgIGlmIChzdHlsZXNoZWV0LmlubGluZSB8fCAhdGhpcy5fYW5hbHl6ZWRGaWxlcy5oYXMocmVzb2x2ZWRQYXRoKSkge1xuICAgICAgICBtaWdyYXRpb25zLmZvckVhY2gociA9PiByLnZpc2l0U3R5bGVzaGVldChzdHlsZXNoZWV0KSk7XG4gICAgICAgIHRoaXMuX2FuYWx5emVkRmlsZXMuYWRkKHJlc29sdmVkUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbiBzb21lIGFwcGxpY2F0aW9ucywgZGV2ZWxvcGVycyB3aWxsIGhhdmUgZ2xvYmFsIHN0eWxlc2hlZXRzIHdoaWNoIGFyZSBub3RcbiAgICAvLyBzcGVjaWZpZWQgaW4gYW55IEFuZ3VsYXIgY29tcG9uZW50LiBUaGVyZWZvcmUgd2UgYWxsb3cgZm9yIGFkZGl0aW9uYWwgc3R5bGVzaGVldHNcbiAgICAvLyBiZWluZyBzcGVjaWZpZWQuIFdlIHZpc2l0IHRoZW0gaW4gZWFjaCBtaWdyYXRpb24gdW5sZXNzIHRoZXkgaGF2ZSBiZWVuIGFscmVhZHlcbiAgICAvLyBkaXNjb3ZlcmVkIGJlZm9yZSBhcyBhY3R1YWwgY29tcG9uZW50IHJlc291cmNlLlxuICAgIGFkZGl0aW9uYWxTdHlsZXNoZWV0UGF0aHMuZm9yRWFjaChmaWxlUGF0aCA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNoZWV0ID0gcmVzb3VyY2VDb2xsZWN0b3IucmVzb2x2ZUV4dGVybmFsU3R5bGVzaGVldChmaWxlUGF0aCwgbnVsbCk7XG4gICAgICBjb25zdCByZXNvbHZlZFBhdGggPSB0aGlzLl9maWxlU3lzdGVtLnJlc29sdmUoZmlsZVBhdGgpO1xuICAgICAgLy8gRG8gbm90IHZpc2l0IHN0eWxlc2hlZXRzIHdoaWNoIGhhdmUgYmVlbiByZWZlcmVuY2VkIGZyb20gYSBjb21wb25lbnQuXG4gICAgICBpZiAoIXRoaXMuX2FuYWx5emVkRmlsZXMuaGFzKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgbWlncmF0aW9ucy5mb3JFYWNoKHIgPT4gci52aXNpdFN0eWxlc2hlZXQoc3R5bGVzaGVldCkpO1xuICAgICAgICB0aGlzLl9hbmFseXplZEZpbGVzLmFkZChyZXNvbHZlZFBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2FsbCB0aGUgXCJwb3N0QW5hbHlzaXNcIiBtZXRob2QgZm9yIGVhY2ggbWlncmF0aW9uLlxuICAgIG1pZ3JhdGlvbnMuZm9yRWFjaChyID0+IHIucG9zdEFuYWx5c2lzKCkpO1xuXG4gICAgLy8gQ29sbGVjdCBhbGwgZmFpbHVyZXMgcmVwb3J0ZWQgYnkgaW5kaXZpZHVhbCBtaWdyYXRpb25zLlxuICAgIGNvbnN0IGZhaWx1cmVzID0gbWlncmF0aW9ucy5yZWR1Y2UoKHJlcywgbSkgPT5cbiAgICAgICAgcmVzLmNvbmNhdChtLmZhaWx1cmVzKSwgW10gYXMgTWlncmF0aW9uRmFpbHVyZVtdKTtcblxuICAgIC8vIEluIGNhc2UgdGhlcmUgYXJlIGZhaWx1cmVzLCBwcmludCB0aGVzZSB0byB0aGUgQ0xJIGxvZ2dlciBhcyB3YXJuaW5ncy5cbiAgICBpZiAoZmFpbHVyZXMubGVuZ3RoKSB7XG4gICAgICBmYWlsdXJlcy5mb3JFYWNoKCh7ZmlsZVBhdGgsIG1lc3NhZ2UsIHBvc2l0aW9ufSkgPT4ge1xuICAgICAgICBjb25zdCBwb3NpeEZpbGVQYXRoID0gdGhpcy5fZmlsZVN5c3RlbS5yZXNvbHZlKGZpbGVQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICAgIGNvbnN0IGxpbmVBbmRDaGFyYWN0ZXIgPSBwb3NpdGlvbiA/IGBAJHtwb3NpdGlvbi5saW5lICsgMX06JHtwb3NpdGlvbi5jaGFyYWN0ZXIgKyAxfWAgOiAnJztcbiAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oYCR7cG9zaXhGaWxlUGF0aH0ke2xpbmVBbmRDaGFyYWN0ZXJ9IC0gJHttZXNzYWdlfWApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0ZhaWx1cmVzOiAhIWZhaWx1cmVzLmxlbmd0aCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIHRoZSBnaXZlbiBtaWdyYXRpb25zIHdpdGggdGhlIHNwZWNpZmllZCB0YXJnZXRcbiAgICogdmVyc2lvbiBhbmQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU1pZ3JhdGlvbnM8RGF0YT4odHlwZXM6IE1pZ3JhdGlvbkN0b3I8RGF0YSwgQ29udGV4dD5bXSwgdGFyZ2V0OiBUYXJnZXRWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IERhdGEpOiBNaWdyYXRpb248RGF0YSwgQ29udGV4dD5bXSB7XG4gICAgY29uc3QgcmVzdWx0OiBNaWdyYXRpb248RGF0YSwgQ29udGV4dD5bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY3RvciBvZiB0eXBlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgY3Rvcih0aGlzLl9wcm9ncmFtLCB0aGlzLl90eXBlQ2hlY2tlciwgdGFyZ2V0LCB0aGlzLl9jb250ZXh0LFxuICAgICAgICBkYXRhLCB0aGlzLl9maWxlU3lzdGVtLCB0aGlzLl9sb2dnZXIpO1xuICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgICAgaWYgKGluc3RhbmNlLmVuYWJsZWQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9ncmFtIGZvcm0gdGhlIHNwZWNpZmllZCB0c2NvbmZpZyBhbmQgcGF0Y2hlcyB0aGUgaG9zdFxuICAgKiB0byByZWFkIGZpbGVzIHRocm91Z2ggdGhlIGdpdmVuIGZpbGUgc3lzdGVtLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVByb2dyYW1Gcm9tVHNjb25maWcodHNjb25maWdGc1BhdGg6IHN0cmluZywgZnM6IEZpbGVTeXN0ZW0pOiB0cy5Qcm9ncmFtIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRzY29uZmlnRmlsZSh0c2NvbmZpZ0ZzUGF0aCwgZGlybmFtZSh0c2NvbmZpZ0ZzUGF0aCkpO1xuICAgIGNvbnN0IGhvc3QgPSB0cy5jcmVhdGVDb21waWxlckhvc3QocGFyc2VkLm9wdGlvbnMsIHRydWUpO1xuICAgIC8vIFBhdGNoIHRoZSBob3N0IHRvIHJlYWQgZmlsZXMgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIGZpbGUgc3lzdGVtLlxuICAgIGhvc3QucmVhZEZpbGUgPSBmaWxlTmFtZSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWQoZmlsZU5hbWUpO1xuICAgICAgLy8gU3RyaXAgQk9NIGFzIG90aGVyd2lzZSBUU0MgbWV0aG9kcyAoZS5nLiBcImdldFdpZHRoXCIpIHdpbGwgcmV0dXJuIGFuIG9mZnNldCB3aGljaFxuICAgICAgLy8gd2hpY2ggYnJlYWtzIHRoZSBDTEkgVXBkYXRlUmVjb3JkZXIuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8zMDcxOVxuICAgICAgcmV0dXJuIGZpbGVDb250ZW50ICE9PSBudWxsID8gZmlsZUNvbnRlbnQucmVwbGFjZSgvXlxcdUZFRkYvLCAnJykgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gdHMuY3JlYXRlUHJvZ3JhbShwYXJzZWQuZmlsZU5hbWVzLCBwYXJzZWQub3B0aW9ucywgaG9zdCk7XG4gIH1cbn1cbiJdfQ==