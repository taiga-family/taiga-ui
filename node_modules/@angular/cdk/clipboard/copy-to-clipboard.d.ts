/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, NgZone, InjectionToken, OnDestroy } from '@angular/core';
import { Clipboard } from './clipboard';
/** Object that can be used to configure the default options for `CdkCopyToClipboard`. */
import * as ɵngcc0 from '@angular/core';
export interface CdkCopyToClipboardConfig {
    /** Default number of attempts to make when copying text to the clipboard. */
    attempts?: number;
}
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
export declare const CKD_COPY_TO_CLIPBOARD_CONFIG: InjectionToken<CdkCopyToClipboardConfig>;
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
export declare class CdkCopyToClipboard implements OnDestroy {
    private _clipboard;
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    private _ngZone?;
    /** Content to be copied. */
    text: string;
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */
    attempts: number;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */
    copied: EventEmitter<boolean>;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @deprecated Use `cdkCopyToClipboardCopied` instead.
     * @breaking-change 10.0.0
     */
    _deprecatedCopied: EventEmitter<boolean>;
    /** Copies that are currently being attempted. */
    private _pending;
    /** Whether the directive has been destroyed. */
    private _destroyed;
    /** Timeout for the current copy attempt. */
    private _currentTimeout;
    constructor(_clipboard: Clipboard, 
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    _ngZone?: NgZone | undefined, config?: CdkCopyToClipboardConfig);
    /** Copies the current text to the clipboard. */
    copy(attempts?: number): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCopyToClipboard, [null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCopyToClipboard, "[cdkCopyToClipboard]", never, { "text": "cdkCopyToClipboard"; "attempts": "cdkCopyToClipboardAttempts"; }, { "copied": "cdkCopyToClipboardCopied"; "_deprecatedCopied": "copied"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuZC50cyIsInNvdXJjZXMiOlsiY29weS10by1jbGlwYm9hcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnLi9jbGlwYm9hcmQnO1xuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBgQ2RrQ29weVRvQ2xpcGJvYXJkYC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnIHtcbiAgICAvKiogRGVmYXVsdCBudW1iZXIgb2YgYXR0ZW1wdHMgdG8gbWFrZSB3aGVuIGNvcHlpbmcgdGV4dCB0byB0aGUgY2xpcGJvYXJkLiAqL1xuICAgIGF0dGVtcHRzPzogbnVtYmVyO1xufVxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucyB0byBgQ2RrQ29weVRvQ2xpcGJvYXJkYC4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUc6IEluamVjdGlvblRva2VuPENka0NvcHlUb0NsaXBib2FyZENvbmZpZz47XG4vKipcbiAqIFByb3ZpZGVzIGJlaGF2aW9yIGZvciBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBjb3BpZXMgY29udGVudCBpbnRvIHVzZXInc1xuICogY2xpcGJvYXJkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDb3B5VG9DbGlwYm9hcmQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2NsaXBib2FyZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBfbmdab25lIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9uZ1pvbmU/O1xuICAgIC8qKiBDb250ZW50IHRvIGJlIGNvcGllZC4gKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgdGltZXMgdG8gYXR0ZW1wdCB0byBjb3B5IHRoZSB0ZXh0LiBUaGlzIG1heSBiZSBuZWNlc3NhcnkgZm9yIGxvbmdlciB0ZXh0LCBiZWNhdXNlXG4gICAgICogdGhlIGJyb3dzZXIgbmVlZHMgdGltZSB0byBmaWxsIGFuIGludGVybWVkaWF0ZSB0ZXh0YXJlYSBlbGVtZW50IGFuZCBjb3B5IHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIGF0dGVtcHRzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiBzb21lIHRleHQgaXMgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuIFRoZVxuICAgICAqIGVtaXR0ZWQgdmFsdWUgaW5kaWNhdGVzIHdoZXRoZXIgY29weWluZyB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgKi9cbiAgICBjb3BpZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyB3aGVuIHNvbWUgdGV4dCBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gVGhlXG4gICAgICogZW1pdHRlZCB2YWx1ZSBpbmRpY2F0ZXMgd2hldGhlciBjb3B5aW5nIHdhcyBzdWNjZXNzZnVsLlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBgY2RrQ29weVRvQ2xpcGJvYXJkQ29waWVkYCBpbnN0ZWFkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgX2RlcHJlY2F0ZWRDb3BpZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICAvKiogQ29waWVzIHRoYXQgYXJlIGN1cnJlbnRseSBiZWluZyBhdHRlbXB0ZWQuICovXG4gICAgcHJpdmF0ZSBfcGVuZGluZztcbiAgICAvKiogV2hldGhlciB0aGUgZGlyZWN0aXZlIGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgICBwcml2YXRlIF9kZXN0cm95ZWQ7XG4gICAgLyoqIFRpbWVvdXQgZm9yIHRoZSBjdXJyZW50IGNvcHkgYXR0ZW1wdC4gKi9cbiAgICBwcml2YXRlIF9jdXJyZW50VGltZW91dDtcbiAgICBjb25zdHJ1Y3RvcihfY2xpcGJvYXJkOiBDbGlwYm9hcmQsIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIF9uZ1pvbmUgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIF9uZ1pvbmU/OiBOZ1pvbmUgfCB1bmRlZmluZWQsIGNvbmZpZz86IENka0NvcHlUb0NsaXBib2FyZENvbmZpZyk7XG4gICAgLyoqIENvcGllcyB0aGUgY3VycmVudCB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQuICovXG4gICAgY29weShhdHRlbXB0cz86IG51bWJlcik6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==