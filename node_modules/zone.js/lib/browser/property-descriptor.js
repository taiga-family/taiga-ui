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
        define("zone.js/lib/browser/property-descriptor", ["require", "exports", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("zone.js/lib/common/utils");
    var globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    var documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    var windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    var htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    exports.eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
    }
    exports.filterProperties = filterProperties;
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        utils_1.patchOnProperties(target, filteredProperties, prototype);
    }
    exports.patchFilteredProperties = patchFilteredProperties;
    function propertyDescriptorPatch(api, _global) {
        if (utils_1.isNode && !utils_1.isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (utils_1.isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = utils_1.isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, exports.eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, utils_1.ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, exports.eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, exports.eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, exports.eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, exports.eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    exports.propertyDescriptorPatch = propertyDescriptorPatch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2Jyb3dzZXIvcHJvcGVydHktZGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7OztJQUVILGtEQUF3RztJQUV4RyxJQUFNLDZCQUE2QixHQUFHO1FBQ3BDLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YsYUFBYTtRQUNiLE1BQU07UUFDTixRQUFRO1FBQ1IsU0FBUztRQUNULGdCQUFnQjtRQUNoQixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLE9BQU87UUFDUCxPQUFPO1FBQ1AsYUFBYTtRQUNiLFlBQVk7UUFDWixVQUFVO1FBQ1YsTUFBTTtRQUNOLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsTUFBTTtRQUNOLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsU0FBUztRQUNULFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsT0FBTztRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsVUFBVTtRQUNWLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLE9BQU87UUFDUCxNQUFNO1FBQ04sU0FBUztRQUNULGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2IsVUFBVTtRQUNWLGFBQWE7UUFDYixXQUFXO1FBQ1gsVUFBVTtRQUNWLFlBQVk7UUFDWixPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsU0FBUztRQUNULFFBQVE7UUFDUixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLE1BQU07UUFDTixNQUFNO1FBQ04sU0FBUztRQUNULFFBQVE7UUFDUixTQUFTO1FBQ1QsWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixTQUFTO1FBQ1QsT0FBTztLQUNSLENBQUM7SUFDRixJQUFNLGtCQUFrQixHQUFHO1FBQ3pCLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0I7UUFDN0YscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCO1FBQ3hGLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQjtRQUN0RixrQkFBa0IsRUFBRSxRQUFRO0tBQzdCLENBQUM7SUFDRixJQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2IsY0FBYztRQUNkLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsUUFBUTtRQUNSLE9BQU87UUFDUCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsU0FBUztRQUNULG9CQUFvQjtRQUNwQixRQUFRO1FBQ1IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsd0JBQXdCO0tBQ3pCLENBQUM7SUFDRixJQUFNLHFCQUFxQixHQUFHO1FBQzVCLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTO1FBQ3hGLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO1FBQ3BGLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQjtLQUMxRSxDQUFDO0lBQ0YsSUFBTSxzQkFBc0IsR0FDeEIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hGLElBQU0sbUJBQW1CLEdBQUc7UUFDMUIsVUFBVTtRQUNWLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLFVBQVU7UUFDVixTQUFTO1FBQ1QsWUFBWTtRQUNaLGNBQWM7UUFDZCxTQUFTO1FBQ1QseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixNQUFNO1FBQ04sZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sZUFBZTtLQUNoQixDQUFDO0lBQ0YsSUFBTSxlQUFlLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ2xHLElBQU0sY0FBYyxHQUFHLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLElBQU0sZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBTSxrQkFBa0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2xHLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXhELElBQU0sd0JBQXdCLEdBQUc7UUFDL0IsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVM7UUFDbkYsa0JBQWtCO0tBQ25CLENBQUM7SUFDRixJQUFNLGtCQUFrQixHQUNwQixDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRyxJQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVqQyxRQUFBLFVBQVUsR0FBRyw2QkFBNkIsQ0FBQyxNQUFNLENBQzFELGVBQWUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQ3ZGLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFPaEQsU0FBZ0IsZ0JBQWdCLENBQzVCLE1BQVcsRUFBRSxZQUFzQixFQUFFLGdCQUFrQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0RCxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELElBQU0sR0FBRyxHQUFxQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxJQUFNLHNCQUFzQixHQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRSxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBYkQsNENBYUM7SUFFRCxTQUFnQix1QkFBdUIsQ0FDbkMsTUFBVyxFQUFFLFlBQXNCLEVBQUUsZ0JBQWtDLEVBQUUsU0FBZTtRQUMxRix3RUFBd0U7UUFDeEUsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFDRCxJQUFNLGtCQUFrQixHQUFhLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Rix5QkFBaUIsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVRELDBEQVNDO0lBRUQsU0FBZ0IsdUJBQXVCLENBQUMsR0FBaUIsRUFBRSxPQUFZO1FBQ3JFLElBQUksY0FBTSxJQUFJLENBQUMsYUFBSyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUssSUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRTtZQUM1QyxtREFBbUQ7WUFDbkQsT0FBTztTQUNSO1FBQ0QsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLFNBQVMsS0FBSyxXQUFXLENBQUM7UUFDM0QsSUFBTSxnQkFBZ0IsR0FBcUIsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDbEYsbUVBQW1FO1FBQ25FLElBQUksaUJBQVMsRUFBRTtZQUNiLElBQU0sY0FBYyxHQUFRLE1BQU0sQ0FBQztZQUNuQyxJQUFNLHFCQUFxQixHQUN2QixZQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEUsd0VBQXdFO1lBQ3hFLGtFQUFrRTtZQUNsRSx1QkFBdUIsQ0FDbkIsY0FBYyxFQUFFLGtCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFDbkQsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFDcEYsNEJBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUMxQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGtCQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUUxRSxJQUFJLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDdkQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxrQkFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDL0Y7WUFDRCx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGtCQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGtCQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUM5Rix1QkFBdUIsQ0FDbkIsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUMxRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RCLHVCQUF1QixDQUNuQixlQUFlLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDOUYsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZGLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUV4RixJQUFNLG9CQUFrQixHQUFHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hFLElBQUksb0JBQWtCLEVBQUU7Z0JBQ3RCLHVCQUF1QixDQUFDLG9CQUFrQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsSUFBTSxRQUFNLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBTSxFQUFFO2dCQUNWLHVCQUF1QixDQUFDLFFBQU0sQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUMvRTtTQUNGO1FBQ0QsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsNkVBQTZFO1lBQzdFLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUMvRjtRQUNELElBQU0seUJBQXlCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkUsSUFBSSx5QkFBeUIsRUFBRTtZQUM3Qix1QkFBdUIsQ0FDbkIseUJBQXlCLElBQUkseUJBQXlCLENBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUMxRixnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDbkMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xGLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRix1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRix1QkFBdUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckYsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hGLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUNwRjtRQUNELElBQUksaUJBQWlCLEVBQUU7WUFDckIsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JGO0lBQ0gsQ0FBQztJQXBFRCwwREFvRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7Z2xvYmFsVGhpc31cbiAqL1xuXG5pbXBvcnQge09iamVjdEdldFByb3RvdHlwZU9mLCBpc0Jyb3dzZXIsIGlzSUUsIGlzTWl4LCBpc05vZGUsIHBhdGNoT25Qcm9wZXJ0aWVzfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuXG5jb25zdCBnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcyA9IFtcbiAgJ2Fib3J0JyxcbiAgJ2FuaW1hdGlvbmNhbmNlbCcsXG4gICdhbmltYXRpb25lbmQnLFxuICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgJ2F1eGNsaWNrJyxcbiAgJ2JlZm9yZWlucHV0JyxcbiAgJ2JsdXInLFxuICAnY2FuY2VsJyxcbiAgJ2NhbnBsYXknLFxuICAnY2FucGxheXRocm91Z2gnLFxuICAnY2hhbmdlJyxcbiAgJ2NvbXBvc2l0aW9uc3RhcnQnLFxuICAnY29tcG9zaXRpb251cGRhdGUnLFxuICAnY29tcG9zaXRpb25lbmQnLFxuICAnY3VlY2hhbmdlJyxcbiAgJ2NsaWNrJyxcbiAgJ2Nsb3NlJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ2N1cmVjaGFuZ2UnLFxuICAnZGJsY2xpY2snLFxuICAnZHJhZycsXG4gICdkcmFnZW5kJyxcbiAgJ2RyYWdlbnRlcicsXG4gICdkcmFnZXhpdCcsXG4gICdkcmFnbGVhdmUnLFxuICAnZHJhZ292ZXInLFxuICAnZHJvcCcsXG4gICdkdXJhdGlvbmNoYW5nZScsXG4gICdlbXB0aWVkJyxcbiAgJ2VuZGVkJyxcbiAgJ2Vycm9yJyxcbiAgJ2ZvY3VzJyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnZ290cG9pbnRlcmNhcHR1cmUnLFxuICAnaW5wdXQnLFxuICAnaW52YWxpZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ2xvYWQnLFxuICAnbG9hZHN0YXJ0JyxcbiAgJ2xvYWRlZGRhdGEnLFxuICAnbG9hZGVkbWV0YWRhdGEnLFxuICAnbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgJ21vdXNlZG93bicsXG4gICdtb3VzZWVudGVyJyxcbiAgJ21vdXNlbGVhdmUnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNld2hlZWwnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAncGF1c2UnLFxuICAncGxheScsXG4gICdwbGF5aW5nJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcmVudGVyJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVybG9ja2NoYW5nZScsXG4gICdtb3pwb2ludGVybG9ja2NoYW5nZScsXG4gICd3ZWJraXRwb2ludGVybG9ja2VyY2hhbmdlJyxcbiAgJ3BvaW50ZXJsb2NrZXJyb3InLFxuICAnbW96cG9pbnRlcmxvY2tlcnJvcicsXG4gICd3ZWJraXRwb2ludGVybG9ja2Vycm9yJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50b3V0JyxcbiAgJ3BvaW50ZXJvdmVyJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwcm9ncmVzcycsXG4gICdyYXRlY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3Jlc2l6ZScsXG4gICdzY3JvbGwnLFxuICAnc2Vla2VkJyxcbiAgJ3NlZWtpbmcnLFxuICAnc2VsZWN0JyxcbiAgJ3NlbGVjdGlvbmNoYW5nZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzaG93JyxcbiAgJ3NvcnQnLFxuICAnc3RhbGxlZCcsXG4gICdzdWJtaXQnLFxuICAnc3VzcGVuZCcsXG4gICd0aW1ldXBkYXRlJyxcbiAgJ3ZvbHVtZWNoYW5nZScsXG4gICd0b3VjaGNhbmNlbCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaGVuZCcsXG4gICd0cmFuc2l0aW9uY2FuY2VsJyxcbiAgJ3RyYW5zaXRpb25lbmQnLFxuICAnd2FpdGluZycsXG4gICd3aGVlbCdcbl07XG5jb25zdCBkb2N1bWVudEV2ZW50TmFtZXMgPSBbXG4gICdhZnRlcnNjcmlwdGV4ZWN1dGUnLCAnYmVmb3Jlc2NyaXB0ZXhlY3V0ZScsICdET01Db250ZW50TG9hZGVkJywgJ2ZyZWV6ZScsICdmdWxsc2NyZWVuY2hhbmdlJyxcbiAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJyxcbiAgJ21vemZ1bGxzY3JlZW5lcnJvcicsICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLCAnbXNmdWxsc2NyZWVuZXJyb3InLCAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICd2aXNpYmlsaXR5Y2hhbmdlJywgJ3Jlc3VtZSdcbl07XG5jb25zdCB3aW5kb3dFdmVudE5hbWVzID0gW1xuICAnYWJzb2x1dGVkZXZpY2VvcmllbnRhdGlvbicsXG4gICdhZnRlcmlucHV0JyxcbiAgJ2FmdGVycHJpbnQnLFxuICAnYXBwaW5zdGFsbGVkJyxcbiAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAnYmVmb3JlcHJpbnQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ2RldmljZWxpZ2h0JyxcbiAgJ2RldmljZW1vdGlvbicsXG4gICdkZXZpY2VvcmllbnRhdGlvbicsXG4gICdkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJyxcbiAgJ2RldmljZXByb3hpbWl0eScsXG4gICdoYXNoY2hhbmdlJyxcbiAgJ2xhbmd1YWdlY2hhbmdlJyxcbiAgJ21lc3NhZ2UnLFxuICAnbW96YmVmb3JlcGFpbnQnLFxuICAnb2ZmbGluZScsXG4gICdvbmxpbmUnLFxuICAncGFpbnQnLFxuICAncGFnZXNob3cnLFxuICAncGFnZWhpZGUnLFxuICAncG9wc3RhdGUnLFxuICAncmVqZWN0aW9uaGFuZGxlZCcsXG4gICdzdG9yYWdlJyxcbiAgJ3VuaGFuZGxlZHJlamVjdGlvbicsXG4gICd1bmxvYWQnLFxuICAndXNlcnByb3hpbWl0eScsXG4gICd2cmRpc3BsYXljb25uZWN0ZWQnLFxuICAndnJkaXNwbGF5ZGlzY29ubmVjdGVkJyxcbiAgJ3ZyZGlzcGxheXByZXNlbnRjaGFuZ2UnXG5dO1xuY29uc3QgaHRtbEVsZW1lbnRFdmVudE5hbWVzID0gW1xuICAnYmVmb3JlY29weScsICdiZWZvcmVjdXQnLCAnYmVmb3JlcGFzdGUnLCAnY29weScsICdjdXQnLCAncGFzdGUnLCAnZHJhZ3N0YXJ0JywgJ2xvYWRlbmQnLFxuICAnYW5pbWF0aW9uc3RhcnQnLCAnc2VhcmNoJywgJ3RyYW5zaXRpb25ydW4nLCAndHJhbnNpdGlvbnN0YXJ0JywgJ3dlYmtpdGFuaW1hdGlvbmVuZCcsXG4gICd3ZWJraXRhbmltYXRpb25pdGVyYXRpb24nLCAnd2Via2l0YW5pbWF0aW9uc3RhcnQnLCAnd2Via2l0dHJhbnNpdGlvbmVuZCdcbl07XG5jb25zdCBtZWRpYUVsZW1lbnRFdmVudE5hbWVzID1cbiAgICBbJ2VuY3J5cHRlZCcsICd3YWl0aW5nZm9ya2V5JywgJ21zbmVlZGtleScsICdtb3ppbnRlcnJ1cHRiZWdpbicsICdtb3ppbnRlcnJ1cHRlbmQnXTtcbmNvbnN0IGllRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICdhY3RpdmF0ZScsXG4gICdhZnRlcnVwZGF0ZScsXG4gICdhcmlhcmVxdWVzdCcsXG4gICdiZWZvcmVhY3RpdmF0ZScsXG4gICdiZWZvcmVkZWFjdGl2YXRlJyxcbiAgJ2JlZm9yZWVkaXRmb2N1cycsXG4gICdiZWZvcmV1cGRhdGUnLFxuICAnY2VsbGNoYW5nZScsXG4gICdjb250cm9sc2VsZWN0JyxcbiAgJ2RhdGFhdmFpbGFibGUnLFxuICAnZGF0YXNldGNoYW5nZWQnLFxuICAnZGF0YXNldGNvbXBsZXRlJyxcbiAgJ2Vycm9ydXBkYXRlJyxcbiAgJ2ZpbHRlcmNoYW5nZScsXG4gICdsYXlvdXRjb21wbGV0ZScsXG4gICdsb3NlY2FwdHVyZScsXG4gICdtb3ZlJyxcbiAgJ21vdmVlbmQnLFxuICAnbW92ZXN0YXJ0JyxcbiAgJ3Byb3BlcnR5Y2hhbmdlJyxcbiAgJ3Jlc2l6ZWVuZCcsXG4gICdyZXNpemVzdGFydCcsXG4gICdyb3dlbnRlcicsXG4gICdyb3dleGl0JyxcbiAgJ3Jvd3NkZWxldGUnLFxuICAncm93c2luc2VydGVkJyxcbiAgJ2NvbW1hbmQnLFxuICAnY29tcGFzc25lZWRzY2FsaWJyYXRpb24nLFxuICAnZGVhY3RpdmF0ZScsXG4gICdoZWxwJyxcbiAgJ21zY29udGVudHpvb20nLFxuICAnbXNtYW5pcHVsYXRpb25zdGF0ZWNoYW5nZWQnLFxuICAnbXNnZXN0dXJlY2hhbmdlJyxcbiAgJ21zZ2VzdHVyZWRvdWJsZXRhcCcsXG4gICdtc2dlc3R1cmVlbmQnLFxuICAnbXNnZXN0dXJlaG9sZCcsXG4gICdtc2dlc3R1cmVzdGFydCcsXG4gICdtc2dlc3R1cmV0YXAnLFxuICAnbXNnb3Rwb2ludGVyY2FwdHVyZScsXG4gICdtc2luZXJ0aWFzdGFydCcsXG4gICdtc2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICdtc3BvaW50ZXJjYW5jZWwnLFxuICAnbXNwb2ludGVyZG93bicsXG4gICdtc3BvaW50ZXJlbnRlcicsXG4gICdtc3BvaW50ZXJob3ZlcicsXG4gICdtc3BvaW50ZXJsZWF2ZScsXG4gICdtc3BvaW50ZXJtb3ZlJyxcbiAgJ21zcG9pbnRlcm91dCcsXG4gICdtc3BvaW50ZXJvdmVyJyxcbiAgJ21zcG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJvdXQnLFxuICAnbXNzaXRlbW9kZWp1bXBsaXN0aXRlbXJlbW92ZWQnLFxuICAnbXN0aHVtYm5haWxjbGljaycsXG4gICdzdG9wJyxcbiAgJ3N0b3JhZ2Vjb21taXQnXG5dO1xuY29uc3Qgd2ViZ2xFdmVudE5hbWVzID0gWyd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICd3ZWJnbGNvbnRleHRsb3N0JywgJ3dlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InXTtcbmNvbnN0IGZvcm1FdmVudE5hbWVzID0gWydhdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlZXJyb3InXTtcbmNvbnN0IGRldGFpbEV2ZW50TmFtZXMgPSBbJ3RvZ2dsZSddO1xuY29uc3QgZnJhbWVFdmVudE5hbWVzID0gWydsb2FkJ107XG5jb25zdCBmcmFtZVNldEV2ZW50TmFtZXMgPSBbJ2JsdXInLCAnZXJyb3InLCAnZm9jdXMnLCAnbG9hZCcsICdyZXNpemUnLCAnc2Nyb2xsJywgJ21lc3NhZ2VlcnJvciddO1xuY29uc3QgbWFycXVlZUV2ZW50TmFtZXMgPSBbJ2JvdW5jZScsICdmaW5pc2gnLCAnc3RhcnQnXTtcblxuY29uc3QgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzID0gW1xuICAnbG9hZHN0YXJ0JywgJ3Byb2dyZXNzJywgJ2Fib3J0JywgJ2Vycm9yJywgJ2xvYWQnLCAncHJvZ3Jlc3MnLCAndGltZW91dCcsICdsb2FkZW5kJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnXG5dO1xuY29uc3QgSURCSW5kZXhFdmVudE5hbWVzID1cbiAgICBbJ3VwZ3JhZGVuZWVkZWQnLCAnY29tcGxldGUnLCAnYWJvcnQnLCAnc3VjY2VzcycsICdlcnJvcicsICdibG9ja2VkJywgJ3ZlcnNpb25jaGFuZ2UnLCAnY2xvc2UnXTtcbmNvbnN0IHdlYnNvY2tldEV2ZW50TmFtZXMgPSBbJ2Nsb3NlJywgJ2Vycm9yJywgJ29wZW4nLCAnbWVzc2FnZSddO1xuY29uc3Qgd29ya2VyRXZlbnROYW1lcyA9IFsnZXJyb3InLCAnbWVzc2FnZSddO1xuXG5leHBvcnQgY29uc3QgZXZlbnROYW1lcyA9IGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzLmNvbmNhdChcbiAgICB3ZWJnbEV2ZW50TmFtZXMsIGZvcm1FdmVudE5hbWVzLCBkZXRhaWxFdmVudE5hbWVzLCBkb2N1bWVudEV2ZW50TmFtZXMsIHdpbmRvd0V2ZW50TmFtZXMsXG4gICAgaHRtbEVsZW1lbnRFdmVudE5hbWVzLCBpZUVsZW1lbnRFdmVudE5hbWVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBJZ25vcmVQcm9wZXJ0eSB7XG4gIHRhcmdldDogYW55O1xuICBpZ25vcmVQcm9wZXJ0aWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclByb3BlcnRpZXMoXG4gICAgdGFyZ2V0OiBhbnksIG9uUHJvcGVydGllczogc3RyaW5nW10sIGlnbm9yZVByb3BlcnRpZXM6IElnbm9yZVByb3BlcnR5W10pOiBzdHJpbmdbXSB7XG4gIGlmICghaWdub3JlUHJvcGVydGllcyB8fCBpZ25vcmVQcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gIH1cblxuICBjb25zdCB0aXA6IElnbm9yZVByb3BlcnR5W10gPSBpZ25vcmVQcm9wZXJ0aWVzLmZpbHRlcihpcCA9PiBpcC50YXJnZXQgPT09IHRhcmdldCk7XG4gIGlmICghdGlwIHx8IHRpcC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb25Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0SWdub3JlUHJvcGVydGllczogc3RyaW5nW10gPSB0aXBbMF0uaWdub3JlUHJvcGVydGllcztcbiAgcmV0dXJuIG9uUHJvcGVydGllcy5maWx0ZXIob3AgPT4gdGFyZ2V0SWdub3JlUHJvcGVydGllcy5pbmRleE9mKG9wKSA9PT0gLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoXG4gICAgdGFyZ2V0OiBhbnksIG9uUHJvcGVydGllczogc3RyaW5nW10sIGlnbm9yZVByb3BlcnRpZXM6IElnbm9yZVByb3BlcnR5W10sIHByb3RvdHlwZT86IGFueSkge1xuICAvLyBjaGVjayB3aGV0aGVyIHRhcmdldCBpcyBhdmFpbGFibGUsIHNvbWV0aW1lcyB0YXJnZXQgd2lsbCBiZSB1bmRlZmluZWRcbiAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZpbHRlcmVkUHJvcGVydGllczogc3RyaW5nW10gPSBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgcGF0Y2hPblByb3BlcnRpZXModGFyZ2V0LCBmaWx0ZXJlZFByb3BlcnRpZXMsIHByb3RvdHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGk6IF9ab25lUHJpdmF0ZSwgX2dsb2JhbDogYW55KSB7XG4gIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICgoWm9uZSBhcyBhbnkpW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgLy8gZXZlbnRzIGFyZSBhbHJlYWR5IGJlZW4gcGF0Y2hlZCBieSBsZWdhY3kgcGF0Y2guXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IGlnbm9yZVByb3BlcnRpZXM6IElnbm9yZVByb3BlcnR5W10gPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgY29uc3QgaW50ZXJuYWxXaW5kb3c6IGFueSA9IHdpbmRvdztcbiAgICBjb25zdCBpZ25vcmVFcnJvclByb3BlcnRpZXMgPVxuICAgICAgICBpc0lFID8gW3t0YXJnZXQ6IGludGVybmFsV2luZG93LCBpZ25vcmVQcm9wZXJ0aWVzOiBbJ2Vycm9yJ119XSA6IFtdO1xuICAgIC8vIGluIElFL0VkZ2UsIG9uUHJvcCBub3QgZXhpc3QgaW4gd2luZG93IG9iamVjdCwgYnV0IGluIFdpbmRvd1Byb3RvdHlwZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gcGFzcyBXaW5kb3dQcm90b3R5cGUgdG8gY2hlY2sgb25Qcm9wIGV4aXN0IG9yIG5vdFxuICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKFxuICAgICAgICBpbnRlcm5hbFdpbmRvdywgZXZlbnROYW1lcy5jb25jYXQoWydtZXNzYWdlZXJyb3InXSksXG4gICAgICAgIGlnbm9yZVByb3BlcnRpZXMgPyBpZ25vcmVQcm9wZXJ0aWVzLmNvbmNhdChpZ25vcmVFcnJvclByb3BlcnRpZXMpIDogaWdub3JlUHJvcGVydGllcyxcbiAgICAgICAgT2JqZWN0R2V0UHJvdG90eXBlT2YoaW50ZXJuYWxXaW5kb3cpKTtcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHR5cGVvZiBpbnRlcm5hbFdpbmRvd1snU1ZHRWxlbWVudCddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoaW50ZXJuYWxXaW5kb3dbJ1NWR0VsZW1lbnQnXS5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhFbGVtZW50LnByb3RvdHlwZSwgZXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgbWVkaWFFbGVtZW50RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoXG4gICAgICAgIEhUTUxGcmFtZVNldEVsZW1lbnQucHJvdG90eXBlLCB3aW5kb3dFdmVudE5hbWVzLmNvbmNhdChmcmFtZVNldEV2ZW50TmFtZXMpLFxuICAgICAgICBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhcbiAgICAgICAgSFRNTEJvZHlFbGVtZW50LnByb3RvdHlwZSwgd2luZG93RXZlbnROYW1lcy5jb25jYXQoZnJhbWVTZXRFdmVudE5hbWVzKSwgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEZyYW1lRWxlbWVudC5wcm90b3R5cGUsIGZyYW1lRXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTElGcmFtZUVsZW1lbnQucHJvdG90eXBlLCBmcmFtZUV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuXG4gICAgY29uc3QgSFRNTE1hcnF1ZWVFbGVtZW50ID0gaW50ZXJuYWxXaW5kb3dbJ0hUTUxNYXJxdWVlRWxlbWVudCddO1xuICAgIGlmIChIVE1MTWFycXVlZUVsZW1lbnQpIHtcbiAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxNYXJxdWVlRWxlbWVudC5wcm90b3R5cGUsIG1hcnF1ZWVFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgY29uc3QgV29ya2VyID0gaW50ZXJuYWxXaW5kb3dbJ1dvcmtlciddO1xuICAgIGlmIChXb3JrZXIpIHtcbiAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKFdvcmtlci5wcm90b3R5cGUsIHdvcmtlckV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBYTUxIdHRwUmVxdWVzdCA9IF9nbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0J107XG4gIGlmIChYTUxIdHRwUmVxdWVzdCkge1xuICAgIC8vIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gU2VydmljZVdvcmtlciwgc28gd2UgbmVlZCB0byBjaGVjayBoZXJlXG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCBYTUxIdHRwUmVxdWVzdEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICB9XG4gIGNvbnN0IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KSB7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoXG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUsIFhNTEh0dHBSZXF1ZXN0RXZlbnROYW1lcyxcbiAgICAgICAgaWdub3JlUHJvcGVydGllcyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBJREJJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJJbmRleC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCUmVxdWVzdC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCT3BlbkRCUmVxdWVzdC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCRGF0YWJhc2UucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJDdXJzb3IucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICB9XG4gIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKFdlYlNvY2tldC5wcm90b3R5cGUsIHdlYnNvY2tldEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICB9XG59XG4iXX0=