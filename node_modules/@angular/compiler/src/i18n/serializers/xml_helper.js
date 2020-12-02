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
        define("@angular/compiler/src/i18n/serializers/xml_helper", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var _Visitor = /** @class */ (function () {
        function _Visitor() {
        }
        _Visitor.prototype.visitTag = function (tag) {
            var _this = this;
            var strAttrs = this._serializeAttributes(tag.attrs);
            if (tag.children.length == 0) {
                return "<" + tag.name + strAttrs + "/>";
            }
            var strChildren = tag.children.map(function (node) { return node.visit(_this); });
            return "<" + tag.name + strAttrs + ">" + strChildren.join('') + "</" + tag.name + ">";
        };
        _Visitor.prototype.visitText = function (text) {
            return text.value;
        };
        _Visitor.prototype.visitDeclaration = function (decl) {
            return "<?xml" + this._serializeAttributes(decl.attrs) + " ?>";
        };
        _Visitor.prototype._serializeAttributes = function (attrs) {
            var strAttrs = Object.keys(attrs).map(function (name) { return name + "=\"" + attrs[name] + "\""; }).join(' ');
            return strAttrs.length > 0 ? ' ' + strAttrs : '';
        };
        _Visitor.prototype.visitDoctype = function (doctype) {
            return "<!DOCTYPE " + doctype.rootTag + " [\n" + doctype.dtd + "\n]>";
        };
        return _Visitor;
    }());
    var _visitor = new _Visitor();
    function serialize(nodes) {
        return nodes.map(function (node) { return node.visit(_visitor); }).join('');
    }
    exports.serialize = serialize;
    var Declaration = /** @class */ (function () {
        function Declaration(unescapedAttrs) {
            var _this = this;
            this.attrs = {};
            Object.keys(unescapedAttrs).forEach(function (k) {
                _this.attrs[k] = escapeXml(unescapedAttrs[k]);
            });
        }
        Declaration.prototype.visit = function (visitor) {
            return visitor.visitDeclaration(this);
        };
        return Declaration;
    }());
    exports.Declaration = Declaration;
    var Doctype = /** @class */ (function () {
        function Doctype(rootTag, dtd) {
            this.rootTag = rootTag;
            this.dtd = dtd;
        }
        Doctype.prototype.visit = function (visitor) {
            return visitor.visitDoctype(this);
        };
        return Doctype;
    }());
    exports.Doctype = Doctype;
    var Tag = /** @class */ (function () {
        function Tag(name, unescapedAttrs, children) {
            var _this = this;
            if (unescapedAttrs === void 0) { unescapedAttrs = {}; }
            if (children === void 0) { children = []; }
            this.name = name;
            this.children = children;
            this.attrs = {};
            Object.keys(unescapedAttrs).forEach(function (k) {
                _this.attrs[k] = escapeXml(unescapedAttrs[k]);
            });
        }
        Tag.prototype.visit = function (visitor) {
            return visitor.visitTag(this);
        };
        return Tag;
    }());
    exports.Tag = Tag;
    var Text = /** @class */ (function () {
        function Text(unescapedValue) {
            this.value = escapeXml(unescapedValue);
        }
        Text.prototype.visit = function (visitor) {
            return visitor.visitText(this);
        };
        return Text;
    }());
    exports.Text = Text;
    var CR = /** @class */ (function (_super) {
        tslib_1.__extends(CR, _super);
        function CR(ws) {
            if (ws === void 0) { ws = 0; }
            return _super.call(this, "\n" + new Array(ws + 1).join(' ')) || this;
        }
        return CR;
    }(Text));
    exports.CR = CR;
    var _ESCAPED_CHARS = [
        [/&/g, '&amp;'],
        [/"/g, '&quot;'],
        [/'/g, '&apos;'],
        [/</g, '&lt;'],
        [/>/g, '&gt;'],
    ];
    // Escape `_ESCAPED_CHARS` characters in the given text with encoded entities
    function escapeXml(text) {
        return _ESCAPED_CHARS.reduce(function (text, entry) { return text.replace(entry[0], entry[1]); }, text);
    }
    exports.escapeXml = escapeXml;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX2hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBU0g7UUFBQTtRQTRCQSxDQUFDO1FBM0JDLDJCQUFRLEdBQVIsVUFBUyxHQUFRO1lBQWpCLGlCQVNDO1lBUkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0RCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxNQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxPQUFJLENBQUM7YUFDcEM7WUFFRCxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUMvRCxPQUFPLE1BQUksR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLFNBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBSyxHQUFHLENBQUMsSUFBSSxNQUFHLENBQUM7UUFDekUsQ0FBQztRQUVELDRCQUFTLEdBQVQsVUFBVSxJQUFVO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLElBQWlCO1lBQ2hDLE9BQU8sVUFBUSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFLLENBQUM7UUFDNUQsQ0FBQztRQUVPLHVDQUFvQixHQUE1QixVQUE2QixLQUE0QjtZQUN2RCxJQUFNLFFBQVEsR0FBRyxNQUFN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QUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDSCxXQUFDO0lBQUQsQ0FBQyxBQVRELElBU0M7SUFUWSxvQkFBSTtJQVdqQjtRQUF3Qiw4QkFBSTtRQUMxQixZQUFZLEVBQWM7WUFBZCxtQkFBQSxFQUFBLE1BQWM7bUJBQ3hCLGtCQUFNLE9BQUssSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztRQUMzQyxDQUFDO1FBQ0gsU0FBQztJQUFELENBQUMsQUFKRCxDQUF3QixJQUFJLEdBSTNCO0lBSlksZ0JBQUU7SUFNZixJQUFNLGNBQWMsR0FBdUI7UUFDekMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQ2YsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1FBQ2hCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUNoQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFDZCxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7S0FDZixDQUFDO0lBRUYsNkVBQTZFO0lBQzdFLFNBQWdCLFNBQVMsQ0FBQyxJQUFZO1FBQ3BDLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FDeEIsVUFBQyxJQUFZLEVBQUUsS0FBdUIsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFIRCw4QkFHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVmlzaXRvciB7XG4gIHZpc2l0VGFnKHRhZzogVGFnKTogYW55O1xuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IGFueTtcbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiBEZWNsYXJhdGlvbik6IGFueTtcbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IERvY3R5cGUpOiBhbnk7XG59XG5cbmNsYXNzIF9WaXNpdG9yIGltcGxlbWVudHMgSVZpc2l0b3Ige1xuICB2aXNpdFRhZyh0YWc6IFRhZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RyQXR0cnMgPSB0aGlzLl9zZXJpYWxpemVBdHRyaWJ1dGVzKHRhZy5hdHRycyk7XG5cbiAgICBpZiAodGFnLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9Lz5gO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ckNoaWxkcmVuID0gdGFnLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIHJldHVybiBgPCR7dGFnLm5hbWV9JHtzdHJBdHRyc30+JHtzdHJDaGlsZHJlbi5qb2luKCcnKX08LyR7dGFnLm5hbWV9PmA7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDw/eG1sJHt0aGlzLl9zZXJpYWxpemVBdHRyaWJ1dGVzKGRlY2wuYXR0cnMpfSA/PmA7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVBdHRyaWJ1dGVzKGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30pIHtcbiAgICBjb25zdCBzdHJBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoKG5hbWU6IHN0cmluZykgPT4gYCR7bmFtZX09XCIke2F0dHJzW25hbWVdfVwiYCkuam9pbignICcpO1xuICAgIHJldHVybiBzdHJBdHRycy5sZW5ndGggPiAwID8gJyAnICsgc3RyQXR0cnMgOiAnJztcbiAgfVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiBEb2N0eXBlKTogYW55IHtcbiAgICByZXR1cm4gYDwhRE9DVFlQRSAke2RvY3R5cGUucm9vdFRhZ30gW1xcbiR7ZG9jdHlwZS5kdGR9XFxuXT5gO1xuICB9XG59XG5cbmNvbnN0IF92aXNpdG9yID0gbmV3IF9WaXNpdG9yKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUobm9kZXM6IE5vZGVbXSk6IHN0cmluZyB7XG4gIHJldHVybiBub2Rlcy5tYXAoKG5vZGU6IE5vZGUpOiBzdHJpbmcgPT4gbm9kZS52aXNpdChfdmlzaXRvcikpLmpvaW4oJycpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIERlY2xhcmF0aW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgY29uc3RydWN0b3IodW5lc2NhcGVkQXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIE9iamVjdC5rZXlzKHVuZXNjYXBlZEF0dHJzKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYXR0cnNba10gPSBlc2NhcGVYbWwodW5lc2NhcGVkQXR0cnNba10pO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGVjbGFyYXRpb24odGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3R5cGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3RUYWc6IHN0cmluZywgcHVibGljIGR0ZDogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERvY3R5cGUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhZyBpbXBsZW1lbnRzIE5vZGUge1xuICBwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgdW5lc2NhcGVkQXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9LFxuICAgICAgcHVibGljIGNoaWxkcmVuOiBOb2RlW10gPSBbXSkge1xuICAgIE9iamVjdC5rZXlzKHVuZXNjYXBlZEF0dHJzKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYXR0cnNba10gPSBlc2NhcGVYbWwodW5lc2NhcGVkQXR0cnNba10pO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHVuZXNjYXBlZFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gZXNjYXBlWG1sKHVuZXNjYXBlZFZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENSIGV4dGVuZHMgVGV4dCB7XG4gIGNvbnN0cnVjdG9yKHdzOiBudW1iZXIgPSAwKSB7XG4gICAgc3VwZXIoYFxcbiR7bmV3IEFycmF5KHdzICsgMSkuam9pbignICcpfWApO1xuICB9XG59XG5cbmNvbnN0IF9FU0NBUEVEX0NIQVJTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvJi9nLCAnJmFtcDsnXSxcbiAgWy9cIi9nLCAnJnF1b3Q7J10sXG4gIFsvJy9nLCAnJmFwb3M7J10sXG4gIFsvPC9nLCAnJmx0OyddLFxuICBbLz4vZywgJyZndDsnXSxcbl07XG5cbi8vIEVzY2FwZSBgX0VTQ0FQRURfQ0hBUlNgIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHRleHQgd2l0aCBlbmNvZGVkIGVudGl0aWVzXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlWG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBfRVNDQVBFRF9DSEFSUy5yZWR1Y2UoXG4gICAgICAodGV4dDogc3RyaW5nLCBlbnRyeTogW1JlZ0V4cCwgc3RyaW5nXSkgPT4gdGV4dC5yZXBsYWNlKGVudHJ5WzBdLCBlbnRyeVsxXSksIHRleHQpO1xufVxuIl19