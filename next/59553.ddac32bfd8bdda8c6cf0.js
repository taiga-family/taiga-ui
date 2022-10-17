"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[59553],{

/***/ 59553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTabsModule": () => (/* binding */ ExampleTuiTabsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/tabs/tabs/tabs.component.ts
var tabs_component = __webpack_require__(892);
// EXTERNAL MODULE: ./projects/kit/components/tabs/tabs.directive.ts
var tabs_directive = __webpack_require__(77347);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/mobile-tabs/mobile-tabs.directive.ts
var mobile_tabs_directive = __webpack_require__(96996);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/kit/components/tabs/tab/tab.component.ts
var tab_component = __webpack_require__(97611);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/ripple/ripple.directive.ts
var ripple_directive = __webpack_require__(59759);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/1/index.ts















function TuiTabsExample1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample1_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r2.onClick(item_r1.text);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 4);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("src", item_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r1.text, " ");
  }
}

let TuiTabsExample1 = /*#__PURE__*/(() => {
  class TuiTabsExample1 {
    constructor(alerts) {
      this.alerts = alerts;
      this.items = [{
        text: `Maps`,
        icon: `tuiIconCard`
      }, {
        text: `Calls`,
        icon: `tuiIconCall`
      }, {
        text: `Settings`,
        icon: `tuiIconSettings`
      }];
      this.activeItemIndex = 0;
    }

    onClick(item) {
      this.alerts.open(item).subscribe();
    }

  }

  TuiTabsExample1.ɵfac = function TuiTabsExample1_Factory(t) {
    return new (t || TuiTabsExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiTabsExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample1,
    selectors: [["tui-tabs-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_IOS,
      useValue: false
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: true
    }])],
    decls: 4,
    vars: 4,
    consts: [["tuiMobileTabs", "", 3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", 3, "click", 4, "ngFor", "ngForOf"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", 3, "click"], [1, "tui-space_right-2", 3, "src"]],
    template: function TuiTabsExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample1_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample1_button_1_Template, 3, 2, "button", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample1_Template_tui_input_count_ngModelChange_2_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(3, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 2)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_component/* TuiTabsComponent */.H, tabs_directive/* TuiTabsDirective */.p, mobile_tabs_directive/* TuiMobileTabsDirective */.d, common/* NgForOf */.sg, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, tab_component/* TuiTabComponent */.y, ripple_directive/* TuiRippleDirective */.q, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTabsExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/2/index.ts














function TuiTabsExample2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample2_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r2.onClick(item_r1.text);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 4);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("src", item_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r1.text, " ");
  }
}

