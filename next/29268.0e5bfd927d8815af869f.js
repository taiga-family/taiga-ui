"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29268],{

/***/ 29268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiAlertsModule": () => (/* binding */ ExampleTuiAlertsModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts






let AlertExampleWithDataComponent = /*#__PURE__*/(() => {
  class AlertExampleWithDataComponent {
    constructor(context) {
      this.context = context;
      this.value = this.context.data;
    }

    increaseBalance() {
      this.value += 10;
    }

    submit() {
      this.context.completeWith(this.value);
    }

  }

  AlertExampleWithDataComponent.ɵfac = function AlertExampleWithDataComponent_Factory(t) {
    return new (t || AlertExampleWithDataComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
  };

  AlertExampleWithDataComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: AlertExampleWithDataComponent,
    selectors: [["tui-notifications-service-example-with-data"]],
    decls: 9,
    vars: 2,
    consts: [[1, "text"], [3, "value"], ["tuiMode", "onLight", 1, "controls", "tui-space_top-3"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "m", 1, "tui-space_right-3", 3, "click"], ["tuiLink", "", "type", "button", 3, "pseudo", "click"]],
    template: function AlertExampleWithDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 0);
        fesm2015_core/* ɵɵtext */._uU(1, "Your balance:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(2, "\n\u00A0\n");
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-money", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function AlertExampleWithDataComponent_Template_button_click_5_listener() {
          return ctx.submit();
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Submit ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function AlertExampleWithDataComponent_Template_button_click_7_listener() {
          return ctx.increaseBalance();
        });
        fesm2015_core/* ɵɵtext */._uU(8, " Increase ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudo", true);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o, mode_directive/* TuiModeDirective */.w, button_component/* TuiButtonComponent */.v, link_component/* TuiLinkComponent */.V],
    styles: [".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],
    changeDetection: 0
  });
  return AlertExampleWithDataComponent;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/1/index.ts




let TuiAlertsExampleComponent1 = /*#__PURE__*/(() => {
  class TuiAlertsExampleComponent1 {
    constructor(alertService) {
      this.alertService = alertService;
    }

    showNotification() {
      this.alertService.open(`A simple option`, {
        label: `With a heading!`
      }).subscribe();
    }

  }

  TuiAlertsExampleComponent1.ɵfac = function TuiAlertsExampleComponent1_Factory(t) {
    return new (t || TuiAlertsExampleComponent1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiAlertsExampleComponent1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAlertsExampleComponent1,
    selectors: [["tui-alerts-example-1"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiAlertsExampleComponent1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent1_Template_button_click_0_listener() {
          return ctx.showNotification();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAlertsExampleComponent1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/2/index.ts






const _c0 = ["withdrawTemplate"];
const _c1 = ["depositTemplate"];

function TuiAlertsExampleComponent2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵtext */._uU(3, " Your balance: ");
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent2_ng_template_10_Template_button_click_5_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.withdraw();
    });
    fesm2015_core/* ɵɵtext */._uU(6, " Withdraw\u00A0 ");
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.money);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 100);
  }
}

function TuiAlertsExampleComponent2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 6);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵtext */._uU(5, " Your balance: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent2_ng_template_12_Template_button_click_7_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.deposit();
    });
    fesm2015_core/* ɵɵtext */._uU(8, " Add\u00A0 ");
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r3.money);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 100);
  }
}

