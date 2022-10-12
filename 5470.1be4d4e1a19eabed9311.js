"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[5470],{

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMarkerIconModule": () => (/* binding */ ExampleTuiMarkerIconModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/marker-icon/marker-icon.component.ts
var marker_icon_component = __webpack_require__(86187);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/marker-icon/examples/1/index.ts


let TuiMarkerIconExample1 = /*#__PURE__*/(() => {
  class TuiMarkerIconExample1 {}

  TuiMarkerIconExample1.ɵfac = function TuiMarkerIconExample1_Factory(t) {
    return new (t || TuiMarkerIconExample1)();
  };

  TuiMarkerIconExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMarkerIconExample1,
    selectors: [["tui-marker-icon-example-1"]],
    decls: 1,
    vars: 0,
    consts: [["src", "tuiIconBellLarge"]],
    template: function TuiMarkerIconExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-marker-icon", 0);
      }
    },
    directives: [marker_icon_component/* TuiMarkerIconComponent */.B],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMarkerIconExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/marker-icon/examples/2/index.ts


let TuiMarkerIconExample2 = /*#__PURE__*/(() => {
  class TuiMarkerIconExample2 {}

  TuiMarkerIconExample2.ɵfac = function TuiMarkerIconExample2_Factory(t) {
    return new (t || TuiMarkerIconExample2)();
  };

  TuiMarkerIconExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMarkerIconExample2,
    selectors: [["tui-marker-icon-example-2"]],
    decls: 9,
    vars: 0,
    consts: [["mode", "primary", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "link", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "success", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "error", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "secondary", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "warning", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], [1, "white"], ["mode", "white", "src", "tuiIconBellLarge"], ["src", "tuiIconBellLarge", 1, "custom", "tui-space_left-2"]],
    template: function TuiMarkerIconExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-marker-icon", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-marker-icon", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-marker-icon", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-marker-icon", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-marker-icon", 4);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-marker-icon", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 6);
        fesm2015_core/* ɵɵelement */._UZ(7, "tui-marker-icon", 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-marker-icon", 8);
      }
    },
    directives: [marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: [".white[_ngcontent-%COMP%]{display:inline-block;padding:.625rem;background-color:var(--tui-base-02)}.custom[_ngcontent-%COMP%]{color:var(--tui-base-01);background:linear-gradient(45deg,#c86dd7 0%,#3023ae 100%)}"],
    changeDetection: 0
  });
  return TuiMarkerIconExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/marker-icon/examples/3/index.ts


let TuiMarkerIconExample3 = /*#__PURE__*/(() => {
  class TuiMarkerIconExample3 {}

  TuiMarkerIconExample3.ɵfac = function TuiMarkerIconExample3_Factory(t) {
    return new (t || TuiMarkerIconExample3)();
  };

  TuiMarkerIconExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMarkerIconExample3,
    selectors: [["tui-marker-icon-example-3"]],
    decls: 5,
    vars: 0,
    consts: [["mode", "success", "size", "xs", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "success", "size", "s", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "success", "size", "m", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "success", "size", "l", "src", "tuiIconBellLarge", 1, "tui-space_right-2"], ["mode", "success", "size", "xl", "src", "tuiIconBellLarge"]],
    template: function TuiMarkerIconExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-marker-icon", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-marker-icon", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-marker-icon", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-marker-icon", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-marker-icon", 4);
      }
    },
    directives: [marker_icon_component/* TuiMarkerIconComponent */.B],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMarkerIconExample3;
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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/marker-icon/marker-icon.component.ts
















function ExampleTuiMarkerIconComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification");
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 3);
    fesm2015_core/* ɵɵelement */._UZ(6, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-marker-icon-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-marker-icon-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-marker-icon-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiMarkerIconComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiMarkerIconComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiMarkerIconComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 14);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMarkerIconComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-marker-icon", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMarkerIconComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMarkerIconComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.mode = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiMarkerIconComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMarkerIconComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiMarkerIconComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMarkerIconComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.selectedIcon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("mode", ctx_r1.mode)("src", ctx_r1.selectedIcon)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.icons)("documentationPropertyValue", ctx_r1.selectedIcon);
  }
}

function ExampleTuiMarkerIconComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 19);
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

