/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import './ng_dev_mode';
/**
 * THIS FILE CONTAINS CODE WHICH SHOULD BE TREE SHAKEN AND NEVER CALLED FROM PRODUCTION CODE!!!
 */
/**
 * Creates an `Array` construction with a given name. This is useful when
 * looking for memory consumption to see what time of array it is.
 *
 *
 * @param name Name to give to the constructor
 * @returns A subclass of `Array` if possible. This can only be done in
 *          environments which support `class` construct.
 */
export function createNamedArrayType(name) {
    // This should never be called in prod mode, so let's verify that is the case.
    if (ngDevMode) {
        try {
            // We need to do it this way so that TypeScript does not down-level the below code.
            const FunctionConstructor = createNamedArrayType.constructor;
            return (new FunctionConstructor('Array', `return class ${name} extends Array{}`))(Array);
        }
        catch (e) {
            // If it does not work just give up and fall back to regular Array.
            return Array;
        }
    }
    else {
        throw new Error('Looks like we are in \'prod mode\', but we are creating a named Array type, which is wrong! Check your code');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWRfYXJyYXlfdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3V0aWwvbmFtZWRfYXJyYXlfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLGVBQWUsQ0FBQztBQUV2Qjs7R0FFRztBQUdIOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUFDLElBQVk7SUFDL0MsOEVBQThFO0lBQzlFLElBQUksU0FBUyxFQUFFO1FBQ2IsSUFBSTtZQUNGLG1GQUFtRjtZQUNuRixNQUFNLG1CQUFtQixHQUFRLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztZQUNsRSxPQUFPLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixtRUFBbUU7WUFDbkUsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUNYLDZHQUE2RyxDQUFDLENBQUM7S0FDcEg7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAnLi9uZ19kZXZfbW9kZSc7XG5cbi8qKlxuICogVEhJUyBGSUxFIENPTlRBSU5TIENPREUgV0hJQ0ggU0hPVUxEIEJFIFRSRUUgU0hBS0VOIEFORCBORVZFUiBDQUxMRUQgRlJPTSBQUk9EVUNUSU9OIENPREUhISFcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBgQXJyYXlgIGNvbnN0cnVjdGlvbiB3aXRoIGEgZ2l2ZW4gbmFtZS4gVGhpcyBpcyB1c2VmdWwgd2hlblxuICogbG9va2luZyBmb3IgbWVtb3J5IGNvbnN1bXB0aW9uIHRvIHNlZSB3aGF0IHRpbWUgb2YgYXJyYXkgaXQgaXMuXG4gKlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgdG8gZ2l2ZSB0byB0aGUgY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIEEgc3ViY2xhc3Mgb2YgYEFycmF5YCBpZiBwb3NzaWJsZS4gVGhpcyBjYW4gb25seSBiZSBkb25lIGluXG4gKiAgICAgICAgICBlbnZpcm9ubWVudHMgd2hpY2ggc3VwcG9ydCBgY2xhc3NgIGNvbnN0cnVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKG5hbWU6IHN0cmluZyk6IHR5cGVvZiBBcnJheSB7XG4gIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGJlIGNhbGxlZCBpbiBwcm9kIG1vZGUsIHNvIGxldCdzIHZlcmlmeSB0aGF0IGlzIHRoZSBjYXNlLlxuICBpZiAobmdEZXZNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gZG8gaXQgdGhpcyB3YXkgc28gdGhhdCBUeXBlU2NyaXB0IGRvZXMgbm90IGRvd24tbGV2ZWwgdGhlIGJlbG93IGNvZGUuXG4gICAgICBjb25zdCBGdW5jdGlvbkNvbnN0cnVjdG9yOiBhbnkgPSBjcmVhdGVOYW1lZEFycmF5VHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJldHVybiAobmV3IEZ1bmN0aW9uQ29uc3RydWN0b3IoJ0FycmF5JywgYHJldHVybiBjbGFzcyAke25hbWV9IGV4dGVuZHMgQXJyYXl7fWApKShBcnJheSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgaXQgZG9lcyBub3Qgd29yayBqdXN0IGdpdmUgdXAgYW5kIGZhbGwgYmFjayB0byByZWd1bGFyIEFycmF5LlxuICAgICAgcmV0dXJuIEFycmF5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdMb29rcyBsaWtlIHdlIGFyZSBpbiBcXCdwcm9kIG1vZGVcXCcsIGJ1dCB3ZSBhcmUgY3JlYXRpbmcgYSBuYW1lZCBBcnJheSB0eXBlLCB3aGljaCBpcyB3cm9uZyEgQ2hlY2sgeW91ciBjb2RlJyk7XG4gIH1cbn0iXX0=