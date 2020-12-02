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
        define("@angular/compiler-cli/src/ngtsc/shims/src/summary_generator", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/typescript", "@angular/compiler-cli/src/ngtsc/shims/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/util");
    var SummaryGenerator = /** @class */ (function () {
        function SummaryGenerator(map) {
            this.map = map;
        }
        SummaryGenerator.prototype.getSummaryFileNames = function () {
            return Array.from(this.map.keys());
        };
        SummaryGenerator.prototype.recognize = function (fileName) {
            return this.map.has(fileName);
        };
        SummaryGenerator.prototype.generate = function (genFilePath, readFile) {
            var e_1, _a, e_2, _b;
            var originalPath = this.map.get(genFilePath);
            var original = readFile(originalPath);
            if (original === null) {
                return null;
            }
            // Collect a list of classes that need to have factory types emitted for them. This list is
            // overly broad as at this point the ts.TypeChecker has not been created and so it can't be used
            // to semantically understand which decorators are Angular decorators. It's okay to output an
            // overly broad set of summary exports as the exports are no-ops anyway, and summaries are a
            // compatibility layer which will be removed after Ivy is enabled.
            var symbolNames = [];
            try {
                for (var _c = tslib_1.__values(original.statements), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var stmt = _d.value;
                    if (ts.isClassDeclaration(stmt)) {
                        // If the class isn't exported, or if it's not decorated, then skip it.
                        if (!isExported(stmt) || stmt.decorators === undefined || stmt.name === undefined) {
                            continue;
                        }
                        symbolNames.push(stmt.name.text);
                    }
                    else if (ts.isExportDeclaration(stmt)) {
                        // Look for an export statement of the form "export {...};". If it doesn't match that, then
                        // skip it.
                        if (stmt.exportClause === undefined || stmt.moduleSpecifier !== undefined ||
                            !ts.isNamedExports(stmt.exportClause)) {
                            continue;
                        }
                        try {
                            for (var _e = (e_2 = void 0, tslib_1.__values(stmt.exportClause.elements)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var specifier = _f.value;
                                // At this point, there is no guarantee that specifier here refers to a class declaration,
                                // but that's okay.
                                // Use specifier.name as that's guaranteed to be the exported name, regardless of whether
                                // specifier.propertyName is set.
                                symbolNames.push(specifier.name.text);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var varLines = symbolNames.map(function (name) { return "export const " + name + "NgSummary: any = null;"; });
            if (varLines.length === 0) {
                // In the event there are no other exports, add an empty export to ensure the generated
                // summary file is still an ES module.
                varLines.push("export const \u0275empty = null;");
            }
            var sourceText = varLines.join('\n');
            var genFile = ts.createSourceFile(genFilePath, sourceText, original.languageVersion, true, ts.ScriptKind.TS);
            if (original.moduleName !== undefined) {
                genFile.moduleName =
                    util_1.generatedModuleName(original.moduleName, original.fileName, '.ngsummary');
            }
            return genFile;
        };
        SummaryGenerator.forRootFiles = function (files) {
            var map = new Map();
            files.filter(function (sourceFile) { return typescript_1.isNonDeclarationTsPath(sourceFile); })
                .forEach(function (sourceFile) {
                return map.set(file_system_1.absoluteFrom(sourceFile.replace(/\.ts$/, '.ngsummary.ts')), sourceFile);
            });
            return new SummaryGenerator(map);
        };
        return SummaryGenerator;
    }());
    exports.SummaryGenerator = SummaryGenerator;
    function isExported(decl) {
        return decl.modifiers !== undefined &&
            decl.modifiers.some(function (mod) { return mod.kind == ts.SyntaxKind.ExportKeyword; });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeV9nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3NoaW1zL3NyYy9zdW1tYXJ5X2dlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFFakMsMkVBQStEO0lBQy9ELGtGQUFpRTtJQUdqRSx1RUFBMkM7SUFFM0M7UUFDRSwwQkFBNEIsR0FBd0M7WUFBeEMsUUFBRyxHQUFILEdBQUcsQ0FBcUM7UUFBRyxDQUFDO1FBRXhFLDhDQUFtQixHQUFuQjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELG9DQUFTLEdBQVQsVUFBVSxRQUF3QjtZQUNoQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxtQ0FBUSxHQUFSLFVBQVMsV0FBMkIsRUFBRSxRQUFvRDs7WUFFeEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUM7WUFDaEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELDJGQUEyRjtZQUMzRixnR0FBZ0c7WUFDaEcsNkZBQTZGO1lBQzdGLDRGQUE0RjtZQUM1RixrRUFBa0U7WUFDbEUsSUFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDOztnQkFDakMsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7b0JBQW5DLElBQU0sSUFB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QUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUMxRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHthYnNvbHV0ZUZyb20sIEFic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi9maWxlX3N5c3RlbSc7XG5pbXBvcnQge2lzTm9uRGVjbGFyYXRpb25Uc1BhdGh9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1NoaW1HZW5lcmF0b3J9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVkTW9kdWxlTmFtZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlHZW5lcmF0b3IgaW1wbGVtZW50cyBTaGltR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwPEFic29sdXRlRnNQYXRoLCBBYnNvbHV0ZUZzUGF0aD4pIHt9XG5cbiAgZ2V0U3VtbWFyeUZpbGVOYW1lcygpOiBBYnNvbHV0ZUZzUGF0aFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpO1xuICB9XG5cbiAgcmVjb2duaXplKGZpbGVOYW1lOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoZmlsZU5hbWUpO1xuICB9XG5cbiAgZ2VuZXJhdGUoZ2VuRmlsZVBhdGg6IEFic29sdXRlRnNQYXRoLCByZWFkRmlsZTogKGZpbGVOYW1lOiBzdHJpbmcpID0+IHRzLlNvdXJjZUZpbGUgfCBudWxsKTpcbiAgICAgIHRzLlNvdXJjZUZpbGV8bnVsbCB7XG4gICAgY29uc3Qgb3JpZ2luYWxQYXRoID0gdGhpcy5tYXAuZ2V0KGdlbkZpbGVQYXRoKSE7XG4gICAgY29uc3Qgb3JpZ2luYWwgPSByZWFkRmlsZShvcmlnaW5hbFBhdGgpO1xuICAgIGlmIChvcmlnaW5hbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdCBhIGxpc3Qgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gaGF2ZSBmYWN0b3J5IHR5cGVzIGVtaXR0ZWQgZm9yIHRoZW0uIFRoaXMgbGlzdCBpc1xuICAgIC8vIG92ZXJseSBicm9hZCBhcyBhdCB0aGlzIHBvaW50IHRoZSB0cy5UeXBlQ2hlY2tlciBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbmQgc28gaXQgY2FuJ3QgYmUgdXNlZFxuICAgIC8vIHRvIHNlbWFudGljYWxseSB1bmRlcnN0YW5kIHdoaWNoIGRlY29yYXRvcnMgYXJlIEFuZ3VsYXIgZGVjb3JhdG9ycy4gSXQncyBva2F5IHRvIG91dHB1dCBhblxuICAgIC8vIG92ZXJseSBicm9hZCBzZXQgb2Ygc3VtbWFyeSBleHBvcnRzIGFzIHRoZSBleHBvcnRzIGFyZSBuby1vcHMgYW55d2F5LCBhbmQgc3VtbWFyaWVzIGFyZSBhXG4gICAgLy8gY29tcGF0aWJpbGl0eSBsYXllciB3aGljaCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgSXZ5IGlzIGVuYWJsZWQuXG4gICAgY29uc3Qgc3ltYm9sTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBzdG10IG9mIG9yaWdpbmFsLnN0YXRlbWVudHMpIHtcbiAgICAgIGlmICh0cy5pc0NsYXNzRGVjbGFyYXRpb24oc3RtdCkpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzbid0IGV4cG9ydGVkLCBvciBpZiBpdCdzIG5vdCBkZWNvcmF0ZWQsIHRoZW4gc2tpcCBpdC5cbiAgICAgICAgaWYgKCFpc0V4cG9ydGVkKHN0bXQpIHx8IHN0bXQuZGVjb3JhdG9ycyA9PT0gdW5kZWZpbmVkIHx8IHN0bXQubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3ltYm9sTmFtZXMucHVzaChzdG10Lm5hbWUudGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKHRzLmlzRXhwb3J0RGVjbGFyYXRpb24oc3RtdCkpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgYW4gZXhwb3J0IHN0YXRlbWVudCBvZiB0aGUgZm9ybSBcImV4cG9ydCB7Li4ufTtcIi4gSWYgaXQgZG9lc24ndCBtYXRjaCB0aGF0LCB0aGVuXG4gICAgICAgIC8vIHNraXAgaXQuXG4gICAgICAgIGlmIChzdG10LmV4cG9ydENsYXVzZSA9PT0gdW5kZWZpbmVkIHx8IHN0bXQubW9kdWxlU3BlY2lmaWVyICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICF0cy5pc05hbWVkRXhwb3J0cyhzdG10LmV4cG9ydENsYXVzZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3BlY2lmaWVyIG9mIHN0bXQuZXhwb3J0Q2xhdXNlLmVsZW1lbnRzKSB7XG4gICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgc3BlY2lmaWVyIGhlcmUgcmVmZXJzIHRvIGEgY2xhc3MgZGVjbGFyYXRpb24sXG4gICAgICAgICAgLy8gYnV0IHRoYXQncyBva2F5LlxuXG4gICAgICAgICAgLy8gVXNlIHNwZWNpZmllci5uYW1lIGFzIHRoYXQncyBndWFyYW50ZWVkIHRvIGJlIHRoZSBleHBvcnRlZCBuYW1lLCByZWdhcmRsZXNzIG9mIHdoZXRoZXJcbiAgICAgICAgICAvLyBzcGVjaWZpZXIucHJvcGVydHlOYW1lIGlzIHNldC5cbiAgICAgICAgICBzeW1ib2xOYW1lcy5wdXNoKHNwZWNpZmllci5uYW1lLnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFyTGluZXMgPSBzeW1ib2xOYW1lcy5tYXAobmFtZSA9PiBgZXhwb3J0IGNvbnN0ICR7bmFtZX1OZ1N1bW1hcnk6IGFueSA9IG51bGw7YCk7XG5cbiAgICBpZiAodmFyTGluZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJbiB0aGUgZXZlbnQgdGhlcmUgYXJlIG5vIG90aGVyIGV4cG9ydHMsIGFkZCBhbiBlbXB0eSBleHBvcnQgdG8gZW5zdXJlIHRoZSBnZW5lcmF0ZWRcbiAgICAgIC8vIHN1bW1hcnkgZmlsZSBpcyBzdGlsbCBhbiBFUyBtb2R1bGUuXG4gICAgICB2YXJMaW5lcy5wdXNoKGBleHBvcnQgY29uc3QgybVlbXB0eSA9IG51bGw7YCk7XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZVRleHQgPSB2YXJMaW5lcy5qb2luKCdcXG4nKTtcbiAgICBjb25zdCBnZW5GaWxlID0gdHMuY3JlYXRlU291cmNlRmlsZShcbiAgICAgICAgZ2VuRmlsZVBhdGgsIHNvdXJjZVRleHQsIG9yaWdpbmFsLmxhbmd1YWdlVmVyc2lvbiwgdHJ1ZSwgdHMuU2NyaXB0S2luZC5UUyk7XG4gICAgaWYgKG9yaWdpbmFsLm1vZHVsZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2VuRmlsZS5tb2R1bGVOYW1lID1cbiAgICAgICAgICBnZW5lcmF0ZWRNb2R1bGVOYW1lKG9yaWdpbmFsLm1vZHVsZU5hbWUsIG9yaWdpbmFsLmZpbGVOYW1lLCAnLm5nc3VtbWFyeScpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VuRmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290RmlsZXMoZmlsZXM6IFJlYWRvbmx5QXJyYXk8QWJzb2x1dGVGc1BhdGg+KTogU3VtbWFyeUdlbmVyYXRvciB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxBYnNvbHV0ZUZzUGF0aCwgQWJzb2x1dGVGc1BhdGg+KCk7XG4gICAgZmlsZXMuZmlsdGVyKHNvdXJjZUZpbGUgPT4gaXNOb25EZWNsYXJhdGlvblRzUGF0aChzb3VyY2VGaWxlKSlcbiAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICBzb3VyY2VGaWxlID0+XG4gICAgICAgICAgICAgICAgbWFwLnNldChhYnNvbHV0ZUZyb20oc291cmNlRmlsZS5yZXBsYWNlKC9cXC50cyQvLCAnLm5nc3VtbWFyeS50cycpKSwgc291cmNlRmlsZSkpO1xuICAgIHJldHVybiBuZXcgU3VtbWFyeUdlbmVyYXRvcihtYXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXhwb3J0ZWQoZGVjbDogdHMuRGVjbGFyYXRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuIGRlY2wubW9kaWZpZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGRlY2wubW9kaWZpZXJzLnNvbWUobW9kID0+IG1vZC5raW5kID09IHRzLlN5bnRheEtpbmQuRXhwb3J0S2V5d29yZCk7XG59XG4iXX0=