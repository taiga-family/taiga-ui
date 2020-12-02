/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { NgModuleResolver } from '@angular/compiler';
var MockNgModuleResolver = /** @class */ (function (_super) {
    __extends(MockNgModuleResolver, _super);
    function MockNgModuleResolver(reflector) {
        var _this = _super.call(this, reflector) || this;
        _this._ngModules = new Map();
        return _this;
    }
    /**
     * Overrides the {@link NgModule} for a module.
     */
    MockNgModuleResolver.prototype.setNgModule = function (type, metadata) {
        this._ngModules.set(type, metadata);
    };
    /**
     * Returns the {@link NgModule} for a module:
     * - Set the {@link NgModule} to the overridden view when it exists or fallback to the
     * default
     * `NgModuleResolver`, see `setNgModule`.
     */
    MockNgModuleResolver.prototype.resolve = function (type, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        return this._ngModules.get(type) || _super.prototype.resolve.call(this, type, throwIfNotFound);
    };
    return MockNgModuleResolver;
}(NgModuleResolver));
export { MockNgModuleResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX3Jlc29sdmVyX21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9uZ19tb2R1bGVfcmVzb2x2ZXJfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUF5QixnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTNFO0lBQTBDLHdDQUFnQjtJQUd4RCw4QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUpPLGdCQUFVLEdBQUcsSUFBSSxHQUFHLEVBQTRCLENBQUM7O0lBSXpELENBQUM7SUFFRDs7T0FFRztJQUNILDBDQUFXLEdBQVgsVUFBWSxJQUFlLEVBQUUsUUFBdUI7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHNDQUFPLEdBQVAsVUFBUSxJQUFlLEVBQUUsZUFBc0I7UUFBdEIsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxPQUFPLFlBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBRSxDQUFDO0lBQzVFLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBMEMsZ0JBQWdCLEdBdUJ6RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBjb3JlLCBOZ01vZHVsZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTmdNb2R1bGVSZXNvbHZlciBleHRlbmRzIE5nTW9kdWxlUmVzb2x2ZXIge1xuICBwcml2YXRlIF9uZ01vZHVsZXMgPSBuZXcgTWFwPGNvcmUuVHlwZSwgY29yZS5OZ01vZHVsZT4oKTtcblxuICBjb25zdHJ1Y3RvcihyZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHtcbiAgICBzdXBlcihyZWZsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUge0BsaW5rIE5nTW9kdWxlfSBmb3IgYSBtb2R1bGUuXG4gICAqL1xuICBzZXROZ01vZHVsZSh0eXBlOiBjb3JlLlR5cGUsIG1ldGFkYXRhOiBjb3JlLk5nTW9kdWxlKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2R1bGVzLnNldCh0eXBlLCBtZXRhZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIE5nTW9kdWxlfSBmb3IgYSBtb2R1bGU6XG4gICAqIC0gU2V0IHRoZSB7QGxpbmsgTmdNb2R1bGV9IHRvIHRoZSBvdmVycmlkZGVuIHZpZXcgd2hlbiBpdCBleGlzdHMgb3IgZmFsbGJhY2sgdG8gdGhlXG4gICAqIGRlZmF1bHRcbiAgICogYE5nTW9kdWxlUmVzb2x2ZXJgLCBzZWUgYHNldE5nTW9kdWxlYC5cbiAgICovXG4gIHJlc29sdmUodHlwZTogY29yZS5UeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogY29yZS5OZ01vZHVsZSB7XG4gICAgcmV0dXJuIHRoaXMuX25nTW9kdWxlcy5nZXQodHlwZSkgfHwgc3VwZXIucmVzb2x2ZSh0eXBlLCB0aHJvd0lmTm90Rm91bmQpITtcbiAgfVxufVxuIl19