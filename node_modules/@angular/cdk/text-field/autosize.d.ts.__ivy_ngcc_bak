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
}
