import { isProceduralRenderer } from '../interfaces/renderer';
/**
 * Assigns all attribute values to the provided element via the inferred renderer.
 *
 * This function accepts two forms of attribute entries:
 *
 * default: (key, value):
 *  attrs = [key1, value1, key2, value2]
 *
 * namespaced: (NAMESPACE_MARKER, uri, name, value)
 *  attrs = [NAMESPACE_MARKER, uri, name, value, NAMESPACE_MARKER, uri, name, value]
 *
 * The `attrs` array can contain a mix of both the default and namespaced entries.
 * The "default" values are set without a marker, but if the function comes across
 * a marker value then it will attempt to set a namespaced value. If the marker is
 * not of a namespaced value then the function will quit and return the index value
 * where it stopped during the iteration of the attrs array.
 *
 * See [AttributeMarker] to understand what the namespace marker value is.
 *
 * Note that this instruction does not support assigning style and class values to
 * an element. See `elementStart` and `elementHostAttrs` to learn how styling values
 * are applied to an element.
 * @param renderer The renderer to be used
 * @param native The element that the attributes will be assigned to
 * @param attrs The attribute array of values that will be assigned to the element
 * @returns the index value that was last accessed in the attributes array
 */
export function setUpAttributes(renderer, native, attrs) {
    var isProc = isProceduralRenderer(renderer);
    var i = 0;
    while (i < attrs.length) {
        var value = attrs[i];
        if (typeof value === 'number') {
            // only namespaces are supported. Other value types (such as style/class
            // entries) are not supported in this function.
            if (value !== 0 /* NamespaceURI */) {
                break;
            }
            // we just landed on the marker value ... therefore
            // we should skip to the next entry
            i++;
            var namespaceURI = attrs[i++];
            var attrName = attrs[i++];
            var attrVal = attrs[i++];
            ngDevMode && ngDevMode.rendererSetAttribute++;
            isProc ?
                renderer.setAttribute(native, attrName, attrVal, namespaceURI) :
                native.setAttributeNS(namespaceURI, attrName, attrVal);
        }
        else {
            // attrName is string;
            var attrName = value;
            var attrVal = attrs[++i];
            // Standard attributes
            ngDevMode && ngDevMode.rendererSetAttribute++;
            if (isAnimationProp(attrName)) {
                if (isProc) {
                    renderer.setProperty(native, attrName, attrVal);
                }
            }
            else {
                isProc ?
                    renderer.setAttribute(native, attrName, attrVal) :
                    native.setAttribute(attrName, attrVal);
            }
            i++;
        }
    }
    // another piece of code may iterate over the same attributes array. Therefore
    // it may be helpful to return the exact spot where the attributes array exited
    // whether by running into an unsupported marker or if all the static values were
    // iterated over.
    return i;
}
/**
 * Test whether the given value is a marker that indicates that the following
 * attribute values in a `TAttributes` array are only the names of attributes,
 * and not name-value pairs.
 * @param marker The attribute marker to test.
 * @returns true if the marker is a "name-only" marker (e.g. `Bindings`, `Template` or `I18n`).
 */
export function isNameOnlyAttributeMarker(marker) {
    return marker === 3 /* Bindings */ || marker === 4 /* Template */ ||
        marker === 6 /* I18n */;
}
export function isAnimationProp(name) {
    // Perf note: accessing charCodeAt to check for the first character of a string is faster as
    // compared to accessing a character at index 0 (ex. name[0]). The main reason for this is that
    // charCodeAt doesn't allocate memory to return a substring.
    return name.charCodeAt(0) === 64 /* AT_SIGN */;
}
/**
 * Merges `src` `TAttributes` into `dst` `TAttributes` removing any duplicates in the process.
 *
 * This merge function keeps the order of attrs same.
 *
 * @param dst Location of where the merged `TAttributes` should end up.
 * @param src `TAttributes` which should be appended to `dst`
 */
