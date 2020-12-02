/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
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
        define("@angular/compiler-cli/src/ngtsc/annotations/src/diagnostics", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/annotations/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/annotations/src/util");
    /**
     * Gets the diagnostics for a set of provider classes.
     * @param providerClasses Classes that should be checked.
     * @param providersDeclaration Node that declares the providers array.
     * @param registry Registry that keeps track of the registered injectable classes.
     */
    function getProviderDiagnostics(providerClasses, providersDeclaration, registry) {
        var e_1, _a;
        var diagnostics = [];
        try {
            for (var providerClasses_1 = tslib_1.__values(providerClasses), providerClasses_1_1 = providerClasses_1.next(); !providerClasses_1_1.done; providerClasses_1_1 = providerClasses_1.next()) {
                var provider = providerClasses_1_1.value;
                if (registry.isInjectable(provider.node)) {
                    continue;
                }
                var contextNode = provider.getOriginForDiagnostics(providersDeclaration);
                diagnostics.push(diagnostics_1.makeDiagnostic(diagnostics_1.ErrorCode.UNDECORATED_PROVIDER, contextNode, "The class '" + provider.node.name
                    .text + "' cannot be created via dependency injection, as it does not have an Angular decorator. This will result in an error at runtime.\n\nEither add the @Injectable() decorator to '" + provider.node.name
                    .text + "', or configure a different provider (such as a provider with 'useFactory').\n", [{ node: provider.node, messageText: "'" + provider.node.name.text + "' is declared here." }]));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (providerClasses_1_1 && !providerClasses_1_1.done && (_a = providerClasses_1.return)) _a.call(providerClasses_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return diagnostics;
    }
    exports.getProviderDiagnostics = getProviderDiagnostics;
    function getDirectiveDiagnostics(node, reader, evaluator, reflector, scopeRegistry, kind) {
        var diagnostics = [];
        var addDiagnostics = function (more) {
            if (more === null) {
                return;
            }
            else if (diagnostics === null) {
                diagnostics = Array.isArray(more) ? more : [more];
            }
            else if (Array.isArray(more)) {
                diagnostics.push.apply(diagnostics, tslib_1.__spread(more));
            }
            else {
                diagnostics.push(more);
            }
        };
        var duplicateDeclarations = scopeRegistry.getDuplicateDeclarations(node);
        if (duplicateDeclarations !== null) {
            addDiagnostics(util_1.makeDuplicateDeclarationError(node, duplicateDeclarations, kind));
        }
        addDiagnostics(checkInheritanceOfDirective(node, reader, reflector, evaluator));
        return diagnostics;
    }
    exports.getDirectiveDiagnostics = getDirectiveDiagnostics;
    function checkInheritanceOfDirective(node, reader, reflector, evaluator) {
        if (!reflector.isClass(node) || reflector.getConstructorParameters(node) !== null) {
            // We should skip nodes that aren't classes. If a constructor exists, then no base class
            // definition is required on the runtime side - it's legal to inherit from any class.
            return null;
        }
        // The extends clause is an expression which can be as dynamic as the user wants. Try to
        // evaluate it, but fall back on ignoring the clause if it can't be understood. This is a View
        // Engine compatibility hack: View Engine ignores 'extends' expressions that it cannot understand.
        var baseClass = util_1.readBaseClass(node, reflector, evaluator);
        while (baseClass !== null) {
            if (baseClass === 'dynamic') {
                return null;
            }
            // We can skip the base class if it has metadata.
            var baseClassMeta = reader.getDirectiveMetadata(baseClass);
            if (baseClassMeta !== null) {
                return null;
            }
            // If the base class has a blank constructor we can skip it since it can't be using DI.
            var baseClassConstructorParams = reflector.getConstructorParameters(baseClass.node);
            var newParentClass = util_1.readBaseClass(baseClass.node, reflector, evaluator);
            if (baseClassConstructorParams !== null && baseClassConstructorParams.length > 0) {
                // This class has a non-trivial constructor, that's an error!
                return getInheritedUndecoratedCtorDiagnostic(node, baseClass, reader);
            }
            else if (baseClassConstructorParams !== null || newParentClass === null) {
                // This class has a trivial constructor, or no constructor + is the
                // top of the inheritance chain, so it's okay.
                return null;
            }
            // Go up the chain and continue
            baseClass = newParentClass;
        }
        return null;
    }
    exports.checkInheritanceOfDirective = checkInheritanceOfDirective;
    function getInheritedUndecoratedCtorDiagnostic(node, baseClass, reader) {
        var subclassMeta = reader.getDirectiveMetadata(new imports_1.Reference(node));
        var dirOrComp = subclassMeta.isComponent ? 'Component' : 'Directive';
        var baseClassName = baseClass.debugName;
        return diagnostics_1.makeDiagnostic(diagnostics_1.ErrorCode.DIRECTIVE_INHERITS_UNDECORATED_CTOR, node.name, "The " + dirOrComp.toLowerCase() + " " + node.name.text + " inherits its constructor from " + baseClassName + ", " +
            "but the latter does not have an Angular decorator of its own. Dependency injection will not be able to " +
            ("resolve the parameters of " + baseClassName + "'s constructor. Either add a @Directive decorator ") +
            ("to " + baseClassName + ", or add an explicit constructor to " + node.name.text + "."));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2Fubm90YXRpb25zL3NyYy9kaWFnbm9zdGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFJSCwyRUFBNEQ7SUFDNUQsbUVBQXdDO0lBTXhDLDZFQUFvRTtJQUVwRTs7Ozs7T0FLRztJQUNILFNBQWdCLHNCQUFzQixDQUNsQyxlQUFpRCxFQUFFLG9CQUFtQyxFQUN0RixRQUFpQzs7UUFDbkMsSUFBTSxXQUFXLEdBQW9CLEVBQUUsQ0FBQzs7WUFFeEMsS0FBdUIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7Z0JBQW5DLElBQU0sUUFBUSw0QkFBQTtnQkFDakIsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDeEMsU0FBUztpQkFDVjtnQkFFRCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDM0UsV0FBVyxDQUFDLElBQUksQ0FBQyw0QkFBYyxDQUMzQix1QkFBUyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsRUFDM0MsZ0JBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJO3FCQUNiLElBQUksdUxBR1QsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJO3FCQUNiLElBQUksbUZBQ3BCLEVBQ08sQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQXFCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5Rjs7Ozs7Ozs7O1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQXpCRCx3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TyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBM0NELGtFQTJDQztJQUVELFNBQVMscUNBQXFDLENBQzFDLElBQXNCLEVBQUUsU0FBb0IsRUFBRSxNQUFzQjtRQUN0RSxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7UUFDdkUsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDdkUsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUUxQyxPQUFPLDRCQUFjLENBQ2pCLHVCQUFTLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDeEQsU0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHVDQUM1QyxhQUFhLE9BQUk7WUFDakIseUdBQXlHO2FBQ3pHLCtCQUNJLGFBQWEsdURBQW9ELENBQUE7YUFDckUsUUFBTSxhQUFhLDRDQUF1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksTUFBRyxDQUFBLENBQUMsQ0FBQztJQUN2RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtFcnJvckNvZGUsIG1ha2VEaWFnbm9zdGljfSBmcm9tICcuLi8uLi9kaWFnbm9zdGljcyc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vLi4vaW1wb3J0cyc7XG5pbXBvcnQge0luamVjdGFibGVDbGFzc1JlZ2lzdHJ5LCBNZXRhZGF0YVJlYWRlcn0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHtQYXJ0aWFsRXZhbHVhdG9yfSBmcm9tICcuLi8uLi9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb24sIFJlZmxlY3Rpb25Ib3N0fSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcbmltcG9ydCB7TG9jYWxNb2R1bGVTY29wZVJlZ2lzdHJ5fSBmcm9tICcuLi8uLi9zY29wZSc7XG5cbmltcG9ydCB7bWFrZUR1cGxpY2F0ZURlY2xhcmF0aW9uRXJyb3IsIHJlYWRCYXNlQ2xhc3N9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogR2V0cyB0aGUgZGlhZ25vc3RpY3MgZm9yIGEgc2V0IG9mIHByb3ZpZGVyIGNsYXNzZXMuXG4gKiBAcGFyYW0gcHJvdmlkZXJDbGFzc2VzIENsYXNzZXMgdGhhdCBzaG91bGQgYmUgY2hlY2tlZC5cbiAqIEBwYXJhbSBwcm92aWRlcnNEZWNsYXJhdGlvbiBOb2RlIHRoYXQgZGVjbGFyZXMgdGhlIHByb3ZpZGVycyBhcnJheS5cbiAqIEBwYXJhbSByZWdpc3RyeSBSZWdpc3RyeSB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSByZWdpc3RlcmVkIGluamVjdGFibGUgY2xhc3Nlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3ZpZGVyRGlhZ25vc3RpY3MoXG4gICAgcHJvdmlkZXJDbGFzc2VzOiBTZXQ8UmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+PiwgcHJvdmlkZXJzRGVjbGFyYXRpb246IHRzLkV4cHJlc3Npb24sXG4gICAgcmVnaXN0cnk6IEluamVjdGFibGVDbGFzc1JlZ2lzdHJ5KTogdHMuRGlhZ25vc3RpY1tdIHtcbiAgY29uc3QgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgcHJvdmlkZXJDbGFzc2VzKSB7XG4gICAgaWYgKHJlZ2lzdHJ5LmlzSW5qZWN0YWJsZShwcm92aWRlci5ub2RlKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dE5vZGUgPSBwcm92aWRlci5nZXRPcmlnaW5Gb3JEaWFnbm9zdGljcyhwcm92aWRlcnNEZWNsYXJhdGlvbik7XG4gICAgZGlhZ25vc3RpY3MucHVzaChtYWtlRGlhZ25vc3RpYyhcbiAgICAgICAgRXJyb3JDb2RlLlVOREVDT1JBVEVEX1BST1ZJREVSLCBjb250ZXh0Tm9kZSxcbiAgICAgICAgYFRoZSBjbGFzcyAnJHtcbiAgICAgICAgICAgIHByb3ZpZGVyLm5vZGUubmFtZVxuICAgICAgICAgICAgICAgIC50ZXh0fScgY2Fubm90IGJlIGNyZWF0ZWQgdmlhIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCBhcyBpdCBkb2VzIG5vdCBoYXZlIGFuIEFuZ3VsYXIgZGVjb3JhdG9yLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yIGF0IHJ1bnRpbWUuXG5cbkVpdGhlciBhZGQgdGhlIEBJbmplY3RhYmxlKCkgZGVjb3JhdG9yIHRvICcke1xuICAgICAgICAgICAgcHJvdmlkZXIubm9kZS5uYW1lXG4gICAgICAgICAgICAgICAgLnRleHR9Jywgb3IgY29uZmlndXJlIGEgZGlmZmVyZW50IHByb3ZpZGVyIChzdWNoIGFzIGEgcHJvdmlkZXIgd2l0aCAndXNlRmFjdG9yeScpLlxuYCxcbiAgICAgICAgW3tub2RlOiBwcm92aWRlci5ub2RlLCBtZXNzYWdlVGV4dDogYCcke3Byb3ZpZGVyLm5vZGUubmFtZS50ZXh0fScgaXMgZGVjbGFyZWQgaGVyZS5gfV0pKTtcbiAgfVxuXG4gIHJldHVybiBkaWFnbm9zdGljcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdGl2ZURpYWdub3N0aWNzKFxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIHJlYWRlcjogTWV0YWRhdGFSZWFkZXIsIGV2YWx1YXRvcjogUGFydGlhbEV2YWx1YXRvcixcbiAgICByZWZsZWN0b3I6IFJlZmxlY3Rpb25Ib3N0LCBzY29wZVJlZ2lzdHJ5OiBMb2NhbE1vZHVsZVNjb3BlUmVnaXN0cnksXG4gICAga2luZDogc3RyaW5nKTogdHMuRGlhZ25vc3RpY1tdfG51bGwge1xuICBsZXQgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXXxudWxsID0gW107XG5cbiAgY29uc3QgYWRkRGlhZ25vc3RpY3MgPSAobW9yZTogdHMuRGlhZ25vc3RpY3x0cy5EaWFnbm9zdGljW118bnVsbCkgPT4ge1xuICAgIGlmIChtb3JlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChkaWFnbm9zdGljcyA9PT0gbnVsbCkge1xuICAgICAgZGlhZ25vc3RpY3MgPSBBcnJheS5pc0FycmF5KG1vcmUpID8gbW9yZSA6IFttb3JlXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobW9yZSkpIHtcbiAgICAgIGRpYWdub3N0aWNzLnB1c2goLi4ubW9yZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpYWdub3N0aWNzLnB1c2gobW9yZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGR1cGxpY2F0ZURlY2xhcmF0aW9ucyA9IHNjb3BlUmVnaXN0cnkuZ2V0RHVwbGljYXRlRGVjbGFyYXRpb25zKG5vZGUpO1xuXG4gIGlmIChkdXBsaWNhdGVEZWNsYXJhdGlvbnMgIT09IG51bGwpIHtcbiAgICBhZGREaWFnbm9zdGljcyhtYWtlRHVwbGljYXRlRGVjbGFyYXRpb25FcnJvcihub2RlLCBkdXBsaWNhdGVEZWNsYXJhdGlvbnMsIGtpbmQpKTtcbiAgfVxuXG4gIGFkZERpYWdub3N0aWNzKGNoZWNrSW5oZXJpdGFuY2VPZkRpcmVjdGl2ZShub2RlLCByZWFkZXIsIHJlZmxlY3RvciwgZXZhbHVhdG9yKSk7XG4gIHJldHVybiBkaWFnbm9zdGljcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5oZXJpdGFuY2VPZkRpcmVjdGl2ZShcbiAgICBub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCByZWFkZXI6IE1ldGFkYXRhUmVhZGVyLCByZWZsZWN0b3I6IFJlZmxlY3Rpb25Ib3N0LFxuICAgIGV2YWx1YXRvcjogUGFydGlhbEV2YWx1YXRvcik6IHRzLkRpYWdub3N0aWN8bnVsbCB7XG4gIGlmICghcmVmbGVjdG9yLmlzQ2xhc3Mobm9kZSkgfHwgcmVmbGVjdG9yLmdldENvbnN0cnVjdG9yUGFyYW1ldGVycyhub2RlKSAhPT0gbnVsbCkge1xuICAgIC8vIFdlIHNob3VsZCBza2lwIG5vZGVzIHRoYXQgYXJlbid0IGNsYXNzZXMuIElmIGEgY29uc3RydWN0b3IgZXhpc3RzLCB0aGVuIG5vIGJhc2UgY2xhc3NcbiAgICAvLyBkZWZpbml0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBydW50aW1lIHNpZGUgLSBpdCdzIGxlZ2FsIHRvIGluaGVyaXQgZnJvbSBhbnkgY2xhc3MuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBUaGUgZXh0ZW5kcyBjbGF1c2UgaXMgYW4gZXhwcmVzc2lvbiB3aGljaCBjYW4gYmUgYXMgZHluYW1pYyBhcyB0aGUgdXNlciB3YW50cy4gVHJ5IHRvXG4gIC8vIGV2YWx1YXRlIGl0LCBidXQgZmFsbCBiYWNrIG9uIGlnbm9yaW5nIHRoZSBjbGF1c2UgaWYgaXQgY2FuJ3QgYmUgdW5kZXJzdG9vZC4gVGhpcyBpcyBhIFZpZXdcbiAgLy8gRW5naW5lIGNvbXBhdGliaWxpdHkgaGFjazogVmlldyBFbmdpbmUgaWdub3JlcyAnZXh0ZW5kcycgZXhwcmVzc2lvbnMgdGhhdCBpdCBjYW5ub3QgdW5kZXJzdGFuZC5cbiAgbGV0IGJhc2VDbGFzcyA9IHJlYWRCYXNlQ2xhc3Mobm9kZSwgcmVmbGVjdG9yLCBldmFsdWF0b3IpO1xuXG4gIHdoaWxlIChiYXNlQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZiAoYmFzZUNsYXNzID09PSAnZHluYW1pYycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFdlIGNhbiBza2lwIHRoZSBiYXNlIGNsYXNzIGlmIGl0IGhhcyBtZXRhZGF0YS5cbiAgICBjb25zdCBiYXNlQ2xhc3NNZXRhID0gcmVhZGVyLmdldERpcmVjdGl2ZU1ldGFkYXRhKGJhc2VDbGFzcyk7XG4gICAgaWYgKGJhc2VDbGFzc01ldGEgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBiYXNlIGNsYXNzIGhhcyBhIGJsYW5rIGNvbnN0cnVjdG9yIHdlIGNhbiBza2lwIGl0IHNpbmNlIGl0IGNhbid0IGJlIHVzaW5nIERJLlxuICAgIGNvbnN0IGJhc2VDbGFzc0NvbnN0cnVjdG9yUGFyYW1zID0gcmVmbGVjdG9yLmdldENvbnN0cnVjdG9yUGFyYW1ldGVycyhiYXNlQ2xhc3Mubm9kZSk7XG4gICAgY29uc3QgbmV3UGFyZW50Q2xhc3MgPSByZWFkQmFzZUNsYXNzKGJhc2VDbGFzcy5ub2RlLCByZWZsZWN0b3IsIGV2YWx1YXRvcik7XG5cbiAgICBpZiAoYmFzZUNsYXNzQ29uc3RydWN0b3JQYXJhbXMgIT09IG51bGwgJiYgYmFzZUNsYXNzQ29uc3RydWN0b3JQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gVGhpcyBjbGFzcyBoYXMgYSBub24tdHJpdmlhbCBjb25zdHJ1Y3RvciwgdGhhdCdzIGFuIGVycm9yIVxuICAgICAgcmV0dXJuIGdldEluaGVyaXRlZFVuZGVjb3JhdGVkQ3RvckRpYWdub3N0aWMobm9kZSwgYmFzZUNsYXNzLCByZWFkZXIpO1xuICAgIH0gZWxzZSBpZiAoYmFzZUNsYXNzQ29uc3RydWN0b3JQYXJhbXMgIT09IG51bGwgfHwgbmV3UGFyZW50Q2xhc3MgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgY2xhc3MgaGFzIGEgdHJpdmlhbCBjb25zdHJ1Y3Rvciwgb3Igbm8gY29uc3RydWN0b3IgKyBpcyB0aGVcbiAgICAgIC8vIHRvcCBvZiB0aGUgaW5oZXJpdGFuY2UgY2hhaW4sIHNvIGl0J3Mgb2theS5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEdvIHVwIHRoZSBjaGFpbiBhbmQgY29udGludWVcbiAgICBiYXNlQ2xhc3MgPSBuZXdQYXJlbnRDbGFzcztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRJbmhlcml0ZWRVbmRlY29yYXRlZEN0b3JEaWFnbm9zdGljKFxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGJhc2VDbGFzczogUmVmZXJlbmNlLCByZWFkZXI6IE1ldGFkYXRhUmVhZGVyKSB7XG4gIGNvbnN0IHN1YmNsYXNzTWV0YSA9IHJlYWRlci5nZXREaXJlY3RpdmVNZXRhZGF0YShuZXcgUmVmZXJlbmNlKG5vZGUpKSE7XG4gIGNvbnN0IGRpck9yQ29tcCA9IHN1YmNsYXNzTWV0YS5pc0NvbXBvbmVudCA/ICdDb21wb25lbnQnIDogJ0RpcmVjdGl2ZSc7XG4gIGNvbnN0IGJhc2VDbGFzc05hbWUgPSBiYXNlQ2xhc3MuZGVidWdOYW1lO1xuXG4gIHJldHVybiBtYWtlRGlhZ25vc3RpYyhcbiAgICAgIEVycm9yQ29kZS5ESVJFQ1RJVkVfSU5IRVJJVFNfVU5ERUNPUkFURURfQ1RPUiwgbm9kZS5uYW1lLFxuICAgICAgYFRoZSAke2Rpck9yQ29tcC50b0xvd2VyQ2FzZSgpfSAke25vZGUubmFtZS50ZXh0fSBpbmhlcml0cyBpdHMgY29uc3RydWN0b3IgZnJvbSAke1xuICAgICAgICAgIGJhc2VDbGFzc05hbWV9LCBgICtcbiAgICAgICAgICBgYnV0IHRoZSBsYXR0ZXIgZG9lcyBub3QgaGF2ZSBhbiBBbmd1bGFyIGRlY29yYXRvciBvZiBpdHMgb3duLiBEZXBlbmRlbmN5IGluamVjdGlvbiB3aWxsIG5vdCBiZSBhYmxlIHRvIGAgK1xuICAgICAgICAgIGByZXNvbHZlIHRoZSBwYXJhbWV0ZXJzIG9mICR7XG4gICAgICAgICAgICAgIGJhc2VDbGFzc05hbWV9J3MgY29uc3RydWN0b3IuIEVpdGhlciBhZGQgYSBARGlyZWN0aXZlIGRlY29yYXRvciBgICtcbiAgICAgICAgICBgdG8gJHtiYXNlQ2xhc3NOYW1lfSwgb3IgYWRkIGFuIGV4cGxpY2l0IGNvbnN0cnVjdG9yIHRvICR7bm9kZS5uYW1lLnRleHR9LmApO1xufVxuIl19