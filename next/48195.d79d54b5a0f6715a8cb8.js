"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48195],{

/***/ 48195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputTagModule": () => (/* binding */ ExampleTuiInputTagModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-tag/input-tag.component.ts
var input_tag_component = __webpack_require__(72146);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/1/index.ts





let TuiInputTagExample1 = /*#__PURE__*/(() => {
  class TuiInputTagExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([]);
    }

  }

  TuiInputTagExample1.ɵfac = function TuiInputTagExample1_Factory(t) {
    return new (t || TuiInputTagExample1)();
  };

  TuiInputTagExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample1,
    selectors: [["tui-input-tag-example-1"]],
    decls: 4,
    vars: 2,
    consts: [[1, "b-form", 3, "tuiTextfieldLabelOutside", "formControl"]],
    template: function TuiInputTagExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " I'm a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "i");
        fesm2015_core/* ɵɵtext */._uU(3, "placeholder");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("formControl", ctx.control);
      }
    },
    directives: [input_tag_component/* TuiInputTagComponent */.P, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTagExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/2/index.ts










function TuiInputTagExample2_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 2);
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx_r0.items$));
  }
}

const databaseMockData = [`John Cleese`, `Eric Idle`, `Michael Palin`, `Terry Gilliam`, `Terry Jones`, `Graham Chapman`];
let TuiInputTagExample2 = /*#__PURE__*/(() => {
  class TuiInputTagExample2 {
    constructor() {
      this.search$ = new Subject/* Subject */.xQ();
      this.value = [];
      this.items$ = this.search$.pipe((0,switchMap/* switchMap */.w)(search => this.serverRequest(search).pipe((0,startWith/* startWith */.O)(null))), (0,startWith/* startWith */.O)(databaseMockData));
    }

    onSearchChange(search) {
      this.search$.next(search);
    }
    /**
     * Server request emulation
     */


    serverRequest(search) {
      const result = databaseMockData.filter(item => item.toLowerCase().includes(search.toLowerCase()));
      return (0,of.of)(result).pipe((0,delay/* delay */.g)(Math.random() * 1000 + 500));
    }

  }

  TuiInputTagExample2.ɵfac = function TuiInputTagExample2_Factory(t) {
    return new (t || TuiInputTagExample2)();
  };

  TuiInputTagExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample2,
    selectors: [["tui-input-tag-example-2"]],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange", "searchChange"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiInputTagExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputTagExample2_Template_tui_input_tag_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        })("searchChange", function TuiInputTagExample2_Template_tui_input_tag_searchChange_0_listener($event) {
          return ctx.onSearchChange($event);
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Choose your Pythons' ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputTagExample2_tui_data_list_wrapper_2_Template, 2, 3, "tui-data-list-wrapper", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
      }
    },
    directives: [input_tag_component/* TuiInputTagComponent */.P, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTagExample2;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/3/index.ts







let TuiInputTagExample3 = /*#__PURE__*/(() => {
  class TuiInputTagExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI([`I`, `love`, `Angular`])
      });
    }

  }

  TuiInputTagExample3.ɵfac = function TuiInputTagExample3_Factory(t) {
    return new (t || TuiInputTagExample3)();
  };

  TuiInputTagExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample3,
    selectors: [["tui-input-tag-example-3"]],
    decls: 13,
    vars: 6,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "testValue", 1, "tui-space_top-2", 3, "tuiTextfieldCleaner"]],
    template: function TuiInputTagExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-tag", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " I'm a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "i");
        fesm2015_core/* ɵɵtext */._uU(4, "placeholder");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-tag", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " I'm a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "i");
        fesm2015_core/* ɵɵtext */._uU(8, "placeholder");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-input-tag", 3);
        fesm2015_core/* ɵɵtext */._uU(10, " I'm a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "i");
        fesm2015_core/* ɵɵtext */._uU(12, "placeholder");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_tag_component/* TuiInputTagComponent */.P, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTagExample3;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/4/index.ts














function TuiInputTagExample4_ng_container_4_tui_data_list_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 5);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r3, " ");
  }
}

function TuiInputTagExample4_ng_container_4_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputTagExample4_ng_container_4_tui_data_list_1_button_1_Template, 2, 2, "button", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.filtered);
  }
}

function TuiInputTagExample4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputTagExample4_ng_container_4_tui_data_list_1_Template, 2, 1, "tui-data-list", 3);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

const _c0 = function () {
  return [];
};

