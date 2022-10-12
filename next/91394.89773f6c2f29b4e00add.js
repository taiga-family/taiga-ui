"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91394],{

/***/ 91394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRadioBlockModule": () => (/* binding */ ExampleTuiRadioBlockModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/radio-block/radio-block.component.ts
var radio_block_component = __webpack_require__(61423);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-block/examples/1/index.ts




let TuiRadioBlockExample1 = /*#__PURE__*/(() => {
  class TuiRadioBlockExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`orange`)
      });
    }

  }

  TuiRadioBlockExample1.ɵfac = function TuiRadioBlockExample1_Factory(t) {
    return new (t || TuiRadioBlockExample1)();
  };

  TuiRadioBlockExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioBlockExample1,
    selectors: [["tui-radio-block-example-1"]],
    decls: 10,
    vars: 1,
    consts: [[3, "formGroup"], [1, "tui-form__row"], ["contentAlign", "right", "formControlName", "testValue", "item", "qiwi", "size", "s"], ["contentAlign", "right", "formControlName", "testValue", "item", "orange", "size", "m"], ["contentAlign", "right", "formControlName", "testValue", "item", "apple", "size", "l"]],
    template: function TuiRadioBlockExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-radio-block", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Qiwi ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-block", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Oranges ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-radio-block", 4);
        fesm2015_core/* ɵɵtext */._uU(9, " Apples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRadioBlockExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-block/examples/2/index.ts





let TuiRadioBlockExample2 = /*#__PURE__*/(() => {
  class TuiRadioBlockExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`orange`)
      });
    }

  }

  TuiRadioBlockExample2.ɵfac = function TuiRadioBlockExample2_Factory(t) {
    return new (t || TuiRadioBlockExample2)();
  };

  TuiRadioBlockExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioBlockExample2,
    selectors: [["tui-radio-block-example-2"]],
    decls: 20,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6391194210978105636$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Horizontal group\n");
        i18n_0 = MSG_EXTERNAL_6391194210978105636$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟0e7d7d560b1cf9f247c712a06d553336c0603542␟6391194210978105636: Horizontal group
`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4278986279453827345$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" Vertical group\n");
        i18n_2 = MSG_EXTERNAL_4278986279453827345$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟312d341e3fd0106430fe72f7eebe09dd55fb36ea␟4278986279453827345: Vertical group
`;
      }

      return [[1, "title"], i18n_0, [1, "group", 3, "formGroup"], ["tuiGroup", "", 1, "group", 3, "collapsed"], ["contentAlign", "right", "formControlName", "testValue", "item", "orange", "size", "l"], ["contentAlign", "right", "formControlName", "testValue", "item", "apple", "size", "l"], ["contentAlign", "right", "formControlName", "testValue", "item", "pineapple", "size", "l"], i18n_2, [3, "formGroup"], ["tuiGroup", "", "orientation", "vertical", 1, "group", 3, "collapsed"]];
    },
    template: function TuiRadioBlockExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3", 0);
        fesm2015_core/* ɵɵi18n */.SDv(1, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-radio-block", 4);
        fesm2015_core/* ɵɵtext */._uU(5, " Oranges ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-radio-block", 5);
        fesm2015_core/* ɵɵtext */._uU(7, " Apples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-radio-block", 6);
        fesm2015_core/* ɵɵtext */._uU(9, " Pineapple ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "h3", 0);
        fesm2015_core/* ɵɵi18n */.SDv(11, 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "form", 8);
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-radio-block", 4);
        fesm2015_core/* ɵɵtext */._uU(15, " Oranges ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-radio-block", 5);
        fesm2015_core/* ɵɵtext */._uU(17, " Apples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-radio-block", 6);
        fesm2015_core/* ɵɵtext */._uU(19, " Pinapples ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true);
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, group_directive/* TuiGroupDirective */.g, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".group[_ngcontent-%COMP%]{max-width:33rem;margin-bottom:1.5rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 1rem}"],
    changeDetection: 0
  });
  return TuiRadioBlockExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/core/components/tooltip/tooltip.component.ts
var tooltip_component = __webpack_require__(33351);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-block/examples/3/index.ts






