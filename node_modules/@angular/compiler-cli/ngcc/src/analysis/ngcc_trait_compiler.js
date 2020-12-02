(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/analysis/ngcc_trait_compiler", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/perf", "@angular/compiler-cli/src/ngtsc/transform", "@angular/compiler-cli/ngcc/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var perf_1 = require("@angular/compiler-cli/src/ngtsc/perf");
    var transform_1 = require("@angular/compiler-cli/src/ngtsc/transform");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    /**
     * Specializes the `TraitCompiler` for ngcc purposes. Mainly, this includes an alternative way of
     * scanning for classes to compile using the reflection host's `findClassSymbols`, together with
     * support to inject synthetic decorators into the compilation for ad-hoc migrations that ngcc
     * performs.
     */
    var NgccTraitCompiler = /** @class */ (function (_super) {
        tslib_1.__extends(NgccTraitCompiler, _super);
        function NgccTraitCompiler(handlers, ngccReflector) {
            var _this = _super.call(this, handlers, ngccReflector, perf_1.NOOP_PERF_RECORDER, new NoIncrementalBuild(), 
            /* compileNonExportedClasses */ true, new transform_1.DtsTransformRegistry()) || this;
            _this.ngccReflector = ngccReflector;
            return _this;
        }
        Object.defineProperty(NgccTraitCompiler.prototype, "analyzedFiles", {
            get: function () {
                return Array.from(this.fileToClasses.keys());
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Analyzes the source file in search for classes to process. For any class that is found in the
         * file, a `ClassRecord` is created and the source file is included in the `analyzedFiles` array.
         */
        NgccTraitCompiler.prototype.analyzeFile = function (sf) {
            var e_1, _a;
            var ngccClassSymbols = this.ngccReflector.findClassSymbols(sf);
            try {
                for (var ngccClassSymbols_1 = tslib_1.__values(ngccClassSymbols), ngccClassSymbols_1_1 = ngccClassSymbols_1.next(); !ngccClassSymbols_1_1.done; ngccClassSymbols_1_1 = ngccClassSymbols_1.next()) {
                    var classSymbol = ngccClassSymbols_1_1.value;
                    this.analyzeClass(classSymbol.declaration.valueDeclaration, null);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ngccClassSymbols_1_1 && !ngccClassSymbols_1_1.done && (_a = ngccClassSymbols_1.return)) _a.call(ngccClassSymbols_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return undefined;
        };
        /**
         * Associate a new synthesized decorator, which did not appear in the original source, with a
         * given class.
         * @param clazz the class to receive the new decorator.
         * @param decorator the decorator to inject.
         * @param flags optional bitwise flag to influence the compilation of the decorator.
         */
        NgccTraitCompiler.prototype.injectSyntheticDecorator = function (clazz, decorator, flags) {
            var e_2, _a;
            var migratedTraits = this.detectTraits(clazz, [decorator]);
            if (migratedTraits === null) {
                return [];
            }
            try {
                for (var migratedTraits_1 = tslib_1.__values(migratedTraits), migratedTraits_1_1 = migratedTraits_1.next(); !migratedTraits_1_1.done; migratedTraits_1_1 = migratedTraits_1.next()) {
                    var trait = migratedTraits_1_1.value;
                    this.analyzeTrait(clazz, trait, flags);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (migratedTraits_1_1 && !migratedTraits_1_1.done && (_a = migratedTraits_1.return)) _a.call(migratedTraits_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return migratedTraits;
        };
        /**
         * Returns all decorators that have been recognized for the provided class, including any
         * synthetically injected decorators.
         * @param clazz the declaration for which the decorators are returned.
         */
        NgccTraitCompiler.prototype.getAllDecorators = function (clazz) {
            var record = this.recordFor(clazz);
            if (record === null) {
                return null;
            }
            return record.traits.map(function (trait) { return trait.detected.decorator; }).filter(utils_1.isDefined);
        };
        return NgccTraitCompiler;
    }(transform_1.TraitCompiler));
    exports.NgccTraitCompiler = NgccTraitCompiler;
    var NoIncrementalBuild = /** @class */ (function () {
        function NoIncrementalBuild() {
        }
        NoIncrementalBuild.prototype.priorWorkFor = function (sf) {
            return null;
        };
        return NoIncrementalBuild;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjY190cmFpdF9jb21waWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9hbmFseXNpcy9uZ2NjX3RyYWl0X2NvbXBpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBLDZEQUEyRDtJQUUzRCx1RUFBd0g7SUFFeEgsOERBQW1DO0lBRW5DOzs7OztPQUtHO0lBQ0g7UUFBdUMsNkNBQWE7UUFDbEQsMkJBQ0ksUUFBdUQsRUFDL0MsYUFBaUM7WUFGN0MsWUFHRSxrQkFDSSxRQUFRLEVBQUUsYUFBYSxFQUFFLHlCQUFrQixFQUFFLElBQUksa0JBQWtCLEVBQUU7WUFDckUsK0JBQStCLENBQUMsSUFBSSxFQUFFLElBQUksZ0NBQW9CLEVBQUUsQ0FBQyxTQUN0RTtZQUpXLG1CQUFhLEdBQWIsYUFBYSxDQUFvQjs7UUFJN0MsQ0FBQztRQUVELHNCQUFJLDRDQUFhO2lCQUFqQjtnQkFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUM7OztXQUFBO1FBRUQ7OztXQUdHO1FBQ0gsdUNBQVcsR0FBWCxVQUFZLEVBQWlCOztZQUMzQixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUNqRSxLQUEwQixJQUFBLHFCQUFBLGlCQUFBLGdCQUFnQixDQUFBLGtEQUFBLGdGQUFFO29CQUF2QyxJQUFNLFdBQVcsNkJBQUE7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbkU7Ozs7Ozs7OztZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSCxvREFBd0IsR0FBeEIsVUFBeUIsS0FBdUIsRUFBRSxTQUFvQixFQUFFLEtBQW9COztZQUUxRixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFO2dCQUMzQixPQUFPLEVBQUUsQ0FBQzthQUNYOztnQkFFRCxLQUFvQixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtvQkFBL0IsSUFBTSxLQUFLLDJCQUFBO29CQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDeEM7Ozs7Ozs7OztZQUVELE9BQU8sY0FBYyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsNENBQWdCLEdBQWhCLFVBQWlCLEtBQXVCO1lBQ3RDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUF4QixDQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFTLENBQUMsQ0FBQztRQUNoRixDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUFDLEFBNURELENBQXVDLHlCQUFhLEdBNERuRDtJQTVEWSw4Q0FBaUI7SUE4RDlCO1FBQUE7UUFJQSxDQUFDO1FBSEMseUNBQVksR0FBWixVQUFhLEVBQWlCO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbmNyZW1lbnRhbEJ1aWxkfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvaW5jcmVtZW50YWwvYXBpJztcbmltcG9ydCB7Tk9PUF9QRVJGX1JFQ09SREVSfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvcGVyZic7XG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb24sIERlY29yYXRvcn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtEZWNvcmF0b3JIYW5kbGVyLCBEdHNUcmFuc2Zvcm1SZWdpc3RyeSwgSGFuZGxlckZsYWdzLCBUcmFpdCwgVHJhaXRDb21waWxlcn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3RyYW5zZm9ybSc7XG5pbXBvcnQge05nY2NSZWZsZWN0aW9uSG9zdH0gZnJvbSAnLi4vaG9zdC9uZ2NjX2hvc3QnO1xuaW1wb3J0IHtpc0RlZmluZWR9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBTcGVjaWFsaXplcyB0aGUgYFRyYWl0Q29tcGlsZXJgIGZvciBuZ2NjIHB1cnBvc2VzLiBNYWlubHksIHRoaXMgaW5jbHVkZXMgYW4gYWx0ZXJuYXRpdmUgd2F5IG9mXG4gKiBzY2FubmluZyBmb3IgY2xhc3NlcyB0byBjb21waWxlIHVzaW5nIHRoZSByZWZsZWN0aW9uIGhvc3QncyBgZmluZENsYXNzU3ltYm9sc2AsIHRvZ2V0aGVyIHdpdGhcbiAqIHN1cHBvcnQgdG8gaW5qZWN0IHN5bnRoZXRpYyBkZWNvcmF0b3JzIGludG8gdGhlIGNvbXBpbGF0aW9uIGZvciBhZC1ob2MgbWlncmF0aW9ucyB0aGF0IG5nY2NcbiAqIHBlcmZvcm1zLlxuICovXG5leHBvcnQgY2xhc3MgTmdjY1RyYWl0Q29tcGlsZXIgZXh0ZW5kcyBUcmFpdENvbXBpbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBoYW5kbGVyczogRGVjb3JhdG9ySGFuZGxlcjx1bmtub3duLCB1bmtub3duLCB1bmtub3duPltdLFxuICAgICAgcHJpdmF0ZSBuZ2NjUmVmbGVjdG9yOiBOZ2NjUmVmbGVjdGlvbkhvc3QpIHtcbiAgICBzdXBlcihcbiAgICAgICAgaGFuZGxlcnMsIG5nY2NSZWZsZWN0b3IsIE5PT1BfUEVSRl9SRUNPUkRFUiwgbmV3IE5vSW5jcmVtZW50YWxCdWlsZCgpLFxuICAgICAgICAvKiBjb21waWxlTm9uRXhwb3J0ZWRDbGFzc2VzICovIHRydWUsIG5ldyBEdHNUcmFuc2Zvcm1SZWdpc3RyeSgpKTtcbiAgfVxuXG4gIGdldCBhbmFseXplZEZpbGVzKCk6IHRzLlNvdXJjZUZpbGVbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5maWxlVG9DbGFzc2VzLmtleXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQW5hbHl6ZXMgdGhlIHNvdXJjZSBmaWxlIGluIHNlYXJjaCBmb3IgY2xhc3NlcyB0byBwcm9jZXNzLiBGb3IgYW55IGNsYXNzIHRoYXQgaXMgZm91bmQgaW4gdGhlXG4gICAqIGZpbGUsIGEgYENsYXNzUmVjb3JkYCBpcyBjcmVhdGVkIGFuZCB0aGUgc291cmNlIGZpbGUgaXMgaW5jbHVkZWQgaW4gdGhlIGBhbmFseXplZEZpbGVzYCBhcnJheS5cbiAgICovXG4gIGFuYWx5emVGaWxlKHNmOiB0cy5Tb3VyY2VGaWxlKTogdm9pZCB7XG4gICAgY29uc3QgbmdjY0NsYXNzU3ltYm9scyA9IHRoaXMubmdjY1JlZmxlY3Rvci5maW5kQ2xhc3NTeW1ib2xzKHNmKTtcbiAgICBmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIG5nY2NDbGFzc1N5bWJvbHMpIHtcbiAgICAgIHRoaXMuYW5hbHl6ZUNsYXNzKGNsYXNzU3ltYm9sLmRlY2xhcmF0aW9uLnZhbHVlRGVjbGFyYXRpb24sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQXNzb2NpYXRlIGEgbmV3IHN5bnRoZXNpemVkIGRlY29yYXRvciwgd2hpY2ggZGlkIG5vdCBhcHBlYXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgd2l0aCBhXG4gICAqIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0gY2xhenogdGhlIGNsYXNzIHRvIHJlY2VpdmUgdGhlIG5ldyBkZWNvcmF0b3IuXG4gICAqIEBwYXJhbSBkZWNvcmF0b3IgdGhlIGRlY29yYXRvciB0byBpbmplY3QuXG4gICAqIEBwYXJhbSBmbGFncyBvcHRpb25hbCBiaXR3aXNlIGZsYWcgdG8gaW5mbHVlbmNlIHRoZSBjb21waWxhdGlvbiBvZiB0aGUgZGVjb3JhdG9yLlxuICAgKi9cbiAgaW5qZWN0U3ludGhldGljRGVjb3JhdG9yKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uLCBkZWNvcmF0b3I6IERlY29yYXRvciwgZmxhZ3M/OiBIYW5kbGVyRmxhZ3MpOlxuICAgICAgVHJhaXQ8dW5rbm93biwgdW5rbm93biwgdW5rbm93bj5bXSB7XG4gICAgY29uc3QgbWlncmF0ZWRUcmFpdHMgPSB0aGlzLmRldGVjdFRyYWl0cyhjbGF6eiwgW2RlY29yYXRvcl0pO1xuICAgIGlmIChtaWdyYXRlZFRyYWl0cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdHJhaXQgb2YgbWlncmF0ZWRUcmFpdHMpIHtcbiAgICAgIHRoaXMuYW5hbHl6ZVRyYWl0KGNsYXp6LCB0cmFpdCwgZmxhZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBtaWdyYXRlZFRyYWl0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBkZWNvcmF0b3JzIHRoYXQgaGF2ZSBiZWVuIHJlY29nbml6ZWQgZm9yIHRoZSBwcm92aWRlZCBjbGFzcywgaW5jbHVkaW5nIGFueVxuICAgKiBzeW50aGV0aWNhbGx5IGluamVjdGVkIGRlY29yYXRvcnMuXG4gICAqIEBwYXJhbSBjbGF6eiB0aGUgZGVjbGFyYXRpb24gZm9yIHdoaWNoIHRoZSBkZWNvcmF0b3JzIGFyZSByZXR1cm5lZC5cbiAgICovXG4gIGdldEFsbERlY29yYXRvcnMoY2xheno6IENsYXNzRGVjbGFyYXRpb24pOiBEZWNvcmF0b3JbXXxudWxsIHtcbiAgICBjb25zdCByZWNvcmQgPSB0aGlzLnJlY29yZEZvcihjbGF6eik7XG4gICAgaWYgKHJlY29yZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY29yZC50cmFpdHMubWFwKHRyYWl0ID0+IHRyYWl0LmRldGVjdGVkLmRlY29yYXRvcikuZmlsdGVyKGlzRGVmaW5lZCk7XG4gIH1cbn1cblxuY2xhc3MgTm9JbmNyZW1lbnRhbEJ1aWxkIGltcGxlbWVudHMgSW5jcmVtZW50YWxCdWlsZDxhbnk+IHtcbiAgcHJpb3JXb3JrRm9yKHNmOiB0cy5Tb3VyY2VGaWxlKTogYW55W118bnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==