/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
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
        define("@angular/core/schematics/migrations/static-queries", ["require", "exports", "@angular-devkit/schematics", "path", "rxjs", "typescript", "@angular/core/schematics/utils/ng_component_template", "@angular/core/schematics/utils/project_tsconfig_paths", "@angular/core/schematics/utils/typescript/compiler_host", "@angular/core/schematics/migrations/static-queries/angular/ng_query_visitor", "@angular/core/schematics/migrations/static-queries/strategies/template_strategy/template_strategy", "@angular/core/schematics/migrations/static-queries/strategies/test_strategy/test_strategy", "@angular/core/schematics/migrations/static-queries/strategies/usage_strategy/usage_strategy", "@angular/core/schematics/migrations/static-queries/transform"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const path_1 = require("path");
    const rxjs_1 = require("rxjs");
    const ts = require("typescript");
    const ng_component_template_1 = require("@angular/core/schematics/utils/ng_component_template");
    const project_tsconfig_paths_1 = require("@angular/core/schematics/utils/project_tsconfig_paths");
    const compiler_host_1 = require("@angular/core/schematics/utils/typescript/compiler_host");
    const ng_query_visitor_1 = require("@angular/core/schematics/migrations/static-queries/angular/ng_query_visitor");
    const template_strategy_1 = require("@angular/core/schematics/migrations/static-queries/strategies/template_strategy/template_strategy");
    const test_strategy_1 = require("@angular/core/schematics/migrations/static-queries/strategies/test_strategy/test_strategy");
    const usage_strategy_1 = require("@angular/core/schematics/migrations/static-queries/strategies/usage_strategy/usage_strategy");
    const transform_1 = require("@angular/core/schematics/migrations/static-queries/transform");
    var SELECTED_STRATEGY;
    (function (SELECTED_STRATEGY) {
        SELECTED_STRATEGY[SELECTED_STRATEGY["TEMPLATE"] = 0] = "TEMPLATE";
        SELECTED_STRATEGY[SELECTED_STRATEGY["USAGE"] = 1] = "USAGE";
        SELECTED_STRATEGY[SELECTED_STRATEGY["TESTS"] = 2] = "TESTS";
    })(SELECTED_STRATEGY || (SELECTED_STRATEGY = {}));
    /** Entry point for the V8 static-query migration. */
    function default_1() {
        return (tree, context) => {
            // We need to cast the returned "Observable" to "any" as there is a
            // RxJS version mismatch that breaks the TS compilation.
            return rxjs_1.from(runMigration(tree, context).then(() => tree));
        };
    }
    exports.default = default_1;
    /** Runs the V8 migration static-query migration for all determined TypeScript projects. */
    function runMigration(tree, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const { buildPaths, testPaths } = project_tsconfig_paths_1.getProjectTsConfigPaths(tree);
            const basePath = process.cwd();
            const logger = context.logger;
            if (!buildPaths.length && !testPaths.length) {
                throw new schematics_1.SchematicsException('Could not find any tsconfig file. Cannot migrate queries ' +
                    'to add static flag.');
            }
            const analyzedFiles = new Set();
            const buildProjects = new Set();
            const failures = [];
            const strategy = process.env['NG_STATIC_QUERY_USAGE_STRATEGY'] === 'true' ?
                SELECTED_STRATEGY.USAGE :
                SELECTED_STRATEGY.TEMPLATE;
            for (const tsconfigPath of buildPaths) {
                const project = analyzeProject(tree, tsconfigPath, basePath, analyzedFiles, logger);
                if (project) {
                    buildProjects.add(project);
                }
            }
            if (buildProjects.size) {
                for (let project of Array.from(buildProjects.values())) {
                    failures.push(...yield runStaticQueryMigration(tree, project, strategy, logger));
                }
            }
            // For the "test" tsconfig projects we always want to use the test strategy as
            // we can't detect the proper timing within spec files.
            for (const tsconfigPath of testPaths) {
                const project = yield analyzeProject(tree, tsconfigPath, basePath, analyzedFiles, logger);
                if (project) {
                    failures.push(...yield runStaticQueryMigration(tree, project, SELECTED_STRATEGY.TESTS, logger));
                }
            }
            if (failures.length) {
                logger.info('');
                logger.info('Some queries could not be migrated automatically. Please go');
                logger.info('through these manually and apply the appropriate timing.');
                logger.info('For more info on how to choose a flag, please see: ');
                logger.info('https://v8.angular.io/guide/static-query-migration');
                failures.forEach(failure => logger.warn(`⮑   ${failure}`));
            }
        });
    }
    /**
     * Analyzes the given TypeScript project by looking for queries that need to be
     * migrated. In case there are no queries that can be migrated, null is returned.
     */
    function analyzeProject(tree, tsconfigPath, basePath, analyzedFiles, logger) {
        const { program, host } = compiler_host_1.createMigrationProgram(tree, tsconfigPath, basePath);
        const syntacticDiagnostics = program.getSyntacticDiagnostics();
        // Syntactic TypeScript errors can throw off the query analysis and therefore we want
        // to notify the developer that we couldn't analyze parts of the project. Developers
        // can just re-run the migration after fixing these failures.
        if (syntacticDiagnostics.length) {
            logger.warn(`\nTypeScript project "${tsconfigPath}" has syntactical errors which could cause ` +
                `an incomplete migration. Please fix the following failures and rerun the migration:`);
            logger.error(ts.formatDiagnostics(syntacticDiagnostics, host));
            logger.info('Migration can be rerun with: "ng update @angular/core --from 7 --to 8 --migrate-only"\n');
        }
        const typeChecker = program.getTypeChecker();
        const sourceFiles = program.getSourceFiles().filter(f => !f.isDeclarationFile && !program.isSourceFileFromExternalLibrary(f));
        const queryVisitor = new ng_query_visitor_1.NgQueryResolveVisitor(typeChecker);
        // Analyze all project source-files and collect all queries that
        // need to be migrated.
        sourceFiles.forEach(sourceFile => {
            const relativePath = path_1.relative(basePath, sourceFile.fileName);
            // Only look for queries within the current source files if the
            // file has not been analyzed before.
            if (!analyzedFiles.has(relativePath)) {
                analyzedFiles.add(relativePath);
                queryVisitor.visitNode(sourceFile);
            }
        });
        if (queryVisitor.resolvedQueries.size === 0) {
            return null;
        }
        return { program, host, tsconfigPath, typeChecker, basePath, queryVisitor, sourceFiles };
    }
    /**
     * Runs the static query migration for the given project. The schematic analyzes all
     * queries within the project and sets up the query timing based on the current usage
     * of the query property. e.g. a view query that is not used in any lifecycle hook does
     * not need to be static and can be set up with "static: false".
     */
    function runStaticQueryMigration(tree, project, selectedStrategy, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sourceFiles, typeChecker, host, queryVisitor, tsconfigPath, basePath } = project;
            const printer = ts.createPrinter();
            const failureMessages = [];
            const templateVisitor = new ng_component_template_1.NgComponentTemplateVisitor(typeChecker);
            // If the "usage" strategy is selected, we also need to add the query visitor
            // to the analysis visitors so that query usage in templates can be also checked.
            if (selectedStrategy === SELECTED_STRATEGY.USAGE) {
                sourceFiles.forEach(s => templateVisitor.visitNode(s));
            }
            const { resolvedQueries, classMetadata } = queryVisitor;
            const { resolvedTemplates } = templateVisitor;
            if (selectedStrategy === SELECTED_STRATEGY.USAGE) {
                // Add all resolved templates to the class metadata if the usage strategy is used. This
                // is necessary in order to be able to check component templates for static query usage.
                resolvedTemplates.forEach(template => {
                    if (classMetadata.has(template.container)) {
                        classMetadata.get(template.container).template = template;
                    }
                });
            }
            let strategy;
            if (selectedStrategy === SELECTED_STRATEGY.USAGE) {
                strategy = new usage_strategy_1.QueryUsageStrategy(classMetadata, typeChecker);
            }
            else if (selectedStrategy === SELECTED_STRATEGY.TESTS) {
                strategy = new test_strategy_1.QueryTestStrategy();
            }
            else {
                strategy = new template_strategy_1.QueryTemplateStrategy(tsconfigPath, classMetadata, host);
            }
            try {
                strategy.setup();
            }
            catch (e) {
                if (selectedStrategy === SELECTED_STRATEGY.TEMPLATE) {
                    logger.warn(`\nThe template migration strategy uses the Angular compiler ` +
                        `internally and therefore projects that no longer build successfully after ` +
                        `the update cannot use the template migration strategy. Please ensure ` +
                        `there are no AOT compilation errors.\n`);
                }
                // In case the strategy could not be set up properly, we just exit the
                // migration. We don't want to throw an exception as this could mean
                // that other migrations are interrupted.
                logger.warn(`Could not setup migration strategy for "${project.tsconfigPath}". The ` +
                    `following error has been reported:\n`);
                logger.error(`${e.toString()}\n`);
                logger.info('Migration can be rerun with: "ng update @angular/core --from 7 --to 8 --migrate-only"\n');
                return [];
            }
            // Walk through all source files that contain resolved queries and update
            // the source files if needed. Note that we need to update multiple queries
            // within a source file within the same recorder in order to not throw off
            // the TypeScript node offsets.
            resolvedQueries.forEach((queries, sourceFile) => {
                const relativePath = path_1.relative(basePath, sourceFile.fileName);
                const update = tree.beginUpdate(relativePath);
                // Compute the query timing for all resolved queries and update the
                // query definitions to explicitly set the determined query timing.
                queries.forEach(q => {
                    const queryExpr = q.decorator.node.expression;
                    const { timing, message } = strategy.detectTiming(q);
                    const result = transform_1.getTransformedQueryCallExpr(q, timing, !!message);
                    if (!result) {
                        return;
                    }
                    const newText = printer.printNode(ts.EmitHint.Unspecified, result.node, sourceFile);
                    // Replace the existing query decorator call expression with the updated
                    // call expression node.
                    update.remove(queryExpr.getStart(), queryExpr.getWidth());
                    update.insertRight(queryExpr.getStart(), newText);
                    if (result.failureMessage || message) {
                        const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, q.decorator.node.getStart());
                        failureMessages.push(`${relativePath}@${line + 1}:${character + 1}: ${result.failureMessage || message}`);
                    }
                });
                tree.commitUpdate(update);
            });
            return failureMessages;
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NjaGVtYXRpY3MvbWlncmF0aW9ucy9zdGF0aWMtcXVlcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdILDJEQUE2RjtJQUM3RiwrQkFBOEI7SUFDOUIsK0JBQTBCO0lBQzFCLGlDQUFpQztJQUVqQyxnR0FBNkU7SUFDN0Usa0dBQTJFO0lBQzNFLDJGQUE0RTtJQUU1RSxrSEFBaUU7SUFDakUseUlBQXVGO0lBQ3ZGLDZIQUEyRTtJQUUzRSxnSUFBOEU7SUFDOUUsNEZBQXdEO0lBRXhELElBQUssaUJBSUo7SUFKRCxXQUFLLGlCQUFpQjtRQUNwQixpRUFBUSxDQUFBO1FBQ1IsMkRBQUssQ0FBQTtRQUNMLDJEQUFLLENBQUE7SUFDUCxDQUFDLEVBSkksaUJBQWlCLEtBQWpCLGlCQUFpQixRQUlyQjtJQVlELHFEQUFxRDtJQUNyRDtRQUNFLE9BQU8sQ0FBQyxJQUFVLEVBQUUsT0FBeUIsRUFBRSxFQUFFO1lBQy9DLG1FQUFtRTtZQUNuRSx3REFBd0Q7WUFDeEQsT0FBTyxXQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQVEsQ0FBQztRQUNuRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBTkQsNEJBTUM7SUFFRCwyRkFBMkY7SUFDM0YsU0FBZSxZQUFZLENBQUMsSUFBVSxFQUFFLE9BQXlCOztZQUMvRCxNQUFNLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxHQUFHLGdEQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMs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TSxDQUFDLGNBQWMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO3FCQUMxRjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxlQUFlLENBQUM7UUFDekIsQ0FBQztLQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2xvZ2dpbmd9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7UnVsZSwgU2NoZW1hdGljQ29udGV4dCwgU2NoZW1hdGljc0V4Y2VwdGlvbiwgVHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtyZWxhdGl2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQge2Zyb219IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TmdDb21wb25lbnRUZW1wbGF0ZVZpc2l0b3J9IGZyb20gJy4uLy4uL3V0aWxzL25nX2NvbXBvbmVudF90ZW1wbGF0ZSc7XG5pbXBvcnQge2dldFByb2plY3RUc0NvbmZpZ1BhdGhzfSBmcm9tICcuLi8uLi91dGlscy9wcm9qZWN0X3RzY29uZmlnX3BhdGhzJztcbmltcG9ydCB7Y3JlYXRlTWlncmF0aW9uUHJvZ3JhbX0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNjcmlwdC9jb21waWxlcl9ob3N0JztcblxuaW1wb3J0IHtOZ1F1ZXJ5UmVzb2x2ZVZpc2l0b3J9IGZyb20gJy4vYW5ndWxhci9uZ19xdWVyeV92aXNpdG9yJztcbmltcG9ydCB7UXVlcnlUZW1wbGF0ZVN0cmF0ZWd5fSBmcm9tICcuL3N0cmF0ZWdpZXMvdGVtcGxhdGVfc3RyYXRlZ3kvdGVtcGxhdGVfc3RyYXRlZ3knO1xuaW1wb3J0IHtRdWVyeVRlc3RTdHJhdGVneX0gZnJvbSAnLi9zdHJhdGVnaWVzL3Rlc3Rfc3RyYXRlZ3kvdGVzdF9zdHJhdGVneSc7XG5pbXBvcnQge1RpbWluZ1N0cmF0ZWd5fSBmcm9tICcuL3N0cmF0ZWdpZXMvdGltaW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7UXVlcnlVc2FnZVN0cmF0ZWd5fSBmcm9tICcuL3N0cmF0ZWdpZXMvdXNhZ2Vfc3RyYXRlZ3kvdXNhZ2Vfc3RyYXRlZ3knO1xuaW1wb3J0IHtnZXRUcmFuc2Zvcm1lZFF1ZXJ5Q2FsbEV4cHJ9IGZyb20gJy4vdHJhbnNmb3JtJztcblxuZW51bSBTRUxFQ1RFRF9TVFJBVEVHWSB7XG4gIFRFTVBMQVRFLFxuICBVU0FHRSxcbiAgVEVTVFMsXG59XG5cbmludGVyZmFjZSBBbmFseXplZFByb2plY3Qge1xuICBwcm9ncmFtOiB0cy5Qcm9ncmFtO1xuICBob3N0OiB0cy5Db21waWxlckhvc3Q7XG4gIHF1ZXJ5VmlzaXRvcjogTmdRdWVyeVJlc29sdmVWaXNpdG9yO1xuICBzb3VyY2VGaWxlczogdHMuU291cmNlRmlsZVtdO1xuICBiYXNlUGF0aDogc3RyaW5nO1xuICB0eXBlQ2hlY2tlcjogdHMuVHlwZUNoZWNrZXI7XG4gIHRzY29uZmlnUGF0aDogc3RyaW5nO1xufVxuXG4vKiogRW50cnkgcG9pbnQgZm9yIHRoZSBWOCBzdGF0aWMtcXVlcnkgbWlncmF0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKTogUnVsZSB7XG4gIHJldHVybiAodHJlZTogVHJlZSwgY29udGV4dDogU2NoZW1hdGljQ29udGV4dCkgPT4ge1xuICAgIC8vIFdlIG5lZWQgdG8gY2FzdCB0aGUgcmV0dXJuZWQgXCJPYnNlcnZhYmxlXCIgdG8gXCJhbnlcIiBhcyB0aGVyZSBpcyBhXG4gICAgLy8gUnhKUyB2ZXJzaW9uIG1pc21hdGNoIHRoYXQgYnJlYWtzIHRoZSBUUyBjb21waWxhdGlvbi5cbiAgICByZXR1cm4gZnJvbShydW5NaWdyYXRpb24odHJlZSwgY29udGV4dCkudGhlbigoKSA9PiB0cmVlKSkgYXMgYW55O1xuICB9O1xufVxuXG4vKiogUnVucyB0aGUgVjggbWlncmF0aW9uIHN0YXRpYy1xdWVyeSBtaWdyYXRpb24gZm9yIGFsbCBkZXRlcm1pbmVkIFR5cGVTY3JpcHQgcHJvamVjdHMuICovXG5hc3luYyBmdW5jdGlvbiBydW5NaWdyYXRpb24odHJlZTogVHJlZSwgY29udGV4dDogU2NoZW1hdGljQ29udGV4dCkge1xuICBjb25zdCB7YnVpbGRQYXRocywgdGVzdFBhdGhzfSA9IGdldFByb2plY3RUc0NvbmZpZ1BhdGhzKHRyZWUpO1xuICBjb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuY3dkKCk7XG4gIGNvbnN0IGxvZ2dlciA9IGNvbnRleHQubG9nZ2VyO1xuXG4gIGlmICghYnVpbGRQYXRocy5sZW5ndGggJiYgIXRlc3RQYXRocy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihcbiAgICAgICAgJ0NvdWxkIG5vdCBmaW5kIGFueSB0c2NvbmZpZyBmaWxlLiBDYW5ub3QgbWlncmF0ZSBxdWVyaWVzICcgK1xuICAgICAgICAndG8gYWRkIHN0YXRpYyBmbGFnLicpO1xuICB9XG5cbiAgY29uc3QgYW5hbHl6ZWRGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBidWlsZFByb2plY3RzID0gbmV3IFNldDxBbmFseXplZFByb2plY3Q+KCk7XG4gIGNvbnN0IGZhaWx1cmVzID0gW107XG4gIGNvbnN0IHN0cmF0ZWd5ID0gcHJvY2Vzcy5lbnZbJ05HX1NUQVRJQ19RVUVSWV9VU0FHRV9TVFJBVEVHWSddID09PSAndHJ1ZScgP1xuICAgICAgU0VMRUNURURfU1RSQVRFR1kuVVNBR0UgOlxuICAgICAgU0VMRUNURURfU1RSQVRFR1kuVEVNUExBVEU7XG5cbiAgZm9yIChjb25zdCB0c2NvbmZpZ1BhdGggb2YgYnVpbGRQYXRocykge1xuICAgIGNvbnN0IHByb2plY3QgPSBhbmFseXplUHJvamVjdCh0cmVlLCB0c2NvbmZpZ1BhdGgsIGJhc2VQYXRoLCBhbmFseXplZEZpbGVzLCBsb2dnZXIpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBidWlsZFByb2plY3RzLmFkZChwcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoYnVpbGRQcm9qZWN0cy5zaXplKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBBcnJheS5mcm9tKGJ1aWxkUHJvamVjdHMudmFsdWVzKCkpKSB7XG4gICAgICBmYWlsdXJlcy5wdXNoKC4uLmF3YWl0IHJ1blN0YXRpY1F1ZXJ5TWlncmF0aW9uKHRyZWUsIHByb2plY3QsIHN0cmF0ZWd5LCBsb2dnZXIpKTtcbiAgICB9XG4gIH1cblxuICAvLyBGb3IgdGhlIFwidGVzdFwiIHRzY29uZmlnIHByb2plY3RzIHdlIGFsd2F5cyB3YW50IHRvIHVzZSB0aGUgdGVzdCBzdHJhdGVneSBhc1xuICAvLyB3ZSBjYW4ndCBkZXRlY3QgdGhlIHByb3BlciB0aW1pbmcgd2l0aGluIHNwZWMgZmlsZXMuXG4gIGZvciAoY29uc3QgdHNjb25maWdQYXRoIG9mIHRlc3RQYXRocykge1xuICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBhbmFseXplUHJvamVjdCh0cmVlLCB0c2NvbmZpZ1BhdGgsIGJhc2VQYXRoLCBhbmFseXplZEZpbGVzLCBsb2dnZXIpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBmYWlsdXJlcy5wdXNoKFxuICAgICAgICAgIC4uLmF3YWl0IHJ1blN0YXRpY1F1ZXJ5TWlncmF0aW9uKHRyZWUsIHByb2plY3QsIFNFTEVDVEVEX1NUUkFURUdZLlRFU1RTLCBsb2dnZXIpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZmFpbHVyZXMubGVuZ3RoKSB7XG4gICAgbG9nZ2VyLmluZm8oJycpO1xuICAgIGxvZ2dlci5pbmZvKCdTb21lIHF1ZXJpZXMgY291bGQgbm90IGJlIG1pZ3JhdGVkIGF1dG9tYXRpY2FsbHkuIFBsZWFzZSBnbycpO1xuICAgIGxvZ2dlci5pbmZvKCd0aHJvdWdoIHRoZXNlIG1hbnVhbGx5IGFuZCBhcHBseSB0aGUgYXBwcm9wcmlhdGUgdGltaW5nLicpO1xuICAgIGxvZ2dlci5pbmZvKCdGb3IgbW9yZSBpbmZvIG9uIGhvdyB0byBjaG9vc2UgYSBmbGFnLCBwbGVhc2Ugc2VlOiAnKTtcbiAgICBsb2dnZXIuaW5mbygnaHR0cHM6Ly92OC5hbmd1bGFyLmlvL2d1aWRlL3N0YXRpYy1xdWVyeS1taWdyYXRpb24nKTtcbiAgICBmYWlsdXJlcy5mb3JFYWNoKGZhaWx1cmUgPT4gbG9nZ2VyLndhcm4oYOKukSAgICR7ZmFpbHVyZX1gKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbmFseXplcyB0aGUgZ2l2ZW4gVHlwZVNjcmlwdCBwcm9qZWN0IGJ5IGxvb2tpbmcgZm9yIHF1ZXJpZXMgdGhhdCBuZWVkIHRvIGJlXG4gKiBtaWdyYXRlZC4gSW4gY2FzZSB0aGVyZSBhcmUgbm8gcXVlcmllcyB0aGF0IGNhbiBiZSBtaWdyYXRlZCwgbnVsbCBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gYW5hbHl6ZVByb2plY3QoXG4gICAgdHJlZTogVHJlZSwgdHNjb25maWdQYXRoOiBzdHJpbmcsIGJhc2VQYXRoOiBzdHJpbmcsIGFuYWx5emVkRmlsZXM6IFNldDxzdHJpbmc+LFxuICAgIGxvZ2dlcjogbG9nZ2luZy5Mb2dnZXJBcGkpOiBBbmFseXplZFByb2plY3R8bnVsbCB7XG4gIGNvbnN0IHtwcm9ncmFtLCBob3N0fSA9IGNyZWF0ZU1pZ3JhdGlvblByb2dyYW0odHJlZSwgdHNjb25maWdQYXRoLCBiYXNlUGF0aCk7XG4gIGNvbnN0IHN5bnRhY3RpY0RpYWdub3N0aWNzID0gcHJvZ3JhbS5nZXRTeW50YWN0aWNEaWFnbm9zdGljcygpO1xuXG4gIC8vIFN5bnRhY3RpYyBUeXBlU2NyaXB0IGVycm9ycyBjYW4gdGhyb3cgb2ZmIHRoZSBxdWVyeSBhbmFseXNpcyBhbmQgdGhlcmVmb3JlIHdlIHdhbnRcbiAgLy8gdG8gbm90aWZ5IHRoZSBkZXZlbG9wZXIgdGhhdCB3ZSBjb3VsZG4ndCBhbmFseXplIHBhcnRzIG9mIHRoZSBwcm9qZWN0LiBEZXZlbG9wZXJzXG4gIC8vIGNhbiBqdXN0IHJlLXJ1biB0aGUgbWlncmF0aW9uIGFmdGVyIGZpeGluZyB0aGVzZSBmYWlsdXJlcy5cbiAgaWYgKHN5bnRhY3RpY0RpYWdub3N0aWNzLmxlbmd0aCkge1xuICAgIGxvZ2dlci53YXJuKFxuICAgICAgICBgXFxuVHlwZVNjcmlwdCBwcm9qZWN0IFwiJHt0c2NvbmZpZ1BhdGh9XCIgaGFzIHN5bnRhY3RpY2FsIGVycm9ycyB3aGljaCBjb3VsZCBjYXVzZSBgICtcbiAgICAgICAgYGFuIGluY29tcGxldGUgbWlncmF0aW9uLiBQbGVhc2UgZml4IHRoZSBmb2xsb3dpbmcgZmFpbHVyZXMgYW5kIHJlcnVuIHRoZSBtaWdyYXRpb246YCk7XG4gICAgbG9nZ2VyLmVycm9yKHRzLmZvcm1hdERpYWdub3N0aWNzKHN5bnRhY3RpY0RpYWdub3N0aWNzLCBob3N0KSk7XG4gICAgbG9nZ2VyLmluZm8oXG4gICAgICAgICdNaWdyYXRpb24gY2FuIGJlIHJlcnVuIHdpdGg6IFwibmcgdXBkYXRlIEBhbmd1bGFyL2NvcmUgLS1mcm9tIDcgLS10byA4IC0tbWlncmF0ZS1vbmx5XCJcXG4nKTtcbiAgfVxuXG4gIGNvbnN0IHR5cGVDaGVja2VyID0gcHJvZ3JhbS5nZXRUeXBlQ2hlY2tlcigpO1xuICBjb25zdCBzb3VyY2VGaWxlcyA9IHByb2dyYW0uZ2V0U291cmNlRmlsZXMoKS5maWx0ZXIoXG4gICAgICBmID0+ICFmLmlzRGVjbGFyYXRpb25GaWxlICYmICFwcm9ncmFtLmlzU291cmNlRmlsZUZyb21FeHRlcm5hbExpYnJhcnkoZikpO1xuICBjb25zdCBxdWVyeVZpc2l0b3IgPSBuZXcgTmdRdWVyeVJlc29sdmVWaXNpdG9yKHR5cGVDaGVja2VyKTtcblxuICAvLyBBbmFseXplIGFsbCBwcm9qZWN0IHNvdXJjZS1maWxlcyBhbmQgY29sbGVjdCBhbGwgcXVlcmllcyB0aGF0XG4gIC8vIG5lZWQgdG8gYmUgbWlncmF0ZWQuXG4gIHNvdXJjZUZpbGVzLmZvckVhY2goc291cmNlRmlsZSA9PiB7XG4gICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUoYmFzZVBhdGgsIHNvdXJjZUZpbGUuZmlsZU5hbWUpO1xuXG4gICAgLy8gT25seSBsb29rIGZvciBxdWVyaWVzIHdpdGhpbiB0aGUgY3VycmVudCBzb3VyY2UgZmlsZXMgaWYgdGhlXG4gICAgLy8gZmlsZSBoYXMgbm90IGJlZW4gYW5hbHl6ZWQgYmVmb3JlLlxuICAgIGlmICghYW5hbHl6ZWRGaWxlcy5oYXMocmVsYXRpdmVQYXRoKSkge1xuICAgICAgYW5hbHl6ZWRGaWxlcy5hZGQocmVsYXRpdmVQYXRoKTtcbiAgICAgIHF1ZXJ5VmlzaXRvci52aXNpdE5vZGUoc291cmNlRmlsZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAocXVlcnlWaXNpdG9yLnJlc29sdmVkUXVlcmllcy5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge3Byb2dyYW0sIGhvc3QsIHRzY29uZmlnUGF0aCwgdHlwZUNoZWNrZXIsIGJhc2VQYXRoLCBxdWVyeVZpc2l0b3IsIHNvdXJjZUZpbGVzfTtcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBzdGF0aWMgcXVlcnkgbWlncmF0aW9uIGZvciB0aGUgZ2l2ZW4gcHJvamVjdC4gVGhlIHNjaGVtYXRpYyBhbmFseXplcyBhbGxcbiAqIHF1ZXJpZXMgd2l0aGluIHRoZSBwcm9qZWN0IGFuZCBzZXRzIHVwIHRoZSBxdWVyeSB0aW1pbmcgYmFzZWQgb24gdGhlIGN1cnJlbnQgdXNhZ2VcbiAqIG9mIHRoZSBxdWVyeSBwcm9wZXJ0eS4gZS5nLiBhIHZpZXcgcXVlcnkgdGhhdCBpcyBub3QgdXNlZCBpbiBhbnkgbGlmZWN5Y2xlIGhvb2sgZG9lc1xuICogbm90IG5lZWQgdG8gYmUgc3RhdGljIGFuZCBjYW4gYmUgc2V0IHVwIHdpdGggXCJzdGF0aWM6IGZhbHNlXCIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJ1blN0YXRpY1F1ZXJ5TWlncmF0aW9uKFxuICAgIHRyZWU6IFRyZWUsIHByb2plY3Q6IEFuYWx5emVkUHJvamVjdCwgc2VsZWN0ZWRTdHJhdGVneTogU0VMRUNURURfU1RSQVRFR1ksXG4gICAgbG9nZ2VyOiBsb2dnaW5nLkxvZ2dlckFwaSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3Qge3NvdXJjZUZpbGVzLCB0eXBlQ2hlY2tlciwgaG9zdCwgcXVlcnlWaXNpdG9yLCB0c2NvbmZpZ1BhdGgsIGJhc2VQYXRofSA9IHByb2plY3Q7XG4gIGNvbnN0IHByaW50ZXIgPSB0cy5jcmVhdGVQcmludGVyKCk7XG4gIGNvbnN0IGZhaWx1cmVNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgdGVtcGxhdGVWaXNpdG9yID0gbmV3IE5nQ29tcG9uZW50VGVtcGxhdGVWaXNpdG9yKHR5cGVDaGVja2VyKTtcblxuICAvLyBJZiB0aGUgXCJ1c2FnZVwiIHN0cmF0ZWd5IGlzIHNlbGVjdGVkLCB3ZSBhbHNvIG5lZWQgdG8gYWRkIHRoZSBxdWVyeSB2aXNpdG9yXG4gIC8vIHRvIHRoZSBhbmFseXNpcyB2aXNpdG9ycyBzbyB0aGF0IHF1ZXJ5IHVzYWdlIGluIHRlbXBsYXRlcyBjYW4gYmUgYWxzbyBjaGVja2VkLlxuICBpZiAoc2VsZWN0ZWRTdHJhdGVneSA9PT0gU0VMRUNURURfU1RSQVRFR1kuVVNBR0UpIHtcbiAgICBzb3VyY2VGaWxlcy5mb3JFYWNoKHMgPT4gdGVtcGxhdGVWaXNpdG9yLnZpc2l0Tm9kZShzKSk7XG4gIH1cblxuICBjb25zdCB7cmVzb2x2ZWRRdWVyaWVzLCBjbGFzc01ldGFkYXRhfSA9IHF1ZXJ5VmlzaXRvcjtcbiAgY29uc3Qge3Jlc29sdmVkVGVtcGxhdGVzfSA9IHRlbXBsYXRlVmlzaXRvcjtcblxuICBpZiAoc2VsZWN0ZWRTdHJhdGVneSA9PT0gU0VMRUNURURfU1RSQVRFR1kuVVNBR0UpIHtcbiAgICAvLyBBZGQgYWxsIHJlc29sdmVkIHRlbXBsYXRlcyB0byB0aGUgY2xhc3MgbWV0YWRhdGEgaWYgdGhlIHVzYWdlIHN0cmF0ZWd5IGlzIHVzZWQuIFRoaXNcbiAgICAvLyBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gYmUgYWJsZSB0byBjaGVjayBjb21wb25lbnQgdGVtcGxhdGVzIGZvciBzdGF0aWMgcXVlcnkgdXNhZ2UuXG4gICAgcmVzb2x2ZWRUZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICBpZiAoY2xhc3NNZXRhZGF0YS5oYXModGVtcGxhdGUuY29udGFpbmVyKSkge1xuICAgICAgICBjbGFzc01ldGFkYXRhLmdldCh0ZW1wbGF0ZS5jb250YWluZXIpIS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IHN0cmF0ZWd5OiBUaW1pbmdTdHJhdGVneTtcbiAgaWYgKHNlbGVjdGVkU3RyYXRlZ3kgPT09IFNFTEVDVEVEX1NUUkFURUdZLlVTQUdFKSB7XG4gICAgc3RyYXRlZ3kgPSBuZXcgUXVlcnlVc2FnZVN0cmF0ZWd5KGNsYXNzTWV0YWRhdGEsIHR5cGVDaGVja2VyKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFN0cmF0ZWd5ID09PSBTRUxFQ1RFRF9TVFJBVEVHWS5URVNUUykge1xuICAgIHN0cmF0ZWd5ID0gbmV3IFF1ZXJ5VGVzdFN0cmF0ZWd5KCk7XG4gIH0gZWxzZSB7XG4gICAgc3RyYXRlZ3kgPSBuZXcgUXVlcnlUZW1wbGF0ZVN0cmF0ZWd5KHRzY29uZmlnUGF0aCwgY2xhc3NNZXRhZGF0YSwgaG9zdCk7XG4gIH1cblxuICB0cnkge1xuICAgIHN0cmF0ZWd5LnNldHVwKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoc2VsZWN0ZWRTdHJhdGVneSA9PT0gU0VMRUNURURfU1RSQVRFR1kuVEVNUExBVEUpIHtcbiAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgIGBcXG5UaGUgdGVtcGxhdGUgbWlncmF0aW9uIHN0cmF0ZWd5IHVzZXMgdGhlIEFuZ3VsYXIgY29tcGlsZXIgYCArXG4gICAgICAgICAgYGludGVybmFsbHkgYW5kIHRoZXJlZm9yZSBwcm9qZWN0cyB0aGF0IG5vIGxvbmdlciBidWlsZCBzdWNjZXNzZnVsbHkgYWZ0ZXIgYCArXG4gICAgICAgICAgYHRoZSB1cGRhdGUgY2Fubm90IHVzZSB0aGUgdGVtcGxhdGUgbWlncmF0aW9uIHN0cmF0ZWd5LiBQbGVhc2UgZW5zdXJlIGAgK1xuICAgICAgICAgIGB0aGVyZSBhcmUgbm8gQU9UIGNvbXBpbGF0aW9uIGVycm9ycy5cXG5gKTtcbiAgICB9XG4gICAgLy8gSW4gY2FzZSB0aGUgc3RyYXRlZ3kgY291bGQgbm90IGJlIHNldCB1cCBwcm9wZXJseSwgd2UganVzdCBleGl0IHRoZVxuICAgIC8vIG1pZ3JhdGlvbi4gV2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBhbiBleGNlcHRpb24gYXMgdGhpcyBjb3VsZCBtZWFuXG4gICAgLy8gdGhhdCBvdGhlciBtaWdyYXRpb25zIGFyZSBpbnRlcnJ1cHRlZC5cbiAgICBsb2dnZXIud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBzZXR1cCBtaWdyYXRpb24gc3RyYXRlZ3kgZm9yIFwiJHtwcm9qZWN0LnRzY29uZmlnUGF0aH1cIi4gVGhlIGAgK1xuICAgICAgICBgZm9sbG93aW5nIGVycm9yIGhhcyBiZWVuIHJlcG9ydGVkOlxcbmApO1xuICAgIGxvZ2dlci5lcnJvcihgJHtlLnRvU3RyaW5nKCl9XFxuYCk7XG4gICAgbG9nZ2VyLmluZm8oXG4gICAgICAgICdNaWdyYXRpb24gY2FuIGJlIHJlcnVuIHdpdGg6IFwibmcgdXBkYXRlIEBhbmd1bGFyL2NvcmUgLS1mcm9tIDcgLS10byA4IC0tbWlncmF0ZS1vbmx5XCJcXG4nKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBXYWxrIHRocm91Z2ggYWxsIHNvdXJjZSBmaWxlcyB0aGF0IGNvbnRhaW4gcmVzb2x2ZWQgcXVlcmllcyBhbmQgdXBkYXRlXG4gIC8vIHRoZSBzb3VyY2UgZmlsZXMgaWYgbmVlZGVkLiBOb3RlIHRoYXQgd2UgbmVlZCB0byB1cGRhdGUgbXVsdGlwbGUgcXVlcmllc1xuICAvLyB3aXRoaW4gYSBzb3VyY2UgZmlsZSB3aXRoaW4gdGhlIHNhbWUgcmVjb3JkZXIgaW4gb3JkZXIgdG8gbm90IHRocm93IG9mZlxuICAvLyB0aGUgVHlwZVNjcmlwdCBub2RlIG9mZnNldHMuXG4gIHJlc29sdmVkUXVlcmllcy5mb3JFYWNoKChxdWVyaWVzLCBzb3VyY2VGaWxlKSA9PiB7XG4gICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUoYmFzZVBhdGgsIHNvdXJjZUZpbGUuZmlsZU5hbWUpO1xuICAgIGNvbnN0IHVwZGF0ZSA9IHRyZWUuYmVnaW5VcGRhdGUocmVsYXRpdmVQYXRoKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHF1ZXJ5IHRpbWluZyBmb3IgYWxsIHJlc29sdmVkIHF1ZXJpZXMgYW5kIHVwZGF0ZSB0aGVcbiAgICAvLyBxdWVyeSBkZWZpbml0aW9ucyB0byBleHBsaWNpdGx5IHNldCB0aGUgZGV0ZXJtaW5lZCBxdWVyeSB0aW1pbmcuXG4gICAgcXVlcmllcy5mb3JFYWNoKHEgPT4ge1xuICAgICAgY29uc3QgcXVlcnlFeHByID0gcS5kZWNvcmF0b3Iubm9kZS5leHByZXNzaW9uO1xuICAgICAgY29uc3Qge3RpbWluZywgbWVzc2FnZX0gPSBzdHJhdGVneS5kZXRlY3RUaW1pbmcocSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBnZXRUcmFuc2Zvcm1lZFF1ZXJ5Q2FsbEV4cHIocSwgdGltaW5nLCAhIW1lc3NhZ2UpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RleHQgPSBwcmludGVyLnByaW50Tm9kZSh0cy5FbWl0SGludC5VbnNwZWNpZmllZCwgcmVzdWx0Lm5vZGUsIHNvdXJjZUZpbGUpO1xuXG4gICAgICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBxdWVyeSBkZWNvcmF0b3IgY2FsbCBleHByZXNzaW9uIHdpdGggdGhlIHVwZGF0ZWRcbiAgICAgIC8vIGNhbGwgZXhwcmVzc2lvbiBub2RlLlxuICAgICAgdXBkYXRlLnJlbW92ZShxdWVyeUV4cHIuZ2V0U3RhcnQoKSwgcXVlcnlFeHByLmdldFdpZHRoKCkpO1xuICAgICAgdXBkYXRlLmluc2VydFJpZ2h0KHF1ZXJ5RXhwci5nZXRTdGFydCgpLCBuZXdUZXh0KTtcblxuICAgICAgaWYgKHJlc3VsdC5mYWlsdXJlTWVzc2FnZSB8fCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IHtsaW5lLCBjaGFyYWN0ZXJ9ID1cbiAgICAgICAgICAgIHRzLmdldExpbmVBbmRDaGFyYWN0ZXJPZlBvc2l0aW9uKHNvdXJjZUZpbGUsIHEuZGVjb3JhdG9yLm5vZGUuZ2V0U3RhcnQoKSk7XG4gICAgICAgIGZhaWx1cmVNZXNzYWdlcy5wdXNoKFxuICAgICAgICAgICAgYCR7cmVsYXRpdmVQYXRofUAke2xpbmUgKyAxfToke2NoYXJhY3RlciArIDF9OiAke3Jlc3VsdC5mYWlsdXJlTWVzc2FnZSB8fCBtZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJlZS5jb21taXRVcGRhdGUodXBkYXRlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhaWx1cmVNZXNzYWdlcztcbn1cbiJdfQ==