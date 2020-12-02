/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { serializeDocument } from './domino_adapter';
/**
 * Representation of the current platform state.
 *
 * @publicApi
 */
var PlatformState = /** @class */ (function () {
    function PlatformState(_doc) {
        this._doc = _doc;
    }
    /**
     * Renders the current state of the platform to string.
     */
    PlatformState.prototype.renderToString = function () {
        return serializeDocument(this._doc);
    };
    /**
     * Returns the current DOM state.
     */
    PlatformState.prototype.getDocument = function () {
        return this._doc;
    };
    PlatformState = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], PlatformState);
    return PlatformState;
}());
export { PlatformState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL3BsYXRmb3JtX3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFbkQ7Ozs7R0FJRztBQUVIO0lBQ0UsdUJBQXNDLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUcsQ0FBQztJQUVuRDs7T0FFRztJQUNILHNDQUFjLEdBQWQ7UUFDRSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFmVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTtRQUVFLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztPQURsQixhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtzZXJpYWxpemVEb2N1bWVudH0gZnJvbSAnLi9kb21pbm9fYWRhcHRlcic7XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3RhdGUuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwbGF0Zm9ybSB0byBzdHJpbmcuXG4gICAqL1xuICByZW5kZXJUb1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBzZXJpYWxpemVEb2N1bWVudCh0aGlzLl9kb2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgRE9NIHN0YXRlLlxuICAgKi9cbiAgZ2V0RG9jdW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jO1xuICB9XG59XG4iXX0=