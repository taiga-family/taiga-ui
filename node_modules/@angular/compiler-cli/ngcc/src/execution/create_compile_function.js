(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/create_compile_function", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/ngcc/src/packages/entry_point", "@angular/compiler-cli/ngcc/src/packages/entry_point_bundle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var entry_point_1 = require("@angular/compiler-cli/ngcc/src/packages/entry_point");
    var entry_point_bundle_1 = require("@angular/compiler-cli/ngcc/src/packages/entry_point_bundle");
    /**
     * The function for creating the `compile()` function.
     */
    function getCreateCompileFn(fileSystem, logger, fileWriter, enableI18nLegacyMessageIdFormat, tsConfig, pathMappings) {
        return function (beforeWritingFiles, onTaskCompleted) {
            var Transformer = require('../packages/transformer').Transformer;
            var transformer = new Transformer(fileSystem, logger, tsConfig);
            return function (task) {
                var entryPoint = task.entryPoint, formatProperty = task.formatProperty, formatPropertiesToMarkAsProcessed = task.formatPropertiesToMarkAsProcessed, processDts = task.processDts;
                var isCore = entryPoint.name === '@angular/core'; // Are we compiling the Angular core?
                var packageJson = entryPoint.packageJson;
                var formatPath = packageJson[formatProperty];
                var format = entry_point_1.getEntryPointFormat(fileSystem, entryPoint, formatProperty);
                // All properties listed in `propertiesToProcess` are guaranteed to point to a format-path
                // (i.e. they are defined in `entryPoint.packageJson`). Furthermore, they are also guaranteed
                // to be among `SUPPORTED_FORMAT_PROPERTIES`.
                // Based on the above, `formatPath` should always be defined and `getEntryPointFormat()`
                // should always return a format here (and not `undefined`).
                if (!formatPath || !format) {
                    // This should never happen.
                    throw new Error("Invariant violated: No format-path or format for " + entryPoint.path + " : " +
                        (formatProperty + " (formatPath: " + formatPath + " | format: " + format + ")"));
                }
                logger.info("Compiling " + entryPoint.name + " : " + formatProperty + " as " + format);
                var bundle = entry_point_bundle_1.makeEntryPointBundle(fileSystem, entryPoint, formatPath, isCore, format, processDts, pathMappings, true, enableI18nLegacyMessageIdFormat);
                var result = transformer.transform(bundle);
                if (result.success) {
                    if (result.diagnostics.length > 0) {
                        logger.warn(diagnostics_1.replaceTsWithNgInErrors(ts.formatDiagnosticsWithColorAndContext(result.diagnostics, bundle.src.host)));
                    }
                    var writeBundle = function () {
                        fileWriter.writeBundle(bundle, result.transformedFiles, formatPropertiesToMarkAsProcessed);
                        logger.debug("  Successfully compiled " + entryPoint.name + " : " + formatProperty);
                        onTaskCompleted(task, 0 /* Processed */, null);
                    };
                    var beforeWritingResult = beforeWritingFiles(result.transformedFiles);
                    return (beforeWritingResult instanceof Promise) ?
                        beforeWritingResult.then(writeBundle) :
                        writeBundle();
                }
                else {
                    var errors = diagnostics_1.replaceTsWithNgInErrors(ts.formatDiagnosticsWithColorAndContext(result.diagnostics, bundle.src.host));
                    onTaskCompleted(task, 1 /* Failed */, "compilation errors:\n" + errors);
                }
            };
        };
    }
    exports.getCreateCompileFn = getCreateCompileFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX2NvbXBpbGVfZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL2NyZWF0ZV9jb21waWxlX2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQ0E7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBRWpDLDJFQUF1RTtJQUl2RSxtRkFBNEQ7SUFDNUQsaUdBQW9FO0lBT3BFOztPQUVHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQzlCLFVBQXNCLEVBQUUsTUFBYyxFQUFFLFVBQXNCLEVBQzlELCtCQUF3QyxFQUFFLFFBQWtDLEVBQzVFLFlBQW9DO1FBQ3RDLE9BQU8sVUFBQyxrQkFBa0IsRUFBRSxlQUFlO1lBQ2xDLElBQUEsNERBQVcsQ0FBdUM7WUFDekQsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVsRSxPQUFPLFVBQUMsSUFBVTtnQkFDVCxJQUFBLDRCQUFVLEVBQUUsb0NBQWMsRUFBRSwwRUFBaUMsRUFBRSw0QkFBVSxDQUFTO2dCQUV6RixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxDQUFFLHFDQUFxQztnQkFDMUYsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDM0MsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFNLE1BQU0sR0FBRyxpQ0FBbUIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUUzRSwwRkFBMEY7Z0JBQzFGLDZGQUE2RjtnQkFDN0YsNkNBQTZDO2dCQUM3Qyx3RkFBd0Y7Z0JBQ3hGLDREQUE0RDtnQkFDNUQsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsNEJBQTRCO29CQUM1QixNQUFNLElBQUksS0FBSyxDQUNYLHNEQUFvRCxVQUFVLENBQUMsSUFBSSxRQUFLO3lCQUNyRSxjQUFjLHNCQUFpQixVQUFVLG1CQUFjLE1BQU0sTUFBRyxDQUFBLENBQUMsQ0FBQztpQkFDMUU7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFhLFVBQVUsQ0FBQyxJQUFJLFdBQU0sY0FBYyxZQUFPLE1BQVEsQ0FBQyxDQUFDO2dCQUU3RSxJQUFNLE1BQU0sR0FBRyx5Q0FBb0IsQ0FDL0IsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFDbEYsK0JBQStCLENBQUMsQ0FBQztnQkFFckMsSUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNsQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQ0FBdUIsQ0FDL0IsRUFBRSxDQUFDLG9DQUFvQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BGO29CQUVELElBQU0sV0FBVyxHQUFHO3dCQUNsQixVQUFVLENBQUMsV0FBVyxDQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGlDQUFpQyxDQUFDLENBQUM7d0JBRXhFLE1BQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTJCLFVBQVUsQ0FBQyxJQUFJLFdBQU0sY0FBZ0IsQ0FBQyxDQUFDO3dCQUMvRSxlQUFlLENBQUMsSUFBSSxxQkFBbUMsSUFBSSxDQUFDLENBQUM7b0JBQy9ELENBQUMsQ0FBQztvQkFFRixJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUV4RSxPQUFPLENBQUMsbUJBQW1CLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBMEMsQ0FBQSxDQUFDO3dCQUMvRSxXQUFXLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsSUFBTSxNQUFNLEdBQUcscUNBQXVCLENBQ2xDLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEYsZUFBZSxDQUFDLElBQUksa0JBQWdDLDBCQUF3QixNQUFRLENBQUMsQ0FBQztpQkFDdkY7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBN0RELGdEQTZEQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7cmVwbGFjZVRzV2l0aE5nSW5FcnJvcnN9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9kaWFnbm9zdGljcyc7XG5pbXBvcnQge0ZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge1BhcnNlZENvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uLy4uL3NyYy9wZXJmb3JtX2NvbXBpbGUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcbmltcG9ydCB7Z2V0RW50cnlQb2ludEZvcm1hdH0gZnJvbSAnLi4vcGFja2FnZXMvZW50cnlfcG9pbnQnO1xuaW1wb3J0IHttYWtlRW50cnlQb2ludEJ1bmRsZX0gZnJvbSAnLi4vcGFja2FnZXMvZW50cnlfcG9pbnRfYnVuZGxlJztcbmltcG9ydCB7UGF0aE1hcHBpbmdzfSBmcm9tICcuLi9wYXRoX21hcHBpbmdzJztcbmltcG9ydCB7RmlsZVdyaXRlcn0gZnJvbSAnLi4vd3JpdGluZy9maWxlX3dyaXRlcic7XG5cbmltcG9ydCB7Q3JlYXRlQ29tcGlsZUZufSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge1Rhc2ssIFRhc2tQcm9jZXNzaW5nT3V0Y29tZX0gZnJvbSAnLi90YXNrcy9hcGknO1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGhlIGBjb21waWxlKClgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlQ29tcGlsZUZuKFxuICAgIGZpbGVTeXN0ZW06IEZpbGVTeXN0ZW0sIGxvZ2dlcjogTG9nZ2VyLCBmaWxlV3JpdGVyOiBGaWxlV3JpdGVyLFxuICAgIGVuYWJsZUkxOG5MZWdhY3lNZXNzYWdlSWRGb3JtYXQ6IGJvb2xlYW4sIHRzQ29uZmlnOiBQYXJzZWRDb25maWd1cmF0aW9ufG51bGwsXG4gICAgcGF0aE1hcHBpbmdzOiBQYXRoTWFwcGluZ3N8dW5kZWZpbmVkKTogQ3JlYXRlQ29tcGlsZUZuIHtcbiAgcmV0dXJuIChiZWZvcmVXcml0aW5nRmlsZXMsIG9uVGFza0NvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHtUcmFuc2Zvcm1lcn0gPSByZXF1aXJlKCcuLi9wYWNrYWdlcy90cmFuc2Zvcm1lcicpO1xuICAgIGNvbnN0IHRyYW5zZm9ybWVyID0gbmV3IFRyYW5zZm9ybWVyKGZpbGVTeXN0ZW0sIGxvZ2dlciwgdHNDb25maWcpO1xuXG4gICAgcmV0dXJuICh0YXNrOiBUYXNrKSA9PiB7XG4gICAgICBjb25zdCB7ZW50cnlQb2ludCwgZm9ybWF0UHJvcGVydHksIGZvcm1hdFByb3BlcnRpZXNUb01hcmtBc1Byb2Nlc3NlZCwgcHJvY2Vzc0R0c30gPSB0YXNrO1xuXG4gICAgICBjb25zdCBpc0NvcmUgPSBlbnRyeVBvaW50Lm5hbWUgPT09ICdAYW5ndWxhci9jb3JlJzsgIC8vIEFyZSB3ZSBjb21waWxpbmcgdGhlIEFuZ3VsYXIgY29yZT9cbiAgICAgIGNvbnN0IHBhY2thZ2VKc29uID0gZW50cnlQb2ludC5wYWNrYWdlSnNvbjtcbiAgICAgIGNvbnN0IGZvcm1hdFBhdGggPSBwYWNrYWdlSnNvbltmb3JtYXRQcm9wZXJ0eV07XG4gICAgICBjb25zdCBmb3JtYXQgPSBnZXRFbnRyeVBvaW50Rm9ybWF0KGZpbGVTeXN0ZW0sIGVudHJ5UG9pbnQsIGZvcm1hdFByb3BlcnR5KTtcblxuICAgICAgLy8gQWxsIHByb3BlcnRpZXMgbGlzdGVkIGluIGBwcm9wZXJ0aWVzVG9Qcm9jZXNzYCBhcmUgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIGZvcm1hdC1wYXRoXG4gICAgICAvLyAoaS5lLiB0aGV5IGFyZSBkZWZpbmVkIGluIGBlbnRyeVBvaW50LnBhY2thZ2VKc29uYCkuIEZ1cnRoZXJtb3JlLCB0aGV5IGFyZSBhbHNvIGd1YXJhbnRlZWRcbiAgICAgIC8vIHRvIGJlIGFtb25nIGBTVVBQT1JURURfRk9STUFUX1BST1BFUlRJRVNgLlxuICAgICAgLy8gQmFzZWQgb24gdGhlIGFib3ZlLCBgZm9ybWF0UGF0aGAgc2hvdWxkIGFsd2F5cyBiZSBkZWZpbmVkIGFuZCBgZ2V0RW50cnlQb2ludEZvcm1hdCgpYFxuICAgICAgLy8gc2hvdWxkIGFsd2F5cyByZXR1cm4gYSBmb3JtYXQgaGVyZSAoYW5kIG5vdCBgdW5kZWZpbmVkYCkuXG4gICAgICBpZiAoIWZvcm1hdFBhdGggfHwgIWZvcm1hdCkge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4uXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhcmlhbnQgdmlvbGF0ZWQ6IE5vIGZvcm1hdC1wYXRoIG9yIGZvcm1hdCBmb3IgJHtlbnRyeVBvaW50LnBhdGh9IDogYCArXG4gICAgICAgICAgICBgJHtmb3JtYXRQcm9wZXJ0eX0gKGZvcm1hdFBhdGg6ICR7Zm9ybWF0UGF0aH0gfCBmb3JtYXQ6ICR7Zm9ybWF0fSlgKTtcbiAgICAgIH1cblxuICAgICAgbG9nZ2VyLmluZm8oYENvbXBpbGluZyAke2VudHJ5UG9pbnQubmFtZX0gOiAke2Zvcm1hdFByb3BlcnR5fSBhcyAke2Zvcm1hdH1gKTtcblxuICAgICAgY29uc3QgYnVuZGxlID0gbWFrZUVudHJ5UG9pbnRCdW5kbGUoXG4gICAgICAgICAgZmlsZVN5c3RlbSwgZW50cnlQb2ludCwgZm9ybWF0UGF0aCwgaXNDb3JlLCBmb3JtYXQsIHByb2Nlc3NEdHMsIHBhdGhNYXBwaW5ncywgdHJ1ZSxcbiAgICAgICAgICBlbmFibGVJMThuTGVnYWN5TWVzc2FnZUlkRm9ybWF0KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdHJhbnNmb3JtZXIudHJhbnNmb3JtKGJ1bmRsZSk7XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5kaWFnbm9zdGljcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm4ocmVwbGFjZVRzV2l0aE5nSW5FcnJvcnMoXG4gICAgICAgICAgICAgIHRzLmZvcm1hdERpYWdub3N0aWNzV2l0aENvbG9yQW5kQ29udGV4dChyZXN1bHQuZGlhZ25vc3RpY3MsIGJ1bmRsZS5zcmMuaG9zdCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdyaXRlQnVuZGxlID0gKCkgPT4ge1xuICAgICAgICAgIGZpbGVXcml0ZXIud3JpdGVCdW5kbGUoXG4gICAgICAgICAgICAgIGJ1bmRsZSwgcmVzdWx0LnRyYW5zZm9ybWVkRmlsZXMsIGZvcm1hdFByb3BlcnRpZXNUb01hcmtBc1Byb2Nlc3NlZCk7XG5cbiAgICAgICAgICBsb2dnZXIuZGVidWcoYCAgU3VjY2Vzc2Z1bGx5IGNvbXBpbGVkICR7ZW50cnlQb2ludC5uYW1lfSA6ICR7Zm9ybWF0UHJvcGVydHl9YCk7XG4gICAgICAgICAgb25UYXNrQ29tcGxldGVkKHRhc2ssIFRhc2tQcm9jZXNzaW5nT3V0Y29tZS5Qcm9jZXNzZWQsIG51bGwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJlZm9yZVdyaXRpbmdSZXN1bHQgPSBiZWZvcmVXcml0aW5nRmlsZXMocmVzdWx0LnRyYW5zZm9ybWVkRmlsZXMpO1xuXG4gICAgICAgIHJldHVybiAoYmVmb3JlV3JpdGluZ1Jlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpID9cbiAgICAgICAgICAgIGJlZm9yZVdyaXRpbmdSZXN1bHQudGhlbih3cml0ZUJ1bmRsZSkgYXMgUmV0dXJuVHlwZTx0eXBlb2YgYmVmb3JlV3JpdGluZ0ZpbGVzPjpcbiAgICAgICAgICAgIHdyaXRlQnVuZGxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSByZXBsYWNlVHNXaXRoTmdJbkVycm9ycyhcbiAgICAgICAgICAgIHRzLmZvcm1hdERpYWdub3N0aWNzV2l0aENvbG9yQW5kQ29udGV4dChyZXN1bHQuZGlhZ25vc3RpY3MsIGJ1bmRsZS5zcmMuaG9zdCkpO1xuICAgICAgICBvblRhc2tDb21wbGV0ZWQodGFzaywgVGFza1Byb2Nlc3NpbmdPdXRjb21lLkZhaWxlZCwgYGNvbXBpbGF0aW9uIGVycm9yczpcXG4ke2Vycm9yc31gKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIl19