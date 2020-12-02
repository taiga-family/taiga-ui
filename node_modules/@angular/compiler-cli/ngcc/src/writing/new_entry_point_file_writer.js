(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/writing/new_entry_point_file_writer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/typescript", "@angular/compiler-cli/ngcc/src/writing/in_place_file_writer"], factory);
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
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var in_place_file_writer_1 = require("@angular/compiler-cli/ngcc/src/writing/in_place_file_writer");
    exports.NGCC_DIRECTORY = '__ivy_ngcc__';
    exports.NGCC_PROPERTY_EXTENSION = '_ivy_ngcc';
    /**
     * This FileWriter creates a copy of the original entry-point, then writes the transformed
     * files onto the files in this copy, and finally updates the package.json with a new
     * entry-point format property that points to this new entry-point.
     *
     * If there are transformed typings files in this bundle, they are updated in-place (see the
     * `InPlaceFileWriter`).
     */
    var NewEntryPointFileWriter = /** @class */ (function (_super) {
        tslib_1.__extends(NewEntryPointFileWriter, _super);
        function NewEntryPointFileWriter(fs, logger, errorOnFailedEntryPoint, pkgJsonUpdater) {
            var _this = _super.call(this, fs, logger, errorOnFailedEntryPoint) || this;
            _this.pkgJsonUpdater = pkgJsonUpdater;
            return _this;
        }
        NewEntryPointFileWriter.prototype.writeBundle = function (bundle, transformedFiles, formatProperties) {
            var _this = this;
            // The new folder is at the root of the overall package
            var entryPoint = bundle.entryPoint;
            var ngccFolder = file_system_1.join(entryPoint.package, exports.NGCC_DIRECTORY);
            this.copyBundle(bundle, entryPoint.package, ngccFolder);
            transformedFiles.forEach(function (file) { return _this.writeFile(file, entryPoint.package, ngccFolder); });
            this.updatePackageJson(entryPoint, formatProperties, ngccFolder);
        };
        NewEntryPointFileWriter.prototype.revertBundle = function (entryPoint, transformedFilePaths, formatProperties) {
            // IMPLEMENTATION NOTE:
            //
            // The changes made by `copyBundle()` are not reverted here. The non-transformed copied files
            // are identical to the original ones and they will be overwritten when re-processing the
            // entry-point anyway.
            //
            // This way, we avoid the overhead of having to inform the master process about all source files
            // being copied in `copyBundle()`.
            var e_1, _a;
            try {
                // Revert the transformed files.
                for (var transformedFilePaths_1 = tslib_1.__values(transformedFilePaths), transformedFilePaths_1_1 = transformedFilePaths_1.next(); !transformedFilePaths_1_1.done; transformedFilePaths_1_1 = transformedFilePaths_1.next()) {
                    var filePath = transformedFilePaths_1_1.value;
                    this.revertFile(filePath, entryPoint.package);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (transformedFilePaths_1_1 && !transformedFilePaths_1_1.done && (_a = transformedFilePaths_1.return)) _a.call(transformedFilePaths_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Revert any changes to `package.json`.
            this.revertPackageJson(entryPoint, formatProperties);
        };
        NewEntryPointFileWriter.prototype.copyBundle = function (bundle, packagePath, ngccFolder) {
            var _this = this;
            bundle.src.program.getSourceFiles().forEach(function (sourceFile) {
                var relativePath = file_system_1.relative(packagePath, file_system_1.absoluteFromSourceFile(sourceFile));
                var isOutsidePackage = relativePath.startsWith('..');
                if (!sourceFile.isDeclarationFile && !isOutsidePackage) {
                    var newFilePath = file_system_1.join(ngccFolder, relativePath);
                    _this.fs.ensureDir(file_system_1.dirname(newFilePath));
                    _this.fs.copyFile(file_system_1.absoluteFromSourceFile(sourceFile), newFilePath);
                }
            });
        };
        NewEntryPointFileWriter.prototype.writeFile = function (file, packagePath, ngccFolder) {
            if (typescript_1.isDtsPath(file.path.replace(/\.map$/, ''))) {
                // This is either `.d.ts` or `.d.ts.map` file
                _super.prototype.writeFileAndBackup.call(this, file);
            }
            else {
                var relativePath = file_system_1.relative(packagePath, file.path);
                var newFilePath = file_system_1.join(ngccFolder, relativePath);
                this.fs.ensureDir(file_system_1.dirname(newFilePath));
                this.fs.writeFile(newFilePath, file.contents);
            }
        };
        NewEntryPointFileWriter.prototype.revertFile = function (filePath, packagePath) {
            if (typescript_1.isDtsPath(filePath.replace(/\.map$/, ''))) {
                // This is either `.d.ts` or `.d.ts.map` file
                _super.prototype.revertFileAndBackup.call(this, filePath);
            }
            else if (this.fs.exists(filePath)) {
                var relativePath = file_system_1.relative(packagePath, filePath);
                var newFilePath = file_system_1.join(packagePath, exports.NGCC_DIRECTORY, relativePath);
                this.fs.removeFile(newFilePath);
            }
        };
        NewEntryPointFileWriter.prototype.updatePackageJson = function (entryPoint, formatProperties, ngccFolder) {
            var e_2, _a;
            if (formatProperties.length === 0) {
                // No format properties need updating.
                return;
            }
            var packageJson = entryPoint.packageJson;
            var packageJsonPath = file_system_1.join(entryPoint.path, 'package.json');
            // All format properties point to the same format-path.
            var oldFormatProp = formatProperties[0];
            var oldFormatPath = packageJson[oldFormatProp];
            var oldAbsFormatPath = file_system_1.join(entryPoint.path, oldFormatPath);
            var newAbsFormatPath = file_system_1.join(ngccFolder, file_system_1.relative(entryPoint.package, oldAbsFormatPath));
            var newFormatPath = file_system_1.relative(entryPoint.path, newAbsFormatPath);
            // Update all properties in `package.json` (both in memory and on disk).
            var update = this.pkgJsonUpdater.createUpdate();
            try {
                for (var formatProperties_1 = tslib_1.__values(formatProperties), formatProperties_1_1 = formatProperties_1.next(); !formatProperties_1_1.done; formatProperties_1_1 = formatProperties_1.next()) {
                    var formatProperty = formatProperties_1_1.value;
                    if (packageJson[formatProperty] !== oldFormatPath) {
                        throw new Error("Unable to update '" + packageJsonPath + "': Format properties " +
                            ("(" + formatProperties.join(', ') + ") map to more than one format-path."));
                    }
                    update.addChange(["" + formatProperty + exports.NGCC_PROPERTY_EXTENSION], newFormatPath, { before: formatProperty });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (formatProperties_1_1 && !formatProperties_1_1.done && (_a = formatProperties_1.return)) _a.call(formatProperties_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            update.writeChanges(packageJsonPath, packageJson);
        };
        NewEntryPointFileWriter.prototype.revertPackageJson = function (entryPoint, formatProperties) {
            var e_3, _a;
            if (formatProperties.length === 0) {
                // No format properties need reverting.
                return;
            }
            var packageJson = entryPoint.packageJson;
            var packageJsonPath = file_system_1.join(entryPoint.path, 'package.json');
            // Revert all properties in `package.json` (both in memory and on disk).
            // Since `updatePackageJson()` only adds properties, it is safe to just remove them (if they
            // exist).
            var update = this.pkgJsonUpdater.createUpdate();
            try {
                for (var formatProperties_2 = tslib_1.__values(formatProperties), formatProperties_2_1 = formatProperties_2.next(); !formatProperties_2_1.done; formatProperties_2_1 = formatProperties_2.next()) {
                    var formatProperty = formatProperties_2_1.value;
                    update.addChange(["" + formatProperty + exports.NGCC_PROPERTY_EXTENSION], undefined);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (formatProperties_2_1 && !formatProperties_2_1.done && (_a = formatProperties_2.return)) _a.call(formatProperties_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            update.writeChanges(packageJsonPath, packageJson);
        };
        return NewEntryPointFileWriter;
    }(in_place_file_writer_1.InPlaceFileWriter));
    exports.NewEntryPointFileWriter = NewEntryPointFileWriter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X2VudHJ5X3BvaW50X2ZpbGVfd3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3dyaXRpbmcvbmV3X2VudHJ5X3BvaW50X2ZpbGVfd3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBOzs7Ozs7T0FNRztJQUNILDJFQUEySDtJQUMzSCxrRkFBaUU7SUFNakUsb0dBQXlEO0lBRzVDLFFBQUEsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUNoQyxRQUFBLHVCQUF1QixHQUFHLFdBQVcsQ0FBQztJQUVuRDs7Ozs7OztPQU9HO0lBQ0g7UUFBNkMsbURBQWlCO1FBQzVELGlDQUNJLEVBQWMsRUFBRSxNQUFjLEVBQUUsdUJBQWdDLEVBQ3hELGNBQWtDO1lBRjlDLFlBR0Usa0JBQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxTQUMzQztZQUZXLG9CQUFjLEdBQWQsY0FBYyxDQUFvQjs7UUFFOUMsQ0FBQztRQUVELDZDQUFXLEdBQVgsVUFDSSxNQUF3QixFQUFFLGdCQUErQixFQUN6RCxnQkFBMEM7WUFGOUMsaUJBU0M7WUFOQyx1REFBdUQ7WUFDdkQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNyQyxJQUFNLFVBQVUsR0FBRyxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsc0JBQWMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDeEQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO1lBQ3ZG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QW1JN0Q7SUFuSVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fic29sdXRlRnJvbVNvdXJjZUZpbGUsIEFic29sdXRlRnNQYXRoLCBkaXJuYW1lLCBGaWxlU3lzdGVtLCBqb2luLCByZWxhdGl2ZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7aXNEdHNQYXRofSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvdXRpbC9zcmMvdHlwZXNjcmlwdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXInO1xuaW1wb3J0IHtFbnRyeVBvaW50LCBFbnRyeVBvaW50SnNvblByb3BlcnR5fSBmcm9tICcuLi9wYWNrYWdlcy9lbnRyeV9wb2ludCc7XG5pbXBvcnQge0VudHJ5UG9pbnRCdW5kbGV9IGZyb20gJy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50X2J1bmRsZSc7XG5pbXBvcnQge0ZpbGVUb1dyaXRlfSBmcm9tICcuLi9yZW5kZXJpbmcvdXRpbHMnO1xuXG5pbXBvcnQge0luUGxhY2VGaWxlV3JpdGVyfSBmcm9tICcuL2luX3BsYWNlX2ZpbGVfd3JpdGVyJztcbmltcG9ydCB7UGFja2FnZUpzb25VcGRhdGVyfSBmcm9tICcuL3BhY2thZ2VfanNvbl91cGRhdGVyJztcblxuZXhwb3J0IGNvbnN0IE5HQ0NfRElSRUNUT1JZID0gJ19faXZ5X25nY2NfXyc7XG5leHBvcnQgY29uc3QgTkdDQ19QUk9QRVJUWV9FWFRFTlNJT04gPSAnX2l2eV9uZ2NjJztcblxuLyoqXG4gKiBUaGlzIEZpbGVXcml0ZXIgY3JlYXRlcyBhIGNvcHkgb2YgdGhlIG9yaWdpbmFsIGVudHJ5LXBvaW50LCB0aGVuIHdyaXRlcyB0aGUgdHJhbnNmb3JtZWRcbiAqIGZpbGVzIG9udG8gdGhlIGZpbGVzIGluIHRoaXMgY29weSwgYW5kIGZpbmFsbHkgdXBkYXRlcyB0aGUgcGFja2FnZS5qc29uIHdpdGggYSBuZXdcbiAqIGVudHJ5LXBvaW50IGZvcm1hdCBwcm9wZXJ0eSB0aGF0IHBvaW50cyB0byB0aGlzIG5ldyBlbnRyeS1wb2ludC5cbiAqXG4gKiBJZiB0aGVyZSBhcmUgdHJhbnNmb3JtZWQgdHlwaW5ncyBmaWxlcyBpbiB0aGlzIGJ1bmRsZSwgdGhleSBhcmUgdXBkYXRlZCBpbi1wbGFjZSAoc2VlIHRoZVxuICogYEluUGxhY2VGaWxlV3JpdGVyYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBOZXdFbnRyeVBvaW50RmlsZVdyaXRlciBleHRlbmRzIEluUGxhY2VGaWxlV3JpdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBmczogRmlsZVN5c3RlbSwgbG9nZ2VyOiBMb2dnZXIsIGVycm9yT25GYWlsZWRFbnRyeVBvaW50OiBib29sZWFuLFxuICAgICAgcHJpdmF0ZSBwa2dKc29uVXBkYXRlcjogUGFja2FnZUpzb25VcGRhdGVyKSB7XG4gICAgc3VwZXIoZnMsIGxvZ2dlciwgZXJyb3JPbkZhaWxlZEVudHJ5UG9pbnQpO1xuICB9XG5cbiAgd3JpdGVCdW5kbGUoXG4gICAgICBidW5kbGU6IEVudHJ5UG9pbnRCdW5kbGUsIHRyYW5zZm9ybWVkRmlsZXM6IEZpbGVUb1dyaXRlW10sXG4gICAgICBmb3JtYXRQcm9wZXJ0aWVzOiBFbnRyeVBvaW50SnNvblByb3BlcnR5W10pIHtcbiAgICAvLyBUaGUgbmV3IGZvbGRlciBpcyBhdCB0aGUgcm9vdCBvZiB0aGUgb3ZlcmFsbCBwYWNrYWdlXG4gICAgY29uc3QgZW50cnlQb2ludCA9IGJ1bmRsZS5lbnRyeVBvaW50O1xuICAgIGNvbnN0IG5nY2NGb2xkZXIgPSBqb2luKGVudHJ5UG9pbnQucGFja2FnZSwgTkdDQ19ESVJFQ1RPUlkpO1xuICAgIHRoaXMuY29weUJ1bmRsZShidW5kbGUsIGVudHJ5UG9pbnQucGFja2FnZSwgbmdjY0ZvbGRlcik7XG4gICAgdHJhbnNmb3JtZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4gdGhpcy53cml0ZUZpbGUoZmlsZSwgZW50cnlQb2ludC5wYWNrYWdlLCBuZ2NjRm9sZGVyKSk7XG4gICAgdGhpcy51cGRhdGVQYWNrYWdlSnNvbihlbnRyeVBvaW50LCBmb3JtYXRQcm9wZXJ0aWVzLCBuZ2NjRm9sZGVyKTtcbiAgfVxuXG4gIHJldmVydEJ1bmRsZShcbiAgICAgIGVudHJ5UG9pbnQ6IEVudHJ5UG9pbnQsIHRyYW5zZm9ybWVkRmlsZVBhdGhzOiBBYnNvbHV0ZUZzUGF0aFtdLFxuICAgICAgZm9ybWF0UHJvcGVydGllczogRW50cnlQb2ludEpzb25Qcm9wZXJ0eVtdKTogdm9pZCB7XG4gICAgLy8gSU1QTEVNRU5UQVRJT04gTk9URTpcbiAgICAvL1xuICAgIC8vIFRoZSBjaGFuZ2VzIG1hZGUgYnkgYGNvcHlCdW5kbGUoKWAgYXJlIG5vdCByZXZlcnRlZCBoZXJlLiBUaGUgbm9uLXRyYW5zZm9ybWVkIGNvcGllZCBmaWxlc1xuICAgIC8vIGFyZSBpZGVudGljYWwgdG8gdGhlIG9yaWdpbmFsIG9uZXMgYW5kIHRoZXkgd2lsbCBiZSBvdmVyd3JpdHRlbiB3aGVuIHJlLXByb2Nlc3NpbmcgdGhlXG4gICAgLy8gZW50cnktcG9pbnQgYW55d2F5LlxuICAgIC8vXG4gICAgLy8gVGhpcyB3YXksIHdlIGF2b2lkIHRoZSBvdmVyaGVhZCBvZiBoYXZpbmcgdG8gaW5mb3JtIHRoZSBtYXN0ZXIgcHJvY2VzcyBhYm91dCBhbGwgc291cmNlIGZpbGVzXG4gICAgLy8gYmVpbmcgY29waWVkIGluIGBjb3B5QnVuZGxlKClgLlxuXG4gICAgLy8gUmV2ZXJ0IHRoZSB0cmFuc2Zvcm1lZCBmaWxlcy5cbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIHRyYW5zZm9ybWVkRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnJldmVydEZpbGUoZmlsZVBhdGgsIGVudHJ5UG9pbnQucGFja2FnZSk7XG4gICAgfVxuXG4gICAgLy8gUmV2ZXJ0IGFueSBjaGFuZ2VzIHRvIGBwYWNrYWdlLmpzb25gLlxuICAgIHRoaXMucmV2ZXJ0UGFja2FnZUpzb24oZW50cnlQb2ludCwgZm9ybWF0UHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29weUJ1bmRsZShcbiAgICAgIGJ1bmRsZTogRW50cnlQb2ludEJ1bmRsZSwgcGFja2FnZVBhdGg6IEFic29sdXRlRnNQYXRoLCBuZ2NjRm9sZGVyOiBBYnNvbHV0ZUZzUGF0aCkge1xuICAgIGJ1bmRsZS5zcmMucHJvZ3JhbS5nZXRTb3VyY2VGaWxlcygpLmZvckVhY2goc291cmNlRmlsZSA9PiB7XG4gICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShwYWNrYWdlUGF0aCwgYWJzb2x1dGVGcm9tU291cmNlRmlsZShzb3VyY2VGaWxlKSk7XG4gICAgICBjb25zdCBpc091dHNpZGVQYWNrYWdlID0gcmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICBpZiAoIXNvdXJjZUZpbGUuaXNEZWNsYXJhdGlvbkZpbGUgJiYgIWlzT3V0c2lkZVBhY2thZ2UpIHtcbiAgICAgICAgY29uc3QgbmV3RmlsZVBhdGggPSBqb2luKG5nY2NGb2xkZXIsIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgIHRoaXMuZnMuZW5zdXJlRGlyKGRpcm5hbWUobmV3RmlsZVBhdGgpKTtcbiAgICAgICAgdGhpcy5mcy5jb3B5RmlsZShhYnNvbHV0ZUZyb21Tb3VyY2VGaWxlKHNvdXJjZUZpbGUpLCBuZXdGaWxlUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgd3JpdGVGaWxlKGZpbGU6IEZpbGVUb1dyaXRlLCBwYWNrYWdlUGF0aDogQWJzb2x1dGVGc1BhdGgsIG5nY2NGb2xkZXI6IEFic29sdXRlRnNQYXRoKTpcbiAgICAgIHZvaWQge1xuICAgIGlmIChpc0R0c1BhdGgoZmlsZS5wYXRoLnJlcGxhY2UoL1xcLm1hcCQvLCAnJykpKSB7XG4gICAgICAvLyBUaGlzIGlzIGVpdGhlciBgLmQudHNgIG9yIGAuZC50cy5tYXBgIGZpbGVcbiAgICAgIHN1cGVyLndyaXRlRmlsZUFuZEJhY2t1cChmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUocGFja2FnZVBhdGgsIGZpbGUucGF0aCk7XG4gICAgICBjb25zdCBuZXdGaWxlUGF0aCA9IGpvaW4obmdjY0ZvbGRlciwgcmVsYXRpdmVQYXRoKTtcbiAgICAgIHRoaXMuZnMuZW5zdXJlRGlyKGRpcm5hbWUobmV3RmlsZVBhdGgpKTtcbiAgICAgIHRoaXMuZnMud3JpdGVGaWxlKG5ld0ZpbGVQYXRoLCBmaWxlLmNvbnRlbnRzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmV2ZXJ0RmlsZShmaWxlUGF0aDogQWJzb2x1dGVGc1BhdGgsIHBhY2thZ2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQge1xuICAgIGlmIChpc0R0c1BhdGgoZmlsZVBhdGgucmVwbGFjZSgvXFwubWFwJC8sICcnKSkpIHtcbiAgICAgIC8vIFRoaXMgaXMgZWl0aGVyIGAuZC50c2Agb3IgYC5kLnRzLm1hcGAgZmlsZVxuICAgICAgc3VwZXIucmV2ZXJ0RmlsZUFuZEJhY2t1cChmaWxlUGF0aCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZzLmV4aXN0cyhmaWxlUGF0aCkpIHtcbiAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlKHBhY2thZ2VQYXRoLCBmaWxlUGF0aCk7XG4gICAgICBjb25zdCBuZXdGaWxlUGF0aCA9IGpvaW4ocGFja2FnZVBhdGgsIE5HQ0NfRElSRUNUT1JZLCByZWxhdGl2ZVBhdGgpO1xuICAgICAgdGhpcy5mcy5yZW1vdmVGaWxlKG5ld0ZpbGVQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFja2FnZUpzb24oXG4gICAgICBlbnRyeVBvaW50OiBFbnRyeVBvaW50LCBmb3JtYXRQcm9wZXJ0aWVzOiBFbnRyeVBvaW50SnNvblByb3BlcnR5W10sXG4gICAgICBuZ2NjRm9sZGVyOiBBYnNvbHV0ZUZzUGF0aCkge1xuICAgIGlmIChmb3JtYXRQcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gTm8gZm9ybWF0IHByb3BlcnRpZXMgbmVlZCB1cGRhdGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYWNrYWdlSnNvbiA9IGVudHJ5UG9pbnQucGFja2FnZUpzb247XG4gICAgY29uc3QgcGFja2FnZUpzb25QYXRoID0gam9pbihlbnRyeVBvaW50LnBhdGgsICdwYWNrYWdlLmpzb24nKTtcblxuICAgIC8vIEFsbCBmb3JtYXQgcHJvcGVydGllcyBwb2ludCB0byB0aGUgc2FtZSBmb3JtYXQtcGF0aC5cbiAgICBjb25zdCBvbGRGb3JtYXRQcm9wID0gZm9ybWF0UHJvcGVydGllc1swXSE7XG4gICAgY29uc3Qgb2xkRm9ybWF0UGF0aCA9IHBhY2thZ2VKc29uW29sZEZvcm1hdFByb3BdITtcbiAgICBjb25zdCBvbGRBYnNGb3JtYXRQYXRoID0gam9pbihlbnRyeVBvaW50LnBhdGgsIG9sZEZvcm1hdFBhdGgpO1xuICAgIGNvbnN0IG5ld0Fic0Zvcm1hdFBhdGggPSBqb2luKG5nY2NGb2xkZXIsIHJlbGF0aXZlKGVudHJ5UG9pbnQucGFja2FnZSwgb2xkQWJzRm9ybWF0UGF0aCkpO1xuICAgIGNvbnN0IG5ld0Zvcm1hdFBhdGggPSByZWxhdGl2ZShlbnRyeVBvaW50LnBhdGgsIG5ld0Fic0Zvcm1hdFBhdGgpO1xuXG4gICAgLy8gVXBkYXRlIGFsbCBwcm9wZXJ0aWVzIGluIGBwYWNrYWdlLmpzb25gIChib3RoIGluIG1lbW9yeSBhbmQgb24gZGlzaykuXG4gICAgY29uc3QgdXBkYXRlID0gdGhpcy5wa2dKc29uVXBkYXRlci5jcmVhdGVVcGRhdGUoKTtcblxuICAgIGZvciAoY29uc3QgZm9ybWF0UHJvcGVydHkgb2YgZm9ybWF0UHJvcGVydGllcykge1xuICAgICAgaWYgKHBhY2thZ2VKc29uW2Zvcm1hdFByb3BlcnR5XSAhPT0gb2xkRm9ybWF0UGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVW5hYmxlIHRvIHVwZGF0ZSAnJHtwYWNrYWdlSnNvblBhdGh9JzogRm9ybWF0IHByb3BlcnRpZXMgYCArXG4gICAgICAgICAgICBgKCR7Zm9ybWF0UHJvcGVydGllcy5qb2luKCcsICcpfSkgbWFwIHRvIG1vcmUgdGhhbiBvbmUgZm9ybWF0LXBhdGguYCk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZS5hZGRDaGFuZ2UoXG4gICAgICAgICAgW2Ake2Zvcm1hdFByb3BlcnR5fSR7TkdDQ19QUk9QRVJUWV9FWFRFTlNJT059YF0sIG5ld0Zvcm1hdFBhdGgsIHtiZWZvcmU6IGZvcm1hdFByb3BlcnR5fSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLndyaXRlQ2hhbmdlcyhwYWNrYWdlSnNvblBhdGgsIHBhY2thZ2VKc29uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXZlcnRQYWNrYWdlSnNvbihlbnRyeVBvaW50OiBFbnRyeVBvaW50LCBmb3JtYXRQcm9wZXJ0aWVzOiBFbnRyeVBvaW50SnNvblByb3BlcnR5W10pIHtcbiAgICBpZiAoZm9ybWF0UHJvcGVydGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIE5vIGZvcm1hdCBwcm9wZXJ0aWVzIG5lZWQgcmV2ZXJ0aW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhY2thZ2VKc29uID0gZW50cnlQb2ludC5wYWNrYWdlSnNvbjtcbiAgICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSBqb2luKGVudHJ5UG9pbnQucGF0aCwgJ3BhY2thZ2UuanNvbicpO1xuXG4gICAgLy8gUmV2ZXJ0IGFsbCBwcm9wZXJ0aWVzIGluIGBwYWNrYWdlLmpzb25gIChib3RoIGluIG1lbW9yeSBhbmQgb24gZGlzaykuXG4gICAgLy8gU2luY2UgYHVwZGF0ZVBhY2thZ2VKc29uKClgIG9ubHkgYWRkcyBwcm9wZXJ0aWVzLCBpdCBpcyBzYWZlIHRvIGp1c3QgcmVtb3ZlIHRoZW0gKGlmIHRoZXlcbiAgICAvLyBleGlzdCkuXG4gICAgY29uc3QgdXBkYXRlID0gdGhpcy5wa2dKc29uVXBkYXRlci5jcmVhdGVVcGRhdGUoKTtcblxuICAgIGZvciAoY29uc3QgZm9ybWF0UHJvcGVydHkgb2YgZm9ybWF0UHJvcGVydGllcykge1xuICAgICAgdXBkYXRlLmFkZENoYW5nZShbYCR7Zm9ybWF0UHJvcGVydHl9JHtOR0NDX1BST1BFUlRZX0VYVEVOU0lPTn1gXSwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUud3JpdGVDaGFuZ2VzKHBhY2thZ2VKc29uUGF0aCwgcGFja2FnZUpzb24pO1xuICB9XG59XG4iXX0=