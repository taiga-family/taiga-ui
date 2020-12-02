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
        define("@angular/cdk/schematics/utils/project-tsconfig-paths", ["require", "exports", "@angular-devkit/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular-devkit/core");
    /** Name of the default Angular CLI workspace configuration files. */
    const defaultWorkspaceConfigPaths = ['/angular.json', '/.angular.json'];
    /** Gets the tsconfig path from the given target within the specified project. */
    function getTargetTsconfigPath(project, targetName) {
        if (project.targets && project.targets[targetName] && project.targets[targetName].options &&
            project.targets[targetName].options.tsConfig) {
            return core_1.normalize(project.targets[targetName].options.tsConfig);
        }
        if (project.architect && project.architect[targetName] && project.architect[targetName].options &&
            project.architect[targetName].options.tsConfig) {
            return core_1.normalize(project.architect[targetName].options.tsConfig);
        }
        return null;
    }
    exports.getTargetTsconfigPath = getTargetTsconfigPath;
    /**
     * Resolve the workspace configuration of the specified tree gracefully. We cannot use the utility
     * functions from the default Angular schematics because those might not be present in older
     * versions of the CLI. Also it's important to resolve the workspace gracefully because
     * the CLI project could be still using `.angular-cli.json` instead of thew new config.
     */
    function getWorkspaceConfigGracefully(tree) {
        const path = defaultWorkspaceConfigPaths.find(filePath => tree.exists(filePath));
        const configBuffer = tree.read(path);
        if (!path || !configBuffer) {
            return null;
        }
        try {
            // Parse the workspace file as JSON5 which is also supported for CLI
            // workspace configurations.
            return core_1.parseJson(configBuffer.toString(), core_1.JsonParseMode.Json5);
        }
        catch (e) {
            return null;
        }
    }
    exports.getWorkspaceConfigGracefully = getWorkspaceConfigGracefully;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10c2NvbmZpZy1wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91dGlscy9wcm9qZWN0LXRzY29uZmlnLXBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsK0NBQXlFO0lBSXpFLHFFQUFxRTtJQUNyRSxNQUFNLDJCQUEyQixHQUFHLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFeEUsaUZBQWlGO0lBQ2pGLFNBQWdCLHFCQUFxQixDQUFDLE9BQXlCLEVBQUUsVUFBa0I7UUFDakYsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPO1lBQ3JGLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNoRCxPQUFPLGdCQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87WUFDM0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ2xELE9BQU8sZ0JBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVhELHNEQVdDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQiw0QkFBNEIsQ0FBQyxJQUFVO1FBQ3JELE1BQU0sSUFBSSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUk7WUFDRixvRUFBb0U7WUFDcEUsNEJBQTRCO1lBQzVCLE9BQU8sZ0JBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsb0JBQWEsQ0FBQyxLQUFLLENBQStCLENBQUM7U0FDOUY7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBZkQsb0VBZUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtKc29uUGFyc2VNb2RlLCBub3JtYWxpemUsIHBhcnNlSnNvbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHtUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge1dvcmtzcGFjZVByb2plY3QsIFdvcmtzcGFjZVNjaGVtYX0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L3dvcmtzcGFjZS1tb2RlbHMnO1xuXG4vKiogTmFtZSBvZiB0aGUgZGVmYXVsdCBBbmd1bGFyIENMSSB3b3Jrc3BhY2UgY29uZmlndXJhdGlvbiBmaWxlcy4gKi9cbmNvbnN0IGRlZmF1bHRXb3Jrc3BhY2VDb25maWdQYXRocyA9IFsnL2FuZ3VsYXIuanNvbicsICcvLmFuZ3VsYXIuanNvbiddO1xuXG4vKiogR2V0cyB0aGUgdHNjb25maWcgcGF0aCBmcm9tIHRoZSBnaXZlbiB0YXJnZXQgd2l0aGluIHRoZSBzcGVjaWZpZWQgcHJvamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRUc2NvbmZpZ1BhdGgocHJvamVjdDogV29ya3NwYWNlUHJvamVjdCwgdGFyZ2V0TmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICBpZiAocHJvamVjdC50YXJnZXRzICYmIHByb2plY3QudGFyZ2V0c1t0YXJnZXROYW1lXSAmJiBwcm9qZWN0LnRhcmdldHNbdGFyZ2V0TmFtZV0ub3B0aW9ucyAmJlxuICAgICAgcHJvamVjdC50YXJnZXRzW3RhcmdldE5hbWVdLm9wdGlvbnMudHNDb25maWcpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKHByb2plY3QudGFyZ2V0c1t0YXJnZXROYW1lXS5vcHRpb25zLnRzQ29uZmlnKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0LmFyY2hpdGVjdCAmJiBwcm9qZWN0LmFyY2hpdGVjdFt0YXJnZXROYW1lXSAmJiBwcm9qZWN0LmFyY2hpdGVjdFt0YXJnZXROYW1lXS5vcHRpb25zICYmXG4gICAgICBwcm9qZWN0LmFyY2hpdGVjdFt0YXJnZXROYW1lXS5vcHRpb25zLnRzQ29uZmlnKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwcm9qZWN0LmFyY2hpdGVjdFt0YXJnZXROYW1lXS5vcHRpb25zLnRzQ29uZmlnKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIHRoZSB3b3Jrc3BhY2UgY29uZmlndXJhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIHRyZWUgZ3JhY2VmdWxseS4gV2UgY2Fubm90IHVzZSB0aGUgdXRpbGl0eVxuICogZnVuY3Rpb25zIGZyb20gdGhlIGRlZmF1bHQgQW5ndWxhciBzY2hlbWF0aWNzIGJlY2F1c2UgdGhvc2UgbWlnaHQgbm90IGJlIHByZXNlbnQgaW4gb2xkZXJcbiAqIHZlcnNpb25zIG9mIHRoZSBDTEkuIEFsc28gaXQncyBpbXBvcnRhbnQgdG8gcmVzb2x2ZSB0aGUgd29ya3NwYWNlIGdyYWNlZnVsbHkgYmVjYXVzZVxuICogdGhlIENMSSBwcm9qZWN0IGNvdWxkIGJlIHN0aWxsIHVzaW5nIGAuYW5ndWxhci1jbGkuanNvbmAgaW5zdGVhZCBvZiB0aGV3IG5ldyBjb25maWcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3Jrc3BhY2VDb25maWdHcmFjZWZ1bGx5KHRyZWU6IFRyZWUpOiBudWxsfFdvcmtzcGFjZVNjaGVtYSB7XG4gIGNvbnN0IHBhdGggPSBkZWZhdWx0V29ya3NwYWNlQ29uZmlnUGF0aHMuZmluZChmaWxlUGF0aCA9PiB0cmVlLmV4aXN0cyhmaWxlUGF0aCkpO1xuICBjb25zdCBjb25maWdCdWZmZXIgPSB0cmVlLnJlYWQocGF0aCEpO1xuXG4gIGlmICghcGF0aCB8fCAhY29uZmlnQnVmZmVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFBhcnNlIHRoZSB3b3Jrc3BhY2UgZmlsZSBhcyBKU09ONSB3aGljaCBpcyBhbHNvIHN1cHBvcnRlZCBmb3IgQ0xJXG4gICAgLy8gd29ya3NwYWNlIGNvbmZpZ3VyYXRpb25zLlxuICAgIHJldHVybiBwYXJzZUpzb24oY29uZmlnQnVmZmVyLnRvU3RyaW5nKCksIEpzb25QYXJzZU1vZGUuSnNvbjUpIGFzIHVua25vd24gYXMgV29ya3NwYWNlU2NoZW1hO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==