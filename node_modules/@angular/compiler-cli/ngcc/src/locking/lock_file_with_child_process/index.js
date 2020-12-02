(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/index", ["require", "exports", "child_process", "@angular/compiler-cli/ngcc/src/logging/logger", "@angular/compiler-cli/ngcc/src/locking/lock_file", "@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var child_process_1 = require("child_process");
    var logger_1 = require("@angular/compiler-cli/ngcc/src/logging/logger");
    var lock_file_1 = require("@angular/compiler-cli/ngcc/src/locking/lock_file");
    var util_1 = require("@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util");
    /// <reference types="node" />
    /**
     * This `LockFile` implementation uses a child-process to remove the lock file when the main process
     * exits (for whatever reason).
     *
     * There are a few milliseconds between the child-process being forked and it registering its
     * `disconnect` event, which is responsible for tidying up the lock-file in the event that the main
     * process exits unexpectedly.
     *
     * We eagerly create the unlocker child-process so that it maximizes the time before the lock-file
     * is actually written, which makes it very unlikely that the unlocker would not be ready in the
     * case that the developer hits Ctrl-C or closes the terminal within a fraction of a second of the
     * lock-file being created.
     *
     * The worst case scenario is that ngcc is killed too quickly and leaves behind an orphaned
     * lock-file. In which case the next ngcc run will display a helpful error message about deleting
     * the lock-file.
     */
    var LockFileWithChildProcess = /** @class */ (function () {
        function LockFileWithChildProcess(fs, logger) {
            this.fs = fs;
            this.logger = logger;
            this.path = lock_file_1.getLockFilePath(fs);
            this.unlocker = this.createUnlocker(this.path);
        }
        LockFileWithChildProcess.prototype.write = function () {
            if (this.unlocker === null) {
                // In case we already disconnected the previous unlocker child-process, perhaps by calling
                // `remove()`. Normally the LockFile should only be used once per instance.
                this.unlocker = this.createUnlocker(this.path);
            }
            this.logger.debug("Attemping to write lock-file at " + this.path + " with PID " + process.pid);
            // To avoid race conditions, check for existence of the lock-file by trying to create it.
            // This will throw an error if the file already exists.
            this.fs.writeFile(this.path, process.pid.toString(), /* exclusive */ true);
            this.logger.debug("Written lock-file at " + this.path + " with PID " + process.pid);
        };
        LockFileWithChildProcess.prototype.read = function () {
            try {
                return this.fs.readFile(this.path);
            }
            catch (_a) {
                return '{unknown}';
            }
        };
        LockFileWithChildProcess.prototype.remove = function () {
            util_1.removeLockFile(this.fs, this.logger, this.path, process.pid.toString());
            if (this.unlocker !== null) {
                // If there is an unlocker child-process then disconnect from it so that it can exit itself.
                this.unlocker.disconnect();
                this.unlocker = null;
            }
        };
        LockFileWithChildProcess.prototype.createUnlocker = function (path) {
            var _a, _b;
            this.logger.debug('Forking unlocker child-process');
            var logLevel = this.logger.level !== undefined ? this.logger.level.toString() : logger_1.LogLevel.info.toString();
            var isWindows = process.platform === 'win32';
            var unlocker = child_process_1.fork(this.fs.resolve(__dirname, './unlocker.js'), [path, logLevel], { detached: true, stdio: isWindows ? 'pipe' : 'inherit' });
            if (isWindows) {
                (_a = unlocker.stdout) === null || _a === void 0 ? void 0 : _a.on('data', process.stdout.write.bind(process.stdout));
                (_b = unlocker.stderr) === null || _b === void 0 ? void 0 : _b.on('data', process.stderr.write.bind(process.stderr));
            }
            return unlocker;
        };
        return LockFileWithChildProcess;
    }());
    exports.LockFileWithChildProcess = LockFileWithChildProcess;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvbG9ja2luZy9sb2NrX2ZpbGVfd2l0aF9jaGlsZF9wcm9jZXNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0NBQWlEO0lBR2pELHdFQUFzRDtJQUN0RCw4RUFBdUQ7SUFFdkQsaUdBQXNDO0lBRXRDLDhCQUE4QjtJQUU5Qjs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNIO1FBSUUsa0NBQXNCLEVBQWMsRUFBWSxNQUFjO1lBQXhDLE9BQUUsR0FBRixFQUFFLENBQVk7WUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsMkJBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFHRCx3Q0FBSyxHQUFMO1lBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDMUIsMEZBQTBGO2dCQUMxRiwyRUFBMkU7Z0JBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQ0FBbUMsSUFBSSxDQUFDLElBQUksa0JBQWEsT0FBTyxDQUFDLEdBQUssQ0FBQyxDQUFDO1lBQzFGLHlGQUF5RjtZQUN6Rix1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBd0IsSUFBSSxDQUFDLElBQUksa0JBQWEsT0FBTyxDQUFDLEdBQUssQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFFRCx1Q0FBSSxHQUFKO1lBQ0UsSUFBSTtnQkFDRixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztZQUFDLFdBQU07Z0JBQ04sT0FBTyxXQUFXLENBQUM7YUFDcEI7UUFDSCxDQUFDO1FBRUQseUNBQU0sR0FBTjtZQUNFLHFCQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLDRGQUE0RjtnQkFDNUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7UUFDSCxDQUFDO1FBRVMsaURBQWMsR0FBeEIsVUFBeUIsSUFBb0I7O1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDcEQsSUFBTSxRQUFRLEdBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUYsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUM7WUFDL0MsSUFBTSxRQUFRLEdBQUcsb0JBQUksQ0FDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUM3RCxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksU0FBUyxFQUFFO2dCQUNiLE1BQUEsUUFBUSxDQUFDLE1BQU0sMENBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2RSxNQUFBLFFBQVEsQ0FBQyxNQUFNLDBDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTthQUN4RTtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFDSCwrQkFBQztJQUFELENBQUMsQUF0REQsSUFzREM7SUF0RFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDaGlsZFByb2Nlc3MsIGZvcmt9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtfSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtMb2dnZXIsIExvZ0xldmVsfSBmcm9tICcuLi8uLi9sb2dnaW5nL2xvZ2dlcic7XG5pbXBvcnQge2dldExvY2tGaWxlUGF0aCwgTG9ja0ZpbGV9IGZyb20gJy4uL2xvY2tfZmlsZSc7XG5cbmltcG9ydCB7cmVtb3ZlTG9ja0ZpbGV9IGZyb20gJy4vdXRpbCc7XG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiIC8+XG5cbi8qKlxuICogVGhpcyBgTG9ja0ZpbGVgIGltcGxlbWVudGF0aW9uIHVzZXMgYSBjaGlsZC1wcm9jZXNzIHRvIHJlbW92ZSB0aGUgbG9jayBmaWxlIHdoZW4gdGhlIG1haW4gcHJvY2Vzc1xuICogZXhpdHMgKGZvciB3aGF0ZXZlciByZWFzb24pLlxuICpcbiAqIFRoZXJlIGFyZSBhIGZldyBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgY2hpbGQtcHJvY2VzcyBiZWluZyBmb3JrZWQgYW5kIGl0IHJlZ2lzdGVyaW5nIGl0c1xuICogYGRpc2Nvbm5lY3RgIGV2ZW50LCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGlkeWluZyB1cCB0aGUgbG9jay1maWxlIGluIHRoZSBldmVudCB0aGF0IHRoZSBtYWluXG4gKiBwcm9jZXNzIGV4aXRzIHVuZXhwZWN0ZWRseS5cbiAqXG4gKiBXZSBlYWdlcmx5IGNyZWF0ZSB0aGUgdW5sb2NrZXIgY2hpbGQtcHJvY2VzcyBzbyB0aGF0IGl0IG1heGltaXplcyB0aGUgdGltZSBiZWZvcmUgdGhlIGxvY2stZmlsZVxuICogaXMgYWN0dWFsbHkgd3JpdHRlbiwgd2hpY2ggbWFrZXMgaXQgdmVyeSB1bmxpa2VseSB0aGF0IHRoZSB1bmxvY2tlciB3b3VsZCBub3QgYmUgcmVhZHkgaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIGRldmVsb3BlciBoaXRzIEN0cmwtQyBvciBjbG9zZXMgdGhlIHRlcm1pbmFsIHdpdGhpbiBhIGZyYWN0aW9uIG9mIGEgc2Vjb25kIG9mIHRoZVxuICogbG9jay1maWxlIGJlaW5nIGNyZWF0ZWQuXG4gKlxuICogVGhlIHdvcnN0IGNhc2Ugc2NlbmFyaW8gaXMgdGhhdCBuZ2NjIGlzIGtpbGxlZCB0b28gcXVpY2tseSBhbmQgbGVhdmVzIGJlaGluZCBhbiBvcnBoYW5lZFxuICogbG9jay1maWxlLiBJbiB3aGljaCBjYXNlIHRoZSBuZXh0IG5nY2MgcnVuIHdpbGwgZGlzcGxheSBhIGhlbHBmdWwgZXJyb3IgbWVzc2FnZSBhYm91dCBkZWxldGluZ1xuICogdGhlIGxvY2stZmlsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIExvY2tGaWxlV2l0aENoaWxkUHJvY2VzcyBpbXBsZW1lbnRzIExvY2tGaWxlIHtcbiAgcGF0aDogQWJzb2x1dGVGc1BhdGg7XG4gIHByaXZhdGUgdW5sb2NrZXI6IENoaWxkUHJvY2Vzc3xudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBmczogRmlsZVN5c3RlbSwgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyKSB7XG4gICAgdGhpcy5wYXRoID0gZ2V0TG9ja0ZpbGVQYXRoKGZzKTtcbiAgICB0aGlzLnVubG9ja2VyID0gdGhpcy5jcmVhdGVVbmxvY2tlcih0aGlzLnBhdGgpO1xuICB9XG5cblxuICB3cml0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51bmxvY2tlciA9PT0gbnVsbCkge1xuICAgICAgLy8gSW4gY2FzZSB3ZSBhbHJlYWR5IGRpc2Nvbm5lY3RlZCB0aGUgcHJldmlvdXMgdW5sb2NrZXIgY2hpbGQtcHJvY2VzcywgcGVyaGFwcyBieSBjYWxsaW5nXG4gICAgICAvLyBgcmVtb3ZlKClgLiBOb3JtYWxseSB0aGUgTG9ja0ZpbGUgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbmNlIHBlciBpbnN0YW5jZS5cbiAgICAgIHRoaXMudW5sb2NrZXIgPSB0aGlzLmNyZWF0ZVVubG9ja2VyKHRoaXMucGF0aCk7XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBBdHRlbXBpbmcgdG8gd3JpdGUgbG9jay1maWxlIGF0ICR7dGhpcy5wYXRofSB3aXRoIFBJRCAke3Byb2Nlc3MucGlkfWApO1xuICAgIC8vIFRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucywgY2hlY2sgZm9yIGV4aXN0ZW5jZSBvZiB0aGUgbG9jay1maWxlIGJ5IHRyeWluZyB0byBjcmVhdGUgaXQuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzLlxuICAgIHRoaXMuZnMud3JpdGVGaWxlKHRoaXMucGF0aCwgcHJvY2Vzcy5waWQudG9TdHJpbmcoKSwgLyogZXhjbHVzaXZlICovIHRydWUpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBXcml0dGVuIGxvY2stZmlsZSBhdCAke3RoaXMucGF0aH0gd2l0aCBQSUQgJHtwcm9jZXNzLnBpZH1gKTtcbiAgfVxuXG4gIHJlYWQoKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZnMucmVhZEZpbGUodGhpcy5wYXRoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiAne3Vua25vd259JztcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgcmVtb3ZlTG9ja0ZpbGUodGhpcy5mcywgdGhpcy5sb2dnZXIsIHRoaXMucGF0aCwgcHJvY2Vzcy5waWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKHRoaXMudW5sb2NrZXIgIT09IG51bGwpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGFuIHVubG9ja2VyIGNoaWxkLXByb2Nlc3MgdGhlbiBkaXNjb25uZWN0IGZyb20gaXQgc28gdGhhdCBpdCBjYW4gZXhpdCBpdHNlbGYuXG4gICAgICB0aGlzLnVubG9ja2VyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMudW5sb2NrZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVVbmxvY2tlcihwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IENoaWxkUHJvY2VzcyB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ0ZvcmtpbmcgdW5sb2NrZXIgY2hpbGQtcHJvY2VzcycpO1xuICAgIGNvbnN0IGxvZ0xldmVsID1cbiAgICAgICAgdGhpcy5sb2dnZXIubGV2ZWwgIT09IHVuZGVmaW5lZCA/IHRoaXMubG9nZ2VyLmxldmVsLnRvU3RyaW5nKCkgOiBMb2dMZXZlbC5pbmZvLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcbiAgICBjb25zdCB1bmxvY2tlciA9IGZvcmsoXG4gICAgICAgIHRoaXMuZnMucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3VubG9ja2VyLmpzJyksIFtwYXRoLCBsb2dMZXZlbF0sXG4gICAgICAgIHtkZXRhY2hlZDogdHJ1ZSwgc3RkaW86IGlzV2luZG93cyA/ICdwaXBlJyA6ICdpbmhlcml0J30pO1xuICAgIGlmIChpc1dpbmRvd3MpIHtcbiAgICAgIHVubG9ja2VyLnN0ZG91dD8ub24oJ2RhdGEnLCBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSk7XG4gICAgICB1bmxvY2tlci5zdGRlcnI/Lm9uKCdkYXRhJywgcHJvY2Vzcy5zdGRlcnIud3JpdGUuYmluZChwcm9jZXNzLnN0ZGVycikpO1xuICAgIH1cbiAgICByZXR1cm4gdW5sb2NrZXI7XG4gIH1cbn1cbiJdfQ==