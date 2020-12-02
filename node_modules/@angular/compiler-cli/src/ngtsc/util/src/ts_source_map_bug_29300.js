(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/util/src/ts_source_map_bug_29300", ["require", "exports", "typescript"], factory);
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
    var ts = require("typescript");
    var _tsSourceMapBug29300Fixed;
    /**
     * Test the current version of TypeScript to see if it has fixed the external SourceMap
     * file bug: https://github.com/Microsoft/TypeScript/issues/29300.
     *
     * The bug is fixed in TS 3.3+ but this check avoid us having to rely upon the version number,
     * and allows us to gracefully fail if the TS version still has the bug.
     *
     * We check for the bug by compiling a very small program `a;` and transforming it to `b;`,
     * where we map the new `b` identifier to an external source file, which has different lines to
     * the original source file.  If the bug is fixed then the output SourceMap should contain
     * mappings that correspond ot the correct line/col pairs for this transformed node.
     *
     * @returns true if the bug is fixed.
     */
    function tsSourceMapBug29300Fixed() {
        if (_tsSourceMapBug29300Fixed === undefined) {
            var writtenFiles_1 = {};
            var sourceFile_1 = ts.createSourceFile('test.ts', 'a;', ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS);
            var host = {
                getSourceFile: function () {
                    return sourceFile_1;
                },
                fileExists: function () {
                    return true;
                },
                readFile: function () {
                    return '';
                },
                writeFile: function (fileName, data) {
                    writtenFiles_1[fileName] = data;
                },
                getDefaultLibFileName: function () {
                    return '';
                },
                getCurrentDirectory: function () {
                    return '';
                },
                getDirectories: function () {
                    return [];
                },
                getCanonicalFileName: function () {
                    return '';
                },
                useCaseSensitiveFileNames: function () {
                    return true;
                },
                getNewLine: function () {
                    return '\n';
                },
            };
            var transform = function (context) {
                return function (node) { return ts.visitNode(node, visitor); };
                function visitor(node) {
                    if (ts.isIdentifier(node) && node.text === 'a') {
                        var newNode = ts.createIdentifier('b');
                        ts.setSourceMapRange(newNode, {
                            pos: 16,
                            end: 16,
                            source: ts.createSourceMapSource('test.html', 'abc\ndef\nghi\njkl\nmno\npqr')
                        });
                        return newNode;
                    }
                    return ts.visitEachChild(node, visitor, context);
                }
            };
            var program = ts.createProgram(['test.ts'], { sourceMap: true }, host);
            program.emit(sourceFile_1, undefined, undefined, undefined, { after: [transform] });
            // The first two mappings in the source map should look like:
            // [0,1,4,0] col 0 => source file 1, row 4, column 0)
            // [1,0,0,0] col 1 => source file 1, row 4, column 0)
            _tsSourceMapBug29300Fixed = /ACIA,CAAA/.test(writtenFiles_1['test.js.map']);
        }
        return _tsSourceMapBug29300Fixed;
    }
    exports.tsSourceMapBug29300Fixed = tsSourceMapBug29300Fixed;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfc291cmNlX21hcF9idWdfMjkzMDAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3V0aWwvc3JjL3RzX3NvdXJjZV9tYXBfYnVnXzI5MzAwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBRWpDLElBQUkseUJBQTRDLENBQUM7SUFFakQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILFNBQWdCLHdCQUF3QjtRQUN0QyxJQUFJLHlCQUF5QixLQUFLLFNBQVMsRUFBRTtZQUMzQyxJQUFJLGNBQVksR0FBaUMsRUFBRSxDQUFDO1lBQ3BELElBQU0sWUFBVSxHQUNaLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLElBQU0sSUFBSSxHQUFHO2dCQUNYLGFBQWEsRUFBYjtvQkFFTSxPQUFPLFlBQVUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDTCxVQUFVLEVBQVY7b0JBQ0UsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFDRCxRQUFRLEVBQVI7b0JBRU0sT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztnQkFDTCxTQUFTLEVBQVQsVUFBVSxRQUFnQixFQUFFLElBQVk7b0JBQ3RDLGNBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QscUJBQXFCLEVBQXJCO29CQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0QsbUJBQW1CLEVBQW5CO29CQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0QsY0FBYyxFQUFkO29CQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0Qsb0JBQW9CLEVBQXBCO29CQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0QseUJBQXlCLEVBQXpCO29CQUNFLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBQ0QsVUFBVSxFQUFWO29CQUNFLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7YUFDRixDQUFDO1lBRUYsSUFBTSxTQUFTLEdBQUcsVUFBQyxPQUFpQztnQkFDbEQsT0FBTyxVQUFDLElBQW1CLElBQUssT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztnQkFDNUQsU0FBUyxPQUFPLENBQUMsSUFBYTtvQkFDNUIsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO3dCQUM5QyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7NEJBQzVCLEdBQUcsRUFBRSxFQUFFOzRCQUNQLEdBQUcsRUFBRSxFQUFFOzRCQUNQLE1BQU0sRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLDhCQUE4QixDQUFDO3lCQUM5RSxDQUFDLENBQUM7d0JBQ0gsT0FBTyxPQUFPLENBQUM7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLDZEQUE2RDtZQUM3RCxxREFBcUQ7WUFDckQscURBQXFEO1lBQ3JELHlCQUF5QixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLHlCQUF5QixDQUFDO0lBQ25DLENBQUM7SUFoRUQsNERBZ0VDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmxldCBfdHNTb3VyY2VNYXBCdWcyOTMwMEZpeGVkOiBib29sZWFufHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUZXN0IHRoZSBjdXJyZW50IHZlcnNpb24gb2YgVHlwZVNjcmlwdCB0byBzZWUgaWYgaXQgaGFzIGZpeGVkIHRoZSBleHRlcm5hbCBTb3VyY2VNYXBcbiAqIGZpbGUgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI5MzAwLlxuICpcbiAqIFRoZSBidWcgaXMgZml4ZWQgaW4gVFMgMy4zKyBidXQgdGhpcyBjaGVjayBhdm9pZCB1cyBoYXZpbmcgdG8gcmVseSB1cG9uIHRoZSB2ZXJzaW9uIG51bWJlcixcbiAqIGFuZCBhbGxvd3MgdXMgdG8gZ3JhY2VmdWxseSBmYWlsIGlmIHRoZSBUUyB2ZXJzaW9uIHN0aWxsIGhhcyB0aGUgYnVnLlxuICpcbiAqIFdlIGNoZWNrIGZvciB0aGUgYnVnIGJ5IGNvbXBpbGluZyBhIHZlcnkgc21hbGwgcHJvZ3JhbSBgYTtgIGFuZCB0cmFuc2Zvcm1pbmcgaXQgdG8gYGI7YCxcbiAqIHdoZXJlIHdlIG1hcCB0aGUgbmV3IGBiYCBpZGVudGlmaWVyIHRvIGFuIGV4dGVybmFsIHNvdXJjZSBmaWxlLCB3aGljaCBoYXMgZGlmZmVyZW50IGxpbmVzIHRvXG4gKiB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGUuICBJZiB0aGUgYnVnIGlzIGZpeGVkIHRoZW4gdGhlIG91dHB1dCBTb3VyY2VNYXAgc2hvdWxkIGNvbnRhaW5cbiAqIG1hcHBpbmdzIHRoYXQgY29ycmVzcG9uZCBvdCB0aGUgY29ycmVjdCBsaW5lL2NvbCBwYWlycyBmb3IgdGhpcyB0cmFuc2Zvcm1lZCBub2RlLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGJ1ZyBpcyBmaXhlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRzU291cmNlTWFwQnVnMjkzMDBGaXhlZCgpIHtcbiAgaWYgKF90c1NvdXJjZU1hcEJ1ZzI5MzAwRml4ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIGxldCB3cml0dGVuRmlsZXM6IHtbZmlsZW5hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBjb25zdCBzb3VyY2VGaWxlID1cbiAgICAgICAgdHMuY3JlYXRlU291cmNlRmlsZSgndGVzdC50cycsICdhOycsIHRzLlNjcmlwdFRhcmdldC5FUzIwMTUsIHRydWUsIHRzLlNjcmlwdEtpbmQuVFMpO1xuICAgIGNvbnN0IGhvc3QgPSB7XG4gICAgICBnZXRTb3VyY2VGaWxlKCk6IHRzLlNvdXJjZUZpbGUgfFxuICAgICAgICAgIHVuZGVmaW5lZCB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlRmlsZTtcbiAgICAgICAgICB9LFxuICAgICAgZmlsZUV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgcmVhZEZpbGUoKTogc3RyaW5nIHxcbiAgICAgICAgICB1bmRlZmluZWQge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH0sXG4gICAgICB3cml0ZUZpbGUoZmlsZU5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHdyaXR0ZW5GaWxlc1tmaWxlTmFtZV0gPSBkYXRhO1xuICAgICAgfSxcbiAgICAgIGdldERlZmF1bHRMaWJGaWxlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9LFxuICAgICAgZ2V0Q3VycmVudERpcmVjdG9yeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9LFxuICAgICAgZ2V0RGlyZWN0b3JpZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9LFxuICAgICAgZ2V0Q2Fub25pY2FsRmlsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSxcbiAgICAgIHVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGdldE5ld0xpbmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdcXG4nO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gKGNvbnRleHQ6IHRzLlRyYW5zZm9ybWF0aW9uQ29udGV4dCkgPT4ge1xuICAgICAgcmV0dXJuIChub2RlOiB0cy5Tb3VyY2VGaWxlKSA9PiB0cy52aXNpdE5vZGUobm9kZSwgdmlzaXRvcik7XG4gICAgICBmdW5jdGlvbiB2aXNpdG9yKG5vZGU6IHRzLk5vZGUpOiB0cy5Ob2RlIHtcbiAgICAgICAgaWYgKHRzLmlzSWRlbnRpZmllcihub2RlKSAmJiBub2RlLnRleHQgPT09ICdhJykge1xuICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSB0cy5jcmVhdGVJZGVudGlmaWVyKCdiJyk7XG4gICAgICAgICAgdHMuc2V0U291cmNlTWFwUmFuZ2UobmV3Tm9kZSwge1xuICAgICAgICAgICAgcG9zOiAxNixcbiAgICAgICAgICAgIGVuZDogMTYsXG4gICAgICAgICAgICBzb3VyY2U6IHRzLmNyZWF0ZVNvdXJjZU1hcFNvdXJjZSgndGVzdC5odG1sJywgJ2FiY1xcbmRlZlxcbmdoaVxcbmprbFxcbm1ub1xcbnBxcicpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRzLnZpc2l0RWFjaENoaWxkKG5vZGUsIHZpc2l0b3IsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcm9ncmFtID0gdHMuY3JlYXRlUHJvZ3JhbShbJ3Rlc3QudHMnXSwge3NvdXJjZU1hcDogdHJ1ZX0sIGhvc3QpO1xuICAgIHByb2dyYW0uZW1pdChzb3VyY2VGaWxlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7YWZ0ZXI6IFt0cmFuc2Zvcm1dfSk7XG4gICAgLy8gVGhlIGZpcnN0IHR3byBtYXBwaW5ncyBpbiB0aGUgc291cmNlIG1hcCBzaG91bGQgbG9vayBsaWtlOlxuICAgIC8vIFswLDEsNCwwXSBjb2wgMCA9PiBzb3VyY2UgZmlsZSAxLCByb3cgNCwgY29sdW1uIDApXG4gICAgLy8gWzEsMCwwLDBdIGNvbCAxID0+IHNvdXJjZSBmaWxlIDEsIHJvdyA0LCBjb2x1bW4gMClcbiAgICBfdHNTb3VyY2VNYXBCdWcyOTMwMEZpeGVkID0gL0FDSUEsQ0FBQS8udGVzdCh3cml0dGVuRmlsZXNbJ3Rlc3QuanMubWFwJ10pO1xuICB9XG4gIHJldHVybiBfdHNTb3VyY2VNYXBCdWcyOTMwMEZpeGVkO1xufSJdfQ==