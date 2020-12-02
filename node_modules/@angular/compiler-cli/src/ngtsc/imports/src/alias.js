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
        define("@angular/compiler-cli/src/ngtsc/imports/src/alias", ["require", "exports", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/imports/src/emitter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_1 = require("@angular/compiler");
    var emitter_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/emitter");
    // Escape anything that isn't alphanumeric, '/' or '_'.
    var CHARS_TO_ESCAPE = /[^a-zA-Z0-9/_]/g;
    /**
     * An `AliasingHost` which generates and consumes alias re-exports when module names for each file
     * are determined by a `UnifiedModulesHost`.
     *
     * When using a `UnifiedModulesHost`, aliasing prevents issues with transitive dependencies. See the
     * README.md for more details.
     */
    var UnifiedModulesAliasingHost = /** @class */ (function () {
        function UnifiedModulesAliasingHost(unifiedModulesHost) {
            this.unifiedModulesHost = unifiedModulesHost;
            /**
             * With a `UnifiedModulesHost`, aliases are chosen automatically without the need to look through
             * the exports present in a .d.ts file, so we can avoid cluttering the .d.ts files.
             */
            this.aliasExportsInDts = false;
        }
        UnifiedModulesAliasingHost.prototype.maybeAliasSymbolAs = function (ref, context, ngModuleName, isReExport) {
            if (!isReExport) {
                // Aliasing is used with a UnifiedModulesHost to prevent transitive dependencies. Thus,
                // aliases
                // only need to be created for directives/pipes which are not direct declarations of an
                // NgModule which exports them.
                return null;
            }
            return this.aliasName(ref.node, context);
        };
        /**
         * Generates an `Expression` to import `decl` from `via`, assuming an export was added when `via`
         * was compiled per `maybeAliasSymbolAs` above.
         */
        UnifiedModulesAliasingHost.prototype.getAliasIn = function (decl, via, isReExport) {
            if (!isReExport) {
                // Directly exported directives/pipes don't require an alias, per the logic in
                // `maybeAliasSymbolAs`.
                return null;
            }
            // viaModule is the module it'll actually be imported from.
            var moduleName = this.unifiedModulesHost.fileNameToModuleName(via.fileName, via.fileName);
            return new compiler_1.ExternalExpr({ moduleName: moduleName, name: this.aliasName(decl, via) });
        };
        /**
         * Generates an alias name based on the full module name of the file which declares the aliased
         * directive/pipe.
         */
        UnifiedModulesAliasingHost.prototype.aliasName = function (decl, context) {
            // The declared module is used to get the name of the alias.
            var declModule = this.unifiedModulesHost.fileNameToModuleName(decl.getSourceFile().fileName, context.fileName);
            var replaced = declModule.replace(CHARS_TO_ESCAPE, '_').replace(/\//g, '$');
            return 'ɵng$' + replaced + '$$' + decl.name.text;
        };
        return UnifiedModulesAliasingHost;
    }());
    exports.UnifiedModulesAliasingHost = UnifiedModulesAliasingHost;
    /**
     * An `AliasingHost` which exports directives from any file containing an NgModule in which they're
     * declared/exported, under a private symbol name.
     *
     * These exports support cases where an NgModule is imported deeply from an absolute module path
     * (that is, it's not part of an Angular Package Format entrypoint), and the compiler needs to
     * import any matched directives/pipes from the same path (to the NgModule file). See README.md for
     * more details.
     */
    var PrivateExportAliasingHost = /** @class */ (function () {
        function PrivateExportAliasingHost(host) {
            this.host = host;
            /**
             * Under private export aliasing, the `AbsoluteModuleStrategy` used for emitting references will
             * will select aliased exports that it finds in the .d.ts file for an NgModule's file. Thus,
             * emitting these exports in .d.ts is a requirement for the `PrivateExportAliasingHost` to
             * function correctly.
             */
            this.aliasExportsInDts = true;
        }
        PrivateExportAliasingHost.prototype.maybeAliasSymbolAs = function (ref, context, ngModuleName) {
            if (ref.hasOwningModuleGuess) {
                // Skip nodes that already have an associated absolute module specifier, since they can be
                // safely imported from that specifier.
                return null;
            }
            // Look for a user-provided export of `decl` in `context`. If one exists, then an alias export
            // is not needed.
            // TODO(alxhub): maybe add a host method to check for the existence of an export without going
            // through the entire list of exports.
            var exports = this.host.getExportsOfModule(context);
            if (exports === null) {
                // Something went wrong, and no exports were available at all. Bail rather than risk creating
                // re-exports when they're not needed.
                throw new Error("Could not determine the exports of: " + context.fileName);
            }
            var found = false;
            exports.forEach(function (value) {
                if (value.node === ref.node) {
                    found = true;
                }
            });
            if (found) {
                // The module exports the declared class directly, no alias is necessary.
                return null;
            }
            return "\u0275ngExport\u0275" + ngModuleName + "\u0275" + ref.node.name.text;
        };
        /**
         * A `PrivateExportAliasingHost` only generates re-exports and does not direct the compiler to
         * directly consume the aliases it creates.
         *
         * Instead, they're consumed indirectly: `AbsoluteModuleStrategy` `ReferenceEmitterStrategy` will
         * select these alias exports automatically when looking for an export of the directive/pipe from
         * the same path as the NgModule was imported.
         *
         * Thus, `getAliasIn` always returns `null`.
         */
        PrivateExportAliasingHost.prototype.getAliasIn = function () {
            return null;
        };
        return PrivateExportAliasingHost;
    }());
    exports.PrivateExportAliasingHost = PrivateExportAliasingHost;
    /**
     * A `ReferenceEmitStrategy` which will consume the alias attached to a particular `Reference` to a
     * directive or pipe, if it exists.
     */
    var AliasStrategy = /** @class */ (function () {
        function AliasStrategy() {
        }
        AliasStrategy.prototype.emit = function (ref, context, importMode) {
            if (importMode & emitter_1.ImportFlags.NoAliasing) {
                return null;
            }
            return ref.alias;
        };
        return AliasStrategy;
    }());
    exports.AliasStrategy = AliasStrategy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMvc3JjL2FsaWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsOENBQTJEO0lBTTNELCtFQUE2RDtJQUs3RCx1REFBdUQ7SUFDdkQsSUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFtRTFDOzs7Ozs7T0FNRztJQUNIO1FBQ0Usb0NBQW9CLGtCQUFzQztZQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBRTFEOzs7ZUFHRztZQUNNLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQU4wQixDQUFDO1FBUTlELHVEQUFrQixHQUFsQixVQUNJLEdBQWdDLEVBQUUsT0FBc0IsRUFBRSxZQUFvQixFQUM5RSxVQUFtQjtZQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLHVGQUF1RjtnQkFDdkYsVUFBVTtnQkFDVix1RkFBdUY7Z0JBQ3ZGLCtCQUErQjtnQkFDL0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCwrQ0FBVSxHQUFWLFVBQVcsSUFBc0IsRUFBRSxHQUFrQixFQUFFLFVBQW1CO1lBQ3hFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsOEVBQThFO2dCQUM5RSx3QkFBd0I7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCwyREFBMkQ7WUFDM0QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sSUFBSSx1QkFBWSxDQUFDLEVBQUMsVUFBVSxZQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ssOENBQVMsR0FBakIsVUFBa0IsSUFBc0IsRUFBRSxPQUFzQjtZQUM5RCw0REFBNEQ7WUFDNUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUMzRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyRCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkQsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0FBQyxBQWpERCxJQWlEQztJQWpEWSxnRUFBMEI7SUFtRHZDOzs7Ozs7OztPQVFHO0lBQ0g7UUFDRSxtQ0FBb0IsSUFBb0I7WUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7WUFFeEM7Ozs7O2VBS0c7WUFDTSxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFSUyxDQUFDO1FBVTVDLHNEQUFrQixHQUFsQixVQUNJLEdBQWdDLEVBQUUsT0FBc0IsRUFBRSxZQUFvQjtZQUNoRixJQUFJLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDNUIsMEZBQTBGO2dCQUMxRix1Q0FBdUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCw4RkFBOEY7WUFDOUYsaUJBQWlCO1lBQ2pCLDhGQUE4RjtZQUM5RixzQ0FBc0M7WUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLDZGQUE2RjtnQkFDN0Ysc0NBQXNDO2dCQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF1QyxPQUFPLENBQUMsUUFBVSxDQUFDLENBQUM7YUFDNUU7WUFDRCxJQUFJLEtBQUssR0FBWSxLQUFLLENBQUM7WUFDM0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ25CLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNkO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUssRUFBRTtnQkFDVCx5RUFBeUU7Z0JBQ3pFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLHlCQUFhLFlBQVksY0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDM0QsQ0FBQztRQUVEOzs7Ozs7Ozs7V0FTRztRQUNILDhDQUFVLEdBQVY7WUFDRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxnQ0FBQztJQUFELENBQUMsQUF0REQsSUFzREM7SUF0RFksOERBQXlCO0lBd0R0Qzs7O09BR0c7SUFDSDtRQUFBO1FBUUEsQ0FBQztRQVBDLDRCQUFJLEdBQUosVUFBSyxHQUF1QixFQUFFLE9BQXNCLEVBQUUsVUFBdUI7WUFDM0UsSUFBSSxVQUFVLEdBQUcscUJBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FBQyxBQVJELElBUUM7SUFSWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFeHByZXNzaW9uLCBFeHRlcm5hbEV4cHJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1VuaWZpZWRNb2R1bGVzSG9zdH0gZnJvbSAnLi4vLi4vY29yZS9hcGknO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9uLCBpc05hbWVkQ2xhc3NEZWNsYXJhdGlvbiwgUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuXG5pbXBvcnQge0ltcG9ydEZsYWdzLCBSZWZlcmVuY2VFbWl0U3RyYXRlZ3l9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi9yZWZlcmVuY2VzJztcblxuXG5cbi8vIEVzY2FwZSBhbnl0aGluZyB0aGF0IGlzbid0IGFscGhhbnVtZXJpYywgJy8nIG9yICdfJy5cbmNvbnN0IENIQVJTX1RPX0VTQ0FQRSA9IC9bXmEtekEtWjAtOS9fXS9nO1xuXG4vKipcbiAqIEEgaG9zdCBmb3IgdGhlIGFsaWFzaW5nIHN5c3RlbSwgd2hpY2ggYWxsb3dzIGZvciBhbHRlcm5hdGl2ZSBleHBvcnRzL2ltcG9ydHMgb2YgZGlyZWN0aXZlcy9waXBlcy5cbiAqXG4gKiBHaXZlbiBhbiBpbXBvcnQgb2YgYW4gTmdNb2R1bGUgKGUuZy4gYENvbW1vbk1vZHVsZWApLCB0aGUgY29tcGlsZXIgbXVzdCBnZW5lcmF0ZSBpbXBvcnRzIHRvIHRoZVxuICogZGlyZWN0aXZlcyBhbmQgcGlwZXMgZXhwb3J0ZWQgYnkgdGhpcyBtb2R1bGUgKGUuZy4gYE5nSWZgKSB3aGVuIHRoZXkncmUgdXNlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIHRlbXBsYXRlLiBJbiBpdHMgZGVmYXVsdCBjb25maWd1cmF0aW9uLCBpZiB0aGUgY29tcGlsZXIgaXMgbm90IGRpcmVjdGx5IGFibGUgdG8gaW1wb3J0IHRoZVxuICogY29tcG9uZW50IGZyb20gYW5vdGhlciBmaWxlIHdpdGhpbiB0aGUgc2FtZSBwcm9qZWN0LCBpdCB3aWxsIGF0dGVtcHQgdG8gaW1wb3J0IHRoZSBjb21wb25lbnRcbiAqIGZyb20gdGhlIHNhbWUgKGFic29sdXRlKSBwYXRoIGJ5IHdoaWNoIHRoZSBtb2R1bGUgd2FzIGltcG9ydGVkLiBTbyBpbiB0aGUgYWJvdmUgZXhhbXBsZSBpZlxuICogYENvbW1vbk1vZHVsZWAgd2FzIGltcG9ydGVkIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbicsIHRoZSBjb21waWxlciB3aWxsIGF0dGVtcHQgdG8gaW1wb3J0IGBOZ0lmYFxuICogZnJvbSAnQGFuZ3VsYXIvY29tbW9uJyBhcyB3ZWxsLlxuICpcbiAqIFRoZSBhbGlhc2luZyBzeXN0ZW0gaW50ZXJhY3RzIHdpdGggdGhlIGFib3ZlIGxvZ2ljIGluIHR3byBkaXN0aW5jdCB3YXlzLlxuICpcbiAqIDEpIEl0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBcImFsaWFzXCIgcmUtZXhwb3J0cyBmcm9tIGRpZmZlcmVudCBmaWxlcywgd2hpY2ggY2FuIGJlIHVzZWQgd2hlbiB0aGVcbiAqICAgIHVzZXIgaGFzbid0IGV4cG9ydGVkIHRoZSBkaXJlY3RpdmUocykgZnJvbSB0aGUgRVMgbW9kdWxlIGNvbnRhaW5pbmcgdGhlIE5nTW9kdWxlLiBUaGVzZSByZS1cbiAqICAgIGV4cG9ydHMgY2FuIGFsc28gYmUgaGVscGZ1bCB3aGVuIHVzaW5nIGEgYFVuaWZpZWRNb2R1bGVzSG9zdGAsIHdoaWNoIG92ZXJyaWRlcyB0aGUgaW1wb3J0XG4gKiAgICBsb2dpYyBkZXNjcmliZWQgYWJvdmUuXG4gKlxuICogMikgSXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGFuIGFsdGVybmF0aXZlIGltcG9ydCBleHByZXNzaW9uIGZvciBhIGRpcmVjdGl2ZSBvciBwaXBlLCBpbnN0ZWFkIG9mXG4gKiAgICB0aGUgaW1wb3J0IHRoYXQgdGhlIG5vcm1hbCBsb2dpYyB3b3VsZCBhcHBseS4gVGhlIGFsaWFzIHVzZWQgZGVwZW5kcyBvbiB0aGUgcHJvdmVuYW5jZSBvZiB0aGVcbiAqICAgIGBSZWZlcmVuY2VgIHdoaWNoIHdhcyBvYnRhaW5lZCBmb3IgdGhlIGRpcmVjdGl2ZS9waXBlLCB3aGljaCBpcyB1c3VhbGx5IGEgcHJvcGVydHkgb2YgaG93IGl0XG4gKiAgICBjYW1lIHRvIGJlIGluIGEgdGVtcGxhdGUncyBzY29wZSAoZS5nLiBieSB3aGljaCBOZ01vZHVsZSkuXG4gKlxuICogU2VlIHRoZSBSRUFETUUubWQgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gaG93IGFsaWFzaW5nIHdvcmtzIHdpdGhpbiB0aGUgY29tcGlsZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxpYXNpbmdIb3N0IHtcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgYW55IGFsaWFzIHJlLWV4cG9ydHMgYXJlIHJlbmRlcmVkIGludG8gLmQudHMgZmlsZXMuXG4gICAqXG4gICAqIFRoaXMgaXMgbm90IGFsd2F5cyBuZWNlc3NhcnkgZm9yIGFsaWFzaW5nIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgc28gdGhpcyBmbGFnIGFsbG93cyBhblxuICAgKiBgQWxpYXNpbmdIb3N0YCB0byBhdm9pZCBjbHV0dGVyaW5nIHRoZSAuZC50cyBmaWxlcyBpZiBleHBvcnRzIGFyZSBub3Qgc3RyaWN0bHkgbmVlZGVkLlxuICAgKi9cbiAgcmVhZG9ubHkgYWxpYXNFeHBvcnRzSW5EdHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBhIG5hbWUgYnkgd2hpY2ggYGRlY2xgIHNob3VsZCBiZSByZS1leHBvcnRlZCBmcm9tIGBjb250ZXh0YCwgZGVwZW5kaW5nIG9uIHRoZVxuICAgKiBwYXJ0aWN1bGFyIHNldCBvZiBhbGlhc2luZyBydWxlcyBpbiBwbGFjZS5cbiAgICpcbiAgICogYG1heWJlQWxpYXNTeW1ib2xBc2AgY2FuIHJldHVybiBgbnVsbGAsIGluIHdoaWNoIGNhc2Ugbm8gYWxpYXMgZXhwb3J0IHNob3VsZCBiZSBnZW5lcmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSByZWYgYSBgUmVmZXJlbmNlYCB0byB0aGUgZGlyZWN0aXZlL3BpcGUgdG8gY29uc2lkZXIgZm9yIGFsaWFzaW5nLlxuICAgKiBAcGFyYW0gY29udGV4dCB0aGUgYHRzLlNvdXJjZUZpbGVgIGluIHdoaWNoIHRoZSBhbGlhcyByZS1leHBvcnQgbWlnaHQgbmVlZCB0byBiZSBnZW5lcmF0ZWQuXG4gICAqIEBwYXJhbSBuZ01vZHVsZU5hbWUgdGhlIGRlY2xhcmVkIG5hbWUgb2YgdGhlIGBOZ01vZHVsZWAgd2l0aGluIGBjb250ZXh0YCBmb3Igd2hpY2ggdGhlIGFsaWFzXG4gICAqIHdvdWxkIGJlIGdlbmVyYXRlZC5cbiAgICogQHBhcmFtIGlzUmVFeHBvcnQgd2hldGhlciB0aGUgZGlyZWN0aXZlL3BpcGUgdW5kZXIgY29uc2lkZXJhdGlvbiBpcyByZS1leHBvcnRlZCBmcm9tIGFub3RoZXJcbiAgICogTmdNb2R1bGUgKGFzIG9wcG9zZWQgdG8gYmVpbmcgZGVjbGFyZWQgYnkgaXQgZGlyZWN0bHkpLlxuICAgKi9cbiAgbWF5YmVBbGlhc1N5bWJvbEFzKFxuICAgICAgcmVmOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj4sIGNvbnRleHQ6IHRzLlNvdXJjZUZpbGUsIG5nTW9kdWxlTmFtZTogc3RyaW5nLFxuICAgICAgaXNSZUV4cG9ydDogYm9vbGVhbik6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgYW4gYEV4cHJlc3Npb25gIGJ5IHdoaWNoIGBkZWNsYCBzaG91bGQgYmUgaW1wb3J0ZWQgZnJvbSBgdmlhYCB1c2luZyBhbiBhbGlhcyBleHBvcnRcbiAgICogKHdoaWNoIHNob3VsZCBoYXZlIGJlZW4gcHJldmlvdXNseSBjcmVhdGVkIHdoZW4gY29tcGlsaW5nIGB2aWFgKS5cbiAgICpcbiAgICogYGdldEFsaWFzSW5gIGNhbiByZXR1cm4gYG51bGxgLCBpbiB3aGljaCBjYXNlIG5vIGFsaWFzIGlzIG5lZWRlZCB0byBpbXBvcnQgYGRlY2xgIGZyb20gYHZpYWBcbiAgICogKGFuZCB0aGUgbm9ybWFsIGltcG9ydCBydWxlcyBzaG91bGQgYmUgdXNlZCkuXG4gICAqXG4gICAqIEBwYXJhbSBkZWNsIHRoZSBkZWNsYXJhdGlvbiBvZiB0aGUgZGlyZWN0aXZlL3BpcGUgd2hpY2ggaXMgYmVpbmcgaW1wb3J0ZWQsIGFuZCB3aGljaCBtaWdodCBiZVxuICAgKiBhbGlhc2VkLlxuICAgKiBAcGFyYW0gdmlhIHRoZSBgdHMuU291cmNlRmlsZWAgd2hpY2ggbWlnaHQgY29udGFpbiBhbiBhbGlhcyB0byB0aGVcbiAgICovXG4gIGdldEFsaWFzSW4oZGVjbDogQ2xhc3NEZWNsYXJhdGlvbiwgdmlhOiB0cy5Tb3VyY2VGaWxlLCBpc1JlRXhwb3J0OiBib29sZWFuKTogRXhwcmVzc2lvbnxudWxsO1xufVxuXG4vKipcbiAqIEFuIGBBbGlhc2luZ0hvc3RgIHdoaWNoIGdlbmVyYXRlcyBhbmQgY29uc3VtZXMgYWxpYXMgcmUtZXhwb3J0cyB3aGVuIG1vZHVsZSBuYW1lcyBmb3IgZWFjaCBmaWxlXG4gKiBhcmUgZGV0ZXJtaW5lZCBieSBhIGBVbmlmaWVkTW9kdWxlc0hvc3RgLlxuICpcbiAqIFdoZW4gdXNpbmcgYSBgVW5pZmllZE1vZHVsZXNIb3N0YCwgYWxpYXNpbmcgcHJldmVudHMgaXNzdWVzIHdpdGggdHJhbnNpdGl2ZSBkZXBlbmRlbmNpZXMuIFNlZSB0aGVcbiAqIFJFQURNRS5tZCBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5leHBvcnQgY2xhc3MgVW5pZmllZE1vZHVsZXNBbGlhc2luZ0hvc3QgaW1wbGVtZW50cyBBbGlhc2luZ0hvc3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVuaWZpZWRNb2R1bGVzSG9zdDogVW5pZmllZE1vZHVsZXNIb3N0KSB7fVxuXG4gIC8qKlxuICAgKiBXaXRoIGEgYFVuaWZpZWRNb2R1bGVzSG9zdGAsIGFsaWFzZXMgYXJlIGNob3NlbiBhdXRvbWF0aWNhbGx5IHdpdGhvdXQgdGhlIG5lZWQgdG8gbG9vayB0aHJvdWdoXG4gICAqIHRoZSBleHBvcnRzIHByZXNlbnQgaW4gYSAuZC50cyBmaWxlLCBzbyB3ZSBjYW4gYXZvaWQgY2x1dHRlcmluZyB0aGUgLmQudHMgZmlsZXMuXG4gICAqL1xuICByZWFkb25seSBhbGlhc0V4cG9ydHNJbkR0cyA9IGZhbHNlO1xuXG4gIG1heWJlQWxpYXNTeW1ib2xBcyhcbiAgICAgIHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+LCBjb250ZXh0OiB0cy5Tb3VyY2VGaWxlLCBuZ01vZHVsZU5hbWU6IHN0cmluZyxcbiAgICAgIGlzUmVFeHBvcnQ6IGJvb2xlYW4pOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKCFpc1JlRXhwb3J0KSB7XG4gICAgICAvLyBBbGlhc2luZyBpcyB1c2VkIHdpdGggYSBVbmlmaWVkTW9kdWxlc0hvc3QgdG8gcHJldmVudCB0cmFuc2l0aXZlIGRlcGVuZGVuY2llcy4gVGh1cyxcbiAgICAgIC8vIGFsaWFzZXNcbiAgICAgIC8vIG9ubHkgbmVlZCB0byBiZSBjcmVhdGVkIGZvciBkaXJlY3RpdmVzL3BpcGVzIHdoaWNoIGFyZSBub3QgZGlyZWN0IGRlY2xhcmF0aW9ucyBvZiBhblxuICAgICAgLy8gTmdNb2R1bGUgd2hpY2ggZXhwb3J0cyB0aGVtLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFsaWFzTmFtZShyZWYubm9kZSwgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGBFeHByZXNzaW9uYCB0byBpbXBvcnQgYGRlY2xgIGZyb20gYHZpYWAsIGFzc3VtaW5nIGFuIGV4cG9ydCB3YXMgYWRkZWQgd2hlbiBgdmlhYFxuICAgKiB3YXMgY29tcGlsZWQgcGVyIGBtYXliZUFsaWFzU3ltYm9sQXNgIGFib3ZlLlxuICAgKi9cbiAgZ2V0QWxpYXNJbihkZWNsOiBDbGFzc0RlY2xhcmF0aW9uLCB2aWE6IHRzLlNvdXJjZUZpbGUsIGlzUmVFeHBvcnQ6IGJvb2xlYW4pOiBFeHByZXNzaW9ufG51bGwge1xuICAgIGlmICghaXNSZUV4cG9ydCkge1xuICAgICAgLy8gRGlyZWN0bHkgZXhwb3J0ZWQgZGlyZWN0aXZlcy9waXBlcyBkb24ndCByZXF1aXJlIGFuIGFsaWFzLCBwZXIgdGhlIGxvZ2ljIGluXG4gICAgICAvLyBgbWF5YmVBbGlhc1N5bWJvbEFzYC5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyB2aWFNb2R1bGUgaXMgdGhlIG1vZHVsZSBpdCdsbCBhY3R1YWxseSBiZSBpbXBvcnRlZCBmcm9tLlxuICAgIGNvbnN0IG1vZHVsZU5hbWUgPSB0aGlzLnVuaWZpZWRNb2R1bGVzSG9zdC5maWxlTmFtZVRvTW9kdWxlTmFtZSh2aWEuZmlsZU5hbWUsIHZpYS5maWxlTmFtZSk7XG4gICAgcmV0dXJuIG5ldyBFeHRlcm5hbEV4cHIoe21vZHVsZU5hbWUsIG5hbWU6IHRoaXMuYWxpYXNOYW1lKGRlY2wsIHZpYSl9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYWxpYXMgbmFtZSBiYXNlZCBvbiB0aGUgZnVsbCBtb2R1bGUgbmFtZSBvZiB0aGUgZmlsZSB3aGljaCBkZWNsYXJlcyB0aGUgYWxpYXNlZFxuICAgKiBkaXJlY3RpdmUvcGlwZS5cbiAgICovXG4gIHByaXZhdGUgYWxpYXNOYW1lKGRlY2w6IENsYXNzRGVjbGFyYXRpb24sIGNvbnRleHQ6IHRzLlNvdXJjZUZpbGUpOiBzdHJpbmcge1xuICAgIC8vIFRoZSBkZWNsYXJlZCBtb2R1bGUgaXMgdXNlZCB0byBnZXQgdGhlIG5hbWUgb2YgdGhlIGFsaWFzLlxuICAgIGNvbnN0IGRlY2xNb2R1bGUgPSB0aGlzLnVuaWZpZWRNb2R1bGVzSG9zdC5maWxlTmFtZVRvTW9kdWxlTmFtZShcbiAgICAgICAgZGVjbC5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWUsIGNvbnRleHQuZmlsZU5hbWUpO1xuXG4gICAgY29uc3QgcmVwbGFjZWQgPSBkZWNsTW9kdWxlLnJlcGxhY2UoQ0hBUlNfVE9fRVNDQVBFLCAnXycpLnJlcGxhY2UoL1xcLy9nLCAnJCcpO1xuICAgIHJldHVybiAnybVuZyQnICsgcmVwbGFjZWQgKyAnJCQnICsgZGVjbC5uYW1lLnRleHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBgQWxpYXNpbmdIb3N0YCB3aGljaCBleHBvcnRzIGRpcmVjdGl2ZXMgZnJvbSBhbnkgZmlsZSBjb250YWluaW5nIGFuIE5nTW9kdWxlIGluIHdoaWNoIHRoZXkncmVcbiAqIGRlY2xhcmVkL2V4cG9ydGVkLCB1bmRlciBhIHByaXZhdGUgc3ltYm9sIG5hbWUuXG4gKlxuICogVGhlc2UgZXhwb3J0cyBzdXBwb3J0IGNhc2VzIHdoZXJlIGFuIE5nTW9kdWxlIGlzIGltcG9ydGVkIGRlZXBseSBmcm9tIGFuIGFic29sdXRlIG1vZHVsZSBwYXRoXG4gKiAodGhhdCBpcywgaXQncyBub3QgcGFydCBvZiBhbiBBbmd1bGFyIFBhY2thZ2UgRm9ybWF0IGVudHJ5cG9pbnQpLCBhbmQgdGhlIGNvbXBpbGVyIG5lZWRzIHRvXG4gKiBpbXBvcnQgYW55IG1hdGNoZWQgZGlyZWN0aXZlcy9waXBlcyBmcm9tIHRoZSBzYW1lIHBhdGggKHRvIHRoZSBOZ01vZHVsZSBmaWxlKS4gU2VlIFJFQURNRS5tZCBmb3JcbiAqIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGNsYXNzIFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3QgaW1wbGVtZW50cyBBbGlhc2luZ0hvc3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFJlZmxlY3Rpb25Ib3N0KSB7fVxuXG4gIC8qKlxuICAgKiBVbmRlciBwcml2YXRlIGV4cG9ydCBhbGlhc2luZywgdGhlIGBBYnNvbHV0ZU1vZHVsZVN0cmF0ZWd5YCB1c2VkIGZvciBlbWl0dGluZyByZWZlcmVuY2VzIHdpbGxcbiAgICogd2lsbCBzZWxlY3QgYWxpYXNlZCBleHBvcnRzIHRoYXQgaXQgZmluZHMgaW4gdGhlIC5kLnRzIGZpbGUgZm9yIGFuIE5nTW9kdWxlJ3MgZmlsZS4gVGh1cyxcbiAgICogZW1pdHRpbmcgdGhlc2UgZXhwb3J0cyBpbiAuZC50cyBpcyBhIHJlcXVpcmVtZW50IGZvciB0aGUgYFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3RgIHRvXG4gICAqIGZ1bmN0aW9uIGNvcnJlY3RseS5cbiAgICovXG4gIHJlYWRvbmx5IGFsaWFzRXhwb3J0c0luRHRzID0gdHJ1ZTtcblxuICBtYXliZUFsaWFzU3ltYm9sQXMoXG4gICAgICByZWY6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPiwgY29udGV4dDogdHMuU291cmNlRmlsZSwgbmdNb2R1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHJlZi5oYXNPd25pbmdNb2R1bGVHdWVzcykge1xuICAgICAgLy8gU2tpcCBub2RlcyB0aGF0IGFscmVhZHkgaGF2ZSBhbiBhc3NvY2lhdGVkIGFic29sdXRlIG1vZHVsZSBzcGVjaWZpZXIsIHNpbmNlIHRoZXkgY2FuIGJlXG4gICAgICAvLyBzYWZlbHkgaW1wb3J0ZWQgZnJvbSB0aGF0IHNwZWNpZmllci5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBMb29rIGZvciBhIHVzZXItcHJvdmlkZWQgZXhwb3J0IG9mIGBkZWNsYCBpbiBgY29udGV4dGAuIElmIG9uZSBleGlzdHMsIHRoZW4gYW4gYWxpYXMgZXhwb3J0XG4gICAgLy8gaXMgbm90IG5lZWRlZC5cbiAgICAvLyBUT0RPKGFseGh1Yik6IG1heWJlIGFkZCBhIGhvc3QgbWV0aG9kIHRvIGNoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIGFuIGV4cG9ydCB3aXRob3V0IGdvaW5nXG4gICAgLy8gdGhyb3VnaCB0aGUgZW50aXJlIGxpc3Qgb2YgZXhwb3J0cy5cbiAgICBjb25zdCBleHBvcnRzID0gdGhpcy5ob3N0LmdldEV4cG9ydHNPZk1vZHVsZShjb250ZXh0KTtcbiAgICBpZiAoZXhwb3J0cyA9PT0gbnVsbCkge1xuICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcsIGFuZCBubyBleHBvcnRzIHdlcmUgYXZhaWxhYmxlIGF0IGFsbC4gQmFpbCByYXRoZXIgdGhhbiByaXNrIGNyZWF0aW5nXG4gICAgICAvLyByZS1leHBvcnRzIHdoZW4gdGhleSdyZSBub3QgbmVlZGVkLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZGV0ZXJtaW5lIHRoZSBleHBvcnRzIG9mOiAke2NvbnRleHQuZmlsZU5hbWV9YCk7XG4gICAgfVxuICAgIGxldCBmb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGV4cG9ydHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUubm9kZSA9PT0gcmVmLm5vZGUpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgLy8gVGhlIG1vZHVsZSBleHBvcnRzIHRoZSBkZWNsYXJlZCBjbGFzcyBkaXJlY3RseSwgbm8gYWxpYXMgaXMgbmVjZXNzYXJ5LlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBgybVuZ0V4cG9ydMm1JHtuZ01vZHVsZU5hbWV9ybUke3JlZi5ub2RlLm5hbWUudGV4dH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3RgIG9ubHkgZ2VuZXJhdGVzIHJlLWV4cG9ydHMgYW5kIGRvZXMgbm90IGRpcmVjdCB0aGUgY29tcGlsZXIgdG9cbiAgICogZGlyZWN0bHkgY29uc3VtZSB0aGUgYWxpYXNlcyBpdCBjcmVhdGVzLlxuICAgKlxuICAgKiBJbnN0ZWFkLCB0aGV5J3JlIGNvbnN1bWVkIGluZGlyZWN0bHk6IGBBYnNvbHV0ZU1vZHVsZVN0cmF0ZWd5YCBgUmVmZXJlbmNlRW1pdHRlclN0cmF0ZWd5YCB3aWxsXG4gICAqIHNlbGVjdCB0aGVzZSBhbGlhcyBleHBvcnRzIGF1dG9tYXRpY2FsbHkgd2hlbiBsb29raW5nIGZvciBhbiBleHBvcnQgb2YgdGhlIGRpcmVjdGl2ZS9waXBlIGZyb21cbiAgICogdGhlIHNhbWUgcGF0aCBhcyB0aGUgTmdNb2R1bGUgd2FzIGltcG9ydGVkLlxuICAgKlxuICAgKiBUaHVzLCBgZ2V0QWxpYXNJbmAgYWx3YXlzIHJldHVybnMgYG51bGxgLlxuICAgKi9cbiAgZ2V0QWxpYXNJbigpOiBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEEgYFJlZmVyZW5jZUVtaXRTdHJhdGVneWAgd2hpY2ggd2lsbCBjb25zdW1lIHRoZSBhbGlhcyBhdHRhY2hlZCB0byBhIHBhcnRpY3VsYXIgYFJlZmVyZW5jZWAgdG8gYVxuICogZGlyZWN0aXZlIG9yIHBpcGUsIGlmIGl0IGV4aXN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFsaWFzU3RyYXRlZ3kgaW1wbGVtZW50cyBSZWZlcmVuY2VFbWl0U3RyYXRlZ3kge1xuICBlbWl0KHJlZjogUmVmZXJlbmNlPHRzLk5vZGU+LCBjb250ZXh0OiB0cy5Tb3VyY2VGaWxlLCBpbXBvcnRNb2RlOiBJbXBvcnRGbGFncyk6IEV4cHJlc3Npb258bnVsbCB7XG4gICAgaWYgKGltcG9ydE1vZGUgJiBJbXBvcnRGbGFncy5Ob0FsaWFzaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmLmFsaWFzO1xuICB9XG59XG4iXX0=