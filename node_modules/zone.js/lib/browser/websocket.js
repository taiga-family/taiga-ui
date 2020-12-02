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
        define("zone.js/lib/browser/websocket", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // we have to patch the instance since the proto is non-configurable
    function apply(api, _global) {
        var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
        var WS = _global.WebSocket;
        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
        // On older Chrome, no need since EventTarget was already patched
        if (!_global.EventTarget) {
            api.patchEventTarget(_global, [WS.prototype]);
        }
        _global.WebSocket = function (x, y) {
            var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
            var proxySocket;
            var proxySocketProto;
            // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
            var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
            if (onmessageDesc && onmessageDesc.configurable === false) {
                proxySocket = api.ObjectCreate(socket);
                // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
                // but proxySocket not, so we will keep socket as prototype and pass it to
                // patchOnProperties method
                proxySocketProto = socket;
                [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                    proxySocket[propName] = function () {
                        var args = api.ArraySlice.call(arguments);
                        if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                            var eventName = args.length > 0 ? args[0] : undefined;
                            if (eventName) {
                                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                                socket[propertySymbol] = proxySocket[propertySymbol];
                            }
                        }
                        return socket[propName].apply(socket, args);
                    };
                });
            }
            else {
                // we can patch the real socket
                proxySocket = socket;
            }
            api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
            return proxySocket;
        };
        var globalWebSocket = _global['WebSocket'];
        for (var prop in WS) {
            globalWebSocket[prop] = WS[prop];
        }
    }
    exports.apply = apply;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci93ZWJzb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxvRUFBb0U7SUFDcEUsU0FBZ0IsS0FBSyxDQUFDLEdBQWlCLEVBQUUsT0FBWTtRQUM3QyxJQUFBLDJCQUE4RSxFQUE3RSxrREFBc0IsRUFBRSx3REFBcUQsQ0FBQztRQUNyRixJQUFNLEVBQUUsR0FBUyxPQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3BDLHlGQUF5RjtRQUN6RixpRUFBaUU7UUFDakUsSUFBSSxDQUFPLE9BQVEsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0ssT0FBUSxDQUFDLFNBQVMsR0FBRyxVQUFTLENBQU0sRUFBRSxDQUFNO1lBQ2hELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksV0FBZ0IsQ0FBQztZQUVyQixJQUFJLGdCQUFxQixDQUFDO1lBRTFCLGdHQUFnRztZQUNoRyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsOEJBQThCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO2dCQUN6RCxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsa0ZBQWtGO2dCQUNsRiwwRUFBMEU7Z0JBQzFFLDJCQUEyQjtnQkFDM0IsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixDQUFDLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFDekUsUUFBUTtvQkFDVixXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUc7d0JBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLFFBQVEsS0FBSyxzQkFBc0IsSUFBSSxRQUFRLEtBQUsseUJBQXlCLEVBQUU7NEJBQ2pGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDeEQsSUFBSSxTQUFTLEVBQUU7Z0NBQ2IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0NBQ2xFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7NkJBQ3REO3lCQUNGO3dCQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLCtCQUErQjtnQkFDL0IsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtZQUVELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUVGLElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQU0sSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNyQixlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQWpERCxzQkFpREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIHdlIGhhdmUgdG8gcGF0Y2ggdGhlIGluc3RhbmNlIHNpbmNlIHRoZSBwcm90byBpcyBub24tY29uZmlndXJhYmxlXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoYXBpOiBfWm9uZVByaXZhdGUsIF9nbG9iYWw6IGFueSkge1xuICBjb25zdCB7QUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUn0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpICE7XG4gIGNvbnN0IFdTID0gKDxhbnk+X2dsb2JhbCkuV2ViU29ja2V0O1xuICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAvLyBPbiBvbGRlciBDaHJvbWUsIG5vIG5lZWQgc2luY2UgRXZlbnRUYXJnZXQgd2FzIGFscmVhZHkgcGF0Y2hlZFxuICBpZiAoISg8YW55Pl9nbG9iYWwpLkV2ZW50VGFyZ2V0KSB7XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgW1dTLnByb3RvdHlwZV0pO1xuICB9XG4gICg8YW55Pl9nbG9iYWwpLldlYlNvY2tldCA9IGZ1bmN0aW9uKHg6IGFueSwgeTogYW55KSB7XG4gICAgY29uc3Qgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoeCwgeSkgOiBuZXcgV1MoeCk7XG4gICAgbGV0IHByb3h5U29ja2V0OiBhbnk7XG5cbiAgICBsZXQgcHJveHlTb2NrZXRQcm90bzogYW55O1xuXG4gICAgLy8gU2FmYXJpIDcuMCBoYXMgbm9uLWNvbmZpZ3VyYWJsZSBvd24gJ29ubWVzc2FnZScgYW5kIGZyaWVuZHMgcHJvcGVydGllcyBvbiB0aGUgc29ja2V0IGluc3RhbmNlXG4gICAgY29uc3Qgb25tZXNzYWdlRGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgaWYgKG9ubWVzc2FnZURlc2MgJiYgb25tZXNzYWdlRGVzYy5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICBwcm94eVNvY2tldCA9IGFwaS5PYmplY3RDcmVhdGUoc29ja2V0KTtcbiAgICAgIC8vIHNvY2tldCBoYXZlIG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yICdvbm9wZW4nLCAnb25tZXNzYWdlJywgJ29uY2xvc2UnLCAnb25lcnJvcidcbiAgICAgIC8vIGJ1dCBwcm94eVNvY2tldCBub3QsIHNvIHdlIHdpbGwga2VlcCBzb2NrZXQgYXMgcHJvdG90eXBlIGFuZCBwYXNzIGl0IHRvXG4gICAgICAvLyBwYXRjaE9uUHJvcGVydGllcyBtZXRob2RcbiAgICAgIHByb3h5U29ja2V0UHJvdG8gPSBzb2NrZXQ7XG4gICAgICBbQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgJ3NlbmQnLCAnY2xvc2UnXS5mb3JFYWNoKGZ1bmN0aW9uKFxuICAgICAgICAgIHByb3BOYW1lKSB7XG4gICAgICAgIHByb3h5U29ja2V0W3Byb3BOYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcGkuQXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKHByb3BOYW1lID09PSBBRERfRVZFTlRfTElTVEVORVJfU1RSIHx8IHByb3BOYW1lID09PSBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgc29ja2V0W3Byb3BlcnR5U3ltYm9sXSA9IHByb3h5U29ja2V0W3Byb3BlcnR5U3ltYm9sXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNvY2tldFtwcm9wTmFtZV0uYXBwbHkoc29ja2V0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBjYW4gcGF0Y2ggdGhlIHJlYWwgc29ja2V0XG4gICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcbiAgICB9XG5cbiAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMocHJveHlTb2NrZXQsIFsnY2xvc2UnLCAnZXJyb3InLCAnbWVzc2FnZScsICdvcGVuJ10sIHByb3h5U29ja2V0UHJvdG8pO1xuICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgfTtcblxuICBjb25zdCBnbG9iYWxXZWJTb2NrZXQgPSBfZ2xvYmFsWydXZWJTb2NrZXQnXTtcbiAgZm9yIChjb25zdCBwcm9wIGluIFdTKSB7XG4gICAgZ2xvYmFsV2ViU29ja2V0W3Byb3BdID0gV1NbcHJvcF07XG4gIH1cbn1cbiJdfQ==