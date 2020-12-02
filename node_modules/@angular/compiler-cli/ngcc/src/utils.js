(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/utils", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/reflection"], factory);
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
    var reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    function getOriginalSymbol(checker) {
        return function (symbol) {
            return ts.SymbolFlags.Alias & symbol.flags ? checker.getAliasedSymbol(symbol) : symbol;
        };
    }
    exports.getOriginalSymbol = getOriginalSymbol;
    function isDefined(value) {
        return (value !== undefined) && (value !== null);
    }
    exports.isDefined = isDefined;
    function getNameText(name) {
        return ts.isIdentifier(name) || ts.isLiteralExpression(name) ? name.text : name.getText();
    }
    exports.getNameText = getNameText;
    /**
     * Parse down the AST and capture all the nodes that satisfy the test.
     * @param node The start node.
     * @param test The function that tests whether a node should be included.
     * @returns a collection of nodes that satisfy the test.
     */
    function findAll(node, test) {
        var nodes = [];
        findAllVisitor(node);
        return nodes;
        function findAllVisitor(n) {
            if (test(n)) {
                nodes.push(n);
            }
            else {
                n.forEachChild(function (child) { return findAllVisitor(child); });
            }
        }
    }
    exports.findAll = findAll;
    /**
     * Does the given declaration have a name which is an identifier?
     * @param declaration The declaration to test.
     * @returns true if the declaration has an identifier for a name.
     */
    function hasNameIdentifier(declaration) {
        var namedDeclaration = declaration;
        return namedDeclaration.name !== undefined && ts.isIdentifier(namedDeclaration.name);
    }
    exports.hasNameIdentifier = hasNameIdentifier;
    /**
     * Test whether a path is "relative".
     *
     * Relative paths start with `/`, `./` or `../` (or the Windows equivalents); or are simply `.` or
     * `..`.
     */
    function isRelativePath(path) {
        return file_system_1.isRooted(path) || /^\.\.?(\/|\\|$)/.test(path);
    }
    exports.isRelativePath = isRelativePath;
    /**
     * A `Map`-like object that can compute and memoize a missing value for any key.
     *
     * The computed values are memoized, so the factory function is not called more than once per key.
     * This is useful for storing values that are expensive to compute and may be used multiple times.
     */
    // NOTE:
    // Ideally, this class should extend `Map`, but that causes errors in ES5 transpiled code:
    // `TypeError: Constructor Map requires 'new'`
    var FactoryMap = /** @class */ (function () {
        function FactoryMap(factory, entries) {
            this.factory = factory;
            this.internalMap = new Map(entries);
        }
        FactoryMap.prototype.get = function (key) {
            if (!this.internalMap.has(key)) {
                this.internalMap.set(key, this.factory(key));
            }
            return this.internalMap.get(key);
        };
        FactoryMap.prototype.set = function (key, value) {
            this.internalMap.set(key, value);
        };
        return FactoryMap;
    }());
    exports.FactoryMap = FactoryMap;
    /**
     * Attempt to resolve a `path` to a file by appending the provided `postFixes`
     * to the `path` and checking if the file exists on disk.
     * @returns An absolute path to the first matching existing file, or `null` if none exist.
     */
    function resolveFileWithPostfixes(fs, path, postFixes) {
        var e_1, _a;
        try {
            for (var postFixes_1 = tslib_1.__values(postFixes), postFixes_1_1 = postFixes_1.next(); !postFixes_1_1.done; postFixes_1_1 = postFixes_1.next()) {
                var postFix = postFixes_1_1.value;
                var testPath = file_system_1.absoluteFrom(path + postFix);
                if (fs.exists(testPath) && fs.stat(testPath).isFile()) {
                    return testPath;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (postFixes_1_1 && !postFixes_1_1.done && (_a = postFixes_1.return)) _a.call(postFixes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }
    exports.resolveFileWithPostfixes = resolveFileWithPostfixes;
    /**
     * Determine whether a function declaration corresponds with a TypeScript helper function, returning
     * its kind if so or null if the declaration does not seem to correspond with such a helper.
     */
    function getTsHelperFnFromDeclaration(decl) {
        if (!ts.isFunctionDeclaration(decl) && !ts.isVariableDeclaration(decl)) {
            return null;
        }
        if (decl.name === undefined || !ts.isIdentifier(decl.name)) {
            return null;
        }
        return getTsHelperFnFromIdentifier(decl.name);
    }
    exports.getTsHelperFnFromDeclaration = getTsHelperFnFromDeclaration;
    /**
     * Determine whether an identifier corresponds with a TypeScript helper function (based on its
     * name), returning its kind if so or null if the identifier does not seem to correspond with such a
     * helper.
     */
    function getTsHelperFnFromIdentifier(id) {
        switch (stripDollarSuffix(id.text)) {
            case '__assign':
                return reflection_1.KnownDeclaration.TsHelperAssign;
            case '__spread':
                return reflection_1.KnownDeclaration.TsHelperSpread;
            case '__spreadArrays':
                return reflection_1.KnownDeclaration.TsHelperSpreadArrays;
            default:
                return null;
        }
    }
    exports.getTsHelperFnFromIdentifier = getTsHelperFnFromIdentifier;
    /**
     * An identifier may become repeated when bundling multiple source files into a single bundle, so
     * bundlers have a strategy of suffixing non-unique identifiers with a suffix like $2. This function
     * strips off such suffixes, so that ngcc deals with the canonical name of an identifier.
     * @param value The value to strip any suffix of, if applicable.
     * @returns The canonical representation of the value, without any suffix.
     */
    function stripDollarSuffix(value) {
        return value.replace(/\$\d+$/, '');
    }
    exports.stripDollarSuffix = stripDollarSuffix;
    function stripExtension(fileName) {
        return fileName.replace(/\..+$/, '');
    }
    exports.stripExtension = stripExtension;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBRWpDLDJFQUErRjtJQUMvRix5RUFBNEQ7SUF3QjVELFNBQWdCLGlCQUFpQixDQUFDLE9BQXVCO1FBQ3ZELE9BQU8sVUFBUyxNQUFpQjtZQUMvQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pGLENBQUMsQ0FBQztJQUNKLENBQUM7SUFKRCw4Q0FJQztJQUVELFNBQWdCLFNBQVMsQ0FBSSxLQUF1QjtRQUNsRCxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFGRCw4QkFFQztJQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUFvQztRQUM5RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUYsQ0FBQztJQUZELGtDQUVDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQixPQUFPLENBQUksSUFBYSxFQUFFLElBQTRDO1FBQ3BGLElBQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUN0QixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUM7UUFFYixTQUFTLGNBQWMsQ0FBQyxD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Q0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBVkQsb0VBVUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBZ0IsMkJBQTJCLENBQUMsRUFBaUI7UUFDM0QsUUFBUSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsS0FBSyxVQUFVO2dCQUNiLE9BQU8sNkJBQWdCLENBQUMsY0FBYyxDQUFDO1lBQ3pDLEtBQUssVUFBVTtnQkFDYixPQUFPLDZCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUN6QyxLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyw2QkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztZQUMvQztnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQVhELGtFQVdDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsS0FBYTtRQUM3QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFGRCw4Q0FFQztJQUVELFNBQWdCLGNBQWMsQ0FBQyxRQUFnQjtRQUM3QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFGRCx3Q0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2Fic29sdXRlRnJvbSwgQWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW0sIGlzUm9vdGVkfSBmcm9tICcuLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtLbm93bkRlY2xhcmF0aW9ufSBmcm9tICcuLi8uLi9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5cbi8qKlxuICogQSBsaXN0IChgQXJyYXlgKSBvZiBwYXJ0aWFsbHkgb3JkZXJlZCBgVGAgaXRlbXMuXG4gKlxuICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IGFyZSBwYXJ0aWFsbHkgb3JkZXJlZCBpbiB0aGUgc2Vuc2UgdGhhdCBhbnkgZWxlbWVudCBoYXMgZWl0aGVyIHRoZSBzYW1lIG9yXG4gKiBoaWdoZXIgcHJlY2VkZW5jZSB0aGFuIGFueSBlbGVtZW50IHdoaWNoIGFwcGVhcnMgbGF0ZXIgaW4gdGhlIGxpc3QuIFdoYXQgXCJoaWdoZXIgcHJlY2VkZW5jZVwiXG4gKiBtZWFucyBhbmQgaG93IGl0IGlzIGRldGVybWluZWQgaXMgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50LlxuICpcbiAqIFNlZSBbUGFydGlhbGx5T3JkZXJlZFNldF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGFydGlhbGx5X29yZGVyZWRfc2V0KSBmb3IgbW9yZSBkZXRhaWxzLlxuICogKFJlZnJhaW5pbmcgZnJvbSB1c2luZyB0aGUgdGVybSBcInNldFwiIGhlcmUsIHRvIGF2b2lkIGNvbmZ1c2lvbiB3aXRoIEphdmFTY3JpcHQnc1xuICogW1NldF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU2V0KS4pXG4gKlxuICogTk9URTogQSBwbGFpbiBgQXJyYXk8VD5gIGlzIG5vdCBhc3NpZ25hYmxlIHRvIGEgYFBhcnRpYWxseU9yZGVyZWRMaXN0PFQ+YCwgYnV0IGFcbiAqICAgICAgIGBQYXJ0aWFsbHlPcmRlcmVkTGlzdDxUPmAgaXMgYXNzaWduYWJsZSB0byBhbiBgQXJyYXk8VD5gLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpYWxseU9yZGVyZWRMaXN0PFQ+IGV4dGVuZHMgQXJyYXk8VD4ge1xuICBfcGFydGlhbGx5T3JkZXJlZDogdHJ1ZTtcblxuICBtYXA8VT4oY2FsbGJhY2tmbjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogUGFydGlhbGx5T3JkZXJlZExpc3Q8VD4pID0+IFUsIHRoaXNBcmc/OiBhbnkpOlxuICAgICAgUGFydGlhbGx5T3JkZXJlZExpc3Q8VT47XG4gIHNsaWNlKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJyYXk8VD5bJ3NsaWNlJ10+KTogUGFydGlhbGx5T3JkZXJlZExpc3Q8VD47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmlnaW5hbFN5bWJvbChjaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IChzeW1ib2w6IHRzLlN5bWJvbCkgPT4gdHMuU3ltYm9sIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN5bWJvbDogdHMuU3ltYm9sKSB7XG4gICAgcmV0dXJuIHRzLlN5bWJvbEZsYWdzLkFsaWFzICYgc3ltYm9sLmZsYWdzID8gY2hlY2tlci5nZXRBbGlhc2VkU3ltYm9sKHN5bWJvbCkgOiBzeW1ib2w7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQ8VD4odmFsdWU6IFR8dW5kZWZpbmVkfG51bGwpOiB2YWx1ZSBpcyBUIHtcbiAgcmV0dXJuICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT09IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZVRleHQobmFtZTogdHMuUHJvcGVydHlOYW1lfHRzLkJpbmRpbmdOYW1lKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRzLmlzSWRlbnRpZmllcihuYW1lKSB8fCB0cy5pc0xpdGVyYWxFeHByZXNzaW9uKG5hbWUpID8gbmFtZS50ZXh0IDogbmFtZS5nZXRUZXh0KCk7XG59XG5cbi8qKlxuICogUGFyc2UgZG93biB0aGUgQVNUIGFuZCBjYXB0dXJlIGFsbCB0aGUgbm9kZXMgdGhhdCBzYXRpc2Z5IHRoZSB0ZXN0LlxuICogQHBhcmFtIG5vZGUgVGhlIHN0YXJ0IG5vZGUuXG4gKiBAcGFyYW0gdGVzdCBUaGUgZnVuY3Rpb24gdGhhdCB0ZXN0cyB3aGV0aGVyIGEgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQuXG4gKiBAcmV0dXJucyBhIGNvbGxlY3Rpb24gb2Ygbm9kZXMgdGhhdCBzYXRpc2Z5IHRoZSB0ZXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbDxUPihub2RlOiB0cy5Ob2RlLCB0ZXN0OiAobm9kZTogdHMuTm9kZSkgPT4gbm9kZSBpcyB0cy5Ob2RlICYgVCk6IFRbXSB7XG4gIGNvbnN0IG5vZGVzOiBUW10gPSBbXTtcbiAgZmluZEFsbFZpc2l0b3Iobm9kZSk7XG4gIHJldHVybiBub2RlcztcblxuICBmdW5jdGlvbiBmaW5kQWxsVmlzaXRvcihuOiB0cy5Ob2RlKSB7XG4gICAgaWYgKHRlc3QobikpIHtcbiAgICAgIG5vZGVzLnB1c2gobik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4uZm9yRWFjaENoaWxkKGNoaWxkID0+IGZpbmRBbGxWaXNpdG9yKGNoaWxkKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRG9lcyB0aGUgZ2l2ZW4gZGVjbGFyYXRpb24gaGF2ZSBhIG5hbWUgd2hpY2ggaXMgYW4gaWRlbnRpZmllcj9cbiAqIEBwYXJhbSBkZWNsYXJhdGlvbiBUaGUgZGVjbGFyYXRpb24gdG8gdGVzdC5cbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRlY2xhcmF0aW9uIGhhcyBhbiBpZGVudGlmaWVyIGZvciBhIG5hbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNOYW1lSWRlbnRpZmllcihkZWNsYXJhdGlvbjogdHMuRGVjbGFyYXRpb24pOiBkZWNsYXJhdGlvbiBpcyB0cy5EZWNsYXJhdGlvbiZcbiAgICB7bmFtZTogdHMuSWRlbnRpZmllcn0ge1xuICBjb25zdCBuYW1lZERlY2xhcmF0aW9uOiB0cy5EZWNsYXJhdGlvbiZ7bmFtZT86IHRzLk5vZGV9ID0gZGVjbGFyYXRpb247XG4gIHJldHVybiBuYW1lZERlY2xhcmF0aW9uLm5hbWUgIT09IHVuZGVmaW5lZCAmJiB0cy5pc0lkZW50aWZpZXIobmFtZWREZWNsYXJhdGlvbi5uYW1lKTtcbn1cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBwYXRoIGlzIFwicmVsYXRpdmVcIi5cbiAqXG4gKiBSZWxhdGl2ZSBwYXRocyBzdGFydCB3aXRoIGAvYCwgYC4vYCBvciBgLi4vYCAob3IgdGhlIFdpbmRvd3MgZXF1aXZhbGVudHMpOyBvciBhcmUgc2ltcGx5IGAuYCBvclxuICogYC4uYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVsYXRpdmVQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNSb290ZWQocGF0aCkgfHwgL15cXC5cXC4/KFxcL3xcXFxcfCQpLy50ZXN0KHBhdGgpO1xufVxuXG4vKipcbiAqIEEgYE1hcGAtbGlrZSBvYmplY3QgdGhhdCBjYW4gY29tcHV0ZSBhbmQgbWVtb2l6ZSBhIG1pc3NpbmcgdmFsdWUgZm9yIGFueSBrZXkuXG4gKlxuICogVGhlIGNvbXB1dGVkIHZhbHVlcyBhcmUgbWVtb2l6ZWQsIHNvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIG5vdCBjYWxsZWQgbW9yZSB0aGFuIG9uY2UgcGVyIGtleS5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBzdG9yaW5nIHZhbHVlcyB0aGF0IGFyZSBleHBlbnNpdmUgdG8gY29tcHV0ZSBhbmQgbWF5IGJlIHVzZWQgbXVsdGlwbGUgdGltZXMuXG4gKi9cbi8vIE5PVEU6XG4vLyBJZGVhbGx5LCB0aGlzIGNsYXNzIHNob3VsZCBleHRlbmQgYE1hcGAsIGJ1dCB0aGF0IGNhdXNlcyBlcnJvcnMgaW4gRVM1IHRyYW5zcGlsZWQgY29kZTpcbi8vIGBUeXBlRXJyb3I6IENvbnN0cnVjdG9yIE1hcCByZXF1aXJlcyAnbmV3J2BcbmV4cG9ydCBjbGFzcyBGYWN0b3J5TWFwPEssIFY+IHtcbiAgcHJpdmF0ZSBpbnRlcm5hbE1hcDogTWFwPEssIFY+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFjdG9yeTogKGtleTogSykgPT4gViwgZW50cmllcz86IHJlYWRvbmx5KHJlYWRvbmx5W0ssIFZdKVtdfG51bGwpIHtcbiAgICB0aGlzLmludGVybmFsTWFwID0gbmV3IE1hcChlbnRyaWVzKTtcbiAgfVxuXG4gIGdldChrZXk6IEspOiBWIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJuYWxNYXAuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxNYXAuc2V0KGtleSwgdGhpcy5mYWN0b3J5KGtleSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmludGVybmFsTWFwLmdldChrZXkpITtcbiAgfVxuXG4gIHNldChrZXk6IEssIHZhbHVlOiBWKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbE1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIHJlc29sdmUgYSBgcGF0aGAgdG8gYSBmaWxlIGJ5IGFwcGVuZGluZyB0aGUgcHJvdmlkZWQgYHBvc3RGaXhlc2BcbiAqIHRvIHRoZSBgcGF0aGAgYW5kIGNoZWNraW5nIGlmIHRoZSBmaWxlIGV4aXN0cyBvbiBkaXNrLlxuICogQHJldHVybnMgQW4gYWJzb2x1dGUgcGF0aCB0byB0aGUgZmlyc3QgbWF0Y2hpbmcgZXhpc3RpbmcgZmlsZSwgb3IgYG51bGxgIGlmIG5vbmUgZXhpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRmlsZVdpdGhQb3N0Zml4ZXMoXG4gICAgZnM6IEZpbGVTeXN0ZW0sIHBhdGg6IEFic29sdXRlRnNQYXRoLCBwb3N0Rml4ZXM6IHN0cmluZ1tdKTogQWJzb2x1dGVGc1BhdGh8bnVsbCB7XG4gIGZvciAoY29uc3QgcG9zdEZpeCBvZiBwb3N0Rml4ZXMpIHtcbiAgICBjb25zdCB0ZXN0UGF0aCA9IGFic29sdXRlRnJvbShwYXRoICsgcG9zdEZpeCk7XG4gICAgaWYgKGZzLmV4aXN0cyh0ZXN0UGF0aCkgJiYgZnMuc3RhdCh0ZXN0UGF0aCkuaXNGaWxlKCkpIHtcbiAgICAgIHJldHVybiB0ZXN0UGF0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBjb3JyZXNwb25kcyB3aXRoIGEgVHlwZVNjcmlwdCBoZWxwZXIgZnVuY3Rpb24sIHJldHVybmluZ1xuICogaXRzIGtpbmQgaWYgc28gb3IgbnVsbCBpZiB0aGUgZGVjbGFyYXRpb24gZG9lcyBub3Qgc2VlbSB0byBjb3JyZXNwb25kIHdpdGggc3VjaCBhIGhlbHBlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRzSGVscGVyRm5Gcm9tRGVjbGFyYXRpb24oZGVjbDogdHMuRGVjbGFyYXRpb24pOiBLbm93bkRlY2xhcmF0aW9ufG51bGwge1xuICBpZiAoIXRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihkZWNsKSAmJiAhdHMuaXNWYXJpYWJsZURlY2xhcmF0aW9uKGRlY2wpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZGVjbC5uYW1lID09PSB1bmRlZmluZWQgfHwgIXRzLmlzSWRlbnRpZmllcihkZWNsLm5hbWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZ2V0VHNIZWxwZXJGbkZyb21JZGVudGlmaWVyKGRlY2wubmFtZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYW4gaWRlbnRpZmllciBjb3JyZXNwb25kcyB3aXRoIGEgVHlwZVNjcmlwdCBoZWxwZXIgZnVuY3Rpb24gKGJhc2VkIG9uIGl0c1xuICogbmFtZSksIHJldHVybmluZyBpdHMga2luZCBpZiBzbyBvciBudWxsIGlmIHRoZSBpZGVudGlmaWVyIGRvZXMgbm90IHNlZW0gdG8gY29ycmVzcG9uZCB3aXRoIHN1Y2ggYVxuICogaGVscGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHNIZWxwZXJGbkZyb21JZGVudGlmaWVyKGlkOiB0cy5JZGVudGlmaWVyKTogS25vd25EZWNsYXJhdGlvbnxudWxsIHtcbiAgc3dpdGNoIChzdHJpcERvbGxhclN1ZmZpeChpZC50ZXh0KSkge1xuICAgIGNhc2UgJ19fYXNzaWduJzpcbiAgICAgIHJldHVybiBLbm93bkRlY2xhcmF0aW9uLlRzSGVscGVyQXNzaWduO1xuICAgIGNhc2UgJ19fc3ByZWFkJzpcbiAgICAgIHJldHVybiBLbm93bkRlY2xhcmF0aW9uLlRzSGVscGVyU3ByZWFkO1xuICAgIGNhc2UgJ19fc3ByZWFkQXJyYXlzJzpcbiAgICAgIHJldHVybiBLbm93bkRlY2xhcmF0aW9uLlRzSGVscGVyU3ByZWFkQXJyYXlzO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGlkZW50aWZpZXIgbWF5IGJlY29tZSByZXBlYXRlZCB3aGVuIGJ1bmRsaW5nIG11bHRpcGxlIHNvdXJjZSBmaWxlcyBpbnRvIGEgc2luZ2xlIGJ1bmRsZSwgc29cbiAqIGJ1bmRsZXJzIGhhdmUgYSBzdHJhdGVneSBvZiBzdWZmaXhpbmcgbm9uLXVuaXF1ZSBpZGVudGlmaWVycyB3aXRoIGEgc3VmZml4IGxpa2UgJDIuIFRoaXMgZnVuY3Rpb25cbiAqIHN0cmlwcyBvZmYgc3VjaCBzdWZmaXhlcywgc28gdGhhdCBuZ2NjIGRlYWxzIHdpdGggdGhlIGNhbm9uaWNhbCBuYW1lIG9mIGFuIGlkZW50aWZpZXIuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0cmlwIGFueSBzdWZmaXggb2YsIGlmIGFwcGxpY2FibGUuXG4gKiBAcmV0dXJucyBUaGUgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZSwgd2l0aG91dCBhbnkgc3VmZml4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBEb2xsYXJTdWZmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXCRcXGQrJC8sICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwRXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZmlsZU5hbWUucmVwbGFjZSgvXFwuLiskLywgJycpO1xufVxuIl19