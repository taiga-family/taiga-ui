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
        define("@angular/compiler-cli/ngcc/src/execution/cluster/utils", ["require", "exports", "cluster"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference types="node" />
    var cluster = require("cluster");
    /** Expose a `Promise` instance as well as APIs for resolving/rejecting it. */
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            /** The `Promise` instance associated with this deferred. */
            this.promise = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        return Deferred;
    }());
    exports.Deferred = Deferred;
    /**
     * Send a message to the cluster master.
     * (This function should be invoked from cluster workers only.)
     *
     * @param msg The message to send to the cluster master.
     * @return A promise that is resolved once the message has been sent.
     */
    exports.sendMessageToMaster = function (msg) {
        if (cluster.isMaster) {
            throw new Error('Unable to send message to the master process: Already on the master process.');
        }
        return new Promise(function (resolve, reject) {
            if (process.send === undefined) {
                // Theoretically, this should never happen on a worker process.
                throw new Error('Unable to send message to the master process: Missing `process.send()`.');
            }
            process.send(msg, function (err) { return (err === null) ? resolve() : reject(err); });
        });
    };
    /**
     * Send a message to a cluster worker.
     * (This function should be invoked from the cluster master only.)
     *
     * @param workerId The ID of the recipient worker.
     * @param msg The message to send to the worker.
     * @return A promise that is resolved once the message has been sent.
     */
    exports.sendMessageToWorker = function (workerId, msg) {
        if (!cluster.isMaster) {
            throw new Error('Unable to send message to worker process: Sender is not the master process.');
        }
        var worker = cluster.workers[workerId];
        if ((worker === undefined) || worker.isDead() || !worker.isConnected()) {
            throw new Error('Unable to send message to worker process: Recipient does not exist or has disconnected.');
        }
        return new Promise(function (resolve, reject) {
            worker.send(msg, function (err) { return (err === null) ? resolve() : reject(err); });
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL2NsdXN0ZXIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCw4QkFBOEI7SUFFOUIsaUNBQW1DO0lBTW5DLDhFQUE4RTtJQUM5RTtRQUFBO1lBQUEsaUJBc0JDO1lBTEMsNERBQTREO1lBQzVELFlBQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUQsZUFBQztJQUFELENBQUMsQUF0QkQsSUFzQkM7SUF0QlksNEJBQVE7SUF3QnJCOzs7Ozs7T0FNRztJQUNVLFFBQUEsbUJBQW1CLEdBQUcsVUFBQyxHQUFzQjtRQUN4RCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQ2pHO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLCtEQUErRDtnQkFDL0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO2FBQzVGO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFlLElBQUssT0FBQSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUY7Ozs7Ozs7T0FPRztJQUNVLFFBQUEsbUJBQW1CLEdBQUcsVUFBQyxRQUFnQixFQUFFLEdBQW9CO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztTQUNoRztRQUVELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FDWCx5RkFBeUYsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBZSxJQUFLLE9BQUEsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIgLz5cblxuaW1wb3J0ICogYXMgY2x1c3RlciBmcm9tICdjbHVzdGVyJztcblxuaW1wb3J0IHtNZXNzYWdlRnJvbVdvcmtlciwgTWVzc2FnZVRvV29ya2VyfSBmcm9tICcuL2FwaSc7XG5cblxuXG4vKiogRXhwb3NlIGEgYFByb21pc2VgIGluc3RhbmNlIGFzIHdlbGwgYXMgQVBJcyBmb3IgcmVzb2x2aW5nL3JlamVjdGluZyBpdC4gKi9cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZDxUPiB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBhc3NvY2lhdGVkIHByb21pc2Ugd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYSByZWplY3Rpb24gKGNvbnN0cnVjdGVkIHdpdGggYFByb21pc2UucmVqZWN0KClgKSwgdGhlIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZFxuICAgKiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlc29sdmUgdGhlIHByb21pc2Ugd2l0aC5cbiAgICovXG4gIHJlc29sdmUhOiAodmFsdWU6IFQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlamVjdHMgdGhlIGFzc29jaWF0ZWQgcHJvbWlzZSB3aXRoIHRoZSBzcGVjaWZpZWQgcmVhc29uLlxuICAgKlxuICAgKiBAcGFyYW0gcmVhc29uIFRoZSByZWplY3Rpb24gcmVhc29uLlxuICAgKi9cbiAgcmVqZWN0ITogKHJlYXNvbjogYW55KSA9PiB2b2lkO1xuXG4gIC8qKiBUaGUgYFByb21pc2VgIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRlZmVycmVkLiAqL1xuICBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjbHVzdGVyIG1hc3Rlci5cbiAqIChUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBpbnZva2VkIGZyb20gY2x1c3RlciB3b3JrZXJzIG9ubHkuKVxuICpcbiAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gc2VuZCB0byB0aGUgY2x1c3RlciBtYXN0ZXIuXG4gKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uY2UgdGhlIG1lc3NhZ2UgaGFzIGJlZW4gc2VudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlVG9NYXN0ZXIgPSAobXNnOiBNZXNzYWdlRnJvbVdvcmtlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoY2x1c3Rlci5pc01hc3Rlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHNlbmQgbWVzc2FnZSB0byB0aGUgbWFzdGVyIHByb2Nlc3M6IEFscmVhZHkgb24gdGhlIG1hc3RlciBwcm9jZXNzLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5zZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFRoZW9yZXRpY2FsbHksIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiBvbiBhIHdvcmtlciBwcm9jZXNzLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gc2VuZCBtZXNzYWdlIHRvIHRoZSBtYXN0ZXIgcHJvY2VzczogTWlzc2luZyBgcHJvY2Vzcy5zZW5kKClgLicpO1xuICAgIH1cblxuICAgIHByb2Nlc3Muc2VuZChtc2csIChlcnI6IEVycm9yfG51bGwpID0+IChlcnIgPT09IG51bGwpID8gcmVzb2x2ZSgpIDogcmVqZWN0KGVycikpO1xuICB9KTtcbn07XG5cbi8qKlxuICogU2VuZCBhIG1lc3NhZ2UgdG8gYSBjbHVzdGVyIHdvcmtlci5cbiAqIChUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBpbnZva2VkIGZyb20gdGhlIGNsdXN0ZXIgbWFzdGVyIG9ubHkuKVxuICpcbiAqIEBwYXJhbSB3b3JrZXJJZCBUaGUgSUQgb2YgdGhlIHJlY2lwaWVudCB3b3JrZXIuXG4gKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHNlbmQgdG8gdGhlIHdvcmtlci5cbiAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb25jZSB0aGUgbWVzc2FnZSBoYXMgYmVlbiBzZW50LlxuICovXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2VUb1dvcmtlciA9ICh3b3JrZXJJZDogbnVtYmVyLCBtc2c6IE1lc3NhZ2VUb1dvcmtlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWNsdXN0ZXIuaXNNYXN0ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBzZW5kIG1lc3NhZ2UgdG8gd29ya2VyIHByb2Nlc3M6IFNlbmRlciBpcyBub3QgdGhlIG1hc3RlciBwcm9jZXNzLicpO1xuICB9XG5cbiAgY29uc3Qgd29ya2VyID0gY2x1c3Rlci53b3JrZXJzW3dvcmtlcklkXTtcblxuICBpZiAoKHdvcmtlciA9PT0gdW5kZWZpbmVkKSB8fCB3b3JrZXIuaXNEZWFkKCkgfHwgIXdvcmtlci5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVW5hYmxlIHRvIHNlbmQgbWVzc2FnZSB0byB3b3JrZXIgcHJvY2VzczogUmVjaXBpZW50IGRvZXMgbm90IGV4aXN0IG9yIGhhcyBkaXNjb25uZWN0ZWQuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdvcmtlci5zZW5kKG1zZywgKGVycjogRXJyb3J8bnVsbCkgPT4gKGVyciA9PT0gbnVsbCkgPyByZXNvbHZlKCkgOiByZWplY3QoZXJyKSk7XG4gIH0pO1xufTtcbiJdfQ==