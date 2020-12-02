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
        define("@angular/compiler/src/ml_parser/xml_tags", ["require", "exports", "@angular/compiler/src/ml_parser/tags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tags_1 = require("@angular/compiler/src/ml_parser/tags");
    var XmlTagDefinition = /** @class */ (function () {
        function XmlTagDefinition() {
            this.closedByParent = false;
            this.contentType = tags_1.TagContentType.PARSABLE_DATA;
            this.isVoid = false;
            this.ignoreFirstLf = false;
            this.canSelfClose = true;
        }
        XmlTagDefinition.prototype.requireExtraParent = function (currentParent) {
            return false;
        };
        XmlTagDefinition.prototype.isClosedByChild = function (name) {
            return false;
        };
        return XmlTagDefinition;
    }());
    exports.XmlTagDefinition = XmlTagDefinition;
    var _TAG_DEFINITION = new XmlTagDefinition();
    function getXmlTagDefinition(tagName) {
        return _TAG_DEFINITION;
    }
    exports.getXmlTagDefinition = getXmlTagDefinition;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3RhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL3htbF90YWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsNkRBQXFEO0lBRXJEO1FBQUE7WUFDRSxtQkFBYyxHQUFZLEtBQUssQ0FBQztZQU9oQyxnQkFBVyxHQUFtQixxQkFBYyxDQUFDLGFBQWEsQ0FBQztZQUMzRCxXQUFNLEdBQVksS0FBSyxDQUFDO1lBQ3hCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1lBQy9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBUy9CLENBQUM7UUFQQyw2Q0FBa0IsR0FBbEIsVUFBbUIsYUFBcUI7WUFDdEMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRUQsMENBQWUsR0FBZixVQUFnQixJQUFZO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQXBCWSw0Q0FBZ0I7SUFzQjdCLElBQU0sZUFBZSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUUvQyxTQUFnQixtQkFBbUIsQ0FBQyxPQUFlO1FBQ2pELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFGRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIFhtbFRhZ0RlZmluaXRpb24gaW1wbGVtZW50cyBUYWdEZWZpbml0aW9uIHtcbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlcXVpcmVkUGFyZW50cyE6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHBhcmVudFRvQWRkITogc3RyaW5nO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXghOiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZSA9IFRhZ0NvbnRlbnRUeXBlLlBBUlNBQkxFX0RBVEE7XG4gIGlzVm9pZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpZ25vcmVGaXJzdExmOiBib29sZWFuID0gZmFsc2U7XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcmVxdWlyZUV4dHJhUGFyZW50KGN1cnJlbnRQYXJlbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgX1RBR19ERUZJTklUSU9OID0gbmV3IFhtbFRhZ0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhtbFRhZ0RlZmluaXRpb24odGFnTmFtZTogc3RyaW5nKTogWG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBfVEFHX0RFRklOSVRJT047XG59XG4iXX0=