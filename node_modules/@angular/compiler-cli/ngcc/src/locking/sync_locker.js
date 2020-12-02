(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/sync_locker", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * SyncLocker is used to prevent more than one instance of ngcc executing at the same time,
     * when being called in a synchronous context.
     *
     * * When ngcc starts executing, it creates a file in the `compiler-cli/ngcc` folder.
     * * If it finds one is already there then it fails with a suitable error message.
     * * When ngcc completes executing, it removes the file so that future ngcc executions can start.
     */
    var SyncLocker = /** @class */ (function () {
        function SyncLocker(lockFile) {
            this.lockFile = lockFile;
        }
        /**
         * Run the given function guarded by the lock file.
         *
         * @param fn the function to run.
         * @returns the value returned from the `fn` call.
         */
        SyncLocker.prototype.lock = function (fn) {
            this.create();
            try {
                return fn();
            }
            finally {
                this.lockFile.remove();
            }
        };
        /**
         * Write a lock file to disk, or error if there is already one there.
         */
        SyncLocker.prototype.create = function () {
            try {
                this.lockFile.write();
            }
            catch (e) {
                if (e.code !== 'EEXIST') {
                    throw e;
                }
                this.handleExistingLockFile();
            }
        };
        /**
         * The lock-file already exists so raise a helpful error.
         */
        SyncLocker.prototype.handleExistingLockFile = function () {
            var pid = this.lockFile.read();
            throw new Error("ngcc is already running at process with id " + pid + ".\n" +
                "If you are running multiple builds in parallel then you should pre-process your node_modules via the command line ngcc tool before starting the builds;\n" +
                "See https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation.\n" +
                ("(If you are sure no ngcc process is running then you should delete the lock-file at " + this.lockFile.path + ".)"));
        };
        return SyncLocker;
    }());
    exports.SyncLocker = SyncLocker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY19sb2NrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvbG9ja2luZy9zeW5jX2xvY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVVBOzs7Ozs7O09BT0c7SUFDSDtRQUNFLG9CQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQUcsQ0FBQztRQUUxQzs7Ozs7V0FLRztRQUNILHlCQUFJLEdBQUosVUFBUSxFQUFXO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUk7Z0JBQ0YsT0FBTyxFQUFFLEVBQUUsQ0FBQzthQUNiO29CQUFTO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDO1FBRUQ7O1dBRUc7UUFDTywyQkFBTSxHQUFoQjtZQUNFLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxDQUFDO2lCQUNUO2dCQUNELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztRQUVEOztXQUVHO1FBQ08sMkNBQXNCLEdBQWhDO1lBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxNQUFNLElBQUksS0FBSyxDQUNYLGdEQUE4QyxHQUFHLFFBQUs7Z0JBQ3RELDJKQUEySjtnQkFDM0oscUVBQXFFO2lCQUNyRSx5RkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksT0FBSSxDQUFBLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQUFDLEFBNUNELElBNENDO0lBNUNZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcbmltcG9ydCB7TG9ja0ZpbGV9IGZyb20gJy4vbG9ja19maWxlJztcblxuLyoqXG4gKiBTeW5jTG9ja2VyIGlzIHVzZWQgdG8gcHJldmVudCBtb3JlIHRoYW4gb25lIGluc3RhbmNlIG9mIG5nY2MgZXhlY3V0aW5nIGF0IHRoZSBzYW1lIHRpbWUsXG4gKiB3aGVuIGJlaW5nIGNhbGxlZCBpbiBhIHN5bmNocm9ub3VzIGNvbnRleHQuXG4gKlxuICogKiBXaGVuIG5nY2Mgc3RhcnRzIGV4ZWN1dGluZywgaXQgY3JlYXRlcyBhIGZpbGUgaW4gdGhlIGBjb21waWxlci1jbGkvbmdjY2AgZm9sZGVyLlxuICogKiBJZiBpdCBmaW5kcyBvbmUgaXMgYWxyZWFkeSB0aGVyZSB0aGVuIGl0IGZhaWxzIHdpdGggYSBzdWl0YWJsZSBlcnJvciBtZXNzYWdlLlxuICogKiBXaGVuIG5nY2MgY29tcGxldGVzIGV4ZWN1dGluZywgaXQgcmVtb3ZlcyB0aGUgZmlsZSBzbyB0aGF0IGZ1dHVyZSBuZ2NjIGV4ZWN1dGlvbnMgY2FuIHN0YXJ0LlxuICovXG5leHBvcnQgY2xhc3MgU3luY0xvY2tlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9ja0ZpbGU6IExvY2tGaWxlKSB7fVxuXG4gIC8qKlxuICAgKiBSdW4gdGhlIGdpdmVuIGZ1bmN0aW9uIGd1YXJkZWQgYnkgdGhlIGxvY2sgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIGZuIHRoZSBmdW5jdGlvbiB0byBydW4uXG4gICAqIEByZXR1cm5zIHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBgZm5gIGNhbGwuXG4gICAqL1xuICBsb2NrPFQ+KGZuOiAoKSA9PiBUKTogVCB7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9ja0ZpbGUucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbG9jayBmaWxlIHRvIGRpc2ssIG9yIGVycm9yIGlmIHRoZXJlIGlzIGFscmVhZHkgb25lIHRoZXJlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5sb2NrRmlsZS53cml0ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLmNvZGUgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZUV4aXN0aW5nTG9ja0ZpbGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxvY2stZmlsZSBhbHJlYWR5IGV4aXN0cyBzbyByYWlzZSBhIGhlbHBmdWwgZXJyb3IuXG4gICAqL1xuICBwcm90ZWN0ZWQgaGFuZGxlRXhpc3RpbmdMb2NrRmlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBwaWQgPSB0aGlzLmxvY2tGaWxlLnJlYWQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBuZ2NjIGlzIGFscmVhZHkgcnVubmluZyBhdCBwcm9jZXNzIHdpdGggaWQgJHtwaWR9LlxcbmAgK1xuICAgICAgICBgSWYgeW91IGFyZSBydW5uaW5nIG11bHRpcGxlIGJ1aWxkcyBpbiBwYXJhbGxlbCB0aGVuIHlvdSBzaG91bGQgcHJlLXByb2Nlc3MgeW91ciBub2RlX21vZHVsZXMgdmlhIHRoZSBjb21tYW5kIGxpbmUgbmdjYyB0b29sIGJlZm9yZSBzdGFydGluZyB0aGUgYnVpbGRzO1xcbmAgK1xuICAgICAgICBgU2VlIGh0dHBzOi8vdjkuYW5ndWxhci5pby9ndWlkZS9pdnkjc3BlZWRpbmctdXAtbmdjYy1jb21waWxhdGlvbi5cXG5gICtcbiAgICAgICAgYChJZiB5b3UgYXJlIHN1cmUgbm8gbmdjYyBwcm9jZXNzIGlzIHJ1bm5pbmcgdGhlbiB5b3Ugc2hvdWxkIGRlbGV0ZSB0aGUgbG9jay1maWxlIGF0ICR7XG4gICAgICAgICAgICB0aGlzLmxvY2tGaWxlLnBhdGh9LilgKTtcbiAgfVxufVxuIl19