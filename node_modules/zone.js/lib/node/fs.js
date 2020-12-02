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
        define("zone.js/lib/node/fs", ["require", "exports", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("zone.js/lib/common/utils");
    Zone.__load_patch('fs', function () {
        var fs;
        try {
            fs = require('fs');
        }
        catch (err) {
        }
        // watch, watchFile, unwatchFile has been patched
        // because EventEmitter has been patched
        var TO_PATCH_MACROTASK_METHODS = [
            'access', 'appendFile', 'chmod', 'chown', 'close', 'exists', 'fchmod',
            'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchmod',
            'lchown', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'read',
            'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rmdir', 'stat',
            'symlink', 'truncate', 'unlink', 'utimes', 'write', 'writeFile',
        ];
        if (fs) {
            TO_PATCH_MACROTASK_METHODS.filter(function (name) { return !!fs[name] && typeof fs[name] === 'function'; })
                .forEach(function (name) {
                utils_1.patchMacroTask(fs, name, function (self, args) {
                    return {
                        name: 'fs.' + name,
                        args: args,
                        cbIdx: args.length > 0 ? args.length - 1 : -1,
                        target: self
                    };
                });
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9ub2RlL2ZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsa0RBQStDO0lBRS9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO1FBQ3RCLElBQUksRUFBTyxDQUFDO1FBQ1osSUFBSTtZQUNGLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFBQyxPQUFPLEdBQUcsRUFBRTtTQUNiO1FBRUQsaURBQWlEO1FBQ2pELHdDQUF3QztRQUN4QyxJQUFNLDBCQUEwQixHQUFHO1lBQ2pDLFFBQVEsRUFBRyxZQUFZLEVBQUUsT0FBTyxFQUFLLE9BQU8sRUFBSyxPQUFPLEVBQU0sUUFBUSxFQUFLLFFBQVE7WUFDbkYsUUFBUSxFQUFHLFdBQVcsRUFBRyxPQUFPLEVBQUssT0FBTyxFQUFLLFdBQVcsRUFBRSxTQUFTLEVBQUksUUFBUTtZQUNuRixRQUFRLEVBQUcsTUFBTSxFQUFRLE9BQU8sRUFBSyxPQUFPLEVBQUssU0FBUyxFQUFJLE1BQU0sRUFBTyxNQUFNO1lBQ2pGLFNBQVMsRUFBRSxVQUFVLEVBQUksVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUssT0FBTyxFQUFNLE1BQU07WUFDakYsU0FBUyxFQUFFLFVBQVUsRUFBSSxRQUFRLEVBQUksUUFBUSxFQUFJLE9BQU8sRUFBTSxXQUFXO1NBQzFFLENBQUM7UUFFRixJQUFJLEVBQUUsRUFBRTtZQUNOLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUE1QyxDQUE0QyxDQUFDO2lCQUNsRixPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNYLHNCQUFjLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFDLElBQVMsRUFBRSxJQUFXO29CQUM5QyxPQUFPO3dCQUNMLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSTt3QkFDbEIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLEVBQUUsSUFBSTtxQkFDYixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDUjtJQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge3BhdGNoTWFjcm9UYXNrfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnZnMnLCAoKSA9PiB7XG4gIGxldCBmczogYW55O1xuICB0cnkge1xuICAgIGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gIH1cblxuICAvLyB3YXRjaCwgd2F0Y2hGaWxlLCB1bndhdGNoRmlsZSBoYXMgYmVlbiBwYXRjaGVkXG4gIC8vIGJlY2F1c2UgRXZlbnRFbWl0dGVyIGhhcyBiZWVuIHBhdGNoZWRcbiAgY29uc3QgVE9fUEFUQ0hfTUFDUk9UQVNLX01FVEhPRFMgPSBbXG4gICAgJ2FjY2VzcycsICAnYXBwZW5kRmlsZScsICdjaG1vZCcsICAgICdjaG93bicsICAgICdjbG9zZScsICAgICAnZXhpc3RzJywgICAgJ2ZjaG1vZCcsXG4gICAgJ2ZjaG93bicsICAnZmRhdGFzeW5jJywgICdmc3RhdCcsICAgICdmc3luYycsICAgICdmdHJ1bmNhdGUnLCAnZnV0aW1lcycsICAgJ2xjaG1vZCcsXG4gICAgJ2xjaG93bicsICAnbGluaycsICAgICAgICdsc3RhdCcsICAgICdta2RpcicsICAgICdta2R0ZW1wJywgICAnb3BlbicsICAgICAgJ3JlYWQnLFxuICAgICdyZWFkZGlyJywgJ3JlYWRGaWxlJywgICAncmVhZGxpbmsnLCAncmVhbHBhdGgnLCAncmVuYW1lJywgICAgJ3JtZGlyJywgICAgICdzdGF0JyxcbiAgICAnc3ltbGluaycsICd0cnVuY2F0ZScsICAgJ3VubGluaycsICAgJ3V0aW1lcycsICAgJ3dyaXRlJywgICAgICd3cml0ZUZpbGUnLFxuICBdO1xuXG4gIGlmIChmcykge1xuICAgIFRPX1BBVENIX01BQ1JPVEFTS19NRVRIT0RTLmZpbHRlcihuYW1lID0+ICEhZnNbbmFtZV0gJiYgdHlwZW9mIGZzW25hbWVdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICBwYXRjaE1hY3JvVGFzayhmcywgbmFtZSwgKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdmcy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgICAgY2JJZHg6IGFyZ3MubGVuZ3RoID4gMCA/IGFyZ3MubGVuZ3RoIC0gMSA6IC0xLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHNlbGZcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG59KTtcbiJdfQ==