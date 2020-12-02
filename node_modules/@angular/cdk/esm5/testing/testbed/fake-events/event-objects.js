/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
/**
 * Creates a browser MouseEvent with the specified options.
 * @docs-private
 */
export function createMouseEvent(type, clientX, clientY, button) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    if (button === void 0) { button = 0; }
    var event = document.createEvent('MouseEvent');
    var originalPreventDefault = event.preventDefault.bind(event);
    // Note: We cannot determine the position of the mouse event based on the screen
    // because the dimensions and position of the browser window are not available
    // To provide reasonable `screenX` and `screenY` coordinates, we simply use the
    // client coordinates as if the browser is opened in fullscreen.
    var screenX = clientX;
    var screenY = clientY;
    event.initMouseEvent(type, 
    /* canBubble */ true, 
    /* cancelable */ true, 
    /* view */ window, 
    /* detail */ 0, 
    /* screenX */ screenX, 
    /* screenY */ screenY, 
    /* clientX */ clientX, 
    /* clientY */ clientY, 
    /* ctrlKey */ false, 
    /* altKey */ false, 
    /* shiftKey */ false, 
    /* metaKey */ false, 
    /* button */ button, 
    /* relatedTarget */ null);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: function () { return 1; } });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; } });
        return originalPreventDefault();
    };
    return event;
}
/**
 * Creates a browser `PointerEvent` with the specified options. Pointer events
 * by default will appear as if they are the primary pointer of their type.
 * https://www.w3.org/TR/pointerevents2/#dom-pointerevent-isprimary.
 *
 * For example, if pointer events for a multi-touch interaction are created, the non-primary
 * pointer touches would need to be represented by non-primary pointer events.
 *
 * @docs-private
 */
export function createPointerEvent(type, clientX, clientY, options) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    if (options === void 0) { options = { isPrimary: true }; }
    return new PointerEvent(type, __assign({ bubbles: true, cancelable: true, view: window, clientX: clientX,
        clientY: clientY }, options));
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @docs-private
 */
export function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    var event = document.createEvent('UIEvent');
    var touchDetails = { pageX: pageX, pageY: pageY };
    // TS3.6 removes the initUIEvent method and suggests porting to "new UIEvent()".
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @docs-private
 */
export function createKeyboardEvent(type, keyCode, key, target, modifiers) {
    if (keyCode === void 0) { keyCode = 0; }
    if (key === void 0) { key = ''; }
    if (modifiers === void 0) { modifiers = {}; }
    var event = document.createEvent('KeyboardEvent');
    var originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, modifiers.control, modifiers.alt, modifiers.shift, modifiers.meta, keyCode);
    }
    else {
        // `initKeyboardEvent` expects to receive modifiers as a whitespace-delimited string
        // See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyboardEvent
        var modifiersList = '';
        if (modifiers.control) {
            modifiersList += 'Control ';
        }
        if (modifiers.alt) {
            modifiersList += 'Alt ';
        }
        if (modifiers.shift) {
            modifiersList += 'Shift ';
        }
        if (modifiers.meta) {
            modifiersList += 'Meta ';
        }
        event.initKeyboardEvent(type, true, /* canBubble */ true, /* cancelable */ window, /* view */ 0, /* char */ key, /* key */ 0, /* location */ modifiersList.trim(), /* modifiersList */ false /* repeat */);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: function () { return keyCode; } },
        key: { get: function () { return key; } },
        target: { get: function () { return target; } },
        ctrlKey: { get: function () { return !!modifiers.control; } },
        altKey: { get: function () { return !!modifiers.alt; } },
        shiftKey: { get: function () { return !!modifiers.shift; } },
        metaKey: { get: function () { return !!modifiers.meta; } }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; } });
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @docs-private
 */
