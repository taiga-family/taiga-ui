"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[55424],{

/***/ 55424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRadioListModule": () => (/* binding */ ExampleTuiRadioListModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/radio-list/radio-list.component.ts
var radio_list_component = __webpack_require__(47326);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-list/examples/1/index.ts





function TuiRadioListExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 7);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Option \u00AB", data_r4.name, "\u00BB.");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(data_r4.description);
  }
}

function TuiRadioListExample1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \u00AB", data_r5.name, "\u00BB ");
  }
}

let TuiRadioListExample1 = /*#__PURE__*/(() => {
  class TuiRadioListExample1 {
    constructor() {
      this.items = [{
        name: `Simple`,
        description: `Something usual`
      }, {
        name: `Advanced`,
        description: `Something better`
      }, {
        name: `PRO`,
        description: `Something cool`
      }];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        tariff: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

  }

  TuiRadioListExample1.ɵfac = function TuiRadioListExample1_Factory(t) {
    return new (t || TuiRadioListExample1)();
  };

  TuiRadioListExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioListExample1,
    selectors: [["tui-radio-list-example-1"]],
    decls: 11,
    vars: 6,
    consts: [[1, "tui-row"], [1, "tui-col_md-4"], [3, "formGroup"], ["formControlName", "tariff", 3, "items", "itemContent"], ["tariff1ItemContent", ""], ["formControlName", "tariff", "orientation", "horizontal", 3, "items", "itemContent"], ["tariff2ItemContent", ""], [1, "description"]],
    template: function TuiRadioListExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio-list", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiRadioListExample1_ng_template_4_Template, 4, 2, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "form", 2);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-radio-list", 5);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiRadioListExample1_ng_template_9_Template, 1, 1, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(10);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items)("itemContent", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items)("itemContent", _r2);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_list_component/* TuiRadioListComponent */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".description[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);margin-top:.25rem;color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return TuiRadioListExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-list/examples/2/index.ts





function TuiRadioListExample2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 7);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Option \u00AB", data_r4.name, "\u00BB.");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(data_r4.description);
  }
}

function TuiRadioListExample2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \u00AB", data_r5.name, "\u00BB ");
  }
}

let TuiRadioListExample2 = /*#__PURE__*/(() => {
  class TuiRadioListExample2 {
    constructor() {
      this.items = [{
        name: `Simple`,
        description: `Something usual`
      }, {
        name: `Advanced`,
        description: `Something better`
      }, {
        name: `PRO`,
        description: `Something cool`
      }];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        tariff: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

  }

  TuiRadioListExample2.ɵfac = function TuiRadioListExample2_Factory(t) {
    return new (t || TuiRadioListExample2)();
  };

  TuiRadioListExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioListExample2,
    selectors: [["tui-radio-list-example-2"]],
    decls: 11,
    vars: 6,
    consts: [[1, "tui-row"], [1, "tui-col_md-4"], [3, "formGroup"], ["formControlName", "tariff", "size", "l", 3, "items", "itemContent"], ["tariff1ItemContent", ""], ["formControlName", "tariff", "orientation", "horizontal", "size", "l", 3, "items", "itemContent"], ["tariff2ItemContent", ""], [1, "description"]],
    template: function TuiRadioListExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio-list", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiRadioListExample2_ng_template_4_Template, 4, 2, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "form", 2);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-radio-list", 5);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiRadioListExample2_ng_template_9_Template, 1, 1, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(10);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items)("itemContent", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items)("itemContent", _r2);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_list_component/* TuiRadioListComponent */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".description[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return TuiRadioListExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-list/radio-list.component.ts



















function ExampleTuiRadioListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio-list-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-radio-list-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-radio-list", 11);
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r4 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("items", ctx_r3.items)("orientation", ctx_r3.orientation)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("size", ctx_r3.size)("itemContent", _r4)("disabledItemHandler", ctx_r3.disabledItemHandler)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 12);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Option \u00AB", data_r10.name, "\u00BB.");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(data_r10.description);
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiRadioListComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiRadioListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioListComponent_ng_template_2_ng_template_1_Template, 1, 12, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRadioListComponent_ng_template_2_ng_template_2_Template, 4, 2, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRadioListComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRadioListComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiRadioListComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.orientation = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiRadioListComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiRadioListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 18);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 20);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 23);
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

