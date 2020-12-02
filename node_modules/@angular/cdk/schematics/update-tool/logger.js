/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/update-tool/logger", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultLogger = {
        debug: m => console.debug(m),
        error: m => console.error(m),
        fatal: m => console.error(m),
        info: m => console.info(m),
        warn: m => console.warn(m),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3VwZGF0ZS10b29sL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQVVVLFFBQUEsYUFBYSxHQUFpQjtRQUN6QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTG9nZ2VyIHtcbiAgZGVidWcobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgZmF0YWwobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuICB3YXJuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9nZ2VyOiBVcGRhdGVMb2dnZXIgPSB7XG4gIGRlYnVnOiBtID0+IGNvbnNvbGUuZGVidWcobSksXG4gIGVycm9yOiBtID0+IGNvbnNvbGUuZXJyb3IobSksXG4gIGZhdGFsOiBtID0+IGNvbnNvbGUuZXJyb3IobSksXG4gIGluZm86IG0gPT4gY29uc29sZS5pbmZvKG0pLFxuICB3YXJuOiBtID0+IGNvbnNvbGUud2FybihtKSxcbn07XG4iXX0=