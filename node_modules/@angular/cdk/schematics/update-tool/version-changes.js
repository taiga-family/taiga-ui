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
        define("@angular/cdk/schematics/update-tool/version-changes", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    /**
     * Gets the changes for a given target version from the specified version changes object.
     *
     * For readability and a good overview of breaking changes, the version change data always
     * includes the related Pull Request link. Since this data is not needed when performing the
     * upgrade, this unused data can be removed and the changes data can be flattened into an
     * easy iterable array.
     */
    function getChangesForTarget(target, data) {
        if (!data) {
            throw new Error(`No data could be found for target version: ${target_version_1.TargetVersion[target]}`);
        }
        if (!data[target]) {
            return [];
        }
        return data[target].reduce((result, prData) => result.concat(prData.changes), []);
    }
    exports.getChangesForTarget = getChangesForTarget;
    /**
     * Gets all changes from the specified version changes object. This is helpful in case a migration
     * rule does not distinguish data based on the target version, but for readability the
     * upgrade data is separated for each target version.
     */
    function getAllChanges(data) {
        return Object.keys(data)
            .map(targetVersion => getChangesForTarget(targetVersion, data))
            .reduce((result, versionData) => result.concat(versionData), []);
    }
    exports.getAllChanges = getAllChanges;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi1jaGFuZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3VwZGF0ZS10b29sL3ZlcnNpb24tY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHVGQUErQztJQWEvQzs7Ozs7OztPQU9HO0lBQ0gsU0FBZ0IsbUJBQW1CLENBQUksTUFBcUIsRUFBRSxJQUF1QjtRQUNuRixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FDWCw4Q0FBOEMsOEJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFTLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBWEQsa0RBV0M7SUFFRDs7OztPQUlHO0lBQ0gsU0FBZ0IsYUFBYSxDQUFJLElBQXVCO1FBQ3RELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsYUFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFKRCxzQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4vdGFyZ2V0LXZlcnNpb24nO1xuXG5leHBvcnQgdHlwZSBWZXJzaW9uQ2hhbmdlczxUPiA9IHtcbiAgW3RhcmdldCBpbiBUYXJnZXRWZXJzaW9uXT86IFJlYWRhYmxlQ2hhbmdlPFQ+W107XG59O1xuXG5leHBvcnQgdHlwZSBSZWFkYWJsZUNoYW5nZTxUPiA9IHtcbiAgcHI6IHN0cmluZzsgY2hhbmdlczogVFtdXG59O1xuXG4vKiogQ29uZGl0aW9uYWwgdHlwZSB0aGF0IHVud3JhcHMgdGhlIHZhbHVlIG9mIGEgdmVyc2lvbiBjaGFuZ2VzIHR5cGUuICovXG5leHBvcnQgdHlwZSBWYWx1ZU9mQ2hhbmdlczxUPiA9IFQgZXh0ZW5kcyBWZXJzaW9uQ2hhbmdlczxpbmZlciBYPj8gWCA6IG51bGw7XG5cbi8qKlxuICogR2V0cyB0aGUgY2hhbmdlcyBmb3IgYSBnaXZlbiB0YXJnZXQgdmVyc2lvbiBmcm9tIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBjaGFuZ2VzIG9iamVjdC5cbiAqXG4gKiBGb3IgcmVhZGFiaWxpdHkgYW5kIGEgZ29vZCBvdmVydmlldyBvZiBicmVha2luZyBjaGFuZ2VzLCB0aGUgdmVyc2lvbiBjaGFuZ2UgZGF0YSBhbHdheXNcbiAqIGluY2x1ZGVzIHRoZSByZWxhdGVkIFB1bGwgUmVxdWVzdCBsaW5rLiBTaW5jZSB0aGlzIGRhdGEgaXMgbm90IG5lZWRlZCB3aGVuIHBlcmZvcm1pbmcgdGhlXG4gKiB1cGdyYWRlLCB0aGlzIHVudXNlZCBkYXRhIGNhbiBiZSByZW1vdmVkIGFuZCB0aGUgY2hhbmdlcyBkYXRhIGNhbiBiZSBmbGF0dGVuZWQgaW50byBhblxuICogZWFzeSBpdGVyYWJsZSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5nZXNGb3JUYXJnZXQ8VD4odGFyZ2V0OiBUYXJnZXRWZXJzaW9uLCBkYXRhOiBWZXJzaW9uQ2hhbmdlczxUPik6IFRbXSB7XG4gIGlmICghZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIGRhdGEgY291bGQgYmUgZm91bmQgZm9yIHRhcmdldCB2ZXJzaW9uOiAke1RhcmdldFZlcnNpb25bdGFyZ2V0XX1gKTtcbiAgfVxuXG4gIGlmICghZGF0YVt0YXJnZXRdKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIGRhdGFbdGFyZ2V0XSEucmVkdWNlKChyZXN1bHQsIHByRGF0YSkgPT4gcmVzdWx0LmNvbmNhdChwckRhdGEuY2hhbmdlcyksIFtdIGFzIFRbXSk7XG59XG5cbi8qKlxuICogR2V0cyBhbGwgY2hhbmdlcyBmcm9tIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBjaGFuZ2VzIG9iamVjdC4gVGhpcyBpcyBoZWxwZnVsIGluIGNhc2UgYSBtaWdyYXRpb25cbiAqIHJ1bGUgZG9lcyBub3QgZGlzdGluZ3Vpc2ggZGF0YSBiYXNlZCBvbiB0aGUgdGFyZ2V0IHZlcnNpb24sIGJ1dCBmb3IgcmVhZGFiaWxpdHkgdGhlXG4gKiB1cGdyYWRlIGRhdGEgaXMgc2VwYXJhdGVkIGZvciBlYWNoIHRhcmdldCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2hhbmdlczxUPihkYXRhOiBWZXJzaW9uQ2hhbmdlczxUPik6IFRbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgLm1hcCh0YXJnZXRWZXJzaW9uID0+IGdldENoYW5nZXNGb3JUYXJnZXQodGFyZ2V0VmVyc2lvbiBhcyBUYXJnZXRWZXJzaW9uLCBkYXRhKSlcbiAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgdmVyc2lvbkRhdGEpID0+IHJlc3VsdC5jb25jYXQodmVyc2lvbkRhdGEpLCBbXSk7XG59XG4iXX0=