export function mergeHostAttrs(dst, src) {
    if (src === null || src.length === 0) {
        // do nothing
    }
    else if (dst === null || dst.length === 0) {
        // We have source, but dst is empty, just make a copy.
        dst = src.slice();
    }
    else {
        var srcMarker = -1 /* ImplicitAttributes */;
        for (var i = 0; i < src.length; i++) {
            var item = src[i];
            if (typeof item === 'number') {
                srcMarker = item;
            }
            else {
                if (srcMarker === 0 /* NamespaceURI */) {
                    // Case where we need to consume `key1`, `key2`, `value` items.
                }
                else if (srcMarker === -1 /* ImplicitAttributes */ ||
                    srcMarker === 2 /* Styles */) {
                    // Case where we have to consume `key1` and `value` only.
                    mergeHostAttribute(dst, srcMarker, item, null, src[++i]);
                }
                else {
                    // Case where we have to consume `key1` only.
                    mergeHostAttribute(dst, srcMarker, item, null, null);
                }
            }
        }
    }
    return dst;
}
/**
 * Append `key`/`value` to existing `TAttributes` taking region marker and duplicates into account.
 *
 * @param dst `TAttributes` to append to.
 * @param marker Region where the `key`/`value` should be added.
 * @param key1 Key to add to `TAttributes`
 * @param key2 Key to add to `TAttributes` (in case of `AttributeMarker.NamespaceURI`)
 * @param value Value to add or to overwrite to `TAttributes` Only used if `marker` is not Class.
 */
