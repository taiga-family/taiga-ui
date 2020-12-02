(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/file_system/src/util", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TS_DTS_JS_EXTENSION = /(?:\.d)?\.ts$|\.js$/;
    /**
     * Convert Windows-style separators to POSIX separators.
     */
    function normalizeSeparators(path) {
        // TODO: normalize path only for OS that need it.
        return path.replace(/\\/g, '/');
    }
    exports.normalizeSeparators = normalizeSeparators;
    /**
     * Remove a .ts, .d.ts, or .js extension from a file name.
     */
    function stripExtension(path) {
        return path.replace(TS_DTS_JS_EXTENSION, '');
    }
    exports.stripExtension = stripExtension;
    function getSourceFileOrError(program, fileName) {
        var sf = program.getSourceFile(fileName);
        if (sf === undefined) {
            throw new Error("Program does not contain \"" + fileName + "\" - available files are " + program.getSourceFiles().map(function (sf) { return sf.fileName; }).join(', '));
        }
        return sf;
    }
    exports.getSourceFileOrError = getSourceFileOrError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFVQSxJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDO0lBRWxEOztPQUVHO0lBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsSUFBWTtRQUM5QyxpREFBaUQ7UUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSEQsa0RBR0M7SUFFRDs7T0FFRztJQUNILFNBQWdCLGNBQWMsQ0FBQyxJQUFZO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRkQsd0NBRUM7SUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxPQUFtQixFQUFFLFFBQXdCO1FBQ2hGLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQTZCLFFBQVEsaUNBQ2pELE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsUUFBUSxFQUFYLENBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBUEQsb0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGh9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBUU19EVFNfSlNfRVhURU5TSU9OID0gLyg/OlxcLmQpP1xcLnRzJHxcXC5qcyQvO1xuXG4vKipcbiAqIENvbnZlcnQgV2luZG93cy1zdHlsZSBzZXBhcmF0b3JzIHRvIFBPU0lYIHNlcGFyYXRvcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTZXBhcmF0b3JzKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFRPRE86IG5vcm1hbGl6ZSBwYXRoIG9ubHkgZm9yIE9TIHRoYXQgbmVlZCBpdC5cbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIC50cywgLmQudHMsIG9yIC5qcyBleHRlbnNpb24gZnJvbSBhIGZpbGUgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwRXh0ZW5zaW9uKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoVFNfRFRTX0pTX0VYVEVOU0lPTiwgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlRmlsZU9yRXJyb3IocHJvZ3JhbTogdHMuUHJvZ3JhbSwgZmlsZU5hbWU6IEFic29sdXRlRnNQYXRoKTogdHMuU291cmNlRmlsZSB7XG4gIGNvbnN0IHNmID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgaWYgKHNmID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2dyYW0gZG9lcyBub3QgY29udGFpbiBcIiR7ZmlsZU5hbWV9XCIgLSBhdmFpbGFibGUgZmlsZXMgYXJlICR7XG4gICAgICAgIHByb2dyYW0uZ2V0U291cmNlRmlsZXMoKS5tYXAoc2YgPT4gc2YuZmlsZU5hbWUpLmpvaW4oJywgJyl9YCk7XG4gIH1cbiAgcmV0dXJuIHNmO1xufVxuIl19