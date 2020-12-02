/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { formatI18nPlaceholderName } from './util';
var IcuSerializerVisitor = /** @class */ (function () {
    function IcuSerializerVisitor() {
    }
    IcuSerializerVisitor.prototype.visitText = function (text) {
        return text.value;
    };
    IcuSerializerVisitor.prototype.visitContainer = function (container) {
        var _this = this;
        return container.children.map(function (child) { return child.visit(_this); }).join('');
    };
    IcuSerializerVisitor.prototype.visitIcu = function (icu) {
        var _this = this;
        var strCases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        var result = "{" + icu.expressionPlaceholder + ", " + icu.type + ", " + strCases.join(' ') + "}";
        return result;
    };
    IcuSerializerVisitor.prototype.visitTagPlaceholder = function (ph) {
        var _this = this;
        return ph.isVoid ?
            this.formatPh(ph.startName) :
            "" + this.formatPh(ph.startName) + ph.children.map(function (child) { return child.visit(_this); }).join('') + this.formatPh(ph.closeName);
    };
    IcuSerializerVisitor.prototype.visitPlaceholder = function (ph) {
        return this.formatPh(ph.name);
    };
    IcuSerializerVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
        return this.formatPh(ph.name);
    };
    IcuSerializerVisitor.prototype.formatPh = function (value) {
        return "{" + formatI18nPlaceholderName(value, /* useCamelCase */ false) + "}";
    };
    return IcuSerializerVisitor;
}());
var serializer = new IcuSerializerVisitor();
export function serializeIcuNode(icu) {
    return icu.visit(serializer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWN1X3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy92aWV3L2kxOG4vaWN1X3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWpEO0lBQUE7SUFrQ0EsQ0FBQztJQWpDQyx3Q0FBUyxHQUFULFVBQVUsSUFBZTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxTQUF5QjtRQUF4QyxpQkFFQztRQURDLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsR0FBYTtRQUF0QixpQkFLQztRQUpDLElBQU0sUUFBUSxHQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQVMsSUFBSyxPQUFHLENBQUMsVUFBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBRyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7UUFDcEYsSUFBTSxNQUFNLEdBQUcsTUFBSSxHQUFHLENBQUMscUJBQXFCLFVBQUssR0FBRyxDQUFDLElBQUksVUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7UUFDcEYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixFQUF1QjtRQUEzQyxpQkFLQztRQUpDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FDakYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixFQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrREFBbUIsR0FBbkIsVUFBb0IsRUFBdUIsRUFBRSxPQUFhO1FBQ3hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLHVDQUFRLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsT0FBTyxNQUFJLHlCQUF5QixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUFDO0lBQzNFLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFFRCxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7QUFDOUMsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQWE7SUFDNUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuX2FzdCc7XG5cbmltcG9ydCB7Zm9ybWF0STE4blBsYWNlaG9sZGVyTmFtZX0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgSWN1U2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIpOiBhbnkge1xuICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UpOiBhbnkge1xuICAgIGNvbnN0IHN0ckNhc2VzID1cbiAgICAgICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoKGs6IHN0cmluZykgPT4gYCR7a30geyR7aWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpfX1gKTtcbiAgICBjb25zdCByZXN1bHQgPSBgeyR7aWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcn0sICR7aWN1LnR5cGV9LCAke3N0ckNhc2VzLmpvaW4oJyAnKX19YDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlcik6IGFueSB7XG4gICAgcmV0dXJuIHBoLmlzVm9pZCA/XG4gICAgICAgIHRoaXMuZm9ybWF0UGgocGguc3RhcnROYW1lKSA6XG4gICAgICAgIGAke3RoaXMuZm9ybWF0UGgocGguc3RhcnROYW1lKX0ke3BoLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbignJyl9JHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0UGgocGguY2xvc2VOYW1lKX1gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0UGgocGgubmFtZSk7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRQaChwaC5uYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0UGgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGB7JHtmb3JtYXRJMThuUGxhY2Vob2xkZXJOYW1lKHZhbHVlLCAvKiB1c2VDYW1lbENhc2UgKi8gZmFsc2UpfX1gO1xuICB9XG59XG5cbmNvbnN0IHNlcmlhbGl6ZXIgPSBuZXcgSWN1U2VyaWFsaXplclZpc2l0b3IoKTtcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJY3VOb2RlKGljdTogaTE4bi5JY3UpOiBzdHJpbmcge1xuICByZXR1cm4gaWN1LnZpc2l0KHNlcmlhbGl6ZXIpO1xufVxuIl19