let TuiRadioBlockExample3 = /*#__PURE__*/(() => {
  class TuiRadioBlockExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`example1`)
      });
    }

  }

  TuiRadioBlockExample3.ɵfac = function TuiRadioBlockExample3_Factory(t) {
    return new (t || TuiRadioBlockExample3)();
  };

  TuiRadioBlockExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioBlockExample3,
    selectors: [["tui-radio-block-example-3"]],
    decls: 25,
    vars: 3,
    consts: [[1, "control", 3, "formGroup"], [1, "tui-form__row"], ["formControlName", "testValue", "item", "example1", "size", "l"], [1, "content"], ["text", "Heading", "size", "s", 1, "tui-space_right-3", 3, "rounded"], ["formControlName", "testValue", "item", "example2", "size", "l"], [1, "label"], ["formControlName", "testValue", "item", "example3", "size", "l"], [1, "inner"], [1, "text"], ["formControlName", "testValue", "contentAlign", "left", "item", "example4", "nativeId", "example4", "size", "l"], [1, "inner", "inner_flex"], ["describeId", "example4", "content", "And hint in the tooltip"]],
    template: function TuiRadioBlockExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-radio-block", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-avatar", 4);
        fesm2015_core/* ɵɵtext */._uU(5, " Heading ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-radio-block", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div", 3);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-avatar", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 6);
        fesm2015_core/* ɵɵtext */._uU(12, "Label");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(13, " Placeholder ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-radio-block", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div", 8);
        fesm2015_core/* ɵɵtext */._uU(17, " Heading ");
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "div", 9);
        fesm2015_core/* ɵɵtext */._uU(19, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-radio-block", 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "div", 11);
        fesm2015_core/* ɵɵtext */._uU(23, " Some content ");
        fesm2015_core/* ɵɵelement */._UZ(24, "tui-tooltip", 12);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, avatar_component/* TuiAvatarComponent */.J, tooltip_component/* TuiTooltipComponent */.w],
    styles: [".control[_ngcontent-%COMP%]{max-width:17rem}.content[_ngcontent-%COMP%]{display:flex;align-items:center}.label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}.text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-02)}.inner[_ngcontent-%COMP%]{margin:1rem 0;white-space:normal}.inner_flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0;width:31.25rem}"],
    changeDetection: 0
  });
  return TuiRadioBlockExample3;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-block/radio-block.component.ts




















function ExampleTuiRadioBlockComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio-block-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-radio-block-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-radio-block-example-3");
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
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-radio-block", 14);
    fesm2015_core/* ɵɵtext */._uU(2, " Oranges ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-radio-block", 15);
    fesm2015_core/* ɵɵtext */._uU(4, " Apples ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-block", 16);
    fesm2015_core/* ɵɵtext */._uU(6, " Pinapples ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("collapsed", true);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("contentAlign", ctx_r3.contentAlign)("hideRadio", ctx_r3.hideRadio)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("contentAlign", ctx_r3.contentAlign)("hideRadio", ctx_r3.hideRadio)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("contentAlign", ctx_r3.contentAlign)("hideRadio", ctx_r3.hideRadio)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_1_Template, 7, 34, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.contentAlign = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.hideRadio = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.pseudoDisabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiRadioBlockComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentAlignVariants)("documentationPropertyValue", ctx_r1.contentAlign);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideRadio);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.pseudoDisabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiRadioBlockComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 24);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 26);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 29);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiRadioBlockComponent = /*#__PURE__*/(() => {
  class ExampleTuiRadioBlockComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 89967).then(__webpack_require__.t.bind(__webpack_require__, 89967, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 59581).then(__webpack_require__.t.bind(__webpack_require__, 59581, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 35675).then(__webpack_require__.t.bind(__webpack_require__, 35675, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 75040).then(__webpack_require__.t.bind(__webpack_require__, 75040, 17)),
        HTML: __webpack_require__.e(/* import() */ 28329).then(__webpack_require__.t.bind(__webpack_require__, 28329, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 82983).then(__webpack_require__.t.bind(__webpack_require__, 82983, 17)),
        HTML: __webpack_require__.e(/* import() */ 58943).then(__webpack_require__.t.bind(__webpack_require__, 58943, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 58041).then(__webpack_require__.t.bind(__webpack_require__, 58041, 17)),
        HTML: __webpack_require__.e(/* import() */ 87059).then(__webpack_require__.t.bind(__webpack_require__, 87059, 17)),
        LESS: __webpack_require__.e(/* import() */ 96706).then(__webpack_require__.t.bind(__webpack_require__, 96706, 17))
      };
      this.contentAlignVariants = [`left`, `right`];
      this.contentAlign = this.contentAlignVariants[1];
      this.hideRadio = false;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[2];
      this.pseudoDisabled = false;
      this.control = new fesm2015_forms/* FormControl */.NI(`orange`);
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

  ExampleTuiRadioBlockComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiRadioBlockComponent_BaseFactory;
    return function ExampleTuiRadioBlockComponent_Factory(t) {
      return (ɵExampleTuiRadioBlockComponent_BaseFactory || (ɵExampleTuiRadioBlockComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiRadioBlockComponent)))(t || ExampleTuiRadioBlockComponent);
    };
  }();

  ExampleTuiRadioBlockComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRadioBlockComponent,
    selectors: [["example-tui-radio-block"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiRadioBlockComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3613760008863454095$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__1 = goog.getMsg("Radio inside button with custom content");
        i18n_0 = MSG_EXTERNAL_3613760008863454095$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟53ce57f4bd0659daf1e6c5a776bcb055c6c06584␟3613760008863454095:Radio inside button with custom content`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__3 = goog.getMsg("sizes");
        i18n_2 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5944812089887969249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__5 = goog.getMsg("Groups");
        i18n_4 = MSG_EXTERNAL_5944812089887969249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c22ba03540aa3217da059f45e7eab138b51a96e2␟5944812089887969249:Groups`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__7 = goog.getMsg("Custom");
        i18n_6 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7556849470332146923$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___11 = goog.getMsg(" Radio and content position ");
        i18n_10 = MSG_EXTERNAL_7556849470332146923$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟88a7b9d897656727d609c9545427aae46bb9a2ac␟7556849470332146923: Radio and content position `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3701523210121040117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___13 = goog.getMsg(" Hide radio button ");
        i18n_12 = MSG_EXTERNAL_3701523210121040117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟75e13d6732c8751b9c64251a35591dd8a6d37d1b␟3701523210121040117: Hide radio button `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___15 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___17 = goog.getMsg(" Emulates disabled state without disabling a form ");
        i18n_16 = MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟61196b55644500db48d300daa702002afe0c96f0␟1513617794784776786: Emulates disabled state without disabling a form `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___19 = goog.getMsg(" Size ");
        i18n_18 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5213653566296944065$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__21 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiRadioBlockModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_5213653566296944065$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟cface0b380c97c2b9466d291f5f7adc91be35532␟5213653566296944065: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRadioBlockModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__23 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_22 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_22 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_22);
      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
        i18n_24 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_BLOCK_RADIO_BLOCK_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "RadioBlock", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "sizes", "heading", i18n_2, 3, "content"], ["id", "groups", "heading", i18n_4, 3, "content"], ["id", "custom", "heading", i18n_6, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "contentAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideRadio", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher"], ["documentationPropertyName", "pseudoDisabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiGroup", "", 1, "group", 3, "collapsed"], ["item", "orange", 3, "formControl", "contentAlign", "hideRadio", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "pseudoDisabled", "size", "focusable", "readOnly"], ["item", "apple", 3, "formControl", "contentAlign", "hideRadio", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "pseudoDisabled", "size", "focusable", "readOnly"], ["item", "pineapple", 3, "formControl", "contentAlign", "hideRadio", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "pseudoDisabled", "size", "focusable", "readOnly"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.component.ts", 3, "code"], i18n_24, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRadioBlockComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioBlockComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRadioBlockComponent_ng_template_2_Template, 10, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioBlockComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRadioBlockExample1, TuiRadioBlockExample2, TuiRadioBlockExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, group_directive/* TuiGroupDirective */.g, radio_block_component/* TuiRadioBlockComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiRadioBlockComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-block/radio-block.module.ts













let ExampleTuiRadioBlockModule = /*#__PURE__*/(() => {
  class ExampleTuiRadioBlockModule {}

  ExampleTuiRadioBlockModule.ɵfac = function ExampleTuiRadioBlockModule_Factory(t) {
    return new (t || ExampleTuiRadioBlockModule)();
  };

  ExampleTuiRadioBlockModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRadioBlockModule
  });
  ExampleTuiRadioBlockModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioBlockModule, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiAvatarModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiGroupModule, core.TuiTooltipModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRadioBlockComponent))]]
  });
  return ExampleTuiRadioBlockModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRadioBlockModule, {
    declarations: [TuiRadioBlockExample1, TuiRadioBlockExample2, TuiRadioBlockExample3, ExampleTuiRadioBlockComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioBlockModule, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiAvatarModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiGroupModule, core.TuiTooltipModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRadioBlockComponent]
  });
})();

/***/ })

}]);