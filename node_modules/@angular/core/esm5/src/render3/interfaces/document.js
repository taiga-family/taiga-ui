/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Most of the use of `document` in Angular is from within the DI system so it is possible to simply
 * inject the `DOCUMENT` token and are done.
 *
 * Ivy is special because it does not rely upon the DI and must get hold of the document some other
 * way.
 *
 * The solution is to define `getDocument()` and `setDocument()` top-level functions for ivy.
 * Wherever ivy needs the global document, it calls `getDocument()` instead.
 *
 * When running ivy outside of a browser environment, it is necessary to call `setDocument()` to
 * tell ivy what the global `document` is.
 *
 * Angular does this for us in each of the standard platforms (`Browser`, `Server`, and `WebWorker`)
 * by calling `setDocument()` when providing the `DOCUMENT` token.
 */
var DOCUMENT = undefined;
/**
 * Tell ivy what the `document` is for this platform.
 *
 * It is only necessary to call this if the current platform is not a browser.
 *
 * @param document The object representing the global `document` in this environment.
 */
export function setDocument(document) {
    DOCUMENT = document;
}
/**
 * Access the object that represents the `document` for this platform.
 *
 * Ivy calls this whenever it needs to access the `document` object.
 * For example to create the renderer or to do sanitization.
 */
