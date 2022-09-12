"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[52725],{

/***/ 52725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRatingModule": () => (/* binding */ ExampleTuiRatingModule)
});

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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/rating/rating.component.ts
var rating_component = __webpack_require__(59837);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/rating/examples/1/index.ts





let TuiRatingExample1 = /*#__PURE__*/(() => {
  class TuiRatingExample1 {
    constructor() {
      this.rateControl = new fesm2015_forms/* FormControl */.NI(2);
      this.rateValue = 2;
    }

    enableOrDisable() {
      if (this.rateControl.disabled) {
        this.rateControl.enable();
      } else {
        this.rateControl.disable();
      }
    }

  }

  TuiRatingExample1.ɵfac = function TuiRatingExample1_Factory(t) {
    return new (t || TuiRatingExample1)();
  };

  TuiRatingExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRatingExample1,
    selectors: [["tui-rating-example-1"]],
    decls: 24,
    vars: 9,
    consts: [[1, "example"], [1, "rating", 3, "ngModel", "ngModelChange"], [1, "rating", 3, "readOnly", "ngModel", "ngModelChange"], [1, "rating", 3, "disabled", "ngModel", "ngModelChange"], [1, "rating", 3, "formControl"], ["tuiButton", "", "type", "button", "size", "xs", 1, "example", 3, "click"]],
    template: function TuiRatingExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
        fesm2015_core/* ɵɵtext */._uU(2, "Template Driven");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "b");
        fesm2015_core/* ɵɵtext */._uU(5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-rating", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample1_Template_tui_rating_ngModelChange_6_listener($event) {
          return ctx.rateValue = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "b");
        fesm2015_core/* ɵɵtext */._uU(9, "Read only");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-rating", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample1_Template_tui_rating_ngModelChange_10_listener($event) {
          return ctx.rateValue = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "b");
        fesm2015_core/* ɵɵtext */._uU(13, "Disabled");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-rating", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample1_Template_tui_rating_ngModelChange_14_listener($event) {
          return ctx.rateValue = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "h2");
        fesm2015_core/* ɵɵtext */._uU(17, "Reactive Forms / Disabled");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "b");
        fesm2015_core/* ɵɵtext */._uU(20);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(21, "tui-rating", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "button", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiRatingExample1_Template_button_click_22_listener() {
          return ctx.enableOrDisable();
        });
        fesm2015_core/* ɵɵtext */._uU(23);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("value = ", ctx.rateValue, "");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.rateValue);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("readOnly", true)("ngModel", ctx.rateValue);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true)("ngModel", ctx.rateValue);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("value = ", ctx.rateControl == null ? null : ctx.rateControl.value, "");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.rateControl);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", (ctx.rateControl == null ? null : ctx.rateControl.disabled) ? "enable" : "disable", " form control\n");
      }
    },
    directives: [rating_component/* TuiRatingComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, fesm2015_forms/* FormControlDirective */.oH, button_component/* TuiButtonComponent */.v],
    styles: [".example[_ngcontent-%COMP%]{margin-bottom:.5rem}.rating[_ngcontent-%COMP%]{color:var(--tui-accent)}"],
    changeDetection: 0
  });
  return TuiRatingExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/rating/examples/2/index.ts



