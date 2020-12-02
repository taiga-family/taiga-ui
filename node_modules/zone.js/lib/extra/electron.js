"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('electron', function (global, Zone, api) {
    function patchArguments(target, name, source) {
        return api.patchMethod(target, name, function (delegate) { return function (self, args) {
            return delegate && delegate.apply(self, api.bindArguments(args, source));
        }; });
    }
    var _a = require('electron'), desktopCapturer = _a.desktopCapturer, shell = _a.shell, CallbacksRegistry = _a.CallbacksRegistry, ipcRenderer = _a.ipcRenderer;
    // patch api in renderer process directly
    // desktopCapturer
    if (desktopCapturer) {
        patchArguments(desktopCapturer, 'getSources', 'electron.desktopCapturer.getSources');
    }
    // shell
    if (shell) {
        patchArguments(shell, 'openExternal', 'electron.shell.openExternal');
    }
    // patch api in main process through CallbackRegistry
    if (!CallbacksRegistry) {
        if (ipcRenderer) {
            patchArguments(ipcRenderer, 'on', 'ipcRenderer.on');
        }
        return;
    }
    patchArguments(CallbacksRegistry.prototype, 'add', 'CallbackRegistry.add');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9leHRyYS9lbGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQzNFLFNBQVMsY0FBYyxDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsTUFBYztRQUMvRCxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFDLFFBQWtCLElBQUssT0FBQSxVQUFDLElBQVMsRUFBRSxJQUFXO1lBQ2xGLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxFQUY0RCxDQUU1RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0ssSUFBQSx3QkFBOEUsRUFBN0Usb0NBQWUsRUFBRSxnQkFBSyxFQUFFLHdDQUFpQixFQUFFLDRCQUFrQyxDQUFDO0lBQ3JGLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsSUFBSSxlQUFlLEVBQUU7UUFDbkIsY0FBYyxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUscUNBQXFDLENBQUMsQ0FBQztLQUN0RjtJQUNELFFBQVE7SUFDUixJQUFJLEtBQUssRUFBRTtRQUNULGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLDZCQUE2QixDQUFDLENBQUM7S0FDdEU7SUFFRCxxREFBcUQ7SUFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3RCLElBQUksV0FBVyxFQUFFO1lBQ2YsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU87S0FDUjtJQUVELGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDN0UsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnZWxlY3Ryb24nLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlLCBhcGk6IF9ab25lUHJpdmF0ZSkgPT4ge1xuICBmdW5jdGlvbiBwYXRjaEFyZ3VtZW50cyh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZyk6IEZ1bmN0aW9ufG51bGwge1xuICAgIHJldHVybiBhcGkucGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFwaS5iaW5kQXJndW1lbnRzKGFyZ3MsIHNvdXJjZSkpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHtkZXNrdG9wQ2FwdHVyZXIsIHNoZWxsLCBDYWxsYmFja3NSZWdpc3RyeSwgaXBjUmVuZGVyZXJ9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbiAgLy8gcGF0Y2ggYXBpIGluIHJlbmRlcmVyIHByb2Nlc3MgZGlyZWN0bHlcbiAgLy8gZGVza3RvcENhcHR1cmVyXG4gIGlmIChkZXNrdG9wQ2FwdHVyZXIpIHtcbiAgICBwYXRjaEFyZ3VtZW50cyhkZXNrdG9wQ2FwdHVyZXIsICdnZXRTb3VyY2VzJywgJ2VsZWN0cm9uLmRlc2t0b3BDYXB0dXJlci5nZXRTb3VyY2VzJyk7XG4gIH1cbiAgLy8gc2hlbGxcbiAgaWYgKHNoZWxsKSB7XG4gICAgcGF0Y2hBcmd1bWVudHMoc2hlbGwsICdvcGVuRXh0ZXJuYWwnLCAnZWxlY3Ryb24uc2hlbGwub3BlbkV4dGVybmFsJyk7XG4gIH1cblxuICAvLyBwYXRjaCBhcGkgaW4gbWFpbiBwcm9jZXNzIHRocm91Z2ggQ2FsbGJhY2tSZWdpc3RyeVxuICBpZiAoIUNhbGxiYWNrc1JlZ2lzdHJ5KSB7XG4gICAgaWYgKGlwY1JlbmRlcmVyKSB7XG4gICAgICBwYXRjaEFyZ3VtZW50cyhpcGNSZW5kZXJlciwgJ29uJywgJ2lwY1JlbmRlcmVyLm9uJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhdGNoQXJndW1lbnRzKENhbGxiYWNrc1JlZ2lzdHJ5LnByb3RvdHlwZSwgJ2FkZCcsICdDYWxsYmFja1JlZ2lzdHJ5LmFkZCcpO1xufSk7XG4iXX0=