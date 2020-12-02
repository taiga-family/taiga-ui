/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @docs-private
 */
export function createMouseEvent(type, clientX = 0, clientY = 0, button = 0) {
    const event = document.createEvent('MouseEvent');
    const originalPreventDefault = event.preventDefault.bind(event);
    // Note: We cannot determine the position of the mouse event based on the screen
    // because the dimensions and position of the browser window are not available
    // To provide reasonable `screenX` and `screenY` coordinates, we simply use the
    // client coordinates as if the browser is opened in fullscreen.
    const screenX = clientX;
    const screenY = clientY;
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
    Object.defineProperty(event, 'buttons', { get: () => 1 });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true });
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
export function createPointerEvent(type, clientX = 0, clientY = 0, options = { isPrimary: true }) {
    return new PointerEvent(type, Object.assign({ bubbles: true, cancelable: true, view: window, clientX,
        clientY }, options));
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @docs-private
 */
export function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    const event = document.createEvent('UIEvent');
    const touchDetails = { pageX, pageY };
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
export function createKeyboardEvent(type, keyCode = 0, key = '', target, modifiers = {}) {
    const event = document.createEvent('KeyboardEvent');
    const originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, modifiers.control, modifiers.alt, modifiers.shift, modifiers.meta, keyCode);
    }
    else {
        // `initKeyboardEvent` expects to receive modifiers as a whitespace-delimited string
        // See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyboardEvent
        let modifiersList = '';
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
        keyCode: { get: () => keyCode },
        key: { get: () => key },
        target: { get: () => target },
        ctrlKey: { get: () => !!modifiers.control },
        altKey: { get: () => !!modifiers.alt },
        shiftKey: { get: () => !!modifiers.shift },
        metaKey: { get: () => !!modifiers.meta }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true });
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @docs-private
 */
