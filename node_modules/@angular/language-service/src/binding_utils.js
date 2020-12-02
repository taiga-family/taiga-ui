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
        define("@angular/language-service/src/binding_utils", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Matches an Angular attribute to a binding type. See `ATTR` for more details.
     *
     * This is adapted from packages/compiler/src/render3/r3_template_transform.ts
     * to allow empty binding names and match template attributes.
     */
    var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@)|(\*))(.*))|\[\(([^\)]*)\)\]|\[([^\]]*)\]|\(([^\)]*)\))$/;
    /**
     * Represents possible Angular attribute bindings, as indices on a match of `BIND_NAME_REGEXP`.
     */
    var ATTR;
    (function (ATTR) {
        /** "bind-" */
        ATTR[ATTR["KW_BIND"] = 1] = "KW_BIND";
        /** "let-" */
        ATTR[ATTR["KW_LET"] = 2] = "KW_LET";
        /** "ref-/#" */
        ATTR[ATTR["KW_REF"] = 3] = "KW_REF";
        /** "on-" */
        ATTR[ATTR["KW_ON"] = 4] = "KW_ON";
        /** "bindon-" */
        ATTR[ATTR["KW_BINDON"] = 5] = "KW_BINDON";
        /** "@" */
        ATTR[ATTR["KW_AT"] = 6] = "KW_AT";
        /**
         * "*"
         * Microsyntax template starts with '*'. See https://angular.io/api/core/TemplateRef
         */
        ATTR[ATTR["KW_MICROSYNTAX"] = 7] = "KW_MICROSYNTAX";
        /** The identifier after "bind-", "let-", "ref-/#", "on-", "bindon-", "@", or "*" */
        ATTR[ATTR["IDENT_KW"] = 8] = "IDENT_KW";
        /** Identifier inside [()] */
        ATTR[ATTR["IDENT_BANANA_BOX"] = 9] = "IDENT_BANANA_BOX";
        /** Identifier inside [] */
        ATTR[ATTR["IDENT_PROPERTY"] = 10] = "IDENT_PROPERTY";
        /** Identifier inside () */
        ATTR[ATTR["IDENT_EVENT"] = 11] = "IDENT_EVENT";
    })(ATTR = exports.ATTR || (exports.ATTR = {}));
    /**
     * Returns a descriptor for a given Angular attribute, or undefined if the attribute is
     * not an Angular attribute.
     */
    function getBindingDescriptor(attribute) {
        var bindParts = attribute.match(BIND_NAME_REGEXP);
        if (!bindParts)
            return;
        // The first match element is skipped because it matches the entire attribute text, including the
        // binding part.
        var kind = bindParts.findIndex(function (val, i) { return i > 0 && val !== undefined; });
        if (!(kind in ATTR)) {
            throw TypeError("\"" + kind + "\" is not a valid Angular binding kind for \"" + attribute + "\"");
        }
        return {
            kind: kind,
            name: bindParts[ATTR.IDENT_KW],
        };
    }
    exports.getBindingDescriptor = getBindingDescriptor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2Uvc3JjL2JpbmRpbmdfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSDs7Ozs7T0FLRztJQUNILElBQU0sZ0JBQWdCLEdBQ2xCLCtHQUErRyxDQUFDO0lBQ3BIOztPQUVHO0lBQ0gsSUFBWSxJQTBCWDtJQTFCRCxXQUFZLElBQUk7UUFDZCxjQUFjO1FBQ2QscUNBQVcsQ0FBQTtRQUNYLGFBQWE7UUFDYixtQ0FBVSxDQUFBO1FBQ1YsZUFBZTtRQUNmLG1DQUFVLENBQUE7UUFDVixZQUFZO1FBQ1osaUNBQVMsQ0FBQTtRQUNULGdCQUFnQjtRQUNoQix5Q0FBYSxDQUFBO1FBQ2IsVUFBVTtRQUNWLGlDQUFTLENBQUE7UUFDVDs7O1dBR0c7UUFDSCxtREFBa0IsQ0FBQTtRQUNsQixvRkFBb0Y7UUFDcEYsdUNBQVksQ0FBQTtRQUNaLDZCQUE2QjtRQUM3Qix1REFBb0IsQ0FBQTtRQUNwQiwyQkFBMkI7UUFDM0Isb0RBQW1CLENBQUE7UUFDbkIsMkJBQTJCO1FBQzNCLDhDQUFnQixDQUFBO0lBQ2xCLENBQUMsRUExQlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBMEJmO0lBTUQ7OztPQUdHO0lBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsU0FBaUI7UUFDcEQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixpR0FBaUc7UUFDakcsZ0JBQWdCO1FBQ2hCLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ25CLE1BQU0sU0FBUyxDQUFDLE9BQUksSUFBSSxxREFBOEMsU0FBUyxPQUFHLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU87WUFDTCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFiRCxvREFhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBNYXRjaGVzIGFuIEFuZ3VsYXIgYXR0cmlidXRlIHRvIGEgYmluZGluZyB0eXBlLiBTZWUgYEFUVFJgIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogVGhpcyBpcyBhZGFwdGVkIGZyb20gcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfdGVtcGxhdGVfdHJhbnNmb3JtLnRzXG4gKiB0byBhbGxvdyBlbXB0eSBiaW5kaW5nIG5hbWVzIGFuZCBtYXRjaCB0ZW1wbGF0ZSBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBCSU5EX05BTUVfUkVHRVhQID1cbiAgICAvXig/Oig/Oig/OihiaW5kLSl8KGxldC0pfChyZWYtfCMpfChvbi0pfChiaW5kb24tKXwoQCl8KFxcKikpKC4qKSl8XFxbXFwoKFteXFwpXSopXFwpXFxdfFxcWyhbXlxcXV0qKVxcXXxcXCgoW15cXCldKilcXCkpJC87XG4vKipcbiAqIFJlcHJlc2VudHMgcG9zc2libGUgQW5ndWxhciBhdHRyaWJ1dGUgYmluZGluZ3MsIGFzIGluZGljZXMgb24gYSBtYXRjaCBvZiBgQklORF9OQU1FX1JFR0VYUGAuXG4gKi9cbmV4cG9ydCBlbnVtIEFUVFIge1xuICAvKiogXCJiaW5kLVwiICovXG4gIEtXX0JJTkQgPSAxLFxuICAvKiogXCJsZXQtXCIgKi9cbiAgS1dfTEVUID0gMixcbiAgLyoqIFwicmVmLS8jXCIgKi9cbiAgS1dfUkVGID0gMyxcbiAgLyoqIFwib24tXCIgKi9cbiAgS1dfT04gPSA0LFxuICAvKiogXCJiaW5kb24tXCIgKi9cbiAgS1dfQklORE9OID0gNSxcbiAgLyoqIFwiQFwiICovXG4gIEtXX0FUID0gNixcbiAgLyoqXG4gICAqIFwiKlwiXG4gICAqIE1pY3Jvc3ludGF4IHRlbXBsYXRlIHN0YXJ0cyB3aXRoICcqJy4gU2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9UZW1wbGF0ZVJlZlxuICAgKi9cbiAgS1dfTUlDUk9TWU5UQVggPSA3LFxuICAvKiogVGhlIGlkZW50aWZpZXIgYWZ0ZXIgXCJiaW5kLVwiLCBcImxldC1cIiwgXCJyZWYtLyNcIiwgXCJvbi1cIiwgXCJiaW5kb24tXCIsIFwiQFwiLCBvciBcIipcIiAqL1xuICBJREVOVF9LVyA9IDgsXG4gIC8qKiBJZGVudGlmaWVyIGluc2lkZSBbKCldICovXG4gIElERU5UX0JBTkFOQV9CT1ggPSA5LFxuICAvKiogSWRlbnRpZmllciBpbnNpZGUgW10gKi9cbiAgSURFTlRfUFJPUEVSVFkgPSAxMCxcbiAgLyoqIElkZW50aWZpZXIgaW5zaWRlICgpICovXG4gIElERU5UX0VWRU5UID0gMTEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmluZGluZ0Rlc2NyaXB0b3Ige1xuICBraW5kOiBBVFRSO1xuICBuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFJldHVybnMgYSBkZXNjcmlwdG9yIGZvciBhIGdpdmVuIEFuZ3VsYXIgYXR0cmlidXRlLCBvciB1bmRlZmluZWQgaWYgdGhlIGF0dHJpYnV0ZSBpc1xuICogbm90IGFuIEFuZ3VsYXIgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmluZGluZ0Rlc2NyaXB0b3IoYXR0cmlidXRlOiBzdHJpbmcpOiBCaW5kaW5nRGVzY3JpcHRvcnx1bmRlZmluZWQge1xuICBjb25zdCBiaW5kUGFydHMgPSBhdHRyaWJ1dGUubWF0Y2goQklORF9OQU1FX1JFR0VYUCk7XG4gIGlmICghYmluZFBhcnRzKSByZXR1cm47XG4gIC8vIFRoZSBmaXJzdCBtYXRjaCBlbGVtZW50IGlzIHNraXBwZWQgYmVjYXVzZSBpdCBtYXRjaGVzIHRoZSBlbnRpcmUgYXR0cmlidXRlIHRleHQsIGluY2x1ZGluZyB0aGVcbiAgLy8gYmluZGluZyBwYXJ0LlxuICBjb25zdCBraW5kID0gYmluZFBhcnRzLmZpbmRJbmRleCgodmFsLCBpKSA9PiBpID4gMCAmJiB2YWwgIT09IHVuZGVmaW5lZCk7XG4gIGlmICghKGtpbmQgaW4gQVRUUikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYFwiJHtraW5kfVwiIGlzIG5vdCBhIHZhbGlkIEFuZ3VsYXIgYmluZGluZyBraW5kIGZvciBcIiR7YXR0cmlidXRlfVwiYCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBraW5kLFxuICAgIG5hbWU6IGJpbmRQYXJ0c1tBVFRSLklERU5UX0tXXSxcbiAgfTtcbn1cbiJdfQ==