export function mergeHostAttribute(dst, marker, key1, key2, value) {
    var i = 0;
    // Assume that new markers will be inserted at the end.
    var markerInsertPosition = dst.length;
    // scan until correct type.
    if (marker === -1 /* ImplicitAttributes */) {
        markerInsertPosition = -1;
    }
    else {
        while (i < dst.length) {
            var dstValue = dst[i++];
            if (typeof dstValue === 'number') {
                if (dstValue === marker) {
                    markerInsertPosition = -1;
                    break;
                }
                else if (dstValue > marker) {
                    // We need to save this as we want the markers to be inserted in specific order.
                    markerInsertPosition = i - 1;
                    break;
                }
            }
        }
    }
    // search until you find place of insertion
    while (i < dst.length) {
        var item = dst[i];
        if (typeof item === 'number') {
            // since `i` started as the index after the marker, we did not find it if we are at the next
            // marker
            break;
        }
        else if (item === key1) {
            // We already have same token
            if (key2 === null) {
                if (value !== null) {
                    dst[i + 1] = value;
                }
                return;
            }
            else if (key2 === dst[i + 1]) {
                dst[i + 2] = value;
                return;
            }
        }
        // Increment counter.
        i++;
        if (key2 !== null)
            i++;
        if (value !== null)
            i++;
    }
    // insert at location.
    if (markerInsertPosition !== -1) {
        dst.splice(markerInsertPosition, 0, marker);
        i = markerInsertPosition + 1;
    }
    dst.splice(i++, 0, key1);
    if (key2 !== null) {
        dst.splice(i++, 0, key2);
    }
    if (value !== null) {
        dst.splice(i++, 0, value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cnNfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3V0aWwvYXR0cnNfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsT0FBTyxFQUFDLG9CQUFvQixFQUEyQyxNQUFNLHdCQUF3QixDQUFDO0FBSXRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBbUIsRUFBRSxNQUFnQixFQUFFLEtBQWtCO0lBQ3ZGLElBQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDdkIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLHdFQUF3RTtZQUN4RSwrQ0FBK0M7WUFDL0MsSUFBSSxLQUFLLHlCQUFpQyxFQUFFO2dCQUMxQyxNQUFNO2FBQ1A7WUFFRCxtREFBbUQ7WUFDbkQsbUNBQW1DO1lBQ25DLENBQUMsRUFBRSxDQUFDO1lBRUosSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUM7WUFDMUMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUM7WUFDdEMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUM7WUFDckMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxDQUFDO2dCQUNILFFBQWdDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVks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LEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFNLENBQUM7Z0JBQ3BCLE9BQU87YUFDUjtTQUNGO1FBQ0QscUJBQXFCO1FBQ3JCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUk7WUFBRSxDQUFDLEVBQUUsQ0FBQztLQUN6QjtJQUVELHNCQUFzQjtJQUN0QixJQUFJLG9CQUFvQixLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7S0FDOUI7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDMUI7SUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDaGFyQ29kZX0gZnJvbSAnLi4vLi4vdXRpbC9jaGFyX2NvZGUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXJrZXIsIFRBdHRyaWJ1dGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcm9qZWN0aW9uJztcbmltcG9ydCB7aXNQcm9jZWR1cmFsUmVuZGVyZXIsIFByb2NlZHVyYWxSZW5kZXJlcjMsIFJFbGVtZW50LCBSZW5kZXJlcjN9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVuZGVyZXInO1xuXG5cblxuLyoqXG4gKiBBc3NpZ25zIGFsbCBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBwcm92aWRlZCBlbGVtZW50IHZpYSB0aGUgaW5mZXJyZWQgcmVuZGVyZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIHR3byBmb3JtcyBvZiBhdHRyaWJ1dGUgZW50cmllczpcbiAqXG4gKiBkZWZhdWx0OiAoa2V5LCB2YWx1ZSk6XG4gKiAgYXR0cnMgPSBba2V5MSwgdmFsdWUxLCBrZXkyLCB2YWx1ZTJdXG4gKlxuICogbmFtZXNwYWNlZDogKE5BTUVTUEFDRV9NQVJLRVIsIHVyaSwgbmFtZSwgdmFsdWUpXG4gKiAgYXR0cnMgPSBbTkFNRVNQQUNFX01BUktFUiwgdXJpLCBuYW1lLCB2YWx1ZSwgTkFNRVNQQUNFX01BUktFUiwgdXJpLCBuYW1lLCB2YWx1ZV1cbiAqXG4gKiBUaGUgYGF0dHJzYCBhcnJheSBjYW4gY29udGFpbiBhIG1peCBvZiBib3RoIHRoZSBkZWZhdWx0IGFuZCBuYW1lc3BhY2VkIGVudHJpZXMuXG4gKiBUaGUgXCJkZWZhdWx0XCIgdmFsdWVzIGFyZSBzZXQgd2l0aG91dCBhIG1hcmtlciwgYnV0IGlmIHRoZSBmdW5jdGlvbiBjb21lcyBhY3Jvc3NcbiAqIGEgbWFya2VyIHZhbHVlIHRoZW4gaXQgd2lsbCBhdHRlbXB0IHRvIHNldCBhIG5hbWVzcGFjZWQgdmFsdWUuIElmIHRoZSBtYXJrZXIgaXNcbiAqIG5vdCBvZiBhIG5hbWVzcGFjZWQgdmFsdWUgdGhlbiB0aGUgZnVuY3Rpb24gd2lsbCBxdWl0IGFuZCByZXR1cm4gdGhlIGluZGV4IHZhbHVlXG4gKiB3aGVyZSBpdCBzdG9wcGVkIGR1cmluZyB0aGUgaXRlcmF0aW9uIG9mIHRoZSBhdHRycyBhcnJheS5cbiAqXG4gKiBTZWUgW0F0dHJpYnV0ZU1hcmtlcl0gdG8gdW5kZXJzdGFuZCB3aGF0IHRoZSBuYW1lc3BhY2UgbWFya2VyIHZhbHVlIGlzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGluc3RydWN0aW9uIGRvZXMgbm90IHN1cHBvcnQgYXNzaWduaW5nIHN0eWxlIGFuZCBjbGFzcyB2YWx1ZXMgdG9cbiAqIGFuIGVsZW1lbnQuIFNlZSBgZWxlbWVudFN0YXJ0YCBhbmQgYGVsZW1lbnRIb3N0QXR0cnNgIHRvIGxlYXJuIGhvdyBzdHlsaW5nIHZhbHVlc1xuICogYXJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSByZW5kZXJlciBUaGUgcmVuZGVyZXIgdG8gYmUgdXNlZFxuICogQHBhcmFtIG5hdGl2ZSBUaGUgZWxlbWVudCB0aGF0IHRoZSBhdHRyaWJ1dGVzIHdpbGwgYmUgYXNzaWduZWQgdG9cbiAqIEBwYXJhbSBhdHRycyBUaGUgYXR0cmlidXRlIGFycmF5IG9mIHZhbHVlcyB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnRcbiAqIEByZXR1cm5zIHRoZSBpbmRleCB2YWx1ZSB0aGF0IHdhcyBsYXN0IGFjY2Vzc2VkIGluIHRoZSBhdHRyaWJ1dGVzIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcEF0dHJpYnV0ZXMocmVuZGVyZXI6IFJlbmRlcmVyMywgbmF0aXZlOiBSRWxlbWVudCwgYXR0cnM6IFRBdHRyaWJ1dGVzKTogbnVtYmVyIHtcbiAgY29uc3QgaXNQcm9jID0gaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXIpO1xuXG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBhdHRycy5sZW5ndGgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2ldO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBvbmx5IG5hbWVzcGFjZXMgYXJlIHN1cHBvcnRlZC4gT3RoZXIgdmFsdWUgdHlwZXMgKHN1Y2ggYXMgc3R5bGUvY2xhc3NcbiAgICAgIC8vIGVudHJpZXMpIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgICBpZiAodmFsdWUgIT09IEF0dHJpYnV0ZU1hcmtlci5OYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGp1c3QgbGFuZGVkIG9uIHRoZSBtYXJrZXIgdmFsdWUgLi4uIHRoZXJlZm9yZVxuICAgICAgLy8gd2Ugc2hvdWxkIHNraXAgdG8gdGhlIG5leHQgZW50cnlcbiAgICAgIGkrKztcblxuICAgICAgY29uc3QgbmFtZXNwYWNlVVJJID0gYXR0cnNbaSsrXSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCBhdHRyTmFtZSA9IGF0dHJzW2krK10gYXMgc3RyaW5nO1xuICAgICAgY29uc3QgYXR0clZhbCA9IGF0dHJzW2krK10gYXMgc3RyaW5nO1xuICAgICAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5yZW5kZXJlclNldEF0dHJpYnV0ZSsrO1xuICAgICAgaXNQcm9jID9cbiAgICAgICAgICAocmVuZGVyZXIgYXMgUHJvY2VkdXJhbFJlbmRlcmVyMykuc2V0QXR0cmlidXRlKG5hdGl2ZSwgYXR0ck5hbWUsIGF0dHJWYWwsIG5hbWVzcGFjZVVSSSkgOlxuICAgICAgICAgIG5hdGl2ZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXR0ck5hbWUgaXMgc3RyaW5nO1xuICAgICAgY29uc3QgYXR0ck5hbWUgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCBhdHRyVmFsID0gYXR0cnNbKytpXTtcbiAgICAgIC8vIFN0YW5kYXJkIGF0dHJpYnV0ZXNcbiAgICAgIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUucmVuZGVyZXJTZXRBdHRyaWJ1dGUrKztcbiAgICAgIGlmIChpc0FuaW1hdGlvblByb3AoYXR0ck5hbWUpKSB7XG4gICAgICAgIGlmIChpc1Byb2MpIHtcbiAgICAgICAgICAocmVuZGVyZXIgYXMgUHJvY2VkdXJhbFJlbmRlcmVyMykuc2V0UHJvcGVydHkobmF0aXZlLCBhdHRyTmFtZSwgYXR0clZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzUHJvYyA/XG4gICAgICAgICAgICAocmVuZGVyZXIgYXMgUHJvY2VkdXJhbFJlbmRlcmVyMykuc2V0QXR0cmlidXRlKG5hdGl2ZSwgYXR0ck5hbWUsIGF0dHJWYWwgYXMgc3RyaW5nKSA6XG4gICAgICAgICAgICBuYXRpdmUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsIGFzIHN0cmluZyk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgLy8gYW5vdGhlciBwaWVjZSBvZiBjb2RlIG1heSBpdGVyYXRlIG92ZXIgdGhlIHNhbWUgYXR0cmlidXRlcyBhcnJheS4gVGhlcmVmb3JlXG4gIC8vIGl0IG1heSBiZSBoZWxwZnVsIHRvIHJldHVybiB0aGUgZXhhY3Qgc3BvdCB3aGVyZSB0aGUgYXR0cmlidXRlcyBhcnJheSBleGl0ZWRcbiAgLy8gd2hldGhlciBieSBydW5uaW5nIGludG8gYW4gdW5zdXBwb3J0ZWQgbWFya2VyIG9yIGlmIGFsbCB0aGUgc3RhdGljIHZhbHVlcyB3ZXJlXG4gIC8vIGl0ZXJhdGVkIG92ZXIuXG4gIHJldHVybiBpO1xufVxuXG4vKipcbiAqIFRlc3Qgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtYXJrZXIgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZm9sbG93aW5nXG4gKiBhdHRyaWJ1dGUgdmFsdWVzIGluIGEgYFRBdHRyaWJ1dGVzYCBhcnJheSBhcmUgb25seSB0aGUgbmFtZXMgb2YgYXR0cmlidXRlcyxcbiAqIGFuZCBub3QgbmFtZS12YWx1ZSBwYWlycy5cbiAqIEBwYXJhbSBtYXJrZXIgVGhlIGF0dHJpYnV0ZSBtYXJrZXIgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBpcyBhIFwibmFtZS1vbmx5XCIgbWFya2VyIChlLmcuIGBCaW5kaW5nc2AsIGBUZW1wbGF0ZWAgb3IgYEkxOG5gKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZU9ubHlBdHRyaWJ1dGVNYXJrZXIobWFya2VyOiBzdHJpbmd8QXR0cmlidXRlTWFya2VyfENzc1NlbGVjdG9yKSB7XG4gIHJldHVybiBtYXJrZXIgPT09IEF0dHJpYnV0ZU1hcmtlci5CaW5kaW5ncyB8fCBtYXJrZXIgPT09IEF0dHJpYnV0ZU1hcmtlci5UZW1wbGF0ZSB8fFxuICAgICAgbWFya2VyID09PSBBdHRyaWJ1dGVNYXJrZXIuSTE4bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5pbWF0aW9uUHJvcChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gUGVyZiBub3RlOiBhY2Nlc3NpbmcgY2hhckNvZGVBdCB0byBjaGVjayBmb3IgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyBpcyBmYXN0ZXIgYXNcbiAgLy8gY29tcGFyZWQgdG8gYWNjZXNzaW5nIGEgY2hhcmFjdGVyIGF0IGluZGV4IDAgKGV4LiBuYW1lWzBdKS4gVGhlIG1haW4gcmVhc29uIGZvciB0aGlzIGlzIHRoYXRcbiAgLy8gY2hhckNvZGVBdCBkb2Vzbid0IGFsbG9jYXRlIG1lbW9yeSB0byByZXR1cm4gYSBzdWJzdHJpbmcuXG4gIHJldHVybiBuYW1lLmNoYXJDb2RlQXQoMCkgPT09IENoYXJDb2RlLkFUX1NJR047XG59XG5cbi8qKlxuICogTWVyZ2VzIGBzcmNgIGBUQXR0cmlidXRlc2AgaW50byBgZHN0YCBgVEF0dHJpYnV0ZXNgIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzIGluIHRoZSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgbWVyZ2UgZnVuY3Rpb24ga2VlcHMgdGhlIG9yZGVyIG9mIGF0dHJzIHNhbWUuXG4gKlxuICogQHBhcmFtIGRzdCBMb2NhdGlvbiBvZiB3aGVyZSB0aGUgbWVyZ2VkIGBUQXR0cmlidXRlc2Agc2hvdWxkIGVuZCB1cC5cbiAqIEBwYXJhbSBzcmMgYFRBdHRyaWJ1dGVzYCB3aGljaCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gYGRzdGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSG9zdEF0dHJzKGRzdDogVEF0dHJpYnV0ZXN8bnVsbCwgc3JjOiBUQXR0cmlidXRlc3xudWxsKTogVEF0dHJpYnV0ZXN8bnVsbCB7XG4gIGlmIChzcmMgPT09IG51bGwgfHwgc3JjLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIGlmIChkc3QgPT09IG51bGwgfHwgZHN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIFdlIGhhdmUgc291cmNlLCBidXQgZHN0IGlzIGVtcHR5LCBqdXN0IG1ha2UgYSBjb3B5LlxuICAgIGRzdCA9IHNyYy5zbGljZSgpO1xuICB9IGVsc2Uge1xuICAgIGxldCBzcmNNYXJrZXI6IEF0dHJpYnV0ZU1hcmtlciA9IEF0dHJpYnV0ZU1hcmtlci5JbXBsaWNpdEF0dHJpYnV0ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzcmNbaV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNyY01hcmtlciA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3JjTWFya2VyID09PSBBdHRyaWJ1dGVNYXJrZXIuTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgLy8gQ2FzZSB3aGVyZSB3ZSBuZWVkIHRvIGNvbnN1bWUgYGtleTFgLCBga2V5MmAsIGB2YWx1ZWAgaXRlbXMuXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBzcmNNYXJrZXIgPT09IEF0dHJpYnV0ZU1hcmtlci5JbXBsaWNpdEF0dHJpYnV0ZXMgfHxcbiAgICAgICAgICAgIHNyY01hcmtlciA9PT0gQXR0cmlidXRlTWFya2VyLlN0eWxlcykge1xuICAgICAgICAgIC8vIENhc2Ugd2hlcmUgd2UgaGF2ZSB0byBjb25zdW1lIGBrZXkxYCBhbmQgYHZhbHVlYCBvbmx5LlxuICAgICAgICAgIG1lcmdlSG9zdEF0dHJpYnV0ZShkc3QsIHNyY01hcmtlciwgaXRlbSBhcyBzdHJpbmcsIG51bGwsIHNyY1srK2ldIGFzIHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2FzZSB3aGVyZSB3ZSBoYXZlIHRvIGNvbnN1bWUgYGtleTFgIG9ubHkuXG4gICAgICAgICAgbWVyZ2VIb3N0QXR0cmlidXRlKGRzdCwgc3JjTWFya2VyLCBpdGVtIGFzIHN0cmluZywgbnVsbCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBBcHBlbmQgYGtleWAvYHZhbHVlYCB0byBleGlzdGluZyBgVEF0dHJpYnV0ZXNgIHRha2luZyByZWdpb24gbWFya2VyIGFuZCBkdXBsaWNhdGVzIGludG8gYWNjb3VudC5cbiAqXG4gKiBAcGFyYW0gZHN0IGBUQXR0cmlidXRlc2AgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIG1hcmtlciBSZWdpb24gd2hlcmUgdGhlIGBrZXlgL2B2YWx1ZWAgc2hvdWxkIGJlIGFkZGVkLlxuICogQHBhcmFtIGtleTEgS2V5IHRvIGFkZCB0byBgVEF0dHJpYnV0ZXNgXG4gKiBAcGFyYW0ga2V5MiBLZXkgdG8gYWRkIHRvIGBUQXR0cmlidXRlc2AgKGluIGNhc2Ugb2YgYEF0dHJpYnV0ZU1hcmtlci5OYW1lc3BhY2VVUklgKVxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIGFkZCBvciB0byBvdmVyd3JpdGUgdG8gYFRBdHRyaWJ1dGVzYCBPbmx5IHVzZWQgaWYgYG1hcmtlcmAgaXMgbm90IENsYXNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VIb3N0QXR0cmlidXRlKFxuICAgIGRzdDogVEF0dHJpYnV0ZXMsIG1hcmtlcjogQXR0cmlidXRlTWFya2VyLCBrZXkxOiBzdHJpbmcsIGtleTI6IHN0cmluZ3xudWxsLFxuICAgIHZhbHVlOiBzdHJpbmd8bnVsbCk6IHZvaWQge1xuICBsZXQgaSA9IDA7XG4gIC8vIEFzc3VtZSB0aGF0IG5ldyBtYXJrZXJzIHdpbGwgYmUgaW5zZXJ0ZWQgYXQgdGhlIGVuZC5cbiAgbGV0IG1hcmtlckluc2VydFBvc2l0aW9uID0gZHN0Lmxlbmd0aDtcbiAgLy8gc2NhbiB1bnRpbCBjb3JyZWN0IHR5cGUuXG4gIGlmIChtYXJrZXIgPT09IEF0dHJpYnV0ZU1hcmtlci5JbXBsaWNpdEF0dHJpYnV0ZXMpIHtcbiAgICBtYXJrZXJJbnNlcnRQb3NpdGlvbiA9IC0xO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChpIDwgZHN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgZHN0VmFsdWUgPSBkc3RbaSsrXTtcbiAgICAgIGlmICh0eXBlb2YgZHN0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkc3RWYWx1ZSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgbWFya2VySW5zZXJ0UG9zaXRpb24gPSAtMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChkc3RWYWx1ZSA+IG1hcmtlcikge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc2F2ZSB0aGlzIGFzIHdlIHdhbnQgdGhlIG1hcmtlcnMgdG8gYmUgaW5zZXJ0ZWQgaW4gc3BlY2lmaWMgb3JkZXIuXG4gICAgICAgICAgbWFya2VySW5zZXJ0UG9zaXRpb24gPSBpIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNlYXJjaCB1bnRpbCB5b3UgZmluZCBwbGFjZSBvZiBpbnNlcnRpb25cbiAgd2hpbGUgKGkgPCBkc3QubGVuZ3RoKSB7XG4gICAgY29uc3QgaXRlbSA9IGRzdFtpXTtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBzaW5jZSBgaWAgc3RhcnRlZCBhcyB0aGUgaW5kZXggYWZ0ZXIgdGhlIG1hcmtlciwgd2UgZGlkIG5vdCBmaW5kIGl0IGlmIHdlIGFyZSBhdCB0aGUgbmV4dFxuICAgICAgLy8gbWFya2VyXG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09IGtleTEpIHtcbiAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSBzYW1lIHRva2VuXG4gICAgICBpZiAoa2V5MiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBkc3RbaSArIDFdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChrZXkyID09PSBkc3RbaSArIDFdKSB7XG4gICAgICAgIGRzdFtpICsgMl0gPSB2YWx1ZSE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSW5jcmVtZW50IGNvdW50ZXIuXG4gICAgaSsrO1xuICAgIGlmIChrZXkyICE9PSBudWxsKSBpKys7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSBpKys7XG4gIH1cblxuICAvLyBpbnNlcnQgYXQgbG9jYXRpb24uXG4gIGlmIChtYXJrZXJJbnNlcnRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICBkc3Quc3BsaWNlKG1hcmtlckluc2VydFBvc2l0aW9uLCAwLCBtYXJrZXIpO1xuICAgIGkgPSBtYXJrZXJJbnNlcnRQb3NpdGlvbiArIDE7XG4gIH1cbiAgZHN0LnNwbGljZShpKyssIDAsIGtleTEpO1xuICBpZiAoa2V5MiAhPT0gbnVsbCkge1xuICAgIGRzdC5zcGxpY2UoaSsrLCAwLCBrZXkyKTtcbiAgfVxuICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICBkc3Quc3BsaWNlKGkrKywgMCwgdmFsdWUpO1xuICB9XG59Il19