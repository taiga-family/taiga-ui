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
        define("@angular/compiler-cli/src/ngtsc/transform/src/trait", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TraitState;
    (function (TraitState) {
        /**
         * Pending traits are freshly created and have never been analyzed.
         */
        TraitState[TraitState["PENDING"] = 1] = "PENDING";
        /**
         * Analyzed traits have successfully been analyzed, but are pending resolution.
         */
        TraitState[TraitState["ANALYZED"] = 2] = "ANALYZED";
        /**
         * Resolved traits have successfully been analyzed and resolved and are ready for compilation.
         */
        TraitState[TraitState["RESOLVED"] = 4] = "RESOLVED";
        /**
         * Errored traits have failed either analysis or resolution and as a result contain diagnostics
         * describing the failure(s).
         */
        TraitState[TraitState["ERRORED"] = 8] = "ERRORED";
        /**
         * Skipped traits are no longer considered for compilation.
         */
        TraitState[TraitState["SKIPPED"] = 16] = "SKIPPED";
    })(TraitState = exports.TraitState || (exports.TraitState = {}));
    /**
     * The value side of `Trait` exposes a helper to create a `Trait` in a pending state (by delegating
     * to `TraitImpl`).
     */
    exports.Trait = {
        pending: function (handler, detected) { return TraitImpl.pending(handler, detected); },
    };
    /**
     * An implementation of the `Trait` type which transitions safely between the various
     * `TraitState`s.
     */
    var TraitImpl = /** @class */ (function () {
        function TraitImpl(handler, detected) {
            this.state = TraitState.PENDING;
            this.analysis = null;
            this.resolution = null;
            this.diagnostics = null;
            this.handler = handler;
            this.detected = detected;
        }
        TraitImpl.prototype.toAnalyzed = function (analysis) {
            // Only pending traits can be analyzed.
            this.assertTransitionLegal(TraitState.PENDING, TraitState.ANALYZED);
            this.analysis = analysis;
            this.state = TraitState.ANALYZED;
            return this;
        };
        TraitImpl.prototype.toErrored = function (diagnostics) {
            // Pending traits (during analysis) or analyzed traits (during resolution) can produce
            // diagnostics and enter an errored state.
            this.assertTransitionLegal(TraitState.PENDING | TraitState.ANALYZED, TraitState.RESOLVED);
            this.diagnostics = diagnostics;
            this.analysis = null;
            this.state = TraitState.ERRORED;
            return this;
        };
        TraitImpl.prototype.toResolved = function (resolution) {
            // Only analyzed traits can be resolved.
            this.assertTransitionLegal(TraitState.ANALYZED, TraitState.RESOLVED);
            this.resolution = resolution;
            this.state = TraitState.RESOLVED;
            return this;
        };
        TraitImpl.prototype.toSkipped = function () {
            // Only pending traits can be skipped.
            this.assertTransitionLegal(TraitState.PENDING, TraitState.SKIPPED);
            this.state = TraitState.SKIPPED;
            return this;
        };
        /**
         * Verifies that the trait is currently in one of the `allowedState`s.
         *
         * If correctly used, the `Trait` type and transition methods prevent illegal transitions from
         * occurring. However, if a reference to the `TraitImpl` instance typed with the previous
         * interface is retained after calling one of its transition methods, it will allow for illegal
         * transitions to take place. Hence, this assertion provides a little extra runtime protection.
         */
        TraitImpl.prototype.assertTransitionLegal = function (allowedState, transitionTo) {
            if (!(this.state & allowedState)) {
                throw new Error("Assertion failure: cannot transition from " + TraitState[this.state] + " to " + TraitState[transitionTo] + ".");
            }
        };
        /**
         * Construct a new `TraitImpl` in the pending state.
         */
        TraitImpl.pending = function (handler, detected) {
            return new TraitImpl(handler, detected);
        };
        return TraitImpl;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zZm9ybS9zcmMvdHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFLSCxJQUFZLFVBMEJYO0lBMUJELFdBQVksVUFBVTtRQUNwQjs7V0FFRztRQUNILGlEQUFjLENBQUE7UUFFZDs7V0FFRztRQUNILG1EQUFlLENBQUE7UUFFZjs7V0FFRztRQUNILG1EQUFlLENBQUE7UUFFZjs7O1dBR0c7UUFDSCxpREFBYyxDQUFBO1FBRWQ7O1dBRUc7UUFDSCxrREFBYyxDQUFBO0lBQ2hCLENBQUMsRUExQlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUEwQnJCO0lBa0JEOzs7T0FHRztJQUNVLFFBQUEsS0FBSyxHQUFHO1FBQ25CLE9BQU8sRUFBRSxVQUFVLE9BQWtDLEVBQUUsUUFBeUIsSUFDbkQsT0FBQSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBcEMsQ0FBb0M7S0FDbEUsQ0FBQztJQXFJRjs7O09BR0c7SUFDSDtRQVFFLG1CQUFZLE9BQWtDLEVBQUUsUUFBeUI7WUFQekUsVUFBSyxHQUFlLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFHdkMsYUFBUSxHQUFxQixJQUFJLENBQUM7WUFDbEMsZUFBVSxHQUFxQixJQUFJLENBQUM7WUFDcEMsZ0JBQVcsR0FBeUIsSUFBSSxDQUFDO1lBR3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLENBQUM7UUFFRCw4QkFBVSxHQUFWLFVBQVcsUUFBVztZQUNwQix1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxPQUFPLElBQThCLENBQUM7UUFDeEMsQ0FBQztRQUVELDZCQUFTLEdBQVQsVUFBVSxXQUE0QjtZQUNwQyxzRkFBc0Y7WUFDdEYsMENBQTBDO1lBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxPQUFPLElBQTZCLENBQUM7UUFDdkMsQ0FBQztRQUVELDhCQUFVLEdBQVYsVUFBVyxVQUFhO1lBQ3RCLHdDQUF3QztZQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLE9BQU8sSUFBOEIsQ0FBQztRQUN4QyxDQUFDO1FBRUQsNkJBQVMsR0FBVDtZQUNFLHNDQUFzQztZQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2hDLE9BQU8sSUFBNkIsQ0FBQztRQUN2QyxDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNLLHlDQUFxQixHQUE3QixVQUE4QixZQUF3QixFQUFFLFlBQXdCO1lBQzlFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQTZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQy9FLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQkFBTyxHQUFkLFVBQXdCLE9BQWtDLEVBQUUsUUFBeUI7WUFFbkYsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUEwQixDQUFDO1FBQ25FLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFwRUQsSUFvRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtEZWNvcmF0b3JIYW5kbGVyLCBEZXRlY3RSZXN1bHR9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGVudW0gVHJhaXRTdGF0ZSB7XG4gIC8qKlxuICAgKiBQZW5kaW5nIHRyYWl0cyBhcmUgZnJlc2hseSBjcmVhdGVkIGFuZCBoYXZlIG5ldmVyIGJlZW4gYW5hbHl6ZWQuXG4gICAqL1xuICBQRU5ESU5HID0gMHgwMSxcblxuICAvKipcbiAgICogQW5hbHl6ZWQgdHJhaXRzIGhhdmUgc3VjY2Vzc2Z1bGx5IGJlZW4gYW5hbHl6ZWQsIGJ1dCBhcmUgcGVuZGluZyByZXNvbHV0aW9uLlxuICAgKi9cbiAgQU5BTFlaRUQgPSAweDAyLFxuXG4gIC8qKlxuICAgKiBSZXNvbHZlZCB0cmFpdHMgaGF2ZSBzdWNjZXNzZnVsbHkgYmVlbiBhbmFseXplZCBhbmQgcmVzb2x2ZWQgYW5kIGFyZSByZWFkeSBmb3IgY29tcGlsYXRpb24uXG4gICAqL1xuICBSRVNPTFZFRCA9IDB4MDQsXG5cbiAgLyoqXG4gICAqIEVycm9yZWQgdHJhaXRzIGhhdmUgZmFpbGVkIGVpdGhlciBhbmFseXNpcyBvciByZXNvbHV0aW9uIGFuZCBhcyBhIHJlc3VsdCBjb250YWluIGRpYWdub3N0aWNzXG4gICAqIGRlc2NyaWJpbmcgdGhlIGZhaWx1cmUocykuXG4gICAqL1xuICBFUlJPUkVEID0gMHgwOCxcblxuICAvKipcbiAgICogU2tpcHBlZCB0cmFpdHMgYXJlIG5vIGxvbmdlciBjb25zaWRlcmVkIGZvciBjb21waWxhdGlvbi5cbiAgICovXG4gIFNLSVBQRUQgPSAweDEwLFxufVxuXG4vKipcbiAqIEFuIEl2eSBhc3BlY3QgYWRkZWQgdG8gYSBjbGFzcyAoZm9yIGV4YW1wbGUsIHRoZSBjb21waWxhdGlvbiBvZiBhIGNvbXBvbmVudCBkZWZpbml0aW9uKS5cbiAqXG4gKiBUcmFpdHMgYXJlIGNyZWF0ZWQgd2hlbiBhIGBEZWNvcmF0b3JIYW5kbGVyYCBtYXRjaGVzIGEgY2xhc3MuIEVhY2ggdHJhaXQgYmVnaW5zIGluIGEgcGVuZGluZ1xuICogc3RhdGUgYW5kIHVuZGVyZ29lcyB0cmFuc2l0aW9ucyBhcyBjb21waWxhdGlvbiBwcm9jZWVkcyB0aHJvdWdoIHRoZSB2YXJpb3VzIHN0ZXBzLlxuICpcbiAqIEluIHByYWN0aWNlLCB0cmFpdHMgYXJlIGluc3RhbmNlcyBvZiB0aGUgcHJpdmF0ZSBjbGFzcyBgVHJhaXRJbXBsYCBkZWNsYXJlZCBiZWxvdy4gVGhyb3VnaCB0aGVcbiAqIHZhcmlvdXMgaW50ZXJmYWNlcyBpbmNsdWRlZCBpbiB0aGlzIHVuaW9uIHR5cGUsIHRoZSBsZWdhbCBBUEkgb2YgYSB0cmFpdCBpbiBhbnkgZ2l2ZW4gc3RhdGUgaXNcbiAqIHJlcHJlc2VudGVkIGluIHRoZSB0eXBlIHN5c3RlbS4gVGhpcyBpbmNsdWRlcyBhbnkgcG9zc2libGUgdHJhbnNpdGlvbnMgZnJvbSBvbmUgdHlwZSB0byB0aGUgbmV4dC5cbiAqXG4gKiBUaGlzIG5vdCBvbmx5IHNpbXBsaWZpZXMgdGhlIGltcGxlbWVudGF0aW9uLCBidXQgZW5zdXJlcyB0cmFpdHMgYXJlIG1vbm9tb3JwaGljIG9iamVjdHMgYXNcbiAqIHRoZXkncmUgYWxsIGp1c3QgXCJ2aWV3c1wiIGluIHRoZSB0eXBlIHN5c3RlbSBvZiB0aGUgc2FtZSBvYmplY3QgKHdoaWNoIG5ldmVyIGNoYW5nZXMgc2hhcGUpLlxuICovXG5leHBvcnQgdHlwZSBUcmFpdDxELCBBLCBSPiA9IFBlbmRpbmdUcmFpdDxELCBBLCBSPnxTa2lwcGVkVHJhaXQ8RCwgQSwgUj58QW5hbHl6ZWRUcmFpdDxELCBBLCBSPnxcbiAgICBSZXNvbHZlZFRyYWl0PEQsIEEsIFI+fEVycm9yZWRUcmFpdDxELCBBLCBSPjtcblxuLyoqXG4gKiBUaGUgdmFsdWUgc2lkZSBvZiBgVHJhaXRgIGV4cG9zZXMgYSBoZWxwZXIgdG8gY3JlYXRlIGEgYFRyYWl0YCBpbiBhIHBlbmRpbmcgc3RhdGUgKGJ5IGRlbGVnYXRpbmdcbiAqIHRvIGBUcmFpdEltcGxgKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFRyYWl0ID0ge1xuICBwZW5kaW5nOiA8RCwgQSwgUj4oaGFuZGxlcjogRGVjb3JhdG9ySGFuZGxlcjxELCBBLCBSPiwgZGV0ZWN0ZWQ6IERldGVjdFJlc3VsdDxEPik6XG4gICAgICBQZW5kaW5nVHJhaXQ8RCwgQSwgUj4gPT4gVHJhaXRJbXBsLnBlbmRpbmcoaGFuZGxlciwgZGV0ZWN0ZWQpLFxufTtcblxuLyoqXG4gKiBUaGUgcGFydCBvZiB0aGUgYFRyYWl0YCBpbnRlcmZhY2UgdGhhdCdzIGNvbW1vbiB0byBhbGwgdHJhaXQgc3RhdGVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWl0QmFzZTxELCBBLCBSPiB7XG4gIC8qKlxuICAgKiBDdXJyZW50IHN0YXRlIG9mIHRoZSB0cmFpdC5cbiAgICpcbiAgICogVGhpcyB3aWxsIGJlIG5hcnJvd2VkIGluIHRoZSBpbnRlcmZhY2VzIGZvciBlYWNoIHNwZWNpZmljIHN0YXRlLlxuICAgKi9cbiAgc3RhdGU6IFRyYWl0U3RhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVjb3JhdG9ySGFuZGxlcmAgd2hpY2ggbWF0Y2hlZCBvbiB0aGUgY2xhc3MgdG8gY3JlYXRlIHRoaXMgdHJhaXQuXG4gICAqL1xuICBoYW5kbGVyOiBEZWNvcmF0b3JIYW5kbGVyPEQsIEEsIFI+O1xuXG4gIC8qKlxuICAgKiBUaGUgZGV0ZWN0aW9uIHJlc3VsdCAob2YgYGhhbmRsZXIuZGV0ZWN0YCkgd2hpY2ggaW5kaWNhdGVkIHRoYXQgdGhpcyB0cmFpdCBhcHBsaWVkIHRvIHRoZVxuICAgKiBjbGFzcy5cbiAgICpcbiAgICogVGhpcyBpcyBtYWlubHkgdXNlZCB0byBjYWNoZSB0aGUgZGV0ZWN0aW9uIGJldHdlZW4gcHJlLWFuYWx5c2lzIGFuZCBhbmFseXNpcy5cbiAgICovXG4gIGRldGVjdGVkOiBEZXRlY3RSZXN1bHQ8RD47XG59XG5cbi8qKlxuICogQSB0cmFpdCBpbiB0aGUgcGVuZGluZyBzdGF0ZS5cbiAqXG4gKiBQZW5kaW5nIHRyYWl0cyBoYXZlIHlldCB0byBiZSBhbmFseXplZCBpbiBhbnkgd2F5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBlbmRpbmdUcmFpdDxELCBBLCBSPiBleHRlbmRzIFRyYWl0QmFzZTxELCBBLCBSPiB7XG4gIHN0YXRlOiBUcmFpdFN0YXRlLlBFTkRJTkc7XG5cbiAgLyoqXG4gICAqIFRoaXMgcGVuZGluZyB0cmFpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgYW5hbHl6ZWQsIGFuZCBzaG91bGQgdHJhbnNpdGlvbiB0byB0aGUgXCJhbmFseXplZFwiXG4gICAqIHN0YXRlLlxuICAgKi9cbiAgdG9BbmFseXplZChhbmFseXNpczogQSk6IEFuYWx5emVkVHJhaXQ8RCwgQSwgUj47XG5cbiAgLyoqXG4gICAqIFRoaXMgdHJhaXQgZmFpbGVkIGFuYWx5c2lzLCBhbmQgc2hvdWxkIHRyYW5zaXRpb24gdG8gdGhlIFwiZXJyb3JlZFwiIHN0YXRlIHdpdGggdGhlIHJlc3VsdGluZ1xuICAgKiBkaWFnbm9zdGljcy5cbiAgICovXG4gIHRvRXJyb3JlZChlcnJvcnM6IHRzLkRpYWdub3N0aWNbXSk6IEVycm9yZWRUcmFpdDxELCBBLCBSPjtcblxuICAvKipcbiAgICogRHVyaW5nIGFuYWx5c2lzIGl0IHdhcyBkZXRlcm1pbmVkIHRoYXQgdGhpcyB0cmFpdCBpcyBub3QgZWxpZ2libGUgZm9yIGNvbXBpbGF0aW9uIGFmdGVyIGFsbCxcbiAgICogYW5kIHNob3VsZCBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIFwic2tpcHBlZFwiIHN0YXRlLlxuICAgKi9cbiAgdG9Ta2lwcGVkKCk6IFNraXBwZWRUcmFpdDxELCBBLCBSPjtcbn1cblxuLyoqXG4gKiBBIHRyYWl0IGluIHRoZSBcImVycm9yZWRcIiBzdGF0ZS5cbiAqXG4gKiBFcnJvcmVkIHRyYWl0cyBjb250YWluIGB0cy5EaWFnbm9zdGljYHMgaW5kaWNhdGluZyBhbnkgcHJvYmxlbShzKSB3aXRoIHRoZSBjbGFzcy5cbiAqXG4gKiBUaGlzIGlzIGEgdGVybWluYWwgc3RhdGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JlZFRyYWl0PEQsIEEsIFI+IGV4dGVuZHMgVHJhaXRCYXNlPEQsIEEsIFI+IHtcbiAgc3RhdGU6IFRyYWl0U3RhdGUuRVJST1JFRDtcblxuICAvKipcbiAgICogRGlhZ25vc3RpY3Mgd2hpY2ggd2VyZSBwcm9kdWNlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGFuYWx5emUgdGhlIHRyYWl0LlxuICAgKi9cbiAgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXTtcbn1cblxuLyoqXG4gKiBBIHRyYWl0IGluIHRoZSBcInNraXBwZWRcIiBzdGF0ZS5cbiAqXG4gKiBTa2lwcGVkIHRyYWl0cyBhcmVuJ3QgY29uc2lkZXJlZCBmb3IgY29tcGlsYXRpb24uXG4gKlxuICogVGhpcyBpcyBhIHRlcm1pbmFsIHN0YXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNraXBwZWRUcmFpdDxELCBBLCBSPiBleHRlbmRzIFRyYWl0QmFzZTxELCBBLCBSPiB7XG4gIHN0YXRlOiBUcmFpdFN0YXRlLlNLSVBQRUQ7XG59XG5cbi8qKlxuICogVGhlIHBhcnQgb2YgdGhlIGBUcmFpdGAgaW50ZXJmYWNlIGZvciBhbnkgdHJhaXQgd2hpY2ggaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGFuYWx5emVkLlxuICpcbiAqIE1haW5seSwgdGhpcyBpcyB1c2VkIHRvIHNoYXJlIHRoZSBjb21tZW50IG9uIHRoZSBgYW5hbHlzaXNgIGZpZWxkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWl0V2l0aEFuYWx5c2lzPEE+IHtcbiAgLyoqXG4gICAqIFRoZSByZXN1bHRzIHJldHVybmVkIGJ5IGEgc3VjY2Vzc2Z1bCBhbmFseXNpcyBvZiB0aGUgZ2l2ZW4gY2xhc3MvYERlY29yYXRvckhhbmRsZXJgXG4gICAqIGNvbWJpbmF0aW9uLlxuICAgKi9cbiAgYW5hbHlzaXM6IFJlYWRvbmx5PEE+O1xufVxuXG4vKipcbiAqIEEgdHJhaXQgaW4gdGhlIFwiYW5hbHl6ZWRcIiBzdGF0ZS5cbiAqXG4gKiBBbmFseXplZCB0cmFpdHMgaGF2ZSBhbmFseXNpcyByZXN1bHRzIGF2YWlsYWJsZSwgYW5kIGFyZSBlbGlnaWJsZSBmb3IgcmVzb2x1dGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmFseXplZFRyYWl0PEQsIEEsIFI+IGV4dGVuZHMgVHJhaXRCYXNlPEQsIEEsIFI+LCBUcmFpdFdpdGhBbmFseXNpczxBPiB7XG4gIHN0YXRlOiBUcmFpdFN0YXRlLkFOQUxZWkVEO1xuXG4gIC8qKlxuICAgKiBUaGlzIGFuYWx5emVkIHRyYWl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSByZXNvbHZlZCwgYW5kIHNob3VsZCBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlXG4gICAqIFwicmVzb2x2ZWRcIiBzdGF0ZS5cbiAgICovXG4gIHRvUmVzb2x2ZWQocmVzb2x1dGlvbjogUik6IFJlc29sdmVkVHJhaXQ8RCwgQSwgUj47XG5cbiAgLyoqXG4gICAqIFRoaXMgdHJhaXQgZmFpbGVkIHJlc29sdXRpb24sIGFuZCBzaG91bGQgdHJhbnNpdGlvbiB0byB0aGUgXCJlcnJvcmVkXCIgc3RhdGUgd2l0aCB0aGUgcmVzdWx0aW5nXG4gICAqIGRpYWdub3N0aWNzLlxuICAgKi9cbiAgdG9FcnJvcmVkKGVycm9yczogdHMuRGlhZ25vc3RpY1tdKTogRXJyb3JlZFRyYWl0PEQsIEEsIFI+O1xufVxuXG4vKipcbiAqIEEgdHJhaXQgaW4gdGhlIFwicmVzb2x2ZWRcIiBzdGF0ZS5cbiAqXG4gKiBSZXNvbHZlZCB0cmFpdHMgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBhbmFseXplZCBhbmQgcmVzb2x2ZWQsIGNvbnRhaW4gbm8gZXJyb3JzLCBhbmQgYXJlIHJlYWR5XG4gKiBmb3IgdGhlIGNvbXBpbGF0aW9uIHBoYXNlLlxuICpcbiAqIFRoaXMgaXMgYSB0ZXJtaW5hbCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlZFRyYWl0PEQsIEEsIFI+IGV4dGVuZHMgVHJhaXRCYXNlPEQsIEEsIFI+LCBUcmFpdFdpdGhBbmFseXNpczxBPiB7XG4gIHN0YXRlOiBUcmFpdFN0YXRlLlJFU09MVkVEO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzdWx0cyByZXR1cm5lZCBieSBhIHN1Y2Nlc3NmdWwgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW4gY2xhc3MvYERlY29yYXRvckhhbmRsZXJgXG4gICAqIGNvbWJpbmF0aW9uLlxuICAgKi9cbiAgcmVzb2x1dGlvbjogUmVhZG9ubHk8Uj47XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGBUcmFpdGAgdHlwZSB3aGljaCB0cmFuc2l0aW9ucyBzYWZlbHkgYmV0d2VlbiB0aGUgdmFyaW91c1xuICogYFRyYWl0U3RhdGVgcy5cbiAqL1xuY2xhc3MgVHJhaXRJbXBsPEQsIEEsIFI+IHtcbiAgc3RhdGU6IFRyYWl0U3RhdGUgPSBUcmFpdFN0YXRlLlBFTkRJTkc7XG4gIGhhbmRsZXI6IERlY29yYXRvckhhbmRsZXI8RCwgQSwgUj47XG4gIGRldGVjdGVkOiBEZXRlY3RSZXN1bHQ8RD47XG4gIGFuYWx5c2lzOiBSZWFkb25seTxBPnxudWxsID0gbnVsbDtcbiAgcmVzb2x1dGlvbjogUmVhZG9ubHk8Uj58bnVsbCA9IG51bGw7XG4gIGRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW118bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoaGFuZGxlcjogRGVjb3JhdG9ySGFuZGxlcjxELCBBLCBSPiwgZGV0ZWN0ZWQ6IERldGVjdFJlc3VsdDxEPikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5kZXRlY3RlZCA9IGRldGVjdGVkO1xuICB9XG5cbiAgdG9BbmFseXplZChhbmFseXNpczogQSk6IEFuYWx5emVkVHJhaXQ8RCwgQSwgUj4ge1xuICAgIC8vIE9ubHkgcGVuZGluZyB0cmFpdHMgY2FuIGJlIGFuYWx5emVkLlxuICAgIHRoaXMuYXNzZXJ0VHJhbnNpdGlvbkxlZ2FsKFRyYWl0U3RhdGUuUEVORElORywgVHJhaXRTdGF0ZS5BTkFMWVpFRCk7XG4gICAgdGhpcy5hbmFseXNpcyA9IGFuYWx5c2lzO1xuICAgIHRoaXMuc3RhdGUgPSBUcmFpdFN0YXRlLkFOQUxZWkVEO1xuICAgIHJldHVybiB0aGlzIGFzIEFuYWx5emVkVHJhaXQ8RCwgQSwgUj47XG4gIH1cblxuICB0b0Vycm9yZWQoZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSk6IEVycm9yZWRUcmFpdDxELCBBLCBSPiB7XG4gICAgLy8gUGVuZGluZyB0cmFpdHMgKGR1cmluZyBhbmFseXNpcykgb3IgYW5hbHl6ZWQgdHJhaXRzIChkdXJpbmcgcmVzb2x1dGlvbikgY2FuIHByb2R1Y2VcbiAgICAvLyBkaWFnbm9zdGljcyBhbmQgZW50ZXIgYW4gZXJyb3JlZCBzdGF0ZS5cbiAgICB0aGlzLmFzc2VydFRyYW5zaXRpb25MZWdhbChUcmFpdFN0YXRlLlBFTkRJTkcgfCBUcmFpdFN0YXRlLkFOQUxZWkVELCBUcmFpdFN0YXRlLlJFU09MVkVEKTtcbiAgICB0aGlzLmRpYWdub3N0aWNzID0gZGlhZ25vc3RpY3M7XG4gICAgdGhpcy5hbmFseXNpcyA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IFRyYWl0U3RhdGUuRVJST1JFRDtcbiAgICByZXR1cm4gdGhpcyBhcyBFcnJvcmVkVHJhaXQ8RCwgQSwgUj47XG4gIH1cblxuICB0b1Jlc29sdmVkKHJlc29sdXRpb246IFIpOiBSZXNvbHZlZFRyYWl0PEQsIEEsIFI+IHtcbiAgICAvLyBPbmx5IGFuYWx5emVkIHRyYWl0cyBjYW4gYmUgcmVzb2x2ZWQuXG4gICAgdGhpcy5hc3NlcnRUcmFuc2l0aW9uTGVnYWwoVHJhaXRTdGF0ZS5BTkFMWVpFRCwgVHJhaXRTdGF0ZS5SRVNPTFZFRCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcbiAgICB0aGlzLnN0YXRlID0gVHJhaXRTdGF0ZS5SRVNPTFZFRDtcbiAgICByZXR1cm4gdGhpcyBhcyBSZXNvbHZlZFRyYWl0PEQsIEEsIFI+O1xuICB9XG5cbiAgdG9Ta2lwcGVkKCk6IFNraXBwZWRUcmFpdDxELCBBLCBSPiB7XG4gICAgLy8gT25seSBwZW5kaW5nIHRyYWl0cyBjYW4gYmUgc2tpcHBlZC5cbiAgICB0aGlzLmFzc2VydFRyYW5zaXRpb25MZWdhbChUcmFpdFN0YXRlLlBFTkRJTkcsIFRyYWl0U3RhdGUuU0tJUFBFRCk7XG4gICAgdGhpcy5zdGF0ZSA9IFRyYWl0U3RhdGUuU0tJUFBFRDtcbiAgICByZXR1cm4gdGhpcyBhcyBTa2lwcGVkVHJhaXQ8RCwgQSwgUj47XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhhdCB0aGUgdHJhaXQgaXMgY3VycmVudGx5IGluIG9uZSBvZiB0aGUgYGFsbG93ZWRTdGF0ZWBzLlxuICAgKlxuICAgKiBJZiBjb3JyZWN0bHkgdXNlZCwgdGhlIGBUcmFpdGAgdHlwZSBhbmQgdHJhbnNpdGlvbiBtZXRob2RzIHByZXZlbnQgaWxsZWdhbCB0cmFuc2l0aW9ucyBmcm9tXG4gICAqIG9jY3VycmluZy4gSG93ZXZlciwgaWYgYSByZWZlcmVuY2UgdG8gdGhlIGBUcmFpdEltcGxgIGluc3RhbmNlIHR5cGVkIHdpdGggdGhlIHByZXZpb3VzXG4gICAqIGludGVyZmFjZSBpcyByZXRhaW5lZCBhZnRlciBjYWxsaW5nIG9uZSBvZiBpdHMgdHJhbnNpdGlvbiBtZXRob2RzLCBpdCB3aWxsIGFsbG93IGZvciBpbGxlZ2FsXG4gICAqIHRyYW5zaXRpb25zIHRvIHRha2UgcGxhY2UuIEhlbmNlLCB0aGlzIGFzc2VydGlvbiBwcm92aWRlcyBhIGxpdHRsZSBleHRyYSBydW50aW1lIHByb3RlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGFzc2VydFRyYW5zaXRpb25MZWdhbChhbGxvd2VkU3RhdGU6IFRyYWl0U3RhdGUsIHRyYW5zaXRpb25UbzogVHJhaXRTdGF0ZSk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuc3RhdGUgJiBhbGxvd2VkU3RhdGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzc2VydGlvbiBmYWlsdXJlOiBjYW5ub3QgdHJhbnNpdGlvbiBmcm9tICR7VHJhaXRTdGF0ZVt0aGlzLnN0YXRlXX0gdG8gJHtcbiAgICAgICAgICBUcmFpdFN0YXRlW3RyYW5zaXRpb25Ub119LmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgYFRyYWl0SW1wbGAgaW4gdGhlIHBlbmRpbmcgc3RhdGUuXG4gICAqL1xuICBzdGF0aWMgcGVuZGluZzxELCBBLCBSPihoYW5kbGVyOiBEZWNvcmF0b3JIYW5kbGVyPEQsIEEsIFI+LCBkZXRlY3RlZDogRGV0ZWN0UmVzdWx0PEQ+KTpcbiAgICAgIFBlbmRpbmdUcmFpdDxELCBBLCBSPiB7XG4gICAgcmV0dXJuIG5ldyBUcmFpdEltcGwoaGFuZGxlciwgZGV0ZWN0ZWQpIGFzIFBlbmRpbmdUcmFpdDxELCBBLCBSPjtcbiAgfVxufVxuIl19