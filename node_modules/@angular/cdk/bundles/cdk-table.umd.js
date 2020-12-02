(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/collections'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/table', ['exports', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/collections', '@angular/cdk/platform', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.table = {}), global.ng.cdk.bidi, global.ng.cdk.coercion, global.ng.cdk.collections, global.ng.cdk.platform, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, bidi, coercion, collections, platform, common, core, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Mixin to provide a directive with a function that checks if the sticky input has been
     * changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * @docs-private
     */
    function mixinHasStickyInput(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._sticky = false;
                /** Whether the sticky input has changed since it was last checked. */
                _this._hasStickyChanged = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "sticky", {
                /** Whether sticky positioning should be applied. */
                get: function () { return this._sticky; },
                set: function (v) {
                    var prevValue = this._sticky;
                    this._sticky = coercion.coerceBooleanProperty(v);
                    this._hasStickyChanged = prevValue !== this._sticky;
                },
                enumerable: true,
                configurable: true
            });
            /** Whether the sticky value has changed since this was last called. */
            class_1.prototype.hasStickyChanged = function () {
                var hasStickyChanged = this._hasStickyChanged;
                this._hasStickyChanged = false;
                return hasStickyChanged;
            };
            /** Resets the dirty check for cases where the sticky state has been used without checking. */
            class_1.prototype.resetStickyChanged = function () {
                this._hasStickyChanged = false;
            };
            return class_1;
        }(base));
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Used to provide a table to some of the sub-components without causing a circular dependency.
     * @docs-private
     */
    var CDK_TABLE = new core.InjectionToken('CDK_TABLE');
    /** Injection token that can be used to specify the text column options. */
    var TEXT_COLUMN_OPTIONS = new core.InjectionToken('text-column-options');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Cell definition for a CDK table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */
    var CdkCellDef = /** @class */ (function () {
        function CdkCellDef(/** @docs-private */ template) {
            this.template = template;
        }
        CdkCellDef.decorators = [
            { type: core.Directive, args: [{ selector: '[cdkCellDef]' },] }
        ];
        /** @nocollapse */
        CdkCellDef.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return CdkCellDef;
    }());
    /**
     * Header cell definition for a CDK table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */
    var CdkHeaderCellDef = /** @class */ (function () {
        function CdkHeaderCellDef(/** @docs-private */ template) {
            this.template = template;
        }
        CdkHeaderCellDef.decorators = [
            { type: core.Directive, args: [{ selector: '[cdkHeaderCellDef]' },] }
        ];
        /** @nocollapse */
        CdkHeaderCellDef.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return CdkHeaderCellDef;
    }());
    /**
     * Footer cell definition for a CDK table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */
    var CdkFooterCellDef = /** @class */ (function () {
        function CdkFooterCellDef(/** @docs-private */ template) {
            this.template = template;
        }
        CdkFooterCellDef.decorators = [
            { type: core.Directive, args: [{ selector: '[cdkFooterCellDef]' },] }
        ];
        /** @nocollapse */
        CdkFooterCellDef.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return CdkFooterCellDef;
    }());
    // Boilerplate for applying mixins to CdkColumnDef.
    /** @docs-private */
    var CdkColumnDefBase = /** @class */ (function () {
        function CdkColumnDefBase() {
        }
        return CdkColumnDefBase;
    }());
    var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
    /**
     * Column definition for the CDK table.
     * Defines a set of cells available for a table column.
     */
    var CdkColumnDef = /** @class */ (function (_super) {
        __extends(CdkColumnDef, _super);
        function CdkColumnDef(_table) {
            var _this = _super.call(this) || this;
            _this._table = _table;
            _this._stickyEnd = false;
            return _this;
        }
        Object.defineProperty(CdkColumnDef.prototype, "name", {
            /** Unique name for this column. */
            get: function () {
                return this._name;
            },
            set: function (name) {
                // If the directive is set without a name (updated programatically), then this setter will
                // trigger with an empty string and should not overwrite the programatically set value.
                if (name) {
                    this._name = name;
                    this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
            /**
             * Whether this column should be sticky positioned on the end of the row. Should make sure
             * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
             * has been changed.
             */
            get: function () {
                return this._stickyEnd;
            },
            set: function (v) {
                var prevValue = this._stickyEnd;
                this._stickyEnd = coercion.coerceBooleanProperty(v);
                this._hasStickyChanged = prevValue !== this._stickyEnd;
            },
            enumerable: true,
            configurable: true
        });
        CdkColumnDef.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkColumnDef]',
                        inputs: ['sticky'],
                        providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }],
                    },] }
        ];
        /** @nocollapse */
        CdkColumnDef.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [CDK_TABLE,] }, { type: core.Optional }] }
        ]; };
        CdkColumnDef.propDecorators = {
            name: [{ type: core.Input, args: ['cdkColumnDef',] }],
            stickyEnd: [{ type: core.Input, args: ['stickyEnd',] }],
            cell: [{ type: core.ContentChild, args: [CdkCellDef,] }],
            headerCell: [{ type: core.ContentChild, args: [CdkHeaderCellDef,] }],
            footerCell: [{ type: core.ContentChild, args: [CdkFooterCellDef,] }]
        };
        return CdkColumnDef;
    }(_CdkColumnDefBase));
    /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
    var BaseCdkCell = /** @class */ (function () {
        function BaseCdkCell(columnDef, elementRef) {
            var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
            elementRef.nativeElement.classList.add(columnClassName);
        }
        return BaseCdkCell;
    }());
    /** Header cell template container that adds the right classes and role. */
    var CdkHeaderCell = /** @class */ (function (_super) {
        __extends(CdkHeaderCell, _super);
        function CdkHeaderCell(columnDef, elementRef) {
            return _super.call(this, columnDef, elementRef) || this;
        }
        CdkHeaderCell.decorators = [
            { type: core.Directive, args: [{
                        selector: 'cdk-header-cell, th[cdk-header-cell]',
                        host: {
                            'class': 'cdk-header-cell',
                            'role': 'columnheader',
                        },
                    },] }
        ];
        /** @nocollapse */
        CdkHeaderCell.ctorParameters = function () { return [
            { type: CdkColumnDef },
            { type: core.ElementRef }
        ]; };
        return CdkHeaderCell;
    }(BaseCdkCell));
    /** Footer cell template container that adds the right classes and role. */
    var CdkFooterCell = /** @class */ (function (_super) {
        __extends(CdkFooterCell, _super);
        function CdkFooterCell(columnDef, elementRef) {
            return _super.call(this, columnDef, elementRef) || this;
        }
        CdkFooterCell.decorators = [
            { type: core.Directive, args: [{
                        selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                        host: {
                            'class': 'cdk-footer-cell',
                            'role': 'gridcell',
                        },
                    },] }
        ];
        /** @nocollapse */
        CdkFooterCell.ctorParameters = function () { return [
            { type: CdkColumnDef },
            { type: core.ElementRef }
        ]; };
        return CdkFooterCell;
    }(BaseCdkCell));
    /** Cell template container that adds the right classes and role. */
    var CdkCell = /** @class */ (function (_super) {
        __extends(CdkCell, _super);
        function CdkCell(columnDef, elementRef) {
            return _super.call(this, columnDef, elementRef) || this;
        }
        CdkCell.decorators = [
            { type: core.Directive, args: [{
                        selector: 'cdk-cell, td[cdk-cell]',
                        host: {
                            'class': 'cdk-cell',
                            'role': 'gridcell',
                        },
                    },] }
        ];
        /** @nocollapse */
        CdkCell.ctorParameters = function () { return [
            { type: CdkColumnDef },
            { type: core.ElementRef }
        ]; };
        return CdkCell;
    }(BaseCdkCell));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The row template that can be used by the mat-table. Should not be used outside of the
     * material library.
     */
    var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
    /**
     * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
     * for changes and notifying the table.
     */
    var BaseRowDef = /** @class */ (function () {
        function BaseRowDef(
        /** @docs-private */ template, _differs) {
            this.template = template;
            this._differs = _differs;
        }
        BaseRowDef.prototype.ngOnChanges = function (changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
                var columns = (changes['columns'] && changes['columns'].currentValue) || [];
                this._columnsDiffer = this._differs.find(columns).create();
                this._columnsDiffer.diff(columns);
            }
        };
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         */
        BaseRowDef.prototype.getColumnsDiff = function () {
            return this._columnsDiffer.diff(this.columns);
        };
        /** Gets this row def's relevant cell template from the provided column def. */
        BaseRowDef.prototype.extractCellTemplate = function (column) {
            if (this instanceof CdkHeaderRowDef) {
                return column.headerCell.template;
            }
            if (this instanceof CdkFooterRowDef) {
                return column.footerCell.template;
            }
            else {
                return column.cell.template;
            }
        };
        BaseRowDef.decorators = [
            { type: core.Directive }
        ];
        /** @nocollapse */
        BaseRowDef.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.IterableDiffers }
        ]; };
        return BaseRowDef;
    }());
    // Boilerplate for applying mixins to CdkHeaderRowDef.
    /** @docs-private */
    var CdkHeaderRowDefBase = /** @class */ (function (_super) {
        __extends(CdkHeaderRowDefBase, _super);
        function CdkHeaderRowDefBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CdkHeaderRowDefBase;
    }(BaseRowDef));
    var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
    /**
     * Header row definition for the CDK table.
     * Captures the header row's template and other header properties such as the columns to display.
     */
    var CdkHeaderRowDef = /** @class */ (function (_super) {
        __extends(CdkHeaderRowDef, _super);
        function CdkHeaderRowDef(template, _differs, _table) {
            var _this = _super.call(this, template, _differs) || this;
            _this._table = _table;
            return _this;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        CdkHeaderRowDef.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        CdkHeaderRowDef.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkHeaderRowDef]',
                        inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
                    },] }
        ];
        /** @nocollapse */
        CdkHeaderRowDef.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.IterableDiffers },
            { type: undefined, decorators: [{ type: core.Inject, args: [CDK_TABLE,] }, { type: core.Optional }] }
        ]; };
        return CdkHeaderRowDef;
    }(_CdkHeaderRowDefBase));
    // Boilerplate for applying mixins to CdkFooterRowDef.
    /** @docs-private */
    var CdkFooterRowDefBase = /** @class */ (function (_super) {
        __extends(CdkFooterRowDefBase, _super);
        function CdkFooterRowDefBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CdkFooterRowDefBase;
    }(BaseRowDef));
    var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
    /**
     * Footer row definition for the CDK table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */
    var CdkFooterRowDef = /** @class */ (function (_super) {
        __extends(CdkFooterRowDef, _super);
        function CdkFooterRowDef(template, _differs, _table) {
            var _this = _super.call(this, template, _differs) || this;
            _this._table = _table;
            return _this;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        CdkFooterRowDef.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        CdkFooterRowDef.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkFooterRowDef]',
                        inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
                    },] }
        ];
        /** @nocollapse */
        CdkFooterRowDef.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.IterableDiffers },
            { type: undefined, decorators: [{ type: core.Inject, args: [CDK_TABLE,] }, { type: core.Optional }] }
        ]; };
        return CdkFooterRowDef;
    }(_CdkFooterRowDefBase));
    /**
     * Data row definition for the CDK table.
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     */
    var CdkRowDef = /** @class */ (function (_super) {
        __extends(CdkRowDef, _super);
        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        function CdkRowDef(template, _differs, _table) {
            var _this = _super.call(this, template, _differs) || this;
            _this._table = _table;
            return _this;
        }
        CdkRowDef.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkRowDef]',
                        inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
                    },] }
        ];
        /** @nocollapse */
        CdkRowDef.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.IterableDiffers },
            { type: undefined, decorators: [{ type: core.Inject, args: [CDK_TABLE,] }, { type: core.Optional }] }
        ]; };
        return CdkRowDef;
    }(BaseRowDef));
    /**
     * Outlet for rendering cells inside of a row or header row.
     * @docs-private
     */
    var CdkCellOutlet = /** @class */ (function () {
        function CdkCellOutlet(_viewContainer) {
            this._viewContainer = _viewContainer;
            CdkCellOutlet.mostRecentCellOutlet = this;
        }
        CdkCellOutlet.prototype.ngOnDestroy = function () {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
                CdkCellOutlet.mostRecentCellOutlet = null;
            }
        };
        /**
         * Static property containing the latest constructed instance of this class.
         * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
         * createEmbeddedView. After one of these components are created, this property will provide
         * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
         * construct the cells with the provided context.
         */
        CdkCellOutlet.mostRecentCellOutlet = null;
        CdkCellOutlet.decorators = [
            { type: core.Directive, args: [{ selector: '[cdkCellOutlet]' },] }
        ];
        /** @nocollapse */
        CdkCellOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        return CdkCellOutlet;
    }());
    /** Header template container that contains the cell outlet. Adds the right class and role. */
    var CdkHeaderRow = /** @class */ (function () {
        function CdkHeaderRow() {
        }
        CdkHeaderRow.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-header-row, tr[cdk-header-row]',
                        template: CDK_ROW_TEMPLATE,
                        host: {
                            'class': 'cdk-header-row',
                            'role': 'row',
                        },
                        // See note on CdkTable for explanation on why this uses the default change detection strategy.
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CdkHeaderRow;
    }());
    /** Footer template container that contains the cell outlet. Adds the right class and role. */
    var CdkFooterRow = /** @class */ (function () {
        function CdkFooterRow() {
        }
        CdkFooterRow.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-footer-row, tr[cdk-footer-row]',
                        template: CDK_ROW_TEMPLATE,
                        host: {
                            'class': 'cdk-footer-row',
                            'role': 'row',
                        },
                        // See note on CdkTable for explanation on why this uses the default change detection strategy.
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CdkFooterRow;
    }());
    /** Data row template container that contains the cell outlet. Adds the right class and role. */
    var CdkRow = /** @class */ (function () {
        function CdkRow() {
        }
        CdkRow.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-row, tr[cdk-row]',
                        template: CDK_ROW_TEMPLATE,
                        host: {
                            'class': 'cdk-row',
                            'role': 'row',
                        },
                        // See note on CdkTable for explanation on why this uses the default change detection strategy.
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CdkRow;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * List of all possible directions that can be used for sticky positioning.
     * @docs-private
     */
    var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
    /**
     * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
     * @docs-private
     */
    var StickyStyler = /** @class */ (function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         */
        function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser) {
            if (_isBrowser === void 0) { _isBrowser = true; }
            this._isNativeHtmlTable = _isNativeHtmlTable;
            this._stickCellCss = _stickCellCss;
            this.direction = direction;
            this._isBrowser = _isBrowser;
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */
        StickyStyler.prototype.clearStickyPositioning = function (rows, stickyDirections) {
            var e_1, _a;
            try {
                for (var rows_1 = __values(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                    var row = rows_1_1.value;
                    // If the row isn't an element (e.g. if it's an `ng-container`),
                    // it won't have inline styles or `children` so we skip it.
                    if (row.nodeType !== row.ELEMENT_NODE) {
                        continue;
                    }
                    this._removeStickyStyle(row, stickyDirections);
                    for (var i = 0; i < row.children.length; i++) {
                        var cell = row.children[i];
                        this._removeStickyStyle(cell, stickyDirections);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Applies sticky left and right positions to the cells of each row according to the sticky
         * states of the rendered column definitions.
         * @param rows The rows that should have its set of cells stuck according to the sticky states.
         * @param stickyStartStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the start of the row.
         * @param stickyEndStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the end of the row.
         */
        StickyStyler.prototype.updateStickyColumns = function (rows, stickyStartStates, stickyEndStates) {
            var e_2, _a;
            var hasStickyColumns = stickyStartStates.some(function (state) { return state; }) || stickyEndStates.some(function (state) { return state; });
            if (!rows.length || !hasStickyColumns || !this._isBrowser) {
                return;
            }
            var firstRow = rows[0];
            var numCells = firstRow.children.length;
            var cellWidths = this._getCellWidths(firstRow);
            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
            var isRtl = this.direction === 'rtl';
            try {
                for (var rows_2 = __values(rows), rows_2_1 = rows_2.next(); !rows_2_1.done; rows_2_1 = rows_2.next()) {
                    var row = rows_2_1.value;
                    for (var i = 0; i < numCells; i++) {
                        var cell = row.children[i];
                        if (stickyStartStates[i]) {
                            this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                        }
                        if (stickyEndStates[i]) {
                            this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (rows_2_1 && !rows_2_1.done && (_a = rows_2.return)) _a.call(rows_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * Applies sticky positioning to the row's cells if using the native table layout, and to the
         * row itself otherwise.
         * @param rowsToStick The list of rows that should be stuck according to their corresponding
         *     sticky state and to the provided top or bottom position.
         * @param stickyStates A list of boolean states where each state represents whether the row
         *     should be stuck in the particular top or bottom position.
         * @param position The position direction in which the row should be stuck if that row should be
         *     sticky.
         *
         */
        StickyStyler.prototype.stickRows = function (rowsToStick, stickyStates, position) {
            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
                return;
            }
            // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on.
            var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
            var stickyHeight = 0;
            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!stickyStates[rowIndex]) {
                    continue;
                }
                var row = rows[rowIndex];
                if (this._isNativeHtmlTable) {
                    for (var j = 0; j < row.children.length; j++) {
                        var cell = row.children[j];
                        this._addStickyStyle(cell, position, stickyHeight);
                    }
                }
                else {
                    // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                    // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                    this._addStickyStyle(row, position, stickyHeight);
                }
                if (rowIndex === rows.length - 1) {
                    // prevent unnecessary reflow from getBoundingClientRect()
                    return;
                }
                stickyHeight += row.getBoundingClientRect().height;
            }
        };
        /**
         * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
         * footer rows is to apply sticky styling to the tfoot container. This should only be done if
         * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
         * the tfoot element.
         */
        StickyStyler.prototype.updateStickyFooterContainer = function (tableElement, stickyStates) {
            if (!this._isNativeHtmlTable) {
                return;
            }
            var tfoot = tableElement.querySelector('tfoot');
            if (stickyStates.some(function (state) { return !state; })) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0);
            }
        };
        /**
         * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
         * the zIndex, removing each of the provided sticky directions, and removing the
         * sticky position if there are no more directions.
         */
        StickyStyler.prototype._removeStickyStyle = function (element, stickyDirections) {
            var e_3, _a;
            try {
                for (var stickyDirections_1 = __values(stickyDirections), stickyDirections_1_1 = stickyDirections_1.next(); !stickyDirections_1_1.done; stickyDirections_1_1 = stickyDirections_1.next()) {
                    var dir = stickyDirections_1_1.value;
                    element.style[dir] = '';
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (stickyDirections_1_1 && !stickyDirections_1_1.done && (_a = stickyDirections_1.return)) _a.call(stickyDirections_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            element.style.zIndex = this._getCalculatedZIndex(element);
            // If the element no longer has any more sticky directions, remove sticky positioning and
            // the sticky CSS class.
            var hasDirection = STICKY_DIRECTIONS.some(function (dir) { return !!element.style[dir]; });
            if (!hasDirection) {
                element.style.position = '';
                element.classList.remove(this._stickCellCss);
            }
        };
        /**
         * Adds the sticky styling to the element by adding the sticky style class, changing position
         * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
         * direction and value.
         */
        StickyStyler.prototype._addStickyStyle = function (element, dir, dirValue) {
            element.classList.add(this._stickCellCss);
            element.style[dir] = dirValue + "px";
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            element.style.zIndex = this._getCalculatedZIndex(element);
        };
        /**
         * Calculate what the z-index should be for the element, depending on what directions (top,
         * bottom, left, right) have been set. It should be true that elements with a top direction
         * should have the highest index since these are elements like a table header. If any of those
         * elements are also sticky in another direction, then they should appear above other elements
         * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
         * (e.g. footer rows) should then be next in the ordering such that they are below the header
         * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
         * should minimally increment so that they are above non-sticky elements but below top and bottom
         * elements.
         */
        StickyStyler.prototype._getCalculatedZIndex = function (element) {
            var e_4, _a;
            var zIndexIncrements = {
                top: 100,
                bottom: 10,
                left: 1,
                right: 1,
            };
            var zIndex = 0;
            try {
                // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
                // loses the array generic type in the `for of`. But we *also* have to use `Array` because
                // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
                for (var _b = __values(STICKY_DIRECTIONS), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dir = _c.value;
                    if (element.style[dir]) {
                        zIndex += zIndexIncrements[dir];
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return zIndex ? "" + zIndex : '';
        };
        /** Gets the widths for each cell in the provided row. */
        StickyStyler.prototype._getCellWidths = function (row) {
            var cellWidths = [];
            var firstRowCells = row.children;
            for (var i = 0; i < firstRowCells.length; i++) {
                var cell = firstRowCells[i];
                cellWidths.push(cell.getBoundingClientRect().width);
            }
            return cellWidths;
        };
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         */
        StickyStyler.prototype._getStickyStartColumnPositions = function (widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;
            for (var i = 0; i < widths.length; i++) {
                if (stickyStates[i]) {
                    positions[i] = nextPosition;
                    nextPosition += widths[i];
                }
            }
            return positions;
        };
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         */
        StickyStyler.prototype._getStickyEndColumnPositions = function (widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;
            for (var i = widths.length; i > 0; i--) {
                if (stickyStates[i]) {
                    positions[i] = nextPosition;
                    nextPosition += widths[i];
                }
            }
            return positions;
        };
        return StickyStyler;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Returns an error to be thrown when attempting to find an unexisting column.
     * @param id Id whose lookup failed.
     * @docs-private
     */
    function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"" + id + "\".");
    }
    /**
     * Returns an error to be thrown when two column definitions have the same name.
     * @docs-private
     */
    function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"" + name + "\".");
    }
    /**
     * Returns an error to be thrown when there are multiple rows that are missing a when function.
     * @docs-private
     */
    function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching row defs for a particular set of data.
     * @docs-private
     */
    function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" +
            ("provided row data: " + JSON.stringify(data)));
    }
    /**
     * Returns an error to be thrown when there is no row definitions present in the content.
     * @docs-private
     */
    function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' +
            'cannot determine which columns should be rendered.');
    }
    /**
     * Returns an error to be thrown when the data source does not match the compatible types.
     * @docs-private
     */
    function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
    }
    /**
     * Returns an error to be thrown when the text column cannot find a parent table to inject.
     * @docs-private
     */
    function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
    }
    /**
     * Returns an error to be thrown when a table text column doesn't have a name.
     * @docs-private
     */
    function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert data rows.
     * @docs-private
     */
    var DataRowOutlet = /** @class */ (function () {
        function DataRowOutlet(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
        DataRowOutlet.decorators = [
            { type: core.Directive, args: [{ selector: '[rowOutlet]' },] }
        ];
        /** @nocollapse */
        DataRowOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.ElementRef }
        ]; };
        return DataRowOutlet;
    }());
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the header.
     * @docs-private
     */
    var HeaderRowOutlet = /** @class */ (function () {
        function HeaderRowOutlet(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
        HeaderRowOutlet.decorators = [
            { type: core.Directive, args: [{ selector: '[headerRowOutlet]' },] }
        ];
        /** @nocollapse */
        HeaderRowOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.ElementRef }
        ]; };
        return HeaderRowOutlet;
    }());
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the footer.
     * @docs-private
     */
    var FooterRowOutlet = /** @class */ (function () {
        function FooterRowOutlet(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
        FooterRowOutlet.decorators = [
            { type: core.Directive, args: [{ selector: '[footerRowOutlet]' },] }
        ];
        /** @nocollapse */
        FooterRowOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.ElementRef }
        ]; };
        return FooterRowOutlet;
    }());
    /**
     * The table template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * @docs-private
     */
    var CDK_TABLE_TEMPLATE = 
    // Note that according to MDN, the `caption` element has to be projected as the **first**
    // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
    "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
    /**
     * Class used to conveniently type the embedded view ref for rows with a context.
     * @docs-private
     */
    var RowViewRef = /** @class */ (function (_super) {
        __extends(RowViewRef, _super);
        function RowViewRef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RowViewRef;
    }(core.EmbeddedViewRef));
    /**
     * A data table that can render a header row, data rows, and a footer row.
     * Uses the dataSource input to determine the data to be rendered. The data can be provided either
     * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
     * connect function that will return an Observable stream that emits the data array to render.
     */
    var CdkTable = /** @class */ (function () {
        function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
            this._differs = _differs;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._dir = _dir;
            this._platform = _platform;
            /** Subject that emits when the component has been destroyed. */
            this._onDestroy = new rxjs.Subject();
            /**
             * Map of all the user's defined columns (header, data, and footer cell template) identified by
             * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
             * any custom column definitions added to `_customColumnDefs`.
             */
            this._columnDefsByName = new Map();
            /**
             * Column definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * column definitions as *its* content child.
             */
            this._customColumnDefs = new Set();
            /**
             * Data row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in data rows as *its* content child.
             */
            this._customRowDefs = new Set();
            /**
             * Header row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in header rows as *its* content child.
             */
            this._customHeaderRowDefs = new Set();
            /**
             * Footer row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
             * built-in footer row as *its* content child.
             */
            this._customFooterRowDefs = new Set();
            /**
             * Whether the header row definition has been changed. Triggers an update to the header row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._headerRowDefChanged = true;
            /**
             * Whether the footer row definition has been changed. Triggers an update to the footer row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._footerRowDefChanged = true;
            /**
             * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
             * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
             * the cached `RenderRow` objects when possible, the row identity is preserved when the data
             * and row template matches, which allows the `IterableDiffer` to check rows by reference
             * and understand which rows are added/moved/removed.
             *
             * Implemented as a map of maps where the first key is the `data: T` object and the second is the
             * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
             * contains an array of created pairs. The array is necessary to handle cases where the data
             * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
             * stored.
             */
            this._cachedRenderRowsMap = new Map();
            /**
             * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
             * table subclasses.
             */
            this.stickyCssClass = 'cdk-table-sticky';
            this._multiTemplateDataRows = false;
            // TODO(andrewseguin): Remove max value as the end index
            //   and instead calculate the view on init and scroll.
            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             *
             * @docs-private
             */
            this.viewChange = new rxjs.BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
            if (!role) {
                this._elementRef.nativeElement.setAttribute('role', 'grid');
            }
            this._document = _document;
            this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        Object.defineProperty(CdkTable.prototype, "trackBy", {
            /**
             * Tracking function that will be used to check the differences in data changes. Used similarly
             * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
             * relative to the function to know if a row should be added/removed/moved.
             * Accepts a function that takes two parameters, `index` and `item`.
             */
            get: function () {
                return this._trackByFn;
            },
            set: function (fn) {
                if (core.isDevMode() && fn != null && typeof fn !== 'function' && console &&
                    console.warn) {
                    console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTable.prototype, "dataSource", {
            /**
             * The table's source of data, which can be provided in three ways (in order of complexity):
             *   - Simple data array (each object represents one table row)
             *   - Stream that emits a data array each time the array changes
             *   - `DataSource` object that implements the connect/disconnect interface.
             *
             * If a data array is provided, the table must be notified when the array's objects are
             * added, removed, or moved. This can be done by calling the `renderRows()` function which will
             * render the diff since the last table render. If the data array reference is changed, the table
             * will automatically trigger an update to the rows.
             *
             * When providing an Observable stream, the table will trigger an update automatically when the
             * stream emits a new array of data.
             *
             * Finally, when providing a `DataSource` object, the table will use the Observable stream
             * provided by the connect function and trigger updates when that stream emits new data array
             * values. During the table's ngOnDestroy or when the data source is removed from the table, the
             * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
             * subscriptions registered during the connect process).
             */
            get: function () {
                return this._dataSource;
            },
            set: function (dataSource) {
                if (this._dataSource !== dataSource) {
                    this._switchDataSource(dataSource);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTable.prototype, "multiTemplateDataRows", {
            /**
             * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
             * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
             * dataobject will render the first row that evaluates its when predicate to true, in the order
             * defined in the table, or otherwise the default row which does not have a when predicate.
             */
            get: function () {
                return this._multiTemplateDataRows;
            },
            set: function (v) {
                this._multiTemplateDataRows = coercion.coerceBooleanProperty(v);
                // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
                // this setter will be invoked before the row outlet has been defined hence the null check.
                if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                    this._forceRenderDataRows();
                }
            },
            enumerable: true,
            configurable: true
        });
        CdkTable.prototype.ngOnInit = function () {
            var _this = this;
            this._setupStickyStyler();
            if (this._isNativeHtmlTable) {
                this._applyNativeTableSections();
            }
            // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.
            this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
                return _this.trackBy ? _this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });
        };
        CdkTable.prototype.ngAfterContentChecked = function () {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();
            this._cacheColumnDefs();
            // Make sure that the user has at least added header, footer, or data row def.
            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
                throw getTableMissingRowDefsError();
            }
            // Render updates if the list of columns have been changed for the header, row, or footer defs.
            this._renderUpdatedColumns();
            // If the header row definition has been changed, trigger a render to the header row.
            if (this._headerRowDefChanged) {
                this._forceRenderHeaderRows();
                this._headerRowDefChanged = false;
            }
            // If the footer row definition has been changed, trigger a render to the footer row.
            if (this._footerRowDefChanged) {
                this._forceRenderFooterRows();
                this._footerRowDefChanged = false;
            }
            // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.
            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
                this._observeRenderChanges();
            }
            this._checkStickyStates();
        };
        CdkTable.prototype.ngOnDestroy = function () {
            this._rowOutlet.viewContainer.clear();
            this._headerRowOutlet.viewContainer.clear();
            this._footerRowOutlet.viewContainer.clear();
            this._cachedRenderRowsMap.clear();
            this._onDestroy.next();
            this._onDestroy.complete();
            if (collections.isDataSource(this.dataSource)) {
                this.dataSource.disconnect(this);
            }
        };
        /**
         * Renders rows based on the table's latest set of data, which was either provided directly as an
         * input or retrieved through an Observable stream (directly or from a DataSource).
         * Checks for differences in the data since the last diff to perform only the necessary
         * changes (add/remove/move rows).
         *
         * If the table's data source is a DataSource or Observable, this will be invoked automatically
         * each time the provided Observable stream emits a new data array. Otherwise if your data is
         * an array, this function will need to be called to render any changes.
         */
        CdkTable.prototype.renderRows = function () {
            var _this = this;
            this._renderRows = this._getAllRenderRows();
            var changes = this._dataDiffer.diff(this._renderRows);
            if (!changes) {
                return;
            }
            var viewContainer = this._rowOutlet.viewContainer;
            changes.forEachOperation(function (record, prevIndex, currentIndex) {
                if (record.previousIndex == null) {
                    _this._insertRow(record.item, currentIndex);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    var view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
            // Update the meta context of a row's context data (index, count, first, last, ...)
            this._updateRowIndexContext();
            // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.
            changes.forEachIdentityChange(function (record) {
                var rowView = viewContainer.get(record.currentIndex);
                rowView.context.$implicit = record.item.data;
            });
            this.updateStickyColumnStyles();
        };
        /**
         * Sets the header row definition to be used. Overrides the header row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
         * table's content is checked.
         * @docs-private
         * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
         * @breaking-change 8.0.0
         */
        CdkTable.prototype.setHeaderRowDef = function (headerRowDef) {
            this._customHeaderRowDefs = new Set([headerRowDef]);
            this._headerRowDefChanged = true;
        };
        /**
         * Sets the footer row definition to be used. Overrides the footer row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
         * table's content is checked.
         * @docs-private
         * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
         * @breaking-change 8.0.0
         */
        CdkTable.prototype.setFooterRowDef = function (footerRowDef) {
            this._customFooterRowDefs = new Set([footerRowDef]);
            this._footerRowDefChanged = true;
        };
        /** Adds a column definition that was not included as part of the content children. */
        CdkTable.prototype.addColumnDef = function (columnDef) {
            this._customColumnDefs.add(columnDef);
        };
        /** Removes a column definition that was not included as part of the content children. */
        CdkTable.prototype.removeColumnDef = function (columnDef) {
            this._customColumnDefs.delete(columnDef);
        };
        /** Adds a row definition that was not included as part of the content children. */
        CdkTable.prototype.addRowDef = function (rowDef) {
            this._customRowDefs.add(rowDef);
        };
        /** Removes a row definition that was not included as part of the content children. */
        CdkTable.prototype.removeRowDef = function (rowDef) {
            this._customRowDefs.delete(rowDef);
        };
        /** Adds a header row definition that was not included as part of the content children. */
        CdkTable.prototype.addHeaderRowDef = function (headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);
            this._headerRowDefChanged = true;
        };
        /** Removes a header row definition that was not included as part of the content children. */
        CdkTable.prototype.removeHeaderRowDef = function (headerRowDef) {
            this._customHeaderRowDefs.delete(headerRowDef);
            this._headerRowDefChanged = true;
        };
        /** Adds a footer row definition that was not included as part of the content children. */
        CdkTable.prototype.addFooterRowDef = function (footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);
            this._footerRowDefChanged = true;
        };
        /** Removes a footer row definition that was not included as part of the content children. */
        CdkTable.prototype.removeFooterRowDef = function (footerRowDef) {
            this._customFooterRowDefs.delete(footerRowDef);
            this._footerRowDefChanged = true;
        };
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        CdkTable.prototype.updateStickyHeaderRowStyles = function () {
            var headerRows = this._getRenderedRows(this._headerRowOutlet);
            var tableElement = this._elementRef.nativeElement;
            // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            var thead = tableElement.querySelector('thead');
            if (thead) {
                thead.style.display = headerRows.length ? '' : 'none';
            }
            var stickyStates = this._headerRowDefs.map(function (def) { return def.sticky; });
            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
            this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
            // Reset the dirty state of the sticky input change since it has been used.
            this._headerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
        };
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        CdkTable.prototype.updateStickyFooterRowStyles = function () {
            var footerRows = this._getRenderedRows(this._footerRowOutlet);
            var tableElement = this._elementRef.nativeElement;
            // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            var tfoot = tableElement.querySelector('tfoot');
            if (tfoot) {
                tfoot.style.display = footerRows.length ? '' : 'none';
            }
            var stickyStates = this._footerRowDefs.map(function (def) { return def.sticky; });
            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
            // Reset the dirty state of the sticky input change since it has been used.
            this._footerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
        };
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         */
        CdkTable.prototype.updateStickyColumnStyles = function () {
            var _this = this;
            var headerRows = this._getRenderedRows(this._headerRowOutlet);
            var dataRows = this._getRenderedRows(this._rowOutlet);
            var footerRows = this._getRenderedRows(this._footerRowOutlet);
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning(__spread(headerRows, dataRows, footerRows), ['left', 'right']);
            // Update the sticky styles for each header row depending on the def's sticky state
            headerRows.forEach(function (headerRow, i) {
                _this._addStickyColumnStyles([headerRow], _this._headerRowDefs[i]);
            });
            // Update the sticky styles for each data row depending on its def's sticky state
            this._rowDefs.forEach(function (rowDef) {
                // Collect all the rows rendered with this row definition.
                var rows = [];
                for (var i = 0; i < dataRows.length; i++) {
                    if (_this._renderRows[i].rowDef === rowDef) {
                        rows.push(dataRows[i]);
                    }
                }
                _this._addStickyColumnStyles(rows, rowDef);
            });
            // Update the sticky styles for each footer row depending on the def's sticky state
            footerRows.forEach(function (footerRow, i) {
                _this._addStickyColumnStyles([footerRow], _this._footerRowDefs[i]);
            });
            // Reset the dirty state of the sticky input change since it has been used.
            Array.from(this._columnDefsByName.values()).forEach(function (def) { return def.resetStickyChanged(); });
        };
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         */
        CdkTable.prototype._getAllRenderRows = function () {
            var renderRows = [];
            // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.
            var prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map();
            // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
            for (var i = 0; i < this._data.length; i++) {
                var data = this._data[i];
                var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
                if (!this._cachedRenderRowsMap.has(data)) {
                    this._cachedRenderRowsMap.set(data, new WeakMap());
                }
                for (var j = 0; j < renderRowsForData.length; j++) {
                    var renderRow = renderRowsForData[j];
                    var cache = this._cachedRenderRowsMap.get(renderRow.data);
                    if (cache.has(renderRow.rowDef)) {
                        cache.get(renderRow.rowDef).push(renderRow);
                    }
                    else {
                        cache.set(renderRow.rowDef, [renderRow]);
                    }
                    renderRows.push(renderRow);
                }
            }
            return renderRows;
        };
        /**
         * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
         * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
         * `(T, CdkRowDef)` pair.
         */
        CdkTable.prototype._getRenderRowsForData = function (data, dataIndex, cache) {
            var rowDefs = this._getRowDefs(data, dataIndex);
            return rowDefs.map(function (rowDef) {
                var cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
                if (cachedRenderRows.length) {
                    var dataRow = cachedRenderRows.shift();
                    dataRow.dataIndex = dataIndex;
                    return dataRow;
                }
                else {
                    return { data: data, rowDef: rowDef, dataIndex: dataIndex };
                }
            });
        };
        /** Update the map containing the content's column definitions. */
        CdkTable.prototype._cacheColumnDefs = function () {
            var _this = this;
            this._columnDefsByName.clear();
            var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(function (columnDef) {
                if (_this._columnDefsByName.has(columnDef.name)) {
                    throw getTableDuplicateColumnNameError(columnDef.name);
                }
                _this._columnDefsByName.set(columnDef.name, columnDef);
            });
        };
        /** Update the list of all available row definitions that can be used. */
        CdkTable.prototype._cacheRowDefs = function () {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
            // After all row definitions are determined, find the row definition to be considered default.
            var defaultRowDefs = this._rowDefs.filter(function (def) { return !def.when; });
            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
                throw getTableMultipleDefaultRowDefsError();
            }
            this._defaultRowDef = defaultRowDefs[0];
        };
        /**
         * Check if the header, data, or footer rows have changed what columns they want to display or
         * whether the sticky states have changed for the header or footer. If there is a diff, then
         * re-render that section.
         */
        CdkTable.prototype._renderUpdatedColumns = function () {
            var columnsDiffReducer = function (acc, def) { return acc || !!def.getColumnsDiff(); };
            // Force re-render data rows if the list of column definitions have changed.
            if (this._rowDefs.reduce(columnsDiffReducer, false)) {
                this._forceRenderDataRows();
            }
            // Force re-render header/footer rows if the list of column definitions have changed..
            if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
                this._forceRenderHeaderRows();
            }
            if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
                this._forceRenderFooterRows();
            }
        };
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the row outlet. Otherwise start listening for new data.
         */
        CdkTable.prototype._switchDataSource = function (dataSource) {
            this._data = [];
            if (collections.isDataSource(this.dataSource)) {
                this.dataSource.disconnect(this);
            }
            // Stop listening for data from the previous data source.
            if (this._renderChangeSubscription) {
                this._renderChangeSubscription.unsubscribe();
                this._renderChangeSubscription = null;
            }
            if (!dataSource) {
                if (this._dataDiffer) {
                    this._dataDiffer.diff([]);
                }
                this._rowOutlet.viewContainer.clear();
            }
            this._dataSource = dataSource;
        };
        /** Set up a subscription for the data provided by the data source. */
        CdkTable.prototype._observeRenderChanges = function () {
            var _this = this;
            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
                return;
            }
            var dataStream;
            if (collections.isDataSource(this.dataSource)) {
                dataStream = this.dataSource.connect(this);
            }
            else if (rxjs.isObservable(this.dataSource)) {
                dataStream = this.dataSource;
            }
            else if (Array.isArray(this.dataSource)) {
                dataStream = rxjs.of(this.dataSource);
            }
            if (dataStream === undefined) {
                throw getTableUnknownDataSourceError();
            }
            this._renderChangeSubscription = dataStream.pipe(operators.takeUntil(this._onDestroy)).subscribe(function (data) {
                _this._data = data || [];
                _this.renderRows();
            });
        };
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         */
        CdkTable.prototype._forceRenderHeaderRows = function () {
            var _this = this;
            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
                this._headerRowOutlet.viewContainer.clear();
            }
            this._headerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._headerRowOutlet, def, i); });
            this.updateStickyHeaderRowStyles();
            this.updateStickyColumnStyles();
        };
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         */
        CdkTable.prototype._forceRenderFooterRows = function () {
            var _this = this;
            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
                this._footerRowOutlet.viewContainer.clear();
            }
            this._footerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._footerRowOutlet, def, i); });
            this.updateStickyFooterRowStyles();
            this.updateStickyColumnStyles();
        };
        /** Adds the sticky column styles for the rows according to the columns' stick states. */
        CdkTable.prototype._addStickyColumnStyles = function (rows, rowDef) {
            var _this = this;
            var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
                var columnDef = _this._columnDefsByName.get(columnName);
                if (!columnDef) {
                    throw getTableUnknownColumnError(columnName);
                }
                return columnDef;
            });
            var stickyStartStates = columnDefs.map(function (columnDef) { return columnDef.sticky; });
            var stickyEndStates = columnDefs.map(function (columnDef) { return columnDef.stickyEnd; });
            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        };
        /** Gets the list of rows that have been rendered in the row outlet. */
        CdkTable.prototype._getRenderedRows = function (rowOutlet) {
            var renderedRows = [];
            for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
                var viewRef = rowOutlet.viewContainer.get(i);
                renderedRows.push(viewRef.rootNodes[0]);
            }
            return renderedRows;
        };
        /**
         * Get the matching row definitions that should be used for this row data. If there is only
         * one row definition, it is returned. Otherwise, find the row definitions that has a when
         * predicate that returns true with the data. If none return true, return the default row
         * definition.
         */
        CdkTable.prototype._getRowDefs = function (data, dataIndex) {
            if (this._rowDefs.length == 1) {
                return [this._rowDefs[0]];
            }
            var rowDefs = [];
            if (this.multiTemplateDataRows) {
                rowDefs = this._rowDefs.filter(function (def) { return !def.when || def.when(dataIndex, data); });
            }
            else {
                var rowDef = this._rowDefs.find(function (def) { return def.when && def.when(dataIndex, data); }) || this._defaultRowDef;
                if (rowDef) {
                    rowDefs.push(rowDef);
                }
            }
            if (!rowDefs.length) {
                throw getTableMissingMatchingRowDefError(data);
            }
            return rowDefs;
        };
        /**
         * Create the embedded view for the data row template and place it in the correct index location
         * within the data row view container.
         */
        CdkTable.prototype._insertRow = function (renderRow, renderIndex) {
            var rowDef = renderRow.rowDef;
            var context = { $implicit: renderRow.data };
            this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
        };
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         */
        CdkTable.prototype._renderRow = function (outlet, rowDef, index, context) {
            var e_1, _a;
            if (context === void 0) { context = {}; }
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
            try {
                for (var _b = __values(this._getCellTemplates(rowDef)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var cellTemplate = _c.value;
                    if (CdkCellOutlet.mostRecentCellOutlet) {
                        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         */
        CdkTable.prototype._updateRowIndexContext = function () {
            var viewContainer = this._rowOutlet.viewContainer;
            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                var viewRef = viewContainer.get(renderIndex);
                var context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;
                if (this.multiTemplateDataRows) {
                    context.dataIndex = this._renderRows[renderIndex].dataIndex;
                    context.renderIndex = renderIndex;
                }
                else {
                    context.index = this._renderRows[renderIndex].dataIndex;
                }
            }
        };
        /** Gets the column definitions for the provided row def. */
        CdkTable.prototype._getCellTemplates = function (rowDef) {
            var _this = this;
            if (!rowDef || !rowDef.columns) {
                return [];
            }
            return Array.from(rowDef.columns, function (columnId) {
                var column = _this._columnDefsByName.get(columnId);
                if (!column) {
                    throw getTableUnknownColumnError(columnId);
                }
                return rowDef.extractCellTemplate(column);
            });
        };
        /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
        CdkTable.prototype._applyNativeTableSections = function () {
            var e_2, _a;
            var documentFragment = this._document.createDocumentFragment();
            var sections = [
                { tag: 'thead', outlet: this._headerRowOutlet },
                { tag: 'tbody', outlet: this._rowOutlet },
                { tag: 'tfoot', outlet: this._footerRowOutlet },
            ];
            try {
                for (var sections_1 = __values(sections), sections_1_1 = sections_1.next(); !sections_1_1.done; sections_1_1 = sections_1.next()) {
                    var section = sections_1_1.value;
                    var element = this._document.createElement(section.tag);
                    element.setAttribute('role', 'rowgroup');
                    element.appendChild(section.outlet.elementRef.nativeElement);
                    documentFragment.appendChild(element);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (sections_1_1 && !sections_1_1.done && (_a = sections_1.return)) _a.call(sections_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Use a DocumentFragment so we don't hit the DOM on each iteration.
            this._elementRef.nativeElement.appendChild(documentFragment);
        };
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         */
        CdkTable.prototype._forceRenderDataRows = function () {
            this._dataDiffer.diff([]);
            this._rowOutlet.viewContainer.clear();
            this.renderRows();
            this.updateStickyColumnStyles();
        };
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         */
        CdkTable.prototype._checkStickyStates = function () {
            var stickyCheckReducer = function (acc, d) {
                return acc || d.hasStickyChanged();
            };
            // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.
            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyHeaderRowStyles();
            }
            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyFooterRowStyles();
            }
            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
                this.updateStickyColumnStyles();
            }
        };
        /**
         * Creates the sticky styler that will be used for sticky rows and columns. Listens
         * for directionality changes and provides the latest direction to the styler. Re-applies column
         * stickiness when directionality changes.
         */
        CdkTable.prototype._setupStickyStyler = function () {
            var _this = this;
            var direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
            (this._dir ? this._dir.change : rxjs.of())
                .pipe(operators.takeUntil(this._onDestroy))
                .subscribe(function (value) {
                _this._stickyStyler.direction = value;
                _this.updateStickyColumnStyles();
            });
        };
        /** Filters definitions that belong to this table from a QueryList. */
        CdkTable.prototype._getOwnDefs = function (items) {
            var _this = this;
            return items.filter(function (item) { return !item._table || item._table === _this; });
        };
        CdkTable.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-table, table[cdk-table]',
                        exportAs: 'cdkTable',
                        template: CDK_TABLE_TEMPLATE,
                        host: {
                            'class': 'cdk-table',
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                        // The view for `MatTable` consists entirely of templates declared in other views. As they are
                        // declared elsewhere, they are checked when their declaration points are checked.
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default,
                        providers: [{ provide: CDK_TABLE, useExisting: CdkTable }]
                    }] }
        ];
        /** @nocollapse */
        CdkTable.ctorParameters = function () { return [
            { type: core.IterableDiffers },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: String, decorators: [{ type: core.Attribute, args: ['role',] }] },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: platform.Platform }
        ]; };
        CdkTable.propDecorators = {
            trackBy: [{ type: core.Input }],
            dataSource: [{ type: core.Input }],
            multiTemplateDataRows: [{ type: core.Input }],
            _rowOutlet: [{ type: core.ViewChild, args: [DataRowOutlet, { static: true },] }],
            _headerRowOutlet: [{ type: core.ViewChild, args: [HeaderRowOutlet, { static: true },] }],
            _footerRowOutlet: [{ type: core.ViewChild, args: [FooterRowOutlet, { static: true },] }],
            _contentColumnDefs: [{ type: core.ContentChildren, args: [CdkColumnDef, { descendants: true },] }],
            _contentRowDefs: [{ type: core.ContentChildren, args: [CdkRowDef, { descendants: true },] }],
            _contentHeaderRowDefs: [{ type: core.ContentChildren, args: [CdkHeaderRowDef, {
                            descendants: true
                        },] }],
            _contentFooterRowDefs: [{ type: core.ContentChildren, args: [CdkFooterRowDef, {
                            descendants: true
                        },] }]
        };
        return CdkTable;
    }());
    /** Utility function that gets a merged list of the entries in an array and values of a Set. */
    function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     */
    var CdkTextColumn = /** @class */ (function () {
        function CdkTextColumn(_table, _options) {
            this._table = _table;
            this._options = _options;
            /** Alignment of the cell values. */
            this.justify = 'start';
            this._options = _options || {};
        }
        Object.defineProperty(CdkTextColumn.prototype, "name", {
            /** Column name that should be used to reference this column. */
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
                // With Ivy, inputs can be initialized before static query results are
                // available. In that case, we defer the synchronization until "ngOnInit" fires.
                this._syncColumnDefName();
            },
            enumerable: true,
            configurable: true
        });
        CdkTextColumn.prototype.ngOnInit = function () {
            this._syncColumnDefName();
            if (this.headerText === undefined) {
                this.headerText = this._createDefaultHeaderText();
            }
            if (!this.dataAccessor) {
                this.dataAccessor =
                    this._options.defaultDataAccessor || (function (data, name) { return data[name]; });
            }
            if (this._table) {
                // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
                // since the columnDef will not pick up its content by the time the table finishes checking
                // its content and initializing the rows.
                this.columnDef.cell = this.cell;
                this.columnDef.headerCell = this.headerCell;
                this._table.addColumnDef(this.columnDef);
            }
            else {
                throw getTableTextColumnMissingParentTableError();
            }
        };
        CdkTextColumn.prototype.ngOnDestroy = function () {
            if (this._table) {
                this._table.removeColumnDef(this.columnDef);
            }
        };
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         */
        CdkTextColumn.prototype._createDefaultHeaderText = function () {
            var name = this.name;
            if (core.isDevMode() && !name) {
                throw getTableTextColumnMissingNameError();
            }
            if (this._options && this._options.defaultHeaderTextTransform) {
                return this._options.defaultHeaderTextTransform(name);
            }
            return name[0].toUpperCase() + name.slice(1);
        };
        /** Synchronizes the column definition name with the text column name. */
        CdkTextColumn.prototype._syncColumnDefName = function () {
            if (this.columnDef) {
                this.columnDef.name = this.name;
            }
        };
        CdkTextColumn.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-text-column',
                        template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
                        encapsulation: core.ViewEncapsulation.None,
                        // Change detection is intentionally not set to OnPush. This component's template will be provided
                        // to the table to be inserted into its view. This is problematic when change detection runs since
                        // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                        // mean's the template in the table's view will not have the updated value (and in fact will cause
                        // an ExpressionChangedAfterItHasBeenCheckedError).
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default
                    }] }
        ];
        /** @nocollapse */
        CdkTextColumn.ctorParameters = function () { return [
            { type: CdkTable, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [TEXT_COLUMN_OPTIONS,] }] }
        ]; };
        CdkTextColumn.propDecorators = {
            name: [{ type: core.Input }],
            headerText: [{ type: core.Input }],
            dataAccessor: [{ type: core.Input }],
            justify: [{ type: core.Input }],
            columnDef: [{ type: core.ViewChild, args: [CdkColumnDef, { static: true },] }],
            cell: [{ type: core.ViewChild, args: [CdkCellDef, { static: true },] }],
            headerCell: [{ type: core.ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
        };
        return CdkTextColumn;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [
        CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn,
    ];
    var CdkTableModule = /** @class */ (function () {
        function CdkTableModule() {
        }
        CdkTableModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: EXPORTED_DECLARATIONS,
                        declarations: EXPORTED_DECLARATIONS
                    },] }
        ];
        return CdkTableModule;
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

    Object.defineProperty(exports, 'DataSource', {
        enumerable: true,
        get: function () {
            return collections.DataSource;
        }
    });
    exports.BaseCdkCell = BaseCdkCell;
    exports.BaseRowDef = BaseRowDef;
    exports.CDK_ROW_TEMPLATE = CDK_ROW_TEMPLATE;
    exports.CDK_TABLE = CDK_TABLE;
    exports.CDK_TABLE_TEMPLATE = CDK_TABLE_TEMPLATE;
    exports.CdkCell = CdkCell;
    exports.CdkCellDef = CdkCellDef;
    exports.CdkCellOutlet = CdkCellOutlet;
    exports.CdkColumnDef = CdkColumnDef;
    exports.CdkFooterCell = CdkFooterCell;
    exports.CdkFooterCellDef = CdkFooterCellDef;
    exports.CdkFooterRow = CdkFooterRow;
    exports.CdkFooterRowDef = CdkFooterRowDef;
    exports.CdkHeaderCell = CdkHeaderCell;
    exports.CdkHeaderCellDef = CdkHeaderCellDef;
    exports.CdkHeaderRow = CdkHeaderRow;
    exports.CdkHeaderRowDef = CdkHeaderRowDef;
    exports.CdkRow = CdkRow;
    exports.CdkRowDef = CdkRowDef;
    exports.CdkTable = CdkTable;
    exports.CdkTableModule = CdkTableModule;
    exports.CdkTextColumn = CdkTextColumn;
    exports.DataRowOutlet = DataRowOutlet;
    exports.FooterRowOutlet = FooterRowOutlet;
    exports.HeaderRowOutlet = HeaderRowOutlet;
    exports.STICKY_DIRECTIONS = STICKY_DIRECTIONS;
    exports.StickyStyler = StickyStyler;
    exports.TEXT_COLUMN_OPTIONS = TEXT_COLUMN_OPTIONS;
    exports.mixinHasStickyInput = mixinHasStickyInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-table.umd.js.map
