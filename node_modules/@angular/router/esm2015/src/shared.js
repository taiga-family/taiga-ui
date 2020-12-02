/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/shared.ts
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
 * The primary routing outlet.
 *
 * \@publicApi
 * @type {?}
 */
export const PRIMARY_OUTLET = 'primary';
/**
 * A map that provides access to the required and optional parameters
 * specific to a route.
 * The map supports retrieving a single value with `get()`
 * or multiple values with `getAll()`.
 *
 * @see [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 *
 * \@publicApi
 * @record
 */
export function ParamMap() { }
if (false) {
    /**
     * Names of the parameters in the map.
     * @type {?}
     */
    ParamMap.prototype.keys;
    /**
     * Reports whether the map contains a given parameter.
     * @param {?} name The parameter name.
     * @return {?} True if the map contains the given parameter, false otherwise.
     */
    ParamMap.prototype.has = function (name) { };
    /**
     * Retrieves a single value for a parameter.
     * @param {?} name The parameter name.
     * @return {?} The parameter's single value,
     * or the first value if the parameter has multiple values,
     * or `null` when there is no such parameter.
     */
    ParamMap.prototype.get = function (name) { };
    /**
     * Retrieves multiple values for a parameter.
     * @param {?} name The parameter name.
     * @return {?} An array containing one or more values,
     * or an empty array if there is no such parameter.
     *
     */
    ParamMap.prototype.getAll = function (name) { };
}
class ParamsAsMap {
    /**
     * @param {?} params
     */
    constructor(params) {
        this.params = params || {};
    }
    /**
     * @param {?} name
     * @return {?}
     */
    has(name) {
        return this.params.hasOwnProperty(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        if (this.has(name)) {
            /** @type {?} */
            const v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
        }
        return null;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getAll(name) {
        if (this.has(name)) {
            /** @type {?} */
            const v = this.params[name];
            return Array.isArray(v) ? v : [v];
        }
        return [];
    }
    /**
     * @return {?}
     */
    get keys() {
        return Object.keys(this.params);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ParamsAsMap.prototype.params;
}
/**
 * Converts a `Params` instance to a `ParamMap`.
 * \@publicApi
 * @param {?} params The instance to convert.
 * @return {?} The new map instance.
 *
 */
export function convertToParamMap(params) {
    return new ParamsAsMap(params);
}
/** @type {?} */
const NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
/**
 * @param {?} message
 * @return {?}
 */
export function navigationCancelingError(message) {
    /** @type {?} */
    const error = Error('NavigationCancelingError: ' + message);
    ((/** @type {?} */ (error)))[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
/**
 * @param {?} error
 * @return {?}
 */
export function isNavigationCancelingError(error) {
    return error && ((/** @type {?} */ (error)))[NAVIGATION_CANCELING_ERROR];
}
// Matches the route configuration (`route`) against the actual URL (`segments`).
/**
 * @param {?} segments
 * @param {?} segmentGroup
 * @param {?} route
 * @return {?}
 */
export function defaultUrlMatcher(segments, segmentGroup, route) {
    /** @type {?} */
    const parts = (/** @type {?} */ (route.path)).split('/');
    if (parts.length > segments.length) {
        // The actual URL is shorter than the config, no match
        return null;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || parts.length < segments.length)) {
        // The config is longer than the actual URL but we are looking for a full match, return null
        return null;
    }
    /** @type {?} */
    const posParams = {};
    // Check each config part against the actual URL
    for (let index = 0; index < parts.length; index++) {
        /** @type {?} */
        const part = parts[index];
        /** @type {?} */
        const segment = segments[index];
        /** @type {?} */
        const isParameter = part.startsWith(':');
        if (isParameter) {
            posParams[part.substring(1)] = segment;
        }
        else if (part !== segment.path) {
            // The actual URL part does not match the config, no match
            return null;
        }
    }
    return { consumed: segments.slice(0, parts.length), posParams };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0sT0FBTyxjQUFjLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7O0FBdUJ2Qyw4QkEwQkM7Ozs7OztJQURDLHdCQUF3Qjs7Ozs7O0lBbkJ4Qiw2Q0FBMkI7Ozs7Ozs7O0lBUTNCLDZDQUErQjs7Ozs7Ozs7SUFRL0IsZ0RBQStCOztBQU1qQyxNQUFNLFdBQVc7Ozs7SUFHZixZQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7Ozs7OztJQS9CQyw2QkFBdUI7Ozs7Ozs7OztBQXdDekIsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDOztNQUVLLDBCQUEwQixHQUFHLDRCQUE0Qjs7Ozs7QUFFL0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE9BQWU7O1VBQ2hELEtBQUssR0FBRyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsT0FBTyxDQUFDO0lBQzNELENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEtBQVk7SUFDckQsT0FBTyxLQUFLLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQzdCLFFBQXNCLEVBQUUsWUFBNkIsRUFBRSxLQUFZOztVQUMvRCxLQUFLLEdBQUcsbUJBQUEsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFFcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDbEMsc0RBQXNEO1FBQ3RELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTTtRQUMxQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsRSw0RkFBNEY7UUFDNUYsT0FBTyxJQUFJLENBQUM7S0FDYjs7VUFFSyxTQUFTLEdBQWdDLEVBQUU7SUFFakQsZ0RBQWdEO0lBQ2hELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztjQUMzQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7Y0FDbkIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7O2NBQ3pCLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJLFdBQVcsRUFBRTtZQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQywwREFBMEQ7WUFDMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBRUQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDaEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSb3V0ZSwgVXJsTWF0Y2hSZXN1bHR9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7VXJsU2VnbWVudCwgVXJsU2VnbWVudEdyb3VwfSBmcm9tICcuL3VybF90cmVlJztcblxuXG4vKipcbiAqIFRoZSBwcmltYXJ5IHJvdXRpbmcgb3V0bGV0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfT1VUTEVUID0gJ3ByaW1hcnknO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBtYXRyaXggYW5kIHF1ZXJ5IFVSTCBwYXJhbWV0ZXJzLlxuICogQHNlZSBgY29udmVydFRvUGFyYW1NYXAoKWBcbiAqIEBzZWUgYFBhcmFtTWFwYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1zID0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG4vKipcbiAqIEEgbWFwIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSByZXF1aXJlZCBhbmQgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogc3BlY2lmaWMgdG8gYSByb3V0ZS5cbiAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBhIHNpbmdsZSB2YWx1ZSB3aXRoIGBnZXQoKWBcbiAqIG9yIG11bHRpcGxlIHZhbHVlcyB3aXRoIGBnZXRBbGwoKWAuXG4gKlxuICogQHNlZSBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVVJMU2VhcmNoUGFyYW1zKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJhbU1hcCB7XG4gIC8qKlxuICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIG1hcCBjb250YWlucyBhIGdpdmVuIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIG5hbWUgVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBtYXAgY29udGFpbnMgdGhlIGdpdmVuIHBhcmFtZXRlciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBzaW5nbGUgdmFsdWUgZm9yIGEgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAqIEByZXR1cm4gVGhlIHBhcmFtZXRlcidzIHNpbmdsZSB2YWx1ZSxcbiAgICogb3IgdGhlIGZpcnN0IHZhbHVlIGlmIHRoZSBwYXJhbWV0ZXIgaGFzIG11bHRpcGxlIHZhbHVlcyxcbiAgICogb3IgYG51bGxgIHdoZW4gdGhlcmUgaXMgbm8gc3VjaCBwYXJhbWV0ZXIuXG4gICAqL1xuICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgbXVsdGlwbGUgdmFsdWVzIGZvciBhIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIG5hbWUgVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgdmFsdWVzLFxuICAgKiBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGVyZSBpcyBubyBzdWNoIHBhcmFtZXRlci5cbiAgICpcbiAgICovXG4gIGdldEFsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICAvKiogTmFtZXMgb2YgdGhlIHBhcmFtZXRlcnMgaW4gdGhlIG1hcC4gKi9cbiAgcmVhZG9ubHkga2V5czogc3RyaW5nW107XG59XG5cbmNsYXNzIFBhcmFtc0FzTWFwIGltcGxlbWVudHMgUGFyYW1NYXAge1xuICBwcml2YXRlIHBhcmFtczogUGFyYW1zO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogUGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIH1cblxuICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zLmhhc093blByb3BlcnR5KG5hbWUpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnBhcmFtc1tuYW1lXTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHYpID8gdlswXSA6IHY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwobmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgY29uc3QgdiA9IHRoaXMucGFyYW1zW25hbWVdO1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodikgPyB2IDogW3ZdO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldCBrZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBgUGFyYW1zYCBpbnN0YW5jZSB0byBhIGBQYXJhbU1hcGAuXG4gKiBAcGFyYW0gcGFyYW1zIFRoZSBpbnN0YW5jZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIG5ldyBtYXAgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvUGFyYW1NYXAocGFyYW1zOiBQYXJhbXMpOiBQYXJhbU1hcCB7XG4gIHJldHVybiBuZXcgUGFyYW1zQXNNYXAocGFyYW1zKTtcbn1cblxuY29uc3QgTkFWSUdBVElPTl9DQU5DRUxJTkdfRVJST1IgPSAnbmdOYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3InO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbkNhbmNlbGluZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zdCBlcnJvciA9IEVycm9yKCdOYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3I6ICcgKyBtZXNzYWdlKTtcbiAgKGVycm9yIGFzIGFueSlbTkFWSUdBVElPTl9DQU5DRUxJTkdfRVJST1JdID0gdHJ1ZTtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gIHJldHVybiBlcnJvciAmJiAoZXJyb3IgYXMgYW55KVtOQVZJR0FUSU9OX0NBTkNFTElOR19FUlJPUl07XG59XG5cbi8vIE1hdGNoZXMgdGhlIHJvdXRlIGNvbmZpZ3VyYXRpb24gKGByb3V0ZWApIGFnYWluc3QgdGhlIGFjdHVhbCBVUkwgKGBzZWdtZW50c2ApLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRVcmxNYXRjaGVyKFxuICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZTogUm91dGUpOiBVcmxNYXRjaFJlc3VsdHxudWxsIHtcbiAgY29uc3QgcGFydHMgPSByb3V0ZS5wYXRoIS5zcGxpdCgnLycpO1xuXG4gIGlmIChwYXJ0cy5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChyb3V0ZS5wYXRoTWF0Y2ggPT09ICdmdWxsJyAmJlxuICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aCkpIHtcbiAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcG9zUGFyYW1zOiB7W2tleTogc3RyaW5nXTogVXJsU2VnbWVudH0gPSB7fTtcblxuICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhcnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICBjb25zdCBpc1BhcmFtZXRlciA9IHBhcnQuc3RhcnRzV2l0aCgnOicpO1xuICAgIGlmIChpc1BhcmFtZXRlcikge1xuICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgfSBlbHNlIGlmIChwYXJ0ICE9PSBzZWdtZW50LnBhdGgpIHtcbiAgICAgIC8vIFRoZSBhY3R1YWwgVVJMIHBhcnQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7Y29uc3VtZWQ6IHNlZ21lbnRzLnNsaWNlKDAsIHBhcnRzLmxlbmd0aCksIHBvc1BhcmFtc307XG59XG4iXX0=