"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26147],{

/***/ 82880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AbstractExampleTuiControl)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57750);


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__/* .AbstractExampleTuiInteractive */ .O {
  constructor() {
    super(...arguments);
    this.sizeVariants = [`s`, `m`, `l`];
    this.hintContentVariants = [``, `Some content`];
    this.hintDirectionVariants = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_HINT_DIRECTIONS;
    this.hintAppearanceVariants = [``, `error`, `onDark`];
    this.typeVariants = [`text`, `email`, `password`, `tel`, `url`];
    this.maxLengthVariants = [10];
    this.autocompleteVariants = [``, `off`, `cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-type`, `given-name`, `additional-name`, `family-name`, `username`, `email`, `street-address`, `postal-code`, `country-name`];
    this.inputModeVariants = [`text`, `numeric`];
    this.customContentVariants = [CUSTOM_SVG_NAME, `tuiIconSearchLarge`, `tuiIconCalendarLarge`, `tuiIconVisaMono`, `tuiIconMastercardMono`];
    this.customContentSelected = ``;
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
    this.iconLeftVariants = [``, `tuiIconMailLarge`, `tuiIconPiechartLarge`];
    this.iconLeft = this.iconLeftVariants[0];
    this.hintContent = this.hintContentVariants[0];
    this.hintDirection = this.hintDirectionVariants[0];
    this.hintAppearance = this.hintAppearanceVariants[0];
    this.dropdownAlignVariants = [`left`, `right`];
    this.dropdownAlign = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    this.dropdownLimitWidthVariants = [`fixed`, `min`, `auto`];
    this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
    this.dropdownDirectionVariants = [`bottom`, `top`];
    this.dropdownDirection = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
  }

  get customContent() {
    return this.customContentSelected === CUSTOM_SVG_NAME ? CUSTOM_SVG : this.customContentSelected;
  }

  get disabled() {
    return this.control.disabled;
  }

  set disabled(value) {
    if (value) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

}

/***/ }),

/***/ 98204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ABSTRACT_PROPS_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`Component extends AbstractExample class`);

/***/ }),

/***/ 57750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AbstractExampleTuiInteractive)
/* harmony export */ });
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

/***/ 26147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFilesModule": () => (/* binding */ ExampleTuiFilesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/files/files.component.ts
var files_component = __webpack_require__(2216);
// EXTERNAL MODULE: ./projects/kit/components/input-files/input-files.component.ts
var input_files_component = __webpack_require__(13697);
// EXTERNAL MODULE: ./projects/kit/components/files/file/file.component.ts
var file_component = __webpack_require__(69699);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/examples/1/index.ts









function TuiInputFilesExample1_tui_input_files_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-files", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("reject", function TuiInputFilesExample1_tui_input_files_0_Template_tui_input_files_reject_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.onReject($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r0.control);
  }
}

function TuiInputFilesExample1_tui_file_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample1_tui_file_2_Template_tui_file_removed_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.removeFile();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r5 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r5);
  }
}

function TuiInputFilesExample1_tui_file_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample1_tui_file_4_Template_tui_file_removed_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.clearRejected();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r8 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r8);
  }
}

let TuiInputFilesExample1 = /*#__PURE__*/(() => {
  class TuiInputFilesExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.rejectedFiles$ = new Subject/* Subject */.xQ();
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

  TuiInputFilesExample1.ɵfac = function TuiInputFilesExample1_Factory(t) {
    return new (t || TuiInputFilesExample1)();
  };

  TuiInputFilesExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputFilesExample1,
    selectors: [["tui-input-files-example-1"]],
    decls: 6,
    vars: 7,
    consts: [["accept", "image/*", 3, "formControl", "reject", 4, "ngIf"], [1, "tui-space_top-1"], [3, "file", "removed", 4, "ngIf"], ["state", "error", 3, "file", "removed", 4, "ngIf"], ["accept", "image/*", 3, "formControl", "reject"], [3, "file", "removed"], ["state", "error", 3, "file", "removed"]],
    template: function TuiInputFilesExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiInputFilesExample1_tui_input_files_0_Template, 1, 1, "tui-input-files", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-files", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputFilesExample1_tui_file_2_Template, 1, 1, "tui-file", 2);
        fesm2015_core/* ɵɵpipe */.ALo(3, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputFilesExample1_tui_file_4_Template, 1, 1, "tui-file", 3);
        fesm2015_core/* ɵɵpipe */.ALo(5, "async");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx.control.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 3, ctx.control.valueChanges));
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 5, ctx.rejectedFiles$));
      }
    },
    directives: [common/* NgIf */.O5, files_component/* TuiFilesComponent */.D, input_files_component/* TuiInputFilesComponent */.N, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, file_component/* TuiFileComponent */._],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputFilesExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/examples/2/index.ts








function TuiInputFilesExample2_tui_file_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample2_tui_file_2_Template_tui_file_removed_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const file_r2 = restoredCtx.$implicit;
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.removeFile(file_r2);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r2);
  }
}

function TuiInputFilesExample2_tui_file_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample2_tui_file_4_Template_tui_file_removed_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const file_r5 = restoredCtx.$implicit;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.clearRejected(file_r5);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r5);
  }
}

let TuiInputFilesExample2 = /*#__PURE__*/(() => {
  class TuiInputFilesExample2 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([]);
      this.rejectedFiles = [];
    }

    onReject(files) {
      this.rejectedFiles = [...this.rejectedFiles, ...files];
    }

    removeFile({
      name
    }) {
      var _a, _b;

      this.control.setValue((_b = (_a = this.control.value) === null || _a === void 0 ? void 0 : _a.filter(current => current.name !== name)) !== null && _b !== void 0 ? _b : []);
    }

    clearRejected({
      name
    }) {
      this.rejectedFiles = this.rejectedFiles.filter(rejected => rejected.name !== name);
    }

  }

  TuiInputFilesExample2.ɵfac = function TuiInputFilesExample2_Factory(t) {
    return new (t || TuiInputFilesExample2)();
  };

  TuiInputFilesExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputFilesExample2,
    selectors: [["tui-input-files-example-2"]],
    decls: 5,
    vars: 6,
    consts: [["accept", "image/*", 3, "multiple", "formControl", "reject"], [1, "tui-space_top-1"], [3, "file", "removed", 4, "ngFor", "ngForOf"], ["state", "error", 3, "file", "removed", 4, "ngFor", "ngForOf"], [3, "file", "removed"], ["state", "error", 3, "file", "removed"]],
    template: function TuiInputFilesExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-files", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("reject", function TuiInputFilesExample2_Template_tui_input_files_reject_0_listener($event) {
          return ctx.onReject($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-files", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputFilesExample2_tui_file_2_Template, 1, 1, "tui-file", 2);
        fesm2015_core/* ɵɵpipe */.ALo(3, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputFilesExample2_tui_file_4_Template, 1, 1, "tui-file", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("multiple", true)("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 4, ctx.control.valueChanges));
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.rejectedFiles);
      }
    },
    directives: [input_files_component/* TuiInputFilesComponent */.N, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, files_component/* TuiFilesComponent */.D, common/* NgForOf */.sg, file_component/* TuiFileComponent */._],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputFilesExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/cdk/directives/item/item.directive.ts
var item_directive = __webpack_require__(82707);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/examples/3/index.ts










function TuiInputFilesExample3_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 7);
  }

  if (rf & 2) {
    const file_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r8);
  }
}

function TuiInputFilesExample3_tui_file_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 8);
  }

  if (rf & 2) {
    const file_r9 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r9);
  }
}

function TuiInputFilesExample3_tui_file_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample3_tui_file_3_Template_tui_file_removed_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.removeLoading();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("file", ctx_r2.loadingFile);
  }
}

function TuiInputFilesExample3_tui_file_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 7);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("file", ctx_r3.fileWithLink);
  }
}

function TuiInputFilesExample3_tui_file_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputFilesExample3_tui_file_11_Template_button_click_1_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const file_r12 = restoredCtx.$implicit;
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.restore(file_r12);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Restore ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r12);
  }
}

function TuiInputFilesExample3_tui_file_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function TuiInputFilesExample3_tui_file_12_Template_tui_file_removed_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const file_r15 = restoredCtx.$implicit;
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.remove(file_r15);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r15 = ctx.$implicit;
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r6 = fesm2015_core/* ɵɵreference */.MAs(14);

    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r15)("leftContent", _r6);
  }
}

function TuiInputFilesExample3_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 13);
  }
}

let TuiInputFilesExample3 = /*#__PURE__*/(() => {
  class TuiInputFilesExample3 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.files = [{
        name: `Loaded.txt`
      }, {
        name: `A file with a very very long title to check that it can be cut correctly.txt`
      }];
      this.loadingFile = {
        name: `Loading file.txt`
      };
      this.rejectedFiles = [{
        name: `File with an error.txt`,
        content: `Something went wrong this time`
      }];
      this.fileWithLink = {
        name: `with link.txt`,
        src: `https://tools.ietf.org/html/rfc675`
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

  TuiInputFilesExample3.ɵfac = function TuiInputFilesExample3_Factory(t) {
    return new (t || TuiInputFilesExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiInputFilesExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputFilesExample3,
    selectors: [["tui-input-files-example-3"]],
    decls: 15,
    vars: 5,
    consts: [["state", "normal", 3, "file", 4, "ngFor", "ngForOf"], ["state", "error", 3, "file", 4, "ngFor", "ngForOf"], ["state", "loading", 3, "file", "removed", 4, "ngIf"], ["state", "normal", 3, "file", 4, "tuiItem"], ["state", "deleted", "size", "l", 3, "file", 4, "ngFor", "ngForOf"], ["state", "normal", "size", "l", 3, "file", "leftContent", "removed", 4, "ngFor", "ngForOf"], ["icon", ""], ["state", "normal", 3, "file"], ["state", "error", 3, "file"], ["state", "loading", 3, "file", "removed"], ["state", "deleted", "size", "l", 3, "file"], ["tuiLink", "", 3, "click"], ["state", "normal", "size", "l", 3, "file", "leftContent", "removed"], ["src", "tuiIconFileLarge"]],
    template: function TuiInputFilesExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-files");
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputFilesExample3_tui_file_1_Template, 1, 1, "tui-file", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputFilesExample3_tui_file_2_Template, 1, 1, "tui-file", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputFilesExample3_tui_file_3_Template, 1, 1, "tui-file", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "h4");
        fesm2015_core/* ɵɵtext */._uU(5, "With link");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-files");
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiInputFilesExample3_tui_file_7_Template, 1, 1, "tui-file", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "h4");
        fesm2015_core/* ɵɵtext */._uU(9, "With deleted state");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-files");
        fesm2015_core/* ɵɵtemplate */.YNc(11, TuiInputFilesExample3_tui_file_11_Template, 3, 1, "tui-file", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiInputFilesExample3_tui_file_12_Template, 1, 2, "tui-file", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(13, TuiInputFilesExample3_ng_template_13_Template, 1, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.files);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.rejectedFiles);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.loadingFile && !ctx.isCypress);
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.removedFiles);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.restoredFiles);
      }
    },
    directives: [files_component/* TuiFilesComponent */.D, common/* NgForOf */.sg, common/* NgIf */.O5, item_directive/* TuiItemDirective */.w, file_component/* TuiFileComponent */._, link_component/* TuiLinkComponent */.V, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputFilesExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/examples/4/index.ts







function TuiInputFilesExample4_ng_container_1_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 3);
  }

  if (rf & 2) {
    const file_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r2);
  }
}

function TuiInputFilesExample4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputFilesExample4_ng_container_1_tui_file_1_Template, 1, 1, "tui-file", 2);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiInputFilesExample4_ng_container_2_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 5);
  }

  if (rf & 2) {
    const file_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r5);
  }
}