let TuiTabsExample2 = /*#__PURE__*/(() => {
  class TuiTabsExample2 {
    constructor(alerts) {
      this.alerts = alerts;
      this.items = [{
        text: `Maps`,
        icon: `tuiIconCard`
      }, {
        text: `Calls`,
        icon: `tuiIconCall`
      }, {
        text: `Settings`,
        icon: `tuiIconSettings`
      }];
      this.activeItemIndex = 0;
    }

    onClick(item) {
      this.alerts.open(item).subscribe();
    }

  }

  TuiTabsExample2.ɵfac = function TuiTabsExample2_Factory(t) {
    return new (t || TuiTabsExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiTabsExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample2,
    selectors: [["tui-tabs-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_IOS,
      useValue: true
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: false
    }])],
    decls: 4,
    vars: 4,
    consts: [["tuiMobileTabs", "", 3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"], ["tuiTab", "", 3, "click"], [1, "tui-space_right-2", 3, "src"]],
    template: function TuiTabsExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample2_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample2_button_1_Template, 3, 2, "button", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample2_Template_tui_input_count_ngModelChange_2_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(3, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 2)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_component/* TuiTabsComponent */.H, tabs_directive/* TuiTabsDirective */.p, mobile_tabs_directive/* TuiMobileTabsDirective */.d, common/* NgForOf */.sg, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, tab_component/* TuiTabComponent */.y, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTabsExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/3/index.ts










let TuiTabsExample3 = /*#__PURE__*/(() => {
  class TuiTabsExample3 {
    constructor(alertService) {
      this.alertService = alertService;
      this.activeItemIndex = 0;
    }

    onClick(item) {
      this.alertService.open(item).subscribe();
    }

  }

  TuiTabsExample3.ɵfac = function TuiTabsExample3_Factory(t) {
    return new (t || TuiTabsExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiTabsExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample3,
    selectors: [["tui-tabs-example-3"]],
    decls: 12,
    vars: 3,
    consts: [[3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", 3, "click"], ["src", "tuiIconCard", 1, "tui-space_right-2"], ["tuiTab", "", "disabled", "", 3, "click"], ["src", "tuiIconCall", 1, "tui-space_right-2"], ["src", "tuiIconSettings", 1, "tui-space_right-2"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"]],
    template: function TuiTabsExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample3_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample3_Template_button_click_1_listener() {
          return ctx.onClick("Maps");
        });
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Maps ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample3_Template_button_click_4_listener() {
          return ctx.onClick("Calls");
        });
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Calls ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample3_Template_button_click_7_listener() {
          return ctx.onClick("Settings");
        });
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-svg", 5);
        fesm2015_core/* ɵɵtext */._uU(9, " Settings ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-input-count", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample3_Template_tui_input_count_ngModelChange_10_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(11, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(10);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 2)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_component/* TuiTabsComponent */.H, tabs_directive/* TuiTabsDirective */.p, tab_component/* TuiTabComponent */.y, svg_component/* TuiSvgComponent */.P, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTabsExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/tabs/tabs-with-more/tabs-with-more.component.ts
var tabs_with_more_component = __webpack_require__(18766);
// EXTERNAL MODULE: ./projects/cdk/directives/item/item.directive.ts
var item_directive = __webpack_require__(82707);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/4/index.ts











function TuiTabsExample4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample4_button_1_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.onClick("Maps");
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 5);
    fesm2015_core/* ɵɵtext */._uU(2, " Maps ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTabsExample4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample4_button_2_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.onClick("Calls");
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 7);
    fesm2015_core/* ɵɵtext */._uU(2, " Calls ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTabsExample4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample4_button_3_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.onClick("Settings");
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 8);
    fesm2015_core/* ɵɵtext */._uU(2, " Settings ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTabsExample4_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample4_button_4_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.onClick("Favorite");
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 9);
    fesm2015_core/* ɵɵtext */._uU(2, " Favorite ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTabsExample4_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample4_button_5_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.onClick("Trash");
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 10);
    fesm2015_core/* ɵɵtext */._uU(2, " Trash ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiTabsExample4 = /*#__PURE__*/(() => {
  class TuiTabsExample4 {
    constructor(alertService) {
      this.alertService = alertService;
      this.activeItemIndex = 0;
    }

    onClick(item) {
      this.alertService.open(item).subscribe();
    }

  }

  TuiTabsExample4.ɵfac = function TuiTabsExample4_Factory(t) {
    return new (t || TuiTabsExample4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiTabsExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample4,
    selectors: [["tui-tabs-example-4"]],
    decls: 8,
    vars: 4,
    consts: [[3, "itemsLimit", "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", 3, "click", 4, "tuiItem"], ["tuiTab", "", "disabled", "", 3, "click", 4, "tuiItem"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"], ["tuiTab", "", 3, "click"], ["src", "tuiIconCard", 1, "tui-space_right-2"], ["tuiTab", "", "disabled", "", 3, "click"], ["src", "tuiIconCall", 1, "tui-space_right-2"], ["src", "tuiIconSettings", 1, "tui-space_right-2"], ["src", "tuiIconHeart", 1, "tui-space_right-2"], ["src", "tuiIconTrash", 1, "tui-space_right-2"]],
    template: function TuiTabsExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs-with-more", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample4_Template_tui_tabs_with_more_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample4_button_1_Template, 3, 0, "button", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTabsExample4_button_2_Template, 3, 0, "button", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTabsExample4_button_3_Template, 3, 0, "button", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTabsExample4_button_4_Template, 3, 0, "button", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTabsExample4_button_5_Template, 3, 0, "button", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-count", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample4_Template_tui_input_count_ngModelChange_6_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(7, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("itemsLimit", 3)("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 4)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_with_more_component/* TuiTabsWithMoreComponent */.W, item_directive/* TuiItemDirective */.w, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, tab_component/* TuiTabComponent */.y, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTabsExample4;
})();
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/5/index.ts












function TuiTabsExample5_ng_container_4_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample5_ng_container_4_ng_container_1_button_1_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const tab_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.onClick(tab_r5);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const tab_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", tab_r5, " ");
  }
}

function TuiTabsExample5_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample5_ng_container_4_ng_container_1_button_1_Template, 2, 1, "button", 9);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiTabsExample5_ng_container_4_ng_template_2_tui_hosted_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiTabsExample5_ng_container_4_ng_template_2_tui_hosted_dropdown_0_Template_tui_hosted_dropdown_openChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r15.open = $event;
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("tui-tab-activate", function TuiTabsExample5_ng_container_4_ng_template_2_tui_hosted_dropdown_0_Template_button_tui_tab_activate_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r17.stop($event);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Collaborators ");
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(3);

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(8);

    fesm2015_core/* ɵɵproperty */.Q6J("content", _r1)("open", ctx_r14.open);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵclassProp */.ekj("icon_rotated", ctx_r14.open);
  }
}

function TuiTabsExample5_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiTabsExample5_ng_container_4_ng_template_2_tui_hosted_dropdown_0_Template, 4, 4, "tui-hosted-dropdown", 11);
  }
}

function TuiTabsExample5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample5_ng_container_4_ng_container_1_Template, 2, 0, "ng-container", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTabsExample5_ng_container_4_ng_template_2_Template, 1, 0, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const tab_r5 = ctx.$implicit;

    const _r7 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.isString(tab_r5))("ngIfElse", _r7);
  }
}

