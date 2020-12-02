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
        define("@angular/compiler/src/schema/dom_security_schema", ["require", "exports", "tslib", "@angular/compiler/src/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@angular/compiler/src/core");
    // =================================================================================================
    // =================================================================================================
    // =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
    // =================================================================================================
    // =================================================================================================
    //
    //        DO NOT EDIT THIS LIST OF SECURITY SENSITIVE PROPERTIES WITHOUT A SECURITY REVIEW!
    //                               Reach out to mprobst for details.
    //
    // =================================================================================================
    /** Map from tagName|propertyName SecurityContext. Properties applying to all tags use '*'. */
    var _SECURITY_SCHEMA;
    function SECURITY_SCHEMA() {
        if (!_SECURITY_SCHEMA) {
            _SECURITY_SCHEMA = {};
            // Case is insignificant below, all element and attribute names are lower-cased for lookup.
            registerContext(core_1.SecurityContext.HTML, [
                'iframe|srcdoc',
                '*|innerHTML',
                '*|outerHTML',
            ]);
            registerContext(core_1.SecurityContext.STYLE, ['*|style']);
            // NB: no SCRIPT contexts here, they are never allowed due to the parser stripping them.
            registerContext(core_1.SecurityContext.URL, [
                '*|formAction', 'area|href', 'area|ping', 'audio|src', 'a|href',
                'a|ping', 'blockquote|cite', 'body|background', 'del|cite', 'form|action',
                'img|src', 'img|srcset', 'input|src', 'ins|cite', 'q|cite',
                'source|src', 'source|srcset', 'track|src', 'video|poster', 'video|src',
            ]);
            registerContext(core_1.SecurityContext.RESOURCE_URL, [
                'applet|code',
                'applet|codebase',
                'base|href',
                'embed|src',
                'frame|src',
                'head|profile',
                'html|manifest',
                'iframe|src',
                'link|href',
                'media|src',
                'object|codebase',
                'object|data',
                'script|src',
            ]);
        }
        return _SECURITY_SCHEMA;
    }
    exports.SECURITY_SCHEMA = SECURITY_SCHEMA;
    function registerContext(ctx, specs) {
        var e_1, _a;
        try {
            for (var specs_1 = tslib_1.__values(specs), specs_1_1 = specs_1.next(); !specs_1_1.done; specs_1_1 = specs_1.next()) {
                var spec = specs_1_1.value;
                _SECURITY_SCHEMA[spec.toLowerCase()] = ctx;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (specs_1_1 && !specs_1_1.done && (_a = specs_1.return)) _a.call(specs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3NlY3VyaXR5X3NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY2hlbWEvZG9tX3NlY3VyaXR5X3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCxtREFBd0M7SUFFeEMsb0dBQW9HO0lBQ3BHLG9HQUFvRztJQUNwRyxvR0FBb0c7SUFDcEcsb0dBQW9HO0lBQ3BHLG9HQUFvRztJQUNwRyxFQUFFO0lBQ0YsMkZBQTJGO0lBQzNGLGtFQUFrRTtJQUNsRSxFQUFFO0lBQ0Ysb0dBQW9HO0lBRXBHLDhGQUE4RjtJQUM5RixJQUFJLGdCQUFpRCxDQUFDO0lBRXRELFNBQWdCLGVBQWU7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUN0QiwyRkFBMkY7WUFFM0YsZUFBZSxDQUFDLHNCQUFlLENBQUMsSUFBSSxFQUFFO2dCQUNwQyxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsYUFBYTthQUNkLENBQUMsQ0FBQztZQUNILGVBQWUsQ0FBQyxzQkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsd0ZBQXdGO1lBQ3hGLGVBQWUsQ0FBQyxzQkFBZSxDQUFDLEdBQUcsRUFBRTtnQkFDbkMsY0FBYyxFQUFFLFdBQVcsRUFBUSxXQUFXLEVBQVEsV0FBVyxFQUFLLFFBQVE7Z0JBQzlFLFFBQVEsRUFBUSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQU0sYUFBYTtnQkFDbkYsU0FBUyxFQUFPLFlBQVksRUFBTyxXQUFXLEVBQVEsVUFBVSxFQUFNLFFBQVE7Z0JBQzlFLFlBQVksRUFBSSxlQUFlLEVBQUksV0FBVyxFQUFRLGNBQWMsRUFBRSxXQUFXO2FBQ2xGLENBQUMsQ0FBQztZQUNILGVBQWUsQ0FBQyxzQkFBZSxDQUFDLFlBQVksRUFBRTtnQkFDNUMsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsWUFBWTthQUNiLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBbkNELDBDQW1DQztJQUVELFNBQVMsZUFBZSxDQUFDLEdBQW9CLEVBQUUsS0FBZTs7O1lBQzVELEtBQW1CLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUE7Z0JBQW5CLElBQU0sSUFBSSxrQkFBQTtnQkFBVyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7YUFBQTs7Ozs7Ozs7O0lBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuLi9jb3JlJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT0gUyBUIE8gUCAgIC0gIFMgVCBPIFAgICAtICBTIFQgTyBQICAgLSAgUyBUIE8gUCAgIC0gIFMgVCBPIFAgICAtICBTIFQgTyBQICA9PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vICAgICAgICBETyBOT1QgRURJVCBUSElTIExJU1QgT0YgU0VDVVJJVFkgU0VOU0lUSVZFIFBST1BFUlRJRVMgV0lUSE9VVCBBIFNFQ1VSSVRZIFJFVklFVyFcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWNoIG91dCB0byBtcHJvYnN0IGZvciBkZXRhaWxzLlxuLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqIE1hcCBmcm9tIHRhZ05hbWV8cHJvcGVydHlOYW1lIFNlY3VyaXR5Q29udGV4dC4gUHJvcGVydGllcyBhcHBseWluZyB0byBhbGwgdGFncyB1c2UgJyonLiAqL1xubGV0IF9TRUNVUklUWV9TQ0hFTUEhOiB7W2s6IHN0cmluZ106IFNlY3VyaXR5Q29udGV4dH07XG5cbmV4cG9ydCBmdW5jdGlvbiBTRUNVUklUWV9TQ0hFTUEoKToge1trOiBzdHJpbmddOiBTZWN1cml0eUNvbnRleHR9IHtcbiAgaWYgKCFfU0VDVVJJVFlfU0NIRU1BKSB7XG4gICAgX1NFQ1VSSVRZX1NDSEVNQSA9IHt9O1xuICAgIC8vIENhc2UgaXMgaW5zaWduaWZpY2FudCBiZWxvdywgYWxsIGVsZW1lbnQgYW5kIGF0dHJpYnV0ZSBuYW1lcyBhcmUgbG93ZXItY2FzZWQgZm9yIGxvb2t1cC5cblxuICAgIHJlZ2lzdGVyQ29udGV4dChTZWN1cml0eUNvbnRleHQuSFRNTCwgW1xuICAgICAgJ2lmcmFtZXxzcmNkb2MnLFxuICAgICAgJyp8aW5uZXJIVE1MJyxcbiAgICAgICcqfG91dGVySFRNTCcsXG4gICAgXSk7XG4gICAgcmVnaXN0ZXJDb250ZXh0KFNlY3VyaXR5Q29udGV4dC5TVFlMRSwgWycqfHN0eWxlJ10pO1xuICAgIC8vIE5COiBubyBTQ1JJUFQgY29udGV4dHMgaGVyZSwgdGhleSBhcmUgbmV2ZXIgYWxsb3dlZCBkdWUgdG8gdGhlIHBhcnNlciBzdHJpcHBpbmcgdGhlbS5cbiAgICByZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LlVSTCwgW1xuICAgICAgJyp8Zm9ybUFjdGlvbicsICdhcmVhfGhyZWYnLCAgICAgICAnYXJlYXxwaW5nJywgICAgICAgJ2F1ZGlvfHNyYycsICAgICdhfGhyZWYnLFxuICAgICAgJ2F8cGluZycsICAgICAgICdibG9ja3F1b3RlfGNpdGUnLCAnYm9keXxiYWNrZ3JvdW5kJywgJ2RlbHxjaXRlJywgICAgICdmb3JtfGFjdGlvbicsXG4gICAgICAnaW1nfHNyYycsICAgICAgJ2ltZ3xzcmNzZXQnLCAgICAgICdpbnB1dHxzcmMnLCAgICAgICAnaW5zfGNpdGUnLCAgICAgJ3F8Y2l0ZScsXG4gICAgICAnc291cmNlfHNyYycsICAgJ3NvdXJjZXxzcmNzZXQnLCAgICd0cmFja3xzcmMnLCAgICAgICAndmlkZW98cG9zdGVyJywgJ3ZpZGVvfHNyYycsXG4gICAgXSk7XG4gICAgcmVnaXN0ZXJDb250ZXh0KFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIFtcbiAgICAgICdhcHBsZXR8Y29kZScsXG4gICAgICAnYXBwbGV0fGNvZGViYXNlJyxcbiAgICAgICdiYXNlfGhyZWYnLFxuICAgICAgJ2VtYmVkfHNyYycsXG4gICAgICAnZnJhbWV8c3JjJyxcbiAgICAgICdoZWFkfHByb2ZpbGUnLFxuICAgICAgJ2h0bWx8bWFuaWZlc3QnLFxuICAgICAgJ2lmcmFtZXxzcmMnLFxuICAgICAgJ2xpbmt8aHJlZicsXG4gICAgICAnbWVkaWF8c3JjJyxcbiAgICAgICdvYmplY3R8Y29kZWJhc2UnLFxuICAgICAgJ29iamVjdHxkYXRhJyxcbiAgICAgICdzY3JpcHR8c3JjJyxcbiAgICBdKTtcbiAgfVxuICByZXR1cm4gX1NFQ1VSSVRZX1NDSEVNQTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb250ZXh0KGN0eDogU2VjdXJpdHlDb250ZXh0LCBzcGVjczogc3RyaW5nW10pIHtcbiAgZm9yIChjb25zdCBzcGVjIG9mIHNwZWNzKSBfU0VDVVJJVFlfU0NIRU1BW3NwZWMudG9Mb3dlckNhc2UoKV0gPSBjdHg7XG59XG4iXX0=