let ExampleTuiMarkerIconComponent = /*#__PURE__*/(() => {
  class ExampleTuiMarkerIconComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 98512).then(__webpack_require__.t.bind(__webpack_require__, 98512, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 94602).then(__webpack_require__.t.bind(__webpack_require__, 94602, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 35982).then(__webpack_require__.t.bind(__webpack_require__, 35982, 17)),
        HTML: __webpack_require__.e(/* import() */ 69917).then(__webpack_require__.t.bind(__webpack_require__, 69917, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 83514).then(__webpack_require__.t.bind(__webpack_require__, 83514, 17)),
        HTML: __webpack_require__.e(/* import() */ 39331).then(__webpack_require__.t.bind(__webpack_require__, 39331, 17)),
        LESS: __webpack_require__.e(/* import() */ 12850).then(__webpack_require__.t.bind(__webpack_require__, 12850, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 29705).then(__webpack_require__.t.bind(__webpack_require__, 29705, 17)),
        HTML: __webpack_require__.e(/* import() */ 42323).then(__webpack_require__.t.bind(__webpack_require__, 42323, 17))
      };
      this.icons = [`tuiIconAttachLarge`, `tuiIconCallLarge`, `tuiIconStarLarge`];
      this.selectedIcon = this.icons[0];
      this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`];
      this.size = this.sizeVariants[2];
      this.modeVariants = [`link`, `primary`, `warning`, `white`, `secondary`, `success`, `error`];
      this.mode = null;
    }

  }

  ExampleTuiMarkerIconComponent.ɵfac = function ExampleTuiMarkerIconComponent_Factory(t) {
    return new (t || ExampleTuiMarkerIconComponent)();
  };

  ExampleTuiMarkerIconComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMarkerIconComponent,
    selectors: [["example-tui-marker-icon"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7095511926353755159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}MarkerIcon{$closeTagCode} is an SVG icon in a circle. Use {$startTagCode}mode{$closeTagCode} param to choose appearance or set it with custom styles ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_0 = MSG_EXTERNAL_7095511926353755159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟106bc5374fe451a07907f6b8ea56276582f0ae71␟7095511926353755159:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:MarkerIcon${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: is an SVG icon in a circle. Use ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:mode${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: param to choose appearance or set it with custom styles `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_207338688716590740$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__3 = goog.getMsg(" Marker icons should be 48x48px or smaller. If icon is smaller, it will be cantered. {$startTagStrong}s{$closeTagStrong} size shows an icon as it and other sizes scale it ", {
          "startTagStrong": "\uFFFD#6\uFFFD",
          "closeTagStrong": "\uFFFD/#6\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_207338688716590740$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ef2fa924a6439d92cee6138631f00c8c555598cb␟207338688716590740: Marker icons should be 48x48px or smaller. If icon is smaller, it will be cantered. ${"\uFFFD#6\uFFFD"}:START_TAG_STRONG:s${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_STRONG: size shows an icon as it and other sizes scale it `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8371303727754340196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__7 = goog.getMsg("modes");
        i18n_6 = MSG_EXTERNAL_8371303727754340196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟b3c793ea64e202cad070105ccc8293a0d07522b4␟8371303727754340196:modes`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__9 = goog.getMsg("sizes");
        i18n_8 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4966695409361187509$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___11 = goog.getMsg(" Mode ");
        i18n_10 = MSG_EXTERNAL_4966695409361187509$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟161d3e73609992b8a07f9c8f7eacdb06ea72c8e4␟4966695409361187509: Mode `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___13 = goog.getMsg(" Size ");
        i18n_12 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4275468601899207994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___15 = goog.getMsg(" An icon. It can be stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_4275468601899207994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟acedafda2219bad0373461a93b48a42684d1c408␟4275468601899207994: An icon. It can be stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3480897462782595622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiMarkerIconModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_3480897462782595622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟d1090b7f2555a0d4e3cefc0a5d8200480761d456␟3480897462782595622: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMarkerIconModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MARKER_ICON_MARKER_ICON_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "MarkerIcon", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["id", "modes", "heading", i18n_6, 3, "content"], ["id", "sizes", "heading", i18n_8, 3, "content"], [3, "mode", "src", "size"], ["documentationPropertyName", "mode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerIconModeT | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeXS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "src", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, ["tuiLink", "", "routerLink", "/services/svg-service"], [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMarkerIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMarkerIconComponent_ng_template_1_Template, 13, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMarkerIconComponent_ng_template_2_Template, 6, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMarkerIconComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiMarkerIconExample1, TuiMarkerIconExample2, TuiMarkerIconExample3, demo_component/* TuiDocDemoComponent */.F, marker_icon_component/* TuiMarkerIconComponent */.B, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    styles: [".red-icon[_ngcontent-%COMP%]{color:var(--tui-error-fill)}"],
    changeDetection: 0
  });
  return ExampleTuiMarkerIconComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/marker-icon/marker-icon.module.ts











let ExampleTuiMarkerIconModule = /*#__PURE__*/(() => {
  class ExampleTuiMarkerIconModule {}

  ExampleTuiMarkerIconModule.ɵfac = function ExampleTuiMarkerIconModule_Factory(t) {
    return new (t || ExampleTuiMarkerIconModule)();
  };

  ExampleTuiMarkerIconModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMarkerIconModule
  });
  ExampleTuiMarkerIconModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiMarkerIconModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMarkerIconComponent)), core.TuiNotificationModule]]
  });
  return ExampleTuiMarkerIconModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMarkerIconModule, {
    declarations: [ExampleTuiMarkerIconComponent, TuiMarkerIconExample1, TuiMarkerIconExample2, TuiMarkerIconExample3],
    imports: [common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiMarkerIconModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, core.TuiNotificationModule],
    exports: [ExampleTuiMarkerIconComponent]
  });
})();

/***/ })

}]);