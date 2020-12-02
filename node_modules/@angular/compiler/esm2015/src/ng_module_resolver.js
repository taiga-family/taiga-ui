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
export class NgModuleResolver {
    constructor(_reflector) {
        this._reflector = _reflector;
    }
    isNgModule(type) {
        return this._reflector.annotations(type).some(createNgModule.isTypeOf);
    }
    resolve(type, throwIfNotFound = true) {
        const ngModuleMeta = findLast(this._reflector.annotations(type), createNgModule.isTypeOf);
        if (ngModuleMeta) {
            return ngModuleMeta;
        }
        else {
            if (throwIfNotFound) {
                throw new Error(`No NgModule metadata found for '${stringify(type)}'.`);
            }
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL25nX21vZHVsZV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsY0FBYyxFQUFpQixNQUFNLFFBQVEsQ0FBQztBQUN0RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUdqQzs7R0FFRztBQUNILE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsVUFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFBRyxDQUFDO0lBRXBELFVBQVUsQ0FBQyxJQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVUsRUFBRSxlQUFlLEdBQUcsSUFBSTtRQUN4QyxNQUFNLFlBQVksR0FDZCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6RTtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQge2NyZWF0ZU5nTW9kdWxlLCBOZ01vZHVsZSwgVHlwZX0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7ZmluZExhc3R9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuL3V0aWwnO1xuXG5cbi8qKlxuICogUmVzb2x2ZXMgdHlwZXMgdG8ge0BsaW5rIE5nTW9kdWxlfS5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nTW9kdWxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHt9XG5cbiAgaXNOZ01vZHVsZSh0eXBlOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmbGVjdG9yLmFubm90YXRpb25zKHR5cGUpLnNvbWUoY3JlYXRlTmdNb2R1bGUuaXNUeXBlT2YpO1xuICB9XG5cbiAgcmVzb2x2ZSh0eXBlOiBUeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogTmdNb2R1bGV8bnVsbCB7XG4gICAgY29uc3QgbmdNb2R1bGVNZXRhOiBOZ01vZHVsZSA9XG4gICAgICAgIGZpbmRMYXN0KHRoaXMuX3JlZmxlY3Rvci5hbm5vdGF0aW9ucyh0eXBlKSwgY3JlYXRlTmdNb2R1bGUuaXNUeXBlT2YpO1xuXG4gICAgaWYgKG5nTW9kdWxlTWV0YSkge1xuICAgICAgcmV0dXJuIG5nTW9kdWxlTWV0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRocm93SWZOb3RGb3VuZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIE5nTW9kdWxlIG1ldGFkYXRhIGZvdW5kIGZvciAnJHtzdHJpbmdpZnkodHlwZSl9Jy5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19