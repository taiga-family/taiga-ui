"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[70314],{

/***/ 70314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPaginationModule": () => (/* binding */ ExampleTuiPaginationModule)
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
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-slider/input-slider.component.ts
var input_slider_component = __webpack_require__(44056);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/kit/components/pagination/pagination.component.ts
var pagination_component = __webpack_require__(31639);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/examples/1/index.ts








function TuiPaginationExample1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "index");
  }
}

let TuiPaginationExample1 = /*#__PURE__*/(() => {
  class TuiPaginationExample1 {
    constructor() {
      this.length = 64;
      this.index = 10;
    }

    goToPage(index) {
      this.index = index;
      console.info(`New page:`, index);
    }

  }

  TuiPaginationExample1.ɵfac = function TuiPaginationExample1_Factory(t) {
    return new (t || TuiPaginationExample1)();
  };

  TuiPaginationExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPaginationExample1,
    selectors: [["tui-pagination-example-1"]],
    decls: 4,
    vars: 7,
    consts: [["tuiTextfieldSize", "m", 1, "slider", 3, "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "max", "quantum", "ngModel", "ngModelChange"], ["inputCustomContent", ""], [3, "length", "index", "indexChange"]],
    template: function TuiPaginationExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiPaginationExample1_Template_tui_input_slider_ngModelChange_0_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiPaginationExample1_ng_template_1_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-pagination", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiPaginationExample1_Template_tui_pagination_indexChange_3_listener($event) {
          return ctx.goToPage($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCustomContent", _r0)("tuiTextfieldLabelOutside", true)("max", ctx.length - 1)("quantum", 1)("ngModel", ctx.index);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("length", ctx.length)("index", ctx.index);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, pagination_component/* TuiPaginationComponent */.r],
    styles: [".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],
    changeDetection: 0
  });
  return TuiPaginationExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/examples/2/index.ts








function TuiPaginationExample2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "activePadding");
  }
}

let TuiPaginationExample2 = /*#__PURE__*/(() => {
  class TuiPaginationExample2 {
    constructor() {
      this.activePadding = 2;
    }

  }

  TuiPaginationExample2.ɵfac = function TuiPaginationExample2_Factory(t) {
    return new (t || TuiPaginationExample2)();
  };

  TuiPaginationExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPaginationExample2,
    selectors: [["tui-pagination-example-2"]],
    decls: 4,
    vars: 8,
    consts: [["tuiTextfieldSize", "m", 1, "slider", 3, "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "max", "quantum", "ngModel", "ngModelChange"], ["inputCustomContent", ""], [3, "activePadding", "length", "index"]],
    template: function TuiPaginationExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiPaginationExample2_Template_tui_input_slider_ngModelChange_0_listener($event) {
          return ctx.activePadding = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiPaginationExample2_ng_template_1_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-pagination", 2);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCustomContent", _r0)("tuiTextfieldLabelOutside", true)("max", 6)("quantum", 1)("ngModel", ctx.activePadding);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("activePadding", ctx.activePadding)("length", 64)("index", 10);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, pagination_component/* TuiPaginationComponent */.r],
    styles: [".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],
    changeDetection: 0
  });
  return TuiPaginationExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/examples/3/index.ts








function TuiPaginationExample3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "sidePadding");
  }
}

let TuiPaginationExample3 = /*#__PURE__*/(() => {
  class TuiPaginationExample3 {
    constructor() {
      this.sidePadding = 3;
    }

  }

  TuiPaginationExample3.ɵfac = function TuiPaginationExample3_Factory(t) {
    return new (t || TuiPaginationExample3)();
  };

  TuiPaginationExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPaginationExample3,
    selectors: [["tui-pagination-example-3"]],
    decls: 4,
    vars: 8,
    consts: [["tuiTextfieldSize", "m", 1, "slider", 3, "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "max", "quantum", "ngModel", "ngModelChange"], ["inputCustomContent", ""], [3, "sidePadding", "length", "index"]],
    template: function TuiPaginationExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiPaginationExample3_Template_tui_input_slider_ngModelChange_0_listener($event) {
          return ctx.sidePadding = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiPaginationExample3_ng_template_1_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-pagination", 2);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCustomContent", _r0)("tuiTextfieldLabelOutside", true)("max", 6)("quantum", 1)("ngModel", ctx.sidePadding);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("sidePadding", ctx.sidePadding)("length", 64)("index", 10);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, pagination_component/* TuiPaginationComponent */.r],
    styles: [".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],
    changeDetection: 0
  });
  return TuiPaginationExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/examples/4/index.ts



function TuiPaginationExample4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r1.days[index_r2], "\n");
  }
}

let TuiPaginationExample4 = /*#__PURE__*/(() => {
  class TuiPaginationExample4 {
    constructor() {
      this.days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];
    }

  }

  TuiPaginationExample4.ɵfac = function TuiPaginationExample4_Factory(t) {
    return new (t || TuiPaginationExample4)();
  };

  TuiPaginationExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPaginationExample4,
    selectors: [["tui-pagination-example-4"]],
    decls: 3,
    vars: 2,
    consts: [[3, "length", "content"], ["test", ""]],
    template: function TuiPaginationExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-pagination", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiPaginationExample4_ng_template_1_Template, 1, 1, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("length", 7)("content", _r0);
      }
    },
    directives: [pagination_component/* TuiPaginationComponent */.r],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPaginationExample4;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/pagination.component.ts














function ExampleTuiPaginationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-pagination-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-pagination-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-pagination-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-pagination-example-4");
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
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiPaginationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-pagination", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function ExampleTuiPaginationComponent_ng_template_2_Template_tui_pagination_indexChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.index = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPaginationComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.focusable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiPaginationComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.index = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiPaginationComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.length = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiPaginationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiPaginationComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.activePadding = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiPaginationComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.sidePadding = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r1.focusable)("length", ctx_r1.length)("size", ctx_r1.size)("activePadding", ctx_r1.activePadding)("sidePadding", ctx_r1.sidePadding)("index", ctx_r1.index);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.focusable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.index);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.length);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.activePadding);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.sidePadding);
  }
}

function ExampleTuiPaginationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 21);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 24);
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

