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
        define("@angular/compiler-cli/src/ngtsc/imports/src/find_export", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    /**
     * Find the name, if any, by which a node is exported from a given file.
     */
    function findExportedNameOfNode(target, file, reflector) {
        var exports = reflector.getExportsOfModule(file);
        if (exports === null) {
            return null;
        }
        // Look for the export which declares the node.
        var keys = Array.from(exports.keys());
        var name = keys.find(function (key) {
            var decl = exports.get(key);
            return decl !== undefined && decl.node === target;
        });
        if (name === undefined) {
            throw new Error("Failed to find exported name of node (" + target.getText() + ") in '" + file.fileName + "'.");
        }
        return name;
    }
    exports.findExportedNameOfNode = findExportedNameOfNode;
    /**
     * Check whether a given `ts.Symbol` represents a declaration of a given node.
     *
     * This is not quite as trivial as just checking the declarations, as some nodes are
     * `ts.ExportSpecifier`s and need to be unwrapped.
     */
    function symbolDeclaresNode(sym, node, checker) {
        return sym.declarations.some(function (decl) {
            if (ts.isExportSpecifier(decl)) {
                var exportedSymbol = checker.getExportSpecifierLocalTargetSymbol(decl);
                if (exportedSymbol !== undefined) {
                    return symbolDeclaresNode(exportedSymbol, node, checker);
                }
            }
            return decl === node;
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZF9leHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMvc3JjL2ZpbmRfZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBR2pDOztPQUVHO0lBQ0gsU0FBZ0Isc0JBQXNCLENBQ2xDLE1BQWUsRUFBRSxJQUFtQixFQUFFLFNBQXlCO1FBQ2pFLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELCtDQUErQztRQUMvQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3hCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkNBQXlDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsY0FBUyxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUMsQ0FBQztTQUMxRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWxCRCx3REFrQkM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsa0JBQWtCLENBQUMsR0FBYyxFQUFFLElBQWEsRUFBRSxPQUF1QjtRQUNoRixPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUMvQixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7b0JBQ2hDLE9BQU8sa0JBQWtCLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDMUQ7YUFDRjtZQUNELE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtSZWZsZWN0aW9uSG9zdH0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5cbi8qKlxuICogRmluZCB0aGUgbmFtZSwgaWYgYW55LCBieSB3aGljaCBhIG5vZGUgaXMgZXhwb3J0ZWQgZnJvbSBhIGdpdmVuIGZpbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXhwb3J0ZWROYW1lT2ZOb2RlKFxuICAgIHRhcmdldDogdHMuTm9kZSwgZmlsZTogdHMuU291cmNlRmlsZSwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3QgZXhwb3J0cyA9IHJlZmxlY3Rvci5nZXRFeHBvcnRzT2ZNb2R1bGUoZmlsZSk7XG4gIGlmIChleHBvcnRzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gTG9vayBmb3IgdGhlIGV4cG9ydCB3aGljaCBkZWNsYXJlcyB0aGUgbm9kZS5cbiAgY29uc3Qga2V5cyA9IEFycmF5LmZyb20oZXhwb3J0cy5rZXlzKCkpO1xuICBjb25zdCBuYW1lID0ga2V5cy5maW5kKGtleSA9PiB7XG4gICAgY29uc3QgZGVjbCA9IGV4cG9ydHMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGRlY2wgIT09IHVuZGVmaW5lZCAmJiBkZWNsLm5vZGUgPT09IHRhcmdldDtcbiAgfSk7XG5cbiAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBmaW5kIGV4cG9ydGVkIG5hbWUgb2Ygbm9kZSAoJHt0YXJnZXQuZ2V0VGV4dCgpfSkgaW4gJyR7ZmlsZS5maWxlTmFtZX0nLmApO1xuICB9XG4gIHJldHVybiBuYW1lO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBnaXZlbiBgdHMuU3ltYm9sYCByZXByZXNlbnRzIGEgZGVjbGFyYXRpb24gb2YgYSBnaXZlbiBub2RlLlxuICpcbiAqIFRoaXMgaXMgbm90IHF1aXRlIGFzIHRyaXZpYWwgYXMganVzdCBjaGVja2luZyB0aGUgZGVjbGFyYXRpb25zLCBhcyBzb21lIG5vZGVzIGFyZVxuICogYHRzLkV4cG9ydFNwZWNpZmllcmBzIGFuZCBuZWVkIHRvIGJlIHVud3JhcHBlZC5cbiAqL1xuZnVuY3Rpb24gc3ltYm9sRGVjbGFyZXNOb2RlKHN5bTogdHMuU3ltYm9sLCBub2RlOiB0cy5Ob2RlLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gc3ltLmRlY2xhcmF0aW9ucy5zb21lKGRlY2wgPT4ge1xuICAgIGlmICh0cy5pc0V4cG9ydFNwZWNpZmllcihkZWNsKSkge1xuICAgICAgY29uc3QgZXhwb3J0ZWRTeW1ib2wgPSBjaGVja2VyLmdldEV4cG9ydFNwZWNpZmllckxvY2FsVGFyZ2V0U3ltYm9sKGRlY2wpO1xuICAgICAgaWYgKGV4cG9ydGVkU3ltYm9sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbERlY2xhcmVzTm9kZShleHBvcnRlZFN5bWJvbCwgbm9kZSwgY2hlY2tlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNsID09PSBub2RlO1xuICB9KTtcbn1cbiJdfQ==