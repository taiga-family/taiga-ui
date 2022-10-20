"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[30153],{

/***/ 30153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiProgressSegmentedModule": () => (/* binding */ ExampleTuiProgressSegmentedModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-segmented/progress-segmented.component.ts
var progress_segmented_component = __webpack_require__(19204);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/examples/1/index.ts


let TuiProgressSegmentedExample1 = /*#__PURE__*/(() => {
  class TuiProgressSegmentedExample1 {}

  TuiProgressSegmentedExample1.ɵfac = function TuiProgressSegmentedExample1_Factory(t) {
    return new (t || TuiProgressSegmentedExample1)();
  };

  TuiProgressSegmentedExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressSegmentedExample1,
    selectors: [["tui-progress-segmented-example-1"]],
    decls: 1,
    vars: 2,
    consts: [[1, "progress", 3, "max", "value"]],
    template: function TuiProgressSegmentedExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-progress-segmented", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 5)("value", 3);
      }
    },
    directives: [progress_segmented_component/* TuiProgressSegmentedComponent */.O],
    styles: [".progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressSegmentedExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/examples/2/index.ts


let TuiProgressSegmentedExample2 = /*#__PURE__*/(() => {
  class TuiProgressSegmentedExample2 {}

  TuiProgressSegmentedExample2.ɵfac = function TuiProgressSegmentedExample2_Factory(t) {
    return new (t || TuiProgressSegmentedExample2)();
  };

  TuiProgressSegmentedExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressSegmentedExample2,
    selectors: [["tui-progress-segmented-example-2"]],
    decls: 2,
    vars: 4,
    consts: [["size", "s", 1, "progress", 3, "max", "value"], ["size", "m", 1, "progress", 3, "max", "value"]],
    template: function TuiProgressSegmentedExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-progress-segmented", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-progress-segmented", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 7)("value", 3);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 10)("value", 6);
      }
    },
    directives: [progress_segmented_component/* TuiProgressSegmentedComponent */.O],
    styles: [".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1.5rem}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressSegmentedExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/examples/3/index.ts


let TuiProgressSegmentedExample3 = /*#__PURE__*/(() => {
  class TuiProgressSegmentedExample3 {
    constructor() {
      this.arrayColors = [`#39b54a`, `#ffd450`, `#ffd450`, `#fcc521`, `#fab619`, `#f8a34d`, `#e01f19`];
    }

  }

  TuiProgressSegmentedExample3.ɵfac = function TuiProgressSegmentedExample3_Factory(t) {
    return new (t || TuiProgressSegmentedExample3)();
  };

  TuiProgressSegmentedExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressSegmentedExample3,
    selectors: [["tui-progress-segmented-example-3"]],
    decls: 2,
    vars: 5,
    consts: [["colors", "var(--tui-support-20)", 1, "progress", 3, "max", "value"], [1, "progress", 3, "max", "value", "colors"]],
    template: function TuiProgressSegmentedExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-progress-segmented", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-progress-segmented", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 8)("value", 6);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", ctx.arrayColors.length)("value", ctx.arrayColors.length)("colors", ctx.arrayColors);
      }
    },
    directives: [progress_segmented_component/* TuiProgressSegmentedComponent */.O],
    styles: [".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1.5rem}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressSegmentedExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/examples/4/index.ts




let TuiProgressSegmentedExample4 = /*#__PURE__*/(() => {
  class TuiProgressSegmentedExample4 {}

  TuiProgressSegmentedExample4.ɵfac = function TuiProgressSegmentedExample4_Factory(t) {
    return new (t || TuiProgressSegmentedExample4)();
  };

  TuiProgressSegmentedExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressSegmentedExample4,
    selectors: [["tui-progress-segmented-example-4"]],
    decls: 6,
    vars: 3,
    consts: [[3, "max", "value"], [1, "description", "tui-space_top-2"], ["tuiLabel", "Step"], [3, "value"], ["tuiLabel", "New apartment"]],
    template: function TuiProgressSegmentedExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-progress-segmented", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "label", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-money", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "label", 4);
        fesm2015_core/* ɵɵtext */._uU(5, "2 times left");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 5)("value", 3);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 100500);
      }
    },
    directives: [progress_segmented_component/* TuiProgressSegmentedComponent */.O, label_component/* TuiLabelComponent */.A, money_component/* TuiMoneyComponent */.o],
    styles: [".description[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.description[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{text-align:left}.description[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{text-align:right}"],
    changeDetection: 0
  });
  return TuiProgressSegmentedExample4;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/progress-segmented.component.ts














function ExampleProgressSegmentedComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "dl");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "dt");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "dd");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-progress-segmented-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-progress-segmented-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-progress-segmented-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-progress-segmented-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.basicExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.sizesExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.colorsExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.labelsExample);
  }
}

function ExampleProgressSegmentedComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressSegmentedComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵelement */._UZ(3, "strong");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressSegmentedComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleProgressSegmentedComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 15);
    fesm2015_core/* ɵɵelement */._UZ(1, "p");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressSegmentedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-progress-segmented", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleProgressSegmentedComponent_ng_template_2_ng_template_3_Template, 4, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressSegmentedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleProgressSegmentedComponent_ng_template_2_ng_template_4_Template, 5, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressSegmentedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleProgressSegmentedComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressSegmentedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleProgressSegmentedComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressSegmentedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.color = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("max", ctx_r1.max)("value", ctx_r1.value)("size", ctx_r1.size)("colors", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
  }
}

function ExampleProgressSegmentedComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 17);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 20);
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

let ExampleProgressSegmentedComponent = /*#__PURE__*/(() => {
  class ExampleProgressSegmentedComponent {
    constructor() {
      this.value = 3;
      this.max = 5;
      this.sizeVariants = [`m`, `s`];
      this.size = this.sizeVariants[0];
      this.colorVariants = [`var(--tui-primary)`, `lightskyblue`, `#3682db`, `rgba(74, 201, 155, 1)`, new Array(this.max).fill(``).map((_, index) => `var(--tui-support-0${index + 1})`)];
      this.color = this.colorVariants[0];
      this.basicExample = {
        HTML: __webpack_require__.e(/* import() */ 36754).then(__webpack_require__.t.bind(__webpack_require__, 36754, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 83536).then(__webpack_require__.t.bind(__webpack_require__, 83536, 17)),
        LESS: __webpack_require__.e(/* import() */ 59849).then(__webpack_require__.t.bind(__webpack_require__, 53216, 17))
      };
      this.sizesExample = {
        HTML: __webpack_require__.e(/* import() */ 67613).then(__webpack_require__.t.bind(__webpack_require__, 67613, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 57048).then(__webpack_require__.t.bind(__webpack_require__, 57048, 17)),
        LESS: __webpack_require__.e(/* import() */ 85455).then(__webpack_require__.t.bind(__webpack_require__, 85455, 17))
      };
      this.colorsExample = {
        HTML: __webpack_require__.e(/* import() */ 57101).then(__webpack_require__.t.bind(__webpack_require__, 57101, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 80375).then(__webpack_require__.t.bind(__webpack_require__, 80375, 17)),
        LESS: __webpack_require__.e(/* import() */ 48580).then(__webpack_require__.t.bind(__webpack_require__, 48580, 17))
      };
      this.labelsExample = {
        HTML: __webpack_require__.e(/* import() */ 437).then(__webpack_require__.t.bind(__webpack_require__, 437, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 63883).then(__webpack_require__.t.bind(__webpack_require__, 63883, 17)),
        LESS: __webpack_require__.e(/* import() */ 94760).then(__webpack_require__.t.bind(__webpack_require__, 94760, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 46623).then(__webpack_require__.t.bind(__webpack_require__, 46623, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 19102).then(__webpack_require__.t.bind(__webpack_require__, 19102, 17));
    }

  }

  ExampleProgressSegmentedComponent.ɵfac = function ExampleProgressSegmentedComponent_Factory(t) {
    return new (t || ExampleProgressSegmentedComponent)();
  };

  ExampleProgressSegmentedComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleProgressSegmentedComponent,
    selectors: [["example-progress-segmented"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7023921315459293375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}<tui-progress-segmented />{$closeTagCode}{$closeTagDt}{$startTagDd} is a component to visually represent the completion of a process or operation (as a segmented bar). It shows how much has been completed and how much remains. {$closeTagDd}", {
          "startTagDt": "\uFFFD#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeTagDt": "\uFFFD/#2\uFFFD",
          "startTagDd": "\uFFFD#4\uFFFD",
          "closeTagDd": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7023921315459293375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟2cd02c1652b1ed1b7f089329fe33c2818be34450␟7023921315459293375:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:<tui-progress-segmented />${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: is a component to visually represent the completion of a process or operation (as a segmented bar). It shows how much has been completed and how much remains. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__5 = goog.getMsg("Sizes");
        i18n_4 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__7 = goog.getMsg("Colors");
        i18n_6 = MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__9 = goog.getMsg("With labels");
        i18n_8 = MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟20fea4a90c025dc5f782601c437174dcdc02db7e␟1028344547250868618:With labels`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4567385815446020958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___11 = goog.getMsg(" This property specifies how much of the task that has been completed. {$startParagraph} It must be a valid {$startTagStrong}integer{$closeTagStrong} number between 0 and {$startTagCode}max{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_4567385815446020958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟fa352cfca60e22b23d15bcdb2040b567db48df43␟4567385815446020958: This property specifies how much of the task that has been completed. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: It must be a valid ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:integer${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: number between 0 and ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:max${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4940375580644621564$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___13 = goog.getMsg("{$startParagraph}This property describes how much work the task indicated by the progress element requires.{$closeParagraph}{$startParagraph} It must be a valid {$startTagStrong}positive integer{$closeTagStrong} number. The default value is {$startTagCode}1{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeParagraph": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]",
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD",
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_4940375580644621564$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟b509b82776c0f07a0139f8c9a40173a46436343b␟4940375580644621564:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH:This property describes how much work the task indicated by the progress element requires.${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH: It must be a valid ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:positive integer${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: number. The default value is ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: . ${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_12 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7542397321107351375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___15 = goog.getMsg(" Height of the progress. ");
        i18n_14 = MSG_EXTERNAL_7542397321107351375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟22f8f2ae929131fce5c72417b15d8c2bad8d4346␟7542397321107351375: Height of the progress. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1082062354331618370$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___17 = goog.getMsg(" Color of the progress segments. {$startParagraph}It can be a single color-string or array of color-strings for each segment.{$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_1082062354331618370$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟c09ac9a86b00ba373a0e7545688c60578ad9f9b2␟1082062354331618370: Color of the progress segments. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:It can be a single color-string or array of color-strings for each segment.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1544037559221110858$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiProgressModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1544037559221110858$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟b2342227392ebea4df6aa6cba85e57fb10b5feb9␟1544037559221110858: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiProgressModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_SEGMENTED_PROGRESS_SEGMENTED_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "ProgressSegmented", "package", "KIT", "path", "kit/components/progress/progress-segmented"], ["pageTab", ""], i18n_0, ["id", "basic", "heading", i18n_2, 3, "content"], ["id", "sizes", "heading", i18n_4, 3, "content"], ["id", "colors", "heading", i18n_6, 3, "content"], ["id", "labels", "heading", i18n_8, 3, "content"], [3, "max", "value", "size", "colors"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "colors", "documentationPropertyMode", "input", "documentationPropertyType", "string | string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleProgressSegmentedComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleProgressSegmentedComponent_ng_template_1_Template, 13, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleProgressSegmentedComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleProgressSegmentedComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiProgressSegmentedExample1, TuiProgressSegmentedExample2, TuiProgressSegmentedExample3, TuiProgressSegmentedExample4, demo_component/* TuiDocDemoComponent */.F, progress_segmented_component/* TuiProgressSegmentedComponent */.O, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: ["dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{display:inline;margin:0}"]
  });
  return ExampleProgressSegmentedComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-segmented/progress-segmented.module.ts













let ExampleTuiProgressSegmentedModule = /*#__PURE__*/(() => {
  class ExampleTuiProgressSegmentedModule {}

  ExampleTuiProgressSegmentedModule.ɵfac = function ExampleTuiProgressSegmentedModule_Factory(t) {
    return new (t || ExampleTuiProgressSegmentedModule)();
  };

  ExampleTuiProgressSegmentedModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiProgressSegmentedModule
  });
  ExampleTuiProgressSegmentedModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, core.TuiLabelModule, addon_commerce.TuiMoneyModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleProgressSegmentedComponent))]]
  });
  return ExampleTuiProgressSegmentedModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiProgressSegmentedModule, {
    declarations: [ExampleProgressSegmentedComponent, TuiProgressSegmentedExample1, TuiProgressSegmentedExample2, TuiProgressSegmentedExample3, TuiProgressSegmentedExample4],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, core.TuiLabelModule, addon_commerce.TuiMoneyModule, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);