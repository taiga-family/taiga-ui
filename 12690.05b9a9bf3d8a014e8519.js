"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12690],{

/***/ 12690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMobileCalendarModule": () => (/* binding */ ExampleTuiMobileCalendarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js
var withLatestFrom = __webpack_require__(57057);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-calendar/examples/1/index.ts













let TuiMobileCalendarExample1 = /*#__PURE__*/(() => {
  class TuiMobileCalendarExample1 {
    constructor(dialogService, injector, months) {
      this.months = months;
      this.control = new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2020, 9, 3));
      this.date$ = this.control.valueChanges.pipe((0,startWith/* startWith */.O)(this.control.value), (0,withLatestFrom/* withLatestFrom */.M)(this.months), (0,map/* map */.U)(([value, months]) => this.getParsed(value, months)));
      const dataStream = (0,cdk.tuiControlValue)(this.control);
      const computedInjector = fesm2015_core/* Injector.create */.zs3.create({
        providers: [{
          provide: kit.TUI_CALENDAR_DATE_STREAM,
          useValue: dataStream
        }],
        parent: injector
      });
      const content = new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(addon_mobile.TuiMobileCalendarDialogComponent, computedInjector);
      this.dialog$ = dialogService.open(content, {
        size: `fullscreen`,
        closeable: false,
        data: {
          min: cdk.TuiDay.currentLocal()
        }
      });
    }

    get empty() {
      return !this.control.value;
    }

    getParsed(value, months) {
      if (!value) {
        return `Choose a date`;
      }

      const {
        month,
        day,
        year
      } = value;
      return `${months[month]} ${day}, ${year}`;
    }

    onClick() {
      this.dialog$.subscribe(value => {
        this.control.setValue(value);
      });
    }

  }

  TuiMobileCalendarExample1.ɵfac = function TuiMobileCalendarExample1_Factory(t) {
    return new (t || TuiMobileCalendarExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_MONTHS));
  };

  TuiMobileCalendarExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileCalendarExample1,
    selectors: [["tui-mobile-calendar-example-1"]],
    decls: 5,
    vars: 5,
    consts: [[1, "wrapper"], ["tuiIconButton", "", "type", "button", "title", "Choose a date", "appearance", "secondary", "shape", "rounded", "icon", "tuiIconCalendarLarge", 3, "click"], [1, "date"]],
    template: function TuiMobileCalendarExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMobileCalendarExample1_Template_button_click_1_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 2);
        fesm2015_core/* ɵɵtext */._uU(3);
        fesm2015_core/* ɵɵpipe */.ALo(4, "async");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("date_empty", ctx.empty);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 3, ctx.date$), " ");
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return TuiMobileCalendarExample1;
})();
// EXTERNAL MODULE: ./projects/addon-mobile/components/mobile-calendar/mobile-calendar.component.ts
var mobile_calendar_component = __webpack_require__(73104);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-calendar/examples/2/index.ts



let TuiMobileCalendarExample2 = /*#__PURE__*/(() => {
  class TuiMobileCalendarExample2 {
    constructor() {
      this.min = new cdk.TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
      this.max = new cdk.TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
    }

  }

  TuiMobileCalendarExample2.ɵfac = function TuiMobileCalendarExample2_Factory(t) {
    return new (t || TuiMobileCalendarExample2)();
  };

  TuiMobileCalendarExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileCalendarExample2,
    selectors: [["tui-mobile-calendar-example-2"]],
    decls: 2,
    vars: 3,
    consts: [[1, "example"], [3, "min", "max", "single"]],
    template: function TuiMobileCalendarExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-mobile-calendar", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("single", false);
      }
    },
    directives: [mobile_calendar_component/* TuiMobileCalendarComponent */.F],
    styles: [".example[_ngcontent-%COMP%]{height:35rem}"],
    changeDetection: 0
  });
  return TuiMobileCalendarExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-calendar/examples/3/index.ts




let TuiMobileCalendarExample3 = /*#__PURE__*/(() => {
  class TuiMobileCalendarExample3 {
    constructor() {
      this.min = cdk.TuiDay.currentLocal();
    }

  }

  TuiMobileCalendarExample3.ɵfac = function TuiMobileCalendarExample3_Factory(t) {
    return new (t || TuiMobileCalendarExample3)();
  };

  TuiMobileCalendarExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileCalendarExample3,
    selectors: [["tui-mobile-calendar-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_FIRST_DAY_OF_WEEK,
      useValue: 0
      /* Sunday */

    }])],
    decls: 1,
    vars: 1,
    consts: [[3, "min"]],
    template: function TuiMobileCalendarExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-mobile-calendar", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min);
      }
    },
    directives: [mobile_calendar_component/* TuiMobileCalendarComponent */.F],
    styles: ["tui-mobile-calendar[_ngcontent-%COMP%]{max-width:20rem;height:30rem}"],
    changeDetection: 0
  });
  return TuiMobileCalendarExample3;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-calendar/mobile-calendar.component.ts


















