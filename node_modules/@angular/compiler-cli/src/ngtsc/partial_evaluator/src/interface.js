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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interface", ["require", "exports", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interpreter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var interpreter_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interpreter");
    var PartialEvaluator = /** @class */ (function () {
        function PartialEvaluator(host, checker, dependencyTracker) {
            this.host = host;
            this.checker = checker;
            this.dependencyTracker = dependencyTracker;
        }
        PartialEvaluator.prototype.evaluate = function (expr, foreignFunctionResolver) {
            var interpreter = new interpreter_1.StaticInterpreter(this.host, this.checker, this.dependencyTracker);
            var sourceFile = expr.getSourceFile();
            return interpreter.visit(expr, {
                originatingFile: sourceFile,
                absoluteModuleName: null,
                resolutionContext: sourceFile.fileName,
                scope: new Map(),
                foreignFunctionResolver: foreignFunctionResolver,
            });
        };
        return PartialEvaluator;
    }());
    exports.PartialEvaluator = PartialEvaluator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvci9zcmMvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBUUgsaUdBQWdEO0lBT2hEO1FBQ0UsMEJBQ1ksSUFBb0IsRUFBVSxPQUF1QixFQUNyRCxpQkFBeUM7WUFEekMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtZQUNyRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQUcsQ0FBQztRQUV6RCxtQ0FBUSxHQUFSLFVBQVMsSUFBbUIsRUFBRSx1QkFBaUQ7WUFDN0UsSUFBTSxXQUFXLEdBQUcsSUFBSSwrQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0YsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLGVBQWUsRUFBRSxVQUFVO2dCQUMzQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixpQkFBaUIsRUFBRSxVQUFVLENBQUMsUUFBUTtnQkFDdEMsS0FBSyxFQUFFLElBQUksR0FBRyxFQUEwQztnQkFDeEQsdUJBQXVCLHlCQUFBO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDSCx1QkFBQztJQUFELENBQUMsQUFoQkQsSUFnQkM7SUFoQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtEZXBlbmRlbmN5VHJhY2tlcn0gZnJvbSAnLi4vLi4vaW5jcmVtZW50YWwvYXBpJztcbmltcG9ydCB7UmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuXG5pbXBvcnQge1N0YXRpY0ludGVycHJldGVyfSBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCB7UmVzb2x2ZWRWYWx1ZX0gZnJvbSAnLi9yZXN1bHQnO1xuXG5leHBvcnQgdHlwZSBGb3JlaWduRnVuY3Rpb25SZXNvbHZlciA9XG4gICAgKG5vZGU6IFJlZmVyZW5jZTx0cy5GdW5jdGlvbkRlY2xhcmF0aW9ufHRzLk1ldGhvZERlY2xhcmF0aW9ufHRzLkZ1bmN0aW9uRXhwcmVzc2lvbj4sXG4gICAgIGFyZ3M6IFJlYWRvbmx5QXJyYXk8dHMuRXhwcmVzc2lvbj4pID0+IHRzLkV4cHJlc3Npb258bnVsbDtcblxuZXhwb3J0IGNsYXNzIFBhcnRpYWxFdmFsdWF0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaG9zdDogUmVmbGVjdGlvbkhvc3QsIHByaXZhdGUgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsXG4gICAgICBwcml2YXRlIGRlcGVuZGVuY3lUcmFja2VyOiBEZXBlbmRlbmN5VHJhY2tlcnxudWxsKSB7fVxuXG4gIGV2YWx1YXRlKGV4cHI6IHRzLkV4cHJlc3Npb24sIGZvcmVpZ25GdW5jdGlvblJlc29sdmVyPzogRm9yZWlnbkZ1bmN0aW9uUmVzb2x2ZXIpOiBSZXNvbHZlZFZhbHVlIHtcbiAgICBjb25zdCBpbnRlcnByZXRlciA9IG5ldyBTdGF0aWNJbnRlcnByZXRlcih0aGlzLmhvc3QsIHRoaXMuY2hlY2tlciwgdGhpcy5kZXBlbmRlbmN5VHJhY2tlcik7XG4gICAgY29uc3Qgc291cmNlRmlsZSA9IGV4cHIuZ2V0U291cmNlRmlsZSgpO1xuICAgIHJldHVybiBpbnRlcnByZXRlci52aXNpdChleHByLCB7XG4gICAgICBvcmlnaW5hdGluZ0ZpbGU6IHNvdXJjZUZpbGUsXG4gICAgICBhYnNvbHV0ZU1vZHVsZU5hbWU6IG51bGwsXG4gICAgICByZXNvbHV0aW9uQ29udGV4dDogc291cmNlRmlsZS5maWxlTmFtZSxcbiAgICAgIHNjb3BlOiBuZXcgTWFwPHRzLlBhcmFtZXRlckRlY2xhcmF0aW9uLCBSZXNvbHZlZFZhbHVlPigpLFxuICAgICAgZm9yZWlnbkZ1bmN0aW9uUmVzb2x2ZXIsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==