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
        define("@angular/compiler-cli/ngcc/src/writing/package_json_updater", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    /**
     * A utility class providing a fluent API for recording multiple changes to a `package.json` file
     * (and optionally its in-memory parsed representation).
     *
     * NOTE: This class should generally not be instantiated directly; instances are implicitly created
     *       via `PackageJsonUpdater#createUpdate()`.
     */
    var PackageJsonUpdate = /** @class */ (function () {
        function PackageJsonUpdate(writeChangesImpl) {
            this.writeChangesImpl = writeChangesImpl;
            this.changes = [];
            this.applied = false;
        }
        /**
         * Record a change to a `package.json` property.
         *
         * If the ancestor objects do not yet exist in the `package.json` file, they will be created. The
         * positioning of the property can also be specified. (If the property already exists, it will be
         * moved accordingly.)
         *
         * NOTE: Property positioning is only guaranteed to be respected in the serialized `package.json`
         *       file. Positioning will not be taken into account when updating in-memory representations.
         *
         * NOTE 2: Property positioning only affects the last property in `propertyPath`. Ancestor
         *         objects' positioning will not be affected.
         *
         * @param propertyPath The path of a (possibly nested) property to add/update.
         * @param value The new value to set the property to.
         * @param position The desired position for the added/updated property.
         */
        PackageJsonUpdate.prototype.addChange = function (propertyPath, value, positioning) {
            if (positioning === void 0) { positioning = 'unimportant'; }
            this.ensureNotApplied();
            this.changes.push([propertyPath, value, positioning]);
            return this;
        };
        /**
         * Write the recorded changes to the associated `package.json` file (and optionally a
         * pre-existing, in-memory representation of it).
         *
         * @param packageJsonPath The path to the `package.json` file that needs to be updated.
         * @param parsedJson A pre-existing, in-memory representation of the `package.json` file that
         *                   needs to be updated as well.
         */
        PackageJsonUpdate.prototype.writeChanges = function (packageJsonPath, parsedJson) {
            this.ensureNotApplied();
            this.writeChangesImpl(this.changes, packageJsonPath, parsedJson);
            this.applied = true;
        };
        PackageJsonUpdate.prototype.ensureNotApplied = function () {
            if (this.applied) {
                throw new Error('Trying to apply a `PackageJsonUpdate` that has already been applied.');
            }
        };
        return PackageJsonUpdate;
    }());
    exports.PackageJsonUpdate = PackageJsonUpdate;
    /** A `PackageJsonUpdater` that writes directly to the file-system. */
    var DirectPackageJsonUpdater = /** @class */ (function () {
        function DirectPackageJsonUpdater(fs) {
            this.fs = fs;
        }
        DirectPackageJsonUpdater.prototype.createUpdate = function () {
            var _this = this;
            return new PackageJsonUpdate(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.writeChanges.apply(_this, tslib_1.__spread(args));
            });
        };
        DirectPackageJsonUpdater.prototype.writeChanges = function (changes, packageJsonPath, preExistingParsedJson) {
            var e_1, _a;
            if (changes.length === 0) {
                throw new Error("No changes to write to '" + packageJsonPath + "'.");
            }
            // Read and parse the `package.json` content.
            // NOTE: We are not using `preExistingParsedJson` (even if specified) to avoid corrupting the
            //       content on disk in case `preExistingParsedJson` is outdated.
            var parsedJson = this.fs.exists(packageJsonPath) ? JSON.parse(this.fs.readFile(packageJsonPath)) : {};
            try {
                // Apply all changes to both the canonical representation (read from disk) and any pre-existing,
                // in-memory representation.
                for (var changes_1 = tslib_1.__values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var _b = tslib_1.__read(changes_1_1.value, 3), propPath = _b[0], value = _b[1], positioning = _b[2];
                    if (propPath.length === 0) {
                        throw new Error("Missing property path for writing value to '" + packageJsonPath + "'.");
                    }
                    applyChange(parsedJson, propPath, value, positioning);
                    if (preExistingParsedJson) {
                        // No need to take property positioning into account for in-memory representations.
                        applyChange(preExistingParsedJson, propPath, value, 'unimportant');
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Ensure the containing directory exists (in case this is a synthesized `package.json` due to a
            // custom configuration) and write the updated content to disk.
            this.fs.ensureDir(file_system_1.dirname(packageJsonPath));
            this.fs.writeFile(packageJsonPath, JSON.stringify(parsedJson, null, 2) + "\n");
        };
        return DirectPackageJsonUpdater;
    }());
    exports.DirectPackageJsonUpdater = DirectPackageJsonUpdater;
    // Helpers
    function applyChange(ctx, propPath, value, positioning) {
        var lastPropIdx = propPath.length - 1;
        var lastProp = propPath[lastPropIdx];
        for (var i = 0; i < lastPropIdx; i++) {
            var key = propPath[i];
            var newCtx = ctx.hasOwnProperty(key) ? ctx[key] : (ctx[key] = {});
            if ((typeof newCtx !== 'object') || (newCtx === null) || Array.isArray(newCtx)) {
                throw new Error("Property path '" + propPath.join('.') + "' does not point to an object.");
            }
            ctx = newCtx;
        }
        ctx[lastProp] = value;
        positionProperty(ctx, lastProp, positioning);
    }
    exports.applyChange = applyChange;
    function movePropBefore(ctx, prop, isNextProp) {
        var allProps = Object.keys(ctx);
        var otherProps = allProps.filter(function (p) { return p !== prop; });
        var nextPropIdx = otherProps.findIndex(isNextProp);
        var propsToShift = (nextPropIdx === -1) ? [] : otherProps.slice(nextPropIdx);
        movePropToEnd(ctx, prop);
        propsToShift.forEach(function (p) { return movePropToEnd(ctx, p); });
    }
    function movePropToEnd(ctx, prop) {
        var value = ctx[prop];
        delete ctx[prop];
        ctx[prop] = value;
    }
    function positionProperty(ctx, prop, positioning) {
        switch (positioning) {
            case 'alphabetic':
                movePropBefore(ctx, prop, function (p) { return p > prop; });
                break;
            case 'unimportant':
                // Leave the property order unchanged; i.e. newly added properties will be last and existing
                // ones will remain in their old position.
                break;
            default:
                if ((typeof positioning !== 'object') || (positioning.before === undefined)) {
                    throw new Error("Unknown positioning (" + JSON.stringify(positioning) + ") for property '" + prop + "'.");
                }
                movePropBefore(ctx, prop, function (p) { return p === positioning.before; });
                break;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZV9qc29uX3VwZGF0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvd3JpdGluZy9wYWNrYWdlX2pzb25fdXBkYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwyRUFBbUY7SUErQ25GOzs7Ozs7T0FNRztJQUNIO1FBSUUsMkJBQW9CLGdCQUEyQztZQUEzQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTJCO1lBSHZELFlBQU8sR0FBd0IsRUFBRSxDQUFDO1lBQ2xDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFMEMsQ0FBQztRQUVuRTs7Ozs7Ozs7Ozs7Ozs7OztXQWdCRztRQUNILHFDQUFTLEdBQVQsVUFDSSxZQUFzQixFQUFFLEtBQWdCLEVBQ3hDLFdBQTJEO1lBQTNELDRCQUFBLEVBQUEsMkJBQTJEO1lBQzdELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDSCx3Q0FBWSxHQUFaLFVBQWEsZUFBK0IsRUFBRSxVQUF1QjtZQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUVPLDRDQUFnQixHQUF4QjtZQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO2FBQ3pGO1FBQ0gsQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FBQyxBQWxERCxJQWtEQztJQWxEWSw4Q0FBaUI7SUFvRDlCLHNFQUFzRTtJQUN0RTtRQUNFLGtDQUFvQixFQUFjO1lBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFHLENBQUM7UUFFdEMsK0NBQVksR0FBWjtZQUFBLGlCQUVDO1lBREMsT0FBTyxJQUFJLGlCQUFpQixDQUFDO2dCQUFDLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCx5QkFBTzs7Z0JBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxPQUFqQixLQUFJLG1CQUFpQixJQUFJO1lBQXpCLENBQTBCLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBRUQsK0NBQVksR0FBWixVQUNJLE9BQTRCLEVBQUUsZUFBK0IsRUFDN0QscUJBQWtDOztZQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUEyQixlQUFlLE9BQUksQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsNkNBQTZDO1lBQzdDLDZGQUE2RjtZQUM3RixxRUFBcUU7WUFDckUsSUFBTSxVQUFVLEdBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztnQkFFekYsZ0dBQWdHO2dCQUNoRyw0QkFBNEI7Z0JBQzVCLEtBQTZDLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7b0JBQTNDLElBQUEseUNBQThCLEVBQTdCLGdCQUFRLEVBQUUsYUFBSyxFQUFFLG1CQUFXO29CQUN0QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUErQyxlQUFlLE9BQUksQ0FBQyxDQUFDO3FCQUNyRjtvQkFFRCxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBRXRELElBQUkscUJBQXFCLEVBQUU7d0JBQ3pCLG1GQUFtRjt3QkFDbkYsV0FBVyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7cUJBQ3BFO2lCQUNGOzs7Ozs7Ozs7WUFFRCxnR0FBZ0c7WUFDaEcsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFJLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ0gsK0JBQUM7SUFBRCxDQUFDLEFBeENELElBd0NDO0lBeENZLDREQUF3QjtJQTBDckMsVUFBVTtJQUNWLFNBQWdCLFdBQVcsQ0FDdkIsR0FBZSxFQUFFLFFBQWtCLEVBQUUsS0FBZ0IsRUFDckQsV0FBMkM7UUFDN0MsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFcEUsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzlFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFnQyxDQUFDLENBQUM7YUFDdkY7WUFFRCxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQ2Q7UUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQW5CRCxrQ0FtQkM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFlLEVBQUUsSUFBWSxFQUFFLFVBQWtDO1FBQ3ZGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDcEQsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFNLFlBQVksR0FBRyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0UsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFlLEVBQUUsSUFBWTtRQUNsRCxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FDckIsR0FBZSxFQUFFLElBQVksRUFBRSxXQUEyQztRQUM1RSxRQUFRLFdBQVcsRUFBRTtZQUNuQixLQUFLLFlBQVk7Z0JBQ2YsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsSUFBSSxFQUFSLENBQVEsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxhQUFhO2dCQUNoQiw0RkFBNEY7Z0JBQzVGLDBDQUEwQztnQkFDMUMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLEVBQUU7b0JBQzNFLE1BQU0sSUFBSSxLQUFLLENBQ1gsMEJBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLHdCQUFtQixJQUFJLE9BQUksQ0FBQyxDQUFDO2lCQUNyRjtnQkFFRCxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUF4QixDQUF3QixDQUFDLENBQUM7Z0JBQ3pELE1BQU07U0FDVDtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIGRpcm5hbWUsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0pzb25PYmplY3QsIEpzb25WYWx1ZX0gZnJvbSAnLi4vcGFja2FnZXMvZW50cnlfcG9pbnQnO1xuXG5cbmV4cG9ydCB0eXBlIFBhY2thZ2VKc29uQ2hhbmdlID0gW3N0cmluZ1tdLCBKc29uVmFsdWUsIFBhY2thZ2VKc29uUHJvcGVydHlQb3NpdGlvbmluZ107XG5leHBvcnQgdHlwZSBQYWNrYWdlSnNvblByb3BlcnR5UG9zaXRpb25pbmcgPSAndW5pbXBvcnRhbnQnfCdhbHBoYWJldGljJ3x7YmVmb3JlOiBzdHJpbmd9O1xuZXhwb3J0IHR5cGUgV3JpdGVQYWNrYWdlSnNvbkNoYW5nZXNGbiA9XG4gICAgKGNoYW5nZXM6IFBhY2thZ2VKc29uQ2hhbmdlW10sIHBhY2thZ2VKc29uUGF0aDogQWJzb2x1dGVGc1BhdGgsIHBhcnNlZEpzb24/OiBKc29uT2JqZWN0KSA9PlxuICAgICAgICB2b2lkO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBzYWZlbHkgdXBkYXRlIHZhbHVlcyBpbiBhIGBwYWNrYWdlLmpzb25gIGZpbGUuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHRzXG4gKiBjb25zdCB1cGRhdGVQYWNrYWdlSnNvbiA9IHBhY2thZ2VKc29uVXBkYXRlclxuICogICAgIC5jcmVhdGVVcGRhdGUoKVxuICogICAgIC5hZGRDaGFuZ2UoWyduYW1lJ10sICdwYWNrYWdlLWZvbycpXG4gKiAgICAgLmFkZENoYW5nZShbJ3NjcmlwdHMnLCAnZm9vJ10sICdlY2hvIEZPT09PLi4uJywgJ3VuaW1wb3J0YW50JylcbiAqICAgICAuYWRkQ2hhbmdlKFsnZGVwZW5kZW5jaWVzJywgJ2JheiddLCAnMS4wLjAnLCAnYWxwaGFiZXRpYycpXG4gKiAgICAgLmFkZENoYW5nZShbJ2RlcGVuZGVuY2llcycsICdiYXInXSwgJzIuMC4wJywge2JlZm9yZTogJ2Jheid9KVxuICogICAgIC53cml0ZUNoYW5nZXMoJy9mb28vcGFja2FnZS5qc29uJyk7XG4gKiAgICAgLy8gb3JcbiAqICAgICAvLyAud3JpdGVDaGFuZ2VzKCcvZm9vL3BhY2thZ2UuanNvbicsIGluTWVtb3J5UGFyc2VkSnNvbik7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWNrYWdlSnNvblVwZGF0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgYFBhY2thZ2VKc29uVXBkYXRlYCBvYmplY3QsIHdoaWNoIHByb3ZpZGVzIGEgZmx1ZW50IEFQSSBmb3IgYmF0Y2hpbmcgdXBkYXRlcyB0byBhXG4gICAqIGBwYWNrYWdlLmpzb25gIGZpbGUuIChCYXRjaGluZyB0aGUgdXBkYXRlcyBpcyB1c2VmdWwsIGJlY2F1c2UgaXQgYXZvaWRzIHVubmVjZXNzYXJ5IEkvT1xuICAgKiBvcGVyYXRpb25zLilcbiAgICovXG4gIGNyZWF0ZVVwZGF0ZSgpOiBQYWNrYWdlSnNvblVwZGF0ZTtcblxuICAvKipcbiAgICogV3JpdGUgYSBzZXQgb2YgY2hhbmdlcyB0byB0aGUgc3BlY2lmaWVkIGBwYWNrYWdlLmpzb25gIGZpbGUgKGFuZCBvcHRpb25hbGx5IGEgcHJlLWV4aXN0aW5nLFxuICAgKiBpbi1tZW1vcnkgcmVwcmVzZW50YXRpb24gb2YgaXQpLlxuICAgKlxuICAgKiBAcGFyYW0gY2hhbmdlcyBUaGUgc2V0IG9mIGNoYW5nZXMgdG8gYXBwbHkuXG4gICAqIEBwYXJhbSBwYWNrYWdlSnNvblBhdGggVGhlIHBhdGggdG8gdGhlIGBwYWNrYWdlLmpzb25gIGZpbGUgdGhhdCBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgKiBAcGFyYW0gcGFyc2VkSnNvbiBBIHByZS1leGlzdGluZywgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlIHRoYXRcbiAgICogICAgICAgICAgICAgICAgICAgbmVlZHMgdG8gYmUgdXBkYXRlZCBhcyB3ZWxsLlxuICAgKi9cbiAgd3JpdGVDaGFuZ2VzKFxuICAgICAgY2hhbmdlczogUGFja2FnZUpzb25DaGFuZ2VbXSwgcGFja2FnZUpzb25QYXRoOiBBYnNvbHV0ZUZzUGF0aCwgcGFyc2VkSnNvbj86IEpzb25PYmplY3QpOiB2b2lkO1xufVxuXG4vKipcbiAqIEEgdXRpbGl0eSBjbGFzcyBwcm92aWRpbmcgYSBmbHVlbnQgQVBJIGZvciByZWNvcmRpbmcgbXVsdGlwbGUgY2hhbmdlcyB0byBhIGBwYWNrYWdlLmpzb25gIGZpbGVcbiAqIChhbmQgb3B0aW9uYWxseSBpdHMgaW4tbWVtb3J5IHBhcnNlZCByZXByZXNlbnRhdGlvbikuXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBzaG91bGQgZ2VuZXJhbGx5IG5vdCBiZSBpbnN0YW50aWF0ZWQgZGlyZWN0bHk7IGluc3RhbmNlcyBhcmUgaW1wbGljaXRseSBjcmVhdGVkXG4gKiAgICAgICB2aWEgYFBhY2thZ2VKc29uVXBkYXRlciNjcmVhdGVVcGRhdGUoKWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYWNrYWdlSnNvblVwZGF0ZSB7XG4gIHByaXZhdGUgY2hhbmdlczogUGFja2FnZUpzb25DaGFuZ2VbXSA9IFtdO1xuICBwcml2YXRlIGFwcGxpZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdyaXRlQ2hhbmdlc0ltcGw6IFdyaXRlUGFja2FnZUpzb25DaGFuZ2VzRm4pIHt9XG5cbiAgLyoqXG4gICAqIFJlY29yZCBhIGNoYW5nZSB0byBhIGBwYWNrYWdlLmpzb25gIHByb3BlcnR5LlxuICAgKlxuICAgKiBJZiB0aGUgYW5jZXN0b3Igb2JqZWN0cyBkbyBub3QgeWV0IGV4aXN0IGluIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlLCB0aGV5IHdpbGwgYmUgY3JlYXRlZC4gVGhlXG4gICAqIHBvc2l0aW9uaW5nIG9mIHRoZSBwcm9wZXJ0eSBjYW4gYWxzbyBiZSBzcGVjaWZpZWQuIChJZiB0aGUgcHJvcGVydHkgYWxyZWFkeSBleGlzdHMsIGl0IHdpbGwgYmVcbiAgICogbW92ZWQgYWNjb3JkaW5nbHkuKVxuICAgKlxuICAgKiBOT1RFOiBQcm9wZXJ0eSBwb3NpdGlvbmluZyBpcyBvbmx5IGd1YXJhbnRlZWQgdG8gYmUgcmVzcGVjdGVkIGluIHRoZSBzZXJpYWxpemVkIGBwYWNrYWdlLmpzb25gXG4gICAqICAgICAgIGZpbGUuIFBvc2l0aW9uaW5nIHdpbGwgbm90IGJlIHRha2VuIGludG8gYWNjb3VudCB3aGVuIHVwZGF0aW5nIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbnMuXG4gICAqXG4gICAqIE5PVEUgMjogUHJvcGVydHkgcG9zaXRpb25pbmcgb25seSBhZmZlY3RzIHRoZSBsYXN0IHByb3BlcnR5IGluIGBwcm9wZXJ0eVBhdGhgLiBBbmNlc3RvclxuICAgKiAgICAgICAgIG9iamVjdHMnIHBvc2l0aW9uaW5nIHdpbGwgbm90IGJlIGFmZmVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvcGVydHlQYXRoIFRoZSBwYXRoIG9mIGEgKHBvc3NpYmx5IG5lc3RlZCkgcHJvcGVydHkgdG8gYWRkL3VwZGF0ZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0by5cbiAgICogQHBhcmFtIHBvc2l0aW9uIFRoZSBkZXNpcmVkIHBvc2l0aW9uIGZvciB0aGUgYWRkZWQvdXBkYXRlZCBwcm9wZXJ0eS5cbiAgICovXG4gIGFkZENoYW5nZShcbiAgICAgIHByb3BlcnR5UGF0aDogc3RyaW5nW10sIHZhbHVlOiBKc29uVmFsdWUsXG4gICAgICBwb3NpdGlvbmluZzogUGFja2FnZUpzb25Qcm9wZXJ0eVBvc2l0aW9uaW5nID0gJ3VuaW1wb3J0YW50Jyk6IHRoaXMge1xuICAgIHRoaXMuZW5zdXJlTm90QXBwbGllZCgpO1xuICAgIHRoaXMuY2hhbmdlcy5wdXNoKFtwcm9wZXJ0eVBhdGgsIHZhbHVlLCBwb3NpdGlvbmluZ10pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRoZSByZWNvcmRlZCBjaGFuZ2VzIHRvIHRoZSBhc3NvY2lhdGVkIGBwYWNrYWdlLmpzb25gIGZpbGUgKGFuZCBvcHRpb25hbGx5IGFcbiAgICogcHJlLWV4aXN0aW5nLCBpbi1tZW1vcnkgcmVwcmVzZW50YXRpb24gb2YgaXQpLlxuICAgKlxuICAgKiBAcGFyYW0gcGFja2FnZUpzb25QYXRoIFRoZSBwYXRoIHRvIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlIHRoYXQgbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICogQHBhcmFtIHBhcnNlZEpzb24gQSBwcmUtZXhpc3RpbmcsIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZSB0aGF0XG4gICAqICAgICAgICAgICAgICAgICAgIG5lZWRzIHRvIGJlIHVwZGF0ZWQgYXMgd2VsbC5cbiAgICovXG4gIHdyaXRlQ2hhbmdlcyhwYWNrYWdlSnNvblBhdGg6IEFic29sdXRlRnNQYXRoLCBwYXJzZWRKc29uPzogSnNvbk9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZW5zdXJlTm90QXBwbGllZCgpO1xuICAgIHRoaXMud3JpdGVDaGFuZ2VzSW1wbCh0aGlzLmNoYW5nZXMsIHBhY2thZ2VKc29uUGF0aCwgcGFyc2VkSnNvbik7XG4gICAgdGhpcy5hcHBsaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlTm90QXBwbGllZCgpIHtcbiAgICBpZiAodGhpcy5hcHBsaWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhcHBseSBhIGBQYWNrYWdlSnNvblVwZGF0ZWAgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGFwcGxpZWQuJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBBIGBQYWNrYWdlSnNvblVwZGF0ZXJgIHRoYXQgd3JpdGVzIGRpcmVjdGx5IHRvIHRoZSBmaWxlLXN5c3RlbS4gKi9cbmV4cG9ydCBjbGFzcyBEaXJlY3RQYWNrYWdlSnNvblVwZGF0ZXIgaW1wbGVtZW50cyBQYWNrYWdlSnNvblVwZGF0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZzOiBGaWxlU3lzdGVtKSB7fVxuXG4gIGNyZWF0ZVVwZGF0ZSgpOiBQYWNrYWdlSnNvblVwZGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBQYWNrYWdlSnNvblVwZGF0ZSgoLi4uYXJncykgPT4gdGhpcy53cml0ZUNoYW5nZXMoLi4uYXJncykpO1xuICB9XG5cbiAgd3JpdGVDaGFuZ2VzKFxuICAgICAgY2hhbmdlczogUGFja2FnZUpzb25DaGFuZ2VbXSwgcGFja2FnZUpzb25QYXRoOiBBYnNvbHV0ZUZzUGF0aCxcbiAgICAgIHByZUV4aXN0aW5nUGFyc2VkSnNvbj86IEpzb25PYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY2hhbmdlcyB0byB3cml0ZSB0byAnJHtwYWNrYWdlSnNvblBhdGh9Jy5gKTtcbiAgICB9XG5cbiAgICAvLyBSZWFkIGFuZCBwYXJzZSB0aGUgYHBhY2thZ2UuanNvbmAgY29udGVudC5cbiAgICAvLyBOT1RFOiBXZSBhcmUgbm90IHVzaW5nIGBwcmVFeGlzdGluZ1BhcnNlZEpzb25gIChldmVuIGlmIHNwZWNpZmllZCkgdG8gYXZvaWQgY29ycnVwdGluZyB0aGVcbiAgICAvLyAgICAgICBjb250ZW50IG9uIGRpc2sgaW4gY2FzZSBgcHJlRXhpc3RpbmdQYXJzZWRKc29uYCBpcyBvdXRkYXRlZC5cbiAgICBjb25zdCBwYXJzZWRKc29uID1cbiAgICAgICAgdGhpcy5mcy5leGlzdHMocGFja2FnZUpzb25QYXRoKSA/IEpTT04ucGFyc2UodGhpcy5mcy5yZWFkRmlsZShwYWNrYWdlSnNvblBhdGgpKSA6IHt9O1xuXG4gICAgLy8gQXBwbHkgYWxsIGNoYW5nZXMgdG8gYm90aCB0aGUgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIChyZWFkIGZyb20gZGlzaykgYW5kIGFueSBwcmUtZXhpc3RpbmcsXG4gICAgLy8gaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uLlxuICAgIGZvciAoY29uc3QgW3Byb3BQYXRoLCB2YWx1ZSwgcG9zaXRpb25pbmddIG9mIGNoYW5nZXMpIHtcbiAgICAgIGlmIChwcm9wUGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHByb3BlcnR5IHBhdGggZm9yIHdyaXRpbmcgdmFsdWUgdG8gJyR7cGFja2FnZUpzb25QYXRofScuYCk7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5Q2hhbmdlKHBhcnNlZEpzb24sIHByb3BQYXRoLCB2YWx1ZSwgcG9zaXRpb25pbmcpO1xuXG4gICAgICBpZiAocHJlRXhpc3RpbmdQYXJzZWRKc29uKSB7XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gdGFrZSBwcm9wZXJ0eSBwb3NpdGlvbmluZyBpbnRvIGFjY291bnQgZm9yIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbnMuXG4gICAgICAgIGFwcGx5Q2hhbmdlKHByZUV4aXN0aW5nUGFyc2VkSnNvbiwgcHJvcFBhdGgsIHZhbHVlLCAndW5pbXBvcnRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIGNvbnRhaW5pbmcgZGlyZWN0b3J5IGV4aXN0cyAoaW4gY2FzZSB0aGlzIGlzIGEgc3ludGhlc2l6ZWQgYHBhY2thZ2UuanNvbmAgZHVlIHRvIGFcbiAgICAvLyBjdXN0b20gY29uZmlndXJhdGlvbikgYW5kIHdyaXRlIHRoZSB1cGRhdGVkIGNvbnRlbnQgdG8gZGlzay5cbiAgICB0aGlzLmZzLmVuc3VyZURpcihkaXJuYW1lKHBhY2thZ2VKc29uUGF0aCkpO1xuICAgIHRoaXMuZnMud3JpdGVGaWxlKHBhY2thZ2VKc29uUGF0aCwgYCR7SlNPTi5zdHJpbmdpZnkocGFyc2VkSnNvbiwgbnVsbCwgMil9XFxuYCk7XG4gIH1cbn1cblxuLy8gSGVscGVyc1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2hhbmdlKFxuICAgIGN0eDogSnNvbk9iamVjdCwgcHJvcFBhdGg6IHN0cmluZ1tdLCB2YWx1ZTogSnNvblZhbHVlLFxuICAgIHBvc2l0aW9uaW5nOiBQYWNrYWdlSnNvblByb3BlcnR5UG9zaXRpb25pbmcpOiB2b2lkIHtcbiAgY29uc3QgbGFzdFByb3BJZHggPSBwcm9wUGF0aC5sZW5ndGggLSAxO1xuICBjb25zdCBsYXN0UHJvcCA9IHByb3BQYXRoW2xhc3RQcm9wSWR4XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RQcm9wSWR4OyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBwcm9wUGF0aFtpXTtcbiAgICBjb25zdCBuZXdDdHggPSBjdHguaGFzT3duUHJvcGVydHkoa2V5KSA/IGN0eFtrZXldIDogKGN0eFtrZXldID0ge30pO1xuXG4gICAgaWYgKCh0eXBlb2YgbmV3Q3R4ICE9PSAnb2JqZWN0JykgfHwgKG5ld0N0eCA9PT0gbnVsbCkgfHwgQXJyYXkuaXNBcnJheShuZXdDdHgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IHBhdGggJyR7cHJvcFBhdGguam9pbignLicpfScgZG9lcyBub3QgcG9pbnQgdG8gYW4gb2JqZWN0LmApO1xuICAgIH1cblxuICAgIGN0eCA9IG5ld0N0eDtcbiAgfVxuXG4gIGN0eFtsYXN0UHJvcF0gPSB2YWx1ZTtcbiAgcG9zaXRpb25Qcm9wZXJ0eShjdHgsIGxhc3RQcm9wLCBwb3NpdGlvbmluZyk7XG59XG5cbmZ1bmN0aW9uIG1vdmVQcm9wQmVmb3JlKGN0eDogSnNvbk9iamVjdCwgcHJvcDogc3RyaW5nLCBpc05leHRQcm9wOiAocDogc3RyaW5nKSA9PiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmtleXMoY3R4KTtcbiAgY29uc3Qgb3RoZXJQcm9wcyA9IGFsbFByb3BzLmZpbHRlcihwID0+IHAgIT09IHByb3ApO1xuICBjb25zdCBuZXh0UHJvcElkeCA9IG90aGVyUHJvcHMuZmluZEluZGV4KGlzTmV4dFByb3ApO1xuICBjb25zdCBwcm9wc1RvU2hpZnQgPSAobmV4dFByb3BJZHggPT09IC0xKSA/IFtdIDogb3RoZXJQcm9wcy5zbGljZShuZXh0UHJvcElkeCk7XG5cbiAgbW92ZVByb3BUb0VuZChjdHgsIHByb3ApO1xuICBwcm9wc1RvU2hpZnQuZm9yRWFjaChwID0+IG1vdmVQcm9wVG9FbmQoY3R4LCBwKSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVQcm9wVG9FbmQoY3R4OiBKc29uT2JqZWN0LCBwcm9wOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgdmFsdWUgPSBjdHhbcHJvcF07XG4gIGRlbGV0ZSBjdHhbcHJvcF07XG4gIGN0eFtwcm9wXSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvblByb3BlcnR5KFxuICAgIGN0eDogSnNvbk9iamVjdCwgcHJvcDogc3RyaW5nLCBwb3NpdGlvbmluZzogUGFja2FnZUpzb25Qcm9wZXJ0eVBvc2l0aW9uaW5nKTogdm9pZCB7XG4gIHN3aXRjaCAocG9zaXRpb25pbmcpIHtcbiAgICBjYXNlICdhbHBoYWJldGljJzpcbiAgICAgIG1vdmVQcm9wQmVmb3JlKGN0eCwgcHJvcCwgcCA9PiBwID4gcHJvcCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1bmltcG9ydGFudCc6XG4gICAgICAvLyBMZWF2ZSB0aGUgcHJvcGVydHkgb3JkZXIgdW5jaGFuZ2VkOyBpLmUuIG5ld2x5IGFkZGVkIHByb3BlcnRpZXMgd2lsbCBiZSBsYXN0IGFuZCBleGlzdGluZ1xuICAgICAgLy8gb25lcyB3aWxsIHJlbWFpbiBpbiB0aGVpciBvbGQgcG9zaXRpb24uXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCh0eXBlb2YgcG9zaXRpb25pbmcgIT09ICdvYmplY3QnKSB8fCAocG9zaXRpb25pbmcuYmVmb3JlID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBVbmtub3duIHBvc2l0aW9uaW5nICgke0pTT04uc3RyaW5naWZ5KHBvc2l0aW9uaW5nKX0pIGZvciBwcm9wZXJ0eSAnJHtwcm9wfScuYCk7XG4gICAgICB9XG5cbiAgICAgIG1vdmVQcm9wQmVmb3JlKGN0eCwgcHJvcCwgcCA9PiBwID09PSBwb3NpdGlvbmluZy5iZWZvcmUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdfQ==