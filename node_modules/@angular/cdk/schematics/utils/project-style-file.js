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
        define("@angular/cdk/schematics/utils/project-style-file", ["require", "exports", "@angular-devkit/core", "@angular/cdk/schematics/utils/project-targets"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular-devkit/core");
    const project_targets_1 = require("@angular/cdk/schematics/utils/project-targets");
    /** Regular expression that matches all possible Angular CLI default style files. */
    const defaultStyleFileRegex = /styles\.(c|le|sc)ss/;
    /** Regular expression that matches all files that have a proper stylesheet extension. */
    const validStyleFileRegex = /\.(c|le|sc)ss/;
    /**
     * Gets a style file with the given extension in a project and returns its path. If no
     * extension is specified, any style file with a valid extension will be returned.
     */
    function getProjectStyleFile(project, extension) {
        const buildOptions = project_targets_1.getProjectTargetOptions(project, 'build');
        if (buildOptions.styles && buildOptions.styles.length) {
            const styles = buildOptions.styles.map(s => typeof s === 'string' ? s : s.input);
            // Look for the default style file that is generated for new projects by the Angular CLI. This
            // default style file is usually called `styles.ext` unless it has been changed explicitly.
            const defaultMainStylePath = styles
                .find(file => extension ? file === `styles.${extension}` : defaultStyleFileRegex.test(file));
            if (defaultMainStylePath) {
                return core_1.normalize(defaultMainStylePath);
            }
            // If no default style file could be found, use the first style file that matches the given
            // extension. If no extension specified explicitly, we look for any file with a valid style
            // file extension.
            const fallbackStylePath = styles
                .find(file => extension ? file.endsWith(`.${extension}`) : validStyleFileRegex.test(file));
            if (fallbackStylePath) {
                return core_1.normalize(fallbackStylePath);
            }
        }
        return null;
    }
    exports.getProjectStyleFile = getProjectStyleFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1zdHlsZS1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3V0aWxzL3Byb2plY3Qtc3R5bGUtZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtDQUErQztJQUUvQyxtRkFBMEQ7SUFFMUQsb0ZBQW9GO0lBQ3BGLE1BQU0scUJBQXFCLEdBQUcscUJBQXFCLENBQUM7SUFFcEQseUZBQXlGO0lBQ3pGLE1BQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0lBRTVDOzs7T0FHRztJQUNILFNBQWdCLG1CQUFtQixDQUFDLE9BQXlCLEVBQUUsU0FBa0I7UUFDL0UsTUFBTSxZQUFZLEdBQUcseUNBQXVCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9ELElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNyRCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakYsOEZBQThGO1lBQzlGLDJGQUEyRjtZQUMzRixNQUFNLG9CQUFvQixHQUFHLE1BQU07aUJBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRS9GLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLE9BQU8sZ0JBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsMkZBQTJGO1lBQzNGLDJGQUEyRjtZQUMzRixrQkFBa0I7WUFDbEIsTUFBTSxpQkFBaUIsR0FBRyxNQUFNO2lCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU3RixJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixPQUFPLGdCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNyQztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBM0JELGtEQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge25vcm1hbGl6ZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHtXb3Jrc3BhY2VQcm9qZWN0fSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvZXhwZXJpbWVudGFsL3dvcmtzcGFjZSc7XG5pbXBvcnQge2dldFByb2plY3RUYXJnZXRPcHRpb25zfSBmcm9tICcuL3Byb2plY3QtdGFyZ2V0cyc7XG5cbi8qKiBSZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIGFsbCBwb3NzaWJsZSBBbmd1bGFyIENMSSBkZWZhdWx0IHN0eWxlIGZpbGVzLiAqL1xuY29uc3QgZGVmYXVsdFN0eWxlRmlsZVJlZ2V4ID0gL3N0eWxlc1xcLihjfGxlfHNjKXNzLztcblxuLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgYWxsIGZpbGVzIHRoYXQgaGF2ZSBhIHByb3BlciBzdHlsZXNoZWV0IGV4dGVuc2lvbi4gKi9cbmNvbnN0IHZhbGlkU3R5bGVGaWxlUmVnZXggPSAvXFwuKGN8bGV8c2Mpc3MvO1xuXG4vKipcbiAqIEdldHMgYSBzdHlsZSBmaWxlIHdpdGggdGhlIGdpdmVuIGV4dGVuc2lvbiBpbiBhIHByb2plY3QgYW5kIHJldHVybnMgaXRzIHBhdGguIElmIG5vXG4gKiBleHRlbnNpb24gaXMgc3BlY2lmaWVkLCBhbnkgc3R5bGUgZmlsZSB3aXRoIGEgdmFsaWQgZXh0ZW5zaW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0U3R5bGVGaWxlKHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QsIGV4dGVuc2lvbj86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBidWlsZE9wdGlvbnMgPSBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyhwcm9qZWN0LCAnYnVpbGQnKTtcblxuICBpZiAoYnVpbGRPcHRpb25zLnN0eWxlcyAmJiBidWlsZE9wdGlvbnMuc3R5bGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IGJ1aWxkT3B0aW9ucy5zdHlsZXMubWFwKHMgPT4gdHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcyA6IHMuaW5wdXQpO1xuXG4gICAgLy8gTG9vayBmb3IgdGhlIGRlZmF1bHQgc3R5bGUgZmlsZSB0aGF0IGlzIGdlbmVyYXRlZCBmb3IgbmV3IHByb2plY3RzIGJ5IHRoZSBBbmd1bGFyIENMSS4gVGhpc1xuICAgIC8vIGRlZmF1bHQgc3R5bGUgZmlsZSBpcyB1c3VhbGx5IGNhbGxlZCBgc3R5bGVzLmV4dGAgdW5sZXNzIGl0IGhhcyBiZWVuIGNoYW5nZWQgZXhwbGljaXRseS5cbiAgICBjb25zdCBkZWZhdWx0TWFpblN0eWxlUGF0aCA9IHN0eWxlc1xuICAgICAgLmZpbmQoZmlsZSA9PiBleHRlbnNpb24gPyBmaWxlID09PSBgc3R5bGVzLiR7ZXh0ZW5zaW9ufWAgOiBkZWZhdWx0U3R5bGVGaWxlUmVnZXgudGVzdChmaWxlKSk7XG5cbiAgICBpZiAoZGVmYXVsdE1haW5TdHlsZVBhdGgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemUoZGVmYXVsdE1haW5TdHlsZVBhdGgpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIGRlZmF1bHQgc3R5bGUgZmlsZSBjb3VsZCBiZSBmb3VuZCwgdXNlIHRoZSBmaXJzdCBzdHlsZSBmaWxlIHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW5cbiAgICAvLyBleHRlbnNpb24uIElmIG5vIGV4dGVuc2lvbiBzcGVjaWZpZWQgZXhwbGljaXRseSwgd2UgbG9vayBmb3IgYW55IGZpbGUgd2l0aCBhIHZhbGlkIHN0eWxlXG4gICAgLy8gZmlsZSBleHRlbnNpb24uXG4gICAgY29uc3QgZmFsbGJhY2tTdHlsZVBhdGggPSBzdHlsZXNcbiAgICAgIC5maW5kKGZpbGUgPT4gZXh0ZW5zaW9uID8gZmlsZS5lbmRzV2l0aChgLiR7ZXh0ZW5zaW9ufWApIDogdmFsaWRTdHlsZUZpbGVSZWdleC50ZXN0KGZpbGUpKTtcblxuICAgIGlmIChmYWxsYmFja1N0eWxlUGF0aCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZShmYWxsYmFja1N0eWxlUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=