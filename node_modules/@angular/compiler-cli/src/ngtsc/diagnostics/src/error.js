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
        define("@angular/compiler-cli/src/ngtsc/diagnostics/src/error", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    var FatalDiagnosticError = /** @class */ (function () {
        function FatalDiagnosticError(code, node, message) {
            this.code = code;
            this.node = node;
            this.message = message;
            /**
             * @internal
             */
            this._isFatalDiagnosticError = true;
        }
        FatalDiagnosticError.prototype.toDiagnostic = function () {
            return makeDiagnostic(this.code, this.node, this.message);
        };
        return FatalDiagnosticError;
    }());
    exports.FatalDiagnosticError = FatalDiagnosticError;
    function makeDiagnostic(code, node, messageText, relatedInfo) {
        node = ts.getOriginalNode(node);
        var diag = {
            category: ts.DiagnosticCategory.Error,
            code: Number('-99' + code.valueOf()),
            file: ts.getOriginalNode(node).getSourceFile(),
            start: node.getStart(undefined, false),
            length: node.getWidth(),
            messageText: messageText,
        };
        if (relatedInfo !== undefined) {
            diag.relatedInformation = relatedInfo.map(function (info) {
                var infoNode = ts.getOriginalNode(info.node);
                return {
                    category: ts.DiagnosticCategory.Message,
                    code: 0,
                    file: infoNode.getSourceFile(),
                    start: infoNode.getStart(),
                    length: infoNode.getWidth(),
                    messageText: info.messageText,
                };
            });
        }
        return diag;
    }
    exports.makeDiagnostic = makeDiagnostic;
    function isFatalDiagnosticError(err) {
        return err._isFatalDiagnosticError === true;
    }
    exports.isFatalDiagnosticError = isFatalDiagnosticError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2RpYWdub3N0aWNzL3NyYy9lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUlqQztRQUNFLDhCQUFxQixJQUFlLEVBQVcsSUFBYSxFQUFXLE9BQWU7WUFBakUsU0FBSSxHQUFKLElBQUksQ0FBVztZQUFXLFNBQUksR0FBSixJQUFJLENBQVM7WUFBVyxZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRXRGOztlQUVHO1lBQ0gsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBTDBELENBQUM7UUFPMUYsMkNBQVksR0FBWjtZQUNFLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQVhELElBV0M7SUFYWSxvREFBb0I7SUFhakMsU0FBZ0IsY0FBYyxDQUFDLElBQWUsRUFBRSxJQUFhLEVBQUUsV0FBbUIsRUFBRSxXQUdqRjtRQUNELElBQUksR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUE4QjtZQUN0QyxRQUFRLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7WUFDckMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLElBQUksRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFdBQVcsYUFBQTtTQUNaLENBQUM7UUFDRixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUM1QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsT0FBTztvQkFDTCxRQUFRLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE9BQU87b0JBQ3ZDLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFO29CQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDMUIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUU7b0JBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDOUIsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUEzQkQsd0NBMkJDO0lBRUQsU0FBZ0Isc0JBQXNCLENBQUMsR0FBUTtRQUM3QyxPQUFPLEdBQUcsQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLENBQUM7SUFDOUMsQ0FBQztJQUZELHdEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtFcnJvckNvZGV9IGZyb20gJy4vZXJyb3JfY29kZSc7XG5cbmV4cG9ydCBjbGFzcyBGYXRhbERpYWdub3N0aWNFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvZGU6IEVycm9yQ29kZSwgcmVhZG9ubHkgbm9kZTogdHMuTm9kZSwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pc0ZhdGFsRGlhZ25vc3RpY0Vycm9yID0gdHJ1ZTtcblxuICB0b0RpYWdub3N0aWMoKTogdHMuRGlhZ25vc3RpY1dpdGhMb2NhdGlvbiB7XG4gICAgcmV0dXJuIG1ha2VEaWFnbm9zdGljKHRoaXMuY29kZSwgdGhpcy5ub2RlLCB0aGlzLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGlhZ25vc3RpYyhjb2RlOiBFcnJvckNvZGUsIG5vZGU6IHRzLk5vZGUsIG1lc3NhZ2VUZXh0OiBzdHJpbmcsIHJlbGF0ZWRJbmZvPzoge1xuICBub2RlOiB0cy5Ob2RlLFxuICBtZXNzYWdlVGV4dDogc3RyaW5nLFxufVtdKTogdHMuRGlhZ25vc3RpY1dpdGhMb2NhdGlvbiB7XG4gIG5vZGUgPSB0cy5nZXRPcmlnaW5hbE5vZGUobm9kZSk7XG4gIGNvbnN0IGRpYWc6IHRzLkRpYWdub3N0aWNXaXRoTG9jYXRpb24gPSB7XG4gICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5FcnJvcixcbiAgICBjb2RlOiBOdW1iZXIoJy05OScgKyBjb2RlLnZhbHVlT2YoKSksXG4gICAgZmlsZTogdHMuZ2V0T3JpZ2luYWxOb2RlKG5vZGUpLmdldFNvdXJjZUZpbGUoKSxcbiAgICBzdGFydDogbm9kZS5nZXRTdGFydCh1bmRlZmluZWQsIGZhbHNlKSxcbiAgICBsZW5ndGg6IG5vZGUuZ2V0V2lkdGgoKSxcbiAgICBtZXNzYWdlVGV4dCxcbiAgfTtcbiAgaWYgKHJlbGF0ZWRJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICBkaWFnLnJlbGF0ZWRJbmZvcm1hdGlvbiA9IHJlbGF0ZWRJbmZvLm1hcChpbmZvID0+IHtcbiAgICAgIGNvbnN0IGluZm9Ob2RlID0gdHMuZ2V0T3JpZ2luYWxOb2RlKGluZm8ubm9kZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5Lk1lc3NhZ2UsXG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIGZpbGU6IGluZm9Ob2RlLmdldFNvdXJjZUZpbGUoKSxcbiAgICAgICAgc3RhcnQ6IGluZm9Ob2RlLmdldFN0YXJ0KCksXG4gICAgICAgIGxlbmd0aDogaW5mb05vZGUuZ2V0V2lkdGgoKSxcbiAgICAgICAgbWVzc2FnZVRleHQ6IGluZm8ubWVzc2FnZVRleHQsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkaWFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGYXRhbERpYWdub3N0aWNFcnJvcihlcnI6IGFueSk6IGVyciBpcyBGYXRhbERpYWdub3N0aWNFcnJvciB7XG4gIHJldHVybiBlcnIuX2lzRmF0YWxEaWFnbm9zdGljRXJyb3IgPT09IHRydWU7XG59XG4iXX0=