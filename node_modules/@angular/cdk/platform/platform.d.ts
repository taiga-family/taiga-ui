/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Platform {
    private _platformId?;
    /** Whether the Angular application is being rendered in the browser. */
    isBrowser: boolean;
    /** Whether the current browser is Microsoft Edge. */
    EDGE: boolean;
    /** Whether the current rendering engine is Microsoft Trident. */
    TRIDENT: boolean;
    /** Whether the current rendering engine is Blink. */
    BLINK: boolean;
    /** Whether the current rendering engine is WebKit. */
    WEBKIT: boolean;
    /** Whether the current platform is Apple iOS. */
    IOS: boolean;
    /** Whether the current browser is Firefox. */
    FIREFOX: boolean;
    /** Whether the current platform is Android. */
    ANDROID: boolean;
    /** Whether the current browser is Safari. */
    SAFARI: boolean;
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    constructor(_platformId?: Object | undefined);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Platform, [{ optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZC50cyIsInNvdXJjZXMiOlsicGxhdGZvcm0uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGxhdGZvcm0ge1xuICAgIHByaXZhdGUgX3BsYXRmb3JtSWQ/O1xuICAgIC8qKiBXaGV0aGVyIHRoZSBBbmd1bGFyIGFwcGxpY2F0aW9uIGlzIGJlaW5nIHJlbmRlcmVkIGluIHRoZSBicm93c2VyLiAqL1xuICAgIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIGlzIE1pY3Jvc29mdCBFZGdlLiAqL1xuICAgIEVER0U6IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcmVuZGVyaW5nIGVuZ2luZSBpcyBNaWNyb3NvZnQgVHJpZGVudC4gKi9cbiAgICBUUklERU5UOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgQmxpbmsuICovXG4gICAgQkxJTks6IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcmVuZGVyaW5nIGVuZ2luZSBpcyBXZWJLaXQuICovXG4gICAgV0VCS0lUOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlzIEFwcGxlIGlPUy4gKi9cbiAgICBJT1M6IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBGaXJlZm94LiAqL1xuICAgIEZJUkVGT1g6IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gaXMgQW5kcm9pZC4gKi9cbiAgICBBTkRST0lEOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgU2FmYXJpLiAqL1xuICAgIFNBRkFSSTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHJlbW92ZSBvcHRpb25hbCBkZWNvcmF0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfcGxhdGZvcm1JZD86IE9iamVjdCB8IHVuZGVmaW5lZCk7XG59XG4iXX0=