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
        define("zone.js/lib/browser/event-target-legacy", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function eventTargetLegacyPatch(_global, api) {
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
        var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
            .split(',');
        var EVENT_TARGET = 'EventTarget';
        var apis = [];
        var isWtf = _global['wtf'];
        var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
        if (isWtf) {
            // Workaround for: https://github.com/google/tracing-framework/issues/555
            apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
        }
        else if (_global[EVENT_TARGET]) {
            apis.push(EVENT_TARGET);
        }
        else {
            // Note: EventTarget is not available in all browsers,
            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
            apis = NO_EVENT_TARGET;
        }
        var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
        var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
        var ieOrEdge = api.isIEOrEdge();
        var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
        var FUNCTION_WRAPPER = '[object FunctionWrapper]';
        var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
        var pointerEventsMap = {
            'MSPointerCancel': 'pointercancel',
            'MSPointerDown': 'pointerdown',
            'MSPointerEnter': 'pointerenter',
            'MSPointerHover': 'pointerhover',
            'MSPointerLeave': 'pointerleave',
            'MSPointerMove': 'pointermove',
            'MSPointerOut': 'pointerout',
            'MSPointerOver': 'pointerover',
            'MSPointerUp': 'pointerup'
        };
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        //  predefine all task.source string
        for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
            var target = WTF_ISSUE_555_ARRAY[i];
            var targets = globalSources[target] = {};
            for (var j = 0; j < eventNames.length; j++) {
                var eventName = eventNames[j];
                targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
            }
        }
        var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
            if (!isDisableIECheck && ieOrEdge) {
                if (isEnableCrossContextCheck) {
                    try {
                        var testString = delegate.toString();
                        if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                            nativeDelegate.apply(target, args);
                            return false;
                        }
                    }
                    catch (error) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                else {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
            }
            else if (isEnableCrossContextCheck) {
                try {
                    delegate.toString();
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            return true;
        };
        var apiTypes = [];
        for (var i = 0; i < apis.length; i++) {
            var type = _global[apis[i]];
            apiTypes.push(type && type.prototype);
        }
        // vh is validateHandler to check event handler
        // is valid or not(for security check)
        api.patchEventTarget(_global, apiTypes, {
            vh: checkIEAndCrossContext,
            transferEventName: function (eventName) {
                var pointerEventName = pointerEventsMap[eventName];
                return pointerEventName || eventName;
            }
        });
        Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
        return true;
    }
    exports.eventTargetLegacyPatch = eventTargetLegacyPatch;
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }
    exports.patchEvent = patchEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtdGFyZ2V0LWxlZ2FjeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2Jyb3dzZXIvZXZlbnQtdGFyZ2V0LWxlZ2FjeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILFNBQWdCLHNCQUFzQixDQUFDLE9BQVksRUFBRSxHQUFpQjtRQUM5RCxJQUFBLDJCQUNzQixFQURyQiwwQkFBVSxFQUFFLGdDQUFhLEVBQUUsOENBQW9CLEVBQUUsc0JBQVEsRUFBRSx3QkFBUyxFQUFFLDBDQUNqRCxDQUFDO1FBQzdCLElBQU0sYUFBYSxHQUNmLDJhQUEyYSxDQUFDO1FBQ2hiLElBQU0sZUFBZSxHQUNqQiwrV0FBK1c7YUFDMVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7UUFDckIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLEtBQUssRUFBRTtZQUNULHlFQUF5RTtZQUN6RSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQXRCLENBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdkY7YUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsNEZBQTRGO1lBQzVGLElBQUksR0FBRyxlQUFlLENBQUM7U0FDeEI7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QUFDLENBQUM7UUFDRixJQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFuSEQsd0RBbUhDO0lBRUQsU0FBZ0IsVUFBVSxDQUFDLE1BQVcsRUFBRSxHQUFpQjtRQUN2RCxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goX2dsb2JhbDogYW55LCBhcGk6IF9ab25lUHJpdmF0ZSkge1xuICBjb25zdCB7ZXZlbnROYW1lcywgZ2xvYmFsU291cmNlcywgem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSLCBGQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWH0gPVxuICAgICAgYXBpLmdldEdsb2JhbE9iamVjdHMoKSAhO1xuICBjb25zdCBXVEZfSVNTVUVfNTU1ID1cbiAgICAgICdBbmNob3IsQXJlYSxBdWRpbyxCUixCYXNlLEJhc2VGb250LEJvZHksQnV0dG9uLENhbnZhcyxDb250ZW50LERMaXN0LERpcmVjdG9yeSxEaXYsRW1iZWQsRmllbGRTZXQsRm9udCxGb3JtLEZyYW1lLEZyYW1lU2V0LEhSLEhlYWQsSGVhZGluZyxIdG1sLElGcmFtZSxJbWFnZSxJbnB1dCxLZXlnZW4sTEksTGFiZWwsTGVnZW5kLExpbmssTWFwLE1hcnF1ZWUsTWVkaWEsTWVudSxNZXRhLE1ldGVyLE1vZCxPTGlzdCxPYmplY3QsT3B0R3JvdXAsT3B0aW9uLE91dHB1dCxQYXJhZ3JhcGgsUHJlLFByb2dyZXNzLFF1b3RlLFNjcmlwdCxTZWxlY3QsU291cmNlLFNwYW4sU3R5bGUsVGFibGVDYXB0aW9uLFRhYmxlQ2VsbCxUYWJsZUNvbCxUYWJsZSxUYWJsZVJvdyxUYWJsZVNlY3Rpb24sVGV4dEFyZWEsVGl0bGUsVHJhY2ssVUxpc3QsVW5rbm93bixWaWRlbyc7XG4gIGNvbnN0IE5PX0VWRU5UX1RBUkdFVCA9XG4gICAgICAnQXBwbGljYXRpb25DYWNoZSxFdmVudFNvdXJjZSxGaWxlUmVhZGVyLElucHV0TWV0aG9kQ29udGV4dCxNZWRpYUNvbnRyb2xsZXIsTWVzc2FnZVBvcnQsTm9kZSxQZXJmb3JtYW5jZSxTVkdFbGVtZW50SW5zdGFuY2UsU2hhcmVkV29ya2VyLFRleHRUcmFjayxUZXh0VHJhY2tDdWUsVGV4dFRyYWNrTGlzdCxXZWJLaXROYW1lZEZsb3csV2luZG93LFdvcmtlcixXb3JrZXJHbG9iYWxTY29wZSxYTUxIdHRwUmVxdWVzdCxYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LFhNTEh0dHBSZXF1ZXN0VXBsb2FkLElEQlJlcXVlc3QsSURCT3BlbkRCUmVxdWVzdCxJREJEYXRhYmFzZSxJREJUcmFuc2FjdGlvbixJREJDdXJzb3IsREJJbmRleCxXZWJTb2NrZXQnXG4gICAgICAgICAgLnNwbGl0KCcsJyk7XG4gIGNvbnN0IEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG5cbiAgbGV0IGFwaXM6IGFueVtdID0gW107XG4gIGNvbnN0IGlzV3RmID0gX2dsb2JhbFsnd3RmJ107XG4gIGNvbnN0IFdURl9JU1NVRV81NTVfQVJSQVkgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJyk7XG5cbiAgaWYgKGlzV3RmKSB7XG4gICAgLy8gV29ya2Fyb3VuZCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2luZy1mcmFtZXdvcmsvaXNzdWVzLzU1NVxuICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1X0FSUkFZLm1hcCgodikgPT4gJ0hUTUwnICsgdiArICdFbGVtZW50JykuY29uY2F0KE5PX0VWRU5UX1RBUkdFVCk7XG4gIH0gZWxzZSBpZiAoX2dsb2JhbFtFVkVOVF9UQVJHRVRdKSB7XG4gICAgYXBpcy5wdXNoKEVWRU5UX1RBUkdFVCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcbiAgICBhcGlzID0gTk9fRVZFTlRfVEFSR0VUO1xuICB9XG5cbiAgY29uc3QgaXNEaXNhYmxlSUVDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9kaXNhYmxlX0lFX2NoZWNrJ10gfHwgZmFsc2U7XG4gIGNvbnN0IGlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2sgPSBfZ2xvYmFsWydfX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2snXSB8fCBmYWxzZTtcbiAgY29uc3QgaWVPckVkZ2UgPSBhcGkuaXNJRU9yRWRnZSgpO1xuXG4gIGNvbnN0IEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLmFkZEV2ZW50TGlzdGVuZXI6JztcbiAgY29uc3QgRlVOQ1RJT05fV1JBUFBFUiA9ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICBjb25zdCBCUk9XU0VSX1RPT0xTID0gJ2Z1bmN0aW9uIF9fQlJPV1NFUlRPT0xTX0NPTlNPTEVfU0FGRUZVTkMoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG5cbiAgY29uc3QgcG9pbnRlckV2ZW50c01hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgJ01TUG9pbnRlckNhbmNlbCc6ICdwb2ludGVyY2FuY2VsJyxcbiAgICAnTVNQb2ludGVyRG93bic6ICdwb2ludGVyZG93bicsXG4gICAgJ01TUG9pbnRlckVudGVyJzogJ3BvaW50ZXJlbnRlcicsXG4gICAgJ01TUG9pbnRlckhvdmVyJzogJ3BvaW50ZXJob3ZlcicsXG4gICAgJ01TUG9pbnRlckxlYXZlJzogJ3BvaW50ZXJsZWF2ZScsXG4gICAgJ01TUG9pbnRlck1vdmUnOiAncG9pbnRlcm1vdmUnLFxuICAgICdNU1BvaW50ZXJPdXQnOiAncG9pbnRlcm91dCcsXG4gICAgJ01TUG9pbnRlck92ZXInOiAncG9pbnRlcm92ZXInLFxuICAgICdNU1BvaW50ZXJVcCc6ICdwb2ludGVydXAnXG4gIH07XG5cbiAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICBjb25zdCBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICBjb25zdCB0cnVlRXZlbnROYW1lID0gZXZlbnROYW1lICsgVFJVRV9TVFI7XG4gICAgY29uc3Qgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgY29uc3Qgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gIH1cblxuICAvLyAgcHJlZGVmaW5lIGFsbCB0YXNrLnNvdXJjZSBzdHJpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBXVEZfSVNTVUVfNTU1X0FSUkFZLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBXVEZfSVNTVUVfNTU1X0FSUkFZW2ldO1xuICAgIGNvbnN0IHRhcmdldHM6IGFueSA9IGdsb2JhbFNvdXJjZXNbdGFyZ2V0XSA9IHt9O1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZXZlbnROYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnROYW1lc1tqXTtcbiAgICAgIHRhcmdldHNbZXZlbnROYW1lXSA9IHRhcmdldCArIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgKyBldmVudE5hbWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJRUFuZENyb3NzQ29udGV4dCA9IGZ1bmN0aW9uKFxuICAgICAgbmF0aXZlRGVsZWdhdGU6IGFueSwgZGVsZWdhdGU6IGFueSwgdGFyZ2V0OiBhbnksIGFyZ3M6IGFueSkge1xuICAgIGlmICghaXNEaXNhYmxlSUVDaGVjayAmJiBpZU9yRWRnZSkge1xuICAgICAgaWYgKGlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAoKHRlc3RTdHJpbmcgPT09IEZVTkNUSU9OX1dSQVBQRVIgfHwgdGVzdFN0cmluZyA9PSBCUk9XU0VSX1RPT0xTKSkge1xuICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlc3RTdHJpbmcgPSBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgICBpZiAoKHRlc3RTdHJpbmcgPT09IEZVTkNUSU9OX1dSQVBQRVIgfHwgdGVzdFN0cmluZyA9PSBCUk9XU0VSX1RPT0xTKSkge1xuICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhcGlUeXBlczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgYXBpVHlwZXMucHVzaCh0eXBlICYmIHR5cGUucHJvdG90eXBlKTtcbiAgfVxuICAvLyB2aCBpcyB2YWxpZGF0ZUhhbmRsZXIgdG8gY2hlY2sgZXZlbnQgaGFuZGxlclxuICAvLyBpcyB2YWxpZCBvciBub3QoZm9yIHNlY3VyaXR5IGNoZWNrKVxuICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGlUeXBlcywge1xuICAgIHZoOiBjaGVja0lFQW5kQ3Jvc3NDb250ZXh0LFxuICAgIHRyYW5zZmVyRXZlbnROYW1lOiAoZXZlbnROYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ZXJFdmVudE5hbWUgPSBwb2ludGVyRXZlbnRzTWFwW2V2ZW50TmFtZV07XG4gICAgICByZXR1cm4gcG9pbnRlckV2ZW50TmFtZSB8fCBldmVudE5hbWU7XG4gICAgfVxuICB9KTtcbiAgKFpvbmUgYXMgYW55KVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldID0gISFfZ2xvYmFsW0VWRU5UX1RBUkdFVF07XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWw6IGFueSwgYXBpOiBfWm9uZVByaXZhdGUpIHtcbiAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xufVxuIl19