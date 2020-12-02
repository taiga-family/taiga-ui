(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/scope/src/component_scope", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * A `ComponentScopeReader` that reads from an ordered set of child readers until it obtains the
     * requested scope.
     *
     * This is used to combine `ComponentScopeReader`s that read from different sources (e.g. from a
     * registry and from the incremental state).
     */
    var CompoundComponentScopeReader = /** @class */ (function () {
        function CompoundComponentScopeReader(readers) {
            this.readers = readers;
        }
        CompoundComponentScopeReader.prototype.getScopeForComponent = function (clazz) {
            var e_1, _a;
            try {
                for (var _b = tslib_1.__values(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reader = _c.value;
                    var meta = reader.getScopeForComponent(clazz);
                    if (meta !== null) {
                        return meta;
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
            return null;
        };
        CompoundComponentScopeReader.prototype.getRequiresRemoteScope = function (clazz) {
            var e_2, _a;
            try {
                for (var _b = tslib_1.__values(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reader = _c.value;
                    var requiredScoping = reader.getRequiresRemoteScope(clazz);
                    if (requiredScoping !== null) {
                        return requiredScoping;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return null;
        };
        return CompoundComponentScopeReader;
    }());
    exports.CompoundComponentScopeReader = CompoundComponentScopeReader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X3Njb3BlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9zY29wZS9zcmMvY29tcG9uZW50X3Njb3BlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWtCQTs7Ozs7O09BTUc7SUFDSDtRQUNFLHNDQUFvQixPQUErQjtZQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUFHLENBQUM7UUFFdkQsMkRBQW9CLEdBQXBCLFVBQXFCLEtBQXVCOzs7Z0JBQzFDLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO29CQUE5QixJQUFNLE1BQU0sV0FBQTtvQkFDZixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTt3QkFDakIsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELDZEQUFzQixHQUF0QixVQUF1QixLQUF1Qjs7O2dCQUM1QyxLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQSw0QkFBRTtvQkFBOUIsSUFBTSxNQUFNLFdBQUE7b0JBQ2YsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM3RCxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7d0JBQzVCLE9BQU8sZUFBZSxDQUFDO3FCQUN4QjtpQkFDRjs7Ozs7Ozs7O1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0gsbUNBQUM7SUFBRCxDQUFDLEFBdEJELElBc0JDO0lBdEJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5pbXBvcnQge0xvY2FsTW9kdWxlU2NvcGV9IGZyb20gJy4vbG9jYWwnO1xuXG4vKipcbiAqIFJlYWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBpbGF0aW9uIHNjb3BlIG9mIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50U2NvcGVSZWFkZXIge1xuICBnZXRTY29wZUZvckNvbXBvbmVudChjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IExvY2FsTW9kdWxlU2NvcGV8bnVsbHwnZXJyb3InO1xuICBnZXRSZXF1aXJlc1JlbW90ZVNjb3BlKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogYm9vbGVhbnxudWxsO1xufVxuXG4vKipcbiAqIEEgYENvbXBvbmVudFNjb3BlUmVhZGVyYCB0aGF0IHJlYWRzIGZyb20gYW4gb3JkZXJlZCBzZXQgb2YgY2hpbGQgcmVhZGVycyB1bnRpbCBpdCBvYnRhaW5zIHRoZVxuICogcmVxdWVzdGVkIHNjb3BlLlxuICpcbiAqIFRoaXMgaXMgdXNlZCB0byBjb21iaW5lIGBDb21wb25lbnRTY29wZVJlYWRlcmBzIHRoYXQgcmVhZCBmcm9tIGRpZmZlcmVudCBzb3VyY2VzIChlLmcuIGZyb20gYVxuICogcmVnaXN0cnkgYW5kIGZyb20gdGhlIGluY3JlbWVudGFsIHN0YXRlKS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvdW5kQ29tcG9uZW50U2NvcGVSZWFkZXIgaW1wbGVtZW50cyBDb21wb25lbnRTY29wZVJlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZGVyczogQ29tcG9uZW50U2NvcGVSZWFkZXJbXSkge31cblxuICBnZXRTY29wZUZvckNvbXBvbmVudChjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IExvY2FsTW9kdWxlU2NvcGV8bnVsbHwnZXJyb3InIHtcbiAgICBmb3IgKGNvbnN0IHJlYWRlciBvZiB0aGlzLnJlYWRlcnMpIHtcbiAgICAgIGNvbnN0IG1ldGEgPSByZWFkZXIuZ2V0U2NvcGVGb3JDb21wb25lbnQoY2xhenopO1xuICAgICAgaWYgKG1ldGEgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmVxdWlyZXNSZW1vdGVTY29wZShjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IGJvb2xlYW58bnVsbCB7XG4gICAgZm9yIChjb25zdCByZWFkZXIgb2YgdGhpcy5yZWFkZXJzKSB7XG4gICAgICBjb25zdCByZXF1aXJlZFNjb3BpbmcgPSByZWFkZXIuZ2V0UmVxdWlyZXNSZW1vdGVTY29wZShjbGF6eik7XG4gICAgICBpZiAocmVxdWlyZWRTY29waW5nICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlZFNjb3Bpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=