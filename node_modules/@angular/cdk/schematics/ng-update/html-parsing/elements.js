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
        define("@angular/cdk/schematics/ng-update/html-parsing/elements", ["require", "exports", "parse5"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parse5_1 = require("parse5");
    /**
     * Parses a HTML fragment and traverses all AST nodes in order find elements that
     * include the specified attribute.
     */
    function findElementsWithAttribute(html, attributeName) {
        const document = parse5_1.parseFragment(html, { sourceCodeLocationInfo: true });
        const elements = [];
        const visitNodes = nodes => {
            nodes.forEach(node => {
                if (node.childNodes) {
                    visitNodes(node.childNodes);
                }
                if (node.attrs && node.attrs.some(attr => attr.name === attributeName.toLowerCase())) {
                    elements.push(node);
                }
            });
        };
        visitNodes(document.childNodes);
        return elements;
    }
    exports.findElementsWithAttribute = findElementsWithAttribute;
    /**
     * Finds elements with explicit tag names that also contain the specified attribute. Returns the
     * attribute start offset based on the specified HTML.
     */
    function findAttributeOnElementWithTag(html, name, tagNames) {
        return findElementsWithAttribute(html, name)
            .filter(element => tagNames.includes(element.tagName))
            .map(element => getStartOffsetOfAttribute(element, name));
    }
    exports.findAttributeOnElementWithTag = findAttributeOnElementWithTag;
    /**
     * Finds elements that contain the given attribute and contain at least one of the other
     * specified attributes. Returns the primary attribute's start offset based on the specified HTML.
     */
    function findAttributeOnElementWithAttrs(html, name, attrs) {
        return findElementsWithAttribute(html, name)
            .filter(element => attrs.some(attr => hasElementAttribute(element, attr)))
            .map(element => getStartOffsetOfAttribute(element, name));
    }
    exports.findAttributeOnElementWithAttrs = findAttributeOnElementWithAttrs;
    /** Shorthand function that checks if the specified element contains the given attribute. */
    function hasElementAttribute(element, attributeName) {
        return element.attrs && element.attrs.some(attr => attr.name === attributeName.toLowerCase());
    }
    /** Gets the start offset of the given attribute from a Parse5 element. */
    function getStartOffsetOfAttribute(element, attributeName) {
        return element.sourceCodeLocation.attrs[attributeName.toLowerCase()].startOffset;
    }
    exports.getStartOffsetOfAttribute = getStartOffsetOfAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2h0bWwtcGFyc2luZy9lbGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILG1DQUE4RTtJQUU5RTs7O09BR0c7SUFDSCxTQUFnQix5QkFBeUIsQ0FBQyxJQUFZLEVBQUUsYUFBcUI7UUFDM0UsTUFBTSxRQUFRLEdBQUcsc0JBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUMsQ0FBd0IsQ0FBQztRQUM1RixNQUFNLFFBQVEsR0FBeUIsRUFBRSxDQUFDO1FBRTFDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtvQkFDcEYsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQW5CRCw4REFtQkM7SUFFRDs7O09BR0c7SUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWtCO1FBQzFGLE9BQU8seUJBQXlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzthQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBSkQsc0VBSUM7SUFFRDs7O09BR0c7SUFDSCxTQUFnQiwrQkFBK0IsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEtBQWU7UUFDekYsT0FBTyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN6RSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBSkQsMEVBSUM7SUFFRCw0RkFBNEY7SUFDNUYsU0FBUyxtQkFBbUIsQ0FBQyxPQUEyQixFQUFFLGFBQXFCO1FBQzdFLE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUdELDBFQUEwRTtJQUMxRSxTQUFnQix5QkFBeUIsQ0FBQyxPQUFZLEVBQUUsYUFBcUI7UUFDM0UsT0FBTyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNuRixDQUFDO0lBRkQsOERBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEZWZhdWx0VHJlZURvY3VtZW50LCBEZWZhdWx0VHJlZUVsZW1lbnQsIHBhcnNlRnJhZ21lbnR9IGZyb20gJ3BhcnNlNSc7XG5cbi8qKlxuICogUGFyc2VzIGEgSFRNTCBmcmFnbWVudCBhbmQgdHJhdmVyc2VzIGFsbCBBU1Qgbm9kZXMgaW4gb3JkZXIgZmluZCBlbGVtZW50cyB0aGF0XG4gKiBpbmNsdWRlIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEVsZW1lbnRzV2l0aEF0dHJpYnV0ZShodG1sOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xuICBjb25zdCBkb2N1bWVudCA9IHBhcnNlRnJhZ21lbnQoaHRtbCwge3NvdXJjZUNvZGVMb2NhdGlvbkluZm86IHRydWV9KSBhcyBEZWZhdWx0VHJlZURvY3VtZW50O1xuICBjb25zdCBlbGVtZW50czogRGVmYXVsdFRyZWVFbGVtZW50W10gPSBbXTtcblxuICBjb25zdCB2aXNpdE5vZGVzID0gbm9kZXMgPT4ge1xuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgIHZpc2l0Tm9kZXMobm9kZS5jaGlsZE5vZGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuYXR0cnMgJiYgbm9kZS5hdHRycy5zb21lKGF0dHIgPT4gYXR0ci5uYW1lID09PSBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmlzaXROb2Rlcyhkb2N1bWVudC5jaGlsZE5vZGVzKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbi8qKlxuICogRmluZHMgZWxlbWVudHMgd2l0aCBleHBsaWNpdCB0YWcgbmFtZXMgdGhhdCBhbHNvIGNvbnRhaW4gdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGUuIFJldHVybnMgdGhlXG4gKiBhdHRyaWJ1dGUgc3RhcnQgb2Zmc2V0IGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBdHRyaWJ1dGVPbkVsZW1lbnRXaXRoVGFnKGh0bWw6IHN0cmluZywgbmFtZTogc3RyaW5nLCB0YWdOYW1lczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGZpbmRFbGVtZW50c1dpdGhBdHRyaWJ1dGUoaHRtbCwgbmFtZSlcbiAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiB0YWdOYW1lcy5pbmNsdWRlcyhlbGVtZW50LnRhZ05hbWUpKVxuICAgICAgLm1hcChlbGVtZW50ID0+IGdldFN0YXJ0T2Zmc2V0T2ZBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSkpO1xufVxuXG4vKipcbiAqIEZpbmRzIGVsZW1lbnRzIHRoYXQgY29udGFpbiB0aGUgZ2l2ZW4gYXR0cmlidXRlIGFuZCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB0aGUgb3RoZXJcbiAqIHNwZWNpZmllZCBhdHRyaWJ1dGVzLiBSZXR1cm5zIHRoZSBwcmltYXJ5IGF0dHJpYnV0ZSdzIHN0YXJ0IG9mZnNldCBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIEhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQXR0cmlidXRlT25FbGVtZW50V2l0aEF0dHJzKGh0bWw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBhdHRyczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGZpbmRFbGVtZW50c1dpdGhBdHRyaWJ1dGUoaHRtbCwgbmFtZSlcbiAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBhdHRycy5zb21lKGF0dHIgPT4gaGFzRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSkpXG4gICAgICAubWFwKGVsZW1lbnQgPT4gZ2V0U3RhcnRPZmZzZXRPZkF0dHJpYnV0ZShlbGVtZW50LCBuYW1lKSk7XG59XG5cbi8qKiBTaG9ydGhhbmQgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlIHNwZWNpZmllZCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBhdHRyaWJ1dGUuICovXG5mdW5jdGlvbiBoYXNFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQ6IERlZmF1bHRUcmVlRWxlbWVudCwgYXR0cmlidXRlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmF0dHJzICYmIGVsZW1lbnQuYXR0cnMuc29tZShhdHRyID0+IGF0dHIubmFtZSA9PT0gYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuXG4vKiogR2V0cyB0aGUgc3RhcnQgb2Zmc2V0IG9mIHRoZSBnaXZlbiBhdHRyaWJ1dGUgZnJvbSBhIFBhcnNlNSBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0T2Zmc2V0T2ZBdHRyaWJ1dGUoZWxlbWVudDogYW55LCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudC5zb3VyY2VDb2RlTG9jYXRpb24uYXR0cnNbYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpXS5zdGFydE9mZnNldDtcbn1cbiJdfQ==