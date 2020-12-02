(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/async_locker", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * AsyncLocker is used to prevent more than one instance of ngcc executing at the same time,
     * when being called in an asynchronous context.
     *
     * * When ngcc starts executing, it creates a file in the `compiler-cli/ngcc` folder.
     * * If it finds one is already there then it pauses and waits for the file to be removed by the
     *   other process. If the file is not removed within a set timeout period given by
     *   `retryDelay*retryAttempts` an error is thrown with a suitable error message.
     * * If the process locking the file changes, then we restart the timeout.
     * * When ngcc completes executing, it removes the file so that future ngcc executions can start.
     */
    var AsyncLocker = /** @class */ (function () {
        function AsyncLocker(lockFile, logger, retryDelay, retryAttempts) {
            this.lockFile = lockFile;
            this.logger = logger;
            this.retryDelay = retryDelay;
            this.retryAttempts = retryAttempts;
        }
        /**
         * Run a function guarded by the lock file.
         *
         * @param fn The function to run.
         */
        AsyncLocker.prototype.lock = function (fn) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.create()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, fn().finally(function () { return _this.lockFile.remove(); })];
                    }
                });
            });
        };
        AsyncLocker.prototype.create = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var pid, attempts, e_1, newPid;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pid = '';
                            attempts = 0;
                            _a.label = 1;
                        case 1:
                            if (!(attempts < this.retryAttempts)) return [3 /*break*/, 6];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 3, , 5]);
                            return [2 /*return*/, this.lockFile.write()];
                        case 3:
                            e_1 = _a.sent();
                            if (e_1.code !== 'EEXIST') {
                                throw e_1;
                            }
                            newPid = this.lockFile.read();
                            if (newPid !== pid) {
                                // The process locking the file has changed, so restart the timeout
                                attempts = 0;
                                pid = newPid;
                            }
                            if (attempts === 0) {
                                this.logger.info("Another process, with id " + pid + ", is currently running ngcc.\n" +
                                    ("Waiting up to " + this.retryDelay * this.retryAttempts / 1000 + "s for it to finish."));
                            }
                            // The file is still locked by another process so wait for a bit and retry
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, _this.retryDelay); })];
                        case 4:
                            // The file is still locked by another process so wait for a bit and retry
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 5:
                            attempts++;
                            return [3 /*break*/, 1];
                        case 6: 
                        // If we fall out of the loop then we ran out of rety attempts
                        throw new Error("Timed out waiting " + this.retryAttempts * this.retryDelay /
                            1000 + "s for another ngcc process, with id " + pid + ", to complete.\n" +
                            ("(If you are sure no ngcc process is running then you should delete the lock-file at " + this.lockFile.path + ".)"));
                    }
                });
            });
        };
        return AsyncLocker;
    }());
    exports.AsyncLocker = AsyncLocker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfbG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2xvY2tpbmcvYXN5bmNfbG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBOzs7Ozs7Ozs7O09BVUc7SUFDSDtRQUNFLHFCQUNZLFFBQWtCLEVBQVksTUFBYyxFQUFVLFVBQWtCLEVBQ3hFLGFBQXFCO1lBRHJCLGFBQVEsR0FBUixRQUFRLENBQVU7WUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtZQUN4RSxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUFHLENBQUM7UUFFckM7Ozs7V0FJRztRQUNHLDBCQUFJLEdBQVYsVUFBYyxFQUFvQjs7Ozs7Z0NBQ2hDLHFCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs7NEJBQW5CLFNBQW1CLENBQUM7NEJBQ3BCLHNCQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDOzs7O1NBQ25EO1FBRWUsNEJBQU0sR0FBdEI7Ozs7Ozs7NEJBQ00sR0FBRyxHQUFXLEVBQUUsQ0FBQzs0QkFDWixRQUFRLEdBQUcsQ0FBQzs7O2lDQUFFLENBQUEsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7Ozs7NEJBRWhELHNCQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUM7Ozs0QkFFN0IsSUFBSSxHQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQ0FDdkIsTUFBTSxHQUFDLENBQUM7NkJBQ1Q7NEJBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3BDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQ0FDbEIsbUVBQW1FO2dDQUNuRSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dDQUNiLEdBQUcsR0FBRyxNQUFNLENBQUM7NkJBQ2Q7NEJBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWiw4QkFBNEIsR0FBRyxtQ0FBZ0M7cUNBQy9ELG1CQUFpQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx3QkFBcUIsQ0FBQSxDQUFDLENBQUM7NkJBQ3hGOzRCQUNELDBFQUEwRTs0QkFDMUUscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxFQUFBOzs0QkFEbEUsMEVBQTBFOzRCQUMxRSxTQUFrRSxDQUFDOzs7NEJBbkJqQixRQUFRLEVBQUUsQ0FBQTs7O3dCQXNCaEUsOERBQThEO3dCQUM5RCxNQUFNLElBQUksS0FBSyxDQUNYLHVCQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVU7NEJBQ3BDLElBQUksNENBQXVDLEdBQUcscUJBQWtCOzZCQUNwRSx5RkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksT0FBSSxDQUFBLENBQUMsQ0FBQzs7OztTQUNqQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQS9DRCxJQStDQztJQS9DWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnaW5nL2xvZ2dlcic7XG5pbXBvcnQge0xvY2tGaWxlfSBmcm9tICcuL2xvY2tfZmlsZSc7XG5cbi8qKlxuICogQXN5bmNMb2NrZXIgaXMgdXNlZCB0byBwcmV2ZW50IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2Ugb2YgbmdjYyBleGVjdXRpbmcgYXQgdGhlIHNhbWUgdGltZSxcbiAqIHdoZW4gYmVpbmcgY2FsbGVkIGluIGFuIGFzeW5jaHJvbm91cyBjb250ZXh0LlxuICpcbiAqICogV2hlbiBuZ2NjIHN0YXJ0cyBleGVjdXRpbmcsIGl0IGNyZWF0ZXMgYSBmaWxlIGluIHRoZSBgY29tcGlsZXItY2xpL25nY2NgIGZvbGRlci5cbiAqICogSWYgaXQgZmluZHMgb25lIGlzIGFscmVhZHkgdGhlcmUgdGhlbiBpdCBwYXVzZXMgYW5kIHdhaXRzIGZvciB0aGUgZmlsZSB0byBiZSByZW1vdmVkIGJ5IHRoZVxuICogICBvdGhlciBwcm9jZXNzLiBJZiB0aGUgZmlsZSBpcyBub3QgcmVtb3ZlZCB3aXRoaW4gYSBzZXQgdGltZW91dCBwZXJpb2QgZ2l2ZW4gYnlcbiAqICAgYHJldHJ5RGVsYXkqcmV0cnlBdHRlbXB0c2AgYW4gZXJyb3IgaXMgdGhyb3duIHdpdGggYSBzdWl0YWJsZSBlcnJvciBtZXNzYWdlLlxuICogKiBJZiB0aGUgcHJvY2VzcyBsb2NraW5nIHRoZSBmaWxlIGNoYW5nZXMsIHRoZW4gd2UgcmVzdGFydCB0aGUgdGltZW91dC5cbiAqICogV2hlbiBuZ2NjIGNvbXBsZXRlcyBleGVjdXRpbmcsIGl0IHJlbW92ZXMgdGhlIGZpbGUgc28gdGhhdCBmdXR1cmUgbmdjYyBleGVjdXRpb25zIGNhbiBzdGFydC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzeW5jTG9ja2VyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGxvY2tGaWxlOiBMb2NrRmlsZSwgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyLCBwcml2YXRlIHJldHJ5RGVsYXk6IG51bWJlcixcbiAgICAgIHByaXZhdGUgcmV0cnlBdHRlbXB0czogbnVtYmVyKSB7fVxuXG4gIC8qKlxuICAgKiBSdW4gYSBmdW5jdGlvbiBndWFyZGVkIGJ5IHRoZSBsb2NrIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuLlxuICAgKi9cbiAgYXN5bmMgbG9jazxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGF3YWl0IHRoaXMuY3JlYXRlKCk7XG4gICAgcmV0dXJuIGZuKCkuZmluYWxseSgoKSA9PiB0aGlzLmxvY2tGaWxlLnJlbW92ZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBjcmVhdGUoKSB7XG4gICAgbGV0IHBpZDogc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgYXR0ZW1wdHMgPSAwOyBhdHRlbXB0cyA8IHRoaXMucmV0cnlBdHRlbXB0czsgYXR0ZW1wdHMrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9ja0ZpbGUud3JpdGUoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ0VFWElTVCcpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1BpZCA9IHRoaXMubG9ja0ZpbGUucmVhZCgpO1xuICAgICAgICBpZiAobmV3UGlkICE9PSBwaWQpIHtcbiAgICAgICAgICAvLyBUaGUgcHJvY2VzcyBsb2NraW5nIHRoZSBmaWxlIGhhcyBjaGFuZ2VkLCBzbyByZXN0YXJ0IHRoZSB0aW1lb3V0XG4gICAgICAgICAgYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgIHBpZCA9IG5ld1BpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICBgQW5vdGhlciBwcm9jZXNzLCB3aXRoIGlkICR7cGlkfSwgaXMgY3VycmVudGx5IHJ1bm5pbmcgbmdjYy5cXG5gICtcbiAgICAgICAgICAgICAgYFdhaXRpbmcgdXAgdG8gJHt0aGlzLnJldHJ5RGVsYXkgKiB0aGlzLnJldHJ5QXR0ZW1wdHMgLyAxMDAwfXMgZm9yIGl0IHRvIGZpbmlzaC5gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgZmlsZSBpcyBzdGlsbCBsb2NrZWQgYnkgYW5vdGhlciBwcm9jZXNzIHNvIHdhaXQgZm9yIGEgYml0IGFuZCByZXRyeVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGhpcy5yZXRyeURlbGF5KSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIGZhbGwgb3V0IG9mIHRoZSBsb29wIHRoZW4gd2UgcmFuIG91dCBvZiByZXR5IGF0dGVtcHRzXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGltZWQgb3V0IHdhaXRpbmcgJHtcbiAgICAgICAgICAgIHRoaXMucmV0cnlBdHRlbXB0cyAqIHRoaXMucmV0cnlEZWxheSAvXG4gICAgICAgICAgICAxMDAwfXMgZm9yIGFub3RoZXIgbmdjYyBwcm9jZXNzLCB3aXRoIGlkICR7cGlkfSwgdG8gY29tcGxldGUuXFxuYCArXG4gICAgICAgIGAoSWYgeW91IGFyZSBzdXJlIG5vIG5nY2MgcHJvY2VzcyBpcyBydW5uaW5nIHRoZW4geW91IHNob3VsZCBkZWxldGUgdGhlIGxvY2stZmlsZSBhdCAke1xuICAgICAgICAgICAgdGhpcy5sb2NrRmlsZS5wYXRofS4pYCk7XG4gIH1cbn1cbiJdfQ==