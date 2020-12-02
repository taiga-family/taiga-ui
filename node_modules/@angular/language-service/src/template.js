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
        define("@angular/language-service/src/template", ["require", "exports", "tslib", "@angular/language-service/src/global_symbols", "@angular/language-service/src/typescript_symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var global_symbols_1 = require("@angular/language-service/src/global_symbols");
    var typescript_symbols_1 = require("@angular/language-service/src/typescript_symbols");
    /**
     * A base class to represent a template and which component class it is
     * associated with. A template source could answer basic questions about
     * top-level declarations of its class through the members() and query()
     * methods.
     */
    var BaseTemplate = /** @class */ (function () {
        function BaseTemplate(host, classDeclNode, classSymbol) {
            this.host = host;
            this.classDeclNode = classDeclNode;
            this.classSymbol = classSymbol;
            this.program = host.program;
        }
        Object.defineProperty(BaseTemplate.prototype, "type", {
            /**
             * Return the Angular StaticSymbol for the class that contains this template.
             */
            get: function () {
                return this.classSymbol;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "members", {
            /**
             * Return a Map-like data structure that allows users to retrieve some or all
             * top-level declarations in the associated component class.
             */
            get: function () {
                if (!this.membersTable) {
                    var typeChecker = this.program.getTypeChecker();
                    var sourceFile = this.classDeclNode.getSourceFile();
                    this.membersTable = this.query.mergeSymbolTable([
                        global_symbols_1.createGlobalSymbolTable(this.query),
                        typescript_symbols_1.getClassMembersFromDeclaration(this.program, typeChecker, sourceFile, this.classDeclNode),
                    ]);
                }
                return this.membersTable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "query", {
            /**
             * Return an engine that provides more information about symbols in the
             * template.
             */
            get: function () {
                var _this = this;
                if (!this.queryCache) {
                    var program_1 = this.program;
                    var typeChecker_1 = program_1.getTypeChecker();
                    var sourceFile_1 = this.classDeclNode.getSourceFile();
                    this.queryCache = typescript_symbols_1.getSymbolQuery(program_1, typeChecker_1, sourceFile_1, function () {
                        // Computing the ast is relatively expensive. Do it only when absolutely
                        // necessary.
                        // TODO: There is circular dependency here between TemplateSource and
                        // TypeScriptHost. Consider refactoring the code to break this cycle.
                        var ast = _this.host.getTemplateAst(_this);
                        var pipes = (ast && ast.pipes) || [];
                        return typescript_symbols_1.getPipesTable(sourceFile_1, program_1, typeChecker_1, pipes);
                    });
                }
                return this.queryCache;
            },
            enumerable: true,
            configurable: true
        });
        return BaseTemplate;
    }());
    /**
     * An InlineTemplate represents template defined in a TS file through the
     * `template` attribute in the decorator.
     */
    var InlineTemplate = /** @class */ (function (_super) {
        tslib_1.__extends(InlineTemplate, _super);
        function InlineTemplate(templateNode, classDeclNode, classSymbol, host) {
            var _this = _super.call(this, host, classDeclNode, classSymbol) || this;
            var sourceFile = templateNode.getSourceFile();
            if (sourceFile !== classDeclNode.getSourceFile()) {
                throw new Error("Inline template and component class should belong to the same source file");
            }
            _this.fileName = sourceFile.fileName;
            // node.text returns the TS internal representation of the normalized text,
            // and all CR characters are stripped. node.getText() returns the raw text.
            _this.source = templateNode.getText().slice(1, -1); // strip leading and trailing quotes
            _this.span = {
                // TS string literal includes surrounding quotes in the start/end offsets.
                start: templateNode.getStart() + 1,
                end: templateNode.getEnd() - 1,
            };
            return _this;
        }
        return InlineTemplate;
    }(BaseTemplate));
    exports.InlineTemplate = InlineTemplate;
    /**
     * An ExternalTemplate represents template defined in an external (most likely
     * HTML, but not necessarily) file through the `templateUrl` attribute in the
     * decorator.
     * Note that there is no ts.Node associated with the template because it's not
     * a TS file.
     */
    var ExternalTemplate = /** @class */ (function (_super) {
        tslib_1.__extends(ExternalTemplate, _super);
        function ExternalTemplate(source, fileName, classDeclNode, classSymbol, host) {
            var _this = _super.call(this, host, classDeclNode, classSymbol) || this;
            _this.source = source;
            _this.fileName = fileName;
            _this.span = {
                start: 0,
                end: source.length,
            };
            return _this;
        }
        return ExternalTemplate;
    }(BaseTemplate));
    exports.ExternalTemplate = ExternalTemplate;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy90ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFJSCwrRUFBeUQ7SUFHekQsdUZBQW1HO0lBR25HOzs7OztPQUtHO0lBQ0g7UUFLRSxzQkFDcUIsSUFBMkIsRUFDM0IsYUFBa0MsRUFDbEMsV0FBNEI7WUFGNUIsU0FBSSxHQUFKLElBQUksQ0FBdUI7WUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXFCO1lBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQVNELHNCQUFJLDhCQUFJO1lBSFI7O2VBRUc7aUJBQ0g7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBTUQsc0JBQUksaUNBQU87WUFKWDs7O2VBR0c7aUJBQ0g7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ2xELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDOUMsd0NBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDbkMsbURBQThCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7cUJBQzFGLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDM0IsQ0FBQzs7O1dBQUE7UUFNRCxzQkFBSSwrQkFBSztZQUpUOzs7ZUFHRztpQkFDSDtnQkFBQSxpQkFnQkM7Z0JBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLElBQU0sU0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzdCLElBQU0sYUFBVyxHQUFHLFNBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDN0MsSUFBTSxZQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQ0FBYyxDQUFDLFNBQU8sRUFBRSxhQUFXLEVBQUUsWUFBVSxFQUFFO3dCQUNqRSx3RUFBd0U7d0JBQ3hFLGFBQWE7d0JBQ2IscUVBQXFFO3dCQUNyRSxxRUFBcUU7d0JBQ3JFLElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxDQUFDO3dCQUMzQyxJQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN2QyxPQUFPLGtDQUFhLENBQUMsWUFBVSxFQUFFLFNBQU8sRUFBRSxhQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2hFLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUNILG1CQUFDO0lBQUQsQ0FBQyxBQTVERCxJQTREQztJQUVEOzs7T0FHRztJQUNIO1FBQW9DLDBDQUFZO1FBSzlDLHdCQUNJLFlBQWtDLEVBQUUsYUFBa0MsRUFDdEUsV0FBNEIsRUFBRSxJQUEyQjtZQUY3RCxZQUdFLGtCQUFNLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBY3hDO1lBYkMsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hELElBQUksVUFBVSxLQUFLLGFBQWEsQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO2FBQzlGO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLDJFQUEyRTtZQUMzRSwyRUFBMkU7WUFDM0UsS0FBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsb0NBQW9DO1lBQ3hGLEtBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsMEVBQTBFO2dCQUMxRSxLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2xDLEdBQUcsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUMvQixDQUFDOztRQUNKLENBQUM7UUFDSCxxQkFBQztJQUFELENBQUMsQUF2QkQsQ0FBb0MsWUFBWSxHQXVCL0M7SUF2Qlksd0NBQWM7SUF5QjNCOzs7Ozs7T0FNRztJQUNIO1FBQXNDLDRDQUFZO1FBR2hELDBCQUNvQixNQUFjLEVBQWtCLFFBQWdCLEVBQ2hFLGFBQWtDLEVBQUUsV0FBNEIsRUFDaEUsSUFBMkI7WUFIL0IsWUFJRSxrQkFBTSxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxTQUt4QztZQVJtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1lBQWtCLGNBQVEsR0FBUixRQUFRLENBQVE7WUFJbEUsS0FBSSxDQUFDLElBQUksR0FBRztnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDbkIsQ0FBQzs7UUFDSixDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQUFDLEFBYkQsQ0FBc0MsWUFBWSxHQWFqRDtJQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Y3JlYXRlR2xvYmFsU3ltYm9sVGFibGV9IGZyb20gJy4vZ2xvYmFsX3N5bWJvbHMnO1xuaW1wb3J0ICogYXMgbmcgZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1R5cGVTY3JpcHRTZXJ2aWNlSG9zdH0gZnJvbSAnLi90eXBlc2NyaXB0X2hvc3QnO1xuaW1wb3J0IHtnZXRDbGFzc01lbWJlcnNGcm9tRGVjbGFyYXRpb24sIGdldFBpcGVzVGFibGUsIGdldFN5bWJvbFF1ZXJ5fSBmcm9tICcuL3R5cGVzY3JpcHRfc3ltYm9scyc7XG5cblxuLyoqXG4gKiBBIGJhc2UgY2xhc3MgdG8gcmVwcmVzZW50IGEgdGVtcGxhdGUgYW5kIHdoaWNoIGNvbXBvbmVudCBjbGFzcyBpdCBpc1xuICogYXNzb2NpYXRlZCB3aXRoLiBBIHRlbXBsYXRlIHNvdXJjZSBjb3VsZCBhbnN3ZXIgYmFzaWMgcXVlc3Rpb25zIGFib3V0XG4gKiB0b3AtbGV2ZWwgZGVjbGFyYXRpb25zIG9mIGl0cyBjbGFzcyB0aHJvdWdoIHRoZSBtZW1iZXJzKCkgYW5kIHF1ZXJ5KClcbiAqIG1ldGhvZHMuXG4gKi9cbmFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSBpbXBsZW1lbnRzIG5nLlRlbXBsYXRlU291cmNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiB0cy5Qcm9ncmFtO1xuICBwcml2YXRlIG1lbWJlcnNUYWJsZTogbmcuU3ltYm9sVGFibGV8dW5kZWZpbmVkO1xuICBwcml2YXRlIHF1ZXJ5Q2FjaGU6IG5nLlN5bWJvbFF1ZXJ5fHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogVHlwZVNjcmlwdFNlcnZpY2VIb3N0LFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBjbGFzc0RlY2xOb2RlOiB0cy5DbGFzc0RlY2xhcmF0aW9uLFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBjbGFzc1N5bWJvbDogbmcuU3RhdGljU3ltYm9sKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gaG9zdC5wcm9ncmFtO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0IHNwYW4oKTogbmcuU3BhbjtcbiAgYWJzdHJhY3QgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0IHNvdXJjZSgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgQW5ndWxhciBTdGF0aWNTeW1ib2wgZm9yIHRoZSBjbGFzcyB0aGF0IGNvbnRhaW5zIHRoaXMgdGVtcGxhdGUuXG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc1N5bWJvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBNYXAtbGlrZSBkYXRhIHN0cnVjdHVyZSB0aGF0IGFsbG93cyB1c2VycyB0byByZXRyaWV2ZSBzb21lIG9yIGFsbFxuICAgKiB0b3AtbGV2ZWwgZGVjbGFyYXRpb25zIGluIHRoZSBhc3NvY2lhdGVkIGNvbXBvbmVudCBjbGFzcy5cbiAgICovXG4gIGdldCBtZW1iZXJzKCkge1xuICAgIGlmICghdGhpcy5tZW1iZXJzVGFibGUpIHtcbiAgICAgIGNvbnN0IHR5cGVDaGVja2VyID0gdGhpcy5wcm9ncmFtLmdldFR5cGVDaGVja2VyKCk7XG4gICAgICBjb25zdCBzb3VyY2VGaWxlID0gdGhpcy5jbGFzc0RlY2xOb2RlLmdldFNvdXJjZUZpbGUoKTtcbiAgICAgIHRoaXMubWVtYmVyc1RhYmxlID0gdGhpcy5xdWVyeS5tZXJnZVN5bWJvbFRhYmxlKFtcbiAgICAgICAgY3JlYXRlR2xvYmFsU3ltYm9sVGFibGUodGhpcy5xdWVyeSksXG4gICAgICAgIGdldENsYXNzTWVtYmVyc0Zyb21EZWNsYXJhdGlvbih0aGlzLnByb2dyYW0sIHR5cGVDaGVja2VyLCBzb3VyY2VGaWxlLCB0aGlzLmNsYXNzRGVjbE5vZGUpLFxuICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1lbWJlcnNUYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gZW5naW5lIHRoYXQgcHJvdmlkZXMgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBzeW1ib2xzIGluIHRoZVxuICAgKiB0ZW1wbGF0ZS5cbiAgICovXG4gIGdldCBxdWVyeSgpIHtcbiAgICBpZiAoIXRoaXMucXVlcnlDYWNoZSkge1xuICAgICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcbiAgICAgIGNvbnN0IHR5cGVDaGVja2VyID0gcHJvZ3JhbS5nZXRUeXBlQ2hlY2tlcigpO1xuICAgICAgY29uc3Qgc291cmNlRmlsZSA9IHRoaXMuY2xhc3NEZWNsTm9kZS5nZXRTb3VyY2VGaWxlKCk7XG4gICAgICB0aGlzLnF1ZXJ5Q2FjaGUgPSBnZXRTeW1ib2xRdWVyeShwcm9ncmFtLCB0eXBlQ2hlY2tlciwgc291cmNlRmlsZSwgKCkgPT4ge1xuICAgICAgICAvLyBDb21wdXRpbmcgdGhlIGFzdCBpcyByZWxhdGl2ZWx5IGV4cGVuc2l2ZS4gRG8gaXQgb25seSB3aGVuIGFic29sdXRlbHlcbiAgICAgICAgLy8gbmVjZXNzYXJ5LlxuICAgICAgICAvLyBUT0RPOiBUaGVyZSBpcyBjaXJjdWxhciBkZXBlbmRlbmN5IGhlcmUgYmV0d2VlbiBUZW1wbGF0ZVNvdXJjZSBhbmRcbiAgICAgICAgLy8gVHlwZVNjcmlwdEhvc3QuIENvbnNpZGVyIHJlZmFjdG9yaW5nIHRoZSBjb2RlIHRvIGJyZWFrIHRoaXMgY3ljbGUuXG4gICAgICAgIGNvbnN0IGFzdCA9IHRoaXMuaG9zdC5nZXRUZW1wbGF0ZUFzdCh0aGlzKTtcbiAgICAgICAgY29uc3QgcGlwZXMgPSAoYXN0ICYmIGFzdC5waXBlcykgfHwgW107XG4gICAgICAgIHJldHVybiBnZXRQaXBlc1RhYmxlKHNvdXJjZUZpbGUsIHByb2dyYW0sIHR5cGVDaGVja2VyLCBwaXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIElubGluZVRlbXBsYXRlIHJlcHJlc2VudHMgdGVtcGxhdGUgZGVmaW5lZCBpbiBhIFRTIGZpbGUgdGhyb3VnaCB0aGVcbiAqIGB0ZW1wbGF0ZWAgYXR0cmlidXRlIGluIHRoZSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmxpbmVUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gIHB1YmxpYyByZWFkb25seSBmaWxlTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgc291cmNlOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBzcGFuOiBuZy5TcGFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgdGVtcGxhdGVOb2RlOiB0cy5TdHJpbmdMaXRlcmFsTGlrZSwgY2xhc3NEZWNsTm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbixcbiAgICAgIGNsYXNzU3ltYm9sOiBuZy5TdGF0aWNTeW1ib2wsIGhvc3Q6IFR5cGVTY3JpcHRTZXJ2aWNlSG9zdCkge1xuICAgIHN1cGVyKGhvc3QsIGNsYXNzRGVjbE5vZGUsIGNsYXNzU3ltYm9sKTtcbiAgICBjb25zdCBzb3VyY2VGaWxlID0gdGVtcGxhdGVOb2RlLmdldFNvdXJjZUZpbGUoKTtcbiAgICBpZiAoc291cmNlRmlsZSAhPT0gY2xhc3NEZWNsTm9kZS5nZXRTb3VyY2VGaWxlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5saW5lIHRlbXBsYXRlIGFuZCBjb21wb25lbnQgY2xhc3Mgc2hvdWxkIGJlbG9uZyB0byB0aGUgc2FtZSBzb3VyY2UgZmlsZWApO1xuICAgIH1cbiAgICB0aGlzLmZpbGVOYW1lID0gc291cmNlRmlsZS5maWxlTmFtZTtcbiAgICAvLyBub2RlLnRleHQgcmV0dXJucyB0aGUgVFMgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIG5vcm1hbGl6ZWQgdGV4dCxcbiAgICAvLyBhbmQgYWxsIENSIGNoYXJhY3RlcnMgYXJlIHN0cmlwcGVkLiBub2RlLmdldFRleHQoKSByZXR1cm5zIHRoZSByYXcgdGV4dC5cbiAgICB0aGlzLnNvdXJjZSA9IHRlbXBsYXRlTm9kZS5nZXRUZXh0KCkuc2xpY2UoMSwgLTEpOyAgLy8gc3RyaXAgbGVhZGluZyBhbmQgdHJhaWxpbmcgcXVvdGVzXG4gICAgdGhpcy5zcGFuID0ge1xuICAgICAgLy8gVFMgc3RyaW5nIGxpdGVyYWwgaW5jbHVkZXMgc3Vycm91bmRpbmcgcXVvdGVzIGluIHRoZSBzdGFydC9lbmQgb2Zmc2V0cy5cbiAgICAgIHN0YXJ0OiB0ZW1wbGF0ZU5vZGUuZ2V0U3RhcnQoKSArIDEsXG4gICAgICBlbmQ6IHRlbXBsYXRlTm9kZS5nZXRFbmQoKSAtIDEsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEV4dGVybmFsVGVtcGxhdGUgcmVwcmVzZW50cyB0ZW1wbGF0ZSBkZWZpbmVkIGluIGFuIGV4dGVybmFsIChtb3N0IGxpa2VseVxuICogSFRNTCwgYnV0IG5vdCBuZWNlc3NhcmlseSkgZmlsZSB0aHJvdWdoIHRoZSBgdGVtcGxhdGVVcmxgIGF0dHJpYnV0ZSBpbiB0aGVcbiAqIGRlY29yYXRvci5cbiAqIE5vdGUgdGhhdCB0aGVyZSBpcyBubyB0cy5Ob2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGVtcGxhdGUgYmVjYXVzZSBpdCdzIG5vdFxuICogYSBUUyBmaWxlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gIHB1YmxpYyByZWFkb25seSBzcGFuOiBuZy5TcGFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHJlYWRvbmx5IHNvdXJjZTogc3RyaW5nLCBwdWJsaWMgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZyxcbiAgICAgIGNsYXNzRGVjbE5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24sIGNsYXNzU3ltYm9sOiBuZy5TdGF0aWNTeW1ib2wsXG4gICAgICBob3N0OiBUeXBlU2NyaXB0U2VydmljZUhvc3QpIHtcbiAgICBzdXBlcihob3N0LCBjbGFzc0RlY2xOb2RlLCBjbGFzc1N5bWJvbCk7XG4gICAgdGhpcy5zcGFuID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBlbmQ6IHNvdXJjZS5sZW5ndGgsXG4gICAgfTtcbiAgfVxufVxuIl19