export function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = false; }
    if (cancelable === void 0) { cancelable = true; }
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGVzdGluZy90ZXN0YmVkL2Zha2UtZXZlbnRzL2V2ZW50LW9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlIOzs7R0FHRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsT0FBVyxFQUFFLE9BQVcsRUFBRSxNQUFVO0lBQXBDLHdCQUFBLEVBQUEsV0FBVztJQUFFLHdCQUFBLEVBQUEsV0FBVztJQUFFLHVCQUFBLEVBQUEsVUFBVTtJQUNqRixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELElBQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEUsZ0ZBQWdGO0lBQ2hGLDhFQUE4RTtJQUM5RSwrRUFBK0U7SUFDL0UsZ0VBQWdFO0lBQ2hFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFeEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJO0lBQ3ZCLGVBQWUsQ0FBQyxJQUFJO0lBQ3BCLGdCQUFnQixDQUFDLElBQUk7SUFDckIsVUFBVSxDQUFDLE1BQU07SUFDakIsWUFBWSxDQUFDLENBQUM7SUFDZCxhQUFhLENBQUMsT0FBTztJQUNyQixhQUFhLENBQUMsT0FBTztJQUNyQixhQUFhLENBQUMsT0FBTztJQUNyQixhQUFhLENBQUMsT0FBTztJQUNyQixhQUFhLENBQUMsS0FBSztJQUNuQixZQUFZLENBQUMsS0FBSztJQUNsQixjQUFjLENBQUMsS0FBSztJQUNwQixhQUFhLENBQUMsS0FBSztJQUNuQixZQUFZLENBQUMsTUFBTTtJQUNuQixtQkFBbUIsQ0FBQyxJ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LEVBQUU7UUFDdEMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQU0sT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsRUFBRTtRQUMxQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsY0FBTSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFoQixDQUFnQixFQUFFO0tBQ3pDLENBQUMsQ0FBQztJQUVILG9GQUFvRjtJQUNwRixLQUFLLENBQUMsY0FBYyxHQUFHO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxVQUFpQjtJQUFwQywwQkFBQSxFQUFBLGlCQUFpQjtJQUFFLDJCQUFBLEVBQUEsaUJBQWlCO0lBQ2hGLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge01vZGlmaWVyS2V5c30gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBicm93c2VyIE1vdXNlRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3VzZUV2ZW50KHR5cGU6IHN0cmluZywgY2xpZW50WCA9IDAsIGNsaWVudFkgPSAwLCBidXR0b24gPSAwKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgY29uc3Qgb3JpZ2luYWxQcmV2ZW50RGVmYXVsdCA9IGV2ZW50LnByZXZlbnREZWZhdWx0LmJpbmQoZXZlbnQpO1xuXG4gIC8vIE5vdGU6IFdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBldmVudCBiYXNlZCBvbiB0aGUgc2NyZWVuXG4gIC8vIGJlY2F1c2UgdGhlIGRpbWVuc2lvbnMgYW5kIHBvc2l0aW9uIG9mIHRoZSBicm93c2VyIHdpbmRvdyBhcmUgbm90IGF2YWlsYWJsZVxuICAvLyBUbyBwcm92aWRlIHJlYXNvbmFibGUgYHNjcmVlblhgIGFuZCBgc2NyZWVuWWAgY29vcmRpbmF0ZXMsIHdlIHNpbXBseSB1c2UgdGhlXG4gIC8vIGNsaWVudCBjb29yZGluYXRlcyBhcyBpZiB0aGUgYnJvd3NlciBpcyBvcGVuZWQgaW4gZnVsbHNjcmVlbi5cbiAgY29uc3Qgc2NyZWVuWCA9IGNsaWVudFg7XG4gIGNvbnN0IHNjcmVlblkgPSBjbGllbnRZO1xuXG4gIGV2ZW50LmluaXRNb3VzZUV2ZW50KHR5cGUsXG4gICAgLyogY2FuQnViYmxlICovIHRydWUsXG4gICAgLyogY2FuY2VsYWJsZSAqLyB0cnVlLFxuICAgIC8qIHZpZXcgKi8gd2luZG93LFxuICAgIC8qIGRldGFpbCAqLyAwLFxuICAgIC8qIHNjcmVlblggKi8gc2NyZWVuWCxcbiAgICAvKiBzY3JlZW5ZICovIHNjcmVlblksXG4gICAgLyogY2xpZW50WCAqLyBjbGllbnRYLFxuICAgIC8qIGNsaWVudFkgKi8gY2xpZW50WSxcbiAgICAvKiBjdHJsS2V5ICovIGZhbHNlLFxuICAgIC8qIGFsdEtleSAqLyBmYWxzZSxcbiAgICAvKiBzaGlmdEtleSAqLyBmYWxzZSxcbiAgICAvKiBtZXRhS2V5ICovIGZhbHNlLFxuICAgIC8qIGJ1dHRvbiAqLyBidXR0b24sXG4gICAgLyogcmVsYXRlZFRhcmdldCAqLyBudWxsKTtcblxuICAvLyBgaW5pdE1vdXNlRXZlbnRgIGRvZXNuJ3QgYWxsb3cgdXMgdG8gcGFzcyB0aGUgYGJ1dHRvbnNgIGFuZFxuICAvLyBkZWZhdWx0cyBpdCB0byAwIHdoaWNoIGxvb2tzIGxpa2UgYSBmYWtlIGV2ZW50LlxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdidXR0b25zJywge2dldDogKCkgPT4gMX0pO1xuXG4gIC8vIElFIHdvbid0IHNldCBgZGVmYXVsdFByZXZlbnRlZGAgb24gc3ludGhldGljIGV2ZW50cyBzbyB3ZSBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5LlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7IGdldDogKCkgPT4gdHJ1ZSB9KTtcbiAgICByZXR1cm4gb3JpZ2luYWxQcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJvd3NlciBgUG9pbnRlckV2ZW50YCB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy4gUG9pbnRlciBldmVudHNcbiAqIGJ5IGRlZmF1bHQgd2lsbCBhcHBlYXIgYXMgaWYgdGhleSBhcmUgdGhlIHByaW1hcnkgcG9pbnRlciBvZiB0aGVpciB0eXBlLlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL3BvaW50ZXJldmVudHMyLyNkb20tcG9pbnRlcmV2ZW50LWlzcHJpbWFyeS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgcG9pbnRlciBldmVudHMgZm9yIGEgbXVsdGktdG91Y2ggaW50ZXJhY3Rpb24gYXJlIGNyZWF0ZWQsIHRoZSBub24tcHJpbWFyeVxuICogcG9pbnRlciB0b3VjaGVzIHdvdWxkIG5lZWQgdG8gYmUgcmVwcmVzZW50ZWQgYnkgbm9uLXByaW1hcnkgcG9pbnRlciBldmVudHMuXG4gKlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9pbnRlckV2ZW50KHR5cGU6IHN0cmluZywgY2xpZW50WCA9IDAsIGNsaWVudFkgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBQb2ludGVyRXZlbnRJbml0ID0ge2lzUHJpbWFyeTogdHJ1ZX0pIHtcbiAgcmV0dXJuIG5ldyBQb2ludGVyRXZlbnQodHlwZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICB2aWV3OiB3aW5kb3csXG4gICAgY2xpZW50WCxcbiAgICBjbGllbnRZLFxuICAgIC4uLm9wdGlvbnMsXG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBicm93c2VyIFRvdWNoRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3VjaEV2ZW50KHR5cGU6IHN0cmluZywgcGFnZVggPSAwLCBwYWdlWSA9IDApIHtcbiAgLy8gSW4gZmF2b3Igb2YgY3JlYXRpbmcgZXZlbnRzIHRoYXQgd29yayBmb3IgbW9zdCBvZiB0aGUgYnJvd3NlcnMsIHRoZSBldmVudCBpcyBjcmVhdGVkXG4gIC8vIGFzIGEgYmFzaWMgVUkgRXZlbnQuIFRoZSBuZWNlc3NhcnkgZGV0YWlscyBmb3IgdGhlIGV2ZW50IHdpbGwgYmUgc2V0IG1hbnVhbGx5LlxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdVSUV2ZW50Jyk7XG4gIGNvbnN0IHRvdWNoRGV0YWlscyA9IHtwYWdlWCwgcGFnZVl9O1xuXG4gIC8vIFRTMy42IHJlbW92ZXMgdGhlIGluaXRVSUV2ZW50IG1ldGhvZCBhbmQgc3VnZ2VzdHMgcG9ydGluZyB0byBcIm5ldyBVSUV2ZW50KClcIi5cbiAgKGV2ZW50IGFzIGFueSkuaW5pdFVJRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwKTtcblxuICAvLyBNb3N0IG9mIHRoZSBicm93c2VycyBkb24ndCBoYXZlIGEgXCJpbml0VG91Y2hFdmVudFwiIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZVxuICAvLyB0aGUgdG91Y2ggZGV0YWlscy5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHtcbiAgICB0b3VjaGVzOiB7dmFsdWU6IFt0b3VjaERldGFpbHNdfSxcbiAgICB0YXJnZXRUb3VjaGVzOiB7dmFsdWU6IFt0b3VjaERldGFpbHNdfSxcbiAgICBjaGFuZ2VkVG91Y2hlczoge3ZhbHVlOiBbdG91Y2hEZXRhaWxzXX1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKipcbiAqIERpc3BhdGNoZXMgYSBrZXlkb3duIGV2ZW50IGZyb20gYW4gZWxlbWVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIgPSAwLCBrZXk6IHN0cmluZyA9ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PzogRWxlbWVudCwgbW9kaWZpZXJzOiBNb2RpZmllcktleXMgPSB7fSkge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdLZXlib2FyZEV2ZW50JykgYXMgYW55O1xuICBjb25zdCBvcmlnaW5hbFByZXZlbnREZWZhdWx0ID0gZXZlbnQucHJldmVudERlZmF1bHQ7XG5cbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGBpbml0S2V5Ym9hcmRFdmVudGAsIGJ1dCBzdXBwb3J0cyBgaW5pdEtleUV2ZW50YC5cbiAgaWYgKGV2ZW50LmluaXRLZXlFdmVudCkge1xuICAgIGV2ZW50LmluaXRLZXlFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIG1vZGlmaWVycy5jb250cm9sLCBtb2RpZmllcnMuYWx0LCBtb2RpZmllcnMuc2hpZnQsXG4gICAgICAgIG1vZGlmaWVycy5tZXRhLCBrZXlDb2RlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBgaW5pdEtleWJvYXJkRXZlbnRgIGV4cGVjdHMgdG8gcmVjZWl2ZSBtb2RpZmllcnMgYXMgYSB3aGl0ZXNwYWNlLWRlbGltaXRlZCBzdHJpbmdcbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQvaW5pdEtleWJvYXJkRXZlbnRcbiAgICBsZXQgbW9kaWZpZXJzTGlzdCA9ICcnO1xuXG4gICAgaWYgKG1vZGlmaWVycy5jb250cm9sKSB7XG4gICAgICBtb2RpZmllcnNMaXN0ICs9ICdDb250cm9sICc7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVycy5hbHQpIHtcbiAgICAgIG1vZGlmaWVyc0xpc3QgKz0gJ0FsdCAnO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllcnMuc2hpZnQpIHtcbiAgICAgIG1vZGlmaWVyc0xpc3QgKz0gJ1NoaWZ0ICc7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVycy5tZXRhKSB7XG4gICAgICBtb2RpZmllcnNMaXN0ICs9ICdNZXRhICc7XG4gICAgfVxuXG4gICAgZXZlbnQuaW5pdEtleWJvYXJkRXZlbnQodHlwZSxcbiAgICAgICAgdHJ1ZSwgLyogY2FuQnViYmxlICovXG4gICAgICAgIHRydWUsIC8qIGNhbmNlbGFibGUgKi9cbiAgICAgICAgd2luZG93LCAvKiB2aWV3ICovXG4gICAgICAgIDAsIC8qIGNoYXIgKi9cbiAgICAgICAga2V5LCAvKiBrZXkgKi9cbiAgICAgICAgMCwgLyogbG9jYXRpb24gKi9cbiAgICAgICAgbW9kaWZpZXJzTGlzdC50cmltKCksIC8qIG1vZGlmaWVyc0xpc3QgKi9cbiAgICAgICAgZmFsc2UgLyogcmVwZWF0ICovKTtcbiAgfVxuXG4gIC8vIFdlYmtpdCBCcm93c2VycyBkb24ndCBzZXQgdGhlIGtleUNvZGUgd2hlbiBjYWxsaW5nIHRoZSBpbml0IGZ1bmN0aW9uLlxuICAvLyBTZWUgcmVsYXRlZCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2NzM1XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAga2V5Q29kZTogeyBnZXQ6ICgpID0+IGtleUNvZGUgfSxcbiAgICBrZXk6IHsgZ2V0OiAoKSA9PiBrZXkgfSxcbiAgICB0YXJnZXQ6IHsgZ2V0OiAoKSA9PiB0YXJnZXQgfSxcbiAgICBjdHJsS2V5OiB7IGdldDogKCkgPT4gISFtb2RpZmllcnMuY29udHJvbCB9LFxuICAgIGFsdEtleTogeyBnZXQ6ICgpID0+ICEhbW9kaWZpZXJzLmFsdCB9LFxuICAgIHNoaWZ0S2V5OiB7IGdldDogKCkgPT4gISFtb2RpZmllcnMuc2hpZnQgfSxcbiAgICBtZXRhS2V5OiB7IGdldDogKCkgPT4gISFtb2RpZmllcnMubWV0YSB9XG4gIH0pO1xuXG4gIC8vIElFIHdvbid0IHNldCBgZGVmYXVsdFByZXZlbnRlZGAgb24gc3ludGhldGljIGV2ZW50cyBzbyB3ZSBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5LlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7IGdldDogKCkgPT4gdHJ1ZSB9KTtcbiAgICByZXR1cm4gb3JpZ2luYWxQcmV2ZW50RGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZmFrZSBldmVudCBvYmplY3Qgd2l0aCBhbnkgZGVzaXJlZCBldmVudCB0eXBlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFrZUV2ZW50KHR5cGU6IHN0cmluZywgY2FuQnViYmxlID0gZmFsc2UsIGNhbmNlbGFibGUgPSB0cnVlKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCBjYW5CdWJibGUsIGNhbmNlbGFibGUpO1xuICByZXR1cm4gZXZlbnQ7XG59XG4iXX0=