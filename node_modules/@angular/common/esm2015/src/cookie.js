/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/cookie.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} cookieStr
 * @param {?} name
 * @return {?}
 */
export function parseCookieValue(cookieStr, name) {
    name = encodeURIComponent(name);
    for (const cookie of cookieStr.split(';')) {
        /** @type {?} */
        const eqIndex = cookie.indexOf('=');
        const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9jb29raWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsU0FBaUIsRUFBRSxJQUFZO0lBQzlELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxLQUFLLE1BQU0sTUFBTSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQ25DLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztjQUM3QixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FDM0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDOUIsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVWYWx1ZShjb29raWVTdHI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICBmb3IgKGNvbnN0IGNvb2tpZSBvZiBjb29raWVTdHIuc3BsaXQoJzsnKSkge1xuICAgIGNvbnN0IGVxSW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV06IHN0cmluZ1tdID1cbiAgICAgICAgZXFJbmRleCA9PSAtMSA/IFtjb29raWUsICcnXSA6IFtjb29raWUuc2xpY2UoMCwgZXFJbmRleCksIGNvb2tpZS5zbGljZShlcUluZGV4ICsgMSldO1xuICAgIGlmIChjb29raWVOYW1lLnRyaW0oKSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19