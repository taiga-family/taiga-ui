"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3216],{

/***/ 3216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiNotificationModule": () => (/* binding */ ExampleTuiNotificationModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/notification/examples/1/index.ts


let TuiNotificationExample1 = /*#__PURE__*/(() => {
  class TuiNotificationExample1 {}

  TuiNotificationExample1.ɵfac = function TuiNotificationExample1_Factory(t) {
    return new (t || TuiNotificationExample1)();
  };

  TuiNotificationExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiNotificationExample1,
    selectors: [["tui-notification-example-1"]],
    decls: 9,
    vars: 0,
    consts: [[1, "wrapper"], ["status", "success", 1, "tui-space_top-4"], ["status", "error", 1, "tui-space_top-4"], ["status", "warning", 1, "tui-space_top-4"]],
    template: function TuiNotificationExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification");
        fesm2015_core/* ɵɵtext */._uU(2, " A short simple informative message. It can be\u00A0multiline\u00A0if\u00A0you\u00A0need it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " A short simple informative message. It can be\u00A0multiline\u00A0if\u00A0you\u00A0need it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-notification", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " A short simple informative message. It can be\u00A0multiline\u00A0if\u00A0you\u00A0need it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-notification", 3);
        fesm2015_core/* ɵɵtext */._uU(8, " A short simple informative message. It can be\u00A0multiline\u00A0if\u00A0you\u00A0need it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [notification_component/* TuiNotificationComponent */.L],
    styles: [".wrapper[_ngcontent-%COMP%]{width:28.75rem}"],
    changeDetection: 0
  });
  return TuiNotificationExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/notification/examples/2/index.ts



let TuiNotificationExample2 = /*#__PURE__*/(() => {
  class TuiNotificationExample2 {}

  TuiNotificationExample2.ɵfac = function TuiNotificationExample2_Factory(t) {
    return new (t || TuiNotificationExample2)();
  };

  TuiNotificationExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiNotificationExample2,
    selectors: [["tui-notification-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_NOTIFICATION_OPTIONS,
      useValue: Object.assign(Object.assign({}, core.TUI_NOTIFICATION_DEFAULT_OPTIONS), {
        status: "error"
        /* Error */
        ,
        hasIcon: false
      })
    }])],
    decls: 9,
    vars: 0,
    consts: [[1, "wrapper"], ["status", "success", 1, "tui-space_top-4"], ["status", "error", 1, "tui-space_top-4"], ["status", "warning", 1, "tui-space_top-4"]],
    template: function TuiNotificationExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification");
        fesm2015_core/* ɵɵtext */._uU(2, "A short simple informative message. Works with token options");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " A short simple informative message. Works with token options ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-notification", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " A short simple informative message. Works with token options ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-notification", 3);
        fesm2015_core/* ɵɵtext */._uU(8, " A short simple informative message. Works with token options ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [notification_component/* TuiNotificationComponent */.L],
    styles: [".wrapper[_ngcontent-%COMP%]{width:28.75rem}"],
    changeDetection: 0
  });
  return TuiNotificationExample2;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/notification/notification.component.ts












function ExampleTuiNotificationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-notification-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-notification-example-2");
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

function ExampleTuiNotificationComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiNotificationComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiNotificationComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiNotificationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("close", function ExampleTuiNotificationComponent_ng_template_2_Template_tui_notification_close_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);

      const _r5 = fesm2015_core/* ɵɵreference */.MAs(7);

      return _r5.emitEvent($event);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " A short simple informative message ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiNotificationComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiNotificationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.hasIcon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiNotificationComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiNotificationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.status = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiNotificationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 8, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("hasIcon", ctx_r1.hasIcon)("status", ctx_r1.status);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hasIcon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
  }
}

function ExampleTuiNotificationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 18);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 19);
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