let TuiRatingExample2 = /*#__PURE__*/(() => {
  class TuiRatingExample2 {
    constructor() {
      this.firstRate = 5;
      this.secondRate = 3;
      this.thirdRate = 4;
    }

  }

  TuiRatingExample2.ɵfac = function TuiRatingExample2_Factory(t) {
    return new (t || TuiRatingExample2)();
  };

  TuiRatingExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRatingExample2,
    selectors: [["tui-rating-example-2"]],
    decls: 18,
    vars: 7,
    consts: [[1, "example"], [1, "yellow", 3, "ngModel", "ngModelChange"], [1, "pink", 3, "max", "ngModel", "ngModelChange"], ["iconNormal", "tuiIconHeart", "iconFilled", "tuiIconHeartFilledLarge", 1, "red", 3, "ngModel", "ngModelChange"]],
    template: function TuiRatingExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
        fesm2015_core/* ɵɵtext */._uU(2, "Custom colors");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "b");
        fesm2015_core/* ɵɵtext */._uU(5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-rating", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample2_Template_tui_rating_ngModelChange_6_listener($event) {
          return ctx.firstRate = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "b");
        fesm2015_core/* ɵɵtext */._uU(9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-rating", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample2_Template_tui_rating_ngModelChange_10_listener($event) {
          return ctx.secondRate = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "h2");
        fesm2015_core/* ɵɵtext */._uU(13, "Custom icons");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "b");
        fesm2015_core/* ɵɵtext */._uU(16);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-rating", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRatingExample2_Template_tui_rating_ngModelChange_17_listener($event) {
          return ctx.thirdRate = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Yellow / value = ", ctx.firstRate, "");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.firstRate);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("10 stars / value = ", ctx.secondRate, "");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 10)("ngModel", ctx.secondRate);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Controlled / value = ", ctx.thirdRate, "");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.thirdRate);
      }
    },
    directives: [rating_component/* TuiRatingComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".example[_ngcontent-%COMP%]{margin-bottom:.5rem}.yellow[_ngcontent-%COMP%]{color:#faaf00}.pink[_ngcontent-%COMP%]{color:pink}.red[_ngcontent-%COMP%]{color:var(--tui-negative)}.label[_ngcontent-%COMP%]{color:#000;font-weight:bold;cursor:pointer;margin-bottom:.5rem}"],
    changeDetection: 0
  });
  return TuiRatingExample2;
})();
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/rating/rating.component.ts















function ExampleTuiRatingComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-rating-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-rating-example-2");
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

function ExampleTuiRatingComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-rating", 13, 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p", 15);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r11 = fesm2015_core/* ɵɵreference */.MAs(1);

    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵstyleProp */.Udp("color", ctx_r3.color);
    fesm2015_core/* ɵɵproperty */.Q6J("min", ctx_r3.min)("max", ctx_r3.max)("readOnly", ctx_r3.readOnly)("iconNormal", ctx_r3.iconNormal)("iconFilled", ctx_r3.iconFilled)("formControl", ctx_r3.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Current rating - ", _r11.value, "");
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiRatingComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiRatingComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRatingComponent_ng_template_2_ng_template_1_Template, 4, 9, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRatingComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.readOnly = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiRatingComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRatingComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRatingComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiRatingComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.color = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiRatingComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.iconNormal = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiRatingComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRatingComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.iconFilled = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconNormalVariants)("documentationPropertyValue", ctx_r1.iconNormal);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconFilledVariants)("documentationPropertyValue", ctx_r1.iconFilled);
  }
}

function ExampleTuiRatingComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵi18n */.SDv(8, 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 28);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiRatingComponent = /*#__PURE__*/(() => {
  class ExampleTuiRatingComponent {
    constructor(options) {
      this.options = options;
      this.exampleModule = __webpack_require__.e(/* import() */ 75184).then(__webpack_require__.t.bind(__webpack_require__, 75184, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 33311).then(__webpack_require__.t.bind(__webpack_require__, 33311, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 39277).then(__webpack_require__.t.bind(__webpack_require__, 39277, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 81568).then(__webpack_require__.t.bind(__webpack_require__, 81568, 17)),
        HTML: __webpack_require__.e(/* import() */ 42102).then(__webpack_require__.t.bind(__webpack_require__, 42102, 17)),
        LESS: __webpack_require__.e(/* import() */ 76205).then(__webpack_require__.t.bind(__webpack_require__, 76205, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 64768).then(__webpack_require__.t.bind(__webpack_require__, 64768, 17)),
        HTML: __webpack_require__.e(/* import() */ 44045).then(__webpack_require__.t.bind(__webpack_require__, 44045, 17)),
        LESS: __webpack_require__.e(/* import() */ 74281).then(__webpack_require__.t.bind(__webpack_require__, 74281, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI(5);
      this.colorVariants = [`var(--tui-accent)`, `#faaf00`, `pink`];
      this.color = this.colorVariants[0];
      this.iconNormalVariants = [this.options.iconNormal, // other icons work only in public demo
      `tuiIconStarLarge`, `tuiIconStar`];
      this.iconNormal = this.iconNormalVariants[0];
      this.iconFilledVariants = [this.options.iconFilled, // other icons work only in public demo
      `tuiIconStarFilledLarge`, `tuiIconStarFilled`];
      this.iconFilled = this.iconFilledVariants[0];
      this.readOnly = false;
      this.min = 0;
      this.max = 10;
    }

    get disabled() {
      return this.control.disabled;
    }

    set disabled(value) {
      if (value) {
        this.control.disable();
        return;
      }

      this.control.enable();
    }

  }

  ExampleTuiRatingComponent.ɵfac = function ExampleTuiRatingComponent_Factory(t) {
    return new (t || ExampleTuiRatingComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(kit.TUI_RATING_OPTIONS));
  };

  ExampleTuiRatingComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRatingComponent,
    selectors: [["example-rating"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8038373266670764377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__1 = goog.getMsg("A rating indicates user interest in content");
        i18n_0 = MSG_EXTERNAL_8038373266670764377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟15d37675411aa790a541bc61db9206703bdcf9dc␟8038373266670764377:A rating indicates user interest in content`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5793544987096948211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__5 = goog.getMsg("Customization");
        i18n_4 = MSG_EXTERNAL_5793544987096948211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___7 = goog.getMsg(" Component is read only ");
        i18n_6 = MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___11 = goog.getMsg(" Min value ");
        i18n_10 = MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___13 = goog.getMsg(" Max value ");
        i18n_12 = MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5719264831238487534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___15 = goog.getMsg(" Custom color ");
        i18n_14 = MSG_EXTERNAL_5719264831238487534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟86fac287d5fc170cd2f42cec4d6514a242bfdb90␟5719264831238487534: Custom color `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8116633360965675389$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___17 = goog.getMsg(" Custom empty icon ");
        i18n_16 = MSG_EXTERNAL_8116633360965675389$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟f6d7f954fa44bede7c614f7ee9c87868e9da5e54␟8116633360965675389: Custom empty icon `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5007412935023596511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___19 = goog.getMsg(" Custom filled icon ");
        i18n_18 = MSG_EXTERNAL_5007412935023596511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟325712b725a5750b694f3d2be18cd129875d2de2␟5007412935023596511: Custom filled icon `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2577187969089396534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiRatingModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_2577187969089396534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟bc0e5cc1e22dbad6a53070d2b82c6cbf15e736c7␟2577187969089396534: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRatingModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8830208626285764001$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__25 = goog.getMsg(" Optionally use the {$startTagCode}TUI_RATING_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_8830208626285764001$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RATING_RATING_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟212b1c22741729bf15053b24e6148ccd3c5971b6␟8830208626285764001: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_RATING_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "Rating", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "colors", "heading", i18n_4, 3, "content"], [3, "control"], ["documentationPropertyMode", "input", "documentationPropertyType", "boolean", "documentationPropertyName", "readOnly", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyType", "number", "documentationPropertyMode", "input", "documentationPropertyName", "min", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyType", "number", "documentationPropertyMode", "input", "documentationPropertyName", "max", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyMode", "input", "documentationPropertyType", "string", "documentationPropertyName", "style.color", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyMode", "input", "documentationPropertyType", "string", "documentationPropertyName", "iconNormal", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyMode", "input", "documentationPropertyType", "string", "documentationPropertyName", "iconFilled", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "min", "max", "readOnly", "iconNormal", "iconFilled", "formControl"], ["rating", ""], [1, "label"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"], i18n_24];
    },
    template: function ExampleTuiRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRatingComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRatingComponent_ng_template_2_Template, 10, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRatingComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRatingExample1, TuiRatingExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, rating_component/* TuiRatingComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    styles: [".label[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:.5rem}"],
    changeDetection: 0
  });
  return ExampleTuiRatingComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/rating/rating.module.ts










let ExampleTuiRatingModule = /*#__PURE__*/(() => {
  class ExampleTuiRatingModule {}

  ExampleTuiRatingModule.ɵfac = function ExampleTuiRatingModule_Factory(t) {
    return new (t || ExampleTuiRatingModule)();
  };

  ExampleTuiRatingModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRatingModule
  });
  ExampleTuiRatingModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, kit.TuiRatingModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRatingComponent))]]
  });
  return ExampleTuiRatingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRatingModule, {
    declarations: [ExampleTuiRatingComponent, TuiRatingExample1, TuiRatingExample2],
    imports: [fesm2015_forms/* FormsModule */.u5, kit.TuiRatingModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz],
    exports: [ExampleTuiRatingComponent]
  });
})();

/***/ })

}]);