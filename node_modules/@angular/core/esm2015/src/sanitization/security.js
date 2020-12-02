/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/sanitization/security.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const SecurityContext = {
    NONE: 0,
    HTML: 1,
    STYLE: 2,
    SCRIPT: 3,
    URL: 4,
    RESOURCE_URL: 5,
};
export { SecurityContext };
SecurityContext[SecurityContext.NONE] = 'NONE';
SecurityContext[SecurityContext.HTML] = 'HTML';
SecurityContext[SecurityContext.STYLE] = 'STYLE';
SecurityContext[SecurityContext.SCRIPT] = 'SCRIPT';
SecurityContext[SecurityContext.URL] = 'URL';
SecurityContext[SecurityContext.RESOURCE_URL] = 'RESOURCE_URL';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vc2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxNQUFZLGVBQWU7SUFDekIsSUFBSSxHQUFJO0lBQ1IsSUFBSSxHQUFJO0lBQ1IsS0FBSyxHQUFJO0lBQ1QsTUFBTSxHQUFJO0lBQ1YsR0FBRyxHQUFJO0lBQ1AsWUFBWSxHQUFJO0VBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEEgU2VjdXJpdHlDb250ZXh0IG1hcmtzIGEgbG9jYXRpb24gdGhhdCBoYXMgZGFuZ2Vyb3VzIHNlY3VyaXR5IGltcGxpY2F0aW9ucywgZS5nLiBhIERPTSBwcm9wZXJ0eVxuICogbGlrZSBgaW5uZXJIVE1MYCB0aGF0IGNvdWxkIGNhdXNlIENyb3NzIFNpdGUgU2NyaXB0aW5nIChYU1MpIHNlY3VyaXR5IGJ1Z3Mgd2hlbiBpbXByb3Blcmx5XG4gKiBoYW5kbGVkLlxuICpcbiAqIFNlZSBEb21TYW5pdGl6ZXIgZm9yIG1vcmUgZGV0YWlscyBvbiBzZWN1cml0eSBpbiBBbmd1bGFyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBlbnVtIFNlY3VyaXR5Q29udGV4dCB7XG4gIE5PTkUgPSAwLFxuICBIVE1MID0gMSxcbiAgU1RZTEUgPSAyLFxuICBTQ1JJUFQgPSAzLFxuICBVUkwgPSA0LFxuICBSRVNPVVJDRV9VUkwgPSA1LFxufVxuIl19