export function getDocument() {
    if (DOCUMENT !== undefined) {
        return DOCUMENT;
    }
    else if (typeof document !== 'undefined') {
        return document;
    }
    // No "document" can be found. This should only happen if we are running ivy outside Angular and
    // the current platform is not a browser. Since this is not a supported scenario at the moment
    // this should not happen in Angular apps.
    // Once we support running ivy outside of Angular we will need to publish `setDocument()` as a
    // public API. Meanwhile we just return `undefined` and let the application fail.
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ludGVyZmFjZXMvZG9jdW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsSUFBSSxRQUFRLEdBQXVCLFNBQVMsQ0FBQztBQUU3Qzs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLFFBQTRCO0lBQ3RELFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDdEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFdBQVc7SUFDekIsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLE9BQU8sUUFBUSxDQUFDO0tBQ2pCO1NBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDMUMsT0FBTyxRQUFRLENBQUM7S0FDakI7SUFDRCxnR0FBZ0c7SUFDaEcsOEZBQThGO0lBQzlGLDBDQUEwQztJQUMxQyw4RkFBOEY7SUFDOUYsaUZBQWlGO0lBQ2pGLE9BQU8sU0FBVSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogTW9zdCBvZiB0aGUgdXNlIG9mIGBkb2N1bWVudGAgaW4gQW5ndWxhciBpcyBmcm9tIHdpdGhpbiB0aGUgREkgc3lzdGVtIHNvIGl0IGlzIHBvc3NpYmxlIHRvIHNpbXBseVxuICogaW5qZWN0IHRoZSBgRE9DVU1FTlRgIHRva2VuIGFuZCBhcmUgZG9uZS5cbiAqXG4gKiBJdnkgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGRvZXMgbm90IHJlbHkgdXBvbiB0aGUgREkgYW5kIG11c3QgZ2V0IGhvbGQgb2YgdGhlIGRvY3VtZW50IHNvbWUgb3RoZXJcbiAqIHdheS5cbiAqXG4gKiBUaGUgc29sdXRpb24gaXMgdG8gZGVmaW5lIGBnZXREb2N1bWVudCgpYCBhbmQgYHNldERvY3VtZW50KClgIHRvcC1sZXZlbCBmdW5jdGlvbnMgZm9yIGl2eS5cbiAqIFdoZXJldmVyIGl2eSBuZWVkcyB0aGUgZ2xvYmFsIGRvY3VtZW50LCBpdCBjYWxscyBgZ2V0RG9jdW1lbnQoKWAgaW5zdGVhZC5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgaXZ5IG91dHNpZGUgb2YgYSBicm93c2VyIGVudmlyb25tZW50LCBpdCBpcyBuZWNlc3NhcnkgdG8gY2FsbCBgc2V0RG9jdW1lbnQoKWAgdG9cbiAqIHRlbGwgaXZ5IHdoYXQgdGhlIGdsb2JhbCBgZG9jdW1lbnRgIGlzLlxuICpcbiAqIEFuZ3VsYXIgZG9lcyB0aGlzIGZvciB1cyBpbiBlYWNoIG9mIHRoZSBzdGFuZGFyZCBwbGF0Zm9ybXMgKGBCcm93c2VyYCwgYFNlcnZlcmAsIGFuZCBgV2ViV29ya2VyYClcbiAqIGJ5IGNhbGxpbmcgYHNldERvY3VtZW50KClgIHdoZW4gcHJvdmlkaW5nIHRoZSBgRE9DVU1FTlRgIHRva2VuLlxuICovXG5sZXQgRE9DVU1FTlQ6IERvY3VtZW50fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUZWxsIGl2eSB3aGF0IHRoZSBgZG9jdW1lbnRgIGlzIGZvciB0aGlzIHBsYXRmb3JtLlxuICpcbiAqIEl0IGlzIG9ubHkgbmVjZXNzYXJ5IHRvIGNhbGwgdGhpcyBpZiB0aGUgY3VycmVudCBwbGF0Zm9ybSBpcyBub3QgYSBicm93c2VyLlxuICpcbiAqIEBwYXJhbSBkb2N1bWVudCBUaGUgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgZ2xvYmFsIGBkb2N1bWVudGAgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERvY3VtZW50KGRvY3VtZW50OiBEb2N1bWVudHx1bmRlZmluZWQpOiB2b2lkIHtcbiAgRE9DVU1FTlQgPSBkb2N1bWVudDtcbn1cblxuLyoqXG4gKiBBY2Nlc3MgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGBkb2N1bWVudGAgZm9yIHRoaXMgcGxhdGZvcm0uXG4gKlxuICogSXZ5IGNhbGxzIHRoaXMgd2hlbmV2ZXIgaXQgbmVlZHMgdG8gYWNjZXNzIHRoZSBgZG9jdW1lbnRgIG9iamVjdC5cbiAqIEZvciBleGFtcGxlIHRvIGNyZWF0ZSB0aGUgcmVuZGVyZXIgb3IgdG8gZG8gc2FuaXRpemF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICBpZiAoRE9DVU1FTlQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBET0NVTUVOVDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9XG4gIC8vIE5vIFwiZG9jdW1lbnRcIiBjYW4gYmUgZm91bmQuIFRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHdlIGFyZSBydW5uaW5nIGl2eSBvdXRzaWRlIEFuZ3VsYXIgYW5kXG4gIC8vIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlzIG5vdCBhIGJyb3dzZXIuIFNpbmNlIHRoaXMgaXMgbm90IGEgc3VwcG9ydGVkIHNjZW5hcmlvIGF0IHRoZSBtb21lbnRcbiAgLy8gdGhpcyBzaG91bGQgbm90IGhhcHBlbiBpbiBBbmd1bGFyIGFwcHMuXG4gIC8vIE9uY2Ugd2Ugc3VwcG9ydCBydW5uaW5nIGl2eSBvdXRzaWRlIG9mIEFuZ3VsYXIgd2Ugd2lsbCBuZWVkIHRvIHB1Ymxpc2ggYHNldERvY3VtZW50KClgIGFzIGFcbiAgLy8gcHVibGljIEFQSS4gTWVhbndoaWxlIHdlIGp1c3QgcmV0dXJuIGB1bmRlZmluZWRgIGFuZCBsZXQgdGhlIGFwcGxpY2F0aW9uIGZhaWwuXG4gIHJldHVybiB1bmRlZmluZWQhO1xufVxuIl19