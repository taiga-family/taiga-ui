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
        define("zone.js/lib/node/events", ["require", "exports", "zone.js/lib/common/events"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("zone.js/lib/common/events");
    Zone.__load_patch('EventEmitter', function (global) {
        // For EventEmitter
        var EE_ADD_LISTENER = 'addListener';
        var EE_PREPEND_LISTENER = 'prependListener';
        var EE_REMOVE_LISTENER = 'removeListener';
        var EE_REMOVE_ALL_LISTENER = 'removeAllListeners';
        var EE_LISTENERS = 'listeners';
        var EE_ON = 'on';
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            // same callback, same capture, same event name, just return
            return task.callback === delegate || task.callback.listener === delegate;
        };
        var eventNameToString = function (eventName) {
            if (typeof eventName === 'string') {
                return eventName;
            }
            if (!eventName) {
                return '';
            }
            return eventName.toString().replace('(', '_').replace(')', '_');
        };
        function patchEventEmitterMethods(obj) {
            var result = events_1.patchEventTarget(global, [obj], {
                useG: false,
                add: EE_ADD_LISTENER,
                rm: EE_REMOVE_LISTENER,
                prepend: EE_PREPEND_LISTENER,
                rmAll: EE_REMOVE_ALL_LISTENER,
                listeners: EE_LISTENERS,
                chkDup: false,
                rt: true,
                diff: compareTaskCallbackVsDelegate,
                eventNameToString: eventNameToString
            });
            if (result && result[0]) {
                obj[EE_ON] = obj[EE_ADD_LISTENER];
            }
        }
        // EventEmitter
        var events;
        try {
            events = require('events');
        }
        catch (err) {
        }
        if (events && events.EventEmitter) {
            patchEventEmitterMethods(events.EventEmitter.prototype);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvbm9kZS9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxvREFBa0Q7SUFFbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsVUFBQyxNQUFXO1FBQzVDLG1CQUFtQjtRQUNuQixJQUFNLGVBQWUsR0FBRyxhQUFhLENBQUM7UUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztRQUM5QyxJQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQzVDLElBQU0sc0JBQXNCLEdBQUcsb0JBQW9CLENBQUM7UUFDcEQsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFNLDZCQUE2QixHQUFHLFVBQVMsSUFBUyxFQUFFLFFBQWE7WUFDckUsNERBQTREO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO1FBQzNFLENBQUMsQ0FBQztRQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBUyxTQUF3QjtZQUN6RCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFDakMsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDO1FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxHQUFRO1lBQ3hDLElBQU0sTUFBTSxHQUFHLHlCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLEVBQUUsS0FBSztnQkFDWCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEIsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEVBQUUsRUFBRSxJQUFJO2dCQUNSLElBQUksRUFBRSw2QkFBNkI7Z0JBQ25DLGlCQUFpQixFQUFFLGlCQUFpQjthQUNyQyxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDO1FBRUQsZUFBZTtRQUNmLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSTtZQUNGLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFBQyxPQUFPLEdBQUcsRUFBRTtTQUNiO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNqQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7cGF0Y2hFdmVudFRhcmdldH0gZnJvbSAnLi4vY29tbW9uL2V2ZW50cyc7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdFdmVudEVtaXR0ZXInLCAoZ2xvYmFsOiBhbnkpID0+IHtcbiAgLy8gRm9yIEV2ZW50RW1pdHRlclxuICBjb25zdCBFRV9BRERfTElTVEVORVIgPSAnYWRkTGlzdGVuZXInO1xuICBjb25zdCBFRV9QUkVQRU5EX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gIGNvbnN0IEVFX1JFTU9WRV9MSVNURU5FUiA9ICdyZW1vdmVMaXN0ZW5lcic7XG4gIGNvbnN0IEVFX1JFTU9WRV9BTExfTElTVEVORVIgPSAncmVtb3ZlQWxsTGlzdGVuZXJzJztcbiAgY29uc3QgRUVfTElTVEVORVJTID0gJ2xpc3RlbmVycyc7XG4gIGNvbnN0IEVFX09OID0gJ29uJztcblxuICBjb25zdCBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSA9IGZ1bmN0aW9uKHRhc2s6IGFueSwgZGVsZWdhdGU6IGFueSkge1xuICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgIHJldHVybiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSB8fCB0YXNrLmNhbGxiYWNrLmxpc3RlbmVyID09PSBkZWxlZ2F0ZTtcbiAgfTtcblxuICBjb25zdCBldmVudE5hbWVUb1N0cmluZyA9IGZ1bmN0aW9uKGV2ZW50TmFtZTogc3RyaW5nfFN5bWJvbCkge1xuICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGV2ZW50TmFtZTtcbiAgICB9XG4gICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50TmFtZS50b1N0cmluZygpLnJlcGxhY2UoJygnLCAnXycpLnJlcGxhY2UoJyknLCAnXycpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBhdGNoRXZlbnRFbWl0dGVyTWV0aG9kcyhvYmo6IGFueSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGNoRXZlbnRUYXJnZXQoZ2xvYmFsLCBbb2JqXSwge1xuICAgICAgdXNlRzogZmFsc2UsXG4gICAgICBhZGQ6IEVFX0FERF9MSVNURU5FUixcbiAgICAgIHJtOiBFRV9SRU1PVkVfTElTVEVORVIsXG4gICAgICBwcmVwZW5kOiBFRV9QUkVQRU5EX0xJU1RFTkVSLFxuICAgICAgcm1BbGw6IEVFX1JFTU9WRV9BTExfTElTVEVORVIsXG4gICAgICBsaXN0ZW5lcnM6IEVFX0xJU1RFTkVSUyxcbiAgICAgIGNoa0R1cDogZmFsc2UsXG4gICAgICBydDogdHJ1ZSxcbiAgICAgIGRpZmY6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlLFxuICAgICAgZXZlbnROYW1lVG9TdHJpbmc6IGV2ZW50TmFtZVRvU3RyaW5nXG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbMF0pIHtcbiAgICAgIG9ialtFRV9PTl0gPSBvYmpbRUVfQUREX0xJU1RFTkVSXTtcbiAgICB9XG4gIH1cblxuICAvLyBFdmVudEVtaXR0ZXJcbiAgbGV0IGV2ZW50cztcbiAgdHJ5IHtcbiAgICBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gIH1cblxuICBpZiAoZXZlbnRzICYmIGV2ZW50cy5FdmVudEVtaXR0ZXIpIHtcbiAgICBwYXRjaEV2ZW50RW1pdHRlck1ldGhvZHMoZXZlbnRzLkV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuICB9XG59KTtcbiJdfQ==