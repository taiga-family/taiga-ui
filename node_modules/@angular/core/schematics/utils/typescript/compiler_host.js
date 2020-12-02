(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/core/schematics/utils/typescript/compiler_host", ["require", "exports", "path", "typescript", "@angular/core/schematics/utils/typescript/parse_tsconfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const path_1 = require("path");
    const ts = require("typescript");
    const parse_tsconfig_1 = require("@angular/core/schematics/utils/typescript/parse_tsconfig");
    /**
     * Creates a TypeScript program instance for a TypeScript project within
     * the virtual file system tree.
     * @param tree Virtual file system tree that contains the source files.
     * @param tsconfigPath Virtual file system path that resolves to the TypeScript project.
     * @param basePath Base path for the virtual file system tree.
     * @param fakeFileRead Optional file reader function. Can be used to overwrite files in
     *   the TypeScript program, or to add in-memory files (e.g. to add global types).
     * @param additionalFiles Additional file paths that should be added to the program.
     */
    function createMigrationProgram(tree, tsconfigPath, basePath, fakeFileRead, additionalFiles) {
        // Resolve the tsconfig path to an absolute path. This is needed as TypeScript otherwise
        // is not able to resolve root directories in the given tsconfig. More details can be found
        // in the following issue: https://github.com/microsoft/TypeScript/issues/37731.
        tsconfigPath = path_1.resolve(basePath, tsconfigPath);
        const parsed = parse_tsconfig_1.parseTsconfigFile(tsconfigPath, path_1.dirname(tsconfigPath));
        const host = createMigrationCompilerHost(tree, parsed.options, basePath, fakeFileRead);
        const program = ts.createProgram(parsed.fileNames.concat(additionalFiles || []), parsed.options, host);
        return { parsed, host, program };
    }
    exports.createMigrationProgram = createMigrationProgram;
    function createMigrationCompilerHost(tree, options, basePath, fakeRead) {
        const host = ts.createCompilerHost(options, true);
        // We need to overwrite the host "readFile" method, as we want the TypeScript
        // program to be based on the file contents in the virtual file tree. Otherwise
        // if we run multiple migrations we might have intersecting changes and
        // source files.
        host.readFile = fileName => {
            const treeRelativePath = path_1.relative(basePath, fileName);
            const fakeOutput = fakeRead ? fakeRead(treeRelativePath) : null;
            const buffer = fakeOutput === null ? tree.read(treeRelativePath) : fakeOutput;
            // Strip BOM as otherwise TSC methods (Ex: getWidth) will return an offset,
            // which breaks the CLI UpdateRecorder.
            // See: https://github.com/angular/angular/pull/30719
            return buffer ? buffer.toString().replace(/^\uFEFF/, '') : undefined;
        };
        return host;
    }
    exports.createMigrationCompilerHost = createMigrationCompilerHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc2NoZW1hdGljcy91dGlscy90eXBlc2NyaXB0L2NvbXBpbGVyX2hvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQSwrQkFBZ0Q7SUFDaEQsaUNBQWlDO0lBQ2pDLDZGQUFtRDtJQUluRDs7Ozs7Ozs7O09BU0c7SUFDSCxTQUFnQixzQkFBc0IsQ0FDbEMsSUFBVSxFQUFFLFlBQW9CLEVBQUUsUUFBZ0IsRUFBRSxZQUE2QixFQUNqRixlQUEwQjtRQUM1Qix3RkFBd0Y7UUFDeEYsMkZBQTJGO1FBQzNGLGdGQUFnRjtRQUNoRixZQUFZLEdBQUcsY0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxrQ0FBaUIsQ0FBQyxZQUFZLEVBQUUsY0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxJQUFJLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sT0FBTyxHQUNULEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDakMsQ0FBQztJQVpELHdEQVlDO0lBRUQsU0FBZ0IsMkJBQTJCLENBQ3ZDLElBQVUsRUFBRSxPQUEyQixFQUFFLFFBQWdCLEVBQ3pELFFBQXlCO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsNkVBQTZFO1FBQzdFLCtFQUErRTtRQUMvRSx1RUFBdUU7UUFDdkUsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUU7WUFDekIsTUFBTSxnQkFBZ0IsR0FBRyxlQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRSxNQUFNLE1BQU0sR0FBRyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUM5RSwyRUFBMkU7WUFDM0UsdUNBQXVDO1lBQ3ZDLHFEQUFxRDtZQUNyRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFwQkQsa0VBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge2Rpcm5hbWUsIHJlbGF0aXZlLCByZXNvbHZlfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtwYXJzZVRzY29uZmlnRmlsZX0gZnJvbSAnLi9wYXJzZV90c2NvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIEZha2VSZWFkRmlsZUZuID0gKGZpbGVOYW1lOiBzdHJpbmcpID0+IHN0cmluZ3xudWxsO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBUeXBlU2NyaXB0IHByb2dyYW0gaW5zdGFuY2UgZm9yIGEgVHlwZVNjcmlwdCBwcm9qZWN0IHdpdGhpblxuICogdGhlIHZpcnR1YWwgZmlsZSBzeXN0ZW0gdHJlZS5cbiAqIEBwYXJhbSB0cmVlIFZpcnR1YWwgZmlsZSBzeXN0ZW0gdHJlZSB0aGF0IGNvbnRhaW5zIHRoZSBzb3VyY2UgZmlsZXMuXG4gKiBAcGFyYW0gdHNjb25maWdQYXRoIFZpcnR1YWwgZmlsZSBzeXN0ZW0gcGF0aCB0aGF0IHJlc29sdmVzIHRvIHRoZSBUeXBlU2NyaXB0IHByb2plY3QuXG4gKiBAcGFyYW0gYmFzZVBhdGggQmFzZSBwYXRoIGZvciB0aGUgdmlydHVhbCBmaWxlIHN5c3RlbSB0cmVlLlxuICogQHBhcmFtIGZha2VGaWxlUmVhZCBPcHRpb25hbCBmaWxlIHJlYWRlciBmdW5jdGlvbi4gQ2FuIGJlIHVzZWQgdG8gb3ZlcndyaXRlIGZpbGVzIGluXG4gKiAgIHRoZSBUeXBlU2NyaXB0IHByb2dyYW0sIG9yIHRvIGFkZCBpbi1tZW1vcnkgZmlsZXMgKGUuZy4gdG8gYWRkIGdsb2JhbCB0eXBlcykuXG4gKiBAcGFyYW0gYWRkaXRpb25hbEZpbGVzIEFkZGl0aW9uYWwgZmlsZSBwYXRocyB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgcHJvZ3JhbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGlvblByb2dyYW0oXG4gICAgdHJlZTogVHJlZSwgdHNjb25maWdQYXRoOiBzdHJpbmcsIGJhc2VQYXRoOiBzdHJpbmcsIGZha2VGaWxlUmVhZD86IEZha2VSZWFkRmlsZUZuLFxuICAgIGFkZGl0aW9uYWxGaWxlcz86IHN0cmluZ1tdKSB7XG4gIC8vIFJlc29sdmUgdGhlIHRzY29uZmlnIHBhdGggdG8gYW4gYWJzb2x1dGUgcGF0aC4gVGhpcyBpcyBuZWVkZWQgYXMgVHlwZVNjcmlwdCBvdGhlcndpc2VcbiAgLy8gaXMgbm90IGFibGUgdG8gcmVzb2x2ZSByb290IGRpcmVjdG9yaWVzIGluIHRoZSBnaXZlbiB0c2NvbmZpZy4gTW9yZSBkZXRhaWxzIGNhbiBiZSBmb3VuZFxuICAvLyBpbiB0aGUgZm9sbG93aW5nIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM3NzMxLlxuICB0c2NvbmZpZ1BhdGggPSByZXNvbHZlKGJhc2VQYXRoLCB0c2NvbmZpZ1BhdGgpO1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZVRzY29uZmlnRmlsZSh0c2NvbmZpZ1BhdGgsIGRpcm5hbWUodHNjb25maWdQYXRoKSk7XG4gIGNvbnN0IGhvc3QgPSBjcmVhdGVNaWdyYXRpb25Db21waWxlckhvc3QodHJlZSwgcGFyc2VkLm9wdGlvbnMsIGJhc2VQYXRoLCBmYWtlRmlsZVJlYWQpO1xuICBjb25zdCBwcm9ncmFtID1cbiAgICAgIHRzLmNyZWF0ZVByb2dyYW0ocGFyc2VkLmZpbGVOYW1lcy5jb25jYXQoYWRkaXRpb25hbEZpbGVzIHx8IFtdKSwgcGFyc2VkLm9wdGlvbnMsIGhvc3QpO1xuICByZXR1cm4ge3BhcnNlZCwgaG9zdCwgcHJvZ3JhbX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaWdyYXRpb25Db21waWxlckhvc3QoXG4gICAgdHJlZTogVHJlZSwgb3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zLCBiYXNlUGF0aDogc3RyaW5nLFxuICAgIGZha2VSZWFkPzogRmFrZVJlYWRGaWxlRm4pOiB0cy5Db21waWxlckhvc3Qge1xuICBjb25zdCBob3N0ID0gdHMuY3JlYXRlQ29tcGlsZXJIb3N0KG9wdGlvbnMsIHRydWUpO1xuXG4gIC8vIFdlIG5lZWQgdG8gb3ZlcndyaXRlIHRoZSBob3N0IFwicmVhZEZpbGVcIiBtZXRob2QsIGFzIHdlIHdhbnQgdGhlIFR5cGVTY3JpcHRcbiAgLy8gcHJvZ3JhbSB0byBiZSBiYXNlZCBvbiB0aGUgZmlsZSBjb250ZW50cyBpbiB0aGUgdmlydHVhbCBmaWxlIHRyZWUuIE90aGVyd2lzZVxuICAvLyBpZiB3ZSBydW4gbXVsdGlwbGUgbWlncmF0aW9ucyB3ZSBtaWdodCBoYXZlIGludGVyc2VjdGluZyBjaGFuZ2VzIGFuZFxuICAvLyBzb3VyY2UgZmlsZXMuXG4gIGhvc3QucmVhZEZpbGUgPSBmaWxlTmFtZSA9PiB7XG4gICAgY29uc3QgdHJlZVJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlKGJhc2VQYXRoLCBmaWxlTmFtZSk7XG4gICAgY29uc3QgZmFrZU91dHB1dCA9IGZha2VSZWFkID8gZmFrZVJlYWQodHJlZVJlbGF0aXZlUGF0aCkgOiBudWxsO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGZha2VPdXRwdXQgPT09IG51bGwgPyB0cmVlLnJlYWQodHJlZVJlbGF0aXZlUGF0aCkgOiBmYWtlT3V0cHV0O1xuICAgIC8vIFN0cmlwIEJPTSBhcyBvdGhlcndpc2UgVFNDIG1ldGhvZHMgKEV4OiBnZXRXaWR0aCkgd2lsbCByZXR1cm4gYW4gb2Zmc2V0LFxuICAgIC8vIHdoaWNoIGJyZWFrcyB0aGUgQ0xJIFVwZGF0ZVJlY29yZGVyLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzMwNzE5XG4gICAgcmV0dXJuIGJ1ZmZlciA/IGJ1ZmZlci50b1N0cmluZygpLnJlcGxhY2UoL15cXHVGRUZGLywgJycpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBob3N0O1xufVxuIl19