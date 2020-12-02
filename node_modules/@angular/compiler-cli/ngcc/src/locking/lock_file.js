(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/lock_file", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getLockFilePath(fs) {
        return fs.resolve(require.resolve('@angular/compiler-cli/ngcc'), '../__ngcc_lock_file__');
    }
    exports.getLockFilePath = getLockFilePath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ja19maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2xvY2tpbmcvbG9ja19maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU0EsU0FBZ0IsZUFBZSxDQUFDLEVBQWM7UUFDNUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFGRCwwQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NrRmlsZVBhdGgoZnM6IEZpbGVTeXN0ZW0pIHtcbiAgcmV0dXJuIGZzLnJlc29sdmUocmVxdWlyZS5yZXNvbHZlKCdAYW5ndWxhci9jb21waWxlci1jbGkvbmdjYycpLCAnLi4vX19uZ2NjX2xvY2tfZmlsZV9fJyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9ja0ZpbGUge1xuICBwYXRoOiBBYnNvbHV0ZUZzUGF0aDtcbiAgLyoqXG4gICAqIFdyaXRlIGEgbG9jayBmaWxlIHRvIGRpc2sgY29udGFpbmluZyB0aGUgUElEIG9mIHRoZSBjdXJyZW50IHByb2Nlc3MuXG4gICAqL1xuICB3cml0ZSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBQSUQsIG9mIHRoZSBwcm9jZXNzIGhvbGRpbmcgdGhlIGxvY2ssIGZyb20gdGhlIGxvY2stZmlsZS5cbiAgICpcbiAgICogSXQgaXMgZmVhc2libGUgdGhhdCB0aGUgbG9jay1maWxlIHdhcyByZW1vdmVkIGJldHdlZW4gdGhlIGNhbGwgdG8gYHdyaXRlKClgIHRoYXQgZWZmZWN0aXZlbHlcbiAgICogY2hlY2tzIGZvciBleGlzdGVuY2UgYW5kIHRoaXMgYXR0ZW1wdCB0byByZWFkIHRoZSBmaWxlLiBJZiBzbyB0aGVuIHRoaXMgbWV0aG9kIHNob3VsZCBqdXN0XG4gICAqIGdyYWNlZnVsbHkgcmV0dXJuIGBcInt1bmtub3dufVwiYC5cbiAgICovXG4gIHJlYWQoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGxvY2sgZmlsZSBmcm9tIGRpc2ssIHdoZXRoZXIgb3Igbm90IGl0IGV4aXN0cy5cbiAgICovXG4gIHJlbW92ZSgpOiB2b2lkO1xufVxuIl19