/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/ng-update/data/output-names", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    exports.outputNames = {
        [target_version_1.TargetVersion.V6]: [],
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LW5hbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9kYXRhL291dHB1dC1uYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHVGQUErRDtJQWlCbEQsUUFBQSxXQUFXLEdBQTBDO1FBQ2hFLENBQUMsOEJBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0tBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYXJnZXRWZXJzaW9ufSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC90YXJnZXQtdmVyc2lvbic7XG5pbXBvcnQge1ZlcnNpb25DaGFuZ2VzfSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC92ZXJzaW9uLWNoYW5nZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dE5hbWVVcGdyYWRlRGF0YSB7XG4gIC8qKiBUaGUgQE91dHB1dCgpIG5hbWUgdG8gcmVwbGFjZS4gKi9cbiAgcmVwbGFjZTogc3RyaW5nO1xuICAvKiogVGhlIG5ldyBuYW1lIGZvciB0aGUgQE91dHB1dCgpLiAqL1xuICByZXBsYWNlV2l0aDogc3RyaW5nO1xuICAvKiogV2hpdGVsaXN0IHdoZXJlIHRoaXMgcmVwbGFjZW1lbnQgaXMgbWFkZS4gSWYgb21pdHRlZCBpdCBpcyBtYWRlIGluIGFsbCBIVE1MICYgQ1NTICovXG4gIHdoaXRlbGlzdDoge1xuICAgIC8qKiBMaW1pdCB0byBlbGVtZW50cyB3aXRoIGFueSBvZiB0aGVzZSBlbGVtZW50IHRhZ3MuICovXG4gICAgZWxlbWVudHM/OiBzdHJpbmdbXSxcbiAgICAvKiogTGltaXQgdG8gZWxlbWVudHMgd2l0aCBhbnkgb2YgdGhlc2UgYXR0cmlidXRlcy4gKi9cbiAgICBhdHRyaWJ1dGVzPzogc3RyaW5nW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBvdXRwdXROYW1lczogVmVyc2lvbkNoYW5nZXM8T3V0cHV0TmFtZVVwZ3JhZGVEYXRhPiA9IHtcbiAgW1RhcmdldFZlcnNpb24uVjZdOiBbXSxcbn07XG4iXX0=