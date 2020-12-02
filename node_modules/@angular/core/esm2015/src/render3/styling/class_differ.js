/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/styling/class_differ.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertNotEqual } from '../../util/assert';
/**
 * Returns an index of `classToSearch` in `className` taking token boundaries into account.
 *
 * `classIndexOf('AB A', 'A', 0)` will be 3 (not 0 since `AB!==A`)
 *
 * @param {?} className A string containing classes (whitespace separated)
 * @param {?} classToSearch A class name to locate
 * @param {?} startingIndex Starting location of search
 * @return {?} an index of the located class (or -1 if not found)
 */
export function classIndexOf(className, classToSearch, startingIndex) {
    ngDevMode && assertNotEqual(classToSearch, '', 'can not look for "" string.');
    /** @type {?} */
    let end = className.length;
    while (true) {
        /** @type {?} */
        const foundIndex = className.indexOf(classToSearch, startingIndex);
        if (foundIndex === -1)
            return foundIndex;
        if (foundIndex === 0 || className.charCodeAt(foundIndex - 1) <= 32 /* SPACE */) {
            // Ensure that it has leading whitespace
            /** @type {?} */
            const length = classToSearch.length;
            if (foundIndex + length === end ||
                className.charCodeAt(foundIndex + length) <= 32 /* SPACE */) {
                // Ensure that it has trailing whitespace
                return foundIndex;
            }
        }
        // False positive, keep searching from where we left off.
        startingIndex = foundIndex + 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfZGlmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9zdHlsaW5nL2NsYXNzX2RpZmZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBY2pELE1BQU0sVUFBVSxZQUFZLENBQ3hCLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxhQUFxQjtJQUNqRSxTQUFTLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsNkJBQTZCLENBQUMsQ0FBQzs7UUFDMUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNO0lBQzFCLE9BQU8sSUFBSSxFQUFFOztjQUNMLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFDbEUsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDO1lBQUUsT0FBTyxVQUFVLENBQUM7UUFDekMsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRTs7O2tCQUV4RSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU07WUFDbkMsSUFBSSxVQUFVLEdBQUcsTUFBTSxLQUFLLEdBQUc7Z0JBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtnQkFDL0QseUNBQXlDO2dCQUN6QyxPQUFPLFVBQVUsQ0FBQzthQUNuQjtTQUNGO1FBQ0QseURBQXlEO1FBQ3pELGFBQWEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnROb3RFcXVhbH0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtDaGFyQ29kZX0gZnJvbSAnLi4vLi4vdXRpbC9jaGFyX2NvZGUnO1xuXG5cbi8qKlxuICogUmV0dXJucyBhbiBpbmRleCBvZiBgY2xhc3NUb1NlYXJjaGAgaW4gYGNsYXNzTmFtZWAgdGFraW5nIHRva2VuIGJvdW5kYXJpZXMgaW50byBhY2NvdW50LlxuICpcbiAqIGBjbGFzc0luZGV4T2YoJ0FCIEEnLCAnQScsIDApYCB3aWxsIGJlIDMgKG5vdCAwIHNpbmNlIGBBQiE9PUFgKVxuICpcbiAqIEBwYXJhbSBjbGFzc05hbWUgQSBzdHJpbmcgY29udGFpbmluZyBjbGFzc2VzICh3aGl0ZXNwYWNlIHNlcGFyYXRlZClcbiAqIEBwYXJhbSBjbGFzc1RvU2VhcmNoIEEgY2xhc3MgbmFtZSB0byBsb2NhdGVcbiAqIEBwYXJhbSBzdGFydGluZ0luZGV4IFN0YXJ0aW5nIGxvY2F0aW9uIG9mIHNlYXJjaFxuICogQHJldHVybnMgYW4gaW5kZXggb2YgdGhlIGxvY2F0ZWQgY2xhc3MgKG9yIC0xIGlmIG5vdCBmb3VuZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzSW5kZXhPZihcbiAgICBjbGFzc05hbWU6IHN0cmluZywgY2xhc3NUb1NlYXJjaDogc3RyaW5nLCBzdGFydGluZ0luZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Tm90RXF1YWwoY2xhc3NUb1NlYXJjaCwgJycsICdjYW4gbm90IGxvb2sgZm9yIFwiXCIgc3RyaW5nLicpO1xuICBsZXQgZW5kID0gY2xhc3NOYW1lLmxlbmd0aDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NUb1NlYXJjaCwgc3RhcnRpbmdJbmRleCk7XG4gICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSByZXR1cm4gZm91bmRJbmRleDtcbiAgICBpZiAoZm91bmRJbmRleCA9PT0gMCB8fCBjbGFzc05hbWUuY2hhckNvZGVBdChmb3VuZEluZGV4IC0gMSkgPD0gQ2hhckNvZGUuU1BBQ0UpIHtcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGl0IGhhcyBsZWFkaW5nIHdoaXRlc3BhY2VcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGNsYXNzVG9TZWFyY2gubGVuZ3RoO1xuICAgICAgaWYgKGZvdW5kSW5kZXggKyBsZW5ndGggPT09IGVuZCB8fFxuICAgICAgICAgIGNsYXNzTmFtZS5jaGFyQ29kZUF0KGZvdW5kSW5kZXggKyBsZW5ndGgpIDw9IENoYXJDb2RlLlNQQUNFKSB7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGl0IGhhcyB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgICAgIHJldHVybiBmb3VuZEluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBGYWxzZSBwb3NpdGl2ZSwga2VlcCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBsZWZ0IG9mZi5cbiAgICBzdGFydGluZ0luZGV4ID0gZm91bmRJbmRleCArIDE7XG4gIH1cbn0iXX0=