function TuiTabsExample5_ng_template_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample5_ng_template_7_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r21);
      const collaborator_r19 = restoredCtx.$implicit;
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r20.onClick(collaborator_r19);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const collaborator_r19 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", collaborator_r19, " ");
  }
}

function TuiTabsExample5_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample5_ng_template_7_button_1_Template, 2, 1, "button", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.collaborators);
  }
}

function TuiTabsExample5_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 17);
  }
}

let TuiTabsExample5 = /*#__PURE__*/(() => {
  class TuiTabsExample5 {
    constructor() {
      this.collaborators = [`Carol Cleveland`, `Neil Innes`];
      this.tabs = [`John Cleese`, `Eric Idle`, this.collaborators, `Michael Palin`, `Terry Jones`, `Terry Gilliam`, `Graham Chapman`];
      this.activeElement = String(this.tabs[0]);
      this.open = false;
    }

    get activeItemIndex() {
      if (this.collaborators.includes(this.activeElement)) {
        return this.tabs.indexOf(this.collaborators);
      }

      return this.tabs.indexOf(this.activeElement);
    }

    stop(event) {
      // We need to stop tab custom event so parent component does not think its active
      event.stopPropagation();
    }

    onClick(activeElement) {
      this.activeElement = activeElement;
      this.open = false;
    }

    isString(tab) {
      return (0,cdk.tuiIsString)(tab);
    }

  }

  TuiTabsExample5.ɵfac = function TuiTabsExample5_Factory(t) {
    return new (t || TuiTabsExample5)();
  };

  TuiTabsExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample5,
    selectors: [["tui-tabs-example-5"]],
    decls: 11,
    vars: 4,
    consts: [["tuiMode", "onDark", 1, "wrapper"], [1, "tui-text_h3", "title"], [1, "tabs", 3, "activeItemIndex", "moreContent"], [4, "ngFor", "ngForOf"], [1, "content"], ["dropdown", ""], ["more", ""], [4, "ngIf", "ngIfElse"], ["submenu", ""], ["tuiTab", "", 3, "click", 4, "tuiItem"], ["tuiTab", "", 3, "click"], [3, "content", "open", "openChange", 4, "tuiItem"], [3, "content", "open", "openChange"], ["tuiTab", "", 3, "tui-tab-activate"], ["src", "tuiIconChevronDown", 1, "icon"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "click"], ["src", "tuiIconMoreHorLarge"]],
    template: function TuiTabsExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h1", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Monty Python");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-tabs-with-more", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTabsExample5_ng_container_4_Template, 4, 2, "ng-container", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "section", 4);
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTabsExample5_ng_template_7_Template, 2, 1, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiTabsExample5_ng_template_9_Template, 1, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r3 = fesm2015_core/* ɵɵreference */.MAs(10);

        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.activeItemIndex)("moreContent", _r3);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.tabs);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Currently active: ", ctx.activeElement, "");
      }
    },
    directives: [mode_directive/* TuiModeDirective */.w, tabs_with_more_component/* TuiTabsWithMoreComponent */.W, common/* NgForOf */.sg, common/* NgIf */.O5, item_directive/* TuiItemDirective */.w, tab_component/* TuiTabComponent */.y, hosted_dropdown_component/* TuiHostedDropdownComponent */.o, svg_component/* TuiSvgComponent */.P, data_list_component/* TuiDataListComponent */.q, option_component/* TuiOptionComponent */.v],
    styles: ["[_nghost-%COMP%]{display:block;margin:-2rem;background:#454e58;color:#fff}.wrapper[_ngcontent-%COMP%]{box-shadow:inset 0 -1px var(--tui-base-03);box-shadow:inset 0 -1px rgba(255,255,255,.24);display:flex;align-items:center;padding:2rem 2rem 0}.content[_ngcontent-%COMP%]{padding:2rem 2rem 4rem}.title[_ngcontent-%COMP%]{min-width:15.625rem;margin:0}.tabs[_ngcontent-%COMP%]{width:calc(100% - 15.625rem);justify-content:flex-end;box-shadow:none}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.25rem}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
    changeDetection: 0
  });
  return TuiTabsExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/6/index.ts












