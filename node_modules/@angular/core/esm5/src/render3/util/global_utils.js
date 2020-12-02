/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined } from '../../util/assert';
import { global } from '../../util/global';
import { applyChanges } from './change_detection_utils';
import { getComponent, getContext, getDirectives, getHostElement, getInjector, getListeners, getOwningComponent, getRootComponents } from './discovery_utils';
/**
 * This file introduces series of globally accessible debug tools
 * to allow for the Angular debugging story to function.
 *
 * To see this in action run the following command:
 *
 *   bazel run --config=ivy
 *   //packages/core/test/bundling/todo:devserver
 *
 *  Then load `localhost:5432` and start using the console tools.
 */
/**
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 * */
export var GLOBAL_PUBLISH_EXPANDO_KEY = 'ng';
var _published = false;
/**
 * Publishes a collection of default debug tools onto`window.ng`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 */
export function publishDefaultGlobalUtils() {
    if (!_published) {
        _published = true;
        publishGlobalUtil('getComponent', getComponent);
        publishGlobalUtil('getContext', getContext);
        publishGlobalUtil('getListeners', getListeners);
        publishGlobalUtil('getOwningComponent', getOwningComponent);
        publishGlobalUtil('getHostElement', getHostElement);
        publishGlobalUtil('getInjector', getInjector);
        publishGlobalUtil('getRootComponents', getRootComponents);
        publishGlobalUtil('getDirectives', getDirectives);
        publishGlobalUtil('applyChanges', applyChanges);
    }
}
/**
 * Publishes the given function to `window.ng` so that it can be
 * used from the browser console when an application is not in production.
 */
