(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-toolbar-toolbar-module"],{

/***/ "../../node_modules/@tinkoff/angular-contenteditable-accessor/fesm2015/tinkoff-angular-contenteditable-accessor.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tinkoff/angular-contenteditable-accessor/fesm2015/tinkoff-angular-contenteditable-accessor.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ContenteditableValueAccessor, ContenteditableValueAccessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableValueAccessor", function() { return ContenteditableValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableValueAccessorModule", function() { return ContenteditableValueAccessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");



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

class ContenteditableValueAccessor {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.onChange(ContenteditableValueAccessor.processValue(this.elementRef.nativeElement.innerHTML));
            }));
        }));
        /*
             * onTouch callback that marks control as touched and allows FormHooks use
             */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        /*
             * onChange callback that writes value to control and allows FormHooks use
             */
        this.onChange = (/**
         * @return {?}
         */
        () => { });
    }
    /*
         * To support IE11 MutationObserver is used to monitor changes to the content
         */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.observer.observe(this.elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }
    /*
         * Disconnect MutationObserver IE11 fallback on destroy
         */
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.observer.disconnect();
    }
    /*
         * Listen to input events to write innerHTML value into control,
         * also disconnect MutationObserver as it is not needed if this
         * event works in current browser
         */
    /**
     * @return {?}
     */
    onInput() {
        this.observer.disconnect();
        this.onChange(ContenteditableValueAccessor.processValue(this.elementRef.nativeElement.innerHTML));
    }
    /*
         * Listen to blur event to mark control as touched
         */
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /*
         * Reacts to external change
         *
         * @see {@link ControlValueAccessor#writeValue}
         */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', ContenteditableValueAccessor.processValue(value));
    }
    /*
         * Registers onChange callback
         *
         * @see {@link ControlValueAccessor#registerOnChange}
         */
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    /*
         * Registers onTouch callback
         *
         * @see {@link ControlValueAccessor#registerOnTouched}
         */
    /**
     * @param {?} onTouched
     * @return {?}
     */
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    /*
         * Sets disabled state by setting contenteditable attribute to true/false
         *
         * @see {@link ControlValueAccessor#setDisabledState}
         */
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', String(!disabled));
    }
    /*
         * null is treated as empty string to prevent IE11 outputting 'null',
         * also single <br> is replaced with empty string when passed to the control
         */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static processValue(value) {
        /** @type {?} */
        const processed = String(value == null ? '' : value);
        return processed.trim() === '<br>' ? '' : processed;
    }
}
ContenteditableValueAccessor.ɵfac = function ContenteditableValueAccessor_Factory(t) { return new (t || ContenteditableValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ContenteditableValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ContenteditableValueAccessor, selectors: [["", "contenteditable", "", "formControlName", ""], ["", "contenteditable", "", "formControl", ""], ["", "contenteditable", "", "ngModel", ""]], hostBindings: function ContenteditableValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContenteditableValueAccessor_input_HostBindingHandler() { return ctx.onInput(); })("blur", function ContenteditableValueAccessor_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => ContenteditableValueAccessor)),
                multi: true
            },
        ])] });
