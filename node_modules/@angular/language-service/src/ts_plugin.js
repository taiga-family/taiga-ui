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
        define("@angular/language-service/src/ts_plugin", ["require", "exports", "tslib", "@angular/language-service/src/language_service", "@angular/language-service/src/typescript_host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var language_service_1 = require("@angular/language-service/src/language_service");
    var typescript_host_1 = require("@angular/language-service/src/typescript_host");
    function create(info) {
        var tsLS = info.languageService, tsLSHost = info.languageServiceHost, config = info.config;
        // This plugin could operate under two different modes:
        // 1. TS + Angular
        //    Plugin augments TS language service to provide additional Angular
        //    information. This only works with inline templates and is meant to be
        //    used as a local plugin (configured via tsconfig.json)
        // 2. Angular only
        //    Plugin only provides information on Angular templates, no TS info at all.
        //    This effectively disables native TS features and is meant for internal
        //    use only.
        var angularOnly = config ? config.angularOnly === true : false;
        var ngLSHost = new typescript_host_1.TypeScriptServiceHost(tsLSHost, tsLS);
        var ngLS = language_service_1.createLanguageService(ngLSHost);
        function getCompletionsAtPosition(fileName, position, options) {
            if (!angularOnly) {
                var results = tsLS.getCompletionsAtPosition(fileName, position, options);
                if (results && results.entries.length) {
                    // If TS could answer the query, then return results immediately.
                    return results;
                }
            }
            return ngLS.getCompletionsAtPosition(fileName, position, options);
        }
        function getQuickInfoAtPosition(fileName, position) {
            if (!angularOnly) {
                var result = tsLS.getQuickInfoAtPosition(fileName, position);
                if (result) {
                    // If TS could answer the query, then return results immediately.
                    return result;
                }
            }
            return ngLS.getQuickInfoAtPosition(fileName, position);
        }
        function getSemanticDiagnostics(fileName) {
            var results = [];
            if (!angularOnly) {
                results.push.apply(results, tslib_1.__spread(tsLS.getSemanticDiagnostics(fileName)));
            }
            // For semantic diagnostics we need to combine both TS + Angular results
            results.push.apply(results, tslib_1.__spread(ngLS.getSemanticDiagnostics(fileName)));
            return results;
        }
        function getDefinitionAtPosition(fileName, position) {
            if (!angularOnly) {
                var results = tsLS.getDefinitionAtPosition(fileName, position);
                if (results) {
                    // If TS could answer the query, then return results immediately.
                    return results;
                }
            }
            var result = ngLS.getDefinitionAndBoundSpan(fileName, position);
            if (!result || !result.definitions || !result.definitions.length) {
                return;
            }
            return result.definitions;
        }
        function getDefinitionAndBoundSpan(fileName, position) {
            if (!angularOnly) {
                var result = tsLS.getDefinitionAndBoundSpan(fileName, position);
                if (result) {
                    // If TS could answer the query, then return results immediately.
                    return result;
                }
            }
            return ngLS.getDefinitionAndBoundSpan(fileName, position);
        }
        var proxy = Object.assign(
        // First clone the original TS language service
        {}, tsLS, 
        // Then override the methods supported by Angular language service
        {
            getCompletionsAtPosition: getCompletionsAtPosition,
            getQuickInfoAtPosition: getQuickInfoAtPosition,
            getSemanticDiagnostics: getSemanticDiagnostics,
            getDefinitionAtPosition: getDefinitionAtPosition,
            getDefinitionAndBoundSpan: getDefinitionAndBoundSpan,
        });
        return proxy;
    }
    exports.create = create;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHNfcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUlILG1GQUF5RDtJQUN6RCxpRkFBd0Q7SUFFeEQsU0FBZ0IsTUFBTSxDQUFDLElBQWlDO1FBQy9DLElBQUEsMkJBQXFCLEVBQUUsbUNBQTZCLEVBQUUsb0JBQU0sQ0FBUztRQUM1RSx1REFBdUQ7UUFDdkQsa0JBQWtCO1FBQ2xCLHVFQUF1RTtRQUN2RSwyRUFBMkU7UUFDM0UsMkRBQTJEO1FBQzNELGtCQUFrQjtRQUNsQiwrRUFBK0U7UUFDL0UsNEVBQTRFO1FBQzVFLGVBQWU7UUFDZixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakUsSUFBTSxRQUFRLEdBQUcsSUFBSSx1Q0FBcUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBTSxJQUFJLEdBQUcsd0NBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0MsU0FBUyx3QkFBd0IsQ0FDN0IsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLE9BQXNEO1lBQzVGLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDckMsaUVBQWlFO29CQUNqRSxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELFNBQVMsc0JBQXNCLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtZQUNoRSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixpRUFBaUU7b0JBQ2pFLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELFNBQVMsc0JBQXNCLENBQUMsUUFBZ0I7WUFDOUMsSUFBTSxPQUFPLEdBQXFCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxHQUFFO2FBQ3hEO1lBQ0Qsd0VBQXdFO1lBQ3hFLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEdBQUU7WUFDdkQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELFNBQVMsdUJBQXVCLENBQzVCLFFBQWdCLEVBQUUsUUFBZ0I7WUFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakUsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsaUVBQWlFO29CQUNqRSxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtZQUNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDaEUsT0FBTzthQUNSO1lBQ0QsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFFRCxTQUFTLHlCQUF5QixDQUM5QixRQUFnQixFQUFFLFFBQWdCO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksTUFBTSxFQUFFO29CQUNWLGlFQUFpRTtvQkFDakUsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsSUFBTSxLQUFLLEdBQXdCLE1BQU0sQ0FBQyxNQUFNO1FBQzVDLCtDQUErQztRQUMvQyxFQUFFLEVBQUUsSUFBSTtRQUNSLGtFQUFrRTtRQUNsRTtZQUNFLHdCQUF3QiwwQkFBQTtZQUN4QixzQkFBc0Isd0JBQUE7WUFDdEIsc0JBQXNCLHdCQUFBO1lBQ3RCLHVCQUF1Qix5QkFBQTtZQUN2Qix5QkFBeUIsMkJBQUE7U0FDMUIsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBeEZELHdCQXdGQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHNzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5cbmltcG9ydCB7Y3JlYXRlTGFuZ3VhZ2VTZXJ2aWNlfSBmcm9tICcuL2xhbmd1YWdlX3NlcnZpY2UnO1xuaW1wb3J0IHtUeXBlU2NyaXB0U2VydmljZUhvc3R9IGZyb20gJy4vdHlwZXNjcmlwdF9ob3N0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShpbmZvOiB0c3Muc2VydmVyLlBsdWdpbkNyZWF0ZUluZm8pOiB0c3MuTGFuZ3VhZ2VTZXJ2aWNlIHtcbiAgY29uc3Qge2xhbmd1YWdlU2VydmljZTogdHNMUywgbGFuZ3VhZ2VTZXJ2aWNlSG9zdDogdHNMU0hvc3QsIGNvbmZpZ30gPSBpbmZvO1xuICAvLyBUaGlzIHBsdWdpbiBjb3VsZCBvcGVyYXRlIHVuZGVyIHR3byBkaWZmZXJlbnQgbW9kZXM6XG4gIC8vIDEuIFRTICsgQW5ndWxhclxuICAvLyAgICBQbHVnaW4gYXVnbWVudHMgVFMgbGFuZ3VhZ2Ugc2VydmljZSB0byBwcm92aWRlIGFkZGl0aW9uYWwgQW5ndWxhclxuICAvLyAgICBpbmZvcm1hdGlvbi4gVGhpcyBvbmx5IHdvcmtzIHdpdGggaW5saW5lIHRlbXBsYXRlcyBhbmQgaXMgbWVhbnQgdG8gYmVcbiAgLy8gICAgdXNlZCBhcyBhIGxvY2FsIHBsdWdpbiAoY29uZmlndXJlZCB2aWEgdHNjb25maWcuanNvbilcbiAgLy8gMi4gQW5ndWxhciBvbmx5XG4gIC8vICAgIFBsdWdpbiBvbmx5IHByb3ZpZGVzIGluZm9ybWF0aW9uIG9uIEFuZ3VsYXIgdGVtcGxhdGVzLCBubyBUUyBpbmZvIGF0IGFsbC5cbiAgLy8gICAgVGhpcyBlZmZlY3RpdmVseSBkaXNhYmxlcyBuYXRpdmUgVFMgZmVhdHVyZXMgYW5kIGlzIG1lYW50IGZvciBpbnRlcm5hbFxuICAvLyAgICB1c2Ugb25seS5cbiAgY29uc3QgYW5ndWxhck9ubHkgPSBjb25maWcgPyBjb25maWcuYW5ndWxhck9ubHkgPT09IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgbmdMU0hvc3QgPSBuZXcgVHlwZVNjcmlwdFNlcnZpY2VIb3N0KHRzTFNIb3N0LCB0c0xTKTtcbiAgY29uc3QgbmdMUyA9IGNyZWF0ZUxhbmd1YWdlU2VydmljZShuZ0xTSG9zdCk7XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlciwgb3B0aW9uczogdHNzLkdldENvbXBsZXRpb25zQXRQb3NpdGlvbk9wdGlvbnN8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCFhbmd1bGFyT25seSkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHRzTFMuZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbiwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIFRTIGNvdWxkIGFuc3dlciB0aGUgcXVlcnksIHRoZW4gcmV0dXJuIHJlc3VsdHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmdMUy5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFF1aWNrSW5mb0F0UG9zaXRpb24oZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHRzcy5RdWlja0luZm98dW5kZWZpbmVkIHtcbiAgICBpZiAoIWFuZ3VsYXJPbmx5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0c0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gcmVzdWx0cyBpbW1lZGlhdGVseS5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5nTFMuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhmaWxlTmFtZTogc3RyaW5nKTogdHNzLkRpYWdub3N0aWNbXSB7XG4gICAgY29uc3QgcmVzdWx0czogdHNzLkRpYWdub3N0aWNbXSA9IFtdO1xuICAgIGlmICghYW5ndWxhck9ubHkpIHtcbiAgICAgIHJlc3VsdHMucHVzaCguLi50c0xTLmdldFNlbWFudGljRGlhZ25vc3RpY3MoZmlsZU5hbWUpKTtcbiAgICB9XG4gICAgLy8gRm9yIHNlbWFudGljIGRpYWdub3N0aWNzIHdlIG5lZWQgdG8gY29tYmluZSBib3RoIFRTICsgQW5ndWxhciByZXN1bHRzXG4gICAgcmVzdWx0cy5wdXNoKC4uLm5nTFMuZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhmaWxlTmFtZSkpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24oXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogUmVhZG9ubHlBcnJheTx0c3MuRGVmaW5pdGlvbkluZm8+fHVuZGVmaW5lZCB7XG4gICAgaWYgKCFhbmd1bGFyT25seSkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHRzTFMuZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgIC8vIElmIFRTIGNvdWxkIGFuc3dlciB0aGUgcXVlcnksIHRoZW4gcmV0dXJuIHJlc3VsdHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZ0xTLmdldERlZmluaXRpb25BbmRCb3VuZFNwYW4oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRlZmluaXRpb25zIHx8ICFyZXN1bHQuZGVmaW5pdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHRzcy5EZWZpbml0aW9uSW5mb0FuZEJvdW5kU3Bhbnx1bmRlZmluZWQge1xuICAgIGlmICghYW5ndWxhck9ubHkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRzTFMuZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBJZiBUUyBjb3VsZCBhbnN3ZXIgdGhlIHF1ZXJ5LCB0aGVuIHJldHVybiByZXN1bHRzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmdMUy5nZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gIH1cblxuICBjb25zdCBwcm94eTogdHNzLkxhbmd1YWdlU2VydmljZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAvLyBGaXJzdCBjbG9uZSB0aGUgb3JpZ2luYWwgVFMgbGFuZ3VhZ2Ugc2VydmljZVxuICAgICAge30sIHRzTFMsXG4gICAgICAvLyBUaGVuIG92ZXJyaWRlIHRoZSBtZXRob2RzIHN1cHBvcnRlZCBieSBBbmd1bGFyIGxhbmd1YWdlIHNlcnZpY2VcbiAgICAgIHtcbiAgICAgICAgZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uLFxuICAgICAgICBnZXRRdWlja0luZm9BdFBvc2l0aW9uLFxuICAgICAgICBnZXRTZW1hbnRpY0RpYWdub3N0aWNzLFxuICAgICAgICBnZXREZWZpbml0aW9uQXRQb3NpdGlvbixcbiAgICAgICAgZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbixcbiAgICAgIH0pO1xuICByZXR1cm4gcHJveHk7XG59XG4iXX0=