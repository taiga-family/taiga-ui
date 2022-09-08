"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[68711],{

/***/ 68711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCheckboxBlockModule": () => (/* binding */ ExampleTuiCheckboxBlockModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/ngx-markdown/fesm2015/ngx-markdown.js + 1 modules
var ngx_markdown = __webpack_require__(27035);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
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
// EXTERNAL MODULE: ./projects/kit/components/checkbox-block/checkbox-block.component.ts
var checkbox_block_component = __webpack_require__(82285);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-block/examples/1/index.ts




let TuiCheckboxBlockExample1 = /*#__PURE__*/(() => {
  class TuiCheckboxBlockExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiCheckboxBlockExample1.ɵfac = function TuiCheckboxBlockExample1_Factory(t) {
    return new (t || TuiCheckboxBlockExample1)();
  };

  TuiCheckboxBlockExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxBlockExample1,
    selectors: [["tui-checkbox-block-example-1"]],
    decls: 10,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2752886510963137289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" One option ");
        i18n_0 = MSG_EXTERNAL_2752886510963137289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟99df59ef317e2b6a55ca658ee3166a6fb1c2405f␟2752886510963137289: One option `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6691339311800684677$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" An alternative one ");
        i18n_2 = MSG_EXTERNAL_6691339311800684677$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟2a0dc2e0c8f74c6549c75401d110dab076277a3e␟6691339311800684677: An alternative one `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7206000789053918461$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_5 = goog.getMsg(" Other ");
        i18n_4 = MSG_EXTERNAL_7206000789053918461$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟47d5f0df12b9901fe6e60ca845e124275c21b9d2␟7206000789053918461: Other `;
      }

      return [[3, "formGroup"], [1, "tui-form__row"], ["formControlName", "testValue1", "contentAlign", "right", "size", "s"], i18n_0, ["formControlName", "testValue2", "contentAlign", "right", "size", "m"], i18n_2, ["contentAlign", "right", "formControlName", "testValue3", "size", "l"], i18n_4];
    },
    template: function TuiCheckboxBlockExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-checkbox-block", 2);
        fesm2015_core/* ɵɵi18n */.SDv(3, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-checkbox-block", 4);
        fesm2015_core/* ɵɵi18n */.SDv(6, 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-checkbox-block", 6);
        fesm2015_core/* ɵɵi18n */.SDv(9, 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_block_component/* TuiCheckboxBlockComponent */.C, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCheckboxBlockExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-block/examples/2/index.ts





let TuiCheckboxBlockExample2 = /*#__PURE__*/(() => {
  class TuiCheckboxBlockExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiCheckboxBlockExample2.ɵfac = function TuiCheckboxBlockExample2_Factory(t) {
    return new (t || TuiCheckboxBlockExample2)();
  };

  TuiCheckboxBlockExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxBlockExample2,
    selectors: [["tui-checkbox-block-example-2"]],
    decls: 20,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6391194210978105636$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Horizontal group\n");
        i18n_0 = MSG_EXTERNAL_6391194210978105636$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟0e7d7d560b1cf9f247c712a06d553336c0603542␟6391194210978105636: Horizontal group
`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991059037030469023$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" Title ");
        i18n_2 = MSG_EXTERNAL_6991059037030469023$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟87efc15510d4f4619443cf99e2b08b3146079597␟6991059037030469023: Title `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4278986279453827345$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Vertical group\n");
        i18n_4 = MSG_EXTERNAL_4278986279453827345$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟312d341e3fd0106430fe72f7eebe09dd55fb36ea␟4278986279453827345: Vertical group
`;
      }

      return [[1, "title"], i18n_0, [1, "group", 3, "formGroup"], ["tuiGroup", "", 1, "group", 3, "collapsed"], ["contentAlign", "right", "formControlName", "testValue1", "size", "l"], i18n_2, ["contentAlign", "right", "formControlName", "testValue2", "size", "l"], ["contentAlign", "right", "formControlName", "testValue3", "size", "l"], i18n_4, [3, "formGroup"], ["tuiGroup", "", "orientation", "vertical", 1, "group", 3, "collapsed"]];
    },
    template: function TuiCheckboxBlockExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3", 0);
        fesm2015_core/* ɵɵi18n */.SDv(1, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-checkbox-block", 4);
        fesm2015_core/* ɵɵi18n */.SDv(5, 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-checkbox-block", 6);
        fesm2015_core/* ɵɵtext */._uU(7, " Title ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-checkbox-block", 7);
        fesm2015_core/* ɵɵtext */._uU(9, " Title ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "h3", 0);
        fesm2015_core/* ɵɵi18n */.SDv(11, 8);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "form", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-checkbox-block", 4);
        fesm2015_core/* ɵɵtext */._uU(15, " Title ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-checkbox-block", 6);
        fesm2015_core/* ɵɵtext */._uU(17, " Title ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-checkbox-block", 7);
        fesm2015_core/* ɵɵtext */._uU(19, " Title ");
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
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, group_directive/* TuiGroupDirective */.g, checkbox_block_component/* TuiCheckboxBlockComponent */.C, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".group[_ngcontent-%COMP%]{max-width:33rem;margin-bottom:1.5rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 1rem}"],
    changeDetection: 0
  });
  return TuiCheckboxBlockExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/core/components/tooltip/tooltip.component.ts
