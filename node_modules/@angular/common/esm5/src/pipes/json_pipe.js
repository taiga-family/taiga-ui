/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
/**
 * @ngModule CommonModule
 * @description
 *
 * Converts a value into its JSON-format representation.  Useful for debugging.
 *
 * @usageNotes
 *
 * The following component uses a JSON pipe to convert an object
 * to JSON format, and displays the string in both formats for comparison.
 *
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * @publicApi
 */
var JsonPipe = /** @class */ (function () {
    function JsonPipe() {
    }
    /**
     * @param value A value of any type to convert into a JSON-format string.
     */
    JsonPipe.prototype.transform = function (value) {
        return JSON.stringify(value, null, 2);
    };
    JsonPipe = __decorate([
        Pipe({ name: 'json', pure: false })
    ], JsonPipe);
    return JsonPipe;
}());
export { JsonPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl9waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9waXBlcy9qc29uX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWxEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUg7SUFBQTtJQU9BLENBQUM7SUFOQzs7T0FFRztJQUNILDRCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFOVSxRQUFRO1FBRHBCLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO09BQ3JCLFFBQVEsQ0FPcEI7SUFBRCxlQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBDb252ZXJ0cyBhIHZhbHVlIGludG8gaXRzIEpTT04tZm9ybWF0IHJlcHJlc2VudGF0aW9uLiAgVXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGNvbXBvbmVudCB1c2VzIGEgSlNPTiBwaXBlIHRvIGNvbnZlcnQgYW4gb2JqZWN0XG4gKiB0byBKU09OIGZvcm1hdCwgYW5kIGRpc3BsYXlzIHRoZSBzdHJpbmcgaW4gYm90aCBmb3JtYXRzIGZvciBjb21wYXJpc29uLlxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvanNvbl9waXBlLnRzIHJlZ2lvbj0nSnNvblBpcGUnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdqc29uJywgcHVyZTogZmFsc2V9KVxuZXhwb3J0IGNsYXNzIEpzb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0byBjb252ZXJ0IGludG8gYSBKU09OLWZvcm1hdCBzdHJpbmcuXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKTtcbiAgfVxufVxuIl19