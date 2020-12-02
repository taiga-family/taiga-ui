"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ResizeObserver', function (global, Zone, api) {
    var ResizeObserver = global['ResizeObserver'];
    if (!ResizeObserver) {
        return;
    }
    var resizeObserverSymbol = api.symbol('ResizeObserver');
    api.patchMethod(global, 'ResizeObserver', function (delegate) { return function (self, args) {
        var callback = args.length > 0 ? args[0] : null;
        if (callback) {
            args[0] = function (entries, observer) {
                var e_1, _a;
                var _this = this;
                var zones = {};
                var currZone = Zone.current;
                try {
                    for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                        var entry = entries_1_1.value;
                        var zone = entry.target[resizeObserverSymbol];
                        if (!zone) {
                            zone = currZone;
                        }
                        var zoneEntriesInfo = zones[zone.name];
                        if (!zoneEntriesInfo) {
                            zones[zone.name] = zoneEntriesInfo = { entries: [], zone: zone };
                        }
                        zoneEntriesInfo.entries.push(entry);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                Object.keys(zones).forEach(function (zoneName) {
                    var zoneEntriesInfo = zones[zoneName];
                    if (zoneEntriesInfo.zone !== Zone.current) {
                        zoneEntriesInfo.zone.run(callback, _this, [zoneEntriesInfo.entries, observer], 'ResizeObserver');
                    }
                    else {
                        callback.call(_this, zoneEntriesInfo.entries, observer);
                    }
                });
            };
        }
        return args.length > 0 ? new ResizeObserver(args[0]) : new ResizeObserver();
    }; });
    api.patchMethod(ResizeObserver.prototype, 'observe', function (delegate) { return function (self, args) {
        var target = args.length > 0 ? args[0] : null;
        if (!target) {
            return delegate.apply(self, args);
        }
        var targets = self[resizeObserverSymbol];
        if (!targets) {
            targets = self[resizeObserverSymbol] = [];
        }
        targets.push(target);
        target[resizeObserverSymbol] = Zone.current;
        return delegate.apply(self, args);
    }; });
    api.patchMethod(ResizeObserver.prototype, 'unobserve', function (delegate) { return function (self, args) {
        var target = args.length > 0 ? args[0] : null;
        if (!target) {
            return delegate.apply(self, args);
        }
        var targets = self[resizeObserverSymbol];
        if (targets) {
            for (var i = 0; i < targets.length; i++) {
                if (targets[i] === target) {
                    targets.splice(i, 1);
                    break;
                }
            }
        }
        target[resizeObserverSymbol] = undefined;
        return delegate.apply(self, args);
    }; });
    api.patchMethod(ResizeObserver.prototype, 'disconnect', function (delegate) { return function (self, args) {
        var targets = self[resizeObserverSymbol];
        if (targets) {
            targets.forEach(function (target) { target[resizeObserverSymbol] = undefined; });
            self[resizeObserverSymbol] = undefined;
        }
        return delegate.apply(self, args);
    }; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYXBpcy1yZXNpemUtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9icm93c2VyL3dlYmFwaXMtcmVzaXplLW9ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNILElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLEdBQWlCO0lBQzVFLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsT0FBTztLQUNSO0lBRUQsSUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFMUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztRQUN2RixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEQsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBUyxPQUFZLEVBQUUsUUFBYTs7Z0JBQXBDLGlCQXdCVDtnQkF2QkMsSUFBTSxLQUFLLEdBQThCLEVBQUUsQ0FBQztnQkFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7b0JBQzlCLEtBQWtCLElBQUEsWUFBQSxTQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTt3QkFBdEIsSUFBSSxLQUFLLG9CQUFBO3dCQUNaLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9C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TyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtvQkFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO1FBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQWhCOEQsQ0FnQjlELENBQUMsQ0FBQztJQUVQLEdBQUcsQ0FBQyxXQUFXLENBQ1gsY0FBYyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztRQUNyRixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFXLElBQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBUCtELENBTy9ELENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ1Jlc2l6ZU9ic2VydmVyJywgKGdsb2JhbDogYW55LCBab25lOiBhbnksIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGNvbnN0IFJlc2l6ZU9ic2VydmVyID0gZ2xvYmFsWydSZXNpemVPYnNlcnZlciddO1xuICBpZiAoIVJlc2l6ZU9ic2VydmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXJTeW1ib2wgPSBhcGkuc3ltYm9sKCdSZXNpemVPYnNlcnZlcicpO1xuXG4gIGFwaS5wYXRjaE1ldGhvZChnbG9iYWwsICdSZXNpemVPYnNlcnZlcicsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogbnVsbDtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbihlbnRyaWVzOiBhbnksIG9ic2VydmVyOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgem9uZXM6IHtbem9uZU5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICAgICAgY29uc3QgY3VyclpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICBsZXQgem9uZSA9IGVudHJ5LnRhcmdldFtyZXNpemVPYnNlcnZlclN5bWJvbF07XG4gICAgICAgICAgaWYgKCF6b25lKSB7XG4gICAgICAgICAgICB6b25lID0gY3VyclpvbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB6b25lRW50cmllc0luZm8gPSB6b25lc1t6b25lLm5hbWVdO1xuICAgICAgICAgIGlmICghem9uZUVudHJpZXNJbmZvKSB7XG4gICAgICAgICAgICB6b25lc1t6b25lLm5hbWVdID0gem9uZUVudHJpZXNJbmZvID0ge2VudHJpZXM6IFtdLCB6b25lOiB6b25lfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgem9uZUVudHJpZXNJbmZvLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyh6b25lcykuZm9yRWFjaCh6b25lTmFtZSA9PiB7XG4gICAgICAgICAgY29uc3Qgem9uZUVudHJpZXNJbmZvID0gem9uZXNbem9uZU5hbWVdO1xuICAgICAgICAgIGlmICh6b25lRW50cmllc0luZm8uem9uZSAhPT0gWm9uZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB6b25lRW50cmllc0luZm8uem9uZS5ydW4oXG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssIHRoaXMsIFt6b25lRW50cmllc0luZm8uZW50cmllcywgb2JzZXJ2ZXJdLCAnUmVzaXplT2JzZXJ2ZXInKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB6b25lRW50cmllc0luZm8uZW50cmllcywgb2JzZXJ2ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXJncy5sZW5ndGggPiAwID8gbmV3IFJlc2l6ZU9ic2VydmVyKGFyZ3NbMF0pIDogbmV3IFJlc2l6ZU9ic2VydmVyKCk7XG4gIH0pO1xuXG4gIGFwaS5wYXRjaE1ldGhvZChcbiAgICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZSwgJ29ic2VydmUnLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogbnVsbDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhcmdldHMgPSBzZWxmW3Jlc2l6ZU9ic2VydmVyU3ltYm9sXTtcbiAgICAgICAgaWYgKCF0YXJnZXRzKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHNlbGZbcmVzaXplT2JzZXJ2ZXJTeW1ib2xdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgIHRhcmdldFtyZXNpemVPYnNlcnZlclN5bWJvbF0gPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0pO1xuXG4gIGFwaS5wYXRjaE1ldGhvZChcbiAgICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZSwgJ3Vub2JzZXJ2ZScsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGFyZ3MubGVuZ3RoID4gMCA/IGFyZ3NbMF0gOiBudWxsO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFyZ2V0cyA9IHNlbGZbcmVzaXplT2JzZXJ2ZXJTeW1ib2xdO1xuICAgICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhcmdldHNbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICB0YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldFtyZXNpemVPYnNlcnZlclN5bWJvbF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0pO1xuXG4gIGFwaS5wYXRjaE1ldGhvZChcbiAgICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZSwgJ2Rpc2Nvbm5lY3QnLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gc2VsZltyZXNpemVPYnNlcnZlclN5bWJvbF07XG4gICAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQ6IGFueSkgPT4geyB0YXJnZXRbcmVzaXplT2JzZXJ2ZXJTeW1ib2xdID0gdW5kZWZpbmVkOyB9KTtcbiAgICAgICAgICBzZWxmW3Jlc2l6ZU9ic2VydmVyU3ltYm9sXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9KTtcbn0pO1xuIl19