/**
 * @fileoverview added by tsickle
 * Generated from: packages/compiler/testing/src/directive_resolver_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DirectiveResolver } from '@angular/compiler';
/**
 * An implementation of {\@link DirectiveResolver} that allows overriding
 * various properties of directives.
 */
export class MockDirectiveResolver extends DirectiveResolver {
    /**
     * @param {?} reflector
     */
    constructor(reflector) {
        super(reflector);
        this._directives = new Map();
    }
    /**
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */
    resolve(type, throwIfNotFound = true) {
        return this._directives.get(type) || super.resolve(type, throwIfNotFound);
    }
    /**
     * Overrides the {\@link core.Directive} for a directive.
     * @param {?} type
     * @param {?} metadata
     * @return {?}
     */
    setDirective(type, metadata) {
        this._directives.set(type, metadata);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockDirectiveResolver.prototype._directives;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3Jlc29sdmVyX21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9kaXJlY3RpdmVfcmVzb2x2ZXJfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQXlCLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTTVFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7Ozs7SUFHMUQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFIWCxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0lBSTNELENBQUM7Ozs7OztJQUtELE9BQU8sQ0FBQyxJQUFlLEVBQUUsZUFBZSxHQUFHLElBQUk7UUFDN0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7O0lBS0QsWUFBWSxDQUFDLElBQWUsRUFBRSxRQUF3QjtRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGOzs7Ozs7SUFuQkMsNENBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBjb3JlLCBEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBEaXJlY3RpdmVSZXNvbHZlcn0gdGhhdCBhbGxvd3Mgb3ZlcnJpZGluZ1xuICogdmFyaW91cyBwcm9wZXJ0aWVzIG9mIGRpcmVjdGl2ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRGlyZWN0aXZlUmVzb2x2ZXIgZXh0ZW5kcyBEaXJlY3RpdmVSZXNvbHZlciB7XG4gIHByaXZhdGUgX2RpcmVjdGl2ZXMgPSBuZXcgTWFwPGNvcmUuVHlwZSwgY29yZS5EaXJlY3RpdmU+KCk7XG5cbiAgY29uc3RydWN0b3IocmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yKSB7XG4gICAgc3VwZXIocmVmbGVjdG9yKTtcbiAgfVxuXG4gIHJlc29sdmUodHlwZTogY29yZS5UeXBlKTogY29yZS5EaXJlY3RpdmU7XG4gIHJlc29sdmUodHlwZTogY29yZS5UeXBlLCB0aHJvd0lmTm90Rm91bmQ6IHRydWUpOiBjb3JlLkRpcmVjdGl2ZTtcbiAgcmVzb2x2ZSh0eXBlOiBjb3JlLlR5cGUsIHRocm93SWZOb3RGb3VuZDogYm9vbGVhbik6IGNvcmUuRGlyZWN0aXZlfG51bGw7XG4gIHJlc29sdmUodHlwZTogY29yZS5UeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogY29yZS5EaXJlY3RpdmV8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGl2ZXMuZ2V0KHR5cGUpIHx8IHN1cGVyLnJlc29sdmUodHlwZSwgdGhyb3dJZk5vdEZvdW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHtAbGluayBjb3JlLkRpcmVjdGl2ZX0gZm9yIGEgZGlyZWN0aXZlLlxuICAgKi9cbiAgc2V0RGlyZWN0aXZlKHR5cGU6IGNvcmUuVHlwZSwgbWV0YWRhdGE6IGNvcmUuRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgdGhpcy5fZGlyZWN0aXZlcy5zZXQodHlwZSwgbWV0YWRhdGEpO1xuICB9XG59XG4iXX0=