let ExampleTuiNotificationComponent = /*#__PURE__*/(() => {
  class ExampleTuiNotificationComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 53573).then(__webpack_require__.t.bind(__webpack_require__, 53573, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 5213).then(__webpack_require__.t.bind(__webpack_require__, 5213, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 75767).then(__webpack_require__.t.bind(__webpack_require__, 75767, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 99877).then(__webpack_require__.t.bind(__webpack_require__, 99877, 17)),
        HTML: __webpack_require__.e(/* import() */ 83446).then(__webpack_require__.t.bind(__webpack_require__, 83446, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 30222).then(__webpack_require__.t.bind(__webpack_require__, 30222, 17)),
        HTML: __webpack_require__.e(/* import() */ 26801).then(__webpack_require__.t.bind(__webpack_require__, 26801, 17))
      };
      this.hasIcon = true;
      this.statusVariants = ["info"
      /* Info */
      , "error"
      /* Error */
      , "warning"
      /* Warning */
      , "success"
      /* Success */
      ];
      this.status = this.statusVariants[0];
    }

  }

  ExampleTuiNotificationComponent.ɵfac = function ExampleTuiNotificationComponent_Factory(t) {
    return new (t || ExampleTuiNotificationComponent)();
  };

  ExampleTuiNotificationComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiNotificationComponent,
    selectors: [["example-notification"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8044597066382384346$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__1 = goog.getMsg("An inline message with a type (info, success, warning, error) that does not interrupt user actions");
        i18n_0 = MSG_EXTERNAL_8044597066382384346$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟8b17ef14874d4f694c9627a7201139148904cd2d␟8044597066382384346:An inline message with a type (info, success, warning, error) that does not interrupt user actions`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__5 = goog.getMsg("Options");
        i18n_4 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7878025557768304698$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___7 = goog.getMsg(" A small icon with status ");
        i18n_6 = MSG_EXTERNAL_7878025557768304698$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟e3fb4b0af0b8b84d305599e90eec4aa8c45e2fa0␟7878025557768304698: A small icon with status `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7609310468452803785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___9 = goog.getMsg(" Status changes color of notification ");
        i18n_8 = MSG_EXTERNAL_7609310468452803785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟7d37fc12d805b04c0ab42e34e0a10234f0266fb4␟7609310468452803785: Status changes color of notification `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8189858504454186818$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___11 = goog.getMsg(" Emits click on close cross. When subscribed to, close button appears. ");
        i18n_10 = MSG_EXTERNAL_8189858504454186818$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟25170089eaa6dd406468d6cbc57f0e6d8a453062␟8189858504454186818: Emits click on close cross. When subscribed to, close button appears. `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3869314399669860390$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiNotificationModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_3869314399669860390$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟c50fec815580049e6f9b99e275bbfa586fa48489␟3869314399669860390: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiNotificationModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5902218223566154117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__17 = goog.getMsg(" Optionally use the {$startTagCode}TUI_NOTIFICATION_OPTIONS{$closeTagCode} injection token to override the default options. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5902218223566154117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_NOTIFICATION_NOTIFICATION_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟193bb7d950696ab4ced7a6594c35c6ab5fa3daca␟5902218223566154117: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options. `;
      }

      return [["header", "Notification", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "options", "heading", i18n_4, 3, "content"], [3, "hasIcon", "status", "close"], ["documentationPropertyName", "hasIcon", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyMode", "input", "documentationPropertyType", "TuiNotification", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "close", "documentationPropertyMode", "output", "documentationPropertyType", "void"], ["documentationPropertyClose", "documentationProperty"], i18n_6, i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"], i18n_16, ["filename", "myModule.module.ts", 3, "code"]];
    },
    template: function ExampleTuiNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiNotificationComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiNotificationComponent_ng_template_2_Template, 8, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiNotificationComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiNotificationExample1, TuiNotificationExample2, demo_component/* TuiDocDemoComponent */.F, notification_component/* TuiNotificationComponent */.L, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiNotificationComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/notification/notification.module.ts










let ExampleTuiNotificationModule = /*#__PURE__*/(() => {
  class ExampleTuiNotificationModule {}

  ExampleTuiNotificationModule.ɵfac = function ExampleTuiNotificationModule_Factory(t) {
    return new (t || ExampleTuiNotificationModule)();
  };

  ExampleTuiNotificationModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiNotificationModule
  });
  ExampleTuiNotificationModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiNotificationModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiNotificationComponent))]]
  });
  return ExampleTuiNotificationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiNotificationModule, {
    declarations: [ExampleTuiNotificationComponent, TuiNotificationExample1, TuiNotificationExample2],
    imports: [core.TuiNotificationModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiNotificationComponent]
  });
})();

/***/ })

}]);