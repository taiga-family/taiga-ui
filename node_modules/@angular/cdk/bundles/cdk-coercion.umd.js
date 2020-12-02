(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/coercion', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.coercion = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Coerces a data-bound value (typically a string) to a boolean. */
    function coerceBooleanProperty(value) {
        return value != null && "" + value !== 'false';
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function coerceNumberProperty(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
        return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */
    function _isNumberValue(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Coerces a value to a CSS pixel value. */
    function coerceCssPixelValue(value) {
        if (value == null) {
            return '';
        }
        return typeof value === 'string' ? value : value + "px";
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */
    function coerceElement(elementOrRef) {
        return elementOrRef instanceof core.ElementRef ? elementOrRef.nativeElement : elementOrRef;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports._isNumberValue = _isNumberValue;
    exports.coerceArray = coerceArray;
    exports.coerceBooleanProperty = coerceBooleanProperty;
    exports.coerceCssPixelValue = coerceCssPixelValue;
    exports.coerceElement = coerceElement;
    exports.coerceNumberProperty = coerceNumberProperty;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-coercion.umd.js.map