function TuiTabsExample6_ng_container_1_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 5);
  }
}

function TuiTabsExample6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample6_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const step_r1 = restoredCtx.$implicit;
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.onClick(step_r1);
    });
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTabsExample6_ng_container_1_tui_svg_3_Template, 1, 0, "tui-svg", 4);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("disabled", last_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", step_r1, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !last_r2);
  }
}

let TuiTabsExample6 = /*#__PURE__*/(() => {
  class TuiTabsExample6 {
    constructor(notifications) {
      this.notifications = notifications;
      this.activeItemIndex = 0;
      this.steps = [`Sales`, `Settings`, `News`];
    }

    onClick(item) {
      this.notifications.open(item).subscribe();
    }

  }

  TuiTabsExample6.ɵfac = function TuiTabsExample6_Factory(t) {
    return new (t || TuiTabsExample6)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiTabsExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample6,
    selectors: [["tui-tabs-example-6"]],
    decls: 4,
    vars: 4,
    consts: [[3, "activeItemIndex", "activeItemIndexChange"], [4, "ngFor", "ngForOf"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"], ["tuiTab", "", 1, "step", 3, "disabled", "click"], ["src", "tuiIconChevronRight", "class", "separator", 4, "ngIf"], ["src", "tuiIconChevronRight", 1, "separator"]],
    template: function TuiTabsExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample6_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample6_ng_container_1_Template, 4, 3, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample6_Template_tui_input_count_ngModelChange_2_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(3, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.steps);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 2)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_component/* TuiTabsComponent */.H, tabs_directive/* TuiTabsDirective */.p, common/* NgForOf */.sg, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, tab_component/* TuiTabComponent */.y, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P],
    styles: [".step[_ngcontent-%COMP%]{margin:0;color:var(--tui-link)}.step[_ngcontent-%COMP%]:hover{color:var(--tui-link-hover)}.separator[_ngcontent-%COMP%]{height:100%;color:var(--tui-base-03);margin:0 .75rem}"],
    changeDetection: 0
  });
  return TuiTabsExample6;
})();
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/7/index.ts











function TuiTabsExample7_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("keydown.delete", function TuiTabsExample7_ng_container_1_button_1_Template_button_keydown_delete_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.remove(item_r1);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-svg", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click.stop", function TuiTabsExample7_ng_container_1_button_1_Template_tui_svg_click_stop_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.remove(item_r1);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r1, " ");
  }
}

function TuiTabsExample7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample7_ng_container_1_button_1_Template, 3, 1, "button", 4);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiTabsExample7 = /*#__PURE__*/(() => {
  class TuiTabsExample7 {
    constructor() {
      this.activeItemIndex = 0;
      this.items = Array.from({
        length: 5
      }, (_, i) => `Item #${i}`);
    }

    add() {
      this.items = this.items.concat(`Item #${Date.now()}`);
    }

    remove(removed) {
      const index = this.items.indexOf(removed);
      this.items = this.items.filter(item => item !== removed);

      if (index <= this.activeItemIndex) {
        this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
      }
    }

  }

  TuiTabsExample7.ɵfac = function TuiTabsExample7_Factory(t) {
    return new (t || TuiTabsExample7)();
  };

  TuiTabsExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample7,
    selectors: [["tui-tabs-example-7"]],
    decls: 8,
    vars: 6,
    consts: [[3, "itemsLimit", "activeItemIndex", "activeItemIndexChange"], [4, "ngFor", "ngForOf"], ["tuiButton", "", 3, "click"], [1, "tui-space_top-4", 3, "max", "ngModel", "ngModelChange"], ["tuiTab", "", 3, "keydown.delete", 4, "tuiItem"], ["tuiTab", "", 3, "keydown.delete"], ["src", "tuiIconCloseLarge", 1, "tui-space_left-2", 3, "click.stop"]],
    template: function TuiTabsExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tabs-with-more", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiTabsExample7_Template_tui_tabs_with_more_activeItemIndexChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTabsExample7_ng_container_1_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵtext */._uU(3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTabsExample7_Template_button_click_4_listener() {
          return ctx.add();
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Add one more\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-count", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTabsExample7_Template_tui_input_count_ngModelChange_6_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(7, " activeItemIndex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("itemsLimit", 3)("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.items[ctx.activeItemIndex]);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 4)("ngModel", ctx.activeItemIndex);
      }
    },
    directives: [tabs_with_more_component/* TuiTabsWithMoreComponent */.W, common/* NgForOf */.sg, button_component/* TuiButtonComponent */.v, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, item_directive/* TuiItemDirective */.w, tab_component/* TuiTabComponent */.y, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTabsExample7;
})();
// EXTERNAL MODULE: ./projects/kit/components/tabs/tabs-vertical/tabs-vertical.component.ts
var tabs_vertical_component = __webpack_require__(21220);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/examples/8/index.ts





