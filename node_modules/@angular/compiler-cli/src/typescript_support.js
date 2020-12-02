(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/typescript_support", ["require", "exports", "typescript", "@angular/compiler-cli/src/diagnostics/typescript_version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var typescript_version_1 = require("@angular/compiler-cli/src/diagnostics/typescript_version");
    /**
     * Minimum supported TypeScript version
     * ∀ supported typescript version v, v >= MIN_TS_VERSION
     */
    var MIN_TS_VERSION = '3.6.4';
    /**
     * Supremum of supported TypeScript versions
     * ∀ supported typescript version v, v < MAX_TS_VERSION
     * MAX_TS_VERSION is not considered as a supported TypeScript version
     */
    var MAX_TS_VERSION = '3.9.0';
    /**
     * The currently used version of TypeScript, which can be adjusted for testing purposes using
     * `setTypeScriptVersionForTesting` and `restoreTypeScriptVersionForTesting` below.
     */
    var tsVersion = ts.version;
    function setTypeScriptVersionForTesting(version) {
        tsVersion = version;
    }
    exports.setTypeScriptVersionForTesting = setTypeScriptVersionForTesting;
    function restoreTypeScriptVersionForTesting() {
        tsVersion = ts.version;
    }
    exports.restoreTypeScriptVersionForTesting = restoreTypeScriptVersionForTesting;
    /**
     * Checks whether a given version ∈ [minVersion, maxVersion[
     * An error will be thrown if the following statements are simultaneously true:
     * - the given version ∉ [minVersion, maxVersion[,
     *
     * @param version The version on which the check will be performed
     * @param minVersion The lower bound version. A valid version needs to be greater than minVersion
     * @param maxVersion The upper bound version. A valid version needs to be strictly less than
     * maxVersion
     *
     * @throws Will throw an error if the given version ∉ [minVersion, maxVersion[
     */
    function checkVersion(version, minVersion, maxVersion) {
        if ((typescript_version_1.compareVersions(version, minVersion) < 0 || typescript_version_1.compareVersions(version, maxVersion) >= 0)) {
            throw new Error("The Angular Compiler requires TypeScript >=" + minVersion + " and <" + maxVersion + " but " + version + " was found instead.");
        }
    }
    exports.checkVersion = checkVersion;
    function verifySupportedTypeScriptVersion() {
        checkVersion(tsVersion, MIN_TS_VERSION, MAX_TS_VERSION);
    }
    exports.verifySupportedTypeScriptVersion = verifySupportedTypeScriptVersion;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9zdXBwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy90eXBlc2NyaXB0X3N1cHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFDakMsK0ZBQWlFO0lBRWpFOzs7T0FHRztJQUNILElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUUvQjs7OztPQUlHO0lBQ0gsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBRS9COzs7T0FHRztJQUNILElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFFM0IsU0FBZ0IsOEJBQThCLENBQUMsT0FBZTtRQUM1RCxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFGRCx3RUFFQztJQUVELFNBQWdCLGtDQUFrQztRQUNoRCxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRkQsZ0ZBRUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILFNBQWdCLFlBQVksQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUFrQjtRQUNsRixJQUFJLENBQUMsb0NBQWUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9DQUFlLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzNGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQThDLFVBQVUsY0FDcEUsVUFBVSxhQUFRLE9BQU8sd0JBQXFCLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFMRCxvQ0FLQztJQUVELFNBQWdCLGdDQUFnQztRQUM5QyxZQUFZLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRkQsNEVBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7Y29tcGFyZVZlcnNpb25zfSBmcm9tICcuL2RpYWdub3N0aWNzL3R5cGVzY3JpcHRfdmVyc2lvbic7XG5cbi8qKlxuICogTWluaW11bSBzdXBwb3J0ZWQgVHlwZVNjcmlwdCB2ZXJzaW9uXG4gKiDiiIAgc3VwcG9ydGVkIHR5cGVzY3JpcHQgdmVyc2lvbiB2LCB2ID49IE1JTl9UU19WRVJTSU9OXG4gKi9cbmNvbnN0IE1JTl9UU19WRVJTSU9OID0gJzMuNi40JztcblxuLyoqXG4gKiBTdXByZW11bSBvZiBzdXBwb3J0ZWQgVHlwZVNjcmlwdCB2ZXJzaW9uc1xuICog4oiAIHN1cHBvcnRlZCB0eXBlc2NyaXB0IHZlcnNpb24gdiwgdiA8IE1BWF9UU19WRVJTSU9OXG4gKiBNQVhfVFNfVkVSU0lPTiBpcyBub3QgY29uc2lkZXJlZCBhcyBhIHN1cHBvcnRlZCBUeXBlU2NyaXB0IHZlcnNpb25cbiAqL1xuY29uc3QgTUFYX1RTX1ZFUlNJT04gPSAnMy45LjAnO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgdXNlZCB2ZXJzaW9uIG9mIFR5cGVTY3JpcHQsIHdoaWNoIGNhbiBiZSBhZGp1c3RlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyB1c2luZ1xuICogYHNldFR5cGVTY3JpcHRWZXJzaW9uRm9yVGVzdGluZ2AgYW5kIGByZXN0b3JlVHlwZVNjcmlwdFZlcnNpb25Gb3JUZXN0aW5nYCBiZWxvdy5cbiAqL1xubGV0IHRzVmVyc2lvbiA9IHRzLnZlcnNpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUeXBlU2NyaXB0VmVyc2lvbkZvclRlc3RpbmcodmVyc2lvbjogc3RyaW5nKTogdm9pZCB7XG4gIHRzVmVyc2lvbiA9IHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlVHlwZVNjcmlwdFZlcnNpb25Gb3JUZXN0aW5nKCk6IHZvaWQge1xuICB0c1ZlcnNpb24gPSB0cy52ZXJzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gdmVyc2lvbiDiiIggW21pblZlcnNpb24sIG1heFZlcnNpb25bXG4gKiBBbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiB0aGUgZm9sbG93aW5nIHN0YXRlbWVudHMgYXJlIHNpbXVsdGFuZW91c2x5IHRydWU6XG4gKiAtIHRoZSBnaXZlbiB2ZXJzaW9uIOKIiSBbbWluVmVyc2lvbiwgbWF4VmVyc2lvblssXG4gKlxuICogQHBhcmFtIHZlcnNpb24gVGhlIHZlcnNpb24gb24gd2hpY2ggdGhlIGNoZWNrIHdpbGwgYmUgcGVyZm9ybWVkXG4gKiBAcGFyYW0gbWluVmVyc2lvbiBUaGUgbG93ZXIgYm91bmQgdmVyc2lvbi4gQSB2YWxpZCB2ZXJzaW9uIG5lZWRzIHRvIGJlIGdyZWF0ZXIgdGhhbiBtaW5WZXJzaW9uXG4gKiBAcGFyYW0gbWF4VmVyc2lvbiBUaGUgdXBwZXIgYm91bmQgdmVyc2lvbi4gQSB2YWxpZCB2ZXJzaW9uIG5lZWRzIHRvIGJlIHN0cmljdGx5IGxlc3MgdGhhblxuICogbWF4VmVyc2lvblxuICpcbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZ2l2ZW4gdmVyc2lvbiDiiIkgW21pblZlcnNpb24sIG1heFZlcnNpb25bXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZlcnNpb24odmVyc2lvbjogc3RyaW5nLCBtaW5WZXJzaW9uOiBzdHJpbmcsIG1heFZlcnNpb246IHN0cmluZykge1xuICBpZiAoKGNvbXBhcmVWZXJzaW9ucyh2ZXJzaW9uLCBtaW5WZXJzaW9uKSA8IDAgfHwgY29tcGFyZVZlcnNpb25zKHZlcnNpb24sIG1heFZlcnNpb24pID49IDApKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgQW5ndWxhciBDb21waWxlciByZXF1aXJlcyBUeXBlU2NyaXB0ID49JHttaW5WZXJzaW9ufSBhbmQgPCR7XG4gICAgICAgIG1heFZlcnNpb259IGJ1dCAke3ZlcnNpb259IHdhcyBmb3VuZCBpbnN0ZWFkLmApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdXBwb3J0ZWRUeXBlU2NyaXB0VmVyc2lvbigpOiB2b2lkIHtcbiAgY2hlY2tWZXJzaW9uKHRzVmVyc2lvbiwgTUlOX1RTX1ZFUlNJT04sIE1BWF9UU19WRVJTSU9OKTtcbn1cbiJdfQ==