let ExampleTuiPaginationComponent = /*#__PURE__*/(() => {
  class ExampleTuiPaginationComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 90198).then(__webpack_require__.t.bind(__webpack_require__, 90198, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 74636).then(__webpack_require__.t.bind(__webpack_require__, 74636, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 91571).then(__webpack_require__.t.bind(__webpack_require__, 91571, 17)),
        HTML: __webpack_require__.e(/* import() */ 90874).then(__webpack_require__.t.bind(__webpack_require__, 90874, 17)),
        LESS: __webpack_require__.e(/* import() */ 85089).then(__webpack_require__.t.bind(__webpack_require__, 85089, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 57931).then(__webpack_require__.t.bind(__webpack_require__, 57931, 17)),
        HTML: __webpack_require__.e(/* import() */ 27305).then(__webpack_require__.t.bind(__webpack_require__, 27305, 17)),
        LESS: __webpack_require__.e(/* import() */ 85089).then(__webpack_require__.t.bind(__webpack_require__, 85089, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 60346).then(__webpack_require__.t.bind(__webpack_require__, 60346, 17)),
        HTML: __webpack_require__.e(/* import() */ 28520).then(__webpack_require__.t.bind(__webpack_require__, 28520, 17)),
        LESS: __webpack_require__.e(/* import() */ 85089).then(__webpack_require__.t.bind(__webpack_require__, 85089, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 29433).then(__webpack_require__.t.bind(__webpack_require__, 29433, 17)),
        HTML: __webpack_require__.e(/* import() */ 87293).then(__webpack_require__.t.bind(__webpack_require__, 87293, 17))
      };
      this.focusable = true;
      this.index = 0;
      this.length = 8;
      this.sizeVariants = [`s`, `m`];
      this.size = this.sizeVariants[1];
      this.activePadding = 1;
      this.sidePadding = 1;
    }

  }

  ExampleTuiPaginationComponent.ɵfac = function ExampleTuiPaginationComponent_Factory(t) {
    return new (t || ExampleTuiPaginationComponent)();
  };

  ExampleTuiPaginationComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPaginationComponent,
    selectors: [["example-tui-pagination"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4234058188529646153$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__1 = goog.getMsg("Pagination component enables the user to select a specific page from a range of pages");
        i18n_0 = MSG_EXTERNAL_4234058188529646153$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟661de1abe57e9dcf4ef0b9887972092fa3139ec3␟4234058188529646153:Pagination component enables the user to select a specific page from a range of pages`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1343291924581059799$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__5 = goog.getMsg("Visible pages around active");
        i18n_4 = MSG_EXTERNAL_1343291924581059799$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1450301538176787808$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__7 = goog.getMsg("Visible edge pages");
        i18n_6 = MSG_EXTERNAL_1450301538176787808$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__9 = goog.getMsg("Custom");
        i18n_8 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1810512560805883949$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___11 = goog.getMsg(" Accepts focus with keyboard ");
        i18n_10 = MSG_EXTERNAL_1810512560805883949$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6937522081049060052$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___13 = goog.getMsg(" Active page index ");
        i18n_12 = MSG_EXTERNAL_6937522081049060052$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4207451728711936955$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___15 = goog.getMsg(" Total pages count ");
        i18n_14 = MSG_EXTERNAL_4207451728711936955$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___17 = goog.getMsg(" Size ");
        i18n_16 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7208302007968196085$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___19 = goog.getMsg(" Amount of visible pages around active page ");
        i18n_18 = MSG_EXTERNAL_7208302007968196085$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8219649223317915483$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___21 = goog.getMsg(" Amount of visible pages at the edges ");
        i18n_20 = MSG_EXTERNAL_8219649223317915483$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4453511622032715639$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiPaginationModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_4453511622032715639$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPaginationModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
        i18n_24 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Pagination", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "around", "heading", i18n_4, 3, "content"], ["id", "edges", "heading", i18n_6, 3, "content"], ["id", "custom", "heading", i18n_8, 3, "content"], [3, "focusable", "length", "size", "activePadding", "sidePadding", "index", "indexChange"], ["documentationPropertyName", "focusable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "index", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "length", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activePadding", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "sidePadding", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPaginationComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPaginationComponent_ng_template_2_Template, 9, 13, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPaginationComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPaginationExample1, TuiPaginationExample2, TuiPaginationExample3, TuiPaginationExample4, demo_component/* TuiDocDemoComponent */.F, pagination_component/* TuiPaginationComponent */.r, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPaginationComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pagination/pagination.module.ts














let ExampleTuiPaginationModule = /*#__PURE__*/(() => {
  class ExampleTuiPaginationModule {}

  ExampleTuiPaginationModule.ɵfac = function ExampleTuiPaginationModule_Factory(t) {
    return new (t || ExampleTuiPaginationModule)();
  };

  ExampleTuiPaginationModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPaginationModule
  });
  ExampleTuiPaginationModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit/* TuiBadgeModule */.fT6, kit/* TuiPaginationModule */.iwW, kit/* TuiInputSliderModule */.aJT, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, core/* TuiTextfieldControllerModule */.cnw, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPaginationComponent)), tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq]]
  });
  return ExampleTuiPaginationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPaginationModule, {
    declarations: [ExampleTuiPaginationComponent, TuiPaginationExample1, TuiPaginationExample2, TuiPaginationExample3, TuiPaginationExample4],
    imports: [kit/* TuiBadgeModule */.fT6, kit/* TuiPaginationModule */.iwW, kit/* TuiInputSliderModule */.aJT, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, core/* TuiTextfieldControllerModule */.cnw, router/* RouterModule */.Bz, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq],
    exports: [ExampleTuiPaginationComponent]
  });
})();

/***/ })

}]);