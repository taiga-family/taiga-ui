(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/build_marker", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/writing/new_entry_point_file_writer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var new_entry_point_file_writer_1 = require("@angular/compiler-cli/ngcc/src/writing/new_entry_point_file_writer");
    exports.NGCC_VERSION = '9.1.12';
    /**
     * Returns true if there is a format in this entry-point that was compiled with an outdated version
     * of ngcc.
     *
     * @param packageJson The parsed contents of the package.json for the entry-point
     */
    function needsCleaning(packageJson) {
        return Object.values(packageJson.__processed_by_ivy_ngcc__ || {})
            .some(function (value) { return value !== exports.NGCC_VERSION; });
    }
    exports.needsCleaning = needsCleaning;
    /**
     * Clean any build marker artifacts from the given `packageJson` object.
     * @param packageJson The parsed contents of the package.json to modify
     * @returns true if the package was modified during cleaning
     */
    function cleanPackageJson(packageJson) {
        var e_1, _a;
        if (packageJson.__processed_by_ivy_ngcc__ !== undefined) {
            // Remove the actual marker
            delete packageJson.__processed_by_ivy_ngcc__;
            try {
                // Remove new format properties that have been added by ngcc
                for (var _b = tslib_1.__values(Object.keys(packageJson)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var prop = _c.value;
                    if (prop.endsWith(new_entry_point_file_writer_1.NGCC_PROPERTY_EXTENSION)) {
                        delete packageJson[prop];
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
            // Also remove the prebulish script if we modified it
            var scripts = packageJson.scripts;
            if (scripts !== undefined && scripts.prepublishOnly) {
                delete scripts.prepublishOnly;
                if (scripts.prepublishOnly__ivy_ngcc_bak !== undefined) {
                    scripts.prepublishOnly = scripts.prepublishOnly__ivy_ngcc_bak;
                    delete scripts.prepublishOnly__ivy_ngcc_bak;
                }
            }
            return true;
        }
        return false;
    }
    exports.cleanPackageJson = cleanPackageJson;
    /**
     * Check whether ngcc has already processed a given entry-point format.
     *
     * @param packageJson The parsed contents of the package.json file for the entry-point.
     * @param format The entry-point format property in the package.json to check.
     * @returns true if the `format` in the entry-point has already been processed by this ngcc version,
     * false otherwise.
     */
    function hasBeenProcessed(packageJson, format) {
        return packageJson.__processed_by_ivy_ngcc__ !== undefined &&
            packageJson.__processed_by_ivy_ngcc__[format] === exports.NGCC_VERSION;
    }
    exports.hasBeenProcessed = hasBeenProcessed;
    /**
     * Write a build marker for the given entry-point and format properties, to indicate that they have
     * been compiled by this version of ngcc.
     *
     * @param pkgJsonUpdater The writer to use for updating `package.json`.
     * @param packageJson The parsed contents of the `package.json` file for the entry-point.
     * @param packageJsonPath The absolute path to the `package.json` file.
     * @param properties The properties in the `package.json` of the formats for which we are writing
     *                   the marker.
     */
    function markAsProcessed(pkgJsonUpdater, packageJson, packageJsonPath, formatProperties) {
        var e_2, _a;
        var update = pkgJsonUpdater.createUpdate();
        try {
            // Update the format properties to mark them as processed.
            for (var formatProperties_1 = tslib_1.__values(formatProperties), formatProperties_1_1 = formatProperties_1.next(); !formatProperties_1_1.done; formatProperties_1_1 = formatProperties_1.next()) {
                var prop = formatProperties_1_1.value;
                update.addChange(['__processed_by_ivy_ngcc__', prop], exports.NGCC_VERSION, 'alphabetic');
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (formatProperties_1_1 && !formatProperties_1_1.done && (_a = formatProperties_1.return)) _a.call(formatProperties_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Update the `prepublishOnly` script (keeping a backup, if necessary) to prevent `ngcc`'d
        // packages from getting accidentally published.
        var oldPrepublishOnly = packageJson.scripts && packageJson.scripts.prepublishOnly;
        var newPrepublishOnly = 'node --eval \"console.error(\'' +
            'ERROR: Trying to publish a package that has been compiled by NGCC. This is not allowed.\\n' +
            'Please delete and rebuild the package, without compiling with NGCC, before attempting to publish.\\n' +
            'Note that NGCC may have been run by importing this package into another project that is being built with Ivy enabled.\\n' +
            '\')\" ' +
            '&& exit 1';
        if (oldPrepublishOnly && (oldPrepublishOnly !== newPrepublishOnly)) {
            update.addChange(['scripts', 'prepublishOnly__ivy_ngcc_bak'], oldPrepublishOnly);
        }
        update.addChange(['scripts', 'prepublishOnly'], newPrepublishOnly);
        update.writeChanges(packageJsonPath, packageJson);
    }
    exports.markAsProcessed = markAsProcessed;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfbWFya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3BhY2thZ2VzL2J1aWxkX21hcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQSxrSEFBK0U7SUFJbEUsUUFBQSxZQUFZLEdBQUcsbUJBQW1CLENBQUM7SUFFaEQ7Ozs7O09BS0c7SUFDSCxTQUFnQixhQUFhLENBQUMsV0FBa0M7UUFDOUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsSUFBSSxFQUFFLENBQUM7YUFDNUQsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLG9CQUFZLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSEQsc0NBR0M7SUFFRDs7OztPQUlHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsV0FBa0M7O1FBQ2pFLElBQUksV0FBVyxDQUFDLHlCQUF5QixLQUFLLFNBQVMsRUFBRTtZQUN2RCwyQkFBMkI7WUFDM0IsT0FBTyxXQUFXLENBQUMseUJBQXlCLENBQUM7O2dCQUM3Qyw0REFBNEQ7Z0JBQzVELEtBQW1CLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUF4QyxJQUFNLElBQUksV0FBQTtvQkFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscURBQXVCLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFCO2lCQUNGOzs7Ozs7Ozs7WUFFRCxxREFBcUQ7WUFDckQsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDbkQsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUM5QixJQUFJLE9BQU8sQ0FBQyw0QkFBNEIsS0FBSyxTQUFTLEVBQUU7b0JBQ3RELE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDO29CQUM5RCxPQUFPLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztpQkFDN0M7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUF2QkQsNENBdUJDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFNBQWdCLGdCQUFnQixDQUM1QixXQUFrQyxFQUFFLE1BQW1DO1FBQ3pFLE9BQU8sV0FBVyxDQUFDLHlCQUF5QixLQUFLLFNBQVM7WUFDdEQsV0FBVyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxLQUFLLG9CQUFZLENBQUM7SUFDckUsQ0FBQztJQUpELDRDQUlDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsU0FBZ0IsZUFBZSxDQUMzQixjQUFrQyxFQUFFLFdBQWtDLEVBQ3RFLGVBQStCLEVBQUUsZ0JBQStDOztRQUNsRixJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBRTdDLDBEQUEwRDtZQUMxRCxLQUFtQixJQUFBLHFCQUFBLGlCQUFBLGdCQUFnQixDQUFBLGtEQUFBLGdGQUFFO2dCQUFoQyxJQUFNLElBQUksNkJBQUE7Z0JBQ2IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxFQUFFLG9CQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDbkY7Ozs7Ozs7OztRQUVELDBGQUEwRjtRQUMxRixnREFBZ0Q7UUFDaEQsSUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3BGLElBQU0saUJBQWlCLEdBQUcsZ0NBQWdDO1lBQ3RELDRGQUE0RjtZQUM1RixzR0FBc0c7WUFDdEcsMEhBQTBIO1lBQzFILFFBQVE7WUFDUixXQUFXLENBQUM7UUFFaEIsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLGlCQUFpQixLQUFLLGlCQUFpQixDQUFDLEVBQUU7WUFDbEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDbEY7UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBM0JELDBDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGh9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge05HQ0NfUFJPUEVSVFlfRVhURU5TSU9OfSBmcm9tICcuLi93cml0aW5nL25ld19lbnRyeV9wb2ludF9maWxlX3dyaXRlcic7XG5pbXBvcnQge1BhY2thZ2VKc29uVXBkYXRlcn0gZnJvbSAnLi4vd3JpdGluZy9wYWNrYWdlX2pzb25fdXBkYXRlcic7XG5pbXBvcnQge0VudHJ5UG9pbnRQYWNrYWdlSnNvbiwgUGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzfSBmcm9tICcuL2VudHJ5X3BvaW50JztcblxuZXhwb3J0IGNvbnN0IE5HQ0NfVkVSU0lPTiA9ICcwLjAuMC1QTEFDRUhPTERFUic7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGEgZm9ybWF0IGluIHRoaXMgZW50cnktcG9pbnQgdGhhdCB3YXMgY29tcGlsZWQgd2l0aCBhbiBvdXRkYXRlZCB2ZXJzaW9uXG4gKiBvZiBuZ2NjLlxuICpcbiAqIEBwYXJhbSBwYWNrYWdlSnNvbiBUaGUgcGFyc2VkIGNvbnRlbnRzIG9mIHRoZSBwYWNrYWdlLmpzb24gZm9yIHRoZSBlbnRyeS1wb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVlZHNDbGVhbmluZyhwYWNrYWdlSnNvbjogRW50cnlQb2ludFBhY2thZ2VKc29uKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKHBhY2thZ2VKc29uLl9fcHJvY2Vzc2VkX2J5X2l2eV9uZ2NjX18gfHwge30pXG4gICAgICAuc29tZSh2YWx1ZSA9PiB2YWx1ZSAhPT0gTkdDQ19WRVJTSU9OKTtcbn1cblxuLyoqXG4gKiBDbGVhbiBhbnkgYnVpbGQgbWFya2VyIGFydGlmYWN0cyBmcm9tIHRoZSBnaXZlbiBgcGFja2FnZUpzb25gIG9iamVjdC5cbiAqIEBwYXJhbSBwYWNrYWdlSnNvbiBUaGUgcGFyc2VkIGNvbnRlbnRzIG9mIHRoZSBwYWNrYWdlLmpzb24gdG8gbW9kaWZ5XG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwYWNrYWdlIHdhcyBtb2RpZmllZCBkdXJpbmcgY2xlYW5pbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUGFja2FnZUpzb24ocGFja2FnZUpzb246IEVudHJ5UG9pbnRQYWNrYWdlSnNvbik6IGJvb2xlYW4ge1xuICBpZiAocGFja2FnZUpzb24uX19wcm9jZXNzZWRfYnlfaXZ5X25nY2NfXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBhY3R1YWwgbWFya2VyXG4gICAgZGVsZXRlIHBhY2thZ2VKc29uLl9fcHJvY2Vzc2VkX2J5X2l2eV9uZ2NjX187XG4gICAgLy8gUmVtb3ZlIG5ldyBmb3JtYXQgcHJvcGVydGllcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCBieSBuZ2NjXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHBhY2thZ2VKc29uKSkge1xuICAgICAgaWYgKHByb3AuZW5kc1dpdGgoTkdDQ19QUk9QRVJUWV9FWFRFTlNJT04pKSB7XG4gICAgICAgIGRlbGV0ZSBwYWNrYWdlSnNvbltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBbHNvIHJlbW92ZSB0aGUgcHJlYnVsaXNoIHNjcmlwdCBpZiB3ZSBtb2RpZmllZCBpdFxuICAgIGNvbnN0IHNjcmlwdHMgPSBwYWNrYWdlSnNvbi5zY3JpcHRzO1xuICAgIGlmIChzY3JpcHRzICE9PSB1bmRlZmluZWQgJiYgc2NyaXB0cy5wcmVwdWJsaXNoT25seSkge1xuICAgICAgZGVsZXRlIHNjcmlwdHMucHJlcHVibGlzaE9ubHk7XG4gICAgICBpZiAoc2NyaXB0cy5wcmVwdWJsaXNoT25seV9faXZ5X25nY2NfYmFrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2NyaXB0cy5wcmVwdWJsaXNoT25seSA9IHNjcmlwdHMucHJlcHVibGlzaE9ubHlfX2l2eV9uZ2NjX2JhaztcbiAgICAgICAgZGVsZXRlIHNjcmlwdHMucHJlcHVibGlzaE9ubHlfX2l2eV9uZ2NjX2JhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgbmdjYyBoYXMgYWxyZWFkeSBwcm9jZXNzZWQgYSBnaXZlbiBlbnRyeS1wb2ludCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHBhY2thZ2VKc29uIFRoZSBwYXJzZWQgY29udGVudHMgb2YgdGhlIHBhY2thZ2UuanNvbiBmaWxlIGZvciB0aGUgZW50cnktcG9pbnQuXG4gKiBAcGFyYW0gZm9ybWF0IFRoZSBlbnRyeS1wb2ludCBmb3JtYXQgcHJvcGVydHkgaW4gdGhlIHBhY2thZ2UuanNvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGBmb3JtYXRgIGluIHRoZSBlbnRyeS1wb2ludCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCBieSB0aGlzIG5nY2MgdmVyc2lvbixcbiAqIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0JlZW5Qcm9jZXNzZWQoXG4gICAgcGFja2FnZUpzb246IEVudHJ5UG9pbnRQYWNrYWdlSnNvbiwgZm9ybWF0OiBQYWNrYWdlSnNvbkZvcm1hdFByb3BlcnRpZXMpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhY2thZ2VKc29uLl9fcHJvY2Vzc2VkX2J5X2l2eV9uZ2NjX18gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgcGFja2FnZUpzb24uX19wcm9jZXNzZWRfYnlfaXZ5X25nY2NfX1tmb3JtYXRdID09PSBOR0NDX1ZFUlNJT047XG59XG5cbi8qKlxuICogV3JpdGUgYSBidWlsZCBtYXJrZXIgZm9yIHRoZSBnaXZlbiBlbnRyeS1wb2ludCBhbmQgZm9ybWF0IHByb3BlcnRpZXMsIHRvIGluZGljYXRlIHRoYXQgdGhleSBoYXZlXG4gKiBiZWVuIGNvbXBpbGVkIGJ5IHRoaXMgdmVyc2lvbiBvZiBuZ2NjLlxuICpcbiAqIEBwYXJhbSBwa2dKc29uVXBkYXRlciBUaGUgd3JpdGVyIHRvIHVzZSBmb3IgdXBkYXRpbmcgYHBhY2thZ2UuanNvbmAuXG4gKiBAcGFyYW0gcGFja2FnZUpzb24gVGhlIHBhcnNlZCBjb250ZW50cyBvZiB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZSBmb3IgdGhlIGVudHJ5LXBvaW50LlxuICogQHBhcmFtIHBhY2thZ2VKc29uUGF0aCBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZS5cbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIGluIHRoZSBgcGFja2FnZS5qc29uYCBvZiB0aGUgZm9ybWF0cyBmb3Igd2hpY2ggd2UgYXJlIHdyaXRpbmdcbiAqICAgICAgICAgICAgICAgICAgIHRoZSBtYXJrZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNQcm9jZXNzZWQoXG4gICAgcGtnSnNvblVwZGF0ZXI6IFBhY2thZ2VKc29uVXBkYXRlciwgcGFja2FnZUpzb246IEVudHJ5UG9pbnRQYWNrYWdlSnNvbixcbiAgICBwYWNrYWdlSnNvblBhdGg6IEFic29sdXRlRnNQYXRoLCBmb3JtYXRQcm9wZXJ0aWVzOiBQYWNrYWdlSnNvbkZvcm1hdFByb3BlcnRpZXNbXSk6IHZvaWQge1xuICBjb25zdCB1cGRhdGUgPSBwa2dKc29uVXBkYXRlci5jcmVhdGVVcGRhdGUoKTtcblxuICAvLyBVcGRhdGUgdGhlIGZvcm1hdCBwcm9wZXJ0aWVzIHRvIG1hcmsgdGhlbSBhcyBwcm9jZXNzZWQuXG4gIGZvciAoY29uc3QgcHJvcCBvZiBmb3JtYXRQcm9wZXJ0aWVzKSB7XG4gICAgdXBkYXRlLmFkZENoYW5nZShbJ19fcHJvY2Vzc2VkX2J5X2l2eV9uZ2NjX18nLCBwcm9wXSwgTkdDQ19WRVJTSU9OLCAnYWxwaGFiZXRpYycpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBgcHJlcHVibGlzaE9ubHlgIHNjcmlwdCAoa2VlcGluZyBhIGJhY2t1cCwgaWYgbmVjZXNzYXJ5KSB0byBwcmV2ZW50IGBuZ2NjYCdkXG4gIC8vIHBhY2thZ2VzIGZyb20gZ2V0dGluZyBhY2NpZGVudGFsbHkgcHVibGlzaGVkLlxuICBjb25zdCBvbGRQcmVwdWJsaXNoT25seSA9IHBhY2thZ2VKc29uLnNjcmlwdHMgJiYgcGFja2FnZUpzb24uc2NyaXB0cy5wcmVwdWJsaXNoT25seTtcbiAgY29uc3QgbmV3UHJlcHVibGlzaE9ubHkgPSAnbm9kZSAtLWV2YWwgXFxcImNvbnNvbGUuZXJyb3IoXFwnJyArXG4gICAgICAnRVJST1I6IFRyeWluZyB0byBwdWJsaXNoIGEgcGFja2FnZSB0aGF0IGhhcyBiZWVuIGNvbXBpbGVkIGJ5IE5HQ0MuIFRoaXMgaXMgbm90IGFsbG93ZWQuXFxcXG4nICtcbiAgICAgICdQbGVhc2UgZGVsZXRlIGFuZCByZWJ1aWxkIHRoZSBwYWNrYWdlLCB3aXRob3V0IGNvbXBpbGluZyB3aXRoIE5HQ0MsIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHB1Ymxpc2guXFxcXG4nICtcbiAgICAgICdOb3RlIHRoYXQgTkdDQyBtYXkgaGF2ZSBiZWVuIHJ1biBieSBpbXBvcnRpbmcgdGhpcyBwYWNrYWdlIGludG8gYW5vdGhlciBwcm9qZWN0IHRoYXQgaXMgYmVpbmcgYnVpbHQgd2l0aCBJdnkgZW5hYmxlZC5cXFxcbicgK1xuICAgICAgJ1xcJylcXFwiICcgK1xuICAgICAgJyYmIGV4aXQgMSc7XG5cbiAgaWYgKG9sZFByZXB1Ymxpc2hPbmx5ICYmIChvbGRQcmVwdWJsaXNoT25seSAhPT0gbmV3UHJlcHVibGlzaE9ubHkpKSB7XG4gICAgdXBkYXRlLmFkZENoYW5nZShbJ3NjcmlwdHMnLCAncHJlcHVibGlzaE9ubHlfX2l2eV9uZ2NjX2JhayddLCBvbGRQcmVwdWJsaXNoT25seSk7XG4gIH1cblxuICB1cGRhdGUuYWRkQ2hhbmdlKFsnc2NyaXB0cycsICdwcmVwdWJsaXNoT25seSddLCBuZXdQcmVwdWJsaXNoT25seSk7XG5cbiAgdXBkYXRlLndyaXRlQ2hhbmdlcyhwYWNrYWdlSnNvblBhdGgsIHBhY2thZ2VKc29uKTtcbn1cbiJdfQ==