(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/migrations/undecorated_parent_migration", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/ngcc/src/migrations/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/migrations/utils");
    /**
     * Ensure that the parents of directives and components that have no constructor are also decorated
     * as a `Directive`.
     *
     * Example:
     *
     * ```
     * export class BasePlain {
     *   constructor(private vcr: ViewContainerRef) {}
     * }
     *
     * @Directive({selector: '[blah]'})
     * export class DerivedDir extends BasePlain {}
     * ```
     *
     * When compiling `DerivedDir` which extends the undecorated `BasePlain` class, the compiler needs
     * to generate a directive def (`ɵdir`) for `DerivedDir`. In particular, it needs to generate a
     * factory function that creates instances of `DerivedDir`.
     *
     * As `DerivedDir` has no constructor, the factory function for `DerivedDir` must delegate to the
     * factory function for `BasePlain`. But for this to work, `BasePlain` must have a factory function,
     * itself.
     *
     * This migration adds a `Directive` decorator to such undecorated parent classes, to ensure that
     * the compiler will create the necessary factory function.
     *
     * The resulting code looks like:
     *
     * ```
     * @Directive()
     * export class BasePlain {
     *   constructor(private vcr: ViewContainerRef) {}
     * }
     *
     * @Directive({selector: '[blah]'})
     * export class DerivedDir extends BasePlain {}
     * ```
     */
    var UndecoratedParentMigration = /** @class */ (function () {
        function UndecoratedParentMigration() {
        }
        UndecoratedParentMigration.prototype.apply = function (clazz, host) {
            // Only interested in `clazz` if it is a `Component` or a `Directive`,
            // and it has no constructor of its own.
            if (!utils_1.hasDirectiveDecorator(host, clazz) || utils_1.hasConstructor(host, clazz)) {
                return null;
            }
            // Only interested in `clazz` if it inherits from a base class.
            var baseClazzRef = determineBaseClass(clazz, host);
            while (baseClazzRef !== null) {
                var baseClazz = baseClazzRef.node;
                // Do not proceed if the base class already has a decorator, or is not in scope of the
                // entry-point that is currently being compiled.
                if (utils_1.hasDirectiveDecorator(host, baseClazz) || !host.isInScope(baseClazz)) {
                    break;
                }
                // Inject an `@Directive()` decorator for the base class.
                host.injectSyntheticDecorator(baseClazz, utils_1.createDirectiveDecorator(baseClazz));
                // If the base class has a constructor, there's no need to continue walking up the
                // inheritance chain. The injected decorator ensures that a factory is generated that does
                // not delegate to the base class.
                if (utils_1.hasConstructor(host, baseClazz)) {
                    break;
                }
                // Continue with another level of class inheritance.
                baseClazzRef = determineBaseClass(baseClazz, host);
            }
            return null;
        };
        return UndecoratedParentMigration;
    }());
    exports.UndecoratedParentMigration = UndecoratedParentMigration;
    /**
     * Computes a reference to the base class, or `null` if the class has no base class or if it could
     * not be statically determined.
     */
    function determineBaseClass(clazz, host) {
        var baseClassExpr = host.reflectionHost.getBaseClassExpression(clazz);
        if (baseClassExpr === null) {
            return null;
        }
        var baseClass = host.evaluator.evaluate(baseClassExpr);
        if (!(baseClass instanceof imports_1.Reference) || !utils_1.isClassDeclaration(baseClass.node)) {
            return null;
        }
        return baseClass;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZWNvcmF0ZWRfcGFyZW50X21pZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9taWdyYXRpb25zL3VuZGVjb3JhdGVkX3BhcmVudF9taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTQSxtRUFBcUQ7SUFJckQseUVBQTRHO0lBRzVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUNHO0lBQ0g7UUFBQTtRQW1DQSxDQUFDO1FBbENDLDBDQUFLLEdBQUwsVUFBTSxLQUF1QixFQUFFLElBQW1CO1lBQ2hELHNFQUFzRTtZQUN0RSx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLDZCQUFxQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxzQkFBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDdEUsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELCtEQUErRDtZQUMvRCxJQUFJLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsT0FBTyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUVwQyxzRkFBc0Y7Z0JBQ3RGLGdEQUFnRDtnQkFDaEQsSUFBSSw2QkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN4RSxNQUFNO2lCQUNQO2dCQUVELHlEQUF5RDtnQkFDekQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxnQ0FBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUU5RSxrRkFBa0Y7Z0JBQ2xGLDBGQUEwRjtnQkFDMUYsa0NBQWtDO2dCQUNsQyxJQUFJLHNCQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO29CQUNuQyxNQUFNO2lCQUNQO2dCQUVELG9EQUFvRDtnQkFDcEQsWUFBWSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNwRDtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0FBQyxBQW5DRCxJQW1DQztJQW5DWSxnRUFBMEI7SUFxQ3ZDOzs7T0FHRztJQUNILFNBQVMsa0JBQWtCLENBQ3ZCLEtBQXVCLEVBQUUsSUFBbUI7UUFDOUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLFNBQVMsWUFBWSxtQkFBUyxDQUFDLElBQUksQ0FBQywwQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBc0IsQ0FBQyxFQUFFO1lBQzlGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLFNBQXdDLENBQUM7SUFDbEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ltcG9ydHMnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9ufSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5cbmltcG9ydCB7TWlncmF0aW9uLCBNaWdyYXRpb25Ib3N0fSBmcm9tICcuL21pZ3JhdGlvbic7XG5pbXBvcnQge2NyZWF0ZURpcmVjdGl2ZURlY29yYXRvciwgaGFzQ29uc3RydWN0b3IsIGhhc0RpcmVjdGl2ZURlY29yYXRvciwgaXNDbGFzc0RlY2xhcmF0aW9ufSBmcm9tICcuL3V0aWxzJztcblxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IHRoZSBwYXJlbnRzIG9mIGRpcmVjdGl2ZXMgYW5kIGNvbXBvbmVudHMgdGhhdCBoYXZlIG5vIGNvbnN0cnVjdG9yIGFyZSBhbHNvIGRlY29yYXRlZFxuICogYXMgYSBgRGlyZWN0aXZlYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogZXhwb3J0IGNsYXNzIEJhc2VQbGFpbiB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuICogfVxuICpcbiAqIEBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2JsYWhdJ30pXG4gKiBleHBvcnQgY2xhc3MgRGVyaXZlZERpciBleHRlbmRzIEJhc2VQbGFpbiB7fVxuICogYGBgXG4gKlxuICogV2hlbiBjb21waWxpbmcgYERlcml2ZWREaXJgIHdoaWNoIGV4dGVuZHMgdGhlIHVuZGVjb3JhdGVkIGBCYXNlUGxhaW5gIGNsYXNzLCB0aGUgY29tcGlsZXIgbmVlZHNcbiAqIHRvIGdlbmVyYXRlIGEgZGlyZWN0aXZlIGRlZiAoYMm1ZGlyYCkgZm9yIGBEZXJpdmVkRGlyYC4gSW4gcGFydGljdWxhciwgaXQgbmVlZHMgdG8gZ2VuZXJhdGUgYVxuICogZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2VzIG9mIGBEZXJpdmVkRGlyYC5cbiAqXG4gKiBBcyBgRGVyaXZlZERpcmAgaGFzIG5vIGNvbnN0cnVjdG9yLCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBmb3IgYERlcml2ZWREaXJgIG11c3QgZGVsZWdhdGUgdG8gdGhlXG4gKiBmYWN0b3J5IGZ1bmN0aW9uIGZvciBgQmFzZVBsYWluYC4gQnV0IGZvciB0aGlzIHRvIHdvcmssIGBCYXNlUGxhaW5gIG11c3QgaGF2ZSBhIGZhY3RvcnkgZnVuY3Rpb24sXG4gKiBpdHNlbGYuXG4gKlxuICogVGhpcyBtaWdyYXRpb24gYWRkcyBhIGBEaXJlY3RpdmVgIGRlY29yYXRvciB0byBzdWNoIHVuZGVjb3JhdGVkIHBhcmVudCBjbGFzc2VzLCB0byBlbnN1cmUgdGhhdFxuICogdGhlIGNvbXBpbGVyIHdpbGwgY3JlYXRlIHRoZSBuZWNlc3NhcnkgZmFjdG9yeSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgcmVzdWx0aW5nIGNvZGUgbG9va3MgbGlrZTpcbiAqXG4gKiBgYGBcbiAqIEBEaXJlY3RpdmUoKVxuICogZXhwb3J0IGNsYXNzIEJhc2VQbGFpbiB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuICogfVxuICpcbiAqIEBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2JsYWhdJ30pXG4gKiBleHBvcnQgY2xhc3MgRGVyaXZlZERpciBleHRlbmRzIEJhc2VQbGFpbiB7fVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBVbmRlY29yYXRlZFBhcmVudE1pZ3JhdGlvbiBpbXBsZW1lbnRzIE1pZ3JhdGlvbiB7XG4gIGFwcGx5KGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uLCBob3N0OiBNaWdyYXRpb25Ib3N0KTogdHMuRGlhZ25vc3RpY3xudWxsIHtcbiAgICAvLyBPbmx5IGludGVyZXN0ZWQgaW4gYGNsYXp6YCBpZiBpdCBpcyBhIGBDb21wb25lbnRgIG9yIGEgYERpcmVjdGl2ZWAsXG4gICAgLy8gYW5kIGl0IGhhcyBubyBjb25zdHJ1Y3RvciBvZiBpdHMgb3duLlxuICAgIGlmICghaGFzRGlyZWN0aXZlRGVjb3JhdG9yKGhvc3QsIGNsYXp6KSB8fCBoYXNDb25zdHJ1Y3Rvcihob3N0LCBjbGF6eikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaW50ZXJlc3RlZCBpbiBgY2xhenpgIGlmIGl0IGluaGVyaXRzIGZyb20gYSBiYXNlIGNsYXNzLlxuICAgIGxldCBiYXNlQ2xhenpSZWYgPSBkZXRlcm1pbmVCYXNlQ2xhc3MoY2xhenosIGhvc3QpO1xuICAgIHdoaWxlIChiYXNlQ2xhenpSZWYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJhc2VDbGF6eiA9IGJhc2VDbGF6elJlZi5ub2RlO1xuXG4gICAgICAvLyBEbyBub3QgcHJvY2VlZCBpZiB0aGUgYmFzZSBjbGFzcyBhbHJlYWR5IGhhcyBhIGRlY29yYXRvciwgb3IgaXMgbm90IGluIHNjb3BlIG9mIHRoZVxuICAgICAgLy8gZW50cnktcG9pbnQgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgY29tcGlsZWQuXG4gICAgICBpZiAoaGFzRGlyZWN0aXZlRGVjb3JhdG9yKGhvc3QsIGJhc2VDbGF6eikgfHwgIWhvc3QuaXNJblNjb3BlKGJhc2VDbGF6eikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIEluamVjdCBhbiBgQERpcmVjdGl2ZSgpYCBkZWNvcmF0b3IgZm9yIHRoZSBiYXNlIGNsYXNzLlxuICAgICAgaG9zdC5pbmplY3RTeW50aGV0aWNEZWNvcmF0b3IoYmFzZUNsYXp6LCBjcmVhdGVEaXJlY3RpdmVEZWNvcmF0b3IoYmFzZUNsYXp6KSk7XG5cbiAgICAgIC8vIElmIHRoZSBiYXNlIGNsYXNzIGhhcyBhIGNvbnN0cnVjdG9yLCB0aGVyZSdzIG5vIG5lZWQgdG8gY29udGludWUgd2Fsa2luZyB1cCB0aGVcbiAgICAgIC8vIGluaGVyaXRhbmNlIGNoYWluLiBUaGUgaW5qZWN0ZWQgZGVjb3JhdG9yIGVuc3VyZXMgdGhhdCBhIGZhY3RvcnkgaXMgZ2VuZXJhdGVkIHRoYXQgZG9lc1xuICAgICAgLy8gbm90IGRlbGVnYXRlIHRvIHRoZSBiYXNlIGNsYXNzLlxuICAgICAgaWYgKGhhc0NvbnN0cnVjdG9yKGhvc3QsIGJhc2VDbGF6eikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRpbnVlIHdpdGggYW5vdGhlciBsZXZlbCBvZiBjbGFzcyBpbmhlcml0YW5jZS5cbiAgICAgIGJhc2VDbGF6elJlZiA9IGRldGVybWluZUJhc2VDbGFzcyhiYXNlQ2xhenosIGhvc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGJhc2UgY2xhc3MsIG9yIGBudWxsYCBpZiB0aGUgY2xhc3MgaGFzIG5vIGJhc2UgY2xhc3Mgb3IgaWYgaXQgY291bGRcbiAqIG5vdCBiZSBzdGF0aWNhbGx5IGRldGVybWluZWQuXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluZUJhc2VDbGFzcyhcbiAgICBjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbiwgaG9zdDogTWlncmF0aW9uSG9zdCk6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPnxudWxsIHtcbiAgY29uc3QgYmFzZUNsYXNzRXhwciA9IGhvc3QucmVmbGVjdGlvbkhvc3QuZ2V0QmFzZUNsYXNzRXhwcmVzc2lvbihjbGF6eik7XG4gIGlmIChiYXNlQ2xhc3NFeHByID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBiYXNlQ2xhc3MgPSBob3N0LmV2YWx1YXRvci5ldmFsdWF0ZShiYXNlQ2xhc3NFeHByKTtcbiAgaWYgKCEoYmFzZUNsYXNzIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB8fCAhaXNDbGFzc0RlY2xhcmF0aW9uKGJhc2VDbGFzcy5ub2RlIGFzIHRzLkRlY2xhcmF0aW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGJhc2VDbGFzcyBhcyBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj47XG59XG4iXX0=