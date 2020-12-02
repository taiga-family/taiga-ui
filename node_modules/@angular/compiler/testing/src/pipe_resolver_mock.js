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
        define("@angular/compiler/testing/src/pipe_resolver_mock", ["require", "exports", "tslib", "@angular/compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var MockPipeResolver = /** @class */ (function (_super) {
        tslib_1.__extends(MockPipeResolver, _super);
        function MockPipeResolver(refector) {
            var _this = _super.call(this, refector) || this;
            _this._pipes = new Map();
            return _this;
        }
        /**
         * Overrides the {@link Pipe} for a pipe.
         */
        MockPipeResolver.prototype.setPipe = function (type, metadata) {
            this._pipes.set(type, metadata);
        };
        /**
         * Returns the {@link Pipe} for a pipe:
         * - Set the {@link Pipe} to the overridden view when it exists or fallback to the
         * default
         * `PipeResolver`, see `setPipe`.
         */
        MockPipeResolver.prototype.resolve = function (type, throwIfNotFound) {
            if (throwIfNotFound === void 0) { throwIfNotFound = true; }
            var metadata = this._pipes.get(type);
            if (!metadata) {
                metadata = _super.prototype.resolve.call(this, type, throwIfNotFound);
            }
            return metadata;
        };
        return MockPipeResolver;
    }(compiler_1.PipeResolver));
    exports.MockPipeResolver = MockPipeResolver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZV9yZXNvbHZlcl9tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvdGVzdGluZy9zcmMvcGlwZV9yZXNvbHZlcl9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDhDQUF1RTtJQUV2RTtRQUFzQyw0Q0FBWTtRQUdoRCwwQkFBWSxRQUEwQjtZQUF0QyxZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtZQUpPLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQzs7UUFJakQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsa0NBQU8sR0FBUCxVQUFRLElBQWUsRUFBRSxRQUFtQjtZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsa0NBQU8sR0FBUCxVQUFRLElBQWUsRUFBRSxlQUFzQjtZQUF0QixnQ0FBQSxFQUFBLHNCQUFzQjtZQUM3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLFFBQVEsR0FBRyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBRSxDQUFDO2FBQ2xEO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FBQyxBQTNCRCxDQUFzQyx1QkFBWSxHQTJCakQ7SUEzQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3IsIGNvcmUsIFBpcGVSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5leHBvcnQgY2xhc3MgTW9ja1BpcGVSZXNvbHZlciBleHRlbmRzIFBpcGVSZXNvbHZlciB7XG4gIHByaXZhdGUgX3BpcGVzID0gbmV3IE1hcDxjb3JlLlR5cGUsIGNvcmUuUGlwZT4oKTtcblxuICBjb25zdHJ1Y3RvcihyZWZlY3RvcjogQ29tcGlsZVJlZmxlY3Rvcikge1xuICAgIHN1cGVyKHJlZmVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHtAbGluayBQaXBlfSBmb3IgYSBwaXBlLlxuICAgKi9cbiAgc2V0UGlwZSh0eXBlOiBjb3JlLlR5cGUsIG1ldGFkYXRhOiBjb3JlLlBpcGUpOiB2b2lkIHtcbiAgICB0aGlzLl9waXBlcy5zZXQodHlwZSwgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHtAbGluayBQaXBlfSBmb3IgYSBwaXBlOlxuICAgKiAtIFNldCB0aGUge0BsaW5rIFBpcGV9IHRvIHRoZSBvdmVycmlkZGVuIHZpZXcgd2hlbiBpdCBleGlzdHMgb3IgZmFsbGJhY2sgdG8gdGhlXG4gICAqIGRlZmF1bHRcbiAgICogYFBpcGVSZXNvbHZlcmAsIHNlZSBgc2V0UGlwZWAuXG4gICAqL1xuICByZXNvbHZlKHR5cGU6IGNvcmUuVHlwZSwgdGhyb3dJZk5vdEZvdW5kID0gdHJ1ZSk6IGNvcmUuUGlwZSB7XG4gICAgbGV0IG1ldGFkYXRhID0gdGhpcy5fcGlwZXMuZ2V0KHR5cGUpO1xuICAgIGlmICghbWV0YWRhdGEpIHtcbiAgICAgIG1ldGFkYXRhID0gc3VwZXIucmVzb2x2ZSh0eXBlLCB0aHJvd0lmTm90Rm91bmQpITtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG59XG4iXX0=