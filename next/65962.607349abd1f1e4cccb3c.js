"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65962],{

/***/ 65962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFilterByInputModule": () => (/* binding */ ExampleTuiFilterByInputModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/kit/pipes/filter-by-input/filter-by-input.pipe.ts
var filter_by_input_pipe = __webpack_require__(68800);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter-by-input/examples/1/index.ts









function TuiFilterByInputExample1_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 3);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiFilterByInput");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx_r0.items));
  }
}

let TuiFilterByInputExample1 = /*#__PURE__*/(() => {
  class TuiFilterByInputExample1 {
    constructor() {
      this.items = [`John Cleese`, `Eric Idle`, `Graham Chapman`, `Michael Palin`, `Terry Gilliam`, `Terry Jones`];
      this.form = new fesm2015_forms/* FormGroup */.cw({
        user: new fesm2015_forms/* FormControl */.NI()
      });
    }

  }

  TuiFilterByInputExample1.ɵfac = function TuiFilterByInputExample1_Factory(t) {
    return new (t || TuiFilterByInputExample1)();
  };

  TuiFilterByInputExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterByInputExample1,
    selectors: [["tui-filter-by-input-example-1"]],
    decls: 4,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "user"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiFilterByInputExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " User ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiFilterByInputExample1_tui_data_list_wrapper_3_Template, 2, 3, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [filter_by_input_pipe/* TuiFilterByInputPipe */.b],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFilterByInputExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/combo-box/combo-box.component.ts
var combo_box_component = __webpack_require__(41967);
// EXTERNAL MODULE: ./projects/kit/components/combo-box/combo-box.directive.ts
var combo_box_directive = __webpack_require__(89290);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter-by-input/examples/2/index.ts









function TuiFilterByInputExample2_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 3);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiFilterByInput");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind2 */.xi3(1, 1, ctx_r0.items, ctx_r0.matcher));
  }
}

let TuiFilterByInputExample2 = /*#__PURE__*/(() => {
  class TuiFilterByInputExample2 {
    constructor() {
      this.items = [`John Cleese`, `Eric Idle`, `Graham Chapman`, `Michael Palin`, `Terry Gilliam`, `Terry Jones`];
      this.form = new fesm2015_forms/* FormGroup */.cw({
        user: new fesm2015_forms/* FormControl */.NI()
      });

      this.matcher = (name, search) => name.split(` `).pop().toLowerCase().startsWith(search.toLowerCase());
    }

  }

  TuiFilterByInputExample2.ɵfac = function TuiFilterByInputExample2_Factory(t) {
    return new (t || TuiFilterByInputExample2)();
  };

  TuiFilterByInputExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterByInputExample2,
    selectors: [["tui-filter-by-input-example-2"]],
    decls: 4,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "user"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiFilterByInputExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-combo-box", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Search by last name ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiFilterByInputExample2_tui_data_list_wrapper_3_Template, 2, 4, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, combo_box_component/* TuiComboBoxComponent */._, combo_box_directive/* TuiComboBoxDirective */.m, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [filter_by_input_pipe/* TuiFilterByInputPipe */.b],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFilterByInputExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/pipes/filter-by-input/filter-by-input-with.pipe.ts
var filter_by_input_with_pipe = __webpack_require__(30114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter-by-input/examples/3/index.ts











function TuiFilterByInputExample3_tui_data_list_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2.name, " ");
  }
}

function TuiFilterByInputExample3_tui_data_list_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiFilterByInputExample3_tui_data_list_3_button_1_Template, 2, 2, "button", 3);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFilterByInputWith");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind2 */.xi3(2, 1, ctx_r0.items, ctx_r0.stringify));
  }
}

