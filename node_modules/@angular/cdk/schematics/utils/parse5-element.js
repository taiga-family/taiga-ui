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
        define("@angular/cdk/schematics/utils/parse5-element", ["require", "exports", "@angular-devkit/schematics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    /** Determines the indentation of child elements for the given Parse5 element. */
    function getChildElementIndentation(element) {
        const childElement = element.childNodes
            .find(node => node['tagName']);
        if ((childElement && !childElement.sourceCodeLocation) || !element.sourceCodeLocation) {
            throw new schematics_1.SchematicsException('Cannot determine child element indentation because the ' +
                'specified Parse5 element does not have any source code location metadata.');
        }
        const startColumns = childElement ?
            // In case there are child elements inside of the element, we assume that their
            // indentation is also applicable for other child elements.
            childElement.sourceCodeLocation.startCol :
            // In case there is no child element, we just assume that child elements should be indented
            // by two spaces.
            element.sourceCodeLocation.startCol + 2;
        // Since Parse5 does not set the `startCol` properties as zero-based, we need to subtract
        // one column in order to have a proper zero-based offset for the indentation.
        return startColumns - 1;
    }
    exports.getChildElementIndentation = getChildElementIndentation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2U1LWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvcGFyc2U1LWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwyREFBK0Q7SUFHL0QsaUZBQWlGO0lBQ2pGLFNBQWdCLDBCQUEwQixDQUFDLE9BQTJCO1FBQ3BFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVO2FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBOEIsQ0FBQztRQUU5RCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDckYsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHlEQUF5RDtnQkFDckYsMkVBQTJFLENBQUMsQ0FBQztTQUNoRjtRQUVELE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLCtFQUErRTtZQUMvRSwyREFBMkQ7WUFDM0QsWUFBWSxDQUFDLGtCQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLDJGQUEyRjtZQUMzRixpQkFBaUI7WUFDakIsT0FBTyxDQUFDLGtCQUFtQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFM0MseUZBQXlGO1FBQ3pGLDhFQUE4RTtRQUM5RSxPQUFPLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXBCRCxnRUFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTY2hlbWF0aWNzRXhjZXB0aW9ufSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge0RlZmF1bHRUcmVlRWxlbWVudH0gZnJvbSAncGFyc2U1JztcblxuLyoqIERldGVybWluZXMgdGhlIGluZGVudGF0aW9uIG9mIGNoaWxkIGVsZW1lbnRzIGZvciB0aGUgZ2l2ZW4gUGFyc2U1IGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRFbGVtZW50SW5kZW50YXRpb24oZWxlbWVudDogRGVmYXVsdFRyZWVFbGVtZW50KSB7XG4gIGNvbnN0IGNoaWxkRWxlbWVudCA9IGVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIC5maW5kKG5vZGUgPT4gbm9kZVsndGFnTmFtZSddKSBhcyBEZWZhdWx0VHJlZUVsZW1lbnQgfCBudWxsO1xuXG4gIGlmICgoY2hpbGRFbGVtZW50ICYmICFjaGlsZEVsZW1lbnQuc291cmNlQ29kZUxvY2F0aW9uKSB8fCAhZWxlbWVudC5zb3VyY2VDb2RlTG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbignQ2Fubm90IGRldGVybWluZSBjaGlsZCBlbGVtZW50IGluZGVudGF0aW9uIGJlY2F1c2UgdGhlICcgK1xuICAgICAgJ3NwZWNpZmllZCBQYXJzZTUgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGFueSBzb3VyY2UgY29kZSBsb2NhdGlvbiBtZXRhZGF0YS4nKTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0Q29sdW1ucyA9IGNoaWxkRWxlbWVudCA/XG4gICAgLy8gSW4gY2FzZSB0aGVyZSBhcmUgY2hpbGQgZWxlbWVudHMgaW5zaWRlIG9mIHRoZSBlbGVtZW50LCB3ZSBhc3N1bWUgdGhhdCB0aGVpclxuICAgIC8vIGluZGVudGF0aW9uIGlzIGFsc28gYXBwbGljYWJsZSBmb3Igb3RoZXIgY2hpbGQgZWxlbWVudHMuXG4gICAgY2hpbGRFbGVtZW50LnNvdXJjZUNvZGVMb2NhdGlvbiEuc3RhcnRDb2wgOlxuICAgIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gY2hpbGQgZWxlbWVudCwgd2UganVzdCBhc3N1bWUgdGhhdCBjaGlsZCBlbGVtZW50cyBzaG91bGQgYmUgaW5kZW50ZWRcbiAgICAvLyBieSB0d28gc3BhY2VzLlxuICAgIGVsZW1lbnQuc291cmNlQ29kZUxvY2F0aW9uIS5zdGFydENvbCArIDI7XG5cbiAgLy8gU2luY2UgUGFyc2U1IGRvZXMgbm90IHNldCB0aGUgYHN0YXJ0Q29sYCBwcm9wZXJ0aWVzIGFzIHplcm8tYmFzZWQsIHdlIG5lZWQgdG8gc3VidHJhY3RcbiAgLy8gb25lIGNvbHVtbiBpbiBvcmRlciB0byBoYXZlIGEgcHJvcGVyIHplcm8tYmFzZWQgb2Zmc2V0IGZvciB0aGUgaW5kZW50YXRpb24uXG4gIHJldHVybiBzdGFydENvbHVtbnMgLSAxO1xufVxuIl19