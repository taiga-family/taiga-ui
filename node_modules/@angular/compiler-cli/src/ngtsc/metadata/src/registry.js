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
        define("@angular/compiler-cli/src/ngtsc/metadata/src/registry", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/metadata/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/metadata/src/util");
    /**
     * A registry of directive, pipe, and module metadata for types defined in the current compilation
     * unit, which supports both reading and registering.
     */
    var LocalMetadataRegistry = /** @class */ (function () {
        function LocalMetadataRegistry() {
            this.directives = new Map();
            this.ngModules = new Map();
            this.pipes = new Map();
        }
        LocalMetadataRegistry.prototype.getDirectiveMetadata = function (ref) {
            return this.directives.has(ref.node) ? this.directives.get(ref.node) : null;
        };
        LocalMetadataRegistry.prototype.getNgModuleMetadata = function (ref) {
            return this.ngModules.has(ref.node) ? this.ngModules.get(ref.node) : null;
        };
        LocalMetadataRegistry.prototype.getPipeMetadata = function (ref) {
            return this.pipes.has(ref.node) ? this.pipes.get(ref.node) : null;
        };
        LocalMetadataRegistry.prototype.registerDirectiveMetadata = function (meta) {
            this.directives.set(meta.ref.node, meta);
        };
        LocalMetadataRegistry.prototype.registerNgModuleMetadata = function (meta) {
            this.ngModules.set(meta.ref.node, meta);
        };
        LocalMetadataRegistry.prototype.registerPipeMetadata = function (meta) {
            this.pipes.set(meta.ref.node, meta);
        };
        return LocalMetadataRegistry;
    }());
    exports.LocalMetadataRegistry = LocalMetadataRegistry;
    /**
     * A `MetadataRegistry` which registers metdata with multiple delegate `MetadataRegistry` instances.
     */
    var CompoundMetadataRegistry = /** @class */ (function () {
        function CompoundMetadataRegistry(registries) {
            this.registries = registries;
        }
        CompoundMetadataRegistry.prototype.registerDirectiveMetadata = function (meta) {
            var e_1, _a;
            try {
                for (var _b = tslib_1.__values(this.registries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var registry = _c.value;
                    registry.registerDirectiveMetadata(meta);
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
        CompoundMetadataRegistry.prototype.registerNgModuleMetadata = function (meta) {
            var e_2, _a;
            try {
                for (var _b = tslib_1.__values(this.registries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var registry = _c.value;
                    registry.registerNgModuleMetadata(meta);
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
        CompoundMetadataRegistry.prototype.registerPipeMetadata = function (meta) {
            var e_3, _a;
            try {
                for (var _b = tslib_1.__values(this.registries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var registry = _c.value;
                    registry.registerPipeMetadata(meta);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return CompoundMetadataRegistry;
    }());
    exports.CompoundMetadataRegistry = CompoundMetadataRegistry;
    /**
     * Registry that keeps track of classes that can be constructed via dependency injection (e.g.
     * injectables, directives, pipes).
     */
    var InjectableClassRegistry = /** @class */ (function () {
        function InjectableClassRegistry(host) {
            this.host = host;
            this.classes = new Set();
        }
        InjectableClassRegistry.prototype.registerInjectable = function (declaration) {
            this.classes.add(declaration);
        };
        InjectableClassRegistry.prototype.isInjectable = function (declaration) {
            // Figure out whether the class is injectable based on the registered classes, otherwise
            // fall back to looking at its members since we might not have been able register the class
            // if it was compiled already.
            return this.classes.has(declaration) || util_1.hasInjectableFields(declaration, this.host);
        };
        return InjectableClassRegistry;
    }());
    exports.InjectableClassRegistry = InjectableClassRegistry;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL21ldGFkYXRhL3NyYy9yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFNSCwwRUFBMkM7SUFFM0M7OztPQUdHO0lBQ0g7UUFBQTtZQUNVLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztZQUN4RCxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7WUFDdEQsVUFBSyxHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1FBcUJ4RCxDQUFDO1FBbkJDLG9EQUFvQixHQUFwQixVQUFxQixHQUFnQztZQUNuRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0UsQ0FBQztRQUNELG1EQUFtQixHQUFuQixVQUFvQixHQUFnQztZQUNsRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0UsQ0FBQztRQUNELCtDQUFlLEdBQWYsVUFBZ0IsR0FBZ0M7WUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JFLENBQUM7UUFFRCx5REFBeUIsR0FBekIsVUFBMEIsSUFBbUI7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELHdEQUF3QixHQUF4QixVQUF5QixJQUFrQjtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0Qsb0RBQW9CLEdBQXBCLFVBQXFCLElBQWM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILDRCQUFDO0lBQUQsQ0FBQyxBQXhCRCxJQXdCQztJQXhCWSxzREFBcUI7SUEwQmxDOztPQUVHO0lBQ0g7UUFDRSxrQ0FBb0IsVUFBOEI7WUFBOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFBRyxDQUFDO1FBRXRELDREQUF5QixHQUF6QixVQUEwQixJQUFtQjs7O2dCQUMzQyxLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbkMsSUFBTSxRQUFRLFdBQUE7b0JBQ2pCLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Ozs7Ozs7OztRQUNILENBQUM7UUFFRCwyREFBd0IsR0FBeEIsVUFBeUIsSUFBa0I7OztnQkFDekMsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7b0JBQW5DLElBQU0sUUFBUSxXQUFBO29CQUNqQixRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pDOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRUQsdURBQW9CLEdBQXBCLFVBQXFCLElBQWM7OztnQkFDakMsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7b0JBQW5DLElBQU0sUUFBUSxXQUFBO29CQUNqQixRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBQ0gsK0JBQUM7SUFBRCxDQUFDLEFBcEJELElBb0JDO0lBcEJZLDREQUF3QjtJQXNCckM7OztPQUdHO0lBQ0g7UUFHRSxpQ0FBb0IsSUFBb0I7WUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7WUFGaEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBRUgsQ0FBQztRQUU1QyxvREFBa0IsR0FBbEIsVUFBbUIsV0FBNkI7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELDhDQUFZLEdBQVosVUFBYSxXQUE2QjtZQUN4Qyx3RkFBd0Y7WUFDeEYsMkZBQTJGO1lBQzNGLDhCQUE4QjtZQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLDBCQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNILDhCQUFDO0lBQUQsQ0FBQyxBQWZELElBZUM7SUFmWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbiwgUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuXG5pbXBvcnQge0RpcmVjdGl2ZU1ldGEsIE1ldGFkYXRhUmVhZGVyLCBNZXRhZGF0YVJlZ2lzdHJ5LCBOZ01vZHVsZU1ldGEsIFBpcGVNZXRhfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2hhc0luamVjdGFibGVGaWVsZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQSByZWdpc3RyeSBvZiBkaXJlY3RpdmUsIHBpcGUsIGFuZCBtb2R1bGUgbWV0YWRhdGEgZm9yIHR5cGVzIGRlZmluZWQgaW4gdGhlIGN1cnJlbnQgY29tcGlsYXRpb25cbiAqIHVuaXQsIHdoaWNoIHN1cHBvcnRzIGJvdGggcmVhZGluZyBhbmQgcmVnaXN0ZXJpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbE1ldGFkYXRhUmVnaXN0cnkgaW1wbGVtZW50cyBNZXRhZGF0YVJlZ2lzdHJ5LCBNZXRhZGF0YVJlYWRlciB7XG4gIHByaXZhdGUgZGlyZWN0aXZlcyA9IG5ldyBNYXA8Q2xhc3NEZWNsYXJhdGlvbiwgRGlyZWN0aXZlTWV0YT4oKTtcbiAgcHJpdmF0ZSBuZ01vZHVsZXMgPSBuZXcgTWFwPENsYXNzRGVjbGFyYXRpb24sIE5nTW9kdWxlTWV0YT4oKTtcbiAgcHJpdmF0ZSBwaXBlcyA9IG5ldyBNYXA8Q2xhc3NEZWNsYXJhdGlvbiwgUGlwZU1ldGE+KCk7XG5cbiAgZ2V0RGlyZWN0aXZlTWV0YWRhdGEocmVmOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj4pOiBEaXJlY3RpdmVNZXRhfG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZXMuaGFzKHJlZi5ub2RlKSA/IHRoaXMuZGlyZWN0aXZlcy5nZXQocmVmLm5vZGUpISA6IG51bGw7XG4gIH1cbiAgZ2V0TmdNb2R1bGVNZXRhZGF0YShyZWY6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPik6IE5nTW9kdWxlTWV0YXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uZ01vZHVsZXMuaGFzKHJlZi5ub2RlKSA/IHRoaXMubmdNb2R1bGVzLmdldChyZWYubm9kZSkhIDogbnVsbDtcbiAgfVxuICBnZXRQaXBlTWV0YWRhdGEocmVmOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj4pOiBQaXBlTWV0YXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5waXBlcy5oYXMocmVmLm5vZGUpID8gdGhpcy5waXBlcy5nZXQocmVmLm5vZGUpISA6IG51bGw7XG4gIH1cblxuICByZWdpc3RlckRpcmVjdGl2ZU1ldGFkYXRhKG1ldGE6IERpcmVjdGl2ZU1ldGEpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZXMuc2V0KG1ldGEucmVmLm5vZGUsIG1ldGEpO1xuICB9XG4gIHJlZ2lzdGVyTmdNb2R1bGVNZXRhZGF0YShtZXRhOiBOZ01vZHVsZU1ldGEpOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kdWxlcy5zZXQobWV0YS5yZWYubm9kZSwgbWV0YSk7XG4gIH1cbiAgcmVnaXN0ZXJQaXBlTWV0YWRhdGEobWV0YTogUGlwZU1ldGEpOiB2b2lkIHtcbiAgICB0aGlzLnBpcGVzLnNldChtZXRhLnJlZi5ub2RlLCBtZXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgYE1ldGFkYXRhUmVnaXN0cnlgIHdoaWNoIHJlZ2lzdGVycyBtZXRkYXRhIHdpdGggbXVsdGlwbGUgZGVsZWdhdGUgYE1ldGFkYXRhUmVnaXN0cnlgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvdW5kTWV0YWRhdGFSZWdpc3RyeSBpbXBsZW1lbnRzIE1ldGFkYXRhUmVnaXN0cnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZ2lzdHJpZXM6IE1ldGFkYXRhUmVnaXN0cnlbXSkge31cblxuICByZWdpc3RlckRpcmVjdGl2ZU1ldGFkYXRhKG1ldGE6IERpcmVjdGl2ZU1ldGEpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHJlZ2lzdHJ5IG9mIHRoaXMucmVnaXN0cmllcykge1xuICAgICAgcmVnaXN0cnkucmVnaXN0ZXJEaXJlY3RpdmVNZXRhZGF0YShtZXRhKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck5nTW9kdWxlTWV0YWRhdGEobWV0YTogTmdNb2R1bGVNZXRhKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCByZWdpc3RyeSBvZiB0aGlzLnJlZ2lzdHJpZXMpIHtcbiAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyTmdNb2R1bGVNZXRhZGF0YShtZXRhKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlclBpcGVNZXRhZGF0YShtZXRhOiBQaXBlTWV0YSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcmVnaXN0cnkgb2YgdGhpcy5yZWdpc3RyaWVzKSB7XG4gICAgICByZWdpc3RyeS5yZWdpc3RlclBpcGVNZXRhZGF0YShtZXRhKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RyeSB0aGF0IGtlZXBzIHRyYWNrIG9mIGNsYXNzZXMgdGhhdCBjYW4gYmUgY29uc3RydWN0ZWQgdmlhIGRlcGVuZGVuY3kgaW5qZWN0aW9uIChlLmcuXG4gKiBpbmplY3RhYmxlcywgZGlyZWN0aXZlcywgcGlwZXMpLlxuICovXG5leHBvcnQgY2xhc3MgSW5qZWN0YWJsZUNsYXNzUmVnaXN0cnkge1xuICBwcml2YXRlIGNsYXNzZXMgPSBuZXcgU2V0PENsYXNzRGVjbGFyYXRpb24+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBSZWZsZWN0aW9uSG9zdCkge31cblxuICByZWdpc3RlckluamVjdGFibGUoZGVjbGFyYXRpb246IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzZXMuYWRkKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIGlzSW5qZWN0YWJsZShkZWNsYXJhdGlvbjogQ2xhc3NEZWNsYXJhdGlvbik6IGJvb2xlYW4ge1xuICAgIC8vIEZpZ3VyZSBvdXQgd2hldGhlciB0aGUgY2xhc3MgaXMgaW5qZWN0YWJsZSBiYXNlZCBvbiB0aGUgcmVnaXN0ZXJlZCBjbGFzc2VzLCBvdGhlcndpc2VcbiAgICAvLyBmYWxsIGJhY2sgdG8gbG9va2luZyBhdCBpdHMgbWVtYmVycyBzaW5jZSB3ZSBtaWdodCBub3QgaGF2ZSBiZWVuIGFibGUgcmVnaXN0ZXIgdGhlIGNsYXNzXG4gICAgLy8gaWYgaXQgd2FzIGNvbXBpbGVkIGFscmVhZHkuXG4gICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5oYXMoZGVjbGFyYXRpb24pIHx8IGhhc0luamVjdGFibGVGaWVsZHMoZGVjbGFyYXRpb24sIHRoaXMuaG9zdCk7XG4gIH1cbn1cbiJdfQ==