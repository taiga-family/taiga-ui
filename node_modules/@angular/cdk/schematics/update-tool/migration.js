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
        define("@angular/cdk/schematics/update-tool/migration", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    class Migration {
        constructor(
        /** TypeScript program for the migration. */
        program, 
        /** TypeChecker instance for the analysis program. */
        typeChecker, 
        /** Version for which the migration rule should run. */
        targetVersion, 
        /** Context data for the migration. */
        context, 
        /** Upgrade data passed to the migration. */
        upgradeData, 
        /** File system that can be used for modifying files. */
        fileSystem, 
        /** Logger that can be used to print messages as part of the migration. */
        logger) {
            this.program = program;
            this.typeChecker = typeChecker;
            this.targetVersion = targetVersion;
            this.context = context;
            this.upgradeData = upgradeData;
            this.fileSystem = fileSystem;
            this.logger = logger;
            /** List of migration failures that need to be reported. */
            this.failures = [];
        }
        /** Method can be used to perform global analysis of the program. */
        init() { }
        /**
         * Method that will be called once all nodes, templates and stylesheets
         * have been visited.
         */
        postAnalysis() { }
        /**
         * Method that will be called for each node in a given source file. Unlike tslint, this
         * function will only retrieve TypeScript nodes that need to be casted manually. This
         * allows us to only walk the program source files once per program and not per
         * migration rule (significant performance boost).
         */
        visitNode(node) { }
        /** Method that will be called for each Angular template in the program. */
        visitTemplate(template) { }
        /** Method that will be called for each stylesheet in the program. */
        visitStylesheet(stylesheet) { }
        /** Creates a failure with a specified message at the given node location. */
        createFailureAtNode(node, message) {
            const sourceFile = node.getSourceFile();
            this.failures.push({
                filePath: sourceFile.fileName,
                position: ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()),
                message: message,
            });
        }
    }
    exports.Migration = Migration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3VwZGF0ZS10b29sL21pZ3JhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILGlDQUFpQztJQXVCakMsTUFBc0IsU0FBUztRQU83QjtRQUNJLDRDQUE0QztRQUNyQyxPQUFtQjtRQUMxQixxREFBcUQ7UUFDOUMsV0FBMkI7UUFDbEMsdURBQXVEO1FBQ2hELGFBQTRCO1FBQ25DLHNDQUFzQztRQUMvQixPQUFnQjtRQUN2Qiw0Q0FBNEM7UUFDckMsV0FBaUI7UUFDeEIsd0RBQXdEO1FBQ2pELFVBQXNCO1FBQzdCLDBFQUEwRTtRQUNuRSxNQUFvQjtZQVpwQixZQUFPLEdBQVAsT0FBTyxDQUFZO1lBRW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtZQUUzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUU1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1lBRWhCLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1lBRWpCLGVBQVUsR0FBVixVQUFVLENBQVk7WUFFdEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztZQXBCL0IsMkRBQTJEO1lBQzNELGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBbUJBLENBQUM7UUFFbkMsb0VBQW9FO1FBQ3BFLElBQUksS0FBVSxDQUFDO1FBRWY7OztXQUdHO1FBQ0gsWUFBWSxLQUFVLENBQUM7UUFFdkI7Ozs7O1dBS0c7UUFDSCxTQUFTLENBQUMsSUFBYSxJQUFTLENBQUM7UUFFakMsMkVBQTJFO1FBQzNFLGFBQWEsQ0FBQyxRQUEwQixJQUFTLENBQUM7UUFFbEQscUVBQXFFO1FBQ3JFLGVBQWUsQ0FBQyxVQUE0QixJQUFTLENBQUM7UUFFdEQsNkVBQTZFO1FBQ25FLG1CQUFtQixDQUFDLElBQWEsRUFBRSxPQUFlO1lBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRO2dCQUM3QixRQUFRLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZFLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQXZERCw4QkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge1Jlc29sdmVkUmVzb3VyY2V9IGZyb20gJy4vY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge0ZpbGVTeXN0ZW19IGZyb20gJy4vZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHtVcGRhdGVMb2dnZXJ9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7VGFyZ2V0VmVyc2lvbn0gZnJvbSAnLi90YXJnZXQtdmVyc2lvbic7XG5pbXBvcnQge0xpbmVBbmRDaGFyYWN0ZXJ9IGZyb20gJy4vdXRpbHMvbGluZS1tYXBwaW5ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlncmF0aW9uRmFpbHVyZSB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcG9zaXRpb24/OiBMaW5lQW5kQ2hhcmFjdGVyO1xufVxuXG5leHBvcnQgdHlwZSBQb3N0TWlncmF0aW9uQWN0aW9uID0gdm9pZCB8IHtcbiAgLyoqIFdoZXRoZXIgdGhlIHBhY2thZ2UgbWFuYWdlciBzaG91bGQgcnVuIHVwb24gbWlncmF0aW9uIGNvbXBsZXRpb24uICovXG4gIHJ1blBhY2thZ2VNYW5hZ2VyOiBib29sZWFuO1xufTtcblxuLyoqIENyZWF0ZXMgYSBjb25zdHJ1Y3RvciB0eXBlIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUuICovXG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IChuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUKTtcbi8qKiBHZXRzIGEgY29uc3RydWN0b3IgdHlwZSBmb3IgdGhlIHBhc3NlZCBtaWdyYXRpb24gZGF0YS4gKi9cbmV4cG9ydCB0eXBlIE1pZ3JhdGlvbkN0b3I8RGF0YSwgQ29udGV4dCA9IG5ldmVyPiA9IENvbnN0cnVjdG9yPE1pZ3JhdGlvbjxEYXRhLCBDb250ZXh0Pj47XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNaWdyYXRpb248RGF0YSwgQ29udGV4dCA9IG5ldmVyPiB7XG4gIC8qKiBMaXN0IG9mIG1pZ3JhdGlvbiBmYWlsdXJlcyB0aGF0IG5lZWQgdG8gYmUgcmVwb3J0ZWQuICovXG4gIGZhaWx1cmVzOiBNaWdyYXRpb25GYWlsdXJlW10gPSBbXTtcblxuICAvKiogV2hldGhlciB0aGUgbWlncmF0aW9uIGlzIGVuYWJsZWQgb3Igbm90LiAqL1xuICBhYnN0cmFjdCBlbmFibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFR5cGVTY3JpcHQgcHJvZ3JhbSBmb3IgdGhlIG1pZ3JhdGlvbi4gKi9cbiAgICAgIHB1YmxpYyBwcm9ncmFtOiB0cy5Qcm9ncmFtLFxuICAgICAgLyoqIFR5cGVDaGVja2VyIGluc3RhbmNlIGZvciB0aGUgYW5hbHlzaXMgcHJvZ3JhbS4gKi9cbiAgICAgIHB1YmxpYyB0eXBlQ2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsXG4gICAgICAvKiogVmVyc2lvbiBmb3Igd2hpY2ggdGhlIG1pZ3JhdGlvbiBydWxlIHNob3VsZCBydW4uICovXG4gICAgICBwdWJsaWMgdGFyZ2V0VmVyc2lvbjogVGFyZ2V0VmVyc2lvbixcbiAgICAgIC8qKiBDb250ZXh0IGRhdGEgZm9yIHRoZSBtaWdyYXRpb24uICovXG4gICAgICBwdWJsaWMgY29udGV4dDogQ29udGV4dCxcbiAgICAgIC8qKiBVcGdyYWRlIGRhdGEgcGFzc2VkIHRvIHRoZSBtaWdyYXRpb24uICovXG4gICAgICBwdWJsaWMgdXBncmFkZURhdGE6IERhdGEsXG4gICAgICAvKiogRmlsZSBzeXN0ZW0gdGhhdCBjYW4gYmUgdXNlZCBmb3IgbW9kaWZ5aW5nIGZpbGVzLiAqL1xuICAgICAgcHVibGljIGZpbGVTeXN0ZW06IEZpbGVTeXN0ZW0sXG4gICAgICAvKiogTG9nZ2VyIHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJpbnQgbWVzc2FnZXMgYXMgcGFydCBvZiB0aGUgbWlncmF0aW9uLiAqL1xuICAgICAgcHVibGljIGxvZ2dlcjogVXBkYXRlTG9nZ2VyKSB7fVxuXG4gIC8qKiBNZXRob2QgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBnbG9iYWwgYW5hbHlzaXMgb2YgdGhlIHByb2dyYW0uICovXG4gIGluaXQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbmNlIGFsbCBub2RlcywgdGVtcGxhdGVzIGFuZCBzdHlsZXNoZWV0c1xuICAgKiBoYXZlIGJlZW4gdmlzaXRlZC5cbiAgICovXG4gIHBvc3RBbmFseXNpcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIG5vZGUgaW4gYSBnaXZlbiBzb3VyY2UgZmlsZS4gVW5saWtlIHRzbGludCwgdGhpc1xuICAgKiBmdW5jdGlvbiB3aWxsIG9ubHkgcmV0cmlldmUgVHlwZVNjcmlwdCBub2RlcyB0aGF0IG5lZWQgdG8gYmUgY2FzdGVkIG1hbnVhbGx5LiBUaGlzXG4gICAqIGFsbG93cyB1cyB0byBvbmx5IHdhbGsgdGhlIHByb2dyYW0gc291cmNlIGZpbGVzIG9uY2UgcGVyIHByb2dyYW0gYW5kIG5vdCBwZXJcbiAgICogbWlncmF0aW9uIHJ1bGUgKHNpZ25pZmljYW50IHBlcmZvcm1hbmNlIGJvb3N0KS5cbiAgICovXG4gIHZpc2l0Tm9kZShub2RlOiB0cy5Ob2RlKTogdm9pZCB7fVxuXG4gIC8qKiBNZXRob2QgdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBBbmd1bGFyIHRlbXBsYXRlIGluIHRoZSBwcm9ncmFtLiAqL1xuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiBSZXNvbHZlZFJlc291cmNlKTogdm9pZCB7fVxuXG4gIC8qKiBNZXRob2QgdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBzdHlsZXNoZWV0IGluIHRoZSBwcm9ncmFtLiAqL1xuICB2aXNpdFN0eWxlc2hlZXQoc3R5bGVzaGVldDogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge31cblxuICAvKiogQ3JlYXRlcyBhIGZhaWx1cmUgd2l0aCBhIHNwZWNpZmllZCBtZXNzYWdlIGF0IHRoZSBnaXZlbiBub2RlIGxvY2F0aW9uLiAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRmFpbHVyZUF0Tm9kZShub2RlOiB0cy5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzb3VyY2VGaWxlID0gbm9kZS5nZXRTb3VyY2VGaWxlKCk7XG4gICAgdGhpcy5mYWlsdXJlcy5wdXNoKHtcbiAgICAgIGZpbGVQYXRoOiBzb3VyY2VGaWxlLmZpbGVOYW1lLFxuICAgICAgcG9zaXRpb246IHRzLmdldExpbmVBbmRDaGFyYWN0ZXJPZlBvc2l0aW9uKHNvdXJjZUZpbGUsIG5vZGUuZ2V0U3RhcnQoKSksXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=