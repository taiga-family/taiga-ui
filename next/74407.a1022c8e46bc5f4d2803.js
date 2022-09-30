"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[74407],{

/***/ 74407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiGroupModule": () => (/* binding */ ExampleTuiGroupModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select.component.ts
var multi_select_component = __webpack_require__(93251);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.directive.ts
var multi_select_group_directive = __webpack_require__(20501);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/examples/1/index.ts

















function TuiGroupExample1_tui_data_list_wrapper_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 11);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

const _c0 = function () {
  return [];
};

let TuiGroupExample1 = /*#__PURE__*/(() => {
  class TuiGroupExample1 {
    constructor() {
      this.items = [`Option 1`, `Option 2`, `Option 3`];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        multiSelectControl: new fesm2015_forms/* FormControl */.NI([], fesm2015_forms/* Validators.required */.kI.required),
        testValue3: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiGroupExample1.ɵfac = function TuiGroupExample1_Factory(t) {
    return new (t || TuiGroupExample1)();
  };

  TuiGroupExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiGroupExample1,
    selectors: [["tui-group-example-1"]],
    decls: 23,
    vars: 22,
    consts: [[1, "input-wrapper", 3, "formGroup"], ["tuiGroup", "", 1, "group"], ["formControlName", "testValue", "tuiHintContent", "Write a number", 1, "tui-group__inherit-item"], ["tuiTextfield", "", "placeholder", "House"], ["formControlName", "testValue", 3, "error"], ["formControlName", "multiSelectControl", "tuiHintContent", "Write house building", 1, "tui-group__inherit-item", 3, "tuiTextfieldLabelOutside", "editable", "expandable"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["formControlName", "multiSelectControl", 3, "error"], ["formControlName", "testValue3", "tuiHintContent", "Write an apartment number only", 1, "tui-group__inherit-item"], ["tuiTextfield", "", "placeholder", "Apartment number"], ["formControlName", "testValue3", 3, "error"], ["tuiMultiSelectGroup", "", 3, "items"]],
    template: function TuiGroupExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " House ");
        fesm2015_core/* ɵɵelement */._UZ(5, "input", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-error", 4);
        fesm2015_core/* ɵɵpipe */.ALo(7, "async");
        fesm2015_core/* ɵɵpipe */.ALo(8, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-multi-select", 5);
        fesm2015_core/* ɵɵtext */._uU(11, " Building ");
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiGroupExample1_tui_data_list_wrapper_12_Template, 1, 1, "tui-data-list-wrapper", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-error", 7);
        fesm2015_core/* ɵɵpipe */.ALo(14, "async");
        fesm2015_core/* ɵɵpipe */.ALo(15, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-input", 8);
        fesm2015_core/* ɵɵtext */._uU(18, " Apartment ");
        fesm2015_core/* ɵɵelement */._UZ(19, "input", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(20, "tui-error", 10);
        fesm2015_core/* ɵɵpipe */.ALo(21, "async");
        fesm2015_core/* ɵɵpipe */.ALo(22, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 7, fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 9, fesm2015_core/* ɵɵpureFunction0 */.DdM(19, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("editable", false)("expandable", false);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(14, 11, fesm2015_core/* ɵɵpipeBind1 */.lcZ(15, 13, fesm2015_core/* ɵɵpureFunction0 */.DdM(20, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(21, 15, fesm2015_core/* ɵɵpipeBind1 */.lcZ(22, 17, fesm2015_core/* ɵɵpureFunction0 */.DdM(21, _c0))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, group_directive/* TuiGroupDirective */.g, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_component/* TuiTextfieldComponent */.M, error_component/* TuiErrorComponent */.v, multi_select_component/* TuiMultiSelectComponent */.V, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".group[_ngcontent-%COMP%]{max-width:30.25rem}"],
    changeDetection: 0
  });
  return TuiGroupExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/examples/2/index.ts



let TuiGroupExample2 = /*#__PURE__*/(() => {
  class TuiGroupExample2 {}

  TuiGroupExample2.ɵfac = function TuiGroupExample2_Factory(t) {
    return new (t || TuiGroupExample2)();
  };

  TuiGroupExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiGroupExample2,
    selectors: [["tui-group-example-2"]],
    decls: 6,
    vars: 1,
    consts: [["tuiGroup", "", 1, "group", 3, "collapsed"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "l"], ["tuiIconButton", "", "type", "button", "appearance", "outline", "size", "l", "title", "A sample of icon-button in a group", "icon", "tuiIconChevronDownLarge", 1, "tui-group__auto-width-item"]],
    template: function TuiGroupExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Button 1 ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " Button 2 ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(5, "button", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true);
      }
    },
    directives: [group_directive/* TuiGroupDirective */.g, button_component/* TuiButtonComponent */.v],
    styles: [".group[_ngcontent-%COMP%]{max-width:30.25rem}"],
    changeDetection: 0
  });
  return TuiGroupExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/radio-block/radio-block.component.ts
var radio_block_component = __webpack_require__(61423);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/examples/3/index.ts





let TuiGroupExample3 = /*#__PURE__*/(() => {
  class TuiGroupExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`orange`)
      });
    }

  }

  TuiGroupExample3.ɵfac = function TuiGroupExample3_Factory(t) {
    return new (t || TuiGroupExample3)();
  };

  TuiGroupExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiGroupExample3,
    selectors: [["tui-group-example-3"]],
    decls: 7,
    vars: 2,
    consts: [["tuiGroup", "", "orientation", "vertical", 1, "group", 3, "collapsed", "formGroup"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "orange"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "apple"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "pineapple"]],
    template: function TuiGroupExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-radio-block", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Oranges ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-radio-block", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Apples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-block", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Pineapples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true)("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, group_directive/* TuiGroupDirective */.g, fesm2015_forms/* FormGroupDirective */.sg, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiGroupExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/examples/4/index.ts





let TuiGroupExample4 = /*#__PURE__*/(() => {
  class TuiGroupExample4 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(``)
      });
    }

  }

  TuiGroupExample4.ɵfac = function TuiGroupExample4_Factory(t) {
    return new (t || TuiGroupExample4)();
  };

  TuiGroupExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiGroupExample4,
    selectors: [["tui-group-example-4"]],
    decls: 9,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2643401854460028912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_EXAMPLES_4_INDEX_TS_1 = goog.getMsg("Directive helps to avoid extra layers of HTML");
        i18n_0 = MSG_EXTERNAL_2643401854460028912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_EXAMPLES_4_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟3168c38bbf89a73903196f867a4e4f002f565bb2␟2643401854460028912:Directive helps to avoid extra layers of HTML`;
      }

      return [i18n_0, ["tuiGroup", "", 3, "collapsed", "formGroup"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "orange"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "apple"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "pineapple"]];
    },
    template: function TuiGroupExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-radio-block", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Oranges ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-block", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Apples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-radio-block", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Pineapples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true)("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, group_directive/* TuiGroupDirective */.g, fesm2015_forms/* FormGroupDirective */.sg, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiGroupExample4;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/group.component.ts

















function ExampleTuiGroupComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 5);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵelement */._UZ(7, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "code");
    fesm2015_core/* ɵɵelement */._UZ(11, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-group-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-group-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-group-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-group-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiGroupComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiGroupComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiGroupComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiGroupComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiGroupComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 13);
    fesm2015_core/* ɵɵtext */._uU(3, " Button 1 ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 13);
    fesm2015_core/* ɵɵtext */._uU(5, " Button 2 ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 13);
    fesm2015_core/* ɵɵtext */._uU(7, " Button 3 ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiGroupComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.adaptive = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiGroupComponent_ng_template_2_ng_template_10_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.collapsed = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiGroupComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.rounded = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiGroupComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.orientation = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiGroupComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("adaptive", ctx_r1.adaptive)("collapsed", ctx_r1.collapsed)("rounded", ctx_r1.rounded)("orientation", ctx_r1.orientation)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.adaptive);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.collapsed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.rounded);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiGroupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 25);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 28);
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

let ExampleTuiGroupComponent = /*#__PURE__*/(() => {
  class ExampleTuiGroupComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 58739).then(__webpack_require__.t.bind(__webpack_require__, 58739, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 29998).then(__webpack_require__.t.bind(__webpack_require__, 29998, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 37281).then(__webpack_require__.t.bind(__webpack_require__, 37281, 17)),
        HTML: __webpack_require__.e(/* import() */ 89233).then(__webpack_require__.t.bind(__webpack_require__, 89233, 17)),
        LESS: __webpack_require__.e(/* import() */ 32132).then(__webpack_require__.t.bind(__webpack_require__, 32132, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 18668).then(__webpack_require__.t.bind(__webpack_require__, 18668, 17)),
        HTML: __webpack_require__.e(/* import() */ 48588).then(__webpack_require__.t.bind(__webpack_require__, 48588, 17)),
        LESS: __webpack_require__.e(/* import() */ 436).then(__webpack_require__.t.bind(__webpack_require__, 436, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 47052).then(__webpack_require__.t.bind(__webpack_require__, 47052, 17)),
        HTML: __webpack_require__.e(/* import() */ 43841).then(__webpack_require__.t.bind(__webpack_require__, 43841, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 66984).then(__webpack_require__.t.bind(__webpack_require__, 66984, 17)),
        HTML: __webpack_require__.e(/* import() */ 9978).then(__webpack_require__.t.bind(__webpack_require__, 29928, 17))
      };
      this.adaptive = false;
      this.rounded = true;
      this.collapsed = false;
      this.orientationVariants = [`horizontal`, `vertical`];
      this.orientation = this.orientationVariants[0];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
    }

  }

  ExampleTuiGroupComponent.ɵfac = function ExampleTuiGroupComponent_Factory(t) {
    return new (t || ExampleTuiGroupComponent)();
  };

  ExampleTuiGroupComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiGroupComponent,
    selectors: [["example-group"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9202845046246637946$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__1 = goog.getMsg(" A directive for grouping other components. For example, {$startLink} textfields {$closeLink} and {$startLink_1} buttons {$closeLink} . ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink_1": "\uFFFD#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_9202845046246637946$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟1d847999fdb7d40b0c16d703c5f9e1e216329467␟9202845046246637946: A directive for grouping other components. For example, ${"\uFFFD#2\uFFFD"}:START_LINK: textfields ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: buttons ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_513351405665328906$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__3 = goog.getMsg(" Items take all available width. If you want to prevent it, use {$startTagCode} class=\" {$startTagStrong}tui-group__auto-width-item{$closeTagStrong} \" {$closeTagCode} . ", {
          "startTagCode": "\uFFFD#6\uFFFD",
          "startTagStrong": "\uFFFD#7\uFFFD",
          "closeTagStrong": "\uFFFD/#7\uFFFD",
          "closeTagCode": "\uFFFD/#6\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_513351405665328906$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟777f85a475cfeda513d7f45a151fad697ffb94b7␟513351405665328906: Items take all available width. If you want to prevent it, use ${"\uFFFD#6\uFFFD"}:START_TAG_CODE: class=" ${"\uFFFD#7\uFFFD"}:START_TAG_STRONG:tui-group__auto-width-item${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_STRONG: " ${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_CODE: . `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2142095385739153385$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__5 = goog.getMsg(" If you want item to inherit border radius, use class {$startTagCode} class=\" {$startTagStrong}tui-group__inherit-item{$closeTagStrong} \" {$closeTagCode}", {
          "startTagCode": "\uFFFD#10\uFFFD",
          "startTagStrong": "\uFFFD#11\uFFFD",
          "closeTagStrong": "\uFFFD/#11\uFFFD",
          "closeTagCode": "\uFFFD/#10\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2142095385739153385$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟77b727b4779fd86c3a6192ce9660fb21d45e6fd1␟2142095385739153385: If you want item to inherit border radius, use class ${"\uFFFD#10\uFFFD"}:START_TAG_CODE: class=" ${"\uFFFD#11\uFFFD"}:START_TAG_STRONG:tui-group__inherit-item${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_STRONG: " ${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_541844674688516032$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__7 = goog.getMsg("Vertical group");
        i18n_6 = MSG_EXTERNAL_541844674688516032$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟e1d09edd2cc0850c73ea6833ed81869140da6334␟541844674688516032:Vertical group`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6422270180661528002$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___9 = goog.getMsg(" Enable adaptive mode (for mobile) ");
        i18n_8 = MSG_EXTERNAL_6422270180661528002$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟18a1189a5c3b23654b7cb197f454cd73e2c17c40␟6422270180661528002: Enable adaptive mode (for mobile) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3110308235139033006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___11 = goog.getMsg(" Remove margin between items ( {$startTagCode}2px{$closeTagCode} by default) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_3110308235139033006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟5ed4d47c7039da2f1e004a0639323a2534dfb066␟3110308235139033006: Remove margin between items ( ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:2px${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default) `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3956809924808632175$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___13 = goog.getMsg(" The first and the last items are rounded ");
        i18n_12 = MSG_EXTERNAL_3956809924808632175$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟0a9f60d68a5d8757a2894e19745fce748bfc3733␟3956809924808632175: The first and the last items are rounded `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8118152330348299882$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___15 = goog.getMsg(" Horizontal or vertical direction of group ");
        i18n_14 = MSG_EXTERNAL_8118152330348299882$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟a9dec835970963973ebe7c67dca01e56515d3935␟8118152330348299882: Horizontal or vertical direction of group `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_470234041963629293$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___17 = goog.getMsg(" Size of rounding ");
        i18n_16 = MSG_EXTERNAL_470234041963629293$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟be479201f8685f79ea9beaee88f6123149f313dc␟470234041963629293: Size of rounding `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2237696305230569187$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiGroupModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_2237696305230569187$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟71ef1f6cc7c1717170b109a821b56e52dbf7a18c␟2237696305230569187: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiGroupModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Group", "package", "CORE", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["tuiLink", "", "routerLink", "/components/input"], ["tuiLink", "", "routerLink", "/components/button"], i18n_2, i18n_4, ["id", "inputs", "heading", "Inputs", 3, "content"], ["id", "buttons", "heading", "ButtonGroup", 3, "content"], ["id", "vertical", "heading", i18n_6, 3, "content"], ["id", "directive", "heading", "Directive", 3, "content"], ["tuiGroup", "", 1, "group", 3, "adaptive", "collapsed", "rounded", "orientation", "size"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "l"], ["documentationPropertyName", "adaptive", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiGroupComponent_ng_template_1_Template, 20, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiGroupComponent_ng_template_2_Template, 14, 12, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiGroupComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiGroupExample1, TuiGroupExample2, TuiGroupExample3, TuiGroupExample4, demo_component/* TuiDocDemoComponent */.F, group_directive/* TuiGroupDirective */.g, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".group[_ngcontent-%COMP%]{max-width:30.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiGroupComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/group/group.module.ts














let ExampleTuiGroupModule = /*#__PURE__*/(() => {
  class ExampleTuiGroupModule {}

  ExampleTuiGroupModule.ɵfac = function ExampleTuiGroupModule_Factory(t) {
    return new (t || ExampleTuiGroupModule)();
  };

  ExampleTuiGroupModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiGroupModule
  });
  ExampleTuiGroupModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiProjectClassModule, kit.TuiRadioBlockModule, core.TuiLinkModule, kit.TuiBadgeModule, core.TuiButtonModule, kit.TuiSelectModule, core.TuiGroupModule, kit.TuiInputModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiComboBoxModule, addon_commerce.TuiCurrencyPipeModule, kit.TuiInputNumberModule, core.TuiModeModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, kit.TuiMultiSelectModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiGroupComponent))]]
  });
  return ExampleTuiGroupModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiGroupModule, {
    declarations: [ExampleTuiGroupComponent, TuiGroupExample1, TuiGroupExample2, TuiGroupExample3, TuiGroupExample4],
    imports: [kit.TuiProjectClassModule, kit.TuiRadioBlockModule, core.TuiLinkModule, kit.TuiBadgeModule, core.TuiButtonModule, kit.TuiSelectModule, core.TuiGroupModule, kit.TuiInputModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiComboBoxModule, addon_commerce.TuiCurrencyPipeModule, kit.TuiInputNumberModule, core.TuiModeModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, kit.TuiMultiSelectModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiGroupComponent]
  });
})();

/***/ })

}]);