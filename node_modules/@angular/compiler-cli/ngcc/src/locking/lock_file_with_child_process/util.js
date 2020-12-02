(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Remove the lock-file at the provided `lockFilePath` from the given file-system.
     *
     * It only removes the file if the pid stored in the file matches the provided `pid`.
     * The provided `pid` is of the process that is exiting and so no longer needs to hold the lock.
     */
    function removeLockFile(fs, logger, lockFilePath, pid) {
        try {
            logger.debug("Attempting to remove lock-file at " + lockFilePath + ".");
            var lockFilePid = fs.readFile(lockFilePath);
            if (lockFilePid === pid) {
                logger.debug("PIDs match (" + pid + "), so removing " + lockFilePath + ".");
                fs.removeFile(lockFilePath);
            }
            else {
                logger.debug("PIDs do not match (" + pid + " and " + lockFilePid + "), so not removing " + lockFilePath + ".");
            }
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                logger.debug("The lock-file at " + lockFilePath + " was already removed.");
                // File already removed so quietly exit
            }
            else {
                throw e;
            }
        }
    }
    exports.removeLockFile = removeLockFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9sb2NraW5nL2xvY2tfZmlsZV93aXRoX2NoaWxkX3Byb2Nlc3MvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVVBOzs7OztPQUtHO0lBQ0gsU0FBZ0IsY0FBYyxDQUMxQixFQUFjLEVBQUUsTUFBYyxFQUFFLFlBQTRCLEVBQUUsR0FBVztRQUMzRSxJQUFJO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyx1Q0FBcUMsWUFBWSxNQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLElBQUksV0FBVyxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBZSxHQUFHLHVCQUFrQixZQUFZLE1BQUcsQ0FBQyxDQUFDO2dCQUNsRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQ1Isd0JBQXNCLEdBQUcsYUFBUSxXQUFXLDJCQUFzQixZQUFZLE1BQUcsQ0FBQyxDQUFDO2FBQ3hGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQW9CLFlBQVksMEJBQXVCLENBQUMsQ0FBQztnQkFDdEUsdUNBQXVDO2FBQ3hDO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFwQkQsd0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgRmlsZVN5c3RlbX0gZnJvbSAnLi4vLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnaW5nL2xvZ2dlcic7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsb2NrLWZpbGUgYXQgdGhlIHByb3ZpZGVkIGBsb2NrRmlsZVBhdGhgIGZyb20gdGhlIGdpdmVuIGZpbGUtc3lzdGVtLlxuICpcbiAqIEl0IG9ubHkgcmVtb3ZlcyB0aGUgZmlsZSBpZiB0aGUgcGlkIHN0b3JlZCBpbiB0aGUgZmlsZSBtYXRjaGVzIHRoZSBwcm92aWRlZCBgcGlkYC5cbiAqIFRoZSBwcm92aWRlZCBgcGlkYCBpcyBvZiB0aGUgcHJvY2VzcyB0aGF0IGlzIGV4aXRpbmcgYW5kIHNvIG5vIGxvbmdlciBuZWVkcyB0byBob2xkIHRoZSBsb2NrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTG9ja0ZpbGUoXG4gICAgZnM6IEZpbGVTeXN0ZW0sIGxvZ2dlcjogTG9nZ2VyLCBsb2NrRmlsZVBhdGg6IEFic29sdXRlRnNQYXRoLCBwaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgQXR0ZW1wdGluZyB0byByZW1vdmUgbG9jay1maWxlIGF0ICR7bG9ja0ZpbGVQYXRofS5gKTtcbiAgICBjb25zdCBsb2NrRmlsZVBpZCA9IGZzLnJlYWRGaWxlKGxvY2tGaWxlUGF0aCk7XG4gICAgaWYgKGxvY2tGaWxlUGlkID09PSBwaWQpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhgUElEcyBtYXRjaCAoJHtwaWR9KSwgc28gcmVtb3ZpbmcgJHtsb2NrRmlsZVBhdGh9LmApO1xuICAgICAgZnMucmVtb3ZlRmlsZShsb2NrRmlsZVBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFBJRHMgZG8gbm90IG1hdGNoICgke3BpZH0gYW5kICR7bG9ja0ZpbGVQaWR9KSwgc28gbm90IHJlbW92aW5nICR7bG9ja0ZpbGVQYXRofS5gKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgbG9jay1maWxlIGF0ICR7bG9ja0ZpbGVQYXRofSB3YXMgYWxyZWFkeSByZW1vdmVkLmApO1xuICAgICAgLy8gRmlsZSBhbHJlYWR5IHJlbW92ZWQgc28gcXVpZXRseSBleGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG59XG4iXX0=