var tooltip_component = __webpack_require__(33351);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-block/examples/3/index.ts






let TuiCheckboxBlockExample3 = /*#__PURE__*/(() => {
  class TuiCheckboxBlockExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(false),
        testValue4: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiCheckboxBlockExample3.ɵfac = function TuiCheckboxBlockExample3_Factory(t) {
    return new (t || TuiCheckboxBlockExample3)();
  };

  TuiCheckboxBlockExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxBlockExample3,
    selectors: [["tui-checkbox-block-example-3"]],
    decls: 25,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6317126528752584322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("Heading");
        i18n_0 = MSG_EXTERNAL_6317126528752584322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟d2f99caf769460275d5bc462978c2761fedefec6␟6317126528752584322:Heading`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2861068616736202111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_3 = goog.getMsg("placeholder");
        i18n_2 = MSG_EXTERNAL_2861068616736202111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟7cb689bdbc7ccb3c3a75668a240ac0e068344b1d␟2861068616736202111:placeholder`;
      }

      return [[1, "b-form", 3, "formGroup"], [1, "tui-form__row"], ["formControlName", "testValue1", "size", "l"], [1, "content"], ["text", i18n_0, "size", "s", 1, "tui-space_right-3", 3, "rounded"], ["formControlName", "testValue2", "size", "l"], ["text", i18n_2, "size", "s", 1, "tui-space_right-3", 3, "rounded"], [1, "label"], ["formControlName", "testValue3", "size", "l"], [1, "inner"], [1, "text"], ["formControlName", "testValue4", "contentAlign", "left", "nativeId", "example3", "size", "l"], [1, "inner", "inner_flex"], ["describeId", "example3", "content", "some tooltip content"]];
    },
    template: function TuiCheckboxBlockExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-checkbox-block", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-avatar", 4);
        fesm2015_core/* ɵɵtext */._uU(5, " Heading ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-checkbox-block", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div", 3);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-avatar", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 7);
        fesm2015_core/* ɵɵtext */._uU(12, "Label");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(13, " Placeholder ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-checkbox-block", 8);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div", 9);
        fesm2015_core/* ɵɵtext */._uU(17, " Heading ");
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "div", 10);
        fesm2015_core/* ɵɵtext */._uU(19, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-checkbox-block", 11);
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "div", 12);
        fesm2015_core/* ɵɵtext */._uU(23, " Some heading ");
        fesm2015_core/* ɵɵelement */._UZ(24, "tui-tooltip", 13);
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
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_block_component/* TuiCheckboxBlockComponent */.C, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, avatar_component/* TuiAvatarComponent */.J, tooltip_component/* TuiTooltipComponent */.w],
    styles: [".content[_ngcontent-%COMP%]{display:flex;align-items:center}.label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}.text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-02)}.inner[_ngcontent-%COMP%]{margin:1rem 0;white-space:normal}.inner_flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0;width:31.25rem}"],
    changeDetection: 0
  });
  return TuiCheckboxBlockExample3;
})();
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-block/checkbox-block.component.ts



















function ExampleTuiCheckboxBlockComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-checkbox-block-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-checkbox-block-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-checkbox-block-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-checkbox-block", 12);
    fesm2015_core/* ɵɵi18n */.SDv(2, 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-checkbox-block", 14);
    fesm2015_core/* ɵɵi18n */.SDv(4, 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-checkbox-block", 16);
    fesm2015_core/* ɵɵi18n */.SDv(6, 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.control);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_1_Template, 7, 28, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.contentAlign = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.hideCheckbox = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentAlignVariants)("documentationPropertyValue", ctx_r1.contentAlign);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideCheckbox);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiCheckboxBlockComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 25);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 28);
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

let ExampleTuiCheckboxBlockComponent = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxBlockComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 36062).then(__webpack_require__.t.bind(__webpack_require__, 36062, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 88960).then(__webpack_require__.t.bind(__webpack_require__, 88960, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 45189).then(__webpack_require__.t.bind(__webpack_require__, 45189, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 21065).then(__webpack_require__.t.bind(__webpack_require__, 18417, 17)),
        HTML: __webpack_require__.e(/* import() */ 96395).then(__webpack_require__.t.bind(__webpack_require__, 96395, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 53335).then(__webpack_require__.t.bind(__webpack_require__, 53335, 17)),
        HTML: __webpack_require__.e(/* import() */ 2577).then(__webpack_require__.t.bind(__webpack_require__, 2577, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 87844).then(__webpack_require__.t.bind(__webpack_require__, 87844, 17)),
        HTML: __webpack_require__.e(/* import() */ 62663).then(__webpack_require__.t.bind(__webpack_require__, 62663, 17)),
        LESS: __webpack_require__.e(/* import() */ 96891).then(__webpack_require__.t.bind(__webpack_require__, 96891, 17))
      };
      this.contentAlignVariants = [`left`, `right`];
      this.contentAlign = this.contentAlignVariants[1];
      this.hideCheckbox = false;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[2];
      this.control = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(),
        testValue3: new fesm2015_forms/* FormControl */.NI(true)
      });
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

  ExampleTuiCheckboxBlockComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiCheckboxBlockComponent_BaseFactory;
    return function ExampleTuiCheckboxBlockComponent_Factory(t) {
      return (ɵExampleTuiCheckboxBlockComponent_BaseFactory || (ɵExampleTuiCheckboxBlockComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiCheckboxBlockComponent)))(t || ExampleTuiCheckboxBlockComponent);
    };
  }();

  ExampleTuiCheckboxBlockComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCheckboxBlockComponent,
    selectors: [["example-tui-checkbox-block"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiCheckboxBlockComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8151964794397944680$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}CheckboxBlock{$closeTagCode} can be used in forms where selected option does not change or update content (e.g. does not work like a filter). It may be grouped in horizontal row only except the mobile view ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8151964794397944680$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟c0b54e5f9e394eb155a9bff3cb9d06065b40348f␟8151964794397944680:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:CheckboxBlock${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: can be used in forms where selected option does not change or update content (e.g. does not work like a filter). It may be grouped in horizontal row only except the mobile view `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__3 = goog.getMsg("Sizes");
        i18n_2 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5944812089887969249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__5 = goog.getMsg("Groups");
        i18n_4 = MSG_EXTERNAL_5944812089887969249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c22ba03540aa3217da059f45e7eab138b51a96e2␟5944812089887969249:Groups`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__7 = goog.getMsg("Custom");
        i18n_6 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2160149280582950455$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___9 = goog.getMsg(" One option ");
        i18n_8 = MSG_EXTERNAL_2160149280582950455$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟899f132fc7b4e114b595130aa5609118488bf044␟2160149280582950455: One option `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_607557139639752863$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___11 = goog.getMsg(" An alternative one ");
        i18n_10 = MSG_EXTERNAL_607557139639752863$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟b681053bdf722eff22b48be89cf208cf1c73b769␟607557139639752863: An alternative one `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3232115946036118602$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___13 = goog.getMsg(" Other ");
        i18n_12 = MSG_EXTERNAL_3232115946036118602$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟55f4ecf19b8ccd0e8c44ae9fba34ebd0b55d31fc␟3232115946036118602: Other `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3874072842734445757$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___17 = goog.getMsg(" Left/right content align ");
        i18n_16 = MSG_EXTERNAL_3874072842734445757$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟545a85806d824acfb35b864c2aa0fb29904b5647␟3874072842734445757: Left/right content align `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6667817727813458346$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___19 = goog.getMsg(" Hide checkbox ");
        i18n_18 = MSG_EXTERNAL_6667817727813458346$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟e6c0f22343f716a11de58de0940cf91697f597cc␟6667817727813458346: Hide checkbox `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___21 = goog.getMsg(" Size ");
        i18n_20 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4974311934142131806$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__23 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxBlockModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_4974311934142131806$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟e8cf7539331e4f5abfa343179f44aa0cd8456d0d␟4974311934142131806: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxBlockModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__25 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_24 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_24 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_24);
      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__27 = goog.getMsg("Add to the template:");
        i18n_26 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "CheckboxBlock", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "sizes", "heading", i18n_2, 3, "content"], ["id", "groups", "heading", i18n_4, 3, "content"], ["id", "custom", "heading", i18n_6, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "contentAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideCheckbox", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_8, ["formControlName", "testValue2", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_10, ["formControlName", "testValue3", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.component.ts", 3, "code"], i18n_26, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCheckboxBlockComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxBlockComponent_ng_template_1_Template, 9, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCheckboxBlockComponent_ng_template_2_Template, 8, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxBlockComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiCheckboxBlockExample1, TuiCheckboxBlockExample2, TuiCheckboxBlockExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_block_component/* TuiCheckboxBlockComponent */.C, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, code_component/* TuiDocCodeComponent */.c],
    styles: [".wrapper[_ngcontent-%COMP%]{margin-top:1.875rem}"],
    changeDetection: 0
  });
  return ExampleTuiCheckboxBlockComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-block/checkbox-block.module.ts














let ExampleTuiCheckboxBlockModule = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxBlockModule {}

  ExampleTuiCheckboxBlockModule.ɵfac = function ExampleTuiCheckboxBlockModule_Factory(t) {
    return new (t || ExampleTuiCheckboxBlockModule)();
  };

  ExampleTuiCheckboxBlockModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCheckboxBlockModule
  });
  ExampleTuiCheckboxBlockModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit/* TuiCheckboxBlockModule */.phq, core/* TuiGroupModule */.n6B, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, common/* CommonModule */.ez, kit/* TuiAvatarModule */.JmR, kit/* TuiRadioListModule */.Ltw, core/* TuiButtonModule */.fNO, core/* TuiTooltipModule */.QA7, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCheckboxBlockComponent))]]
  });
  return ExampleTuiCheckboxBlockModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCheckboxBlockModule, {
    declarations: [TuiCheckboxBlockExample1, TuiCheckboxBlockExample2, TuiCheckboxBlockExample3, ExampleTuiCheckboxBlockComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit/* TuiCheckboxBlockModule */.phq, core/* TuiGroupModule */.n6B, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, common/* CommonModule */.ez, kit/* TuiAvatarModule */.JmR, kit/* TuiRadioListModule */.Ltw, core/* TuiButtonModule */.fNO, core/* TuiTooltipModule */.QA7, router/* RouterModule */.Bz],
    exports: [ExampleTuiCheckboxBlockComponent]
  });
})();

/***/ })

}]);