let ExampleTuiRadioListComponent = /*#__PURE__*/(() => {
  class ExampleTuiRadioListComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 43409).then(__webpack_require__.t.bind(__webpack_require__, 43409, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 4886).then(__webpack_require__.t.bind(__webpack_require__, 4886, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 43949).then(__webpack_require__.t.bind(__webpack_require__, 43949, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 38399).then(__webpack_require__.t.bind(__webpack_require__, 38399, 17)),
        HTML: __webpack_require__.e(/* import() */ 2367).then(__webpack_require__.t.bind(__webpack_require__, 2367, 17)),
        LESS: __webpack_require__.e(/* import() */ 62186).then(__webpack_require__.t.bind(__webpack_require__, 62186, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 88918).then(__webpack_require__.t.bind(__webpack_require__, 88918, 17)),
        HTML: __webpack_require__.e(/* import() */ 52758).then(__webpack_require__.t.bind(__webpack_require__, 52758, 17)),
        LESS: __webpack_require__.e(/* import() */ 51118).then(__webpack_require__.t.bind(__webpack_require__, 51118, 17))
      };
      this.orientationVariants = [`vertical`, `horizontal`];
      this.orientation = this.orientationVariants[0];
      this.items = [{
        name: `Simple`,
        description: `It is simple`
      }, {
        name: `Advanced`,
        description: `For better clients`
      }, {
        name: `PRO`,
        description: `For pro and cool clients`
      }];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, cdk.ALWAYS_TRUE_HANDLER, item => item.name === `Advanced`];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(this.items[0]);
    }

  }

  ExampleTuiRadioListComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiRadioListComponent_BaseFactory;
    return function ExampleTuiRadioListComponent_Factory(t) {
      return (ɵExampleTuiRadioListComponent_BaseFactory || (ɵExampleTuiRadioListComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiRadioListComponent)))(t || ExampleTuiRadioListComponent);
    };
  }();

  ExampleTuiRadioListComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRadioListComponent,
    selectors: [["example-tui-radio-list"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiRadioListComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4793573930891017833$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__1 = goog.getMsg("Component for fast showing many radio buttons. It supports also custom content");
        i18n_0 = MSG_EXTERNAL_4793573930891017833$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟3a9a3a268766eb8da82e5eaedaf865056f1d5da2␟4793573930891017833:Component for fast showing many radio buttons. It supports also custom content`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__5 = goog.getMsg("Big size");
        i18n_4 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___7 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___9 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6598740144900503893$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___11 = goog.getMsg(" Direction of group ");
        i18n_10 = MSG_EXTERNAL_6598740144900503893$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟4b5e527bf1b048530ab61297a358799a5489a3fd␟6598740144900503893: Direction of group `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___13 = goog.getMsg(" Size ");
        i18n_12 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1615504379280277164$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__15 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiRadioListModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_1615504379280277164$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟ad0a275fb08cc92fc6532795b334f6e42e88d186␟1615504379280277164: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRadioListModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__17 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_16 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "RadioList", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "large", "heading", i18n_4, 3, "content"], [3, "control"], ["itemContent", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-space_bottom-3", 3, "formControl", "items", "orientation", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "size", "itemContent", "disabledItemHandler", "focusable", "readOnly"], [1, "description"], i18n_6, i18n_8, i18n_10, i18n_12, [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.component.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRadioListComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioListComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRadioListComponent_ng_template_2_Template, 10, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioListComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRadioListExample1, TuiRadioListExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, radio_list_component/* TuiRadioListComponent */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    styles: [".description[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);margin-top:.25rem;color:var(--tui-text-03)}[data-size=l][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"],
    changeDetection: 0
  });
  return ExampleTuiRadioListComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-list/radio-list.module.ts













let ExampleTuiRadioListModule = /*#__PURE__*/(() => {
  class ExampleTuiRadioListModule {}

  ExampleTuiRadioListModule.ɵfac = function ExampleTuiRadioListModule_Factory(t) {
    return new (t || ExampleTuiRadioListModule)();
  };

  ExampleTuiRadioListModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRadioListModule
  });
  ExampleTuiRadioListModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioListModule, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiButtonModule, inherited_documentation_module/* InheritedDocumentationModule */.f, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRadioListComponent))]]
  });
  return ExampleTuiRadioListModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRadioListModule, {
    declarations: [ExampleTuiRadioListComponent, TuiRadioListExample1, TuiRadioListExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioListModule, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiButtonModule, inherited_documentation_module/* InheritedDocumentationModule */.f, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRadioListComponent]
  });
})();

/***/ })

}]);