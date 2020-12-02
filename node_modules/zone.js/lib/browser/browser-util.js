(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/browser/browser-util", ["require", "exports"], factory);
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
    function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        var nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    var source = targetName + "." + method + "::" + callback;
                    var prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }
    exports.patchCallbacks = patchCallbacks;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci9icm93c2VyLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCxTQUFnQixjQUFjLENBQzFCLEdBQWlCLEVBQUUsTUFBVyxFQUFFLFVBQWtCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1FBQ3pGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBUyxJQUFTLEVBQUUsSUFBUyxFQUFFLE9BQWE7WUFDM0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDMUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFTLFFBQVE7b0JBQ2pDLElBQU0sTUFBTSxHQUFNLFVBQVUsU0FBSSxNQUFNLE9BQUksR0FBRyxRQUFRLENBQUM7b0JBQ3RELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDdEMsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLDhCQUE4QixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDM0UsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRTs0QkFDbEMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDckUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQUM3RDs2QkFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQzVFO3FCQUNGO3lCQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUM5QixTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDNUU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUE5QkQsd0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKFxuICAgIGFwaTogX1pvbmVQcml2YXRlLCB0YXJnZXQ6IGFueSwgdGFyZ2V0TmFtZTogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgY2FsbGJhY2tzOiBzdHJpbmdbXSkge1xuICBjb25zdCBzeW1ib2wgPSBab25lLl9fc3ltYm9sX18obWV0aG9kKTtcbiAgaWYgKHRhcmdldFtzeW1ib2xdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5hdGl2ZURlbGVnYXRlID0gdGFyZ2V0W3N5bWJvbF0gPSB0YXJnZXRbbWV0aG9kXTtcbiAgdGFyZ2V0W21ldGhvZF0gPSBmdW5jdGlvbihuYW1lOiBhbnksIG9wdHM6IGFueSwgb3B0aW9ucz86IGFueSkge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBgJHt0YXJnZXROYW1lfS4ke21ldGhvZH06OmAgKyBjYWxsYmFjaztcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gb3B0cy5wcm90b3R5cGU7XG4gICAgICAgIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKGRlc2NyaXB0b3IudmFsdWUsIHNvdXJjZSk7XG4gICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXRpdmVEZWxlZ2F0ZS5jYWxsKHRhcmdldCwgbmFtZSwgb3B0cywgb3B0aW9ucyk7XG4gIH07XG5cbiAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0YXJnZXRbbWV0aG9kXSwgbmF0aXZlRGVsZWdhdGUpO1xufVxuIl19