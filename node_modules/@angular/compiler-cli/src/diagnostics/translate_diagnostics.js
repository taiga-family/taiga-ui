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
        define("@angular/compiler-cli/src/diagnostics/translate_diagnostics", ["require", "exports", "typescript", "@angular/compiler-cli/src/transformers/api", "@angular/compiler-cli/src/transformers/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    var api_1 = require("@angular/compiler-cli/src/transformers/api");
    var util_1 = require("@angular/compiler-cli/src/transformers/util");
    function translateDiagnostics(host, untranslatedDiagnostics) {
        var ts = [];
        var ng = [];
        untranslatedDiagnostics.forEach(function (diagnostic) {
            if (diagnostic.file && diagnostic.start && util_1.GENERATED_FILES.test(diagnostic.file.fileName)) {
                // We need to filter out diagnostics about unused functions as
                // they are in fact referenced by nobody and only serve to surface
                // type check errors.
                if (diagnostic.code === /* ... is declared but never used */ 6133) {
                    return;
                }
                var span = sourceSpanOf(host, diagnostic.file, diagnostic.start);
                if (span) {
                    var fileName = span.start.file.url;
                    ng.push({
                        messageText: diagnosticMessageToString(diagnostic.messageText),
                        category: diagnostic.category,
                        span: span,
                        source: api_1.SOURCE,
                        code: api_1.DEFAULT_ERROR_CODE
                    });
                }
            }
            else {
                ts.push(diagnostic);
            }
        });
        return { ts: ts, ng: ng };
    }
    exports.translateDiagnostics = translateDiagnostics;
    function sourceSpanOf(host, source, start) {
        var _a = ts.getLineAndCharacterOfPosition(source, start), line = _a.line, character = _a.character;
        return host.parseSourceSpanOf(source.fileName, line, character);
    }
    function diagnosticMessageToString(message) {
        return ts.flattenDiagnosticMessageText(message, '\n');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlX2RpYWdub3N0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9kaWFnbm9zdGljcy90cmFuc2xhdGVfZGlhZ25vc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFHSCwrQkFBaUM7SUFFakMsa0VBQTJFO0lBQzNFLG9FQUFxRDtJQU1yRCxTQUFnQixvQkFBb0IsQ0FDaEMsSUFBbUIsRUFBRSx1QkFBcUQ7UUFFNUUsSUFBTSxFQUFFLEdBQW9CLEVBQUUsQ0FBQztRQUMvQixJQUFNLEVBQUUsR0FBaUIsRUFBRSxDQUFDO1FBRTVCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7WUFDekMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLElBQUksc0JBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekYsOERBQThEO2dCQUM5RCxrRUFBa0U7Z0JBQ2xFLHFCQUFxQjtnQkFDckIsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLG9DQUFvQyxDQUFDLElBQUksRUFBRTtvQkFDakUsT0FBTztpQkFDUjtnQkFDRCxJQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ04sV0FBVyxFQUFFLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7d0JBQzlELFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTt3QkFDN0IsSUFBSSxNQUFBO3dCQUNKLE1BQU0sRUFBRSxZQUFNO3dCQUNkLElBQUksRUFBRSx3QkFBa0I7cUJBQ3pCLENBQUMsQ0FBQztpQkFDSjthQUNGO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBQyxFQUFFLElBQUEsRUFBRSxFQUFFLElBQUEsRUFBQyxDQUFDO0lBQ2xCLENBQUM7SUE5QkQsb0RBOEJDO0lBRUQsU0FBUyxZQUFZLENBQUMsSUFBbUIsRUFBRSxNQUFxQixFQUFFLEtBQWE7UUFFdkUsSUFBQSxvREFBbUUsRUFBbEUsY0FBSSxFQUFFLHdCQUE0RCxDQUFDO1FBQzFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxTQUFTLHlCQUF5QixDQUFDLE9BQXlDO1FBQzFFLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7REVGQVVMVF9FUlJPUl9DT0RFLCBEaWFnbm9zdGljLCBTT1VSQ0V9IGZyb20gJy4uL3RyYW5zZm9ybWVycy9hcGknO1xuaW1wb3J0IHtHRU5FUkFURURfRklMRVN9IGZyb20gJy4uL3RyYW5zZm9ybWVycy91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBUeXBlQ2hlY2tIb3N0IHtcbiAgcGFyc2VTb3VyY2VTcGFuT2YoZmlsZU5hbWU6IHN0cmluZywgbGluZTogbnVtYmVyLCBjaGFyYWN0ZXI6IG51bWJlcik6IFBhcnNlU291cmNlU3BhbnxudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRGlhZ25vc3RpY3MoXG4gICAgaG9zdDogVHlwZUNoZWNrSG9zdCwgdW50cmFuc2xhdGVkRGlhZ25vc3RpY3M6IFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpYz4pOlxuICAgIHt0czogdHMuRGlhZ25vc3RpY1tdLCBuZzogRGlhZ25vc3RpY1tdfSB7XG4gIGNvbnN0IHRzOiB0cy5EaWFnbm9zdGljW10gPSBbXTtcbiAgY29uc3Qgbmc6IERpYWdub3N0aWNbXSA9IFtdO1xuXG4gIHVudHJhbnNsYXRlZERpYWdub3N0aWNzLmZvckVhY2goKGRpYWdub3N0aWMpID0+IHtcbiAgICBpZiAoZGlhZ25vc3RpYy5maWxlICYmIGRpYWdub3N0aWMuc3RhcnQgJiYgR0VORVJBVEVEX0ZJTEVTLnRlc3QoZGlhZ25vc3RpYy5maWxlLmZpbGVOYW1lKSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBmaWx0ZXIgb3V0IGRpYWdub3N0aWNzIGFib3V0IHVudXNlZCBmdW5jdGlvbnMgYXNcbiAgICAgIC8vIHRoZXkgYXJlIGluIGZhY3QgcmVmZXJlbmNlZCBieSBub2JvZHkgYW5kIG9ubHkgc2VydmUgdG8gc3VyZmFjZVxuICAgICAgLy8gdHlwZSBjaGVjayBlcnJvcnMuXG4gICAgICBpZiAoZGlhZ25vc3RpYy5jb2RlID09PSAvKiAuLi4gaXMgZGVjbGFyZWQgYnV0IG5ldmVyIHVzZWQgKi8gNjEzMykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzcGFuID0gc291cmNlU3Bhbk9mKGhvc3QsIGRpYWdub3N0aWMuZmlsZSwgZGlhZ25vc3RpYy5zdGFydCk7XG4gICAgICBpZiAoc3Bhbikge1xuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgICAgIG5nLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VUZXh0OiBkaWFnbm9zdGljTWVzc2FnZVRvU3RyaW5nKGRpYWdub3N0aWMubWVzc2FnZVRleHQpLFxuICAgICAgICAgIGNhdGVnb3J5OiBkaWFnbm9zdGljLmNhdGVnb3J5LFxuICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgc291cmNlOiBTT1VSQ0UsXG4gICAgICAgICAgY29kZTogREVGQVVMVF9FUlJPUl9DT0RFXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cy5wdXNoKGRpYWdub3N0aWMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7dHMsIG5nfTtcbn1cblxuZnVuY3Rpb24gc291cmNlU3Bhbk9mKGhvc3Q6IFR5cGVDaGVja0hvc3QsIHNvdXJjZTogdHMuU291cmNlRmlsZSwgc3RhcnQ6IG51bWJlcik6IFBhcnNlU291cmNlU3BhbnxcbiAgICBudWxsIHtcbiAgY29uc3Qge2xpbmUsIGNoYXJhY3Rlcn0gPSB0cy5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihzb3VyY2UsIHN0YXJ0KTtcbiAgcmV0dXJuIGhvc3QucGFyc2VTb3VyY2VTcGFuT2Yoc291cmNlLmZpbGVOYW1lLCBsaW5lLCBjaGFyYWN0ZXIpO1xufVxuXG5mdW5jdGlvbiBkaWFnbm9zdGljTWVzc2FnZVRvU3RyaW5nKG1lc3NhZ2U6IHRzLkRpYWdub3N0aWNNZXNzYWdlQ2hhaW58c3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRzLmZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQobWVzc2FnZSwgJ1xcbicpO1xufVxuIl19