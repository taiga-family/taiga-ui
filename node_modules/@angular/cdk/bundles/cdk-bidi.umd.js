(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/bidi', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.bidi = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

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
    var DIR_DOCUMENT = new i0.InjectionToken('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY,
    });
    /** @docs-private */
    function DIR_DOCUMENT_FACTORY() {
        return i0.inject(common.DOCUMENT);
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
            this.change = new i0.EventEmitter();
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Directionality.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [DIR_DOCUMENT,] }] }
        ]; };
        Directionality.ɵprov = i0.ɵɵdefineInjectable({ factory: function Directionality_Factory() { return new Directionality(i0.ɵɵinject(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
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
            this.change = new i0.EventEmitter();
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
            { type: i0.Directive, args: [{
                        selector: '[dir]',
                        providers: [{ provide: Directionality, useExisting: Dir }],
                        host: { '[attr.dir]': '_rawDir' },
                        exportAs: 'dir',
                    },] }
        ];
        Dir.propDecorators = {
            change: [{ type: i0.Output, args: ['dirChange',] }],
            dir: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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

    exports.BidiModule = BidiModule;
    exports.DIR_DOCUMENT = DIR_DOCUMENT;
    exports.Dir = Dir;
    exports.Directionality = Directionality;
    exports.ɵangular_material_src_cdk_bidi_bidi_a = DIR_DOCUMENT_FACTORY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-bidi.umd.js.map
