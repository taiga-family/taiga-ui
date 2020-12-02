/**
 * @fileoverview added by tsickle
 * Generated from: packages/compiler/testing/src/pipe_resolver_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PipeResolver } from '@angular/compiler';
export class MockPipeResolver extends PipeResolver {
    /**
     * @param {?} refector
     */
    constructor(refector) {
        super(refector);
        this._pipes = new Map();
    }
    /**
     * Overrides the {\@link Pipe} for a pipe.
     * @param {?} type
     * @param {?} metadata
     * @return {?}
     */
    setPipe(type, metadata) {
        this._pipes.set(type, metadata);
    }
    /**
     * Returns the {\@link Pipe} for a pipe:
     * - Set the {\@link Pipe} to the overridden view when it exists or fallback to the
     * default
     * `PipeResolver`, see `setPipe`.
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */
    resolve(type, throwIfNotFound = true) {
        /** @type {?} */
        let metadata = this._pipes.get(type);
        if (!metadata) {
            metadata = (/** @type {?} */ (super.resolve(type, throwIfNotFound)));
        }
        return metadata;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockPipeResolver.prototype._pipes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZV9yZXNvbHZlcl9tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvdGVzdGluZy9zcmMvcGlwZV9yZXNvbHZlcl9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBeUIsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFdkUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7Ozs7SUFHaEQsWUFBWSxRQUEwQjtRQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIVixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFJakQsQ0FBQzs7Ozs7OztJQUtELE9BQU8sQ0FBQyxJQUFlLEVBQUUsUUFBbUI7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7SUFRRCxPQUFPLENBQUMsSUFBZSxFQUFFLGVBQWUsR0FBRyxJQUFJOztZQUN6QyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEVBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjs7Ozs7O0lBMUJDLGtDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBjb3JlLCBQaXBlUmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuZXhwb3J0IGNsYXNzIE1vY2tQaXBlUmVzb2x2ZXIgZXh0ZW5kcyBQaXBlUmVzb2x2ZXIge1xuICBwcml2YXRlIF9waXBlcyA9IG5ldyBNYXA8Y29yZS5UeXBlLCBjb3JlLlBpcGU+KCk7XG5cbiAgY29uc3RydWN0b3IocmVmZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHtcbiAgICBzdXBlcihyZWZlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSB7QGxpbmsgUGlwZX0gZm9yIGEgcGlwZS5cbiAgICovXG4gIHNldFBpcGUodHlwZTogY29yZS5UeXBlLCBtZXRhZGF0YTogY29yZS5QaXBlKTogdm9pZCB7XG4gICAgdGhpcy5fcGlwZXMuc2V0KHR5cGUsIG1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB7QGxpbmsgUGlwZX0gZm9yIGEgcGlwZTpcbiAgICogLSBTZXQgdGhlIHtAbGluayBQaXBlfSB0byB0aGUgb3ZlcnJpZGRlbiB2aWV3IHdoZW4gaXQgZXhpc3RzIG9yIGZhbGxiYWNrIHRvIHRoZVxuICAgKiBkZWZhdWx0XG4gICAqIGBQaXBlUmVzb2x2ZXJgLCBzZWUgYHNldFBpcGVgLlxuICAgKi9cbiAgcmVzb2x2ZSh0eXBlOiBjb3JlLlR5cGUsIHRocm93SWZOb3RGb3VuZCA9IHRydWUpOiBjb3JlLlBpcGUge1xuICAgIGxldCBtZXRhZGF0YSA9IHRoaXMuX3BpcGVzLmdldCh0eXBlKTtcbiAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICBtZXRhZGF0YSA9IHN1cGVyLnJlc29sdmUodHlwZSwgdGhyb3dJZk5vdEZvdW5kKSE7XG4gICAgfVxuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfVxufVxuIl19