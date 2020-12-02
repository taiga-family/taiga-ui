/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, EventEmitter, Input, Output, NgZone, InjectionToken, Inject, Optional, } from '@angular/core';
import { Clipboard } from './clipboard';
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
export var CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
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
export { CdkCopyToClipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NsaXBib2FyZC9jb3B5LXRvLWNsaXBib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBU3RDLCtGQUErRjtBQUMvRixNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FDckMsSUFBSSxjQUFjLENBQTJCLDhCQUE4QixDQUFDLENBQUM7QUFFakY7OztHQUdHO0FBQ0g7SUF1Q0UsNEJBQ1UsVUFBcUI7SUFDN0I7OztPQUdHO0lBQ0ssT0FBZ0IsRUFDMEIsTUFBaUM7UUFOM0UsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUtyQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBdEMxQiw0QkFBNEI7UUFDQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRS9DOzs7V0FHRztRQUNrQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRTFEOzs7V0FHRztRQUNpQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV6RTs7Ozs7V0FLRztRQUNlLHNCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbEQsaURBQWlEO1FBQ3pDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBaUJ4QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELGlDQUFJLEdBQUosVUFBSyxRQUFnQztRQUFyQyxpQkEyQkM7UUEzQkkseUJBQUEsRUFBQSxXQUFtQixJQUFJLENBQUMsUUFBUTtRQUNuQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxtQkFBaUIsR0FBRyxRQUFRLENBQUM7WUFDakMsSUFBTSxTQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQU8sQ0FBQyxDQUFDO1lBRTNCLElBQU0sU0FBTyxHQUFHO2dCQUNkLElBQU0sVUFBVSxHQUFHLFNBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLG1CQUFpQixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTtvQkFDMUQsMkRBQTJEO29CQUMzRCxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLFNBQU8sRUFBRSxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO3FCQUNyRjt5QkFBTTt3QkFDTCxvRkFBb0Y7d0JBQ3BGLEtBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDL0M7aUJBQ0Y7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQU8sQ0FBQyxDQUFDO29CQUM5QixTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQztZQUNGLFNBQU8sRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFFBQVE7cUJBQ3BCO2lCQUNGOzs7O2dCQXRCTyxTQUFTO2dCQU5mLE1BQU07Z0RBcUVILFFBQVEsWUFBSSxNQUFNLFNBQUMsNEJBQTRCOzs7dUJBdENqRCxLQUFLLFNBQUMsb0JBQW9COzJCQU0xQixLQUFLLFNBQUMsNEJBQTRCO3lCQU1sQyxNQUFNLFNBQUMsMEJBQTBCO29DQVFqQyxNQUFNLFNBQUMsUUFBUTs7SUFnRWxCLHlCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0F0Rlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBOZ1pvbmUsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJy4vY2xpcGJvYXJkJztcbmltcG9ydCB7UGVuZGluZ0NvcHl9IGZyb20gJy4vcGVuZGluZy1jb3B5JztcblxuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBgQ2RrQ29weVRvQ2xpcGJvYXJkYC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnIHtcbiAgLyoqIERlZmF1bHQgbnVtYmVyIG9mIGF0dGVtcHRzIHRvIG1ha2Ugd2hlbiBjb3B5aW5nIHRleHQgdG8gdGhlIGNsaXBib2FyZC4gKi9cbiAgYXR0ZW1wdHM/OiBudW1iZXI7XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMgdG8gYENka0NvcHlUb0NsaXBib2FyZGAuICovXG5leHBvcnQgY29uc3QgQ0tEX0NPUFlfVE9fQ0xJUEJPQVJEX0NPTkZJRyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPENka0NvcHlUb0NsaXBib2FyZENvbmZpZz4oJ0NLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUcnKTtcblxuLyoqXG4gKiBQcm92aWRlcyBiZWhhdmlvciBmb3IgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgY29waWVzIGNvbnRlbnQgaW50byB1c2VyJ3NcbiAqIGNsaXBib2FyZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0NvcHlUb0NsaXBib2FyZF0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnY29weSgpJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtDb3B5VG9DbGlwYm9hcmQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ29udGVudCB0byBiZSBjb3BpZWQuICovXG4gIEBJbnB1dCgnY2RrQ29weVRvQ2xpcGJvYXJkJykgdGV4dDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEhvdyBtYW55IHRpbWVzIHRvIGF0dGVtcHQgdG8gY29weSB0aGUgdGV4dC4gVGhpcyBtYXkgYmUgbmVjZXNzYXJ5IGZvciBsb25nZXIgdGV4dCwgYmVjYXVzZVxuICAgKiB0aGUgYnJvd3NlciBuZWVkcyB0aW1lIHRvIGZpbGwgYW4gaW50ZXJtZWRpYXRlIHRleHRhcmVhIGVsZW1lbnQgYW5kIGNvcHkgdGhlIGNvbnRlbnQuXG4gICAqL1xuICBASW5wdXQoJ2Nka0NvcHlUb0NsaXBib2FyZEF0dGVtcHRzJykgYXR0ZW1wdHM6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gc29tZSB0ZXh0IGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBUaGVcbiAgICogZW1pdHRlZCB2YWx1ZSBpbmRpY2F0ZXMgd2hldGhlciBjb3B5aW5nIHdhcyBzdWNjZXNzZnVsLlxuICAgKi9cbiAgQE91dHB1dCgnY2RrQ29weVRvQ2xpcGJvYXJkQ29waWVkJykgY29waWVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHNvbWUgdGV4dCBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gVGhlXG4gICAqIGVtaXR0ZWQgdmFsdWUgaW5kaWNhdGVzIHdoZXRoZXIgY29weWluZyB3YXMgc3VjY2Vzc2Z1bC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBjZGtDb3B5VG9DbGlwYm9hcmRDb3BpZWRgIGluc3RlYWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBAT3V0cHV0KCdjb3BpZWQnKSBfZGVwcmVjYXRlZENvcGllZCA9IHRoaXMuY29waWVkO1xuXG4gIC8qKiBDb3BpZXMgdGhhdCBhcmUgY3VycmVudGx5IGJlaW5nIGF0dGVtcHRlZC4gKi9cbiAgcHJpdmF0ZSBfcGVuZGluZyA9IG5ldyBTZXQ8UGVuZGluZ0NvcHk+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRpcmVjdGl2ZSBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogYm9vbGVhbjtcblxuICAvKiogVGltZW91dCBmb3IgdGhlIGN1cnJlbnQgY29weSBhdHRlbXB0LiAqL1xuICBwcml2YXRlIF9jdXJyZW50VGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NsaXBib2FyZDogQ2xpcGJvYXJkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIF9uZ1pvbmUgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByaXZhdGUgX25nWm9uZT86IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUcpIGNvbmZpZz86IENka0NvcHlUb0NsaXBib2FyZENvbmZpZykge1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYXR0ZW1wdHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRlbXB0cyA9IGNvbmZpZy5hdHRlbXB0cztcbiAgICB9XG4gIH1cblxuICAvKiogQ29waWVzIHRoZSBjdXJyZW50IHRleHQgdG8gdGhlIGNsaXBib2FyZC4gKi9cbiAgY29weShhdHRlbXB0czogbnVtYmVyID0gdGhpcy5hdHRlbXB0cyk6IHZvaWQge1xuICAgIGlmIChhdHRlbXB0cyA+IDEpIHtcbiAgICAgIGxldCByZW1haW5pbmdBdHRlbXB0cyA9IGF0dGVtcHRzO1xuICAgICAgY29uc3QgcGVuZGluZyA9IHRoaXMuX2NsaXBib2FyZC5iZWdpbkNvcHkodGhpcy50ZXh0KTtcbiAgICAgIHRoaXMuX3BlbmRpbmcuYWRkKHBlbmRpbmcpO1xuXG4gICAgICBjb25zdCBhdHRlbXB0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzZnVsID0gcGVuZGluZy5jb3B5KCk7XG4gICAgICAgIGlmICghc3VjY2Vzc2Z1bCAmJiAtLXJlbWFpbmluZ0F0dGVtcHRzICYmICF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMCBSZW1vdmUgbnVsbCBjaGVjayBmb3IgYF9uZ1pvbmVgLlxuICAgICAgICAgIGlmICh0aGlzLl9uZ1pvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lb3V0ID0gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoYXR0ZW1wdCwgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSB1c2UgMSBmb3IgdGhlIHRpbWVvdXQgc2luY2UgaXQncyBtb3JlIHByZWRpY3RhYmxlIHdoZW4gZmx1c2hpbmcgaW4gdW5pdCB0ZXN0cy5cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lb3V0ID0gc2V0VGltZW91dChhdHRlbXB0LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX3BlbmRpbmcuZGVsZXRlKHBlbmRpbmcpO1xuICAgICAgICAgIHBlbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuY29waWVkLmVtaXQoc3VjY2Vzc2Z1bCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhdHRlbXB0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29waWVkLmVtaXQodGhpcy5fY2xpcGJvYXJkLmNvcHkodGhpcy50ZXh0KSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3VycmVudFRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMuX3BlbmRpbmcuZm9yRWFjaChjb3B5ID0+IGNvcHkuZGVzdHJveSgpKTtcbiAgICB0aGlzLl9wZW5kaW5nLmNsZWFyKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxufVxuIl19