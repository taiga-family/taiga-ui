/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/copy-to-clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, EventEmitter, Input, Output, NgZone, InjectionToken, Inject, Optional, } from '@angular/core';
import { Clipboard } from './clipboard';
/**
 * Object that can be used to configure the default options for `CdkCopyToClipboard`.
 * @record
 */
export function CdkCopyToClipboardConfig() { }
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
export const CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
export class CdkCopyToClipboard {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NsaXBib2FyZC9jb3B5LXRvLWNsaXBib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7OztBQUl0Qyw4Q0FHQzs7Ozs7O0lBREMsNENBQWtCOzs7Ozs7QUFJcEIsTUFBTSxPQUFPLDRCQUE0QixHQUNyQyxJQUFJLGNBQWMsQ0FBMkIsOEJBQThCLENBQUM7Ozs7O0FBWWhGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQWlDN0IsWUFDVSxVQUFxQixFQUtyQixPQUFnQixFQUMwQixNQUFpQztRQU4zRSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBS3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7Ozs7UUFyQ0csU0FBSSxHQUFXLEVBQUUsQ0FBQzs7Ozs7UUFNVixhQUFRLEdBQVcsQ0FBQyxDQUFDOzs7OztRQU10QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7Ozs7OztRQVF2RCxzQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7O1FBRzFDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBaUJ4QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFHRCxJQUFJLENBQUMsV0FBbUIsSUFBSSxDQUFDLFFBQVE7UUFDbkMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFOztnQkFDWixpQkFBaUIsR0FBRyxRQUFROztrQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O2tCQUVyQixPQUFPOzs7WUFBRyxHQUFHLEVBQUU7O3NCQUNiLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUMxRCwyREFBMkQ7b0JBQzNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztxQkFDckY7eUJBQU07d0JBQ0wsb0ZBQW9GO3dCQUNwRixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQy9DO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDOUI7WUFDSCxDQUFDLENBQUE7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFFBQVE7aUJBQ3BCO2FBQ0Y7Ozs7WUF0Qk8sU0FBUztZQU5mLE1BQU07NENBcUVILFFBQVEsWUFBSSxNQUFNLFNBQUMsNEJBQTRCOzs7bUJBdENqRCxLQUFLLFNBQUMsb0JBQW9CO3VCQU0xQixLQUFLLFNBQUMsNEJBQTRCO3FCQU1sQyxNQUFNLFNBQUMsMEJBQTBCO2dDQVFqQyxNQUFNLFNBQUMsUUFBUTs7Ozs7OztJQXBCaEIsa0NBQStDOzs7Ozs7SUFNL0Msc0NBQTBEOzs7Ozs7SUFNMUQsb0NBQXlFOzs7Ozs7OztJQVF6RSwrQ0FBa0Q7Ozs7OztJQUdsRCxzQ0FBMEM7Ozs7OztJQUcxQyx3Q0FBNEI7Ozs7OztJQUc1Qiw2Q0FBNkI7Ozs7O0lBRzNCLHdDQUE2Qjs7Ozs7OztJQUs3QixxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE5nWm9uZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnLi9jbGlwYm9hcmQnO1xuaW1wb3J0IHtQZW5kaW5nQ29weX0gZnJvbSAnLi9wZW5kaW5nLWNvcHknO1xuXG4vKiogT2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGBDZGtDb3B5VG9DbGlwYm9hcmRgLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtDb3B5VG9DbGlwYm9hcmRDb25maWcge1xuICAvKiogRGVmYXVsdCBudW1iZXIgb2YgYXR0ZW1wdHMgdG8gbWFrZSB3aGVuIGNvcHlpbmcgdGV4dCB0byB0aGUgY2xpcGJvYXJkLiAqL1xuICBhdHRlbXB0cz86IG51bWJlcjtcbn1cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucyB0byBgQ2RrQ29weVRvQ2xpcGJvYXJkYC4gKi9cbmV4cG9ydCBjb25zdCBDS0RfQ09QWV9UT19DTElQQk9BUkRfQ09ORklHID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48Q2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnPignQ0tEX0NPUFlfVE9fQ0xJUEJPQVJEX0NPTkZJRycpO1xuXG4vKipcbiAqIFByb3ZpZGVzIGJlaGF2aW9yIGZvciBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBjb3BpZXMgY29udGVudCBpbnRvIHVzZXInc1xuICogY2xpcGJvYXJkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrQ29weVRvQ2xpcGJvYXJkXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdjb3B5KCknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENka0NvcHlUb0NsaXBib2FyZCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDb250ZW50IHRvIGJlIGNvcGllZC4gKi9cbiAgQElucHV0KCdjZGtDb3B5VG9DbGlwYm9hcmQnKSB0ZXh0OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogSG93IG1hbnkgdGltZXMgdG8gYXR0ZW1wdCB0byBjb3B5IHRoZSB0ZXh0LiBUaGlzIG1heSBiZSBuZWNlc3NhcnkgZm9yIGxvbmdlciB0ZXh0LCBiZWNhdXNlXG4gICAqIHRoZSBicm93c2VyIG5lZWRzIHRpbWUgdG8gZmlsbCBhbiBpbnRlcm1lZGlhdGUgdGV4dGFyZWEgZWxlbWVudCBhbmQgY29weSB0aGUgY29udGVudC5cbiAgICovXG4gIEBJbnB1dCgnY2RrQ29weVRvQ2xpcGJvYXJkQXR0ZW1wdHMnKSBhdHRlbXB0czogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBzb21lIHRleHQgaXMgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuIFRoZVxuICAgKiBlbWl0dGVkIHZhbHVlIGluZGljYXRlcyB3aGV0aGVyIGNvcHlpbmcgd2FzIHN1Y2Nlc3NmdWwuXG4gICAqL1xuICBAT3V0cHV0KCdjZGtDb3B5VG9DbGlwYm9hcmRDb3BpZWQnKSBjb3BpZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gc29tZSB0ZXh0IGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBUaGVcbiAgICogZW1pdHRlZCB2YWx1ZSBpbmRpY2F0ZXMgd2hldGhlciBjb3B5aW5nIHdhcyBzdWNjZXNzZnVsLlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGNka0NvcHlUb0NsaXBib2FyZENvcGllZGAgaW5zdGVhZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIEBPdXRwdXQoJ2NvcGllZCcpIF9kZXByZWNhdGVkQ29waWVkID0gdGhpcy5jb3BpZWQ7XG5cbiAgLyoqIENvcGllcyB0aGF0IGFyZSBjdXJyZW50bHkgYmVpbmcgYXR0ZW1wdGVkLiAqL1xuICBwcml2YXRlIF9wZW5kaW5nID0gbmV3IFNldDxQZW5kaW5nQ29weT4oKTtcblxuICAvKiogV2hldGhlciB0aGUgZGlyZWN0aXZlIGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuO1xuXG4gIC8qKiBUaW1lb3V0IGZvciB0aGUgY3VycmVudCBjb3B5IGF0dGVtcHQuICovXG4gIHByaXZhdGUgX2N1cnJlbnRUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2xpcGJvYXJkOiBDbGlwYm9hcmQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgX25nWm9uZSBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmdab25lPzogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ0tEX0NPUFlfVE9fQ0xJUEJPQVJEX0NPTkZJRykgY29uZmlnPzogQ2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnKSB7XG5cbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hdHRlbXB0cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmF0dGVtcHRzID0gY29uZmlnLmF0dGVtcHRzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDb3BpZXMgdGhlIGN1cnJlbnQgdGV4dCB0byB0aGUgY2xpcGJvYXJkLiAqL1xuICBjb3B5KGF0dGVtcHRzOiBudW1iZXIgPSB0aGlzLmF0dGVtcHRzKTogdm9pZCB7XG4gICAgaWYgKGF0dGVtcHRzID4gMSkge1xuICAgICAgbGV0IHJlbWFpbmluZ0F0dGVtcHRzID0gYXR0ZW1wdHM7XG4gICAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5fY2xpcGJvYXJkLmJlZ2luQ29weSh0aGlzLnRleHQpO1xuICAgICAgdGhpcy5fcGVuZGluZy5hZGQocGVuZGluZyk7XG5cbiAgICAgIGNvbnN0IGF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBwZW5kaW5nLmNvcHkoKTtcbiAgICAgICAgaWYgKCFzdWNjZXNzZnVsICYmIC0tcmVtYWluaW5nQXR0ZW1wdHMgJiYgIXRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wIFJlbW92ZSBudWxsIGNoZWNrIGZvciBgX25nWm9uZWAuXG4gICAgICAgICAgaWYgKHRoaXMuX25nWm9uZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVvdXQgPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChhdHRlbXB0LCAxKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIHVzZSAxIGZvciB0aGUgdGltZW91dCBzaW5jZSBpdCdzIG1vcmUgcHJlZGljdGFibGUgd2hlbiBmbHVzaGluZyBpbiB1bml0IHRlc3RzLlxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KGF0dGVtcHQsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZW91dCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fcGVuZGluZy5kZWxldGUocGVuZGluZyk7XG4gICAgICAgICAgcGVuZGluZy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5jb3BpZWQuZW1pdChzdWNjZXNzZnVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGF0dGVtcHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3BpZWQuZW1pdCh0aGlzLl9jbGlwYm9hcmQuY29weSh0aGlzLnRleHQpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJyZW50VGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGVuZGluZy5mb3JFYWNoKGNvcHkgPT4gY29weS5kZXN0cm95KCkpO1xuICAgIHRoaXMuX3BlbmRpbmcuY2xlYXIoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=