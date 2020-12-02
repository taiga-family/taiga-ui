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
        define("@angular/compiler/src/i18n/serializers/serializer", ["require", "exports", "tslib", "@angular/compiler/src/i18n/i18n_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var i18n = require("@angular/compiler/src/i18n/i18n_ast");
    var Serializer = /** @class */ (function () {
        function Serializer() {
        }
        // Creates a name mapper, see `PlaceholderMapper`
        // Returning `null` means that no name mapping is used.
        Serializer.prototype.createNameMapper = function (message) {
            return null;
        };
        return Serializer;
    }());
    exports.Serializer = Serializer;
    /**
     * A simple mapper that take a function to transform an internal name to a public name
     */
    var SimplePlaceholderMapper = /** @class */ (function (_super) {
        tslib_1.__extends(SimplePlaceholderMapper, _super);
        // create a mapping from the message
        function SimplePlaceholderMapper(message, mapName) {
            var _this = _super.call(this) || this;
            _this.mapName = mapName;
            _this.internalToPublic = {};
            _this.publicToNextId = {};
            _this.publicToInternal = {};
            message.nodes.forEach(function (node) { return node.visit(_this); });
            return _this;
        }
        SimplePlaceholderMapper.prototype.toPublicName = function (internalName) {
            return this.internalToPublic.hasOwnProperty(internalName) ?
                this.internalToPublic[internalName] :
                null;
        };
        SimplePlaceholderMapper.prototype.toInternalName = function (publicName) {
            return this.publicToInternal.hasOwnProperty(publicName) ? this.publicToInternal[publicName] :
                null;
        };
        SimplePlaceholderMapper.prototype.visitText = function (text, context) {
            return null;
        };
        SimplePlaceholderMapper.prototype.visitTagPlaceholder = function (ph, context) {
            this.visitPlaceholderName(ph.startName);
            _super.prototype.visitTagPlaceholder.call(this, ph, context);
            this.visitPlaceholderName(ph.closeName);
        };
        SimplePlaceholderMapper.prototype.visitPlaceholder = function (ph, context) {
            this.visitPlaceholderName(ph.name);
        };
        SimplePlaceholderMapper.prototype.visitIcuPlaceholder = function (ph, context) {
            this.visitPlaceholderName(ph.name);
        };
        // XMB placeholders could only contains A-Z, 0-9 and _
        SimplePlaceholderMapper.prototype.visitPlaceholderName = function (internalName) {
            if (!internalName || this.internalToPublic.hasOwnProperty(internalName)) {
                return;
            }
            var publicName = this.mapName(internalName);
            if (this.publicToInternal.hasOwnProperty(publicName)) {
                // Create a new XMB when it has already been used
                var nextId = this.publicToNextId[publicName];
                this.publicToNextId[publicName] = nextId + 1;
                publicName = publicName + "_" + nextId;
            }
            else {
                this.publicToNextId[publicName] = 1;
            }
            this.internalToPublic[internalName] = publicName;
            this.publicToInternal[publicName] = internalName;
        };
        return SimplePlaceholderMapper;
    }(i18n.RecurseVisitor));
    exports.SimplePlaceholderMapper = SimplePlaceholderMapper;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsMERBQW9DO0lBRXBDO1FBQUE7UUFnQkEsQ0FBQztRQUxDLGlEQUFpRDtRQUNqRCx1REFBdUQ7UUFDdkQscUNBQWdCLEdBQWhCLFVBQWlCLE9BQXFCO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0FBQyxBQWhCRCxJQWdCQztJQWhCcUIsZ0NBQVU7SUE4QmhDOztPQUVHO0lBQ0g7UUFBNkMsbURBQW1CO1FBSzlELG9DQUFvQztRQUNwQyxpQ0FBWSxPQUFxQixFQUFVLE9BQWlDO1lBQTVFLFlBQ0UsaUJBQU8sU0FFUjtZQUgwQyxhQUFPLEdBQVAsT0FBTyxDQUEwQjtZQUxwRSxzQkFBZ0IsR0FBMEIsRUFBRSxDQUFDO1lBQzdDLG9CQUFjLEdBQTBCLEVBQUUsQ0FBQztZQUMzQyxzQkFBZ0IsR0FBMEIsRUFBRSxDQUFDO1lBS25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDOztRQUNsRCxDQUFDO1FBRUQsOENBQVksR0FBWixVQUFhLFlBQW9CO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDO1FBQ1gsQ0FBQztRQUVELGdEQUFjLEdBQWQsVUFBZSxVQUFrQjtZQUMvQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUM7UUFDakUsQ0FBQztRQUVELDJDQUFTLEdBQVQsVUFBVSxJQUFlLEVBQUUsT0FBYTtZQUN0QyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxxREFBbUIsR0FBbkIsVUFBb0IsRUFBdUIsRUFBRSxPQUFhO1lBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsaUJBQU0sbUJBQW1CLFlBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELGtEQUFnQixHQUFoQixVQUFpQixFQUFvQixFQUFFLE9BQWE7WUFDbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQscURBQW1CLEdBQW5CLFVBQW9CLEVBQXVCLEVBQUUsT0FBYTtZQUN4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxzREFBc0Q7UUFDOUMsc0RBQW9CLEdBQTVCLFVBQTZCLFlBQW9CO1lBQy9DLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDdkUsT0FBTzthQUNSO1lBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUU1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BELGlEQUFpRDtnQkFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxVQUFVLEdBQU0sVUFBVSxTQUFJLE1BQVEsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUNuRCxDQUFDO1FBQ0gsOEJBQUM7SUFBRCxDQUFDLEFBNURELENBQTZDLElBQUksQ0FBQyxjQUFjLEdBNEQvRDtJQTVEWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vaTE4bl9hc3QnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VyaWFsaXplciB7XG4gIC8vIC0gVGhlIGBwbGFjZWhvbGRlcnNgIGFuZCBgcGxhY2Vob2xkZXJUb01lc3NhZ2VgIHByb3BlcnRpZXMgYXJlIGlycmVsZXZhbnQgaW4gdGhlIGlucHV0IG1lc3NhZ2VzXG4gIC8vIC0gVGhlIGBpZGAgY29udGFpbnMgdGhlIG1lc3NhZ2UgaWQgdGhhdCB0aGUgc2VyaWFsaXplciBpcyBleHBlY3RlZCB0byB1c2VcbiAgLy8gLSBQbGFjZWhvbGRlciBuYW1lcyBhcmUgYWxyZWFkeSBtYXAgdG8gcHVibGljIG5hbWVzIHVzaW5nIHRoZSBwcm92aWRlZCBtYXBwZXJcbiAgYWJzdHJhY3Qgd3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZ3xudWxsKTogc3RyaW5nO1xuXG4gIGFic3RyYWN0IGxvYWQoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZyk6XG4gICAgICB7bG9jYWxlOiBzdHJpbmd8bnVsbCwgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119fTtcblxuICBhYnN0cmFjdCBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nO1xuXG4gIC8vIENyZWF0ZXMgYSBuYW1lIG1hcHBlciwgc2VlIGBQbGFjZWhvbGRlck1hcHBlcmBcbiAgLy8gUmV0dXJuaW5nIGBudWxsYCBtZWFucyB0aGF0IG5vIG5hbWUgbWFwcGluZyBpcyB1c2VkLlxuICBjcmVhdGVOYW1lTWFwcGVyKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IFBsYWNlaG9sZGVyTWFwcGVyfG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQSBgUGxhY2Vob2xkZXJNYXBwZXJgIGNvbnZlcnRzIHBsYWNlaG9sZGVyIG5hbWVzIGZyb20gaW50ZXJuYWwgdG8gc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbiBhbmRcbiAqIGJhY2suXG4gKlxuICogSXQgc2hvdWxkIGJlIHVzZWQgZm9yIHNlcmlhbGl6YXRpb24gZm9ybWF0IHRoYXQgcHV0IGNvbnN0cmFpbnRzIG9uIHRoZSBwbGFjZWhvbGRlciBuYW1lcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGFjZWhvbGRlck1hcHBlciB7XG4gIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsO1xuXG4gIHRvSW50ZXJuYWxOYW1lKHB1YmxpY05hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIG1hcHBlciB0aGF0IHRha2UgYSBmdW5jdGlvbiB0byB0cmFuc2Zvcm0gYW4gaW50ZXJuYWwgbmFtZSB0byBhIHB1YmxpYyBuYW1lXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVQbGFjZWhvbGRlck1hcHBlciBleHRlbmRzIGkxOG4uUmVjdXJzZVZpc2l0b3IgaW1wbGVtZW50cyBQbGFjZWhvbGRlck1hcHBlciB7XG4gIHByaXZhdGUgaW50ZXJuYWxUb1B1YmxpYzoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gIHByaXZhdGUgcHVibGljVG9OZXh0SWQ6IHtbazogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICBwcml2YXRlIHB1YmxpY1RvSW50ZXJuYWw6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIC8vIGNyZWF0ZSBhIG1hcHBpbmcgZnJvbSB0aGUgbWVzc2FnZVxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBpMThuLk1lc3NhZ2UsIHByaXZhdGUgbWFwTmFtZTogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICBtZXNzYWdlLm5vZGVzLmZvckVhY2gobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkgP1xuICAgICAgICB0aGlzLmludGVybmFsVG9QdWJsaWNbaW50ZXJuYWxOYW1lXSA6XG4gICAgICAgIG51bGw7XG4gIH1cblxuICB0b0ludGVybmFsTmFtZShwdWJsaWNOYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSA/IHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguc3RhcnROYW1lKTtcbiAgICBzdXBlci52aXNpdFRhZ1BsYWNlaG9sZGVyKHBoLCBjb250ZXh0KTtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLmNsb3NlTmFtZSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5uYW1lKTtcbiAgfVxuXG4gIC8vIFhNQiBwbGFjZWhvbGRlcnMgY291bGQgb25seSBjb250YWlucyBBLVosIDAtOSBhbmQgX1xuICBwcml2YXRlIHZpc2l0UGxhY2Vob2xkZXJOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpbnRlcm5hbE5hbWUgfHwgdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHVibGljTmFtZSA9IHRoaXMubWFwTmFtZShpbnRlcm5hbE5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IFhNQiB3aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXTtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSBuZXh0SWQgKyAxO1xuICAgICAgcHVibGljTmFtZSA9IGAke3B1YmxpY05hbWV9XyR7bmV4dElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSAxO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxUb1B1YmxpY1tpbnRlcm5hbE5hbWVdID0gcHVibGljTmFtZTtcbiAgICB0aGlzLnB1YmxpY1RvSW50ZXJuYWxbcHVibGljTmFtZV0gPSBpbnRlcm5hbE5hbWU7XG4gIH1cbn1cbiJdfQ==