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
        define("@angular/compiler-cli/src/ngtsc/diagnostics/src/error_code", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @publicApi
     */
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode[ErrorCode["DECORATOR_ARG_NOT_LITERAL"] = 1001] = "DECORATOR_ARG_NOT_LITERAL";
        ErrorCode[ErrorCode["DECORATOR_ARITY_WRONG"] = 1002] = "DECORATOR_ARITY_WRONG";
        ErrorCode[ErrorCode["DECORATOR_NOT_CALLED"] = 1003] = "DECORATOR_NOT_CALLED";
        ErrorCode[ErrorCode["DECORATOR_ON_ANONYMOUS_CLASS"] = 1004] = "DECORATOR_ON_ANONYMOUS_CLASS";
        ErrorCode[ErrorCode["DECORATOR_UNEXPECTED"] = 1005] = "DECORATOR_UNEXPECTED";
        /**
         * This error code indicates that there are incompatible decorators on a type or a class field.
         */
        ErrorCode[ErrorCode["DECORATOR_COLLISION"] = 1006] = "DECORATOR_COLLISION";
        ErrorCode[ErrorCode["VALUE_HAS_WRONG_TYPE"] = 1010] = "VALUE_HAS_WRONG_TYPE";
        ErrorCode[ErrorCode["VALUE_NOT_LITERAL"] = 1011] = "VALUE_NOT_LITERAL";
        ErrorCode[ErrorCode["COMPONENT_MISSING_TEMPLATE"] = 2001] = "COMPONENT_MISSING_TEMPLATE";
        ErrorCode[ErrorCode["PIPE_MISSING_NAME"] = 2002] = "PIPE_MISSING_NAME";
        ErrorCode[ErrorCode["PARAM_MISSING_TOKEN"] = 2003] = "PARAM_MISSING_TOKEN";
        ErrorCode[ErrorCode["DIRECTIVE_MISSING_SELECTOR"] = 2004] = "DIRECTIVE_MISSING_SELECTOR";
        /** Raised when an undecorated class is passed in as a provider to a module or a directive. */
        ErrorCode[ErrorCode["UNDECORATED_PROVIDER"] = 2005] = "UNDECORATED_PROVIDER";
        /**
         * Raised when a Directive inherits its constructor from a base class without an Angular
         * decorator.
         */
        ErrorCode[ErrorCode["DIRECTIVE_INHERITS_UNDECORATED_CTOR"] = 2006] = "DIRECTIVE_INHERITS_UNDECORATED_CTOR";
        ErrorCode[ErrorCode["SYMBOL_NOT_EXPORTED"] = 3001] = "SYMBOL_NOT_EXPORTED";
        ErrorCode[ErrorCode["SYMBOL_EXPORTED_UNDER_DIFFERENT_NAME"] = 3002] = "SYMBOL_EXPORTED_UNDER_DIFFERENT_NAME";
        ErrorCode[ErrorCode["CONFIG_FLAT_MODULE_NO_INDEX"] = 4001] = "CONFIG_FLAT_MODULE_NO_INDEX";
        ErrorCode[ErrorCode["CONFIG_STRICT_TEMPLATES_IMPLIES_FULL_TEMPLATE_TYPECHECK"] = 4002] = "CONFIG_STRICT_TEMPLATES_IMPLIES_FULL_TEMPLATE_TYPECHECK";
        /**
         * Raised when a host expression has a parse error, such as a host listener or host binding
         * expression containing a pipe.
         */
        ErrorCode[ErrorCode["HOST_BINDING_PARSE_ERROR"] = 5001] = "HOST_BINDING_PARSE_ERROR";
        /**
         * Raised when an NgModule contains an invalid reference in `declarations`.
         */
        ErrorCode[ErrorCode["NGMODULE_INVALID_DECLARATION"] = 6001] = "NGMODULE_INVALID_DECLARATION";
        /**
         * Raised when an NgModule contains an invalid type in `imports`.
         */
        ErrorCode[ErrorCode["NGMODULE_INVALID_IMPORT"] = 6002] = "NGMODULE_INVALID_IMPORT";
        /**
         * Raised when an NgModule contains an invalid type in `exports`.
         */
        ErrorCode[ErrorCode["NGMODULE_INVALID_EXPORT"] = 6003] = "NGMODULE_INVALID_EXPORT";
        /**
         * Raised when an NgModule contains a type in `exports` which is neither in `declarations` nor
         * otherwise imported.
         */
        ErrorCode[ErrorCode["NGMODULE_INVALID_REEXPORT"] = 6004] = "NGMODULE_INVALID_REEXPORT";
        /**
         * Raised when a `ModuleWithProviders` with a missing
         * generic type argument is passed into an `NgModule`.
         */
        ErrorCode[ErrorCode["NGMODULE_MODULE_WITH_PROVIDERS_MISSING_GENERIC"] = 6005] = "NGMODULE_MODULE_WITH_PROVIDERS_MISSING_GENERIC";
        /**
         * Raised when an NgModule exports multiple directives/pipes of the same name and the compiler
         * attempts to generate private re-exports within the NgModule file.
         */
        ErrorCode[ErrorCode["NGMODULE_REEXPORT_NAME_COLLISION"] = 6006] = "NGMODULE_REEXPORT_NAME_COLLISION";
        /**
         * Raised when a directive/pipe is part of the declarations of two or more NgModules.
         */
        ErrorCode[ErrorCode["NGMODULE_DECLARATION_NOT_UNIQUE"] = 6007] = "NGMODULE_DECLARATION_NOT_UNIQUE";
        /**
         * An element name failed validation against the DOM schema.
         */
        ErrorCode[ErrorCode["SCHEMA_INVALID_ELEMENT"] = 8001] = "SCHEMA_INVALID_ELEMENT";
        /**
         * An element's attribute name failed validation against the DOM schema.
         */
        ErrorCode[ErrorCode["SCHEMA_INVALID_ATTRIBUTE"] = 8002] = "SCHEMA_INVALID_ATTRIBUTE";
        /**
         * No matching directive was found for a `#ref="target"` expression.
         */
        ErrorCode[ErrorCode["MISSING_REFERENCE_TARGET"] = 8003] = "MISSING_REFERENCE_TARGET";
        /**
         * No matching pipe was found for a
         */
        ErrorCode[ErrorCode["MISSING_PIPE"] = 8004] = "MISSING_PIPE";
        /**
         * The left-hand side of an assignment expression was a template variable. Effectively, the
         * template looked like:
         *
         * ```
         * <ng-template let-something>
         *   <button (click)="something = ...">...</button>
         * </ng-template>
         * ```
         *
         * Template variables are read-only.
         */
        ErrorCode[ErrorCode["WRITE_TO_READ_ONLY_VARIABLE"] = 8005] = "WRITE_TO_READ_ONLY_VARIABLE";
        /**
         * A template variable was declared twice. For example:
         *
         * ```html
         * <div *ngFor="let i of items; let i = index">
         * </div>
         * ```
         */
        ErrorCode[ErrorCode["DUPLICATE_VARIABLE_DECLARATION"] = 8006] = "DUPLICATE_VARIABLE_DECLARATION";
        /**
         * An injectable already has a `ɵprov` property.
         */
        ErrorCode[ErrorCode["INJECTABLE_DUPLICATE_PROV"] = 9001] = "INJECTABLE_DUPLICATE_PROV";
    })(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
    /**
     * @internal
     */
    function ngErrorCode(code) {
        return parseInt('-99' + code);
    }
    exports.ngErrorCode = ngErrorCode;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JfY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZGlhZ25vc3RpY3Mvc3JjL2Vycm9yX2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSDs7T0FFRztJQUNILElBQVksU0ErSFg7SUEvSEQsV0FBWSxTQUFTO1FBQ25CLHNGQUFnQyxDQUFBO1FBQ2hDLDhFQUE0QixDQUFBO1FBQzVCLDRFQUEyQixDQUFBO1FBQzNCLDRGQUFtQyxDQUFBO1FBQ25DLDRFQUEyQixDQUFBO1FBRTNCOztXQUVHO1FBQ0gsMEVBQTBCLENBQUE7UUFFMUIsNEVBQTJCLENBQUE7UUFDM0Isc0VBQXdCLENBQUE7UUFFeEIsd0ZBQWlDLENBQUE7UUFDakMsc0VBQXdCLENBQUE7UUFDeEIsMEVBQTBCLENBQUE7UUFDMUIsd0ZBQWlDLENBQUE7UUFFakMsOEZBQThGO1FBQzlGLDRFQUEyQixDQUFBO1FBRTNCOzs7V0FHRztRQUNILDBHQUEwQyxDQUFBO1FBRTFDLDBFQUEwQixDQUFBO1FBQzFCLDRHQUEyQyxDQUFBO1FBRTNDLDBGQUFrQyxDQUFBO1FBQ2xDLGtKQUE4RCxDQUFBO1FBRTlEOzs7V0FHRztRQUNILG9GQUErQixDQUFBO1FBRS9COztXQUVHO1FBQ0gsNEZBQW1DLENBQUE7UUFFbkM7O1dBRUc7UUFDSCxrRkFBOEIsQ0FBQTtRQUU5Qjs7V0FFRztRQUNILGtGQUE4QixDQUFBO1FBRTlCOzs7V0FHRztRQUNILHNGQUFnQyxDQUFBO1FBRWhDOzs7V0FHRztRQUNILGdJQUFxRCxDQUFBO1FBRXJEOzs7V0FHRztRQUNILG9HQUF1QyxDQUFBO1FBRXZDOztXQUVHO1FBQ0gsa0dBQXNDLENBQUE7UUFFdEM7O1dBRUc7UUFDSCxnRkFBNkIsQ0FBQTtRQUU3Qjs7V0FFRztRQUNILG9GQUErQixDQUFBO1FBRS9COztXQUVHO1FBQ0gsb0ZBQStCLENBQUE7UUFFL0I7O1dBRUc7UUFDSCw0REFBbUIsQ0FBQTtRQUVuQjs7Ozs7Ozs7Ozs7V0FXRztRQUNILDBGQUFrQyxDQUFBO1FBRWxDOzs7Ozs7O1dBT0c7UUFDSCxnR0FBcUMsQ0FBQTtRQUVyQzs7V0FFRztRQUNILHNGQUFnQyxDQUFBO0lBQ2xDLENBQUMsRUEvSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUErSHBCO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixXQUFXLENBQUMsSUFBZTtRQUN6QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlIHtcbiAgREVDT1JBVE9SX0FSR19OT1RfTElURVJBTCA9IDEwMDEsXG4gIERFQ09SQVRPUl9BUklUWV9XUk9ORyA9IDEwMDIsXG4gIERFQ09SQVRPUl9OT1RfQ0FMTEVEID0gMTAwMyxcbiAgREVDT1JBVE9SX09OX0FOT05ZTU9VU19DTEFTUyA9IDEwMDQsXG4gIERFQ09SQVRPUl9VTkVYUEVDVEVEID0gMTAwNSxcblxuICAvKipcbiAgICogVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZXJlIGFyZSBpbmNvbXBhdGlibGUgZGVjb3JhdG9ycyBvbiBhIHR5cGUgb3IgYSBjbGFzcyBmaWVsZC5cbiAgICovXG4gIERFQ09SQVRPUl9DT0xMSVNJT04gPSAxMDA2LFxuXG4gIFZBTFVFX0hBU19XUk9OR19UWVBFID0gMTAxMCxcbiAgVkFMVUVfTk9UX0xJVEVSQUwgPSAxMDExLFxuXG4gIENPTVBPTkVOVF9NSVNTSU5HX1RFTVBMQVRFID0gMjAwMSxcbiAgUElQRV9NSVNTSU5HX05BTUUgPSAyMDAyLFxuICBQQVJBTV9NSVNTSU5HX1RPS0VOID0gMjAwMyxcbiAgRElSRUNUSVZFX01JU1NJTkdfU0VMRUNUT1IgPSAyMDA0LFxuXG4gIC8qKiBSYWlzZWQgd2hlbiBhbiB1bmRlY29yYXRlZCBjbGFzcyBpcyBwYXNzZWQgaW4gYXMgYSBwcm92aWRlciB0byBhIG1vZHVsZSBvciBhIGRpcmVjdGl2ZS4gKi9cbiAgVU5ERUNPUkFURURfUFJPVklERVIgPSAyMDA1LFxuXG4gIC8qKlxuICAgKiBSYWlzZWQgd2hlbiBhIERpcmVjdGl2ZSBpbmhlcml0cyBpdHMgY29uc3RydWN0b3IgZnJvbSBhIGJhc2UgY2xhc3Mgd2l0aG91dCBhbiBBbmd1bGFyXG4gICAqIGRlY29yYXRvci5cbiAgICovXG4gIERJUkVDVElWRV9JTkhFUklUU19VTkRFQ09SQVRFRF9DVE9SID0gMjAwNixcblxuICBTWU1CT0xfTk9UX0VYUE9SVEVEID0gMzAwMSxcbiAgU1lNQk9MX0VYUE9SVEVEX1VOREVSX0RJRkZFUkVOVF9OQU1FID0gMzAwMixcblxuICBDT05GSUdfRkxBVF9NT0RVTEVfTk9fSU5ERVggPSA0MDAxLFxuICBDT05GSUdfU1RSSUNUX1RFTVBMQVRFU19JTVBMSUVTX0ZVTExfVEVNUExBVEVfVFlQRUNIRUNLID0gNDAwMixcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYSBob3N0IGV4cHJlc3Npb24gaGFzIGEgcGFyc2UgZXJyb3IsIHN1Y2ggYXMgYSBob3N0IGxpc3RlbmVyIG9yIGhvc3QgYmluZGluZ1xuICAgKiBleHByZXNzaW9uIGNvbnRhaW5pbmcgYSBwaXBlLlxuICAgKi9cbiAgSE9TVF9CSU5ESU5HX1BBUlNFX0VSUk9SID0gNTAwMSxcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYW4gTmdNb2R1bGUgY29udGFpbnMgYW4gaW52YWxpZCByZWZlcmVuY2UgaW4gYGRlY2xhcmF0aW9uc2AuXG4gICAqL1xuICBOR01PRFVMRV9JTlZBTElEX0RFQ0xBUkFUSU9OID0gNjAwMSxcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYW4gTmdNb2R1bGUgY29udGFpbnMgYW4gaW52YWxpZCB0eXBlIGluIGBpbXBvcnRzYC5cbiAgICovXG4gIE5HTU9EVUxFX0lOVkFMSURfSU1QT1JUID0gNjAwMixcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYW4gTmdNb2R1bGUgY29udGFpbnMgYW4gaW52YWxpZCB0eXBlIGluIGBleHBvcnRzYC5cbiAgICovXG4gIE5HTU9EVUxFX0lOVkFMSURfRVhQT1JUID0gNjAwMyxcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYW4gTmdNb2R1bGUgY29udGFpbnMgYSB0eXBlIGluIGBleHBvcnRzYCB3aGljaCBpcyBuZWl0aGVyIGluIGBkZWNsYXJhdGlvbnNgIG5vclxuICAgKiBvdGhlcndpc2UgaW1wb3J0ZWQuXG4gICAqL1xuICBOR01PRFVMRV9JTlZBTElEX1JFRVhQT1JUID0gNjAwNCxcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYSBgTW9kdWxlV2l0aFByb3ZpZGVyc2Agd2l0aCBhIG1pc3NpbmdcbiAgICogZ2VuZXJpYyB0eXBlIGFyZ3VtZW50IGlzIHBhc3NlZCBpbnRvIGFuIGBOZ01vZHVsZWAuXG4gICAqL1xuICBOR01PRFVMRV9NT0RVTEVfV0lUSF9QUk9WSURFUlNfTUlTU0lOR19HRU5FUklDID0gNjAwNSxcblxuICAvKipcbiAgICogUmFpc2VkIHdoZW4gYW4gTmdNb2R1bGUgZXhwb3J0cyBtdWx0aXBsZSBkaXJlY3RpdmVzL3BpcGVzIG9mIHRoZSBzYW1lIG5hbWUgYW5kIHRoZSBjb21waWxlclxuICAgKiBhdHRlbXB0cyB0byBnZW5lcmF0ZSBwcml2YXRlIHJlLWV4cG9ydHMgd2l0aGluIHRoZSBOZ01vZHVsZSBmaWxlLlxuICAgKi9cbiAgTkdNT0RVTEVfUkVFWFBPUlRfTkFNRV9DT0xMSVNJT04gPSA2MDA2LFxuXG4gIC8qKlxuICAgKiBSYWlzZWQgd2hlbiBhIGRpcmVjdGl2ZS9waXBlIGlzIHBhcnQgb2YgdGhlIGRlY2xhcmF0aW9ucyBvZiB0d28gb3IgbW9yZSBOZ01vZHVsZXMuXG4gICAqL1xuICBOR01PRFVMRV9ERUNMQVJBVElPTl9OT1RfVU5JUVVFID0gNjAwNyxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBuYW1lIGZhaWxlZCB2YWxpZGF0aW9uIGFnYWluc3QgdGhlIERPTSBzY2hlbWEuXG4gICAqL1xuICBTQ0hFTUFfSU5WQUxJRF9FTEVNRU5UID0gODAwMSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCdzIGF0dHJpYnV0ZSBuYW1lIGZhaWxlZCB2YWxpZGF0aW9uIGFnYWluc3QgdGhlIERPTSBzY2hlbWEuXG4gICAqL1xuICBTQ0hFTUFfSU5WQUxJRF9BVFRSSUJVVEUgPSA4MDAyLFxuXG4gIC8qKlxuICAgKiBObyBtYXRjaGluZyBkaXJlY3RpdmUgd2FzIGZvdW5kIGZvciBhIGAjcmVmPVwidGFyZ2V0XCJgIGV4cHJlc3Npb24uXG4gICAqL1xuICBNSVNTSU5HX1JFRkVSRU5DRV9UQVJHRVQgPSA4MDAzLFxuXG4gIC8qKlxuICAgKiBObyBtYXRjaGluZyBwaXBlIHdhcyBmb3VuZCBmb3IgYVxuICAgKi9cbiAgTUlTU0lOR19QSVBFID0gODAwNCxcblxuICAvKipcbiAgICogVGhlIGxlZnQtaGFuZCBzaWRlIG9mIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiB3YXMgYSB0ZW1wbGF0ZSB2YXJpYWJsZS4gRWZmZWN0aXZlbHksIHRoZVxuICAgKiB0ZW1wbGF0ZSBsb29rZWQgbGlrZTpcbiAgICpcbiAgICogYGBgXG4gICAqIDxuZy10ZW1wbGF0ZSBsZXQtc29tZXRoaW5nPlxuICAgKiAgIDxidXR0b24gKGNsaWNrKT1cInNvbWV0aGluZyA9IC4uLlwiPi4uLjwvYnV0dG9uPlxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKiBgYGBcbiAgICpcbiAgICogVGVtcGxhdGUgdmFyaWFibGVzIGFyZSByZWFkLW9ubHkuXG4gICAqL1xuICBXUklURV9UT19SRUFEX09OTFlfVkFSSUFCTEUgPSA4MDA1LFxuXG4gIC8qKlxuICAgKiBBIHRlbXBsYXRlIHZhcmlhYmxlIHdhcyBkZWNsYXJlZCB0d2ljZS4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPGRpdiAqbmdGb3I9XCJsZXQgaSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgKiA8L2Rpdj5cbiAgICogYGBgXG4gICAqL1xuICBEVVBMSUNBVEVfVkFSSUFCTEVfREVDTEFSQVRJT04gPSA4MDA2LFxuXG4gIC8qKlxuICAgKiBBbiBpbmplY3RhYmxlIGFscmVhZHkgaGFzIGEgYMm1cHJvdmAgcHJvcGVydHkuXG4gICAqL1xuICBJTkpFQ1RBQkxFX0RVUExJQ0FURV9QUk9WID0gOTAwMSxcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5nRXJyb3JDb2RlKGNvZGU6IEVycm9yQ29kZSk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUludCgnLTk5JyArIGNvZGUpO1xufVxuIl19