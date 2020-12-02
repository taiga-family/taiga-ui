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
 * @param className A string containing classes (whitespace separated)
 * @param classToSearch A class name to locate
 * @param startingIndex Starting location of search
 * @returns an index of the located class (or -1 if not found)
 */
export function classIndexOf(className, classToSearch, startingIndex) {
    ngDevMode && assertNotEqual(classToSearch, '', 'can not look for "" string.');
    var end = className.length;
    while (true) {
        var foundIndex = className.indexOf(classToSearch, startingIndex);
        if (foundIndex === -1)
            return foundIndex;
        if (foundIndex === 0 || className.charCodeAt(foundIndex - 1) <= 32 /* SPACE */) {
            // Ensure that it has leading whitespace
            var length_1 = classToSearch.length;
            if (foundIndex + length_1 === end ||
                className.charCodeAt(foundIndex + length_1) <= 32 /* SPACE */) {
                // Ensure that it has trailing whitespace
                return foundIndex;
            }
        }
        // False positive, keep searching from where we left off.
        startingIndex = foundIndex + 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfZGlmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9zdHlsaW5nL2NsYXNzX2RpZmZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFJakQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FDeEIsU0FBaUIsRUFBRSxhQUFxQixFQUFFLGFBQXFCO0lBQ2pFLFNBQVMsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzlFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDM0IsT0FBTyxJQUFJLEVBQUU7UUFDWCxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLFVBQVUsQ0FBQztRQUN6QyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQzlFLHdDQUF3QztZQUN4QyxJQUFNLFFBQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksVUFBVSxHQUFHLFFBQU0sS0FBSyxHQUFHO2dCQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxRQUFNLENBQUMsa0JBQWtCLEVBQUU7Z0JBQy9ELHlDQUF5QztnQkFDekMsT0FBTyxVQUFVLENBQUM7YUFDbkI7U0FDRjtRQUNELHlEQUF5RDtRQUN6RCxhQUFhLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztLQUNoQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7YXNzZXJ0Tm90RXF1YWx9IGZyb20gJy4uLy4uL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Q2hhckNvZGV9IGZyb20gJy4uLy4uL3V0aWwvY2hhcl9jb2RlJztcblxuXG4vKipcbiAqIFJldHVybnMgYW4gaW5kZXggb2YgYGNsYXNzVG9TZWFyY2hgIGluIGBjbGFzc05hbWVgIHRha2luZyB0b2tlbiBib3VuZGFyaWVzIGludG8gYWNjb3VudC5cbiAqXG4gKiBgY2xhc3NJbmRleE9mKCdBQiBBJywgJ0EnLCAwKWAgd2lsbCBiZSAzIChub3QgMCBzaW5jZSBgQUIhPT1BYClcbiAqXG4gKiBAcGFyYW0gY2xhc3NOYW1lIEEgc3RyaW5nIGNvbnRhaW5pbmcgY2xhc3NlcyAod2hpdGVzcGFjZSBzZXBhcmF0ZWQpXG4gKiBAcGFyYW0gY2xhc3NUb1NlYXJjaCBBIGNsYXNzIG5hbWUgdG8gbG9jYXRlXG4gKiBAcGFyYW0gc3RhcnRpbmdJbmRleCBTdGFydGluZyBsb2NhdGlvbiBvZiBzZWFyY2hcbiAqIEByZXR1cm5zIGFuIGluZGV4IG9mIHRoZSBsb2NhdGVkIGNsYXNzIChvciAtMSBpZiBub3QgZm91bmQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc0luZGV4T2YoXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsIGNsYXNzVG9TZWFyY2g6IHN0cmluZywgc3RhcnRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydE5vdEVxdWFsKGNsYXNzVG9TZWFyY2gsICcnLCAnY2FuIG5vdCBsb29rIGZvciBcIlwiIHN0cmluZy4nKTtcbiAgbGV0IGVuZCA9IGNsYXNzTmFtZS5sZW5ndGg7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgZm91bmRJbmRleCA9IGNsYXNzTmFtZS5pbmRleE9mKGNsYXNzVG9TZWFyY2gsIHN0YXJ0aW5nSW5kZXgpO1xuICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgcmV0dXJuIGZvdW5kSW5kZXg7XG4gICAgaWYgKGZvdW5kSW5kZXggPT09IDAgfHwgY2xhc3NOYW1lLmNoYXJDb2RlQXQoZm91bmRJbmRleCAtIDEpIDw9IENoYXJDb2RlLlNQQUNFKSB7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBpdCBoYXMgbGVhZGluZyB3aGl0ZXNwYWNlXG4gICAgICBjb25zdCBsZW5ndGggPSBjbGFzc1RvU2VhcmNoLmxlbmd0aDtcbiAgICAgIGlmIChmb3VuZEluZGV4ICsgbGVuZ3RoID09PSBlbmQgfHxcbiAgICAgICAgICBjbGFzc05hbWUuY2hhckNvZGVBdChmb3VuZEluZGV4ICsgbGVuZ3RoKSA8PSBDaGFyQ29kZS5TUEFDRSkge1xuICAgICAgICAvLyBFbnN1cmUgdGhhdCBpdCBoYXMgdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgICAgICByZXR1cm4gZm91bmRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsc2UgcG9zaXRpdmUsIGtlZXAgc2VhcmNoaW5nIGZyb20gd2hlcmUgd2UgbGVmdCBvZmYuXG4gICAgc3RhcnRpbmdJbmRleCA9IGZvdW5kSW5kZXggKyAxO1xuICB9XG59Il19