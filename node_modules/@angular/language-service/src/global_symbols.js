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
        define("@angular/language-service/src/global_symbols", ["require", "exports", "@angular/language-service/src/types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ng = require("@angular/language-service/src/types");
    exports.EMPTY_SYMBOL_TABLE = {
        size: 0,
        get: function () { return undefined; },
        has: function () { return false; },
        values: function () { return []; },
    };
    /**
     * A factory function that returns a symbol table that contains all global symbols
     * available in an interpolation scope in a template.
     * This function creates the table the first time it is called, and return a cached
     * value for all subsequent calls.
     */
    exports.createGlobalSymbolTable = (function () {
        var GLOBAL_SYMBOL_TABLE;
        return function (query) {
            if (GLOBAL_SYMBOL_TABLE) {
                return GLOBAL_SYMBOL_TABLE;
            }
            GLOBAL_SYMBOL_TABLE = query.createSymbolTable([
                // The `$any()` method casts the type of an expression to `any`.
                // https://angular.io/guide/template-syntax#the-any-type-cast-function
                {
                    name: '$any',
                    kind: 'method',
                    type: {
                        name: '$any',
                        kind: 'method',
                        type: undefined,
                        language: 'typescript',
                        container: undefined,
                        public: true,
                        callable: true,
                        definition: undefined,
                        nullable: false,
                        documentation: [{
                                kind: 'text',
                                text: 'function to cast an expression to the `any` type',
                            }],
                        members: function () { return exports.EMPTY_SYMBOL_TABLE; },
                        signatures: function () { return []; },
                        selectSignature: function (args) {
                            if (args.length !== 1) {
                                return;
                            }
                            return {
                                arguments: exports.EMPTY_SYMBOL_TABLE,
                                result: query.getBuiltinType(ng.BuiltinType.Any),
                            };
                        },
                        indexed: function () { return undefined; },
                        typeArguments: function () { return undefined; },
                    },
                },
            ]);
            return GLOBAL_SYMBOL_TABLE;
        };
    })();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3N5bWJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9nbG9iYWxfc3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHdEQUFtQztJQUV0QixRQUFBLGtCQUFrQixHQUE2QjtRQUMxRCxJQUFJLEVBQUUsQ0FBQztRQUNQLEdBQUcsRUFBRSxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVM7UUFDcEIsR0FBRyxFQUFFLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSztRQUNoQixNQUFNLEVBQUUsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFO0tBQ2pCLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNVLFFBQUEsdUJBQXVCLEdBQThDLENBQUM7UUFDakYsSUFBSSxtQkFBNkMsQ0FBQztRQUNsRCxPQUFPLFVBQVMsS0FBcUI7WUFDbkMsSUFBSSxtQkFBbUIsRUFBRTtnQkFDdkIsT0FBTyxtQkFBbUIsQ0FBQzthQUM1QjtZQUNELG1CQUFtQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUMsZ0VBQWdFO2dCQUNoRSxzRUFBc0U7Z0JBQ3RFO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsU0FBUzt3QkFDZixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLE1BQU0sRUFBRSxJQUFJO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixRQUFRLEVBQUUsS0FBSzt3QkFDZixhQUFhLEVBQUUsQ0FBQztnQ0FDZCxJQUFJLEVBQUUsTUFBTTtnQ0FDWixJQUFJLEVBQUUsa0RBQWtEOzZCQUN6RCxDQUFDO3dCQUNGLE9BQU8sRUFBRSxjQUFNLE9BQUEsMEJBQWtCLEVBQWxCLENBQWtCO3dCQUNqQyxVQUFVLEVBQUUsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFO3dCQUNwQixlQUFlLEVBQWYsVUFBZ0IsSUFBaUI7NEJBQy9CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0NBQ3JCLE9BQU87NkJBQ1I7NEJBQ0QsT0FBTztnQ0FDTCxTQUFTLEVBQUUsMEJBQWtCO2dDQUM3QixNQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs2QkFDakQsQ0FBQzt3QkFDSixDQUFDO3dCQUNELE9BQU8sRUFBRSxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVM7d0JBQ3hCLGFBQWEsRUFBRSxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVM7cUJBQy9CO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxtQkFBbUIsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBuZyBmcm9tICcuLi9zcmMvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1lNQk9MX1RBQkxFOiBSZWFkb25seTxuZy5TeW1ib2xUYWJsZT4gPSB7XG4gIHNpemU6IDAsXG4gIGdldDogKCkgPT4gdW5kZWZpbmVkLFxuICBoYXM6ICgpID0+IGZhbHNlLFxuICB2YWx1ZXM6ICgpID0+IFtdLFxufTtcblxuLyoqXG4gKiBBIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3ltYm9sIHRhYmxlIHRoYXQgY29udGFpbnMgYWxsIGdsb2JhbCBzeW1ib2xzXG4gKiBhdmFpbGFibGUgaW4gYW4gaW50ZXJwb2xhdGlvbiBzY29wZSBpbiBhIHRlbXBsYXRlLlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSB0YWJsZSB0aGUgZmlyc3QgdGltZSBpdCBpcyBjYWxsZWQsIGFuZCByZXR1cm4gYSBjYWNoZWRcbiAqIHZhbHVlIGZvciBhbGwgc3Vic2VxdWVudCBjYWxscy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUdsb2JhbFN5bWJvbFRhYmxlOiAocXVlcnk6IG5nLlN5bWJvbFF1ZXJ5KSA9PiBuZy5TeW1ib2xUYWJsZSA9IChmdW5jdGlvbigpIHtcbiAgbGV0IEdMT0JBTF9TWU1CT0xfVEFCTEU6IG5nLlN5bWJvbFRhYmxlfHVuZGVmaW5lZDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHF1ZXJ5OiBuZy5TeW1ib2xRdWVyeSkge1xuICAgIGlmIChHTE9CQUxfU1lNQk9MX1RBQkxFKSB7XG4gICAgICByZXR1cm4gR0xPQkFMX1NZTUJPTF9UQUJMRTtcbiAgICB9XG4gICAgR0xPQkFMX1NZTUJPTF9UQUJMRSA9IHF1ZXJ5LmNyZWF0ZVN5bWJvbFRhYmxlKFtcbiAgICAgIC8vIFRoZSBgJGFueSgpYCBtZXRob2QgY2FzdHMgdGhlIHR5cGUgb2YgYW4gZXhwcmVzc2lvbiB0byBgYW55YC5cbiAgICAgIC8vIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS90ZW1wbGF0ZS1zeW50YXgjdGhlLWFueS10eXBlLWNhc3QtZnVuY3Rpb25cbiAgICAgIHtcbiAgICAgICAgbmFtZTogJyRhbnknLFxuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIG5hbWU6ICckYW55JyxcbiAgICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcbiAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwdWJsaWM6IHRydWUsXG4gICAgICAgICAgY2FsbGFibGU6IHRydWUsXG4gICAgICAgICAgZGVmaW5pdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgIG51bGxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkb2N1bWVudGF0aW9uOiBbe1xuICAgICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ2Z1bmN0aW9uIHRvIGNhc3QgYW4gZXhwcmVzc2lvbiB0byB0aGUgYGFueWAgdHlwZScsXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgbWVtYmVyczogKCkgPT4gRU1QVFlfU1lNQk9MX1RBQkxFLFxuICAgICAgICAgIHNpZ25hdHVyZXM6ICgpID0+IFtdLFxuICAgICAgICAgIHNlbGVjdFNpZ25hdHVyZShhcmdzOiBuZy5TeW1ib2xbXSkge1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGFyZ3VtZW50czogRU1QVFlfU1lNQk9MX1RBQkxFLCAgLy8gbm90IHVzZWRcbiAgICAgICAgICAgICAgcmVzdWx0OiBxdWVyeS5nZXRCdWlsdGluVHlwZShuZy5CdWlsdGluVHlwZS5BbnkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4ZWQ6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgICB0eXBlQXJndW1lbnRzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHJldHVybiBHTE9CQUxfU1lNQk9MX1RBQkxFO1xuICB9O1xufSkoKTtcbiJdfQ==