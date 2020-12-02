/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
var rtlScrollAxisType;
/** Check whether the browser supports scroll behaviors. */
export function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in document.documentElement.style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
export function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        var scrollContainer = document.createElement('div');
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        var content = document.createElement('div');
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        scrollContainer.parentNode.removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9wbGF0Zm9ybS9mZWF0dXJlcy9zY3JvbGxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBcUJILDJGQUEyRjtBQUMzRixJQUFJLGlCQUE4QyxDQUFDO0FBRW5ELDJEQUEyRDtBQUMzRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLElBQUksUUFBUSxJQUFJLGdCQUFnQixJQUFJLFFBQVEsQ0FBQyxlQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLGlGQUFpRjtJQUNqRixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxzQkFBZ0M7S0FDakM7SUFFRCxJQUFJLGlCQUFpQixJQUFJLElBQUksRUFBRTtRQUM3Qix3RUFBd0U7UUFDeEUsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzdDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBRXJDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU1QixlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTNDLGlCQUFpQixpQkFBMkIsQ0FBQztRQUU3QywyRkFBMkY7UUFDM0YsOEZBQThGO1FBQzlGLHVEQUF1RDtRQUN2RCxJQUFJLGVBQWUsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLDJGQUEyRjtZQUMzRiw2RkFBNkY7WUFDN0YseUZBQXlGO1lBQ3pGLGtDQUFrQztZQUNsQyxlQUFlLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUMvQixpQkFBaUI7Z0JBQ2IsZUFBZSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBMkIsQ0FBQyxpQkFBMkIsQ0FBQztTQUMvRjtRQUVELGVBQWUsQ0FBQyxVQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBUaGUgcG9zc2libGUgd2F5cyB0aGUgYnJvd3NlciBtYXkgaGFuZGxlIHRoZSBob3Jpem9udGFsIHNjcm9sbCBheGlzIGluIFJUTCBsYW5ndWFnZXMuICovXG5leHBvcnQgY29uc3QgZW51bSBSdGxTY3JvbGxBeGlzVHlwZSB7XG4gIC8qKlxuICAgKiBzY3JvbGxMZWZ0IGlzIDAgd2hlbiBzY3JvbGxlZCBhbGwgdGhlIHdheSBsZWZ0IGFuZCAoc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkgd2hlbiBzY3JvbGxlZFxuICAgKiBhbGwgdGhlIHdheSByaWdodC5cbiAgICovXG4gIE5PUk1BTCxcbiAgLyoqXG4gICAqIHNjcm9sbExlZnQgaXMgLShzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDAgd2hlbiBzY3JvbGxlZFxuICAgKiBhbGwgdGhlIHdheSByaWdodC5cbiAgICovXG4gIE5FR0FURUQsXG4gIC8qKlxuICAgKiBzY3JvbGxMZWZ0IGlzIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDAgd2hlbiBzY3JvbGxlZFxuICAgKiBhbGwgdGhlIHdheSByaWdodC5cbiAgICovXG4gIElOVkVSVEVEXG59XG5cbi8qKiBDYWNoZWQgcmVzdWx0IG9mIHRoZSB3YXkgdGhlIGJyb3dzZXIgaGFuZGxlcyB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgYXhpcyBpbiBSVEwgbW9kZS4gKi9cbmxldCBydGxTY3JvbGxBeGlzVHlwZTogUnRsU2Nyb2xsQXhpc1R5cGV8dW5kZWZpbmVkO1xuXG4vKiogQ2hlY2sgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyBzY3JvbGwgYmVoYXZpb3JzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gIHJldHVybiAhISh0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhLnN0eWxlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdGhlIHR5cGUgb2YgUlRMIHNjcm9sbCBheGlzIHVzZWQgYnkgdGhpcyBicm93c2VyLiBBcyBvZiB0aW1lIG9mIHdyaXRpbmcsIENocm9tZSBpcyBOT1JNQUwsXG4gKiBGaXJlZm94ICYgU2FmYXJpIGFyZSBORUdBVEVELCBhbmQgSUUgJiBFZGdlIGFyZSBJTlZFUlRFRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJ0bFNjcm9sbEF4aXNUeXBlKCk6IFJ0bFNjcm9sbEF4aXNUeXBlIHtcbiAgLy8gV2UgY2FuJ3QgY2hlY2sgdW5sZXNzIHdlJ3JlIG9uIHRoZSBicm93c2VyLiBKdXN0IGFzc3VtZSAnbm9ybWFsJyBpZiB3ZSdyZSBub3QuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICdvYmplY3QnIHx8ICFkb2N1bWVudCkge1xuICAgIHJldHVybiBSdGxTY3JvbGxBeGlzVHlwZS5OT1JNQUw7XG4gIH1cblxuICBpZiAocnRsU2Nyb2xsQXhpc1R5cGUgPT0gbnVsbCkge1xuICAgIC8vIENyZWF0ZSBhIDFweCB3aWRlIHNjcm9sbGluZyBjb250YWluZXIgYW5kIGEgMnB4IHdpZGUgY29udGVudCBlbGVtZW50LlxuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gc2Nyb2xsQ29udGFpbmVyLnN0eWxlO1xuICAgIHNjcm9sbENvbnRhaW5lci5kaXIgPSAncnRsJztcbiAgICBjb250YWluZXJTdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgICBjb250YWluZXJTdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgIGNvbnRhaW5lclN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIGNvbnRhaW5lclN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjb250YWluZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGNvbnRhaW5lclN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSBjb250ZW50LnN0eWxlO1xuICAgIGNvbnRlbnRTdHlsZS53aWR0aCA9ICcycHgnO1xuICAgIGNvbnRlbnRTdHlsZS5oZWlnaHQgPSAnMXB4JztcblxuICAgIHNjcm9sbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbENvbnRhaW5lcik7XG5cbiAgICBydGxTY3JvbGxBeGlzVHlwZSA9IFJ0bFNjcm9sbEF4aXNUeXBlLk5PUk1BTDtcblxuICAgIC8vIFRoZSB2aWV3cG9ydCBzdGFydHMgc2Nyb2xsZWQgYWxsIHRoZSB3YXkgdG8gdGhlIHJpZ2h0IGluIFJUTCBtb2RlLiBJZiB3ZSBhcmUgaW4gYSBOT1JNQUxcbiAgICAvLyBicm93c2VyIHRoaXMgd291bGQgbWVhbiB0aGF0IHRoZSBzY3JvbGxMZWZ0IHNob3VsZCBiZSAxLiBJZiBpdCdzIHplcm8gaW5zdGVhZCB3ZSBrbm93IHdlJ3JlXG4gICAgLy8gZGVhbGluZyB3aXRoIG9uZSBvZiB0aGUgb3RoZXIgdHdvIHR5cGVzIG9mIGJyb3dzZXJzLlxuICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgLy8gSW4gYSBORUdBVEVEIGJyb3dzZXIgdGhlIHNjcm9sbExlZnQgaXMgYWx3YXlzIHNvbWV3aGVyZSBpbiBbLW1heFNjcm9sbEFtb3VudCwgMF0uIEZvciBhblxuICAgICAgLy8gSU5WRVJURUQgYnJvd3NlciBpdCBpcyBhbHdheXMgc29tZXdoZXJlIGluIFswLCBtYXhTY3JvbGxBbW91bnRdLiBXZSBjYW4gZGV0ZXJtaW5lIHdoaWNoIGJ5XG4gICAgICAvLyBzZXR0aW5nIHRvIHRoZSBzY3JvbGxMZWZ0IHRvIDEuIFRoaXMgaXMgcGFzdCB0aGUgbWF4IGZvciBhIE5FR0FURUQgYnJvd3Nlciwgc28gaXQgd2lsbFxuICAgICAgLy8gcmV0dXJuIDAgd2hlbiB3ZSByZWFkIGl0IGFnYWluLlxuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSAxO1xuICAgICAgcnRsU2Nyb2xsQXhpc1R5cGUgPVxuICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID09PSAwID8gUnRsU2Nyb2xsQXhpc1R5cGUuTkVHQVRFRCA6IFJ0bFNjcm9sbEF4aXNUeXBlLklOVkVSVEVEO1xuICAgIH1cblxuICAgIHNjcm9sbENvbnRhaW5lci5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzY3JvbGxDb250YWluZXIpO1xuICB9XG4gIHJldHVybiBydGxTY3JvbGxBeGlzVHlwZTtcbn1cbiJdfQ==