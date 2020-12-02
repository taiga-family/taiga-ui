import { __extends } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DirectiveResolver } from '@angular/compiler';
/**
 * An implementation of {@link DirectiveResolver} that allows overriding
 * various properties of directives.
 */
var MockDirectiveResolver = /** @class */ (function (_super) {
    __extends(MockDirectiveResolver, _super);
    function MockDirectiveResolver(reflector) {
        var _this = _super.call(this, reflector) || this;
        _this._directives = new Map();
        return _this;
    }
    MockDirectiveResolver.prototype.resolve = function (type, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        return this._directives.get(type) || _super.prototype.resolve.call(this, type, throwIfNotFound);
    };
    /**
     * Overrides the {@link core.Directive} for a directive.
     */
    MockDirectiveResolver.prototype.setDirective = function (type, metadata) {
        this._directives.set(type, metadata);
    };
    return MockDirectiveResolver;
}(DirectiveResolver));
export { MockDirectiveResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3Jlc29sdmVyX21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9kaXJlY3RpdmVfcmVzb2x2ZXJfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUF5QixpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTVFOzs7R0FHRztBQUNIO0lBQTJDLHlDQUFpQjtJQUcxRCwrQkFBWSxTQUEyQjtRQUF2QyxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUpPLGlCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7O0lBSTNELENBQUM7SUFLRCx1Q0FBTyxHQUFQLFVBQVEsSUFBZSxFQUFFLGVBQXNCO1FBQXRCLGdDQUFBLEVBQUEsc0JBQXNCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU0sT0FBTyxZQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCw0Q0FBWSxHQUFaLFVBQWEsSUFBZSxFQUFFLFFBQXdCO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBcEJELENBQTJDLGlCQUFpQixHQW9CM0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3IsIGNvcmUsIERpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIERpcmVjdGl2ZVJlc29sdmVyfSB0aGF0IGFsbG93cyBvdmVycmlkaW5nXG4gKiB2YXJpb3VzIHByb3BlcnRpZXMgb2YgZGlyZWN0aXZlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tEaXJlY3RpdmVSZXNvbHZlciBleHRlbmRzIERpcmVjdGl2ZVJlc29sdmVyIHtcbiAgcHJpdmF0ZSBfZGlyZWN0aXZlcyA9IG5ldyBNYXA8Y29yZS5UeXBlLCBjb3JlLkRpcmVjdGl2ZT4oKTtcblxuICBjb25zdHJ1Y3RvcihyZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHtcbiAgICBzdXBlcihyZWZsZWN0b3IpO1xuICB9XG5cbiAgcmVzb2x2ZSh0eXBlOiBjb3JlLlR5cGUpOiBjb3JlLkRpcmVjdGl2ZTtcbiAgcmVzb2x2ZSh0eXBlOiBjb3JlLlR5cGUsIHRocm93SWZOb3RGb3VuZDogdHJ1ZSk6IGNvcmUuRGlyZWN0aXZlO1xuICByZXNvbHZlKHR5cGU6IGNvcmUuVHlwZSwgdGhyb3dJZk5vdEZvdW5kOiBib29sZWFuKTogY29yZS5EaXJlY3RpdmV8bnVsbDtcbiAgcmVzb2x2ZSh0eXBlOiBjb3JlLlR5cGUsIHRocm93SWZOb3RGb3VuZCA9IHRydWUpOiBjb3JlLkRpcmVjdGl2ZXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aXZlcy5nZXQodHlwZSkgfHwgc3VwZXIucmVzb2x2ZSh0eXBlLCB0aHJvd0lmTm90Rm91bmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUge0BsaW5rIGNvcmUuRGlyZWN0aXZlfSBmb3IgYSBkaXJlY3RpdmUuXG4gICAqL1xuICBzZXREaXJlY3RpdmUodHlwZTogY29yZS5UeXBlLCBtZXRhZGF0YTogY29yZS5EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXJlY3RpdmVzLnNldCh0eXBlLCBtZXRhZGF0YSk7XG4gIH1cbn1cbiJdfQ==