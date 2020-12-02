(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/unlocker", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/logging/console_logger", "@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util"], factory);
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
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var console_logger_1 = require("@angular/compiler-cli/ngcc/src/logging/console_logger");
    var util_1 = require("@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util");
    /// <reference types="node" />
    // This file is an entry-point for the child-process that is started by `LockFileWithChildProcess`
    // to ensure that the lock-file is removed when the primary process exits unexpectedly.
    // We have no choice but to use the node.js file-system here since we are in a separate process
    // from the main ngcc run, which may be running a mock file-system from within a test.
    var fs = new file_system_1.NodeJSFileSystem();
    // We create a logger that has the same logging level as the parent process, since it should have
    // been passed through as one of the args
    var logLevel = parseInt(process.argv.pop(), 10);
    var logger = new console_logger_1.ConsoleLogger(logLevel);
    // We must store the parent PID now as it changes if the parent process is killed early
    var ppid = process.ppid.toString();
    // The path to the lock-file to remove should have been passed as one of the args
    var lockFilePath = fs.resolve(process.argv.pop());
    logger.debug("Starting unlocker at process " + process.pid + " on behalf of process " + ppid);
    logger.debug("The lock-file path is " + lockFilePath);
    /**
     * When the parent process exits (for whatever reason) remove the loc-file if it exists and as long
     * as it was one that was created by the parent process.
     */
    process.on('disconnect', function () {
        util_1.removeLockFile(fs, logger, lockFilePath, ppid);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvbG9ja2luZy9sb2NrX2ZpbGVfd2l0aF9jaGlsZF9wcm9jZXNzL3VubG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsMkVBQW1FO0lBQ25FLHdGQUEyRDtJQUMzRCxpR0FBc0M7SUFFdEMsOEJBQThCO0lBRTlCLGtHQUFrRztJQUNsRyx1RkFBdUY7SUFFdkYsK0ZBQStGO0lBQy9GLHNGQUFzRjtJQUN0RixJQUFNLEVBQUUsR0FBRyxJQUFJLDhCQUFnQixFQUFFLENBQUM7SUFFbEMsaUdBQWlHO0lBQ2pHLHlDQUF5QztJQUN6QyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLDhCQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsdUZBQXVGO0lBQ3ZGLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckMsaUZBQWlGO0lBQ2pGLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxLQUFLLENBQUMsa0NBQWdDLE9BQU8sQ0FBQyxHQUFHLDhCQUF5QixJQUFNLENBQUMsQ0FBQztJQUN6RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUF5QixZQUFjLENBQUMsQ0FBQztJQUV0RDs7O09BR0c7SUFDSCxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUN2QixxQkFBYyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtOb2RlSlNGaWxlU3lzdGVtfSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtDb25zb2xlTG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnaW5nL2NvbnNvbGVfbG9nZ2VyJztcbmltcG9ydCB7cmVtb3ZlTG9ja0ZpbGV9IGZyb20gJy4vdXRpbCc7XG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiIC8+XG5cbi8vIFRoaXMgZmlsZSBpcyBhbiBlbnRyeS1wb2ludCBmb3IgdGhlIGNoaWxkLXByb2Nlc3MgdGhhdCBpcyBzdGFydGVkIGJ5IGBMb2NrRmlsZVdpdGhDaGlsZFByb2Nlc3NgXG4vLyB0byBlbnN1cmUgdGhhdCB0aGUgbG9jay1maWxlIGlzIHJlbW92ZWQgd2hlbiB0aGUgcHJpbWFyeSBwcm9jZXNzIGV4aXRzIHVuZXhwZWN0ZWRseS5cblxuLy8gV2UgaGF2ZSBubyBjaG9pY2UgYnV0IHRvIHVzZSB0aGUgbm9kZS5qcyBmaWxlLXN5c3RlbSBoZXJlIHNpbmNlIHdlIGFyZSBpbiBhIHNlcGFyYXRlIHByb2Nlc3Ncbi8vIGZyb20gdGhlIG1haW4gbmdjYyBydW4sIHdoaWNoIG1heSBiZSBydW5uaW5nIGEgbW9jayBmaWxlLXN5c3RlbSBmcm9tIHdpdGhpbiBhIHRlc3QuXG5jb25zdCBmcyA9IG5ldyBOb2RlSlNGaWxlU3lzdGVtKCk7XG5cbi8vIFdlIGNyZWF0ZSBhIGxvZ2dlciB0aGF0IGhhcyB0aGUgc2FtZSBsb2dnaW5nIGxldmVsIGFzIHRoZSBwYXJlbnQgcHJvY2Vzcywgc2luY2UgaXQgc2hvdWxkIGhhdmVcbi8vIGJlZW4gcGFzc2VkIHRocm91Z2ggYXMgb25lIG9mIHRoZSBhcmdzXG5jb25zdCBsb2dMZXZlbCA9IHBhcnNlSW50KHByb2Nlc3MuYXJndi5wb3AoKSEsIDEwKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ0xldmVsKTtcblxuLy8gV2UgbXVzdCBzdG9yZSB0aGUgcGFyZW50IFBJRCBub3cgYXMgaXQgY2hhbmdlcyBpZiB0aGUgcGFyZW50IHByb2Nlc3MgaXMga2lsbGVkIGVhcmx5XG5jb25zdCBwcGlkID0gcHJvY2Vzcy5wcGlkLnRvU3RyaW5nKCk7XG5cbi8vIFRoZSBwYXRoIHRvIHRoZSBsb2NrLWZpbGUgdG8gcmVtb3ZlIHNob3VsZCBoYXZlIGJlZW4gcGFzc2VkIGFzIG9uZSBvZiB0aGUgYXJnc1xuY29uc3QgbG9ja0ZpbGVQYXRoID0gZnMucmVzb2x2ZShwcm9jZXNzLmFyZ3YucG9wKCkhKTtcblxubG9nZ2VyLmRlYnVnKGBTdGFydGluZyB1bmxvY2tlciBhdCBwcm9jZXNzICR7cHJvY2Vzcy5waWR9IG9uIGJlaGFsZiBvZiBwcm9jZXNzICR7cHBpZH1gKTtcbmxvZ2dlci5kZWJ1ZyhgVGhlIGxvY2stZmlsZSBwYXRoIGlzICR7bG9ja0ZpbGVQYXRofWApO1xuXG4vKipcbiAqIFdoZW4gdGhlIHBhcmVudCBwcm9jZXNzIGV4aXRzIChmb3Igd2hhdGV2ZXIgcmVhc29uKSByZW1vdmUgdGhlIGxvYy1maWxlIGlmIGl0IGV4aXN0cyBhbmQgYXMgbG9uZ1xuICogYXMgaXQgd2FzIG9uZSB0aGF0IHdhcyBjcmVhdGVkIGJ5IHRoZSBwYXJlbnQgcHJvY2Vzcy5cbiAqL1xucHJvY2Vzcy5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgcmVtb3ZlTG9ja0ZpbGUoZnMsIGxvZ2dlciwgbG9ja0ZpbGVQYXRoLCBwcGlkKTtcbn0pO1xuIl19