export function createFakeEvent(type, canBubble = false, cancelable = true) {
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGVzdGluZy90ZXN0YmVkL2Zha2UtZXZlbnRzL2V2ZW50LW9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUM7SUFDakYsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxNQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhFLGdGQUFnRjtJQUNoRiw4RUFBOEU7SUFDOUUsK0VBQStFO0lBQy9FLGdFQUFnRTtJQUNoRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRXhCLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSTtJQUN2QixlQUFlLENBQUMsSUFBSTtJQUNwQixnQkFBZ0IsQ0FBQyxJQUFJO0lBQ3JCLFVBQVUsQ0FBQyxNQUFNO0lBQ2pCLFlBQVksQ0FBQyxDQUFDO0lBQ2QsYUFBYSxDQUFDLE9BQU87SUFDckIsYUFBYSxDQUFDLE9BQU87SUFDckIsYUFBYSxDQUFDLE9BQU87SUFDckIsYUFBYSxDQUFDLE9BQU87SUFDckIsYUFBYSxDQUFDLEtBQUs7SUFDbkIsWUFBWSxDQUFDLEtBQUs7SUFDbEIsY0FBYyxDQUFDLEtBQUs7SUFDcEIsYUFBYSxDQUFDLEtBQUs7SUFDbkIsWUFBWSxDQUFDLE1BQU07SUFDbkIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUIsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCxNQUFN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QUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsU0FBUyxHQUFHLEtBQUssRUFBRSxVQUFVLEdBQUcsSUFBSTtJQUNoRixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtNb2RpZmllcktleXN9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJvd3NlciBNb3VzZUV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBvcHRpb25zLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudCh0eXBlOiBzdHJpbmcsIGNsaWVudFggPSAwLCBjbGllbnRZID0gMCwgYnV0dG9uID0gMCkge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG4gIGNvbnN0IG9yaWdpbmFsUHJldmVudERlZmF1bHQgPSBldmVudC5wcmV2ZW50RGVmYXVsdC5iaW5kKGV2ZW50KTtcblxuICAvLyBOb3RlOiBXZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW91c2UgZXZlbnQgYmFzZWQgb24gdGhlIHNjcmVlblxuICAvLyBiZWNhdXNlIHRoZSBkaW1lbnNpb25zIGFuZCBwb3NpdGlvbiBvZiB0aGUgYnJvd3NlciB3aW5kb3cgYXJlIG5vdCBhdmFpbGFibGVcbiAgLy8gVG8gcHJvdmlkZSByZWFzb25hYmxlIGBzY3JlZW5YYCBhbmQgYHNjcmVlbllgIGNvb3JkaW5hdGVzLCB3ZSBzaW1wbHkgdXNlIHRoZVxuICAvLyBjbGllbnQgY29vcmRpbmF0ZXMgYXMgaWYgdGhlIGJyb3dzZXIgaXMgb3BlbmVkIGluIGZ1bGxzY3JlZW4uXG4gIGNvbnN0IHNjcmVlblggPSBjbGllbnRYO1xuICBjb25zdCBzY3JlZW5ZID0gY2xpZW50WTtcblxuICBldmVudC5pbml0TW91c2VFdmVudCh0eXBlLFxuICAgIC8qIGNhbkJ1YmJsZSAqLyB0cnVlLFxuICAgIC8qIGNhbmNlbGFibGUgKi8gdHJ1ZSxcbiAgICAvKiB2aWV3ICovIHdpbmRvdyxcbiAgICAvKiBkZXRhaWwgKi8gMCxcbiAgICAvKiBzY3JlZW5YICovIHNjcmVlblgsXG4gICAgLyogc2NyZWVuWSAqLyBzY3JlZW5ZLFxuICAgIC8qIGNsaWVudFggKi8gY2xpZW50WCxcbiAgICAvKiBjbGllbnRZICovIGNsaWVudFksXG4gICAgLyogY3RybEtleSAqLyBmYWxzZSxcbiAgICAvKiBhbHRLZXkgKi8gZmFsc2UsXG4gICAgLyogc2hpZnRLZXkgKi8gZmFsc2UsXG4gICAgLyogbWV0YUtleSAqLyBmYWxzZSxcbiAgICAvKiBidXR0b24gKi8gYnV0dG9uLFxuICAgIC8qIHJlbGF0ZWRUYXJnZXQgKi8gbnVsbCk7XG5cbiAgLy8gYGluaXRNb3VzZUV2ZW50YCBkb2Vzbid0IGFsbG93IHVzIHRvIHBhc3MgdGhlIGBidXR0b25zYCBhbmRcbiAgLy8gZGVmYXVsdHMgaXQgdG8gMCB3aGljaCBsb29rcyBsaWtlIGEgZmFrZSBldmVudC5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnYnV0dG9ucycsIHtnZXQ6ICgpID0+IDF9KTtcblxuICAvLyBJRSB3b24ndCBzZXQgYGRlZmF1bHRQcmV2ZW50ZWRgIG9uIHN5bnRoZXRpYyBldmVudHMgc28gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseS5cbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdkZWZhdWx0UHJldmVudGVkJywgeyBnZXQ6ICgpID0+IHRydWUgfSk7XG4gICAgcmV0dXJuIG9yaWdpbmFsUHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJyb3dzZXIgYFBvaW50ZXJFdmVudGAgd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuIFBvaW50ZXIgZXZlbnRzXG4gKiBieSBkZWZhdWx0IHdpbGwgYXBwZWFyIGFzIGlmIHRoZXkgYXJlIHRoZSBwcmltYXJ5IHBvaW50ZXIgb2YgdGhlaXIgdHlwZS5cbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9wb2ludGVyZXZlbnRzMi8jZG9tLXBvaW50ZXJldmVudC1pc3ByaW1hcnkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIHBvaW50ZXIgZXZlbnRzIGZvciBhIG11bHRpLXRvdWNoIGludGVyYWN0aW9uIGFyZSBjcmVhdGVkLCB0aGUgbm9uLXByaW1hcnlcbiAqIHBvaW50ZXIgdG91Y2hlcyB3b3VsZCBuZWVkIHRvIGJlIHJlcHJlc2VudGVkIGJ5IG5vbi1wcmltYXJ5IHBvaW50ZXIgZXZlbnRzLlxuICpcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXJFdmVudCh0eXBlOiBzdHJpbmcsIGNsaWVudFggPSAwLCBjbGllbnRZID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogUG9pbnRlckV2ZW50SW5pdCA9IHtpc1ByaW1hcnk6IHRydWV9KSB7XG4gIHJldHVybiBuZXcgUG9pbnRlckV2ZW50KHR5cGUsIHtcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgdmlldzogd2luZG93LFxuICAgIGNsaWVudFgsXG4gICAgY2xpZW50WSxcbiAgICAuLi5vcHRpb25zLFxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJvd3NlciBUb3VjaEV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG91Y2hFdmVudCh0eXBlOiBzdHJpbmcsIHBhZ2VYID0gMCwgcGFnZVkgPSAwKSB7XG4gIC8vIEluIGZhdm9yIG9mIGNyZWF0aW5nIGV2ZW50cyB0aGF0IHdvcmsgZm9yIG1vc3Qgb2YgdGhlIGJyb3dzZXJzLCB0aGUgZXZlbnQgaXMgY3JlYXRlZFxuICAvLyBhcyBhIGJhc2ljIFVJIEV2ZW50LiBUaGUgbmVjZXNzYXJ5IGRldGFpbHMgZm9yIHRoZSBldmVudCB3aWxsIGJlIHNldCBtYW51YWxseS5cbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudCcpO1xuICBjb25zdCB0b3VjaERldGFpbHMgPSB7cGFnZVgsIHBhZ2VZfTtcblxuICAvLyBUUzMuNiByZW1vdmVzIHRoZSBpbml0VUlFdmVudCBtZXRob2QgYW5kIHN1Z2dlc3RzIHBvcnRpbmcgdG8gXCJuZXcgVUlFdmVudCgpXCIuXG4gIChldmVudCBhcyBhbnkpLmluaXRVSUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCk7XG5cbiAgLy8gTW9zdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QgaGF2ZSBhIFwiaW5pdFRvdWNoRXZlbnRcIiBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmVcbiAgLy8gdGhlIHRvdWNoIGRldGFpbHMuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAgdG91Y2hlczoge3ZhbHVlOiBbdG91Y2hEZXRhaWxzXX0sXG4gICAgdGFyZ2V0VG91Y2hlczoge3ZhbHVlOiBbdG91Y2hEZXRhaWxzXX0sXG4gICAgY2hhbmdlZFRvdWNoZXM6IHt2YWx1ZTogW3RvdWNoRGV0YWlsc119XG4gIH0pO1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaGVzIGEga2V5ZG93biBldmVudCBmcm9tIGFuIGVsZW1lbnQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVLZXlib2FyZEV2ZW50KHR5cGU6IHN0cmluZywga2V5Q29kZTogbnVtYmVyID0gMCwga2V5OiBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD86IEVsZW1lbnQsIG1vZGlmaWVyczogTW9kaWZpZXJLZXlzID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnS2V5Ym9hcmRFdmVudCcpIGFzIGFueTtcbiAgY29uc3Qgb3JpZ2luYWxQcmV2ZW50RGVmYXVsdCA9IGV2ZW50LnByZXZlbnREZWZhdWx0O1xuXG4gIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBgaW5pdEtleWJvYXJkRXZlbnRgLCBidXQgc3VwcG9ydHMgYGluaXRLZXlFdmVudGAuXG4gIGlmIChldmVudC5pbml0S2V5RXZlbnQpIHtcbiAgICBldmVudC5pbml0S2V5RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCBtb2RpZmllcnMuY29udHJvbCwgbW9kaWZpZXJzLmFsdCwgbW9kaWZpZXJzLnNoaWZ0LFxuICAgICAgICBtb2RpZmllcnMubWV0YSwga2V5Q29kZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYGluaXRLZXlib2FyZEV2ZW50YCBleHBlY3RzIHRvIHJlY2VpdmUgbW9kaWZpZXJzIGFzIGEgd2hpdGVzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2luaXRLZXlib2FyZEV2ZW50XG4gICAgbGV0IG1vZGlmaWVyc0xpc3QgPSAnJztcblxuICAgIGlmIChtb2RpZmllcnMuY29udHJvbCkge1xuICAgICAgbW9kaWZpZXJzTGlzdCArPSAnQ29udHJvbCAnO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllcnMuYWx0KSB7XG4gICAgICBtb2RpZmllcnNMaXN0ICs9ICdBbHQgJztcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJzLnNoaWZ0KSB7XG4gICAgICBtb2RpZmllcnNMaXN0ICs9ICdTaGlmdCAnO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllcnMubWV0YSkge1xuICAgICAgbW9kaWZpZXJzTGlzdCArPSAnTWV0YSAnO1xuICAgIH1cblxuICAgIGV2ZW50LmluaXRLZXlib2FyZEV2ZW50KHR5cGUsXG4gICAgICAgIHRydWUsIC8qIGNhbkJ1YmJsZSAqL1xuICAgICAgICB0cnVlLCAvKiBjYW5jZWxhYmxlICovXG4gICAgICAgIHdpbmRvdywgLyogdmlldyAqL1xuICAgICAgICAwLCAvKiBjaGFyICovXG4gICAgICAgIGtleSwgLyoga2V5ICovXG4gICAgICAgIDAsIC8qIGxvY2F0aW9uICovXG4gICAgICAgIG1vZGlmaWVyc0xpc3QudHJpbSgpLCAvKiBtb2RpZmllcnNMaXN0ICovXG4gICAgICAgIGZhbHNlIC8qIHJlcGVhdCAqLyk7XG4gIH1cblxuICAvLyBXZWJraXQgQnJvd3NlcnMgZG9uJ3Qgc2V0IHRoZSBrZXlDb2RlIHdoZW4gY2FsbGluZyB0aGUgaW5pdCBmdW5jdGlvbi5cbiAgLy8gU2VlIHJlbGF0ZWQgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNjczNVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudCwge1xuICAgIGtleUNvZGU6IHsgZ2V0OiAoKSA9PiBrZXlDb2RlIH0sXG4gICAga2V5OiB7IGdldDogKCkgPT4ga2V5IH0sXG4gICAgdGFyZ2V0OiB7IGdldDogKCkgPT4gdGFyZ2V0IH0sXG4gICAgY3RybEtleTogeyBnZXQ6ICgpID0+ICEhbW9kaWZpZXJzLmNvbnRyb2wgfSxcbiAgICBhbHRLZXk6IHsgZ2V0OiAoKSA9PiAhIW1vZGlmaWVycy5hbHQgfSxcbiAgICBzaGlmdEtleTogeyBnZXQ6ICgpID0+ICEhbW9kaWZpZXJzLnNoaWZ0IH0sXG4gICAgbWV0YUtleTogeyBnZXQ6ICgpID0+ICEhbW9kaWZpZXJzLm1ldGEgfVxuICB9KTtcblxuICAvLyBJRSB3b24ndCBzZXQgYGRlZmF1bHRQcmV2ZW50ZWRgIG9uIHN5bnRoZXRpYyBldmVudHMgc28gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseS5cbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdkZWZhdWx0UHJldmVudGVkJywgeyBnZXQ6ICgpID0+IHRydWUgfSk7XG4gICAgcmV0dXJuIG9yaWdpbmFsUHJldmVudERlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZha2UgZXZlbnQgb2JqZWN0IHdpdGggYW55IGRlc2lyZWQgZXZlbnQgdHlwZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZha2VFdmVudCh0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZSA9IGZhbHNlLCBjYW5jZWxhYmxlID0gdHJ1ZSkge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICBldmVudC5pbml0RXZlbnQodHlwZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlKTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuIl19