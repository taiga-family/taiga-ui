import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, EventEmitter, Directive, NgZone, Optional, Input, Output, NgModule } from '@angular/core';

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
var PendingCopy = /** @class */ (function () {
    function PendingCopy(text, _document) {
        this._document = _document;
        var textarea = this._textarea = this._document.createElement('textarea');
        var styles = textarea.style;
        // Hide the element for display and accessibility. Set an
        // absolute position so the page layout isn't affected.
        styles.opacity = '0';
        styles.position = 'absolute';
        styles.left = styles.top = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /** Finishes copying the text. */
    PendingCopy.prototype.copy = function () {
        var textarea = this._textarea;
        var successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                var currentFocus = this._document.activeElement;
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
    };
    /** Cleans up DOM changes used to perform the copy operation. */
    PendingCopy.prototype.destroy = function () {
        var textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    };
    return PendingCopy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service for copying text to the clipboard.
 */
var Clipboard = /** @class */ (function () {
    function Clipboard(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    Clipboard.prototype.copy = function (text) {
        var pendingCopy = this.beginCopy(text);
        var successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    };
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    Clipboard.prototype.beginCopy = function (text) {
        return new PendingCopy(text, this._document);
    };
    Clipboard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Clipboard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    Clipboard.ɵprov = ɵɵdefineInjectable({ factory: function Clipboard_Factory() { return new Clipboard(ɵɵinject(DOCUMENT)); }, token: Clipboard, providedIn: "root" });
    return Clipboard;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
var CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
var CdkCopyToClipboard = /** @class */ (function () {
    function CdkCopyToClipboard(_clipboard, 
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /** Content to be copied. */
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
         * @breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        /** Copies that are currently being attempted. */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /** Copies the current text to the clipboard. */
    CdkCopyToClipboard.prototype.copy = function (attempts) {
        var _this = this;
        if (attempts === void 0) { attempts = this.attempts; }
        if (attempts > 1) {
            var remainingAttempts_1 = attempts;
            var pending_1 = this._clipboard.beginCopy(this.text);
            this._pending.add(pending_1);
            var attempt_1 = function () {
                var successful = pending_1.copy();
                if (!successful && --remainingAttempts_1 && !_this._destroyed) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (_this._ngZone) {
                        _this._currentTimeout = _this._ngZone.runOutsideAngular(function () { return setTimeout(attempt_1, 1); });
                    }
                    else {
                        // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                        _this._currentTimeout = setTimeout(attempt_1, 1);
                    }
                }
                else {
                    _this._currentTimeout = null;
                    _this._pending.delete(pending_1);
                    pending_1.destroy();
                    _this.copied.emit(successful);
                }
            };
            attempt_1();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    };
    CdkCopyToClipboard.prototype.ngOnDestroy = function () {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach(function (copy) { return copy.destroy(); });
        this._pending.clear();
        this._destroyed = true;
    };
    CdkCopyToClipboard.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkCopyToClipboard]',
                    host: {
                        '(click)': 'copy()',
                    }
                },] }
    ];
    /** @nocollapse */
    CdkCopyToClipboard.ctorParameters = function () { return [
        { type: Clipboard },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
    ]; };
    CdkCopyToClipboard.propDecorators = {
        text: [{ type: Input, args: ['cdkCopyToClipboard',] }],
        attempts: [{ type: Input, args: ['cdkCopyToClipboardAttempts',] }],
        copied: [{ type: Output, args: ['cdkCopyToClipboardCopied',] }],
        _deprecatedCopied: [{ type: Output, args: ['copied',] }]
    };
    return CdkCopyToClipboard;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CdkCopyToClipboard],
                    exports: [CdkCopyToClipboard],
                },] }
    ];
    return ClipboardModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy };
//# sourceMappingURL=clipboard.js.map
