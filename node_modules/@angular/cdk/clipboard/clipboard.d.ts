/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PendingCopy } from './pending-copy';
/**
 * A service for copying text to the clipboard.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Clipboard {
    private readonly _document;
    constructor(document: any);
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    copy(text: string): boolean;
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    beginCopy(text: string): PendingCopy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Clipboard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmQudHMiLCJzb3VyY2VzIjpbImNsaXBib2FyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgUGVuZGluZ0NvcHkgfSBmcm9tICcuL3BlbmRpbmctY29weSc7XG4vKipcbiAqIEEgc2VydmljZSBmb3IgY29weWluZyB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENsaXBib2FyZCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSk7XG4gICAgLyoqXG4gICAgICogQ29waWVzIHRoZSBwcm92aWRlZCB0ZXh0IGludG8gdGhlIHVzZXIncyBjbGlwYm9hcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGV4dCBUaGUgc3RyaW5nIHRvIGNvcHkuXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgb3BlcmF0aW9uIHdhcyBzdWNjZXNzZnVsLlxuICAgICAqL1xuICAgIGNvcHkodGV4dDogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBhIHN0cmluZyB0byBiZSBjb3BpZWQgbGF0ZXIuIFRoaXMgaXMgdXNlZnVsIGZvciBsYXJnZSBzdHJpbmdzXG4gICAgICogd2hpY2ggdGFrZSB0b28gbG9uZyB0byBzdWNjZXNzZnVsbHkgcmVuZGVyIGFuZCBiZSBjb3BpZWQgaW4gdGhlIHNhbWUgdGljay5cbiAgICAgKlxuICAgICAqIFRoZSBjYWxsZXIgbXVzdCBjYWxsIGBkZXN0cm95YCBvbiB0aGUgcmV0dXJuZWQgYFBlbmRpbmdDb3B5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZXh0IFRoZSBzdHJpbmcgdG8gY29weS5cbiAgICAgKiBAcmV0dXJucyB0aGUgcGVuZGluZyBjb3B5IG9wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBiZWdpbkNvcHkodGV4dDogc3RyaW5nKTogUGVuZGluZ0NvcHk7XG59XG4iXX0=