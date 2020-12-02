"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('jsonp', function (global, Zone, api) {
    var noop = function () { };
    // because jsonp is not a standard api, there are a lot of
    // implementations, so zone.js just provide a helper util to
    // patch the jsonp send and onSuccess/onError callback
    // the options is an object which contains
    // - jsonp, the jsonp object which hold the send function
    // - sendFuncName, the name of the send function
    // - successFuncName, success func name
    // - failedFuncName, failed func name
    Zone[Zone.__symbol__('jsonp')] = function patchJsonp(options) {
        if (!options || !options.jsonp || !options.sendFuncName) {
            return;
        }
        var noop = function () { };
        [options.successFuncName, options.failedFuncName].forEach(function (methodName) {
            if (!methodName) {
                return;
            }
            var oriFunc = global[methodName];
            if (oriFunc) {
                api.patchMethod(global, methodName, function (delegate) { return function (self, args) {
                    var task = global[api.symbol('jsonTask')];
                    if (task) {
                        task.callback = delegate;
                        return task.invoke.apply(self, args);
                    }
                    else {
                        return delegate.apply(self, args);
                    }
                }; });
            }
            else {
                Object.defineProperty(global, methodName, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        return function () {
                            var task = global[api.symbol('jsonpTask')];
                            var target = this ? this : global;
                            var delegate = global[api.symbol("jsonp" + methodName + "callback")];
                            if (task) {
                                if (delegate) {
                                    task.callback = delegate;
                                }
                                global[api.symbol('jsonpTask')] = undefined;
                                return task.invoke.apply(this, arguments);
                            }
                            else {
                                if (delegate) {
                                    return delegate.apply(this, arguments);
                                }
                            }
                            return null;
                        };
                    },
                    set: function (callback) {
                        this[api.symbol("jsonp" + methodName + "callback")] = callback;
                    }
                });
            }
        });
        api.patchMethod(options.jsonp, options.sendFuncName, function (delegate) { return function (self, args) {
            global[api.symbol('jsonpTask')] = Zone.current.scheduleMacroTask('jsonp', noop, {}, function (task) { return delegate.apply(self, args); }, noop);
        }; });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9leHRyYS9qc29ucC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQ3hFLElBQU0sSUFBSSxHQUFHLGNBQVksQ0FBQyxDQUFDO0lBQzNCLDBEQUEwRDtJQUMxRCw0REFBNEQ7SUFDNUQsc0RBQXNEO0lBQ3RELDBDQUEwQztJQUMxQyx5REFBeUQ7SUFDekQsZ0RBQWdEO0lBQ2hELHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDcEMsSUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLFVBQVUsQ0FBQyxPQUFZO1FBQ3hFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN2RCxPQUFPO1NBQ1I7UUFDRCxJQUFNLElBQUksR0FBRyxjQUFZLENBQUMsQ0FBQztRQUUzQixDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDbEUsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixPQUFPO2FBQ1I7WUFFRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFVBQUMsSUFBUyxFQUFFLElBQVc7b0JBQ2pGLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksSUFBSSxFQUFFO3dCQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO3dCQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDdEM7eUJBQU07d0JBQ0wsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbkM7Z0JBQ0gsQ0FBQyxFQVIyRCxDQVEzRCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUU7b0JBQ3hDLFlBQVksRUFBRSxJQUFJO29CQUNsQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsR0FBRyxFQUFFO3dCQUNILE9BQU87NEJBQ0wsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDN0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFDcEMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBUSxVQUFVLGFBQVUsQ0FBQyxDQUFDLENBQUM7NEJBRWxFLElBQUksSUFBSSxFQUFFO2dDQUNSLElBQUksUUFBUSxFQUFFO29DQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2lDQUMxQjtnQ0FDRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQ0FDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7NkJBQzNDO2lDQUFNO2dDQUNMLElBQUksUUFBUSxFQUFFO29DQUNaLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7aUNBQ3hDOzZCQUNGOzRCQUNELE9BQU8sSUFBSSxDQUFDO3dCQUNkLENBQUMsQ0FBQztvQkFDSixDQUFDO29CQUNELEdBQUcsRUFBRSxVQUFTLFFBQWtCO3dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFRLFVBQVUsYUFBVSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQzVELENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxXQUFXLENBQ1gsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFVBQUMsSUFBUyxFQUFFLElBQVc7WUFDbEYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUM1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFDLElBQVUsSUFBTyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsRUFINEQsQ0FHNUQsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnanNvbnAnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlLCBhcGk6IF9ab25lUHJpdmF0ZSkgPT4ge1xuICBjb25zdCBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgLy8gYmVjYXVzZSBqc29ucCBpcyBub3QgYSBzdGFuZGFyZCBhcGksIHRoZXJlIGFyZSBhIGxvdCBvZlxuICAvLyBpbXBsZW1lbnRhdGlvbnMsIHNvIHpvbmUuanMganVzdCBwcm92aWRlIGEgaGVscGVyIHV0aWwgdG9cbiAgLy8gcGF0Y2ggdGhlIGpzb25wIHNlbmQgYW5kIG9uU3VjY2Vzcy9vbkVycm9yIGNhbGxiYWNrXG4gIC8vIHRoZSBvcHRpb25zIGlzIGFuIG9iamVjdCB3aGljaCBjb250YWluc1xuICAvLyAtIGpzb25wLCB0aGUganNvbnAgb2JqZWN0IHdoaWNoIGhvbGQgdGhlIHNlbmQgZnVuY3Rpb25cbiAgLy8gLSBzZW5kRnVuY05hbWUsIHRoZSBuYW1lIG9mIHRoZSBzZW5kIGZ1bmN0aW9uXG4gIC8vIC0gc3VjY2Vzc0Z1bmNOYW1lLCBzdWNjZXNzIGZ1bmMgbmFtZVxuICAvLyAtIGZhaWxlZEZ1bmNOYW1lLCBmYWlsZWQgZnVuYyBuYW1lXG4gIChab25lIGFzIGFueSlbWm9uZS5fX3N5bWJvbF9fKCdqc29ucCcpXSA9IGZ1bmN0aW9uIHBhdGNoSnNvbnAob3B0aW9uczogYW55KSB7XG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmpzb25wIHx8ICFvcHRpb25zLnNlbmRGdW5jTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIFtvcHRpb25zLnN1Y2Nlc3NGdW5jTmFtZSwgb3B0aW9ucy5mYWlsZWRGdW5jTmFtZV0uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICAgIGlmICghbWV0aG9kTmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9yaUZ1bmMgPSBnbG9iYWxbbWV0aG9kTmFtZV07XG4gICAgICBpZiAob3JpRnVuYykge1xuICAgICAgICBhcGkucGF0Y2hNZXRob2QoZ2xvYmFsLCBtZXRob2ROYW1lLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBnbG9iYWxbYXBpLnN5bWJvbCgnanNvblRhc2snKV07XG4gICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgIHRhc2suY2FsbGJhY2sgPSBkZWxlZ2F0ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrLmludm9rZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBtZXRob2ROYW1lLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBnbG9iYWxbYXBpLnN5bWJvbCgnanNvbnBUYXNrJyldO1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzID8gdGhpcyA6IGdsb2JhbDtcbiAgICAgICAgICAgICAgY29uc3QgZGVsZWdhdGUgPSBnbG9iYWxbYXBpLnN5bWJvbChganNvbnAke21ldGhvZE5hbWV9Y2FsbGJhY2tgKV07XG5cbiAgICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2sgPSBkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2xvYmFsW2FwaS5zeW1ib2woJ2pzb25wVGFzaycpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpc1thcGkuc3ltYm9sKGBqc29ucCR7bWV0aG9kTmFtZX1jYWxsYmFja2ApXSA9IGNhbGxiYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhcGkucGF0Y2hNZXRob2QoXG4gICAgICAgIG9wdGlvbnMuanNvbnAsIG9wdGlvbnMuc2VuZEZ1bmNOYW1lLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGdsb2JhbFthcGkuc3ltYm9sKCdqc29ucFRhc2snKV0gPSBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soXG4gICAgICAgICAgICAgICdqc29ucCcsIG5vb3AsIHt9LCAodGFzazogVGFzaykgPT4geyByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7IH0sIG5vb3ApO1xuICAgICAgICB9KTtcbiAgfTtcbn0pO1xuIl19