function ExampleTuiMobileCalendarComponent_ng_template_1_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 10);
    fesm2015_core/* ɵɵtext */._uU(2, " TUI_FIRST_DAY_OF_WEEK ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " token to change start day of the week (Monday by default). ");
  }
}

const _c12 = function () {
  return ["/components/input-date"];
};

const _c13 = function () {
  return ["/components/input-date-range"];
};

function ExampleTuiMobileCalendarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 4);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "strong");
    fesm2015_core/* ɵɵi18n */.SDv(10, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-mobile-calendar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-mobile-calendar-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiMobileCalendarComponent_ng_template_1_ng_template_16_Template, 4, 0, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-mobile-calendar-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(17);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(6, _c12));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _c13));
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3)("description", _r3);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-mobile-calendar", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.single = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx_r1.disabledItemHandler)("max", ctx_r1.max)("min", ctx_r1.min)("single", ctx_r1.single);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.single);
  }
}

function ExampleTuiMobileCalendarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 25);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 27);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "p");
    fesm2015_core/* ɵɵi18n */.SDv(16, 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-doc-code", 29);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleImportDialogModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiMobileCalendarComponent = /*#__PURE__*/(() => {
  class ExampleTuiMobileCalendarComponent {
    constructor() {
      this.exampleHtml = __webpack_require__.e(/* import() */ 87147).then(__webpack_require__.t.bind(__webpack_require__, 87147, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 38346).then(__webpack_require__.t.bind(__webpack_require__, 38346, 17));
      this.exampleImportDialogModule = __webpack_require__.e(/* import() */ 60697).then(__webpack_require__.t.bind(__webpack_require__, 60697, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 96985).then(__webpack_require__.t.bind(__webpack_require__, 96985, 17)),
        HTML: __webpack_require__.e(/* import() */ 82551).then(__webpack_require__.t.bind(__webpack_require__, 82551, 17)),
        LESS: __webpack_require__.e(/* import() */ 95840).then(__webpack_require__.t.bind(__webpack_require__, 95840, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 38739).then(__webpack_require__.t.bind(__webpack_require__, 38739, 17)),
        HTML: __webpack_require__.e(/* import() */ 65382).then(__webpack_require__.t.bind(__webpack_require__, 65382, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 8863).then(__webpack_require__.t.bind(__webpack_require__, 8863, 17)),
        HTML: __webpack_require__.e(/* import() */ 58130).then(__webpack_require__.t.bind(__webpack_require__, 58130, 17)),
        LESS: __webpack_require__.e(/* import() */ 1468).then(__webpack_require__.t.bind(__webpack_require__, 1468, 17))
      };
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiDay(2017, 2, 5), new cdk.TuiDay(1900, 0, 1)];
      this.min = this.minVariants[0];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiDay(2020, 2, 5), new cdk.TuiDay(2300, 0, 1)];
      this.max = this.maxVariants[0];
      this.single = true;
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        day
      }) => day % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.stream = (0,cdk.tuiControlValue)(this.control);
    }

  }

  ExampleTuiMobileCalendarComponent.ɵfac = function ExampleTuiMobileCalendarComponent_Factory(t) {
    return new (t || ExampleTuiMobileCalendarComponent)();
  };

  ExampleTuiMobileCalendarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMobileCalendarComponent,
    selectors: [["example-tui-mobile-calendar"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_CALENDAR_DATE_STREAM,
      deps: [ExampleTuiMobileCalendarComponent],
      useFactory: component => component.stream
    }])],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1931204519440953968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__1 = goog.getMsg(" A calendar for mobile devices. It is used in {$startLink} InputDate {$closeLink} and {$startLink_1} InputDateRange {$closeLink} if {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} are both imported once in the main module ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink_1": "\uFFFD#3\uFFFD",
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_0 = MSG_EXTERNAL_1931204519440953968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟e253a142950382b57f7a632d8882cc344d30496b␟1931204519440953968: A calendar for mobile devices. It is used in ${"\uFFFD#2\uFFFD"}:START_LINK: InputDate ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: InputDateRange ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: if ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: are both imported once in the main module `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7782646258279612162$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__3 = goog.getMsg(" You can use {$startTagCode}TUI_CALENDAR_DATE_STREAM{$closeTagCode} token to set value from outside (see samples) ", {
          "startTagCode": "\uFFFD#8\uFFFD",
          "closeTagCode": "\uFFFD/#8\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7782646258279612162$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟37450d9bbcdd2e6c6c427202fa81ded22ebf7d3a␟7782646258279612162: You can use ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:TUI_CALENDAR_DATE_STREAM${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: token to set value from outside (see samples) `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2432796667542330911$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__5 = goog.getMsg("Component should be used on mobile devices as fullscreen dialog");
        i18n_4 = MSG_EXTERNAL_2432796667542330911$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟be132442c61ba6f1af8c7f6a614b07ce4aea8918␟2432796667542330911:Component should be used on mobile devices as fullscreen dialog`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3980173860964639072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__7 = goog.getMsg("Custom dropdown");
        i18n_6 = MSG_EXTERNAL_3980173860964639072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0361f42c5934060e30ced524323effc0a4fe560f␟3980173860964639072:Custom dropdown`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2348971518300945764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__9 = goog.getMsg("Range");
        i18n_8 = MSG_EXTERNAL_2348971518300945764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2732752787737094710$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__11 = goog.getMsg("Localization");
        i18n_10 = MSG_EXTERNAL_2732752787737094710$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟e061ac5bfcd825eb1f33d30b974df79546114460␟2732752787737094710:Localization`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___15 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___17 = goog.getMsg(" Max date ");
        i18n_16 = MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___19 = goog.getMsg(" Min date ");
        i18n_18 = MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4032379093756044480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___21 = goog.getMsg(" Single date or a range ");
        i18n_20 = MSG_EXTERNAL_4032379093756044480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟2a1554aaea9c8357628e5c7de4f8fb7615e37d70␟4032379093756044480: Single date or a range `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8437696185745475137$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___23 = goog.getMsg(" \"Cancel\" clicked ");
        i18n_22 = MSG_EXTERNAL_8437696185745475137$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟166ac781bfe693de7c6c507c3747d4fad5808bfe␟8437696185745475137: "Cancel" clicked `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3862541995331771793$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___25 = goog.getMsg(" \"Confirm\" button clicked ");
        i18n_24 = MSG_EXTERNAL_3862541995331771793$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟0b81f93ee05a0d9a3237fb88342921b96a0aec2a␟3862541995331771793: "Confirm" button clicked `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_194075401487100702$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiDialogModule{$closeTagCode} and {$startTagCode}TuiMobileCalendarModule{$closeTagCode} once into the main module ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_26 = MSG_EXTERNAL_194075401487100702$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟ca588819ac4ec61a814c286dfbc0f57f3aa24973␟194075401487100702: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: once into the main module `;
      }

      i18n_26 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_26);
      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5351309614134079765$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__29 = goog.getMsg(" Import {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} for automatic use with {$startTagCode}TuiInputDate{$closeTagCode} or {$startTagCode}TuiInputDateRange{$closeTagCode} : ", {
          "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]",
          "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"
        });
        i18n_28 = MSG_EXTERNAL_5351309614134079765$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟a448f82c6f5ac9a0ac04ed774204f6b5fe5713c3␟5351309614134079765: Import ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: for automatic use with ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiInputDate${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiInputDateRange${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: : `;
      }

      i18n_28 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_28);
      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
        i18n_30 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "MobileCalendar", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", 3, "routerLink"], i18n_2, i18n_4, ["id", "dropdown", "heading", i18n_6, 3, "content"], ["id", "range", "heading", i18n_8, 3, "content"], ["id", "localization", "heading", i18n_10, 3, "content", "description"], ["localizationDescription", ""], ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "first-day-of-week"], [1, "calendar", 3, "disabledItemHandler", "max", "min", "single"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "single", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cancel", "documentationPropertyMode", "output", "documentationPropertyType", "void"], ["documentationPropertyName", "confirm", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDayRange | TuiDay"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [1, "b-demo-steps"], i18n_26, ["filename", "myComponent.module.ts", 3, "code"], i18n_28, i18n_30, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMobileCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMobileCalendarComponent_ng_template_1_Template, 19, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMobileCalendarComponent_ng_template_2_Template, 9, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMobileCalendarComponent_ng_template_3_Template, 18, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiMobileCalendarExample1, TuiMobileCalendarExample2, TuiMobileCalendarExample3, demo_component/* TuiDocDemoComponent */.F, mobile_calendar_component/* TuiMobileCalendarComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".calendar[_ngcontent-%COMP%]{height:28.75rem}"],
    changeDetection: 0
  });
  return ExampleTuiMobileCalendarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-calendar/mobile-calendar.module.ts












let ExampleTuiMobileCalendarModule = /*#__PURE__*/(() => {
  class ExampleTuiMobileCalendarModule {}

  ExampleTuiMobileCalendarModule.ɵfac = function ExampleTuiMobileCalendarModule_Factory(t) {
    return new (t || ExampleTuiMobileCalendarModule)();
  };

  ExampleTuiMobileCalendarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMobileCalendarModule
  });
  ExampleTuiMobileCalendarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiButtonModule, addon_mobile.TuiMobileCalendarModule, addon_mobile.TuiMobileCalendarDialogModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMobileCalendarComponent))]]
  });
  return ExampleTuiMobileCalendarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMobileCalendarModule, {
    declarations: [ExampleTuiMobileCalendarComponent, TuiMobileCalendarExample1, TuiMobileCalendarExample2, TuiMobileCalendarExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiButtonModule, addon_mobile.TuiMobileCalendarModule, addon_mobile.TuiMobileCalendarDialogModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiMobileCalendarComponent]
  });
})();

/***/ })

}]);