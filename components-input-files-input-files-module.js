(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-files-input-files-module"],{

/***/ "./src/modules/components/abstract/control.ts":
/*!****************************************************!*\
  !*** ./src/modules/components/abstract/control.ts ***!
  \****************************************************/
/*! exports provided: AbstractExampleTuiControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiControl", function() { return AbstractExampleTuiControl; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./src/modules/components/abstract/interactive.ts");


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__["AbstractExampleTuiInteractive"] {
    constructor() {
        super(...arguments);
        this.sizeVariants = [`s`, `m`, `l`];
        this.hintContentVariants = [`Some content`];
        this.hintDirectionVariants = [
            `left`,
            `right`,
            `bottom-left`,
            `bottom-right`,
            `bottom-middle`,
            `top-left`,
            `top-right`,
            `top-middle`,
        ];
        this.hintModeVariants = [`error`, `onDark`];
        this.typeVariants = [
            `text`,
            `email`,
            `password`,
            `tel`,
            `url`,
        ];
        this.maxLengthVariants = [10];
        this.autocompleteVariants = [
            ``,
            `off`,
            `cc-name`,
            `cc-number`,
            `cc-exp-month`,
            `cc-exp-year`,
            `cc-type`,
            `given-name`,
            `additional-name`,
            `family-name`,
            `username`,
            `email`,
            `street-address`,
            `postal-code`,
            `country-name`,
        ];
        this.inputModeVariants = [`text`, `numeric`];
        this.customContentVariants = [
            CUSTOM_SVG_NAME,
            `tuiIconSearchLarge`,
            `tuiIconCalendarLarge`,
            `tuiIconVisaMono`,
            `tuiIconMastercardMono`,
        ];
        this.customContentSelected = null;
        this.inputMode = this.inputModeVariants[0];
        this.autocomplete = ``;
        this.maxLength = null;
        this.type = this.typeVariants[0];
        this.cleaner = false;
        this.pseudoInvalid = null;
        this.success = false;
        this.readOnly = false;
        this.labelOutside = false;
        this.size = this.sizeVariants[2];
        this.exampleText = ``;
        this.maxHeight = null;
        this.hintContent = null;
        this.hintDirection = this.hintDirectionVariants[2];
        this.hintMode = null;
        this.dropdownAlignVariants = [`left`, `right`];
        this.dropdownAlign = this.dropdownAlignVariants[0];
        this.dropdownLimitWidthVariants = [`fixed`, `min`];
        this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
        this.dropdownDirectionVariants = [
            `top`,
            `bottom`,
        ];
        this.dropdownDirection = null;
        this.dropdownSided = false;
        this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MIN_HEIGHT"];
        this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MAX_HEIGHT"];
    }
    get customContent() {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
}


/***/ }),

/***/ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts ***!
  \********************************************************************************************/
/*! exports provided: ABSTRACT_PROPS_ACCESSOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABSTRACT_PROPS_ACCESSOR", function() { return ABSTRACT_PROPS_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Component extends AbstractExample class`);


/***/ }),

/***/ "./src/modules/components/abstract/interactive.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/abstract/interactive.ts ***!
  \********************************************************/
/*! exports provided: AbstractExampleTuiInteractive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiInteractive", function() { return AbstractExampleTuiInteractive; });
class AbstractExampleTuiInteractive {
    constructor() {
        this.pseudoVariants = [false, true];
        this.focusable = true;
        this.pseudoFocused = null;
        this.pseudoHovered = null;
        this.pseudoPressed = null;
    }
}


/***/ }),

/***/ "./src/modules/components/input-files/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-files/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputFilesExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFilesExample1", function() { return TuiInputFilesExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-files/input-files.component */ "../kit/components/input-files/input-files.component.ts");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");











