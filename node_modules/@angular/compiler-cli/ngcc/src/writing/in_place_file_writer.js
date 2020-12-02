(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/writing/in_place_file_writer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    exports.NGCC_BACKUP_EXTENSION = '.__ivy_ngcc_bak';
    /**
     * This FileWriter overwrites the transformed file, in-place, while creating
     * a back-up of the original file with an extra `.__ivy_ngcc_bak` extension.
     */
    var InPlaceFileWriter = /** @class */ (function () {
        function InPlaceFileWriter(fs, logger, errorOnFailedEntryPoint) {
            this.fs = fs;
            this.logger = logger;
            this.errorOnFailedEntryPoint = errorOnFailedEntryPoint;
        }
        InPlaceFileWriter.prototype.writeBundle = function (_bundle, transformedFiles, _formatProperties) {
            var _this = this;
            transformedFiles.forEach(function (file) { return _this.writeFileAndBackup(file); });
        };
        InPlaceFileWriter.prototype.revertBundle = function (_entryPoint, transformedFilePaths, _formatProperties) {
            var e_1, _a;
            try {
                for (var transformedFilePaths_1 = tslib_1.__values(transformedFilePaths), transformedFilePaths_1_1 = transformedFilePaths_1.next(); !transformedFilePaths_1_1.done; transformedFilePaths_1_1 = transformedFilePaths_1.next()) {
                    var filePath = transformedFilePaths_1_1.value;
                    this.revertFileAndBackup(filePath);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (transformedFilePaths_1_1 && !transformedFilePaths_1_1.done && (_a = transformedFilePaths_1.return)) _a.call(transformedFilePaths_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        InPlaceFileWriter.prototype.writeFileAndBackup = function (file) {
            this.fs.ensureDir(file_system_1.dirname(file.path));
            var backPath = file_system_1.absoluteFrom("" + file.path + exports.NGCC_BACKUP_EXTENSION);
            if (this.fs.exists(backPath)) {
                if (this.errorOnFailedEntryPoint) {
                    throw new Error("Tried to overwrite " + backPath + " with an ngcc back up file, which is disallowed.");
                }
                else {
                    this.logger.error("Tried to write " + backPath + " with an ngcc back up file but it already exists so not writing, nor backing up, " + file.path + ".\n" +
                        "This error may be because two or more entry-points overlap and ngcc has been asked to process some files more than once.\n" +
                        "You should check other entry-points in this package and set up a config to ignore any that you are not using.");
                }
            }
            else {
                if (this.fs.exists(file.path)) {
                    this.fs.moveFile(file.path, backPath);
                }
                this.fs.writeFile(file.path, file.contents);
            }
        };
        InPlaceFileWriter.prototype.revertFileAndBackup = function (filePath) {
            if (this.fs.exists(filePath)) {
                this.fs.removeFile(filePath);
                var backPath = file_system_1.absoluteFrom("" + filePath + exports.NGCC_BACKUP_EXTENSION);
                if (this.fs.exists(backPath)) {
                    this.fs.moveFile(backPath, filePath);
                }
            }
        };
        return InPlaceFileWriter;
    }());
    exports.InPlaceFileWriter = InPlaceFileWriter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5fcGxhY2VfZmlsZV93cml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvd3JpdGluZy9pbl9wbGFjZV9maWxlX3dyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwyRUFBaUc7SUFRcEYsUUFBQSxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQztJQUN2RDs7O09BR0c7SUFDSDtRQUNFLDJCQUNjLEVBQWMsRUFBWSxNQUFjLEVBQ3hDLHVCQUFnQztZQURoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQVksV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUN4Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVM7UUFBRyxDQUFDO1FBRWxELHVDQUFXLEdBQVgsVUFDSSxPQUF5QixFQUFFLGdCQUErQixFQUMxRCxpQkFBNEM7WUFGaEQsaUJBSUM7WUFEQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBRUQsd0NBQVksR0FBWixVQUNJLFdBQXVCLEVBQUUsb0JBQXNDLEVBQy9ELGlCQUEyQzs7O2dCQUM3QyxLQUF1QixJQUFBLHlCQUFBLGlCQUFBLG9CQUFvQixDQUFBLDBEQUFBLDRGQUFFO29CQUF4QyxJQUFNLFFBQVEsaUNBQUE7b0JBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEM7Ozs7Ozs7OztRQUNILENBQUM7UUFFUyw4Q0FBa0IsR0FBNUIsVUFBNkIsSUFBaUI7WUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFNLFFBQVEsR0FBRywwQkFBWSxDQUFDLEtBQUcsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBdUIsQ0FBQyxDQUFDO1lBQ3RFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUNoQyxNQUFNLElBQUksS0FBSyxDQUNYLHdCQUFzQixRQUFRLHFEQUFrRCxDQUFDLENBQUM7aUJBQ3ZGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNiLG9CQUNJLFFBQVEseUZBQ1IsSUFBSSxDQUFDLElBQUksUUFBSzt3QkFDbEIsNEhBQTRIO3dCQUM1SCwrR0FBK0csQ0FBQyxDQUFDO2lCQUN0SDthQUNGO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUM7UUFFUywrQ0FBbUIsR0FBN0IsVUFBOEIsUUFBd0I7WUFDcEQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTdCLElBQU0sUUFBUSxHQUFHLDBCQUFZLENBQUMsS0FBRyxRQUFRLEdBQUcsNkJBQXVCLENBQUMsQ0FBQztnQkFDckUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1FBQ0gsQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FBQyxBQXBERCxJQW9EQztJQXBEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fic29sdXRlRnJvbSwgQWJzb2x1dGVGc1BhdGgsIGRpcm5hbWUsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXInO1xuaW1wb3J0IHtFbnRyeVBvaW50LCBFbnRyeVBvaW50SnNvblByb3BlcnR5fSBmcm9tICcuLi9wYWNrYWdlcy9lbnRyeV9wb2ludCc7XG5pbXBvcnQge0VudHJ5UG9pbnRCdW5kbGV9IGZyb20gJy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50X2J1bmRsZSc7XG5pbXBvcnQge0ZpbGVUb1dyaXRlfSBmcm9tICcuLi9yZW5kZXJpbmcvdXRpbHMnO1xuXG5pbXBvcnQge0ZpbGVXcml0ZXJ9IGZyb20gJy4vZmlsZV93cml0ZXInO1xuXG5leHBvcnQgY29uc3QgTkdDQ19CQUNLVVBfRVhURU5TSU9OID0gJy5fX2l2eV9uZ2NjX2Jhayc7XG4vKipcbiAqIFRoaXMgRmlsZVdyaXRlciBvdmVyd3JpdGVzIHRoZSB0cmFuc2Zvcm1lZCBmaWxlLCBpbi1wbGFjZSwgd2hpbGUgY3JlYXRpbmdcbiAqIGEgYmFjay11cCBvZiB0aGUgb3JpZ2luYWwgZmlsZSB3aXRoIGFuIGV4dHJhIGAuX19pdnlfbmdjY19iYWtgIGV4dGVuc2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEluUGxhY2VGaWxlV3JpdGVyIGltcGxlbWVudHMgRmlsZVdyaXRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIGZzOiBGaWxlU3lzdGVtLCBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXIsXG4gICAgICBwcm90ZWN0ZWQgZXJyb3JPbkZhaWxlZEVudHJ5UG9pbnQ6IGJvb2xlYW4pIHt9XG5cbiAgd3JpdGVCdW5kbGUoXG4gICAgICBfYnVuZGxlOiBFbnRyeVBvaW50QnVuZGxlLCB0cmFuc2Zvcm1lZEZpbGVzOiBGaWxlVG9Xcml0ZVtdLFxuICAgICAgX2Zvcm1hdFByb3BlcnRpZXM/OiBFbnRyeVBvaW50SnNvblByb3BlcnR5W10pIHtcbiAgICB0cmFuc2Zvcm1lZEZpbGVzLmZvckVhY2goZmlsZSA9PiB0aGlzLndyaXRlRmlsZUFuZEJhY2t1cChmaWxlKSk7XG4gIH1cblxuICByZXZlcnRCdW5kbGUoXG4gICAgICBfZW50cnlQb2ludDogRW50cnlQb2ludCwgdHJhbnNmb3JtZWRGaWxlUGF0aHM6IEFic29sdXRlRnNQYXRoW10sXG4gICAgICBfZm9ybWF0UHJvcGVydGllczogRW50cnlQb2ludEpzb25Qcm9wZXJ0eVtdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBmaWxlUGF0aCBvZiB0cmFuc2Zvcm1lZEZpbGVQYXRocykge1xuICAgICAgdGhpcy5yZXZlcnRGaWxlQW5kQmFja3VwKGZpbGVQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd3JpdGVGaWxlQW5kQmFja3VwKGZpbGU6IEZpbGVUb1dyaXRlKTogdm9pZCB7XG4gICAgdGhpcy5mcy5lbnN1cmVEaXIoZGlybmFtZShmaWxlLnBhdGgpKTtcbiAgICBjb25zdCBiYWNrUGF0aCA9IGFic29sdXRlRnJvbShgJHtmaWxlLnBhdGh9JHtOR0NDX0JBQ0tVUF9FWFRFTlNJT059YCk7XG4gICAgaWYgKHRoaXMuZnMuZXhpc3RzKGJhY2tQYXRoKSkge1xuICAgICAgaWYgKHRoaXMuZXJyb3JPbkZhaWxlZEVudHJ5UG9pbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRyaWVkIHRvIG92ZXJ3cml0ZSAke2JhY2tQYXRofSB3aXRoIGFuIG5nY2MgYmFjayB1cCBmaWxlLCB3aGljaCBpcyBkaXNhbGxvd2VkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXG4gICAgICAgICAgICBgVHJpZWQgdG8gd3JpdGUgJHtcbiAgICAgICAgICAgICAgICBiYWNrUGF0aH0gd2l0aCBhbiBuZ2NjIGJhY2sgdXAgZmlsZSBidXQgaXQgYWxyZWFkeSBleGlzdHMgc28gbm90IHdyaXRpbmcsIG5vciBiYWNraW5nIHVwLCAke1xuICAgICAgICAgICAgICAgIGZpbGUucGF0aH0uXFxuYCArXG4gICAgICAgICAgICBgVGhpcyBlcnJvciBtYXkgYmUgYmVjYXVzZSB0d28gb3IgbW9yZSBlbnRyeS1wb2ludHMgb3ZlcmxhcCBhbmQgbmdjYyBoYXMgYmVlbiBhc2tlZCB0byBwcm9jZXNzIHNvbWUgZmlsZXMgbW9yZSB0aGFuIG9uY2UuXFxuYCArXG4gICAgICAgICAgICBgWW91IHNob3VsZCBjaGVjayBvdGhlciBlbnRyeS1wb2ludHMgaW4gdGhpcyBwYWNrYWdlIGFuZCBzZXQgdXAgYSBjb25maWcgdG8gaWdub3JlIGFueSB0aGF0IHlvdSBhcmUgbm90IHVzaW5nLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mcy5leGlzdHMoZmlsZS5wYXRoKSkge1xuICAgICAgICB0aGlzLmZzLm1vdmVGaWxlKGZpbGUucGF0aCwgYmFja1BhdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mcy53cml0ZUZpbGUoZmlsZS5wYXRoLCBmaWxlLmNvbnRlbnRzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmV2ZXJ0RmlsZUFuZEJhY2t1cChmaWxlUGF0aDogQWJzb2x1dGVGc1BhdGgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mcy5leGlzdHMoZmlsZVBhdGgpKSB7XG4gICAgICB0aGlzLmZzLnJlbW92ZUZpbGUoZmlsZVBhdGgpO1xuXG4gICAgICBjb25zdCBiYWNrUGF0aCA9IGFic29sdXRlRnJvbShgJHtmaWxlUGF0aH0ke05HQ0NfQkFDS1VQX0VYVEVOU0lPTn1gKTtcbiAgICAgIGlmICh0aGlzLmZzLmV4aXN0cyhiYWNrUGF0aCkpIHtcbiAgICAgICAgdGhpcy5mcy5tb3ZlRmlsZShiYWNrUGF0aCwgZmlsZVBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19