let TuiAlertsExampleComponent2 = /*#__PURE__*/(() => {
  class TuiAlertsExampleComponent2 {
    constructor(alertService) {
      this.alertService = alertService;
      this.money = 1000;
    }

    showWithdrawAlert() {
      this.alertService.open(this.withdrawTemplate || ``, {
        label: `A template sample`,
        status: "warning"
        /* Warning */
        ,
        autoClose: false
      }).subscribe();
    }

    showDepositAlert() {
      this.alertService.open(this.depositTemplate || ``, {
        label: `A template sample`,
        status: "success"
        /* Success */
        ,
        autoClose: false
      }).subscribe();
    }

    withdraw() {
      this.money -= 100;
    }

    deposit() {
      this.money += 100;
    }

  }

  TuiAlertsExampleComponent2.ɵfac = function TuiAlertsExampleComponent2_Factory(t) {
    return new (t || TuiAlertsExampleComponent2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiAlertsExampleComponent2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAlertsExampleComponent2,
    selectors: [["tui-alerts-example-2"]],
    viewQuery: function TuiAlertsExampleComponent2_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
        fesm2015_core/* ɵɵviewQuery */.Gf(_c1, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.withdrawTemplate = _t.first);
        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.depositTemplate = _t.first);
      }
    },
    decls: 14,
    vars: 2,
    consts: function () {
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1511830455526270445$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__3 = goog.getMsg("Notifications can be shown with template");
        i18n_2 = MSG_EXTERNAL_1511830455526270445$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__3;
      } else {
        i18n_2 = $localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7003116325745007663$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__5 = goog.getMsg(" If there are many templates, you can use {$startTagCode}ViewChildren{$closeTagCode} instead of {$startTagCode}ViewChild{$closeTagCode} or set them IDs with \"#\" (see code of this sample) ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_7003116325745007663$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__5;
      } else {
        i18n_4 = $localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:ViewChildren${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: instead of ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:ViewChild${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      return [[3, "value"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"], ["withdrawTemplate", ""], ["depositTemplate", ""], i18n_2, ["tuiButton", "", "type", "button", "tuiMode", "onLight", "appearance", "outline", "size", "m", 3, "click"], i18n_4];
    },
    template: function TuiAlertsExampleComponent2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, " Your balance: ");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent2_Template_button_click_3_listener() {
          return ctx.showWithdrawAlert();
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Withdraw\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent2_Template_button_click_5_listener() {
          return ctx.showDepositAlert();
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Add\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent2_Template_button_click_7_listener() {
          return ctx.withdraw();
        });
        fesm2015_core/* ɵɵtext */._uU(8, " Withdraw\u00A0 ");
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiAlertsExampleComponent2_ng_template_10_Template, 8, 2, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiAlertsExampleComponent2_ng_template_12_Template, 10, 2, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.money);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 100);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o, button_component/* TuiButtonComponent */.v, mode_directive/* TuiModeDirective */.w],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAlertsExampleComponent2;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts




let AlertExampleComponent = /*#__PURE__*/(() => {
  class AlertExampleComponent {
    constructor(context) {
      this.context = context;
    }

    ok() {
      this.context.completeWith(true);
    }

    cancel() {
      this.context.completeWith(false);
    }

  }

  AlertExampleComponent.ɵfac = function AlertExampleComponent_Factory(t) {
    return new (t || AlertExampleComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
  };

  AlertExampleComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: AlertExampleComponent,
    selectors: [["tui-notifications-service-example"]],
    decls: 7,
    vars: 0,
    consts: [["tuiMode", "onLight"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "s", 3, "click"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "s", 1, "tui-space_left-1", 3, "click"]],
    template: function AlertExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, "Yes?");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function AlertExampleComponent_Template_button_click_3_listener() {
          return ctx.ok();
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Yes ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function AlertExampleComponent_Template_button_click_5_listener() {
          return ctx.cancel();
        });
        fesm2015_core/* ɵɵtext */._uU(6, " No ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [mode_directive/* TuiModeDirective */.w, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return AlertExampleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/3/index.ts










let TuiAlertsExampleComponent3 = /*#__PURE__*/(() => {
  class TuiAlertsExampleComponent3 {
    constructor(alertService, router, injector) {
      this.injector = injector;
      this.notification = alertService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(AlertExampleComponent, this.injector), {
        label: `Question`,
        status: "error"
        /* Error */
        ,
        autoClose: false
      }).pipe((0,switchMap/* switchMap */.w)(response => alertService.open(`Got a value — ${response}`, {
        label: `Information`
      })), (0,takeUntil/* takeUntil */.R)(router.events));
    }

    showNotification() {
      this.notification.subscribe();
    }

  }

  TuiAlertsExampleComponent3.ɵfac = function TuiAlertsExampleComponent3_Factory(t) {
    return new (t || TuiAlertsExampleComponent3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  TuiAlertsExampleComponent3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAlertsExampleComponent3,
    selectors: [["tui-alerts-example-3"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8127611195136646297$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("This notification will be removed after router change (see component sample)");
        i18n_0 = MSG_EXTERNAL_8127611195136646297$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`;
      }

      return [i18n_0, ["tuiButton", "", "type", "button", "size", "m", 3, "click"]];
    },
    template: function TuiAlertsExampleComponent3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent3_Template_button_click_2_listener() {
          return ctx.showNotification();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAlertsExampleComponent3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/4/index.ts










let TuiAlertsExampleComponent4 = /*#__PURE__*/(() => {
  class TuiAlertsExampleComponent4 {
    constructor(alertService, router, injector) {
      this.injector = injector;
      this.notification = alertService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(AlertExampleWithDataComponent, this.injector), {
        label: `Heading is so long that it should be shown in two lines of text`,
        data: 237,
        status: "warning"
        /* Warning */
        ,
        autoClose: false
      }).pipe((0,switchMap/* switchMap */.w)(response => alertService.open(`Got a value — ${response}`, {
        label: `Information`
      })), (0,takeUntil/* takeUntil */.R)(router.events));
    }

    showNotification() {
      this.notification.subscribe();
    }

  }

  TuiAlertsExampleComponent4.ɵfac = function TuiAlertsExampleComponent4_Factory(t) {
    return new (t || TuiAlertsExampleComponent4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  TuiAlertsExampleComponent4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAlertsExampleComponent4,
    selectors: [["tui-alerts-example-4"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiAlertsExampleComponent4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent4_Template_button_click_0_listener() {
          return ctx.showNotification();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAlertsExampleComponent4;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts






function AlertExampleWithCustomLabelComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", text_r1, "\n");
  }
}

const alert_example_with_custom_label_component_c0 = function (a0) {
  return {
    $implicit: a0
  };
};

class AlertExampleWithCustomLabelComponent {
  constructor(context) {
    this.context = context;
  }

  get label() {
    return this.context.label;
  }

  get status() {
    return this.context.status;
  }

}

AlertExampleWithCustomLabelComponent.ɵfac = function AlertExampleWithCustomLabelComponent_Factory(t) {
  return new (t || AlertExampleWithCustomLabelComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
};

AlertExampleWithCustomLabelComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: AlertExampleWithCustomLabelComponent,
  selectors: [["tui-notifications-service-example-with-custom-label"]],
  decls: 5,
  vars: 4,
  consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function AlertExampleWithCustomLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "h4");
      fesm2015_core/* ɵɵtext */._uU(1, "Start content");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(2, AlertExampleWithCustomLabelComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
      fesm2015_core/* ɵɵelementStart */.TgZ(3, "h4");
      fesm2015_core/* ɵɵtext */._uU(4, "End content");
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("polymorpheusOutlet", ctx.label)("polymorpheusOutletContext", fesm2015_core/* ɵɵpureFunction1 */.VKq(2, alert_example_with_custom_label_component_c0, ctx.status));
    }
  },
  directives: [tinkoff_ng_polymorpheus/* PolymorpheusOutletDirective */.Li],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], AlertExampleWithCustomLabelComponent.prototype, "label", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], AlertExampleWithCustomLabelComponent.prototype, "status", null);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts


let CustomLabelComponent = /*#__PURE__*/(() => {
  class CustomLabelComponent {}

  CustomLabelComponent.ɵfac = function CustomLabelComponent_Factory(t) {
    return new (t || CustomLabelComponent)();
  };

  CustomLabelComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: CustomLabelComponent,
    selectors: [["tui-notifications-service-example-custom-label"]],
    decls: 4,
    vars: 0,
    consts: [[1, "label"], [1, "text"], ["src", "tuiIconHeart"]],
    template: function CustomLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "span", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "From custom label component with");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P],
    styles: [".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}"],
    changeDetection: 0
  });
  return CustomLabelComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/5/index.ts











let TuiAlertsExampleComponent5 = /*#__PURE__*/(() => {
  class TuiAlertsExampleComponent5 {
    constructor(alertService, router, injector) {
      this.injector = injector;
      this.notification = alertService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(AlertExampleWithCustomLabelComponent, this.injector), {
        label: ({
          $implicit
        }) => $implicit === "error"
        /* Error */
        ? `Error label from function` : `Info label from function`,
        status: "info"
        /* Info */
        ,
        autoClose: false
      }).pipe((0,takeUntil/* takeUntil */.R)(router.events));
      this.notificationWithCustomLabel = alertService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(AlertExampleWithCustomLabelComponent, this.injector), {
        label: new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(CustomLabelComponent, this.injector),
        status: "warning"
        /* Warning */
        ,
        autoClose: false
      }).pipe((0,takeUntil/* takeUntil */.R)(router.events));
    }

    showNotification() {
      this.notification.subscribe();
    }

    showNotificationWithCustomLabel() {
      this.notificationWithCustomLabel.subscribe();
    }

  }

  TuiAlertsExampleComponent5.ɵfac = function TuiAlertsExampleComponent5_Factory(t) {
    return new (t || TuiAlertsExampleComponent5)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  TuiAlertsExampleComponent5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAlertsExampleComponent5,
    selectors: [["tui-alerts-example-5"]],
    decls: 4,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_left-3", 3, "click"]],
    template: function TuiAlertsExampleComponent5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent5_Template_button_click_0_listener() {
          return ctx.showNotification();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " With custom label function\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAlertsExampleComponent5_Template_button_click_2_listener() {
          return ctx.showNotificationWithCustomLabel();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " With custom label component\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAlertsExampleComponent5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/alerts.component.ts






















function ExampleTuiAlertsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 4);
    fesm2015_core/* ɵɵelement */._UZ(7, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-alerts-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-alerts-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-alerts-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-alerts-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-alerts-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiAlertsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiAlertsComponent_ng_template_2_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.showNotification();
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Show ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 11);
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 12);
    fesm2015_core/* ɵɵelement */._UZ(4, "p");
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 13);
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiAlertsComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.content = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(17, 15);
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(20, ExampleTuiAlertsComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_20_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.status = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(21, ExampleTuiAlertsComponent_ng_template_2_ng_template_21_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_21_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.label = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(22, ExampleTuiAlertsComponent_ng_template_2_ng_template_22_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_22_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.data = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(23, ExampleTuiAlertsComponent_ng_template_2_ng_template_23_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_23_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.autoClose = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(24, ExampleTuiAlertsComponent_ng_template_2_ng_template_24_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_24_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.hasCloseButton = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(25, ExampleTuiAlertsComponent_ng_template_2_ng_template_25_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_25_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.hasIcon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.method);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.content);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.label);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.data);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.autoCloseVariants)("documentationPropertyValue", ctx_r1.autoClose);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hasCloseButton);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hasIcon);
  }
}

function ExampleTuiAlertsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 29);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 30);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 31);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 32);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(13, 34);
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "a", 35);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(18, 36);
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵelement */._UZ(20, "code");
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵelement */._UZ(22, "code");
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-doc-code", 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(27, 38);
    fesm2015_core/* ɵɵelement */._UZ(28, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(29, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(30, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(32, 39);
    fesm2015_core/* ɵɵelement */._UZ(33, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(34, "tui-doc-code", 40);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(36, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(37, 41);
    fesm2015_core/* ɵɵelement */._UZ(38, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(39, "tui-doc-code", 40);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(42, 42);
    fesm2015_core/* ɵɵelement */._UZ(43, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(44, "tui-doc-code", 31);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleServiceUsage);
    fesm2015_core/* ɵɵadvance */.xp6(13);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleImportModuleComponent);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleServiceUsageComponent);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleCustomAlert);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleLazyModule);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiAlertsComponent = /*#__PURE__*/(() => {
  class ExampleTuiAlertsComponent {
    constructor(alertService, injector) {
      this.alertService = alertService;
      this.method = __webpack_require__.e(/* import() */ 22864).then(__webpack_require__.t.bind(__webpack_require__, 22864, 17));
      this.exampleImportModuleComponent = __webpack_require__.e(/* import() */ 57102).then(__webpack_require__.t.bind(__webpack_require__, 57102, 17));
      this.exampleServiceUsage = __webpack_require__.e(/* import() */ 21779).then(__webpack_require__.t.bind(__webpack_require__, 21779, 17));
      this.exampleServiceUsageComponent = __webpack_require__.e(/* import() */ 47317).then(__webpack_require__.t.bind(__webpack_require__, 47317, 17));
      this.exampleCustomAlert = __webpack_require__.e(/* import() */ 89081).then(__webpack_require__.t.bind(__webpack_require__, 89081, 17));
      this.exampleLazyModule = __webpack_require__.e(/* import() */ 23040).then(__webpack_require__.t.bind(__webpack_require__, 23040, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 44780).then(__webpack_require__.t.bind(__webpack_require__, 44780, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 44623).then(__webpack_require__.t.bind(__webpack_require__, 44623, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 71703).then(__webpack_require__.t.bind(__webpack_require__, 71703, 17)),
        HTML: __webpack_require__.e(/* import() */ 60849).then(__webpack_require__.t.bind(__webpack_require__, 60849, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 76701).then(__webpack_require__.t.bind(__webpack_require__, 76701, 17)),
        HTML: __webpack_require__.e(/* import() */ 23996).then(__webpack_require__.t.bind(__webpack_require__, 23996, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 11885).then(__webpack_require__.t.bind(__webpack_require__, 11885, 17)),
        HTML: __webpack_require__.e(/* import() */ 19597).then(__webpack_require__.t.bind(__webpack_require__, 19597, 17)),
        'alert-example/alert-example.component.ts': __webpack_require__.e(/* import() */ 35010).then(__webpack_require__.t.bind(__webpack_require__, 35010, 17)),
        'alert-example/alert-example.template.html': __webpack_require__.e(/* import() */ 99889).then(__webpack_require__.t.bind(__webpack_require__, 99889, 17)),
        'alert-example/alert-example.module.ts': __webpack_require__.e(/* import() */ 41177).then(__webpack_require__.t.bind(__webpack_require__, 41177, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 67005).then(__webpack_require__.t.bind(__webpack_require__, 67005, 17)),
        HTML: __webpack_require__.e(/* import() */ 56103).then(__webpack_require__.t.bind(__webpack_require__, 56103, 17)),
        'alert-example-with-data/alert-example-with-data.component.ts': __webpack_require__.e(/* import() */ 47368).then(__webpack_require__.t.bind(__webpack_require__, 47368, 17)),
        'alert-example-with-data/alert-example-with-data.template.html': __webpack_require__.e(/* import() */ 52399).then(__webpack_require__.t.bind(__webpack_require__, 52399, 17)),
        'alert-example-with-data/alert-example-with-data.style.less': __webpack_require__.e(/* import() */ 54926).then(__webpack_require__.t.bind(__webpack_require__, 54926, 17)),
        'alert-example-with-data/alert-example-with-data.module.ts': __webpack_require__.e(/* import() */ 34124).then(__webpack_require__.t.bind(__webpack_require__, 34124, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 73037).then(__webpack_require__.t.bind(__webpack_require__, 73037, 17)),
        HTML: __webpack_require__.e(/* import() */ 24149).then(__webpack_require__.t.bind(__webpack_require__, 24149, 17)),
        'custom-label/custom-label.module.ts': __webpack_require__.e(/* import() */ 68510).then(__webpack_require__.t.bind(__webpack_require__, 68510, 17)),
        'custom-label/custom-label.component.ts': __webpack_require__.e(/* import() */ 62580).then(__webpack_require__.t.bind(__webpack_require__, 62580, 17)),
        'custom-label/custom-label.style.less': __webpack_require__.e(/* import() */ 6664).then(__webpack_require__.t.bind(__webpack_require__, 6664, 17)),
        'custom-label/custom-label.template.html': __webpack_require__.e(/* import() */ 23866).then(__webpack_require__.t.bind(__webpack_require__, 23866, 17)),
        'alert-example-with-custom-label/alert-example-with-custom-label.module.ts': __webpack_require__.e(/* import() */ 49668).then(__webpack_require__.t.bind(__webpack_require__, 49668, 17)),
        'alert-example-with-custom-label/alert-example-with-custom-label.component.ts': __webpack_require__.e(/* import() */ 95001).then(__webpack_require__.t.bind(__webpack_require__, 95001, 17)),
        'alert-example-with-custom-label/alert-example-with-custom-label.template.html': __webpack_require__.e(/* import() */ 36561).then(__webpack_require__.t.bind(__webpack_require__, 36561, 17))
      };
      this.data = 100;
      this.label = `Heading`;
      this.statusVariants = ["info"
      /* Info */
      , "success"
      /* Success */
      , "error"
      /* Error */
      , "warning"
      /* Warning */
      ];
      this.status = this.statusVariants[0];
      this.contentVariants = [`String`, `Component`];
      this.content = this.contentVariants[0];
      this.autoCloseVariants = [true, false, 5000, 1000, 500];
      this.autoClose = this.autoCloseVariants[0];
      this.hasCloseButton = true;
      this.hasIcon = true;
      this.component = new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(AlertExampleWithDataComponent, injector);
    }

    get selectedContent() {
      return this.content === `String` ? this.content : this.component;
    }

    showNotification() {
      this.alertService.open(this.selectedContent, {
        label: this.label,
        data: this.data,
        status: this.status,
        autoClose: this.autoClose,
        hasCloseButton: this.hasCloseButton,
        hasIcon: this.hasIcon
      }).pipe((0,switchMap/* switchMap */.w)(response => this.alertService.open(response, {
        label: `Notification responded with:`
      }))).subscribe();
    }

  }

  ExampleTuiAlertsComponent.ɵfac = function ExampleTuiAlertsComponent_Factory(t) {
    return new (t || ExampleTuiAlertsComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  ExampleTuiAlertsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiAlertsComponent,
    selectors: [["example-tui-alerts"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5275394011225250882$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__1 = goog.getMsg("Service to show notifications");
        i18n_0 = MSG_EXTERNAL_5275394011225250882$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4524286694660863035$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__3 = goog.getMsg(" Do not forget to add {$startTagCode}TuiAlertModule{$closeTagCode} into your app.module to use it ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_4524286694660863035$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAlertModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module to use it `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4498461250311742014$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__5 = goog.getMsg("{$startTagStrong}Singleton{$closeTagStrong} you do not need to provide a service. It is just available to inject ", {
          "startTagStrong": "\uFFFD#7\uFFFD",
          "closeTagStrong": "\uFFFD/#7\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4498461250311742014$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\uFFFD#7\uFFFD"}:START_TAG_STRONG:Singleton${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3087369671149412391$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__7 = goog.getMsg("Component with data");
        i18n_6 = MSG_EXTERNAL_3087369671149412391$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1211513920026771159$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__9 = goog.getMsg("Component with custom label");
        i18n_8 = MSG_EXTERNAL_1211513920026771159$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7317498188483132876$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__11 = goog.getMsg("{$startParagraph}To show notification, use method{$closeParagraph}{$startTagTuiDocCode}{$closeTagTuiDocCode} of {$startTagCode}TuiAlertService{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are {$startTagCode}number{$closeTagCode} . {$startParagraph} You can also just unsubscribe from a stream to hide a notification (this observable is returned from {$startTagCode}open{$closeTagCode} method). You can save a subscription for that or use {$startTagCode}takeUntil{$closeTagCode} like tools from {$startTagCode}RxJs{$closeTagCode}{$closeParagraph}", {
          "startParagraph": "[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]",
          "closeParagraph": "[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]",
          "startTagTuiDocCode": "\uFFFD#5\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#5\uFFFD",
          "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]",
          "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"
        });
        i18n_10 = MSG_EXTERNAL_7317498188483132876$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH:To show notification, use method${"[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:TuiAlertService${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:number${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:takeUntil${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: like tools from ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:RxJs${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_10 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_10);
      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3466418148583049497$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__13 = goog.getMsg("{$startTagCode}TuiNotificationOptionsWithData{$closeTagCode} interface: ", {
          "startTagCode": "\uFFFD#18\uFFFD",
          "closeTagCode": "\uFFFD/#18\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_3466418148583049497$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\uFFFD#18\uFFFD"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_CODE: interface: `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___15 = goog.getMsg(" Content ");
        i18n_14 = MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_435210747077371139$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___17 = goog.getMsg(" Status ");
        i18n_16 = MSG_EXTERNAL_435210747077371139$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9208464206964786295$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___19 = goog.getMsg(" Heading ");
        i18n_18 = MSG_EXTERNAL_9208464206964786295$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2636705087580276181$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___21 = goog.getMsg(" Input data of notification, type <I> ");
        i18n_20 = MSG_EXTERNAL_2636705087580276181$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3778304849595610845$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___23 = goog.getMsg(" Autoclose after 3 seconds ");
        i18n_22 = MSG_EXTERNAL_3778304849595610845$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8491523700308437284$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___25 = goog.getMsg(" Has close button ");
        i18n_24 = MSG_EXTERNAL_8491523700308437284$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_149058290855307515$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___27 = goog.getMsg(" Has icon ");
        i18n_26 = MSG_EXTERNAL_149058290855307515$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2697985294473194370$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__29 = goog.getMsg(" Add {$startTagCode}TuiAlertModule{$closeTagCode} into your app.module ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_2697985294473194370$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAlertModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7179047044375359280$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__31 = goog.getMsg(" Use service {$startTagCode}show{$closeTagCode} method and subscribe to {$startTagCode}Observable{$closeTagCode}", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_30 = MSG_EXTERNAL_7179047044375359280$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:show${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_30 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_30);
      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8405226284519292539$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__33 = goog.getMsg(" To pass notification with custom content, you can use {$startLink}{$startTagCode}your template{$closeTagCode}{$closeLink} . ", {
          "startLink": "\uFFFD#14\uFFFD",
          "startTagCode": "\uFFFD#15\uFFFD",
          "closeTagCode": "\uFFFD/#15\uFFFD",
          "closeLink": "\uFFFD/#14\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_8405226284519292539$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\uFFFD#14\uFFFD"}:START_LINK:${"\uFFFD#15\uFFFD"}:START_TAG_CODE:your template${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#14\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5635433899377563977$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__35 = goog.getMsg(" You can also customize notification logic with a component. Use {$startTagCode}POLYMORPHEUS_CONTEXT{$closeTagCode} into the component to get context input data and to output results. It has the following interface: {$startTagCode}TuiDialog<TuiAlertOptions<I>, O>{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} is input data type. Do not forget to add notification component into {$startTagCode}entryComponents{$closeTagCode} of your module: ", {
          "startTagCode": "[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]",
          "closeTagCode": "[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"
        });
        i18n_34 = MSG_EXTERNAL_5635433899377563977$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:entryComponents${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: of your module: `;
      }

      i18n_34 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_34);
      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1436172444558827801$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__37 = goog.getMsg(" Use {$startTagCode}new PolymorpheusComponent(CustomNotificationComponent){$closeTagCode} to show notification component with a service: ", {
          "startTagCode": "\uFFFD#28\uFFFD",
          "closeTagCode": "\uFFFD/#28\uFFFD"
        });
        i18n_36 = MSG_EXTERNAL_1436172444558827801$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\uFFFD#28\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\uFFFD/#28\uFFFD"}:CLOSE_TAG_CODE: to show notification component with a service: `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8335780216628034342$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__39 = goog.getMsg(" Use {$startTagCode}completeWith{$closeTagCode} method to control notification from itself: ", {
          "startTagCode": "\uFFFD#33\uFFFD",
          "closeTagCode": "\uFFFD/#33\uFFFD"
        });
        i18n_38 = MSG_EXTERNAL_8335780216628034342$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟fd68ca58ffb42f8e63cf860073e9f9b9b30c0c70␟8335780216628034342: Use ${"\uFFFD#33\uFFFD"}:START_TAG_CODE:completeWith${"\uFFFD/#33\uFFFD"}:CLOSE_TAG_CODE: method to control notification from itself: `;
      }

      let i18n_40;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7759900700350680332$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__41 = goog.getMsg(" If you use it from lazy loading modules, do not forget to use {$startTagCode}new TuiComponentContent Injector{$closeTagCode} of component where you call it ", {
          "startTagCode": "\uFFFD#38\uFFFD",
          "closeTagCode": "\uFFFD/#38\uFFFD"
        });
        i18n_40 = MSG_EXTERNAL_7759900700350680332$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__41;
      } else {
        i18n_40 = $localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\uFFFD#38\uFFFD"}:START_TAG_CODE:new TuiComponentContent Injector${"\uFFFD/#38\uFFFD"}:CLOSE_TAG_CODE: of component where you call it `;
      }

      let i18n_42;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8849888545184271088$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__43 = goog.getMsg(" Optionally use the {$startTagCode}TUI_NOTIFICATION_OPTIONS{$closeTagCode} injection token to override the default options (works only in app.module.ts). ", {
          "startTagCode": "\uFFFD#43\uFFFD",
          "closeTagCode": "\uFFFD/#43\uFFFD"
        });
        i18n_42 = MSG_EXTERNAL_8849888545184271088$$PROJECTS_DEMO_SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__43;
      } else {
        i18n_42 = $localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\uFFFD#43\uFFFD"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\uFFFD/#43\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `;
      }

      return [["header", "AlertService", "package", "CORE", "path", "core/components/alert/alert.service.ts"], ["pageTab", ""], i18n_0, i18n_2, i18n_4, ["id", "text", "heading", "Text", 3, "content"], ["id", "template", "heading", "Template", 3, "content"], ["id", "component", "heading", "Component", 3, "content"], ["id", "data", "heading", i18n_6, 3, "content"], ["id", "label", "heading", i18n_8, 3, "content"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], [1, "b-full-width"], i18n_10, [1, "tui-space_bottom-4", 3, "code"], ["documentationPropertyName", "content", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_12, ["documentationPropertyName", "status", "documentationPropertyType", "TuiNotification", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "label", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "data", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autoClose", "documentationPropertyType", "boolean | number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasCloseButton", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasIcon", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], i18n_28, ["filename", "app.module.ts", 3, "code"], i18n_30, ["filename", "myComponent.component.ts", 3, "code"], i18n_32, ["routerLink", "/services/alert-service", "fragment", "example-template", "tuiLink", ""], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, i18n_38, ["filename", "customNotification.component.ts", 3, "code"], i18n_40, i18n_42];
    },
    template: function ExampleTuiAlertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAlertsComponent_ng_template_1_Template, 18, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAlertsComponent_ng_template_2_Template, 26, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAlertsComponent_ng_template_3_Template, 45, 7, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiAlertsExampleComponent1, TuiAlertsExampleComponent2, TuiAlertsExampleComponent3, TuiAlertsExampleComponent4, TuiAlertsExampleComponent5, button_component/* TuiButtonComponent */.v, code_component/* TuiDocCodeComponent */.c, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, router/* RouterLinkWithHref */.yS, link_component/* TuiLinkComponent */.V],
    styles: [".label[_ngcontent-%COMP%]{width:6.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiAlertsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/3/alert-example/alert-example.module.ts







let AlertExampleModule = /*#__PURE__*/(() => {
  class AlertExampleModule {}

  AlertExampleModule.ɵfac = function AlertExampleModule_Factory(t) {
    return new (t || AlertExampleModule)();
  };

  AlertExampleModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: AlertExampleModule
  });
  AlertExampleModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiButtonModule, core.TuiModeModule, kit.TuiSelectModule, addon_commerce.TuiMoneyModule]]
  });
  return AlertExampleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(AlertExampleModule, {
    declarations: [AlertExampleComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiButtonModule, core.TuiModeModule, kit.TuiSelectModule, addon_commerce.TuiMoneyModule],
    exports: [AlertExampleComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.module.ts






let AlertExampleWithDataModule = /*#__PURE__*/(() => {
  class AlertExampleWithDataModule {}

  AlertExampleWithDataModule.ɵfac = function AlertExampleWithDataModule_Factory(t) {
    return new (t || AlertExampleWithDataModule)();
  };

  AlertExampleWithDataModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: AlertExampleWithDataModule
  });
  AlertExampleWithDataModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiModeModule, core.TuiButtonModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule]]
  });
  return AlertExampleWithDataModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(AlertExampleWithDataModule, {
    declarations: [AlertExampleWithDataComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiModeModule, core.TuiButtonModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule],
    exports: [AlertExampleWithDataComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts




let AlertExampleWithCustomLabelModule = /*#__PURE__*/(() => {
  class AlertExampleWithCustomLabelModule {}

  AlertExampleWithCustomLabelModule.ɵfac = function AlertExampleWithCustomLabelModule_Factory(t) {
    return new (t || AlertExampleWithCustomLabelModule)();
  };

  AlertExampleWithCustomLabelModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: AlertExampleWithCustomLabelModule
  });
  AlertExampleWithCustomLabelModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq]]
  });
  return AlertExampleWithCustomLabelModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(AlertExampleWithCustomLabelModule, {
    declarations: [AlertExampleWithCustomLabelComponent],
    imports: [common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq],
    exports: [AlertExampleWithCustomLabelComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/examples/5/custom-label/custom-label.module.ts




let CustomLabelModule = /*#__PURE__*/(() => {
  class CustomLabelModule {}

  CustomLabelModule.ɵfac = function CustomLabelModule_Factory(t) {
    return new (t || CustomLabelModule)();
  };

  CustomLabelModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: CustomLabelModule
  });
  CustomLabelModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiSvgModule]]
  });
  return CustomLabelModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(CustomLabelModule, {
    declarations: [CustomLabelComponent],
    imports: [common/* CommonModule */.ez, core.TuiSvgModule],
    exports: [CustomLabelComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/alerts/alerts.module.ts




















let ExampleTuiAlertsModule = /*#__PURE__*/(() => {
  class ExampleTuiAlertsModule {}

  ExampleTuiAlertsModule.ɵfac = function ExampleTuiAlertsModule_Factory(t) {
    return new (t || ExampleTuiAlertsModule)();
  };

  ExampleTuiAlertsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiAlertsModule
  });
  ExampleTuiAlertsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiButtonModule, core.TuiModeModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, AlertExampleWithCustomLabelModule, AlertExampleWithDataModule, AlertExampleModule, CustomLabelModule, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiLinkModule, fesm2015_forms/* FormsModule */.u5, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiAlertsComponent))]]
  });
  return ExampleTuiAlertsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiAlertsModule, {
    declarations: [ExampleTuiAlertsComponent, TuiAlertsExampleComponent1, TuiAlertsExampleComponent2, TuiAlertsExampleComponent3, TuiAlertsExampleComponent4, TuiAlertsExampleComponent5],
    imports: [common/* CommonModule */.ez, core.TuiButtonModule, core.TuiModeModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, AlertExampleWithCustomLabelModule, AlertExampleWithDataModule, AlertExampleModule, CustomLabelModule, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiLinkModule, fesm2015_forms/* FormsModule */.u5, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiAlertsComponent]
  });
})();

/***/ })

}]);