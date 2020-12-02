import { InjectionToken, inject, EventEmitter, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, Output, Input, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir-document-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
const DIR_DOCUMENT = new InjectionToken('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return inject(DOCUMENT);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/directionality.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
    /**
     * @param {?=} _document
     */
    constructor(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            const bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            const value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Directionality.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Directionality.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIR_DOCUMENT,] }] }
];
/** @nocollapse */ Directionality.ɵprov = ɵɵdefineInjectable({ factory: function Directionality_Factory() { return new Directionality(ɵɵinject(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
if (false) {
    /**
     * The current 'ltr' or 'rtl' value.
     * @type {?}
     */
    Directionality.prototype.value;
    /**
     * Stream that emits whenever the 'ltr' / 'rtl' state changes.
     * @type {?}
     */
    Directionality.prototype.change;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new EventEmitter();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.decorators = [
    { type: Directive, args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir',
            },] }
];
Dir.propDecorators = {
    change: [{ type: Output, args: ['dirChange',] }],
    dir: [{ type: Input }]
};
if (false) {
    /**
     * Normalized direction that accounts for invalid/unsupported values.
     * @type {?}
     * @private
     */
    Dir.prototype._dir;
    /**
     * Whether the `value` has been set to its initial value.
     * @type {?}
     * @private
     */
    Dir.prototype._isInitialized;
    /**
     * Direction as passed in by the consumer.
     * @type {?}
     */
    Dir.prototype._rawDir;
    /**
     * Event emitted when the direction changes.
     * @type {?}
     */
    Dir.prototype.change;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/bidi-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BidiModule {
}
BidiModule.decorators = [
    { type: NgModule, args: [{
                exports: [Dir],
                declarations: [Dir],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BidiModule, DIR_DOCUMENT, Dir, Directionality, DIR_DOCUMENT_FACTORY as ɵangular_material_src_cdk_bidi_bidi_a };
//# sourceMappingURL=bidi.js.map