function createControlValidator(handler) {
  return ({
    value
  }) => {
    const invalidTags = value ? value.filter(handler) : cdk.EMPTY_ARRAY;
    return invalidTags.length > 0 ? {
      tags: new cdk.TuiValidationError(`Some tags are invalid`)
    } : null;
  };
}

const ITEMS = [`The Midnight`, `FM-84`, `Timecop1983`, `GUNSHIP`];

function tagValidator(tag) {
  return !/\d/.test(tag);
}

class TuiInputTagExample4 {
  constructor() {
    this.search = ``;
    this.tagValidator = tagValidator;
    this.control = new fesm2015_forms/* FormControl */.NI([], createControlValidator(tagValidator));
  }

  get filtered() {
    var _a;

    return this.filterBy(this.search, (_a = this.control.value) !== null && _a !== void 0 ? _a : []);
  }

  filterBy(search, value) {
    return ITEMS.filter(item => (0,cdk.TUI_DEFAULT_MATCHER)(item, search) && !value.includes(item));
  }

}

TuiInputTagExample4.ɵfac = function TuiInputTagExample4_Factory(t) {
  return new (t || TuiInputTagExample4)();
};

TuiInputTagExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiInputTagExample4,
  selectors: [["tui-input-tag-example-4"]],
  decls: 8,
  vars: 12,
  consts: [[1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "tagValidator", "search", "searchChange"], [4, "ngIf"], [3, "formControl", "error"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"]],
  template: function TuiInputTagExample4_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
      fesm2015_core/* ɵɵtext */._uU(1, "In this sample, tags with digits are invalid");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-tag", 0);
      fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function TuiInputTagExample4_Template_tui_input_tag_searchChange_2_listener($event) {
        return ctx.search = $event;
      });
      fesm2015_core/* ɵɵtext */._uU(3, " Try it ");
      fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputTagExample4_ng_container_4_Template, 2, 0, "ng-container", 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelement */._UZ(5, "tui-error", 2);
      fesm2015_core/* ɵɵpipe */.ALo(6, "async");
      fesm2015_core/* ɵɵpipe */.ALo(7, "tuiFieldError");
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tuiTextfieldLabelOutside", true)("tagValidator", ctx.tagValidator)("search", ctx.search);
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.filtered.length);
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 7, fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 9, fesm2015_core/* ɵɵpureFunction0 */.DdM(11, _c0))));
    }
  },
  directives: [input_tag_component/* TuiInputTagComponent */.P, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, common/* NgIf */.O5, error_component/* TuiErrorComponent */.v, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v],
  pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiInputTagExample4.prototype, "filterBy", null);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/5/index.ts







let TuiInputTagExample5 = /*#__PURE__*/(() => {
  class TuiInputTagExample5 {
    constructor() {
      this.value = [`گراهام چپمن`, `جان کلیز`];
    }

  }

  TuiInputTagExample5.ɵfac = function TuiInputTagExample5_Factory(t) {
    return new (t || TuiInputTagExample5)();
  };

  TuiInputTagExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample5,
    selectors: [["tui-input-tag-example-5"]],
    decls: 1,
    vars: 3,
    consts: [["tuiTextfieldIconLeft", "tuiIconSearchLarge", "tuiHintContent", "\u0645\u0648\u0646\u062A\u06CC \u067E\u0627\u06CC\u062A\u0648\u0646", 1, "input", 3, "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]],
    template: function TuiInputTagExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputTagExample5_Template_tui_input_tag_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
      }
    },
    directives: [input_tag_component/* TuiInputTagComponent */.P, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, hint_options_directive/* TuiHintOptionsDirective */.b, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".input[_ngcontent-%COMP%]{max-width:20rem;direction:rtl;text-align:right}"],
    changeDetection: 0
  });
  return TuiInputTagExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/6/index.ts






let TuiInputTagExample6 = /*#__PURE__*/(() => {
  class TuiInputTagExample6 {
    constructor() {
      this.value = [`not`, `unique`, `tags, with`, `custom`, `separator`, `separator`];
      this.customSeparator = `;`;
    }

  }

  TuiInputTagExample6.ɵfac = function TuiInputTagExample6_Factory(t) {
    return new (t || TuiInputTagExample6)();
  };

  TuiInputTagExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample6,
    selectors: [["tui-input-tag-example-6"]],
    decls: 1,
    vars: 5,
    consts: [["tuiTextfieldIconLeft", "tuiIconSearchLarge", 1, "input", 3, "uniqueTags", "separator", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]],
    template: function TuiInputTagExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputTagExample6_Template_tui_input_tag_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("uniqueTags", false)("separator", ctx.customSeparator)("tuiTextfieldCleaner", true)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
      }
    },
    directives: [input_tag_component/* TuiInputTagComponent */.P, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".input[_ngcontent-%COMP%]{max-width:20rem}"],
    changeDetection: 0
  });
  return TuiInputTagExample6;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/examples/7/index.ts




