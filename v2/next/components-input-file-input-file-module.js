(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-file-input-file-module"],{

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

/***/ "./src/modules/components/input-file/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-file/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputFileExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFileExample1", function() { return TuiInputFileExample1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input-file/input-file.component */ "../kit/components/input-file/input-file.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");












const _c0 = function () { return []; };
class RejectedFile {
    constructor(file, reason) {
        this.file = file;
        this.reason = reason;
    }
}
function convertRejected({ file, reason }) {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        content: reason,
    };
}
class TuiInputFileExample1 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    get loading$() {
        return this.requests$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(file => (file instanceof File ? [file] : [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])([]));
    }
    get rejected$() {
        return this.requests$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(file => (file instanceof RejectedFile ? [convertRejected(file)] : [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(({ length }) => {
            if (length) {
                this.control.setValue(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])([]));
    }
    get requests$() {
        return this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(file => file ? this.serverRequest(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(file)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
    }
    serverRequest(file) {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result = delay % 2
            ? null
            : new RejectedFile(file, `Server responded for odd number of time`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(delay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mapTo"])(result));
    }
}
TuiInputFileExample1.ɵfac = function TuiInputFileExample1_Factory(t) { return new (t || TuiInputFileExample1)(); };
TuiInputFileExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputFileExample1, selectors: [["tui-input-file-example-1"]], decls: 3, vars: 9, consts: [["link", "Choose an image", "accept", "image/*", 1, "container", 3, "formControl", "loadingFiles", "rejectedFiles"]], template: function TuiInputFileExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-input-file", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("loadingFiles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.loading$) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0))("rejectedFiles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx.rejected$) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiInputFileExample1.prototype, "loading$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiInputFileExample1.prototype, "rejected$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiInputFileExample1.prototype, "requests$", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputFileExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-file-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__["encapsulation"],
            }]
    }], null, { loading$: [], rejected$: [], requests$: [] }); })();


/***/ }),

