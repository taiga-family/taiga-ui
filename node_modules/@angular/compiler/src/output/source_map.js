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
        define("@angular/compiler/src/output/source_map", ["require", "exports", "@angular/compiler/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("@angular/compiler/src/util");
    // https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit
    var VERSION = 3;
    var JS_B64_PREFIX = '# sourceMappingURL=data:application/json;base64,';
    var SourceMapGenerator = /** @class */ (function () {
        function SourceMapGenerator(file) {
            if (file === void 0) { file = null; }
            this.file = file;
            this.sourcesContent = new Map();
            this.lines = [];
            this.lastCol0 = 0;
            this.hasMappings = false;
        }
        // The content is `null` when the content is expected to be loaded using the URL
        SourceMapGenerator.prototype.addSource = function (url, content) {
            if (content === void 0) { content = null; }
            if (!this.sourcesContent.has(url)) {
                this.sourcesContent.set(url, content);
            }
            return this;
        };
        SourceMapGenerator.prototype.addLine = function () {
            this.lines.push([]);
            this.lastCol0 = 0;
            return this;
        };
        SourceMapGenerator.prototype.addMapping = function (col0, sourceUrl, sourceLine0, sourceCol0) {
            if (!this.currentLine) {
                throw new Error("A line must be added before mappings can be added");
            }
            if (sourceUrl != null && !this.sourcesContent.has(sourceUrl)) {
                throw new Error("Unknown source file \"" + sourceUrl + "\"");
            }
            if (col0 == null) {
                throw new Error("The column in the generated code must be provided");
            }
            if (col0 < this.lastCol0) {
                throw new Error("Mapping should be added in output order");
            }
            if (sourceUrl && (sourceLine0 == null || sourceCol0 == null)) {
                throw new Error("The source location must be provided when a source url is provided");
            }
            this.hasMappings = true;
            this.lastCol0 = col0;
            this.currentLine.push({ col0: col0, sourceUrl: sourceUrl, sourceLine0: sourceLine0, sourceCol0: sourceCol0 });
            return this;
        };
        Object.defineProperty(SourceMapGenerator.prototype, "currentLine", {
            /**
             * @internal strip this from published d.ts files due to
             * https://github.com/microsoft/TypeScript/issues/36216
             */
            get: function () {
                return this.lines.slice(-1)[0];
            },
            enumerable: true,
            configurable: true
        });
        SourceMapGenerator.prototype.toJSON = function () {
            var _this = this;
            if (!this.hasMappings) {
                return null;
            }
            var sourcesIndex = new Map();
            var sources = [];
            var sourcesContent = [];
            Array.from(this.sourcesContent.keys()).forEach(function (url, i) {
                sourcesIndex.set(url, i);
                sources.push(url);
                sourcesContent.push(_this.sourcesContent.get(url) || null);
            });
            var mappings = '';
            var lastCol0 = 0;
            var lastSourceIndex = 0;
            var lastSourceLine0 = 0;
            var lastSourceCol0 = 0;
            this.lines.forEach(function (segments) {
                lastCol0 = 0;
                mappings += segments
                    .map(function (segment) {
                    // zero-based starting column of the line in the generated code
                    var segAsStr = toBase64VLQ(segment.col0 - lastCol0);
                    lastCol0 = segment.col0;
                    if (segment.sourceUrl != null) {
                        // zero-based index into the “sources” list
                        segAsStr +=
                            toBase64VLQ(sourcesIndex.get(segment.sourceUrl) - lastSourceIndex);
                        lastSourceIndex = sourcesIndex.get(segment.sourceUrl);
                        // the zero-based starting line in the original source
                        segAsStr += toBase64VLQ(segment.sourceLine0 - lastSourceLine0);
                        lastSourceLine0 = segment.sourceLine0;
                        // the zero-based starting column in the original source
                        segAsStr += toBase64VLQ(segment.sourceCol0 - lastSourceCol0);
                        lastSourceCol0 = segment.sourceCol0;
                    }
                    return segAsStr;
                })
                    .join(',');
                mappings += ';';
            });
            mappings = mappings.slice(0, -1);
            return {
                'file': this.file || '',
                'version': VERSION,
                'sourceRoot': '',
                'sources': sources,
                'sourcesContent': sourcesContent,
                'mappings': mappings,
            };
        };
        SourceMapGenerator.prototype.toJsComment = function () {
            return this.hasMappings ? '//' + JS_B64_PREFIX + toBase64String(JSON.stringify(this, null, 0)) :
                '';
        };
        return SourceMapGenerator;
    }());
    exports.SourceMapGenerator = SourceMapGenerator;
    function toBase64String(value) {
        var b64 = '';
        value = util_1.utf8Encode(value);
        for (var i = 0; i < value.length;) {
            var i1 = value.charCodeAt(i++);
            var i2 = value.charCodeAt(i++);
            var i3 = value.charCodeAt(i++);
            b64 += toBase64Digit(i1 >> 2);
            b64 += toBase64Digit(((i1 & 3) << 4) | (isNaN(i2) ? 0 : i2 >> 4));
            b64 += isNaN(i2) ? '=' : toBase64Digit(((i2 & 15) << 2) | (i3 >> 6));
            b64 += isNaN(i2) || isNaN(i3) ? '=' : toBase64Digit(i3 & 63);
        }
        return b64;
    }
    exports.toBase64String = toBase64String;
    function toBase64VLQ(value) {
        value = value < 0 ? ((-value) << 1) + 1 : value << 1;
        var out = '';
        do {
            var digit = value & 31;
            value = value >> 5;
            if (value > 0) {
                digit = digit | 32;
            }
            out += toBase64Digit(digit);
        } while (value > 0);
        return out;
    }
    var B64_DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    function toBase64Digit(value) {
        if (value < 0 || value >= 64) {
            throw new Error("Can only encode value in the range [0, 63]");
        }
        return B64_DIGITS[value];
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvc291cmNlX21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILG1EQUFtQztJQUVuQyx1RkFBdUY7SUFDdkYsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLElBQU0sYUFBYSxHQUFHLGtEQUFrRCxDQUFDO0lBa0J6RTtRQU1FLDRCQUFvQixJQUF3QjtZQUF4QixxQkFBQSxFQUFBLFdBQXdCO1lBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1lBTHBDLG1CQUFjLEdBQTZCLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckQsVUFBSyxHQUFnQixFQUFFLENBQUM7WUFDeEIsYUFBUSxHQUFXLENBQUMsQ0FBQztZQUNyQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVtQixDQUFDO1FBRWhELGdGQUFnRjtRQUNoRixzQ0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLE9BQTJCO1lBQTNCLHdCQUFBLEVBQUEsY0FBMkI7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDdkM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxvQ0FBTyxHQUFQO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsdUNBQVUsR0FBVixVQUFXLElBQVksRUFBRSxTQUFrQixFQUFFLFdBQW9CLEVBQUUsVUFBbUI7WUFD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QUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBZEQsd0NBY0M7SUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhO1FBQ2hDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFckQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsR0FBRztZQUNELElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDdkIsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3BCO1lBQ0QsR0FBRyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QixRQUFRLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFFcEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBTSxVQUFVLEdBQUcsa0VBQWtFLENBQUM7SUFFdEYsU0FBUyxhQUFhLENBQUMsS0FBYTtRQUNsQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge3V0ZjhFbmNvZGV9IGZyb20gJy4uL3V0aWwnO1xuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXRcbmNvbnN0IFZFUlNJT04gPSAzO1xuXG5jb25zdCBKU19CNjRfUFJFRklYID0gJyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCc7XG5cbnR5cGUgU2VnbWVudCA9IHtcbiAgY29sMDogbnVtYmVyLFxuICBzb3VyY2VVcmw/OiBzdHJpbmcsXG4gIHNvdXJjZUxpbmUwPzogbnVtYmVyLFxuICBzb3VyY2VDb2wwPzogbnVtYmVyLFxufTtcblxuZXhwb3J0IHR5cGUgU291cmNlTWFwID0ge1xuICB2ZXJzaW9uOiBudW1iZXIsXG4gIGZpbGU/OiBzdHJpbmcsXG4gICAgICBzb3VyY2VSb290OiBzdHJpbmcsXG4gICAgICBzb3VyY2VzOiBzdHJpbmdbXSxcbiAgICAgIHNvdXJjZXNDb250ZW50OiAoc3RyaW5nfG51bGwpW10sXG4gICAgICBtYXBwaW5nczogc3RyaW5nLFxufTtcblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hcEdlbmVyYXRvciB7XG4gIHByaXZhdGUgc291cmNlc0NvbnRlbnQ6IE1hcDxzdHJpbmcsIHN0cmluZ3xudWxsPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBsaW5lczogU2VnbWVudFtdW10gPSBbXTtcbiAgcHJpdmF0ZSBsYXN0Q29sMDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBoYXNNYXBwaW5ncyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZTogc3RyaW5nfG51bGwgPSBudWxsKSB7fVxuXG4gIC8vIFRoZSBjb250ZW50IGlzIGBudWxsYCB3aGVuIHRoZSBjb250ZW50IGlzIGV4cGVjdGVkIHRvIGJlIGxvYWRlZCB1c2luZyB0aGUgVVJMXG4gIGFkZFNvdXJjZSh1cmw6IHN0cmluZywgY29udGVudDogc3RyaW5nfG51bGwgPSBudWxsKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50Lmhhcyh1cmwpKSB7XG4gICAgICB0aGlzLnNvdXJjZXNDb250ZW50LnNldCh1cmwsIGNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZExpbmUoKTogdGhpcyB7XG4gICAgdGhpcy5saW5lcy5wdXNoKFtdKTtcbiAgICB0aGlzLmxhc3RDb2wwID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZE1hcHBpbmcoY29sMDogbnVtYmVyLCBzb3VyY2VVcmw/OiBzdHJpbmcsIHNvdXJjZUxpbmUwPzogbnVtYmVyLCBzb3VyY2VDb2wwPzogbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRMaW5lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgbGluZSBtdXN0IGJlIGFkZGVkIGJlZm9yZSBtYXBwaW5ncyBjYW4gYmUgYWRkZWRgKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVVybCAhPSBudWxsICYmICF0aGlzLnNvdXJjZXNDb250ZW50Lmhhcyhzb3VyY2VVcmwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gc291cmNlIGZpbGUgXCIke3NvdXJjZVVybH1cImApO1xuICAgIH1cbiAgICBpZiAoY29sMCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb2x1bW4gaW4gdGhlIGdlbmVyYXRlZCBjb2RlIG11c3QgYmUgcHJvdmlkZWRgKTtcbiAgICB9XG4gICAgaWYgKGNvbDAgPCB0aGlzLmxhc3RDb2wwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hcHBpbmcgc2hvdWxkIGJlIGFkZGVkIGluIG91dHB1dCBvcmRlcmApO1xuICAgIH1cbiAgICBpZiAoc291cmNlVXJsICYmIChzb3VyY2VMaW5lMCA9PSBudWxsIHx8IHNvdXJjZUNvbDAgPT0gbnVsbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHNvdXJjZSBsb2NhdGlvbiBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gYSBzb3VyY2UgdXJsIGlzIHByb3ZpZGVkYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNNYXBwaW5ncyA9IHRydWU7XG4gICAgdGhpcy5sYXN0Q29sMCA9IGNvbDA7XG4gICAgdGhpcy5jdXJyZW50TGluZS5wdXNoKHtjb2wwLCBzb3VyY2VVcmwsIHNvdXJjZUxpbmUwLCBzb3VyY2VDb2wwfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsIHN0cmlwIHRoaXMgZnJvbSBwdWJsaXNoZWQgZC50cyBmaWxlcyBkdWUgdG9cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zNjIxNlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgY3VycmVudExpbmUoKTogU2VnbWVudFtdfG51bGwge1xuICAgIHJldHVybiB0aGlzLmxpbmVzLnNsaWNlKC0xKVswXTtcbiAgfVxuXG4gIHRvSlNPTigpOiBTb3VyY2VNYXB8bnVsbCB7XG4gICAgaWYgKCF0aGlzLmhhc01hcHBpbmdzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VzSW5kZXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGNvbnN0IHNvdXJjZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgc291cmNlc0NvbnRlbnQ6IChzdHJpbmd8bnVsbClbXSA9IFtdO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLnNvdXJjZXNDb250ZW50LmtleXMoKSkuZm9yRWFjaCgodXJsOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgc291cmNlc0luZGV4LnNldCh1cmwsIGkpO1xuICAgICAgc291cmNlcy5wdXNoKHVybCk7XG4gICAgICBzb3VyY2VzQ29udGVudC5wdXNoKHRoaXMuc291cmNlc0NvbnRlbnQuZ2V0KHVybCkgfHwgbnVsbCk7XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwcGluZ3M6IHN0cmluZyA9ICcnO1xuICAgIGxldCBsYXN0Q29sMDogbnVtYmVyID0gMDtcbiAgICBsZXQgbGFzdFNvdXJjZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBsYXN0U291cmNlTGluZTA6IG51bWJlciA9IDA7XG4gICAgbGV0IGxhc3RTb3VyY2VDb2wwOiBudW1iZXIgPSAwO1xuXG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKHNlZ21lbnRzID0+IHtcbiAgICAgIGxhc3RDb2wwID0gMDtcblxuICAgICAgbWFwcGluZ3MgKz0gc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gemVyby1iYXNlZCBzdGFydGluZyBjb2x1bW4gb2YgdGhlIGxpbmUgaW4gdGhlIGdlbmVyYXRlZCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VnQXNTdHIgPSB0b0Jhc2U2NFZMUShzZWdtZW50LmNvbDAgLSBsYXN0Q29sMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q29sMCA9IHNlZ21lbnQuY29sMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQuc291cmNlVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gemVyby1iYXNlZCBpbmRleCBpbnRvIHRoZSDigJxzb3VyY2Vz4oCdIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnQXNTdHIgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQmFzZTY0VkxRKHNvdXJjZXNJbmRleC5nZXQoc2VnbWVudC5zb3VyY2VVcmwpISAtIGxhc3RTb3VyY2VJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTb3VyY2VJbmRleCA9IHNvdXJjZXNJbmRleC5nZXQoc2VnbWVudC5zb3VyY2VVcmwpITtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHplcm8tYmFzZWQgc3RhcnRpbmcgbGluZSBpbiB0aGUgb3JpZ2luYWwgc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ0FzU3RyICs9IHRvQmFzZTY0VkxRKHNlZ21lbnQuc291cmNlTGluZTAhIC0gbGFzdFNvdXJjZUxpbmUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNvdXJjZUxpbmUwID0gc2VnbWVudC5zb3VyY2VMaW5lMCE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB6ZXJvLWJhc2VkIHN0YXJ0aW5nIGNvbHVtbiBpbiB0aGUgb3JpZ2luYWwgc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ0FzU3RyICs9IHRvQmFzZTY0VkxRKHNlZ21lbnQuc291cmNlQ29sMCEgLSBsYXN0U291cmNlQ29sMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTb3VyY2VDb2wwID0gc2VnbWVudC5zb3VyY2VDb2wwITtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlZ0FzU3RyO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywnKTtcbiAgICAgIG1hcHBpbmdzICs9ICc7JztcbiAgICB9KTtcblxuICAgIG1hcHBpbmdzID0gbWFwcGluZ3Muc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmaWxlJzogdGhpcy5maWxlIHx8ICcnLFxuICAgICAgJ3ZlcnNpb24nOiBWRVJTSU9OLFxuICAgICAgJ3NvdXJjZVJvb3QnOiAnJyxcbiAgICAgICdzb3VyY2VzJzogc291cmNlcyxcbiAgICAgICdzb3VyY2VzQ29udGVudCc6IHNvdXJjZXNDb250ZW50LFxuICAgICAgJ21hcHBpbmdzJzogbWFwcGluZ3MsXG4gICAgfTtcbiAgfVxuXG4gIHRvSnNDb21tZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTWFwcGluZ3MgPyAnLy8nICsgSlNfQjY0X1BSRUZJWCArIHRvQmFzZTY0U3RyaW5nKEpTT04uc3RyaW5naWZ5KHRoaXMsIG51bGwsIDApKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNlNjRTdHJpbmcodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBiNjQgPSAnJztcbiAgdmFsdWUgPSB1dGY4RW5jb2RlKHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7KSB7XG4gICAgY29uc3QgaTEgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgY29uc3QgaTIgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgY29uc3QgaTMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgYjY0ICs9IHRvQmFzZTY0RGlnaXQoaTEgPj4gMik7XG4gICAgYjY0ICs9IHRvQmFzZTY0RGlnaXQoKChpMSAmIDMpIDw8IDQpIHwgKGlzTmFOKGkyKSA/IDAgOiBpMiA+PiA0KSk7XG4gICAgYjY0ICs9IGlzTmFOKGkyKSA/ICc9JyA6IHRvQmFzZTY0RGlnaXQoKChpMiAmIDE1KSA8PCAyKSB8IChpMyA+PiA2KSk7XG4gICAgYjY0ICs9IGlzTmFOKGkyKSB8fCBpc05hTihpMykgPyAnPScgOiB0b0Jhc2U2NERpZ2l0KGkzICYgNjMpO1xuICB9XG5cbiAgcmV0dXJuIGI2NDtcbn1cblxuZnVuY3Rpb24gdG9CYXNlNjRWTFEodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIHZhbHVlID0gdmFsdWUgPCAwID8gKCgtdmFsdWUpIDw8IDEpICsgMSA6IHZhbHVlIDw8IDE7XG5cbiAgbGV0IG91dCA9ICcnO1xuICBkbyB7XG4gICAgbGV0IGRpZ2l0ID0gdmFsdWUgJiAzMTtcbiAgICB2YWx1ZSA9IHZhbHVlID4+IDU7XG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgZGlnaXQgPSBkaWdpdCB8IDMyO1xuICAgIH1cbiAgICBvdXQgKz0gdG9CYXNlNjREaWdpdChkaWdpdCk7XG4gIH0gd2hpbGUgKHZhbHVlID4gMCk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuY29uc3QgQjY0X0RJR0lUUyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuZnVuY3Rpb24gdG9CYXNlNjREaWdpdCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+PSA2NCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG9ubHkgZW5jb2RlIHZhbHVlIGluIHRoZSByYW5nZSBbMCwgNjNdYCk7XG4gIH1cblxuICByZXR1cm4gQjY0X0RJR0lUU1t2YWx1ZV07XG59XG4iXX0=