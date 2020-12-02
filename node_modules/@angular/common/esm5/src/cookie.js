/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __values } from "tslib";
export function parseCookieValue(cookieStr, name) {
    var e_1, _a;
    name = encodeURIComponent(name);
    try {
        for (var _b = __values(cookieStr.split(';')), _c = _b.next(); !_c.done; _c = _b.next()) {
            var cookie = _c.value;
            var eqIndex = cookie.indexOf('=');
            var _d = __read(eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], 2), cookieName = _d[0], cookieValue = _d[1];
            if (cookieName.trim() === name) {
                return decodeURIComponent(cookieValue);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9jb29raWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxTQUFpQixFQUFFLElBQVk7O0lBQzlELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDaEMsS0FBcUIsSUFBQSxLQUFBLFNBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtZQUF0QyxJQUFNLE1BQU0sV0FBQTtZQUNmLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBQSxvR0FDa0YsRUFEakYsa0JBQVUsRUFBRSxtQkFDcUUsQ0FBQztZQUN6RixJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRjs7Ozs7Ozs7O0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVWYWx1ZShjb29raWVTdHI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICBmb3IgKGNvbnN0IGNvb2tpZSBvZiBjb29raWVTdHIuc3BsaXQoJzsnKSkge1xuICAgIGNvbnN0IGVxSW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV06IHN0cmluZ1tdID1cbiAgICAgICAgZXFJbmRleCA9PSAtMSA/IFtjb29raWUsICcnXSA6IFtjb29raWUuc2xpY2UoMCwgZXFJbmRleCksIGNvb2tpZS5zbGljZShlcUluZGV4ICsgMSldO1xuICAgIGlmIChjb29raWVOYW1lLnRyaW0oKSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19