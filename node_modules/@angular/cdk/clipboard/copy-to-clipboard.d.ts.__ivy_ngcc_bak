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
}
