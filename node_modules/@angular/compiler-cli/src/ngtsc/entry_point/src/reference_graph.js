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
        define("@angular/compiler-cli/src/ngtsc/entry_point/src/reference_graph", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ReferenceGraph = /** @class */ (function () {
        function ReferenceGraph() {
            this.references = new Map();
        }
        ReferenceGraph.prototype.add = function (from, to) {
            if (!this.references.has(from)) {
                this.references.set(from, new Set());
            }
            this.references.get(from).add(to);
        };
        ReferenceGraph.prototype.transitiveReferencesOf = function (target) {
            var set = new Set();
            this.collectTransitiveReferences(set, target);
            return set;
        };
        ReferenceGraph.prototype.pathFrom = function (source, target) {
            return this.collectPathFrom(source, target, new Set());
        };
        ReferenceGraph.prototype.collectPathFrom = function (source, target, seen) {
            var _this = this;
            if (source === target) {
                // Looking for a path from the target to itself - that path is just the target. This is the
                // "base case" of the search.
                return [target];
            }
            else if (seen.has(source)) {
                // The search has already looked through this source before.
                return null;
            }
            // Consider outgoing edges from `source`.
            seen.add(source);
            if (!this.references.has(source)) {
                // There are no outgoing edges from `source`.
                return null;
            }
            else {
                // Look through the outgoing edges of `source`.
                // TODO(alxhub): use proper iteration when the legacy build is removed. (#27762)
                var candidatePath_1 = null;
                this.references.get(source).forEach(function (edge) {
                    // Early exit if a path has already been found.
                    if (candidatePath_1 !== null) {
                        return;
                    }
                    // Look for a path from this outgoing edge to `target`.
                    var partialPath = _this.collectPathFrom(edge, target, seen);
                    if (partialPath !== null) {
                        // A path exists from `edge` to `target`. Insert `source` at the beginning.
                        candidatePath_1 = tslib_1.__spread([source], partialPath);
                    }
                });
                return candidatePath_1;
            }
        };
        ReferenceGraph.prototype.collectTransitiveReferences = function (set, decl) {
            var _this = this;
            if (this.references.has(decl)) {
                // TODO(alxhub): use proper iteration when the legacy build is removed. (#27762)
                this.references.get(decl).forEach(function (ref) {
                    if (!set.has(ref)) {
                        set.add(ref);
                        _this.collectTransitiveReferences(set, ref);
                    }
                });
            }
        };
        return ReferenceGraph;
    }());
    exports.ReferenceGraph = ReferenceGraph;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlX2dyYXBoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9lbnRyeV9wb2ludC9zcmMvcmVmZXJlbmNlX2dyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUlIO1FBQUE7WUFDVSxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQWEsQ0FBQztRQWtFNUMsQ0FBQztRQWhFQyw0QkFBRyxHQUFILFVBQUksSUFBTyxFQUFFLEVBQUs7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCwrQ0FBc0IsR0FBdEIsVUFBdUIsTUFBUztZQUM5QixJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQsaUNBQVEsR0FBUixVQUFTLE1BQVMsRUFBRSxNQUFTO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRU8sd0NBQWUsR0FBdkIsVUFBd0IsTUFBUyxFQUFFLE1BQVMsRUFBRSxJQUFZO1lBQTFELGlCQWtDQztZQWpDQyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQ3JCLDJGQUEyRjtnQkFDM0YsNkJBQTZCO2dCQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMzQiw0REFBNEQ7Z0JBQzVELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCx5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLDZDQUE2QztnQkFDN0MsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCwrQ0FBK0M7Z0JBQy9DLGdGQUFnRjtnQkFDaEYsSUFBSSxlQUFhLEdBQWEsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUN2QywrQ0FBK0M7b0JBQy9DLElBQUksZUFBYSxLQUFLLElBQUksRUFBRTt3QkFDMUIsT0FBTztxQkFDUjtvQkFDRCx1REFBdUQ7b0JBQ3ZELElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO3dCQUN4QiwyRUFBMkU7d0JBQzNFLGVBQWEscUJBQUksTUFBTSxHQUFLLFdBQVcsQ0FBQyxDQUFDO3FCQUMxQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLGVBQWEsQ0FBQzthQUN0QjtRQUNILENBQUM7UUFFTyxvREFBMkIsR0FBbkMsVUFBb0MsR0FBVyxFQUFFLElBQU87WUFBeEQsaUJBVUM7WUFUQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixnRkFBZ0Y7Z0JBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQzVDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQUFDLEFBbkVELElBbUVDO0lBbkVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZUdyYXBoPFQgPSB0cy5EZWNsYXJhdGlvbj4ge1xuICBwcml2YXRlIHJlZmVyZW5jZXMgPSBuZXcgTWFwPFQsIFNldDxUPj4oKTtcblxuICBhZGQoZnJvbTogVCwgdG86IFQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmZXJlbmNlcy5oYXMoZnJvbSkpIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5zZXQoZnJvbSwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgdGhpcy5yZWZlcmVuY2VzLmdldChmcm9tKSEuYWRkKHRvKTtcbiAgfVxuXG4gIHRyYW5zaXRpdmVSZWZlcmVuY2VzT2YodGFyZ2V0OiBUKTogU2V0PFQ+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0PFQ+KCk7XG4gICAgdGhpcy5jb2xsZWN0VHJhbnNpdGl2ZVJlZmVyZW5jZXMoc2V0LCB0YXJnZXQpO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICBwYXRoRnJvbShzb3VyY2U6IFQsIHRhcmdldDogVCk6IFRbXXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsZWN0UGF0aEZyb20oc291cmNlLCB0YXJnZXQsIG5ldyBTZXQoKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RQYXRoRnJvbShzb3VyY2U6IFQsIHRhcmdldDogVCwgc2VlbjogU2V0PFQ+KTogVFtdfG51bGwge1xuICAgIGlmIChzb3VyY2UgPT09IHRhcmdldCkge1xuICAgICAgLy8gTG9va2luZyBmb3IgYSBwYXRoIGZyb20gdGhlIHRhcmdldCB0byBpdHNlbGYgLSB0aGF0IHBhdGggaXMganVzdCB0aGUgdGFyZ2V0LiBUaGlzIGlzIHRoZVxuICAgICAgLy8gXCJiYXNlIGNhc2VcIiBvZiB0aGUgc2VhcmNoLlxuICAgICAgcmV0dXJuIFt0YXJnZXRdO1xuICAgIH0gZWxzZSBpZiAoc2Vlbi5oYXMoc291cmNlKSkge1xuICAgICAgLy8gVGhlIHNlYXJjaCBoYXMgYWxyZWFkeSBsb29rZWQgdGhyb3VnaCB0aGlzIHNvdXJjZSBiZWZvcmUuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gQ29uc2lkZXIgb3V0Z29pbmcgZWRnZXMgZnJvbSBgc291cmNlYC5cbiAgICBzZWVuLmFkZChzb3VyY2UpO1xuXG4gICAgaWYgKCF0aGlzLnJlZmVyZW5jZXMuaGFzKHNvdXJjZSkpIHtcbiAgICAgIC8vIFRoZXJlIGFyZSBubyBvdXRnb2luZyBlZGdlcyBmcm9tIGBzb3VyY2VgLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvb2sgdGhyb3VnaCB0aGUgb3V0Z29pbmcgZWRnZXMgb2YgYHNvdXJjZWAuXG4gICAgICAvLyBUT0RPKGFseGh1Yik6IHVzZSBwcm9wZXIgaXRlcmF0aW9uIHdoZW4gdGhlIGxlZ2FjeSBidWlsZCBpcyByZW1vdmVkLiAoIzI3NzYyKVxuICAgICAgbGV0IGNhbmRpZGF0ZVBhdGg6IFRbXXxudWxsID0gbnVsbDtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5nZXQoc291cmNlKSEuZm9yRWFjaChlZGdlID0+IHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiBhIHBhdGggaGFzIGFscmVhZHkgYmVlbiBmb3VuZC5cbiAgICAgICAgaWYgKGNhbmRpZGF0ZVBhdGggIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9vayBmb3IgYSBwYXRoIGZyb20gdGhpcyBvdXRnb2luZyBlZGdlIHRvIGB0YXJnZXRgLlxuICAgICAgICBjb25zdCBwYXJ0aWFsUGF0aCA9IHRoaXMuY29sbGVjdFBhdGhGcm9tKGVkZ2UsIHRhcmdldCwgc2Vlbik7XG4gICAgICAgIGlmIChwYXJ0aWFsUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIEEgcGF0aCBleGlzdHMgZnJvbSBgZWRnZWAgdG8gYHRhcmdldGAuIEluc2VydCBgc291cmNlYCBhdCB0aGUgYmVnaW5uaW5nLlxuICAgICAgICAgIGNhbmRpZGF0ZVBhdGggPSBbc291cmNlLCAuLi5wYXJ0aWFsUGF0aF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2FuZGlkYXRlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RUcmFuc2l0aXZlUmVmZXJlbmNlcyhzZXQ6IFNldDxUPiwgZGVjbDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZmVyZW5jZXMuaGFzKGRlY2wpKSB7XG4gICAgICAvLyBUT0RPKGFseGh1Yik6IHVzZSBwcm9wZXIgaXRlcmF0aW9uIHdoZW4gdGhlIGxlZ2FjeSBidWlsZCBpcyByZW1vdmVkLiAoIzI3NzYyKVxuICAgICAgdGhpcy5yZWZlcmVuY2VzLmdldChkZWNsKSEuZm9yRWFjaChyZWYgPT4ge1xuICAgICAgICBpZiAoIXNldC5oYXMocmVmKSkge1xuICAgICAgICAgIHNldC5hZGQocmVmKTtcbiAgICAgICAgICB0aGlzLmNvbGxlY3RUcmFuc2l0aXZlUmVmZXJlbmNlcyhzZXQsIHJlZik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19