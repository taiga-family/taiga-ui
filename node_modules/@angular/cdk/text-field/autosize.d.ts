/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ElementRef, AfterViewInit, DoCheck, OnDestroy, NgZone } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
/** Directive to automatically resize a textarea to fit its content. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTextareaAutosize implements AfterViewInit, DoCheck, OnDestroy {
    private _elementRef;
    private _platform;
    private _ngZone;
    /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
    private _previousValue?;
    private _initialHeight;
    private readonly _destroyed;
    private _minRows;
    private _maxRows;
    private _enabled;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */
    private _previousMinRows;
    private _textareaElement;
    /** Minimum amount of rows in the textarea. */
    get minRows(): number;
    set minRows(value: number);
    /** Maximum amount of rows in the textarea. */
    get maxRows(): number;
    set maxRows(value: number);
    /** Whether autosizing is enabled or not */
    get enabled(): boolean;
    set enabled(value: boolean);
    /** Cached height of a textarea with a single row. */
    private _cachedLineHeight;
    /** Used to reference correct document/window */
    protected _document?: Document;
    /** Class that should be applied to the textarea while it's being measured. */
    private _measuringClass;
    constructor(_elementRef: ElementRef<HTMLElement>, _platform: Platform, _ngZone: NgZone, 
    /** @breaking-change 11.0.0 make document required */
    document?: any);
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight(): void;
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    private _cacheTextareaLineHeight;
    ngDoCheck(): void;
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force?: boolean): void;
    /**
     * Resets the textarea to its original size
     */
    reset(): void;
    _noopInputHandler(): void;
    /** Access injected document if available or fallback to global document reference */
    private _getDocument;
    /** Use defaultView of injected document if available or fallback to global window reference */
    private _getWindow;
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    private _scrollToCaretPosition;
    static ngAcceptInputType_minRows: NumberInput;
    static ngAcceptInputType_maxRows: NumberInput;
    static ngAcceptInputType_enabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTextareaAutosize, [null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTextareaAutosize, "textarea[cdkTextareaAutosize]", ["cdkTextareaAutosize"], { "minRows": "cdkAutosizeMinRows"; "maxRows": "cdkAutosizeMaxRows"; "enabled": "cdkTextareaAutosize"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZC50cyIsInNvdXJjZXMiOlsiYXV0b3NpemUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbi8qKiBEaXJlY3RpdmUgdG8gYXV0b21hdGljYWxseSByZXNpemUgYSB0ZXh0YXJlYSB0byBmaXQgaXRzIGNvbnRlbnQuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtUZXh0YXJlYUF1dG9zaXplIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICAvKiogS2VlcCB0cmFjayBvZiB0aGUgcHJldmlvdXMgdGV4dGFyZWEgdmFsdWUgdG8gYXZvaWQgcmVzaXppbmcgd2hlbiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuICovXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNWYWx1ZT87XG4gICAgcHJpdmF0ZSBfaW5pdGlhbEhlaWdodDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQ7XG4gICAgcHJpdmF0ZSBfbWluUm93cztcbiAgICBwcml2YXRlIF9tYXhSb3dzO1xuICAgIHByaXZhdGUgX2VuYWJsZWQ7XG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgbWluUm93cyBhcyBvZiBsYXN0IHJlc2l6ZS4gSWYgdGhlIG1pblJvd3MgaGFzIGRlY3JlYXNlZCwgdGhlXG4gICAgICogaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBuZWVkcyB0byBiZSByZWNvbXB1dGVkIHRvIHJlZmxlY3QgdGhlIG5ldyBtaW5pbXVtLiBUaGUgbWF4SGVpZ2h0XG4gICAgICogZG9lcyBub3QgaGF2ZSB0aGUgc2FtZSBwcm9ibGVtIGJlY2F1c2UgaXQgZG9lcyBub3QgYWZmZWN0IHRoZSB0ZXh0YXJlYSdzIHNjcm9sbEhlaWdodC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmV2aW91c01pblJvd3M7XG4gICAgcHJpdmF0ZSBfdGV4dGFyZWFFbGVtZW50O1xuICAgIC8qKiBNaW5pbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSB0ZXh0YXJlYS4gKi9cbiAgICBnZXQgbWluUm93cygpOiBudW1iZXI7XG4gICAgc2V0IG1pblJvd3ModmFsdWU6IG51bWJlcik7XG4gICAgLyoqIE1heGltdW0gYW1vdW50IG9mIHJvd3MgaW4gdGhlIHRleHRhcmVhLiAqL1xuICAgIGdldCBtYXhSb3dzKCk6IG51bWJlcjtcbiAgICBzZXQgbWF4Um93cyh2YWx1ZTogbnVtYmVyKTtcbiAgICAvKiogV2hldGhlciBhdXRvc2l6aW5nIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbik7XG4gICAgLyoqIENhY2hlZCBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvdy4gKi9cbiAgICBwcml2YXRlIF9jYWNoZWRMaW5lSGVpZ2h0O1xuICAgIC8qKiBVc2VkIHRvIHJlZmVyZW5jZSBjb3JyZWN0IGRvY3VtZW50L3dpbmRvdyAqL1xuICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ/OiBEb2N1bWVudDtcbiAgICAvKiogQ2xhc3MgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hpbGUgaXQncyBiZWluZyBtZWFzdXJlZC4gKi9cbiAgICBwcml2YXRlIF9tZWFzdXJpbmdDbGFzcztcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9wbGF0Zm9ybTogUGxhdGZvcm0sIF9uZ1pvbmU6IE5nWm9uZSwgXG4gICAgLyoqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wIG1ha2UgZG9jdW1lbnQgcmVxdWlyZWQgKi9cbiAgICBkb2N1bWVudD86IGFueSk7XG4gICAgLyoqIFNldHMgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBhcyBkZXRlcm1pbmVkIGJ5IG1pblJvd3MuICovXG4gICAgX3NldE1pbkhlaWdodCgpOiB2b2lkO1xuICAgIC8qKiBTZXRzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEgYXMgZGV0ZXJtaW5lZCBieSBtYXhSb3dzLiAqL1xuICAgIF9zZXRNYXhIZWlnaHQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBoZWlnaHQgb2YgYSBzaW5nbGUtcm93IHRleHRhcmVhIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGNhY2hlZC5cbiAgICAgKlxuICAgICAqIFdlIG5lZWQgdG8ga25vdyBob3cgbGFyZ2UgYSBzaW5nbGUgXCJyb3dcIiBvZiBhIHRleHRhcmVhIGlzIGluIG9yZGVyIHRvIGFwcGx5IG1pblJvd3MgYW5kXG4gICAgICogbWF4Um93cy4gRm9yIHRoZSBpbml0aWFsIHZlcnNpb24sIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlIGhlaWdodCBvZiBhIHNpbmdsZSBsaW5lIGluIHRoZVxuICAgICAqIHRleHRhcmVhIGRvZXMgbm90IGV2ZXIgY2hhbmdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0O1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc2l6ZSB0aGUgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50LlxuICAgICAqIEBwYXJhbSBmb3JjZSBXaGV0aGVyIHRvIGZvcmNlIGEgaGVpZ2h0IHJlY2FsY3VsYXRpb24uIEJ5IGRlZmF1bHQgdGhlIGhlaWdodCB3aWxsIGJlXG4gICAgICogICAgcmVjYWxjdWxhdGVkIG9ubHkgaWYgdGhlIHZhbHVlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgY2FsbC5cbiAgICAgKi9cbiAgICByZXNpemVUb0ZpdENvbnRlbnQoZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRleHRhcmVhIHRvIGl0cyBvcmlnaW5hbCBzaXplXG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZDtcbiAgICBfbm9vcElucHV0SGFuZGxlcigpOiB2b2lkO1xuICAgIC8qKiBBY2Nlc3MgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCBkb2N1bWVudCByZWZlcmVuY2UgKi9cbiAgICBwcml2YXRlIF9nZXREb2N1bWVudDtcbiAgICAvKiogVXNlIGRlZmF1bHRWaWV3IG9mIGluamVjdGVkIGRvY3VtZW50IGlmIGF2YWlsYWJsZSBvciBmYWxsYmFjayB0byBnbG9iYWwgd2luZG93IHJlZmVyZW5jZSAqL1xuICAgIHByaXZhdGUgX2dldFdpbmRvdztcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGEgdGV4dGFyZWEgdG8gdGhlIGNhcmV0IHBvc2l0aW9uLiBPbiBGaXJlZm94IHJlc2l6aW5nIHRoZSB0ZXh0YXJlYSB3aWxsXG4gICAgICogcHJldmVudCBpdCBmcm9tIHNjcm9sbGluZyB0byB0aGUgY2FyZXQgcG9zaXRpb24uIFdlIG5lZWQgdG8gcmUtc2V0IHRoZSBzZWxlY3Rpb25cbiAgICAgKiBpbiBvcmRlciBmb3IgaXQgdG8gc2Nyb2xsIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9DYXJldFBvc2l0aW9uO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9taW5Sb3dzOiBOdW1iZXJJbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4Um93czogTnVtYmVySW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==