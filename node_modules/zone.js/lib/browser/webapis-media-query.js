"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('mediaQuery', function (global, Zone, api) {
    function patchAddListener(proto) {
        api.patchMethod(proto, 'addListener', function (delegate) { return function (self, args) {
            var callback = args.length > 0 ? args[0] : null;
            if (typeof callback === 'function') {
                var wrapperedCallback = Zone.current.wrap(callback, 'MediaQuery');
                callback[api.symbol('mediaQueryCallback')] = wrapperedCallback;
                return delegate.call(self, wrapperedCallback);
            }
            else {
                return delegate.apply(self, args);
            }
        }; });
    }
    function patchRemoveListener(proto) {
        api.patchMethod(proto, 'removeListener', function (delegate) { return function (self, args) {
            var callback = args.length > 0 ? args[0] : null;
            if (typeof callback === 'function') {
                var wrapperedCallback = callback[api.symbol('mediaQueryCallback')];
                if (wrapperedCallback) {
                    return delegate.call(self, wrapperedCallback);
                }
                else {
                    return delegate.apply(self, args);
                }
            }
            else {
                return delegate.apply(self, args);
            }
        }; });
    }
    if (global['MediaQueryList']) {
        var proto = global['MediaQueryList'].prototype;
        patchAddListener(proto);
        patchRemoveListener(proto);
    }
    else if (global['matchMedia']) {
        api.patchMethod(global, 'matchMedia', function (delegate) { return function (self, args) {
            var mql = delegate.apply(self, args);
            if (mql) {
                // try to patch MediaQueryList.prototype
                var proto = Object.getPrototypeOf(mql);
                if (proto && proto['addListener']) {
                    // try to patch proto, don't need to worry about patch
                    // multiple times, because, api.patchEventTarget will check it
                    patchAddListener(proto);
                    patchRemoveListener(proto);
                    patchAddListener(mql);
                    patchRemoveListener(mql);
                }
                else if (mql['addListener']) {
                    // proto not exists, or proto has no addListener method
                    // try to patch mql instance
                    patchAddListener(mql);
                    patchRemoveListener(mql);
                }
            }
            return mql;
        }; });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYXBpcy1tZWRpYS1xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2Jyb3dzZXIvd2ViYXBpcy1tZWRpYS1xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQzdFLFNBQVMsZ0JBQWdCLENBQUMsS0FBVTtRQUNsQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztZQUNuRixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNwRSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUM7Z0JBQy9ELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQVQ2RCxDQVM3RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3JDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFVBQUMsSUFBUyxFQUFFLElBQVc7WUFDdEYsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDckUsSUFBSSxpQkFBaUIsRUFBRTtvQkFDckIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2lCQUMvQztxQkFBTTtvQkFDTCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuQzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBWmdFLENBWWhFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQzVCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QjtTQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQy9CLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFDLFFBQWtCLElBQUssT0FBQSxVQUFDLElBQVMsRUFBRSxJQUFXO1lBQ25GLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxFQUFFO2dCQUNQLHdDQUF3QztnQkFDeEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUNqQyxzREFBc0Q7b0JBQ3RELDhEQUE4RDtvQkFDOUQsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFCO3FCQUFNLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM3Qix1REFBdUQ7b0JBQ3ZELDRCQUE0QjtvQkFDNUIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBcEI2RCxDQW9CN0QsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdtZWRpYVF1ZXJ5JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgZnVuY3Rpb24gcGF0Y2hBZGRMaXN0ZW5lcihwcm90bzogYW55KSB7XG4gICAgYXBpLnBhdGNoTWV0aG9kKHByb3RvLCAnYWRkTGlzdGVuZXInLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogbnVsbDtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlcmVkQ2FsbGJhY2sgPSBab25lLmN1cnJlbnQud3JhcChjYWxsYmFjaywgJ01lZGlhUXVlcnknKTtcbiAgICAgICAgY2FsbGJhY2tbYXBpLnN5bWJvbCgnbWVkaWFRdWVyeUNhbGxiYWNrJyldID0gd3JhcHBlcmVkQ2FsbGJhY2s7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5jYWxsKHNlbGYsIHdyYXBwZXJlZENhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdGNoUmVtb3ZlTGlzdGVuZXIocHJvdG86IGFueSkge1xuICAgIGFwaS5wYXRjaE1ldGhvZChwcm90bywgJ3JlbW92ZUxpc3RlbmVyJywgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5sZW5ndGggPiAwID8gYXJnc1swXSA6IG51bGw7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJlZENhbGxiYWNrID0gY2FsbGJhY2tbYXBpLnN5bWJvbCgnbWVkaWFRdWVyeUNhbGxiYWNrJyldO1xuICAgICAgICBpZiAod3JhcHBlcmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuY2FsbChzZWxmLCB3cmFwcGVyZWRDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ2xvYmFsWydNZWRpYVF1ZXJ5TGlzdCddKSB7XG4gICAgY29uc3QgcHJvdG8gPSBnbG9iYWxbJ01lZGlhUXVlcnlMaXN0J10ucHJvdG90eXBlO1xuICAgIHBhdGNoQWRkTGlzdGVuZXIocHJvdG8pO1xuICAgIHBhdGNoUmVtb3ZlTGlzdGVuZXIocHJvdG8pO1xuICB9IGVsc2UgaWYgKGdsb2JhbFsnbWF0Y2hNZWRpYSddKSB7XG4gICAgYXBpLnBhdGNoTWV0aG9kKGdsb2JhbCwgJ21hdGNoTWVkaWEnLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBpZiAobXFsKSB7XG4gICAgICAgIC8vIHRyeSB0byBwYXRjaCBNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGVcbiAgICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobXFsKTtcbiAgICAgICAgaWYgKHByb3RvICYmIHByb3RvWydhZGRMaXN0ZW5lciddKSB7XG4gICAgICAgICAgLy8gdHJ5IHRvIHBhdGNoIHByb3RvLCBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHBhdGNoXG4gICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMsIGJlY2F1c2UsIGFwaS5wYXRjaEV2ZW50VGFyZ2V0IHdpbGwgY2hlY2sgaXRcbiAgICAgICAgICBwYXRjaEFkZExpc3RlbmVyKHByb3RvKTtcbiAgICAgICAgICBwYXRjaFJlbW92ZUxpc3RlbmVyKHByb3RvKTtcbiAgICAgICAgICBwYXRjaEFkZExpc3RlbmVyKG1xbCk7XG4gICAgICAgICAgcGF0Y2hSZW1vdmVMaXN0ZW5lcihtcWwpO1xuICAgICAgICB9IGVsc2UgaWYgKG1xbFsnYWRkTGlzdGVuZXInXSkge1xuICAgICAgICAgIC8vIHByb3RvIG5vdCBleGlzdHMsIG9yIHByb3RvIGhhcyBubyBhZGRMaXN0ZW5lciBtZXRob2RcbiAgICAgICAgICAvLyB0cnkgdG8gcGF0Y2ggbXFsIGluc3RhbmNlXG4gICAgICAgICAgcGF0Y2hBZGRMaXN0ZW5lcihtcWwpO1xuICAgICAgICAgIHBhdGNoUmVtb3ZlTGlzdGVuZXIobXFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1xbDtcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=