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
        define("@angular/cdk/schematics/ng-update/html-parsing/angular", ["require", "exports", "@angular/cdk/schematics/ng-update/html-parsing/elements"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const elements_1 = require("@angular/cdk/schematics/ng-update/html-parsing/elements");
    /** Finds the specified Angular @Input in the given elements with tag name. */
    function findInputsOnElementWithTag(html, inputName, tagNames) {
        return [
            // Inputs can be also used without brackets (e.g. `<mat-toolbar color="primary">`)
            ...elements_1.findAttributeOnElementWithTag(html, inputName, tagNames),
            // Add one column to the mapped offset because the first bracket for the @Input
            // is part of the attribute and therefore also part of the offset. We only want to return
            // the offset for the inner name of the bracketed input.
            ...elements_1.findAttributeOnElementWithTag(html, `[${inputName}]`, tagNames).map(offset => offset + 1),
        ];
    }
    exports.findInputsOnElementWithTag = findInputsOnElementWithTag;
    /** Finds the specified Angular @Input in elements that have one of the specified attributes. */
    function findInputsOnElementWithAttr(html, inputName, attrs) {
        return [
            // Inputs can be also used without brackets (e.g. `<button mat-button color="primary">`)
            ...elements_1.findAttributeOnElementWithAttrs(html, inputName, attrs),
            // Add one column to the mapped offset because the first bracket for the @Input
            // is part of the attribute and therefore also part of the offset. We only want to return
            // the offset for the inner name of the bracketed input.
            ...elements_1.findAttributeOnElementWithAttrs(html, `[${inputName}]`, attrs).map(offset => offset + 1),
        ];
    }
    exports.findInputsOnElementWithAttr = findInputsOnElementWithAttr;
    /** Finds the specified Angular @Output in the given elements with tag name. */
    function findOutputsOnElementWithTag(html, outputName, tagNames) {
        // Add one column to the mapped offset because the first parenthesis for the @Output
        // is part of the attribute and therefore also part of the offset. We only want to return
        // the offset for the inner name of the output.
        return elements_1.findAttributeOnElementWithTag(html, `(${outputName})`, tagNames).map(offset => offset + 1);
    }
    exports.findOutputsOnElementWithTag = findOutputsOnElementWithTag;
    /** Finds the specified Angular @Output in elements that have one of the specified attributes. */
    function findOutputsOnElementWithAttr(html, outputName, attrs) {
        // Add one column to the mapped offset because the first bracket for the @Output
        // is part of the attribute and therefore also part of the offset. We only want to return
        // the offset for the inner name of the output.
        return elements_1.findAttributeOnElementWithAttrs(html, `(${outputName})`, attrs).map(offset => offset + 1);
    }
    exports.findOutputsOnElementWithAttr = findOutputsOnElementWithAttr;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvaHRtbC1wYXJzaW5nL2FuZ3VsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxzRkFBMEY7SUFFMUYsOEVBQThFO0lBQzlFLFNBQWdCLDBCQUEwQixDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLFFBQWtCO1FBQzVGLE9BQU87WUFDTCxrRkFBa0Y7WUFDbEYsR0FBRyx3Q0FBNkIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUMzRCwrRUFBK0U7WUFDL0UseUZBQXlGO1lBQ3pGLHdEQUF3RDtZQUN4RCxHQUFHLHdDQUE2QixDQUFDLElBQUksRUFBRSxJQUFJLFNBQVMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDN0YsQ0FBQztJQUNKLENBQUM7SUFURCxnRUFTQztJQUVELGdHQUFnRztJQUNoRyxTQUFnQiwyQkFBMkIsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxLQUFlO1FBQzFGLE9BQU87WUFDTCx3RkFBd0Y7WUFDeEYsR0FBRywwQ0FBK0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUMxRCwrRUFBK0U7WUFDL0UseUZBQXlGO1lBQ3pGLHdEQUF3RDtZQUN4RCxHQUFHLDBDQUErQixDQUFDLElBQUksRUFBRSxJQUFJLFNBQVMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDNUYsQ0FBQztJQUNKLENBQUM7SUFURCxrRUFTQztJQUVELCtFQUErRTtJQUMvRSxTQUFnQiwyQkFBMkIsQ0FBQyxJQUFZLEVBQUUsVUFBa0IsRUFBRSxRQUFrQjtRQUM5RixvRkFBb0Y7UUFDcEYseUZBQXlGO1FBQ3pGLCtDQUErQztRQUMvQyxPQUFPLHdDQUE2QixDQUFDLElBQUksRUFBRSxJQUFJLFVBQVUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBTEQsa0VBS0M7SUFFRCxpR0FBaUc7SUFDakcsU0FBZ0IsNEJBQTRCLENBQUMsSUFBWSxFQUFFLFVBQWtCLEVBQUUsS0FBZTtRQUM1RixnRkFBZ0Y7UUFDaEYseUZBQXlGO1FBQ3pGLCtDQUErQztRQUMvQyxPQUFPLDBDQUErQixDQUFDLElBQUksRUFBRSxJQUFJLFVBQVUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBTEQsb0VBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtmaW5kQXR0cmlidXRlT25FbGVtZW50V2l0aEF0dHJzLCBmaW5kQXR0cmlidXRlT25FbGVtZW50V2l0aFRhZ30gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8qKiBGaW5kcyB0aGUgc3BlY2lmaWVkIEFuZ3VsYXIgQElucHV0IGluIHRoZSBnaXZlbiBlbGVtZW50cyB3aXRoIHRhZyBuYW1lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnB1dHNPbkVsZW1lbnRXaXRoVGFnKGh0bWw6IHN0cmluZywgaW5wdXROYW1lOiBzdHJpbmcsIHRhZ05hbWVzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gW1xuICAgIC8vIElucHV0cyBjYW4gYmUgYWxzbyB1c2VkIHdpdGhvdXQgYnJhY2tldHMgKGUuZy4gYDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5gKVxuICAgIC4uLmZpbmRBdHRyaWJ1dGVPbkVsZW1lbnRXaXRoVGFnKGh0bWwsIGlucHV0TmFtZSwgdGFnTmFtZXMpLFxuICAgIC8vIEFkZCBvbmUgY29sdW1uIHRvIHRoZSBtYXBwZWQgb2Zmc2V0IGJlY2F1c2UgdGhlIGZpcnN0IGJyYWNrZXQgZm9yIHRoZSBASW5wdXRcbiAgICAvLyBpcyBwYXJ0IG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHRoZXJlZm9yZSBhbHNvIHBhcnQgb2YgdGhlIG9mZnNldC4gV2Ugb25seSB3YW50IHRvIHJldHVyblxuICAgIC8vIHRoZSBvZmZzZXQgZm9yIHRoZSBpbm5lciBuYW1lIG9mIHRoZSBicmFja2V0ZWQgaW5wdXQuXG4gICAgLi4uZmluZEF0dHJpYnV0ZU9uRWxlbWVudFdpdGhUYWcoaHRtbCwgYFske2lucHV0TmFtZX1dYCwgdGFnTmFtZXMpLm1hcChvZmZzZXQgPT4gb2Zmc2V0ICsgMSksXG4gIF07XG59XG5cbi8qKiBGaW5kcyB0aGUgc3BlY2lmaWVkIEFuZ3VsYXIgQElucHV0IGluIGVsZW1lbnRzIHRoYXQgaGF2ZSBvbmUgb2YgdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnB1dHNPbkVsZW1lbnRXaXRoQXR0cihodG1sOiBzdHJpbmcsIGlucHV0TmFtZTogc3RyaW5nLCBhdHRyczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBJbnB1dHMgY2FuIGJlIGFsc28gdXNlZCB3aXRob3V0IGJyYWNrZXRzIChlLmcuIGA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+YClcbiAgICAuLi5maW5kQXR0cmlidXRlT25FbGVtZW50V2l0aEF0dHJzKGh0bWwsIGlucHV0TmFtZSwgYXR0cnMpLFxuICAgIC8vIEFkZCBvbmUgY29sdW1uIHRvIHRoZSBtYXBwZWQgb2Zmc2V0IGJlY2F1c2UgdGhlIGZpcnN0IGJyYWNrZXQgZm9yIHRoZSBASW5wdXRcbiAgICAvLyBpcyBwYXJ0IG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHRoZXJlZm9yZSBhbHNvIHBhcnQgb2YgdGhlIG9mZnNldC4gV2Ugb25seSB3YW50IHRvIHJldHVyblxuICAgIC8vIHRoZSBvZmZzZXQgZm9yIHRoZSBpbm5lciBuYW1lIG9mIHRoZSBicmFja2V0ZWQgaW5wdXQuXG4gICAgLi4uZmluZEF0dHJpYnV0ZU9uRWxlbWVudFdpdGhBdHRycyhodG1sLCBgWyR7aW5wdXROYW1lfV1gLCBhdHRycykubWFwKG9mZnNldCA9PiBvZmZzZXQgKyAxKSxcbiAgXTtcbn1cblxuLyoqIEZpbmRzIHRoZSBzcGVjaWZpZWQgQW5ndWxhciBAT3V0cHV0IGluIHRoZSBnaXZlbiBlbGVtZW50cyB3aXRoIHRhZyBuYW1lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRPdXRwdXRzT25FbGVtZW50V2l0aFRhZyhodG1sOiBzdHJpbmcsIG91dHB1dE5hbWU6IHN0cmluZywgdGFnTmFtZXM6IHN0cmluZ1tdKSB7XG4gIC8vIEFkZCBvbmUgY29sdW1uIHRvIHRoZSBtYXBwZWQgb2Zmc2V0IGJlY2F1c2UgdGhlIGZpcnN0IHBhcmVudGhlc2lzIGZvciB0aGUgQE91dHB1dFxuICAvLyBpcyBwYXJ0IG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHRoZXJlZm9yZSBhbHNvIHBhcnQgb2YgdGhlIG9mZnNldC4gV2Ugb25seSB3YW50IHRvIHJldHVyblxuICAvLyB0aGUgb2Zmc2V0IGZvciB0aGUgaW5uZXIgbmFtZSBvZiB0aGUgb3V0cHV0LlxuICByZXR1cm4gZmluZEF0dHJpYnV0ZU9uRWxlbWVudFdpdGhUYWcoaHRtbCwgYCgke291dHB1dE5hbWV9KWAsIHRhZ05hbWVzKS5tYXAob2Zmc2V0ID0+IG9mZnNldCArIDEpO1xufVxuXG4vKiogRmluZHMgdGhlIHNwZWNpZmllZCBBbmd1bGFyIEBPdXRwdXQgaW4gZWxlbWVudHMgdGhhdCBoYXZlIG9uZSBvZiB0aGUgc3BlY2lmaWVkIGF0dHJpYnV0ZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE91dHB1dHNPbkVsZW1lbnRXaXRoQXR0cihodG1sOiBzdHJpbmcsIG91dHB1dE5hbWU6IHN0cmluZywgYXR0cnM6IHN0cmluZ1tdKSB7XG4gIC8vIEFkZCBvbmUgY29sdW1uIHRvIHRoZSBtYXBwZWQgb2Zmc2V0IGJlY2F1c2UgdGhlIGZpcnN0IGJyYWNrZXQgZm9yIHRoZSBAT3V0cHV0XG4gIC8vIGlzIHBhcnQgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgdGhlcmVmb3JlIGFsc28gcGFydCBvZiB0aGUgb2Zmc2V0LiBXZSBvbmx5IHdhbnQgdG8gcmV0dXJuXG4gIC8vIHRoZSBvZmZzZXQgZm9yIHRoZSBpbm5lciBuYW1lIG9mIHRoZSBvdXRwdXQuXG4gIHJldHVybiBmaW5kQXR0cmlidXRlT25FbGVtZW50V2l0aEF0dHJzKGh0bWwsIGAoJHtvdXRwdXROYW1lfSlgLCBhdHRycykubWFwKG9mZnNldCA9PiBvZmZzZXQgKyAxKTtcbn1cbiJdfQ==