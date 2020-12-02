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
        define("@angular/compiler-cli/src/ngtsc/incremental/src/dependency_tracking", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * An implementation of the `DependencyTracker` dependency graph API.
     *
     * The `FileDependencyGraph`'s primary job is to determine whether a given file has "logically"
     * changed, given the set of physical changes (direct changes to files on disk).
     *
     * A file is logically changed if at least one of three conditions is met:
     *
     * 1. The file itself has physically changed.
     * 2. One of its dependencies has physically changed.
     * 3. One of its resource dependencies has physically changed.
     */
    var FileDependencyGraph = /** @class */ (function () {
        function FileDependencyGraph() {
            this.nodes = new Map();
        }
        FileDependencyGraph.prototype.addDependency = function (from, on) {
            this.nodeFor(from).dependsOn.add(on.fileName);
        };
        FileDependencyGraph.prototype.addResourceDependency = function (from, resource) {
            this.nodeFor(from).usesResources.add(resource);
        };
        FileDependencyGraph.prototype.addTransitiveDependency = function (from, on) {
            var e_1, _a;
            var nodeFrom = this.nodeFor(from);
            nodeFrom.dependsOn.add(on.fileName);
            var nodeOn = this.nodeFor(on);
            try {
                for (var _b = tslib_1.__values(nodeOn.dependsOn), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dep = _c.value;
                    nodeFrom.dependsOn.add(dep);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        FileDependencyGraph.prototype.addTransitiveResources = function (from, resourcesOf) {
            var e_2, _a;
            var nodeFrom = this.nodeFor(from);
            var nodeOn = this.nodeFor(resourcesOf);
            try {
                for (var _b = tslib_1.__values(nodeOn.usesResources), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dep = _c.value;
                    nodeFrom.usesResources.add(dep);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        FileDependencyGraph.prototype.isStale = function (sf, changedTsPaths, changedResources) {
            return isLogicallyChanged(sf, this.nodeFor(sf), changedTsPaths, EMPTY_SET, changedResources);
        };
        /**
         * Update the current dependency graph from a previous one, incorporating a set of physical
         * changes.
         *
         * This method performs two tasks:
         *
         * 1. For files which have not logically changed, their dependencies from `previous` are added to
         *    `this` graph.
         * 2. For files which have logically changed, they're added to a set of logically changed files
         *    which is eventually returned.
         *
         * In essence, for build `n`, this method performs:
         *
         * G(n) + L(n) = G(n - 1) + P(n)
         *
         * where:
         *
         * G(n) = the dependency graph of build `n`
         * L(n) = the logically changed files from build n - 1 to build n.
         * P(n) = the physically changed files from build n - 1 to build n.
         */
        FileDependencyGraph.prototype.updateWithPhysicalChanges = function (previous, changedTsPaths, deletedTsPaths, changedResources) {
            var e_3, _a;
            var logicallyChanged = new Set();
            try {
                for (var _b = tslib_1.__values(previous.nodes.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sf = _c.value;
                    var node = previous.nodeFor(sf);
                    if (isLogicallyChanged(sf, node, changedTsPaths, deletedTsPaths, changedResources)) {
                        logicallyChanged.add(sf.fileName);
                    }
                    else if (!deletedTsPaths.has(sf.fileName)) {
                        this.nodes.set(sf, {
                            dependsOn: new Set(node.dependsOn),
                            usesResources: new Set(node.usesResources),
                        });
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return logicallyChanged;
        };
        FileDependencyGraph.prototype.nodeFor = function (sf) {
            if (!this.nodes.has(sf)) {
                this.nodes.set(sf, {
                    dependsOn: new Set(),
                    usesResources: new Set(),
                });
            }
            return this.nodes.get(sf);
        };
        return FileDependencyGraph;
    }());
    exports.FileDependencyGraph = FileDependencyGraph;
    /**
     * Determine whether `sf` has logically changed, given its dependencies and the set of physically
     * changed files and resources.
     */
    function isLogicallyChanged(sf, node, changedTsPaths, deletedTsPaths, changedResources) {
        var e_4, _a, e_5, _b;
        // A file is logically changed if it has physically changed itself (including being deleted).
        if (changedTsPaths.has(sf.fileName) || deletedTsPaths.has(sf.fileName)) {
            return true;
        }
        try {
            // A file is logically changed if one of its dependencies has physically changed.
            for (var _c = tslib_1.__values(node.dependsOn), _d = _c.next(); !_d.done; _d = _c.next()) {
                var dep = _d.value;
                if (changedTsPaths.has(dep) || deletedTsPaths.has(dep)) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            // A file is logically changed if one of its resources has physically changed.
            for (var _e = tslib_1.__values(node.usesResources), _f = _e.next(); !_f.done; _f = _e.next()) {
                var dep = _f.value;
                if (changedResources.has(dep)) {
                    return true;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return false;
    }
    var EMPTY_SET = new Set();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeV90cmFja2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvaW5jcmVtZW50YWwvc3JjL2RlcGVuZGVuY3lfdHJhY2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBT0g7Ozs7Ozs7Ozs7O09BV0c7SUFDSDtRQUFBO1lBRVUsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFrRnpDLENBQUM7UUFoRkMsMkNBQWEsR0FBYixVQUFjLElBQU8sRUFBRSxFQUFLO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELG1EQUFxQixHQUFyQixVQUFzQixJQUFPLEVBQUUsUUFBd0I7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxxREFBdUIsR0FBdkIsVUFBd0IsSUFBTyxFQUFFLEVBQUs7O1lBQ3BDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUNoQyxLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBL0IsSUFBTSxHQUFHLFdBQUE7b0JBQ1osUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxD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aUY7WUFDakYsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTdCLElBQU0sR0FBRyxXQUFBO2dCQUNaLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0RCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGOzs7Ozs7Ozs7O1lBRUQsOEVBQThFO1lBQzlFLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFNLEdBQUcsV0FBQTtnQkFDWixJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBT0QsSUFBTSxTQUFTLEdBQXFCLElBQUksR0FBRyxFQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0RlcGVuZGVuY3lUcmFja2VyfSBmcm9tICcuLi9hcGknO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBgRGVwZW5kZW5jeVRyYWNrZXJgIGRlcGVuZGVuY3kgZ3JhcGggQVBJLlxuICpcbiAqIFRoZSBgRmlsZURlcGVuZGVuY3lHcmFwaGAncyBwcmltYXJ5IGpvYiBpcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGZpbGUgaGFzIFwibG9naWNhbGx5XCJcbiAqIGNoYW5nZWQsIGdpdmVuIHRoZSBzZXQgb2YgcGh5c2ljYWwgY2hhbmdlcyAoZGlyZWN0IGNoYW5nZXMgdG8gZmlsZXMgb24gZGlzaykuXG4gKlxuICogQSBmaWxlIGlzIGxvZ2ljYWxseSBjaGFuZ2VkIGlmIGF0IGxlYXN0IG9uZSBvZiB0aHJlZSBjb25kaXRpb25zIGlzIG1ldDpcbiAqXG4gKiAxLiBUaGUgZmlsZSBpdHNlbGYgaGFzIHBoeXNpY2FsbHkgY2hhbmdlZC5cbiAqIDIuIE9uZSBvZiBpdHMgZGVwZW5kZW5jaWVzIGhhcyBwaHlzaWNhbGx5IGNoYW5nZWQuXG4gKiAzLiBPbmUgb2YgaXRzIHJlc291cmNlIGRlcGVuZGVuY2llcyBoYXMgcGh5c2ljYWxseSBjaGFuZ2VkLlxuICovXG5leHBvcnQgY2xhc3MgRmlsZURlcGVuZGVuY3lHcmFwaDxUIGV4dGVuZHMge2ZpbGVOYW1lOiBzdHJpbmd9ID0gdHMuU291cmNlRmlsZT4gaW1wbGVtZW50c1xuICAgIERlcGVuZGVuY3lUcmFja2VyPFQ+IHtcbiAgcHJpdmF0ZSBub2RlcyA9IG5ldyBNYXA8VCwgRmlsZU5vZGU+KCk7XG5cbiAgYWRkRGVwZW5kZW5jeShmcm9tOiBULCBvbjogVCk6IHZvaWQge1xuICAgIHRoaXMubm9kZUZvcihmcm9tKS5kZXBlbmRzT24uYWRkKG9uLmZpbGVOYW1lKTtcbiAgfVxuXG4gIGFkZFJlc291cmNlRGVwZW5kZW5jeShmcm9tOiBULCByZXNvdXJjZTogQWJzb2x1dGVGc1BhdGgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGVGb3IoZnJvbSkudXNlc1Jlc291cmNlcy5hZGQocmVzb3VyY2UpO1xuICB9XG5cbiAgYWRkVHJhbnNpdGl2ZURlcGVuZGVuY3koZnJvbTogVCwgb246IFQpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlRnJvbSA9IHRoaXMubm9kZUZvcihmcm9tKTtcbiAgICBub2RlRnJvbS5kZXBlbmRzT24uYWRkKG9uLmZpbGVOYW1lKTtcblxuICAgIGNvbnN0IG5vZGVPbiA9IHRoaXMubm9kZUZvcihvbik7XG4gICAgZm9yIChjb25zdCBkZXAgb2Ygbm9kZU9uLmRlcGVuZHNPbikge1xuICAgICAgbm9kZUZyb20uZGVwZW5kc09uLmFkZChkZXApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRyYW5zaXRpdmVSZXNvdXJjZXMoZnJvbTogVCwgcmVzb3VyY2VzT2Y6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlRnJvbSA9IHRoaXMubm9kZUZvcihmcm9tKTtcbiAgICBjb25zdCBub2RlT24gPSB0aGlzLm5vZGVGb3IocmVzb3VyY2VzT2YpO1xuICAgIGZvciAoY29uc3QgZGVwIG9mIG5vZGVPbi51c2VzUmVzb3VyY2VzKSB7XG4gICAgICBub2RlRnJvbS51c2VzUmVzb3VyY2VzLmFkZChkZXApO1xuICAgIH1cbiAgfVxuXG4gIGlzU3RhbGUoc2Y6IFQsIGNoYW5nZWRUc1BhdGhzOiBTZXQ8c3RyaW5nPiwgY2hhbmdlZFJlc291cmNlczogU2V0PEFic29sdXRlRnNQYXRoPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0xvZ2ljYWxseUNoYW5nZWQoc2YsIHRoaXMubm9kZUZvcihzZiksIGNoYW5nZWRUc1BhdGhzLCBFTVBUWV9TRVQsIGNoYW5nZWRSZXNvdXJjZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCBkZXBlbmRlbmN5IGdyYXBoIGZyb20gYSBwcmV2aW91cyBvbmUsIGluY29ycG9yYXRpbmcgYSBzZXQgb2YgcGh5c2ljYWxcbiAgICogY2hhbmdlcy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdHdvIHRhc2tzOlxuICAgKlxuICAgKiAxLiBGb3IgZmlsZXMgd2hpY2ggaGF2ZSBub3QgbG9naWNhbGx5IGNoYW5nZWQsIHRoZWlyIGRlcGVuZGVuY2llcyBmcm9tIGBwcmV2aW91c2AgYXJlIGFkZGVkIHRvXG4gICAqICAgIGB0aGlzYCBncmFwaC5cbiAgICogMi4gRm9yIGZpbGVzIHdoaWNoIGhhdmUgbG9naWNhbGx5IGNoYW5nZWQsIHRoZXkncmUgYWRkZWQgdG8gYSBzZXQgb2YgbG9naWNhbGx5IGNoYW5nZWQgZmlsZXNcbiAgICogICAgd2hpY2ggaXMgZXZlbnR1YWxseSByZXR1cm5lZC5cbiAgICpcbiAgICogSW4gZXNzZW5jZSwgZm9yIGJ1aWxkIGBuYCwgdGhpcyBtZXRob2QgcGVyZm9ybXM6XG4gICAqXG4gICAqIEcobikgKyBMKG4pID0gRyhuIC0gMSkgKyBQKG4pXG4gICAqXG4gICAqIHdoZXJlOlxuICAgKlxuICAgKiBHKG4pID0gdGhlIGRlcGVuZGVuY3kgZ3JhcGggb2YgYnVpbGQgYG5gXG4gICAqIEwobikgPSB0aGUgbG9naWNhbGx5IGNoYW5nZWQgZmlsZXMgZnJvbSBidWlsZCBuIC0gMSB0byBidWlsZCBuLlxuICAgKiBQKG4pID0gdGhlIHBoeXNpY2FsbHkgY2hhbmdlZCBmaWxlcyBmcm9tIGJ1aWxkIG4gLSAxIHRvIGJ1aWxkIG4uXG4gICAqL1xuICB1cGRhdGVXaXRoUGh5c2ljYWxDaGFuZ2VzKFxuICAgICAgcHJldmlvdXM6IEZpbGVEZXBlbmRlbmN5R3JhcGg8VD4sIGNoYW5nZWRUc1BhdGhzOiBTZXQ8c3RyaW5nPiwgZGVsZXRlZFRzUGF0aHM6IFNldDxzdHJpbmc+LFxuICAgICAgY2hhbmdlZFJlc291cmNlczogU2V0PEFic29sdXRlRnNQYXRoPik6IFNldDxzdHJpbmc+IHtcbiAgICBjb25zdCBsb2dpY2FsbHlDaGFuZ2VkID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBmb3IgKGNvbnN0IHNmIG9mIHByZXZpb3VzLm5vZGVzLmtleXMoKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHByZXZpb3VzLm5vZGVGb3Ioc2YpO1xuICAgICAgaWYgKGlzTG9naWNhbGx5Q2hhbmdlZChzZiwgbm9kZSwgY2hhbmdlZFRzUGF0aHMsIGRlbGV0ZWRUc1BhdGhzLCBjaGFuZ2VkUmVzb3VyY2VzKSkge1xuICAgICAgICBsb2dpY2FsbHlDaGFuZ2VkLmFkZChzZi5maWxlTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKCFkZWxldGVkVHNQYXRocy5oYXMoc2YuZmlsZU5hbWUpKSB7XG4gICAgICAgIHRoaXMubm9kZXMuc2V0KHNmLCB7XG4gICAgICAgICAgZGVwZW5kc09uOiBuZXcgU2V0KG5vZGUuZGVwZW5kc09uKSxcbiAgICAgICAgICB1c2VzUmVzb3VyY2VzOiBuZXcgU2V0KG5vZGUudXNlc1Jlc291cmNlcyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb2dpY2FsbHlDaGFuZ2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBub2RlRm9yKHNmOiBUKTogRmlsZU5vZGUge1xuICAgIGlmICghdGhpcy5ub2Rlcy5oYXMoc2YpKSB7XG4gICAgICB0aGlzLm5vZGVzLnNldChzZiwge1xuICAgICAgICBkZXBlbmRzT246IG5ldyBTZXQ8c3RyaW5nPigpLFxuICAgICAgICB1c2VzUmVzb3VyY2VzOiBuZXcgU2V0PEFic29sdXRlRnNQYXRoPigpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vZGVzLmdldChzZikhO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYHNmYCBoYXMgbG9naWNhbGx5IGNoYW5nZWQsIGdpdmVuIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHRoZSBzZXQgb2YgcGh5c2ljYWxseVxuICogY2hhbmdlZCBmaWxlcyBhbmQgcmVzb3VyY2VzLlxuICovXG5mdW5jdGlvbiBpc0xvZ2ljYWxseUNoYW5nZWQ8VCBleHRlbmRzIHtmaWxlTmFtZTogc3RyaW5nfT4oXG4gICAgc2Y6IFQsIG5vZGU6IEZpbGVOb2RlLCBjaGFuZ2VkVHNQYXRoczogUmVhZG9ubHlTZXQ8c3RyaW5nPiwgZGVsZXRlZFRzUGF0aHM6IFJlYWRvbmx5U2V0PHN0cmluZz4sXG4gICAgY2hhbmdlZFJlc291cmNlczogUmVhZG9ubHlTZXQ8QWJzb2x1dGVGc1BhdGg+KTogYm9vbGVhbiB7XG4gIC8vIEEgZmlsZSBpcyBsb2dpY2FsbHkgY2hhbmdlZCBpZiBpdCBoYXMgcGh5c2ljYWxseSBjaGFuZ2VkIGl0c2VsZiAoaW5jbHVkaW5nIGJlaW5nIGRlbGV0ZWQpLlxuICBpZiAoY2hhbmdlZFRzUGF0aHMuaGFzKHNmLmZpbGVOYW1lKSB8fCBkZWxldGVkVHNQYXRocy5oYXMoc2YuZmlsZU5hbWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBBIGZpbGUgaXMgbG9naWNhbGx5IGNoYW5nZWQgaWYgb25lIG9mIGl0cyBkZXBlbmRlbmNpZXMgaGFzIHBoeXNpY2FsbHkgY2hhbmdlZC5cbiAgZm9yIChjb25zdCBkZXAgb2Ygbm9kZS5kZXBlbmRzT24pIHtcbiAgICBpZiAoY2hhbmdlZFRzUGF0aHMuaGFzKGRlcCkgfHwgZGVsZXRlZFRzUGF0aHMuaGFzKGRlcCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIEEgZmlsZSBpcyBsb2dpY2FsbHkgY2hhbmdlZCBpZiBvbmUgb2YgaXRzIHJlc291cmNlcyBoYXMgcGh5c2ljYWxseSBjaGFuZ2VkLlxuICBmb3IgKGNvbnN0IGRlcCBvZiBub2RlLnVzZXNSZXNvdXJjZXMpIHtcbiAgICBpZiAoY2hhbmdlZFJlc291cmNlcy5oYXMoZGVwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuaW50ZXJmYWNlIEZpbGVOb2RlIHtcbiAgZGVwZW5kc09uOiBTZXQ8c3RyaW5nPjtcbiAgdXNlc1Jlc291cmNlczogU2V0PEFic29sdXRlRnNQYXRoPjtcbn1cblxuY29uc3QgRU1QVFlfU0VUOiBSZWFkb25seVNldDxhbnk+ID0gbmV3IFNldDxhbnk+KCk7XG4iXX0=