/***/ "./src/modules/components/input-file/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-file/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputFileExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFileExample2", function() { return TuiInputFileExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-file/input-file.component */ "../kit/components/input-file/input-file.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3022298069038886630$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" With a custom accept format and async loading ");
    I18N_0 = MSG_EXTERNAL_3022298069038886630$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟080cae4d65efb97854af5d37318839e779a3f3d7␟3022298069038886630: With a custom accept format and async loading `;
}
const _c2 = function () { return []; };
class RejectedFile {
    constructor(file, reason) {
        this.file = file;
        this.reason = reason;
    }
}
function isFile(file) {
    return file instanceof File;
}
function isRejectedFile(file) {
    return file instanceof RejectedFile;
}
function convertRejected({ file, reason }) {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        content: reason,
    };
}
class TuiInputFileExample2 {
    constructor() {
        this.files = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.rejectedFiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.files$ = this.files.valueChanges.pipe(
        // We start with empty array for pairwise to work immediately
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pairwise"])(), 
        // We map each emit to newly added files
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([prev, cur]) => cur.filter(item => !prev.includes(item))), 
        // We use mergeScan + combineLatest to accumulate results in one array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeScan"])((acc, cur) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(cur.map(file => this.serverRequest(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(file), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(
        // Cancel upload if file is removed from control
        this.files.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(files => !files.includes(file))))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(files => [...acc, ...files.filter(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isPresent"])])), []), 
        // Now we have a shared Observable of currently loading Files and server-rejects
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.loading$ = this.files$.pipe(
        // We filter out RejectedFiles to remove errors from loading array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(files => files.filter(isFile)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(loading => this.files.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.files.value), 
        // We filter out loading items that were removed from control before server responded
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => loading.filter(file => value.includes(file))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])([]));
        // We start with internal changes (i.e. wrong format or size found or user removed existing error message)
        this.rejected$ = this.rejectedFiles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(rejectedFiles => this.files$.pipe(
        // We filter out Files to ignore loading files
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(files => files.filter(isRejectedFile)), 
        // We collect all newly rejected files and previously rejected since we switch mapped
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])((previous, current) => [
            ...previous,
            ...current.filter(({ file }) => this.files.value.includes(file)),
        ], []), 
        // We remove server errored files from control **SIDE EFFECT**
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(files => this.removeRejected(files)), 
        // Map new RejectedFiles to TuiFileLike with rejection reason
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(files => files.map(convertRejected)), 
        // Combine with currently present rejected files
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(filtered => [...rejectedFiles, ...filtered]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])([]));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            files: this.files,
        });
    }
    onRejectedFilesChange(rejectedFiles) {
        this.rejectedFiles$.next(rejectedFiles);
    }
    removeRejected(rejectedFiles) {
        const filtered = this.files.value.filter((file) => rejectedFiles.every(rejectedFile => rejectedFile.file !== file));
        if (filtered.length !== this.files.value.length) {
            this.files.setValue(filtered);
        }
    }
    serverRequest(file) {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result = delay % 2
            ? null
            : new RejectedFile(file, `Server responded for odd number of time`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(delay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(result));
    }
}
TuiInputFileExample2.ɵfac = function TuiInputFileExample2_Factory(t) { return new (t || TuiInputFileExample2)(); };
TuiInputFileExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFileExample2, selectors: [["tui-input-file-example-2"]], decls: 6, vars: 10, consts: [[1, "container", 3, "formGroup"], [1, "tui-space_bottom-1"], ["link", "Choose images", "accept", "image/*", "formControlName", "files", 3, "multiple", "loadingFiles", "rejectedFiles", "rejectedFilesChange"]], template: function TuiInputFileExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rejectedFilesChange", function TuiInputFileExample2_Template_tui_input_file_rejectedFilesChange_3_listener($event) { return ctx.onRejectedFilesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("loadingFiles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loading$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("rejectedFiles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.rejected$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFileExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-file-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-file/examples/3/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-file/examples/3/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputFileExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFileExample3", function() { return TuiInputFileExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-file/input-file.component */ "../kit/components/input-file/input-file.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4164292255139278901$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" With preset files and actions when deleting ");
    I18N_0 = MSG_EXTERNAL_4164292255139278901$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟41b1908bd7cbd747514be2f4a82ba0bb47ac8097␟4164292255139278901: With preset files and actions when deleting `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7175759508499094895$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_3_INDEX_TS_3 = goog.getMsg("Loading files should also be in control");
    I18N_2 = MSG_EXTERNAL_7175759508499094895$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_3_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟7fac004bcdf2783953a2e2ac31535a931817541b␟7175759508499094895:Loading files should also be in control`;
}
class RejectedFile {
    constructor(file, reason) {
        this.file = file;
        this.reason = reason;
    }
}
function isRejectedFile(file) {
    return file instanceof RejectedFile;
}
function getRemoved(oldArray, newArray) {
    const filtered = oldArray.filter(item => !newArray.includes(item));
    return filtered.length === 1 ? filtered[0] : null;
}
function isNarrowed(oldArray, newArray) {
    return newArray.every(item => oldArray.includes(item));
}
function convertRejected({ file, reason }) {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        content: reason,
    };
}
class TuiInputFileExample3 {
    constructor(destroy$, changeDetectorRef, alertService) {
        this.alertService = alertService;
        this.files$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.files = [
            {
                name: `Loading file.txt`,
            },
            {
                name: `A file with a very very long title to check that it can be cut correctly.txt`,
                src: `https://tools.ietf.org/html/rfc675`,
            },
        ];
        this.loadingFiles = [this.files[0]];
        this.rejectedFiles = [
            {
                name: `File with an error.txt`,
                content: `Something went wrong this time`,
            },
        ];
        this.files$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(files => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(files.map(file => this.serverRequest(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(file))))), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["watch"])(changeDetectorRef), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(destroy$))
            .subscribe(response => {
            this.processResponse(response);
        });
    }
    onModelChange(files) {
        this.processNotification(files);
        if (isNarrowed(this.files, files)) {
            this.files = files;
            this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));
            return;
        }
        this.files = files;
        this.loadingFiles = this.files;
        this.files$.next(this.files);
    }
    processNotification(files) {
        const removed = getRemoved(this.files, files);
        if (removed) {
            this.alertService.open(`"${removed.name}" was removed`).subscribe();
        }
    }
    processResponse(files) {
        this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));
        const newRejectedFiles = files
            .filter(isRejectedFile)
            .filter(({ file }) => this.files.includes(file));
        if (newRejectedFiles.length === 0) {
            return;
        }
        this.rejectedFiles = [
            ...this.rejectedFiles,
            ...newRejectedFiles.map(convertRejected),
        ];
        this.files = this.files.filter(file => newRejectedFiles.every(rejectedFile => rejectedFile.file !== file));
    }
    serverRequest(file) {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result = delay % 2
            ? null
            : new RejectedFile(file, `Server responded for odd number of time`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(delay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(result));
    }
}
TuiInputFileExample3.ɵfac = function TuiInputFileExample3_Factory(t) { return new (t || TuiInputFileExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"])); };
TuiInputFileExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFileExample3, selectors: [["tui-input-file-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])], decls: 6, vars: 4, consts: [[1, "container"], [1, "tui-space_bottom-1"], [3, "ngModel", "multiple", "loadingFiles", "rejectedFiles", "rejectedFilesChange", "ngModelChange"]], template: function TuiInputFileExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rejectedFilesChange", function TuiInputFileExample3_Template_tui_input_file_rejectedFilesChange_3_listener($event) { return ctx.rejectedFiles = $event; })("ngModelChange", function TuiInputFileExample3_Template_tui_input_file_ngModelChange_3_listener($event) { return ctx.onModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.files)("multiple", true)("loadingFiles", ctx.loadingFiles)("rejectedFiles", ctx.rejectedFiles);
    } }, directives: [_kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFileExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-file-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-file/examples/4/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-file/examples/4/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputFileExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputFileExample4", function() { return TuiInputFileExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-file/input-file.component */ "../kit/components/input-file/input-file.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9158298050641782647$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" Sync working with files, no loading state ");
    I18N_0 = MSG_EXTERNAL_9158298050641782647$$SRC_MODULES_COMPONENTS_INPUT_FILE_EXAMPLES_4_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟4cc8b777813d22feb628efb36f28694be26e0ff8␟9158298050641782647: Sync working with files, no loading state `;
}
class TuiInputFileExample4 {
    constructor() {
        this.files = [];
    }
}
TuiInputFileExample4.ɵfac = function TuiInputFileExample4_Factory(t) { return new (t || TuiInputFileExample4)(); };
TuiInputFileExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputFileExample4, selectors: [["tui-input-file-example-4"]], decls: 4, vars: 2, consts: [[1, "container"], [1, "tui-space_bottom-1"], ["size", "l", 3, "multiple", "ngModel", "ngModelChange"]], template: function TuiInputFileExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputFileExample4_Template_tui_input_file_ngModelChange_3_listener($event) { return ctx.files = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx.files);
    } }, directives: [_kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1maWxlL2V4YW1wbGVzLzQvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputFileExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-file-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-file/input-file.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/input-file/input-file.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiInputFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputFileComponent", function() { return ExampleTuiInputFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-file/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-file/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-file/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-file/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../kit/components/input-file/input-file.component */ "../kit/components/input-file/input-file.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");






















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8579732062296250669$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__1 = goog.getMsg("An input for upload one or several files. It uses native input file abilities.");
    I18N_0 = MSG_EXTERNAL_8579732062296250669$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_174397684173185104$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__3 = goog.getMsg("Single file");
    I18N_2 = MSG_EXTERNAL_174397684173185104$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟dd673a1043a8ad44d76752e86198b9fdad6cea76␟174397684173185104:Single file`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1720677440255684728$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__6 = goog.getMsg("Several files");
    I18N_5 = MSG_EXTERNAL_1720677440255684728$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟a1f1f7a5a2007f7010e8d818936731a335306646␟1720677440255684728:Several files`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__9 = goog.getMsg("Big size");
    I18N_8 = MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiInputFileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deprecated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " . Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "InputFiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " TuiInputFilesModule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-input-file-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-input-file-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-input-file-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tui-input-file-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___12 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_11 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_127963594360329727$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___14 = goog.getMsg(" Allowed formats (for native attribute {$startTagCode}accept{$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_13 = MSG_EXTERNAL_127963594360329727$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:accept${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5985585011983944521$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___16 = goog.getMsg(" Label text ");
    I18N_15 = MSG_EXTERNAL_5985585011983944521$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3977709208772062372$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___18 = goog.getMsg(" Link text ");
    I18N_17 = MSG_EXTERNAL_3977709208772062372$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8330372945270919575$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___20 = goog.getMsg(" Files in loading process ");
    I18N_19 = MSG_EXTERNAL_8330372945270919575$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟18d7d778a69e8f70693c92ff0b47f32edc95b12a␟8330372945270919575: Files in loading process `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3924563314608826807$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___22 = goog.getMsg(" Max file size in bytes (30 MB by default \u2014 30 * 1000 * 1000) ");
    I18N_21 = MSG_EXTERNAL_3924563314608826807$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8625084047952787649$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___24 = goog.getMsg(" Allows to upload several files ");
    I18N_23 = MSG_EXTERNAL_8625084047952787649$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2574853013457747211$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___26 = goog.getMsg(" Array of files that not passed check ");
    I18N_25 = MSG_EXTERNAL_2574853013457747211$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟8b220800993a93dd9ca716a6014eeec88dfd88e0␟2574853013457747211: Array of files that not passed check `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2011612506485911109$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___28 = goog.getMsg(" Show file size ");
    I18N_27 = MSG_EXTERNAL_2011612506485911109$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7972270867315160918$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___30 = goog.getMsg(" Files list size ");
    I18N_29 = MSG_EXTERNAL_7972270867315160918$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟af27d8636b6c20ccdd0a11ff4d940e05eb2b8ae6␟7972270867315160918: Files list size `;
}
function ExampleTuiInputFileComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
function ExampleTuiInputFileComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-input-file", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputFileComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputFileComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.accept = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputFileComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputFileComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputFileComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputFileComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.maxFileSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputFileComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.multiple = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputFileComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.rejectedFiles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputFileComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.showSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputFileComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputFileComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.control)("accept", ctx_r1.accept)("link", ctx_r1.link)("label", ctx_r1.label)("maxFileSize", ctx_r1.maxFileSize)("multiple", ctx_r1.multiple)("rejectedFiles", ctx_r1.rejectedFiles)("readOnly", ctx_r1.readOnly)("size", ctx_r1.size)("showSize", ctx_r1.showSize)("focusable", ctx_r1.focusable)("pseudoFocused", ctx_r1.pseudoFocused)("pseudoHovered", ctx_r1.pseudoHovered)("pseudoPressed", ctx_r1.pseudoPressed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.acceptVariants)("documentationPropertyValue", ctx_r1.accept);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxFileSizeVariants)("documentationPropertyValue", ctx_r1.maxFileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.rejectedFilesVariants)("documentationPropertyValue", ctx_r1.rejectedFiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3726838635698526556$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__32 = goog.getMsg(" Import {$startTagCode}TuiInputFileModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_31 = MSG_EXTERNAL_3726838635698526556$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__32;
}
else {
    I18N_31 = $localize `:␟d41a7e4dc2844fe570cedb26ed5254a96dac3351␟3726838635698526556: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputFileModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__34 = goog.getMsg("Add to the template:");
    I18N_33 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_FILE_INPUT_FILE_COMPONENT_TS__34;
}
else {
    I18N_33 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputFileComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputFileComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.html")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.link = `Choose a file`;
        this.label = `or drop\u00A0it\u00A0here`;
        this.multiple = false;
        this.showSize = true;
        this.accept = ``;
        this.acceptVariants = [`image/*`, `application/pdf`, `image/*,application/pdf`];
        this.maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
        this.sizeVariants = [`m`, `l`];
        this.rejectedFilesVariants = [
            [],
            [
                {
                    name: `test.txt`,
                    size: 123,
                    content: `File is too boring`,
                },
                {
                    name: `Waterplea — Strays.mp3`,
                    size: 237,
                    content: `File already exists`,
                },
            ],
        ];
        this.size = this.sizeVariants[0];
        this.rejectedFiles = this.rejectedFilesVariants[0];
        this.maxFileSize = this.maxFileSizeVariants[2];
    }
}
ExampleTuiInputFileComponent.ɵfac = function ExampleTuiInputFileComponent_Factory(t) { return ɵExampleTuiInputFileComponent_BaseFactory(t || ExampleTuiInputFileComponent); };
ExampleTuiInputFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputFileComponent, selectors: [["example-tui-input-file"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputFileComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputFile", "package", "KIT", "type", "components", "deprecated", ""], ["pageTab", ""], ["status", "error"], ["tuiLink", "", "routerLink", "/components/input-files"], ["id", "single", 3, "content", 6, "heading"], ["id", "multiple", 3, "content", 6, "heading"], ["id", "model", "heading", "ngModel", 3, "content"], ["id", "size", 3, "content", 6, "heading"], [3, "formControl", "accept", "link", "label", "maxFileSize", "multiple", "rejectedFiles", "readOnly", "size", "showSize", "focusable", "pseudoFocused", "pseudoHovered", "pseudoPressed"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "accept", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "label", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "link", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "loadingFiles", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<TuiFileLike>"], ["documentationPropertyName", "maxFileSize", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "multiple", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rejectedFiles", "documentationPropertyMode", "input-output", "documentationPropertyType", "ReadonlyArray<TuiFileLike>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showSize", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputFileComponent_ng_template_1_Template, 22, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputFileComponent_ng_template_2_Template, 13, 27, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputFileComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputFileExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputFileExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputFileExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputFileExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocDemoComponent"], _kit_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_16__["TuiInputFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputFileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputFileComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-file`,
                templateUrl: `./input-file.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputFileComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-file/input-file.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-file/input-file.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiInputFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputFileModule", function() { return ExampleTuiInputFileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-file/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-file/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-file/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-file/examples/4/index.ts");
/* harmony import */ var _input_file_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-file.component */ "./src/modules/components/input-file/input-file.component.ts");














class ExampleTuiInputFileModule {
}
ExampleTuiInputFileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputFileModule });
ExampleTuiInputFileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputFileModule_Factory(t) { return new (t || ExampleTuiInputFileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFileModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputFileModule, { declarations: [_input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiInputFileExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiInputFileExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiInputFileExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiInputFileExample4"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFileModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputFileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputFileModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"])),
                ],
                declarations: [
                    _input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiInputFileExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiInputFileExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiInputFileExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiInputFileExample4"],
                ],
                exports: [_input_file_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputFileComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-file-input-file-module.js.map