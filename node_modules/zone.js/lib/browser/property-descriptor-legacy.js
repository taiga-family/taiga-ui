/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/browser/property-descriptor-legacy", ["require", "exports", "zone.js/lib/browser/websocket"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var webSocketPatch = require("zone.js/lib/browser/websocket");
    function propertyDescriptorLegacyPatch(api, _global) {
        var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
        if (isNode && !isMix) {
            return;
        }
        if (!canPatchViaPropertyDescriptor(api, _global)) {
            var supportsWebSocket = typeof WebSocket !== 'undefined';
            // Safari, Android browsers (Jelly Bean)
            patchViaCapturingAllTheEvents(api);
            api.patchClass('XMLHttpRequest');
            if (supportsWebSocket) {
                webSocketPatch.apply(api, _global);
            }
            Zone[api.symbol('patchEvents')] = true;
        }
    }
    exports.propertyDescriptorLegacyPatch = propertyDescriptorLegacyPatch;
    function canPatchViaPropertyDescriptor(api, _global) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((isBrowser || isMix) &&
            !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
            typeof Element !== 'undefined') {
            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
            // IDL interface attributes are not configurable
            var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
            if (desc && !desc.configurable)
                return false;
            // try to use onclick to detect whether we can patch via propertyDescriptor
            // because XMLHttpRequest is not available in service worker
            if (desc) {
                api.ObjectDefineProperty(Element.prototype, 'onclick', { enumerable: true, configurable: true, get: function () { return true; } });
                var div = document.createElement('div');
                var result = !!div.onclick;
                api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
                return result;
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return false;
        }
        var ON_READY_STATE_CHANGE = 'onreadystatechange';
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
        // add enumerable and configurable here because in opera
        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
        // without adding enumerable and configurable will cause onreadystatechange
        // non-configurable
        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
        // we should set a real desc instead a fake one
        if (xhrDesc) {
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, { enumerable: true, configurable: true, get: function () { return true; } });
            var req = new XMLHttpRequest();
            var result = !!req.onreadystatechange;
            // restore original desc
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
            return result;
        }
        else {
            var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function () { return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1]; },
                set: function (value) { this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value; }
            });
            var req = new XMLHttpRequest();
            var detectFunc = function () { };
            req.onreadystatechange = detectFunc;
            var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
            req.onreadystatechange = null;
            return result;
        }
    }
    // Whenever any eventListener fires, we check the eventListener target and all parents
    // for `onwhatever` properties and replace them with zone-bound functions
    // - Chrome (for now)
    function patchViaCapturingAllTheEvents(api) {
        var eventNames = api.getGlobalObjects().eventNames;
        var unboundKey = api.symbol('unbound');
        var _loop_1 = function (i) {
            var property = eventNames[i];
            var onproperty = 'on' + property;
            self.addEventListener(property, function (event) {
                var elt = event.target, bound, source;
                if (elt) {
                    source = elt.constructor['name'] + '.' + onproperty;
                }
                else {
                    source = 'unknown.' + onproperty;
                }
                while (elt) {
                    if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                        bound = api.wrapWithCurrentZone(elt[onproperty], source);
                        bound[unboundKey] = elt[onproperty];
                        elt[onproperty] = bound;
                    }
                    elt = elt.parentElement;
                }
            }, true);
        };
        for (var i = 0; i < eventNames.length; i++) {
            _loop_1(i);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVzY3JpcHRvci1sZWdhY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9icm93c2VyL3Byb3BlcnR5LWRlc2NyaXB0b3ItbGVnYWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNIOzs7R0FHRzs7Ozs7Ozs7Ozs7O0lBRUgsOERBQThDO0lBRTlDLFNBQWdCLDZCQUE2QixDQUFDLEdBQWlCLEVBQUUsT0FBWTtRQUNyRSxJQUFBLDJCQUEwQyxFQUF6QyxrQkFBTSxFQUFFLGdCQUFpQyxDQUFDO1FBQ2pELElBQUksTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDaEQsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLFNBQVMsS0FBSyxXQUFXLENBQUM7WUFDM0Qsd0NBQXdDO1lBQ3hDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNqQyxJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNwQztZQUNBLElBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQWhCRCxzRUFnQkM7SUFFRCxTQUFTLDZCQUE2QixDQUFDLEdBQWlCLEVBQUUsT0FBWTtRQUM5RCxJQUFBLDJCQUE2QyxFQUE1Qyx3QkFBUyxFQUFFLGdCQUFpQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FB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S0FBSyxDQUFDO3FCQUN6QjtvQkFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztpQkFDekI7WUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBbEJYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBakMsQ0FBQztTQW1CVDtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7Z2xvYmFsVGhpc31cbiAqL1xuXG5pbXBvcnQgKiBhcyB3ZWJTb2NrZXRQYXRjaCBmcm9tICcuL3dlYnNvY2tldCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JMZWdhY3lQYXRjaChhcGk6IF9ab25lUHJpdmF0ZSwgX2dsb2JhbDogYW55KSB7XG4gIGNvbnN0IHtpc05vZGUsIGlzTWl4fSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCkgITtcbiAgaWYgKGlzTm9kZSAmJiAhaXNNaXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKGFwaSwgX2dsb2JhbCkpIHtcbiAgICBjb25zdCBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcbiAgICBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpO1xuICAgIGFwaS5wYXRjaENsYXNzKCdYTUxIdHRwUmVxdWVzdCcpO1xuICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgd2ViU29ja2V0UGF0Y2guYXBwbHkoYXBpLCBfZ2xvYmFsKTtcbiAgICB9XG4gICAgKFpvbmUgYXMgYW55KVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50cycpXSA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoYXBpOiBfWm9uZVByaXZhdGUsIF9nbG9iYWw6IGFueSkge1xuICBjb25zdCB7aXNCcm93c2VyLCBpc01peH0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpICE7XG4gIGlmICgoaXNCcm93c2VyIHx8IGlzTWl4KSAmJlxuICAgICAgIWFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpICYmXG4gICAgICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgIGNvbnN0IGRlc2MgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpO1xuICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIHRyeSB0byB1c2Ugb25jbGljayB0byBkZXRlY3Qgd2hldGhlciB3ZSBjYW4gcGF0Y2ggdmlhIHByb3BlcnR5RGVzY3JpcHRvclxuICAgIC8vIGJlY2F1c2UgWE1MSHR0cFJlcXVlc3QgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXJ2aWNlIHdvcmtlclxuICAgIGlmIChkZXNjKSB7XG4gICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJyxcbiAgICAgICAgICB7ZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfX0pO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCByZXN1bHQgPSAhIWRpdi5vbmNsaWNrO1xuICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycsIGRlc2MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBYTUxIdHRwUmVxdWVzdCA9IF9nbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0J107XG4gIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IE9OX1JFQURZX1NUQVRFX0NIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICBjb25zdCBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcblxuICBjb25zdCB4aHJEZXNjID1cbiAgICAgIGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSk7XG5cbiAgLy8gYWRkIGVudW1lcmFibGUgYW5kIGNvbmZpZ3VyYWJsZSBoZXJlIGJlY2F1c2UgaW4gb3BlcmFcbiAgLy8gYnkgZGVmYXVsdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub25yZWFkeXN0YXRlY2hhbmdlIGlzIHVuZGVmaW5lZFxuICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gbm9uLWNvbmZpZ3VyYWJsZVxuICAvLyBhbmQgaWYgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWQsXG4gIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gIGlmICh4aHJEZXNjKSB7XG4gICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFxuICAgICAgICBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLFxuICAgICAgICB7ZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfX0pO1xuICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGRlc2NcbiAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwgeGhyRGVzYyB8fCB7fSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0UgPSBhcGkuc3ltYm9sKCdmYWtlJyk7XG4gICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VdOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV0gPSB2YWx1ZTsgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IGRldGVjdEZ1bmMgPSAoKSA9PiB7fTtcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZGV0ZWN0RnVuYztcbiAgICBjb25zdCByZXN1bHQgPSAocmVxIGFzIGFueSlbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXSA9PT0gZGV0ZWN0RnVuYztcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbCBhcyBhbnk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGk6IF9ab25lUHJpdmF0ZSkge1xuICBjb25zdCB7ZXZlbnROYW1lc30gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpICE7XG4gIGNvbnN0IHVuYm91bmRLZXkgPSBhcGkuc3ltYm9sKCd1bmJvdW5kJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gZXZlbnROYW1lc1tpXTtcbiAgICBjb25zdCBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGxldCBlbHQ6IGFueSA9IDxOb2RlPmV2ZW50LnRhcmdldCwgYm91bmQsIHNvdXJjZTtcbiAgICAgIGlmIChlbHQpIHtcbiAgICAgICAgc291cmNlID0gZWx0LmNvbnN0cnVjdG9yWyduYW1lJ10gKyAnLicgKyBvbnByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gJ3Vua25vd24uJyArIG9ucHJvcGVydHk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoZWx0KSB7XG4gICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgIGJvdW5kID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZWx0W29ucHJvcGVydHldLCBzb3VyY2UpO1xuICAgICAgICAgIGJvdW5kW3VuYm91bmRLZXldID0gZWx0W29ucHJvcGVydHldO1xuICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuICB9XG59XG4iXX0=