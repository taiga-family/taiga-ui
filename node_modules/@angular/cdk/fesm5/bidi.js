import { InjectionToken, inject, EventEmitter, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, Output, Input, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
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
 * @docs-private
 */
var DIR_DOCUMENT = new InjectionToken('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
    return inject(DOCUMENT);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /** The current 'ltr' or 'rtl' value. */
        this.value = 'ltr';
        /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
        this.change = new EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    Directionality.prototype.ngOnDestroy = function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIR_DOCUMENT,] }] }
    ]; };
    Directionality.ɵprov = ɵɵdefineInjectable({ factory: function Directionality_Factory() { return new Directionality(ɵɵinject(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /** Normalized direction that accounts for invalid/unsupported values. */
        this._dir = 'ltr';
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Event emitted when the direction changes. */
        this.change = new EventEmitter();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: function () { return this._dir; },
        set: function (value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    Dir.prototype.ngAfterContentInit = function () {
        this._isInitialized = true;
    };
    Dir.prototype.ngOnDestroy = function () {
        this.change.complete();
    };
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
    return Dir;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: NgModule, args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] }
    ];
    return BidiModule;
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

export { BidiModule, DIR_DOCUMENT, Dir, Directionality, DIR_DOCUMENT_FACTORY as ɵangular_material_src_cdk_bidi_bidi_a };
//# sourceMappingURL=bidi.js.map