let TuiTabsExample8 = /*#__PURE__*/(() => {
  class TuiTabsExample8 {}

  TuiTabsExample8.ɵfac = function TuiTabsExample8_Factory(t) {
    return new (t || TuiTabsExample8)();
  };

  TuiTabsExample8.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTabsExample8,
    selectors: [["tui-tabs-example-8"]],
    decls: 26,
    vars: 0,
    consts: [[1, "content"], ["tuiTabs", "", "vertical", "left", 1, "left"], ["tuiTab", ""], ["vertical", "right", 1, "right"], ["tuiTab", "", "routerLink", "/components/button", "routerLinkActive", ""], ["tuiTab", "", "routerLink", "/navigation/tabs", "routerLinkActive", ""], ["tuiTab", "", "routerLink", "/components/input", "routerLinkActive", ""]],
    template: function TuiTabsExample8_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "section", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "nav", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(3, "Item 1");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(5, "Item 2");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(7, "Item 3 with name so long it spans multiple lines");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵtext */._uU(10, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies enim, vel molestie orci. In finibus diam ac nulla accumsan, vel condimentum lorem ultricies. In feugiat mauris sem, ac ultricies metus aliquet nec. Ut a iaculis metus, id vestibulum justo. Nulla id ante semper, aliquam augue vitae, sollicitudin massa. Sed congue nisi sed ullamcorper mollis. Vivamus volutpat non est a vestibulum. Sed in elementum odio. Proin a lectus ac quam vulputate ornare nec id mi. Maecenas pharetra ultricies efficitur. Etiam sit amet vulputate elit. Donec ut dapibus nunc. Nullam vestibulum diam eros, ac euismod velit porta ac. Ut ut auctor velit. Nulla ac lobortis erat, ut tempor neque. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵtext */._uU(12, " Donec quis lacus leo. Mauris quis vestibulum mauris. Sed hendrerit odio id blandit iaculis. Nulla ac gravida ligula, tristique tempus eros. Mauris efficitur risus quis arcu pharetra, eu semper ex rutrum. Aenean justo felis, imperdiet non justo vel, fringilla maximus nibh. Vestibulum ut imperdiet ex, vel varius odio. Nunc nec lorem non odio mollis porta. In gravida accumsan lacus, vitae egestas lectus aliquet sed. Morbi justo orci, fringilla sit amet consectetur vel, consectetur a nibh. Sed eu porttitor ante. Morbi imperdiet ligula id velit dignissim malesuada. Vestibulum blandit posuere sem. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "section", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p");
        fesm2015_core/* ɵɵtext */._uU(16, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies enim, vel molestie orci. In finibus diam ac nulla accumsan, vel condimentum lorem ultricies. In feugiat mauris sem, ac ultricies metus aliquet nec. Ut a iaculis metus, id vestibulum justo. Nulla id ante semper, aliquam augue vitae, sollicitudin massa. Sed congue nisi sed ullamcorper mollis. Vivamus volutpat non est a vestibulum. Sed in elementum odio. Proin a lectus ac quam vulputate ornare nec id mi. Maecenas pharetra ultricies efficitur. Etiam sit amet vulputate elit. Donec ut dapibus nunc. Nullam vestibulum diam eros, ac euismod velit porta ac. Ut ut auctor velit. Nulla ac lobortis erat, ut tempor neque. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
        fesm2015_core/* ɵɵtext */._uU(18, " Donec quis lacus leo. Mauris quis vestibulum mauris. Sed hendrerit odio id blandit iaculis. Nulla ac gravida ligula, tristique tempus eros. Mauris efficitur risus quis arcu pharetra, eu semper ex rutrum. Aenean justo felis, imperdiet non justo vel, fringilla maximus nibh. Vestibulum ut imperdiet ex, vel varius odio. Nunc nec lorem non odio mollis porta. In gravida accumsan lacus, vitae egestas lectus aliquet sed. Morbi justo orci, fringilla sit amet consectetur vel, consectetur a nibh. Sed eu porttitor ante. Morbi imperdiet ligula id velit dignissim malesuada. Vestibulum blandit posuere sem. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-tabs", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "a", 4);
        fesm2015_core/* ɵɵtext */._uU(21, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "a", 5);
        fesm2015_core/* ɵɵtext */._uU(23, " Tabs ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "a", 6);
        fesm2015_core/* ɵɵtext */._uU(25, " Input ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [tabs_directive/* TuiTabsDirective */.p, tabs_vertical_component/* TuiTabsVerticalComponent */.u, tab_component/* TuiTabComponent */.y, router/* RouterLinkWithHref */.yS, router/* RouterLinkActive */.Od],
    styles: [".content[_ngcontent-%COMP%]{display:flex;margin:2rem 0}.left[_ngcontent-%COMP%]{margin-right:2rem;min-width:10rem;width:10rem}.right[_ngcontent-%COMP%]{margin-left:2rem;min-width:10rem;width:10rem}"],
    changeDetection: 0
  });
  return TuiTabsExample8;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/tabs.component.ts






















function ExampleTuiTabsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-notification", 3);
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 4);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-tabs-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-tabs-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-tabs-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-tabs-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-tabs-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-tabs-example-8");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-tabs-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 12);
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-tabs-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example8);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 21);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const button_r9 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", button_r9, " ");
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTabsComponent_ng_template_2_ng_container_2_button_1_Template, 2, 1, "button", 20);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "strong");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "strong");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "strong");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiTabsComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiTabsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-tabs-with-more", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function ExampleTuiTabsComponent_ng_template_2_Template_tui_tabs_with_more_activeItemIndexChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTabsComponent_ng_template_2_ng_container_2_Template, 2, 0, "ng-container", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiTabsComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTabsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.itemsLimit = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTabsComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTabsComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTabsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.moreContent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTabsComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTabsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.underline = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiTabsComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTabsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("underline", ctx_r1.underline)("moreContent", ctx_r1.moreContent)("itemsLimit", ctx_r1.itemsLimit)("activeItemIndex", ctx_r1.activeItemIndex);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.buttons);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.itemsLimit);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.moreContentVariants)("documentationPropertyValue", ctx_r1.moreContent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.underline);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.activeItemIndex);
  }
}

function ExampleTuiTabsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 27);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 28);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 29);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 30);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 31);
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