function TuiInputFilesExample1_tui_input_files_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-files", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reject", function TuiInputFilesExample1_tui_input_files_0_Template_tui_input_files_reject_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onReject($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control);
} }
function TuiInputFilesExample1_tui_file_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample1_tui_file_2_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r5);
} }
function TuiInputFilesExample1_tui_file_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample1_tui_file_4_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clearRejected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r8);
} }
class TuiInputFilesExample1 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.rejectedFiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    onReject(file) {
        this.rejectedFiles$.next(file);
    }
    removeFile() {
        this.control.setValue(null);
    }
    clearRejected() {
        this.rejectedFiles$.next(null);
    }
}
TuiInputFilesExample1.ɵfac = function TuiInputFilesExample1_Factory(t) { return new (t || TuiInputFilesExample1)(); };
TuiInputFilesExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFilesExample1, selectors: [["tui-input-files-example-1"]], decls: 6, vars: 7, consts: [["accept", "image/*", 3, "formControl", "reject", 4, "ngIf"], [1, "tui-space_top-1"], [3, "file", "removed", 4, "ngIf"], ["state", "error", 3, "file", "removed", 4, "ngIf"], ["accept", "image/*", 3, "formControl", "reject"], [3, "file", "removed"], ["state", "error", 3, "file", "removed"]], template: function TuiInputFilesExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiInputFilesExample1_tui_input_files_0_Template, 1, 1, "tui-input-files", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-files", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputFilesExample1_tui_file_2_Template, 1, 1, "tui-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputFilesExample1_tui_file_4_Template, 1, 1, "tui-file", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.control.valueChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.rejectedFiles$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_6__["TuiFilesComponent"], _kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputFilesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_8__["TuiFileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFilesExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-files-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/examples/2/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-files/examples/2/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputFilesExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFilesExample2", function() { return TuiInputFilesExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-files/input-files.component */ "../kit/components/input-files/input-files.component.ts");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");










function TuiInputFilesExample2_tui_file_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample2_tui_file_2_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const file_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeFile(file_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r2);
} }
function TuiInputFilesExample2_tui_file_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample2_tui_file_4_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const file_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clearRejected(file_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r5);
} }
class TuiInputFilesExample2 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.rejectedFiles = [];
    }
    onReject(files) {
        this.rejectedFiles = [...this.rejectedFiles, ...files];
    }
    removeFile({ name }) {
        this.control.setValue(this.control.value.filter((current) => current.name !== name));
    }
    clearRejected({ name }) {
        this.rejectedFiles = this.rejectedFiles.filter(rejected => rejected.name !== name);
    }
}
TuiInputFilesExample2.ɵfac = function TuiInputFilesExample2_Factory(t) { return new (t || TuiInputFilesExample2)(); };
TuiInputFilesExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFilesExample2, selectors: [["tui-input-files-example-2"]], decls: 5, vars: 6, consts: [["accept", "image/*", 3, "multiple", "formControl", "reject"], [1, "tui-space_top-1"], [3, "file", "removed", 4, "ngFor", "ngForOf"], ["state", "error", 3, "file", "removed", 4, "ngFor", "ngForOf"], [3, "file", "removed"], ["state", "error", 3, "file", "removed"]], template: function TuiInputFilesExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-files", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reject", function TuiInputFilesExample2_Template_tui_input_files_reject_0_listener($event) { return ctx.onReject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-files", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputFilesExample2_tui_file_2_Template, 1, 1, "tui-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputFilesExample2_tui_file_4_Template, 1, 1, "tui-file", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.control.valueChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rejectedFiles);
    } }, directives: [_kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputFilesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_5__["TuiFilesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_7__["TuiFileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFilesExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-files-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/examples/3/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-files/examples/3/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputFilesExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFilesExample3", function() { return TuiInputFilesExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");












function TuiInputFilesExample3_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 7);
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r8);
} }
function TuiInputFilesExample3_tui_file_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 8);
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r9);
} }
function TuiInputFilesExample3_tui_file_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample3_tui_file_3_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeLoading(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", ctx_r2.loadingFile);
} }
function TuiInputFilesExample3_tui_file_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", ctx_r3.fileWithLink);
} }
function TuiInputFilesExample3_tui_file_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputFilesExample3_tui_file_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const file_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.restore(file_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Restore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r12);
} }
function TuiInputFilesExample3_tui_file_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TuiInputFilesExample3_tui_file_12_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const file_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.remove(file_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r15)("leftContent", _r6);
} }
function TuiInputFilesExample3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 13);
} }
class TuiInputFilesExample3 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.files = [
            {
                name: `Loaded.txt`,
            },
            {
                name: `A file with a very very long title to check that it can be cut correctly.txt`,
            },
        ];
        this.loadingFile = {
            name: `Loading file.txt`,
        };
        this.rejectedFiles = [
            {
                name: `File with an error.txt`,
                content: `Something went wrong this time`,
            },
        ];
        this.fileWithLink = {
            name: `with link.txt`,
            src: `https://tools.ietf.org/html/rfc675`,
        };
        this.removedFiles = [this.loadingFile];
        this.restoredFiles = [];
    }
    removeLoading() {
        this.loadingFile = null;
    }
    restore(file) {
        if (!file) {
            return;
        }
        this.restoredFiles = [...this.restoredFiles, file];
        this.removedFiles = this.removedFiles.filter(removed => file.name !== (removed === null || removed === void 0 ? void 0 : removed.name));
    }
    remove(file) {
        this.removedFiles = [...this.removedFiles, file];
        this.restoredFiles = this.restoredFiles.filter(restored => file.name !== (restored === null || restored === void 0 ? void 0 : restored.name));
    }
}
TuiInputFilesExample3.ɵfac = function TuiInputFilesExample3_Factory(t) { return new (t || TuiInputFilesExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_CYPRESS"])); };
TuiInputFilesExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFilesExample3, selectors: [["tui-input-files-example-3"]], decls: 15, vars: 5, consts: [["state", "normal", 3, "file", 4, "ngFor", "ngForOf"], ["state", "error", 3, "file", 4, "ngFor", "ngForOf"], ["state", "loading", 3, "file", "removed", 4, "ngIf"], ["state", "normal", 3, "file", 4, "tuiItem"], ["state", "deleted", "size", "l", 3, "file", 4, "ngFor", "ngForOf"], ["state", "normal", "size", "l", 3, "file", "leftContent", "removed", 4, "ngFor", "ngForOf"], ["icon", ""], ["state", "normal", 3, "file"], ["state", "error", 3, "file"], ["state", "loading", 3, "file", "removed"], ["state", "deleted", "size", "l", 3, "file"], ["tuiLink", "", 3, "click"], ["state", "normal", "size", "l", 3, "file", "leftContent", "removed"], ["src", "tuiIconFileLarge"]], template: function TuiInputFilesExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputFilesExample3_tui_file_1_Template, 1, 1, "tui-file", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputFilesExample3_tui_file_2_Template, 1, 1, "tui-file", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputFilesExample3_tui_file_3_Template, 1, 1, "tui-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "With link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiInputFilesExample3_tui_file_7_Template, 1, 1, "tui-file", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "With deleted state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiInputFilesExample3_tui_file_11_Template, 3, 1, "tui-file", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiInputFilesExample3_tui_file_12_Template, 1, 2, "tui-file", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TuiInputFilesExample3_ng_template_13_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rejectedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingFile && !ctx.isCypress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.removedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.restoredFiles);
    } }, directives: [_kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_5__["TuiFilesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__["TuiItemDirective"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_8__["TuiFileComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__["TuiLinkComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__["TuiSvgComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFilesExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-files-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/examples/4/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-files/examples/4/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputFilesExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFilesExample4", function() { return TuiInputFilesExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");









function TuiInputFilesExample4_ng_container_1_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 3);
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r2);
} }
function TuiInputFilesExample4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputFilesExample4_ng_container_1_tui_file_1_Template, 1, 1, "tui-file", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TuiInputFilesExample4_ng_container_2_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 5);
} if (rf & 2) {
    const file_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r5);
} }
function TuiInputFilesExample4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputFilesExample4_ng_container_2_tui_file_1_Template, 1, 1, "tui-file", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TuiInputFilesExample4 {
    constructor() {
        this.height = 3;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.files = [
            {
                name: `Loaded.txt`,
            },
            {
                name: `one_more_file.txt`,
            },
            {
                name: `one_more_file.txt`,
            },
            {
                name: `one_more_file.txt`,
            },
            {
                name: `one_more_file.txt`,
            },
            {
                name: `one_more_file.txt`,
            },
            {
                name: `last_file.txt`,
            },
        ];
        this.rejectedFiles = [
            {
                name: `File with an error.txt`,
            },
        ];
    }
}
TuiInputFilesExample4.ɵfac = function TuiInputFilesExample4_Factory(t) { return new (t || TuiInputFilesExample4)(); };
TuiInputFilesExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFilesExample4, selectors: [["tui-input-files-example-4"]], decls: 3, vars: 3, consts: [[3, "max"], [4, "ngFor", "ngForOf"], ["state", "normal", 3, "file", 4, "tuiItem"], ["state", "normal", 3, "file"], ["state", "error", 3, "file", 4, "tuiItem"], ["state", "error", 3, "file"]], template: function TuiInputFilesExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-files", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputFilesExample4_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputFilesExample4_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rejectedFiles);
    } }, directives: [_kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_4__["TuiFilesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_6__["TuiItemDirective"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_7__["TuiFileComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFilesExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-files-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/examples/5/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-files/examples/5/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputFilesExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFilesExample5", function() { return TuiInputFilesExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");








function TuiInputFilesExample5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 3);
} }
class TuiInputFilesExample5 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.file = {
            name: `custom.txt`,
        };
    }
}
TuiInputFilesExample5.ɵfac = function TuiInputFilesExample5_Factory(t) { return new (t || TuiInputFilesExample5)(); };
TuiInputFilesExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFilesExample5, selectors: [["tui-input-files-example-5"]], decls: 6, vars: 2, consts: [[3, "file", "leftContent"], [1, "tui-text_body-s-2"], ["content", ""], ["src", "tuiIconTimeLarge"]], template: function TuiInputFilesExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-file", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "file is on checking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputFilesExample5_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", ctx.file)("leftContent", _r0);
    } }, directives: [_kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_4__["TuiFilesComponent"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_5__["TuiFileComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__["TuiSvgComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  color: var(--tui-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlcy9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZXMvZXhhbXBsZXMvNS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZXMvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGNvbG9yOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcbn1cbiIsIi5jb250ZW50IHtcbiAgY29sb3I6IHZhcigtLXR1aS1zZWNvbmRhcnkpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFilesExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-files-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/input-files.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-files/input-files.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiInputFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputFilesComponent", function() { return ExampleTuiInputFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-files/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-files/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-files/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-files/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input-files/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/input-files/input-files.component */ "../kit/components/input-files/input-files.component.ts");
/* harmony import */ var _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/files/files.component */ "../kit/components/files/files.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../kit/components/files/file/file.component */ "../kit/components/files/file/file.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8579732062296250669$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__1 = goog.getMsg("An input for upload one or several files. It uses native input file abilities.");
    I18N_0 = MSG_EXTERNAL_8579732062296250669$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2365312831690318321$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__3 = goog.getMsg("Basic single");
    I18N_2 = MSG_EXTERNAL_2365312831690318321$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟21b9e693105e70e875f4027941d66fc7373e5e6f␟2365312831690318321:Basic single`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2052254700267022778$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__6 = goog.getMsg("multiple");
    I18N_5 = MSG_EXTERNAL_2052254700267022778$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟a47f0c6491869fa5eac7f981a8d11633190e851e␟2052254700267022778:multiple`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2741034837339672700$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__9 = goog.getMsg("Standalone files");
    I18N_8 = MSG_EXTERNAL_2741034837339672700$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟ea30a2733abb457ee8364e4e3c4814e3def1aa15␟2741034837339672700:Standalone files`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4530975242591241405$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__12 = goog.getMsg("With button");
    I18N_11 = MSG_EXTERNAL_4530975242591241405$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟7802ae78818c3f2978ca66de1ad0bbe52505004f␟4530975242591241405:With button`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7398919974746085920$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__15 = goog.getMsg("Custom content");
    I18N_14 = MSG_EXTERNAL_7398919974746085920$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟099e0facbaa0fd2a2d26ab71ef2ada157a398cf8␟7398919974746085920:Custom content`;
}
const _c16 = ["heading", I18N_14];
function ExampleTuiInputFilesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-input-files-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-input-files-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-input-files-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-input-files-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-input-files-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const file_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.removeFile(file_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r20)("size", ctx_r21.size)("showSize", ctx_r21.showSize);
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template, 1, 3, "tui-file", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.control.valueChanges));
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-file", 30);
} if (rf & 2) {
    const file_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r27)("size", ctx_r28.size)("showSize", ctx_r28.showSize);
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_tui_file_1_Template, 1, 3, "tui-file", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_Template, 2, 0, "ng-container", 28);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.control.value);
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-file", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template_tui_file_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const file_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.removeRejected(file_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r30)("size", ctx_r31.size)("showSize", ctx_r31.showSize);
} }
function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template, 1, 3, "tui-file", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___18 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_17 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_127963594360329727$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___20 = goog.getMsg(" Allowed formats (for native attribute {$startTagCode}accept{$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_19 = MSG_EXTERNAL_127963594360329727$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:accept${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5985585011983944521$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___22 = goog.getMsg(" Label text ");
    I18N_21 = MSG_EXTERNAL_5985585011983944521$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3977709208772062372$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___24 = goog.getMsg(" Link text ");
    I18N_23 = MSG_EXTERNAL_3977709208772062372$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3924563314608826807$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___26 = goog.getMsg(" Max file size in bytes (30 MB by default \u2014 30 * 1000 * 1000) ");
    I18N_25 = MSG_EXTERNAL_3924563314608826807$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8625084047952787649$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___28 = goog.getMsg(" Allows to upload several files ");
    I18N_27 = MSG_EXTERNAL_8625084047952787649$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4840980441808546217$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___30 = goog.getMsg(" Emits file that was rejected. ");
    I18N_29 = MSG_EXTERNAL_4840980441808546217$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟76c4cf0a46be41a48eee3c30e13b463d63ae5a1d␟4840980441808546217: Emits file that was rejected. `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_414489167527586218$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___32 = goog.getMsg(" File ");
    I18N_31 = MSG_EXTERNAL_414489167527586218$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟5767e8c57ff270fa0ffa0fd4454e60b9ccd004bc␟414489167527586218: File `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5449162325769068309$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___34 = goog.getMsg(" State of the file ");
    I18N_33 = MSG_EXTERNAL_5449162325769068309$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟1b17f43bcc6f4e13dd2881b4034a923787ab238d␟5449162325769068309: State of the file `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2011612506485911109$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___36 = goog.getMsg(" Show file size ");
    I18N_35 = MSG_EXTERNAL_2011612506485911109$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1178400793347014785$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___38 = goog.getMsg(" Component size ");
    I18N_37 = MSG_EXTERNAL_1178400793347014785$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___38;
}
else {
    I18N_37 = $localize `:␟52b1e7046e2e0240fcb7b8feef3432c93451000c␟1178400793347014785: Component size `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_37);
} }
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8330152764576404723$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___40 = goog.getMsg(" Emits file on click on close button. When subscribed to, close button appears. ");
    I18N_39 = MSG_EXTERNAL_8330152764576404723$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___40;
}
else {
    I18N_39 = $localize `:␟9f4a11af0f1b581ab49906c0ae7b2875b464493d␟8330152764576404723: Emits file on click on close button. When subscribed to, close button appears. `;
}
function ExampleTuiInputFilesComponent_ng_template_2_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_39);
} }
function ExampleTuiInputFilesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-files", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reject", function ExampleTuiInputFilesComponent_ng_template_2_Template_tui_input_files_reject_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.updateRejected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-files", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputFilesComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputFilesComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.accept = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputFilesComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputFilesComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputFilesComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.maxFileSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiInputFilesComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.multipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiInputFilesComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-documentation", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiInputFilesComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiInputFilesComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExampleTuiInputFilesComponent_ng_template_2_ng_template_18_Template, 1, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.showSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExampleTuiInputFilesComponent_ng_template_2_ng_template_19_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExampleTuiInputFilesComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.control)("accept", ctx_r1.accept)("link", ctx_r1.link)("label", ctx_r1.label)("maxFileSize", ctx_r1.maxFileSize)("multiple", ctx_r1.multiple)("focusable", ctx_r1.focusable)("pseudoFocused", ctx_r1.pseudoFocused)("pseudoHovered", ctx_r1.pseudoHovered)("pseudoPressed", ctx_r1.pseudoPressed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.multiple)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rejectedFiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.acceptVariants)("documentationPropertyValue", ctx_r1.accept);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxFileSizeVariants)("documentationPropertyValue", ctx_r1.maxFileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3726838635698526556$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__42 = goog.getMsg(" Import {$startTagCode}TuiInputFileModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_41 = MSG_EXTERNAL_3726838635698526556$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__42;
}
else {
    I18N_41 = $localize `:␟d41a7e4dc2844fe570cedb26ed5254a96dac3351␟3726838635698526556: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputFileModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_43;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__44 = goog.getMsg("Add to the template:");
    I18N_43 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__44;
}
else {
    I18N_43 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputFilesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputFilesComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.html")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.less")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.link = `Choose a file`;
        this.label = `or drop\u00A0it\u00A0here`;
        this.multiple = true;
        this.showSize = true;
        this.accept = ``;
        this.acceptVariants = [`image/*`, `application/pdf`, `image/*,application/pdf`];
        this.maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
        this.rejectedFiles = [];
        this.maxFileSize = this.maxFileSizeVariants[2];
    }
    removeFile(file) {
        this.control.setValue(this.control.value.filter((current) => current.name !== file.name));
    }
    removeRejected(file) {
        this.rejectedFiles = this.rejectedFiles.filter(rejectedFile => rejectedFile.name !== file.name);
    }
    updateRejected(file) {
        this.rejectedFiles = [
            ...this.rejectedFiles,
            ...(Array.isArray(file) ? file : [file]),
        ];
    }
    multipleChange(multiple) {
        this.rejectedFiles = [];
        this.control.setValue(null);
        this.multiple = multiple;
    }
}
ExampleTuiInputFilesComponent.ɵfac = function ExampleTuiInputFilesComponent_Factory(t) { return ɵExampleTuiInputFilesComponent_BaseFactory(t || ExampleTuiInputFilesComponent); };
ExampleTuiInputFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputFilesComponent, selectors: [["example-tui-input-files"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputFilesComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputFiles", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "single", 3, "content", 6, "heading"], ["id", "multiple", 3, "content", 6, "heading"], ["id", "standalone-files", 3, "content", 6, "heading"], ["id", "With button", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], [3, "formControl", "accept", "link", "label", "maxFileSize", "multiple", "focusable", "pseudoFocused", "pseudoHovered", "pseudoPressed", "reject"], [1, "tui-space_top-2"], [4, "ngIf", "ngIfElse"], ["single", ""], [4, "ngFor", "ngForOf"], ["heading", "TuiInputFiles"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "accept", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "label", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "link", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxFileSize", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "multiple", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "reject", "documentationPropertyMode", "output", "documentationPropertyType", "TuiFileLike"], ["heading", "TuiFile"], ["documentationPropertyName", "file", "documentationPropertyMode", "input", "documentationPropertyType", "TuiFileLike"], ["documentationPropertyName", "state", "documentationPropertyMode", "input", "documentationPropertyType", "TuiFileStateT"], ["documentationPropertyName", "showSize", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "fileRemoved", "documentationPropertyMode", "output", "documentationPropertyType", "TuiFileLike"], [3, "file", "size", "showSize", "removed", 4, "tuiItem"], [3, "file", "size", "showSize", "removed"], [4, "ngIf"], [3, "file", "size", "showSize", 4, "tuiItem"], [3, "file", "size", "showSize"], ["state", "error", 3, "file", "size", "showSize", "removed", 4, "tuiItem"], ["state", "error", 3, "file", "size", "showSize", "removed"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFilesComponent_ng_template_1_Template, 17, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputFilesComponent_ng_template_2_Template, 21, 24, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputFilesComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiInputFilesExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiInputFilesExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiInputFilesExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputFilesExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputFilesExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDemoComponent"], _kit_components_input_files_input_files_component__WEBPACK_IMPORTED_MODULE_14__["TuiInputFilesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _kit_components_files_files_component__WEBPACK_IMPORTED_MODULE_15__["TuiFilesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationPropertyConnectorDirective"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_19__["TuiItemDirective"], _kit_components_files_file_file_component__WEBPACK_IMPORTED_MODULE_20__["TuiFileComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_21__["TuiDocCodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputFilesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputFilesComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputFilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-files`,
                templateUrl: `./input-files.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputFilesComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-files/input-files.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/input-files/input-files.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiFilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFilesModule", function() { return ExampleTuiFilesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-files/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-files/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-files/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-files/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input-files/examples/5/index.ts");
/* harmony import */ var _input_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-files.component */ "./src/modules/components/input-files/input-files.component.ts");















class ExampleTuiFilesModule {
}
ExampleTuiFilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiFilesModule });
ExampleTuiFilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiFilesModule_Factory(t) { return new (t || ExampleTuiFilesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilesModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFilesModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiFilesModule, { declarations: [_input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiInputFilesExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiInputFilesExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiInputFilesExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiInputFilesExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiInputFilesExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilesModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFilesModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiFilesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilesModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFilesModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"])),
                ],
                declarations: [
                    _input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiInputFilesExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiInputFilesExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiInputFilesExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiInputFilesExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiInputFilesExample5"],
                ],
                exports: [_input_files_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputFilesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-files-input-files-module.js.map