let TuiFilterByInputExample3 = /*#__PURE__*/(() => {
  class TuiFilterByInputExample3 {
    constructor() {
      this.items = [{
        name: `John Cleese`
      }, {
        name: `Eric Idle`
      }, {
        name: `Graham Chapman`
      }, {
        name: `Michael Palin`
      }, {
        name: `Terry Gilliam`
      }, {
        name: `Terry Jones`
      }];
      this.form = new fesm2015_forms/* FormGroup */.cw({
        user: new fesm2015_forms/* FormControl */.NI()
      });

      this.stringify = ({
        name
      }) => name;
    }

  }

  TuiFilterByInputExample3.ɵfac = function TuiFilterByInputExample3_Factory(t) {
    return new (t || TuiFilterByInputExample3)();
  };

  TuiFilterByInputExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterByInputExample3,
    selectors: [["tui-filter-by-input-example-3"]],
    decls: 4,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "user", 3, "stringify"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"]],
    template: function TuiFilterByInputExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-combo-box", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " User ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiFilterByInputExample3_tui_data_list_3_Template, 3, 4, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("stringify", ctx.stringify);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, combo_box_component/* TuiComboBoxComponent */._, combo_box_directive/* TuiComboBoxDirective */.m, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v],
    pipes: [filter_by_input_with_pipe/* TuiFilterByInputWithPipe */.Y],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFilterByInputExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter-by-input/filter-by-input.component.ts









function ExampleTuiFilterByInputComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-filter-by-input-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-filter-by-input-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-filter-by-input-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiFilterByInputComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 8);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiFilterByInputComponent = /*#__PURE__*/(() => {
  class ExampleTuiFilterByInputComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 69031).then(__webpack_require__.t.bind(__webpack_require__, 69031, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 9370).then(__webpack_require__.t.bind(__webpack_require__, 9370, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 60077).then(__webpack_require__.t.bind(__webpack_require__, 60077, 17)),
        HTML: __webpack_require__.e(/* import() */ 83339).then(__webpack_require__.t.bind(__webpack_require__, 83339, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 16699).then(__webpack_require__.t.bind(__webpack_require__, 16699, 17)),
        HTML: __webpack_require__.e(/* import() */ 2013).then(__webpack_require__.t.bind(__webpack_require__, 2013, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 97208).then(__webpack_require__.t.bind(__webpack_require__, 97208, 17)),
        HTML: __webpack_require__.e(/* import() */ 67705).then(__webpack_require__.t.bind(__webpack_require__, 67705, 17))
      };
    }

  }

  ExampleTuiFilterByInputComponent.ɵfac = function ExampleTuiFilterByInputComponent_Factory(t) {
    return new (t || ExampleTuiFilterByInputComponent)();
  };

  ExampleTuiFilterByInputComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFilterByInputComponent,
    selectors: [["example-tui-filter-by-input"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4997832321224755259$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__4 = goog.getMsg("Custom matcher");
        i18n_3 = MSG_EXTERNAL_4997832321224755259$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟e44cbeb2204ab3f18f2fc48550ff5f3154790975␟4997832321224755259:Custom matcher`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4166966430858792974$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__6 = goog.getMsg("Custom stringify");
        i18n_5 = MSG_EXTERNAL_4166966430858792974$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟8ea1c797573c9676df67b83748a331433703a6da␟4166966430858792974:Custom stringify`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7316437354589455408$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__7 = goog.getMsg(" Pipe for filtering an array by value entered in a textfield {$startTagTuiDocExample}{$startTagTuiFilterByInputExample_1}{$closeTagTuiFilterByInputExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiFilterByInputExample_2}{$closeTagTuiFilterByInputExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiFilterByInputExample_3}{$closeTagTuiFilterByInputExample_3}{$closeTagTuiDocExample}", {
          "startTagTuiDocExample": "\uFFFD#1\uFFFD",
          "startTagTuiFilterByInputExample_1": "\uFFFD#2\uFFFD",
          "closeTagTuiFilterByInputExample_1": "\uFFFD/#2\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#3\uFFFD",
          "startTagTuiFilterByInputExample_2": "\uFFFD#4\uFFFD",
          "closeTagTuiFilterByInputExample_2": "\uFFFD/#4\uFFFD",
          "startTagTuiDocExample_2": "\uFFFD#5\uFFFD",
          "startTagTuiFilterByInputExample_3": "\uFFFD#6\uFFFD",
          "closeTagTuiFilterByInputExample_3": "\uFFFD/#6\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7316437354589455408$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__7;
      } else {
        i18n_0 = $localize`:␟bc963fb63de70d2e76559d18d31fe0c914d05a74␟7316437354589455408: Pipe for filtering an array by value entered in a textfield ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2012985248889759702$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiFilterByInputPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_2012985248889759702$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a2a28ebef82d20cde2d7eaa173ac3450dc1f83f3␟2012985248889759702: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFilterByInputPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4082988165397565907$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__11 = goog.getMsg("Use pipe in template under Taiga UI control:");
        i18n_10 = MSG_EXTERNAL_4082988165397565907$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_BY_INPUT_FILTER_BY_INPUT_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟8dbd1dc3f7db0c83ba44d241601f87aaaccb1e13␟4082988165397565907:Use pipe in template under Taiga UI control:`;
      }

      return [["header", "FilterByInput", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "base", "heading", i18n_1, 3, "content"], ["id", "matcher", "heading", i18n_3, 3, "content"], ["id", "stringify", "heading", i18n_5, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFilterByInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFilterByInputComponent_ng_template_1_Template, 7, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiFilterByInputComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiFilterByInputExample1, TuiFilterByInputExample2, TuiFilterByInputExample3, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiFilterByInputComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter-by-input/filter-by-input.module.ts












let ExampleTuiFilterByInputModule = /*#__PURE__*/(() => {
  class ExampleTuiFilterByInputModule {}

  ExampleTuiFilterByInputModule.ɵfac = function ExampleTuiFilterByInputModule_Factory(t) {
    return new (t || ExampleTuiFilterByInputModule)();
  };

  ExampleTuiFilterByInputModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFilterByInputModule
  });
  ExampleTuiFilterByInputModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiFilterByInputPipeModule, public_api/* TuiAddonDocModule */.fV, kit.TuiInputModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, kit.TuiComboBoxModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFilterByInputComponent))]]
  });
  return ExampleTuiFilterByInputModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFilterByInputModule, {
    declarations: [ExampleTuiFilterByInputComponent, TuiFilterByInputExample1, TuiFilterByInputExample2, TuiFilterByInputExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiFilterByInputPipeModule, public_api/* TuiAddonDocModule */.fV, kit.TuiInputModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, kit.TuiComboBoxModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiFilterByInputComponent]
  });
})();

/***/ })

}]);