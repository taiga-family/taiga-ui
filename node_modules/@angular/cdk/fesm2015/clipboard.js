import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, EventEmitter, Directive, NgZone, Optional, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/pending-copy.ts
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
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
class PendingCopy {
    /**
     * @param {?} text
     * @param {?} _document
     */
    constructor(text, _document) {
        this._document = _document;
        /** @type {?} */
        const textarea = this._textarea = this._document.createElement('textarea');
        /** @type {?} */
        const styles = textarea.style;
        // Hide the element for display and accessibility. Set an
        // absolute position so the page layout isn't affected.
        styles.opacity = '0';
        styles.position = 'absolute';
        styles.left = styles.top = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /**
     * Finishes copying the text.
     * @return {?}
     */
    copy() {
        /** @type {?} */
        const textarea = this._textarea;
        /** @type {?} */
        let successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                /** @type {?} */
                const currentFocus = (/** @type {?} */ (this._document.activeElement));
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    }
    /**
     * Cleans up DOM changes used to perform the copy operation.
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PendingCopy.prototype._textarea;
    /**
     * @type {?}
     * @private
     */
    PendingCopy.prototype._document;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
    /**
     * @param {?} document
     */
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param {?} text The string to copy.
     * @return {?} Whether the operation was successful.
     */
    copy(text) {
        /** @type {?} */
        const pendingCopy = this.beginCopy(text);
        /** @type {?} */
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param {?} text The string to copy.
     * @return {?} the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ Clipboard.ɵprov = ɵɵdefineInjectable({ factory: function Clipboard_Factory() { return new Clipboard(ɵɵinject(DOCUMENT)); }, token: Clipboard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Clipboard.prototype._document;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/copy-to-clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the default options for `CdkCopyToClipboard`.
 * @record
 */
function CdkCopyToClipboardConfig() { }
if (false) {
    /**
     * Default number of attempts to make when copying text to the clipboard.
     * @type {?|undefined}
     */
    CdkCopyToClipboardConfig.prototype.attempts;
}
/**
 * Injection token that can be used to provide the default options to `CdkCopyToClipboard`.
 * @type {?}
 */
const CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
    /**
     * @param {?} _clipboard
     * @param {?=} _ngZone
     * @param {?=} config
     */
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /**
         * Content to be copied.
         */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new EventEmitter();
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         * @deprecated Use `cdkCopyToClipboardCopied` instead.
         * \@breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        /**
         * Copies that are currently being attempted.
         */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /**
     * Copies the current text to the clipboard.
     * @param {?=} attempts
     * @return {?}
     */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            /** @type {?} */
            let remainingAttempts = attempts;
            /** @type {?} */
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            /** @type {?} */
            const attempt = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (this._ngZone) {
                        this._currentTimeout = this._ngZone.runOutsideAngular((/**
                         * @return {?}
                         */
                        () => setTimeout(attempt, 1)));
                    }
                    else {
                        // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                        this._currentTimeout = setTimeout(attempt, 1);
                    }
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            });
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach((/**
         * @param {?} copy
         * @return {?}
         */
        copy => copy.destroy()));
        this._pending.clear();
        this._destroyed = true;
    }
}
CdkCopyToClipboard.decorators = [
    { type: Directive, args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()',
                }
            },] }
];
/** @nocollapse */
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: Input, args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: Input, args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: Output, args: ['cdkCopyToClipboardCopied',] }],
    _deprecatedCopied: [{ type: Output, args: ['copied',] }]
};
if (false) {
    /**
     * Content to be copied.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.text;
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.attempts;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.copied;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @deprecated Use `cdkCopyToClipboardCopied` instead.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    CdkCopyToClipboard.prototype._deprecatedCopied;
    /**
     * Copies that are currently being attempted.
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._pending;
    /**
     * Whether the directive has been destroyed.
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._destroyed;
    /**
     * Timeout for the current copy attempt.
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._currentTimeout;
    /**
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._clipboard;
    /**
     * @deprecated _ngZone parameter to become required.
     * \@breaking-change 10.0.0
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardModule {
}
ClipboardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CdkCopyToClipboard],
                exports: [CdkCopyToClipboard],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy };
//# sourceMappingURL=clipboard.js.map