let ExampleTuiTabsComponent = /*#__PURE__*/(() => {
  class ExampleTuiTabsComponent {
    constructor() {
      this.buttons = [`button 1`, `button 2`, `button 3`, `button 4`];
      this.exampleModule = __webpack_require__.e(/* import() */ 8590).then(__webpack_require__.t.bind(__webpack_require__, 8590, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 48962).then(__webpack_require__.t.bind(__webpack_require__, 48962, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 23073).then(__webpack_require__.t.bind(__webpack_require__, 23073, 17)),
        HTML: __webpack_require__.e(/* import() */ 2230).then(__webpack_require__.t.bind(__webpack_require__, 2230, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 27029).then(__webpack_require__.t.bind(__webpack_require__, 27029, 17)),
        HTML: __webpack_require__.e(/* import() */ 15204).then(__webpack_require__.t.bind(__webpack_require__, 15204, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 44046).then(__webpack_require__.t.bind(__webpack_require__, 44046, 17)),
        HTML: __webpack_require__.e(/* import() */ 72530).then(__webpack_require__.t.bind(__webpack_require__, 72530, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 87770).then(__webpack_require__.t.bind(__webpack_require__, 87770, 17)),
        HTML: __webpack_require__.e(/* import() */ 25195).then(__webpack_require__.t.bind(__webpack_require__, 25195, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 97764).then(__webpack_require__.t.bind(__webpack_require__, 97764, 17)),
        HTML: __webpack_require__.e(/* import() */ 58458).then(__webpack_require__.t.bind(__webpack_require__, 58458, 17)),
        LESS: __webpack_require__.e(/* import() */ 29989).then(__webpack_require__.t.bind(__webpack_require__, 29989, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 69667).then(__webpack_require__.t.bind(__webpack_require__, 69667, 17)),
        HTML: __webpack_require__.e(/* import() */ 72605).then(__webpack_require__.t.bind(__webpack_require__, 72605, 17)),
        LESS: __webpack_require__.e(/* import() */ 55581).then(__webpack_require__.t.bind(__webpack_require__, 55581, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 98599).then(__webpack_require__.t.bind(__webpack_require__, 76676, 17)),
        HTML: __webpack_require__.e(/* import() */ 6722).then(__webpack_require__.t.bind(__webpack_require__, 6722, 17))
      };
      this.example8 = {
        TypeScript: __webpack_require__.e(/* import() */ 38898).then(__webpack_require__.t.bind(__webpack_require__, 38898, 17)),
        HTML: __webpack_require__.e(/* import() */ 40642).then(__webpack_require__.t.bind(__webpack_require__, 40642, 17)),
        LESS: __webpack_require__.e(/* import() */ 76043).then(__webpack_require__.t.bind(__webpack_require__, 76043, 17))
      };
      this.moreContentVariants = [``, `And more`];
      this.moreContent = this.moreContentVariants[0];
      this.underline = true;
      this.activeItemIndex = 0;
      this.itemsLimit = 999;
    }

  }

  ExampleTuiTabsComponent.ɵfac = function ExampleTuiTabsComponent_Factory(t) {
    return new (t || ExampleTuiTabsComponent)();
  };

  ExampleTuiTabsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTabsComponent,
    selectors: [["example-tui-tabs"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190629174387398656$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS_1 = goog.getMsg("Tabs");
        i18n_0 = MSG_EXTERNAL_190629174387398656$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟cf6ff48f794c02123e431c70694805722f249e6e␟190629174387398656:Tabs`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5559028537998398718$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__3 = goog.getMsg(" Component for creating tabs. It emulates appearance and behaviour of native iOS and Android components with {$startTagCode}tuiMobileTabs{$closeTagCode} directive from {$startTagCode}TuiMobileTabsModule{$closeTagCode} of {$startTagCode}@taiga-ui/addon-mobile{$closeTagCode} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"
        });
        i18n_2 = MSG_EXTERNAL_5559028537998398718$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ff65603f39977a311f1464c4beeff8a3d1138ec1␟5559028537998398718: Component for creating tabs. It emulates appearance and behaviour of native iOS and Android components with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:tuiMobileTabs${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: directive from ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiMobileTabsModule${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: of ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:@taiga-ui/addon-mobile${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: . `;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2403058099261622119$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__5 = goog.getMsg(" If you use {$startTagCode}routerLink{$closeTagCode} , add also {$startTagCode}routerLinkActive{$closeTagCode} directive. ", {
          "startTagCode": "[\uFFFD#7\uFFFD|\uFFFD#8\uFFFD]",
          "closeTagCode": "[\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_2403058099261622119$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟b4a4500cc465b8c7a432cc6bb030b622105d403c␟2403058099261622119: If you use ${"[\uFFFD#7\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:routerLink${"[\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE: , add also ${"[\uFFFD#7\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:routerLinkActive${"[\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE: directive. `;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__7 = goog.getMsg("Complex");
        i18n_6 = MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6887732671539828921$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___9 = goog.getMsg(" Visible tabs count limit {$startTagStrong} for {$startTagCode}TabsWithMore{$closeTagCode} only {$closeTagStrong}", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6887732671539828921$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟5656a5759c3839067802ce3dbe28ae130aec6619␟6887732671539828921: Visible tabs count limit ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG: for ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TabsWithMore${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: only ${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8495238543846460744$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___11 = goog.getMsg(" \"More\" button dropdown content {$startTagStrong} for {$startTagCode}TabsWithMore{$closeTagCode} only {$closeTagStrong}", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8495238543846460744$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟1bc8829d8a89d9659ca69fef0a3295e5f7663510␟8495238543846460744: "More" button dropdown content ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG: for ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TabsWithMore${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: only ${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5335660555364106694$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___13 = goog.getMsg(" \"More\" button content {$startTagStrong} for {$startTagCode}TabsWithMore{$closeTagCode} only {$closeTagStrong}", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_5335660555364106694$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟844d1ab52ea0efead8ac48bd87683f0d8369d8b4␟5335660555364106694: "More" button content ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG: for ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TabsWithMore${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: only ${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7668872993816876546$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___15 = goog.getMsg(" Enable active item underline ");
        i18n_14 = MSG_EXTERNAL_7668872993816876546$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟09437ca6d1691298ecf849a9553dbdb2be774a0c␟7668872993816876546: Enable active item underline `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6359519444763790284$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___17 = goog.getMsg(" Active index item ");
        i18n_16 = MSG_EXTERNAL_6359519444763790284$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟39073c99674ac0077d775c30af8bf5968ed79425␟6359519444763790284: Active index item `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_117563320487402522$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiTabsModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_117563320487402522$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟21be59d130eeb51248506d7cadbd4ecb32daf410␟117563320487402522: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTabsModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TABS_TABS_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "KIT", "type", "components"], ["pageTab", ""], i18n_2, [1, "tui-space_top-4"], i18n_4, ["id", "desktop", "heading", "Desktop", 3, "content"], ["id", "more", "heading", "TabsWithMore", 3, "content"], ["id", "complex", "heading", i18n_6, 3, "content"], ["id", "stepper", "heading", "Stepper", 3, "content"], ["id", "closing", "heading", "Closing", 3, "content"], ["id", "vertical", "heading", "Vertical", 3, "content"], ["id", "android", "heading", "Android", 3, "content"], ["id", "ios", "heading", "iOS", 3, "content"], [3, "underline", "moreContent", "itemsLimit", "activeItemIndex", "activeItemIndexChange"], [4, "ngFor", "ngForOf"], ["documentationPropertyName", "itemsLimit", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "dropdownContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "moreContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "underline", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiTab", "", 4, "tuiItem"], ["tuiTab", ""], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTabsComponent_ng_template_1_Template, 25, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTabsComponent_ng_template_2_Template, 9, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTabsComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiTabsExample3, TuiTabsExample4, TuiTabsExample5, TuiTabsExample6, TuiTabsExample7, TuiTabsExample8, TuiTabsExample1, TuiTabsExample2, demo_component/* TuiDocDemoComponent */.F, tabs_with_more_component/* TuiTabsWithMoreComponent */.W, common/* NgForOf */.sg, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, item_directive/* TuiItemDirective */.w, tab_component/* TuiTabComponent */.y, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTabsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tabs/tabs.module.ts


















let ExampleTuiTabsModule = /*#__PURE__*/(() => {
  class ExampleTuiTabsModule {}

  ExampleTuiTabsModule.ɵfac = function ExampleTuiTabsModule_Factory(t) {
    return new (t || ExampleTuiTabsModule)();
  };

  ExampleTuiTabsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTabsModule
  });
  ExampleTuiTabsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_mobile.TuiRippleModule, kit.TuiTabsModule, kit.TuiInputCountModule, core.TuiModeModule, core.TuiNotificationModule, core.TuiSvgModule, core.TuiButtonModule, core.TuiHostedDropdownModule, core.TuiDataListModule, public_api/* TuiAddonDocModule */.fV, addon_mobile.TuiMobileTabsModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTabsComponent))]]
  });
  return ExampleTuiTabsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTabsModule, {
    declarations: [ExampleTuiTabsComponent, TuiTabsExample1, TuiTabsExample2, TuiTabsExample3, TuiTabsExample4, TuiTabsExample5, TuiTabsExample6, TuiTabsExample7, TuiTabsExample8],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_mobile.TuiRippleModule, kit.TuiTabsModule, kit.TuiInputCountModule, core.TuiModeModule, core.TuiNotificationModule, core.TuiSvgModule, core.TuiButtonModule, core.TuiHostedDropdownModule, core.TuiDataListModule, public_api/* TuiAddonDocModule */.fV, addon_mobile.TuiMobileTabsModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiTabsComponent]
  });
})();

/***/ })

}]);