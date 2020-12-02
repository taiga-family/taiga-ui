/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createNgModule } from './core';
import { findLast } from './directive_resolver';
import { stringify } from './util';
/**
 * Resolves types to {@link NgModule}.
 */
var NgModuleResolver = /** @class */ (function () {
    function NgModuleResolver(_reflector) {
        this._reflector = _reflector;
    }
    NgModuleResolver.prototype.isNgModule = function (type) {
        return this._reflector.annotations(type).some(createNgModule.isTypeOf);
    };
    NgModuleResolver.prototype.resolve = function (type, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        var ngModuleMeta = findLast(this._reflector.annotations(type), createNgModule.isTypeOf);
        if (ngModuleMeta) {
            return ngModuleMeta;
        }
        else {
            if (throwIfNotFound) {
                throw new Error("No NgModule metadata found for '" + stringify(type) + "'.");
            }
            return null;
        }
    };
    return NgModuleResolver;
}());
export { NgModuleResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL25nX21vZHVsZV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsY0FBYyxFQUFpQixNQUFNLFFBQVEsQ0FBQztBQUN0RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUdqQzs7R0FFRztBQUNIO0lBQ0UsMEJBQW9CLFVBQTRCO1FBQTVCLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBQUcsQ0FBQztJQUVwRCxxQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFVLEVBQUUsZUFBc0I7UUFBdEIsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDeEMsSUFBTSxZQUFZLEdBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RSxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLFlBQVksQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBSSxDQUFDLENBQUM7YUFDekU7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlTmdNb2R1bGUsIE5nTW9kdWxlLCBUeXBlfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtmaW5kTGFzdH0gZnJvbSAnLi9kaXJlY3RpdmVfcmVzb2x2ZXInO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4vdXRpbCc7XG5cblxuLyoqXG4gKiBSZXNvbHZlcyB0eXBlcyB0byB7QGxpbmsgTmdNb2R1bGV9LlxuICovXG5leHBvcnQgY2xhc3MgTmdNb2R1bGVSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvcikge31cblxuICBpc05nTW9kdWxlKHR5cGU6IGFueSkge1xuICAgIHJldHVybiB0aGlzLl9yZWZsZWN0b3IuYW5ub3RhdGlvbnModHlwZSkuc29tZShjcmVhdGVOZ01vZHVsZS5pc1R5cGVPZik7XG4gIH1cblxuICByZXNvbHZlKHR5cGU6IFR5cGUsIHRocm93SWZOb3RGb3VuZCA9IHRydWUpOiBOZ01vZHVsZXxudWxsIHtcbiAgICBjb25zdCBuZ01vZHVsZU1ldGE6IE5nTW9kdWxlID1cbiAgICAgICAgZmluZExhc3QodGhpcy5fcmVmbGVjdG9yLmFubm90YXRpb25zKHR5cGUpLCBjcmVhdGVOZ01vZHVsZS5pc1R5cGVPZik7XG5cbiAgICBpZiAobmdNb2R1bGVNZXRhKSB7XG4gICAgICByZXR1cm4gbmdNb2R1bGVNZXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhyb3dJZk5vdEZvdW5kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gTmdNb2R1bGUgbWV0YWRhdGEgZm91bmQgZm9yICcke3N0cmluZ2lmeSh0eXBlKX0nLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=