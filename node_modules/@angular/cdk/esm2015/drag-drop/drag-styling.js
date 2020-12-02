/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 * @record
 */
function DragCSSStyleDeclaration() { }
if (false) {
    /** @type {?} */
    DragCSSStyleDeclaration.prototype.webkitUserDrag;
    /** @type {?} */
    DragCSSStyleDeclaration.prototype.MozUserSelect;
}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
export function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
export function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1zdHlsaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZHJhZy1zdHlsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLHNDQUdDOzs7SUFGQyxpREFBdUI7O0lBQ3ZCLGdEQUFzQjs7Ozs7Ozs7O0FBT3hCLE1BQU0sVUFBVSxZQUFZLENBQ3hCLElBQW9DLEVBQ3BDLE1BQXdDO0lBQzFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7U0FDMUI7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsNEJBQTRCLENBQUMsT0FBb0IsRUFBRSxNQUFlOztVQUMxRSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFFdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDMUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ2pDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUNwQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUNwRCxVQUFVLEVBQUUsVUFBVTtRQUN0QixZQUFZLEVBQUUsVUFBVTtRQUN4QixnQkFBZ0IsRUFBRSxVQUFVO1FBQzVCLGFBQWEsRUFBRSxVQUFVO0tBQzFCLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG4vLyBIZWxwZXIgdHlwZSB0aGF0IGlnbm9yZXMgYHJlYWRvbmx5YCBwcm9wZXJ0aWVzLiBUaGlzIGlzIHVzZWQgaW5cbi8vIGBleHRlbmRTdHlsZXNgIHRvIGlnbm9yZSB0aGUgcmVhZG9ubHkgcHJvcGVydGllcyBvbiBDU1NTdHlsZURlY2xhcmF0aW9uXG4vLyBzaW5jZSB3ZSB3b24ndCBiZSB0b3VjaGluZyB0aG9zZSBhbnl3YXkuXG50eXBlIFdyaXRlYWJsZTxUPiA9IHsgLXJlYWRvbmx5IFtQIGluIGtleW9mIFRdLT86IFRbUF0gfTtcblxuLyoqXG4gKiBFeHRlbmRlZCBDU1NTdHlsZURlY2xhcmF0aW9uIHRoYXQgaW5jbHVkZXMgYSBjb3VwbGUgb2YgZHJhZy1yZWxhdGVkXG4gKiBwcm9wZXJ0aWVzIHRoYXQgYXJlbid0IGluIHRoZSBidWlsdC1pbiBUUyB0eXBpbmdzLlxuICovXG5pbnRlcmZhY2UgRHJhZ0NTU1N0eWxlRGVjbGFyYXRpb24gZXh0ZW5kcyBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgd2Via2l0VXNlckRyYWc6IHN0cmluZztcbiAgTW96VXNlclNlbGVjdDogc3RyaW5nOyAvLyBGb3Igc29tZSByZWFzb24gdGhlIEZpcmVmb3ggcHJvcGVydHkgaXMgaW4gUGFzY2FsQ2FzZS5cbn1cblxuLyoqXG4gKiBTaGFsbG93LWV4dGVuZHMgYSBzdHlsZXNoZWV0IG9iamVjdCB3aXRoIGFub3RoZXIgc3R5bGVzaGVldCBvYmplY3QuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRTdHlsZXMoXG4gICAgZGVzdDogV3JpdGVhYmxlPENTU1N0eWxlRGVjbGFyYXRpb24+LFxuICAgIHNvdXJjZTogUGFydGlhbDxEcmFnQ1NTU3R5bGVEZWNsYXJhdGlvbj4pIHtcbiAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZGVzdFtrZXldID0gc291cmNlW2tleV0hO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufVxuXG5cbi8qKlxuICogVG9nZ2xlcyB3aGV0aGVyIHRoZSBuYXRpdmUgZHJhZyBpbnRlcmFjdGlvbnMgc2hvdWxkIGJlIGVuYWJsZWQgZm9yIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IG9uIHdoaWNoIHRvIHRvZ2dsZSB0aGUgZHJhZyBpbnRlcmFjdGlvbnMuXG4gKiBAcGFyYW0gZW5hYmxlIFdoZXRoZXIgdGhlIGRyYWcgaW50ZXJhY3Rpb25zIHNob3VsZCBiZSBlbmFibGVkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZW5hYmxlOiBib29sZWFuKSB7XG4gIGNvbnN0IHVzZXJTZWxlY3QgPSBlbmFibGUgPyAnJyA6ICdub25lJztcblxuICBleHRlbmRTdHlsZXMoZWxlbWVudC5zdHlsZSwge1xuICAgIHRvdWNoQWN0aW9uOiBlbmFibGUgPyAnJyA6ICdub25lJyxcbiAgICB3ZWJraXRVc2VyRHJhZzogZW5hYmxlID8gJycgOiAnbm9uZScsXG4gICAgd2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6IGVuYWJsZSA/ICcnIDogJ3RyYW5zcGFyZW50JyxcbiAgICB1c2VyU2VsZWN0OiB1c2VyU2VsZWN0LFxuICAgIG1zVXNlclNlbGVjdDogdXNlclNlbGVjdCxcbiAgICB3ZWJraXRVc2VyU2VsZWN0OiB1c2VyU2VsZWN0LFxuICAgIE1velVzZXJTZWxlY3Q6IHVzZXJTZWxlY3RcbiAgfSk7XG59XG4iXX0=