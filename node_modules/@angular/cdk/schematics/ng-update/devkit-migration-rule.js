/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/ng-update/devkit-migration-rule", ["require", "exports", "@angular-devkit/schematics/tasks", "glob", "path", "@angular/cdk/schematics/update-tool", "@angular/cdk/schematics/utils/project-tsconfig-paths", "@angular/cdk/schematics/ng-update/devkit-file-system", "@angular/cdk/schematics/ng-update/devkit-migration", "@angular/cdk/schematics/ng-update/migrations/attribute-selectors", "@angular/cdk/schematics/ng-update/migrations/class-inheritance", "@angular/cdk/schematics/ng-update/migrations/class-names", "@angular/cdk/schematics/ng-update/migrations/constructor-signature", "@angular/cdk/schematics/ng-update/migrations/css-selectors", "@angular/cdk/schematics/ng-update/migrations/element-selectors", "@angular/cdk/schematics/ng-update/migrations/input-names", "@angular/cdk/schematics/ng-update/migrations/method-call-arguments", "@angular/cdk/schematics/ng-update/migrations/misc-template", "@angular/cdk/schematics/ng-update/migrations/output-names", "@angular/cdk/schematics/ng-update/migrations/property-names"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tasks_1 = require("@angular-devkit/schematics/tasks");
    const glob_1 = require("glob");
    const path_1 = require("path");
    const update_tool_1 = require("@angular/cdk/schematics/update-tool");
    const project_tsconfig_paths_1 = require("@angular/cdk/schematics/utils/project-tsconfig-paths");
    const devkit_file_system_1 = require("@angular/cdk/schematics/ng-update/devkit-file-system");
    const devkit_migration_1 = require("@angular/cdk/schematics/ng-update/devkit-migration");
    const attribute_selectors_1 = require("@angular/cdk/schematics/ng-update/migrations/attribute-selectors");
    const class_inheritance_1 = require("@angular/cdk/schematics/ng-update/migrations/class-inheritance");
    const class_names_1 = require("@angular/cdk/schematics/ng-update/migrations/class-names");
    const constructor_signature_1 = require("@angular/cdk/schematics/ng-update/migrations/constructor-signature");
    const css_selectors_1 = require("@angular/cdk/schematics/ng-update/migrations/css-selectors");
    const element_selectors_1 = require("@angular/cdk/schematics/ng-update/migrations/element-selectors");
    const input_names_1 = require("@angular/cdk/schematics/ng-update/migrations/input-names");
    const method_call_arguments_1 = require("@angular/cdk/schematics/ng-update/migrations/method-call-arguments");
    const misc_template_1 = require("@angular/cdk/schematics/ng-update/migrations/misc-template");
    const output_names_1 = require("@angular/cdk/schematics/ng-update/migrations/output-names");
    const property_names_1 = require("@angular/cdk/schematics/ng-update/migrations/property-names");
    /** List of migrations which run for the CDK update. */
    exports.cdkMigrations = [
        attribute_selectors_1.AttributeSelectorsMigration,
        class_inheritance_1.ClassInheritanceMigration,
        class_names_1.ClassNamesMigration,
        constructor_signature_1.ConstructorSignatureMigration,
        css_selectors_1.CssSelectorsMigration,
        element_selectors_1.ElementSelectorsMigration,
        input_names_1.InputNamesMigration,
        method_call_arguments_1.MethodCallArgumentsMigration,
        misc_template_1.MiscTemplateMigration,
        output_names_1.OutputNamesMigration,
        property_names_1.PropertyNamesMigration,
    ];
    /**
     * Creates a Angular schematic rule that runs the upgrade for the
     * specified target version.
     */
    function createMigrationSchematicRule(targetVersion, extraMigrations, upgradeData, onMigrationCompleteFn) {
        return (tree, context) => __awaiter(this, void 0, void 0, function* () {
            const logger = context.logger;
            const workspace = project_tsconfig_paths_1.getWorkspaceConfigGracefully(tree);
            if (workspace === null) {
                logger.error('Could not find workspace configuration file.');
                return;
            }
            // Keep track of all project source files which have been checked/migrated. This is
            // necessary because multiple TypeScript projects can contain the same source file and
            // we don't want to check these again, as this would result in duplicated failure messages.
            const analyzedFiles = new Set();
            // The CLI uses the working directory as the base directory for the virtual file system tree.
            const workspaceFsPath = process.cwd();
            const fileSystem = new devkit_file_system_1.DevkitFileSystem(tree, workspaceFsPath);
            const projectNames = Object.keys(workspace.projects);
            const migrations = [...exports.cdkMigrations, ...extraMigrations];
            let hasFailures = false;
            for (const projectName of projectNames) {
                const project = workspace.projects[projectName];
                const buildTsconfigPath = project_tsconfig_paths_1.getTargetTsconfigPath(project, 'build');
                const testTsconfigPath = project_tsconfig_paths_1.getTargetTsconfigPath(project, 'test');
                if (!buildTsconfigPath && !testTsconfigPath) {
                    logger.warn(`Could not find TypeScript project for project: ${projectName}`);
                    continue;
                }
                if (buildTsconfigPath !== null) {
                    runMigrations(project, projectName, buildTsconfigPath, false);
                }
                if (testTsconfigPath !== null) {
                    runMigrations(project, projectName, testTsconfigPath, true);
                }
            }
            let runPackageManager = false;
            // Run the global post migration static members for all
            // registered devkit migrations.
            migrations.forEach(m => {
                const actionResult = isDevkitMigration(m) && m.globalPostMigration !== undefined ?
                    m.globalPostMigration(tree, context) : null;
                if (actionResult) {
                    runPackageManager = runPackageManager || actionResult.runPackageManager;
                }
            });
            // If a migration requested the package manager to run, we run it as an
            // asynchronous post migration task. We cannot run it synchronously,
            // as file changes from the current migration task are not applied to
            // the file system yet.
            if (runPackageManager) {
                context.addTask(new tasks_1.NodePackageInstallTask({ quiet: false }));
            }
            if (onMigrationCompleteFn) {
                onMigrationCompleteFn(context, targetVersion, hasFailures);
            }
            /** Runs the migrations for the specified workspace project. */
            function runMigrations(project, projectName, tsconfigPath, isTestTarget) {
                const projectRootFsPath = path_1.join(workspaceFsPath, project.root);
                const tsconfigFsPath = path_1.join(workspaceFsPath, tsconfigPath);
                const program = update_tool_1.UpdateProject.createProgramFromTsconfig(tsconfigFsPath, fileSystem);
                const updateContext = {
                    workspaceFsPath,
                    isTestTarget,
                    projectName,
                    project,
                    tree,
                };
                const updateProject = new update_tool_1.UpdateProject(updateContext, program, fileSystem, analyzedFiles, context.logger);
                // In some applications, developers will have global stylesheets which are not
                // specified in any Angular component. Therefore we glob up all CSS and SCSS files
                // outside of node_modules and dist. The files will be read by the individual
                // stylesheet rules and checked.
                // TODO: rework this to collect global stylesheets from the workspace config. COMP-280.
                const additionalStylesheets = glob_1.sync('!(node_modules|dist)/**/*.+(css|scss)', { absolute: true, cwd: projectRootFsPath, nodir: true });
                const result = updateProject.migrate(migrations, targetVersion, upgradeData, additionalStylesheets);
                // Commit all recorded edits in the update recorder. We apply the edits after all
                // migrations ran because otherwise offsets in the TypeScript program would be
                // shifted and individual migrations could no longer update the same source file.
                fileSystem.commitEdits();
                hasFailures = hasFailures || result.hasFailures;
            }
        });
    }
    exports.createMigrationSchematicRule = createMigrationSchematicRule;
    /** Whether the given migration type refers to a devkit migration */
    function isDevkitMigration(value) {
        return devkit_migration_1.DevkitMigration.isPrototypeOf(value);
    }
    exports.isDevkitMigration = isDevkitMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2a2l0LW1pZ3JhdGlvbi1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9kZXZraXQtbWlncmF0aW9uLXJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHSCw0REFBd0U7SUFFeEUsK0JBQXNDO0lBQ3RDLCtCQUEwQjtJQUUxQixxRUFBNkM7SUFHN0MsaUdBQW9HO0lBRXBHLDZGQUFzRDtJQUN0RCx5RkFBdUY7SUFDdkYsMEdBQTZFO0lBQzdFLHNHQUF5RTtJQUN6RSwwRkFBNkQ7SUFDN0QsOEdBQWlGO0lBQ2pGLDhGQUFpRTtJQUNqRSxzR0FBeUU7SUFDekUsMEZBQTZEO0lBQzdELDhHQUFnRjtJQUNoRiw4RkFBaUU7SUFDakUsNEZBQStEO0lBQy9ELGdHQUFtRTtJQUluRSx1REFBdUQ7SUFDMUMsUUFBQSxhQUFhLEdBQWlDO1FBQ3pELGlEQUEyQjtRQUMzQiw2Q0FBeUI7UUFDekIsaUNBQW1CO1FBQ25CLHFEQUE2QjtRQUM3QixxQ0FBcUI7UUFDckIsNkNBQXlCO1FBQ3pCLGlDQUFtQjtRQUNuQixvREFBNEI7UUFDNUIscUNBQXFCO1FBQ3JCLG1DQUFvQjtRQUNwQix1Q0FBc0I7S0FDdkIsQ0FBQztJQU9GOzs7T0FHRztJQUNILFNBQWdCLDRCQUE0QixDQUN4QyxhQUE0QixFQUFFLGVBQTBDLEVBQ3hFLFdBQXdCLEVBQUUscUJBQXVDO1FBQ25FLE9BQU8sQ0FBTyxJQUFVLEVBQUUsT0FBeUIsRUFBRSxFQUFFO1lBQ3JELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDOUIsTUFBTSxTQUFTLEdBQUcscURBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckQsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLDhD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VUFBVSxDQUFDLENBQUM7Z0JBQ3BGLE1BQU0sYUFBYSxHQUFrQjtvQkFDbkMsZUFBZTtvQkFDZixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsT0FBTztvQkFDUCxJQUFJO2lCQUNMLENBQUM7Z0JBRUYsTUFBTSxhQUFhLEdBQUcsSUFBSSwyQkFBYSxDQUNyQyxhQUFhLEVBQ2IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FDZixDQUFDO2dCQUVGLDhFQUE4RTtnQkFDOUUsa0ZBQWtGO2dCQUNsRiw2RUFBNkU7Z0JBQzdFLGdDQUFnQztnQkFDaEMsdUZBQXVGO2dCQUN2RixNQUFNLHFCQUFxQixHQUFHLFdBQVEsQ0FDcEMsdUNBQXVDLEVBQ3ZDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBRXpELE1BQU0sTUFBTSxHQUNWLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFFdkYsaUZBQWlGO2dCQUNqRiw4RUFBOEU7Z0JBQzlFLGlGQUFpRjtnQkFDakYsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUV6QixXQUFXLEdBQUcsV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQztJQXpHRCxvRUF5R0M7SUFFRCxvRUFBb0U7SUFDcEUsU0FBZ0IsaUJBQWlCLENBQUMsS0FBOEI7UUFFOUQsT0FBTyxrQ0FBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSEQsOENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSdWxlLCBTY2hlbWF0aWNDb250ZXh0LCBUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge05vZGVQYWNrYWdlSW5zdGFsbFRhc2t9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzL3Rhc2tzJztcbmltcG9ydCB7V29ya3NwYWNlUHJvamVjdH0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L3dvcmtzcGFjZS1tb2RlbHMnO1xuaW1wb3J0IHtzeW5jIGFzIGdsb2JTeW5jfSBmcm9tICdnbG9iJztcbmltcG9ydCB7am9pbn0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7VXBkYXRlUHJvamVjdH0gZnJvbSAnLi4vdXBkYXRlLXRvb2wnO1xuaW1wb3J0IHtNaWdyYXRpb25DdG9yfSBmcm9tICcuLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuaW1wb3J0IHtUYXJnZXRWZXJzaW9ufSBmcm9tICcuLi91cGRhdGUtdG9vbC90YXJnZXQtdmVyc2lvbic7XG5pbXBvcnQge2dldFRhcmdldFRzY29uZmlnUGF0aCwgZ2V0V29ya3NwYWNlQ29uZmlnR3JhY2VmdWxseX0gZnJvbSAnLi4vdXRpbHMvcHJvamVjdC10c2NvbmZpZy1wYXRocyc7XG5cbmltcG9ydCB7RGV2a2l0RmlsZVN5c3RlbX0gZnJvbSAnLi9kZXZraXQtZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHtEZXZraXRDb250ZXh0LCBEZXZraXRNaWdyYXRpb24sIERldmtpdE1pZ3JhdGlvbkN0b3J9IGZyb20gJy4vZGV2a2l0LW1pZ3JhdGlvbic7XG5pbXBvcnQge0F0dHJpYnV0ZVNlbGVjdG9yc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2F0dHJpYnV0ZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHtDbGFzc0luaGVyaXRhbmNlTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvY2xhc3MtaW5oZXJpdGFuY2UnO1xuaW1wb3J0IHtDbGFzc05hbWVzTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvY2xhc3MtbmFtZXMnO1xuaW1wb3J0IHtDb25zdHJ1Y3RvclNpZ25hdHVyZU1pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2NvbnN0cnVjdG9yLXNpZ25hdHVyZSc7XG5pbXBvcnQge0Nzc1NlbGVjdG9yc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2Nzcy1zZWxlY3RvcnMnO1xuaW1wb3J0IHtFbGVtZW50U2VsZWN0b3JzTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvZWxlbWVudC1zZWxlY3RvcnMnO1xuaW1wb3J0IHtJbnB1dE5hbWVzTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvaW5wdXQtbmFtZXMnO1xuaW1wb3J0IHtNZXRob2RDYWxsQXJndW1lbnRzTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvbWV0aG9kLWNhbGwtYXJndW1lbnRzJztcbmltcG9ydCB7TWlzY1RlbXBsYXRlTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvbWlzYy10ZW1wbGF0ZSc7XG5pbXBvcnQge091dHB1dE5hbWVzTWlncmF0aW9ufSBmcm9tICcuL21pZ3JhdGlvbnMvb3V0cHV0LW5hbWVzJztcbmltcG9ydCB7UHJvcGVydHlOYW1lc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL3Byb3BlcnR5LW5hbWVzJztcbmltcG9ydCB7VXBncmFkZURhdGF9IGZyb20gJy4vdXBncmFkZS1kYXRhJztcblxuXG4vKiogTGlzdCBvZiBtaWdyYXRpb25zIHdoaWNoIHJ1biBmb3IgdGhlIENESyB1cGRhdGUuICovXG5leHBvcnQgY29uc3QgY2RrTWlncmF0aW9uczogTWlncmF0aW9uQ3RvcjxVcGdyYWRlRGF0YT5bXSA9IFtcbiAgQXR0cmlidXRlU2VsZWN0b3JzTWlncmF0aW9uLFxuICBDbGFzc0luaGVyaXRhbmNlTWlncmF0aW9uLFxuICBDbGFzc05hbWVzTWlncmF0aW9uLFxuICBDb25zdHJ1Y3RvclNpZ25hdHVyZU1pZ3JhdGlvbixcbiAgQ3NzU2VsZWN0b3JzTWlncmF0aW9uLFxuICBFbGVtZW50U2VsZWN0b3JzTWlncmF0aW9uLFxuICBJbnB1dE5hbWVzTWlncmF0aW9uLFxuICBNZXRob2RDYWxsQXJndW1lbnRzTWlncmF0aW9uLFxuICBNaXNjVGVtcGxhdGVNaWdyYXRpb24sXG4gIE91dHB1dE5hbWVzTWlncmF0aW9uLFxuICBQcm9wZXJ0eU5hbWVzTWlncmF0aW9uLFxuXTtcblxuZXhwb3J0IHR5cGUgTnVsbGFibGVEZXZraXRNaWdyYXRpb24gPSBNaWdyYXRpb25DdG9yPFVwZ3JhZGVEYXRhfG51bGwsIERldmtpdENvbnRleHQ+O1xuXG50eXBlIFBvc3RNaWdyYXRpb25GbiA9XG4gICAgKGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQsIHRhcmdldFZlcnNpb246IFRhcmdldFZlcnNpb24sIGhhc0ZhaWx1cmU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIEFuZ3VsYXIgc2NoZW1hdGljIHJ1bGUgdGhhdCBydW5zIHRoZSB1cGdyYWRlIGZvciB0aGVcbiAqIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGlvblNjaGVtYXRpY1J1bGUoXG4gICAgdGFyZ2V0VmVyc2lvbjogVGFyZ2V0VmVyc2lvbiwgZXh0cmFNaWdyYXRpb25zOiBOdWxsYWJsZURldmtpdE1pZ3JhdGlvbltdLFxuICAgIHVwZ3JhZGVEYXRhOiBVcGdyYWRlRGF0YSwgb25NaWdyYXRpb25Db21wbGV0ZUZuPzogUG9zdE1pZ3JhdGlvbkZuKTogUnVsZSB7XG4gIHJldHVybiBhc3luYyAodHJlZTogVHJlZSwgY29udGV4dDogU2NoZW1hdGljQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IGNvbnRleHQubG9nZ2VyO1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGdldFdvcmtzcGFjZUNvbmZpZ0dyYWNlZnVsbHkodHJlZSk7XG5cbiAgICBpZiAod29ya3NwYWNlID09PSBudWxsKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHdvcmtzcGFjZSBjb25maWd1cmF0aW9uIGZpbGUuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgcHJvamVjdCBzb3VyY2UgZmlsZXMgd2hpY2ggaGF2ZSBiZWVuIGNoZWNrZWQvbWlncmF0ZWQuIFRoaXMgaXNcbiAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBtdWx0aXBsZSBUeXBlU2NyaXB0IHByb2plY3RzIGNhbiBjb250YWluIHRoZSBzYW1lIHNvdXJjZSBmaWxlIGFuZFxuICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2hlY2sgdGhlc2UgYWdhaW4sIGFzIHRoaXMgd291bGQgcmVzdWx0IGluIGR1cGxpY2F0ZWQgZmFpbHVyZSBtZXNzYWdlcy5cbiAgICBjb25zdCBhbmFseXplZEZpbGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgLy8gVGhlIENMSSB1c2VzIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBhcyB0aGUgYmFzZSBkaXJlY3RvcnkgZm9yIHRoZSB2aXJ0dWFsIGZpbGUgc3lzdGVtIHRyZWUuXG4gICAgY29uc3Qgd29ya3NwYWNlRnNQYXRoID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBmaWxlU3lzdGVtID0gbmV3IERldmtpdEZpbGVTeXN0ZW0odHJlZSwgd29ya3NwYWNlRnNQYXRoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBPYmplY3Qua2V5cyh3b3Jrc3BhY2UucHJvamVjdHMpO1xuICAgIGNvbnN0IG1pZ3JhdGlvbnM6IE51bGxhYmxlRGV2a2l0TWlncmF0aW9uW10gPSBbLi4uY2RrTWlncmF0aW9ucywgLi4uZXh0cmFNaWdyYXRpb25zXTtcbiAgICBsZXQgaGFzRmFpbHVyZXMgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdE5hbWUgb2YgcHJvamVjdE5hbWVzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gd29ya3NwYWNlLnByb2plY3RzW3Byb2plY3ROYW1lXTtcbiAgICAgIGNvbnN0IGJ1aWxkVHNjb25maWdQYXRoID0gZ2V0VGFyZ2V0VHNjb25maWdQYXRoKHByb2plY3QsICdidWlsZCcpO1xuICAgICAgY29uc3QgdGVzdFRzY29uZmlnUGF0aCA9IGdldFRhcmdldFRzY29uZmlnUGF0aChwcm9qZWN0LCAndGVzdCcpO1xuXG4gICAgICBpZiAoIWJ1aWxkVHNjb25maWdQYXRoICYmICF0ZXN0VHNjb25maWdQYXRoKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBDb3VsZCBub3QgZmluZCBUeXBlU2NyaXB0IHByb2plY3QgZm9yIHByb2plY3Q6ICR7cHJvamVjdE5hbWV9YCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGJ1aWxkVHNjb25maWdQYXRoICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bk1pZ3JhdGlvbnMocHJvamVjdCwgcHJvamVjdE5hbWUsIGJ1aWxkVHNjb25maWdQYXRoLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodGVzdFRzY29uZmlnUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICBydW5NaWdyYXRpb25zKHByb2plY3QsIHByb2plY3ROYW1lLCB0ZXN0VHNjb25maWdQYXRoLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcnVuUGFja2FnZU1hbmFnZXIgPSBmYWxzZTtcbiAgICAvLyBSdW4gdGhlIGdsb2JhbCBwb3N0IG1pZ3JhdGlvbiBzdGF0aWMgbWVtYmVycyBmb3IgYWxsXG4gICAgLy8gcmVnaXN0ZXJlZCBkZXZraXQgbWlncmF0aW9ucy5cbiAgICBtaWdyYXRpb25zLmZvckVhY2gobSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25SZXN1bHQgPSBpc0RldmtpdE1pZ3JhdGlvbihtKSAmJiBtLmdsb2JhbFBvc3RNaWdyYXRpb24gIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgbS5nbG9iYWxQb3N0TWlncmF0aW9uKHRyZWUsIGNvbnRleHQpIDogbnVsbDtcbiAgICAgIGlmIChhY3Rpb25SZXN1bHQpIHtcbiAgICAgICAgcnVuUGFja2FnZU1hbmFnZXIgPSBydW5QYWNrYWdlTWFuYWdlciB8fCBhY3Rpb25SZXN1bHQucnVuUGFja2FnZU1hbmFnZXI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiBhIG1pZ3JhdGlvbiByZXF1ZXN0ZWQgdGhlIHBhY2thZ2UgbWFuYWdlciB0byBydW4sIHdlIHJ1biBpdCBhcyBhblxuICAgIC8vIGFzeW5jaHJvbm91cyBwb3N0IG1pZ3JhdGlvbiB0YXNrLiBXZSBjYW5ub3QgcnVuIGl0IHN5bmNocm9ub3VzbHksXG4gICAgLy8gYXMgZmlsZSBjaGFuZ2VzIGZyb20gdGhlIGN1cnJlbnQgbWlncmF0aW9uIHRhc2sgYXJlIG5vdCBhcHBsaWVkIHRvXG4gICAgLy8gdGhlIGZpbGUgc3lzdGVtIHlldC5cbiAgICBpZiAocnVuUGFja2FnZU1hbmFnZXIpIHtcbiAgICAgIGNvbnRleHQuYWRkVGFzayhuZXcgTm9kZVBhY2thZ2VJbnN0YWxsVGFzayh7cXVpZXQ6IGZhbHNlfSkpO1xuICAgIH1cblxuICAgIGlmIChvbk1pZ3JhdGlvbkNvbXBsZXRlRm4pIHtcbiAgICAgIG9uTWlncmF0aW9uQ29tcGxldGVGbihjb250ZXh0LCB0YXJnZXRWZXJzaW9uLCBoYXNGYWlsdXJlcyk7XG4gICAgfVxuXG4gICAgLyoqIFJ1bnMgdGhlIG1pZ3JhdGlvbnMgZm9yIHRoZSBzcGVjaWZpZWQgd29ya3NwYWNlIHByb2plY3QuICovXG4gICAgZnVuY3Rpb24gcnVuTWlncmF0aW9ucyhwcm9qZWN0OiBXb3Jrc3BhY2VQcm9qZWN0LCBwcm9qZWN0TmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHNjb25maWdQYXRoOiBzdHJpbmcsIGlzVGVzdFRhcmdldDogYm9vbGVhbikge1xuICAgICAgY29uc3QgcHJvamVjdFJvb3RGc1BhdGggPSBqb2luKHdvcmtzcGFjZUZzUGF0aCwgcHJvamVjdC5yb290KTtcbiAgICAgIGNvbnN0IHRzY29uZmlnRnNQYXRoID0gam9pbih3b3Jrc3BhY2VGc1BhdGgsIHRzY29uZmlnUGF0aCk7XG4gICAgICBjb25zdCBwcm9ncmFtID0gVXBkYXRlUHJvamVjdC5jcmVhdGVQcm9ncmFtRnJvbVRzY29uZmlnKHRzY29uZmlnRnNQYXRoLCBmaWxlU3lzdGVtKTtcbiAgICAgIGNvbnN0IHVwZGF0ZUNvbnRleHQ6IERldmtpdENvbnRleHQgPSB7XG4gICAgICAgIHdvcmtzcGFjZUZzUGF0aCxcbiAgICAgICAgaXNUZXN0VGFyZ2V0LFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgdHJlZSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSBuZXcgVXBkYXRlUHJvamVjdChcbiAgICAgICAgdXBkYXRlQ29udGV4dCxcbiAgICAgICAgcHJvZ3JhbSxcbiAgICAgICAgZmlsZVN5c3RlbSxcbiAgICAgICAgYW5hbHl6ZWRGaWxlcyxcbiAgICAgICAgY29udGV4dC5sb2dnZXIsXG4gICAgICApO1xuXG4gICAgICAvLyBJbiBzb21lIGFwcGxpY2F0aW9ucywgZGV2ZWxvcGVycyB3aWxsIGhhdmUgZ2xvYmFsIHN0eWxlc2hlZXRzIHdoaWNoIGFyZSBub3RcbiAgICAgIC8vIHNwZWNpZmllZCBpbiBhbnkgQW5ndWxhciBjb21wb25lbnQuIFRoZXJlZm9yZSB3ZSBnbG9iIHVwIGFsbCBDU1MgYW5kIFNDU1MgZmlsZXNcbiAgICAgIC8vIG91dHNpZGUgb2Ygbm9kZV9tb2R1bGVzIGFuZCBkaXN0LiBUaGUgZmlsZXMgd2lsbCBiZSByZWFkIGJ5IHRoZSBpbmRpdmlkdWFsXG4gICAgICAvLyBzdHlsZXNoZWV0IHJ1bGVzIGFuZCBjaGVja2VkLlxuICAgICAgLy8gVE9ETzogcmV3b3JrIHRoaXMgdG8gY29sbGVjdCBnbG9iYWwgc3R5bGVzaGVldHMgZnJvbSB0aGUgd29ya3NwYWNlIGNvbmZpZy4gQ09NUC0yODAuXG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3R5bGVzaGVldHMgPSBnbG9iU3luYyhcbiAgICAgICAgJyEobm9kZV9tb2R1bGVzfGRpc3QpLyoqLyouKyhjc3N8c2NzcyknLFxuICAgICAgICB7YWJzb2x1dGU6IHRydWUsIGN3ZDogcHJvamVjdFJvb3RGc1BhdGgsIG5vZGlyOiB0cnVlfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHVwZGF0ZVByb2plY3QubWlncmF0ZShtaWdyYXRpb25zLCB0YXJnZXRWZXJzaW9uLCB1cGdyYWRlRGF0YSwgYWRkaXRpb25hbFN0eWxlc2hlZXRzKTtcblxuICAgICAgLy8gQ29tbWl0IGFsbCByZWNvcmRlZCBlZGl0cyBpbiB0aGUgdXBkYXRlIHJlY29yZGVyLiBXZSBhcHBseSB0aGUgZWRpdHMgYWZ0ZXIgYWxsXG4gICAgICAvLyBtaWdyYXRpb25zIHJhbiBiZWNhdXNlIG90aGVyd2lzZSBvZmZzZXRzIGluIHRoZSBUeXBlU2NyaXB0IHByb2dyYW0gd291bGQgYmVcbiAgICAgIC8vIHNoaWZ0ZWQgYW5kIGluZGl2aWR1YWwgbWlncmF0aW9ucyBjb3VsZCBubyBsb25nZXIgdXBkYXRlIHRoZSBzYW1lIHNvdXJjZSBmaWxlLlxuICAgICAgZmlsZVN5c3RlbS5jb21taXRFZGl0cygpO1xuXG4gICAgICBoYXNGYWlsdXJlcyA9IGhhc0ZhaWx1cmVzIHx8IHJlc3VsdC5oYXNGYWlsdXJlcztcbiAgICB9XG4gIH07XG59XG5cbi8qKiBXaGV0aGVyIHRoZSBnaXZlbiBtaWdyYXRpb24gdHlwZSByZWZlcnMgdG8gYSBkZXZraXQgbWlncmF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZraXRNaWdyYXRpb24odmFsdWU6IE1pZ3JhdGlvbkN0b3I8YW55LCBhbnk+KVxuICAgIDogdmFsdWUgaXMgRGV2a2l0TWlncmF0aW9uQ3Rvcjxhbnk+IHtcbiAgcmV0dXJuIERldmtpdE1pZ3JhdGlvbi5pc1Byb3RvdHlwZU9mKHZhbHVlKTtcbn1cbiJdfQ==