/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, NgZone, HostListener, Optional, Inject, } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { auditTime, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
/** Directive to automatically resize a textarea to fit its content. */
var CdkTextareaAutosize = /** @class */ (function () {
    function CdkTextareaAutosize(_elementRef, _platform, _ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new Subject();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement = this._elementRef.nativeElement;
        this._measuringClass = _platform.FIREFOX ?
            'cdk-textarea-autosize-measuring-firefox' :
            'cdk-textarea-autosize-measuring';
    }
    Object.defineProperty(CdkTextareaAutosize.prototype, "minRows", {
        /** Minimum amount of rows in the textarea. */
        get: function () { return this._minRows; },
        set: function (value) {
            this._minRows = coerceNumberProperty(value);
            this._setMinHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "maxRows", {
        /** Maximum amount of rows in the textarea. */
        get: function () { return this._maxRows; },
        set: function (value) {
            this._maxRows = coerceNumberProperty(value);
            this._setMaxHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "enabled", {
        /** Whether autosizing is enabled or not */
        get: function () { return this._enabled; },
        set: function (value) {
            value = coerceBooleanProperty(value);
            // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)
            if (this._enabled !== value) {
                (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the minimum height of the textarea as determined by minRows. */
    CdkTextareaAutosize.prototype._setMinHeight = function () {
        var minHeight = this.minRows && this._cachedLineHeight ?
            this.minRows * this._cachedLineHeight + "px" : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    };
    /** Sets the maximum height of the textarea as determined by maxRows. */
    CdkTextareaAutosize.prototype._setMaxHeight = function () {
        var maxHeight = this.maxRows && this._cachedLineHeight ?
            this.maxRows * this._cachedLineHeight + "px" : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    };
    CdkTextareaAutosize.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(function () {
                var window = _this._getWindow();
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this._destroyed))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            });
        }
    };
    CdkTextareaAutosize.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    CdkTextareaAutosize.prototype._cacheTextareaLineHeight = function () {
        if (this._cachedLineHeight) {
            return;
        }
        // Use a clone element because we have to override some styles.
        var textareaClone = this._textareaElement.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this._textareaElement.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    };
    CdkTextareaAutosize.prototype.ngDoCheck = function () {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    CdkTextareaAutosize.prototype.resizeToFitContent = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        var textarea = this._elementRef.nativeElement;
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add(this._measuringClass);
        textarea.placeholder = '';
        // The measuring class includes a 2px padding to workaround an issue with Chrome,
        // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
        var height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove(this._measuringClass);
        textarea.placeholder = placeholderText;
        this._ngZone.runOutsideAngular(function () {
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () { return _this._scrollToCaretPosition(textarea); });
            }
            else {
                setTimeout(function () { return _this._scrollToCaretPosition(textarea); });
            }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    };
    /**
     * Resets the textarea to its original size
     */
    CdkTextareaAutosize.prototype.reset = function () {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
        }
    };
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    CdkTextareaAutosize.prototype._noopInputHandler = function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    /** Access injected document if available or fallback to global document reference */
    CdkTextareaAutosize.prototype._getDocument = function () {
        return this._document || document;
    };
    /** Use defaultView of injected document if available or fallback to global window reference */
    CdkTextareaAutosize.prototype._getWindow = function () {
        var doc = this._getDocument();
        return doc.defaultView || window;
    };
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    CdkTextareaAutosize.prototype._scrollToCaretPosition = function (textarea) {
        var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
        var document = this._getDocument();
        // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.
        if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    };
    CdkTextareaAutosize.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[cdkTextareaAutosize]',
                    exportAs: 'cdkTextareaAutosize',
                    host: {
                        'class': 'cdk-textarea-autosize',
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        'rows': '1',
                    },
                },] }
    ];
    /** @nocollapse */
    CdkTextareaAutosize.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Platform },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CdkTextareaAutosize.propDecorators = {
        minRows: [{ type: Input, args: ['cdkAutosizeMinRows',] }],
        maxRows: [{ type: Input, args: ['cdkAutosizeMaxRows',] }],
        enabled: [{ type: Input, args: ['cdkTextareaAutosize',] }],
        _noopInputHandler: [{ type: HostListener, args: ['input',] }]
    };
    return CdkTextareaAutosize;
}());
export { CdkTextareaAutosize };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RleHQtZmllbGQvYXV0b3NpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFFckIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6Qyx1RUFBdUU7QUFDdkU7SUFtRUUsNkJBQW9CLFdBQW9DLEVBQ3BDLFNBQW1CLEVBQ25CLE9BQWU7SUFDdkIscURBQXFEO0lBQ3ZCLFFBQWM7UUFKcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQXZEbEIsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJMUMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUVqQzs7OztXQUlHO1FBQ0sscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUErQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQW9DLENBQUM7UUFDOUUsSUFBSSxDQUFDLGVB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QVExQixLQUFLLFNBQUMscUJBQXFCO29DQXNNM0IsWUFBWSxTQUFDLE9BQU87O0lBdUN2QiwwQkFBQztDQUFBLEFBM1JELElBMlJDO1NBalJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBCb29sZWFuSW5wdXQsXG4gIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcbiAgY29lcmNlTnVtYmVyUHJvcGVydHksXG4gIE51bWJlcklucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBEb0NoZWNrLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbiAgSG9zdExpc3RlbmVyLFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge2F1ZGl0VGltZSwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zyb21FdmVudCwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKiogRGlyZWN0aXZlIHRvIGF1dG9tYXRpY2FsbHkgcmVzaXplIGEgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50LiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbY2RrVGV4dGFyZWFBdXRvc2l6ZV0nLFxuICBleHBvcnRBczogJ2Nka1RleHRhcmVhQXV0b3NpemUnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZScsXG4gICAgLy8gVGV4dGFyZWEgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBkaXJlY3RpdmUgYXBwbGllZCBzaG91bGQgaGF2ZSBhIHNpbmdsZSByb3cgYnkgZGVmYXVsdC5cbiAgICAvLyBCcm93c2VycyBub3JtYWxseSBzaG93IHR3byByb3dzIGJ5IGRlZmF1bHQgYW5kIHRoZXJlZm9yZSB0aGlzIGxpbWl0cyB0aGUgbWluUm93cyBiaW5kaW5nLlxuICAgICdyb3dzJzogJzEnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0YXJlYUF1dG9zaXplIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgLyoqIEtlZXAgdHJhY2sgb2YgdGhlIHByZXZpb3VzIHRleHRhcmVhIHZhbHVlIHRvIGF2b2lkIHJlc2l6aW5nIHdoZW4gdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLiAqL1xuICBwcml2YXRlIF9wcmV2aW91c1ZhbHVlPzogc3RyaW5nO1xuICBwcml2YXRlIF9pbml0aWFsSGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfbWluUm93czogbnVtYmVyO1xuICBwcml2YXRlIF9tYXhSb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBWYWx1ZSBvZiBtaW5Sb3dzIGFzIG9mIGxhc3QgcmVzaXplLiBJZiB0aGUgbWluUm93cyBoYXMgZGVjcmVhc2VkLCB0aGVcbiAgICogaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBuZWVkcyB0byBiZSByZWNvbXB1dGVkIHRvIHJlZmxlY3QgdGhlIG5ldyBtaW5pbXVtLiBUaGUgbWF4SGVpZ2h0XG4gICAqIGRvZXMgbm90IGhhdmUgdGhlIHNhbWUgcHJvYmxlbSBiZWNhdXNlIGl0IGRvZXMgbm90IGFmZmVjdCB0aGUgdGV4dGFyZWEncyBzY3JvbGxIZWlnaHQuXG4gICAqL1xuICBwcml2YXRlIF9wcmV2aW91c01pblJvd3M6IG51bWJlciA9IC0xO1xuXG4gIHByaXZhdGUgX3RleHRhcmVhRWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudDtcblxuICAvKiogTWluaW11bSBhbW91bnQgb2Ygcm93cyBpbiB0aGUgdGV4dGFyZWEuICovXG4gIEBJbnB1dCgnY2RrQXV0b3NpemVNaW5Sb3dzJylcbiAgZ2V0IG1pblJvd3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21pblJvd3M7IH1cbiAgc2V0IG1pblJvd3ModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblJvd3MgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fc2V0TWluSGVpZ2h0KCk7XG4gIH1cblxuICAvKiogTWF4aW11bSBhbW91bnQgb2Ygcm93cyBpbiB0aGUgdGV4dGFyZWEuICovXG4gIEBJbnB1dCgnY2RrQXV0b3NpemVNYXhSb3dzJylcbiAgZ2V0IG1heFJvd3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21heFJvd3M7IH1cbiAgc2V0IG1heFJvd3ModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFJvd3MgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fc2V0TWF4SGVpZ2h0KCk7XG4gIH1cblxuICAvKiogV2hldGhlciBhdXRvc2l6aW5nIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gIEBJbnB1dCgnY2RrVGV4dGFyZWFBdXRvc2l6ZScpXG4gIGdldCBlbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZW5hYmxlZDsgfVxuICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIC8vIE9ubHkgYWN0IGlmIHRoZSBhY3R1YWwgdmFsdWUgY2hhbmdlZC4gVGhpcyBzcGVjaWZpY2FsbHkgaGVscHMgdG8gbm90IHJ1blxuICAgIC8vIHJlc2l6ZVRvRml0Q29udGVudCB0b28gZWFybHkgKGkuZS4gYmVmb3JlIG5nQWZ0ZXJWaWV3SW5pdClcbiAgICBpZiAodGhpcy5fZW5hYmxlZCAhPT0gdmFsdWUpIHtcbiAgICAgICh0aGlzLl9lbmFibGVkID0gdmFsdWUpID8gdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkgOiB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENhY2hlZCBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvdy4gKi9cbiAgcHJpdmF0ZSBfY2FjaGVkTGluZUhlaWdodDogbnVtYmVyO1xuXG4gIC8qKiBVc2VkIHRvIHJlZmVyZW5jZSBjb3JyZWN0IGRvY3VtZW50L3dpbmRvdyAqL1xuICBwcm90ZWN0ZWQgX2RvY3VtZW50PzogRG9jdW1lbnQ7XG5cbiAgLyoqIENsYXNzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoaWxlIGl0J3MgYmVpbmcgbWVhc3VyZWQuICovXG4gIHByaXZhdGUgX21lYXN1cmluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIC8qKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMCBtYWtlIGRvY3VtZW50IHJlcXVpcmVkICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50PzogYW55KSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgIHRoaXMuX3RleHRhcmVhRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRoaXMuX21lYXN1cmluZ0NsYXNzID0gX3BsYXRmb3JtLkZJUkVGT1ggP1xuICAgICAgJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCcgOlxuICAgICAgJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcnO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBhcyBkZXRlcm1pbmVkIGJ5IG1pblJvd3MuICovXG4gIF9zZXRNaW5IZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5taW5Sb3dzICYmIHRoaXMuX2NhY2hlZExpbmVIZWlnaHQgP1xuICAgICAgICBgJHt0aGlzLm1pblJvd3MgKiB0aGlzLl9jYWNoZWRMaW5lSGVpZ2h0fXB4YCA6IG51bGw7XG5cbiAgICBpZiAobWluSGVpZ2h0KSAge1xuICAgICAgdGhpcy5fdGV4dGFyZWFFbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhIGFzIGRldGVybWluZWQgYnkgbWF4Um93cy4gKi9cbiAgX3NldE1heEhlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLm1heFJvd3MgJiYgdGhpcy5fY2FjaGVkTGluZUhlaWdodCA/XG4gICAgICAgIGAke3RoaXMubWF4Um93cyAqIHRoaXMuX2NhY2hlZExpbmVIZWlnaHR9cHhgIDogbnVsbDtcblxuICAgIGlmIChtYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuX3RleHRhcmVhRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIFJlbWVtYmVyIHRoZSBoZWlnaHQgd2hpY2ggd2Ugc3RhcnRlZCB3aXRoIGluIGNhc2UgYXV0b3NpemluZyBpcyBkaXNhYmxlZFxuICAgICAgdGhpcy5faW5pdGlhbEhlaWdodCA9IHRoaXMuX3RleHRhcmVhRWxlbWVudC5zdHlsZS5oZWlnaHQ7XG5cbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuX2dldFdpbmRvdygpO1xuXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgICAgIC5waXBlKGF1ZGl0VGltZSgxNiksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZSB0aGUgaGVpZ2h0IG9mIGEgc2luZ2xlLXJvdyB0ZXh0YXJlYSBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBjYWNoZWQuXG4gICAqXG4gICAqIFdlIG5lZWQgdG8ga25vdyBob3cgbGFyZ2UgYSBzaW5nbGUgXCJyb3dcIiBvZiBhIHRleHRhcmVhIGlzIGluIG9yZGVyIHRvIGFwcGx5IG1pblJvd3MgYW5kXG4gICAqIG1heFJvd3MuIEZvciB0aGUgaW5pdGlhbCB2ZXJzaW9uLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZSBoZWlnaHQgb2YgYSBzaW5nbGUgbGluZSBpbiB0aGVcbiAgICogdGV4dGFyZWEgZG9lcyBub3QgZXZlciBjaGFuZ2UuXG4gICAqL1xuICBwcml2YXRlIF9jYWNoZVRleHRhcmVhTGluZUhlaWdodCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkTGluZUhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZSBhIGNsb25lIGVsZW1lbnQgYmVjYXVzZSB3ZSBoYXZlIHRvIG92ZXJyaWRlIHNvbWUgc3R5bGVzLlxuICAgIGxldCB0ZXh0YXJlYUNsb25lID0gdGhpcy5fdGV4dGFyZWFFbGVtZW50LmNsb25lTm9kZShmYWxzZSkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0ZXh0YXJlYUNsb25lLnJvd3MgPSAxO1xuXG4gICAgLy8gVXNlIGBwb3NpdGlvbjogYWJzb2x1dGVgIHNvIHRoYXQgdGhpcyBkb2Vzbid0IGNhdXNlIGEgYnJvd3NlciBsYXlvdXQgYW5kIHVzZVxuICAgIC8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIHNvIHRoYXQgbm90aGluZyBpcyByZW5kZXJlZC4gQ2xlYXIgYW55IG90aGVyIHN0eWxlcyB0aGF0XG4gICAgLy8gd291bGQgYWZmZWN0IHRoZSBoZWlnaHQuXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuXG4gICAgLy8gSW4gRmlyZWZveCBpdCBoYXBwZW5zIHRoYXQgdGV4dGFyZWEgZWxlbWVudHMgYXJlIGFsd2F5cyBiaWdnZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGFtb3VudFxuICAgIC8vIG9mIHJvd3MuIFRoaXMgaXMgYmVjYXVzZSBGaXJlZm94IHRyaWVzIHRvIGFkZCBleHRyYSBzcGFjZSBmb3IgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyLlxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0aGF0IHJlbW92ZXMgdGhlIGV4dHJhIHNwYWNlIGZvciB0aGUgc2Nyb2xsYmFyLCB3ZSBjYW4ganVzdCBzZXQgb3ZlcmZsb3dcbiAgICAvLyB0byBoaWRkZW4uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlIGlzIG5vIGludmFsaWQgY2FsY3VsYXRpb24gb2YgdGhlIGxpbmUgaGVpZ2h0LlxuICAgIC8vIFNlZSBGaXJlZm94IGJ1ZyByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTMzNjU0XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgdGhpcy5fdGV4dGFyZWFFbGVtZW50LnBhcmVudE5vZGUhLmFwcGVuZENoaWxkKHRleHRhcmVhQ2xvbmUpO1xuICAgIHRoaXMuX2NhY2hlZExpbmVIZWlnaHQgPSB0ZXh0YXJlYUNsb25lLmNsaWVudEhlaWdodDtcbiAgICB0aGlzLl90ZXh0YXJlYUVsZW1lbnQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodGV4dGFyZWFDbG9uZSk7XG5cbiAgICAvLyBNaW4gYW5kIG1heCBoZWlnaHRzIGhhdmUgdG8gYmUgcmUtY2FsY3VsYXRlZCBpZiB0aGUgY2FjaGVkIGxpbmUgaGVpZ2h0IGNoYW5nZXNcbiAgICB0aGlzLl9zZXRNaW5IZWlnaHQoKTtcbiAgICB0aGlzLl9zZXRNYXhIZWlnaHQoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgdGhlIHRleHRhcmVhIHRvIGZpdCBpdHMgY29udGVudC5cbiAgICogQHBhcmFtIGZvcmNlIFdoZXRoZXIgdG8gZm9yY2UgYSBoZWlnaHQgcmVjYWxjdWxhdGlvbi4gQnkgZGVmYXVsdCB0aGUgaGVpZ2h0IHdpbGwgYmVcbiAgICogICAgcmVjYWxjdWxhdGVkIG9ubHkgaWYgdGhlIHZhbHVlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgY2FsbC5cbiAgICovXG4gIHJlc2l6ZVRvRml0Q29udGVudChmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgLy8gSWYgYXV0b3NpemluZyBpcyBkaXNhYmxlZCwganVzdCBza2lwIGV2ZXJ5dGhpbmcgZWxzZVxuICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0KCk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlbid0IGRldGVybWluZWQgdGhlIGxpbmUtaGVpZ2h0IHlldCwgd2Uga25vdyB3ZSdyZSBzdGlsbCBoaWRkZW4gYW5kIHRoZXJlJ3Mgbm8gcG9pbnRcbiAgICAvLyBpbiBjaGVja2luZyB0aGUgaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYS5cbiAgICBpZiAoIXRoaXMuX2NhY2hlZExpbmVIZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGNvbnN0IHZhbHVlID0gdGV4dGFyZWEudmFsdWU7XG5cbiAgICAvLyBPbmx5IHJlc2l6ZSBpZiB0aGUgdmFsdWUgb3IgbWluUm93cyBoYXZlIGNoYW5nZWQgc2luY2UgdGhlc2UgY2FsY3VsYXRpb25zIGNhbiBiZSBleHBlbnNpdmUuXG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLl9taW5Sb3dzID09PSB0aGlzLl9wcmV2aW91c01pblJvd3MgJiYgdmFsdWUgPT09IHRoaXMuX3ByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSB0ZXh0YXJlYS5wbGFjZWhvbGRlcjtcblxuICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBoZWlnaHQgdG8gYXV0byBpbiBvcmRlciB0byBzaHJpbmsgYmFjayB0byBpdHMgZGVmYXVsdCBzaXplLlxuICAgIC8vIEFsc28gdGVtcG9yYXJpbHkgZm9yY2Ugb3ZlcmZsb3c6aGlkZGVuLCBzbyBzY3JvbGwgYmFycyBkbyBub3QgaW50ZXJmZXJlIHdpdGggY2FsY3VsYXRpb25zLlxuICAgIC8vIExvbmcgcGxhY2Vob2xkZXJzIHRoYXQgYXJlIHdpZGVyIHRoYW4gdGhlIHRleHRhcmVhIHdpZHRoIG1heSBsZWFkIHRvIGEgYmlnZ2VyIHNjcm9sbEhlaWdodFxuICAgIC8vIHZhbHVlLiBUbyBlbnN1cmUgdGhhdCB0aGUgc2Nyb2xsSGVpZ2h0IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgY29udGVudCwgdGhlIHBsYWNlaG9sZGVyc1xuICAgIC8vIG5lZWQgdG8gYmUgcmVtb3ZlZCB0ZW1wb3JhcmlseS5cbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKHRoaXMuX21lYXN1cmluZ0NsYXNzKTtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcnO1xuXG4gICAgLy8gVGhlIG1lYXN1cmluZyBjbGFzcyBpbmNsdWRlcyBhIDJweCBwYWRkaW5nIHRvIHdvcmthcm91bmQgYW4gaXNzdWUgd2l0aCBDaHJvbWUsXG4gICAgLy8gc28gd2UgYWNjb3VudCBmb3IgdGhhdCBleHRyYSBzcGFjZSBoZXJlIGJ5IHN1YnRyYWN0aW5nIDQgKDJweCB0b3AgKyAycHggYm90dG9tKS5cbiAgICBjb25zdCBoZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgLSA0O1xuXG4gICAgLy8gVXNlIHRoZSBzY3JvbGxIZWlnaHQgdG8ga25vdyBob3cgbGFyZ2UgdGhlIHRleHRhcmVhICp3b3VsZCogYmUgaWYgZml0IGl0cyBlbnRpcmUgdmFsdWUuXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX21lYXN1cmluZ0NsYXNzKTtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyVGV4dDtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX3Njcm9sbFRvQ2FyZXRQb3NpdGlvbih0ZXh0YXJlYSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zY3JvbGxUb0NhcmV0UG9zaXRpb24odGV4dGFyZWEpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wcmV2aW91c01pblJvd3MgPSB0aGlzLl9taW5Sb3dzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdGV4dGFyZWEgdG8gaXRzIG9yaWdpbmFsIHNpemVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIC8vIERvIG5vdCB0cnkgdG8gY2hhbmdlIHRoZSB0ZXh0YXJlYSwgaWYgdGhlIGluaXRpYWxIZWlnaHQgaGFzIG5vdCBiZWVuIGRldGVybWluZWQgeWV0XG4gICAgLy8gVGhpcyBtaWdodCBwb3RlbnRpYWxseSByZW1vdmUgc3R5bGVzIHdoZW4gcmVzZXQoKSBpcyBjYWxsZWQgYmVmb3JlIG5nQWZ0ZXJWaWV3SW5pdFxuICAgIGlmICh0aGlzLl9pbml0aWFsSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RleHRhcmVhRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9pbml0aWFsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JylcbiAgX25vb3BJbnB1dEhhbmRsZXIoKSB7XG4gICAgLy8gbm8tb3AgaGFuZGxlciB0aGF0IGVuc3VyZXMgd2UncmUgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGlucHV0IGV2ZW50cy5cbiAgfVxuXG4gIC8qKiBBY2Nlc3MgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCBkb2N1bWVudCByZWZlcmVuY2UgKi9cbiAgcHJpdmF0ZSBfZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBVc2UgZGVmYXVsdFZpZXcgb2YgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCB3aW5kb3cgcmVmZXJlbmNlICovXG4gIHByaXZhdGUgX2dldFdpbmRvdygpOiBXaW5kb3cge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvY3VtZW50KCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyBhIHRleHRhcmVhIHRvIHRoZSBjYXJldCBwb3NpdGlvbi4gT24gRmlyZWZveCByZXNpemluZyB0aGUgdGV4dGFyZWEgd2lsbFxuICAgKiBwcmV2ZW50IGl0IGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBjYXJldCBwb3NpdGlvbi4gV2UgbmVlZCB0byByZS1zZXQgdGhlIHNlbGVjdGlvblxuICAgKiBpbiBvcmRlciBmb3IgaXQgdG8gc2Nyb2xsIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9zY3JvbGxUb0NhcmV0UG9zaXRpb24odGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICBjb25zdCB7c2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZH0gPSB0ZXh0YXJlYTtcbiAgICBjb25zdCBkb2N1bWVudCA9IHRoaXMuX2dldERvY3VtZW50KCk7XG5cbiAgICAvLyBJRSB3aWxsIHRocm93IGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBpZiB3ZSB0cnkgdG8gc2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYWZ0ZXIgdGhlXG4gICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcbiAgICAvLyBiZXR3ZWVuIHRoZSB0aW1lIHdlIHJlcXVlc3RlZCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCB3aGVuIGl0IHdhcyBleGVjdXRlZC5cbiAgICAvLyBBbHNvIG5vdGUgdGhhdCB3ZSBoYXZlIHRvIGFzc2VydCB0aGF0IHRoZSB0ZXh0YXJlYSBpcyBmb2N1c2VkIGJlZm9yZSB3ZSBzZXQgdGhlXG4gICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXG4gICAgLy8gaXQgdG8gcmVjZWl2ZSBmb2N1cyBvbiBJRSBhbmQgRWRnZS5cbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZC5pc1N0b3BwZWQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGV4dGFyZWEpIHtcbiAgICAgIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9taW5Sb3dzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heFJvd3M6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19