(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/shims/src/factory_generator", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/typescript", "@angular/compiler-cli/src/ngtsc/shims/src/util"], factory);
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
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/util");
    var TS_DTS_SUFFIX = /(\.d)?\.ts$/;
    var STRIP_NG_FACTORY = /(.*)NgFactory$/;
    /**
     * Generates ts.SourceFiles which contain variable declarations for NgFactories for every exported
     * class of an input ts.SourceFile.
     */
    var FactoryGenerator = /** @class */ (function () {
        function FactoryGenerator(map) {
            this.map = map;
        }
        Object.defineProperty(FactoryGenerator.prototype, "factoryFileMap", {
            get: function () {
                return this.map;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FactoryGenerator.prototype, "factoryFileNames", {
            get: function () {
                return Array.from(this.map.keys());
            },
            enumerable: true,
            configurable: true
        });
        FactoryGenerator.prototype.recognize = function (fileName) {
            return this.map.has(fileName);
        };
        FactoryGenerator.prototype.generate = function (genFilePath, readFile) {
            var originalPath = this.map.get(genFilePath);
            var original = readFile(originalPath);
            if (original === null) {
                return null;
            }
            var relativePathToSource = './' + file_system_1.basename(original.fileName).replace(TS_DTS_SUFFIX, '');
            // Collect a list of classes that need to have factory types emitted for them. This list is
            // overly broad as at this point the ts.TypeChecker hasn't been created, and can't be used to
            // semantically understand which decorated types are actually decorated with Angular decorators.
            //
            // The exports generated here are pruned in the factory transform during emit.
            var symbolNames = original
                .statements
                // Pick out top level class declarations...
                .filter(ts.isClassDeclaration)
                // which are named, exported, and have decorators.
                .filter(function (decl) { return isExported(decl) && decl.decorators !== undefined &&
                decl.name !== undefined; })
                // Grab the symbol name.
                .map(function (decl) { return decl.name.text; });
            var sourceText = '';
            // If there is a top-level comment in the original file, copy it over at the top of the
            // generated factory file. This is important for preserving any load-bearing jsdoc comments.
            var leadingComment = getFileoverviewComment(original);
            if (leadingComment !== null) {
                // Leading comments must be separated from the rest of the contents by a blank line.
                sourceText = leadingComment + '\n\n';
            }
            if (symbolNames.length > 0) {
                // For each symbol name, generate a constant export of the corresponding NgFactory.
                // This will encompass a lot of symbols which don't need factories, but that's okay
                // because it won't miss any that do.
                var varLines = symbolNames.map(function (name) { return "export const " + name + "NgFactory: i0.\u0275NgModuleFactory<any> = new i0.\u0275NgModuleFactory(" + name + ");"; });
                sourceText += tslib_1.__spread([
                    // This might be incorrect if the current package being compiled is Angular core, but it's
                    // okay to leave in at type checking time. TypeScript can handle this reference via its path
                    // mapping, but downstream bundlers can't. If the current package is core itself, this will
                    // be replaced in the factory transformer before emit.
                    "import * as i0 from '@angular/core';",
                    "import {" + symbolNames.join(', ') + "} from '" + relativePathToSource + "';"
                ], varLines).join('\n');
            }
            // Add an extra export to ensure this module has at least one. It'll be removed later in the
            // factory transformer if it ends up not being needed.
            sourceText += '\nexport const ɵNonEmptyModule = true;';
            var genFile = ts.createSourceFile(genFilePath, sourceText, original.languageVersion, true, ts.ScriptKind.TS);
            if (original.moduleName !== undefined) {
                genFile.moduleName =
                    util_1.generatedModuleName(original.moduleName, original.fileName, '.ngfactory');
            }
            return genFile;
        };
        FactoryGenerator.forRootFiles = function (files) {
            var map = new Map();
            files.filter(function (sourceFile) { return typescript_1.isNonDeclarationTsPath(sourceFile); })
                .forEach(function (sourceFile) {
                return map.set(file_system_1.absoluteFrom(sourceFile.replace(/\.ts$/, '.ngfactory.ts')), sourceFile);
            });
            return new FactoryGenerator(map);
        };
        return FactoryGenerator;
    }());
    exports.FactoryGenerator = FactoryGenerator;
    function isExported(decl) {
        return decl.modifiers !== undefined &&
            decl.modifiers.some(function (mod) { return mod.kind == ts.SyntaxKind.ExportKeyword; });
    }
    function generatedFactoryTransform(factoryMap, importRewriter) {
        return function (context) {
            return function (file) {
                return transformFactorySourceFile(factoryMap, context, importRewriter, file);
            };
        };
    }
    exports.generatedFactoryTransform = generatedFactoryTransform;
    function transformFactorySourceFile(factoryMap, context, importRewriter, file) {
        var e_1, _a;
        // If this is not a generated file, it won't have factory info associated with it.
        if (!factoryMap.has(file.fileName)) {
            // Don't transform non-generated code.
            return file;
        }
        var _b = factoryMap.get(file.fileName), moduleSymbolNames = _b.moduleSymbolNames, sourceFilePath = _b.sourceFilePath;
        file = ts.getMutableClone(file);
        // Not every exported factory statement is valid. They were generated before the program was
        // analyzed, and before ngtsc knew which symbols were actually NgModules. factoryMap contains
        // that knowledge now, so this transform filters the statement list and removes exported factories
        // that aren't actually factories.
        //
        // This could leave the generated factory file empty. To prevent this (it causes issues with
        // closure compiler) a 'ɵNonEmptyModule' export was added when the factory shim was created.
        // Preserve that export if needed, and remove it otherwise.
        //
        // Additionally, an import to @angular/core is generated, but the current compilation unit could
        // actually be @angular/core, in which case such an import is invalid and should be replaced with
        // the proper path to access Ivy symbols in core.
        // The filtered set of statements.
        var transformedStatements = [];
        // The statement identified as the ɵNonEmptyModule export.
        var nonEmptyExport = null;
        // Extracted identifiers which refer to import statements from @angular/core.
        var coreImportIdentifiers = new Set();
        try {
            // Consider all the statements.
            for (var _c = tslib_1.__values(file.statements), _d = _c.next(); !_d.done; _d = _c.next()) {
                var stmt = _d.value;
                // Look for imports to @angular/core.
                if (ts.isImportDeclaration(stmt) && ts.isStringLiteral(stmt.moduleSpecifier) &&
                    stmt.moduleSpecifier.text === '@angular/core') {
                    // Update the import path to point to the correct file using the ImportRewriter.
                    var rewrittenModuleSpecifier = importRewriter.rewriteSpecifier('@angular/core', sourceFilePath);
                    if (rewrittenModuleSpecifier !== stmt.moduleSpecifier.text) {
                        transformedStatements.push(ts.updateImportDeclaration(stmt, stmt.decorators, stmt.modifiers, stmt.importClause, ts.createStringLiteral(rewrittenModuleSpecifier)));
                        // Record the identifier by which this imported module goes, so references to its symbols
                        // can be discovered later.
                        if (stmt.importClause !== undefined && stmt.importClause.namedBindings !== undefined &&
                            ts.isNamespaceImport(stmt.importClause.namedBindings)) {
                            coreImportIdentifiers.add(stmt.importClause.namedBindings.name.text);
                        }
                    }
                    else {
                        transformedStatements.push(stmt);
                    }
                }
                else if (ts.isVariableStatement(stmt) && stmt.declarationList.declarations.length === 1) {
                    var decl = stmt.declarationList.declarations[0];
                    // If this is the ɵNonEmptyModule export, then save it for later.
                    if (ts.isIdentifier(decl.name)) {
                        if (decl.name.text === 'ɵNonEmptyModule') {
                            nonEmptyExport = stmt;
                            continue;
                        }
                        // Otherwise, check if this export is a factory for a known NgModule, and retain it if so.
                        var match = STRIP_NG_FACTORY.exec(decl.name.text);
                        if (match !== null && moduleSymbolNames.has(match[1])) {
                            transformedStatements.push(stmt);
                        }
                    }
                    else {
                        // Leave the statement alone, as it can't be understood.
                        transformedStatements.push(stmt);
                    }
                }
                else {
                    // Include non-variable statements (imports, etc).
                    transformedStatements.push(stmt);
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
        // Check whether the empty module export is still needed.
        if (!transformedStatements.some(ts.isVariableStatement) && nonEmptyExport !== null) {
            // If the resulting file has no factories, include an empty export to
            // satisfy closure compiler.
            transformedStatements.push(nonEmptyExport);
        }
        file.statements = ts.createNodeArray(transformedStatements);
        // If any imports to @angular/core were detected and rewritten (which happens when compiling
        // @angular/core), go through the SourceFile and rewrite references to symbols imported from core.
        if (coreImportIdentifiers.size > 0) {
            var visit_1 = function (node) {
                node = ts.visitEachChild(node, function (child) { return visit_1(child); }, context);
                // Look for expressions of the form "i.s" where 'i' is a detected name for an @angular/core
                // import that was changed above. Rewrite 's' using the ImportResolver.
                if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.expression) &&
                    coreImportIdentifiers.has(node.expression.text)) {
                    // This is an import of a symbol from @angular/core. Transform it with the importRewriter.
                    var rewrittenSymbol = importRewriter.rewriteSymbol(node.name.text, '@angular/core');
                    if (rewrittenSymbol !== node.name.text) {
                        var updated = ts.updatePropertyAccess(node, node.expression, ts.createIdentifier(rewrittenSymbol));
                        node = updated;
                    }
                }
                return node;
            };
            file = visit_1(file);
        }
        return file;
    }
    /**
     * Parses and returns the comment text of a \@fileoverview comment in the given source file.
     */
    function getFileoverviewComment(sourceFile) {
        var text = sourceFile.getFullText();
        var trivia = text.substring(0, sourceFile.getStart());
        var leadingComments = ts.getLeadingCommentRanges(trivia, 0);
        if (!leadingComments || leadingComments.length === 0) {
            return null;
        }
        var comment = leadingComments[0];
        if (comment.kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
            return null;
        }
        // Only comments separated with a \n\n from the file contents are considered file-level comments
        // in TypeScript.
        if (text.substring(comment.end, comment.end + 2) !== '\n\n') {
            return null;
        }
        var commentText = text.substring(comment.pos, comment.end);
        // Closure Compiler ignores @suppress and similar if the comment contains @license.
        if (commentText.indexOf('@license') !== -1) {
            return null;
        }
        return commentText;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeV9nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3NoaW1zL3NyYy9mYWN0b3J5X2dlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFFakMsMkVBQXlFO0lBRXpFLGtGQUFpRTtJQUdqRSx1RUFBMkM7SUFFM0MsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLElBQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUM7OztPQUdHO0lBQ0g7UUFDRSwwQkFBNEIsR0FBd0M7WUFBeEMsUUFBRyxHQUFILEdBQUcsQ0FBcUM7UUFBRyxDQUFDO1FBRXhFLHNCQUFJLDRDQUFjO2lCQUFsQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSw4Q0FBZ0I7aUJBQXBCO2dCQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQzs7O1dBQUE7UUFFRCxvQ0FBUyxHQUFULFVBQVUsUUFBd0I7WUFDaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsbUNBQVEsR0FBUixVQUFTLFdBQTJCLEVBQUUsUUFBb0Q7WUFFeEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUM7WUFDaEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElB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Y2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHthYnNvbHV0ZUZyb20sIEFic29sdXRlRnNQYXRoLCBiYXNlbmFtZX0gZnJvbSAnLi4vLi4vZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtJbXBvcnRSZXdyaXRlcn0gZnJvbSAnLi4vLi4vaW1wb3J0cyc7XG5pbXBvcnQge2lzTm9uRGVjbGFyYXRpb25Uc1BhdGh9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1NoaW1HZW5lcmF0b3J9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVkTW9kdWxlTmFtZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgVFNfRFRTX1NVRkZJWCA9IC8oXFwuZCk/XFwudHMkLztcbmNvbnN0IFNUUklQX05HX0ZBQ1RPUlkgPSAvKC4qKU5nRmFjdG9yeSQvO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0cy5Tb3VyY2VGaWxlcyB3aGljaCBjb250YWluIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBmb3IgTmdGYWN0b3JpZXMgZm9yIGV2ZXJ5IGV4cG9ydGVkXG4gKiBjbGFzcyBvZiBhbiBpbnB1dCB0cy5Tb3VyY2VGaWxlLlxuICovXG5leHBvcnQgY2xhc3MgRmFjdG9yeUdlbmVyYXRvciBpbXBsZW1lbnRzIFNoaW1HZW5lcmF0b3Ige1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXA8QWJzb2x1dGVGc1BhdGgsIEFic29sdXRlRnNQYXRoPikge31cblxuICBnZXQgZmFjdG9yeUZpbGVNYXAoKTogTWFwPEFic29sdXRlRnNQYXRoLCBBYnNvbHV0ZUZzUGF0aD4ge1xuICAgIHJldHVybiB0aGlzLm1hcDtcbiAgfVxuXG4gIGdldCBmYWN0b3J5RmlsZU5hbWVzKCk6IEFic29sdXRlRnNQYXRoW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubWFwLmtleXMoKSk7XG4gIH1cblxuICByZWNvZ25pemUoZmlsZU5hbWU6IEFic29sdXRlRnNQYXRoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhcyhmaWxlTmFtZSk7XG4gIH1cblxuICBnZW5lcmF0ZShnZW5GaWxlUGF0aDogQWJzb2x1dGVGc1BhdGgsIHJlYWRGaWxlOiAoZmlsZU5hbWU6IHN0cmluZykgPT4gdHMuU291cmNlRmlsZSB8IG51bGwpOlxuICAgICAgdHMuU291cmNlRmlsZXxudWxsIHtcbiAgICBjb25zdCBvcmlnaW5hbFBhdGggPSB0aGlzLm1hcC5nZXQoZ2VuRmlsZVBhdGgpITtcbiAgICBjb25zdCBvcmlnaW5hbCA9IHJlYWRGaWxlKG9yaWdpbmFsUGF0aCk7XG4gICAgaWYgKG9yaWdpbmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGl2ZVBhdGhUb1NvdXJjZSA9ICcuLycgKyBiYXNlbmFtZShvcmlnaW5hbC5maWxlTmFtZSkucmVwbGFjZShUU19EVFNfU1VGRklYLCAnJyk7XG4gICAgLy8gQ29sbGVjdCBhIGxpc3Qgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gaGF2ZSBmYWN0b3J5IHR5cGVzIGVtaXR0ZWQgZm9yIHRoZW0uIFRoaXMgbGlzdCBpc1xuICAgIC8vIG92ZXJseSBicm9hZCBhcyBhdCB0aGlzIHBvaW50IHRoZSB0cy5UeXBlQ2hlY2tlciBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBhbmQgY2FuJ3QgYmUgdXNlZCB0b1xuICAgIC8vIHNlbWFudGljYWxseSB1bmRlcnN0YW5kIHdoaWNoIGRlY29yYXRlZCB0eXBlcyBhcmUgYWN0dWFsbHkgZGVjb3JhdGVkIHdpdGggQW5ndWxhciBkZWNvcmF0b3JzLlxuICAgIC8vXG4gICAgLy8gVGhlIGV4cG9ydHMgZ2VuZXJhdGVkIGhlcmUgYXJlIHBydW5lZCBpbiB0aGUgZmFjdG9yeSB0cmFuc2Zvcm0gZHVyaW5nIGVtaXQuXG4gICAgY29uc3Qgc3ltYm9sTmFtZXMgPSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGljayBvdXQgdG9wIGxldmVsIGNsYXNzIGRlY2xhcmF0aW9ucy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodHMuaXNDbGFzc0RlY2xhcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFyZSBuYW1lZCwgZXhwb3J0ZWQsIGFuZCBoYXZlIGRlY29yYXRvcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbCA9PiBpc0V4cG9ydGVkKGRlY2wpICYmIGRlY2wuZGVjb3JhdG9ycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsLm5hbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSBzeW1ib2wgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGRlY2wgPT4gZGVjbC5uYW1lIS50ZXh0KTtcblxuXG4gICAgbGV0IHNvdXJjZVRleHQgPSAnJztcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgdG9wLWxldmVsIGNvbW1lbnQgaW4gdGhlIG9yaWdpbmFsIGZpbGUsIGNvcHkgaXQgb3ZlciBhdCB0aGUgdG9wIG9mIHRoZVxuICAgIC8vIGdlbmVyYXRlZCBmYWN0b3J5IGZpbGUuIFRoaXMgaXMgaW1wb3J0YW50IGZvciBwcmVzZXJ2aW5nIGFueSBsb2FkLWJlYXJpbmcganNkb2MgY29tbWVudHMuXG4gICAgY29uc3QgbGVhZGluZ0NvbW1lbnQgPSBnZXRGaWxlb3ZlcnZpZXdDb21tZW50KG9yaWdpbmFsKTtcbiAgICBpZiAobGVhZGluZ0NvbW1lbnQgIT09IG51bGwpIHtcbiAgICAgIC8vIExlYWRpbmcgY29tbWVudHMgbXVzdCBiZSBzZXBhcmF0ZWQgZnJvbSB0aGUgcmVzdCBvZiB0aGUgY29udGVudHMgYnkgYSBibGFuayBsaW5lLlxuICAgICAgc291cmNlVGV4dCA9IGxlYWRpbmdDb21tZW50ICsgJ1xcblxcbic7XG4gICAgfVxuXG4gICAgaWYgKHN5bWJvbE5hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZvciBlYWNoIHN5bWJvbCBuYW1lLCBnZW5lcmF0ZSBhIGNvbnN0YW50IGV4cG9ydCBvZiB0aGUgY29ycmVzcG9uZGluZyBOZ0ZhY3RvcnkuXG4gICAgICAvLyBUaGlzIHdpbGwgZW5jb21wYXNzIGEgbG90IG9mIHN5bWJvbHMgd2hpY2ggZG9uJ3QgbmVlZCBmYWN0b3JpZXMsIGJ1dCB0aGF0J3Mgb2theVxuICAgICAgLy8gYmVjYXVzZSBpdCB3b24ndCBtaXNzIGFueSB0aGF0IGRvLlxuICAgICAgY29uc3QgdmFyTGluZXMgPSBzeW1ib2xOYW1lcy5tYXAoXG4gICAgICAgICAgbmFtZSA9PiBgZXhwb3J0IGNvbnN0ICR7XG4gICAgICAgICAgICAgIG5hbWV9TmdGYWN0b3J5OiBpMC7JtU5nTW9kdWxlRmFjdG9yeTxhbnk+ID0gbmV3IGkwLsm1TmdNb2R1bGVGYWN0b3J5KCR7bmFtZX0pO2ApO1xuICAgICAgc291cmNlVGV4dCArPSBbXG4gICAgICAgIC8vIFRoaXMgbWlnaHQgYmUgaW5jb3JyZWN0IGlmIHRoZSBjdXJyZW50IHBhY2thZ2UgYmVpbmcgY29tcGlsZWQgaXMgQW5ndWxhciBjb3JlLCBidXQgaXQnc1xuICAgICAgICAvLyBva2F5IHRvIGxlYXZlIGluIGF0IHR5cGUgY2hlY2tpbmcgdGltZS4gVHlwZVNjcmlwdCBjYW4gaGFuZGxlIHRoaXMgcmVmZXJlbmNlIHZpYSBpdHMgcGF0aFxuICAgICAgICAvLyBtYXBwaW5nLCBidXQgZG93bnN0cmVhbSBidW5kbGVycyBjYW4ndC4gSWYgdGhlIGN1cnJlbnQgcGFja2FnZSBpcyBjb3JlIGl0c2VsZiwgdGhpcyB3aWxsXG4gICAgICAgIC8vIGJlIHJlcGxhY2VkIGluIHRoZSBmYWN0b3J5IHRyYW5zZm9ybWVyIGJlZm9yZSBlbWl0LlxuICAgICAgICBgaW1wb3J0ICogYXMgaTAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7YCxcbiAgICAgICAgYGltcG9ydCB7JHtzeW1ib2xOYW1lcy5qb2luKCcsICcpfX0gZnJvbSAnJHtyZWxhdGl2ZVBhdGhUb1NvdXJjZX0nO2AsXG4gICAgICAgIC4uLnZhckxpbmVzLFxuICAgICAgXS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgZXhwb3J0IHRvIGVuc3VyZSB0aGlzIG1vZHVsZSBoYXMgYXQgbGVhc3Qgb25lLiBJdCdsbCBiZSByZW1vdmVkIGxhdGVyIGluIHRoZVxuICAgIC8vIGZhY3RvcnkgdHJhbnNmb3JtZXIgaWYgaXQgZW5kcyB1cCBub3QgYmVpbmcgbmVlZGVkLlxuICAgIHNvdXJjZVRleHQgKz0gJ1xcbmV4cG9ydCBjb25zdCDJtU5vbkVtcHR5TW9kdWxlID0gdHJ1ZTsnO1xuXG4gICAgY29uc3QgZ2VuRmlsZSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUoXG4gICAgICAgIGdlbkZpbGVQYXRoLCBzb3VyY2VUZXh0LCBvcmlnaW5hbC5sYW5ndWFnZVZlcnNpb24sIHRydWUsIHRzLlNjcmlwdEtpbmQuVFMpO1xuICAgIGlmIChvcmlnaW5hbC5tb2R1bGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdlbkZpbGUubW9kdWxlTmFtZSA9XG4gICAgICAgICAgZ2VuZXJhdGVkTW9kdWxlTmFtZShvcmlnaW5hbC5tb2R1bGVOYW1lLCBvcmlnaW5hbC5maWxlTmFtZSwgJy5uZ2ZhY3RvcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbkZpbGU7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdEZpbGVzKGZpbGVzOiBSZWFkb25seUFycmF5PEFic29sdXRlRnNQYXRoPik6IEZhY3RvcnlHZW5lcmF0b3Ige1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8QWJzb2x1dGVGc1BhdGgsIEFic29sdXRlRnNQYXRoPigpO1xuICAgIGZpbGVzLmZpbHRlcihzb3VyY2VGaWxlID0+IGlzTm9uRGVjbGFyYXRpb25Uc1BhdGgoc291cmNlRmlsZSkpXG4gICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgc291cmNlRmlsZSA9PlxuICAgICAgICAgICAgICAgIG1hcC5zZXQoYWJzb2x1dGVGcm9tKHNvdXJjZUZpbGUucmVwbGFjZSgvXFwudHMkLywgJy5uZ2ZhY3RvcnkudHMnKSksIHNvdXJjZUZpbGUpKTtcbiAgICByZXR1cm4gbmV3IEZhY3RvcnlHZW5lcmF0b3IobWFwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cG9ydGVkKGRlY2w6IHRzLkRlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gIHJldHVybiBkZWNsLm1vZGlmaWVycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBkZWNsLm1vZGlmaWVycy5zb21lKG1vZCA9PiBtb2Qua2luZCA9PSB0cy5TeW50YXhLaW5kLkV4cG9ydEtleXdvcmQpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY3RvcnlJbmZvIHtcbiAgc291cmNlRmlsZVBhdGg6IHN0cmluZztcbiAgbW9kdWxlU3ltYm9sTmFtZXM6IFNldDxzdHJpbmc+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVkRmFjdG9yeVRyYW5zZm9ybShcbiAgICBmYWN0b3J5TWFwOiBNYXA8c3RyaW5nLCBGYWN0b3J5SW5mbz4sXG4gICAgaW1wb3J0UmV3cml0ZXI6IEltcG9ydFJld3JpdGVyKTogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+IHtcbiAgcmV0dXJuIChjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQpOiB0cy5UcmFuc2Zvcm1lcjx0cy5Tb3VyY2VGaWxlPiA9PiB7XG4gICAgcmV0dXJuIChmaWxlOiB0cy5Tb3VyY2VGaWxlKTogdHMuU291cmNlRmlsZSA9PiB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtRmFjdG9yeVNvdXJjZUZpbGUoZmFjdG9yeU1hcCwgY29udGV4dCwgaW1wb3J0UmV3cml0ZXIsIGZpbGUpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZhY3RvcnlTb3VyY2VGaWxlKFxuICAgIGZhY3RvcnlNYXA6IE1hcDxzdHJpbmcsIEZhY3RvcnlJbmZvPiwgY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0LFxuICAgIGltcG9ydFJld3JpdGVyOiBJbXBvcnRSZXdyaXRlciwgZmlsZTogdHMuU291cmNlRmlsZSk6IHRzLlNvdXJjZUZpbGUge1xuICAvLyBJZiB0aGlzIGlzIG5vdCBhIGdlbmVyYXRlZCBmaWxlLCBpdCB3b24ndCBoYXZlIGZhY3RvcnkgaW5mbyBhc3NvY2lhdGVkIHdpdGggaXQuXG4gIGlmICghZmFjdG9yeU1hcC5oYXMoZmlsZS5maWxlTmFtZSkpIHtcbiAgICAvLyBEb24ndCB0cmFuc2Zvcm0gbm9uLWdlbmVyYXRlZCBjb2RlLlxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgY29uc3Qge21vZHVsZVN5bWJvbE5hbWVzLCBzb3VyY2VGaWxlUGF0aH0gPSBmYWN0b3J5TWFwLmdldChmaWxlLmZpbGVOYW1lKSE7XG5cbiAgZmlsZSA9IHRzLmdldE11dGFibGVDbG9uZShmaWxlKTtcblxuICAvLyBOb3QgZXZlcnkgZXhwb3J0ZWQgZmFjdG9yeSBzdGF0ZW1lbnQgaXMgdmFsaWQuIFRoZXkgd2VyZSBnZW5lcmF0ZWQgYmVmb3JlIHRoZSBwcm9ncmFtIHdhc1xuICAvLyBhbmFseXplZCwgYW5kIGJlZm9yZSBuZ3RzYyBrbmV3IHdoaWNoIHN5bWJvbHMgd2VyZSBhY3R1YWxseSBOZ01vZHVsZXMuIGZhY3RvcnlNYXAgY29udGFpbnNcbiAgLy8gdGhhdCBrbm93bGVkZ2Ugbm93LCBzbyB0aGlzIHRyYW5zZm9ybSBmaWx0ZXJzIHRoZSBzdGF0ZW1lbnQgbGlzdCBhbmQgcmVtb3ZlcyBleHBvcnRlZCBmYWN0b3JpZXNcbiAgLy8gdGhhdCBhcmVuJ3QgYWN0dWFsbHkgZmFjdG9yaWVzLlxuICAvL1xuICAvLyBUaGlzIGNvdWxkIGxlYXZlIHRoZSBnZW5lcmF0ZWQgZmFjdG9yeSBmaWxlIGVtcHR5LiBUbyBwcmV2ZW50IHRoaXMgKGl0IGNhdXNlcyBpc3N1ZXMgd2l0aFxuICAvLyBjbG9zdXJlIGNvbXBpbGVyKSBhICfJtU5vbkVtcHR5TW9kdWxlJyBleHBvcnQgd2FzIGFkZGVkIHdoZW4gdGhlIGZhY3Rvcnkgc2hpbSB3YXMgY3JlYXRlZC5cbiAgLy8gUHJlc2VydmUgdGhhdCBleHBvcnQgaWYgbmVlZGVkLCBhbmQgcmVtb3ZlIGl0IG90aGVyd2lzZS5cbiAgLy9cbiAgLy8gQWRkaXRpb25hbGx5LCBhbiBpbXBvcnQgdG8gQGFuZ3VsYXIvY29yZSBpcyBnZW5lcmF0ZWQsIGJ1dCB0aGUgY3VycmVudCBjb21waWxhdGlvbiB1bml0IGNvdWxkXG4gIC8vIGFjdHVhbGx5IGJlIEBhbmd1bGFyL2NvcmUsIGluIHdoaWNoIGNhc2Ugc3VjaCBhbiBpbXBvcnQgaXMgaW52YWxpZCBhbmQgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGhcbiAgLy8gdGhlIHByb3BlciBwYXRoIHRvIGFjY2VzcyBJdnkgc3ltYm9scyBpbiBjb3JlLlxuXG4gIC8vIFRoZSBmaWx0ZXJlZCBzZXQgb2Ygc3RhdGVtZW50cy5cbiAgY29uc3QgdHJhbnNmb3JtZWRTdGF0ZW1lbnRzOiB0cy5TdGF0ZW1lbnRbXSA9IFtdO1xuXG4gIC8vIFRoZSBzdGF0ZW1lbnQgaWRlbnRpZmllZCBhcyB0aGUgybVOb25FbXB0eU1vZHVsZSBleHBvcnQuXG4gIGxldCBub25FbXB0eUV4cG9ydDogdHMuU3RhdGVtZW50fG51bGwgPSBudWxsO1xuXG4gIC8vIEV4dHJhY3RlZCBpZGVudGlmaWVycyB3aGljaCByZWZlciB0byBpbXBvcnQgc3RhdGVtZW50cyBmcm9tIEBhbmd1bGFyL2NvcmUuXG4gIGNvbnN0IGNvcmVJbXBvcnRJZGVudGlmaWVycyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIC8vIENvbnNpZGVyIGFsbCB0aGUgc3RhdGVtZW50cy5cbiAgZm9yIChjb25zdCBzdG10IG9mIGZpbGUuc3RhdGVtZW50cykge1xuICAgIC8vIExvb2sgZm9yIGltcG9ydHMgdG8gQGFuZ3VsYXIvY29yZS5cbiAgICBpZiAodHMuaXNJbXBvcnREZWNsYXJhdGlvbihzdG10KSAmJiB0cy5pc1N0cmluZ0xpdGVyYWwoc3RtdC5tb2R1bGVTcGVjaWZpZXIpICYmXG4gICAgICAgIHN0bXQubW9kdWxlU3BlY2lmaWVyLnRleHQgPT09ICdAYW5ndWxhci9jb3JlJykge1xuICAgICAgLy8gVXBkYXRlIHRoZSBpbXBvcnQgcGF0aCB0byBwb2ludCB0byB0aGUgY29ycmVjdCBmaWxlIHVzaW5nIHRoZSBJbXBvcnRSZXdyaXRlci5cbiAgICAgIGNvbnN0IHJld3JpdHRlbk1vZHVsZVNwZWNpZmllciA9XG4gICAgICAgICAgaW1wb3J0UmV3cml0ZXIucmV3cml0ZVNwZWNpZmllcignQGFuZ3VsYXIvY29yZScsIHNvdXJjZUZpbGVQYXRoKTtcbiAgICAgIGlmIChyZXdyaXR0ZW5Nb2R1bGVTcGVjaWZpZXIgIT09IHN0bXQubW9kdWxlU3BlY2lmaWVyLnRleHQpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRTdGF0ZW1lbnRzLnB1c2godHMudXBkYXRlSW1wb3J0RGVjbGFyYXRpb24oXG4gICAgICAgICAgICBzdG10LCBzdG10LmRlY29yYXRvcnMsIHN0bXQubW9kaWZpZXJzLCBzdG10LmltcG9ydENsYXVzZSxcbiAgICAgICAgICAgIHRzLmNyZWF0ZVN0cmluZ0xpdGVyYWwocmV3cml0dGVuTW9kdWxlU3BlY2lmaWVyKSkpO1xuXG4gICAgICAgIC8vIFJlY29yZCB0aGUgaWRlbnRpZmllciBieSB3aGljaCB0aGlzIGltcG9ydGVkIG1vZHVsZSBnb2VzLCBzbyByZWZlcmVuY2VzIHRvIGl0cyBzeW1ib2xzXG4gICAgICAgIC8vIGNhbiBiZSBkaXNjb3ZlcmVkIGxhdGVyLlxuICAgICAgICBpZiAoc3RtdC5pbXBvcnRDbGF1c2UgIT09IHVuZGVmaW5lZCAmJiBzdG10LmltcG9ydENsYXVzZS5uYW1lZEJpbmRpbmdzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRzLmlzTmFtZXNwYWNlSW1wb3J0KHN0bXQuaW1wb3J0Q2xhdXNlLm5hbWVkQmluZGluZ3MpKSB7XG4gICAgICAgICAgY29yZUltcG9ydElkZW50aWZpZXJzLmFkZChzdG10LmltcG9ydENsYXVzZS5uYW1lZEJpbmRpbmdzLm5hbWUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU3RhdGVtZW50cy5wdXNoKHN0bXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHMuaXNWYXJpYWJsZVN0YXRlbWVudChzdG10KSAmJiBzdG10LmRlY2xhcmF0aW9uTGlzdC5kZWNsYXJhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBkZWNsID0gc3RtdC5kZWNsYXJhdGlvbkxpc3QuZGVjbGFyYXRpb25zWzBdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIHRoZSDJtU5vbkVtcHR5TW9kdWxlIGV4cG9ydCwgdGhlbiBzYXZlIGl0IGZvciBsYXRlci5cbiAgICAgIGlmICh0cy5pc0lkZW50aWZpZXIoZGVjbC5uYW1lKSkge1xuICAgICAgICBpZiAoZGVjbC5uYW1lLnRleHQgPT09ICfJtU5vbkVtcHR5TW9kdWxlJykge1xuICAgICAgICAgIG5vbkVtcHR5RXhwb3J0ID0gc3RtdDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgdGhpcyBleHBvcnQgaXMgYSBmYWN0b3J5IGZvciBhIGtub3duIE5nTW9kdWxlLCBhbmQgcmV0YWluIGl0IGlmIHNvLlxuICAgICAgICBjb25zdCBtYXRjaCA9IFNUUklQX05HX0ZBQ1RPUlkuZXhlYyhkZWNsLm5hbWUudGV4dCk7XG4gICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtb2R1bGVTeW1ib2xOYW1lcy5oYXMobWF0Y2hbMV0pKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRTdGF0ZW1lbnRzLnB1c2goc3RtdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExlYXZlIHRoZSBzdGF0ZW1lbnQgYWxvbmUsIGFzIGl0IGNhbid0IGJlIHVuZGVyc3Rvb2QuXG4gICAgICAgIHRyYW5zZm9ybWVkU3RhdGVtZW50cy5wdXNoKHN0bXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbmNsdWRlIG5vbi12YXJpYWJsZSBzdGF0ZW1lbnRzIChpbXBvcnRzLCBldGMpLlxuICAgICAgdHJhbnNmb3JtZWRTdGF0ZW1lbnRzLnB1c2goc3RtdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgd2hldGhlciB0aGUgZW1wdHkgbW9kdWxlIGV4cG9ydCBpcyBzdGlsbCBuZWVkZWQuXG4gIGlmICghdHJhbnNmb3JtZWRTdGF0ZW1lbnRzLnNvbWUodHMuaXNWYXJpYWJsZVN0YXRlbWVudCkgJiYgbm9uRW1wdHlFeHBvcnQgIT09IG51bGwpIHtcbiAgICAvLyBJZiB0aGUgcmVzdWx0aW5nIGZpbGUgaGFzIG5vIGZhY3RvcmllcywgaW5jbHVkZSBhbiBlbXB0eSBleHBvcnQgdG9cbiAgICAvLyBzYXRpc2Z5IGNsb3N1cmUgY29tcGlsZXIuXG4gICAgdHJhbnNmb3JtZWRTdGF0ZW1lbnRzLnB1c2gobm9uRW1wdHlFeHBvcnQpO1xuICB9XG4gIGZpbGUuc3RhdGVtZW50cyA9IHRzLmNyZWF0ZU5vZGVBcnJheSh0cmFuc2Zvcm1lZFN0YXRlbWVudHMpO1xuXG4gIC8vIElmIGFueSBpbXBvcnRzIHRvIEBhbmd1bGFyL2NvcmUgd2VyZSBkZXRlY3RlZCBhbmQgcmV3cml0dGVuICh3aGljaCBoYXBwZW5zIHdoZW4gY29tcGlsaW5nXG4gIC8vIEBhbmd1bGFyL2NvcmUpLCBnbyB0aHJvdWdoIHRoZSBTb3VyY2VGaWxlIGFuZCByZXdyaXRlIHJlZmVyZW5jZXMgdG8gc3ltYm9scyBpbXBvcnRlZCBmcm9tIGNvcmUuXG4gIGlmIChjb3JlSW1wb3J0SWRlbnRpZmllcnMuc2l6ZSA+IDApIHtcbiAgICBjb25zdCB2aXNpdCA9IDxUIGV4dGVuZHMgdHMuTm9kZT4obm9kZTogVCk6IFQgPT4ge1xuICAgICAgbm9kZSA9IHRzLnZpc2l0RWFjaENoaWxkKG5vZGUsIGNoaWxkID0+IHZpc2l0KGNoaWxkKSwgY29udGV4dCk7XG5cbiAgICAgIC8vIExvb2sgZm9yIGV4cHJlc3Npb25zIG9mIHRoZSBmb3JtIFwiaS5zXCIgd2hlcmUgJ2knIGlzIGEgZGV0ZWN0ZWQgbmFtZSBmb3IgYW4gQGFuZ3VsYXIvY29yZVxuICAgICAgLy8gaW1wb3J0IHRoYXQgd2FzIGNoYW5nZWQgYWJvdmUuIFJld3JpdGUgJ3MnIHVzaW5nIHRoZSBJbXBvcnRSZXNvbHZlci5cbiAgICAgIGlmICh0cy5pc1Byb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlKSAmJiB0cy5pc0lkZW50aWZpZXIobm9kZS5leHByZXNzaW9uKSAmJlxuICAgICAgICAgIGNvcmVJbXBvcnRJZGVudGlmaWVycy5oYXMobm9kZS5leHByZXNzaW9uLnRleHQpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gaW1wb3J0IG9mIGEgc3ltYm9sIGZyb20gQGFuZ3VsYXIvY29yZS4gVHJhbnNmb3JtIGl0IHdpdGggdGhlIGltcG9ydFJld3JpdGVyLlxuICAgICAgICBjb25zdCByZXdyaXR0ZW5TeW1ib2wgPSBpbXBvcnRSZXdyaXRlci5yZXdyaXRlU3ltYm9sKG5vZGUubmFtZS50ZXh0LCAnQGFuZ3VsYXIvY29yZScpO1xuICAgICAgICBpZiAocmV3cml0dGVuU3ltYm9sICE9PSBub2RlLm5hbWUudGV4dCkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPVxuICAgICAgICAgICAgICB0cy51cGRhdGVQcm9wZXJ0eUFjY2Vzcyhub2RlLCBub2RlLmV4cHJlc3Npb24sIHRzLmNyZWF0ZUlkZW50aWZpZXIocmV3cml0dGVuU3ltYm9sKSk7XG4gICAgICAgICAgbm9kZSA9IHVwZGF0ZWQgYXMgVCAmIHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGZpbGUgPSB2aXNpdChmaWxlKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlO1xufVxuXG5cbi8qKlxuICogUGFyc2VzIGFuZCByZXR1cm5zIHRoZSBjb21tZW50IHRleHQgb2YgYSBcXEBmaWxlb3ZlcnZpZXcgY29tbWVudCBpbiB0aGUgZ2l2ZW4gc291cmNlIGZpbGUuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVvdmVydmlld0NvbW1lbnQoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3QgdGV4dCA9IHNvdXJjZUZpbGUuZ2V0RnVsbFRleHQoKTtcbiAgY29uc3QgdHJpdmlhID0gdGV4dC5zdWJzdHJpbmcoMCwgc291cmNlRmlsZS5nZXRTdGFydCgpKTtcblxuICBjb25zdCBsZWFkaW5nQ29tbWVudHMgPSB0cy5nZXRMZWFkaW5nQ29tbWVudFJhbmdlcyh0cml2aWEsIDApO1xuICBpZiAoIWxlYWRpbmdDb21tZW50cyB8fCBsZWFkaW5nQ29tbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjb21tZW50ID0gbGVhZGluZ0NvbW1lbnRzWzBdO1xuICBpZiAoY29tbWVudC5raW5kICE9PSB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIE9ubHkgY29tbWVudHMgc2VwYXJhdGVkIHdpdGggYSBcXG5cXG4gZnJvbSB0aGUgZmlsZSBjb250ZW50cyBhcmUgY29uc2lkZXJlZCBmaWxlLWxldmVsIGNvbW1lbnRzXG4gIC8vIGluIFR5cGVTY3JpcHQuXG4gIGlmICh0ZXh0LnN1YnN0cmluZyhjb21tZW50LmVuZCwgY29tbWVudC5lbmQgKyAyKSAhPT0gJ1xcblxcbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNvbW1lbnRUZXh0ID0gdGV4dC5zdWJzdHJpbmcoY29tbWVudC5wb3MsIGNvbW1lbnQuZW5kKTtcbiAgLy8gQ2xvc3VyZSBDb21waWxlciBpZ25vcmVzIEBzdXBwcmVzcyBhbmQgc2ltaWxhciBpZiB0aGUgY29tbWVudCBjb250YWlucyBAbGljZW5zZS5cbiAgaWYgKGNvbW1lbnRUZXh0LmluZGV4T2YoJ0BsaWNlbnNlJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY29tbWVudFRleHQ7XG59XG4iXX0=