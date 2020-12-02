import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive, ElementRef, forwardRef, HostListener, Inject, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * This is a barebones contenteditable {@link ControlValueAccessor} allowing you to use
 * Angular forms with native contenteditable HTML. For security reasons you might want
 * to consider sanitizing pasted/dropped content before using it. Also make sure that
 * you do not set any dangerous content as control value yourself, because directive
 * just outputs control value as-is.
 */
var ContenteditableValueAccessor = /** @class */ (function () {
    function ContenteditableValueAccessor(elementRef, renderer) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        /*
             * MutationObserver IE11 fallback (as opposed to input event for modern browsers).
             * When mutation removes a tag, i.e. delete is pressed on the last remaining character
             * inside a tag — callback is triggered before the DOM is actually changed, therefore
             * setTimeout is used
             */
        this.observer = new MutationObserver((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.onChange(ContenteditableValueAccessor.processValue(_this.elementRef.nativeElement.innerHTML));
            }));
        }));
        /*
             * onTouch callback that marks control as touched and allows FormHooks use
             */
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        /*
             * onChange callback that writes value to control and allows FormHooks use
             */
        this.onChange = (/**
         * @return {?}
         */
        function () { });
    }
    /*
     * To support IE11 MutationObserver is used to monitor changes to the content
     */
    /*
         * To support IE11 MutationObserver is used to monitor changes to the content
         */
    /**
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.ngAfterViewInit = /*
         * To support IE11 MutationObserver is used to monitor changes to the content
         */
    /**
     * @return {?}
     */
    function () {
        this.observer.observe(this.elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    };
    /*
     * Disconnect MutationObserver IE11 fallback on destroy
     */
    /*
         * Disconnect MutationObserver IE11 fallback on destroy
         */
    /**
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.ngOnDestroy = /*
         * Disconnect MutationObserver IE11 fallback on destroy
         */
    /**
     * @return {?}
     */
    function () {
        this.observer.disconnect();
    };
    /*
     * Listen to input events to write innerHTML value into control,
     * also disconnect MutationObserver as it is not needed if this
     * event works in current browser
     */
    /*
         * Listen to input events to write innerHTML value into control,
         * also disconnect MutationObserver as it is not needed if this
         * event works in current browser
         */
    /**
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.onInput = /*
         * Listen to input events to write innerHTML value into control,
         * also disconnect MutationObserver as it is not needed if this
         * event works in current browser
         */
    /**
     * @return {?}
     */
    function () {
        this.observer.disconnect();
        this.onChange(ContenteditableValueAccessor.processValue(this.elementRef.nativeElement.innerHTML));
    };
    /*
     * Listen to blur event to mark control as touched
     */
    /*
         * Listen to blur event to mark control as touched
         */
    /**
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.onBlur = /*
         * Listen to blur event to mark control as touched
         */
    /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /*
     * Reacts to external change
     *
     * @see {@link ControlValueAccessor#writeValue}
     */
    /*
         * Reacts to external change
         *
         * @see {@link ControlValueAccessor#writeValue}
         */
    /**
     * @param {?} value
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.writeValue = /*
         * Reacts to external change
         *
         * @see {@link ControlValueAccessor#writeValue}
         */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', ContenteditableValueAccessor.processValue(value));
    };
    /*
     * Registers onChange callback
     *
     * @see {@link ControlValueAccessor#registerOnChange}
     */
    /*
         * Registers onChange callback
         *
         * @see {@link ControlValueAccessor#registerOnChange}
         */
    /**
     * @param {?} onChange
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.registerOnChange = /*
         * Registers onChange callback
         *
         * @see {@link ControlValueAccessor#registerOnChange}
         */
    /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.onChange = onChange;
    };
    /*
     * Registers onTouch callback
     *
     * @see {@link ControlValueAccessor#registerOnTouched}
     */
    /*
         * Registers onTouch callback
         *
         * @see {@link ControlValueAccessor#registerOnTouched}
         */
    /**
     * @param {?} onTouched
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.registerOnTouched = /*
         * Registers onTouch callback
         *
         * @see {@link ControlValueAccessor#registerOnTouched}
         */
    /**
     * @param {?} onTouched
     * @return {?}
     */
    function (onTouched) {
        this.onTouched = onTouched;
    };
    /*
     * Sets disabled state by setting contenteditable attribute to true/false
     *
     * @see {@link ControlValueAccessor#setDisabledState}
     */
    /*
         * Sets disabled state by setting contenteditable attribute to true/false
         *
         * @see {@link ControlValueAccessor#setDisabledState}
         */
    /**
     * @param {?} disabled
     * @return {?}
     */
    ContenteditableValueAccessor.prototype.setDisabledState = /*
         * Sets disabled state by setting contenteditable attribute to true/false
         *
         * @see {@link ControlValueAccessor#setDisabledState}
         */
    /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', String(!disabled));
    };
    /*
     * null and other falsy control values are treated as empty string to
     * prevent IE11 outputting 'null', also single <br> is replaced with empty
     * string when passed to the control
     */
    /*
         * null and other falsy control values are treated as empty string to
         * prevent IE11 outputting 'null', also single <br> is replaced with empty
         * string when passed to the control
         */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ContenteditableValueAccessor.processValue = /*
         * null and other falsy control values are treated as empty string to
         * prevent IE11 outputting 'null', also single <br> is replaced with empty
         * string when passed to the control
         */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var processed = value || '';
        return processed.trim() === '<br>' ? '' : processed;
    };
    ContenteditableValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: '[contenteditable][formControlName], [contenteditable][formControl], [contenteditable][ngModel]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ContenteditableValueAccessor; })),
                            multi: true,
                        },
                    ],
                },] }
    ];
    /** @nocollapse */
    ContenteditableValueAccessor.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: Renderer2, decorators: [{ type: Inject, args: [Renderer2,] }] }
    ]; };
    ContenteditableValueAccessor.propDecorators = {
        onInput: [{ type: HostListener, args: ['input',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return ContenteditableValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContenteditableValueAccessorModule = /** @class */ (function () {
    function ContenteditableValueAccessorModule() {
    }
    ContenteditableValueAccessorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ContenteditableValueAccessor],
                    exports: [ContenteditableValueAccessor],
                },] }
    ];
    return ContenteditableValueAccessorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ContenteditableValueAccessor, ContenteditableValueAccessorModule };

//# sourceMappingURL=tinkoff-angular-contenteditable-accessor.js.map