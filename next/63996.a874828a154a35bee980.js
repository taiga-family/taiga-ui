"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[63996],{

/***/ 63996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSvgModule": () => (/* binding */ ExampleTuiSvgModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/icons/public-api.ts + 2 modules
var icons_public_api = __webpack_require__(67350);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/svg/svg.component.ts











function ExampleTuiSvgComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiSvgComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSvgComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSvgComponent_ng_template_2_ng_template_1_Template, 4, 0, "ng-template", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("isAPI", true);
  }
}

function ExampleTuiSvgComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 8);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 10);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-svg", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.injectService);
  }
}

let ExampleTuiSvgComponent = /*#__PURE__*/(() => {
  class ExampleTuiSvgComponent {
    constructor(tuiSvgService) {
      this.injectService = __webpack_require__.e(/* import() */ 91100).then(__webpack_require__.t.bind(__webpack_require__, 91100, 17));
      tuiSvgService.define({
        tuiIconTrashLarge: icons_public_api.tuiIconTrashLarge
      });
    }

  }

  ExampleTuiSvgComponent.ɵfac = function ExampleTuiSvgComponent_Factory(t) {
    return new (t || ExampleTuiSvgComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core/* TuiSvgService */.K56));
  };

  ExampleTuiSvgComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSvgComponent,
    selectors: [["example-tui-svg"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3658315716341587729$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__1 = goog.getMsg("Service to define SVG to reuse it later");
        i18n_0 = MSG_EXTERNAL_3658315716341587729$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟62442c600050ca0d3f65a2e8d29ff33d06792537␟3658315716341587729:Service to define SVG to reuse it later`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5592341393345481883$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Singleton{$closeTagStrong} you do not need to provide it, just inject into your component and use it ", {
          "startTagStrong": "\uFFFD#4\uFFFD",
          "closeTagStrong": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_5592341393345481883$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟224d7e62407a858f23f736c7dda28921be64275d␟5592341393345481883:${"\uFFFD#4\uFFFD"}:START_TAG_STRONG:Singleton${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_STRONG: you do not need to provide it, just inject into your component and use it `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_147498612382264826$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS___5 = goog.getMsg(" Method to define an icon. {$startParagraph}{$startTagStrong} Warning, name of the icon must not start with \" {$startTagCode}<{$closeTagCode} \" {$closeTagStrong}{$closeParagraph} Name should be unique. ", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_147498612382264826$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟08d10920780a916de27666a0fbc35d87636f82b8␟147498612382264826: Method to define an icon. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG: Warning, name of the icon must not start with " ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:<${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: " ${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH: Name should be unique. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4582239652724734441$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__7 = goog.getMsg(" Inject {$startTagCode}TuiSvgService{$closeTagCode} into your component and define an icon: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_4582239652724734441$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟f699abc744f26b11909ae293bc79eb53e880ccda␟4582239652724734441: Inject ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSvgService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component and define an icon: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8067431247195064069$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__9 = goog.getMsg(" Show in tempaltes with {$startTagCode}tui-svg{$closeTagCode} : ", {
          "startTagCode": "\uFFFD#8\uFFFD",
          "closeTagCode": "\uFFFD/#8\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_8067431247195064069$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟825e0155e46373afbcce08f192409261bb21285f␟8067431247195064069: Show in tempaltes with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-svg${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: : `;
      }

      return [["header", "SvgService", "package", "CORE", "path", "core/services/svg.service.ts"], ["pageTab", ""], i18n_0, i18n_2, [3, "isAPI"], ["documentationPropertyName", "define", "documentationPropertyType", "Record<string, string>"], i18n_4, [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.component.ts", 3, "code"], i18n_8, ["src", "tuiIconTrashLarge"]];
    },
    template: function ExampleTuiSvgComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSvgComponent_ng_template_1_Template, 5, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSvgComponent_ng_template_2_Template, 2, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSvgComponent_ng_template_3_Template, 11, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiSvgComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/svg/svg.module.ts







let ExampleTuiSvgModule = /*#__PURE__*/(() => {
  class ExampleTuiSvgModule {}

  ExampleTuiSvgModule.ɵfac = function ExampleTuiSvgModule_Factory(t) {
    return new (t || ExampleTuiSvgModule)();
  };

  ExampleTuiSvgModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSvgModule
  });
  ExampleTuiSvgModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core/* TuiSvgModule */.EIu, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSvgComponent))]]
  });
  return ExampleTuiSvgModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSvgModule, {
    declarations: [ExampleTuiSvgComponent],
    imports: [common/* CommonModule */.ez, core/* TuiSvgModule */.EIu, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiSvgComponent]
  });
})();

/***/ })

}]);