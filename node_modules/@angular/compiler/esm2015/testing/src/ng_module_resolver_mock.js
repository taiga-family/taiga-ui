/**
 * @fileoverview added by tsickle
 * Generated from: packages/compiler/testing/src/ng_module_resolver_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModuleResolver } from '@angular/compiler';
export class MockNgModuleResolver extends NgModuleResolver {
    /**
     * @param {?} reflector
     */
    constructor(reflector) {
        super(reflector);
        this._ngModules = new Map();
    }
    /**
     * Overrides the {\@link NgModule} for a module.
     * @param {?} type
     * @param {?} metadata
     * @return {?}
     */
    setNgModule(type, metadata) {
        this._ngModules.set(type, metadata);
    }
    /**
     * Returns the {\@link NgModule} for a module:
     * - Set the {\@link NgModule} to the overridden view when it exists or fallback to the
     * default
     * `NgModuleResolver`, see `setNgModule`.
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */
    resolve(type, throwIfNotFound = true) {
        return this._ngModules.get(type) || (/** @type {?} */ (super.resolve(type, throwIfNotFound)));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockNgModuleResolver.prototype._ngModules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX3Jlc29sdmVyX21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9uZ19tb2R1bGVfcmVzb2x2ZXJfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQXlCLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFM0UsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjs7OztJQUd4RCxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUhYLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztJQUl6RCxDQUFDOzs7Ozs7O0lBS0QsV0FBVyxDQUFDLElBQWUsRUFBRSxRQUF1QjtRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7OztJQVFELE9BQU8sQ0FBQyxJQUFlLEVBQUUsZUFBZSxHQUFHLElBQUk7UUFDN0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsRUFBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRjs7Ozs7O0lBdEJDLDBDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBjb3JlLCBOZ01vZHVsZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTmdNb2R1bGVSZXNvbHZlciBleHRlbmRzIE5nTW9kdWxlUmVzb2x2ZXIge1xuICBwcml2YXRlIF9uZ01vZHVsZXMgPSBuZXcgTWFwPGNvcmUuVHlwZSwgY29yZS5OZ01vZHVsZT4oKTtcblxuICBjb25zdHJ1Y3RvcihyZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHtcbiAgICBzdXBlcihyZWZsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUge0BsaW5rIE5nTW9kdWxlfSBmb3IgYSBtb2R1bGUuXG4gICAqL1xuICBzZXROZ01vZHVsZSh0eXBlOiBjb3JlLlR5cGUsIG1ldGFkYXRhOiBjb3JlLk5nTW9kdWxlKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2R1bGVzLnNldCh0eXBlLCBtZXRhZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIE5nTW9kdWxlfSBmb3IgYSBtb2R1bGU6XG4gICAqIC0gU2V0IHRoZSB7QGxpbmsgTmdNb2R1bGV9IHRvIHRoZSBvdmVycmlkZGVuIHZpZXcgd2hlbiBpdCBleGlzdHMgb3IgZmFsbGJhY2sgdG8gdGhlXG4gICAqIGRlZmF1bHRcbiAgICogYE5nTW9kdWxlUmVzb2x2ZXJgLCBzZWUgYHNldE5nTW9kdWxlYC5cbiAgICovXG4gIHJlc29sdmUodHlwZTogY29yZS5UeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogY29yZS5OZ01vZHVsZSB7XG4gICAgcmV0dXJuIHRoaXMuX25nTW9kdWxlcy5nZXQodHlwZSkgfHwgc3VwZXIucmVzb2x2ZSh0eXBlLCB0aHJvd0lmTm90Rm91bmQpITtcbiAgfVxufVxuIl19