(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/entry_point", ["require", "exports", "tslib", "canonical-path", "path", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/host/umd_host", "@angular/compiler-cli/ngcc/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var canonical_path_1 = require("canonical-path");
    var path_1 = require("path");
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var umd_host_1 = require("@angular/compiler-cli/ngcc/src/host/umd_host");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    // We need to keep the elements of this const and the `EntryPointJsonProperty` type in sync.
    exports.SUPPORTED_FORMAT_PROPERTIES = ['fesm2015', 'fesm5', 'es2015', 'esm2015', 'esm5', 'main', 'module', 'browser'];
    /**
     * The path does not represent an entry-point:
     * * there is no package.json at the path and there is no config to force an entry-point
     * * or the entrypoint is `ignored` by a config.
     */
    exports.NO_ENTRY_POINT = 'no-entry-point';
    /**
     * The path has a package.json, but it is not a valid entry-point for ngcc processing.
     */
    exports.INCOMPATIBLE_ENTRY_POINT = 'incompatible-entry-point';
    /**
     * Try to create an entry-point from the given paths and properties.
     *
     * @param packagePath the absolute path to the containing npm package
     * @param entryPointPath the absolute path to the potential entry-point.
     * @returns
     * - An entry-point if it is valid.
     * - `NO_ENTRY_POINT` when there is no package.json at the path and there is no config to force an
     * entry-point or the entrypoint is `ignored`.
     * - `INCOMPATIBLE_ENTRY_POINT` there is a package.json but it is not a valid Angular compiled
     * entry-point.
     */
    function getEntryPointInfo(fs, config, logger, packagePath, entryPointPath) {
        var packageJsonPath = file_system_1.resolve(entryPointPath, 'package.json');
        var packageVersion = getPackageVersion(fs, packageJsonPath);
        var entryPointConfig = config.getConfig(packagePath, packageVersion).entryPoints[entryPointPath];
        var hasConfig = entryPointConfig !== undefined;
        if (!hasConfig && !fs.exists(packageJsonPath)) {
            // No package.json and no config
            return exports.NO_ENTRY_POINT;
        }
        if (hasConfig && entryPointConfig.ignore === true) {
            // Explicitly ignored
            return exports.NO_ENTRY_POINT;
        }
        var loadedEntryPointPackageJson = loadEntryPointPackage(fs, logger, packageJsonPath, hasConfig);
        var entryPointPackageJson = hasConfig ?
            mergeConfigAndPackageJson(loadedEntryPointPackageJson, entryPointConfig, packagePath, entryPointPath) :
            loadedEntryPointPackageJson;
        if (entryPointPackageJson === null) {
            // package.json exists but could not be parsed and there was no redeeming config
            return exports.INCOMPATIBLE_ENTRY_POINT;
        }
        var typings = entryPointPackageJson.typings || entryPointPackageJson.types ||
            guessTypingsFromPackageJson(fs, entryPointPath, entryPointPackageJson);
        if (typeof typings !== 'string') {
            // Missing the required `typings` property
            return exports.INCOMPATIBLE_ENTRY_POINT;
        }
        // An entry-point is assumed to be compiled by Angular if there is either:
        // * a `metadata.json` file next to the typings entry-point
        // * a custom config for this entry-point
        var metadataPath = file_system_1.resolve(entryPointPath, typings.replace(/\.d\.ts$/, '') + '.metadata.json');
        var compiledByAngular = entryPointConfig !== undefined || fs.exists(metadataPath);
        var entryPointInfo = {
            name: entryPointPackageJson.name,
            packageJson: entryPointPackageJson,
            package: packagePath,
            path: entryPointPath,
            typings: file_system_1.resolve(entryPointPath, typings),
            compiledByAngular: compiledByAngular,
            ignoreMissingDependencies: entryPointConfig !== undefined ? !!entryPointConfig.ignoreMissingDependencies : false,
            generateDeepReexports: entryPointConfig !== undefined ? !!entryPointConfig.generateDeepReexports : false,
        };
        return entryPointInfo;
    }
    exports.getEntryPointInfo = getEntryPointInfo;
    /**
     * Convert a package.json property into an entry-point format.
     *
     * @param property The property to convert to a format.
     * @returns An entry-point format or `undefined` if none match the given property.
     */
    function getEntryPointFormat(fs, entryPoint, property) {
        switch (property) {
            case 'fesm2015':
                return 'esm2015';
            case 'fesm5':
                return 'esm5';
            case 'es2015':
                return 'esm2015';
            case 'esm2015':
                return 'esm2015';
            case 'esm5':
                return 'esm5';
            case 'browser':
                var browserFile = entryPoint.packageJson['browser'];
                if (typeof browserFile !== 'string') {
                    return undefined;
                }
                return sniffModuleFormat(fs, file_system_1.join(entryPoint.path, browserFile));
            case 'main':
                var mainFile = entryPoint.packageJson['main'];
                if (mainFile === undefined) {
                    return undefined;
                }
                return sniffModuleFormat(fs, file_system_1.join(entryPoint.path, mainFile));
            case 'module':
                return 'esm5';
            default:
                return undefined;
        }
    }
    exports.getEntryPointFormat = getEntryPointFormat;
    /**
     * Parses the JSON from a package.json file.
     * @param packageJsonPath the absolute path to the package.json file.
     * @returns JSON from the package.json file if it is valid, `null` otherwise.
     */
    function loadEntryPointPackage(fs, logger, packageJsonPath, hasConfig) {
        try {
            return JSON.parse(fs.readFile(packageJsonPath));
        }
        catch (e) {
            if (!hasConfig) {
                // We may have run into a package.json with unexpected symbols
                logger.warn("Failed to read entry point info from " + packageJsonPath + " with error " + e + ".");
            }
            return null;
        }
    }
    function sniffModuleFormat(fs, sourceFilePath) {
        var resolvedPath = utils_1.resolveFileWithPostfixes(fs, sourceFilePath, ['', '.js', '/index.js']);
        if (resolvedPath === null) {
            return undefined;
        }
        var sourceFile = ts.createSourceFile(sourceFilePath, fs.readFile(resolvedPath), ts.ScriptTarget.ES5);
        if (sourceFile.statements.length === 0) {
            return undefined;
        }
        if (ts.isExternalModule(sourceFile)) {
            return 'esm5';
        }
        else if (umd_host_1.parseStatementForUmdModule(sourceFile.statements[0]) !== null) {
            return 'umd';
        }
        else {
            return 'commonjs';
        }
    }
    function mergeConfigAndPackageJson(entryPointPackageJson, entryPointConfig, packagePath, entryPointPath) {
        if (entryPointPackageJson !== null) {
            return tslib_1.__assign(tslib_1.__assign({}, entryPointPackageJson), entryPointConfig.override);
        }
        else {
            var name = path_1.basename(packagePath) + "/" + canonical_path_1.relative(packagePath, entryPointPath);
            return tslib_1.__assign({ name: name }, entryPointConfig.override);
        }
    }
    function guessTypingsFromPackageJson(fs, entryPointPath, entryPointPackageJson) {
        var e_1, _a;
        try {
            for (var SUPPORTED_FORMAT_PROPERTIES_1 = tslib_1.__values(exports.SUPPORTED_FORMAT_PROPERTIES), SUPPORTED_FORMAT_PROPERTIES_1_1 = SUPPORTED_FORMAT_PROPERTIES_1.next(); !SUPPORTED_FORMAT_PROPERTIES_1_1.done; SUPPORTED_FORMAT_PROPERTIES_1_1 = SUPPORTED_FORMAT_PROPERTIES_1.next()) {
                var prop = SUPPORTED_FORMAT_PROPERTIES_1_1.value;
                var field = entryPointPackageJson[prop];
                if (typeof field !== 'string') {
                    // Some crazy packages have things like arrays in these fields!
                    continue;
                }
                var relativeTypingsPath = field.replace(/\.js$/, '.d.ts');
                var typingsPath = file_system_1.resolve(entryPointPath, relativeTypingsPath);
                if (fs.exists(typingsPath)) {
                    return typingsPath;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (SUPPORTED_FORMAT_PROPERTIES_1_1 && !SUPPORTED_FORMAT_PROPERTIES_1_1.done && (_a = SUPPORTED_FORMAT_PROPERTIES_1.return)) _a.call(SUPPORTED_FORMAT_PROPERTIES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }
    /**
     * Find the version of the package at `packageJsonPath`.
     *
     * @returns the version string or `null` if the package.json does not exist or is invalid.
     */
    function getPackageVersion(fs, packageJsonPath) {
        try {
            if (fs.exists(packageJsonPath)) {
                var packageJson = JSON.parse(fs.readFile(packageJsonPath));
                return packageJson['version'] || null;
            }
        }
        catch (_a) {
            // Do nothing
        }
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlfcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcGFja2FnZXMvZW50cnlfcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsaURBQXdDO0lBQ3hDLDZCQUE4QjtJQUM5QiwrQkFBaUM7SUFDakMsMkVBQXlGO0lBQ3pGLHlFQUE0RDtJQUU1RCw4REFBa0Q7SUErRGxELDRGQUE0RjtJQUMvRSxRQUFBLDJCQUEyQixHQUNwQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUdwRjs7OztPQUlHO0lBQ1UsUUFBQSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFFL0M7O09BRUc7SUFDVSxRQUFBLHdCQUF3QixHQUFHLDBCQUEwQixDQUFDO0lBY25FOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsU0FBZ0IsaUJBQWlCLENBQzdCLEVBQWMsRUFBRSxNQUF5QixFQUFFLE1BQWMsRUFBRSxXQUEyQixFQUN0RixjQUE4QjtRQUNoQyxJQUFNLGVBQWUsR0FBRyxxQkFBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBTSxnQkFBZ0IsR0FDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlFLElBQU0sU0FBUyxHQUFHLGdCQUFnQixLQUFLLFNBQVMsQ0FBQztRQUVqRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM3QyxnQ0FBZ0M7WUFDaEMsT0FBTyxzQkFBYyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxTQUFTLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNqRCxxQkFBcUI7WUFDckIsT0FBTyxzQkFBYyxDQUFDO1NBQ3ZCO1FBRUQsSUFBTSwyQkFBMkIsR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRyxJQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLHlCQUF5QixDQUNyQiwyQkFBMkIsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNqRiwyQkFBMkIsQ0FBQztRQUVoQyxJQUFJLHFCQUFxQixLQUFLLElBQUksRUFBRTtZQUNsQyxnRkFBZ0Y7WUFDaEYsT0FBTyxnQ0FBd0IsQ0FBQztTQUNqQztRQUVELElBQU0sT0FBTyxHQUFHLHFCQUFxQixDQUFDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxLQUFLO1lBQ3hFLDJCQUEyQixDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMzRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQiwwQ0FBMEM7WUFDMUMsT0FBTyxnQ0FBd0IsQ0FBQztTQUNqQztRQUVELDBFQUEwRTtRQUMxRSwyREFBMkQ7UUFDM0QseUNBQXlDO1FBQ3pDLElBQU0sWUFBWSxHQUFHLHFCQUFPLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFDakcsSUFBTSxpQkFBaUIsR0FBRyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRixJQUFNLGNBQWMsR0FBZTtZQUNqQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsSUFBSTtZQUNoQyxXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLE9BQU8sRUFBRSxxQkFBTyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7WUFDekMsaUJBQWlCLG1CQUFBO1lBQ2pCLHlCQUF5QixFQUNyQixnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN6RixxQkFBcUIsRUFDakIsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDdEYsQ0FBQztRQUVGLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUF6REQsOENBeURDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQixtQkFBbUIsQ0FDL0IsRUFBYyxFQUFFLFVBQXNCLEVBQUUsUUFBZ0M7UUFFMUUsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssT0FBTztnQkFDVixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssTUFBTTtnQkFDVCxPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFNBQVM7Z0JBQ1osSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7b0JBQ25DLE9BQU8sU0FBUyxDQUFDO2lCQUNsQjtnQkFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFLLE1BQU07Z0JBQ1QsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUMxQixPQUFPLFNBQVMsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsa0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEUsS0FBSyxRQUFRO2dCQUNYLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQS9CRCxrREErQkM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxxQkFBcUIsQ0FDMUIsRUFBYyxFQUFFLE1BQWMsRUFBRSxlQUErQixFQUMvRCxTQUFrQjtRQUNwQixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCw4REFBOEQ7Z0JBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsMENBQXdDLGVBQWUsb0JBQWUsQ0FBQyxNQUFHLENBQUMsQ0FBQzthQUN6RjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFjLEVBQUUsY0FBOEI7UUFFdkUsSUFBTSxZQUFZLEdBQUcsZ0NBQXdCLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxJQUFNLFVBQVUsR0FDWixFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RixJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLHFDQUEwQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDeEUsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxVQUFVLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsU0FBUyx5QkFBeUIsQ0FDOUIscUJBQWlELEVBQUUsZ0JBQXNDLEVBQ3pGLFdBQTJCLEVBQUUsY0FBOEI7UUFDN0QsSUFBSSxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7WUFDbEMsNkNBQVcscUJBQXFCLEdBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1NBQ2pFO2FBQU07WUFDTCxJQUFNLElBQUksR0FBTSxlQUFRLENBQUMsV0FBVyxDQUFDLFNBQUkseUJBQVEsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFHLENBQUM7WUFDakYsMEJBQVEsSUFBSSxNQUFBLElBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1NBQzdDO0lBQ0gsQ0FBQztJQUVELFNBQVMsMkJBQTJCLENBQ2hDLEVBQWMsRUFBRSxjQUE4QixFQUM5QyxxQkFBNEM7OztZQUM5QyxLQUFtQixJQUFBLGdDQUFBLGlCQUFBLG1DQUEyQixDQUFBLHdFQUFBLGlIQUFFO2dCQUEzQyxJQUFNLElBQUksd0NBQUE7Z0JBQ2IsSUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO29CQUM3QiwrREFBK0Q7b0JBQy9ELFNBQVM7aUJBQ1Y7Z0JBQ0QsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDNUQsSUFBTSxXQUFXLEdBQUcscUJBQU8sQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDakUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUMxQixPQUFPLFdBQVcsQ0FBQztpQkFDcEI7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsaUJBQWlCLENBQUMsRUFBYyxFQUFFLGVBQStCO1FBQ3hFLElBQUk7WUFDRixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzlCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7YUFDdkM7U0FDRjtRQUFDLFdBQU07WUFDTixhQUFhO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge3JlbGF0aXZlfSBmcm9tICdjYW5vbmljYWwtcGF0aCc7XG5pbXBvcnQge2Jhc2VuYW1lfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgRmlsZVN5c3RlbSwgam9pbiwgcmVzb2x2ZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7cGFyc2VTdGF0ZW1lbnRGb3JVbWRNb2R1bGV9IGZyb20gJy4uL2hvc3QvdW1kX2hvc3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcbmltcG9ydCB7cmVzb2x2ZUZpbGVXaXRoUG9zdGZpeGVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge05nY2NDb25maWd1cmF0aW9uLCBOZ2NjRW50cnlQb2ludENvbmZpZ30gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcblxuLyoqXG4gKiBUaGUgcG9zc2libGUgdmFsdWVzIGZvciB0aGUgZm9ybWF0IG9mIGFuIGVudHJ5LXBvaW50LlxuICovXG5leHBvcnQgdHlwZSBFbnRyeVBvaW50Rm9ybWF0ID0gJ2VzbTUnfCdlc20yMDE1J3wndW1kJ3wnY29tbW9uanMnO1xuXG4vKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IGFuIGVudHJ5LXBvaW50LCBpbmNsdWRpbmcgcGF0aHNcbiAqIHRvIGVhY2ggb2YgdGhlIHBvc3NpYmxlIGVudHJ5LXBvaW50IGZvcm1hdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlQb2ludCBleHRlbmRzIEpzb25PYmplY3Qge1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIHBhY2thZ2UgKGUuZy4gYEBhbmd1bGFyL2NvcmVgKS4gKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKiogVGhlIHBhcnNlZCBwYWNrYWdlLmpzb24gZmlsZSBmb3IgdGhpcyBlbnRyeS1wb2ludC4gKi9cbiAgcGFja2FnZUpzb246IEVudHJ5UG9pbnRQYWNrYWdlSnNvbjtcbiAgLyoqIFRoZSBwYXRoIHRvIHRoZSBwYWNrYWdlIHRoYXQgY29udGFpbnMgdGhpcyBlbnRyeS1wb2ludC4gKi9cbiAgcGFja2FnZTogQWJzb2x1dGVGc1BhdGg7XG4gIC8qKiBUaGUgcGF0aCB0byB0aGlzIGVudHJ5IHBvaW50LiAqL1xuICBwYXRoOiBBYnNvbHV0ZUZzUGF0aDtcbiAgLyoqIFRoZSBwYXRoIHRvIGEgdHlwaW5ncyAoLmQudHMpIGZpbGUgZm9yIHRoaXMgZW50cnktcG9pbnQuICovXG4gIHR5cGluZ3M6IEFic29sdXRlRnNQYXRoO1xuICAvKiogSXMgdGhpcyBFbnRyeVBvaW50IGNvbXBpbGVkIHdpdGggdGhlIEFuZ3VsYXIgVmlldyBFbmdpbmUgY29tcGlsZXI/ICovXG4gIGNvbXBpbGVkQnlBbmd1bGFyOiBib29sZWFuO1xuICAvKiogU2hvdWxkIG5nY2MgaWdub3JlIG1pc3NpbmcgZGVwZW5kZW5jaWVzIGFuZCBwcm9jZXNzIHRoaXMgZW50cnlwb2ludCBhbnl3YXk/ICovXG4gIGlnbm9yZU1pc3NpbmdEZXBlbmRlbmNpZXM6IGJvb2xlYW47XG4gIC8qKiBTaG91bGQgbmdjYyBnZW5lcmF0ZSBkZWVwIHJlLWV4cG9ydHMgZm9yIHRoaXMgZW50cnlwb2ludD8gKi9cbiAgZ2VuZXJhdGVEZWVwUmVleHBvcnRzOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBKc29uUHJpbWl0aXZlID0gc3RyaW5nfG51bWJlcnxib29sZWFufG51bGw7XG5leHBvcnQgdHlwZSBKc29uVmFsdWUgPSBKc29uUHJpbWl0aXZlfEpzb25BcnJheXxKc29uT2JqZWN0fHVuZGVmaW5lZDtcbmV4cG9ydCBpbnRlcmZhY2UgSnNvbkFycmF5IGV4dGVuZHMgQXJyYXk8SnNvblZhbHVlPiB7fVxuZXhwb3J0IGludGVyZmFjZSBKc29uT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogSnNvblZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhY2thZ2VKc29uRm9ybWF0UHJvcGVydGllc01hcCB7XG4gIGJyb3dzZXI/OiBzdHJpbmc7XG4gIGZlc20yMDE1Pzogc3RyaW5nO1xuICBmZXNtNT86IHN0cmluZztcbiAgZXMyMDE1Pzogc3RyaW5nOyAgLy8gaWYgZXhpc3RzIHRoZW4gaXQgaXMgYWN0dWFsbHkgRkVTTTIwMTVcbiAgZXNtMjAxNT86IHN0cmluZztcbiAgZXNtNT86IHN0cmluZztcbiAgbWFpbj86IHN0cmluZzsgICAgIC8vIFVNRFxuICBtb2R1bGU/OiBzdHJpbmc7ICAgLy8gaWYgZXhpc3RzIHRoZW4gaXQgaXMgYWN0dWFsbHkgRkVTTTVcbiAgdHlwZXM/OiBzdHJpbmc7ICAgIC8vIFN5bm9ueW1vdXMgdG8gYHR5cGluZ3NgIHByb3BlcnR5IC0gc2VlIGh0dHBzOi8vYml0Lmx5LzJPZ1dwMkhcbiAgdHlwaW5ncz86IHN0cmluZzsgIC8vIFR5cGVTY3JpcHQgLmQudHMgZmlsZXNcbn1cblxuZXhwb3J0IHR5cGUgUGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzID0ga2V5b2YgUGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzTWFwO1xuXG4vKipcbiAqIFRoZSBwcm9wZXJ0aWVzIHRoYXQgbWF5IGJlIGxvYWRlZCBmcm9tIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5UG9pbnRQYWNrYWdlSnNvbiBleHRlbmRzIEpzb25PYmplY3QsIFBhY2thZ2VKc29uRm9ybWF0UHJvcGVydGllc01hcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2NyaXB0cz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIF9fcHJvY2Vzc2VkX2J5X2l2eV9uZ2NjX18/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufVxuXG5leHBvcnQgdHlwZSBFbnRyeVBvaW50SnNvblByb3BlcnR5ID0gRXhjbHVkZTxQYWNrYWdlSnNvbkZvcm1hdFByb3BlcnRpZXMsICd0eXBlcyd8J3R5cGluZ3MnPjtcbi8vIFdlIG5lZWQgdG8ga2VlcCB0aGUgZWxlbWVudHMgb2YgdGhpcyBjb25zdCBhbmQgdGhlIGBFbnRyeVBvaW50SnNvblByb3BlcnR5YCB0eXBlIGluIHN5bmMuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0ZPUk1BVF9QUk9QRVJUSUVTOiBFbnRyeVBvaW50SnNvblByb3BlcnR5W10gPVxuICAgIFsnZmVzbTIwMTUnLCAnZmVzbTUnLCAnZXMyMDE1JywgJ2VzbTIwMTUnLCAnZXNtNScsICdtYWluJywgJ21vZHVsZScsICdicm93c2VyJ107XG5cblxuLyoqXG4gKiBUaGUgcGF0aCBkb2VzIG5vdCByZXByZXNlbnQgYW4gZW50cnktcG9pbnQ6XG4gKiAqIHRoZXJlIGlzIG5vIHBhY2thZ2UuanNvbiBhdCB0aGUgcGF0aCBhbmQgdGhlcmUgaXMgbm8gY29uZmlnIHRvIGZvcmNlIGFuIGVudHJ5LXBvaW50XG4gKiAqIG9yIHRoZSBlbnRyeXBvaW50IGlzIGBpZ25vcmVkYCBieSBhIGNvbmZpZy5cbiAqL1xuZXhwb3J0IGNvbnN0IE5PX0VOVFJZX1BPSU5UID0gJ25vLWVudHJ5LXBvaW50JztcblxuLyoqXG4gKiBUaGUgcGF0aCBoYXMgYSBwYWNrYWdlLmpzb24sIGJ1dCBpdCBpcyBub3QgYSB2YWxpZCBlbnRyeS1wb2ludCBmb3IgbmdjYyBwcm9jZXNzaW5nLlxuICovXG5leHBvcnQgY29uc3QgSU5DT01QQVRJQkxFX0VOVFJZX1BPSU5UID0gJ2luY29tcGF0aWJsZS1lbnRyeS1wb2ludCc7XG5cbi8qKlxuICogVGhlIHJlc3VsdCBvZiBjYWxsaW5nIGBnZXRFbnRyeVBvaW50SW5mbygpYC5cbiAqXG4gKiBUaGlzIHdpbGwgYmUgYW4gYEVudHJ5UG9pbnRgIG9iamVjdCBpZiBhbiBBbmd1bGFyIGVudHJ5LXBvaW50IHdhcyBpZGVudGlmaWVkO1xuICogT3RoZXJ3aXNlIGl0IHdpbGwgYmUgYSBmbGFnIGluZGljYXRpbmcgb25lIG9mOlxuICogKiBOT19FTlRSWV9QT0lOVCAtIHRoZSBwYXRoIGlzIG5vdCBhbiBlbnRyeS1wb2ludCBvciBuZ2NjIGlzIGNvbmZpZ3VyZWQgdG8gaWdub3JlIGl0XG4gKiAqIElOQ09NUEFUSUJMRV9FTlRSWV9QT0lOVCAtIHRoZSBwYXRoIHdhcyBhIG5vbi1wcm9jZXNzYWJsZSBlbnRyeS1wb2ludCB0aGF0IHNob3VsZCBiZSBzZWFyY2hlZFxuICogZm9yIHN1Yi1lbnRyeS1wb2ludHNcbiAqL1xuZXhwb3J0IHR5cGUgR2V0RW50cnlQb2ludFJlc3VsdCA9IEVudHJ5UG9pbnR8dHlwZW9mIElOQ09NUEFUSUJMRV9FTlRSWV9QT0lOVHx0eXBlb2YgTk9fRU5UUllfUE9JTlQ7XG5cblxuLyoqXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGVudHJ5LXBvaW50IGZyb20gdGhlIGdpdmVuIHBhdGhzIGFuZCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBwYWNrYWdlUGF0aCB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgY29udGFpbmluZyBucG0gcGFja2FnZVxuICogQHBhcmFtIGVudHJ5UG9pbnRQYXRoIHRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBwb3RlbnRpYWwgZW50cnktcG9pbnQuXG4gKiBAcmV0dXJuc1xuICogLSBBbiBlbnRyeS1wb2ludCBpZiBpdCBpcyB2YWxpZC5cbiAqIC0gYE5PX0VOVFJZX1BPSU5UYCB3aGVuIHRoZXJlIGlzIG5vIHBhY2thZ2UuanNvbiBhdCB0aGUgcGF0aCBhbmQgdGhlcmUgaXMgbm8gY29uZmlnIHRvIGZvcmNlIGFuXG4gKiBlbnRyeS1wb2ludCBvciB0aGUgZW50cnlwb2ludCBpcyBgaWdub3JlZGAuXG4gKiAtIGBJTkNPTVBBVElCTEVfRU5UUllfUE9JTlRgIHRoZXJlIGlzIGEgcGFja2FnZS5qc29uIGJ1dCBpdCBpcyBub3QgYSB2YWxpZCBBbmd1bGFyIGNvbXBpbGVkXG4gKiBlbnRyeS1wb2ludC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVudHJ5UG9pbnRJbmZvKFxuICAgIGZzOiBGaWxlU3lzdGVtLCBjb25maWc6IE5nY2NDb25maWd1cmF0aW9uLCBsb2dnZXI6IExvZ2dlciwgcGFja2FnZVBhdGg6IEFic29sdXRlRnNQYXRoLFxuICAgIGVudHJ5UG9pbnRQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IEdldEVudHJ5UG9pbnRSZXN1bHQge1xuICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSByZXNvbHZlKGVudHJ5UG9pbnRQYXRoLCAncGFja2FnZS5qc29uJyk7XG4gIGNvbnN0IHBhY2thZ2VWZXJzaW9uID0gZ2V0UGFja2FnZVZlcnNpb24oZnMsIHBhY2thZ2VKc29uUGF0aCk7XG4gIGNvbnN0IGVudHJ5UG9pbnRDb25maWcgPVxuICAgICAgY29uZmlnLmdldENvbmZpZyhwYWNrYWdlUGF0aCwgcGFja2FnZVZlcnNpb24pLmVudHJ5UG9pbnRzW2VudHJ5UG9pbnRQYXRoXTtcbiAgY29uc3QgaGFzQ29uZmlnID0gZW50cnlQb2ludENvbmZpZyAhPT0gdW5kZWZpbmVkO1xuXG4gIGlmICghaGFzQ29uZmlnICYmICFmcy5leGlzdHMocGFja2FnZUpzb25QYXRoKSkge1xuICAgIC8vIE5vIHBhY2thZ2UuanNvbiBhbmQgbm8gY29uZmlnXG4gICAgcmV0dXJuIE5PX0VOVFJZX1BPSU5UO1xuICB9XG5cbiAgaWYgKGhhc0NvbmZpZyAmJiBlbnRyeVBvaW50Q29uZmlnLmlnbm9yZSA9PT0gdHJ1ZSkge1xuICAgIC8vIEV4cGxpY2l0bHkgaWdub3JlZFxuICAgIHJldHVybiBOT19FTlRSWV9QT0lOVDtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlZEVudHJ5UG9pbnRQYWNrYWdlSnNvbiA9IGxvYWRFbnRyeVBvaW50UGFja2FnZShmcywgbG9nZ2VyLCBwYWNrYWdlSnNvblBhdGgsIGhhc0NvbmZpZyk7XG4gIGNvbnN0IGVudHJ5UG9pbnRQYWNrYWdlSnNvbiA9IGhhc0NvbmZpZyA/XG4gICAgICBtZXJnZUNvbmZpZ0FuZFBhY2thZ2VKc29uKFxuICAgICAgICAgIGxvYWRlZEVudHJ5UG9pbnRQYWNrYWdlSnNvbiwgZW50cnlQb2ludENvbmZpZywgcGFja2FnZVBhdGgsIGVudHJ5UG9pbnRQYXRoKSA6XG4gICAgICBsb2FkZWRFbnRyeVBvaW50UGFja2FnZUpzb247XG5cbiAgaWYgKGVudHJ5UG9pbnRQYWNrYWdlSnNvbiA9PT0gbnVsbCkge1xuICAgIC8vIHBhY2thZ2UuanNvbiBleGlzdHMgYnV0IGNvdWxkIG5vdCBiZSBwYXJzZWQgYW5kIHRoZXJlIHdhcyBubyByZWRlZW1pbmcgY29uZmlnXG4gICAgcmV0dXJuIElOQ09NUEFUSUJMRV9FTlRSWV9QT0lOVDtcbiAgfVxuXG4gIGNvbnN0IHR5cGluZ3MgPSBlbnRyeVBvaW50UGFja2FnZUpzb24udHlwaW5ncyB8fCBlbnRyeVBvaW50UGFja2FnZUpzb24udHlwZXMgfHxcbiAgICAgIGd1ZXNzVHlwaW5nc0Zyb21QYWNrYWdlSnNvbihmcywgZW50cnlQb2ludFBhdGgsIGVudHJ5UG9pbnRQYWNrYWdlSnNvbik7XG4gIGlmICh0eXBlb2YgdHlwaW5ncyAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBNaXNzaW5nIHRoZSByZXF1aXJlZCBgdHlwaW5nc2AgcHJvcGVydHlcbiAgICByZXR1cm4gSU5DT01QQVRJQkxFX0VOVFJZX1BPSU5UO1xuICB9XG5cbiAgLy8gQW4gZW50cnktcG9pbnQgaXMgYXNzdW1lZCB0byBiZSBjb21waWxlZCBieSBBbmd1bGFyIGlmIHRoZXJlIGlzIGVpdGhlcjpcbiAgLy8gKiBhIGBtZXRhZGF0YS5qc29uYCBmaWxlIG5leHQgdG8gdGhlIHR5cGluZ3MgZW50cnktcG9pbnRcbiAgLy8gKiBhIGN1c3RvbSBjb25maWcgZm9yIHRoaXMgZW50cnktcG9pbnRcbiAgY29uc3QgbWV0YWRhdGFQYXRoID0gcmVzb2x2ZShlbnRyeVBvaW50UGF0aCwgdHlwaW5ncy5yZXBsYWNlKC9cXC5kXFwudHMkLywgJycpICsgJy5tZXRhZGF0YS5qc29uJyk7XG4gIGNvbnN0IGNvbXBpbGVkQnlBbmd1bGFyID0gZW50cnlQb2ludENvbmZpZyAhPT0gdW5kZWZpbmVkIHx8IGZzLmV4aXN0cyhtZXRhZGF0YVBhdGgpO1xuXG4gIGNvbnN0IGVudHJ5UG9pbnRJbmZvOiBFbnRyeVBvaW50ID0ge1xuICAgIG5hbWU6IGVudHJ5UG9pbnRQYWNrYWdlSnNvbi5uYW1lLFxuICAgIHBhY2thZ2VKc29uOiBlbnRyeVBvaW50UGFja2FnZUpzb24sXG4gICAgcGFja2FnZTogcGFja2FnZVBhdGgsXG4gICAgcGF0aDogZW50cnlQb2ludFBhdGgsXG4gICAgdHlwaW5nczogcmVzb2x2ZShlbnRyeVBvaW50UGF0aCwgdHlwaW5ncyksXG4gICAgY29tcGlsZWRCeUFuZ3VsYXIsXG4gICAgaWdub3JlTWlzc2luZ0RlcGVuZGVuY2llczpcbiAgICAgICAgZW50cnlQb2ludENvbmZpZyAhPT0gdW5kZWZpbmVkID8gISFlbnRyeVBvaW50Q29uZmlnLmlnbm9yZU1pc3NpbmdEZXBlbmRlbmNpZXMgOiBmYWxzZSxcbiAgICBnZW5lcmF0ZURlZXBSZWV4cG9ydHM6XG4gICAgICAgIGVudHJ5UG9pbnRDb25maWcgIT09IHVuZGVmaW5lZCA/ICEhZW50cnlQb2ludENvbmZpZy5nZW5lcmF0ZURlZXBSZWV4cG9ydHMgOiBmYWxzZSxcbiAgfTtcblxuICByZXR1cm4gZW50cnlQb2ludEluZm87XG59XG5cbi8qKlxuICogQ29udmVydCBhIHBhY2thZ2UuanNvbiBwcm9wZXJ0eSBpbnRvIGFuIGVudHJ5LXBvaW50IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IHRvIGNvbnZlcnQgdG8gYSBmb3JtYXQuXG4gKiBAcmV0dXJucyBBbiBlbnRyeS1wb2ludCBmb3JtYXQgb3IgYHVuZGVmaW5lZGAgaWYgbm9uZSBtYXRjaCB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyeVBvaW50Rm9ybWF0KFxuICAgIGZzOiBGaWxlU3lzdGVtLCBlbnRyeVBvaW50OiBFbnRyeVBvaW50LCBwcm9wZXJ0eTogRW50cnlQb2ludEpzb25Qcm9wZXJ0eSk6IEVudHJ5UG9pbnRGb3JtYXR8XG4gICAgdW5kZWZpbmVkIHtcbiAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgIGNhc2UgJ2Zlc20yMDE1JzpcbiAgICAgIHJldHVybiAnZXNtMjAxNSc7XG4gICAgY2FzZSAnZmVzbTUnOlxuICAgICAgcmV0dXJuICdlc201JztcbiAgICBjYXNlICdlczIwMTUnOlxuICAgICAgcmV0dXJuICdlc20yMDE1JztcbiAgICBjYXNlICdlc20yMDE1JzpcbiAgICAgIHJldHVybiAnZXNtMjAxNSc7XG4gICAgY2FzZSAnZXNtNSc6XG4gICAgICByZXR1cm4gJ2VzbTUnO1xuICAgIGNhc2UgJ2Jyb3dzZXInOlxuICAgICAgY29uc3QgYnJvd3NlckZpbGUgPSBlbnRyeVBvaW50LnBhY2thZ2VKc29uWydicm93c2VyJ107XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJGaWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNuaWZmTW9kdWxlRm9ybWF0KGZzLCBqb2luKGVudHJ5UG9pbnQucGF0aCwgYnJvd3NlckZpbGUpKTtcbiAgICBjYXNlICdtYWluJzpcbiAgICAgIGNvbnN0IG1haW5GaWxlID0gZW50cnlQb2ludC5wYWNrYWdlSnNvblsnbWFpbiddO1xuICAgICAgaWYgKG1haW5GaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzbmlmZk1vZHVsZUZvcm1hdChmcywgam9pbihlbnRyeVBvaW50LnBhdGgsIG1haW5GaWxlKSk7XG4gICAgY2FzZSAnbW9kdWxlJzpcbiAgICAgIHJldHVybiAnZXNtNSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIEpTT04gZnJvbSBhIHBhY2thZ2UuanNvbiBmaWxlLlxuICogQHBhcmFtIHBhY2thZ2VKc29uUGF0aCB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgcGFja2FnZS5qc29uIGZpbGUuXG4gKiBAcmV0dXJucyBKU09OIGZyb20gdGhlIHBhY2thZ2UuanNvbiBmaWxlIGlmIGl0IGlzIHZhbGlkLCBgbnVsbGAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBsb2FkRW50cnlQb2ludFBhY2thZ2UoXG4gICAgZnM6IEZpbGVTeXN0ZW0sIGxvZ2dlcjogTG9nZ2VyLCBwYWNrYWdlSnNvblBhdGg6IEFic29sdXRlRnNQYXRoLFxuICAgIGhhc0NvbmZpZzogYm9vbGVhbik6IEVudHJ5UG9pbnRQYWNrYWdlSnNvbnxudWxsIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZShwYWNrYWdlSnNvblBhdGgpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghaGFzQ29uZmlnKSB7XG4gICAgICAvLyBXZSBtYXkgaGF2ZSBydW4gaW50byBhIHBhY2thZ2UuanNvbiB3aXRoIHVuZXhwZWN0ZWQgc3ltYm9sc1xuICAgICAgbG9nZ2VyLndhcm4oYEZhaWxlZCB0byByZWFkIGVudHJ5IHBvaW50IGluZm8gZnJvbSAke3BhY2thZ2VKc29uUGF0aH0gd2l0aCBlcnJvciAke2V9LmApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbmlmZk1vZHVsZUZvcm1hdChmczogRmlsZVN5c3RlbSwgc291cmNlRmlsZVBhdGg6IEFic29sdXRlRnNQYXRoKTogRW50cnlQb2ludEZvcm1hdHxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCByZXNvbHZlZFBhdGggPSByZXNvbHZlRmlsZVdpdGhQb3N0Zml4ZXMoZnMsIHNvdXJjZUZpbGVQYXRoLCBbJycsICcuanMnLCAnL2luZGV4LmpzJ10pO1xuICBpZiAocmVzb2x2ZWRQYXRoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHNvdXJjZUZpbGUgPVxuICAgICAgdHMuY3JlYXRlU291cmNlRmlsZShzb3VyY2VGaWxlUGF0aCwgZnMucmVhZEZpbGUocmVzb2x2ZWRQYXRoKSwgdHMuU2NyaXB0VGFyZ2V0LkVTNSk7XG4gIGlmIChzb3VyY2VGaWxlLnN0YXRlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHMuaXNFeHRlcm5hbE1vZHVsZShzb3VyY2VGaWxlKSkge1xuICAgIHJldHVybiAnZXNtNSc7XG4gIH0gZWxzZSBpZiAocGFyc2VTdGF0ZW1lbnRGb3JVbWRNb2R1bGUoc291cmNlRmlsZS5zdGF0ZW1lbnRzWzBdKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiAndW1kJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2NvbW1vbmpzJztcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUNvbmZpZ0FuZFBhY2thZ2VKc29uKFxuICAgIGVudHJ5UG9pbnRQYWNrYWdlSnNvbjogRW50cnlQb2ludFBhY2thZ2VKc29ufG51bGwsIGVudHJ5UG9pbnRDb25maWc6IE5nY2NFbnRyeVBvaW50Q29uZmlnLFxuICAgIHBhY2thZ2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgZW50cnlQb2ludFBhdGg6IEFic29sdXRlRnNQYXRoKTogRW50cnlQb2ludFBhY2thZ2VKc29uIHtcbiAgaWYgKGVudHJ5UG9pbnRQYWNrYWdlSnNvbiAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7Li4uZW50cnlQb2ludFBhY2thZ2VKc29uLCAuLi5lbnRyeVBvaW50Q29uZmlnLm92ZXJyaWRlfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuYW1lID0gYCR7YmFzZW5hbWUocGFja2FnZVBhdGgpfS8ke3JlbGF0aXZlKHBhY2thZ2VQYXRoLCBlbnRyeVBvaW50UGF0aCl9YDtcbiAgICByZXR1cm4ge25hbWUsIC4uLmVudHJ5UG9pbnRDb25maWcub3ZlcnJpZGV9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGd1ZXNzVHlwaW5nc0Zyb21QYWNrYWdlSnNvbihcbiAgICBmczogRmlsZVN5c3RlbSwgZW50cnlQb2ludFBhdGg6IEFic29sdXRlRnNQYXRoLFxuICAgIGVudHJ5UG9pbnRQYWNrYWdlSnNvbjogRW50cnlQb2ludFBhY2thZ2VKc29uKTogQWJzb2x1dGVGc1BhdGh8bnVsbCB7XG4gIGZvciAoY29uc3QgcHJvcCBvZiBTVVBQT1JURURfRk9STUFUX1BST1BFUlRJRVMpIHtcbiAgICBjb25zdCBmaWVsZCA9IGVudHJ5UG9pbnRQYWNrYWdlSnNvbltwcm9wXTtcbiAgICBpZiAodHlwZW9mIGZpZWxkICE9PSAnc3RyaW5nJykge1xuICAgICAgLy8gU29tZSBjcmF6eSBwYWNrYWdlcyBoYXZlIHRoaW5ncyBsaWtlIGFycmF5cyBpbiB0aGVzZSBmaWVsZHMhXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgcmVsYXRpdmVUeXBpbmdzUGF0aCA9IGZpZWxkLnJlcGxhY2UoL1xcLmpzJC8sICcuZC50cycpO1xuICAgIGNvbnN0IHR5cGluZ3NQYXRoID0gcmVzb2x2ZShlbnRyeVBvaW50UGF0aCwgcmVsYXRpdmVUeXBpbmdzUGF0aCk7XG4gICAgaWYgKGZzLmV4aXN0cyh0eXBpbmdzUGF0aCkpIHtcbiAgICAgIHJldHVybiB0eXBpbmdzUGF0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRmluZCB0aGUgdmVyc2lvbiBvZiB0aGUgcGFja2FnZSBhdCBgcGFja2FnZUpzb25QYXRoYC5cbiAqXG4gKiBAcmV0dXJucyB0aGUgdmVyc2lvbiBzdHJpbmcgb3IgYG51bGxgIGlmIHRoZSBwYWNrYWdlLmpzb24gZG9lcyBub3QgZXhpc3Qgb3IgaXMgaW52YWxpZC5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFja2FnZVZlcnNpb24oZnM6IEZpbGVTeXN0ZW0sIHBhY2thZ2VKc29uUGF0aDogQWJzb2x1dGVGc1BhdGgpOiBzdHJpbmd8bnVsbCB7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0cyhwYWNrYWdlSnNvblBhdGgpKSB7XG4gICAgICBjb25zdCBwYWNrYWdlSnNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGUocGFja2FnZUpzb25QYXRoKSk7XG4gICAgICByZXR1cm4gcGFja2FnZUpzb25bJ3ZlcnNpb24nXSB8fCBudWxsO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gRG8gbm90aGluZ1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19