let TuiInputTagExample7 = /*#__PURE__*/(() => {
  class TuiInputTagExample7 {
    constructor() {
      this.value = [`Use`, `space`, `button`];
      this.customSeparator = /[\s,]/; // Use space or comma to create new tag
    }

  }

  TuiInputTagExample7.ɵfac = function TuiInputTagExample7_Factory(t) {
    return new (t || TuiInputTagExample7)();
  };

  TuiInputTagExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTagExample7,
    selectors: [["tui-input-tag-example-7"]],
    decls: 1,
    vars: 3,
    consts: [[1, "b-form", 3, "separator", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]],
    template: function TuiInputTagExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputTagExample7_Template_tui_input_tag_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("separator", ctx.customSeparator)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
      }
    },
    directives: [input_tag_component/* TuiInputTagComponent */.P, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTagExample7;
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon.directive.ts
var textfield_icon_directive = __webpack_require__(88494);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/input-tag.component.ts

































function ExampleTuiInputTagComponent_ng_template_1_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Use power of RegExp to forbid spaces inside tags via property ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "[separator]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " . ");
  }
}

function ExampleTuiInputTagComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-input-tag-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-input-tag-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-input-tag-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-input-tag-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-input-tag-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-input-tag-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiInputTagComponent_ng_template_1_ng_template_16_Template, 4, 0, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-input-tag-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(17);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7)("description", _r3);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-tag", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template_tui_input_tag_searchChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r16.search = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Please enter Pythons' names ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r5.control)("tuiDropdownAlign", ctx_r5.dropdownAlign)("tuiDropdownDirection", ctx_r5.dropdownDirection)("tuiDropdownLimitWidth", ctx_r5.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r5.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r5.dropdownMaxHeight)("tuiHintContent", ctx_r5.hintContent)("tuiHintDirection", ctx_r5.hintDirection)("tuiHintAppearance", ctx_r5.hintAppearance)("tuiTextfieldIcon", ctx_r5.icon)("tuiTextfieldIconLeft", ctx_r5.iconLeft)("tuiTextfieldCleaner", ctx_r5.cleaner)("tuiTextfieldLabelOutside", ctx_r5.labelOutside)("tuiTextfieldSize", ctx_r5.size)("focusable", ctx_r5.focusable)("disabledItemHandler", ctx_r5.disabledItemHandler)("editable", ctx_r5.editable)("expandable", ctx_r5.expandable)("uniqueTags", ctx_r5.uniqueTags)("separator", ctx_r5.separator)("readOnly", ctx_r5.readOnly)("tagValidator", ctx_r5.tagValidator)("inputHidden", ctx_r5.inputHidden)("pseudoHover", ctx_r5.pseudoHovered)("pseudoActive", ctx_r5.pseudoPressed)("pseudoFocus", ctx_r5.pseudoFocused)("pseudoInvalid", ctx_r5.pseudoInvalid)("search", ctx_r5.search);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 25);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Ability to enter unique or non-unique tags ");
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiInputTagComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 34);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputTagComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template, 2, 28, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputTagComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputTagComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.search = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputTagComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputTagComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.uniqueTags = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputTagComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.editable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputTagComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.expandable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputTagComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.separator = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputTagComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.inputHidden = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputTagComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.tagValidator = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputTagComponent_ng_template_2_ng_template_12_Template, 3, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.icon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "inherited-documentation", 23);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.search);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.uniqueTags);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.editable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.expandable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.separatorVariants)("documentationPropertyValue", ctx_r1.separator);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.inputHidden);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.tagValidatorVariants)("documentationPropertyValue", ctx_r1.tagValidator);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiInputTagComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 35);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 36);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 38);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 39);
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

let ExampleTuiInputTagComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputTagComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 9600).then(__webpack_require__.t.bind(__webpack_require__, 9600, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 22524).then(__webpack_require__.t.bind(__webpack_require__, 22524, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 58335).then(__webpack_require__.t.bind(__webpack_require__, 58335, 17)),
        HTML: __webpack_require__.e(/* import() */ 32119).then(__webpack_require__.t.bind(__webpack_require__, 32119, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 48276).then(__webpack_require__.t.bind(__webpack_require__, 48276, 17)),
        HTML: __webpack_require__.e(/* import() */ 7633).then(__webpack_require__.t.bind(__webpack_require__, 7633, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 18290).then(__webpack_require__.t.bind(__webpack_require__, 18290, 17)),
        HTML: __webpack_require__.e(/* import() */ 88939).then(__webpack_require__.t.bind(__webpack_require__, 88939, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 37105).then(__webpack_require__.t.bind(__webpack_require__, 37105, 17)),
        HTML: __webpack_require__.e(/* import() */ 1702).then(__webpack_require__.t.bind(__webpack_require__, 1702, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 69211).then(__webpack_require__.t.bind(__webpack_require__, 69211, 17)),
        HTML: __webpack_require__.e(/* import() */ 20139).then(__webpack_require__.t.bind(__webpack_require__, 20139, 17)),
        LESS: __webpack_require__.e(/* import() */ 44686).then(__webpack_require__.t.bind(__webpack_require__, 44686, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 83429).then(__webpack_require__.t.bind(__webpack_require__, 83429, 17)),
        HTML: __webpack_require__.e(/* import() */ 32927).then(__webpack_require__.t.bind(__webpack_require__, 53072, 17)),
        LESS: __webpack_require__.e(/* import() */ 13449).then(__webpack_require__.t.bind(__webpack_require__, 13449, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 80627).then(__webpack_require__.t.bind(__webpack_require__, 80627, 17)),
        HTML: __webpack_require__.e(/* import() */ 72114).then(__webpack_require__.t.bind(__webpack_require__, 72114, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI([`John Cleese`, `Eric Idle`, `Michael Palin`], fesm2015_forms/* Validators.required */.kI.required);
      this.editable = true;
      this.expandable = true;
      this.uniqueTags = true;
      this.separatorVariants = [`,`, `;`, /[\d]/, /[\s,]/];
      this.separator = this.separatorVariants[0];
      this.iconVariants = [`tuiIconSearchLarge`];
      this.icon = ``;
      this.iconAlignVariants = [`left`, `right`];
      this.iconAlign = this.iconAlignVariants[1];
      this.maxLengthVariants = [10, 20];
      this.maxLength = null;
      this.search = ``;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[this.sizeVariants.length - 1];
      this.tagValidatorVariants = [cdk.ALWAYS_TRUE_HANDLER, item => item === `test`, item => item !== `mail`];
      this.tagValidator = this.tagValidatorVariants[0];
      this.inputHidden = false;
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, item => String(item)[0] === `T`];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
    }

  }

  ExampleTuiInputTagComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputTagComponent_BaseFactory;
    return function ExampleTuiInputTagComponent_Factory(t) {
      return (ɵExampleTuiInputTagComponent_BaseFactory || (ɵExampleTuiInputTagComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputTagComponent)))(t || ExampleTuiInputTagComponent);
    };
  }();

  ExampleTuiInputTagComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputTagComponent,
    selectors: [["example-input-tag"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputTagComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_682295232355881622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputTag{$closeTagCode} allows to input several tags with autocomplete and list in dropdown. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_682295232355881622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟afcbf8b99d1a559f2d4d82b878687bf91c4dc49b␟682295232355881622:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputTag${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to input several tags with autocomplete and list in dropdown. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_989459206984870037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__5 = goog.getMsg("Async items loading");
        i18n_4 = MSG_EXTERNAL_989459206984870037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟1abaa1c3acfb9987cf9a1c84422e8baef7af845e␟989459206984870037:Async items loading`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__7 = goog.getMsg("sizes");
        i18n_6 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3176539569174538377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__9 = goog.getMsg("Custom validation");
        i18n_8 = MSG_EXTERNAL_3176539569174538377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟9f773bc90c4bb84c592f2ed4763f1dbc3320e7e3␟3176539569174538377:Custom validation`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2885218428372331823$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__11 = goog.getMsg("Direction: RTL");
        i18n_10 = MSG_EXTERNAL_2885218428372331823$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4936688169379716572$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__13 = goog.getMsg("Custom separator");
        i18n_12 = MSG_EXTERNAL_4936688169379716572$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟0d231f5447e6c607e870e25fa79277b55c41c3dd␟4936688169379716572:Custom separator`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2465031901930244222$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__15 = goog.getMsg("No spaces inside tags");
        i18n_14 = MSG_EXTERNAL_2465031901930244222$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟732faab5edc3c0659d1ad673424d45f843542394␟2465031901930244222:No spaces inside tags`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___17 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1886174402380484199$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___19 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside (emits {$startTagCode}null{$closeTagCode} when item from list selected) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1886174402380484199$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: when item from list selected) `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7890132259542012587$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___21 = goog.getMsg(" Handler for deactivation some tags ");
        i18n_20 = MSG_EXTERNAL_7890132259542012587$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟602d2ca3dd3d6bd61166eb562cbc5a7d3ba64eb6␟7890132259542012587: Handler for deactivation some tags `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6978135358566748527$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___23 = goog.getMsg(" Tags are editable ");
        i18n_22 = MSG_EXTERNAL_6978135358566748527$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟6287011b40da302e14ccffef5a614afb7cc7e283␟6978135358566748527: Tags are editable `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4902838123072095655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___25 = goog.getMsg(" Control height can be expanded to show all tags ");
        i18n_24 = MSG_EXTERNAL_4902838123072095655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5475543650697092168$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___27 = goog.getMsg(" String or RegExp to separate tags ");
        i18n_26 = MSG_EXTERNAL_5475543650697092168$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟30f5c50c55cc36d40d8bfec07bf28cee6bb9f1b5␟5475543650697092168: String or RegExp to separate tags `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1436849720143811983$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___29 = goog.getMsg(" Hide input field. For example, to prevent adding new tags ");
        i18n_28 = MSG_EXTERNAL_1436849720143811983$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟6ce45bd4a1fda17e0ac98d65053d1109077c6d83␟1436849720143811983: Hide input field. For example, to prevent adding new tags `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3924647870684137368$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___31 = goog.getMsg(" A function that cheks that tag is valid ");
        i18n_30 = MSG_EXTERNAL_3924647870684137368$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟24fc826e9f6d1737ab827b2db51272e81e476b65␟3924647870684137368: A function that cheks that tag is valid `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7918098038633269309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___33 = goog.getMsg(" Icon content. If content is a string, it is used as stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_7918098038633269309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟86a120364edaa105c400be3e6a0b84d9e6789a6a␟7918098038633269309: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8882593062505514869$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__35 = goog.getMsg(" Import {$startTagCode}TuiInputTagModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_8882593062505514869$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟a48b1b6fe4f1a0418758cda1de24c138cf8d5ad5␟8882593062505514869: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputTagModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__37 = goog.getMsg("Add to the template:");
        i18n_36 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputTag", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "async", "heading", i18n_4, 3, "content"], ["id", "sizes", "heading", i18n_6, 3, "content"], ["id", "validation", "heading", i18n_8, 3, "content"], ["id", "rtl", "heading", i18n_10, 3, "content"], ["id", "separator", "heading", i18n_12, 3, "content"], ["id", "no-spaces-inside-tags", "heading", i18n_14, 3, "content", "description"], ["forbidSpacesDescription", ""], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "uniqueTags", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expandable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "separator", "documentationPropertyMode", "input", "documentationPropertyType", "string | RegExp", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "inputHidden", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tagValidator", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldIcon", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "tuiTextfieldIcon", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "focusable", "disabledItemHandler", "editable", "expandable", "uniqueTags", "separator", "readOnly", "tagValidator", "inputHidden", "pseudoHover", "pseudoActive", "pseudoFocus", "pseudoInvalid", "search", "searchChange"], i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, ["tuiLink", "", "routerLink", "/services/svg-service"], [1, "b-demo-steps"], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputTagComponent_ng_template_1_Template, 19, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputTagComponent_ng_template_2_Template, 14, 16, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputTagComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputTagExample1, TuiInputTagExample2, TuiInputTagExample3, TuiInputTagExample4, TuiInputTagExample5, TuiInputTagExample6, TuiInputTagExample7, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_tag_component/* TuiInputTagComponent */.P, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, hint_options_directive/* TuiHintOptionsDirective */.b, textfield_icon_directive/* TuiTextfieldIconDirective */.AW, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputTagComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-tag/input-tag.module.ts

















let ExampleTuiInputTagModule = /*#__PURE__*/(() => {
  class ExampleTuiInputTagModule {}

  ExampleTuiInputTagModule.ɵfac = function ExampleTuiInputTagModule_Factory(t) {
    return new (t || ExampleTuiInputTagModule)();
  };

  ExampleTuiInputTagModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputTagModule
  });
  ExampleTuiInputTagModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiLinkModule, kit.TuiInputTagModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputTagComponent))]]
  });
  return ExampleTuiInputTagModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputTagModule, {
    declarations: [ExampleTuiInputTagComponent, TuiInputTagExample1, TuiInputTagExample2, TuiInputTagExample3, TuiInputTagExample4, TuiInputTagExample5, TuiInputTagExample6, TuiInputTagExample7],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiLinkModule, kit.TuiInputTagModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputTagComponent]
  });
})();

/***/ })

}]);