/** @nocollapse */
ContenteditableValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],] }] }
];
ContenteditableValueAccessor.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContenteditableValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[contenteditable][formControlName], [contenteditable][formControl], [contenteditable][ngModel]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => ContenteditableValueAccessor)),
                        multi: true
                    },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]
            }] }]; }, { onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContenteditableValueAccessorModule {
}
ContenteditableValueAccessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContenteditableValueAccessorModule });
ContenteditableValueAccessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContenteditableValueAccessorModule_Factory(t) { return new (t || ContenteditableValueAccessorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContenteditableValueAccessorModule, { declarations: [ContenteditableValueAccessor], exports: [ContenteditableValueAccessor] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContenteditableValueAccessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [ContenteditableValueAccessor],
                exports: [ContenteditableValueAccessor]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlua29mZi1hbmd1bGFyLWNvbnRlbnRlZGl0YWJsZS1hY2Nlc3Nvci5qcyIsInNvdXJjZXMiOlsibmc6L0B0aW5rb2ZmL2FuZ3VsYXItY29udGVudGVkaXRhYmxlLWFjY2Vzc29yL2xpYi9jb250ZW50ZWRpdGFibGUtdmFsdWUtYWNjZXNzb3IudHMiLCJuZzovQHRpbmtvZmYvYW5ndWxhci1jb250ZW50ZWRpdGFibGUtYWNjZXNzb3IvbGliL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBRztBQUthO0FBS0c7QUFHVTtBQUNIO0FBQXFDOztBQWdCL0QsTUFBYSw0QkFBNEI7QUFDdkM7QUFBUTtBQUE2QjtBQUNyQztBQUNDLElBeUJDLFlBQ3lDLFVBQXNCLEVBQ3ZCLFFBQW1CO0FBQzdELFFBRjJDLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUM7QUFHaEU7QUFFTTtBQUdJO0FBTVY7QUFDMkI7QUFBZ0IsUUFyQy9CLGFBQVEsR0FBRyxJQUFJLGdCQUFnQjtBQUFNO0FBQzdCO0FBQ2YsUUFGdUM7QUFDNUMsWUFBUSxVQUFVO0FBQU07QUFDQTtBQUNYLFlBRk07QUFDbkIsZ0JBQVksSUFBSSxDQUFDLFFBQVEsQ0FDVCw0QkFBNEIsQ0FBQyxZQUFZLENBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDMUMsQ0FDSixDQUFDO0FBQ2QsYUFBUyxFQUFDLENBQUM7QUFDWCxTQUFLLEVBQUMsQ0FBQztBQUNQO0FBRUc7QUFFQTtBQUFnQixRQUFQLGNBQVM7QUFBUTtBQUduQjtBQUFZLFFBSEUsU0FBUSxFQUFDO0FBQ2pDO0FBRUc7QUFFQTtBQUFnQixRQUFQLGFBQVE7QUFBUTtBQUF1QjtBQUUvQyxRQUY0QyxTQUFRLEVBQUM7QUFDekQsS0FJUTtBQUNSO0FBQ007QUFFSDtBQUNJO0FBQVE7QUFDTDtBQUFRLElBRGQsZUFBZTtBQUNuQixRQUFRLElB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QUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUF6SUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBMUJBLEFBQUEsQUF3REEsQUFBQSxBQUFBLEFBQUEsQUFuREEsQUFBQSxBQW9EQSxBQUFBLEFBQUEsQUFBQSxBQTBCQSxBQUFBLEFBQUEsQUFBQSxBQWFBLEFBQUEsQUFBQSxBQUFBLEFDbkdBLEFBT0EsQUFBQSxBQUpBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qXG4gKiBUaGlzIGlzIGEgYmFyZWJvbmVzIGNvbnRlbnRlZGl0YWJsZSB7QGxpbmsgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGFsbG93aW5nIHlvdSB0byB1c2VcbiAqIEFuZ3VsYXIgZm9ybXMgd2l0aCBuYXRpdmUgY29udGVudGVkaXRhYmxlIEhUTUwuIEZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtaWdodCB3YW50XG4gKiB0byBjb25zaWRlciBzYW5pdGl6aW5nIHBhc3RlZC9kcm9wcGVkIGNvbnRlbnQgYmVmb3JlIHVzaW5nIGl0LiBBbHNvIG1ha2Ugc3VyZSB0aGF0XG4gKiB5b3UgZG8gbm90IHNldCBhbnkgZGFuZ2Vyb3VzIGNvbnRlbnQgYXMgY29udHJvbCB2YWx1ZSB5b3Vyc2VsZiwgYmVjYXVzZSBkaXJlY3RpdmVcbiAqIGp1c3Qgb3V0cHV0cyBjb250cm9sIHZhbHVlIGFzLWlzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tjb250ZW50ZWRpdGFibGVdW2Zvcm1Db250cm9sTmFtZV0sIFtjb250ZW50ZWRpdGFibGVdW2Zvcm1Db250cm9sXSwgW2NvbnRlbnRlZGl0YWJsZV1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRlbnRlZGl0YWJsZVZhbHVlQWNjZXNzb3IpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudGVkaXRhYmxlVmFsdWVBY2Nlc3NvclxuICAgIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgLypcbiAgICAgKiBNdXRhdGlvbk9ic2VydmVyIElFMTEgZmFsbGJhY2sgKGFzIG9wcG9zZWQgdG8gaW5wdXQgZXZlbnQgZm9yIG1vZGVybiBicm93c2VycykuXG4gICAgICogV2hlbiBtdXRhdGlvbiByZW1vdmVzIGEgdGFnLCBpLmUuIGRlbGV0ZSBpcyBwcmVzc2VkIG9uIHRoZSBsYXN0IHJlbWFpbmluZyBjaGFyYWN0ZXJcbiAgICAgKiBpbnNpZGUgYSB0YWcgw6LCgMKUIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIERPTSBpcyBhY3R1YWxseSBjaGFuZ2VkLCB0aGVyZWZvcmVcbiAgICAgKiBzZXRUaW1lb3V0IGlzIHVzZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgQ29udGVudGVkaXRhYmxlVmFsdWVBY2Nlc3Nvci5wcm9jZXNzVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAqIG9uVG91Y2ggY2FsbGJhY2sgdGhhdCBtYXJrcyBjb250cm9sIGFzIHRvdWNoZWQgYW5kIGFsbG93cyBGb3JtSG9va3MgdXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIC8qXG4gICAgICogb25DaGFuZ2UgY2FsbGJhY2sgdGhhdCB3cml0ZXMgdmFsdWUgdG8gY29udHJvbCBhbmQgYWxsb3dzIEZvcm1Ib29rcyB1c2VcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASW5qZWN0KFJlbmRlcmVyMikgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICkge31cblxuICAgIC8qXG4gICAgICogVG8gc3VwcG9ydCBJRTExIE11dGF0aW9uT2JzZXJ2ZXIgaXMgdXNlZCB0byBtb25pdG9yIGNoYW5nZXMgdG8gdGhlIGNvbnRlbnRcbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRGlzY29ubmVjdCBNdXRhdGlvbk9ic2VydmVyIElFMTEgZmFsbGJhY2sgb24gZGVzdHJveVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIExpc3RlbiB0byBpbnB1dCBldmVudHMgdG8gd3JpdGUgaW5uZXJIVE1MIHZhbHVlIGludG8gY29udHJvbCxcbiAgICAgKiBhbHNvIGRpc2Nvbm5lY3QgTXV0YXRpb25PYnNlcnZlciBhcyBpdCBpcyBub3QgbmVlZGVkIGlmIHRoaXNcbiAgICAgKiBldmVudCB3b3JrcyBpbiBjdXJyZW50IGJyb3dzZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gICAgb25JbnB1dCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgICAgICBDb250ZW50ZWRpdGFibGVWYWx1ZUFjY2Vzc29yLnByb2Nlc3NWYWx1ZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTGlzdGVuIHRvIGJsdXIgZXZlbnQgdG8gbWFyayBjb250cm9sIGFzIHRvdWNoZWRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZWFjdHMgdG8gZXh0ZXJuYWwgY2hhbmdlXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBDb250cm9sVmFsdWVBY2Nlc3NvciN3cml0ZVZhbHVlfVxuICAgICAqL1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ2lubmVySFRNTCcsXG4gICAgICAgICAgICBDb250ZW50ZWRpdGFibGVWYWx1ZUFjY2Vzc29yLnByb2Nlc3NWYWx1ZSh2YWx1ZSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZWdpc3RlcnMgb25DaGFuZ2UgY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yI3JlZ2lzdGVyT25DaGFuZ2V9XG4gICAgICovXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVnaXN0ZXJzIG9uVG91Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yI3JlZ2lzdGVyT25Ub3VjaGVkfVxuICAgICAqL1xuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG9uVG91Y2hlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldHMgZGlzYWJsZWQgc3RhdGUgYnkgc2V0dGluZyBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlIHRvIHRydWUvZmFsc2VcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yI3NldERpc2FibGVkU3RhdGV9XG4gICAgICovXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ2NvbnRlbnRlZGl0YWJsZScsXG4gICAgICAgICAgICBTdHJpbmcoIWRpc2FibGVkKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIG51bGwgaXMgdHJlYXRlZCBhcyBlbXB0eSBzdHJpbmcgdG8gcHJldmVudCBJRTExIG91dHB1dHRpbmcgJ251bGwnLFxuICAgICAqIGFsc28gc2luZ2xlIDxicj4gaXMgcmVwbGFjZWQgd2l0aCBlbXB0eSBzdHJpbmcgd2hlbiBwYXNzZWQgdG8gdGhlIGNvbnRyb2xcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBwcm9jZXNzVmFsdWUodmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBTdHJpbmcodmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBwcm9jZXNzZWQudHJpbSgpID09PSAnPGJyPicgPyAnJyA6IHByb2Nlc3NlZDtcbiAgICB9XG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250ZW50ZWRpdGFibGVWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NvbnRlbnRlZGl0YWJsZS12YWx1ZS1hY2Nlc3Nvcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbQ29udGVudGVkaXRhYmxlVmFsdWVBY2Nlc3Nvcl0sXHJcbiAgICBleHBvcnRzOiBbQ29udGVudGVkaXRhYmxlVmFsdWVBY2Nlc3Nvcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50ZWRpdGFibGVWYWx1ZUFjY2Vzc29yTW9kdWxlIHt9XHJcbiJdfQ==

/***/ }),

/***/ "./src/modules/components/toolbar/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/toolbar/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiToolbarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiToolbarExample1", function() { return TuiToolbarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/angular-contenteditable-accessor */ "../../node_modules/@tinkoff/angular-contenteditable-accessor/fesm2015/tinkoff-angular-contenteditable-accessor.js");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _addon_editor_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/toolbar/toolbar.component */ "../addon-editor/components/toolbar/toolbar.component.ts");









