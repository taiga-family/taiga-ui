/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __extends, __metadata } from "tslib";
import { EventEmitter, Injectable, NgZone } from '@angular/core';
/**
 * A mock implementation of {@link NgZone}.
 */
var MockNgZone = /** @class */ (function (_super) {
    __extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false, shouldCoalesceEventChangeDetection: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    MockNgZone.prototype.run = function (fn) {
        return fn();
    };
    MockNgZone.prototype.runOutsideAngular = function (fn) {
        return fn();
    };
    MockNgZone.prototype.simulateZoneExit = function () {
        this.onStable.emit(null);
    };
    MockNgZone = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], MockNgZone);
    return MockNgZone;
}(NgZone));
export { MockNgZone };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfem9uZV9tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9uZ196b25lX21vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUcvRDs7R0FFRztBQUVIO0lBQWdDLDhCQUFNO0lBR3BDO1FBQUEsWUFDRSxrQkFBTSxFQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRSxrQ0FBa0MsRUFBRSxLQUFLLEVBQUMsQ0FBQyxTQUNoRjtRQUpELGNBQVEsR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBSXRELENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUksRUFBWTtRQUNkLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQWlCLEdBQWpCLFVBQWtCLEVBQVk7UUFDNUIsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBakJVLFVBQVU7UUFEdEIsVUFBVSxFQUFFOztPQUNBLFVBQVUsQ0FrQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQWxCRCxDQUFnQyxNQUFNLEdBa0JyQztTQWxCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKipcbiAqIEEgbW9jayBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgTmdab25lfS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tOZ1pvbmUgZXh0ZW5kcyBOZ1pvbmUge1xuICBvblN0YWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7ZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlLCBzaG91bGRDb2FsZXNjZUV2ZW50Q2hhbmdlRGV0ZWN0aW9uOiBmYWxzZX0pO1xuICB9XG5cbiAgcnVuKGZuOiBGdW5jdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICBydW5PdXRzaWRlQW5ndWxhcihmbjogRnVuY3Rpb24pOiBhbnkge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgc2ltdWxhdGVab25lRXhpdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uU3RhYmxlLmVtaXQobnVsbCk7XG4gIH1cbn1cbiJdfQ==