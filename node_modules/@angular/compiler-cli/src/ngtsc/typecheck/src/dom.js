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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/dom", ["require", "exports", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var diagnostics_2 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics");
    var REGISTRY = new compiler_1.DomElementSchemaRegistry();
    var REMOVE_XHTML_REGEX = /^:xhtml:/;
    /**
     * Checks non-Angular elements and properties against the `DomElementSchemaRegistry`, a schema
     * maintained by the Angular team via extraction from a browser IDL.
     */
    var RegistryDomSchemaChecker = /** @class */ (function () {
        function RegistryDomSchemaChecker(resolver) {
            this.resolver = resolver;
            this._diagnostics = [];
        }
        Object.defineProperty(RegistryDomSchemaChecker.prototype, "diagnostics", {
            get: function () {
                return this._diagnostics;
            },
            enumerable: true,
            configurable: true
        });
        RegistryDomSchemaChecker.prototype.checkElement = function (id, element, schemas) {
            // HTML elements inside an SVG `foreignObject` are declared in the `xhtml` namespace.
            // We need to strip it before handing it over to the registry because all HTML tag names
            // in the registry are without a namespace.
            var name = element.name.replace(REMOVE_XHTML_REGEX, '');
            if (!REGISTRY.hasElement(name, schemas)) {
                var mapping = this.resolver.getSourceMapping(id);
                var errorMsg = "'" + name + "' is not a known element:\n";
                errorMsg +=
                    "1. If '" + name + "' is an Angular component, then verify that it is part of this module.\n";
                if (name.indexOf('-') > -1) {
                    errorMsg += "2. If '" + name + "' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.";
                }
                else {
                    errorMsg +=
                        "2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
                }
                var diag = diagnostics_2.makeTemplateDiagnostic(mapping, element.sourceSpan, ts.DiagnosticCategory.Error, diagnostics_1.ngErrorCode(diagnostics_1.ErrorCode.SCHEMA_INVALID_ELEMENT), errorMsg);
                this._diagnostics.push(diag);
            }
        };
        RegistryDomSchemaChecker.prototype.checkProperty = function (id, element, name, span, schemas) {
            if (!REGISTRY.hasProperty(element.name, name, schemas)) {
                var mapping = this.resolver.getSourceMapping(id);
                var errorMsg = "Can't bind to '" + name + "' since it isn't a known property of '" + element.name + "'.";
                if (element.name.startsWith('ng-')) {
                    errorMsg +=
                        "\n1. If '" + name + "' is an Angular directive, then add 'CommonModule' to the '@NgModule.imports' of this component." +
                            "\n2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
                }
                else if (element.name.indexOf('-') > -1) {
                    errorMsg +=
                        "\n1. If '" + element.name + "' is an Angular component and it has '" + name + "' input, then verify that it is part of this module." +
                            ("\n2. If '" + element
                                .name + "' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.") +
                            "\n3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.";
                }
                var diag = diagnostics_2.makeTemplateDiagnostic(mapping, span, ts.DiagnosticCategory.Error, diagnostics_1.ngErrorCode(diagnostics_1.ErrorCode.SCHEMA_INVALID_ATTRIBUTE), errorMsg);
                this._diagnostics.push(diag);
            }
        };
        return RegistryDomSchemaChecker;
    }());
    exports.RegistryDomSchemaChecker = RegistryDomSchemaChecker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90eXBlY2hlY2svc3JjL2RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDhDQUE0RztJQUM1RywrQkFBaUM7SUFFakMsMkVBQXlEO0lBR3pELHlGQUE2RTtJQUU3RSxJQUFNLFFBQVEsR0FBRyxJQUFJLG1DQUF3QixFQUFFLENBQUM7SUFDaEQsSUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUM7SUE0Q3RDOzs7T0FHRztJQUNIO1FBT0Usa0NBQW9CLFFBQWdDO1lBQWhDLGFBQVEsR0FBUixRQUFRLENBQXdCO1lBTjVDLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQU1ZLENBQUM7UUFKeEQsc0JBQUksaURBQVc7aUJBQWY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLENBQUM7OztXQUFBO1FBSUQsK0NBQVksR0FBWixVQUFhLEVBQWMsRUFBRSxPQUF1QixFQUFFLE9BQXlCO1lBQzdFLHFGQUFxRjtZQUNyRix3RkFBd0Y7WUFDeEYsMkNBQTJDO1lBQzNDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTFELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFbkQsSUFBSSxRQUFRLEdBQUcsTUFBSSxJQUFJLGdDQUE2QixDQUFDO2dCQUNyRCxRQUFRO29CQUNKLFlBQVUsSUFBSSw2RUFBMEUsQ0FBQztnQkFDN0YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxQixRQUFRLElBQUksWUFDUixJQUFJLGtJQUErSCxDQUFDO2lCQUN6STtxQkFBTTtvQkFDTCxRQUFRO3dCQUNKLDhGQUE4RixDQUFDO2lCQUNwRztnQkFFRCxJQUFNLElBQUksR0FBRyxvQ0FBc0IsQ0FDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFDeEQseUJBQVcsQ0FBQyx1QkFBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQztRQUVELGdEQUFhLEdBQWIsVUFDSSxFQUFjLEVBQUUsT0FBdUIsRUFBRSxJQUFZLEVBQUUsSUFBcUIsRUFDNUUsT0FBeUI7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRW5ELElBQUksUUFBUSxHQUNSLG9CQUFrQixJQUFJLDhDQUF5QyxPQUFPLENBQUMsSUFBSSxPQUFJLENBQUM7Z0JBQ3BGLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDLFFBQVE7d0JBQ0osY0FDSSxJQUFJLHFHQUFrRzs0QkFDMUcsaUdBQWlHLENBQUM7aUJBQ3ZHO3FCQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3pDLFFBQVE7d0JBQ0osY0FBWSxPQUFPLENBQUMsSUFBSSw4Q0FDcEIsSUFBSSx5REFBc0Q7NkJBQzlELGNBQ0ksT0FBTztpQ0FDRixJQUFJLGtJQUErSCxDQUFBOzRCQUM1SSxpR0FBaUcsQ0FBQztpQkFDdkc7Z0JBRUQsSUFBTSxJQUFJLEdBQUcsb0NBQXNCLENBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFDMUMseUJBQVcsQ0FBQyx1QkFBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQztRQUNILCtCQUFDO0lBQUQsQ0FBQyxBQWpFRCxJQWlFQztJQWpFWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBQYXJzZVNvdXJjZVNwYW4sIFNjaGVtYU1ldGFkYXRhLCBUbXBsQXN0RWxlbWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RXJyb3JDb2RlLCBuZ0Vycm9yQ29kZX0gZnJvbSAnLi4vLi4vZGlhZ25vc3RpY3MnO1xuXG5pbXBvcnQge1RlbXBsYXRlSWR9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7bWFrZVRlbXBsYXRlRGlhZ25vc3RpYywgVGVtcGxhdGVTb3VyY2VSZXNvbHZlcn0gZnJvbSAnLi9kaWFnbm9zdGljcyc7XG5cbmNvbnN0IFJFR0lTVFJZID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuY29uc3QgUkVNT1ZFX1hIVE1MX1JFR0VYID0gL146eGh0bWw6LztcblxuLyoqXG4gKiBDaGVja3MgZXZlcnkgbm9uLUFuZ3VsYXIgZWxlbWVudC9wcm9wZXJ0eSBwcm9jZXNzZWQgaW4gYSB0ZW1wbGF0ZSBhbmQgcG90ZW50aWFsbHkgcHJvZHVjZXNcbiAqIGB0cy5EaWFnbm9zdGljYHMgcmVsYXRlZCB0byBpbXByb3BlciB1c2FnZS5cbiAqXG4gKiBBIGBEb21TY2hlbWFDaGVja2VyYCdzIGpvYiBpcyB0byBjaGVjayBET00gbm9kZXMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgd3JpdHRlbiB1c2VkIGluIHRlbXBsYXRlc1xuICogYW5kIHByb2R1Y2UgYHRzLkRpYWdub3N0aWNgcyBpZiB0aGUgbm9kZXMgZG9uJ3QgY29uZm9ybSB0byB0aGUgRE9NIHNwZWNpZmljYXRpb24uIEl0IGFjdHMgYXMgYVxuICogY29sbGVjdG9yIGZvciB0aGVzZSBkaWFnbm9zdGljcywgYW5kIGNhbiBiZSBxdWVyaWVkIGxhdGVyIHRvIHJldHJpZXZlIHRoZSBsaXN0IG9mIGFueSB0aGF0IGhhdmVcbiAqIGJlZW4gZ2VuZXJhdGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvbVNjaGVtYUNoZWNrZXIge1xuICAvKipcbiAgICogR2V0IHRoZSBgdHMuRGlhZ25vc3RpY2BzIHRoYXQgaGF2ZSBiZWVuIGdlbmVyYXRlZCB2aWEgYGNoZWNrRWxlbWVudGAgYW5kIGBjaGVja1Byb3BlcnR5YCBjYWxsc1xuICAgKiB0aHVzIGZhci5cbiAgICovXG4gIHJlYWRvbmx5IGRpYWdub3N0aWNzOiBSZWFkb25seUFycmF5PHRzLkRpYWdub3N0aWM+O1xuXG4gIC8qKlxuICAgKiBDaGVjayBhIG5vbi1Bbmd1bGFyIGVsZW1lbnQgYW5kIHJlY29yZCBhbnkgZGlhZ25vc3RpY3MgYWJvdXQgaXQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCB0aGUgdGVtcGxhdGUgSUQsIHN1aXRhYmxlIGZvciByZXNvbHV0aW9uIHdpdGggYSBgVGNiU291cmNlUmVzb2x2ZXJgLlxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCBub2RlIGluIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0gc2NoZW1hcyBhbnkgYWN0aXZlIHNjaGVtYXMgZm9yIHRoZSB0ZW1wbGF0ZSwgd2hpY2ggbWlnaHQgYWZmZWN0IHRoZSB2YWxpZGl0eSBvZiB0aGVcbiAgICogZWxlbWVudC5cbiAgICovXG4gIGNoZWNrRWxlbWVudChpZDogc3RyaW5nLCBlbGVtZW50OiBUbXBsQXN0RWxlbWVudCwgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrIGEgcHJvcGVydHkgYmluZGluZyBvbiBhbiBlbGVtZW50IGFuZCByZWNvcmQgYW55IGRpYWdub3N0aWNzIGFib3V0IGl0LlxuICAgKlxuICAgKiBAcGFyYW0gaWQgdGhlIHRlbXBsYXRlIElELCBzdWl0YWJsZSBmb3IgcmVzb2x1dGlvbiB3aXRoIGEgYFRjYlNvdXJjZVJlc29sdmVyYC5cbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgbm9kZSBpbiBxdWVzdGlvbi5cbiAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGJlaW5nIGNoZWNrZWQuXG4gICAqIEBwYXJhbSBzcGFuIHRoZSBzb3VyY2Ugc3BhbiBvZiB0aGUgYmluZGluZy4gVGhpcyBpcyByZWR1bmRhbnQgd2l0aCBgZWxlbWVudC5hdHRyaWJ1dGVzYCBidXQgaXNcbiAgICogcGFzc2VkIHNlcGFyYXRlbHkgdG8gYXZvaWQgaGF2aW5nIHRvIGxvb2sgdXAgdGhlIHBhcnRpY3VsYXIgcHJvcGVydHkgbmFtZS5cbiAgICogQHBhcmFtIHNjaGVtYXMgYW55IGFjdGl2ZSBzY2hlbWFzIGZvciB0aGUgdGVtcGxhdGUsIHdoaWNoIG1pZ2h0IGFmZmVjdCB0aGUgdmFsaWRpdHkgb2YgdGhlXG4gICAqIHByb3BlcnR5LlxuICAgKi9cbiAgY2hlY2tQcm9wZXJ0eShcbiAgICAgIGlkOiBzdHJpbmcsIGVsZW1lbnQ6IFRtcGxBc3RFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW10pOiB2b2lkO1xufVxuXG4vKipcbiAqIENoZWNrcyBub24tQW5ndWxhciBlbGVtZW50cyBhbmQgcHJvcGVydGllcyBhZ2FpbnN0IHRoZSBgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5YCwgYSBzY2hlbWFcbiAqIG1haW50YWluZWQgYnkgdGhlIEFuZ3VsYXIgdGVhbSB2aWEgZXh0cmFjdGlvbiBmcm9tIGEgYnJvd3NlciBJREwuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWdpc3RyeURvbVNjaGVtYUNoZWNrZXIgaW1wbGVtZW50cyBEb21TY2hlbWFDaGVja2VyIHtcbiAgcHJpdmF0ZSBfZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gIGdldCBkaWFnbm9zdGljcygpOiBSZWFkb25seUFycmF5PHRzLkRpYWdub3N0aWM+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhZ25vc3RpY3M7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBUZW1wbGF0ZVNvdXJjZVJlc29sdmVyKSB7fVxuXG4gIGNoZWNrRWxlbWVudChpZDogVGVtcGxhdGVJZCwgZWxlbWVudDogVG1wbEFzdEVsZW1lbnQsIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW10pOiB2b2lkIHtcbiAgICAvLyBIVE1MIGVsZW1lbnRzIGluc2lkZSBhbiBTVkcgYGZvcmVpZ25PYmplY3RgIGFyZSBkZWNsYXJlZCBpbiB0aGUgYHhodG1sYCBuYW1lc3BhY2UuXG4gICAgLy8gV2UgbmVlZCB0byBzdHJpcCBpdCBiZWZvcmUgaGFuZGluZyBpdCBvdmVyIHRvIHRoZSByZWdpc3RyeSBiZWNhdXNlIGFsbCBIVE1MIHRhZyBuYW1lc1xuICAgIC8vIGluIHRoZSByZWdpc3RyeSBhcmUgd2l0aG91dCBhIG5hbWVzcGFjZS5cbiAgICBjb25zdCBuYW1lID0gZWxlbWVudC5uYW1lLnJlcGxhY2UoUkVNT1ZFX1hIVE1MX1JFR0VYLCAnJyk7XG5cbiAgICBpZiAoIVJFR0lTVFJZLmhhc0VsZW1lbnQobmFtZSwgc2NoZW1hcykpIHtcbiAgICAgIGNvbnN0IG1hcHBpbmcgPSB0aGlzLnJlc29sdmVyLmdldFNvdXJjZU1hcHBpbmcoaWQpO1xuXG4gICAgICBsZXQgZXJyb3JNc2cgPSBgJyR7bmFtZX0nIGlzIG5vdCBhIGtub3duIGVsZW1lbnQ6XFxuYDtcbiAgICAgIGVycm9yTXNnICs9XG4gICAgICAgICAgYDEuIElmICcke25hbWV9JyBpcyBhbiBBbmd1bGFyIGNvbXBvbmVudCwgdGhlbiB2ZXJpZnkgdGhhdCBpdCBpcyBwYXJ0IG9mIHRoaXMgbW9kdWxlLlxcbmA7XG4gICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICBlcnJvck1zZyArPSBgMi4gSWYgJyR7XG4gICAgICAgICAgICBuYW1lfScgaXMgYSBXZWIgQ29tcG9uZW50IHRoZW4gYWRkICdDVVNUT01fRUxFTUVOVFNfU0NIRU1BJyB0byB0aGUgJ0BOZ01vZHVsZS5zY2hlbWFzJyBvZiB0aGlzIGNvbXBvbmVudCB0byBzdXBwcmVzcyB0aGlzIG1lc3NhZ2UuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTXNnICs9XG4gICAgICAgICAgICBgMi4gVG8gYWxsb3cgYW55IGVsZW1lbnQgYWRkICdOT19FUlJPUlNfU0NIRU1BJyB0byB0aGUgJ0BOZ01vZHVsZS5zY2hlbWFzJyBvZiB0aGlzIGNvbXBvbmVudC5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaWFnID0gbWFrZVRlbXBsYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICBtYXBwaW5nLCBlbGVtZW50LnNvdXJjZVNwYW4sIHRzLkRpYWdub3N0aWNDYXRlZ29yeS5FcnJvcixcbiAgICAgICAgICBuZ0Vycm9yQ29kZShFcnJvckNvZGUuU0NIRU1BX0lOVkFMSURfRUxFTUVOVCksIGVycm9yTXNnKTtcbiAgICAgIHRoaXMuX2RpYWdub3N0aWNzLnB1c2goZGlhZyk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tQcm9wZXJ0eShcbiAgICAgIGlkOiBUZW1wbGF0ZUlkLCBlbGVtZW50OiBUbXBsQXN0RWxlbWVudCwgbmFtZTogc3RyaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICBzY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdKTogdm9pZCB7XG4gICAgaWYgKCFSRUdJU1RSWS5oYXNQcm9wZXJ0eShlbGVtZW50Lm5hbWUsIG5hbWUsIHNjaGVtYXMpKSB7XG4gICAgICBjb25zdCBtYXBwaW5nID0gdGhpcy5yZXNvbHZlci5nZXRTb3VyY2VNYXBwaW5nKGlkKTtcblxuICAgICAgbGV0IGVycm9yTXNnID1cbiAgICAgICAgICBgQ2FuJ3QgYmluZCB0byAnJHtuYW1lfScgc2luY2UgaXQgaXNuJ3QgYSBrbm93biBwcm9wZXJ0eSBvZiAnJHtlbGVtZW50Lm5hbWV9Jy5gO1xuICAgICAgaWYgKGVsZW1lbnQubmFtZS5zdGFydHNXaXRoKCduZy0nKSkge1xuICAgICAgICBlcnJvck1zZyArPVxuICAgICAgICAgICAgYFxcbjEuIElmICcke1xuICAgICAgICAgICAgICAgIG5hbWV9JyBpcyBhbiBBbmd1bGFyIGRpcmVjdGl2ZSwgdGhlbiBhZGQgJ0NvbW1vbk1vZHVsZScgdG8gdGhlICdATmdNb2R1bGUuaW1wb3J0cycgb2YgdGhpcyBjb21wb25lbnQuYCArXG4gICAgICAgICAgICBgXFxuMi4gVG8gYWxsb3cgYW55IHByb3BlcnR5IGFkZCAnTk9fRVJST1JTX1NDSEVNQScgdG8gdGhlICdATmdNb2R1bGUuc2NoZW1hcycgb2YgdGhpcyBjb21wb25lbnQuYDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5uYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIGVycm9yTXNnICs9XG4gICAgICAgICAgICBgXFxuMS4gSWYgJyR7ZWxlbWVudC5uYW1lfScgaXMgYW4gQW5ndWxhciBjb21wb25lbnQgYW5kIGl0IGhhcyAnJHtcbiAgICAgICAgICAgICAgICBuYW1lfScgaW5wdXQsIHRoZW4gdmVyaWZ5IHRoYXQgaXQgaXMgcGFydCBvZiB0aGlzIG1vZHVsZS5gICtcbiAgICAgICAgICAgIGBcXG4yLiBJZiAnJHtcbiAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIC5uYW1lfScgaXMgYSBXZWIgQ29tcG9uZW50IHRoZW4gYWRkICdDVVNUT01fRUxFTUVOVFNfU0NIRU1BJyB0byB0aGUgJ0BOZ01vZHVsZS5zY2hlbWFzJyBvZiB0aGlzIGNvbXBvbmVudCB0byBzdXBwcmVzcyB0aGlzIG1lc3NhZ2UuYCArXG4gICAgICAgICAgICBgXFxuMy4gVG8gYWxsb3cgYW55IHByb3BlcnR5IGFkZCAnTk9fRVJST1JTX1NDSEVNQScgdG8gdGhlICdATmdNb2R1bGUuc2NoZW1hcycgb2YgdGhpcyBjb21wb25lbnQuYDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlhZyA9IG1ha2VUZW1wbGF0ZURpYWdub3N0aWMoXG4gICAgICAgICAgbWFwcGluZywgc3BhbiwgdHMuRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yLFxuICAgICAgICAgIG5nRXJyb3JDb2RlKEVycm9yQ29kZS5TQ0hFTUFfSU5WQUxJRF9BVFRSSUJVVEUpLCBlcnJvck1zZyk7XG4gICAgICB0aGlzLl9kaWFnbm9zdGljcy5wdXNoKGRpYWcpO1xuICAgIH1cbiAgfVxufVxuIl19