function TuiToolbarExample1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-toolbar", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", _r0);
} }
class TuiToolbarExample1 {
    constructor() {
        this.open = false;
        this.model = `<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>`;
    }
    onActiveZone(active) {
        this.open = active;
    }
}
TuiToolbarExample1.ɵfac = function TuiToolbarExample1_Factory(t) { return new (t || TuiToolbarExample1)(); };
TuiToolbarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiToolbarExample1, selectors: [["tui-toolbar-example-1"]], decls: 5, vars: 5, consts: [[3, "tuiActiveZoneChange"], ["contenteditable", "", "tuiDropdownDirection", "top", 1, "editor", "tui-editor-socket", 3, "tuiDropdown", "tuiDropdownContent", "ngModel", "ngModelChange"], ["editor", ""], ["dropdown", ""], [3, "editor"]], template: function TuiToolbarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function TuiToolbarExample1_Template_div_tuiActiveZoneChange_0_listener($event) { return ctx.onActiveZone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiToolbarExample1_Template_div_ngModelChange_1_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiToolbarExample1_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("editor_active", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdown", ctx.open)("tuiDropdownContent", _r1)("ngModel", ctx.model);
    } }, directives: [_cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_3__["TuiActiveZoneDirective"], _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_4__["ContenteditableValueAccessor"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _addon_editor_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["TuiToolbarComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  padding: 1em 2em;\n  outline: none;\n}\n.editor_active[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 2px var(--tui-focus);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90b29sYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90b29sYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxzQ0FBQTtBQ0NSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90b29sYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICZfYWN0aXZlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXR1aS1mb2N1cyk7XG4gICAgfVxufVxuIiwiLmVkaXRvciB7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZWRpdG9yX2FjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS10dWktZm9jdXMpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiToolbarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-toolbar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/toolbar/toolbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/toolbar/toolbar.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiToolbarComponent", function() { return ExampleTuiToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/toolbar/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7972011866667788749$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS_1 = goog.getMsg("Toolbar");
    I18N_0 = MSG_EXTERNAL_7972011866667788749$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟dcfe12c1a954a6631d712f4bc7ac57f894e521ef␟7972011866667788749:Toolbar`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2842002208043947795$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__7 = goog.getMsg(" Toolbar is a set of edit tools for rich editors. Use {$startLink} @tinkoff/angular-contenteditable-accessor {$closeLink} package for working with a form ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_2842002208043947795$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟363d95f95fa40db16d0fe7ca3e7e0569164e58a5␟2842002208043947795: Toolbar is a set of edit tools for rich editors. Use ${"\uFFFD#2\uFFFD"}:START_LINK: @tinkoff/angular-contenteditable-accessor ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: package for working with a form `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiToolbarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-toolbar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3403070934660955548$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__12 = goog.getMsg(" Import {$startTagCode}TuiEditorModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_11 = MSG_EXTERNAL_3403070934660955548$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟535541a8f4958f52023b7c89aacff64626b5e9cb␟3403070934660955548: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiEditorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__14 = goog.getMsg("Add to the template:");
    I18N_13 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_TOOLBAR_TOOLBAR_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiToolbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiToolbarComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/1/index.less")),
        };
    }
}
ExampleTuiToolbarComponent.ɵfac = function ExampleTuiToolbarComponent_Factory(t) { return new (t || ExampleTuiToolbarComponent)(); };
ExampleTuiToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiToolbarComponent, selectors: [["example-tui-toolbar"]], decls: 5, vars: 0, consts: [["package", "ADDON-editor", "type", "components", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["tuiLink", "", "href", "https://github.com/tinkoff/angular-contenteditable-accessor"], ["id", "basic", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiToolbarComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiToolbarComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiToolbarExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-toolbar`,
                templateUrl: `./toolbar.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/toolbar/toolbar.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/toolbar/toolbar.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiToolbarModule", function() { return ExampleTuiToolbarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/angular-contenteditable-accessor */ "../../node_modules/@tinkoff/angular-contenteditable-accessor/fesm2015/tinkoff-angular-contenteditable-accessor.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/toolbar/examples/1/index.ts");
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolbar.component */ "./src/modules/components/toolbar/toolbar.component.ts");














class ExampleTuiToolbarModule {
}
ExampleTuiToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiToolbarModule });
ExampleTuiToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiToolbarModule_Factory(t) { return new (t || ExampleTuiToolbarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_9__["ContenteditableValueAccessorModule"],
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiToolbarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiIslandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiToolbarModule, { declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiToolbarExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_9__["ContenteditableValueAccessorModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiToolbarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_9__["ContenteditableValueAccessorModule"],
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiToolbarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiIslandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"])),
                ],
                declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiToolbarExample1"]],
                exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiToolbarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-toolbar-toolbar-module.js.map