export function publishGlobalUtil(name, fn) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for AngularJS (via `goog.provide('ng....')`).
        var w = global;
        ngDevMode && assertDefined(fn, 'function not defined');
        if (w) {
            var container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
            if (!container) {
                container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
            }
            container[name] = fn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy91dGlsL2dsb2JhbF91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUk1Sjs7Ozs7Ozs7OztHQVVHO0FBRUg7OztLQUdLO0FBQ0wsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDO0FBRS9DLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN2Qjs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1QyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEQsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMxRCxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEQsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQU1EOzs7R0FHRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsRUFBWTtJQUMxRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNoRCwwRUFBMEU7UUFDMUUsZ0dBQWdHO1FBQ2hHLDBGQUEwRjtRQUMxRiw4REFBOEQ7UUFDOUQsSUFBTSxDQUFDLEdBQUcsTUFBdUMsQ0FBQztRQUNsRCxTQUFTLElBQUksYUFBYSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2hEO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7YXNzZXJ0RGVmaW5lZH0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtnbG9iYWx9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYmFsJztcbmltcG9ydCB7YXBwbHlDaGFuZ2VzfSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb25fdXRpbHMnO1xuaW1wb3J0IHtnZXRDb21wb25lbnQsIGdldENvbnRleHQsIGdldERpcmVjdGl2ZXMsIGdldEhvc3RFbGVtZW50LCBnZXRJbmplY3RvciwgZ2V0TGlzdGVuZXJzLCBnZXRPd25pbmdDb21wb25lbnQsIGdldFJvb3RDb21wb25lbnRzfSBmcm9tICcuL2Rpc2NvdmVyeV91dGlscyc7XG5cblxuXG4vKipcbiAqIFRoaXMgZmlsZSBpbnRyb2R1Y2VzIHNlcmllcyBvZiBnbG9iYWxseSBhY2Nlc3NpYmxlIGRlYnVnIHRvb2xzXG4gKiB0byBhbGxvdyBmb3IgdGhlIEFuZ3VsYXIgZGVidWdnaW5nIHN0b3J5IHRvIGZ1bmN0aW9uLlxuICpcbiAqIFRvIHNlZSB0aGlzIGluIGFjdGlvbiBydW4gdGhlIGZvbGxvd2luZyBjb21tYW5kOlxuICpcbiAqICAgYmF6ZWwgcnVuIC0tY29uZmlnPWl2eVxuICogICAvL3BhY2thZ2VzL2NvcmUvdGVzdC9idW5kbGluZy90b2RvOmRldnNlcnZlclxuICpcbiAqICBUaGVuIGxvYWQgYGxvY2FsaG9zdDo1NDMyYCBhbmQgc3RhcnQgdXNpbmcgdGhlIGNvbnNvbGUgdG9vbHMuXG4gKi9cblxuLyoqXG4gKiBUaGlzIHZhbHVlIHJlZmxlY3RzIHRoZSBwcm9wZXJ0eSBvbiB0aGUgd2luZG93IHdoZXJlIHRoZSBkZXZcbiAqIHRvb2xzIGFyZSBwYXRjaGVkICh3aW5kb3cubmcpLlxuICogKi9cbmV4cG9ydCBjb25zdCBHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWSA9ICduZyc7XG5cbmxldCBfcHVibGlzaGVkID0gZmFsc2U7XG4vKipcbiAqIFB1Ymxpc2hlcyBhIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCBkZWJ1ZyB0b29scyBvbnRvYHdpbmRvdy5uZ2AuXG4gKlxuICogVGhlc2UgZnVuY3Rpb25zIGFyZSBhdmFpbGFibGUgZ2xvYmFsbHkgd2hlbiBBbmd1bGFyIGlzIGluIGRldmVsb3BtZW50XG4gKiBtb2RlIGFuZCBhcmUgYXV0b21hdGljYWxseSBzdHJpcHBlZCBhd2F5IGZyb20gcHJvZCBtb2RlIGlzIG9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaERlZmF1bHRHbG9iYWxVdGlscygpIHtcbiAgaWYgKCFfcHVibGlzaGVkKSB7XG4gICAgX3B1Ymxpc2hlZCA9IHRydWU7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldENvbXBvbmVudCcsIGdldENvbXBvbmVudCk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldENvbnRleHQnLCBnZXRDb250ZXh0KTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0TGlzdGVuZXJzJywgZ2V0TGlzdGVuZXJzKTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0T3duaW5nQ29tcG9uZW50JywgZ2V0T3duaW5nQ29tcG9uZW50KTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0SG9zdEVsZW1lbnQnLCBnZXRIb3N0RWxlbWVudCk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldEluamVjdG9yJywgZ2V0SW5qZWN0b3IpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXRSb290Q29tcG9uZW50cycsIGdldFJvb3RDb21wb25lbnRzKTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0RGlyZWN0aXZlcycsIGdldERpcmVjdGl2ZXMpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdhcHBseUNoYW5nZXMnLCBhcHBseUNoYW5nZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgR2xvYmFsRGV2TW9kZUNvbnRhaW5lciA9IHtcbiAgW0dMT0JBTF9QVUJMSVNIX0VYUEFORE9fS0VZXToge1tmbk5hbWU6IHN0cmluZ106IEZ1bmN0aW9ufTtcbn07XG5cbi8qKlxuICogUHVibGlzaGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBgd2luZG93Lm5nYCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBmcm9tIHRoZSBicm93c2VyIGNvbnNvbGUgd2hlbiBhbiBhcHBsaWNhdGlvbiBpcyBub3QgaW4gcHJvZHVjdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hHbG9iYWxVdGlsKG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmICh0eXBlb2YgQ09NUElMRUQgPT09ICd1bmRlZmluZWQnIHx8ICFDT01QSUxFRCkge1xuICAgIC8vIE5vdGU6IHdlIGNhbid0IGV4cG9ydCBgbmdgIHdoZW4gdXNpbmcgY2xvc3VyZSBlbmhhbmNlZCBvcHRpbWl6YXRpb24gYXM6XG4gICAgLy8gLSBjbG9zdXJlIGRlY2xhcmVzIGdsb2JhbHMgaXRzZWxmIGZvciBtaW5pZmllZCBuYW1lcywgd2hpY2ggc29tZXRpbWVzIGNsb2JiZXIgb3VyIGBuZ2AgZ2xvYmFsXG4gICAgLy8gLSB3ZSBjYW4ndCBkZWNsYXJlIGEgY2xvc3VyZSBleHRlcm4gYXMgdGhlIG5hbWVzcGFjZSBgbmdgIGlzIGFscmVhZHkgdXNlZCB3aXRoaW4gR29vZ2xlXG4gICAgLy8gICBmb3IgdHlwaW5ncyBmb3IgQW5ndWxhckpTICh2aWEgYGdvb2cucHJvdmlkZSgnbmcuLi4uJylgKS5cbiAgICBjb25zdCB3ID0gZ2xvYmFsIGFzIGFueSBhcyBHbG9iYWxEZXZNb2RlQ29udGFpbmVyO1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKGZuLCAnZnVuY3Rpb24gbm90IGRlZmluZWQnKTtcbiAgICBpZiAodykge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IHdbR0xPQkFMX1BVQkxJU0hfRVhQQU5ET19LRVldO1xuICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyID0gd1tHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lcltuYW1lXSA9IGZuO1xuICAgIH1cbiAgfVxufVxuIl19