function TuiInputFilesExample4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputFilesExample4_ng_container_2_tui_file_1_Template, 1, 1, "tui-file", 4);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiInputFilesExample4 = /*#__PURE__*/(() => {
  class TuiInputFilesExample4 {
    constructor() {
      this.height = 3;
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.files = [{
        name: `Loaded.txt`
      }, {
        name: `one_more_file.txt`
      }, {
        name: `one_more_file.txt`
      }, {
        name: `one_more_file.txt`
      }, {
        name: `one_more_file.txt`
      }, {
        name: `one_more_file.txt`
      }, {
        name: `last_file.txt`
      }];
      this.rejectedFiles = [{
        name: `File with an error.txt`
      }];
    }

  }

  TuiInputFilesExample4.ɵfac = function TuiInputFilesExample4_Factory(t) {
    return new (t || TuiInputFilesExample4)();
  };

  TuiInputFilesExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputFilesExample4,
    selectors: [["tui-input-files-example-4"]],
    decls: 3,
    vars: 3,
    consts: [[3, "max"], [4, "ngFor", "ngForOf"], ["state", "normal", 3, "file", 4, "tuiItem"], ["state", "normal", 3, "file"], ["state", "error", 3, "file", 4, "tuiItem"], ["state", "error", 3, "file"]],
    template: function TuiInputFilesExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-files", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputFilesExample4_ng_container_1_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputFilesExample4_ng_container_2_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 3);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.files);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.rejectedFiles);
      }
    },
    directives: [files_component/* TuiFilesComponent */.D, common/* NgForOf */.sg, item_directive/* TuiItemDirective */.w, file_component/* TuiFileComponent */._],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputFilesExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/examples/5/index.ts






function TuiInputFilesExample5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 3);
  }
}

let TuiInputFilesExample5 = /*#__PURE__*/(() => {
  class TuiInputFilesExample5 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.file = {
        name: `custom.txt`
      };
    }

  }

  TuiInputFilesExample5.ɵfac = function TuiInputFilesExample5_Factory(t) {
    return new (t || TuiInputFilesExample5)();
  };

  TuiInputFilesExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputFilesExample5,
    selectors: [["tui-input-files-example-5"]],
    decls: 6,
    vars: 2,
    consts: [[3, "file", "leftContent"], [1, "tui-text_body-s-2"], ["content", ""], ["src", "tuiIconTimeLarge"]],
    template: function TuiInputFilesExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-files");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-file", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 1);
        fesm2015_core/* ɵɵtext */._uU(3, "file is on checking");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputFilesExample5_ng_template_4_Template, 1, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("file", ctx.file)("leftContent", _r0);
      }
    },
    directives: [files_component/* TuiFilesComponent */.D, file_component/* TuiFileComponent */._, svg_component/* TuiSvgComponent */.P],
    styles: [".content[_ngcontent-%COMP%]{color:var(--tui-secondary)}"],
    changeDetection: 0
  });
  return TuiInputFilesExample5;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/input-files.component.ts
























function ExampleTuiInputFilesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-input-files-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-input-files-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-input-files-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-input-files-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-input-files-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 28);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template_tui_file_removed_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const file_r20 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r22.removeFile(file_r20);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r20 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r20)("size", ctx_r21.size)("showSize", ctx_r21.showSize);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_tui_file_1_Template, 1, 3, "tui-file", 27);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 12);
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx_r3.control.valueChanges));
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-file", 31);
  }

  if (rf & 2) {
    const file_r27 = fesm2015_core/* ɵɵnextContext */.oxw().ngIf;
    const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r27)("size", ctx_r28.size)("showSize", ctx_r28.showSize);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_tui_file_1_Template, 1, 3, "tui-file", 30);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_ng_container_0_Template, 2, 0, "ng-container", 29);
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r5.control.value);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-file", 33);
    fesm2015_core/* ɵɵlistener */.NdJ("removed", function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template_tui_file_removed_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r34);
      const file_r30 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r32 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r32.removeRejected(file_r30);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const file_r30 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r31 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("file", file_r30)("size", ctx_r31.size)("showSize", ctx_r31.showSize);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_tui_file_1_Template, 1, 3, "tui-file", 32);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 34);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 35);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 36);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 37);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 38);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 39);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 40);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 41);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 42);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 43);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 44);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 45);
  }
}

function ExampleTuiInputFilesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-files", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("reject", function ExampleTuiInputFilesComponent_ng_template_2_Template_tui_input_files_reject_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r36 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r36.updateRejected($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-files", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputFilesComponent_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputFilesComponent_ng_template_2_ng_template_4_Template, 1, 1, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputFilesComponent_ng_template_2_ng_container_6_Template, 2, 0, "ng-container", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-documentation", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputFilesComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r38 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r38.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputFilesComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r39 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r39.accept = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputFilesComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r40 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r40.label = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputFilesComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r41 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r41.link = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputFilesComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r42 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r42.maxFileSize = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiInputFilesComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r43 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r43.multipleChange($event);
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiInputFilesComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-documentation", 21);
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiInputFilesComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵtemplate */.YNc(17, ExampleTuiInputFilesComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵtemplate */.YNc(18, ExampleTuiInputFilesComponent_ng_template_2_ng_template_18_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_18_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r44 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r44.showSize = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(19, ExampleTuiInputFilesComponent_ng_template_2_ng_template_19_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputFilesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_19_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r45 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r45.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(20, ExampleTuiInputFilesComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r4 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r1.control)("accept", ctx_r1.accept)("link", ctx_r1.link)("label", ctx_r1.label)("maxFileSize", ctx_r1.maxFileSize)("multiple", ctx_r1.multiple)("focusable", ctx_r1.focusable)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered)("pseudoActive", ctx_r1.pseudoPressed);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.multiple)("ngIfElse", _r4);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.rejectedFiles);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.acceptVariants)("documentationPropertyValue", ctx_r1.accept);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.label);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.link);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxFileSizeVariants)("documentationPropertyValue", ctx_r1.maxFileSize);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.multiple);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showSize);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiInputFilesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 46);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 47);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 48);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 49);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 50);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiInputFilesComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputFilesComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 67504).then(__webpack_require__.t.bind(__webpack_require__, 67504, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44703).then(__webpack_require__.t.bind(__webpack_require__, 44703, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 40922).then(__webpack_require__.t.bind(__webpack_require__, 40922, 17)),
        HTML: __webpack_require__.e(/* import() */ 66769).then(__webpack_require__.t.bind(__webpack_require__, 66769, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 37803).then(__webpack_require__.t.bind(__webpack_require__, 37803, 17)),
        HTML: __webpack_require__.e(/* import() */ 39928).then(__webpack_require__.t.bind(__webpack_require__, 39928, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 7077).then(__webpack_require__.t.bind(__webpack_require__, 7077, 17)),
        HTML: __webpack_require__.e(/* import() */ 45754).then(__webpack_require__.t.bind(__webpack_require__, 45754, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 20604).then(__webpack_require__.t.bind(__webpack_require__, 20604, 17)),
        HTML: __webpack_require__.e(/* import() */ 79375).then(__webpack_require__.t.bind(__webpack_require__, 79375, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 50599).then(__webpack_require__.t.bind(__webpack_require__, 50599, 17)),
        HTML: __webpack_require__.e(/* import() */ 6690).then(__webpack_require__.t.bind(__webpack_require__, 6690, 17)),
        LESS: __webpack_require__.e(/* import() */ 78407).then(__webpack_require__.t.bind(__webpack_require__, 78407, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI();
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
      this.control.setValue(this.control.value.filter(current => current.name !== file.name));
    }

    removeRejected(file) {
      this.rejectedFiles = this.rejectedFiles.filter(rejectedFile => rejectedFile.name !== file.name);
    }

    updateRejected(file) {
      this.rejectedFiles = [...this.rejectedFiles, ...(Array.isArray(file) ? file : [file])];
    }

    multipleChange(multiple) {
      this.rejectedFiles = [];
      this.control.setValue(null);
      this.multiple = multiple;
    }

  }

  ExampleTuiInputFilesComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputFilesComponent_BaseFactory;
    return function ExampleTuiInputFilesComponent_Factory(t) {
      return (ɵExampleTuiInputFilesComponent_BaseFactory || (ɵExampleTuiInputFilesComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputFilesComponent)))(t || ExampleTuiInputFilesComponent);
    };
  }();

  ExampleTuiInputFilesComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputFilesComponent,
    selectors: [["example-tui-input-files"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputFilesComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8579732062296250669$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__1 = goog.getMsg("An input for upload one or several files. It uses native input file abilities.");
        i18n_0 = MSG_EXTERNAL_8579732062296250669$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2365312831690318321$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__3 = goog.getMsg("Basic single");
        i18n_2 = MSG_EXTERNAL_2365312831690318321$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟21b9e693105e70e875f4027941d66fc7373e5e6f␟2365312831690318321:Basic single`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2052254700267022778$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__5 = goog.getMsg("multiple");
        i18n_4 = MSG_EXTERNAL_2052254700267022778$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟a47f0c6491869fa5eac7f981a8d11633190e851e␟2052254700267022778:multiple`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2741034837339672700$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__7 = goog.getMsg("Standalone files");
        i18n_6 = MSG_EXTERNAL_2741034837339672700$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟ea30a2733abb457ee8364e4e3c4814e3def1aa15␟2741034837339672700:Standalone files`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4530975242591241405$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__9 = goog.getMsg("With button");
        i18n_8 = MSG_EXTERNAL_4530975242591241405$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟7802ae78818c3f2978ca66de1ad0bbe52505004f␟4530975242591241405:With button`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7398919974746085920$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__11 = goog.getMsg("Custom content");
        i18n_10 = MSG_EXTERNAL_7398919974746085920$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟099e0facbaa0fd2a2d26ab71ef2ada157a398cf8␟7398919974746085920:Custom content`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___13 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_127963594360329727$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___15 = goog.getMsg(" Allowed formats (for native attribute {$startTagCode}accept{$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_127963594360329727$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:accept${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5985585011983944521$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___17 = goog.getMsg(" Label text ");
        i18n_16 = MSG_EXTERNAL_5985585011983944521$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3977709208772062372$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___19 = goog.getMsg(" Link text ");
        i18n_18 = MSG_EXTERNAL_3977709208772062372$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3924563314608826807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___21 = goog.getMsg(" Max file size in bytes (30 MB by default \u2014 30 * 1000 * 1000) ");
        i18n_20 = MSG_EXTERNAL_3924563314608826807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8625084047952787649$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___23 = goog.getMsg(" Allows to upload several files ");
        i18n_22 = MSG_EXTERNAL_8625084047952787649$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4840980441808546217$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___25 = goog.getMsg(" Emits file that was rejected. ");
        i18n_24 = MSG_EXTERNAL_4840980441808546217$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟76c4cf0a46be41a48eee3c30e13b463d63ae5a1d␟4840980441808546217: Emits file that was rejected. `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_414489167527586218$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___27 = goog.getMsg(" File ");
        i18n_26 = MSG_EXTERNAL_414489167527586218$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟5767e8c57ff270fa0ffa0fd4454e60b9ccd004bc␟414489167527586218: File `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5449162325769068309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___29 = goog.getMsg(" State of the file ");
        i18n_28 = MSG_EXTERNAL_5449162325769068309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟1b17f43bcc6f4e13dd2881b4034a923787ab238d␟5449162325769068309: State of the file `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2011612506485911109$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___31 = goog.getMsg(" Show file size ");
        i18n_30 = MSG_EXTERNAL_2011612506485911109$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1178400793347014785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___33 = goog.getMsg(" Component size ");
        i18n_32 = MSG_EXTERNAL_1178400793347014785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟52b1e7046e2e0240fcb7b8feef3432c93451000c␟1178400793347014785: Component size `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8330152764576404723$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___35 = goog.getMsg(" Emits file on click on close button. When subscribed to, close button appears. ");
        i18n_34 = MSG_EXTERNAL_8330152764576404723$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS___35;
      } else {
        i18n_34 = $localize`:␟9f4a11af0f1b581ab49906c0ae7b2875b464493d␟8330152764576404723: Emits file on click on close button. When subscribed to, close button appears. `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3751126963235249471$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__37 = goog.getMsg(" Import {$startTagCode}TuiInputFilesModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_36 = MSG_EXTERNAL_3751126963235249471$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟c8f3fff6c1ff57fa0714c9ec9f66e0bf6b49dde6␟3751126963235249471: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputFilesModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__39 = goog.getMsg("Add to the template:");
        i18n_38 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_FILES_INPUT_FILES_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputFiles", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "single", "heading", i18n_2, 3, "content"], ["id", "multiple", "heading", i18n_4, 3, "content"], ["id", "standalone-files", "heading", i18n_6, 3, "content"], ["id", "With button", "heading", i18n_8, 3, "content"], ["id", "custom", "heading", i18n_10, 3, "content"], [3, "formControl", "accept", "link", "label", "maxFileSize", "multiple", "focusable", "pseudoFocus", "pseudoHover", "pseudoActive", "reject"], [1, "tui-space_top-2"], [4, "ngIf", "ngIfElse"], ["single", ""], [4, "ngFor", "ngForOf"], ["heading", "TuiInputFiles"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "accept", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "label", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "link", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxFileSize", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "multiple", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "reject", "documentationPropertyMode", "output", "documentationPropertyType", "TuiFileLike"], ["heading", "TuiFile"], ["documentationPropertyName", "file", "documentationPropertyMode", "input", "documentationPropertyType", "TuiFileLike"], ["documentationPropertyName", "state", "documentationPropertyMode", "input", "documentationPropertyType", "TuiFileStateT"], ["documentationPropertyName", "showSize", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "fileRemoved", "documentationPropertyMode", "output", "documentationPropertyType", "TuiFileLike"], [3, "file", "size", "showSize", "removed", 4, "tuiItem"], [3, "file", "size", "showSize", "removed"], [4, "ngIf"], [3, "file", "size", "showSize", 4, "tuiItem"], [3, "file", "size", "showSize"], ["state", "error", 3, "file", "size", "showSize", "removed", 4, "tuiItem"], ["state", "error", 3, "file", "size", "showSize", "removed"], i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, [1, "b-demo-steps"], i18n_36, ["filename", "myComponent.module.ts", 3, "code"], i18n_38, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputFilesComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputFilesComponent_ng_template_1_Template, 12, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputFilesComponent_ng_template_2_Template, 21, 24, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputFilesComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputFilesExample1, TuiInputFilesExample2, TuiInputFilesExample3, TuiInputFilesExample4, TuiInputFilesExample5, demo_component/* TuiDocDemoComponent */.F, input_files_component/* TuiInputFilesComponent */.N, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, files_component/* TuiFilesComponent */.D, common/* NgIf */.O5, common/* NgForOf */.sg, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, item_directive/* TuiItemDirective */.w, file_component/* TuiFileComponent */._, code_component/* TuiDocCodeComponent */.c],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputFilesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-files/input-files.module.ts














let ExampleTuiFilesModule = /*#__PURE__*/(() => {
  class ExampleTuiFilesModule {}

  ExampleTuiFilesModule.ɵfac = function ExampleTuiFilesModule_Factory(t) {
    return new (t || ExampleTuiFilesModule)();
  };

  ExampleTuiFilesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFilesModule
  });
  ExampleTuiFilesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiFilesModule, kit.TuiInputFilesModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiButtonModule, core.TuiSvgModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputFilesComponent))]]
  });
  return ExampleTuiFilesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFilesModule, {
    declarations: [ExampleTuiInputFilesComponent, TuiInputFilesExample1, TuiInputFilesExample2, TuiInputFilesExample3, TuiInputFilesExample4, TuiInputFilesExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiFilesModule, kit.TuiInputFilesModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiButtonModule, core.TuiSvgModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputFilesComponent]
  });
})();

/***/ })

}]);